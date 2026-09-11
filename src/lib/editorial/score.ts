import type { Question } from "./types.ts";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function hasExactKeys(actual: readonly string[], expected: readonly string[]): boolean {
  if (actual.length !== expected.length) return false;
  const expectedSet = new Set(expected);
  return actual.every((key) => expectedSet.has(key));
}

/**
 * Returns true only when an answer is complete and uses ids from its question.
 * It does not decide correctness; a complete but wrong answer is still valid.
 */
export function validateAnswer(question: Question, answer: unknown): boolean {
  switch (question.kind) {
    case "choice":
    case "image-choice":
      return (
        typeof answer === "string" &&
        question.options.some((option) => option.id === answer)
      );

    case "order": {
      if (!Array.isArray(answer) || !answer.every((id) => typeof id === "string")) {
        return false;
      }
      const itemIds = question.items.map((item) => item.id);
      return new Set(answer).size === answer.length && hasExactKeys(answer, itemIds);
    }

    case "match": {
      if (!isRecord(answer) || question.left.length !== question.right.length) return false;
      const leftIds = question.left.map((item) => item.id);
      const answerKeys = Object.keys(answer);
      if (!hasExactKeys(answerKeys, leftIds)) return false;

      const rightIds = new Set(question.right.map((item) => item.id));
      const values = answerKeys.map((key) => answer[key]);
      if (!values.every((value): value is string => typeof value === "string")) return false;
      return (
        new Set(values).size === values.length &&
        values.every((rightId) => rightIds.has(rightId)) &&
        values.length === rightIds.size
      );
    }
  }
}

/**
 * Scores one question. Every kind is all-or-nothing: malformed, incomplete,
 * partially correct, and incorrectly ordered answers all return false.
 */
export function scoreQuestion(question: Question, answer: unknown): boolean {
  if (!validateAnswer(question, answer)) return false;

  switch (question.kind) {
    case "choice":
    case "image-choice":
      return answer === question.correctId;

    case "order":
      return (
        Array.isArray(answer) &&
        answer.every((id, index) => id === question.correctOrder[index])
      );

    case "match": {
      if (!isRecord(answer)) return false;
      return question.left.every(
        ({ id }) => answer[id] === question.correctPairs[id]
      );
    }
  }
}
