"use client";

import { useEffect, useMemo, useRef } from "react";
import { downloadCanvas } from "@/lib/result-card";
import { drawGroupPoster, type PosterMember } from "@/lib/group-poster";
import { getTest } from "@/lib/tests/registry";
import { CATEGORY_META } from "@/lib/types";
import type { Room } from "@/lib/rooms";

/** Downloadable PNG poster of everyone in the room (story + post formats). */
export function GroupPosterBlock({ room }: { room: Room }) {
  const storyRef = useRef<HTMLCanvasElement>(null);
  const squareRef = useRef<HTMLCanvasElement>(null);

  // Reuse exactly what the member list renders: displayName, typeLabel,
  // testTitle, avatar color; the category chip comes from the test registry.
  const members: PosterMember[] = useMemo(
    () =>
      room.members.map((m) => {
        const test = getTest(m.testSlug);
        return {
          displayName: m.displayName,
          typeLabel: m.typeLabel,
          testTitle: m.testTitle,
          categoryHex: test ? CATEGORY_META[test.category]?.hex : undefined,
          color: m.color,
        };
      }),
    [room.members]
  );

  useEffect(() => {
    const payload = { roomCode: room.code, roomName: room.name, members };
    if (storyRef.current) drawGroupPoster(storyRef.current, payload, "story");
    if (squareRef.current) drawGroupPoster(squareRef.current, payload, "square");
  }, [room.code, room.name, members]);

  function saveStory() {
    if (!storyRef.current) return;
    downloadCanvas(storyRef.current, `room-${room.code}-story.png`);
  }

  function saveSquare() {
    if (!squareRef.current) return;
    downloadCanvas(squareRef.current, `room-${room.code}-poster.png`);
  }

  return (
    <div className="result-card-block">
      <div className="result-card-header">
        <h3 className="share-title">Group poster</h3>
        <p className="share-subtitle">Everyone in one PNG · story (9:16) or feed (1:1)</p>
      </div>
      <div className="result-card-previews">
        <div className="result-card-preview story">
          <canvas ref={storyRef} className="result-card-canvas" />
          <span className="result-card-format">Story</span>
        </div>
        <div className="result-card-preview square">
          <canvas ref={squareRef} className="result-card-canvas" />
          <span className="result-card-format">Post</span>
        </div>
      </div>
      <div className="share-actions" style={{ padding: "0.85rem 1.15rem 1rem" }}>
        <button type="button" className="share-btn share-btn-outline" onClick={saveStory}>
          Download story
        </button>
        <button type="button" className="btn-primary share-btn" onClick={saveSquare}>
          Download group poster
        </button>
      </div>
      <p className="share-note">
        The poster shows display names and result labels, nothing else. Save it and drop it in the
        group chat.
      </p>
    </div>
  );
}
