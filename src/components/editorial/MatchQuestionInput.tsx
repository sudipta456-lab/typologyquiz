import { useState } from "react";
import type { MatchQuestion } from "@/lib/editorial/types";

export function MatchQuestionInput({ question, disabled, submitted, onAnswer }: { question: MatchQuestion; disabled: boolean; submitted?: Record<string, string>; onAnswer: (answer: Record<string, string>) => void }) {
  const [pairs, setPairs] = useState<Record<string, string>>({});
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const shown = submitted ?? pairs;
  function pair(leftId: string, rightId: string) {
    if (disabled) return;
    const next = Object.fromEntries(Object.entries(pairs).filter(([left, right]) => left !== leftId && (!rightId || right !== rightId)));
    if (rightId) next[leftId] = rightId;
    setPairs(next); setSelectedLeft(null);
  }
  return <div>
    <p id="match-help">Choose an item on the left, then its match on the right. You can also use the dropdowns below.</p>
    <div aria-describedby="match-help" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      <div style={{ display: "grid", gap: 8 }}>{question.left.map(item => <button type="button" key={item.id} disabled={disabled} aria-pressed={selectedLeft === item.id} onClick={() => setSelectedLeft(item.id)}>{item.label}</button>)}</div>
      <div style={{ display: "grid", gap: 8 }}>{question.right.map(item => <button type="button" key={item.id} disabled={disabled || !selectedLeft} onClick={() => selectedLeft && pair(selectedLeft, item.id)}>{item.label}</button>)}</div>
    </div>
    <div aria-label="Current matches" style={{ marginTop: 16 }}>{question.left.map(left => {
      const rightId = shown[left.id]; const right = question.right.find(item => item.id === rightId);
      return <div key={left.id} style={{ display: "grid", gridTemplateColumns: "minmax(100px, 1fr) auto minmax(120px, 1fr)", gap: 8, alignItems: "center", marginBottom: 8 }}>
        <span>{left.label}</span><span aria-hidden="true">→</span>
        {disabled ? <span>{right?.label ?? "Not matched"}</span> : <select aria-label={`Match for ${left.label}`} value={rightId ?? ""} onChange={event => pair(left.id, event.target.value)}><option value="">Choose…</option>{question.right.map(item => <option key={item.id} value={item.id} disabled={Object.entries(pairs).some(([key, value]) => key !== left.id && value === item.id)}>{item.label}</option>)}</select>}
      </div>;
    })}</div>
    {!disabled && <button type="button" className="btn-primary" disabled={Object.keys(pairs).length !== question.left.length} onClick={() => onAnswer(pairs)}>Lock in matches</button>}
  </div>;
}
