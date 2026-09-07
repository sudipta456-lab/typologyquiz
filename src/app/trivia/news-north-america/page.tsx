import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { breadcrumbList, jsonLdGraph, quizNode } from "@/lib/structured-data";
import { getNewsQuiz } from "@/lib/newsquiz/registry";
import { NewsQuizClient } from "@/components/newsquiz/NewsQuizClient";

const quiz = getNewsQuiz("news-north-america");

export const metadata: Metadata = {
  title: quiz.title,
  description: quiz.seoDescription,
  alternates: { canonical: "/trivia/news-north-america/" },
  openGraph: {
    title: `${quiz.title} · ${SITE.legalName}`,
    description: quiz.seoDescription,
    url: `${SITE.url}/trivia/news-north-america/`,
  },
  twitter: {
    card: "summary",
    title: `${quiz.title} · ${SITE.legalName}`,
    description: quiz.seoDescription,
  },
};

export default function NewsNorthAmericaPage() {
  // Quiz + BreadcrumbList JSON-LD, same shared builders the trivia and
  // typology pages use. No answer key in the markup, same as trivia.
  const jsonLd = jsonLdGraph([
    quizNode({
      path: "/trivia/news-north-america/",
      name: quiz.title,
      description: quiz.seoDescription,
      numberOfQuestions: quiz.questions.length,
      educationalUse: "practice",
      about: "This week's North America news",
      note: "A new edition each week; questions are sourced and explained, not a rating.",
    }),
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Trivia", path: "/trivia/" },
      { name: quiz.title, path: "/trivia/news-north-america/" },
    ]),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section" style={{ maxWidth: "42rem" }}>
        <NewsQuizClient quiz={quiz} />
      </div>
    </>
  );
}
