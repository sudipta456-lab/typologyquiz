// Where a region's name goes on the map, and where its capital city sits.
//
// ---------------------------------------------------------------------------
// LABEL ANCHORS
// ---------------------------------------------------------------------------
// Every anchor is the POLE OF INACCESSIBILITY of the region's largest landmass
// - the centre of the biggest circle that fits inside it - computed by grid
// refinement over the actual path geometry, with the region's own holes and
// enclaves counted even-odd. It is deliberately NOT a bounding-box centre: a
// bbox centre falls in the Gulf of Mexico for Florida, in Lake Michigan for
// Michigan, in the Gulf of Mexico again for Louisiana, and in the middle of
// Hudson Bay for Canada. Counting the holes is what keeps Canada's anchor on
// land in northern Manitoba instead of out in the bay.
//
// Every one of the 63 anchors was then rendered and looked at. Where the
// algorithm picks the largest landmass and that is not the mainland, the
// choice was checked by eye and kept deliberately:
//   HI  -> the island of Hawaii (the largest), not the Oahu/Maui cluster
//   AK  -> the Alaskan mainland, not the panhandle
//   MI  -> the Lower Peninsula, not the Upper
//   NL  -> Labrador, which is larger than the island of Newfoundland
//   NU  -> the Kivalliq mainland west of Hudson Bay, not Baffin Island
//   BC  -> the mainland, not Vancouver Island
//
// `fit` is decided from geometry rather than guessed. For each region we find
// the widest horizontal text box of the label's own height that still fits
// entirely inside the shape at the anchor, and compare it with the width the
// text needs:
//   "name"  the full name fits on one line
//   "name2" it fits as two stacked lines ("North" / "Carolina")
//   "abbr"  only the two-letter code fits
//   "out"   nothing fits; the label is parked in the gutter on a leader line
// HI is the one hand override: the box test fails on the island's shape, but
// "HI" over an island ringed by open ocean reads fine, so it is forced to
// "abbr" rather than spending a leader line on it.
//
// ---------------------------------------------------------------------------
// CAPITAL COORDINATES
// ---------------------------------------------------------------------------
// Published latitude/longitude for all 63 capitals, pushed through a fit of
// each map's own projection, then checked:
//   US    36 reference points whose latitude and longitude are a matter of
//         statute rather than memory - the corners of Colorado, Wyoming, New
//         Mexico, Utah, Kansas, Nevada, the Oklahoma panhandle, the 49th
//         parallel, the Four Corners. Best fit rms 2.6 units on a 959-unit
//         map, i.e. about 12 km.
//   CA    Albers (standard parallels 44.6 and 77.9) fitted to 10 such points -
//         the 141st meridian, the 110th, the 60th parallel, the 49th, Point
//         Pelee, Cape Spear, Cape Columbia. Rms 6.2 units on a 1114-unit map.
//         The search compared Albers and Lambert conformal conic over a grid
//         of standard parallels; plain equirectangular is 18x worse, so the
//         source really is conic.
// Then the real check: EVERY dot was tested point-in-polygon against its own
// region's path, and any that landed in the water or within a hair of a
// border was pushed inland to the nearest interior point with real clearance.
// Nine needed it - Dover, Boston, Trenton and Providence, the coastal capitals
// of the four states too small to have an inland, plus Victoria, Halifax,
// Charlottetown, St John's and Iqaluit. Juneau and Honolulu are placed by
// hand: Alaska and Hawaii are insets drawn at their own scale and position, so
// the mainland fit cannot reach them.

/** A rendered map label: where it sits and what form it takes. */
export interface LabelPoint {
  x: number;
  y: number;
  /**
   * How much text the shape can hold at the label's own font size.
   * "out" labels are parked in the gutter and joined by a leader line.
   * "auto" defers the decision to render time, which is what a zoomable map
   * needs: the label shrinks in user units as you zoom, so a country that
   * cannot hold its name at world scale can hold it two gestures later.
   */
  fit: "name" | "name2" | "abbr" | "out" | "auto";
  /** Only for `fit: "out"` - where the parked label sits in the gutter. */
  out?: { x: number; y: number };
  /**
   * Only for `fit: "auto"` - the radius of the largest circle that fits inside
   * the region, in map units. The renderer compares it against the label's
   * width at the current zoom.
   */
  r?: number;
}

/** A capital city marker. */
export interface CapitalPoint {
  x: number;
  y: number;
  /** City name, revealed next to the star once the region is found. */
  name: string;
}

// ===========================================================================
// United States - 959 x 593 coordinate space (see us-map-paths.ts)
// ===========================================================================

/**
 * The base map is 959 wide. An earlier renderer grew the viewBox by a 127-unit
 * gutter so the six north-eastern states could park their names in a column;
 * that column shrank to 5px type on a phone, so "out" labels now become
 * numbered markers with an HTML callout list under the map instead. The
 * viewBox and `out` slots are kept for anything still reading them; RegionMap
 * ignores `out` and uses the anchor.
 */
export const US_LABEL_VIEWBOX = "0 0 1086 593";
/** Where a leader line ended and its parked label began (retired, see above). */
const US_GUTTER = 972;

export const US_LABEL_POINTS: Readonly<Record<string, LabelPoint>> = {
  AK: { x: 123.1, y: 488.1, fit: "name" },
  AL: { x: 651.9, y: 420.3, fit: "name" },
  AR: { x: 542.6, y: 370.6, fit: "name" },
  AZ: { x: 201.1, y: 350.2, fit: "name" },
  CA: { x: 80.1, y: 301.2, fit: "name" },
  CO: { x: 314.3, y: 273.5, fit: "name" },
  CT: { x: 861.2, y: 176.2, fit: "out", out: { x: US_GUTTER, y: 194 } },
  DE: { x: 829.1, y: 251.2, fit: "out", out: { x: US_GUTTER, y: 270 } },
  FL: { x: 758.2, y: 494.1, fit: "abbr" },
  GA: { x: 719.5, y: 418.0, fit: "name" },
  // Forced to the abbreviation: the box test fails on the island's outline,
  // but "HI" over open ocean reads perfectly well and costs no leader line.
  HI: { x: 325.1, y: 567.6, fit: "abbr" },
  IA: { x: 532.0, y: 213.6, fit: "name" },
  ID: { x: 183.0, y: 151.1, fit: "name" },
  IL: { x: 591.2, y: 251.9, fit: "name" },
  IN: { x: 645.5, y: 255.2, fit: "abbr" },
  KS: { x: 470.1, y: 292.9, fit: "name" },
  KY: { x: 679.5, y: 298.9, fit: "abbr" },
  LA: { x: 543.4, y: 436.5, fit: "abbr" },
  MA: { x: 859.2, y: 159.9, fit: "out", out: { x: US_GUTTER, y: 150 } },
  MD: { x: 800.4, y: 241.9, fit: "out", out: { x: US_GUTTER, y: 248 } },
  ME: { x: 892.2, y: 81.7, fit: "name" },
  MI: { x: 661.3, y: 186.3, fit: "abbr" },
  MN: { x: 503.4, y: 104.3, fit: "name" },
  MO: { x: 540.3, y: 300.1, fit: "name" },
  MS: { x: 595.7, y: 414.5, fit: "abbr" },
  MT: { x: 252.7, y: 87.0, fit: "name" },
  NC: { x: 793.7, y: 333.6, fit: "abbr" },
  ND: { x: 400.2, y: 92.7, fit: "name2" },
  NE: { x: 428.5, y: 225.4, fit: "name" },
  NH: { x: 865.2, y: 137.4, fit: "abbr" },
  NJ: { x: 834.8, y: 228.5, fit: "out", out: { x: US_GUTTER, y: 226 } },
  NM: { x: 299.5, y: 372.5, fit: "name" },
  NV: { x: 131.9, y: 225.4, fit: "name" },
  NY: { x: 817.6, y: 153.7, fit: "name2" },
  OH: { x: 696.6, y: 243.2, fit: "name" },
  OK: { x: 459.0, y: 360.4, fit: "name" },
  OR: { x: 107.7, y: 127.1, fit: "name" },
  PA: { x: 790.7, y: 209.6, fit: "abbr" },
  RI: { x: 875.0, y: 168.1, fit: "out", out: { x: US_GUTTER, y: 172 } },
  SC: { x: 761.4, y: 375.9, fit: "abbr" },
  SD: { x: 427.8, y: 159.7, fit: "name" },
  TN: { x: 656.9, y: 343.6, fit: "name" },
  TX: { x: 436.3, y: 456.8, fit: "name" },
  UT: { x: 217.5, y: 261.7, fit: "name" },
  VA: { x: 784.6, y: 284.4, fit: "abbr" },
  VT: { x: 844.1, y: 114.4, fit: "abbr" },
  WA: { x: 122.9, y: 49.9, fit: "abbr" },
  WI: { x: 575.5, y: 149.1, fit: "abbr" },
  WV: { x: 734.4, y: 279.3, fit: "abbr" },
  WY: { x: 291.6, y: 181.4, fit: "name" },
};

/**
 * Regions drawn at a few CSS pixels on a phone get an invisible finger-sized
 * hit target centred here (the label anchor, which is inside the shape by
 * construction). A tap inside the target that is nearer to another target's
 * centre goes to that one, so the cluster of Rhode Island, Connecticut and
 * Massachusetts stays tellable apart. Measured at 375px: RI 4x5.6, DE 5.3x8.8,
 * CT 8.7x8.5, NJ 6.7 wide, NH and VT 8.5 wide. MA, MD and HI join them
 * because their shapes are thin (MA), ragged (MD) or scattered (HI).
 */
export const US_HIT_POINTS: Readonly<Record<string, { x: number; y: number }>> = {
  RI: { x: 875.0, y: 168.1 },
  DE: { x: 829.1, y: 251.2 },
  CT: { x: 861.2, y: 176.2 },
  NJ: { x: 834.8, y: 228.5 },
  NH: { x: 865.2, y: 137.4 },
  VT: { x: 844.1, y: 114.4 },
  MA: { x: 859.2, y: 159.9 },
  MD: { x: 800.4, y: 241.9 },
  HI: { x: 325.1, y: 567.6 },
};

export const US_CAPITAL_POINTS: Readonly<Record<string, CapitalPoint>> = {
  AK: { x: 192.3, y: 555.3, name: "Juneau" },
  AL: { x: 653.1, y: 422.1, name: "Montgomery" },
  AR: { x: 543.2, y: 375.8, name: "Little Rock" },
  AZ: { x: 188.8, y: 382.9, name: "Phoenix" },
  CA: { x: 51.8, y: 235.7, name: "Sacramento" },
  CO: { x: 329.6, y: 257.7, name: "Denver" },
  CT: { x: 858.6, y: 175.7, name: "Hartford" },
  DE: { x: 823.5, y: 242.9, name: "Dover" },
  FL: { x: 693.6, y: 461.7, name: "Tallahassee" },
  GA: { x: 685.2, y: 387.6, name: "Atlanta" },
  HI: { x: 274.7, y: 529.0, name: "Honolulu" },
  IA: { x: 519.5, y: 222.7, name: "Des Moines" },
  ID: { x: 161.8, y: 145.6, name: "Boise" },
  IL: { x: 585.6, y: 260.0, name: "Springfield" },
  IN: { x: 644.0, y: 256.0, name: "Indianapolis" },
  KS: { x: 484.7, y: 280.0, name: "Topeka" },
  KY: { x: 668.3, y: 289.1, name: "Frankfort" },
  LA: { x: 565.1, y: 471.8, name: "Baton Rouge" },
  MA: { x: 882.6, y: 157.9, name: "Boston" },
  MD: { x: 807.3, y: 250.0, name: "Annapolis" },
  ME: { x: 892.6, y: 109.4, name: "Augusta" },
  MI: { x: 665.2, y: 187.4, name: "Lansing" },
  MN: { x: 527.4, y: 147.9, name: "Saint Paul" },
  MO: { x: 544.0, y: 289.4, name: "Jefferson City" },
  MS: { x: 582.4, y: 429.3, name: "Jackson" },
  MT: { x: 238.0, y: 93.0, name: "Helena" },
  NC: { x: 781.4, y: 327.7, name: "Raleigh" },
  ND: { x: 409.4, y: 106.1, name: "Bismarck" },
  NE: { x: 468.5, y: 240.6, name: "Lincoln" },
  NH: { x: 870.5, y: 140.0, name: "Concord" },
  NJ: { x: 833.4, y: 219.2, name: "Trenton" },
  NM: { x: 303.7, y: 347.0, name: "Santa Fe" },
  NV: { x: 83.3, y: 230.0, name: "Carson City" },
  NY: { x: 837.8, y: 160.2, name: "Albany" },
  OH: { x: 696.2, y: 245.7, name: "Columbus" },
  OK: { x: 451.0, y: 360.4, name: "Oklahoma City" },
  OR: { x: 63.8, y: 91.8, name: "Salem" },
  PA: { x: 796.4, y: 222.9, name: "Harrisburg" },
  RI: { x: 877.4, y: 169.7, name: "Providence" },
  SC: { x: 744.4, y: 374.1, name: "Columbia" },
  SD: { x: 412.9, y: 159.9, name: "Pierre" },
  TN: { x: 638.9, y: 337.7, name: "Nashville" },
  TX: { x: 442.8, y: 477.8, name: "Austin" },
  UT: { x: 218.9, y: 220.7, name: "Salt Lake City" },
  VA: { x: 796.4, y: 284.8, name: "Richmond" },
  VT: { x: 849.7, y: 121.2, name: "Montpelier" },
  WA: { x: 77.8, y: 47.9, name: "Olympia" },
  WI: { x: 586.9, y: 186.8, name: "Madison" },
  WV: { x: 722.9, y: 278.5, name: "Charleston" },
  WY: { x: 335.7, y: 226.7, name: "Cheyenne" },
};

// ===========================================================================
// Canada - 1114 x 942 coordinate space (see canada-map-paths.ts)
// ===========================================================================

/** 156 units of gutter for the two Maritime callouts (retired, see US_LABEL_VIEWBOX). */
export const CANADA_LABEL_VIEWBOX = "0 0 1270 942";
const CA_GUTTER = 1140;

export const CANADA_LABEL_POINTS: Readonly<Record<string, LabelPoint>> = {
  AB: { x: 242.0, y: 610.6, fit: "name" },
  BC: { x: 145.0, y: 519.1, fit: "name2" },
  MB: { x: 463.3, y: 636.9, fit: "name" },
  NB: { x: 922.2, y: 743.5, fit: "abbr" },
  NL: { x: 896.1, y: 569.5, fit: "abbr" },
  NS: { x: 958.5, y: 773.2, fit: "out", out: { x: CA_GUTTER, y: 812 } },
  NT: { x: 245.7, y: 399.5, fit: "name2" },
  NU: { x: 465.6, y: 427.9, fit: "name" },
  ON: { x: 583.1, y: 711.1, fit: "name" },
  PE: { x: 961.9, y: 721.9, fit: "out", out: { x: CA_GUTTER, y: 690 } },
  QC: { x: 789.3, y: 671.8, fit: "name" },
  SK: { x: 342.5, y: 707.6, fit: "name" },
  YT: { x: 112.0, y: 359.4, fit: "name" },
};

/** The Maritimes: Prince Edward Island is 8.9x4.4 CSS px at 375px. */
export const CANADA_HIT_POINTS: Readonly<Record<string, { x: number; y: number }>> = {
  PE: { x: 961.9, y: 721.9 },
  NS: { x: 958.5, y: 773.2 },
  NB: { x: 922.2, y: 743.5 },
};

export const CANADA_CAPITAL_POINTS: Readonly<Record<string, CapitalPoint>> = {
  AB: { x: 254.6, y: 648.4, name: "Edmonton" },
  BC: { x: 79.3, y: 698.3, name: "Victoria" },
  MB: { x: 460.4, y: 760.6, name: "Winnipeg" },
  NB: { x: 919.0, y: 761.8, name: "Fredericton" },
  NL: { x: 1085.1, y: 627.1, name: "St. John's" },
  NS: { x: 966.7, y: 770.3, name: "Halifax" },
  NT: { x: 303.9, y: 453.9, name: "Yellowknife" },
  NU: { x: 740.3, y: 406.2, name: "Iqaluit" },
  ON: { x: 741.9, y: 870.3, name: "Toronto" },
  PE: { x: 963.1, y: 723.7, name: "Charlottetown" },
  QC: { x: 846.5, y: 769.6, name: "Quebec City" },
  SK: { x: 356.4, y: 739.4, name: "Regina" },
  YT: { x: 95.8, y: 402.1, name: "Whitehorse" },
};
