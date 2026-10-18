import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { breadcrumbList, collectionPageNodes, jsonLdGraph } from "@/lib/structured-data";
import { CATEGORIES } from "@/lib/interactive/categories";
import { SUMMARIES } from "@/lib/interactive/catalog.generated";
import { QuizDirectory } from "@/components/interactive/QuizDirectory";

const TITLE = "Interactive Quizzes";
const DESCRIPTION = `${SUMMARIES.length} short interactive quizzes in ${CATEGORIES.length} categories: matching, ordering, link maps, grids, listening and diagram tasks, plus personality-style choices and pass-and-play games. Free, no signup, scored in your browser.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/quizzes/" },
  openGraph: {
    title: `${TITLE} · ${SITE.legalName}`,
    description: DESCRIPTION,
    url: `${SITE.url}/quizzes/`,
    images: [{ url: `${SITE.url}${SITE.ogImage}`, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: { card: "summary_large_image", title: `${TITLE} · ${SITE.legalName}`, description: DESCRIPTION, images: [`${SITE.url}${SITE.ogImage}`] },
};

export default function InteractiveQuizzesPage() {
  // Server-rendered from the generated summaries only; no question bank reaches the client.
  const jsonLd = jsonLdGraph([
    ...collectionPageNodes({
      path: "/quizzes/",
      name: TITLE,
      description: DESCRIPTION,
      listName: "Interactive quiz collection",
      items: [
        ...CATEGORIES.map((category) => ({ name: category.name, path: `/quizzes/category/${category.id}/` })),
        ...SUMMARIES.map((quiz) => ({ name: quiz.title, path: `/quizzes/${quiz.slug}/` })),
      ],
    }),
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Interactive quizzes", path: "/quizzes/" },
    ]),
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="section directory-page">
        <p className="eyebrow">Interactive quizzes</p>
        <h1 className="section-title">{SUMMARIES.length} quizzes to play, match, order and map</h1>
        <p className="section-lead">
          Short, original quizzes across {CATEGORIES.length} categories. Knowledge quizzes show how many tasks you got right; choice-based ones describe your own picks and are not tests or diagnoses. Progress and answers stay in your browser.
        </p>
        <QuizDirectory quizzes={SUMMARIES} categories={CATEGORIES} />
      </div>
    </>
  );
}
