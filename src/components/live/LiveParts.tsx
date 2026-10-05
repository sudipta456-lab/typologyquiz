"use client";

import { useEffect, useState } from "react";
import { joinUrl } from "@/lib/live/api";
import { useRemaining, type LiveStatus } from "@/lib/live/useLiveRoom";
import type { LiveQuestion, LiveReveal, LiveStanding, LiveView } from "@/lib/live/types";
import styles from "./live.module.css";

export const LETTERS = ["A", "B", "C", "D"];

/** Truthful connection state; silent when everything is fine. */
export function ConnectionNote({ status }: { status: LiveStatus }) {
  if (status === "reconnecting") return <p className={styles.noticeWarn} role="status">Reconnecting… Anything you tap now will not be sent until the connection is back.</p>;
  if (status === "connecting") return <p className={styles.status} role="status">Connecting…</p>;
  return null;
}

export function Countdown({ view, clockOffset }: { view: LiveView; clockOffset: number }) {
  const remaining = useRemaining(view.closesAt, clockOffset);
  if (remaining === null || !view.timeLimitMs) return null;
  const seconds = Math.ceil(remaining / 1000);
  const pct = Math.max(0, Math.min(100, (remaining / view.timeLimitMs) * 100));
  return (
    <div>
      {/* Announce only the start and the last few seconds, not every tick. */}
      <span className={styles.timer} role="timer" aria-live={seconds <= 5 ? "polite" : "off"}>
        {seconds > 0 ? `${seconds}s left` : "Time's up"}
      </span>
      <div className={styles.timerTrack} aria-hidden="true"><div className={styles.timerFill} style={{ width: `${pct}%` }} /></div>
    </div>
  );
}

/**
 * Question with lettered options. Correctness is shown with text and an
 * outline, never color alone. `onChoose` makes the options buttons.
 */
export function QuestionOptions({
  question, reveal, mine, onChoose, disabled, wide,
}: {
  question: LiveQuestion;
  reveal: LiveReveal | null;
  mine?: number | null;
  onChoose?: (choice: number) => void;
  disabled?: boolean;
  wide?: boolean;
}) {
  // Timed rooms withhold the choices until answers open; callers say so.
  if (!question.options) return null;
  const total = reveal ? reveal.counts.reduce((a, b) => a + b, 0) : 0;
  return (
    <ul className={`${styles.options} ${wide ? styles.optionsWide : ""}`}>
      {question.options.map((option, i) => {
        const correct = reveal && !reveal.void && reveal.answer === i;
        const isMine = mine === i;
        const className = `${styles.option} ${correct ? styles.optionCorrect : isMine ? styles.optionMine : ""}`;
        const tags = [correct ? "Correct" : null, isMine ? "Your answer" : null].filter(Boolean).join(" · ");
        const body = (
          <>
            <span className={styles.letter} aria-hidden="true">{LETTERS[i]}</span>
            <span className={styles.optionText}>
              <span className={styles.visuallyHidden}>{LETTERS[i]}: </span>{option}
              {reveal && (
                <span className={styles.bar} aria-hidden="true" style={{ display: "block" }}>
                  <span className={styles.barFill} style={{ display: "block", width: `${total ? (reveal.counts[i] / total) * 100 : 0}%` }} />
                </span>
              )}
            </span>
            {reveal && <span className={styles.small}>{reveal.counts[i]}<span className={styles.visuallyHidden}> answers</span></span>}
            {tags && <span className={styles.optionTag}>{tags}</span>}
          </>
        );
        return (
          <li key={i}>
            {onChoose
              ? <button type="button" className={className} disabled={disabled} aria-pressed={isMine} onClick={() => onChoose(i)}>{body}</button>
              : <div className={className}>{body}</div>}
          </li>
        );
      })}
    </ul>
  );
}

export function RevealNote({ reveal }: { reveal: LiveReveal }) {
  if (reveal.void) return <p className={styles.noticeWarn}>The host voided this question. It does not count for anyone.</p>;
  return (
    <div className={styles.noticeOk}>
      <p style={{ margin: 0 }}>{reveal.explanation}</p>
      <p className={styles.small} style={{ margin: "0.4rem 0 0" }}>
        Source: <a className="text-link" href={reveal.source} target="_blank" rel="noopener noreferrer">{new URL(reveal.source).hostname.replace(/^www\./, "")}</a>
      </p>
    </div>
  );
}

/** Correct answers rank first; timing points (timed rooms only) break ties. */
export function StandingsList({ rows, timed, highlight, label = "Standings" }: { rows: LiveStanding[]; timed: boolean; highlight?: string | null; label?: string }) {
  if (!rows.length) return <p className={styles.muted}>No scores yet.</p>;
  return (
    <ol className={styles.standings} aria-label={label}>
      {rows.map((row) => (
        <li key={row.teamId} className={`${styles.standing} ${row.teamId === highlight ? styles.standingMine : ""}`}>
          <span className={styles.rank}><span className={styles.visuallyHidden}>Place </span>{row.rank}</span>
          <span>{row.name}{row.teamId === highlight && <span className={styles.visuallyHidden}> (you)</span>}</span>
          <span className={styles.score}>
            {row.correct} correct
            {timed && <span className={`${styles.small} ${styles.muted}`} style={{ display: "block", fontWeight: 400 }}>{row.timing} timing pts</span>}
          </span>
        </li>
      ))}
    </ol>
  );
}

/** QR is generated in the browser from the join URL. It is a shortcut, never the only way in. */
export function JoinDetails({ code, large }: { code: string; large?: boolean }) {
  const [qr, setQr] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    let cancelled = false;
    const link = joinUrl(code);
    import("qrcode")
      .then((QRCode) => QRCode.toDataURL(link, { margin: 1, width: 480, errorCorrectionLevel: "M", color: { dark: "#14141f", light: "#ffffff" } }))
      .then((data) => { if (!cancelled) { setQr(data); setUrl(link); } })
      .catch(() => { if (!cancelled) setUrl(link); });
    return () => { cancelled = true; };
  }, [code]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={large ? styles.screenJoin : styles.row} style={large ? undefined : { alignItems: "flex-start", gap: "1.25rem" }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- local data URL */}
      {qr ? <img className={large ? styles.qrScreen : styles.qr} src={qr} alt={`QR code that opens the join page for room ${code}`} /> : null}
      <div className={styles.stack} style={{ gap: "0.4rem" }}>
        <span className="eyebrow">Room code</span>
        <span className={styles.code} aria-label={`Room code ${code.split("").join(" ")}`}>{code}</span>
        <span className={styles.muted}>Go to <strong>typologyquiz.com/live</strong> and enter the code{qr ? ", or scan the QR code." : "."}</span>
        {!large && url && (
          <div className={styles.row}>
            <button type="button" className={styles.buttonGhost} onClick={copy}>{copied ? "Link copied" : "Copy join link"}</button>
            <span className={styles.visuallyHidden} role="status">{copied ? "Join link copied" : ""}</span>
          </div>
        )}
        {!large && url && <span className={styles.link}>{url}</span>}
      </div>
    </div>
  );
}

export function ScoringRules({ view }: { view: LiveView }) {
  return (
    <details className={styles.small}>
      <summary style={{ cursor: "pointer", minHeight: 44, display: "flex", alignItems: "center" }}>How scoring works</summary>
      <p>{view.rules.scoring}</p>
      {view.rules.team && <p>{view.rules.team}</p>}
      <p>Only revealed questions count. A voided question counts for nobody. Entries level on {view.scoring === "timed" ? "correct answers and timing points" : "correct answers"} share a place.</p>
    </details>
  );
}

export function phaseLabel(view: LiveView): string {
  switch (view.phase) {
    case "lobby": return "Waiting to start";
    case "preview": return "Get ready";
    case "open": return "Answers open";
    case "locked": return "Answers locked";
    case "reveal": return "Answer revealed";
    case "standings": return "Standings";
    case "ended": return "Finished";
  }
}

export function questionHeading(view: LiveView): string {
  if (!view.question) return view.session.title;
  return `${view.question.roundTitle} · Question ${view.question.index + 1} of ${view.session.questionCount}`;
}
