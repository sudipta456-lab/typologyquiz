import { TestDefinition } from "../types";
import { scoreLikertAxes, topAxis } from "./score-utils";

// RIASEC-lite career interests for school age (Holland codes simplified).
// Self-reflection only, not official counseling tool.

const questions = [
  // Realistic
  { id: "ri_r01", text: "I like building, fixing, or making something with my hands.", type: "likert" as const, axis: "realistic", direction: 1 as const },
  { id: "ri_r02", text: "I would rather do a hands-on project than write a long essay.", type: "likert" as const, axis: "realistic", direction: 1 as const },
  // Investigative
  { id: "ri_i01", text: "I enjoy figuring out how things work or solving puzzles.", type: "likert" as const, axis: "investigative", direction: 1 as const },
  { id: "ri_i02", text: "I get curious and research random topics just because.", type: "likert" as const, axis: "investigative", direction: 1 as const },
  // Artistic
  { id: "ri_a01", text: "I like creating things: art, music, stories, videos, or design.", type: "likert" as const, axis: "artistic", direction: 1 as const },
  { id: "ri_a02", text: "I would rather invent my own way than follow a strict template.", type: "likert" as const, axis: "artistic", direction: 1 as const },
  // Social
  { id: "ri_s01", text: "I like helping friends with problems or teaching someone something.", type: "likert" as const, axis: "social", direction: 1 as const },
  { id: "ri_s02", text: "Group projects feel better when I can support people, not just finish tasks.", type: "likert" as const, axis: "social", direction: 1 as const },
  // Enterprising
  { id: "ri_e01", text: "I like leading, pitching ideas, or getting people excited about a plan.", type: "likert" as const, axis: "enterprising", direction: 1 as const },
  { id: "ri_e02", text: "Competitions, clubs, or starting something new give me energy.", type: "likert" as const, axis: "enterprising", direction: 1 as const },
  // Conventional
  { id: "ri_c01", text: "I like organizing plans, lists, schedules, or clean systems.", type: "likert" as const, axis: "conventional", direction: 1 as const },
  { id: "ri_c02", text: "Clear rules and structure help me do my best work.", type: "likert" as const, axis: "conventional", direction: 1 as const },
];

const META: Record<string, { label: string; description: string }> = {
  realistic: {
    label: "Maker / Doer",
    description: "Hands-on, practical, build-and-fix energy. You learn by doing, not only by reading about it.",
  },
  investigative: {
    label: "Explorer / Analyst",
    description: "Curious mind that likes puzzles, science, and deep dives. You want to understand the why.",
  },
  artistic: {
    label: "Creator",
    description: "Ideas, expression, and original style matter. You thrive when you can invent or redesign.",
  },
  social: {
    label: "Helper / Connector",
    description: "People are your project. Teaching, supporting, and teamwork feel meaningful.",
  },
  enterprising: {
    label: "Starter / Leader",
    description: "You like influence, initiative, and moving people toward a goal. Energy comes from the arena.",
  },
  conventional: {
    label: "Organizer",
    description: "Order, systems, and reliability are strengths. You make chaos usable.",
  },
};

export const riasecLite: TestDefinition = {
  slug: "career-interests",
  title: "Career Interests (RIASEC-lite)",
  category: "character",
  description:
    "Which kinds of school projects, hobbies, and future paths fit your energy: make, explore, create, help, lead, or organize.",
  whatYoullLearn:
    "Your top Holland-style interest themes and what that might mean for clubs, classes, and careers later.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by Holland RIASEC (self-reflection only)",
  questions,
  axes: [
    { key: "realistic", label: "Realistic", lowLabel: "Low", highLabel: "High", description: META.realistic.description },
    { key: "investigative", label: "Investigative", lowLabel: "Low", highLabel: "High", description: META.investigative.description },
    { key: "artistic", label: "Artistic", lowLabel: "Low", highLabel: "High", description: META.artistic.description },
    { key: "social", label: "Social", lowLabel: "Low", highLabel: "High", description: META.social.description },
    { key: "enterprising", label: "Enterprising", lowLabel: "Low", highLabel: "High", description: META.enterprising.description },
    { key: "conventional", label: "Conventional", lowLabel: "Low", highLabel: "High", description: META.conventional.description },
  ],
  resultType: "radar",
  funFacts: [
    "RIASEC is one of the most used career interest models in schools worldwide.",
    "Most people have 2 or 3 strong themes, not just one pure type.",
    "Interests can grow when you try new activities, especially in your teens.",
  ],
  disclaimer:
    "This is a short interest quiz for exploration, not an official career counseling tool or aptitude test.",
};

export function scoreRiasec(answers: Record<string, number>) {
  const keys = ["realistic", "investigative", "artistic", "social", "enterprising", "conventional"];
  const scores = scoreLikertAxes(questions, answers, keys);
  const top = topAxis(scores, META);
  return { scores, category: { label: top.label, description: top.description } };
}
