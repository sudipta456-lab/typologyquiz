# Discovery and outreach — September 13, 2026

User authorized Astra architecture/quality review, implementation agents, privacy-safe GA4, SEO/LLM discoverability improvements, and relevant publisher outreach.

## Implemented

- Personality directory /tests/ now has its own canonical URL, title and description instead of inheriting the homepage canonical.
- Account, comparison and room routes (including room sessions) and all personality take/result pages now have noindex metadata. Public test introductions remain indexable.
- Sitemap excludes private utility pages and news aliases that canonicalize to immutable editions. Dates without a maintained content timestamp are omitted instead of reset on every deployment.
- `scripts/verify-discovery.mjs` checks every exported sitemap URL for uniqueness, actual output, matching canonical and absence of noindex, plus representative private-page exclusions. Run after a completed build with `./scripts/mac-run.sh node scripts/verify-discovery.mjs`.

## Verification

`npm run verify`: 59 tests passed, TypeScript and configured lints passed; three existing native-image warnings. Static build: 1,248 routes. Exported discovery check: 536 unique canonical indexable sitemap URLs. Astra reviewed the metadata/sitemap changes and found no blocking defects.

## Outreach

See OUTREACH_2026-09-13.md for the verified shortlist and tailored drafts. Affiliation and evidence limits must remain explicit. Nothing sent as of this report: sender/inbox availability is awaiting the user. Do not invent testimonials, use false independent identities, mass-post links or buy ranking links. Respect each publisher's submission policy and editorial decision.

## Remaining

GA4 is still paused. Astra's architecture is documented in GA4_ARCHITECTURE_2026-09-13.md; activation requires inspecting stream settings and verifying real network payloads before collection resumes. No Search Console/GA4 account performance data has been inspected, no referral diagnosis established, and no improvement in rankings or LLM citations is claimed. The user was asked to open their signed-in GA4 property.

These changes improve discoverability signals; they are not a completed growth program. Next: safe analytics implementation/settings verification, Search Console indexing evidence, publisher submissions from the confirmed account, and measurement of real referral visits. Existing assessment research and rights limitations remain unchanged.

## Primary guidance

- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap): include preferred canonical URLs; lastmod should reflect significant content changes.
- [Google AI search guidance](https://developers.google.com/search/docs/appearance/ai-features): established search fundamentals apply; eligibility is not guaranteed inclusion.
- [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies): avoid link spam and promotional comment campaigns intended to manipulate rankings.

Deployment: Cloudflare version `8659848c-c926-4958-9869-47c0c2bbc61f`; live /tests/ canonical, Mini-IPIP results/account noindex, and sitemap exclusions verified.

Follow-up: user confirmed hello inbox does not yet exist and requested Zoho/Cloudflare setup. Signed-in GA4 is now accessible; implementation and settings review are in progress. Initial home snapshot shows two chatgpt.com / ai-assistant sessions in last seven days; these may include our own tests.
