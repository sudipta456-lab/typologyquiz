"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type Archetype = { id: string; name: string; lead: string; detail: string };
type Scenario = { prompt: string; answers: readonly { label: string; result: string | null }[] };

const ALIEN_RESULTS: readonly Archetype[] = [
  { id: "grey", name: "Grey · Curious Analyst", lead: "You like to notice patterns and ask precise questions.", detail: "Your next move: pair careful observation with a little encouragement for the people around you." },
  { id: "nordic", name: "Nordic · Stellar Diplomat", lead: "You look for shared purpose and ways to build trust.", detail: "Your next move: make room for disagreement while keeping the conversation constructive." },
  { id: "reptilian", name: "Reptilian · Resourceful Strategist", lead: "You focus on practical plans and the constraints that matter.", detail: "Your next move: share the reasoning behind your plan so others can help improve it." },
  { id: "mantid", name: "Mantid · Systems Weaver", lead: "You notice connections and how the pieces work together.", detail: "Your next move: pick one useful small step before perfecting the whole system." },
  { id: "tall-white", name: "Tall White · Quiet Observer", lead: "You tend to notice subtle details before jumping in.", detail: "Your next move: say what you noticed; a small observation can help a group." },
];

const ALIEN_QUESTIONS: readonly Scenario[] = [
  { prompt: "A group is planning a trip and the details are getting tangled. What do you do first?", answers: [
    { label: "Spot the missing detail and ask a focused question.", result: "grey" }, { label: "Find a plan everyone can get behind.", result: "nordic" }, { label: "Check the budget, timing, and practical limits.", result: "reptilian" }, { label: "Map how the different plans affect one another.", result: "mantid" }, { label: "Listen for the concern nobody has voiced yet.", result: "tall-white" },
  ] },
  { prompt: "A puzzle has several possible solutions. Which part sounds most satisfying?", answers: [
    { label: "Testing each idea against the clues.", result: "grey" }, { label: "Helping the team compare ideas fairly.", result: "nordic" }, { label: "Finding the solution that works with the tools available.", result: "reptilian" }, { label: "Seeing how one clue connects to the whole puzzle.", result: "mantid" }, { label: "Noticing a quiet clue everyone else passed by.", result: "tall-white" },
  ] },
  { prompt: "A friend is learning something new. How are you most likely to help?", answers: [
    { label: "Ask what they have tried and what happened.", result: "grey" }, { label: "Help them feel comfortable asking questions.", result: "nordic" }, { label: "Break it into useful, doable steps.", result: "reptilian" }, { label: "Show how the parts fit together.", result: "mantid" }, { label: "Give them space, then mention what you noticed.", result: "tall-white" },
  ] },
  { prompt: "Your team has one afternoon to improve a shared project. What appeals?", answers: [
    { label: "Investigate the one detail causing the most confusion.", result: "grey" }, { label: "Get everyone aligned on what success means.", result: "nordic" }, { label: "Make a short plan and get the first task done.", result: "reptilian" }, { label: "Untangle the dependencies between tasks.", result: "mantid" }, { label: "Review the work quietly for small issues to flag.", result: "tall-white" },
  ] },
  { prompt: "When plans suddenly change, what is your natural first move?", answers: [
    { label: "Find out exactly what changed and why.", result: "grey" }, { label: "Check in with people and reset expectations.", result: "nordic" }, { label: "Choose the most workable next step.", result: "reptilian" }, { label: "Reconsider how the change affects the wider plan.", result: "mantid" }, { label: "Pause to observe before deciding what matters.", result: "tall-white" },
  ] },
  { prompt: "Pick a role for a playful sci-fi expedition.", answers: [
    { label: "The curious investigator with a notebook.", result: "grey" }, { label: "The envoy who helps new crews work together.", result: "nordic" }, { label: "The resourceful planner who packs for surprises.", result: "reptilian" }, { label: "The systems thinker who connects the clues.", result: "mantid" }, { label: "The observer who spots what others miss.", result: "tall-white" },
  ] },
];

const AI_RESULTS: readonly Archetype[] = [
  { id: "explorer", name: "The Explorer", lead: "You prefer to learn by trying small, low-stakes experiments.", detail: "Try keeping a short note of what worked, what did not, and what you want to test next." },
  { id: "builder", name: "The Workflow Builder", lead: "You like turning useful discoveries into repeatable routines.", detail: "Add a checkpoint for accuracy, privacy, and a human review before reusing a workflow." },
  { id: "collaborator", name: "The Collaborative Thinker", lead: "You enjoy using dialogue with AI to develop and compare ideas.", detail: "Write down your own view first, then use the conversation to challenge and expand it." },
  { id: "evaluator", name: "The Thoughtful Evaluator", lead: "You want to understand limits and check claims before relying on a tool.", detail: "Choose clear criteria and verify important claims against trustworthy sources." },
];

const AI_QUESTIONS: readonly Scenario[] = [
  { prompt: "You get access to a new AI tool. What is your first instinct?", answers: [
    { label: "Try a small task and see what it can do.", result: "explorer" }, { label: "Look for a task where it could fit into a routine.", result: "builder" }, { label: "Explore ideas with it through a back-and-forth.", result: "collaborator" }, { label: "Check how it handles errors and uncertainty.", result: "evaluator" },
  ] },
  { prompt: "When an AI answer is useful, what do you tend to do next?", answers: [
    { label: "Try a variation to learn more about its range.", result: "explorer" }, { label: "Save the steps so I can repeat the task.", result: "builder" }, { label: "Ask follow-ups to shape the idea together.", result: "collaborator" }, { label: "Check key facts before using the answer.", result: "evaluator" },
  ] },
  { prompt: "Which AI task would you be most curious to test?", answers: [
    { label: "Brainstorm several approaches to a new hobby project.", result: "explorer" }, { label: "Draft a checklist for a familiar, repeatable task.", result: "builder" }, { label: "Use a conversation to clarify a half-formed idea.", result: "collaborator" }, { label: "Compare a summary with its original sources.", result: "evaluator" },
  ] },
  { prompt: "A result seems confident but might be wrong. What feels natural?", answers: [
    { label: "Try another prompt and observe how the result changes.", result: "explorer" }, { label: "Add a review step to the process for next time.", result: "builder" }, { label: "Ask it to consider another angle, then judge for myself.", result: "collaborator" }, { label: "Verify the claim independently before relying on it.", result: "evaluator" },
  ] },
  { prompt: "How would you like AI to fit into your work or learning?", answers: [
    { label: "As a sandbox for trying things I am curious about.", result: "explorer" }, { label: "As one step in a dependable process I oversee.", result: "builder" }, { label: "As a thought partner while I make the decisions.", result: "collaborator" }, { label: "As a tool I use selectively after checking its limits.", result: "evaluator" },
  ] },
  { prompt: "What would make you more comfortable using AI for a task?", answers: [
    { label: "Room to experiment without high stakes.", result: "explorer" }, { label: "A clear workflow with review points.", result: "builder" }, { label: "A way to steer the result through conversation.", result: "collaborator" }, { label: "Reliable ways to check accuracy and privacy.", result: "evaluator" },
  ] },
];

export function InterestQuiz({ kind }: { kind: "alien" | "ai" }) {
  const alien = kind === "alien";
  const questions = alien ? ALIEN_QUESTIONS : AI_QUESTIONS;
  const results = alien ? ALIEN_RESULTS : AI_RESULTS;
  const [answers, setAnswers] = useState<readonly (number | null)[]>([]);
  const [selection, setSelection] = useState<number | null | undefined>(undefined);
  const scoredAnswers = answers.filter((index) => index !== null).length;
  const scores = useMemo(() => {
    const totals = Object.fromEntries(results.map(({ id }) => [id, 0])) as Record<string, number>;
    answers.forEach((answerIndex, questionIndex) => {
      if (answerIndex === null || answerIndex === undefined) return;
      const id = questions[questionIndex]?.answers[answerIndex]?.result;
      if (id) totals[id] = (totals[id] ?? 0) + 1;
    });
    return totals;
  }, [answers, questions, results]);
  const finished = answers.length === questions.length;
  const maxScore = Math.max(...Object.values(scores));
  const leaders = finished ? results.filter(({ id }) => scores[id] === maxScore) : [];
  const questionIndex = answers.length;

  function choose(answerIndex: number | null) {
    setSelection(answerIndex);
  }

  function next() {
    if (selection === undefined || (selection === null && scoredAnswers < 4 && questionIndex === questions.length - 1)) return;
    setAnswers((current) => [...current, selection]);
    setSelection(undefined);
  }

  function back() {
    setAnswers((current) => current.slice(0, -1));
    setSelection(undefined);
  }

  const selected = selection;
  return (
    <main className="section" style={{ maxWidth: 820 }}>
      <p className="eyebrow" style={{ marginBottom: 10 }}>{alien ? "Fictional archetypes · just for fun" : "AI work styles · preference check-in"}</p>
      <h1 className="section-title">{alien ? "Which alien archetype are you?" : "How do you like to work with AI?"}</h1>
      <p className="section-lead" style={{ marginBottom: 20 }}>{alien
        ? "Six playful choices map your approach to five familiar sci-fi and UFO-folklore archetypes. These are fictional pop-culture profiles, not claims about real extraterrestrials, ancestry, appearance, or any human group."
        : "Six everyday scenarios explore how you prefer to use AI. This is not a test of intelligence, technical skill, employability, or future success. You can choose “not sure yet”; your experience level is not scored."}</p>
      {alien && <figure style={{ margin: "0 0 20px" }}><Image src="/assets/quiz-illustrations/alien-archetypes.webp" alt="A friendly, original illustration of five fictional science-fiction alien archetypes" width={1536} height={1024} unoptimized style={{ display: "block", width: "100%", height: "auto", borderRadius: 18 }} /><figcaption style={{ color: "var(--ink-mute)", fontSize: ".8rem", marginTop: 6 }}>Original illustration created for TypologyQuiz. These designs are fictional.</figcaption></figure>}
      {finished ? (
        <section aria-live="polite" aria-labelledby="interest-result-title" className="quiz-card" style={{ padding: 24 }}>
          <p className="eyebrow">{alien ? "Your playful sci-fi profile" : "Your AI work-style preference"}</p>
          <h2 id="interest-result-title" className="font-display" style={{ fontSize: "2rem", margin: "8px 0" }}>{leaders.map(({ name }) => name).join(" + ")}</h2>
          <div style={{ display: "grid", gap: 14, marginTop: 14 }}>{leaders.map((result) => <div key={result.id}><p className="section-lead">{result.lead}</p><p style={{ lineHeight: 1.7 }}>{result.detail}</p></div>)}</div>
          <div aria-label="Choice counts" style={{ display: "grid", gap: 8, margin: "18px 0" }}>{results.map(({ id, name }) => <div key={id} style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: 10 }}><span>{name}</span><span>{scores[id] ?? 0} {alien ? "of 6 choices" : `of ${scoredAnswers} scored choices`}</span></div>)}</div>
          {alien ? <p style={{ color: "var(--ink-mute)", fontSize: ".9rem" }}>A playful snapshot inspired by fictional UFO and science-fiction lore. It says nothing about real beings or people.</p> : <p style={{ color: "var(--ink-mute)", fontSize: ".9rem" }}>Preferences can change with the task, tool, and context. Check important information and keep human judgment in the loop.</p>}
          <button type="button" className="btn-primary" onClick={() => { setAnswers([]); setSelection(undefined); }} style={{ minHeight: 48 }}>Try again</button>
        </section>
      ) : (
        <div aria-live="polite">
          {questionIndex > 0 && <button type="button" onClick={back} style={{ marginBottom: 12, minHeight: 44 }}>← Previous question</button>}
          <p className="eyebrow">Question {questionIndex + 1} of {questions.length}{!alien && ` · ${scoredAnswers} scored`}</p>
          <h2 className="font-display" style={{ fontSize: "1.55rem", margin: "8px 0 16px" }}>{questions[questionIndex].prompt}</h2>
          <div role="group" aria-label={`Answers to question ${questionIndex + 1}`} style={{ display: "grid", gap: 12 }}>
            {questions[questionIndex].answers.map((answer, index) => {
              const isSelected = selected === index;
              return <button key={answer.label} type="button" aria-pressed={isSelected} onClick={() => choose(index)} className="quiz-card" style={{ textAlign: "left", padding: "16px 18px", minHeight: 60, color: "var(--ink)", font: "inherit", cursor: "pointer", border: isSelected ? "2px solid var(--mark-teal)" : undefined, background: isSelected ? "color-mix(in srgb, var(--mark-teal) 12%, white)" : undefined }}>{answer.label}</button>;
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
            {!alien && <button type="button" className="text-link" style={{ minHeight: 44 }} onClick={() => choose(null)} aria-pressed={selected === null}>Not sure yet (not scored)</button>}
            <button type="button" className="btn-primary" onClick={next} disabled={selected === undefined || (selected === null && scoredAnswers < 4 && questionIndex === questions.length - 1)} style={{ minHeight: 48, marginLeft: "auto" }}>{questionIndex === questions.length - 1 ? "See my result" : "Continue →"}</button>
          </div>
          {!alien && questionIndex === questions.length - 1 && scoredAnswers < 4 && <p role="status" style={{ color: "var(--ink-mute)" }}>Answer {4 - scoredAnswers} more scenario{4 - scoredAnswers === 1 ? "" : "s"} to see a preference profile. “Not sure yet” is not scored.</p>}
        </div>
      )}
    </main>
  );
}
