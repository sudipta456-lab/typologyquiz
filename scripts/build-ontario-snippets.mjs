/**
 * Render handbook snippet images for the Ontario driving bank.
 *
 * The pipeline now lives in scripts/build-html-snippets.mjs, which serves every
 * jurisdiction whose handbook is HTML-only (Ontario and New York). This wrapper
 * is kept because it is the path referenced from src/lib/driving/excerpts.ts and
 * it is what everyone types.
 *
 * Usage:
 *   npx tsx scripts/build-ontario-snippets.mjs [--only key1,key2]
 *   (equivalent to: npx tsx scripts/build-html-snippets.mjs ontario ...)
 */
import { buildSnippets } from "./build-html-snippets.mjs";

const onlyArg = process.argv.indexOf("--only");
const only = onlyArg > -1 ? new Set(process.argv[onlyArg + 1].split(",")) : null;

buildSnippets("ontario", { only }).catch((e) => {
  console.error(e);
  process.exit(1);
});
