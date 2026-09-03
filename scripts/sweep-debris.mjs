/**
 * Remove shell-redirect debris from the repo root.
 *
 * In bash, `->` is two tokens: `-` and a redirect. An unquoted
 * `echo "score -> 42"` silently creates a file named `42`. Agents writing
 * one-liners here have produced dozens of these; they are invisible in a
 * transcript, they get tarred into a Cloudflare build, and one of them once
 * sent an agent hunting a phantom failure.
 *
 * Deliberately conservative: repo root only, zero bytes only, untracked only,
 * never a dotfile. A real file is never empty and never untracked by accident.
 */

import { execFileSync } from "node:child_process";
import { statSync, unlinkSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

let untracked = [];
try {
  untracked = execFileSync("git", ["ls-files", "--others", "--exclude-standard"], {
    cwd: root,
    encoding: "utf8",
  })
    .split("\n")
    .filter(Boolean);
} catch {
  // Not a git checkout (a build container, say). Nothing to sweep.
  process.exit(0);
}

const removed = [];
for (const rel of untracked) {
  if (rel.includes("/")) continue; // root only
  if (rel.startsWith(".")) continue; // never a dotfile
  const abs = path.join(root, rel);
  try {
    const st = statSync(abs);
    if (st.isFile() && st.size === 0) {
      unlinkSync(abs);
      removed.push(rel);
    }
  } catch {
    // Vanished under us, or not readable. Leave it alone.
  }
}

if (removed.length) {
  console.log(`swept ${removed.length} empty untracked root file(s): ${removed.join(", ")}`);
}
