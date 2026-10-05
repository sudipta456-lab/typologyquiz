"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { fetchRoomInfo, LiveApiError, socketUrl } from "./api";
import type { LiveHello, LiveServerEvent, LiveView } from "./types";

export type LiveStatus = "idle" | "connecting" | "open" | "reconnecting" | "closed";

// After a welcome, only these errors end the session; before it, the only
// message in flight is the hello, so any error without a question ends the
// attempt and the page shows why (never an endless "Joining" state).
const FATAL_AFTER_WELCOME = new Set(["removed", "room_expired"]);
const FATAL_CLOSE = new Set([4003, 4004, 4005, 4006, 4008, 1009]);
const PING_MS = 25_000;

/**
 * One WebSocket to a live room. `hello` identifies the client on every
 * (re)connect; after a fresh player join, the server's rejoin token replaces
 * it so a reconnect never creates a second player.
 */
export function useLiveRoom(code: string | null, hello: LiveHello | null, onEvent?: (event: LiveServerEvent) => void) {
  const [status, setStatus] = useState<LiveStatus>("idle");
  const [view, setView] = useState<LiveView | null>(null);
  const [fatal, setFatal] = useState<string | null>(null);
  const [clockOffset, setClockOffset] = useState(0);
  const socketRef = useRef<WebSocket | null>(null);
  const helloRef = useRef(hello);
  const eventRef = useRef(onEvent);
  const helloKey = hello ? JSON.stringify(hello) : "";

  useEffect(() => { eventRef.current = onEvent; }, [onEvent]);

  useEffect(() => {
    if (!code || !helloKey) return;
    helloRef.current = JSON.parse(helloKey) as LiveHello;
    let stopped = false;
    let attempt = 0;
    let retry: ReturnType<typeof setTimeout> | undefined;
    let ping: ReturnType<typeof setInterval> | undefined;
    let welcomed = false;

    const stop = (reason: string) => {
      stopped = true;
      setFatal(reason);
      setStatus("closed");
      socketRef.current?.close(1000, "done");
    };

    const connect = () => {
      if (stopped) return;
      setStatus(attempt === 0 ? "connecting" : "reconnecting");
      let opened = false;
      const ws = new WebSocket(socketUrl(code));
      socketRef.current = ws;
      ws.onopen = () => {
        opened = true;
        attempt = 0;
        ws.send(JSON.stringify(helloRef.current));
        ping = setInterval(() => { if (ws.readyState === WebSocket.OPEN) ws.send('{"t":"ping"}'); }, PING_MS);
      };
      ws.onmessage = (message) => {
        let data: { t?: string; view?: LiveView; code?: string; token?: string; q?: number };
        try { data = JSON.parse(String(message.data)); } catch { return; }
        if (data.t === "state" && data.view) {
          setClockOffset(data.view.serverNow - Date.now());
          setView(data.view);
          setStatus("open");
          return;
        }
        if (data.t === "welcome") {
          welcomed = true;
          if (data.token) helloRef.current = { t: "hello", role: "player", token: data.token };
        }
        if (data.t === "error" && data.code && (welcomed ? FATAL_AFTER_WELCOME.has(data.code) : data.q === undefined)) {
          eventRef.current?.(data as LiveServerEvent);
          stop(data.code);
          return;
        }
        if (data.t === "welcome" || data.t === "answer_saved" || data.t === "error") eventRef.current?.(data as LiveServerEvent);
      };
      ws.onclose = (event) => {
        clearInterval(ping);
        if (socketRef.current === ws) socketRef.current = null;
        if (stopped) return;
        if (FATAL_CLOSE.has(event.code)) { stop(event.reason || "room_expired"); return; }
        welcomed = false;
        attempt += 1;
        setStatus("reconnecting");
        const delay = Math.min(15_000, 1000 * 2 ** Math.min(attempt - 1, 4));
        if (!opened) {
          // The upgrade itself failed: find out whether the room still exists.
          fetchRoomInfo(code).then((info) => {
            if (!info.joinable) stop("room_ended");
            else retry = setTimeout(connect, delay);
          }).catch((error: unknown) => {
            if (error instanceof LiveApiError && (error.status === 404 || error.status === 400)) stop(error.code);
            else retry = setTimeout(connect, delay);
          });
        } else {
          retry = setTimeout(connect, delay);
        }
      };
    };

    connect();
    return () => {
      stopped = true;
      clearTimeout(retry);
      clearInterval(ping);
      socketRef.current?.close(1000, "leaving");
      socketRef.current = null;
    };
  }, [code, helloKey]);

  const send = useCallback((message: object): boolean => {
    const ws = socketRef.current;
    if (!ws || ws.readyState !== WebSocket.OPEN) return false;
    ws.send(JSON.stringify(message));
    return true;
  }, []);

  return { status: helloKey ? status : "idle", view, fatal, clockOffset, send } as const;
}

function subscribeLocation(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener("hashchange", callback);
  window.addEventListener("tq-live-location", callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("hashchange", callback);
    window.removeEventListener("tq-live-location", callback);
  };
}

/** ?room=CODE plus the raw fragment, read without a server render mismatch. */
export function useLocationSnapshot(): { room: string | null; hash: string; ready: boolean } {
  const snapshot = useSyncExternalStore(
    subscribeLocation,
    () => `${window.location.search}\n${window.location.hash}`,
    () => null,
  );
  if (snapshot === null) return { room: null, hash: "", ready: false };
  const [search, hash] = snapshot.split("\n");
  return { room: new URLSearchParams(search).get("room"), hash, ready: true };
}

/** Change the URL without navigation and notify useLocationSnapshot. */
export function replaceLocation(url: string): void {
  window.history.replaceState(null, "", url);
  window.dispatchEvent(new Event("tq-live-location"));
}

/** Milliseconds left on the server clock, refreshed a few times a second. */
export function useRemaining(closesAt: number | null, clockOffset: number): number | null {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (closesAt === null) return;
    const id = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(id);
  }, [closesAt]);
  if (closesAt === null) return null;
  return Math.max(0, closesAt - (now + clockOffset));
}
