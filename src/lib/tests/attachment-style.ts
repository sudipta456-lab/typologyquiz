import { TestDefinition } from "../types";

// Attachment leanings in friendships / early romance.
// Inspired by adult attachment research (Bartholomew, Brennan), simplified and de-clinicalized.
// Type quiz: ipsative pick-top with flat-profile -> "Still figuring it out".
// Each axis mixes forward + reverse items so straight-lining -> balanced.
// Not a clinical measure.

const questions = [
  // Secure — comfortable with closeness
  { id: "att_s01", text: "I find it easy to get close to friends without overthinking it.", type: "likert" as const, axis: "secure", direction: 1 as const },
  { id: "att_s02", text: "When something is wrong with a friend, I can usually talk it out.", type: "likert" as const, axis: "secure", direction: 1 as const },
  { id: "att_s03", text: "I trust that people who care about me will stick around.", type: "likert" as const, axis: "secure", direction: 1 as const },
  { id: "att_s04", text: "Getting close to someone usually comes with a knot in my stomach.", type: "likert" as const, axis: "secure", direction: -1 as const },
  { id: "att_s05", text: "Bringing up something that bothered me feels too risky, so I let it sit.", type: "likert" as const, axis: "secure", direction: -1 as const },

  // Anxious — closeness matters a lot, distance feels loud
  { id: "att_a01", text: "I worry a lot about whether my friends still like me.", type: "likert" as const, axis: "anxious", direction: 1 as const },
  { id: "att_a02", text: "If someone takes a long time to reply, I assume I did something wrong.", type: "likert" as const, axis: "anxious", direction: 1 as const },
  { id: "att_a03", text: "I need a fair bit of reassurance that people are not mad at me.", type: "likert" as const, axis: "anxious", direction: 1 as const },
  { id: "att_a04", text: "A short or dry reply doesn't really register with me.", type: "likert" as const, axis: "anxious", direction: -1 as const },
  { id: "att_a05", text: "I can go a while without hearing from a close friend and not read into it.", type: "likert" as const, axis: "anxious", direction: -1 as const },

  // Avoidant — space and self-reliance
  { id: "att_v01", text: "I prefer handling problems alone instead of leaning on friends.", type: "likert" as const, axis: "avoidant", direction: 1 as const },
  { id: "att_v02", text: "When people get too close, I feel like I need space fast.", type: "likert" as const, axis: "avoidant", direction: 1 as const },
  { id: "att_v03", text: "I keep a lot of feelings private even with people I trust.", type: "likert" as const, axis: "avoidant", direction: 1 as const },
  { id: "att_v04", text: "When something's weighing on me, texting a friend is my first move.", type: "likert" as const, axis: "avoidant", direction: -1 as const },
  { id: "att_v05", text: "I'm comfortable letting people see me when I'm not okay.", type: "likert" as const, axis: "avoidant", direction: -1 as const },

  // Mixed — push-pull
  { id: "att_m01", text: "I want closeness and also get nervous when I actually get it.", type: "likert" as const, axis: "mixed", direction: 1 as const },
  { id: "att_m02", text: "My friendships can feel intense one week and distant the next.", type: "likert" as const, axis: "mixed", direction: 1 as const },
  { id: "att_m03", text: "I swing between chasing people and pulling away.", type: "likert" as const, axis: "mixed", direction: 1 as const },
  { id: "att_m04", text: "How close I feel to my people stays pretty steady week to week.", type: "likert" as const, axis: "mixed", direction: -1 as const },
  { id: "att_m05", text: "Once I decide someone's my person, my feelings about it don't flip around.", type: "likert" as const, axis: "mixed", direction: -1 as const },

  // --- Follow-up probes (only shown when an earlier answer triggers them) ---
  //
  // These are deliberately UNIFORM: exactly one probe per axis, every one
  // triggered by the same polarity (min: 4 on a forward base item) and every
  // one reverse-keyed. That symmetry matters - if some axes gained a probe that
  // others didn't under a given answer pattern, a straight-liner would tip the
  // ipsative ranking and get handed a definite type again. With one matched
  // probe per axis, any constant answer shifts all four axes equally and still
  // lands on the balanced result.
  //
  // Each probe is a re-verify: you leaned hard into a trait, so we ask the
  // other side of it before taking that lean at face value.

  { id: "att_b1", text: "Honestly, some friendships still feel like hard work to keep steady.", type: "likert" as const, axis: "secure", direction: -1 as const, showIf: { questionId: "att_s01", min: 4 } },

  { id: "att_b2", text: "Most days I can let a slow reply go without reading into it.", type: "likert" as const, axis: "anxious", direction: -1 as const, showIf: { questionId: "att_a01", min: 4 } },

  { id: "att_b3", text: "There are people I'm glad to have around even when I'm worn out.", type: "likert" as const, axis: "avoidant", direction: -1 as const, showIf: { questionId: "att_v01", min: 4 } },

  { id: "att_b4", text: "Once I'm close to someone, how much space I want stays fairly steady.", type: "likert" as const, axis: "mixed", direction: -1 as const, showIf: { questionId: "att_m01", min: 4 } },
];

export const attachmentStyle: TestDefinition = {
  slug: "attachment-style",
  title: "Attachment Style (Friends & Crushes)",
  category: "personality",
  description:
    "How you connect when things feel close, distant, or uncertain. Built for friendships and early relationships, not therapy homework.",
  whatYoullLearn:
    "Whether you lean secure, anxious, independent (avoidant), or push-pull, plus how that shows up with friends and crushes.",
  timeMinutes: 3,
  itemCount: 20,
  license: "Original TypologyQuiz items inspired by attachment research (for self-reflection only)",
  hasBranching: true,
  scoreMode: "type",
  questions,
  axes: [
    { key: "secure", label: "Secure", lowLabel: "Low", highLabel: "High", description: "Comfortable getting close and talking things out." },
    { key: "anxious", label: "Anxious", lowLabel: "Low", highLabel: "High", description: "Tuned in to every shift in tone and distance." },
    { key: "avoidant", label: "Independent", lowLabel: "Low", highLabel: "High", description: "Values space and handling things solo." },
    { key: "mixed", label: "Push-pull", lowLabel: "Low", highLabel: "High", description: "Wants closeness and backs away from it." },
  ],
  typeMeta: {
    secure: {
      label: "Secure connector",
      description:
        "You lean toward trusting people and saying the awkward thing out loud instead of sitting on it. Strength: you recover from friction without it wrecking the friendship. Gentle watch-out: not everyone finds it that easy, so patience helps when a friend needs more reassurance than you would.",
    },
    anxious: {
      label: "Anxious connector",
      description:
        "You lean toward caring hard and noticing every shift in tone. Strength: you're genuinely attentive — people feel wanted around you. Gentle watch-out: silence usually means someone's phone died, not that you did something wrong. Asking directly beats guessing.",
    },
    avoidant: {
      label: "Independent connector",
      description:
        "You lean toward space and handling things yourself. Strength: you're steady and self-sufficient, and you don't need constant contact to feel fine. Gentle watch-out: people can read distance as disinterest — letting one person in a little sooner goes a long way.",
    },
    mixed: {
      label: "Push-pull connector",
      description:
        "You lean toward wanting closeness and getting wary of it at the same time. Strength: you feel things deeply and you're honest about the pull. Gentle watch-out: hot-and-cold is confusing from the outside — naming the pattern out loud takes most of the sting out of it.",
    },
  },
  balanced: {
    label: "Still figuring it out",
    description:
      "No single leaning stands out for you right now — you're some mix of trusting, watchful, and independent depending on the person and the week. That's completely normal, and it's also the most likely honest answer for anyone whose friendships are still changing shape.",
  },
  resultType: "orbit",
  funFacts: [
    "Attachment patterns form early, but they shift with safe friendships and practice.",
    "Most people are a blend, not a pure type. Your top score is a leaning, not a cage.",
    "Anxious and independent leanings often attract each other, which is how the chase-and-distance loop starts.",
  ],
  disclaimer:
    "This is a short self-reflection quiz about how you connect. It is not a clinical attachment assessment or a mental health diagnosis.",
};
