import type {
  DrivingAnswerMap,
  DrivingResult,
  DrivingTestSet,
  Jurisdiction,
} from "./types";

/**
 * Score a practice set against the jurisdiction's real pass mark.
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
  const requiredPercent =
    fmt.questionCount > 0 ? fmt.passCount / fmt.questionCount : 0.8;
  const needed = Math.ceil(requiredPercent * total);

  let sections: DrivingResult["sections"];
  let sectionsPassed = true;

  if (fmt.sectionedBy?.length) {
    sections = fmt.sectionedBy.map((sec) => {
      const qs = set.questions.filter((q) => sec.topics.includes(q.topic));
      const secCorrect = qs.filter((q) => answers[q.id] === q.correctIndex).length;
      const secNeeded = Math.ceil(
        (sec.passCount / Math.max(1, fmt.questionCount / fmt.sectionedBy!.length)) *
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
    passed: correct >= needed && sectionsPassed,
    byTopic,
    sections,
    wrongIds,
    completedAt: Date.now(),
  };
}

/** Correct answers needed on a set of this length, per the real pass mark. */
export function neededToPass(jurisdiction: Jurisdiction, total: number): number {
  const fmt = jurisdiction.officialTest;
  const requiredPercent =
    fmt.questionCount > 0 ? fmt.passCount / fmt.questionCount : 0.8;
  return Math.ceil(requiredPercent * total);
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
