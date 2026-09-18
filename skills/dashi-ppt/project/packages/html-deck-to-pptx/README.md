# html-deck-to-pptx

把一個**已渲染的 HTML 投影片 deck** 匯出成**可編輯的 `.pptx`**。

與「又一個 HTML→pptx」不同點:別的工具在漸變 / SVG / 複雜背景上**拍平成圖或轉崩**,本引擎靠
**逐節點保真回退鏈**——對映不了的區域截圖,卻**從實時 DOM 把文字重新抽回來保持可編輯**(無 OCR),
再加 alpha-matte 透明背景捕獲。基線見 `scripts/benchmark`(editableFidelity 0.851)。

## API

```js
import { exportEditablePptxFromUrl } from 'html-deck-to-pptx';
import { chromium } from 'playwright-core';

const browser = await chromium.launch();
const report = await exportEditablePptxFromUrl(browser, 'http://localhost:4178/', {
  outFile: 'deck.pptx',
  // 覆蓋 deck 的 DOM 契約(預設匹配 #deck > .slide 結構):
  activeSlideSelector: '#deck > .slide.active',
});
// report: { slideCount, textObjects, shapeObjects, imageObjects, warnings, ... }
```

- `exportEditablePptxFromUrl(browser, url, options)` — 給 Playwright browser + deck URL。
- `exportEditablePptxFromPage(page, options)` — 給已開啟的 Playwright page。

## DOM 契約

引擎假設 deck 滿足:`#deck > .slide`(active 頁含 `.active`/`[data-deck-active]`),並讀一組
`data-editable-pptx-*` 註解(由引擎自行打標)。消費者側可配置的入口選擇器已引數化
(`options.activeSlideSelector`);其餘註解協議的完全引數化是釋出前的收尾項。

## 現狀(JAD-183)

- ✅ 包邊界:`package.json`(MIT,open-core 核心,見 JAD-185)、公共 API(`index.mjs`)、LICENSE、README。
- ✅ 入口 DOM 契約引數化起步(`activeSlideSelector`)。
- ✅ **引擎已物理遷入本包 `src/`**:`editable.mjs` + `screenshot.mjs` 從開發倉 `git mv` 進來,`index.mjs`
  用本地路徑;開發倉 5 個 importer(serve-preview-https、validate-* 等)改為引用本包路徑。
  驗證:經包入口端到端匯出 2 頁 → 41 可編輯文字物件;`npm test` 綠。
- ⏳ **正式分發收尾**:6140 行驗證器遷入本包作自帶 CI 門、`data-dashi-*` / `data-editable-pptx-*` 註解協議
  完全引數化成 config(目前僅 `activeSlideSelector`)、獨立倉釋出。

> 商業層(託管 API / 高保真外掛)不在本開源包內(open-core,見 JAD-185)。
