import { TestDefinition } from "../types";

// Anansi Folklore Archetype: West African folk-tale characters.
// Type quiz, 4 axes x 3 items. Folklore characters only — not religious figures.

const questions = [
  // Anansi — clever trickster
  { id: "an_a1", text: "Wit beats force in almost every situation I can think of.", type: "likert" as const, axis: "anansi", direction: 1 as const },
  { id: "an_a2", text: "I find the loophole. Every time. It's a gift and a curse.", type: "likert" as const, axis: "anansi", direction: 1 as const },
  { id: "an_a3", text: "Straightforward effort is more my style than clever angles.", type: "likert" as const, axis: "anansi", direction: -1 as const },
  // Tortoise — patient wisdom
  { id: "an_t1", text: "Slow and steady isn't a joke to me; it's literally my strategy.", type: "likert" as const, axis: "tortoise", direction: 1 as const },
  { id: "an_t2", text: "I win arguments by simply refusing to be rushed.", type: "likert" as const, axis: "tortoise", direction: 1 as const },
  { id: "an_t3", text: "Speed and boldness get results; patience mostly loses windows.", type: "likert" as const, axis: "tortoise", direction: -1 as const },
  // Mwindo — the celebrated hero
  { id: "an_h1", text: "I was telling people about my plans before I had any plans.", type: "likert" as const, axis: "hero", direction: 1 as const },
  { id: "an_h2", text: "Big self-belief has carried me through things talent alone wouldn't.", type: "likert" as const, axis: "hero", direction: 1 as const },
  { id: "an_h3", text: "Tooting my own horn feels wrong; let work speak.", type: "likert" as const, axis: "hero", direction: -1 as const },
  // Weaver — quiet creator
  { id: "an_w1", text: "I connect people and ideas that don't seem related until I do it.", type: "likert" as const, axis: "weaver", direction: 1 as const },
  { id: "an_w2", text: "My best work happens quietly in the background.", type: "likert" as const, axis: "weaver", direction: 1 as const },
  { id: "an_w3", text: "Working unseen means working unthanked, not for me.", type: "likert" as const, axis: "weaver", direction: -1 as const },
];

export const anansiArchetype: TestDefinition = {
  slug: "anansi-archetype",
  title: "African Folklore Archetype Test",
  category: "character",
  description:
    "Anansi the trickster, the patient Tortoise, the bold hero Mwindo, the silent Weaver. Which folk-tale archetype carries your energy?",
  whatYoullLearn:
    "Your folklore archetype, the tale it comes from, and the strength it lends you.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by public-domain West African folk tales (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "anansi", label: "Anansi", lowLabel: "Low", highLabel: "High", description: "Wit over force, always." },
    { key: "tortoise", label: "Tortoise", lowLabel: "Low", highLabel: "High", description: "Patience as a weapon." },
    { key: "hero", label: "Bold Hero", lowLabel: "Low", highLabel: "High", description: "Confidence loud enough to be destiny." },
    { key: "weaver", label: "Weaver", lowLabel: "Low", highLabel: "High", description: "Quiet connector of threads." },
  ],
  terms: [
    {
      term: "Anansi",
      note: "The trickster spider of West African and Caribbean folk tales: clever, funny, morally complicated, and the most famous folklore character exported from Ghana to the world.",
    },
    {
      term: "Mwindo",
      note: "The hero of an epic Congolese tale, a boy who sang his own birth announcement and defeated everything thrown at him. Confidence as a superpower.",
    },
  ],
  typeMeta: {
    anansi: {
      label: "The Anansi Type",
      description:
        "Brains first, last, and always. You talk your way past obstacles others brute-force. The tales warn Anansi's tricks sometimes backfire; keep one honest anchor habit so cleverness never becomes con-artistry.",
    },
    tortoise: {
      label: "The Tortoise Type",
      description:
        "In the famous tale, the Tortoise out-thinks faster animals by simply refusing their timeline. You embody it: unhurried, unshakeable, quietly winning. Watch-out: some races genuinely reward early starts; pick which ones matter.",
    },
    hero: {
      label: "The Bold Hero Type",
      description:
        "Mwindo announced himself before he could walk, and honestly? Same energy. Your self-belief bends reality more than you admit. Watch-out: epics humble their heroes eventually; stay coachable and the arc stays upward.",
    },
    weaver: {
      label: "The Weaver Type",
      description:
        "You connect people, ideas, and plans invisibly until the pattern shows and everyone wonders how. Every community runs on Weavers. Watch-out: unseen work still deserves credit; surface for recognition sometimes.",
    },
  },
  balanced: {
    label: "The Storyteller's Favorite",
    description:
      "Trickster wit, tortoise patience, heroic confidence, weaver patience: folk tales would fight over casting you. That's not indecision; that's a whole anthology.",
  },
  resultType: "orbit",
  funFacts: [
    "Anansi stories crossed the Atlantic with the African diaspora and became foundational in Caribbean folklore.",
    "In many tales, Anansi wins by losing first; the trickster's real lesson is resilience through cleverness.",
  ],
  disclaimer:
    "Built respectfully on public-domain folk tales: folklore characters only, no religious figures or claims.",
};
