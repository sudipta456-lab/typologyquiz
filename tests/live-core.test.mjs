import assert from "node:assert/strict";
import test from "node:test";
import {
  LIMITS, TIMING_BANDS, allowedFor, answerResult, applyHostCommand, buildView, computeStandings, createRoomState, deleteAt,
  findPlayerByTokenHash, isExpired, joinPlayer, nextAlarm, normalizeName, parseClientMessage, parseRoomOptions,
  submitAnswer, tick, timingPoints, validSession,
} from "../worker/live-core.js";
import { LIVE_SESSIONS, catalogMetadata } from "../worker/live-sessions.js";
import {
  AUTH_DEADLINE_MS, LiveRoom, MAX_HOST_SOCKETS, MAX_PENDING_SOCKETS, MAX_SCREEN_SOCKETS, handleLive, sha256Hex,
} from "../worker/live.js";
import {
  ROOM_LIFETIME_MS, loadHostSecret, loadPlayerToken, saveHostSecret, savePlayerToken, setPlayerTokenExpiry, sweepPlayerTokens,
} from "../src/lib/live/storage.ts";

const T0 = 1_900_000_000_000;
const session = LIVE_SESSIONS[0];

function room(overrides = {}) {
  return createRoomState({ code: "ABC234", hostHash: "h".repeat(64), session, mode: "individual", scoring: "accuracy", extendedTime: false, now: T0, ...overrides });
}

function ok(result) {
  assert.equal(result.error, undefined, `unexpected error ${result.error}`);
  return result.state;
}

function join(state, name, n, extra = {}) {
  return ok(joinPlayer(state, { name, playerId: `player-${n}xx`, newTeamId: `team-${n}xxxx`, tokenHash: `tok-${n}`, ...extra }, T0));
}

function cmd(state, name, extra = {}) {
  return applyHostCommand(state, { t: "cmd", cmd: name, at: { phase: state.phase, q: state.q }, ...extra }, T0 + 1000);
}

/** Walk a room to the first question being open, with two individual players. */
function openRoom(overrides) {
  let s = room(overrides);
  s = join(s, "Ada", 1);
  s = join(s, "Grace", 2);
  s = ok(cmd(s, "start"));
  s = ok(applyHostCommand(s, { t: "cmd", cmd: "open", at: { phase: "preview", q: 0 } }, T0 + 10_000));
  return s;
}

test("every built-in session is valid, distinct and has sources", () => {
  assert.equal(LIVE_SESSIONS.length, 10);
  assert.equal(new Set(LIVE_SESSIONS.map((s) => s.id)).size, 10);
  const questionIds = new Set();
  for (const s of LIVE_SESSIONS) {
    assert.ok(validSession(s), s.id);
    for (const r of s.rounds) for (const q of r.questions) {
      assert.ok(!questionIds.has(q.id), q.id);
      questionIds.add(q.id);
    }
  }
});

test("correct-answer positions are balanced, so always picking one letter earns nothing", () => {
  const overall = [0, 0, 0, 0];
  for (const s of LIVE_SESSIONS) {
    const keys = s.rounds.flatMap((r) => r.questions.map((q) => {
      assert.equal(q.options.length, 4, `${q.id} has four options`);
      return q.answer;
    }));
    const counts = [0, 0, 0, 0];
    for (const k of keys) { counts[k] += 1; overall[k] += 1; }
    // An eight-question session: no letter is never right, none is right more than three times.
    assert.ok(counts.every((n) => n >= 1 && n <= 3), `${s.id} positions ${counts}`);
    let run = 1;
    for (let i = 1; i < keys.length; i++) {
      run = keys[i] === keys[i - 1] ? run + 1 : 1;
      assert.ok(run <= 2, `${s.id}: the same letter is correct ${run} times in a row`);
    }
  }
  const total = overall.reduce((a, b) => a + b, 0);
  assert.equal(total, 80);
  for (const n of overall) assert.ok(Math.abs(n - total / 4) <= total * 0.05, `overall positions ${overall}`);
});

test("catalog metadata never contains prompts, options, keys or explanations", () => {
  const text = JSON.stringify(catalogMetadata());
  for (const s of LIVE_SESSIONS) for (const r of s.rounds) for (const q of r.questions) {
    assert.ok(!text.includes(q.prompt));
    assert.ok(!text.includes(q.explanation));
    assert.ok(!text.includes(q.source));
  }
  assert.ok(!/"answer"|"options"|"explanation"/.test(text));
  for (const item of catalogMetadata()) {
    assert.ok(item.durationMin >= 5);
    assert.ok(["accuracy", "timed"].includes(item.defaults.scoring));
  }
});

test("names are normalized and unsafe names rejected", () => {
  assert.equal(normalizeName("  Ada   Lovelace "), "Ada Lovelace");
  assert.equal(normalizeName("Ｆｕｌｌｗｉｄｔｈ"), "Fullwidth");
  assert.equal(normalizeName("Zoë"), "Zoë");
  assert.equal(normalizeName("a‮evil"), "aevil");
  assert.equal(normalizeName("x".repeat(40)).length, LIMITS.nameMax);
  for (const bad of ["", "   ", "<script>", "!!!", "a\nb<", "F.u.c.k", 42, null, "x".repeat(300)]) assert.equal(normalizeName(bad), null, String(bad));
});

test("room options are validated strictly", () => {
  assert.equal(parseRoomOptions({ sessionId: "nope", mode: "individual", scoring: "accuracy" }, LIVE_SESSIONS).error, "unknown_session");
  assert.equal(parseRoomOptions({ sessionId: session.id, mode: "duo", scoring: "accuracy" }, LIVE_SESSIONS).error, "bad_mode");
  assert.equal(parseRoomOptions({ sessionId: session.id, mode: "team", scoring: "fast" }, LIVE_SESSIONS).error, "bad_scoring");
  assert.equal(parseRoomOptions({ sessionId: session.id, mode: "team", scoring: "timed", extra: 1 }, LIVE_SESSIONS).error, "bad_payload");
  assert.equal(parseRoomOptions([], LIVE_SESSIONS).error, "bad_payload");
  assert.equal(parseRoomOptions({ sessionId: session.id, mode: "team", scoring: "timed", extendedTime: true }, LIVE_SESSIONS).extendedTime, true);
});

test("phase transitions follow the host flow and reject skips and stale commands", () => {
  let s = room();
  assert.equal(cmd(s, "start").error, "no_players");
  s = join(s, "Ada", 1);
  assert.equal(cmd(s, "reveal").error, "bad_transition");
  assert.equal(cmd(s, "next").error, "bad_transition");
  s = ok(cmd(s, "start"));
  assert.equal(s.phase, "preview");
  assert.equal(s.q, 0);
  // A second tap issued against the old phase is stale, not a skip.
  assert.equal(applyHostCommand(s, { t: "cmd", cmd: "start", at: { phase: "lobby", q: -1 } }, T0).error, "stale");
  s = ok(cmd(s, "open"));
  assert.equal(s.phase, "open");
  s = ok(cmd(s, "lock"));
  assert.equal(s.phase, "locked");
  assert.equal(cmd(s, "open").error, "bad_transition");
  s = ok(cmd(s, "reveal"));
  s = ok(cmd(s, "standings"));
  const before = s;
  s = ok(cmd(s, "next"));
  assert.equal(s.q, 1);
  assert.equal(s.phase, "preview");
  assert.equal(before.q, 0, "reducer must not mutate its input");
  // Run to the end; next on the last question ends the event.
  const total = s.questions.length;
  for (let i = 1; i < total; i++) {
    s = ok(cmd(s, "open"));
    s = ok(cmd(s, "reveal"));
    s = ok(cmd(s, "next"));
  }
  assert.equal(s.phase, "ended");
  assert.ok(s.endedAt);
  assert.equal(cmd(s, "start").error, "room_ended");
  assert.equal(joinPlayer(s, { name: "Late", playerId: "player-9xx", newTeamId: "team-9xxxx", tokenHash: "t" }, T0).error, "room_ended");
});

test("roles may only send their own message types", () => {
  assert.equal(allowedFor("player", "cmd"), false);
  assert.equal(allowedFor("screen", "answer"), false);
  assert.equal(allowedFor("screen", "cmd"), false);
  assert.equal(allowedFor("host", "answer"), false);
  assert.equal(allowedFor(null, "answer"), false);
  assert.equal(allowedFor("host", "cmd"), true);
  assert.equal(allowedFor("player", "answer"), true);
});

test("client messages are validated, size-limited and carry no client time", () => {
  assert.equal(parseClientMessage("{").error, "bad_message");
  assert.equal(parseClientMessage(JSON.stringify({ t: "answer", q: 0, choice: 1, at: Date.now() })).error, "bad_message");
  assert.equal(parseClientMessage(JSON.stringify({ t: "answer", q: 0, choice: 1.5 })).error, "bad_message");
  assert.equal(parseClientMessage(JSON.stringify({ t: "answer", q: -1, choice: 1 })).error, "bad_message");
  assert.equal(parseClientMessage(JSON.stringify({ t: "cmd", cmd: "explode", at: { phase: "lobby", q: -1 } })).error, "bad_command");
  assert.equal(parseClientMessage(JSON.stringify({ t: "cmd", cmd: "next" })).error, "bad_message");
  assert.equal(parseClientMessage(JSON.stringify({ t: "cmd", cmd: "void", at: { phase: "reveal", q: 0 } })).error, "bad_message");
  assert.equal(parseClientMessage(JSON.stringify({ t: "hello", role: "host", secret: "short" })).error, "bad_message");
  assert.equal(parseClientMessage(JSON.stringify({ t: "hello", role: "admin" })).error, "bad_message");
  assert.equal(parseClientMessage(JSON.stringify({ t: "hello", role: "player", teamId: "team-1xxxx" })).error, "bad_message", "no joining someone else's team");
  assert.equal(parseClientMessage(JSON.stringify({ t: "hello", role: "player", name: "x".repeat(2000) })).error, "too_large");
  assert.equal(parseClientMessage(JSON.stringify({ t: "chat", text: "hi" })).error, "bad_message");
  assert.deepEqual(parseClientMessage(JSON.stringify({ t: "answer", q: 2, choice: 3 })), { t: "answer", q: 2, choice: 3 });
  assert.equal(parseClientMessage(JSON.stringify({ t: "hello", role: "player", name: "Ada" })).role, "player");
});

test("no answer key, explanation or source is serialized before reveal", () => {
  let s = openRoom();
  const q0 = s.questions[0];
  s = ok(submitAnswer(s, "player-1xx", 0, q0.answer, T0 + 12_000));
  for (const phase of ["preview", "open", "locked"]) {
    const state = phase === "preview" ? { ...s, phase: "preview" } : phase === "locked" ? ok(cmd(s, "lock")) : s;
    for (const role of ["player", "screen", "host"]) {
      const view = buildView(state, { role, playerId: "player-1xx" }, T0);
      const text = JSON.stringify(view);
      assert.equal(view.reveal, null, `${role} ${phase}`);
      assert.ok(!text.includes(q0.explanation), `${role} ${phase} explanation`);
      assert.ok(!text.includes(q0.source), `${role} ${phase} source`);
      assert.ok(!/"answer":\d/.test(text), `${role} ${phase} key`);
      assert.ok(!text.includes("hostHash") && !text.includes("tokenHash") && !text.includes("h".repeat(64)), `${role} ${phase} secrets`);
      assert.equal(view.me?.result, undefined);
      // Standings must not move before a reveal.
      for (const row of view.standings ?? []) assert.deepEqual([row.correct, row.timing], [0, 0]);
    }
  }
  // Future questions never appear at all.
  const text = JSON.stringify(buildView(s, { role: "host" }, T0));
  for (const later of s.questions.slice(1)) assert.ok(!text.includes(later.prompt));
  const revealed = buildView(ok(cmd(s, "reveal")), { role: "player", playerId: "player-1xx" }, T0);
  assert.equal(revealed.reveal.answer, q0.answer);
  assert.equal(revealed.me.result.correct, true);
});

test("timed preview shows the prompt but withholds the choices until answers open", () => {
  let s = room({ scoring: "timed" });
  s = join(s, "Ada", 1);
  s = ok(cmd(s, "start"));
  assert.equal(s.phase, "preview");
  const q0 = s.questions[0];
  for (const role of ["player", "screen", "host"]) {
    const view = buildView(s, { role, playerId: "player-1xx" }, T0);
    assert.equal(view.question.prompt, q0.prompt, `${role} can read the prompt`);
    assert.equal(view.question.options, null, `${role} gets no choices in preview`);
    const text = JSON.stringify(view);
    for (const option of q0.options) assert.ok(!text.includes(JSON.stringify(option)), `${role} preview leaks "${option}"`);
    assert.ok(!/"answer":\d/.test(text), `${role} preview key`);
  }
  // Nothing can be locked in early: the server only takes answers once open.
  assert.equal(submitAnswer(s, "player-1xx", 0, q0.answer, T0 + 2000).error, "not_open");
  s = ok(applyHostCommand(s, { t: "cmd", cmd: "open", at: { phase: "preview", q: 0 } }, T0 + 10_000));
  for (const role of ["player", "screen", "host"]) {
    assert.deepEqual(buildView(s, { role, playerId: "player-1xx" }, T0).question.options, q0.options, `${role} sees choices once open`);
  }
  // Next question goes back to withheld choices.
  s = ok(cmd(s, "reveal"));
  s = ok(cmd(s, "next"));
  assert.equal(buildView(s, { role: "player", playerId: "player-1xx" }, T0).question.options, null);
  // Untimed rooms keep showing choices in preview; there is no clock to race.
  let a = room();
  a = join(a, "Ada", 1);
  a = ok(cmd(a, "start"));
  assert.deepEqual(buildView(a, { role: "player", playerId: "player-1xx" }, T0).question.options, a.questions[0].options);
});

test("a player view never exposes other players' tokens or the host secret", () => {
  const s = openRoom();
  const text = JSON.stringify(buildView(s, { role: "player", playerId: "player-2xx" }, T0));
  assert.ok(!text.includes("tok-1") && !text.includes("tok-2"));
  assert.equal(buildView(s, { role: "player", playerId: "nobody-here" }, T0).me, null);
});

test("timing points use server receipt time in coarse bands, for correct answers only", () => {
  assert.deepEqual([...TIMING_BANDS], [100, 60, 20]);
  const tp = (correct, elapsedMs, scoring = "timed", limitMs = 20_000) => timingPoints({ correct, scoring, elapsedMs, limitMs });
  assert.equal(tp(false, 0), 0, "wrong answers earn nothing");
  assert.equal(tp(true, -5), 100);
  assert.equal(tp(true, 0), 100);
  assert.equal(tp(true, 6_666), 100);
  assert.equal(tp(true, 6_667), 60);
  assert.equal(tp(true, 13_333), 60);
  assert.equal(tp(true, 13_334), 20);
  assert.equal(tp(true, 99_000), 20);
  assert.equal(tp(true, 1_000, "accuracy", null), 0, "untimed rooms have no timing points");

  let s = openRoom({ scoring: "timed" });
  assert.equal(s.timeLimitMs, 20_000);
  assert.equal(s.closesAt, T0 + 30_000);
  const key = s.questions[0].answer;
  s = ok(submitAnswer(s, "player-1xx", 0, key, T0 + 15_000)); // 5s after open
  s = ok(submitAnswer(s, "player-2xx", 0, key, T0 + 20_000)); // 10s after open
  assert.equal(submitAnswer(s, "player-1xx", 0, (key + 1) % 4, T0 + 21_000).error, "already_answered");
  s = ok(cmd(s, "reveal"));
  assert.deepEqual(answerResult(s, 0, "player-1xx"), { correct: true, timing: 100 });
  assert.deepEqual(answerResult(s, 0, "player-2xx"), { correct: true, timing: 60 });
  const rows = computeStandings(s);
  assert.deepEqual(rows.map((r) => [r.name, r.correct, r.timing, r.rank]), [["Ada", 1, 100, 1], ["Grace", 1, 60, 2]]);
});

test("more correct answers always outrank faster but fewer correct answers", () => {
  let s = openRoom({ scoring: "timed" });
  const [q0, q1] = s.questions;
  const at = (ms) => s.openedAt + ms;
  // Ada: instant on both, one wrong. Grace: right on both, at the last moment.
  s = ok(submitAnswer(s, "player-1xx", 0, q0.answer, at(0)));
  s = ok(submitAnswer(s, "player-2xx", 0, q0.answer, at(19_999)));
  s = ok(cmd(s, "reveal"));
  s = ok(cmd(s, "next"));
  s = ok(applyHostCommand(s, { t: "cmd", cmd: "open", at: { phase: "preview", q: 1 } }, T0 + 60_000));
  s = ok(submitAnswer(s, "player-1xx", 1, (q1.answer + 1) % q1.options.length, at(0)));
  s = ok(submitAnswer(s, "player-2xx", 1, q1.answer, at(19_999)));
  s = ok(cmd(s, "reveal"));
  const rows = computeStandings(s);
  assert.deepEqual(rows.map((r) => [r.name, r.correct, r.timing, r.rank]), [["Grace", 2, 40, 1], ["Ada", 1, 100, 2]]);
  const view = buildView(s, { role: "player", playerId: "player-1xx" }, T0);
  assert.deepEqual(view.me.result, { correct: false, timing: 0 });
  assert.equal(view.me.standing.rank, 2);
});

test("timed questions close on the server clock and auto-lock via tick", () => {
  let s = openRoom({ scoring: "timed", extendedTime: true });
  assert.equal(s.timeLimitMs, 40_000);
  assert.equal(nextAlarm(s), s.closesAt);
  assert.equal(submitAnswer(s, "player-1xx", 0, 0, s.closesAt).error, "closed");
  assert.equal(tick(s, s.closesAt - 1).changed, false);
  const t = tick(s, s.closesAt);
  assert.equal(t.changed, true);
  s = t.state;
  assert.equal(s.phase, "locked");
  assert.equal(submitAnswer(s, "player-1xx", 0, 0, s.closesAt + 1).error, "not_open");
  assert.equal(nextAlarm(s), deleteAt(s));
});

test("accuracy mode is untimed and gives equal points regardless of speed", () => {
  let s = openRoom();
  assert.equal(s.closesAt, null);
  assert.equal(tick(s, T0 + 10 * 60 * 60 * 1000).changed, false);
  const key = s.questions[0].answer;
  s = ok(submitAnswer(s, "player-1xx", 0, key, T0 + 10_001));
  s = ok(submitAnswer(s, "player-2xx", 0, key, T0 + 600_000));
  s = ok(cmd(s, "reveal"));
  const rows = computeStandings(s);
  assert.deepEqual([rows[0].correct, rows[0].timing], [1, 0]);
  assert.deepEqual([rows[1].correct, rows[1].timing], [1, 0]);
  assert.equal(rows[0].rank, 1);
  assert.equal(rows[1].rank, 1, "ties share a rank");
});

test("answers are validated: wrong question, bad choice, unknown player, late joiner", () => {
  let s = openRoom();
  assert.equal(submitAnswer(s, "player-1xx", 1, 0, T0).error, "not_open");
  assert.equal(submitAnswer(s, "player-1xx", 0, 9, T0).error, "bad_choice");
  assert.equal(submitAnswer(s, "ghost-player", 0, 0, T0).error, "not_joined");
  s = join(s, "Latecomer", 3);
  assert.equal(submitAnswer(s, "player-3xx", 0, 0, T0).error, "joined_late");
});

test("void removes a question from scoring and recomputes standings and ties", () => {
  let s = openRoom();
  const q0 = s.questions[0];
  s = ok(submitAnswer(s, "player-1xx", 0, q0.answer, T0 + 11_000));
  s = ok(submitAnswer(s, "player-2xx", 0, (q0.answer + 1) % q0.options.length, T0 + 11_000));
  s = ok(cmd(s, "reveal"));
  let rows = computeStandings(s);
  assert.deepEqual(rows.map((r) => [r.name, r.correct, r.rank]), [["Ada", 1, 1], ["Grace", 0, 2]]);
  s = ok(cmd(s, "void", { q: 0 }));
  rows = computeStandings(s);
  assert.deepEqual(rows.map((r) => [r.name, r.correct, r.rank]), [["Ada", 0, 1], ["Grace", 0, 1]]);
  assert.equal(cmd(s, "void", { q: 0 }).error, "already_void");
  assert.equal(cmd(s, "void", { q: 5 }).error, "bad_question");
  const view = buildView(s, { role: "player", playerId: "player-1xx" }, T0);
  assert.equal(view.reveal.void, true);
  assert.equal(view.me.result, undefined);
});

test("voiding the open question locks it", () => {
  const s = ok(cmd(openRoom(), "void", { q: 0 }));
  assert.equal(s.phase, "locked");
  assert.deepEqual(s.voided, [0]);
});

test("team mode: each team is one shared device with no extra memberships", () => {
  let s = room({ mode: "team" });
  s = join(s, "Ignored", 1, { teamName: "Owls" });
  s = join(s, "", 2, { teamName: "Foxes" });
  const owls = s.players["player-1xx"].teamId;
  assert.equal(s.players["player-1xx"].name, "Owls", "the device is named for its team");
  // Another phone can neither claim the name nor attach to the team by id.
  assert.equal(joinPlayer(s, { teamName: "owls", playerId: "player-5xx", newTeamId: "team-5xxxx", tokenHash: "t5" }, T0).error, "team_taken");
  assert.equal(joinPlayer(s, { name: "Sneaky", teamId: owls, playerId: "player-5xx", newTeamId: "team-5xxxx", tokenHash: "t5" }, T0).error, "bad_team_name");
  assert.equal(Object.values(s.players).filter((p) => p.teamId === owls).length, 1);
  s = ok(cmd(s, "start"));
  s = ok(cmd(s, "open"));
  const key = s.questions[0].answer;
  s = ok(submitAnswer(s, "player-1xx", 0, key, T0 + 2000));
  s = ok(submitAnswer(s, "player-2xx", 0, (key + 1) % 4, T0 + 2000));
  s = ok(cmd(s, "reveal"));
  assert.deepEqual(computeStandings(s).map((r) => [r.name, r.correct]), [["Owls", 1], ["Foxes", 0]]);
  const view = buildView(s, { role: "player", playerId: "player-1xx" }, T0);
  assert.equal(view.me.teamName, "Owls");
  assert.equal(view.teamCount, 2);
  assert.equal("teams" in view, false);
  assert.equal("teammatesAnswered" in view.me, false);
});

test("caps: players per room, teams, player records and duplicate names", () => {
  let s = room();
  s = join(s, "Ada", 1);
  assert.equal(joinPlayer(s, { name: "ADA", playerId: "player-2xx", newTeamId: "team-2xxxx", tokenHash: "t" }, T0).error, "name_taken");
  assert.equal(joinPlayer(s, { name: "<b>", playerId: "player-2xx", newTeamId: "team-2xxxx", tokenHash: "t" }, T0).error, "bad_name");
  for (let i = 2; i <= LIMITS.maxPlayers; i++) s = join(s, `Player ${i}`, i);
  assert.equal(joinPlayer(s, { name: "One more", playerId: "player-0xx", newTeamId: "team-0xxxx", tokenHash: "t" }, T0).error, "room_full");

  let t = room({ mode: "team" });
  for (let i = 1; i <= LIMITS.maxTeams; i++) t = join(t, "", 100 + i, { teamName: `Team ${i}` });
  assert.equal(joinPlayer(t, { teamName: "Overflow", playerId: "player-98x", newTeamId: "team-98xxx", tokenHash: "t" }, T0).error, "teams_full");

  // Join/remove cycles cannot grow storage without bound.
  let r = room();
  for (let i = 0; i < LIMITS.maxPlayerRecords; i++) {
    r = join(r, `Cycle ${i}`, 1000 + i);
    r = ok(cmd(r, "remove", { playerId: `player-${1000 + i}xx` }));
  }
  assert.equal(joinPlayer(r, { name: "One more", playerId: "player-0xx", newTeamId: "team-0xxxx", tokenHash: "t" }, T0).error, "room_full");
});

test("rejoin finds a player by token hash; removal revokes it", () => {
  let s = openRoom();
  assert.equal(findPlayerByTokenHash(s, "tok-1").id, "player-1xx");
  assert.equal(findPlayerByTokenHash(s, "nope"), null);
  assert.equal(findPlayerByTokenHash(s, ""), null);
  s = ok(cmd(s, "remove", { playerId: "player-1xx" }));
  assert.equal(findPlayerByTokenHash(s, "tok-1"), null);
  assert.equal(submitAnswer(s, "player-1xx", 0, 0, T0).error, "not_joined");
  assert.equal(cmd(s, "remove", { playerId: "player-1xx" }).error, "unknown_player");
});

test("room lifecycle: expiry and ended grace period", () => {
  let s = room();
  assert.equal(isExpired(s, T0 + LIMITS.roomLifetimeMs - 1), false);
  assert.equal(isExpired(s, T0 + LIMITS.roomLifetimeMs), true);
  s = join(s, "Ada", 1);
  s = ok(cmd(s, "end"));
  assert.equal(s.phase, "ended");
  assert.equal(deleteAt(s), T0 + 1000 + LIMITS.endedGraceMs);
  assert.equal(nextAlarm(s), deleteAt(s));
});

test("router: catalog is public metadata; creation requires same origin and valid options", async () => {
  const origin = "https://typologyquiz.com";
  const catalog = await handleLive(new Request(`${origin}/api/live/catalog`), {}, "/api/live/catalog");
  assert.equal(catalog.status, 200);
  const body = await catalog.json();
  assert.equal(body.sessions.length, 10);
  assert.ok(!JSON.stringify(body).includes(LIVE_SESSIONS[0].rounds[0].questions[0].prompt));

  const created = [];
  const env = {
    LIVE_ROOM: {
      idFromName: (name) => name,
      get: (id) => ({ fetch: async (url, init) => { created.push({ id, url, body: init && JSON.parse(init.body) }); return new Response("{}", { status: 201 }); } }),
    },
  };
  const post = (body, headers = {}) => new Request(`${origin}/api/live/rooms`, { method: "POST", headers: { origin, "content-type": "application/json", ...headers }, body: JSON.stringify(body) });
  const good = { sessionId: session.id, mode: "individual", scoring: "timed" };
  assert.equal((await handleLive(post(good, { origin: "https://evil.example" }), env, "/api/live/rooms")).status, 403);
  assert.equal((await handleLive(post({ ...good, mode: "x" }), env, "/api/live/rooms")).status, 400);
  assert.equal((await handleLive(post({ ...good, pad: "x".repeat(2000) }), env, "/api/live/rooms")).status, 413);
  const res = await handleLive(post(good), env, "/api/live/rooms");
  assert.equal(res.status, 201);
  const { code, hostSecret } = await res.json();
  assert.match(code, /^[A-HJ-NP-Z2-9]{6}$/);
  assert.match(hostSecret, /^[A-Za-z0-9_-]{43}$/);
  assert.equal(created.length, 1);
  assert.equal(created[0].body.hostHash.length, 64);
  assert.ok(!JSON.stringify(created[0].body).includes(hostSecret), "only the hash reaches the room");

  assert.equal((await handleLive(new Request(`${origin}/api/live/rooms/bad!`), env, "/api/live/rooms/bad!")).status, 400);
  const ws = new Request(`${origin}/api/live/rooms/ABC234/ws`, { headers: { upgrade: "websocket", origin: "https://evil.example" } });
  assert.equal((await handleLive(ws, env, "/api/live/rooms/ABC234/ws")).status, 403);
  assert.equal((await handleLive(new Request(`${origin}/api/live/rooms`, { method: "POST" }), {}, "/api/live/rooms")).status, 503);
});

test("ended rooms list only revealed questions in the recap", () => {
  let s = openRoom();
  s = ok(cmd(s, "reveal"));
  s = ok(cmd(s, "end"));
  const view = buildView(s, { role: "screen" }, T0);
  assert.equal(view.recap.length, 1);
  assert.equal(view.recap[0].prompt, s.questions[0].prompt);
  assert.ok(!JSON.stringify(view).includes(s.questions[1].prompt));
});

// ---------------------------------------------------------------------------
// Durable Object, with in-memory storage and fake hibernatable sockets.

function makeCtx() {
  const data = new Map();
  const sockets = [];
  const ctx = {
    data, sockets, alarm: null,
    storage: {
      get: async (k) => structuredClone(data.get(k)),
      put: async (k, v) => { data.set(k, structuredClone(v)); },
      setAlarm: async (t) => { ctx.alarm = t; },
      deleteAlarm: async () => { ctx.alarm = null; },
      deleteAll: async () => { data.clear(); },
    },
    getWebSockets: () => sockets.filter((ws) => !ws.closed),
    acceptWebSocket: (ws) => sockets.push(ws),
    setWebSocketAutoResponse: () => {},
  };
  return ctx;
}

function fakeSocket(ctx, at = Date.now()) {
  const ws = {
    sent: [], attachment: { role: null, at }, closed: false, closeCode: null,
    send(m) { this.sent.push(JSON.parse(m)); },
    serializeAttachment(a) { this.attachment = structuredClone(a); },
    deserializeAttachment() { return this.attachment; },
    close(code) { this.closed = true; this.closeCode = code; },
  };
  ctx.sockets.push(ws);
  return ws;
}

const say = (obj, ws, msg) => obj.webSocketMessage(ws, JSON.stringify(msg));
const last = (ws, t) => [...ws.sent].reverse().find((m) => m.t === t);

test("LiveRoom object: host auth, roles, rejoin, no leaks, deletion", async () => {
  const ctx = makeCtx();
  const obj = new LiveRoom(ctx, {});
  const secret = "S".repeat(43);
  const init = await obj.fetch(new Request("https://live-room/init", {
    method: "POST", body: JSON.stringify({ code: "ABC234", hostHash: await sha256Hex(secret), sessionId: session.id, mode: "individual", scoring: "accuracy", extendedTime: false }),
  }));
  assert.equal(init.status, 201);
  assert.ok(!JSON.stringify([...ctx.data.values()]).includes(secret), "host secret is never stored");
  const again = await obj.fetch(new Request("https://live-room/init", { method: "POST", body: "{}" }));
  assert.equal(again.status, 409);

  const intruder = fakeSocket(ctx);
  await say(obj, intruder, { t: "hello", role: "host", secret: "W".repeat(43) });
  assert.equal(last(intruder, "error").code, "bad_secret");
  assert.equal(intruder.closeCode, 4003);

  const host = fakeSocket(ctx);
  await say(obj, host, { t: "hello", role: "host", secret });
  assert.equal(last(host, "welcome").role, "host");

  const anon = fakeSocket(ctx);
  await say(obj, anon, { t: "cmd", cmd: "start", at: { phase: "lobby", q: -1 } });
  assert.equal(last(anon, "error").code, "forbidden");

  const p1 = fakeSocket(ctx);
  await say(obj, p1, { t: "hello", role: "player", name: "Ada" });
  const welcome = last(p1, "welcome");
  assert.match(welcome.token, /^[A-Za-z0-9_-]{43}$/);
  assert.ok(!JSON.stringify([...ctx.data.values()]).includes(welcome.token), "rejoin token is stored only as a hash");
  await say(obj, p1, { t: "cmd", cmd: "start", at: { phase: "lobby", q: -1 } });
  assert.equal(last(p1, "error").code, "forbidden", "players cannot run host commands");

  const screen = fakeSocket(ctx);
  await say(obj, screen, { t: "hello", role: "screen" });
  await say(obj, screen, { t: "answer", q: 0, choice: 0 });
  assert.equal(last(screen, "error").code, "forbidden");

  await say(obj, host, { t: "cmd", cmd: "start", at: { phase: "lobby", q: -1 } });
  await say(obj, host, { t: "cmd", cmd: "open", at: { phase: "preview", q: 0 } });
  const q0 = session.rounds[0].questions[0];
  for (const ws of [p1, screen, host]) {
    const text = JSON.stringify(ws.sent);
    assert.ok(!text.includes(q0.explanation), "explanation not sent before reveal");
    assert.ok(!/"answer":\d/.test(text), "answer key not sent before reveal");
  }
  await say(obj, p1, { t: "answer", q: 0, choice: q0.answer });
  assert.deepEqual(last(p1, "answer_saved"), { t: "answer_saved", q: 0, choice: q0.answer });
  assert.equal(last(host, "state").view.responses.answered, 1);

  // Drop the connection and rejoin with the token: same player, answer kept.
  p1.closed = true;
  const p1b = fakeSocket(ctx);
  await say(obj, p1b, { t: "hello", role: "player", token: welcome.token });
  assert.equal(last(p1b, "welcome").playerId, welcome.playerId);
  assert.equal(last(p1b, "welcome").token, undefined, "token is only issued once");
  assert.equal(last(p1b, "state").view.me.answer.choice, q0.answer);

  await say(obj, host, { t: "cmd", cmd: "reveal", at: { phase: "open", q: 0 } });
  assert.equal(last(p1b, "state").view.reveal.answer, q0.answer);
  assert.deepEqual(last(p1b, "state").view.me.result, { correct: true, timing: 0 });

  // Oversized and malformed messages are rejected without state changes.
  await say(obj, p1b, { t: "hello", role: "player", name: "x".repeat(1100) });
  assert.equal(last(p1b, "error").code, "too_large");

  // Expiry: the alarm deletes everything and closes sockets.
  const stored = ctx.data.get("room");
  stored.expiresAt = 0;
  ctx.data.set("room", stored);
  obj.room = undefined;
  await obj.alarm();
  assert.equal(ctx.data.size, 0);
  assert.equal(ctx.alarm, null);
  assert.equal(p1b.closeCode, 4004);
  const gone = await obj.fetch(new Request("https://live-room/info"));
  assert.equal(gone.status, 404);
  assert.equal((await gone.json()).error, "room_not_found");
});

async function liveRoom(overrides = {}) {
  const ctx = makeCtx();
  const obj = new LiveRoom(ctx, {});
  const secret = "S".repeat(43);
  await obj.fetch(new Request("https://live-room/init", {
    method: "POST", body: JSON.stringify({ code: "ABC234", hostHash: await sha256Hex(secret), sessionId: session.id, mode: "individual", scoring: "accuracy", extendedTime: false, ...overrides }),
  }));
  const host = fakeSocket(ctx);
  await say(obj, host, { t: "hello", role: "host", secret });
  return { ctx, obj, host };
}

test("LiveRoom object: overlapping joins, commands and answers lose no updates", async () => {
  const { ctx, obj, host } = await liveRoom();
  // A full room arrives at once (more than the old 40/minute limit), with the
  // host pressing start in the middle of the burst. Nothing is awaited between
  // sends, so every hello's hashing overlaps the others.
  const players = Array.from({ length: LIMITS.maxPlayers }, () => fakeSocket(ctx));
  const half = LIMITS.maxPlayers / 2;
  const sends = players.map((ws, i) => () => say(obj, ws, { t: "hello", role: "player", name: `Player ${i}` }));
  sends.splice(half, 0, () => say(obj, host, { t: "cmd", cmd: "start", at: { phase: "lobby", q: -1 } }));
  await Promise.all(sends.map((send) => send()));
  for (const ws of players) assert.ok(last(ws, "welcome"), "every simultaneous join is welcomed");
  assert.equal(new Set(players.map((ws) => last(ws, "welcome").playerId)).size, LIMITS.maxPlayers);
  let stored = ctx.data.get("room");
  assert.equal(Object.keys(stored.players).length, LIMITS.maxPlayers, "no join overwrote another");
  assert.equal(stored.phase, "preview", "a later join did not roll back the start");
  assert.equal(last(host, "state").view.playerCount, LIMITS.maxPlayers);

  // Answers race a lock: every confirmed answer is stored, the rest are refused.
  await say(obj, host, { t: "cmd", cmd: "open", at: { phase: "preview", q: 0 } });
  await Promise.all([
    ...players.slice(0, half).map((ws) => say(obj, ws, { t: "answer", q: 0, choice: 0 })),
    say(obj, host, { t: "cmd", cmd: "lock", at: { phase: "open", q: 0 } }),
    ...players.slice(half).map((ws) => say(obj, ws, { t: "answer", q: 0, choice: 1 })),
  ]);
  stored = ctx.data.get("room");
  assert.equal(stored.phase, "locked", "the lock was not rolled back by an answer save");
  assert.equal(players.filter((ws) => last(ws, "answer_saved")).length, half);
  assert.equal(Object.keys(stored.answers[0]).length, half, "every confirmed answer is in storage");
  for (const ws of players.slice(half)) assert.equal(last(ws, "error").code, "not_open");
});

test("LiveRoom object: an exhausted join budget is a retryable error, not a hang", async () => {
  const { ctx, obj } = await liveRoom();
  obj.joinBucket = { tokens: 0, at: Date.now() };
  const ws = fakeSocket(ctx);
  await say(obj, ws, { t: "hello", role: "player", name: "Late" });
  const error = last(ws, "error");
  assert.equal(error.code, "join_busy");
  assert.ok(error.retryMs > 0 && error.retryMs <= 1000);
  assert.equal(ws.attachment.role, null);
  assert.equal(Object.keys(ctx.data.get("room").players).length, 0);
});

test("LiveRoom object: silent sockets time out and cannot crowd out real clients", async () => {
  const { ctx, obj, host } = await liveRoom();
  const now = Date.now();
  const stale = fakeSocket(ctx, now - AUTH_DEADLINE_MS);
  const idle = Array.from({ length: MAX_PENDING_SOCKETS }, (_, i) => fakeSocket(ctx, now - 1000 + i));
  await obj.scheduleAlarm(ctx.data.get("room"));
  assert.equal(ctx.alarm, now, "the alarm is set for the earliest hello deadline");

  assert.equal(obj.admit(now), true);
  assert.equal(stale.closeCode, 4001, "a socket past its deadline is closed");
  assert.equal(idle[0].closeCode, 4001, "a full waiting area drops its oldest socket");
  assert.equal(idle.filter((ws) => !ws.closed).length, MAX_PENDING_SOCKETS - 1);
  assert.equal(host.closed, false, "authenticated sockets are never swept");

  for (const ws of idle) ws.attachment.at = now - AUTH_DEADLINE_MS;
  await obj.alarm();
  assert.ok(idle.every((ws) => ws.closed), "the alarm closes the rest");
  assert.equal(host.closed, false);
  // Capped roles plus the waiting area always leave room under maxSockets.
  assert.ok(MAX_HOST_SOCKETS + MAX_SCREEN_SOCKETS + LIMITS.maxPlayers + MAX_PENDING_SOCKETS < LIMITS.maxSockets);
});

test("LiveRoom object: screens are capped and a player keeps one socket", async () => {
  const { ctx, obj } = await liveRoom();
  for (let i = 0; i < MAX_SCREEN_SOCKETS; i++) await say(obj, fakeSocket(ctx), { t: "hello", role: "screen" });
  const extra = fakeSocket(ctx);
  await say(obj, extra, { t: "hello", role: "screen" });
  assert.equal(extra.closeCode, 4008);

  const first = fakeSocket(ctx);
  await say(obj, first, { t: "hello", role: "player", name: "Ada" });
  const again = fakeSocket(ctx);
  await say(obj, again, { t: "hello", role: "player", token: last(first, "welcome").token });
  assert.equal(first.closeCode, 4006, "a reconnect replaces the old socket");
  assert.equal(last(again, "welcome").playerId, last(first, "welcome").playerId);
});

test("LiveRoom object: team rooms join one device per team", async () => {
  const { ctx, obj } = await liveRoom({ mode: "team" });
  const owls = fakeSocket(ctx);
  await say(obj, owls, { t: "hello", role: "player", teamName: "Owls" });
  assert.ok(last(owls, "welcome"));
  const copycat = fakeSocket(ctx);
  await say(obj, copycat, { t: "hello", role: "player", teamName: "OWLS" });
  assert.equal(last(copycat, "error").code, "team_taken");
  const intruder = fakeSocket(ctx);
  await say(obj, intruder, { t: "hello", role: "player", teamId: "anything-x" });
  assert.equal(last(intruder, "error").code, "bad_message");
  assert.equal(Object.keys(ctx.data.get("room").players).length, 1);
});

// ---------------------------------------------------------------------------
// Browser storage for recovery keys (src/lib/live/storage.ts)

class FakeStorage {
  constructor() { this.map = new Map(); }
  get length() { return this.map.size; }
  key(i) { return [...this.map.keys()][i] ?? null; }
  getItem(k) { return this.map.has(k) ? this.map.get(k) : null; }
  setItem(k, v) { this.map.set(k, String(v)); }
  removeItem(k) { this.map.delete(k); }
}

function withBrowserStorage(fn) {
  const original = Object.getOwnPropertyDescriptor(globalThis, "window");
  const local = new FakeStorage();
  const session = new FakeStorage();
  Object.defineProperty(globalThis, "window", { configurable: true, value: { localStorage: local, sessionStorage: session } });
  try {
    fn({ local, session, reopenTab: () => { session.map.clear(); } });
  } finally {
    if (original) Object.defineProperty(globalThis, "window", original);
    else delete globalThis.window;
  }
}

const TOKEN_A = "A".repeat(43);
const TOKEN_B = "B".repeat(43);

test("player rejoin tokens survive closing the tab, keyed by room, until the room expires", () => {
  withBrowserStorage(({ local, session, reopenTab }) => {
    savePlayerToken("ABC234", TOKEN_A);
    savePlayerToken("XYZ789", TOKEN_B);
    reopenTab();
    assert.equal(loadPlayerToken("ABC234"), TOKEN_A);
    assert.equal(loadPlayerToken("XYZ789"), TOKEN_B);
    assert.equal(session.length, 0, "nothing for players in sessionStorage");
    const record = JSON.parse(local.getItem("tq-live-player:ABC234"));
    assert.deepEqual(Object.keys(record).sort(), ["expiresAt", "token"]);
    assert.ok(record.expiresAt <= Date.now() + ROOM_LIFETIME_MS);

    // Once the room reports its deletion time, the record follows it exactly.
    const roomGone = Date.now() + 60_000;
    setPlayerTokenExpiry("ABC234", roomGone);
    assert.equal(JSON.parse(local.getItem("tq-live-player:ABC234")).expiresAt, roomGone);
    assert.equal(loadPlayerToken("ABC234", roomGone - 1), TOKEN_A);
    assert.equal(loadPlayerToken("ABC234", roomGone), null, "expired at the room's deletion time");
    assert.equal(local.getItem("tq-live-player:ABC234"), null, "an expired record is removed when read");
    assert.equal(loadPlayerToken("XYZ789"), TOKEN_B, "other rooms are untouched");

    // Revoked (removed player, room gone): cleared immediately.
    savePlayerToken("XYZ789", null);
    assert.equal(loadPlayerToken("XYZ789"), null);
    assert.equal(local.length, 0);
  });
});

test("player token storage sweeps expired and malformed records and rejects bad values", () => {
  withBrowserStorage(({ local }) => {
    const now = Date.now();
    local.setItem("tq-live-player:OLD234", JSON.stringify({ token: TOKEN_A, expiresAt: now - 1 }));
    local.setItem("tq-live-player:BAD234", "not json");
    local.setItem("tq-live-player:BAD345", JSON.stringify({ token: "short", expiresAt: now + 1000 }));
    local.setItem("tq-live-player:FAR234", JSON.stringify({ token: TOKEN_A, expiresAt: now + ROOM_LIFETIME_MS * 10 }));
    local.setItem("tq-live-player:LIVE23", JSON.stringify({ token: TOKEN_B, expiresAt: now + 60_000 }));
    local.setItem("unrelated-key", "keep");
    sweepPlayerTokens(now);
    assert.deepEqual([...local.map.keys()].sort(), ["tq-live-player:LIVE23", "unrelated-key"]);

    savePlayerToken("ABC234", "not a token");
    assert.equal(local.getItem("tq-live-player:ABC234"), null);
    savePlayerToken("ABC234", TOKEN_A, now + ROOM_LIFETIME_MS * 10);
    assert.ok(JSON.parse(local.getItem("tq-live-player:ABC234")).expiresAt <= Date.now() + ROOM_LIFETIME_MS, "never outlives a room");
  });
});

test("a token left in sessionStorage by the previous version moves to localStorage once", () => {
  withBrowserStorage(({ local, session }) => {
    session.setItem("tq-live-player:ABC234", TOKEN_A);
    assert.equal(loadPlayerToken("ABC234"), TOKEN_A);
    assert.equal(session.getItem("tq-live-player:ABC234"), null);
    assert.equal(JSON.parse(local.getItem("tq-live-player:ABC234")).token, TOKEN_A);
  });
});

test("the host secret stays in this tab's sessionStorage, never localStorage", () => {
  withBrowserStorage(({ local, session, reopenTab }) => {
    const secret = "S".repeat(43);
    saveHostSecret("ABC234", secret);
    assert.equal(session.getItem("tq-live-host:ABC234"), secret);
    assert.equal(local.length, 0);
    assert.equal(loadHostSecret("ABC234"), secret);
    saveHostSecret("ABC234", null);
    reopenTab();
    assert.equal(loadHostSecret("ABC234"), null);
  });
});
