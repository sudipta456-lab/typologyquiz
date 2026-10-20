import assert from "node:assert/strict";
import { test } from "node:test";
import { scoreQuestion, scoreQuiz, validateAnswer, visibleQuestions } from "../src/lib/interactive/engine.ts";
import { progressKey, readProgress, serializeProgress } from "../src/lib/interactive/progress.ts";
import type { Answers, Question, Quiz } from "../src/lib/interactive/types.ts";
import { validateCollection, validateQuiz } from "../src/lib/interactive/validate.ts";

type Rec = Record<string, unknown>;
const EDGES: [string, string][] = [["g-l1", "g-r1"], ["g-l1", "g-r2"], ["g-l2", "g-r3"]];

function makeQuiz(): Quiz {
  return {
    id: "quiz-fixture", slug: "quiz-fixture", categoryId: "cat-a", title: "Fixture", description: "Synthetic engine fixture.", kind: "hybrid", version: 1, minutes: 5,
    sections: [{ id: "s-one", title: "Recall" }, { id: "s-two", title: "Choices" }],
    dimensions: [{ id: "d0", low: "Low zero", high: "High zero", description: "First summary." }, { id: "d1", low: "Low one", high: "High one", description: "Second summary." }],
    sources: [{ id: "src-orig", label: "Original fictional case", kind: "original" }, { id: "src-ref", label: "Reference", kind: "reference", url: "https://example.org/reference" }],
    questions: [
      { id: "q-choice", kind: "choice", sectionId: "s-one", prompt: "Pick b.", explanation: "b is keyed.", sourceIds: ["src-ref"], options: [{ id: "a", label: "A" }, { id: "b", label: "B" }, { id: "c", label: "C" }], correct: "b" },
      { id: "q-order", kind: "order", sectionId: "s-one", prompt: "Order the steps.", explanation: "a first, d last.", sourceIds: ["src-orig"], items: ["o-a", "o-b", "o-c", "o-d"].map((id) => ({ id, label: id })), precedence: [["o-a", "o-b"], ["o-a", "o-c"], ["o-b", "o-d"], ["o-c", "o-d"]] },
      { id: "q-match", kind: "match", sectionId: "s-one", prompt: "Match.", explanation: "l1-r1 etc.", sourceIds: ["src-orig"], left: ["l1", "l2", "l3"].map((id) => ({ id, label: id })), right: ["r1", "r2", "r3"].map((id) => ({ id, label: id })), pairs: { l1: "r1", l2: "r2", l3: "r3" } },
      { id: "q-graph", kind: "graph", sectionId: "s-one", prompt: "Connect.", explanation: "Three edges.", sourceIds: ["src-orig"], left: ["g-l1", "g-l2"].map((id) => ({ id, label: id })), right: ["g-r1", "g-r2", "g-r3"].map((id) => ({ id, label: id })), edges: EDGES },
      { id: "q-grid", kind: "grid", sectionId: "s-one", prompt: "Fill cells.", explanation: "x then y.", sourceIds: ["src-orig"], cells: [{ id: "c1", label: "C1", options: [{ id: "x", label: "X" }, { id: "y", label: "Y" }], correct: "x" }, { id: "c2", label: "C2", options: [{ id: "x", label: "X" }, { id: "y", label: "Y" }], correct: "y" }] },
      { id: "q-pref", kind: "choice", sectionId: "s-two", prompt: "Which feels closer?", explanation: "Descriptive only.", sourceIds: ["src-orig"], options: [{ id: "p1", label: "P1", weights: [1, 0] }, { id: "p2", label: "P2", weights: [0, 1] }] },
      { id: "q-follow", kind: "choice", sectionId: "s-two", prompt: "Follow-up for p1.", explanation: "f1 is keyed.", sourceIds: ["src-orig"], showIf: { questionId: "q-pref", optionId: "p1" }, options: [{ id: "f1", label: "F1" }, { id: "f2", label: "F2" }], correct: "f1" },
      { id: "q-slider", kind: "slider", sectionId: "s-two", prompt: "Place yourself.", explanation: "Position only.", sourceIds: ["src-orig"], lowLabel: "Low", highLabel: "High", dimension: 1 },
      { id: "q-rank", kind: "rank", sectionId: "s-two", prompt: "Rank these.", explanation: "Weights only.", sourceIds: ["src-orig"], items: [{ id: "k1", label: "K1", weights: [1, 0] }, { id: "k2", label: "K2", weights: [0, 1] }] },
      { id: "q-reflect", kind: "reflection", sectionId: "s-two", prompt: "Reflect.", explanation: "Private.", sourceIds: ["src-orig"], hint: "Optional note.", unscored: true },
    ],
  };
}

/** Replaces slider and rank with audio and hotspot tasks. */
function makeMixed(): Quiz {
  const quiz = makeQuiz();
  quiz.questions = quiz.questions.filter((q) => q.id !== "q-slider" && q.id !== "q-rank");
  quiz.questions.splice(5, 0,
    { id: "q-audio", kind: "audio", sectionId: "s-two", prompt: "Which was higher at the end?", explanation: "Second tone was higher.", sourceIds: ["src-orig"], transcript: "A 440 Hz tone, then a 660 Hz tone.", tones: [{ frequency: 440, duration: 0.5, delay: 0 }, { frequency: 660, duration: 0.5, delay: 0.6, waveform: "triangle", gain: 0.5 }], options: [{ id: "a1", label: "First" }, { id: "a2", label: "Second" }], correct: "a2" },
    { id: "q-hot", kind: "hotspot", sectionId: "s-two", prompt: "Tap the base.", explanation: "z2 is the base.", sourceIds: ["src-orig"], diagram: { title: "Original diagram", description: "Two boxes.", zones: [{ id: "z1", label: "Top", x: 10, y: 10, width: 30, height: 30, color: "#aabbcc" }, { id: "z2", label: "Base", x: 50, y: 50, width: 40, height: 40 }] }, options: [{ id: "z1", label: "Top" }, { id: "z2", label: "Base" }], correct: "z2" });
  return quiz;
}

function perfect(): Answers {
  return { "q-choice": "b", "q-order": ["o-a", "o-b", "o-c", "o-d"], "q-match": { l1: "r1", l2: "r2", l3: "r3" }, "q-graph": EDGES, "q-grid": { c1: "x", c2: "y" }, "q-pref": "p1", "q-follow": "f1", "q-slider": 80, "q-rank": ["k1", "k2"], "q-reflect": "private text" };
}

const find = (quiz: Quiz, id: string): Question => quiz.questions.find((q) => q.id === id) as Question;
const view = (quiz: Quiz, id: string): Rec => find(quiz, id) as unknown as Rec;
const near = (actual: number | null, expected: number): void => assert.ok(actual !== null && Math.abs(actual - expected) < 1e-9, `expected ${expected}, got ${String(actual)}`);
const errorsOf = (mutate: (quiz: Quiz) => void, base: () => Quiz = makeQuiz): string[] => {
  const quiz = base();
  mutate(quiz);
  return validateQuiz(quiz);
};
const expectError = (errors: string[], text: string): void => assert.ok(errors.some((e) => e.includes(text)), `expected "${text}" in ${JSON.stringify(errors)}`);

test("fixtures are structurally valid", () => {
  assert.deepEqual(validateQuiz(makeQuiz()), []);
  assert.deepEqual(validateQuiz(makeMixed()), []);
});

test("hidden branches are not visible, and prototype tricks cannot open them", () => {
  const quiz = makeQuiz();
  const ids = (answers: Answers): string[] => visibleQuestions(quiz, answers).map((q) => q.id);
  assert.ok(!ids({}).includes("q-follow"));
  assert.ok(ids({ "q-pref": "p1" }).includes("q-follow"));
  assert.ok(!ids({ "q-pref": "p2" }).includes("q-follow"));
  assert.ok(!ids(JSON.parse('{"__proto__":{"q-pref":"p1"}}') as Answers).includes("q-follow"));
  assert.ok(!ids(Object.create({ "q-pref": "p1" }) as Answers).includes("q-follow"));
  assert.ok(!ids({ "q-pref": ["p1"] as unknown as string }).includes("q-follow"));
});

test("a branch whose parent comes later or is itself hidden never shows", () => {
  const quiz = makeQuiz();
  const follow = find(quiz, "q-follow");
  quiz.questions = quiz.questions.filter((q) => q.id !== "q-follow");
  quiz.questions.unshift(follow);
  assert.ok(!visibleQuestions(quiz, { "q-pref": "p1" }).some((q) => q.id === "q-follow"));
  const chained = makeQuiz();
  chained.questions.push({ id: "q-grand", kind: "choice", sectionId: "s-two", prompt: "p", explanation: "e", sourceIds: ["src-orig"], showIf: { questionId: "q-follow", optionId: "f1" }, options: [{ id: "g1", label: "G1" }, { id: "g2", label: "G2" }], correct: "g1" });
  assert.ok(!visibleQuestions(chained, { "q-pref": "p2", "q-follow": "f1" }).some((q) => q.id === "q-grand"));
  assert.ok(visibleQuestions(chained, { "q-pref": "p1", "q-follow": "f1" }).some((q) => q.id === "q-grand"));
});

test("validateAnswer rejects tampered shapes for every kind", () => {
  const quiz = makeMixed();
  const q = (id: string): Question => find(quiz, id);
  assert.ok(validateAnswer(q("q-choice"), "b"));
  for (const bad of [undefined, null, 1, ["b"], { b: 1 }, "zzz", "__proto__", "constructor", ""]) assert.equal(validateAnswer(q("q-choice"), bad), false);
  assert.ok(validateAnswer(q("q-order"), ["o-d", "o-c", "o-b", "o-a"]));
  for (const bad of [["o-a", "o-a", "o-b", "o-c"], ["o-a", "o-b", "o-c"], ["o-a", "o-b", "o-c", "o-d", "o-d"], ["o-a", "o-b", "o-c", "x"], "o-a", [1, 2, 3, 4]]) assert.equal(validateAnswer(q("q-order"), bad), false);
  assert.ok(validateAnswer(q("q-match"), {}));
  assert.ok(validateAnswer(q("q-match"), { l1: "r3" }));
  for (const bad of [{ l9: "r1" }, { l1: "r9" }, { l1: 1 }, JSON.parse('{"__proto__":"r1"}'), JSON.parse('{"constructor":"r1"}'), [["l1", "r1"]], "l1"]) assert.equal(validateAnswer(q("q-match"), bad), false);
  assert.ok(validateAnswer(q("q-graph"), []));
  assert.ok(validateAnswer(q("q-graph"), [["g-l1", "g-r1"], ["g-l1", "g-r1"]]));
  for (const bad of [[["g-r1", "g-l1"]], [["g-l1"]], [["g-l1", "g-r1", "g-r2"]], [["g-l1", 1]], "g-l1", [["__proto__", "g-r1"]], new Array(5000).fill(["g-l1", "g-r1"])]) assert.equal(validateAnswer(q("q-graph"), bad), false);
  assert.ok(validateAnswer(q("q-grid"), { c1: "y" }));
  for (const bad of [{ c1: "z" }, { c9: "x" }, { c1: 1 }, JSON.parse('{"__proto__":"x"}')]) assert.equal(validateAnswer(q("q-grid"), bad), false);
  assert.ok(validateAnswer(q("q-audio"), "a1") && !validateAnswer(q("q-audio"), "a3"));
  assert.ok(validateAnswer(q("q-hot"), "z1") && !validateAnswer(q("q-hot"), "z3"));
  const slider = find(makeQuiz(), "q-slider");
  assert.ok(validateAnswer(slider, 0) && validateAnswer(slider, 100) && validateAnswer(slider, 37.5));
  for (const bad of [NaN, Infinity, -1, 101, "50", null, undefined]) assert.equal(validateAnswer(slider, bad), false);
  const reflection = find(makeQuiz(), "q-reflect");
  assert.ok(validateAnswer(reflection, "") && validateAnswer(reflection, "note"));
  assert.equal(validateAnswer(reflection, "x".repeat(2001)), false);
  assert.equal(validateAnswer(reflection, 5), false);
});

test("objective choice-like tasks score 0/1; preference and discussion tasks are null", () => {
  const quiz = makeMixed();
  assert.equal(scoreQuestion(find(quiz, "q-choice"), "b"), 1);
  assert.equal(scoreQuestion(find(quiz, "q-choice"), "a"), 0);
  assert.equal(scoreQuestion(find(quiz, "q-choice"), "bogus"), 0);
  assert.equal(scoreQuestion(find(quiz, "q-choice"), undefined), 0);
  assert.equal(scoreQuestion(find(quiz, "q-audio"), "a2"), 1);
  assert.equal(scoreQuestion(find(quiz, "q-hot"), "z1"), 0);
  assert.equal(scoreQuestion(find(quiz, "q-pref"), "p1"), null);
  assert.equal(scoreQuestion(find(quiz, "q-reflect"), "words"), null);
  const keyedButUnscored = makeQuiz();
  view(keyedButUnscored, "q-choice").unscored = true;
  assert.equal(scoreQuestion(find(keyedButUnscored, "q-choice"), "b"), null);
});

test("graph scoring penalises false positives, deduplicates, and cannot go negative", () => {
  const graph = find(makeQuiz(), "q-graph");
  near(scoreQuestion(graph, EDGES), 1);
  near(scoreQuestion(graph, [EDGES[0]]), 1 / 3);
  near(scoreQuestion(graph, [EDGES[0], ["g-l2", "g-r1"]]), 0);
  near(scoreQuestion(graph, [EDGES[0], EDGES[1], ["g-l2", "g-r1"]]), 1 / 3);
  near(scoreQuestion(graph, [EDGES[0], EDGES[0], EDGES[0], EDGES[0]]), 1 / 3);
  near(scoreQuestion(graph, [...EDGES, EDGES[2], EDGES[2]]), 1);
  near(scoreQuestion(graph, [["g-l2", "g-r1"], ["g-l2", "g-r2"]]), 0);
  near(scoreQuestion(graph, []), 0);
  const everything: [string, string][] = ["g-l1", "g-l2"].flatMap((l) => ["g-r1", "g-r2", "g-r3"].map((r): [string, string] => [l, r]));
  near(scoreQuestion(graph, everything), 0);
  near(scoreQuestion(graph, [["g-l1", "nope"]]), 0);
});

test("graph decoys on both sides are valid, keyed, and penalised when connected", () => {
  const quiz = makeQuiz();
  const graph = view(quiz, "q-graph");
  graph.left = ["g-l1", "g-l2", "g-l3"].map((id) => ({ id, label: id }));
  graph.right = ["g-r1", "g-r2", "g-r3", "g-r4"].map((id) => ({ id, label: id }));
  // g-l3 (left) and g-r4 (right) have no edge in the key.
  assert.deepEqual(validateQuiz(quiz), []);
  const question = find(quiz, "q-graph");
  if (question.kind !== "graph") throw new Error("fixture");
  assert.deepEqual(question.edges, EDGES);
  near(scoreQuestion(question, question.edges), 1);
  near(scoreQuestion(question, [...EDGES, ["g-l3", "g-r1"]]), 2 / 3);
  near(scoreQuestion(question, [...EDGES, ["g-l1", "g-r4"]]), 2 / 3);
  near(scoreQuestion(question, [...EDGES, ["g-l3", "g-r4"]]), 2 / 3);
  near(scoreQuestion(question, [...EDGES, ["g-l3", "g-r1"], ["g-l1", "g-r4"]]), 1 / 3);

  expectError(errorsOf((q) => { Object.assign(view(q, "q-graph"), { left: graph.left, right: graph.right, edges: [["g-l1", "g-r1"], ["g-l9", "g-r2"]] }); }), "unknown node");
  expectError(errorsOf((q) => { Object.assign(view(q, "q-graph"), { left: graph.left, right: graph.right, edges: [["g-l1", "g-r1"], ["g-l2", "g-r9"]] }); }), "unknown node");
  expectError(errorsOf((q) => { view(q, "q-graph").edges = [["", "g-r1"]]; }), "unknown node");
  expectError(errorsOf((q) => { view(q, "q-graph").edges = [["g-l1", ""]]; }), "unknown node");
  expectError(errorsOf((q) => { view(q, "q-graph").edges = []; }), "edges: required");
});

test("tasks carry equal weight regardless of how many edges or cells they have", () => {
  const quiz = makeQuiz();
  const small = find(quiz, "q-graph");
  const large: Question = { id: "big", kind: "graph", sectionId: "s-one", prompt: "p", explanation: "e", sourceIds: ["src-orig"],
    left: ["a", "b", "c", "d"].map((id) => ({ id, label: id })), right: ["w", "x", "y", "z"].map((id) => ({ id, label: id })),
    edges: [["a", "w"], ["a", "x"], ["b", "x"], ["b", "y"], ["c", "y"], ["c", "z"], ["d", "z"], ["d", "w"]] };
  if (small.kind !== "graph" || large.kind !== "graph") throw new Error("fixture");
  near(scoreQuestion(small, small.edges), 1);
  near(scoreQuestion(large, large.edges), 1);
  // One missed edge costs proportionally to its own task but each task still contributes at most 1.
  near(scoreQuestion(small, small.edges.slice(1)), 2 / 3);
  near(scoreQuestion(large, large.edges.slice(1)), 7 / 8);
  quiz.questions.push(large);
  const answers = perfect();
  answers["big"] = large.edges.slice(0, 4);
  const result = scoreQuiz(quiz, answers);
  assert.equal(result.total, 7);
  near(result.correct, 6.5);
});

test("match and grid give proportional partial credit with no cascade", () => {
  const quiz = makeQuiz();
  near(scoreQuestion(find(quiz, "q-match"), { l1: "r1", l2: "r2", l3: "r3" }), 1);
  near(scoreQuestion(find(quiz, "q-match"), { l1: "r1" }), 1 / 3);
  near(scoreQuestion(find(quiz, "q-match"), { l1: "r1", l2: "r1", l3: "r1" }), 1 / 3);
  near(scoreQuestion(find(quiz, "q-match"), { l1: "r2", l2: "r3", l3: "r1" }), 0);
  near(scoreQuestion(find(quiz, "q-match"), {}), 0);
  near(scoreQuestion(find(quiz, "q-match"), { l1: "r1", l9: "r2" }), 0);
  near(scoreQuestion(find(quiz, "q-grid"), { c1: "x", c2: "y" }), 1);
  near(scoreQuestion(find(quiz, "q-grid"), { c1: "x", c2: "x" }), 0.5);
  near(scoreQuestion(find(quiz, "q-grid"), { c2: "y" }), 0.5);
  near(scoreQuestion(find(quiz, "q-grid"), { c1: "y", c2: "x" }), 0);
});

test("precedence accepts every valid topological order and grades violations", () => {
  const order = find(makeQuiz(), "q-order");
  near(scoreQuestion(order, ["o-a", "o-b", "o-c", "o-d"]), 1);
  near(scoreQuestion(order, ["o-a", "o-c", "o-b", "o-d"]), 1);
  near(scoreQuestion(order, ["o-b", "o-a", "o-c", "o-d"]), 3 / 4);
  near(scoreQuestion(order, ["o-d", "o-c", "o-b", "o-a"]), 0);
  near(scoreQuestion(order, ["o-a", "o-a", "o-b", "o-c"]), 0);
  near(scoreQuestion(order, undefined), 0);
  const keyed: Question = { id: "k", kind: "order", sectionId: "s-one", prompt: "p", explanation: "e", sourceIds: ["src-orig"], items: ["x", "y", "z"].map((id) => ({ id, label: id })), correctOrder: ["x", "y", "z"] };
  near(scoreQuestion(keyed, ["x", "y", "z"]), 1);
  near(scoreQuestion(keyed, ["y", "x", "z"]), 2 / 3);
  near(scoreQuestion(keyed, ["z", "y", "x"]), 0);
  const free: Question = { ...(keyed as Question & { kind: "order" }), correctOrder: undefined };
  assert.equal(scoreQuestion(free, ["x", "y", "z"]), null);
});

test("perfect and empty runs, hidden answers ignored, review carries null for unscored tasks", () => {
  const quiz = makeQuiz();
  const full = scoreQuiz(quiz, perfect());
  assert.equal(full.total, 6);
  assert.equal(full.correct, 6);
  assert.equal(full.percent, 100);
  assert.deepEqual(full.review.map((entry) => entry.id), quiz.questions.map((q) => q.id));
  assert.deepEqual(full.review.filter((entry) => entry.credit === null).map((entry) => entry.id), ["q-pref", "q-slider", "q-rank", "q-reflect"]);

  const empty = scoreQuiz(quiz, {});
  assert.equal(empty.total, 5);
  assert.equal(empty.correct, 0);
  assert.equal(empty.percent, 0);

  const hidden = scoreQuiz(quiz, { ...perfect(), "q-pref": "p2" });
  assert.equal(hidden.total, 5);
  assert.equal(hidden.correct, 5);
  assert.ok(!hidden.review.some((entry) => entry.id === "q-follow"));
});

test("scoring tolerates hostile answer containers", () => {
  const quiz = makeQuiz();
  const poisoned = JSON.parse('{"__proto__":{"q-choice":"b"},"constructor":"b","toString":"x","q-choice":{"b":1}}') as Answers;
  const result = scoreQuiz(quiz, poisoned);
  assert.equal(result.correct, 0);
  const inherited = scoreQuiz(quiz, Object.create({ "q-choice": "b" }) as Answers);
  assert.equal(inherited.review.find((entry) => entry.id === "q-choice")?.credit, 0);
  assert.equal(({} as Rec)["q-choice"], undefined);
  assert.doesNotThrow(() => scoreQuiz(quiz, null as unknown as Answers));
});

test("preference dimensions summarise own choices, use option weights for rank, and split by dimension", () => {
  const quiz = makeQuiz();
  const first = scoreQuiz(quiz, perfect());
  assert.deepEqual(first.dimensions.map((d) => d.id), ["d0", "d1"]);
  assert.equal(first.dimensions[0].low, "Low zero");
  // d0: p1 -> 1, rank [k1,k2] -> 1.  d1: p1 -> 0, slider 80 -> 0.8, rank -> 0 (mean 0.267).
  assert.equal(first.dimensions[0].value, 100);
  assert.equal(first.dimensions[1].value, 27);

  const reversed = scoreQuiz(quiz, { ...perfect(), "q-rank": ["k2", "k1"], "q-slider": 0 });
  // d0: p1 -> 1, reversed rank -> 0.  d1: p1 -> 0, slider 0 -> 0, reversed rank -> 1.
  assert.equal(reversed.dimensions[0].value, 50);
  assert.equal(reversed.dimensions[1].value, 33);

  // Selecting p2 hides the follow-up, flips the choice contribution, and keeps the slider on dimension 1 only.
  const other = scoreQuiz(quiz, { ...perfect(), "q-pref": "p2" });
  assert.equal(other.dimensions[0].value, 50);
  assert.equal(other.dimensions[1].value, 60);
});

test("ties, unanswered and tampered preference answers stay at the neutral midpoint", () => {
  const quiz = makeQuiz();
  const none = scoreQuiz(quiz, {});
  assert.deepEqual(none.dimensions.map((d) => d.value), [50, 50]);
  const tampered = scoreQuiz(quiz, { "q-pref": "p9", "q-slider": 999, "q-rank": ["k1", "k1"] });
  assert.deepEqual(tampered.dimensions.map((d) => d.value), [50, 50]);
  const tied = makeQuiz();
  view(tied, "q-pref").options = [{ id: "p1", label: "P1", weights: [0.5, 0.5] }, { id: "p2", label: "P2", weights: [0.5, 0.5] }];
  assert.deepEqual(scoreQuiz(tied, { "q-pref": "p1" }).dimensions.map((d) => d.value), [50, 50]);
  const none2 = makeQuiz();
  delete none2.dimensions;
  assert.deepEqual(scoreQuiz(none2, perfect()).dimensions, []);
});

test("conditional preference questions only count while visible", () => {
  const quiz = makeQuiz();
  const gate: Question = { id: "q-gated", kind: "choice", sectionId: "s-two", prompt: "p", explanation: "e", sourceIds: ["src-orig"], showIf: { questionId: "q-pref", optionId: "p2" }, options: [{ id: "h1", label: "H1", weights: [1, 1] }, { id: "h2", label: "H2", weights: [0, 0] }] };
  quiz.questions = quiz.questions.filter((q) => q.id !== "q-reflect");
  quiz.questions.splice(7, 0, gate);
  assert.deepEqual(validateQuiz(quiz), []);
  const answers = { ...perfect(), "q-gated": "h2" };
  const shown = scoreQuiz(quiz, answers);
  assert.ok(!shown.review.some((entry) => entry.id === "q-gated"));
  assert.equal(shown.dimensions[0].value, 100);
  const exposed = scoreQuiz(quiz, { ...answers, "q-pref": "p2" });
  assert.ok(exposed.review.some((entry) => entry.id === "q-gated"));
  // d0 positions: p2 -> 0, gated h2 -> 0, rank -> 1 => 33.
  assert.equal(exposed.dimensions[0].value, 33);
});

test("match preference assignments use weights, never correctness", () => {
  const quiz = makeQuiz();
  const match = view(quiz, "q-match");
  delete match.pairs;
  match.weights = { r1: [1, 0], r2: [0, 1], "l3:r3": [0.5, 0.5] };
  assert.deepEqual(validateQuiz(quiz), []);
  assert.equal(scoreQuestion(find(quiz, "q-match"), { l1: "r1" }), null);
  const result = scoreQuiz(quiz, { "q-match": { l1: "r1", l2: "r1" } });
  assert.equal(result.total, 4);
  assert.equal(result.dimensions[0].value, 100);
});

test("validateQuiz never throws on hostile unknowns", () => {
  const hostile: unknown[] = [undefined, null, 0, "x", [], [1], {}, Object.create(null), { id: 5 }, { questions: "no", sections: {}, sources: 3 }, JSON.parse('{"__proto__":{"id":"x"},"questions":[null,1,"a",[]]}'),
    { id: "x", get slug(): string { throw new Error("boom"); } }, new Proxy({}, { get() { throw new Error("proxy"); }, getOwnPropertyDescriptor() { throw new Error("proxy"); } })];
  for (const value of hostile) {
    let errors: string[] = [];
    assert.doesNotThrow(() => { errors = validateQuiz(value); });
    assert.ok(errors.length > 0, JSON.stringify(errors));
  }
  assert.doesNotThrow(() => validateCollection(null as unknown as Quiz[]));
  assert.doesNotThrow(() => validateCollection([null, 3, {}] as unknown as Quiz[]));
});

test("validation: identity, sections, task counts and forbidden ids", () => {
  expectError(errorsOf((q) => { q.slug = "Bad Slug"; }), "slug");
  expectError(errorsOf((q) => { (q as unknown as Rec).version = 2; }), "version");
  expectError(errorsOf((q) => { (q as unknown as Rec).kind = "novel"; }), "kind");
  expectError(errorsOf((q) => { q.minutes = 0; }), "minutes");
  expectError(errorsOf((q) => { q.sections = [q.sections[0]]; }), "sections");
  expectError(errorsOf((q) => { q.questions = q.questions.slice(0, 5); }), "tasks");
  expectError(errorsOf((q) => { q.questions[1].id = "q-choice"; }), "duplicate id");
  expectError(errorsOf((q) => { q.questions[0].id = "__proto__"; }), "invalid id");
  expectError(errorsOf((q) => { q.questions[0].sectionId = "nowhere"; }), "sectionId");
  expectError(errorsOf((q) => { q.sections.push({ id: "s-empty", title: "Unused" }); }), "no tasks");
  expectError(errorsOf((q) => { (view(q, "q-choice")).kind = "teleport"; }), "unknown question kind");
});

test("validation: source membership and URLs", () => {
  expectError(errorsOf((q) => { q.questions[0].sourceIds = ["ghost"]; }), "unknown source");
  expectError(errorsOf((q) => { q.questions[0].sourceIds = []; }), "sourceIds");
  expectError(errorsOf((q) => { q.sources[1].url = "javascript:alert(1)"; }), "https");
  expectError(errorsOf((q) => { delete q.sources[1].url; }), "https");
  expectError(errorsOf((q) => { q.sources[1].id = "src-orig"; }), "duplicate id");
  expectError(errorsOf((q) => { q.sources = []; }), "sources");
});

test("validation: weights and dimensions", () => {
  expectError(errorsOf((q) => { view(q, "q-pref").options = [{ id: "p1", label: "P1", weights: [Number.NaN, 0] }, { id: "p2", label: "P2", weights: [0, 1] }]; }), "weights");
  expectError(errorsOf((q) => { view(q, "q-pref").options = [{ id: "p1", label: "P1", weights: [1, 0, 0] }, { id: "p2", label: "P2", weights: [0, 1] }]; }), "weights");
  expectError(errorsOf((q) => { view(q, "q-pref").options = [{ id: "p1", label: "P1", weights: [1e9, 0] }, { id: "p2", label: "P2", weights: [0, 1] }]; }), "weights");
  expectError(errorsOf((q) => { view(q, "q-pref").options = [{ id: "p1", label: "P1", weights: ["1", 0] }, { id: "p2", label: "P2", weights: [0, 1] }]; }), "weights");
  expectError(errorsOf((q) => { delete q.dimensions; }), "dimensions");
  expectError(errorsOf((q) => { (q as unknown as Rec).dimensions = [q.dimensions?.[0]]; }), "dimensions");
  expectError(errorsOf((q) => { view(q, "q-slider").dimension = 2; }), "dimension must be 0 or 1");
  expectError(errorsOf((q) => { view(q, "q-rank").items = [{ id: "k1", label: "K1" }, { id: "k2", label: "K2" }]; }), "weights required");
  expectError(errorsOf((q) => { delete view(q, "q-pref").options; }), "options");
  expectError(errorsOf((q) => { view(q, "q-pref").options = [{ id: "p1", label: "P1" }, { id: "p2", label: "P2" }]; }), "needs correct");
  expectError(errorsOf((q) => { view(q, "q-choice").correct = "zzz"; }), "not an option");
});

test("validation: precedence, order, match, graph, grid, branches", () => {
  expectError(errorsOf((q) => { view(q, "q-order").precedence = [["o-a", "o-b"], ["o-b", "o-c"], ["o-c", "o-a"]]; }), "cycle");
  expectError(errorsOf((q) => { view(q, "q-order").precedence = [["o-a", "o-a"]]; }), "self-reference");
  expectError(errorsOf((q) => { view(q, "q-order").precedence = [["o-a", "ghost"]]; }), "unknown item");
  expectError(errorsOf((q) => { view(q, "q-order").correctOrder = ["o-d", "o-c", "o-b", "o-a"]; }), "violates precedence");
  expectError(errorsOf((q) => { view(q, "q-order").correctOrder = ["o-a", "o-b"]; delete view(q, "q-order").precedence; }), "every item exactly once");
  expectError(errorsOf((q) => { delete view(q, "q-order").precedence; }), "needs correctOrder or precedence");
  expectError(errorsOf((q) => { view(q, "q-match").pairs = { l1: "r1", l2: "r2" }; }), "every left item");
  expectError(errorsOf((q) => { view(q, "q-match").pairs = { l1: "r1", l2: "r2", l3: "r9" }; }), "not a right item");
  expectError(errorsOf((q) => { view(q, "q-match").weights = { r1: [1, 0] }; }), "both pairs and weights");
  expectError(errorsOf((q) => { view(q, "q-graph").edges = [["g-l1", "g-r1"], ["g-l1", "g-r1"], ["g-l2", "g-r3"], ["g-l1", "g-r2"]]; }), "duplicate edge");
  expectError(errorsOf((q) => { view(q, "q-graph").edges = [["g-l1", "ghost"]]; }), "unknown node");
  // An isolated node is a legitimate decoy, not a structural error.
  assert.deepEqual(errorsOf((q) => { view(q, "q-graph").edges = [["g-l1", "g-r1"], ["g-l1", "g-r2"], ["g-l1", "g-r3"]]; }), []);
  expectError(errorsOf((q) => { view(q, "q-graph").edges = ["g-l1", "g-l2"].flatMap((l) => ["g-r1", "g-r2", "g-r3"].map((r) => [l, r])); }), "no discrimination");
  expectError(errorsOf((q) => { view(q, "q-grid").cells = [{ id: "c1", label: "C1", options: [{ id: "x", label: "X" }, { id: "y", label: "Y" }], correct: "q" }]; }), "correct is not an option");
  expectError(errorsOf((q) => { view(q, "q-follow").showIf = { questionId: "q-slider", optionId: "p1" }; }), "earlier question");
  expectError(errorsOf((q) => { view(q, "q-follow").showIf = { questionId: "q-grid", optionId: "x" }; }), "choice question");
  expectError(errorsOf((q) => { view(q, "q-follow").showIf = { questionId: "q-pref", optionId: "p9" }; }), "not found");
  expectError(errorsOf((q) => { view(q, "q-follow").showIf = { questionId: "q-follow", optionId: "f1" }; }), "earlier question");
});

test("validation: bounded audio and hotspot diagrams", () => {
  const tone = (q: Quiz, index: number): Rec => (view(q, "q-audio").tones as Rec[])[index];
  expectError(errorsOf((q) => { tone(q, 0).frequency = 0; }, makeMixed), "frequency");
  expectError(errorsOf((q) => { tone(q, 0).frequency = 90000; }, makeMixed), "frequency");
  expectError(errorsOf((q) => { tone(q, 0).duration = 600; }, makeMixed), "duration");
  expectError(errorsOf((q) => { tone(q, 0).delay = -1; }, makeMixed), "delay");
  expectError(errorsOf((q) => { tone(q, 1).gain = 2; }, makeMixed), "gain");
  expectError(errorsOf((q) => { tone(q, 1).waveform = "noise"; }, makeMixed), "waveform");
  expectError(errorsOf((q) => { view(q, "q-audio").tones = []; }, makeMixed), "tones");
  expectError(errorsOf((q) => { view(q, "q-audio").tones = Array.from({ length: 40 }, () => ({ frequency: 440, duration: 0.1, delay: 0 })); }, makeMixed), "tones");
  expectError(errorsOf((q) => { delete view(q, "q-audio").transcript; }, makeMixed), "transcript");
  const zone = (q: Quiz, index: number): Rec => ((view(q, "q-hot").diagram as Rec).zones as Rec[])[index];
  expectError(errorsOf((q) => { zone(q, 1).width = 80; }, makeMixed), "past the diagram");
  expectError(errorsOf((q) => { zone(q, 1).x = -5; }, makeMixed), "geometry");
  expectError(errorsOf((q) => { zone(q, 1).height = Number.NaN; }, makeMixed), "geometry");
  expectError(errorsOf((q) => { zone(q, 1).id = "z1"; }, makeMixed), "duplicate id");
  expectError(errorsOf((q) => { zone(q, 0).color = "url(javascript:1)"; }, makeMixed), "color");
  expectError(errorsOf((q) => { (view(q, "q-hot").diagram as Rec).zones = [(view(q, "q-hot").diagram as Rec & { zones: Rec[] }).zones[0]]; }, makeMixed), "zones");
  expectError(errorsOf((q) => { delete view(q, "q-hot").diagram; }, makeMixed), "diagram");
  expectError(errorsOf((q) => { view(q, "q-hot").correct = "z9"; }, makeMixed), "not an option");
});

function collection(count: number): Quiz[] {
  return Array.from({ length: count }, (_, index) => ({ ...makeQuiz(), id: `quiz-${index}`, slug: `quiz-${index}` }));
}

test("collection rules: any size is valid, ids and slugs stay unique", () => {
  for (const size of [0, 1, 24, 25, 26, 51]) assert.deepEqual(validateCollection(collection(size)), [], `${size} quizzes`);
  const unequal = [...collection(26), ...collection(27).map((quiz, index) => ({ ...quiz, id: `other-${index}`, slug: `other-${index}`, categoryId: "cat-b" }))];
  assert.deepEqual(validateCollection(unequal), [], "categories may grow unequally");
  const dupSlug = collection(26);
  dupSlug[3].slug = dupSlug[2].slug;
  expectError(validateCollection(dupSlug), "duplicate slug");
  const dupId = collection(26);
  dupId[3].id = dupId[2].id;
  expectError(validateCollection(dupId), "duplicate quiz id");
  const broken = collection(26);
  broken[7].questions = [];
  expectError(validateCollection(broken), "quiz-7");
  const grown = collection(25);
  grown.push({ ...makeQuiz(), id: "PC-26", slug: "temporary-growth-probe" });
  assert.deepEqual(validateCollection(grown), [], "appending a 26th quiz to a category is valid");
  expectError(validateCollection("nope" as unknown as Quiz[]), "must be an array");
});

test("progress keys bind namespace, identity, version and content fingerprint", () => {
  const quiz = makeQuiz();
  const key = progressKey(quiz);
  assert.ok(key.startsWith("tq-interactive-v1:quiz-fixture:v1:"));
  assert.equal(progressKey(makeQuiz()), key);
  const edited = makeQuiz();
  edited.questions[0].prompt = "Pick b. (reworded)";
  assert.notEqual(progressKey(edited), key);
  const renamed = makeQuiz();
  renamed.id = "other";
  assert.notEqual(progressKey(renamed), key);
  const reordered = makeQuiz();
  reordered.questions.reverse();
  assert.notEqual(progressKey(reordered), key);
});

test("progress round-trips valid answers and never retains reflection text", () => {
  const quiz = makeQuiz();
  const raw = serializeProgress(quiz, { ...perfect(), "q-reflect": "SECRET-REFLECTION" }, 4);
  assert.ok(!raw.includes("SECRET-REFLECTION"));
  assert.ok(!raw.includes("q-reflect"));
  const restored = readProgress(quiz, raw);
  assert.ok(restored);
  assert.equal(restored.index, 4);
  assert.deepEqual(restored.answers, (() => { const { "q-reflect": _dropped, ...rest } = perfect(); void _dropped; return rest; })());

  const stuffed = JSON.parse(raw) as Rec;
  (stuffed.answers as Rec)["q-reflect"] = "SMUGGLED";
  const reread = readProgress(quiz, JSON.stringify(stuffed));
  assert.ok(reread && !("q-reflect" in reread.answers));
});

test("progress purges hidden branch answers on write and on read", () => {
  const quiz = makeQuiz();
  const raw = serializeProgress(quiz, { ...perfect(), "q-pref": "p2" }, 3);
  assert.ok(!raw.includes("q-follow"));
  const stored = JSON.parse(serializeProgress(quiz, perfect(), 3)) as Rec;
  (stored.answers as Rec)["q-pref"] = "p2";
  const restored = readProgress(quiz, JSON.stringify(stored));
  assert.ok(restored);
  assert.equal(restored.answers["q-follow"], undefined);
  assert.equal(restored.answers["q-pref"], "p2");
});

test("progress rejects fingerprint, identity and version mismatches", () => {
  const quiz = makeQuiz();
  const raw = serializeProgress(quiz, perfect(), 2);
  assert.ok(readProgress(quiz, raw));
  const edited = makeQuiz();
  edited.questions[0].explanation = "A silently edited explanation.";
  assert.equal(readProgress(edited, raw), null);
  const sibling = makeQuiz();
  sibling.id = "quiz-sibling";
  assert.equal(readProgress(sibling, raw), null);
  const tamper = (patch: Rec): string => JSON.stringify({ ...(JSON.parse(raw) as Rec), ...patch });
  assert.equal(readProgress(quiz, tamper({ fp: "0000000000000000" })), null);
  assert.equal(readProgress(quiz, tamper({ id: "quiz-sibling" })), null);
  assert.equal(readProgress(quiz, tamper({ v: 2 })), null);
  assert.equal(readProgress(quiz, tamper({ quizVersion: 2 })), null);
  assert.equal(readProgress(quiz, tamper({ answers: [] })), null);
});

test("progress treats storage as untrusted: garbage, size, indices and prototype keys", () => {
  const quiz = makeQuiz();
  for (const bad of [null, undefined, 5, {}, [], "", "not json", "[]", "null", "42", '"str"', "{".repeat(1000)]) assert.equal(readProgress(quiz, bad), null);
  assert.equal(readProgress(quiz, "x".repeat(200000)), null);
  const good = JSON.parse(serializeProgress(quiz, perfect(), 2)) as Rec;
  for (const index of [-5, 1e9, Number.NaN, "3", null, 2.9]) {
    const result = readProgress(quiz, JSON.stringify({ ...good, index }));
    assert.ok(result);
    assert.ok(Number.isInteger(result.index) && result.index >= 0 && result.index <= visibleQuestions(quiz, result.answers).length);
  }
  assert.equal(readProgress(quiz, JSON.stringify({ ...good, index: 1e9 }))?.index, visibleQuestions(quiz, perfect()).length);

  const hostile = `{"v":1,"id":"quiz-fixture","quizVersion":1,"fp":${JSON.stringify(good.fp)},"index":1,"answers":{"__proto__":{"polluted":true},"constructor":"x","q-choice":"zzz","q-grid":{"c1":"x","__proto__":"x"},"q-pref":"p1","unknown":"y"}}`;
  const result = readProgress(quiz, hostile);
  assert.ok(result);
  assert.deepEqual(result.answers, { "q-pref": "p1" });
  assert.equal(Object.getPrototypeOf(result.answers), Object.prototype);
  assert.equal(({} as Rec).polluted, undefined);
});

test("empty progress is not offered for resume and oversized answer sets stay bounded", () => {
  const quiz = makeQuiz();
  assert.equal(readProgress(quiz, serializeProgress(quiz, {}, 0)), null);
  const raw = serializeProgress(quiz, { ...perfect(), "q-graph": new Array(100000).fill(["g-l1", "g-r1"]) as [string, string][], "q-order": ["x"] }, 999);
  assert.ok(raw.length < 5000);
  assert.ok(!raw.includes("q-graph"));
  assert.ok(JSON.parse(raw).index <= quiz.questions.length);
});
