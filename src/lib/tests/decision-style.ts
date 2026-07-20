import { TestDefinition } from "../types";

// Overthinker or Go-With-Gut — decision-style vibe check (NEW).
// Single "decision" axis: high = overthinker/maximizer, low = gut/satisficer.
// Balanced forward/reverse items so a constant answer lands mid-spectrum.
// Loosely inspired by maximizer vs satisficer decision research.

const questions = [
  // Forward = overthinker/maximizer leaning (direction 1)
  { id: "ds_01", text: "Before I pick anything, I like to compare all the options first.", type: "likert" as const, axis: "decision", direction: 1 as const },
  { id: "ds_02", text: "I'll read a pile of reviews before buying even something small.", type: "likert" as const, axis: "decision", direction: 1 as const },
  { id: "ds_03", text: "After I decide, I often keep wondering if I made the right call.", type: "likert" as const, axis: "decision", direction: 1 as const },
  { id: "ds_04", text: "Picking what to watch can take me longer than the show itself.", type: "likert" as const, axis: "decision", direction: 1 as const },
  { id: "ds_05", text: "I replay past choices in my head, imagining how they could've gone.", type: "likert" as const, axis: "decision", direction: 1 as const },
  { id: "ds_06", text: "Even after choosing, I peek at the options I passed up.", type: "likert" as const, axis: "decision", direction: 1 as const },
  { id: "ds_07", text: "I want to be sure it's the best choice, not just a good one.", type: "likert" as const, axis: "decision", direction: 1 as const },
  { id: "ds_08", text: "Small decisions can stall me way longer than they probably should.", type: "likert" as const, axis: "decision", direction: 1 as const },

  // Reverse = gut/satisficer leaning (direction -1)
  { id: "ds_09", text: "I decide fast and don't look back.", type: "likert" as const, axis: "decision", direction: -1 as const },
  { id: "ds_10", text: "'Good enough' is genuinely good enough for me most of the time.", type: "likert" as const, axis: "decision", direction: -1 as const },
  { id: "ds_11", text: "Once I make a call, I move on without second-guessing it.", type: "likert" as const, axis: "decision", direction: -1 as const },
  { id: "ds_12", text: "I trust my gut and pick the first option that feels right.", type: "likert" as const, axis: "decision", direction: -1 as const },
  { id: "ds_13", text: "I rarely feel regret about choices I've already made.", type: "likert" as const, axis: "decision", direction: -1 as const },
  { id: "ds_14", text: "I don't need to see every option to feel okay about my pick.", type: "likert" as const, axis: "decision", direction: -1 as const },
  { id: "ds_15", text: "Ordering off a huge menu takes me about ten seconds.", type: "likert" as const, axis: "decision", direction: -1 as const },
  { id: "ds_16", text: "I'd rather just choose and get on with it than weigh it forever.", type: "likert" as const, axis: "decision", direction: -1 as const },
];

export const decisionStyle: TestDefinition = {
  slug: "decision-style",
  title: "Overthinker or Go-With-Gut",
  category: "thinking",
  description:
    "Do you weigh every option to death, or trust your gut and bounce? A quick decision-style vibe check.",
  whatYoullLearn:
    "Where you land on the gut-to-overthinker spectrum right now, plus the strength hiding in your style.",
  timeMinutes: 3,
  itemCount: 16,
  license: "Original TypologyQuiz items, inspired by maximizer/satisficer decision research (self-reflection only).",
  isNew: true,
  scoreMode: "spectrum",
  questions,
  axes: [
    {
      key: "decision",
      label: "Decision Style",
      lowLabel: "Gut",
      highLabel: "Overthinker",
      description:
        "How you make choices — lower means quick and instinctive, higher means thorough and comparison-heavy.",
    },
  ],
  resultType: "spectrum",
  spectrumBands: [
    {
      max: 20,
      label: "Snap Decider",
      description:
        "You pick fast and rarely look back. Superpower: you never get stuck at the menu and regret isn't your thing. Just double-check the big stuff gets a beat of thought before you commit.",
    },
    {
      max: 40,
      label: "Gut-Leaning",
      description:
        "You mostly trust your instinct and keep things moving. You'll skim a couple of options, then decide. Efficient and low-stress — just leave room to slow down when a choice really matters.",
    },
    {
      max: 60,
      label: "Balanced",
      description:
        "You can go fast or go deep depending on the stakes — quick on the small stuff, careful on the big stuff. That flexibility is the sweet spot most people are chasing.",
    },
    {
      max: 80,
      label: "Careful Weigher",
      description:
        "You like to compare, check, and be sure before you commit. Superpower: your choices are well thought-out and you catch things others miss. The trick is knowing when 'good enough' actually is.",
    },
    {
      max: 100,
      label: "Deep Overthinker",
      description:
        "You want the best option, and you'll research every angle to find it. Superpower: you rarely get blindsided. The catch: the endless comparing can cost you time and peace — set a deadline and let yourself land.",
    },
  ],
  funFacts: [
    "Psychologists call the 'best option' hunters maximizers and the 'good enough' pickers satisficers — and satisficers often end up happier with what they chose.",
    "Overthinking a choice isn't a flaw; it usually means you care about getting it right. The cost is just the time and the second-guessing.",
    "Compare with friends — pairing a snap decider with a deep overthinker is how group plans either get made instantly or never at all.",
  ],
  disclaimer:
    "A light self-reflection vibe check, not a psychological assessment. How you decide shifts with the stakes, your mood, and how much sleep you got.",
};
