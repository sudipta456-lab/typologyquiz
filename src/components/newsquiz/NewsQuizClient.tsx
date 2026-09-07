"use client";

// The news-quiz player: one question at a time, immediate reveal, then a
// score screen. Deliberately NOT the driving take-page's engine - no timer,
// no pass mark, no localStorage - just pick, reveal, next, score.

import { useState } from "react";
import Link from "next/link";
import type { NewsQuiz } from "@/lib/newsquiz/types";
import { formatWeekOf, getOtherNewsQuiz } from "@/lib/newsquiz/registry";

interface Props {
  quiz: NewsQuiz;
}

export function NewsQuizClient({ quiz }: Props) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const total = quiz.questions.length;
  const question = quiz.questions[index];
  const other = getOtherNewsQuiz(quiz.slug);
  const isLast = index + 1 >= total;

  function pick(choiceIndex: number) {
    if (picked !== null) return;
    setPicked(choiceIndex);
    if (choiceIndex === question.correctIndex) setScore((s) => s + 1);
  }

  function next() {
    if (isLast) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
  }

  function restart() {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    return (
      <div className="quiz-card" style={{ cursor: "default", textAlign: "center", padding: "2.75rem 1.5rem" }}>
        <p className="eyebrow" style={{ marginBottom: 10 }}>
          {quiz.region} news quiz · {formatWeekOf(quiz.weekOf)}
        </p>
        <h2 className="font-display" style={{ fontSize: "2.25rem", margin: "0 0 10px" }}>
          {score} / {total}
        </h2>
        <p style={{ color: "var(--ink-soft)", margin: "0 0 28px", fontSize: "0.95rem" }}>
          {score === total
            ? "Perfect run."
            : score >= Math.ceil(total / 2)
              ? "Solid week of reading."
              : "Next week's edition is a fresh chance."}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          <button type="button" className="btn-outline" onClick={restart}>
            Play again
          </button>
          <Link href={`/trivia/${other.slug}/`} className="btn-outline">
            Try the {other.region} edition
          </Link>
          <Link href="/trivia/" className="btn-primary">
            Back to trivia
          </Link>
        </div>
      </div>
    );
  }

  const answered = picked !== null;
  const isCorrect = answered && picked === question.correctIndex;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 14,
        }}
      >
        <p className="eyebrow" style={{ margin: 0 }}>
          {quiz.region} news quiz · {formatWeekOf(quiz.weekOf)}
        </p>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            color: "var(--ink-mute)",
          }}
        >
          Question {index + 1} of {total}
        </p>
      </div>

      <div className="quiz-card" style={{ cursor: "default" }} key={question.id}>
        <h2
          style={{
            margin: "0 0 18px",
            fontSize: "1.3rem",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          {question.question}
        </h2>

        <div
          role="radiogroup"
          aria-label="Answer choices"
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          {question.choices.map((choice, i) => {
            const isSelected = picked === i;
            const isRightAnswer = i === question.correctIndex;

            let borderColor = "var(--line)";
            let background = "var(--white)";
            if (answered && isRightAnswer) {
              borderColor = "var(--mark-teal)";
              background = "color-mix(in srgb, var(--mark-teal) 10%, transparent)";
            } else if (answered && isSelected) {
              borderColor = "var(--mark-coral)";
              background = "color-mix(in srgb, var(--mark-coral) 10%, transparent)";
            }

            return (
              <button
                key={i}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => pick(i)}
                disabled={answered}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 10,
                  textAlign: "left",
                  padding: "0.85rem 1rem",
                  borderRadius: "var(--radius)",
                  border: `1.5px solid ${borderColor}`,
                  background,
                  color: "var(--ink)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  lineHeight: 1.45,
                  cursor: answered ? "default" : "pointer",
                }}
              >
                <span>{choice}</span>
                {answered && isRightAnswer && (
                  <span
                    style={{
                      flexShrink: 0,
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      color: "var(--mark-teal)",
                    }}
                  >
                    Correct
                  </span>
                )}
                {answered && isSelected && !isRightAnswer && (
                  <span
                    style={{
                      flexShrink: 0,
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      color: "var(--mark-coral)",
                    }}
                  >
                    Your answer
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {answered && (
          <div
            aria-live="polite"
            style={{ marginTop: 20, paddingTop: 18, borderTop: "1px solid var(--line)" }}
          >
            <p
              style={{
                margin: "0 0 8px",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: isCorrect ? "var(--mark-teal)" : "var(--mark-coral)",
              }}
            >
              {isCorrect ? "Correct" : "Not quite"}
            </p>
            <p style={{ margin: "0 0 14px", color: "var(--ink-soft)", lineHeight: 1.6, fontSize: "0.92rem" }}>
              {question.explanation}
            </p>
            <p style={{ margin: "0 0 22px", fontSize: "0.85rem" }}>
              <a
                href={question.sourceUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-link"
              >
                {question.sourceLabel}
              </a>
            </p>
            <button type="button" className="btn-primary" onClick={next}>
              {isLast ? "See your score" : "Next question"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
