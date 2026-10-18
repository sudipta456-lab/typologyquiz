import assert from "node:assert/strict";
import test from "node:test";
import { analyticsInteractiveQuizzes } from "../src/lib/analytics-manifest.generated.ts";
import { analyticsPath, createAnalyticsController } from "../src/lib/analytics.ts";
import { CATEGORIES } from "../src/lib/interactive/categories.ts";

// Complements the analytics test in interactive-content.test.ts: an interactive start/complete event is
// only emitted from that quiz's own canonical page, never from hubs, categories, private or query paths.
test("interactive events are rejected anywhere but the quiz's own route, and carry identity only", () => {
  const [quiz] = analyticsInteractiveQuizzes;
  const params = { quiz_id: quiz.id, quiz_version: 1, answers: "SECRET", score: 99, reflection: "SECRET" };
  const offRoutes = [
    "/quizzes/",
    `/quizzes/category/${CATEGORIES[0].id}/`,
    `/quizzes/${quiz.slug}/?r=SECRET`,
    `/quizzes/${quiz.slug}/#SECRET`,
    `/quizzes/${quiz.slug}/results/`,
    "/private/",
    "/tests/",
  ];
  for (const event of ["interactive_quiz_start", "interactive_quiz_complete"] as const) {
    for (const route of offRoutes) {
      const calls: unknown[][] = [];
      const controller = createAnalyticsController((...args) => { calls.push(args); });
      controller.page(analyticsPath(route));
      controller.event(event, params);
      assert.equal(calls.filter((call) => call[1] === event).length, 0, `${event} leaked on ${route}`);
    }
    const calls: unknown[][] = [];
    const controller = createAnalyticsController((...args) => { calls.push(args); });
    controller.page(`/quizzes/${quiz.slug}/`);
    controller.event(event, params);
    const sent = calls.filter((call) => call[1] === event);
    assert.equal(sent.length, 1);
    const payload = sent[0][2] as Record<string, unknown>;
    assert.equal(payload.quiz_id, quiz.id);
    assert.equal(payload.quiz_version, 1);
    assert.ok(!JSON.stringify(calls).includes("SECRET"));
    for (const key of ["answers", "score", "reflection"]) assert.ok(!(key in payload), key);
  }
});
