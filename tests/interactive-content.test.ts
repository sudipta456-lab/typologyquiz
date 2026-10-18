import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { test } from "node:test";
import sitemap from "../src/app/sitemap.ts";
import { analyticsInteractiveQuizzes, analyticsPaths } from "../src/lib/analytics-manifest.generated.ts";
import { analyticsPageGroup, analyticsPath, createAnalyticsController, safeEventParameters, trackInteractiveQuizEvent } from "../src/lib/analytics.ts";
import { CATEGORIES } from "../src/lib/interactive/categories.ts";
import { PUBLIC_SLUGS, SUMMARIES } from "../src/lib/interactive/catalog.generated.ts";
import { scoreQuestion, scoreQuiz, validateAnswer, visibleQuestions } from "../src/lib/interactive/engine.ts";
import { getCategory, getQuiz, QUIZZES, quizPath } from "../src/lib/interactive/registry.ts";
import type { Answer, Answers, Question, Quiz } from "../src/lib/interactive/types.ts";
import { validateCollection } from "../src/lib/interactive/validate.ts";

// These tests exercise the shipped banks: identity, scoring contracts, provenance and integration.
// Passing them proves structure and answer-key mechanics. It does not verify that any fact is true;
// that needs the separate human/independent content review.

interface Brief { id: string; slug: string; title: string; category_code: string; dependency: string }
const briefs = (JSON.parse(readFileSync("content/interactive/briefs.json", "utf8")) as { quizzes: Brief[] }).quizzes;
const sha256 = (path: string): string => createHash("sha256").update(readFileSync(path)).digest("hex");

function topologicalOrder(ids: string[], edges: readonly (readonly [string, string])[], pick: "first" | "last"): string[] {
  const remaining = new Set(ids);
  const order: string[] = [];
  while (remaining.size) {
    const ready = [...remaining].filter((id) => edges.every(([before, after]) => after !== id || !remaining.has(before))).sort();
    assert.ok(ready.length > 0, "precedence constraints must be acyclic");
    const next = pick === "first" ? ready[0] : ready[ready.length - 1];
    remaining.delete(next);
    order.push(next);
  }
  return order;
}

/** The one answer the key accepts, or undefined for tasks that are not keyed. */
function golden(q: Question): Answer | undefined {
  if (q.unscored) return undefined;
  switch (q.kind) {
    case "choice": case "audio": case "hotspot": return q.correct;
    case "order":
      if (q.correctOrder) return q.correctOrder;
      return q.precedence?.length ? topologicalOrder(q.items.map((item) => item.id), q.precedence, "first") : undefined;
    case "match": return q.pairs;
    case "graph": return q.edges.map(([l, r]) => [l, r] as [string, string]);
    case "grid": return Object.fromEntries(q.cells.map((cell) => [cell.id, cell.correct]));
    default: return undefined;
  }
}

/** Answers that look plausible but must never earn full credit. */
function degraded(q: Question): Answer[] {
  const answers: Answer[] = [];
  switch (q.kind) {
    case "choice": case "audio": case "hotspot":
      for (const option of q.options) if (option.id !== q.correct) answers.push(option.id);
      break;
    case "order": {
      const right = golden(q) as string[];
      answers.push([...right].reverse());
      break;
    }
    case "match": {
      const pairs = q.pairs ?? {};
      const keys = Object.keys(pairs);
      answers.push(Object.fromEntries(keys.slice(1).map((key) => [key, pairs[key]])));
      const other = q.right.find((option) => option.id !== pairs[keys[0]]);
      if (other) answers.push({ ...pairs, [keys[0]]: other.id });
      break;
    }
    case "graph": {
      answers.push(q.edges.slice(1).map(([l, r]) => [l, r] as [string, string]));
      const taken = new Set(q.edges.map((edge) => JSON.stringify(edge)));
      for (const l of q.left) for (const r of q.right) if (!taken.has(JSON.stringify([l.id, r.id]))) {
        answers.push([...q.edges.map(([a, b]) => [a, b] as [string, string]), [l.id, r.id]]);
        return answers;
      }
      break;
    }
    case "grid": {
      const [first, ...rest] = q.cells;
      const alternative = first.options.find((option) => option.id !== first.correct);
      const right = Object.fromEntries(q.cells.map((cell) => [cell.id, cell.correct]));
      if (alternative) answers.push({ ...right, [first.id]: alternative.id });
      answers.push(Object.fromEntries(rest.map((cell) => [cell.id, cell.correct])));
      break;
    }
    default: break;
  }
  return answers;
}

const FORGERIES: unknown[] = [undefined, null, "", "__proto__", "constructor", 7, true, {}, [], ["__proto__"], { __proto__: "x" }, "<script>"];
const keyedQuestions = QUIZZES.flatMap((quiz) => quiz.questions.filter((q) => golden(q) !== undefined).map((q) => ({ quiz, q })));

function textsOf(quiz: Quiz): { path: string; text: string }[] {
  const found: { path: string; text: string }[] = [];
  const visit = (value: unknown, path: string): void => {
    if (typeof value === "string") found.push({ path, text: value });
    else if (Array.isArray(value)) value.forEach((entry, index) => visit(entry, `${path}[${index}]`));
    else if (value && typeof value === "object") {
      for (const [key, entry] of Object.entries(value)) {
        if (key === "url" && path.startsWith("sources[")) continue;
        visit(entry, path ? `${path}.${key}` : key);
      }
    }
  };
  visit(quiz, "");
  return found;
}

function keysOf(value: unknown, path: string, into: { path: string; key: string }[] = []): { path: string; key: string }[] {
  if (Array.isArray(value)) value.forEach((entry, index) => keysOf(entry, `${path}[${index}]`, into));
  else if (value && typeof value === "object") {
    for (const [key, entry] of Object.entries(value)) {
      into.push({ path, key });
      keysOf(entry, path ? `${path}.${key}` : key, into);
    }
  }
  return into;
}

/** A match counts only when no negation sits just before it ("not a percentile"). */
function positiveClaim(text: string, pattern: RegExp): boolean {
  for (const hit of text.matchAll(new RegExp(pattern.source, pattern.flags.replace("g", "") + "g"))) {
    const before = text.slice(Math.max(0, (hit.index ?? 0) - 60), hit.index);
    if (!/\b(no|not|never|without|isn't|doesn't|don't|cannot|can't|nor)\b/i.test(before)) return true;
  }
  return false;
}

test("the corpus is exactly the approved 250: IDs, slugs, categories and 8 tasks each", () => {
  assert.equal(QUIZZES.length, 250);
  assert.deepEqual(QUIZZES.map((quiz) => quiz.id).sort(), briefs.map((brief) => brief.id).sort());
  for (const brief of briefs) {
    const quiz = QUIZZES.find((item) => item.id === brief.id);
    assert.ok(quiz, `${brief.id} is missing`);
    assert.equal(quiz.slug, brief.slug, brief.id);
    assert.equal(getCategory(quiz.categoryId)?.code, brief.category_code, brief.id);
    assert.equal(quiz.questions.length, 8, brief.id);
    assert.equal(quiz.version, 1, brief.id);
  }
  for (const category of CATEGORIES) assert.equal(QUIZZES.filter((quiz) => quiz.categoryId === category.id).length, 25, category.id);
  assert.equal(QUIZZES.reduce((total, quiz) => total + quiz.questions.length, 0), 2000);
  assert.deepEqual(validateCollection(QUIZZES), []);
  assert.equal(new Set(QUIZZES.map((quiz) => quiz.slug)).size, 250);
  assert.ok(!QUIZZES.some((quiz) => quiz.slug === "category"), "slug would collide with /quizzes/category/");
  assert.equal(getQuiz(QUIZZES[0].slug), QUIZZES[0]);
  assert.equal(getQuiz("__proto__"), undefined);
  assert.equal(quizPath("a-b"), "/quizzes/a-b/");
});

test("every quiz is a real activity: distinct titles, descriptions and prompts, two or more formats, no placeholder text", () => {
  assert.equal(new Set(QUIZZES.map((quiz) => quiz.title.toLowerCase())).size, 250, "titles must be unique");
  assert.equal(new Set(QUIZZES.map((quiz) => quiz.description.toLowerCase())).size, 250, "descriptions must be unique");
  const prompts = new Map<string, string>();
  for (const quiz of QUIZZES) {
    assert.ok(quiz.sections.length >= 2 && quiz.sections.length <= 3, `${quiz.id} sections`);
    assert.ok(new Set(quiz.questions.map((q) => q.kind)).size >= 2, `${quiz.id} uses a single format`);
    assert.ok(quiz.description.length >= 40, `${quiz.id} description is too thin`);
    for (const q of quiz.questions) {
      const key = q.prompt.toLowerCase().replace(/\s+/g, " ").trim();
      assert.ok(!prompts.has(key), `${quiz.id}/${q.id} repeats the prompt of ${prompts.get(key)}`);
      prompts.set(key, `${quiz.id}/${q.id}`);
      assert.notEqual(q.explanation.trim().toLowerCase(), q.prompt.trim().toLowerCase(), `${quiz.id}/${q.id} explanation just repeats the prompt`);
    }
    for (const { path, text } of textsOf(quiz)) assert.ok(!/\b(TODO|TBD|FIXME|lorem ipsum|placeholder|coming soon)\b/i.test(text), `${quiz.id} ${path}: placeholder text`);
  }
});

test("every objective golden answer earns exactly full credit, including any other valid ordering", () => {
  assert.ok(keyedQuestions.length > 1000, "most tasks should be objectively keyed");
  for (const { quiz, q } of keyedQuestions) {
    const answer = golden(q) as Answer;
    assert.ok(validateAnswer(q, answer), `${quiz.id}/${q.id} golden answer is not a valid answer`);
    assert.equal(scoreQuestion(q, answer), 1, `${quiz.id}/${q.id}`);
    if (q.kind === "order" && q.precedence?.length) {
      const ids = q.items.map((item) => item.id);
      for (const pick of ["first", "last"] as const) assert.equal(scoreQuestion(q, topologicalOrder(ids, q.precedence, pick)), 1, `${quiz.id}/${q.id} rejects a valid ${pick} order`);
    }
    if (q.kind === "graph") assert.equal(scoreQuestion(q, [...(answer as [string, string][]), ...(answer as [string, string][])]), 1, `${quiz.id}/${q.id} duplicates must not change credit`);
  }
});

test("a perfect run scores 100% on every quiz, on every branch", () => {
  for (const quiz of QUIZZES) {
    const keyed = quiz.questions.filter((q) => golden(q) !== undefined);
    const base: Answers = Object.fromEntries(keyed.map((q) => [q.id, golden(q) as Answer]));
    const gates = new Map<string, { parent: string; option: string }>();
    for (const q of quiz.questions) if (q.showIf) gates.set(`${q.showIf.questionId}:${q.showIf.optionId}`, { parent: q.showIf.questionId, option: q.showIf.optionId });
    const runs = gates.size ? [...gates.values()].map(({ parent, option }) => ({ answers: { ...base, [parent]: option } as Answers, parent })) : [{ answers: base, parent: "" }];
    for (const { answers, parent } of runs) {
      const score = scoreQuiz(quiz, answers);
      assert.equal(score.review.length, visibleQuestions(quiz, answers).length, quiz.id);
      for (const entry of score.review) if (entry.credit !== null && entry.id !== parent) assert.equal(entry.credit, 1, `${quiz.id}/${entry.id}`);
      if (!gates.size && score.total > 0) assert.equal(score.percent, 100, quiz.id);
      const empty = scoreQuiz(quiz, {});
      for (const value of [empty.correct, empty.percent, ...empty.dimensions.map((dimension) => dimension.value)]) assert.ok(Number.isFinite(value), quiz.id);
    }
  }
});

test("forged, empty and partial answers never earn full credit", () => {
  for (const { quiz, q } of keyedQuestions) {
    for (const forged of FORGERIES) {
      const credit = scoreQuestion(q, forged);
      assert.ok(credit !== null && credit < 1, `${quiz.id}/${q.id} gave ${String(credit)} to ${JSON.stringify(forged)}`);
    }
    const wrong = degraded(q);
    if (q.kind !== "grid" && q.kind !== "match") assert.ok(wrong.length > 0, `${quiz.id}/${q.id} offers no wrong answer to test`);
    for (const answer of wrong) {
      const credit = scoreQuestion(q, answer);
      assert.ok(credit !== null && credit < 1, `${quiz.id}/${q.id} gave ${String(credit)} to degraded ${JSON.stringify(answer)}`);
    }
    if (q.kind === "choice" || q.kind === "audio" || q.kind === "hotspot") {
      assert.equal(scoreQuestion(q, [q.correct as string]), 0, `${quiz.id}/${q.id} accepted an array for a single choice`);
      assert.equal(scoreQuestion(q, quiz.questions.length), 0);
    }
  }
});

test("choice, audio and hotspot keys are option IDs, and order keys are exact permutations", () => {
  for (const quiz of QUIZZES) for (const q of quiz.questions) {
    if (q.kind === "choice" || q.kind === "audio" || q.kind === "hotspot") {
      if (q.correct !== undefined) {
        assert.equal(typeof q.correct, "string", `${quiz.id}/${q.id}`);
        assert.ok(q.options.some((option) => option.id === q.correct), `${quiz.id}/${q.id} key is not an option ID`);
        assert.ok(q.options.every((option) => option.weights === undefined), `${quiz.id}/${q.id} is both keyed and weighted`);
        assert.equal(q.options.filter((option) => option.label.trim().toLowerCase() === q.options.find((o) => o.id === q.correct)?.label.trim().toLowerCase()).length, 1, `${quiz.id}/${q.id} has an indistinguishable duplicate label`);
      }
    }
    if (q.kind === "hotspot") {
      const options = new Set(q.options.map((option) => option.id));
      for (const zone of q.diagram.zones) assert.ok(options.has(zone.id), `${quiz.id}/${q.id} zone ${zone.id} has no matching labelled option`);
    }
    if (q.kind === "audio") {
      assert.ok(q.transcript.trim().length > 0, `${quiz.id}/${q.id}`);
      assert.ok(Math.max(...q.tones.map((tone) => tone.delay + tone.duration)) <= 30, `${quiz.id}/${q.id}`);
    }
    if (q.kind === "order" && q.correctOrder) {
      assert.deepEqual([...q.correctOrder].sort(), q.items.map((item) => item.id).sort(), `${quiz.id}/${q.id}`);
      const position = new Map(q.correctOrder.map((id, index) => [id, index] as const));
      for (const [before, after] of q.precedence ?? []) assert.ok((position.get(before) as number) < (position.get(after) as number), `${quiz.id}/${q.id} key violates precedence`);
    }
    if (q.kind === "match" && q.pairs) {
      assert.deepEqual(Object.keys(q.pairs).sort(), q.left.map((option) => option.id).sort(), `${quiz.id}/${q.id}`);
      for (const target of Object.values(q.pairs)) assert.ok(q.right.some((option) => option.id === target), `${quiz.id}/${q.id}`);
    }
  }
});

test("ranked and weighted preference tasks are never keyed, correct or credited", () => {
  let ranks = 0;
  for (const quiz of QUIZZES) for (const q of quiz.questions) {
    if (q.kind === "rank") {
      ranks += 1;
      for (const key of ["correct", "correctOrder", "pairs", "precedence"]) assert.ok(!(key in q), `${quiz.id}/${q.id} rank task has "${key}"`);
      assert.equal(scoreQuestion(q, q.items.map((item) => item.id)), null, `${quiz.id}/${q.id}`);
      assert.equal(scoreQuestion(q, [...q.items.map((item) => item.id)].reverse()), null, `${quiz.id}/${q.id}`);
      if (!q.unscored) assert.ok(q.items.every((item) => item.weights !== undefined), `${quiz.id}/${q.id} rank items need weights`);
    }
    if (q.kind === "slider" || q.kind === "reflection") assert.equal(scoreQuestion(q, q.kind === "slider" ? 50 : "text"), null, `${quiz.id}/${q.id}`);
    if ((q.kind === "choice" || q.kind === "audio" || q.kind === "hotspot") && q.correct === undefined) assert.equal(scoreQuestion(q, q.options[0].id), null, `${quiz.id}/${q.id} preference choice was scored`);
    if (q.kind === "match" && q.weights) assert.equal(scoreQuestion(q, {}), null, `${quiz.id}/${q.id}`);
    if (q.unscored) assert.equal(golden(q), undefined, `${quiz.id}/${q.id}`);
  }
  assert.ok(ranks > 0, "the corpus should contain ranking tasks");
});

test("preference and hybrid dimensions are measurable, and knowledge scores never mix with them", () => {
  for (const quiz of QUIZZES) {
    const weighted = quiz.questions.filter((q) => !q.unscored && ((q.kind === "choice" || q.kind === "audio" || q.kind === "hotspot") ? q.correct === undefined && q.options.some((o) => o.weights) : q.kind === "rank" || q.kind === "slider" || (q.kind === "match" && q.weights !== undefined)));
    if (quiz.kind === "knowledge" || quiz.kind === "logic") {
      assert.equal(weighted.length, 0, `${quiz.id} is a knowledge quiz but has preference tasks`);
      continue;
    }
    if (quiz.kind !== "preference" && quiz.kind !== "hybrid") continue;
    assert.ok(quiz.dimensions, `${quiz.id} needs dimensions`);
    for (const dimension of [0, 1] as const) {
      const high: Answers = {};
      const low: Answers = {};
      let informative = 0;
      for (const q of weighted) {
        if (q.kind === "slider") {
          if (q.dimension === dimension) { high[q.id] = 100; low[q.id] = 0; informative += 1; }
          continue;
        }
        if (q.kind === "match") {
          const table = Object.values(q.weights ?? {}).map((entry) => entry[dimension]);
          if (table.length && Math.max(...table) - Math.min(...table) > 0) informative += 1;
          continue;
        }
        if (q.kind !== "rank" && q.kind !== "choice" && q.kind !== "audio" && q.kind !== "hotspot") continue;
        const options = q.kind === "rank" ? q.items : q.options;
        const values = options.map((option) => option.weights?.[dimension] ?? 0);
        if (Math.max(...values) - Math.min(...values) <= 0) continue;
        informative += 1;
        if (q.kind === "rank") {
          high[q.id] = [...q.items].sort((a, b) => (b.weights?.[dimension] ?? 0) - (a.weights?.[dimension] ?? 0)).map((item) => item.id);
          low[q.id] = [...q.items].sort((a, b) => (a.weights?.[dimension] ?? 0) - (b.weights?.[dimension] ?? 0)).map((item) => item.id);
        } else {
          high[q.id] = options.reduce((best, option) => ((option.weights?.[dimension] ?? 0) > (best.weights?.[dimension] ?? 0) ? option : best)).id;
          low[q.id] = options.reduce((best, option) => ((option.weights?.[dimension] ?? 0) < (best.weights?.[dimension] ?? 0) ? option : best)).id;
        }
      }
      assert.ok(informative >= 2, `${quiz.id} dimension ${dimension} is informed by fewer than 2 tasks`);
      assert.ok(Object.keys(high).length > 0, `${quiz.id} dimension ${dimension} has no choice, ranking or slider task to move it`);
      const top = scoreQuiz(quiz, high).dimensions[dimension].value;
      const bottom = scoreQuiz(quiz, low).dimensions[dimension].value;
      assert.ok(top > bottom, `${quiz.id} dimension ${dimension} cannot separate high (${top}) from low (${bottom})`);
    }
  }
  assert.ok(QUIZZES.filter((quiz) => quiz.kind === "preference").length > 20);
});

test("branching quizzes: conditional tasks follow an earlier choice and hidden answers never score", () => {
  for (const brief of briefs.filter((item) => item.dependency === "branch")) {
    const quiz = getQuiz(brief.slug) as Quiz;
    const gated = quiz.questions.filter((q) => q.showIf);
    assert.ok(gated.length >= 2, `${quiz.id}`);
    assert.ok(new Set(gated.map((q) => `${q.showIf!.questionId}:${q.showIf!.optionId}`)).size >= 2, `${quiz.id} needs distinct branches`);
    const [first] = gated;
    const gate = first.showIf!;
    const parent = quiz.questions.find((q) => q.id === gate.questionId);
    assert.equal(parent?.kind, "choice", `${quiz.id} gate must depend on a choice`);
    assert.ok(!visibleQuestions(quiz, {}).some((q) => q.id === first.id), `${quiz.id} gate opened without its parent answer`);
    assert.ok(visibleQuestions(quiz, { [gate.questionId]: gate.optionId }).some((q) => q.id === first.id), `${quiz.id} gate never opens`);
    const other = parent?.kind === "choice" ? parent.options.find((option) => option.id !== gate.optionId) : undefined;
    assert.ok(other, `${quiz.id} parent needs a second option`);
    const closed: Answers = { [gate.questionId]: other.id, [first.id]: golden(first) ?? "a" };
    assert.ok(!scoreQuiz(quiz, closed).review.some((entry) => entry.id === first.id), `${quiz.id} scored a task from a branch that is not taken`);
  }
});

test("sources are https references or original cases, and every reference is actually cited", () => {
  for (const quiz of QUIZZES) {
    const cited = new Set(quiz.questions.flatMap((q) => q.sourceIds));
    for (const q of quiz.questions) assert.ok(q.sourceIds.length > 0, `${quiz.id}/${q.id}`);
    for (const source of quiz.sources) {
      if (source.url !== undefined) {
        const url = new URL(source.url);
        assert.equal(url.protocol, "https:", `${quiz.id} ${source.id}`);
        assert.ok(url.hostname.includes(".") && !/^(\d+\.){3}\d+$/.test(url.hostname) && url.hostname !== "localhost", `${quiz.id} ${source.id}`);
        assert.equal(url.username + url.password, "", `${quiz.id} ${source.id}`);
      }
      if (source.kind === "reference") assert.ok(source.url, `${quiz.id} ${source.id}: reference needs a url`);
      assert.ok(cited.has(source.id), `${quiz.id} cites no task from source ${source.id}`);
    }
  }
});

test("no external media, embeds or media-bearing fields anywhere in the banks", () => {
  const mediaKey = /^(src|href|url|image|images|img|photo|picture|video|audioUrl|audioSrc|media|mediaUrl|file|embed|asset|poster|thumbnail|svg|html)$/i;
  for (const quiz of QUIZZES) {
    for (const { path, text } of textsOf(quiz)) {
      assert.ok(!/https?:\/\//i.test(text), `${quiz.id} ${path}: link inside content text`);
      assert.ok(!/<\s*\/?\s*(img|audio|video|iframe|script|svg|source|link|object|embed|style)\b/i.test(text), `${quiz.id} ${path}: markup`);
      assert.ok(!/\bdata:[a-z]+\/[a-z0-9.+-]+/i.test(text), `${quiz.id} ${path}: data URI`);
      assert.ok(!/\.(mp3|wav|ogg|m4a|aac|flac|mp4|webm|mov|jpe?g|png|gif|webp|avif|svg)\b/i.test(text), `${quiz.id} ${path}: media filename`);
    }
    for (const { path, key } of keysOf(quiz, "")) if (mediaKey.test(key)) assert.ok(key === "url" && path.startsWith("sources["), `${quiz.id} ${path}.${key}: media field`);
    for (const q of quiz.questions) {
      if (q.kind === "hotspot") assert.deepEqual(Object.keys(q.diagram).sort(), ["description", "title", "zones"], `${quiz.id}/${q.id}`);
      if (q.kind === "audio") for (const tone of q.tones) assert.ok(Object.keys(tone).every((key) => ["frequency", "duration", "delay", "waveform", "gain"].includes(key)), `${quiz.id}/${q.id}`);
    }
  }
});

test("no claims of real polls, real participants, percentiles, or AI analysis; AI-themed quizzes disclose that nothing is sent", () => {
  const realPoll = [
    /\baccording to (a|an|the)\b[^.]{0,40}\b(survey|poll)\b/i,
    /\b(survey|poll)s?\b[^.]{0,40}\b(found|shows?|showed|reports?|reported)\b/i,
    /\b\d{1,3}(\.\d+)?\s?% of (americans|canadians|people|adults|respondents|users|players|teens|participants|takers)\b/i,
    /\b(thousands|millions|hundreds) of (players|users|people|quiz.takers)\b[^.]{0,40}\b(chose|picked|took|voted)\b/i,
  ];
  const aiTerm = /\b(AI|ChatGPT|GPT-?\d*|LLM)\b|artificial intelligence|chatbot|language model/;
  const aiClaim = /\b(AI|model)[- ]?(powered|generated|analy[sz]ed|scored|graded|reviewed)\b|analy[sz]ed by (an? )?(AI|model)|\bour (AI|model)\b/i;
  const declaredFictional = /fictional|invented|made[- ]up|imaginary/i;
  for (const quiz of QUIZZES) {
    const texts = textsOf(quiz).map((entry) => entry.text);
    const body = texts.join("\n");
    for (const pattern of realPoll) if (positiveClaim(body, pattern)) assert.ok(quiz.note && declaredFictional.test(quiz.note), `${quiz.id}: survey-style claim needs a note saying the data are invented (${pattern})`);
    assert.ok(!positiveClaim(body, /\bpercentile|top \d+%|scientifically (proven|validated)|clinically (proven|validated)/i), `${quiz.id}: percentile or validation claim`);
    assert.ok(!positiveClaim(body, aiClaim), `${quiz.id}: claims AI analysis`);
    const dependency = briefs.find((brief) => brief.id === quiz.id)?.dependency;
    if (dependency === "ai" || aiTerm.test(body)) {
      assert.ok(quiz.note && /\b(no|not|never|without)\b[^.]{0,80}\b(AI|model|chatbot|assistant|analy[sz]|sent|uploaded|leave)/i.test(quiz.note), `${quiz.id}: AI-related quiz needs a note saying no AI or model is used and nothing is sent`);
    }
  }
});

test("social quizzes honour their play mode, and Friends & Social Play includes pass-and-play", () => {
  for (const brief of briefs.filter((item) => item.dependency === "social")) {
    const quiz = getQuiz(brief.slug) as Quiz;
    assert.ok(quiz.playMode === "pass-and-play" || quiz.kind === "cooperative", `${quiz.id}`);
  }
  assert.ok(QUIZZES.some((quiz) => quiz.categoryId === "friends-social-play" && quiz.playMode === "pass-and-play"));
});

test("the generated catalog describes exactly what the banks contain and leaks no question content", () => {
  assert.equal(SUMMARIES.length, 250);
  assert.deepEqual(PUBLIC_SLUGS, QUIZZES.map((quiz) => quiz.slug));
  for (const quiz of QUIZZES) {
    const summary = SUMMARIES.find((item) => item.id === quiz.id);
    assert.ok(summary, quiz.id);
    assert.deepEqual(Object.keys(summary).sort(), ["categoryId", "description", "formats", "id", "kind", "minutes", "questionCount", "slug", "title"], quiz.id);
    assert.equal(summary.title, quiz.title);
    assert.equal(summary.minutes, quiz.minutes);
    assert.equal(summary.questionCount, quiz.questions.length);
    assert.deepEqual([...summary.formats].sort(), [...new Set(quiz.questions.map((q) => q.kind))].sort(), quiz.id);
  }
  const source = readFileSync("src/lib/interactive/catalog.generated.ts", "utf8");
  for (const leaked of ['"prompt"', '"explanation"', '"correct"', '"options"', '"questions"', '"sources"']) assert.ok(!source.includes(leaked), `catalog contains ${leaked}`);
});

test("quiz banks are never reachable from browser code", () => {
  const files: string[] = [];
  const collect = (dir: string): void => {
    for (const item of readdirSync(dir, { withFileTypes: true })) {
      const file = join(dir, item.name);
      if (item.isDirectory()) collect(file);
      else if (/\.(ts|tsx)$/.test(item.name)) files.push(file);
    }
  };
  collect("src");
  const imports = new Map<string, string[]>();
  const resolveImport = (from: string, specifier: string): string | undefined => {
    const base = specifier.startsWith("@/") ? join("src", specifier.slice(2)) : specifier.startsWith(".") ? relative(process.cwd(), resolve(dirname(from), specifier)) : undefined;
    if (!base) return undefined;
    return [base, `${base}.ts`, `${base}.tsx`, join(base, "index.ts"), join(base, "index.tsx")].find((candidate) => existsSync(candidate) && statSync(candidate).isFile());
  };
  const importsOf = (file: string): string[] => {
    if (!imports.has(file)) {
      const resolved: string[] = [];
      if (/\.(ts|tsx)$/.test(file)) for (const match of readFileSync(file, "utf8").matchAll(/(?:from|import)\s*\(?\s*["']([^"']+)["']/g)) {
        const target = resolveImport(file, match[1]);
        if (target) resolved.push(target);
      }
      imports.set(file, resolved);
    }
    return imports.get(file) as string[];
  };
  const isBank = (file: string): boolean => file === join("src", "lib", "interactive", "registry.ts") || /content[\\/]interactive[\\/][A-Z]{2}\.json$/.test(file);
  const clientFiles = files.filter((file) => /^(?:\s*(?:\/\/[^\n]*|\/\*[\s\S]*?\*\/))*\s*["']use client["']/.test(readFileSync(file, "utf8")));
  assert.ok(clientFiles.some((file) => file.includes(join("components", "interactive"))), "expected interactive client components");
  for (const entry of clientFiles) {
    const seen = new Set<string>([entry]);
    const queue = [entry];
    while (queue.length) {
      const file = queue.pop() as string;
      for (const target of importsOf(file)) {
        assert.ok(!isBank(target), `${entry} reaches a full quiz bank through ${file}`);
        if (!seen.has(target)) { seen.add(target); queue.push(target); }
      }
    }
  }
  for (const page of ["src/app/quizzes/page.tsx", "src/app/quizzes/category/[categoryId]/page.tsx", "src/app/page.tsx", "src/app/trivia/page.tsx"]) {
    assert.ok(!/interactive\/registry/.test(readFileSync(page, "utf8")), `${page} must use the generated summaries, not the banks`);
  }
  assert.ok(importsOf("src/app/quizzes/[slug]/page.tsx").includes(join("src", "lib", "interactive", "registry.ts")));
});

test("existing quiz banks, scoring and routes are byte-for-byte unchanged", () => {
  const baseline = JSON.parse(readFileSync("tests/fixtures/interactive-legacy-baseline.json", "utf8")) as Record<string, string>;
  const paths = Object.keys(baseline);
  assert.ok(paths.length > 100, "baseline looks truncated");
  const changed: string[] = [];
  for (const path of paths) {
    if (!existsSync(path)) changed.push(`${path} (missing)`);
    else if (sha256(path) !== baseline[path]) changed.push(path);
  }
  assert.deepEqual(changed, [], "legacy files differ from the baseline");
});

test("analytics: new routes are measured as a bounded group, with identity-only start and complete events", () => {
  assert.equal(analyticsInteractiveQuizzes.length, 250);
  assert.deepEqual(analyticsInteractiveQuizzes.map((quiz) => quiz.slug), QUIZZES.map((quiz) => quiz.slug));
  assert.ok(analyticsInteractiveQuizzes.every((quiz) => quiz.version === 1));
  for (const path of ["/quizzes/", ...CATEGORIES.map((category) => `/quizzes/category/${category.id}/`), ...QUIZZES.map((quiz) => `/quizzes/${quiz.slug}/`)]) {
    assert.ok(analyticsPaths.includes(path), `manifest omits ${path}`);
    assert.equal(analyticsPageGroup(path), "interactive_quiz", path);
  }
  assert.equal(analyticsPath(`/quizzes/${QUIZZES[0].slug}/?r=SECRET`), "/404/");
  assert.equal(analyticsPath("/quizzes/not-a-quiz/"), "/404/");
  assert.equal(analyticsPageGroup("/tests/"), "personality");

  const [quiz, other] = analyticsInteractiveQuizzes;
  const params = { quiz_id: quiz.id, quiz_version: 1, answers: "SECRET", score: 99, text: "SECRET", axis: "SECRET" };
  for (const event of ["interactive_quiz_start", "interactive_quiz_complete"]) assert.deepEqual(safeEventParameters(event, params), { quiz_id: quiz.id, quiz_version: 1 });
  for (const bad of [{ ...params, quiz_id: "NOPE" }, { ...params, quiz_version: 2 }, { ...params, quiz_version: "1" }, { quiz_version: 1 }, null, [], "x"]) assert.equal(safeEventParameters("interactive_quiz_start", bad), null);
  for (const event of ["quiz_start", "movie_quiz_start", "interactive_quiz_share", "interactive_quiz_progress"]) assert.equal(safeEventParameters(event, params), null, event);

  const calls: unknown[][] = [];
  const controller = createAnalyticsController((...args) => { calls.push(args); });
  const emitted = () => calls.filter((call) => call[0] === "event" && String(call[1]).startsWith("interactive_quiz"));
  controller.event("interactive_quiz_start", params);
  controller.page("/tests/");
  controller.event("interactive_quiz_start", params);
  assert.equal(emitted().length, 0, "events are rejected off the quiz page");
  controller.page(`/quizzes/${other.slug}/`);
  controller.event("interactive_quiz_start", params);
  assert.equal(emitted().length, 0, "another quiz's page cannot report this quiz");
  controller.page(`/quizzes/${quiz.slug}/`);
  controller.event("interactive_quiz_start", params);
  controller.event("interactive_quiz_complete", params);
  assert.equal(emitted().length, 2);
  const sent = emitted()[0][2] as Record<string, unknown>;
  assert.equal(sent.quiz_id, quiz.id);
  assert.equal(sent.quiz_version, 1);
  assert.equal(sent.page_location, `https://typologyquiz.com/quizzes/${quiz.slug}/`);
  assert.equal(sent.content_group, "interactive_quiz");
  assert.ok(!JSON.stringify(calls).includes("SECRET"));
  for (const key of ["answers", "score", "text", "axis"]) assert.ok(!(key in sent), key);
  assert.doesNotThrow(() => trackInteractiveQuizEvent("interactive_quiz_start", quiz.id, 1), "no-ops outside a browser");
});

test("sitemap lists the hub, 10 categories and 250 quizzes once each, with no result or query URLs", () => {
  const urls = sitemap().map((entry) => entry.url);
  const mine = urls.filter((url) => url.startsWith("https://typologyquiz.com/quizzes/"));
  assert.equal(mine.length, 261);
  assert.equal(new Set(urls).size, urls.length, "sitemap has duplicates");
  assert.ok(mine.includes("https://typologyquiz.com/quizzes/"));
  for (const category of CATEGORIES) assert.ok(mine.includes(`https://typologyquiz.com/quizzes/category/${category.id}/`));
  for (const quiz of QUIZZES) assert.ok(mine.includes(`https://typologyquiz.com/quizzes/${quiz.slug}/`));
  for (const url of mine) assert.ok(url.endsWith("/") && !/[?#]/.test(url) && !/\/(results|take)\/$/.test(url), url);
});

test("discovery summary lists the hub, every category and every quiz without private state", () => {
  const summary = readFileSync("public/llms.txt", "utf8");
  assert.ok(summary.includes("](https://typologyquiz.com/quizzes/)"));
  for (const category of CATEGORIES) assert.ok(summary.includes(`](https://typologyquiz.com/quizzes/category/${category.id}/)`), category.id);
  for (const quiz of QUIZZES) assert.equal(summary.split("\n").filter((line) => line.includes(`](https://typologyquiz.com/quizzes/${quiz.slug}/)`)).length, 1, quiz.slug);
  const section = summary.split("## Interactive quizzes\n")[1].split("## Limits worth stating")[0];
  assert.ok(!section.includes("—"), "house rule: no em-dashes");
});
