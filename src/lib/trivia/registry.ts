// The trivia registry - one entry per quiz page, mirroring the driving
// pattern: static routes, sitemap entries and the hub all derive from here.
// The letter pages (states/countries that start with X) are generated into
// the same array, so they get routes, metadata and sitemap rows for free.

import { isoWeekKey } from "./engine";
import type { TriviaAnswer, TriviaDatasetId, TriviaQuiz } from "./types";
import {
  US_CAPITAL_ANSWERS,
  US_CAPITAL_NAMES,
  US_STATE_ANSWERS,
  US_STATE_NAMES,
} from "./data/us-states";
import {
  CANADA_CAPITAL_ANSWERS,
  CANADA_REGION_ANSWERS,
  CANADA_REGION_NAMES,
} from "./data/canada";
import { COUNTRY_ANSWERS } from "./data/countries";
import { PLANET_ANSWERS } from "./data/planets";
import { ALL_ELEMENT_ANSWERS, ELEMENT_ANSWERS } from "./data/elements";

// Percentile anchors are ESTIMATES, seeded from the one public number that
// exists for this genre (JetPunk's US states type-in averages 74% over 17.5M
// takes) and shaped so the median sits near that average. Harder variants
// (sprint, sudden death) shift the curve left. Every surface that shows one
// says "estimated".

const TYPEIN_CURVE: readonly (readonly [number, number])[] = [
  [0, 0],
  [0.2, 10],
  [0.4, 24],
  [0.6, 40],
  [0.74, 55],
  [0.85, 70],
  [0.94, 84],
  [1, 95],
];

const HARD_CURVE: readonly (readonly [number, number])[] = [
  [0, 0],
  [0.2, 18],
  [0.4, 38],
  [0.6, 58],
  [0.8, 76],
  [0.9, 86],
  [1, 96],
];

const CAPITALS_CURVE: readonly (readonly [number, number])[] = [
  [0, 0],
  [0.2, 22],
  [0.4, 44],
  [0.6, 64],
  [0.8, 80],
  [0.9, 88],
  [1, 96],
];

// 30-second sprints: naming a third of the set is already a strong run, so
// the curve front-loads credit.
const SPRINT_CURVE: readonly (readonly [number, number])[] = [
  [0, 0],
  [0.1, 25],
  [0.2, 45],
  [0.3, 62],
  [0.4, 75],
  [0.5, 84],
  [0.7, 93],
  [1, 99],
];

// All 196 countries: the typical player lands somewhere in the 40-60 range
// (about a quarter of the world), so a quarter found sits near the median.
const WORLD_CURVE: readonly (readonly [number, number])[] = [
  [0, 0],
  [0.1, 22],
  [0.2, 42],
  [0.3, 58],
  [0.45, 72],
  [0.6, 83],
  [0.75, 91],
  [0.9, 96],
  [1, 99],
];

// Eight planets: most people who try finish, so full marks beats a modest
// share and partial runs earn little.
const PLANETS_CURVE: readonly (readonly [number, number])[] = [
  [0, 0],
  [0.25, 4],
  [0.5, 12],
  [0.75, 28],
  [0.875, 45],
  [1, 70],
];

// All 118 elements. Harder than the world quiz in one specific way: the back
// half of the table is not general knowledge, so nearly everyone stalls
// somewhere in the transition metals. Twenty elements is already a real
// showing, and clearing the f-block at all puts a player near the top.
const ELEMENTS_CURVE: readonly (readonly [number, number])[] = [
  [0, 0],
  [0.09, 24],
  [0.17, 44],
  [0.26, 60],
  [0.4, 74],
  [0.55, 85],
  [0.7, 92],
  [0.85, 97],
  [1, 99],
];

const HAND_AUTHORED: readonly TriviaQuiz[] = [
  {
    slug: "us-states",
    title: "Name All 50 US States",
    seoDescription:
      "Can you name all 50 US states in 4 minutes? Type them and watch the map fill in - no signup, answers register as you type.",
    hook: "The classic. Four minutes, fifty states, and a map that fills as you type.",
    dataset: "us-states",
    mode: "typein",
    target: "name",
    timerSeconds: 240,
    visual: "us-map",
    related: ["us-state-capitals", "us-states-1-minute", "us-states-sudden-death", "canada-provinces"],
    percentileAnchors: TYPEIN_CURVE,
  },
  {
    slug: "us-state-capitals",
    title: "Name All 50 US State Capitals",
    seoDescription:
      "Can you name all 50 US state capitals in 5 minutes? Type each capital city and its state lights up on the map.",
    hook: "Everyone forgets Frankfort. Five minutes to prove you won't.",
    dataset: "us-states",
    mode: "typein",
    target: "capital",
    timerSeconds: 300,
    visual: "us-map",
    related: ["us-states", "us-capitals-sudden-death", "canada-capitals"],
    percentileAnchors: CAPITALS_CURVE,
  },
  {
    slug: "us-states-1-minute",
    title: "50 US States in One Minute",
    seoDescription:
      "How many US states can you name in 60 seconds? The one-minute sprint version - most people run out of time before they run out of states.",
    hook: "Same fifty states, sixty seconds. Pure typing speed and recall.",
    dataset: "us-states",
    mode: "typein",
    target: "name",
    timerSeconds: 60,
    visual: "us-map",
    related: ["us-states", "us-states-by-first-letters", "us-states-sudden-death"],
    percentileAnchors: HARD_CURVE,
  },
  {
    slug: "us-states-sudden-death",
    title: "US States Map Quiz: Sudden Death",
    seoDescription:
      "Can you find every US state on a map with only 3 lives? Click the named state - three wrong clicks and the run is over.",
    hook: "We name the state, you click it. Three lives. The Midwest is where runs go to die.",
    dataset: "us-states",
    mode: "choice",
    target: "name",
    timerSeconds: 300,
    modifiers: { lives: 3 },
    visual: "us-map",
    related: ["us-states", "us-capitals-sudden-death", "canada-provinces-sudden-death"],
    percentileAnchors: HARD_CURVE,
  },
  {
    slug: "us-capitals-sudden-death",
    title: "US State Capitals Map Quiz: Sudden Death",
    seoDescription:
      "We name a state capital, you click its state on the map - with only 3 lives. Knowing Springfield is Illinois is one thing; finding Illinois is another.",
    hook: "We name the capital, you click its state. Three lives, fifty capitals, zero mercy.",
    dataset: "us-states",
    mode: "choice",
    target: "capital",
    timerSeconds: 300,
    modifiers: { lives: 3 },
    visual: "us-map",
    related: ["us-state-capitals", "us-states-sudden-death", "canada-capitals"],
    percentileAnchors: HARD_CURVE,
  },
  {
    slug: "us-states-random-20",
    title: "Name the 20 Highlighted US States",
    seoDescription:
      "20 random US states light up on the map - can you name them all in 2 minutes? A fresh draw every run, so no two games match.",
    hook: "Twenty states light up, you name them. New draw every run, endlessly replayable.",
    dataset: "us-states",
    mode: "typein",
    target: "name",
    timerSeconds: 120,
    modifiers: { randomSubset: 20 },
    visual: "us-map",
    related: ["us-states", "us-states-sudden-death", "canada-random-8"],
    percentileAnchors: HARD_CURVE,
    caveat:
      "The 20 highlighted states are your targets - the rest of the map sits this one out. Every run draws a new 20.",
  },
  {
    slug: "us-states-by-first-letters",
    title: "US States by First Letter: 30 Second Sprint",
    seoDescription:
      "30 seconds, as many US states as you can type. Race the alphabet - any state starting with A, then B, then C - or just let them fly.",
    hook: "Thirty seconds. Work the alphabet: an A state, a B state... or just type fast.",
    dataset: "us-states",
    mode: "typein",
    target: "name",
    timerSeconds: 30,
    visual: "us-map",
    related: ["us-states-1-minute", "us-states", "planets"],
    percentileAnchors: SPRINT_CURVE,
    caveat:
      "Alphabet order is a strategy, not a rule - every state counts whenever you type it. There are no states starting with B, E, J, Q, X, Y or Z, so skip those.",
  },
  {
    slug: "canada-provinces",
    title: "Canadian Provinces and Territories Quiz",
    seoDescription:
      "Can you name all 13 Canadian provinces and territories in 3 minutes? Type them and the map fills in - yes, PEI counts.",
    hook: "Thirteen answers. Most people stall at eleven and stare at the Arctic.",
    dataset: "canada",
    mode: "typein",
    target: "name",
    timerSeconds: 180,
    visual: "canada-map",
    related: ["canada-capitals", "canada-provinces-sudden-death", "us-states"],
    percentileAnchors: TYPEIN_CURVE,
  },
  {
    slug: "canada-capitals",
    title: "Canadian Provincial Capitals Quiz",
    seoDescription:
      "Can you name all 13 capitals of Canada's provinces and territories? Toronto is easy. Iqaluit is why you're here.",
    hook: "Victoria, not Vancouver. Four minutes to get all thirteen.",
    dataset: "canada",
    mode: "typein",
    target: "capital",
    timerSeconds: 240,
    visual: "canada-map",
    related: ["canada-provinces", "us-state-capitals", "canada-provinces-sudden-death"],
    percentileAnchors: CAPITALS_CURVE,
  },
  {
    slug: "canada-provinces-sudden-death",
    title: "Canada Map Quiz: Sudden Death",
    seoDescription:
      "Can you find every Canadian province and territory on a map with 3 lives? Click the named region - three misses ends it.",
    hook: "Thirteen regions, three lives. The territories all border each other. Good luck.",
    dataset: "canada",
    mode: "choice",
    target: "name",
    timerSeconds: 180,
    modifiers: { lives: 3 },
    visual: "canada-map",
    related: ["canada-provinces", "canada-random-8", "us-states-sudden-death"],
    percentileAnchors: HARD_CURVE,
  },
  {
    slug: "canada-random-8",
    title: "Name the 8 Highlighted Canadian Regions",
    seoDescription:
      "8 random Canadian provinces and territories light up on the map - name them in a minute. A new draw every run.",
    hook: "Eight of the thirteen light up, you name them. Fresh draw every run.",
    dataset: "canada",
    mode: "typein",
    target: "name",
    timerSeconds: 60,
    modifiers: { randomSubset: 8 },
    visual: "canada-map",
    related: ["canada-provinces", "us-states-random-20", "canada-capitals"],
    percentileAnchors: HARD_CURVE,
    caveat:
      "The 8 highlighted regions are your targets - the other five sit this run out. Every run draws a new 8.",
  },
  {
    slug: "countries-of-the-world",
    title: "Name All the Countries of the World",
    seoDescription:
      "Can you name all 196 countries of the world in 15 minutes? Type them and watch the continent counters climb. Most people find about a quarter.",
    hook: "All 196. Fifteen minutes. Around Oceania, everyone discovers how big the world is.",
    dataset: "countries",
    mode: "typein",
    target: "name",
    timerSeconds: 900,
    visual: "world-map",
    related: ["countries-of-europe", "us-states", "canada-provinces"],
    percentileAnchors: WORLD_CURVE,
    caveat:
      "Counting rule: the 193 UN members plus Vatican City, Palestine and Taiwan = 196. Short forms count (USA, UK, UAE, DRC, Ivory Coast, Burma). The two Congos need disambiguating - plain Congo matches neither.",
  },
  {
    slug: "countries-of-europe",
    title: "Name All the Countries of Europe",
    seoDescription:
      "Can you name all 44 countries of Europe in 5 minutes? The big ones come fast - then you hit the microstates.",
    hook: "Forty-four countries. France takes a second. Then there's Liechtenstein.",
    dataset: "countries",
    mode: "typein",
    target: "name",
    timerSeconds: 300,
    filterContinent: "Europe",
    visual: "europe-map",
    related: ["countries-of-the-world", "us-states", "canada-provinces"],
    percentileAnchors: CAPITALS_CURVE,
    caveat:
      "Counting rule: 43 UN members plus Vatican City = 44. Russia counts as Europe; Turkey, Cyprus and the Caucasus count as Asia here, so they are not answers.",
  },
  {
    slug: "planets",
    title: "Name the Planets in 30 Seconds",
    seoDescription:
      "Can you name all 8 planets of the solar system in 30 seconds? Faster than it sounds, until your fingers meet Uranus and Neptune.",
    hook: "Eight planets, thirty seconds. The warm-up quiz that still catches people.",
    dataset: "planets",
    mode: "typein",
    target: "name",
    timerSeconds: 30,
    visual: "none",
    related: ["periodic-table-first-20", "us-states-by-first-letters", "us-states"],
    percentileAnchors: PLANETS_CURVE,
    caveat: "Pluto has been a dwarf planet since 2006. It will not count, and we are sorry.",
  },
  {
    slug: "periodic-table-first-20",
    title: "First 20 Elements of the Periodic Table",
    seoDescription:
      "Can you name the first 20 elements, hydrogen through calcium, in 3 minutes? Toggle the symbols on if you need a nudge.",
    hook: "Hydrogen to calcium. Chemistry class is a long time ago - the symbols are one toggle away.",
    dataset: "elements",
    mode: "typein",
    target: "name",
    timerSeconds: 180,
    visual: "periodic-table",
    related: ["periodic-table", "planets", "countries-of-europe", "us-state-capitals"],
    percentileAnchors: CAPITALS_CURVE,
    caveat:
      "Both aluminium and aluminum count, and so do sulfur and sulphur. Order does not matter - any of the first 20 scores whenever you type it.",
  },
  {
    slug: "periodic-table",
    title: "Name All 118 Elements",
    seoDescription:
      "Can you name all 118 elements of the periodic table in 12 minutes? Type them and each one takes its own square on the real table.",
    hook: "The whole table, hydrogen to oganesson. Twelve minutes. The transition metals are where it gets quiet.",
    dataset: "elements-all",
    mode: "typein",
    target: "name",
    timerSeconds: 720,
    visual: "periodic-table",
    related: ["periodic-table-first-20", "planets", "countries-of-the-world"],
    percentileAnchors: ELEMENTS_CURVE,
    caveat:
      "IUPAC names, so aluminium and caesium sit where you expect - and the US spellings count too, as do sulfur and sulphur. Order does not matter. Elements 104 to 118 use their permanent names, not the old placeholder ones.",
  },
];

// ---------------------------------------------------------------------------
// Generated letter pages: /trivia/states-that-start-with-m and friends. One
// registry entry per letter that actually has answers, so the [slug] template,
// generateStaticParams and the sitemap all pick them up with zero extra code.
// ---------------------------------------------------------------------------

export interface LetterPage {
  letter: string;
  slug: string;
  count: number;
}

function lettersWithAnswers(answers: readonly TriviaAnswer[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const a of answers) {
    const letter = a.display.charAt(0).toUpperCase();
    counts.set(letter, (counts.get(letter) ?? 0) + 1);
  }
  return new Map([...counts.entries()].sort(([a], [b]) => a.localeCompare(b)));
}

function plural(n: number, word: string): string {
  return n === 1 ? `${n} ${word}` : `${n} ${word}s`;
}

const STATE_LETTER_COUNTS = lettersWithAnswers(US_STATE_ANSWERS);
const COUNTRY_LETTER_COUNTS = lettersWithAnswers(COUNTRY_ANSWERS);

export const STATE_LETTER_PAGES: readonly LetterPage[] = [...STATE_LETTER_COUNTS.entries()].map(
  ([letter, count]) => ({
    letter,
    slug: `states-that-start-with-${letter.toLowerCase()}`,
    count,
  })
);

export const COUNTRY_LETTER_PAGES: readonly LetterPage[] = [...COUNTRY_LETTER_COUNTS.entries()].map(
  ([letter, count]) => ({
    letter,
    slug: `countries-that-start-with-${letter.toLowerCase()}`,
    count,
  })
);

function stateLetterQuiz({ letter, slug, count }: LetterPage): TriviaQuiz {
  const only = count === 1;
  return {
    slug,
    title: `US States That Start With ${letter}`,
    seoDescription: only
      ? `There is exactly one US state that starts with ${letter}. Can you get it in 30 seconds? Type it and the map lights up.`
      : `Can you name all ${count} US states that start with ${letter}? Type them against the clock and watch the map light up.`,
    hook: only
      ? `Just one state starts with ${letter}. You know it. Probably.`
      : `${plural(count, "state")} start with ${letter}. The map keeps score.`,
    dataset: "us-states",
    mode: "typein",
    target: "name",
    timerSeconds: Math.min(120, Math.max(30, count * 15)),
    filterLetter: letter,
    visual: "us-map",
    related: ["us-states", "us-states-by-first-letters", "us-states-1-minute"],
    percentileAnchors: TYPEIN_CURVE,
  };
}

function countryLetterQuiz({ letter, slug, count }: LetterPage): TriviaQuiz {
  const only = count === 1;
  return {
    slug,
    title: `Countries That Start With ${letter}`,
    seoDescription: only
      ? `There is exactly one country that starts with ${letter}. Can you get it before the clock does?`
      : `Can you name all ${count} countries that start with ${letter}? Type them against the clock - short forms and common spellings count.`,
    hook: only
      ? `One single country starts with ${letter}. Name it.`
      : `${count} countries start with ${letter}. Go.`,
    dataset: "countries",
    mode: "typein",
    target: "name",
    timerSeconds: Math.min(240, Math.max(45, count * 10)),
    filterLetter: letter,
    visual: "world-map",
    related: ["countries-of-the-world", "countries-of-europe", "us-states"],
    percentileAnchors: TYPEIN_CURVE,
    caveat:
      "Same counting rule as the world quiz: 193 UN members plus Vatican City, Palestine and Taiwan. A country files under the first letter of its common English name.",
  };
}

export const TRIVIA_QUIZZES: readonly TriviaQuiz[] = [
  ...HAND_AUTHORED,
  ...STATE_LETTER_PAGES.map(stateLetterQuiz),
  ...COUNTRY_LETTER_PAGES.map(countryLetterQuiz),
];

export function getTriviaQuiz(slug: string): TriviaQuiz | undefined {
  return TRIVIA_QUIZZES.find((q) => q.slug === slug);
}

function baseAnswers(quiz: TriviaQuiz): readonly TriviaAnswer[] {
  switch (quiz.dataset) {
    case "us-states":
      return quiz.target === "capital" ? US_CAPITAL_ANSWERS : US_STATE_ANSWERS;
    case "canada":
      return quiz.target === "capital" ? CANADA_CAPITAL_ANSWERS : CANADA_REGION_ANSWERS;
    case "countries":
      return COUNTRY_ANSWERS;
    case "planets":
      return PLANET_ANSWERS;
    case "elements":
      return ELEMENT_ANSWERS;
    case "elements-all":
      return ALL_ELEMENT_ANSWERS;
  }
}

/** The answer set a quiz plays against, after letter/continent filters. */
export function getAnswers(quiz: TriviaQuiz): readonly TriviaAnswer[] {
  let answers = baseAnswers(quiz);
  if (quiz.filterContinent !== undefined) {
    answers = answers.filter((a) => a.group === quiz.filterContinent);
  }
  if (quiz.filterLetter !== undefined) {
    answers = answers.filter((a) => a.display.charAt(0).toUpperCase() === quiz.filterLetter);
  }
  return answers;
}

/**
 * How many answers one run actually plays against: the random-subset size
 * when set, the full (filtered) set otherwise. Hub cards and JSON-LD use this
 * so a 20-of-50 quiz says 20, not 50.
 */
export function getRunSize(quiz: TriviaQuiz): number {
  return quiz.modifiers?.randomSubset ?? getAnswers(quiz).length;
}

/** id -> region display name for a dataset (map labels, choice prompts). */
export function getRegionNames(dataset: TriviaDatasetId): Readonly<Record<string, string>> {
  if (dataset === "us-states") return US_STATE_NAMES;
  if (dataset === "canada") return CANADA_REGION_NAMES;
  return {};
}

/**
 * id -> what the choice-mode prompt shows. For capital-target quizzes that is
 * the capital city (find the state whose capital this is); otherwise the
 * region name itself.
 */
export function getPromptNames(quiz: TriviaQuiz): Readonly<Record<string, string>> {
  if (quiz.mode === "choice" && quiz.target === "capital" && quiz.dataset === "us-states") {
    return US_CAPITAL_NAMES;
  }
  return getRegionNames(quiz.dataset);
}

/** Hub grouping for the card sections; the letter pages render separately. */
export const TRIVIA_GROUPS: readonly { label: string; slugs: readonly string[] }[] = [
  {
    label: "United States",
    slugs: [
      "us-states",
      "us-state-capitals",
      "us-states-1-minute",
      "us-states-sudden-death",
      "us-capitals-sudden-death",
      "us-states-random-20",
      "us-states-by-first-letters",
    ],
  },
  {
    label: "Canada",
    slugs: ["canada-provinces", "canada-capitals", "canada-provinces-sudden-death", "canada-random-8"],
  },
  {
    label: "World",
    slugs: ["countries-of-the-world", "countries-of-europe"],
  },
  {
    label: "Science",
    slugs: ["planets", "periodic-table-first-20", "periodic-table"],
  },
];

// ---------------------------------------------------------------------------
// Weekly featured quiz: a deterministic ISO-week-keyed pick, so every visitor
// sees the same "this week's quiz" and it rotates on its own every Monday.
// Letter pages are excluded - a banner for the one state starting with U
// would be a very quiet week.
// ---------------------------------------------------------------------------

const FEATURED_POOL: readonly TriviaQuiz[] = HAND_AUTHORED;

export function pickWeeklyFeatured(date: Date): TriviaQuiz {
  return FEATURED_POOL[isoWeekKey(date) % FEATURED_POOL.length];
}

// Dev-time registry integrity: slugs unique, related links resolve. Same
// fail-at-the-desk philosophy as assertNoAliasCollisions.
if (process.env.NODE_ENV !== "production") {
  const slugs = new Set<string>();
  for (const q of TRIVIA_QUIZZES) {
    if (slugs.has(q.slug)) throw new Error(`trivia registry: duplicate slug "${q.slug}"`);
    slugs.add(q.slug);
    if (getAnswers(q).length === 0) throw new Error(`trivia registry: "${q.slug}" has no answers`);
    for (const rel of q.related) {
      if (!TRIVIA_QUIZZES.some((o) => o.slug === rel)) {
        throw new Error(`trivia registry: "${q.slug}" relates to missing slug "${rel}"`);
      }
    }
  }
}
