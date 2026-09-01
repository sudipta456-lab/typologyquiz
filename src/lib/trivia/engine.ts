// The type-in matcher and the small pieces of state that outlive a run.
//
// The matcher is the JetPunk/Sporcle mechanic: answers register the moment the
// input buffer matches an accepted spelling - no Enter key. "Kansas" fires the
// instant the sixth letter lands; "Arkansas" never passes through "kansas"
// because matching starts from the first character, so the two never collide.

import type { GhostEvent, GhostRecording, TriviaAnswer, TriviaBest, TriviaQuiz } from "./types";

/**
 * Canonical form for both aliases and the input buffer: lowercase, accents
 * stripped, everything but letters and digits removed. "St. John's" and
 * "saint johns" both have to survive this to be comparable. NFD splits an
 * accented letter into base + combining mark, and the final replace strips
 * the mark along with every other non-alphanumeric, so "Québec" -> "quebec".
 */
export function normalizeAnswer(raw: string): string {
  return raw
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z0-9]/g, "");
}

/** alias -> answer id, for O(1) lookup per keystroke. */
export function buildMatchIndex(answers: readonly TriviaAnswer[]): Map<string, string> {
  const index = new Map<string, string>();
  for (const answer of answers) {
    for (const alias of answer.aliases) {
      // First writer wins; datasets are responsible for keeping aliases
      // unambiguous. A dev-time check lives in the registry tests of the
      // datasets themselves (see assertNoAliasCollisions below).
      if (!index.has(alias)) index.set(alias, answer.id);
    }
  }
  return index;
}

/**
 * Every prefix of every alias. Lets the input self-heal: when the buffer is a
 * dead end (no alias can ever start with it), the client drops leading
 * characters until it is viable again. That absorbs the tail of a word whose
 * answer already fired ("quebec" registers at six letters; a fast typist's
 * trailing "city" prunes itself away) and even rescues a stray leading typo.
 */
export function buildPrefixSet(answers: readonly TriviaAnswer[]): Set<string> {
  const prefixes = new Set<string>();
  for (const answer of answers) {
    for (const alias of answer.aliases) {
      for (let i = 1; i <= alias.length; i++) {
        prefixes.add(alias.slice(0, i));
      }
    }
  }
  return prefixes;
}

/** Shortest suffix of the buffer that is still the start of some alias. */
export function pruneBuffer(prefixes: ReadonlySet<string>, buffer: string): string {
  let b = buffer;
  while (b.length > 0 && !prefixes.has(b)) {
    b = b.slice(1);
  }
  return b;
}

/**
 * Aliases that must not fire the moment they match, because the same buffer
 * could still grow into a DIFFERENT answer's alias: "uk" is a strict prefix
 * of "ukraine", "niger" of "nigeria", "guinea" of "guineabissau". The client
 * holds these briefly - if the player keeps typing toward the longer answer,
 * only the longer one fires; if they stop or move on, the short one fires.
 * Same-id prefixes ("vatican" -> "vaticancity") stay instant.
 */
export function buildDeferredAliasSet(answers: readonly TriviaAnswer[]): Set<string> {
  const owner = new Map<string, string>();
  for (const answer of answers) {
    for (const alias of answer.aliases) {
      if (!owner.has(alias)) owner.set(alias, answer.id);
    }
  }
  const deferred = new Set<string>();
  for (const answer of answers) {
    for (const alias of answer.aliases) {
      for (let i = 1; i < alias.length; i++) {
        const prefix = alias.slice(0, i);
        const prefixOwner = owner.get(prefix);
        if (prefixOwner !== undefined && prefixOwner !== answer.id) deferred.add(prefix);
      }
    }
  }
  return deferred;
}

export type MatchResult =
  | { kind: "hit"; id: string }
  | { kind: "already"; id: string }
  | { kind: "none" };

/**
 * Called on every keystroke with the normalized buffer. A hit means "accept
 * and clear the buffer"; "already" means the player retyped something found.
 */
export function matchBuffer(
  index: Map<string, string>,
  normalizedBuffer: string,
  found: ReadonlySet<string>
): MatchResult {
  if (normalizedBuffer.length === 0) return { kind: "none" };
  const id = index.get(normalizedBuffer);
  if (id === undefined) return { kind: "none" };
  return found.has(id) ? { kind: "already", id } : { kind: "hit", id };
}

/**
 * Dev-time guard: throws if two different answers share an alias. Called once
 * per dataset at module load in development builds only, so a bad alias fails
 * loudly at the desk instead of silently misfiling answers for players.
 */
export function assertNoAliasCollisions(
  datasetLabel: string,
  answers: readonly TriviaAnswer[]
): void {
  if (process.env.NODE_ENV === "production") return;
  const seen = new Map<string, string>();
  for (const answer of answers) {
    for (const alias of answer.aliases) {
      const owner = seen.get(alias);
      if (owner !== undefined && owner !== answer.id) {
        throw new Error(
          `Trivia dataset "${datasetLabel}": alias "${alias}" belongs to both ${owner} and ${answer.id}`
        );
      }
      seen.set(alias, answer.id);
    }
  }
}

// ---------------------------------------------------------------------------
// Personal bests (localStorage, per slug - same device-only model as the rest
// of the site).
// ---------------------------------------------------------------------------

export function bestStorageKey(slug: string): string {
  return `tq_trivia_best_v1:${slug}`;
}

const bestKey = bestStorageKey;

export function loadBest(slug: string): TriviaBest | null {
  try {
    const raw = localStorage.getItem(bestKey(slug));
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;
    const rec = parsed as { bestScore?: unknown; bestTimeMs?: unknown };
    if (typeof rec.bestScore !== "number") return null;
    const best: TriviaBest = { bestScore: rec.bestScore };
    if (typeof rec.bestTimeMs === "number") best.bestTimeMs = rec.bestTimeMs;
    return best;
  } catch {
    return null;
  }
}

/**
 * Merges a finished run into the stored best and returns the new record plus
 * what improved (the results screen calls out "new best!").
 */
export function recordRun(
  slug: string,
  score: number,
  timeUsedMs: number,
  completedAll: boolean
): { best: TriviaBest; newBestScore: boolean; newBestTime: boolean } {
  const prev = loadBest(slug);
  const best: TriviaBest = { bestScore: prev?.bestScore ?? 0 };
  if (prev?.bestTimeMs !== undefined) best.bestTimeMs = prev.bestTimeMs;

  const newBestScore = score > best.bestScore;
  if (newBestScore) best.bestScore = score;

  let newBestTime = false;
  if (completedAll && (best.bestTimeMs === undefined || timeUsedMs < best.bestTimeMs)) {
    best.bestTimeMs = timeUsedMs;
    newBestTime = true;
  }

  try {
    localStorage.setItem(bestKey(slug), JSON.stringify(best));
  } catch {
    /* storage full or blocked - bests are a nicety, never break the game */
  }
  return { best, newBestScore, newBestTime };
}

// ---------------------------------------------------------------------------
// Ghost recordings (localStorage, per slug). The best run's recording is the
// player's ghost: on a later run its timestamps replay as a quiet opponent.
// Same device-only model as the bests, same never-break-the-game try/catch.
//
// Random-subset quizzes (us-states-random-20, canada-random-8) do NOT get a
// ghost. A race is only meaningful when both runs cover the same answer set,
// and forcing a replay onto the ghost's old draw would kill the one thing
// those quizzes promise ("every run draws a new 20"). Encoding the subset ids
// into links would fit the budget but still breaks the fresh-draw promise, so
// ghosts are simply off there - the caller gates on quizSupportsGhost.
// ---------------------------------------------------------------------------

export function quizSupportsGhost(quiz: Pick<TriviaQuiz, "modifiers">): boolean {
  return quiz.modifiers?.randomSubset === undefined;
}

export function ghostStorageKey(slug: string): string {
  return `tq_trivia_ghost_v1:${slug}`;
}

export function loadGhost(slug: string): GhostRecording | null {
  try {
    const raw = localStorage.getItem(ghostStorageKey(slug));
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;
    const rec = parsed as { score?: unknown; timeMs?: unknown; events?: unknown };
    if (typeof rec.score !== "number" || typeof rec.timeMs !== "number") return null;
    if (!Array.isArray(rec.events)) return null;
    const events: GhostEvent[] = [];
    for (const e of rec.events) {
      if (typeof e !== "object" || e === null) return null;
      const ev = e as { id?: unknown; t?: unknown };
      if (typeof ev.id !== "string" || typeof ev.t !== "number" || !Number.isFinite(ev.t)) {
        return null;
      }
      events.push({ id: ev.id, t: ev.t });
    }
    events.sort((a, b) => a.t - b.t);
    return { score: rec.score, timeMs: rec.timeMs, events };
  } catch {
    return null;
  }
}

/**
 * Keeps the recording if it is the new best run (higher score, or same score
 * faster). Returns true when the stored ghost changed, so the client can
 * refresh what it shows.
 */
export function recordGhostRun(slug: string, run: GhostRecording): boolean {
  const prev = loadGhost(slug);
  const better =
    prev === null ||
    run.score > prev.score ||
    (run.score === prev.score && run.timeMs < prev.timeMs);
  if (!better) return false;
  try {
    localStorage.setItem(ghostStorageKey(slug), JSON.stringify(run));
    return true;
  } catch {
    /* storage full or blocked - ghosts are a nicety, never break the game */
    return false;
  }
}

// "Race my ghost" is one per-device preference, not per quiz - a player who
// turns the ghost off wants it off everywhere.

const GHOST_RACE_PREF_KEY = "tq_trivia_ghost_race_v1";

export function loadGhostRacePref(): boolean {
  try {
    return localStorage.getItem(GHOST_RACE_PREF_KEY) !== "off";
  } catch {
    return true;
  }
}

export function saveGhostRacePref(on: boolean): void {
  try {
    localStorage.setItem(GHOST_RACE_PREF_KEY, on ? "on" : "off");
  } catch {
    /* fine - the default (on) comes back next visit */
  }
}

/** How many ghost answers had landed by this point in the run. Times sorted ascending. */
export function countGhostFound(sortedTimesMs: readonly number[], elapsedMs: number): number {
  let n = 0;
  while (n < sortedTimesMs.length && sortedTimesMs[n] <= elapsedMs) n++;
  return n;
}

// ---------------------------------------------------------------------------
// Estimated percentiles ("beats about X% of players" - always labelled
// estimated; there is no server counting real plays).
// ---------------------------------------------------------------------------

export function estimateBeatsPercent(
  quiz: Pick<TriviaQuiz, "percentileAnchors">,
  score: number,
  totalAnswers: number
): number {
  const fraction = totalAnswers === 0 ? 0 : score / totalAnswers;
  const anchors = quiz.percentileAnchors;
  if (anchors.length === 0) return 0;
  if (fraction <= anchors[0][0]) return Math.round(anchors[0][1]);
  const last = anchors[anchors.length - 1];
  if (fraction >= last[0]) return Math.round(last[1]);
  for (let i = 1; i < anchors.length; i++) {
    const [x1, y1] = anchors[i - 1];
    const [x2, y2] = anchors[i];
    if (fraction <= x2) {
      const t = x2 === x1 ? 1 : (fraction - x1) / (x2 - x1);
      return Math.round(y1 + t * (y2 - y1));
    }
  }
  return Math.round(last[1]);
}

// ---------------------------------------------------------------------------
// Challenge links: score + time carried in a query param, decoded defensively.
//
// Format: ?c=score-timeMs[-gDELTAS] - the third field is an OPTIONAL compact
// ghost. Answer times are rounded to tenths of a second, delta-encoded, each
// delta written in base36 and joined with "." (all URL-safe unescaped):
//
//   ?c=46-228400-g2f.1a.8.3k...     (46 answers, one delta per answer)
//
// The ghost blob is capped at GHOST_BLOB_MAX chars; a run whose encoding
// would blow the cap ships today's score-only link instead - never a broken
// one. Decoding is symmetric and forgiving: an old score-only link parses
// exactly as before, and a malformed or inconsistent ghost field is silently
// dropped, degrading to score-only.
// ---------------------------------------------------------------------------

export interface ChallengePayload {
  score: number;
  timeMs: number;
  /** The sender's answer times, ms from run start, ascending. One per answer scored. */
  ghostTimesMs?: number[];
}

/** Hard cap on the encoded ghost field, "g" prefix included (~100+ answers fit). */
export const GHOST_BLOB_MAX = 700;

const GHOST_MAX_EVENTS = 250;
const GHOST_MAX_TENTHS = 360000; // 10 hours, far past any timer

/**
 * "g" + base36 tenth-of-a-second deltas joined by ".". Returns null when
 * there is nothing to encode or the blob would exceed the cap.
 */
export function encodeGhostTimes(timesMs: readonly number[]): string | null {
  if (timesMs.length === 0 || timesMs.length > GHOST_MAX_EVENTS) return null;
  const parts: string[] = [];
  let prevTenths = 0;
  for (const t of timesMs) {
    if (!Number.isFinite(t) || t < 0) return null;
    const tenths = Math.min(GHOST_MAX_TENTHS, Math.round(t / 100));
    // Times must be ascending; clamp any jitter to a zero delta.
    const delta = Math.max(0, tenths - prevTenths);
    prevTenths = prevTenths + delta;
    parts.push(delta.toString(36));
  }
  const blob = `g${parts.join(".")}`;
  return blob.length <= GHOST_BLOB_MAX ? blob : null;
}

/** Inverse of encodeGhostTimes; null on anything malformed. */
export function decodeGhostTimes(blob: string): number[] | null {
  if (blob.length > GHOST_BLOB_MAX) return null;
  const m = /^g([0-9a-z]{1,4}(?:\.[0-9a-z]{1,4})*)$/.exec(blob);
  if (!m) return null;
  const parts = m[1].split(".");
  if (parts.length > GHOST_MAX_EVENTS) return null;
  const times: number[] = [];
  let tenths = 0;
  for (const p of parts) {
    tenths += Number.parseInt(p, 36);
    if (!Number.isFinite(tenths) || tenths > GHOST_MAX_TENTHS) return null;
    times.push(tenths * 100);
  }
  return times;
}

export function encodeChallenge(payload: ChallengePayload): string {
  const base = `${payload.score}-${payload.timeMs}`;
  const times = payload.ghostTimesMs;
  if (times === undefined || times.length !== payload.score) return base;
  const blob = encodeGhostTimes(times);
  return blob === null ? base : `${base}-${blob}`;
}

export function decodeChallenge(raw: string | null): ChallengePayload | null {
  if (!raw) return null;
  // Score and time are required and validated exactly as the v1 codec did;
  // everything past the second "-" is the optional ghost, dropped on any doubt.
  const m = /^(\d{1,3})-(\d{1,8})(?:-(.*))?$/.exec(raw);
  if (!m) return null;
  const score = Number.parseInt(m[1], 10);
  const timeMs = Number.parseInt(m[2], 10);
  if (!Number.isFinite(score) || !Number.isFinite(timeMs)) return null;
  const payload: ChallengePayload = { score, timeMs };
  if (m[3] !== undefined) {
    const times = decodeGhostTimes(m[3]);
    // One time per point scored, or the ghost makes no sense - degrade.
    if (times !== null && times.length === score) payload.ghostTimesMs = times;
  }
  return payload;
}

/**
 * Uniform random sample of n items (Fisher-Yates on a copy). Drives the
 * random-subset quizzes; each run draws fresh, which is the replay hook.
 */
export function sampleSubset<T>(items: readonly T[], n: number): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.min(Math.max(0, n), arr.length));
}

/**
 * ISO-8601 week key (isoYear * 100 + weekNumber, e.g. 202636). Increments by
 * one each Monday, which makes it the natural clock for the weekly featured
 * quiz: pool[key % pool.length] rotates through everything before repeating.
 */
export function isoWeekKey(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const isoYear = d.getUTCFullYear();
  const yearStart = new Date(Date.UTC(isoYear, 0, 1));
  const week = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return isoYear * 100 + week;
}

/** 4:00-style clock text, used by the timer and the results screen. */
export function formatClock(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  const m = Math.floor(s / 60);
  const rest = s % 60;
  return `${m}:${rest.toString().padStart(2, "0")}`;
}

/** "1:23.4" for completion times, where the decisecond matters to speedrunners. */
export function formatTimeMs(ms: number): string {
  const totalSeconds = ms / 1000;
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds - m * 60;
  const sText = s < 10 ? `0${s.toFixed(1)}` : s.toFixed(1);
  return `${m}:${sText}`;
}
