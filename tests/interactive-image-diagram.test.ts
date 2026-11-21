import assert from "node:assert/strict";
import { test } from "node:test";
import { scoreQuestion, scoreQuiz, validateAnswer } from "../src/lib/interactive/engine.ts";
import type { Answers, HotspotImage, Quiz } from "../src/lib/interactive/types.ts";
import { validateQuiz } from "../src/lib/interactive/validate.ts";

type Rec = Record<string, unknown>;

const VALID_IMAGE: HotspotImage = {
  src: "/anatomy/shoulder-joint-detail.webp",
  alt: "Anterior view of the shoulder joint with the humeral head centered below the socket.",
  width: 1200,
  height: 900,
  credit: "Original medical illustration by Example Studio",
  sourceUrl: "https://example.org/anatomy/shoulder-joint",
  license: "https://creativecommons.org/licenses/by/4.0/",
};

function makeQuiz(withImage = false): Quiz {
  const hotspotDiagram = {
    title: "Shoulder joint, anterior view",
    description: "Anterior view; the arm is shown at the viewer's right.",
    ...(withImage ? { image: { ...VALID_IMAGE } } : {}),
    zones: [
      { id: "z1", label: "A", x: 16, y: 22, width: 12, height: 12 },
      { id: "z2", label: "B", x: 62, y: 58, width: 16, height: 16 },
    ],
  };
  return {
    id: "image-fixture", slug: "image-fixture", categoryId: "science", title: "Anatomy image fixture",
    description: "A synthetic anatomy image quiz used to validate the optional diagram extension.",
    kind: "knowledge", version: 1, minutes: 5,
    sections: [{ id: "s1", title: "Orientation" }, { id: "s2", title: "Landmarks" }],
    sources: [{ id: "original", label: "Synthetic fixture", kind: "original" }],
    questions: [
      { id: "q-hotspot", kind: "hotspot", sectionId: "s1", prompt: "Select the glenoid cavity.", explanation: "The cavity is at option B in this synthetic example.", sourceIds: ["original"], diagram: hotspotDiagram, options: [{ id: "z1", label: "A: humeral head" }, { id: "z2", label: "B: glenoid cavity" }], correct: "z2" },
      ...[1, 2, 3, 4, 5].map((index) => ({ id: `q-choice-${index}`, kind: "choice" as const, sectionId: index < 3 ? "s1" : "s2", prompt: `Choose the fixture answer ${index}.`, explanation: `Option A is keyed for fixture ${index}.`, sourceIds: ["original"], options: [{ id: "a", label: "Option A" }, { id: "b", label: "Option B" }], correct: "a" })),
    ],
  };
}

function hotspot(quiz: Quiz): Extract<Quiz["questions"][number], { kind: "hotspot" }> {
  const question = quiz.questions.find((entry) => entry.kind === "hotspot");
  if (!question || question.kind !== "hotspot") throw new Error("hotspot fixture missing");
  return question;
}

function imageRecord(quiz: Quiz): Rec {
  return hotspot(quiz).diagram.image as unknown as Rec;
}

function expectInvalidImage(change: (image: Rec) => void, message: string): void {
  const quiz = makeQuiz(true);
  change(imageRecord(quiz));
  assert.ok(validateQuiz(quiz).some((error) => error.includes(message)), `${message}: ${JSON.stringify(validateQuiz(quiz))}`);
}

test("legacy rectangle hotspot fixtures remain valid and retain option-ID answer scoring", () => {
  const quiz = makeQuiz();
  assert.deepEqual(validateQuiz(quiz), []);
  const question = hotspot(quiz);
  assert.equal(question.diagram.image, undefined);
  assert.equal(validateAnswer(question, "z2"), true);
  assert.equal(validateAnswer(question, "unknown"), false);
  assert.equal(scoreQuestion(question, "z2"), 1);
  assert.equal(scoreQuestion(question, "z1"), 0);
});

test("a valid local image is optional metadata and does not change answer lookup or scoring", () => {
  const rectangleQuiz = makeQuiz();
  const imageQuiz = makeQuiz(true);
  assert.deepEqual(validateQuiz(imageQuiz), []);
  // A syntactically valid path is accepted without checking filesystem presence; the asset gate owns that check.
  assert.equal(hotspot(imageQuiz).diagram.image?.src, VALID_IMAGE.src);

  for (const answer of ["z1", "z2", "not-an-option"]) {
    const rectangleQuestion = hotspot(rectangleQuiz);
    const imageQuestion = hotspot(imageQuiz);
    assert.equal(validateAnswer(imageQuestion, answer), validateAnswer(rectangleQuestion, answer));
    assert.equal(scoreQuestion(imageQuestion, answer), scoreQuestion(rectangleQuestion, answer));
    const answers = { "q-hotspot": answer } as Answers;
    assert.deepEqual(scoreQuiz(imageQuiz, answers), scoreQuiz(rectangleQuiz, answers));
  }
});

test("image paths are confined to safe local anatomy filenames and supported formats", () => {
  for (const src of [
    "https://example.org/anatomy/shoulder.webp",
    "//example.org/anatomy/shoulder.webp",
    "/anatomy/../shoulder.jpg",
    "/anatomy/%2e%2e%2fshoulder.jpg",
    "/anatomy/shoulder//detail.jpg",
    "/anatomy/shoulder.jpg?size=large",
    "/anatomy/shoulder.jpg#part",
    "javascript:alert(1)",
    "data:image/png;base64,AAAA",
    "/anatomy/shoulder.gif",
    "/anatomy/shoulder%2fdetail.jpg",
    "/anatomy/bad%ZZ.jpg",
  ]) expectInvalidImage((image) => { image.src = src; }, "safe local /anatomy/");
});

test("image metadata requires meaningful alt, credit, license, safe references, and bounded natural dimensions", () => {
  expectInvalidImage((image) => { delete image.alt; }, ".alt");
  expectInvalidImage((image) => { image.alt = "   "; }, ".alt");
  expectInvalidImage((image) => { delete image.credit; }, ".credit");
  expectInvalidImage((image) => { image.credit = " "; }, ".credit");
  expectInvalidImage((image) => { delete image.license; }, ".license");
  expectInvalidImage((image) => { image.license = "CC BY"; }, ".license");
  for (const sourceUrl of ["http://example.org/source", "https://user:pass@example.org/source", "https://localhost/source", "https://127.0.0.1/source", "not a URL"]) {
    expectInvalidImage((image) => { image.sourceUrl = sourceUrl; }, ".sourceUrl");
  }
  for (const [key, value] of [["width", Number.NaN], ["height", 0], ["width", 4097], ["height", 100.5]] as const) {
    expectInvalidImage((image) => { image[key] = value; }, `.${key}`);
  }
});

test("a present malformed image object is rejected, including unknown properties", () => {
  expectInvalidImage((image) => { image.remote = "https://example.org/image.jpg"; }, "unknown property");
  const quiz = makeQuiz();
  (hotspot(quiz).diagram as unknown as Rec).image = undefined;
  assert.ok(validateQuiz(quiz).some((error) => error.includes("diagram.image")));
});
