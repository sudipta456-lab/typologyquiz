import assert from "node:assert/strict";
import test from "node:test";
import { GroupRoom, handleGroup } from "../worker/group.js";

const HOST_SECRET = "host-secret";
const HOST_HASH = "736340e6842adca333b34d6beca003ab19f13a13ccc70573114996ae6627b2f2";

function context() {
  const data = new Map();
  return { storage: { get: async (key) => structuredClone(data.get(key)), put: async (key, value) => data.set(key, structuredClone(value)), setAlarm: async () => {}, deleteAll: async () => data.clear() } };
}
function request(path, body) { return new Request(`https://group-room/${path}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) }); }
async function readyRoom() {
  const room = new GroupRoom(context());
  const response = await room.fetch(request("init", { code: "ABC234", hostHash: HOST_HASH, seed: "s".repeat(16), slug: "planets" }));
  assert.equal(response.status, 201);
  return room;
}
async function join(room, name) { return (await room.fetch(request("join", { name }))).json(); }
async function start(room) {
  const originalNow = Date.now;
  const fixed = 1_700_000_000_000;
  try {
    Date.now = () => fixed;
    const started = await room.fetch(request("start", { secret: HOST_SECRET, revision: room.room.revision }));
    assert.equal(started.status, 200);
    Date.now = () => fixed + 6000;
    return (await started.json()).room;
  } finally { Date.now = originalNow; }
}
async function begin(room, token) { return (await room.fetch(request("begin", { token }))).json(); }

test("group room has a catalog-backed lobby, synchronized start, and bounded score board", async () => {
  const room = await readyRoom();
  const ada = await join(room, "Ada");
  const grace = await join(room, "Grace");
  assert.equal(ada.room.state, "lobby");
  await start(room);
  const adaAttempt = await begin(room, ada.token);
  const graceAttempt = await begin(room, grace.token);
  assert.match(adaAttempt.attemptId, /^[A-Za-z0-9_-]{16}$/);
  assert.equal((await room.fetch(request("complete", { token: ada.token, attempt: adaAttempt.attemptId, slug: "planets", score: 6, total: 8, timeMs: 5000, outcome: "time" }))).status, 200);
  assert.equal((await room.fetch(request("complete", { token: grace.token, attempt: graceAttempt.attemptId, slug: "planets", score: 8, total: 8, timeMs: 9000, outcome: "complete" }))).status, 200);
  const info = await (await room.fetch(new Request("https://group-room/info"))).json();
  assert.deepEqual(info.board.map((row) => [row.name, row.score, row.rank]), [["Grace", 8, 1], ["Ada", 6, 2]]);
  assert.equal(JSON.stringify(info).includes("token"), false);
  assert.equal(JSON.stringify(info).includes("hostHash"), false);
  assert.equal(JSON.stringify(info).includes("attempt"), false);
  assert.equal(info.seed, "s".repeat(16));
});

test("group room binds result to room, player, started attempt and first completion", async () => {
  const room = await readyRoom();
  const joined = await join(room, "Ada");
  assert.equal((await room.fetch(request("complete", { token: joined.token, attempt: "a".repeat(16), slug: "planets", score: 4, total: 8, timeMs: 2000, outcome: "time" }))).status, 409);
  await start(room);
  const attempt = await begin(room, joined.token);
  assert.equal((await room.fetch(request("complete", { token: joined.token, attempt: attempt.attemptId, slug: "countries", score: 4, total: 8, timeMs: 2000, outcome: "time" }))).status, 400);
  assert.equal((await room.fetch(request("complete", { token: joined.token, attempt: "b".repeat(16), slug: "planets", score: 4, total: 8, timeMs: 2000, outcome: "time" }))).status, 403);
  assert.equal((await room.fetch(request("complete", { token: joined.token, attempt: attempt.attemptId, slug: "planets", score: 4, total: 8, timeMs: 2000, outcome: "time" }))).status, 200);
  assert.equal((await room.fetch(request("complete", { token: joined.token, attempt: attempt.attemptId, slug: "planets", score: 4, total: 8, timeMs: 2000, outcome: "time" }))).status, 200);
  assert.equal((await room.fetch(request("complete", { token: joined.token, attempt: attempt.attemptId, slug: "planets", score: 5, total: 8, timeMs: 2000, outcome: "time" }))).status, 409);
});

test("group API is same-origin and catalog-backed, never trusting title or total", async () => {
  const origin = "https://typologyquiz.com";
  const created = [];
  const env = { GROUP_ROOM: { idFromName: (id) => id, get: (id) => ({ fetch: async (url, init) => { created.push({ id, url, body: JSON.parse(init.body) }); return new Response("{}", { status: 201 }); } }) } };
  const post = (body, headers = {}) => new Request(`${origin}/api/groups`, { method: "POST", headers: { origin, "content-type": "application/json", ...headers }, body: JSON.stringify(body) });
  assert.equal((await handleGroup(post({ slug: "planets" }, { origin: "https://elsewhere.example" }), env, "/api/groups")).status, 403);
  assert.equal((await handleGroup(post({ slug: "made-up-quiz" }), env, "/api/groups")).status, 400);
  assert.equal((await handleGroup(post({ slug: "planets", title: "Injected", total: 999 }), env, "/api/groups")).status, 400);
  assert.equal((await handleGroup(post({ slug: "planets" }), env, "/api/groups")).status, 201);
  assert.equal(created.length, 1);
  assert.equal(created[0].body.slug, "planets");
  assert.equal("title" in created[0].body, false);
  assert.equal("total" in created[0].body, false);
  assert.equal(created[0].body.hostHash.length, 64);
  assert.match(created[0].body.seed, /^[A-Za-z0-9_-]{16}$/);
  assert.equal("hostSecret" in created[0].body, false);
});

test("joined players receive bounded plain-text chat and an ended room freezes it", async () => {
  const room = await readyRoom();
  const joined = await join(room, "Ada");
  const anonymous = await (await room.fetch(new Request("https://group-room/info"))).json();
  assert.equal("chat" in anonymous, false);
  const sent = await room.fetch(request("chat", { token: joined.token, message: "Ready for planets!", nonce: "n".repeat(16) }));
  assert.equal(sent.status, 201);
  const authed = await (await room.fetch(new Request("https://group-room/info", { headers: { "x-group-player-token": joined.token } }))).json();
  assert.deepEqual(authed.chat.map((message) => [message.name, message.text]), [["Ada", "Ready for planets!"]]);
  assert.equal((await room.fetch(request("chat", { token: joined.token, message: "<b>no markup</b>", nonce: "m".repeat(16) }))).status, 429);
  assert.equal((await room.fetch(request("end", { secret: HOST_SECRET }))).status, 200);
  assert.equal((await room.fetch(request("chat", { token: joined.token, message: "too late", nonce: "l".repeat(16) }))).status, 409);
  assert.equal((await room.fetch(request("presence", { token: joined.token, activity: "lobby" }))).status, 409);
});

test("group room rejects oversized requests and start is host-only/idempotent", async () => {
  const room = await readyRoom();
  const joined = await join(room, "Ada");
  const oversized = new Request("https://group-room/chat", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ token: joined.token, message: "x".repeat(1200), nonce: "n".repeat(16) }) });
  assert.equal((await room.fetch(oversized)).status, 413);
  assert.equal((await room.fetch(request("start", { secret: "wrong", revision: 1 }))).status, 403);
  await start(room);
  const duplicate = await room.fetch(request("start", { secret: HOST_SECRET, revision: room.room.revision }));
  assert.equal(duplicate.status, 200);
  assert.equal((await duplicate.json()).duplicate, true);
});
