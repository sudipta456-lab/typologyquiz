"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { SITE } from "@/lib/site";
import { QuizSharePanel } from "@/components/QuizSharePanel";
import { trackInteractiveQuizEvent } from "@/lib/analytics";
import { isCompleteAnswer } from "@/lib/interactive/completion";
import { MAX_REFLECTION_LENGTH, scoreQuiz, visibleQuestions } from "@/lib/interactive/engine";
import { progressKey, readProgress, serializeProgress } from "@/lib/interactive/progress";
import type { Answer, Answers, Option, Question, Quiz, Source } from "@/lib/interactive/types";
import { OriginalAudio } from "./OriginalAudio";
import { QuizDiagram } from "./QuizDiagram";
import styles from "./InteractiveQuiz.module.css";

interface Props {
  quiz: Quiz;
}

type Stage = "intro" | "handoff" | "play" | "result";
type Draft = Answer | undefined;

/** Stable fallback so memo dependencies do not change on every render. */
const NO_ANSWERS: Answers = {};

/* ---------- storage (guarded; read through an external store so hydration matches) ---------- */

const storageListeners = new Set<() => void>();

function readRaw(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeRaw(key: string, value: string | null) {
  try {
    if (value === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, value);
  } catch {
    /* storage unavailable or full: playing still works, it just will not resume */
  }
  storageListeners.forEach((listener) => listener());
}

function subscribeStorage(listener: () => void) {
  storageListeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    storageListeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

/* ---------- answer helpers ---------- */

const isStringArray = (a: unknown): a is string[] => Array.isArray(a) && a.every((x) => typeof x === "string");
const isEdgeArray = (a: unknown): a is [string, string][] =>
  Array.isArray(a) && a.every((x) => Array.isArray(x) && x.length === 2 && typeof x[0] === "string" && typeof x[1] === "string");
const isRecord = (a: unknown): a is Record<string, string> =>
  typeof a === "object" && a !== null && !Array.isArray(a);

const labelOf = (list: Option[], id: string) => list.find((o) => o.id === id)?.label ?? id;
const round1 = (n: number) => Math.round(n * 10) / 10;

function describeAnswer(q: Question, a: Answer | undefined): string {
  if (a === undefined) return "No answer";
  switch (q.kind) {
    case "choice":
    case "audio":
    case "hotspot":
      return typeof a === "string" ? labelOf(q.options, a) : "No answer";
    case "rank":
    case "order":
      return isStringArray(a) ? a.map((id, i) => `${i + 1}. ${labelOf(q.items, id)}`).join("; ") : "No answer";
    case "match":
      return isRecord(a)
        ? q.left.map((l) => `${l.label} → ${a[l.id] ? labelOf(q.right, a[l.id]) : "none"}`).join("; ")
        : "No answer";
    case "graph":
      if (!isEdgeArray(a)) return "No answer";
      return a.length ? a.map(([l, r]) => `${labelOf(q.left, l)} ↔ ${labelOf(q.right, r)}`).join("; ") : "No links";
    case "grid":
      return isRecord(a)
        ? q.cells.map((c) => `${c.label}: ${a[c.id] ? labelOf(c.options, a[c.id]) : "none"}`).join("; ")
        : "No answer";
    case "slider":
      return typeof a === "number" ? `${a} of 100 (0 = ${q.lowLabel}, 100 = ${q.highLabel})` : "No answer";
    case "reflection":
      return typeof a === "string" && a.trim() ? a : "Left blank";
  }
}

function describeCorrect(q: Question): string | null {
  switch (q.kind) {
    case "choice":
    case "audio":
    case "hotspot":
      return q.correct ? labelOf(q.options, q.correct) : null;
    case "order":
      if (q.correctOrder) return q.correctOrder.map((id, i) => `${i + 1}. ${labelOf(q.items, id)}`).join("; ");
      if (q.precedence?.length)
        return `Any order where ${q.precedence.map(([a, b]) => `${labelOf(q.items, a)} comes before ${labelOf(q.items, b)}`).join(", ")}`;
      return null;
    case "match":
      return q.pairs ? q.left.map((l) => `${l.label} → ${q.pairs?.[l.id] ? labelOf(q.right, q.pairs[l.id]) : "none"}`).join("; ") : null;
    case "graph":
      return q.edges.length ? q.edges.map(([l, r]) => `${labelOf(q.left, l)} ↔ ${labelOf(q.right, r)}`).join("; ") : "No links";
    case "grid":
      return q.cells.map((c) => `${c.label}: ${labelOf(c.options, c.correct)}`).join("; ");
    default:
      return null;
  }
}

function canonical(a: Answer | undefined): string {
  if (a === undefined) return "";
  if (isEdgeArray(a)) return JSON.stringify([...a].map((e) => e.join("\u0000")).sort());
  if (isRecord(a)) return JSON.stringify(Object.keys(a).sort().map((k) => [k, a[k]]));
  return JSON.stringify(a);
}

function pruneHidden(quiz: Quiz, answers: Answers): Answers {
  // Dropping one hidden answer can hide questions that depend on it, so repeat until stable.
  let current = answers;
  for (let i = 0; i <= quiz.questions.length; i++) {
    const visible = new Set(visibleQuestions(quiz, current).map((q) => q.id));
    const keys = Object.keys(current);
    const kept = keys.filter((k) => visible.has(k));
    if (kept.length === keys.length) return current;
    current = Object.fromEntries(kept.map((k) => [k, current[k]]));
  }
  return current;
}

/** Fixed, repeatable shuffle so order tasks never open already solved. */
function defaultOrder(q: Question & { items: Option[] }): string[] {
  const ids = q.items.map((i) => i.id);
  let seed = 2166136261;
  for (const ch of q.id) seed = Math.imul(seed ^ ch.charCodeAt(0), 16777619) >>> 0;
  const out = [...ids];
  for (let i = out.length - 1; i > 0; i--) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = seed % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  if (q.kind === "order" && q.correctOrder && out.join() === q.correctOrder.join() && out.length > 1) out.push(out.shift() as string);
  return out;
}

function errorFor(q: Question): string {
  switch (q.kind) {
    case "rank":
    case "order":
      return "Move an item, or choose “Keep this order”, to confirm your order.";
    case "slider":
      return "Confirm a position to continue.";
    case "match":
      return "Match every item to continue.";
    case "grid":
      return "Choose an option in every row to continue.";
    case "graph":
      return "Tick the links that apply, or choose “No links apply”.";
    default:
      return "Choose an answer to continue.";
  }
}

/* ---------- input controls ---------- */

function ChoiceList({ name, options, value, onChange }: { name: string; options: Option[]; value: Draft; onChange: (id: string) => void }) {
  return (
    <div className={styles.choices}>
      {options.map((option) => (
        <label key={option.id} className={styles.choice}>
          <input type="radio" name={name} checked={value === option.id} onChange={() => onChange(option.id)} />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}

function MoveList({
  items,
  order,
  confirmed,
  hint,
  onChange,
  onConfirm,
}: {
  items: Option[];
  order: string[];
  confirmed: boolean;
  hint: string;
  onChange: (next: string[]) => void;
  onConfirm: () => void;
}) {
  const [note, setNote] = useState("");
  const move = (from: number, to: number) => {
    if (to < 0 || to >= order.length) return;
    const next = [...order];
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item);
    onChange(next);
    setNote(`${labelOf(items, item)} moved to position ${to + 1} of ${order.length}.`);
  };
  return (
    <div>
      <p className={styles.hint}>{hint}</p>
      <ol className={styles.moveList}>
        {order.map((id, i) => {
          const label = labelOf(items, id);
          return (
            <li key={id} className={styles.moveItem}>
              <span className={styles.moveNum} aria-hidden="true">
                {i + 1}
              </span>
              <span className={styles.moveLabel}>{label}</span>
              <span className={styles.moveBtns}>
                <button
                  type="button"
                  className={styles.iconBtn}
                  disabled={i === 0}
                  aria-label={`Move ${label} up, now position ${i + 1} of ${order.length}`}
                  onClick={() => move(i, i - 1)}
                >
                  <span aria-hidden="true">↑</span>
                </button>
                <button
                  type="button"
                  className={styles.iconBtn}
                  disabled={i === order.length - 1}
                  aria-label={`Move ${label} down, now position ${i + 1} of ${order.length}`}
                  onClick={() => move(i, i + 1)}
                >
                  <span aria-hidden="true">↓</span>
                </button>
              </span>
            </li>
          );
        })}
      </ol>
      <div className={styles.inlineRow}>
        <button type="button" className={styles.secondaryBtn} onClick={onConfirm}>
          Keep this order
        </button>
        <span className={styles.status}>{confirmed ? "Order confirmed." : "Not confirmed yet."}</span>
      </div>
      <p className={styles.srOnly} role="status" aria-live="polite">
        {note}
      </p>
    </div>
  );
}

function TaskInput({
  q,
  draft,
  setDraft,
  pending,
  setPending,
  describedBy,
}: {
  q: Question;
  draft: Draft;
  setDraft: (v: Draft) => void;
  pending: number | undefined;
  setPending: (v: number) => void;
  describedBy: string;
}) {
  const uid = useId();
  switch (q.kind) {
    case "choice":
      return (
        <fieldset className={styles.fieldset} aria-describedby={describedBy}>
          <legend className={styles.srOnly}>Choose one answer</legend>
          <ChoiceList name={`${uid}-c`} options={q.options} value={draft} onChange={setDraft} />
        </fieldset>
      );
    case "audio":
      return (
        <div>
          <OriginalAudio tones={q.tones} transcript={q.transcript} />
          <fieldset className={styles.fieldset} aria-describedby={describedBy}>
            <legend className={styles.srOnly}>Choose one answer</legend>
            <ChoiceList name={`${uid}-a`} options={q.options} value={draft} onChange={setDraft} />
          </fieldset>
        </div>
      );
    case "hotspot":
      return (
        <QuizDiagram
          diagram={q.diagram}
          options={q.options}
          value={typeof draft === "string" ? draft : undefined}
          onChange={setDraft}
        />
      );
    case "rank":
    case "order": {
      const fallback = q.kind === "order" ? defaultOrder(q) : q.items.map((i) => i.id);
      const valid =
        isStringArray(draft) && draft.length === q.items.length && draft.every((id) => q.items.some((i) => i.id === id));
      const order = valid ? (draft as string[]) : fallback;
      return (
        <MoveList
          key={q.id}
          items={q.items}
          order={order}
          confirmed={valid}
          hint={
            q.kind === "rank"
              ? "Put the item you rate highest first. Use the arrow buttons."
              : "Arrange the items in sequence using the arrow buttons."
          }
          onChange={setDraft}
          onConfirm={() => setDraft(order)}
        />
      );
    }
    case "match": {
      const value = isRecord(draft) ? draft : {};
      return (
        <div className={styles.rows}>
          {q.left.map((left) => (
            <div key={left.id} className={styles.selectRow}>
              <label htmlFor={`${uid}-${left.id}`}>{left.label}</label>
              <select
                id={`${uid}-${left.id}`}
                value={value[left.id] ?? ""}
                onChange={(e) => {
                  const next = { ...value };
                  if (e.target.value) next[left.id] = e.target.value;
                  else delete next[left.id];
                  setDraft(Object.keys(next).length ? next : undefined);
                }}
              >
                <option value="">Choose…</option>
                {q.right.map((right) => (
                  <option key={right.id} value={right.id}>
                    {right.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      );
    }
    case "graph": {
      const edges = isEdgeArray(draft) ? draft : [];
      const has = (l: string, r: string) => edges.some(([a, b]) => a === l && b === r);
      const toggle = (l: string, r: string) => {
        setDraft(has(l, r) ? edges.filter(([a, b]) => !(a === l && b === r)) : [...edges, [l, r]]);
      };
      return (
        <div className={styles.rows}>
          <p className={styles.hint}>Tick every link that applies. A row may have several, or none.</p>
          {q.left.map((left) => (
            <fieldset key={left.id} className={styles.fieldset}>
              <legend className={styles.rowLegend}>{left.label}</legend>
              <div className={styles.choices}>
                {q.right.map((right) => (
                  <label key={right.id} className={styles.choice}>
                    <input type="checkbox" checked={has(left.id, right.id)} onChange={() => toggle(left.id, right.id)} />
                    <span>{right.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
          <div className={styles.inlineRow}>
            <button type="button" className={styles.secondaryBtn} onClick={() => setDraft([])}>
              No links apply
            </button>
            <span className={styles.status}>
              {Array.isArray(draft) ? `${edges.length} link${edges.length === 1 ? "" : "s"} chosen.` : "Nothing chosen yet."}
            </span>
          </div>
        </div>
      );
    }
    case "grid": {
      const value = isRecord(draft) ? draft : {};
      return (
        <div className={styles.rows}>
          {q.cells.map((cell) => (
            <fieldset key={cell.id} className={styles.fieldset}>
              <legend className={styles.rowLegend}>{cell.label}</legend>
              <ChoiceList
                name={`${uid}-${cell.id}`}
                options={cell.options}
                value={value[cell.id]}
                onChange={(id) => setDraft({ ...value, [cell.id]: id })}
              />
            </fieldset>
          ))}
        </div>
      );
    }
    case "slider": {
      const confirmed = typeof draft === "number" ? draft : undefined;
      const shown = pending ?? confirmed ?? 50;
      return (
        <div className={styles.slider}>
          <label htmlFor={`${uid}-range`} className={styles.srOnly}>
            Position between {q.lowLabel} and {q.highLabel}
          </label>
          <input
            id={`${uid}-range`}
            type="range"
            min={0}
            max={100}
            step={1}
            value={shown}
            aria-valuetext={`${shown} of 100, between ${q.lowLabel} and ${q.highLabel}`}
            onChange={(e) => setPending(Number(e.target.value))}
          />
          <div className={styles.sliderEnds} aria-hidden="true">
            <span>{q.lowLabel}</span>
            <span>{q.highLabel}</span>
          </div>
          <div className={styles.inlineRow}>
            <button type="button" className={styles.secondaryBtn} onClick={() => setDraft(shown)}>
              Confirm position ({shown})
            </button>
            <span className={styles.status}>
              {confirmed === undefined ? "Not confirmed yet." : confirmed === shown ? `Confirmed at ${confirmed}.` : `Confirmed at ${confirmed}; confirm again to change.`}
            </span>
          </div>
        </div>
      );
    }
    case "reflection":
      return (
        <div className={styles.reflection}>
          <label htmlFor={`${uid}-note`}>{q.hint} (optional)</label>
          <textarea
            id={`${uid}-note`}
            rows={5}
            maxLength={MAX_REFLECTION_LENGTH}
            value={typeof draft === "string" ? draft : ""}
            onChange={(e) => setDraft(e.target.value)}
          />
          <p className={styles.hint}>Stays on this page only. It is not saved, scored or sent anywhere.</p>
        </div>
      );
  }
}

/* ---------- results ---------- */

function SourceList({ ids, sources }: { ids: string[]; sources: Source[] }) {
  const found = ids.map((id) => sources.find((s) => s.id === id)).filter((s): s is Source => !!s);
  if (!found.length) return null;
  return (
    <ul className={styles.sources} aria-label="Sources">
      {found.map((s) => (
        <li key={s.id}>
          {s.url ? (
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ) : (
            <span>{s.label}</span>
          )}
          {s.kind === "original" && <em> (original case written for this quiz)</em>}
        </li>
      ))}
    </ul>
  );
}

function creditBadge(credit: number) {
  if (credit >= 1) return { text: "Correct", cls: styles.badgeOk };
  if (credit > 0) return { text: `Partly correct (${Math.round(credit * 100)}%)`, cls: styles.badgePart };
  return { text: "Not correct", cls: styles.badgeNo };
}

function ShareBox({ quiz, accuracy }: { quiz: Quiz; accuracy?: string }) {
  const url = `${SITE.url}/quizzes/${quiz.slug}/`;
  return <QuizSharePanel title={quiz.title} url={url} defaultMessage={`I tried “${quiz.title}” on TypologyQuiz.`} optionalText={accuracy} optionalTextLabel="Add my accuracy" />;
}

function ReviewHeader({ q, number }: { q: Question; number: number }) {
  return (
    <>
      <p className={styles.reviewNum}>Task {number}</p>
      <h4 className={styles.reviewPrompt}>{q.prompt}</h4>
    </>
  );
}

function RelatedLinks({ quiz }: { quiz: Quiz }) {
  return (
    <nav className={styles.related} aria-label="More quizzes">
      <Link href={`/quizzes/category/${quiz.categoryId}/`}>More quizzes in this category</Link>
      <Link href="/quizzes/">All quizzes</Link>
    </nav>
  );
}

function SoloResult({ quiz, answers, onRestart }: { quiz: Quiz; answers: Answers; onRestart: () => void }) {
  const result = useMemo(() => scoreQuiz(quiz, answers), [quiz, answers]);
  const questions = useMemo(() => visibleQuestions(quiz, answers), [quiz, answers]);
  const creditById = new Map(result.review.map((r) => [r.id, r.credit]));
  const accuracyText = result.total > 0 ? `I scored ${Math.round(result.percent)}% on the checkable tasks.` : undefined;

  return (
    <div className={styles.result}>
      <h2 className={styles.resultTitle}>Your results</h2>

      {result.total > 0 && (
        <section className={styles.panel} aria-label="Knowledge accuracy">
          <p className={styles.bigNumber}>{Math.round(result.percent)}%</p>
          <p>
            Accuracy on the {result.total} checkable task{result.total === 1 ? "" : "s"}: {round1(result.correct)} of {result.total} credit.
            Partly right answers earn partial credit. Preference and reflection tasks do not count toward accuracy.
          </p>
        </section>
      )}

      {result.dimensions.length > 0 && (
        <section className={styles.panel} aria-label="Your choices">
          <h3>Your choices</h3>
          <p className={styles.hint}>A description of the options you picked in this quiz. It is not a test score, a norm or a diagnosis.</p>
          {result.dimensions.map((d) => {
            const lean = d.value < 45 ? `Leaned toward ${d.low}` : d.value > 55 ? `Leaned toward ${d.high}` : "Near the middle";
            return (
              <div key={d.id} className={styles.dimension}>
                <div className={styles.dimensionEnds}>
                  <span>{d.low}</span>
                  <span>{d.high}</span>
                </div>
                <div className={styles.track} role="img" aria-label={`${lean}: ${Math.round(d.value)} on a 0 to 100 scale`}>
                  <span className={styles.marker} style={{ left: `${Math.min(100, Math.max(0, d.value))}%` }} />
                </div>
                <p>
                  <strong>{lean}.</strong> {d.description}
                </p>
              </div>
            );
          })}
        </section>
      )}

      <section aria-label="Review">
        <h3>Task review</h3>
        {quiz.sections.map((section) => {
          const inSection = questions.filter((q) => q.sectionId === section.id);
          if (!inSection.length) return null;
          return (
            <div key={section.id} className={styles.reviewSection}>
              <h4 className={styles.sectionHeading}>{section.title}</h4>
              {section.description && <p className={styles.hint}>{section.description}</p>}
              <ol className={styles.reviewList}>
                {inSection.map((q) => {
                  const credit = creditById.get(q.id) ?? null;
                  const correct = credit !== null ? describeCorrect(q) : null;
                  const badge = credit !== null ? creditBadge(credit) : null;
                  return (
                    <li key={q.id} className={styles.reviewItem}>
                      <ReviewHeader q={q} number={questions.indexOf(q) + 1} />
                      {badge ? <p className={`${styles.badge} ${badge.cls}`}>{badge.text}</p> : <p className={`${styles.badge} ${styles.badgeNeutral}`}>Your choice, no right answer</p>}
                      <p>
                        <strong>Your answer: </strong>
                        {describeAnswer(q, answers[q.id])}
                      </p>
                      {correct && (
                        <p>
                          <strong>Correct answer: </strong>
                          {correct}
                        </p>
                      )}
                      <p className={styles.explanation}>{q.explanation}</p>
                      <SourceList ids={q.sourceIds} sources={quiz.sources} />
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </section>

      <ShareBox quiz={quiz} accuracy={accuracyText} />
      <div className={styles.inlineRow}>
        <button type="button" className={styles.secondaryBtn} onClick={onRestart}>
          Play again
        </button>
      </div>
      <RelatedLinks quiz={quiz} />
    </div>
  );
}

function GroupResult({ quiz, players, onRestart }: { quiz: Quiz; players: Answers[]; onRestart: () => void }) {
  const results = useMemo(() => players.map((a) => scoreQuiz(quiz, a)), [quiz, players]);
  const lists = useMemo(() => players.map((a) => visibleQuestions(quiz, a)), [quiz, players]);
  const common = lists[0].filter((q) => lists.every((list) => list.some((x) => x.id === q.id)));
  const comparable = common.filter((q) => q.kind !== "reflection");
  const agreed = comparable.filter((q) => {
    const first = canonical(players[0][q.id]);
    return first !== "" && players.every((a) => canonical(a[q.id]) === first);
  });
  const percent = comparable.length ? Math.round((agreed.length / comparable.length) * 100) : 0;

  return (
    <div className={styles.result}>
      <h2 className={styles.resultTitle}>Group comparison</h2>
      <section className={styles.panel} aria-label="Agreement">
        <p className={styles.bigNumber}>{percent}%</p>
        <p>
          The {players.length} players gave identical answers on {agreed.length} of {comparable.length} comparable tasks. Private
          reflections are not compared. Players are anonymous. Your answers stay in this tab.
        </p>
      </section>

      <section className={styles.panel} aria-label="Players">
        <h3>Players</h3>
        <ul className={styles.playerList}>
          {results.map((r, i) => (
            <li key={i}>
              <strong>Player {i + 1}</strong>
              {r.total > 0 && <span> · accuracy {Math.round(r.percent)}%</span>}
              {r.dimensions.map((d) => (
                <span key={d.id}>
                  {" "}
                  · {Math.round(d.value)}/100 from {d.low} to {d.high}
                </span>
              ))}
            </li>
          ))}
        </ul>
        {results[0].dimensions.length > 0 && (
          <p className={styles.hint}>Choice summaries describe picks in this quiz only. They are not norms or diagnoses.</p>
        )}
      </section>

      <section aria-label="Task by task">
        <h3>Task by task</h3>
        <ol className={styles.reviewList}>
          {comparable.map((q, n) => {
            const credits = results.map((r) => r.review.find((x) => x.id === q.id)?.credit ?? null);
            const objective = credits.some((c) => c !== null);
            const correct = objective ? describeCorrect(q) : null;
            const same = agreed.includes(q);
            return (
              <li key={q.id} className={styles.reviewItem}>
                <ReviewHeader q={q} number={n + 1} />
                <p className={`${styles.badge} ${same ? styles.badgeOk : styles.badgePart}`}>{same ? "Everyone agreed" : "Answers differed"}</p>
                <ul className={styles.playerList}>
                  {players.map((a, i) => (
                    <li key={i}>
                      <strong>Player {i + 1}: </strong>
                      {describeAnswer(q, a[q.id])}
                      {credits[i] !== null && <em> — {creditBadge(credits[i] as number).text.toLowerCase()}</em>}
                    </li>
                  ))}
                </ul>
                {correct && (
                  <p>
                    <strong>Correct answer: </strong>
                    {correct}
                  </p>
                )}
                <p className={styles.explanation}>{q.explanation}</p>
                <SourceList ids={q.sourceIds} sources={quiz.sources} />
              </li>
            );
          })}
        </ol>
      </section>

      <ShareBox quiz={quiz} />
      <div className={styles.inlineRow}>
        <button type="button" className={styles.secondaryBtn} onClick={onRestart}>
          Play again
        </button>
      </div>
      <RelatedLinks quiz={quiz} />
    </div>
  );
}

/* ---------- player ---------- */

export function QuizPlayer({ quiz }: Props) {
  const uid = useId();
  const passAndPlay = quiz.playMode === "pass-and-play";
  const key = useMemo(() => progressKey(quiz), [quiz]);
  const rawSaved = useSyncExternalStore(subscribeStorage, () => readRaw(key), () => null);
  const saved = useMemo(() => (rawSaved && !passAndPlay ? readProgress(quiz, rawSaved) : null), [rawSaved, quiz, passAndPlay]);

  const [stage, setStage] = useState<Stage>("intro");
  const [playerCount, setPlayerCount] = useState(2);
  const [player, setPlayer] = useState(0);
  const [players, setPlayers] = useState<Answers[]>([{}]);
  const [index, setIndex] = useState(0);
  const [draft, setDraft] = useState<Draft>(undefined);
  const [pending, setPending] = useState<Record<string, number>>({});
  const [error, setError] = useState("");
  const headingRef = useRef<HTMLDivElement>(null);
  // One start and one complete event per attempt, sent from handlers rather than effects.
  const attempt = useRef({ started: false, completed: false });

  const answers = players[player] ?? NO_ANSWERS;
  const questions = useMemo(() => visibleQuestions(quiz, answers), [quiz, answers]);
  const safeIndex = Math.min(index, Math.max(0, questions.length - 1));
  const current: Question | undefined = questions[safeIndex];

  useEffect(() => {
    if (stage !== "intro") headingRef.current?.focus();
  }, [stage, safeIndex, player]);

  const persist = (next: Answers, at: number) => {
    if (!passAndPlay) writeRaw(key, serializeProgress(quiz, next, at));
  };

  const setAnswers = (next: Answers) => setPlayers((all) => all.map((a, i) => (i === player ? next : a)));

  const goTo = (list: Question[], at: number, next: Answers) => {
    const clamped = Math.min(Math.max(0, at), Math.max(0, list.length - 1));
    setIndex(clamped);
    setDraft(list[clamped] ? next[list[clamped].id] : undefined);
    setError("");
  };

  const trackStart = () => {
    attempt.current = { started: true, completed: false };
    trackInteractiveQuizEvent("interactive_quiz_start", quiz.id, quiz.version);
  };

  const trackComplete = () => {
    if (attempt.current.completed) return;
    attempt.current.completed = true;
    trackInteractiveQuizEvent("interactive_quiz_complete", quiz.id, quiz.version);
  };

  const begin = () => {
    trackStart();
    setPlayers(Array.from({ length: passAndPlay ? playerCount : 1 }, () => ({})));
    setPlayer(0);
    setIndex(0);
    setDraft(undefined);
    setError("");
    setPending({});
    if (!passAndPlay) writeRaw(key, null);
    setStage(passAndPlay ? "handoff" : "play");
  };

  const resume = () => {
    if (!saved) return;
    trackStart();
    const restored = pruneHidden(quiz, saved.answers);
    const list = visibleQuestions(quiz, restored);
    setPlayers([restored]);
    setPlayer(0);
    setPending({});
    goTo(list, saved.index, restored);
    setStage("play");
  };

  const commit = (): Answers | null => {
    if (!current) return null;
    const value: Draft = current.kind === "reflection" ? (typeof draft === "string" ? draft : "") : draft;
    if (value === undefined || !isCompleteAnswer(current, value)) return null;
    return pruneHidden(quiz, { ...answers, [current.id]: value });
  };

  const next = () => {
    if (!current) return;
    const merged = commit();
    if (!merged) {
      setError(errorFor(current));
      return;
    }
    setAnswers(merged);
    const list = visibleQuestions(quiz, merged);
    if (safeIndex + 1 >= list.length) {
      if (passAndPlay && player + 1 < players.length) {
        setPlayer(player + 1);
        setIndex(0);
        setDraft(undefined);
        setPending({});
        setError("");
        setStage("handoff");
      } else {
        if (!passAndPlay) writeRaw(key, null);
        trackComplete();
        setStage("result");
      }
      return;
    }
    persist(merged, safeIndex + 1);
    goTo(list, safeIndex + 1, merged);
  };

  const back = () => {
    if (safeIndex === 0) return;
    const merged = commit() ?? answers;
    setAnswers(merged);
    const list = visibleQuestions(quiz, merged);
    persist(merged, safeIndex - 1);
    goTo(list, safeIndex - 1, merged);
  };

  const restart = () => {
    if (!passAndPlay) writeRaw(key, null);
    setPlayers([{}]);
    setPlayer(0);
    setIndex(0);
    setDraft(undefined);
    setPending({});
    setError("");
    attempt.current = { started: false, completed: false };
    setStage("intro");
  };

  const sectionIds = quiz.sections.filter((s) => questions.some((q) => q.sectionId === s.id));
  const sectionIndex = current ? sectionIds.findIndex((s) => s.id === current.sectionId) : 0;
  const section = sectionIds[sectionIndex];
  const isLast = safeIndex + 1 >= questions.length;
  const lastPlayer = !passAndPlay || player + 1 >= players.length;

  if (stage === "intro") {
    return (
      <div className={styles.player}>
        {saved && (
          <div className={styles.resume} role="status">
            <p>You have an unfinished attempt at task {Math.min(saved.index + 1, questions.length || saved.index + 1)}. Reflection text is never saved.</p>
            <div className={styles.inlineRow}>
              <button type="button" className={styles.primaryBtn} onClick={resume}>
                Resume
              </button>
              <button type="button" className={styles.secondaryBtn} onClick={() => writeRaw(key, null)}>
                Discard it
              </button>
            </div>
          </div>
        )}
        <div className={styles.panel}>
          <p className={styles.meta}>
            <span>
              {quiz.questions.some((q) => q.showIf) ? "up to " : ""}
              {quiz.questions.length} tasks
            </span>
            <span>{quiz.sections.length} sections</span>
            <span>about {quiz.minutes} min</span>
          </p>
          {quiz.note && <p className={styles.note}>{quiz.note}</p>}
          <p className={styles.hint}>
            {passAndPlay
              ? "One device, taken in turns. Players are anonymous; answers stay in this tab and are compared at the end."
              : "Your choices are summarized at the end, and any tasks with right answers are checked separately. Progress is kept in this browser only so you can resume."}
          </p>
          {passAndPlay && (
            <fieldset className={styles.fieldset}>
              <legend className={styles.rowLegend}>How many players?</legend>
              <div className={styles.choices}>
                {[2, 3, 4].map((n) => (
                  <label key={n} className={styles.choice}>
                    <input type="radio" name={`${uid}-players`} checked={playerCount === n} onChange={() => setPlayerCount(n)} />
                    <span>{n} players</span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}
          <button type="button" className={styles.primaryBtn} onClick={begin}>
            {passAndPlay ? "Start group quiz" : saved ? "Start over" : "Start quiz"}
          </button>
        </div>
      </div>
    );
  }

  if (stage === "handoff") {
    return (
      <div className={styles.player}>
        <div className={`${styles.panel} ${styles.handoff}`}>
          <div ref={headingRef} tabIndex={-1}>
            <h2>Player {player + 1}, you’re up</h2>
          </div>
          <p>
            Pass the device to Player {player + 1} of {players.length}. Earlier answers are hidden. Start when only you are looking.
          </p>
          <button type="button" className={styles.primaryBtn} onClick={() => setStage("play")}>
            I’m Player {player + 1}, start
          </button>
        </div>
      </div>
    );
  }

  if (stage === "result") {
    return (
      <div className={styles.player}>
        <div ref={headingRef} tabIndex={-1} className={styles.srOnly}>
          Results ready
        </div>
        {passAndPlay ? (
          <GroupResult quiz={quiz} players={players} onRestart={restart} />
        ) : (
          <SoloResult quiz={quiz} answers={answers} onRestart={restart} />
        )}
      </div>
    );
  }

  if (!current) {
    return (
      <div className={styles.player}>
        <p className={styles.errorText}>This quiz has no tasks to show.</p>
      </div>
    );
  }

  const promptId = `${uid}-prompt`;
  const errorId = `${uid}-error`;
  const sliderPending = pending[current.id];

  return (
    <div className={styles.player}>
      <div className={styles.progressBlock}>
        <p className={styles.progressText}>
          {passAndPlay && <span>Player {player + 1} of {players.length} · </span>}
          <span>
            Section {Math.max(1, sectionIndex + 1)} of {sectionIds.length}
          </span>
          <span> · Task {safeIndex + 1} of {questions.length}</span>
        </p>
        <progress className={styles.progress} max={questions.length} value={safeIndex + 1} aria-label="Quiz progress" />
      </div>

      <section className={styles.panel} aria-labelledby={promptId}>
        <div ref={headingRef} tabIndex={-1} className={styles.questionHead}>
          {section && <p className={styles.sectionLabel}>{section.title}</p>}
          <h2 id={promptId} className={styles.prompt}>
            {current.prompt}
          </h2>
        </div>
        {section?.description && questions[safeIndex - 1]?.sectionId !== current.sectionId && (
          <p className={styles.hint}>{section.description}</p>
        )}
        {current.context && <p className={styles.context}>{current.context}</p>}
        <TaskInput
          key={current.id}
          q={current}
          draft={draft}
          setDraft={(v) => {
            setDraft(v);
            setError("");
          }}
          pending={sliderPending}
          setPending={(v) => setPending((p) => ({ ...p, [current.id]: v }))}
          describedBy={error ? errorId : promptId}
        />
        {error && (
          <p id={errorId} className={styles.errorText} role="alert">
            {error}
          </p>
        )}
      </section>

      <div className={styles.nav}>
        <button type="button" className={styles.secondaryBtn} onClick={back} disabled={safeIndex === 0}>
          Back
        </button>
        <button type="button" className={styles.primaryBtn} onClick={next}>
          {!isLast ? "Next" : lastPlayer ? "See results" : "Finish and hand over"}
        </button>
      </div>
    </div>
  );
}
