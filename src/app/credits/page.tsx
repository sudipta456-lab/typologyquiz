import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Credits & attributions", description: "Sources, adaptations, and rights status of TypologyQuiz assessments.",
  alternates: { canonical: "/credits/" },
};
export default function CreditsPage() {
  return <div className="section methodology-page">
    <p className="eyebrow">Sources & rights</p><h1 className="section-title">Give the work its credit.</h1>
    <p className="section-lead">Most quizzes here contain original TypologyQuiz questions. Four draw on named external instruments or projects. Attribution, permission to reuse, and scientific evidence are separate questions.</p>
    <div className="reflection-list">
      <section className="content-card"><h2 className="content-card-title">Original TypologyQuiz quizzes</h2><p>Our original questions and interpretations are for reflection or entertainment. References to a psychological theory or cultural tradition do not mean the quiz has been validated.</p></section>
      <section className="content-card"><h2 className="content-card-title">Mini-IPIP · Big Five</h2><p>The <a className="text-link" href="https://ipip.ori.org/MiniIPIPKey.htm">20-item Mini-IPIP key</a> comes from the International Personality Item Pool. <a className="text-link" href="https://ipip.ori.org/">IPIP items are public domain</a>. Donnellan, Oswald, Baird, and Lucas developed the Mini-IPIP in 2006. We document our presentation and instruction adaptations on the methods page.</p></section>
      <section className="content-card"><h2 className="content-card-title">8values · Political values</h2><p>Adapted from <a className="text-link" href="https://github.com/8values/8values.github.io">the 8values project</a> under its <a className="text-link" href="https://github.com/8values/8values.github.io/blob/master/LICENSE">MIT license</a>. Questions, response presentation, and scoring are adapted; the source license does not establish psychometric validity.</p></section>
      <section className="content-card"><h2 className="content-card-title">Cognitive Reflection Test</h2><p>Source: <a className="text-link" href="https://doi.org/10.1257/089533005775196732">Frederick (2005)</a>, with CRT-2 items attributed to Thomson and Oppenheimer (2016). We have not verified an open license or explicit permission for this reproduction. Publication and attribution alone do not grant reuse rights.</p></section>
      <section className="content-card"><h2 className="content-card-title">Visual imagery questionnaire</h2><p>Adapted from <a className="text-link" href="https://doi.org/10.1111/j.2044-8295.1973.tb01322.x">Marks (1973)</a>. We have not verified permission for this reproduction. The website uses adapted wording and response direction; we do not claim that it is the original administration or a diagnostic test.</p></section>
    </div>
    <p className="methodology-footer"><Link href="/methodology/" className="text-link">See the evidence and limitations for every test →</Link></p>
  </div>;
}
