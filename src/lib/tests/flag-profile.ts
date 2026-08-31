import { TestDefinition } from "../types";

// Red Flag / Green Flag Profile. Type quiz over three flag axes.
// Result reads as a profile, not a verdict: funny before serious.

const questions = [
  // Green flags — relationship superpowers
  { id: "fl_g1", text: "I say what I actually mean instead of hinting and hoping.", type: "likert" as const, axis: "green", direction: 1 as const },
  { id: "fl_g2", text: "When I'm upset, I bring it up calmly instead of letting it rot.", type: "likert" as const, axis: "green", direction: 1 as const },
  { id: "fl_g3", text: "People tell me I'm easy to trust with their feelings.", type: "likert" as const, axis: "green", direction: 1 as const },
  { id: "fl_g4", text: "I show up when I say I will, even for small stuff.", type: "likert" as const, axis: "green", direction: 1 as const },
  // Beige flags — harmless weirdness
  { id: "fl_b1", text: "I have multiple shows I'm 20 minutes into and will never finish.", type: "likert" as const, axis: "beige", direction: 1 as const },
  { id: "fl_b2", text: "'We should hang out soon' is my way of ending conversations warmly.", type: "likert" as const, axis: "beige", direction: 1 as const },
  { id: "fl_b3", text: "I rehearse arguments in the shower that will never happen.", type: "likert" as const, axis: "beige", direction: 1 as const },
  { id: "fl_b4", text: "I say 'five more minutes' to myself at least four times before getting up.", type: "likert" as const, axis: "beige", direction: 1 as const },
  // Red flags — watch yourself
  { id: "fl_r1", text: "I overanalyze a three-word text for longer than I'd admit.", type: "likert" as const, axis: "red", direction: 1 as const },
  { id: "fl_r2", text: "I go quiet instead of saying I'm upset, then expect people to notice.", type: "likert" as const, axis: "red", direction: 1 as const },
  { id: "fl_r3", text: "I've brought up old drama mid-argument about something completely new.", type: "likert" as const, axis: "red", direction: 1 as const },
  { id: "fl_r4", text: "If someone takes hours to reply, I start drafting my exit statement.", type: "likert" as const, axis: "red", direction: 1 as const },
];

export const flagProfile: TestDefinition = {
  slug: "flag-profile",
  title: "Red Flag / Green Flag Profile",
  category: "character",
  description:
    "Not a verdict. A profile. Find out your green flags, your beige flags, and the ones to watch.",
  whatYoullLearn:
    "Which flags dominate your vibe right now, plus specific receipts for each. Send it to someone who needs to confirm or deny these allegations.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,
  axes: [
    { key: "green", label: "Green flags", lowLabel: "Low", highLabel: "High", description: "Direct, steady, safe-to-love behaviors." },
    { key: "beige", label: "Beige flags", lowLabel: "Low", highLabel: "High", description: "Harmless quirks everyone secretly has." },
    { key: "red", label: "Red flags", lowLabel: "Low", highLabel: "High", description: "Habits worth catching early." },
  ],
  typeMeta: {
    green: {
      label: "Walking Green Flag",
      description:
        "Communicates directly, shows up consistently, doesn't punish people for honesty. This is rarer than it should be and it compounds: the people close to you get calmer. Keep the bar where it is.",
    },
    beige: {
      label: "Beige Flag Collection",
      description:
        "47 unfinished shows. 'We should hang out' with no plan attached. Shower arguments you win every time. None of this is a problem, it's just who you are, and honestly these flags make you lovable. Confirm or deny in the replies.",
    },
    red: {
      label: "Watch Yourself",
      description:
        "Overthinking a three-word text. Going silent and hoping mind-reading kicks in. Bringing up 2022 during a fight about dishes. Good news: every one of these is a habit, not a identity. Name it and it starts losing power.",
    },
  },
  balanced: {
    label: "Balanced Allegations",
    description:
      "No single flag dominates you. Some directness, some quirks, some texts analyzed under lab conditions. Basically: human configuration detected. Send this to the friend who claims they have no red flags. Evidence says otherwise.",
  },
  resultType: "bars",
  funFacts: [
    "Everyone has all three flags. The ratio is the personality.",
    "Beige flags are the internet's favorite because they're confessions nobody gets hurt by.",
    "Green flags are boring on paper and life-changing in practice.",
  ],
  disclaimer:
    "This is a fun self-reflection quiz, not a character judgment or relationship advice. Flags here are habits, not diagnoses.",
};
