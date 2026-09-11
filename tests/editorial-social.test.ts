import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import type { Answer, Edition } from "../src/lib/editorial/types.ts";
import { advanceRun, emptyRun, parseProgress, resultGrid, loadRun, saveRun, type Run } from "../src/lib/editorial-social/progress.ts";
import { editionShare, isChallenge } from "../src/lib/editorial-social/share.ts";

const edition = JSON.parse(readFileSync(new URL("../content/legacy/news-world-v1.json", import.meta.url), "utf8")) as Edition;
const correctAnswers = edition.questions.map(q => q.kind === "choice" ? q.correctId : "");
const complete: Run = { answers: correctAnswers, phase: "complete" };
const saved = (run: unknown, changes = {}) => JSON.stringify({ schema: 1, editionId: edition.id, version: 1, ...(run as object), ...changes });

const mixedEdition: Edition = {
  id: "format-sampler", seriesId: "format-sampler", version: 2, title: "Formats", description: "Four formats", publishedAt: "2026-09-10", audience: "general",
  questions: [
    { id: "choice", kind: "choice", prompt: "Pick B", explanation: "B", sources: [{ label: "S", url: "https://example.com/1" }], options: [{ id: "a", label: "A" }, { id: "b", label: "B" }], correctId: "b" },
    { id: "image", kind: "image-choice", prompt: "Pick image 2", explanation: "Two", sources: [{ label: "S", url: "https://example.com/2" }], options: ["one", "two"].map(id => ({ id, label: id, image: { src: `/${id}.webp`, alt: `${id} alt`, creator: "Artist", sourceUrl: `https://example.com/image/${id}`, license: "CC BY", licenseUrl: "https://example.com/license" } })), correctId: "two" },
    { id: "order", kind: "order", prompt: "Order", explanation: "Sequence", sources: [{ label: "S", url: "https://example.com/3" }], items: [{ id: "first", label: "First" }, { id: "second", label: "Second" }], correctOrder: ["first", "second"] },
    { id: "match", kind: "match", prompt: "Match", explanation: "Pairs", sources: [{ label: "S", url: "https://example.com/4" }], left: [{ id: "l1", label: "L1" }, { id: "l2", label: "L2" }], right: [{ id: "r1", label: "R1" }, { id: "r2", label: "R2" }], correctPairs: { l1: "r2", l2: "r1" } },
  ],
};
const mixedAnswers: Answer[] = ["b", "two", ["first", "second"], { l1: "r2", l2: "r1" }];

test("answers lock on reveal, next requires an answer, and completed runs cannot change", () => {
  let run = emptyRun();
  assert.equal(advanceRun(edition, run, { type: "next" }), run);
  assert.equal(advanceRun(edition, run, { type: "answer", answer: "unknown" }), run);
  run = advanceRun(edition, run, { type: "answer", answer: correctAnswers[0] });
  assert.equal(advanceRun(edition, run, { type: "answer", answer: "option-1" }), run);
  for (let index = 1; index < correctAnswers.length; index++) {
    run = advanceRun(edition, run, { type: "next" });
    run = advanceRun(edition, run, { type: "answer", answer: correctAnswers[index] });
  }
  run = advanceRun(edition, run, { type: "next" });
  assert.deepEqual(run, complete);
  assert.equal(advanceRun(edition, run, { type: "next" }), run);
  assert.equal(advanceRun(edition, run, { type: "answer", answer: "option-0" }), run);
  assert.equal(resultGrid(edition, run).filter(Boolean).length, 11);
});

test("saved progress rejects corrupt, wrong-version, incomplete-completion and invalid answers", () => {
  assert.deepEqual(parseProgress(edition, saved(complete)), complete);
  for (const raw of [null, "{", "[]", "null", "x".repeat(100001), saved(complete, { version: 2 }), saved(complete, { editionId: "other" }),
    saved({ phase: "complete", answers: correctAnswers.slice(1) }), saved({ phase: "reveal", answers: [] }),
    saved({ phase: "question", answers: correctAnswers }), saved({ phase: "reveal", answers: ["bogus"] }),
    saved({ phase: "complete", answers: [...correctAnswers, "option-0"] })]) {
    assert.equal(parseProgress(edition, raw), null, String(raw).slice(0, 150));
  }
  const partial: Run = { answers: correctAnswers.slice(0, 2), phase: "reveal" };
  assert.deepEqual(parseProgress(edition, saved(partial)), partial);
});

test("progress works without browser storage and reports blocked writes", () => {
  assert.equal(loadRun(edition), null);
  assert.equal(saveRun(edition, complete), false);
  const prior = Object.getOwnPropertyDescriptor(globalThis, "window");
  Object.defineProperty(globalThis, "window", { configurable: true, value: { get localStorage() { throw new Error("Blocked"); } } });
  try {
    assert.equal(loadRun(edition), null);
    assert.equal(saveRun(edition, complete), false);
  } finally {
    if (prior) Object.defineProperty(globalThis, "window", prior);
    else Reflect.deleteProperty(globalThis, "window");
  }
});

test("saving uses schema v2 and loading falls back to historic v1 news progress", () => {
  const values = new Map<string, string>();
  const prior = Object.getOwnPropertyDescriptor(globalThis, "window");
  Object.defineProperty(globalThis, "window", { configurable: true, value: { localStorage: { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => values.set(key, value) } } });
  try {
    assert.equal(saveRun(mixedEdition, { answers: mixedAnswers, phase: "complete" }), true);
    const written = [...values.entries()].find(([key]) => key.startsWith("tq-editorial-run-v2:"));
    assert.ok(written); assert.equal(JSON.parse(written[1]).schema, 2);
    values.clear(); values.set(`tq-news-run-v1:${edition.id}:${edition.version}`, saved({ answers: correctAnswers.slice(0, 1), phase: "reveal" }));
    assert.deepEqual(loadRun(edition), { answers: correctAnswers.slice(0, 1), phase: "reveal" });
  } finally {
    if (prior) Object.defineProperty(globalThis, "window", prior); else Reflect.deleteProperty(globalThis, "window");
  }
});

test("all four answer shapes lock, score, and round-trip in schema v2", () => {
  let run = emptyRun();
  for (const answer of mixedAnswers) {
    run = advanceRun(mixedEdition, run, { type: "answer", answer });
    assert.equal(run.phase, "reveal");
    assert.equal(advanceRun(mixedEdition, run, { type: "answer", answer }), run, "revealed answer stays locked");
    run = advanceRun(mixedEdition, run, { type: "next" });
  }
  assert.equal(run.phase, "complete");
  assert.deepEqual(resultGrid(mixedEdition, run), [true, true, true, true]);
  const raw = JSON.stringify({ schema: 2, editionId: mixedEdition.id, version: mixedEdition.version, ...run });
  assert.deepEqual(parseProgress(mixedEdition, raw), run);
  assert.equal(parseProgress(mixedEdition, JSON.stringify({ schema: 1, editionId: mixedEdition.id, version: mixedEdition.version, ...run })), null, "v1 only accepts historic string answers");
});

test("v2 rejects partial order and matching answers", () => {
  const invalidRuns = [
    { answers: ["b", "two", ["first"]], phase: "reveal" },
    { answers: ["b", "two", ["first", "second"], { l1: "r2" }], phase: "complete" },
  ];
  for (const run of invalidRuns) assert.equal(parseProgress(mixedEdition, JSON.stringify({ schema: 2, editionId: mixedEdition.id, version: 2, ...run })), null);
});

test("sharing pins edition and version and exposes no answers", () => {
  const grid = correctAnswers.map((_, i) => i % 2 === 0);
  const shared = editionShare(edition, grid);
  assert.equal(shared.url, "https://typologyquiz.com/weekly/news-world-2026-09-10/v/1/?challenge=1");
  assert.equal(shared.score, 6);
  assert.match(shared.text, /6\/11/);
  for (const question of edition.questions) {
    assert.equal(shared.text.includes(question.prompt), false);
    assert.equal(shared.text.includes(question.explanation), false);
  }
  assert.throws(() => editionShare(edition, []));
  assert.equal(isChallenge("?challenge=1"), true);
  for (const query of ["", "?challenge=2", "?challenge=1&challenge=1", "?challenge=<script>"]) assert.equal(isChallenge(query), false);
});
