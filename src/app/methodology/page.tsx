import type { Metadata } from "next";
import Link from "next/link";
import { TESTS } from "@/lib/tests/registry";
import { assessmentEvidence } from "@/lib/tests/assessment-evidence";
import { currentVersion } from "@/lib/tests/assessment-versions";

export const metadata: Metadata = {
  title: "How our tests work", description: "Sources, scoring, limitations, and the evidence behind each TypologyQuiz assessment.",
  alternates: { canonical: "/methodology/" },
};

export default function MethodologyPage() {
  const ordered = [...TESTS].sort((a, b) => a.slug === "mini-ipip" ? -1 : b.slug === "mini-ipip" ? 1 : a.title.localeCompare(b.title));
  return <div className="section methodology-page">
    <p className="eyebrow">Methods & evidence · Updated September 11, 2026</p>
    <h1 className="section-title">Know what a result can tell you.</h1>
    <p className="section-lead">Some of our tests use published instruments. Most are original quizzes for reflection or fun. We label the difference so you can decide how much weight to give a result.</p>
    <div className="methodology-principles">
      <section className="content-card"><h2 className="content-card-title">A score is a summary.</h2><p>Our 0–100 scales summarize your answers. They do not show the percentage of people you outrank, the probability of a type, or how accurate the test is. We have no approved population norms for these assessments.</p></section>
      <section className="content-card"><h2 className="content-card-title">Published research has limits.</h2><p>Evidence for a source instrument applies to the versions, languages, participants, and purposes studied. It does not automatically validate our presentation, new wording, or a different use.</p></section>
      <section className="content-card"><h2 className="content-card-title">Types are descriptions.</h2><p>Original quizzes group answers using authored scoring rules. A mixed profile may produce a balanced result. These labels are conversation starters; they are not established psychological categories.</p></section>
    </div>
    <section className="test-block">
      <h2 className="test-block-title">What changed in this release</h2>
      <p>We removed percentile estimates based on undocumented defaults. New results record the form, scoring, report, and wording variant used. Old links preserve their scores and are marked as unversioned. We do not calculate changes between different or unknown versions.</p>
      <p>The Big Five form uses the 20 public-domain Mini-IPIP stems and scoring directions, interleaved across five traits, with accuracy response anchors. Our introductory instructions and one-question-at-a-time layout are adaptations. Higher “Emotional reactivity” scores reflect more reported emotional shifts; the underlying neuroticism score has not been inverted.</p>
      <p>Check the <a className="text-link" href="https://ipip.ori.org/MiniIPIPKey.htm">official Mini-IPIP key</a> and <a className="text-link" href="https://ipip.ori.org/new_ipip-50-item-scale.htm">IPIP administration guidance</a>. The <a className="text-link" href="https://pubmed.ncbi.nlm.nih.gov/16768595/">original Mini-IPIP study</a> concerns the source instrument, not this website release.</p>
    </section>
    <section className="test-block">
      <h2 className="test-block-title">What we still need to test</h2>
      <p>No independent validation sample has been published for these website versions. Reliability, measurement uncertainty, subgroup fairness, test–retest stability, and effects on everyday outcomes remain unestablished here.</p>
      <p>A result feeling right is useful feedback about the report, but it is not a ground-truth personality label. We will need participant interviews, a planned study, separate consent, and independent validation data before making stronger claims or changing scores based on feedback.</p>
      <p>For now, reflections and two-week action reviews are private notes for the person taking the quiz. They are not sent to us, and saving one does not enroll you in research.</p>
    </section>
    <h2 className="test-block-title">Find your test</h2>
    <p>All entries describe the current English version. Intended use is voluntary reflection, learning, or entertainment—not diagnosis, hiring, grading, or relationship decisions.</p>
    <div className="evidence-directory">{ordered.map(test => {
      const e = assessmentEvidence(test);
      const v = currentVersion(test.slug);
      return <details key={test.slug} id={test.slug} className="evidence-entry">
        <summary><span>{test.title}</span><small>{e.purpose}</small></summary>
        <div><p><strong>{e.status}.</strong> {e.summary}</p><p>{e.rights}</p>
          <p className="assessment-version">Form {v.instrument} · Scoring {v.scoring} · Report {v.report}</p>
          <p>Site validation sample: not published. Population norms: none approved. Measurement uncertainty: not estimated.</p>
          {test.sourceUrl && <p><a className="text-link" href={test.sourceUrl}>Source material ↗</a></p>}
          <Link href={`/test/${test.slug}/`} className="text-link">Test details →</Link>
        </div>
      </details>;
    })}</div>
    <p className="methodology-footer"><Link href="/credits/" className="text-link">Credits & rights</Link>{" · "}<Link href="/about/" className="text-link">Privacy & contact</Link></p>
  </div>;
}
