import { TestDefinition } from "../types";

// Prakriti Dosha Test: Ayurvedic three-dosha typing, quiz-ified.
// Type quiz, 3 axes x 4 items. Wellness framing, not medical advice.

const questions = [
  // Vata — air: creative, quick, restless
  { id: "pd_v1", text: "My mind moves fast: ideas, worries, plans, all at once.", type: "likert" as const, axis: "vata", direction: 1 as const },
  { id: "pd_v2", text: "I get excited easily and just as easily distracted.", type: "likert" as const, axis: "vata", direction: 1 as const },
  { id: "pd_v3", text: "Cold weather genuinely bothers me.", type: "likert" as const, axis: "vata", direction: 1 as const },
  { id: "pd_v4", text: "Steady routines come naturally to me.", type: "likert" as const, axis: "vata", direction: -1 as const },
  // Pitta — fire: driven, sharp, intense
  { id: "pd_p1", text: "I'm competitive in ways that surprise even me.", type: "likert" as const, axis: "pitta", direction: 1 as const },
  { id: "pd_p2", text: "I run hot, both temperature and temper.", type: "likert" as const, axis: "pitta", direction: 1 as const },
  { id: "pd_p3", text: "Inefficiency makes me visibly irritated.", type: "likert" as const, axis: "pitta", direction: 1 as const },
  { id: "pd_p4", text: "Losing doesn't light a fire under me; it barely registers.", type: "likert" as const, axis: "pitta", direction: -1 as const },
  // Kapha — earth: calm, loyal, steady
  { id: "pd_k1", text: "People describe me as calm, grounded, or unshakeable.", type: "likert" as const, axis: "kapha", direction: 1 as const },
  { id: "pd_k2", text: "I build deep, long relationships rather than many quick ones.", type: "likert" as const, axis: "kapha", direction: 1 as const },
  { id: "pd_k3", text: "Once comfortable, change takes real effort for me.", type: "likert" as const, axis: "kapha", direction: 1 as const },
  { id: "pd_k4", text: "Slow mornings make me sluggish rather than peaceful.", type: "likert" as const, axis: "kapha", direction: -1 as const },
];

export const prakritiDosha: TestDefinition = {
  slug: "prakriti-dosha",
  title: "Prakriti Dosha Test (प्रकृति)",
  category: "personality",
  description:
    "Ayurveda's ancient system: are you Vata (air), Pitta (fire), or Kapha (earth)? Find your dominant dosha energy.",
  whatYoullLearn:
    "Your dominant dosha, what it explains about your energy and habits, and the classic balance tips for your type.",
  timeMinutes: 4,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by public Ayurvedic concepts (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "vata", label: "Vata (वात: Air)", lowLabel: "Low", highLabel: "High", description: "Quick, creative, restless." },
    { key: "pitta", label: "Pitta (पित्त: Fire)", lowLabel: "Low", highLabel: "High", description: "Driven, sharp, intense." },
    { key: "kapha", label: "Kapha (कफ: Earth)", lowLabel: "Low", highLabel: "High", description: "Calm, loyal, steady." },
  ],
  terms: [
    {
      term: "दोष (Dosha)",
      note: "In Ayurveda, the three energies believed to run body and mind: Vata (air: movement and ideas), Pitta (fire: drive and digestion), Kapha (earth: structure and calm). Everyone contains all three in a personal mix.",
    },
    {
      term: "प्रकृति (Prakriti)",
      note: "'Your nature': your personal dosha combination at birth. Traditional practitioners assess it through pulse and questions; this quiz is the casual version.",
    },
  ],
  typeMeta: {
    vata: {
      label: "Vata: The Creative Wind",
      description:
        "Fast mind, quick enthusiasm, ideas per minute off the charts. Vatas invent what others refine. Balance tip from tradition: warmth, routine, and finishing one thing before starting the next three.",
    },
    pitta: {
      label: "Pitta: The Driven Fire",
      description:
        "Focus, ambition, standards: you convert goals into results like it's digestion. Natural leader energy. Balance tip: cool-down rituals and humor; fire that never rests burns its own house.",
    },
    kapha: {
      label: "Kapha: The Steady Mountain",
      description:
        "Loyalty, patience, endurance: the person everyone leans on and the one who never panics. Balance tip: movement and novelty; mountains erode only when water never visits.",
    },
  },
  balanced: {
    label: "Tridoshic: The Rare Mix",
    description:
      "Nearly equal Vata, Pitta, and Kapha: traditionally considered the hardest to read and the easiest to balance. You borrow wind's ideas, fire's execution, and earth's follow-through as needed.",
  },
  resultType: "radar",
  funFacts: [
    "Ayurveda is thousands of years old and still officially practiced in India alongside modern medicine.",
    "The doshas map loosely onto temperament psychology: Vata ~ idea-generation, Pitta ~ drive, Kapha ~ stability.",
  ],
  disclaimer:
    "A fun quiz inspired by Ayurvedic concepts: not medical advice, diagnosis, or treatment of any kind.",
};
