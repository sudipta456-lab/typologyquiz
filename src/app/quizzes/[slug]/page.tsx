import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";
import { breadcrumbList, jsonLdGraph, quizNode } from "@/lib/structured-data";
import { getCategory, getQuiz, quizPath, QUIZZES } from "@/lib/interactive/registry";
import type { Quiz } from "@/lib/interactive/types";
import { QuizPlayer } from "@/components/interactive/QuizPlayer";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return QUIZZES.map((quiz) => ({ slug: quiz.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const quiz = getQuiz((await params).slug);
  if (!quiz) return { title: "Interactive quiz" };
  const path = quizPath(quiz.slug);
  const image = `${SITE.url}${SITE.ogImage}`;
  return {
    title: quiz.title,
    description: quiz.description,
    alternates: { canonical: path },
    openGraph: {
      title: `${quiz.title} · ${SITE.legalName}`,
      description: quiz.description,
      url: `${SITE.url}${path}`,
      images: [{ url: image, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: { card: "summary_large_image", title: `${quiz.title} · ${SITE.legalName}`, description: quiz.description, images: [image] },
  };
}

/** Short statement of what the result means, derived from the quiz's own kind. */
function resultNote(kind: Quiz["kind"]): string {
  switch (kind) {
    case "preference":
      return "This quiz has no right answers. The summary describes only the choices you make here; it is not a test, diagnosis or comparison with other people.";
    case "hybrid":
      return "Some tasks have right answers and are scored; others are your own choices and are summarised separately. The two are never combined into one score.";
    case "cooperative":
      return "A shared puzzle: everything needed to solve it is on the page, and tasks with right answers are scored when you finish.";
    default:
      return "Tasks have right answers and are scored when you finish. Everything needed to answer is on the page or in the linked sources.";
  }
}

const EDUCATIONAL_USE: Record<Quiz["kind"], string> = {
  knowledge: "practice",
  logic: "practice",
  cooperative: "practice",
  hybrid: "practice and self-reflection",
  preference: "self-reflection",
};

export default async function InteractiveQuizPage({ params }: { params: Params }) {
  const quiz = getQuiz((await params).slug);
  if (!quiz) notFound();
  const category = getCategory(quiz.categoryId);
  const path = quizPath(quiz.slug);
  const references = quiz.sources.filter((source) => source.kind === "reference" && source.url);
  const hasOriginal = quiz.sources.some((source) => source.kind === "original");
  // Quiz + BreadcrumbList only: no question text or answer key, and no rating markup.
  const jsonLd = jsonLdGraph([
    quizNode({
      path,
      name: quiz.title,
      description: quiz.description,
      numberOfQuestions: quiz.questions.length,
      timeRequiredMinutes: quiz.minutes,
      educationalUse: EDUCATIONAL_USE[quiz.kind],
      about: category?.name,
      note: quiz.note,
    }),
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Interactive quizzes", path: "/quizzes/" },
      ...(category ? [{ name: category.name, path: `/quizzes/category/${category.id}/` }] : []),
      { name: quiz.title, path },
    ]),
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="section directory-page">
        <p className="eyebrow">
          <Link href="/quizzes/">Interactive quizzes</Link>
          {category && <> / <Link href={`/quizzes/category/${category.id}/`}>{category.name}</Link></>}
        </p>
        {/* The player never renders the quiz title outside its share action, so the route owns the only h1. */}
        <h1 className="section-title">{quiz.title}</h1>
        <p className="section-lead">{quiz.description}</p>
        <QuizPlayer quiz={quiz} />
        <aside aria-label="About this quiz" style={{ marginTop: 32 }}>
          <h2 className="font-display" style={{ fontSize: "1.1rem", fontWeight: 600, margin: "0 0 8px" }}>About this quiz</h2>
          <p>{resultNote(quiz.kind)}</p>
          <p>Read <Link href="/methodology/interactive-quizzes/" className="text-link">how these quizzes are scored, sourced and reviewed</Link>.</p>
          {hasOriginal && <p>People, places, data and rules in the original cases are written for this quiz. Where a task relies on a real fact, the source is listed with the task and below.</p>}
          {references.length > 0 && (
            <>
              <h3 style={{ fontSize: "1rem", margin: "12px 0 6px" }}>References</h3>
              <ul>
                {references.map((source) => (
                  <li key={source.id}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>
                ))}
              </ul>
            </>
          )}
        </aside>
      </div>
    </>
  );
}
