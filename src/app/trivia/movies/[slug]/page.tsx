import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getMovieQuiz, MOVIE_QUIZ_QUESTION_COUNT, MOVIE_QUIZZES, movieQuizPath } from "@/lib/trivia/movies";
import { SITE } from "@/lib/site";
import { breadcrumbList, jsonLdGraph, quizNode } from "@/lib/structured-data";
import { MovieHero } from "@/components/trivia/MovieHero";
import { MovieQuizPlayer } from "@/components/trivia/MovieQuiz";
import styles from "@/components/trivia/MovieQuiz.module.css";

export function generateStaticParams() {
  return MOVIE_QUIZZES.map((quiz) => ({ slug: quiz.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const quiz = getMovieQuiz((await params).slug);
  if (!quiz) return { title: "Movie quiz" };
  const image = `${SITE.url}/og/trivia-movies-${quiz.slug}.png`;
  return {
    title: quiz.title,
    description: quiz.seoDescription,
    alternates: { canonical: movieQuizPath(quiz.slug) },
    openGraph: {
      title: `${quiz.title} · ${SITE.legalName}`,
      description: quiz.seoDescription,
      url: `${SITE.url}${movieQuizPath(quiz.slug)}`,
      images: [{ url: image, width: 1200, height: 630, alt: quiz.title }],
    },
    twitter: { card: "summary_large_image", title: `${quiz.title} · ${SITE.legalName}`, description: quiz.seoDescription, images: [image] },
  };
}

export default async function MovieQuizPage({ params }: { params: Promise<{ slug: string }> }) {
  const quiz = getMovieQuiz((await params).slug);
  if (!quiz) notFound();
  const related = quiz.related.map((slug) => getMovieQuiz(slug)).filter((item): item is NonNullable<typeof item> => item !== undefined).map((item) => ({ slug: item.slug, title: item.title }));
  const sources = [...new Map(quiz.questions.map((question) => [question.source.url, question.source.label])).entries()];
  // Quiz + BreadcrumbList only. No question text, no answer key, and no rating
  // or FAQ markup: the site has no ratings and the page is not an FAQ.
  const jsonLd = jsonLdGraph([
    quizNode({
      path: movieQuizPath(quiz.slug),
      name: quiz.title,
      description: quiz.seoDescription,
      numberOfQuestions: MOVIE_QUIZ_QUESTION_COUNT,
      educationalUse: "practice",
      educationalSubject: "Film",
      about: quiz.shortTitle,
      note: quiz.spoilerNote,
    }),
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Trivia", path: "/trivia/" },
      { name: "Movies", path: "/trivia/movies/" },
      { name: quiz.title, path: movieQuizPath(quiz.slug) },
    ]),
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Suspense fallback={<main className={styles.wrap}><MovieHero quiz={quiz} /><p role="status">Loading the quiz…</p></main>}>
        <MovieQuizPlayer quiz={quiz} related={related} />
      </Suspense>
      <aside className={styles.wrap} style={{ paddingTop: 0 }}>
        <section className={styles.sources} aria-labelledby="movie-sources">
          <h2 id="movie-sources">Sources for this set</h2>
          <p>Questions are original. Each fact was checked against the official page below and is linked again beside its answer. Not affiliated with or endorsed by any studio; no posters, stills or dialogue are used.</p>
          <ul>
            {sources.map(([url, label]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{label}</a></li>)}
          </ul>
          <p><Link href="/trivia/movies/">Browse all {MOVIE_QUIZZES.length} movie quizzes</Link></p>
        </section>
      </aside>
    </>
  );
}
