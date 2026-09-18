#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, realpathSync, createReadStream, rmSync } from 'node:fs';
import { createGzip } from 'node:zlib';
import http from 'node:http';
import path from 'node:path';
import tls from 'node:tls';
import { getOpenSslExecutablePath } from './openssl-path.mjs';
import { ensureThemePreviewFresh } from './preview-freshness.mjs';
import { safePathname } from './preview-path.mjs';
import { isLoopbackHost } from './preview-export-auth.mjs';
import { getLocalHostname, getLanIps } from './preview/network.mjs';
import { ensureCertificate as ensureCertificateImpl, createHttpHttpsMuxServer } from './preview/tls.mjs';
import { createFileResolver, hasBlockedDotSegment, contentType } from './preview/static-serve.mjs';
import {
  initExportRoutes,
  getActiveExportCount,
  handleEditablePptxExport,
  handleEditablePptxProgress,
  handleEditablePptxDownload,
  handleSaveDeckState,
  handlePdfExport,
  handlePdfAssemble,
  handlePptxStore,
  handlePdfProgress,
  handlePdfDownload,
} from './preview/export-routes.mjs';
import { ensureUsableTmpdir } from './preview/ensure-tmpdir.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');

// 啟動即校驗一次 tmpdir(宿主沙箱環境啟動的場景);執行中被清理的場景由匯出路由再兜一次。
ensureUsableTmpdir(message => console.warn(message));
// 相對路徑按呼叫方目錄解析:npm run(含 --prefix)會把指令碼 cwd 切到專案根,INIT_CWD 才是使用者所在目錄。
// 未顯式傳參時的預設值仍錨定專案根(內部除錯預覽目錄),不隨呼叫方目錄漂移;絕對路徑入參(常見於
// start-preview-server.mjs 已完成解析後 spawn 傳入)不受 CALLER_CWD 影響。
const CALLER_CWD = process.env.INIT_CWD || process.cwd();
const SERVE_ROOT_ARG = process.argv[2];
const SERVE_ROOT = SERVE_ROOT_ARG
  ? path.resolve(CALLER_CWD, SERVE_ROOT_ARG)
  : path.resolve(ROOT, 'output/theme-preview/ppt');
const PORT = Number(process.env.PORT || process.argv[3] || 4178);
const HOST = process.env.HOST || '127.0.0.1';
const LOCAL_HOSTNAME = getLocalHostname();
const LAN_IPS = getLanIps();
const CERT_DIR = path.join(ROOT, 'output/https-preview');
const CERT_META = path.join(CERT_DIR, 'cert-meta.json');
const CERT_KEY = path.join(CERT_DIR, 'localhost-key.pem');
const CERT_FILE = path.join(CERT_DIR, 'localhost-cert.pem');
const EXPORT_DIR = path.join(ROOT, 'output/exports');
const INTERNAL_PREVIEW_FILES = new Set(['.preview-server.json', '.preview-server.log']);
const LEXICAL_SERVE_ROOT = path.resolve(SERVE_ROOT);
const LEXICAL_EXPORT_DIR = path.resolve(EXPORT_DIR);

// 空閒自退:長期無人訪問的預覽服務不應無限期佔用埠/程式。有進行中匯出任務時不退。
// DASHI_PPT_PREVIEW_IDLE_MS 是僅測試用的毫秒級後門,優先於 DASHI_PPT_PREVIEW_IDLE_HOURS。
// DASHI_PPT_PREVIEW_IDLE_CHECK_MS 同樣僅測試用,覆蓋檢查間隔以加速回歸測試。
const IDLE_LIMIT_MS = resolveIdleLimitMs();
const IDLE_CHECK_INTERVAL_MS = resolveIdleCheckIntervalMs(IDLE_LIMIT_MS);
let lastActivityAt = Date.now();

function resolveIdleLimitMs() {
  const msOverride = Number(process.env.DASHI_PPT_PREVIEW_IDLE_MS);
  if (Number.isFinite(msOverride) && msOverride >= 0) return msOverride;
  const hoursRaw = process.env.DASHI_PPT_PREVIEW_IDLE_HOURS;
  const hours = hoursRaw === undefined ? 4 : Number(hoursRaw);
  if (!Number.isFinite(hours) || hours <= 0) return 0;
  return hours * 60 * 60 * 1000;
}

function resolveIdleCheckIntervalMs(idleLimitMs) {
  const override = Number(process.env.DASHI_PPT_PREVIEW_IDLE_CHECK_MS);
  if (Number.isFinite(override) && override > 0) return override;
  if (idleLimitMs > 0) return Math.max(1000, Math.min(5 * 60 * 1000, Math.floor(idleLimitMs / 4)));
  return 5 * 60 * 1000;
}

function noteActivity() {
  lastActivityAt = Date.now();
}

function checkIdleExit() {
  if (IDLE_LIMIT_MS <= 0) return;
  if (getActiveExportCount() > 0) return;
  const idleForMs = Date.now() - lastActivityAt;
  if (idleForMs < IDLE_LIMIT_MS) return;
  console.log(`[preview] idle for ${(idleForMs / 60000).toFixed(1)}m (limit ${(IDLE_LIMIT_MS / 60000).toFixed(1)}m); shutting down`);
  cleanupOwnStateFile();
  process.exit(0);
}

function cleanupOwnStateFile() {
  const stateFile = path.join(SERVE_ROOT, '.preview-server.json');
  try {
    const state = JSON.parse(readFileSync(stateFile, 'utf8'));
    if (Number(state.pid) === process.pid) rmSync(stateFile, { force: true });
  } catch {}
}

ensureThemePreviewFresh({ serveRoot: SERVE_ROOT });

if (!existsSync(path.join(SERVE_ROOT, 'index.html'))) {
  console.error(`Preview index.html not found: ${displayPath(path.join(SERVE_ROOT, 'index.html'))}`);
  process.exit(1);
}
const REAL_SERVE_ROOT = realpathSync(SERVE_ROOT);
mkdirSync(EXPORT_DIR, { recursive: true });
const REAL_EXPORT_DIR = realpathSync(EXPORT_DIR);
const resolveFile = createFileResolver({ lexicalServeRoot: LEXICAL_SERVE_ROOT, realServeRoot: REAL_SERVE_ROOT });

initExportRoutes({
  root: ROOT,
  serveRoot: SERVE_ROOT,
  exportDir: EXPORT_DIR,
  lexicalExportDir: LEXICAL_EXPORT_DIR,
  realExportDir: REAL_EXPORT_DIR,
  port: PORT,
  host: HOST,
  localHostname: LOCAL_HOSTNAME,
  lanIps: LAN_IPS,
});

ensureCertificate();

const serveRequest = async (req, res) => {
  const requestUrl = new URL(req.url || '/', 'https://local.invalid');
  if (req.method === 'POST' && requestUrl.pathname === '/api/export-editable-pptx') {
    await handleEditablePptxExport(req, res);
    return;
  }
  if (req.method === 'GET' && requestUrl.pathname === '/api/export-editable-pptx-progress') {
    handleEditablePptxProgress(req, res, requestUrl);
    return;
  }
  if ((req.method === 'GET' || req.method === 'HEAD') && requestUrl.pathname === '/api/export-editable-pptx-download') {
    handleEditablePptxDownload(req, res, requestUrl);
    return;
  }
  if (req.method === 'POST' && requestUrl.pathname === '/api/save-deck-state') {
    await handleSaveDeckState(req, res);
    return;
  }
  if (req.method === 'POST' && requestUrl.pathname === '/api/export-pdf-assemble') {
    await handlePdfAssemble(req, res);
    return;
  }
  if (req.method === 'POST' && requestUrl.pathname === '/api/export-pptx-store') {
    await handlePptxStore(req, res, requestUrl);
    return;
  }
  if (req.method === 'POST' && requestUrl.pathname === '/api/export-pdf') {
    await handlePdfExport(req, res);
    return;
  }
  if (req.method === 'GET' && requestUrl.pathname === '/api/export-pdf-progress') {
    handlePdfProgress(req, res, requestUrl);
    return;
  }
  if ((req.method === 'GET' || req.method === 'HEAD') && requestUrl.pathname === '/api/export-pdf-download') {
    handlePdfDownload(req, res, requestUrl);
    return;
  }

  const pathname = safePathname(req.url || '/');
  if (pathname === null) {
    res.writeHead(400, { 'content-type': 'text/plain;charset=utf-8' });
    res.end('Bad request');
    return;
  }
  if (pathname === '.image-slots.state.json') {
    const requested = path.join(SERVE_ROOT, '.image-slots.state.json');
    const file = resolveFile(requested);
    if (file) {
      res.writeHead(200, {
        'content-type': contentType(file),
        'cache-control': 'no-store',
      });
      createReadStream(file).pipe(res);
      return;
    }
    if (existsSync(requested)) {
      res.writeHead(404, { 'content-type': 'text/plain;charset=utf-8', 'cache-control': 'no-store' });
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'content-type': 'application/json;charset=utf-8', 'cache-control': 'no-store' });
    res.end('{}');
    return;
  }
  if (hasBlockedDotSegment(pathname, INTERNAL_PREVIEW_FILES)) {
    res.writeHead(404, { 'content-type': 'text/plain;charset=utf-8', 'cache-control': 'no-store' });
    res.end('Not found');
    return;
  }
  const requested = path.join(SERVE_ROOT, pathname === '/' ? 'index.html' : pathname);
  const file = resolveFile(requested);

  if (!file) {
    res.writeHead(404, { 'content-type': 'text/plain;charset=utf-8' });
    res.end('Not found');
    return;
  }

  // 文字資產按需 gzip:index.html/imported-theme-runtime.js 等可省 70%+ 傳輸量;字型/圖片/影片不壓。
  const compressible = /\.(html|js|mjs|json|css|svg|txt)$/i.test(file);
  if (compressible && /\bgzip\b/i.test(String(req.headers['accept-encoding'] || ''))) {
    res.writeHead(200, {
      'content-type': contentType(file),
      'cache-control': 'no-store',
      'content-encoding': 'gzip',
      vary: 'accept-encoding',
    });
    createReadStream(file).pipe(createGzip()).pipe(res);
    return;
  }
  res.writeHead(200, {
    'content-type': contentType(file),
    'cache-control': 'no-store',
  });
  createReadStream(file).pipe(res);
};

// 頂層兜底:任何處理異常都不得讓程式崩潰(請求監聽器是 async,未捕獲即 unhandledRejection)。
const requestHandler = async (req, res) => {
  noteActivity();
  try {
    await serveRequest(req, res);
  } catch (error) {
    console.error('[preview] request failed:', error?.message || error);
    if (res.headersSent) {
      res.destroy();
      return;
    }
    res.writeHead(400, { 'content-type': 'text/plain;charset=utf-8' });
    res.end('Bad request');
  }
};

const httpServer = http.createServer(requestHandler);
const secureContext = tls.createSecureContext({
  key: readFileSync(CERT_KEY),
  cert: readFileSync(CERT_FILE),
});
const server = createHttpHttpsMuxServer(httpServer, secureContext);

server.listen(PORT, HOST, () => {
  const httpPrimary = `http://${LOCAL_HOSTNAME}.local:${PORT}/`;
  const httpsPrimary = `https://${LOCAL_HOSTNAME}.local:${PORT}/`;
  const urls = isLoopbackHost(HOST)
    ? [`http://localhost:${PORT}/`, `https://localhost:${PORT}/`]
    : [httpPrimary, httpsPrimary, ...LAN_IPS.flatMap((ip) => [`http://${ip}:${PORT}/`, `https://${ip}:${PORT}/`])];
  console.log(`HTTP/HTTPS preview serving ${displayPath(SERVE_ROOT)}`);
  console.log(`Open: ${urls.join(' or ')}`);
  if (!isLoopbackHost(HOST)) {
    console.warn(`[preview] 警告:繫結在 ${HOST}(非迴環),預覽/匯出對區域網可達。匯出端點要求請求帶允許的 Origin。`);
  }
  if (IDLE_LIMIT_MS > 0) {
    console.log(`[preview] idle auto-exit enabled: ${(IDLE_LIMIT_MS / 60000).toFixed(1)}m`);
  }
});

// unref:空閒檢查定時器不應阻止程式在其他條件下正常退出(例如收到訊號)。
const idleCheckTimer = IDLE_LIMIT_MS > 0 ? setInterval(checkIdleExit, IDLE_CHECK_INTERVAL_MS) : null;
idleCheckTimer?.unref?.();

function ensureCertificate() {
  ensureCertificateImpl({
    certDir: CERT_DIR,
    certMetaFile: CERT_META,
    certKeyFile: CERT_KEY,
    certFile: CERT_FILE,
    localHostname: LOCAL_HOSTNAME,
    lanIps: LAN_IPS,
    opensslPath: getOpenSslExecutablePath(),
  });
}

function displayPath(file) {
  const relative = path.relative(process.cwd(), file);
  return relative && !relative.startsWith('..') && !path.isAbsolute(relative) ? relative : path.basename(file);
}
