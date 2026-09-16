#!/usr/bin/env node
// dashi-ppt-skill 的 npx 安裝器:把包內 skill/ 目錄複製到本機技能目錄。
// 用法:
//   npx dashi-ppt-skill@latest                  # 自動選擇唯一安裝目錄
//   npx dashi-ppt-skill@latest --dir <path>     # 顯式指定技能根目錄
//   npx dashi-ppt-skill@latest --all            # 安裝/更新全部探測到的技能目錄
//   npx dashi-ppt-skill@latest --list           # 只列出探測到的候選目錄
//
// 關鍵行為:
// - npm publish 會排除 .npmrc,包內以 project/npmrc.template 攜帶預設映象配置,
//   安裝時重建 .npmrc;使用者透過 --registry=npmmirror 安裝(npm_config_registry
//   環境變數)即視為明確選擇映象,直接鎖定並跳過後續探測。
// - 更新時保留 project/node_modules 與已探測的 .npmrc;但新舊 package-lock.json
//   內容不一致(依賴變化)時刪除 node_modules/.package-lock.json 哨兵,強制
//   渲染指令碼重跑 npm install(mtime 在複製後不可信,不能作為依據)。
import { cpSync, existsSync, mkdirSync, readFileSync, renameSync, rmSync, readdirSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PKG_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKILL_SOURCE = path.join(PKG_ROOT, 'skill');
const SKILL_NAME = 'dashi-ppt';
const LEGACY_SKILL_NAME = 'dashiai-ppt';
const MIRROR_REGISTRY = 'https://registry.npmmirror.com';
const PROBED_MARK = '# dashi-registry-probed';

const args = process.argv.slice(2);
const dirFlagIndex = args.indexOf('--dir');
const explicitDir = dirFlagIndex >= 0 ? args[dirFlagIndex + 1] : null;
if (dirFlagIndex >= 0 && (!explicitDir || explicitDir.startsWith('--'))) {
  console.error('--dir 需要一個路徑引數,例如 --dir ~/.claude/skills');
  process.exit(2);
}
const listOnly = args.includes('--list');
const installAll = args.includes('--all');
if (explicitDir && installAll) {
  console.error('--dir 與 --all 不能同時使用。');
  process.exit(2);
}

const home = os.homedir();
const sharedSkillRoot = path.join(home, '.agents', 'skills');
const candidates = [
  sharedSkillRoot,
  path.join(home, '.claude', 'skills'),
  path.join(home, '.codex', 'skills'),
  path.join(home, '.config', 'agents', 'skills'),
];

function detectSkillRoots() {
  return candidates.filter((dir) => existsSync(dir));
}

function installerRegistryChoice() {
  const configured = String(process.env.npm_config_registry || '').toLowerCase();
  return configured.includes('npmmirror.com') ? MIRROR_REGISTRY : null;
}

function readFileOr(filePath, fallback = '') {
  try {
    return readFileSync(filePath, 'utf8');
  } catch {
    return fallback;
  }
}

// 安裝後的 project/.npmrc 決策(優先順序從高到低):
// 1. 本次經映象 registry 安裝 → 鎖映象並打探測標(使用者已明確選擇,不再探測官方);
// 2. 舊安裝已有探測結果(帶標) → 原樣保留;
// 3. 包內模板 → 重建預設(npmmirror 保底,首次生成時由 ensure-registry 探測調整)。
function resolveNpmrc(previousNpmrc) {
  const chosenMirror = installerRegistryChoice();
  if (chosenMirror) return `registry=${chosenMirror}\n${PROBED_MARK}\n`;
  if (previousNpmrc && previousNpmrc.includes(PROBED_MARK)) return previousNpmrc;
  const template = readFileOr(path.join(SKILL_SOURCE, 'project', 'npmrc.template'));
  return previousNpmrc || template || `registry=${MIRROR_REGISTRY}\n`;
}

function installInto(targetRoot, version) {
  const dest = path.join(targetRoot, SKILL_NAME);
  const destProject = path.join(dest, 'project');
  // 0.4.0 改名遷移:舊目錄 dashiai-ppt 存在時,僅把舊依賴 node_modules
  // rename 進新目錄(同盤瞬時;後續正常安裝流程會照常保留它),然後整體
  // 移除舊目錄,避免宿主把新舊兩個目錄雙註冊。
  const legacyDir = path.join(targetRoot, LEGACY_SKILL_NAME);
  if (existsSync(legacyDir) && legacyDir !== dest) {
    const legacyModules = path.join(legacyDir, 'project', 'node_modules');
    const destModules = path.join(destProject, 'node_modules');
    if (existsSync(legacyModules) && !existsSync(destModules)) {
      mkdirSync(destProject, { recursive: true });
      renameSync(legacyModules, destModules);
    }
    rmSync(legacyDir, { recursive: true, force: true });
    console.log(`已遷移並移除舊目錄 ${legacyDir}(skill 改名 dashiai-ppt → dashi-ppt)。`);
  }
  // 原子替換:在同一目錄構建 staging,rename 交換新舊目錄。任何一步中斷,
  // dest 要麼是完整舊版要麼是完整新版,最多留下帶專屬字首的臨時目錄
  // (下次安裝開頭清理),絕不出現半刪半拷的殘缺 skill。
  const staging = path.join(targetRoot, `.${SKILL_NAME}-staging-${process.pid}`);
  const retired = path.join(targetRoot, `.${SKILL_NAME}-old-${process.pid}`);
  mkdirSync(targetRoot, { recursive: true });
  for (const entry of readdirSync(targetRoot)) {
    if (entry.startsWith(`.${SKILL_NAME}-staging-`) || entry.startsWith(`.${SKILL_NAME}-old-`)) {
      rmSync(path.join(targetRoot, entry), { recursive: true, force: true });
    }
  }

  const previousLock = readFileOr(path.join(destProject, 'package-lock.json'));
  const previousNpmrc = readFileOr(path.join(destProject, '.npmrc'));
  const hadModules = existsSync(path.join(destProject, 'node_modules'));

  console.log(`安裝 Dashi PPT Skill v${version} → ${dest}`);
  cpSync(SKILL_SOURCE, staging, { recursive: true });
  writeFileSync(path.join(staging, 'project', '.npmrc'), resolveNpmrc(previousNpmrc));

  const nextLock = readFileOr(path.join(staging, 'project', 'package-lock.json'));
  const dependenciesChanged = hadModules && previousLock !== nextLock;

  if (existsSync(dest)) renameSync(dest, retired);
  renameSync(staging, dest);
  if (hadModules) {
    // 同一檔案系統內 rename 移交 node_modules:瞬時且不產生複製。
    renameSync(path.join(retired, 'project', 'node_modules'), path.join(dest, 'project', 'node_modules'));
    if (dependenciesChanged) {
      // 依賴清單變了:刪除安裝哨兵,渲染指令碼會重跑 npm install 增量補齊。
      rmSync(path.join(dest, 'project', 'node_modules', '.package-lock.json'), { force: true });
      console.log('依賴有更新:保留快取並已標記,首次生成時將自動補齊安裝。');
    } else {
      console.log('依賴未變化,保留原有 project/node_modules。');
    }
  }
  rmSync(retired, { recursive: true, force: true });
  const installedEntries = readdirSync(dest).length;
  console.log(`完成:${installedEntries} 個頂層條目。`);
}

function main() {
  if (!existsSync(SKILL_SOURCE)) {
    console.error('損壞的安裝包:缺少 skill/ 內容。請重新安裝 dashi-ppt-skill。');
    process.exit(1);
  }
  const detected = detectSkillRoots();
  if (listOnly) {
    console.log(detected.length ? detected.join('\n') : '(未探測到常見技能目錄,請用 --dir 指定)');
    return;
  }
  let targetRoots = explicitDir ? [path.resolve(explicitDir)] : detected;
  if (!explicitDir && !installAll) {
    const installedPaths = detected.flatMap(root =>
      [SKILL_NAME, LEGACY_SKILL_NAME]
        .map(name => path.join(root, name))
        .filter(skillPath => existsSync(skillPath)),
    );
    const installedRoots = [...new Set(installedPaths.map(skillPath => path.dirname(skillPath)))];
    if (installedRoots.length > 1) {
      console.error(`檢測到多份 dashi-ppt 安裝,本次未執行:\n  ${installedPaths.join('\n  ')}`);
      console.error('請用 --dir <技能根目錄> 選擇一處更新,或用 --all 明確更新全部。');
      process.exit(2);
    }
    if (installedRoots.length === 1) {
      targetRoots = installedRoots;
    } else if (detected.includes(sharedSkillRoot)) {
      targetRoots = [sharedSkillRoot];
    } else if (detected.length > 1) {
      console.error(`檢測到多個技能目錄,本次未執行:\n  ${detected.join('\n  ')}`);
      console.error('請用 --dir <技能根目錄> 選擇一處安裝,或用 --all 明確安裝到全部。');
      process.exit(2);
    }
  }
  if (!targetRoots.length) {
    console.error('未探測到技能目錄。請顯式指定,例如:');
    console.error('  npx dashi-ppt-skill --dir ~/.claude/skills');
    console.error(`常見位置:\n  ${candidates.join('\n  ')}`);
    process.exit(2);
  }

  const version = JSON.parse(readFileSync(path.join(PKG_ROOT, 'package.json'), 'utf8')).version;
  for (const targetRoot of targetRoots) {
    installInto(targetRoot, version);
  }
  console.log('重新開啟會話後即可使用 dashi-ppt。');
}

main();
