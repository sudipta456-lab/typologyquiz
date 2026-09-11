# Prediction pilot editorial contract

The public registry in `worker/predictions.js` starts empty. Do not activate a real event until its schedule, audience rating, questions, options, earliest eligible air/release time, and source record have been reviewed. `locksAt` is that earliest time, not a later local broadcast. An approved event needs a stable review reference bound to the reviewed revision.

Outcomes are a second publication step. A settlement needs its own version, matching event revision, official source evidence, and independent approval reference. Pending, void, and cancelled items are never counted as wrong. Corrections add a settlement version; they do not overwrite the prior review record. A settled record may link to a reviewed site-relative recap.

Signing keys are operational secrets. Configure `PREDICTION_SIGNING_KEYS` with Wrangler secret storage as a JSON object from key ID to secret, and set a non-secret `PREDICTION_SIGNING_KEY_ID` that identifies the active key. Keep old entries while their receipts remain relevant. The single `PREDICTION_SIGNING_SECRET` binding remains a local-development fallback for the active key only. Missing bindings deliberately make signing and verification unavailable.

The feature is casual and for a general audience. It has no wagers, prizes, authoritative leaderboard, or one-entry-per-guest promise. Sharing a receipt discloses its picks. Outcome details remain behind an explicit spoiler reveal.
