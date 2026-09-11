#!/bin/sh
set -eu
export PATH="/Users/sudiptasarkar/.local/share/typologyquiz/node-v24.20.0-darwin-arm64/bin:/opt/homebrew/bin:$PATH"
# This asset-heavy checkout exhausts native Watchpack file watchers on the Mac.
# Apply polling only to development; keep explicit caller overrides intact.
if [ "${1-}" = "npm" ] && [ "${2-}" = "run" ] && [ "${3-}" = "dev" ]; then
  export WATCHPACK_POLLING="${WATCHPACK_POLLING-true}"
fi
exec "$@"
