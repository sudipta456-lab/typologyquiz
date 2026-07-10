import { TestDefinition } from "../types";

// Mini-IPIP - 20-item Big Five personality test
// Public domain (IPIP - International Personality Item Pool)
// Source: Donnellan et al. (2006), ipip.ori.org

const questions = [
  // Extraversion
  { id: "ipip_e01", text: "I am the life of the party.", type: "likert" as const, axis: "extraversion", direction: 1 as const },
  { id: "ipip_e02", text: "I don't talk a lot.", type: "likert" as const, axis: "extraversion", direction: -1 as const },
  { id: "ipip_e03", text: "I talk to a lot of different people at parties.", type: "likert" as const, axis: "extraversion", direction: 1 as const },
  { id: "ipip_e04", text: "I keep in the background.", type: "likert" as const, axis: "extraversion", direction: -1 as const },
  // Agreeableness
  { id: "ipip_a01", text: "I sympathize with others' feelings.", type: "likert" as const, axis: "agreeableness", direction: 1 as const },
  { id: "ipip_a02", text: "I am not interested in other people's problems.", type: "likert" as const, axis: "agreeableness", direction: -1 as const },
  { id: "ipip_a03", text: "I feel others' emotions.", type: "likert" as const, axis: "agreeableness", direction: 1 as const },
  { id: "ipip_a04", text: "I am not really interested in others.", type: "likert" as const, axis: "agreeableness", direction: -1 as const },
  // Conscientiousness
  { id: "ipip_c01", text: "I get chores done right away.", type: "likert" as const, axis: "conscientiousness", direction: 1 as const },
  { id: "ipip_c02", text: "I often forget to put things back in their proper place.", type: "likert" as const, axis: "conscientiousness", direction: -1 as const },
  { id: "ipip_c03", text: "I like order.", type: "likert" as const, axis: "conscientiousness", direction: 1 as const },
  { id: "ipip_c04", text: "I make a mess of things.", type: "likert" as const, axis: "conscientiousness", direction: -1 as const },
  // Neuroticism
  { id: "ipip_n01", text: "I have frequent mood swings.", type: "likert" as const, axis: "neuroticism", direction: 1 as const },
  { id: "ipip_n02", text: "I am relaxed most of the time.", type: "likert" as const, axis: "neuroticism", direction: -1 as const },
  { id: "ipip_n03", text: "I get upset easily.", type: "likert" as const, axis: "neuroticism", direction: 1 as const },
  { id: "ipip_n04", text: "I seldom feel blue.", type: "likert" as const, axis: "neuroticism", direction: -1 as const },
  // Openness (Intellect/Imagination)
  { id: "ipip_o01", text: "I have a vivid imagination.", type: "likert" as const, axis: "openness", direction: 1 as const },
  { id: "ipip_o02", text: "I am not interested in abstract ideas.", type: "likert" as const, axis: "openness", direction: -1 as const },
  { id: "ipip_o03", text: "I have difficulty understanding abstract ideas.", type: "likert" as const, axis: "openness", direction: -1 as const },
  { id: "ipip_o04", text: "I do not have a good imagination.", type: "likert" as const, axis: "openness", direction: -1 as const },
];

export const miniIPIP: TestDefinition = {
  slug: "mini-ipip",
  title: "Big Five Personality (Mini-IPIP)",
  category: "personality",
  description:
    "A quick, scientifically validated 20-item measure of the Big Five personality traits: Extraversion, Agreeableness, Conscientiousness, Neuroticism, and Openness.",
  whatYoullLearn:
    "Your personality profile across the five dimensions that psychologists consider the building blocks of personality.",
  timeMinutes: 3,
  itemCount: 20,
  license: "Public domain - IPIP (International Personality Item Pool, ipip.ori.org)",
  sourceUrl: "https://ipip.ori.org/",
  questions,
  axes: [
    {
      key: "extraversion",
      label: "Extraversion",
      lowLabel: "Introverted",
      highLabel: "Extraverted",
      description:
        "Extraversion reflects sociability, assertiveness, and enthusiasm. High scorers are outgoing and energetic; low scorers prefer solitude and quiet environments.",
    },
    {
      key: "agreeableness",
      label: "Agreeableness",
      lowLabel: "Challenging",
      highLabel: "Compassionate",
      description:
        "Agreeableness reflects compassion and cooperativeness. High scorers are empathetic and trusting; low scorers are more competitive and skeptical.",
    },
    {
      key: "conscientiousness",
      label: "Conscientiousness",
      lowLabel: "Flexible",
      highLabel: "Organized",
      description:
        "Conscientiousness reflects organization, discipline, and reliability. High scorers are methodical and dependable; low scorers are spontaneous and flexible.",
    },
    {
      key: "neuroticism",
      label: "Emotional Stability",
      lowLabel: "Resilient",
      highLabel: "Sensitive",
      description:
        "Neuroticism reflects emotional reactivity. High scorers experience more anxiety and mood swings; low scorers are emotionally stable and calm. (Lower scores indicate higher emotional stability.)",
    },
    {
      key: "openness",
      label: "Openness",
      lowLabel: "Practical",
      highLabel: "Curious",
      description:
        "Openness reflects intellectual curiosity, creativity, and appreciation for new experiences. High scorers are imaginative; low scorers prefer concrete and familiar things.",
    },
  ],
  resultType: "radar",
  funFacts: [
    "The Big Five model is the most widely accepted personality framework in academic psychology.",
    "Your personality traits are relatively stable over time, but they can gradually shift - conscientiousness tends to increase with age.",
    "The Mini-IPIP was developed by Donnellan and colleagues in 2006 as a brief but reliable alternative to longer personality inventories.",
  ],
  disclaimer:
    "This is a self-report snapshot based on the public-domain Mini-IPIP. It is not a clinical diagnosis. Personality is complex and varies across situations.",
  norms: {
    extraversion: { mean: 50, sd: 20 },
    agreeableness: { mean: 60, sd: 18 },
    conscientiousness: { mean: 55, sd: 20 },
    neuroticism: { mean: 45, sd: 20 },
    openness: { mean: 55, sd: 18 },
  },
};

export function scoreMiniIPIP(answers: Record<string, number>): Record<string, number> {
  const axes: Record<string, { sum: number; count: number }> = {
    extraversion: { sum: 0, count: 0 },
    agreeableness: { sum: 0, count: 0 },
    conscientiousness: { sum: 0, count: 0 },
    neuroticism: { sum: 0, count: 0 },
    openness: { sum: 0, count: 0 },
  };

  for (const q of questions) {
    const answer = answers[q.id];
    if (answer === undefined) continue;
    let score = (answer - 1) * 25;
    if (q.direction === -1) {
      score = 100 - score;
    }
    axes[q.axis].sum += score;
    axes[q.axis].count++;
  }

  const result: Record<string, number> = {};
  for (const [key, val] of Object.entries(axes)) {
    result[key] = val.count > 0 ? Math.round(val.sum / val.count) : 50;
  }
  return result;
}