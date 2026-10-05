import type { LiveCatalog, LiveMode, LiveRoomInfo, LiveScoring } from "./types";

export const LIVE_CODE_PATTERN = /^[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$/;

/** Uppercases and strips spaces/dashes so "abc 234" and "ABC-234" both work. */
export function normalizeCode(input: string): string {
  return input.toUpperCase().replace(/[\s-]+/g, "").slice(0, 12);
}

export class LiveApiError extends Error {
  constructor(public code: string, public status: number) {
    super(code);
  }
}

async function call<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response;
  try {
    response = await fetch(path, { cache: "no-store", ...init });
  } catch {
    throw new LiveApiError("network", 0);
  }
  const body = await response.json().catch(() => ({})) as { error?: string };
  if (!response.ok) throw new LiveApiError(body.error ?? "unavailable", response.status);
  return body as T;
}

export function fetchCatalog(): Promise<LiveCatalog> {
  return call<LiveCatalog>("/api/live/catalog");
}

export function createLiveRoom(options: { sessionId: string; mode: LiveMode; scoring: LiveScoring; extendedTime: boolean }) {
  return call<{ code: string; hostSecret: string }>("/api/live/rooms", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(options),
  });
}

export function fetchRoomInfo(code: string): Promise<LiveRoomInfo> {
  if (!LIVE_CODE_PATTERN.test(code)) return Promise.reject(new LiveApiError("bad_code", 400));
  return call<LiveRoomInfo>(`/api/live/rooms/${code}`);
}

export function socketUrl(code: string): string {
  const proto = window.location.protocol === "https:" ? "wss:" : "ws:";
  return `${proto}//${window.location.host}/api/live/rooms/${code}/ws`;
}

export function joinUrl(code: string): string {
  return `${window.location.origin}/live/play/?room=${code}`;
}

export function screenPath(code: string): string {
  return `/live/screen/?room=${code}`;
}

/** Plain-language messages for server error codes. */
export function liveErrorMessage(code: string): string {
  switch (code) {
    case "room_not_found": return "We couldn't find a room with that code. Check it with your host. Rooms are deleted after the event.";
    case "room_expired": return "This room has expired and its data has been deleted.";
    case "room_ended": return "This event has finished.";
    case "bad_code": return "Room codes are six characters: letters and the digits 2–9.";
    case "room_full": return "This room is full.";
    case "teams_full": return "This room already has the maximum number of teams. Ask a team near you to share their phone.";
    case "name_taken": return "Someone in this room already has that name. Try another.";
    case "team_taken": return "A team with that name is already playing. If it's yours, play on the phone that joined it, or pick another name.";
    case "bad_name": return "Please use a name with letters or numbers, up to 20 characters.";
    case "bad_team_name": return "Please give your team a name with letters or numbers, up to 20 characters.";
    case "join_busy": return "Lots of people are joining at once. Wait a few seconds, then press Join again.";
    case "replaced": return "This room was opened again in another tab or on another device, so this one has stopped.";
    case "screens_full": return "This room already has the maximum number of projector screens open.";
    case "removed": return "The host removed you from this room.";
    case "bad_secret": return "This host link is not valid for this room.";
    case "rate_limited": return "Too many requests at once. Wait a moment and try again.";
    case "closed": return "Time was up before your answer arrived.";
    case "not_open": return "Answers aren't open for this question right now.";
    case "joined_late": return "You joined after this question opened. You'll be in from the next one.";
    case "already_answered": return "Your first answer for this question is already saved.";
    case "stale": return "The room had already moved on, so that command was skipped.";
    case "no_players": return "Wait for at least one player to join before starting.";
    case "unknown_session": return "That session is no longer available.";
    case "origin": return "This page must be opened on typologyquiz.com.";
    case "live_unavailable": return "Live Events isn't available right now.";
    case "network": return "Can't reach TypologyQuiz. Check your connection.";
    default: return "Something went wrong. Please try again.";
  }
}
