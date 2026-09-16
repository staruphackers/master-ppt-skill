// 預覽/匯出伺服器的匯出請求鑑權(無副作用,便於單測)。
export function isLoopbackHost(host) {
  return host === '127.0.0.1' || host === 'localhost' || host === '::1';
}

// 匯出端點會啟動 headless Chromium 並寫檔案,需防跨站/區域網濫用:
// - 帶 Origin:必須在允許列表(同源/顯式允許的迴環與 LAN 地址)。
// - 無 Origin 但帶 Referer(瀏覽器頂層導航式下載,如下載 PDF/PPTX 觸發的
//   `location.assign()` 不帶 Origin 頭):Referer 的 origin 必須在允許列表。
// - 都沒有(curl/指令碼):僅當伺服器繫結在迴環時放行;綁 LAN 時拒絕。
export function isExportRequestAllowed({ origin, referer, host, allowedOrigins }) {
  if (origin) return allowedOrigins.has(origin);
  const refererOrigin = safeOrigin(referer);
  if (refererOrigin) return allowedOrigins.has(refererOrigin);
  return isLoopbackHost(host);
}

function safeOrigin(value) {
  if (!value) return null;
  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}
