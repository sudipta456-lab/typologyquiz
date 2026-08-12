/**
 * Rotate multiple-choice option order so correct answers don't cluster.
 *
 * alberta/sets-4-6.ts shipped with correctIndex 0 on all 100 questions - every
 * correct answer was option A, so the set was passable by never reading a
 * question. Authoring naturally produces this (you write the right answer
 * first), which is why it needs a mechanical fix rather than a careful author.
 *
 * The rotation moves whole option strings and recomputes correctIndex, so the
 * correct answer TEXT is never altered - only where it sits in the list.
 *
 * Usage: node scripts/fix-answer-positions.mjs <file> [...]
 */
import fs from "node:fs";

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error("usage: node scripts/fix-answer-positions.mjs <file> [...]");
  process.exit(1);
}

const QUOTED = /"(?:[^"\\]|\\.)*"/g;
const BLOCK = /(choices: \[)([\s\S]*?)(\],\s*\n\s*correctIndex: )(\d+)(,)/g;

for (const path of files) {
  const src = fs.readFileSync(path, "utf8");

  // Record the correct answer text before touching anything, so we can prove
  // afterwards that rotation moved options without editing them.
  const before = [];
  {
    let m;
    const re = new RegExp(BLOCK.source, "g");
    while ((m = re.exec(src)) !== null) {
      const items = m[2].match(QUOTED);
      if (items) before.push(items[Number(m[4])]);
    }
  }

  let seen = 0;
  let rotated = 0;
  const out = src.replace(BLOCK, (full, open, body, mid, idxStr, tail) => {
    const items = body.match(QUOTED);
    if (!items || items.length < 2) return full;

    const idx = Number(idxStr);
    seen += 1;

    // Cycle the shift so answers spread across every position.
    const k = seen % items.length;
    if (k === 0) return full;

    const moved = items.slice(-k).concat(items.slice(0, -k));
    const newIdx = (idx + k) % items.length;
    rotated += 1;

    const pad = "\n          ";
    return (
      open +
      pad +
      moved.join("," + pad) +
      ",\n        " +
      mid.trimStart() +
      newIdx +
      tail
    );
  });

  // Verify: same questions, same correct answer text, in the new positions.
  const after = [];
  {
    let m;
    const re = new RegExp(BLOCK.source, "g");
    while ((m = re.exec(out)) !== null) {
      const items = m[2].match(QUOTED);
      if (items) after.push(items[Number(m[4])]);
    }
  }

  if (before.length !== after.length) {
    console.error(`${path}: FAILED - question count changed (${before.length} -> ${after.length})`);
    process.exit(1);
  }
  const mismatches = before.filter((t, i) => t !== after[i]).length;
  if (mismatches > 0) {
    console.error(`${path}: FAILED - ${mismatches} correct answers changed text. Not written.`);
    process.exit(1);
  }

  fs.writeFileSync(path, out);

  const pos = [0, 0, 0, 0, 0];
  {
    let m;
    const re = new RegExp(BLOCK.source, "g");
    while ((m = re.exec(out)) !== null) pos[Number(m[4])] += 1;
  }
  const total = before.length;
  const dist = pos
    .slice(0, 4)
    .map((c, i) => `${"ABCD"[i]}:${Math.round((c / total) * 100)}%`)
    .join(" ");
  console.log(`${path}: ${total} questions, ${rotated} rotated, all answer text preserved -> ${dist}`);
}
