"use client";

// Fillable map of the 50 US states (Alaska and Hawaii as insets), adapted
// from the public-domain Wikimedia "Blank US Map (states only)" - see
// src/lib/trivia/data/us-map-paths.ts for provenance.

import { US_MAP_PATHS, US_MAP_VIEWBOX } from "@/lib/trivia/data/us-map-paths";
import { US_STATE_NAMES } from "@/lib/trivia/data/us-states";
import {
  US_CAPITAL_POINTS,
  US_LABEL_POINTS,
  US_LABEL_VIEWBOX,
} from "@/lib/trivia/data/map-labels";
import { RegionMap, type RegionMapProps } from "./RegionMap";

type Props = Omit<RegionMapProps, "viewBox" | "paths" | "names" | "title" | "labelPoints"> & {
  title?: string;
  /**
   * Capitals quiz: place a star at each state capital and reveal the city's
   * name once its state is found.
   */
  showCapitals?: boolean;
};

export function USMap({
  title = "Map of the United States",
  showLabels = false,
  showCapitals = false,
  ...rest
}: Props) {
  return (
    <RegionMap
      // With labels on, the viewBox grows a gutter on the right so Rhode
      // Island, Delaware, Connecticut, New Jersey, Massachusetts and Maryland
      // can hang their names on leader lines instead of overprinting each
      // other. Off, it is byte-for-byte the map it has always been.
      viewBox={showLabels ? US_LABEL_VIEWBOX : US_MAP_VIEWBOX}
      paths={US_MAP_PATHS}
      names={US_STATE_NAMES}
      title={title}
      showLabels={showLabels}
      labelPoints={US_LABEL_POINTS}
      capitals={showCapitals ? US_CAPITAL_POINTS : undefined}
      {...rest}
    />
  );
}
