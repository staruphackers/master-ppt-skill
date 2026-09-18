#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="${DASHI_PPT_PROJECT_ROOT:-$(cd "$SCRIPT_DIR/../project" && pwd)}"
CALLER_CWD="$(pwd)"

if [[ $# -ne 2 ]]; then
  echo "Usage: render_goal_deck.sh <goal-spec.json> <output/ppt/index.html>" >&2
  exit 2
fi

SPEC_PATH="$1"
OUT_PATH="$2"

if [[ "$SPEC_PATH" != /* ]]; then
  SPEC_PATH="$CALLER_CWD/$SPEC_PATH"
fi

if [[ "$OUT_PATH" != /* ]]; then
  OUT_PATH="$CALLER_CWD/$OUT_PATH"
fi

cd "$PROJECT_ROOT"
# .npmrc 缺失時從模板重建(npm publish 會剔除 .npmrc,個別安裝路徑可能丟失)。
if [[ ! -f .npmrc && -f npmrc.template ]]; then
  cp npmrc.template .npmrc
fi
if [[ ! -d node_modules || package.json -nt node_modules/.package-lock.json || package-lock.json -nt node_modules/.package-lock.json ]]; then
# 首裝前探測 npm 源:官方可達走官方(尊重全域性映象配置),不可達鎖 npmmirror。
# 探測失敗不阻塞 —— 預設 .npmrc 已指 npmmirror,任何網路保底可裝。
node scripts/ensure-registry.mjs || true
npm install
fi
# chromium headless shell:無 ProcessSingleton 的無頭瀏覽器。沙箱型宿主(如豆包)會攔完整版
# Chrome 建立單例鎖,匯出直接失敗;headless shell 同一沙箱下可正常匯出。冪等(已裝秒過),
# 下載失敗不阻塞生成(那樣匯出回退系統 Chrome,與舊行為一致)。
# 映象模式下瀏覽器二進位制同樣走 npmmirror(官方認可的 playwright 映象),否則國內下載必敗。
if grep -q 'registry=https://registry.npmmirror.com' .npmrc 2>/dev/null; then
  export PLAYWRIGHT_DOWNLOAD_HOST="${PLAYWRIGHT_DOWNLOAD_HOST:-https://cdn.npmmirror.com/binaries/playwright}"
fi
npx --no-install playwright-core install chromium-headless-shell >/dev/null 2>&1 || true
mkdir -p "$(dirname "$OUT_PATH")"
npm run props:safe -- --goal "$SPEC_PATH" --write
npm run validate:goal-spec -- "$SPEC_PATH"
npm run render:goal -- "$SPEC_PATH" "$OUT_PATH"
npm run validate:swiss -- "$OUT_PATH"
npm run validate:goal-copy -- "$SPEC_PATH" "$OUT_PATH"
OUT_DIR="$(dirname "$OUT_PATH")"
# 預設埠落在 SKILL.md 約定的 5200-5999 段(4178/4300/4400 為使用者保留埠);被佔用時服務自增。
PREVIEW_PORT="${DASHI_PPT_PREVIEW_PORT:-5200}"
npm run preview:start -- "$OUT_DIR" "$PREVIEW_PORT"
