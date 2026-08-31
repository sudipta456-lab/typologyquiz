import { TestDefinition } from "../types";

// Ism Vibe Test (اسم): which Arabic name carries your energy.
// Type quiz, 4 axes x 3 items. Answers map to famous name meanings.

const questions = [
  // Nour — light-giver
  { id: "is_n1", text: "People feel brighter after talking to me.", type: "likert" as const, axis: "nour", direction: 1 as const },
  { id: "is_n2", text: "I'm usually lifting moods without making a project of it.", type: "likert" as const, axis: "nour", direction: 1 as const },
  { id: "is_n3", text: "My presence can darken a room when I'm off.", type: "likert" as const, axis: "nour", direction: -1 as const },
  // Karim — generous heart
  { id: "is_k1", text: "Giving (time, food, help) is my default reflex.", type: "likert" as const, axis: "karim", direction: 1 as const },
  { id: "is_k2", text: "Friends know my door and my plate are always open.", type: "likert" as const, axis: "karim", direction: 1 as const },
  { id: "is_k3", text: "I keep resources close; sharing doesn't come naturally.", type: "likert" as const, axis: "karim", direction: -1 as const },
  // Amal — hope carrier
  { id: "is_a1", text: "Even in bad chapters, I genuinely believe the story improves.", type: "likert" as const, axis: "amal", direction: 1 as const },
  { id: "is_a2", text: "People call me hopeful like it's my job title.", type: "likert" as const, axis: "amal", direction: 1 as const },
  { id: "is_a3", text: "Realism rules me; hoping feels naive.", type: "likert" as const, axis: "amal", direction: -1 as const },
  // Faris — knight/protector
  { id: "is_f1", text: "When someone's being wronged, I move toward it, not away.", type: "likert" as const, axis: "faris", direction: 1 as const },
  { id: "is_f2", text: "Standing up for my people isn't bravery; it's just obvious.", type: "likert" as const, axis: "faris", direction: 1 as const },
  { id: "is_f3", text: "Confrontation is something I go out of my way to avoid.", type: "likert" as const, axis: "faris", direction: -1 as const },
];

export const ismVibe: TestDefinition = {
  slug: "ism-vibe",
  title: "Ism Vibe Test (اسم)",
  category: "character",
  description:
    "Arabic names carry meanings with real weight. Answer honestly and find which famous name fits the person you actually are.",
  whatYoullLearn:
    "Your Arabic name match (Nour, Karim, Amal, or Faris), its exact meaning, and whether you live up to it.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by public name-meaning traditions (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "nour", label: "Nour (نور)", lowLabel: "Low", highLabel: "High", description: "Light-giver, mood-lifter." },
    { key: "karim", label: "Karim (کریم)", lowLabel: "Low", highLabel: "High", description: "Generous heart, open door." },
    { key: "amal", label: "Amal (أمل)", lowLabel: "Low", highLabel: "High", description: "Hope carrier." },
    { key: "faris", label: "Faris (فارس)", lowLabel: "Low", highLabel: "High", description: "Knight, protector." },
  ],
  terms: [
    {
      term: "اسم (Ism)",
      note: "'Name' in Arabic. Arabic names are chosen for their meanings (hope, light, generosity, courage) and those meanings are treated like small destinies. This quiz asks which meaning already lives in you.",
    },
  ],
  typeMeta: {
    nour: {
      label: "Nour: 'Light'",
      description:
        "You brighten rooms without trying, and people warm up before they know why. A name given to thousands because it keeps being true. Watch-out: lights that stay on all night burn out; protect your own dimmer switch.",
    },
    karim: {
      label: "Karim: 'Generous'",
      description:
        "Your table, time, and help exist for other people, cheerfully. Generosity is the most respected trait in Arab hospitality culture, and you embody it daily. Watch-out: karim also means noble; nobility includes receiving. Let someone give back this week.",
    },
    amal: {
      label: "Amal: 'Hope'",
      description:
        "You carry optimism like identification papers. In hard seasons, people borrow your eyes to see better days. Watch-out: hope needs rest too; you're allowed bad days without losing the title.",
    },
    faris: {
      label: "Faris: 'Knight / Horseman'",
      description:
        "You move toward trouble when others move away. Protection isn't heroism to you; it's just obvious behavior. Watch-out: knights need squires; share the load or the armor gets heavy.",
    },
  },
  balanced: {
    label: "The Name Still Being Chosen",
    description:
      "Light, generosity, hope, courage: traces of all four. Traditionally, families took days choosing a name to get this right. You're not undecided; you're multi-capable.",
  },
  resultType: "orbit",
  funFacts: [
    "'Amal' became globally famous as a name precisely because its meaning travels across every language.",
    "In many Arab families, a child's name meaning is explained to them growing up; the name doubles as advice.",
  ],
  disclaimer:
    "A playful quiz about name meanings and personality. Whatever your actual name, this one's just for fun.",
};
