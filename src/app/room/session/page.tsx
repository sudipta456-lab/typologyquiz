"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { loadProfile } from "@/lib/profile";
import {
  decodeRoom,
  encodeRoom,
  loadRoom,
  mergeRoom,
  saveRoom,
  tallyTypeLabels,
  upsertMember,
  type Room,
  type RoomMember,
} from "@/lib/rooms";
import { decodeResult } from "@/lib/results";
import { getTest } from "@/lib/tests/registry";
import { SITE } from "@/lib/site";
import { useSiteOrigin } from "@/lib/use-site-origin";

function RoomSessionInner() {
  const searchParams = useSearchParams();
  const code = (searchParams.get("code") || "").toUpperCase();
  const s = searchParams.get("s") || "";
  const origin = useSiteOrigin();

  const [room, setRoom] = useState<Room | null>(null);
  const [resultPaste, setResultPaste] = useState("");
  const [status, setStatus] = useState("");
  const [profileTick, setProfileTick] = useState(0);
  const [profile, setProfile] = useState<ReturnType<typeof loadProfile>>(null);

  useEffect(() => {
    setProfile(loadProfile());
  }, [profileTick]);

  useEffect(() => {
    if (!code) return;
    let base = loadRoom(code);
    if (s) {
      const incoming = decodeRoom(s);
      if (incoming) base = mergeRoom(base, { ...incoming, code });
    }
    if (!base) {
      base = {
        code,
        name: `Room ${code}`,
        createdAt: Date.now(),
        hostId: profile?.id || "unknown",
        members: [],
      };
      saveRoom(base);
    }
    setRoom(base);
  }, [code, s, profile?.id]);

  const shareUrl = useMemo(() => {
    if (!room) return "";
    return `${origin}/room/session/?code=${room.code}&s=${encodeRoom(room)}`;
  }, [room, origin]);

  const tallies = useMemo(() => (room ? tallyTypeLabels(room.members) : []), [room]);

  if (!code) {
    return (
      <div className="section">
        <h1 className="section-title">Missing room code</h1>
        <Link href="/room" className="text-link">
          Back to rooms
        </Link>
      </div>
    );
  }

  function handleCopyLink() {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl).then(() =>
      setStatus("Room link copied. Send it to friends.")
    );
    setTimeout(() => setStatus(""), 2500);
  }

  function extractEncoded(raw: string): string {
    const t = raw.trim();
    if (t.includes("r=")) {
      const m = t.match(/[?&]r=([^&]+)/);
      if (m) return decodeURIComponent(m[1]);
    }
    return t;
  }

  function handleSubmitResult(e: React.FormEvent) {
    e.preventDefault();
    if (!room) return;
    const p = loadProfile();
    if (!p) {
      setStatus("Create an account first.");
      return;
    }
    const encoded = extractEncoded(resultPaste);
    const decoded = decodeResult(encoded);
    if (!decoded) {
      setStatus("Could not read that result link.");
      return;
    }
    const test = getTest(decoded.result.testSlug);
    const extras = decoded.extras || {};
    const typeLabel =
      (typeof extras.label === "string" && extras.label) || test?.title || "Result";
    const typeDescription =
      (typeof extras.description === "string" && extras.description) || undefined;

    const member: RoomMember = {
      userId: p.id,
      displayName: p.displayName,
      color: p.color,
      testSlug: decoded.result.testSlug,
      testTitle: test?.title || decoded.result.testSlug,
      typeLabel,
      typeDescription,
      scores: decoded.result.scores,
      encoded,
      joinedAt: Date.now(),
    };
    const next = upsertMember(room, member);
    setRoom(next);
    setResultPaste("");
    setStatus("You're in. Copy the room link again so friends get the update.");
    setTimeout(() => setStatus(""), 3500);
  }

  if (!room) {
    return (
      <div className="section">
        <p>Loading room…</p>
      </div>
    );
  }

  return (
    <div className="section room-page">
      <p className="eyebrow">Room {room.code}</p>
      <h1 className="section-title">{room.name}</h1>
      <p className="section-lead">
        {room.members.length} member{room.members.length === 1 ? "" : "s"} in this snapshot. After
        you join, copy the link again so the group has the latest version.
      </p>

      {!profile && (
        <div className="room-banner">
          <p>
            Need a display name.{" "}
            <Link href="/account" className="text-link" onClick={() => setProfileTick((n) => n + 1)}>
              Create account
            </Link>
          </p>
        </div>
      )}

      <div className="room-actions">
        <button type="button" className="btn-primary" onClick={handleCopyLink}>
          Copy room link
        </button>
        <Link href="/test/friend-role" className="btn-outline">
          Take Friend Role
        </Link>
        <Link href="/test/social-battery" className="btn-outline">
          Social Battery
        </Link>
        <Link href="/compare" className="btn-outline">
          Compare two
        </Link>
      </div>

      {status && (
        <p className="share-status" style={{ paddingLeft: 0 }}>
          {status}
        </p>
      )}

      <form className="room-submit" onSubmit={handleSubmitResult}>
        <h2 className="test-block-title">Drop your result</h2>
        <p className="section-lead" style={{ marginBottom: 12 }}>
          Paste a results link from any test (Friend Role works great).
        </p>
        <textarea
          value={resultPaste}
          onChange={(e) => setResultPaste(e.target.value)}
          rows={3}
          placeholder="https://typologyquiz.com/test/friend-role/results/?r=..."
          className="room-textarea"
        />
        <button type="submit" className="btn-primary" disabled={!profile}>
          Add me to the room
        </button>
      </form>

      {tallies.length > 0 && (
        <div className="room-tally">
          <h2 className="test-block-title">Group map</h2>
          <ul>
            {tallies.map((t) => (
              <li key={t.label}>
                <strong>{t.label}</strong>
                <span>
                  {t.count} {t.count === 1 ? "person" : "people"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="room-members">
        <h2 className="test-block-title">Members</h2>
        {room.members.length === 0 ? (
          <p className="section-lead">Nobody yet. Be first.</p>
        ) : (
          <ul className="room-member-list">
            {room.members.map((m) => (
              <li key={m.userId + m.joinedAt}>
                <span className="account-avatar sm" style={{ background: m.color }}>
                  {m.displayName.slice(0, 1).toUpperCase()}
                </span>
                <div>
                  <strong>{m.displayName}</strong>
                  <p>
                    {m.typeLabel} · {m.testTitle}
                  </p>
                </div>
                <Link
                  href={`/test/${m.testSlug}/results/?r=${encodeURIComponent(m.encoded)}`}
                  className="text-link"
                >
                  View
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="room-fineprint">
        Rooms are peer-shared (the link carries the data). Nothing is stored on a server.{" "}
        <a href={SITE.url}>{SITE.legalName}</a>
      </p>
    </div>
  );
}

export default function RoomSessionPage() {
  return (
    <Suspense fallback={<div className="section">Loading room…</div>}>
      <RoomSessionInner />
    </Suspense>
  );
}
