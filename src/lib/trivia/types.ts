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
  /**
   * Grouping label for datasets with no map (continent for countries). The
   * play screen shows a found-count column per group while you type.
   */
  group?: string;
  /**
   * Optional per-answer hint (the element symbol for the periodic quiz).
   * When any answer in a run has one, the play screen offers a hint toggle.
   */
  hint?: string;
}

export type TriviaDatasetId =
  | "us-states"
  | "canada"
  | "countries"
  | "planets"
  /** The first 20 elements, hydrogen through calcium. */
  | "elements"
  /** All 118 elements. */
  | "elements-all";

/**
 * Which picture a quiz plays against. One discriminator rather than a boolean
 * plus a dataset lookup, so the play screen never has to guess: a quiz that
 * says "world-map" gets the world map even though its dataset also feeds the
 * Europe frame and the letter pages.
 *
 * "europe-map" is the same world geometry in a European viewBox, not a second
 * dataset - see WorldMap's EUROPE_VIEW.
 */
export type TriviaVisual =
  | "us-map"
  | "canada-map"
  | "world-map"
  | "europe-map"
  | "periodic-table"
  /** No picture: the answer chips carry the run on their own. */
  | "none";

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
    /**
     * Each run plays against this many answers, sampled fresh from the
     * dataset. With a map, the sampled regions are highlighted as targets.
     */
    randomSubset?: number;
  };
  /**
   * Restrict the dataset to answers whose display name starts with this
   * letter (uppercase). Drives the states/countries-that-start-with pages.
   */
  filterLetter?: string;
  /** Restrict the countries dataset to one continent ("Europe"). */
  filterContinent?: string;
  /**
   * Small print under the rules on the ready screen - inclusion rules,
   * "Pluto does not count", that sort of thing.
   */
  caveat?: string;
  /**
   * What renders beside the answers while playing: a fillable map, the
   * periodic table, or nothing. Replaces the old showMap boolean, which could
   * only say yes or no and left the play screen inferring which map from the
   * dataset - a guess that gets the Europe frame and the country letter pages
   * wrong.
   */
  visual: TriviaVisual;
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

/**
 * One answer landing during a timed run: which answer fired and when, in ms
 * elapsed from the start of the run (time paused in a hidden tab excluded,
 * matching how timeUsedMs is measured).
 */
export interface GhostEvent {
  id: string;
  t: number;
}

/**
 * A full run recording - the player's ghost. Stored per slug in localStorage
 * next to the bests; only the best run's recording is kept (higher score
 * wins, faster time breaks ties). Replayed as a Kahoot-style ghost opponent
 * on later runs, and optionally carried inside challenge links.
 */
export interface GhostRecording {
  score: number;
  timeMs: number;
  /** Sorted by t ascending. */
  events: GhostEvent[];
}
