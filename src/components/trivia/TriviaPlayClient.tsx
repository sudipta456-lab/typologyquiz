"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  bestStorageKey,
  buildDeferredAliasSet,
  buildMatchIndex,
  buildPrefixSet,
  decodeChallenge,
  encodeChallenge,
  estimateBeatsPercent,
  formatClock,
  formatTimeMs,
  loadBest,
  matchBuffer,
  normalizeAnswer,
  pruneBuffer,
  recordRun,
  sampleSubset,
  type ChallengePayload,
} from "@/lib/trivia/engine";
import {
  getAnswers,
  getPromptNames,
  getRunSize,
  getTriviaQuiz,
  TRIVIA_QUIZZES,
} from "@/lib/trivia/registry";
import type { TriviaAnswer, TriviaBest, TriviaOutcome, TriviaQuiz } from "@/lib/trivia/types";
import { USMap } from "./USMap";
import { CanadaMap } from "./CanadaMap";
import { useSiteOrigin } from "@/lib/use-site-origin";

type Phase = "ready" | "playing" | "done";

const TEAL = "var(--mark-teal)";
const CORAL = "var(--mark-coral)";

function subscribeReducedMotion(onChange: () => void): () => void {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

/** Seedless Fisher-Yates - the sudden-death prompt order. */
function shuffle<T>(items: readonly T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Personal bests live in localStorage, which React reads as an external
// store: snapshots are cached on the raw stored string so the reference stays
// stable between writes, and finishing a run dispatches BEST_EVENT to wake
// subscribers (the storage event covers other tabs).
const BEST_EVENT = "tq-trivia-best";
const bestCache = new Map<string, { raw: string | null; value: TriviaBest | null }>();

function readBestSnapshot(slug: string): TriviaBest | null {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(bestStorageKey(slug));
  } catch {
    raw = null;
  }
  const cached = bestCache.get(slug);
  if (cached && cached.raw === raw) return cached.value;
  const value = loadBest(slug);
  bestCache.set(slug, { raw, value });
  return value;
}

function subscribeBest(onChange: () => void): () => void {
  window.addEventListener("storage", onChange);
  window.addEventListener(BEST_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(BEST_EVENT, onChange);
  };
}

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through */
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

/**
 * Buckets answers by their group label (continent), preserving dataset
 * order. Ungrouped datasets come back as one unlabeled bucket.
 */
function groupAnswers(
  items: readonly TriviaAnswer[]
): { label: string; items: TriviaAnswer[] }[] {
  const order: string[] = [];
  const buckets = new Map<string, TriviaAnswer[]>();
  for (const a of items) {
    const label = a.group ?? "";
    const bucket = buckets.get(label);
    if (bucket === undefined) {
      buckets.set(label, [a]);
      order.push(label);
    } else {
      bucket.push(a);
    }
  }
  return order.map((label) => ({ label, items: buckets.get(label) ?? [] }));
}

const OUTCOME_LINE: Record<TriviaOutcome, string> = {
  complete: "You got them all",
  time: "Time's up",
  gaveup: "Run ended",
  lives: "Out of lives",
};

interface RunResult {
  outcome: TriviaOutcome;
  score: number;
  timeUsedMs: number;
  best: TriviaBest;
  newBestScore: boolean;
  newBestTime: boolean;
}

function TriviaPlayInner({ slug }: { slug: string }) {
  const quiz = getTriviaQuiz(slug);
  const searchParams = useSearchParams();
  const origin = useSiteOrigin();
  const reducedMotion = useReducedMotion();

  // Everything below is unconditional hook order; quiz-not-found renders late.
  const fullAnswers = useMemo<readonly TriviaAnswer[]>(
    () => (quiz ? getAnswers(quiz) : []),
    [quiz]
  );
  // What THIS run plays against: the full (filtered) set, or a fresh random
  // sample drawn at start() for the random-subset quizzes.
  const [answers, setAnswers] = useState<readonly TriviaAnswer[]>(fullAnswers);
  const matchIndex = useMemo(() => buildMatchIndex(answers), [answers]);
  const prefixes = useMemo(() => buildPrefixSet(answers), [answers]);
  // Aliases that are strict prefixes of a different answer's alias (uk vs
  // ukraine). Empty for the original datasets; see handleInput.
  const deferredAliases = useMemo(() => buildDeferredAliasSet(answers), [answers]);
  const promptNames = useMemo(
    () => (quiz ? getPromptNames(quiz) : {}),
    [quiz]
  );
  const byId = useMemo(() => {
    const m = new Map<string, TriviaAnswer>();
    for (const a of answers) m.set(a.id, a);
    return m;
  }, [answers]);
  // Ordered group labels (continents), for the counter columns and the
  // grouped reveal on datasets that carry them.
  const groupLabels = useMemo(() => {
    const seen: string[] = [];
    for (const a of answers) {
      if (a.group !== undefined && !seen.includes(a.group)) seen.push(a.group);
    }
    return seen;
  }, [answers]);
  const hasHints = useMemo(() => answers.some((a) => a.hint !== undefined), [answers]);

  const [phase, setPhase] = useState<Phase>("ready");
  const [foundIds, setFoundIds] = useState<readonly string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [timeLeftMs, setTimeLeftMs] = useState(0);
  const [livesLeft, setLivesLeft] = useState(0);
  const [targetQueue, setTargetQueue] = useState<readonly string[]>([]);
  const [wrongFlashId, setWrongFlashId] = useState<string | null>(null);
  const [already, setAlready] = useState<string | null>(null);
  const [result, setResult] = useState<RunResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const foundSet = useMemo(() => new Set(foundIds), [foundIds]);
  const total = answers.length;

  // Refs that drive the clock without re-render churn.
  const endAtRef = useRef(0);
  const pausedAtRef = useRef<number | null>(null);
  const startedAtRef = useRef(0);
  const pausedTotalRef = useRef(0);
  const finishedRef = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Type-in continuation state. carry holds the alias that just fired so a
  // longer answer can grow out of it ("guinea" -> "guineabissau"); held is a
  // deferred short match ("uk") waiting to see if it becomes a longer one
  // ("ukraine") before it fires.
  const carryRef = useRef("");
  const heldRef = useRef<{ id: string; alias: string } | null>(null);
  const heldTimerRef = useRef<number | null>(null);

  const challenge: ChallengePayload | null = useMemo(
    () => decodeChallenge(searchParams.get("c")),
    [searchParams]
  );

  const best = useSyncExternalStore(
    subscribeBest,
    useCallback(() => (quiz ? readBestSnapshot(quiz.slug) : null), [quiz]),
    () => null
  );

  const totalLives = quiz?.modifiers?.suddenDeath
    ? 1
    : quiz?.modifiers?.lives ?? 0;

  const finishRun = useCallback(
    (outcome: TriviaOutcome, found: readonly string[]) => {
      if (!quiz || finishedRef.current) return;
      finishedRef.current = true;
      // A deferred short match (uk waiting on ukraine) was still typed - it
      // counts when the clock beats the hold timer.
      const held = heldRef.current;
      heldRef.current = null;
      if (heldTimerRef.current !== null) {
        window.clearTimeout(heldTimerRef.current);
        heldTimerRef.current = null;
      }
      const finalFound =
        held !== null && !found.includes(held.id) ? [...found, held.id] : found;
      if (finalFound !== found) setFoundIds(finalFound);
      const score = finalFound.length;
      const completedAll = score === total;
      const timeUsedMs = Math.max(
        0,
        Math.round(Date.now() - startedAtRef.current - pausedTotalRef.current)
      );
      const rec = recordRun(quiz.slug, score, timeUsedMs, completedAll);
      window.dispatchEvent(new Event(BEST_EVENT));
      setResult({
        outcome,
        score,
        timeUsedMs,
        best: rec.best,
        newBestScore: rec.newBestScore,
        newBestTime: rec.newBestTime,
      });
      setPhase("done");
    },
    [quiz, total]
  );

  // Keep a live ref of foundIds so the timer's finish sees the latest.
  const foundIdsRef = useRef(foundIds);
  useEffect(() => {
    foundIdsRef.current = foundIds;
  }, [foundIds]);

  // The clock. Ticks 5x a second, pauses while the tab is hidden.
  useEffect(() => {
    if (phase !== "playing" || !quiz) return;

    const tick = () => {
      if (pausedAtRef.current !== null) return;
      const left = endAtRef.current - Date.now();
      setTimeLeftMs(Math.max(0, left));
      if (left <= 0) finishRun("time", foundIdsRef.current);
    };
    const interval = window.setInterval(tick, 200);

    const onVisibility = () => {
      if (document.hidden) {
        if (pausedAtRef.current === null) pausedAtRef.current = Date.now();
      } else if (pausedAtRef.current !== null) {
        const pausedFor = Date.now() - pausedAtRef.current;
        endAtRef.current += pausedFor;
        pausedTotalRef.current += pausedFor;
        pausedAtRef.current = null;
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [phase, quiz, finishRun]);

  const start = useCallback(() => {
    if (!quiz) return;
    finishedRef.current = false;
    const subsetSize = quiz.modifiers?.randomSubset;
    const runAnswers =
      subsetSize !== undefined ? sampleSubset(fullAnswers, subsetSize) : fullAnswers;
    setAnswers(runAnswers);
    setFoundIds([]);
    foundIdsRef.current = [];
    setInputValue("");
    setAlready(null);
    setResult(null);
    setCopied(false);
    setLivesLeft(totalLives);
    setTargetQueue(shuffle(runAnswers.map((a) => a.id)));
    setWrongFlashId(null);
    carryRef.current = "";
    heldRef.current = null;
    if (heldTimerRef.current !== null) {
      window.clearTimeout(heldTimerRef.current);
      heldTimerRef.current = null;
    }
    startedAtRef.current = Date.now();
    pausedTotalRef.current = 0;
    pausedAtRef.current = null;
    endAtRef.current = Date.now() + quiz.timerSeconds * 1000;
    setTimeLeftMs(quiz.timerSeconds * 1000);
    setPhase("playing");
  }, [quiz, fullAnswers, totalLives]);

  // Focus the input once the play screen exists.
  useEffect(() => {
    if (phase === "playing" && quiz?.mode === "typein") inputRef.current?.focus();
  }, [phase, quiz]);

  // Registers a found answer. Reads and writes foundIdsRef directly so the
  // deferred-match timer (which fires between renders) can never act on a
  // stale list.
  const registerHit = useCallback(
    (id: string) => {
      if (foundIdsRef.current.includes(id)) return;
      const nextFound = [...foundIdsRef.current, id];
      foundIdsRef.current = nextFound;
      setFoundIds(nextFound);
      if (nextFound.length === answers.length) finishRun("complete", nextFound);
    },
    [answers.length, finishRun]
  );

  const handleInput = useCallback(
    (raw: string) => {
      setInputValue(raw);
      setAlready(null);
      // Matching runs on carry + the pruned buffer: carry lets a longer
      // answer grow out of one that just fired ("guinea" -> "guineabissau"),
      // and pruning drops residue from an answer that already fired ("city"
      // after "quebec") so it never blocks the next one.
      const buffer = pruneBuffer(prefixes, carryRef.current + normalizeAnswer(raw));

      // A held short match (uk waiting on ukraine): if the buffer has moved
      // off it, the player went elsewhere - the short answer fires now.
      const held = heldRef.current;
      if (held !== null && !buffer.startsWith(held.alias)) {
        heldRef.current = null;
        if (heldTimerRef.current !== null) {
          window.clearTimeout(heldTimerRef.current);
          heldTimerRef.current = null;
        }
        carryRef.current = "";
        registerHit(held.id);
      }

      const match = matchBuffer(matchIndex, buffer, new Set(foundIdsRef.current));
      if (match.kind === "hit") {
        if (deferredAliases.has(buffer)) {
          // This exact buffer is also the start of a DIFFERENT answer
          // ("uk"/"ukraine"). Hold it briefly: keep typing toward the longer
          // one and only that fires; pause or move on and this one fires.
          heldRef.current = { id: match.id, alias: buffer };
          if (heldTimerRef.current !== null) window.clearTimeout(heldTimerRef.current);
          heldTimerRef.current = window.setTimeout(() => {
            const pending = heldRef.current;
            heldRef.current = null;
            heldTimerRef.current = null;
            if (pending !== null) {
              carryRef.current = pending.alias;
              setInputValue("");
              registerHit(pending.id);
            }
          }, 900);
          return;
        }
        // The buffer consumed any held prefix (typing "ukraine" absorbs the
        // held "uk"): the longer answer wins alone.
        if (heldRef.current !== null) {
          heldRef.current = null;
          if (heldTimerRef.current !== null) {
            window.clearTimeout(heldTimerRef.current);
            heldTimerRef.current = null;
          }
        }
        carryRef.current = buffer;
        setInputValue("");
        registerHit(match.id);
      } else if (match.kind === "already") {
        carryRef.current = buffer;
        setAlready(byId.get(match.id)?.display ?? null);
        setInputValue("");
      }
    },
    [prefixes, matchIndex, deferredAliases, byId, registerHit]
  );

  // Never leave a deferred-match timer running after unmount.
  useEffect(() => {
    return () => {
      if (heldTimerRef.current !== null) window.clearTimeout(heldTimerRef.current);
    };
  }, []);

  const currentTargetId = targetQueue.find((id) => !foundSet.has(id)) ?? null;

  const handleRegionClick = useCallback(
    (id: string) => {
      if (phase !== "playing" || quiz?.mode !== "choice" || !currentTargetId) return;
      if (foundSet.has(id)) return;
      if (id === currentTargetId) {
        const nextFound = [...foundIds, id];
        setFoundIds(nextFound);
        if (nextFound.length === answers.length) finishRun("complete", nextFound);
        return;
      }
      // Wrong region: flash it, spend a life.
      setWrongFlashId(id);
      window.setTimeout(() => setWrongFlashId((cur) => (cur === id ? null : cur)), 600);
      const next = livesLeft - 1;
      setLivesLeft(next);
      if (next <= 0) finishRun("lives", foundIdsRef.current);
    },
    [phase, quiz, currentTargetId, foundSet, foundIds, livesLeft, answers.length, finishRun]
  );

  const giveUp = useCallback(() => {
    finishRun("gaveup", foundIdsRef.current);
  }, [finishRun]);

  if (!quiz) {
    return (
      <div className="section">
        <h1 className="section-title">Quiz not found</h1>
        <p className="section-lead">
          That trivia quiz doesn&apos;t exist (yet).{" "}
          <Link href="/trivia/" className="text-link">
            Browse the trivia quizzes
          </Link>
        </p>
      </div>
    );
  }

  const isTypein = quiz.mode === "typein";
  const secondsLeft = Math.ceil(timeLeftMs / 1000);
  const lowTime = phase === "playing" && secondsLeft <= 30;
  const missing = answers.filter((a) => !foundSet.has(a.id));
  const revealMissing = phase === "done";
  // Subset runs (random draw, letter pages) highlight their targets on the
  // map; everything else stays idle and is left out of the coral reveal.
  const isSubsetRun =
    quiz.modifiers?.randomSubset !== undefined || quiz.filterLetter !== undefined;
  const mapProps = {
    found: foundSet,
    revealMissing,
    reducedMotion,
    wrongFlashId,
    interactive: !isTypein && phase === "playing",
    onRegionClick: handleRegionClick,
    activeIds: isSubsetRun ? new Set(answers.map((a) => a.id)) : null,
  };
  const mapEl = !quiz.showMap ? null : quiz.dataset === "us-states" ? (
    <USMap {...mapProps} />
  ) : quiz.dataset === "canada" ? (
    <CanadaMap {...mapProps} />
  ) : null;

  const monoSmall: React.CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: "0.78rem",
    color: "var(--ink-mute)",
  };

  // What the ready screen promises: the sampled size for random-subset
  // quizzes, the full set otherwise.
  const runSize = getRunSize(quiz);

  // ----- ready screen -----
  if (phase === "ready") {
    return (
      <div className="section" style={{ maxWidth: "46rem" }}>
        <p className="eyebrow" style={{ display: "block", marginBottom: 10 }}>
          Trivia
        </p>
        <h1 className="section-title" style={{ marginBottom: 10 }}>
          {quiz.title}
        </h1>
        <p className="section-lead" style={{ marginBottom: 18 }}>
          {quiz.hook}
        </p>

        <div className="test-meta-grid" style={{ marginBottom: 18 }}>
          <div className="test-meta-cell">
            <div className="test-meta-value">{runSize}</div>
            <div className="test-meta-label">Answers</div>
          </div>
          <div className="test-meta-cell">
            <div className="test-meta-value">{formatClock(quiz.timerSeconds)}</div>
            <div className="test-meta-label">On the clock</div>
          </div>
          {totalLives > 0 ? (
            <div className="test-meta-cell">
              <div className="test-meta-value">{totalLives}</div>
              <div className="test-meta-label">Lives</div>
            </div>
          ) : (
            <div className="test-meta-cell">
              <div className="test-meta-value">0</div>
              <div className="test-meta-label">Signups needed</div>
            </div>
          )}
        </div>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--ink-soft)", marginBottom: 8 }}>
          {isTypein
            ? "Type your answers - they register the moment the spelling matches, no Enter key needed. Spelling counts, capitals and spaces don't."
            : quiz.target === "capital"
              ? `We name a capital city, you click its ${quiz.dataset === "us-states" ? "state" : "province or territory"} on the map. ${totalLives} wrong click${totalLives === 1 ? "" : "s"} and the run ends.`
              : `We name a ${quiz.dataset === "us-states" ? "state" : "province or territory"}, you click it on the map. ${totalLives} wrong click${totalLives === 1 ? "" : "s"} and the run ends.`}
        </p>

        {quiz.caveat !== undefined && (
          <p style={{ ...monoSmall, margin: "8px 0 0", lineHeight: 1.55 }}>{quiz.caveat}</p>
        )}

        {challenge && (
          <p
            style={{
              margin: "12px 0 0",
              padding: "0.7rem 0.9rem",
              border: "1px solid var(--line)",
              borderLeft: `4px solid ${TEAL}`,
              borderRadius: 8,
              fontSize: "0.92rem",
            }}
          >
            A friend sent you this challenge: they scored{" "}
            <strong>
              {challenge.score}/{runSize}
            </strong>{" "}
            in {formatTimeMs(challenge.timeMs)}. Beat that.
          </p>
        )}

        {best && best.bestScore > 0 && (
          <p style={{ ...monoSmall, margin: "12px 0 0" }}>
            Your best: {best.bestScore}/{runSize}
            {best.bestTimeMs !== undefined
              ? ` · fastest full run ${formatTimeMs(best.bestTimeMs)}`
              : ""}
          </p>
        )}

        <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button type="button" className="btn-primary" onClick={start} autoFocus>
            Start the clock
          </button>
          <Link href="/trivia/" className="text-link" style={{ alignSelf: "center" }}>
            All trivia quizzes
          </Link>
        </div>
      </div>
    );
  }

  // ----- playing + done -----
  return (
    <div className="section" style={{ maxWidth: "52rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
          marginBottom: 12,
        }}
      >
        <h1
          className="font-display"
          style={{ fontSize: "1.35rem", margin: 0, minWidth: 0 }}
        >
          {quiz.title}
        </h1>
        <div style={{ display: "flex", gap: 16, alignItems: "baseline" }}>
          {totalLives > 0 && phase === "playing" && (
            <span style={{ ...monoSmall, fontWeight: 700 }} aria-live="polite">
              Lives: {livesLeft}/{totalLives}
            </span>
          )}
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: "1.15rem",
              fontVariantNumeric: "tabular-nums",
              color: lowTime ? CORAL : "var(--ink)",
            }}
            aria-label={`Time left: ${formatClock(secondsLeft)}`}
          >
            {phase === "done" ? formatTimeMs(result?.timeUsedMs ?? 0) : formatClock(secondsLeft)}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: "1.15rem",
              fontVariantNumeric: "tabular-nums",
            }}
            aria-live="polite"
          >
            {foundIds.length}/{total}
          </span>
        </div>
      </div>

      {phase === "playing" && isTypein && (
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ marginBottom: 12 }}
        >
          <label htmlFor="trivia-answer" className="sr-only" style={{ position: "absolute", left: -9999 }}>
            Type an answer
          </label>
          <input
            id="trivia-answer"
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => handleInput(e.target.value)}
            placeholder={quiz.target === "capital" ? "Type a capital city…" : "Start typing…"}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            enterKeyHint="done"
            style={{
              width: "100%",
              padding: "0.85rem 1rem",
              fontSize: "1.05rem",
              fontFamily: "var(--font-sans)",
              color: "var(--ink)",
              background: "var(--paper)",
              border: "2px solid var(--line-strong)",
              borderRadius: 10,
            }}
          />
          <p style={{ ...monoSmall, margin: "6px 2px 0", minHeight: "1.2em" }} aria-live="polite">
            {already ? `Already found: ${already}` : "Answers register as you type - no Enter needed."}
          </p>
        </form>
      )}

      {phase === "playing" && !isTypein && currentTargetId && (
        <p
          aria-live="polite"
          style={{
            margin: "0 0 12px",
            fontSize: "1.1rem",
            fontWeight: 600,
          }}
        >
          {quiz.target === "capital" ? "Whose capital is" : "Find"}:{" "}
          <span className="font-display" style={{ fontSize: "1.3rem" }}>
            {promptNames[currentTargetId]}
          </span>
        </p>
      )}

      {mapEl !== null && (
        <div style={{ border: "1px solid var(--line)", borderRadius: 12, padding: 10, marginBottom: 14 }}>
          {mapEl}
        </div>
      )}

      {/* Continent columns stand in for the map on the world quizzes. */}
      {groupLabels.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 130px), 1fr))",
            gap: 8,
            marginBottom: 14,
          }}
        >
          {groupLabels.map((label) => {
            const inGroup = answers.filter((a) => a.group === label);
            const foundInGroup = inGroup.filter((a) => foundSet.has(a.id)).length;
            const done = foundInGroup === inGroup.length;
            return (
              <div
                key={label}
                style={{
                  border: `1px solid ${done ? TEAL : "var(--line)"}`,
                  borderRadius: 10,
                  padding: "0.55rem 0.7rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    fontVariantNumeric: "tabular-nums",
                  }}
                  aria-live="polite"
                >
                  {foundInGroup}/{inGroup.length}
                </div>
                <div style={{ ...monoSmall, fontSize: "0.68rem" }}>{label}</div>
              </div>
            );
          })}
        </div>
      )}

      {/* Symbol hints for the periodic quiz, off until asked for. */}
      {hasHints && phase === "playing" && (
        <div style={{ marginBottom: 14 }}>
          <button
            type="button"
            onClick={() => setShowHints((v) => !v)}
            style={{
              padding: "0.4rem 0.8rem",
              borderRadius: 8,
              border: "1px solid var(--line)",
              background: "transparent",
              color: "var(--ink-mute)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
            aria-pressed={showHints}
          >
            {showHints ? "Hide symbols" : "Show symbols"}
          </button>
          {showHints && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
              {answers.map((a) => (
                <span
                  key={a.id}
                  style={{
                    padding: "0.25rem 0.6rem",
                    borderRadius: 999,
                    border: `1px solid ${foundSet.has(a.id) ? TEAL : "var(--line)"}`,
                    color: foundSet.has(a.id) ? "var(--ink)" : "var(--ink-mute)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                  }}
                >
                  {a.hint}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {phase === "playing" && (
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
          <button
            type="button"
            onClick={giveUp}
            style={{
              padding: "0.5rem 0.9rem",
              borderRadius: 8,
              border: "1px solid var(--line)",
              background: "transparent",
              color: "var(--ink-mute)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {isTypein ? "Give up and reveal" : "End the run"}
          </button>
          <span style={monoSmall}>Nothing leaves this device until you share it.</span>
        </div>
      )}

      {/* Found so far (play) / full reveal (done) */}
      {foundIds.length > 0 && phase === "playing" && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {foundIds.map((id) => (
            <span
              key={id}
              style={{
                padding: "0.25rem 0.6rem",
                borderRadius: 999,
                border: `1px solid ${TEAL}`,
                color: "var(--ink)",
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              {byId.get(id)?.display ?? id}
            </span>
          ))}
        </div>
      )}

      {phase === "done" && result && (
        <ResultsPanel
          quiz={quiz}
          result={result}
          total={total}
          missing={missing}
          challenge={challenge}
          origin={origin}
          copied={copied}
          setCopied={setCopied}
          onReplay={start}
        />
      )}
    </div>
  );
}

function ResultsPanel({
  quiz,
  result,
  total,
  missing,
  challenge,
  origin,
  copied,
  setCopied,
  onReplay,
}: {
  quiz: TriviaQuiz;
  result: RunResult;
  total: number;
  missing: readonly TriviaAnswer[];
  challenge: ChallengePayload | null;
  origin: string;
  copied: boolean;
  setCopied: (v: boolean) => void;
  onReplay: () => void;
}) {
  const beats = estimateBeatsPercent(quiz, result.score, total);
  const challengeUrl = `${origin}/trivia/${quiz.slug}/?c=${encodeChallenge({
    score: result.score,
    timeMs: result.timeUsedMs,
  })}`;
  const shareText = `I scored ${result.score}/${total} on "${quiz.title}" in ${formatTimeMs(
    result.timeUsedMs
  )}. Beat that: ${challengeUrl}`;

  let versus: string | null = null;
  if (challenge) {
    if (result.score > challenge.score) versus = `You beat your friend's ${challenge.score}/${total}. Bragging rights are yours.`;
    else if (result.score < challenge.score) versus = `Your friend's ${challenge.score}/${total} stands. Rematch?`;
    else if (result.timeUsedMs < challenge.timeMs)
      versus = `Same score, but you were faster (${formatTimeMs(result.timeUsedMs)} vs ${formatTimeMs(challenge.timeMs)}). That counts.`;
    else if (result.timeUsedMs > challenge.timeMs)
      versus = `Same score, but they were faster (${formatTimeMs(challenge.timeMs)} vs ${formatTimeMs(result.timeUsedMs)}).`;
    else versus = "Dead tie. Score and time. Spooky.";
  }

  async function handleCopyChallenge() {
    const ok = await copyText(shareText);
    setCopied(ok);
    if (ok) window.setTimeout(() => setCopied(false), 2500);
  }

  async function handleNativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title: quiz.title, text: shareText, url: challengeUrl });
        return;
      } catch {
        /* cancelled - fall through to copy */
      }
    }
    void handleCopyChallenge();
  }

  const related = quiz.related
    .map((slug) => TRIVIA_QUIZZES.find((q) => q.slug === slug))
    .filter((q): q is TriviaQuiz => q !== undefined);

  return (
    <div style={{ marginTop: 4 }}>
      <div
        style={{
          border: "1px solid var(--line)",
          borderLeft: `4px solid ${result.outcome === "complete" ? TEAL : CORAL}`,
          borderRadius: 10,
          padding: "1rem 1.1rem",
          marginBottom: 16,
        }}
      >
        <p
          style={{
            margin: "0 0 4px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "var(--ink-mute)",
          }}
        >
          {OUTCOME_LINE[result.outcome]}
        </p>
        <p className="font-display" style={{ margin: 0, fontSize: "1.8rem" }}>
          {result.score}/{total}
          <span style={{ fontSize: "1rem", color: "var(--ink-mute)", marginLeft: 10 }}>
            in {formatTimeMs(result.timeUsedMs)}
          </span>
        </p>
        <p style={{ margin: "6px 0 0", fontSize: "0.92rem", color: "var(--ink-soft)" }}>
          Beats about {beats}% of players (estimated).
          {result.newBestScore && " New personal best score."}
          {result.newBestTime && " New fastest full run."}
        </p>
        {!result.newBestScore && result.best.bestScore > 0 && (
          <p style={{ margin: "4px 0 0", fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--ink-mute)" }}>
            Your best: {result.best.bestScore}/{total}
            {result.best.bestTimeMs !== undefined
              ? ` · fastest full run ${formatTimeMs(result.best.bestTimeMs)}`
              : ""}
          </p>
        )}
        {versus && (
          <p style={{ margin: "10px 0 0", fontSize: "0.95rem", fontWeight: 600 }}>{versus}</p>
        )}
      </div>

      {missing.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <h2 className="font-display" style={{ fontSize: "1.05rem", margin: "0 0 8px" }}>
            The ones that got away
          </h2>
          {groupAnswers(missing).map(({ label, items }) => (
            <div key={label || "all"} style={{ marginBottom: label ? 10 : 0 }}>
              {label && (
                <p
                  style={{
                    margin: "0 0 6px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "var(--ink-mute)",
                  }}
                >
                  {label}
                </p>
              )}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {items.map((a) => (
                  <span
                    key={a.id}
                    style={{
                      padding: "0.25rem 0.6rem",
                      borderRadius: 999,
                      border: `1px solid ${CORAL}`,
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                  >
                    {a.display}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
        <button type="button" className="btn-primary" onClick={onReplay}>
          Play again
        </button>
        <button
          type="button"
          onClick={handleNativeShare}
          style={{
            padding: "0.6rem 1rem",
            borderRadius: 8,
            border: "1px solid var(--line-strong)",
            background: "transparent",
            color: "var(--ink)",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Challenge a friend
        </button>
        <button
          type="button"
          onClick={handleCopyChallenge}
          style={{
            padding: "0.6rem 1rem",
            borderRadius: 8,
            border: "1px solid var(--line)",
            background: "transparent",
            color: "var(--ink-soft)",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {copied ? "Copied" : "Copy challenge link"}
        </button>
      </div>

      {related.length > 0 && (
        <div>
          <h2 className="font-display" style={{ fontSize: "1.05rem", margin: "0 0 10px" }}>
            Keep the streak going
          </h2>
          <div
            className="card-grid"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))" }}
          >
            {related.map((q) => (
              <Link key={q.slug} href={`/trivia/${q.slug}/`} className="quiz-card">
                <h3 className="quiz-card-title" style={{ marginBottom: 4 }}>
                  {q.title}
                </h3>
                <p className="quiz-card-desc">{q.hook}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * useSearchParams needs a Suspense boundary to be prerenderable on the static
 * export - same pattern as TakeDrivingClient.
 */
export function TriviaPlayClient({ slug }: { slug: string }) {
  return (
    <Suspense
      fallback={
        <div className="section">
          <p style={{ margin: 0, color: "var(--ink-mute)" }}>Loading…</p>
        </div>
      }
    >
      <TriviaPlayInner slug={slug} />
    </Suspense>
  );
}
