import { TestDefinition } from "../types";
import { scoreLikertAxes, topAxis } from "./score-utils";

// Teen-friendly attachment patterns in friendships / early romance.
// Inspired by adult attachment research (Bartholomew, Brennan) simplified for ages 10-21.
// Not a clinical measure.

const questions = [
  // Secure
  { id: "att_s01", text: "I find it easy to get close to friends without overthinking it.", type: "likert" as const, axis: "secure", direction: 1 as const },
  { id: "att_s02", text: "When something is wrong with a friend, I can usually talk it out.", type: "likert" as const, axis: "secure", direction: 1 as const },
  { id: "att_s03", text: "I trust that people who care about me will stick around.", type: "likert" as const, axis: "secure", direction: 1 as const },
  // Anxious
  { id: "att_a01", text: "I worry a lot about whether my friends still like me.", type: "likert" as const, axis: "anxious", direction: 1 as const },
  { id: "att_a02", text: "If someone takes a long time to reply, I assume I did something wrong.", type: "likert" as const, axis: "anxious", direction: 1 as const },
  { id: "att_a03", text: "I need a lot of reassurance that people are not mad at me.", type: "likert" as const, axis: "anxious", direction: 1 as const },
  // Avoidant
  { id: "att_v01", text: "I prefer handling problems alone instead of leaning on friends.", type: "likert" as const, axis: "avoidant", direction: 1 as const },
  { id: "att_v02", text: "When people get too close, I feel like I need space fast.", type: "likert" as const, axis: "avoidant", direction: 1 as const },
  { id: "att_v03", text: "I keep a lot of feelings private even with people I trust.", type: "likert" as const, axis: "avoidant", direction: 1 as const },
  // Mixed (push-pull)
  { id: "att_m01", text: "I want closeness and also get scared when I actually get it.", type: "likert" as const, axis: "mixed", direction: 1 as const },
  { id: "att_m02", text: "My friendships can feel intense one week and distant the next.", type: "likert" as const, axis: "mixed", direction: 1 as const },
  { id: "att_m03", text: "I swing between chasing people and pulling away.", type: "likert" as const, axis: "mixed", direction: 1 as const },
];

const STYLE_META: Record<string, { label: string; description: string }> = {
  secure: {
    label: "Secure connector",
    description:
      "You tend to trust people, recover from drama, and stay close without panicking. You can still feel hurt, but it does not run the whole show.",
  },
  anxious: {
    label: "Anxious connector",
    description:
      "You care hard and notice every shift in tone. Closeness matters a lot, so silence or distance can feel huge. Reassurance helps you settle.",
  },
  avoidant: {
    label: "Independent connector",
    description:
      "You value space and self-reliance. Opening up can feel risky, so you protect your independence. Friends may not always see how much you care.",
  },
  mixed: {
    label: "Push-pull connector",
    description:
      "You want connection and also fear it. That can look like hot-and-cold energy. Naming the pattern is the first step to calmer friendships.",
  },
};

export const attachmentStyle: TestDefinition = {
  slug: "attachment-style",
  title: "Attachment Style (Friends & Crushes)",
  category: "personality",
  description:
    "How you connect when things feel close, distant, or uncertain. Built for friendships and early relationships, not therapy homework.",
  whatYoullLearn:
    "Whether you lean secure, anxious, independent (avoidant), or push-pull, plus how that shows up with friends and crushes.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by attachment research (for self-reflection only)",
  questions,
  axes: [
    { key: "secure", label: "Secure", lowLabel: "Low", highLabel: "High", description: STYLE_META.secure.description },
    { key: "anxious", label: "Anxious", lowLabel: "Low", highLabel: "High", description: STYLE_META.anxious.description },
    { key: "avoidant", label: "Independent", lowLabel: "Low", highLabel: "High", description: STYLE_META.avoidant.description },
    { key: "mixed", label: "Push-pull", lowLabel: "Low", highLabel: "High", description: STYLE_META.mixed.description },
  ],
  resultType: "radar",
  funFacts: [
    "Attachment patterns form early, but they can shift with safe friendships and practice.",
    "Most people are a blend, not a pure type. Your top score is a leaning, not a cage.",
    "Anxious and avoidant often attract each other in a loop of chase and distance.",
  ],
  disclaimer:
    "This is a short self-reflection quiz for young people. It is not a clinical attachment assessment or mental health diagnosis.",
};

export function scoreAttachment(answers: Record<string, number>) {
  const scores = scoreLikertAxes(questions, answers, ["secure", "anxious", "avoidant", "mixed"]);
  const top = topAxis(scores, STYLE_META);
  return { scores, category: { label: top.label, description: top.description } };
}
