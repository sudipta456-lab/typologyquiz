import { TestDefinition } from "../types";

// How Gritty Are You — perseverance vibe check (NEW).
// Single "grit" axis: high = gritty (sticks with it), low = go-with-flow.
// Balanced forward/reverse items so a constant answer lands mid-spectrum.
// Loosely inspired by Duckworth's grit (perseverance of effort + consistency of interest).

const questions = [
  // Forward = gritty leaning (direction 1)
  { id: "gr_01", text: "I finish what I start, even when the project stops being fun.", type: "likert" as const, axis: "grit", direction: 1 as const },
  { id: "gr_02", text: "Once I set a long-term goal, I stick with it for months.", type: "likert" as const, axis: "grit", direction: 1 as const },
  { id: "gr_03", text: "A bad grade or setback makes me work harder, not quit.", type: "likert" as const, axis: "grit", direction: 1 as const },
  { id: "gr_04", text: "I've kept practicing a skill or hobby for years to get good at it.", type: "likert" as const, axis: "grit", direction: 1 as const },
  { id: "gr_05", text: "When something is hard, that's exactly when I dig in.", type: "likert" as const, axis: "grit", direction: 1 as const },
  { id: "gr_06", text: "I can grind through boring steps to reach something I care about.", type: "likert" as const, axis: "grit", direction: 1 as const },
  { id: "gr_07", text: "My interests have stayed pretty steady rather than flipping around.", type: "likert" as const, axis: "grit", direction: 1 as const },
  { id: "gr_08", text: "I'd rather master one thing deeply than dabble in ten.", type: "likert" as const, axis: "grit", direction: 1 as const },
  { id: "gr_09", text: "I keep going on group projects even when others drop off.", type: "likert" as const, axis: "grit", direction: 1 as const },

  // Reverse = go-with-flow / quits-easily leaning (direction -1)
  { id: "gr_10", text: "I get excited about new hobbies but drop them after a few weeks.", type: "likert" as const, axis: "grit", direction: -1 as const },
  { id: "gr_11", text: "If something isn't working out, I'm quick to move on to the next thing.", type: "likert" as const, axis: "grit", direction: -1 as const },
  { id: "gr_12", text: "My goals change a lot from month to month.", type: "likert" as const, axis: "grit", direction: -1 as const },
  { id: "gr_13", text: "I lose interest once the shiny-new feeling wears off.", type: "likert" as const, axis: "grit", direction: -1 as const },
  { id: "gr_14", text: "A tough setback usually makes me want to switch to something easier.", type: "likert" as const, axis: "grit", direction: -1 as const },
  { id: "gr_15", text: "I've left more projects half-finished than I've completed.", type: "likert" as const, axis: "grit", direction: -1 as const },
  { id: "gr_16", text: "The next new idea often pulls me away before I finish the last one.", type: "likert" as const, axis: "grit", direction: -1 as const },
  { id: "gr_17", text: "I'd rather try a bunch of things than commit to one long grind.", type: "likert" as const, axis: "grit", direction: -1 as const },
  { id: "gr_18", text: "When boredom hits, I tend to bail on a plan.", type: "likert" as const, axis: "grit", direction: -1 as const },
];

export const grit: TestDefinition = {
  slug: "grit",
  title: "How Gritty Are You",
  category: "character",
  description:
    "Do you lock onto a goal and grind, or flow to whatever's interesting right now? A quick grit vibe check.",
  whatYoullLearn:
    "Where you land on the go-with-flow to gritty spectrum, what that gives you, and the gentle watch-out that comes with your style.",
  timeMinutes: 3,
  itemCount: 18,
  license: "Original TypologyQuiz items, inspired by grit research (self-reflection only).",
  isNew: true,
  scoreMode: "spectrum",
  questions,
  axes: [
    {
      key: "grit",
      label: "Grit",
      lowLabel: "Go-With-Flow",
      highLabel: "Gritty",
      description:
        "How much you stick with long goals and push through setbacks — higher means more perseverance and steady focus.",
    },
  ],
  resultType: "meter",
  spectrumBands: [
    {
      max: 20,
      label: "Flow State",
      description:
        "You follow your curiosity wherever it goes and pivot fast. That's real adaptability — you rarely get stuck on a sinking ship. The watch-out: some goals only pay off if you stay past the boring middle, so pick one or two worth finishing.",
    },
    {
      max: 40,
      label: "Flexible",
      description:
        "You lean toward variety and keeping your options open. Great for trying lots of things and finding what actually clicks. When something really matters, set a tiny finish line so it doesn't quietly slip away.",
    },
    {
      max: 60,
      label: "Balanced",
      description:
        "You can grind when it counts and let go when something's genuinely not worth it. That's a useful mix — the trick is being honest about which situation you're in before you quit or double down.",
    },
    {
      max: 80,
      label: "Determined",
      description:
        "You stick with goals and bounce back from setbacks better than most. People can count on you to finish. Just keep checking that what you're pushing through still matters — persistence works best when it's pointed at the right thing.",
    },
    {
      max: 100,
      label: "Relentless",
      description:
        "When you commit, you're all in for the long haul, boredom and setbacks be damned. Huge strength for big goals. The watch-out isn't 'try less' — it's letting yourself walk away from the rare thing that truly isn't worth the grind.",
    },
  ],
  funFacts: [
    "Grit isn't fixed — it tends to grow as people get older and find goals they actually care about, so a low score now says little about later.",
    "Studies find grit often predicts finishing hard things better than raw talent does; showing up repeatedly is underrated.",
    "Compare with friends: a gritty planner plus a go-with-flow explorer make a strong team — one keeps the goal alive, the other spots when it's time to change course.",
  ],
  disclaimer:
    "This is a light self-reflection vibe check, not a measure of your worth or your future. Both ends are legit ways to move through life.",
};
