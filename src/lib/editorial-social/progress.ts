import type { Answer, Edition } from "../editorial/types.ts";
import { scoreQuestion, validateAnswer } from "../editorial/score.ts";

export type Run = { answers: Answer[]; phase: "question" | "reveal" | "complete" };
export const emptyRun = (): Run => ({ answers: [], phase: "question" });
export type RunAction = { type: "answer"; answer: Answer } | { type: "next" };

export function advanceRun(edition: Edition, run: Run, action: RunAction): Run {
  if (action.type === "answer") {
    const question = edition.questions[run.answers.length];
    if (run.phase !== "question" || !question || !validateAnswer(question, action.answer)) return run;
    return { answers: [...run.answers, action.answer], phase: "reveal" };
  }
  if (run.phase !== "reveal") return run;
  return { ...run, phase: run.answers.length === edition.questions.length ? "complete" : "question" };
}

export function resultGrid(edition: Edition, run: Run): boolean[] {
  return run.answers.map((answer, index) => scoreQuestion(edition.questions[index], answer));
}

export function parseProgress(edition: Edition, raw: string | null): Run | null {
  if (!raw || raw.length > 100_000) return null;
  try {
    const data = JSON.parse(raw);
    if (!data || (data.schema !== 1 && data.schema !== 2) || data.editionId !== edition.id || data.version !== edition.version) return null;
    const { answers, phase } = data;
    if (!Array.isArray(answers) || answers.length > edition.questions.length) return null;
    if (data.schema === 1 && !answers.every((answer) => typeof answer === "string")) return null;
    if (!answers.every((answer, i) => validateAnswer(edition.questions[i], answer))) return null;
    if (phase !== "question" && phase !== "reveal" && phase !== "complete") return null;
    if (phase === "question" && answers.length >= edition.questions.length) return null;
    if (phase === "reveal" && answers.length === 0) return null;
    if (phase === "complete" && answers.length !== edition.questions.length) return null;
    return { answers, phase };
  } catch { return null; }
}

function key(edition: Edition): string { return `tq-editorial-run-v2:${edition.id}:${edition.version}`; }
function legacyKey(edition: Edition): string { return `tq-news-run-v1:${edition.id}:${edition.version}`; }

export function loadRun(edition: Edition): Run | null {
  try { return parseProgress(edition, window.localStorage.getItem(key(edition))) ?? parseProgress(edition, window.localStorage.getItem(legacyKey(edition))); }
  catch { return null; }
}

export function saveRun(edition: Edition, run: Run): boolean {
  try {
    window.localStorage.setItem(key(edition), JSON.stringify({ schema: 2, editionId: edition.id, version: edition.version, ...run }));
    return true;
  } catch { return false; }
}
