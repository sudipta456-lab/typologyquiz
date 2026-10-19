# SEO, AI discovery and analytics audit — October 18, 2026

Scope: public metadata, discovery, analytics coverage and a public interactive methodology. No quiz banks, scoring, analytics collection policy, GA account settings, robots policy, Worker code or bindings changed. Private GA aggregates and raw browser evidence remain in local audit files.

## Findings and changes

The previous deployed export contained 1,569 HTML documents. Every document loaded the existing root analytics chunk, with the configured installation and destination IDs and production activation flag. All 833 sitemap URLs had nonempty titles/descriptions, matching canonical URLs and parseable JSON-LD. However, 355 inherited the homepage Open Graph URL: 348 driving practice-set pages and seven hubs. These were social-preview metadata errors, not missing canonical tags. Their metadata now carries the page's own URL; daily social artwork is preserved. Noindex private routes remain excluded from the sitemap.

The new `/methodology/interactive-quizzes/` page explains the 250-quiz collection, 2,000 authored tasks, 10 formats, branching, objective partial credit, relative preference scales, sources, fictional datasets, AI-assisted authoring/review, validation limits and browser privacy. It describes the collection's factual combination rather than claiming exclusive formats or superior accuracy. It distinguishes pass-and-play from cooperative puzzles and authored tasks from scored/visible tasks. Counts are derived from the catalog. AboutPage and BreadcrumbList structured data describe the visible content.

All 250 quiz pages, the directory and main methodology link the new page. It is included in the sitemap and near the start of generated `llms.txt`, ahead of the long catalog. The manifest and site description now reflect the wider collection.

## Measurement verification

Read-only GA4 inspection verified the intended property/stream and active data collection. Enhanced Measurement and tag-level automatic history/form/scroll/outbound/video/download detection were off; no account settings were changed. Explicit sanitized route events continue to target the verified web stream. The existing shared tag lists two TypologyQuiz destinations; this audit did not inspect a complete network/HAR trace of every automatic shared-tag event.

An operator test completed PC-01 on production. GA4 Realtime received the page view, `interactive_quiz_start` and `interactive_quiz_complete`, including `quiz_id=PC-01`, its version and safe page context. This was synthetic QA, not audience growth. The current partial-day processed report overlaps release QA and cannot establish a traffic spike or a causal effect from the new collection. Hosting requests can also include bots and operator HTTP checks.

The new static coverage gate follows each HTML document's actual script tags and eagerly loaded sibling chunks. It requires that page's analytics loader, correct IDs and both enabled compiled gate calls; a loader elsewhere in the export is insufficient. Missing assets, disabled/unset flags and wrong IDs fail the production build. This static proof is separate from the GA4 receipt above. Localhost and nonproduction hosts remain disabled by the runtime hostname gate.

`npm run deploy` now supplies the three public production analytics flags, builds, verifies discovery/coverage, strips R2-served handbook images and invokes Wrangler in sequence. Run `npm run verify` separately before releasing: the deploy wrapper runs build gates, not the full test suite. `npm run build:preview` explicitly allows disabled analytics for local preview; never publish that output.

## Verification

- `npm run verify`: 235 tests passed; typecheck clean; lint had zero errors and three pre-existing image warnings. Legacy fingerprint checks and the 250-quiz structural/scoring tests passed.
- Production GA-enabled `npm run build`: 1,572 generated Next pages; all 834 sitemap URLs passed canonical, title, description, Open Graph, JSON-LD and private-route checks; all 1,570 HTML documents passed active analytics coverage.
- Independent read-only Opus review found no blockers. Its small Logic-table wording suggestion was applied; the tests also verify real ungraded predictions and mutually exclusive branches.
- Desktop and 390-pixel mobile preview: readable layout, table within viewport, no horizontal overflow and no browser warnings/errors.
- Handbook images stripped: 16,404 files and 2,048 directories remain in the export. Wrangler dry run passed (18,452 scanned entries, including directories). Publication receipts follow below.

## Primary guidance

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features): ordinary technical SEO, crawlable text, internal links and matching structured data apply; no special AI file/schema or guaranteed inclusion.
- [Google: single-page application measurement](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications): verify route-based page views and avoid duplicate automatic/manual measurement.
- [Google Analytics data freshness](https://support.google.com/analytics/answer/11198161?hl=en): reports can change during 24–48 hours of processing; a partial day is not a settled before/after comparison.
- [llms.txt proposal](https://llmstxt.org/): an optional agent reference, not a ranking or indexing guarantee.
- [Sporcle quiz formats](https://support.sporcle.com/hc/en-us/sections/34071357118605-Quiz-Formats): other services also offer varied interactive formats; our differentiation therefore describes the actual combination without unsupported competitor comparisons.

## Publication receipt

Pending publication. Previous production version: `2383ab76-567d-4db3-911d-0cb5ad9c39ea`.
