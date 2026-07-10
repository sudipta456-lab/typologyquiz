"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AVATAR_COLORS,
  clearProfile,
  loadProfile,
  saveProfile,
  type UserProfile,
} from "@/lib/profile";
import {
  applyTheme,
  loadSchoolMode,
  loadTheme,
  saveSchoolMode,
  saveTheme,
  type ThemeMode,
} from "@/lib/settings";
import { BADGES, loadGame } from "@/lib/progress-game";

export default function AccountPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [name, setName] = useState("");
  const [color, setColor] = useState(AVATAR_COLORS[0]);
  const [saved, setSaved] = useState(false);
  const [school, setSchool] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("system");
  const [badges, setBadges] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const p = loadProfile();
    setProfile(p);
    if (p) {
      setName(p.displayName);
      setColor(p.color);
    }
    setSchool(loadSchoolMode());
    setTheme(loadTheme());
    const g = loadGame();
    setBadges(g.badges);
    setStreak(g.streak);
  }, []);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    const p = saveProfile({ displayName: name, color });
    setProfile(p);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handleClear() {
    clearProfile();
    setProfile(null);
    setName("");
    setColor(AVATAR_COLORS[0]);
  }

  function toggleSchool() {
    const next = !school;
    setSchool(next);
    saveSchoolMode(next);
  }

  function changeTheme(mode: ThemeMode) {
    setTheme(mode);
    saveTheme(mode);
    applyTheme(mode);
  }

  return (
    <div className="section account-page">
      <p className="eyebrow">You</p>
      <h1 className="section-title">Your account</h1>
      <p className="section-lead">
        No password. No email. Display name stays on this device for rooms and share cards.
      </p>

      <form className="account-form" onSubmit={handleSave}>
        <label className="compare-field">
          <span>Display name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={24}
            placeholder="e.g. jordan"
            required
          />
        </label>

        <div className="compare-field">
          <span>Avatar color</span>
          <div className="account-colors">
            {AVATAR_COLORS.map((c) => (
              <button
                key={c}
                type="button"
                className={color === c ? "account-swatch is-on" : "account-swatch"}
                style={{ background: c }}
                onClick={() => setColor(c)}
                aria-label={c}
              />
            ))}
          </div>
        </div>

        <div className="account-preview">
          <span className="account-avatar" style={{ background: color }}>
            {(name || "?").slice(0, 1).toUpperCase()}
          </span>
          <div>
            <strong>{name || "Your name"}</strong>
            <p>
              Streak {streak} day{streak === 1 ? "" : "s"} · {badges.length} badges
            </p>
          </div>
        </div>

        <div className="share-actions" style={{ padding: 0 }}>
          <button type="submit" className="btn-primary share-btn">
            {profile ? (saved ? "Saved" : "Save profile") : "Create account"}
          </button>
          {profile && (
            <button type="button" className="share-btn share-btn-outline" onClick={handleClear}>
              Clear from this device
            </button>
          )}
        </div>
      </form>

      <div className="account-prefs">
        <h2 className="test-block-title">Preferences</h2>
        <label className="pref-row">
          <div>
            <strong>School mode</strong>
            <p>Softer friendship wording on questions. Good for class use.</p>
          </div>
          <button
            type="button"
            className={school ? "pref-switch is-on" : "pref-switch"}
            onClick={toggleSchool}
            aria-pressed={school}
          >
            {school ? "On" : "Off"}
          </button>
        </label>

        <div className="pref-row">
          <div>
            <strong>Theme</strong>
            <p>Light, dark, or match your phone.</p>
          </div>
          <div className="tone-toggle">
            {(["light", "dark", "system"] as ThemeMode[]).map((m) => (
              <button
                key={m}
                type="button"
                className={theme === m ? "tone-btn is-on" : "tone-btn"}
                onClick={() => changeTheme(m)}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="badge-wall" style={{ marginTop: 28 }}>
        <h2 className="test-block-title">Badges</h2>
        <div className="badge-grid">
          {BADGES.map((b) => {
            const on = badges.includes(b.id);
            return (
              <div key={b.id} className={on ? "badge-card is-on" : "badge-card"}>
                <strong>{b.name}</strong>
                <p>{b.blurb}</p>
                <span>{on ? "Unlocked" : "Locked"}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="account-next">
        <Link href="/daily" className="btn-primary">
          Daily question
        </Link>
        <Link href="/room" className="btn-outline">
          Rooms
        </Link>
        <Link href="/test/friend-role" className="btn-outline">
          Friend Role
        </Link>
      </div>
    </div>
  );
}
