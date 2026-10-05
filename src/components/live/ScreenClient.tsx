"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { LIVE_CODE_PATTERN, liveErrorMessage, normalizeCode } from "@/lib/live/api";
import { useLiveRoom, useLocationSnapshot } from "@/lib/live/useLiveRoom";
import type { LiveHello } from "@/lib/live/types";
import { ConnectionNote, Countdown, JoinDetails, QuestionOptions, RevealNote, StandingsList, phaseLabel, questionHeading } from "./LiveParts";
import styles from "./live.module.css";

const SCREEN_HELLO: LiveHello = { t: "hello", role: "screen" };

/** Read-only projector view. It receives exactly what players can see. */
export function ScreenClient() {
  const location = useLocationSnapshot();
  if (!location.ready) return <div className={styles.wrap}><p role="status">Loading…</p></div>;
  const code = location.room ? normalizeCode(location.room) : "";
  if (!LIVE_CODE_PATTERN.test(code)) {
    return (
      <div className={styles.wrap}>
        <h1 className="section-title">Projector screen</h1>
        <p className="section-lead">Open this page from the host console with &ldquo;Open projector screen&rdquo; so it knows which room to show.</p>
        <Link className={styles.button} href="/live/host/">Go to the host console</Link>
      </div>
    );
  }
  return <ScreenRoom code={code} />;
}

function ScreenRoom({ code }: { code: string }) {
  const { status, view, fatal, clockOffset } = useLiveRoom(code, SCREEN_HELLO);
  const ref = useRef<HTMLDivElement>(null);
  const [fullscreenError, setFullscreenError] = useState(false);

  function fullscreen() {
    const el = ref.current;
    if (!el) return;
    if (document.fullscreenElement) { void document.exitFullscreen(); return; }
    el.requestFullscreen?.().catch(() => setFullscreenError(true));
  }

  if (fatal) {
    return (
      <div className={styles.wrap}>
        <h1 className="section-title">{fatal === "room_ended" ? "This event has finished" : "Room unavailable"}</h1>
        <p className="section-lead">{liveErrorMessage(fatal)}</p>
      </div>
    );
  }

  return (
    <div ref={ref} className={styles.screen}>
      <div className={styles.screenTop}>
        <div>
          <p className="eyebrow" style={{ margin: 0 }}>TypologyQuiz Live · {view ? phaseLabel(view) : "Connecting"}</p>
          <p className="font-display" style={{ fontSize: "1.5rem", margin: "0.2rem 0 0" }}>{view?.session.title ?? `Room ${code}`}</p>
        </div>
        <div className={styles.row}>
          {view && view.phase !== "lobby" && <span className={styles.pill} style={{ fontSize: "1rem" }}>Join with code <strong style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.12em" }}>{code}</strong></span>}
          <button type="button" className={styles.buttonGhost} onClick={fullscreen}>Full screen</button>
        </div>
      </div>
      {fullscreenError && <p className={styles.small}>Full screen isn&apos;t available in this browser. Try the browser&apos;s own full-screen shortcut.</p>}
      <ConnectionNote status={status} />

      {!view && <p role="status">Connecting to room {code}…</p>}

      {view?.phase === "lobby" && (
        <div className={styles.stack} style={{ gap: "2rem" }}>
          <JoinDetails code={code} large />
          <div>
            <h2 className="font-display" style={{ marginTop: 0 }}>
              {view.mode === "team" ? `${view.teamCount} ${view.teamCount === 1 ? "team" : "teams"}` : `${view.playerCount} ${view.playerCount === 1 ? "player" : "players"}`} here
            </h2>
            {view.lobby && view.lobby.length > 0 && <ul className={styles.lobbyNames} aria-label="Joined">{view.lobby.map((n, i) => <li key={`${n}-${i}`}>{n}</li>)}</ul>}
          </div>
        </div>
      )}

      {view?.question && view.phase !== "standings" && (
        <section aria-labelledby="screen-q">
          <div className={styles.row} style={{ justifyContent: "space-between" }}>
            <p className="eyebrow" style={{ fontSize: "0.95rem" }}>{questionHeading(view)}</p>
            {view.responses && <span style={{ fontSize: "1.2rem" }}><strong>{view.responses.answered}</strong> of {view.responses.eligible} answered</span>}
          </div>
          <h1 id="screen-q" className={styles.question}>{view.question.prompt}</h1>
          {view.phase === "open" && <div style={{ marginBottom: "1rem", maxWidth: "28rem" }}><Countdown view={view} clockOffset={clockOffset} /></div>}
          <QuestionOptions question={view.question} reveal={view.reveal} wide />
          {view.phase === "preview" && <p className={styles.muted} style={{ fontSize: "1.2rem" }}>{view.question.options ? "Read the question. Answers open in a moment." : "Read the question. The choices appear when answers open."}</p>}
          {view.phase === "locked" && <p className={styles.muted} style={{ fontSize: "1.2rem" }}>Answers locked.</p>}
          {view.reveal && <div style={{ marginTop: "1.25rem", fontSize: "1.25rem" }}><RevealNote reveal={view.reveal} /></div>}
        </section>
      )}

      {view && (view.phase === "standings" || view.phase === "ended") && (
        <section aria-labelledby="screen-standings" style={{ maxWidth: "48rem" }}>
          <h1 id="screen-standings" className={styles.question}>{view.phase === "ended" ? "Final standings" : "Standings"}</h1>
          <StandingsList rows={view.standings} timed={view.scoring === "timed"} label={view.phase === "ended" ? "Final standings" : "Standings"} />
          {view.phase === "ended" && <p className={styles.muted} style={{ fontSize: "1.2rem" }}>Thanks for playing.</p>}
        </section>
      )}
    </div>
  );
}
