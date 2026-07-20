import { TestDefinition } from "../types";

// Growth vs Fixed Mindset — mindset vibe check (NEW).
// Single "mindset" axis: high = growth, low = fixed.
// Balanced forward/reverse items so a constant answer lands mid-spectrum.
// Inspired by Carol Dweck's mindset research.

const questions = [
  // Forward = growth-leaning (direction 1)
  { id: "gm_01", text: "How good I am at something is mostly down to the effort I put in.", type: "likert" as const, axis: "mindset", direction: 1 as const },
  { id: "gm_02", text: "When a subject is hard, that's a sign I can still grow at it.", type: "likert" as const, axis: "mindset", direction: 1 as const },
  { id: "gm_03", text: "Failing at something just tells me what to work on next.", type: "likert" as const, axis: "mindset", direction: 1 as const },
  { id: "gm_04", text: "I actually want feedback, even when it points out my mistakes.", type: "likert" as const, axis: "mindset", direction: 1 as const },
  { id: "gm_05", text: "A tough challenge is more exciting than a task I already know I'll ace.", type: "likert" as const, axis: "mindset", direction: 1 as const },
  { id: "gm_06", text: "Almost any skill can be built with enough practice.", type: "likert" as const, axis: "mindset", direction: 1 as const },
  { id: "gm_07", text: "Seeing a classmate do well makes me curious how they got there.", type: "likert" as const, axis: "mindset", direction: 1 as const },
  { id: "gm_08", text: "If I'm stuck, I look for a new strategy instead of giving up.", type: "likert" as const, axis: "mindset", direction: 1 as const },
  { id: "gm_09", text: "The word 'yet' fits me — I'm not good at it yet.", type: "likert" as const, axis: "mindset", direction: 1 as const },
  // Reverse = fixed-leaning (direction -1)
  { id: "gm_10", text: "You're either naturally talented at something or you're not.", type: "likert" as const, axis: "mindset", direction: -1 as const },
  { id: "gm_11", text: "If I have to try really hard at something, I'm probably just not smart at it.", type: "likert" as const, axis: "mindset", direction: -1 as const },
  { id: "gm_12", text: "When I fail at something, I tend to feel like I'm just bad at it.", type: "likert" as const, axis: "mindset", direction: -1 as const },
  { id: "gm_13", text: "Criticism about my work mostly just stings and shuts me down.", type: "likert" as const, axis: "mindset", direction: -1 as const },
  { id: "gm_14", text: "I'd rather stick to what I'm already good at than risk looking bad.", type: "likert" as const, axis: "mindset", direction: -1 as const },
  { id: "gm_15", text: "Some people just can't get better at certain subjects, no matter what.", type: "likert" as const, axis: "mindset", direction: -1 as const },
  { id: "gm_16", text: "When someone outperforms me, I feel like I've hit my limit.", type: "likert" as const, axis: "mindset", direction: -1 as const },
  { id: "gm_17", text: "If I don't get something quickly, I usually assume it's not for me.", type: "likert" as const, axis: "mindset", direction: -1 as const },
  { id: "gm_18", text: "Your basic abilities are pretty much set and don't really change.", type: "likert" as const, axis: "mindset", direction: -1 as const },
];

export const growthMindset: TestDefinition = {
  slug: "growth-mindset",
  title: "Growth or Fixed Mindset",
  category: "thinking",
  description:
    "Do you see ability as something you build, or something you're just born with? A quick mindset vibe check.",
  whatYoullLearn:
    "Where you're leaning on the fixed-to-growth spectrum right now, and a nudge on how to lean a little more toward growth.",
  timeMinutes: 3,
  itemCount: 18,
  license: "Original TypologyQuiz items, inspired by Carol Dweck's mindset research (self-reflection only).",
  isNew: true,
  scoreMode: "spectrum",
  questions,
  axes: [
    {
      key: "mindset",
      label: "Mindset",
      lowLabel: "Fixed",
      highLabel: "Growth",
      description:
        "How much you see ability as buildable — higher means you treat skills as things you can grow with effort.",
    },
  ],
  resultType: "spectrum",
  spectrumBands: [
    {
      max: 20,
      label: "Strong Fixed Lean",
      description:
        "Right now you're reading ability as pretty much fixed — you've either 'got it' or you don't. That can protect you from risk, but it also quietly talks you out of things you could actually get good at. One small reframe: swap 'I can't' for 'I can't yet.'",
    },
    {
      max: 40,
      label: "Fixed-Leaning",
      description:
        "You tilt toward the fixed side — effort can feel like proof you're not naturally good at something. Watch for the moment you label a whole subject 'not me' after one bad grade. That label is more habit than fact.",
    },
    {
      max: 60,
      label: "In-Between",
      description:
        "You flip between mindsets depending on the subject — growth in the stuff you like, fixed in the stuff that's burned you before. Totally normal. Notice where you go fixed, because that's usually where the most room to grow is hiding.",
    },
    {
      max: 80,
      label: "Growth-Leaning",
      description:
        "You mostly treat skills as buildable and take feedback as fuel. Nice place to be. The occasional wobble when something's really hard is normal — that's the exact moment your growth view matters most.",
    },
    {
      max: 100,
      label: "Strong Growth Lean",
      description:
        "You see almost anything as learnable with the right effort and strategy, and setbacks read as info, not verdicts. Just keep it honest — growth mindset is about smart effort and new approaches, not grinding harder at a wall.",
    },
  ],
  funFacts: [
    "The idea comes from psychologist Carol Dweck — the tiny word 'yet' ('I'm not good at this yet') is one of the most studied mindset shifts.",
    "Almost nobody is pure growth or pure fixed — most people switch mindsets depending on the subject or the day.",
    "Compare with friends — you might be full growth-mindset about gaming or art but total fixed-mindset about math, and swapping notes reveals it fast.",
  ],
  disclaimer:
    "A light self-reflection vibe check, not a measure of your intelligence or potential. Mindset shifts with the topic and the day — this is just a snapshot.",
};
