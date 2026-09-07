// The news-quiz registry - two hand-authored editions (World, North America),
// mirroring how the trivia and driving registries give the hub, the static
// routes and the sitemap one shared source of truth. Unlike those registries
// this one is not generated: each edition is a single file replaced whole,
// weekly, by the content pipeline (see world.ts / northamerica.ts).

import { NORTH_AMERICA_NEWS_QUIZ } from "./northamerica";
import { WORLD_NEWS_QUIZ } from "./world";
import type { NewsQuiz } from "./types";

export const NEWS_QUIZZES: readonly NewsQuiz[] = [WORLD_NEWS_QUIZ, NORTH_AMERICA_NEWS_QUIZ];

export function getNewsQuiz(slug: NewsQuiz["slug"]): NewsQuiz {
  const quiz = NEWS_QUIZZES.find((q) => q.slug === slug);
  if (!quiz) throw new Error(`news quiz registry: missing slug "${slug}"`);
  return quiz;
}

/** The other regional edition - what the "switch region" link on the score screen points to. */
export function getOtherNewsQuiz(slug: NewsQuiz["slug"]): NewsQuiz {
  const other = NEWS_QUIZZES.find((q) => q.slug !== slug);
  if (!other) throw new Error(`news quiz registry: no other edition besides "${slug}"`);
  return other;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

/**
 * "2026-09-10" -> "Week of September 10, 2026". Parsed as plain digits
 * (never `new Date(iso)`) so a reader west of UTC doesn't see the date roll
 * back a day - the same trap `monthYear` in the driving jurisdiction page
 * dodges.
 */
export function formatWeekOf(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return `Week of ${iso}`;
  const [, year, month, day] = m;
  const monthName = MONTH_NAMES[Number(month) - 1] ?? month;
  return `Week of ${monthName} ${Number(day)}, ${year}`;
}

// Dev-time registry integrity: unique slugs, every edition has questions and
// every question is shaped right. Same fail-at-the-desk philosophy as the
// trivia registry's own check.
if (process.env.NODE_ENV !== "production") {
  const slugs = new Set<string>();
  for (const q of NEWS_QUIZZES) {
    if (slugs.has(q.slug)) throw new Error(`news quiz registry: duplicate slug "${q.slug}"`);
    slugs.add(q.slug);
    if (q.questions.length === 0) throw new Error(`news quiz registry: "${q.slug}" has no questions`);
  }
}
