# Current Options

## themePack

| themePack | 風格名 | 適用場景 | 適用人群 |
|---|---|---|---|
| `theme01` | 輕擬態風 | 產品介紹、企業彙報、方案說明、輕量級釋出 | 創業團隊、產品經理、銷售顧問、企業內部彙報者 |
| `theme02` | 炫光紫綠風 | 科技釋出會、AI/自動駕駛/機器人主題、增長故事、創新專案展示 | 科技公司創始人、技術負責人、品牌市場團隊、投資路演團隊 |
| `theme03` | 深淺程式碼風 | 技術方案、開發者大會、系統架構、AI 工程實踐 | 工程師、技術管理者、架構師、開發者社羣 |
| `theme04` | 玻璃糖果風 | 年輕化品牌、消費產品、創意提案、社群媒體感內容 | 品牌團隊、設計師、內容創作者、消費品團隊 |
| `theme05` | 色譜圖表風 | 資料包告、市場分析、KPI 覆盤、行業研究 | 資料分析師、諮詢顧問、研究員、業務負責人 |
| `theme06` | 深色圖譜風 | 高密度資料展示、戰略分析、科技/金融/產業報告 | 戰略團隊、投資人、產業研究團隊、高管彙報者 |
| `theme07` | 冷白調研風 | 調研報告、白皮書、競品分析、學術/政策型表達 | 研究機構、諮詢團隊、政府/高校/智庫、B2B 團隊 |
| `theme08` | 黑金實驗風 | 高階釋出、品牌提案、實驗性概念、奢華科技敘事 | 高階品牌、創意總監、科技品牌、釋出會策劃團隊 |
| `theme09` | 深藍雜誌風 | 品牌故事、人物訪談、企業形象冊、深度專題 | 公關團隊、媒體編輯、創始人、企業品牌部 |
| `theme10` | 金色指數風 | 金融資料、投資報告、商業指數、年度榜單 | 投資機構、金融分析師、諮詢公司、商業媒體 |
| `theme11` | 高能增長風 | 增長覆盤、商業計劃、融資路演、市場擴張方案 | 創業者、增長團隊、銷售團隊、VC/PE 路演團隊 |
| `theme12` | 聲波霓虹風 | 音樂娛樂、潮流活動、直播內容、年輕化釋出 | 娛樂品牌、活動策劃、內容團隊、潮流消費品牌 |

使用者沒有明確指定風格時,先列出以上風格並詢問。

預設風格選擇回覆只給極簡適用提示:

- `theme01` 輕擬態風: 適合 產品介紹 / 企業彙報; 人群 創業團隊 / 產品經理
- `theme02` 炫光紫綠風: 適合 科技釋出會 / AI/自動駕駛/機器人主題; 人群 科技公司創始人 / 技術負責人
- `theme03` 深淺程式碼風: 適合 技術方案 / 開發者大會; 人群 工程師 / 技術管理者
- `theme04` 玻璃糖果風: 適合 年輕化品牌 / 消費產品; 人群 品牌團隊 / 設計師
- `theme05` 色譜圖表風: 適合 資料包告 / 市場分析; 人群 資料分析師 / 諮詢顧問
- `theme06` 深色圖譜風: 適合 高密度資料展示 / 戰略分析; 人群 戰略團隊 / 投資人
- `theme07` 冷白調研風: 適合 調研報告 / 白皮書; 人群 研究機構 / 諮詢團隊
- `theme08` 黑金實驗風: 適合 高階釋出 / 品牌提案; 人群 高階品牌 / 創意總監
- `theme09` 深藍雜誌風: 適合 品牌故事 / 人物訪談; 人群 公關團隊 / 媒體編輯
- `theme10` 金色指數風: 適合 金融資料 / 投資報告; 人群 投資機構 / 金融分析師
- `theme11` 高能增長風: 適合 增長覆盤 / 商業計劃; 人群 創業者 / 增長團隊
- `theme12` 聲波霓虹風: 適合 音樂娛樂 / 潮流活動; 人群 娛樂品牌 / 活動策劃

## slide

新生成 deck 使用 `schemaVersion: 2`;每個邏輯頁只儲存一份 `content`,幷包含 3 個 template variants 和 1 個無 layout 的 bespoke variant。舊 deck 的單 layout 和舊 3 候選仍可讀取:

- `layout`: 直接指定頁面 key,例如 `theme01_page001` 或 `theme12_page001`。
- template: `{id, kind:"template", layout, props, contentMap}`。
- bespoke: `{id:"v4", kind:"bespoke", adjustable:false, composition, contentMap}`,不寫 `layout`、`props` 或 `controls`。
- `contentMap`: `{目標路徑: content內源路徑}`,源路徑不加 `content.`。
- `role`: 只允許草稿階段輔助選頁,渲染前必須換成具體 `layout`。

每套主題的前 5 頁都是封面候選。一個 deck 只能有 1 個邏輯封面頁,它的 3 個模板方案都從前 5 頁選擇;正文模板方案從第 6 頁以後選擇。3N 個模板 layout 全域性唯一。

選頁先使用 `npm --prefix <skill-root>/project run layout:query -- --theme <themePack> --role <role> --limit 8 --seed <randomSeed>:slide-<n>`,為每個邏輯頁選 3 個不同 template layout;相同 seed 和輸入必須穩定,也不要固定只用未打雜湊表的前三條。v4 獨立分析目標、受眾、敘事作用、重點和主題特徵,使用受限 `composition` 設計;不新增事實、不寫自由 HTML/JSX、不微調模板,失敗時仍輸出安全 bespoke 組合。動態背景頁用 `--role ambient`。需要圖片槽時加 `--needs-media`、`--planned-images <n>`、`--provided-images <n>` 或 `--image-gen`。

長 deck 先按逐頁語義 brief 為第 2 到倒數第 2 頁確定正文 role,再用 `npm --prefix <skill-root>/project run goal:scaffold -- --title <title> --goal <goal> --theme <themePack> --pages <n> --roles <page2-role,...,pageN-1-role> --layout-variants 3 --seed <randomSeed> --chunk-size 5 --out output/<deck-name>/goal.json` 生成 schema v2 骨架和 `goal.fill-plan.json`;這裡的 3 是模板數,scaffold 另追加 v4。輸出目錄寫在當前會話工作目錄,不要寫入 `<skill-root>/project/output`。

單頁契約優先使用 `npm --prefix <skill-root>/project run inspect:layout -- --compact <layout...>`,一次傳多個 layout 或多次 `--layout`。`fillPlan` 給出標題/正文長度、可見陣列數量、巢狀陣列數量和媒體寫入欄位;`propShapes` 給出 `copy`、物件陣列和巢狀陣列的內部 key。寫 `copy`、`cells`、`items`、`rows` 等物件欄位時只使用 `fillPlan` / `propShapes` 列出的 key,不要憑欄位名猜測。寫陣列、數量或圖片時使用 `npm --prefix <skill-root>/project run props:safe -- <layout> '<props-json>' [--images <path...>]`;寫完整 `goal.json` 後使用 `npm --prefix <skill-root>/project run props:safe -- --goal <goal-json> --write` 做整份 props 規範化。

圖片/影片只寫 `mediaSlots[].canPresetMedia: true` 的槽,按該槽 `presetProp` / `fieldPath` 寫 deck 內相對路徑。不要寫 `slides[].media` 或不可 preset 的媒體槽;使用者提供本地素材時先執行 `npm --prefix <skill-root>/project run media:stage -- <deck-output-dir-or-ppt-dir> <media-file...>`,再把返回的 `relative` 路徑寫入真實 media slot。同一邏輯頁的 4 個方案共用同一素材,不同邏輯頁之間每個素材最多使用一次。使用者明確要求原創視覺圖/生圖時用 image-gen;未明確生圖時先詢問使用者。需要 image-gen 生成 2 張以上獨立圖片時,用多個 subagent 並行,不要序列逐張等待;每張圖獨立生成,不要用一張拼圖/素材板再拆分。subagent 只用於生圖。使用者只計劃後續插圖時選擇並保留帶 media slot 的頁面。

`variantOutputMode:"comparison"` 預設按邏輯頁順序展開 4N 個物理頁;`"selected-only"` 只輸出每組標記的方案,共 N 頁。v4 繼承當前主題且無模板屬性控制元件,但仍可選擇、儲存和匯出。

需要調整卡片/條目數量時,用 `cardCount`、`itemCount`、`stepCount` 等 count 引數控制顯示數量。陣列欄位是模板內容池;只覆蓋當前顯示的前 N 項。被 count/顯隱控制隱藏的尾項可保留“請輸入文字”佔位。

不要使用舊的 `theme`、`fontSet`、`fontWeight`、`typeScale`、`styleVariant`、token 或開發者模式欄位。
