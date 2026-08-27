import { TestDefinition } from "../types";

// Tangping Level (躺平): how much you've opted out of the rat race.
// Spectrum axis, from full sprint to certified lying flat.

const questions = [
  { id: "tp_01", text: "I've deliberately chosen 'enough' over 'more' at least once.", type: "likert" as const, axis: "rest", direction: 1 as const },
  { id: "tp_02", text: "Hustle culture posts genuinely annoy me.", type: "likert" as const, axis: "rest", direction: 1 as const },
  { id: "tp_03", text: "I protect my evenings like they're load-bearing walls.", type: "likert" as const, axis: "rest", direction: 1 as const },
  { id: "tp_04", text: "A promotion that eats my life is not obviously a win to me.", type: "likert" as const, axis: "rest", direction: 1 as const },
  { id: "tp_05", text: "Rest without productivity feels slightly illegal to me.", type: "likert" as const, axis: "rest", direction: -1 as const },
  { id: "tp_06", text: "I compare my progress with people my age more than I should.", type: "likert" as const, axis: "rest", direction: -1 as const },
  { id: "tp_07", text: "My free time usually contains some kind of self-improvement.", type: "likert" as const, axis: "rest", direction: -1 as const },
  { id: "tp_08", text: "Doing the bare minimum at work is a lifestyle I understand deeply.", type: "likert" as const, axis: "rest", direction: 1 as const },
  { id: "tp_09", text: "I have big goals that regularly cost me sleep or peace.", type: "likert" as const, axis: "rest", direction: -1 as const },
  { id: "tp_10", text: "'Quiet quitting' isn't laziness to me; it's boundary-setting.", type: "likert" as const, axis: "rest", direction: 1 as const },
  { id: "tp_11", text: "Slow mornings are my religion.", type: "likert" as const, axis: "rest", direction: 1 as const },
  { id: "tp_12", text: "Stopping scares me more than burning out does.", type: "likert" as const, axis: "rest", direction: -1 as const },
];

export const tangpingLevel: TestDefinition = {
  slug: "tangping-level",
  title: "Tangping Level Test (躺平)",
  category: "personality",
  description:
    "China's famous 'lying flat' movement, measured. How far have you actually opted out of the grind — and is it working for you?",
  whatYoullLearn:
    "Your tangping level from Full Sprint to Certified Lying Flat, and what your level is quietly telling you.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "spectrum",
  questions,

  axes: [
    {
      key: "rest",
      label: "Lying-flat level",
      lowLabel: "Full sprint",
      highLabel: "Certified tangping",
      description: "Higher scores mean more deliberate opting-out.",
    },
  ],
  terms: [
    {
      term: "躺平 (Tǎngpíng)",
      note: "'Lying flat' — a Chinese youth movement of deliberately doing the minimum: no hustle, no overwork, no chasing milestones that don't pay back. A quiet protest against burnout culture.",
    },
  ],
  resultType: "meter",
  spectrumBands: [
    {
      max: 25,
      label: "🏃 Full Sprint",
      description:
        "Rest feels illegal, comparison is constant, sleep is negotiable. You're running on a track you didn't choose. Honest question: does the finish line actually exist? (It doesn't. That's the trick.)",
    },
    {
      max: 45,
      label: "🚶 Jogging with Doubts",
      description:
        "You're still in the race but you've started reading the exit signs. The annoyance with hustle posts is data. Listen to it before it becomes a collapse.",
    },
    {
      max: 65,
      label: "🧘 Strategic Rest-er",
      description:
        "You work hard AND protect your evenings like load-bearing walls. This is the configuration longevity studies quietly praise. Defend it from people who call it laziness.",
    },
    {
      max: 100,
      label: "🛌 Certified Tangping",
      description:
        "You have opted out, on purpose, with receipts. Enough over more, boundaries over optics. Powerful position — just check the flatness is a choice you're still making, not a groove you fell into.",
    },
  ],
  funFacts: [
    "Tangping went viral in China around 2021 and panicked employers so much that state media published responses to it.",
    "Its cousin 'bai lan' (摆烂, 'let it rot') is the even flatter stage. Tangping at least keeps the lights on.",
  ],
  disclaimer:
    "A playful quiz about work-rest philosophy — not career or mental health advice.",
};
