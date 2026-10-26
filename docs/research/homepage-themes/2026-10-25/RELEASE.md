# Homepage seasonal themes — October 25, 2026

Published the original After Hours Halloween portal and recurring homepage calendar. The owner requested a more thoughtful, mobile-friendly animation with subtle visual theming and one or two themes per month, drawing timing inspiration from the HMH calendar. GPT was used under the existing explicit owner override, including fresh independent review sessions.

- Source commit: `122427374a82840d97fede68c918a7464b996ac1`.
- Production Worker version: `cb117c71-c1ab-4a3c-9bdc-3e1c3eb6263b`, verified 100%.
- Deployment: `875aa480-c818-461e-90ca-0e84cc17f76e`, October 26 01:34:20 UTC / October 25 19:34:20 Edmonton.
- Live: https://typologyquiz.com/ . Halloween routes: https://typologyquiz.com/quizzes/cabinet-of-the-borrowed-voice/ ; https://typologyquiz.com/quizzes/bats-beyond-the-vampire-myth/ ; https://typologyquiz.com/quizzes/glasshouse-trailer-misdirection/ .

## Calendar and behavior

The [annual calendar](../../HOMEPAGE_THEME_CALENDAR.md) defines 18 original treatments built from six SVG/CSS illustration families, with one or two windows in each month. It is a browser-date schedule, not a set of recurring AI jobs or build-time dates. New theme checks occur every30seconds and when the device/tab returns. It follows Edmonton dates and the official permanent UTC−6 rule from November2026 even with older browser timezone data. Halloween ends after October31; November1 is Kindred Signals and November16 Story Mode. Themes recur annually; existing quizzes stay playable.

The homepage retains its original content and the visitor’s existing appearance preference. Selecting story/night/screen updates the invitation, link, portal treatment and stamp. Controls support touch and keyboard; pause/hide/reduced-motion are implemented. Hide and Show restore useful focus. SVG/CSS-only art adds no video, sound or animation library. Existing 270 quizzes and all11 canonical bank/brief files are byte-identical; no progress, scoring, credentials, privacy/tracking controls, accounts, news editions, outreach or TikTok edits.

## Verification

Final full `npm run verify`: **300/300 pass, zero failures/skips**. Typecheck and configured lint gates passed (three existing image warnings remain). Production wrapper dry-run completed with GA explicitly enabled; discovery verified854unique canonical/indexable URLs and1590HTML pages loading the active analytics loader. Handbook assets were stripped from export for the existing R2 route; Worker-first routing and all bindings remain intact. Temporary QA routes/components are absent from the source and export.

Fresh independent GPT release review: PASS, with reviewed source hashes in this directory. Earlier reviews held layout reservation, restored focus and voice-control label mismatches; those were corrected. The final typography refinement was independently re-reviewed and its hashes matched before release.

An early local gallery exercised all18 treatments at desktop and320px, with no horizontal/button overflow and targets>=44px; six artwork families were visually inspected. After final shared-layout/copy refinements, cold exported and production Halloween pages were checked at desktop and mobile widths. Static no-JS fallback and hydrated Halloween panel/navigation positions match at1280px and390px;320px differs by<0.01px. This is a before/after geometry comparison, not a Lighthouse CLS benchmark. All3 live choices, their distinct links/stamps, pause and hide/show focus passed; live desktop console errors were empty. The normal-motion browser was left at its default viewport.

All51 live HTML/discovery/JS/CSS responses exactly match the verified export, allowing only the precisely identified appended Cloudflare browser-check script. All32 existing seasonal quiz destinations are live with canonical/OG metadata and sitemap/LLM-discovery inclusion. The R2 sample returned200/image-png/immutable via curl HEAD. The first Python HEAD client received403; this was not treated as missing content or a successful check.

GA4 property545477353 shows the homepage title/path and2page_view events during the operator’s release QA; the live page loaded the expected Google tag. This confirms delivery, not organic growth or attribution. No visitor-level report was opened. The gallery’s reduced-motion prop fixture and independent source/CSS review cover still behavior; OS preferences were not changed, and no exhaustive device/screen-reader/voice-control audit or human engagement uplift is claimed. Historical local dev/HMR/cache issues were resolved before cold-export/live checks; final source and production are the reviewed release.

Sanitized JSON receipts and reviews are preserved here. Raw command logs and screenshot remain in `work/homepage-themes/`; no credentials or raw provider logs are committed. Primary unrelated operations work is preserved; publish only the isolated branch ancestry, never blindly push primary master.
