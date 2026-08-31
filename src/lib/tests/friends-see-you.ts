import { TestDefinition } from "../types";

// Friends See You?: what vibe you *think* you broadcast.
// Self-perception version of the classic friend-rating format. Type quiz,
// 4 projected-vibe axes. Pairs with the upcoming Compare feature.

const questions = [
  // Warm
  { id: "fs_w1", text: "Friends would say I'm the one who checks in first.", type: "likert" as const, axis: "warm", direction: 1 as const },
  { id: "fs_w2", text: "I come across as approachable even when I'm having a bad day.", type: "likert" as const, axis: "warm", direction: 1 as const },
  { id: "fs_w3", text: "'Distant' is a word people might honestly use about me.", type: "likert" as const, axis: "warm", direction: -1 as const },
  // Reliable
  { id: "fs_r1", text: "If I say I'll do it, consider it done; that's my reputation.", type: "likert" as const, axis: "reliable", direction: 1 as const },
  { id: "fs_r2", text: "People think of me as the steady one in the group.", type: "likert" as const, axis: "reliable", direction: 1 as const },
  { id: "fs_r3", text: "Flaking on plans is something I do more than I'd like to admit.", type: "likert" as const, axis: "reliable", direction: -1 as const },
  // Chaotic
  { id: "fs_c1", text: "My friends expect the unexpected from me. That's the brand.", type: "likert" as const, axis: "chaotic", direction: 1 as const },
  { id: "fs_c2", text: "My stories usually require context and several disclaimers.", type: "likert" as const, axis: "chaotic", direction: 1 as const },
  { id: "fs_c3", text: "My life is pretty predictable week to week.", type: "likert" as const, axis: "chaotic", direction: -1 as const },
  // Funny
  { id: "fs_f1", text: "In groups, making people laugh falls to me by default.", type: "likert" as const, axis: "funny", direction: 1 as const },
  { id: "fs_f2", text: "New people notice my humor before almost anything else about me.", type: "likert" as const, axis: "funny", direction: 1 as const },
  { id: "fs_f3", text: "I'm more the audience than the comedian in most rooms.", type: "likert" as const, axis: "funny", direction: -1 as const },
];

export const friendsSeeYou: TestDefinition = {
  slug: "friends-see-you",
  title: "How Do Friends See You?",
  category: "character",
  description:
    "You know who you are. But what vibe do you actually broadcast? Rate yourself, then compare with real ratings from your friends.",
  whatYoullLearn:
    "The four signals you think you're sending (warmth, reliability, chaos, humor) and where your self-image might be drifting from reality.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,
  axes: [
    { key: "warm", label: "Warmth", lowLabel: "Reserved", highLabel: "Warm", description: "Checking in, opening up, approachable." },
    { key: "reliable", label: "Reliability", lowLabel: "Loose", highLabel: "Solid", description: "Showing up, following through." },
    { key: "chaotic", label: "Chaos", lowLabel: "Calm", highLabel: "Chaotic", description: "Stories, surprises, unpredictability." },
    { key: "funny", label: "Humor", lowLabel: "Low-key", highLabel: "Comedian", description: "Being the room's laugh supply." },
  ],
  typeMeta: {
    warm: {
      label: "The Warm One (you think)",
      description:
        "You believe people experience you as safe and welcoming, the check-in-first friend. If your friends agree, treasure it. If they don't? Interesting gap. That's exactly what the friend-rating comparison is for.",
    },
    reliable: {
      label: "The Solid One (you think)",
      description:
        "You believe your word carries weight and people build plans on you. Solid self-image. The interesting question: do your friends experience the same reliability you feel from the inside?",
    },
    chaotic: {
      label: "The Plot Twist (you think)",
      description:
        "You believe you're the unpredictable one: stories with disclaimers, plans that become adventures. Fun claim. Now the real test: does your group chat agree, or have you actually been calm for two years?",
    },
    funny: {
      label: "The Comedian (you think)",
      description:
        "You believe laughter is your signature and new people clock it immediately. Confidence noted. Whether the room co-signs is precisely what makes this quiz worth sharing.",
    },
  },
  balanced: {
    label: "The Balanced Broadcast",
    description:
      "You think you project a mix of all four signals: warm-ish, solid-ish, occasionally chaotic, funny when needed. Reasonable self-image. The fun part starts when your friends' ratings arrive and the gaps reveal themselves.",
  },
  resultType: "bars",
  funFacts: [
    "Studies on self-knowledge keep finding the same thing: we see our intentions, friends see our patterns.",
    "Share your result link and let friends rate you anonymously; the blind-spot reveal is the whole point.",
  ],
  disclaimer:
    "This measures how you *think* you come across. Friend-comparison features are coming to make it fully multiplayer.",
};
