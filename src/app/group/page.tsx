"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
import {
  beginGroupAttempt, getGroupRoom, getPublicGroupLobbies, GROUP_CODE_PATTERN, groupErrorMessage,
  joinGroupRoom, loadGroupHostSecret, loadGroupToken, normalizeGroupCode, saveGroupAttempt,
  saveGroupToken, sendGroupMessage, sendGroupPresence, setGroupRoomVisibility, startGroupRoom,
  type GroupActivity, type GroupRoom, type PublicGroupLobby,
} from "@/lib/group/api";
import { formatTimeMs } from "@/lib/trivia/engine";

function activityLabel(activity: GroupActivity) {
  if (activity === "results") return "results";
  if (activity === "playing") return "playing";
  if (activity === "lobby") return "in lobby";
  return "offline";
}
function nonce() { return crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`; }

function GroupInvite({ code, url }: { code: string; url: string }) {
  const [qr, setQr] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    let cancelled = false;
    import("qrcode")
      .then((QRCode) => QRCode.toDataURL(url, { margin: 1, width: 384, errorCorrectionLevel: "M", color: { dark: "#14141f", light: "#ffffff" } }))
      .then((data) => { if (!cancelled) setQr(data); })
      .catch(() => { if (!cancelled) setQr(null); });
    return () => { cancelled = true; };
  }, [url]);
  async function copy() {
    try { await navigator.clipboard.writeText(url); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { setCopied(false); }
  }
  return <section className="quiz-card" style={{ padding: "1rem", margin: "1rem 0", display: "grid", gridTemplateColumns: "auto minmax(0, 1fr)", gap: "1rem", alignItems: "center" }}>
    {/* eslint-disable-next-line @next/next/no-img-element -- local QR data URL */}
    {qr ? <img src={qr} alt={`QR code that opens the join page for room ${code}`} width={144} height={144} style={{ width: "9rem", height: "9rem", background: "#fff", padding: "0.35rem", borderRadius: "0.5rem" }} /> : <div aria-hidden="true" style={{ width: "9rem", height: "9rem", background: "var(--paper-warm)", borderRadius: "0.5rem" }} />}
    <div>
      <p className="eyebrow" style={{ marginTop: 0 }}>Invite players</p>
      <h2 className="font-display" style={{ margin: "0 0 0.4rem" }}>Scan or share room {code}</h2>
      <p style={{ marginTop: 0, color: "var(--ink-soft)" }}>They can scan the code, open the link, choose a nickname, and play on their own device.</p>
      <button type="button" className="btn-outline" onClick={copy}>{copied ? "Invite link copied" : "Copy invite link"}</button>
      <p className="sr-only" role="status">{copied ? "Invite link copied" : ""}</p>
    </div>
  </section>;
}

function PublicLobbyBrowser() {
  const [rooms, setRooms] = useState<PublicGroupLobby[]>([]);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);
  const refresh = useCallback(async () => {
    try { const result = await getPublicGroupLobbies(); setRooms(result.rooms); setUnavailable(false); }
    catch { setUnavailable(true); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { const initial = window.setTimeout(() => { void refresh(); }, 0); const interval = window.setInterval(() => { void refresh(); }, 8000); return () => { window.clearTimeout(initial); window.clearInterval(interval); }; }, [refresh]);
  return <section className="quiz-card" style={{ padding: "1rem", marginTop: "1.5rem" }} aria-live="polite">
    <div style={{ display: "flex", gap: "0.75rem", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap" }}>
      <div><p className="eyebrow" style={{ marginTop: 0 }}>Open games</p><h2 className="font-display" style={{ margin: 0 }}>Join a public lobby</h2></div>
      <button type="button" className="btn-outline" onClick={() => void refresh()}>Refresh</button>
    </div>
    <p style={{ color: "var(--ink-soft)" }}>Hosts choose whether to appear here. This list shows only the quiz, room state, and aggregate player counts.</p>
    {loading ? <p>Looking for public lobbies…</p> : unavailable ? <p style={{ color: "var(--ink-mute)" }}>Public lobbies are unavailable right now. Use a room link or code instead.</p> : rooms.length === 0 ? <p style={{ color: "var(--ink-mute)" }}>No public lobbies are open right now. Start one from any eligible trivia quiz, or ask a host for an invite.</p> : <ul style={{ display: "grid", gap: "0.75rem", padding: 0, margin: 0, listStyle: "none" }}>{rooms.map((room) => <li key={room.code} style={{ borderTop: "1px solid var(--line)", paddingTop: "0.75rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
      <div><strong>{room.title}</strong><br /><span style={{ color: "var(--ink-mute)", fontSize: "0.95rem" }}>{room.state === "lobby" ? "Waiting in lobby" : "Round in progress"} · {room.onlineCount} online · {room.playerCount} joined</span></div>
      <Link className="btn-primary" href={`/group/?room=${room.code}`}>{room.state === "lobby" ? "Open lobby" : "Join round"}</Link>
    </li>)}</ul>}
  </section>;
}

function GroupLanding() {
  const [roomCode, setRoomCode] = useState("");
  const code = normalizeGroupCode(roomCode);
  function openRoom(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); if (GROUP_CODE_PATTERN.test(code)) window.location.assign(`/group/?room=${code}`); }
  return <main className="section" style={{ maxWidth: "52rem" }}>
    <p className="eyebrow">Group trivia</p>
    <h1 className="section-title">Play together, each on your own device</h1>
    <p className="section-lead">Scan a host&apos;s QR code, open their link, enter a room code, or join an opt-in public lobby. Your score appears on the shared board when you finish.</p>
    <form onSubmit={openRoom} className="quiz-card" style={{ padding: "1rem", display: "flex", gap: "0.75rem", alignItems: "end", flexWrap: "wrap" }}>
      <label className="compare-field" style={{ flex: "1 1 14rem", margin: 0 }}><span>Room code</span><input value={roomCode} onChange={(event) => setRoomCode(event.target.value)} maxLength={8} autoCapitalize="characters" autoComplete="off" placeholder="ABC234" /></label>
      <button type="submit" className="btn-primary" disabled={!GROUP_CODE_PATTERN.test(code)}>Join room</button>
    </form>
    <PublicLobbyBrowser />
    <p style={{ marginTop: "1.25rem" }}><Link className="text-link" href="/trivia/">Browse eligible trivia quizzes</Link></p>
  </main>;
}

function GroupRoomPage() {
  const search = useSearchParams();
  const code = normalizeGroupCode(search.get("room") ?? "");
  const valid = GROUP_CODE_PATTERN.test(code);
  const [room, setRoom] = useState<GroupRoom | null>(null);
  const [token, setToken] = useState<string | null>(() => valid ? loadGroupToken(code) : null);
  const [hostSecret] = useState<string | null>(() => valid ? loadGroupHostSecret(code) : null);
  const [name, setName] = useState(""); const [chat, setChat] = useState(""); const [error, setError] = useState<string | null>(null);
  const [joining, setJoining] = useState(false); const [starting, setStarting] = useState(false); const [visibilitySaving, setVisibilitySaving] = useState(false); const [beginning, setBeginning] = useState(false); const [sending, setSending] = useState(false); const [now, setNow] = useState(() => Date.now());
  const refresh = useCallback(async () => {
    if (!valid) return;
    try { const next = await getGroupRoom(code, token); setRoom(next); setError(null); } catch (failure) { setError(groupErrorMessage((failure as { code?: string }).code ?? "network")); }
  }, [code, token, valid]);
  useEffect(() => { if (!valid) return; const initial = window.setTimeout(() => { void refresh(); }, 0); const poll = window.setInterval(() => { void refresh(); }, 3000); const clock = window.setInterval(() => setNow(Date.now()), 1000); const onFocus = () => { void refresh(); }; window.addEventListener("focus", onFocus); return () => { window.clearTimeout(initial); window.clearInterval(poll); window.clearInterval(clock); window.removeEventListener("focus", onFocus); }; }, [refresh, valid]);
  const roomState = room?.state;
  useEffect(() => {
    if (!token || !roomState || roomState === "ended") return;
    const activity = roomState === "lobby" ? "lobby" : "playing";
    const beat = async () => { if (!document.hidden) try { const result = await sendGroupPresence(code, token, activity); setRoom(result.room); } catch { /* polling retains last known board */ } };
    void beat(); const interval = window.setInterval(() => { void beat(); }, 15000); const visible = () => { if (!document.hidden) void beat(); }; document.addEventListener("visibilitychange", visible); return () => { window.clearInterval(interval); document.removeEventListener("visibilitychange", visible); };
  }, [code, roomState, token]);
  const shareUrl = valid && typeof window !== "undefined" ? `${window.location.origin}/group/?room=${code}` : "";
  const countdownSeconds = room?.state === "open" && room.startAt !== null ? Math.max(0, Math.ceil((room.startAt - now) / 1000)) : null;
  const canPlay = room?.state === "open" && countdownSeconds === 0 && token !== null;
  async function join() { if (!valid || joining) return; setJoining(true); setError(null); try { const result = await joinGroupRoom(code, name); saveGroupToken(code, result.token); setToken(result.token); setRoom(result.room); } catch (failure) { setError(groupErrorMessage((failure as { code?: string }).code ?? "network")); } finally { setJoining(false); } }
  async function startLobby() { if (!room || !hostSecret || starting) return; setStarting(true); setError(null); try { const result = await startGroupRoom(code, hostSecret, room.revision); setRoom(result.room); } catch (failure) { setError(groupErrorMessage((failure as { code?: string }).code ?? "network")); } finally { setStarting(false); } }
  async function changeVisibility(isPublic: boolean) { if (!room || !hostSecret || visibilitySaving) return; setVisibilitySaving(true); setError(null); try { const result = await setGroupRoomVisibility(code, hostSecret, isPublic, room.revision); setRoom(result.room); } catch (failure) { setError(groupErrorMessage((failure as { code?: string }).code ?? "network")); } finally { setVisibilitySaving(false); } }
  async function play() { if (!room || !token || !canPlay || beginning) return; setBeginning(true); setError(null); try { const result = await beginGroupAttempt(code, token); saveGroupAttempt(code, result.attemptId); window.location.assign(`/trivia/${room.slug}/?group=${room.code}&seed=${encodeURIComponent(room.seed)}`); } catch (failure) { setError(groupErrorMessage((failure as { code?: string }).code ?? "network")); setBeginning(false); } }
  async function message() { if (!token || !chat.trim() || sending) return; setSending(true); setError(null); try { const result = await sendGroupMessage(code, token, chat, nonce()); setRoom(result.room); setChat(""); } catch (failure) { setError(groupErrorMessage((failure as { code?: string }).code ?? "network")); } finally { setSending(false); } }
  if (!valid) return <GroupLanding />;
  if (!room && !error) return <main className="section"><p role="status">Opening group lobby…</p></main>;
  if (!room) return <main className="section"><h1 className="section-title">Room unavailable</h1><p className="section-lead">{error}</p><Link className="text-link" href="/group/">Browse public lobbies</Link></main>;
  return <main className="section" style={{ maxWidth: "58rem" }}>
    <p className="eyebrow">Group trivia · Room {room.code}</p><h1 className="section-title">{room.title}</h1><p className="section-lead">A shared game lobby for a native TypologyQuiz round. Scores are for fun; equal scores share a rank.</p>{error && <p className="compare-err" role="alert">{error}</p>}
    {!token && room.state !== "ended" && <section className="quiz-card" style={{ padding: "1rem", margin: "1rem 0" }}><h2 className="font-display" style={{ marginTop: 0 }}>Choose a nickname and join</h2><p style={{ color: "var(--ink-soft)" }}>You&apos;ll appear in this room&apos;s player board and can use group chat after joining.</p><label className="compare-field"><span>Nickname shown to this group</span><input value={name} onChange={(event) => setName(event.target.value)} maxLength={20} autoComplete="nickname" /></label><button type="button" className="btn-primary" onClick={join} disabled={joining || !name.trim()}>{joining ? "Joining…" : "Join group"}</button></section>}
    <section className="quiz-card" style={{ padding: "1rem", margin: "1rem 0" }} aria-live="polite"><div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "baseline" }}><h2 className="font-display" style={{ margin: 0 }}>Game lobby</h2><span style={{ color: "var(--ink-mute)" }}>{room.onlineCount} online · {room.playerCount} joined</span></div>{room.state === "lobby" && <p>Waiting for the host to start the shared countdown.</p>}{room.state === "open" && countdownSeconds !== null && countdownSeconds > 0 && <p><strong>Starting together in {countdownSeconds}…</strong> Get ready on your own device.</p>}{room.state === "open" && countdownSeconds === 0 && <p><strong>The round is live.</strong> Start when you are ready; late joiners are welcome.</p>}{room.state === "ended" && <p><strong>This room has ended.</strong> The board remains visible briefly.</p>}<div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: "1rem" }}>{hostSecret && room.state === "lobby" && <button type="button" className="btn-primary" onClick={startLobby} disabled={starting}>{starting ? "Starting…" : "Start together"}</button>}{canPlay && <button type="button" className="btn-primary" onClick={play} disabled={beginning}>{beginning ? "Starting your round…" : "Play now"}</button>}</div></section>
    {(token || hostSecret) && room.state !== "ended" && <GroupInvite code={room.code} url={shareUrl} />}
    {hostSecret && room.state !== "ended" && <section className="quiz-card" style={{ padding: "1rem", margin: "1rem 0" }}><h2 className="font-display" style={{ marginTop: 0 }}>Lobby visibility</h2><p style={{ color: "var(--ink-soft)" }}>{room.isPublic ? "This room appears in the public lobby browser until it ends or expires. Only the quiz title, room state, and aggregate counts are listed." : "This room is invite-only. Turn it public if you want people browsing group trivia to join."}</p><button type="button" className="btn-outline" disabled={visibilitySaving} onClick={() => void changeVisibility(!room.isPublic)}>{visibilitySaving ? "Saving…" : room.isPublic ? "Make invite-only" : "List as public lobby"}</button></section>}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))", gap: "1rem" }}><section className="quiz-card" style={{ padding: "1rem" }} aria-live="polite"><h2 className="font-display" style={{ marginTop: 0 }}>Players</h2>{room.board.length === 0 ? <p>Nobody has joined yet.</p> : <ol style={{ paddingLeft: "1.35rem", margin: 0 }}>{room.board.map((entry) => <li key={entry.id} style={{ margin: "0.6rem 0" }}><strong>{entry.name}</strong>{entry.status === "completed" ? <span> · #{entry.rank} · {entry.score}/{entry.total} · {entry.timeMs !== null ? formatTimeMs(entry.timeMs) : "—"}</span> : <span style={{ color: "var(--ink-mute)" }}> · {entry.online ? activityLabel(entry.activity) : "offline"}</span>}</li>)}</ol>}</section><section className="quiz-card" style={{ padding: "1rem", minWidth: 0 }}><h2 className="font-display" style={{ marginTop: 0 }}>Room chat</h2>{!token ? <p style={{ color: "var(--ink-mute)" }}>Join the group to read and send chat.</p> : <><div aria-live="polite" style={{ maxHeight: "15rem", overflowY: "auto", display: "grid", gap: "0.55rem", marginBottom: "0.75rem" }}>{(room.chat ?? []).length === 0 ? <p style={{ color: "var(--ink-mute)", margin: 0 }}>Say hi to the group.</p> : room.chat?.map((item) => <p key={item.id} style={{ margin: 0, overflowWrap: "anywhere" }}><strong>{item.name}: </strong>{item.text}</p>)}</div>{room.state !== "ended" && <form onSubmit={(event) => { event.preventDefault(); void message(); }}><label className="compare-field"><span className="sr-only">Message the group</span><input value={chat} onChange={(event) => setChat(event.target.value)} maxLength={200} placeholder="Message the group" autoComplete="off" /></label><button type="submit" className="btn-outline" disabled={sending || !chat.trim()}>{sending ? "Sending…" : "Send"}</button></form>}</>}</section></div>
    <p style={{ marginTop: "1rem", color: "var(--ink-mute)", fontSize: "0.9rem" }}>This room shares nicknames, presence, plain-text chat, and final score summaries with joined players. It never shares answers or private assessment results. Room data is deleted automatically.</p>
  </main>;
}
export default function Page() { return <Suspense fallback={<main className="section"><p>Loading room…</p></main>}><GroupRoomPage /></Suspense>; }
