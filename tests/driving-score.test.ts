import assert from "node:assert/strict";
import test from "node:test";
import { estimateReadiness } from "../src/lib/driving/adaptive";
import { generateMetadata as generateJurisdictionMetadata } from "../src/app/driving/[jurisdiction]/page";
import { generateMetadata as generateResultsMetadata } from "../src/app/driving/[jurisdiction]/[setId]/results/page";
import { encodeDrivingResult, decodeDrivingResult } from "../src/lib/driving/encode";
import { buildStudyReminderICS } from "../src/lib/driving/reminder";
import { recordAttempt, summarize } from "../src/lib/driving/progress";
import { neededToPass, officialPassVerdict, scoreDrivingSet } from "../src/lib/driving/score";
import { jurisdictionJsonLd } from "../src/lib/driving/structured-data";
import type { DrivingQuestion, DrivingTestSet, Jurisdiction, OfficialTestFormat } from "../src/lib/driving/types";

function question(id: string, correctIndex = 0): DrivingQuestion {
  return {
    id,
    topic: "rules",
    question: `Question ${id}?`,
    choices: ["A", "B", "C", "D"],
    correctIndex,
    explanation: "The correct rule applies in this situation.",
  };
}

const set: DrivingTestSet = {
  id: "set-1",
  setNumber: 1,
  title: "Practice",
  difficulty: "medium",
  description: "A short practice set.",
  questions: [question("q1"), question("q2"), question("q3"), question("q4")],
};

function jurisdiction(officialTest: OfficialTestFormat): Jurisdiction {
  return {
    slug: "sample",
    name: "Sample",
    code: "S",
    country: "US",
    countryLabel: "United States",
    licenceName: "Learner Permit",
    intro: "Practice the handbook rules.",
    officialTest,
    handbookName: "Sample Driver Manual",
    handbookUrl: "https://example.gov/manual.pdf",
    contentDate: "2026-09-20",
    sets: [set],
  };
}

const knownFormat: OfficialTestFormat = {
  questionCount: 25,
  passCount: 20,
  passLabel: "20 of 25 (80%)",
};

const unknownFormat: OfficialTestFormat = {
  questionCount: null,
  passCount: null,
  passLabel: "Not published by the licensing authority",
};

test("known official marks keep scaled pass and fail behavior", () => {
  const j = jurisdiction(knownFormat);
  assert.equal(neededToPass(j, 4), 4);
  assert.equal(officialPassVerdict(true, j), true);
  assert.equal(officialPassVerdict(false, j), false);
  assert.equal(
    scoreDrivingSet(j, set, { q1: 0, q2: 0, q3: 0 }).passed,
    false
  );
  assert.equal(
    scoreDrivingSet(j, set, { q1: 0, q2: 0, q3: 0, q4: 0 }).passed,
    true
  );
});

test("unknown official marks produce a practice score, not a pass verdict", () => {
  const j = jurisdiction(unknownFormat);
  const result = scoreDrivingSet(j, set, { q1: 0, q2: 0, q3: 0, q4: 0 });
  assert.equal(result.percent, 100);
  assert.equal(result.passed, null);
  assert.equal(neededToPass(j, set.questions.length), null);
  assert.equal(estimateReadiness(j, [100, 100, 100, 100]).required, null);
  assert.equal(estimateReadiness(j, [100, 100, 100, 100]).ready, null);
  assert.match(estimateReadiness(j, [100]).message, /cannot estimate exam readiness/i);
  assert.equal(officialPassVerdict(true, j), null);
  assert.equal(officialPassVerdict(false, j), null);
});

test("unknown verdict survives a shared result URL round trip", () => {
  const result = scoreDrivingSet(jurisdiction(unknownFormat), set, {
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
  });
  assert.equal(decodeDrivingResult(encodeDrivingResult(result))?.passed, null);
});

test("unknown marks never accumulate as passed sets in local progress", () => {
  const stored = new Map<string, string>();
  const original = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: {
      getItem: (key: string) => stored.get(key) ?? null,
      setItem: (key: string, value: string) => stored.set(key, value),
    },
  });

  try {
    const result = scoreDrivingSet(jurisdiction(unknownFormat), set, {
      q1: 0,
      q2: 0,
      q3: 0,
      q4: 0,
    });
    recordAttempt(result);
    const summary = summarize("sample", 1, false);
    assert.equal(summary.setsPassed, null);
    assert.equal(summary.setsAttempted, 1);
    assert.equal(summary.averageBest, 100);
  } finally {
    if (original) Object.defineProperty(globalThis, "localStorage", original);
    else Reflect.deleteProperty(globalThis, "localStorage");
  }
});

test("study reminders omit an unpublished pass-mark claim", () => {
  const testDate = new Date(2035, 4, 18);
  const unknown = buildStudyReminderICS({
    jurisdiction: jurisdiction(unknownFormat),
    testDate,
    url: "https://example.test/practice",
    leadDays: [],
  });
  const known = buildStudyReminderICS({
    jurisdiction: jurisdiction(knownFormat),
    testDate,
    url: "https://example.test/practice",
    leadDays: [],
  });
  assert.doesNotMatch(unknown, /Pass mark:/);
  assert.match(unknown, /official passing score is not published/i);
  assert.match(known, /Pass mark: 20 of 25 \(80%\)\./);
});

test("quiz schema reports the practice bank size without inventing an exam format", () => {
  const graph = (jurisdictionJsonLd(jurisdiction(unknownFormat)) as {
    "@graph": Record<string, unknown>[];
  })["@graph"];
  const quiz = graph.find((item) => item["@type"] === "Quiz");

  assert.equal(quiz?.numberOfQuestions, set.questions.length);
  assert.equal("passCount" in (quiz ?? {}), false);
  assert.equal("passLabel" in (quiz ?? {}), false);
});

test("unknown official scoring is described accurately in both page metadata routes", async () => {
  const page = await generateJurisdictionMetadata({
    params: Promise.resolve({ jurisdiction: "wyoming" }),
  });
  const results = await generateResultsMetadata({
    params: Promise.resolve({ jurisdiction: "wyoming", setId: "set-1" }),
  });

  assert.match(page.description ?? "", /practice scores/i);
  assert.doesNotMatch(page.description ?? "", /real pass mark/i);
  assert.match(results.description ?? "", /practice score because the official passing score is not published/i);
  assert.doesNotMatch(results.description ?? "", /checked against the real pass mark/i);
});
