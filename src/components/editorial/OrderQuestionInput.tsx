import { useState } from "react";
import type { OrderQuestion } from "@/lib/editorial/types";

export function OrderQuestionInput({ question, disabled, submitted, onAnswer }: { question: OrderQuestion; disabled: boolean; submitted?: string[]; onAnswer: (answer: string[]) => void }) {
  const [order, setOrder] = useState(() => [...question.items].reverse().map(item => item.id));
  const shown = submitted ?? order;
  function move(index: number, offset: number) {
    if (disabled) return;
    const target = index + offset;
    if (target < 0 || target >= order.length) return;
    const next = [...order]; [next[index], next[target]] = [next[target], next[index]]; setOrder(next);
  }
  return <div>
    <p id="order-help">Arrange the items from first to last. The large move buttons also work on touch screens.</p>
    <ol aria-describedby="order-help" style={{ display: "grid", gap: 10, paddingLeft: 28 }}>
      {shown.map((id, index) => <li key={id} style={{ padding: 10, border: "1px solid var(--line)", borderRadius: 8 }}>
        <span>{question.items.find(item => item.id === id)?.label}</span>
        {!disabled && <span style={{ float: "right", display: "flex", gap: 8 }}>
          <button type="button" aria-label={`Move ${question.items.find(item => item.id === id)?.label} up`} disabled={index === 0} onClick={() => move(index, -1)}>↑</button>
          <button type="button" aria-label={`Move ${question.items.find(item => item.id === id)?.label} down`} disabled={index === shown.length - 1} onClick={() => move(index, 1)}>↓</button>
        </span>}
      </li>)}
    </ol>
    {!disabled && <button type="button" className="btn-primary" onClick={() => onAnswer(order)}>Lock in order</button>}
  </div>;
}
