import { TestResult, AnswerMap, TestDefinition, AssessmentVersion } from "./types";
import { currentVersion, knownVersion, reportDefinition, sameAssessmentVersion } from "./tests/assessment-versions";
import { validProgress } from "./tests/assessment-input";

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

  // Historical percentile slot is deliberately empty: no approved norms exist.
  parts.push("");

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

  if (result.assessment) {
    const v = result.assessment;
    parts.push(`v:${v.instrument},${v.scoring},${v.report},${v.variant}`);
  }

  // Trailing empty fields carry no information; the decoder defaults them.
  while (parts.length > 3 && parts[parts.length - 1] === "") parts.pop();

  // base64URL: "+/" become "-_" and the "=" padding is dropped, so the result
  // survives a URL untouched. Standard base64 needed percent-escaping, which
  // turned every "=" into "%3D" and made a share link look like something you
  // should not click.
  const raw = parts.join("|");
  return btoa(unescape(encodeURIComponent(raw)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

/**
 * Decode a base64 URL param back into a result.
 */
export function decodeResult(
  encoded: string
): { result: TestResult; extras?: Record<string, unknown> } | null {
  try {
    // Accept both encodings. Links shared before the URL was shortened are
    // standard base64 with "=" padding; new ones are base64URL without it.
    // Restoring the alphabet and the padding makes one decoder serve both, so
    // no link anyone has already sent stops working.
    if (encoded.length > 12000) return null;
    let b64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
    if (b64.length % 4 !== 0) b64 += "=".repeat(4 - (b64.length % 4));
    const raw = decodeURIComponent(escape(atob(b64)));
    const parts = raw.split("|");

    if (parts.length < 3) return null;

    const slug = parts[0];
    const completedAt = Number(parts[1]);
    if (!/^[a-z0-9-]{1,80}$/.test(slug) || !Number.isSafeInteger(completedAt) || completedAt <= 0) return null;
    const scorePairs = parts[2].split(",").filter(Boolean);
    const versionRaw = parts[7] || "";
    const ccRaw = parts[4] || "";
    const tqRaw = parts[5] || "";
    const exRaw = parts[6] || "";

    const scores: Record<string, number> = {};
    for (const pair of scorePairs) {
      const [k, v] = pair.split(":");
      if (!/^[a-z][a-z0-9_]*$/i.test(k) || Object.hasOwn(scores, k) || !v) return null;
      const value = Number(v);
      if (!Number.isInteger(value) || value < 0 || value > 100) return null;
      scores[k] = value;
    }

    const result: TestResult = {
      testSlug: slug,
      scores,
      completedAt,
    };

    // Ignore old embedded percentiles. They were based on undocumented defaults.
    if (versionRaw) {
      if (!versionRaw.startsWith("v:")) return null;
      const [instrument, scoring, report, variant, extra] = versionRaw.slice(2).split(",");
      if (extra || (variant !== "standard" && variant !== "school")) return null;
      result.assessment = { instrument, scoring, report, variant };
      if (!knownVersion(slug, result.assessment)) return null;
    }
    const definition = reportDefinition(result);
    if (!definition || definition.axes.length !== Object.keys(scores).length ||
      !definition.axes.every(axis => Object.hasOwn(scores, axis.key))) return null;

    // CRT
    if (ccRaw.startsWith("cc:")) {
      result.correctCount = Number(ccRaw.slice(3));
    }
    if (tqRaw.startsWith("tq:")) {
      result.totalQuestions = Number(tqRaw.slice(3));
    }

    if (slug === "crt-7") {
      if (result.totalQuestions !== 7 || !Number.isInteger(result.correctCount) ||
        result.correctCount! < 0 || result.correctCount! > 7) return null;
    } else if (result.correctCount !== undefined || result.totalQuestions !== undefined) return null;

    // Extras
    let extras: Record<string, unknown> | undefined;
    if (exRaw.startsWith("ex:")) {
      const exPairs = exRaw.slice(3).split(",").filter(Boolean);
      extras = {};
      for (const pair of exPairs) {
        const [k, v] = pair.split(":");
        if (k === "label" || k === "description") extras[k] = decodeURIComponent(v ?? "");
      }
    }

    if (slug === "vviq" && !result.assessment) {
      extras = { label: "Imagery self-report", description: "Historical imagery score without diagnostic cutoffs." };
    }
    return { result, extras };
  } catch {
    return null;
  }
}

/**
 * Save answers to localStorage for a given test.
 */
export function saveProgress(test: TestDefinition, answers: AnswerMap, variant: AssessmentVersion["variant"] = "standard"): void {
  try {
    const key = `mindmetrics_${test.slug}`;
    localStorage.setItem(
      key,
      JSON.stringify({
        answers,
        assessment: currentVersion(test.slug, variant),
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
  test: TestDefinition,
  variant: AssessmentVersion["variant"] = "standard"
): { answers: AnswerMap; savedAt: number } | null {
  try {
    const key = `mindmetrics_${test.slug}`;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (!saved || !Number.isSafeInteger(saved.savedAt) || !validProgress(test, saved.answers) ||
      !sameAssessmentVersion(saved.assessment, currentVersion(test.slug, variant))) return null;
    return saved;
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