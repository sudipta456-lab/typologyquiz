"use client";

import { useMemo, useState } from "react";

type Field = "classical" | "relativity" | "quantum";
type Answer = { label: string; weights: Record<Field, number> };
type Question = { prompt: string; answers: readonly Answer[] };

const QUESTIONS: readonly Question[] = [
  {
    prompt: "A skater spins faster after pulling in their arms. What would you chase first?",
    answers: [
      { label: "The changing rotation and conserved angular momentum.", weights: { classical: 2, relativity: 0, quantum: 0 } },
      { label: "How motion and energy look to observers moving differently.", weights: { classical: 0, relativity: 2, quantum: 0 } },
      { label: "Whether a tiny particle version behaves like the skater at all.", weights: { classical: 0, relativity: 0, quantum: 2 } },
    ],
  },
  {
    prompt: "Which cosmic mystery would you most like to explore?",
    answers: [
      { label: "How planets and spacecraft follow paths under gravity.", weights: { classical: 2, relativity: 0, quantum: 0 } },
      { label: "Why gravity can be described as curved spacetime.", weights: { classical: 0, relativity: 2, quantum: 0 } },
      { label: "How quantum rules shape atoms and the light they emit.", weights: { classical: 0, relativity: 0, quantum: 2 } },
    ],
  },
  {
    prompt: "Pick the thought experiment you would happily spend an afternoon on.",
    answers: [
      { label: "A pendulum: how its motion changes when you alter its length.", weights: { classical: 2, relativity: 0, quantum: 0 } },
      { label: "A twin travelling fast: how their elapsed times compare.", weights: { classical: 0, relativity: 2, quantum: 0 } },
      { label: "Two slits: what an interference pattern tells us about measurement.", weights: { classical: 0, relativity: 0, quantum: 2 } },
    ],
  },
  {
    prompt: "What kind of hidden structure sounds most satisfying?",
    answers: [
      { label: "A few forces and motion laws explaining everyday machines.", weights: { classical: 2, relativity: 0, quantum: 0 } },
      { label: "Space and time joining into one framework for gravity and motion.", weights: { classical: 0, relativity: 2, quantum: 0 } },
      { label: "Probability amplitudes predicting outcomes for tiny systems.", weights: { classical: 0, relativity: 0, quantum: 2 } },
    ],
  },
  {
    prompt: "Which scale would you rather investigate?",
    answers: [
      { label: "A bridge, ball, engine, or orbit we can picture directly.", weights: { classical: 2, relativity: 0, quantum: 0 } },
      { label: "A star, black hole, or object moving close to light speed.", weights: { classical: 0, relativity: 2, quantum: 0 } },
      { label: "Atoms, electrons, photons, and the rules behind materials.", weights: { classical: 0, relativity: 0, quantum: 2 } },
    ],
  },
  {
    prompt: "Which tool would you most like to use?",
    answers: [
      { label: "A motion sensor to test a prediction about acceleration.", weights: { classical: 2, relativity: 0, quantum: 0 } },
      { label: "A clock comparison that reveals tiny relativistic time shifts.", weights: { classical: 0, relativity: 2, quantum: 0 } },
      { label: "A detector that counts individual photons or particle events.", weights: { classical: 0, relativity: 0, quantum: 2 } },
    ],
  },
  {
    prompt: "What would you want a physics explanation to leave you with?",
    answers: [
      { label: "A clear model I can use to predict how a familiar system moves.", weights: { classical: 2, relativity: 0, quantum: 0 } },
      { label: "A new sense of how measurements of space and time fit together.", weights: { classical: 0, relativity: 2, quantum: 0 } },
      { label: "A reliable prediction, even if nature resists a simple picture.", weights: { classical: 0, relativity: 0, quantum: 2 } },
    ],
  },
];

const RESULTS: Record<Field, { name: string; lead: string; detail: string }> = {
  classical: {
    name: "Classical mechanics",
    lead: "You like physics you can picture in motion.",
    detail: "Newtonian mechanics models forces and motion and works extremely well for many everyday speeds and scales. It remains a powerful approximation, even though relativity and quantum theory are needed in other regimes.",
  },
  relativity: {
    name: "Relativity",
    lead: "You are drawn to space, time, and gravity on a cosmic scale.",
    detail: "Special relativity describes space and time for inertial observers, including effects that matter near light speed. General relativity describes gravity through spacetime geometry. Newtonian gravity is an excellent approximation in many weak-field, low-speed settings.",
  },
  quantum: {
    name: "Quantum physics",
    lead: "You want to know what nature is doing at its smallest scales.",
    detail: "Quantum theory predicts the behavior of atoms, particles, and light using states and probabilities. It underpins chemistry and much of modern technology; it does not mean that every imaginable outcome is equally likely.",
  },
};

const FIELDS: readonly Field[] = ["classical", "relativity", "quantum"];

export function PhysicsPreferenceQuiz() {
  const [answers, setAnswers] = useState<readonly number[]>([]);
  const finished = answers.length === QUESTIONS.length;
  const scores = useMemo(() => {
    const totals: Record<Field, number> = { classical: 0, relativity: 0, quantum: 0 };
    answers.forEach((answerIndex, questionIndex) => {
      const weights = QUESTIONS[questionIndex]?.answers[answerIndex]?.weights;
      if (weights) for (const field of FIELDS) totals[field] += weights[field];
    });
    return totals;
  }, [answers]);
  const leaders = finished ? FIELDS.filter((field) => scores[field] === Math.max(...FIELDS.map((f) => scores[f]))) : [];
  const result = leaders[0] ?? null;

  function choose(answerIndex: number) {
    setAnswers((current) => [...current.slice(0, answers.length), answerIndex]);
  }

  function goBack() {
    setAnswers((current) => current.slice(0, -1));
  }

  return (
    <main className="section" style={{ maxWidth: 760 }}>
      <p className="eyebrow" style={{ marginBottom: 10 }}>Physics · curiosity quiz</p>
      <h1 className="section-title">Which kind of physics makes you curious?</h1>
      <p className="section-lead" style={{ marginBottom: 20 }}>
        Seven quick picks reveal which questions you might enjoy exploring. This is a playful interest profile, not a physics knowledge test or a measure of ability. Newtonian mechanics, relativity, and quantum physics describe different useful regimes; they are not three rival answers to every problem.
      </p>

      {finished && result ? (
        <section aria-live="polite" aria-labelledby="physics-result-title" className="quiz-card" style={{ padding: 24 }}>
          <p className="eyebrow">Your physics curiosity leans toward</p>
          <h2 id="physics-result-title" className="font-display" style={{ fontSize: "2rem", margin: "8px 0" }}>{leaders.map((field) => RESULTS[field].name).join(" + ")}</h2>
          <p className="section-lead">{leaders.length > 1 ? "Your curiosity spans more than one corner of physics." : RESULTS[result].lead}</p>
          <div style={{ display: "grid", gap: 12 }}>
            {leaders.map((field) => <p key={field} style={{ lineHeight: 1.7 }}>{RESULTS[field].detail}</p>)}
          </div>
          <div aria-label="Interest profile scores" style={{ display: "grid", gap: 8, margin: "18px 0" }}>
            {FIELDS.map((field) => (
              <div key={field} style={{ display: "grid", gridTemplateColumns: "minmax(130px, 1fr) 2fr auto", gap: 10, alignItems: "center" }}>
                <span>{RESULTS[field].name}</span>
                <span aria-hidden="true" style={{ height: 10, borderRadius: 8, background: "var(--line)", overflow: "hidden" }}><span style={{ display: "block", width: `${Math.round(scores[field] / (QUESTIONS.length * 2) * 100)}%`, height: "100%", background: "var(--mark-teal)" }} /></span>
                <span>{scores[field]}/14</span>
              </div>
            ))}
          </div>
          <p style={{ color: "var(--ink-mute)", fontSize: ".9rem" }}>This is a lightweight preference snapshot, not a fixed label; physics is broad, and curiosity does not have to fit one box.</p>
          <details style={{ margin: "0 0 18px", fontSize: ".9rem" }}>
            <summary style={{ cursor: "pointer" }}>Sources for the short explanations</summary>
            <ul style={{ paddingLeft: 22, lineHeight: 1.7 }}>
              <li><a className="text-link" href="https://www.einstein-online.info/en/spacetime/">Einstein Online: special relativity and spacetime</a></li>
              <li><a className="text-link" href="https://www.einstein-online.info/en/spotlight/equivalence_principle/">Einstein Online: gravity and spacetime curvature</a></li>
              <li><a className="text-link" href="https://physics.aps.org/articles/v17/120">American Physical Society: quantum measurement probabilities</a></li>
            </ul>
          </details>
          <button type="button" className="btn-primary" onClick={() => setAnswers([])}>Try again</button>
        </section>
      ) : (
        <div aria-live="polite">
          {answers.length > 0 && <button type="button" onClick={goBack} style={{ marginBottom: 12, minHeight: 44 }}>← Previous question</button>}
          <p className="eyebrow">Question {answers.length + 1} of {QUESTIONS.length}</p>
          <h2 className="font-display" style={{ fontSize: "1.55rem", margin: "8px 0 16px" }}>{QUESTIONS[answers.length].prompt}</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {QUESTIONS[answers.length].answers.map((answer, index) => (
              <button key={answer.label} type="button" onClick={() => choose(index)} className="quiz-card" style={{ textAlign: "left", padding: "16px 18px", minHeight: 60, color: "var(--ink)", font: "inherit", cursor: "pointer" }}>
                {answer.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
