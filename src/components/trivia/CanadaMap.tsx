"use client";

// Fillable map of Canada's 13 provinces and territories, adapted from the
// public-domain Wikimedia "Canada blank map" (small islands dropped,
// coastlines simplified) - see src/lib/trivia/data/canada-map-paths.ts.

import {
  CANADA_MAP_PATHS,
  CANADA_MAP_VIEWBOX,
} from "@/lib/trivia/data/canada-map-paths";
import { CANADA_REGION_NAMES } from "@/lib/trivia/data/canada";
import {
  CANADA_CAPITAL_POINTS,
  CANADA_HIT_POINTS,
  CANADA_LABEL_POINTS,
} from "@/lib/trivia/data/map-labels";
import { RegionMap, type RegionMapProps } from "./RegionMap";

type Props = Omit<RegionMapProps, "viewBox" | "paths" | "names" | "title" | "labelPoints"> & {
  title?: string;
  /** Capitals quiz: a star at each capital, its name revealed when found. */
  showCapitals?: boolean;
};

export function CanadaMap({
  title = "Map of Canada",
  showLabels = false,
  showCapitals = false,
  ...rest
}: Props) {
  return (
    <RegionMap
      // Nova Scotia and Prince Edward Island cannot carry their own names at
      // this scale; RegionMap lists them under the map with numbered markers.
      // The Maritime hit targets make them tappable on a phone.
      viewBox={CANADA_MAP_VIEWBOX}
      paths={CANADA_MAP_PATHS}
      names={CANADA_REGION_NAMES}
      title={title}
      showLabels={showLabels}
      labelPoints={CANADA_LABEL_POINTS}
      hitPoints={CANADA_HIT_POINTS}
      capitals={showCapitals ? CANADA_CAPITAL_POINTS : undefined}
      {...rest}
    />
  );
}
