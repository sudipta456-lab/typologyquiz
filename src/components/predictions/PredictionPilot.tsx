"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { listPredictionEvents, loadReceipts, receiptMatchesEvent, saveReceipt, submitPicks, verifyPrediction } from "@/lib/predictions/api";
import type { PredictionEvent, PredictionReceipt, PredictionSettlement } from "@/lib/predictions/types";

export function PredictionPilot() {
  const checkGeneration = useRef(0);
  const [events, setEvents] = useState<PredictionEvent[] | null>(null);
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [receipts, setReceipts] = useState<PredictionReceipt[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [receipt, setReceipt] = useState<string | null>(null);
  const [settlement, setSettlement] = useState<PredictionSettlement | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    queueMicrotask(() => { const saved = loadReceipts(); setReceipts(saved); if (saved.length) setReceipt(saved[0].receipt); });
    listPredictionEvents().then(setEvents).catch(() => { setEvents([]); setMessage("The prediction service is unavailable right now."); });
  }, []);

  async function submit(event: PredictionEvent) {
    const picks = event.questions.map((question) => ({ questionId: question.id, optionId: selected[`${event.id}:${event.revision}:${question.id}`] }));
    if (picks.some((pick) => !pick.optionId)) { setMessage("Choose one answer for every prediction."); return; }
    if (submitting || receipts.some((item) => receiptMatchesEvent(item, event))) return;
    checkGeneration.current += 1;
    setSubmitting(true);
    try {
      const issued = await submitPicks(event.id, picks);
      checkGeneration.current += 1;
      setReceipt(issued.receipt);
      setSettlement(null);
      const saved = { receipt: issued.receipt, eventId: issued.event.id, eventRevision: issued.event.revision, savedAt: issued.issuedAt };
      setReceipts((current) => [...current.filter((item) => !receiptMatchesEvent(item, issued.event)), saved]);
      const stored = saveReceipt(saved);
      setMessage(stored ? "Your server-signed receipt is saved on this device." : "Receipt issued. Copy it now because this browser could not save it.");
    } catch { setMessage("Your picks could not be signed. The round may be closed or unavailable."); }
    finally { setSubmitting(false); }
  }

  async function check(reveal: boolean) {
    if (!receipt) return;
    const generation = ++checkGeneration.current;
    try {
      const result = await verifyPrediction(receipt, reveal);
      if (generation !== checkGeneration.current) return;
      setSettlement(result.settlement); setMessage("");
    } catch {
      if (generation === checkGeneration.current) setMessage("This receipt could not be verified.");
    }
  }

  if (events === null) return <p role="status">Checking for a reviewed prediction round…</p>;
  const event = events.find((item) => item.phase === "open") ?? events[0];
  const currentReceipt = event && receipts.find((item) => receiptMatchesEvent(item, event));
  return <section className="quiz-card" style={{ cursor: "default", marginTop: 24 }}>
    {!event && <>
      <h2 className="font-display">No reviewed round is open</h2>
      <p>The pilot will appear here after an event schedule and questions pass editorial review. There is no placeholder countdown or pretend lock.</p>
    </>}
    {event && <>
      <p className="eyebrow">{event.phase === "open" ? "Open for picks" : event.phase}</p>
      <h2 className="font-display">{event.title}</h2>
      {event.description && <p>{event.description}</p>}
      <p>Locks at <time dateTime={event.locksAt}>{new Date(event.locksAt).toLocaleString()}</time>, using the server clock.</p>
      {event.questions.map((question) => <fieldset key={question.id} disabled={event.phase !== "open" || Boolean(currentReceipt) || submitting} style={{ margin: "1.5rem 0", border: "1px solid var(--line)", padding: 16 }}>
        <legend style={{ fontWeight: 700 }}>{question.prompt}</legend>
        {question.options.map((option) => <label key={option.id} style={{ display: "block", marginTop: 10 }}>
          <input type="radio" name={question.id} value={option.id} checked={selected[`${event.id}:${event.revision}:${question.id}`] === option.id}
            onChange={() => setSelected((current) => ({ ...current, [`${event.id}:${event.revision}:${question.id}`]: option.id }))} /> {option.label}
        </label>)}
      </fieldset>)}
      {event.phase === "open" && !currentReceipt && <button disabled={submitting} className="btn-primary" onClick={() => submit(event)}>Lock my picks</button>}
    </>}
    {receipt && <div style={{ marginTop: 24 }}>
      <h2 className="font-display">Your receipts</h2>
      <label>Saved round <select value={receipt} onChange={(change) => { checkGeneration.current += 1; setReceipt(change.target.value); setSettlement(null); setMessage(""); }}>
        {receipts.map((item) => <option key={`${item.eventId}:${item.eventRevision}`} value={item.receipt}>{item.eventId} — revision {item.eventRevision}</option>)}
      </select></label>
      <p>This proves these picks were signed before the cutoff. It does not prove one guest submitted only once. There are no wagers, prizes, or public leaderboard.</p>
      <details><summary>Copy or share the receipt</summary><textarea readOnly aria-label="Prediction receipt" value={receipt} rows={5} style={{ width: "100%", marginTop: 12 }} /><p>Anyone you share it with can see your selected picks.</p></details>
      <button className="btn-outline" onClick={() => check(false)}>Check outcome status</button>
      {settlement?.status === "pending" && <p>Outcome pending. Unsettled items are not scored as wrong.</p>}
      {(settlement?.status === "void" || settlement?.status === "cancelled" || settlement?.status === "corrected") && <p>This event was {settlement.status}; it is not scored.</p>}
      {settlement?.status === "settled" && settlement.spoiler && <div><p>The reviewed outcome is ready. Revealing it may spoil the episode.</p><button className="btn-primary" onClick={() => check(true)}>Reveal outcome</button></div>}
      {settlement?.status === "settled" && settlement.results && <div><h3>You matched {settlement.correct} of {settlement.total}</h3>{settlement.results.map((result) => <p key={result.questionId}>{result.correct ? "Matched" : "Different outcome"}: {result.explanation}</p>)}{settlement.recapHref && <Link className="text-link" href={settlement.recapHref}>Read the reviewed recap →</Link>}</div>}
    </div>}
    <p role="status">{message}</p>
  </section>;
}
