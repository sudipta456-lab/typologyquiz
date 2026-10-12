# TikTok Studio queue reconciliation — October 11, 2026

## Verified recovery

Studio was visibly signed in as `@typologyquiz`. Every recovered item was uploaded one at a time, set to **Everyone** with **Your brand / Promotional content** disclosure, submitted to native scheduling, then Studio was reloaded before the next item. A future-dated Studio row and permalink are the only evidence used to mark an item scheduled.

The recovered queue runs at 10:30 AM, 2:30 PM, and 6:30 PM America/Edmonton through October 22. Exact captions, local times, hashes, and Studio permalinks are in [`publishing-ledger.json`](publishing-ledger.json).

## Reliability protocol

1. Before an upload, reload Studio and reconcile every future row against the ledger.
2. Upload only one asset, verify the destination is live, choose Everyone and Your brand disclosure, then schedule.
3. Wait for Studio indexing, reload, and verify the exact caption, future local time, and permalink before advancing.
4. At the next 06:00 local run, check whether the immediately preceding scheduled row changed to a published row. Record available metrics only after confirmation.
5. Never retry an uncertain submission. A missing or mismatched row is a blocker, not a reason to upload again.

## Existing exception

Two prior Studio conflicts were visible during reconciliation:

- Two identical Vienna clips are scheduled for October 12 at 6:30 PM (`7695556364009098503` and `7695556195888794888`).
- The recovered Slovenia clip and the existing Alberta stop clip share October 12 at 10:30 AM.

The web Studio overflow Delete action displayed the visible limitation: “Videos with commercial content can only be edited on the TikTok app.” No deletion or edit was confirmed. The retained receipt is `7695556364009098503`; no further content will be added to either conflicting slot. The duplicate must be removed or moved in the TikTok mobile app before October 12 to restore the intended three-post daily cadence.

## Intentionally held assets

No broken-CTA asset was scheduled. The alien and physics routes returned 404 during the source check. The World Space Week item is seasonal and its October 4–10 observance has passed. The dated archive-news item keeps its September 10 edition label.
