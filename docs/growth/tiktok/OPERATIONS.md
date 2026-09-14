# TypologyQuiz TikTok operations

Owner authorization: September 13, 2026, manage https://www.tiktok.com/@typologyquiz, create ten content pieces daily, conduct daily research and schedule work. Routine original content publishing, profile improvements and relevant replies on our own posts are authorized. No paid advertising or subscriptions requested.

## Current account

Signed-in Chrome profile verified as @typologyquiz. Initial public baseline: zero videos, followers, following and likes. Bio updated and verified after reload: “Personality, geography & science quizzes.\nPlay free at TypologyQuiz.com”. Existing name and logo preserved. Web profile editor offered no website field, so captions must not claim a clickable bio link. Studio Analytics Last 7 days showed headline metrics as -- and traffic/search sections as insufficient data; these are unavailable rather than verified zeros. Studio exposes video and photo uploads. Publication/scheduler results belong in publishing-ledger.json; a prepared file is not a published post.

## Scheduled workflow

Active Codex thread automation: typologyquiz-daily-tiktok-research-and-production. Runs daily at 06:00 and 21:00 America/Edmonton. At 06:00 conduct research, produce and QA enough new assets to reach ten unique pieces for the local day including anything already queued, then schedule them in native TikTok Studio. At 21:00 inspect outcomes/analytics, review relevant own-post comments, and prepare the next brief. One automation handles both phases because this thread supports one active heartbeat.

Initial test slots: 09:00, 10:15, 11:30, 12:45, 14:00, 15:15, 16:30, 17:45, 19:00, 20:15, America/Edmonton. These are experiment slots, not proven best times. Verify the scheduler timezone before confirming. Do not backfill ten posts at once if a run starts late. Count native scheduled and published posts by intended local date and unique content ID before adding anything. Run a seven-day comparison before proposing cadence changes.

Local production and browser automation need the computer on, the app running and account access available. A native TikTok scheduled post may publish independently after TikTok confirms its schedule; a Codex schedule alone does not prove TikTok publication. See official scheduled-task documentation: https://learn.chatgpt.com/docs/automations?surface=app.

## Screen-lock hardening

Current sleep policy in this Mac session is `sleep=1` and `displaysleep=10`, so prolonged inactivity can pause a run during screen lock if no explicit wake guard is active. We cannot change global sleep policy without admin password for this session, so use the local guard below whenever a production or analytics run starts.

Before 06:00/21:00 work windows:

1. Start a temporary anti-sleep guard:
   `./scripts/social/keep-awake.sh start --minutes 360`
2. Confirm it is active:
   `./scripts/social/keep-awake.sh status`
3. Run the planned workflow (or keep the Codex browser tasks running manually)
4. Stop when done:
   `./scripts/social/keep-awake.sh stop`

If you have time to set a permanent policy, use only one of these and document permission:
- Admin one-liner (Mac sleep prevention while on AC): `sudo pmset -c sleep 0 displaysleep 0`
- Admin one-liner (Mac sleep prevention while on battery): `sudo pmset -b sleep 0 displaysleep 0`

If a run is interrupted, do not duplicate uploads. Continue with full reconciliation against the studio rows and ledger, then resume scheduling with only missing unique items.

## Daily research and production

Read the strategy, latest brief and ledger. Research relevant searches, content gaps and formats from available TikTok tools; record country/filter/date and source URLs, never invented popularity numbers. Use evergreen source-backed ideas when timely claims cannot be verified. Do not copy another creator’s script, footage or voice. Create ten different editorial ideas, not ten recolors. Follow the renderer’s manifest and source provenance. Keep the site’s logo and brand colors.

Verify quiz answer and linked live page, mobile legibility, safe placement away from TikTok controls, spelling, pacing, answer/reveal consistency, full clip playback, and any sound rights. Do not promote CRT/VVIQ until rights review is resolved. Do not call informal quizzes diagnostic or independently validated. No fake “99% fail” statistics or invented IQ claims. News publication retains its existing exact-content review requirement; default social content to verified evergreen topics.

The initial ten-piece production batch is an evergreen geography/science/arithmetic pilot with ten different questions. It tests short-form execution before adding the broader personality-education mix in the strategy. Refer to the actual launch manifest, not the illustrative strategy table, for exact first-batch captions and facts.

## Publishing and reconciliation

Use supported browser UI and verify account identity before each upload session. Upload only cleared assets. Select Your brand / Promotional content disclosure for posts promoting TypologyQuiz. Apply current AI labels when required; never imply AI illustrations are real footage. Use only original or explicitly cleared commercial audio. Do not accept new legal agreements, solve CAPTCHAs, or change credentials contrary to action-time tool requirements; record blockers and continue independent preparation.

Before clicking Post/Schedule, inspect exact file, caption, date/time, visibility and disclosures. After clicking, verify a successful post/schedule row or permalink and record the result. If a result is uncertain, reconcile Studio Posts before retrying. Never duplicate an uncertain upload. Maintain status distinctions: rendered, qa_passed, uploaded_draft, scheduled_confirmed, published_confirmed, blocked.

## Metrics and community

Capture actual available analytics at comparable 24-hour and 72-hour post ages: views, average watch time, full-view rate, shares, saves, comments, profile visits and observable website traffic. Missing metrics stay null, not zero. Site analytics deliberately strips URL campaign details; do not promise per-post GA4 attribution that is not implemented. Use organic TikTok referral/profile metrics and report attribution limits. Reply to genuine relevant comments on our own posts as TypologyQuiz; no unsolicited DMs, engagement bots, fabricated testimonials or mass comments elsewhere. Do not store commenters’ private information.

## Files and commit boundary

Strategy: docs/growth/TIKTOK_STRATEGY_2026-09-13.md. Production manifests and captions: docs/growth/tiktok/. Renderer: scripts/social/. Local launch exports: /Users/sudiptasarkar/Documents/Codex/2026-09-10/co/work/tiktok-launch. Large rendered videos stay outside the web deployment and Git; scripts and text manifests are committed. A website deployment is unnecessary for social-only files.

## Launch result — September 13, 2026

Ten original 16-second videos passed media QA. First post published September 13 at 23:06; nine confirmed in TikTok Studio for September 14 from 09:00 through 19:00. Exact links, file hashes and times are in publishing-ledger.json. The September 14 morning run should create one additional distinct piece for the open 20:15 slot to bring that local day to ten, after reconciling the live queue. Do not repost this launch batch.

Chrome extension file-URL access was enabled by the user and the extension reconnected; supported filechooser uploads then worked. Native AX edits to TikTok's rich-caption field did not synchronize application state. The unsent draft was discarded and recreated; use browser locator fill on the clean caption combobox and verify the rendered preview agrees before submitting. Scheduling controls expose some hidden input roles; use the visible date/time picker and own-brand input, not direct DOM mutation. Scheduling storage consent is a native non-binding permission, already allowed. No account type change, subscription, ad spend or new legal agreement was needed.

Website production remains a21f1828-1a05-474d-8e14-c6aa45c86481, already deployed on both domains; live llms.txt matched the committed artifact. This release adds social tooling/documents only and requires no website redeploy. Repository npm run verify passed 76 tests, typecheck and configured lints (three existing image warnings); media verification passed all ten clips.
