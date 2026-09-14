# Migration complete; Windows contents removed — 2026-09-10

Primary project: /Users/sudiptasarkar/dev/typologyquiz. All contents of C:/dev/funproject/typologyquiz were removed at the operator’s explicit request; its empty directory remains held open by a Windows terminal/task after checksum verification,33 passing tests and full1,245-route build on Mac. Recovery sources remain separately on Mac; no deployment or editorial approval occurred. See MAC_MIGRATION_RESULT.json and WINDOWS_CLEANUP_RECEIPT.json for exact results. Git on Mac uses repository-local core.autocrlf=input to handle the copied CRLF files without spurious diffs.

Continue with a fresh Mac task attached only to this folder. First read this handoff and use ./scripts/mac-run.sh for Node/npm commands. Do not refer to the deleted Windows checkout as an active source. Earlier Windows checkpoints below are historical.

---

﻿# Mac migration checkpoint — 2026-09-10

Status: transfer requested because C: repeatedly runs out of space. The Mac is not yet visible to this task. No files have been transferred or deleted.

## What must be preserved

- The whole TypologyQuiz source checkout, Git history/state, uncommitted changes, untracked source/content/tests, `.agents` skills/handoff/memory, and project docs.
- Pre-existing Vermont/Wyoming source banks, Vermont handbook assets, and root files `0`, `5`, `a.setNumber`.
- Ignored original assets in `images/`, the local analytics PNG, and useful handbook material in `tmp/`; inventory these before declaring a full migration complete. Git clone/handoff alone may not include ignored files.
- The separate recovery folder `C:/Users/new owner/AppData/Local/Temp/typologyquiz-growth-20260909` contains unfinished historical work. Preserve source/docs/assets separately for reference; do not wholesale import its unapproved registry/routes. Its `node_modules` is a junction and must not be traversed/copied.
- `.mcp.json` and `.claude/launch.json` are project files but may require host-specific path updates. Do not copy other projects' or global credential/config folders.

## Transfer approach

1. Bring the Mac online with the desktop app signed in to the same account and remote access enabled. This task currently lists only the Windows project.
2. On the Mac, save a TypologyQuiz project for the same repository (`https://github.com/sudipta456-lab/typologyquiz.git`). Select a new empty destination; do not overwrite an existing checkout with work.
3. The desktop app supports a user-initiated handoff from the current run location in the task footer after a matching remote project is available. Handoff transfers the task and Git state. This task cannot invoke its own handoff through its tool.
4. Verify untracked files and separately transfer any ignored source assets/recovery material needed. Compare file hashes/counts before deleting anything on Windows. A Git clone by itself misses this session's unfinished changes.
5. Reinstall dependencies on macOS using Node 24 and `npm ci`; do not copy Windows `node_modules`, `.next`, `out`, `.wrangler`, bytecode or build caches. Preserve package-lock.json.
6. Read `.agents/HANDOFF.md`, run `npm run verify`, then `npm --ignore-scripts run build`. The `--ignore-scripts` flag preserves the pre-existing root files which the current prebuild sweep would otherwise delete.
7. Verify actual generated weekly/version routes and prediction route, then browser-test the four formats and prediction unavailable state. Full static export has not yet succeeded on Windows.
8. Reauthenticate project services on Mac when needed; do not put tokens in Git or transfer archives. No new edition, prediction event or deployment becomes approved as part of migration.
9. Only after the Mac checkout is complete and verified should Windows generated outputs or the old checkout be considered for cleanup.

Official workflow reference: https://learn.chatgpt.com/docs/remote-connections

## Remaining Growth Step 2 work

Latest priorities are US, Canada and World news, each using the 1–2-hours/week reader standard. Preserve original North America q4 court dissent (reasonable) and q7 rate level (perfect) as positive examples. These preferences apply to all new questions.

Four-format UI/progress and prediction fixtures have been implemented locally. Publication-format extensions are being finished at this checkpoint. Independent final code review, browser checks of new formats, full export, a reviewed sampler, independent regional source review, and explicit operator approval for new editions remain required. Production prediction event registry stays empty until a real pilot's schedule, rating and outcomes are reviewed. Follow-series/calendar and later measured growth experiments remain subsequent work, not completed features.
