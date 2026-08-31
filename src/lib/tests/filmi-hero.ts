import { TestDefinition } from "../types";

// Filmi Hero Test (फ़िल्मी): Bollywood archetype energy.
// Type quiz, 4 axes x 3 items.

const questions = [
  // Filmi hero — heart, drama, grand gestures
  { id: "fh_h1", text: "When I commit to something, I commit cinematically.", type: "likert" as const, axis: "hero", direction: 1 as const },
  { id: "fh_h2", text: "My emotions are big, honest, and usually visible from space.", type: "likert" as const, axis: "hero", direction: 1 as const },
  { id: "fh_h3", text: "Grand romantic gestures make me cringe, honestly.", type: "likert" as const, axis: "hero", direction: -1 as const },
  // Anti-hero — shades of grey
  { id: "fh_a1", text: "I find morally complicated characters more interesting than pure ones.", type: "likert" as const, axis: "antihero", direction: 1 as const },
  { id: "fh_a2", text: "I do what needs doing and let others debate whether it was right.", type: "likert" as const, axis: "antihero", direction: 1 as const },
  { id: "fh_a3", text: "Rules and I get along well; I color inside lines happily.", type: "likert" as const, axis: "antihero", direction: -1 as const },
  // Comic relief — timing, lightness
  { id: "fh_c1", text: "Every serious moment eventually gets my commentary track.", type: "likert" as const, axis: "comic", direction: 1 as const },
  { id: "fh_c2", text: "I can defuse any tense scene with one perfectly timed line.", type: "likert" as const, axis: "comic", direction: 1 as const },
  { id: "fh_c3", text: "I take situations seriously first and joke later, if ever.", type: "likert" as const, axis: "comic", direction: -1 as const },
  // Loyal friend — the real backbone
  { id: "fh_f1", text: "I'm the friend who shows up at 3 AM without being asked twice.", type: "likert" as const, axis: "loyal", direction: 1 as const },
  { id: "fh_f2", text: "Other people's victories feel almost as good as my own.", type: "likert" as const, axis: "loyal", direction: 1 as const },
  { id: "fh_f3", text: "I keep my circle small and my favors smaller.", type: "likert" as const, axis: "loyal", direction: -1 as const },
];

export const filmiHero: TestDefinition = {
  slug: "filmi-hero",
  title: "Filmi Hero Test (फ़िल्मी)",
  category: "character",
  description:
    "Bollywood has a role for every personality. Are you the grand Hero, the grey Anti-Hero, the Comic Relief, or the Loyal Best Friend?",
  whatYoullLearn:
    "Your filmi archetype, your signature scene, and why every story needs someone like you in the cast.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by public film-culture tropes (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "hero", label: "Filmi Hero", lowLabel: "Low", highLabel: "High", description: "Big heart, bigger gestures." },
    { key: "antihero", label: "Anti-Hero", lowLabel: "Low", highLabel: "High", description: "Grey shades, own rules." },
    { key: "comic", label: "Comic Relief", lowLabel: "Low", highLabel: "High", description: "Perfect timing, zero fear." },
    { key: "loyal", label: "Loyal Best Friend", lowLabel: "Low", highLabel: "High", description: "The actual backbone." },
  ],
  terms: [
    {
      term: "फ़िल्मी (Filmi)",
      note: "'Of the movies': Hindi for anything with Bollywood's signature drama: grand emotions, sudden songs, and gestures that would be too much anywhere else (which is exactly the point).",
    },
    {
      term: "Masala Movie",
      note: "The classic all-in-one Bollywood recipe: romance, action, comedy, family drama in a single film. If your personality mixes archetypes, you're masala.",
    },
  ],
  typeMeta: {
    hero: {
      label: "The Filmi Hero/Heroine",
      description:
        "You feel at full volume and love at full budget. Slow-motion walks are technically possible for you. Signature scene: the monologue in the rain that changes everyone's mind. Watch-out: not every moment needs background music. Some do, though.",
    },
    antihero: {
      label: "The Anti-Hero",
      description:
        "You live in the greys where interesting people actually live. Effective first, judged later, and history usually sides with you. Signature scene: doing the right thing wrong-ly and winning. Watch-out: grey is a shade, not an address.",
    },
    comic: {
      label: "The Comic Relief Legend",
      description:
        "In every filmi universe, the comedy track steals the film. That's you: tension exits when you enter. Signature scene: one line during the villain's speech that breaks the whole theater. Watch-out: comedians get written out of serious scenes. Demand your dramatic close-up.",
    },
    loyal: {
      label: "The Loyal Best Friend",
      description:
        "Every blockbuster runs on someone like you: 3 AM availability, zero jealousy, endless belief. Audiences know the friend is the real hero. Signature scene: the sacrifice nobody expected. Watch-out: your story deserves its own subplot. Ask for it.",
    },
  },
  balanced: {
    label: "The Full Masala Movie",
    description:
      "Heroic heart, anti-hero edge, comic timing, loyal backbone: a complete film in one person. Producers dream of casting you. Runtime warning: even masala films need an interval.",
  },
  resultType: "bars",
  funFacts: [
    "Indian cinema produces more films per year than Hollywood; the archetypes here are a global language.",
    "'Filmi' started as gentle mockery and became a compliment: maximum emotion, unapologetically.",
  ],
  disclaimer:
    "A fun quiz built on film tropes; no actual intermission or interval song included with results.",
};
