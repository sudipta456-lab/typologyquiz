// Driving knowledge tests — a different animal from the personality quizzes.
// Those have no right answers; these do. Separate types, separate scorer.
//
// CONTENT POLICY (read before adding questions):
//  - Never reproduce official handbook wording, and never copy live exam items.
//    Questions are original, written to test the same RULE in the same STYLE.
//  - Explanations are written in our own words, and every question links out to
//    the official handbook section so the learner reads the authoritative text
//    on the government's own site (always current, always correct).
//  - Facts must be verified against the official handbook for that jurisdiction.
//    A wrong speed limit or BAC figure here makes someone fail a real test.

export type DrivingTopic =
  | "signs"
  | "signals"
  | "rules"
  | "rightOfWay"
  | "speed"
  | "parking"
  | "safety"
  | "impairment"
  | "sharing"
  | "emergencies"
  | "licensing";

export const TOPIC_META: Record<DrivingTopic, { label: string; short: string }> = {
  signs: { label: "Road signs", short: "Signs" },
  signals: { label: "Signals & markings", short: "Signals" },
  rules: { label: "Rules of the road", short: "Rules" },
  rightOfWay: { label: "Right of way", short: "Right of way" },
  speed: { label: "Speed & limits", short: "Speed" },
  parking: { label: "Parking & stopping", short: "Parking" },
  safety: { label: "Safe driving", short: "Safety" },
  impairment: { label: "Alcohol, drugs & fatigue", short: "Impairment" },
  sharing: { label: "Sharing the road", short: "Sharing" },
  emergencies: { label: "Emergencies & collisions", short: "Emergencies" },
  licensing: { label: "Licensing & documents", short: "Licensing" },
};

export type DrivingDifficulty = "starter" | "easy" | "medium" | "hard" | "exam";

export const DIFFICULTY_META: Record<
  DrivingDifficulty,
  { label: string; blurb: string; order: number }
> = {
  starter: { label: "Starter", blurb: "The basics, gently introduced.", order: 1 },
  easy: { label: "Easy", blurb: "Core rules most people get right.", order: 2 },
  medium: { label: "Medium", blurb: "Real exam difficulty.", order: 3 },
  hard: { label: "Hard", blurb: "The ones people actually fail on.", order: 4 },
  exam: { label: "Exam simulation", blurb: "Full length, real rules, no hints.", order: 5 },
};

export interface DrivingQuestion {
  id: string;
  topic: DrivingTopic;
  question: string;
  /** 3-4 plausible options. Wrong answers should mirror real misconceptions. */
  choices: string[];
  correctIndex: number;
  /** Our own explanation of WHY this answer is right - never handbook wording. */
  explanation: string;
  /**
   * The rule IN CONTEXT, in our own words (2-4 sentences): the surrounding rule
   * the question is a slice of, so the learner can handle a differently-worded
   * version on the real test instead of memorising one fact.
   *
   * This is deliberately NOT a quote from the handbook - reproducing official
   * text is a copyright problem, and a pasted snippet goes stale when the
   * handbook is revised. Our summary plus the deep link gives the learner
   * context here and the authoritative wording on the government's own site.
   */
  context?: string;
  /**
   * Why the most tempting wrong answer is wrong. Learners fail on traps, not
   * on the facts they already know.
   */
  trap?: string;
  /** e.g. "Alberta Driver's Guide - Traffic signs" */
  sourceLabel?: string;
  /** Deep link to the official handbook section. */
  sourceUrl?: string;
  /**
   * Starred: learners commonly get this wrong. Surfaced with a warning marker
   * so people slow down on it. Based on which TOPICS trip people up, never on
   * copied questions from anywhere.
   */
  commonlyMissed?: boolean;
  /** Optional inline SVG name for sign-identification items. */
  sign?: string;
}

export interface DrivingTestSet {
  /** Unique within a jurisdiction, e.g. "set-1". */
  id: string;
  setNumber: number;
  title: string;
  difficulty: DrivingDifficulty;
  description: string;
  questions: DrivingQuestion[];
}

/** How the real exam is scored, so our results screen can mirror it honestly. */
export interface OfficialTestFormat {
  /** Questions on the real test. */
  questionCount: number;
  /** Correct answers needed. */
  passCount: number;
  /** Human-readable pass mark, e.g. "25 of 30 (83%)". */
  passLabel: string;
  /** Minutes allowed, when the jurisdiction sets one. */
  timeLimitMinutes?: number;
  /**
   * Some jurisdictions score sections independently (Ontario: signs and rules
   * are separate 20-question halves, and you must clear 16 on EACH).
   */
  sectionedBy?: { topics: DrivingTopic[]; label: string; passCount: number }[];
  /** Anything else worth telling the learner up front. */
  notes?: string[];
}

export interface Jurisdiction {
  /** URL slug, e.g. "alberta". */
  slug: string;
  name: string;
  /** Postal/state abbreviation for compact display. */
  code: string;
  country: "CA" | "US";
  countryLabel: string;
  /** e.g. "Class 7 Learner's Licence". */
  licenceName: string;
  /** One-line orientation for the jurisdiction page. */
  intro: string;
  officialTest: OfficialTestFormat;
  handbookName: string;
  handbookUrl: string;
  /** Where to book / official licensing page. */
  officialInfoUrl?: string;
  /** Rules that catch people out in THIS jurisdiction specifically. */
  localGotchas?: string[];
  sets: DrivingTestSet[];
}

export interface DrivingAnswerMap {
  [questionId: string]: number;
}

export interface DrivingResult {
  jurisdictionSlug: string;
  setId: string;
  correct: number;
  total: number;
  percent: number;
  passed: boolean;
  /** Per-topic breakdown so we can tell them what to restudy. */
  byTopic: Record<string, { correct: number; total: number }>;
  /** Present when the jurisdiction scores sections independently. */
  sections?: { label: string; correct: number; total: number; passed: boolean }[];
  wrongIds: string[];
  completedAt: number;
}
