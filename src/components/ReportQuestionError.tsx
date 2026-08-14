import { SITE } from "@/lib/site";
import type { DrivingQuestion } from "@/lib/driving/types";

/**
 * "Report an error" on a single question.
 *
 * A driving question with a wrong answer key can make someone fail a real test,
 * so there has to be a way to tell us. There is also no backend on this site -
 * it is a static export - so the report is a plain mailto: with everything we'd
 * need to find the question already filled in. No form, no collection, nothing
 * to store.
 *
 * Kept visually quiet on purpose. This is a trust signal sitting under the
 * explanation, not something competing with "Next question".
 */

interface Props {
  jurisdictionSlug: string;
  jurisdictionName: string;
  setId: string;
  question: DrivingQuestion;
  /** Which surface it sits on - the take flow is dark, results is light. */
  tone?: "dark" | "light";
}

export function ReportQuestionError({
  jurisdictionSlug,
  jurisdictionName,
  setId,
  question,
  tone = "light",
}: Props) {
  const subject = `Question error report - ${jurisdictionName} / ${setId} / ${question.id}`;

  const body = [
    "I think there's a problem with this practice question.",
    "",
    `Jurisdiction: ${jurisdictionName} (${jurisdictionSlug})`,
    `Set: ${setId}`,
    `Question id: ${question.id}`,
    "",
    "Question:",
    question.question,
    "",
    "What looks wrong (please describe, and link the handbook section if you have it):",
    "",
  ].join("\n");

  const href = `mailto:${SITE.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={href}
      style={{
        display: "inline-block",
        marginTop: "0.7rem",
        maxWidth: "100%",
        fontFamily: "var(--font-mono)",
        fontSize: "0.7rem",
        lineHeight: 1.5,
        letterSpacing: "0.01em",
        color: tone === "dark" ? "rgba(255,255,255,0.45)" : "var(--ink-mute)",
        textDecoration: "underline",
        textUnderlineOffset: 3,
        overflowWrap: "anywhere",
      }}
    >
      Report an error in this question
    </a>
  );
}
