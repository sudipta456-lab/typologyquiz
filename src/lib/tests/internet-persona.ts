import { TestDefinition } from "../types";

// Internet Person Type: your native online archetype.
// Type quiz, 4 axes x 3 items. Screenshot-first result labels.

const questions = [
  // Lurker
  { id: "ip_l1", text: "I know all the drama and have posted none of it.", type: "likert" as const, axis: "lurker", direction: 1 as const },
  { id: "ip_l2", text: "I have accounts everywhere and content nowhere.", type: "likert" as const, axis: "lurker", direction: 1 as const },
  { id: "ip_l3", text: "I type replies often, then delete them and close the app.", type: "likert" as const, axis: "lurker", direction: -1 as const },
  // Ghost
  { id: "ip_g1", text: "I'll disappear online for days, then reappear with something random.", type: "likert" as const, axis: "ghost", direction: 1 as const },
  { id: "ip_g2", text: "'Left on read' is a lifestyle, not an accident.", type: "likert" as const, axis: "ghost", direction: 1 as const },
  { id: "ip_g3", text: "People can reliably predict when I'll be active online.", type: "likert" as const, axis: "ghost", direction: -1 as const },
  // Poster
  { id: "ip_p1", text: "If something happens, my first thought is how to post about it.", type: "likert" as const, axis: "poster", direction: 1 as const },
  { id: "ip_p2", text: "I check how my posts are doing more than I'd like to admit.", type: "likert" as const, axis: "poster", direction: 1 as const },
  { id: "ip_p3", text: "Sharing things publicly feels more risky than fun to me.", type: "likert" as const, axis: "poster", direction: -1 as const },
  // Chaos
  { id: "ip_c1", text: "My posting schedule is chaos and my content makes no sense to strangers.", type: "likert" as const, axis: "chaos", direction: 1 as const },
  { id: "ip_c2", text: "I've sent a message at 3 AM that I stand by at 3 AM only.", type: "likert" as const, axis: "chaos", direction: 1 as const },
  { id: "ip_c3", text: "I curate what I post so it fits a consistent vibe.", type: "likert" as const, axis: "chaos", direction: -1 as const },
];

export const internetPersona: TestDefinition = {
  slug: "internet-persona",
  title: "Internet Person Type",
  category: "personality",
  description:
    "Everyone has a native internet archetype. Lurker, Ghost, Poster, Chaos Agent. Find yours in three minutes.",
  whatYoullLearn:
    "Your exact species of internet person, what it says about you offline, and the one-line description you'll want to screenshot.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,
  axes: [
    { key: "lurker", label: "Lurker", lowLabel: "Low", highLabel: "High", description: "Sees everything, posts nothing." },
    { key: "ghost", label: "Ghost", lowLabel: "Low", highLabel: "High", description: "Appears and disappears without warning." },
    { key: "poster", label: "Poster", lowLabel: "Low", highLabel: "High", description: "Life becomes content by default." },
    { key: "chaos", label: "Chaos", lowLabel: "Low", highLabel: "High", description: "Unpredictable posting, beloved anyway." },
  ],
  typeMeta: {
    lurker: {
      label: "The Professional Lurker",
      description:
        "Knows everything. Posts nothing. You've watched entire friendships form and collapse from behind a read receipt. Superpower: perfect information. Weakness: nobody knows you exist, which is exactly how you like it.",
    },
    ghost: {
      label: "The Selective Ghost",
      description:
        "Gone for three days. Returns with a meme and no explanation. Your online presence runs on vibes and lunar cycles. People don't worry when you vanish; they know you'll materialize when there's something worth materializing for.",
    },
    poster: {
      label: "The Accidental Influencer",
      description:
        "You claim you don't care about engagement while checking the numbers from three different apps. Life happens to you and then it happens to your feed. It's fine. It's a creative outlet. (The views were good today, weren't they?)",
    },
    chaos: {
      label: "The Plot Twist",
      description:
        "No schedule. No niche. No explanation. Yesterday: a photo of a pigeon. Today: a life update that rearranges everyone's understanding of you. Nobody knows what you're doing next, including you, and that's the brand.",
    },
  },
  balanced: {
    label: "The Background Character",
    description:
      "Quietly knows everyone else's business. Appears occasionally, comments rarely, remembers always. Every group has one, and every group secretly depends on them. You're the constant in everyone else's algorithm.",
  },
  resultType: "orbit",
  funFacts: [
    "Most people online are lurkers. Posting is the minority behavior, lurking is the majority experience.",
    "Your internet persona is usually one part real personality, two parts energy management.",
  ],
  disclaimer:
    "This is a fun self-reflection quiz about online habits, not a personality diagnosis.",
};
