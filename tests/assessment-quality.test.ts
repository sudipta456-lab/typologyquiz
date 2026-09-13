import { test, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { TESTS, getTest, scoreTest } from "../src/lib/tests/registry";
import { validatedAnswers } from "../src/lib/tests/assessment-input";
import { currentVersion, comparableResults, reportDefinition } from "../src/lib/tests/assessment-versions";
import { encodeResult, decodeResult, saveProgress, loadProgress } from "../src/lib/results";
import { assessmentEvidence, usesSchoolWording } from "../src/lib/tests/assessment-evidence";
import { loadReflections, saveReflection, newReflection, deleteReflection, reflectionCalendar } from "../src/lib/reflections";
import type { AnswerMap, TestDefinition } from "../src/lib/types";

const mini = getTest("mini-ipip")!;
const answers = (t: TestDefinition, value = 3): AnswerMap => Object.fromEntries(t.questions.map(q => [q.id, q.type === "likert" ? value : q.correctAnswer ?? 0]));
const encodeRaw = (raw: string) => btoa(raw).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
const data = new Map<string, string>();
beforeEach(() => {
  data.clear();
  Object.defineProperty(globalThis, "localStorage", { configurable: true, value: {
    getItem: (key: string) => data.get(key) ?? null,
    setItem: (key: string, value: string) => { data.set(key, value); },
    removeItem: (key: string) => { data.delete(key); },
  } });
});

test("Mini-IPIP exact scoring direction at both endpoints, including neuroticism and imagination", () => {
  for (const endpoint of [0, 100]) {
    const input = Object.fromEntries(mini.questions.map(q => [q.id, (endpoint === 100) === (q.direction === 1) ? 5 : 1]));
    const { result } = scoreTest(mini, input);
    assert.deepEqual(Object.values(result.scores), [endpoint, endpoint, endpoint, endpoint, endpoint]);
    assert.equal("percentiles" in result, false);
  }
  assert.equal(mini.axes.find(a => a.key === "neuroticism")!.label, "Emotional reactivity");
});

test("Mini-IPIP retains the source's asymmetric imagination key and interleaved order", () => {
  const { result } = scoreTest(mini, answers(mini, 5));
  assert.deepEqual(result.scores, { extraversion: 50, agreeableness: 50, conscientiousness: 50, neuroticism: 50, openness: 25 });
  assert.deepEqual(mini.questions.slice(0, 5).map(q => q.id), ["ipip_e01", "ipip_a01", "ipip_c01", "ipip_n01", "ipip_o01"]);
  assert.equal(mini.responseOptions?.[0].label, "Very inaccurate");
  assert.equal(mini.responseOptions?.[4].label, "Very accurate");
  assert.equal(mini.questions[0].text, "Am the life of the party.");
});

test("Every registered quiz has a finite complete result and a round-trippable version", () => {
  for (const t of TESTS) {
    const { result, extras } = scoreTest(t, answers(t));
    assert.ok(Object.values(result.scores).every(s => Number.isInteger(s) && s >= 0 && s <= 100), t.slug);
    assert.equal("percentiles" in result, false, t.slug);
    const decoded = decodeResult(encodeResult(result, extras));
    assert.deepEqual(decoded?.result, result, t.slug);
    if (typeof extras?.label === "string") assert.equal(decoded?.extras?.label, extras.label, t.slug);
  }
});

test("Missing, unknown, out-of-range, fractional and nonfinite responses cannot yield an apparently complete profile", () => {
  const input = answers(mini);
  const incomplete = { ...input }; delete incomplete.ipip_e01;
  for (const invalid of [incomplete, { ...input, made_up: 3 }, { ...input, ipip_e01: 0 }, { ...input, ipip_e01: 6 }, { ...input, ipip_e01: 2.5 }, { ...input, ipip_e01: NaN }, { ...input, ipip_e01: Infinity }]) {
    assert.throws(() => scoreTest(mini, invalid));
  }
});

test("Answers left behind by a closed branch cannot influence scores", () => {
  const t: TestDefinition = { ...mini, questions: [
    { id: "base", text: "Base", type: "likert", axis: "extraversion", direction: 1 },
    { id: "probe", text: "Probe", type: "likert", axis: "extraversion", direction: 1, showIf: { questionId: "base", min: 4 } },
  ] };
  assert.deepEqual(validatedAnswers(t, { base: 1, probe: 5 }), { base: 1 });
  assert.throws(() => validatedAnswers(t, { base: 4 }));
});

test("Historical links retain their scores but lose undocumented percentiles", () => {
  const old = encodeRaw("mini-ipip|1750000000000|extraversion:70,agreeableness:50,conscientiousness:40,neuroticism:80,openness:90|pct:extraversion:84,neuroticism:96");
  const decoded = decodeResult(old)!;
  assert.equal(decoded.result.scores.neuroticism, 80);
  assert.equal(decoded.result.assessment, undefined);
  assert.equal("percentiles" in decoded.result, false);
  assert.equal(reportDefinition(decoded.result)?.axes.find(a => a.key === "neuroticism")?.label, "Emotional reactivity");
  assert.ok(!atob(encodeResult(decoded.result).replaceAll("-", "+").replaceAll("_", "/")).includes("pct:"));
});

test("Historical imagery labels are non-diagnostic for every decoder consumer", () => {
  const old = encodeRaw("vviq|1750000000000|vviq:10||| |ex:label:Aphantasia");
  assert.equal(decodeResult(old)?.extras?.label, "Imagery self-report");
});

test("Unknown releases and malformed score payloads fail closed", () => {
  const result = scoreTest(mini, answers(mini)).result;
  assert.equal(decodeResult(encodeResult({ ...result, assessment: { ...result.assessment!, report: "2099-01-01.1" } })), null);
  for (const raw of ["mini-ipip|NaN|extraversion:50", "mini-ipip|123|extraversion:NaN", "mini-ipip|123|extraversion:50,extraversion:70", "mini-ipip|123|__proto__:50", "unknown|123|x:50"]) assert.equal(decodeResult(encodeRaw(raw)), null);
});

test("Comparisons require the same known test, instrument, scoring, report, and wording", () => {
  const a = scoreTest(mini, answers(mini)).result;
  assert.equal(comparableResults(a, { ...a, completedAt: a.completedAt + 1000 }), true);
  assert.equal(comparableResults(a, { ...a, assessment: undefined }), false);
  assert.equal(comparableResults(a, { ...a, assessment: { ...a.assessment!, variant: "school" } }), false);
  assert.equal(comparableResults(a, { ...a, assessment: { ...a.assessment!, scoring: "future" } }), false);
});

test("A released report is resolved from the archive, not a mutable current test definition", () => {
  const result = scoreTest(mini, answers(mini)).result;
  const archived = reportDefinition(result)!;
  assert.notEqual(archived, mini);
  assert.deepEqual(archived.axes, mini.axes);
  assert.equal(archived.questions.length, 0);
});

test("Release fingerprints detect silent item, key, anchor, report or scoring changes", () => {
  const archive = JSON.parse(readFileSync("src/lib/tests/assessment-releases.json", "utf8"));
  const digest = (s: string) => createHash("sha256").update(s).digest("hex");
  const files = ["registry", "score-utils", "assessment-input", "8values", "mini-ipip", "crt-7", "vviq", "social-battery", "study-energy", "fomo-style"];
  const scoringHash = digest(files.map(f => readFileSync(`src/lib/tests/${f}.ts`, "utf8")).join("\n"));
  for (const t of TESTS) {
    const release = archive.reports[`${t.slug}@${currentVersion(t.slug).report}`];
    assert.equal(release.definitionHash, digest(JSON.stringify(t)), `${t.slug} needs a reviewed release`);
    assert.equal(release.scoringHash, scoringHash, "Changed scoring needs a reviewed release");
  }
});

test("Resume accepts only valid progress for this version and wording", () => {
  saveProgress(mini, { ipip_e01: 4 });
  assert.deepEqual(loadProgress(mini)?.answers, { ipip_e01: 4 });
  assert.equal(loadProgress(mini, "school"), null);
  data.set("mindmetrics_mini-ipip", JSON.stringify({ answers: { ipip_e01: 4 }, savedAt: Date.now() }));
  assert.equal(loadProgress(mini), null);
  saveProgress(mini, { ipip_e01: 9 });
  assert.equal(loadProgress(mini), null);
  assert.equal(usesSchoolWording(mini, true), false);
  assert.equal(usesSchoolWording(getTest("friend-role")!, true), true);
});

test("Evidence labels distinguish research sources, original reflection and entertainment", () => {
  assert.equal(assessmentEvidence(mini).status, "Source evidence only");
  assert.equal(assessmentEvidence(getTest("friend-role")!).purpose, "Self-reflection");
  assert.equal(assessmentEvidence(getTest("delulu-level")!).purpose, "Just for fun");
});

test("Private reflections persist, update, delete, and never include notes in reminders or result URLs", () => {
  const encoded = encodeResult(scoreTest(mini, answers(mini)).result);
  const note = { ...newReflection(encoded), fits: "Private example", action: "Private action" };
  assert.equal(saveReflection(note), true);
  assert.deepEqual(loadReflections(), [note]);
  assert.equal(saveReflection({ ...note, outcome: "Helped" }), true);
  assert.equal(loadReflections().length, 1);
  assert.equal(loadReflections()[0].outcome, "Helped");
  const calendar = reflectionCalendar(note);
  assert.ok(calendar.includes("BEGIN:VCALENDAR\r\n"));
  assert.ok(!calendar.includes(note.fits) && !calendar.includes(note.action) && !calendar.includes(encoded));
  assert.ok(!encoded.includes(note.fits));
  assert.equal(deleteReflection(note.id), true);
  assert.deepEqual(loadReflections(), []);
});

test("Expired and corrupt reflections are discarded; storage failures are reported honestly", () => {
  const note = newReflection(encodeResult(scoreTest(mini, answers(mini)).result), Date.now() - 366 * 86400000);
  data.set("typologyquiz_reflections_v1", JSON.stringify([note, { secret: "bad data" }]));
  assert.deepEqual(loadReflections(), []);
  assert.equal(data.get("typologyquiz_reflections_v1"), "[]");
  Object.defineProperty(globalThis, "localStorage", { configurable: true, get() { throw new Error("denied"); } });
  assert.equal(saveReflection({ ...note, createdAt: Date.now() }), false);
  assert.equal(deleteReflection(note.id), false);
  assert.deepEqual(loadReflections(), []);
});

test("Analytics loads only through its privacy boundary; reflection content has no telemetry calls", () => {
  const layout = readFileSync("src/app/layout.tsx", "utf8");
  assert.ok(!layout.includes("googletagmanager.com") && !layout.includes("gtag('config'"));
  assert.ok(layout.includes("<Analytics />"));
  const analytics = readFileSync(new URL("../src/lib/analytics.ts", import.meta.url), "utf8");
  assert.ok(analytics.includes("NEXT_PUBLIC_GA_ENABLED") && analytics.includes("analyticsEnabled("));
  assert.ok(!/localStorage|document\.title|location\.(href|search|hash)/.test(analytics));
  const reflection = readFileSync("src/lib/reflections.ts", "utf8") + readFileSync("src/components/ReflectionPanel.tsx", "utf8");
  assert.ok(!/\bfetch\(|\bsendBeacon\(|\bgtag\(/.test(reflection));
});
