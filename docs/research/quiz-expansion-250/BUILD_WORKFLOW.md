# Interactive quiz build workflow

Run every command through `./scripts/mac-run.sh`.

## Two different things

- **Canonical banks**: `content/interactive/{PC,...}.json`, tracked in git, plus `content/interactive/briefs.json` (the source of truth for IDs, slugs and categories). The build, `verify` and `prebuild` read only these.
- **Author drafts**: `work/interactive-250/parts/CODE-NN.json`, five quizzes each, untracked. They are never read by `verify`, `prebuild` or a normal assemble, and never overwrite banks unless the lead imports them explicitly.

## Commands

| Command | Reads | Writes |
| --- | --- | --- |
| `npm run assemble:interactive` | tracked banks, briefs | `src/lib/interactive/catalog.generated.ts` only. Partial banks are tolerated and reported. |
| `npm run assemble:interactive -- --check` | tracked banks, briefs, catalog | nothing. Always requires all 250 quizzes (25 per category), matching brief IDs, slugs and category, exactly 8 tasks each, and a fresh catalog. Missing quizzes fail it. |
| `npm run import:interactive` (`--from-parts`) | drafts, tracked banks, briefs | merges drafts over the banks (draft wins for the same ID), rewrites non-empty banks and the catalog. Partial progress is allowed. Lead-only. |

`--check` cannot be combined with `--from-parts`.

## Release guard

`verify:interactive` and `prebuild` run `assemble:interactive -- --check`, then schema validation and tests. The full-250 requirement is unchanged, so a build fails until every bank is complete. Schema-valid is not factually reviewed; the independent content review still applies.
