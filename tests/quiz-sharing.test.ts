import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { SUMMARIES } from "../src/lib/interactive/catalog.generated.ts";
import { movieQuizPath } from "../src/lib/trivia/movies.ts";
import { downloadQuizShareCard } from "../src/lib/quiz-share-card.ts";
import { addOptionalShareText, copyShareText, editShareMessage, MAX_QUIZ_SHARE_MESSAGE, messageWithUrl, previewMessage, tryNativeShare } from "../src/lib/quiz-sharing.ts";
import { inviteNetworks, inviteText, resultNetworks, resultShareText, shareNetworks } from "../src/lib/share.ts";

const quizUrl = "https://typologyquiz.com/quizzes/example/";

test("generic networks encode the edited preview and exactly one supplied URL", () => {
  const message = `A & B 🧩 ${quizUrl} ${quizUrl}`;
  const networks = shareNetworks(quizUrl, message);
  assert.deepEqual(networks.map((network) => network.name), ["WhatsApp", "Discord", "TikTok", "Instagram", "Snapchat", "X", "Facebook", "Reddit", "Messages"]);
  assert.equal(new URL(networks[0].href!).searchParams.get("text"), `A & B 🧩\n${quizUrl}`);
  assert.equal(new URL(networks[5].href!).searchParams.get("url"), quizUrl);
  assert.equal(new URL(networks[5].href!).searchParams.get("text"), "A & B 🧩");
  assert.equal(new URL(networks[6].href!).searchParams.get("u"), quizUrl);
  assert.equal(new URL(networks[7].href!).searchParams.get("url"), quizUrl);
  assert.equal(new URL(networks[8].href!).searchParams.get("body"), `A & B 🧩\n${quizUrl}`);
  for (const network of networks.filter((item) => item.copyText)) assert.equal(network.copyText, `A & B 🧩\n${quizUrl}`);
  assert.doesNotMatch(networks.map((network) => JSON.stringify(network)).join(" "), /self-reflection snapshot|scored in my browser|test result/i);
});

test("existing assessment invitation and result wording stays intact", () => {
  assert.equal(inviteText(quizUrl), `Free typology quizzes and driving licence practice tests on TypologyQuiz. No account, no ads. ${quizUrl}`);
  assert.equal(resultShareText("Example", "Explorer", quizUrl), `My Example result: Explorer. A self-reflection snapshot, scored in my browser. Try it: ${quizUrl}`);
  assert.equal(inviteNetworks(quizUrl).length, 9);
  assert.equal(resultNetworks(quizUrl, "Example", "Explorer").length, 8);
});

test("optional accuracy is opt-in, idempotent, and respects the message bound", () => {
  const detail = "I scored 75% on the checkable tasks.";
  const initial = "I tried this quiz.";
  assert.equal(addOptionalShareText("My draft \n", detail, quizUrl), `My draft \n${detail}`);
  assert.equal(messageWithUrl(initial, quizUrl), `${initial}\n${quizUrl}`);
  const added = addOptionalShareText(initial, detail, quizUrl);
  assert.equal(added, `${initial} ${detail}`);
  assert.equal(addOptionalShareText(added, detail, quizUrl), added);
  const nearlyFull = "a".repeat(MAX_QUIZ_SHARE_MESSAGE - 2);
  assert.equal(addOptionalShareText(nearlyFull, detail, quizUrl), nearlyFull);
  assert.equal(previewMessage("x".repeat(MAX_QUIZ_SHARE_MESSAGE + 100), quizUrl).length, MAX_QUIZ_SHARE_MESSAGE);
  assert.equal(previewMessage(`${"x".repeat(MAX_QUIZ_SHARE_MESSAGE - 1)}🧩`, quizUrl).length, MAX_QUIZ_SHARE_MESSAGE - 1);
});

test("native cancellation has no clipboard side effect; explicit copy has a real fallback", async () => {
  let copies = 0;
  const cancelled = await tryNativeShare(async () => { throw new DOMException("cancelled", "AbortError"); }, { title: "Quiz", text: "Try it", url: quizUrl });
  assert.equal(cancelled, "cancelled");
  assert.equal(copies, 0);
  const copied = await copyShareText(quizUrl, { writeText: async () => { throw new Error("denied"); }, fallbackCopy: (value) => { copies++; return value === quizUrl; } });
  assert.equal(copied, true);
  assert.equal(copies, 1);
  assert.equal(await copyShareText(quizUrl, { fallbackCopy: () => false }), false);
});

test("challenge and friend links retain encoded data while the message contains one URL", () => {
  const challengeUrl = "https://typologyquiz.com/trivia/example/?c=1-2-g3";
  const friendUrl = "https://typologyquiz.com/friend-quiz/play/?quiz=encoded%2Banswers";
  for (const url of [challengeUrl, friendUrl]) {
    const composed = messageWithUrl(`Try this: ${url}`, url);
    assert.equal(composed.split(url).length - 1, 1);
    assert.ok(composed.endsWith(url));
    assert.equal(new URL(shareNetworks(url, composed)[0].href!).searchParams.get("text"), composed);
  }
});

test("the growing interactive catalog routes through the shared player; other result families are wired", () => {
  assert.ok(SUMMARIES.length >= 280);
  assert.equal(new Set(SUMMARIES.map((quiz) => quiz.slug)).size, SUMMARIES.length);
  const source = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
  assert.match(source("src/app/quizzes/[slug]/page.tsx"), /<QuizPlayer quiz=\{quiz\}/);
  assert.match(source("src/components/interactive/QuizPlayer.tsx"), /<QuizSharePanel[^>]+url=\{url\}/);
  assert.match(source("src/components/friendquiz/FriendShareBlock.tsx"), /<QuizSharePanel[^>]+url=\{url\}[^>]+cards=\{false\}/);
  assert.match(source("src/components/trivia/TriviaPlayClient.tsx"), /<ShareNetworkActions url=\{challengeUrl\} message=\{shareText\}/);
  assert.match(source("src/components/editorial/EditorialQuizClient.tsx"), /<ShareNetworkActions url=\{result\.url\} message=\{result\.text\}/);
});

test("movie sharing uses the canonical quiz path, never the room or seed query", () => {
  const path = movieQuizPath("example");
  assert.equal(path, "/trivia/movies/example/");
  const movie = readFileSync(new URL("../src/components/trivia/MovieQuiz.tsx", import.meta.url), "utf8");
  assert.match(movie, /<QuizSharePanel[^>]+url=\{`\$\{SITE\.url\}\$\{movieQuizPath\(quiz\.slug\)\}`\}/);
  assert.doesNotMatch(path, /[?&](group|seed|token)=/);
});

test("local card export bounds long title and emoji text and reports canvas failure", () => {
  const originalDocument = Object.getOwnPropertyDescriptor(globalThis, "document");
  const painted: { text: string; width: number }[] = [];
  let downloads = 0;
  const context = {
    font: "",
    fillStyle: "",
    fillRect: () => {},
    measureText(text: string) { return { width: [...text].length * (Number(this.font.match(/(\d+)px/)?.[1] ?? 20) * .55) }; },
    fillText(text: string) { painted.push({ text, width: this.measureText(text).width }); },
  };
  const canvas = { width: 0, height: 0, getContext: () => context, toDataURL: () => "data:image/png;base64,AA" };
  const anchor = { download: "", href: "", click: () => { downloads++; } };
  Object.defineProperty(globalThis, "document", { configurable: true, value: { createElement: (tag: string) => tag === "canvas" ? canvas : anchor } });
  try {
    const shortened = downloadQuizShareCard("An extraordinarily long 🧩 title ".repeat(5), "Emoji 🎭 and a longword".repeat(21), quizUrl, false);
    assert.equal(typeof shortened, "boolean");
    assert.equal(canvas.width, 1080);
    assert.equal(canvas.height, 1080);
    assert.equal(downloads, 1);
    assert.ok(painted.every((item) => item.width <= 908), "all rendered lines fit inside 86px margins");
    assert.ok(painted.some((item) => item.text.includes(quizUrl)));
    downloadQuizShareCard("Simple quiz", "Try this one 🧩", quizUrl, true);
    assert.equal(canvas.height, 1920);
    assert.equal(downloads, 2);
    canvas.getContext = () => null as never;
    assert.throws(() => downloadQuizShareCard("Quiz", "Message", quizUrl, true), /Canvas is unavailable/);
  } finally {
    if (originalDocument) Object.defineProperty(globalThis, "document", originalDocument);
    else Reflect.deleteProperty(globalThis, "document");
  }
});

test("editing preserves spaces and line breaks before export normalization", () => {
  assert.equal(editShareMessage("Hello "), "Hello ");
  assert.equal(editShareMessage("Hello \nworld"), "Hello \nworld");
  assert.equal(editShareMessage("x".repeat(600)).length, MAX_QUIZ_SHARE_MESSAGE);
  assert.equal(messageWithUrl(editShareMessage("Hello \nworld"), quizUrl), `Hello world\n${quizUrl}`);
  const panel = readFileSync(new URL("../src/components/QuizSharePanel.tsx", import.meta.url), "utf8");
  assert.match(panel, /setMessage\(editShareMessage\(event.target.value\)\)/);
  const friend = readFileSync(new URL("../src/components/friendquiz/FriendShareBlock.tsx", import.meta.url), "utf8");
  assert.match(friend, /<QuizSharePanel key=\{url\}/);
});

test("interest, physics and speed rounds share only their canonical quiz routes with opt-in summaries", () => {
  for (const file of ["InterestQuiz", "PhysicsPreferenceQuiz", "RapidRound"]) {
    const source = readFileSync(new URL(`../src/components/trivia/${file}.tsx`, import.meta.url), "utf8");
    assert.match(source, /<QuizSharePanel/);
    assert.match(source, /url=\{`\$\{SITE.url\}\/trivia\//);
    assert.match(source, /optionalText=/);
    assert.doesNotMatch(source, /window.location/);
  }
});
