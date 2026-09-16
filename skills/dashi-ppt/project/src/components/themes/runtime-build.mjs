// JAD-203:交付件瀏覽器執行時(imported-theme-runtime.js)的構建配置與構建器。
//
// 單一事實來源:client-runtime.jsx 經 `@dashi/theme-registry` 別名引入登入檔。兩條等價路徑:
//   - 源路徑(dev):別名指向「全主題簽入登入檔」或「按 deck 裁剪的源登入檔」(引 themeNN/runtime.jsx + 源 context)。
//   - 模組路徑(安裝版):別名指向「引預構建 minified 模組(themeNN.module.mjs)的登入檔」,
//     安裝版無可讀主題 *.jsx 源也能連結出與源路徑等價的執行時(單一 React,水合行為一致)。
//
// 預構建產物(build-theme-runtime.mjs 產出,sync 隨 skill 發):
//   <THEME_RUNTIME_DIR>/<themeKey>.module.mjs            —— 每主題 minified ESM 模組(react external)。
//   <THEME_RUNTIME_DIR>/imported-theme-runtime.<key>.js  —— 每主題自包含 IIFE(= 模組路徑 [單主題]),單主題 deck 直接複製。
import fs from 'node:fs';
import path from 'node:path';
import { buildSync } from 'esbuild';
import {
  buildThemeModuleEntrySource,
  buildThemeRegistrySource,
} from './theme-registry-codegen.mjs';

// 相對 ROOT(= 倉庫根 / 安裝版 project 根)。dist/ 在 .gitignore,但隨 skill:sync 發到 project/。
export const THEME_RUNTIME_DIR = 'dist/theme-runtime';

// 主題模組對 react 全部 external —— 由外層 client-runtime 打包統一解析,確保單一 React 例項。
const REACT_EXTERNALS = ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime', 'react/jsx-dev-runtime'];

// JAD-203 修復:把所有 react 子路徑別名到 `<root>/node_modules` 下的單一絕對路徑。
//
// 根因:模組路徑是兩段式 bundle —— client-runtime.jsx(在 ROOT/src)與預構建的 *.module.mjs
// (寫到 outDir,sync 時即安裝版 project/dist)由外層 esbuild 一起打包;後者對 react external,
// 其裸 `import "react"` 由 esbuild 相對「模組檔案所在目錄」解析。當 outDir 不在 ROOT 的
// node_modules 解析鏈上(安裝版 sync:root=dev 倉、outDir=安裝版),或 outDir 旁存在另一份
// react 時,兩個 importer 各自解析到不同的 react 物理副本 → 打進兩份 React → react-dom 的
// dispatcher 裝在副本 A,元件經副本 B 調 hook 取到 null dispatcher → 瀏覽器水合
// `Cannot read properties of null (reading 'useMemo')`、整片空白。
// nodePaths 只是「找不到時」的回退錨點,擋不住「相對 importer 已能找到另一份 react」。
// 用絕對路徑別名強制所有 react specifier 指向同一份,徹底去重(對源路徑無影響:本就是同一份)。
function reactAliasMap(root) {
  const nm = path.join(root, 'node_modules');
  return {
    react: path.join(nm, 'react'),
    'react-dom': path.join(nm, 'react-dom'),
    'react-dom/client': path.join(nm, 'react-dom/client.js'),
    'react/jsx-runtime': path.join(nm, 'react/jsx-runtime.js'),
    'react/jsx-dev-runtime': path.join(nm, 'react/jsx-dev-runtime.js'),
  };
}

export function themeModuleFileName(themeKey) {
  return `${themeKey}.module.mjs`;
}

export function themeBundleFileName(themeKey) {
  return `imported-theme-runtime.${themeKey}.js`;
}

export function prebuiltBundlePath(root, themeKey) {
  return path.join(root, THEME_RUNTIME_DIR, themeBundleFileName(themeKey));
}

export function prebuiltModulePath(root, themeKey) {
  return path.join(root, THEME_RUNTIME_DIR, themeModuleFileName(themeKey));
}

// 共享的 client-runtime 打包配置。源路徑與模組路徑只在 registryPath(別名目標)上不同 ——
// 其餘完全一致,保證兩條路徑產出等價(JAD-201 的源路徑行為不變)。
function clientRuntimeBuildOptions({ root, outFile, registryPath }) {
  return {
    entryPoints: [path.join(root, 'src/components/themes/client-runtime.jsx')],
    outfile: outFile,
    bundle: true,
    minify: true,
    format: 'iife',
    globalName: 'DeckJsxRuntime',
    platform: 'browser',
    jsx: 'automatic',
    alias: {
      '@dashi/theme-registry': registryPath,
      // 強制 react 各子路徑解析到 ROOT 的單一副本(去重根因,見 reactAliasMap)。
      ...reactAliasMap(root),
    },
    loader: {
      '.css': 'text',
    },
    inject: [path.join(root, 'src/react-shim.js')],
    // 連結到的預構建模組可能位於無 node_modules 的目錄(如 sync 寫入的 project/dist)。
    // nodePaths 是回退解析錨點;主題源路徑正常解析時不會用到,故不改變 JAD-201 的源路徑產出。
    nodePaths: [path.join(root, 'node_modules')],
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    logLevel: 'silent',
  };
}

export function buildClientRuntime({ root, outFile, registryPath }) {
  buildSync(clientRuntimeBuildOptions({ root, outFile, registryPath }));
}

// 把一組預構建主題模組連結成交付件執行時(安裝版/模組路徑)。registryPath 臨時生成,引
// <moduleDir>/<themeKey>.module.mjs;外層 esbuild 把這些模組 + react 一起打包(單一 React)。
export function buildClientRuntimeFromModules({ root, outFile, themeKeys, moduleDir = path.join(root, THEME_RUNTIME_DIR), cacheDir }) {
  const importPrefix = `${moduleDir}${path.sep}`;
  const source = buildThemeRegistrySource(themeKeys, { importPrefix, fromModules: true, generated: false });
  const { registryPath, cleanup } = writeTempRegistry(root, source, cacheDir);
  try {
    buildClientRuntime({ root, outFile, registryPath });
  } finally {
    cleanup();
  }
}

// 從主題原始碼(themeNN/runtime.jsx + 源 context)預構建該主題的 minified ESM 模組。
// react external,供模組路徑連結;.jsx/.css 在此一次性內聯+minify,產物不含可讀元件源。
export function buildThemeModule({ root, themeKey, outDir }) {
  const themesDir = path.join(root, 'src/components/themes');
  const entrySource = buildThemeModuleEntrySource(themeKey, { importPrefix: `${themesDir}${path.sep}` });
  const cacheDir = path.join(root, 'node_modules/.cache/dashi-theme-runtime-build');
  fs.mkdirSync(cacheDir, { recursive: true });
  const entryPath = path.join(cacheDir, `module-entry-${themeKey}-${process.pid}-${Date.now()}-${rand()}.jsx`);
  fs.writeFileSync(entryPath, entrySource);
  const outFile = path.join(outDir, themeModuleFileName(themeKey));
  fs.mkdirSync(outDir, { recursive: true });
  try {
    buildSync({
      entryPoints: [entryPath],
      outfile: outFile,
      bundle: true,
      minify: true,
      format: 'esm',
      platform: 'browser',
      jsx: 'automatic',
      external: REACT_EXTERNALS,
      loader: {
        '.css': 'text',
      },
      inject: [path.join(root, 'src/react-shim.js')],
      nodePaths: [path.join(root, 'node_modules')],
      define: {
        'process.env.NODE_ENV': '"production"',
      },
      logLevel: 'silent',
    });
  } finally {
    try { fs.rmSync(entryPath, { force: true }); } catch {}
  }
  return outFile;
}

function writeTempRegistry(root, source, cacheDirOverride) {
  const cacheDir = cacheDirOverride || path.join(root, 'node_modules/.cache/dashi-theme-registry');
  fs.mkdirSync(cacheDir, { recursive: true });
  const registryPath = path.join(cacheDir, `registry-${process.pid}-${Date.now()}-${rand()}.jsx`);
  fs.writeFileSync(registryPath, source);
  return {
    registryPath,
    cleanup: () => { try { fs.rmSync(registryPath, { force: true }); } catch {} },
  };
}

function rand() {
  return Math.random().toString(36).slice(2);
}
