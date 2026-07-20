import { TestDefinition } from "../types";

// Optimist or Realist — outlook vibe check (NEW).
// Single "outlook" axis: high = optimist, low = grounded realist.
// Balanced forward/reverse items so a constant answer lands mid-spectrum.
// Loosely inspired by dispositional optimism research (LOT-R style).

const questions = [
  // Forward = optimist leaning (direction 1)
  { id: "or_01", text: "When I'm unsure how something will go, I expect it to work out.", type: "likert" as const, axis: "outlook", direction: 1 as const },
  { id: "or_02", text: "I can usually find a silver lining in a rough situation.", type: "likert" as const, axis: "outlook", direction: 1 as const },
  { id: "or_03", text: "I generally expect more good things to happen to me than bad.", type: "likert" as const, axis: "outlook", direction: 1 as const },
  { id: "or_04", text: "When plans fall apart, I trust something better will show up.", type: "likert" as const, axis: "outlook", direction: 1 as const },
  { id: "or_05", text: "Heading into a new school year or project, I feel hopeful.", type: "likert" as const, axis: "outlook", direction: 1 as const },
  { id: "or_06", text: "Even on a bad day, I figure tomorrow has a decent shot at better.", type: "likert" as const, axis: "outlook", direction: 1 as const },
  { id: "or_07", text: "I tend to assume friends and people online mean well.", type: "likert" as const, axis: "outlook", direction: 1 as const },
  { id: "or_08", text: "I look forward to the future more than I worry about it.", type: "likert" as const, axis: "outlook", direction: 1 as const },

  // Reverse = grounded realist leaning (direction -1)
  { id: "or_09", text: "I'd rather brace for the worst so nothing catches me off guard.", type: "likert" as const, axis: "outlook", direction: -1 as const },
  { id: "or_10", text: "I keep my hopes in check so I'm not let down.", type: "likert" as const, axis: "outlook", direction: -1 as const },
  { id: "or_11", text: "When something can go wrong, I usually expect it will.", type: "likert" as const, axis: "outlook", direction: -1 as const },
  { id: "or_12", text: "I plan around what could realistically go sideways.", type: "likert" as const, axis: "outlook", direction: -1 as const },
  { id: "or_13", text: "I trust facts and evidence more than a good feeling about things.", type: "likert" as const, axis: "outlook", direction: -1 as const },
  { id: "or_14", text: "'It'll be fine' isn't a plan — I want a backup ready.", type: "likert" as const, axis: "outlook", direction: -1 as const },
  { id: "or_15", text: "I stay a little skeptical until I see how things actually play out.", type: "likert" as const, axis: "outlook", direction: -1 as const },
  { id: "or_16", text: "I'd call myself more grounded than hopeful about how things go.", type: "likert" as const, axis: "outlook", direction: -1 as const },
];

export const optimistRealist: TestDefinition = {
  slug: "optimist-realist",
  title: "Optimist or Realist",
  category: "character",
  description:
    "Do you expect things to work out, or brace yourself and plan for what could go wrong? A quick outlook vibe check.",
  whatYoullLearn:
    "Where your outlook sits on the realist-to-optimist spectrum right now, and the real strength each end gives you.",
  timeMinutes: 3,
  itemCount: 16,
  license: "Original TypologyQuiz items, inspired by dispositional optimism research (self-reflection only).",
  isNew: true,
  scoreMode: "spectrum",
  questions,
  axes: [
    {
      key: "outlook",
      label: "Outlook",
      lowLabel: "Realist",
      highLabel: "Optimist",
      description:
        "How you expect things to turn out — lower means grounded and prepared, higher means hopeful and expecting the upside.",
    },
  ],
  resultType: "wave",
  spectrumBands: [
    {
      max: 20,
      label: "Braced Realist",
      description:
        "You plan for what could go wrong so nothing blindsides you. Superpower: you're prepared, clear-eyed, and hard to disappoint. Just leave a crack in the door for good surprises — some things do go right.",
    },
    {
      max: 40,
      label: "Grounded",
      description:
        "You lean practical — you'd rather see the evidence than run on a good feeling. Steady and reliable, with a backup plan ready. Letting yourself hope now and then won't wreck the strategy.",
    },
    {
      max: 60,
      label: "Balanced",
      description:
        "You hope for the best but plan for the rest — reading each situation on its own terms. That mix of realism and optimism is exactly what keeps you both grounded and moving forward.",
    },
    {
      max: 80,
      label: "Hopeful",
      description:
        "You expect things to mostly work out, and that outlook carries you through rough patches. Superpower: your optimism is contagious and it keeps you going. Just keep a little room for a plan B.",
    },
    {
      max: 100,
      label: "Full Optimist",
      description:
        "You genuinely expect the good outcome, and you find the upside almost anywhere. Superpower: resilience — setbacks bounce off you. The catch: pair that hope with a bit of prep so optimism has something solid to stand on.",
    },
  ],
  funFacts: [
    "Psychologists measure 'dispositional optimism' — your general expectation that things will turn out well — and it tends to track with bouncing back faster from setbacks.",
    "Being a realist isn't the same as being negative; grounded, prepared people are often the ones holding the plan together when things get messy.",
    "Compare with friends — an optimist and a realist planning a trip together usually end up with both the fun ideas and the actual backup plan.",
  ],
  disclaimer:
    "A light self-reflection vibe check, not a measure of your mental health. Your outlook shifts with what's going on in your life and how the week is treating you.",
};
