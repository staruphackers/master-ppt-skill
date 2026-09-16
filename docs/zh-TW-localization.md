# 繁體中文（台灣）版本

本 fork 將可編輯文字轉為繁體中文並統一台灣介面用語。保留專案名稱、版本、授權、CLI 參數、英文程式識別名稱及外部素材網址。

## 安裝此版本

```bash
git clone --branch localize/zh-tw --single-branch https://github.com/staruphackers/master-ppt-skill.git
```

先備份原本的 skill，再將本專案的 `skills/dashi-ppt` 整個資料夾放入所用 Agent 的 skill 目錄，重新開啟工作階段。不要使用上游 `npx dashi-ppt-skill@latest` 更新此版本，否則繁體中文修改會被覆蓋。分支合併後可改從本 fork 的 `main` 安裝。

## 涵蓋範圍

已修改 126 個檔案；通過 161 項 JavaScript／JSX／TypeScript、JSON、YAML 或 HTML 內嵌腳本解析檢查。JavaScript 的程式結構、識別名稱、數值與運算子保持一致。中英字典新增 8193 個繁體查找別名，保留原有簡體鍵值及英文翻譯。另有 0 筆別名碰撞，採既有翻譯優先，完整記錄見 JSON 報告。

## 相容性與限制

中文介面的內部代碼仍為 `zh`，避免破壞現有資料格式；輸出中的 `zh-CN` 標記改為 `zh-TW`。文字比對的正規表示式保留簡體相容別名，因此原始碼搜尋仍可能找到必要的簡體技術字串，這不代表介面未翻譯。

PNG／JPG／GIF／影片、圖示中的向量外框文字、遠端示範素材以及歷史 commit 不在文字翻譯範圍，沒有聲稱已重製。未修改套件鎖定檔、授權條款，也沒有發佈 npm 套件或新增付費模型 API。語法檢查不等於瀏覽器互動或 PPTX 匯出端到端測試；若沒有另外的測試證據，不能宣稱這些測試已通過。

## 維護與回復

轉換工具為 `tools/localize-zh-tw.cjs`，只在維護期間使用 OpenCC 與解析器，不增加應用程式 runtime 依賴。完整檔案清單與檢查結果見 [JSON 報告](zh-TW-localization-report.json)。合併前回復只需切回 `main`；合併後以 Git revert 回復本次合併，不使用強制推送。
