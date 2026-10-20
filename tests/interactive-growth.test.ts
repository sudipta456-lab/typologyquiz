import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { cpSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { after, test } from "node:test";
import { pathToFileURL } from "node:url";
import { CATEGORIES } from "../src/lib/interactive/categories.ts";
import { manifestErrors, parseManifest } from "../src/lib/interactive/manifest.ts";

// Growth regression tests. Every scenario runs the real assemble/validate scripts against a temporary
// copy of the repository's interactive files, so the canonical banks, briefs and catalog are never
// touched and the synthetic quizzes can never be published. The original 250 were a one-time batch.

const ROOT = resolve(".");
const TSX = join(ROOT, "node_modules", ".bin", "tsx");
const INITIAL_IDS = new Set((JSON.parse(readFileSync(join(ROOT, "tests/fixtures/interactive-initial-identities.json"), "utf8")) as { id: string }[]).map((entry) => entry.id));
const temps: string[] = [];
after(() => { for (const dir of temps) rmSync(dir, { recursive: true, force: true }); });

type Rec = Record<string, unknown>;
interface Brief extends Rec { id: string; slug: string; title: string; category_code: string }
interface Manifest extends Rec { categories: { code: string; name: string; count: number }[]; quizzes: Brief[] }

/** A temporary checkout of just the files the interactive scripts read. */
function makeFixture(): string {
  const dir = mkdtempSync(join(tmpdir(), "interactive-growth-"));
  temps.push(dir);
  mkdirSync(join(dir, "scripts"));
  for (const script of ["interactive-assemble.mts", "interactive-validate.mts"]) cpSync(join(ROOT, "scripts", script), join(dir, "scripts", script));
  mkdirSync(join(dir, "src", "lib"), { recursive: true });
  cpSync(join(ROOT, "src", "lib", "interactive"), join(dir, "src", "lib", "interactive"), { recursive: true });
  cpSync(join(ROOT, "content", "interactive"), join(dir, "content", "interactive"), { recursive: true });
  for (const file of ["package.json", "tsconfig.json"]) cpSync(join(ROOT, file), join(dir, file));
  symlinkSync(join(ROOT, "node_modules"), join(dir, "node_modules"));
  // These scenarios intentionally start from the historical launch batch, even after the real
  // collection grows. Live-corpus tests separately compare every current bank to its manifest.
  writeJson(dir, "content/interactive/briefs.json", launchManifest(readJson<Manifest>(dir, "content/interactive/briefs.json")));
  for (const category of CATEGORIES) writeJson(dir, bankPath(category.code), readJson<Rec[]>(dir, bankPath(category.code)).filter((quiz) => INITIAL_IDS.has(quiz.id as string)));
  const assembled = run(dir, "assemble");
  assert.ok(assembled.ok, assembled.out);
  return dir;
}

const readJson = <T>(dir: string, path: string): T => JSON.parse(readFileSync(join(dir, path), "utf8")) as T;
const writeJson = (dir: string, path: string, value: unknown): void => void writeFileSync(join(dir, path), `${JSON.stringify(value, null, 2)}\n`);
const bankPath = (code: string): string => `content/interactive/${code}.json`;

function launchManifest(manifest: Manifest): Manifest {
  const quizzes = manifest.quizzes.filter((brief) => INITIAL_IDS.has(brief.id));
  return { ...manifest, quizzes, categories: manifest.categories.map((category) => ({ ...category, count: quizzes.filter((brief) => brief.category_code === category.code).length })) };
}

function run(dir: string, script: "assemble" | "validate", ...args: string[]): { ok: boolean; out: string } {
  const result = spawnSync(TSX, [join(dir, "scripts", `interactive-${script}.mts`), ...args], { cwd: dir, encoding: "utf8", timeout: 240000 });
  return { ok: result.status === 0, out: `${result.stdout}${result.stderr}` };
}

/** Clones the first quiz of a category as brand-new, distinct quiz number `number`. Returns the quiz and its brief. */
function cloneQuiz(dir: string, code: string, number: number): { quiz: Rec; brief: Brief } {
  const id = `${code}-${String(number).padStart(2, "0")}`;
  const manifest = readJson<Manifest>(dir, "content/interactive/briefs.json");
  const baseBrief = manifest.quizzes.find((brief) => brief.category_code === code) as Brief;
  const base = readJson<Rec[]>(dir, bankPath(code)).find((quiz) => quiz.id === baseBrief.id) as Rec;
  const quiz = JSON.parse(JSON.stringify(base)) as Rec & { questions: Rec[] };
  Object.assign(quiz, { id, slug: `growth-probe-${id.toLowerCase()}`, title: `Growth probe ${id}`, description: `${String(base.description)} Synthetic growth fixture ${id}.` });
  for (const question of quiz.questions) question.prompt = `${String(question.prompt)} (growth fixture ${id})`;
  return { quiz, brief: { ...baseBrief, id, slug: quiz.slug as string, title: quiz.title as string } };
}

/** Appends `extra` clones to each category's manifest. Banks are written only when `inBank` is true. */
function grow(dir: string, extra: Record<string, number>, inBank = true): void {
  const manifest = readJson<Manifest>(dir, "content/interactive/briefs.json");
  for (const [code, added] of Object.entries(extra)) {
    const entry = manifest.categories.find((item) => item.code === code) as { count: number };
    const bank = readJson<Rec[]>(dir, bankPath(code));
    for (let step = 0; step < added; step += 1) {
      const { quiz, brief } = cloneQuiz(dir, code, entry.count + 1);
      manifest.quizzes.push(brief);
      entry.count += 1;
      if (inBank) bank.push(quiz);
    }
    writeJson(dir, bankPath(code), bank);
    writeJson(dir, "content/interactive/briefs.json", manifest);
  }
}

const mutateManifest = (dir: string, change: (manifest: Manifest) => void): void => {
  const manifest = readJson<Manifest>(dir, "content/interactive/briefs.json");
  change(manifest);
  writeJson(dir, "content/interactive/briefs.json", manifest);
};

const hash = (dir: string, path: string): string => createHash("sha256").update(readFileSync(join(dir, path))).digest("hex");
/** Fingerprint of everything the scripts could write: the banks, the briefs and the generated catalog. */
function snapshot(dir: string): string {
  const files = [...readdirSync(join(dir, "content", "interactive")).sort().map((name) => `content/interactive/${name}`), "src/lib/interactive/catalog.generated.ts"];
  return files.map((file) => `${file}:${hash(dir, file)}`).join("\n");
}

async function catalogOf(dir: string): Promise<{ summaries: number; slugs: number; identities: number }> {
  const loaded = await import(`${pathToFileURL(join(dir, "src/lib/interactive/catalog.generated.ts")).href}?t=${Date.now()}${Math.random()}`) as { SUMMARIES: unknown[]; PUBLIC_SLUGS: string[]; QUIZ_IDENTITIES: unknown[] };
  const bankSlugs = CATEGORIES.flatMap((category) => readJson<Rec[]>(dir, bankPath(category.code)).map((quiz) => quiz.slug));
  assert.deepEqual(loaded.PUBLIC_SLUGS, bankSlugs, "catalog order must match the canonical banks used by the registry");
  return { summaries: loaded.SUMMARIES.length, slugs: loaded.PUBLIC_SLUGS.length, identities: loaded.QUIZ_IDENTITIES.length };
}

function batchFile(dir: string, name: string, content: unknown): void {
  mkdirSync(join(dir, "work", "interactive-250", "parts"), { recursive: true });
  writeFileSync(join(dir, "work", "interactive-250", "parts", name), typeof content === "string" ? content : JSON.stringify(content));
}

test("the existing 250 still assemble, check and validate from a temporary copy", () => {
  const dir = makeFixture();
  const before = snapshot(dir);
  const check = run(dir, "assemble", "--check");
  assert.ok(check.ok, check.out);
  assert.match(check.out, /checked: 250\/250 \(PC 25\/25, FS 25\/25/);
  const validated = run(dir, "validate");
  assert.ok(validated.ok, validated.out);
  assert.match(validated.out, /Interactive collection: 250 quizzes, 2000 tasks/);
  assert.equal(snapshot(dir), before, "check and validate write nothing");
});

test("a 26th quiz in one category assembles to 251 with a fresh catalog", async () => {
  const dir = makeFixture();
  grow(dir, { PC: 1 });
  assert.match(run(dir, "assemble", "--check").out, /catalog is stale/, "the old catalog cannot describe 251 quizzes");
  const assembled = run(dir, "assemble");
  assert.ok(assembled.ok, assembled.out);
  assert.match(assembled.out, /assembled: 251\/251 \(PC 26\/26, FS 25\/25/);
  const check = run(dir, "assemble", "--check");
  assert.ok(check.ok, check.out);
  assert.deepEqual(await catalogOf(dir), { summaries: 251, slugs: 251, identities: 251 });
  assert.match(readFileSync(join(dir, "src/lib/interactive/catalog.generated.ts"), "utf8"), /"growth-probe-pc-26"/);
});

test("unequal growth (26 + 27 = 253) passes assemble, --check and the complete validator", async () => {
  const dir = makeFixture();
  grow(dir, { PC: 1, FS: 2 });
  const assembled = run(dir, "assemble");
  assert.ok(assembled.ok, assembled.out);
  assert.match(assembled.out, /253\/253 \(PC 26\/26, FS 27\/27, MT 25\/25/);
  assert.ok(run(dir, "assemble", "--check").ok);
  const validated = run(dir, "validate");
  assert.ok(validated.ok, validated.out);
  assert.match(validated.out, /Interactive collection: 253 quizzes, 2024 tasks/);
  assert.match(validated.out, /Categories: PC 26, FS 27, MT 25/);
  assert.deepEqual(await catalogOf(dir), { summaries: 253, slugs: 253, identities: 253 });
});

test("a stale catalog is rejected by --check and by the validator", () => {
  const dir = makeFixture();
  grow(dir, { PC: 1 });
  const check = run(dir, "assemble", "--check");
  assert.ok(!check.ok);
  assert.match(check.out, /catalog is stale/);
  const validated = run(dir, "validate");
  assert.ok(!validated.ok);
  assert.match(validated.out, /251 quizzes/);
  assert.match(validated.out, /summaries for 251 quizzes|no generated summary/);
});

test("a declared quiz missing from its bank is never dropped quietly", () => {
  const dir = makeFixture();
  grow(dir, { PC: 1 });
  assert.ok(run(dir, "assemble").ok);
  const bank = readJson<Rec[]>(dir, bankPath("PC"));
  writeJson(dir, bankPath("PC"), bank.filter((quiz) => quiz.id !== "PC-26"));
  const check = run(dir, "assemble", "--check");
  assert.ok(!check.ok);
  assert.match(check.out, /PC has 25 quizzes, expected 26/);
  assert.match(check.out, /missing brief PC-26/);
});

test("duplicate IDs and slugs, undeclared quizzes and wrong categories are rejected", () => {
  const dir = makeFixture();
  grow(dir, { PC: 1 });
  const bank = readJson<Rec[]>(dir, bankPath("PC"));
  const { quiz } = cloneQuiz(dir, "PC", 26);
  writeJson(dir, bankPath("PC"), [...bank, quiz]);
  assert.match(run(dir, "assemble", "--check").out, /PC-26: duplicate quiz id/);

  writeJson(dir, bankPath("PC"), [...bank, { ...quiz, id: "PC-27", slug: "growth-probe-pc-27" }]);
  assert.match(run(dir, "assemble", "--check").out, /PC-27: id is not expected here by briefs\.json/);

  writeJson(dir, bankPath("PC"), [...bank.slice(0, -1), { ...(bank.at(-1) as Rec), slug: (bank[0] as Rec).slug }]);
  const dupSlug = run(dir, "assemble", "--check");
  assert.ok(!dupSlug.ok);
  assert.match(dupSlug.out, /already used by PC-01|differs from brief slug/);

  writeJson(dir, bankPath("PC"), [...bank.slice(0, -1), { ...(bank.at(-1) as Rec), categoryId: "music" }]);
  assert.match(run(dir, "assemble", "--check").out, /categoryId must be "personality-choices"/);
});

test("manifest problems stop assembly and validation before any bank is read", () => {
  const cases: [string, (manifest: Manifest) => void, RegExp][] = [
    ["unknown category", (manifest) => { manifest.categories.push({ code: "ZZ", name: "Surprise", count: 0 }); }, /unknown category code "ZZ"/],
    ["inconsistent count", (manifest) => { manifest.categories[0].count = 26; }, /category PC: count 26 but 25 briefs listed/],
    ["duplicate slug in briefs", (manifest) => { manifest.quizzes[1].slug = manifest.quizzes[0].slug; }, /duplicate slug/],
    ["unknown brief category", (manifest) => { manifest.quizzes[0].category_code = "ZZ"; }, /unknown category_code "ZZ"/],
  ];
  for (const [name, change, expected] of cases) {
    const dir = makeFixture();
    mutateManifest(dir, change);
    for (const result of [run(dir, "assemble", "--check"), run(dir, "assemble"), run(dir, "validate")]) {
      assert.ok(!result.ok, name);
      assert.match(result.out, expected, name);
    }
  }
});

test("--from-parts imports a one-quiz final batch and never touches the canonical root", async () => {
  const rootBefore = snapshot(ROOT);
  const dir = makeFixture();
  grow(dir, { PC: 1 }, false);
  const { quiz } = cloneQuiz(dir, "PC", 26);
  // 26 PC briefs means batches 01-05 hold five each and batch 06 holds exactly one.
  batchFile(dir, "PC-06.json", [quiz]);

  const plain = run(dir, "assemble");
  assert.ok(plain.ok, plain.out);
  assert.match(plain.out, /assembled: 250\/251 \(PC 25\/26/, "a normal run ignores drafts and tolerates partial banks");
  assert.equal(readJson<Rec[]>(dir, bankPath("PC")).length, 25);
  assert.ok(!run(dir, "assemble", "--check").ok, "--check requires the declared 251");

  const imported = run(dir, "assemble", "--from-parts");
  assert.ok(imported.ok, imported.out);
  assert.match(imported.out, /imported from parts and assembled: 251\/251 \(PC 26\/26/);
  assert.equal(readJson<Rec[]>(dir, bankPath("PC")).length, 26);
  assert.ok(run(dir, "assemble", "--check").ok);
  assert.deepEqual(await catalogOf(dir), { summaries: 251, slugs: 251, identities: 251 });
  assert.equal(snapshot(ROOT), rootBefore, "the canonical banks, briefs and catalog are byte-identical");
});

test("--from-parts rejects bad batch files and writes nothing", () => {
  const dir = makeFixture();
  grow(dir, { PC: 1 }, false);
  assert.ok(run(dir, "assemble").ok);
  const { quiz } = cloneQuiz(dir, "PC", 26);
  const first = readJson<Rec[]>(dir, bankPath("PC"))[0];
  const before = snapshot(dir);
  const cases: [string, Record<string, unknown>, RegExp][] = [
    ["unreadable draft JSON", { "PC-06.json": "{invalid-json" }, /PC-06\.json: unreadable JSON/],
    ["out-of-range batch", { "PC-07.json": [quiz] }, /PC-07\.json: batch 7 is out of range/],
    ["zero batch", { "PC-00.json": [quiz] }, /batch number must be a positive safe integer/],
    ["unsafe batch number", { "PC-99999999999999999999.json": [quiz] }, /positive safe integer/],
    ["unknown category", { "ZZ-01.json": [quiz] }, /unknown category code "ZZ"/],
    ["alias duplicate of 6 and 06", { "PC-06.json": [quiz], "PC-6.json": [quiz] }, /PC-6\.json: duplicate of PC-06\.json/],
    ["extra ids in the final batch", { "PC-06.json": [quiz, { ...quiz, id: "PC-27", slug: "growth-probe-pc-27" }] }, /must be an array of exactly 1 quizzes/],
    ["wrong id for the slice", { "PC-06.json": [{ ...quiz, id: "PC-27" }] }, /id is not in this batch of briefs\.json|missing brief PC-26/],
    ["id from another batch", { "PC-06.json": [first] }, /missing brief PC-26/],
    ["not an array", { "PC-06.json": { id: "PC-26" } }, /must be an array of exactly 1 quizzes/],
    ["full batch where a partial is expected", { "PC-06.json": Array.from({ length: 5 }, () => quiz) }, /must be an array of exactly 1 quizzes/],
  ];
  for (const [name, files, expected] of cases) {
    rmSync(join(dir, "work"), { recursive: true, force: true });
    for (const [file, content] of Object.entries(files)) batchFile(dir, file, content);
    const result = run(dir, "assemble", "--from-parts");
    assert.ok(!result.ok, name);
    assert.match(result.out, expected, name);
    assert.equal(snapshot(dir), before, `${name}: nothing is written`);
  }
  // Duplicate IDs inside one batch of five (batch 01 holds PC-01..PC-05).
  rmSync(join(dir, "work"), { recursive: true, force: true });
  const bank = readJson<Rec[]>(dir, bankPath("PC"));
  batchFile(dir, "PC-01.json", [bank[0], bank[1], bank[2], bank[3], bank[3]]);
  const dup = run(dir, "assemble", "--from-parts");
  assert.ok(!dup.ok);
  assert.match(dup.out, /duplicate id in this batch/);
  assert.equal(snapshot(dir), before);
});

test("--from-parts together with --check is still refused", () => {
  const dir = makeFixture();
  const result = run(dir, "assemble", "--check", "--from-parts");
  assert.ok(!result.ok);
  assert.match(result.out, /cannot be combined/);
});

test("manifestErrors accepts the real manifest and rejects each malformed shape", () => {
  const real = readJson<Manifest>(ROOT, "content/interactive/briefs.json");
  assert.deepEqual(manifestErrors(real, CATEGORIES), []);
  assert.equal(parseManifest(real, CATEGORIES).quizzes.length, real.quizzes.length);
  const copy = (): Manifest => launchManifest(JSON.parse(JSON.stringify(real)) as Manifest);
  const only = (manifest: unknown): string => manifestErrors(manifest, CATEGORIES).join("\n");

  for (const bad of [null, [], "x", 7, undefined]) assert.match(only(bad), /must be an object/);
  assert.match(only({ quizzes: [] }), /categories must be an array/);
  assert.match(only({ categories: [] }), /quizzes must be an array/);

  const unknown = copy(); unknown.categories.push({ code: "ZZ", name: "Zed", count: 0 });
  assert.match(only(unknown), /unknown category code "ZZ"/);
  const dupCategory = copy(); dupCategory.categories.push({ ...dupCategory.categories[0] });
  assert.match(only(dupCategory), /category PC: listed more than once/);
  const missing = copy(); missing.categories.pop();
  assert.match(only(missing), /category LW is missing/);
  const renamed = copy(); renamed.categories[2].name = "Movies";
  assert.match(only(renamed), /name "Movies" differs/);
  for (const count of [-1, 1.5, Number.NaN, Number.POSITIVE_INFINITY, 2 ** 53, "25", null]) {
    const bad = copy(); (bad.categories[0] as { count: unknown }).count = count;
    assert.match(only(bad), /count must be a non-negative safe integer/, String(count));
  }
  const mismatch = copy(); mismatch.categories[0].count = 24;
  assert.match(only(mismatch), /category PC: count 24 but 25 briefs listed/);
  for (const record of [null, [], 5, {}, { id: "A-1", slug: "a" }, { id: "A-1", slug: " ", category_code: "PC" }, { id: 1, slug: "a", category_code: "PC" }]) {
    const bad = copy(); bad.quizzes.push(record as Brief);
    assert.match(only(bad), /needs string id, slug and category_code/, JSON.stringify(record));
  }
  const dupId = copy(); dupId.quizzes[1].id = dupId.quizzes[0].id;
  assert.match(only(dupId), /duplicate id/);
  const dupSlug = copy(); dupSlug.quizzes[1].slug = dupSlug.quizzes[0].slug;
  assert.match(only(dupSlug), /duplicate slug/);
  const stray = copy(); stray.quizzes[0].category_code = "ZZ";
  assert.match(only(stray), /unknown category_code "ZZ"/);
  assert.throws(() => parseManifest(stray, CATEGORIES), /manifest is inconsistent/);

  const grown = copy();
  grown.quizzes.push({ id: "PC-26", slug: "extra-probe", title: "Extra", category_code: "PC" });
  grown.categories[0].count = 26;
  assert.deepEqual(only(grown), "", "a larger declared count is valid when the briefs agree");
  const empty = copy();
  empty.quizzes = empty.quizzes.filter((brief) => brief.category_code !== "LW");
  empty.categories[9].count = 0;
  assert.deepEqual(only(empty), "", "an empty category is valid");
});
