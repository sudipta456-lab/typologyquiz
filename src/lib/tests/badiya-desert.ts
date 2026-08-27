import { TestDefinition } from "../types";

// Badiya Desert Archetype (بادية): Gulf desert symbolism as personality quiz.
// Type quiz, 4 axes x 3 items.

const questions = [
  // Falcon — focus & precision
  { id: "bd_f1", text: "Once I lock onto a goal, nothing shakes my aim.", type: "likert" as const, axis: "falcon", direction: 1 as const },
  { id: "bd_f2", text: "Precision is satisfying to me in a way speed never will be.", type: "likert" as const, axis: "falcon", direction: 1 as const },
  { id: "bd_f3", text: "I get distracted easily and chase whatever moves.", type: "likert" as const, axis: "falcon", direction: -1 as const },
  // Oryx — grace under pressure
  { id: "bd_o1", text: "I stay composed in conditions that break other people.", type: "likert" as const, axis: "oryx", direction: 1 as const },
  { id: "bd_o2", text: "People describe me as quietly strong rather than loudly tough.", type: "likert" as const, axis: "oryx", direction: 1 as const },
  { id: "bd_o3", text: "Pressure shows on me fast — everyone can tell.", type: "likert" as const, axis: "oryx", direction: -1 as const },
  // Camel — endurance
  { id: "bd_c1", text: "Long hauls don't intimidate me; I outlast things.", type: "likert" as const, axis: "camel", direction: 1 as const },
  { id: "bd_c2", text: "Consistency is my superpower; I show up every single day.", type: "likert" as const, axis: "camel", direction: 1 as const },
  { id: "bd_c3", text: "Sprints suit me better than marathons.", type: "likert" as const, axis: "camel", direction: -1 as const },
  // Date palm — shelter & generosity
  { id: "bd_p1", text: "People gather around me when they need stability.", type: "likert" as const, axis: "palm", direction: 1 as const },
  { id: "bd_p2", text: "Providing for others — food, shelter, support — comes naturally.", type: "likert" as const, axis: "palm", direction: 1 as const },
  { id: "bd_p3", text: "Rootedness bores me; I'd rather roam.", type: "likert" as const, axis: "palm", direction: -1 as const },
];

export const badiyaDesert: TestDefinition = {
  slug: "badiya-desert",
  title: "Badiya Desert Archetype Test (بادية)",
  category: "personality",
  description:
    "The desert teaches four kinds of strength. Which one is yours — Falcon's focus, Oryx's grace, Camel's endurance, or the Palm's shelter?",
  whatYoullLearn:
    "Your desert archetype from Gulf tradition and what it does better than everyone else.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by public Gulf cultural symbols (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "falcon", label: "Falcon (صقر)", lowLabel: "Low", highLabel: "High", description: "Locks on, never wavers." },
    { key: "oryx", label: "Oryx (مها)", lowLabel: "Low", highLabel: "High", description: "Grace that pressure can't crack." },
    { key: "camel", label: "Camel (جمل)", lowLabel: "Low", highLabel: "High", description: "Outlasts everything." },
    { key: "palm", label: "Date Palm (نخلة)", lowLabel: "Low", highLabel: "High", description: "Shelter and provision." },
  ],
  terms: [
    {
      term: "بادية (Bādiya)",
      note: "'The desert / badlands' — the Arabian desert interior. Gulf culture reads character through its symbols: the hunting falcon, the oryx, the camel, and the date palm that makes life possible.",
    },
    {
      term: "الصقر (Al-saqr)",
      note: "The falcon — the national bird of several Gulf states. Falconry is a UNESCO-listed heritage art; a great falcon represents focus, nobility, and precision.",
    },
  ],
  typeMeta: {
    falcon: {
      label: "🦅 The Falcon",
      description:
        "You see the target before others know there is one. Focus is your whole personality and your competitive edge. Watch-out: falcons fly solo too well — circling back to the flock costs you nothing and pays plenty.",
    },
    oryx: {
      label: "🦌 The Oryx",
      description:
        "Composure in brutal conditions — heat, drought, pressure — without ever looking bothered. People mistake your calm for ease. Watch-out: let someone see the effort occasionally; grace hides too well.",
    },
    camel: {
      label: "🐪 The Camel",
      description:
        "The desert's engineer: unglamorous consistency that crosses impossible distances daily. Everyone relies on you arriving. Watch-out: camels store reserves silently — tell people when your well runs low.",
    },
    palm: {
      label: "🌴 The Date Palm",
      description:
        "Roots deep, shade wide, fruit generous. You create the conditions other people survive in. Watch-out: palms give from their own soil — replenish yourself or the harvest thins.",
    },
  },
  balanced: {
    label: "🏜️ The Caravan Leader",
    description:
      "Falcon focus, oryx composure, camel endurance, palm generosity — the full desert skill tree. In caravan terms: everyone wants to travel in yours. Just remember leaders also sleep.",
  },
  resultType: "radar",
  funFacts: [
    "Date palms can produce for over a century — generosity as a lifestyle, not a phase.",
    "Oryx went extinct in the wild and was famously bred back and re-released — resilience even as a species.",
  ],
  disclaimer:
    "A respectful quiz built on Gulf cultural symbols — celebration of heritage imagery, not a claim about identity.",
};
