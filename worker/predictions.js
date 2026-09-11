const MAX_BODY_BYTES = 16 * 1024;
const ID = /^[a-z0-9][a-z0-9-]{0,79}$/;
const encoder = new TextEncoder();

// Publication intentionally starts empty. Reviewed events are added here only
// after their event and outcome approval references exist.
export const PREDICTION_EVENTS = Object.freeze([]);

function response(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}

function error(code, status) {
  return response({ error: code }, status);
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

async function readJson(request) {
  if (request.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase() !== "application/json") throw new Error("bad_json");
  const declared = Number(request.headers.get("content-length"));
  if (Number.isFinite(declared) && declared > MAX_BODY_BYTES) throw new Error("too_large");
  if (!request.body) throw new Error("bad_json");
  const reader = request.body.getReader();
  const chunks = [];
  let length = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    length += value.byteLength;
    if (length > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new Error("too_large");
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  try {
    return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
  } catch {
    throw new Error("bad_json");
  }
}

function reviewedEvent(event) {
  return event && ID.test(event.id) && Number.isInteger(event.revision) && event.revision > 0 &&
    ID.test(event.rulesVersion) && typeof event.title === "string" && event.title.length <= 160 &&
    typeof event.rating === "string" && event.rating.length > 0 && event.rating.length <= 40 &&
    typeof event.source?.url === "string" && event.source.url.startsWith("https://") &&
    typeof event.source.retrievedAt === "string" && Number.isFinite(Date.parse(event.source.retrievedAt)) &&
    typeof event.opensAt === "string" && typeof event.locksAt === "string" &&
    Number.isFinite(Date.parse(event.opensAt)) && Number.isFinite(Date.parse(event.locksAt)) &&
    Date.parse(event.opensAt) < Date.parse(event.locksAt) &&
    event.audience === "general" && event.review?.status === "approved" &&
    typeof event.review.reference === "string" && event.review.reference.length > 0 &&
    Array.isArray(event.questions) && event.questions.length > 0 && event.questions.length <= 20 &&
    new Set(event.questions.map((question) => question.id)).size === event.questions.length &&
    event.questions.every((question) => ID.test(question.id) && typeof question.prompt === "string" &&
      question.prompt.length <= 240 && Array.isArray(question.options) && question.options.length >= 2 &&
      question.options.length <= 8 && new Set(question.options.map((option) => option.id)).size === question.options.length &&
      question.options.every((option) => ID.test(option.id) && typeof option.label === "string" && option.label.length <= 120));
}

function publicEvent(event, now) {
  const time = now.getTime();
  const phase = reviewedSettlement(event) ? "locked" : time < Date.parse(event.opensAt) ? "upcoming" : time >= Date.parse(event.locksAt) ? "locked" : "open";
  return {
    id: event.id, revision: event.revision, rulesVersion: event.rulesVersion, title: event.title,
    description: event.description, rating: event.rating, opensAt: event.opensAt, locksAt: event.locksAt,
    expectedSettlementAt: event.expectedSettlementAt, phase,
    questions: event.questions.map(({ id, prompt, options }) => ({ id, prompt, options })),
  };
}

function canonicalPayload(payload) {
  return JSON.stringify({
    v: payload.v, keyId: payload.keyId, eventId: payload.eventId,
    eventRevision: payload.eventRevision, rulesVersion: payload.rulesVersion,
    picks: payload.picks.map(({ questionId, optionId }) => ({ questionId, optionId })),
    issuedAt: payload.issuedAt,
  });
}

function base64url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}

function decodeBase64url(value) {
  if (typeof value !== "string" || !/^[A-Za-z0-9_-]+$/.test(value)) throw new Error("bad_receipt");
  const padded = value.replaceAll("-", "+").replaceAll("_", "/") + "===".slice((value.length + 3) % 4);
  const binary = atob(padded);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

async function hmac(secret, payload) {
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(payload)));
}

function signingSecret(env, keyId) {
  if (typeof env.PREDICTION_SIGNING_KEYS === "string") {
    try {
      const keys = JSON.parse(env.PREDICTION_SIGNING_KEYS);
      if (keys && typeof keys === "object" && typeof keys[keyId] === "string" && keys[keyId].length > 0) return keys[keyId];
    } catch { return null; }
  }
  return keyId === env.PREDICTION_SIGNING_KEY_ID && typeof env.PREDICTION_SIGNING_SECRET === "string" && env.PREDICTION_SIGNING_SECRET.length > 0
    ? env.PREDICTION_SIGNING_SECRET : null;
}

async function issueReceipt(event, picks, env, now) {
  const payload = {
    v: 1, keyId: env.PREDICTION_SIGNING_KEY_ID, eventId: event.id,
    eventRevision: event.revision, rulesVersion: event.rulesVersion, picks,
    issuedAt: now.toISOString(),
  };
  const encoded = base64url(encoder.encode(canonicalPayload(payload)));
  const signature = base64url(await hmac(signingSecret(env, payload.keyId), canonicalPayload(payload)));
  return `${encoded}.${signature}`;
}

async function verifyReceipt(token, env) {
  if (typeof token !== "string" || token.length > 12000) return null;
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  let payload;
  try { payload = JSON.parse(new TextDecoder().decode(decodeBase64url(parts[0]))); } catch { return null; }
  if (payload?.v !== 1 || typeof payload.keyId !== "string" || !ID.test(payload.keyId) ||
      !ID.test(payload.eventId) || !Number.isInteger(payload.eventRevision) || !ID.test(payload.rulesVersion) ||
      typeof payload.issuedAt !== "string" || !Number.isFinite(Date.parse(payload.issuedAt)) || !Array.isArray(payload.picks)) return null;
  const secret = signingSecret(env, payload.keyId);
  if (!secret) return null;
  let expected;
  try { expected = await hmac(secret, canonicalPayload(payload)); } catch { return null; }
  let supplied;
  try { supplied = decodeBase64url(parts[1]); } catch { return null; }
  if (expected.byteLength !== supplied.byteLength) return null;
  let mismatch = 0;
  for (let i = 0; i < expected.length; i += 1) mismatch |= expected[i] ^ supplied[i];
  return mismatch === 0 ? payload : null;
}

function validPicks(event, picks) {
  if (!Array.isArray(picks) || picks.length !== event.questions.length) return false;
  return event.questions.every((question, index) => {
    const pick = picks[index];
    return pick && Object.keys(pick).length === 2 && pick.questionId === question.id &&
      question.options.some((option) => option.id === pick.optionId);
  });
}

function reviewedSettlement(event) {
  const settlement = event.settlement;
  return settlement && settlement.eventRevision === event.revision &&
    ["settled", "void", "cancelled", "corrected"].includes(settlement.status) &&
    Number.isInteger(settlement.version) && settlement.version >= 1 &&
    settlement.review?.status === "approved" && typeof settlement.review.reference === "string" &&
    settlement.review.reference.length > 0 && typeof settlement.source?.url === "string" &&
    settlement.source.url.startsWith("https://");
}

function settlementFor(event, payload, reveal) {
  const settlement = event.settlement;
  if (!reviewedSettlement(event) || settlement.eventRevision !== payload.eventRevision) return { status: "pending" };
  if (settlement.status !== "settled") return { status: settlement.status, settlementVersion: settlement.version };
  if (!validPicks(event, payload.picks) || !validPicks(event, settlement.outcomes)) return { status: "pending" };
  if (!reveal) return { status: "settled", settlementVersion: settlement.version, spoiler: true };
  const results = payload.picks.map((pick, index) => ({
    questionId: pick.questionId, optionId: pick.optionId,
    outcomeId: settlement.outcomes[index].optionId,
    correct: pick.optionId === settlement.outcomes[index].optionId,
    explanation: settlement.explanations?.[pick.questionId] ?? "Outcome reviewed.",
  }));
  return {
    status: "settled", settlementVersion: settlement.version,
    correct: results.filter((item) => item.correct).length, total: results.length, results,
    recapHref: typeof settlement.recapHref === "string" && settlement.recapHref.startsWith("/") && !settlement.recapHref.startsWith("//") ? settlement.recapHref : undefined,
  };
}

export function createPredictionRouter(events = PREDICTION_EVENTS, clock = () => new Date()) {
  const registry = new Map(events.filter(reviewedEvent).map((event) => [event.id, event]));
  return async function route(request, env, pathname) {
    if (pathname === "/api/predictions/events" || pathname === "/api/predictions/events/") {
      if (request.method !== "GET") return error("method", 405);
      return response({ events: [...registry.values()].map((event) => publicEvent(event, clock())) }, 200);
    }
    if (pathname !== "/api/predictions/receipts" && pathname !== "/api/predictions/verify" &&
        pathname !== "/api/predictions/receipts/" && pathname !== "/api/predictions/verify/") return null;
    if (request.method !== "POST") return error("method", 405);
    if (!sameOrigin(request)) return error("origin", 403);
    if (!env.PREDICTION_SIGNING_KEY_ID || !signingSecret(env, env.PREDICTION_SIGNING_KEY_ID)) return error("unavailable", 503);
    let body;
    try { body = await readJson(request); } catch (cause) { return error(cause.message, cause.message === "too_large" ? 413 : 400); }
    if (pathname.includes("/receipts")) {
      if (!body || Object.keys(body).length !== 2 || !ID.test(body.eventId)) return error("bad_payload", 400);
      const event = registry.get(body.eventId);
      if (!event) return error("event_unavailable", 404);
      const now = clock();
      if (reviewedSettlement(event)) return error("locked", 409);
      if (now.getTime() < Date.parse(event.opensAt)) return error("not_open", 409);
      if (now.getTime() >= Date.parse(event.locksAt)) return error("locked", 409);
      if (!validPicks(event, body.picks)) return error("bad_picks", 400);
      const receipt = await issueReceipt(event, body.picks, env, now);
      return response({ receipt, issuedAt: now.toISOString(), event: publicEvent(event, now) }, 201);
    }
    if (!body || ![1, 2].includes(Object.keys(body).length) || typeof body.receipt !== "string" ||
        (body.reveal !== undefined && typeof body.reveal !== "boolean")) return error("bad_payload", 400);
    const payload = await verifyReceipt(body.receipt, env);
    if (!payload) return error("invalid_receipt", 400);
    const event = registry.get(payload.eventId);
    if (!event || event.revision !== payload.eventRevision || event.rulesVersion !== payload.rulesVersion || !validPicks(event, payload.picks)) {
      return error("event_unavailable", 404);
    }
    return response({ valid: true, receipt: payload, settlement: settlementFor(event, payload, body.reveal === true) });
  };
}

export const handlePredictions = createPredictionRouter();
