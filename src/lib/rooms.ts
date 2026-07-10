import type { UserProfile } from "./profile";

export type RoomMember = {
  userId: string;
  displayName: string;
  color: string;
  testSlug: string;
  testTitle: string;
  typeLabel: string;
  typeDescription?: string;
  scores: Record<string, number>;
  encoded: string;
  joinedAt: number;
};

export type Room = {
  code: string;
  name: string;
  createdAt: number;
  hostId: string;
  members: RoomMember[];
};

const ROOM_PREFIX = "typologyquiz_room_";
const ROOM_INDEX = "typologyquiz_room_index_v1";

function randomCode(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 6; i++) s += alphabet[Math.floor(Math.random() * alphabet.length)];
  return s;
}

export function listRoomCodes(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(ROOM_INDEX);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function rememberCode(code: string) {
  const codes = new Set(listRoomCodes());
  codes.add(code);
  localStorage.setItem(ROOM_INDEX, JSON.stringify([...codes].slice(-20)));
}

export function loadRoom(code: string): Room | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(ROOM_PREFIX + code.toUpperCase());
    if (!raw) return null;
    return JSON.parse(raw) as Room;
  } catch {
    return null;
  }
}

export function saveRoom(room: Room): void {
  const code = room.code.toUpperCase();
  room.code = code;
  localStorage.setItem(ROOM_PREFIX + code, JSON.stringify(room));
  rememberCode(code);
}

export function createRoom(host: UserProfile, name?: string): Room {
  let code = randomCode();
  while (loadRoom(code)) code = randomCode();
  const room: Room = {
    code,
    name: (name || `${host.displayName}'s room`).slice(0, 40),
    createdAt: Date.now(),
    hostId: host.id,
    members: [],
  };
  saveRoom(room);
  return room;
}

export function upsertMember(room: Room, member: RoomMember): Room {
  const others = room.members.filter((m) => m.userId !== member.userId);
  const next = { ...room, members: [...others, member] };
  saveRoom(next);
  return next;
}

export function removeMember(room: Room, userId: string): Room {
  const next = { ...room, members: room.members.filter((m) => m.userId !== userId) };
  saveRoom(next);
  return next;
}

/** Encode room for URL share (no server). */
export function encodeRoom(room: Room): string {
  const raw = JSON.stringify(room);
  return btoa(unescape(encodeURIComponent(raw)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export function decodeRoom(encoded: string): Room | null {
  try {
    let b64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    const raw = decodeURIComponent(escape(atob(b64)));
    const room = JSON.parse(raw) as Room;
    if (!room?.code || !Array.isArray(room.members)) return null;
    return room;
  } catch {
    return null;
  }
}

export function mergeRoom(local: Room | null, incoming: Room): Room {
  if (!local) {
    saveRoom(incoming);
    return incoming;
  }
  if (local.code !== incoming.code) {
    saveRoom(incoming);
    return incoming;
  }
  // Prefer richer membership
  const byId = new Map<string, RoomMember>();
  for (const m of local.members) byId.set(m.userId, m);
  for (const m of incoming.members) {
    const prev = byId.get(m.userId);
    if (!prev || m.joinedAt >= prev.joinedAt) byId.set(m.userId, m);
  }
  const merged: Room = {
    ...incoming,
    name: incoming.name || local.name,
    members: [...byId.values()].sort((a, b) => a.joinedAt - b.joinedAt),
  };
  saveRoom(merged);
  return merged;
}

export function tallyTypeLabels(members: RoomMember[]): { label: string; count: number }[] {
  const map = new Map<string, number>();
  for (const m of members) {
    const k = m.typeLabel || "Unknown";
    map.set(k, (map.get(k) || 0) + 1);
  }
  return [...map.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count);
}
