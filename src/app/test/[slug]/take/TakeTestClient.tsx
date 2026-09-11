"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import { getTest, scoreTest } from "@/lib/tests/registry";
import { visibleQuestions } from "@/lib/tests/score-utils";
import { AnswerMap } from "@/lib/types";
import { saveProgress, loadProgress, clearProgress, encodeResult } from "@/lib/results";
import { AGREEMENT_OPTIONS, usesSchoolWording } from "@/lib/tests/assessment-evidence";
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
  const test = getTest(slug);
  const saved = test ? loadProgress(test, usesSchoolWording(test, loadSchoolMode()) ? "school" : "standard") : null;
  if (saved) {
    return {
      answers: saved.answers,
      startIndex: (() => {
        const test = getTest(slug);
        if (!test) return 0;
        // Resume against the branch-resolved list, not the raw question array.
        const live = visibleQuestions(test, saved.answers);
        const firstUnanswered = live.findIndex((q) => saved.answers[q.id] === undefined);
        return firstUnanswered >= 0 ? firstUnanswered : 0;
      })(),
    };
  }
  return { answers: {} as AnswerMap, startIndex: 0 };
}

const subscribeToHydration = () => () => {};

export function TakeTestClient() {
  // Read saved answers only after hydration so a returning player's first
  // client render agrees with the exported HTML.
  const hydrated = useSyncExternalStore(subscribeToHydration, () => true, () => false);
  return hydrated ? <TakeTestReady /> : <div className="section" role="status">Loading your quiz…</div>;
}

function TakeTestReady() {
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
  const [schoolMode] = useState(loadSchoolMode);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (test && Object.keys(answers).length > 0) saveProgress(test, answers, usesSchoolWording(test, schoolMode) ? "school" : "standard");
  }, [answers, test, schoolMode]);

  useEffect(() => {
    if (test?.questions[currentIndex]?.type === "numeric" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentIndex, test]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!test) return;
      const q = visibleQuestions(test, answers)[currentIndex];
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

  // Branch-resolved question list. Follow-up probes appear/disappear as their
  // trigger answers change, so length and index are both dynamic.
  const visible = visibleQuestions(test, answers);
  const totalQuestions = visible.length;
  // Going Back and changing an answer can collapse a branch and shrink the
  // list out from under currentIndex, so clamp rather than index out of range.
  const safeIndex = Math.min(currentIndex, Math.max(0, totalQuestions - 1));
  const question = visible[safeIndex];
  const progress = Math.round(((safeIndex + (question && answers[question.id] !== undefined ? 1 : 0)) / Math.max(1, totalQuestions)) * 100);
  const options = test.responseOptions ?? AGREEMENT_OPTIONS;

  function handleAnswer(value: number) {
    if (transitioning || !question || !test) return;
    setTransitioning(true);
    setFlashValue(value);
    const newAnswers: AnswerMap = { ...answers, [question.id]: value };
    setAnswers(newAnswers);
    // This answer may open or close a follow-up branch, so recompute the list
    // before deciding whether the quiz is finished.
    const nextVisible = visibleQuestions(test, newAnswers);
    const newIndex = safeIndex + 1;
    const milestones = [0.25, 0.5, 0.75];
    const currentPct = safeIndex / Math.max(1, nextVisible.length);
    const newPct = newIndex / Math.max(1, nextVisible.length);
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
      if (newIndex >= nextVisible.length) finishTest(newAnswers);
      else setCurrentIndex(newIndex);
    }, 280);
  }

  function handleNumericSubmit() {
    if (transitioning || submitted || !question || !test) return;
    const val = numericInput.trim();
    if (!val) return;
    let numericValue: number;
    if (question.id === "crt_06") {
      numericValue = val.toLowerCase() === "emily" ? -1 : 0;
    } else {
      numericValue = Number(val);
      if (!Number.isFinite(numericValue)) return;
    }
    setSubmitted(true);
    setTransitioning(true);
    const newAnswers: AnswerMap = { ...answers, [question.id]: numericValue };
    setAnswers(newAnswers);
    const nextVisible = visibleQuestions(test, newAnswers);
    const newIndex = safeIndex + 1;
    setTimeout(() => {
      setTransitioning(false);
      setSubmitted(false);
      setNumericInput("");
      if (newIndex >= nextVisible.length) finishTest(newAnswers);
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

  function finishTest(finalAnswers: AnswerMap = answers) {
    if (!test) return;
    let scored;
    try {
      scored = scoreTest(test, finalAnswers, usesSchoolWording(test, schoolMode) ? "school" : "standard");
    } catch {
      setError("Some answers are missing or invalid. Please review the questions before finishing.");
      const firstMissing = visibleQuestions(test, finalAnswers).findIndex(q => finalAnswers[q.id] === undefined);
      setCurrentIndex(Math.max(0, firstMissing));
      return;
    }
    const { result, extras } = scored;
    // Preserve the exact interpretation issued with this released version.
    const encoded = encodeResult(result, extras);
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
  if (usesSchoolWording(test, schoolMode)) {
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
        {usesSchoolWording(test, schoolMode) ? " · School mode on (friendship wording)." : ""}
      </p>
      {error && <p role="alert" className="assessment-error">{error}</p>}
      {test.instructions && <p className="assessment-instructions">{test.instructions}</p>}
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
          <div className={test.responseOptions ? "assessment-options" : "kahoot-grid"} role="group" aria-label={test.responseOptions ? "Choose your rating" : "Choose how much you agree"}>
            {options.map((option, index) => {
              const opt = { ...LIKERT[index], ...option };
              const isFlash = flashValue === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleAnswer(opt.value)}
                  disabled={transitioning}
                  className={`${test.responseOptions ? "assessment-option" : "kahoot-tile"}${opt.value === 3 ? " is-neutral" : ""}${isFlash ? " is-flash" : ""}`}
                  style={test.responseOptions ? undefined : { backgroundColor: opt.color }}
                  aria-label={`${opt.value}: ${opt.label}`}
                >
                  <span className="kahoot-tile-shape" hidden={!!test.responseOptions}>
                    <ShapeIcon shape={opt.shape} />
                  </span>
                  <span className="kahoot-tile-text">
                    {!test.responseOptions && <span className="kahoot-tile-short">{opt.short}</span>}
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
          {isNumeric ? "Enter to submit" : "Choose an answer · keys 1–5"}
        </span>
      </footer>
    </div>
  );
}
