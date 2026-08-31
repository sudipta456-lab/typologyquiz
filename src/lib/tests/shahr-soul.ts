import { TestDefinition } from "../types";

// Shahr Soul Test (شهر): which Iranian city matches your personality.
// Type quiz, 4 axes x 3 items. Affectionate regional archetypes.

const questions = [
  // Tehran — the showman
  { id: "sr_t1", text: "I bring energy to a room before anyone brings it to me.", type: "likert" as const, axis: "tehran", direction: 1 as const },
  { id: "sr_t2", text: "I like being where things happen: fast, loud, and now.", type: "likert" as const, axis: "tehran", direction: 1 as const },
  { id: "sr_t3", text: "Slow places and slow people drain me quickly.", type: "likert" as const, axis: "tehran", direction: -1 as const },
  // Shiraz — the poet
  { id: "sr_p1", text: "Beauty and meaning matter more to me than efficiency.", type: "likert" as const, axis: "shiraz", direction: 1 as const },
  { id: "sr_p2", text: "I've been called romantic, dreamy, or 'somewhere else' more than once.", type: "likert" as const, axis: "shiraz", direction: 1 as const },
  { id: "sr_p3", text: "Practical concerns usually outrank pretty ones for me.", type: "likert" as const, axis: "shiraz", direction: -1 as const },
  // Isfahan — the artist
  { id: "sr_i1", text: "I notice details other people walk straight past.", type: "likert" as const, axis: "isfahan", direction: 1 as const },
  { id: "sr_i2", text: "Doing something carefully and beautifully is worth the extra time.", type: "likert" as const, axis: "isfahan", direction: 1 as const },
  { id: "sr_i3", text: "Good enough fast beats perfect late, in my book.", type: "likert" as const, axis: "isfahan", direction: -1 as const },
  // Tabriz — the dealmaker
  { id: "sr_b1", text: "I can negotiate anything: prices, plans, group decisions.", type: "likert" as const, axis: "tabriz", direction: 1 as const },
  { id: "sr_b2", text: "Practical, steady, and shrewd: friends would use these words.", type: "likert" as const, axis: "tabriz", direction: 1 as const },
  { id: "sr_b3", text: "Haggling and negotiating make me deeply uncomfortable.", type: "likert" as const, axis: "tabriz", direction: -1 as const },
];

export const shahrSoul: TestDefinition = {
  slug: "shahr-soul",
  title: "Shahr Soul Test (شهر)",
  category: "personality",
  description:
    "Every Iranian city has a personality everyone jokes about. Which city's soul runs yours: Tehran, Shiraz, Isfahan, or Tabriz?",
  whatYoullLearn:
    "Your Iranian-city archetype, why your family already knew, and the stereotype you get to lovingly defy.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "tehran", label: "Tehran (تهران)", lowLabel: "Low", highLabel: "High", description: "Fast, loud, electric." },
    { key: "shiraz", label: "Shiraz (شیراز)", lowLabel: "Low", highLabel: "High", description: "Poetic, romantic, dreamy." },
    { key: "isfahan", label: "Isfahan (اصفهان)", lowLabel: "Low", highLabel: "High", description: "Detailed, artistic, patient." },
    { key: "tabriz", label: "Tabriz (تبریز)", lowLabel: "Low", highLabel: "High", description: "Practical, shrewd, steady." },
  ],
  terms: [
    {
      term: "شهر (Shahr)",
      note: "'City' in Persian. Iranian humor runs on city personalities; every family has jokes about Tehrani showmen and Shirazi poets. This quiz plays affectionately inside that tradition.",
    },
  ],
  typeMeta: {
    tehran: {
      label: "Tehran Energy",
      description:
        "Capital-city voltage: fast talk, big plans, zero patience for boredom. You make things happen by sheer presence. The loving stereotype says showman; the truth is engine. Just schedule actual rest; even capitals close shops sometimes.",
    },
    shiraz: {
      label: "Shiraz Energy",
      description:
        "The city of Hafez, gardens, and nightingales, and you run on the same supply. Beauty-first decisions get called impractical right up until they're unforgettable. Keep the poetry; keep one foot in logistics too.",
    },
    isfahan: {
      label: "Isfahan Energy",
      description:
        "'Isfahan is half the world,' the saying goes: built detail by gorgeous detail. That's you: patient craft over fast output. Your work outlasts louder people's. Just don't let perfection delay shipping entirely.",
    },
    tabriz: {
      label: "Tabriz Energy",
      description:
        "The historic bazaar city: practical, steady, quietly excellent at deals. You get things done at fair prices with zero drama. The stereotype calls it shrewdness; call it clarity instead, but let generosity beat the bargain occasionally.",
    },
  },
  balanced: {
    label: "The Whole Country Tour",
    description:
      "Tehran pace, Shiraz soul, Isfahan patience, Tabriz sense. Honestly the most Iranian result possible: impossible to stereotype. Your friends were never going to fit you in one box anyway.",
  },
  resultType: "radar",
  funFacts: [
    "Ask any Iranian to describe their relatives by city and watch a comedy routine start instantly.",
    "Shiraz literally rhymes with Hafez; the poet lived and is buried there.",
  ],
  disclaimer:
    "Affectionate regional archetypes for fun; real cities and real people are always more complicated.",
};
