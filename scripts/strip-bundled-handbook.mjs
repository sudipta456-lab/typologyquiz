/**
 * Remove handbook snippet images from out/ entirely - they are served from R2.
 *
 * HISTORY, because the reasoning still matters. Cloudflare refused a deploy
 * outright: the Workers free plan allows 20,000 static asset files per version
 * and the build had reached 20,324. The first fix pruned images no question
 * could ever display (~30% of the total), which bought headroom but not a
 * durable ceiling - each new jurisdiction added ~180 more.
 *
 * R2 removes the ceiling. worker/index.js now serves /handbook/* from an R2
 * bucket (binding HANDBOOK), with wrangler.toml's `run_worker_first` scoped to
 * that path so the Worker actually gets a chance to run before Cloudflare's
 * default static-asset short-circuit serves the bundled copy instead - that
 * subtlety cost a full round of "verified" checks that were silently reading
 * the local fallback and proving nothing. Confirmed live afterwards: every
 * handbook image now carries this file's R2 cache-control
 * (max-age=31536000, immutable), not the static export's default.
 *
 * So out/handbook is no longer needed in the deployment at all. public/ still
 * keeps every image - nothing is lost from the repository, and
 * scripts/upload-handbook-r2.mjs is what ships a new jurisdiction's pictures to
 * the bucket after each build.
 *
 * Run after `next build` and before `wrangler deploy`.
 */
import { rmSync, existsSync } from "node:fs";

if (existsSync("out/handbook")) {
  rmSync("out/handbook", { recursive: true, force: true });
  console.log("removed out/handbook - handbook images are served from R2, not bundled");
} else {
  console.log("out/handbook was already absent");
}
