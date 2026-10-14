"use client";

import { useEffect, useState } from "react";

/** A brief, honest transition after scoring has already completed. */
export function ResultReveal({ children }: { children: React.ReactNode }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = window.setTimeout(() => setShown(true), media.matches ? 0 : 750);
    const reveal = () => { if (media.matches) setShown(true); };
    media.addEventListener("change", reveal);
    return () => { window.clearTimeout(timer); media.removeEventListener("change", reveal); };
  }, []);
  if (shown) return <>{children}</>;
  return <><style>{"@keyframes tq-result-spin { to { transform: rotate(360deg); } }"}</style><section className="quiz-card" aria-live="polite" style={{ padding: "1.4rem", textAlign: "center" }}>
    <p className="eyebrow">Your results are ready</p>
    <div aria-hidden="true" style={{ width: 34, height: 34, borderRadius: "50%", border: "3px solid var(--line)", borderTopColor: "var(--mark-teal)", margin: "0.75rem auto", animation: "tq-result-spin 0.8s linear infinite" }} />
    <button type="button" className="btn-outline" onClick={() => setShown(true)}>Show results now</button>
  </section></>;
}
