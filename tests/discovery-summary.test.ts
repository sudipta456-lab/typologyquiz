import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { test } from "node:test";
import { TESTS } from "../src/lib/tests/registry";
import { assessmentEvidence } from "../src/lib/tests/assessment-evidence";
import { EDITIONS } from "../src/lib/newsquiz/editions";
import { editionPath } from "../src/lib/editorial/identity";
import { analyticsPaths } from "../src/lib/analytics-manifest.generated";
import { ELEMENTS } from "../src/components/periodic-table/data";
import { LEARNING_TRACKS } from "../src/components/periodic-table/learning";
import { SUMMARIES } from "../src/lib/interactive/catalog.generated";
import { TRIVIA_QUIZZES } from "../src/lib/trivia/registry";

const summary = readFileSync("public/llms.txt", "utf8");
const anatomyManifestPath = path.join(process.cwd(), "src/components/anatomy/assets.ts");
const dynamicImport = new Function("url", "return import(url)") as (url: string) => Promise<{ ANATOMY_ASSETS: readonly { modelUrls: readonly string[] }[] }>;

test("every assessment has one entry carrying its actual purpose, evidence and rights", () => {
  for (const t of TESTS) {
    const url = `https://typologyquiz.com/test/${t.slug}/`;
    const entries = summary.split("\n").filter(line => line.includes(`](${url})`));
    assert.equal(entries.length, 1, t.slug);
    const evidence = assessmentEvidence(t);
    for (const text of [evidence.purpose, evidence.status, evidence.summary, evidence.rights]) assert.ok(entries[0].includes(text), `${t.slug}: ${text}`);
  }
  assert.ok(summary.includes("reasoning puzzles have correct answers"));
  for (const oldClaim of ["No right answers", "Items are reverse-keyed", "never as a measurement", "The social pages store nothing", "those names never leave the device"]) assert.ok(!summary.includes(oldClaim), oldClaim);
});

test("weekly discovery lists every published version exactly once with its real date", () => {
  const section = summary.split("## Published weekly editions\n")[1].split("## Driving licence practice tests")[0];
  const links = [...section.matchAll(/\]\((https:\/\/typologyquiz\.com\/weekly\/[^)]+)\)/g)].map(match => match[1]);
  assert.deepEqual(links.sort(), EDITIONS.map(edition => `https://typologyquiz.com${editionPath(edition)}`).sort());
  for (const edition of EDITIONS) {
    const line = section.split("\n").find(text => text.includes(editionPath(edition)))!;
    assert.ok(line.includes(`published ${edition.publishedAt}; version ${edition.version}; ${edition.questions.length} questions.`));
  }
  assert.ok(!summary.includes("content/drafts/"));
});

test("summary links public evidence/privacy hubs and known routes without promoting private utilities", () => {
  for (const path of ["/room/", "/compare/", "/account/", "/reflections/", "/most-likely-to/"]) assert.ok(!summary.includes(`](https://typologyquiz.com${path})`), path);
  for (const path of ["/methodology/", "/about/", "/credits/", "/weekly/"]) assert.ok(summary.includes(`](https://typologyquiz.com${path})`));
  for (const match of summary.matchAll(/\]\((https:\/\/typologyquiz\.com[^)]*)\)/g)) {
    const url = new URL(match[1]);
    assert.equal(url.search, "", match[1]);
    assert.equal(url.hash, "", match[1]);
    assert.ok(analyticsPaths.includes(url.pathname), `Unknown discovery link: ${url.pathname}`);
  }
});

test("interactive methodology is linked once from key pages and states its limits plainly", () => {
  const url = "https://typologyquiz.com/methodology/interactive-quizzes/";
  const keyPages = summary.split("## Key pages\n")[1].split("\n## ")[0];
  assert.equal(keyPages.split("\n").filter(line => line.includes(`](${url})`)).length, 1);
  assert.ok(analyticsPaths.includes("/methodology/interactive-quizzes/"));
  const section = summary.split("## Interactive quiz methodology\n")[1].split("\n## ")[0];
  assert.ok(section.includes("written with AI assistance") && section.includes("not an independent human fact-check of every item or psychometric validation"));
  assert.ok(section.includes("No learning outcome has been validated") && section.includes("no norms, diagnosis or scientific validation"));
  assert.ok(!section.includes("—") && !/guarantee|will be (indexed|ranked)/i.test(section));
});

test("new interest quizzes are discoverable and keep their limits visible", () => {
  const expected = [
    ["/trivia/physics/", "physics knowledge or ability"],
    ["/trivia/alien-type/", "fictional Grey, Nordic, Reptilian, Mantid, and Tall White"],
    ["/trivia/ai-style/", "not a measure of intelligence, skill, employability, or future success"],
  ] as const;
  for (const [path, caveat] of expected) {
    const url = `https://typologyquiz.com${path}`;
    const entries = summary.split("\n").filter(line => line.includes(`](${url})`));
    assert.equal(entries.length, 1, path);
    assert.ok(entries[0].includes(caveat), path);
    assert.ok(analyticsPaths.includes(path), `Analytics manifest omits ${path}`);
  }
});

test("periodic table learning is one reference link with guided practice counts", () => {
  const path = "/learn/periodic-table/";
  const url = `https://typologyquiz.com${path}`;
  const keyPages = summary.split("## Key pages\n")[1].split("\n## ")[0];
  assert.equal(keyPages.split("\n").filter((line) => line.includes(`](${url})`)).length, 1);
  assert.ok(analyticsPaths.includes(path), `Analytics manifest omits ${path}`);
  assert.ok(keyPages.includes("practice stays within the guide rather than adding extra quizzes"));

  const section = summary.split("## Periodic table learning\n")[1].split("\n## ")[0];
  const stepCount = LEARNING_TRACKS.reduce((count, track) => count + track.steps.length, 0);
  for (const phrase of [
    `${ELEMENTS.length} recognized elements`,
    `${stepCount} open-book practice steps`,
    `${LEARNING_TRACKS.length} tracks`,
    "CIAAW's 2024 full values",
    "not an isotope mass number or neutron count",
    "searches beyond it remain research targets unless confirmed",
  ]) assert.ok(section.includes(phrase), phrase);
  assert.equal(summary.split(`](${url})`).length - 1, 1, "The learning route should be linked once in llms.txt");
});

test("related periodic-table links use existing quiz routes and display names", () => {
  const page = readFileSync("src/app/learn/periodic-table/page.tsx", "utf8");
  const interactiveSlugs = [
    "follow-the-atoms",
    "where-did-the-sugar-go",
    "can-you-prove-a-reaction-happened",
    "powder-that-cooled-the-cup",
    "bag-that-kept-all-its-mass",
  ];
  const linkedInteractive = [...page.matchAll(/href: "(\/quizzes\/[^\"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(linkedInteractive.sort(), interactiveSlugs.map((slug) => `/quizzes/${slug}/`).sort());
  for (const slug of interactiveSlugs) {
    const quiz = SUMMARIES.find((entry) => entry.slug === slug);
    assert.ok(quiz, `Missing interactive quiz route: ${slug}`);
    assert.ok(page.includes(`title: "${quiz.title}"`), `Related label disagrees with the quiz bank: ${slug}`);
  }

  const triviaSlugs = ["periodic-table-first-20", "periodic-table"];
  const linkedTrivia = [...page.matchAll(/href: "(\/trivia\/[^\"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(linkedTrivia.sort(), triviaSlugs.map((slug) => `/trivia/${slug}/`).sort());
  for (const slug of triviaSlugs) {
    const quiz = TRIVIA_QUIZZES.find((entry) => entry.slug === slug);
    assert.ok(quiz, `Missing timed trivia route: ${slug}`);
    assert.ok(page.includes(`title: "${quiz.title}"`), `Related label disagrees with the trivia registry: ${slug}`);
  }
});

test("Anatomy Atlas discovery counts only published canonical quiz entries and keeps asset rights visible", async () => {
  assert.ok(existsSync(anatomyManifestPath), "Pending anatomy integration: src/components/anatomy/assets.ts has not arrived");
  const { ANATOMY_ASSETS } = await dynamicImport(pathToFileURL(anatomyManifestPath).href);
  const path = "/learn/anatomy/";
  const url = `https://typologyquiz.com${path}`;
  const keyPages = summary.split("## Key pages\n")[1].split("\n## ")[0];
  const atlasSection = summary.split("## Anatomy Atlas\n")[1].split("\n## ")[0];
  const anatomyIds = new Set(["SN-78", "SN-79", "SN-80", "SN-81", "SN-82", "SN-83", "SN-84", "SN-85"]);
  const publishedAnatomyQuizzes = SUMMARIES.filter((quiz) => anatomyIds.has(quiz.id));
  const publishedTaskCount = publishedAnatomyQuizzes.reduce((count, quiz) => count + quiz.questionCount, 0);
  const modelFileCount = ANATOMY_ASSETS.reduce((count, asset) => count + asset.modelUrls.length, 0);

  assert.equal(keyPages.split("\n").filter((line) => line.includes(`](${url})`)).length, 1);
  assert.ok(analyticsPaths.includes(path), `Analytics manifest omits ${path}`);
  assert.ok(atlasSection.includes(`${publishedAnatomyQuizzes.length} canonical image-based anatomy quizzes`));
  assert.ok(atlasSection.includes(`${publishedTaskCount} tasks, counted from the published catalog only`));
  assert.ok(atlasSection.includes(`${ANATOMY_ASSETS.length} selected reference assets`));
  assert.ok(atlasSection.includes(`${modelFileCount} local 3D model files`));
  for (const phrase of [
    "individual credits",
    "license terms",
    "image alternatives",
    "not medical validation",
    "symptom checker",
    "procedure guidance",
  ]) assert.ok(atlasSection.includes(phrase), phrase);
  for (const quiz of publishedAnatomyQuizzes) {
    const link = `](https://typologyquiz.com/quizzes/${quiz.slug}/)`;
    assert.equal(summary.split(link).length - 1, 1, `${quiz.id}: one canonical discovery entry`);
    const interactiveSection = summary.split("## Interactive quizzes\n")[1].split("## Limits worth stating")[0];
    assert.ok(interactiveSection.includes(link), `${quiz.id}: listed in the interactive collection`);
  }
  assert.equal(summary.split(`](${url})`).length - 1, 1, "The Anatomy Atlas should be linked once in llms.txt");

  const route = readFileSync("src/app/learn/anatomy/page.tsx", "utf8");
  const footer = readFileSync("src/components/Footer.tsx", "utf8");
  const trivia = readFileSync("src/app/trivia/page.tsx", "utf8");
  const scienceCategory = readFileSync("src/app/quizzes/category/[categoryId]/page.tsx", "utf8");
  const sitemap = readFileSync("src/app/sitemap.ts", "utf8");
  const methodology = readFileSync("src/app/methodology/interactive-quizzes/page.tsx", "utf8");
  const credits = readFileSync("src/app/credits/page.tsx", "utf8");

  assert.match(route, /const CHECKED_ON = "2026-11-21"/);
  assert.match(route, /alternates:\s*\{\s*canonical:\s*`\$\{SITE\.url\}\$\{PATH\}`/);
  assert.ok(route.includes("QUIZZES.find") && route.includes("quizPath(quiz.slug)"), "Atlas links must come from actual catalog quiz entries");
  assert.ok(route.includes("<AnatomyExplorer quizLinks={quizLinks} />"));
  assert.ok(route.includes("NHLBI") && route.includes("NINDS") && route.includes("NIDDK") && route.includes("NCI SEER"));
  assert.match(footer, /\["Periodic table", "\/learn\/periodic-table\/"\], \["Anatomy Atlas", "\/learn\/anatomy\/"\]/);
  assert.match(trivia, /group\.label === "Science"[\s\S]*?href="\/learn\/anatomy\//);
  assert.match(scienceCategory, /category\.id === "science-nature"[\s\S]*?href="\/learn\/anatomy\//);
  assert.ok(sitemap.includes('`${base}/learn/anatomy/`'));
  assert.ok(methodology.includes("ANATOMY_QUIZZES.length") && methodology.includes("ANATOMY_TASK_COUNT"));
  assert.ok(methodology.includes("not clinically validated materials") && methodology.includes("/credits/#anatomy"));
  assert.ok(credits.includes('id="anatomy"') && credits.includes("asset.credit") && credits.includes("asset.sourceUrl") && credits.includes("asset.license"));
});
