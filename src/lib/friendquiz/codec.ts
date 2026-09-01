/**
 * Friend quiz link codec.
 *
 * The whole quiz travels inside a URL FRAGMENT (#q=...), never a query
 * string, so answers never appear in server or CDN logs. Payload is
 * JSON -> UTF-8 -> base64url, same idiom as rooms.ts.
 *
 * URL format:
 *   {origin}/friend-quiz/play/#q=<base64url>
 *
 * Payload (compact keys on purpose, every byte is link length):
 *   v  1                     version, for future migrations
 *   n  "Maya"                creator first name (clipped to 20 chars)
 *   p  "basics" | "mix"      pack id
 *   q  ["b1","d4",...]       question ids, in play order
 *   a  [0,3,...]             creator's answer index per question
 *   s  [{n:"Sam",s:7},...]   optional: scores so far (the return link)
 *
 * Length budget: base play URL is 42 chars. A worst-case payload
 * (20-char name, 10 question ids, full 8-entry scoreboard with 20-char
 * names) is ~460 chars of JSON -> ~615 chars of base64url -> ~660 chars
 * total. Hard cap: MAX_ENCODED (1400 chars encoded, ~1450 total) with a
 * truncation rule of dropping the OLDEST scores first; the quiz itself
 * (n/p/q/a) can never exceed the cap on its own.
 */

import { getQuestion } from "./packs";

export const FRIEND_QUIZ_VERSION = 1;
export const MAX_NAME_LEN = 20;
export const MAX_SCORES = 8;
export const MAX_ENCODED = 1400;

export type FriendScore = {
  /** Guesser first name */
  n: string;
  /** Score out of quiz length (0-10) */
  s: number;
};

export type FriendQuizPayload = {
  v: number;
  n: string;
  p: string;
  q: string[];
  a: number[];
  s?: FriendScore[];
};

export function cleanName(raw: string): string {
  return raw.replace(/\s+/g, " ").trim().slice(0, MAX_NAME_LEN);
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

export function encodePayload(payload: FriendQuizPayload): string {
  return toBase64Url(JSON.stringify(payload));
}

/**
 * Strict decode: returns null for anything that does not resolve to a
 * playable quiz (bad JSON, unknown question ids, out-of-range answers).
 * A future v2 payload also returns null here; the play page shows the
 * friendly "link got mangled" screen either way.
 */
export function decodePayload(encoded: string): FriendQuizPayload | null {
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

  if (d.v !== FRIEND_QUIZ_VERSION) return null;
  if (typeof d.n !== "string" || !d.n.trim()) return null;
  if (typeof d.p !== "string" || !d.p) return null;
  if (!Array.isArray(d.q) || d.q.length < 1 || d.q.length > 12) return null;
  if (!Array.isArray(d.a) || d.a.length !== d.q.length) return null;

  const q: string[] = [];
  const a: number[] = [];
  for (let i = 0; i < d.q.length; i++) {
    const id = d.q[i];
    const ans = d.a[i];
    if (typeof id !== "string") return null;
    const question = getQuestion(id);
    if (!question) return null;
    if (typeof ans !== "number" || !Number.isInteger(ans)) return null;
    if (ans < 0 || ans >= question.options.length) return null;
    q.push(id);
    a.push(ans);
  }

  let s: FriendScore[] | undefined;
  if (d.s !== undefined) {
    if (!Array.isArray(d.s)) return null;
    s = [];
    for (const entry of d.s.slice(0, MAX_SCORES)) {
      if (!entry || typeof entry !== "object") return null;
      const e = entry as Record<string, unknown>;
      if (typeof e.n !== "string" || typeof e.s !== "number") return null;
      const score = Math.round(e.s);
      if (score < 0 || score > q.length) return null;
      s.push({ n: cleanName(e.n) || "Someone", s: score });
    }
  }

  return {
    v: FRIEND_QUIZ_VERSION,
    n: cleanName(d.n),
    p: d.p,
    q,
    a,
    ...(s && s.length ? { s } : {}),
  };
}

/* ---------- URLs ---------- */

export function buildPlayUrl(origin: string, payload: FriendQuizPayload): string {
  return `${origin.replace(/\/$/, "")}/friend-quiz/play/#q=${encodePayload(payload)}`;
}

/** Pull the encoded payload out of a location hash like "#q=..." */
export function payloadFromHash(hash: string): string | null {
  const m = hash.replace(/^#/, "").match(/(?:^|&)q=([^&]+)/);
  return m ? m[1] : null;
}

/* ---------- the leaderboard-in-the-link ---------- */

/**
 * Append a guesser's score to the payload for the return link.
 * Rules, in order:
 *   1. newest score goes last;
 *   2. keep at most MAX_SCORES entries (drop the oldest first);
 *   3. if the encoded payload still exceeds MAX_ENCODED, keep dropping
 *      the oldest scores until it fits (the newest score always survives).
 */
export function appendScore(
  payload: FriendQuizPayload,
  guesserName: string,
  score: number
): FriendQuizPayload {
  const entry: FriendScore = {
    n: cleanName(guesserName) || "Someone",
    s: Math.max(0, Math.min(payload.q.length, Math.round(score))),
  };
  let scores = [...(payload.s || []), entry].slice(-MAX_SCORES);
  let next: FriendQuizPayload = { ...payload, s: scores };
  while (scores.length > 1 && encodePayload(next).length > MAX_ENCODED) {
    scores = scores.slice(1);
    next = { ...payload, s: scores };
  }
  return next;
}

/* ---------- verdicts ---------- */

export type VerdictBand = {
  min: number;
  max: number;
  title: string;
  line: (name: string) => string;
};

export const VERDICT_BANDS: VerdictBand[] = [
  {
    min: 0,
    max: 3,
    title: "Certified stranger",
    line: (name) =>
      `New here? Honestly, a fresh start. ${name} has stories you haven't heard yet, and now you have an excuse to ask.`,
  },
  {
    min: 4,
    max: 6,
    title: "Solid acquaintance energy",
    line: (name) =>
      `You know the trailer, not the whole movie. ${name} should be flattered you got this far, and slightly concerned about the rest.`,
  },
  {
    min: 7,
    max: 8,
    title: "Certified close friend",
    line: (name) =>
      `You've clearly been paying attention. ${name} can't get away with much around you.`,
  },
  {
    min: 9,
    max: 10,
    title: "Shared brain detected",
    line: (name) =>
      `Scary levels of knowing. At this point you and ${name} might be the same person in two hoodies.`,
  },
];

export function verdictFor(score: number, total: number): VerdictBand {
  // Bands are written for /10; scale in case a future pack size differs.
  const scaled = total === 10 ? score : Math.round((score / Math.max(1, total)) * 10);
  return (
    VERDICT_BANDS.find((b) => scaled >= b.min && scaled <= b.max) || VERDICT_BANDS[0]
  );
}

/* ---------- create-flow draft (localStorage only) ---------- */

const DRAFT_KEY = "typologyquiz_friendquiz_draft_v1";

export type FriendQuizDraft = {
  packId: string;
  /** question ids in order (matters for mix) */
  questionIds: string[];
  /** questionId -> chosen option index */
  answers: Record<string, number>;
  name: string;
};

export function saveDraft(draft: FriendQuizDraft): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  } catch {
    /* storage full or blocked: the draft is a convenience, not a promise */
  }
}

export function loadDraft(): FriendQuizDraft | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const d = JSON.parse(raw) as FriendQuizDraft;
    if (!d || typeof d.packId !== "string" || !Array.isArray(d.questionIds)) return null;
    if (!d.questionIds.every((id) => typeof id === "string" && !!getQuestion(id))) return null;
    return {
      packId: d.packId,
      questionIds: d.questionIds,
      answers: d.answers && typeof d.answers === "object" ? d.answers : {},
      name: typeof d.name === "string" ? d.name : "",
    };
  } catch {
    return null;
  }
}

export function clearDraft(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(DRAFT_KEY);
  } catch {
    /* ignore */
  }
}
