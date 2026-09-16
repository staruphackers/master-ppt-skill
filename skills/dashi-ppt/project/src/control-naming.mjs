const TEXT_REPLACEMENTS = [
  ['圖片面板', '佔比面板'],
  ['資料晶片數量', '指標卡片數量'],
  ['資料晶片數', '指標卡片數'],
  ['資料晶片', '指標卡片'],
  ['持倉行數', '表格行數'],
  ['持倉小卡', '條目小卡'],
  ['持倉氣泡', '條目氣泡'],
  ['持倉', '條目'],
  ['風險等級', '狀態等級'],
  ['風險水位', '狀態強度'],
  ['風險鏈節', '狀態鏈節'],
  ['風險傳導鏈', '狀態傳導鏈'],
  ['風險維度', '狀態維度'],
  ['風險說明', '狀態說明'],
  ['風險解讀', '狀態解讀'],
  ['風險數量', '狀態項數量'],
  ['風險卡數量', '狀態卡數量'],
  ['風險卡', '狀態卡'],
  ['重點風險', '重點項'],
  ['突出風險', '突出項'],
  ['風險', '狀態'],
  ['投資人型別佔比', '分類佔比'],
  ['投資人型別數', '分類數量'],
  ['投資人型別', '分類型別'],
  ['投資人說', '角色說'],
  ['投資人', '角色'],
  ['平均單筆融資金額', '平均指標'],
  ['融資時間軸', '時間軸'],
  ['融資額', '數值'],
  ['融資金額', '數值指標'],
  ['融資規模', '數值規模'],
  ['融資里程碑', '里程碑'],
  ['融資', '數值'],
  ['資本來源', '來源'],
  ['資本佔比', '佔比'],
  ['資本熱度', '關注度'],
  ['長期資本', '長期支撐'],
  ['資本主張', '核心主張'],
  ['資本', '資源'],
  ['估值收入數', '指標數值'],
  ['估值柱條', '指標柱條'],
  ['估值標記', '指標標記'],
  ['估值錨', '參考錨'],
  ['估值兌現', '指標兌現'],
  ['合理估值', '合理指標'],
  ['估值', '指標'],
  ['賽道圖例', '分類圖例'],
  ['賽道行數', '分類行數'],
  ['賽道條數', '分類條數'],
  ['賽道數量', '分類數量'],
  ['賽道層數', '分類層數'],
  ['賽道組數', '分類組數'],
  ['賽道段數', '分類段數'],
  ['賽道列', '分類列'],
  ['賽道標籤', '分類標籤'],
  ['賽道副標', '分類副標'],
  ['賽道徽標', '分類徽標'],
  ['賽道瓷磚', '分類塊'],
  ['賽道卡片', '分類卡片'],
  ['賽道卡', '分類卡'],
  ['賽道色', '分類色'],
  ['重點賽道', '重點分類'],
  ['賽道', '分類'],
  ['輪次圖例', '階段圖例'],
  ['輪次數量', '階段數量'],
  ['輪次列', '階段列'],
  ['輪次結構', '階段結構'],
  ['輪次', '階段'],
  ['金額標籤', '數值標籤'],
  ['金額數字', '數值數字'],
  ['金額標註', '數值標註'],
  ['金額分層數', '數值分層數'],
  ['金額區間', '數值區間'],
  ['金額列', '數值列'],
  ['金額', '數值'],
  ['音樂人型別', '物件型別'],
  ['音樂人數量', '條目數量'],
  ['音樂人', '成員'],
  ['曲目清單', '條目清單'],
  ['曲目列表', '條目列表'],
  ['曲目數量', '條目數量'],
  ['曲目表', '條目表'],
  ['曲目標籤', '條目標籤'],
  ['曲目', '條目'],
  ['播放量條', '資料條'],
  ['播放量', '數值'],
  ['播放遊標', '進度遊標'],
  ['版稅', '指標'],
  ['供應鏈網路圖', '關係網路圖'],
  ['供應鏈節點', '關係節點'],
  ['供應鏈', '關係鏈'],
  ['合規交付鏈', '交付鏈'],
  ['合規臺賬', '狀態臺賬'],
  ['合規', '狀態'],
  ['行業基準', '參考基準'],
  ['行業標籤', '分類標籤'],
  ['行業客戶', '客戶型別'],
  ['行業', '分類'],
  ['站臺號', '大號編號'],
  ['看板行數', '列表行數'],
  ['看板', '列表'],
  ['季度列數', '時間列數'],
  ['季度柱數', '時間柱數'],
  ['季度網格', '時間網格'],
  ['季度分割槽', '時間分割槽'],
  ['季度面板', '時間面板'],
  ['季度', '時間段'],
  ['主打第幾首', '重點序號'],
  ['主打高亮', '重點高亮'],
  ['主打曲目', '重點條目'],
  ['主打', '重點'],
  ['唱片位置', '視覺元素位置'],
  ['唱片同心紋路', '環形紋理'],
  ['唱紋', '環形紋理'],
  ['專輯封面', '封面圖'],
  ['創作者印章', '身份印章'],
  ['創始人 / 分類', '角色 / 分類'],
  ['創始人', '角色'],
  ['公司晶片', '公司標籤'],
  ['公司標籤', '物件標籤'],
  ['客戶試點', '試點'],
  ['使用者行為', '行為'],
  ['健康度', '狀態度'],
  ['AI Capital Lab', '研究機構'],
  ['AI Capital', '研究機構'],
];

const KEY_REPLACEMENTS = [
  ['unicornScene', 'dynamicVisual'],
  ['risk', 'status'],
  ['asset', 'category'],
  ['tracklist', 'itemList'],
  ['track', 'guide'],
  ['record', 'visual'],
  ['scene', 'content'],
  ['deal', 'example'],
  ['round', 'stage'],
  ['sector', 'category'],
  ['valuation', 'metric'],
  ['capital', 'resource'],
  ['funding', 'metric'],
  ['holding', 'row'],
  ['portfolio', 'collection'],
  ['artist', 'member'],
  ['music', 'media'],
];

const REPEATED_GENERIC_TEXT_REPLACEMENTS = [
  ['分類分類', '分類'],
  ['數值數值', '數值'],
  ['狀態狀態', '狀態'],
  ['條目條目', '條目'],
  ['指標指標', '指標'],
];

const ENGLISH_OPTION_LABELS = {
  absolute: '絕對值',
  accent: '強調色',
  all: '全部',
  alternate: '交替',
  amount: '數值',
  arabic: '阿拉伯數字',
  area: '面積圖',
  arrow: '箭頭',
  asc: '升序',
  ascend: '上升',
  auto: '自適應',
  automations: '自動化',
  band: '色帶',
  bar: '柱狀',
  bars: '條形',
  below: '下方',
  black: '黑色',
  bl: '左下',
  blue: '藍色',
  bottom: '底部',
  'bottom-left': '左下',
  'bottom-right': '右下',
  both: '兩側',
  box: '方框',
  br: '右下',
  bubble: '氣泡',
  bubbles: '氣泡',
  bullish: '積極',
  burst: '爆發',
  cards: '卡片',
  category: '分類',
  cautions: '謹慎',
  cautious: '謹慎',
  cells: '格子',
  center: '居中',
  centered: '居中',
  'center-left': '左中',
  change: '變化',
  chart: '圖表',
  circle: '圓形',
  cluster: '聚類',
  collage: '拼貼',
  color: '彩色',
  column: '列式',
  columns: '多列',
  constellation: '星群',
  contain: '完整顯示',
  cool: '冷色',
  corner: '角標',
  count: '數量',
  cover: '填充裁剪',
  dark: '深色',
  dashed: '虛線',
  data: '資料',
  dawn: '晨光',
  default: '預設',
  delta: '差值',
  desc: '降序',
  descend: '下降',
  dest: '目標',
  diverging: '分歧',
  donut: '環形圖',
  dot: '圓點',
  dots: '點陣',
  dumbbell: '啞鈴圖',
  duotone: '雙色',
  dusk: '暮色',
  ember: '暖焰',
  feature: '重點圖文',
  figure: '大數字',
  fill: '填充',
  flat: '平鋪',
  flow: '流程',
  from: '起點',
  full: '全幅',
  funnel: '漏斗',
  gate: '閘門',
  gauge: '儀表',
  gauges: '儀表組',
  glass: '玻璃',
  gloss: '光澤',
  glow: '發光',
  goey: '流體',
  gradient: '漸變',
  graphite: '石墨',
  green: '綠色',
  grid: '網格',
  group: '分組',
  grouped: '分組',
  hatched: '斜紋',
  heat: '熱度',
  heatmap: '熱力圖',
  hero: '主視覺',
  'hero-left': '主視覺在左',
  'hero-right': '主視覺在右',
  horizontal: '橫向',
  image: '圖片',
  ink: '墨色',
  justified: '兩端對齊',
  ladder: '階梯',
  landscape: '橫圖',
  layers: '層級',
  left: '左側',
  lens: '鏡頭',
  letter: '字母',
  level: '水平',
  light: '淺色',
  lime: '熒光綠',
  line: '折線',
  linear: '線性',
  lines: '線條',
  list: '列表',
  lollipop: '棒棒糖',
  map: '地圖',
  media: '媒體',
  mesh: '網格',
  meters: '儀表',
  midnight: '午夜',
  mirror: '映象',
  mono: '單色',
  month: '月度',
  monthly: '按月',
  mosaic: '馬賽克',
  moving: '動態',
  multi: '多色',
  muted: '柔和',
  nested: '巢狀',
  none: '無',
  norm: '標準化',
  normal: '常規',
  number: '數字',
  orbit: '環繞',
  outline: '描邊',
  overlay: '疊加',
  panel: '面板',
  paper: '紙面',
  pie: '餅圖',
  pill: '膠囊',
  pincer: '夾擊',
  pink: '粉色',
  plain: '純淨',
  portrait: '豎圖',
  pressure: '壓力',
  primary: '主色',
  pyramid: '金字塔',
  quote: '引語',
  radar: '雷達',
  radial: '放射',
  radius: '半徑',
  ratio: '比例',
  right: '右側',
  ring: '環形',
  roman: '羅馬數字',
  rounded: '圓角',
  row: '橫排',
  rows: '多行',
  scatter: '散點',
  score: '評分',
  segment: '分段',
  segments: '分段',
  series: '系列',
  side: '側邊',
  solid: '純色',
  source: '來源',
  spark: '亮點',
  spiral: '螺旋',
  split: '分欄',
  'split-left': '左分欄',
  'split-right': '右分欄',
  slope: '斜率',
  square: '正方形',
  stack: '堆疊',
  stacked: '堆疊',
  step: '階梯',
  steps: '步驟',
  table: '表格',
  tags: '標籤',
  tech: '科技',
  text: '文字',
  ticket: '票卡',
  timeline: '時間軸',
  tl: '左上',
  to: '終點',
  top: '頂部',
  'top-left': '左上',
  total: '總計',
  tr: '右上',
  treemap: '矩形樹圖',
  underline: '下劃線',
  unicorn: '動態視覺',
  vapor: '霧化',
  vertical: '縱向',
  violet: '紫色',
  vs: '對比',
  waterfall: '瀑布',
  warm: '暖色',
  white: '白色',
  year: '年度',
  yearly: '按年',
  yellow: '黃色',
  zigzag: '折線',
};

// 匯入期清洗:把外部設計源的歷史詞彙替換為規範文案。只在 themes:import / metadata:update
// 的生成鏈路呼叫;生成產物(generated-metadata.js)裡的文字已是清洗結果,執行時無需重複。
export function sanitizeImportedControlText(value) {
  if (typeof value !== 'string') return value;
  let next = value;
  for (const [from, to] of TEXT_REPLACEMENTS) {
    next = next.replaceAll(from, to);
  }
  for (const [from, to] of REPEATED_GENERIC_TEXT_REPLACEMENTS) {
    next = next.replaceAll(from, to);
  }
  return next.replace(/\s+/g, ' ').trim();
}

// 深度清洗 controls 的 UI 文案(string 葉子)。value/image/default 是資料而非文案:
// default 與 defaultProps 同源,清洗它會造成兩個 default surface 漂移(contract-risk-audit 會報 mismatch)。
export function sanitizeImportedControls(value) {
  if (typeof value === 'string') return sanitizeImportedControlText(value);
  if (Array.isArray(value)) return value.map(sanitizeImportedControls);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [
    key,
    key === 'value' || key === 'image' || key === 'default' ? item : sanitizeImportedControls(item),
  ]));
}

// 執行時歸一化:資料在生成期已清洗(130 條匯入替換在全量 controls 上實測零命中),只保留空白歸一化。
export function normalizeControlText(value) {
  if (typeof value !== 'string') return value;
  return value.replace(/\s+/g, ' ').trim();
}

export function normalizeControlValue(value) {
  if (typeof value === 'string') return normalizeControlText(value);
  if (Array.isArray(value)) return value.map(normalizeControlValue);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [
    key,
    key === 'value' || key === 'image' ? item : normalizeControlValue(item),
  ]));
}

export function normalizeControlOptions(options) {
  if (!Array.isArray(options)) return normalizeControlValue(options);
  return options.map((option, index) => normalizeControlOption(option, index));
}

function normalizeControlOption(option, index = 0) {
  if (Array.isArray(option)) {
    if (isPaletteOption(option)) {
      return {
        value: option.map(item => item),
        label: `配色 ${index + 1}`,
        color: paletteSwatchBackground(option),
      };
    }
    return {
      value: option[0],
      label: normalizeOptionLabel(option[1] ?? option[0], option[0], index),
      image: option[2] || '',
      color: option[3] || '',
    };
  }
  if (option && typeof option === 'object' && 'value' in option) {
    return {
      ...normalizeControlValue(option),
      value: option.value,
      label: normalizeOptionLabel(option.label ?? option.value, option.value, index),
    };
  }
  return {
    value: option,
    label: normalizeOptionLabel(option, option, index),
  };
}

export function normalizeOptionLabel(label, value = label, index = 0) {
  if (value == null || label == null) return '隱藏';
  if (isHexColor(value) && (label === value || String(label).trim() === String(value).trim())) {
    return `顏色 ${index + 1}`;
  }
  const normalized = normalizeControlText(String(label));
  const direct = optionLabelForValue(normalized);
  if (direct) return direct;
  const byValue = optionLabelForValue(value);
  if (byValue && (normalized === String(value) || /^[A-Za-z0-9_./ -]+$/.test(normalized))) return byValue;
  return normalized
    .replace(/\bYES\b/g, '是')
    .replace(/\bNO\b/g, '否')
    .replace(/\b8-bit\b/gi, '畫素');
}

function optionLabelForValue(value) {
  if (value == null) return '隱藏';
  const key = String(value).trim().toLowerCase();
  return ENGLISH_OPTION_LABELS[key] || null;
}

function isHexColor(value) {
  return /^#[0-9a-f]{3,8}$/i.test(String(value || ''));
}

function isPaletteOption(item) {
  return item.length > 1 && item.every(value => isHexColor(value));
}

function paletteSwatchBackground(colors) {
  const count = Math.max(1, colors.length);
  if (count === 1) return colors[0];
  const stops = colors.map((color, index) => {
    const from = index / count * 100;
    const to = (index + 1) / count * 100;
    return `${color} ${from}% ${to}%`;
  });
  return `linear-gradient(135deg, ${stops.join(', ')})`;
}

export function normalizePublicControls(controls, context = {}) {
  const seen = new Map();
  return (controls || []).map((control, index) => {
    const normalized = normalizePublicControl(control, { ...context, index });
    const basePublicKey = normalized.publicKey || normalized.key;
    const count = seen.get(basePublicKey) || 0;
    seen.set(basePublicKey, count + 1);
    if (!count) return normalized;
    return {
      ...normalized,
      publicKey: `${basePublicKey}${count + 1}`,
    };
  });
}

export function normalizePublicControl(control, context = {}) {
  const key = control.key || control.prop;
  const label = normalizeControlText(control.label || key);
  const desc = normalizeControlText(control.desc || control.description || control.describe);
  const publicKey = normalizePublicKey(key, { ...control, label, desc }, context);
  // description/describe/publicLabel 是源 metadata 的別名欄位,歸一化為 label/desc 後不再重複輸出。
  const { description, describe, publicLabel, ...rest } = control;
  return {
    ...rest,
    key,
    publicKey,
    label,
    desc,
    options: normalizeControlOptions(control.options),
  };
}

export function normalizePublicKey(key, control = {}) {
  if (!key) return key;
  const exact = exactPublicKey(key);
  if (exact) return exact;

  let next = key;
  for (const [from, to] of KEY_REPLACEMENTS) {
    next = replaceKeyToken(next, from, to);
  }

  if (next !== key) return lowerFirst(next);

  const text = `${control.label || ''} ${control.desc || control.description || ''}`;
  if (/(?:状态等级|狀態等級)|(?:状态强度|狀態強度)/.test(text)) return key.startsWith('show') ? 'showStatusRating' : 'statusLevel';
  if (/(?:分类|分類)/.test(text) && key.endsWith('Count')) return 'categoryCount';
  if (/(?:条目|條目)/.test(text) && key.endsWith('Count')) return 'itemCount';
  if (/(?:数值|數值)/.test(text) && /^show/i.test(key)) return 'showValueLabels';
  return key;
}

export function resolvePublicPropAliases(props = {}, controls = []) {
  const aliasToKey = new Map();
  const rawKeys = new Set();
  for (const control of controls || []) {
    if (!control?.key) continue;
    rawKeys.add(control.key);
    if (control.publicKey && control.publicKey !== control.key) aliasToKey.set(control.publicKey, control.key);
  }

  const next = {};
  const appliedAliases = {};
  for (const [key, value] of Object.entries(props || {})) {
    const rawKey = aliasToKey.get(key);
    if (rawKey && !Object.hasOwn(props, rawKey)) {
      next[rawKey] = value;
      appliedAliases[key] = rawKey;
    } else {
      next[key] = value;
    }
  }
  return { props: next, appliedAliases, rawKeys, aliasToKey };
}

export function toPublicProps(props = {}, controls = []) {
  const keyToAlias = new Map();
  for (const control of controls || []) {
    if (control?.key) keyToAlias.set(control.key, control.publicKey || control.key);
  }
  return Object.fromEntries(Object.entries(props || {}).map(([key, value]) => [
    keyToAlias.get(key) || key,
    value,
  ]));
}

function exactPublicKey(key) {
  const exact = {
    dealCount: 'exampleCount',
    showDeals: 'showExamples',
    riskCount: 'statusItemCount',
    showRisk: 'showStatus',
    showRating: 'showStatusRating',
    showLevel: 'showStatusLevel',
    showValuation: 'showMetricMarker',
    showTracklist: 'showItemList',
    trackCount: 'itemCount',
    recordSide: 'visualSide',
    sceneCount: 'contentItemCount',
    showScenes: 'showItemTags',
    quarterCount: 'timeColumnCount',
    assetCount: 'categoryCount',
    flowStageCount: 'stepCount',
    segmentCount: 'segmentCount',
    tagCount: 'tagCount',
    showShareBar: 'showShareBar',
  };
  return exact[key] || null;
}

function replaceKeyToken(value, from, to) {
  const lowerPattern = new RegExp(`(^|[_-])${from}(?=$|[_-])`, 'ig');
  const upperPattern = new RegExp(`${upperFirst(from)}(?=$|[A-Z])`, 'g');
  return value
    .replace(lowerPattern, (match, prefix) => `${prefix}${to}`)
    .replace(upperPattern, upperFirst(to));
}

function lowerFirst(value) {
  return value ? `${value[0].toLowerCase()}${value.slice(1)}` : value;
}

function upperFirst(value) {
  return value ? `${value[0].toUpperCase()}${value.slice(1)}` : value;
}
