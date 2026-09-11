import { TestDefinition } from "../types";

// Mini-IPIP - 20-item Big Five personality test
// Public domain (IPIP - International Personality Item Pool)
// Source: Donnellan et al. (2006), ipip.ori.org

const questions = [
  // Extraversion
  { id: "ipip_e01", text: "Am the life of the party.", type: "likert" as const, axis: "extraversion", direction: 1 as const },
  { id: "ipip_e02", text: "Don't talk a lot.", type: "likert" as const, axis: "extraversion", direction: -1 as const },
  { id: "ipip_e03", text: "Talk to a lot of different people at parties.", type: "likert" as const, axis: "extraversion", direction: 1 as const },
  { id: "ipip_e04", text: "Keep in the background.", type: "likert" as const, axis: "extraversion", direction: -1 as const },
  // Agreeableness
  { id: "ipip_a01", text: "Sympathize with others' feelings.", type: "likert" as const, axis: "agreeableness", direction: 1 as const },
  { id: "ipip_a02", text: "Am not interested in other people's problems.", type: "likert" as const, axis: "agreeableness", direction: -1 as const },
  { id: "ipip_a03", text: "Feel others' emotions.", type: "likert" as const, axis: "agreeableness", direction: 1 as const },
  { id: "ipip_a04", text: "Am not really interested in others.", type: "likert" as const, axis: "agreeableness", direction: -1 as const },
  // Conscientiousness
  { id: "ipip_c01", text: "Get chores done right away.", type: "likert" as const, axis: "conscientiousness", direction: 1 as const },
  { id: "ipip_c02", text: "Often forget to put things back in their proper place.", type: "likert" as const, axis: "conscientiousness", direction: -1 as const },
  { id: "ipip_c03", text: "Like order.", type: "likert" as const, axis: "conscientiousness", direction: 1 as const },
  { id: "ipip_c04", text: "Make a mess of things.", type: "likert" as const, axis: "conscientiousness", direction: -1 as const },
  // Neuroticism
  { id: "ipip_n01", text: "Have frequent mood swings.", type: "likert" as const, axis: "neuroticism", direction: 1 as const },
  { id: "ipip_n02", text: "Am relaxed most of the time.", type: "likert" as const, axis: "neuroticism", direction: -1 as const },
  { id: "ipip_n03", text: "Get upset easily.", type: "likert" as const, axis: "neuroticism", direction: 1 as const },
  { id: "ipip_n04", text: "Seldom feel blue.", type: "likert" as const, axis: "neuroticism", direction: -1 as const },
  // Openness (Intellect/Imagination)
  { id: "ipip_o01", text: "Have a vivid imagination.", type: "likert" as const, axis: "openness", direction: 1 as const },
  { id: "ipip_o02", text: "Am not interested in abstract ideas.", type: "likert" as const, axis: "openness", direction: -1 as const },
  { id: "ipip_o03", text: "Have difficulty understanding abstract ideas.", type: "likert" as const, axis: "openness", direction: -1 as const },
  { id: "ipip_o04", text: "Do not have a good imagination.", type: "likert" as const, axis: "openness", direction: -1 as const },
];

export const miniIPIP: TestDefinition = {
  slug: "mini-ipip",
  title: "Big Five Personality (Mini-IPIP)",
  category: "personality",
  description:
    "Twenty public-domain Mini-IPIP items exploring five broad personality traits. A brief self-report profile, with evidence from the source instrument and no validation sample yet for this site version.",
  whatYoullLearn:
    "Your personality profile across the five dimensions that psychologists consider the building blocks of personality.",
  timeMinutes: 3,
  itemCount: 20,
  license: "Public domain - IPIP (International Personality Item Pool, ipip.ori.org)",
  sourceUrl: "https://ipip.ori.org/MiniIPIPKey.htm",
  instructions: "Describe yourself as you generally are now. Rate how accurately each statement describes you. There are no right answers. Read each statement carefully; some are phrased in the opposite direction.",
  responseOptions: [
    { value: 1, label: "Very inaccurate" },
    { value: 2, label: "Moderately inaccurate" },
    { value: 3, label: "Neither accurate nor inaccurate" },
    { value: 4, label: "Moderately accurate" },
    { value: 5, label: "Very accurate" },
  ],
  // Interleave E, A, C, N, I as in the Mini-IPIP administration form.
  questions: [0, 4, 8, 12, 16, 1, 5, 9, 13, 17, 2, 6, 10, 14, 18, 3, 7, 11, 15, 19].map(i => questions[i]),
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
      label: "Emotional reactivity",
      lowLabel: "Resilient",
      highLabel: "Sensitive",
      description:
        "Neuroticism reflects emotional reactivity. Higher scores reflect more frequent emotional shifts; lower scores reflect a calmer reported pattern. This is a trait description, not a measure of mental health.",
    },
    {
      key: "openness",
      label: "Intellect / imagination",
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
    "Each trait uses four items. A short profile leaves out detail that a longer assessment can capture.",
  ],
  disclaimer:
    "This is a self-report snapshot based on the public-domain Mini-IPIP. It is not a clinical diagnosis. Personality is complex and varies across situations.",
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