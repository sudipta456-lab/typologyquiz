# Seven full-motion quiz Stories — October 15

Prepared seven new 15-second vertical videos: fictional alien discovery, driving-practice awareness, Mars, Au/gold, Rome/Italy, physics interests and a Finding Nemo plot riddle. These use original HeyGen Video 1 footage with independently moving subjects/scenery, not still-photo slideshows. Editable measured typography was composited separately over the generated footage.

All seven matching quiz routes returned HTTP 200. Facts were checked against NASA Science, the Royal Society of Chemistry, Italia.it and Pixar/Disney's official synopsis; exact source URLs and captions are in the brief. Alien and physics prompts are playful interest choices without a scored right answer or diagnostic/ability claim. The driving awareness clip gives no driving maneuver instructions and is explicitly unofficial. The movie uses a generic generated reef, with no studio footage, posters, character designs or music samples.

## Artifacts

- Local gallery: `/Users/sudiptasarkar/Documents/Codex/2026-09-10/co/work/tiktok-launch/2026-10-15-full-motion-stories/gallery-native24.html`
- Download pack: `/Users/sudiptasarkar/Documents/Codex/2026-09-10/co/work/tiktok-launch/typologyquiz-seven-full-motion-stories-native24-2026-10-15.zip` (seven final MP4s, posters, gallery, captions and manifest; ZIP integrity passed).
- Production manifest: `2026-10-15-full-motion-stories-manifest.json`.
- Raw sources and decoded QA frames remain in the local production folder. Direct source-media download URLs are kept locally, not in Git.

## Verification and limits

Seven final exports in `final-native24/` pass: 1080×1920, native 24 fps, 15 seconds, H.264/yuv420p, generated audio retained, full-file decode with zero errors and non-identical raw frames at multiple timestamps. All 28 phase layouts pass actual glyph-bound/collision checks; the 40 existing layout tests and full `npm run verify` pass. Root inspected four real decoded native-24-fps output frames per clip at hook, choices, reveal and CTA (28 samples), plus three raw motion frames per clip. This sampled review is not a claim of continuous human playback or audio audition. Earlier 30-fps drafts are superseded and retained separately.

The renderer was implemented through authenticated Claude Sonnet and independently reviewed through Opus. Review findings were resolved before final export: half-open phase timing prevents double overlays, native frame cadence is preserved, sealed media and sidecars cannot be overwritten, QA precedes final-file promotion, and individual failures do not abort remaining items. The progress bar is inside the safe zone. Root verified no-overwrite behavior, invalid-QA rejection and missing-source failure reporting. No short source is looped/frozen to fill time. The state stays `prepared_local_only` in the publishing ledger. No Story/post upload, scheduling, deletion or public publication occurred during this production batch. The existing 21-post forward queue is unchanged.

All seven need Your brand / Promotional content and AI-generated content labels if uploaded to TikTok. Text in a video is not an interactive website button. Local gallery browser testing was blocked by the browser's file-URL policy; no workaround was attempted. The gallery's referenced assets and distribution ZIP were verified locally.
