import { readFileSync } from "node:fs";
import { CATEGORIES } from "../src/lib/interactive/categories.ts";
import { SUMMARIES } from "../src/lib/interactive/catalog.generated.ts";
import { parseManifest, type ManifestBrief } from "../src/lib/interactive/manifest.ts";
import { QUIZZES } from "../src/lib/interactive/registry.ts";
import { validateCollection } from "../src/lib/interactive/validate.ts";
import type { Question, Quiz, QuizSummary } from "../src/lib/interactive/types.ts";

// Structural and contract validation of the whole interactive collection. This proves shape,
// counts and per-format contracts. It does NOT verify facts: factual review is a separate gate.

const EXPECTED_TASKS = 8;
const FORMAT_ORDER = ["choice", "rank", "order", "match", "graph", "grid", "slider", "reflection", "audio", "hotspot"];

/** Quizzes allowed to use one task format, with the reason. Reported on every run, never silent. */
const SINGLE_FORMAT_EXCEPTIONS: Record<string, string> = {};

interface Brief extends ManifestBrief { title: string; dependency: string }
// The manifest declares the collection size; it is validated before any field is trusted.
const manifest = parseManifest<Brief>(JSON.parse(readFileSync("content/interactive/briefs.json", "utf8")), CATEGORIES);
const briefs = manifest.quizzes;
const expectedCount = (code: string): number => manifest.categories.find(item => item.code === code)?.count ?? 0;

const errors: string[] = [];
const fail = (id: string, message: string): void => void errors.push(`${id}: ${message}`);

const isKeyed = (q: Question): boolean => {
  switch (q.kind) {
    case "choice": case "audio": case "hotspot": return typeof q.correct === "string";
    case "order": return Array.isArray(q.correctOrder) || (Array.isArray(q.precedence) && q.precedence.length > 0);
    case "match": return q.pairs !== undefined;
    case "graph": case "grid": return true;
    default: return false;
  }
};
const isWeighted = (q: Question): boolean => {
  switch (q.kind) {
    case "choice": case "audio": case "hotspot": return q.options.some(option => option.weights !== undefined);
    case "rank": return q.items.some(item => item.weights !== undefined);
    case "match": return q.weights !== undefined;
    case "slider": return true;
    default: return false;
  }
};

/** Contracts the brief's primary dependency promises about task composition. */
function contract(quiz: Quiz, dependency: string): string[] {
  const problems: string[] = [];
  const count = (kind: Question["kind"]): number => quiz.questions.filter(q => q.kind === kind).length;
  const need = (ok: boolean, message: string): void => { if (!ok) problems.push(message); };
  switch (dependency) {
    case "layers": {
      const matches = quiz.questions.filter((q): q is Extract<Question, { kind: "match" }> => q.kind === "match");
      need(matches.length >= 2, "layers needs at least 2 match tasks");
      need(matches.some(q => q.pairs
        ? new Set(Object.values(q.pairs)).size < Object.keys(q.pairs).length
        : q.weights !== undefined && q.left.length >= 2 && q.right.length >= 1), "layers needs a match task where several left items can share a target");
      break;
    }
    case "graph": need(count("graph") >= 2, "needs at least 2 graph tasks"); break;
    case "grid": need(count("grid") >= 2, "needs at least 2 grid tasks"); break;
    case "sequence": need(quiz.questions.filter(q => q.kind === "order" && (q.precedence?.length ?? 0) > 0).length >= 2, "needs at least 2 order tasks with precedence constraints"); break;
    case "visual": need(count("hotspot") >= 2, "needs at least 2 hotspot tasks"); break;
    case "audio": need(count("audio") >= 2, "needs at least 2 audio tasks"); break;
    case "preference": {
      const kinds = new Set(quiz.questions.filter(isWeighted).map(q => q.kind));
      need(kinds.size >= 2, "preference needs weighted tasks in at least 2 formats");
      break;
    }
    case "branch": {
      const gated = quiz.questions.filter(q => q.showIf);
      need(gated.length >= 2, "branch needs at least 2 conditional tasks");
      need(new Set(gated.map(q => `${q.showIf!.questionId}:${q.showIf!.optionId}`)).size >= 2, "branch needs at least 2 distinct branch options");
      need(quiz.questions.length - gated.length >= 4, "branch needs at least 4 unconditional tasks");
      break;
    }
    case "ai": need(count("reflection") >= 2, "guided-reflection quizzes need at least 2 reflection tasks"); need(Boolean(quiz.note), "guided-reflection quizzes need a disclosure note"); break;
    case "survey": need(Boolean(quiz.note), "survey adaptations need a note saying the data are invented or the choices are the player's own"); break;
    case "social": need(quiz.playMode === "pass-and-play" || quiz.kind === "cooperative", "social quizzes must be pass-and-play or cooperative"); break;
    case "base": break;
    default: problems.push(`unknown brief dependency "${dependency}"`);
  }
  const keyed = quiz.questions.filter(isKeyed).length;
  const weighted = quiz.questions.filter(isWeighted).length;
  if (quiz.kind === "knowledge" || quiz.kind === "logic") need(weighted === 0 && keyed >= 3, "knowledge and logic quizzes must be keyed only (no preference weights) with at least 3 keyed tasks");
  if (quiz.kind === "hybrid") need(keyed >= 3 && weighted >= 3, "hybrid quizzes need at least 3 keyed and 3 weighted tasks");
  if (quiz.kind === "cooperative") need(keyed >= 3, "cooperative quizzes need at least 3 keyed tasks");
  if (quiz.kind === "preference") need(weighted >= 3, "preference quizzes need at least 3 weighted tasks");
  return problems;
}

function summarize(quiz: Quiz): QuizSummary {
  const used = new Set<string>(quiz.questions.map(q => q.kind));
  return { id: quiz.id, slug: quiz.slug, categoryId: quiz.categoryId, title: quiz.title, description: quiz.description, kind: quiz.kind, minutes: quiz.minutes, questionCount: quiz.questions.length, formats: FORMAT_ORDER.filter(format => used.has(format)) };
}

// 1. Schema and collection rules from validate.ts.
// Later checks assume well-formed quizzes, so schema failures are reported on their own first.
const schemaProblems = validateCollection(QUIZZES);
if (schemaProblems.length) {
  for (const message of schemaProblems.slice(0, 200)) console.error(`  ✗ ${message}`);
  throw new Error(`Interactive schema validation failed with ${schemaProblems.length} problem${schemaProblems.length === 1 ? "" : "s"}${schemaProblems.length > 200 ? " (first 200 shown)" : ""}`);
}

// 2. Exact identity against the approved briefs.
if (QUIZZES.length !== briefs.length) errors.push(`collection: ${QUIZZES.length} quizzes, manifest declares ${briefs.length}`);
const bySlug = new Map(QUIZZES.map(quiz => [quiz.id, quiz.slug] as const));
for (const brief of briefs) {
  if (!bySlug.has(brief.id)) fail(brief.id, "missing from collection");
  else if (bySlug.get(brief.id) !== brief.slug) fail(brief.id, `slug "${bySlug.get(brief.id)}" differs from brief slug "${brief.slug}"`);
}
const briefIds = new Set(briefs.map(brief => brief.id));
for (const quiz of QUIZZES) if (!briefIds.has(quiz.id)) fail(quiz.id, "not in briefs.json");
if (QUIZZES.some(quiz => quiz.slug === "category")) errors.push("collection: slug \"category\" collides with the category route");

// 3. Per-category counts and identity.
const perCategory = new Map<string, number>();
for (const category of CATEGORIES) {
  const members = QUIZZES.filter(quiz => quiz.categoryId === category.id);
  perCategory.set(category.id, members.length);
  if (members.length !== expectedCount(category.code)) errors.push(`category ${category.id}: ${members.length} quizzes, manifest declares ${expectedCount(category.code)}`);
}
for (const quiz of QUIZZES) if (!CATEGORIES.some(category => category.id === quiz.categoryId)) fail(quiz.id, `unknown categoryId "${quiz.categoryId}"`);

// 4. Per-quiz composition and contracts.
const promptOwner = new Map<string, string>();
const exceptionsUsed: string[] = [];
let totalTasks = 0;
const formatTotals = new Map<string, number>();
const kindTotals = new Map<string, number>();
for (const quiz of QUIZZES) {
  const brief = briefs.find(item => item.id === quiz.id);
  const category = CATEGORIES.find(item => item.id === quiz.categoryId);
  if (brief && category && brief.category_code !== category.code) fail(quiz.id, `category ${quiz.categoryId} does not match brief category ${brief.category_code}`);
  totalTasks += quiz.questions.length;
  kindTotals.set(quiz.kind, (kindTotals.get(quiz.kind) ?? 0) + 1);
  if (quiz.questions.length !== EXPECTED_TASKS) fail(quiz.id, `${quiz.questions.length} tasks, expected ${EXPECTED_TASKS}`);
  if (quiz.sections.length < 2) fail(quiz.id, "needs at least 2 sections");
  const formats = new Set(quiz.questions.map(q => q.kind));
  for (const format of formats) formatTotals.set(format, (formatTotals.get(format) ?? 0) + 1);
  const exception = SINGLE_FORMAT_EXCEPTIONS[quiz.id];
  if (formats.size < 2) {
    if (exception) exceptionsUsed.push(`${quiz.id}: ${exception}`);
    else fail(quiz.id, "needs at least 2 task formats");
  } else if (exception) fail(quiz.id, "has a single-format exception but uses several formats; remove the exception");
  const sourceIds = new Set(quiz.sources.map(source => source.id));
  for (const q of quiz.questions) {
    for (const ref of q.sourceIds) if (!sourceIds.has(ref)) fail(quiz.id, `${q.id} cites unknown source "${ref}"`);
    const key = q.prompt.toLowerCase().replace(/\s+/g, " ").trim();
    const owner = promptOwner.get(key);
    if (owner) fail(quiz.id, `${q.id} repeats a prompt already used by ${owner}`);
    else promptOwner.set(key, `${quiz.id}/${q.id}`);
  }
  if (brief) for (const problem of contract(quiz, brief.dependency)) fail(quiz.id, problem);
}

// 5. Generated summaries must describe exactly the banks that ship.
const summaryIds = SUMMARIES.map(summary => summary.id);
if (summaryIds.length !== QUIZZES.length) errors.push(`catalog: ${summaryIds.length} summaries for ${QUIZZES.length} quizzes; run npm run assemble:interactive`);
for (const quiz of QUIZZES) {
  const summary = SUMMARIES.find(item => item.id === quiz.id);
  if (!summary) fail(quiz.id, "no generated summary; run npm run assemble:interactive");
  else if (JSON.stringify(summary) !== JSON.stringify(summarize(quiz))) fail(quiz.id, "generated summary is stale; run npm run assemble:interactive");
}

console.log(`Interactive collection: ${QUIZZES.length} quizzes, ${totalTasks} tasks, ${QUIZZES.reduce((n, quiz) => n + quiz.sources.length, 0)} sources`);
console.log(`Categories: ${CATEGORIES.map(category => `${category.code} ${perCategory.get(category.id) ?? 0}`).join(", ")}`);
console.log(`Kinds: ${[...kindTotals].map(([kind, n]) => `${kind} ${n}`).join(", ")}`);
console.log(`Formats (quizzes using each): ${FORMAT_ORDER.filter(format => formatTotals.has(format)).map(format => `${format} ${formatTotals.get(format)}`).join(", ")}`);
console.log(`Single-format exceptions: ${exceptionsUsed.length ? `\n  ${exceptionsUsed.join("\n  ")}` : "none"}`);

if (errors.length) {
  for (const message of errors.slice(0, 200)) console.error(`  ✗ ${message}`);
  throw new Error(`Interactive validation failed with ${errors.length} problem${errors.length === 1 ? "" : "s"}${errors.length > 200 ? " (first 200 shown)" : ""}`);
}
console.log("Interactive validation passed");
