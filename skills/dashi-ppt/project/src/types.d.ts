// JAD-169:核心物件的型別契約。配合 `// @ts-check` + JSDoc,把「讀了物件上不存在的欄位」
// 這類靜默失效變成 CI typecheck 失敗(見 jsconfig.json / npm run typecheck)。

/** 主題頁控制元件(generated-metadata 裡 page.controls[] 的元素)。 */
export interface ControlRecord {
  key?: string;
  prop?: string;
  type?: string;
  label?: string;
  default?: unknown;
  min?: unknown;
  max?: unknown;
  display?: string;
  options?: unknown;
  [extra: string]: unknown;
}

/** layout:query 的 compact 候選行(scoreLayout 讀取的形狀)。pageNumber 是排序 tiebreak,
 *  必須由 compact inspectLayout 輸出提供(否則 scoreLayout 得 NaN,排序失效)。 */
export interface CompactLayoutCandidate {
  layout: string;
  theme: string;
  pageNumber: number;
  label?: string;
  slot?: string;
  roles: string[];
  mediaSlots: Array<Record<string, unknown>>;
  [extra: string]: unknown;
}

/** listLayouts 的入參。 */
export interface ListLayoutsOptions {
  theme?: string;
  role?: string;
  keyword?: string;
  needsMedia?: boolean;
  plannedImages?: unknown;
  providedImages?: unknown;
  providedMedia?: unknown;
  imageGen?: boolean;
  needsVisual?: boolean;
  mediaCount?: number | null;
  mediaKind?: string | null;
  requireInitialMedia?: boolean;
  limit?: number;
  /** 同分候選洗牌種子;預設時每次呼叫隨機。 */
  seed?: string | number | null;
}

/** THEME_PAGES / GENERATED_THEME_PAGES 的元素形狀。注意:**沒有** `spec` 欄位。 */
export interface PageRecord {
  key: string;
  themeKey: string;
  pageNumber: number;
  layout: string;
  slot?: string;
  label?: string;
  bgClass?: string;
  staticHtml?: string;
  controls?: ControlRecord[];
  defaultProps?: Record<string, unknown>;
}
