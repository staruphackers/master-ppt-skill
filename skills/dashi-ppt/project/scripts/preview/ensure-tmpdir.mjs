// tmpdir 保險絲:沙箱型 Agent App(如豆包)帶來的兩類臨時目錄故障,都在這裡兜住。
//
// 事故一(0.1.25):宿主在自己的沙箱裡啟動常駐預覽服務,程式繼承了指向宿主沙箱臨時
// 目錄的 TMPDIR;宿主會話結束後該目錄被清理而服務還活著——之後匯出時 Playwright
// launch 內部的 mkdtemp 直接 ENOENT。處理:檢測到 os.tmpdir() 不存在就摘掉
// TMPDIR/TMP/TEMP,回退系統預設位置。
//
// 事故二(0.1.27):宿主的 macOS seatbelt 沙箱會被 daemonize 的服務程式繼承。程式
// 沒有 TMPDIR 時,Chrome 內部的 NSTemporaryDirectory() 走 confstr 的
// /var/folders/.../T/ 路徑去建 ProcessSingleton 的 socket 目錄——該位置被沙箱拒絕,
// Chrome 報 "Failed to create socket directory / Failed to create a ProcessSingleton"
// 後主動退出(exitCode=21),而同一沙箱對 /tmp 或 deck 輸出目錄是放行的。處理:匯出
// 前實測探活一個真正可寫的臨時目錄(候選:當前 os.tmpdir() → 顯式 /tmp → 呼叫方給的
// 兜底目錄,如匯出目錄),並把它顯式設定為瀏覽器子程式的 TMPDIR,讓 Chrome 的內部
// 臨時路徑一併改道到可寫位置。
//
// 不重建宿主的沙箱目錄——那隨時會再被清理。
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

export function ensureUsableTmpdir(log = () => {}) {
  const current = os.tmpdir();
  if (fs.existsSync(current)) return current;
  for (const key of ['TMPDIR', 'TMP', 'TEMP']) delete process.env[key];
  const fallback = os.tmpdir();
  try {
    fs.mkdirSync(fallback, { recursive: true });
  } catch {
    // 系統預設臨時目錄建不出來的話,後續消費方會用原始錯誤暴露問題,這裡不吞。
  }
  log(`[tmpdir] ${current} 不存在(宿主沙箱已清理),已回退到 ${fallback}`);
  return fallback;
}

// 實測目錄可寫:真實 mkdtemp 一次再刪掉。僅 existsSync 不夠——沙箱下目錄"存在但不可寫"
// 與"可寫"無法從後設資料區分。
function probeWritable(dir) {
  try {
    const probe = fs.mkdtempSync(path.join(dir, '.tmp-probe-'));
    fs.rmSync(probe, { recursive: true, force: true });
    return true;
  } catch {
    return false;
  }
}

// 返回一個實測可寫的臨時目錄,供瀏覽器子程式用作 TMPDIR。extraFallbacks 裡傳服務
// 自身必然可寫的位置(比如匯出目錄),作為沙箱連 /tmp 都拒絕時的最後兜底。
export function resolveBrowserTmpdir(extraFallbacks = [], log = () => {}) {
  ensureUsableTmpdir(log);
  const candidates = [os.tmpdir(), '/tmp', ...extraFallbacks];
  for (const candidate of candidates) {
    if (!candidate) continue;
    try {
      fs.mkdirSync(candidate, { recursive: true });
    } catch {
      continue;
    }
    if (probeWritable(candidate)) {
      if (candidate !== candidates[0]) {
        log(`[tmpdir] ${candidates[0]} 不可寫(宿主沙箱限制),臨時目錄改用 ${candidate}`);
        // 同時修正本程式的 TMPDIR:Playwright 在 node 側也會 mkdtemp(playwright-artifacts),
        // 只給瀏覽器子程式改道不夠,宿主程式自己的 os.tmpdir() 消費方也必須落到可寫位置。
        process.env.TMPDIR = candidate;
        delete process.env.TMP;
        delete process.env.TEMP;
      }
      return candidate;
    }
  }
  // 全部不可寫:返回預設位置,讓瀏覽器用原始錯誤暴露問題。
  return os.tmpdir();
}
