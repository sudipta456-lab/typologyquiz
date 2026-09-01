"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { getFoolQuestion, type FoolQuestion } from "@/lib/fool/questions";
import {
  MAX_CONTRIBUTORS,
  appendContributor,
  buildPlayUrl,
  canChain,
  decodePayload,
  payloadFromHash,
  type FoolPayload,
} from "@/lib/fool/codec";
import { buildTiles, shuffleTiles, type FoolTile } from "@/lib/fool/tiles";
import { FoolQuestionCard } from "@/components/fool/FoolQuestionCard";
import { FakeWriter } from "@/components/fool/FakeWriter";
import { FriendShareBlock } from "@/components/friendquiz/FriendShareBlock";
import { useSiteOrigin } from "@/lib/use-site-origin";

type Stage = "intro" | "play" | "done" | "chain" | "chainShare";

// Sentinel returned during prerender, so "no fragment yet" and "no fragment
// at all" stay distinguishable and the static HTML shows the loading state.
const SSR_HASH = "__ssr__";

function subscribeToHash(cb: () => void) {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
}

function listNames(names: string[]): string {
  if (names.length <= 1) return names[0] || "";
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

/** Verdict for the truth score, out of 6. */
function truthVerdict(score: number, liars: string): { title: string; line: string } {
  if (score <= 1) {
    return {
      title: "Thoroughly bamboozled",
      line: `The lies won this round. In fairness, ${liars} put real effort into fooling you.`,
    };
  }
  if (score <= 3) {
    return {
      title: "Half truths, half trouble",
      line: `You caught some of it, but ${liars} still got their hooks in. Rematch material.`,
    };
  }
  if (score <= 5) {
    return {
      title: "Hard to fool",
      line: `Solid instincts. ${liars} only slipped a little past you.`,
    };
  }
  return {
    title: "Human lie detector",
    line: `A perfect run. ${liars} wrote their best lies and you walked straight past every one.`,
  };
}

export function FoolPlayClient() {
  const origin = useSiteOrigin();
  const hash = useSyncExternalStore(subscribeToHash, () => window.location.hash, () => SSR_HASH);
  const pending = hash === SSR_HASH;
  const [stage, setStage] = useState<Stage>("intro");
  const [index, setIndex] = useState(0);
  /** question index -> picked tile index */
  const [picks, setPicks] = useState<Record<number, number>>({});
  const [chainPayload, setChainPayload] = useState<FoolPayload | null>(null);
  const [chainFailed, setChainFailed] = useState(false);

  const payload: FoolPayload | null = useMemo(() => {
    if (pending) return null;
    const encoded = payloadFromHash(hash);
    return encoded ? decodePayload(encoded) : null;
  }, [hash, pending]);

  const questions: FoolQuestion[] = useMemo(
    () =>
      (payload?.q || [])
        .map(getFoolQuestion)
        .filter((q): q is FoolQuestion => q !== undefined),
    [payload]
  );

  // Shuffled once per link open; stable across the whole play-through.
  const boards: FoolTile[][] = useMemo(
    () =>
      payload
        ? questions.map((q, i) => shuffleTiles(buildTiles(q, payload.c, i)))
        : [],
    [payload, questions]
  );

  const contributorNames = (payload?.c || []).map((c) => c.n);
  const liars = listNames(contributorNames);

  const { score, fooled } = useMemo(() => {
    const fooledCounts = (payload?.c || []).map(() => 0);
    let truths = 0;
    boards.forEach((tiles, qi) => {
      const pick = picks[qi];
      if (pick === undefined) return;
      const tile = tiles[pick];
      if (!tile) return;
      if (tile.isTruth) truths++;
      tile.by.forEach((ci) => {
        fooledCounts[ci]++;
      });
    });
    return { score: truths, fooled: fooledCounts };
  }, [boards, picks, payload]);

  function handlePick(tileIndex: number) {
    setPicks((prev) => ({ ...prev, [index]: tileIndex }));
    if (index + 1 < boards.length) {
      setIndex(index + 1);
    } else {
      setStage("done");
    }
  }

  function handleChainComplete(name: string, fakes: string[]) {
    if (!payload) return;
    const next = appendContributor(payload, name, fakes);
    if (!next) {
      setChainFailed(true);
      setStage("done");
      return;
    }
    setChainPayload(next);
    setStage("chainShare");
  }

  /* ---------- loading ---------- */

  if (pending) {
    return (
      <div className="section" style={{ maxWidth: "42rem" }}>
        <p className="eyebrow">Fool your friends</p>
        <p className="section-lead">Opening the game…</p>
      </div>
    );
  }

  /* ---------- mangled (or missing) link ---------- */

  if (!payload) {
    return (
      <div className="section" style={{ maxWidth: "42rem" }}>
        <p className="eyebrow">Fool your friends</p>
        <h1 className="section-title" style={{ fontSize: "1.6rem" }}>
          This link got mangled
        </h1>
        <p className="section-lead">
          The whole game travels inside the link, and this one arrived
          incomplete. That usually means the message app cut it off. Ask your
          friend to copy the link again and send it in one piece (or as a plain
          paste, not a preview).
        </p>
        <div className="test-actions">
          <Link href="/fool/" className="btn-primary">
            Make your own instead
          </Link>
        </div>
      </div>
    );
  }

  /* ---------- intro ---------- */

  if (stage === "intro") {
    return (
      <div className="section" style={{ maxWidth: "42rem" }}>
        <p className="eyebrow">Fool your friends · trivia</p>
        <h1 className="section-title">Can you spot the truth?</h1>
        <p className="section-lead">
          {payload.q.length} real trivia questions. In every one, the true
          answer is hiding among decoys and at least one lie written by {liars}.
          Score a point for each truth you find; every lie you fall for is a
          point for whoever wrote it. Your picks stay on this device.
        </p>
        <div className="test-actions" style={{ marginTop: 24 }}>
          <button type="button" className="btn-primary btn-lg" onClick={() => setStage("play")}>
            Start hunting
          </button>
          <Link href="/fool/" className="text-link">
            Or start your own game
          </Link>
        </div>
      </div>
    );
  }

  /* ---------- the chain: write your own lies ---------- */

  if (stage === "chain") {
    return (
      <div className="section" style={{ maxWidth: "42rem" }}>
        <p className="eyebrow">Fool your friends · keep the chain going</p>
        <h1 className="section-title" style={{ fontSize: "1.6rem" }}>
          Now write your own lies
        </h1>
        <p className="section-lead">
          Same {payload.q.length} questions, and yes, you have seen the real
          answers. Use that power responsibly: write lies good enough to catch
          the next player. The new link carries everyone&apos;s fakes at once.
        </p>
        <FakeWriter
          questions={questions}
          noteLine="You know the truth here. Write the lie that almost beat you."
          ctaLabel="Get the chain link"
          onComplete={handleChainComplete}
          onCancel={() => setStage("done")}
          cancelLabel="Back to my results"
        />
      </div>
    );
  }

  /* ---------- the chain: share the extended link ---------- */

  if (stage === "chainShare" && chainPayload) {
    const chainUrl = buildPlayUrl(origin, chainPayload);
    const newName = chainPayload.c[chainPayload.c.length - 1].n;
    const chainNames = listNames(chainPayload.c.map((c) => c.n));
    const chainText = `${chainNames} planted lies in this trivia. Find the truth if you can: ${chainUrl}`;
    return (
      <div className="section" style={{ maxWidth: "42rem" }}>
        <p className="eyebrow">Fool your friends · chain extended</p>
        <h1 className="section-title" style={{ fontSize: "1.6rem" }}>
          Your lies joined the chain
        </h1>
        <p className="section-lead">
          The next player faces the truth, the decoys, and fakes from{" "}
          {chainNames}, all shuffled together.
          {chainPayload.c.length >= MAX_CONTRIBUTORS
            ? " That maxes out the chain: whoever plays this link is the last stop."
            : ""}
        </p>
        <FriendShareBlock
          heading="Pass it on"
          subheading={`Now with ${newName}'s lies inside`}
          url={chainUrl}
          shareText={chainText}
          shareTitle={`Can you spot the lies from ${chainNames}?`}
        />
        <p style={{ fontSize: "0.85rem", color: "var(--ink-mute)", marginTop: 16 }}>
          Privacy: everyone&apos;s fakes live in the link itself, nowhere else.
          Nothing is uploaded and nothing is stored on our side.
        </p>
        <p style={{ marginTop: 20 }}>
          <button type="button" className="text-link" onClick={() => setStage("done")}>
            Back to my results
          </button>
        </p>
      </div>
    );
  }

  /* ---------- guessing ---------- */

  if (stage === "play" && boards[index] && questions[index]) {
    return (
      <div className="section" style={{ maxWidth: "42rem" }}>
        <p className="eyebrow">
          Spot the truth · lies by {liars}
        </p>
        <FoolQuestionCard
          questionText={questions[index].text}
          tiles={boards[index]}
          index={index}
          total={boards.length}
          picked={picks[index]}
          onPick={handlePick}
        />
        {index > 0 && (
          <p style={{ marginTop: 16 }}>
            <button type="button" className="text-link" onClick={() => setIndex(index - 1)}>
              Back a question
            </button>
          </p>
        )}
      </div>
    );
  }

  /* ---------- results ---------- */

  const verdict = truthVerdict(score, liars);

  return (
    <div className="section" style={{ maxWidth: "42rem" }}>
      <p className="eyebrow">Fool your friends · results</p>
      <h1 className="section-title" style={{ fontSize: "1.8rem" }}>
        You found {score} of {boards.length} truths
      </h1>
      <p className="section-lead">
        <strong>{verdict.title}.</strong> {verdict.line}
      </p>

      {/* Who fooled you, and how often */}
      <div className="pulse-types" style={{ marginTop: 8 }}>
        <h2 className="test-block-title" style={{ marginBottom: 8 }}>
          The damage report
        </h2>
        <ul>
          {payload.c.map((contributor, i) => (
            <li key={`${contributor.n}-${i}`}>
              <span>
                {fooled[i] > 0
                  ? `You got fooled by ${contributor.n}`
                  : `${contributor.n} never got you`}
              </span>
              <span className="pulse-count">
                {fooled[i]} {fooled[i] === 1 ? "time" : "times"}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Per-question receipts */}
      <div className="pulse-types" style={{ marginTop: 20 }}>
        <h2 className="test-block-title" style={{ marginBottom: 8 }}>
          The receipts
        </h2>
        <ul>
          {questions.map((q, qi) => {
            const tiles = boards[qi];
            const pick = picks[qi];
            const picked = pick !== undefined ? tiles[pick] : undefined;
            const hit = !!picked?.isTruth;
            const liarNames = picked && picked.by.length > 0
              ? listNames(picked.by.map((ci) => payload.c[ci]?.n || "someone"))
              : null;
            return (
              <li key={q.id} style={{ display: "block" }}>
                <p style={{ margin: 0, fontWeight: 600, fontSize: "0.92rem" }}>{q.text}</p>
                <p style={{ margin: "0.25rem 0 0", fontSize: "0.88rem", color: "var(--ink-soft)" }}>
                  Truth: {q.truth}
                  {" · "}
                  You picked: {picked ? picked.text : "(skipped)"}
                </p>
                <p
                  style={{
                    margin: "0.2rem 0 0",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: hit ? "var(--mark-teal)" : "var(--mark-coral)",
                  }}
                >
                  {hit
                    ? "Truth found"
                    : liarNames
                      ? `That lie was planted by ${liarNames}`
                      : picked
                        ? "That was one of our stock decoys"
                        : "Skipped"}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* The chain */}
      <div style={{ marginTop: 28 }}>
        {canChain(payload) && !chainFailed ? (
          <>
            <h2 className="test-block-title" style={{ marginBottom: 8 }}>
              Keep the chain going
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--ink-soft)", margin: "0 0 12px" }}>
              Write your own fakes for these same {boards.length} questions and
              pass it on. The next player faces everyone&apos;s lies at once,
              up to {MAX_CONTRIBUTORS} tricksters per chain.
            </p>
            <div className="test-actions">
              <button type="button" className="btn-primary" onClick={() => setStage("chain")}>
                Add my lies and pass it on
              </button>
            </div>
          </>
        ) : (
          <div className="room-banner">
            <p>
              {chainFailed
                ? "This chain link is packed to the byte and cannot fit more lies. "
                : `This chain already has ${MAX_CONTRIBUTORS} tricksters, which is the cap. `}
              <Link href="/fool/" className="text-link">
                Start a fresh one
              </Link>
            </p>
          </div>
        )}
      </div>

      {/* Make your own */}
      <div className="room-banner" style={{ marginTop: 24 }}>
        <p>
          Your turn to be the liar. Get 6 fresh questions and fool your own group chat.{" "}
          <Link href="/fool/" className="text-link">
            Start my own game
          </Link>
        </p>
      </div>
    </div>
  );
}
