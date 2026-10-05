"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createLiveRoom, fetchCatalog, LIVE_CODE_PATTERN, liveErrorMessage, normalizeCode, screenPath, LiveApiError } from "@/lib/live/api";
import { hostSecretFromHash, loadHostSecret, saveHostSecret } from "@/lib/live/storage";
import { replaceLocation, useLiveRoom, useLocationSnapshot } from "@/lib/live/useLiveRoom";
import type { LiveCatalog, LiveCommand, LiveHello, LiveMode, LiveScoring, LiveServerEvent } from "@/lib/live/types";
import {
  ConnectionNote, Countdown, JoinDetails, QuestionOptions, RevealNote, ScoringRules, StandingsList, phaseLabel, questionHeading,
} from "./LiveParts";
import styles from "./live.module.css";

export function HostConsole() {
  const location = useLocationSnapshot();
  const code = location.room ? normalizeCode(location.room) : null;
  const validCode = code && LIVE_CODE_PATTERN.test(code) ? code : null;
  const fromHash = hostSecretFromHash(location.hash);

  // A fragment secret wins and is remembered for this tab, then removed from
  // the address bar so it is not visible if the host's screen is projected.
  useEffect(() => {
    if (validCode && fromHash) {
      saveHostSecret(validCode, fromHash);
      replaceLocation(`/live/host/?room=${validCode}`);
    }
  }, [validCode, fromHash]);

  if (!location.ready) return <div className={styles.wrap}><p role="status">Loading…</p></div>;
  if (!validCode) return <SessionPicker />;
  const secret = fromHash ?? loadHostSecret(validCode);
  if (!secret) {
    return (
      <div className={styles.wrap}>
        <p className="eyebrow">Live Events · Host</p>
        <h1 className="section-title">This tab doesn&apos;t have the host key</h1>
        <p className="section-lead">Room {validCode} can only be run from the private host link created with it. Open that link, or create a new room.</p>
        <Link className={styles.button} href="/live/host/">Create a new room</Link>
      </div>
    );
  }
  return <HostRoom code={validCode} secret={secret} />;
}

function scoringSummary(scoring: LiveScoring, timeLimitSec: number, extendedSec: number) {
  return scoring === "timed"
    ? `Default: timed, ${timeLimitSec}s per question (${extendedSec}s with extended time); correct answers first, timing breaks ties`
    : "Default: accuracy only, untimed (you lock each question)";
}

function SessionPicker() {
  const [catalog, setCatalog] = useState<LiveCatalog | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [mode, setMode] = useState<LiveMode>("individual");
  const [scoring, setScoring] = useState<LiveScoring>("accuracy");
  const [extendedTime, setExtendedTime] = useState(false);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCatalog().then(setCatalog).catch((e: unknown) => setLoadError(liveErrorMessage(e instanceof LiveApiError ? e.code : "network")));
  }, []);

  const selected = catalog?.sessions.find((s) => s.id === sessionId) ?? null;

  function choose(id: string) {
    setSessionId(id);
    const session = catalog?.sessions.find((s) => s.id === id);
    if (session) setScoring(session.defaults.scoring);
  }

  async function create() {
    if (!selected || creating) return;
    setCreating(true);
    setError(null);
    try {
      const { code, hostSecret } = await createLiveRoom({ sessionId: selected.id, mode, scoring, extendedTime: scoring === "timed" && extendedTime });
      saveHostSecret(code, hostSecret);
      replaceLocation(`/live/host/?room=${code}`);
    } catch (e) {
      setError(liveErrorMessage(e instanceof LiveApiError ? e.code : "network"));
      setCreating(false);
    }
  }

  return (
    <div className={styles.wrap}>
      <p className="eyebrow">Live Events · Host</p>
      <h1 className="section-title">Host a live quiz</h1>
      <p className="section-lead">Pick a session and a format. You present from this screen. Players join on a phone (one shared phone per team in team games) with a six-character code, a link or a QR code.</p>

      {loadError && <p className={styles.error} role="alert">{loadError}</p>}
      {!catalog && !loadError && <p role="status">Loading sessions…</p>}

      {catalog && (
        <>
          <fieldset className={styles.fieldset}>
            <legend>1. Choose a session</legend>
            <div className={styles.sessionList}>
              {catalog.sessions.map((s) => (
                <label key={s.id} className={`${styles.choice} ${sessionId === s.id ? styles.choiceSelected : ""}`}>
                  <input type="radio" name="session" value={s.id} checked={sessionId === s.id} onChange={() => choose(s.id)} />
                  <span>
                    <span className={styles.sessionTitle}>{s.title}</span>
                    <span style={{ display: "block" }} className={styles.muted}>{s.blurb}</span>
                    <span className={styles.meta}>
                      <span>About {s.durationMin} min</span>
                      <span>{s.questionCount} questions · {s.rounds.length} rounds</span>
                      <span>{s.format}</span>
                      <span>{s.audience}</span>
                    </span>
                    <span className={styles.meta}>{scoringSummary(s.defaults.scoring, s.defaults.timeLimitSec, s.defaults.extendedTimeSec)}</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className={styles.fieldset} style={{ marginTop: "1rem" }}>
            <legend>2. How people play</legend>
            <div className={styles.stack}>
              <label className={`${styles.choice} ${mode === "individual" ? styles.choiceSelected : ""}`}>
                <input type="radio" name="mode" checked={mode === "individual"} onChange={() => setMode("individual")} />
                <span><strong>Individual</strong><span className={styles.muted} style={{ display: "block" }}>Each person answers on their own phone.</span></span>
              </label>
              <label className={`${styles.choice} ${mode === "team" ? styles.choiceSelected : ""}`}>
                <input type="radio" name="mode" checked={mode === "team"} onChange={() => setMode("team")} />
                <span><strong>Teams</strong><span className={styles.muted} style={{ display: "block" }}>{catalog.rules.team} Up to {catalog.limits.maxTeams} teams.</span></span>
              </label>
            </div>
          </fieldset>

          <fieldset className={styles.fieldset} style={{ marginTop: "1rem" }}>
            <legend>3. Scoring and time</legend>
            <div className={styles.stack}>
              <label className={`${styles.choice} ${scoring === "accuracy" ? styles.choiceSelected : ""}`}>
                <input type="radio" name="scoring" checked={scoring === "accuracy"} onChange={() => setScoring("accuracy")} />
                <span><strong>Accuracy only, untimed</strong><span className={styles.muted} style={{ display: "block" }}>{catalog.rules.accuracy} The most relaxed and accessible option.</span></span>
              </label>
              <label className={`${styles.choice} ${scoring === "timed" ? styles.choiceSelected : ""}`}>
                <input type="radio" name="scoring" checked={scoring === "timed"} onChange={() => setScoring("timed")} />
                <span><strong>Accuracy first, timed tie-breaks</strong><span className={styles.muted} style={{ display: "block" }}>{catalog.rules.timed} Answers lock automatically when time runs out.</span></span>
              </label>
              {scoring === "timed" && (
                <label className={styles.choice}>
                  <input type="checkbox" checked={extendedTime} onChange={(e) => setExtendedTime(e.target.checked)} />
                  <span><strong>Extended time</strong><span className={styles.muted} style={{ display: "block" }}>
                    Doubles the time limit{selected ? ` to ${selected.defaults.extendedTimeSec}s` : ""}. Useful for younger players, screen readers or a mixed-language room.
                  </span></span>
                </label>
              )}
            </div>
          </fieldset>

          <div className={styles.row} style={{ marginTop: "1.25rem" }}>
            <button type="button" className={styles.button} onClick={create} disabled={!selected || creating}>
              {creating ? "Creating room…" : "Create room"}
            </button>
            {!selected && <span className={styles.muted}>Choose a session first.</span>}
          </div>
          {error && <p className={styles.error} role="alert">{error}</p>}
          <p className={`${styles.small} ${styles.muted}`} style={{ marginTop: "1.25rem" }}>
            No accounts. Players choose a nickname; there is no chat. The room and everything in it are deleted a few hours after creation, or 30 minutes after you finish.
          </p>
        </>
      )}
    </div>
  );
}

function HostRoom({ code, secret }: { code: string; secret: string }) {
  const hello = useMemo<LiveHello>(() => ({ t: "hello", role: "host", secret }), [secret]);
  const [message, setMessage] = useState<string | null>(null);
  const [pendingSeq, setPendingSeq] = useState<number | null>(null);
  const onEvent = useCallback((event: LiveServerEvent) => {
    if (event.t === "error") { setMessage(liveErrorMessage(event.code)); setPendingSeq(null); }
    // A (re)welcome means any command in flight was either applied, and the
    // fresh state shows it, or lost with the old socket. Either way the
    // controls must come back, even if the room's sequence never moved.
    if (event.t === "welcome") setPendingSeq(null);
  }, []);
  const { status, view, fatal, clockOffset, send } = useLiveRoom(code, hello, onEvent);
  const [linkCopied, setLinkCopied] = useState(false);
  const stageRef = useRef<HTMLElement>(null);
  const stageKey = view ? `${view.phase}:${view.q}` : null;
  const lastStage = useRef<string | null>(null);

  // The button just pressed usually disappears with the phase it belonged to.
  // If that left focus on nothing, put it on the next step's first control.
  useEffect(() => {
    const previous = lastStage.current;
    lastStage.current = stageKey;
    if (previous === null || previous === stageKey) return;
    const active = document.activeElement;
    if (active && active !== document.body) return;
    stageRef.current?.querySelector<HTMLButtonElement>("button:not([disabled])")?.focus();
  }, [stageKey]);

  useEffect(() => {
    if (fatal === "bad_secret") saveHostSecret(code, null);
  }, [fatal, code]);

  const busy = pendingSeq !== null && view?.seq === pendingSeq;

  function command(cmd: LiveCommand, extra: Record<string, unknown> = {}) {
    if (!view) return;
    setMessage(null);
    if (!send({ t: "cmd", cmd, at: { phase: view.phase, q: view.q }, ...extra })) {
      setMessage("Not connected. Wait for the connection to come back, then try again.");
      return;
    }
    setPendingSeq(view.seq);
  }

  async function copyHostLink() {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/live/host/?room=${code}#k=${secret}`);
      setLinkCopied(true);
    } catch { setLinkCopied(false); }
  }

  if (fatal) {
    return (
      <div className={styles.wrap}>
        <p className="eyebrow">Live Events · Host</p>
        <h1 className="section-title">{fatal === "room_ended" ? "This event has finished" : "Room unavailable"}</h1>
        <p className="section-lead">{liveErrorMessage(fatal)}</p>
        <Link className={styles.button} href="/live/host/">Create a new room</Link>
      </div>
    );
  }
  if (!view) return <div className={styles.wrap}><ConnectionNote status={status} /><p role="status">Opening room {code}…</p></div>;

  const isLast = view.q >= view.session.questionCount - 1;
  const canVoid = view.q >= 0 && (view.asked ?? []).includes(view.q) && !view.voided.includes(view.q);

  return (
    <div className={styles.wrapWide}>
      <div className={styles.row} style={{ justifyContent: "space-between" }}>
        <div>
          <p className="eyebrow">Live Events · Host · Room {view.code}</p>
          <h1 className="section-title" style={{ marginBottom: 0 }}>{view.session.title}</h1>
          <p className={styles.muted} style={{ margin: "0.25rem 0 0" }}>
            {view.mode === "team" ? "Teams" : "Individual"} · {view.scoring === "timed" ? `Timed, ${Math.round((view.timeLimitMs ?? 0) / 1000)}s` : "Accuracy, untimed"} · {phaseLabel(view)}
          </p>
        </div>
        <div className={styles.row}>
          <a className={styles.buttonGhost} href={screenPath(view.code)} target="_blank" rel="noopener">Open projector screen</a>
          <button type="button" className={styles.buttonGhost} onClick={copyHostLink}>{linkCopied ? "Host link copied" : "Copy private host link"}</button>
        </div>
      </div>
      <ConnectionNote status={status} />
      {message && <p className={styles.noticeWarn} role="alert">{message}</p>}

      <div className={styles.grid2} style={{ marginTop: "1rem" }}>
        <section aria-labelledby="host-stage" ref={stageRef}>
          {view.phase === "lobby" && (
            <div className={styles.panelWarm}>
              <h2 id="host-stage" className="font-display" style={{ marginTop: 0 }}>Lobby</h2>
              <JoinDetails code={view.code} />
              <p style={{ marginTop: "1rem" }} aria-live="polite">
                <strong>{view.playerCount}</strong> {view.playerCount === 1 ? "player" : "players"} joined
                {view.mode === "team" ? ` in ${view.teamCount} ${view.teamCount === 1 ? "team" : "teams"}` : ""}.
                {view.playerCount === 0 ? " Start becomes available once someone joins." : " Start whenever the room is ready."}
              </p>
              <div className={styles.controls}>
                <button type="button" className={styles.button} disabled={busy || view.playerCount === 0} onClick={() => command("start")}>Start the quiz</button>
              </div>
              <p className={`${styles.small} ${styles.muted}`} style={{ marginTop: "1rem" }}>
                This tab remembers that you are the host. To continue on another device, use &ldquo;Copy private host link&rdquo;. Don&apos;t share that link: anyone who has it can run the room.
              </p>
              <ScoringRules view={view} />
            </div>
          )}

          {view.question && (
            <div className={styles.panel}>
              <p className="eyebrow" id="host-stage">{questionHeading(view)}</p>
              <p className={styles.question}>{view.question.prompt}</p>
              <QuestionOptions question={view.question} reveal={view.reveal} />
              {!view.question.options && <p className={styles.muted}>Timed room: the choices appear for everyone, including you, when you open answers.</p>}
              <div className={styles.row} style={{ justifyContent: "space-between", marginTop: "0.9rem" }}>
                {view.responses && <span aria-live="polite"><strong>{view.responses.answered}</strong> of {view.responses.eligible} answered</span>}
                {view.phase === "open" && <Countdown view={view} clockOffset={clockOffset} />}
              </div>
              {view.reveal && <div style={{ marginTop: "0.9rem" }}><RevealNote reveal={view.reveal} /></div>}
              {view.voided.includes(view.q) && !view.reveal && <p className={styles.noticeWarn}>Voided. This question will not count.</p>}
              <div className={styles.controls} style={{ marginTop: "1rem" }}>
                {view.phase === "preview" && <button type="button" className={styles.button} disabled={busy} onClick={() => command("open")}>Open answers</button>}
                {view.phase === "open" && <button type="button" className={styles.button} disabled={busy} onClick={() => command("lock")}>Lock answers</button>}
                {(view.phase === "open" || view.phase === "locked") && <button type="button" className={view.phase === "locked" ? styles.button : styles.buttonGhost} disabled={busy} onClick={() => command("reveal")}>Reveal answer</button>}
                {view.phase === "reveal" && <button type="button" className={styles.buttonGhost} disabled={busy} onClick={() => command("standings")}>Show standings</button>}
                {(view.phase === "reveal" || view.phase === "standings") && <button type="button" className={styles.button} disabled={busy} onClick={() => command("next")}>{isLast ? "Finish and show final standings" : "Next question"}</button>}
              </div>
              <div className={styles.controls} style={{ marginTop: "0.75rem" }}>
                {canVoid && <button type="button" className={styles.buttonDanger} disabled={busy} onClick={() => { if (window.confirm("Void this question? It will stop counting for everyone and standings will be recalculated.")) command("void", { q: view.q }); }}>Void question</button>}
                <button type="button" className={styles.buttonDanger} disabled={busy} onClick={() => { if (window.confirm("End the event now? Final standings will be shown and the room will close.")) command("end"); }}>End event</button>
              </div>
            </div>
          )}

          {view.phase === "ended" && (
            <div className={styles.panelWarm}>
              <h2 id="host-stage" className="font-display" style={{ marginTop: 0 }}>Final standings</h2>
              <StandingsList rows={view.standings} timed={view.scoring === "timed"} label="Final standings" />
              {view.recap && view.recap.length > 0 && (
                <details style={{ marginTop: "1rem" }}>
                  <summary style={{ cursor: "pointer", minHeight: 44, display: "flex", alignItems: "center" }}>Answers and sources</summary>
                  <ol>
                    {view.recap.map((r) => (
                      <li key={r.index} style={{ marginBottom: "0.5rem" }}>
                        {r.prompt} <strong>{r.answer}</strong>{r.void ? " (voided)" : ""}{" "}
                        <a className="text-link" href={r.source} target="_blank" rel="noopener noreferrer">source</a>
                      </li>
                    ))}
                  </ol>
                </details>
              )}
              <p className={`${styles.small} ${styles.muted}`}>This room and its answers are deleted automatically within 30 minutes.</p>
              <Link className={styles.button} href="/live/host/">Host another session</Link>
            </div>
          )}
        </section>

        <aside className={styles.stack} aria-label="Room details">
          {view.phase !== "lobby" && view.phase !== "ended" && (
            <div className={styles.panel}>
              <h2 className="font-display" style={{ marginTop: 0, fontSize: "1.2rem" }}>Standings</h2>
              <p className={`${styles.small} ${styles.muted}`}>Revealed questions only.</p>
              <StandingsList rows={view.standings} timed={view.scoring === "timed"} />
            </div>
          )}
          <div className={styles.panel}>
            <h2 className="font-display" style={{ marginTop: 0, fontSize: "1.2rem" }}>
              {view.mode === "team" ? "Players and teams" : "Players"} ({view.playerCount})
            </h2>
            {view.phase !== "lobby" && view.phase !== "ended" && <p className={`${styles.small} ${styles.muted}`}>Late joiners can play from the next question.</p>}
            <ul className={styles.players}>
              {(view.players ?? []).map((p) => (
                <li key={p.id} className={styles.player}>
                  <span className={styles.row} style={{ gap: "0.5rem" }}>
                    <span className={p.connected ? styles.dot : styles.dotOff} aria-hidden="true" />
                    <span>{p.name}{view.mode === "team" && p.team !== p.name ? <span className={styles.muted}> · {p.team}</span> : null}</span>
                    <span className={styles.visuallyHidden}>{p.connected ? "connected" : "not connected"}</span>
                    {view.phase === "open" && p.answered && <span className={styles.pill}>Answered</span>}
                  </span>
                  {view.phase !== "ended" && (
                    <button type="button" className={styles.buttonGhost} style={{ minHeight: 44, padding: "0.4rem 0.7rem" }}
                      onClick={() => { if (window.confirm(`Remove ${p.name} from the room?`)) command("remove", { playerId: p.id }); }}>
                      Remove<span className={styles.visuallyHidden}> {p.name}</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
            {(view.players ?? []).length === 0 && <p className={styles.muted}>Nobody yet.</p>}
          </div>
          {view.phase !== "lobby" && (
            <div className={styles.panel}>
              <p className="eyebrow">Join</p>
              <p style={{ margin: 0 }}>Code <strong className={styles.link}>{view.code}</strong> at typologyquiz.com/live</p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
