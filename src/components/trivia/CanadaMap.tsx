"use client";

// Fillable map of Canada's 13 provinces and territories, adapted from the
// public-domain Wikimedia "Canada blank map" (small islands dropped,
// coastlines simplified) - see src/lib/trivia/data/canada-map-paths.ts.

import {
  CANADA_MAP_PATHS,
  CANADA_MAP_VIEWBOX,
} from "@/lib/trivia/data/canada-map-paths";
import { CANADA_REGION_NAMES } from "@/lib/trivia/data/canada";
import { RegionMap, type RegionMapProps } from "./RegionMap";

type Props = Omit<RegionMapProps, "viewBox" | "paths" | "names" | "title"> & {
  title?: string;
};

export function CanadaMap({ title = "Map of Canada", ...rest }: Props) {
  return (
    <RegionMap
      viewBox={CANADA_MAP_VIEWBOX}
      paths={CANADA_MAP_PATHS}
      names={CANADA_REGION_NAMES}
      title={title}
      {...rest}
    />
  );
}
