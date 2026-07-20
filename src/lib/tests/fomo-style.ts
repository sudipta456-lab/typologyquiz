import { TestDefinition } from "../types";
import { scoreLikertAxes } from "./score-utils";

const questions = [
  { id: "fo_01", text: "I say yes to plans even when I am already tired.", type: "likert" as const, axis: "fomo", direction: 1 as const },
  { id: "fo_02", text: "Seeing friends hang without me stings more than I admit.", type: "likert" as const, axis: "fomo", direction: 1 as const },
  { id: "fo_03", text: "I am okay missing events if I need rest.", type: "likert" as const, axis: "fomo", direction: -1 as const },
  { id: "fo_04", text: "I check stories to make sure I am not missing something better.", type: "likert" as const, axis: "fomo", direction: 1 as const },
  { id: "fo_05", text: "I change plans last minute when something cooler shows up.", type: "likert" as const, axis: "hop", direction: 1 as const },
  { id: "fo_06", text: "Once I commit, I stick with the plan.", type: "likert" as const, axis: "hop", direction: -1 as const },
  { id: "fo_07", text: "I feel behind when I am offline for a day.", type: "likert" as const, axis: "fomo", direction: 1 as const },
  { id: "fo_08", text: "Quiet weekends can feel good, not like failure.", type: "likert" as const, axis: "fomo", direction: -1 as const },
  { id: "fo_09", text: "I keep options open until the last second.", type: "likert" as const, axis: "hop", direction: 1 as const },
  { id: "fo_10", text: "I would rather one solid plan than five maybe-plans.", type: "likert" as const, axis: "hop", direction: -1 as const },
  { id: "fo_11", text: "Scrolling past other people's fun nights doesn't really get to me.", type: "likert" as const, axis: "fomo", direction: -1 as const },
  { id: "fo_12", text: "I protect sleep even if it means missing a hang.", type: "likert" as const, axis: "fomo", direction: -1 as const },
];

function fomoCategory(scores: Record<string, number>): { label: string; description: string } {
  const fomo = scores.fomo ?? 50;
  const hop = scores.hop ?? 50;
  if (fomo >= 65 && hop >= 55) {
    return {
      label: "Plan hopper",
      description:
        "You hate missing out and you keep options open. Fun, but exhausting. Try locking one plan early so your brain can rest.",
    };
  }
  if (fomo >= 65) {
    return {
      label: "FOMO-heavy",
      description:
        "Being left out hits hard. You are social and aware. Build a few deep plans so you are not chasing every story.",
    };
  }
  if (fomo <= 35 && hop <= 40) {
    return {
      label: "JOMO guardian",
      description:
        "Joy of missing out is real for you. You protect energy. Just check that isolation is a choice, not a stuck habit.",
    };
  }
  if (hop >= 60) {
    return {
      label: "Maybe-later planner",
      description:
        "You like flexibility. Strength: adaptability. Watch-out: friends who need clearer yes/no answers.",
    };
  }
  return {
    label: "Balanced planner",
    description:
      "You can hang or rest without spiraling. Keep noticing when scrolling starts rewriting your night for you.",
  };
}

export const fomoStyle: TestDefinition = {
  slug: "fomo-style",
  title: "FOMO & Plans Style",
  category: "personality",
  description: "Do you chase every hang, protect quiet nights, or hop between maybes?",
  whatYoullLearn: "Your FOMO level and how you treat plans, with zero shame either way.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  questions,
  axes: [
    {
      key: "fomo",
      label: "FOMO",
      lowLabel: "JOMO / chill",
      highLabel: "Hate missing out",
      description: "Higher means missing events or being left out hits harder.",
    },
    {
      key: "hop",
      label: "Plan hopping",
      lowLabel: "Stick to plan",
      highLabel: "Keep options open",
      description: "Higher means you switch plans when something better appears.",
    },
  ],
  resultType: "radar",
  funFacts: [
    "FOMO is normal. Phones make other people fun look louder than it feels in real life.",
    "Friends with different FOMO levels often clash about RSVPs.",
    "Choosing rest on purpose is a skill, not a personality flaw.",
  ],
  disclaimer: "A light habit quiz. Not a anxiety diagnosis or mental health assessment.",
};

export function scoreFomo(answers: Record<string, number>) {
  const scores = scoreLikertAxes(questions, answers, ["fomo", "hop"]);
  return { scores, category: fomoCategory(scores) };
}
