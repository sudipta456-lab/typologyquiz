import type { Quiz } from "./types";

const KINDS = new Set(["knowledge", "preference", "hybrid", "cooperative", "logic"]);
const PLAY_MODES = new Set(["solo", "pass-and-play"]);
const QUESTION_KINDS = new Set(["choice", "rank", "order", "match", "graph", "grid", "slider", "reflection", "audio", "hotspot"]);
const WAVEFORMS = new Set(["sine", "triangle", "square"]);
const SOURCE_KINDS = new Set(["reference", "original"]);
const FORBIDDEN_IDS = new Set(["__proto__", "constructor", "prototype", "hasOwnProperty", "toString", "valueOf"]);
const ID_PATTERN = /^[a-z0-9][a-z0-9_-]{0,63}$/i;
const SLUG_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const COLOR_PATTERN = /^#[0-9a-f]{3,8}$/i;
const URL_PATTERN = /^https:\/\/[^\s/$.?#][^\s]*$/i;

/** Structural limits. Audio durations and delays are seconds; hotspot geometry is percent of the diagram. */
export const LIMITS = {
  sections: [2, 3], questions: [6, 10], options: [2, 8], orderItems: [2, 10], gridCells: [1, 12], zones: [2, 12], tones: [1, 16],
  minutes: [1, 120], perCategory: 25, weightAbs: 100, frequency: [40, 4000], toneDuration: [0.05, 5], toneDelay: [0, 20], totalAudioSeconds: 30, gain: [0, 1],
} as const;

type Rec = Record<string, unknown>;
const isRec = (value: unknown): value is Rec => typeof value === "object" && value !== null && !Array.isArray(value);
const own = (rec: Rec, key: string): unknown => (Object.prototype.hasOwnProperty.call(rec, key) ? rec[key] : undefined);
const isText = (value: unknown): value is string => typeof value === "string" && value.trim().length > 0 && value.length <= 4000;
const isNum = (value: unknown): value is number => typeof value === "number" && Number.isFinite(value);
const within = (value: unknown, range: readonly [number, number]): value is number => isNum(value) && value >= range[0] && value <= range[1];
const count = (value: unknown, range: readonly [number, number]): boolean => Array.isArray(value) && value.length >= range[0] && value.length <= range[1];
const safeId = (value: unknown): value is string => typeof value === "string" && ID_PATTERN.test(value) && !FORBIDDEN_IDS.has(value);

function checkWeights(value: unknown, path: string, errors: string[]): void {
  if (!Array.isArray(value) || value.length !== 2 || !value.every((entry) => isNum(entry) && Math.abs(entry) <= LIMITS.weightAbs)) {
    errors.push(`${path}: weights must be two finite numbers with magnitude <= ${LIMITS.weightAbs}`);
  }
}

/** Validates an option list and returns the usable id set. */
function checkOptions(value: unknown, path: string, errors: string[], range: readonly [number, number], needWeights: boolean): Set<string> {
  const ids = new Set<string>();
  if (!count(value, range)) {
    errors.push(`${path}: needs ${range[0]}-${range[1]} entries`);
    if (!Array.isArray(value)) return ids;
  }
  (value as unknown[]).slice(0, 64).forEach((entry, index) => {
    const where = `${path}[${index}]`;
    if (!isRec(entry)) return void errors.push(`${where}: must be an object`);
    const id = own(entry, "id");
    if (!safeId(id)) errors.push(`${where}: invalid id`);
    else if (ids.has(id)) errors.push(`${where}: duplicate id "${id}"`);
    else ids.add(id);
    if (!isText(own(entry, "label"))) errors.push(`${where}: label required`);
    const weights = own(entry, "weights");
    if (weights !== undefined) checkWeights(weights, `${where}.weights`, errors);
    else if (needWeights) errors.push(`${where}: weights required`);
  });
  return ids;
}

function hasWeights(options: unknown): boolean {
  return Array.isArray(options) && options.some((option) => isRec(option) && own(option, "weights") !== undefined);
}

function allWeights(options: unknown): boolean {
  return Array.isArray(options) && options.length > 0 && options.every((option) => isRec(option) && own(option, "weights") !== undefined);
}

function isAcyclic(ids: Set<string>, edges: [string, string][]): boolean {
  const indegree = new Map<string, number>([...ids].map((id) => [id, 0]));
  const next = new Map<string, string[]>();
  for (const [from, to] of edges) {
    indegree.set(to, (indegree.get(to) ?? 0) + 1);
    next.set(from, [...(next.get(from) ?? []), to]);
  }
  const queue = [...indegree].filter(([, degree]) => degree === 0).map(([id]) => id);
  let visited = 0;
  while (queue.length) {
    const id = queue.pop() as string;
    visited += 1;
    for (const to of next.get(id) ?? []) {
      indegree.set(to, (indegree.get(to) ?? 0) - 1);
      if (indegree.get(to) === 0) queue.push(to);
    }
  }
  return visited === ids.size;
}

function checkKeyedChoice(q: Rec, path: string, errors: string[], optionsKey: string): void {
  const ids = checkOptions(own(q, optionsKey), `${path}.${optionsKey}`, errors, LIMITS.options, false);
  const correct = own(q, "correct");
  const weighted = hasWeights(own(q, optionsKey));
  if (correct !== undefined) {
    if (typeof correct !== "string" || !ids.has(correct)) errors.push(`${path}: correct "${String(correct)}" is not an option`);
    if (q.unscored === true) errors.push(`${path}: unscored question must not define correct`);
    if (weighted) errors.push(`${path}: question cannot be both keyed and weighted`);
  } else if (q.unscored !== true && !allWeights(own(q, optionsKey))) {
    errors.push(`${path}: needs correct, weights on every option, or unscored`);
  }
}

function checkQuestion(q: Rec, path: string, errors: string[], sectionIds: Set<string>, sourceIds: Set<string>): { usesWeights: boolean; dimension?: unknown } {
  const result: { usesWeights: boolean; dimension?: unknown } = { usesWeights: false };
  if (!isText(own(q, "prompt"))) errors.push(`${path}: prompt required`);
  if (!isText(own(q, "explanation"))) errors.push(`${path}: explanation required`);
  const context = own(q, "context");
  if (context !== undefined && !isText(context)) errors.push(`${path}: context must be non-empty text`);
  const sectionId = own(q, "sectionId");
  if (typeof sectionId !== "string" || !sectionIds.has(sectionId)) errors.push(`${path}: sectionId does not resolve`);
  const refs = own(q, "sourceIds");
  if (!Array.isArray(refs) || refs.length === 0) errors.push(`${path}: sourceIds required`);
  else for (const ref of refs) if (typeof ref !== "string" || !sourceIds.has(ref)) errors.push(`${path}: unknown source "${String(ref)}"`);
  const unscored = own(q, "unscored");
  if (unscored !== undefined && typeof unscored !== "boolean") errors.push(`${path}: unscored must be boolean`);

  const kind = own(q, "kind");
  switch (kind) {
    case "choice":
      checkKeyedChoice(q, path, errors, "options");
      result.usesWeights = hasWeights(own(q, "options"));
      break;
    case "audio": {
      checkKeyedChoice(q, path, errors, "options");
      result.usesWeights = hasWeights(own(q, "options"));
      if (!isText(own(q, "transcript"))) errors.push(`${path}: transcript required`);
      const tones = own(q, "tones");
      if (!count(tones, LIMITS.tones)) errors.push(`${path}.tones: needs ${LIMITS.tones[0]}-${LIMITS.tones[1]} tones`);
      else {
        let end = 0;
        (tones as unknown[]).forEach((tone, index) => {
          const where = `${path}.tones[${index}]`;
          if (!isRec(tone)) return void errors.push(`${where}: must be an object`);
          const frequency = own(tone, "frequency");
          const duration = own(tone, "duration");
          const delay = own(tone, "delay");
          if (!within(frequency, LIMITS.frequency)) errors.push(`${where}: frequency out of range`);
          if (!within(duration, LIMITS.toneDuration)) errors.push(`${where}: duration out of range`);
          if (!within(delay, LIMITS.toneDelay)) errors.push(`${where}: delay out of range`);
          const waveform = own(tone, "waveform");
          if (waveform !== undefined && !(typeof waveform === "string" && WAVEFORMS.has(waveform))) errors.push(`${where}: unknown waveform`);
          const gain = own(tone, "gain");
          if (gain !== undefined && !within(gain, LIMITS.gain)) errors.push(`${where}: gain must be 0-1`);
          if (isNum(duration) && isNum(delay)) end = Math.max(end, duration + delay);
        });
        if (end > LIMITS.totalAudioSeconds) errors.push(`${path}.tones: total length exceeds ${LIMITS.totalAudioSeconds}s`);
      }
      break;
    }
    case "hotspot": {
      checkKeyedChoice(q, path, errors, "options");
      result.usesWeights = hasWeights(own(q, "options"));
      const diagram = own(q, "diagram");
      if (!isRec(diagram)) { errors.push(`${path}.diagram: required`); break; }
      if (!isText(own(diagram, "title")) || !isText(own(diagram, "description"))) errors.push(`${path}.diagram: title and description required`);
      const zones = own(diagram, "zones");
      if (!count(zones, LIMITS.zones)) { errors.push(`${path}.diagram.zones: needs ${LIMITS.zones[0]}-${LIMITS.zones[1]} zones`); break; }
      const seen = new Set<string>();
      (zones as unknown[]).forEach((zone, index) => {
        const where = `${path}.diagram.zones[${index}]`;
        if (!isRec(zone)) return void errors.push(`${where}: must be an object`);
        const id = own(zone, "id");
        if (!safeId(id)) errors.push(`${where}: invalid id`);
        else if (seen.has(id)) errors.push(`${where}: duplicate id "${id}"`);
        else seen.add(id);
        if (!isText(own(zone, "label"))) errors.push(`${where}: label required`);
        const [x, y, w, h] = ["x", "y", "width", "height"].map((key) => own(zone, key));
        if (!within(x, [0, 100]) || !within(y, [0, 100]) || !within(w, [1, 100]) || !within(h, [1, 100])) errors.push(`${where}: geometry must be percentages (x,y 0-100; width,height 1-100)`);
        else if ((x as number) + (w as number) > 100.0001 || (y as number) + (h as number) > 100.0001) errors.push(`${where}: zone extends past the diagram`);
        const color = own(zone, "color");
        if (color !== undefined && !(typeof color === "string" && COLOR_PATTERN.test(color))) errors.push(`${where}: color must be a hex value`);
      });
      break;
    }
    case "rank": {
      const ids = checkOptions(own(q, "items"), `${path}.items`, errors, LIMITS.options, q.unscored !== true);
      result.usesWeights = ids.size > 0 && hasWeights(own(q, "items"));
      break;
    }
    case "order": {
      const ids = checkOptions(own(q, "items"), `${path}.items`, errors, LIMITS.orderItems, false);
      const order = own(q, "correctOrder");
      const precedence = own(q, "precedence");
      if (order === undefined && precedence === undefined && q.unscored !== true) errors.push(`${path}: needs correctOrder or precedence`);
      if (order !== undefined) {
        const permutation = Array.isArray(order) && order.length === ids.size && new Set(order).size === order.length && order.every((id) => typeof id === "string" && ids.has(id));
        if (!permutation) errors.push(`${path}.correctOrder: must list every item exactly once`);
      }
      const edges: [string, string][] = [];
      if (precedence !== undefined) {
        if (!Array.isArray(precedence) || precedence.length === 0 || precedence.length > 64) errors.push(`${path}.precedence: needs 1-64 pairs`);
        else {
          const seenEdges = new Set<string>();
          let wellFormed = true;
          for (const pair of precedence as unknown[]) {
            if (!Array.isArray(pair) || pair.length !== 2 || typeof pair[0] !== "string" || typeof pair[1] !== "string" || !ids.has(pair[0]) || !ids.has(pair[1])) { wellFormed = false; errors.push(`${path}.precedence: pair references unknown item`); continue; }
            if (pair[0] === pair[1]) { wellFormed = false; errors.push(`${path}.precedence: self-reference "${pair[0]}"`); continue; }
            const key = JSON.stringify(pair);
            if (seenEdges.has(key)) errors.push(`${path}.precedence: duplicate pair`);
            seenEdges.add(key);
            edges.push([pair[0], pair[1]]);
          }
          if (wellFormed && !isAcyclic(ids, edges)) errors.push(`${path}.precedence: contains a cycle`);
          else if (wellFormed && Array.isArray(order) && order.length === ids.size) {
            const pos = new Map((order as string[]).map((id, index) => [id, index] as const));
            if (edges.some(([a, b]) => (pos.get(a) ?? 0) >= (pos.get(b) ?? 0))) errors.push(`${path}: correctOrder violates precedence`);
          }
        }
      }
      break;
    }
    case "match": {
      const left = checkOptions(own(q, "left"), `${path}.left`, errors, LIMITS.options, false);
      const right = checkOptions(own(q, "right"), `${path}.right`, errors, LIMITS.options, false);
      const pairs = own(q, "pairs");
      const weights = own(q, "weights");
      if (pairs !== undefined && weights !== undefined) errors.push(`${path}: cannot define both pairs and weights`);
      if (pairs === undefined && weights === undefined && q.unscored !== true) errors.push(`${path}: needs pairs, weights or unscored`);
      if (pairs !== undefined) {
        if (!isRec(pairs)) errors.push(`${path}.pairs: must be an object`);
        else {
          const keys = Object.keys(pairs);
          if (keys.length !== left.size || !keys.every((key) => left.has(key))) errors.push(`${path}.pairs: must key every left item exactly once`);
          for (const key of keys) {
            const value = own(pairs, key);
            if (typeof value !== "string" || !right.has(value)) errors.push(`${path}.pairs.${key}: not a right item`);
          }
        }
        if (q.unscored === true) errors.push(`${path}: unscored question must not define pairs`);
      }
      if (weights !== undefined) {
        result.usesWeights = true;
        if (!isRec(weights) || Object.keys(weights).length === 0) errors.push(`${path}.weights: must be a non-empty object`);
        else for (const key of Object.keys(weights)) {
          const [l, r] = key.includes(":") ? key.split(":") : [undefined, key];
          if (!right.has(r ?? "") || (l !== undefined && !left.has(l))) errors.push(`${path}.weights.${key}: must be a right item id or "left:right"`);
          checkWeights(own(weights, key), `${path}.weights.${key}`, errors);
        }
      }
      break;
    }
    case "graph": {
      const left = checkOptions(own(q, "left"), `${path}.left`, errors, LIMITS.options, false);
      const right = checkOptions(own(q, "right"), `${path}.right`, errors, LIMITS.options, false);
      const edges = own(q, "edges");
      if (!Array.isArray(edges) || edges.length === 0) { errors.push(`${path}.edges: required`); break; }
      const seen = new Set<string>();
      for (const edge of edges.slice(0, 256) as unknown[]) {
        if (!Array.isArray(edge) || edge.length !== 2 || typeof edge[0] !== "string" || typeof edge[1] !== "string" || !left.has(edge[0]) || !right.has(edge[1])) { errors.push(`${path}.edges: edge references unknown node`); continue; }
        const key = JSON.stringify(edge);
        if (seen.has(key)) errors.push(`${path}.edges: duplicate edge ${edge[0]}->${edge[1]}`);
        seen.add(key);
      }
      if (seen.size >= left.size * right.size && left.size * right.size > 0) errors.push(`${path}.edges: connects every pair, so the task has no discrimination`);
      if (q.unscored === true) errors.push(`${path}: graph is keyed and cannot be unscored`);
      break;
    }
    case "grid": {
      const cells = own(q, "cells");
      if (!count(cells, LIMITS.gridCells)) { errors.push(`${path}.cells: needs ${LIMITS.gridCells[0]}-${LIMITS.gridCells[1]} cells`); break; }
      const seen = new Set<string>();
      (cells as unknown[]).forEach((cell, index) => {
        const where = `${path}.cells[${index}]`;
        if (!isRec(cell)) return void errors.push(`${where}: must be an object`);
        const id = own(cell, "id");
        if (!safeId(id)) errors.push(`${where}: invalid id`);
        else if (seen.has(id)) errors.push(`${where}: duplicate id "${id}"`);
        else seen.add(id);
        if (!isText(own(cell, "label"))) errors.push(`${where}: label required`);
        const ids = checkOptions(own(cell, "options"), `${where}.options`, errors, LIMITS.options, false);
        const correct = own(cell, "correct");
        if (typeof correct !== "string" || !ids.has(correct)) errors.push(`${where}: correct is not an option`);
      });
      break;
    }
    case "slider": {
      const dimension = own(q, "dimension");
      if (dimension !== 0 && dimension !== 1) errors.push(`${path}: dimension must be 0 or 1`);
      if (!isText(own(q, "lowLabel")) || !isText(own(q, "highLabel"))) errors.push(`${path}: lowLabel and highLabel required`);
      result.usesWeights = true;
      break;
    }
    case "reflection":
      if (!isText(own(q, "hint"))) errors.push(`${path}: hint required`);
      break;
    default:
      errors.push(`${path}: unknown question kind "${String(kind)}"`);
  }
  return result;
}

export function validateQuiz(input: unknown): string[] {
  const errors: string[] = [];
  try {
    if (!isRec(input)) return ["quiz: must be an object"];
    const name = typeof input.id === "string" ? input.id : "quiz";
    const add = (message: string): void => void errors.push(`${name}: ${message}`);
    const local: string[] = [];

    if (!safeId(input.id)) local.push("id invalid");
    if (typeof input.slug !== "string" || !SLUG_PATTERN.test(input.slug) || input.slug.length > 90) local.push("slug must be lowercase kebab-case");
    if (!safeId(input.categoryId)) local.push("categoryId invalid");
    if (!isText(input.title)) local.push("title required");
    if (!isText(input.description)) local.push("description required");
    if (typeof input.kind !== "string" || !KINDS.has(input.kind)) local.push("unknown kind");
    if (input.version !== 1) local.push("version must be 1");
    if (!isNum(input.minutes) || !Number.isInteger(input.minutes) || !within(input.minutes, LIMITS.minutes)) local.push("minutes must be an integer 1-120");
    if (input.playMode !== undefined && !(typeof input.playMode === "string" && PLAY_MODES.has(input.playMode))) local.push("unknown playMode");
    if (input.note !== undefined && !isText(input.note)) local.push("note must be non-empty text");

    const sectionIds = new Set<string>();
    if (!count(input.sections, LIMITS.sections)) local.push(`needs ${LIMITS.sections[0]}-${LIMITS.sections[1]} sections`);
    if (Array.isArray(input.sections)) input.sections.slice(0, 16).forEach((section: unknown, index: number) => {
      if (!isRec(section) || !safeId(section.id) || !isText(section.title)) return void local.push(`sections[${index}]: id and title required`);
      const sectionKey = section.id as string;
      if (sectionIds.has(sectionKey)) local.push(`sections[${index}]: duplicate id "${sectionKey}"`);
      sectionIds.add(sectionKey);
    });

    const sourceIds = new Set<string>();
    if (!Array.isArray(input.sources) || input.sources.length === 0 || input.sources.length > 40) local.push("needs 1-40 sources");
    if (Array.isArray(input.sources)) input.sources.slice(0, 40).forEach((source: unknown, index: number) => {
      const where = `sources[${index}]`;
      if (!isRec(source) || !safeId(source.id) || !isText(source.label)) return void local.push(`${where}: id and label required`);
      const sourceKey = source.id as string;
      if (sourceIds.has(sourceKey)) local.push(`${where}: duplicate id "${sourceKey}"`);
      sourceIds.add(sourceKey);
      if (typeof source.kind !== "string" || !SOURCE_KINDS.has(source.kind)) local.push(`${where}: unknown kind`);
      if (source.kind === "reference" && !(typeof source.url === "string" && URL_PATTERN.test(source.url))) local.push(`${where}: reference needs an https url`);
      if (source.url !== undefined && !(typeof source.url === "string" && URL_PATTERN.test(source.url))) local.push(`${where}: url must be https`);
    });

    let dimensionsOk = false;
    if (input.dimensions !== undefined) {
      const dims = input.dimensions;
      dimensionsOk = Array.isArray(dims) && dims.length === 2 && dims.every((d: unknown) => isRec(d) && safeId(d.id) && isText(d.low) && isText(d.high) && isText(d.description));
      if (!dimensionsOk) local.push("dimensions must be exactly two {id,low,high,description}");
      else if ((dims as Rec[])[0].id === (dims as Rec[])[1].id) local.push("dimension ids must differ");
    }

    const questionIds = new Map<string, Rec>();
    const kindsUsed = new Set<string>();
    const sectionUse = new Set<string>();
    let usesWeights = false;
    if (!count(input.questions, LIMITS.questions)) local.push(`needs ${LIMITS.questions[0]}-${LIMITS.questions[1]} tasks`);
    if (Array.isArray(input.questions)) input.questions.slice(0, 32).forEach((raw: unknown, index: number) => {
      const path = `questions[${index}]`;
      if (!isRec(raw)) return void local.push(`${path}: must be an object`);
      const id = raw.id;
      if (!safeId(id)) local.push(`${path}: invalid id`);
      else if (questionIds.has(id)) local.push(`${path}: duplicate id "${id}"`);
      if (typeof raw.kind !== "string" || !QUESTION_KINDS.has(raw.kind)) {
        local.push(`${path}: unknown question kind "${String(raw.kind)}"`);
        return;
      }
      kindsUsed.add(raw.kind);
      if (typeof raw.sectionId === "string") sectionUse.add(raw.sectionId);
      const sub: string[] = [];
      const outcome = checkQuestion(raw, path, sub, sectionIds, sourceIds);
      local.push(...sub);
      if (outcome.usesWeights) usesWeights = true;
      const gate = raw.showIf;
      if (gate !== undefined) {
        if (!isRec(gate) || typeof gate.questionId !== "string" || typeof gate.optionId !== "string") local.push(`${path}: showIf needs questionId and optionId`);
        else {
          const parent = questionIds.get(gate.questionId);
          if (!parent) local.push(`${path}: showIf must reference an earlier question`);
          else if (parent.kind !== "choice") local.push(`${path}: showIf must depend on a choice question`);
          else if (!Array.isArray(parent.options) || !parent.options.some((option: unknown) => isRec(option) && option.id === gate.optionId)) local.push(`${path}: showIf option "${gate.optionId}" not found on ${gate.questionId}`);
        }
      }
      if (typeof id === "string" && !questionIds.has(id)) questionIds.set(id, raw);
    });
    for (const id of sectionIds) if (!sectionUse.has(id)) local.push(`section "${id}" has no tasks`);
    if (usesWeights && !dimensionsOk) local.push("preference weights or sliders require dimensions");
    if (input.kind === "preference" && !usesWeights) local.push("preference quiz has no weighted tasks");

    local.forEach(add);
  } catch (error) {
    errors.push(`quiz: validator failed defensively (${error instanceof Error ? error.message : "unknown error"})`);
  }
  return errors;
}

export function validateCollection(quizzes: Quiz[]): string[] {
  const errors: string[] = [];
  try {
    if (!Array.isArray(quizzes)) return ["collection: must be an array"];
    const ids = new Set<string>();
    const slugs = new Set<string>();
    const categories = new Map<string, number>();
    quizzes.forEach((quiz, index) => {
      const problems = validateQuiz(quiz);
      const label = isRec(quiz) && typeof quiz.id === "string" ? quiz.id : `#${index}`;
      for (const problem of problems) errors.push(problem.startsWith("quiz:") ? `${label}: ${problem}` : problem);
      if (!isRec(quiz)) return;
      if (typeof quiz.id === "string") {
        if (ids.has(quiz.id)) errors.push(`${label}: duplicate quiz id`);
        ids.add(quiz.id);
      }
      if (typeof quiz.slug === "string") {
        if (slugs.has(quiz.slug)) errors.push(`${label}: duplicate slug "${quiz.slug}"`);
        slugs.add(quiz.slug);
      }
      if (typeof quiz.categoryId === "string") categories.set(quiz.categoryId, (categories.get(quiz.categoryId) ?? 0) + 1);
    });
    for (const [category, total] of categories) {
      if (total !== LIMITS.perCategory) errors.push(`category ${category}: has ${total} quizzes, needs exactly ${LIMITS.perCategory}`);
    }
  } catch (error) {
    errors.push(`collection: validator failed defensively (${error instanceof Error ? error.message : "unknown error"})`);
  }
  return errors;
}
