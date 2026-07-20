import { TestDefinition, TestResult, AnswerMap } from "../types";
import { eightValues, score8Values, getClosestIdeology } from "./8values";
import { miniIPIP, scoreMiniIPIP } from "./mini-ipip";
import { crt7, scoreCRT7 } from "./crt-7";
import { vviq, scoreVVIQ, getVVIQCategory } from "./vviq";
import { attachmentStyle } from "./attachment-style";
import { riasecLite } from "./riasec-lite";
import { socialBattery, scoreSocialBattery } from "./social-battery";
import { conflictStyle } from "./conflict-style";
import { friendRole } from "./friend-role";
import { classArchetype } from "./class-archetype";
import { textingStyle } from "./texting-style";
import { studyEnergy, scoreStudyEnergy } from "./study-energy";
import { fomoStyle, scoreFomo } from "./fomo-style";
import { nightOwl } from "./night-owl";
import { humorStyle } from "./humor-style";
import { gamingPersonality } from "./gaming-personality";
import { growthMindset } from "./growth-mindset";
import { careLanguage } from "./care-language";
import { empathyType } from "./empathy-type";
import { grit } from "./grit";
import { howBold } from "./how-bold";
import { socialPersona } from "./social-persona";
import { procrastinationType } from "./procrastination-type";
import { musicTaste } from "./music-taste";
import { decisionStyle } from "./decision-style";
import { optimistRealist } from "./optimist-realist";
import { enneagramLite } from "./enneagram-lite";
import { scoreTypology, scoreSpectrum, scoreScale } from "./score-utils";

export const TESTS: TestDefinition[] = [
  nightOwl,
  humorStyle,
  enneagramLite,
  gamingPersonality,
  growthMindset,
  careLanguage,
  socialPersona,
  procrastinationType,
  musicTaste,
  decisionStyle,
  optimistRealist,
  grit,
  howBold,
  empathyType,
  friendRole,
  socialBattery,
  attachmentStyle,
  textingStyle,
  classArchetype,
  conflictStyle,
  studyEnergy,
  fomoStyle,
  riasecLite,
  miniIPIP,
  eightValues,
  crt7,
  vviq,
];

export function getTest(slug: string): TestDefinition | undefined {
  return TESTS.find((t) => t.slug === slug);
}

export interface ScoredResult {
  result: TestResult;
  extras?: Record<string, unknown>;
}

export function scoreTest(test: TestDefinition, answers: AnswerMap): ScoredResult {
  const result: TestResult = {
    testSlug: test.slug,
    scores: {},
    completedAt: Date.now(),
  };

  let extras: Record<string, unknown> = {};

  // Data-driven scoring for new quizzes (see TestDefinition.scoreMode).
  // Resists straight-lining; no per-quiz switch case required.
  if (test.scoreMode === "type") {
    const { scores, category } = scoreTypology(test, answers);
    result.scores = scores;
    return { result, extras: { label: category.label, description: category.description } };
  }
  if (test.scoreMode === "spectrum") {
    const { scores, category } = scoreSpectrum(test, answers);
    result.scores = scores;
    return { result, extras: { label: category.label, description: category.description } };
  }
  if (test.scoreMode === "scale") {
    result.scores = scoreScale(test, answers);
    result.percentiles = {};
    if (test.norms) {
      for (const [key, norm] of Object.entries(test.norms)) {
        const z = (result.scores[key] - norm.mean) / norm.sd;
        result.percentiles[key] = Math.round(zToPercentile(z));
      }
    }
    return { result, extras };
  }

  switch (test.slug) {
    case "8values": {
      const scores = score8Values(answers);
      result.scores = scores;
      const ideology = getClosestIdeology(scores);
      extras = {
        ideology,
        label: ideology.label,
        description: ideology.description,
      };
      result.percentiles = {};
      if (test.norms) {
        for (const [key, norm] of Object.entries(test.norms)) {
          const z = (scores[key] - norm.mean) / norm.sd;
          result.percentiles[key] = Math.round(zToPercentile(z));
        }
      }
      break;
    }
    case "mini-ipip": {
      const scores = scoreMiniIPIP(answers);
      result.scores = scores;
      result.percentiles = {};
      if (test.norms) {
        for (const [key, norm] of Object.entries(test.norms)) {
          const z = (scores[key] - norm.mean) / norm.sd;
          result.percentiles[key] = Math.round(zToPercentile(z));
        }
      }
      break;
    }
    case "crt-7": {
      const crtResult = scoreCRT7(answers);
      result.scores = crtResult.scores;
      result.correctCount = crtResult.correctCount;
      result.totalQuestions = crtResult.totalQuestions;
      result.percentiles = {};
      if (test.norms?.crt) {
        const norm = test.norms.crt;
        const z = (crtResult.correctCount - norm.mean) / norm.sd;
        result.percentiles.crt = Math.round(zToPercentile(z));
      }
      break;
    }
    case "vviq": {
      const scores = scoreVVIQ(answers);
      result.scores = scores;
      const category = getVVIQCategory(scores.vviq);
      extras = {
        category,
        label: category.label,
        description: category.description,
      };
      result.percentiles = {};
      if (test.norms?.vviq) {
        const norm = test.norms.vviq;
        const z = (scores.vviq - norm.mean) / norm.sd;
        result.percentiles.vviq = Math.round(zToPercentile(z));
      }
      break;
    }
    case "social-battery": {
      const { scores, category } = scoreSocialBattery(answers);
      result.scores = scores;
      extras = { category, label: category.label, description: category.description };
      break;
    }
    case "study-energy": {
      const { scores, category } = scoreStudyEnergy(answers);
      result.scores = scores;
      extras = { label: category.label, description: category.description };
      break;
    }
    case "fomo-style": {
      const { scores, category } = scoreFomo(answers);
      result.scores = scores;
      extras = { label: category.label, description: category.description };
      break;
    }
    default: {
      for (const axis of test.axes) {
        const axisQuestions = test.questions.filter((q) => q.axis === axis.key);
        let sum = 0;
        let count = 0;
        for (const q of axisQuestions) {
          const a = answers[q.id];
          if (a === undefined) continue;
          let score = (a - 1) * 25;
          if (q.direction === -1) score = 100 - score;
          const w = q.weight ?? 1;
          sum += score * w;
          count += w;
        }
        result.scores[axis.key] = count > 0 ? Math.round(sum / count) : 50;
      }
      break;
    }
  }

  return { result, extras };
}

function zToPercentile(z: number): number {
  z = Math.max(-3.5, Math.min(3.5, z));
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp((-z * z) / 2);
  let prob =
    d *
    t *
    (0.3193815 +
      t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  if (z > 0) prob = 1 - prob;
  return Math.round(prob * 100);
}
