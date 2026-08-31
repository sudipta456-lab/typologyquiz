import { TestDefinition } from "../types";

// Overthinker Level: rumination intensity meter.
// Single spectrum axis; reverse items anchor straight-lining mid-scale.

const questions = [
  { id: "ot_01", text: "I replay conversations from days ago, editing what I should have said.", type: "likert" as const, axis: "think", direction: 1 as const },
  { id: "ot_02", text: "A short reply like 'k' can occupy my mind for an entire evening.", type: "likert" as const, axis: "think", direction: 1 as const },
  { id: "ot_03", text: "I imagine detailed worst-case scenarios for ordinary decisions.", type: "likert" as const, axis: "think", direction: 1 as const },
  { id: "ot_04", text: "Choosing between two similar options can cost me real time.", type: "likert" as const, axis: "think", direction: 1 as const },
  { id: "ot_05", text: "I've laid awake rearranging something I said three years ago.", type: "likert" as const, axis: "think", direction: 1 as const },
  { id: "ot_06", text: "I send a message, reread it, and consider deleting it roughly every time.", type: "likert" as const, axis: "think", direction: 1 as const },
  { id: "ot_07", text: "I decide quickly and rarely look back.", type: "likert" as const, axis: "think", direction: -1 as const },
  { id: "ot_08", text: "If I can't control it, I don't spend thoughts on it.", type: "likert" as const, axis: "think", direction: -1 as const },
  { id: "ot_09", text: "My brain opens new tabs faster than it closes old ones.", type: "likert" as const, axis: "think", direction: 1 as const },
  { id: "ot_10", text: "'Just stop thinking about it' is advice that has never once worked on me.", type: "likert" as const, axis: "think", direction: 1 as const },
  { id: "ot_11", text: "I sleep easily even after a stressful day.", type: "likert" as const, axis: "think", direction: -1 as const },
  { id: "ot_12", text: "I've rehearsed arguments for meetings, texts, or interviews that never happened.", type: "likert" as const, axis: "think", direction: 1 as const },
];

export const overthinkerLevel: TestDefinition = {
  slug: "overthinker-level",
  title: "Overthinking Level Test",
  category: "thinking",
  description:
    "From 'hm, interesting' to fourteen browser tabs of thought. Measure exactly how loud your brain is.",
  whatYoullLearn:
    "Your certified overthinking band and what your specific level is actually good at.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "spectrum",
  questions,
  axes: [
    {
      key: "think",
      label: "Thinking volume",
      lowLabel: "Quiet mind",
      highLabel: "Fourteen tabs",
      description: "Higher scores mean more replaying, predicting, and polishing.",
    },
  ],
  resultType: "meter",
  spectrumBands: [
    {
      max: 25,
      label: "Zen Beginner",
      description:
        "It happened, then it ended. You don't replay texts because you barely remember them. Superpower: peace. Blind spot: occasionally the same lesson repeats until you actually look at it.",
    },
    {
      max: 45,
      label: "Occasional Rewinder",
      description:
        "Mostly present-tense, with scheduled evening replays. You revisit the awkward moment once, wince, and move on. Healthy configuration. Protect it.",
    },
    {
      max: 65,
      label: "Certified Overthinker",
      description:
        "You've drafted, deleted, redrafted, and finally sent the original message. Your brain treats every decision like a contract review. Upside: you catch details others miss. Downside: the details didn't need catching.",
    },
    {
      max: 85,
      label: "Chief Overthinking Officer",
      description:
        "You have considered fourteen outcomes for a two-word reply. Your simulations are so realistic you sometimes feel tired from events that never occurred. Channel it into planning, writing, or chess: anywhere the tabs pay rent.",
    },
    {
      max: 100,
      label: "Fourteen Tabs Open, All Playing Music",
      description:
        "Your brain hosts a permanent conference and every tab has opinions. Legendary depth, brutal battery drain. Prescription: one tab closed per day. Start with the 2021 one. You know the one.",
    },
  ],
  funFacts: [
    "Overthinking and intelligence correlate, but so do overthinking and exhaustion. Choose your trade carefully.",
    "Writing a worry down measurably quiets it; the brain stops rehearsing what's been filed.",
  ],
  disclaimer:
    "This is a lighthearted self-reflection quiz about thinking habits, not a mental health assessment.",
};
