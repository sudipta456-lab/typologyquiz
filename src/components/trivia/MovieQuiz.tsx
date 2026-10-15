"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createGroupRoom, GROUP_CODE_PATTERN, groupErrorMessage, loadGroupAttempt, loadGroupToken, normalizeGroupCode, saveGroupHostSecret, sendGroupPresence, submitGroupResult } from "@/lib/group/api";
import { formatTimeMs } from "@/lib/trivia/engine";
import { buildMovieRun, elapsedMs, MOVIE_SEED_PATTERN, missedAnswers, movieRunReducer, scoreHeadline, scoreMovieRun, startMovieRun, type MovieRunAction, type MovieRunState, type PresentedQuestion } from "@/lib/trivia/movie-engine";
import { createCompletionReporter, movieGroupPayload, type CompletionFailure, type CompletionStatus } from "@/lib/trivia/movie-group";
import { trackMovieComplete, trackMovieStart } from "@/lib/trivia/movie-analytics";
import { movieGroupSlug, movieQuizPath, type MovieQuiz } from "@/lib/trivia/movies";
import { MovieHero } from "./MovieHero";
import { MovieCover } from "./MovieCover";
import { ResultReveal } from "./ResultReveal";
import styles from "./MovieQuiz.module.css";

type Game = { questions: PresentedQuestion[]; run: MovieRunState; startedAt: number };
export type RelatedMovieQuiz = { slug: string; title: string };

const LETTERS = ["A", "B", "C", "D"];
const CREDS_UNKNOWN = "?";

function subscribeStorage(onChange: () => void): () => void {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

/**
 * Keyed by set, group code and seed, so a query-only navigation (for example
 * "Practice on your own") starts a fresh session with fresh credentials.
 */
export function MovieQuizPlayer({ quiz, related }: { quiz: MovieQuiz; related: readonly RelatedMovieQuiz[] }) {
  const search = useSearchParams();
  const rawGroup = search.get("group") ?? "";
  const seed = search.get("seed");
  return <MovieSession key={`${quiz.slug}|${rawGroup}|${seed ?? ""}`} quiz={quiz} related={related} rawGroup={rawGroup} seedParam={seed} />;
}

function MovieSession({ quiz, related, rawGroup, seedParam }: { quiz: MovieQuiz; related: readonly RelatedMovieQuiz[]; rawGroup: string; seedParam: string | null }) {
  const groupCode = normalizeGroupCode(rawGroup);
  const groupIntent = rawGroup.trim() !== "";
  const groupValid = GROUP_CODE_PATTERN.test(groupCode) && seedParam !== null && MOVIE_SEED_PATTERN.test(seedParam);
  // Group credentials come from this browser's storage, never from the URL. The
  // server snapshot is "unknown", so hydration matches and storage is read right after.
  const stored = useSyncExternalStore(
    subscribeStorage,
    () => (groupValid ? `${loadGroupToken(groupCode) ?? ""}|${loadGroupAttempt(groupCode) ?? ""}` : "|"),
    () => CREDS_UNKNOWN,
  );
  const credsKnown = stored !== CREDS_UNKNOWN;
  const [storedToken, storedAttempt] = credsKnown ? stored.split("|") : ["", ""];
  const groupReady = groupValid && storedToken !== "" && storedAttempt !== "";
  const token = groupReady ? storedToken : "";
  const attempt = groupReady ? storedAttempt : "";
  const mode = groupReady ? "group" : "solo";

  const [game, setGame] = useState<Game | null>(null);
  const [finishMs, setFinishMs] = useState<number | null>(null);
  const [sync, setSync] = useState<CompletionStatus>("idle");
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [reporter] = useState(() => createCompletionReporter({
    submit: (payload) => submitGroupResult(groupCode, payload),
    onChange: setSync,
  }));
  const promptRef = useRef<HTMLHeadingElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const completedRef = useRef(false);
  const focusResult = useCallback((element: HTMLElement | null) => { element?.focus(); }, []);

  const phase: "ready" | "playing" | "done" = !game ? "ready" : game.run.done ? "done" : "playing";
  const answeredNow = game ? game.run.answers[game.run.index] !== null : false;
  const index = game?.run.index ?? 0;

  function begin() {
    if (groupIntent && !groupReady) return;
    completedRef.current = false;
    setFinishMs(null);
    const questions = buildMovieRun(quiz, groupReady ? seedParam : null);
    setGame({ questions, run: startMovieRun(questions.length), startedAt: Date.now() });
    trackMovieStart(quiz.slug, mode);
  }
  // Functional updates run in order, so a second tap in the same frame sees the first.
  function dispatch(action: MovieRunAction) {
    setGame((current) => (current ? { ...current, run: movieRunReducer(current.run, action, current.questions) } : current));
  }
  function next() {
    if (!game || !answeredNow) return;
    if (game.run.index >= game.run.total - 1) setFinishMs((prior) => prior ?? elapsedMs(game.startedAt, Date.now()));
    dispatch({ type: "next", from: game.run.index });
  }

  useEffect(() => { if (phase === "playing") promptRef.current?.focus(); }, [phase, index]);
  useEffect(() => { if (answeredNow) nextRef.current?.focus(); }, [answeredNow]);

  // A group player stays visibly present; the room only receives an activity label.
  useEffect(() => {
    if (!groupReady) return;
    const activity = phase === "done" ? "results" : phase === "playing" ? "playing" : "lobby";
    const beat = () => { if (!document.hidden) void sendGroupPresence(groupCode, token, activity).catch(() => {}); };
    beat();
    const interval = window.setInterval(beat, 15000);
    document.addEventListener("visibilitychange", beat);
    return () => { window.clearInterval(interval); document.removeEventListener("visibilitychange", beat); };
  }, [groupReady, groupCode, phase, token]);

  const score = game ? scoreMovieRun(game.run, game.questions) : 0;
  // Completion is reported once; the reporter ignores repeats and retries transient failures.
  useEffect(() => {
    if (phase !== "done" || !game || finishMs === null || completedRef.current) return;
    completedRef.current = true;
    trackMovieComplete(quiz.slug, mode, score);
    if (groupReady) {
      void reporter.report(movieGroupPayload({ token, attempt, quizSlug: quiz.slug, score, total: game.run.total, timeMs: finishMs }));
    }
  }, [attempt, finishMs, game, groupReady, mode, phase, quiz.slug, reporter, score, token]);

  async function playTogether() {
    if (creating) return;
    setCreating(true); setCreateError(null);
    try {
      const room = await createGroupRoom(movieGroupSlug(quiz.slug));
      saveGroupHostSecret(room.code, room.hostSecret);
      window.location.assign(`/group/?room=${room.code}`);
    } catch (failure) {
      setCreateError(groupErrorMessage((failure as { code?: string }).code ?? "network"));
      setCreating(false);
    }
  }

  if (phase === "ready" || !game) {
    return (
      <main className={styles.wrap}>
        <MovieHero quiz={quiz} />
        {groupIntent && credsKnown && !groupReady && (
          <p className={`${styles.notice} ${styles.warn}`} role="alert">
            Start this round from the group lobby so your score can reach the shared board.{" "}
            {GROUP_CODE_PATTERN.test(groupCode) ? <Link href={`/group/?room=${groupCode}`}>Return to the lobby</Link> : <Link href="/group/">Find a group game</Link>}
            {" "}or <a href={movieQuizPath(quiz.slug)}>play on your own</a>.
          </p>
        )}
        {groupReady && <p className={styles.notice}>Group round: everyone gets the same questions in the same order. Your score and time go to the room board when you finish.</p>}
        <div className={styles.actions}>
          <button type="button" className="btn-primary" onClick={begin} disabled={groupIntent && !groupReady} autoFocus={!groupIntent}>Start the quiz</button>
          {!groupIntent && <button type="button" className="btn-outline" onClick={playTogether} disabled={creating}>{creating ? "Creating group room…" : "Play together"}</button>}
        </div>
        {createError && <p className="compare-err" role="alert">{createError}</p>}
        <p className={styles.source}>Features: {quiz.featuring.join(", ")}.</p>
      </main>
    );
  }

  if (phase === "playing") {
    const question = game.questions[game.run.index];
    const picked = game.run.answers[game.run.index];
    const wasRight = picked === question.correctId;
    const correctChoice = question.choices.find((choice) => choice.id === question.correctId);
    const last = game.run.index >= game.run.total - 1;
    return (
      <main className={styles.wrap}>
        <p className={styles.crumbs}><Link href="/trivia/movies/">Movies</Link></p>
        <h1 className={styles.playTitle}>{quiz.title}</h1>
        <div className={styles.progressRow}>
          <span>Round {game.run.index + 1} of {game.run.total}</span>
          <span>{score} correct so far</span>
        </div>
        <div className={styles.progress} role="progressbar" aria-label="Quiz progress" aria-valuemin={0} aria-valuemax={game.run.total} aria-valuenow={game.run.index + (picked ? 1 : 0)}>
          <div className={styles.progressFill} style={{ width: `${((game.run.index + (picked ? 1 : 0)) / game.run.total) * 100}%` }} />
        </div>
        <section className={styles.card} aria-labelledby="movie-prompt">
          <h2 id="movie-prompt" className={styles.prompt} tabIndex={-1} ref={promptRef}>{question.prompt}</h2>
          <ul className={styles.choices} aria-label="Answer choices">
            {question.choices.map((choice, position) => {
              const isCorrect = choice.id === question.correctId;
              const isPicked = choice.id === picked;
              const state = picked ? (isCorrect ? styles.right : isPicked ? styles.wrong : "") : "";
              return (
                <li key={choice.id}>
                  <button type="button" className={`${styles.choice} ${state}`} aria-disabled={picked !== null ? "true" : "false"} onClick={() => { if (picked === null) dispatch({ type: "answer", index: game.run.index, choice: choice.id }); }}>
                    <span className={styles.letter} aria-hidden="true">{LETTERS[position]}</span>
                    <span className={styles.choiceText}>{choice.text}</span>
                    {picked && isCorrect && <span className={styles.tag}>Correct answer</span>}
                    {picked && isPicked && !isCorrect && <span className={styles.tag}>Your answer</span>}
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="sr-only" role="status">{picked ? `${wasRight ? "Correct." : "Not quite."} The answer is ${correctChoice?.text}.` : ""}</p>
          {picked && (
            <div className={styles.feedback}>
              <p className={styles.verdict}>{wasRight ? "Correct." : `Not quite. The answer is ${correctChoice?.text}.`}</p>
              <p className={styles.explain}>{question.explanation}</p>
              <p className={styles.source}>Source: <a href={question.source.url} target="_blank" rel="noopener noreferrer">{question.source.label}</a>.</p>
              <button type="button" className="btn-primary" ref={nextRef} onClick={next}>{last ? "See my results" : "Next round"}</button>
            </div>
          )}
        </section>
      </main>
    );
  }

  const failure: CompletionFailure | null = sync === "failed" ? reporter.failure() : null;
  const missed = missedAnswers(game.run, game.questions);
  const total = game.run.total;
  return (
    <main className={styles.wrap}>
      <ResultReveal>
        <section aria-labelledby="movie-result">
          <MovieCover motif={quiz.motif} accent={quiz.accent} className={styles.cover} />
          <p className="eyebrow" style={{ marginTop: "1rem" }}>{quiz.shortTitle}</p>
          <h1 id="movie-result" className={styles.title} tabIndex={-1} ref={focusResult}>{scoreHeadline(score, total)}<span className="sr-only">: {score} of {total} correct.</span></h1>
          <p className={styles.score}>{score} of {total}</p>
          <p className={styles.lead}>Score is the number correct. {finishMs !== null ? `Time ${formatTimeMs(finishMs)}, used only as a tie break.` : ""}</p>
          {groupReady && (
            <p className={`${styles.notice} ${styles.syncRow}`} role="status">
              <span>{sync === "sent" ? "Score added to the group board." : sync === "failed" ? groupErrorMessage(failure?.code ?? "network") : "Sending your score to the group…"}</span>
              {sync === "failed" && failure?.transient && <button type="button" className="btn-outline" onClick={() => { void reporter.retry(); }}>Try again</button>}
              <Link href={`/group/?room=${groupCode}`}>View group results</Link>
            </p>
          )}
          <div className={styles.actions}>
            {mode === "solo" ? <button type="button" className="btn-primary" onClick={begin}>Play again</button> : <a className="btn-primary" href={movieQuizPath(quiz.slug)}>Practice on your own</a>}
            {mode === "solo" && <button type="button" className="btn-outline" onClick={playTogether} disabled={creating}>{creating ? "Creating group room…" : "Play together"}</button>}
            <Link className="btn-outline" href="/trivia/movies/">All movie quizzes</Link>
          </div>
          {createError && <p className="compare-err" role="alert">{createError}</p>}
          <h2 className="font-display" style={{ marginBottom: 0 }}>{missed.length === 0 ? "No misses to review" : `Review ${missed.length} missed ${missed.length === 1 ? "answer" : "answers"}`}</h2>
          {missed.length === 0 ? <p>Every answer was right. Ask someone else to try the same set.</p> : (
            <ol className={styles.review}>
              {missed.map(({ question, picked, correct }) => (
                <li key={question.id}>
                  <p><strong>{question.prompt}</strong></p>
                  <p>{picked ? `You chose: ${picked.text}.` : "You did not answer."} Correct: {correct.text}.</p>
                  <p className={styles.explain}>{question.explanation}</p>
                  <p className={styles.source}>Source: <a href={question.source.url} target="_blank" rel="noopener noreferrer">{question.source.label}</a></p>
                </li>
              ))}
            </ol>
          )}
          <h2 className="font-display">Try another set</h2>
          <div className={styles.related}>
            {related.map((item) => <Link key={item.slug} className="btn-outline" href={movieQuizPath(item.slug)}>{item.title}</Link>)}
          </div>
        </section>
      </ResultReveal>
    </main>
  );
}
