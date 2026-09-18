// 預覽服務"編輯自動回寫"的核心邏輯:純函式 + 少量檔案系統副作用,便於不起 HTTP 服務單測。
// 呼叫方(scripts/serve-preview-https.mjs)只負責鑑權/HTTP 收發,這裡只管三件事:
//   1) 校驗執行時上報的 state 形狀(拒絕畸形請求)。
//   2) 把 state.props 裡的 data: 媒體解碼落盤到 assets/user-media/,state 裡替換成相對路徑。
//   3) 把新 state 原子寫回 index.html 既有的 `#deck-view-model` script 塊,不改其餘欄位。
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { generateVideoPoster } from './stage-media.mjs';
import { mediaFormatForMime } from './media-formats.mjs';

const DECK_VIEW_MODEL_BLOCK = /<script id="deck-view-model" type="application\/json">([\s\S]*?)<\/script>/;

// 執行時上報的 state 只允許這幾個已知欄位,形狀必須匹配;其餘一律視為畸形請求直接拒絕,
// 不做"儘量相容"的靜默丟棄——寫壞 index.html 比拒絕一次自動儲存代價更大。
export function isValidDeckState(state) {
  if (!state || typeof state !== 'object' || Array.isArray(state)) return false;
  const arrayFields = ['slideOrder', 'skippedSlides', 'deletedSlides', 'duplicatedSlides'];
  for (const field of arrayFields) {
    if (state[field] !== undefined && !Array.isArray(state[field])) return false;
  }
  const objectFields = ['text', 'props', 'variantSelection'];
  for (const field of objectFields) {
    if (state[field] !== undefined && !isPlainObject(state[field])) return false;
  }
  if (
    state.variantSelection !== undefined
    && Object.values(state.variantSelection).some(value => typeof value !== 'string' || !value.trim())
  ) return false;
  return true;
}

function isPlainObject(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

// data:<mime>;base64,<payload> 解碼;非 image/* 或 video/* 一律返回 null(不落盤、原樣保留)。
function decodeDataUrl(value) {
  if (typeof value !== 'string' || !value.startsWith('data:')) return null;
  const commaIndex = value.indexOf(',');
  if (commaIndex === -1) return null;
  const header = value.slice('data:'.length, commaIndex);
  if (!/;base64$/i.test(header)) return null;
  const mime = header.slice(0, header.length - ';base64'.length).split(';')[0].trim().toLowerCase();
  if (!mime.startsWith('image/') && !mime.startsWith('video/')) return null;
  try {
    return { mime, buffer: Buffer.from(value.slice(commaIndex + 1), 'base64') };
  } catch {
    return null;
  }
}

// 深度遍歷 state,把每個 data: 字串交給 transform;非字串/非 data: 值原樣保留。
function replaceDataUrlStrings(value, transform) {
  if (Array.isArray(value)) return value.map(item => replaceDataUrlStrings(item, transform));
  if (isPlainObject(value)) {
    const next = {};
    for (const [key, item] of Object.entries(value)) next[key] = replaceDataUrlStrings(item, transform);
    return next;
  }
  if (typeof value === 'string' && value.startsWith('data:')) return transform(value);
  return value;
}

// state 裡所有 data: 媒體 → 落盤到 `<deckDir>/assets/user-media/<hash>.<ext>`,內容相同的
// data URL 按雜湊去重(同一媒體反覆編輯不會重複寫盤)。返回替換後的 state、本次新寫入的檔名,
// 以及 `mediaMap`(原始 data: URL → 相對路徑,只含真正轉換成功的條目)。
//
// mediaMap 存在的理由:這次請求發出後、響應回來前,使用者可能已經繼續編輯(輸入了更多文字、
// 換了別的圖)。呼叫方不能拿這裡返回的整份 state 直接覆蓋使用者端當下的 vm.state——那會把等待
// 期裡發生的新編輯悄悄沖掉。正確做法是使用者端只用 mediaMap 做"精確字串替換"(把當下 state
// 裡仍等於某個原始 data: URL 的位置換成對應相對路徑),不動其餘欄位;見 template-swiss.html 的
// applyMediaMapReconciliation。
export function extractDataUrlMedia(state, deckDir) {
  const mediaDir = path.join(deckDir, 'assets/user-media');
  const written = [];
  const cache = new Map();
  const mediaMap = {};
  const transform = raw => {
    if (cache.has(raw)) return cache.get(raw);
    const decoded = decodeDataUrl(raw);
    if (!decoded) {
      cache.set(raw, raw);
      return raw;
    }
    const format = mediaFormatForMime(decoded.mime);
    if (!format) throw new Error(`Unsupported media MIME type: ${decoded.mime}. Convert the media before saving.`);
    fs.mkdirSync(mediaDir, { recursive: true });
    const hash = createHash('sha256').update(decoded.buffer).digest('hex').slice(0, 24);
    const filename = `${hash}${format.extensions[0]}`;
    const target = path.join(mediaDir, filename);
    if (!fs.existsSync(target)) {
      fs.writeFileSync(target, decoded.buffer);
      written.push(filename);
      if (decoded.mime.startsWith('video/')) {
        try { generateVideoPoster(target); } catch { /* 海報生成盡力而為,不阻塞儲存 */ }
      }
    }
    const relative = `assets/user-media/${filename}`;
    cache.set(raw, relative);
    mediaMap[raw] = relative;
    return relative;
  };
  return { state: replaceDataUrlStrings(state, transform), written, mediaMap };
}

// 把新 state 寫回既有 index.html 的 `#deck-view-model` script 塊,只替換 `.state` 欄位,
// model/slides/options 等其餘欄位原樣保留——這些欄位的生成/維護職責在 renderDeck.jsx。
export function mergeStateIntoIndexHtml(html, nextState) {
  const match = DECK_VIEW_MODEL_BLOCK.exec(html);
  if (!match) throw new Error('index.html is missing the #deck-view-model script block.');
  let viewModel;
  try {
    viewModel = JSON.parse(match[1] || '{}');
  } catch (error) {
    throw new Error(`#deck-view-model block is not valid JSON: ${error.message}`);
  }
  viewModel.state = nextState;
  const nextBlock = `<script id="deck-view-model" type="application/json">${escapeScriptJson(JSON.stringify(viewModel))}</script>`;
  return html.slice(0, match.index) + nextBlock + html.slice(match.index + match[0].length);
}

function escapeScriptJson(value) {
  return value
    .replaceAll('<', '\\u003c')
    .replaceAll('\u2028', '\\u2028')
    .replaceAll('\u2029', '\\u2029');
}

// 同目錄臨時檔案 + rename:rename 在同一檔案系統內是原子的,併發寫以最後一次 rename 為準,
// 不會讓讀者看到半份檔案。
export function atomicWriteFileSync(filePath, content) {
  const dir = path.dirname(filePath);
  const tmp = path.join(dir, `.${path.basename(filePath)}.tmp-${process.pid}-${Date.now()}-${Math.random().toString(36).slice(2)}`);
  fs.writeFileSync(tmp, content);
  fs.renameSync(tmp, filePath);
}
