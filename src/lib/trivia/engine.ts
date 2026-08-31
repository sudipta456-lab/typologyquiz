// The type-in matcher and the small pieces of state that outlive a run.
//
// The matcher is the JetPunk/Sporcle mechanic: answers register the moment the
// input buffer matches an accepted spelling - no Enter key. "Kansas" fires the
// instant the sixth letter lands; "Arkansas" never passes through "kansas"
// because matching starts from the first character, so the two never collide.

import type { TriviaAnswer, TriviaBest, TriviaQuiz } from "./types";

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
// ---------------------------------------------------------------------------

export interface ChallengePayload {
  score: number;
  timeMs: number;
}

export function encodeChallenge(payload: ChallengePayload): string {
  return `${payload.score}-${payload.timeMs}`;
}

export function decodeChallenge(raw: string | null): ChallengePayload | null {
  if (!raw) return null;
  const m = /^(\d{1,3})-(\d{1,8})$/.exec(raw);
  if (!m) return null;
  const score = Number.parseInt(m[1], 10);
  const timeMs = Number.parseInt(m[2], 10);
  if (!Number.isFinite(score) || !Number.isFinite(timeMs)) return null;
  return { score, timeMs };
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
