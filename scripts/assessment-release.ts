import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { TESTS } from "../src/lib/tests/registry";
import type { ReleaseReport } from "../src/lib/tests/assessment-versions";

// Append a reviewed release; never rewrite a report already issued to a visitor.
const id = process.argv[2];
if (!id || !/^\d{4}-\d{2}-\d{2}\.\d+$/.test(id)) throw new Error("Usage: tsx scripts/assessment-release.ts YYYY-MM-DD.N");
const path = "src/lib/tests/assessment-releases.json";
const archive = JSON.parse(readFileSync(path, "utf8"));
const digest = (input: string) => createHash("sha256").update(input).digest("hex");
const scoringFiles = ["registry", "score-utils", "assessment-input", "8values", "mini-ipip", "crt-7", "vviq", "social-battery", "study-energy", "fomo-style"];
const scoringHash = digest(scoringFiles.map(f => readFileSync(`src/lib/tests/${f}.ts`, "utf8")).join("\n"));
for (const test of TESTS) {
  const key = `${test.slug}@${id}`;
  if (archive.reports[key]) throw new Error(`Immutable release already exists: ${key}`);
  const version = { instrument: id, scoring: id, report: id };
  const report: ReleaseReport = {
    version, scoringHash, definitionHash: digest(JSON.stringify(test)),
    // Keep all result wording/axes frozen without duplicating item banks in the browser.
    definition: { ...test, questions: [] },
  };
  archive.reports[key] = report;
  archive.current[test.slug] = version;
}
writeFileSync(path, JSON.stringify(archive, null, 2) + "\n");
console.log(`Released ${TESTS.length} assessment definitions as ${id}`);
