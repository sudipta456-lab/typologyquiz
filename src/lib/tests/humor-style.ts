import { TestDefinition } from "../types";

// What's Your Sense of Humor — 4 humor styles (NEW).
// Type quiz: ipsative pick-top with flat-profile -> "The Blend".
// Each axis mixes forward + reverse items so straight-lining -> balanced.
// Styles loosely inspired by the Humor Styles Questionnaire (Martin et al.).

const questions = [
  // Affiliative — warm, bring people together with humor
  { id: "hu_af1", text: "I crack jokes to make the people around me feel comfortable.", type: "likert" as const, axis: "affiliative", direction: 1 as const },
  { id: "hu_af2", text: "My humor is mostly about sharing a laugh with the group.", type: "likert" as const, axis: "affiliative", direction: 1 as const },
  { id: "hu_af3", text: "I'm the one easing tension with a well-timed joke.", type: "likert" as const, axis: "affiliative", direction: 1 as const },
  { id: "hu_af4", text: "I'd rather keep my jokes to myself than share them out loud.", type: "likert" as const, axis: "affiliative", direction: -1 as const },
  { id: "hu_af5", text: "Making other people laugh isn't really my thing.", type: "likert" as const, axis: "affiliative", direction: -1 as const },

  // Self-enhancing — find the funny side, use humor to cope
  { id: "hu_se1", text: "When things go wrong, I can usually find the funny side.", type: "likert" as const, axis: "selfEnhancing", direction: 1 as const },
  { id: "hu_se2", text: "A sense of humor helps me stay chill under stress.", type: "likert" as const, axis: "selfEnhancing", direction: 1 as const },
  { id: "hu_se3", text: "I laugh at life's absurd moments even when I'm alone.", type: "likert" as const, axis: "selfEnhancing", direction: 1 as const },
  { id: "hu_se4", text: "When I'm stressed, humor is the last thing on my mind.", type: "likert" as const, axis: "selfEnhancing", direction: -1 as const },
  { id: "hu_se5", text: "I rarely see anything funny in a bad situation.", type: "likert" as const, axis: "selfEnhancing", direction: -1 as const },

  // Edgy — teasing, sarcasm, roasting
  { id: "hu_ed1", text: "My humor leans sarcastic or teasing.", type: "likert" as const, axis: "edgy", direction: 1 as const },
  { id: "hu_ed2", text: "Roasting my friends (with love) is a love language.", type: "likert" as const, axis: "edgy", direction: 1 as const },
  { id: "hu_ed3", text: "I'll go for the savage joke if it's genuinely funny.", type: "likert" as const, axis: "edgy", direction: 1 as const },
  { id: "hu_ed4", text: "I avoid jokes that poke fun at people.", type: "likert" as const, axis: "edgy", direction: -1 as const },
  { id: "hu_ed5", text: "Sarcasm isn't really my style.", type: "likert" as const, axis: "edgy", direction: -1 as const },

  // Self-deprecating — jokes at your own expense
  { id: "hu_sd1", text: "I'm quick to make myself the punchline.", type: "likert" as const, axis: "selfDeprecating", direction: 1 as const },
  { id: "hu_sd2", text: "Laughing at my own fails is how I roll with them.", type: "likert" as const, axis: "selfDeprecating", direction: 1 as const },
  { id: "hu_sd3", text: "I'll happily tell an embarrassing story about myself for the laugh.", type: "likert" as const, axis: "selfDeprecating", direction: 1 as const },
  { id: "hu_sd4", text: "I don't really joke about my own flaws.", type: "likert" as const, axis: "selfDeprecating", direction: -1 as const },
  { id: "hu_sd5", text: "I'd rather not be the butt of the joke, even my own.", type: "likert" as const, axis: "selfDeprecating", direction: -1 as const },
];

export const humorStyle: TestDefinition = {
  slug: "humor-style",
  title: "What's Your Sense of Humor",
  category: "character",
  description:
    "Warm jokester, chill optimist, sarcastic roaster, or self-roast champion? Find your comedy lane.",
  whatYoullLearn:
    "The humor style you lean on most, what it does for you, and the little watch-out that comes with it.",
  timeMinutes: 4,
  itemCount: 20,
  license: "Original TypologyQuiz items, inspired by the Humor Styles Questionnaire (self-reflection only).",
  isNew: true,
  scoreMode: "type",
  questions,
  axes: [
    { key: "affiliative", label: "Warm", lowLabel: "Low", highLabel: "High", description: "Humor that brings people together." },
    { key: "selfEnhancing", label: "Sunny", lowLabel: "Low", highLabel: "High", description: "Humor that helps you cope and stay light." },
    { key: "edgy", label: "Edgy", lowLabel: "Low", highLabel: "High", description: "Teasing, sarcasm, and roasts." },
    { key: "selfDeprecating", label: "Self-Roast", lowLabel: "Low", highLabel: "High", description: "Jokes at your own expense." },
  ],
  typeMeta: {
    affiliative: {
      label: "The Warm Jokester",
      description:
        "You use humor to connect — easing tension and making people feel in on the joke. Strength: people relax around you. Watch-out: it's okay to be serious sometimes too.",
    },
    selfEnhancing: {
      label: "The Chill Optimist",
      description:
        "You find the funny side of chaos, and it keeps you steady. Strength: humor as a genuine coping tool. Watch-out: not every hard thing needs to be laughed off right away.",
    },
    edgy: {
      label: "The Sarcastic Roaster",
      description:
        "Your humor has teeth — teasing, dry, quick. Strength: sharp and hilarious with people who get it. Watch-out: read the room; the same joke lands very differently on a bad day.",
    },
    selfDeprecating: {
      label: "The Self-Roast Champion",
      description:
        "You're first to make yourself the punchline, and it's disarming. Strength: humble and relatable. Watch-out: the occasional reminder that you don't have to put yourself down for a laugh.",
    },
  },
  balanced: {
    label: "The Blend",
    description:
      "No single lane owns your humor — you shift between warm, sunny, edgy, and self-roast depending on the room. Flexible and hard to predict, in a good way.",
  },
  resultType: "radar",
  funFacts: [
    "Psychologists split humor into styles that connect (warm, sunny) and styles that can sting (edgy, self-roast) — most people use a mix.",
    "The 'warm' and 'sunny' styles tend to track with feeling good; heavy self-roasting is the one to keep an eye on if it stops being fun.",
    "Compare with friends — a warm jokester plus a sarcastic roaster is basically a comedy duo.",
  ],
  disclaimer:
    "A light vibe check on how you joke, not a personality verdict. Your humor shifts with mood and company.",
};
