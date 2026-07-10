"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { TESTS } from "@/lib/tests/registry";
import { getDailySeed, loadGame, recordDailyAnswer } from "@/lib/progress-game";
import type { Question } from "@/lib/types";

type DailyPick = {
  slug: string;
  title: string;
  question: Question;
};

function pickDaily(): DailyPick {
  const seed = getDailySeed();
  const pool: DailyPick[] = [];
  for (const t of TESTS) {
    for (const q of t.questions) {
      if (q.type === "likert") pool.push({ slug: t.slug, title: t.title, question: q });
    }
  }
  const idx = seed % Math.max(1, pool.length);
  return pool[idx] || pool[0];
}

const OPTIONS = [
  { v: 1, label: "No way", color: "#F9684D" },
  { v: 2, label: "Not really", color: "#F47A9E" },
  { v: 3, label: "Mid", color: "#6B7280" },
  { v: 4, label: "Kinda yes", color: "#07AD9C" },
  { v: 5, label: "Yes", color: "#0795EA" },
];

export default function DailyPage() {
  const daily = useMemo(() => pickDaily(), []);
  const [picked, setPicked] = useState<number | null>(null);
  const [game, setGame] = useState(loadGame());
  const [doneToday, setDoneToday] = useState(false);

  useEffect(() => {
    const g = loadGame();
    setGame(g);
    const today = new Date();
    const key = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    setDoneToday(g.lastDailyDate === key);
  }, []);

  function answer(v: number) {
    if (picked !== null) return;
    setPicked(v);
    const next = recordDailyAnswer();
    setGame(next);
    setDoneToday(true);
  }

  return (
    <div className="section daily-page">
      <p className="eyebrow">Daily peel</p>
      <h1 className="section-title">One question today</h1>
      <p className="section-lead">
        Sixty seconds. Keeps your streak alive. Not a full type, just a pulse check.
      </p>

      <div className="daily-stats">
        <div>
          <strong>{game.streak}</strong>
          <span>day streak</span>
        </div>
        <div>
          <strong>{game.bestStreak}</strong>
          <span>best streak</span>
        </div>
        <div>
          <strong>{game.badges.length}</strong>
          <span>badges</span>
        </div>
      </div>

      <div className="daily-card">
        <p className="daily-from">From: {daily.title}</p>
        <h2 className="daily-q font-display">{daily.question.text}</h2>
        <div className="daily-options">
          {OPTIONS.map((o) => (
            <button
              key={o.v}
              type="button"
              className={picked === o.v ? "daily-opt is-on" : "daily-opt"}
              style={{ background: o.color }}
              onClick={() => answer(o.v)}
              disabled={picked !== null}
            >
              {o.label}
            </button>
          ))}
        </div>
        {picked !== null && (
          <p className="daily-done">
            Logged. Streak: <strong>{game.streak}</strong>.{" "}
            <Link href={`/test/${daily.slug}`} className="text-link">
              Take the full test
            </Link>
          </p>
        )}
        {doneToday && picked === null && (
          <p className="daily-done">You already peeled today. Come back tomorrow.</p>
        )}
      </div>

      <p style={{ marginTop: 24 }}>
        <Link href="/account" className="text-link">
          See badges on your account
        </Link>
        {" · "}
        <Link href="/test/friend-role" className="text-link">
          Friend Role
        </Link>
      </p>
    </div>
  );
}
