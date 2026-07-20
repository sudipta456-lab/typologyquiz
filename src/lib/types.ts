// Core Types for TypologyQuiz

export type TestCategory = "personality" | "values" | "thinking" | "perception" | "character";

export type QuestionType = "likert" | "numeric";

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  axis: string;
  direction: 1 | -1;
  weight?: number;
  correctAnswer?: number;
}

export type ScoreMode = "type" | "spectrum" | "scale";

/** Copy shown for a picked type, a spectrum band, or the balanced/mixed fallback. */
export interface TypeMeta {
  label: string;
  description: string;
}

/** A band on a single-axis spectrum, matched by score <= max (ascending). */
export interface SpectrumBand {
  max: number;
  label: string;
  description: string;
}

export interface TestDefinition {
  slug: string;
  title: string;
  category: TestCategory;
  description: string;
  whatYoullLearn: string;
  timeMinutes: number;
  itemCount: number;
  license: string;
  sourceUrl?: string;
  questions: Question[];
  axes: AxisDef[];
  resultType: "compass" | "radar" | "dial" | "spectrum" | "percentile";
  funFacts: string[];
  disclaimer: string;
  norms?: Record<string, { mean: number; sd: number }>;
  /** New (2026) quizzes render a NEW badge. */
  isNew?: boolean;
  /**
   * Data-driven scoring. When set, registry.scoreTest routes to the generic
   * scorer instead of a bespoke switch case:
   *  - "type": ipsative pick-top across axes, with flat-profile detection.
   *  - "spectrum": single primary axis mapped to a band label.
   *  - "scale": per-axis 0-100 profile (+ percentiles from norms if present).
   */
  scoreMode?: ScoreMode;
  /** For scoreMode "type": label + description per axis key. */
  typeMeta?: Record<string, TypeMeta>;
  /** For scoreMode "type": shown when no axis clearly leads (straight-line / genuinely mixed). */
  balanced?: TypeMeta;
  /** For scoreMode "spectrum": bands for test.axes[0], matched by score <= max ascending. */
  spectrumBands?: SpectrumBand[];
}

export interface AxisDef {
  key: string;
  label: string;
  compassAxis?: "x" | "y";
  lowLabel: string;
  highLabel: string;
  description: string;
}

export interface TestResult {
  testSlug: string;
  scores: Record<string, number>;
  percentiles?: Record<string, number>;
  correctCount?: number;
  totalQuestions?: number;
  completedAt: number;
}

export interface TestExtras {
  ideology?: { label: string; description: string };
  category?: { label: string; description: string };
}

export interface AnswerMap {
  [questionId: string]: number;
}

export const CATEGORY_META: Record<TestCategory, { label: string; emoji: string; color: string; hex: string }> = {
  personality: { label: "Personality", emoji: "PERS", color: "ink", hex: "#3d6fad" },
  values: { label: "Values & Politics", emoji: "VAL", color: "ink", hex: "#2a8f7a" },
  thinking: { label: "Thinking & Cognition", emoji: "THNK", color: "ink", hex: "#8a6d3b" },
  perception: { label: "Perception", emoji: "PERC", color: "ink", hex: "#b85a72" },
  character: { label: "Character", emoji: "CHAR", color: "ink", hex: "#3d7a5a" },
};