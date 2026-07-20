import { TestDefinition } from "../types";

// Night Owl or Early Bird — chronotype vibe check (NEW).
// Single "chrono" axis: high = night owl, low = early bird.
// Balanced forward/reverse items so a constant answer lands mid-spectrum.

const questions = [
  // Forward = night-owl leaning (direction 1)
  { id: "no_01", text: "My brain finally switches on late at night.", type: "likert" as const, axis: "chrono", direction: 1 as const },
  { id: "no_02", text: "Given the choice, I'd rather stay up late than get up early.", type: "likert" as const, axis: "chrono", direction: 1 as const },
  { id: "no_03", text: "My best ideas show up after 10pm.", type: "likert" as const, axis: "chrono", direction: 1 as const },
  { id: "no_04", text: "On a free day, I naturally drift to a late bedtime.", type: "likert" as const, axis: "chrono", direction: 1 as const },
  { id: "no_05", text: "Late night feels like my quiet, focused time.", type: "likert" as const, axis: "chrono", direction: 1 as const },
  { id: "no_06", text: "I hit my social energy peak in the evening.", type: "likert" as const, axis: "chrono", direction: 1 as const },
  { id: "no_07", text: "I'd pick a midnight study/gaming session over a 7am one any day.", type: "likert" as const, axis: "chrono", direction: 1 as const },
  { id: "no_08", text: "If nothing forced me awake, I'd sleep in past mid-morning.", type: "likert" as const, axis: "chrono", direction: 1 as const },
  { id: "no_09", text: "I get a second wind right when I should be winding down.", type: "likert" as const, axis: "chrono", direction: 1 as const },
  // Reverse = early-bird leaning (direction -1)
  { id: "no_10", text: "I'm sharpest in the first hour after I wake up.", type: "likert" as const, axis: "chrono", direction: -1 as const },
  { id: "no_11", text: "Early mornings feel calm and productive to me.", type: "likert" as const, axis: "chrono", direction: -1 as const },
  { id: "no_12", text: "I fade fast once it gets late.", type: "likert" as const, axis: "chrono", direction: -1 as const },
  { id: "no_13", text: "I'd happily wake up early for something I care about.", type: "likert" as const, axis: "chrono", direction: -1 as const },
  { id: "no_14", text: "I usually get sleepy well before midnight.", type: "likert" as const, axis: "chrono", direction: -1 as const },
  { id: "no_15", text: "I like getting my hardest task done early in the day.", type: "likert" as const, axis: "chrono", direction: -1 as const },
  { id: "no_16", text: "Staying up late leaves me foggy, not focused.", type: "likert" as const, axis: "chrono", direction: -1 as const },
  { id: "no_17", text: "My mood is best in the morning and dips at night.", type: "likert" as const, axis: "chrono", direction: -1 as const },
  { id: "no_18", text: "Weekends or not, I wake up around the same early-ish time.", type: "likert" as const, axis: "chrono", direction: -1 as const },
];

export const nightOwl: TestDefinition = {
  slug: "night-owl",
  title: "Night Owl or Early Bird",
  category: "character",
  description:
    "Where does your energy actually peak — sunrise or midnight? A quick chronotype vibe check.",
  whatYoullLearn:
    "Which end of the early-bird / night-owl spectrum you're leaning right now, and how to work with it instead of against it.",
  timeMinutes: 3,
  itemCount: 18,
  license: "Original TypologyQuiz items, inspired by chronotype research (self-reflection only).",
  isNew: true,
  scoreMode: "spectrum",
  questions,
  axes: [
    {
      key: "chrono",
      label: "Chronotype",
      lowLabel: "Early Bird",
      highLabel: "Night Owl",
      description:
        "Your natural energy clock — higher means your focus and mood peak later in the day.",
    },
  ],
  resultType: "spectrum",
  spectrumBands: [
    {
      max: 20,
      label: "Full Early Bird",
      description:
        "Sunrise is your superpower right now. You front-load the day and run out of runway at night — no shame, just schedule the big stuff early.",
    },
    {
      max: 40,
      label: "Morning-Leaning",
      description:
        "You tilt early. Mornings feel clear, late nights feel like borrowed time. Protect that early focus window and you're set.",
    },
    {
      max: 60,
      label: "Flexible Middle",
      description:
        "You're not locked to either end — you can flex earlier or later depending on the week. Handy, but pick an anchor so your sleep doesn't drift.",
    },
    {
      max: 80,
      label: "Evening-Leaning",
      description:
        "You warm up as the day goes on and peak after dinner. Mornings are survivable, not sacred. Line up demanding stuff for later.",
    },
    {
      max: 100,
      label: "Deep Night Owl",
      description:
        "Midnight is your prime time. The trick isn't 'fix it' — it's guarding sleep so early obligations don't quietly wreck you.",
    },
  ],
  funFacts: [
    "Chronotype shifts with age — it runs latest in the late-teens-to-early-20s, then slowly drifts earlier. So this can genuinely change on you.",
    "Being a night owl isn't laziness; it's largely wired in. What you can control is keeping your sleep window consistent.",
    "Compare with friends: matched owls make great late-study buddies; owl + early bird pairs have to negotiate the group-chat hours.",
  ],
  disclaimer:
    "This is a light self-reflection vibe check, not a sleep diagnosis. If sleep is genuinely rough, a real routine (or a doctor) beats any quiz.",
};
