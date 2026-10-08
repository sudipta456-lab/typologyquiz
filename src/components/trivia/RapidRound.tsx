"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import type { RapidRound as RapidRoundDefinition } from "@/lib/trivia/rapid-rounds";

type Phase = "ready" | "playing" | "complete";
type PersonalBest = { score: number; elapsedMs: number };
const personalBestCache = new Map<string, PersonalBest | null>();

function subscribeNever() {
  return () => {};
}

function formatDuration(ms: number) {
  const seconds = Math.max(0, Math.round(ms / 1000));
  return `${seconds}s`;
}

function bestStorageKey(slug: string) {
  return `tq-rapid-round-v1:${slug}`;
}

function readPersonalBest(slug: string): PersonalBest | null {
  try {
    const raw = window.localStorage.getItem(bestStorageKey(slug));
    if (!raw) return null;
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object" || Array.isArray(value)) return null;
    const candidate = value as Record<string, unknown>;
    if (
      typeof candidate.score !== "number" ||
      !Number.isInteger(candidate.score) ||
      typeof candidate.elapsedMs !== "number" ||
      !Number.isFinite(candidate.elapsedMs) ||
      candidate.score < 0 ||
      candidate.elapsedMs < 0
    ) return null;
    return { score: candidate.score, elapsedMs: candidate.elapsedMs };
  } catch {
    return null;
  }
}

function personalBestSnapshot(slug: string) {
  if (personalBestCache.has(slug)) return personalBestCache.get(slug) ?? null;
  const best = readPersonalBest(slug);
  personalBestCache.set(slug, best);
  return best;
}

function savePersonalBest(slug: string, next: PersonalBest, previous: PersonalBest | null) {
  const isBetter = !previous || next.score > previous.score || (next.score === previous.score && next.elapsedMs < previous.elapsedMs);
  const best = isBetter ? next : previous;
  if (!best) return previous;
  try { window.localStorage.setItem(bestStorageKey(slug), JSON.stringify(best)); } catch { /* local best is optional */ }
  personalBestCache.set(slug, best);
  return best;
}

export function RapidRound({ round }: { round: RapidRoundDefinition }) {
  const [phase, setPhase] = useState<Phase>("ready");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(round.seconds);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [personalBest, setPersonalBest] = useState<PersonalBest | null>(null);
  const startedAt = useRef<number | null>(null);
  const storedPersonalBest = useSyncExternalStore(
    subscribeNever,
    () => personalBestSnapshot(round.slug),
    () => null,
  );
  const best = personalBest ?? storedPersonalBest;

  const question = round.questions[questionIndex];
  const selectedIsCorrect = selectedId === question?.answerId;
  const answered = selectedId !== null;
  const progress = Math.min(100, Math.round((questionIndex / round.questions.length) * 100));

  const finish = useCallback((finalScore: number) => {
    const spent = Math.min(round.seconds * 1000, Math.max(0, Date.now() - (startedAt.current ?? Date.now())));
    const result = { score: finalScore, elapsedMs: spent };
    setElapsedMs(spent);
    setSecondsLeft(Math.max(0, Math.ceil((round.seconds * 1000 - spent) / 1000)));
    setPersonalBest((previous) => savePersonalBest(round.slug, result, previous ?? storedPersonalBest));
    setPhase("complete");
  }, [round.seconds, round.slug, storedPersonalBest]);

  useEffect(() => {
    if (phase !== "playing" || !startedAt.current) return;
    const deadline = startedAt.current + round.seconds * 1000;
    const update = () => {
      const remainingMs = Math.max(0, deadline - Date.now());
      setSecondsLeft(Math.ceil(remainingMs / 1000));
      if (remainingMs === 0) {
        finish(score);
      }
    };
    update();
    const timer = window.setInterval(update, 250);
    return () => window.clearInterval(timer);
  }, [finish, phase, round.seconds, score]);

  const resultLine = useMemo(() => {
    if (score === round.questions.length) return "Clean sweep. That was quick.";
    if (score >= Math.ceil(round.questions.length * 0.8)) return "Strong run. You kept the clock honest.";
    if (score >= Math.ceil(round.questions.length * 0.5)) return "Solid middle. A second run will feel very different.";
    return "The clock wins sometimes. The explanations are there for the rematch.";
  }, [round.questions.length, score]);

  function start() {
    startedAt.current = Date.now();
    setQuestionIndex(0);
    setSelectedId(null);
    setScore(0);
    setElapsedMs(0);
    setSecondsLeft(round.seconds);
    setPhase("playing");
  }

  function choose(choiceId: string) {
    if (phase !== "playing" || answered) return;
    setSelectedId(choiceId);
    if (choiceId === question.answerId) setScore((current) => current + 1);
  }

  function next() {
    if (!answered) return;
    const nextScore = score;
    if (questionIndex + 1 >= round.questions.length) finish(nextScore);
    else {
      setQuestionIndex((current) => current + 1);
      setSelectedId(null);
    }
  }

  return (
    <main className="section" style={{ maxWidth: 760 }}>
      <p className="eyebrow" style={{ marginBottom: 10 }}>{round.eyebrow}</p>
      <h1 className="section-title" style={{ marginBottom: 12 }}>{round.title}</h1>
      <p className="section-lead" style={{ marginBottom: 20 }}>{round.description}</p>

      {phase === "ready" && (
        <section className="quiz-card" style={{ padding: 24 }} aria-labelledby="rapid-rules-title">
          <h2 id="rapid-rules-title" className="font-display" style={{ fontSize: "1.35rem", margin: "0 0 12px" }}>One clear answer at a time.</h2>
          <ul style={{ paddingLeft: 20, lineHeight: 1.7, margin: "0 0 20px" }}>
            <li>{round.questions.length} questions in {round.seconds} seconds.</li>
            <li>Your answer locks when you tap it; you can read the date or fact before moving on.</li>
            <li>Your best result stays only in this browser. Nothing is submitted.</li>
          </ul>
          {best && <p style={{ color: "var(--ink-mute)", margin: "0 0 16px" }}>Personal best on this device: {best.score}/{round.questions.length} in {formatDuration(best.elapsedMs)}.</p>}
          <button type="button" className="btn-primary" onClick={start}>{round.startLabel}</button>
        </section>
      )}

      {phase === "playing" && question && (
        <section className="quiz-card" style={{ padding: 24 }} aria-labelledby="rapid-question-title">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline", marginBottom: 12 }}>
            <p style={{ margin: 0, color: "var(--ink-mute)", fontFamily: "var(--font-mono)", fontSize: ".9rem" }}>Question {questionIndex + 1} of {round.questions.length}</p>
            <p aria-live="polite" style={{ margin: 0, color: secondsLeft <= 15 ? "var(--mark-coral)" : "var(--ink)", fontFamily: "var(--font-mono)", fontWeight: 700 }}>{secondsLeft}s</p>
          </div>
          <div aria-hidden="true" style={{ height: 6, borderRadius: 999, background: "var(--line)", overflow: "hidden", marginBottom: 22 }}>
            <span style={{ display: "block", width: `${progress}%`, height: "100%", background: "var(--mark-teal)" }} />
          </div>
          <h2 id="rapid-question-title" className="font-display" style={{ fontSize: "1.55rem", margin: "0 0 18px" }}>{question.prompt}</h2>
          <div style={{ display: "grid", gap: 10 }}>
            {question.choices.map((choice) => {
              const chosen = choice.id === selectedId;
              const isAnswer = choice.id === question.answerId;
              const background = answered && isAnswer ? "color-mix(in srgb, var(--mark-teal) 16%, var(--paper))" : answered && chosen ? "color-mix(in srgb, var(--mark-coral) 15%, var(--paper))" : "var(--paper)";
              return (
                <button key={choice.id} type="button" onClick={() => choose(choice.id)} disabled={answered} className="quiz-card" style={{ textAlign: "left", padding: "15px 16px", minHeight: 56, color: "var(--ink)", font: "inherit", cursor: answered ? "default" : "pointer", opacity: answered && !chosen && !isAnswer ? .72 : 1, background, borderColor: answered && (chosen || isAnswer) ? (isAnswer ? "var(--mark-teal)" : "var(--mark-coral)") : undefined }}>
                  {choice.label}
                </button>
              );
            })}
          </div>
          {answered && (
            <div aria-live="polite" style={{ marginTop: 18, padding: "14px 15px", borderLeft: `4px solid ${selectedIsCorrect ? "var(--mark-teal)" : "var(--mark-coral)"}`, background: "var(--surface)" }}>
              <strong>{selectedIsCorrect ? "Correct." : `Not this time — ${question.choices.find((choice) => choice.id === question.answerId)?.label}.`}</strong>
              <p style={{ margin: "6px 0 14px", lineHeight: 1.55 }}>{question.explanation}</p>
              <button type="button" className="btn-primary" onClick={next}>{questionIndex + 1 === round.questions.length ? "See my score" : "Next question"}</button>
            </div>
          )}
        </section>
      )}

      {phase === "complete" && (
        <section className="quiz-card" style={{ padding: 24 }} aria-live="polite" aria-labelledby="rapid-result-title">
          <p className="eyebrow">Round complete</p>
          <h2 id="rapid-result-title" className="font-display" style={{ fontSize: "2rem", margin: "6px 0 8px" }}>{score} / {round.questions.length}</h2>
          <p className="section-lead" style={{ marginBottom: 6 }}>{resultLine}</p>
          <p style={{ color: "var(--ink-mute)", marginTop: 0 }}>{elapsedMs >= round.seconds * 1000 ? "Time expired." : `Finished in ${formatDuration(elapsedMs)}.`}</p>
          {best && <p style={{ color: "var(--ink-mute)" }}>Personal best on this device: {best.score}/{round.questions.length} in {formatDuration(best.elapsedMs)}.</p>}
          <button type="button" className="btn-primary" onClick={start}>Play again</button>
        </section>
      )}
    </main>
  );
}
