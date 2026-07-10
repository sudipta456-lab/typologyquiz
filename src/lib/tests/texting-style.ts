import { TestDefinition } from "../types";
import { scoreLikertAxes, topAxis } from "./score-utils";

const questions = [
  { id: "tx_f1", text: "I reply to friends almost immediately if I see the message.", type: "likert" as const, axis: "fast", direction: 1 as const },
  { id: "tx_f2", text: "Leaving someone on read for hours stresses me out.", type: "likert" as const, axis: "fast", direction: 1 as const },
  { id: "tx_d1", text: "I often open a chat and forget to reply until later.", type: "likert" as const, axis: "delayed", direction: 1 as const },
  { id: "tx_d2", text: "I batch replies when I feel like talking.", type: "likert" as const, axis: "delayed", direction: 1 as const },
  { id: "tx_p1", text: "My texts are short. Voice notes and essays are rare.", type: "likert" as const, axis: "terse", direction: 1 as const },
  { id: "tx_p2", text: "I would rather say it in person than type a paragraph.", type: "likert" as const, axis: "terse", direction: 1 as const },
  { id: "tx_e1", text: "I use lots of emojis, reactions, or memes to show tone.", type: "likert" as const, axis: "expressive", direction: 1 as const },
  { id: "tx_e2", text: "My messages are long when I care about the topic.", type: "likert" as const, axis: "expressive", direction: 1 as const },
  { id: "tx_c1", text: "I double-check tone so I do not sound rude over text.", type: "likert" as const, axis: "careful", direction: 1 as const },
  { id: "tx_c2", text: "I reread messages before sending when it matters.", type: "likert" as const, axis: "careful", direction: 1 as const },
  { id: "tx_f3", text: "Group chats feel better when people reply fast.", type: "likert" as const, axis: "fast", direction: 1 as const },
  { id: "tx_d3", text: "Silent mode is my default more often than I admit.", type: "likert" as const, axis: "delayed", direction: 1 as const },
];

const META: Record<string, { label: string; description: string }> = {
  fast: {
    label: "Instant replier",
    description: "Speed is your love language online. Strength: present. Watch-out: burnout from always being available.",
  },
  delayed: {
    label: "Slow burn texter",
    description: "You reply when you have brain space. Strength: boundaries. Watch-out: people may misread silence.",
  },
  terse: {
    label: "Minimalist texter",
    description: "Short and clean. Strength: efficiency. Watch-out: can read colder than you mean.",
  },
  expressive: {
    label: "Full-send texter",
    description: "Emojis, essays, energy. Strength: clear vibe. Watch-out: long threads when a call would be easier.",
  },
  careful: {
    label: "Tone-checker",
    description: "You craft messages carefully. Strength: fewer accidents. Watch-out: overthinking a simple ok.",
  },
};

export const textingStyle: TestDefinition = {
  slug: "texting-style",
  title: "Texting Style",
  category: "personality",
  description: "Are you instant, delayed, minimal, full-send, or a tone-checker in the chat?",
  whatYoullLearn: "How you show up over text and why friends might misread you.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  questions,
  axes: Object.entries(META).map(([key, m]) => ({
    key,
    label: m.label,
    lowLabel: "Low",
    highLabel: "High",
    description: m.description,
  })),
  resultType: "radar",
  funFacts: [
    "Texting style is not the same as how kind you are in person.",
    "Different friend groups can pull different styles out of you.",
    "Share this with someone you always misread over chat.",
  ],
  disclaimer: "A light self-reflection quiz about digital habits, not a social skills diagnosis.",
};

export function scoreTexting(answers: Record<string, number>) {
  const keys = ["fast", "delayed", "terse", "expressive", "careful"];
  const scores = scoreLikertAxes(questions, answers, keys);
  const top = topAxis(scores, META);
  return { scores, category: { label: top.label, description: top.description } };
}
