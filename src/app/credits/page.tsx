import type { Metadata } from "next";
import Link from "next/link";
import { socialMetadata } from "@/lib/page-metadata";
import { ANATOMY_ASSETS } from "@/components/anatomy/assets";

const TITLE = "Credits & attributions";
const DESCRIPTION = "Sources, adaptations, and rights status of TypologyQuiz assessments.";
const HRA_LICENSE_URL = "https://creativecommons.org/licenses/by/4.0/";
const HRA_SOURCE_COMMIT = "f1a3a63f110e27ff0736047d52d04dba5d3087f9";
const HRA_SOURCE_COMMIT_URL = `https://github.com/hubmapconsortium/ccf-3d-reference-object-library/tree/${HRA_SOURCE_COMMIT}`;

function licenseHref(license: string): string | null {
  if (/^https:\/\//i.test(license)) return license;
  if (/\bCC\s*BY\s*4(?:\.0)?\b/i.test(license)) return HRA_LICENSE_URL;
  return null;
}

const hraAssets = ANATOMY_ASSETS.filter((asset) => /hubmapconsortium|human reference atlas|\bHRA\b/i.test(`${asset.credit} ${asset.sourceUrl}`));

export const metadata: Metadata = {
  title: TITLE, description: DESCRIPTION,
  alternates: { canonical: "/credits/" },
  ...socialMetadata({ path: "/credits/", title: TITLE, description: DESCRIPTION }),
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
      <section className="content-card" id="anatomy">
        <h2 className="content-card-title">Anatomy Atlas visual credits and terms</h2>
        <p>Atlas visuals use a mix of source-referenced models and original TypologyQuiz annotations or schematics. Source and license details apply to the individual asset shown; they do not relicense the entire site. Original TypologyQuiz annotations and schematics remain © TypologyQuiz.com, with no additional license granted here.</p>
        {ANATOMY_ASSETS.length > 0 ? (
          <ul>
            {ANATOMY_ASSETS.map((asset) => {
              const licenseUrl = licenseHref(asset.license);
              return (
                <li key={asset.id}>
                  <strong>{asset.title}.</strong> {asset.credit} Source: <a className="text-link" href={asset.sourceUrl} target="_blank" rel="noreferrer">{asset.sourceUrl}</a>. License: {licenseUrl ? <a className="text-link" href={licenseUrl} target="_blank" rel="noreferrer">{asset.license}</a> : asset.license}.
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Per-asset credits will appear here from the reviewed Atlas manifest.</p>
        )}
        {hraAssets.length > 0 && (
          <p>
            Human Reference Atlas (HRA) models in this collection are attributed under <a className="text-link" href={HRA_LICENSE_URL} target="_blank" rel="noreferrer">Creative Commons Attribution 4.0 International (CC BY 4.0)</a>. The source repository is pinned to <a className="text-link" href={HRA_SOURCE_COMMIT_URL} target="_blank" rel="noreferrer">commit {HRA_SOURCE_COMMIT}</a>. Creator/copyright details and any modifications are stated with each asset above. TypologyQuiz is not endorsed by HRA.
          </p>
        )}
        <p>The optional heart, brain, respiratory and kidney reference illustrations are unmodified works by Blausen Medical Communications, Inc. and BruceBlaus, shared under <a className="text-link" href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noreferrer">CC BY 3.0</a>. Each illustration links to its original Wikimedia Commons file and license. Citation: Blausen.com staff (2014), <a className="text-link" href="https://doi.org/10.15347/wjm/2014.010" target="_blank" rel="noreferrer">Medical gallery of Blausen Medical 2014</a>, WikiJournal of Medicine 1(2). No endorsement is implied.</p>
      </section>
    </div>
    <p className="methodology-footer"><Link href="/methodology/" className="text-link">See the evidence and limitations for every test →</Link></p>
  </div>;
}
