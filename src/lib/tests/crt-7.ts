import { TestDefinition } from "../types";

// Cognitive Reflection Test (CRT + CRT-2)
// 7 items - 3 from Frederick (2005), 4 from Thomson & Oppenheimer (2016)
// Freely reproduced from academic literature

const questions = [
  {
    id: "crt_01",
    text: "A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost? (in cents)",
    type: "numeric" as const,
    axis: "crt",
    direction: 1 as const,
    correctAnswer: 5,
  },
  {
    id: "crt_02",
    text: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets? (in minutes)",
    type: "numeric" as const,
    axis: "crt",
    direction: 1 as const,
    correctAnswer: 5,
  },
  {
    id: "crt_03",
    text: "In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover the entire lake, how many days would it take to cover half the lake?",
    type: "numeric" as const,
    axis: "crt",
    direction: 1 as const,
    correctAnswer: 47,
  },
  {
    id: "crt_04",
    text: "If you're running a race and you pass the person in second place, what place are you in?",
    type: "numeric" as const,
    axis: "crt",
    direction: 1 as const,
    correctAnswer: 2,
  },
  {
    id: "crt_05",
    text: "A farmer had 15 sheep and all but 8 died. How many are left?",
    type: "numeric" as const,
    axis: "crt",
    direction: 1 as const,
    correctAnswer: 8,
  },
  {
    id: "crt_06",
    text: "Emily's father has three daughters. The first two are named April and May. What is the third daughter's name?",
    type: "numeric" as const,
    axis: "crt",
    direction: 1 as const,
    correctAnswer: -1, // special: "Emily" - we'll handle string comparison in scoring
  },
  {
    id: "crt_07",
    text: "How many cubic feet of dirt are there in a hole that is 3 feet deep, 3 feet wide, and 3 feet long?",
    type: "numeric" as const,
    axis: "crt",
    direction: 1 as const,
    correctAnswer: 0,
  },
];

export const crt7: TestDefinition = {
  slug: "crt-7",
  title: "Cognitive Reflection Test (CRT-7)",
  category: "thinking",
  description:
    "A 7-item test that measures your tendency to override an intuitive but incorrect answer and engage in further reflection. Includes the classic CRT and CRT-2 items.",
  whatYoullLearn:
    "How your reflective thinking compares to the general population - and why this matters for decision-making.",
  timeMinutes: 3,
  itemCount: 7,
  license: "Academic literature (Frederick 2005, Thomson & Oppenheimer 2016) - freely reproduced",
  sourceUrl: "https://doi.org/10.1257/089533005775196732",
  questions,
  axes: [
    {
      key: "crt",
      label: "Score",
      lowLabel: "0 correct",
      highLabel: "7 correct",
      description:
        "Number of correct answers. The CRT measures the ability to suppress an intuitive but incorrect response in favor of deliberate reasoning.",
    },
  ],
  resultType: "dial",
  funFacts: [
    "Only about 17% of people get all 3 classic CRT questions right. Adding CRT-2 questions makes all-7 even rarer.",
    "CRT scores predict resistance to scams and misinformation better than IQ scores do.",
    "The test was invented by Shane Frederick, who noticed that even MIT students sometimes gave the intuitive (wrong) answer.",
  ],
  disclaimer:
    "The CRT measures a specific kind of reflective thinking. It is not an IQ test. Your score may be influenced by familiarity with the questions.",
  norms: {
    crt: { mean: 2.5, sd: 2.0 },
  },
};

export function scoreCRT7(answers: Record<string, number>): {
  scores: Record<string, number>;
  correctCount: number;
  totalQuestions: number;
} {
  let correct = 0;
  const total = questions.length;

  for (const q of questions) {
    const answer = answers[q.id];
    if (answer === undefined) continue;
    // CRT-06 is a special case: "Emily" - we encode the answer as -1 for "Emily"
    // Users type the name; we'll handle this in the UI by checking the string.
    // For now, accept -1 as correct (the UI will map "emily" -> -1)
    if (q.correctAnswer === -1) {
      if (answer === -1) correct++;
    } else if (answer === q.correctAnswer) {
      correct++;
    }
  }

  return {
    scores: { crt: Math.round((correct / total) * 100) },
    correctCount: correct,
    totalQuestions: total,
  };
}