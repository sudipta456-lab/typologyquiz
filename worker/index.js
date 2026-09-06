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

// ---------------------------------------------------------------------------
// Short share links.
//
// A result link carries the whole result in its query string, so it is long by
// design - that is what keeps a score on the sharer's device instead of in a
// database. Shortened, it reads like a normal link.
//
// THE RISK, AND THE RULE. An endpoint that shortens a URL somebody hands it is
// a phishing tool: the attacker gets a typologyquiz.com link that lands on
// their page. So this NEVER stores a URL. It stores a path on this site, and
// only one of the shapes below. There is no field anywhere in the request that
// can name another host.
//
// Storage: short:<code> -> "/test/<slug>/results/?r=..."
//
// KV's free tier allows roughly 1000 writes a day across the whole account,
// shared with the stats above. Shortening the same result twice reuses the
// stored code (a read) rather than burning a second write, and any write
// failure returns 503 so the page simply keeps showing the long link.
const SHORT_CODE = /^[0-9a-hjkmnp-tv-z]{7}$/; // Crockford-ish: no i, l, o, u
const SHORTENABLE = [
  /^\/test\/[a-z0-9][a-z0-9-]{0,59}\/results\/\?r=[A-Za-z0-9\-_]{1,3000}$/,
  /^\/driving\/[a-z0-9][a-z0-9-]{0,59}\/[a-z0-9-]{1,40}\/results\/\?[A-Za-z0-9\-_=&%.]{1,3000}$/,
  /^\/trivia\/[a-z0-9][a-z0-9-]{0,59}\/\?[A-Za-z0-9\-_=&%.]{1,3000}$/,
];

const CODE_ALPHABET = "0123456789abcdefghjkmnpqrstvwxyz";

function newCode() {
  const bytes = crypto.getRandomValues(new Uint8Array(7));
  let out = "";
  for (const b of bytes) out += CODE_ALPHABET[b % CODE_ALPHABET.length];
  return out;
}

/** A stable key for "this exact path", so re-sharing does not write again. */
async function pathKey(path) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(path));
  const bytes = new Uint8Array(digest).slice(0, 16);
  let hex = "";
  for (const b of bytes) hex += b.toString(16).padStart(2, "0");
  return `path:${hex}`;
}

async function handleShorten(request, env) {
  if (request.method !== "POST") return json({ error: "method" }, 405);
  if (!env.SHORT_LINKS) return json({ error: "unavailable" }, 503);

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

  const path = body?.path;
  if (typeof path !== "string" || path.length > 3100) {
    return json({ error: "bad payload" }, 400);
  }
  // A path, never a URL. "//evil.com" and "https://evil.com" both fail the
  // first test; a backslash fails it too, because some clients treat "\" as
  // "/" when resolving.
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) {
    return json({ error: "not a site path" }, 400);
  }
  if (!SHORTENABLE.some((re) => re.test(path))) {
    return json({ error: "not a shareable page" }, 400);
  }

  const key = await pathKey(path);
  const existing = await env.SHORT_LINKS.get(key);
  if (existing && SHORT_CODE.test(existing)) {
    return json({ code: existing, reused: true });
  }

  const code = newCode();
  try {
    // The code -> path entry is what the redirect needs; the path -> code
    // entry only exists to avoid a second write for the same result.
    await env.SHORT_LINKS.put(`short:${code}`, path);
    await env.SHORT_LINKS.put(key, code);
  } catch {
    return json({ error: "write failed" }, 503);
  }
  return json({ code, reused: false });
}

async function handleRedirect(env, code) {
  if (!SHORT_CODE.test(code) || !env.SHORT_LINKS) {
    return Response.redirect(new URL("/", "https://typologyquiz.com"), 302);
  }
  const path = await env.SHORT_LINKS.get(`short:${code}`);
  if (!path || !path.startsWith("/") || path.startsWith("//")) {
    return Response.redirect(new URL("/", "https://typologyquiz.com"), 302);
  }
  return new Response(null, {
    status: 302,
    headers: { location: path, "cache-control": "public, max-age=600" },
  });
}

// Google Search Console verification.
//
// Do NOT also place this file in public/. Measured behaviour on this project:
// with the file present as an asset, the assets layer matches it first and,
// because html_handling is "force-trailing-slash", answers the literal
// "/<name>.html" path with a 307 to "/<name>/" - and the literal path is
// exactly what Google fetches. With no such asset the request falls through to
// this worker, which answers 200 with the expected body. Serving it here is
// what makes the check pass; adding the file back would break it again.
const GSC_VERIFICATION = "google30e3016b50e46ac0";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === `/${GSC_VERIFICATION}.html`) {
      return new Response(`google-site-verification: ${GSC_VERIFICATION}.html`, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public, max-age=3600",
        },
      });
    }

    const m = url.pathname.match(/^\/api\/stats\/([^/]+)\/?$/);
    if (m) return handleStats(request, env, m[1]);

    if (url.pathname === "/api/short" || url.pathname === "/api/short/") {
      return handleShorten(request, env);
    }
    const s = url.pathname.match(/^\/s\/([^/]+)\/?$/);
    if (s) return handleRedirect(env, s[1]);

    return env.ASSETS.fetch(request);
  },
};
