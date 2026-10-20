# Interactive quiz build workflow

Run every command through `./scripts/mac-run.sh`.

> **The 250 is a historical batch, not a ceiling.** The original 250 quizzes (25 in each of ten categories) were a one-time initial batch. Their IDs, slugs and categories are frozen in `tests/fixtures/interactive-initial-identities.json` and must never disappear or change, but the collection may grow. No script, validator or test enforces a total or a per-category quota. The size is whatever `content/interactive/briefs.json` declares. The release records in this folder (`RELEASE_2026-10-18.md`, the `*_2026-10-18.json` files) describe that first batch and stay unchanged.

## Two different things

- **Canonical banks**: `content/interactive/{PC,...}.json`, tracked in git, plus `content/interactive/briefs.json` (the manifest and source of truth for IDs, slugs, categories and counts). The build, `verify` and `prebuild` read only these.
- **Author drafts**: `work/interactive-250/parts/CODE-NN.json`, up to five quizzes each, untracked. They are never read by `verify`, `prebuild` or a normal assemble, and never overwrite banks unless the lead imports them explicitly.

## The manifest

`briefs.json` is validated before any field is trusted (`src/lib/interactive/manifest.ts`, build-only, never imported by pages):

- `categories[]` must match `src/lib/interactive/categories.ts` exactly: same ten codes and names, no unknown or duplicate entries.
- Each `categories[].count` is a non-negative safe integer and must equal the number of briefs listed for that code.
- Every brief has a string `id`, `slug` and `category_code`; IDs and slugs are unique.
- `--check` requires every declared quiz to exist in its bank with the brief's slug and category, exactly 8 tasks, and a fresh catalog. A missing declared quiz fails; it is never dropped quietly.

## Commands

| Command | Reads | Writes |
| --- | --- | --- |
| `npm run assemble:interactive` | tracked banks, briefs | `src/lib/interactive/catalog.generated.ts` only. Partial banks are tolerated and reported. |
| `npm run assemble:interactive -- --check` | tracked banks, briefs, catalog | nothing. Requires every quiz the manifest declares, matching brief IDs, slugs and category, exactly 8 tasks each, and a fresh catalog. |
| `npm run import:interactive` (`--from-parts`) | drafts, tracked banks, briefs | merges drafts over the banks (draft wins for the same ID), rewrites non-empty banks and the catalog. Partial progress is allowed. Lead-only. |

`--check` cannot be combined with `--from-parts`.

### Draft batch files

A category with `count` quizzes has `ceil(count / 5)` batches. `CODE-NN.json` holds the briefs at positions `(NN-1)*5` to `NN*5` for that category, so the final batch may be partial: the 26th quiz is a one-record `CODE-06.json`. Rejected: unknown category, batch number not a positive safe integer or past the last batch, two files for the same batch (`CODE-06.json` and `CODE-6.json`), a batch whose length differs from its slice, IDs outside the slice, and duplicate IDs. A rejected import writes nothing.

## Appending quizzes (growth procedure)

1. **Choose IDs, slugs and category.** Continue the category's numbering (`PC-26`, `PC-27`, ...). Slugs are unique across the whole collection and must not be `category`. Never reuse, rename or reorder existing IDs or slugs.
2. **Update the manifest.** Append a brief per quiz to `briefs.json` (`id`, `slug`, `title`, `category_code`, `dependency`, and the other brief fields) and raise that category's `categories[].count` by the same number. Counts may grow unequally across categories.
3. **Author the bank entries.** Write the drafts as `work/interactive-250/parts/CODE-NN.json` and import them with `npm run import:interactive`, or add them straight to `content/interactive/CODE.json`. Each quiz needs exactly 8 tasks, at least two task formats, sources and distinct prompts, and must satisfy its brief's dependency contract.
4. **Assemble.** Run `npm run assemble:interactive` to regenerate the catalog, then `npm run assemble:interactive -- --check`.
5. **Generate analytics and discovery data.** Run `npm run generate:analytics`, `npm run generate:discovery` and `npm run generate:group-catalog` (the build runs them) so the analytics manifest, sitemap inputs and `public/llms.txt` list the new quizzes. The tests derive their expected counts from the registry, so a stale generated file fails them.
6. **Run full verification.** `npm run verify:interactive`, then `npm run verify` and the production build.
7. **Independent content review.** Schema-valid is not factually reviewed. A reviewer who did not author the batch checks facts, sources, wording and accessibility, and records the result.
8. **Release.** Ship through the normal deploy path only after steps 6 and 7 pass. Record the release in a new dated file; do not edit earlier release records.

## Release guard

`verify:interactive` runs `assemble:interactive -- --check`, schema validation, tests and lint. `prebuild` runs the assembly check and schema validation; it does not replace full verification. The build fails until every quiz the manifest declares is complete and the catalog is fresh. The original 250 stay protected by the frozen identity fixture, not by a total.
