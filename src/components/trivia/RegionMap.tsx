"use client";

// Shared renderer behind USMap and CanadaMap: one closed SVG path per region,
// filled by id. Fill changes are color-only, so the map never shifts layout.

import { useCallback } from "react";

const FOUND_FILL = "var(--mark-teal)";
const MISSING_FILL = "var(--mark-coral)";
const IDLE_FILL = "var(--line)";
const EDGE = "var(--white)";

export interface RegionMapProps {
  viewBox: string;
  paths: Readonly<Record<string, string>>;
  /** id -> display name, used for accessible labels. */
  names: Readonly<Record<string, string>>;
  found: ReadonlySet<string>;
  /** After give-up / time-up: paint the not-found regions coral. */
  revealMissing?: boolean;
  /** Choice mode: regions are clickable and keyboard-focusable. */
  interactive?: boolean;
  onRegionClick?: (id: string) => void;
  /** Region currently flashing after a wrong click. */
  wrongFlashId?: string | null;
  reducedMotion?: boolean;
  /** Accessible name for the whole graphic. */
  title: string;
}

export function RegionMap({
  viewBox,
  paths,
  names,
  found,
  revealMissing = false,
  interactive = false,
  onRegionClick,
  wrongFlashId = null,
  reducedMotion = false,
  title,
}: RegionMapProps) {
  const handleKey = useCallback(
    (e: React.KeyboardEvent<SVGPathElement>, id: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onRegionClick?.(id);
      }
    },
    [onRegionClick]
  );

  return (
    <svg
      viewBox={viewBox}
      role={interactive ? "group" : "img"}
      aria-label={title}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      {Object.entries(paths).map(([id, d]) => {
        const isFound = found.has(id);
        const isWrongFlash = wrongFlashId === id;
        let fill = IDLE_FILL;
        if (isFound) fill = FOUND_FILL;
        else if (isWrongFlash) fill = MISSING_FILL;
        else if (revealMissing) fill = MISSING_FILL;
        const clickable = interactive && !isFound;
        return (
          <path
            key={id}
            d={d}
            data-state={id}
            fill={fill}
            stroke={EDGE}
            strokeWidth={1}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            role={interactive ? "button" : undefined}
            aria-label={interactive ? names[id] : undefined}
            aria-disabled={interactive && isFound ? true : undefined}
            tabIndex={clickable ? 0 : undefined}
            onClick={clickable ? () => onRegionClick?.(id) : undefined}
            onKeyDown={clickable ? (e) => handleKey(e, id) : undefined}
            style={{
              cursor: clickable ? "pointer" : "default",
              transition: reducedMotion ? "none" : "fill 0.25s ease",
              outlineOffset: 2,
            }}
          >
            {/* Native tooltip-style label for pointer users in typein mode is
                deliberately absent - hovering must not reveal answers. */}
          </path>
        );
      })}
    </svg>
  );
}
