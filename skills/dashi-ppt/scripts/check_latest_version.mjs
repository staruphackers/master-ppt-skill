#!/usr/bin/env node
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
    const remote = git(['ls-remote', '--exit-code', 'origin', 'refs/heads/main']).split(/\s+/)[0];
    if (/^[0-9a-f]{40}$/.test(remote) && remote !== local) {
      process.stdout.write('繁體中文 fork 的 main 與本機提交不同。請先備份並檢查差異，再從 staruphackers/master-ppt-skill 更新；不要使用上游 npx 安裝覆蓋。\n');
    }
  }
} catch {
  // 複製安裝、離線、無 Git 或無權限：不修改任何檔案，也不阻擋簡報生成。
}
