"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { TESTS } from "@/lib/tests/registry";
import { getDailySeed, loadGame, recordDailyAnswer } from "@/lib/progress-game";
import { getActiveDays, getPerfectDayCount, loadMinisDay, markActiveDay } from "@/lib/minis/store";
import { utcDateKey } from "@/lib/minis/seed";
import DailyMinis from "@/components/minis/DailyMinis";
import StreakStrip from "@/components/minis/StreakStrip";
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

function localTodayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const OPTIONS = [
  { v: 1, label: "No way", color: "#F9684D" },
  { v: 2, label: "Not really", color: "#F47A9E" },
  { v: 3, label: "Mid", color: "#6B7280" },
  { v: 4, label: "Kinda yes", color: "#07AD9C" },
  { v: 5, label: "Yes", color: "#0795EA" },
];

const noopSubscribe = () => () => {};

export default function DailyPage() {
  const daily = useMemo(() => pickDaily(), []);
  const [picked, setPicked] = useState<number | null>(null);
  // Bumped after any streak-affecting action so derived reads below refresh.
  const [, setVersion] = useState(0);
  const bump = () => setVersion((v) => v + 1);

  // False on the server and the first client render, so localStorage-derived
  // UI never mismatches the prerendered HTML.
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  const game = mounted ? loadGame() : null;
  const streak = game?.streak ?? 0;
  const bestStreak = game?.bestStreak ?? 0;
  const badgeCount = game?.badges.length ?? 0;
  const doneToday = !!game && game.lastDailyDate === localTodayKey();

  const activeDays = mounted ? getActiveDays() : [];
  if (game?.lastActiveDate === localTodayKey() && !activeDays.includes(game.lastActiveDate)) {
    activeDays.push(game.lastActiveDate);
  }
  const perfectDays = mounted ? getPerfectDayCount() : 0;
  const perfectToday = mounted ? loadMinisDay(utcDateKey()).perfectDay : false;

  function answer(v: number) {
    if (picked !== null) return;
    setPicked(v);
    recordDailyAnswer();
    markActiveDay(localTodayKey());
    bump();
  }

  return (
    <div className="section daily-page">
      <p className="eyebrow">Daily peel</p>
      <h1 className="section-title">Today&apos;s minis</h1>
      <p className="section-lead">
        Three tiny games, same for everyone on Earth today. Any one of them keeps your streak alive.
      </p>

      <StreakStrip
        streak={streak}
        bestStreak={bestStreak}
        perfectDays={perfectDays}
        activeDays={activeDays}
        perfectToday={perfectToday}
      />

      <DailyMinis onActivity={bump} />

      <h2 className="section-title" style={{ marginTop: "2.5rem", fontSize: "1.5rem" }}>
        One question today
      </h2>
      <p className="section-lead">Sixty seconds. Not a full type, just a pulse check.</p>

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
            Logged. Streak: <strong>{streak}</strong>.{" "}
            <Link href={`/test/${daily.slug}`} className="text-link">
              Take the full test
            </Link>
          </p>
        )}
        {doneToday && picked === null && (
          <p className="daily-done">You already answered today&apos;s question. The minis above still count.</p>
        )}
      </div>

      <p style={{ marginTop: 24 }}>
        Badges earned: <strong>{badgeCount}</strong>
        {" · "}
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
