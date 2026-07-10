"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loadProfile } from "@/lib/profile";
import { createRoom, encodeRoom, listRoomCodes, loadRoom } from "@/lib/rooms";
import { recordBadgeEvent } from "@/lib/progress-game";

export default function RoomHubPage() {
  const router = useRouter();
  const [joinCode, setJoinCode] = useState("");
  const [roomName, setRoomName] = useState("");
  const [recent, setRecent] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    setRecent(listRoomCodes());
    setHasProfile(!!loadProfile());
  }, []);

  function ensureProfile(): boolean {
    if (loadProfile()) return true;
    setError("Make a free account first (display name only).");
    return false;
  }

  function handleCreate() {
    setError("");
    if (!ensureProfile()) return;
    const profile = loadProfile()!;
    const room = createRoom(profile, roomName || undefined);
    recordBadgeEvent("room_starter");
    const payload = encodeRoom(room);
    router.push(`/room/session/?code=${room.code}&s=${payload}`);
  }

  function handleJoin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!ensureProfile()) return;
    const code = joinCode.trim().toUpperCase();
    if (code.length < 4) {
      setError("Enter a room code.");
      return;
    }
    const local = loadRoom(code);
    if (local) {
      router.push(`/room/session/?code=${code}&s=${encodeRoom(local)}`);
      return;
    }
    router.push(`/room/session/?code=${code}`);
  }

  return (
    <div className="section room-hub">
      <p className="eyebrow">Community rooms</p>
      <h1 className="section-title">Take tests with friends</h1>
      <p className="section-lead">
        Create a room, share the link, everyone drops their results in. No server drama: the room
        lives in the shared link + this device. Best on Friend Role and Social Battery.
      </p>

      {!hasProfile && (
        <div className="room-banner">
          <p>
            You need a display name first.{" "}
            <Link href="/account" className="text-link">
              Create a free account
            </Link>
          </p>
        </div>
      )}

      {error && <p className="compare-err">{error}</p>}

      <div className="room-hub-grid">
        <div className="room-card">
          <h2 className="test-block-title">Create a room</h2>
          <label className="compare-field">
            <span>Room name (optional)</span>
            <input
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="Lunch table lore"
              maxLength={40}
            />
          </label>
          <button type="button" className="btn-primary" onClick={handleCreate}>
            Create room
          </button>
        </div>

        <div className="room-card">
          <h2 className="test-block-title">Join a room</h2>
          <form onSubmit={handleJoin}>
            <label className="compare-field">
              <span>Room code</span>
              <input
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                placeholder="ABC123"
                maxLength={8}
              />
            </label>
            <button type="submit" className="btn-primary">
              Join
            </button>
          </form>
          <p className="room-hint">Tip: open the full link your friend sent (it includes room data).</p>
        </div>
      </div>

      {recent.length > 0 && (
        <div style={{ marginTop: 32 }}>
          <h2 className="test-block-title">Recent on this device</h2>
          <div className="share-networks invite-networks">
            {recent.map((c) => (
              <Link key={c} href={`/room/session/?code=${c}`} className="share-network">
                {c}
              </Link>
            ))}
          </div>
        </div>
      )}

      <p style={{ marginTop: 28 }}>
        <Link href="/test/friend-role" className="text-link">
          Start with Friend Role →
        </Link>
        {" · "}
        <Link href="/compare" className="text-link">
          Compare two results
        </Link>
      </p>
    </div>
  );
}
