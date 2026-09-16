// JAD-182:theme03 的 per-theme 控制元件特例描述符(與主題同目錄,index.jsx 通用消費)。
import { ICONS as DECOR_ICONS } from './source/src/icons.js';
import { PRESET_3D } from './source/src/preset3d.js';

export const overrides = {
  // 注入的裝飾控制元件 + 全域性強調色控制元件(順序與原內聯一致)
  injectControls: [
    { key: 'showDecor', label: '裝飾圖片', type: 'toggle', default: false },
    {
      key: 'decorSrc',
      label: '裝飾元素',
      type: 'icons',
      default: null,
      options: DECOR_ICONS.map(({ src, label }) => ({ value: src, label, image: src })),
    },
    { key: 'decorScale', label: '圖片大小', type: 'range', default: 1, min: 0.6, max: 1.6, step: 0.05 },
    {
      key: 'accent',
      label: '強調色',
      type: 'select',
      default: 'blue',
      options: [
        { value: 'blue', label: '電光藍' },
        { value: 'lime', label: '熒光綠' },
      ],
    },
  ],
  // 注入前先剔除原頁面裡同 key 的控制元件
  replaceKeys: ['accent', 'theme', 'showDecor', 'decorSrc', 'decorScale'],
  injectDefaults: { showDecor: false, decorSrc: null, decorScale: 1, accent: 'blue' },
  preset3dBySlot: PRESET_3D,
  swatchKeys: ['accent'],
};
