/**
 * Delete handbook snippet images from out/ that no question can ever display.
 *
 * WHY. A snippet is the cropped picture of the passage an excerpt quotes, shown
 * beside a question's answer. Banks carry more verified excerpts than their
 * questions reference - deliberately, because a verified quote is never deleted
 * just to hit a count - but an excerpt no question cites has no route to the
 * screen, so its picture is dead weight in the deployment.
 *
 * That stopped being cosmetic when Cloudflare refused a deploy: the Workers
 * free plan allows 20,000 static asset files per version and the build had
 * reached 20,324. Roughly 30% of the shipped images were unreachable.
 *
 * This prunes out/ ONLY. public/ keeps every image, so nothing is lost from the
 * repository and re-running the snippet builder is unaffected. If a later
 * question starts citing a previously-unused excerpt, the next build ships its
 * picture automatically.
 *
 * Run after `next build` and before `wrangler deploy`.
 */
import { readdirSync, rmSync, existsSync } from "node:fs";
import { JURISDICTIONS } from "../src/lib/driving/jurisdictions.ts";

let removed = 0;
let kept = 0;

for (const j of JURISDICTIONS) {
  const dir = `out/handbook/${j.slug}`;
  if (!existsSync(dir)) continue;

  const cited = new Set();
  for (const set of j.sets) {
    for (const q of set.questions) if (q.excerptKey) cited.add(q.excerptKey);
  }

  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".png")) continue;
    const key = file.slice(0, -4);
    if (cited.has(key)) {
      kept++;
    } else {
      rmSync(`${dir}/${file}`);
      removed++;
    }
  }
}

console.log(
  `pruned ${removed} unreachable snippet images from out/, kept ${kept} that a question can display`
);
