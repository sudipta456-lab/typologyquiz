import { MOVIE_QUIZ_QUESTION_COUNT, type MovieChoice, type MovieChoiceId, type MovieQuestion, type MovieQuiz } from "./movies";
import { seededRandom } from "./engine";

/** Same shape the trivia group lobby accepts for a shared seed. */
export const MOVIE_SEED_PATTERN = /^[A-Za-z0-9_-]{12,32}$/;
const MAX_TIME_MS = 24 * 60 * 60 * 1000;

export type PresentedQuestion = Omit<MovieQuestion, "choices"> & { choices: readonly MovieChoice[] };

function shuffled<T>(items: readonly T[], random: () => number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Question order and choice order for one run. A valid seed makes the run
 * reproducible, so every player in a group room sees identical rounds; without
 * one the run uses Math.random. Choice ids and the correct id never change.
 */
export function buildMovieRun(quiz: MovieQuiz, seed: string | null, fallbackRandom: () => number = Math.random): PresentedQuestion[] {
  const random = seed !== null && MOVIE_SEED_PATTERN.test(seed) ? seededRandom(`${quiz.slug}:${seed}`) : fallbackRandom;
  return shuffled(quiz.questions, random).slice(0, MOVIE_QUIZ_QUESTION_COUNT).map((question) => ({ ...question, choices: shuffled(question.choices, random) }));
}

export type MovieRunState = {
  total: number;
  index: number;
  answers: readonly (MovieChoiceId | null)[];
  done: boolean;
};
export type MovieRunAction =
  | { type: "answer"; index: number; choice: MovieChoiceId }
  | { type: "next"; from: number };

export function startMovieRun(total: number = MOVIE_QUIZ_QUESTION_COUNT): MovieRunState {
  return { total, index: 0, answers: Array.from({ length: total }, () => null), done: false };
}

/**
 * Pure reducer. Both actions name the round they were taken in, and an answer
 * is accepted once, so a rapid double tap, a late tap after the round moved on
 * or a repeated "next" cannot score twice or skip a round.
 */
export function movieRunReducer(state: MovieRunState, action: MovieRunAction, questions: readonly PresentedQuestion[]): MovieRunState {
  if (state.done) return state;
  if (action.type === "answer") {
    const question = questions[state.index];
    if (action.index !== state.index || !question || state.answers[state.index] !== null) return state;
    if (!question.choices.some((choice) => choice.id === action.choice)) return state;
    const answers = state.answers.slice();
    answers[state.index] = action.choice;
    return { ...state, answers };
  }
  if (action.from !== state.index || state.answers[state.index] === null) return state;
  return state.index >= state.total - 1 ? { ...state, done: true } : { ...state, index: state.index + 1 };
}

export function scoreMovieRun(state: MovieRunState, questions: readonly PresentedQuestion[]): number {
  return state.answers.reduce<number>((score, answer, index) => score + (answer !== null && answer === questions[index]?.correctId ? 1 : 0), 0);
}

export type MissedAnswer = { question: PresentedQuestion; picked: MovieChoice | null; correct: MovieChoice };
export function missedAnswers(state: MovieRunState, questions: readonly PresentedQuestion[]): MissedAnswer[] {
  const out: MissedAnswer[] = [];
  state.answers.forEach((answer, index) => {
    const question = questions[index];
    if (!question || answer === question.correctId) return;
    const correct = question.choices.find((choice) => choice.id === question.correctId);
    if (correct) out.push({ question, picked: question.choices.find((choice) => choice.id === answer) ?? null, correct });
  });
  return out;
}

/** Elapsed time is a tie break only; correctness is the score. */
export function elapsedMs(startedAt: number, finishedAt: number): number {
  if (!Number.isFinite(startedAt) || !Number.isFinite(finishedAt)) return 0;
  return Math.min(MAX_TIME_MS, Math.max(0, Math.round(finishedAt - startedAt)));
}

/** Friendly, non-diagnostic tier labels for the end screen. */
export function scoreHeadline(score: number, total: number): string {
  if (total > 0 && score === total) return "Perfect run";
  if (score >= Math.ceil(total * 0.75)) return "Strong showing";
  if (score >= Math.ceil(total * 0.5)) return "Solid effort";
  return "Warm-up lap";
}
