// Core types for the trivia section (type-in and map-click quizzes).
//
// Deliberately separate from the typology TestDefinition types: a trivia quiz
// has answers and a clock, not axes and scoring modes. The registry pattern
// mirrors src/lib/driving/jurisdictions.ts - one typed registry, static pages
// generated from it.

/** One acceptable answer in a dataset - a state, a province, a capital. */
export interface TriviaAnswer {
  /** Stable id, shared with the map path data (postal code, e.g. "NH", "PE"). */
  id: string;
  /** Canonical display name, shown in the found list and on reveal. */
  display: string;
  /**
   * Accepted spellings, already normalized (lowercase, alphanumerics only).
   * Includes the normalized display name plus abbreviations and common
   * misspellings where they are unambiguous within the dataset.
   */
  aliases: readonly string[];
}

export type TriviaDatasetId = "us-states" | "canada";

/** What the player is asked to produce. */
export type TriviaMode =
  /** Free recall: type answers, no Enter key needed. */
  | "typein"
  /** Locate: a name is shown, click its region on the map. */
  | "choice";

export interface TriviaQuiz {
  slug: string;
  /** On-page H1 and card title, search-query shaped ("Name All 50 US States"). */
  title: string;
  /** Question-form meta description ("Can you name all 50 US states in 4 minutes?"). */
  seoDescription: string;
  /** One-line hook for the hub card. */
  hook: string;
  dataset: TriviaDatasetId;
  mode: TriviaMode;
  /**
   * Which alias set the type-in matcher uses / what the prompt asks for.
   * "name" = the regions themselves; "capital" = their capital cities.
   */
  target: "name" | "capital";
  timerSeconds: number;
  modifiers?: {
    /** One wrong click ends the run (overrides lives). */
    suddenDeath?: boolean;
    /** Wrong clicks allowed before the run ends (choice mode). */
    lives?: number;
  };
  /** Show the fillable map while playing. */
  showMap: boolean;
  /** Rest of the ladder, linked from the results screen. */
  related: readonly string[];
  /**
   * Baked score-to-percentile anchors, [fractionOfAnswersFound, beatsPercent],
   * ascending. Interpolated linearly. These are ESTIMATES seeded from public
   * averages on comparable quizzes (JetPunk's US states type-in averages 74%),
   * and every surface that shows one labels it "estimated".
   */
  percentileAnchors: readonly (readonly [number, number])[];
}

/** How a run ended. */
export type TriviaOutcome = "complete" | "time" | "gaveup" | "lives";

/** Personal best, stored per slug in localStorage. */
export interface TriviaBest {
  bestScore: number;
  /** Fastest full completion, ms. Only set once every answer has been found. */
  bestTimeMs?: number;
}
