"use client";

import { useEffect, useMemo, useRef } from "react";
import { downloadCanvas } from "@/lib/result-card";
import { drawTriviaCard, type TriviaCardMap, type TriviaCardPayload } from "@/lib/trivia-card";

/**
 * Downloadable PNG scoreboard for a finished trivia run (story + post formats),
 * built the same way FriendCardBlock is.
 *
 * Everything the card needs arrives as props, map data included, so mounting it
 * is one line on the results screen and this component never reaches back into
 * the play client's state or into a map dataset.
 */
export type TriviaShareBlockProps = {
  /** Quiz title, e.g. "Name All 50 US States". */
  quizTitle: string;
  /** Used for the download filename; falls back to a generic name. */
  quizSlug?: string;
  score: number;
  total: number;
  /** Time used, ms. */
  timeMs: number;
  /** "You got them all", "Time's up", "Out of lives". */
  outcomeLine: string;
  /** True when the run cleared the whole set; drives the accent colour. */
  complete?: boolean;
  /**
   * The percentile sentence exactly as the results screen states it, so the
   * card cannot drift from the page. Keep the "(estimated)" wording whenever
   * the number rests on the baked anchors or on a sample too small to state
   * plainly.
   */
  percentileLine?: string;
  newBestScore?: boolean;
  newBestTime?: boolean;
  /** Standing best score, shown when this run did not beat it. */
  bestScore?: number;
  /** Map quizzes only: the same viewBox and paths the play screen renders. */
  mapViewBox?: string;
  mapPaths?: Readonly<Record<string, string>>;
  /** Ids found this run. */
  foundIds?: readonly string[];
  /** Ids in play this run (random-subset and letter quizzes). */
  activeIds?: readonly string[] | null;
};

export function TriviaShareBlock({
  quizTitle,
  quizSlug,
  score,
  total,
  timeMs,
  outcomeLine,
  complete,
  percentileLine,
  newBestScore,
  newBestTime,
  bestScore,
  mapViewBox,
  mapPaths,
  foundIds,
  activeIds,
}: TriviaShareBlockProps) {
  const storyRef = useRef<HTMLCanvasElement>(null);
  const squareRef = useRef<HTMLCanvasElement>(null);

  const payload = useMemo<TriviaCardPayload>(() => {
    const map: TriviaCardMap | null =
      mapViewBox && mapPaths && Object.keys(mapPaths).length > 0
        ? {
            viewBox: mapViewBox,
            paths: mapPaths,
            found: foundIds ?? [],
            activeIds: activeIds ?? null,
          }
        : null;
    return {
      quizTitle,
      score,
      total,
      timeMs,
      outcomeLine,
      complete,
      percentileLine,
      newBestScore,
      newBestTime,
      bestScore,
      map,
    };
  }, [
    quizTitle,
    score,
    total,
    timeMs,
    outcomeLine,
    complete,
    percentileLine,
    newBestScore,
    newBestTime,
    bestScore,
    mapViewBox,
    mapPaths,
    foundIds,
    activeIds,
  ]);

  // Drawing to a canvas is exactly what an external-system sync effect is for.
  // The draw is synchronous, so the pixels are there before any click lands.
  useEffect(() => {
    if (storyRef.current) drawTriviaCard(storyRef.current, payload, "story");
    if (squareRef.current) drawTriviaCard(squareRef.current, payload, "square");
  }, [payload]);

  const base = quizSlug ? `typologyquiz-${quizSlug}` : "typologyquiz-trivia";

  function saveStory() {
    if (!storyRef.current) return;
    downloadCanvas(storyRef.current, `${base}-story.png`);
  }

  function saveSquare() {
    if (!squareRef.current) return;
    downloadCanvas(squareRef.current, `${base}-post.png`);
  }

  return (
    <div className="result-card-block">
      <div className="result-card-header">
        <h3 className="share-title">Score card</h3>
        <p className="share-subtitle">Story (9:16) or feed (1:1) PNG</p>
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
          Download post
        </button>
      </div>
      <p className="share-note">
        The card carries your score, your time, and the map you filled in. Post it and let
        someone try to beat it.
      </p>
    </div>
  );
}
