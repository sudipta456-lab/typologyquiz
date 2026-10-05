import {
  CODE_ALPHABET, CODE_PATTERN, LIMITS, SCORING_RULES,
  allowedFor, applyHostCommand, buildView, createRoomState, findPlayerByTokenHash,
  isExpired, joinPlayer, nextAlarm, parseClientMessage, parseRoomOptions, submitAnswer, tick,
} from "./live-core.js";
import { LIVE_SESSIONS, catalogMetadata } from "./live-sessions.js";

/**
 * Live Events: the public router for /api/live/* and the LiveRoom Durable
 * Object. One object per six-character room code holds the canonical state
 * (including the answer key snapshot) in its own storage, and deletes all of
 * it when the room expires. The rules themselves live in live-core.js.
 *
 * No accounts, no chat, no free text beyond a normalized nickname/team name,
 * and nothing is written anywhere except this room's own storage.
 */

const MAX_BODY_BYTES = 1024;
// Fresh joins: a whole room can arrive in one burst, then a slow refill.
// Storage stays bounded regardless by LIMITS.maxPlayerRecords.
const JOIN_BURST = LIMITS.maxPlayers + 20;
const JOIN_REFILL_PER_SEC = 1;
const RATE_CAPACITY = 8;
const RATE_PER_SEC = 4;
// Sockets that have not said hello are closed after this, and only a few may
// wait at once. Authenticated roles are capped too, so the worst case is
// hosts + screens + one socket per player + pending = 4 + 10 + 80 + 16 = 110,
// which stays under LIMITS.maxSockets: a real reconnect always finds room.
export const AUTH_DEADLINE_MS = 10_000;
export const MAX_PENDING_SOCKETS = 16;
export const MAX_HOST_SOCKETS = 4;
export const MAX_SCREEN_SOCKETS = 10;

function json(body, status = 200, maxAge = 0) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": maxAge ? `public, max-age=${maxAge}` : "no-store",
      "x-robots-tag": "noindex",
    },
  });
}

function sameOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

function base64url(bytes) {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function randomToken(bytes = 32) {
  return base64url(crypto.getRandomValues(new Uint8Array(bytes)));
}

export function randomCode() {
  // Rejection sampling keeps every character equally likely.
  const limit = 256 - (256 % CODE_ALPHABET.length);
  let out = "";
  while (out.length < 6) {
    for (const b of crypto.getRandomValues(new Uint8Array(12))) {
      if (b < limit && out.length < 6) out += CODE_ALPHABET[b % CODE_ALPHABET.length];
    }
  }
  return out;
}

export async function sha256Hex(text) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function sameHash(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function readSmallJson(request) {
  if (request.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase() !== "application/json") throw new Error("bad_json");
  const text = await request.text();
  if (new TextEncoder().encode(text).byteLength > MAX_BODY_BYTES) throw new Error("too_large");
  return JSON.parse(text);
}

// ---------------------------------------------------------------------------
// Public router

/** Returns a Response for /api/live/* paths, or null for anything else. */
export async function handleLive(request, env, pathname) {
  if (pathname === "/api/live/catalog" || pathname === "/api/live/catalog/") {
    if (request.method !== "GET") return json({ error: "method" }, 405);
    return json({ sessions: catalogMetadata(), rules: SCORING_RULES, limits: { maxPlayers: LIMITS.maxPlayers, maxTeams: LIMITS.maxTeams } }, 200, 300);
  }

  if (!env.LIVE_ROOM) return json({ error: "live_unavailable" }, 503);

  if (pathname === "/api/live/rooms" || pathname === "/api/live/rooms/") {
    if (request.method !== "POST") return json({ error: "method" }, 405);
    if (!sameOrigin(request)) return json({ error: "origin" }, 403);
    let body;
    try {
      body = await readSmallJson(request);
    } catch (e) {
      return json({ error: e.message === "too_large" ? "too_large" : "bad_json" }, e.message === "too_large" ? 413 : 400);
    }
    const options = parseRoomOptions(body, LIVE_SESSIONS);
    if (options.error) return json({ error: options.error }, 400);
    const hostSecret = randomToken();
    const hostHash = await sha256Hex(hostSecret);
    for (let attempt = 0; attempt < 6; attempt++) {
      const code = randomCode();
      const stub = env.LIVE_ROOM.get(env.LIVE_ROOM.idFromName(code));
      const res = await stub.fetch("https://live-room/init", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ code, hostHash, sessionId: options.session.id, mode: options.mode, scoring: options.scoring, extendedTime: options.extendedTime }),
      });
      if (res.status === 409) continue;
      if (!res.ok) return json({ error: "create_failed" }, 503);
      // The secret leaves the server exactly once, here. Only its hash is stored.
      return json({ code, hostSecret }, 201);
    }
    return json({ error: "create_failed" }, 503);
  }

  const m = pathname.match(/^\/api\/live\/rooms\/([^/]+)(\/ws)?\/?$/);
  if (!m) return json({ error: "not_found" }, 404);
  const code = m[1].toUpperCase();
  if (!CODE_PATTERN.test(code)) return json({ error: "bad_code" }, 400);
  const stub = env.LIVE_ROOM.get(env.LIVE_ROOM.idFromName(code));

  if (m[2]) {
    if (request.method !== "GET" || request.headers.get("upgrade")?.toLowerCase() !== "websocket") return json({ error: "upgrade_required" }, 426);
    if (!sameOrigin(request)) return json({ error: "origin" }, 403);
    return stub.fetch(new Request("https://live-room/ws", request));
  }
  if (request.method !== "GET") return json({ error: "method" }, 405);
  return stub.fetch("https://live-room/info");
}

// ---------------------------------------------------------------------------
// Durable Object

function attachmentOf(ws) {
  try { return ws.deserializeAttachment() ?? { role: null, at: 0 }; } catch { return { role: null, at: 0 }; }
}

function closeSocket(ws, code, reason) {
  try { ws.send(JSON.stringify({ t: "error", code: reason })); } catch { /* closing */ }
  try { ws.close(code, reason); } catch { /* already gone */ }
}

export class LiveRoom {
  constructor(ctx, env) {
    this.ctx = ctx;
    this.env = env;
    this.room = undefined; // undefined: not loaded yet; null: no room
    this.rates = new WeakMap();
    this.joinBucket = null;
    // Every read-modify-write of the room runs through this chain, one at a
    // time. Awaits inside a step (hashing, storage) cannot interleave with
    // another step, so no handler ever saves a mutation of a stale snapshot.
    this.queue = Promise.resolve();
    // Keepalive pings are answered without waking the object from hibernation.
    if (typeof WebSocketRequestResponsePair === "function") {
      ctx.setWebSocketAutoResponse(new WebSocketRequestResponsePair('{"t":"ping"}', '{"t":"pong"}'));
    }
  }

  /**
   * Run `fn` after every earlier step has finished. Steps never call
   * exclusive() themselves, so the chain cannot deadlock, and a failing step
   * does not stall the ones behind it.
   */
  exclusive(fn) {
    const run = this.queue.then(() => fn());
    this.queue = run.catch(() => {});
    return run;
  }

  async load(now) {
    if (this.room === undefined) this.room = (await this.ctx.storage.get("room")) ?? null;
    if (this.room && isExpired(this.room, now)) await this.destroy("room_expired");
    return this.room;
  }

  async save(state) {
    this.room = state;
    await this.ctx.storage.put("room", state);
    await this.scheduleAlarm(state);
  }

  /** Wake for the room's own deadline or the next unauthenticated socket's. */
  async scheduleAlarm(room) {
    let at = room ? nextAlarm(room) : null;
    for (const ws of this.ctx.getWebSockets()) {
      const att = attachmentOf(ws);
      if (att.role) continue;
      const due = (att.at ?? 0) + AUTH_DEADLINE_MS;
      at = at === null ? due : Math.min(at, due);
    }
    if (at !== null) await this.ctx.storage.setAlarm(at);
  }

  async destroy(reason) {
    this.room = null;
    await this.ctx.storage.deleteAlarm();
    await this.ctx.storage.deleteAll();
    for (const ws of this.ctx.getWebSockets()) closeSocket(ws, 4004, reason);
  }

  /** Close sockets that never said hello in time. Returns the ones still waiting, oldest first. */
  sweepPending(now) {
    const waiting = [];
    for (const ws of this.ctx.getWebSockets()) {
      const att = attachmentOf(ws);
      if (att.role) continue;
      if (now - (att.at ?? 0) >= AUTH_DEADLINE_MS) closeSocket(ws, 4001, "auth_timeout");
      else waiting.push({ ws, at: att.at ?? 0 });
    }
    return waiting.sort((a, b) => a.at - b.at).map((w) => w.ws);
  }

  /**
   * Make room for one more socket. A full waiting area drops its oldest
   * socket rather than refusing, so idle sockets cannot lock real clients out.
   */
  admit(now) {
    const waiting = this.sweepPending(now);
    while (waiting.length >= MAX_PENDING_SOCKETS) closeSocket(waiting.shift(), 4001, "auth_timeout");
    return this.ctx.getWebSockets().length < LIMITS.maxSockets;
  }

  fetch(request) {
    return this.exclusive(() => this.handleFetch(request));
  }

  async handleFetch(request) {
    const url = new URL(request.url);
    const now = Date.now();
    const room = await this.load(now);

    if (url.pathname === "/init") {
      if (room) return json({ error: "code_taken" }, 409);
      let body;
      try { body = await request.json(); } catch { return json({ error: "bad_json" }, 400); }
      const options = parseRoomOptions({ sessionId: body.sessionId, mode: body.mode, scoring: body.scoring, extendedTime: body.extendedTime }, LIVE_SESSIONS);
      if (options.error || !CODE_PATTERN.test(body.code) || !/^[0-9a-f]{64}$/.test(body.hostHash)) return json({ error: "bad_payload" }, 400);
      await this.save(createRoomState({ code: body.code, hostHash: body.hostHash, session: options.session, mode: options.mode, scoring: options.scoring, extendedTime: options.extendedTime, now }));
      return json({ ok: true }, 201);
    }

    if (!room) return json({ error: "room_not_found" }, 404);

    if (url.pathname === "/info") {
      const view = buildView(room, { role: "screen" }, now);
      return json({
        code: room.code, phase: room.phase, joinable: room.phase !== "ended", mode: room.mode, scoring: room.scoring,
        sessionTitle: room.session.title, playerCount: view.playerCount, teamCount: view.teamCount,
        full: view.playerCount >= LIMITS.maxPlayers || (room.mode === "team" && view.teamCount >= LIMITS.maxTeams),
      });
    }

    if (url.pathname === "/ws") {
      // Ended rooms still accept sockets until deletion so people who refresh
      // see the final standings; joinPlayer refuses new players.
      if (!this.admit(now)) return json({ error: "room_full" }, 503);
      const pair = new WebSocketPair();
      const [client, server] = Object.values(pair);
      this.ctx.acceptWebSocket(server);
      server.serializeAttachment({ role: null, at: now });
      await this.scheduleAlarm(room);
      return new Response(null, { status: 101, webSocket: client });
    }

    return json({ error: "not_found" }, 404);
  }

  allow(ws) {
    const now = Date.now();
    const bucket = this.rates.get(ws) ?? { tokens: RATE_CAPACITY, at: now };
    bucket.tokens = Math.min(RATE_CAPACITY, bucket.tokens + ((now - bucket.at) / 1000) * RATE_PER_SEC);
    bucket.at = now;
    const ok = bucket.tokens >= 1;
    if (ok) bucket.tokens -= 1;
    this.rates.set(ws, bucket);
    return ok;
  }

  /** Room-wide fresh-join bucket. Returns 0 if allowed, else ms until the next slot. */
  takeJoin(now) {
    const b = this.joinBucket ?? { tokens: JOIN_BURST, at: now };
    b.tokens = Math.min(JOIN_BURST, b.tokens + ((now - b.at) / 1000) * JOIN_REFILL_PER_SEC);
    b.at = now;
    this.joinBucket = b;
    if (b.tokens >= 1) { b.tokens -= 1; return 0; }
    return Math.ceil(((1 - b.tokens) / JOIN_REFILL_PER_SEC) * 1000);
  }

  send(ws, msg) {
    try { ws.send(JSON.stringify(msg)); } catch { /* socket closing */ }
  }

  connectedPlayers(except) {
    const ids = new Set();
    for (const ws of this.ctx.getWebSockets()) {
      if (ws === except) continue;
      const att = attachmentOf(ws);
      if (att.role === "player" && att.playerId) ids.add(att.playerId);
    }
    return ids;
  }

  sendView(ws, room, now, connected) {
    const att = attachmentOf(ws);
    if (!att.role) return;
    this.send(ws, { t: "state", view: buildView(room, { role: att.role, playerId: att.playerId, connected }, now) });
  }

  broadcast(room, now, except) {
    const connected = this.connectedPlayers(except);
    for (const ws of this.ctx.getWebSockets()) if (ws !== except) this.sendView(ws, room, now, connected);
  }

  /** Other sockets already holding `role` (and `playerId`), oldest first. */
  socketsFor(role, playerId, except) {
    return this.ctx.getWebSockets()
      .filter((ws) => ws !== except)
      .map((ws) => ({ ws, att: attachmentOf(ws) }))
      .filter(({ att }) => att.role === role && (playerId === undefined || att.playerId === playerId))
      .sort((a, b) => (a.att.at ?? 0) - (b.att.at ?? 0))
      .map(({ ws }) => ws);
  }

  webSocketMessage(ws, message) {
    if (typeof message !== "string" || message.length > LIMITS.maxMessageBytes * 4) {
      this.send(ws, { t: "error", code: "bad_message" });
      ws.close(1009, "too_large");
      return;
    }
    if (!this.allow(ws)) { this.send(ws, { t: "error", code: "rate_limited" }); return; }
    const msg = parseClientMessage(message);
    if (msg.error) { this.send(ws, { t: "error", code: msg.error }); return; }
    if (msg.t === "ping") { this.send(ws, { t: "pong" }); return; }
    // Enqueued synchronously so one socket's messages keep their order.
    return this.exclusive(() => this.handleMessage(ws, msg));
  }

  async handleMessage(ws, msg) {
    const att = attachmentOf(ws);
    if (msg.t === "hello") {
      if (att.role) { this.send(ws, { t: "error", code: "already_joined" }); return; }
      await this.hello(ws, msg);
      return;
    }
    if (!att.role || !allowedFor(att.role, msg.t)) { this.send(ws, { t: "error", code: "forbidden" }); return; }

    const now = Date.now();
    const room = await this.current(ws, now);
    if (!room) return;

    if (msg.t === "answer") {
      const result = submitAnswer(room, att.playerId, msg.q, msg.choice, now);
      if (result.error) { this.send(ws, { t: "error", code: result.error, q: msg.q }); this.sendView(ws, room, now, this.connectedPlayers()); return; }
      await this.save(result.state);
      this.send(ws, { t: "answer_saved", q: msg.q, choice: msg.choice });
      this.broadcast(result.state, now);
      return;
    }

    if (msg.t === "cmd") {
      const result = applyHostCommand(room, msg, now);
      if (result.error) { this.send(ws, { t: "error", code: result.error }); this.sendView(ws, room, now, this.connectedPlayers()); return; }
      await this.save(result.state);
      if (msg.cmd === "remove") {
        for (const other of this.socketsFor("player", msg.playerId)) {
          this.send(other, { t: "error", code: "removed" });
          other.serializeAttachment({ role: null, at: 0 });
          try { other.close(4005, "removed"); } catch { /* gone */ }
        }
      }
      this.broadcast(result.state, now);
    }
  }

  /** Latest stored room with any due auto-lock applied, or null after telling the socket. */
  async current(ws, now) {
    let room = await this.load(now);
    if (!room) { closeSocket(ws, 4004, "room_expired"); return null; }
    const ticked = tick(room, now);
    if (ticked.changed) { room = ticked.state; await this.save(room); this.broadcast(room, now); }
    return room;
  }

  async hello(ws, msg) {
    // Hash first; the room is loaded only afterwards, inside the same step.
    const hash = msg.role === "host" ? await sha256Hex(msg.secret) : msg.role === "player" && msg.token ? await sha256Hex(msg.token) : null;
    const freshToken = msg.role === "player" && !msg.token ? randomToken() : null;
    const freshHash = freshToken ? await sha256Hex(freshToken) : null;
    const now = Date.now();
    const room = await this.current(ws, now);
    if (!room) return;

    if (msg.role === "host") {
      if (!sameHash(hash, room.hostHash)) { closeSocket(ws, 4003, "bad_secret"); return; }
      const hosts = this.socketsFor("host", undefined, ws);
      while (hosts.length >= MAX_HOST_SOCKETS) closeSocket(hosts.shift(), 4006, "replaced");
      ws.serializeAttachment({ role: "host", at: now });
      this.send(ws, { t: "welcome", role: "host" });
      this.sendView(ws, room, now, this.connectedPlayers());
      return;
    }
    if (msg.role === "screen") {
      if (this.socketsFor("screen", undefined, ws).length >= MAX_SCREEN_SOCKETS) { closeSocket(ws, 4008, "screens_full"); return; }
      ws.serializeAttachment({ role: "screen", at: now });
      this.send(ws, { t: "welcome", role: "screen" });
      this.sendView(ws, room, now, this.connectedPlayers());
      return;
    }
    // Player: rejoin by token, or join fresh. One live socket per player; a
    // reconnect replaces any half-open socket left behind.
    if (msg.token) {
      const player = findPlayerByTokenHash(room, hash);
      if (!player) { this.send(ws, { t: "error", code: "unknown_player" }); return; }
      for (const old of this.socketsFor("player", player.id, ws)) closeSocket(old, 4006, "replaced");
      ws.serializeAttachment({ role: "player", playerId: player.id, at: now });
      this.send(ws, { t: "welcome", role: "player", playerId: player.id });
      this.broadcast(room, now);
      return;
    }
    const wait = this.takeJoin(now);
    if (wait) { this.send(ws, { t: "error", code: "join_busy", retryMs: wait }); return; }
    const result = joinPlayer(room, {
      name: msg.name, teamName: msg.teamName,
      playerId: randomToken(9), newTeamId: randomToken(9), tokenHash: freshHash,
    }, now);
    if (result.error) { this.send(ws, { t: "error", code: result.error }); return; }
    await this.save(result.state);
    ws.serializeAttachment({ role: "player", playerId: result.playerId, at: now });
    // The rejoin token is sent once; the room keeps only its hash.
    this.send(ws, { t: "welcome", role: "player", playerId: result.playerId, token: freshToken });
    this.broadcast(result.state, now);
  }

  webSocketClose(ws, code) {
    try { ws.close(code === 1005 || code === 1006 ? 1000 : code, "closing"); } catch { /* already closed */ }
    return this.exclusive(async () => {
      const now = Date.now();
      const room = await this.load(now);
      if (room && attachmentOf(ws).role === "player") this.broadcast(room, now, ws);
    });
  }

  async webSocketError(ws) {
    try { ws.close(1011, "error"); } catch { /* already closed */ }
  }

  alarm() {
    return this.exclusive(async () => {
      const now = Date.now();
      this.sweepPending(now);
      const room = await this.load(now);
      if (!room) return;
      const ticked = tick(room, now);
      if (ticked.changed) {
        await this.save(ticked.state);
        this.broadcast(ticked.state, now);
      } else {
        await this.scheduleAlarm(room);
      }
    });
  }
}
