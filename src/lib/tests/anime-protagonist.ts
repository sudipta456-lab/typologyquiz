import { TestDefinition } from "../types";

// Anime Protagonist Test: your anime archetype energy.
// Type quiz, 4 axes x 3 items.

const questions = [
  // Shonen hero — loud growth through effort
  { id: "ap_s1", text: "Tell me I can't do something and watch what happens next.", type: "likert" as const, axis: "shonen", direction: 1 as const },
  { id: "ap_s2", text: "Effort beats talent in my personal mythology.", type: "likert" as const, axis: "shonen", direction: 1 as const },
  { id: "ap_s3", text: "If I fail publicly, I usually shrink away from retrying.", type: "likert" as const, axis: "shonen", direction: -1 as const },
  // Slice-of-life soul — small joys, gentle presence
  { id: "ap_l1", text: "A quiet day with good food and good people beats any epic plot.", type: "likert" as const, axis: "sliceoflife", direction: 1 as const },
  { id: "ap_l2", text: "People feel calmer after spending an afternoon with me.", type: "likert" as const, axis: "sliceoflife", direction: 1 as const },
  { id: "ap_l3", text: "Stillness and slow days make me restless.", type: "likert" as const, axis: "sliceoflife", direction: -1 as const },
  // Anti-hero — sharp edges, own rules
  { id: "ap_a1", text: "I'd rather be effective than liked.", type: "likert" as const, axis: "antihero", direction: 1 as const },
  { id: "ap_a2", text: "Rules make sense to me only when their reasons do.", type: "likert" as const, axis: "antihero", direction: 1 as const },
  { id: "ap_a3", text: "Being part of the team matters deeply to me, even a flawed one.", type: "likert" as const, axis: "antihero", direction: -1 as const },
  // Mahou shoujo — hope as weapon
  { id: "ap_m1", text: "I believe kindness is a legitimate battle strategy.", type: "likert" as const, axis: "magical", direction: 1 as const },
  { id: "ap_m2", text: "Even cynical people soften around me eventually.", type: "likert" as const, axis: "magical", direction: 1 as const },
  { id: "ap_m3", text: "Hopeful people mostly annoy me.", type: "likert" as const, axis: "magical", direction: -1 as const },
];

export const animeProtagonist: TestDefinition = {
  slug: "anime-protagonist",
  title: "Anime Protagonist Test",
  category: "personality",
  description:
    "Which anime genre runs your life? Shonen battle arc, slice-of-life comfort show, dark anti-hero saga, or magical girl transformation?",
  whatYoullLearn:
    "Your protagonist archetype, your genre, and what your character arc is quietly building toward.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by public anime genre conventions (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "shonen", label: "Shonen Hero (少年)", lowLabel: "Low", highLabel: "High", description: "Loud growth through stubborn effort." },
    { key: "sliceoflife", label: "Slice-of-Life Soul", lowLabel: "Low", highLabel: "High", description: "Small joys, gentle presence." },
    { key: "antihero", label: "Anti-Hero (闇)", lowLabel: "Low", highLabel: "High", description: "Sharp edges, own rules." },
    { key: "magical", label: "Magical Girl Energy (魔法)", lowLabel: "Low", highLabel: "High", description: "Hope wielded as a weapon." },
  ],
  terms: [
    {
      term: "少年 (Shōnen)",
      note: "'Boy/ youth': the anime genre of loud growth, training arcs, and refusing to stay down. Think effort-powered protagonists who lose loudly and come back louder.",
    },
    {
      term: "日常系 (Nichijō-kei)",
      note: "'Slice-of-life': the beloved gentle genre where nothing explodes and everything matters: tea, friendship, seasons changing.",
    },
    {
      term: "魔法少女 (Mahō shōjo)",
      note: "'Magical girl': the genre where hope and kindness are literal superpowers, transformation sequences included.",
    },
  ],
  typeMeta: {
    shonen: {
      label: "Shonen Protagonist",
      description:
        "Your genre: the training arc. Every 'no' is fuel, every loss is a chapter, and your friends are power-ups. Your arc this season: learning that resting isn't quitting.",
    },
    sliceoflife: {
      label: "Slice-of-Life Soul",
      description:
        "Your genre needs no villain. You find the plot in ordinary days and give other characters a place to breathe. Your arc: realizing quiet episodes are what fans replay most.",
    },
    antihero: {
      label: "Anti-Hero",
      description:
        "Your genre is the dark saga. Effectiveness over applause, loyalty proven in actions, trust given rarely and completely. Your arc: letting one person see the reason behind the rules.",
    },
    magical: {
      label: "Magical Girl / Boy Energy",
      description:
        "Your genre weaponizes hope. Cynics don't stand a chance against sustained kindness. Your arc: keeping that shine without needing to save everyone solo.",
    },
  },
  balanced: {
    label: "The Crossover Episode",
    description:
      "Fight like shonen, rest like slice-of-life, decide like an anti-hero, believe like magical girl. You're the crossover special everyone waits for. Keep the season balanced.",
  },
  resultType: "orbit",
  funFacts: [
    "Anime genres map onto real motivation styles surprisingly well; shonen persistence is basically studied grit.",
    "Slice-of-life anime exploded globally because tired audiences wanted shows about recovery, not war.",
  ],
  disclaimer:
    "A fun quiz built on anime genre tropes; no actual transformation sequences were tested.",
};
