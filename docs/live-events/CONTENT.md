# Live Events: content, sources, rights and review

Scope: the ten built-in sessions in `worker/live-sessions.js`, served only by the
`LiveRoom` Durable Object. This file does not cover any other TypologyQuiz content.

## Status

- **Editorial review: pending.** Every question was written for this release
  and checked against the source given, but no second reviewer has signed off.
  Before promoting `/live/` anywhere, a reviewer should open each source URL,
  confirm it still supports the keyed answer and explanation, and record the
  result in the table below.
- Source URLs were chosen as stable reference pages (Britannica, NASA, NOAA/NWS,
  USGS, NIST, GPS.gov, Merriam-Webster, MoMA). They have **not been link-checked
  from this machine**. A dead or redirected link should be replaced, not removed.

## Rights

- All prompts, options and explanations are original wording written for
  TypologyQuiz. Nothing is copied from the sources; the sources are cited as
  references for the fact, which is not itself copyrightable.
- No images, audio, logos or third-party trademarks are used in questions.
- Source links open with `rel="noopener noreferrer"`, and `/live/*` pages carry
  `<meta name="referrer" content="no-referrer">` from `src/app/live/layout.tsx`, so room codes in the URL are
  not passed to source sites.

## Content rules (all ten sessions)

- General knowledge, suitable for adults and families. Fixed multiple-choice
  options only; no free-text answers and no user-authored content.
- No personality typing, diagnosis or claims about the player.
- No current events, politics, religion, or facts that are disputed or change
  often (e.g. "largest city" rankings, record holders likely to be broken).
  Where a common answer has a well-known caveat, the prompt or explanation
  states it (Sahara as largest *hot* desert; Nile as *generally listed* longest
  in Africa; Euclidean triangles; pencils never contained lead).
- Body Basics is anatomy only. It gives no health advice.
- Explanations stay under 240 characters so they can be read aloud from the
  projector.
- `validSession()` in `worker/live-core.js` enforces structure: 2–4 unique
  options, a valid key, an explanation, an `https://` source, unique IDs.
  `tests/live-core.test.mjs` runs it over every session.
- Correct-answer positions are balanced: each session keys exactly two
  answers to each of A, B, C and D (20 of 80 per letter overall), never the
  same letter twice in a row. Numeric scales stay ascending or descending
  where the balance allows; in Number Sense four scales lead or end with the
  answer instead. The rebalance only reordered options; every question keeps
  its original correct answer, distractors, explanation and source. The test
  suite fails on position bias.
- In timed rooms the choices are withheld from every view (players, screen
  and host) during preview and sent only when the host opens answers, so
  nobody can pick early and tap the instant the clock starts.

## Sessions

| ID | Title | Default scoring | Time limit (extended) | Questions | Review |
| --- | --- | --- | --- | --- | --- |
| world-warm-up | World Warm-up | Accuracy, untimed | 20s (40s) | 8 | Pending |
| night-sky | Night Sky | Accuracy, untimed | 20s (40s) | 8 | Pending |
| kitchen-science | Kitchen Science | Timed | 20s (40s) | 8 | Pending |
| animal-records | Animal Records | Accuracy, untimed | 20s (40s) | 8 | Pending |
| word-origins | Word Origins | Accuracy, untimed | 25s (50s) | 8 | Pending |
| inventions | Inventions and Everyday Tech | Timed | 20s (40s) | 8 | Pending |
| body-basics | Body Basics | Accuracy, untimed | 25s (50s) | 8 | Pending |
| weather-water | Weather and Water | Accuracy, untimed | 25s (50s) | 8 | Pending |
| art-and-music | Art and Music Classics | Accuracy, untimed | 25s (50s) | 8 | Pending |
| number-sense | Number Sense | Timed | 25s (50s) | 8 | Pending |

The time limit only applies when the host picks timed scoring. The host can
always override the default scoring on the setup screen.

Items worth a closer look in review:

- `ns-sunlight` cites `science.nasa.gov/sun/facts/`. Confirm the page states
  the roughly 8-minute light travel time.
- `in-watt` cites the NIST SI units page. Confirm it lists the watt as the unit of power.
- `wx-thunder` and `wx-ef` cite weather.gov pages. NWS URLs do move. Re-check them.
- `am-starry` cites MoMA object 79802. Confirm the object ID.

## Scoring (published in the UI)

- Standings always rank by number of correct answers first.
- Accuracy: untimed; the host locks each question. Correct answers are the
  whole score.
- Timed: a correct answer also earns timing points by thirds of the time
  limit: 100 in the first third, 60 in the second, 20 in the last. Elapsed is
  the server's receipt time minus the server's open time. Timing points only
  order entries with the same number of correct answers, so a faster entry
  with fewer correct answers can never outrank a slower one with more. Wrong
  or missing answers earn nothing. Client clocks are never used; the phone
  countdown is display-only, adjusted by the server time in each update.
- Teams: one shared phone per team. The device is the team: one scoring
  entry, no extra memberships, so nobody can join (or dilute) another team.
- Only revealed, non-voided questions count. Voiding recomputes from the
  stored answers. Entries equal on correct answers and timing points share a
  rank.

## Privacy and retention

- No accounts. Nicknames and team names are NFKC-normalized, stripped of
  control/bidi characters, limited to 20 characters, and checked against a
  short blocklist. The host can remove any player.
- The host secret is returned once at creation and kept only in the URL
  fragment and `sessionStorage` (this tab only). The room stores its SHA-256
  hash.
- A player's rejoin token is sent once over the WebSocket and kept in
  `localStorage`, one record per room code, stamped with the room's deletion
  time. A phone that closes and reopens the tab rejoins as the same player
  for the room's lifetime. Expired or malformed records are swept on each
  visit, and the record is deleted as soon as the room reports the player
  removed or the room gone. The room stores only the token's SHA-256 hash.
  Neither the host secret nor a token ever appears in a URL query string,
  path or analytics event.
- Each room's state lives only in its own Durable Object storage. It is deleted by
  alarm 4 hours after creation, or 30 minutes after the host ends the event,
  whichever comes first. Nothing goes to KV, R2 or logs on purpose.
- Analytics: `/live/*` pages report only their fixed path. The analytics
  layer never sends query strings or fragments, so room codes, names and
  answers never reach analytics.

## Known limits (v1)

- Room creation has no per-IP rate limit (there is no shared counter store);
  it relies on same-origin checks, the small payload limit and room expiry.
  Joins are rate-limited per room (a full room of 80 can join in one burst,
  then about one per second), and messages per socket. A room keeps at most
  240 player records, removed players included.
- Room mutations (joins, answers, host commands, auto-lock) run one at a
  time in the Durable Object, each on the latest stored state.
- Sockets must say hello within 10 seconds; at most 16 may wait at once
  (the oldest is dropped first). Hosts (4), screens (10) and one socket per
  player are capped so authenticated reconnects always fit under 120.
- The projector view (`/live/screen/`) needs only the room code. It is
  read-only and shows only what players already see.
- Up to 80 players (individual) or 20 teams per room. Phase one supports
  one shared device per team only; teammates do not join on separate phones.
