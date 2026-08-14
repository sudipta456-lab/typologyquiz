import type { DrivingQuestion, DrivingTestSet } from "./types";

/**
 * Seeded shuffling for retakes.
 *
 * Retaking a set you've already done teaches position, not rules - people learn
 * "the answer to number 7 is C" and then meet the same rule worded differently
 * on the real test and fail it. So a retake can reorder the questions AND the
 * options inside each question.
 *
 * Everything here is DETERMINISTIC from a single integer seed. That matters for
 * three reasons:
 *   - the seed lives in the URL, so a resumed or reloaded attempt rebuilds the
 *     exact same paper;
 *   - React re-renders must not reshuffle under the learner mid-question;
 *   - the site is a static export, so a `Math.random()` call during render would
 *     produce different markup on the server and the client.
 *
 * Nothing in this file mutates its input. The question banks are module-level
 * constants shared by every page, and reordering one in place would corrupt the
 * set for the rest of the session.
 */

/** mulberry32: tiny, fast, well-distributed 32-bit PRNG. */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function next(): number {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** FNV-1a, so a question id can contribute to its own option seed. */
function hashString(value: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < value.length; i += 1) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

/** Fisher-Yates on a copy. Never touches the array it was handed. */
function shuffled<T>(items: readonly T[], rand: () => number): T[] {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    const tmp = out[i];
    out[i] = out[j];
    out[j] = tmp;
  }
  return out;
}

/**
 * Reorder one question's options and move `correctIndex` with them.
 *
 * The permutation is built over INDEXES rather than over the strings, so the
 * new correct index is simply where the old one ended up. Shuffling the strings
 * and then searching for the correct text would break the moment two options
 * happen to read the same.
 */
export function shuffleQuestionChoices(
  question: DrivingQuestion,
  seed: number
): DrivingQuestion {
  const count = question.choices.length;
  if (count < 2) return question;

  const order = shuffled(
    Array.from({ length: count }, (_, i) => i),
    mulberry32(seed)
  );

  const correctIndex = order.indexOf(question.correctIndex);
  // A correctIndex pointing outside the options is bad data, not a shuffle
  // problem - hand the question back untouched rather than inventing an answer.
  if (correctIndex < 0) return question;

  return {
    ...question,
    choices: order.map((i) => question.choices[i]),
    correctIndex,
  };
}

/**
 * A new set with the questions reordered and every question's options
 * reordered, all derived from `seed`. Ids are unchanged, so scoring, the
 * adaptive miss store and the results page all keep working.
 */
export function shuffleDrivingSet(set: DrivingTestSet, seed: number): DrivingTestSet {
  const base = seed >>> 0;
  const questionOrder = shuffled(set.questions, mulberry32((base ^ hashString(set.id)) >>> 0));

  return {
    ...set,
    questions: questionOrder.map((q) =>
      // Each question gets its own stream, keyed by its id, so a question keeps
      // the same option order no matter where it lands in the paper.
      shuffleQuestionChoices(q, (base + hashString(q.id)) >>> 0)
    ),
  };
}

/** Compact, URL-safe form of a seed. */
export function seedToParam(seed: number): string {
  return (seed >>> 0).toString(36);
}

/**
 * Parse `?shuffle=`. Anything unrecognisable returns null, which means "run the
 * set in its original order" - a mangled link should never produce a broken
 * paper.
 */
export function parseShuffleSeed(raw: string | null | undefined): number | null {
  if (!raw) return null;
  if (!/^[0-9a-z]{1,8}$/i.test(raw)) return null;
  const parsed = Number.parseInt(raw, 36);
  if (!Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed >>> 0;
}

/**
 * A fresh seed for a new attempt.
 *
 * Call this in an EVENT HANDLER only. It reads the clock, so calling it during
 * render would give the prerendered HTML and the hydrating client two different
 * links.
 */
export function newShuffleSeed(): number {
  return ((Date.now() ^ Math.floor(Math.random() * 0xffffff)) >>> 0) || 1;
}
