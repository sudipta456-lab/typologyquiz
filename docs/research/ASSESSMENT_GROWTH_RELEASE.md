# Assessment quality and useful return visits — 2026-09-11

## Release scope

The operator authorized implementation of growth recommendations where sensible. This release covers assessment claims, score interpretation, version foundations, and a private reflection journey. It does not claim to complete the empirical validation program.

- All 67 registered tests now have purpose/evidence information on their introductory and result pages, with a public `/methodology/` directory. Most are original reflection or entertainment quizzes. Credits and privacy statements no longer imply universal peer review, universal open licensing, or that opening a score URL never reaches the host.
- Undocumented normal-distribution percentiles are removed from the scoring engine and definitions. The shared result decoder ignores historical embedded percentiles, preserving valid saved scale scores. Legacy results remain explicitly unversioned; no historical release is inferred from a date. Old imagery labels no longer assert diagnostic cutoffs.
- Mini-IPIP uses the 20 public-domain source stems, source key directions, interleaved E/A/C/N/I order, and accuracy anchors. Site instructions and presentation remain adaptations. Emotional reactivity correctly labels the upward neuroticism score. Imagery uses its own adapted vividness anchors; its display bands describe responses without diagnostic or population claims. CRT's description no longer promises a general-population comparison.
- New attempts record instrument, scoring, report, and standard/school wording variants. Complete-answer validation rejects invalid or missing values and removes answers from closed branches before scoring. Saved progress can resume only with matching metadata. Comparisons require matching known versions. Report definitions are archived, and issued label/description copy is preserved in result links.
- `/reflections/` and the optional result-page panel store fit/clarity ratings, examples of fit/misfit, one chosen action, and a follow-up review in browser storage. There is no upload or research enrollment. Saving, exporting, deleting, and a generic two-week calendar download are available. Notes expire after a year on the next visit, with a 25-note cap. Users must import reminders into their own calendar; the site sends no messages.
- The radar chart uses numbered labels and a readable mobile legend. Share cards explain scale scores rather than population ranking. Brand colors and logo remain unchanged.
- The global Google Analytics loader is disabled because it could receive full result URLs and future form events. General third-party traffic analytics remain paused until private routes/data have a verified isolation boundary. Existing trivia statistics and optional short links retain their separate behavior.

## Sources checked for the implemented form

- IPIP Mini-IPIP key: https://ipip.ori.org/MiniIPIPKey.htm
- IPIP administration suggestions and accuracy anchors: https://ipip.ori.org/new_ipip-50-item-scale.htm
- Interleaved Mini-IPIP order, with original English stems alongside the Spanish key: https://www.ipip.ori.org/Spanishmini-IPIPposneg.htm
- Public-domain terms: https://ipip.ori.org/

The 2020–2026 literature synthesis remains in `ASSESSMENT_QUALITY_REVIEW_2026.md`. Historical instrument sources above establish provenance, not new validation of this release.

## Release/version contract

`src/lib/tests/assessment-releases.json` is an append-only archive once deployed. Initial release: `2026-09-11.1`. Each entry stores a SHA-256 definition fingerprint, a scoring-source fingerprint, and frozen report content. `scripts/assessment-release.ts YYYY-MM-DD.N [test-slug ...]` appends a reviewed full release and refuses to overwrite an existing entry. For wording-only changes, `scripts/assessment-release.ts YYYY-MM-DD.N --report-only test-slug` carries forward that test's existing instrument and scoring versions while issuing a new report version. Report-only releases require named slugs and refuse to run if the scoring-source fingerprint has changed. Tests detect edits to current item text, keys, anchors, descriptions, and scoring without a release update. Do not remove old report records or stamp a current version onto an unversioned historical result. No norm version is issued because there are no approved norms.

`mental-age@2026-09-20.1` is the first report-only release. It archives the Humanizer-reviewed result descriptions and fun fact while retaining the `2026-09-11.1` instrument and scoring versions; question text and scoring were unchanged.

`prakriti-dosha@2026-09-20.4` is the second report-only release. It replaces unsupported health, personality, and diagnostic implications with a respectful cultural self-reflection framing while retaining the `2026-09-11.1` instrument and scoring versions; question text and scoring were unchanged.

This is a reproducibility foundation, not a tamper-proof assessment service: result links are user-controlled, not signed, and server-side research must validate its own study records. Item text for historical administration is recoverable from the release's Git commit; the client report archive omits question banks to avoid duplicating them in the bundle. Before future changes to school wording, instructions, or rendering materially affect administration, update the instrument contract and retain its earlier definition.

## Verification

- `npm run verify` via `scripts/mac-run.sh`: **passed**. 59 tests: 31 editorial, 10 Worker, 2 prediction-client, 16 assessment-quality. TypeScript and configured lints passed; three existing native-image lint advisories remain.
- Assessment regressions cover all 67 quiz round trips, source scoring endpoints/key asymmetry, branching, invalid/incomplete inputs, legacy percentiles, unknown versions, archived reports, comparison compatibility, resume metadata, local reflection persistence/deletion/expiry/storage errors, calendar privacy, and absence of the global analytics loader.
- Browser QA at 390 × 844: Mini-IPIP completion with synthetic answers; reload at question 6 resumed correctly; new result scores displayed; reflection save/reload/reopen, review update, and deletion passed. Light and dark layouts inspected, including readable evidence text and unclipped chart legend. Synthetic reflection deleted and temporary theme/viewport changes restored. An in-progress development hot reload stalled one navigation; a fresh load and subsequent complete result/reflection navigation passed.
- Full static production build: **passed**, 1,248 generated pages. Existing handbook stripping retained R2 serving; deployment dry run passed with 15,075 bundled asset files.
- Cloudflare deployment: **succeeded** on typologyquiz.com and www.typologyquiz.com. Version `0b1b7ff0-29ba-43ac-a669-b18552694f87`; previous version `6a715119-67a1-47d2-a4f2-e849b142290f`. Live methodology, reflections, Mini-IPIP intro, about, credits, home, and weekly pages returned 200 and matched the tested application HTML before Cloudflare’s appended security script. The prediction events endpoint, an existing R2 handbook image, and www methodology returned 200. Live browser methodology-to-reflections navigation and rendering passed with no captured console errors. Python urllib received a 403; ordinary curl and the browser succeeded without changing access controls.

## Boundaries and next work

1. Resolve permission/reproduction status for CRT and VVIQ before expanding or promoting them. Attribution is explicitly marked as insufficient; no permission or open-license status was invented.
2. Design a separately consented research pilot with a qualified psychometric reviewer, a justified sample plan, independent validation/retest cohorts, privacy/access/deletion controls, and a versioned protocol. Private reflections provide no aggregate feedback to the operator and cannot establish accuracy.
3. Reintroduce useful growth analytics only after isolating private results, notes, URL contents, and user identifiers. Do not treat aggregate completion/return rates as evidence of assessment validity or benefit.
4. Evaluate any claimed benefit of activities in a controlled study. Current action prompts are voluntary personal notes, not a proven intervention.
5. Existing news drafts, prediction pilots, and editorial review gates are unchanged. No draft was promoted by this release.
