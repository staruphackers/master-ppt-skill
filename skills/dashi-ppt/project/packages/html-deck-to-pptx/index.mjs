// html-deck-to-pptx —— 公共入口。
// JAD-183 / JAD-179:匯出引擎已物理遷入本包 src/(editable.mjs + screenshot.mjs)。
//
// 公共 API:
//   exportEditablePptxFromUrl(browser, url, options)   // 給一個 Playwright browser + deck URL → 可編輯 .pptx
//   exportEditablePptxFromPage(page, options)          // 給一個已開啟的 Playwright page
//   exportScreenshotPdfFromUrl(browser, url, options)  // 截圖式 PDF 匯出
// options.activeSlideSelector 可覆蓋 deck 的 DOM 契約(預設匹配 #deck > .slide 結構)。
export {
  exportEditablePptxFromPage,
  exportEditablePptxFromUrl,
} from './src/editable.mjs';
export {
  exportScreenshotPdfFromUrl,
} from './src/screenshot.mjs';
