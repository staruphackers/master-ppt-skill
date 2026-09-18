// 零依賴的數值/陣列安全工具:主題元件在「資料 → 幾何」派生計算處統一使用,
// 替代各元件自造的 finiteNumber/safeArray 變體。契約層只保證 authored 輸入形狀,
// 除法、Math.max、比例等派生值的有限性由這裡兜底(見 scripts/test/test-all-theme-finite-render.mjs 門禁)。

export const safeNumber = (value, fallback = 0) => {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
};

export const safeArray = value => (Array.isArray(value) ? value : []);

// 用作分母:非有限或 0 時退回 fallback,保證除法結果有限。
export const safeDenominator = (value, fallback = 1) => {
  const n = Number(value);
  return Number.isFinite(n) && n !== 0 ? n : fallback;
};

// 空陣列 / 全非數值時返回 fallback,杜絕 Math.max(...[]) 的 -Infinity。
export const safeMax = (values, fallback = 1) => {
  let max = -Infinity;
  for (const value of safeArray(values)) {
    const n = Number(value);
    if (Number.isFinite(n) && n > max) max = n;
  }
  return max === -Infinity ? fallback : max;
};

export const safeMin = (values, fallback = 0) => {
  let min = Infinity;
  for (const value of safeArray(values)) {
    const n = Number(value);
    if (Number.isFinite(n) && n < min) min = n;
  }
  return min === Infinity ? fallback : min;
};

export const clamp = (value, min, max) => {
  const n = safeNumber(value, min);
  return Math.min(Math.max(n, min), max);
};

// num/den 的安全比例:分母為 0 或任一非有限時返回 fallback。
export const safeRatio = (num, den, fallback = 0) => {
  const n = Number(num);
  const d = Number(den);
  if (!Number.isFinite(n) || !Number.isFinite(d) || d === 0) return fallback;
  return n / d;
};

// 百分比便捷封裝:safeRatio 的 ×100 版本,預設鉗在 [0, 100]。
export const safePercent = (num, den, fallback = 0) => clamp(safeRatio(num, den, fallback / 100) * 100, 0, 100);
