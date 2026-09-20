import { TestDefinition } from "../types";

// Prakriti Dosha Test: Ayurvedic three-dosha typing, quiz-ified.
// Type quiz, 3 axes x 4 items. Wellness framing, not medical advice.

const questions = [
  // Vata — air and space: creative, quick, restless
  { id: "pd_v1", text: "My mind moves fast: ideas, worries, plans, all at once.", type: "likert" as const, axis: "vata", direction: 1 as const },
  { id: "pd_v2", text: "I get excited easily and just as easily distracted.", type: "likert" as const, axis: "vata", direction: 1 as const },
  { id: "pd_v3", text: "Cold weather genuinely bothers me.", type: "likert" as const, axis: "vata", direction: 1 as const },
  { id: "pd_v4", text: "Steady routines come naturally to me.", type: "likert" as const, axis: "vata", direction: -1 as const },
  // Pitta — fire and water: driven, sharp, intense
  { id: "pd_p1", text: "I'm competitive in ways that surprise even me.", type: "likert" as const, axis: "pitta", direction: 1 as const },
  { id: "pd_p2", text: "I run hot, both temperature and temper.", type: "likert" as const, axis: "pitta", direction: 1 as const },
  { id: "pd_p3", text: "Inefficiency makes me visibly irritated.", type: "likert" as const, axis: "pitta", direction: 1 as const },
  { id: "pd_p4", text: "Losing doesn't light a fire under me; it barely registers.", type: "likert" as const, axis: "pitta", direction: -1 as const },
  // Kapha — water and earth: calm, loyal, steady
  { id: "pd_k1", text: "People describe me as calm, grounded, or unshakeable.", type: "likert" as const, axis: "kapha", direction: 1 as const },
  { id: "pd_k2", text: "I build deep, long relationships rather than many quick ones.", type: "likert" as const, axis: "kapha", direction: 1 as const },
  { id: "pd_k3", text: "Once comfortable, change takes real effort for me.", type: "likert" as const, axis: "kapha", direction: 1 as const },
  { id: "pd_k4", text: "Slow mornings make me sluggish rather than peaceful.", type: "likert" as const, axis: "kapha", direction: -1 as const },
];

export const prakritiDosha: TestDefinition = {
  slug: "prakriti-dosha",
  title: "Prakriti Dosha Test (प्रकृति)",
  category: "personality",
  description:
    "Explore Vata, Pitta, and Kapha, three dosha concepts in Ayurveda, through a short self-reflection quiz.",
  whatYoullLearn:
    "Which dosha term your answers match in this light quiz, plus the element pair traditionally associated with each.",
  timeMinutes: 4,
  itemCount: 12,
  license: "Original TypologyQuiz items inspired by public Ayurvedic concepts (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "vata", label: "Vata (वात: Air and space)", lowLabel: "Low", highLabel: "High", description: "Quick, creative, restless." },
    { key: "pitta", label: "Pitta (पित्त: Fire and water)", lowLabel: "Low", highLabel: "High", description: "Driven, sharp, intense." },
    { key: "kapha", label: "Kapha (कफ: Water and earth)", lowLabel: "Low", highLabel: "High", description: "Calm, loyal, steady." },
  ],
  terms: [
    {
      term: "दोष (Dosha)",
      note: "In Ayurveda, three traditional concepts used to describe patterns in body and mind: Vata (air and space), Pitta (fire and water), and Kapha (water and earth).",
    },
    {
      term: "प्रकृति (Prakriti)",
      note: "Often translated as 'nature' or constitution. Traditional practitioners may use pulse and questions; this quiz does not attempt that assessment.",
    },
  ],
  typeMeta: {
    vata: {
      label: "Vata: The Creative Wind",
      description:
        "You move quickly between ideas and get excited by a new start. Your strength is curiosity and momentum. A gentle watch-out: you may need a beat before committing to the next thing.",
    },
    pitta: {
      label: "Pitta: The Driven Fire",
      description:
        "You notice what could run better and want to get it moving. Your strength is focus. A gentle watch-out: ordinary delays can feel bigger when you care about the outcome.",
    },
    kapha: {
      label: "Kapha: The Steady Mountain",
      description:
        "You may prefer familiar people, steady plans, and time to settle in. Your strength is patience. A gentle watch-out: a changed plan can take a moment to feel comfortable.",
    },
  },
  balanced: {
    label: "Tridoshic: The Close Mix",
    description:
      "Your answers landed close across Vata, Pitta, and Kapha. Your strength is range. A gentle watch-out: this is one light quiz, so there is no need to force a single label.",
  },
  resultType: "radar",
  funFacts: [
    "Ayurveda is a traditional system of medicine with roots in South Asia and a long textual history.",
    "The word Ayurveda is often translated as 'knowledge of life.'",
  ],
  disclaimer:
    "A light, respectful introduction to Ayurvedic terms, made for reflection and conversation. It is not medical advice or a health assessment.",
};
