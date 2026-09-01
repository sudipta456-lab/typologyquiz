"use client";

import { useState } from "react";
import type { FoolQuestion } from "@/lib/fool/questions";
import { MAX_FAKE_LEN, MAX_NAME_LEN, cleanFake, cleanName } from "@/lib/fool/codec";

interface Props {
  questions: FoolQuestion[];
  /** Extra context line above the input, e.g. the chain's "you've seen the answers" note. */
  noteLine?: string;
  /** Label on the final button, e.g. "Get my link". */
  ctaLabel: string;
  onComplete: (name: string, fakes: string[]) => void;
  onCancel?: () => void;
  cancelLabel?: string;
}

/**
 * The lie-writing flow shared by the create page and the chain step:
 * one fake answer per question (the writer never sees the truth on the
 * create path, which keeps it fair), then a first name.
 */
export function FakeWriter({
  questions,
  noteLine,
  ctaLabel,
  onComplete,
  onCancel,
  cancelLabel,
}: Props) {
  const [index, setIndex] = useState(0);
  const [fakes, setFakes] = useState<string[]>(() => questions.map(() => ""));
  const [name, setName] = useState("");
  const naming = index >= questions.length;

  function setFake(value: string) {
    setFakes((prev) => prev.map((f, i) => (i === index ? value : f)));
  }

  if (naming) {
    return (
      <div>
        <label className="compare-field" style={{ maxWidth: "20rem" }}>
          <span>Your first name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={MAX_NAME_LEN}
            placeholder="Maya"
            autoFocus
          />
        </label>
        <p style={{ fontSize: "0.85rem", color: "var(--ink-mute)", marginTop: 8 }}>
          First name or nickname only. The link travels, so skip full names.
          Your lies get credited to this name when someone falls for them.
        </p>
        <div className="test-actions" style={{ marginTop: 20 }}>
          <button
            type="button"
            className="btn-primary"
            disabled={!cleanName(name)}
            onClick={() => onComplete(cleanName(name), fakes.map(cleanFake))}
          >
            {ctaLabel}
          </button>
          <button
            type="button"
            className="text-link"
            onClick={() => setIndex(questions.length - 1)}
          >
            Back to my lies
          </button>
        </div>
      </div>
    );
  }

  const q = questions[index];
  const current = fakes[index];
  const ok = !!cleanFake(current);

  return (
    <div>
      <div className="daily-card">
        <p className="daily-from">
          Write your lie · {index + 1} of {questions.length}
        </p>
        <h2 className="daily-q">{q.text}</h2>
        {noteLine && (
          <p style={{ fontSize: "0.88rem", color: "var(--ink-soft)", margin: "0 0 10px" }}>
            {noteLine}
          </p>
        )}
        <label className="compare-field">
          <span>Your fake answer</span>
          <input
            value={current}
            onChange={(e) => setFake(e.target.value)}
            maxLength={MAX_FAKE_LEN}
            placeholder="Something believable"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter" && ok) setIndex(index + 1);
            }}
          />
        </label>
        <p style={{ fontSize: "0.82rem", color: "var(--ink-mute)", margin: "6px 0 0" }}>
          Max {MAX_FAKE_LEN} characters. Keep it clean; it travels with your name.
        </p>
      </div>
      <div className="test-actions" style={{ marginTop: 16 }}>
        <button
          type="button"
          className="btn-primary"
          disabled={!ok}
          onClick={() => setIndex(index + 1)}
        >
          {index + 1 < questions.length ? "Next question" : "Lies locked in"}
        </button>
        {index > 0 && (
          <button type="button" className="text-link" onClick={() => setIndex(index - 1)}>
            Back a question
          </button>
        )}
        {onCancel && (
          <button type="button" className="text-link" onClick={onCancel}>
            {cancelLabel || "Never mind"}
          </button>
        )}
      </div>
    </div>
  );
}
