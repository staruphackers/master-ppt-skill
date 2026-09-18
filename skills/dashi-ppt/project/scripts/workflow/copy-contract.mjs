// @ts-check
// copy 預算與角色詞表域:文案密度/字元預算、文案根/路徑展開、可填文案葉子判定。
import { getDecorativeKeys } from '../../src/components/themes/decorative-overrides.mjs';
import {
  FREE_TEXT_ARRAY_FIELD_PATHS,
  isMediaArrayKey,
  isNonContentContractValue,
  isPrunedContractOmit,
  isSerializedReactElementLike,
  pruneContractValue,
  reactElementText,
} from '../../src/prop-contract-core.mjs';
import {
  arrayFieldName,
  getLayoutRecord,
  isNumericPathSegment,
  isPlainObject,
  normalizeName,
} from './theme-registry.mjs';
import { getMediaSlots } from './media-slots.mjs';

export function getCopyBudgetsForLayout(layout) {
  const record = getLayoutRecord(layout);
  if (!record) return {};
  const mediaSlots = getMediaSlots(record);
  const decorativeKeys = getDecorativeKeys(record.page.key);
  const copyKeyRoots = getCopyKeyRoots(record.defaultProps, record.controls, mediaSlots, decorativeKeys);
  return getCopyBudgets(record.defaultProps, copyKeyRoots);
}

// 頂層文案根:物件 copy 仍是單根(copy),內部路徑由 expandCopyKeys/collectCopyBudgets 遞迴。
export function getCopyKeyRoots(defaultProps, controls, mediaSlots, decorativeKeys = []) {
  const controlKeys = new Set(controls.map(control => control.key));
  const mediaFields = new Set(mediaSlots.map(slot => slot.field));
  const decorative = new Set(decorativeKeys);
  return Object.entries(defaultProps || {})
    .filter(([key, value]) => {
      if ((controlKeys.has(key) && key !== 'copy') || decorative.has(key)) return false;
      // 媒體陣列根:項內帶 CJK 文字欄位(照片圖注/貼紙,如 theme08 photos[].caption)時保留為文案根,
      // 媒體源欄位(src/url)由欄位級黑名單剪除;純媒體陣列照舊排除。
      if (mediaFields.has(key) || isMediaArrayKey(key)) {
        const rows = Array.isArray(value) ? value.filter(item => item && typeof item === 'object' && !Array.isArray(item)) : [];
        const carriesCopy = rows.some(row => Object.entries(row).some(([f, v]) =>
          typeof v === 'string' && /[一-龥]/.test(v) && !/^(src|url|image|img|poster|video|href)$/i.test(f)));
        if (!carriesCopy) return false;
      }
      const pruned = pruneContractValue(value, key);
      return !isPrunedContractOmit(pruned) && pruned !== null && isCopyValue(pruned) && hasFillableCopyLeaf(pruned, key);
    })
    .map(([key]) => key);
}

// JAD-212:把文案根扁平化為可填路徑。物件 copy 展開成 copy.eyebrow / copy.points[].t,
// 頂層陣列展開成 items[].label,與扁平主題(theme01)形態一致。
export function expandCopyKeys(defaultProps, copyKeyRoots) {
  const keys = [];
  for (const root of copyKeyRoots) collectCopyPaths(defaultProps?.[root], root, keys);
  return [...new Set(keys)];
}

function collectCopyPaths(value, pathName, out) {
  value = pruneContractValue(value, pathName);
  if (isPrunedContractOmit(value)) return;
  if (typeof value === 'string' || typeof value === 'number' || isSerializedReactElementLike(value)) {
    if (isFillableCopyLeaf(pathName, value)) out.push(pathName);
    return;
  }
  if (Array.isArray(value)) {
    if (isCopyTupleArray(value)) {
      // 元組陣列整體作為一個可填路徑(specs[][]);寫回時保持 [[...], ...] 形狀。
      if (tupleLooksLikeCopy(value)
        && value.flat().some(x => (typeof x === 'string' || typeof x === 'number') && isFillableCopyLeaf(`${pathName}[][]`, x))) {
        out.push(`${pathName}[][]`);
      }
      return;
    }
    if (isCopySegmentRowsArray(value)) {
      // 富文字分段行陣列(如 theme01 lines:[[{t,mark?},...],...])——按行展開成
      // `<key>[][].<field>`;mark 等樣式標籤不是文案,保持只讀(不進 out),只收字串葉子(t)。
      const tokens = value.filter(Array.isArray).flat().filter(isPlainObject);
      const merged = {};
      for (const tok of tokens) {
        for (const [key, item] of Object.entries(tok)) {
          if (!(key in merged) || merged[key] == null) merged[key] = item;
        }
      }
      for (const [key, item] of Object.entries(merged)) {
        if (key === 'mark' || typeof item !== 'string') continue;
        collectCopyPaths(item, `${pathName}[][].${key}`, out);
      }
      return;
    }
    const objects = value.filter(isPlainObject);
    if (objects.length) {
      // 並集全部物件項(樣本取首個非 null):首項為 null 的欄位(如漏斗首段 conv)也能進 copyKeys
      const merged = {};
      for (const obj of objects) {
        for (const [key, item] of Object.entries(obj)) {
          if (!(key in merged) || merged[key] == null) merged[key] = item;
        }
      }
      for (const [key, item] of Object.entries(merged)) collectCopyPaths(item, `${pathName}[].${key}`, out);
      return;
    }
    if (value.some(item => (typeof item === 'string' || typeof item === 'number') && isFillableCopyLeaf(`${pathName}[]`, item))) out.push(`${pathName}[]`);
    return;
  }
  if (!isPlainObject(value)) return;
  for (const [key, item] of Object.entries(value)) collectCopyPaths(item, `${pathName}.${key}`, out);
}

export function isColorString(value) {
  if (typeof value !== 'string') return false;
  const text = value.trim();
  return /^#[0-9a-fA-F]{3,8}$/.test(text)
    || /^(rgb|rgba|hsl|hsla)\(/i.test(text)
    || /^(linear|radial|conic)-gradient\(/i.test(text);
}

export function isColorArray(value) {
  return Array.isArray(value) && value.length > 0 && value.every(isColorString);
}

function isVisualConfigValue(pathName, value) {
  if (isVisualConfigLeaf(pathName, value)) return true;
  if (Array.isArray(value)) return isVisualConfigArray(pathName, value);
  if (!isPlainObject(value)) return false;
  const entries = Object.entries(value || {});
  const numericGroups = entries.filter(([key]) => isNumericPathSegment(key));
  return numericGroups.length > 0
    && numericGroups.length === entries.length
    && numericGroups.every(([key, item]) => isVisualConfigValue(`${pathName}.${key}`, item));
}

function isVisualConfigArray(pathName, value) {
  if (!Array.isArray(value) || !value.length) return false;
  if (isColorArray(value)) return true;
  const field = arrayFieldName(pathName);
  if (value.every(item => typeof item === 'number' && Number.isFinite(item))) return isVisualArrayField(field);
  const objects = value.filter(isPlainObject);
  if (!objects.length || objects.length !== value.filter(item => item != null).length) return false;
  const scalarFields = objects.flatMap(item => scalarObjectEntries(item).map(([key, itemValue]) => [key, itemValue]));
  if (!scalarFields.some(([key, itemValue]) => isVisualConfigLeaf(key, itemValue))) return false;
  return scalarFields.every(([key, itemValue]) => (
    isVisualConfigLeaf(key, itemValue) || isVisualDecorationLabelField(pathFieldName(key))
  ));
}

function scalarObjectEntries(value, prefix = '') {
  if (!isPlainObject(value)) return [];
  const rows = [];
  for (const [key, item] of Object.entries(value)) {
    const pathName = prefix ? `${prefix}.${key}` : key;
    if (Array.isArray(item)) continue;
    if (isPlainObject(item)) {
      rows.push(...scalarObjectEntries(item, pathName));
      continue;
    }
    rows.push([pathName, item]);
  }
  return rows;
}

function isVisualConfigLeaf(pathName, value) {
  const field = pathFieldName(pathName);
  if (isColorString(value)) return true;
  if (typeof value === 'number' && Number.isFinite(value)) return isVisualNumericField(field);
  if (typeof value === 'string' && isVisualStyleField(field) && (isTokenLike(value) || isCssVarLike(value))) return true;
  return false;
}

function isVisualNumericField(field) {
  return /^(x|y|l|t|r|w|h|cx|cy|dx|dy|box|width|height|left|top|right|bottom|ratio|rotate|rotation|angle|tilt|scale|sr|opacity|radius|z|zindex)$/i.test(String(field || ''));
}

function isVisualArrayField(field) {
  return /^(tilts?|rotations?|angles?|offsets?|positions?|coords?|coordinates?)$/i.test(String(field || ''));
}

function isVisualStyleField(field) {
  return /^(c|color|colour|accent|fill|stroke|background|bg|tint|hex|tone|subcolor)$/i.test(String(field || ''));
}

function isVisualDecorationLabelField(field) {
  return /^(ph|placeholder|label|sub|caption|cap)$/i.test(String(field || ''));
}

function isCssVarLike(value) {
  return /^var\(--[A-Za-z0-9_-]+\)$/.test(String(value || '').trim());
}

// 文案槽角色:eyebrow(短標籤)/ title(標題)/ paragraph(段落)/ metric(數字)/ serial(序號)。
export function copyRoleForField(pathName) {
  return {
    metric: 'metric',
    serial: 'serial',
    tagline: 'eyebrow',
    display: 'title',
    brief: 'paragraph',
    body: 'paragraph',
    compact: 'eyebrow',
  }[inferCopyDensity(pathName)] || 'eyebrow';
}

export function buildCopyRoles(copyKeys = []) {
  const roles = {};
  // 扁平 copyKeys 已含 copy.eyebrow / items[].label 形態;陣列路徑(以 [] 結尾)按欄位角色判定,不當 eyebrow 標題。
  for (const key of copyKeys) roles[key] = copyRoleForField(key);
  return roles;
}

const METRIC_FIELD_RE = /^(value|val|amount|amt|funding|fund|funds|budget|spend|investment|capital|revenue|sales|cost|price|arr|mrr|gmv|share|pct|percent|percentage|ratio|rate|portion|weight|num|number|score|index|rank|total|metric)$/;

export function isMetricFieldName(field) {
  return METRIC_FIELD_RE.test(normalizeName(field));
}

export function getCopyBudgets(defaultProps, copyKeys) {
  const budgets = {};
  for (const key of copyKeys) {
    collectCopyBudgets(defaultProps?.[key], key, budgets);
  }
  return budgets;
}

function collectCopyBudgets(value, pathName, budgets) {
  value = pruneContractValue(value, pathName);
  if (isPrunedContractOmit(value)) return;
  if (typeof value === 'string' || typeof value === 'number') {
    if (isFillableCopyLeaf(pathName, value)) setCopyBudget(budgets, pathName, copyBudget(pathName, value));
    return;
  }
  if (isSerializedReactElementLike(value)) {
    if (isFillableCopyLeaf(pathName, value)) setCopyBudget(budgets, pathName, copyBudget(pathName, reactElementText(value)));
    return;
  }
  if (Array.isArray(value)) {
    if (isCopyTupleArray(value) && !tupleLooksLikeCopy(value)) return;
    value.slice(0, 4).forEach(item => collectCopyBudgets(item, `${pathName}[]`, budgets));
    return;
  }
  if (!isPlainObject(value)) return;
  for (const [key, item] of Object.entries(value)) {
    collectCopyBudgets(item, `${pathName}.${key}`, budgets);
  }
}

function setCopyBudget(budgets, key, budget) {
  if (!budget) return;
  const existing = budgets[key];
  if (!existing || budget.maxChars < existing.maxChars) budgets[key] = budget;
}

export function copyBudget(pathName, value) {
  const density = inferCopyDensity(pathName);
  const length = charLength(value);
  const floor = { body: 18, serial: 4, tagline: 8 }[density] ?? 6;
  const base = Math.max(length, floor);
  const maxChars = {
    // serial/序號槽:物理可容字元極少(如 80px mono 大序號),收緊到 6–8。
    serial: Math.min(8, Math.max(6, Math.ceil(base * 1.2))),
    metric: Math.max(8, Math.min(16, Math.ceil(base * 1.4))),
    // 刊頭 mono 標語(panelEn 等):單行不換行,約束在 ~14。
    tagline: Math.min(14, Math.max(12, Math.ceil(base * 1.1))),
    display: Math.max(18, Math.min(36, Math.ceil(base * 1.8))),
    compact: Math.max(18, Math.min(42, Math.ceil(base * 1.8))),
    brief: Math.max(36, Math.min(80, Math.ceil(base * 1.6))),
    body: Math.max(36, Math.min(120, Math.ceil(base * 2.2))),
  }[density];
  return { density, maxChars };
}

export function inferCopyDensity(pathName) {
  const normalized = String(pathName || '').toLowerCase();
  const field = normalized.split('.').at(-1)?.replace(/\[\]/g, '') || normalized;
  const nested = normalized.includes('.') || normalized.includes('[]');
  // 序號 / 刊號槽:物理容量極小,先於 metric 命中,避免被當成普通數字放寬到 16。
  if (!nested && /^(panelindex|panelno|panelnum|vol|volume|issueno|serialno|partno)$/.test(field)) return 'serial';
  if (!nested && /^(panelen|panelsub|paneltag)$/.test(field)) return 'tagline';
  if (isMetricFieldName(field)) return 'metric';
  if (!nested && /^(title|titletop|titlebottom|headline|headlinehl|headlinetail|statement|quote|word|brand|kicker)$/.test(field)) return 'display';
  if (/^(lead|subtitle|sub|desc|description|summary|note|caption|detail|footnote|intro|insight|excerpt|takeaway|reason|conclusion)$/.test(field)) return 'brief';
  if (/^(body|copy|paragraph)$/.test(field)) return 'body';
  if (/^(title|headline|label|name|kicker|tag|chip|pill|category)$/.test(field)) return 'compact';
  return 'compact';
}

// 文案長度按「視覺寬度」折算:全形(CJK 及全形標點)記 1,半形記 0.5(issue #15)。
// 預算本質是佈局的物理容寬,1 箇中文字 ≈ 2 個拉丁字母寬;此前按碼點計數,英文/混排
// 文案(如 "GPT · Gemini · Claude",21 碼點但視覺僅 ≈11 箇中文字寬)被誤攔,而預算
// 常數是按中文字元標定的——視覺寬度口徑下中文文案計數不變,預算常數無需調整。
export function charLength(value) {
  let width = 0;
  for (const ch of String(value ?? '')) {
    const code = ch.codePointAt(0);
    const fullWidth = (code >= 0x1100 && code <= 0x115f) // Hangul Jamo
      || (code >= 0x2e80 && code <= 0xa4cf)   // CJK 部首/漢字/假名/注音等
      || (code >= 0xac00 && code <= 0xd7a3)   // Hangul 音節
      || (code >= 0xf900 && code <= 0xfaff)   // CJK 相容漢字
      || (code >= 0xfe30 && code <= 0xfe4f)   // CJK 相容形式
      || (code >= 0xff00 && code <= 0xff60)   // 全形 ASCII/標點
      || (code >= 0xffe0 && code <= 0xffe6)   // 全形符號
      || (code >= 0x3000 && code <= 0x303e)   // CJK 標點(含全形空格、「」)
      || (code >= 0x20000 && code <= 0x3fffd); // CJK 擴充套件
    width += fullWidth ? 1 : 0.5;
  }
  return Math.ceil(width);
}

function hasFillableCopyLeaf(value, pathName) {
  value = pruneContractValue(value, pathName);
  if (isPrunedContractOmit(value)) return false;
  if (typeof value === 'string' || typeof value === 'number' || isSerializedReactElementLike(value)) {
    return isFillableCopyLeaf(pathName, value);
  }
  if (Array.isArray(value)) {
    if (isCopyTupleArray(value) && !tupleLooksLikeCopy(value)) return false;
    return value.some(item => hasFillableCopyLeaf(item, `${pathName}[]`));
  }
  if (!isPlainObject(value)) return false;
  return Object.entries(value).some(([key, item]) => hasFillableCopyLeaf(item, `${pathName}.${key}`));
}

export function isFillableCopyLeaf(pathName, value) {
  const field = pathFieldName(pathName);
  if (/axesData\[\]\.id$/i.test(String(pathName || '')) && typeof value === 'string') return true;
  if (isNonContentContractValue(pathName, value)) return false;
  if (isColorString(value) && (/^(c|color|colour|accent|fill|stroke|background|bg|tint|hex)$/i.test(field) || /colou?r$/i.test(field))) return false;
  if (/placeholder$/i.test(field)) return false; // 圖片槽佔位提示:固定文案,不暴露(使用者輸入會被填錯位置)
  if (/^(id|key|type|kind|mode|variant|style|layout|align|side|position|fit|icon|href|url|src|className|\w*Class|state)$/i.test(field)) {
    // 欄位名撞結構詞但值是自然文案(CJK 或多詞文字,且非路徑/列舉 token)——按文案放行:
    // theme07 columns[].kind="看好方向"(可見大標題)、theme05 copy.src="EXPANDED SLIDE · P61"(可見字幕)
    // theme11 rows[].cells[].state="partial"/"full"/"missing" 是驅動圖示的閉集列舉,非自由文案。
    const text = typeof value === 'string' ? value.trim() : '';
    const looksLikeCopy = /[一-龥]/.test(text) || (/\S\s+\S/.test(text) && !/^[a-z0-9_\-./:]+$/i.test(text));
    if (!looksLikeCopy) return false;
  }
  // 'q' is ambiguous by name alone: a structural quadrant/scorecard token elsewhere (locked, see
  // FREE_TEXT_ARRAY_FIELD_PATHS comment in prop-contract-core.mjs) vs. a rewritable quarter-tick
  // label / quote / FAQ question here. Registered array[].field paths opt out of the token-like
  // exclusion so props:safe / goal-scaffold / validate-goal-spec treat them as authorable copy.
  if (/^(theme|tone|q)$/i.test(field) && isTokenLike(value) && !FREE_TEXT_ARRAY_FIELD_PATHS.has(normalizeArrayPathIndex(pathName))) return false;
  return true;
}

// "colsData[3].q" -> "colsData[].q": collapse a concrete array index back to the "[]" wildcard
// form FREE_TEXT_ARRAY_FIELD_PATHS is keyed by (collectCopyPaths already emits "[]" for shape
// probing, but other isFillableCopyLeaf callers pass concrete per-item paths).
function normalizeArrayPathIndex(pathName) {
  return String(pathName || '').replace(/\[\d+\]/g, '[]');
}

export function pathFieldName(pathName) {
  return String(pathName || '').split('.').pop()?.replace(/\[\]$/, '') || '';
}

function isTokenLike(value) {
  if (typeof value !== 'string') return false;
  const text = value.trim();
  return /^[A-Za-z0-9_-]{1,24}$/.test(text);
}

// 元組陣列([[label, value], ...]):行全為標量陣列。theme07 封面 specs、theme01 榜單 rows 屬此形。
export function isCopyTupleArray(value) {
  if (!Array.isArray(value) || !value.length) return false;
  const rows = value.filter(item => item != null);
  return rows.length > 0 && rows.every(item => Array.isArray(item)
    && item.every(x => x == null || ['string', 'number'].includes(typeof x)));
}

// 元組葉子須含自然文案(CJK 或多詞文字)才算 copy,或行首(index 0)是品牌詞
// (見 isBrandLikeToken,logo 牆客戶名需可替換)——排除程式碼型元組
// (如 theme10 熱力/拼布矩陣的資產程式碼、logo 牆的樣式標記)。
function tupleLooksLikeCopy(value) {
  const rows = value.filter(row => row != null);
  if (rows.some(row => row.some(x => /[一-龥]/.test(String(x ?? '')) || /\S\s+\S/.test(String(x ?? ''))))) return true;
  return rows.some(row => isBrandLikeToken(row?.[0]));
}

// Brand-like token: ALL-CAPS word (DAZZ) or TitleCase word (Multiply), i.e. a
// logo-wall client-name shape, distinct from lowercase asset codes (cm/eq/reit)
// and bare style flags ('.'/'soft'); only index 0 is checked here, so an
// index-1-only style tag never triggers exposure by itself.
function isBrandLikeToken(value) {
  if (typeof value !== 'string') return false;
  const text = value.trim();
  return /^[A-Z][A-Z0-9]+$/.test(text) || /^[A-Z][a-z0-9]+$/.test(text);
}

// 富文字分段行陣列([[{t,mark?},...], ...]):行是陣列(不是元組標量、也不是頂層物件陣列),
// 行內元素是 {t,...} 小物件——theme01 SlideTypeStatement `lines` 屬此形。與 isCopyTupleArray
// (行內是標量)、頂層物件陣列(下方 isCopyValue 的 value.every(isPlainObject) 那支)都不同,
// 需單列一支才能被 isCopyValue 認作 copy 根、被 collectCopyPaths 展開成 `<key>[][].t`。
function isCopySegmentRowsArray(value) {
  if (!Array.isArray(value) || !value.length) return false;
  const rows = value.filter(item => item != null);
  if (!rows.length || !rows.every(row => Array.isArray(row) && row.length && row.every(isPlainObject))) return false;
  return rows.some(row => row.some(tok => typeof tok.t === 'string' && /\S/.test(tok.t)));
}

function isCopyValue(value) {
  if (value == null) return false;
  if (['string', 'number'].includes(typeof value)) return true;
  if (Array.isArray(value)) {
    return value.length > 0 && (
      value.every(item => item == null || ['string', 'number'].includes(typeof item) || isPlainObject(item))
      || isCopyTupleArray(value)
      || isCopySegmentRowsArray(value)
    );
  }
  return isPlainObject(value);
}
