import assert from "node:assert/strict";
import { chmodSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";

const script = path.resolve("scripts/ops-dashboard.mjs");

// Runs the real script in a temp cwd whose ./scripts/mac-run.sh is a fake Wrangler (no network).
// The fake validates argv strictly: `npx wrangler kv key <get|list|put> ...`; anything else exits 2.
// `get` / `list` ({ output, fail, stderr }) control the simulated reads; `putFail` makes put exit 1.
// Any `put` payload and every subcommand called are recorded.
const presentList = { output: JSON.stringify([{ name: "current" }]) };

function branch(dir, name, spec) {
  writeFileSync(path.join(dir, `${name}-output`), spec.output ?? "");
  writeFileSync(path.join(dir, `${name}-stderr`), spec.stderr ?? "wrangler failed");
  return spec.fail ? `cat "$DIR/${name}-stderr" >&2; exit 1` : `cat "$DIR/${name}-output"`;
}

function run(args, get, { list = presentList, putFail = false } = {}) {
  const dir = mkdtempSync(path.join(tmpdir(), "ops-dashboard-"));
  mkdirSync(path.join(dir, "scripts"));
  const getBranch = branch(dir, "get", get);
  const listBranch = branch(dir, "list", list);
  writeFileSync(
    path.join(dir, "scripts/mac-run.sh"),
    [
      "#!/bin/bash",
      `DIR=${JSON.stringify(dir)}`,
      'bad() { echo "unexpected wrangler argv: $*" >&2; exit 2; }',
      '[ "$1" = npx ] && [ "$2" = wrangler ] && [ "$3" = kv ] && [ "$4" = key ] || bad "$@"',
      'echo "$5" >> "$DIR/calls"',
      'case "$5" in',
      '  get) [ $# -eq 10 ] && [ "$6" = current ] && [ "$7" = --binding ] && [ "$8" = OPS_DASHBOARD ] && [ "$9" = --remote ] && [ "${10}" = --text ] || bad "$@"',
      `     ${getBranch};;`,
      '  list) [ $# -eq 10 ] && [ "$6" = --prefix ] && [ "$7" = current ] && [ "$8" = --binding ] && [ "$9" = OPS_DASHBOARD ] && [ "${10}" = --remote ] || bad "$@"',
      `     ${listBranch};;`,
      '  put) [ $# -eq 10 ] && [ "$6" = current ] && [ "$8" = --binding ] && [ "$9" = OPS_DASHBOARD ] && [ "${10}" = --remote ] || bad "$@"',
      '     printf "%s" "$7" > "$DIR/put-payload"',
      `     ${putFail ? 'echo "put failed" >&2; exit 1' : "exit 0"};;`,
      "  *) bad \"$@\";;",
      "esac",
      "",
    ].join("\n"),
  );
  chmodSync(path.join(dir, "scripts/mac-run.sh"), 0o755);
  const result = spawnSync(process.execPath, [script, ...args], { cwd: dir, encoding: "utf8" });
  const putPath = path.join(dir, "put-payload");
  const callsPath = path.join(dir, "calls");
  try {
    return {
      ...result,
      written: existsSync(putPath) ? JSON.parse(readFileSync(putPath, "utf8")) : null,
      calls: existsSync(callsPath) ? readFileSync(callsPath, "utf8").split("\n").filter(Boolean) : [],
    };
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

const stored = {
  generatedAt: "2026-10-17T00:00:00.000Z",
  target: "custom target",
  totals: { qualifiedOpportunities: 7, referralVisits: 120, referralQuizStarts: 33, optInInquiries: 2 },
  futureField: { keep: ["me"] },
  roles: [
    { id: "market-scout", name: "Market intelligence scout", cadence: "custom cadence", status: "Active", updatedAt: "2026-10-17T06:00:00.000Z", nextRun: "2026-10-18T00:00:00.000Z", summary: "scout done" },
    { id: "community-contributor", name: "Community contributor", cadence: "11:00", status: "Scheduled", updatedAt: null, nextRun: null, summary: "old" },
    { id: "legacy-role", name: "Legacy", cadence: "x", status: "Active", updatedAt: "2026-10-01T00:00:00.000Z", nextRun: null, summary: "legacy" },
  ],
};

const failures = {
  "wrangler failure": { fail: true },
  "empty payload": { output: "" },
  "whitespace payload": { output: "  \n" },
  "invalid JSON": { output: "{not json" },
  "null": { output: "null" },
  "array": { output: "[]" },
  "missing roles": { output: JSON.stringify({ totals: stored.totals }) },
  "roles not an array": { output: JSON.stringify({ ...stored, roles: {} }) },
  "role entry null": { output: JSON.stringify({ ...stored, roles: [null] }) },
  "role without id": { output: JSON.stringify({ ...stored, roles: [{ status: "Active" }] }) },
  "missing totals": { output: JSON.stringify({ roles: stored.roles }) },
  "totals not an object": { output: JSON.stringify({ ...stored, totals: 5 }) },
  "totals an array": { output: JSON.stringify({ ...stored, totals: [] }) },
  "role id not a string": { output: JSON.stringify({ ...stored, roles: [{ id: 3 }] }) },
};

for (const [name, get] of Object.entries(failures)) {
  test(`report fails closed without writing: ${name}`, () => {
    const result = run(["report", "community-contributor", "Posted", "done"], get);
    assert.notEqual(result.status, 0);
    assert.equal(result.written, null);
    assert.deepEqual(result.calls, ["get"], "report must be one strict get with no list fallback");
  });
}

for (const [name, get] of Object.entries(failures)) {
  // Present `current` means a failed, empty, or invalid get must never be treated as absence.
  test(`init with present current cannot write when get is bad: ${name}`, () => {
    const result = run(["init"], get);
    assert.notEqual(result.status, 0);
    assert.equal(result.written, null);
  });
}

const badLists = {
  "list failure": { fail: true },
  "list failure mentioning not found": { fail: true, stderr: "Value not found" },
  "empty list output": { output: "" },
  "invalid list JSON": { output: "{nope" },
  "list is an object": { output: JSON.stringify({ name: "current" }) },
  "list null": { output: "null" },
  "record not an object": { output: JSON.stringify(["current"]) },
  "record without name": { output: JSON.stringify([{ expiration: 1 }]) },
  "record empty name": { output: JSON.stringify([{ name: "" }]) },
  "record non-string name": { output: JSON.stringify([{ name: 3 }]) },
  "one bad record among good": { output: JSON.stringify([{ name: "other" }, { name: null }]) },
};

for (const [name, list] of Object.entries(badLists)) {
  test(`init cannot write when list is bad: ${name}`, () => {
    const result = run(["init"], { output: "" }, { list });
    assert.notEqual(result.status, 0);
    assert.equal(result.written, null);
    assert.ok(!result.calls.includes("put"));
  });
}

test("init bootstraps defaults only from a successful valid list with no exact current", () => {
  for (const output of ["[]", JSON.stringify([{ name: "other" }])]) {
    const result = run(["init"], { fail: true }, { list: { output } });
    assert.equal(result.status, 0, result.stderr);
    assert.deepEqual(result.calls, ["list", "put"]);
    assert.equal(result.written.roles.length, 5);
    assert.equal(result.written.totals.referralVisits, 0);
    assert.ok(result.written.generatedAt);
  }
});

test("a prefix match such as current-old is not an exact current", () => {
  const list = { output: JSON.stringify([{ name: "current-old" }, { name: "current2" }]) };
  const result = run(["init"], { fail: true }, { list });
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(result.calls, ["list", "put"]);
  assert.equal(result.written.roles.length, 5);
});

test("init preserves an existing valid document", () => {
  const result = run(["init"], { output: JSON.stringify(stored) });
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(result.calls, ["list", "get", "put"]);
  assert.deepEqual(result.written.totals, stored.totals);
  assert.deepEqual(result.written.futureField, stored.futureField);
  assert.deepEqual(result.written.roles.find((r) => r.id === "market-scout"), stored.roles[0]);
  assert.deepEqual(result.written.roles.find((r) => r.id === "legacy-role"), stored.roles[2]);
});

test("duplicate role ids are rejected without writing", () => {
  const dup = { ...stored, roles: [stored.roles[0], { ...stored.roles[0], summary: "dup" }] };
  for (const args of [["report", "market-scout", "Posted", "x"], ["init"]]) {
    const result = run(args, { output: JSON.stringify(dup) });
    assert.notEqual(result.status, 0);
    assert.equal(result.written, null);
  }
});

test("report updates one role and preserves everything else", () => {
  const result = run(["report", "community-contributor", "Posted", "  shipped   the reply "], { output: JSON.stringify(stored) });
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(result.calls, ["get", "put"]);
  const out = result.written;
  assert.deepEqual(out.totals, stored.totals);
  assert.equal(out.target, "custom target");
  assert.deepEqual(out.futureField, stored.futureField);
  const community = out.roles.find((r) => r.id === "community-contributor");
  assert.equal(community.status, "Posted");
  assert.equal(community.summary, "shipped the reply");
  assert.equal(community.cadence, "11:00");
  assert.ok(community.updatedAt);
  assert.notEqual(out.generatedAt, stored.generatedAt);
  assert.deepEqual(out.roles.find((r) => r.id === "market-scout"), stored.roles[0]);
  assert.deepEqual(out.roles.find((r) => r.id === "legacy-role"), stored.roles[2]);
});

test("report for an unknown role does not write", () => {
  const result = run(["report", "no-such-role", "Posted", "x"], { output: JSON.stringify(stored) });
  assert.notEqual(result.status, 0);
  assert.equal(result.written, null);
});

test("a failed put exits nonzero and prints no success message", () => {
  for (const [args, get, opts] of [
    [["report", "market-scout", "Posted", "x"], { output: JSON.stringify(stored) }, { putFail: true }],
    [["init"], { fail: true }, { list: { output: "[]" }, putFail: true }],
  ]) {
    const result = run(args, get, opts);
    assert.notEqual(result.status, 0);
    assert.doesNotMatch(result.stdout, /operations dashboard/);
  }
});

