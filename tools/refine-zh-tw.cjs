'use strict';
// Run after localize-zh-tw.cjs. This pass corrects reviewed Taiwan terminology.
const fs = require('node:fs');
const path = require('node:path');
const cp = require('node:child_process');
const { createRequire } = require('node:module');
const deps = createRequire(path.join(process.env.ZH_TW_TOOLS, 'package.json'));
const { parse } = deps('@babel/parser');
const YAML = deps('yaml');
const root = cp.execFileSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' }).trim();
process.chdir(root);
const reportFile = 'docs/zh-TW-localization-report.json';
const report = JSON.parse(fs.readFileSync(reportFile, 'utf8'));
const replacements = new Map([
  ['控制檯', '控制台'], ['控制元件', '控制項'], ['平臺', '平台'],
  ['覆盤', '復盤'], ['畫素', '像素'], ['國內網路', '中國大陸網路'],
  ['國內映象', '中國大陸鏡像'], ['國內鏡像', '中國大陸鏡像'],
]);
const terms = new RegExp([...replacements.keys()].join('|'), 'g');
const refine = s => s.replace(terms, m => replacements.get(m));
const files = cp.execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' }).split('\0').filter(Boolean);
const changed = [];
let aliases = 0;
const parseJS = (s, file) => parse(s, { sourceType: 'unambiguous', allowReturnOutsideFunction: true,
  plugins: /\.[cm]?tsx?$/.test(file) ? ['jsx', 'typescript'] : ['jsx'] });
function preserveIdentifiers(source, file) {
  const tree = parseJS(source, file);
  const ids = [];
  function walk(node) {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) { node.forEach(walk); return; }
    if (node.type === 'Identifier' && refine(node.name) !== node.name) ids.push(node);
    for (const [k, v] of Object.entries(node)) if (!['loc','extra','tokens','comments'].includes(k) && v && typeof v === 'object') walk(v);
  }
  walk(tree);
  let cursor = 0, output = '';
  for (const node of ids.sort((a,b) => a.start - b.start)) {
    if (node.start < cursor) continue;
    output += refine(source.slice(cursor, node.start)) + source.slice(node.start, node.end);
    cursor = node.end;
  }
  output += refine(source.slice(cursor));
  parseJS(output, file);
  return output;
}
for (const file of files) {
  // zh-TW-license-boundary: proprietary engine and bundled browser adapter stay byte-identical to upstream.
  if (file.startsWith('skills/dashi-ppt/project/packages/html-deck-to-pptx/') || file === 'skills/dashi-ppt/project/assets/vendor/editable-pptx-browser.js') continue;

  if (/^(tools\/|\.github\/workflows\/|docs\/)/.test(file) || /(^|\/)(package-lock\.json|LICENSE|NOTICE)$/.test(file)) continue;
  const ext = path.extname(file);
  if (!['.md','.mdx','.json','.js','.mjs','.cjs','.jsx','.ts','.tsx','.html','.htm','.css','.svg','.yml','.yaml','.txt','.sh','.py','.toml','.template','.ps1'].includes(ext)) continue;
  if (fs.lstatSync(file).isSymbolicLink()) continue;
  const before = fs.readFileSync(file, 'utf8');
  let after;
  if (file.endsWith('/i18n/zh-en.json')) {
    const dict = JSON.parse(before);
    for (const [key,value] of Object.entries(dict)) {
      const alias = refine(key);
      if (!Object.hasOwn(dict, alias)) { dict[alias] = value; aliases++; }
      else if (dict[alias] !== value) throw new Error(`Conflicting dictionary alias: ${alias}`);
    }
    after = JSON.stringify(dict, null, 1) + '\n';
  } else if (['.js','.mjs','.cjs','.jsx','.ts','.tsx'].includes(ext)) after = preserveIdentifiers(before, file);
  else after = refine(before);
  if (ext === '.json') JSON.parse(after);
  if (['.yaml','.yml'].includes(ext)) YAML.parse(after);
  if (['.html','.htm'].includes(ext)) {
    for (const m of after.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
      const type = m[1].match(/\btype\s*=\s*["']([^"']+)["']/i)?.[1] || '';
      if (!m[2].trim()) continue;
      if (/json/i.test(type)) JSON.parse(m[2]);
      else if (!type || /javascript|ecmascript|module/i.test(type)) parseJS(m[2], file + '.js');
    }
  }
  if (file === 'README.md') {
    const oldBadge = '%E5%8F%AF%E7%BC%96%E8%BE%91%E5%AF%BC%E5%87%BA';
    after = after.replace(oldBadge, encodeURIComponent('可編輯匯出'));
    after = after.replace('**一鍵安裝/更新**：', '**安裝此繁體中文 fork（建議）**：\n\n```bash\ngit clone --branch main --single-branch https://github.com/staruphackers/master-ppt-skill.git\n```\n\n先備份既有 skill，再將本專案的 `skills/dashi-ppt` 資料夾放入 Agent 使用的 skill 目錄，重新開啟工作階段。請保留同一個 fork 作為更新來源。\n\n**以下為上游原版的安裝方式，不會安裝此繁體中文 fork**：');
    after = after.replace('**適用 Agent 能力**', '**方便 Agent 操作**');
  }
  if (after !== before) { fs.writeFileSync(file, after); changed.push(file); }
}
report.terminologyRefinement = { files: changed, count: changed.length, additionalDictionaryAliases: aliases,
  replacements: Object.fromEntries(replacements), badgeLocalized: true, forkQuickStartClarified: true };
report.dictionaryAliasesAdded += aliases;
const total = new Set([...report.changedFiles.map(f => f.path), ...changed]);
report.changedFileCount = total.size;
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2) + '\n');
const docFile = 'docs/zh-TW-localization.md';
let doc = fs.readFileSync(docFile, 'utf8').replace(/中英字典新增 \d+ 個/, `中英字典新增 ${report.dictionaryAliasesAdded} 個`);
if (!doc.includes('## 用語複核')) doc += '\n## 用語複核\n\n已額外統一「控制台、控制項、平台、復盤、像素」等用語，並將安裝文件中原指中國大陸的「國內」改為明確地區名稱。README 的文字徽章也已改為繁體中文；遠端示範影像網址維持不變。\n';
fs.writeFileSync(docFile, doc);
console.log(JSON.stringify({ terminologyFiles: changed.length, additionalAliases: aliases,
  totalTranslatedFiles: report.changedFileCount, totalDictionaryAliases: report.dictionaryAliasesAdded }));
