import type { Metadata } from "next";
import Link from "next/link";
import { AnatomyExplorer } from "@/components/anatomy/AnatomyExplorer";
import { ANATOMY_ASSETS } from "@/components/anatomy/assets";
import { QUIZZES, quizPath } from "@/lib/interactive/registry";
import { SITE } from "@/lib/site";
import { breadcrumbList, jsonLdGraph } from "@/lib/structured-data";

const PATH = "/learn/anatomy/";
const CHECKED_ON = "2026-11-21";
const TITLE = "Anatomy Atlas: Explore the Human Body";
const DESCRIPTION =
  "Explore source-attributed anatomy references for body orientation, the heart, brain, lungs, digestion, urinary anatomy, and reproductive systems.";

const ANATOMY_QUIZ_TOPICS = [
  { quizId: "SN-78", assetId: "body" },
  { quizId: "SN-79", assetId: "heart" },
  { quizId: "SN-80", assetId: "brain" },
  { quizId: "SN-81", assetId: "respiratory" },
  { quizId: "SN-82", assetId: "digestive" },
  { quizId: "SN-83", assetId: "urinary" },
  { quizId: "SN-84", assetId: "reproductive-female" },
  { quizId: "SN-85", assetId: "reproductive-male" },
] as const;

const quizLinks = ANATOMY_QUIZ_TOPICS.flatMap(({ quizId, assetId }) => {
  const quiz = QUIZZES.find((entry) => entry.id === quizId);
  return quiz ? [{ assetId, title: quiz.title, href: quizPath(quiz.slug) }] : [];
});

const sources = [
  {
    label: "NCI SEER Training: Anatomical Terminology",
    url: "https://training.seer.cancer.gov/anatomy/body/terminology.html",
    topic: "Body directions, planes, and cavities",
  },
  {
    label: "NHLBI: How the Heart Works — What the Heart Looks Like",
    url: "https://www.nhlbi.nih.gov/health/heart/anatomy",
    topic: "Heart chambers and broad structure",
  },
  {
    label: "NHLBI: How Blood Flows through the Heart",
    url: "https://www.nhlbi.nih.gov/health/heart/blood-flow",
    topic: "Circulation through the heart",
  },
  {
    label: "NINDS: Brain Basics — Know Your Brain",
    url: "https://www.ninds.nih.gov/health-information/public-education/brain-basics/brain-basics-know-your-brain",
    topic: "Broad brain regions and contributions",
  },
  {
    label: "NHLBI: The Respiratory System",
    url: "https://www.nhlbi.nih.gov/health/lungs/respiratory-system",
    topic: "Airway path and gas exchange",
  },
  {
    label: "NIDDK: Your Digestive System & How it Works",
    url: "https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works",
    topic: "Digestive tract and accessory organs",
  },
  {
    label: "NIDDK: Your Kidneys & How They Work",
    url: "https://www.niddk.nih.gov/health-information/kidney-disease/kidneys-how-they-work",
    topic: "Kidneys and urine production",
  },
  {
    label: "NIDDK: The Urinary Tract & How It Works",
    url: "https://www.niddk.nih.gov/health-information/urologic-diseases/urinary-tract-how-it-works",
    topic: "Urine route through the urinary tract",
  },
  {
    label: "NCI SEER Training: Female Reproductive System",
    url: "https://training.seer.cancer.gov/anatomy/reproductive/female/",
    topic: "Selected reproductive structures and terminology",
  },
  {
    label: "NCI SEER Training: Male Reproductive System",
    url: "https://training.seer.cancer.gov/anatomy/reproductive/male/",
    topic: "Selected reproductive structures and terminology",
  },
] as const;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}${PATH}` },
  openGraph: {
    type: "website",
    title: `${TITLE} · ${SITE.legalName}`,
    description: DESCRIPTION,
    url: `${SITE.url}${PATH}`,
    siteName: SITE.legalName,
    images: [
      {
        url: `${SITE.url}${SITE.ogImage}`,
        width: 1200,
        height: 630,
        alt: `${SITE.legalName} brand artwork`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} · ${SITE.legalName}`,
    description: DESCRIPTION,
    images: [{ url: `${SITE.url}${SITE.ogImage}`, alt: `${SITE.legalName} brand artwork` }],
  },
};

const jsonLd = jsonLdGraph([
  {
    "@type": "LearningResource",
    "@id": `${SITE.url}${PATH}#learning-resource`,
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}${PATH}`,
    learningResourceType: "Anatomy reference guide and self-guided visual exploration",
    educationalUse: "self-study",
    isAccessibleForFree: true,
    inLanguage: "en",
    dateModified: CHECKED_ON,
    about: [
      { "@type": "Thing", name: "Human body orientation and anatomical terms" },
      { "@type": "Thing", name: "Heart and circulation" },
      { "@type": "Thing", name: "Brain" },
      { "@type": "Thing", name: "Respiratory system and lungs" },
      { "@type": "Thing", name: "Digestive system" },
      { "@type": "Thing", name: "Urinary system" },
      { "@type": "Thing", name: "Female reproductive system" },
      { "@type": "Thing", name: "Male reproductive system" },
    ],
    isPartOf: { "@id": `${SITE.url}/#website` },
    provider: { "@id": `${SITE.url}/#organization` },
  },
  breadcrumbList([
    { name: "Home", path: "/" },
    { name: "Anatomy Atlas", path: PATH },
  ]),
]);

export default function AnatomyLearningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="section directory-page" style={{ maxWidth: 1440, width: "100%", paddingInline: 24, boxSizing: "border-box" }}>
        <header style={{ maxWidth: 920, margin: "0 auto 20px" }}>
          <p className="eyebrow">Learning guide · primary sources checked {CHECKED_ON}</p>
          <h1 className="section-title">Anatomy Atlas</h1>
          <p className="section-lead">
            Explore illustrated references and selected local 3D models for body orientation, the heart, brain,
            lungs, digestion, urinary anatomy, and reproductive systems. Each image identifies its view, source,
            credit, and license.
          </p>
        </header>

        <AnatomyExplorer quizLinks={quizLinks} />

        <section aria-labelledby="anatomy-learning-notes" style={{ maxWidth: 864, margin: "16px auto 36px", paddingInline: 16 }}>
          <h2 id="anatomy-learning-notes" className="font-display" style={{ fontSize: "1.35rem" }}>
            Reading the references
          </h2>
          <ul style={{ color: "var(--ink-soft)", lineHeight: 1.65, paddingLeft: "1.2rem" }}>
            <li>Colors are illustrative. The references show selected adult bodies and shapes; anatomy varies.</li>
            <li>Use each caption for orientation. Do not infer a body-side label from the camera position alone.</li>
            <li>A 3D teaching model is not a CT, MRI, histology image, or clinical certification.</li>
            <li>This is general learning, not symptom checking, diagnosis, or procedure guidance.</li>
          </ul>
        </section>

        <section aria-labelledby="anatomy-sources" style={{ maxWidth: 864, margin: "0 auto 36px", paddingInline: 16 }}>
          <p className="eyebrow">Reference sources</p>
          <h2 id="anatomy-sources" className="font-display" style={{ fontSize: "1.35rem" }}>
            Start with the source material
          </h2>
          <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "8px 24px", paddingLeft: "1.2rem" }}>
            {sources.map((source) => (
              <li key={source.url} style={{ lineHeight: 1.55 }}>
                <Link href={source.url} className="text-link" target="_blank" rel="noreferrer">{source.label}</Link>
                <span style={{ color: "var(--ink-soft)" }}> — {source.topic}</span>
              </li>
            ))}
          </ul>
          <p style={{ color: "var(--ink-soft)", lineHeight: 1.6 }}>
            The NIH educational pages support the factual notes and original questions; their illustrations are not copied. The model-derived plates and separate Blausen illustrations have their own source credits.
            Visual asset credits and per-asset terms are listed in the Atlas and on the <Link href="/credits/#anatomy" className="text-link">anatomy credits page</Link>.
          </p>
          <details style={{ marginTop: 16 }}>
            <summary>Visual source credits for all eight references</summary>
            <ul style={{ paddingLeft: "1.2rem", lineHeight: 1.6 }}>
              {ANATOMY_ASSETS.map((asset) => (
                <li key={asset.id} style={{ marginBlock: 12 }}>
                  <strong>{asset.title}.</strong> <span>{asset.credit}</span>{" "}
                  <a className="text-link" href={asset.sourceUrl} target="_blank" rel="noreferrer">Source models</a>{" · "}
                  <a className="text-link" href={asset.license} target="_blank" rel="noreferrer">Source license</a>
                </li>
              ))}
            </ul>
          </details>
        </section>
      </div>
    </>
  );
}
