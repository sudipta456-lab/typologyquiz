"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { decodeResult } from "@/lib/results";
import { comparableResults, reportDefinition } from "@/lib/tests/assessment-versions";
import type { TestResult } from "@/lib/types";
import { recordBadgeEvent } from "@/lib/progress-game";

type Side = {
  raw: string;
  result?: TestResult;
  axisLabels?: Record<string, string>;
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

  const test = reportDefinition(decoded.result);
  const extras = decoded.extras || {};
  return {
    raw: trimmed,
    result: decoded.result,
    axisLabels: Object.fromEntries((test?.axes ?? []).map(a => [a.key, a.label])),
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
  const compatible = !!left.result && !!right.result && comparableResults(left.result, right.result);

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
        Paste two result links (or the code from the URL after <code>r=</code>). Scores can be compared only when both people used the same test version and wording.
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
          {!compatible && (
            <p className="compare-warn">
              These results use different tests, different versions, or an unrecorded older version. We show their descriptions without comparing scores.
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

          {compatible && allKeys.length > 0 && (
            <div className="compare-scores">
              <h2 className="test-block-title">Scale scores · 0–100</h2>
              {allKeys.map((key) => {
                const va = left.scores?.[key] ?? 0;
                const vb = right.scores?.[key] ?? 0;
                return (
                  <div key={key} className="compare-row">
                    <span className="compare-axis">{left.axisLabels?.[key] ?? key.replace(/_/g, " ")}</span>
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
            Differences in these self-reports do not measure compatibility or explain why two people differ.
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
