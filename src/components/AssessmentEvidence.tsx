import Link from "next/link";
import type { TestDefinition, TestResult } from "@/lib/types";
import { assessmentEvidence, scoreExplanation } from "@/lib/tests/assessment-evidence";

export function AssessmentEvidence({ test, result }: { test: TestDefinition; result?: TestResult }) {
  const evidence = assessmentEvidence(test);
  return (
    <section className="assessment-evidence" aria-label="Purpose and evidence">
      <p className="assessment-purpose">{evidence.purpose} <span>· {evidence.status}</span></p>
      <p>{evidence.summary}</p>
      {result && <p>{scoreExplanation(test)}</p>}
      {result && !result.assessment && (
        <p className="assessment-legacy"><strong>Older result.</strong> Its test version was not recorded.
          Your saved numbers are unchanged. Descriptions use today&rsquo;s corrected labels;
          unsupported population ranks have been removed. Treat this as a past snapshot, not a baseline for measuring change.</p>
      )}
      {result?.assessment && <details className="assessment-release-details"><summary>About this test version</summary><p className="assessment-version">Form {result.assessment.instrument} · Scoring {result.assessment.scoring} · Report {result.assessment.report}{result.assessment.variant === "school" ? " · School wording" : ""}</p></details>}
      <Link href={`/methodology/#${test.slug}`} className="text-link">How this result is made →</Link>
    </section>
  );
}
