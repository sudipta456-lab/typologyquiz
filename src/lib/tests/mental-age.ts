import { TestDefinition } from "../types";

// Mental Age Test, TypologyQuiz style: playful, non-clinical, screenshot-ready.
// Single spectrum axis. Higher = "older brain energy" (planning, budgeting,
// bedtime opinions). Reverse items keep straight-lining mid-spectrum.

const questions = [
  { id: "ma_01", text: "I have strong opinions about sleep schedules, and mine is one of them.", type: "likert" as const, axis: "age", direction: 1 as const },
  { id: "ma_02", text: "I have complained about the price of groceries recently.", type: "likert" as const, axis: "age", direction: 1 as const },
  { id: "ma_03", text: "Friday night plans sound better as 'stay home, no plans'.", type: "likert" as const, axis: "age", direction: 1 as const },
  { id: "ma_04", text: "I get genuinely excited about a new planner, storage bins, or a label maker.", type: "likert" as const, axis: "age", direction: 1 as const },
  { id: "ma_05", text: "Loud crowds and loud music are more exhausting than fun for me.", type: "likert" as const, axis: "age", direction: 1 as const },
  { id: "ma_06", text: "I check the weather before leaving the house and dress accordingly.", type: "likert" as const, axis: "age", direction: 1 as const },
  { id: "ma_07", text: "I will stay up way too late even when I know tomorrow me will suffer.", type: "likert" as const, axis: "age", direction: -1 as const },
  { id: "ma_08", text: "I still laugh at jokes about butts. It's fine. They're funny.", type: "likert" as const, axis: "age", direction: -1 as const },
  { id: "ma_09", text: "My room, bag, or desktop is organized enough that I can find things fast.", type: "likert" as const, axis: "age", direction: 1 as const },
  { id: "ma_10", text: "Deadlines and I have a dramatic, last-minute relationship.", type: "likert" as const, axis: "age", direction: -1 as const },
  { id: "ma_11", text: "I get excited about cartoons, games, or toys that are 'for kids' with zero shame.", type: "likert" as const, axis: "age", direction: -1 as const },
  { id: "ma_12", text: "I save money on purpose, with an actual plan, and it feels good.", type: "likert" as const, axis: "age", direction: 1 as const },
];

export const mentalAge: TestDefinition = {
  slug: "mental-age",
  title: "Mental Age Test",
  category: "personality",
  description:
    "Your ID says one age. Your habits say another. Find out how old your brain actually acts.",
  whatYoullLearn:
    "Where your everyday instincts land on the mental-age scale, from chaos gremlin to wise elder, and why both ends are doing great.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "spectrum",
  questions,
  axes: [
    {
      key: "age",
      label: "Brain age",
      lowLabel: "Young energy",
      highLabel: "Old soul",
      description: "Higher scores mean more planning, budgeting, and bedtime energy.",
    },
  ],
  resultType: "meter",
  spectrumBands: [
    {
      max: 30,
      label: "Mental age: 15",
      description:
        "Pure chaos gremlin. Your bedtimes are suggestions and your future self is a stranger you keep pranking. Honestly? Iconic. Just make sure future you gets food sometimes.",
    },
    {
      max: 45,
      label: "Mental age: 19",
      description:
        "You have freedom and you are using all of it. Responsibilities exist in your peripheral vision, where they will stay until further notice. The vibe is undefeated; the laundry pile is not.",
    },
    {
      max: 60,
      label: "Mental age: 25",
      description:
        "Certified adult-ish. You can handle a form, a deadline, and a group chat, but you still cancel plans to stay home. This is the sweet spot and everyone knows it.",
    },
    {
      max: 75,
      label: "Mental age: 34",
      description:
        "You own at least one thing specifically for leftovers, and you're not sorry. Friends come to you when life needs an actual plan. You still know all the memes, you just also know interest rates now.",
    },
    {
      max: 90,
      label: "Mental age: 47",
      description:
        "You've complained about the price of groceries today, haven't you. Comfortable shoes, early dinners, quiet satisfaction. You are the friend group's emergency contact and everyone is grateful.",
    },
    {
      max: 100,
      label: "Mental age: 62",
      description:
        "Elder energy unlocked. You give advice nobody asked for that turns out to be exactly right. Bedtime is sacred, the kettle is always warm, and honestly? We should all aspire to this.",
    },
  ],
  funFacts: [
    "'Mental age' here means vibes, not intelligence. Some of the smartest people alive cannot find their keys.",
    "Your brain-age can jump 20 years after one (1) good nap or one bad supermarket receipt.",
    "People at opposite ends of this scale make great friends. One brings the plan, the other brings the story.",
  ],
  disclaimer:
    "This is a joke-flavored self-reflection quiz, not a measure of maturity, intelligence, or development. Your real age remains your business.",
};
