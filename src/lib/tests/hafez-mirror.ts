import { TestDefinition } from "../types";

// Fal-e Hafez Verse Mirror: Iran's beloved poetry-divination tradition,
// reimagined as a personality quiz. You answer; you receive an archetype
// plus a verse-style line in Hafez's spirit. Reflection, not prophecy.

const questions = [
  // Nightingale — hopeful love
  { id: "hf_n1", text: "I believe the good thing is coming, even with zero evidence yet.", type: "likert" as const, axis: "nightingale", direction: 1 as const },
  { id: "hf_n2", text: "Love and friendship are worth looking foolish for.", type: "likert" as const, axis: "nightingale", direction: 1 as const },
  { id: "hf_n3", text: "I protect my hope carefully, like something that can be stolen.", type: "likert" as const, axis: "nightingale", direction: -1 as const },
  // Sage — quiet wisdom
  { id: "hf_s1", text: "I'd rather understand one thing deeply than know ten things shallowly.", type: "likert" as const, axis: "sage", direction: 1 as const },
  { id: "hf_s2", text: "People describe me as calm even when things are falling apart.", type: "likert" as const, axis: "sage", direction: 1 as const },
  { id: "hf_s3", text: "Silence makes me anxious; I fill it quickly.", type: "likert" as const, axis: "sage", direction: -1 as const },
  // Rebel — defiance of pretense
  { id: "hf_r1", text: "Rules that exist only for appearances deserve to be questioned.", type: "likert" as const, axis: "rebel", direction: 1 as const },
  { id: "hf_r2", text: "I'd rather be honestly disliked than dishonestly liked.", type: "likert" as const, axis: "rebel", direction: 1 as const },
  { id: "hf_r3", text: "I keep my head down around authority, even silly authority.", type: "likert" as const, axis: "rebel", direction: -1 as const },
  // Cupbearer — joy in the present
  { id: "hf_c1", text: "A good evening with friends beats a productive one alone.", type: "likert" as const, axis: "cupbearer", direction: 1 as const },
  { id: "hf_c2", text: "I'm the person who says 'life is short' and means it right now, not someday.", type: "likert" as const, axis: "cupbearer", direction: 1 as const },
  { id: "hf_c3", text: "Enjoying today feels irresponsible when there's work left.", type: "likert" as const, axis: "cupbearer", direction: -1 as const },
];


export const hafezMirror: TestDefinition = {
  slug: "hafez-mirror",
  title: "Fal-e Hafez Verse Mirror (فال حافظ)",
  category: "perception",
  description:
    "Iran's 700-year-old tradition, quiz-ified. Answer questions, meet the Hafez archetype that lives in you, and get a verse-line to keep.",
  whatYoullLearn:
    "Which of Hafez's voices matches how you move through the world — Nightingale, Sage, Rebel, or Cupbearer — and what that voice would whisper to you tonight.",
  timeMinutes: 3,
  itemCount: 12,
  license:
    "Original TypologyQuiz items inspired by themes from the Divan of Hafez (public domain poetry tradition; self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "nightingale", label: "Nightingale (بلبل)", lowLabel: "Low", highLabel: "High", description: "Hope that sings anyway." },
    { key: "sage", label: "Sage (عاقل)", lowLabel: "Low", highLabel: "High", description: "Quiet depth and stillness." },
    { key: "rebel", label: "Rebel (یاغی)", lowLabel: "Low", highLabel: "High", description: "Honest defiance of pretense." },
    { key: "cupbearer", label: "Cupbearer (ساقی)", lowLabel: "Low", highLabel: "High", description: "Joy poured into the present." },
  ],
  terms: [
    {
      term: "فال حافظ (Fal-e Hafez)",
      note: "'Hafez divination' — Iran's most beloved ritual. You make a wish, open the Divan of Hafez at random, and read that poem as guidance. Families have done this for centuries, seriously and playfully.",
    },
    {
      term: "Divan of Hafez",
      note: "The collected poems of Hafez, a 14th-century Persian poet from Shiraz. Nearly every Iranian household owns a copy; his tomb is a national shrine.",
    },
    {
      term: "غزل (Ghazal)",
      note: "The short sonnet-like poem form Hafez mastered — each one stands alone, mixing love, doubt, joy, and defiance.",
    },
  ],
  typeMeta: {
    nightingale: {
      label: "🐦 The Nightingale",
      description:
        "You hope loudly and on purpose. Your verse-line: 'Even at the end of the story, the sea is waiting.' Keep this voice — the world runs out of Nightingales faster than any other kind of person.",
    },
    sage: {
      label: "🌙 The Sage",
      description:
        "You carry quiet like it's furniture you own. Your verse-line: 'The moon does not hurry, and still she arrives.' People borrow your calm without asking; charge them occasionally in honesty.",
    },
    rebel: {
      label: "🔥 The Rebel",
      description:
        "Pretense cannot survive a conversation with you. Your verse-line: 'The wine-keeper scolds me; the flowers nod in agreement.' Hafez would have liked you immediately. Aim the fire at systems, not people.",
    },
    cupbearer: {
      label: "🍷 The Cupbearer",
      description:
        "In Hafez's poetry, the saqi pours joy right now, not after the work is done. That's your whole philosophy. Your verse-line: 'Today's bread tastes better than tomorrow's feast.' Pour some for the Sages too.",
    },
  },
  balanced: {
    label: "✨ The Open Page",
    description:
      "No single voice owns your book. Like a real fal, what you find depends on the day you open it: hopeful, wise, defiant, or thirsty for tonight. The Divan itself refuses to be one thing. So do you.",
  },
  resultType: "orbit",
  funFacts: [
    "Iranians do fal-e Hafez on Yalda Night (the winter solstice) with pomegranates and poetry — basically a national holiday of hope.",
    "This quiz borrows Hafez's themes, not fortune-telling. The real tradition says the poem finds YOU — no quiz required.",
  ],
  disclaimer:
    "Inspired by a poetic tradition, offered as reflection only — not divination, prophecy, or religious guidance.",
};

