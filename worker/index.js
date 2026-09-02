/**
 * Edge worker for typologyquiz.com.
 *
 * Everything the site does is static; this exists for one thing the browser
 * cannot do alone: tell a player how their run compares to everyone else's.
 * Any path we do not claim falls straight through to the static assets, so
 * the site behaves exactly as before if this file is ever removed.
 *
 * Storage shape, one key per quiz:
 *   hist:<slug> -> { n: <runs recorded>, b: <101 counters, indexed by percent> }
 *
 * Percent buckets rather than raw scores so every quiz shares one shape
 * regardless of answer count (50 states, 196 countries, a 20-state subset).
 *
 * Known limits, deliberately accepted:
 * - KV has no atomic increment, so two runs landing in the same instant can
 *   lose a sample. These are approximate stats; a lost sample is invisible.
 * - KV free tier allows ~1000 writes/day. One finished run is one write.
 *   Past that, writes start failing and the client falls back to its baked
 *   estimate, which is the same behaviour as before this worker existed.
 */

const SLUG = /^[a-z0-9][a-z0-9-]{0,59}$/;
const MIN_SAMPLES = 25; // below this, a percentile says more about luck than skill
const BUCKETS = 101;

function json(body, status = 200, maxAge = 0) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": maxAge ? `public, max-age=${maxAge}` : "no-store",
    },
  });
}

function emptyHist() {
  return { n: 0, b: new Array(BUCKETS).fill(0) };
}

function readHist(raw) {
  if (!raw || typeof raw !== "object") return emptyHist();
  const b = Array.isArray(raw.b) && raw.b.length === BUCKETS ? raw.b : null;
  const n = Number.isInteger(raw.n) && raw.n >= 0 ? raw.n : 0;
  if (!b) return emptyHist();
  for (const v of b) if (!Number.isInteger(v) || v < 0) return emptyHist();
  return { n, b };
}

/** Share of recorded runs strictly below this percent, as a whole number. */
function percentileOf(hist, pct) {
  if (hist.n <= 0) return 0;
  let below = 0;
  for (let i = 0; i < pct; i++) below += hist.b[i];
  return Math.round((below / hist.n) * 100);
}

async function handleStats(request, env, slug) {
  if (!SLUG.test(slug)) return json({ error: "bad slug" }, 400);
  if (!env.TRIVIA_STATS) return json({ error: "stats unavailable" }, 503);

  const key = `hist:${slug}`;

  if (request.method === "GET") {
    const hist = readHist(await env.TRIVIA_STATS.get(key, "json"));
    return json({ n: hist.n, real: hist.n >= MIN_SAMPLES }, 200, 300);
  }

  if (request.method !== "POST") return json({ error: "method" }, 405);

  // Same-origin only. Not a security boundary (anyone can forge a header),
  // just enough to keep casual cross-site scripts out of the numbers.
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return json({ error: "origin" }, 403);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "bad json" }, 400);
  }

  const score = body?.score;
  const total = body?.total;
  if (
    !Number.isInteger(score) ||
    !Number.isInteger(total) ||
    total <= 0 ||
    total > 1000 ||
    score < 0 ||
    score > total
  ) {
    return json({ error: "bad payload" }, 400);
  }

  const pct = Math.max(0, Math.min(100, Math.round((score / total) * 100)));
  const hist = readHist(await env.TRIVIA_STATS.get(key, "json"));

  // Percentile is computed against the field BEFORE this run joins it, so a
  // player is never ranked against themselves.
  const percentile = percentileOf(hist, pct);
  const real = hist.n >= MIN_SAMPLES;

  hist.b[pct] += 1;
  hist.n += 1;
  try {
    await env.TRIVIA_STATS.put(key, JSON.stringify(hist));
  } catch {
    // Over quota or a transient write failure: the read half still worked,
    // so return what we know and let the client decide.
    return json({ n: hist.n - 1, percentile, real, stored: false });
  }

  return json({ n: hist.n, percentile, real, stored: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const m = url.pathname.match(/^\/api\/stats\/([^/]+)\/?$/);
    if (m) return handleStats(request, env, m[1]);
    return env.ASSETS.fetch(request);
  },
};
