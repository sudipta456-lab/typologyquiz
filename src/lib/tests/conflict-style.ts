import { TestDefinition } from "../types";

// Conflict styles inspired by dual-concern models (compete, avoid, accommodate, compromise, collaborate).
// Type quiz: ipsative pick-top with flat-profile -> "The Shape-Shifter".
// Each axis mixes forward + reverse items so straight-lining -> balanced, not "Competitor".

const questions = [
  // Compete — push for your position
  { id: "cf_c1", text: "In an argument, I push hard for my side to win.", type: "likert" as const, axis: "compete", direction: 1 as const },
  { id: "cf_c2", text: "If I know I'm right, I keep pressing until people come around.", type: "likert" as const, axis: "compete", direction: 1 as const },
  { id: "cf_c3", text: "Debates feel like a sport I want to win.", type: "likert" as const, axis: "compete", direction: 1 as const },
  { id: "cf_c4", text: "I'd rather drop my point than push it on someone.", type: "likert" as const, axis: "compete", direction: -1 as const },
  { id: "cf_c5", text: "Being the one who wins the argument doesn't matter much to me.", type: "likert" as const, axis: "compete", direction: -1 as const },

  // Avoid — step back from the heat
  { id: "cf_a1", text: "I change the subject or leave when tension starts.", type: "likert" as const, axis: "avoid", direction: 1 as const },
  { id: "cf_a2", text: "I'd rather stay quiet than risk a fight with friends.", type: "likert" as const, axis: "avoid", direction: 1 as const },
  { id: "cf_a3", text: "When a group chat turns into drama, I mute it and disappear.", type: "likert" as const, axis: "avoid", direction: 1 as const },
  { id: "cf_a4", text: "When something's bugging me, I bring it up instead of sitting on it.", type: "likert" as const, axis: "avoid", direction: -1 as const },
  { id: "cf_a5", text: "Awkward conversations don't scare me off.", type: "likert" as const, axis: "avoid", direction: -1 as const },

  // Accommodate — put the other person first
  { id: "cf_m1", text: "I often give in so the other person isn't upset.", type: "likert" as const, axis: "accommodate", direction: 1 as const },
  { id: "cf_m2", text: "Keeping the peace matters more to me than getting my way.", type: "likert" as const, axis: "accommodate", direction: 1 as const },
  { id: "cf_m3", text: "If someone really wants something, I'll let them have it even when I mind.", type: "likert" as const, axis: "accommodate", direction: 1 as const },
  { id: "cf_m4", text: "I hold my ground even if it disappoints someone.", type: "likert" as const, axis: "accommodate", direction: -1 as const },
  { id: "cf_m5", text: "I say what I need out loud, even when it's inconvenient for others.", type: "likert" as const, axis: "accommodate", direction: -1 as const },

  // Compromise — meet in the middle
  { id: "cf_p1", text: "I look for a middle option so everyone gives a little.", type: "likert" as const, axis: "compromise", direction: 1 as const },
  { id: "cf_p2", text: "Splitting the difference feels fair in most disagreements.", type: "likert" as const, axis: "compromise", direction: 1 as const },
  { id: "cf_p3", text: "In group projects I'm the one suggesting we each bend a bit.", type: "likert" as const, axis: "compromise", direction: 1 as const },
  { id: "cf_p4", text: "Half-and-half solutions usually feel like a cop-out to me.", type: "likert" as const, axis: "compromise", direction: -1 as const },
  { id: "cf_p5", text: "I'd rather settle a disagreement fully than trade concessions.", type: "likert" as const, axis: "compromise", direction: -1 as const },

  // Collaborate — dig for the real fix
  { id: "cf_b1", text: "I try to understand their side and find something that works for both of us.", type: "likert" as const, axis: "collaborate", direction: 1 as const },
  { id: "cf_b2", text: "Even when I'm mad, I want to talk it all the way through.", type: "likert" as const, axis: "collaborate", direction: 1 as const },
  { id: "cf_b3", text: "I'll ask questions until I actually get why they see it differently.", type: "likert" as const, axis: "collaborate", direction: 1 as const },
  { id: "cf_b4", text: "Long conversations about a disagreement feel like a waste of time.", type: "likert" as const, axis: "collaborate", direction: -1 as const },
  { id: "cf_b5", text: "I'd rather settle it fast than dig into what's really going on.", type: "likert" as const, axis: "collaborate", direction: -1 as const },
];

export const conflictStyle: TestDefinition = {
  slug: "conflict-style",
  title: "Conflict Style",
  category: "character",
  description:
    "When drama hits group projects, friend groups, or family, how do you usually respond?",
  whatYoullLearn:
    "Whether you tend to compete, avoid, keep the peace, compromise, or problem-solve, and when that helps or hurts.",
  timeMinutes: 4,
  itemCount: 25,
  license: "Original TypologyQuiz items inspired by conflict-style research (self-reflection only)",
  scoreMode: "type",
  questions,
  axes: [
    { key: "compete", label: "Compete", lowLabel: "Low", highLabel: "High", description: "Pushing for your position." },
    { key: "avoid", label: "Avoid", lowLabel: "Low", highLabel: "High", description: "Stepping back from the heat." },
    { key: "accommodate", label: "Accommodate", lowLabel: "Low", highLabel: "High", description: "Putting the other person first." },
    { key: "compromise", label: "Compromise", lowLabel: "Low", highLabel: "High", description: "Meeting in the middle." },
    { key: "collaborate", label: "Collaborate", lowLabel: "Low", highLabel: "High", description: "Digging for a fix that works for everyone." },
  ],
  typeMeta: {
    compete: {
      label: "The Competitor",
      description:
        "You go in for your view and you don't fold easily. Strength: clear standards, and you'll say the thing nobody else will. Watch-out: people can feel steamrolled — try listening all the way through before you argue back.",
    },
    avoid: {
      label: "The Avoider",
      description:
        "You step out of the heat and let things cool down. Strength: you skip a lot of pointless drama. Watch-out: unsaid stuff piles up. One honest sentence, early, usually costs less than the silence.",
    },
    accommodate: {
      label: "The Peacekeeper",
      description:
        "You smooth things over and give people room. Strength: genuine kindness, and people feel safe around you. Watch-out: your own needs can quietly vanish. You can care about someone and still say no.",
    },
    compromise: {
      label: "The Deal-Maker",
      description:
        "You find the middle fast and keep things moving. Strength: fair, practical, hard to stall. Watch-out: split-the-difference sometimes means nobody gets the thing they actually needed.",
    },
    collaborate: {
      label: "The Problem-Solver",
      description:
        "You dig until you find something that genuinely works for both sides. Strength: respect, creativity, and fixes that hold. Watch-out: it takes time and energy you won't always have — some arguments just aren't worth the full process.",
    },
  },
  balanced: {
    label: "The Shape-Shifter",
    description:
      "No single style runs the show — you read the situation and switch. Flexible and hard to pin down, which is genuinely useful. The trade-off: your friends may not know which version of you they're getting.",
  },
  resultType: "radar",
  funFacts: [
    "No style is always best. Winning a debate can cost a friendship; avoiding can cost trust later.",
    "Groups work better when people know each other's conflict style, not just who's doing which task.",
    "You can switch styles. This quiz shows your default under stress.",
  ],
  disclaimer:
    "A short self-reflection tool for everyday conflict, not a clinical or legal assessment.",
};
