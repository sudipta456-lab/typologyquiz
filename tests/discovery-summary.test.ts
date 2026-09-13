import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { TESTS } from "../src/lib/tests/registry";
import { assessmentEvidence } from "../src/lib/tests/assessment-evidence";
import { EDITIONS } from "../src/lib/newsquiz/editions";
import { editionPath } from "../src/lib/editorial/identity";
import { analyticsPaths } from "../src/lib/analytics-manifest.generated";

const summary = readFileSync("public/llms.txt", "utf8");

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
