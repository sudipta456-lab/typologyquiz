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