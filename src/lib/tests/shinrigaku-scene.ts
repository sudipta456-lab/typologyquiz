import { TestDefinition } from "../types";

// Shinrigaku Scene Test (心理テスト): Japanese scenario-psychology format.
// Situations as Likert statements; four reaction styles.

const questions = [
  // Direct
  { id: "sg_d1", text: "Someone spills a drink on you at a party. Your honest first instinct: say it straight, no drama.", type: "likert" as const, axis: "direct", direction: 1 as const },
  { id: "sg_d2", text: "A friend cancels last minute again. Your gut move: tell them plainly it bothers you.", type: "likert" as const, axis: "direct", direction: 1 as const },
  { id: "sg_d3", text: "When something's unfair, staying silent feels worse than speaking up.", type: "likert" as const, axis: "direct", direction: 1 as const },
  // Diplomat
  { id: "sg_p1", text: "In group tension, I naturally become the translator between both sides.", type: "likert" as const, axis: "diplomat", direction: 1 as const },
  { id: "sg_p2", text: "I can disagree with someone while making them feel respected.", type: "likert" as const, axis: "diplomat", direction: 1 as const },
  { id: "sg_p3", text: "Keeping the peace matters less to me than being understood.", type: "likert" as const, axis: "diplomat", direction: -1 as const },
  // Analyst
  { id: "sg_a1", text: "Before reacting, I catch myself asking why the person acted that way.", type: "likert" as const, axis: "analyst", direction: 1 as const },
  { id: "sg_a2", text: "Awkward situations fascinate me more than they embarrass me.", type: "likert" as const, axis: "analyst", direction: 1 as const },
  { id: "sg_a3", text: "I react first and analyze later; that's just how I'm built.", type: "likert" as const, axis: "analyst", direction: -1 as const },
  // Ghost
  { id: "sg_g1", text: "My first instinct in awkward moments is to find the nearest exit.", type: "likert" as const, axis: "ghost", direction: 1 as const },
  { id: "sg_g2", text: "I process uncomfortable scenes alone before dealing with anyone.", type: "likert" as const, axis: "ghost", direction: 1 as const },
  { id: "sg_g3", text: "Confronting things immediately is my natural style.", type: "likert" as const, axis: "ghost", direction: -1 as const },
];

export const shinrigakuScene: TestDefinition = {
  slug: "shinrigaku-scene",
  title: "Shinrigaku Scene Test (心理テスト)",
  category: "thinking",
  description:
    "Japan's classic scenario psychology format. Awkward situations, four reaction styles: which one runs you?",
  whatYoullLearn:
    "Your default reaction style under social pressure: Direct, Diplomat, Analyst, or Exit-Seeker.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "direct", label: "Direct", lowLabel: "Low", highLabel: "High", description: "Says it straight, no drama." },
    { key: "diplomat", label: "Diplomat", lowLabel: "Low", highLabel: "High", description: "Translates between sides." },
    { key: "analyst", label: "Analyst", lowLabel: "Low", highLabel: "High", description: "Understands before reacting." },
    { key: "ghost", label: "Exit-Seeker", lowLabel: "Low", highLabel: "High", description: "Withdraws to process first." },
  ],
  terms: [
    {
      term: "心理テスト (Shinrigaku test)",
      note: "'Psychology test': Japan's beloved magazine and TV format where silly scenarios ('you're at a party, someone spills a drink...') supposedly reveal your personality. This quiz modernizes the format honestly.",
    },
  ],
  typeMeta: {
    direct: {
      label: "The Straight Responder",
      description:
        "Awkwardness doesn't survive contact with you; you name the thing and move on. Superpower: nobody wastes time decoding you. Watch-out: directness lands softer with two seconds of setup.",
    },
    diplomat: {
      label: "The Diplomat",
      description:
        "You translate people to each other for sport. Rooms cool down when you enter them. Watch-out: translators deserve subtitles too; say your own line occasionally.",
    },
    analyst: {
      label: "The Analyst",
      description:
        "Your response arrives after your understanding. You're rarely unfair and never fast. Watch-out: some moments expire while being analyzed. Trust your first read sometimes.",
    },
    ghost: {
      label: "The Exit-Seeker",
      description:
        "Your instincts are excellent at finding doors. Processing alone is legitimate; it's just not the whole skill tree. Watch-out: one returned message turns exits into re-entries.",
    },
  },
  balanced: {
    label: "The Situational Responder",
    description:
      "Direct here, diplomatic there, analytical when it matters, gone when it doesn't. Context drives you. That's range, and it's rarer than any single style.",
  },
  resultType: "bars",
  funFacts: [
    "Japanese scenario tests became a magazine staple partly because they feel like tiny stories instead of exams.",
    "Reaction style is trainable; most people can add a second style within weeks of practicing.",
  ],
  disclaimer:
    "A fun quiz about social reaction styles, not a psychology assessment.",
};
