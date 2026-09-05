"use client";

// Fillable map of the 50 US states (Alaska and Hawaii as insets), adapted
// from the public-domain Wikimedia "Blank US Map (states only)" - see
// src/lib/trivia/data/us-map-paths.ts for provenance.

import { US_MAP_PATHS, US_MAP_VIEWBOX } from "@/lib/trivia/data/us-map-paths";
import { US_STATE_NAMES } from "@/lib/trivia/data/us-states";
import {
  US_CAPITAL_POINTS,
  US_HIT_POINTS,
  US_LABEL_POINTS,
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
      // Rhode Island, Delaware, Connecticut, New Jersey, Massachusetts and
      // Maryland cannot hold their names; RegionMap gives them numbered markers
      // and a callout list under the map (an SVG gutter column used to do
      // this, but it shrank to 5px type on a phone). The finger-sized hit
      // targets are what make those same states tappable at 375px.
      viewBox={US_MAP_VIEWBOX}
      paths={US_MAP_PATHS}
      names={US_STATE_NAMES}
      title={title}
      showLabels={showLabels}
      labelPoints={US_LABEL_POINTS}
      hitPoints={US_HIT_POINTS}
      capitals={showCapitals ? US_CAPITAL_POINTS : undefined}
      {...rest}
    />
  );
}
