import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { CATEGORIES } from "../src/lib/interactive/categories.ts";
import type { Quiz, QuizSummary } from "../src/lib/interactive/types.ts";

// The canonical tracked banks (content/interactive/CODE.json) are the source of truth. Normal runs
// and --check read only those banks plus briefs.json and regenerate the question-free summary
// catalog. Author drafts (work/interactive-250/parts/CODE-NN.json) are untracked and are read only
// with the explicit --from-parts import, which merges them into the banks. --check always requires
// the full 250 and a fresh catalog; a normal run tolerates partial banks so progress can be inspected.

const CHECK = process.argv.includes("--check");
const FROM_PARTS = process.argv.includes("--from-parts");
if (CHECK && FROM_PARTS) throw new Error("--check validates the tracked banks only and cannot be combined with --from-parts");

const PARTS_DIR = "work/interactive-250/parts";
const BRIEFS_FILE = "content/interactive/briefs.json";
const BANK_DIR = "content/interactive";
const CATALOG_FILE = "src/lib/interactive/catalog.generated.ts";
const BATCH_SIZE = 5;
const BATCHES_PER_CATEGORY = 5;
const PER_CATEGORY = BATCH_SIZE * BATCHES_PER_CATEGORY;
const MIN_TASKS = 8;
const MAX_TASKS = 8;
const FORMAT_ORDER = ["choice", "rank", "order", "match", "graph", "grid", "slider", "reflection", "audio", "hotspot"];

interface Brief { id: string; slug: string; title: string; category_code: string }
interface Briefs { categories: { code: string; name: string; count: number }[]; quizzes: Brief[] }

const hard: string[] = [];
const soft: string[] = [];
const isRecord = (value: unknown): value is Record<string, unknown> => typeof value === "object" && value !== null && !Array.isArray(value);
const isText = (value: unknown): value is string => typeof value === "string" && value.trim().length > 0;

// The brief file is the source of truth for IDs and slugs, so it must itself be intact.
const briefs = JSON.parse(readFileSync(BRIEFS_FILE, "utf8")) as Briefs;
if (briefs.quizzes.length !== CATEGORIES.length * PER_CATEGORY) throw new Error(`briefs.json lists ${briefs.quizzes.length} quizzes, expected ${CATEGORIES.length * PER_CATEGORY}`);
for (const category of CATEGORIES) {
  const entry = briefs.categories.find(item => item.code === category.code);
  if (!entry || entry.name !== category.name || entry.count !== PER_CATEGORY) throw new Error(`categories.ts disagrees with briefs.json for ${category.code}`);
  if (briefs.quizzes.filter(brief => brief.category_code === category.code).length !== PER_CATEGORY) throw new Error(`briefs.json does not list ${PER_CATEGORY} quizzes for ${category.code}`);
}
const briefOrder = new Map(briefs.quizzes.map((brief, index) => [brief.id, index] as const));
if (briefOrder.size !== briefs.quizzes.length || new Set(briefs.quizzes.map(brief => brief.slug)).size !== briefs.quizzes.length) throw new Error("briefs.json has duplicate IDs or slugs");

const byId = new Map<string, Quiz>();
const slugOwner = new Map<string, string>();

/** Registers one quiz after checking it against its brief; `where` names the source in messages. */
function accept(raw: unknown, where: string, code: string, expected: Brief[]): void {
  const category = CATEGORIES.find(item => item.code === code);
  if (!category || !isRecord(raw) || !isText(raw.id) || !isText(raw.slug)) { hard.push(`${where}: quiz needs string id and slug`); return; }
  const label = `${where}:${raw.id}`;
  const brief = expected.find(item => item.id === raw.id);
  if (!brief) hard.push(`${label}: id is not expected here by briefs.json`);
  else if (brief.slug !== raw.slug) hard.push(`${label}: slug "${raw.slug}" differs from brief slug "${brief.slug}"`);
  if (raw.categoryId !== category.id) hard.push(`${label}: categoryId must be "${category.id}"`);
  if (!isText(raw.title) || !isText(raw.description) || !isText(raw.kind) || typeof raw.minutes !== "number" || !Array.isArray(raw.questions)) hard.push(`${label}: missing title, description, kind, minutes or questions`);
  else if (raw.questions.length < MIN_TASKS || raw.questions.length > MAX_TASKS) hard.push(`${label}: has ${raw.questions.length} tasks, expected ${MIN_TASKS === MAX_TASKS ? MIN_TASKS : `${MIN_TASKS}-${MAX_TASKS}`}`);
  if (byId.has(raw.id)) hard.push(`${label}: duplicate quiz id`);
  if (slugOwner.has(raw.slug)) hard.push(`${label}: slug "${raw.slug}" already used by ${slugOwner.get(raw.slug)}`);
  byId.set(raw.id, raw as unknown as Quiz);
  slugOwner.set(raw.slug, raw.id);
}

const briefsFor = (code: string): Brief[] => briefs.quizzes.filter(brief => brief.category_code === code);

// Canonical banks. With --from-parts, drafts replace matching quizzes before registration.
const drafts = new Map<string, unknown>();
if (FROM_PARTS) {
  const partFiles = existsSync(PARTS_DIR) ? readdirSync(PARTS_DIR).filter(name => /^[A-Z]{2}-\d{2}\.json$/.test(name)).sort() : [];
  if (!partFiles.length) soft.push(`no batch files found in ${PARTS_DIR}`);
  for (const file of partFiles) {
    const code = file.slice(0, 2);
    const number = Number(file.slice(3, 5));
    if (!CATEGORIES.some(item => item.code === code) || number < 1 || number > BATCHES_PER_CATEGORY) { hard.push(`${file}: not a recognised batch (expected category code and 01-0${BATCHES_PER_CATEGORY})`); continue; }
    let parsed: unknown;
    try { parsed = JSON.parse(readFileSync(join(PARTS_DIR, file), "utf8")); }
    catch (error) { soft.push(`${file}: unreadable JSON (${error instanceof Error ? error.message : "unknown"})`); continue; }
    if (!Array.isArray(parsed) || parsed.length !== BATCH_SIZE) { hard.push(`${file}: must be an array of exactly ${BATCH_SIZE} quizzes`); continue; }
    const expected = briefsFor(code).slice((number - 1) * BATCH_SIZE, number * BATCH_SIZE);
    for (const brief of expected) if (!parsed.some(item => isRecord(item) && item.id === brief.id)) hard.push(`${file}: missing brief ${brief.id}`);
    parsed.forEach((raw: unknown, index) => {
      if (isRecord(raw) && isText(raw.id)) {
        if (!expected.some(brief => brief.id === raw.id)) hard.push(`${file}:${raw.id}: id is not in this batch of briefs.json`);
        drafts.set(raw.id, raw);
      } else hard.push(`${file}[${index}]: quiz needs string id and slug`);
    });
  }
}

for (const category of CATEGORIES) {
  const bankFile = join(BANK_DIR, `${category.code}.json`);
  let bank: unknown[] = [];
  if (existsSync(bankFile)) {
    try {
      const parsed: unknown = JSON.parse(readFileSync(bankFile, "utf8"));
      if (Array.isArray(parsed)) bank = parsed; else hard.push(`${bankFile}: must be an array of quizzes`);
    } catch (error) { hard.push(`${bankFile}: unreadable JSON (${error instanceof Error ? error.message : "unknown"})`); }
  } else soft.push(`${bankFile} is missing`);
  const expected = briefsFor(category.code);
  // Draft replaces the banked copy of the same quiz; everything else is kept as banked.
  const merged = bank.map(raw => (isRecord(raw) && isText(raw.id) && drafts.has(raw.id) ? drafts.get(raw.id) : raw));
  for (const [id, raw] of drafts) if (expected.some(brief => brief.id === id) && !bank.some(item => isRecord(item) && item.id === id)) merged.push(raw);
  merged.forEach((raw, index) => accept(raw, isRecord(raw) && isText(raw.id) ? bankFile : `${bankFile}[${index}]`, category.code, expected));
}

const ordered = [...byId.values()].sort((a, b) => (briefOrder.get(a.id) ?? 0) - (briefOrder.get(b.id) ?? 0));
const banks = CATEGORIES.map(category => ({ category, quizzes: ordered.filter(quiz => quiz.categoryId === category.id) }));

if (CHECK) {
  if (ordered.length !== CATEGORIES.length * PER_CATEGORY) hard.push(`expected ${CATEGORIES.length * PER_CATEGORY} quizzes, found ${ordered.length}`);
  for (const { category, quizzes } of banks) {
    if (quizzes.length !== PER_CATEGORY) hard.push(`${category.code} has ${quizzes.length} quizzes, expected ${PER_CATEGORY}`);
    for (const brief of briefsFor(category.code)) if (!byId.has(brief.id)) hard.push(`${category.code}: missing brief ${brief.id}`);
  }
}
if (hard.length || (CHECK && soft.length)) {
  throw new Error(`Interactive assembly failed:\n${[...hard, ...(CHECK ? soft : [])].map(line => `- ${line}`).join("\n")}`);
}

/** Summaries describe what was actually authored, never what the brief promised. */
export function summarize(quiz: Quiz): QuizSummary {
  const used = new Set(quiz.questions.map(question => question.kind));
  return {
    id: quiz.id, slug: quiz.slug, categoryId: quiz.categoryId, title: quiz.title, description: quiz.description,
    kind: quiz.kind, minutes: quiz.minutes, questionCount: quiz.questions.length,
    formats: FORMAT_ORDER.filter(format => used.has(format as never)),
  };
}

const summaries = ordered.map(summarize);
// Question-free identities taken from the actual ordered canonical quizzes, so analytics follows real bank versions.
const identities = ordered.map(({ id, slug, version }) => ({ id, slug, version }));
const catalog = `// Generated by scripts/interactive-assemble.mts. Summaries and public slugs only: no question banks.\nimport type { QuizSummary } from "./types";\n\nexport const SUMMARIES: QuizSummary[] = ${JSON.stringify(summaries, null, 2)};\n\nexport const PUBLIC_SLUGS: readonly string[] = ${JSON.stringify(summaries.map(summary => summary.slug))};\n\nexport const QUIZ_IDENTITIES: readonly { id: string; slug: string; version: number }[] = ${JSON.stringify(identities, null, 2)};\n`;
const bankOutputs = banks.map(({ category, quizzes }) => ({ file: join(BANK_DIR, `${category.code}.json`), text: `${JSON.stringify(quizzes, null, 2)}\n` }));

if (CHECK) {
  if (!existsSync(CATALOG_FILE) || readFileSync(CATALOG_FILE, "utf8") !== catalog) throw new Error(`Interactive catalog is stale; run npm run assemble:interactive. Differs: ${CATALOG_FILE}`);
} else {
  writeFileSync(CATALOG_FILE, catalog);
  // Banks are rewritten only when importing drafts; a normal run never touches them.
  if (FROM_PARTS) for (const output of bankOutputs) if (output.text !== "[]\n") writeFileSync(output.file, output.text);
}

const progress = banks.map(({ category, quizzes }) => `${category.code} ${quizzes.length}/${PER_CATEGORY}`).join(", ");
console.log(`Interactive quizzes ${CHECK ? "checked" : FROM_PARTS ? "imported from parts and assembled" : "assembled"}: ${ordered.length}/${CATEGORIES.length * PER_CATEGORY} (${progress})`);
for (const line of soft) console.warn(`  incomplete: ${line}`);
