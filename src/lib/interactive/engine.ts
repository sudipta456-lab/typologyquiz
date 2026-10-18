import type { Answer, Answers, Option, Question, Quiz, Weights } from "./types";

export interface ReviewEntry { id: string; credit: number | null }
export interface DimensionResult { id: string; low: string; high: string; description: string; value: number }
export interface QuizScore { correct: number; total: number; percent: number; dimensions: DimensionResult[]; review: ReviewEntry[] }

/** Largest accepted graph answer, including duplicates a tampered client could send. */
export const MAX_GRAPH_EDGES = 4096;
/** Largest accepted reflection text. Reflection text is never scored or persisted. */
export const MAX_REFLECTION_LENGTH = 2000;
/** Slider answers are descriptive positions between the two labelled poles. */
export const SLIDER_MIN = 0;
export const SLIDER_MAX = 100;

const hasOwn = (target: object, key: string): boolean => Object.prototype.hasOwnProperty.call(target, key);

export function isPlainRecord(value: unknown): value is Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
  const proto = Object.getPrototypeOf(value) as unknown;
  return proto === Object.prototype || proto === null;
}

/** Reads an answer only when it is an own property, so ids like "__proto__" or "constructor" never resolve inherited values. */
export function ownAnswer(answers: Answers | null | undefined, id: string): Answer | undefined {
  if (!answers || typeof answers !== "object" || !hasOwn(answers, id)) return undefined;
  return answers[id];
}

export function isWeights(value: unknown): value is Weights {
  return Array.isArray(value) && value.length === 2 && value.every((entry) => typeof entry === "number" && Number.isFinite(entry));
}

function idSet(options: readonly Option[] | undefined): Set<string> {
  const ids = new Set<string>();
  if (Array.isArray(options)) for (const option of options) if (option && typeof option.id === "string") ids.add(option.id);
  return ids;
}

function isPermutation(answer: unknown, ids: Set<string>): answer is string[] {
  if (!Array.isArray(answer) || answer.length !== ids.size) return false;
  const seen = new Set<string>();
  for (const entry of answer as unknown[]) {
    if (typeof entry !== "string" || !ids.has(entry) || seen.has(entry)) return false;
    seen.add(entry);
  }
  return true;
}

const edgeKey = (left: string, right: string): string => JSON.stringify([left, right]);

export function visibleQuestions(quiz: Quiz, answers: Answers): Question[] {
  if (!quiz || !Array.isArray(quiz.questions)) return [];
  const shown = new Set<string>();
  const visible: Question[] = [];
  for (const question of quiz.questions) {
    const gate = question.showIf;
    if (gate && !(shown.has(gate.questionId) && ownAnswer(answers, gate.questionId) === gate.optionId)) continue;
    shown.add(question.id);
    visible.push(question);
  }
  return visible;
}

export function validateAnswer(question: Question, answer: unknown): boolean {
  switch (question.kind) {
    case "choice":
    case "audio":
    case "hotspot":
      return typeof answer === "string" && idSet(question.options).has(answer);
    case "rank":
    case "order":
      return isPermutation(answer, idSet(question.items));
    case "match": {
      if (!isPlainRecord(answer)) return false;
      const left = idSet(question.left);
      const right = idSet(question.right);
      return Object.keys(answer).every((key) => left.has(key) && typeof answer[key] === "string" && right.has(answer[key] as string));
    }
    case "graph": {
      if (!Array.isArray(answer) || answer.length > MAX_GRAPH_EDGES) return false;
      const left = idSet(question.left);
      const right = idSet(question.right);
      return (answer as unknown[]).every((edge) => Array.isArray(edge) && edge.length === 2 && typeof edge[0] === "string" && typeof edge[1] === "string" && left.has(edge[0]) && right.has(edge[1]));
    }
    case "grid": {
      if (!isPlainRecord(answer)) return false;
      const cells = new Map<string, Set<string>>();
      for (const cell of question.cells) cells.set(cell.id, idSet(cell.options));
      return Object.keys(answer).every((key) => {
        const allowed = cells.get(key);
        const value = answer[key];
        return allowed !== undefined && typeof value === "string" && allowed.has(value);
      });
    }
    case "slider":
      return typeof answer === "number" && Number.isFinite(answer) && answer >= SLIDER_MIN && answer <= SLIDER_MAX;
    case "reflection":
      return typeof answer === "string" && answer.length <= MAX_REFLECTION_LENGTH;
    default:
      return false;
  }
}

function fraction(hit: number, total: number): number {
  return total <= 0 ? 0 : Math.min(1, Math.max(0, hit / total));
}

/** Pairwise concordance: 1 for an identical order, 0 for the exact reverse. */
function orderCredit(answer: string[], target: string[]): number {
  const targetPos = new Map(target.map((id, index) => [id, index] as const));
  const pairs = (target.length * (target.length - 1)) / 2;
  if (pairs === 0) return 1;
  let kept = 0;
  for (let i = 0; i < answer.length; i += 1) {
    for (let j = i + 1; j < answer.length; j += 1) {
      if ((targetPos.get(answer[i]) as number) < (targetPos.get(answer[j]) as number)) kept += 1;
    }
  }
  return kept / pairs;
}

export function scoreQuestion(question: Question, answer: unknown): number | null {
  if (question.unscored) return null;
  switch (question.kind) {
    case "choice":
    case "audio":
    case "hotspot":
      if (typeof question.correct !== "string") return null;
      return validateAnswer(question, answer) && answer === question.correct ? 1 : 0;
    case "rank":
    case "slider":
    case "reflection":
      return null;
    case "order": {
      const precedence = Array.isArray(question.precedence) ? question.precedence : [];
      if (!precedence.length && !Array.isArray(question.correctOrder)) return null;
      if (!validateAnswer(question, answer)) return 0;
      const order = answer as string[];
      if (precedence.length) {
        const pos = new Map(order.map((id, index) => [id, index] as const));
        let met = 0;
        for (const [before, after] of precedence) if ((pos.get(before) ?? Infinity) < (pos.get(after) ?? -Infinity)) met += 1;
        return fraction(met, precedence.length);
      }
      return orderCredit(order, question.correctOrder as string[]);
    }
    case "match": {
      if (!question.pairs || !isPlainRecord(question.pairs)) return null;
      if (!validateAnswer(question, answer)) return 0;
      const given = answer as Record<string, string>;
      const keys = Object.keys(question.pairs);
      let hit = 0;
      for (const key of keys) if (hasOwn(given, key) && given[key] === question.pairs[key]) hit += 1;
      return fraction(hit, keys.length);
    }
    case "graph": {
      if (!validateAnswer(question, answer)) return 0;
      const truth = new Set(question.edges.map(([l, r]) => edgeKey(l, r)));
      const given = new Set((answer as [string, string][]).map(([l, r]) => edgeKey(l, r)));
      let hit = 0;
      let extra = 0;
      for (const key of given) {
        if (truth.has(key)) hit += 1;
        else extra += 1;
      }
      if (truth.size === 0) return extra === 0 ? 1 : 0;
      return fraction(hit - extra, truth.size);
    }
    case "grid": {
      if (!validateAnswer(question, answer)) return 0;
      const given = answer as Record<string, string>;
      let hit = 0;
      for (const cell of question.cells) if (hasOwn(given, cell.id) && given[cell.id] === cell.correct) hit += 1;
      return fraction(hit, question.cells.length);
    }
    default:
      return null;
  }
}

/** Position 0..1 of a chosen weight inside the range the question's own options span; null when options do not differ on the dimension. */
function relativePosition(pool: Weights[], chosen: Weights, dim: 0 | 1): number | null {
  const values = pool.map((weights) => weights[dim]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (!(max - min > 1e-9)) return null;
  return Math.min(1, Math.max(0, (chosen[dim] - min) / (max - min)));
}

function optionWeightPositions(options: Option[], chosenId: string): (number | null)[] {
  const pool = options.map((option) => option.weights).filter(isWeights);
  const chosen = options.find((option) => option.id === chosenId)?.weights;
  if (!isWeights(chosen)) return [null, null];
  return [relativePosition(pool, chosen, 0), relativePosition(pool, chosen, 1)];
}

function rankPositions(items: Option[], order: string[]): (number | null)[] {
  const byId = new Map(items.map((item) => [item.id, item.weights] as const));
  const ordered = order.map((id) => byId.get(id));
  if (!ordered.every(isWeights)) return [null, null];
  const weights = ordered as Weights[];
  const n = weights.length;
  const factors = weights.map((_, index) => n - index);
  const total = factors.reduce((sum, factor) => sum + factor, 0);
  return ([0, 1] as const).map((dim) => {
    const values = weights.map((entry) => entry[dim]);
    const mean = values.reduce((sum, value, index) => sum + value * factors[index], 0) / total;
    const best = [...values].sort((a, b) => b - a).reduce((sum, value, index) => sum + value * factors[index], 0) / total;
    const worst = [...values].sort((a, b) => a - b).reduce((sum, value, index) => sum + value * factors[index], 0) / total;
    if (!(best - worst > 1e-9)) return null;
    return Math.min(1, Math.max(0, (mean - worst) / (best - worst)));
  });
}

function matchPositions(question: Extract<Question, { kind: "match" }>, given: Record<string, string>): (number | null)[] {
  const table = question.weights;
  if (!table || !isPlainRecord(table)) return [null, null];
  const lookup = (left: string, right: string): Weights | undefined => {
    const pair = `${left}:${right}`;
    if (hasOwn(table, pair) && isWeights(table[pair])) return table[pair];
    if (hasOwn(table, right) && isWeights(table[right])) return table[right];
    return undefined;
  };
  const pool = Object.keys(table).map((key) => table[key]).filter(isWeights);
  const chosen = Object.keys(given).map((left) => lookup(left, given[left])).filter((entry): entry is Weights => entry !== undefined);
  return ([0, 1] as const).map((dim) => {
    const positions = chosen.map((entry) => relativePosition(pool, entry, dim)).filter((value): value is number => value !== null);
    return positions.length ? positions.reduce((sum, value) => sum + value, 0) / positions.length : null;
  });
}

/** Preference positions (0..1 per dimension) contributed by one visible question, or [null, null] if it contributes nothing. */
function preferencePositions(question: Question, answer: unknown): (number | null)[] {
  const none: (number | null)[] = [null, null];
  if (question.unscored || answer === undefined || !validateAnswer(question, answer)) return none;
  switch (question.kind) {
    case "choice":
    case "audio":
    case "hotspot":
      return typeof question.correct === "string" ? none : optionWeightPositions(question.options, answer as string);
    case "rank":
      return rankPositions(question.items, answer as string[]);
    case "match":
      return question.pairs ? none : matchPositions(question, answer as Record<string, string>);
    case "slider": {
      const position = (answer as number - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN);
      return question.dimension === 1 ? [null, position] : [position, null];
    }
    default:
      return none;
  }
}

export function scoreQuiz(quiz: Quiz, answers: Answers): QuizScore {
  const visible = visibleQuestions(quiz, answers);
  const review: ReviewEntry[] = [];
  const positions: number[][] = [[], []];
  let correct = 0;
  let total = 0;
  for (const question of visible) {
    const answer = ownAnswer(answers, question.id);
    const credit = scoreQuestion(question, answer);
    review.push({ id: question.id, credit });
    if (credit !== null) {
      total += 1;
      correct += credit;
      continue;
    }
    const [first, second] = preferencePositions(question, answer);
    if (first !== null) positions[0].push(first);
    if (second !== null) positions[1].push(second);
  }
  const summarize = (values: number[]): number => (values.length ? Math.round((100 * values.reduce((sum, value) => sum + value, 0)) / values.length) : 50);
  const dimensions: DimensionResult[] = Array.isArray(quiz.dimensions)
    ? quiz.dimensions.map((dimension, index) => ({ id: dimension.id, low: dimension.low, high: dimension.high, description: dimension.description, value: summarize(positions[index]) }))
    : [];
  return {
    correct: Math.round(correct * 100) / 100,
    total,
    percent: total > 0 ? Math.round((100 * correct) / total) : 0,
    dimensions,
    review,
  };
}
