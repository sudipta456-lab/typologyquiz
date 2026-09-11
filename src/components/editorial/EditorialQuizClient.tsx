"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Answer, Edition, Question } from "@/lib/editorial/types";
import { scoreQuestion } from "@/lib/editorial/score";
import { advanceRun, emptyRun, loadRun, resultGrid, saveRun, type Run, type RunAction } from "@/lib/editorial-social/progress";
import { downloadResultCard, editionShare, isChallenge } from "@/lib/editorial-social/share";
import { trackEditorialEvent } from "@/lib/editorial-social/analytics";
import { ChoiceQuestionInput } from "./ChoiceQuestionInput";
import { MatchQuestionInput } from "./MatchQuestionInput";
import { OrderQuestionInput } from "./OrderQuestionInput";

function QuestionInput({ question, revealed, answer, onAnswer }: { question: Question; revealed: boolean; answer?: Answer; onAnswer: (answer: Answer) => void }) {
  switch (question.kind) {
    case "choice": case "image-choice": return <ChoiceQuestionInput question={question} disabled={revealed} revealed={revealed} picked={typeof answer === "string" ? answer : undefined} onAnswer={onAnswer} />;
    case "order": return <OrderQuestionInput question={question} disabled={revealed} submitted={Array.isArray(answer) ? answer : undefined} onAnswer={onAnswer} />;
    case "match": return <MatchQuestionInput question={question} disabled={revealed} submitted={answer && typeof answer === "object" && !Array.isArray(answer) ? answer : undefined} onAnswer={onAnswer} />;
  }
}

function CorrectAnswer({ question }: { question: Question }) {
  if (question.kind === "order") return <p><strong>Correct order:</strong> {question.correctOrder.map(id => question.items.find(item => item.id === id)?.label).join(" → ")}</p>;
  if (question.kind === "match") return <div><strong>Correct matches:</strong><ul>{question.left.map(left => <li key={left.id}>{left.label} → {question.right.find(right => right.id === question.correctPairs[left.id])?.label}</li>)}</ul></div>;
  return null;
}

export function EditorialQuizClient({ edition }: { edition: Edition }) {
  const [run, setRun] = useState<Run | null>(null);
  const current = useRef<Run | null>(null);
  const [message, setMessage] = useState("");
  const [storageBlocked, setStorageBlocked] = useState(false);
  const challengeTracked = useRef(false);
  const nextButton = useRef<HTMLButtonElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => { if (!challengeTracked.current && isChallenge(window.location.search)) { challengeTracked.current = true; trackEditorialEvent("quiz_challenge_open", edition); } }, [edition]);
  useEffect(() => { if (!run) return; if (run.phase === "reveal") nextButton.current?.focus(); else heading.current?.focus(); }, [run]);

  function begin(fresh: boolean) {
    const next = fresh ? emptyRun() : loadRun(edition) ?? emptyRun(); current.current = next; setRun(next); setMessage(""); setStorageBlocked(!saveRun(edition, next));
    if (next.answers.length === 0) trackEditorialEvent("quiz_start", edition);
  }
  function advance(action: RunAction) {
    if (!current.current) return; const next = advanceRun(edition, current.current, action); if (next === current.current) return;
    current.current = next; setRun(next); setStorageBlocked(!saveRun(edition, next)); if (next.phase === "complete") trackEditorialEvent("quiz_complete", edition);
  }
  async function share(mode: "native" | "copy" | "square" | "portrait") {
    if (!run || run.phase !== "complete") return; const grid = resultGrid(edition, run); const result = editionShare(edition, grid);
    try {
      if (mode === "square" || mode === "portrait") { downloadResultCard(edition, grid, mode === "portrait"); setMessage("Your score card is ready. Copy the challenge link to send with it."); }
      else if (mode === "native" && navigator.share) { await navigator.share({ title: result.title, text: result.text }); setMessage("Shared."); }
      else { await navigator.clipboard.writeText(result.text); setMessage("Score and edition link copied."); }
      trackEditorialEvent("quiz_share", edition);
    } catch (error) { if (error instanceof Error && error.name === "AbortError") return; setMessage("Sharing is unavailable here. Select and copy the score and link below."); }
  }

  if (!run) return <section className="quiz-card" style={{ cursor: "default", marginTop: 24 }}><h2 className="font-display" style={{ fontSize: "1.6rem" }}>How much do you remember?</h2><p>{edition.questions.length} questions, one point each. See an explanation and source after every answer.</p><p>Your progress is saved on this device when storage is available. Shared scores are casual challenges.</p><button className="btn-primary" onClick={() => begin(false)}>Start or resume</button><button className="btn-outline" style={{ marginLeft: 12 }} onClick={() => begin(true)}>Start fresh</button></section>;
  const storageNote = storageBlocked && <p role="status">This browser couldn&apos;t save progress. You can still finish this round.</p>;
  if (run.phase === "complete") {
    const grid = resultGrid(edition, run); const result = editionShare(edition, grid);
    return <section className="quiz-card" style={{ cursor: "default", marginTop: 24 }}><p className="eyebrow">Your round is complete</p><h2 ref={heading} tabIndex={-1} className="font-display" style={{ fontSize: "3rem" }}>{result.score} / {grid.length}</h2><p aria-label={grid.map((ok, i) => `Question ${i + 1}: ${ok ? "correct" : "incorrect"}`).join("; ")} style={{ fontSize: "1.5rem", overflowWrap: "anywhere" }}>{grid.map(ok => ok ? "🟩" : "⬜").join("")}</p><p>Invite a friend to this exact edition. The shared card contains no answers.</p><div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><button className="btn-primary" onClick={() => share("native")}>Share result</button><button className="btn-outline" onClick={() => share("copy")}>Copy score and link</button><button className="btn-outline" onClick={() => share("square")}>Square card</button><button className="btn-outline" onClick={() => share("portrait")}>Portrait card</button></div><p role="status">{message}</p><details><summary>Score and link for manual sharing</summary><textarea aria-label="Score and edition link" readOnly value={result.text} rows={6} style={{ width: "100%", marginTop: 12 }} /></details>{storageNote}<div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 24 }}><button className="btn-outline" onClick={() => begin(true)}>Play again</button><Link className="btn-primary" href="/weekly/">Browse editions</Link></div></section>;
  }
  const index = run.phase === "reveal" ? run.answers.length - 1 : run.answers.length; const question = edition.questions[index]; const revealed = run.phase === "reveal"; const picked = run.answers[index];
  return <section style={{ marginTop: 24 }}><p className="eyebrow">Question {index + 1} of {edition.questions.length}</p><div className="quiz-card" style={{ cursor: "default" }}><h2 ref={heading} tabIndex={-1} className="font-display" style={{ fontSize: "1.4rem", marginBottom: 20 }}>{question.prompt}</h2><QuestionInput key={question.id} question={question} revealed={revealed} answer={picked} onAnswer={answer => advance({ type: "answer", answer })} />{revealed && <div style={{ marginTop: 24 }}><p role="status" style={{ fontWeight: 700 }}>{scoreQuestion(question, picked) ? "Correct" : "Not quite"}</p><CorrectAnswer question={question} /><p style={{ lineHeight: 1.65 }}>{question.explanation}</p><p>{question.sources.map((source, i) => <a className="text-link" style={{ marginRight: 16 }} key={`${source.url}-${i}`} href={source.url} target="_blank" rel="noopener noreferrer nofollow">{source.label}</a>)}</p><button ref={nextButton} className="btn-primary" onClick={() => advance({ type: "next" })}>{index + 1 === edition.questions.length ? "See your score" : "Next question"}</button></div>}</div>{storageNote}</section>;
}
