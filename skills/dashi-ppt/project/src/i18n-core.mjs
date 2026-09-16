// Deck 介面語言層的純函式部分:語言歸一化、詞典載入、後設資料中文文案收集。
// 本檔案不得 import 任何 .jsx——scripts/build/extract-i18n-strings.mjs 等純 node
// 工具直接跑它;需要主題登入檔的裁剪邏輯住 src/i18n.mjs。
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DICT_FILE = path.join(ROOT, 'i18n/zh-en.json');

export const DECK_LANGUAGES = ['zh', 'en'];

export function normalizeDeckLanguage(value) {
  const lang = String(value ?? '').trim().toLowerCase();
  if (lang === 'en' || lang === 'english' || lang.startsWith('en-')) return 'en';
  return 'zh';
}

let cachedDict = null;
export function loadI18nDictionary() {
  cachedDict ??= existsSync(DICT_FILE) ? JSON.parse(readFileSync(DICT_FILE, 'utf8')) : {};
  return cachedDict;
}

const hasCJK = (value) => /[一-鿿]/.test(String(value ?? ''));

// 收集頁面/主題包後設資料裡全部使用者可見中文文案(控制項 label/desc/unit/選項、頁面名、
// 主題名/場景)。執行時按 deck 裁剪詞典用它,scripts/build/extract-i18n-strings.mjs
// 的全量提取/覆蓋率檢查也複用它——共享實現必須住 src/(安裝版 project/ 只帶 src 與
// 白名單 scripts,執行時程式碼不得 import scripts/build/)。
export function collectMetadataStrings(pages, packs) {
  const entries = new Map(); // 中文 → Set<kind>
  const add = (text, kind) => {
    const s = typeof text === 'string' ? text.trim() : '';
    if (!s || !hasCJK(s)) return;
    if (!entries.has(s)) entries.set(s, new Set());
    entries.get(s).add(kind);
  };

  for (const pack of packs ?? []) {
    add(pack.displayName ?? pack.label ?? pack.name, 'theme');
    add(pack.scenario, 'theme');
    add(pack.audience, 'theme');
  }
  for (const page of pages ?? []) {
    add(page.label, 'page');
    for (const control of page.controls ?? []) {
      add(control.label, 'control');
      add(control.desc ?? control.description, 'desc');
      add(control.unit, 'unit');
      const options = Array.isArray(control.options) ? control.options : [];
      for (const option of options) {
        add(Array.isArray(option) ? option[1] : (option?.label ?? option), 'option');
      }
    }
  }
  return entries;
}
