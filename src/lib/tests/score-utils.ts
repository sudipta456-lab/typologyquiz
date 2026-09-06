import type { Question, TestDefinition } from "../types";

/**
 * The questions currently in play for a given set of answers.
 *
 * Base questions are always included. A question carrying `showIf` is a
 * follow-up probe: it appears only once its trigger question has been answered
 * within the configured range. Because unanswered items are skipped by the
 * scorers, a probe that never appears simply doesn't count toward its axis.
 */
export function visibleQuestions(
  test: TestDefinition,
  answers: Record<string, number>
): Question[] {
  return test.questions.filter((q) => {
    if (!q.showIf) return true;
    const trigger = answers[q.showIf.questionId];
    if (trigger === undefined) return false;
    const min = q.showIf.min ?? Number.NEGATIVE_INFINITY;
    const max = q.showIf.max ?? Number.POSITIVE_INFINITY;
    return trigger >= min && trigger <= max;
  });
}

/** Score likert axes to 0-100. direction -1 reverses the item. */
export function scoreLikertAxes(
  questions: Question[],
  answers: Record<string, number>,
  axisKeys: string[]
): Record<string, number> {
  const buckets: Record<string, { sum: number; count: number }> = {};
  for (const key of axisKeys) buckets[key] = { sum: 0, count: 0 };

  for (const q of questions) {
    const answer = answers[q.id];
    if (answer === undefined) continue;
    if (!buckets[q.axis]) continue;
    let score = (answer - 1) * 25; // 1..5 -> 0..100
    if (q.direction === -1) score = 100 - score;
    const w = q.weight ?? 1;
    buckets[q.axis].sum += score * w;
    buckets[q.axis].count += w;
  }

  const out: Record<string, number> = {};
  for (const key of axisKeys) {
    const b = buckets[key];
    out[key] = b.count > 0 ? Math.round(b.sum / b.count) : 50;
  }
  return out;
}

export function topAxis(
  scores: Record<string, number>,
  labels: Record<string, { label: string; description: string }>
): { key: string; label: string; description: string; score: number } {
  let bestKey = Object.keys(scores)[0];
  let best = -1;
  for (const [k, v] of Object.entries(scores)) {
    if (v > best) {
      best = v;
      bestKey = k;
    }
  }
  const meta = labels[bestKey] || { label: bestKey, description: "" };
  return { key: bestKey, label: meta.label, description: meta.description, score: best };
}

// ---------------------------------------------------------------------------
// Generic data-driven scorers (scoreMode on TestDefinition).
// These resist straight-lining: a constant answer collapses every axis toward
// the middle (because each axis mixes forward + reverse items) and, for "type"
// quizzes, an ipsative flat-profile check returns a "balanced" result instead
// of an arbitrary first-in-list winner.
// ---------------------------------------------------------------------------

/** Minimum lead (points above the person's own axis mean) for a type to "win". */
export const FLAT_PROFILE_THRESHOLD = 8;

export interface GenericScore {
  scores: Record<string, number>;
  category: { label: string; description: string };
}

/**
 * scoreMode "type": ipsative pick-top with flat-profile detection.
 * Ranks axes by how far they sit ABOVE the respondent's own average, so
 * answering the same on everything (or genuinely being well-rounded) yields
 * the `balanced` result rather than whichever axis happens to be listed first.
 */
/**
 * The category a set of typology scores lands in.
 *
 * Split out from scoreTypology because it depends on the SCORES alone, never on
 * the answers. That is what lets a share link carry only the scores: the label
 * and its description are recomputed on the results page instead of being
 * written into the URL, which is where most of a share link's length came from.
 */
export function typologyCategoryFromScores(
  test: TestDefinition,
  scores: Record<string, number>
): { label: string; description: string } {
  const keys = test.axes.map((a) => a.key);
  const values = keys.map((k) => scores[k]);
  const mean = values.reduce((a, b) => a + b, 0) / (values.length || 1);

  let bestKey = keys[0];
  let bestDev = -Infinity;
  let secondDev = -Infinity;
  for (const k of keys) {
    const dev = scores[k] - mean;
    if (dev > bestDev) {
      secondDev = bestDev;
      bestDev = dev;
      bestKey = k;
    } else if (dev > secondDev) {
      secondDev = dev;
    }
  }

  // Flat profile (straight-lined or genuinely mixed), or a near-tie at the top.
  const leadsClearly = bestDev >= FLAT_PROFILE_THRESHOLD && bestDev - secondDev >= 2;
  if (!leadsClearly && test.balanced) {
    return { ...test.balanced };
  }

  const meta = test.typeMeta?.[bestKey] ?? { label: bestKey, description: "" };
  return { label: meta.label, description: meta.description };
}

export function scoreTypology(test: TestDefinition, answers: Record<string, number>): GenericScore {
  const keys = test.axes.map((a) => a.key);
  const scores = scoreLikertAxes(test.questions, answers, keys);
  return { scores, category: typologyCategoryFromScores(test, scores) };
}

/**
 * scoreMode "spectrum": single primary axis (axes[0]) mapped to a band.
 * Reverse-keyed items make a constant answer land mid-spectrum.
 */
/** The band a set of spectrum scores falls in. Depends on scores alone. */
export function spectrumCategoryFromScores(
  test: TestDefinition,
  scores: Record<string, number>
): { label: string; description: string } {
  const primary = test.axes.map((a) => a.key)[0];
  const value = scores[primary] ?? 50;

  const bands = test.spectrumBands ?? [];
  const band = bands.find((b) => value <= b.max) ?? bands[bands.length - 1];

  return band
    ? { label: band.label, description: band.description }
    : { label: test.axes[0]?.label ?? "Result", description: "" };
}

export function scoreSpectrum(test: TestDefinition, answers: Record<string, number>): GenericScore {
  const keys = test.axes.map((a) => a.key);
  const scores = scoreLikertAxes(test.questions, answers, keys);
  return { scores, category: spectrumCategoryFromScores(test, scores) };
}

/** scoreMode "scale": per-axis 0-100 profile, no single winner (like Big Five). */
export function scoreScale(test: TestDefinition, answers: Record<string, number>): Record<string, number> {
  const keys = test.axes.map((a) => a.key);
  return scoreLikertAxes(test.questions, answers, keys);
}

/**
 * Recompute a result's label and description from its scores.
 *
 * Returns undefined for score modes whose extras are not a function of the
 * scores (8values keeps a whole ideology object; the scale tests have no single
 * label at all). Those still carry their extras in the link.
 */
export function categoryFromScores(
  test: TestDefinition,
  scores: Record<string, number>
): { label: string; description: string } | undefined {
  if (test.scoreMode === "type") return typologyCategoryFromScores(test, scores);
  if (test.scoreMode === "spectrum") return spectrumCategoryFromScores(test, scores);
  return undefined;
}
