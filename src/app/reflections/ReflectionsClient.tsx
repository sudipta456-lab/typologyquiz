"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { loadReflections, deleteReflection, OUTCOMES } from "@/lib/reflections";
import { decodeResult } from "@/lib/results";
import { reportDefinition } from "@/lib/tests/assessment-versions";

const subscribe = () => () => {};
export function ReflectionsClient() {
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  return <div className="section reflections-page">
    <p className="eyebrow">Your space</p><h1 className="section-title">Something to come back to.</h1>
    <p className="section-lead">The notes you saved after a quiz, and the small things you wanted to try. Available only in this browser.</p>
    {hydrated ? <SavedReflections /> : <p role="status">Loading your notes…</p>}
  </div>;
}
function SavedReflections() {
  const [entries, setEntries] = useState(loadReflections);
  const [today] = useState(Date.now);
  const [status, setStatus] = useState("");
  return <>
    {entries.length === 0 && <div className="content-card"><h2 className="content-card-title">A useful result deserves a second look.</h2><p>After any quiz, open “Make this result useful” to save a note and something to try. No account or signup.</p><Link className="btn-primary" href="/test/mini-ipip/">Explore your Big Five</Link></div>}
    <div className="reflection-list">{entries.map(e => {
      const result = decodeResult(e.encoded)!.result;
      const test = reportDefinition(result)!;
      return <article key={e.id} className="content-card">
        <p className="eyebrow">{e.outcome !== OUTCOMES[0] ? "Reviewed" : e.reviewAt <= today ? "Ready to revisit" : `Review ${new Date(e.reviewAt).toLocaleDateString()}`}</p>
        <h2 className="content-card-title">{test.title}</h2>
        <p>{e.action || "A reflection on your result."}</p>
        <div className="reflection-actions"><Link className="text-link" href={`/test/${test.slug}/results/?r=${encodeURIComponent(e.encoded)}`}>Open result & reflection →</Link>
          <button type="button" className="text-link" onClick={() => {
            if (deleteReflection(e.id)) { setEntries(loadReflections()); setStatus("Note deleted from this browser."); }
            else setStatus("Could not delete. Please check your browser storage settings.");
          }}>Delete note</button></div>
      </article>;
    })}</div>
    <p role="status">{status}</p>
  </>;
}
