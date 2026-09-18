// 匯出瀏覽器統一啟動器:三個匯出入口(HTTP 的 PPTX/PDF 路由 + CLI)共用,收斂
// tmpdir 保險絲、headless shell 優先解析、以及沙箱宿主下的 --single-process 重試。
//
// 沙箱宿主(如豆包)的 seatbelt 會被 daemonize 的預覽服務繼承,對 Chromium 的攔截
// 逐層出現過三種形態(均為真實事故):
//   1. mkdtemp ENOENT/EPERM —— 臨時目錄死亡/不可寫(ensure-tmpdir.mjs 處理);
//   2. ProcessSingleton socket 建立失敗 —— confstr 臨時區被攔(headless shell 無此機制);
//   3. Mach 埠註冊被拒 —— bootstrap_check_in Permission denied (1100),多程式
//      Chromium(含 headless shell)啟動早期必經;唯一可行規避是 --single-process
//      (不派生子程式 → 不需要 Mach rendezvous)。
// 策略:預設常規啟動(最大相容);失敗資訊命中沙箱特徵時,帶
// --single-process --in-process-gpu 自動重試一次。匯出渲染的是本 skill 自己生成的
// 受控靜態頁面、程式短生命週期,single-process 模式的穩定性代價在此場景可忽略。
import { getExportBrowserPath } from '../chrome-path.mjs';
import { resolveBrowserTmpdir } from './ensure-tmpdir.mjs';

export const SANDBOX_LAUNCH_FAILURE_RE = /bootstrap_check_in|MachPortRendezvous|ProcessSingleton|Permission denied \(1100\)|mkdtemp/i;

export async function launchExportBrowser(chromium, { fallbackTmpDirs = [], log = () => {} } = {}) {
  const browserTmpdir = resolveBrowserTmpdir(fallbackTmpDirs, log);
  const baseOptions = {
    headless: true,
    executablePath: getExportBrowserPath(),
    env: { ...process.env, TMPDIR: browserTmpdir },
  };
  try {
    return await chromium.launch(baseOptions);
  } catch (error) {
    const message = String((error && error.message) || error);
    if (!SANDBOX_LAUNCH_FAILURE_RE.test(message)) throw error;
    log('[export] 瀏覽器常規啟動被宿主沙箱攔截(Mach/Singleton/tmp),改用 --single-process 重試');
    // --disable-gpu:第 4 層防線。single-process + in-process-gpu 會把 GPU 初始化
    // 拉進瀏覽器主程式,進而向 WindowServer 查詢真實顯示器建立重新整理同步
    // (CVDisplayLinkCreateWithCGDisplay);豆包的服務上下文接觸不到圖形會話,
    // 該呼叫返回 kCVReturnInvalidDisplay 後瀏覽器直接崩潰(newPage 時報
    // "browser has been closed")。headless 匯出全程用軟體渲染即可,不碰顯示服務。
    return chromium.launch({ ...baseOptions, args: ['--single-process', '--in-process-gpu', '--disable-gpu'] });
  }
}
