"use client";

// Fillable map of the 50 US states (Alaska and Hawaii as insets), adapted
// from the public-domain Wikimedia "Blank US Map (states only)" - see
// src/lib/trivia/data/us-map-paths.ts for provenance.

import { US_MAP_PATHS, US_MAP_VIEWBOX } from "@/lib/trivia/data/us-map-paths";
import { US_STATE_NAMES } from "@/lib/trivia/data/us-states";
import { RegionMap, type RegionMapProps } from "./RegionMap";

type Props = Omit<RegionMapProps, "viewBox" | "paths" | "names" | "title"> & {
  title?: string;
};

export function USMap({ title = "Map of the United States", ...rest }: Props) {
  return (
    <RegionMap
      viewBox={US_MAP_VIEWBOX}
      paths={US_MAP_PATHS}
      names={US_STATE_NAMES}
      title={title}
      {...rest}
    />
  );
}
