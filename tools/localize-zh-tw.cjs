'use strict';
// Maintenance-only, deterministic localization. No application runtime dependency.
const fs = require('node:fs');
const path = require('node:path');
const cp = require('node:child_process');
const crypto = require('node:crypto');
const { createRequire } = require('node:module');
const deps = createRequire(path.join(process.env.ZH_TW_TOOLS || __dirname, 'package.json'));
const OpenCC = deps('opencc-js');
const { parse } = deps('@babel/parser');
const YAML = deps('yaml');
const root = cp.execFileSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' }).trim();
process.chdir(root);
const files = cp.execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' }).split('\0').filter(Boolean);
const basic = OpenCC.Converter({ from: 'cn', to: 'tw' });
const taiwan = OpenCC.Converter({ from: 'cn', to: 'twp' });
const terms = Object.entries({
  '資料包告': '資料報告', '社羣': '社群',
  '簡體中文': '繁體中文', '默認': '預設', '導出': '匯出', '導入': '匯入',
  '界面': '介面', '視頻': '影片', '文件夾': '資料夾', '文件': '檔案',
  '文檔': '文件', '代碼': '程式碼', '源碼': '原始碼', '源代碼': '原始碼',
  '數據': '資料', '信息': '資訊', '軟件': '軟體', '硬件': '硬體',
  '組件': '元件', '控件': '控制項', '模塊': '模組', '插件': '外掛',
  '鼠標': '滑鼠', '點擊': '點選', '單擊': '按一下', '雙擊': '按兩下',
  '拖拽': '拖曳', '拖動': '拖曳', '加載': '載入', '緩存': '快取',
  '服務器': '伺服器', '服務端': '伺服器端', '客戶端': '用戶端',
  '瀏覽器端': '瀏覽器端', '屏幕': '螢幕', '分辨率': '解析度',
  '縮略圖': '縮圖', '幻燈片': '投影片', '演示文稿': '簡報',
  '演示': '展示', '設置': '設定', '保存': '儲存', '存儲': '儲存',
  '創建': '建立', '運行': '執行', '調用': '呼叫', '調試': '除錯',
  '返回值': '回傳值', '返回': '返回', '交互': '互動', '項目': '專案',
  '教程': '教學', '打印': '列印', '字節': '位元組', '字符': '字元',
  '字符串': '字串', '字段': '欄位', '數組': '陣列', '對象': '物件',
  '賬號': '帳號', '登錄': '登入', '網絡': '網路', '鏈接': '連結',
  '在線': '線上', '自定義': '自訂', '適配': '適用', '支持': '支援',
  '社區': '社群', '社媒': '社群媒體', '質量': '品質', '營銷': '行銷'
}).sort((a, b) => b[0].length - a[0].length);
const termMap = new Map(terms);
const termRE = new RegExp(terms.map(([k]) => k).join('|'), 'g');
const cache = new Map();
function words(s) {
  if (!cache.has(s)) cache.set(s, taiwan(s).replace(termRE, m => termMap.get(m)));
  return cache.get(s);
}
const hanRE = /[\u3400-\u9fff\uf900-\ufaff]+/g;
const hasHan = s => /[\u3400-\u9fff\uf900-\ufaff]/.test(s);
const urlRE = /https?:\/\/[^\s<>"'`]+/g;
const namedPaths = files.filter(hasHan).flatMap(p => [p, path.basename(p)]).sort((a, b) => b.length - a.length);
function decodeHan(s) {
  return s.replace(/(?<!\\)\\u([0-9a-fA-F]{4})/g, (m, h) => {
    const c = String.fromCodePoint(parseInt(h, 16));
    return hasHan(c) ? c : m;
  });
}
function text(s) {
  const protectedText = [];
  const save = value => { const i = protectedText.push(value) - 1; return `__DASHI_KEEP_${i}__`; };
  s = s.replace(urlRE, save);
  for (const p of namedPaths) s = s.split(p).join(save(p));
  s = s.replace(/PingFang SC/g, 'PingFang TC')
    .replace(/Microsoft YaHei/g, 'Microsoft JhengHei')
    .replace(/Noto Sans CJK SC/g, 'Noto Sans CJK TC')
    .replace(/Noto Sans SC/g, 'Noto Sans TC')
    .replace(/Noto Serif SC/g, 'Noto Serif TC')
    .replace(/微軟雅黑|微软雅黑/g, 'Microsoft JhengHei')
    .replace(/zh-CN/g, 'zh-TW').replace(/zh-cn/g, 'zh-TW')
    .replace(/zh-Hans/g, 'zh-Hant');
  s = decodeHan(s).replace(hanRE, words);
  return s.replace(/__DASHI_KEEP_(\d+)__/g, (_, i) => protectedText[Number(i)]);
}
// Add non-capturing alternatives, keeping existing capture indexes and SC input.
function regexAliases(input) {
  const protectedGroups = [];
  let s = decodeHan(input).replace(/\(\?:([\u3400-\u9fff]+(?:\|[\u3400-\u9fff]+)+)\)/g, (m, body) => {
    const variants = body.split('|');
    if (new Set(variants.map(words)).size !== 1) return m;
    return `__DASHI_REGEX_${protectedGroups.push(m) - 1}__`;
  });
  let out = '';
  for (let i = 0; i < s.length;) {
    if (s[i] === '\\') { out += s.slice(i, i + 2); i += 2; continue; }
    if (s[i] === '[') {
      let j = i + 1;
      for (; j < s.length; j++) { if (s[j] === '\\') j++; else if (s[j] === ']') break; }
      const body = s.slice(i + 1, j);
      let extra = '';
      for (const c of body) {
        if (!hasHan(c)) continue;
        const t = basic(c);
        if (t.length === 1 && !body.includes(t) && !extra.includes(t)) extra += t;
      }
      out += '[' + body + extra + ']'; i = j + 1; continue;
    }
    if (hasHan(s[i])) {
      let j = i + 1; while (j < s.length && hasHan(s[j])) j++;
      const value = s.slice(i, j);
      if (/[?*+{]/.test(s[j] || ' ')) {
        out += [...value].map(c => basic(c) !== c ? `[${c}${basic(c)}]` : c).join('');
      } else {
        const variants = [...new Set([value, basic(value), words(value)])];
        out += variants.length > 1 ? `(?:${variants.join('|')})` : value;
      }
      i = j; continue;
    }
    out += s[i++];
  }
  return out.replace(/__DASHI_REGEX_(\d+)__/g, (_, i) => protectedGroups[Number(i)]);
}
function visit(value, fn, parent = null) {
  if (!value || typeof value !== 'object') return;
  if (Array.isArray(value)) { for (const item of value) visit(item, fn, parent); return; }
  if (value.type) fn(value, parent);
  for (const [key, child] of Object.entries(value)) {
    if (['loc', 'start', 'end', 'extra', 'comments', 'leadingComments', 'trailingComments', 'innerComments', 'tokens', 'errors'].includes(key)) continue;
    if (child && typeof child === 'object') visit(child, fn, value);
  }
}
function ast(source, filename) {
  return parse(source, { sourceType: 'unambiguous', allowReturnOutsideFunction: true,
    plugins: /\.[cm]?tsx?$/.test(filename) ? ['jsx', 'typescript'] : ['jsx'] });
}
function signature(tree) {
  const hash = crypto.createHash('sha256');
  visit(tree, n => {
    hash.update(n.type + '|');
    for (const k of ['name', 'operator', 'kind', 'async', 'generator', 'computed', 'optional', 'static', 'prefix', 'flags']) {
      if (Object.prototype.hasOwnProperty.call(n, k)) hash.update(k + ':' + String(n[k]) + '|');
    }
    if (['NumericLiteral', 'BooleanLiteral', 'BigIntLiteral'].includes(n.type)) hash.update(String(n.value));
  });
  return hash.digest('hex');
}
const report = { locale: 'zh-TW', baseCommit: cp.execFileSync('git', ['rev-parse', 'HEAD'], {encoding:'utf8'}).trim(),
  changedFiles: [], syntaxChecked: [], dictionaryAliasesAdded: 0, dictionaryCollisions: [],
  preservedIdentifiers: [], binaryFilesNotTranslated: [], htmlScriptsChecked: 0 };
function javascript(source, filename) {
  const before = ast(source, filename);
  const edits = new Map();
  visit(before, (n, parent) => {
    if (n.type === 'RegExpLiteral') {
      edits.set(n.start, { start: n.start, end: n.end, value: `/${regexAliases(n.pattern)}/${n.flags}` });
    } else if (n.type === 'Identifier' && hasHan(n.name)) {
      edits.set(n.start, { start: n.start, end: n.end, value: source.slice(n.start, n.end) });
      report.preservedIdentifiers.push({ file: filename, name: n.name });
    } else if (n.type === 'StringLiteral' && parent &&
      ['NewExpression','CallExpression'].includes(parent.type) && parent.callee?.name === 'RegExp' && parent.arguments[0] === n) {
      edits.set(n.start, { start: n.start, end: n.end, value: JSON.stringify(regexAliases(n.value)) });
    }
  });
  let out = '', cursor = 0;
  for (const edit of [...edits.values()].sort((a, b) => a.start - b.start)) {
    if (edit.start < cursor) continue;
    out += text(source.slice(cursor, edit.start)) + edit.value; cursor = edit.end;
  }
  out += text(source.slice(cursor));
  const after = ast(out, filename);
  if (signature(before) !== signature(after)) throw new Error(`Program structure changed: ${filename}`);
  report.syntaxChecked.push(filename);
  return out;
}
function html(source, filename) {
  let out = '', cursor = 0;
  for (const match of source.matchAll(/(<script\b[^>]*>)([\s\S]*?)(<\/script\s*>)/gi)) {
    out += text(source.slice(cursor, match.index)) + text(match[1]);
    const type = match[1].match(/\btype\s*=\s*["']([^"']+)["']/i)?.[1] || '';
    if (!match[2].trim()) out += match[2];
    else if (/json/i.test(type)) { JSON.parse(match[2]); const converted = text(match[2]); JSON.parse(converted); out += converted; }
    else if (!type || /javascript|ecmascript|module/i.test(type)) {
      out += javascript(match[2], filename + '.inline.js'); report.htmlScriptsChecked++;
    } else out += text(match[2]);
    out += match[3]; cursor = match.index + match[0].length;
  }
  return out + text(source.slice(cursor));
}
function dictionary(source) {
  const original = JSON.parse(source), result = { ...original };
  for (const [key, value] of Object.entries(original)) {
    for (const alias of new Set([basic(key), text(key)])) {
      if (Object.prototype.hasOwnProperty.call(result, alias)) {
        if (result[alias] !== value) report.dictionaryCollisions.push({ source: key, alias, kept: result[alias], alternative: value });
      } else { result[alias] = value; report.dictionaryAliasesAdded++; }
    }
  }
  for (const [key, value] of Object.entries(original)) {
    if (result[key] !== value) throw new Error('An original English dictionary entry changed');
  }
  return JSON.stringify(result, null, 1) + '\n';
}
function checkJsonKeys(before, after, file) {
  if (!before || typeof before !== 'object') return;
  if (Array.isArray(before)) {
    if (!Array.isArray(after) || before.length !== after.length) throw new Error(`JSON array changed: ${file}`);
    before.forEach((v, i) => checkJsonKeys(v, after[i], file)); return;
  }
  if (!after || Object.keys(before).length !== Object.keys(after).length) throw new Error(`JSON key collision: ${file}`);
  for (const key of Object.keys(before)) {
    const translated = text(key);
    if (!Object.prototype.hasOwnProperty.call(after, translated)) throw new Error(`JSON key missing: ${file}`);
    checkJsonKeys(before[key], after[translated], file);
  }
}
function assert(condition, message) { if (!condition) throw new Error(message); }
assert(text('默认界面：导出视频文件') === '預設介面：匯出影片檔案', 'Taiwan UI terminology test');
assert(text('https://example.com/简体/path') === 'https://example.com/简体/path', 'URL preservation test');
const rp = regexAliases('(图片|视频)\\s*(\\d+)');
assert(new RegExp(rp).exec('图片42')[2] === '42', 'SC regex capture compatibility');
assert(new RegExp(rp).exec('影片42')[2] === '42', 'TC regex capture compatibility');
assert(regexAliases(rp) === rp, 'Regex alias idempotence');
assert(text(text('默认界面：导出视频文件')) === text('默认界面：导出视频文件'), 'Text idempotence');
for (const file of files) {
  if (/^(tools\/|\.github\/workflows\/|docs\/zh-TW-localization)/.test(file)) continue;
  // License/NOTICE text is intentionally not modified; all other supported tracked text files are localized.
  if (/(^|\/)(package-lock\.json|yarn\.lock|pnpm-lock\.yaml|LICENSE|NOTICE)$/.test(file)) continue;
  const ext = path.extname(file).toLowerCase();
  if (!['.md','.mdx','.json','.js','.mjs','.cjs','.jsx','.ts','.tsx','.html','.htm','.css','.svg','.yml','.yaml','.txt','.sh','.py','.toml','.template','.ps1','.ps1'].includes(ext)) {
    report.binaryFilesNotTranslated.push(file); continue;
  }
  if (fs.lstatSync(file).isSymbolicLink()) continue;
  const source = fs.readFileSync(file, 'utf8');
  if (source.includes('\u0000') || source.includes('\ufffd')) { report.binaryFilesNotTranslated.push(file); continue; }
  let out;
  if (file.endsWith('/i18n/zh-en.json')) out = dictionary(source);
  else if (['.js','.mjs','.cjs','.jsx','.ts','.tsx'].includes(ext)) out = javascript(source, file);
  else if (['.html','.htm'].includes(ext)) out = html(source, file);
  else {
    out = text(source);
    if (ext === '.json') { checkJsonKeys(JSON.parse(source), JSON.parse(out), file); report.syntaxChecked.push(file); }
    if (['.yaml','.yml'].includes(ext)) { YAML.parse(source); YAML.parse(out); report.syntaxChecked.push(file); }
  }
  const beforeURLs = source.match(urlRE) || [], afterURLs = out.match(urlRE) || [];
  assert(JSON.stringify(beforeURLs) === JSON.stringify(afterURLs), `External URLs changed: ${file}`);
  if (file === 'README.md' && !out.includes('<!-- zh-TW-fork -->')) {
    const note = '\n<!-- zh-TW-fork -->\n> **繁體中文（台灣）版本**：本 fork 已在地化文件、介面、主題資料與預編譯執行檔。安裝請使用本儲存庫的 `skills/dashi-ppt`；下方原作者的 `npx dashi-ppt-skill@latest` 會安裝上游版本，不會保留此 fork 的繁體中文修改。詳見 [繁體中文版本說明](docs/zh-TW-localization.md)。\n';
    const end = out.indexOf('\n'); out = out.slice(0, end + 1) + note + out.slice(end + 1);
  }
  if (file === 'skills/dashi-ppt/SKILL.md' && !out.includes('<!-- zh-TW-output -->')) {
    const note = '\n<!-- zh-TW-output -->\n## 繁體中文（台灣）輸出規範\n\n除非使用者明確要求其他語言，回覆、簡報內容、按鈕、提示與交付說明一律使用台灣繁體中文。中文介面的內部相容代碼維持 `zh`，不要任意修改既有 schema、控制項 key 或 CLI 參數。引用使用者資料時保留姓名、商標、數字與明確要求逐字保留的原文。更新本 skill 時使用此繁體中文 fork，不要以未在地化的上游 npm 安裝覆蓋。\n';
    const fm = out.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
    const at = fm ? fm[0].length : 0; out = out.slice(0, at) + note + out.slice(at);
  }
  if (out !== source) {
    fs.writeFileSync(file, out);
    report.changedFiles.push({ path: file, beforeBytes: Buffer.byteLength(source), afterBytes: Buffer.byteLength(out) });
  }
}
fs.mkdirSync('docs', { recursive: true });
report.selfTestsPassed = 6;
report.changedFileCount = report.changedFiles.length;
report.syntaxCheckedCount = report.syntaxChecked.length;
fs.writeFileSync('docs/zh-TW-localization-report.json', JSON.stringify(report, null, 2) + '\n');
if (!fs.existsSync('docs/zh-TW-localization.md')) fs.writeFileSync('docs/zh-TW-localization.md', `# 繁體中文（台灣）版本\n\n本 fork 將可編輯文字轉為繁體中文並統一台灣介面用語。保留專案名稱、版本、授權、CLI 參數、英文程式識別名稱及外部素材網址。\n\n## 安裝此版本\n\n\`\`\`bash\ngit clone --branch main --single-branch https://github.com/staruphackers/master-ppt-skill.git\n\`\`\`\n\n先備份原本的 skill，再將本專案的 \`skills/dashi-ppt\` 整個資料夾放入所用 Agent 的 skill 目錄，重新開啟工作階段。不要使用上游 \`npx dashi-ppt-skill@latest\` 更新此版本，否則繁體中文修改會被覆蓋。分支合併後可改從本 fork 的 \`main\` 安裝。\n\n## 涵蓋範圍\n\n已修改 ${report.changedFileCount} 個檔案；通過 ${report.syntaxCheckedCount} 項 JavaScript／JSX／TypeScript、JSON、YAML 或 HTML 內嵌腳本解析檢查。JavaScript 的程式結構、識別名稱、數值與運算子保持一致。中英字典新增 ${report.dictionaryAliasesAdded} 個繁體查找別名，保留原有簡體鍵值及英文翻譯。另有 ${report.dictionaryCollisions.length} 筆別名碰撞，採既有翻譯優先，完整記錄見 JSON 報告。\n\n## 相容性與限制\n\n中文介面的內部代碼仍為 \`zh\`，避免破壞現有資料格式；輸出中的 \`zh-CN\` 標記改為 \`zh-TW\`。文字比對的正規表示式保留簡體相容別名，因此原始碼搜尋仍可能找到必要的簡體技術字串，這不代表介面未翻譯。\n\nPNG／JPG／GIF／影片、圖示中的向量外框文字、遠端示範素材以及歷史 commit 不在文字翻譯範圍，沒有聲稱已重製。未修改套件鎖定檔、授權條款，也沒有發佈 npm 套件或新增付費模型 API。語法檢查不等於瀏覽器互動或 PPTX 匯出端到端測試；若沒有另外的測試證據，不能宣稱這些測試已通過。\n\n## 維護與回復\n\n轉換工具為 \`tools/localize-zh-tw.cjs\`，只在維護期間使用 OpenCC 與解析器，不增加應用程式 runtime 依賴。完整檔案清單與檢查結果見 [JSON 報告](zh-TW-localization-report.json)。合併前回復只需切回 \`main\`；合併後以 Git revert 回復本次合併，不使用強制推送。\n`);
console.log(JSON.stringify({ changedFiles: report.changedFileCount, syntaxChecks: report.syntaxCheckedCount,
  dictionaryAliases: report.dictionaryAliasesAdded, dictionaryCollisions: report.dictionaryCollisions.length,
  htmlScripts: report.htmlScriptsChecked, selfTests: report.selfTestsPassed }, null, 2));
