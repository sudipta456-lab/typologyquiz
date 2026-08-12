"use client";

import type { DrivingResult } from "./types";

// Per-device progress, same privacy promise as the rest of the site: nothing
// leaves the browser. Keyed by jurisdiction so a learner can see themselves
// working through Alberta without their Texas attempts muddying the picture.

const KEY = "tq_driving_progress_v1";

export interface SetAttempt {
  setId: string;
  bestPercent: number;
  bestCorrect: number;
  total: number;
  passed: boolean;
  attempts: number;
  lastAt: number;
}

export type DrivingProgress = Record<string, Record<string, SetAttempt>>;

function readAll(): DrivingProgress {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as DrivingProgress) : {};
  } catch {
    return {};
  }
}

function writeAll(data: DrivingProgress): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    /* storage unavailable or full - progress is a nicety, never block on it */
  }
}

export function loadProgress(jurisdictionSlug: string): Record<string, SetAttempt> {
  return readAll()[jurisdictionSlug] ?? {};
}

/** Record an attempt, keeping the learner's best score for that set. */
export function recordAttempt(result: DrivingResult): void {
  const all = readAll();
  const forJ = (all[result.jurisdictionSlug] ??= {});
  const prev = forJ[result.setId];

  forJ[result.setId] = {
    setId: result.setId,
    bestPercent: Math.max(prev?.bestPercent ?? 0, result.percent),
    bestCorrect: Math.max(prev?.bestCorrect ?? 0, result.correct),
    total: result.total,
    passed: (prev?.passed ?? false) || result.passed,
    attempts: (prev?.attempts ?? 0) + 1,
    lastAt: result.completedAt,
  };

  writeAll(all);
}

export interface JurisdictionSummary {
  setsPassed: number;
  setsAttempted: number;
  averageBest: number;
}

export function summarize(
  jurisdictionSlug: string,
  totalSets: number
): JurisdictionSummary {
  const forJ = Object.values(loadProgress(jurisdictionSlug));
  const setsPassed = forJ.filter((s) => s.passed).length;
  const averageBest = forJ.length
    ? Math.round(forJ.reduce((sum, s) => sum + s.bestPercent, 0) / forJ.length)
    : 0;
  return { setsPassed, setsAttempted: Math.min(forJ.length, totalSets), averageBest };
}

export function clearProgress(jurisdictionSlug?: string): void {
  if (!jurisdictionSlug) {
    try {
      localStorage.removeItem(KEY);
    } catch {
      /* ignore */
    }
    return;
  }
  const all = readAll();
  delete all[jurisdictionSlug];
  writeAll(all);
}
