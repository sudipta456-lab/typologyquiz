import { TestDefinition } from "../types";

// Nakshatra Mirror (नक्षत्र): Vedic moon-mansion archetypes, quiz-ified.
// Type quiz, 4 archetype axes.

const questions = [
  // Pioneer-healer energy (Ashwini-like)
  { id: "nk_a1", text: "I move first and figure things out on the way.", type: "likert" as const, axis: "pioneer", direction: 1 as const },
  { id: "nk_a2", text: "Helping people practically is my instinctive response to their problems.", type: "likert" as const, axis: "pioneer", direction: 1 as const },
  { id: "nk_a3", text: "Waiting for perfect conditions is how I operate.", type: "likert" as const, axis: "pioneer", direction: -1 as const },
  // Nurturer-star energy (Rohini-like)
  { id: "nk_b1", text: "Creating comfort and beauty around me matters deeply.", type: "likert" as const, axis: "nurturer", direction: 1 as const },
  { id: "nk_b2", text: "People naturally gather and settle around my presence.", type: "likert" as const, axis: "nurturer", direction: 1 as const },
  { id: "nk_b3", text: "Domestic comfort bores me; I need movement.", type: "likert" as const, axis: "nurturer", direction: -1 as const },
  // Independent wind energy (Swati-like)
  { id: "nk_c1", text: "Self-reliance isn't a choice; it's my resting state.", type: "likert" as const, axis: "wind", direction: 1 as const },
  { id: "nk_c2", text: "I bend with pressure but never break or beg.", type: "likert" as const, axis: "wind", direction: 1 as const },
  { id: "nk_c3", text: "Depending on others comes easily when I need help.", type: "likert" as const, axis: "wind", direction: -1 as const },
  // Nourishing guide energy (Pushya-like)
  { id: "nk_d1", text: "Guiding and feeding people (literally or figuratively) fills me up.", type: "likert" as const, axis: "guide", direction: 1 as const },
  { id: "nk_d2", text: "I'm the responsible one everyone trusts with important things.", type: "likert" as const, axis: "guide", direction: 1 as const },
  { id: "nk_d3", text: "Being needed drains me more than it sustains me.", type: "likert" as const, axis: "guide", direction: -1 as const },
];

export const nakshatraMirror: TestDefinition = {
  slug: "nakshatra-mirror",
  title: "Nakshatra Mirror Test (नक्षत्र)",
  category: "perception",
  description:
    "Vedic astrology maps 27 lunar mansions, each with its own personality. Which nakshatra energy mirrors yours?",
  whatYoullLearn:
    "Your matching nakshatra archetype (Pioneer, Nurturer, Independent Wind, or Nourishing Guide) and its traditional meaning.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by public Vedic astrology concepts (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "pioneer", label: "Pioneer Star", lowLabel: "Low", highLabel: "High", description: "Moves first, heals fast." },
    { key: "nurturer", label: "Nurturer Star", lowLabel: "Low", highLabel: "High", description: "Creates comfort, draws people in." },
    { key: "wind", label: "Independent Wind", lowLabel: "Low", highLabel: "High", description: "Bends, never breaks or begs." },
    { key: "guide", label: "Nourishing Guide", lowLabel: "Low", highLabel: "High", description: "Trusted keeper and feeder." },
  ],
  terms: [
    {
      term: "नक्षत्र (Nakshatra)",
      note: "The 27 lunar mansions of Vedic astrology: star clusters the moon passes through, each with its own symbol, deity story, and personality flavor. Your birth nakshatra matters more than your sun sign in Indian astrology.",
    },
    {
      term: "Rohini & Pushya",
      note: "Two famous nakshatras: Rohini ('the red one') is the star of growth and charm; Pushya ('nourisher') is considered the most auspicious for care and guidance.",
    },
  ],
  typeMeta: {
    pioneer: {
      label: "The Pioneer Star",
      description:
        "Ashwini-flavored: first out of the gate, hands-on helper, allergic to waiting. Your speed is medicine for slow situations. Watch-out: even fast horses need stable rest.",
    },
    nurturer: {
      label: "The Nurturer Star",
      description:
        "Rohini-flavored: growth follows wherever you stay long enough. Comfort is your art form and people are your garden. Watch-out: gardens also need pruning; say no sometimes.",
    },
    wind: {
      label: "The Independent Wind",
      description:
        "Swati-flavored: the wind bends every tree but stands nowhere. Self-rule is your oxygen. Watch-out: independence can become isolation wearing sunglasses. Let people close occasionally.",
    },
    guide: {
      label: "The Nourishing Guide",
      description:
        "Pushya-flavored: everyone's trusted keeper of responsibilities and snacks. Reliability so consistent it's basically architecture. Watch-out: nourishers deplete quietly. Track your own tank weekly.",
    },
  },
  balanced: {
    label: "The Whole Sky",
    description:
      "Pioneer speed, nurturer warmth, wind freedom, guide reliability: several mansions claim you. In Vedic terms, an unusually well-rounded chart night.",
  },
  resultType: "radar",
  funFacts: [
    "Indian wedding matching traditionally compares couples' full nakshatra charts: compatibility by star mansion.",
    "Each nakshatra has its own symbol: horse heads, carts, bows, lotuses, an entire poetic sky map.",
  ],
  disclaimer:
    "Inspired by Vedic astrology concepts for fun: entertainment and reflection only, not prediction or destiny.",
};
