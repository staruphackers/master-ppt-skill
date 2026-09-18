'use strict';
// Restore the upstream proprietary component. Localization must stay outside it.
const fs = require('node:fs');
const cp = require('node:child_process');
const assert = require('node:assert/strict');
const base = '21dc7e5fc8c3a0d7f6a94948153dd1ee954f4e64';
const protectedPaths = [
  'skills/dashi-ppt/project/packages/html-deck-to-pptx',
  'skills/dashi-ppt/project/assets/vendor/editable-pptx-browser.js',
];
cp.execFileSync('git', ['fetch', '--depth=1', 'origin', base], { stdio: 'inherit' });
cp.execFileSync('git', ['restore', '--source=' + base, '--worktree', '--', ...protectedPaths], { stdio: 'inherit' });
const guard = "  // zh-TW-license-boundary: proprietary engine and bundled browser adapter stay byte-identical to upstream.\n  if (file.startsWith('skills/dashi-ppt/project/packages/html-deck-to-pptx/') || file === 'skills/dashi-ppt/project/assets/vendor/editable-pptx-browser.js') continue;\n";
for (const file of ['tools/localize-zh-tw.cjs','tools/refine-zh-tw.cjs']) {
  let s = fs.readFileSync(file, 'utf8');
  if (!s.includes('// zh-TW-license-boundary:')) {
    assert.ok(s.includes('for (const file of files) {'));
    s = s.replace('for (const file of files) {', 'for (const file of files) {\n' + guard);
  }
  s = s.replaceAll('--branch localize/zh-tw', '--branch main');
  if (!s.includes("'.ps1'")) s = s.replace("'.toml','.template'", "'.toml','.template','.ps1'");
  // Do not overwrite curated fork documentation during a later maintenance pass.
  if (file.endsWith('localize-zh-tw.cjs')) {
    s = s.replace("fs.writeFileSync('docs/zh-TW-localization.md',", "if (!fs.existsSync('docs/zh-TW-localization.md')) fs.writeFileSync('docs/zh-TW-localization.md',");
    s = s.replace("if (!fs.existsSync('docs/zh-TW-localization.md')) if (!fs.existsSync('docs/zh-TW-localization.md'))", "if (!fs.existsSync('docs/zh-TW-localization.md'))");
  }
  fs.writeFileSync(file,s);
}
let complete = fs.readFileSync('tools/complete-zh-tw.cjs','utf8');
const convertCall = "cp.execFileSync(process.execPath, ['tools/localize-zh-tw.cjs'], { stdio: 'inherit' });";
const refineCall = "cp.execFileSync(process.execPath, ['tools/refine-zh-tw.cjs'], { stdio: 'inherit' });";
if (!complete.includes(refineCall)) {
  assert.ok(complete.includes(convertCall));
  complete = complete.replace(convertCall, convertCall + '\n' + refineCall);
}
// Ensure a direct future invocation also respects the same restore/skip boundary.
const preflight = "if (!process.env.ZH_TW_LICENSE_PREFLIGHT) {\n  cp.execFileSync(process.execPath, ['tools/zh-tw-license-boundary.cjs'], {stdio:'inherit',env:{...process.env,ZH_TW_LICENSE_PREFLIGHT:'1'}});\n  cp.execFileSync(process.execPath, [__filename], {stdio:'inherit',env:{...process.env,ZH_TW_LICENSE_PREFLIGHT:'1'}});\n  process.exit(0);\n}\n";
if (!complete.includes('ZH_TW_LICENSE_PREFLIGHT')) {
  complete = complete.replace('process.chdir(root);', 'process.chdir(root);\n' + preflight);
}
const licenseParagraph = '基於 [chuspeeism/dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill) 修改，保留原作者及第三方著作權資訊。依 [GNU AGPL-3.0](LICENSE) 授權；本 fork 的翻譯與維護不變更原授權。使用或散布前請閱讀授權原文。';
const licensed = '基於 [chuspeeism/dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill) 修改。Copyright (c) 2026 chuspeeism。主要專案採 [GNU AGPL-3.0](LICENSE)，並保留所有原作者與第三方著作權資訊。\n\n**重要例外**：內含匯出引擎 html-deck-to-pptx 是**專有元件**，不是 AGPL 開源部分；請閱讀 [匯出引擎 LICENSE](skills/dashi-ppt/project/packages/html-deck-to-pptx/LICENSE)。條文限制修改、拆出、複製、再散布與用於其他產品／服務。本 fork 將引擎子套件與其瀏覽器配套檔恢復為上游原檔並排除自動翻譯，只在外層介面與文件進行繁中化。舊版 v0.2.7 以前的 MIT 授權不能直接套用到目前版本。\n\n本次不變更授權原文；商業使用或散布前，請確認各元件適用條款及所需權利。';
if (complete.includes(licenseParagraph)) complete = complete.replace(licenseParagraph, licensed);
assert.ok(complete.includes('重要例外'));
const scope = '這是語言在地化，不是完整資安修復。';
if (!complete.includes('專有引擎原檔可能保留')) complete = complete.replace(scope, '專有引擎原檔可能保留原始簡體或英文訊息；授權原文與第三方識別不翻譯。不要將此 fork 描述成沒有例外的全檔案轉換，也不要宣稱整個匯出引擎是開源軟體。\n\n' + scope);
// Avoid duplicate terminology keys when running maintenance multiple times.
const inject = 'converter = converter.replace("const terms = Object.entries({", "const terms = Object.entries({\\n  \'資料包告\': \'資料報告\', \'社羣\': \'社群\',");';
if (complete.includes(inject)) complete = complete.replace(inject, "if (!converter.includes(\"'資料包告': '資料報告'\")) " + inject);
fs.writeFileSync('tools/complete-zh-tw.cjs',complete);
for (const file of ['tools/localize-zh-tw.cjs','tools/refine-zh-tw.cjs','tools/complete-zh-tw.cjs']) cp.execFileSync(process.execPath,['--check',file],{stdio:'inherit'});
cp.execFileSync('git', ['diff', '--exit-code', base, '--', ...protectedPaths], { stdio:'inherit' });
console.log('Proprietary engine restored; source converters now exclude it; original license notice retained.');
