import { CODE_ALPHABET, CODE_PATTERN, LIMITS, normalizeName } from "./live-core.js";
import { GROUP_TRIVIA_CATALOG } from "./group-catalog.js";

const MAX_BODY_BYTES = 1024;
const GROUP_LIFETIME_MS = 4 * 60 * 60 * 1000;
const ENDED_GRACE_MS = 30 * 60 * 1000;
const PRESENCE_WINDOW_MS = 35 * 1000;
const START_COUNTDOWN_MS = 5 * 1000;
const CHAT_LIMIT = 40;
const CHAT_MAX_CHARS = 200;
const CHAT_RATE_MS = 2 * 1000;
const CHAT_MINUTE_LIMIT = 10;
const SLUG = /^[a-z0-9][a-z0-9-]{0,79}$/;
const TOKEN = /^[A-Za-z0-9_-]{32,64}$/;
const RUN_SEED = /^[A-Za-z0-9_-]{12,32}$/;
const NONCE = /^[A-Za-z0-9_-]{8,64}$/;
const OUTCOMES = new Set(["complete", "time", "gaveup", "lives"]);
const ACTIVITIES = new Set(["lobby", "playing", "results"]);

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", "x-robots-tag": "noindex" },
  });
}
function sameOrigin(request) {
  const origin = request.headers.get("origin");
  try { return Boolean(origin) && new URL(origin).origin === new URL(request.url).origin; } catch { return false; }
}
async function smallJson(request) {
  if (request.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase() !== "application/json") throw new Error("bad_json");
  const text = await request.text();
  if (new TextEncoder().encode(text).byteLength > MAX_BODY_BYTES) throw new Error("too_large");
  return JSON.parse(text);
}
function base64url(bytes) {
  let value = "";
  for (const b of bytes) value += String.fromCharCode(b);
  return btoa(value).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function randomToken(bytes = 32) { return base64url(crypto.getRandomValues(new Uint8Array(bytes))); }
function randomCode() {
  const limit = 256 - (256 % CODE_ALPHABET.length);
  let out = "";
  while (out.length < 6) for (const b of crypto.getRandomValues(new Uint8Array(12))) if (b < limit && out.length < 6) out += CODE_ALPHABET[b % CODE_ALPHABET.length];
  return out;
}
async function hash(value) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function sameHash(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
  let diff = 0; for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i); return diff === 0;
}
function catalogEntry(slug) {
  if (!SLUG.test(slug)) return null;
  const entry = GROUP_TRIVIA_CATALOG[slug];
  return entry && Number.isInteger(entry.total) ? entry : null;
}
function deleteAt(room) { return room.phase === "ended" ? Math.min(room.expiresAt, room.endedAt + ENDED_GRACE_MS) : room.expiresAt; }
function expired(room, now) { return now >= deleteAt(room); }
function isOnline(player, now) { return Number.isInteger(player.lastSeenAt) && now - player.lastSeenAt <= PRESENCE_WINDOW_MS; }
function rank(players, now) {
  const rows = Object.values(players).filter((p) => !p.removed).map((p) => ({
    id: p.id,
    name: p.name,
    status: p.completion ? "completed" : p.attemptHash ? "playing" : "joined",
    online: isOnline(p, now),
    activity: isOnline(p, now) ? p.activity : "offline",
    score: p.completion?.score ?? null,
    total: p.completion?.total ?? null,
    timeMs: p.completion?.timeMs ?? null,
    outcome: p.completion?.outcome ?? null,
    completedAt: p.completion?.completedAt ?? null,
  }));
  rows.sort((a, b) => (b.score ?? -1) - (a.score ?? -1) || (a.completedAt ?? Number.MAX_SAFE_INTEGER) - (b.completedAt ?? Number.MAX_SAFE_INTEGER) || a.name.localeCompare(b.name));
  let place = 0;
  rows.forEach((row, index) => { const previous = rows[index - 1]; if (index === 0 || row.score !== previous.score) place = index + 1; row.rank = row.status === "completed" ? place : null; });
  return rows;
}
function view(room, now, includeChat = false) {
  const board = rank(room.players, now);
  const response = {
    code: room.code,
    slug: room.slug,
    title: room.title,
    total: room.total,
    seed: room.seed,
    state: room.phase,
    startAt: room.startAt,
    revision: room.revision,
    expiresAt: deleteAt(room),
    playerCount: board.length,
    onlineCount: board.filter((row) => row.online).length,
    completedCount: board.filter((row) => row.status === "completed").length,
    isPublic: room.isPublic === true,
    board,
  };
  if (includeChat) response.chat = room.chat.map(({ id, playerId, name, text, sentAt }) => ({ id, playerId, name, text, sentAt }));
  return response;
}
function publicEntry(room, now) {
  if (!room || room.isPublic !== true || room.state === "ended" || !CODE_PATTERN.test(room.code)) return null;
  return {
    code: room.code,
    slug: room.slug,
    title: room.title,
    total: room.total,
    state: room.state,
    playerCount: room.playerCount,
    onlineCount: room.onlineCount,
    expiresAt: room.expiresAt,
    updatedAt: now,
  };
}
function validCreate(body) {
  if (!body || typeof body !== "object" || Array.isArray(body) || Object.keys(body).length !== 1 || typeof body.slug !== "string") return null;
  const entry = catalogEntry(body.slug);
  return entry ? { slug: body.slug, title: entry.title, total: entry.total } : null;
}
function cleanMessage(value) {
  if (typeof value !== "string") return null;
  const text = value.trim().replace(/\s+/gu, " ");
  if (!text || text.length > CHAT_MAX_CHARS || /[\u0000-\u001F\u007F]/u.test(text)) return null;
  return text;
}
function bodyError(error) { return json({ error: error.message === "too_large" ? "too_large" : "bad_json" }, error.message === "too_large" ? 413 : 400); }

export async function handleGroup(request, env, pathname) {
  if (pathname === "/api/groups/public" || pathname === "/api/groups/public/") {
    if (request.method !== "GET") return json({ error: "method" }, 405);
    if (!env.GROUP_DIRECTORY) return json({ error: "group_unavailable" }, 503);
    const directory = env.GROUP_DIRECTORY.get(env.GROUP_DIRECTORY.idFromName("public-lobbies"));
    return directory.fetch("https://group-directory/list");
  }
  if (!env.GROUP_ROOM) return json({ error: "group_unavailable" }, 503);
  if (pathname === "/api/groups" || pathname === "/api/groups/") {
    if (request.method !== "POST") return json({ error: "method" }, 405);
    if (!sameOrigin(request)) return json({ error: "origin" }, 403);
    let options; try { options = validCreate(await smallJson(request)); } catch (error) { return bodyError(error); }
    if (!options) return json({ error: "bad_payload" }, 400);
    const hostSecret = randomToken(); const hostHash = await hash(hostSecret); const seed = randomToken(12);
    for (let attempt = 0; attempt < 6; attempt++) {
      const code = randomCode(); const stub = env.GROUP_ROOM.get(env.GROUP_ROOM.idFromName(code));
      const response = await stub.fetch("https://group-room/init", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ code, hostHash, seed, slug: options.slug }) });
      if (response.status === 409) continue;
      if (!response.ok) return json({ error: "create_failed" }, 503);
      return json({ code, hostSecret }, 201);
    }
    return json({ error: "create_failed" }, 503);
  }
  const match = pathname.match(/^\/api\/groups\/([^/]+)(?:\/(join|start|begin|presence|chat|complete|end|visibility))?\/?$/);
  if (!match) return json({ error: "not_found" }, 404);
  const code = match[1].toUpperCase(); if (!CODE_PATTERN.test(code)) return json({ error: "bad_code" }, 400);
  const action = match[2] ?? "info";
  if (action !== "info" && (!sameOrigin(request) || request.method !== "POST")) return json({ error: action !== "info" && !sameOrigin(request) ? "origin" : "method" }, action !== "info" && !sameOrigin(request) ? 403 : 405);
  if (action === "info" && request.method !== "GET") return json({ error: "method" }, 405);
  const stub = env.GROUP_ROOM.get(env.GROUP_ROOM.idFromName(code));
  const response = await stub.fetch(new Request(`https://group-room/${action}`, request));
  // The directory is deliberately best-effort: a lobby remains usable if its
  // public listing cannot be refreshed. The next room action repairs it.
  if (env.GROUP_DIRECTORY && response.ok && action !== "info") {
    try {
      const body = await response.clone().json();
      const room = body?.room;
      const directory = env.GROUP_DIRECTORY.get(env.GROUP_DIRECTORY.idFromName("public-lobbies"));
      const entry = publicEntry(room, Date.now());
      await directory.fetch(`https://group-directory/${entry ? "upsert" : "remove"}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(entry ?? { code }),
      });
    } catch { /* directory listing is optional */ }
  }
  return response;
}

export class GroupRoom {
  constructor(ctx) { this.ctx = ctx; this.room = undefined; this.queue = Promise.resolve(); }
  exclusive(fn) { const run = this.queue.then(fn); this.queue = run.catch(() => {}); return run; }
  async load(now) {
    if (this.room === undefined) this.room = (await this.ctx.storage.get("room")) ?? null;
    // v1 rooms were created before a lobby existed. They remain playable.
    if (this.room && this.room.phase === undefined) this.room = { ...this.room, phase: "open", startAt: this.room.createdAt, revision: 1, chat: [], isPublic: false };
    if (this.room && this.room.isPublic === undefined) this.room = { ...this.room, isPublic: false };
    if (this.room && expired(this.room, now)) await this.destroy();
    return this.room;
  }
  async save(room) { this.room = room; await this.ctx.storage.put("room", room); await this.ctx.storage.setAlarm(deleteAt(room)); }
  async destroy() { this.room = null; await this.ctx.storage.deleteAll(); }
  fetch(request) { return this.exclusive(() => this.handle(request)); }
  async playerForToken(room, token) {
    if (!TOKEN.test(token)) return null;
    const tokenHash = await hash(token);
    return Object.values(room.players).find((p) => !p.removed && sameHash(p.tokenHash, tokenHash)) ?? null;
  }
  async info(request, room, now) {
    const token = request.headers.get("x-group-player-token") ?? "";
    const player = await this.playerForToken(room, token);
    return json(view(room, now, player !== null));
  }
  async handle(request) {
    const url = new URL(request.url); const now = Date.now();
    if (url.pathname === "/init") {
      if (request.method !== "POST") return json({ error: "method" }, 405);
      if (await this.load(now)) return json({ error: "exists" }, 409);
      let body; try { body = await smallJson(request); } catch (error) { return bodyError(error); }
      const options = validCreate({ slug: body?.slug });
      if (!options || typeof body.code !== "string" || !CODE_PATTERN.test(body.code) || typeof body.hostHash !== "string" || typeof body.seed !== "string" || !RUN_SEED.test(body.seed)) return json({ error: "bad_payload" }, 400);
      await this.save({ v: 3, code: body.code, hostHash: body.hostHash, seed: body.seed, ...options, createdAt: now, expiresAt: now + GROUP_LIFETIME_MS, phase: "lobby", startAt: null, endedAt: null, revision: 1, isPublic: false, players: {}, chat: [] });
      return json({ ok: true }, 201);
    }
    const room = await this.load(now); if (!room) return json({ error: "room_not_found" }, 404);
    if (url.pathname === "/info") return this.info(request, room, now);
    let body; try { body = await smallJson(request); } catch (error) { return bodyError(error); }
    if (url.pathname === "/join") {
      if (room.phase === "ended") return json({ error: "room_ended" }, 409);
      if (!body || typeof body !== "object" || Object.keys(body).length !== 1 || typeof body.name !== "string") return json({ error: "bad_payload" }, 400);
      const name = normalizeName(body.name); if (!name) return json({ error: "bad_name" }, 400);
      const key = name.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase();
      if (Object.values(room.players).some((p) => !p.removed && p.name.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase() === key)) return json({ error: "name_taken" }, 409);
      if (Object.keys(room.players).length >= LIMITS.maxPlayerRecords) return json({ error: "room_full" }, 409);
      const nextRoom = structuredClone(room); const token = randomToken(); const id = randomToken(9);
      nextRoom.players[id] = { id, name, tokenHash: await hash(token), removed: false, completion: null, attemptHash: null, startedAt: null, lastSeenAt: now, activity: room.phase === "lobby" ? "lobby" : "playing", chatTimes: [] };
      nextRoom.revision += 1; await this.save(nextRoom);
      return json({ token, playerId: id, room: view(nextRoom, now, true) }, 201);
    }
    if (url.pathname === "/start") {
      if (!body || typeof body.secret !== "string" || !Number.isInteger(body.revision)) return json({ error: "bad_payload" }, 400);
      if (!sameHash(await hash(body.secret), room.hostHash)) return json({ error: "bad_secret" }, 403);
      if (room.phase === "ended") return json({ error: "room_ended" }, 409);
      if (room.phase === "open") return json({ room: view(room, now), duplicate: true, serverNow: now });
      if (body.revision !== room.revision) return json({ error: "stale_revision", room: view(room, now) }, 409);
      const nextRoom = structuredClone(room); nextRoom.phase = "open"; nextRoom.startAt = now + START_COUNTDOWN_MS; nextRoom.revision += 1; await this.save(nextRoom);
      return json({ room: view(nextRoom, now), serverNow: now }, 200);
    }
    if (url.pathname === "/visibility") {
      if (!body || typeof body.secret !== "string" || typeof body.isPublic !== "boolean" || !Number.isInteger(body.revision) || Object.keys(body).length !== 3) return json({ error: "bad_payload" }, 400);
      if (!sameHash(await hash(body.secret), room.hostHash)) return json({ error: "bad_secret" }, 403);
      if (room.phase === "ended") return json({ error: "room_ended" }, 409);
      if (body.revision !== room.revision) return json({ error: "stale_revision", room: view(room, now) }, 409);
      if (room.isPublic === body.isPublic) return json({ room: view(room, now), duplicate: true });
      const nextRoom = structuredClone(room); nextRoom.isPublic = body.isPublic; nextRoom.revision += 1; await this.save(nextRoom);
      return json({ room: view(nextRoom, now) });
    }
    if (url.pathname === "/presence" || url.pathname === "/begin") {
      if (!body || typeof body !== "object" || !TOKEN.test(body.token)) return json({ error: "bad_payload" }, 400);
      const player = await this.playerForToken(room, body.token); if (!player) return json({ error: "unknown_player" }, 403);
      if (room.phase === "ended") return json({ error: "room_ended" }, 409);
      if (url.pathname === "/presence") {
        if (Object.keys(body).length !== 2 || !ACTIVITIES.has(body.activity)) return json({ error: "bad_payload" }, 400);
        const nextRoom = structuredClone(room); const nextPlayer = nextRoom.players[player.id]; nextPlayer.lastSeenAt = now; nextPlayer.activity = body.activity; await this.save(nextRoom);
        return json({ room: view(nextRoom, now, true) });
      }
      if (Object.keys(body).some((key) => !["token", "attempt"].includes(key)) || (body.attempt !== undefined && !RUN_SEED.test(body.attempt))) return json({ error: "bad_payload" }, 400);
      if (room.phase !== "open" || room.startAt === null || now < room.startAt) return json({ error: "room_not_started" }, 409);
      if (player.completion) return json({ error: "already_completed" }, 409);
      if (player.attemptHash) {
        if (typeof body.attempt === "string" && sameHash(player.attemptHash, await hash(body.attempt))) return json({ attemptId: body.attempt, room: view(room, now, true), duplicate: true });
        return json({ error: "attempt_recovery_required" }, 409);
      }
      const nextRoom = structuredClone(room); const nextPlayer = nextRoom.players[player.id]; const attemptId = randomToken(12); nextPlayer.attemptHash = await hash(attemptId); nextPlayer.startedAt = now; nextPlayer.lastSeenAt = now; nextPlayer.activity = "playing"; nextRoom.revision += 1; await this.save(nextRoom);
      return json({ attemptId, room: view(nextRoom, now, true) }, 201);
    }
    if (url.pathname === "/chat") {
      if (!body || typeof body !== "object" || Object.keys(body).some((key) => !["token", "message", "nonce"].includes(key)) || !TOKEN.test(body.token) || !NONCE.test(body.nonce)) return json({ error: "bad_payload" }, 400);
      if (room.phase === "ended") return json({ error: "room_ended" }, 409);
      const text = cleanMessage(body.message); if (!text) return json({ error: "bad_message" }, 400);
      const player = await this.playerForToken(room, body.token); if (!player) return json({ error: "unknown_player" }, 403);
      const duplicate = room.chat.find((message) => message.playerId === player.id && message.nonce === body.nonce);
      if (duplicate) return json({ room: view(room, now, true), duplicate: true });
      const chatTimes = (player.chatTimes ?? []).filter((time) => now - time < 60 * 1000);
      if (chatTimes.length >= CHAT_MINUTE_LIMIT || (chatTimes.at(-1) !== undefined && now - chatTimes.at(-1) < CHAT_RATE_MS)) return json({ error: "chat_rate_limited" }, 429);
      const nextRoom = structuredClone(room); const nextPlayer = nextRoom.players[player.id]; nextPlayer.chatTimes = [...chatTimes, now]; nextPlayer.lastSeenAt = now;
      nextRoom.chat = [...nextRoom.chat, { id: randomToken(9), playerId: player.id, name: player.name, text, sentAt: now, nonce: body.nonce }].slice(-CHAT_LIMIT);
      nextRoom.revision += 1; await this.save(nextRoom); return json({ room: view(nextRoom, now, true) }, 201);
    }
    if (url.pathname === "/complete") {
      if (!body || typeof body !== "object" || Object.keys(body).some((key) => !["token", "attempt", "slug", "score", "total", "timeMs", "outcome"].includes(key)) || !TOKEN.test(body.token) || !RUN_SEED.test(body.attempt) || !SLUG.test(body.slug) || !Number.isInteger(body.score) || !Number.isInteger(body.total) || !Number.isInteger(body.timeMs) || !OUTCOMES.has(body.outcome)) return json({ error: "bad_payload" }, 400);
      if (room.phase === "ended") return json({ error: "room_ended" }, 409);
      if (room.phase !== "open" || room.startAt === null || now < room.startAt) return json({ error: "room_not_started" }, 409);
      if (body.slug !== room.slug || body.total !== room.total || body.score < 0 || body.score > room.total || body.timeMs < 0 || body.timeMs > 24 * 60 * 60 * 1000) return json({ error: "invalid_result" }, 400);
      const player = await this.playerForToken(room, body.token); if (!player) return json({ error: "unknown_player" }, 403);
      if (!player.attemptHash || !sameHash(player.attemptHash, await hash(body.attempt))) return json({ error: "unknown_attempt" }, 403);
      const completion = { score: body.score, total: body.total, timeMs: body.timeMs, outcome: body.outcome, completedAt: now };
      if (player.completion) {
        const same = player.completion.score === completion.score && player.completion.total === completion.total && player.completion.timeMs === completion.timeMs && player.completion.outcome === completion.outcome;
        return same ? json({ room: view(room, now, true), duplicate: true }) : json({ error: "already_completed" }, 409);
      }
      const nextRoom = structuredClone(room); const nextPlayer = nextRoom.players[player.id]; nextPlayer.completion = completion; nextPlayer.lastSeenAt = now; nextPlayer.activity = "results"; nextRoom.revision += 1; await this.save(nextRoom); return json({ room: view(nextRoom, now, true) });
    }
    if (url.pathname === "/end") {
      if (!body || typeof body.secret !== "string") return json({ error: "bad_payload" }, 400);
      if (!sameHash(await hash(body.secret), room.hostHash)) return json({ error: "bad_secret" }, 403);
      if (room.phase === "ended") return json({ room: view(room, now), duplicate: true });
      const nextRoom = structuredClone(room); nextRoom.phase = "ended"; nextRoom.endedAt = now; nextRoom.revision += 1; await this.save(nextRoom); return json({ room: view(nextRoom, now) });
    }
    return json({ error: "not_found" }, 404);
  }
  alarm() { return this.exclusive(async () => { const room = await this.load(Date.now()); if (room) await this.ctx.storage.setAlarm(deleteAt(room)); }); }
}

export class GroupDirectory {
  constructor(ctx) { this.ctx = ctx; this.records = undefined; this.queue = Promise.resolve(); }
  exclusive(fn) { const run = this.queue.then(fn); this.queue = run.catch(() => {}); return run; }
  async load() { if (this.records === undefined) this.records = (await this.ctx.storage.get("records")) ?? {}; return this.records; }
  async save(records) { this.records = records; await this.ctx.storage.put("records", records); }
  fetch(request) { return this.exclusive(async () => {
    const url = new URL(request.url); const now = Date.now(); const records = await this.load();
    const active = {};
    for (const [code, entry] of Object.entries(records)) {
      if (entry && CODE_PATTERN.test(code) && entry.expiresAt > now && (entry.state === "lobby" || entry.state === "open")) active[code] = entry;
    }
    if (Object.keys(active).length !== Object.keys(records).length) await this.save(active);
    if (url.pathname === "/list") {
      if (request.method !== "GET") return json({ error: "method" }, 405);
      const rooms = Object.values(active).sort((a, b) => (a.state === b.state ? b.updatedAt - a.updatedAt : a.state === "lobby" ? -1 : 1)).slice(0, 50);
      return json({ rooms });
    }
    if (request.method !== "POST") return json({ error: "method" }, 405);
    let body; try { body = await smallJson(request); } catch (error) { return bodyError(error); }
    if (url.pathname === "/remove") {
      if (!body || typeof body.code !== "string" || !CODE_PATTERN.test(body.code) || Object.keys(body).length !== 1) return json({ error: "bad_payload" }, 400);
      if (active[body.code]) { delete active[body.code]; await this.save(active); }
      return json({ ok: true });
    }
    if (url.pathname === "/upsert") {
      if (!body || typeof body !== "object" || !CODE_PATTERN.test(body.code) || !SLUG.test(body.slug) || typeof body.title !== "string" || body.title.length > 120 || !Number.isInteger(body.total) || !["lobby", "open"].includes(body.state) || !Number.isInteger(body.playerCount) || !Number.isInteger(body.onlineCount) || !Number.isInteger(body.expiresAt) || !Number.isInteger(body.updatedAt)) return json({ error: "bad_payload" }, 400);
      active[body.code] = { code: body.code, slug: body.slug, title: body.title, total: body.total, state: body.state, playerCount: Math.max(0, body.playerCount), onlineCount: Math.max(0, body.onlineCount), expiresAt: body.expiresAt, updatedAt: body.updatedAt };
      await this.save(active); return json({ ok: true }, 201);
    }
    return json({ error: "not_found" }, 404);
  }); }
}
