import { TestDefinition } from "../types";

// Saju Pillar Energy: the Korean five-element system as a personality quiz.
// Type quiz over 5 element axes (오행 / ohaeng). No birth data needed —
// this reads your *behavioral* element, not a fortune.

const questions = [
  // Wood (목) — growth, drive, initiative
  { id: "sj_w1", text: "When I want something to change, I start moving before anyone agrees.", type: "likert" as const, axis: "wood", direction: 1 as const },
  { id: "sj_w2", text: "I get restless if I stay in the same place (job, hobby, or route) too long.", type: "likert" as const, axis: "wood", direction: 1 as const },
  { id: "sj_w3", text: "Slow starts and long waiting periods come naturally to me.", type: "likert" as const, axis: "wood", direction: -1 as const },
  // Fire (화) — expression, passion, visibility
  { id: "sj_f1", text: "I show what I feel immediately; my face announces everything.", type: "likert" as const, axis: "fire", direction: 1 as const },
  { id: "sj_f2", text: "Rooms tend to notice when I arrive, and I don't mind it.", type: "likert" as const, axis: "fire", direction: 1 as const },
  { id: "sj_f3", text: "I keep my excitement and opinions mostly to myself.", type: "likert" as const, axis: "fire", direction: -1 as const },
  // Earth (토) — steadiness, care, reliability
  { id: "sj_e1", text: "Friends call me when they need someone steady, not someone exciting.", type: "likert" as const, axis: "earth", direction: 1 as const },
  { id: "sj_e2", text: "I'm the one who remembers birthdays, allergies, and who owes what.", type: "likert" as const, axis: "earth", direction: 1 as const },
  { id: "sj_e3", text: "Routine bores me; I'd rather improvise than maintain anything.", type: "likert" as const, axis: "earth", direction: -1 as const },
  // Metal (금) — precision, standards, discipline
  { id: "sj_m1", text: "If something's worth doing, it's worth doing properly. Cutting corners bothers me.", type: "likert" as const, axis: "metal", direction: 1 as const },
  { id: "sj_m2", text: "I have high standards for myself and quietly for others too.", type: "likert" as const, axis: "metal", direction: 1 as const },
  { id: "sj_m3", text: "'Good enough' is a phrase I use often and mean.", type: "likert" as const, axis: "metal", direction: -1 as const },
  // Water (수) — adaptability, depth, quiet thinking
  { id: "sj_h1", text: "I think best alone, and my best ideas arrive after long silence.", type: "likert" as const, axis: "water", direction: 1 as const },
  { id: "sj_h2", text: "I adjust easily when plans change; going with the flow suits me.", type: "likert" as const, axis: "water", direction: 1 as const },
  { id: "sj_h3", text: "I prefer saying the thing directly over hinting around it.", type: "likert" as const, axis: "water", direction: -1 as const },
];

export const sajuPillar: TestDefinition = {
  slug: "saju-pillar",
  title: "Saju Pillar Test (사주)",
  category: "personality",
  description:
    "Korean five-element typing, no birth chart needed. Find your dominant element: Wood, Fire, Earth, Metal, or Water.",
  whatYoullLearn:
    "Your behavioral element in the saju tradition: how you grow, burn, ground, sharpen, or flow.",
  timeMinutes: 4,
  itemCount: 15,
  license: "Original TypologyQuiz items inspired by the East Asian five-element framework (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,
  axes: [
    { key: "wood", label: "Wood (목)", lowLabel: "Low", highLabel: "High", description: "Growth, initiative, forward push." },
    { key: "fire", label: "Fire (화)", lowLabel: "Low", highLabel: "High", description: "Expression, passion, visibility." },
    { key: "earth", label: "Earth (토)", lowLabel: "Low", highLabel: "High", description: "Steadiness, care, reliability." },
    { key: "metal", label: "Metal (금)", lowLabel: "Low", highLabel: "High", description: "Precision, standards, discipline." },
    { key: "water", label: "Water (수)", lowLabel: "Low", highLabel: "High", description: "Depth, adaptability, quiet thinking." },
  ],
  terms: [
    {
      term: "사주 (Saju)",
      note: "Short for saju palja, 'four pillars of destiny': a Korean system built on your birth year, month, day, and hour. This quiz skips birth data entirely and reads your everyday behavior instead.",
    },
    {
      term: "오행 (Ohaeng): Five Elements",
      note: "Wood, Fire, Earth, Metal, Water: the classical East Asian framework for how energy moves. Everyone carries all five in different amounts.",
    },
  ],
  typeMeta: {
    wood: {
      label: "Wood Pillar (목)",
      description:
        "You're growth-oriented by default: start things, push forward, expand. Wood shines in new projects and first moves nobody else dares. Watch-out: trees that never rest snap in storms. Schedule stillness.",
    },
    fire: {
      label: "Fire Pillar (화)",
      description:
        "You express first and edit later. People warm up fast around you because the enthusiasm is real. Watch-out: fire needs fuel and oxygen; protect your energy or you'll burn out spectacularly.",
    },
    earth: {
      label: "Earth Pillar (토)",
      description:
        "You're the load-bearing friend. Reliable, patient, genuinely present: people build plans on you without asking. Watch-out: even mountains erode when everyone mines them. Say no once a week, minimum.",
    },
    metal: {
      label: "Metal Pillar (금)",
      description:
        "Standards. Precision. The discipline others borrow. When something matters, you do it properly and it shows. Watch-out: high standards cut both ways; soften them toward yourself before they rust into self-criticism.",
    },
    water: {
      label: "Water Pillar (수)",
      description:
        "Deep, adaptable, hard to read on purpose. You think before speaking and adjust where others break. Watch-out: water that only flows inward gets stale. Share one unfiltered thought per week with an actual person.",
    },
  },
  balanced: {
    label: "The Balanced Cycle",
    description:
      "No single element dominates; you cycle through them like the ohaeng itself: pushing, expressing, grounding, refining, reflecting. In saju terms that's considered a lucky configuration. Use it.",
  },
  resultType: "radar",
  funFacts: [
    "Real saju reading uses your exact birth date AND hour; many Koreans check theirs yearly like a personality weather forecast.",
    "AI saju apps exploded in Korea recently; traditional fortunetellers say business is changing fast.",
    "The elements feed each other in a cycle: water feeds wood, wood feeds fire, fire makes earth, earth bears metal, metal collects water.",
  ],
  disclaimer:
    "This is a fun self-reflection take on the five-element framework, not real saju divination and not a destiny reading.",
};

