import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";
import { breadcrumbList, collectionPageNodes, jsonLdGraph } from "@/lib/structured-data";
import { CATEGORIES, CATEGORY_MAP } from "@/lib/interactive/categories";
import { SUMMARIES } from "@/lib/interactive/catalog.generated";
import { QuizDirectory } from "@/components/interactive/QuizDirectory";

type Params = Promise<{ categoryId: string }>;

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ categoryId: category.id }));
}

const pathFor = (categoryId: string) => `/quizzes/category/${categoryId}/`;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const category = CATEGORY_MAP.get((await params).categoryId);
  if (!category) return { title: "Interactive quizzes" };
  const count = SUMMARIES.filter((quiz) => quiz.categoryId === category.id).length;
  const title = `${category.name} Quizzes`;
  const description = `${count} interactive ${category.name} quizzes. ${category.description} Free, no signup.`;
  return {
    title,
    description,
    alternates: { canonical: pathFor(category.id) },
    openGraph: {
      title: `${title} · ${SITE.legalName}`,
      description,
      url: `${SITE.url}${pathFor(category.id)}`,
      images: [{ url: `${SITE.url}${SITE.ogImage}`, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: { card: "summary_large_image", title: `${title} · ${SITE.legalName}`, description, images: [`${SITE.url}${SITE.ogImage}`] },
  };
}

export default async function InteractiveCategoryPage({ params }: { params: Params }) {
  const category = CATEGORY_MAP.get((await params).categoryId);
  if (!category) notFound();
  const members = SUMMARIES.filter((quiz) => quiz.categoryId === category.id);
  const description = `${members.length} interactive ${category.name} quizzes. ${category.description}`;
  const jsonLd = jsonLdGraph([
    ...collectionPageNodes({
      path: pathFor(category.id),
      name: `${category.name} quizzes`,
      description,
      listName: `${category.name} interactive quizzes`,
      items: members.map((quiz) => ({ name: quiz.title, path: `/quizzes/${quiz.slug}/` })),
    }),
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Interactive quizzes", path: "/quizzes/" },
      { name: category.name, path: pathFor(category.id) },
    ]),
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="section directory-page">
        <p className="eyebrow"><Link href="/quizzes/">Interactive quizzes</Link> / {category.name}</p>
        <h1 className="section-title">{category.name}</h1>
        <p className="section-lead">{category.description}</p>
        {category.id === "science-nature" && (
          <aside className="quiz-card" aria-label="Periodic table learning reference" style={{ display: "block", margin: "0 0 24px", borderLeft: "4px solid var(--accent)" }}>
            <p className="eyebrow" style={{ marginBottom: 6 }}>Learning reference</p>
            <h2 className="quiz-card-title" style={{ marginBottom: 6 }}>Explore the periodic table</h2>
            <p className="quiz-card-desc">Explore all 118 recognized elements and try 24 untimed, open-book practice steps across three guided tracks.</p>
            <Link href="/learn/periodic-table/" className="btn-primary" style={{ marginTop: 14 }}>Open periodic table learning</Link>
          </aside>
        )}
        {category.id === "science-nature" && (
          <aside className="quiz-card" aria-label="Anatomy Atlas learning reference" style={{ display: "block", margin: "0 0 24px", borderLeft: "4px solid var(--accent)" }}>
            <p className="eyebrow" style={{ marginBottom: 6 }}>Visual learning guide</p>
            <h2 className="quiz-card-title" style={{ marginBottom: 6 }}>Explore the Anatomy Atlas</h2>
            <p className="quiz-card-desc">Study source-attributed anatomy references and selected local 3D models, with concise notes and original linked quizzes.</p>
            <Link href="/learn/anatomy/" className="btn-primary" style={{ marginTop: 14 }}>Open Anatomy Atlas</Link>
          </aside>
        )}
        <QuizDirectory quizzes={SUMMARIES} categories={CATEGORIES} initialCategory={category.id} />
      </div>
    </>
  );
}
