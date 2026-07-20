import { TestDefinition } from "../types";

// Texting Style — 5 chat personas.
// Type quiz: ipsative pick-top with flat-profile -> "The Shape-shifter".
// Every axis mixes forward + reverse items so straight-lining lands balanced.

const questions = [
  // Fast — instant, always-on replies
  { id: "tx_f1", text: "I reply to friends almost immediately if I see the message.", type: "likert" as const, axis: "fast", direction: 1 as const },
  { id: "tx_f2", text: "Leaving someone on read for hours stresses me out.", type: "likert" as const, axis: "fast", direction: 1 as const },
  { id: "tx_f3", text: "My phone buzzes and I'm already typing back.", type: "likert" as const, axis: "fast", direction: 1 as const },
  { id: "tx_f4", text: "Nobody expects a quick answer from me, and that's fair.", type: "likert" as const, axis: "fast", direction: -1 as const },
  { id: "tx_f5", text: "I'm fine letting a message sit for a day.", type: "likert" as const, axis: "fast", direction: -1 as const },

  // Delayed — slow burn, batched replies
  { id: "tx_d1", text: "I often open a chat and forget to reply until later.", type: "likert" as const, axis: "delayed", direction: 1 as const },
  { id: "tx_d2", text: "I batch my replies for when I actually feel like talking.", type: "likert" as const, axis: "delayed", direction: 1 as const },
  { id: "tx_d3", text: "Silent mode is my default more often than I admit.", type: "likert" as const, axis: "delayed", direction: 1 as const },
  { id: "tx_d4", text: "I clear my unread messages the same day, every day.", type: "likert" as const, axis: "delayed", direction: -1 as const },
  { id: "tx_d5", text: "Forgetting to answer someone basically never happens to me.", type: "likert" as const, axis: "delayed", direction: -1 as const },

  // Terse — short, minimal, low-effort text
  { id: "tx_p1", text: "My texts are short. Voice notes and essays are rare.", type: "likert" as const, axis: "terse", direction: 1 as const },
  { id: "tx_p2", text: "I'd rather say it in person than type a paragraph.", type: "likert" as const, axis: "terse", direction: 1 as const },
  { id: "tx_p3", text: "A thumbs-up is a complete reply as far as I'm concerned.", type: "likert" as const, axis: "terse", direction: 1 as const },
  { id: "tx_p4", text: "My messages usually run several lines long.", type: "likert" as const, axis: "terse", direction: -1 as const },
  { id: "tx_p5", text: "I like typing out the whole story instead of summing it up.", type: "likert" as const, axis: "terse", direction: -1 as const },

  // Expressive — emojis, energy, big feelings on screen
  { id: "tx_e1", text: "I use lots of emojis, reactions, or memes to show tone.", type: "likert" as const, axis: "expressive", direction: 1 as const },
  { id: "tx_e2", text: "My messages get long when I actually care about the topic.", type: "likert" as const, axis: "expressive", direction: 1 as const },
  { id: "tx_e3", text: "Caps, extra letters, and gifs are how I get my mood across.", type: "likert" as const, axis: "expressive", direction: 1 as const },
  { id: "tx_e4", text: "I text in plain words with no emojis or reactions.", type: "likert" as const, axis: "expressive", direction: -1 as const },
  { id: "tx_e5", text: "Big reactions in a group chat feel like too much to me.", type: "likert" as const, axis: "expressive", direction: -1 as const },

  // Careful — tone-checking, rereading, editing
  { id: "tx_c1", text: "I double-check my tone so I don't come off rude over text.", type: "likert" as const, axis: "careful", direction: 1 as const },
  { id: "tx_c2", text: "I reread messages before sending when it matters.", type: "likert" as const, axis: "careful", direction: 1 as const },
  { id: "tx_c3", text: "I'll rewrite one sentence three times before I hit send.", type: "likert" as const, axis: "careful", direction: 1 as const },
  { id: "tx_c4", text: "I hit send the second I finish typing, no rereading.", type: "likert" as const, axis: "careful", direction: -1 as const },
  { id: "tx_c5", text: "How a message might land isn't something I think about.", type: "likert" as const, axis: "careful", direction: -1 as const },
];

export const textingStyle: TestDefinition = {
  slug: "texting-style",
  title: "Texting Style",
  category: "personality",
  description: "Are you instant, delayed, minimal, full-send, or a tone-checker in the chat?",
  whatYoullLearn: "How you show up over text, what it does for you, and why friends sometimes misread you.",
  timeMinutes: 4,
  itemCount: 25,
  license: "Original TypologyQuiz items (self-reflection only)",
  scoreMode: "type",
  questions,
  axes: [
    { key: "fast", label: "Instant", lowLabel: "Low", highLabel: "High", description: "Replying the moment you see it." },
    { key: "delayed", label: "Slow burn", lowLabel: "Low", highLabel: "High", description: "Answering on your own schedule." },
    { key: "terse", label: "Minimal", lowLabel: "Low", highLabel: "High", description: "Short, clean, no extra words." },
    { key: "expressive", label: "Full-send", lowLabel: "Low", highLabel: "High", description: "Emojis, energy, and long messages." },
    { key: "careful", label: "Tone-check", lowLabel: "Low", highLabel: "High", description: "Editing before you hit send." },
  ],
  typeMeta: {
    fast: {
      label: "Instant Replier",
      description:
        "Speed is basically your love language online. Strength: people always feel like you're there. Watch-out: being reachable 24/7 gets exhausting, and you're allowed to put the phone down.",
    },
    delayed: {
      label: "Slow Burn Texter",
      description:
        "You reply when you actually have brain space for it. Strength: you protect your own time without a fight. Watch-out: silence reads as distance to people who don't know that about you.",
    },
    terse: {
      label: "Minimalist Texter",
      description:
        "Short, clean, done. Strength: no one has to scroll to find your point. Watch-out: brevity can land colder than you meant, especially over a screen.",
    },
    expressive: {
      label: "Full-Send Texter",
      description:
        "Emojis, essays, energy — your mood comes through loud and clear. Strength: nobody has to guess your tone. Watch-out: some conversations are a two-minute call, not a twelve-message thread.",
    },
    careful: {
      label: "Tone-Checker",
      description:
        "You craft the message before it goes out. Strength: way fewer accidental misfires. Watch-out: spending five minutes agonizing over whether 'ok' sounds mad.",
    },
  },
  balanced: {
    label: "The Shape-Shifter",
    description:
      "No single texting mode owns you — you're fast in one chat, quiet in another, chaotic in the group, careful in the DMs. Adaptable, and genuinely hard to pin down.",
  },
  resultType: "radar",
  funFacts: [
    "Texting style says almost nothing about how warm you are in person — plenty of slow repliers are the best friend in the room.",
    "Different group chats pull different styles out of the same person.",
    "Share this with someone you constantly misread over text.",
  ],
  disclaimer: "A light vibe check on digital habits, not a social skills diagnosis.",
};
