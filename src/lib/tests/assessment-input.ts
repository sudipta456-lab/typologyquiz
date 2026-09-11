import type { AnswerMap, TestDefinition } from "../types";
import { visibleQuestions } from "./score-utils";

/** Reject incomplete/invalid attempts. Answers from a closed branch cannot affect scoring. */
export function validatedAnswers(test: TestDefinition, input: AnswerMap): AnswerMap {
  if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error("Invalid answers");
  const known = new Map(test.questions.map(q => [q.id, q]));
  for (const [id, value] of Object.entries(input)) {
    const q = known.get(id);
    if (!q || !Number.isFinite(value) || (q.type === "likert" && (!Number.isInteger(value) || value < 1 || value > 5))) {
      throw new Error(`Invalid answer: ${id}`);
    }
  }
  const active = visibleQuestions(test, input);
  const answers: AnswerMap = {};
  for (const q of active) {
    if (!Object.hasOwn(input, q.id)) throw new Error(`Missing answer: ${q.id}`);
    answers[q.id] = input[q.id];
  }
  return answers;
}

export function validProgress(test: TestDefinition, input: unknown): input is AnswerMap {
  if (!input || typeof input !== "object" || Array.isArray(input)) return false;
  return Object.entries(input).every(([id, value]) => {
    const q = test.questions.find(q => q.id === id);
    return !!q && typeof value === "number" && Number.isFinite(value) &&
      (q.type !== "likert" || (Number.isInteger(value) && value >= 1 && value <= 5));
  });
}
