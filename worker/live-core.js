/**
 * Live Events core: pure state, reducer, views and scoring.
 *
 * Nothing in here touches the network, storage, clocks or randomness. The
 * Durable Object in live.js owns those and passes in `now`, ids and hashes, so
 * every rule below can be exercised directly by node tests.
 *
 * Invariants this module is responsible for:
 * - The room state is the only source of truth. Clients send intents; the
 *   reducer decides. Host commands carry the phase/question they were issued
 *   against, so a double-tap or stale tab can never skip a question.
 * - Answer keys and explanations live only in state.questions. Views copy the
 *   prompt and options out by hand and add the key only for questions that the
 *   host has revealed. In timed rooms the options themselves are withheld
 *   during preview and appear only once answers open.
 * - Timing is server receipt time only. A client never sends a timestamp.
 * - Standings count revealed, non-void questions only, so standings cannot
 *   leak correctness before a reveal, and voiding recomputes from raw answers.
 * - Standings rank by correct answers first. Timing points only break ties
 *   between equal correct totals, so speed never beats an extra right answer.
 * - In team mode a team is one shared device: one player record, one score.
 */

export const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
export const CODE_PATTERN = /^[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$/;

export const LIMITS = Object.freeze({
  maxPlayers: 80,
  // Removed players keep their record so their token stays revoked; this
  // bounds how many join/remove cycles one room can absorb.
  maxPlayerRecords: 240,
  maxTeams: 20,
  maxSockets: 120,
  maxMessageBytes: 1024,
  nameMax: 20,
  roomLifetimeMs: 4 * 60 * 60 * 1000,
  endedGraceMs: 30 * 60 * 1000,
  minTimeLimitMs: 10_000,
  maxTimeLimitMs: 120_000,
});

export const MODES = Object.freeze(["individual", "team"]);
export const SCORING = Object.freeze(["accuracy", "timed"]);
export const PHASES = Object.freeze(["lobby", "preview", "open", "locked", "reveal", "standings", "ended"]);
export const HOST_COMMANDS = Object.freeze(["start", "open", "lock", "reveal", "standings", "next", "end", "void", "remove"]);

/** Timing points for a correct answer, by thirds of the time limit. */
export const TIMING_BANDS = Object.freeze([100, 60, 20]);

/** Published in the UI word for word. */
export const SCORING_RULES = Object.freeze({
  accuracy: "Standings rank by correct answers. No timer; the host locks each question.",
  timed: "Standings rank by correct answers first. Timing points only break ties between equal correct totals: a correct answer the server receives in the first third of the time limit earns 100, the middle third 60, the last third 20. Wrong or missing answers earn nothing, and speed never outranks an extra correct answer.",
  team: "Each team plays on one shared phone and counts as one entry in the standings. Talk it over, then answer together.",
});

// ---------------------------------------------------------------------------
// Names

// Letters (any script), digits, marks, spaces and a small set of punctuation.
const NAME_ALLOWED = /^[\p{L}\p{M}\p{N} .'\-&!?]+$/u;
// Invisible formatting, bidi overrides and controls can make names lie about
// what they say on a projector.
const NAME_STRIP = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/gu;
// Deliberately short: catches the obvious, the host can remove anything else.
const NAME_BLOCK = /(fuck|shit|cunt|nigg|fag|bitch|whore|slut|rape|nazi|hitler|porn|dick|cock|pussy)/;

/**
 * Returns a display-safe name or null. Never throws.
 * NFKC folds full-width and compatibility characters into their plain forms.
 */
export function normalizeName(input) {
  if (typeof input !== "string" || input.length > 200) return null;
  let name = input.normalize("NFKC").replace(NAME_STRIP, "").replace(/\s+/gu, " ").trim();
  if (!name) return null;
  const chars = Array.from(name);
  if (chars.length > LIMITS.nameMax) name = chars.slice(0, LIMITS.nameMax).join("").trim();
  if (!NAME_ALLOWED.test(name)) return null;
  if (!/[\p{L}\p{N}]/u.test(name)) return null;
  const folded = nameKey(name).replace(/[^a-z]/g, "");
  if (NAME_BLOCK.test(folded)) return null;
  return name;
}

/** Comparison key for uniqueness: case- and accent-insensitive. */
export function nameKey(name) {
  return name.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase().replace(/\s+/g, " ").trim();
}

// ---------------------------------------------------------------------------
// Session definitions (validation only; content lives in live-sessions.js)

const ID = /^[a-z0-9][a-z0-9-]{0,47}$/;

export function validSession(session) {
  if (!session || !ID.test(session.id) || typeof session.title !== "string") return false;
  if (!Array.isArray(session.rounds) || session.rounds.length === 0) return false;
  const ids = new Set();
  for (const round of session.rounds) {
    if (typeof round.title !== "string" || !Array.isArray(round.questions) || round.questions.length === 0) return false;
    for (const q of round.questions) {
      if (!ID.test(q.id) || ids.has(q.id)) return false;
      ids.add(q.id);
      if (typeof q.prompt !== "string" || q.prompt.length < 8 || q.prompt.length > 200) return false;
      if (!Array.isArray(q.options) || q.options.length < 2 || q.options.length > 4) return false;
      if (q.options.some((o) => typeof o !== "string" || !o || o.length > 60)) return false;
      if (new Set(q.options.map((o) => o.toLowerCase())).size !== q.options.length) return false;
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) return false;
      if (typeof q.explanation !== "string" || q.explanation.length < 10 || q.explanation.length > 240) return false;
      if (typeof q.source !== "string" || !q.source.startsWith("https://")) return false;
    }
  }
  return true;
}

/** Flattens rounds into the server-only question list stored with the room. */
export function flattenSession(session) {
  const out = [];
  session.rounds.forEach((round, r) => {
    for (const q of round.questions) {
      out.push({ id: q.id, round: r, prompt: q.prompt, options: [...q.options], answer: q.answer, explanation: q.explanation, source: q.source });
    }
  });
  return out;
}

// ---------------------------------------------------------------------------
// Room creation

export function parseRoomOptions(body, sessions) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return { error: "bad_payload" };
  const allowed = new Set(["sessionId", "mode", "scoring", "extendedTime"]);
  if (Object.keys(body).some((k) => !allowed.has(k))) return { error: "bad_payload" };
  const session = sessions.find((s) => s.id === body.sessionId);
  if (!session) return { error: "unknown_session" };
  if (!MODES.includes(body.mode)) return { error: "bad_mode" };
  if (!SCORING.includes(body.scoring)) return { error: "bad_scoring" };
  if (body.extendedTime !== undefined && typeof body.extendedTime !== "boolean") return { error: "bad_payload" };
  return { session, mode: body.mode, scoring: body.scoring, extendedTime: body.extendedTime === true };
}

export function timeLimitFor(session, scoring, extendedTime) {
  if (scoring !== "timed") return null;
  const base = Math.round((session.defaults?.timeLimitSec ?? 20) * 1000);
  const ms = extendedTime ? base * 2 : base;
  return Math.min(LIMITS.maxTimeLimitMs, Math.max(LIMITS.minTimeLimitMs, ms));
}

export function createRoomState({ code, hostHash, session, mode, scoring, extendedTime, now }) {
  if (!CODE_PATTERN.test(code)) throw new Error("bad code");
  if (!validSession(session)) throw new Error("bad session");
  return {
    v: 1,
    code,
    hostHash,
    createdAt: now,
    expiresAt: now + LIMITS.roomLifetimeMs,
    endedAt: null,
    session: {
      id: session.id,
      title: session.title,
      rounds: session.rounds.map((r) => r.title),
    },
    questions: flattenSession(session),
    mode,
    scoring,
    extendedTime: Boolean(extendedTime),
    timeLimitMs: timeLimitFor(session, scoring, extendedTime),
    phase: "lobby",
    q: -1,
    openedAt: null,
    closesAt: null,
    players: {},
    teams: {},
    rosters: {},
    answers: {},
    revealed: [],
    voided: [],
    seq: 0,
  };
}

export function deleteAt(state) {
  if (state.endedAt !== null) return Math.min(state.expiresAt, state.endedAt + LIMITS.endedGraceMs);
  return state.expiresAt;
}

export function isExpired(state, now) {
  return now >= deleteAt(state);
}

/** Earliest moment the Durable Object must wake: auto-lock or deletion. */
export function nextAlarm(state) {
  const del = deleteAt(state);
  if (state.phase === "open" && state.closesAt !== null) return Math.min(state.closesAt, del);
  return del;
}

// ---------------------------------------------------------------------------
// Reducer helpers

function clone(state) {
  return structuredClone(state);
}

function bump(state) {
  state.seq += 1;
  return state;
}

function activePlayers(state) {
  return Object.values(state.players).filter((p) => !p.removed);
}

function teamMembers(state, teamId) {
  return activePlayers(state).filter((p) => p.teamId === teamId);
}

function activeTeams(state) {
  return Object.values(state.teams).filter((t) => teamMembers(state, t.id).length > 0);
}

function openQuestion(state, now) {
  state.phase = "open";
  state.openedAt = now;
  state.closesAt = state.timeLimitMs === null ? null : now + state.timeLimitMs;
  // Snapshot who is eligible, so joining mid-question cannot answer it.
  const roster = {};
  for (const p of activePlayers(state)) (roster[p.teamId] ??= []).push(p.id);
  state.rosters[state.q] = roster;
  state.answers[state.q] ??= {};
}

function lockQuestion(state) {
  state.phase = "locked";
  state.closesAt = null;
}

function revealQuestion(state) {
  state.phase = "reveal";
  state.closesAt = null;
  if (!state.revealed.includes(state.q)) state.revealed.push(state.q);
}

/**
 * Apply a host command. `cmd` has already passed parseClientMessage.
 * Returns { state } or { error }. Never mutates the input.
 */
export function applyHostCommand(prev, cmd, now) {
  if (prev.phase === "ended" && cmd.cmd !== "void") return { error: "room_ended" };
  if (cmd.at && (cmd.at.phase !== prev.phase || cmd.at.q !== prev.q)) return { error: "stale" };
  const state = clone(prev);
  const last = state.questions.length - 1;
  switch (cmd.cmd) {
    case "start":
      if (state.phase !== "lobby") return { error: "bad_transition" };
      if (activePlayers(state).length === 0) return { error: "no_players" };
      state.q = 0;
      state.phase = "preview";
      break;
    case "open":
      if (state.phase !== "preview") return { error: "bad_transition" };
      openQuestion(state, now);
      break;
    case "lock":
      if (state.phase !== "open") return { error: "bad_transition" };
      lockQuestion(state);
      break;
    case "reveal":
      if (state.phase !== "open" && state.phase !== "locked") return { error: "bad_transition" };
      revealQuestion(state);
      break;
    case "standings":
      if (state.phase !== "reveal") return { error: "bad_transition" };
      state.phase = "standings";
      break;
    case "next":
      if (state.phase !== "reveal" && state.phase !== "standings") return { error: "bad_transition" };
      if (state.q >= last) {
        state.phase = "ended";
        state.endedAt = now;
      } else {
        state.q += 1;
        state.phase = "preview";
        state.openedAt = null;
      }
      break;
    case "end":
      state.phase = "ended";
      state.closesAt = null;
      state.endedAt = now;
      break;
    case "void": {
      const q = cmd.q;
      // Only questions that have actually been asked can be voided.
      if (!Number.isInteger(q) || q < 0 || q > state.q || !(q in state.rosters)) return { error: "bad_question" };
      if (state.voided.includes(q)) return { error: "already_void" };
      if (q === state.q && state.phase === "open") lockQuestion(state);
      state.voided.push(q);
      break;
    }
    case "remove": {
      const player = state.players[cmd.playerId];
      if (!player || player.removed) return { error: "unknown_player" };
      player.removed = true;
      player.tokenHash = null;
      break;
    }
    default:
      return { error: "bad_command" };
  }
  return { state: bump(state) };
}

/** Auto-lock a timed question whose deadline has passed. */
export function tick(prev, now) {
  if (prev.phase !== "open" || prev.closesAt === null || now < prev.closesAt) return { state: prev, changed: false };
  const state = clone(prev);
  lockQuestion(state);
  return { state: bump(state), changed: true };
}

/**
 * Join as a new player. In team mode the device is the team: `teamName` names
 * it and there are no further memberships, so nobody can join someone else's
 * team. Ids and the token hash come from the caller.
 */
export function joinPlayer(prev, { name, teamName, playerId, newTeamId, tokenHash }, now) {
  if (prev.phase === "ended") return { error: "room_ended" };
  if (activePlayers(prev).length >= LIMITS.maxPlayers) return { error: "room_full" };
  if (Object.keys(prev.players).length >= LIMITS.maxPlayerRecords) return { error: "room_full" };
  const team = prev.mode === "team";
  const displayName = normalizeName(team ? teamName : name);
  if (!displayName) return { error: team ? "bad_team_name" : "bad_name" };
  if (team && activeTeams(prev).length >= LIMITS.maxTeams) return { error: "teams_full" };
  const key = nameKey(displayName);
  if (activePlayers(prev).some((p) => nameKey(p.name) === key)) return { error: team ? "team_taken" : "name_taken" };
  const state = clone(prev);
  state.teams[newTeamId] = { id: newTeamId, name: displayName };
  state.players[playerId] = { id: playerId, name: displayName, teamId: newTeamId, tokenHash, joinedAt: now, removed: false };
  return { state: bump(state), playerId, teamId: newTeamId };
}

/** Find the player a rejoin token hash belongs to. */
export function findPlayerByTokenHash(state, tokenHash) {
  if (typeof tokenHash !== "string" || !tokenHash) return null;
  return activePlayers(state).find((p) => p.tokenHash === tokenHash) ?? null;
}

/**
 * Record an answer at server receipt time `now`. One answer per player per
 * question; the first one received is final.
 */
export function submitAnswer(prev, playerId, q, choice, now) {
  const player = prev.players[playerId];
  if (!player || player.removed) return { error: "not_joined" };
  if (prev.phase !== "open" || q !== prev.q) return { error: "not_open" };
  if (prev.closesAt !== null && now >= prev.closesAt) return { error: "closed" };
  const question = prev.questions[q];
  if (!Number.isInteger(choice) || choice < 0 || choice >= question.options.length) return { error: "bad_choice" };
  const roster = prev.rosters[q]?.[player.teamId];
  if (!roster || !roster.includes(playerId)) return { error: "joined_late" };
  if (prev.answers[q]?.[playerId]) return { error: "already_answered" };
  const state = clone(prev);
  // Both ends of the interval are server clock readings.
  state.answers[q][playerId] = { choice, receivedAt: now, elapsedMs: now - state.openedAt };
  return { state: bump(state) };
}

// ---------------------------------------------------------------------------
// Scoring

/**
 * Timing points for one answer: zero unless it is correct and the room is
 * timed. `elapsedMs` is server receipt time minus server open time.
 */
export function timingPoints({ correct, scoring, elapsedMs, limitMs }) {
  if (!correct || scoring !== "timed" || !limitMs) return 0;
  const elapsed = Math.min(limitMs, Math.max(0, elapsedMs));
  const band = Math.min(TIMING_BANDS.length - 1, Math.floor((elapsed / limitMs) * TIMING_BANDS.length));
  return TIMING_BANDS[band];
}

/** { correct, timing } for one player's answer, or null if they didn't answer. */
export function answerResult(state, q, playerId) {
  const a = state.answers[q]?.[playerId];
  if (!a) return null;
  const correct = a.choice === state.questions[q].answer;
  return { correct, timing: timingPoints({ correct, scoring: state.scoring, elapsedMs: a.elapsedMs, limitMs: state.timeLimitMs }) };
}

/**
 * Standings from revealed, non-void questions only. Order: correct answers,
 * then timing points, then name so the list does not shuffle. Entries equal
 * on both counts share a rank (1, 1, 3).
 */
export function computeStandings(state) {
  const totals = {};
  for (const t of activeTeams(state)) totals[t.id] = { correct: 0, timing: 0 };
  for (const q of state.revealed) {
    if (state.voided.includes(q)) continue;
    for (const p of activePlayers(state)) {
      const r = answerResult(state, q, p.id);
      if (!r?.correct || !(p.teamId in totals)) continue;
      totals[p.teamId].correct += 1;
      totals[p.teamId].timing += r.timing;
    }
  }
  const rows = Object.keys(totals).map((id) => ({ teamId: id, name: state.teams[id].name, ...totals[id] }));
  rows.sort((a, b) => b.correct - a.correct || b.timing - a.timing || a.name.localeCompare(b.name));
  let rank = 0;
  rows.forEach((row, i) => {
    const prev = rows[i - 1];
    if (i === 0 || row.correct !== prev.correct || row.timing !== prev.timing) rank = i + 1;
    row.rank = rank;
  });
  return rows;
}

// ---------------------------------------------------------------------------
// Views. Everything a client receives is built here, field by field.

/**
 * In a timed room the choices stay hidden until the host opens answers, so
 * nobody can pick during preview and tap the instant the clock starts. Every
 * role gets the same withheld view; the prompt is still shown for reading.
 */
function choicesHidden(state) {
  return state.scoring === "timed" && state.phase === "preview";
}

function publicQuestion(state, q) {
  const question = state.questions[q];
  return {
    index: q, round: question.round, roundTitle: state.session.rounds[question.round], prompt: question.prompt,
    options: choicesHidden(state) ? null : [...question.options],
  };
}

function revealFor(state, q) {
  if (!state.revealed.includes(q)) return null;
  const question = state.questions[q];
  const counts = question.options.map(() => 0);
  for (const a of Object.values(state.answers[q] ?? {})) counts[a.choice] += 1;
  return { answer: question.answer, explanation: question.explanation, source: question.source, counts, void: state.voided.includes(q) };
}

function responseCount(state) {
  if (state.q < 0 || !(state.q in state.rosters)) return null;
  const eligible = Object.values(state.rosters[state.q]).reduce((n, ids) => n + ids.length, 0);
  return { answered: Object.keys(state.answers[state.q] ?? {}).length, eligible };
}

/**
 * @param {object} state
 * @param {{ role: "host" | "player" | "screen", playerId?: string, connected?: Set<string> }} who
 * @param {number} now
 */
export function buildView(state, who, now) {
  const connected = who.connected ?? new Set();
  const showQuestion = state.q >= 0 && state.phase !== "lobby" && state.phase !== "ended";
  const standings = computeStandings(state);
  const view = {
    code: state.code,
    role: who.role,
    seq: state.seq,
    serverNow: now,
    phase: state.phase,
    session: { id: state.session.id, title: state.session.title, rounds: [...state.session.rounds], questionCount: state.questions.length },
    mode: state.mode,
    scoring: state.scoring,
    extendedTime: state.extendedTime,
    timeLimitMs: state.timeLimitMs,
    rules: { scoring: SCORING_RULES[state.scoring], team: state.mode === "team" ? SCORING_RULES.team : null },
    q: state.q,
    question: showQuestion ? publicQuestion(state, state.q) : null,
    closesAt: state.phase === "open" ? state.closesAt : null,
    reveal: showQuestion ? revealFor(state, state.q) : null,
    voided: [...state.voided],
    responses: state.phase === "open" || state.phase === "locked" || state.phase === "reveal" ? responseCount(state) : null,
    teamCount: activeTeams(state).length,
    playerCount: activePlayers(state).length,
    expiresAt: deleteAt(state),
    // After the event, revealed questions only, so sources can be checked.
    recap: state.phase === "ended"
      ? [...state.revealed].sort((a, b) => a - b).map((i) => {
        const question = state.questions[i];
        return { index: i, prompt: question.prompt, answer: question.options[question.answer], source: question.source, void: state.voided.includes(i) };
      })
      : null,
  };

  if (who.role === "host") {
    view.standings = standings;
    view.players = activePlayers(state).map((p) => ({
      id: p.id, name: p.name, team: state.teams[p.teamId].name, connected: connected.has(p.id),
      answered: state.q >= 0 ? Boolean(state.answers[state.q]?.[p.id]) : false,
    }));
    view.asked = Object.keys(state.rosters).map(Number).sort((a, b) => a - b);
  } else if (who.role === "screen") {
    view.standings = standings.slice(0, 10);
    view.lobby = state.phase === "lobby" ? activeTeams(state).map((t) => t.name) : null;
  } else {
    const me = state.players[who.playerId];
    if (!me || me.removed) {
      view.me = null;
    } else {
      const team = state.teams[me.teamId];
      const answer = state.q >= 0 ? state.answers[state.q]?.[me.id] : undefined;
      const mine = standings.find((row) => row.teamId === me.teamId) ?? null;
      view.me = {
        playerId: me.id, name: me.name, teamId: team.id, teamName: team.name,
        answer: answer ? { q: state.q, choice: answer.choice } : null,
        eligible: state.q >= 0 && Boolean(state.rosters[state.q]?.[me.teamId]?.includes(me.id)),
        standing: mine,
      };
      if (view.reveal && answer && !view.reveal.void) {
        view.me.result = answerResult(state, state.q, me.id);
      }
    }
    view.standings = standings.slice(0, 5);
  }
  return view;
}

// ---------------------------------------------------------------------------
// Client messages

const PLAYER_ID = /^[A-Za-z0-9_-]{8,32}$/;
const TOKEN = /^[A-Za-z0-9_-]{32,64}$/;

function exactKeys(obj, required, optional = []) {
  const keys = Object.keys(obj);
  const allowed = new Set([...required, ...optional]);
  return required.every((k) => k in obj) && keys.every((k) => allowed.has(k));
}

/**
 * Parse and validate one WebSocket message. Returns the message or
 * { error }. Anything unexpected, including extra fields, is rejected.
 */
export function parseClientMessage(raw) {
  if (typeof raw !== "string") return { error: "bad_message" };
  if (new TextEncoder().encode(raw).byteLength > LIMITS.maxMessageBytes) return { error: "too_large" };
  let msg;
  try { msg = JSON.parse(raw); } catch { return { error: "bad_message" }; }
  if (!msg || typeof msg !== "object" || Array.isArray(msg) || typeof msg.t !== "string") return { error: "bad_message" };
  switch (msg.t) {
    case "ping":
      return exactKeys(msg, ["t"]) ? msg : { error: "bad_message" };
    case "hello": {
      if (msg.role === "host") return exactKeys(msg, ["t", "role", "secret"]) && TOKEN.test(msg.secret) ? msg : { error: "bad_message" };
      if (msg.role === "screen") return exactKeys(msg, ["t", "role"]) ? msg : { error: "bad_message" };
      if (msg.role === "player") {
        if ("token" in msg) return exactKeys(msg, ["t", "role", "token"]) && TOKEN.test(msg.token) ? msg : { error: "bad_message" };
        if (!exactKeys(msg, ["t", "role"], ["name", "teamName"])) return { error: "bad_message" };
        for (const k of ["name", "teamName"]) if (k in msg && (typeof msg[k] !== "string" || msg[k].length > 100)) return { error: "bad_message" };
        return msg;
      }
      return { error: "bad_message" };
    }
    case "answer":
      return exactKeys(msg, ["t", "q", "choice"]) && Number.isInteger(msg.q) && msg.q >= 0 && msg.q < 1000 &&
        Number.isInteger(msg.choice) && msg.choice >= 0 && msg.choice < 8 ? msg : { error: "bad_message" };
    case "cmd": {
      if (!exactKeys(msg, ["t", "cmd", "at"], ["q", "playerId"])) return { error: "bad_message" };
      if (!HOST_COMMANDS.includes(msg.cmd)) return { error: "bad_command" };
      const at = msg.at;
      if (!at || typeof at !== "object" || !exactKeys(at, ["phase", "q"]) || !PHASES.includes(at.phase) || !Number.isInteger(at.q)) return { error: "bad_message" };
      if (msg.cmd === "void" && !Number.isInteger(msg.q)) return { error: "bad_message" };
      if (msg.cmd !== "void" && "q" in msg) return { error: "bad_message" };
      if (msg.cmd === "remove" && !(typeof msg.playerId === "string" && PLAYER_ID.test(msg.playerId))) return { error: "bad_message" };
      if (msg.cmd !== "remove" && "playerId" in msg) return { error: "bad_message" };
      return msg;
    }
    default:
      return { error: "bad_message" };
  }
}

/** Which message types each authenticated role may send. */
export function allowedFor(role, type) {
  if (type === "ping") return true;
  if (role === "host") return type === "cmd";
  if (role === "player") return type === "answer";
  return false;
}
