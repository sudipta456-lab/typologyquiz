# GA4 account inspection — September 13, 2026

Observed through the user's signed-in Chrome UI; no credentials exported.

- Account 401053877, property 545477353: typologyquiz.
- Web stream 15282732875: TypologyQuiz Web, https://typologyquiz.com, G-RVHFFPF0W1.
- Shared Google tag: G-TZ9B8MB7SP / GT-NSKSHCNR, two Analytics destinations named typologyquiz and TypologyQuiz Web. Do not assume the legacy tag ID was invalid; it is a combined tag. New code explicitly targets the verified stream.
- Stream Enhanced Measurement was on; switched off and confirmed off in UI.
- Shared tag automatic event detection: history pageviews, scrolls, outbound clicks, forms, video engagement and file downloads were on; unchecked and saved. Basic load pageviews are locked on in UI and must be suppressed with send_page_view:false in code.
- Shared tag user-provided data capabilities, including automatic email/phone/name/address detection, were on; disabled and saved.
- Stream: zero connected site tags; no event modifications; no custom events (empty-state screenshot verified).
- Property: Google Signals off; user-provided data collection off. Ads personalization allowed in all 307 regions; client must explicitly deny ad storage/user data/personalization and disable signals/personalization flags. No advertising integration added.

Initial home snapshot: last-seven-days source/medium card reports two sessions and two active users from chatgpt.com / ai-assistant; monthly channel card reports two AI Assistant sessions. These can include operator/development visits. They do not prove independent recommendations or site quality. Yesterday's zero counts are consistent with the deliberate analytics pause, but no causal analytics analysis has been performed.

Account configuration alone is not final verification. Validate actual browser requests for sensitive query, hash, referrer and reflection sentinels, duplicated views, and destination fanout. Code and account settings are separate controls. No retrospective data deletion requested/performed.

## Release disposition

Full verify passed 73 tests; production build passed 1,248 routes, 536 sitemap checks, and 1,244 recognized analytics paths. GA-enabled version e3c4c0f1-7c39-4ee4-b8ed-167563a097bd was deployed, but the Mac locked before native Chrome request QA. Restored the prior verified SEO version 8659848c-c926-4958-9869-47c0c2bbc61f and reset the local production build flag to false. No HAR capture was completed; do not claim network privacy or destination fanout verification. A brief enabled deployment occurred; no claims about whether visitors generated events in that interval.

Rollback verification: live /tests/ canonical remains correct, and all 11 referenced application bundles lack the GA loader. Local out/ still contains the tested GA-enabled build; rebuild with the intended flag before any future raw wrangler deploy.
