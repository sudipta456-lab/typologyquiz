/**
 * Fool-your-friends link codec.
 *
 * Same idiom as friendquiz/codec.ts: the whole game travels inside a URL
 * FRAGMENT (#q=...), never a query string, so player-written text never
 * appears in server or CDN logs. Payload is JSON -> UTF-8 -> base64url.
 *
 * URL format:
 *   {origin}/fool/play/#q=<base64url>
 *
 * Payload (compact keys on purpose, every byte is link length):
 *   v  1                          version, for future migrations
 *   q  ["f03","f17",...]          6 question ids, in play order
 *   c  [{n:"Maya",f:[..6..]},...] contributors: name + one fake per question
 *
 * The CHAIN: each player who finishes may append themselves as a new
 * contributor (same questions, their own 6 fakes), up to MAX_CONTRIBUTORS.
 *
 * Length budget (measured 2026-08-31 with a script mirroring this file;
 * worst case = 3 contributors x 20-char names x 6 fakes x 40 chars, ASCII):
 *   skeleton {"v":1,"q":[],"c":[]}                ~ 22 chars
 *   q: 6 ids, 3 chars each, quoted + commas       ~ 36 chars
 *   one contributor {"n":"<=20","f":["<=40"x6]}:
 *     braces/keys ~12 + name 20 + 6*(40+3) + 5    ~ 292 chars
 *   total JSON, 3 contributors                     = 934 chars
 *   base64url = ceil(934/3)*4                      = 1246 chars
 *   + "https://typologyquiz.com/fool/play/#q="     = 38 chars
 *   worst-case URL                                 = 1284 chars, under the
 * ~1500-char comfort line for messaging apps. Non-ASCII fakes inflate the
 * UTF-8 byte count, so appendContributor also enforces MAX_ENCODED after
 * encoding and refuses the append (chain full -> "start a fresh one")
 * rather than shipping a link that will get truncated in transit.
 */

import { getFoolQuestion } from "./questions";

export const FOOL_VERSION = 1;
export const FOOL_QUESTION_COUNT = 6;
export const MAX_CONTRIBUTORS = 3;
export const MAX_NAME_LEN = 20;
export const MAX_FAKE_LEN = 40;
export const MAX_ENCODED = 1400;

export type FoolContributor = {
  /** Contributor first name */
  n: string;
  /** One fake answer per question, same order as payload.q */
  f: string[];
};

export type FoolPayload = {
  v: number;
  q: string[];
  c: FoolContributor[];
};

export function cleanName(raw: string): string {
  return raw.replace(/\s+/g, " ").trim().slice(0, MAX_NAME_LEN);
}

export function cleanFake(raw: string): string {
  return raw.replace(/\s+/g, " ").trim().slice(0, MAX_FAKE_LEN);
}

/* ---------- base64url (rooms.ts idiom) ---------- */

function toBase64Url(raw: string): string {
  return btoa(unescape(encodeURIComponent(raw)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function fromBase64Url(encoded: string): string | null {
  try {
    let b64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    return decodeURIComponent(escape(atob(b64)));
  } catch {
    return null;
  }
}

/* ---------- encode / decode ---------- */

export function encodePayload(payload: FoolPayload): string {
  return toBase64Url(JSON.stringify(payload));
}

/**
 * Strict decode: returns null for anything that does not resolve to a
 * playable chain (bad JSON, unknown question ids, wrong fake counts,
 * empty names or fakes, too many contributors). A future v2 payload also
 * returns null; the play page shows the "link got mangled" screen.
 */
export function decodePayload(encoded: string): FoolPayload | null {
  const raw = fromBase64Url(encoded.trim());
  if (!raw) return null;
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return null;
  }
  if (!data || typeof data !== "object") return null;
  const d = data as Record<string, unknown>;

  if (d.v !== FOOL_VERSION) return null;
  if (!Array.isArray(d.q) || d.q.length !== FOOL_QUESTION_COUNT) return null;

  const q: string[] = [];
  const seen = new Set<string>();
  for (const id of d.q) {
    if (typeof id !== "string" || !getFoolQuestion(id) || seen.has(id)) return null;
    seen.add(id);
    q.push(id);
  }

  if (!Array.isArray(d.c) || d.c.length < 1 || d.c.length > MAX_CONTRIBUTORS) return null;
  const c: FoolContributor[] = [];
  for (const entry of d.c) {
    if (!entry || typeof entry !== "object") return null;
    const e = entry as Record<string, unknown>;
    if (typeof e.n !== "string" || !cleanName(e.n)) return null;
    if (!Array.isArray(e.f) || e.f.length !== q.length) return null;
    const f: string[] = [];
    for (const fake of e.f) {
      if (typeof fake !== "string") return null;
      const clean = cleanFake(fake);
      if (!clean) return null;
      f.push(clean);
    }
    c.push({ n: cleanName(e.n), f });
  }

  return { v: FOOL_VERSION, q, c };
}

/* ---------- URLs ---------- */

export function buildPlayUrl(origin: string, payload: FoolPayload): string {
  return `${origin.replace(/\/$/, "")}/fool/play/#q=${encodePayload(payload)}`;
}

/** Pull the encoded payload out of a location hash like "#q=..." */
export function payloadFromHash(hash: string): string | null {
  const m = hash.replace(/^#/, "").match(/(?:^|&)q=([^&]+)/);
  return m ? m[1] : null;
}

/* ---------- the chain ---------- */

export function canChain(payload: FoolPayload): boolean {
  return payload.c.length < MAX_CONTRIBUTORS;
}

/**
 * Append a new contributor for the pass-it-on link. Returns null when the
 * chain is full or the resulting link would exceed MAX_ENCODED (only
 * possible with heavily non-ASCII fakes); callers should then offer
 * "start a fresh one" instead.
 */
export function appendContributor(
  payload: FoolPayload,
  name: string,
  fakes: string[]
): FoolPayload | null {
  if (!canChain(payload)) return null;
  const n = cleanName(name);
  if (!n) return null;
  if (fakes.length !== payload.q.length) return null;
  const f = fakes.map(cleanFake);
  if (f.some((fake) => !fake)) return null;
  const next: FoolPayload = { ...payload, c: [...payload.c, { n, f }] };
  if (encodePayload(next).length > MAX_ENCODED) return null;
  return next;
}
