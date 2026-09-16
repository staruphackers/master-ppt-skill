# Dashi PPT Skill · 大師 PPT / 網頁 PPT / 可編輯 PPTX

<!-- zh-TW-fork -->
> **繁體中文（台灣）版本**：本 fork 已在地化文件、介面、主題資料與預編譯執行檔。安裝請使用本儲存庫的 `skills/dashi-ppt`；下方原作者的 `npx dashi-ppt-skill@latest` 會安裝上游版本，不會保留此 fork 的繁體中文修改。詳見 [繁體中文版本說明](docs/zh-TW-localization.md)。

![GitHub stars](https://img.shields.io/github/stars/chuspeeism/dashi-ppt-skill?style=flat-square)
![Skill](https://img.shields.io/badge/Skill-Agent-111111?style=flat-square)
![HTML Deck](https://img.shields.io/badge/HTML-Deck-0A7CFF?style=flat-square)
![PPTX Export](https://img.shields.io/badge/PPTX-%E5%8F%AF%E7%B7%A8%E8%BC%AF%E5%8C%AF%E5%87%BA-D24726?style=flat-square)
![Claude Code](https://img.shields.io/badge/Claude%20Code-Supported-6B5B95?style=flat-square)
![Codex](https://img.shields.io/badge/Codex-Supported-222222?style=flat-square)
![豆包](https://img.shields.io/badge/%E8%B1%86%E5%8C%85-Supported-3370FF?style=flat-square)
![Marvis](https://img.shields.io/badge/Marvis-Supported-FF5A5F?style=flat-square)
![Workbuddy](https://img.shields.io/badge/Workbuddy-Supported-2EA44F?style=flat-square)
![Dumate](https://img.shields.io/badge/Dumate-Supported-F59E0B?style=flat-square)
![Qclaw](https://img.shields.io/badge/Qclaw-Supported-14B8A6?style=flat-square)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue?style=flat-square)](./LICENSE)

[English](./README.en.md) · [繁體中文](README.md)

一個真正適合職場人的 PPT Skill。把檔案丟給你的 AI Agent，每一頁都自帶編輯控制台的 PPT Skill——不滿意的地方直接在瀏覽器裡改，改完還能一鍵匯出成真實的、可編輯的 PPTX。

- 12 套視覺主題
- 1020 個版式頁面
- 8576 個可調控制項

![生成效果展示](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/hero-result.gif)

## 12 套內建視覺主題

Skill 會展示預覽讓你選擇主題，可以隨時讓 Agent 整套換掉。下面每套主題的預覽，都是從它自己的版式庫裡挑出的 4 個正文版式（圖表、分析模型、卡片、目錄等），全部由這個 Skill 真實渲染，非示意圖：

|  |  |
|---|---|
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme01.jpg" width="440" alt="輕擬態風內頁預覽"><br>**theme01**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme02.jpg" width="440" alt="炫光紫綠風內頁預覽"><br>**theme02**<br> |
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme03.jpg" width="440" alt="深淺程式碼風內頁預覽"><br>**theme03**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme04.jpg" width="440" alt="玻璃糖果風內頁預覽"><br>**theme04**<br> |
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme05.jpg" width="440" alt="色譜圖表風內頁預覽"><br>**theme05**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme06.jpg" width="440" alt="深色圖譜風內頁預覽"><br>**theme06**<br> |
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme07.jpg" width="440" alt="冷白調研風內頁預覽"><br>**theme07**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme08.jpg" width="440" alt="黑金實驗風內頁預覽"><br>**theme08**<br> |
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme09.jpg" width="440" alt="深藍雜誌風內頁預覽"><br>**theme09**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme10.jpg" width="440" alt="金色指數風內頁預覽"><br>**theme10**<br> |
| <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme11.jpg" width="440" alt="高能增長風內頁預覽"><br>**theme11**<br> | <img src="https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/theme12.jpg" width="440" alt="聲波霓虹風內頁預覽"><br>**theme12**<br> |

## 快速開始

**安裝此繁體中文 fork（建議）**：

```bash
git clone --branch localize/zh-tw --single-branch https://github.com/staruphackers/master-ppt-skill.git
```

先備份既有 skill，再將本專案的 `skills/dashi-ppt` 資料夾放入 Agent 使用的 skill 目錄，重新開啟工作階段。請保留同一個 fork 作為更新來源。

**以下為上游原版的安裝方式，不會安裝此繁體中文 fork**：

```bash
npx dashi-ppt-skill@latest
```
中國大陸網路:
```bash
npx --registry=https://registry.npmmirror.com dashi-ppt-skill@latest
```
安裝和更新是同一條命令,重跑即原地更新(已裝依賴自動保留)。
讓 AI Agent 幫你安裝：

```text
幫我安裝 skill：npx dashi-ppt-skill@latest，中國大陸鏡像 npx --registry=https://registry.npmmirror.com dashi-ppt-skill@latest
```

環境要求：Node.js 20+ 和 npm；匯出 PPTX / PDF 需要本機裝有 Chrome / Chromium / Edge。

## 效果

- **12套主題**：覆蓋多種 PPT 使用場景和風格
- **1020個版式**：每套主題獨立的頁面結構和視覺語言，20 種頁面角色（封面、目錄、指標、趨勢、對比、流程、風險、結尾……）
- **圖表與分析模型**：雷達圖、瀑布圖、矩形樹圖、漏斗、熱力圖、桑基圖、甘特圖，以及 SWOT、波特五力、PEST、商業模式畫布、雙鑽模型等分析模型版式
- **自帶控制台**：滑桿、開關、下拉——換佈局、調模組數量、換配色、換頁面重點
- **文字可編輯**：點選任意文字就地修改
- **媒體替換**：點選或拖曳替換媒體槽，文字資料也會自動預留圖片佔位符
- **一鍵匯出**：HTML離線包 / PDF / 可編輯 PPTX

## 適用場景

**合適**：行業研究 / 融資復盤 / 競品分析 / 趨勢報告 / 專案彙報 / 方案展示 / 路演材料 / 內部培訓——需要快速形成結構完整、視覺統一、還能繼續改的簡報

**不合適**：需要逐像素手工定製視覺的場景

## HTML 與匯出能力

- **方便 Agent 操作**：HTML / Agent 能直接讀、改、校驗；每一頁由"版式 + 文案欄位"構成
- **表現力更高**：入場動畫、翻頁動畫、互動控制項、明暗模式切換等
- **產物即編輯器**：結果為網頁版 PPT 編輯器——翻頁、改字、換圖、調版式，開啟就能用
- **匯出PPTX**：一鍵匯出成真實的 PPTX——逐節點還原、文字保持可編輯

HTML 版與匯出 PPTX 版的逐頁對比：

![HTML 與匯出 PPTX 逐頁對比](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/html-vs-pptx.gif)

## 平台支援

> 下表只列出已實測的平台，不代表"僅限這些"。

| 平台 | 狀態 | 說明 |
|------|------|------|
| Claude Code | 支援 ||
| Codex | 支援 | 可呼叫生圖能力補充配圖 |
| 豆包 | 支援 | 需要啟動辦公模式 |
| Marvis / Workbuddy / Dumate / Qclaw | 支援 | skill 檔案放在任意位置、讀取 `SKILL.md` 即可 |
| Cursor / 其他本地 Agent | 可用 | 需要能讀寫檔案並執行 shell 命令 |
| 普通網頁 Chatbot | 不推薦 | 生成器需要本地 Node.js 環境 |

## 使用流程

把手頭的檔案丟進去，直接說要做 PPT，等待幾分鐘就能生成一份完整的 PPT：

1. 描述需求 — 主題、受眾、頁數、想突出的結論
2. 選風格 — Skill 會展示 12 套風格預覽讓你選擇；同時確認是否需要圖片 / 影片
3. 自動組稿 — Skill 把需求整理成結構化的內容，並設計對應的 PPT 方案
4. 隨手編輯 — 改文字、換圖片、調模組數量、換配色，改動自動儲存
5. 交付 — 可以選擇讓 Agent 換風格調細節；滿意匯出需要的格式

![圖片佔位符一鍵填圖](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/image-placeholder.gif)

## 生成後編輯

> 生成之後如何編輯，比生成本身更重要

設計調節：每頁都附帶一個控制台，20 多個維度的編輯空間——內容、佈局、模組數量、頁面重點、預設配色、翻頁動畫；
文字編輯:任意文字點選即可編輯；
圖片、影片槽：點選或拖曳即可替換，上傳自動壓縮。

| 點選任意文字就地編輯 | 加圖片 |
|---|---|
| ![點選文字就地編輯，裝飾元素隨字數自適應](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/text-edit.gif) | ![向頁面插入圖片](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/add-image.gif) |

### 控制台改：佈局、模組數量、圖表、配色

拖曳控制台右側的滑桿，就能自訂頁面中模組的數量；頁面的邏輯重點也可以透過滑桿調換，幫你把握演講節奏。

| 拖滑桿增減模組 | 換佈局 |
|---|---|
| ![拖曳滑桿調節目錄、表格、多項式、圖片數量](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/slider-edit.gif) | ![一句話切換頁面佈局](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/layout-switch.gif) |

| 換圖表 | 風格內配色切換 |
|---|---|
| ![一句話更換圖表型別](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/chart-switch.gif) | ![每套風格內支援區域性配色調換](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/palette-switch.gif) |

### 翻頁動畫

9種切換動畫可以隨意選擇

![翻頁過渡動畫效果](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/transitions.gif)

### 其他

- 左側縮圖目錄支援拖曳重排頁面，頁面可跳過 / 刪除 / 複製
- 頂欄一鍵進入放映模式、切換明暗主題、重置全部改動

圖表版式：

![多種圖表版式展示](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/layouts-tour.gif)

分析模型與專業版式

![內建分析模型版式](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/analysis-models.png)

高頻使用的目錄頁、表格頁、數字海報頁、圖文頁：

![常用版式](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/common-layouts.png)

## 匯出

![一鍵匯出可編輯 PPT](https://github.com/chuspeeism/dashi-ppt-skill/releases/download/readme-assets-v1/export-pptx.gif)

可以跨過 HTML 的中間態，直接跟 Agent 說"用這個 skill 生成 PPT 格式的檔案"，從提示詞一步到 PPTX。

命令列匯出：

```bash
npm --prefix <project目錄> run export:pptx -- <PPT輸出目錄>/ppt 輸出.pptx
npm --prefix <project目錄> run export:pdf  -- <PPT輸出目錄>/ppt
```

## FAQ

**能匯出可編輯的 PPTX 嗎？**
> 能。雖然 PPT 無法擁有 HTML 的全量能力，但我們盡最大可能保留了可編輯性。

**生成一套 PPT 大概消耗多少 token？**
> 一套 10 頁的 PPT 實測約 10 萬 token（隨檔案長度和往返修改次數浮動）。按 Codex 5 小時額度視窗粗算，大約夠生成 10 套

**可以自訂xxx？**
> 當前自訂樣式僅限於特定範圍。這是有意為之：穩定的產出比自由的選色更重要。

**需要聯網嗎？我的內容安全嗎？**

> 內容層面零上傳：你的檔案和 PPT 內容不會傳送到任何伺服器，生成、編輯、匯出都在本機完成，成品離線可開。會聯網的只有兩件事：首次生成時 npm 自動安裝依賴；完成任務後的靜默版本檢查（只拉取最新版本號，不上傳任何內容）。另外本地預覽服務預設在同一區域網內可訪問，僅供瀏覽，匯出介面只對本機開放。

**無法匯出 PPTX？**

> 匯出 PPTX / PDF 需要本機 Chrome / Chromium / Edge（可用 `CHROME_PATH` 環境變數指定）。

## 開源協議 License

本專案採用 **GNU Affero General Public License v3.0（AGPL-3.0）** 開源——這是 OSI 認證開源協議中 copyleft 效力最強的一個。你可以自由使用、修改、分發本專案（包括商業用途）；但如果你分發修改版，或基於本專案及其修改版透過網路對外提供服務（如 SaaS），必須以 AGPL-3.0 向使用者公開完整的對應原始碼。

**例外**：子包 `project/packages/html-deck-to-pptx`（匯出引擎）為**專有元件**，僅授權作為本 skill 的組成部分使用，不得單獨提取、複製或再分發（詳見該目錄下的 LICENSE；其 v0.2.7 及之前的歷史版本曾以 MIT 釋出，該授權僅對歷史版本有效）。

Copyright (c) 2026 [chuspeeism](https://github.com/chuspeeism)。完整协议文本见根目录 [LICENSE](LICENSE) 檔案。如需 AGPL-3.0 之外的商業授權，請聯絡作者。

## Star History

<a href="https://www.star-history.com/?repos=chuspeeism%2Fdashi-ppt-skill&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=chuspeeism/dashi-ppt-skill&type=date&theme=dark&legend=top-left&sealed_token=MpgO76zZLzPPs8bi8jDFZyG1b8gYNbtA8RQhnghNJ0wtwmM9UwUwNiBiy0rtx1stNTntfSl1TJCqxLCMvnTKnj6He8CPK9MYawX-G8i4x4HabmaLVCC0gg" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=chuspeeism/dashi-ppt-skill&type=date&legend=top-left&sealed_token=MpgO76zZLzPPs8bi8jDFZyG1b8gYNbtA8RQhnghNJ0wtwmM9UwUwNiBiy0rtx1stNTntfSl1TJCqxLCMvnTKnj6He8CPK9MYawX-G8i4x4HabmaLVCC0gg" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=chuspeeism/dashi-ppt-skill&type=date&legend=top-left&sealed_token=MpgO76zZLzPPs8bi8jDFZyG1b8gYNbtA8RQhnghNJ0wtwmM9UwUwNiBiy0rtx1stNTntfSl1TJCqxLCMvnTKnj6He8CPK9MYawX-G8i4x4HabmaLVCC0gg" />
 </picture>
</a>
