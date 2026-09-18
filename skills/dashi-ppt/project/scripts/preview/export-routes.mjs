// 匯出/儲存相關 API 路由(editable-pptx / pdf / save-deck-state)。從 scripts/serve-preview-https.mjs
// 拆出,邏輯逐位元組保留:僅把閉包捕獲的頂層常量(ROOT/SERVE_ROOT/EXPORT_DIR/PORT/HOST/…)
// 改為 initExportRoutes() 注入的模組內狀態,行為不變。
import { createReadStream, mkdirSync, readFileSync, realpathSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { scrubLocalPaths } from '../scrub-local-paths.mjs';
import { launchExportBrowser } from './launch-export-browser.mjs';
import { isExportRequestAllowed } from '../preview-export-auth.mjs';
import { atomicWriteFileSync, extractDataUrlMedia, isValidDeckState, mergeStateIntoIndexHtml } from '../persist-deck-state.mjs';
import { isPathInside } from './static-serve.mjs';

let ROOT;
let SERVE_ROOT;
let EXPORT_DIR;
let LEXICAL_EXPORT_DIR;
let REAL_EXPORT_DIR;
let PORT;
let HOST;
let LOCAL_HOSTNAME;
let LAN_IPS;

const EXPORT_PROGRESS = new Map();
let activeExportCount = 0;

// 由入口檔案在啟動時呼叫一次,注入執行時上下文;所有 handler 與鑑權/URL 解析函式沿用舊版
// 閉包讀取頂層常量的寫法,只是把常量來源從模組頂層 const 換成這裡的可賦值繫結。
export function initExportRoutes(config) {
  ROOT = config.root;
  SERVE_ROOT = config.serveRoot;
  EXPORT_DIR = config.exportDir;
  LEXICAL_EXPORT_DIR = config.lexicalExportDir;
  REAL_EXPORT_DIR = config.realExportDir;
  PORT = config.port;
  HOST = config.host;
  LOCAL_HOSTNAME = config.localHostname;
  LAN_IPS = config.lanIps;
}

export function getActiveExportCount() {
  return activeExportCount;
}

export async function handleEditablePptxExport(req, res) {
  let progressId = null;
  activeExportCount += 1;
  try {
    if (!isAllowedExportRequest(req)) {
      writeForbiddenExportResponse(res);
      return;
    }
    const payload = await readJsonBody(req);
    progressId = safeProgressId(payload.progressId);
    updateExportProgress(progressId, { stage: 'queued', detail: '伺服器端接收匯出請求', percent: 4 });
    const [{ chromium }, { exportEditablePptxFromUrl }] = await Promise.all([
      import('playwright-core'),
      import('../../packages/html-deck-to-pptx/src/editable.mjs'),
    ]);
    updateExportProgress(progressId, { stage: 'launching', detail: '啟動匯出瀏覽器', percent: 6 });
    const browser = await launchExportBrowser(chromium, {
      fallbackTmpDirs: [path.join(EXPORT_DIR, '.browser-tmp')],
      log: message => console.warn(message),
    });
    const baseName = `${timestampForFile()}-${safeDownloadName(payload.fileName || 'presentation')}`;
    const outFile = path.join(EXPORT_DIR, `${baseName}.pptx`);
    const reportFile = path.join(EXPORT_DIR, `${baseName}.json`);
    try {
      const url = buildInternalPreviewUrl(req, payload.sourcePath);
      await exportEditablePptxFromUrl(browser, url, {
        outFile,
        reportFile,
        title: payload.title || 'Editable Deck Export',
        snapshot: payload.snapshot || null,
        onProgress: update => updateExportProgress(progressId, update),
      });
    } finally {
      await closeBrowser(browser);
    }
    updateExportProgress(progressId, { stage: 'download-ready', detail: '準備瀏覽器下載', percent: 100, done: true });

    res.writeHead(200, {
      'content-type': 'application/json;charset=utf-8',
      'cache-control': 'no-store',
    });
    res.end(JSON.stringify({
      ok: true,
      relativePath: path.relative(ROOT, outFile),
      reportRelativePath: path.relative(ROOT, reportFile),
      downloadUrl: `/api/export-editable-pptx-download?file=${encodeURIComponent(path.basename(outFile))}`,
      downloadName: path.basename(outFile),
    }));
  } catch (error) {
    const message = publicErrorMessage(error, 'Editable PPTX export failed');
    updateExportProgress(progressId, { stage: 'failed', detail: message, percent: 100, done: true, error: true });
    console.error('[editable pptx export]', error);
    res.writeHead(500, { 'content-type': 'application/json;charset=utf-8', 'cache-control': 'no-store' });
    res.end(JSON.stringify({ error: message }));
  } finally {
    activeExportCount -= 1;
  }
}

// 編輯自動回寫:預覽執行時(template-swiss.html)每次編輯後防抖 POST 這裡,把 view-model
// state 燒回它自己正在服務的 index.html,並把 state 裡的 data: 媒體落盤成 assets/user-media/
// 檔案。同源鑑權複用匯出端點那一套(isAllowedExportRequest);不是匯出,不計入 activeExportCount
// / 不產生進度輪詢。
export async function handleSaveDeckState(req, res) {
  if (!isAllowedExportRequest(req)) {
    writeForbiddenExportResponse(res);
    return;
  }
  let payload;
  try {
    payload = await readJsonBody(req);
  } catch (error) {
    res.writeHead(400, { 'content-type': 'application/json;charset=utf-8', 'cache-control': 'no-store' });
    res.end(JSON.stringify({ error: 'Malformed JSON body' }));
    return;
  }
  if (!isValidDeckState(payload?.state)) {
    res.writeHead(400, { 'content-type': 'application/json;charset=utf-8', 'cache-control': 'no-store' });
    res.end(JSON.stringify({ error: 'Malformed deck state' }));
    return;
  }
  try {
    const indexFile = path.join(SERVE_ROOT, 'index.html');
    const html = readFileSync(indexFile, 'utf8');
    const { state: resolvedState, written, mediaMap } = extractDataUrlMedia(payload.state, SERVE_ROOT);
    const nextHtml = mergeStateIntoIndexHtml(html, resolvedState);
    atomicWriteFileSync(indexFile, nextHtml);
    res.writeHead(200, { 'content-type': 'application/json;charset=utf-8', 'cache-control': 'no-store' });
    // `state` 回顯僅供除錯/指令碼化呼叫方核對;template-swiss.html 的執行時不使用它做整體覆蓋
    // (會沖掉儲存期間發生的新編輯),只消費 `mediaMap` 做精確字串替換——見 persist-deck-state.mjs
    // 頂部註釋。
    res.end(JSON.stringify({ ok: true, state: resolvedState, mediaWritten: written, mediaMap }));
  } catch (error) {
    const message = publicErrorMessage(error, 'Save failed');
    console.error('[save-deck-state]', error);
    res.writeHead(500, { 'content-type': 'application/json;charset=utf-8', 'cache-control': 'no-store' });
    res.end(JSON.stringify({ error: message }));
  }
}

export async function handlePdfExport(req, res) {
  let progressId = null;
  activeExportCount += 1;
  try {
    if (!isAllowedExportRequest(req)) {
      writeForbiddenExportResponse(res);
      return;
    }
    const payload = await readJsonBody(req);
    progressId = safeProgressId(payload.progressId);
    updateExportProgress(progressId, { stage: 'queued', detail: '伺服器端接收 PDF 匯出請求', percent: 4 });
    const [{ chromium }, { exportScreenshotPdfFromUrl }] = await Promise.all([
      import('playwright-core'),
      import('../../packages/html-deck-to-pptx/src/screenshot.mjs'),
    ]);
    updateExportProgress(progressId, { stage: 'launching', detail: '啟動截圖瀏覽器', percent: 6 });
    const browser = await launchExportBrowser(chromium, {
      fallbackTmpDirs: [path.join(EXPORT_DIR, '.browser-tmp')],
      log: message => console.warn(message),
    });
    const baseName = `${timestampForFile()}-${safeDownloadName(payload.fileName || 'presentation')}`;
    const outFile = path.join(EXPORT_DIR, `${baseName}.pdf`);
    const reportFile = path.join(EXPORT_DIR, `${baseName}.pdf.json`);
    let result;
    try {
      const url = buildInternalPreviewUrl(req, payload.sourcePath);
      result = await exportScreenshotPdfFromUrl(browser, url, {
        outFile,
        reportFile,
        title: payload.title || 'Deck PDF Export',
        snapshot: payload.snapshot || null,
        batchSize: payload.batchSize,
        onProgress: update => updateExportProgress(progressId, update),
      });
    } finally {
      await closeBrowser(browser);
    }
    updateExportProgress(progressId, { stage: 'download-ready', detail: '準備瀏覽器下載', percent: 100, done: true });

    res.writeHead(200, {
      'content-type': 'application/json;charset=utf-8',
      'cache-control': 'no-store',
    });
    res.end(JSON.stringify({
      ok: true,
      screenshot: true,
      relativePath: path.relative(ROOT, outFile),
      reportRelativePath: path.relative(ROOT, reportFile),
      downloadUrl: `/api/export-pdf-download?file=${encodeURIComponent(path.basename(outFile))}`,
      downloadName: path.basename(outFile),
      pages: result.pages,
      generationMode: result.generationMode,
      batchSize: result.batchSize,
      slideReports: result.slideReports,
    }));
  } catch (error) {
    const message = publicErrorMessage(error, 'PDF export failed');
    updateExportProgress(progressId, { stage: 'failed', detail: message, percent: 100, done: true, error: true });
    console.error('[pdf export]', error);
    res.writeHead(500, { 'content-type': 'application/json;charset=utf-8', 'cache-control': 'no-store' });
    res.end(JSON.stringify({ error: message }));
  } finally {
    activeExportCount -= 1;
  }
}

// 瀏覽器端截圖 PDF 的伺服器端合成端點:沙箱型宿主(如豆包)裡,daemonize 的服務程式
// 無法啟動任何 Chromium(Mach 註冊/顯示服務被宿主 seatbelt 攔截,見
// launch-export-browser.mjs 的分層說明)。此時前端把每頁用 html-to-image 在「使用者
// 自己的瀏覽器」裡截成 dataURL 上傳,這裡用 pdf-lib(純 JS,無瀏覽器依賴)合成 PDF——
// 使用者瀏覽器是正常桌面程式,不受宿主沙箱影響,這條兜底對任何沙箱形態免疫。
// 瀏覽器端可編輯 PPTX 的落盤端點:前端在使用者瀏覽器裡完成採集/截圖/組裝後,把
// PPTX 二進位制 POST 過來,這裡只做寫盤並返回與常規匯出一致的下載結構——伺服器端全程
// 不需要瀏覽器,對宿主沙箱免疫(與 /api/export-pdf-assemble 同一架構)。
export async function handlePptxStore(req, res, requestUrl) {
  activeExportCount += 1;
  try {
    if (!isAllowedExportRequest(req)) {
      writeForbiddenExportResponse(res);
      return;
    }
    const bytes = await readBinaryBody(req, 300 * 1024 * 1024);
    if (!bytes.length || bytes.length < 4 || bytes[0] !== 0x50 || bytes[1] !== 0x4b) {
      throw new Error('請求體不是有效的 PPTX(zip)資料。');
    }
    const fileName = requestUrl.searchParams.get('fileName') || 'presentation';
    const baseName = `${timestampForFile()}-${safeDownloadName(fileName)}`;
    const outFile = path.join(EXPORT_DIR, `${baseName}.pptx`);
    mkdirSync(path.dirname(outFile), { recursive: true });
    writeFileSync(outFile, bytes);
    res.writeHead(200, { 'content-type': 'application/json;charset=utf-8', 'cache-control': 'no-store' });
    res.end(JSON.stringify({
      ok: true,
      browserCapture: true,
      relativePath: path.relative(ROOT, outFile),
      downloadUrl: `/api/export-editable-pptx-download?file=${encodeURIComponent(path.basename(outFile))}`,
      downloadName: path.basename(outFile),
    }));
  } catch (error) {
    const message = publicErrorMessage(error, 'PPTX store failed');
    console.error('[pptx store]', error);
    res.writeHead(500, { 'content-type': 'application/json;charset=utf-8', 'cache-control': 'no-store' });
    res.end(JSON.stringify({ error: message }));
  } finally {
    activeExportCount -= 1;
  }
}

function readBinaryBody(req, maxBytes) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', chunk => {
      size += chunk.length;
      if (size > maxBytes) {
        reject(new Error('Request body is too large.'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export async function handlePdfAssemble(req, res) {
  activeExportCount += 1;
  try {
    if (!isAllowedExportRequest(req)) {
      writeForbiddenExportResponse(res);
      return;
    }
    const payload = await readJsonBody(req);
    const pages = Array.isArray(payload.pages) ? payload.pages : [];
    if (!pages.length || pages.length > 500) {
      throw new Error('pages 必須是 1-500 張 png/jpeg dataURL。');
    }
    const { PDFDocument } = await import('pdf-lib');
    const pdf = await PDFDocument.create();
    pdf.setTitle(String(payload.title || 'Deck PDF Export'));
    pdf.setAuthor('Dashi PPT');
    pdf.setSubject('Browser-captured PDF export');
    const PDF_W = 16 * 72;
    const PDF_H = 9 * 72;
    for (const dataUrl of pages) {
      const match = /^data:image\/(png|jpeg);base64,([A-Za-z0-9+/=]+)$/.exec(String(dataUrl || ''));
      if (!match) throw new Error('pages 中存在無法識別的圖片資料(僅支援 png/jpeg dataURL)。');
      const bytes = Buffer.from(match[2], 'base64');
      const image = match[1] === 'png' ? await pdf.embedPng(bytes) : await pdf.embedJpg(bytes);
      const page = pdf.addPage([PDF_W, PDF_H]);
      page.drawImage(image, { x: 0, y: 0, width: PDF_W, height: PDF_H });
    }
    const baseName = `${timestampForFile()}-${safeDownloadName(payload.fileName || 'presentation')}`;
    const outFile = path.join(EXPORT_DIR, `${baseName}.pdf`);
    mkdirSync(path.dirname(outFile), { recursive: true });
    writeFileSync(outFile, Buffer.from(await pdf.save()));
    res.writeHead(200, {
      'content-type': 'application/json;charset=utf-8',
      'cache-control': 'no-store',
    });
    res.end(JSON.stringify({
      ok: true,
      screenshot: true,
      browserCapture: true,
      relativePath: path.relative(ROOT, outFile),
      downloadUrl: `/api/export-pdf-download?file=${encodeURIComponent(path.basename(outFile))}`,
      downloadName: path.basename(outFile),
      pages: pages.length,
      generationMode: 'browser-capture',
    }));
  } catch (error) {
    const message = publicErrorMessage(error, 'PDF assemble failed');
    console.error('[pdf assemble]', error);
    res.writeHead(500, { 'content-type': 'application/json;charset=utf-8', 'cache-control': 'no-store' });
    res.end(JSON.stringify({ error: message }));
  } finally {
    activeExportCount -= 1;
  }
}

export function handlePdfProgress(req, res, requestUrl) {
  if (!isAllowedExportRequest(req)) {
    writeForbiddenExportResponse(res);
    return;
  }
  const id = safeProgressId(requestUrl.searchParams.get('id'));
  const state = id ? EXPORT_PROGRESS.get(id) : null;
  res.writeHead(200, {
    'content-type': 'application/json;charset=utf-8',
    'cache-control': 'no-store',
  });
  res.end(JSON.stringify(state || { stage: 'pending', detail: '等待伺服器端進度', percent: 0, done: false }));
}

export function handlePdfDownload(req, res, requestUrl) {
  if (!isAllowedExportRequest(req)) {
    writeForbiddenExportResponse(res);
    return;
  }
  const name = path.basename(requestUrl.searchParams.get('file') || '');
  if (!name || !/\.pdf$/i.test(name)) {
    res.writeHead(404, { 'content-type': 'text/plain;charset=utf-8', 'cache-control': 'no-store' });
    res.end('Not found');
    return;
  }
  const file = resolveExportFile(name, '.pdf');
  if (!file) {
    res.writeHead(404, { 'content-type': 'text/plain;charset=utf-8', 'cache-control': 'no-store' });
    res.end('Not found');
    return;
  }
  let stat;
  try {
    stat = statSync(file);
    if (!stat.isFile()) throw new Error('not-file');
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain;charset=utf-8', 'cache-control': 'no-store' });
    res.end('Not found');
    return;
  }
  res.writeHead(200, {
    'content-type': 'application/pdf',
    'content-length': stat.size,
    'content-disposition': `attachment; filename="${asciiDownloadName(name)}"; filename*=UTF-8''${encodeRFC5987(name)}`,
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff',
  });
  if (req.method === 'HEAD') {
    res.end();
    return;
  }
  createReadStream(file).pipe(res);
}

export function handleEditablePptxProgress(req, res, requestUrl) {
  if (!isAllowedExportRequest(req)) {
    writeForbiddenExportResponse(res);
    return;
  }
  const id = safeProgressId(requestUrl.searchParams.get('id'));
  const state = id ? EXPORT_PROGRESS.get(id) : null;
  res.writeHead(200, {
    'content-type': 'application/json;charset=utf-8',
    'cache-control': 'no-store',
  });
  res.end(JSON.stringify(state || { stage: 'pending', detail: '等待伺服器端進度', percent: 0, done: false }));
}

export function handleEditablePptxDownload(req, res, requestUrl) {
  if (!isAllowedExportRequest(req)) {
    writeForbiddenExportResponse(res);
    return;
  }
  const name = path.basename(requestUrl.searchParams.get('file') || '');
  if (!name || !/\.pptx$/i.test(name)) {
    res.writeHead(404, { 'content-type': 'text/plain;charset=utf-8', 'cache-control': 'no-store' });
    res.end('Not found');
    return;
  }
  const file = resolveExportFile(name, '.pptx');
  if (!file) {
    res.writeHead(404, { 'content-type': 'text/plain;charset=utf-8', 'cache-control': 'no-store' });
    res.end('Not found');
    return;
  }
  let stat;
  try {
    stat = statSync(file);
    if (!stat.isFile()) throw new Error('not-file');
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain;charset=utf-8', 'cache-control': 'no-store' });
    res.end('Not found');
    return;
  }
  res.writeHead(200, {
    'content-type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'content-length': stat.size,
    'content-disposition': `attachment; filename="${asciiDownloadName(name)}"; filename*=UTF-8''${encodeRFC5987(name)}`,
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff',
  });
  if (req.method === 'HEAD') {
    res.end();
    return;
  }
  createReadStream(file).pipe(res);
}

function asciiDownloadName(value) {
  return String(value || 'presentation.pptx').replace(/[^\x20-\x7e]+/g, '_').replace(/["\\]/g, '_') || 'presentation.pptx';
}

function encodeRFC5987(value) {
  return encodeURIComponent(value).replace(/['()*]/g, char => `%${char.charCodeAt(0).toString(16).toUpperCase()}`);
}

function resolveExportFile(name, ext) {
  if (!name || path.basename(name) !== name || path.extname(name).toLowerCase() !== ext) return null;
  const resolved = path.resolve(EXPORT_DIR, name);
  if (!isPathInside(LEXICAL_EXPORT_DIR, resolved) && !isPathInside(REAL_EXPORT_DIR, resolved)) return null;
  try {
    const real = realpathSync(resolved);
    return isPathInside(REAL_EXPORT_DIR, real) ? real : null;
  } catch {
    return null;
  }
}

export function isAllowedExportRequest(req) {
  const allowedHosts = ['localhost', '127.0.0.1', '[::1]', `${LOCAL_HOSTNAME}.local`, ...LAN_IPS];
  const allowed = new Set(allowedHosts.flatMap(host => [
    `http://${host}:${PORT}`,
    `https://${host}:${PORT}`,
  ]));
  return isExportRequestAllowed({ origin: req.headers.origin, referer: req.headers.referer, host: HOST, allowedOrigins: allowed });
}

export function buildInternalPreviewUrl(req, sourcePath, config = {}) {
  const origin = resolveInternalPreviewOrigin(req, config);
  return new URL(normalizeInternalPreviewPath(sourcePath), origin).href;
}

export function normalizeInternalPreviewPath(sourcePath) {
  if (typeof sourcePath !== 'string') return '/';
  try {
    const base = 'https://preview.local';
    const url = new URL(sourcePath, base);
    if (url.origin !== base) return '/';
    return `${url.pathname}${url.search}` || '/';
  } catch {
    return '/';
  }
}

export function resolveInternalPreviewOrigin(req, config = {}) {
  const port = Number(config.port || PORT);
  const boundHost = config.boundHost || HOST;
  const localHostname = config.localHostname || LOCAL_HOSTNAME;
  const lanIps = config.lanIps || LAN_IPS;
  const origin = originFromHeader(req?.headers?.origin);
  if (origin && isAllowedInternalPreviewHost(origin.host, { port, boundHost, localHostname, lanIps })) return origin.origin;

  const host = String(req?.headers?.host || '').trim();
  if (host && isAllowedInternalPreviewHost(host, { port, boundHost, localHostname, lanIps })) {
    const protocol = req?.socket?.encrypted ? 'https:' : (origin?.protocol || 'https:');
    return `${protocol}//${host}`;
  }
  throw new Error('Export request host is not reachable by the preview server.');
}

export function allowedInternalPreviewHosts(config = {}) {
  const port = Number(config.port || PORT);
  const boundHost = config.boundHost || HOST;
  const localHostname = config.localHostname || LOCAL_HOSTNAME;
  const lanIps = config.lanIps || LAN_IPS;
  return new Set(['localhost', '127.0.0.1', '::1', `${localHostname}.local`, boundHost, ...lanIps]
    .filter(Boolean)
    .flatMap(host => {
      const normalized = hostWithoutPort(host);
      if (!normalized || normalized === '0.0.0.0' || normalized === '::') return [];
      return [`${normalized}:${port}`];
    }));
}

export function originFromHeader(value) {
  if (!value) return null;
  try {
    const origin = new URL(value);
    return origin.protocol === 'http:' || origin.protocol === 'https:' ? origin : null;
  } catch {
    return null;
  }
}

export function hostWithoutPort(value) {
  const host = String(value || '').trim().toLowerCase();
  if (!host) return '';
  if (host.startsWith('[')) return host.slice(1, host.indexOf(']'));
  const parts = host.split(':');
  return parts.length > 2 ? host : parts[0];
}

export function hostWithPort(value, port) {
  const host = String(value || '').trim().toLowerCase();
  const normalized = hostWithoutPort(host);
  if (!normalized) return '';
  if (host.startsWith('[')) {
    const suffix = host.slice(host.indexOf(']') + 1);
    return `${normalized}:${suffix.startsWith(':') ? suffix.slice(1) : port}`;
  }
  const parts = host.split(':');
  return parts.length === 2 ? `${normalized}:${parts[1]}` : `${normalized}:${port}`;
}

export function isAllowedInternalPreviewHost(host, config = {}) {
  const port = Number(config.port || PORT);
  const withPort = hostWithPort(host, port);
  return Boolean(withPort) && allowedInternalPreviewHosts(config).has(withPort);
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', chunk => {
      size += chunk.length;
      if (size > 80 * 1024 * 1024) {
        reject(new Error('Request body is too large.'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'));
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

function safeDownloadName(value) {
  return String(value || 'presentation')
    .replace(/[\\/:*?"<>|]+/g, '')
    .replace(/\s+/g, '-')
    .trim()
    .slice(0, 80) || 'presentation';
}

function safeProgressId(value) {
  const id = String(value || '').trim();
  return /^[a-zA-Z0-9._-]{1,120}$/.test(id) ? id : null;
}

function updateExportProgress(id, update = {}) {
  if (!id) return;
  const previous = EXPORT_PROGRESS.get(id) || {};
  const next = {
    stage: update.stage || previous.stage || 'working',
    detail: scrubLocalPaths(update.detail || previous.detail || '正在生成可編輯 PPTX'),
    percent: Math.max(0, Math.min(100, Math.round(Number(update.percent ?? previous.percent ?? 0)))),
    done: Boolean(update.done || false),
    error: Boolean(update.error || false),
    updatedAt: new Date().toISOString(),
  };
  EXPORT_PROGRESS.set(id, next);
  if (next.done) {
    setTimeout(() => EXPORT_PROGRESS.delete(id), 15 * 60 * 1000).unref?.();
  }
}

// 403 時給可行動的提示,而不是讓呼叫方去猜:說明鑑權要求,並指出指令碼化呼叫的替代路徑。
function writeForbiddenExportResponse(res) {
  res.writeHead(403, { 'content-type': 'application/json;charset=utf-8', 'cache-control': 'no-store' });
  res.end(JSON.stringify({
    error: 'Forbidden export origin',
    hint: '匯出介面要求同源 Origin 或 Referer 頭(從預覽頁面裡點匯出即可);指令碼化/無頭呼叫請改用 `npm run export:pptx -- <deck>/ppt <out.pptx>`(PDF 用 `export:pdf`),無需先起瀏覽器會話。',
  }));
}

function publicErrorMessage(error, fallback) {
  return scrubLocalPaths(error?.message || fallback);
}

function timestampForFile() {
  return new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, '');
}

async function closeBrowser(browser) {
  if (!browser) return;
  const close = browser.close().catch(() => {});
  const result = await Promise.race([
    close.then(() => 'closed'),
    new Promise(resolve => setTimeout(() => resolve('timeout'), 5000)),
  ]);
  if (result === 'timeout') {
    try { browser.process?.()?.kill?.('SIGKILL'); } catch {}
  }
}
