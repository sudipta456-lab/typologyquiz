import { isPlainRecord, ownAnswer, validateAnswer, visibleQuestions } from "./engine";
import type { Answer, Answers, Quiz } from "./types";

/** New namespace. Old quiz keys are never read, migrated or deleted. */
const NAMESPACE = "tq-interactive-v1";
const STORAGE_VERSION = 1;
/** Upper bound on raw storage text accepted before parsing. */
export const MAX_PROGRESS_CHARS = 60000;

interface StoredProgress { v: number; id: string; quizVersion: number; fp: string; index: number; answers: Record<string, unknown> }

function stableStringify(value: unknown, depth = 0): string {
  if (depth > 40) return "null";
  if (value === null || typeof value === "number" || typeof value === "boolean") return JSON.stringify(value) ?? "null";
  if (typeof value === "string") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map((entry) => stableStringify(entry, depth + 1)).join(",")}]`;
  if (typeof value === "object") {
    const record = value as Record<string, unknown>;
    const parts: string[] = [];
    for (const key of Object.keys(record).sort()) {
      if (record[key] === undefined) continue;
      parts.push(`${JSON.stringify(key)}:${stableStringify(record[key], depth + 1)}`);
    }
    return `{${parts.join(",")}}`;
  }
  return "null";
}

function fnv1a(text: string, seed: number): string {
  let hash = seed >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash.toString(16).padStart(8, "0");
}

/** Non-cryptographic fingerprint of everything that defines the quiz content; any edit changes it. */
export function quizFingerprint(quiz: Quiz): string {
  const text = stableStringify(quiz);
  return fnv1a(text, 0x811c9dc5) + fnv1a(text, 0x9747b28c);
}

export function progressKey(quiz: Quiz): string {
  return `${NAMESPACE}:${quiz.id}:v${quiz.version}:${quizFingerprint(quiz)}`;
}

function setOwn(target: Answers, key: string, value: Answer): void {
  Object.defineProperty(target, key, { value, enumerable: true, writable: true, configurable: true });
}

/** Keeps only valid answers to visible, non-reflection questions. Hidden-branch dependents are purged. */
function sanitize(quiz: Quiz, source: Answers | Record<string, unknown>): { answers: Answers; visibleCount: number } {
  const candidate: Answers = {};
  for (const question of quiz.questions) {
    if (question.kind === "reflection") continue;
    const value = ownAnswer(source as Answers, question.id);
    if (value !== undefined && validateAnswer(question, value)) setOwn(candidate, question.id, value);
  }
  const visible = visibleQuestions(quiz, candidate);
  const answers: Answers = {};
  for (const question of visible) {
    const value = ownAnswer(candidate, question.id);
    if (value !== undefined) setOwn(answers, question.id, value);
  }
  return { answers, visibleCount: visible.length };
}

function clampIndex(index: unknown, visibleCount: number): number {
  if (typeof index !== "number" || !Number.isFinite(index)) return 0;
  return Math.min(Math.max(Math.trunc(index), 0), visibleCount);
}

export function serializeProgress(quiz: Quiz, answers: Answers, index: number): string {
  const { answers: kept, visibleCount } = sanitize(quiz, answers ?? {});
  const stored: StoredProgress = { v: STORAGE_VERSION, id: quiz.id, quizVersion: quiz.version, fp: quizFingerprint(quiz), index: clampIndex(index, visibleCount), answers: kept };
  return JSON.stringify(stored);
}

export function readProgress(quiz: Quiz, raw: unknown): { answers: Answers; index: number } | null {
  if (typeof raw !== "string" || raw.length === 0 || raw.length > MAX_PROGRESS_CHARS) return null;
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }
  if (!isPlainRecord(parsed)) return null;
  if (parsed.v !== STORAGE_VERSION || parsed.id !== quiz.id || parsed.quizVersion !== quiz.version || parsed.fp !== quizFingerprint(quiz)) return null;
  if (!isPlainRecord(parsed.answers)) return null;
  const { answers, visibleCount } = sanitize(quiz, parsed.answers);
  const index = clampIndex(parsed.index, visibleCount);
  if (index === 0 && Object.keys(answers).length === 0) return null;
  return { answers, index };
}
