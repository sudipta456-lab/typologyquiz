export const GROUP_CODE_PATTERN = /^[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$/;
const TOKEN_PATTERN = /^[A-Za-z0-9_-]{32,64}$/;
const ATTEMPT_PATTERN = /^[A-Za-z0-9_-]{12,32}$/;
const TOKEN_PREFIX = "tq-group-player:";
const ATTEMPT_PREFIX = "tq-group-attempt:";
const HOST_PREFIX = "tq-group-host:";

export type GroupActivity = "lobby" | "playing" | "results" | "offline";
export type GroupBoardRow = { id: string; name: string; status: "joined" | "playing" | "completed"; online: boolean; activity: GroupActivity; score: number | null; total: number | null; timeMs: number | null; outcome: "complete" | "time" | "gaveup" | "lives" | null; completedAt: number | null; rank: number | null };
export type GroupChatMessage = { id: string; playerId: string; name: string; text: string; sentAt: number };
export type GroupRoom = { code: string; slug: string; title: string; total: number; seed: string; state: "lobby" | "open" | "ended"; startAt: number | null; revision: number; expiresAt: number; playerCount: number; onlineCount: number; completedCount: number; board: GroupBoardRow[]; chat?: GroupChatMessage[] };
export type GroupApiErrorBody = { error?: string; room?: GroupRoom };

export class GroupApiError extends Error { constructor(public code: string, public status: number, public room?: GroupRoom) { super(code); } }

function normaliseCode(value: string): string { return value.toUpperCase().replace(/[\s-]+/g, "").slice(0, 6); }
export function normalizeGroupCode(value: string): string { return normaliseCode(value); }

async function call<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response;
  try { response = await fetch(path, { cache: "no-store", ...init }); } catch { throw new GroupApiError("network", 0); }
  const body = await response.json().catch(() => ({})) as GroupApiErrorBody;
  if (!response.ok) throw new GroupApiError(body.error ?? "unavailable", response.status, body.room);
  return body as T;
}
function post<T>(path: string, body: object): Promise<T> { return call<T>(path, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) }); }
function groupPath(code: string, suffix = "") { return `/api/groups/${normaliseCode(code)}${suffix}`; }

export function createGroupRoom(slug: string) { return post<{ code: string; hostSecret: string }>("/api/groups", { slug }); }
export function getGroupRoom(code: string, token: string | null = loadGroupToken(code)) {
  const headers = token && TOKEN_PATTERN.test(token) ? { "x-group-player-token": token } : undefined;
  return call<GroupRoom>(groupPath(code), { headers });
}
export function joinGroupRoom(code: string, name: string) { return post<{ token: string; playerId: string; room: GroupRoom }>(groupPath(code, "/join"), { name }); }
export function startGroupRoom(code: string, secret: string, revision: number) { return post<{ room: GroupRoom; serverNow: number; duplicate?: boolean }>(groupPath(code, "/start"), { secret, revision }); }
export function beginGroupAttempt(code: string, token: string, attempt: string | null = loadGroupAttempt(code)) { return post<{ attemptId: string; room: GroupRoom; duplicate?: boolean }>(groupPath(code, "/begin"), attempt && ATTEMPT_PATTERN.test(attempt) ? { token, attempt } : { token }); }
export function sendGroupPresence(code: string, token: string, activity: Exclude<GroupActivity, "offline">) { return post<{ room: GroupRoom }>(groupPath(code, "/presence"), { token, activity }); }
export function sendGroupMessage(code: string, token: string, message: string, nonce: string) { return post<{ room: GroupRoom; duplicate?: boolean }>(groupPath(code, "/chat"), { token, message, nonce }); }
export function submitGroupResult(code: string, payload: { token: string; attempt: string; slug: string; score: number; total: number; timeMs: number; outcome: "complete" | "time" | "gaveup" | "lives" }) { return post<{ room: GroupRoom; duplicate?: boolean }>(groupPath(code, "/complete"), payload); }

function load(key: string, pattern: RegExp): string | null { try { const value = localStorage.getItem(key); return value && pattern.test(value) ? value : null; } catch { return null; } }
export function loadGroupToken(code: string): string | null { return load(TOKEN_PREFIX + normaliseCode(code), TOKEN_PATTERN); }
export function saveGroupToken(code: string, token: string | null): void { try { const key = TOKEN_PREFIX + normaliseCode(code); if (token && TOKEN_PATTERN.test(token)) localStorage.setItem(key, token); else localStorage.removeItem(key); } catch { /* unavailable storage */ } }
export function loadGroupAttempt(code: string): string | null { return load(ATTEMPT_PREFIX + normaliseCode(code), ATTEMPT_PATTERN); }
export function saveGroupAttempt(code: string, attempt: string | null): void { try { const key = ATTEMPT_PREFIX + normaliseCode(code); if (attempt && ATTEMPT_PATTERN.test(attempt)) localStorage.setItem(key, attempt); else localStorage.removeItem(key); } catch { /* unavailable storage */ } }
export function loadGroupHostSecret(code: string): string | null { try { const value = sessionStorage.getItem(HOST_PREFIX + normaliseCode(code)); return value && TOKEN_PATTERN.test(value) ? value : null; } catch { return null; } }
export function saveGroupHostSecret(code: string, secret: string | null): void { try { const key = HOST_PREFIX + normaliseCode(code); if (secret && TOKEN_PATTERN.test(secret)) sessionStorage.setItem(key, secret); else sessionStorage.removeItem(key); } catch { /* unavailable storage */ } }

export function groupErrorMessage(code: string) {
  switch (code) {
    case "room_not_found": return "That group room is no longer available.";
    case "room_ended": return "This group room has finished.";
    case "room_not_started": return "The host has not started this round yet.";
    case "room_full": return "This group room is full.";
    case "name_taken": return "Someone is already using that name in this room.";
    case "bad_name": return "Use a name with letters or numbers, up to 20 characters.";
    case "unknown_player": return "Join this room again before taking part.";
    case "unknown_attempt": return "Start from the group lobby before submitting a result.";
    case "already_completed": return "This room already has a different result for this player.";
    case "invalid_result": return "That result does not match this quiz.";
    case "stale_revision": return "The lobby changed. Please review the latest room state.";
    case "chat_rate_limited": return "Slow down a moment before sending another message.";
    case "bad_message": return "Use a short plain-text message.";
    case "network": return "Can’t reach the group room. Check your connection.";
    default: return "Something went wrong. Please try again.";
  }
}
