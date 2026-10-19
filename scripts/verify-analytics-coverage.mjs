/**
 * Static check that every exported HTML page actually loads the compiled analytics loader.
 *
 * For each page in out/ this follows the scripts the browser will fetch eagerly: every
 * <script src> in the HTML, plus the "otherChunks" lists that Turbopack runtime chunks use to
 * pull in their siblings before startup. At least one chunk in that per-page closure must
 * contain the loader (the typologyquiz-analytics marker plus the configured tag and destination
 * IDs). A loader that exists in some chunk somewhere in the export is not enough.
 *
 * Chunks that are only named inside other code (lazy dynamic imports) are not counted:
 * they may never be requested, so they cannot prove a page is measured.
 *
 * It also requires every exported HTML route, including 404.html (as /404/), to be in the
 * generated analytics manifest. /_not-found/ is the one route exempt from the manifest because
 * it is reported as /404/, but it must still load the loader.
 *
 * Unless --allow-disabled is passed, each page's scripts must also carry the compiled activation gate
 * analyticsEnabled("true", destinationId, window.location.hostname, tagId) with the production flag and IDs, so
 * a build made without NEXT_PUBLIC_GA_* fails. The hostname check stays in the browser: localhost never activates.
 *
 * Static files only: no network access and no execution of compiled code.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { pathToFileURL } from "node:url";

export const LOADER_MARKER = "typologyquiz-analytics";
const MANIFEST_EXEMPT_ROUTES = new Set(["/_not-found/"]);

/** src values of every external <script> tag. Inline scripts are ignored. */
export function scriptSources(html) {
  const sources = [];
  for (const tag of html.matchAll(/<script\b[^>]*>/gi)) {
    const src = /\bsrc\s*=\s*(?:"([^"]*)"|'([^']*)')/i.exec(tag[0]);
    if (src) sources.push(src[1] ?? src[2]);
  }
  return sources;
}

/** Export-relative path of a same-site Next asset, or null for anything else. */
function localAsset(src) {
  const path = src.split(/[?#]/)[0].replace(/^\/+/, "");
  return path.startsWith("_next/") ? path : null;
}

/** Sibling chunks a Turbopack runtime chunk loads before it starts: otherChunks:["static/chunks/x.js", ...]. */
export function eagerChunks(js) {
  const found = [];
  for (const list of js.matchAll(/otherChunks\s*:\s*\[([^\]]*)\]/g)) {
    for (const entry of list[1].matchAll(/["']([^"']+\.js)["']/g)) {
      const path = entry[1].replace(/^\/+/, "");
      found.push(path.startsWith("_next/") ? path : `_next/${path}`);
    }
  }
  return found;
}

function readAsset(outDir, rel, cache) {
  if (!cache.has(rel)) {
    const file = join(outDir, rel);
    cache.set(rel, existsSync(file) ? readFileSync(file, "utf8") : null);
  }
  return cache.get(rel);
}

/** Scripts a page loads eagerly. `missing` lists referenced files that are not in the export. */
export function scriptClosure(html, outDir, cache = new Map()) {
  const reached = new Set();
  const missing = new Set();
  const queue = scriptSources(html).map(localAsset).filter(Boolean);
  while (queue.length) {
    const rel = queue.pop();
    if (reached.has(rel) || missing.has(rel)) continue;
    const text = readAsset(outDir, rel, cache);
    if (text === null) {
      missing.add(rel);
      continue;
    }
    reached.add(rel);
    queue.push(...eagerChunks(text));
  }
  return { reached, missing };
}

export function isAnalyticsLoader(js, { tagId, destinationId }) {
  return js.includes(LOADER_MARKER) && js.includes(tagId) && js.includes(destinationId);
}

const STRING_LITERAL = String.raw`"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'`;
const GATE_ARGUMENT = String.raw`(?:${STRING_LITERAL}|[^,()"'\`]+)`;
// analyticsEnabled(flag, measurementId, window.location.hostname, tagId) after bundling. The callee name is
// whatever the minifier chose, so only the argument shape is matched. The code is only read, never run.
const GATE_CALL = new RegExp(String.raw`(?<![\w$])[\w$]+\s*\(\s*(${GATE_ARGUMENT})\s*,\s*(${GATE_ARGUMENT})\s*,\s*(?:[\w$]+\s*\.\s*)?location\s*\.\s*hostname\s*,\s*(${GATE_ARGUMENT})\s*\)`, "g");

/** A string literal's text, or null for anything else (void 0, a variable, !0). `raw` keeps what was compiled. */
function literal(raw) {
  const text = raw.trim();
  return /^(?:"[\s\S]*"|'[\s\S]*')$/.test(text) ? { raw: text, value: text.slice(1, -1) } : { raw: text, value: null };
}

/** Every compiled analyticsEnabled(...) call in a chunk, in source order. */
export function gateCalls(js) {
  return [...js.matchAll(GATE_CALL)].map((match) => ({ flag: literal(match[1]), id: literal(match[2]), tag: literal(match[3]) }));
}

/** Why a compiled gate call would not activate analytics on the production hostnames. Empty when it would. */
export function gateProblems(call, { tagId, destinationId }) {
  const problems = [];
  if (call.flag.value !== "true") problems.push(`enable flag compiled as ${call.flag.raw} instead of "true"`);
  if (call.id.value !== destinationId) problems.push(`destination ID compiled as ${call.id.raw} instead of "${destinationId}"`);
  if (call.tag.value !== tagId) problems.push(`tag ID compiled as ${call.tag.raw} instead of "${tagId}"`);
  return problems;
}

/** Every exported page as { file, route }. 404.html is the Next fallback and is reported as /404/. */
export function htmlRoutes(outDir) {
  const routes = [];
  const walk = (dir) => {
    for (const item of readdirSync(dir, { withFileTypes: true })) {
      const file = join(dir, item.name);
      if (item.isDirectory()) {
        if (item.name !== "_next") walk(file);
      } else if (item.name === "index.html") {
        const parts = relative(outDir, dir).split(sep).filter(Boolean);
        routes.push({ file, route: `/${parts.join("/")}${parts.length ? "/" : ""}` });
      } else if (dir === outDir && item.name === "404.html") routes.push({ file, route: "/404/" });
    }
  };
  walk(outDir);
  return routes;
}

/**
 * With requireEnabled (the default, and what a release must use) each page must also load the compiled
 * activation gate with the production flag and IDs: at least minGateCalls calls (page views and events
 * each check it) and none of them wrong. allowDisabled-style builds pass requireEnabled: false and then
 * only the loader and script closure are checked. This is a static read of the compiled files; it is
 * not evidence that a browser sent anything to Google.
 */
export function checkCoverage({ outDir, paths, tagId, destinationId, requireEnabled = true, minGateCalls = 2 }) {
  const errors = [];
  const routes = htmlRoutes(outDir);
  if (routes.length === 0) errors.push(`No exported HTML pages found in ${outDir}`);
  const known = new Set(paths);
  const cache = new Map();
  const loaderVerdicts = new Map();
  const gateVerdicts = new Map();
  const loaders = new Set();
  const loaderIn = (rel) => {
    if (!loaderVerdicts.has(rel)) loaderVerdicts.set(rel, isAnalyticsLoader(readAsset(outDir, rel, cache) ?? "", { tagId, destinationId }));
    return loaderVerdicts.get(rel);
  };
  const gatesIn = (rel) => {
    if (!gateVerdicts.has(rel)) gateVerdicts.set(rel, gateCalls(readAsset(outDir, rel, cache) ?? ""));
    return gateVerdicts.get(rel);
  };
  const reportedGates = new Set();
  for (const { file, route } of routes) {
    if (!known.has(route) && !MANIFEST_EXEMPT_ROUTES.has(route)) errors.push(`${route}: exported page is missing from the analytics manifest`);
    const { reached, missing } = scriptClosure(readFileSync(file, "utf8"), outDir, cache);
    for (const rel of missing) errors.push(`${route}: references ${rel}, which is not in the export`);
    const found = [...reached].filter(loaderIn);
    if (found.length === 0) errors.push(`${route}: no script it loads contains the analytics loader`);
    for (const rel of found) loaders.add(rel);
    if (!requireEnabled || found.length === 0) continue;
    const calls = [...reached].flatMap((rel) => gatesIn(rel).map((call) => ({ rel, call })));
    const wrong = calls.filter(({ call }) => gateProblems(call, { tagId, destinationId }).length > 0);
    if (calls.length < minGateCalls || wrong.length > 0) errors.push(`${route}: the scripts it loads do not carry an enabled analytics gate (${calls.length} gate call(s) found, ${wrong.length} wrong; need at least ${minGateCalls} correct)`);
    for (const { rel, call } of wrong) {
      for (const problem of gateProblems(call, { tagId, destinationId })) {
        const message = `${rel}: ${problem}`;
        if (!reportedGates.has(message)) {
          reportedGates.add(message);
          errors.unshift(message);
        }
      }
    }
  }
  if (routes.length > 0 && loaders.size === 0) errors.push(`No compiled chunk contains the analytics loader (${LOADER_MARKER}, ${tagId}, ${destinationId})`);
  return { errors, pages: routes.length, loaders: [...loaders].sort() };
}

/** Reads analyticsPaths out of the generated manifest source without importing TypeScript. */
export function manifestPaths(source) {
  const match = /export const analyticsPaths[^=]*=\s*(\[[^\]]*\])/.exec(source);
  if (!match) throw new Error("analyticsPaths not found in the analytics manifest");
  return JSON.parse(match[1]);
}

function constant(source, name) {
  const match = new RegExp(`export const ${name}\\s*=\\s*"([^"]+)"`).exec(source);
  if (!match) throw new Error(`${name} not found in src/lib/analytics.ts`);
  return match[1];
}

/** The configured tag and destination IDs, read from src/lib/analytics.ts so no script keeps its own copy. */
export function readAnalyticsIds(source = readFileSync("src/lib/analytics.ts", "utf8")) {
  return { tagId: constant(source, "GA_TAG_ID"), destinationId: constant(source, "GA_MEASUREMENT_ID") };
}

function main() {
  const allowDisabled = process.argv.includes("--allow-disabled");
  const result = checkCoverage({
    outDir: "out",
    paths: manifestPaths(readFileSync("src/lib/analytics-manifest.generated.ts", "utf8")),
    ...readAnalyticsIds(),
    requireEnabled: !allowDisabled,
  });
  if (result.errors.length) {
    const shown = result.errors.slice(0, 25);
    const hint = allowDisabled ? "" : "\nA production build needs NEXT_PUBLIC_GA_ENABLED=true plus both IDs (npm run deploy sets them). For a local preview with analytics off, use npm run build:preview.";
    throw new Error(`Analytics coverage failed for ${result.errors.length} problem(s):\n${shown.join("\n")}${result.errors.length > shown.length ? `\n...and ${result.errors.length - shown.length} more` : ""}${hint}`);
  }
  console.log(`Analytics coverage passed: ${result.pages} exported pages each load the analytics loader (${result.loaders.join(", ")}). ${allowDisabled ? "Activation gate NOT required (--allow-disabled): do not release this build." : "Compiled activation gate carries the production flag and IDs."}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
