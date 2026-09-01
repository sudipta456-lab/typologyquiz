/**
 * Builds today's three minis from the UTC date. Pure and deterministic:
 * same dateKey in = same puzzles out, for everyone, in any timezone.
 */

import { dayNumberForKey, mulberry32, pickIndex, pickN, seededShuffle } from "./seed";
import { ANAGRAM_EASY, ANAGRAM_MEDIUM, ANAGRAM_HARD, type AnagramEntry } from "./data/anagrams";
import { QUICK_PICK_ROUNDS, type QuickPickRound } from "./data/quick-pick";
import { THIS_OR_THAT_PAIRS } from "./data/this-or-that";

export type AnagramRound = {
  entry: AnagramEntry;
  /** Uppercase scrambled letters, guaranteed different from the answer. */
  scrambled: string;
  tier: "easy" | "medium" | "hard";
};

export type QuickPickDaily = {
  round: QuickPickRound;
  /** All 12 tiles in display order. */
  tiles: { label: string; correct: boolean }[];
};

export type ThisOrThatQuestion = {
  id: string;
  q: string;
  left: string;
  right: string;
  correctSide: "left" | "right";
  fact: string;
};

export type DailyMinisSet = {
  dateKey: string;
  anagram: AnagramRound[];
  quickPick: QuickPickDaily;
  thisOrThat: ThisOrThatQuestion[];
};

/** Per-mini salts so the three minis roll independently. */
const SALT_ANAGRAM = 0x5eed01;
const SALT_QUICKPICK = 0x5eed02;
const SALT_THISORTHAT = 0x5eed03;

function scramble(word: string, rand: () => number): string {
  const letters = word.toUpperCase().split("");
  for (let attempt = 0; attempt < 12; attempt++) {
    const shuffled = seededShuffle(letters, rand);
    const joined = shuffled.join("");
    if (joined !== word.toUpperCase()) return joined;
  }
  // Pathological case (e.g. all letters identical): rotate by one.
  return (word.slice(1) + word[0]).toUpperCase();
}

export function getDailyMinis(dateKey: string): DailyMinisSet {
  const day = dayNumberForKey(dateKey);

  // Anagram: one word per tier, letters scrambled deterministically.
  const aRand = mulberry32((day ^ SALT_ANAGRAM) >>> 0);
  const tiers: [AnagramEntry[], "easy" | "medium" | "hard"][] = [
    [ANAGRAM_EASY, "easy"],
    [ANAGRAM_MEDIUM, "medium"],
    [ANAGRAM_HARD, "hard"],
  ];
  const anagram: AnagramRound[] = tiers.map(([pool, tier]) => {
    const entry = pool[pickIndex(pool.length, aRand)];
    return { entry, scrambled: scramble(entry.word, aRand), tier };
  });

  // Quick pick: one round, tiles shuffled.
  const qRand = mulberry32((day ^ SALT_QUICKPICK) >>> 0);
  const round = QUICK_PICK_ROUNDS[pickIndex(QUICK_PICK_ROUNDS.length, qRand)];
  const tiles = seededShuffle(
    [
      ...round.correct.map((label) => ({ label, correct: true })),
      ...round.decoys.map((label) => ({ label, correct: false })),
    ],
    qRand,
  );

  // This or that: 8 pairs, presentation side swapped deterministically.
  const tRand = mulberry32((day ^ SALT_THISORTHAT) >>> 0);
  const picked = pickN(THIS_OR_THAT_PAIRS, 8, tRand);
  const thisOrThat: ThisOrThatQuestion[] = picked.map((p) => {
    const swap = tRand() < 0.5;
    return {
      id: p.id,
      q: p.q,
      left: swap ? p.b : p.a,
      right: swap ? p.a : p.b,
      correctSide: swap ? "right" : "left",
      fact: p.fact,
    };
  });

  return { dateKey, anagram, quickPick: { round, tiles }, thisOrThat };
}

/** Normalized answer comparison for the anagram input. */
export function answersMatch(input: string, answer: string): boolean {
  return input.trim().toLowerCase().replace(/\s+/g, "") === answer.trim().toLowerCase();
}
