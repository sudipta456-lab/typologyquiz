import { validateAnswer } from "./engine";
import type { Question } from "./types";

const hasOwn = (target: object, key: string): boolean => Object.prototype.hasOwnProperty.call(target, key);

function filled(record: Record<string, unknown>, ids: readonly string[]): boolean {
  return ids.every((id) => hasOwn(record, id) && typeof record[id] === "string" && record[id] !== "");
}

/**
 * Whether a player's draft may be submitted with Next.
 *
 * The engine deliberately accepts partial match and grid maps so that tampered or
 * stored answers still score safely (missing rows earn nothing). The player is
 * stricter: every match item and grid row needs a choice before moving on.
 * An empty reflection is fine, and an explicit empty graph ("No links apply") is
 * a complete answer.
 */
export function isCompleteAnswer(question: Question, answer: unknown): boolean {
  if (question.kind === "reflection") return answer === undefined || validateAnswer(question, answer);
  if (answer === undefined || !validateAnswer(question, answer)) return false;
  if (question.kind === "match") return filled(answer as Record<string, unknown>, question.left.map((l) => l.id));
  if (question.kind === "grid") return filled(answer as Record<string, unknown>, question.cells.map((c) => c.id));
  return true;
}
