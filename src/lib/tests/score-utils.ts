import type { Question } from "../types";

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
