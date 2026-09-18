export const RUNTIME_TEMPLATE = 'assets/template-swiss.html';

export const LOCAL_OUTPUT_ASSET_ROOTS = ['assets', 'images', 'uploads'];

export const RUNTIME_ASSET_PATHS = [
  RUNTIME_TEMPLATE,
  'assets/skill/dashi-ppt-favicon.png',
  'assets/ui-icons/sidebar.svg',
  'assets/social-icons/github.svg',
  'assets/social-icons/douyin.svg',
  'assets/social-icons/redbook.svg',
  'assets/social-icons/bilibili.svg',
  'assets/unicorn/tech_background_remix_scene.json',
  'assets/unicorn/automations_remix_scene.json',
  'assets/unicorn/moving_into_remix_scene.json',
  'assets/unicorn/goey_balls_remix_scene.json',
  // 場景 JSON 引用的貼圖(藍噪聲/字型圖集)本地快照:引用遠端 assets.unicorn.studio
  // 會讓交付 deck 產生外鏈請求(隱私/離線/供應鏈面),與 SDK 本體一樣全部隨 deck 分發。
  'assets/unicorn/media',
  'assets/vendor/unicornstudio.umd.js',
  // 瀏覽器端可編輯 PPTX 匯出 bundle(伺服器端起不了無頭瀏覽器時的降級通道,
  // 由 scripts/build/build-editable-pptx-browser.mjs 預構建)。
  'assets/vendor/editable-pptx-browser.js',
  'assets/vendor/fonts',
];

export const GENERATED_RUNTIME_OUTPUT_ASSETS = [
  'assets/imported-theme-runtime.js',
];

export const VENDOR_RUNTIME_OUTPUT_ASSETS = [
  'assets/vendor/gsap.min.js',
  'assets/vendor/pptxgen.bundle.js',
  'assets/vendor/html-to-image.js',
  // 瀏覽器內 PDF 合成(靜態伺服器/無 assemble 端點時的 blob 匯出)。
  'assets/vendor/pdf-lib.min.js',
];

export const REQUIRED_OUTPUT_ASSETS = [
  ...RUNTIME_ASSET_PATHS.filter(assetPath => assetPath !== RUNTIME_TEMPLATE),
  ...GENERATED_RUNTIME_OUTPUT_ASSETS,
  ...VENDOR_RUNTIME_OUTPUT_ASSETS,
];
