import type { Metadata } from "next";
import Link from "next/link";
import { ElementAtlas } from "@/components/periodic-table/ElementAtlas";
import { LEARNING_CHECKED_ON, LEARNING_TRACKS } from "@/components/periodic-table/learning";
import { SITE } from "@/lib/site";
import { breadcrumbList, jsonLdGraph } from "@/lib/structured-data";

const path = "/learn/periodic-table/";
const title = "Periodic Table Learning: Explore 118 Elements";
const description =
  "Explore all 118 recognized elements in a searchable periodic table, compare their properties, and try 24 open-book practice steps across three learning tracks.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: `${title} · ${SITE.legalName}`,
    description,
    url: `${SITE.url}${path}`,
    siteName: SITE.legalName,
    images: [
      {
        url: `${SITE.url}${SITE.ogImage}`,
        width: 1200,
        height: 630,
        alt: "TypologyQuiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} · ${SITE.legalName}`,
    description,
    images: [`${SITE.url}${SITE.ogImage}`],
  },
};

const jsonLd = jsonLdGraph([
  {
    "@type": "LearningResource",
    "@id": `${SITE.url}${path}#learning-resource`,
    name: "Periodic table learning guide",
    description,
    url: `${SITE.url}${path}`,
    learningResourceType: "Element reference and guided practice",
    isAccessibleForFree: true,
    inLanguage: "en",
    dateModified: LEARNING_CHECKED_ON,
    isPartOf: { "@id": `${SITE.url}/#website` },
    provider: { "@id": `${SITE.url}/#organization` },
  },
  breadcrumbList([
    { name: "Home", path: "/" },
    { name: "Periodic table learning", path },
  ]),
]);

const relatedQuizzes = [
  {
    href: "/trivia/periodic-table-first-20/",
    title: "First 20 Elements of the Periodic Table",
    description: "Timed name recall for elements 1–20.",
  },
  {
    href: "/trivia/periodic-table/",
    title: "Name All 118 Elements",
    description: "Timed name recall for the full table.",
  },
  {
    href: "/quizzes/follow-the-atoms/",
    title: "Follow the Atoms",
    description: "Trace atom counts with fictional A/B model labels and a stated boundary.",
  },
  {
    href: "/quizzes/where-did-the-sugar-go/",
    title: "Where Did the Sugar Go?",
    description: "Explore dissolving and particle models.",
  },
  {
    href: "/quizzes/can-you-prove-a-reaction-happened/",
    title: "Can You Prove a Reaction Happened?",
    description: "Read evidence carefully and notice what a measurement can establish.",
  },
  {
    href: "/quizzes/powder-that-cooled-the-cup/",
    title: "The Powder That Cooled the Cup",
    description: "Interpret temperature records without overclaiming what they prove.",
  },
  {
    href: "/quizzes/bag-that-kept-all-its-mass/",
    title: "The Bag That Kept All Its Mass",
    description: "Compare mass readings and the boundary around a system.",
  },
];

const glossary = [
  ["Atomic number", "The number of protons in an atom’s nucleus; it identifies the element."],
  ["Neutral atom", "An atom with no net charge. Its electron count equals its proton count."],
  ["Isotope", "Atoms of the same element with different neutron counts. The isotope’s mass number counts protons plus neutrons."],
  ["Standard atomic weight", "A relative, dimensionless weighted average based on isotope-abundance evidence. It is not an isotope mass number; some elements are given an interval rather than one value."],
  ["Unknown or estimated", "A missing value stays unassigned. An estimate is labeled as such, and bulk states for superheavy elements are left unknown."],
] as const;

export default function PeriodicTableLearningPage() {
  const stepCount = LEARNING_TRACKS.reduce((count, track) => count + track.steps.length, 0);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div
        className="section directory-page"
        style={{ maxWidth: 1440, width: "100%", paddingInline: 24, boxSizing: "border-box" }}
      >
        <p className="eyebrow">Learning guide · reference checked {LEARNING_CHECKED_ON}</p>
        <ElementAtlas />

        <section aria-labelledby="periodic-table-glossary" style={{ marginTop: 44 }}>
          <p className="eyebrow">A small field glossary</p>
          <h2 id="periodic-table-glossary" className="font-display" style={{ fontSize: "1.5rem" }}>
            Read the numbers with care
          </h2>
          <dl style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 16 }}>
            {glossary.map(([term, meaning]) => (
              <div key={term} style={{ borderTop: "1px solid var(--line)", paddingTop: 10 }}>
                <dt style={{ fontWeight: 700 }}>{term}</dt>
                <dd style={{ margin: "5px 0 0", color: "var(--ink-soft)", lineHeight: 1.6 }}>{meaning}</dd>
              </div>
            ))}
          </dl>
          <p style={{ color: "var(--ink-soft)", lineHeight: 1.65 }}>
            Try {stepCount} short, open-book practice steps with the table at hand.
          </p>
        </section>

        <section aria-labelledby="periodic-table-related" style={{ marginTop: 40 }}>
          <p className="eyebrow">Keep exploring</p>
          <h2 id="periodic-table-related" className="font-display" style={{ fontSize: "1.5rem" }}>
            Related quizzes
          </h2>
          <p style={{ color: "var(--ink-soft)", lineHeight: 1.65 }}>
            Two timed rounds focus on element-name recall. Nearby science quizzes explore dissolving, evidence, temperature, and mass.
          </p>
          <ul>
            {relatedQuizzes.map((quiz) => (
              <li key={quiz.href}>
                <Link href={quiz.href} className="text-link">{quiz.title}</Link> — {quiz.description}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="periodic-table-faq" style={{ marginTop: 40 }}>
          <p className="eyebrow">Common questions</p>
          <h2 id="periodic-table-faq" className="font-display" style={{ fontSize: "1.5rem" }}>
            Periodic table basics
          </h2>
          <h3>Does atomic weight tell me the neutron count?</h3>
          <p>No. Neutron counts depend on the isotope. Standard atomic weights summarize isotope-abundance evidence, and an interval or rounded value does not identify one isotope.</p>
          <h3>Does the current table include elements 119 or 120?</h3>
          <p>No. This reference covers the 118 currently recognized elements. Reports about experiments or searches beyond 118 describe research targets, not confirmed new elements.</p>
          <h3>Why are some values marked estimated or unknown?</h3>
          <p>The labels preserve the distinction between reference values, estimates, and information that is not established. Missing measurements are not replaced with zero or copied from a neighbor.</p>
        </section>
      </div>
    </>
  );
}
