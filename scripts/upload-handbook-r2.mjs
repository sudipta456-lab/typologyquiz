/**
 * Upload the handbook snippet images to the R2 bucket the worker serves from.
 *
 * WHY. There are ~10,600 snippet images and each new jurisdiction adds ~180.
 * Cloudflare's free Workers plan allows 20,000 static asset files per version
 * and a deploy was refused at 20,324. Moving the images to R2 takes them out
 * of that count, so jurisdictions stop competing with the site's own pages
 * for a file budget. See docs/driving/R2-MIGRATION.md for the full history,
 * including two live outages this migration caused and how they were fixed.
 *
 * THREE THINGS LEARNED THE HARD WAY, all of which shape this file.
 *
 * 1. It runs the LOCAL wrangler binary (node_modules/.bin), not `npx wrangler`.
 *    npx re-resolves the package on every call, which costs a second or more
 *    per file - four hours across this corpus.
 * 2. It uploads with a small concurrency pool. Serial is too slow and
 *    unbounded parallelism crashed the first attempt.
 * 3. IT MUST SKIP OBJECTS ALREADY IN THE BUCKET. The first version re-listed
 *    the bucket via `wrangler r2 object list` to dedupe, which failed silently
 *    (wrong subcommand for that wrangler version) and fell through to "upload
 *    everything, every time" - a real run for just Maine's 245 NEW images
 *    started re-uploading all 10,627 and had to be killed by hand a thousand
 *    objects in. This version keeps its own manifest of what it has already
 *    put, written after every successful upload, and trusts that ahead of any
 *    bucket query.
 *
 * Usage:  node scripts/upload-handbook-r2.mjs [--bucket <name>] [--concurrency 6] [--force]
 *   --force re-uploads everything, ignoring the manifest (use after editing
 *   existing images, e.g. re-cropping a snippet with the same filename).
 */
import { spawn } from "node:child_process";
import { readdirSync, readFileSync, statSync, existsSync, appendFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const argv = process.argv.slice(2);
const arg = (flag, fallback) =>
  argv.includes(flag) ? argv[argv.indexOf(flag) + 1] : fallback;

const bucket = arg("--bucket", "typologyquiz-handbook");
const concurrency = Number(arg("--concurrency", 8));
const force = argv.includes("--force");
const ROOT = "public/handbook";
const MANIFEST_PATH = join("scripts", `.r2-uploaded-${bucket}.txt`);
const WRANGLER = join("node_modules", ".bin", process.platform === "win32" ? "wrangler.cmd" : "wrangler");

function run(args) {
  return new Promise((resolve) => {
    const p = spawn(WRANGLER, args, { stdio: ["ignore", "pipe", "pipe"], shell: process.platform === "win32" });
    let out = "";
    let err = "";
    p.stdout.on("data", (d) => (out += d));
    p.stderr.on("data", (d) => (err += d));
    p.on("close", (code) => resolve({ code, out, err }));
    p.on("error", (e) => resolve({ code: 1, out: "", err: String(e) }));
  });
}

function loadManifest() {
  if (force || !existsSync(MANIFEST_PATH)) return new Set();
  return new Set(readFileSync(MANIFEST_PATH, "utf8").split("\n").filter(Boolean));
}

if (force && existsSync(MANIFEST_PATH)) writeFileSync(MANIFEST_PATH, "");

const already = loadManifest();

// Everything on disk, as bucket keys, minus what the manifest says is done.
const wanted = [];
for (const slug of readdirSync(ROOT)) {
  const dir = join(ROOT, slug);
  if (!statSync(dir).isDirectory()) continue;
  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".png")) continue;
    const key = `${slug}/${file}`;
    if (!already.has(key)) wanted.push({ key, path: join(dir, file) });
  }
}

console.log(
  `${wanted.length} new image(s) to upload to ${bucket} (${already.size} already recorded as uploaded), ${concurrency} workers`
);
if (!wanted.length) {
  console.log("nothing to do");
  process.exit(0);
}

let uploaded = 0;
let failed = 0;
let index = 0;
const started = Date.now();

async function worker() {
  while (index < wanted.length) {
    const item = wanted[index++];
    const r = await run([
      "r2", "object", "put", `${bucket}/${item.key}`,
      "--file", item.path,
      "--content-type", "image/png",
      "--remote",
    ]);
    if (r.code === 0) {
      uploaded++;
      // Recorded immediately, one line per success, so a killed run loses at
      // most its in-flight batch rather than needing to redo everything.
      appendFileSync(MANIFEST_PATH, item.key + "\n");
    } else {
      failed++;
      if (failed <= 5) console.log(`  FAILED ${item.key}: ${(r.err || r.out).trim().split("\n").pop()?.slice(0, 100)}`);
    }
    const done = uploaded + failed;
    if (done % 250 === 0 || done === wanted.length) {
      const rate = done / ((Date.now() - started) / 1000);
      const left = Math.round((wanted.length - done) / Math.max(rate, 0.01) / 60);
      console.log(`  ${done}/${wanted.length}  (${rate.toFixed(1)}/s, ~${left} min left, ${failed} failed)`);
    }
  }
}

await Promise.all(Array.from({ length: concurrency }, worker));

console.log(`done: ${uploaded} uploaded, ${failed} failed, ${Math.round((Date.now() - started) / 60000)} min`);
if (failed) process.exitCode = 1;
