# Traffic target plan — October 1, 2026

## Targets and measurement

The owner-set targets are **20,000 monthly visitors by January 1, 2027** and **60,000 monthly visitors by January 1, 2028**. For this plan, “monthly visitors” means GA4 **Total users in the trailing 30 days**, reported with the exact date range and property. Also report active users, sessions, engaged sessions, quiz starts, completions, shares, and returning users so a rise in visitors can be distinguished from useful quiz use. Do not substitute Cloudflare requests or unfiltered visits for people: they include crawlers and infrastructure traffic.

The latest live GA4 acquisition report, for **September 3–30, 2026**, showed **60 total users**, including 58 new users and 10 returning users, with 671 events, 3m13s average engagement per active user, and 0 key events. The first-user-medium breakdown was 25 “(none),” 19 organic, 15 unattributed, and 3 AI-assistant users; attribution needs improvement. Cloudflare's live last-24-hour view showed **8 visits and 78 page views**, too little volume to treat as a unique-person baseline. Its displayed Core Web Vitals were mostly good, but the sample was small. Search Console's recorded September 1–18 baseline was **27 clicks, 914 impressions, 3% CTR, average position 37.9**. These snapshots have different windows and definitions; capture a same-date baseline before comparing growth.

The GA4 figures are a measured baseline, not a confirmed count of independent people: operator QA can appear in reports, and GA4 has a small AI-assistant-attributed segment. The repo's manifest freshness check and analytics tests confirm that 1,264 known public routes are represented, but they do not amount to a fresh live network capture from every production URL. Treat them as a strong coverage contract and spot-check the live deployment after release.

At 60 users, 20,000 requires about **333× growth in three months** (roughly **6.93× each month** if growth were even). This is an exceptionally steep stretch goal. The 60,000 target is 3× the January target over the following year (about 9.6% compound monthly growth). Neither target is guaranteed by technical SEO, a sitemap, or publishing volume. Review the funnel and channel evidence monthly and revise tactics when a channel does not produce qualified visits.

## Monthly checkpoints

Use the trailing 30-day active-user count on each month-end checkpoint. These are operating checkpoints toward the owner's fixed dates, not claims about likely performance.

| Checkpoint | Monthly visitors target | Decision at checkpoint |
| --- | ---: | --- |
| October 31, 2026 | 500 | Confirm event tagging and source attribution; identify the first pages/channels producing non-operator quiz starts. |
| November 30, 2026 | 2,000 | Concentrate on pages with impressions and completed sessions; stop social formats with weak retention and no site visits. |
| December 20, 2026 | 8,000 | Check weekly run rate against 20K; use only channels with observed qualified traffic for the final push. |
| January 1, 2027 | 20,000 | Report actual trailing-30-day visitors, qualified engagement, source mix, and distance to target. |
| March 31, 2027 | 26,000 | Build repeatable search/referral and return-visit pathways; avoid thin page expansion. |
| June 30, 2027 | 35,000 | Expand proven quiz clusters and partnerships; compare visitor quality by channel. |
| September 30, 2027 | 47,000 | Improve returning use and internal discovery while maintaining source and mobile quality. |
| January 1, 2028 | 60,000 | Report actual trailing-30-day visitors and the same quality/source measures. |

The October–December checkpoints are intentionally demanding and show the required acceleration. If actual counts fall short, report the gap plainly and reset the next operating checkpoint from measured data; do not change the definition of “visitor” to make a target appear met.

## Work to execute

### First 7 days: establish a trustworthy funnel

1. Reconcile the live GA4 property/stream and Cloudflare Web Analytics with the repo's environment and generated analytics manifest. Confirm every canonical, indexable page is tagged once, private/noindex pages stay excluded as intended, and all interest quizzes are covered. The manifest includes physics, alien-archetype, and AI work-style routes; a successful static build does not prove a production deployment or a live network request. Use a clean browser session and check page views plus quiz start, completion, share, and return events. Record this as a new baseline, not a growth result.
2. Add a monthly acquisition sheet or durable log with date range, GA4 active users/sessions/engagement, Search Console clicks/impressions/CTR/position, Cloudflare human-filtered visits if available, quiz starts/completions, and top landing pages. Mark missing values as unavailable rather than zero. Exclude the owner's QA traffic where possible.
3. Run a real-phone pass on country and state quizzes at narrow phone widths: map hit areas, scroll/zoom behavior, choice selection, focus/Space/Enter behavior where a keyboard exists, touch completion, and result/share links. No real iPhone/Android touch pass was completed in this session. Record device/browser and defects. Desktop pointer/keyboard success does not establish touch usability.
4. Review the zero-key-event state. Define key events only for existing, privacy-reviewed quiz funnel events that the team actually needs; then verify the recorded start/completion/share funnel before using it to make decisions.

### October–November: improve high-intent discovery

- Prioritize existing pages already earning Search Console impressions, especially strong-intent geography/state/country quizzes and personality pages. Improve titles, descriptions, visible page summaries, internal links, and result-page next steps only when they accurately describe the page. Measure impressions, clicks, starts, and completions by landing page.
- Use internal links from related quizzes and hubs to make a second quiz easy to discover. Track next-play clicks and completion so pageviews alone do not decide what to expand.
- The physics, alien-archetype, and AI work-style quizzes have local release checks, accuracy-reviewed explanatory copy, metadata, sitemap, and analytics coverage. The alien quiz is visibly labeled fictional folklore, and the AI quiz is explicitly a preference snapshot. They have not been deployed or tested on a real phone. Treat them as discovery experiments, not traffic guarantees.
- Continue the TikTok pilot only with native post/queue reconciliation and comparable retention data. Current recorded evidence (2.4K views, 21 profile views, 1 visible follower for Sep 14–20) is a small discovery test, not website referral evidence. Add destination-link attribution before evaluating site impact. Do not increase volume just to inflate impressions.

### December 2026–January 2027: focus on demonstrated channels

- Weekly, compare qualified landing-page traffic with the January run rate. Reuse formats/topics only where the data shows quiz starts and completions, not just impressions or video views.
- Seek relevant publisher/community placements through individualized, permitted outreach and referral links. Existing outreach statuses remain pending/closed as documented; do not duplicate submissions or send follow-ups that require account/user action.
- Make no paid acquisition commitment from these baseline data. If the owner later elects to test paid traffic, start with a capped, attributable pilot and judge cost per completed quiz and return use, not raw clicks.

### February 2027–January 2028: scale repeatable results

- Each quarter, expand only proven clusters and partnership/referral formats; refresh pages when facts or sources change; prune or improve pages that attract impressions but no useful engagement.
- Build repeat use through saved progress, related quizzes, and carefully measured return pathways already in product. Do not introduce notifications, email capture, or research collection without the required privacy and consent design.
- Report channel concentration and quality. A 60K month dominated by bots, one short-lived social spike, or unqualified landing traffic is not a durable acquisition system.

## Existing project work and gates

The October 1 working tree already includes the physics-interest quiz, its trivia-hub link and discovery metadata, plus map keyboard activation work. These changes have previously passed the project verification and static build. Before release, re-run the applicable checks against the current working tree, especially analytics-manifest freshness and mobile behavior. The working tree also contains unrelated Vermont driving-bank work; keep it separate and do not stage it with Growth changes.

Still gated by review or external state:

- Earth/Space sampler: finish source-body/date/media-rights checks, then create and approve the exact hash-bound package before publication.
- World, US, and Canada news editions: complete independent source and salience review; keep held until exact-content review is complete.
- Prediction pilot: select an eligible event only after official schedule, rating, cutoff, settlement source, review record, and revision handling are complete.
- Publisher follow-through and TikTok publishing: reconcile the actual account state first; do not duplicate submitted or scheduled work. Some actions require the operator's account or action-time confirmation.
- CRT/VVIQ permissions and psychometric research/validation: resolve rights and required research/privacy review before expanding claims or collection.

These gates do not prevent completing the local traffic measurement plan, SEO hygiene, and product QA. They do prevent treating drafts, queued assets, or technical capability as approved/public work.

## Monthly review template

- Period and GA4 property/stream:
- Trailing-30-day active users / target:
- Total users / sessions / engaged sessions:
- Quiz starts / completions / completion rate / shares / return users:
- Search Console clicks / impressions / CTR / average position:
- Cloudflare visits and bot/filter method:
- Top five landing pages and source/medium:
- Mobile defects or browser/device coverage:
- Experiments started, observed outcome, and next decision:
- Remaining editorial/account/rights blockers:

## Ad revenue scenarios at the traffic targets

The current GA4 report has no key events and no ad-revenue evidence was available in the reviewed dashboard, so the site's present ad income is **unverified**. If ads are not approved, served, and viewable, revenue is $0 regardless of visitor count. Google defines page RPM as estimated earnings divided by page views, multiplied by 1,000, and notes that actual earnings depend on traffic, content, user locations, and ad setup ([RPM definition](https://support.google.com/adsense/answer/190515?hl=en), [earnings factors](https://support.google.com/adsense/answer/9902?hl=en)).

For planning only, assume **2 monetizable page views per visitor** and test three illustrative page-RPM values. These are sensitivity assumptions, not a quote or a promise; the site's geography mix, ad-network eligibility, consent/viewability, fill rate, and actual RPM have not been verified. Amounts are **USD per month**:

| Monthly visitors | Assumed page views | $2 RPM | $5 RPM | $10 RPM |
| ---: | ---: | ---: | ---: | ---: |
| 20,000 | 40,000 | $80 | $200 | $400 |
| 60,000 | 120,000 | $240 | $600 | $1,200 |

Use the low case until real ad serving has accumulated at least a full month of page views and estimated earnings. Replace assumptions with the site's realized page RPM, and subtract network fees, taxes, and any operating costs separately.

## Measurement references

Google Analytics and Search Console measure different stages and should be read together: [Google Search Central: Search Console and Analytics](https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console). Sitemaps help discovery but do not guarantee indexing: [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap). Search changes should follow people-first guidance rather than mass-producing pages: [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content). Structured data must describe visible page content and does not guarantee a search feature: [General structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).
