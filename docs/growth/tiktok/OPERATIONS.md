# TypologyQuiz TikTok operations

Owner authorization: updated October 11, 2026, manage https://www.tiktok.com/@typologyquiz with a verified three-post daily cadence at 10:30 AM, 2:30 PM and 6:30 PM America/Edmonton. Routine original content publishing, profile improvements and relevant replies on our own posts are authorized. Reconcile existing schedules before filling missing slots. No paid advertising or subscriptions requested.

## Current account

Signed-in Chrome profile verified as @typologyquiz. Initial public baseline: zero videos, followers, following and likes. Bio updated and verified after reload: “Personality, geography & science quizzes.\nPlay free at TypologyQuiz.com”. Existing name and logo preserved. Web profile editor offered no website field, so captions must not claim a clickable bio link. Studio Analytics Last 7 days showed headline metrics as -- and traffic/search sections as insufficient data; these are unavailable rather than verified zeros. Studio exposes video and photo uploads. Publication/scheduler results belong in publishing-ledger.json; a prepared file is not a published post.

## Current visual-quality queue repair — October 15

The owner now prioritizes new image-led clips over older queued originals. Read `2026-10-15-new-visual-priority-plan.json`, the driving-cinematic manifest, and the current quality-audit note before creating or uploading anything. Proposed slots are not reservations or receipts. Never upload into an occupied slot; verify native removal and then the replacement’s exact caption, time, Everyone visibility and permalink after reloading Studio. Preserve original media hashes and URLs as history. **Current state, October 16 evening:** all seven approved replacements are complete. Today's alien, following-gap and Fe clips are published confirmed in Studio (displayed views 0/0/0); the other four remain scheduled October 17–18. All 18 future rows October 17–22 were freshly reconciled, three unique slots/day, Everyone and actual scheduled clocks. No approval is pending for those seven. The introduction replaced lithium on October 18 at 10:30, while the already-published October 15 Portugal post was retained. Twelve other scheduled older originals still have recorded CTA clipping findings; their local repairs are not uploaded replacements. The earlier thirteen-repair inventory includes the now-superseded lithium repair. See `2026-10-15-approved-replacements.md` and `2026-10-16-evening-reconciliation.md`.

The October 15 audit decoded actual question and final CTA frames from all 22 upcoming original exports. Twenty contain clipped CTA text or URLs; the September 22 sodium and silicon items fit. Checking only the existing 10-second decoded reveal frame missed these defects. **Every new upload must include visual inspection of the actual encoded first/question, answer and final CTA frames at phone scale**, plus measured layout/collision checks and native media QA. A successful encode or a good source PNG alone is not visual approval. Labels and site addresses must fit inside the TikTok safe area.

Desktop Studio disables deletion of some scheduled commercial-content items. The owner enabled iPhone Mirroring on October 15; the native TikTok account was visibly @typologyquiz, and a future post’s Share > More menu exposed Delete. Verify the exact caption and scheduled time before any action; only remove the confirmed batch. Use supported CUA controls. In this session coordinate-targeted scrolling did not move the profile grid, while window-targeted `drivePhone.scroll(0, "down", 5)` did; inspect a fresh screenshot after moving. Do not assume native mobile access from a previous turn.

A site address rendered into video pixels is not an interactive link. Both desktop and mobile profile editors currently have no Website field for this account. TikTok’s official guidance requires 1,000 followers or a Registered Business Account for website links, with feature availability varying. Never draw a fake functional button or say “tap the website/link in bio” until a real link exists and opens the intended live page. Use a plainly readable “Visit in your browser” address meanwhile. Do not invent registration details or change account type/permissions as a workaround.

## Scheduled workflow

Active Codex thread automation: typologyquiz-daily-tiktok-research-and-production. Runs daily at 06:00 and 21:00 America/Edmonton. At 06:00 reconcile first, then research, produce and QA enough distinct assets to meet the active cadence test. The active owner-requested cadence is **three** unique posts per local day at 10:30 AM, 2:30 PM and 6:30 PM America/Edmonton when the native Studio queue is verified. Measure seven local days of confirmed outcomes before proposing any cadence change. Reconcile anything already queued before adding another item. At 21:00 inspect outcomes/analytics, review relevant own-post comments, and prepare the next brief. One automation handles both phases because this thread supports one active heartbeat.

Use the three stated slots after checking the account's audience-activity data; they are provisional until the seven-day comparison is available. Verify the scheduler timezone before confirming. Do not backfill missed days. Count native scheduled and published posts by intended local date and unique content ID before adding anything. Run a seven-day comparison before proposing cadence changes.

Local production and browser automation need the computer on, the app running and account access available. A native TikTok scheduled post may publish independently after TikTok confirms its schedule; a Codex schedule alone does not prove TikTok publication. See official scheduled-task documentation: https://learn.chatgpt.com/docs/automations?surface=app.

## Screen-lock hardening

October 14 evening verification: a locked native Mac surface does **not** by itself establish that Studio is unavailable. The connected Chrome browser extension successfully opened/reloaded Studio and exposed the signed-in `@typologyquiz` profile, scheduled rows, published metrics, analytics, and comments while native-app control reported a locked Mac. Try the supported browser extension first, verify the visible profile, and reconcile through browser UI. Report a publishing blocker only if that browser path also fails or identity cannot be verified. Do not change security settings or attempt to bypass the lock.

Current sleep policy in this Mac session is `sleep=1` and `displaysleep=10`, so prolonged inactivity can pause a run during screen lock if no explicit wake guard is active. We cannot change global sleep policy without admin password for this session, so use the local guard below whenever a production or analytics run starts.

Before 06:00/21:00 work windows:

1. Start a temporary anti-sleep guard:
   `./scripts/social/keep-awake.sh start --battery-min 10 --minutes 360`
2. Confirm it is active:
   `./scripts/social/keep-awake.sh status`
   When you specifically need long runs with a battery floor, add `--interval 20` to check power more quickly.
3. Run the planned workflow (or keep the Codex browser tasks running manually)
4. Stop when done:
   `./scripts/social/keep-awake.sh stop`

If you have time to set a permanent policy, use only one of these and document permission:
- Admin one-liner (Mac sleep prevention while on AC): `sudo pmset -c sleep 0 displaysleep 0`
- Admin one-liner (Mac sleep prevention while on battery): `sudo pmset -b sleep 0 displaysleep 0`

If a run is interrupted, do not duplicate uploads. Continue with full reconciliation against the studio rows and ledger, then resume scheduling with only missing unique items.

## Daily research and production

### Visual quality standard — October 14 owner feedback

Use built-in GPT Image / ImageGen for original illustrative artwork. The owner approved the cinematic, curious fictional alien direction shown in `2026-10-14-visual-refresh.json`. Keep all quiz text, answer choices, labels, and CTA lettering outside the generated artwork as editable measured layers. Figma is connected for editable storyboards; HeyGen is connected for short motion/voice experiments within the existing subscription. CapCut's official Codex integration was identified but was not installed or authorized by this task. Do not substitute unverified community installers.

All new renders must measure actual glyph bounds, wrap or resize text within explicit boxes, check collisions between independent text/art regions, and be inspected at phone scale from an actual decoded export frame. The shared `scripts/social/layout.py` implements these checks for the revised geography/driving renderers and the visual pilot. Declared text-in-card containment is intentional; undeclared collisions fail. Keep critical information away from right-side controls and bottom captions. Never let decorative shapes obscure a question, reveal, source caveat, or CTA. Generated fiction needs a clear fiction label and applicable TikTok AI label, plus own-brand disclosure.

The September 23 geography batch has a verified final-CTA overflow (10 assets; 9 still queued at the evening audit). Revised local assets go into a new layout-v2 folder. Do not overwrite the ledger's original media or silently change its hashes. Existing Studio uploads retain the old pixels until replaced through the supported native workflow. Reconcile and record removal/replacement receipts before adding anything to occupied slots; if commercial-content editing remains mobile-only, report that precise blocker rather than adding duplicates.

Read the strategy, latest brief and ledger. Research relevant searches, content gaps and formats from available TikTok tools; record country/filter/date and source URLs, never invented popularity numbers. Use evergreen source-backed ideas when timely claims cannot be verified. Do not copy another creator’s script, footage or voice. Create one considered editorial idea per day, following the renderer’s manifest and source provenance. Keep the site’s logo and brand colors.

Verify quiz answer and linked live page, mobile legibility, safe placement away from TikTok controls, spelling, pacing, answer/reveal consistency, full clip playback, and any sound rights. Do not promote CRT/VVIQ until rights review is resolved. Do not call informal quizzes diagnostic or independently validated. No fake “99% fail” statistics or invented IQ claims. News publication retains its existing exact-content review requirement; default social content to verified evergreen topics.

### Marketing-agent collaboration and public engagement

Use a small internal swarm for strategy, fact-checking, production and review. Agents may exchange research, performance observations and lessons with each other, but they do not operate separate public personas or submit overlapping comments. One publishing operator reconciles the queue and performs any account action. Public replies on TypologyQuiz posts should answer genuine questions, corrections or useful feedback directly. On other creators' posts, contribute only when the comment is specifically relevant and useful on its own; identify as `@typologyquiz`, disclose the affiliation when promoting a quiz, and add a link only when it directly helps the discussion. No generic praise, copy-paste promotion, engagement quotas, repeated links, mass comments, coordinated likes, fabricated accounts or unsolicited DMs. A day with no worthwhile comment is a valid outcome. Record a confirmed reply separately from a draft. TikTok's [Community Guidelines](https://www.tiktok.com/community-guidelines/en/integrity-authenticity/) prohibit spam/deceptive behavior and artificial engagement; its [commercial disclosure guidance](https://support.tiktok.com/en/business-and-creator/creator-and-business-accounts/promoting-a-brand-product-or-service) requires the disclosure setting for posts promoting our own business.

The initial ten-piece production batch is an evergreen geography/science/arithmetic pilot with ten different questions. It tests short-form execution before adding the broader personality-education mix in the strategy. Refer to the actual launch manifest, not the illustrative strategy table, for exact first-batch captions and facts.

## Publishing and reconciliation

Use supported browser UI and verify account identity before each upload session. Upload only cleared assets. Select Your brand / Promotional content disclosure for posts promoting TypologyQuiz. Apply current AI labels when required; never imply AI illustrations are real footage. Use only original or explicitly cleared commercial audio. Do not accept new legal agreements, solve CAPTCHAs, or change credentials contrary to action-time tool requirements; record blockers and continue independent preparation.

Before clicking Post/Schedule, inspect exact file, caption, date/time, visibility and disclosures. After clicking, verify a successful post/schedule row or permalink and record the result. If a result is uncertain, reconcile Studio Posts before retrying. Never duplicate an uncertain upload. Maintain status distinctions: rendered, qa_passed, uploaded_draft, scheduled_confirmed, published_confirmed, blocked.

If the signed-in Studio session is unavailable, continue preparing and QA'ing one daily piece, state that Studio was unavailable, and leave the queue and ledger untouched. Prepared files do not become Studio items automatically. Do not claim a scheduled or published post without a Studio row, receipt or permalink.

## Metrics and community

Capture actual available analytics at comparable 24-hour and 72-hour post ages: views, average watch time, full-view rate, shares, saves, comments, profile visits and observable website traffic. Missing metrics stay null, not zero. Site analytics deliberately strips URL campaign details; do not promise per-post GA4 attribution that is not implemented. Use organic TikTok referral/profile metrics and report attribution limits. Reply to genuine relevant comments on our own posts as TypologyQuiz; no unsolicited DMs, engagement bots, fabricated testimonials or mass comments elsewhere. Do not store commenters’ private information.

## Files and commit boundary

Strategy: docs/growth/TIKTOK_STRATEGY_2026-09-13.md. Production manifests and captions: docs/growth/tiktok/. Renderer: scripts/social/. Local launch exports: /Users/sudiptasarkar/Documents/Codex/2026-09-10/co/work/tiktok-launch. Large rendered videos stay outside the web deployment and Git; scripts and text manifests are committed. A website deployment is unnecessary for social-only files.

## Launch result — September 13, 2026

Ten original 16-second videos passed media QA. First post published September 13 at 23:06; nine confirmed in TikTok Studio for September 14 from 09:00 through 19:00. Exact links, file hashes and times are in publishing-ledger.json. The September 14 morning run should create one additional distinct piece for the open 20:15 slot to bring that local day to ten, after reconciling the live queue. Do not repost this launch batch.

Chrome extension file-URL access was enabled by the user and the extension reconnected; supported filechooser uploads then worked. Native AX edits to TikTok's rich-caption field did not synchronize application state. The unsent draft was discarded and recreated; use browser locator fill on the clean caption combobox and verify the rendered preview agrees before submitting. Scheduling controls expose some hidden input roles; use the visible date/time picker and own-brand input, not direct DOM mutation. Scheduling storage consent is a native non-binding permission, already allowed. No account type change, subscription, ad spend or new legal agreement was needed.

Website production remains a21f1828-1a05-474d-8e14-c6aa45c86481, already deployed on both domains; live llms.txt matched the committed artifact. This release adds social tooling/documents only and requires no website redeploy. Repository npm run verify passed 76 tests, typecheck and configured lints (three existing image warnings); media verification passed all ten clips.
