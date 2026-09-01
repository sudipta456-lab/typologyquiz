"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  MAX_FRIENDS,
  MIN_FRIENDS,
  ROUND_SIZE,
  cleanFriendName,
  samplePrompts,
  type MostLikelyPrompt,
} from "@/lib/mostlikely/prompts";
import { AwardsCardBlock } from "./AwardsCardBlock";

type Step = "names" | "vote" | "awards";

const TILE_COLORS = [
  "#0795EA",
  "#F9684D",
  "#07AD9C",
  "#F47A9E",
  "#8B5CF6",
  "#3d6fad",
  "#2a8f7a",
  "#8a6d3b",
];

export function MostLikelyClient() {
  const [step, setStep] = useState<Step>("names");
  const [nameFields, setNameFields] = useState<string[]>(["", "", ""]);
  const [crewName, setCrewName] = useState("");
  const [error, setError] = useState("");
  const [prompts, setPrompts] = useState<MostLikelyPrompt[]>([]);
  const [index, setIndex] = useState(0);
  /** promptId -> index into names */
  const [votes, setVotes] = useState<Record<string, number>>({});

  const names = useMemo(
    () => nameFields.map(cleanFriendName).filter(Boolean),
    [nameFields]
  );

  function setField(i: number, value: string) {
    setNameFields((prev) => prev.map((v, j) => (j === i ? value : v)));
  }

  function addField() {
    setNameFields((prev) => (prev.length < MAX_FRIENDS ? [...prev, ""] : prev));
  }

  function removeField(i: number) {
    setNameFields((prev) =>
      prev.length > MIN_FRIENDS ? prev.filter((_, j) => j !== i) : prev
    );
  }

  function startRound() {
    setError("");
    if (names.length < MIN_FRIENDS) {
      setError(`Need at least ${MIN_FRIENDS} names to hold a ceremony.`);
      return;
    }
    const lowered = names.map((n) => n.toLowerCase());
    if (new Set(lowered).size !== lowered.length) {
      setError("Two names look identical. Add an initial so the votes stay honest.");
      return;
    }
    setPrompts(samplePrompts(ROUND_SIZE));
    setVotes({});
    setIndex(0);
    setStep("vote");
  }

  function handleVote(nameIndex: number) {
    const prompt = prompts[index];
    if (!prompt) return;
    setVotes((prev) => ({ ...prev, [prompt.id]: nameIndex }));
    if (index + 1 < prompts.length) {
      setIndex(index + 1);
    } else {
      setStep("awards");
    }
  }

  function replay() {
    setPrompts(samplePrompts(ROUND_SIZE));
    setVotes({});
    setIndex(0);
    setStep("vote");
  }

  function changeCrew() {
    setVotes({});
    setIndex(0);
    setStep("names");
  }

  const awards = useMemo(
    () =>
      prompts
        .filter((p) => votes[p.id] !== undefined)
        .map((p) => ({
          award: p.award,
          promptText: p.text,
          winner: names[votes[p.id]] || "Someone",
        })),
    [prompts, votes, names]
  );

  const crew = cleanFriendName(crewName);

  return (
    <div className="section room-page">
      <p className="eyebrow">Party game</p>
      <h1 className="section-title">Most Likely To</h1>
      <p className="section-lead">
        Add your friends, vote through {ROUND_SIZE} prompts as a group, and hand out the awards.
        Names stay on this screen: never uploaded, never stored, never put in a URL.
      </p>

      {step === "names" && (
        <div className="room-card" style={{ maxWidth: 520 }}>
          <h2 className="test-block-title">Who is in the room?</h2>
          <p className="section-lead" style={{ marginBottom: 12 }}>
            {MIN_FRIENDS} to {MAX_FRIENDS} people. First names only, please.
          </p>
          {nameFields.map((value, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
              <label className="compare-field" style={{ flex: 1 }}>
                <span>Friend {i + 1}</span>
                <input
                  value={value}
                  onChange={(e) => setField(i, e.target.value)}
                  placeholder={i === 0 ? "Maya" : i === 1 ? "Sam" : "Another first name"}
                  maxLength={20}
                />
              </label>
              {nameFields.length > MIN_FRIENDS && (
                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => removeField(i)}
                  aria-label={`Remove friend ${i + 1}`}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          {nameFields.length < MAX_FRIENDS && (
            <button type="button" className="btn-outline" onClick={addField}>
              Add another friend
            </button>
          )}
          <label className="compare-field" style={{ marginTop: 12 }}>
            <span>Crew name (optional, goes on the card)</span>
            <input
              value={crewName}
              onChange={(e) => setCrewName(e.target.value)}
              placeholder="Lunch table"
              maxLength={20}
            />
          </label>
          {error && <p className="compare-err">{error}</p>}
          <button type="button" className="btn-primary" onClick={startRound}>
            Start the ceremony
          </button>
        </div>
      )}

      {step === "vote" && prompts[index] && (
        <div className="daily-card">
          <p className="daily-from">
            Vote together · {index + 1} of {prompts.length}
          </p>
          <h2 className="daily-q">{prompts[index].text}</h2>
          <div className="daily-options" role="group" aria-label="Pick one friend">
            {names.map((n, i) => (
              <button
                key={n}
                type="button"
                className="daily-opt"
                style={{ backgroundColor: TILE_COLORS[i % TILE_COLORS.length] }}
                onClick={() => handleVote(i)}
              >
                {n}
              </button>
            ))}
          </div>
          {index > 0 && (
            <button
              type="button"
              className="text-link"
              style={{ marginTop: 12, background: "none", border: 0, cursor: "pointer" }}
              onClick={() => setIndex(index - 1)}
            >
              Back one prompt
            </button>
          )}
        </div>
      )}

      {step === "awards" && (
        <>
          <div className="room-tally">
            <h2 className="test-block-title">The awards ceremony</h2>
            <ul>
              {awards.map((a) => (
                <li key={a.award + a.winner}>
                  <strong>{a.award}</strong>
                  <span>{a.winner}</span>
                </li>
              ))}
            </ul>
          </div>

          <AwardsCardBlock
            awards={awards.map((a) => ({ award: a.award, winner: a.winner }))}
            crewName={crew || undefined}
          />

          <div className="room-actions" style={{ marginTop: 16 }}>
            <button type="button" className="btn-primary" onClick={replay}>
              New round, fresh prompts
            </button>
            <button type="button" className="btn-outline" onClick={changeCrew}>
              Change the crew
            </button>
            <Link href="/friend-quiz" className="btn-outline">
              Try the Friend Quiz
            </Link>
          </div>
        </>
      )}

      <p className="room-fineprint" style={{ marginTop: 24 }}>
        For laughs between friends. Every award here is one worth winning; if a round stops being
        fun for someone, skip it.
      </p>
    </div>
  );
}
