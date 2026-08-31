import { TestDefinition } from "../types";

// Doubutsu Uranai (動物占い): Japan's animal fortune archetypes, quiz-ified.
// Type quiz over four animal axes.

const questions = [
  // Shiba 犬 — loyal, sunny, straightforward
  { id: "du_s1", text: "I'm loyal to my people to a degree that surprises even me.", type: "likert" as const, axis: "shiba", direction: 1 as const },
  { id: "du_s2", text: "What you see is what you get; I don't do hidden agendas.", type: "likert" as const, axis: "shiba", direction: 1 as const },
  { id: "du_s3", text: "I hold grudges longer than I should.", type: "likert" as const, axis: "shiba", direction: -1 as const },
  // Cat 猫 — independent, elegant, selective
  { id: "du_c1", text: "I choose when to be social; affection on demand doesn't work with me.", type: "likert" as const, axis: "cat", direction: 1 as const },
  { id: "du_c2", text: "People describe me as effortlessly cool, maybe slightly mysterious.", type: "likert" as const, axis: "cat", direction: 1 as const },
  { id: "du_c3", text: "Being alone for long stretches makes me restless.", type: "likert" as const, axis: "cat", direction: -1 as const },
  // Owl 梟 — wise, watchful, night-minded
  { id: "du_o1", text: "I observe quietly and understand more than I say.", type: "likert" as const, axis: "owl", direction: 1 as const },
  { id: "du_o2", text: "My best thinking happens at night.", type: "likert" as const, axis: "owl", direction: 1 as const },
  { id: "du_o3", text: "I speak before I think more often than I'd like.", type: "likert" as const, axis: "owl", direction: -1 as const },
  // Kitsune 狐 — clever, adaptive, playful
  { id: "du_k1", text: "I find clever routes around problems that stop other people.", type: "likert" as const, axis: "kitsune", direction: 1 as const },
  { id: "du_k2", text: "I'm a natural charmer when I want something.", type: "likert" as const, axis: "kitsune", direction: 1 as const },
  { id: "du_k3", text: "Deception of any kind genuinely bothers me.", type: "likert" as const, axis: "kitsune", direction: -1 as const },
];

export const doubutsuUranai: TestDefinition = {
  slug: "doubutsu-uranai",
  title: "Doubutsu Uranai Animal Test (動物占い)",
  category: "personality",
  description:
    "Japan's beloved animal personality system. Are you Shiba, Cat, Owl, or Kitsune? Answer honestly; animals can tell.",
  whatYoullLearn:
    "Your animal archetype, its Japanese meaning, and what your animal brings to its pack (or refuses to).",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by public animal-typology traditions (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "shiba", label: "Shiba (犬)", lowLabel: "Low", highLabel: "High", description: "Loyal, sunny, straightforward." },
    { key: "cat", label: "Cat (猫)", lowLabel: "Low", highLabel: "High", description: "Independent, elegant, selective." },
    { key: "owl", label: "Owl (梟)", lowLabel: "Low", highLabel: "High", description: "Wise, watchful, night-minded." },
    { key: "kitsune", label: "Kitsune (狐)", lowLabel: "Low", highLabel: "High", description: "Clever, adaptive, playful." },
  ],
  terms: [
    {
      term: "動物占い (Doubutsu uranai)",
      note: "'Animal fortune-telling': a hugely popular Japanese personality system that assigns everyone an animal archetype based on traits. It's the grandfather of modern animal quizzes across Asia.",
    },
    {
      term: "狐 (Kitsune)",
      note: "The fox of Japanese folklore: famously clever, shapeshifting, and charming. In stories, a kitsune's cleverness can be mischief or wisdom depending on its heart.",
    },
  ],
  typeMeta: {
    shiba: {
      label: "The Shiba",
      description:
        "Sunshine in dog form. You love your people obviously and completely, and everyone knows exactly where they stand with you. Superpower: trust that never needs auditing. Watch-out: even shibas need alone time in the sun spot. Take it without guilt.",
    },
    cat: {
      label: "The Cat",
      description:
        "Elegant, independent, affectionate strictly on your own schedule. People work hard for your attention and somehow enjoy it. Watch-out: cats get assumed cold when they're actually just busy. One visible act of care per week clears that up.",
    },
    owl: {
      label: "The Owl",
      description:
        "You watch everything twice and speak once. Your quiet reads of rooms make people feel deeply understood when you do talk. Watch-out: wisdom unspoken gets credited to louder birds. Say the smart thing out loud sometimes.",
    },
    kitsune: {
      label: "The Kitsune",
      description:
        "Clever routes, quick charm, playful misdirection. Every group needs one fox or nothing fun ever gets planned. Watch-out: folklore warns foxes about their own tricks; keep your cleverness honest and it stays magic.",
    },
  },
  balanced: {
    label: "The Shapeshifter Spirit",
    description:
      "Dog loyalty, cat independence, owl patience, fox wit: your spirit animal refuses to pick a species. In doubutsu uranai tradition, that makes you a rare one. Use each animal when its season arrives.",
  },
  resultType: "radar",
  funFacts: [
    "Doubutsu uranai became a national craze in Japan through books and TV; friends still compare animals decades later.",
    "In Japanese folklore, seeing a fox's true form means it trusts you completely. Same rule applies to fox-personality humans.",
  ],
  disclaimer:
    "A fun quiz inspired by animal-typology traditions, not fortune-telling, just personality reflection with fur on it.",
};
