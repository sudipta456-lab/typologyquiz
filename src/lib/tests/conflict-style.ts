import { TestDefinition } from "../types";
import { scoreLikertAxes, topAxis } from "./score-utils";

// Conflict styles inspired by dual-concern models (compete, avoid, accommodate, compromise, collaborate).
// School / friend language for ages 10-21.

const questions = [
  // Compete
  { id: "cf_c1", text: "In an argument, I push hard for my side to win.", type: "likert" as const, axis: "compete", direction: 1 as const },
  { id: "cf_c2", text: "If I know I am right, I keep pressing until others agree.", type: "likert" as const, axis: "compete", direction: 1 as const },
  // Avoid
  { id: "cf_a1", text: "I change the subject or leave when tension starts.", type: "likert" as const, axis: "avoid", direction: 1 as const },
  { id: "cf_a2", text: "I would rather stay quiet than risk a fight with friends.", type: "likert" as const, axis: "avoid", direction: 1 as const },
  // Accommodate
  { id: "cf_m1", text: "I often give in so the other person is not upset.", type: "likert" as const, axis: "accommodate", direction: 1 as const },
  { id: "cf_m2", text: "Keeping peace matters more to me than getting my way.", type: "likert" as const, axis: "accommodate", direction: 1 as const },
  // Compromise
  { id: "cf_p1", text: "I look for a middle option so everyone gives a little.", type: "likert" as const, axis: "compromise", direction: 1 as const },
  { id: "cf_p2", text: "Split the difference feels fair in most disagreements.", type: "likert" as const, axis: "compromise", direction: 1 as const },
  // Collaborate
  { id: "cf_b1", text: "I try to understand their side and find a solution that works for both.", type: "likert" as const, axis: "collaborate", direction: 1 as const },
  { id: "cf_b2", text: "Even when mad, I want to talk it through properly.", type: "likert" as const, axis: "collaborate", direction: 1 as const },
  // Mix items
  { id: "cf_c3", text: "Debates feel like a sport I want to win.", type: "likert" as const, axis: "compete", direction: 1 as const },
  { id: "cf_a3", text: "I leave group chats when drama starts.", type: "likert" as const, axis: "avoid", direction: 1 as const },
];

const META: Record<string, { label: string; description: string }> = {
  compete: {
    label: "Competitor",
    description:
      "You fight for your view. Strength: clear standards. Watch-out: people can feel steamrolled. Try listening first, then arguing.",
  },
  avoid: {
    label: "Avoider",
    description:
      "You dodge heat to stay safe. Strength: less pointless drama. Watch-out: problems pile up. Practice one small honest sentence.",
  },
  accommodate: {
    label: "Peacekeeper",
    description:
      "You smooth things over. Strength: kindness. Watch-out: your needs disappear. You can care about people and still say no.",
  },
  compromise: {
    label: "Deal-maker",
    description:
      "You split the difference. Strength: speed and fairness. Watch-out: sometimes nobody gets what they actually need.",
  },
  collaborate: {
    label: "Problem-solver",
    description:
      "You dig for win-win. Strength: respect and creativity. Watch-out: it takes time and energy you may not always have.",
  },
};

export const conflictStyle: TestDefinition = {
  slug: "conflict-style",
  title: "Conflict Style",
  category: "character",
  description:
    "When drama hits group projects, friend groups, or family, how do you usually respond?",
  whatYoullLearn:
    "Whether you tend to compete, avoid, keep peace, compromise, or problem-solve, and when that helps or hurts.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by conflict-style research (self-reflection only)",
  questions,
  axes: [
    { key: "compete", label: "Compete", lowLabel: "Low", highLabel: "High", description: META.compete.description },
    { key: "avoid", label: "Avoid", lowLabel: "Low", highLabel: "High", description: META.avoid.description },
    { key: "accommodate", label: "Accommodate", lowLabel: "Low", highLabel: "High", description: META.accommodate.description },
    { key: "compromise", label: "Compromise", lowLabel: "Low", highLabel: "High", description: META.compromise.description },
    { key: "collaborate", label: "Collaborate", lowLabel: "Low", highLabel: "High", description: META.collaborate.description },
  ],
  resultType: "radar",
  funFacts: [
    "No style is always best. Winning a debate can cost a friendship. Avoiding can cost trust later.",
    "Teams work better when people know each other is conflict style, not just their job role.",
    "You can switch styles. This quiz shows your default under stress.",
  ],
  disclaimer:
    "This is a short self-reflection tool for everyday conflict, not a clinical or legal assessment.",
};

export function scoreConflict(answers: Record<string, number>) {
  const keys = ["compete", "avoid", "accommodate", "compromise", "collaborate"];
  const scores = scoreLikertAxes(questions, answers, keys);
  const top = topAxis(scores, META);
  return { scores, category: { label: top.label, description: top.description } };
}
