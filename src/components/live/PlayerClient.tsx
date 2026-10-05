"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { fetchRoomInfo, LIVE_CODE_PATTERN, LiveApiError, liveErrorMessage, normalizeCode } from "@/lib/live/api";
import { loadPlayerToken, savePlayerToken, setPlayerTokenExpiry, sweepPlayerTokens } from "@/lib/live/storage";
import { replaceLocation, useLiveRoom, useLocationSnapshot } from "@/lib/live/useLiveRoom";
import type { LiveHello, LiveRoomInfo, LiveServerEvent } from "@/lib/live/types";
import { ConnectionNote, Countdown, LETTERS, QuestionOptions, RevealNote, ScoringRules, StandingsList, questionHeading } from "./LiveParts";
import styles from "./live.module.css";

export function PlayerClient() {
  const location = useLocationSnapshot();
  if (!location.ready) return <div className={styles.wrap}><p role="status">Loading…</p></div>;
  const code = location.room ? normalizeCode(location.room) : "";
  if (!LIVE_CODE_PATTERN.test(code)) return <CodeEntry initial={code} invalid={Boolean(location.room)} />;
  return <PlayerRoom key={code} code={code} />;
}

export function CodeEntry({ initial = "", invalid = false }: { initial?: string; invalid?: boolean }) {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(invalid ? liveErrorMessage("bad_code") : "");

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const code = normalizeCode(value);
    if (!LIVE_CODE_PATTERN.test(code)) { setError(liveErrorMessage("bad_code")); return; }
    if (window.location.pathname.startsWith("/live/play")) replaceLocation(`/live/play/?room=${code}`);
    else window.location.assign(`/live/play/?room=${code}`);
  }

  return (
    <form onSubmit={submit} className={styles.stack} noValidate>
      <label className={styles.label}>
        Room code
        <input className={styles.codeInput} value={value} onChange={(e) => { setValue(e.target.value); setError(""); }}
          inputMode="text" autoCapitalize="characters" autoComplete="off" autoCorrect="off" spellCheck={false} maxLength={9}
          aria-invalid={Boolean(error)} aria-describedby="live-code-help" />
      </label>
      <span id="live-code-help" className={`${styles.small} ${styles.muted}`}>Six characters, shown on the host&apos;s screen.</span>
      {error && <p className={styles.error} role="alert" style={{ margin: 0 }}>{error}</p>}
      <div><button type="submit" className={styles.button}>Find room</button></div>
    </form>
  );
}

// Join problems the player can fix from the form (another name, or wait and retry).
const JOIN_ERRORS = new Set(["room_full", "teams_full", "name_taken", "team_taken", "bad_name", "bad_team_name", "join_busy", "rate_limited"]);
// The stored rejoin token can never work again after any of these.
const TOKEN_DEAD = new Set(["unknown_player", "removed", "room_ended", "room_expired", "not_found", "room_not_found", "bad_code"]);
const SLOW_JOIN_MS = 12_000;

function PlayerRoom({ code }: { code: string }) {
  const [info, setInfo] = useState<LiveRoomInfo | null>(null);
  const [infoError, setInfoError] = useState<string | null>(null);
  const [hello, setHello] = useState<LiveHello | null>(() => {
    sweepPlayerTokens();
    const token = loadPlayerToken(code);
    return token ? { t: "hello", role: "player", token } : null;
  });
  const [attempt, setAttempt] = useState(0);
  const [joinError, setJoinError] = useState<string | null>(null);

  const refreshInfo = useCallback(() => {
    // An ended room keeps its record until deletion so a returning phone can still see the final standings.
    fetchRoomInfo(code).then((data) => { setInfo(data); setInfoError(null); }).catch((e: unknown) => {
      const reason = e instanceof LiveApiError ? e.code : "network";
      if (TOKEN_DEAD.has(reason)) savePlayerToken(code, null);
      setInfoError(reason);
    });
  }, [code]);

  useEffect(() => { refreshInfo(); }, [refreshInfo]);

  const onFatal = useCallback((reason: string) => {
    if (TOKEN_DEAD.has(reason)) savePlayerToken(code, null);
    if (JOIN_ERRORS.has(reason) || reason === "unknown_player") {
      setHello(null);
      setJoinError(reason === "unknown_player" ? null : liveErrorMessage(reason));
      refreshInfo();
    }
  }, [code, refreshInfo]);

  if (hello) {
    return <PlayerSession key={attempt} code={code} hello={hello} onFatal={onFatal} onRetry={() => setAttempt((n) => n + 1)} />;
  }

  return (
    <div className={styles.wrap}>
      <p className="eyebrow">Live Events · Room {code}</p>
      {infoError ? (
        <>
          <h1 className="section-title">Room not available</h1>
          <p className="section-lead">{liveErrorMessage(infoError)}</p>
          <CodeEntry />
        </>
      ) : !info ? (
        <p role="status">Finding room {code}…</p>
      ) : !info.joinable ? (
        <>
          <h1 className="section-title">This event has finished</h1>
          <p className="section-lead">Thanks for playing. Ask your host for a new code to join another one.</p>
        </>
      ) : (
        <>
          <h1 className="section-title">{info.sessionTitle}</h1>
          <p className="section-lead">
            {info.mode === "team" ? "Team game: each team plays together on one shared phone." : "Everyone plays for themselves."}{" "}
            {info.scoring === "timed" ? "Timed: correct answers come first, and quicker correct answers earn timing points that break ties." : "Untimed: only correct answers count."}
            {info.phase !== "lobby" ? " The quiz has already started. You can play from the next question." : ""}
          </p>
          <JoinForm info={info} error={joinError} onJoin={(h) => { setJoinError(null); setAttempt((n) => n + 1); setHello(h); }} />
        </>
      )}
    </div>
  );
}

function JoinForm({ info, error, onJoin }: { info: LiveRoomInfo; error: string | null; onJoin: (hello: LiveHello) => void }) {
  const [name, setName] = useState("");
  const [localError, setLocalError] = useState<string | null>(null);
  const team = info.mode === "team";

  function submit(event: React.FormEvent) {
    event.preventDefault();
    setLocalError(null);
    const value = name.trim();
    if (!value) { setLocalError(team ? "Enter a team name." : "Enter a nickname."); return; }
    onJoin(team ? { t: "hello", role: "player", teamName: value } : { t: "hello", role: "player", name: value });
  }

  const shown = localError ?? error;
  return (
    <form onSubmit={submit} className={styles.panel} noValidate>
      <div className={styles.stack}>
        {team && (
          <p className={`${styles.small} ${styles.muted}`} style={{ margin: 0 }}>
            One phone per team. Join on the phone your team will share, then pass it around and answer together.
          </p>
        )}
        <label className={styles.label}>
          {team ? "Team name" : "Nickname"}
          <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)} maxLength={20} autoComplete="off" aria-describedby="live-name-help" />
        </label>
        <span id="live-name-help" className={`${styles.small} ${styles.muted}`}>
          Shown on the shared screen. Up to 20 letters or numbers.{team ? "" : " Please don't use your full name."}
        </span>
        {shown && <p className={styles.error} role="alert" style={{ margin: 0 }}>{shown}</p>}
        <div><button type="submit" className={styles.button} disabled={info.full}>{info.full ? "Room is full" : "Join"}</button></div>
      </div>
    </form>
  );
}

type Pending = { q: number; choice: number; connection: number };

function PlayerSession({ code, hello, onFatal, onRetry }: { code: string; hello: LiveHello; onFatal: (reason: string) => void; onRetry: () => void }) {
  const [pending, setPending] = useState<Pending | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [connection, setConnection] = useState(0);
  const [slow, setSlow] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const onEvent = useCallback((event: LiveServerEvent) => {
    if (event.t === "welcome") {
      if (event.token) savePlayerToken(code, event.token);
      setConnection((n) => n + 1);
      setNotice(null);
    } else if (event.t === "answer_saved") {
      setPending(null);
      setNotice(null);
    } else if (event.t === "error") {
      if (typeof event.q === "number") setPending(null);
      setNotice(liveErrorMessage(event.code));
    }
  }, [code]);

  const { status, view, fatal, clockOffset, send } = useLiveRoom(code, hello, onEvent);

  useEffect(() => { if (fatal) onFatal(fatal); }, [fatal, onFatal]);

  // Keep the stored rejoin token exactly as long as the room itself (server
  // deletion time, converted to this phone's clock). Rounded down to the
  // minute so clock jitter in each update does not rewrite storage.
  const expiresAt = view?.me ? Math.floor((view.expiresAt - clockOffset) / 60_000) * 60_000 : null;
  useEffect(() => { if (expiresAt !== null) setPlayerTokenExpiry(code, expiresAt); }, [code, expiresAt]);

  const me = view?.me ?? null;
  const saved = view && me?.answer && me.answer.q === view.q ? me.answer : null;
  const activePending = view && pending && pending.q === view.q && !saved ? pending : null;
  const lost = activePending && activePending.connection !== connection;
  const canAnswer = Boolean(view && me && view.phase === "open" && me.eligible && !saved && (!activePending || lost) && status === "open");
  const questionIndex = view?.question?.index ?? null;
  const waiting = !me && !fatal;

  // Never leave someone staring at "Joining" with nothing to press.
  useEffect(() => {
    if (!waiting) return;
    const id = setTimeout(() => setSlow(true), SLOW_JOIN_MS);
    return () => clearTimeout(id);
  }, [waiting]);

  // A new question takes focus so keyboard and screen-reader users land on it.
  useEffect(() => { if (questionIndex !== null) headingRef.current?.focus(); }, [questionIndex]);

  // When the choices lock, are answered or are revealed, move focus off the
  // now-disabled buttons to the status line that says what happened.
  useEffect(() => {
    if (canAnswer) return;
    const active = document.activeElement;
    if (!active || active === document.body || optionsRef.current?.contains(active)) statusRef.current?.focus();
  }, [canAnswer, view?.phase]);

  if (fatal) {
    return (
      <div className={styles.wrap}>
        <p className="eyebrow">Live Events · Room {code}</p>
        <h1 className="section-title">{fatal === "removed" ? "You've left this room" : fatal === "room_ended" ? "This event has finished" : "Room unavailable"}</h1>
        <p className="section-lead">{liveErrorMessage(fatal)}</p>
        <Link className={styles.button} href="/live/">Back to Live Events</Link>
      </div>
    );
  }
  if (!view || !me) {
    return (
      <div className={styles.wrap}>
        <ConnectionNote status={status} />
        <p role="status">Joining room {code}…</p>
        {slow && (
          <div className={styles.stack}>
            <p className={styles.noticeWarn} role="alert" style={{ margin: 0 }}>This is taking longer than usual.</p>
            <div><button type="button" className={styles.button} onClick={onRetry}>Try again</button></div>
          </div>
        )}
      </div>
    );
  }

  function choose(choice: number) {
    if (!view || saved || activePending && !lost) return;
    if (!send({ t: "answer", q: view.q, choice })) {
      setNotice("You're offline, so your answer was not sent. It will be possible again once reconnected.");
      return;
    }
    setNotice(null);
    setPending({ q: view.q, choice, connection });
  }

  const timed = view.scoring === "timed";

  return (
    <div className={styles.wrap}>
      <div className={styles.row} style={{ justifyContent: "space-between" }}>
        <p className="eyebrow" style={{ margin: 0 }}>Room {view.code} · {view.session.title}</p>
        <span className={styles.pill}>
          <span className={status === "open" ? styles.dot : styles.dotOff} aria-hidden="true" />
          {me.name}{view.mode === "team" && me.teamName !== me.name ? ` · ${me.teamName}` : ""}
        </span>
      </div>
      <ConnectionNote status={status} />

      {view.phase === "lobby" && (
        <div className={styles.panelWarm}>
          <h1 className="section-title">You&apos;re in.</h1>
          <p className="section-lead">Watch the host&apos;s screen. Questions will appear here when the quiz starts.</p>
          {view.mode === "team" && <p>{me.teamName} plays on this phone. Keep it where the whole team can see it.</p>}
          <ScoringRules view={view} />
        </div>
      )}

      {view.question && (
        <section className={styles.panel} aria-labelledby="live-q">
          <p className="eyebrow">{questionHeading(view)}</p>
          <h1 id="live-q" ref={headingRef} tabIndex={-1} className={styles.question}>{view.question.prompt}</h1>
          {view.phase === "open" && <div style={{ marginBottom: "0.75rem" }}><Countdown view={view} clockOffset={clockOffset} /></div>}
          <div ref={optionsRef}>
            <QuestionOptions
              question={view.question}
              reveal={view.reveal}
              mine={saved?.choice ?? activePending?.choice ?? null}
              onChoose={view.phase === "open" ? choose : undefined}
              disabled={!canAnswer}
            />
          </div>
          <div ref={statusRef} tabIndex={-1} role="status" aria-live="polite" className={styles.status}>
            {view.phase === "preview" && (view.question.options ? "Answers open when the host is ready." : "Read the question. The choices appear when the host opens answers.")}
            {view.phase === "open" && !me.eligible && "You joined after this question opened. You'll play from the next one."}
            {view.phase === "open" && me.eligible && saved && `Answer saved: ${LETTERS[saved.choice]}. Waiting for the host.`}
            {view.phase === "open" && me.eligible && !saved && activePending && !lost && status === "open" && "Sending…"}
            {view.phase === "open" && me.eligible && !saved && activePending && (lost || status !== "open") && (status === "open"
              ? "Your answer didn't reach the room before the connection dropped. Please choose again."
              : "Connection lost before the room confirmed your answer. Reconnecting to check…")}
            {view.phase === "open" && me.eligible && !saved && !activePending && "Tap your answer. Your first choice is final."}
            {view.phase === "locked" && (saved ? `Answers locked. You chose ${LETTERS[saved.choice]}.` : "Answers locked. No answer from you this time.")}
            {view.reveal && !view.reveal.void && `Answer revealed: ${LETTERS[view.reveal.answer]}.`}
          </div>
          {notice && <p className={styles.noticeWarn} role="alert">{notice}</p>}
          {view.reveal && (
            <div className={styles.stack} style={{ marginTop: "0.75rem" }}>
              {me.result && (
                <p className={me.result.correct ? styles.noticeOk : styles.notice} style={{ margin: 0 }}>
                  {me.result.correct ? (timed ? `Correct. +1 correct, +${me.result.timing} timing points.` : "Correct. +1 correct.") : "Not this time."}
                </p>
              )}
              {!me.result && !view.reveal.void && <p className={styles.notice} style={{ margin: 0 }}>No answer from you on this one.</p>}
              <RevealNote reveal={view.reveal} />
            </div>
          )}
        </section>
      )}

      {(view.phase === "reveal" || view.phase === "standings" || view.phase === "ended") && (
        <section className={view.phase === "ended" ? styles.panelWarm : styles.panel} aria-labelledby="live-standings">
          <h2 id="live-standings" className="font-display" style={{ marginTop: 0 }}>{view.phase === "ended" ? "Final standings" : "Standings"}</h2>
          {me.standing && (
            <p>
              {view.mode === "team" ? me.teamName : "You"}: place {me.standing.rank} of {view.teamCount}, {me.standing.correct} correct
              {timed ? `, ${me.standing.timing} timing points` : ""}.
            </p>
          )}
          <StandingsList rows={view.standings} timed={timed} highlight={me.teamId} label={view.phase === "ended" ? "Final standings, top five" : "Top five"} />
          {view.phase === "ended" && (
            <p className={`${styles.small} ${styles.muted}`} style={{ marginTop: "1rem" }}>
              Thanks for playing. This room is deleted automatically shortly after the event. <Link className="text-link" href="/trivia/">Try more quizzes</Link>
            </p>
          )}
        </section>
      )}
    </div>
  );
}
