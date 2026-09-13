# GA4 architecture recommendation — September 13, 2026

Status: implementation prepared with loading disabled by default; activation still requires network QA. The root agent verified GA4 property `545477353`, web stream `15282732875`, measurement ID `G-RVHFFPF0W1`. The shared Google tag also includes legacy ID `G-TZ9B8MB7SP` and has two destinations, so explicit event targeting and network fanout checks remain essential. The current loader remains paused after the assessment release because result URLs contain encoded scores. Optional reflections remain browser-local.

## Recommended implementation

1. Add `src/lib/analytics.ts`: pure route mapping, narrow event contracts, and one dispatcher. Accept only known static routes and registry-known dynamic segments (assessment, driving, trivia, edition IDs/versions). Unknown paths map to a generic `/404/` analytics location. Merely removing a query from an arbitrary pathname does not make that pathname safe. Canonicalize trailing slashes and hardcode the origin `https://typologyquiz.com`.
2. Add one `src/components/Analytics.tsx` in the root layout. Use Next `usePathname()` only, without search parameters. The persistent root client component handles initial load and pathname transitions. Prepare the queue and safe global/config context before loading gtag. Configure `send_page_view: false`, `allow_google_signals: false`, and `allow_ad_personalization_signals: false`. Emit one explicit pageview per pathname transition; consecutive duplicate suppression must tolerate React Strict Mode but still count A → B → A. Query/hash-only changes do not represent additional pageviews. Do not emit pageviews from `Script.onReady`, which can run again after remount.
3. Supply a route-derived static `page_title`, canonical `page_location`, and empty `page_referrer` in config/global context and every event. Update the safe global context on transitions so lifecycle events do not retain the previous page. Never derive values from document title/referrer, raw URL, DOM text, arbitrary storage, answers, scores, or reflection content. Do not use a generic arbitrary-parameter event API.
4. Replace direct gtag access in `src/lib/editorial-social/analytics.ts` and `src/lib/editorial-social/follow.ts` with the central dispatcher. Preserve only explicitly permitted event names, validated registry IDs/version, and the followed boolean. Never spread caller objects into event parameters. Preserve optional/failure-safe behavior so analytics cannot interrupt play or saving.
5. Keep actual loading behind an explicit activation gate until account configuration and live network QA below are verified. Restrict production dispatch to the canonical and www production hosts. Development tests can use an injected/stubbed transport without sending synthetic traffic to GA.
6. Update `src/app/about/page.tsx`, the actual privacy page. Describe coarse page/event measurement and Google's processing/browser identifiers accurately. Explain the exclusion of scores, notes, names, search terms, and complete URLs. Third-party JavaScript in the main document technically can access its DOM and storage: do not claim code-level parameter filtering is a browser security boundary.

## Account dependencies and activation gate

`send_page_view: false` alone does not disable Enhanced Measurement history-based pageviews. The GA4 web stream must have Enhanced Measurement disabled and verified, including history, site search, forms, outbound links, and file downloads. Otherwise automatic events may duplicate manual views or include URLs/link text/form data independently of our dispatcher.

Check additional destinations/connected tags, Google Signals, user-provided data collection, and event creation/modification rules. Query redaction can provide defense in depth but does not substitute for safe collection. Campaign fields can be sourced independently from UTM parameters; verify these in actual requests as well. Account settings cannot be conclusively inferred from the repository or guaranteed by client-side configuration. The root agent subsequently verified Enhanced Measurement OFF, no event modifications/custom events, and no connected site tags on the selected stream. Root also disabled all six optional shared-tag automatic detection features and user-provided data capabilities, and verified property Google Signals/user-provided data collection OFF. Those UI observations do not replace real request verification.

A same-document gtag implementation is not an absolute isolation boundary for private reflections. If stronger technical isolation is required, separately design and validate an isolated analytics execution context or first-party collection service. Do not improvise an iframe or unsupported Measurement Protocol replacement during activation: cookie/session semantics, origin isolation, and delivery require their own review.

## Verification contract

Add `tests/analytics.test.ts` and include it in the project's verification scripts. Meaningful cases:

- Every known route family maps to canonical route-only context; unknown/encoded malicious paths cannot pass arbitrary text.
- Cold entry with sentinel result query, hash, UTM values, and referrer never places these in configured fields or dispatched event payloads.
- Unknown event names and extra fields are rejected; permitted editorial fields are selected explicitly.
- Initial load, delayed loader, Strict Mode, repeat renders, query/hash-only changes, A → B → A, and browser back/forward have the intended view counts.
- Reflections and result pages still receive generic route measurement without reading their state.
- Unsupported hosts and a disabled activation gate create no Google script/request.

After settings verification, inspect actual Google network requests, including automatic lifecycle/engagement requests. Cold-load a sentinel score URL, navigate elsewhere, enter/save a sentinel reflection, perform editorial events, and navigate back/forward. Inspect request URLs, bodies, and headers for sentinel values and count pageviews. Stubbed gtag tests alone cannot establish absence of leakage in the third-party library. Confirm real receipt in GA4 before claiming functioning analytics; request dispatch is not proof of account ingestion. Never record actual participant content as QA evidence.

Run project commands through `./scripts/mac-run.sh`. Build/export and asset dry-run must be sequential. The architecture review itself ran no builds, tests, or deployment.

## References inspected

- [Google: Measure pageviews](https://developers.google.com/analytics/devguides/collection/ga4/views) — manual views, full protocol-qualified page_location override, and the explicit Enhanced Measurement warning.
- [Google: Enhanced measurement events](https://support.google.com/analytics/answer/9216061?hl=en) — automatic events and account-level controls.
- [Google: GA4 configuration](https://developers.google.com/analytics/devguides/collection/ga4/reference/config) — page fields, campaign overrides, browser identifiers, and advertising flags.
- [Google: Single-page application measurement](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications) — automatic versus manual navigation measurement.
- Local installed Next 16.2.10 guides: `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/use-pathname.md` and `node_modules/next/dist/docs/01-app/03-api-reference/02-components/script.md`.


## Implemented contract and activation

`NEXT_PUBLIC_GA_ENABLED=true` and `NEXT_PUBLIC_GA_ID=G-RVHFFPF0W1` are both required at build time; only `typologyquiz.com` and `www.typologyquiz.com` dispatch. `.env.example` defaults to false. An old measurement ID alone cannot activate the loader. Do not change the shared tag/destinations implicitly. Each explicit event includes `send_to` for the verified stream.

The implemented manifest is generated from source route files and published registries, contains 1,244 recognized paths including `/404/`, and does not import quiz banks into browser code. Run `npm run generate:analytics` after route/registry changes; `npm run test:analytics` checks freshness, bounded data, navigation, and existing-export coverage. Build runs generation automatically. The optional export coverage check must be repeated after export when adding routes.

Unlike the initial empty-referrer design, the implementation retains only fixed allowlisted origins for common AI assistants and search engines. It parses a referrer locally and selects a constant from a fixed table; no raw hostname, path, query, port, or credentials are emitted. Unknown sources become `unattributed`. Campaign fields receive nonempty bounded overrides, excluding detailed UTM text. This deliberately trades campaign detail for privacy; an AI referral only indicates a referral source and does not prove an independent recommendation. The configuration reference above documents campaign overrides; actual library requests still need testing for newer campaign/automatic fields.

Root page config and global context are refreshed together on every canonical pathname transition because stream config fields take precedence over global `set` fields. Safe explicit pageviews and editorial events target only the verified stream. The loader uses a no-referrer script request and an internal Arguments-based dataLayer queue; it does not expose a feature-facing global gtag helper.


## Manual Chrome network / HAR activation checklist

Use a fresh QA browser profile/session to avoid exporting unrelated cookies or personal activity. Open DevTools Network, turn on Preserve log, and filter by `collect` or `google`. Clear the log before each run. Do not publish raw HAR files; they can contain request headers and browser identifiers. Inspect locally and retain a redacted conclusion.

1. Cold-load `https://typologyquiz.com/test/mini-ipip/results/?r=TQ_PRIVATE_SCORE_20260913&utm_source=TQ_PRIVATE_UTM_20260913&utm_campaign=TQ_PRIVATE_CAMPAIGN_20260913&utm_term=TQ_PRIVATE_TERM_20260913#TQ_PRIVATE_HASH_20260913`. An invalid result is acceptable for checking the result route's analytics boundary. Do not put an actual participant result in this test.
2. Verify exactly one explicit `page_view` for the canonical result path. Navigate to `/tests/`, then `/reflections/`, then back/forward. Check one view per pathname transition and no extra views caused by query/hash changes on the same route. Reload is a new document/pageview.
3. Create a disposable local reflection through the normal UI using `TQ_PRIVATE_NOTE_20260913` and `TQ_PRIVATE_ACTION_20260913`, save/reopen it, and trigger an editorial follow/share/start event. Delete the synthetic note afterward. If needed use a synthetic completed assessment to reach the reflection UI.
4. Inspect every Google request, including `user_engagement`, session/first-visit events, and requests issued when hiding/leaving the tab. Decode query parameters and POST payloads; search the full log for every sentinel. No sentinel may occur in any Google request URL, body, or Referer header. Script requests themselves must not transmit the original referrer.
5. Inspect GA fields `tid` (destination), `en` (event), `dl` (page location), `dr` (referrer), `dt` (title), `cs`, `cm`, `cn`, `ci`, `ck`, `cc` and other campaign fields, plus all `ep.*` / `epn.*` custom parameters. `dl` must contain only the fixed canonical origin plus a manifest route, `dt` the static route label, and `dr` either empty or a fixed allowlisted origin. No URL query/hash, score, note, entered name, link text, or form field is permitted. Campaign fields must contain only the fixed bounded labels.
6. Because the Google tag is shared across two destinations, inspect ALL `collect` requests, not only the target stream. Expected explicit event destination is `G-RVHFFPF0W1`; any unexpected fanout or automatic pageviews requires investigation before calling the privacy gate passed. A selected stream's UI settings alone cannot prove shared-tag behavior.
7. Check GA4 Realtime/DebugView for the intended stream and known synthetic page transitions. Report receipt separately from request dispatch. An AI referral observed in QA is synthetic evidence, not proof of external recommendation.

If a sentinel leaks or additional destinations receive unsanitized events, turn the activation flag off and rebuild before continuing. Keep the loader disabled until the third-party behavior has been verified. The unit tests prove first-party queue contracts, not everything performed by Google's downloaded library.


The fixed referral table also includes the five verified outreach prospects, accepting exact apex and www hosts only: becomingsigma.com, socialpsychology.org, personalitypedagogy.net, reflectinginward.org, and simplythebestresults.com. Their medium is `referral`; paths/query/hash are discarded and lookalike/subdomain hosts do not match. Referral counts still do not prove that outreach caused a visit.


## Final review corrections

Subsequent SPA config commands use `update: true`; the first config remains a normal initialization. This merges current safe page context without reinitialization. Google documents this specifically for SPAs in [the update configuration reference](https://developers.google.com/analytics/devguides/collection/ga4/reference/config#update). Shared tags may ignore duplicate ordinary configuration, as explained in [Conflicting on-page code](https://support.google.com/tagmanager/answer/12329709). The tests assert first/subsequent flags, canonical context and exactly one explicit pageview per transition.

A dedicated tab-scoped sessionStorage key, `tq-analytics-referral-v1`, holds only `{schema:1, source:<allowlisted name>, acquiredAt:<timestamp>}`. It preserves a recognized referral across full-document navigation when the new document referrer is exactly the HTTPS canonical or www site origin. The fixed 30-minute TTL is not refreshed by navigation. A new recognized external source replaces it; unknown, missing, malformed, or different external referrers clear it. Corrupt/expired/future-dated records are removed. Storage access is optional; only this key is read and stored values are validated back into fixed constants before use. No reflection storage, full URL, arbitrary source name, or score is read or cached. Missing referrers intentionally do not revive prior attribution, so privacy features can still reduce measured attribution.
