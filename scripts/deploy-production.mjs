/**
 * Production release: build with analytics explicitly enabled, strip the handbook images, then deploy.
 *
 * A plain `npm run build` leaves NEXT_PUBLIC_GA_ENABLED unset (see .env.example), which compiles analytics
 * off. This script sets the three public flags for the build child only, from the IDs in src/lib/analytics.ts,
 * so a release can never ship with measurement silently disabled. `npm run build` ends in verify:discovery,
 * which fails unless the compiled gate carries these values, so wrangler runs only after the build gates passed.
 * That covers the build gates only; it does not run the rest of `npm run verify` unless you ran it yourself.
 *
 * Each step runs with an explicit environment. When npm provides its CLI entrypoint (npm_execpath) the step
 * is spawned directly through node without a shell; otherwise it falls back to `npm` from PATH, using a
 * shell only on Windows for npm.cmd, with constant arguments. Pass --dry-run to finish with `wrangler deploy --dry-run` instead of publishing.
 */
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import { readAnalyticsIds } from "./verify-analytics-coverage.mjs";

/** Environment for the production build child. Flags are public build-time values, not secrets. */
export function productionEnv(base, { tagId, destinationId }) {
  return { ...base, NEXT_PUBLIC_GA_ENABLED: "true", NEXT_PUBLIC_GA_ID: destinationId, NEXT_PUBLIC_GA_TAG_ID: tagId };
}

/** Runs `npm <args>` through the npm that started this script when there is one, otherwise from PATH. */
function npm(args, env) {
  const cli = process.env.npm_execpath;
  const [command, argv] = cli && /\.[cm]?js$/.test(cli) ? [process.execPath, [cli, ...args]] : [process.platform === "win32" ? "npm.cmd" : "npm", args];
  const result = spawnSync(command, argv, { stdio: "inherit", env, shell: command.endsWith(".cmd") });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`npm ${args.join(" ")} failed (${result.signal ?? `exit ${result.status}`}); stopped release steps. If the deploy step ran, inspect Cloudflare deployment state before retrying.`);
}

function main() {
  const dryRun = process.argv.includes("--dry-run");
  const env = productionEnv(process.env, readAnalyticsIds());
  console.log(`Production build with NEXT_PUBLIC_GA_ENABLED=true, NEXT_PUBLIC_GA_ID=${env.NEXT_PUBLIC_GA_ID}, NEXT_PUBLIC_GA_TAG_ID=${env.NEXT_PUBLIC_GA_TAG_ID}.`);
  npm(["run", "build"], env);
  npm(["exec", "--", "tsx", "scripts/strip-bundled-handbook.mjs"], env);
  npm(["exec", "--", "wrangler", "deploy", ...(dryRun ? ["--dry-run"] : [])], env);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    main();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }
}
