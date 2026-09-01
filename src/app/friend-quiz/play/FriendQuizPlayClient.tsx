"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { getQuestion, packTitle } from "@/lib/friendquiz/packs";
import {
  appendScore,
  buildPlayUrl,
  cleanName,
  decodePayload,
  payloadFromHash,
  verdictFor,
  type FriendQuizPayload,
} from "@/lib/friendquiz/codec";
import { FriendQuestionCard } from "@/components/friendquiz/FriendQuestionCard";
import { FriendShareBlock } from "@/components/friendquiz/FriendShareBlock";
import { FriendCardBlock } from "@/components/friendquiz/FriendCardBlock";
import { useSiteOrigin } from "@/lib/use-site-origin";

type Stage = "intro" | "play" | "done";

// Sentinel returned during prerender, so "no fragment yet" and "no fragment
// at all" stay distinguishable and the static HTML shows the loading state.
const SSR_HASH = "__ssr__";

function subscribeToHash(cb: () => void) {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
}

function Leaderboard({ payload }: { payload: FriendQuizPayload }) {
  const scores = payload.s || [];
  if (scores.length === 0) return null;
  // Newest entries sit at the end of the array; show best first.
  const ranked = [...scores].sort((a, b) => b.s - a.s);
  return (
    <div className="pulse-types" style={{ marginTop: 20 }}>
      <h2 className="test-block-title" style={{ marginBottom: 8 }}>
        The scoreboard so far
      </h2>
      <ul>
        {ranked.map((entry, i) => (
          <li key={`${entry.n}-${i}`}>
            <span>
              {i === 0 ? "1st · " : `${i + 1}. `}
              {entry.n}
            </span>
            <span className="pulse-count">
              {entry.s}/{payload.q.length}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FriendQuizPlayClient() {
  const origin = useSiteOrigin();
  const hash = useSyncExternalStore(subscribeToHash, () => window.location.hash, () => SSR_HASH);
  const pending = hash === SSR_HASH;
  const [stage, setStage] = useState<Stage>("intro");
  const [index, setIndex] = useState(0);
  const [guesses, setGuesses] = useState<Record<string, number>>({});
  const [guesserName, setGuesserName] = useState("");

  const payload: FriendQuizPayload | null = useMemo(() => {
    if (pending) return null;
    const encoded = payloadFromHash(hash);
    return encoded ? decodePayload(encoded) : null;
  }, [hash, pending]);

  const questions = useMemo(
    () =>
      (payload?.q || [])
        .map(getQuestion)
        .filter((q): q is NonNullable<typeof q> => q !== undefined),
    [payload]
  );

  const score = useMemo(() => {
    if (!payload) return 0;
    let s = 0;
    payload.q.forEach((id, i) => {
      if (guesses[id] === payload.a[i]) s++;
    });
    return s;
  }, [payload, guesses]);

  function handleGuess(optionIndex: number) {
    const q = questions[index];
    if (!q) return;
    setGuesses((prev) => ({ ...prev, [q.id]: optionIndex }));
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setStage("done");
    }
  }

  /* ---------- loading ---------- */

  if (pending) {
    return (
      <div className="section" style={{ maxWidth: "42rem" }}>
        <p className="eyebrow">Friend quiz</p>
        <p className="section-lead">Opening the quiz…</p>
      </div>
    );
  }

  /* ---------- mangled (or missing) link ---------- */

  if (!payload) {
    return (
      <div className="section" style={{ maxWidth: "42rem" }}>
        <p className="eyebrow">Friend quiz</p>
        <h1 className="section-title" style={{ fontSize: "1.6rem" }}>
          This link got mangled
        </h1>
        <p className="section-lead">
          The whole quiz travels inside the link, and this one arrived incomplete. That usually
          means the message app cut it off. Ask your friend to copy the link again and send it in
          one piece (or as a plain paste, not a preview).
        </p>
        <div className="test-actions">
          <Link href="/friend-quiz/" className="btn-primary">
            Make your own quiz instead
          </Link>
        </div>
      </div>
    );
  }

  /* ---------- intro (also the creator's scoreboard view) ---------- */

  if (stage === "intro") {
    return (
      <div className="section" style={{ maxWidth: "42rem" }}>
        <p className="eyebrow">Friend quiz · {packTitle(payload.p)}</p>
        <h1 className="section-title">How well do you know {payload.n}?</h1>
        <p className="section-lead">
          {payload.n} answered {payload.q.length} questions about themselves. Your job: guess what
          they said. Answers stay on this device; only the score you choose to send back travels.
        </p>

        <Leaderboard payload={payload} />

        <div className="test-actions" style={{ marginTop: 24 }}>
          <button type="button" className="btn-primary btn-lg" onClick={() => setStage("play")}>
            Start guessing
          </button>
          <Link href="/friend-quiz/" className="text-link">
            Or make one about yourself
          </Link>
        </div>
      </div>
    );
  }

  /* ---------- guessing ---------- */

  if (stage === "play" && questions[index]) {
    return (
      <div className="section" style={{ maxWidth: "42rem" }}>
        <p className="eyebrow">
          How well do you know {payload.n}? · {packTitle(payload.p)}
        </p>
        <FriendQuestionCard
          question={questions[index]}
          index={index}
          total={questions.length}
          picked={guesses[questions[index].id]}
          onPick={handleGuess}
          eyebrow={`What did ${payload.n} say?`}
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

  const verdict = verdictFor(score, questions.length);
  const resultPayload = appendScore(payload, guesserName || "Someone", score);
  const returnUrl = buildPlayUrl(origin, resultPayload);
  const returnText = `${cleanName(guesserName) || "Someone"} got ${score}/${questions.length} on "How well do you know ${payload.n}?" Think you can beat that? ${returnUrl}`;

  return (
    <div className="section" style={{ maxWidth: "42rem" }}>
      <p className="eyebrow">Friend quiz · results</p>
      <h1 className="section-title" style={{ fontSize: "1.8rem" }}>
        You got {score} out of {questions.length}
      </h1>
      <p className="section-lead">
        <strong>{verdict.title}.</strong> {verdict.line(payload.n)}
      </p>

      {/* Per-question reveal */}
      <div className="pulse-types" style={{ marginTop: 8 }}>
        <h2 className="test-block-title" style={{ marginBottom: 8 }}>
          The receipts
        </h2>
        <ul>
          {questions.map((q, i) => {
            const guess = guesses[q.id];
            const actual = payload.a[i];
            const hit = guess === actual;
            return (
              <li key={q.id} style={{ display: "block" }}>
                <p style={{ margin: 0, fontWeight: 600, fontSize: "0.92rem" }}>{q.text}</p>
                <p style={{ margin: "0.25rem 0 0", fontSize: "0.88rem", color: "var(--ink-soft)" }}>
                  You said: {guess !== undefined ? q.options[guess] : "(skipped)"}
                  {" · "}
                  {payload.n} said: {q.options[actual]}
                </p>
                <p
                  style={{
                    margin: "0.2rem 0 0",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: hit ? "var(--mark-teal)" : "var(--mark-coral)",
                  }}
                >
                  {hit ? "Match" : "Miss"}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Send the score back */}
      <div style={{ marginTop: 28 }}>
        <h2 className="test-block-title" style={{ marginBottom: 8 }}>
          Send your score back to {payload.n}
        </h2>
        <label className="compare-field" style={{ maxWidth: "20rem", marginBottom: 12 }}>
          <span>Your first name</span>
          <input
            value={guesserName}
            onChange={(e) => setGuesserName(e.target.value)}
            maxLength={20}
            placeholder="Sam"
          />
        </label>
        <p style={{ fontSize: "0.85rem", color: "var(--ink-mute)", margin: "0 0 12px" }}>
          First name only. Your score gets added to the scoreboard inside the link, along with up
          to 7 earlier scores, so {payload.n} sees everyone in one place.
        </p>
        <FriendShareBlock
          heading={`Tell ${payload.n} how you did`}
          subheading="The scoreboard travels inside this link"
          url={returnUrl}
          shareText={returnText}
          shareTitle={`How well do you know ${payload.n}?`}
        />
      </div>

      {/* Share card */}
      <div style={{ marginTop: 24 }}>
        <FriendCardBlock
          creatorName={payload.n}
          guesserName={cleanName(guesserName) || undefined}
          score={score}
          total={questions.length}
          verdictTitle={verdict.title}
          packTitle={packTitle(payload.p)}
        />
      </div>

      {/* The viral loop */}
      <div className="room-banner" style={{ marginTop: 24 }}>
        <p>
          Your turn. Make your own quiz and find out who actually knows you.{" "}
          <Link href="/friend-quiz/" className="text-link">
            Make my quiz
          </Link>
        </p>
      </div>
    </div>
  );
}
