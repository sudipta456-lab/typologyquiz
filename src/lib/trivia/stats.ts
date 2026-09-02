/**
 * Live play stats.
 *
 * The site is static, so a run's standing among real players is the one number
 * the browser cannot work out alone. `/api/stats/<slug>` (see worker/index.js)
 * keeps a per-quiz histogram and answers with the share of runs this one beat.
 *
 * Every failure path here is silent on purpose: no network, an ad blocker, a
 * cold worker, or a KV write quota all land on `null`, and the results screen
 * keeps showing its baked estimate exactly as it did before this existed.
 */

export interface LiveStats {
  /** Share of recorded runs this score beat, 0-100. */
  percentile: number;
  /** Runs recorded for this quiz, including this one. */
  n: number;
  /** False while the sample is too small to be worth showing. */
  real: boolean;
}

const TIMEOUT_MS = 4000;

function isLiveStats(v: unknown): v is LiveStats {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  return (
    typeof o.percentile === "number" &&
    Number.isFinite(o.percentile) &&
    o.percentile >= 0 &&
    o.percentile <= 100 &&
    typeof o.n === "number" &&
    Number.isFinite(o.n) &&
    o.n >= 0 &&
    typeof o.real === "boolean"
  );
}

/**
 * Record a finished run and get back how it placed. Returns null whenever the
 * answer is missing, malformed, or slow, so callers can fall back quietly.
 */
export async function reportRun(
  slug: string,
  score: number,
  total: number
): Promise<LiveStats | null> {
  if (typeof fetch !== "function" || total <= 0) return null;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`/api/stats/${encodeURIComponent(slug)}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ score, total }),
      signal: controller.signal,
      keepalive: true,
    });
    if (!res.ok) return null;
    const data: unknown = await res.json();
    return isLiveStats(data) ? data : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}
