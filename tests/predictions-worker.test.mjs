import assert from "node:assert/strict";
import test from "node:test";
import worker from "../worker/index.js";
import { createPredictionRouter } from "../worker/predictions.js";

const origin = "https://typologyquiz.com";
const secretEnv = { PREDICTION_SIGNING_SECRET: "fictional-test-secret-only", PREDICTION_SIGNING_KEY_ID: "test-key-1" };

function event(overrides = {}) {
  return {
    id: "fictional-finale", revision: 2, rulesVersion: "rules-1", title: "Fictional Finale",
    description: "A deterministic test event.", audience: "general",
    rating: "General", source: { url: "https://example.test/fictional-schedule", retrievedAt: "2029-12-20T00:00:00Z" },
    opensAt: "2030-01-01T00:00:00.000Z", locksAt: "2030-01-02T00:00:00.000Z",
    expectedSettlementAt: "2030-01-03T00:00:00.000Z",
    review: { status: "approved", reference: "test-review:event-v2" },
    questions: [
      { id: "winner", prompt: "Which team wins?", options: [{ id: "red", label: "Red" }, { id: "blue", label: "Blue" }] },
      { id: "dessert", prompt: "Which dessert appears?", options: [{ id: "cake", label: "Cake" }, { id: "pie", label: "Pie" }] },
    ],
    ...overrides,
  };
}

const picks = [{ questionId: "winner", optionId: "red" }, { questionId: "dessert", optionId: "pie" }];

function post(path, body, headers = {}) {
  return new Request(`${origin}${path}`, { method: "POST", headers: { origin, "content-type": "application/json", ...headers }, body: typeof body === "string" ? body : JSON.stringify(body) });
}

async function body(response) { return response.json(); }

test("event routing publishes only reviewed server-owned events", async () => {
  const router = createPredictionRouter([event(), event({ id: "unreviewed", review: { status: "draft" } })], () => new Date("2030-01-01T12:00:00Z"));
  const response = await router(new Request(`${origin}/api/predictions/events`), secretEnv, "/api/predictions/events");
  assert.equal(response.status, 200);
  const data = await body(response);
  assert.equal(data.events.length, 1);
  assert.equal(data.events[0].phase, "open");
  assert.equal("review" in data.events[0], false);
});

test("receipt uses server time and rejects before-open and at-cutoff submissions", async () => {
  for (const [time, code] of [["2029-12-31T23:59:59Z", "not_open"], ["2030-01-02T00:00:00Z", "locked"]]) {
    const router = createPredictionRouter([event()], () => new Date(time));
    const response = await router(post("/api/predictions/receipts", { eventId: "fictional-finale", picks, issuedAt: "1999-01-01" }), secretEnv, "/api/predictions/receipts");
    // Extra client timestamps are rejected before lifecycle evaluation.
    assert.equal(response.status, 400);
    assert.equal((await body(response)).error, "bad_payload");
    const validShape = await router(post("/api/predictions/receipts", { eventId: "fictional-finale", picks }), secretEnv, "/api/predictions/receipts");
    assert.equal((await body(validShape)).error, code);
  }
});

test("valid receipt verifies and tampering fails", async () => {
  const router = createPredictionRouter([event()], () => new Date("2030-01-01T12:34:56Z"));
  const issued = await body(await router(post("/api/predictions/receipts", { eventId: "fictional-finale", picks }), secretEnv, "/api/predictions/receipts"));
  assert.equal(issued.issuedAt, "2030-01-01T12:34:56.000Z");
  const verified = await body(await router(post("/api/predictions/verify", { receipt: issued.receipt }), secretEnv, "/api/predictions/verify"));
  assert.equal(verified.valid, true);
  assert.equal(verified.settlement.status, "pending");
  const tampered = `${issued.receipt.slice(0, -1)}${issued.receipt.endsWith("a") ? "b" : "a"}`;
  const invalid = await router(post("/api/predictions/verify", { receipt: tampered }), secretEnv, "/api/predictions/verify");
  assert.equal(invalid.status, 400);
  assert.equal((await body(invalid)).error, "invalid_receipt");
});

test("malformed receipt payloads fail closed without throwing", async () => {
  const router = createPredictionRouter([event()], () => new Date("2030-01-01T12:00:00Z"));
  const malformed = ["", "one-part", "***.***", "e30.a", "bm90LWpzb24.a", `${Buffer.from(JSON.stringify({ v: 1, keyId: "test-key-1" })).toString("base64url")}.a`];
  for (const receipt of malformed) {
    const response = await router(post("/api/predictions/verify", { receipt }), secretEnv, "/api/predictions/verify");
    assert.equal(response.status, 400);
    assert.equal((await body(response)).error, "invalid_receipt");
  }
});

test("strict origin, picks, body size, json, and key checks", async () => {
  const router = createPredictionRouter([event()], () => new Date("2030-01-01T12:00:00Z"));
  const missingOrigin = new Request(`${origin}/api/predictions/receipts`, { method: "POST", body: JSON.stringify({ eventId: "fictional-finale", picks }) });
  assert.equal((await router(missingOrigin, secretEnv, "/api/predictions/receipts")).status, 403);
  assert.equal((await router(post("/api/predictions/receipts", { eventId: "fictional-finale", picks }, { origin: "https://evil.invalid" }), secretEnv, "/api/predictions/receipts")).status, 403);
  assert.equal((await router(post("/api/predictions/receipts", { eventId: "fictional-finale", picks: picks.slice(0, 1) }), secretEnv, "/api/predictions/receipts")).status, 400);
  assert.equal((await router(post("/api/predictions/receipts", "{"), secretEnv, "/api/predictions/receipts")).status, 400);
  assert.equal((await router(post("/api/predictions/receipts", "x".repeat(16 * 1024 + 1)), secretEnv, "/api/predictions/receipts")).status, 413);
  assert.equal((await router(post("/api/predictions/receipts", { eventId: "fictional-finale", picks }), {}, "/api/predictions/receipts")).status, 503);
});

async function signedFor(settlement) {
  const openRouter = createPredictionRouter([event()], () => new Date("2030-01-01T12:00:00Z"));
  const { receipt } = await body(await openRouter(post("/api/predictions/receipts", { eventId: "fictional-finale", picks }), secretEnv, "/api/predictions/receipts"));
  const settledRouter = createPredictionRouter([event({ settlement })], () => new Date("2030-01-03T12:00:00Z"));
  return { receipt, settledRouter };
}

test("pending, void, cancelled, corrected versions, spoiler gate, and recap", async () => {
  for (const status of ["void", "cancelled", "corrected"]) {
    const { receipt, settledRouter } = await signedFor({ status, version: 1, eventRevision: 2, review: { status: "approved", reference: `test-review:${status}` }, source: { url: "https://example.test/outcome" } });
    const result = await body(await settledRouter(post("/api/predictions/verify", { receipt, reveal: true }), secretEnv, "/api/predictions/verify"));
    assert.deepEqual(result.settlement, { status, settlementVersion: 1 });
  }
  const settlement = {
    status: "settled", version: 3, eventRevision: 2, review: { status: "approved", reference: "test-review:correction-v3" },
    source: { url: "https://example.test/fictional-outcome" },
    outcomes: [{ questionId: "winner", optionId: "red" }, { questionId: "dessert", optionId: "cake" }],
    explanations: { winner: "Red won the fictional event.", dessert: "Cake appeared in the fictional recap." },
    recapHref: "/weekly/fictional-recap/v/1/",
  };
  const { receipt, settledRouter } = await signedFor(settlement);
  const hidden = await body(await settledRouter(post("/api/predictions/verify", { receipt }), secretEnv, "/api/predictions/verify"));
  assert.deepEqual(hidden.settlement, { status: "settled", settlementVersion: 3, spoiler: true });
  const revealed = await body(await settledRouter(post("/api/predictions/verify", { receipt, reveal: true }), secretEnv, "/api/predictions/verify"));
  assert.equal(revealed.settlement.correct, 1);
  assert.equal(revealed.settlement.total, 2);
  assert.equal(revealed.settlement.settlementVersion, 3);
  assert.equal(revealed.settlement.recapHref, "/weekly/fictional-recap/v/1/");
});

test("unreviewed or revision-mismatched outcomes remain pending", async () => {
  for (const settlement of [
    { status: "settled", version: 1, eventRevision: 1, review: { status: "approved", reference: "test-review:wrong-revision" }, source: { url: "https://example.test/outcome" }, outcomes: picks },
    { status: "settled", version: 1, eventRevision: 2, review: { status: "draft", reference: "test-review:draft" }, source: { url: "https://example.test/outcome" }, outcomes: picks },
  ]) {
    const { receipt, settledRouter } = await signedFor(settlement);
    const result = await body(await settledRouter(post("/api/predictions/verify", { receipt, reveal: true }), secretEnv, "/api/predictions/verify"));
    assert.deepEqual(result.settlement, { status: "pending" });
  }
});

test("key ring verifies outstanding receipts after active-key rotation", async () => {
  const router = createPredictionRouter([event()], () => new Date("2030-01-01T12:00:00Z"));
  const { receipt } = await body(await router(post("/api/predictions/receipts", { eventId: "fictional-finale", picks }), secretEnv, "/api/predictions/receipts"));
  const rotated = { PREDICTION_SIGNING_KEY_ID: "test-key-2", PREDICTION_SIGNING_KEYS: JSON.stringify({ "test-key-1": "fictional-test-secret-only", "test-key-2": "new-fictional-secret" }) };
  const verified = await body(await router(post("/api/predictions/verify", { receipt }), rotated, "/api/predictions/verify"));
  assert.equal(verified.valid, true);
});

test("legacy stats POST, short POST, R2, and asset fallthrough remain routed", async () => {
  const kv = new Map();
  const binding = { async get(key, type) { const value = kv.get(key) ?? null; return type === "json" && value ? JSON.parse(value) : value; }, async put(key, value) { kv.set(key, value); } };
  const env = {
    TRIVIA_STATS: binding, SHORT_LINKS: binding,
    HANDBOOK: { async get() { return null; } },
    ASSETS: { async fetch() { return new Response("asset", { status: 218 }); } },
  };
  const stats = await worker.fetch(post("/api/stats/fictional", { score: 1, total: 2 }), env);
  assert.equal(stats.status, 200);
  assert.equal((await body(stats)).stored, true);
  const short = await worker.fetch(post("/api/short", { path: "/trivia/fictional/?score=1" }), env);
  assert.equal(short.status, 200);
  assert.match((await body(short)).code, /^[0-9a-hjkmnp-tv-z]{7}$/);
  assert.equal((await worker.fetch(new Request(`${origin}/handbook/fictional/page.png`), env)).status, 218);
  assert.equal((await worker.fetch(new Request(`${origin}/elsewhere/`), env)).status, 218);
});

test("reviewed terminal settlements close listing and issuance before cutoff", async () => {
  for (const status of ["settled", "void", "cancelled", "corrected"]) {
    const settlement = { status, version: 1, eventRevision: 2, review: { status: "approved", reference: "test:closed" }, source: { url: "https://example.test/outcome" }, outcomes: picks };
    const router = createPredictionRouter([event({ settlement })], () => new Date("2030-01-01T12:00:00Z"));
    const listed = await body(await router(new Request(`${origin}/api/predictions/events`), secretEnv, "/api/predictions/events"));
    assert.equal(listed.events[0].phase, "locked", status);
    const result = await router(post("/api/predictions/receipts", { eventId: "fictional-finale", picks }), secretEnv, "/api/predictions/receipts");
    assert.equal(result.status, 409, status);
    assert.equal((await body(result)).error, "locked", status);
  }
});
