import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { scoreQuestion, validateAnswer } from "../src/lib/editorial/score.ts";
import type {
  ChoiceQuestion,
  Edition,
  ImageChoiceQuestion,
  MatchQuestion,
  OrderQuestion,
} from "../src/lib/editorial/types.ts";
import { isEdition, validateEdition } from "../src/lib/editorial/validate.ts";

const sources = [
  {
    label: "Example Newsroom",
    url: "https://example.com/report",
    publishedAt: "2026-09-09",
  },
] as const;

const choice: ChoiceQuestion = {
  id: "choice-1",
  kind: "choice",
  prompt: "Which answer is correct?",
  explanation: "B is the sourced answer.",
  sources,
  options: [
    { id: "a", label: "A" },
    { id: "b", label: "B" },
  ],
  correctId: "b",
};

const imageChoice: ImageChoiceQuestion = {
  id: "image-1",
  kind: "image-choice",
  prompt: "Pick the second image.",
  explanation: "The second image matches the prompt.",
  sources,
  options: ["one", "two"].map((id) => ({
    id,
    label: id,
    image: {
      src: `/editorial/${id}.webp`,
      alt: `${id} example`,
      creator: "Example Studio",
      sourceUrl: `https://example.com/images/${id}`,
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    },
  })),
  correctId: "two",
};

const order: OrderQuestion = {
  id: "order-1",
  kind: "order",
  prompt: "Put these in order.",
  explanation: "They occurred first, second, then third.",
  sources,
  items: [
    { id: "first", label: "First" },
    { id: "second", label: "Second" },
    { id: "third", label: "Third" },
  ],
  correctOrder: ["first", "second", "third"],
};

const match: MatchQuestion = {
  id: "match-1",
  kind: "match",
  prompt: "Match each person to a role.",
  explanation: "Each source identifies one role.",
  sources,
  left: [
    { id: "p1", label: "Person one" },
    { id: "p2", label: "Person two" },
  ],
  right: [
    { id: "r1", label: "Role one" },
    { id: "r2", label: "Role two" },
  ],
  correctPairs: { p1: "r2", p2: "r1" },
};

const edition: Edition = {
  id: "2026-09-10",
  seriesId: "news-world",
  version: 1,
  title: "World News Quiz",
  description: "A sourced weekly quiz.",
  publishedAt: "2026-09-10",
  audience: "general",
  questions: [choice, imageChoice, order, match],
};

function clone(value: unknown) {
  return JSON.parse(JSON.stringify(value));
}

describe("validateAnswer", () => {
  test("accepts complete answers of the shape required by each question", () => {
    assert.equal(validateAnswer(choice, "a"), true);
    assert.equal(validateAnswer(imageChoice, "two"), true);
    assert.equal(validateAnswer(order, ["third", "first", "second"]), true);
    assert.equal(validateAnswer(match, { p1: "r1", p2: "r2" }), true);
  });

  test("rejects unknown, partial, duplicate, and extra ids", () => {
    assert.equal(validateAnswer(choice, "missing"), false);
    assert.equal(validateAnswer(order, ["first", "first", "third"]), false);
    assert.equal(validateAnswer(match, { p1: "r2" }), false);
    assert.equal(validateAnswer(match, { p1: "r2", p2: "r1", p3: "r1" }), false);
    assert.equal(validateAnswer(match, { p1: "r2", p2: "r2" }), false);
  });
});

describe("scoreQuestion", () => {
  test("awards one full-credit boolean for exact answers", () => {
    assert.equal(scoreQuestion(choice, "b"), true);
    assert.equal(scoreQuestion(imageChoice, "two"), true);
    assert.equal(scoreQuestion(order, ["first", "second", "third"]), true);
    assert.equal(scoreQuestion(match, { p1: "r2", p2: "r1" }), true);
  });

  test("gives no partial credit and returns false for malformed answers", () => {
    assert.equal(scoreQuestion(choice, "a"), false);
    assert.equal(scoreQuestion(imageChoice, null), false);
    assert.equal(scoreQuestion(order, ["first", "third", "second"]), false);
    assert.equal(scoreQuestion(match, { p1: "r2", p2: "r2" }), false);
  });
});

describe("validateEdition", () => {
  test("accepts a complete JSON round trip and narrows it as Edition", () => {
    const input: unknown = clone(edition);
    assert.deepEqual(validateEdition(input), []);
    assert.equal(isEdition(input), true);
  });

  test("validates real dates, versions, audience, question ids, and strict fields", () => {
    const input = clone(edition);
    input.publishedAt = "2026-02-30";
    input.version = 0;
    input.audience = "adult";
    input.questions[1].id = "choice-1";
    input.unreviewed = true;
    const errors = validateEdition(input);
    assert.ok(errors.some((error) => error.includes("publishedAt")));
    assert.ok(errors.some((error) => error.includes("positive integer")));
    assert.ok(errors.some((error) => error.includes("audience")));
    assert.ok(errors.some((error) => error.includes("duplicate question id")));
    assert.ok(errors.some((error) => error.includes("unexpected field")));
  });

  test("requires complete HTTPS source provenance", () => {
    const input = clone(edition);
    input.questions[0].sources[0].url = "http://example.com/report";
    input.questions[0].sources[0].publishedAt = "09/09/2026";
    input.questions[2].sources = [];
    const errors = validateEdition(input);
    assert.ok(errors.some((error) => error.includes("sources[0].url")));
    assert.ok(errors.some((error) => error.includes("sources[0].publishedAt")));
    assert.ok(errors.some((error) => error.includes("at least one source")));
  });

  test("requires image accessibility, creator attribution, and licence links", () => {
    const input = clone(edition);
    input.questions[1].options[0].image.alt = "";
    input.questions[1].options[0].image.creator = "";
    input.questions[1].options[0].image.sourceUrl = "javascript:alert(1)";
    input.questions[1].options[0].image.licenseUrl = "/licence";
    const errors = validateEdition(input);
    assert.ok(errors.some((error) => error.includes("image.alt")));
    assert.ok(errors.some((error) => error.includes("image.creator")));
    assert.ok(errors.some((error) => error.includes("image.sourceUrl")));
    assert.ok(errors.some((error) => error.includes("image.licenseUrl")));
  });

  test("rejects invalid choice keys and non-permutation order keys", () => {
    const input = clone(edition);
    input.questions[0].correctId = "missing";
    input.questions[2].correctOrder = ["first", "second", "second"];
    const errors = validateEdition(input);
    assert.ok(errors.some((error) => error.includes("correctId")));
    assert.ok(errors.some((error) => error.includes("exact permutation")));
  });

  test("requires match sides of equal size and a complete bijection", () => {
    const input = clone(edition);
    input.questions[3].right.pop();
    input.questions[3].correctPairs = { p1: "r1", p2: "r1" };
    const errors = validateEdition(input);
    assert.ok(errors.some((error) => error.includes("equally sized")));
    assert.ok(errors.some((error) => error.includes("complete bijection")));
  });

  test("rejects non-object and unknown question input without throwing", () => {
    assert.deepEqual(validateEdition(null), ["edition: must be an object"]);
    const input = clone(edition);
    input.questions[0] = { id: "future", kind: "prediction" };
    const errors = validateEdition(input);
    assert.ok(errors.some((error) => error.includes("kind")));
    assert.equal(isEdition(input), false);
  });
});
