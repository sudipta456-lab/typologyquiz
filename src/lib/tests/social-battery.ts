import { TestDefinition } from "../types";
import { scoreLikertAxes } from "./score-utils";

// Social battery / energy with people. Higher = recharged by social time.
// Lower = drained faster, needs alone time. Ages 10-21 language.

const questions = [
  { id: "sb_01", text: "After hanging out with a big group, I usually feel energized.", type: "likert" as const, axis: "battery", direction: 1 as const },
  { id: "sb_02", text: "I need quiet alone time to feel like myself again.", type: "likert" as const, axis: "battery", direction: -1 as const },
  { id: "sb_03", text: "I am often the one starting conversations or group chats.", type: "likert" as const, axis: "battery", direction: 1 as const },
  { id: "sb_04", text: "Parties or loud events wear me out even when I like the people.", type: "likert" as const, axis: "battery", direction: -1 as const },
  { id: "sb_05", text: "I feel better when my day includes people, not only screens.", type: "likert" as const, axis: "battery", direction: 1 as const },
  { id: "sb_06", text: "I would rather text than talk face to face when I am tired.", type: "likert" as const, axis: "battery", direction: -1 as const },
  { id: "sb_07", text: "Being around friends helps me process stress.", type: "likert" as const, axis: "battery", direction: 1 as const },
  { id: "sb_08", text: "Too many plans in a week makes me irritable.", type: "likert" as const, axis: "battery", direction: -1 as const },
  { id: "sb_09", text: "I like meeting new people at school or online communities.", type: "likert" as const, axis: "battery", direction: 1 as const },
  { id: "sb_10", text: "I protect my calendar so I do not overbook social time.", type: "likert" as const, axis: "battery", direction: -1 as const },
  { id: "sb_11", text: "I can stay out late and still want to hang again the next day.", type: "likert" as const, axis: "battery", direction: 1 as const },
  { id: "sb_12", text: "I fake energy in groups more often than I admit.", type: "likert" as const, axis: "battery", direction: -1 as const },
];

function batteryCategory(score: number): { label: string; description: string } {
  if (score <= 30) {
    return {
      label: "Low social battery",
      description:
        "People time drains you faster than it fills you. Protect quiet recharge windows. That is not antisocial. It is how your battery works.",
    };
  }
  if (score <= 55) {
    return {
      label: "Selective battery",
      description:
        "You can enjoy groups, but only with the right people and pace. Overbooking burns you out. Choose your hangouts on purpose.",
    };
  }
  if (score <= 75) {
    return {
      label: "Balanced battery",
      description:
        "You can go social or solo and recover either way. Watch for weeks that stack too many events without downtime.",
    };
  }
  return {
    label: "High social battery",
    description:
      "Connection fuels you. Alone time is fine, but you light up around people. Just remember others may need quieter recharges than you do.",
  };
}

export const socialBattery: TestDefinition = {
  slug: "social-battery",
  title: "Social Battery",
  category: "personality",
  description:
    "Do crowds charge you up or wipe you out? A quick read on your social energy style.",
  whatYoullLearn:
    "Where you sit on the social battery scale and how to protect energy without ghosting everyone.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  questions,
  axes: [
    {
      key: "battery",
      label: "Social energy",
      lowLabel: "Drained by groups",
      highLabel: "Charged by groups",
      description: "Higher scores mean social time tends to refill you. Lower scores mean you need more alone recovery.",
    },
  ],
  resultType: "spectrum",
  funFacts: [
    "Social battery is related to introversion and extraversion, but it is more about energy after social time.",
    "You can love people and still have a low battery. Preference and energy are not the same thing.",
    "Teens often overbook weekends and then wonder why they feel fried on Monday.",
  ],
  disclaimer:
    "This is a light self-reflection quiz, not a medical or personality diagnosis.",
};

export function scoreSocialBattery(answers: Record<string, number>) {
  const scores = scoreLikertAxes(questions, answers, ["battery"]);
  const category = batteryCategory(scores.battery ?? 50);
  return { scores, category };
}
