// 首裝前的 npm registry 探測選源(安裝版 skill 的 project/scripts/ 隨包分發):
// 官方源可達 → 移除專案級 registry 鎖定,走 npm 預設(尊重外網使用者與其全域性映象配置);
// 官方源不可達且 npmmirror 可達 → 鎖定 npmmirror(國內環境)。
// 結果持久化進 project/.npmrc 並打標,只探測一次;預設 .npmrc 已是 npmmirror,
// 本指令碼沒跑到/沒跑成時任何網路仍保底可裝。約定:絕不拋錯阻塞安裝。
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NPMRC = path.join(PROJECT_ROOT, '.npmrc');
const OFFICIAL = 'https://registry.npmjs.org';
const MIRROR = 'https://registry.npmmirror.com';
const PROBED_MARK = '# dashi-registry-probed';

async function reachable(base, timeoutMs = 3000) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    const res = await fetch(`${base}/-/ping`, { signal: controller.signal, redirect: 'follow' });
    clearTimeout(timer);
    // 必須 2xx 才算可達:403/5xx(企業代理攔截頁、映象故障)下 npm install
    // 實際會失敗,不能據此選源。
    return res.ok;
  } catch {
    return false;
  }
}

async function main() {
  const content = existsSync(NPMRC) ? readFileSync(NPMRC, 'utf8') : '';
  if (content.includes(PROBED_MARK)) return;
  const kept = content
    .split('\n')
    .filter((line) => line.trim() && !line.trim().startsWith('registry=') && !line.includes(PROBED_MARK));

  if (await reachable(OFFICIAL)) {
    // 官方可達:去掉專案級 registry 鎖定(npm 走預設或使用者全域性配置)。
  } else if (await reachable(MIRROR)) {
    kept.push(`registry=${MIRROR}`);
  } else {
    // 兩個源都探不到:保持現狀不打標(下次安裝再探),失敗資訊交給 npm 呈現。
    return;
  }
  kept.push(PROBED_MARK);
  writeFileSync(NPMRC, `${kept.join('\n')}\n`);
}

await main().catch(() => {});
