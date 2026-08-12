import type { DrivingResult } from "./types";

/**
 * URL encoding for a driving result.
 *
 * Same idea as `src/lib/results.ts`: the result rides in the query string so a
 * results page can be reloaded, bookmarked or shared without a server. Keys are
 * shortened because `wrongIds` plus a per-topic breakdown adds up fast, and a
 * 40-question set has to stay inside a link people can actually paste.
 *
 * Anything malformed decodes to `null` rather than throwing - a mangled link
 * should show "results not found", never a blank crash.
 */

type PackedTopic = [correct: number, total: number];
type PackedSection = [label: string, correct: number, total: number, passed: number];

interface Packed {
  /** jurisdiction slug */
  j: string;
  /** set id */
  s: string;
  /** correct */
  c: number;
  /** total */
  t: number;
  /** percent */
  p: number;
  /** passed (0/1) */
  k: number;
  /** byTopic */
  bt: Record<string, PackedTopic>;
  /** sections, when the jurisdiction scores them independently */
  se?: PackedSection[];
  /** wrong question ids */
  w: string[];
  /** completedAt */
  at: number;
}

function toBase64Url(raw: string): string {
  const b64 = btoa(unescape(encodeURIComponent(raw)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(encoded: string): string {
  const b64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
  const remainder = b64.length % 4;
  const padded = remainder === 0 ? b64 : b64 + "=".repeat(4 - remainder);
  return decodeURIComponent(escape(atob(padded)));
}

export function encodeDrivingResult(result: DrivingResult): string {
  const bt: Record<string, PackedTopic> = {};
  for (const [topic, v] of Object.entries(result.byTopic)) {
    bt[topic] = [v.correct, v.total];
  }

  const packed: Packed = {
    j: result.jurisdictionSlug,
    s: result.setId,
    c: result.correct,
    t: result.total,
    p: result.percent,
    k: result.passed ? 1 : 0,
    bt,
    w: result.wrongIds,
    at: result.completedAt,
  };

  if (result.sections?.length) {
    packed.se = result.sections.map(
      (sec): PackedSection => [sec.label, sec.correct, sec.total, sec.passed ? 1 : 0]
    );
  }

  return toBase64Url(JSON.stringify(packed));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function num(value: unknown, fallback = 0): number {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function str(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

export function decodeDrivingResult(encoded: string): DrivingResult | null {
  try {
    const parsed: unknown = JSON.parse(fromBase64Url(encoded));
    if (!isRecord(parsed)) return null;
    if (typeof parsed.j !== "string" || typeof parsed.s !== "string") return null;

    const byTopic: DrivingResult["byTopic"] = {};
    if (isRecord(parsed.bt)) {
      for (const [topic, raw] of Object.entries(parsed.bt)) {
        if (!Array.isArray(raw)) continue;
        byTopic[topic] = { correct: num(raw[0]), total: num(raw[1]) };
      }
    }

    let sections: DrivingResult["sections"];
    if (Array.isArray(parsed.se)) {
      sections = parsed.se
        .filter((row): row is unknown[] => Array.isArray(row))
        .map((row) => ({
          label: str(row[0]),
          correct: num(row[1]),
          total: num(row[2]),
          passed: num(row[3]) === 1,
        }));
    }

    const wrongIds = Array.isArray(parsed.w)
      ? parsed.w.filter((id): id is string => typeof id === "string")
      : [];

    return {
      jurisdictionSlug: parsed.j,
      setId: parsed.s,
      correct: num(parsed.c),
      total: num(parsed.t),
      percent: num(parsed.p),
      passed: num(parsed.k) === 1,
      byTopic,
      sections,
      wrongIds,
      completedAt: num(parsed.at, Date.now()),
    };
  } catch {
    return null;
  }
}
