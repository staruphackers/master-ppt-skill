// JAD-214:純裝飾槽位的契約層標記(資料描述符,參照 per-theme overrides 機制)。
// 這裡只宣告"哪些 defaultProps 鍵是純裝飾、不該被 Agent 當文案填寫";
// 由 scripts/skill-workflow-utils.mjs 的 inspect 契約層消費,不改主題元件視覺。
//
// 收編範圍保守:只標已確認的純裝飾位。
// theme09_page007/page111 的 signature(封面/結語手寫花字)曾在此黑名單裡,
// 但它其實是完全 props 驅動的真實品牌落款文案(非結構裝飾),黑名單把它排除出
// copyKeys 後,Agent 只能任由示例品牌名 'AInsight' 出現在每份生成的畫冊裡——
// 已移除該條目,交回 copyKeys 正常暴露(見 theme09-report.json 審計結論)。
export const DECORATIVE_SLOTS = {};

export function getDecorativeKeys(layout) {
  return DECORATIVE_SLOTS[layout] || [];
}
