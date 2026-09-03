"use client";

// Clickable world map for the countries quizzes, and - with a different frame
// on the same geometry, not a second dataset - the Europe quiz.
//
// The world map is the one map that is unusable without navigation: Vatican
// City is a third of a unit across on a 2,650-unit map, which is a fraction of
// a pixel. So this one is always zoomable, every country too small to draw
// gets a minimum-size invisible hit target, and country names are laid out at
// whatever zoom the player is currently at rather than baked in.

import { useMemo } from "react";
import { COUNTRY_ANSWERS } from "@/lib/trivia/data/countries";
import {
  EUROPE_VIEW,
  WORLD_LABEL_POINTS,
  WORLD_MAP_PATHS,
  WORLD_MARKER_POINTS,
  WORLD_VIEW,
} from "@/lib/trivia/data/world-map-paths";
import type { LabelPoint } from "@/lib/trivia/data/map-labels";
import { RegionMap, type RegionMapProps } from "./RegionMap";

/** id -> country name, for aria-labels and the revealed labels. */
const COUNTRY_NAMES: Readonly<Record<string, string>> = Object.fromEntries(
  COUNTRY_ANSWERS.map((a) => [a.id, a.display])
);

const EUROPE_IDS: ReadonlySet<string> = new Set(
  COUNTRY_ANSWERS.filter((a) => a.group === "Europe").map((a) => a.id)
);

/**
 * Label anchors, straight from the generated pole-of-inaccessibility points.
 * `fit: "auto"` hands the decision to the renderer, which compares the name's
 * width against `r` at the current zoom - so Luxembourg's name is a floating
 * callout at world scale and sits inside the country once you zoom in.
 */
const WORLD_LABELS: Readonly<Record<string, LabelPoint>> = Object.fromEntries(
  Object.entries(WORLD_LABEL_POINTS).map(([id, p]) => [id, { x: p.x, y: p.y, r: p.r, fit: "auto" as const }])
);

/**
 * Anything whose largest inscribed circle is under ~3.5 units is at most a
 * few pixels wide at full zoom, so it gets a constant-size invisible target.
 * Where the source map drew its own marker circle (it does for 42 of them,
 * including every micro-state) that centre is used; otherwise the label
 * anchor, which is inside the country by construction.
 */
const WORLD_HIT_POINTS: Readonly<Record<string, { x: number; y: number }>> = Object.fromEntries(
  Object.entries(WORLD_LABEL_POINTS)
    .filter(([, p]) => p.r < 3.5)
    .map(([id, p]) => [id, WORLD_MARKER_POINTS[id] ?? { x: p.x, y: p.y }])
);

type Props = Omit<
  RegionMapProps,
  "viewBox" | "paths" | "names" | "title" | "labelPoints" | "hitPoints"
> & {
  title?: string;
  /**
   * Which frame to draw. Europe is the same 196 country paths in a European
   * viewBox - keeping the neighbours visible for context - with the 44
   * European entries as the ones in play.
   */
  view?: "world" | "europe";
};

export function WorldMap({
  title,
  view = "world",
  showLabels = false,
  zoomable = true,
  // A world map wants smaller type than a single-country map: at the default
  // size only about half the names find room at full zoom, and the rest are
  // one gesture away.
  labelScale = 0.8,
  activeIds,
  ...rest
}: Props) {
  const isEurope = view === "europe";
  // A Europe run has no random subset, so nothing else would mark the 44
  // countries actually being asked for. Default them in; an explicit
  // activeIds (a random-subset or letter run) still wins.
  const active = useMemo(
    () => (activeIds !== undefined ? activeIds : isEurope ? EUROPE_IDS : null),
    [activeIds, isEurope]
  );

  return (
    <RegionMap
      viewBox={isEurope ? EUROPE_VIEW : WORLD_VIEW}
      paths={WORLD_MAP_PATHS}
      names={COUNTRY_NAMES}
      title={title ?? (isEurope ? "Map of Europe" : "Map of the world")}
      showLabels={showLabels}
      labelPoints={WORLD_LABELS}
      hitPoints={WORLD_HIT_POINTS}
      zoomable={zoomable}
      labelScale={labelScale}
      activeIds={active}
      {...rest}
    />
  );
}
