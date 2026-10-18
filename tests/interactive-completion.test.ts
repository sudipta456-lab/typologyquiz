import assert from "node:assert/strict";
import { test } from "node:test";
import { isCompleteAnswer } from "../src/lib/interactive/completion.ts";
import { scoreQuestion } from "../src/lib/interactive/engine.ts";
import type { Question } from "../src/lib/interactive/types.ts";

const opts = (...ids: string[]) => ids.map((id) => ({ id, label: id }));
const base = { sectionId: "s", prompt: "P", explanation: "E", sourceIds: ["src"] };

const match = { ...base, id: "m", kind: "match", left: opts("l1", "l2"), right: opts("r1", "r2"), pairs: { l1: "r1", l2: "r2" } } as Question;
const grid = {
  ...base, id: "g", kind: "grid",
  cells: [
    { id: "c1", label: "C1", options: opts("x", "y"), correct: "x" },
    { id: "c2", label: "C2", options: opts("x", "y"), correct: "y" },
  ],
} as Question;
const order = { ...base, id: "o", kind: "order", items: opts("a", "b", "c"), correctOrder: ["a", "b", "c"] } as Question;
const slider = { ...base, id: "s1", kind: "slider", lowLabel: "Low", highLabel: "High", dimension: 0 } as Question;
const reflection = { ...base, id: "r", kind: "reflection", hint: "Note", unscored: true } as Question;
const graph = { ...base, id: "gr", kind: "graph", left: opts("l1"), right: opts("r1", "r2"), edges: [["l1", "r1"]] } as Question;

test("match needs every item matched", () => {
  assert.equal(isCompleteAnswer(match, undefined), false);
  assert.equal(isCompleteAnswer(match, {}), false);
  assert.equal(isCompleteAnswer(match, { l1: "r1" }), false);
  assert.equal(isCompleteAnswer(match, { l1: "r1", l2: "" }), false);
  assert.equal(isCompleteAnswer(match, { l1: "r1", l2: "r2" }), true);
  // Wrong but complete is still submittable; scoring decides credit.
  assert.equal(isCompleteAnswer(match, { l1: "r2", l2: "r2" }), true);
});

test("grid needs every row answered", () => {
  assert.equal(isCompleteAnswer(grid, { c1: "x" }), false);
  assert.equal(isCompleteAnswer(grid, { c1: "x", c2: "y" }), true);
});

test("forged or malformed answers are never complete", () => {
  assert.equal(isCompleteAnswer(match, { l1: "r1", l2: "nope" }), false);
  assert.equal(isCompleteAnswer(match, { l1: "r1", l2: "r2", extra: "r1" }), false);
  assert.equal(isCompleteAnswer(match, ["l1", "l2"]), false);
  // Inherited keys must not satisfy a required row.
  const inherited = Object.create({ l1: "r1", l2: "r2" }) as Record<string, string>;
  assert.equal(isCompleteAnswer(match, inherited), false);
  assert.equal(isCompleteAnswer(grid, { c1: "x", c2: "zzz" }), false);
  assert.equal(isCompleteAnswer(grid, { c1: "x", c2: 3 }), false);
  assert.equal(isCompleteAnswer(grid, "c1"), false);
});

test("an unconfirmed order is missing; a confirmed permutation is complete", () => {
  assert.equal(isCompleteAnswer(order, undefined), false);
  assert.equal(isCompleteAnswer(order, ["a", "b"]), false);
  assert.equal(isCompleteAnswer(order, ["a", "a", "b"]), false);
  assert.equal(isCompleteAnswer(order, ["c", "a", "b"]), true);
});

test("slider 0 is a real answer, an unconfirmed slider is not", () => {
  assert.equal(isCompleteAnswer(slider, undefined), false);
  assert.equal(isCompleteAnswer(slider, 0), true);
  assert.equal(isCompleteAnswer(slider, 100), true);
  assert.equal(isCompleteAnswer(slider, 101), false);
  assert.equal(isCompleteAnswer(slider, Number.NaN), false);
});

test("reflection may be empty or missing, but not oversized or non-text", () => {
  assert.equal(isCompleteAnswer(reflection, ""), true);
  assert.equal(isCompleteAnswer(reflection, undefined), true);
  assert.equal(isCompleteAnswer(reflection, "a note"), true);
  assert.equal(isCompleteAnswer(reflection, "x".repeat(2001)), false);
  assert.equal(isCompleteAnswer(reflection, 5), false);
});

test("an explicit empty graph is accepted; untouched is not", () => {
  assert.equal(isCompleteAnswer(graph, undefined), false);
  assert.equal(isCompleteAnswer(graph, []), true);
  assert.equal(isCompleteAnswer(graph, [["l1", "r2"]]), true);
  assert.equal(isCompleteAnswer(graph, [["l1", "bad"]]), false);
});

test("the engine still scores partial maps, so stored answers stay safe", () => {
  assert.equal(scoreQuestion(match, { l1: "r1" }), 0.5);
  assert.equal(scoreQuestion(grid, { c1: "x" }), 0.5);
});
