import { TestDefinition } from "../types";

// Four Humors Temperament Test: Europe's oldest personality system.
// Type quiz, 4 axes x 3 items.

const questions = [
  // Sanguine — blood: upbeat, social
  { id: "fh_s1", text: "New people energize me within minutes of meeting them.", type: "likert" as const, axis: "sanguine", direction: 1 as const },
  { id: "fh_s2", text: "I bounce back from bad news faster than most.", type: "likert" as const, axis: "sanguine", direction: 1 as const },
  { id: "fh_s3", text: "Social gatherings drain me even when I enjoy them.", type: "likert" as const, axis: "sanguine", direction: -1 as const },
  // Choleric — yellow bile: driven, decisive
  { id: "fh_c1", text: "When there's a problem, I move to fix it immediately.", type: "likert" as const, axis: "choleric", direction: 1 as const },
  { id: "fh_c2", text: "I'd rather make a wrong decision than no decision.", type: "likert" as const, axis: "choleric", direction: 1 as const },
  { id: "fh_c3", text: "Taking charge makes me uncomfortable; others should lead.", type: "likert" as const, axis: "choleric", direction: -1 as const },
  // Melancholic — black bile: deep, thoughtful
  { id: "fh_m1", text: "I feel things deeply and think about them longer than most.", type: "likert" as const, axis: "melancholic", direction: 1 as const },
  { id: "fh_m2", text: "Beauty and meaning affect me almost physically.", type: "likert" as const, axis: "melancholic", direction: 1 as const },
  { id: "fh_m3", text: "Deep analysis sounds exhausting; surface is fine by me.", type: "likert" as const, axis: "melancholic", direction: -1 as const },
  // Phlegmatic — phlegm: calm, steady
  { id: "fh_p1", text: "Crisis situations reveal me as the calmest person present.", type: "likert" as const, axis: "phlegmatic", direction: 1 as const },
  { id: "fh_p2", text: "Drama rolls off me; very little disturbs my equilibrium.", type: "likert" as const, axis: "phlegmatic", direction: 1 as const },
  { id: "fh_p3", text: "My reactions are famously big and visible.", type: "likert" as const, axis: "phlegmatic", direction: -1 as const },
];

export const fourHumors: TestDefinition = {
  slug: "four-humors",
  title: "Four Humors Temperament Test",
  category: "personality",
  description:
    "Europe's original personality system, 2,400 years old: Sanguine, Choleric, Melancholic, or Phlegmatic? The classics knew what they were doing.",
  whatYoullLearn:
    "Your dominant classical temperament, what ancient physicians would've called you, and why the system survived this long.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by the public-domain four-temperaments tradition (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "sanguine", label: "Sanguine (blood)", lowLabel: "Low", highLabel: "High", description: "Upbeat, social, quick to warm." },
    { key: "choleric", label: "Choleric (yellow bile)", lowLabel: "Low", highLabel: "High", description: "Driven, decisive, fiery." },
    { key: "melancholic", label: "Melancholic (black bile)", lowLabel: "Low", highLabel: "High", description: "Deep, thoughtful, sensitive." },
    { key: "phlegmatic", label: "Phlegmatic (phlegm)", lowLabel: "Low", highLabel: "High", description: "Calm, steady, unbothered." },
  ],
  terms: [
    {
      term: "The Four Humors",
      note: "Ancient Greek medicine held that four bodily fluids (blood, yellow bile, black bile, phlegm) shaped temperament. The medical part was wrong; the personality observations were so good we kept them for 2,400 years.",
    },
    {
      term: "Temperament",
      note: "Your inborn emotional 'weather pattern': how you naturally react before habits and culture edit you. The oldest and most studied idea in personality psychology.",
    },
  ],
  typeMeta: {
    sanguine: {
      label: "Sanguine: The Enthusiast",
      description:
        "Blood-dominant in the classical scheme: social sunshine that rooms genuinely miss when absent. You make friends at bus stops. The classical warning: enthusiasm scatters; depth is your growth edge, not your enemy.",
    },
    choleric: {
      label: "Choleric: The Commander",
      description:
        "Yellow-bile energy: decisive, goal-locked, allergic to dithering. History's movers were mostly you. The classical warning: fire that only directs burns its own people. Lead with questions sometimes.",
    },
    melancholic: {
      label: "Melancholic: The Deep One",
      description:
        "Black-bile depth: you feel in high resolution and notice what lighter temperaments walk past. Art, meaning, truth live with you. The classical warning: depth without rest becomes weight. Schedule lightness deliberately.",
    },
    phlegmatic: {
      label: "Phlegmatic: The Steady Lake",
      description:
        "Phlegm equilibrium: nothing rattles you for long, and everyone borrows your calm in storms. The classical warning: lakes look passive but hold everything; speak your depths out loud or others assume they're shallow.",
    },
  },
  balanced: {
    label: "The Balanced Humorist",
    description:
      "All four humors in workable harmony, which ancient physicians considered ideal health itself. You adapt your weather to the room's needs. Rare constitution. Maintain it.",
  },
  resultType: "radar",
  funFacts: [
    "Hippocrates proposed the four humors around 400 BCE; Shakespeare built characters on them 2,000 years later.",
    "Modern temperament research keeps rediscovering versions of this ancient four-type map.",
  ],
  disclaimer:
    "A quiz inspired by classical temperament theory: history-flavored fun, not medical or psychological diagnosis.",
};
