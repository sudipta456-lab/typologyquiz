// Recovery keys never go in a URL path, query string or analytics event.
//
// Host secret: sessionStorage only. It survives a refresh or a dropped
// connection in this tab and is gone when the tab closes; the host can always
// reopen the console from the link with the secret in its fragment.
//
// Player rejoin token: localStorage, one record per room, stamped with the
// room's deletion time. A phone that closes the tab (or the browser drops it
// in the background) can reopen the join link and rejoin as the same player
// for as long as the room exists. Expired, malformed or revoked records are
// removed.

const HOST_PREFIX = "tq-live-host:";
const PLAYER_PREFIX = "tq-live-player:";
const SECRET = /^[A-Za-z0-9_-]{32,64}$/;

/** Upper bound on any room's life (worker LIMITS.roomLifetimeMs), used until the room reports its own. */
export const ROOM_LIFETIME_MS = 4 * 60 * 60 * 1000;

type StorageKind = "sessionStorage" | "localStorage";
type PlayerRecord = { token: string; expiresAt: number };

// Holds only values that storage refused (blocked or full); lasts until the
// page reloads. Never consulted for a key that storage did save or remove, so
// a cleared record cannot come back from here.
const memory = new Map<string, string>();

function store(kind: StorageKind): Storage | null {
  try { return window[kind] ?? null; } catch { return null; }
}

function getRaw(kind: StorageKind, key: string): string | null {
  let value: string | null = null;
  try { value = store(kind)?.getItem(key) ?? null; } catch { /* blocked */ }
  return value ?? memory.get(key) ?? null;
}

function setRaw(kind: StorageKind, key: string, value: string | null): void {
  memory.delete(key);
  try {
    const s = store(kind);
    if (!s) throw new Error("no storage");
    if (value) s.setItem(key, value);
    else s.removeItem(key);
  } catch {
    if (value) memory.set(key, value);
  }
}

export function loadHostSecret(code: string): string | null {
  const value = getRaw("sessionStorage", HOST_PREFIX + code);
  return value && SECRET.test(value) ? value : null;
}

export function saveHostSecret(code: string, secret: string | null): void {
  setRaw("sessionStorage", HOST_PREFIX + code, secret && SECRET.test(secret) ? secret : null);
}

function parsePlayerRecord(raw: string | null, now: number): PlayerRecord | null {
  if (!raw) return null;
  try {
    const record = JSON.parse(raw) as Partial<PlayerRecord> | null;
    if (!record || typeof record.token !== "string" || !SECRET.test(record.token)) return null;
    if (typeof record.expiresAt !== "number" || !Number.isFinite(record.expiresAt) || record.expiresAt <= now) return null;
    // Never trust a record claiming to outlive any possible room.
    if (record.expiresAt > now + ROOM_LIFETIME_MS) return null;
    return { token: record.token, expiresAt: record.expiresAt };
  } catch {
    return null;
  }
}

/** Remove every expired or malformed player record, for any room. */
export function sweepPlayerTokens(now = Date.now()): void {
  const s = store("localStorage");
  if (!s) return;
  try {
    const stale: string[] = [];
    for (let i = 0; i < s.length; i++) {
      const key = s.key(i);
      if (key?.startsWith(PLAYER_PREFIX) && !parsePlayerRecord(s.getItem(key), now)) stale.push(key);
    }
    for (const key of stale) s.removeItem(key);
  } catch { /* blocked */ }
}

export function loadPlayerToken(code: string, now = Date.now()): string | null {
  const key = PLAYER_PREFIX + code;
  const raw = getRaw("localStorage", key);
  const record = parsePlayerRecord(raw, now);
  if (!record && raw) setRaw("localStorage", key, null);
  // Tokens saved before localStorage persistence lived in this tab's sessionStorage: move one over once.
  let legacy: string | null = null;
  try {
    const s = store("sessionStorage");
    legacy = s?.getItem(key) ?? null;
    if (legacy !== null) s?.removeItem(key);
  } catch { /* blocked */ }
  if (!record && legacy && SECRET.test(legacy)) {
    savePlayerToken(code, legacy);
    return legacy;
  }
  return record?.token ?? null;
}

/**
 * Save (or, with `token` null, revoke) this room's rejoin token. `expiresAt`
 * is a local-clock time; it defaults to the longest a room can live.
 */
export function savePlayerToken(code: string, token: string | null, expiresAt = Date.now() + ROOM_LIFETIME_MS): void {
  const key = PLAYER_PREFIX + code;
  if (!token || !SECRET.test(token)) { setRaw("localStorage", key, null); return; }
  setRaw("localStorage", key, JSON.stringify({ token, expiresAt: Math.min(expiresAt, Date.now() + ROOM_LIFETIME_MS) }));
}

/** Tighten the stored record to the room's actual deletion time, once known. */
export function setPlayerTokenExpiry(code: string, expiresAt: number): void {
  const token = loadPlayerToken(code);
  if (!token) return;
  if (expiresAt <= Date.now()) savePlayerToken(code, null);
  else savePlayerToken(code, token, expiresAt);
}

/** The host secret travels only in the URL fragment, which browsers never send to servers. */
export function hostSecretFromHash(hash: string): string | null {
  const value = new URLSearchParams(hash.replace(/^#/, "")).get("k");
  return value && SECRET.test(value) ? value : null;
}
