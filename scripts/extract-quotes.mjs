/**
 * Dump a jurisdiction's excerpt quotes to tmp/<slug>-quotes.json, the input
 * that scripts/build-excerpt-snippets.py and scripts/verify-excerpts.py read.
 *
 * Reads src/lib/driving/<slug>/index.ts (the per-jurisdiction module), so it
 * works for a bank that is not yet wired into the registry.
 *
 * Usage:  npx tsx scripts/extract-quotes.mjs <slug>
 */
import { mkdirSync, writeFileSync } from "node:fs";

const slug = process.argv[2];
if (!slug) {
  console.error("usage: npx tsx scripts/extract-quotes.mjs <slug>");
  process.exit(2);
}

const mod = await import(`../src/lib/driving/${slug}/index.ts`);
if (!Array.isArray(mod.excerpts)) {
  console.error(`src/lib/driving/${slug}/index.ts does not export excerpts[]`);
  process.exit(2);
}

mkdirSync("tmp", { recursive: true });
const out = mod.excerpts.map((e) => ({ key: e.key, quote: e.quote, url: e.url, section: e.section }));
writeFileSync(`tmp/${slug}-quotes.json`, JSON.stringify(out, null, 2), "utf8");
console.log(`tmp/${slug}-quotes.json: ${out.length} quotes`);
