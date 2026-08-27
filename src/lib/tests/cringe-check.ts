import { TestDefinition } from "../types";

// Cringe Check: self-awareness of your own cringe, measured kindly.
// Single spectrum axis.

const questions = [
  { id: "cc_01", text: "I look back at things I said years ago and physically wince.", type: "likert" as const, axis: "cringe", direction: 1 as const },
  { id: "cc_02", text: "I've caught myself performing slightly for an audience, even a small one.", type: "likert" as const, axis: "cringe", direction: 1 as const },
  { id: "cc_03", text: "I own my weird interests loudly, even uncool ones.", type: "likert" as const, axis: "cringe", direction: -1 as const },
  { id: "cc_04", text: "After social events, I audit my behavior like security footage.", type: "likert" as const, axis: "cringe", direction: 1 as const },
  { id: "cc_05", text: "I use outdated slang on purpose because it's funny. Or so I claim.", type: "likert" as const, axis: "cringe", direction: 1 as const },
  { id: "cc_06", text: "Being seen trying hard is scarier to me than failing quietly.", type: "likert" as const, axis: "cringe", direction: -1 as const },
  { id: "cc_07", text: "I have sent messages that future me had to apologize for.", type: "likert" as const, axis: "cringe", direction: 1 as const },
  { id: "cc_08", text: "I'd rather be cringe and happy than cool and careful.", type: "likert" as const, axis: "cringe", direction: -1 as const },
  { id: "cc_09", text: "I rehearse casual sentences before saying them so they land right.", type: "likert" as const, axis: "cringe", direction: -1 as const },
  { id: "cc_10", text: "Friends have affectionately told me something I did was 'a lot'.", type: "likert" as const, axis: "cringe", direction: 1 as const },
  { id: "cc_11", text: "I delete posts that don't get enough attention.", type: "likert" as const, axis: "cringe", direction: -1 as const },
  { id: "cc_12", text: "I've been the last person to realize a joke was over. Repeatedly.", type: "likert" as const, axis: "cringe", direction: 1 as const },
];

export const cringeCheck: TestDefinition = {
  slug: "cringe-check",
  title: "Cringe Check",
  category: "perception",
  description:
    "Everyone is someone's cringe. The only question is whether you know it — and whether you care.",
  whatYoullLearn:
    "Where you sit between Unbotherable Legend and Professionally Cringe, and why the middle might be overrated.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "spectrum",
  questions,
  axes: [
    {
      key: "cringe",
      label: "Cringe exposure",
      lowLabel: "Carefully curated",
      highLabel: "Fully unbothered",
      description: "Higher scores mean more public weirdness and less damage control.",
    },
  ],
  resultType: "wave",
  spectrumBands: [
    {
      max: 25,
      label: "🔒 Curated & Cautious",
      description:
        "Every post considered, every sentence pre-flighted, zero documented incidents. Flawless image — but 'trying hard' scares you more than failing does, which quietly costs you things you'd be great at. One unscheduled weird move this week. Prescription written.",
    },
    {
      max: 45,
      label: "😎 Cool With a Ledger",
      description:
        "You seem effortless because you keep books. Occasional calculated risks, quick deletions, no receipts left behind. Effective strategy; just make sure the ledger never starts editing your actual personality.",
    },
    {
      max: 65,
      label: "😬 Self-Aware Cringe Enjoyer",
      description:
        "You know exactly when you're being A Lot, and you do it anyway, with commentary. This is the internet's favorite configuration: confident enough to be weird, aware enough to laugh first. You are fine. Genuinely.",
    },
    {
      max: 85,
      label: "🎪 Professionally Cringe",
      description:
        "Outdated slang deployed deliberately. Jokes enjoyed past their expiration date. Friends say 'you're a lot' and mean it as love language. You have something rare: immunity to secondhand embarrassment about yourself. Guard it.",
    },
    {
      max: 100,
      label: "🏆 Unbotherable Legend",
      description:
        "You have never once edited yourself for the room. Either supreme confidence or total lack of witnesses — either way, museums should study you. Just keep one honest friend with veto power. Everyone needs an editor sometimes.",
    },
  ],
  funFacts: [
    "'Cringe' flipped from insult to identity — owning it became the whole point.",
    "Psychologists find cringe reactions peak when we see someone break an unspoken rule we secretly want to break.",
  ],
  disclaimer:
    "This is a playful quiz about social self-awareness, not a judgment of your worth or taste.",
};
