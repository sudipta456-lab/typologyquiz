import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import sitemap from "../src/app/sitemap.ts";
import { analyticsPaths } from "../src/lib/analytics-manifest.generated";
import { CATEGORIES } from "../src/lib/interactive/categories";
import { SUMMARIES } from "../src/lib/interactive/catalog.generated";
import { scoreQuestion, scoreQuiz } from "../src/lib/interactive/engine";
import { serializeProgress } from "../src/lib/interactive/progress";
import { QUIZZES } from "../src/lib/interactive/registry";
import type { GraphQuestion, Quiz } from "../src/lib/interactive/types";
import { socialMetadata } from "../src/lib/page-metadata";
import { SITE } from "../src/lib/site";

const ROUTE = "/methodology/interactive-quizzes/";
const URL_ = `https://typologyquiz.com${ROUTE}`;
const read = (path: string): string => readFileSync(path, "utf8");
const page = read("src/app/methodology/interactive-quizzes/page.tsx");
const llms = read("public/llms.txt");

const base = { sectionId: "s", prompt: "p", explanation: "e", sourceIds: [] as string[] };
const opts = (...ids: string[]) => ids.map((id) => ({ id, label: id }));

test("the facts the methodology page states hold for the real banks", () => {
  const total = QUIZZES.reduce((sum, quiz) => sum + quiz.questions.length, 0);
  assert.equal(SUMMARIES.length, QUIZZES.length);
  assert.equal(CATEGORIES.length, 10);
  assert.equal(SUMMARIES.reduce((sum, quiz) => sum + quiz.questionCount, 0), total);
  assert.equal(new Set(QUIZZES.flatMap((quiz) => quiz.questions.map((q) => q.kind))).size, new Set(SUMMARIES.flatMap((quiz) => quiz.formats)).size);
  assert.equal(new Set(SUMMARIES.flatMap((quiz) => quiz.formats)).size, 10);
  // "two or three sections" and "at least two formats" are prose claims, not derived.
  for (const quiz of QUIZZES) {
    assert.ok(quiz.sections.length >= 2 && quiz.sections.length <= 3, `${quiz.id} sections`);
    assert.ok(new Set(quiz.questions.map((q) => q.kind)).size >= 2, `${quiz.id} formats`);
  }
  assert.ok(QUIZZES.some((quiz) => quiz.questions.some((q) => q.showIf)), "page claims branching quizzes");
  for (const quiz of QUIZZES) for (const q of quiz.questions) if (q.kind === "audio") assert.ok(q.transcript.trim().length > 0 && q.tones.length > 0, `${quiz.id} ${q.id} transcript`);
  for (const slug of page.match(/EXAMPLE_SLUGS = \[([^\]]*)\]/)![1].split(",").map((s) => s.trim().replace(/"/g, ""))) {
    assert.ok(SUMMARIES.some((quiz) => quiz.slug === slug), `example quiz ${slug} is not in the catalog`);
  }
  const rows = new Set([...page.matchAll(/\{ kind: "(\w+)", label:/g)].map((match) => match[1]));
  for (const quiz of SUMMARIES) assert.ok(rows.has(quiz.kind), `quiz kind ${quiz.kind} is missing from the page table`);
  assert.ok(read("src/components/interactive/QuizPlayer.tsx").includes("[2, 3, 4].map"), "page says two to four players");
});

test("scoring claims on the page: equal weights, partial credit, false links cost credit, reflection is never stored", () => {
  const quiz: Quiz = {
    id: "T-01", slug: "t", categoryId: "c", title: "T", description: "d", kind: "knowledge", version: 1, minutes: 1,
    sections: [{ id: "s", title: "S" }], sources: [],
    questions: [
      { ...base, id: "q1", kind: "choice", options: opts("a", "b"), correct: "a" },
      { ...base, id: "q2", kind: "choice", options: opts("a", "b"), correct: "a" },
    ],
  };
  const half = scoreQuiz(quiz, { q1: "a", q2: "b" });
  assert.deepEqual([half.total, half.correct, half.percent], [2, 1, 50]);

  const graph: GraphQuestion = { ...base, id: "g", kind: "graph", left: opts("l1", "l2"), right: opts("r1", "r2"), edges: [["l1", "r1"], ["l2", "r2"]] };
  const exact = scoreQuestion(graph, [["l1", "r1"], ["l2", "r2"]]) as number;
  const partial = scoreQuestion(graph, [["l1", "r1"]]) as number;
  const padded = scoreQuestion(graph, [["l1", "r1"], ["l2", "r2"], ["l1", "r2"], ["l2", "r1"]]) as number;
  assert.equal(exact, 1);
  assert.ok(partial > 0 && partial < 1);
  assert.ok(padded < exact, "ticking every link must not earn full credit");

  const withReflection = QUIZZES.find((candidate) => candidate.questions.some((q) => q.kind === "reflection"));
  assert.ok(withReflection, "page describes optional reflection tasks");
  const reflection = withReflection.questions.find((q) => q.kind === "reflection")!;
  assert.ok(!serializeProgress(withReflection, { [reflection.id]: "PRIVATE_REFLECTION_TEXT" }, 0).includes("PRIVATE_REFLECTION_TEXT"));
});

test("scored-task counts can be below authored counts: real banks hold ungraded route choices and predictions", () => {
  const ungraded = (quiz: Quiz) => quiz.questions.filter((q) => scoreQuestion(q, undefined) === null);
  for (const id of ["SN-15", "LW-10", "SN-23"]) {
    const quiz = QUIZZES.find((candidate) => candidate.id === id)!;
    assert.ok(["knowledge", "logic"].includes(quiz.kind), `${id} kind`);
    assert.ok(ungraded(quiz).length > 0, `${id} has ungraded tasks`);
  }
  // SN-23: five scored of eight authored; two scored branches are mutually exclusive.
  const sn23 = QUIZZES.find((quiz) => quiz.id === "SN-23")!;
  assert.equal(sn23.questions.length, 8);
  assert.equal(sn23.questions.filter((q) => scoreQuestion(q, undefined) !== null).length, 5);
  assert.equal(scoreQuiz(sn23, { q1: "a" }).total, 4);
  assert.equal(scoreQuiz(sn23, { q1: "b" }).total, 4);
  // An ungraded prediction that does not select a branch cannot move accuracy.
  const target = ungraded(sn23).find((q) => q.id === "q2");
  assert.ok(target, "SN-23 has an ungraded choice task");
  assert.equal(target.kind, "choice");
  if (target.kind !== "choice") throw new Error("Expected an ungraded choice task");
  const blank = scoreQuiz(sn23, {});
  const answered = scoreQuiz(sn23, { [target.id]: target.options[0].id });
  assert.deepEqual([answered.total, answered.correct], [blank.total, blank.correct]);
  // The page states the weaker claims, not the old "every task" absolutes, and the share and analytics wording.
  assert.ok(page.includes("route choices and explicitly ungraded predictions do not count"));
  assert.ok(page.includes("ungraded route choices only choose the next case"));
  assert.ok(!/Every task (has a checkable|can be solved)/.test(page));
  assert.ok(page.includes("No answers or results are automatically encoded in the URL"));
  assert.ok(!page.includes("never your answers or results"));
  assert.ok(page.includes("start counts are not unique people or unique attempts"));
});

test("the page states its limits and AI-assistance disclosure, makes no hard-coded counts and no superiority or ranking promises", () => {
  for (const disclosure of ["were authored with AI assistance", "not an independent human fact-check of every item", "not psychometric validation", "does not call any external AI service", "has not been scientifically validated"]) {
    assert.ok(page.includes(disclosure), disclosure);
  }
  assert.ok(!/\b250\b|\b2,?000\b|\b10 categories\b/.test(page), "counts must come from the catalog");
  assert.ok(!/better than|best quiz|only site|competitor|rank higher|top results|aggregateRating|ratingValue/i.test(page));
});

test("the methodology route is discoverable: linked from its neighbors, in the sitemap, manifest and llms.txt", () => {
  for (const source of ["src/app/methodology/page.tsx", "src/app/quizzes/page.tsx", "src/app/quizzes/[slug]/page.tsx"]) assert.ok(read(source).includes(`href="${ROUTE}"`), source);
  assert.equal(sitemap().filter((entry) => entry.url === URL_).length, 1);
  assert.ok(analyticsPaths.includes(ROUTE), "run npm run generate:analytics");
  const links = llms.split("\n").filter((line) => line.includes(`](${URL_})`));
  assert.ok(links.length >= 1);
  const section = llms.split("## Interactive quiz methodology\n")[1].split("\n## ")[0];
  assert.ok(section.includes(URL_));
  assert.ok(section.includes(`${SUMMARIES.length} interactive quizzes: ${SUMMARIES.reduce((n, quiz) => n + quiz.questionCount, 0)} authored tasks across ${CATEGORIES.length} categories`));
  for (const required of ["not an independent human fact-check", "psychometric validation", "calls no external AI service", "explicitly fictional datasets"]) assert.ok(section.includes(required), required);
  assert.ok(!/guarantee|will be (indexed|ranked)|ranking/i.test(section), "llms.txt must not promise indexing or ranking");
});

test("socialMetadata names the page's own canonical URL, and the hub pages that relied on the root fallback use it", () => {
  const meta = socialMetadata({ path: "/friends/", title: "T", description: "D" });
  assert.equal((meta.openGraph as { url: string }).url, "https://typologyquiz.com/friends/");
  assert.equal((meta.openGraph as { title: string }).title, "T · TypologyQuiz.com");
  assert.deepEqual((meta.twitter as { images: string[] }).images, [`${SITE.url}${SITE.ogImage}`]);
  const custom = socialMetadata({ path: "/daily/", title: "T", description: "D", image: "https://typologyquiz.com/og/daily.png" });
  assert.deepEqual((custom.twitter as { images: string[] }).images, ["https://typologyquiz.com/og/daily.png"]);
  for (const source of ["src/app/driving/[jurisdiction]/[setId]/take/page.tsx", "src/app/friends/page.tsx", "src/app/tests/layout.tsx", "src/app/weekly/page.tsx", "src/app/daily/layout.tsx", "src/app/about/page.tsx", "src/app/methodology/page.tsx", "src/app/credits/page.tsx"]) {
    assert.ok(read(source).includes("socialMetadata("), source);
  }
});

test("public copy does not overstate review, scoring or fictionality", () => {
  const main = read("src/app/methodology/page.tsx");
  for (const text of [page, llms]) {
    assert.ok(!/adjudicat/i.test(text), "no claim that an operator adjudicated findings");
    assert.ok(!/no automated analysis/i.test(text));
    assert.ok(!/(places|numbers)[^.]*in original cases are fictional/i.test(text));
    assert.ok(!/(best|only|unique|validated) (quiz|collection|site)/i.test(text));
  }
  assert.ok(page.includes("Corrections were applied") || page.includes("corrections were applied"));
  assert.ok(page.includes("not an independent human fact-check of every item"));
  assert.ok(main.includes("href=\"/tests/\"") && main.includes("href=\"/quizzes/\"") && main.includes("href=\"/trivia/\"") && main.includes("href=\"/driving/\""));
});

test("the site description covers every section but keeps the brand and contact constants", () => {
  for (const word of ["personality", "trivia", "interactive", "driving"]) assert.ok(SITE.description.toLowerCase().includes(word), word);
  assert.deepEqual([SITE.name, SITE.url, SITE.email, SITE.twitterHandle], ["TypologyQuiz", "https://typologyquiz.com", "hello@typologyquiz.com", "@typologyquiz"]);
});
