import Link from "next/link";
import type { MovieQuiz } from "@/lib/trivia/movies";
import { MOVIE_QUIZ_QUESTION_COUNT } from "@/lib/trivia/movies";
import { MovieCover } from "./MovieCover";
import styles from "./MovieQuiz.module.css";

/** Static intro shared by the prerendered page and the interactive ready screen. */
export function MovieHero({ quiz }: { quiz: MovieQuiz }) {
  return (
    <>
      <p className={styles.crumbs}><Link href="/trivia/">Trivia</Link> / <Link href="/trivia/movies/">Movies</Link></p>
      <header className={styles.hero}>
        <MovieCover motif={quiz.motif} accent={quiz.accent} className={styles.cover} />
        <div>
          <h1 className={styles.title}>{quiz.title}</h1>
          <p className={styles.lead}>{quiz.tagline}</p>
        </div>
      </header>
      <ul className={styles.facts} aria-label="Quiz facts">
        <li>{MOVIE_QUIZ_QUESTION_COUNT} short rounds</li>
        <li>4 choices each</li>
        <li>About 3 minutes</li>
        <li>Sourced answers</li>
      </ul>
      <p className={styles.notice}><strong>Spoilers:</strong> {quiz.spoilerNote}</p>
    </>
  );
}
