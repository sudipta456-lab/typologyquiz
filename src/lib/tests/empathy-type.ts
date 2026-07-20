import { TestDefinition } from "../types";

// Head or Heart Empathy — cognitive vs affective empathy (NEW).
// Single "empathy" axis: high = Heart (feel-with), low = Head (understand).
// Balanced forward/reverse items so a constant answer lands mid-spectrum.
// Both ends are real strengths — this is a vibe check, not a verdict.

const questions = [
  // Forward = affective / feel-with (direction 1, pushes toward Heart)
  { id: "em_01", text: "When a friend is hurting, I actually feel it in my own chest.", type: "likert" as const, axis: "empathy", direction: 1 as const },
  { id: "em_02", text: "A sad movie or song can genuinely wreck me for a bit.", type: "likert" as const, axis: "empathy", direction: 1 as const },
  { id: "em_03", text: "If someone near me is anxious, I start to feel anxious too.", type: "likert" as const, axis: "empathy", direction: 1 as const },
  { id: "em_04", text: "Seeing someone cry makes my own eyes well up.", type: "likert" as const, axis: "empathy", direction: 1 as const },
  { id: "em_05", text: "I catch other people's moods without even trying.", type: "likert" as const, axis: "empathy", direction: 1 as const },
  { id: "em_06", text: "When a friend gets good news, I feel a rush of joy right along with them.", type: "likert" as const, axis: "empathy", direction: 1 as const },
  { id: "em_07", text: "Other people's stress physically weighs on me.", type: "likert" as const, axis: "empathy", direction: 1 as const },
  { id: "em_08", text: "I can't stay unaffected when someone around me is upset.", type: "likert" as const, axis: "empathy", direction: 1 as const },
  { id: "em_09", text: "My heart reacts to how someone feels before my head figures out why.", type: "likert" as const, axis: "empathy", direction: 1 as const },

  // Reverse = cognitive / understand (direction -1, pushes toward Head)
  { id: "em_10", text: "I can understand why someone's upset without feeling upset myself.", type: "likert" as const, axis: "empathy", direction: -1 as const },
  { id: "em_11", text: "I figure out what a friend is feeling by thinking it through, not by soaking it up.", type: "likert" as const, axis: "empathy", direction: -1 as const },
  { id: "em_12", text: "I stay pretty calm and clear-headed even when people around me are emotional.", type: "likert" as const, axis: "empathy", direction: -1 as const },
  { id: "em_13", text: "I'm good at seeing a situation from someone's point of view without getting swept up in it.", type: "likert" as const, axis: "empathy", direction: -1 as const },
  { id: "em_14", text: "Other people's moods don't really rub off on me.", type: "likert" as const, axis: "empathy", direction: -1 as const },
  { id: "em_15", text: "When a friend vents, I'm mapping out the problem more than feeling their feelings.", type: "likert" as const, axis: "empathy", direction: -1 as const },
  { id: "em_16", text: "I can watch something sad and stay fairly unmoved.", type: "likert" as const, axis: "empathy", direction: -1 as const },
  { id: "em_17", text: "I read people by observing them, not by absorbing what they feel.", type: "likert" as const, axis: "empathy", direction: -1 as const },
  { id: "em_18", text: "I keep my own emotions separate from other people's, even in a tense moment.", type: "likert" as const, axis: "empathy", direction: -1 as const },
];

export const empathyType: TestDefinition = {
  slug: "empathy-type",
  title: "Head or Heart Empathy",
  category: "character",
  description:
    "When someone's going through it, do you understand their feelings — or feel them yourself? A quick head-vs-heart empathy check.",
  whatYoullLearn:
    "Whether your empathy leans toward understanding (head) or feeling-with (heart), how strong that lean is, and the gentle watch-out for your side.",
  timeMinutes: 3,
  itemCount: 18,
  license: "Original TypologyQuiz items, inspired by cognitive vs affective empathy research (self-reflection only).",
  isNew: true,
  scoreMode: "spectrum",
  questions,
  axes: [
    {
      key: "empathy",
      label: "Empathy Style",
      lowLabel: "Head (understand)",
      highLabel: "Heart (feel)",
      description:
        "Whether you tend to grasp what others feel by thinking it through, or by feeling it right along with them.",
    },
  ],
  resultType: "spectrum",
  spectrumBands: [
    {
      max: 20,
      label: "Strong Head",
      description:
        "You're the calm-in-the-storm friend. You read what people feel and understand it clearly without getting swept away — which makes you steady and genuinely helpful in a crisis. Gentle watch-out: name the feeling out loud sometimes, so people know you get it, not just the logic.",
    },
    {
      max: 40,
      label: "Head-Leaning",
      description:
        "You mostly understand feelings rather than absorb them, and that keeps you level-headed when things get intense. You can still feel-with people when it matters. Watch-out: a little extra 'that sounds really hard' goes a long way for the heart-leaning friends.",
    },
    {
      max: 60,
      label: "Both / Balanced",
      description:
        "You flex between feeling-with and thinking-through depending on the moment — soaking it up when a friend needs company, stepping back when they need a clear head. A genuinely versatile way to show up for people.",
    },
    {
      max: 80,
      label: "Heart-Leaning",
      description:
        "You feel what the people around you feel, which makes you warm and quick to comfort. You can still zoom out when you need to. Watch-out: protect your own battery — you don't have to carry every mood in the room.",
    },
    {
      max: 100,
      label: "Strong Heart",
      description:
        "You feel others' emotions deeply and instantly, which makes you an incredibly caring friend. That's a real gift. Gentle watch-out: other people's stress can pile onto yours, so building a little emotional buffer keeps you from burning out.",
    },
  ],
  funFacts: [
    "Psychologists split empathy into two kinds: cognitive (understanding a feeling) and affective (feeling it too) — and they're run by different parts of the brain.",
    "Leaning 'head' doesn't mean you care less; some of the most reliable, supportive people mostly understand rather than absorb.",
    "Compare with friends: a heart-leaner and a head-leaner make a great pair — one brings the comfort, the other brings the calm plan.",
  ],
  disclaimer:
    "A light self-reflection vibe check on your empathy style, not a clinical measure. Both ends are strengths, and yours can shift with the situation.",
};
