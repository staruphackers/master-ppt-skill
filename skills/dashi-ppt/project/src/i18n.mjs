// Deck 介面語言與詞典裁剪(主題登入檔層)。純函式部分(語言歸一化/詞典載入/
// 文案收集)住 src/i18n-core.mjs,本檔案疊加 THEME_PAGES 依賴,給 renderDeck 用。
import { THEME_PAGES, THEME_PACK_OPTIONS } from './components/themes/index.jsx';
import { normalizeOptionLabel } from './control-naming.mjs';
import { collectMetadataStrings, loadI18nDictionary } from './i18n-core.mjs';

export { DECK_LANGUAGES, normalizeDeckLanguage, loadI18nDictionary, collectMetadataStrings } from './i18n-core.mjs';

const PAGES_BY_KEY = new Map(THEME_PAGES.map((page) => [page.key, page]));

// 按 deck 實際用到的頁面裁剪詞典子集(含這些頁所屬主題包的名稱/場景文案)。
export function buildDeckI18nDict(viewModel) {
  const usedPages = [];
  const usedPackKeys = new Set();
  for (const slide of viewModel.slides || []) {
    const page = PAGES_BY_KEY.get(slide.layout);
    if (page) {
      usedPages.push(page);
      if (page.themeKey) usedPackKeys.add(page.themeKey);
    }
    if (slide.themePack) usedPackKeys.add(slide.themePack);
  }
  const usedPacks = [...usedPackKeys]
    .map((key) => THEME_PACK_OPTIONS[key])
    .filter(Boolean);
  const dict = loadI18nDictionary();
  const subset = {};
  for (const [zh, kinds] of collectMetadataStrings(usedPages, usedPacks)) {
    if (dict[zh]) subset[zh] = dict[zh];
    // 選項 label 在渲染管線寫入 DOM 前會經 normalizeOptionLabel 規範化
    // (如 override 注入的 'YES 按鍵' → '是 按鍵'),詞典 key 與瀏覽器端
    // 查詢用的都是規範化後的形態——裁剪必須按同一形態收詞。
    if (kinds.has('option')) {
      const normalized = String(normalizeOptionLabel(zh, zh, 0));
      if (normalized !== zh && dict[normalized]) subset[normalized] = dict[normalized];
    }
  }
  return subset;
}
