import type { DrivingQuestion, Jurisdiction } from "./types";

// Share mechanics for driving practice.
//
// The personality quizzes go viral on IDENTITY - "I'm The Warm Jokester" is
// flattering and says something about you. A practice-test score is the
// opposite: private, unflattering, and nobody forwards it.
//
// So the shareable unit here is the QUESTION, not the score. A hard question
// with a surprising answer is a mini-quiz for whoever receives it, and it
// carries its own hook ("most people get this wrong"). The recipient can
// answer it in the message, which is the whole point - they engage before
// they ever click.
//
// Secondary loops that DO work for this category:
//   - challenge a friend who is also learning (real cohort behaviour)
//   - a parent/mentor sending it to someone learning to drive
//   - post-pass advocacy, the one moment people genuinely want to broadcast

/** A single hard question, framed as a challenge the recipient can answer. */
export function questionChallengeText(
  q: DrivingQuestion,
  jurisdiction: Jurisdiction,
  url: string
): string {
  const letters = ["A", "B", "C", "D", "E"];
  const options = q.choices
    .map((c, i) => `${letters[i]}) ${c}`)
    .join("\n");

  const hook = q.commonlyMissed
    ? `Most people get this ${jurisdiction.name} one wrong.`
    : `${jurisdiction.name} ${jurisdiction.licenceName} question.`;

  return `${hook}\n\n${q.question}\n${options}\n\nAnswer + why: ${url}`;
}

/** Challenge a friend to beat your score on a specific set. */
export function scoreChallengeText(
  jurisdiction: Jurisdiction,
  setTitle: string,
  correct: number,
  total: number,
  url: string
): string {
  return `I got ${correct}/${total} on ${setTitle} (${jurisdiction.name} ${jurisdiction.licenceName} practice). Beat it: ${url}`;
}

/** The one moment people actually want to broadcast. */
export function passedRealTestText(jurisdiction: Jurisdiction, url: string): string {
  return `Passed my ${jurisdiction.name} ${jurisdiction.licenceName} knowledge test. Practised free here, no login, no ads: ${url}`;
}

/** For a parent, driving instructor, or friend who is nagging someone to study. */
export function recommendText(jurisdiction: Jurisdiction, url: string): string {
  return `Free ${jurisdiction.name} ${jurisdiction.licenceName} practice tests - no signup, no ads, and every answer links to the official handbook: ${url}`;
}

export interface ShareOption {
  key: string;
  label: string;
  hint: string;
  text: string;
}

/**
 * The share menu for a results page, ordered by how likely each is to actually
 * get sent. Score-bragging is deliberately NOT first - it only makes sense on
 * a genuinely good score, so the caller decides whether to include it.
 */
export function resultShareOptions(opts: {
  jurisdiction: Jurisdiction;
  setTitle: string;
  correct: number;
  total: number;
  passed: boolean;
  hardestQuestion?: DrivingQuestion;
  setUrl: string;
  siteUrl: string;
}): ShareOption[] {
  const list: ShareOption[] = [];

  if (opts.hardestQuestion) {
    list.push({
      key: "question",
      label: "Send a stumper",
      hint: "Share one hard question. They can answer it right in the chat.",
      text: questionChallengeText(opts.hardestQuestion, opts.jurisdiction, opts.setUrl),
    });
  }

  list.push({
    key: "challenge",
    label: "Challenge a friend",
    hint: "Anyone else learning right now? Make them beat your score.",
    text: scoreChallengeText(
      opts.jurisdiction,
      opts.setTitle,
      opts.correct,
      opts.total,
      opts.setUrl
    ),
  });

  list.push({
    key: "recommend",
    label: "Send to someone learning",
    hint: "No signup, no ads - easy to pass along.",
    text: recommendText(opts.jurisdiction, opts.siteUrl),
  });

  return list;
}
