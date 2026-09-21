import type {
  DrivingAnswerMap,
  DrivingResult,
  DrivingTestSet,
  Jurisdiction,
} from "./types";
import { hasPublishedPassMark } from "./types";

/**
 * Score a practice set and compare with the jurisdiction's real pass mark
 * when the authority publishes one.
 *
 * The pass threshold is scaled to the set length rather than hard-coded, because
 * a 40-question practice set still needs to report against, say, Alberta's
 * "25 of 30" standard. Sectioned jurisdictions (Ontario scores signs and rules
 * as independent halves) must clear every section AND the overall mark - a
 * strong signs score genuinely cannot rescue a weak rules score on the real
 * test, so it must not rescue one here either.
 */
export function scoreDrivingSet(
  jurisdiction: Jurisdiction,
  set: DrivingTestSet,
  answers: DrivingAnswerMap
): DrivingResult {
  const total = set.questions.length;
  let correct = 0;
  const wrongIds: string[] = [];
  const byTopic: Record<string, { correct: number; total: number }> = {};

  for (const q of set.questions) {
    const bucket = (byTopic[q.topic] ??= { correct: 0, total: 0 });
    bucket.total += 1;
    if (answers[q.id] === q.correctIndex) {
      correct += 1;
      bucket.correct += 1;
    } else {
      wrongIds.push(q.id);
    }
  }

  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

  const fmt = jurisdiction.officialTest;
  const hasPassMark = hasPublishedPassMark(fmt);
  const needed = hasPassMark
    ? Math.ceil((fmt.passCount! / fmt.questionCount!) * total)
    : null;

  let sections: DrivingResult["sections"];
  let sectionsPassed: boolean | null = hasPassMark ? true : null;

  if (hasPassMark && fmt.sectionedBy?.length) {
    sections = fmt.sectionedBy.map((sec) => {
      const qs = set.questions.filter((q) => sec.topics.includes(q.topic));
      const secCorrect = qs.filter((q) => answers[q.id] === q.correctIndex).length;
      const secNeeded = Math.ceil(
        (sec.passCount / Math.max(1, fmt.questionCount! / fmt.sectionedBy!.length)) *
          qs.length
      );
      const passed = qs.length === 0 || secCorrect >= secNeeded;
      if (!passed) sectionsPassed = false;
      return { label: sec.label, correct: secCorrect, total: qs.length, passed };
    });
  }

  return {
    jurisdictionSlug: jurisdiction.slug,
    setId: set.id,
    correct,
    total,
    percent,
    passed: needed === null || sectionsPassed === null
      ? null
      : correct >= needed && sectionsPassed,
    byTopic,
    sections,
    wrongIds,
    completedAt: Date.now(),
  };
}

/** Correct answers needed on a set of this length, or null if unpublished. */
export function neededToPass(jurisdiction: Jurisdiction, total: number): number | null {
  const fmt = jurisdiction.officialTest;
  if (!hasPublishedPassMark(fmt)) return null;
  return Math.ceil((fmt.passCount! / fmt.questionCount!) * total);
}

/** Suppress stale verdicts when the authority has no published pass mark. */
export function officialPassVerdict(
  verdict: boolean | null,
  jurisdiction: Jurisdiction
): boolean | null {
  return hasPublishedPassMark(jurisdiction.officialTest) ? verdict : null;
}

/** Weakest topics first - what to restudy. */
export function weakestTopics(
  result: DrivingResult,
  limit = 3
): { topic: string; correct: number; total: number; percent: number }[] {
  return Object.entries(result.byTopic)
    .map(([topic, v]) => ({
      topic,
      correct: v.correct,
      total: v.total,
      percent: v.total ? Math.round((v.correct / v.total) * 100) : 0,
    }))
    .filter((t) => t.percent < 100)
    .sort((a, b) => a.percent - b.percent)
    .slice(0, limit);
}
