import { TestDefinition } from "../types";
import { scoreLikertAxes } from "./score-utils";

const questions = [
  { id: "se_01", text: "I study better in one long focused block than in many short ones.", type: "likert" as const, axis: "sprint", direction: -1 as const },
  { id: "se_02", text: "Short bursts with breaks work better for me than marathons.", type: "likert" as const, axis: "sprint", direction: 1 as const },
  { id: "se_03", text: "I like planning my study schedule days ahead.", type: "likert" as const, axis: "sprint", direction: -1 as const },
  { id: "se_04", text: "Pressure near a deadline sharpens my focus.", type: "likert" as const, axis: "sprint", direction: 1 as const },
  { id: "se_05", text: "Background noise or music helps me lock in.", type: "likert" as const, axis: "noise", direction: 1 as const },
  { id: "se_06", text: "I need silence or I cannot concentrate.", type: "likert" as const, axis: "noise", direction: -1 as const },
  { id: "se_07", text: "I learn faster by teaching someone else or talking it out.", type: "likert" as const, axis: "social", direction: 1 as const },
  { id: "se_08", text: "I study best completely alone.", type: "likert" as const, axis: "social", direction: -1 as const },
  { id: "se_09", text: "I switch subjects often so I do not get bored.", type: "likert" as const, axis: "sprint", direction: 1 as const },
  { id: "se_10", text: "I stick with one subject until it is done.", type: "likert" as const, axis: "sprint", direction: -1 as const },
  { id: "se_11", text: "Flashcards, quizzes, or practice tests help me more than rereading.", type: "likert" as const, axis: "active", direction: 1 as const },
  { id: "se_12", text: "I prefer reading notes quietly over testing myself.", type: "likert" as const, axis: "active", direction: -1 as const },
];

function studyCategory(scores: Record<string, number>): { label: string; description: string } {
  const sprint = scores.sprint ?? 50;
  const noise = scores.noise ?? 50;
  const social = scores.social ?? 50;
  const active = scores.active ?? 50;

  if (sprint >= 60 && active >= 55) {
    return {
      label: "Sprint tester",
      description:
        "You learn in bursts and by doing. Use timers, practice questions, and planned breaks. Long silent marathons may backfire.",
    };
  }
  if (sprint <= 40 && social <= 45) {
    return {
      label: "Solo marathoner",
      description:
        "Deep blocks alone suit you. Protect long focus windows and batch distractions. Start earlier than the deadline panic.",
    };
  }
  if (social >= 60) {
    return {
      label: "Study crew type",
      description:
        "Talking it out helps. Use study groups for hard topics, then solo time to lock it in so chatting does not eat the whole session.",
    };
  }
  if (noise >= 60) {
    return {
      label: "Noise-friendly focuser",
      description:
        "Cafes, lo-fi, or light buzz can help. Build a consistent playlist or place so your brain knows it is work mode.",
    };
  }
  return {
    label: "Flexible studier",
    description:
      "You can adapt. Match method to the task: sprints for drills, longer blocks for essays, people for tough concepts.",
  };
}

export const studyEnergy: TestDefinition = {
  slug: "study-energy",
  title: "Study Energy",
  category: "thinking",
  description: "Sprint or marathon? Solo or crew? How your brain actually wants to study.",
  whatYoullLearn: "A simple study-energy profile you can use before the next exam week.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  questions,
  axes: [
    {
      key: "sprint",
      label: "Sprint style",
      lowLabel: "Marathon blocks",
      highLabel: "Short bursts",
      description: "Higher means short focused sprints suit you more than long unbroken sessions.",
    },
    {
      key: "noise",
      label: "Noise comfort",
      lowLabel: "Need quiet",
      highLabel: "Okay with buzz",
      description: "Higher means background sound is fine or helpful.",
    },
    {
      key: "social",
      label: "Social study",
      lowLabel: "Solo",
      highLabel: "With people",
      description: "Higher means talking or co-working helps learning.",
    },
    {
      key: "active",
      label: "Active practice",
      lowLabel: "Read & review",
      highLabel: "Test yourself",
      description: "Higher means quizzes and practice beat passive rereading for you.",
    },
  ],
  resultType: "radar",
  funFacts: [
    "Most people overestimate how well rereading works compared with practice testing.",
    "Your best method can change by subject. Math and essays are different sports.",
    "Sleep beats another 2am cram more often than students want to admit.",
  ],
  disclaimer: "Study preferences, not an intelligence score or learning disability test.",
};

export function scoreStudyEnergy(answers: Record<string, number>) {
  const scores = scoreLikertAxes(questions, answers, ["sprint", "noise", "social", "active"]);
  const category = studyCategory(scores);
  return { scores, category };
}
