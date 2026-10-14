# Group Trivia Rooms

`/group/?room=CODE` is a small multiplayer lobby for one registry-trivia quiz. A host chooses **Play together** from a trivia page, shares the room link, and starts a five-second countdown. Each participant joins with a nickname, opens the same native trivia round on their own device, and their completed score appears on the shared board.

## Game flow

1. The host creates a lobby from a live registry-trivia route. The Worker resolves its title and run size from a generated catalog; it never trusts a browser-supplied title or score bound.
2. Players join the lobby and can see joined, playing, completed, and online states. Presence is a server-receipt heartbeat; hidden tabs stop reporting until they return.
3. The host starts one shared countdown. Players may still join late, with a score-only board that does not claim simultaneous play.
4. Starting from the lobby receives one opaque attempt key. The native quiz uses the room seed to pin both randomized subsets and prompted-map order. A completed summary can only be attached to that player and attempt.
5. The board ranks score only. Equal scores share a rank; elapsed time is context and never a tiebreaker.

## Chat and privacy

Joined players can read and send a small room chat. Messages are plaintext, rendered as text, capped at 200 characters, retained at most 40 at a time, and rate-limited to one every two seconds and ten per minute. Chat is read-only after the host ends a room.

The Durable Object stores a nickname, a hashed player token, presence/activity receipt, an optional hashed attempt key, bounded room chat, and one final-run summary: score, total, elapsed time, completion outcome, and completion time. It does not receive typed answers, answer keys, result pages, personality results, reflection answers, or analytics identifiers. Room codes, chat, names, and presence are not placed in analytics events or URLs beyond the room link itself.

A room expires after four hours. When ended, it is retained for at most 30 more minutes, then all room state is deleted automatically. Player tokens and attempt keys are held only in the player’s browser storage; the host key is session-only.

## Scope

This release supports the 63 routes backed by the registry trivia engine. It does not make personality assessments, driving tests, editorial/news quizzes, or the separately hosted paced Live Events sessions into shared scoreboards. Those formats need their own consent, integrity, and result-sharing rules.

The ordinary trivia result view uses a 750 ms transition that says the result is ready and has a visible **Show results now** control. Reduced-motion users receive results immediately. It never claims to be calculating a score or waits for advertising.
