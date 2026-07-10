import { TestDefinition } from "../types";
import { scoreLikertAxes, topAxis } from "./score-utils";

const questions = [
  { id: "ca_l1", text: "In group projects I usually end up assigning tasks or checking the deadline.", type: "likert" as const, axis: "leader", direction: 1 as const },
  { id: "ca_l2", text: "I speak up first when the team is stuck.", type: "likert" as const, axis: "leader", direction: 1 as const },
  { id: "ca_d1", text: "I quietly do a big chunk of the work so it actually gets finished.", type: "likert" as const, axis: "doer", direction: 1 as const },
  { id: "ca_d2", text: "I would rather finish slides than run the meeting.", type: "likert" as const, axis: "doer", direction: 1 as const },
  { id: "ca_i1", text: "I bring weird ideas that make the project more original.", type: "likert" as const, axis: "idea", direction: 1 as const },
  { id: "ca_i2", text: "Brainstorming is my favorite part of school projects.", type: "likert" as const, axis: "idea", direction: 1 as const },
  { id: "ca_c1", text: "I keep the group from fighting and check if everyone is okay.", type: "likert" as const, axis: "glue", direction: 1 as const },
  { id: "ca_c2", text: "I notice when someone is left out of the plan.", type: "likert" as const, axis: "glue", direction: 1 as const },
  { id: "ca_w1", text: "I wait to see what others do before I commit.", type: "likert" as const, axis: "wildcard", direction: 1 as const },
  { id: "ca_w2", text: "I work best in short bursts right before the deadline.", type: "likert" as const, axis: "wildcard", direction: 1 as const },
  { id: "ca_l3", text: "People look at me when nobody knows what to do next.", type: "likert" as const, axis: "leader", direction: 1 as const },
  { id: "ca_d3", text: "I fix formatting and details others skip.", type: "likert" as const, axis: "doer", direction: 1 as const },
];

const META: Record<string, { label: string; description: string }> = {
  leader: {
    label: "Project captain",
    description: "You steer the ship. Strength: direction. Watch-out: doing everything. Delegate on purpose.",
  },
  doer: {
    label: "Quiet finisher",
    description: "You make it real. Strength: output. Watch-out: invisible labor. Claim credit for what you ship.",
  },
  idea: {
    label: "Idea machine",
    description: "You spark the concept. Strength: originality. Watch-out: starting more than finishing.",
  },
  glue: {
    label: "Team glue",
    description: "You hold people together. Strength: harmony. Watch-out: absorbing stress for free.",
  },
  wildcard: {
    label: "Deadline wildcard",
    description: "You work in bursts. Strength: clutch energy. Watch-out: last-minute chaos for the group.",
  },
};

export const classArchetype: TestDefinition = {
  slug: "class-archetype",
  title: "Class Project Archetype",
  category: "character",
  description: "Who are you on the group project: captain, finisher, idea person, glue, or deadline wildcard?",
  whatYoullLearn: "Your default school-team role and how to not get stuck doing the worst parts alone.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  questions,
  axes: Object.entries(META).map(([key, m]) => ({
    key,
    label: m.label,
    lowLabel: "Low",
    highLabel: "High",
    description: m.description,
  })),
  resultType: "radar",
  funFacts: [
    "Groups work better when roles are different, not when everyone wants to be captain.",
    "Teachers often only see the loudest role. Finishers get underrated.",
    "Knowing your role helps you pick partners on purpose next time.",
  ],
  disclaimer: "A fun school-team reflection. Not a grade, diagnosis, or teacher evaluation.",
};

export function scoreClassArchetype(answers: Record<string, number>) {
  const keys = ["leader", "doer", "idea", "glue", "wildcard"];
  const scores = scoreLikertAxes(questions, answers, keys);
  const top = topAxis(scores, META);
  return { scores, category: { label: top.label, description: top.description } };
}
