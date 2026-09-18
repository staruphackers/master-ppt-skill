'use strict';
// One-shot, reviewable fork maintenance. Application dependencies and license stay unchanged.
const fs = require('node:fs');
const path = require('node:path');
const cp = require('node:child_process');
const assert = require('node:assert/strict');
const { createRequire } = require('node:module');
const root = cp.execFileSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' }).trim();
process.chdir(root);
const deps = createRequire(path.join(process.env.ZH_TW_TOOLS, 'package.json'));
const YAML = deps('yaml');
const output = process.env.QA_OUTPUT;
assert.ok(output, 'QA_OUTPUT is required');
fs.mkdirSync(output, { recursive: true });
const read = f => fs.readFileSync(f, 'utf8');
const write = (f, s) => { fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, s); };

// Extend the existing syntax-preserving converter rather than replacing identifiers.
let converter = read('tools/localize-zh-tw.cjs');
converter = converter.replace("const terms = Object.entries({", "const terms = Object.entries({\n  '資料包告': '資料報告', '社羣': '社群',");
converter = converter.replace("'.toml','.template'", "'.toml','.template','.ps1'");
// Preserve the first-pass audit trail; subsequent passes have separate reports.
const originalReport = read('docs/zh-TW-localization-report.json');
write('tools/localize-zh-tw.cjs', converter);
cp.execFileSync(process.execPath, ['tools/localize-zh-tw.cjs'], { stdio: 'inherit' });
write(path.join(output, 'second-pass-localization.json'), read('docs/zh-TW-localization-report.json'));
write('docs/zh-TW-localization-report.json', originalReport);

// Apply editorial Taiwanese wording to prose only, not runtime keys or layout IDs.
const proseTerms = Object.entries({ '資料包告':'資料報告', '社羣':'社群', '行業研究':'產業研究', '內部培訓':'內部訓練', '專案彙報':'專案報告', '企業彙報':'企業報告', '融資復盤':'募資回顧', '增長復盤':'成長回顧', '調研報告':'調查研究報告', '定製':'客製', '佔位符':'預留位置', '擴充套件為視覺 QA':'擴大為視覺 QA' });
for (const f of ['skills/dashi-ppt/README.md','skills/dashi-ppt/SKILL.md']) {
  let s = read(f); for (const [a,b] of proseTerms) s = s.split(a).join(b); write(f,s);
}
let skillReadme = read('skills/dashi-ppt/README.md');
skillReadme = skillReadme.replace(/## 更新提醒[\s\S]*$/, '## 更新提醒\n\n本繁體中文版本只從 `staruphackers/master-ppt-skill` 的 `main` 更新。不要執行上游 `npx dashi-ppt-skill@latest`，也不要用上游套件覆蓋本資料夾。保留原始 clone 作為更新來源；備份既有 Skill 後，再複製此 fork 的 `skills/dashi-ppt`。\n\n版本檢查僅在此 fork 的 Git 工作目錄中檢查 `main` 提交，不查詢上游 npm 或鏡像服務；複製安裝時不會自動更新。\n');
write('skills/dashi-ppt/README.md',skillReadme);
write('skills/dashi-ppt/scripts/check_latest_version.mjs', `#!/usr/bin/env node
// 繁中 fork 更新檢查：唯讀、不下載套件、不修改工作目錄、不查詢上游 npm。
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const cwd = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
function git(args) {
  return execFileSync('git', ['-C', cwd, ...args], {
    encoding: 'utf8', timeout: 5000, maxBuffer: 65536,
    stdio: ['ignore', 'pipe', 'ignore'],
    env: { ...process.env, GIT_TERMINAL_PROMPT: '0' },
  }).trim();
}
try {
  const origin = git(['remote', 'get-url', 'origin']);
  const allowed = new Set([
    'https://github.com/staruphackers/master-ppt-skill',
    'https://github.com/staruphackers/master-ppt-skill.git',
    'git@github.com:staruphackers/master-ppt-skill.git',
  ]);
  if (allowed.has(origin) && git(['branch', '--show-current']) === 'main') {
    const local = git(['rev-parse', 'HEAD']);
    const remote = git(['ls-remote', '--exit-code', 'origin', 'refs/heads/main']).split(/\\s+/)[0];
    if (/^[0-9a-f]{40}$/.test(remote) && remote !== local) {
      process.stdout.write('繁體中文 fork 的 main 與本機提交不同。請先備份並檢查差異，再從 staruphackers/master-ppt-skill 更新；不要使用上游 npx 安裝覆蓋。\\n');
    }
  }
} catch {
  // 複製安裝、離線、無 Git 或無權限：不修改任何檔案，也不阻擋簡報生成。
}
`);
write('npm-dist/README.md', '# npm 發佈工具（保留相容性）\n\n此目錄保留原專案的封裝與發佈工具，不代表繁體中文 fork 已發佈 npm 套件。\n\n安裝本版本請從 `staruphackers/master-ppt-skill` 的 `main` 取得 `skills/dashi-ppt`。不要執行 `npx dashi-ppt-skill@latest`，那會取得上游套件。沒有授權時請勿執行 npm publish。\n');
// Keep English documentation, but make its installation source accurate too.
let en = read('README.en.md').replaceAll('--branch localize/zh-tw', '--branch main');
if (!en.includes('<!-- zh-TW-main-install -->')) en = '<!-- zh-TW-main-install -->\n> This is the Traditional Chinese (Taiwan) fork. Install `skills/dashi-ppt` from this repository on `main`. The upstream `npx dashi-ppt-skill@latest` command does not install this fork. Upstream screenshots below are historical demonstrations, not screenshots of the localized interface.\n\n' + en;
write('README.en.md', en);
const names = ['輕擬態風','炫光紫綠風','深淺程式碼風','玻璃糖果風','色譜圖表風','深色圖譜風','冷白調研風','黑金實驗風','深藍雜誌風','金色指數風','高能增長風','聲波霓虹風'];
const themeRows = names.map((n,i) => { const key='theme'+String(i+1).padStart(2,'0'); return '| '+key+'｜'+n+' | !['+n+'繁體中文實際畫面](docs/assets/zh-TW/'+key+'.png) |'; }).join('\n');
write('README.md', `# Dashi PPT Skill · 大師 PPT／網頁 PPT／可編輯 PPTX

<!-- zh-TW-fork -->
> **繁體中文（台灣）版本**：此 fork 的主要文件、Skill 指示、編輯介面、主題資料、Windows 腳本及預編譯執行檔採繁體中文。請從本儲存庫的 **main** 安裝；不要使用上游 npm 套件覆蓋。英文介面與相容性資料保留。

[English](README.en.md) · [繁體中文](README.md) · [在地化與維護說明](docs/zh-TW-localization.md) · [AGPL-3.0 授權](LICENSE)

把內容交給 AI Agent，產生可在瀏覽器編輯的簡報，再匯出 HTML、PDF 或可編輯的 PPTX。原有 **12 套視覺主題、1,020 個版型、8,576 個控制項**維持不變。

![繁體中文編輯介面實際截圖](docs/assets/zh-TW/editor.png)

## 安裝繁體中文版本

\`\`\`bash
git clone --branch main --single-branch https://github.com/staruphackers/master-ppt-skill.git
\`\`\`

先備份既有 Skill，再將本專案的整個 \`skills/dashi-ppt\` 資料夾放入所用 Agent 的 Skill 目錄，重新開啟工作階段。請保留原始 clone，後續也從同一個 fork 更新。

**不要使用 \`npx dashi-ppt-skill@latest\` 安裝或更新這個版本**：該名稱指向上游 npm 套件，不包含本 fork 的繁中修改。本次沒有發佈新的 npm 套件。

環境需求：Node.js 20+、npm；匯出 PDF／PPTX 需要本機 Chrome／Chromium／Edge。首次執行會準備專案依賴。生成內容的模型額度由所用 Agent 方案決定，本 Skill 不附帶模型額度或付費 API。

### 更新

在原始 clone 中先確認 \`git status\`，保留自己的變更並備份安裝目錄，再於 \`main\` 執行：

\`\`\`bash
git pull --ff-only origin main
\`\`\`

更新後重新複製 \`skills/dashi-ppt\`。有本機修改或非快轉更新時，先處理差異，不使用強制推送或直接覆蓋。版本檢查不會再推薦上游 npm 更新。

## 使用流程

1. 告訴 Agent 主題、受眾、頁數、內容與主要結論，指定使用 \`dashi-ppt\`。
2. 選擇主題，確認圖片／影片需求；預設中文文案使用台灣繁體中文。
3. 產生 HTML 簡報，在瀏覽器改文字、換媒體、調版型與配色。
4. 驗收內容後，匯出需要的格式。

範例：

\`\`\`text
使用 dashi-ppt，將這份內容製作為 10 頁繁體中文簡報。
受眾是企業主管，保留原始數字與來源，不新增未提供的事實。
先展示可選主題，完成後交付可編輯 HTML 與 PPTX。
\`\`\`

## 功能

- **版型與分析工具**：封面、目錄、指標、趨勢、比較、流程、風險與結尾；含 SWOT、波特五力、PEST、商業模式圖等。
- **圖表**：雷達圖、瀑布圖、矩形樹圖、漏斗圖、熱圖、桑基圖、甘特圖等。
- **編輯器**：直接改字、拖曳替換媒體、調整控制項、切換配色與明暗模式、重排／跳過／刪除／複製頁面。
- **匯出**：HTML 離線包、PDF、可編輯 PPTX；HTML 的動畫與部分視覺效果不保證等同 PowerPoint。

適合產業研究、競品分析、趨勢報告、企業提案、品牌介紹與內部訓練。不以逐像素客製設計為目標。

## 12 套內建視覺主題

以下圖片由本 fork 的繁中版實際渲染並擷取，不再嵌入上游簡體示範 GIF。每張只代表抽測版型，並非全部版型均經人工視覺審查。

| 主題 | 繁體中文實際畫面 |
|---|---|
${themeRows}

## 匯出

\`\`\`bash
npm --prefix <project目錄> run export:pptx -- <含index.html的簡報目錄> <輸出.pptx>
npm --prefix <project目錄> run export:pdf -- <含index.html的簡報目錄> <輸出.pdf>
\`\`\`

\`project目錄\` 指 \`skills/dashi-ppt/project\`；路徑有空白時請加上引號。不要將不信任的 HTML、外部 URL 或素材交給本機匯出服務。預覽與匯出服務僅建議綁定本機，不應直接公開到網際網路。

## 語言與相容性

文件、預設中文內容與介面採台灣繁體中文；英文介面與語言切換保留。內部中文代碼仍使用 \`zh\`，HTML 標記為 \`zh-TW\`。套件名稱、CLI 參數、英文識別名稱、版型 key、schema 與授權不變。

原始簡體字典鍵、簡繁比對規則及測試輸入會保留，以免舊資料或英文翻譯失效；它們不是使用者可見的漏翻。英文 README 保留並標明上游歷史示範素材；歷史 Git 提交與第三方商標不重寫。

## 驗證與維護

[繁中維護說明](docs/zh-TW-localization.md) 說明轉換範圍與回復方式。首次轉換的逐檔記錄見 [原始稽核報告](docs/zh-TW-localization-report.json)。瀏覽器、PowerShell 語法及 PPTX／PDF 匯出結果由 GitHub Actions 留存，沒有證據的檢查不宣稱通過。

## 授權與致謝

基於 [chuspeeism/dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill) 修改，保留原作者及第三方著作權資訊。依 [GNU AGPL-3.0](LICENSE) 授權；本 fork 的翻譯與維護不變更原授權。使用或散布前請閱讀授權原文。
`);
write('docs/zh-TW-localization.md', `# 繁體中文（台灣）維護說明

## 安裝與更新

使用 \`staruphackers/master-ppt-skill\` 的 \`main\`，備份後安裝整個 \`skills/dashi-ppt\`。不要使用 \`npx dashi-ppt-skill@latest\`，它是上游套件。

## 範圍

本 fork 在原有繁中 PR 基礎上補齊 PowerShell 中文註解、修正「資料包告」轉換錯字、更新 README 與 fork 更新檢查，並從實際渲染結果重製主題總覽與繁中 README 圖片。既有英文介面保留。

保留原始簡體字典鍵、正規表示式別名、測試輸入、英文識別名稱、schema、版型 key、套件名稱、版本、鎖定檔、授權與歷史提交。英文 README 中的上游示範圖已標為歷史素材，不宣稱是本 fork 的繁中截圖。

## 驗證

\`tools/complete-zh-tw.cjs\` 接續原轉換器，另以既有 Playwright／Chrome 檢查 12 套主題、語言切換、桌面與手機互動，並呼叫實際 CLI 匯出 PPTX／PDF。

驗證必須以成功的 GitHub Actions 執行及產物為準；尚未成功時，不可將計畫中的檢查寫成已通過。全 1,020 個版型的結構數量會驗證，但不等於全部人工視覺審查，也不等於 macOS／Windows／PowerPoint 實機全覆蓋。

## 安全邊界

這是語言在地化，不是完整資安修復。保留既有執行依賴與匯出架構；預覽／匯出僅限本機與可信任內容，不應開放區網或公開網際網路。本次不修改 DNS、部署、帳密或 npm 發佈設定，也沒有新增模型 API 或排程。

## 備份與回復

合併前 main 備份：\`backup/pre-zh-tw-main-20260918\`，基準提交 \`21dc7e5fc8c3a0d7f6a94948153dd1ee954f4e64\`。

合併採 merge commit。回復時先建立修復分支，再對實際合併 SHA 執行 \`git revert -m 1 <merge-sha>\`，以 PR 回復；不執行強制推送。不要使用 PR 尚未合併時的測試合併 SHA。
`);

// Reuse the existing browser test and extend it; don't claim a new test without executing it.
const workflow = YAML.parse(read('.github/workflows/qa-zh-tw.yml'));
const step = workflow.jobs['browser-smoke'].steps.find(s => s.run?.includes("<<'JS'"));
assert.ok(step, 'Existing browser QA source missing');
let test = step.run.match(/<<'JS'\n([\s\S]*?)\nJS\n/)[1];
test = test.replace("import fs from 'node:fs';", "import fs from 'node:fs';\nimport { execFile } from 'node:child_process';\nimport { promisify } from 'node:util';\nconst exec = promisify(execFile);");
test = test.replace("'Actual PPTX/PDF export is not exercised.'", "'PPTX/PDF CLI exports are sampled; Microsoft PowerPoint/Keynote visual round-trip is not tested.'");
test = test.replace("'External requests are blocked; raster demo images are not translated.'", "'Browser smoke blocks external requests; export uses only trusted generated fixtures.'");
test = test.replace('await waitLanguage(page, \'zh-TW\');\n    await page.waitForTimeout(1000);', 'await waitLanguage(page, \'zh-TW\');\n    await page.waitForTimeout(1000);');
// Capture all twelve themes, then reuse theme01 as the README editor image.
test = test.replace('const visible = await page.locator(\'body\').innerText();', "await capture(page, `${theme}.png`);\n    const visible = await page.locator('body').innerText();");
// All 1,020 layouts must remain uniquely addressable; counts checked before rendering.
test = test.replace('assert.equal(THEME_PAGES.length, 1020);', 'assert.equal(THEME_PAGES.length, 1020);\nassert.equal(new Set(THEME_PAGES.map(p => p.key)).size, 1020);\nassert.equal(THEME_PAGES.reduce((n,p) => n + (p.controls?.length || 0), 0), 8576);');
const exportChecks = `
  // Real CLI entry points, not a mocked export function. Two rendered slides per sample.
  results.exports = [];
  for (const theme of [themes[0], themes[4], 'english']) {
    for (const format of ['pptx','pdf']) {
      const target = path.join(output, theme + '.' + format);
      const args = [path.join(project,'scripts/export-pptx.mjs'), path.join(output,theme), target];
      if (format === 'pdf') args.push('--pdf');
      const { stdout, stderr } = await exec(process.execPath,args,{ cwd:project, timeout:180000,
        maxBuffer:1048576, env:{...process.env, INIT_CWD:project} });
      fs.writeFileSync(path.join(output, theme + '-' + format + '.log'), stdout + '\\n' + stderr);
      assert.ok(fs.statSync(target).size > 1000, theme + ': nonempty export');
      if (format === 'pptx') {
        assert.match(stdout, /2 slide\\(s\\)/);
        assert.match(stdout, /[1-9][0-9]* editable text object/);
      } else {
        const { PDFDocument } = req('pdf-lib');
        const pdf = await PDFDocument.load(fs.readFileSync(target));
        assert.equal(pdf.getPageCount(),2);
      }
      results.exports.push({theme,format,bytes:fs.statSync(target).size,stdout:stdout.trim(),status:'passed'});
    }
  }
  const imageDir = path.join(process.env.GITHUB_WORKSPACE, 'docs/assets/zh-TW');
  fs.mkdirSync(imageDir, {recursive:true});
  for (const theme of themes) fs.copyFileSync(path.join(output,theme+'.png'),path.join(imageDir,theme+'.png'));
  fs.copyFileSync(path.join(output,'desktop-zh-TW.png'),path.join(imageDir,'editor.png'));
  const { PNG } = req('pngjs');
  const thumbW=480,thumbH=300,cols=3,rows=4;
  const grid=new PNG({width:thumbW*cols,height:thumbH*rows});
  themes.forEach((theme,i)=>{
    const input=PNG.sync.read(fs.readFileSync(path.join(output,theme+'.png')));
    for(let y=0;y<thumbH;y++) for(let x=0;x<thumbW;x++) {
      const src=(Math.floor(y*input.height/thumbH)*input.width+Math.floor(x*input.width/thumbW))*4;
      const dst=((Math.floor(i/cols)*thumbH+y)*grid.width+(i%cols)*thumbW+x)*4;
      input.data.copy(grid.data,dst,src,src+4);
    }
  });
  fs.writeFileSync(path.join(process.env.GITHUB_WORKSPACE,'skills/dashi-ppt/assets/skill/theme-style-grid.png'),PNG.sync.write(grid));
`;
assert.ok(test.includes("results.status = 'passed';"));
test = test.replace("results.status = 'passed';", exportChecks + "\n  results.status = 'passed';");
write(path.join(output,'check.mjs'), test);
console.log('Localization completion prepared; browser, export and PowerShell checks must pass before committing.');
