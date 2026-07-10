"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { getTest, scoreTest } from "@/lib/tests/registry";
import { AnswerMap } from "@/lib/types";
import { saveProgress, loadProgress, clearProgress, encodeResult } from "@/lib/results";
import { loadSchoolMode } from "@/lib/settings";
import { recordTestComplete } from "@/lib/progress-game";

/** Brand-forward Kahoot-style tiles (5-point scale) */
const LIKERT = [
  { value: 1, label: "Strongly disagree", short: "No way", color: "#F9684D", shape: "triangle" as const },
  { value: 2, label: "Disagree", short: "Not really", color: "#F47A9E", shape: "diamond" as const },
  { value: 3, label: "Neutral", short: "In the middle", color: "#6B7280", shape: "circle" as const },
  { value: 4, label: "Agree", short: "Kinda yes", color: "#07AD9C", shape: "square" as const },
  { value: 5, label: "Strongly agree", short: "Yes!", color: "#0795EA", shape: "hex" as const },
];

function ShapeIcon({ shape }: { shape: (typeof LIKERT)[number]["shape"] }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", "aria-hidden": true as const };
  switch (shape) {
    case "triangle":
      return (
        <svg {...common}>
          <path d="M12 4 L22 20 H2 Z" fill="currentColor" />
        </svg>
      );
    case "diamond":
      return (
        <svg {...common}>
          <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="currentColor" />
        </svg>
      );
    case "circle":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" fill="currentColor" />
        </svg>
      );
    case "square":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" />
        </svg>
      );
    case "hex":
      return (
        <svg {...common}>
          <path d="M12 2 L20 7 V17 L12 22 L4 17 V7 Z" fill="currentColor" />
        </svg>
      );
  }
}

function getInitialState(slug: string) {
  const saved = loadProgress(slug);
  if (saved) {
    return {
      answers: saved.answers,
      startIndex: (() => {
        const test = getTest(slug);
        const firstUnanswered = test?.questions.findIndex((q) => saved.answers[q.id] === undefined);
        return firstUnanswered !== undefined && firstUnanswered >= 0 ? firstUnanswered : 0;
      })(),
    };
  }
  return { answers: {} as AnswerMap, startIndex: 0 };
}

export function TakeTestClient() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const test = getTest(slug);

  const initialState = getInitialState(slug);
  const [currentIndex, setCurrentIndex] = useState(initialState.startIndex);
  const [answers, setAnswers] = useState<AnswerMap>(initialState.answers);
  const [transitioning, setTransitioning] = useState(false);
  const [flashValue, setFlashValue] = useState<number | null>(null);
  const [showMilestone, setShowMilestone] = useState<string | null>(null);
  const [numericInput, setNumericInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [schoolMode, setSchoolMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSchoolMode(loadSchoolMode());
  }, []);

  useEffect(() => {
    if (Object.keys(answers).length > 0) saveProgress(slug, answers);
  }, [answers, slug]);

  useEffect(() => {
    if (test?.questions[currentIndex]?.type === "numeric" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentIndex, test]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!test) return;
      const q = test.questions[currentIndex];
      if (!q) return;
      if (q.type === "likert") {
        const num = parseInt(e.key);
        if (num >= 1 && num <= 5) handleAnswer(num);
      } else if (q.type === "numeric") {
        if (e.key === "Enter" && numericInput.trim()) handleNumericSubmit();
      }
      if (e.key === "ArrowLeft" && currentIndex > 0) handleBack();
    },
    [currentIndex, test, numericInput, answers] // eslint-disable-line
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!test) {
    return (
      <div className="test-shell">
        <h1 className="font-display" style={{ fontSize: "1.5rem", marginBottom: 12 }}>
          Test not found
        </h1>
        <Link href="/tests" className="text-link">
          Browse all tests
        </Link>
      </div>
    );
  }

  const totalQuestions = test.questions.length;
  const question = test.questions[currentIndex];
  const progress = Math.round(((currentIndex + (answers[question.id] !== undefined ? 1 : 0)) / totalQuestions) * 100);
  const answeredCount = Object.keys(answers).length;

  function handleAnswer(value: number) {
    if (transitioning) return;
    setTransitioning(true);
    setFlashValue(value);
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
    const newIndex = currentIndex + 1;
    const milestones = [0.25, 0.5, 0.75];
    const currentPct = currentIndex / totalQuestions;
    const newPct = newIndex / totalQuestions;
    const crossedMilestone = milestones.find((m) => currentPct < m && newPct >= m);
    if (crossedMilestone) {
      const msgs: Record<string, string> = {
        "0.25": "Quarter done. Keep going!",
        "0.5": "Halfway there!",
        "0.75": "Almost finished!",
      };
      setShowMilestone(msgs[String(crossedMilestone)]);
    }
    setTimeout(() => {
      setFlashValue(null);
      setTransitioning(false);
      if (newIndex >= totalQuestions) finishTest();
      else setCurrentIndex(newIndex);
    }, 280);
  }

  function handleNumericSubmit() {
    if (transitioning || submitted) return;
    const val = numericInput.trim();
    if (!val) return;
    let numericValue: number;
    if (question.id === "crt_06") {
      numericValue = val.toLowerCase() === "emily" ? -1 : parseInt(val) || 0;
    } else {
      numericValue = parseInt(val);
      if (isNaN(numericValue)) return;
    }
    setSubmitted(true);
    setTransitioning(true);
    setAnswers((prev) => ({ ...prev, [question.id]: numericValue }));
    const newIndex = currentIndex + 1;
    setTimeout(() => {
      setTransitioning(false);
      setSubmitted(false);
      setNumericInput("");
      if (newIndex >= totalQuestions) finishTest();
      else setCurrentIndex(newIndex);
    }, 250);
  }

  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setNumericInput("");
      setSubmitted(false);
      setFlashValue(null);
    }
  }

  function finishTest() {
    if (!test) return;
    const { result, extras } = scoreTest(test, answers);
    const encoded = encodeResult({ ...result, completedAt: Date.now() }, extras);
    const label =
      typeof extras?.label === "string"
        ? extras.label
        : undefined;
    recordTestComplete({
      slug: test.slug,
      typeLabel: label,
      category: test.category,
    });
    clearProgress(slug);
    router.push(`/test/${slug}/results?r=${encodeURIComponent(encoded)}`);
  }

  const isNumeric = question.type === "numeric";
  const qNumber = currentIndex + 1;
  const leftCount = totalQuestions - currentIndex;
  let promptText = question.text;
  if (schoolMode) {
    promptText = promptText
      .replace(/\bcrushes\b/gi, "friends")
      .replace(/\bcrush\b/gi, "friend")
      .replace(/\bromantic\b/gi, "close")
      .replace(/\bdating\b/gi, "hanging out");
  }

  return (
    <div className="kahoot-shell">
      <p className="kahoot-privacy">
        Private: answers stay on this device. Nothing is uploaded.
        {schoolMode ? " · School mode on (friendship wording)." : ""}
      </p>
      {/* Top bar */}
      <header className="kahoot-top">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentIndex === 0}
          className="kahoot-back"
        >
          Back
        </button>
        <div className="kahoot-progress-wrap" aria-hidden="true">
          <div className="kahoot-progress-fill" style={{ width: `${Math.min(100, progress)}%` }} />
        </div>
        <span className="kahoot-count">
          {leftCount}
          <span className="kahoot-count-total"> left</span>
        </span>
      </header>

      {showMilestone && (
        <div className="kahoot-milestone">
          <span>{showMilestone}</span>
          <button type="button" onClick={() => setShowMilestone(null)} className="kahoot-milestone-x">
            OK
          </button>
        </div>
      )}

      {/* Question board */}
      <section className="kahoot-board" aria-live="polite">
        <p className="kahoot-q-label">
          Question {qNumber} of {totalQuestions}
        </p>
        <h1 key={question.id} className="kahoot-prompt">
          {promptText}
        </h1>
      </section>

      {/* Answers */}
      <section className="kahoot-answers">
        {isNumeric ? (
          <div className="kahoot-numeric">
            <label className="kahoot-numeric-label" htmlFor="numeric-answer">
              Type your answer
            </label>
            <input
              id="numeric-answer"
              ref={inputRef}
              type={question.id === "crt_06" ? "text" : "number"}
              value={numericInput}
              onChange={(e) => setNumericInput(e.target.value)}
              placeholder={question.id === "crt_06" ? "Name or number" : "Number"}
              className="kahoot-numeric-input"
            />
            <button
              type="button"
              onClick={handleNumericSubmit}
              disabled={!numericInput.trim() || transitioning}
              className="kahoot-numeric-submit"
            >
              Lock in
            </button>
          </div>
        ) : (
          <div className="kahoot-grid" role="group" aria-label="Choose how much you agree">
            {LIKERT.map((opt) => {
              const isFlash = flashValue === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleAnswer(opt.value)}
                  disabled={transitioning}
                  className={`kahoot-tile${isFlash ? " is-flash" : ""}`}
                  style={{ backgroundColor: opt.color }}
                  aria-label={`${opt.value}: ${opt.label}`}
                >
                  <span className="kahoot-tile-shape">
                    <ShapeIcon shape={opt.shape} />
                  </span>
                  <span className="kahoot-tile-text">
                    <span className="kahoot-tile-short">{opt.short}</span>
                    <span className="kahoot-tile-full">{opt.label}</span>
                  </span>
                  <span className="kahoot-tile-key">{opt.value}</span>
                </button>
              );
            })}
          </div>
        )}
      </section>

      <footer className="kahoot-foot">
        <span className="kahoot-foot-title">{test.title}</span>
        <span className="kahoot-foot-hint">
          {isNumeric ? "Enter to submit" : "Tap a color · keys 1-5"}
        </span>
      </footer>
    </div>
  );
}
