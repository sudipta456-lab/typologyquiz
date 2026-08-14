"use client";

import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getJurisdiction } from "@/lib/driving/jurisdictions";
import {
  TOPIC_META,
  type DrivingAnswerMap,
  type DrivingTestSet,
} from "@/lib/driving/types";
import { scoreDrivingSet } from "@/lib/driving/score";
import { recordAttempt } from "@/lib/driving/progress";
import {
  buildRetryMissedSet,
  buildWeakSpotSet,
  recordOutcomes,
} from "@/lib/driving/adaptive";
import { parseShuffleSeed, seedToParam, shuffleDrivingSet } from "@/lib/driving/shuffle";
import { encodeDrivingResult } from "@/lib/driving/encode";
import { getExcerpt, getSnippet } from "@/lib/driving/excerpts";
import { questionChallengeText } from "@/lib/driving/share";
import { shareDrivingText } from "@/components/DrivingShareBlock";
import { ReportQuestionError } from "@/components/ReportQuestionError";
import { useSiteOrigin } from "@/lib/use-site-origin";

const LETTERS = ["A", "B", "C", "D", "E", "F"];
const WEAK_SPOTS_ID = "weak-spots";
const RETRY_MISSED_ID = "retry-missed";

const CORRECT = "#07ad9c";
const WRONG = "#f9684d";
const NEUTRAL = "#242a3b";

// Kahoot-style option tiles, matching the personality quizzes.
//
// The colours deliberately avoid teal and coral, which are reserved for the
// correct/wrong reveal - if an option were already green, "green means you got
// it right" would stop meaning anything.
const OPTION_STYLES = [
  { color: "#0795ea", shape: "triangle" as const },
  { color: "#a855f7", shape: "diamond" as const },
  { color: "#f5a524", shape: "circle" as const },
  { color: "#ec4899", shape: "square" as const },
  { color: "#14b8a6", shape: "hex" as const },
  { color: "#8b5cf6", shape: "circle" as const },
];

function ShapeIcon({ shape }: { shape: (typeof OPTION_STYLES)[number]["shape"] }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", "aria-hidden": true as const };
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

interface Saved {
  answers: DrivingAnswerMap;
  index: number;
}

/**
 * Saved answers are keyed by the SHUFFLE too. A shuffled retake is a different
 * paper - the indexes stored against a question no longer mean the same option
 * - so resuming one into the other would silently rewrite the learner's
 * answers. Different seed, different drawer.
 */
function storageKey(
  jurisdictionSlug: string,
  setId: string,
  seed: number | null
): string {
  const base = `tq_driving_take_v1:${jurisdictionSlug}:${setId}`;
  return seed === null ? base : `${base}:s${seedToParam(seed)}`;
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

function TakeDrivingInner() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const jurisdictionSlug = typeof params.jurisdiction === "string" ? params.jurisdiction : "";
  const setId = typeof params.setId === "string" ? params.setId : "";
  const jurisdiction = getJurisdiction(jurisdictionSlug);
  const isWeakSpots = setId === WEAK_SPOTS_ID;
  const isRetryMissed = setId === RETRY_MISSED_ID;
  const isSynthetic = isWeakSpots || isRetryMissed;
  const staticSet = jurisdiction?.sets.find((s) => s.id === setId);

  // A retake can be randomised: `?shuffle=<seed>` reorders the questions and the
  // options inside them. No param means the original order, so every existing
  // link and every first run is untouched.
  const seed = useMemo(
    () => parseShuffleSeed(searchParams.get("shuffle")),
    [searchParams]
  );
  // "Retry the ones you missed" carries its question ids in the URL, because
  // there is nowhere else to put them on a static site.
  const idsParam = searchParams.get("ids") ?? "";

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

    let base: DrivingTestSet | null;
    if (isWeakSpots) {
      base = buildWeakSpotSet(jurisdiction);
    } else if (isRetryMissed) {
      base = buildRetryMissedSet(
        jurisdiction,
        idsParam.split(",").filter((id) => id.length > 0)
      );
    } else {
      base = staticSet ?? null;
    }

    const active = base && seed !== null ? shuffleDrivingSet(base, seed) : base;
    setBuiltSet(active);

    if (active) {
      const saved = loadSaved(storageKey(jurisdiction.slug, active.id, seed));
      if (saved) {
        setAnswers(saved.answers);
        setIndex(saved.index);
      }
    }
    setHydrated(true);
  }, [jurisdiction, isWeakSpots, isRetryMissed, idsParam, staticSet, seed]);

  const set = builtSet;
  const key = jurisdiction && set ? storageKey(jurisdiction.slug, set.id, seed) : "";

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

      // The synthetic drills are rebuilt every time, so they aren't one of the
      // numbered sets and must not count toward "sets passed".
      if (set.id !== WEAK_SPOTS_ID && set.id !== RETRY_MISSED_ID) recordAttempt(result);

      try {
        if (key) localStorage.removeItem(key);
      } catch {
        /* ignore */
      }

      // The results page rebuilds this paper so the mistake review shows the
      // letters the learner actually saw. Both halves have to travel with the
      // score: the seed, and - for the drills, which aren't in the question
      // banks - the ids of the questions that were on it.
      const query = new URLSearchParams({ r: encodeDrivingResult(result) });
      if (seed !== null) query.set("shuffle", seedToParam(seed));
      if (isSynthetic) {
        query.set("ids", set.questions.map((q) => q.id).join(","));
      }
      router.push(`/driving/${jurisdiction.slug}/${set.id}/results/?${query.toString()}`);
    },
    [jurisdiction, set, router, key, seed, isSynthetic]
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

  if (!jurisdiction || (!isSynthetic && !staticSet)) {
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
          <p className="kahoot-q-label">
            {isWeakSpots
              ? "Your weak spots"
              : isRetryMissed
                ? "The ones you missed"
                : staticSet?.title}
          </p>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.6)" }}>
            {isSynthetic ? "Building your drill…" : "Loading…"}
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
          {isRetryMissed
            ? `This drill is built from the questions you got wrong on a specific attempt, and the link didn't carry any. Finish a ${jurisdiction.name} set and the button will appear on your results.`
            : `Your weak-spot set is built from questions you've actually missed. Finish one of the numbered ${jurisdiction.name} sets and it will fill itself in.`}
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
  // Official wording behind this rule, when we have a verified quote for it.
  const excerpt = getExcerpt(jurisdiction.slug, question.excerptKey);
  const snippet = getSnippet(jurisdiction.slug, question.excerptKey);
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
            const opt = OPTION_STYLES[i % OPTION_STYLES.length];

            // Before answering: the tile wears its own colour, like the quizzes.
            // After: the correct one goes teal and the one you picked (if wrong)
            // goes coral, and everything else fades back so the answer is the
            // only thing competing for attention.
            let background = opt.color;
            let opacity = 1;
            let transform = "none";
            if (revealed) {
              if (isRight) {
                background = CORRECT;
                transform = "scale(1.02)";
              } else if (isThis) {
                background = WRONG;
              } else {
                opacity = 0.32;
                background = NEUTRAL;
              }
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
                  transform,
                  border:
                    revealed && (isRight || isThis)
                      ? "2px solid rgba(255,255,255,0.85)"
                      : "2px solid rgba(255,255,255,0.12)",
                  cursor: revealed ? "default" : "pointer",
                  transition: "background-color 0.25s ease, opacity 0.25s ease, transform 0.25s ease",
                }}
                aria-label={`${LETTERS[i]}: ${choice}`}
              >
                <span
                  className="kahoot-tile-shape"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 800, fontSize: "0.95rem" }}
                >
                  <ShapeIcon shape={opt.shape} />
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

            {excerpt && (
              <blockquote
                style={{
                  margin: "14px 0 0",
                  padding: "12px 14px",
                  borderLeft: "3px solid rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 6,
                }}
              >
                <p
                  style={{
                    margin: "0 0 6px",
                    fontSize: "0.7rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontFamily: "IBM Plex Mono, ui-monospace, monospace",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  What the handbook says
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.92)",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{excerpt.quote}&rdquo;
                </p>
                {snippet && (
                  // The passage as it appears in the handbook, highlighted.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={snippet.src}
                    alt={`Highlighted passage from ${excerpt.source}, page ${snippet.page}`}
                    width={snippet.width}
                    height={snippet.height}
                    loading="lazy"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "auto",
                      marginTop: 10,
                      borderRadius: 4,
                      background: "#fff",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  />
                )}
                <cite
                  style={{
                    display: "block",
                    marginTop: 8,
                    fontSize: "0.75rem",
                    fontStyle: "normal",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {excerpt.source}
                  {excerpt.section ? ` - ${excerpt.section}` : ""}
                  {snippet ? ` (p. ${snippet.page})` : ""}
                </cite>
              </blockquote>
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

            {/* Quiet on purpose. A wrong answer key here could cost someone a
                real test, so there has to be a way to tell us - but it is not
                the thing to point at while they're mid-set. */}
            <div>
              <ReportQuestionError
                tone="dark"
                jurisdictionSlug={jurisdiction.slug}
                jurisdictionName={jurisdiction.name}
                setId={set.id}
                question={question}
              />
            </div>

            {/* A hard question is the one thing people actually forward - the
                recipient can answer it in the chat before they ever click. */}
            {(question.commonlyMissed || !isCorrect) && (
              <div style={{ marginTop: "0.8rem" }}>
                <button
                  type="button"
                  onClick={async () => {
                    const url = isSynthetic
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

/**
 * `useSearchParams` needs a Suspense boundary to be prerenderable: the static
 * export has no query string at build time, so this subtree is emitted as the
 * fallback and filled in on the client once the real URL is known.
 */
export function TakeDrivingClient() {
  return (
    <Suspense
      fallback={
        <div className="kahoot-shell">
          <section className="kahoot-board">
            <p style={{ margin: 0, color: "rgba(255,255,255,0.6)" }}>Loading…</p>
          </section>
        </div>
      }
    >
      <TakeDrivingInner />
    </Suspense>
  );
}
