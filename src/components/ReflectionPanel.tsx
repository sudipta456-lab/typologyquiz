"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import type { TestDefinition, TestResult } from "@/lib/types";
import {
  CLARITY_OPTIONS, FIT_OPTIONS, OUTCOMES, loadReflections, newReflection, saveReflection,
  deleteReflection, reflectionId, reflectionCalendar, downloadReflectionFile, type ReflectionEntry,
} from "@/lib/reflections";

const subscribe = () => () => {};

export function ReflectionPanel(props: { result: TestResult; test: TestDefinition; encoded: string }) {
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  return hydrated ? <ReflectionForm key={props.encoded} {...props} /> : null;
}

function ReflectionForm({ encoded, test }: { result: TestResult; test: TestDefinition; encoded: string }) {
  const existing = loadReflections().find(e => e.id === reflectionId(encoded));
  const [entry, setEntry] = useState<ReflectionEntry>(() => existing ?? newReflection(encoded));
  const [saved, setSaved] = useState(!!existing);
  const [dirty, setDirty] = useState(false);
  const [status, setStatus] = useState("");
  function update(key: keyof ReflectionEntry, value: string) {
    setEntry(e => ({ ...e, [key]: value })); setDirty(true); setStatus("");
  }
  function save(e: React.FormEvent) {
    e.preventDefault();
    if (saveReflection(entry)) { setSaved(true); setDirty(false); setStatus("Saved in this browser. Nothing was sent to TypologyQuiz."); }
    else setStatus("Could not save. Browser storage may be unavailable, or your 25-note limit is full. You can still export your notes.");
  }
  function remove() {
    if (deleteReflection(entry.id)) {
      setSaved(false); setDirty(false); setEntry(newReflection(encoded)); setStatus("Deleted from this browser.");
    } else setStatus("Could not delete. Please check your browser storage settings.");
  }
  return (
    <details className="reflection-panel">
      <summary><span>{saved ? "Your reflection & next step" : "Make this result useful"}</span><small>{saved ? "Saved on this device" : "Optional · just for you"}</small></summary>
      <div className="reflection-body">
        <p>A result is a starting point. Notice what fits, question what misses, and choose one small thing to try.</p>
        <p className="reflection-privacy">Notes stay in this browser and are never sent to us. They do not train or validate the test. Anyone using this browser profile may see them.</p>
        <form onSubmit={save}>
          <div className="reflection-selects">
            <label>How well does it fit?<select value={entry.fit} onChange={e => update("fit", e.target.value)}><option value="">Choose, or skip</option>{FIT_OPTIONS.map(v => <option key={v}>{v}</option>)}</select></label>
            <label>Was it easy to understand?<select value={entry.clarity} onChange={e => update("clarity", e.target.value)}><option value="">Choose, or skip</option>{CLARITY_OPTIONS.map(v => <option key={v}>{v}</option>)}</select></label>
          </div>
          <label>What fits? <span>Think of a real example.</span><textarea maxLength={600} rows={2} value={entry.fits} onChange={e => update("fits", e.target.value)} /></label>
          <label>What misses? <span>For example, different at home and at work.</span><textarea maxLength={600} rows={2} value={entry.misses} onChange={e => update("misses", e.target.value)} /></label>
          <label>One thing to try over the next two weeks<textarea maxLength={600} rows={2} value={entry.action} onChange={e => update("action", e.target.value)} placeholder="For example: before my next difficult conversation, write down what I want to say." /></label>
          <p className="reflection-privacy">Keep it specific and manageable. When you come back, record what happened.</p>
          {saved && <fieldset className="reflection-review"><legend>When you come back</legend>
            <p>Your review date: {new Date(entry.reviewAt).toLocaleDateString()}. You can review sooner too.</p>
            <label>What happened?<select value={entry.outcome} onChange={e => update("outcome", e.target.value)}>{OUTCOMES.map(v => <option key={v}>{v}</option>)}</select></label>
            <label>What did you notice?<textarea maxLength={600} rows={2} value={entry.review} onChange={e => update("review", e.target.value)} /></label>
          </fieldset>}
          <div className="reflection-actions">
            <button type="submit" className="btn-primary">{saved ? "Save changes" : "Save on this device"}</button>
            <button type="button" className="btn-secondary" onClick={() => downloadReflectionFile(JSON.stringify({ title: test.title, ...entry }, null, 2), "typologyquiz-reflection.json", "application/json")}>Export notes</button>
            {saved && <button type="button" className="btn-secondary" onClick={remove}>Delete note</button>}
          </div>
        </form>
        {saved && <div className="reflection-actions">
          <button type="button" className="text-link" disabled={dirty} onClick={() => {
            downloadReflectionFile(reflectionCalendar(entry), "reflection-reminder.ics", "text/calendar");
            setStatus("Calendar file downloaded. Open it in your calendar to add the reminder; no reminder was scheduled automatically.");
          }}>Add a two-week calendar reminder</button>
          <Link href="/reflections/" className="text-link">All my reflections →</Link>
        </div>}
        <p className="reflection-privacy">All fields are optional. Saved notes expire after a year, when you next visit. Clearing browser data also removes them. An export contains your notes and result; keep it somewhere private.</p>
        <p role="status" className="reflection-status">{status}{dirty ? " Unsaved changes." : ""}</p>
      </div>
    </details>
  );
}
