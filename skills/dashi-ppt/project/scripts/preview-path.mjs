// URL -> 相對路徑 的無副作用 helper(供預覽伺服器用)。
// 單獨成模組以便單測,且不觸發伺服器監聽。
export function safePathname(url) {
  let parsed;
  try {
    parsed = new URL(url, 'https://local.invalid');
  } catch {
    return null;
  }
  let decoded;
  try {
    decoded = decodeURIComponent(parsed.pathname);
  } catch {
    // 畸形百分號編碼(如 /%、/%zz):返回 null 讓呼叫方回 400,而非拋錯崩潰程式。
    return null;
  }
  return decoded.split('/').filter((part) => part && part !== '..').join('/');
}
