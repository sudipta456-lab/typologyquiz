/** Lightweight local account (no password, device-stored). */

export type UserProfile = {
  id: string;
  displayName: string;
  color: string;
  createdAt: number;
};

const KEY = "typologyquiz_profile_v1";

export const AVATAR_COLORS = [
  "#0795EA",
  "#F9684D",
  "#07AD9C",
  "#F47A9E",
  "#8B5CF6",
  "#F5A623",
  "#3D6FAD",
  "#14141f",
];

function uid() {
  return `u_${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36).slice(-4)}`;
}

export function loadProfile(): UserProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const p = JSON.parse(raw) as UserProfile;
    if (!p?.displayName || !p?.id) return null;
    return p;
  } catch {
    return null;
  }
}

export function saveProfile(partial: { displayName: string; color?: string }): UserProfile {
  const existing = loadProfile();
  const profile: UserProfile = {
    id: existing?.id || uid(),
    displayName: partial.displayName.trim().slice(0, 24) || "Anon",
    color: partial.color || existing?.color || AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)],
    createdAt: existing?.createdAt || Date.now(),
  };
  localStorage.setItem(KEY, JSON.stringify(profile));
  return profile;
}

export function clearProfile(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}

export function requireProfile(): UserProfile | null {
  return loadProfile();
}
