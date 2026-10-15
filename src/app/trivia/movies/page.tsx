import type { Metadata } from "next";
import Link from "next/link";
import { MOVIE_QUIZ_QUESTION_COUNT, MOVIE_QUIZZES, movieQuizPath } from "@/lib/trivia/movies";
import { SITE } from "@/lib/site";
import { breadcrumbList, collectionPageNodes, jsonLdGraph } from "@/lib/structured-data";
import { MovieCover } from "@/components/trivia/MovieCover";
import styles from "@/components/trivia/MovieQuiz.module.css";

const TITLE = "Movie and Movie Character Quizzes";
const DESCRIPTION = `${MOVIE_QUIZZES.length} original movie quizzes with ${MOVIE_QUIZZES.length * MOVIE_QUIZ_QUESTION_COUNT} sourced questions: badly described plots, character day jobs, sidekicks, villains, fictional places, sci-fi, fantasy and more. Free, no signup, playable solo or with a group.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/trivia/movies/" },
  openGraph: {
    title: `${TITLE} · ${SITE.legalName}`,
    description: DESCRIPTION,
    url: `${SITE.url}/trivia/movies/`,
    images: [{ url: `${SITE.url}/og/trivia-movies-hub.png`, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: `${TITLE} · ${SITE.legalName}`, description: DESCRIPTION, images: [`${SITE.url}/og/trivia-movies-hub.png`] },
};

export default function MovieHubPage() {
  const jsonLd = jsonLdGraph([
    ...collectionPageNodes({
      path: "/trivia/movies/",
      name: TITLE,
      description: DESCRIPTION,
      listName: "Movie quiz collection",
      items: MOVIE_QUIZZES.map((quiz) => ({ name: quiz.title, path: movieQuizPath(quiz.slug) })),
    }),
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Trivia", path: "/trivia/" },
      { name: "Movies", path: "/trivia/movies/" },
    ]),
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="section directory-page trivia-directory">
        <p className={styles.crumbs}><Link href="/trivia/">Trivia</Link> / Movies</p>
        <h1 className="section-title" style={{ marginBottom: 12 }}>{TITLE}</h1>
        <p className="section-lead" style={{ marginBottom: 16 }}>
          {MOVIE_QUIZZES.length} original sets of {MOVIE_QUIZ_QUESTION_COUNT} rounds each. Every answer comes with a short, funny explanation and a link to the official page behind the fact. Play on your own or open a group room and race friends on the same questions.
        </p>
        <p className={styles.notice} style={{ marginBottom: 24 }}>
          <strong>Spoiler guide:</strong> each set lists how much it reveals. Most stay at premise level, but a few mention a well-known plot turn or outcome, and those sets say so. Remakes are named by year so the edition is never a guess.
        </p>
        <section aria-label="Movie quizzes" className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", marginBottom: 28 }}>
          {MOVIE_QUIZZES.map((quiz) => (
            <Link key={quiz.slug} href={movieQuizPath(quiz.slug)} className="quiz-card" style={{ display: "block" }}>
              <MovieCover motif={quiz.motif} accent={quiz.accent} className={styles.cover} />
              <h2 className="quiz-card-title" style={{ margin: "12px 0 6px" }}>{quiz.title}</h2>
              <p className="quiz-card-desc">{quiz.tagline}</p>
              <p className="quiz-meta" style={{ marginTop: 8 }}>{MOVIE_QUIZ_QUESTION_COUNT} rounds · Spoilers: {quiz.spoilerNote}</p>
            </Link>
          ))}
        </section>
        <section className={styles.sources} aria-labelledby="movie-rights">
          <h2 id="movie-rights">Sources and rights</h2>
          <p>All prompts, jokes, wrong answers and explanations are original TypologyQuiz writing and the cover art is original abstract artwork. We do not use film posters, stills, trailers, audio, or actor likenesses, and we do not quote film dialogue. Facts are checked against official studio and franchise pages (Disney, Pixar, Marvel and Lucasfilm pages on movies.disney.com, Sony Pictures, and the StarWars.com Databank), and each explanation links the page it relied on. Film titles belong to their owners; this site is not affiliated with or endorsed by any studio.</p>
          <p>Group rooms store a nickname and a final score for a few hours. Scores are reported by each player&apos;s browser for fun, not verified as competition results.</p>
        </section>
      </div>
    </>
  );
}
