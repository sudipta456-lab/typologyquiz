import { TestDefinition } from "../types";

// Abjad Number Quiz (حساب الجمّل): Arabic letter-numerology archetypes.
// Type quiz mapping traits to classic number personalities.

const questions = [
  // 1 — The Pioneer
  { id: "ab_11", text: "Starting from zero doesn't scare me; it excites me.", type: "likert" as const, axis: "pioneer", direction: 1 as const },
  { id: "ab_12", text: "I naturally end up leading, even when nobody appointed me.", type: "likert" as const, axis: "pioneer", direction: 1 as const },
  { id: "ab_13", text: "I'd rather follow a strong plan than invent one.", type: "likert" as const, axis: "pioneer", direction: -1 as const },
  // 2 — The Peacemaker
  { id: "ab_21", text: "I sense tension between people before anyone says a word.", type: "likert" as const, axis: "peacemaker", direction: 1 as const },
  { id: "ab_22", text: "Partnership and cooperation bring out my best work.", type: "likert" as const, axis: "peacemaker", direction: 1 as const },
  { id: "ab_23", text: "Solo missions suit me better than collaborations.", type: "likert" as const, axis: "peacemaker", direction: -1 as const },
  // 7 — The Seeker
  { id: "ab_71", text: "I need deep answers, not quick ones — surface explanations bug me.", type: "likert" as const, axis: "seeker", direction: 1 as const },
  { id: "ab_72", text: "Solitude recharges me; I seek it on purpose.", type: "likert" as const, axis: "seeker", direction: 1 as const },
  { id: "ab_73", text: "Long reflection sounds boring when I could be doing something.", type: "likert" as const, axis: "seeker", direction: -1 as const },
  // 9 — The Humanitarian
  { id: "ab_91", text: "Other people's problems genuinely become my problems.", type: "likert" as const, axis: "humanitarian", direction: 1 as const },
  { id: "ab_92", text: "I think in terms of 'us' before 'me', almost automatically.", type: "likert" as const, axis: "humanitarian", direction: 1 as const },
  { id: "ab_93", text: "Charity starts at home — and mostly stays there, for me.", type: "likert" as const, axis: "humanitarian", direction: -1 as const },
];

export const abjadNumber: TestDefinition = {
  slug: "abjad-number",
  title: "Abjad Number Quiz (حساب الجمّل)",
  category: "thinking",
  description:
    "The Arabic alphabet's ancient number code meets personality typing. Which Abjad energy runs your life: 1, 2, 7, or 9?",
  whatYoullLearn:
    "Your Abjad archetype — Pioneer, Peacemaker, Seeker, or Humanitarian — and the letter-values behind its meaning.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by public numerology traditions (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "pioneer", label: "1 — Pioneer", lowLabel: "Low", highLabel: "High", description: "Initiates, leads, starts from nothing." },
    { key: "peacemaker", label: "2 — Peacemaker", lowLabel: "Low", highLabel: "High", description: "Harmonizes, partners, senses tension." },
    { key: "seeker", label: "7 — Seeker", lowLabel: "Low", highLabel: "High", description: "Digs deep, needs solitude and truth." },
    { key: "humanitarian", label: "9 — Humanitarian", lowLabel: "Low", highLabel: "High", description: "Carries 'us' before 'me'." },
  ],
  terms: [
    {
      term: "حساب الجمّل (Ḥisāb al-jummal)",
      note: "'Abjad numerals' — the ancient system giving each of the 28 Arabic letters a number value. For centuries it powered chronograms, mysticism, and name-number readings across the Arab and Persian worlds.",
    },
  ],
  typeMeta: {
    pioneer: {
      label: "١ The Pioneer (1 — alif)",
      description:
        "Alif is the first letter, standing tall and alone — so are you in the best way. You start what doesn't exist yet. Watch-out: first movers eat last sometimes. Build a circle, not just a path.",
    },
    peacemaker: {
      label: "٢ The Peacemaker (2 — ba)",
      description:
        "You read rooms like text and harmonize without being asked. Every group quietly depends on you. Watch-out: peace kept by silencing yourself isn't peace. Your voice counts as one of the sides.",
    },
    seeker: {
      label: "٧ The Seeker (7)",
      description:
        "Seven is the mystic's number in Abjad tradition — depth over display. You want truth, not noise. Watch-out: caves are for visiting, not residing. Emerge and share findings.",
    },
    humanitarian: {
      label: "٩ The Humanitarian (9)",
      description:
        "The widest number energy there is: your circle of care has no visible border. Communities sense this and lean on you. Watch-out: 'us' includes you. Feed the ninth letter of your own household first.",
    },
  },
  balanced: {
    label: "٩٩ The Living Alphabet",
    description:
      "Pioneer spark, peacemaker grace, seeker depth, humanitarian reach — several letters strong. In a tradition where letters build words, you're basically a sentence. A good one.",
  },
  resultType: "radar",
  funFacts: [
    "Abjad values still appear today in Arabic wordplay, poetry chronograms, and lucky-number traditions.",
    "The order people learn — alif, ba, ta — literally encodes numbers; generations did math with their alphabet.",
  ],
  disclaimer:
    "Inspired by a historic numerology tradition, offered purely as fun self-reflection — not fortune-telling.",
};
