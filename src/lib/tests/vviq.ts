import { TestDefinition } from "../types";

// VVIQ - Vividness of Visual Imagery Questionnaire
// Marks (1973), 16 items
// Measures aphantasia / mental imagery vividness
// Attribution: Marks, D.F. (1973). "Visual imagery differences in the recall of pictures."

const questions = [
  { id: "vviq_01", text: "Think of a relative or friend whose face you know well. How vividly can you see the exact contour of their face, head, and shoulders?", type: "likert" as const, axis: "vviq", direction: 1 as const },
  { id: "vviq_02", text: "How vividly can you see the characteristic poses of their head and body?", type: "likert" as const, axis: "vviq", direction: 1 as const },
  { id: "vviq_03", text: "How vividly can you see their precise carriage and length of step as they walk?", type: "likert" as const, axis: "vviq", direction: 1 as const },
  { id: "vviq_04", text: "How vividly can you see the different colors of clothes they typically wear?", type: "likert" as const, axis: "vviq", direction: 1 as const },
  { id: "vviq_05", text: "Think of a rising sun. How vividly can you see the sun rising above the horizon into a hazy sky?", type: "likert" as const, axis: "vviq", direction: 1 as const },
  { id: "vviq_06", text: "How vividly can you see the sky clearing and surrounding the sun with blueness?", type: "likert" as const, axis: "vviq", direction: 1 as const },
  { id: "vviq_07", text: "How vividly can you see clouds and a storm clearing, with lightning flashing?", type: "likert" as const, axis: "vviq", direction: 1 as const },
  { id: "vviq_08", text: "How vividly can you see a rainbow appearing in the sky?", type: "likert" as const, axis: "vviq", direction: 1 as const },
  { id: "vviq_09", text: "Think of a shop you often go to. How vividly can you see the front of the shop from the opposite side of the road?", type: "likert" as const, axis: "vviq", direction: 1 as const },
  { id: "vviq_10", text: "How vividly can you see the window display with the colors and shapes of the items for sale?", type: "likert" as const, axis: "vviq", direction: 1 as const },
  { id: "vviq_11", text: "How vividly can you see yourself near the entrance, walking toward the counter?", type: "likert" as const, axis: "vviq", direction: 1 as const },
  { id: "vviq_12", text: "How vividly can you see the assistant serving you and handling your change?", type: "likert" as const, axis: "vviq", direction: 1 as const },
  { id: "vviq_13", text: "Think of a country scene with trees, mountains, and a lake. How vividly can you see the landscape as a whole?", type: "likert" as const, axis: "vviq", direction: 1 as const },
  { id: "vviq_14", text: "How vividly can you see the color and shape of the trees?", type: "likert" as const, axis: "vviq", direction: 1 as const },
  { id: "vviq_15", text: "How vividly can you see the color and shape of the lake?", type: "likert" as const, axis: "vviq", direction: 1 as const },
  { id: "vviq_16", text: "How vividly can you see a strong wind blowing on the trees and across the lake, creating waves?", type: "likert" as const, axis: "vviq", direction: 1 as const },
];

export const vviq: TestDefinition = {
  slug: "vviq",
  title: "Vividness of Visual Imagery (VVIQ)",
  category: "perception",
  description:
    "A 16-item questionnaire that measures how vividly you can visualize mental images. Used to detect aphantasia - the inability to form mental images.",
  whatYoullLearn:
    "Where you fall on the spectrum from aphantasia (no mental imagery) to hyperphantasia (extremely vivid imagery).",
  timeMinutes: 4,
  itemCount: 16,
  license: "Marks (1973) - academic instrument, used with attribution",
  sourceUrl: "https://doi.org/10.1111/j.2044-8295.1973.tb01322.x",
  questions,
  axes: [
    {
      key: "vviq",
      label: "Vividness",
      lowLabel: "Aphantasia",
      highLabel: "Hyperphantasia",
      description:
        "Total vividness score (16-80). Lower scores indicate less vivid mental imagery. A score of 16-32 suggests aphantasia; 64-80 suggests hyperphantasia.",
    },
  ],
  resultType: "spectrum",
  funFacts: [
    "About 1-4% of people have aphantasia - many discover it for the first time from a test like this.",
    "The VVIQ was developed by David Marks in 1973 and remains the most widely used measure of mental imagery.",
    "People with aphantasia often don't realize others can actually 'see' images in their mind - they assume 'visualize' is just a metaphor.",
  ],
  disclaimer:
    "This is a self-report measure of vividness, not a clinical diagnosis. Mental imagery exists on a spectrum, and scores can vary day to day.",
  norms: {
    vviq: { mean: 55, sd: 15 },
  },
};

export function scoreVVIQ(answers: Record<string, number>): Record<string, number> {
  let sum = 0;
  let count = 0;

  for (const q of questions) {
    const answer = answers[q.id];
    if (answer === undefined) continue;
    // VVIQ uses 1-5 raw; convert to 0-100 for consistency
    sum += answer;
    count++;
  }

  // Raw score: 16-80 (lower = less vivid)
  // Convert to 0-100 (higher = more vivid)
  const rawScore = count > 0 ? sum : 40;
  // Normalize: 16 -> 0, 80 -> 100
  const normalized = Math.round(((rawScore - 16) / (80 - 16)) * 100);

  return { vviq: Math.max(0, Math.min(100, normalized)) };
}

export function getVVIQCategory(score: number): {
  label: string;
  description: string;
} {
  if (score <= 20) return { label: "Aphantasia", description: "You likely experience little to no visual mental imagery. This is a normal variation of human experience." };
  if (score <= 40) return { label: "Low Vividness", description: "Your mental imagery is limited - you may see vague outlines or fleeting images rather than detailed scenes." };
  if (score <= 60) return { label: "Average Vividness", description: "Your mental imagery is typical - you can visualize scenes with moderate detail and clarity." };
  if (score <= 80) return { label: "High Vividness", description: "Your mental imagery is quite vivid and detailed - you can easily picture scenes with clarity." };
  return { label: "Hyperphantasia", description: "You experience extremely vivid mental imagery, almost as if seeing it with your eyes. This is a normal variation at the other end of the spectrum." };
}