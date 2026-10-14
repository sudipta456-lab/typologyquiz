"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
import {
  beginGroupAttempt,
  getGroupRoom,
  GROUP_CODE_PATTERN,
  groupErrorMessage,
  joinGroupRoom,
  loadGroupHostSecret,
  loadGroupToken,
  normalizeGroupCode,
  saveGroupAttempt,
  saveGroupToken,
  sendGroupMessage,
  sendGroupPresence,
  startGroupRoom,
  type GroupActivity,
  type GroupRoom,
} from "@/lib/group/api";
import { formatTimeMs } from "@/lib/trivia/engine";

function activityLabel(activity: GroupActivity) {
  if (activity === "results") return "results";
  if (activity === "playing") return "playing";
  if (activity === "lobby") return "in lobby";
  return "offline";
}
function nonce() { return crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`; }

function GroupRoomPage() {
  const search = useSearchParams();
  const code = normalizeGroupCode(search.get("room") ?? "");
  const valid = GROUP_CODE_PATTERN.test(code);
  const [room, setRoom] = useState<GroupRoom | null>(null);
  const [token, setToken] = useState<string | null>(() => valid ? loadGroupToken(code) : null);
  const [hostSecret] = useState<string | null>(() => valid ? loadGroupHostSecret(code) : null);
  const [name, setName] = useState("");
  const [chat, setChat] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [joining, setJoining] = useState(false);
  const [starting, setStarting] = useState(false);
  const [beginning, setBeginning] = useState(false);
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);
  const [now, setNow] = useState(() => Date.now());

  const refresh = useCallback(async () => {
    if (!valid) return;
    try {
      const next = await getGroupRoom(code, token);
      setRoom(next); setError(null);
    } catch (failure) { setError(groupErrorMessage((failure as { code?: string }).code ?? "network")); }
  }, [code, token, valid]);

  useEffect(() => {
    if (!valid) return;
    const initial = window.setTimeout(() => { void refresh(); }, 0);
    const poll = window.setInterval(() => { void refresh(); }, 3000);
    const clock = window.setInterval(() => setNow(Date.now()), 1000);
    const onFocus = () => { void refresh(); };
    window.addEventListener("focus", onFocus);
    return () => { window.clearTimeout(initial); window.clearInterval(poll); window.clearInterval(clock); window.removeEventListener("focus", onFocus); };
  }, [refresh, valid]);

  const roomState = room?.state;
  useEffect(() => {
    if (!token || !roomState || roomState === "ended") return;
    const activity = roomState === "lobby" ? "lobby" : "playing";
    const beat = async () => {
      if (document.hidden) return;
      try { const result = await sendGroupPresence(code, token, activity); setRoom(result.room); } catch { /* polling retains the last known board */ }
    };
    void beat();
    const interval = window.setInterval(() => { void beat(); }, 15000);
    const visible = () => { if (!document.hidden) void beat(); };
    document.addEventListener("visibilitychange", visible);
    return () => { window.clearInterval(interval); document.removeEventListener("visibilitychange", visible); };
  }, [code, roomState, token]);

  const shareUrl = valid && typeof window !== "undefined" ? `${window.location.origin}/group/?room=${code}` : "";
  const countdownSeconds = room?.state === "open" && room.startAt !== null ? Math.max(0, Math.ceil((room.startAt - now) / 1000)) : null;
  const canPlay = room?.state === "open" && countdownSeconds === 0 && token !== null;

  async function join() {
    if (!valid || joining) return;
    setJoining(true); setError(null);
    try {
      const result = await joinGroupRoom(code, name);
      saveGroupToken(code, result.token); setToken(result.token); setRoom(result.room);
    } catch (failure) { setError(groupErrorMessage((failure as { code?: string }).code ?? "network")); }
    finally { setJoining(false); }
  }
  async function startLobby() {
    if (!room || !hostSecret || starting) return;
    setStarting(true); setError(null);
    try { const result = await startGroupRoom(code, hostSecret, room.revision); setRoom(result.room); }
    catch (failure) { setError(groupErrorMessage((failure as { code?: string }).code ?? "network")); }
    finally { setStarting(false); }
  }
  async function play() {
    if (!room || !token || !canPlay || beginning) return;
    setBeginning(true); setError(null);
    try {
      const result = await beginGroupAttempt(code, token);
      saveGroupAttempt(code, result.attemptId);
      window.location.assign(`/trivia/${room.slug}/?group=${room.code}&seed=${encodeURIComponent(room.seed)}`);
    } catch (failure) { setError(groupErrorMessage((failure as { code?: string }).code ?? "network")); setBeginning(false); }
  }
  async function copy() { try { await navigator.clipboard.writeText(shareUrl); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { setCopied(false); } }
  async function message() {
    if (!token || !chat.trim() || sending) return;
    setSending(true); setError(null);
    try { const result = await sendGroupMessage(code, token, chat, nonce()); setRoom(result.room); setChat(""); }
    catch (failure) { setError(groupErrorMessage((failure as { code?: string }).code ?? "network")); }
    finally { setSending(false); }
  }

  if (!valid) return <main className="section" style={{ maxWidth: "42rem" }}><p className="eyebrow">Group trivia</p><h1 className="section-title">Enter a room code</h1><p className="section-lead">Open the group link your host shared, or ask them for the six-character code.</p><Link className="btn-primary" href="/trivia/">Browse trivia</Link></main>;
  if (!room && !error) return <main className="section"><p role="status">Opening group lobby…</p></main>;
  if (!room) return <main className="section"><h1 className="section-title">Room unavailable</h1><p className="section-lead">{error}</p><Link className="text-link" href="/trivia/">Browse trivia</Link></main>;

  return <main className="section" style={{ maxWidth: "58rem" }}>
    <p className="eyebrow">Group trivia · Room {room.code}</p>
    <h1 className="section-title">{room.title}</h1>
    <p className="section-lead">A shared game lobby for a native TypologyQuiz round. Scores are for fun; equal scores share a rank.</p>
    {error && <p className="compare-err" role="alert">{error}</p>}

    {!token && room.state !== "ended" && <section className="quiz-card" style={{ padding: "1rem", margin: "1rem 0" }}>
      <h2 className="font-display" style={{ marginTop: 0 }}>Join the lobby</h2>
      <label className="compare-field"><span>Nickname shown to this group</span><input value={name} onChange={(event) => setName(event.target.value)} maxLength={20} autoComplete="nickname" /></label>
      <button type="button" className="btn-primary" onClick={join} disabled={joining || !name.trim()}>{joining ? "Joining…" : "Join group"}</button>
    </section>}

    <section className="quiz-card" style={{ padding: "1rem", margin: "1rem 0" }} aria-live="polite">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "baseline" }}><h2 className="font-display" style={{ margin: 0 }}>Game lobby</h2><span style={{ color: "var(--ink-mute)" }}>{room.onlineCount} online · {room.playerCount} joined</span></div>
      {room.state === "lobby" && <p>Waiting for the host to start the shared countdown.</p>}
      {room.state === "open" && countdownSeconds !== null && countdownSeconds > 0 && <p><strong>Starting together in {countdownSeconds}…</strong> Get ready on your own device.</p>}
      {room.state === "open" && countdownSeconds === 0 && <p><strong>The round is live.</strong> Start when you are ready; late joiners are welcome.</p>}
      {room.state === "ended" && <p><strong>This room has ended.</strong> The board remains visible briefly.</p>}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: "1rem" }}>
        {hostSecret && room.state === "lobby" && <button type="button" className="btn-primary" onClick={startLobby} disabled={starting}>{starting ? "Starting…" : "Start together"}</button>}
        {canPlay && <button type="button" className="btn-primary" onClick={play} disabled={beginning}>{beginning ? "Starting your round…" : "Play now"}</button>}
        {token && <button type="button" className="btn-outline" onClick={copy}>{copied ? "Invite link copied" : "Copy invite link"}</button>}
      </div>
    </section>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))", gap: "1rem" }}>
      <section className="quiz-card" style={{ padding: "1rem" }} aria-live="polite">
        <h2 className="font-display" style={{ marginTop: 0 }}>Players</h2>
        {room.board.length === 0 ? <p>Nobody has joined yet.</p> : <ol style={{ paddingLeft: "1.35rem", margin: 0 }}>{room.board.map((entry) => <li key={entry.id} style={{ margin: "0.6rem 0" }}><strong>{entry.name}</strong>{entry.status === "completed" ? <span> · #{entry.rank} · {entry.score}/{entry.total} · {entry.timeMs !== null ? formatTimeMs(entry.timeMs) : "—"}</span> : <span style={{ color: "var(--ink-mute)" }}> · {entry.online ? activityLabel(entry.activity) : "offline"}</span>}</li>)}</ol>}
      </section>
      <section className="quiz-card" style={{ padding: "1rem", minWidth: 0 }}>
        <h2 className="font-display" style={{ marginTop: 0 }}>Room chat</h2>
        {!token ? <p style={{ color: "var(--ink-mute)" }}>Join the group to read and send chat.</p> : <>
          <div aria-live="polite" style={{ maxHeight: "15rem", overflowY: "auto", display: "grid", gap: "0.55rem", marginBottom: "0.75rem" }}>{(room.chat ?? []).length === 0 ? <p style={{ color: "var(--ink-mute)", margin: 0 }}>Say hi to the group.</p> : room.chat?.map((item) => <p key={item.id} style={{ margin: 0, overflowWrap: "anywhere" }}><strong>{item.name}: </strong>{item.text}</p>)}</div>
          {room.state !== "ended" && <form onSubmit={(event) => { event.preventDefault(); void message(); }}><label className="compare-field"><span className="sr-only">Message the group</span><input value={chat} onChange={(event) => setChat(event.target.value)} maxLength={200} placeholder="Message the group" autoComplete="off" /></label><button type="submit" className="btn-outline" disabled={sending || !chat.trim()}>{sending ? "Sending…" : "Send"}</button></form>}
        </>}
      </section>
    </div>
    <p style={{ marginTop: "1rem", color: "var(--ink-mute)", fontSize: "0.9rem" }}>This room shares nicknames, presence, plain-text chat, and final score summaries with joined players. It never shares answers or private assessment results. Room data is deleted automatically.</p>
  </main>;
}
export default function Page() { return <Suspense fallback={<main className="section"><p>Loading room…</p></main>}><GroupRoomPage /></Suspense>; }
