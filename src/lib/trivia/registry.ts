// The trivia registry - one entry per quiz page, mirroring the driving
// pattern: static routes, sitemap entries and the hub all derive from here.

import type { TriviaAnswer, TriviaDatasetId, TriviaQuiz } from "./types";
import { US_CAPITAL_ANSWERS, US_STATE_ANSWERS, US_STATE_NAMES } from "./data/us-states";
import {
  CANADA_CAPITAL_ANSWERS,
  CANADA_REGION_ANSWERS,
  CANADA_REGION_NAMES,
} from "./data/canada";

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

export const TRIVIA_QUIZZES: readonly TriviaQuiz[] = [
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
    showMap: true,
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
    showMap: true,
    related: ["us-states", "us-states-sudden-death", "canada-capitals"],
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
    showMap: true,
    related: ["us-states", "us-states-sudden-death", "us-state-capitals"],
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
    showMap: true,
    related: ["us-states", "us-states-1-minute", "canada-provinces-sudden-death"],
    percentileAnchors: HARD_CURVE,
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
    showMap: true,
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
    showMap: true,
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
    showMap: true,
    related: ["canada-provinces", "canada-capitals", "us-states-sudden-death"],
    percentileAnchors: HARD_CURVE,
  },
];

export function getTriviaQuiz(slug: string): TriviaQuiz | undefined {
  return TRIVIA_QUIZZES.find((q) => q.slug === slug);
}

/** The answer set a quiz plays against. */
export function getAnswers(quiz: TriviaQuiz): readonly TriviaAnswer[] {
  if (quiz.dataset === "us-states") {
    return quiz.target === "capital" ? US_CAPITAL_ANSWERS : US_STATE_ANSWERS;
  }
  return quiz.target === "capital" ? CANADA_CAPITAL_ANSWERS : CANADA_REGION_ANSWERS;
}

/** id -> region display name for a dataset (map labels, choice prompts). */
export function getRegionNames(dataset: TriviaDatasetId): Readonly<Record<string, string>> {
  return dataset === "us-states" ? US_STATE_NAMES : CANADA_REGION_NAMES;
}

/** Hub grouping. */
export const TRIVIA_GROUPS: readonly { label: string; slugs: readonly string[] }[] = [
  {
    label: "United States",
    slugs: ["us-states", "us-state-capitals", "us-states-1-minute", "us-states-sudden-death"],
  },
  {
    label: "Canada",
    slugs: ["canada-provinces", "canada-capitals", "canada-provinces-sudden-death"],
  },
];
