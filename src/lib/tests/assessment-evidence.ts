import type { TestDefinition } from "../types";

export interface AssessmentEvidence {
  purpose: "Trait self-report" | "Self-reflection" | "Just for fun" | "Reasoning practice" | "Imagery self-report";
  status: "Source evidence only" | "Not evaluated on this site";
  summary: string;
  rights: string;
}

const entertainment = new Set([
  "mental-age", "delulu-level", "cringe-check", "flag-profile", "kkotmal-flower", "class-archetype",
  "abjad-number", "akan-day-name", "anansi-archetype", "anime-protagonist", "badiya-desert",
  "brain-2am", "desi-family-role", "doubutsu-uranai", "fal-qahveh", "filmi-hero", "four-humors",
  "hafez-mirror", "huaren-netizen", "internet-persona", "ism-vibe", "kdrama-archetype",
  "ketsueki-gata", "naija-aunty", "nairobi-vibe", "nakshatra-mirror", "personal-color",
  "prakriti-dosha", "saju-pillar", "seoul-dating-tier", "shahnameh-hero", "shahr-soul",
  "shinrigaku-scene", "wanghong-persona",
]);

export const AGREEMENT_OPTIONS = [
  { value: 1, label: "Strongly disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neither agree nor disagree" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly agree" },
];

export function assessmentEvidence(test: Pick<TestDefinition, "slug" | "license">): AssessmentEvidence {
  if (test.slug === "mini-ipip") return {
    purpose: "Trait self-report", status: "Source evidence only",
    summary: "The Mini-IPIP has published research. This English website presentation has not been independently validated. No site norms or accuracy percentage are available.",
    rights: "IPIP items are public domain. Wording and scoring keys are checked against IPIP; site instructions and presentation are adaptations.",
  };
  if (test.slug === "vviq") return {
    purpose: "Imagery self-report", status: "Source evidence only",
    summary: "An adapted presentation of a published questionnaire. These scores describe your reported imagery; they do not establish aphantasia or another diagnosis.",
    rights: "Source attribution is available; permission for this reproduction has not been verified.",
  };
  if (test.slug === "crt-7") return {
    purpose: "Reasoning practice", status: "Source evidence only",
    summary: "Puzzles from published cognitive-reflection research. Familiarity and practice affect the result. This site has no population comparison or validated intelligence score.",
    rights: "Source attribution is available; permission for this reproduction has not been verified.",
  };
  return {
    purpose: entertainment.has(test.slug) ? "Just for fun" : "Self-reflection",
    status: "Not evaluated on this site",
    summary: test.slug === "8values"
      ? "Adapted from the open-source 8values project. Political labels are descriptive groupings, with no demonstrated accuracy rate for this site version."
      : "An original TypologyQuiz quiz. Its categories are prompts for reflection or conversation, with no published validation of this quiz. A research-inspired topic does not validate the result.",
    rights: test.slug === "8values" ? "Adapted under the source project's MIT license; see Credits." : "Original TypologyQuiz questions and interpretations.",
  };
}

export function usesSchoolWording(test: Pick<TestDefinition, "slug" | "license">, schoolMode: boolean): boolean {
  return schoolMode && !["mini-ipip", "8values", "vviq", "crt-7"].includes(test.slug);
}

export function scoreExplanation(test: Pick<TestDefinition, "slug">): string {
  return test.slug === "crt-7"
    ? "The total counts correct answers to these seven puzzles. The 0–100 bar shows the proportion correct. It is not an intelligence score or a population ranking."
    : "Scores run from 0 to 100 and summarize your answers on each scale. A score of 70 is a position on that scale, not the 70th percentile or 70% accuracy. Higher is not always better. Measurement uncertainty has not been estimated for this site version.";
}
