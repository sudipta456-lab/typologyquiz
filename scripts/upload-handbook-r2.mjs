/**
 * Upload every handbook snippet image to the R2 bucket the worker serves from.
 *
 * WHY. There are ~9,500 snippet images and each new jurisdiction adds ~180.
 * Cloudflare's free Workers plan allows 20,000 static asset files per version,
 * and a deploy was refused at 20,324. Moving the images to R2 takes them out of
 * that count entirely, so the remaining jurisdictions stop competing with the
 * site's own pages for a file budget.
 *
 * Uploads from public/handbook/, which is the full set - including images for
 * excerpts no question currently cites. That is on purpose: R2 has no file-count
 * limit worth worrying about, and if a later question starts citing one of those
 * excerpts its picture is already there.
 *
 * Idempotent. Re-running only uploads what is missing, so it is the right thing
 * to run after adding a jurisdiction.
 *
 * Usage:
 *   node scripts/upload-handbook-r2.mjs [--bucket <name>] [--force]
 */
import { execFileSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const bucket = args.includes("--bucket") ? args[args.indexOf("--bucket") + 1] : "typologyquiz-handbook";
const force = args.includes("--force");

const ROOT = "public/handbook";

function existingKeys() {
  if (force) return new Set();
  try {
    // wrangler paginates; ask for a generous page and accept that a very large
    // bucket may need several runs to converge.
    const out = execFileSync(
      "npx",
      ["wrangler", "r2", "object", "list", bucket, "--json"],
      { encoding: "utf8", maxBuffer: 64 * 1024 * 1024, shell: true }
    );
    const rows = JSON.parse(out);
    return new Set((rows?.objects ?? rows ?? []).map((o) => o.key));
  } catch {
    // A fresh bucket, or a wrangler version without --json: upload everything
    // and let the per-object put be the source of truth.
    return new Set();
  }
}

const already = existingKeys();
let uploaded = 0;
let skipped = 0;
let failed = 0;

for (const slug of readdirSync(ROOT)) {
  const dir = join(ROOT, slug);
  if (!statSync(dir).isDirectory()) continue;

  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".png")) continue;
    const key = `${slug}/${file}`;
    if (already.has(key)) {
      skipped++;
      continue;
    }
    try {
      execFileSync(
        "npx",
        [
          "wrangler", "r2", "object", "put", `${bucket}/${key}`,
          "--file", join(dir, file),
          "--content-type", "image/png",
          "--remote",
        ],
        { stdio: "ignore", shell: true }
      );
      uploaded++;
      if (uploaded % 100 === 0) console.log(`  uploaded ${uploaded}...`);
    } catch (err) {
      failed++;
      console.log(`  FAILED ${key}: ${String(err?.message || err).slice(0, 90)}`);
    }
  }
}

console.log(`${bucket}: ${uploaded} uploaded, ${skipped} already present, ${failed} failed`);
if (failed) process.exitCode = 1;
