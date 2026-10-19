import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { checkCoverage, eagerChunks, gateCalls, gateProblems, manifestPaths, readAnalyticsIds, scriptSources } from "../scripts/verify-analytics-coverage.mjs";

const ids = { tagId: "G-TAGFIXTURE", destinationId: "G-DESTFIXTURE" };
// Shaped like the minified production chunk: two gate calls (page views, events) beside the loader.
const gate = (flag = '"true"', id = `"${ids.destinationId}"`, tag = `"${ids.tagId}"`, name = "c") => `${name}(${flag},${id},window.location.hostname,${tag})`;
const LOADER = `x.id="typologyquiz-analytics";x.src="https://example.test/gtag/js?id=${ids.tagId}";y="${ids.destinationId}";if(${gate()}){a()}if(${gate()}){b()}`;
const page = (...scripts) => `<html><body>${scripts.map((src) => `<script src="${src}" async=""></script>`).join("")}<script>self.__next_f.push([1,"inline"])</script></body></html>`;

function exportDir(files) {
  const dir = mkdtempSync(join(tmpdir(), "analytics-coverage-"));
  for (const [path, text] of Object.entries(files)) {
    mkdirSync(dirname(join(dir, path)), { recursive: true });
    writeFileSync(join(dir, path), text);
  }
  return dir;
}

function run(files, paths = ["/", "/about/", "/404/"]) {
  const outDir = exportDir(files);
  try {
    return checkCoverage({ outDir, paths, ...ids });
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }
}

const CHUNK = "_next/static/chunks";
const base = {
  [`${CHUNK}/loader.js`]: LOADER,
  [`${CHUNK}/other.js`]: "console.log(1)",
  "index.html": page(`/${CHUNK}/loader.js`),
  "about/index.html": page(`/${CHUNK}/loader.js`, `/${CHUNK}/other.js`),
  "404.html": page(`/${CHUNK}/loader.js`),
};

test("a fully covered export passes, with 404.html reported as /404/", () => {
  const result = run(base);
  assert.deepEqual(result.errors, []);
  assert.equal(result.pages, 3);
  assert.deepEqual(result.loaders, [`${CHUNK}/loader.js`]);
});

test("a loader chunk that exists in the export does not cover a page that never loads it", () => {
  const result = run({ ...base, "about/index.html": page(`/${CHUNK}/other.js`) });
  assert.deepEqual(result.errors, ["/about/: no script it loads contains the analytics loader"]);
});

test("the loader is found through a runtime chunk's eager otherChunks list", () => {
  const files = {
    ...base,
    [`${CHUNK}/runtime.js`]: `push(["x",{otherChunks:["static/chunks/loader.js","static/chunks/other.js"],runtimeModuleIds:[1]}])`,
    "about/index.html": page(`/${CHUNK}/runtime.js`),
  };
  assert.deepEqual(run(files).errors, []);
});

test("a chunk only named inside other code (a lazy import) does not count", () => {
  const files = {
    ...base,
    [`${CHUNK}/lazy.js`]: `import("static/chunks/loader.js");load("static/chunks/loader.js")`,
    "about/index.html": page(`/${CHUNK}/lazy.js`),
  };
  assert.deepEqual(run(files).errors, ["/about/: no script it loads contains the analytics loader"]);
});

test("a loader without the marker, tag or destination is not the configured loader", () => {
  for (const loader of [LOADER.replaceAll("typologyquiz-analytics", "other"), LOADER.replaceAll(ids.tagId, "G-OTHER"), LOADER.replaceAll(ids.destinationId, "G-OTHER")]) {
    const result = run({ ...base, [`${CHUNK}/loader.js`]: loader });
    assert.equal(result.errors.filter((error) => error.includes("no script it loads")).length, 3);
    assert.ok(result.errors.some((error) => error.startsWith("No compiled chunk contains")));
  }
});

test("a script referenced by a page but absent from the export is reported", () => {
  const result = run({ ...base, "about/index.html": page(`/${CHUNK}/loader.js`, `/${CHUNK}/gone.js?v=1`) });
  assert.deepEqual(result.errors, [`/about/: references ${CHUNK}/gone.js, which is not in the export`]);
});

test("every exported route must be in the manifest, except /_not-found/, which must still load the loader", () => {
  const files = { ...base, "_not-found/index.html": page(`/${CHUNK}/loader.js`), "secret/index.html": page(`/${CHUNK}/loader.js`) };
  assert.deepEqual(run(files).errors, ["/secret/: exported page is missing from the analytics manifest"]);
  const unloaded = { ...base, "_not-found/index.html": page(`/${CHUNK}/other.js`) };
  assert.deepEqual(run(unloaded).errors, ["/_not-found/: no script it loads contains the analytics loader"]);
  assert.deepEqual(run({ ...base, "404.html": page(`/${CHUNK}/loader.js`) }, ["/", "/about/"]).errors, ["/404/: exported page is missing from the analytics manifest"]);
});

test("an empty export fails instead of passing vacuously", () => {
  assert.ok(run({ [`${CHUNK}/loader.js`]: LOADER }).errors.length > 0);
});

const loaderWith = (...gates) => `x.id="typologyquiz-analytics";x.src="https://example.test/gtag/js?id=${ids.tagId}";y="${ids.destinationId}";${gates.map((g) => `if(${g}){a()}`).join("")}`;
const GATE_ERROR = /^\/(about\/)?: the scripts it loads do not carry an enabled analytics gate/;

test("a loader that is present but compiled with the flag off or unset fails normal production coverage", () => {
  for (const flag of ['"false"', "void 0", "!1", '""', '"TRUE"']) {
    const result = run({ ...base, [`${CHUNK}/loader.js`]: loaderWith(gate(flag), gate(flag)) });
    assert.equal(result.errors.filter((error) => error.includes("analytics gate")).length, 3, flag);
    assert.ok(result.errors.some((error) => error.includes("enable flag compiled as")), flag);
  }
});

test("wrong destination or tag IDs in the gate fail, and so does a gate with fewer calls than the source has", () => {
  assert.ok(run({ ...base, [`${CHUNK}/loader.js`]: loaderWith(gate(), gate('"true"', '"G-OLD"')) }).errors.some((error) => error.includes('destination ID compiled as "G-OLD"')));
  assert.ok(run({ ...base, [`${CHUNK}/loader.js`]: loaderWith(gate('"true"', undefined, '"G-OLD"'), gate()) }).errors.some((error) => error.includes('tag ID compiled as "G-OLD"')));
  for (const loader of [loaderWith(gate()), loaderWith()]) {
    const errors = run({ ...base, [`${CHUNK}/loader.js`]: loader }).errors;
    assert.equal(errors.length, 3);
    assert.ok(errors.every((error) => GATE_ERROR.test(error) || error.startsWith("/404/: the scripts")), errors.join("\n"));
  }
});

test("the gate is found whatever the minifier names the function, however it quotes and spaces the arguments", () => {
  const variants = [
    gate('"true"', undefined, undefined, "$a"),
    `analyticsEnabled( 'true' , '${ids.destinationId}' ,\n window.location.hostname , '${ids.tagId}' )`,
    `n.t("true","${ids.destinationId}",o.location.hostname,"${ids.tagId}")`,
  ];
  assert.deepEqual(run({ ...base, [`${CHUNK}/loader.js`]: loaderWith(...variants) }).errors, []);
});

test("the gate may sit in a sibling chunk the page also loads, but not in one it never loads", () => {
  const split = { ...base, [`${CHUNK}/loader.js`]: loaderWith(), [`${CHUNK}/gate.js`]: `${gate()};${gate()}` };
  const result = run({ ...split, "index.html": page(`/${CHUNK}/loader.js`, `/${CHUNK}/gate.js`), "about/index.html": page(`/${CHUNK}/loader.js`, `/${CHUNK}/gate.js`), "404.html": page(`/${CHUNK}/loader.js`) });
  assert.deepEqual(result.errors, ["/404/: the scripts it loads do not carry an enabled analytics gate (0 gate call(s) found, 0 wrong; need at least 2 correct)"]);
});

test("--allow-disabled semantics: requireEnabled false accepts a disabled gate but still needs the loader and every script", () => {
  const off = { ...base, [`${CHUNK}/loader.js`]: loaderWith(gate('"false"'), gate('"false"')) };
  const outDir = exportDir(off);
  try {
    assert.deepEqual(checkCoverage({ outDir, paths: ["/", "/about/", "/404/"], ...ids, requireEnabled: false }).errors, []);
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }
  const missing = { ...off, "about/index.html": page(`/${CHUNK}/other.js`) };
  const dir = exportDir(missing);
  try {
    assert.deepEqual(checkCoverage({ outDir: dir, paths: ["/", "/about/", "/404/"], ...ids, requireEnabled: false }).errors, ["/about/: no script it loads contains the analytics loader"]);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test("gate parsing reads only the call shape and reports each wrong argument", () => {
  const calls = gateCalls(`${gate()};foo(1,2,3);bar("a","b","c");${gate('void 0')}`);
  assert.equal(calls.length, 2);
  assert.deepEqual(gateProblems(calls[0], ids), []);
  assert.deepEqual(gateProblems({ flag: { raw: "!1", value: null }, id: { raw: '"x"', value: "x" }, tag: { raw: '"y"', value: "y" } }, ids).length, 3);
  assert.deepEqual(readAnalyticsIds('export const GA_TAG_ID = "G-T";\nexport const GA_MEASUREMENT_ID = "G-M";'), { tagId: "G-T", destinationId: "G-M" });
});

test("script and manifest parsing ignore inline scripts, external hosts and unrelated exports", () => {
  assert.deepEqual(scriptSources(`<script src='/a.js'></script><script>var s="<b>"</script><script async src="https://x.test/b.js"></script>`), ["/a.js", "https://x.test/b.js"]);
  assert.deepEqual(eagerChunks(`a({otherChunks:["static/chunks/a.js","/_next/static/chunks/b.js"],x:1}) c(["static/chunks/lazy.js"])`), ["_next/static/chunks/a.js", "_next/static/chunks/b.js"]);
  assert.deepEqual(manifestPaths(`// header\nexport const analyticsPaths: readonly string[] = ["/","/about/"];\nexport const analyticsAliases = {"/x/":"/y/"};`), ["/", "/about/"]);
});
