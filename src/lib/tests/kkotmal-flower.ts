import { TestDefinition } from "../types";

// Kkotmal Flower Test (꽃말): Korean flower-language archetypes.
// Type quiz, 4 axes x 3 items.

const questions = [
  // Forsythia 개나리 — bright early energy
  { id: "kk_f1", text: "I'm usually the first sign that things are getting better.", type: "likert" as const, axis: "forsythia", direction: 1 as const },
  { id: "kk_f2", text: "Bright, cheerful energy is what people mention first about me.", type: "likert" as const, axis: "forsythia", direction: 1 as const },
  { id: "kk_f3", text: "I prefer staying unnoticed until things are safe.", type: "likert" as const, axis: "forsythia", direction: -1 as const },
  // Plum blossom 매화 — resilience in cold
  { id: "kk_p1", text: "Hard seasons don't stop me; if anything they sharpen me.", type: "likert" as const, axis: "plum", direction: 1 as const },
  { id: "kk_p2", text: "I've bloomed at times when nobody expected anything of me.", type: "likert" as const, axis: "plum", direction: 1 as const },
  { id: "kk_p3", text: "I need warmth and good conditions to do my best work.", type: "likert" as const, axis: "plum", direction: -1 as const },
  // Camellia 동백 — quiet devotion
  { id: "kk_c1", text: "I care for people steadily and quietly, without needing credit.", type: "likert" as const, axis: "camellia", direction: 1 as const },
  { id: "kk_c2", text: "My loyalty shows in small repeated actions, not grand gestures.", type: "likert" as const, axis: "camellia", direction: 1 as const },
  { id: "kk_c3", text: "Expressing affection openly is easy and natural for me.", type: "likert" as const, axis: "camellia", direction: -1 as const },
  // Cosmos 코스모스 — gentle harmony
  { id: "kk_h1", text: "I adjust easily to whoever's in the room and make things flow.", type: "likert" as const, axis: "cosmos", direction: 1 as const },
  { id: "kk_h2", text: "Friends say being around me feels restful.", type: "likert" as const, axis: "cosmos", direction: 1 as const },
  { id: "kk_h3", text: "Group harmony matters less to me than doing things my way.", type: "likert" as const, axis: "cosmos", direction: -1 as const },
];

export const kkotmalFlower: TestDefinition = {
  slug: "kkotmal-flower",
  title: "Kkotmal Flower Test (꽃말)",
  category: "personality",
  description:
    "In Korea every flower speaks. Find which bloom matches your personality: forsythia, plum blossom, camellia, or cosmos.",
  whatYoullLearn:
    "Your flower archetype, its Korean meaning, and the sentence people would use to describe you.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by public flower-language traditions (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "forsythia", label: "Forsythia (개나리)", lowLabel: "Low", highLabel: "High", description: "Bright, early, cheerful energy." },
    { key: "plum", label: "Plum Blossom (매화)", lowLabel: "Low", highLabel: "High", description: "Blooms in the cold; resilience." },
    { key: "camellia", label: "Camellia (동백)", lowLabel: "Low", highLabel: "High", description: "Quiet, steady devotion." },
    { key: "cosmos", label: "Cosmos (코스모스)", lowLabel: "Low", highLabel: "High", description: "Gentle harmony wherever it grows." },
  ],
  terms: [
    {
      term: "꽃말 (Kkotmal)",
      note: "'Flower language': in Korea each flower carries an official meaning, and people gift flowers specifically for the message. This quiz borrows four famous kkotmal meanings.",
    },
    {
      term: "매화 (Maehwa)",
      note: "The plum blossom, Korea's symbol of resilience; it famously blooms while snow is still on the ground.",
    },
  ],
  typeMeta: {
    forsythia: {
      label: "Forsythia: 'Anticipation & New Beginnings'",
      description:
        "You show up early with good energy and people quietly rely on you as a sign that things will be okay. Your kkotmal sentence: 'Spring starts when you arrive.'",
    },
    plum: {
      label: "Plum Blossom: 'Loyalty & Resilience'",
      description:
        "You bloom in conditions that stop other people. Cold seasons built you instead of ending you. Your kkotmal sentence: 'Watch me flower anyway.'",
    },
    camellia: {
      label: "Camellia: 'Quiet Devotion'",
      description:
        "Your love language is consistency: remembered birthdays, shown-up promises, no audience required. Your kkotmal sentence: 'I was here the whole time.'",
    },
    cosmos: {
      label: "Cosmos: 'Harmony & Peaceful Heart'",
      description:
        "You soften rooms. People exhale around you without knowing why. Your kkotmal sentence: 'Everything settles when you stay.'",
    },
  },
  balanced: {
    label: "The Wildflower Mix",
    description:
      "A little bright, a little resilient, quietly devoted, easy to be around: no single bloom dominates your bed. Gardens love variety; so do your friends.",
  },
  resultType: "orbit",
  funFacts: [
    "Korean students traditionally receive forsythia motifs on good-luck charms before exams: anticipation of good things.",
    "Maehwa viewing (plum blossom watching) is a real seasonal outing in Korea, like cherry blossoms but earlier and colder.",
  ],
  disclaimer:
    "A gentle self-reflection quiz built on flower-language traditions: for fun, not fortune-telling.",
};
