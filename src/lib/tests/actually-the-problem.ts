import { TestDefinition } from "../types";

// "Are You Actually the Problem?" — provocative but kind.
// Type quiz over 4 trait axes; the top axis maps to a funny-but-fair verdict.

const questions = [
  // Blameless — genuinely surrounded by chaos
  { id: "ap_i1", text: "When drama happens, I'm usually finding out about it after the fact.", type: "likert" as const, axis: "blameless", direction: 1 as const },
  { id: "ap_i2", text: "Friends apologize to me for dragging me into their messes. Often.", type: "likert" as const, axis: "blameless", direction: 1 as const },
  { id: "ap_i3", text: "I've been blamed for things that started long before I arrived.", type: "likert" as const, axis: "blameless", direction: 1 as const },
  // Self-aware
  { id: "ap_s1", text: "I can usually see my own share of a conflict clearly, even mid-argument.", type: "likert" as const, axis: "aware", direction: 1 as const },
  { id: "ap_s2", text: "I apologize first when I've done something, without being prompted.", type: "likert" as const, axis: "aware", direction: 1 as const },
  { id: "ap_s3", text: "Feedback about my behavior makes me defensive before it makes me curious.", type: "likert" as const, axis: "aware", direction: -1 as const },
  // Recurring — chaos follows them
  { id: "ap_r1", text: "Somehow, arguments seem to start wherever I've just been.", type: "likert" as const, axis: "recurring", direction: 1 as const },
  { id: "ap_r2", text: "Multiple friend groups have had 'an incident' involving me.", type: "likert" as const, axis: "recurring", direction: 1 as const },
  { id: "ap_r3", text: "My name comes up in stories people tell about drama I wasn't even part of.", type: "likert" as const, axis: "recurring", direction: 1 as const },
  // Defensive — the common denominator pattern
  { id: "ap_d1", text: "In most of my conflicts, the other person was clearly the problem.", type: "likert" as const, axis: "defensive", direction: 1 as const },
  { id: "ap_d2", text: "If several people say the same thing about me, they're probably coordinating.", type: "likert" as const, axis: "defensive", direction: 1 as const },
  { id: "ap_d3", text: "I replay conflicts mainly to collect evidence that I was right.", type: "likert" as const, axis: "defensive", direction: 1 as const },
];

export const actuallyTheProblem: TestDefinition = {
  slug: "actually-the-problem",
  title: "Are You Actually the Problem?",
  category: "character",
  description:
    "Be honest. Not 'am I a bad person' — are you actually the problem sometimes? The evidence will decide.",
  whatYoullLearn:
    "Your official incident report classification, from Innocent Bystander to Common Denominator. Send this to a friend who needs to be studied.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,
  axes: [
    { key: "blameless", label: "Blameless bystander", lowLabel: "Low", highLabel: "High", description: "Chaos finds you; you didn't invite it." },
    { key: "aware", label: "Self-aware", lowLabel: "Low", highLabel: "High", description: "You can locate your own share of any conflict." },
    { key: "recurring", label: "Recurring character", lowLabel: "Low", highLabel: "High", description: "Incident reports keep mentioning you." },
    { key: "defensive", label: "Common denominator", lowLabel: "Low", highLabel: "High", description: "Everyone else is always the problem... interesting." },
  ],
  typeMeta: {
    blameless: {
      label: "😇 Innocent Bystander",
      description:
        "You may actually be surrounded by chaos. You show up to a calm group chat and leave as collateral damage. Verdict: not the problem — but pick your crowds carefully, because proximity has a price.",
    },
    aware: {
      label: "🤔 Occasionally Suspicious",
      description:
        "You can admit your share of a conflict, which already puts you ahead of most people. Sometimes you ARE the problem and you know exactly when. That self-awareness is the whole game, honestly. Keep it.",
    },
    recurring: {
      label: "🚨 Recurring Character",
      description:
        "You keep appearing in the incident reports. Maybe it's your delivery. Maybe it's your crowd. Maybe it's both. The good news: recurring characters are beloved. The other news: maybe sit one scene out.",
    },
    defensive: {
      label: "🔥 The Common Denominator",
      description:
        "We need to talk. If every ex, every group chat, and every roommate is 'crazy,' there's one name on all those leases. This result isn't a life sentence — it's an invitation to try one experiment: take 10% of the blame once and watch what happens.",
    },
  },
  balanced: {
    label: "⚖️ Case Dismissed",
    description:
      "The evidence is inconclusive. Sometimes you're involved, sometimes you're the witness, and you own your share often enough that nobody can build a file on you. Court adjourned.",
  },
  resultType: "bars",
  funFacts: [
    "Take this because you need evidence. Then send it to the friend who claims they're never the problem.",
    "'Am I the problem?' is a question only considerate people ask. Genuinely difficult people never wonder.",
  ],
  disclaimer:
    "This is a playful self-reflection quiz about conflict habits, not a judgment of your character or relationships.",
};
