import { TestDefinition } from "../types";

// Desi Family Role Test: where you sit in the family ecosystem.
// Type quiz, 4 axes x 3 items.

const questions = [
  // Responsible eldest
  { id: "df_e1", text: "Responsibility found me early and never left.", type: "likert" as const, axis: "eldest", direction: 1 as const },
  { id: "df_e2", text: "I manage everyone's expectations — parents', relatives', siblings'.", type: "likert" as const, axis: "eldest", direction: 1 as const },
  { id: "df_e3", text: "Being babied describes my position accurately.", type: "likert" as const, axis: "eldest", direction: -1 as const },
  // Babied youngest
  { id: "df_y1", text: "Rules mysteriously apply to me more softly than to others.", type: "likert" as const, axis: "youngest", direction: 1 as const },
  { id: "df_y2", text: "Even now, my opinions get 'you're still a baby' responses.", type: "likert" as const, axis: "youngest", direction: 1 as const },
  { id: "df_y3", text: "I was given independence early; nobody checked on me much.", type: "likert" as const, axis: "youngest", direction: -1 as const },
  // Peacemaker cousin
  { id: "df_c1", text: "When family arguments erupt, I'm the one translating both sides.", type: "likert" as const, axis: "peacemaker", direction: 1 as const },
  { id: "df_c2", text: "Relatives of all generations actually like me — a diplomatic achievement.", type: "likert" as const, axis: "peacemaker", direction: 1 as const },
  { id: "df_c3", text: "Family drama doesn't involve me; I stay far from it.", type: "likert" as const, axis: "peacemaker", direction: -1 as const },
  // Rebel
  { id: "df_r1", text: "I question traditions others follow without asking why.", type: "likert" as const, axis: "rebel", direction: 1 as const },
  { id: "df_r2", text: "'Log kya kahenge' (what will people say) has never once stopped me.", type: "likert" as const, axis: "rebel", direction: 1 as const },
  { id: "df_r3", text: "Family approval genuinely matters to my decisions.", type: "likert" as const, axis: "rebel", direction: -1 as const },
];

export const desiFamilyRole: TestDefinition = {
  slug: "desi-family-role",
  title: "Desi Family Role Test",
  category: "character",
  description:
    "Every South Asian family assigns roles at birth: the Responsible Eldest, the Babied Youngest, the Peacemaker Cousin, the Rebel. Which one are you stuck with?",
  whatYoullLearn:
    "Your family-system role, its unofficial job description, and the boundary you're allowed to set this year.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "type",
  questions,

  axes: [
    { key: "eldest", label: "Responsible Eldest", lowLabel: "Low", highLabel: "High", description: "Carries the family's expectations." },
    { key: "youngest", label: "Babied Youngest", lowLabel: "Low", highLabel: "High", description: "Forever twelve at family events." },
    { key: "peacemaker", label: "Peacemaker Cousin", lowLabel: "Low", highLabel: "High", description: "Liked by all factions." },
    { key: "rebel", label: "The Rebel", lowLabel: "Low", highLabel: "High", description: "Asks 'why' out loud." },
  ],
  terms: [
    {
      term: "Desi",
      note: "A self-description for people of South Asian heritage (India, Pakistan, Bangladesh, Sri Lanka and diasporas) — used with pride and humor.",
    },
    {
      term: "'Log kya kahenge'",
      note: "'What will people say?' — the famous social pressure phrase in desi households. Entire life decisions have been negotiated against this sentence.",
    },
  ],
  typeMeta: {
    eldest: {
      label: "📊 The Responsible Eldest",
      description:
        "You were promoted to third parent before you consented. Achievements are expected, struggles are hidden, and the remote control was never yours. Watch-out: eldest children are allowed to fail, rest, and be young. The role was assigned, not earned — renegotiate its terms.",
    },
    youngest: {
      label: "🍼 The Babied Youngest",
      description:
        "You could announce a career change at 40 and still hear 'but are you eating properly?' Being protected is love in your family's language. Watch-out: underneath the babying, they'd respect the grown-up version of you. Show them gradually.",
    },
    peacemaker: {
      label: "🕊️ The Peacemaker Cousin",
      description:
        "Every faction trusts you; every argument routes through you. A diplomatic miracle that costs real energy. Watch-out: peace-making is labor, not personality. Let two relatives resolve their own WhatsApp dispute this holiday.",
    },
    rebel: {
      label: "🔥 The Rebel",
      description:
        "You asked 'why?' one time too many and became The Question Asker. Your path is harder but it widens the road for everyone behind you. Watch-out: rebellion without allies burns out — find the aunties who secretly agree with you. They exist.",
    },
  },
  balanced: {
    label: "🍽️ The Family Function Shapeshifter",
    description:
      "Eldest duties, youngest privileges, cousin diplomacy, rebel opinions — deployed contextually across functions. The family can't classify you, which is honestly the most powerful position available.",
  },
  resultType: "bars",
  funFacts: [
    "'Family function' in desi culture is less an event, more a live performance review with catering.",
    "Birth-order research finds eldest responsibility patterns across many cultures, not just South Asian ones.",
  ],
  disclaimer:
    "An affectionate quiz on family dynamics — every family is complicated, and this is for laughs and reflection only.",
};
