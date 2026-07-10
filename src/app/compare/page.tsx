"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { decodeResult } from "@/lib/results";
import { getTest } from "@/lib/tests/registry";
import { recordBadgeEvent } from "@/lib/progress-game";

type Side = {
  raw: string;
  error?: string;
  title?: string;
  typeLabel?: string;
  typeDescription?: string;
  scores?: Record<string, number>;
  name?: string;
};

function parseInput(raw: string): Side {
  const trimmed = raw.trim();
  if (!trimmed) return { raw: trimmed, error: "Paste a results link or code" };

  let encoded = trimmed;
  try {
    if (trimmed.includes("r=")) {
      const u = trimmed.includes("http")
        ? new URL(trimmed)
        : new URL(trimmed, "https://typologyquiz.com");
      encoded = u.searchParams.get("r") || "";
      // hash style
      if (!encoded && trimmed.includes("r=")) {
        const m = trimmed.match(/[?&]r=([^&]+)/);
        if (m) encoded = decodeURIComponent(m[1]);
      }
    }
  } catch {
    /* treat as raw code */
  }

  // strip accidental wrapping
  encoded = encoded.replace(/^"+|"+$/g, "");

  const decoded = decodeResult(encoded);
  if (!decoded) return { raw: trimmed, error: "Could not read that result" };

  const test = getTest(decoded.result.testSlug);
  const extras = decoded.extras || {};
  return {
    raw: trimmed,
    title: test?.title || decoded.result.testSlug,
    typeLabel:
      (typeof extras.label === "string" && extras.label) ||
      "Results",
    typeDescription:
      (typeof extras.description === "string" && extras.description) || undefined,
    scores: decoded.result.scores,
  };
}

export default function ComparePage() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [nameA, setNameA] = useState("You");
  const [nameB, setNameB] = useState("Friend");

  const left = useMemo(() => parseInput(a), [a]);
  const right = useMemo(() => parseInput(b), [b]);
  const ready = !!(left.scores && right.scores && !left.error && !right.error);

  useEffect(() => {
    if (ready) recordBadgeEvent("comparer");
  }, [ready]);
  const sameTest =
    ready &&
    a &&
    b &&
    (() => {
      const da = decodeResult(
        a.includes("r=") ? (a.match(/[?&]r=([^&]+)/)?.[1] || "") : a
      );
      const db = decodeResult(
        b.includes("r=") ? (b.match(/[?&]r=([^&]+)/)?.[1] || "") : b
      );
      return da && db && da.result.testSlug === db.result.testSlug;
    })();

  const allKeys = useMemo(() => {
    if (!left.scores || !right.scores) return [] as string[];
    return Array.from(
      new Set([...Object.keys(left.scores), ...Object.keys(right.scores)])
    );
  }, [left.scores, right.scores]);

  return (
    <div className="section compare-page">
      <p className="eyebrow">Friend compare</p>
      <h1 className="section-title">Compare results</h1>
      <p className="section-lead">
        Paste two result links (or the code from the URL after <code>r=</code>). Best when both
        took the same test.
      </p>

      <div className="compare-inputs">
        <label className="compare-field">
          <span>Person A name</span>
          <input value={nameA} onChange={(e) => setNameA(e.target.value)} maxLength={20} />
        </label>
        <label className="compare-field">
          <span>Person A result link</span>
          <textarea
            value={a}
            onChange={(e) => setA(e.target.value)}
            placeholder="https://typologyquiz.com/test/.../results/?r=..."
            rows={3}
          />
          {left.error && a && <em className="compare-err">{left.error}</em>}
        </label>
        <label className="compare-field">
          <span>Person B name</span>
          <input value={nameB} onChange={(e) => setNameB(e.target.value)} maxLength={20} />
        </label>
        <label className="compare-field">
          <span>Person B result link</span>
          <textarea
            value={b}
            onChange={(e) => setB(e.target.value)}
            placeholder="Paste their results link"
            rows={3}
          />
          {right.error && b && <em className="compare-err">{right.error}</em>}
        </label>
      </div>

      {ready && (
        <div className="compare-board">
          {!sameTest && (
            <p className="compare-warn">
              Different tests. Labels still show, but scores may not line up 1:1.
            </p>
          )}
          <div className="compare-heads">
            <div className="compare-person">
              <span className="compare-name">{nameA || "You"}</span>
              <strong className="font-display">{left.typeLabel}</strong>
              <span className="compare-test">{left.title}</span>
              {left.typeDescription && <p>{left.typeDescription}</p>}
            </div>
            <div className="compare-vs">VS</div>
            <div className="compare-person">
              <span className="compare-name">{nameB || "Friend"}</span>
              <strong className="font-display">{right.typeLabel}</strong>
              <span className="compare-test">{right.title}</span>
              {right.typeDescription && <p>{right.typeDescription}</p>}
            </div>
          </div>

          {allKeys.length > 0 && (
            <div className="compare-scores">
              <h2 className="test-block-title">Score face-off</h2>
              {allKeys.map((key) => {
                const va = left.scores?.[key] ?? 0;
                const vb = right.scores?.[key] ?? 0;
                return (
                  <div key={key} className="compare-row">
                    <span className="compare-axis">{key.replace(/_/g, " ")}</span>
                    <div className="compare-bars">
                      <div className="compare-bar-wrap">
                        <div className="compare-bar a" style={{ width: `${va}%` }} />
                        <span>{va}</span>
                      </div>
                      <div className="compare-bar-wrap">
                        <div className="compare-bar b" style={{ width: `${vb}%` }} />
                        <span>{vb}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <p className="compare-foot">
            Same type? Instant duo lore. Different? Debate in the group chat.
          </p>
        </div>
      )}

      <p style={{ marginTop: 28 }}>
        <Link href="/test/friend-role" className="text-link">
          Take Friend Role first →
        </Link>
        {" · "}
        <Link href="/room" className="text-link">
          Or start a room
        </Link>
      </p>
    </div>
  );
}
