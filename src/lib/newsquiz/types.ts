// Types for the weekly news quiz (World + North America).
//
// Deliberately separate from src/lib/driving/types.ts: a news quiz has no
// jurisdiction, no pass mark against a real exam, no PDF-cropped snippet
// images (sources are web articles, not a fixed official handbook), and no
// six-set structure - one flat list of questions, replaced weekly.

export interface NewsQuizQuestion {
  /** Stable within a single week's quiz, e.g. "world-01". Not stable across weeks. */
  id: string;
  question: string;
  /** Exactly four choices, original wording - never copied from another outlet's own quiz. */
  choices: readonly [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  /** Why the right answer is right, 1-3 sentences, in our own words. */
  explanation: string;
  /** Publisher and date, e.g. "Reuters - Sept 4, 2026". */
  sourceLabel: string;
  /** Deep link to the specific article the fact was checked against. */
  sourceUrl: string;
}

export type NewsQuizRegion = "World" | "North America";

export interface NewsQuiz {
  slug: "news-world" | "news-north-america";
  region: NewsQuizRegion;
  title: string;
  seoDescription: string;
  /** ISO date (YYYY-MM-DD) of the Thursday this quiz covers. Shown on-page as the edition date. */
  weekOf: string;
  questions: readonly NewsQuizQuestion[];
}
