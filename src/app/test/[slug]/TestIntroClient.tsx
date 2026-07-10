"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getTest } from "@/lib/tests/registry";
import { CATEGORY_META } from "@/lib/types";
import { loadProgress } from "@/lib/results";
import { loadSchoolMode } from "@/lib/settings";
import { useEffect, useState } from "react";

const CATEGORY_CODE: Record<string, string> = {
  personality: "PERS",
  values: "VAL",
  thinking: "THNK",
  perception: "PERC",
  character: "CHAR",
};

export function TestIntroClient() {
  const params = useParams();
  const slug = params.slug as string;
  const test = getTest(slug);
  const [schoolMode, setSchoolMode] = useState(false);

  useEffect(() => {
    setSchoolMode(loadSchoolMode());
  }, []);

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

  const meta = CATEGORY_META[test.category as keyof typeof CATEGORY_META];
  const code = CATEGORY_CODE[test.category] || "TEST";
  const saved = loadProgress(test.slug);
  const formatLabel = test.questions[0]?.type === "numeric" ? "Open" : "Likert";

  return (
    <div className="test-shell">
      <Link href="/tests" className="test-back">
        Back to tests
      </Link>

      <header className="test-intro-header">
        <span className="test-chip">
          <span className="test-chip-code">{code}</span>
          {meta.label}
        </span>
        <h1 className="font-display test-intro-title">{test.title}</h1>
        <p className="test-intro-desc">{test.description}</p>
      </header>

      <div className="test-meta-grid">
        <div className="test-meta-cell">
          <div className="test-meta-value">{test.itemCount}</div>
          <div className="test-meta-label">Items</div>
        </div>
        <div className="test-meta-cell">
          <div className="test-meta-value">~{test.timeMinutes}</div>
          <div className="test-meta-label">Minutes</div>
        </div>
        <div className="test-meta-cell">
          <div className="test-meta-value">{formatLabel}</div>
          <div className="test-meta-label">Format</div>
        </div>
      </div>

      <section className="test-block">
        <h2 className="test-block-title">What you will learn</h2>
        <p className="test-block-body">{test.whatYoullLearn}</p>
      </section>

      <section className="test-privacy">
        <p>
          <strong>Private by default.</strong> Answers never leave this device. Scoring runs entirely
          in your browser. Built for self-reflection, not grades or diagnosis.
          {schoolMode ? " School mode is on (friendship-friendly wording where relevant)." : ""}
        </p>
      </section>

      <div className="test-actions">
        <Link href={`/test/${test.slug}/take`} className="btn-primary">
          {saved ? "Resume where you left off" : "Start test"}
        </Link>
        {saved && (
          <p className="test-resume-note">
            Saved progress from {new Date(saved.savedAt).toLocaleDateString()}. We will pick up where
            you stopped.
          </p>
        )}
      </div>
    </div>
  );
}
