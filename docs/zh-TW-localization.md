# 繁體中文（台灣）維護說明

## 安裝與更新

使用 `staruphackers/master-ppt-skill` 的 `main`，備份後安裝整個 `skills/dashi-ppt`。不要使用 `npx dashi-ppt-skill@latest`，它是上游套件。

## 範圍

本 fork 在原有繁中 PR 基礎上補齊 PowerShell 中文註解、修正「資料包告」轉換錯字、更新 README 與 fork 更新檢查，並從實際渲染結果重製主題總覽與繁中 README 圖片。既有英文介面保留。

保留原始簡體字典鍵、正規表示式別名、測試輸入、英文識別名稱、schema、版型 key、套件名稱、版本、鎖定檔、授權與歷史提交。英文 README 中的上游示範圖已標為歷史素材，不宣稱是本 fork 的繁中截圖。

## 驗證

`tools/complete-zh-tw.cjs` 接續原轉換器，另以既有 Playwright／Chrome 檢查 12 套主題、語言切換、桌面與手機互動，並呼叫實際 CLI 匯出 PPTX／PDF。

驗證必須以成功的 GitHub Actions 執行及產物為準；尚未成功時，不可將計畫中的檢查寫成已通過。全 1,020 個版型的結構數量會驗證，但不等於全部人工視覺審查，也不等於 macOS／Windows／PowerPoint 實機全覆蓋。

## 安全邊界

這是語言在地化，不是完整資安修復。保留既有執行依賴與匯出架構；預覽／匯出僅限本機與可信任內容，不應開放區網或公開網際網路。本次不修改 DNS、部署、帳密或 npm 發佈設定，也沒有新增模型 API 或排程。

## 備份與回復

合併前 main 備份：`backup/pre-zh-tw-main-20260918`，基準提交 `21dc7e5fc8c3a0d7f6a94948153dd1ee954f4e64`。

合併採 merge commit。回復時先建立修復分支，再對實際合併 SHA 執行 `git revert -m 1 <merge-sha>`，以 PR 回復；不執行強制推送。不要使用 PR 尚未合併時的測試合併 SHA。
