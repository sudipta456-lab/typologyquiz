#!/usr/bin/env node
// Lint quiz content style: no em-dashes or emoji inside string literals of
// src/lib/tests/*.ts. See docs/QUIZ_STYLE.md. Zero dependencies.
//
// A line may opt out with an inline `// lint-allow` comment (use sparingly,
// e.g. a question that is genuinely ABOUT emoji).
//
// Exit codes: 0 = clean, 1 = violations found.

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const TESTS_DIR = path.join(process.cwd(), "src", "lib", "tests");

// String literals: double-quoted, single-quoted, or single-line backtick.
const STRING_RE = /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\\n]|\\.)*`/g;

const EM_DASH = /—/; // — ; en-dash (–) for numeric ranges stays legal
const EMOJI =
  /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}\u{20E3}\u{1F1E6}-\u{1F1FF}\u{2190}-\u{21FF}\u{2B50}\u{3030}\u{303D}\u{3297}\u{3299}]/u;

const files = fs
  .readdirSync(TESTS_DIR)
  .filter((f) => f.endsWith(".ts"))
  .sort();

const violations = [];

for (const file of files) {
  const src = fs.readFileSync(path.join(TESTS_DIR, file), "utf8");
  const lines = src.split("\n");
  lines.forEach((line, i) => {
    if (line.includes("// lint-allow")) return;
    // Strip trailing line comments that start outside a string, so a comment
    // containing an em-dash (allowed) is not flagged. Cheap approach: only
    // examine the string literals on the line.
    const literals = line.match(STRING_RE) ?? [];
    for (const lit of literals) {
      const inner = lit.slice(1, -1);
      if (EM_DASH.test(inner)) {
        violations.push(`${file}:${i + 1}  em-dash in string: ${inner.slice(0, 90)}`);
      }
      if (EMOJI.test(inner)) {
        violations.push(`${file}:${i + 1}  emoji in string: ${inner.slice(0, 90)}`);
      }
    }
  });
}

if (violations.length > 0) {
  console.error(`quiz-style lint FAILED (${violations.length} violation${violations.length === 1 ? "" : "s"}):\n`);
  for (const v of violations) console.error("  " + v);
  console.error("\nHouse style bans em-dashes and emoji in quiz copy (docs/QUIZ_STYLE.md).");
  console.error("If a specific line is a deliberate exception, append `// lint-allow`.");
  process.exit(1);
}

console.log(`quiz-style lint OK (${files.length} files scanned, 0 violations)`);
