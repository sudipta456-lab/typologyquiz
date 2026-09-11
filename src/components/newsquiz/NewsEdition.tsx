import Link from "next/link";
import { EditorialQuizClient } from "@/components/editorial/EditorialQuizClient";
import { editionPath } from "@/lib/editorial/identity";
import type { Edition } from "@/lib/editorial/types";
import { EDITIONS } from "@/lib/newsquiz/editions";
import { breadcrumbList, jsonLdGraph, quizNode } from "@/lib/structured-data";

export function NewsEdition({ edition }: { edition: Edition }) {
  const versions = EDITIONS.filter(item => item.id === edition.id).sort((a, b) => b.version - a.version);
  const structuredData = jsonLdGraph([
    quizNode({ path: editionPath(edition), name: edition.title, description: edition.description,
      numberOfQuestions: edition.questions.length, educationalUse: "practice", about: "Dated news edition",
      note: "One point per question, with explanations and sources. A casual quiz, not a rating." }),
    breadcrumbList([{ name: "Home", path: "/" }, { name: "Weekly editions", path: "/weekly/" }, { name: edition.title, path: editionPath(edition) }]),
  ]);
  return <div className="section" style={{ maxWidth: "48rem" }}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <Link className="text-link" href="/weekly/">← Browse all editions</Link>
    <h1 className="section-title" style={{ marginTop: 20, fontSize: "clamp(1.8rem, 5vw, 2.8rem)" }}>{edition.title}</h1>
    <p className="section-lead">{edition.description}</p>
    <p className="eyebrow">Edition <time dateTime={edition.publishedAt}>{edition.publishedAt}</time> · Version {edition.version}</p>
    {edition.legacy && <p style={{ color: "var(--ink-soft)" }}>Preserved from the original news series. Its questions and sources reflect that edition&apos;s reporting; this archive is not a fresh fact-check.</p>}
    <p><Link className="text-link" href={editionPath(edition)}>Permanent link to this edition</Link></p>
    {versions.length > 1 && <p>Available versions: {versions.map(item => <Link key={item.version} href={editionPath(item)} style={{ marginRight: 12 }}>Version {item.version}{item.version === edition.version ? " (viewing)" : ""}</Link>)}</p>}
    <EditorialQuizClient key={`${edition.id}@${edition.version}`} edition={edition} />
  </div>;
}
