// @ts-check
// 門面檔案(純 re-export):真正實現按域拆分到 scripts/workflow/ 下:
//   theme-registry.mjs  — 契約消費共享域(主題登記表、getLayoutRecord、count 繫結陣列解析)
//   media-slots.mjs     — 媒體判定域(媒體 slot 發現/容量/可寫性)
//   copy-contract.mjs   — copy 預算與角色詞表域(文案密度/字元預算/可填文案葉子判定)
//   inspect-fillplan.mjs— inspect + fillPlan 域(inspectLayout/normalizeProps/陣列後設資料/fillPlan)
//   layout-query.mjs    — layout-query 域(listLayouts 及打分)
// 所有既有 import 路徑('../scripts/skill-workflow-utils.mjs' 等)保持不變;不要在這裡新增實現。
export {
  ROOT,
  THEME_PACKS,
  THEME_PAGES,
  parseArgs,
  compactJson,
  getLayoutRecord,
  getThemePackMetadata,
  layoutExists,
  isCoverCandidate,
  isCoverLikeLayout,
} from './workflow/theme-registry.mjs';

export {
  getMediaSlotsForLayout,
  mediaSlotsCanFit,
  mediaSlotCapacity,
  getPreferredMediaSlot,
  typedMediaItemForSource,
  isDeckLocalMediaSource,
} from './workflow/media-slots.mjs';

export {
  getCopyBudgetsForLayout,
  copyBudget,
  inferCopyDensity,
} from './workflow/copy-contract.mjs';

export {
  NEUTRAL_PLACEHOLDERS,
  ROLE_KEYWORDS,
  inspectLayout,
  normalizeProps,
  unknownPropKeys,
  getAllowedPropKeys,
} from './workflow/inspect-fillplan.mjs';

export {
  listLayouts,
  scoreLayout,
} from './workflow/layout-query.mjs';
