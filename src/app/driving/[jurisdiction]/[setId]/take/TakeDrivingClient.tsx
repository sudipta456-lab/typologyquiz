"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { getJurisdiction } from "@/lib/driving/jurisdictions";
import {
  TOPIC_META,
  type DrivingAnswerMap,
  type DrivingTestSet,
} from "@/lib/driving/types";
import { scoreDrivingSet } from "@/lib/driving/score";
import { recordAttempt } from "@/lib/driving/progress";
import { buildWeakSpotSet, recordOutcomes } from "@/lib/driving/adaptive";
import { encodeDrivingResult } from "@/lib/driving/encode";
import { questionChallengeText } from "@/lib/driving/share";
import { shareDrivingText } from "@/components/DrivingShareBlock";
import { useSiteOrigin } from "@/lib/use-site-origin";

const LETTERS = ["A", "B", "C", "D", "E", "F"];
const WEAK_SPOTS_ID = "weak-spots";

const CORRECT = "#07ad9c";
const WRONG = "#f9684d";
const NEUTRAL = "#242a3b";

interface Saved {
  answers: DrivingAnswerMap;
  index: number;
}

function storageKey(jurisdictionSlug: string, setId: string): string {
  return `tq_driving_take_v1:${jurisdictionSlug}:${setId}`;
}

function loadSaved(key: string): Saved | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;
    const rec = parsed as { answers?: unknown; index?: unknown };
    if (typeof rec.answers !== "object" || rec.answers === null) return null;
    const answers: DrivingAnswerMap = {};
    for (const [id, v] of Object.entries(rec.answers as Record<string, unknown>)) {
      if (typeof v === "number") answers[id] = v;
    }
    return { answers, index: typeof rec.index === "number" ? rec.index : 0 };
  } catch {
    return null;
  }
}

export function TakeDrivingClient() {
  const params = useParams();
  const router = useRouter();
  const jurisdictionSlug = typeof params.jurisdiction === "string" ? params.jurisdiction : "";
  const setId = typeof params.setId === "string" ? params.setId : "";
  const jurisdiction = getJurisdiction(jurisdictionSlug);
  const isWeakSpots = setId === WEAK_SPOTS_ID;
  const staticSet = jurisdiction?.sets.find((s) => s.id === setId);

  const [answers, setAnswers] = useState<DrivingAnswerMap>({});
  const [index, setIndex] = useState(0);
  const [builtSet, setBuiltSet] = useState<DrivingTestSet | null>(null);
  // Everything personal - saved answers and the weak-spot drill itself - lives
  // in localStorage, which the static export can't see at build time. Nothing
  // touches storage until after mount so the prerendered HTML and the first
  // client render agree.
  const [hydrated, setHydrated] = useState(false);
  const [shareStatus, setShareStatus] = useState<string | null>(null);
  const finishingRef = useRef(false);
  const origin = useSiteOrigin();

  useEffect(() => {
    if (!jurisdiction) {
      setHydrated(true);
      return;
    }
    const active = isWeakSpots ? buildWeakSpotSet(jurisdiction) : staticSet ?? null;
    if (isWeakSpots) setBuiltSet(active);
    if (active) {
      const saved = loadSaved(storageKey(jurisdiction.slug, active.id));
      if (saved) {
        setAnswers(saved.answers);
        setIndex(saved.index);
      }
    }
    setHydrated(true);
  }, [jurisdiction, isWeakSpots, staticSet]);

  const set = isWeakSpots ? builtSet : staticSet ?? null;
  const key = jurisdiction && set ? storageKey(jurisdiction.slug, set.id) : "";

  useEffect(() => {
    if (!hydrated || !key) return;
    if (Object.keys(answers).length === 0) return;
    try {
      localStorage.setItem(key, JSON.stringify({ answers, index } satisfies Saved));
    } catch {
      /* storage full or blocked - resuming is a nicety, never block the test */
    }
  }, [answers, index, hydrated, key]);

  const total = set ? set.questions.length : 0;
  const safeIndex = Math.min(index, Math.max(0, total - 1));
  const question = set ? set.questions[safeIndex] : undefined;
  const selected = question ? answers[question.id] : undefined;
  const revealed = selected !== undefined;

  const finish = useCallback(
    (finalAnswers: DrivingAnswerMap) => {
      if (!jurisdiction || !set || finishingRef.current) return;
      finishingRef.current = true;
      const result = scoreDrivingSet(jurisdiction, set, finalAnswers);

      // Feed the adaptive engine on every completion, drills included - that's
      // what keeps the weak-spot set honest.
      const wrong = new Set(result.wrongIds);
      const rightIds = set.questions.map((q) => q.id).filter((id) => !wrong.has(id));
      recordOutcomes(jurisdiction.slug, result.wrongIds, rightIds);

      // The weak-spot drill is rebuilt every time, so it isn't one of the
      // numbered sets and must not count toward "sets passed".
      if (set.id !== WEAK_SPOTS_ID) recordAttempt(result);

      try {
        localStorage.removeItem(storageKey(jurisdiction.slug, set.id));
      } catch {
        /* ignore */
      }
      const encoded = encodeDrivingResult(result);
      router.push(
        `/driving/${jurisdiction.slug}/${set.id}/results/?r=${encodeURIComponent(encoded)}`
      );
    },
    [jurisdiction, set, router]
  );

  const handleSelect = useCallback(
    (choiceIndex: number) => {
      if (!question || answers[question.id] !== undefined) return;
      setAnswers((prev) => ({ ...prev, [question.id]: choiceIndex }));
    },
    [question, answers]
  );

  const handleNext = useCallback(() => {
    if (!question) return;
    if (answers[question.id] === undefined) return;
    if (safeIndex + 1 >= total) finish(answers);
    else setIndex(safeIndex + 1);
  }, [question, answers, safeIndex, total, finish]);

  const handleBack = useCallback(() => {
    if (safeIndex > 0) setIndex(safeIndex - 1);
  }, [safeIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!question) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === "ArrowLeft") {
        handleBack();
        return;
      }

      if (answers[question.id] === undefined) {
        const numeric = Number.parseInt(e.key, 10);
        if (numeric >= 1 && numeric <= question.choices.length) {
          handleSelect(numeric - 1);
          return;
        }
        const letter = LETTERS.indexOf(e.key.toUpperCase());
        if (letter >= 0 && letter < question.choices.length) {
          handleSelect(letter);
        }
        return;
      }

      if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    },
    [question, answers, handleSelect, handleNext, handleBack]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!jurisdiction || (!isWeakSpots && !staticSet)) {
    return (
      <div className="test-shell">
        <h1 className="font-display" style={{ fontSize: "1.5rem", marginBottom: 12 }}>
          Practice set not found
        </h1>
        <Link href="/driving/" className="text-link">
          Browse driving practice tests
        </Link>
      </div>
    );
  }

  if (!hydrated) {
    return (
      <div className="kahoot-shell">
        <section className="kahoot-board">
          <p className="kahoot-q-label">{isWeakSpots ? "Your weak spots" : staticSet?.title}</p>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.6)" }}>
            {isWeakSpots ? "Building your drill…" : "Loading…"}
          </p>
        </section>
      </div>
    );
  }

  // Weak-spot drills only exist once there's something to drill.
  if (!set || !question) {
    return (
      <div className="test-shell">
        <h1 className="font-display" style={{ fontSize: "1.5rem", marginBottom: 10 }}>
          Nothing to drill yet
        </h1>
        <p className="section-lead">
          Your weak-spot set is built from questions you&apos;ve actually missed. Finish one
          of the numbered {jurisdiction.name} sets and it will fill itself in.
        </p>
        <Link href={`/driving/${jurisdiction.slug}/`} className="btn-primary">
          Pick a {jurisdiction.name} set
        </Link>
      </div>
    );
  }

  const answeredCount = set.questions.filter((q) => answers[q.id] !== undefined).length;
  const progress = Math.round((answeredCount / Math.max(1, total)) * 100);
  const leftCount = Math.max(0, total - answeredCount);
  const isCorrect = selected === question.correctIndex;
  const isLast = safeIndex + 1 >= total;
  const topic = TOPIC_META[question.topic];

  return (
    <div className="kahoot-shell">
      <p className="kahoot-privacy">
        Practice only · not an official test. Answers stay on this device.
      </p>

      <header className="kahoot-top">
        <button
          type="button"
          onClick={handleBack}
          disabled={safeIndex === 0}
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

      <section className="kahoot-board" aria-live="polite">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 10,
          }}
        >
          <span
            style={{
              padding: "0.2rem 0.5rem",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.22)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.66rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {topic.short}
          </span>
          {question.commonlyMissed && (
            <span
              style={{
                padding: "0.2rem 0.5rem",
                borderRadius: 999,
                background: "#f4b400",
                color: "#221a00",
                fontFamily: "var(--font-mono)",
                fontSize: "0.66rem",
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              ⭐ Commonly missed — read carefully
            </span>
          )}
        </div>

        <p className="kahoot-q-label">
          Question {safeIndex + 1} of {total}
        </p>
        <h1
          key={question.id}
          className="kahoot-prompt"
          style={{ fontSize: "clamp(1.15rem, 3.8vw, 1.55rem)" }}
        >
          {question.question}
        </h1>
      </section>

      <section className="kahoot-answers">
        <div className="kahoot-grid" role="group" aria-label="Choose one answer">
          {question.choices.map((choice, i) => {
            const isThis = selected === i;
            const isRight = i === question.correctIndex;
            let background = NEUTRAL;
            let opacity = 1;
            if (revealed) {
              if (isRight) background = CORRECT;
              else if (isThis) background = WRONG;
              else opacity = 0.45;
            }
            return (
              <button
                key={i}
                type="button"
                onClick={() => handleSelect(i)}
                disabled={revealed}
                className="kahoot-tile"
                style={{
                  backgroundColor: background,
                  opacity,
                  border: revealed && isThis ? "2px solid #fff" : "2px solid rgba(255,255,255,0.12)",
                  cursor: revealed ? "default" : "pointer",
                }}
                aria-label={`${LETTERS[i]}: ${choice}`}
              >
                <span className="kahoot-tile-shape" style={{ fontWeight: 800, fontSize: "1rem" }}>
                  {LETTERS[i]}
                </span>
                <span
                  className="kahoot-tile-text"
                  style={{ fontSize: "0.95rem", fontWeight: 600, lineHeight: 1.35 }}
                >
                  {choice}
                </span>
                {revealed && (isRight || isThis) && (
                  <span className="kahoot-tile-key" aria-hidden="true">
                    {isRight ? "✓" : "✕"}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {revealed && (
          <div
            role="status"
            aria-live="polite"
            style={{
              marginTop: "0.9rem",
              padding: "0.9rem 1rem",
              borderRadius: 12,
              background: "#1c2030",
              borderLeft: `4px solid ${isCorrect ? CORRECT : WRONG}`,
            }}
          >
            <p
              style={{
                margin: "0 0 0.45rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: isCorrect ? CORRECT : WRONG,
              }}
            >
              {isCorrect
                ? "Correct"
                : `Not quite — the answer is ${LETTERS[question.correctIndex]}`}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "0.92rem",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.86)",
              }}
            >
              {question.explanation}
            </p>

            {question.context && (
              <div
                style={{
                  marginTop: "0.8rem",
                  padding: "0.75rem 0.85rem",
                  background: "rgba(255,255,255,0.06)",
                  borderLeft: "3px solid #6cc2ff",
                  borderRadius: "0 8px 8px 0",
                }}
              >
                <p
                  style={{
                    margin: "0 0 0.35rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#6cc2ff",
                  }}
                >
                  The rule in context
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.88)",
                  }}
                >
                  {question.context}
                </p>
              </div>
            )}

            {question.trap && (
              <div
                style={{
                  marginTop: "0.7rem",
                  padding: "0.7rem 0.85rem",
                  background: "rgba(244,180,0,0.12)",
                  borderLeft: "3px solid #f4b400",
                  borderRadius: "0 8px 8px 0",
                }}
              >
                <p
                  style={{
                    margin: "0 0 0.3rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#f4b400",
                  }}
                >
                  Common mistake
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  {question.trap}
                </p>
              </div>
            )}

            {question.sourceUrl && (
              <a
                href={question.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "#6cc2ff",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
              >
                Read the official rule →
              </a>
            )}
            {question.sourceLabel && !question.sourceUrl && (
              <p
                style={{
                  margin: "0.5rem 0 0",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {question.sourceLabel}
              </p>
            )}

            {/* A hard question is the one thing people actually forward - the
                recipient can answer it in the chat before they ever click. */}
            {(question.commonlyMissed || !isCorrect) && (
              <div style={{ marginTop: "0.8rem" }}>
                <button
                  type="button"
                  onClick={async () => {
                    const url =
                      set.id === WEAK_SPOTS_ID
                        ? `${origin}/driving/${jurisdiction.slug}/`
                        : `${origin}/driving/${jurisdiction.slug}/${set.id}/take/`;
                    const outcome = await shareDrivingText(
                      "Try this driving question",
                      questionChallengeText(question, jurisdiction, url)
                    );
                    if (outcome === "shared") return;
                    setShareStatus(
                      outcome === "copied"
                        ? "Copied - paste it in any chat"
                        : "Couldn't copy on this browser"
                    );
                    setTimeout(() => setShareStatus(null), 2800);
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    minHeight: 40,
                    padding: "0.45rem 0.8rem",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.25)",
                    background: "transparent",
                    color: "rgba(255,255,255,0.85)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Send this stumper →
                </button>
                {shareStatus && (
                  <p
                    style={{
                      margin: "0.4rem 0 0",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "#6cc2ff",
                    }}
                  >
                    {shareStatus}
                  </p>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="kahoot-numeric-submit"
              style={{ width: "100%", marginTop: "0.85rem" }}
            >
              {isLast ? "See my results" : "Next question"}
            </button>
          </div>
        )}
      </section>

      <footer className="kahoot-foot">
        <span className="kahoot-foot-title">
          {jurisdiction.name} · {set.title}
        </span>
        <span className="kahoot-foot-hint">
          {revealed ? "Enter for next" : "Tap · keys 1-4 or A-D"}
        </span>
      </footer>
    </div>
  );
}
