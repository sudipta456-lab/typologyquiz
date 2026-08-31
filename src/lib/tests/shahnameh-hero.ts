import { TestDefinition } from "../types";

// Shahnameh Hero Test: Persian epic archetypes from Ferdowsi's Shahnameh.
// Type quiz, 4 axes x 3 items.

const questions = [
  // Rostam — the protector
  { id: "sh_r1", text: "I step in when someone weaker is being treated unfairly.", type: "likert" as const, axis: "rostam", direction: 1 as const },
  { id: "sh_r2", text: "People feel safe with me around; that matters more than being liked.", type: "likert" as const, axis: "rostam", direction: 1 as const },
  { id: "sh_r3", text: "Conflict makes me disappear rather than intervene.", type: "likert" as const, axis: "rostam", direction: -1 as const },
  // Gordafarid — the unexpected warrior
  { id: "sh_g1", text: "Underestimating me is the last mistake people make twice.", type: "likert" as const, axis: "gordafarid", direction: 1 as const },
  { id: "sh_g2", text: "I've proven people wrong about my limits more than once.", type: "likert" as const, axis: "gordafarid", direction: 1 as const },
  { id: "sh_g3", text: "I'd rather be underestimated than have to prove myself again.", type: "likert" as const, axis: "gordafarid", direction: -1 as const },
  // Siyavash — the honorable
  { id: "sh_s1", text: "Some lines I won't cross even if crossing costs me everything.", type: "likert" as const, axis: "siyavash", direction: 1 as const },
  { id: "sh_s2", text: "My reputation for fairness is something I protect carefully.", type: "likert" as const, axis: "siyavash", direction: 1 as const },
  { id: "sh_s3", text: "Small compromises for big wins? Show me the win.", type: "likert" as const, axis: "siyavash", direction: -1 as const },
  // Sohrab — the storm
  { id: "sh_b1", text: "I burn bright for my goals and refuse quiet, small versions of life.", type: "likert" as const, axis: "sohrab", direction: 1 as const },
  { id: "sh_b2", text: "Being ordinary frightens me more than failing loudly does.", type: "likert" as const, axis: "sohrab", direction: 1 as const },
  { id: "sh_b3", text: "Ambition is fine but peace matters more to me.", type: "likert" as const, axis: "sohrab", direction: -1 as const },
];

export const shahnamehHero: TestDefinition = {
  slug: "shahnameh-hero",
  title: "Shahnameh Hero Test (شاهنامه)",
  category: "character",
  description:
    "Persia's great epic has heroes for every soul. Are you Rostam the protector, Gordafarid the warrior, Siyavash the honorable, or Sohrab the storm?",
  whatYoullLearn:
    "Your epic archetype, its story, and the flaw every hero of your type must watch.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by the public-domain Shahnameh epic (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "rostam", label: "Rostam (رستم)", lowLabel: "Low", highLabel: "High", description: "The mighty protector." },
    { key: "gordafarid", label: "Gordafarid (گردآفرید)", lowLabel: "Low", highLabel: "High", description: "The underestimated warrior." },
    { key: "siyavash", label: "Siyavash (سیاوش)", lowLabel: "Low", highLabel: "High", description: "The unbending honorable one." },
    { key: "sohrab", label: "Sohrab (سهراب)", lowLabel: "Low", highLabel: "High", description: "The bright, burning storm." },
  ],
  terms: [
    {
      term: "شاهنامه (Shahnameh)",
      note: "'Book of Kings': Ferdowsi's 11th-century epic of over 50,000 verses covering Persia's mythical history. Iranians treat it the way the West treats Greek mythology: stories everyone knows by heart.",
    },
    {
      term: "Gordāfarid",
      note: "A warrior heroine of the Shahnameh who defended a fortress nearly alone and out-fought a legendary invader. Her name literally contains 'farid', unique.",
    },
  ],
  typeMeta: {
    rostam: {
      label: "Rostam: The Protector",
      description:
        "Strength deployed for other people. You carry what others can't and stand where it's hardest. Rostam's flaw was pride in his own strength; yours shows up as never asking for help. Ask once this week.",
    },
    gordafarid: {
      label: "Gordafarid: The Unexpected Warrior",
      description:
        "They underestimate you, then they learn. Your power peaks exactly when things look worst. Gordafarid's lesson: you don't owe anyone proof, but watching them realize is admittedly excellent.",
    },
    siyavash: {
      label: "Siyavash: The Honorable",
      description:
        "Integrity before survival. People trust you with the things that matter because your lines don't move. Siyavash's tragedy was honor without armor; keep your principles, but build boundaries around them.",
    },
    sohrab: {
      label: "Sohrab: The Storm",
      description:
        "Bright, burning, allergic to smallness. Your ambition is a force of nature and twice as loud. Sohrab's flaw was speed; storms that don't check maps collide with their own fathers. Pause once. Look around. Then charge.",
    },
  },
  balanced: {
    label: "The Epic Ensemble",
    description:
      "Protector, warrior, honorable one, storm: the whole cast lives in you. Epics need ensembles. Rotate leads depending on the chapter.",
  },
  resultType: "radar",
  funFacts: [
    "Ferdowsi finished the Shahnameh around 1010 CE, saying 'I revived Persia through my verse', roughly accurate, honestly.",
    "Gordafarid is one of literature's oldest written warrior heroines, over a millennium old.",
  ],
  disclaimer:
    "A fun quiz built on epic archetypes: cultural celebration, not a claim about destiny or heritage.",
};
