"use client";

import Link from "next/link";
import { useRef, useState } from "react";

type Pick = { slug: string; title: string; description: string; timeMinutes: number; itemCount: number; tone: string };
export function QuizShelf({ picks }: { picks: Pick[] }) {
  const rail = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; scroll: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const [position, setPosition] = useState({ start: true, end: false });
  const move = (direction: number) => {
    const el = rail.current;
    if (el) el.scrollBy({ left: direction * ((el.firstElementChild?.getBoundingClientRect().width ?? 300) + 16), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  return <section className="quiz-shelf" aria-labelledby="picks-heading">
    <div className="discovery-section-head"><div><p className="eyebrow">Start with yourself</p><h2 id="picks-heading">Personality picks</h2></div>
      <div className="shelf-controls"><button type="button" aria-label="Previous quizzes" aria-controls="personality-shelf" disabled={position.start} onClick={() => move(-1)}>←</button><button type="button" aria-label="Next quizzes" aria-controls="personality-shelf" disabled={position.end} onClick={() => move(1)}>→</button></div>
    </div>
    <div id="personality-shelf" ref={rail} className="shelf-rail" role="region" aria-label="Featured personality quizzes. Swipe or use the arrow buttons." tabIndex={0}
      onScroll={event => { const el = event.currentTarget; setPosition({ start: el.scrollLeft < 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 }); }}
      onKeyDown={event => { if (event.target !== event.currentTarget) return; if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } }}
      onPointerDown={event => { if (event.pointerType === "mouse" && event.button === 0) { suppressClick.current = false; drag.current = { x: event.clientX, scroll: event.currentTarget.scrollLeft, moved: false }; } }}
      onPointerMove={event => { const start = drag.current; if (!start) return; const delta = start.x - event.clientX; if (Math.abs(delta) > 6) { start.moved = true; event.currentTarget.setPointerCapture(event.pointerId); event.currentTarget.classList.add("is-dragging"); event.currentTarget.scrollLeft = start.scroll + delta; } }}
      onPointerUp={event => { suppressClick.current = drag.current?.moved ?? false; drag.current = null; event.currentTarget.classList.remove("is-dragging"); if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
      onPointerCancel={event => { drag.current = null; event.currentTarget.classList.remove("is-dragging"); }}
      onPointerLeave={() => { if (!drag.current?.moved) drag.current = null; }}
      onClickCapture={event => { if (suppressClick.current) { event.preventDefault(); event.stopPropagation(); } suppressClick.current = false; drag.current = null; }}
      onDragStart={event => event.preventDefault()}>
      {picks.map((pick) => <Link key={pick.slug} href={`/test/${pick.slug}/`} className={`shelf-card tone-${pick.tone}`} draggable={false}>
        <div className="shelf-cover"><p className="shelf-duration">{pick.timeMinutes} min · {pick.itemCount} questions</p><h3>{pick.title}</h3><span className="shelf-cover-arrow" aria-hidden="true">↗</span></div>
        <div className="shelf-copy"><p>{pick.description}</p><span className="shelf-open">Take the quiz <span aria-hidden="true">→</span></span></div>
      </Link>)}
    </div>
    <Link href="/tests/" className="text-link shelf-browse">Browse all personality quizzes →</Link>
  </section>;
}
