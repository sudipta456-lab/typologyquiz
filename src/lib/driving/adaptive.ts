"use client";

import type { DrivingQuestion, DrivingTestSet, Jurisdiction } from "./types";

// Adaptive practice.
//
// Every competitor ships the same thing: static sets you grind in order. The
// differentiator is using what the learner actually got wrong. A missed
// question is worth more than a fresh one, and a weak TOPIC is worth more than
// a single missed item - so we resurface both, weighted, and let the learner
// drill the 20 questions that will actually move their score.
//
// All of it runs on state that lives in this browser. No account, no server.

const MISS_KEY = "tq_driving_misses_v1";

interface MissRecord {
  /** questionId -> how many times missed minus times later corrected. */
  [questionId: string]: number;
}

type MissStore = Record<string, MissRecord>;

function readMisses(): MissStore {
  try {
    const raw = localStorage.getItem(MISS_KEY);
    return raw ? (JSON.parse(raw) as MissStore) : {};
  } catch {
    return {};
  }
}

function writeMisses(store: MissStore): void {
  try {
    localStorage.setItem(MISS_KEY, JSON.stringify(store));
  } catch {
    /* storage full or blocked - adaptive practice degrades, nothing breaks */
  }
}

/**
 * Record an attempt's outcome. Wrong answers add weight; getting the same
 * question right later pays that weight back down, so a question you've
 * genuinely learned stops following you around.
 */
export function recordOutcomes(
  jurisdictionSlug: string,
  wrongIds: string[],
  rightIds: string[]
): void {
  const store = readMisses();
  const rec = (store[jurisdictionSlug] ??= {});

  for (const id of wrongIds) rec[id] = (rec[id] ?? 0) + 2;
  for (const id of rightIds) {
    if (rec[id] === undefined) continue;
    rec[id] -= 1;
    if (rec[id] <= 0) delete rec[id];
  }

  writeMisses(store);
}

export function missCount(jurisdictionSlug: string): number {
  return Object.keys(readMisses()[jurisdictionSlug] ?? {}).length;
}

/** Every question in a jurisdiction, flattened, with its set for attribution. */
function allQuestions(
  jurisdiction: Jurisdiction
): { q: DrivingQuestion; setId: string }[] {
  return jurisdiction.sets.flatMap((s) =>
    s.questions.map((q) => ({ q, setId: s.id }))
  );
}

/**
 * Build a personalised drill set.
 *
 * Priority order:
 *   1. Questions you've actually missed (heaviest weight first).
 *   2. Unseen questions from your weakest topics.
 *   3. Starred commonly-missed questions you haven't met yet.
 *   4. Anything else, to fill.
 *
 * Returns null when there's nothing to work from yet - the caller should tell
 * the learner to finish a set first rather than handing them a random pile.
 */
export function buildWeakSpotSet(
  jurisdiction: Jurisdiction,
  size = 20
): DrivingTestSet | null {
  const misses = readMisses()[jurisdiction.slug] ?? {};
  const missIds = new Set(Object.keys(misses));
  if (missIds.size === 0) return null;

  const pool = allQuestions(jurisdiction);

  // Topics ranked by how much trouble they've caused.
  const topicPain: Record<string, number> = {};
  for (const { q } of pool) {
    if (missIds.has(q.id)) {
      topicPain[q.topic] = (topicPain[q.topic] ?? 0) + (misses[q.id] ?? 1);
    }
  }

  const missed = pool
    .filter(({ q }) => missIds.has(q.id))
    .sort((a, b) => (misses[b.q.id] ?? 0) - (misses[a.q.id] ?? 0));

  const rest = pool.filter(({ q }) => !missIds.has(q.id));

  const scoreOf = (q: DrivingQuestion): number => {
    let score = topicPain[q.topic] ?? 0;
    if (q.commonlyMissed) score += 1.5;
    return score;
  };

  const filler = rest
    .filter(({ q }) => (topicPain[q.topic] ?? 0) > 0 || q.commonlyMissed)
    .sort((a, b) => scoreOf(b.q) - scoreOf(a.q));

  const chosen: DrivingQuestion[] = [];
  const seen = new Set<string>();
  for (const { q } of [...missed, ...filler, ...rest]) {
    if (chosen.length >= size) break;
    if (seen.has(q.id)) continue;
    seen.add(q.id);
    chosen.push(q);
  }

  if (chosen.length === 0) return null;

  return {
    id: "weak-spots",
    setNumber: 0,
    title: "Your weak spots",
    difficulty: "hard",
    description:
      "Built from the questions you've actually missed, plus the topics they came from. This changes every time you practise.",
    questions: chosen,
  };
}

export interface Readiness {
  /** Best honest estimate of a real-test score, as a percent. */
  estimate: number;
  /** Percent needed to pass this jurisdiction's real test. */
  required: number;
  ready: boolean;
  /** How much to trust the estimate. */
  confidence: "low" | "medium" | "high";
  message: string;
}

/**
 * Honest readiness estimate.
 *
 * Deliberately conservative: it uses RECENT attempts rather than best-ever, so
 * a lucky run doesn't tell someone they're ready when they aren't. Telling a
 * learner they'll pass and then watching them fail is the worst outcome this
 * product can produce, so the copy stays hedged until the evidence is real.
 */
export function estimateReadiness(
  jurisdiction: Jurisdiction,
  recentPercents: number[]
): Readiness {
  const fmt = jurisdiction.officialTest;
  const required = Math.round((fmt.passCount / fmt.questionCount) * 100);

  if (recentPercents.length === 0) {
    return {
      estimate: 0,
      required,
      ready: false,
      confidence: "low",
      message: "Finish a set and we'll start tracking how ready you are.",
    };
  }

  const recent = recentPercents.slice(-5);
  const mean = recent.reduce((a, b) => a + b, 0) / recent.length;
  // Lean on the worst recent run, not the best - the real test only happens once.
  const worst = Math.min(...recent);
  const estimate = Math.round(mean * 0.7 + worst * 0.3);

  const confidence: Readiness["confidence"] =
    recent.length >= 4 ? "high" : recent.length >= 2 ? "medium" : "low";

  const margin = estimate - required;
  let message: string;
  if (margin >= 8 && confidence === "high") {
    message = "You're consistently clearing the real pass mark. Good place to book it.";
  } else if (margin >= 0) {
    message =
      "You're around the pass mark - close, but not comfortable yet. A few more sets to build margin.";
  } else if (margin >= -10) {
    message = "Not far off. Drill your weak spots and this moves quickly.";
  } else {
    message = "Worth more practice before booking. Start with your weak spots.";
  }

  return { estimate, required, ready: margin >= 8 && confidence !== "low", confidence, message };
}

export function clearMisses(jurisdictionSlug?: string): void {
  if (!jurisdictionSlug) {
    try {
      localStorage.removeItem(MISS_KEY);
    } catch {
      /* ignore */
    }
    return;
  }
  const store = readMisses();
  delete store[jurisdictionSlug];
  writeMisses(store);
}
