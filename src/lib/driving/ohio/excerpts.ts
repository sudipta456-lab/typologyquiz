import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the Ohio Driver Manual - the publication the BMV
// still calls the Digest of Ohio Motor Vehicle Laws, form HSY 7607, revision
// 10/25 - plus the Ohio BMV's own Driver License & ID Cards page and three
// sections of the Ohio Revised Code for rules the manual states only as a
// figure in an image or does not state at all.
//
// Every `quote` below was located mechanically in the official source and
// checked as an exact substring before it was written here. Nothing is
// paraphrased. Three mechanical normalisations were applied to the extracted
// text, and to nothing else: curly quotes, en dashes and em dashes are folded
// to ASCII; a word split by a line break is rejoined; and the bullet glyph the
// PDF uses does not survive text extraction, so where the manual states a rule
// as a stem followed by a bulleted list the items are run together in the order
// they appear - no words are changed, dropped or reordered. Manual typographic
// errors ("highwayrailroad", "doubleyellow", "sixmonth") are preserved exactly
// as they stand, because a quote that has been tidied up is no longer a quote.
//
// The speed-limit table on page 9 renders its numbers as sign graphics with no
// text layer, so there is no verbatim wording for the figures themselves. Those
// questions are wired to the assured-clear-distance rule instead rather than to
// an invented quote.

const MAN = "Ohio Driver Manual / Digest of Ohio Motor Vehicle Laws (HSY 7607, rev. 10/25)";
const MAN_URL = "https://dam.assets.ohio.gov/image/upload/publicsafety.ohio.gov/hsy7607.pdf";
const BMV = "Ohio BMV - Driver License & ID Cards";
const BMV_URL = "https://www.bmv.ohio.gov/dl-gdl.aspx";
const ORC = "Ohio Revised Code (Ohio Laws)";
const ORC_4510_02 = "https://codes.ohio.gov/ohio-revised-code/section-4510.02";
const ORC_4510_037 = "https://codes.ohio.gov/ohio-revised-code/section-4510.037";
const ORC_4511_213 = "https://codes.ohio.gov/ohio-revised-code/section-4511.213";

export const ohioExcerpts: HandbookExcerpt[] = [
  // --- Signs ------------------------------------------------------------
  {
    key: "sign-shape-color",
    quote:
      "The shape, color, symbols, and instruction of these signs give clues to the type of information they provide.",
    source: MAN,
    section: "Section 4: Rules of the Road - Traffic Signs",
    url: MAN_URL,
  },
  {
    key: "regulatory-signs",
    quote: "These signs give notice to travelers of traffic laws or regulations.",
    source: MAN,
    section: "Section 4: Rules of the Road - Regulatory Signs",
    url: MAN_URL,
  },
  {
    key: "prohibitory-signs",
    quote:
      "Whenever this symbol appears on a sign, the illustrated action is prohibited.",
    source: MAN,
    section: "Section 4: Rules of the Road - Prohibitory Signs",
    url: MAN_URL,
  },
  {
    key: "warning-signs-shape",
    quote:
      "The signs are usually yellow with black lettering or symbols and are diamond shaped.",
    source: MAN,
    section: "Section 4: Rules of the Road - Warning Signs",
    url: MAN_URL,
  },
  {
    key: "work-zone-sign-color",
    quote: "Work Zone signs have an orange background and black letters or symbols.",
    source: MAN,
    section: "Section 7: Special Driving Situations - Work Zones",
    url: MAN_URL,
  },
  {
    key: "guide-signs-shape",
    quote:
      "These signs provide points of interest and services along the highway, information on intersecting roads, and help direct drivers to cities and towns.",
    source: MAN,
    section: "Section 4: Rules of the Road - Guide Signs",
    url: MAN_URL,
  },
  {
    key: "guide-signs-services",
    quote:
      "Guide signs can help you find hospitals, gas stations or service stations, restaurants, and hotels.",
    source: MAN,
    section: "Section 4: Rules of the Road - Guide Signs",
    url: MAN_URL,
  },
  {
    key: "stop-sign-caption",
    quote: "ALL TRAFFIC IN THIS LANE MUST STOP BEFORE PROCEEDING",
    source: MAN,
    section: "Section 4: Rules of the Road - Regulatory Signs (stop sign caption)",
    url: MAN_URL,
  },
  {
    key: "yield-sign-caption",
    quote: "STOP ONLY IF OTHER TRAFFIC IS AFFECTED; YIELD TO ALL ONCOMING TRAFFIC",
    source: MAN,
    section: "Section 4: Rules of the Road - Regulatory Signs (yield sign caption)",
    url: MAN_URL,
  },
  {
    key: "school-zone-sign-caption",
    quote: "OBSERVE POSTED SPEED LIMIT IN SCHOOL ZONE DURING RESTRICTED HOURS",
    source: MAN,
    section: "Section 4: Rules of the Road - Regulatory Signs (school zone sign caption)",
    url: MAN_URL,
  },
  {
    key: "one-lane-bridge-sign",
    quote: "VEHICLE NEAREST THE BRIDGE HAS THE RIGHT OF WAY",
    source: MAN,
    section: "Section 4: Rules of the Road - Warning Signs (one lane bridge caption)",
    url: MAN_URL,
  },
  {
    key: "railroad-crossing-sign",
    quote:
      "A round, yellow warning sign with an \"X\" symbol and \"RR\" letters, or a white, X-shaped (crossbuck) sign with the text \"Railroad Crossing\" indicates a highwayrailroad grade crossing.",
    source: MAN,
    section: "Section 5: Learning to Drive - Railroad Crossings",
    url: MAN_URL,
  },
  {
    key: "slow-moving-emblem",
    quote:
      "A fluorescent or reflective orange and red triangle displayed on the rear of vehicles drawn by animals, farm equipment, or construction equipment means the vehicle is traveling less than 25 mph.",
    source: MAN,
    section: "Section 9: Sharing the Road - Slow Moving Vehicles",
    url: MAN_URL,
  },
  {
    key: "farm-machinery-emblem",
    quote:
      "Farm machinery must display the slow-moving emblem, and use a red flashing light at night.",
    source: MAN,
    section: "Section 9: Sharing the Road - Farm Machinery",
    url: MAN_URL,
  },
  {
    key: "animal-drawn-signs",
    quote:
      "Warning signs will be posted in areas where you are likely to find animaldrawn vehicles and horseback riders, so be alert.",
    source: MAN,
    section: "Section 9: Sharing the Road - Animal-Drawn Vehicles and Horseback Riders",
    url: MAN_URL,
  },
  // --- Signals ----------------------------------------------------------
  {
    key: "signal-red",
    quote:
      "A red traffic light means stop before entering the intersection. You must wait behind the stop line, crosswalk, or intersection until the traffic light turns green.",
    source: MAN,
    section: "Section 4: Rules of the Road - Traffic Signals",
    url: MAN_URL,
  },
  {
    key: "signal-yellow",
    quote:
      "A yellow traffic light indicates the color is about to change to red; use caution.",
    source: MAN,
    section: "Section 4: Rules of the Road - Traffic Signals",
    url: MAN_URL,
  },
  {
    key: "signal-green",
    quote:
      "A green traffic light means you may travel with caution through the intersection if it is clear to do so.",
    source: MAN,
    section: "Section 4: Rules of the Road - Traffic Signals",
    url: MAN_URL,
  },
  {
    key: "signal-green-arrow",
    quote:
      "A light marked with a green arrow indicates you can turn in the direction of the arrow without stopping.",
    source: MAN,
    section: "Section 4: Rules of the Road - Traffic Signals",
    url: MAN_URL,
  },
  {
    key: "signal-flashing-yellow",
    quote:
      "Slow down and proceed with caution. Be prepared to stop for any traffic flow that may be entering the intersection.",
    source: MAN,
    section: "Section 4: Rules of the Road - Traffic Signals (flashing yellow)",
    url: MAN_URL,
  },
  {
    key: "signal-flashing-red",
    quote:
      "Stop behind a stop line, crosswalk, or intersection before entering and come to a complete stop. Be sure no traffic is traveling across your path of travel before entering the intersection.",
    source: MAN,
    section: "Section 4: Rules of the Road - Traffic Signals (flashing red)",
    url: MAN_URL,
  },
  {
    key: "signal-inoperable",
    quote:
      "Inoperable traffic lights are treated the same as a stop sign. Yield the right-of-way and use caution while entering the intersection.",
    source: MAN,
    section: "Section 4: Rules of the Road - Traffic Signals (inoperable)",
    url: MAN_URL,
  },
  {
    key: "signal-outage-four-way",
    quote:
      "By law, except when a law enforcement officer is present to direct traffic, drivers must treat the non-working traffic signal as a four-way stop.",
    source: MAN,
    section: "Section 10: Emergency Situations - Inoperable Traffic Signals",
    url: MAN_URL,
  },
  {
    key: "signal-single-lights",
    quote:
      "Some locations may have single green, yellow, or red lights; or the traffic lights may be horizontal instead of vertical.",
    source: MAN,
    section: "Section 4: Rules of the Road - Traffic Signals",
    url: MAN_URL,
  },
  // --- Pavement markings ------------------------------------------------
  {
    key: "markings-white",
    quote: "WHITE LINES: Separates traffic traveling in the same direction.",
    source: MAN,
    section: "Section 4: Rules of the Road - Lane Pavement Markings",
    url: MAN_URL,
  },
  {
    key: "markings-yellow-solid",
    quote: "YELLOW SOLID LINE: Separates traffic traveling in opposite directions.",
    source: MAN,
    section: "Section 4: Rules of the Road - Lane Pavement Markings",
    url: MAN_URL,
  },
  {
    key: "markings-double-yellow",
    quote:
      "YELLOW SOLID DOUBLE LINE: Do not drive to the left of the center line, unless you must cross the lines to turn left or pass a slow-moving vehicle (e.g., bicycle or vehicle displaying a slowmoving vehicle sign).",
    source: MAN,
    section: "Section 4: Rules of the Road - Lane Pavement Markings",
    url: MAN_URL,
  },
  {
    key: "two-way-left-turn-lane",
    quote:
      "A two-way left turn lane is marked with a broken yellow line and a solid yellow line on each side of the lane.",
    source: MAN,
    section: "Section 4: Rules of the Road - Two-Way Left Turn Only Lane",
    url: MAN_URL,
  },
  {
    key: "two-way-left-turn-use",
    quote:
      "Vehicles from either direction may use the center lane immediately prior to making a left turn. This is not a lane used for traveling or passing.",
    source: MAN,
    section: "Section 4: Rules of the Road - Two-Way Left Turn Only Lane",
    url: MAN_URL,
  },
  {
    key: "two-way-left-turn-not-passing",
    quote: "This lane is not used for passing, merging into traffic, or traveling.",
    source: MAN,
    section: "Section 5: Learning to Drive - Center Two-Way Left Turn Lane",
    url: MAN_URL,
  },
  {
    key: "crosswalk-yield",
    quote: "You must yield the right-of-way to pedestrians entering or in a crosswalk.",
    source: MAN,
    section: "Section 4: Rules of the Road - Crosswalks",
    url: MAN_URL,
  },
  // --- Right of way -----------------------------------------------------
  {
    key: "row-arrives-first",
    quote: "The driver who is at or arrives before you at an intersection.",
    source: MAN,
    section: "Section 4: Rules of the Road - Right-of-Way",
    url: MAN_URL,
  },
  {
    key: "row-driver-on-right",
    quote:
      "The driver on your right at a four-way intersection if both of you arrive at the intersection at the same time.",
    source: MAN,
    section: "Section 4: Rules of the Road - Right-of-Way",
    url: MAN_URL,
  },
  {
    key: "row-driveway",
    quote:
      "Drivers on a public highway if you are entering the highway from a driveway or a private road.",
    source: MAN,
    section: "Section 4: Rules of the Road - Right-of-Way",
    url: MAN_URL,
  },
  {
    key: "row-entrance-ramp",
    quote:
      "Drivers already on a limited access or interstate highway if you are on the entrance or acceleration ramp.",
    source: MAN,
    section: "Section 4: Rules of the Road - Right-of-Way",
    url: MAN_URL,
  },
  {
    key: "row-funeral",
    quote: "Public safety vehicles (emergency, police, fire). Funeral processions.",
    source: MAN,
    section: "Section 4: Rules of the Road - Right-of-Way",
    url: MAN_URL,
  },
  {
    key: "row-definition",
    quote:
      "Right-of-way describes the priority of traffic flow, meaning a pedestrian or vehicle, has the right to proceed with precedence over others in a particular situation or place.",
    source: MAN,
    section: "Section 4: Rules of the Road - Right-of-Way",
    url: MAN_URL,
  },
  {
    key: "stop-sidewalk-driveway",
    quote:
      "At a sidewalk, or if there is no sidewalk, at a point prior to entering the roadway, when emerging from an alley, driveway, or private road in a business or residential district. Drivers must yield the right-of-way to any pedestrian on the sidewalk.",
    source: MAN,
    section: "Section 5: Learning to Drive - A driver must stop",
    url: MAN_URL,
  },
  {
    key: "stop-blocking-intersection",
    quote:
      "Before entering an intersection if there is not sufficient space on the other side to accommodate the vehicle. The law applies whether or not a traffic signal gives a driver the right to proceed.",
    source: MAN,
    section: "Section 5: Learning to Drive - A driver must stop",
    url: MAN_URL,
  },
  {
    key: "green-light-pause",
    quote:
      "Do not rely on other road users to obey traffic signals or signs, as they may not yield the right-of-way.",
    source: MAN,
    section: "Section 5: Learning to Drive - Tips",
    url: MAN_URL,
  },
  {
    key: "do-not-block-intersection",
    quote: "Do not move into the intersection and stop.",
    source: MAN,
    section: "Section 5: Learning to Drive - Tips",
    url: MAN_URL,
  },
  {
    key: "edge-forward",
    quote:
      "When stopped at a stop sign where you cannot see crossing traffic, edge forward to check for traffic before entering the intersection.",
    source: MAN,
    section: "Section 5: Learning to Drive - Tips",
    url: MAN_URL,
  },
  // --- Turning and lanes ------------------------------------------------
  {
    key: "right-turn-on-red",
    quote:
      "Right Turn on Red-- You may turn right at a red traffic signal, unless a sign specifically prohibits it.",
    source: MAN,
    section: "Section 5: Learning to Drive - Turning on a Red Traffic Signal",
    url: MAN_URL,
  },
  {
    key: "left-turn-on-red",
    quote:
      "Left Turn on Red-- You may turn left at a red traffic signal, only from the extreme left lane of a one-way street onto another one-way street, unless the intersection has a sign posted forbidding a left turn on red.",
    source: MAN,
    section: "Section 5: Learning to Drive - Turning on a Red Traffic Signal",
    url: MAN_URL,
  },
  {
    key: "turn-signal-100-feet",
    quote: "A turn signal must be given at least 100 feet before the intended turn.",
    source: MAN,
    section: "Section 5: Learning to Drive - Turn Signal",
    url: MAN_URL,
  },
  {
    key: "turn-signal-100-feet-alt",
    quote: "Activate a turn signal at least 100 feet prior to changing direction.",
    source: MAN,
    section: "Section 2: Before You Drive - Know When to Use Your Lights",
    url: MAN_URL,
  },
  {
    key: "right-turn-position",
    quote:
      "Always turn right from the right-most portion of your lane into the right- most portion of the street you're turning onto.",
    source: MAN,
    section: "Section 5: Learning to Drive - Right Turns",
    url: MAN_URL,
  },
  {
    key: "left-turn-waiting",
    quote:
      "When turning left at a green traffic signal, do not proceed into the intersection until there is an opportunity to turn.",
    source: MAN,
    section: "Section 5: Learning to Drive - Left Turns",
    url: MAN_URL,
  },
  {
    key: "lane-travel-right-half",
    quote:
      "Drive on the right half of the roadway except when: Overtaking and passing another vehicle proceeding in the same direction.",
    source: MAN,
    section: "Section 5: Learning to Drive - Lane Travel",
    url: MAN_URL,
  },
  {
    key: "lane-travel-four-lanes",
    quote:
      "When driving on a road with four or more lanes, drive in the right lane. Use the lane just right of center to pass and make left turns.",
    source: MAN,
    section: "Section 5: Learning to Drive - Lane Travel",
    url: MAN_URL,
  },
  {
    key: "changing-lanes-blind-spot",
    quote:
      "Check your mirrors and \"blind spots\" or areas around your vehicle that cannot be seen while using the rear-view or side-view mirrors, by turning your head and looking over your shoulder in the direction you plan to move.",
    source: MAN,
    section: "Section 5: Learning to Drive - Changing Lanes",
    url: MAN_URL,
  },
  {
    key: "exiting-missed-exit",
    quote:
      "If you miss your exit, take the next one. Do not use the opening through the median, which is for use only by emergency and public safety vehicles.",
    source: MAN,
    section: "Section 5: Learning to Drive - Exiting a Roadway",
    url: MAN_URL,
  },
  {
    key: "roundabout-yield",
    quote:
      "Yield to the traffic already in the roundabout or traffic circle. Look to the left for traffic and enter when the lane is clear.",
    source: MAN,
    section: "Section 5: Learning to Drive - Roundabouts or Traffic Circles",
    url: MAN_URL,
  },
  {
    key: "roundabout-no-lane-change",
    quote: "You cannot change lanes once you are in the roundabout.",
    source: MAN,
    section: "Section 5: Learning to Drive - Roundabouts or Traffic Circles",
    url: MAN_URL,
  },
  // --- Passing ----------------------------------------------------------
  {
    key: "passing-never-shoulder",
    quote: "Never pass on the shoulder, whether it is paved or not.",
    source: MAN,
    section: "Section 5: Learning to Drive - Multi-Lane, Two-way Roadway",
    url: MAN_URL,
  },
  {
    key: "passing-solid-in-your-lane",
    quote:
      "Passing is prohibited when the solid yellow line is in your lane. You can only pass when the broken yellow line is in your lane.",
    source: MAN,
    section: "Section 5: Learning to Drive - Passing Zone",
    url: MAN_URL,
  },
  {
    key: "passing-do-not-when",
    quote:
      "Do not attempt to pass when: An oncoming vehicle is approaching. Your view is blocked by a curve or a hill. At intersections. Before a highway-railroad crossing or bridge.",
    source: MAN,
    section: "Section 5: Learning to Drive - Passing",
    url: MAN_URL,
  },
  {
    key: "passing-return-to-lane",
    quote:
      "Continue to pass until both headlights of the passed vehicle are visible in the rear-view mirror.",
    source: MAN,
    section: "Section 5: Learning to Drive - Passing",
    url: MAN_URL,
  },
  {
    key: "slow-vehicle-pass-half-limit",
    quote:
      "You are permitted to cross a solid yellow line to pass a slow-moving vehicle as long as the vehicle is traveling less than half the posted speed limit, you do not exceed the speed limit while passing, and there is sufficient clear space in the oncoming lane in which to pass.",
    source: MAN,
    section: "Section 9: Sharing the Road - Slow Moving Vehicles",
    url: MAN_URL,
  },
  // --- Railroad and school bus -----------------------------------------
  {
    key: "railroad-stop-distance",
    quote:
      "Stop no closer than 15 feet and no farther than 50 feet from the crossing when a train is approaching.",
    source: MAN,
    section: "Section 5: Learning to Drive - Railroad Crossings",
    url: MAN_URL,
  },
  {
    key: "railroad-crossbuck-only",
    quote:
      "When the crossing is marked with only pavement markings or crossbuck signs, slow down and be prepared to stop if you see or hear a train approaching.",
    source: MAN,
    section: "Section 5: Learning to Drive - Railroad Crossings",
    url: MAN_URL,
  },
  {
    key: "railroad-must-stop-vehicles",
    quote:
      "Operators of motor vehicles carrying passengers for hire, school buses, or vehicles carrying explosives or flammable liquids, are required to stop at railroad crossings.",
    source: MAN,
    section: "Section 5: Learning to Drive - Railroad Crossings",
    url: MAN_URL,
  },
  {
    key: "school-bus-fewer-than-four",
    quote:
      "If the bus is stopped on a street or road with fewer than four lanes, all traffic approaching the bus from either direction must stop at least 10 feet from the front or rear of the bus and remain stopped until the bus begins to move or the bus driver signals motorists to proceed.",
    source: MAN,
    section: "Section 5: Learning to Drive - Stopping for a School Bus",
    url: MAN_URL,
  },
  {
    key: "school-bus-four-or-more",
    quote:
      "If the bus is stopped on a street or road with four or more lanes, only traffic proceeding in the same direction as the bus must stop at the rear of the bus and remain stopped until the bus begins to move.",
    source: MAN,
    section: "Section 5: Learning to Drive - Stopping for a School Bus",
    url: MAN_URL,
  },
  // --- Speed ------------------------------------------------------------
  {
    key: "speed-reasonable",
    quote:
      "Speed limits are considered reasonable speeds based on the road's design, the expected traffic volume, and dry weather without fog or other issues further affecting visibility.",
    source: MAN,
    section: "Section 4: Rules of the Road - Speed Limits",
    url: MAN_URL,
  },
  {
    key: "speed-less-than-ideal",
    quote:
      "In less-than-ideal conditions (e.g., inclement weather, bad road conditions, or high traffic volumes), a reasonable speed may be slower than the posted speed limit.",
    source: MAN,
    section: "Section 4: Rules of the Road - Speed Limits",
    url: MAN_URL,
  },
  {
    key: "assured-clear-distance",
    quote:
      "A reasonable speed is necessary for a driver to maintain control of the vehicle and to bring it to a stop within an assured clear distance ahead.",
    source: MAN,
    section: "Section 4: Rules of the Road - Speed Limits",
    url: MAN_URL,
  },
  {
    key: "speed-stop-in-distance",
    quote:
      "Regardless of the posted speed limit, Ohio law prohibits a person from driving at a speed greater than what allows the driver to stop in the distance available.",
    source: MAN,
    section: "Section 4: Rules of the Road - Speed Limits",
    url: MAN_URL,
  },
  {
    key: "speed-by-road-type",
    quote:
      "Generally, speed limits are based on the type of road (two-lane, divided highways, etc.), and the road's location as described in the examples below.",
    source: MAN,
    section: "Section 4: Rules of the Road - Speed Limits",
    url: MAN_URL,
  },
  {
    key: "school-zone-slower-limit",
    quote:
      "School Zones - When lights are flashing or children are present, you must obey a slower speed limit. Obey Crossing Guards at intersections near a school.",
    source: MAN,
    section: "Section 9: Sharing the Road - Pedestrians",
    url: MAN_URL,
  },
  {
    key: "work-zone-reduce-speed",
    quote: "Always reduce your speed in a Work Zone, even if there are no workers.",
    source: MAN,
    section: "Section 7: Special Driving Situations - Work Zones",
    url: MAN_URL,
  },
  {
    key: "work-zone-flagger",
    quote:
      "In Work Zones, traffic may be controlled by a person with a sign or flag directing traffic. You must follow their instructions.",
    source: MAN,
    section: "Section 4: Rules of the Road - Work Zone Signs",
    url: MAN_URL,
  },
  // --- Space, following distance, safe driving --------------------------
  {
    key: "following-distance-four-seconds",
    quote:
      "Always try to keep a minimum following distance of one vehicle length for every 10 miles per hour of travel, or four seconds between your vehicle and the vehicle ahead.",
    source: MAN,
    section: "Section 8: Safe Driving Tips - Space to the Front",
    url: MAN_URL,
  },
  {
    key: "following-distance-increase",
    quote:
      "Increase your following distance when: Visibility is lessened or limited by the weather (fog, rain, snow, etc.), or at night. On slippery roads. Following large vehicles such as trucks, buses, recreational vehicles, and vehicles pulling a trailer.",
    source: MAN,
    section: "Section 8: Safe Driving Tips - Space to the Front",
    url: MAN_URL,
  },
  {
    key: "braking-distance-158",
    quote:
      "At 50 mph on dry pavement with good brakes, it can take about 158 feet to stop.",
    source: MAN,
    section: "Section 8: Safe Driving Tips - Braking Distance",
    url: MAN_URL,
  },
  {
    key: "look-ahead-20-30",
    quote: "Ideally, try to look at what is occurring 20 to 30 seconds in front of your car.",
    source: MAN,
    section: "Section 8: Safe Driving Tips - Look Ahead",
    url: MAN_URL,
  },
  {
    key: "space-to-side",
    quote:
      "Avoid driving next to other vehicles for long periods of time. You may be in the driver's blind spot, and it reduces the space you may need to avoid a crash.",
    source: MAN,
    section: "Section 8: Safe Driving Tips - Space to the Side",
    url: MAN_URL,
  },
  {
    key: "horn-use",
    quote:
      "Not Using Your Horn--Only use your horn when you need to communicate with other road users.",
    source: MAN,
    section: "Section 8: Safe Driving Tips - Communicating",
    url: MAN_URL,
  },
  {
    key: "curves-reduce-speed",
    quote:
      "Curves -- Before entering a curve, reduce speed to a safe speed that allows you to apply slight and constant acceleration through the curve.",
    source: MAN,
    section: "Section 8: Safe Driving Tips - Speed Management",
    url: MAN_URL,
  },
  {
    key: "hydroplaning",
    quote:
      "Hydroplaning -- Hydroplaning occurs when the steering tires start to ride on top of pooled water, similar to the action of water skis.",
    source: MAN,
    section: "Section 8: Safe Driving Tips - Hydroplaning",
    url: MAN_URL,
  },
  {
    key: "winter-skid",
    quote:
      "If your vehicle starts to skid, take your foot off the accelerator and turn the steering wheel in the direction of the skid. Never apply brakes while skidding.",
    source: MAN,
    section: "Section 7: Special Driving Situations - Winter Driving",
    url: MAN_URL,
  },
  {
    key: "fog-low-beams",
    quote:
      "Use low beam headlights (not high beam lights) and keep scanning the area for any potential hazards.",
    source: MAN,
    section: "Section 7: Special Driving Situations - Driving in Fog",
    url: MAN_URL,
  },
  {
    key: "headlights-1000-feet",
    quote:
      "At any other time when natural light conditions do not make it possible to clearly see objects 1,000 feet ahead. Any time windshield wipers are in use because of precipitation.",
    source: MAN,
    section: "Section 7: Special Driving Situations - When to Use Headlights",
    url: MAN_URL,
  },
  {
    key: "headlights-wipers",
    quote:
      "Ohio law requires headlights to be on sunset to sunrise, at any time visibility is poor (rain, snow, fog, etc.), and any time the windshield wipers are in use because of precipitation.",
    source: MAN,
    section: "Section 2: Before You Drive - Know When to Use Your Lights",
    url: MAN_URL,
  },
  // --- Sharing the road -------------------------------------------------
  {
    key: "pedestrian-white-cane",
    quote:
      "Pedestrians who are visually impaired or blind (carrying a white cane or using a guide dog) have the right-of-way.",
    source: MAN,
    section: "Section 9: Sharing the Road - Pedestrians",
    url: MAN_URL,
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "Allow a motorcyclist a full lane width; space is needed for the motorcyclist to react to other traffic.",
    source: MAN,
    section: "Section 9: Sharing the Road - Motorcyclists",
    url: MAN_URL,
  },
  {
    key: "motorcycle-signal",
    quote:
      "Do not assume a motorcycle is turning when you see its turn signal flashing. Motorcycle turn signals may not self-cancel, and the motorcyclist may have forgotten to turn them off.",
    source: MAN,
    section: "Section 9: Sharing the Road - Motorcyclists",
    url: MAN_URL,
  },
  {
    key: "motorcycle-following",
    quote:
      "When following a motorcyclist, allow for a minimum 4-second following distance or more in wet conditions, or you may not have enough time or space to avoid a crash.",
    source: MAN,
    section: "Section 9: Sharing the Road - Motorcyclists",
    url: MAN_URL,
  },
  {
    key: "bicycle-is-vehicle",
    quote:
      "Bicycles are considered vehicles when on roadways and must ride with, not against, other vehicular traffic.",
    source: MAN,
    section: "Section 9: Sharing the Road - Bicyclists",
    url: MAN_URL,
  },
  {
    key: "bicycle-three-feet",
    quote:
      "Maintain a safety zone of at least three feet between a motor vehicle and a bicycle.",
    source: MAN,
    section: "Section 9: Sharing the Road - Bicyclists",
    url: MAN_URL,
  },
  {
    key: "bicycle-horn",
    quote:
      "Slow down when approaching or passing a bicyclist. Avoid sounding your horn close to a bicyclist.",
    source: MAN,
    section: "Section 9: Sharing the Road - Bicyclists",
    url: MAN_URL,
  },
  {
    key: "bicycle-rules",
    quote:
      "Bicyclists are required and expected to: Obey all traffic signs, signals, and pavement markings. Follow the same rules of the road as motorized vehicles.",
    source: MAN,
    section: "Section 9: Sharing the Road - Bicyclists",
    url: MAN_URL,
  },
  {
    key: "truck-wide-right-turn",
    quote:
      "Trucks or buses may make a wide right turn from the left lane to clear the corner of a curb or other obstruction. Do not squeeze between the large vehicle and the curb, as it will cause a serious crash.",
    source: MAN,
    section: "Section 9: Sharing the Road - Commercial Vehicles",
    url: MAN_URL,
  },
  {
    key: "truck-rear-no-zone",
    quote:
      "Rear No Zones-- Unlike passenger vehicles, large vehicles have huge blind spots directly behind them that extend up to 200 feet.",
    source: MAN,
    section: "Section 9: Sharing the Road - Rear No Zones",
    url: MAN_URL,
  },
  {
    key: "truck-avoid-right-lane-hills",
    quote:
      "Avoid the right lanes when traveling up or down steep hills behind a large vehicle or near truck weigh stations where large vehicles may be attempting to re-enter faster moving traffic.",
    source: MAN,
    section: "Section 9: Sharing the Road - Rear No Zones",
    url: MAN_URL,
  },
  {
    key: "truck-stopping-335",
    quote:
      "A loaded truck with good tires and properly adjusted brakes, under ideal conditions, traveling at 55 mph requires a minimum of 335 feet before coming to a complete stop, or greater than 1",
    source: MAN,
    section: "Section 9: Sharing the Road - Front No Zones",
    url: MAN_URL,
  },
  {
    key: "truck-left-turn-judgement",
    quote:
      "When in doubt about the speed of an oncoming truck or bus, do not turn left in its path.",
    source: MAN,
    section: "Section 9: Sharing the Road - Commercial Vehicles",
    url: MAN_URL,
  },
  {
    key: "emergency-vehicle-pull-right",
    quote:
      "When emergency vehicles displaying flashing lights and audible sirens and/or signals are approaching through traffic, the driver must quickly -- and safely -- pull to the right side of the road and stop.",
    source: MAN,
    section: "Section 9: Sharing the Road - Emergency Vehicles",
    url: MAN_URL,
  },
  {
    key: "emergency-vehicle-divided",
    quote:
      "At the approach of a public safety vehicle (such as a police car, fire engine, or ambulance) displaying flashing lights and sounding a warning signal, unless the vehicle is traveling in the opposite direction on a divided highway.",
    source: MAN,
    section: "Section 5: Learning to Drive - A driver must stop",
    url: MAN_URL,
  },
  {
    key: "move-over-law",
    quote:
      "Ohio law requires all drivers to move to an adjacent lane and/or slow down when approaching a stopped police vehicle, other emergency vehicle (like a fire truck), road service vehicle (such as a tow truck or snowplow), waste collection vehicle, highway maintenance vehicle, or public utility commission vehicle when these vehicles have their warning lights activated.",
    source: MAN,
    section: "Section 9: Sharing the Road - Move Over Laws",
    url: MAN_URL,
  },
  {
    key: "move-over-cannot-change",
    quote:
      "If a lane change is unsafe, slow down and proceed with caution while maintaining a safe speed for traffic conditions.",
    source: MAN,
    section: "Section 9: Sharing the Road - Move Over Laws",
    url: MAN_URL,
  },
  {
    key: "move-over-statute",
    quote:
      "the driver shall proceed with due caution and, if possible and with due regard to the road, weather, and traffic conditions, shall change lanes into a lane that is not adjacent to that of the stationary public safety vehicle",
    source: ORC,
    section: "ORC 4511.213(A)(1) - Approaching a stationary public safety vehicle",
    url: ORC_4511_213,
  },
  // --- Parking ----------------------------------------------------------
  {
    key: "parking-direction-12-inches",
    quote:
      "Vehicles must be parked facing the direction of traffic on that side of the street, parallel to and not more than 12 inches from the right curb.",
    source: MAN,
    section: "Section 5: Learning to Drive - Parking",
    url: MAN_URL,
  },
  {
    key: "parking-one-way",
    quote:
      "On one-way streets, vehicles may be parked parallel to and not more than 12 inches from the right or left curb.",
    source: MAN,
    section: "Section 5: Learning to Drive - Parking",
    url: MAN_URL,
  },
  {
    key: "parking-prohibited-places",
    quote:
      "On a sidewalk; In front of a public or private driveway; In or within 20 feet of an intersection or crosswalk; Within 10 feet of a fire hydrant; Within one foot of another parked vehicle;",
    source: MAN,
    section: "Section 5: Learning to Drive - Stopping, Parking, or Standing Prohibited (ORC 4511.68)",
    url: MAN_URL,
  },
  {
    key: "parking-prohibited-stem",
    quote:
      "No person shall stop, park, or stand a vehicle in any of the following places, except when necessary to avoid conflict with other traffic, or in compliance with the directions of a law enforcement officer or traffic control device:",
    source: MAN,
    section: "Section 5: Learning to Drive - Stopping, Parking, or Standing Prohibited (ORC 4511.68)",
    url: MAN_URL,
  },
  {
    key: "parking-hill",
    quote:
      "In the event you must park your vehicle on a hill or graded surface, turn the front wheels toward the curb-side of the road to stabilize the vehicle, shift from \"DRIVE\" gear to \"PARK\" gear, set the parking brake, and turn the engine off.",
    source: MAN,
    section: "Section 5: Learning to Drive - Parking on a Hill or Grade",
    url: MAN_URL,
  },
  {
    key: "parking-disability",
    quote:
      "Do not park in spaces marked by a wheelchair symbol reserved for people with disabilities, unless you have been issued a disability placard or disability license plate.",
    source: MAN,
    section: "Section 5: Learning to Drive - No-Parking Zones / Handicapped Spaces",
    url: MAN_URL,
  },
  {
    key: "parking-bicycle-sidewalk",
    quote:
      "A bicycle, electric bicycle, moped, motor scooter (150 cc or less), or micro-mobility device may be parked on the sidewalk provided it does not impede the normal flow of pedestrian traffic.",
    source: MAN,
    section: "Section 5: Learning to Drive - Stopping, Parking, or Standing Prohibited",
    url: MAN_URL,
  },
  // --- Impairment -------------------------------------------------------
  {
    key: "bac-limits",
    quote:
      "In Ohio, the legal drinking age is 21 years or older and it is against the law to operate a motor vehicle with a blood-alcohol concentration (BAC) of: .08% or higher at any age .04% or higher for commercial drivers .02% or higher when under the age 21",
    source: MAN,
    section: "Section 6: State Laws and Penalties - Alcohol and the Law",
    url: MAN_URL,
  },
  {
    key: "als-refusal-acquittal",
    quote:
      "The suspension will stand even if the individual is ultimately acquitted of the OVI (operating a vehicle while impaired) charge.",
    source: MAN,
    section: "Section 6: State Laws and Penalties - ALS Test Refusal",
    url: MAN_URL,
  },
  {
    key: "als-first-over-limit",
    quote: "First Test Over the Limit Three months (90 days) license suspension",
    source: MAN,
    section: "Section 6: State Laws and Penalties - Alcohol and Drug Penalties",
    url: MAN_URL,
  },
  {
    key: "ovuac",
    quote:
      "An OVUAC can result in a license suspension of three months to two years and require the driver to take a remedial driving course, pay reinstatement fees, and retake the Driver License examination.",
    source: MAN,
    section: "Section 6: State Laws and Penalties - Operating a Vehicle after Underage Alcohol Consumption",
    url: MAN_URL,
  },
  {
    key: "ovi-habitual-registry",
    quote:
      "In addition, if an individual is convicted of OVI five or more times in the preceding 20 years of an OVI violation, he or she will also have to serve jail time; may be subject to immobilization or forfeiture of his or her vehicle; and will be placed on Ohio's Habitual OVI/OMVI Offender Registry.",
    source: MAN,
    section: "Section 6: State Laws and Penalties - Alcohol and Drug Penalties",
    url: MAN_URL,
  },
  {
    key: "impairment-medication",
    quote:
      "Even legally prescribed or over-the-counter medication may affect an individual's driving ability.",
    source: MAN,
    section: "Section 3: Be Alert - Alcohol, Drugs, and Driving",
    url: MAN_URL,
  },
  {
    key: "distracted-adult-law",
    quote:
      "It is illegal in most cases to use, hold, or physically support a cell phone or electronic wireless communications device while driving on Ohio roads.",
    source: MAN,
    section: "Section 3: Be Alert - Distracted Driving",
    url: MAN_URL,
  },
  {
    key: "distracted-under-18",
    quote:
      "Drivers Under Age 18 Years-- It is illegal to use any electronic device while driving, even hands-free, or while sitting at a traffic light or in a traffic jam.",
    source: MAN,
    section: "Section 3: Be Alert - Distracted Driving",
    url: MAN_URL,
  },
  {
    key: "distracted-work-zone-fine",
    quote: "Fines doubled if the violation occurs in a work zone.",
    source: MAN,
    section: "Section 3: Be Alert - Distracted Driving penalties",
    url: MAN_URL,
  },
  // --- Penalties, points, insurance ------------------------------------
  {
    key: "points-twelve-suspension",
    quote:
      "If a driver accumulates 12 or more points within a two-year period, the BMV will impose a 12-point suspension of the Driver License.",
    source: MAN,
    section: "Section 6: State Laws and Penalties - Point Assessment",
    url: MAN_URL,
  },
  {
    key: "sr22-definition",
    quote:
      "An SR-22 is not an actual \"type\" of insurance, but a form filed with the state.",
    source: MAN,
    section: "Section 6: State Laws and Penalties - Point Assessment",
    url: MAN_URL,
  },
  {
    key: "points-values",
    quote:
      "2 Points - Moving violations, some speed offenses, restriction violations 4 Points - Willful or wanton disregard for safety of person or property 6 Points - Failure to stop and disclose identity after a crash among other dangerous and serious actions",
    source: MAN,
    section: "Section 6: State Laws and Penalties - Point Violations",
    url: MAN_URL,
  },
  {
    key: "class-d-six-months",
    quote: "For a class D suspension, six months;",
    source: ORC,
    section: "ORC 4510.02(B)(4) - Suspension classes",
    url: ORC_4510_02,
  },
  {
    key: "remedial-credit-limits",
    quote:
      "In any three-year period, the registrar shall approve only one two-point credit on a person's driving record under division (C)(1) of this section.",
    source: ORC,
    section: "ORC 4510.037(C)(2) - Remedial driving instruction credit",
    url: ORC_4510_037,
  },
  {
    key: "insurance-minimums",
    quote:
      "Minimum liability insurance requirements are: $25,000 for injury/death of one person, and $50,000 for injury/death of two or more people, and $25,000 for property damage in an accident;",
    source: MAN,
    section: "Section 6: State Laws and Penalties - Insurance/Financial Responsibility",
    url: MAN_URL,
  },
  {
    key: "insurance-proof-when",
    quote:
      "Proof of financial responsibility (insurance) must be shown in these instances: Whenever law enforcement issues a traffic ticket. At all vehicle inspection stops.",
    source: MAN,
    section: "Section 6: State Laws and Penalties - Insurance/Financial Responsibility",
    url: MAN_URL,
  },
  // --- Restraints and occupants ----------------------------------------
  {
    key: "safety-belt-law",
    quote:
      "Ohio's mandatory safety belt usage law requires drivers and front-seat occupants of most passenger vehicles to wear safety belts whenever they drive or ride in a motor vehicle on Ohio's roadways.",
    source: MAN,
    section: "Section 2: Before You Drive - Safety Restraints",
    url: MAN_URL,
  },
  {
    key: "child-booster-seat",
    quote:
      "hen any child who is at least age 4, but less than age 8, is being transported in a motor vehicle, the vehicle operator shall have the child properly restrained in a booster seat unless the child is 4-foot 9-inches in height, or taller.",
    source: MAN,
    section: "Section 6: State Laws and Penalties - Child Passenger Restraints",
    url: MAN_URL,
  },
  {
    key: "child-8-to-15",
    quote:
      "When any child at least age 8 but not older than age 15, is being transported in a motor vehicle, the vehicle operator shall have the child properly restrained with a safety belt.",
    source: MAN,
    section: "Section 6: State Laws and Penalties - Child Passenger Restraints",
    url: MAN_URL,
  },
  // --- Emergencies ------------------------------------------------------
  {
    key: "crash-remain-at-scene",
    quote:
      "Do not leave the scene until you have exchanged contact and insurance information with those involved, which includes leaving a note if the damaged vehicle was not occupied.",
    source: MAN,
    section: "Section 10: Emergency Situations - In the Event of a Crash",
    url: MAN_URL,
  },
  {
    key: "crash-injuries",
    quote:
      "Check yourself and others for injuries. Call emergency services (911) if anyone has been injured. Do not move the injured; keep them warm.",
    source: MAN,
    section: "Section 10: Emergency Situations - Check for Injuries",
    url: MAN_URL,
  },
  {
    key: "crash-unattended-vehicle",
    quote:
      "If involved in a crash with an unattended vehicle, you must report the crash to the police or leave necessary information at the scene.",
    source: MAN,
    section: "Section 10: Emergency Situations - Report the Crash",
    url: MAN_URL,
  },
  {
    key: "crash-report-six-months",
    quote:
      "The driver of a vehicle involved in a motor vehicle crash in Ohio may file a Crash Report (form BMV 3303) with the Ohio Bureau of Motor Vehicles within six months after the crash",
    source: MAN,
    section: "Section 10: Emergency Situations - Report the Crash",
    url: MAN_URL,
  },
  {
    key: "brake-failure",
    quote:
      "Use the parking brake - pull on the parking brake handle in the center console or push the parking brake foot pedal slowly so you will not lock the rear wheels and cause a skid.",
    source: MAN,
    section: "Section 10: Emergency Situations - Brake Failure",
    url: MAN_URL,
  },
  {
    key: "stuck-accelerator",
    quote:
      "Turn on emergency flashers, shift to \"NEUTRAL\" gear, and search for an escape route.",
    source: MAN,
    section: "Section 10: Emergency Situations - Stuck Accelerator",
    url: MAN_URL,
  },
  {
    key: "tire-blowout-response",
    quote:
      "Grip the steering wheel firmly and keep the vehicle going straight. Do not brake; slow down gradually.",
    source: MAN,
    section: "Section 10: Emergency Situations - Tire Blowout",
    url: MAN_URL,
  },
  {
    key: "breakdown-flares",
    quote:
      "If possible, place emergency flares about 200 to 300 feet behind the vehicle.",
    source: MAN,
    section: "Section 10: Emergency Situations - Vehicle Breakdown",
    url: MAN_URL,
  },
  {
    key: "drop-off-recovery",
    quote:
      "If your vehicle leaves the paved road surface, let off the accelerator, slow down gradually, and when safe to do so, return to the pavement.",
    source: MAN,
    section: "Section 10: Emergency Situations - Uneven Surface Drop-Offs",
    url: MAN_URL,
  },
  {
    key: "traffic-stop-procedure",
    quote:
      "Lower the window and remain in the vehicle unless told otherwise by the officer.",
    source: MAN,
    section: "Section 7: Special Driving Situations - Police and Traffic Stops",
    url: MAN_URL,
  },
  // --- Vehicle condition ------------------------------------------------
  {
    key: "unsafe-vehicle",
    quote:
      "No person shall drive or move, or cause or knowingly permit to be driven or moved, on any highway any vehicle or combination of vehicles which is in such unsafe condition as to endanger any person.",
    source: MAN,
    section: "Section 2: Before You Drive - Vehicle Equipment Regulations",
    url: MAN_URL,
  },
  {
    key: "tire-tread-depth",
    quote:
      "Tire Tread Depth --A tire in safe condition has a minimum of 1/16-inch tread depth on the road surface and is free of major bumps or bulges, breaks, or tread damage.",
    source: MAN,
    section: "Section 2: Before You Drive - Tire Safety",
    url: MAN_URL,
  },
  {
    key: "studded-tires",
    quote: "In Ohio, studded tires are legal from November 1 through April 15.",
    source: MAN,
    section: "Section 2: Before You Drive - Studded Tires",
    url: MAN_URL,
  },
  {
    key: "hand-position",
    quote:
      "Place both hands on the outside of the steering wheel on opposite sides, at the 4 and 8 o'clock positions, to maintain control of the vehicle and to avoid air bags if they should deploy.",
    source: MAN,
    section: "Section 5: Learning to Drive - Steering",
    url: MAN_URL,
  },
  {
    key: "mirror-adjustment",
    quote:
      "You will not see the left and right sides of the vehicle when glancing in the outside mirrors; however, this adjustment adds 12 to 16 degrees of additional viewing area to each side of the vehicle.",
    source: MAN,
    section: "Section 2: Before You Drive - Adjusting the Mirrors",
    url: MAN_URL,
  },
  {
    key: "cancel-signal",
    quote: "Make sure you cancel your signal to avoid confusing other drivers.",
    source: MAN,
    section: "Section 8: Safe Driving Tips - Signaling Your Movements",
    url: MAN_URL,
  },
  {
    key: "power-failure-steering",
    quote: "Be aware that the steering wheel may be difficult to turn, but you can turn it.",
    source: MAN,
    section: "Section 10: Emergency Situations - Power Failure",
    url: MAN_URL,
  },
  {
    key: "horn-audible-200",
    quote:
      "Horn in good working order, audible from 200 feet, and identifiable as a motor vehicle horn",
    source: MAN,
    section: "Section 2: Before You Drive - Vehicle Equipment Regulations",
    url: MAN_URL,
  },
  {
    key: "seat-adjustment-10-inches",
    quote:
      "There is at least 10 inches between your chest and the steering wheel to allow appropriate space for airbag deployment.",
    source: MAN,
    section: "Section 2: Before You Drive - Driver Position",
    url: MAN_URL,
  },
  {
    key: "backing-up-look-behind",
    quote:
      "Check behind your vehicle before you get in. Children and small objects cannot be seen from the driver's seat.",
    source: MAN,
    section: "Section 5: Learning to Drive - Backing Up",
    url: MAN_URL,
  },
  // --- Licensing --------------------------------------------------------
  {
    key: "knowledge-test-format",
    quote:
      "The knowledge test is 40 multiple-choice questions about motor vehicle regulations and traffic signs. Applicants must answer 75 percent of the questions correctly to pass.",
    source: BMV,
    section: "Knowledge Test",
    url: BMV_URL,
  },
  {
    key: "minimum-age-15-6",
    quote:
      "At age 15 years and six months, you meet the minimum age requirement to complete the vision screening and knowledge test.",
    source: MAN,
    section: "Section 1: How to Get Your Driver License - Vision Screening and Knowledge Testing",
    url: MAN_URL,
  },
  {
    key: "tipic-60-days",
    quote:
      "If a TIPIC is not purchased within 60 days, the applicant must start over with the vision screening and knowledge test.",
    source: MAN,
    section: "Section 1: How to Get Your Driver License - TIPIC",
    url: MAN_URL,
  },
  {
    key: "tipic-16-to-17",
    quote:
      "Age 16 to 17: Driving with any valid licensed driver, age 21 or older, in the front passenger seat is permitted, except from midnight to 6 a.m. when the driver must be accompanied by a parent, guardian, or custodian who holds a valid Driver License.",
    source: MAN,
    section: "Section 1: How to Get Your Driver License - TIPIC Restrictions",
    url: MAN_URL,
  },
  {
    key: "fifty-hours",
    quote:
      "Complete and log 50 hours of driving with an eligible licensed driver (see TIPIC Restrictions on previous page), with at least 10 hours of night driving.",
    source: MAN,
    section: "Section 1: How to Get Your Driver License - Driver Education Requirements",
    url: MAN_URL,
  },
  {
    key: "hold-tipic-six-months",
    quote: "Hold the TIPIC for at least six months. (Applicable to drivers under age 18 ONLY.)",
    source: MAN,
    section: "Section 1: How to Get Your Driver License - Driver Education Requirements",
    url: MAN_URL,
  },
  {
    key: "probationary-after-12-months",
    quote: "The driver may not operate a vehicle from 1 a.m. to 5 a.m., unless:",
    source: MAN,
    section: "Section 12: Purchase Your Driver License - Class D Operator's License",
    url: MAN_URL,
  },
  {
    key: "probationary-passengers",
    quote:
      "The driver may not operate a vehicle with more than one non-family member as a passenger, unless accompanied by a parent or guardian.",
    source: MAN,
    section: "Section 12: Purchase Your Driver License - Class D Operator's License",
    url: MAN_URL,
  },
  {
    key: "probationary-alcohol",
    quote:
      "For alcohol-related convictions, the Driver License will be suspended for at least six months according to ORC 4511.19.",
    source: MAN,
    section: "Section 12: Purchase Your Driver License - Class D Operator's License",
    url: MAN_URL,
  },
  {
    key: "cosigner-liability",
    quote:
      "The parent or legal guardian who co-signs a minor's application for a license is jointly, and severally, liable with the minor for any damages caused by negligence or willful misconduct while operating a motor vehicle until the minor's 18th birthday.",
    source: MAN,
    section: "Section 12: Purchase Your Driver License - Co-signer Responsibility",
    url: MAN_URL,
  },
  {
    key: "new-resident-30-days",
    quote: "Within 30 days of establishing residency, Ohio drivers must have an Ohioissued Driver License.",
    source: MAN,
    section: "Section 13: What Else Should I Know? - New Ohio Residents",
    url: MAN_URL,
  },
  {
    key: "abbreviated-adult-course",
    quote:
      "An applicant age 21 or older who fails the maneuverability or road skills portion of the driving test, is required to take an Abbreviated Adult Driver Training Course before attempting the driving test for a second time.",
    source: MAN,
    section: "Section 11: Taking the Driving Test - Test Failure",
    url: MAN_URL,
  },
  {
    key: "moped-license-age",
    quote: "Individuals age 14 or older can apply for a moped license.",
    source: MAN,
    section: "Section 12: Purchase Your Driver License - Mopeds",
    url: MAN_URL,
  },
];
