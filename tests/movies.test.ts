import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { GROUP_TRIVIA_CATALOG } from "../worker/group-catalog.js";
import { analyticsMovieQuestionCount, analyticsMovieQuizzes, analyticsPaths } from "../src/lib/analytics-manifest.generated.ts";
import { analyticsPageGroup, analyticsPath, safeEventParameters } from "../src/lib/analytics.ts";
import { getGroupPlayUrl, getGroupQuizPath } from "../src/lib/group/paths.ts";
import { buildMovieRun, elapsedMs, missedAnswers, movieRunReducer, scoreHeadline, scoreMovieRun, startMovieRun, type MovieRunState, type PresentedQuestion } from "../src/lib/trivia/movie-engine.ts";
import { createCompletionReporter, describeCompletionFailure, isTransientGroupError, movieGroupPayload } from "../src/lib/trivia/movie-group.ts";
import { getMovieQuiz, MOVIE_CHOICE_IDS, MOVIE_GROUP_PREFIX, MOVIE_QUIZ_QUESTION_COUNT, MOVIE_QUIZZES, movieGroupSlug, movieQuizPath } from "../src/lib/trivia/movies.ts";
import sitemap from "../src/app/sitemap.ts";

const OFFICIAL_HOSTS = new Set(["movies.disney.com", "www.sonypictures.com", "www.starwars.com"]);
const EM_DASH = /—/;
const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/u;
const ALL_QUESTIONS = MOVIE_QUIZZES.flatMap((quiz) => quiz.questions.map((question) => ({ quiz, question })));

test("collection has exactly 15 distinct quizzes of 8 questions each", () => {
  assert.equal(MOVIE_QUIZZES.length, 15);
  assert.equal(new Set(MOVIE_QUIZZES.map((quiz) => quiz.slug)).size, 15);
  assert.equal(new Set(MOVIE_QUIZZES.map((quiz) => quiz.title)).size, 15);
  assert.equal(new Set(MOVIE_QUIZZES.map((quiz) => quiz.motif)).size, 15, "each cover uses its own motif");
  for (const quiz of MOVIE_QUIZZES) {
    assert.match(quiz.slug, /^[a-z0-9]+(-[a-z0-9]+)*$/);
    assert.equal(quiz.questions.length, MOVIE_QUIZ_QUESTION_COUNT, quiz.slug);
    assert.ok(quiz.questions.length >= 8);
    assert.ok(quiz.seoDescription.length >= 80 && quiz.seoDescription.length <= 200, `${quiz.slug} description length`);
    assert.ok(quiz.spoilerNote.length > 10 && quiz.featuring.length >= 3, quiz.slug);
    assert.match(quiz.accent, /^#[0-9a-f]{6}$/i);
    for (const related of quiz.related) assert.ok(getMovieQuiz(related) && related !== quiz.slug, `${quiz.slug} related ${related}`);
    assert.ok(quiz.related.length >= 2, `${quiz.slug} has related quizzes`);
  }
  assert.equal(ALL_QUESTIONS.length, 120);
});

test("every question has four unique choices, one valid correct id, and a useful explanation", () => {
  const prompts = new Set<string>();
  const questionIds = new Set<string>();
  for (const { quiz, question } of ALL_QUESTIONS) {
    const label = `${quiz.slug}/${question.id}`;
    assert.ok(!questionIds.has(question.id), `duplicate question id ${label}`);
    questionIds.add(question.id);
    assert.ok(!prompts.has(question.prompt.toLowerCase()), `duplicate prompt ${label}`);
    prompts.add(question.prompt.toLowerCase());
    assert.deepEqual(question.choices.map((choice) => choice.id), [...MOVIE_CHOICE_IDS], label);
    const texts = question.choices.map((choice) => choice.text.trim().toLowerCase());
    assert.equal(new Set(texts).size, 4, `${label} duplicate choices`);
    assert.equal(question.choices.filter((choice) => choice.id === question.correctId).length, 1, label);
    assert.ok(question.prompt.length >= 30, label);
    assert.ok(question.explanation.length >= 60, `${label} explanation too short`);
    // The correct answer must not simply appear verbatim in the prompt.
    const correct = question.choices.find((choice) => choice.id === question.correctId)!.text.toLowerCase();
    assert.ok(!question.prompt.toLowerCase().includes(correct) || correct.length < 4, `${label} prompt leaks answer`);
    for (const text of [question.prompt, question.explanation, ...question.choices.map((choice) => choice.text), quiz.title, quiz.tagline, quiz.seoDescription, quiz.spoilerNote]) {
      assert.ok(!EM_DASH.test(text) && !EMOJI.test(text), `${label} banned character`);
    }
  }
});

test("correct answers are spread across all four positions", () => {
  const counts = { a: 0, b: 0, c: 0, d: 0 };
  for (const { question } of ALL_QUESTIONS) counts[question.correctId]++;
  for (const id of MOVIE_CHOICE_IDS) assert.ok(counts[id] >= 15 && counts[id] <= 50, `slot ${id} has ${counts[id]}`);
});

test("every question cites an official source with a specific supported claim", () => {
  for (const { quiz, question } of ALL_QUESTIONS) {
    const label = `${quiz.slug}/${question.id}`;
    const url = new URL(question.source.url);
    assert.equal(url.protocol, "https:", label);
    assert.ok(OFFICIAL_HOSTS.has(url.hostname), `${label} host ${url.hostname}`);
    assert.ok(!/imdb|sporcle|wikipedia|fandom/i.test(question.source.url), label);
    assert.ok(question.source.label.length > 10 && question.source.claim.length >= 30, label);
    assert.ok(question.source.terms.length >= 1 && question.source.terms.every((term) => term === term.toLowerCase() && term.length >= 2), `${label} terms`);
  }
});

test("ambiguous remakes and sequels are named by year in answer choices", () => {
  const ambiguous = /^(The Karate Kid|Ghostbusters|Jumanji|The Lion King|Beauty and the Beast|Aladdin|Mulan|The Parent Trap|Lilo & Stitch)\b/;
  for (const { quiz, question } of ALL_QUESTIONS) {
    for (const choice of question.choices) {
      if (ambiguous.test(choice.text) && !/ and the | II$|: /.test(choice.text) ) assert.match(choice.text, /\(\d{4}\)/, `${quiz.slug}/${question.id}: ${choice.text}`);
    }
  }
});

test("group slugs map to routes through one central helper", () => {
  for (const quiz of MOVIE_QUIZZES) {
    const slug = movieGroupSlug(quiz.slug);
    assert.equal(slug, `${MOVIE_GROUP_PREFIX}${quiz.slug}`);
    assert.equal(getGroupQuizPath(slug), movieQuizPath(quiz.slug));
    assert.equal(getGroupQuizPath(slug), `/trivia/movies/${quiz.slug}/`);
    const entry = (GROUP_TRIVIA_CATALOG as Record<string, { title: string; total: number; rankByTime?: boolean }>)[slug];
    assert.ok(entry, `${slug} missing from generated Worker catalog`);
    assert.deepEqual(entry, { title: quiz.title, total: MOVIE_QUIZ_QUESTION_COUNT, rankByTime: true });
  }
  // Original trivia slugs keep their existing routes and catalog entries.
  assert.equal(getGroupQuizPath("planets"), "/trivia/planets/");
  assert.equal(getGroupQuizPath("us-states"), "/trivia/us-states/");
  assert.ok("planets" in GROUP_TRIVIA_CATALOG && "us-states" in GROUP_TRIVIA_CATALOG);
  for (const bad of ["", "movies-", "movies-/../x", "../secrets", "Movies-Day-Jobs", "a b", "x".repeat(81), "movies-" + "x".repeat(80)]) assert.equal(getGroupQuizPath(bad), null, bad);
  assert.equal(getGroupQuizPath(undefined as unknown as string), null);
  assert.equal(getGroupPlayUrl("movies-day-jobs", "ABC234", "seed value/1"), "/trivia/movies/day-jobs/?group=ABC234&seed=seed%20value%2F1");
  assert.equal(getGroupPlayUrl("planets", "ABC234", "s".repeat(16)), `/trivia/planets/?group=ABC234&seed=${"s".repeat(16)}`);
  assert.equal(getGroupPlayUrl("../x", "ABC234", "s".repeat(16)), null);
});

test("the lobby sends players through the central helper", () => {
  const lobby = readFileSync("src/app/group/page.tsx", "utf8");
  assert.ok(lobby.includes("getGroupPlayUrl(room.slug"));
  assert.ok(!lobby.includes("`/trivia/${room.slug}/"), "no hard-coded trivia path remains");
});

const SEED = "s3ed-abcdefghij";
const idsOf = (run: PresentedQuestion[]) => run.map((question) => question.id);

test("seeded runs shuffle questions and choices identically for every player", () => {
  const quiz = MOVIE_QUIZZES[0];
  const a = buildMovieRun(quiz, SEED);
  const b = buildMovieRun(quiz, SEED);
  assert.deepEqual(a, b);
  assert.equal(a.length, MOVIE_QUIZ_QUESTION_COUNT);
  assert.deepEqual([...idsOf(a)].sort(), quiz.questions.map((question) => question.id).sort());
  assert.notDeepEqual(idsOf(a), idsOf(buildMovieRun(quiz, "another-seed-value")), "a different seed gives a different order");
  assert.notDeepEqual(idsOf(a), quiz.questions.map((question) => question.id), "seed changes authored order");
  for (const question of a) {
    const original = quiz.questions.find((item) => item.id === question.id)!;
    assert.equal(question.correctId, original.correctId);
    assert.deepEqual(question.choices.map((choice) => choice.id).sort(), ["a", "b", "c", "d"]);
    for (const choice of question.choices) assert.equal(choice.text, original.choices.find((item) => item.id === choice.id)!.text);
  }
  // Quiz slug is part of the stream, so two quizzes in one room never share a pattern accidentally.
  assert.notDeepEqual(buildMovieRun(MOVIE_QUIZZES[1], SEED).map((q) => q.choices.map((c) => c.id).join("")), buildMovieRun(MOVIE_QUIZZES[0], SEED).map((q) => q.choices.map((c) => c.id).join("")));
});

test("invalid seeds and solo runs use the fallback random stream", () => {
  const quiz = MOVIE_QUIZZES[2];
  let calls = 0;
  const counting = () => { calls++; return 0.25; };
  buildMovieRun(quiz, null, counting);
  assert.ok(calls > 0);
  calls = 0;
  buildMovieRun(quiz, "short", counting);
  assert.ok(calls > 0, "malformed seed is not trusted");
  calls = 0;
  buildMovieRun(quiz, SEED, counting);
  assert.equal(calls, 0, "valid seed ignores the fallback stream");
});

function playRun(run: PresentedQuestion[], picks: ("right" | "wrong")[]): MovieRunState {
  let state = startMovieRun(run.length);
  picks.forEach((pick, index) => {
    const question = run[index];
    const choice = pick === "right" ? question.correctId : question.choices.find((item) => item.id !== question.correctId)!.id;
    state = movieRunReducer(state, { type: "answer", index, choice }, run);
    state = movieRunReducer(state, { type: "next", from: index }, run);
  });
  return state;
}

test("scoring counts correct answers and reports missed ones", () => {
  const run = buildMovieRun(MOVIE_QUIZZES[3], SEED);
  const state = playRun(run, ["right", "wrong", "right", "right", "wrong", "right", "right", "right"]);
  assert.equal(state.done, true);
  assert.equal(scoreMovieRun(state, run), 6);
  const missed = missedAnswers(state, run);
  assert.equal(missed.length, 2);
  assert.deepEqual(missed.map((item) => item.question.id), [run[1].id, run[4].id]);
  for (const item of missed) assert.notEqual(item.picked?.id, item.correct.id);
  assert.equal(scoreHeadline(8, 8), "Perfect run");
  assert.equal(scoreHeadline(6, 8), "Strong showing");
  assert.equal(scoreHeadline(4, 8), "Solid effort");
  assert.equal(scoreHeadline(1, 8), "Warm-up lap");
});

test("rapid double taps cannot score twice, skip a round, or change a locked answer", () => {
  const run = buildMovieRun(MOVIE_QUIZZES[4], SEED);
  const right = run[0].correctId;
  const wrong = run[0].choices.find((item) => item.id !== right)!.id;
  let state = startMovieRun(run.length);
  state = movieRunReducer(state, { type: "answer", index: 0, choice: right }, run);
  const once = state;
  state = movieRunReducer(state, { type: "answer", index: 0, choice: right }, run);
  state = movieRunReducer(state, { type: "answer", index: 0, choice: wrong }, run);
  assert.deepEqual(state, once, "locked answer ignores repeats and changes");
  assert.equal(scoreMovieRun(state, run), 1);
  state = movieRunReducer(state, { type: "next", from: 0 }, run);
  const afterNext = state;
  state = movieRunReducer(state, { type: "next", from: 0 }, run);
  assert.deepEqual(state, afterNext, "second next from the same round is ignored");
  assert.equal(state.index, 1);
  state = movieRunReducer(state, { type: "answer", index: 0, choice: wrong }, run);
  assert.deepEqual(state, afterNext, "late tap for the previous round is ignored");
  assert.deepEqual(movieRunReducer(state, { type: "next", from: 1 }, run), state, "cannot advance an unanswered round");
  assert.deepEqual(movieRunReducer(state, { type: "answer", index: 1, choice: "z" as never }, run), state, "unknown choice ids are ignored");
});

test("the run completes once and stays complete", () => {
  const run = buildMovieRun(MOVIE_QUIZZES[5], SEED);
  const state = playRun(run, Array(8).fill("right"));
  assert.equal(state.done, true);
  assert.equal(state.index, 7);
  assert.equal(scoreMovieRun(state, run), 8);
  assert.deepEqual(movieRunReducer(state, { type: "next", from: 7 }, run), state);
  assert.deepEqual(movieRunReducer(state, { type: "answer", index: 7, choice: "a" }, run), state);
});

test("elapsed time is bounded and never negative", () => {
  assert.equal(elapsedMs(1000, 4200), 3200);
  assert.equal(elapsedMs(5000, 1000), 0);
  assert.equal(elapsedMs(NaN, 1000), 0);
  assert.equal(elapsedMs(0, 10 ** 12), 24 * 60 * 60 * 1000);
});

const payload = movieGroupPayload({ token: "t".repeat(40), attempt: "a".repeat(16), quizSlug: "sidekicks", score: 6, total: 8, timeMs: 54000 });

test("group payload uses the namespaced slug and the fixed complete outcome", () => {
  assert.deepEqual(payload, { token: "t".repeat(40), attempt: "a".repeat(16), slug: "movies-sidekicks", score: 6, total: 8, timeMs: 54000, outcome: "complete" });
});

test("completion retries transient failures, stops on permanent ones and never double-submits", async () => {
  const waits: number[] = [];
  const wait = async (ms: number) => { waits.push(ms); };
  let calls = 0;
  const statuses: string[] = [];
  const flaky = createCompletionReporter({
    submit: async () => { calls++; if (calls < 3) throw Object.assign(new Error("network"), { code: "network", status: 0 }); },
    onChange: (status) => statuses.push(status),
    wait,
  });
  const results = await Promise.all([flaky.report(payload), flaky.report(payload), flaky.report({ ...payload, score: 8 })]);
  assert.deepEqual(results, ["sent", "sent", "sent"]);
  assert.equal(calls, 3, "two failures then one success, shared by concurrent callers");
  assert.deepEqual(waits, [1500, 4000]);
  assert.deepEqual(statuses, ["sending", "retrying", "retrying", "sent"].filter((value, i, all) => value !== all[i - 1] || true).slice(0, statuses.length));
  assert.equal(await flaky.report(payload), "sent");
  assert.equal(calls, 3, "completion is idempotent after success");

  let permanentCalls = 0;
  const rejected = createCompletionReporter({ submit: async () => { permanentCalls++; throw Object.assign(new Error("x"), { code: "invalid_result", status: 400 }); }, wait });
  assert.equal(await rejected.report(payload), "failed");
  assert.equal(permanentCalls, 1, "permanent rejections are not retried");

  let attempts = 0;
  const down = createCompletionReporter({ submit: async () => { attempts++; if (attempts <= 4) throw Object.assign(new Error("x"), { code: "unavailable", status: 503 }); }, wait, delays: [1, 1, 1] });
  assert.equal(await down.report(payload), "failed");
  assert.equal(attempts, 4, "gives up after the configured retries");
  assert.equal(await down.retry(), "sent", "manual retry succeeds once the service recovers");
  assert.equal(attempts, 5);
  assert.equal(await down.retry(), "sent");
  assert.equal(attempts, 5, "retry after success does nothing");
});

test("failure details drive the message and only transient failures are retryable", async () => {
  const wait = async () => {};
  let calls = 0;
  const permanent = createCompletionReporter({ submit: async () => { calls++; throw Object.assign(new Error("x"), { code: "already_completed", status: 409 }); }, wait });
  assert.equal(permanent.failure(), null);
  assert.equal(await permanent.report(payload), "failed");
  assert.deepEqual(permanent.failure(), { code: "already_completed", transient: false });
  assert.equal(await permanent.retry(), "failed");
  assert.equal(calls, 1, "permanent failures offer no retry");

  const bodies: unknown[] = [];
  let up = false;
  const transient = createCompletionReporter({ submit: async (body) => { bodies.push(body); if (!up) throw Object.assign(new Error("x"), { code: "network", status: 0 }); }, wait, delays: [] });
  assert.equal(await transient.report(payload), "failed");
  assert.deepEqual(transient.failure(), { code: "network", transient: true });
  up = true;
  assert.equal(await transient.retry(), "sent");
  assert.equal(transient.failure(), null);
  assert.deepEqual(bodies[0], bodies[1], "retry re-sends the original payload");
  assert.deepEqual(describeCompletionFailure(new Error("boom")), { code: "network", transient: true });
});

test("error classification separates transient from permanent group failures", () => {
  for (const error of [{ code: "network", status: 0 }, { code: "unavailable", status: 500 }, { status: 429 }, { status: 408 }, new Error("boom"), null]) assert.equal(isTransientGroupError(error), true);
  for (const code of ["invalid_result", "unknown_attempt", "unknown_player", "already_completed", "room_ended"]) assert.equal(isTransientGroupError({ code, status: 400 }), false, code);
  assert.equal(isTransientGroupError({ status: 403 }), false);
});

test("sitemap lists the hub and all 15 movie quizzes once", () => {
  const urls = sitemap().map((entry) => entry.url);
  const movieUrls = urls.filter((url) => url.startsWith("https://typologyquiz.com/trivia/movies/"));
  assert.equal(movieUrls.length, 16);
  assert.equal(new Set(urls).size, urls.length);
  assert.ok(movieUrls.includes("https://typologyquiz.com/trivia/movies/"));
  for (const quiz of MOVIE_QUIZZES) assert.ok(urls.includes(`https://typologyquiz.com/trivia/movies/${quiz.slug}/`), quiz.slug);
});

test("llms.txt lists the real collection, count, rights and every quiz", () => {
  const llms = readFileSync("public/llms.txt", "utf8");
  assert.ok(llms.includes(`${MOVIE_QUIZZES.length} multiple-choice sets of ${MOVIE_QUIZ_QUESTION_COUNT} questions (${MOVIE_QUIZZES.length * MOVIE_QUIZ_QUESTION_COUNT} in total)`));
  assert.ok(llms.includes("No posters, stills, audio, dialogue or actor likenesses"));
  assert.ok(llms.includes("https://typologyquiz.com/trivia/movies/"));
  for (const quiz of MOVIE_QUIZZES) assert.ok(llms.includes(`(https://typologyquiz.com${movieQuizPath(quiz.slug)})`), quiz.slug);
});

test("analytics covers movie routes, classifies them as trivia, and ignores private queries", () => {
  assert.deepEqual([...analyticsMovieQuizzes], MOVIE_QUIZZES.map((quiz) => quiz.slug));
  assert.ok(analyticsPaths.includes("/trivia/movies/"));
  for (const quiz of MOVIE_QUIZZES) {
    const path = movieQuizPath(quiz.slug);
    assert.ok(analyticsPaths.includes(path), path);
    assert.equal(analyticsPath(path), path);
    assert.equal(analyticsPageGroup(path), "trivia");
  }
  // Analytics receives pathnames only; a room code in the query can never reach it.
  assert.equal(analyticsPath("/trivia/movies/day-jobs/?group=ABC234&seed=SECRET"), "/404/");
  assert.equal(analyticsPath("/trivia/movies/not-a-quiz/"), "/404/");
});

test("movie analytics events carry only allowlisted ids, a mode and a bounded count", () => {
  assert.deepEqual(safeEventParameters("movie_quiz_start", { movie_quiz_id: "sidekicks", play_mode: "group", room: "ABC234", answer: "SECRET" }), { movie_quiz_id: "sidekicks", play_mode: "group" });
  assert.deepEqual(safeEventParameters("movie_quiz_complete", { movie_quiz_id: "sidekicks", play_mode: "solo", correct_count: 6, nickname: "SECRET" }), { movie_quiz_id: "sidekicks", play_mode: "solo", correct_count: 6 });
  assert.equal(safeEventParameters("movie_quiz_start", { movie_quiz_id: "SECRET", play_mode: "solo" }), null);
  assert.equal(safeEventParameters("movie_quiz_start", { movie_quiz_id: "sidekicks", play_mode: "ABC234" }), null);
  assert.equal(safeEventParameters("movie_quiz_complete", { movie_quiz_id: "sidekicks", play_mode: "solo", correct_count: -1 }), null);
  assert.equal(safeEventParameters("movie_quiz_complete", { movie_quiz_id: "sidekicks", play_mode: "solo", correct_count: 2.5 }), null);
  assert.equal(safeEventParameters("movie_quiz_complete", { movie_quiz_id: "sidekicks", play_mode: "solo", correct_count: MOVIE_QUIZ_QUESTION_COUNT + 1 }), null);
  assert.deepEqual(safeEventParameters("movie_quiz_complete", { movie_quiz_id: "sidekicks", play_mode: "solo", correct_count: MOVIE_QUIZ_QUESTION_COUNT }), { movie_quiz_id: "sidekicks", play_mode: "solo", correct_count: MOVIE_QUIZ_QUESTION_COUNT });
  assert.equal(analyticsMovieQuestionCount, MOVIE_QUIZ_QUESTION_COUNT);
  assert.equal(safeEventParameters("movie_quiz_complete", { movie_quiz_id: "sidekicks", play_mode: "solo" }), null);
});

test("pages have unique metadata and honest structured data", () => {
  const detail = readFileSync("src/app/trivia/movies/[slug]/page.tsx", "utf8");
  const hub = readFileSync("src/app/trivia/movies/page.tsx", "utf8");
  for (const source of [detail, hub]) {
    assert.ok(!/aggregateRating|FAQPage|ratingValue|reviewCount/.test(source), "no fake rating or FAQ schema");
    assert.ok(source.includes("alternates: { canonical"));
    assert.ok(source.includes("openGraph") && source.includes("/og/trivia-movies-"));
  }
  assert.ok(detail.includes("quizNode(") && detail.includes("breadcrumbList(") && hub.includes("collectionPageNodes("));
  assert.ok(!/question\.prompt|choices|correctId/.test(detail.split("jsonLdGraph([")[1]?.split("]);")[0] ?? ""), "JSON-LD carries no questions or answers");
  const trivia = readFileSync("src/app/trivia/page.tsx", "utf8");
  assert.ok(trivia.includes('href="/trivia/movies/"'));
  const og = readFileSync("public/og/.manifest.json", "utf8");
  assert.ok(og.includes("trivia-movies-hub.png"));
  for (const quiz of MOVIE_QUIZZES) assert.ok(og.includes(`trivia-movies-${quiz.slug}.png`), quiz.slug);
});

test("the player keeps credentials in storage and blocks silent solo play in a group link", () => {
  const player = readFileSync("src/components/trivia/MovieQuiz.tsx", "utf8");
  assert.ok(player.includes("loadGroupToken") && player.includes("loadGroupAttempt"));
  assert.ok(player.includes("groupIntent && !groupReady") && player.includes("Return to the lobby"));
  assert.ok(player.includes("View group results"));
  assert.ok(player.includes("<MovieSession key={`${quiz.slug}|${rawGroup}|"), "session resets on query changes");
  assert.ok(player.includes("groupErrorMessage(failure?.code") && player.includes("failure?.transient"));
  assert.ok(!player.includes("Supports:"));
  const analytics = readFileSync("src/lib/analytics.ts", "utf8");
  assert.ok(!analytics.includes("trivia/movies"), "global analytics does not import the quiz bank");
  assert.ok(player.includes("createCompletionReporter") && player.includes("reporter.retry"));
  assert.ok(!/localStorage|sessionStorage/.test(player), "storage access stays in the shared group API");
});
