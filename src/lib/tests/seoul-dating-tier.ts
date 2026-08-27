import { TestDefinition } from "../types";

// Seoul Dating Tier (서울): dating-style habits, ranked Korean-media style.
// Spectrum axis mapped to S/A/B/C tiers. About YOUR habits, not your worth.

const questions = [
  { id: "sd_01", text: "When I like someone, I tell them clearly rather than leaving clues.", type: "likert" as const, axis: "tier", direction: 1 as const },
  { id: "sd_02", text: "I reply to people I care about within a reasonable window, not strategically.", type: "likert" as const, axis: "tier", direction: 1 as const },
  { id: "sd_03", text: "I plan actual dates instead of 'let's see what happens'.", type: "likert" as const, axis: "tier", direction: 1 as const },
  { id: "sd_04", text: "I listen to understand, not to prepare my next line.", type: "likert" as const, axis: "tier", direction: 1 as const },
  { id: "sd_05", text: "If I'm not feeling it anymore, I say so directly instead of fading.", type: "likert" as const, axis: "tier", direction: 1 as const },
  { id: "sd_06", text: "I remember small details people tell me and bring them up later.", type: "likert" as const, axis: "tier", direction: 1 as const },
  { id: "sd_07", text: "I keep options warm 'just in case' even when I'm seeing someone.", type: "likert" as const, axis: "tier", direction: -1 as const },
  { id: "sd_08", text: "Waiting hours to reply on purpose is a move I use.", type: "likert" as const, axis: "tier", direction: -1 as const },
  { id: "sd_09", text: "I let conversations die rather than risk an awkward check-in.", type: "likert" as const, axis: "tier", direction: -1 as const },
  { id: "sd_10", text: "Ghosting is occasionally my conflict-resolution style.", type: "likert" as const, axis: "tier", direction: -1 as const },
  { id: "sd_11", text: "I'd rather be single than half-interested, and I act like it.", type: "likert" as const, axis: "tier", direction: 1 as const },
  { id: "sd_12", text: "My friends would trust me to treat someone well.", type: "likert" as const, axis: "tier", direction: 1 as const },
];

export const seoulDatingTier: TestDefinition = {
  slug: "seoul-dating-tier",
  title: "Seoul Dating Tier Test (서울 연애)",
  category: "character",
  description:
    "In Korea, dating behavior gets ranked S through C — openly. Find out which tier your actual habits land in.",
  whatYoullLearn:
    "Your dating-habit tier based on effort, honesty, and communication — the things Korean singles famously grade each other on.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "spectrum",
  questions,

  axes: [
    {
      key: "tier",
      label: "Dating habits",
      lowLabel: "Chaotic",
      highLabel: "Green flag",
      description: "Higher scores mean clearer communication and real effort.",
    },
  ],
  terms: [
    {
      term: "서울 연애 (Seoul yeonae)",
      note: "'Seoul dating' — shorthand for South Korea's fast-moving, trend-conscious dating culture where MBTI types, reply speeds, and effort levels are openly discussed.",
    },
    {
      term: "S–C Tiers",
      note: "Korean ranking culture borrowed from gaming: S is top tier, A great, B fine, C needs a patch update. Media outlets literally publish dating-behavior tier lists.",
    },
  ],
  resultType: "meter",
  spectrumBands: [
    {
      max: 30,
      label: "C Tier — Needs a Patch Update",
      description:
        "Strategic reply delays, warm backup options, ghosting as closure. You know exactly what you're doing, which is the problem. Patch notes: one honest sentence ends situationships faster than three months of fading. Try it once.",
    },
    {
      max: 50,
      label: "B Tier — Solid, Occasionally Chaotic",
      description:
        "Real effort most of the time, occasional disappearances under stress. Nobody's writing ballads about you yet; nobody's blocking you either. Consistency is your single upgrade path.",
    },
    {
      max: 70,
      label: "A Tier — Certified Green Flag",
      description:
        "Clear words, remembered details, actual plans, honest endings. People leave dates with you feeling calmer, not confused. In any Korean tier list, you're getting screenshotted favorably.",
    },
    {
      max: 100,
      label: "S Tier — Legendary Rarity",
      description:
        "Direct confession energy, zero games, graceful exits when it's not right. Statistically rare in every dating market on earth. Warning: S-tier players get loved loudly AND taken for granted — keep standards as high as your behavior.",
    },
  ],
  funFacts: [
    "In Korea, couples count relationship time in 100-day anniversaries — effort milestones are culturally built in.",
    "'Some' (썸) is the Korean word for the pre-relationship spark stage — the gray zone this quiz judges you on.",
  ],
  disclaimer:
    "This ranks habits, not humans. Everyone can level up; tiers here are for fun and self-reflection only.",
};
