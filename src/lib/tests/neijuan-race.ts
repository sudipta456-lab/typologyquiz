import { TestDefinition } from "../types";

// Neijuan Rat-Race Test (内卷): competitive burnout intensity.
// Spectrum axis measuring involution pressure.

const questions = [
  { id: "nj_01", text: "If everyone around me is working harder, I feel physically unable to rest.", type: "likert" as const, axis: "race", direction: 1 as const },
  { id: "nj_02", text: "I've stayed late purely so it doesn't look bad; no real work done.", type: "likert" as const, axis: "race", direction: 1 as const },
  { id: "nj_03", text: "Free time feels like falling behind.", type: "likert" as const, axis: "race", direction: 1 as const },
  { id: "nj_04", text: "I've signed up for something just because others did.", type: "likert" as const, axis: "race", direction: 1 as const },
  { id: "nj_05", text: "Being average in a group genuinely bothers me.", type: "likert" as const, axis: "race", direction: 1 as const },
  { id: "nj_06", text: "I compete in areas I don't even care about. It's automatic.", type: "likert" as const, axis: "race", direction: 1 as const },
  { id: "nj_07", text: "I can watch others succeed without recalculating my own worth.", type: "likert" as const, axis: "race", direction: -1 as const },
  { id: "nj_08", text: "I quit things that stop making sense, even if everyone continues.", type: "likert" as const, axis: "race", direction: -1 as const },
  { id: "nj_09", text: "Effort without a visible scoreboard feels pointless to me.", type: "likert" as const, axis: "race", direction: 1 as const },
  { id: "nj_10", text: "I define success by my own past self, not other people.", type: "likert" as const, axis: "race", direction: -1 as const },
  { id: "nj_11", text: "Exams, rankings, leaderboards: my whole life has them and I hate that I need them.", type: "likert" as const, axis: "race", direction: 1 as const },
  { id: "nj_12", text: "Rest is productive; I actually believe that.", type: "likert" as const, axis: "race", direction: -1 as const },
];

export const neijuanRace: TestDefinition = {
  slug: "neijuan-race",
  title: "Neijuan Rat-Race Test (内卷)",
  category: "character",
  description:
    "Neijuan means running faster on a track that isn't going anywhere. Measure how deep the race has you.",
  whatYoullLearn:
    "Your involution level (how much competition pressure is driving you) and where the exits actually are.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "spectrum",
  questions,

  axes: [
    {
      key: "race",
      label: "Race pressure",
      lowLabel: "Out of the race",
      highLabel: "Deep involuted",
      description: "Higher scores mean competition is driving more of your choices.",
    },
  ],
  terms: [
    {
      term: "内卷 (Nèijuǎn)",
      note: "'Involution': Chinese internet slang for hyper-competition where everyone works harder but nobody gets ahead. Like a concert where one person stands, then everyone stands, and now everyone's tired for the same view.",
    },
  ],
  resultType: "meter",
  spectrumBands: [
    {
      max: 30,
      label: "Out of the Race",
      description:
        "You compete only where it counts to you, and other people's scoreboards can't reach you. Rare air. Guard it; involution is contagious.",
    },
    {
      max: 50,
      label: "Light Competitor",
      description:
        "Healthy competitive sparks in areas you actually care about; peace everywhere else. Roughly the factory setting humans come with. Well maintained.",
    },
    {
      max: 70,
      label: "Involuted & Aware",
      description:
        "You feel the pull constantly (staying late for optics, signing up from FOMO) but you SEE it happening, which is step one. Try one deliberate non-participation per month and watch nothing bad occur.",
    },
    {
      max: 100,
      label: "Deep Involution",
      description:
        "The race has your nervous system on lease. Effort needs a scoreboard, rest reads as falling behind, rivals live rent-free in your head. Real talk: the track isn't going anywhere, so you're allowed to step off. Nothing happens. We checked.",
    },
  ],
  funFacts: [
    "Neijuan was voted one of China's buzzwords of the year: an entire society naming its own treadmill.",
    "Economists call this a 'collective action trap': individually rational, collectively exhausting.",
  ],
  disclaimer:
    "A reflective quiz about competition pressure, not mental health advice. If burnout is serious, real support beats real leaderboards.",
};
