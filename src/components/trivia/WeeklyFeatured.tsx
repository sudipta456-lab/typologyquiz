"use client";

// "This week's quiz" banner on the trivia hub. The pick is keyed to the ISO
// week number, so it is the same for every visitor and rotates itself every
// Monday with no rebuild - which is why this is a client component on an
// otherwise static page. It renders nothing until mounted (the server cannot
// know the visitor's week), so there is no hydration mismatch, just a banner
// that pops in.

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { formatClock } from "@/lib/trivia/engine";
import { getRunSize, pickWeeklyFeatured } from "@/lib/trivia/registry";
import type { TriviaQuiz } from "@/lib/trivia/types";

// The pick only changes at an ISO week boundary, so within a page view the
// snapshot is referentially stable (pickWeeklyFeatured returns the same
// registry object every call). No subscription needed - nobody stays on the
// hub across a Monday midnight, and a refresh picks up the new week.
function subscribeNever(): () => void {
  return () => {};
}

export function WeeklyFeatured() {
  const quiz = useSyncExternalStore<TriviaQuiz | null>(
    subscribeNever,
    () => pickWeeklyFeatured(new Date()),
    () => null
  );

  if (!quiz) return null;

  return (
    <Link
      href={`/trivia/${quiz.slug}/`}
      className="quiz-card"
      style={{
        display: "block",
        marginBottom: 32,
        borderWidth: 2,
        borderColor: "var(--mark-teal)",
        background:
          "linear-gradient(135deg, color-mix(in srgb, var(--mark-teal) 8%, transparent), transparent 60%)",
      }}
    >
      <p
        style={{
          margin: "0 0 6px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--mark-teal)",
        }}
      >
        This week&apos;s quiz
      </p>
      <h2 className="quiz-card-title" style={{ marginBottom: 6, fontSize: "1.25rem" }}>
        {quiz.title}
      </h2>
      <p className="quiz-card-desc" style={{ marginBottom: 8 }}>
        {quiz.hook}
      </p>
      <p
        style={{
          margin: 0,
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          color: "var(--ink-mute)",
        }}
      >
        {getRunSize(quiz)} answers · {formatClock(quiz.timerSeconds)} clock · a new pick every Monday
      </p>
    </Link>
  );
}
