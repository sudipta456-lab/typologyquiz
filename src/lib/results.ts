import { TestResult, AnswerMap } from "./types";

/**
 * Encode a result as a compact base64 URL param.
 * Format: slug|timestamp|key1:val1,key2:val2,...|extras
 */
export function encodeResult(
  result: TestResult,
  extras?: Record<string, unknown>
): string {
  const parts: string[] = [
    result.testSlug,
    result.completedAt.toString(),
  ];

  // Score pairs
  const scorePairs = Object.entries(result.scores)
    .map(([k, v]) => `${k}:${v}`)
    .join(",");
  parts.push(scorePairs);

  // Percentiles
  if (result.percentiles) {
    const pctPairs = Object.entries(result.percentiles)
      .map(([k, v]) => `${k}:${v}`)
      .join(",");
    parts.push(`pct:${pctPairs}`);
  } else {
    parts.push("");
  }

  // CRT extras
  if (result.correctCount !== undefined) {
    parts.push(`cc:${result.correctCount}`);
  } else {
    parts.push("");
  }

  if (result.totalQuestions !== undefined) {
    parts.push(`tq:${result.totalQuestions}`);
  } else {
    parts.push("");
  }

  // Additional extras (strings only; objects are skipped to keep URLs stable)
  if (extras && Object.keys(extras).length > 0) {
    const extraPairs = Object.entries(extras)
      .filter(([, v]) => typeof v === "string" || typeof v === "number" || typeof v === "boolean")
      .map(([k, v]) => `${k}:${encodeURIComponent(String(v))}`)
      .join(",");
    parts.push(extraPairs ? `ex:${extraPairs}` : "");
  } else {
    parts.push("");
  }

  // Base64 encode (URL safe)
  const raw = parts.join("|");
  return btoa(unescape(encodeURIComponent(raw)));
}

/**
 * Decode a base64 URL param back into a result.
 */
export function decodeResult(
  encoded: string
): { result: TestResult; extras?: Record<string, unknown> } | null {
  try {
    const raw = decodeURIComponent(escape(atob(encoded)));
    const parts = raw.split("|");

    if (parts.length < 3) return null;

    const slug = parts[0];
    const completedAt = parseInt(parts[1], 10);
    const scorePairs = parts[2].split(",").filter(Boolean);
    const pctRaw = parts[3] || "";
    const ccRaw = parts[4] || "";
    const tqRaw = parts[5] || "";
    const exRaw = parts[6] || "";

    const scores: Record<string, number> = {};
    for (const pair of scorePairs) {
      const [k, v] = pair.split(":");
      scores[k] = parseInt(v, 10);
    }

    const result: TestResult = {
      testSlug: slug,
      scores,
      completedAt,
    };

    // Percentiles
    if (pctRaw.startsWith("pct:")) {
      const pctPairs = pctRaw.slice(4).split(",").filter(Boolean);
      result.percentiles = {};
      for (const pair of pctPairs) {
        const [k, v] = pair.split(":");
        result.percentiles[k] = parseInt(v, 10);
      }
    }

    // CRT
    if (ccRaw.startsWith("cc:")) {
      result.correctCount = parseInt(ccRaw.slice(3), 10);
    }
    if (tqRaw.startsWith("tq:")) {
      result.totalQuestions = parseInt(tqRaw.slice(3), 10);
    }

    // Extras
    let extras: Record<string, unknown> | undefined;
    if (exRaw.startsWith("ex:")) {
      const exPairs = exRaw.slice(3).split(",").filter(Boolean);
      extras = {};
      for (const pair of exPairs) {
        const [k, v] = pair.split(":");
        extras[k] = decodeURIComponent(v);
      }
    }

    return { result, extras };
  } catch {
    return null;
  }
}

/**
 * Save answers to localStorage for a given test.
 */
export function saveProgress(testSlug: string, answers: AnswerMap): void {
  try {
    const key = `mindmetrics_${testSlug}`;
    localStorage.setItem(
      key,
      JSON.stringify({
        answers,
        savedAt: Date.now(),
      })
    );
  } catch {
    // localStorage unavailable
  }
}

/**
 * Load saved answers from localStorage.
 */
export function loadProgress(
  testSlug: string
): { answers: AnswerMap; savedAt: number } | null {
  try {
    const key = `mindmetrics_${testSlug}`;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Clear saved progress for a test.
 */
export function clearProgress(testSlug: string): void {
  try {
    localStorage.removeItem(`mindmetrics_${testSlug}`);
  } catch {
    // ignore
  }
}

/**
 * Encode a compact result array for sharing (just the scores).
 */
export function encodeCompactResult(
  testSlug: string,
  scores: Record<string, number>
): string {
  const scoreArray = Object.values(scores);
  // Pack as: slug:score1,score2,score3...
  const raw = `${testSlug}:${scoreArray.join(",")}`;
  return btoa(unescape(encodeURIComponent(raw)));
}