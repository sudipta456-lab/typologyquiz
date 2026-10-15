import { trackAnalyticsEvent } from "../analytics.ts";

export type MoviePlayMode = "solo" | "group";

/** Allowlisted ids and a bounded score only; the analytics contract drops anything else. */
export function trackMovieStart(quizSlug: string, mode: MoviePlayMode): void {
  trackAnalyticsEvent("movie_quiz_start", { movie_quiz_id: quizSlug, play_mode: mode });
}
export function trackMovieComplete(quizSlug: string, mode: MoviePlayMode, correctCount: number): void {
  trackAnalyticsEvent("movie_quiz_complete", { movie_quiz_id: quizSlug, play_mode: mode, correct_count: correctCount });
}
