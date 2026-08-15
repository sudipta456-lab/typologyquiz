import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the Arizona Driver License Manual and Customer
// Service Guide (form 99-0117, revised March 2026), published by the Arizona
// Department of Transportation Motor Vehicle Division - 173 of the 193 below -
// plus two azdot.gov MVD pages and 11 sections of Arizona Revised Statutes
// Title 28 carrying rules the manual states only as a table, states without
// numbers, or does not state at all: criminal speeding, the secondary
// enforcement of the seat belt law, the thirty-foot parking setback from a stop
// sign, the move-over penalty scale, the $2,000 cap on flood rescue liability,
// the window tint figures, and the fact that a two-way left turn lane does not
// make a road divided for school bus purposes.
//
// azdot.gov refuses automated clients behind a Cloudflare challenge, so the
// manual PDF and both MVD pages were read from Internet Archive captures of
// those same official URLs - the manual from 19 July 2026, the permit test page
// from 8 March 2026, the teen driver guide from 20 June 2026. azleg.gov served
// the statutes directly. Every url below points at the live official page.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. Four
// normalisations were applied to the extracted text and to nothing else: curly
// quotes, en dashes and em dashes are folded to ASCII; a word split across a
// line break is rejoined; runs of whitespace, including the line breaks the
// PDF's two-column layout inserts mid-sentence, are collapsed to single spaces;
// and where the source states a rule as a stem followed by a bulleted list, the
// bullet markers are dropped and the items run together in the order they
// appear. No words are changed, added, dropped or reordered. The manual's own
// typographical slips are preserved as they stand, because a quote that has
// been tidied up is no longer a quote.
//
// These are quoted rather than summarised because MVD writes its 30-question
// permit test from this wording and tells applicants to study it. Each is kept
// to the operative rule and shown with its source, section and a link back to
// the official page.

const HB = "Arizona Driver License Manual and Customer Service Guide (revised March 2026)";
const HB_URL = "https://apps.azdot.gov/files/mvd/mvd-forms-lib/99-0117.pdf";

const PT = "Arizona MVD - Permit Test (at Home or in an Office)";
const PT_URL = "https://azdot.gov/mvd/services/driver-license-ID/permit-test";

const TD = "Arizona MVD - Teen Driver Guide to Class G Permit and License";
const TD_URL =
  "https://azdot.gov/mvd/services/driver-services/teen-drivers/permit-and-license-requirements";

const ARS = "Arizona Revised Statutes, Title 28";
const ars = (s: string) => `https://www.azleg.gov/ars/28/${s}.htm`;

export const arizonaExcerpts: HandbookExcerpt[] = [

  // --- Testing, licensing and documents ------------------------------------
  {
    key: "permit-age-15-6",
    quote:
      "You must be at least 15 years and 6 months old to apply for an Instruction Permit.",
    source: PT,
    section: "Important Requirements",
    url: PT_URL,
  },
  {
    key: "permit-hold-6-months",
    quote:
      "Once you get your permit, you must hold it for 6 months or until " +
      "you turn 18 before being eligible to get your driver license.",
    source: PT,
    section: "Important Requirements",
    url: PT_URL,
  },
  {
    key: "gdl-permit-supervisor",
    quote:
      "You must have a licensed driver 21 years or older in the seat beside you.",
    source: TD,
    section: "Graduated Permit/License FAQ",
    url: TD_URL,
  },
  {
    key: "gdl-practice-20-6",
    quote:
      "Complete at least 20 hours of supervised driving practice " +
      "including at least 6 hours at night if the applicant completed a " +
      "driver education program offered by a traffic survival school or " +
      "a certified defensive driving school approved by the Arizona " +
      "Supreme Court",
    source: TD,
    section: "Gain Some Experience - Option 2",
    url: TD_URL,
  },
  {
    key: "gdl-curfew-teen",
    quote:
      "Do not drive from midnight to 5am unless a legal guardian with a " +
      "valid driver license is seated beside you",
    source: TD,
    section: "Graduated Permit/License FAQ",
    url: TD_URL,
  },
  {
    key: "gdl-phone-ban",
    quote:
      "Cell phones and other wireless communication devices cannot be " +
      "used while driving except in emergencies or to operate an " +
      "audible navigation system",
    source: TD,
    section: "Graduated Permit/License FAQ",
    url: TD_URL,
  },
  {
    key: "gdl-penalty-first",
    quote:
      "1st conviction: $75 maximum fine and Class G restrictions extended for 30 days.",
    source: TD,
    section: "Graduated Permit/License FAQ",
    url: TD_URL,
  },
  {
    key: "operator-license-18",
    quote:
      "An operator license allows you to drive any vehicle that does " +
      "not require a motorcycle or commercial license. You must be at " +
      "least 18 years of age to apply for an operator license.",
    source: HB,
    section: "Classes of Licenses - Operator License",
    url: HB_URL,
  },
  {
    key: "motorcycle-permit-validity",
    quote:
      "The motorcycle permit is valid for 7 months and can be renewed " +
      "only one time within a 24-month period.",
    source: HB,
    section: "Classes of Licenses - Instruction Permit",
    url: HB_URL,
  },
  {
    key: "address-change-10-days",
    quote:
      "You are required by law to notify MVD within 10-days of any " +
      "change to your name or address.",
    source: HB,
    section: "Name and Address Change",
    url: HB_URL,
  },
  {
    key: "insurance-minimums",
    quote:
      "$25,000 bodily injury liability for one person and $50,000 for two or more persons.",
    source: HB,
    section: "Vehicle Insurance",
    url: HB_URL,
  },
  {
    key: "road-test-adas",
    quote:
      "Be advised that vehicle Advanced Driver Assistance Systems " +
      "(ADAS), including but not limited to auto-drive and parking " +
      "assistance, are prohibited during the road test.",
    source: HB,
    section: "Arizona's Driver License - Road Test",
    url: HB_URL,
  },

  // --- Section 1 - Before you drive ----------------------------------------
  {
    key: "seatbelt-under-16",
    quote:
      "The operator of a motor vehicle must require all passengers " +
      "under the age of 16 years to buckle up.",
    source: HB,
    section: "Section 1 - Arizona's Safety Belt Law",
    url: HB_URL,
  },
  {
    key: "seatbelt-secondary",
    quote:
      "A peace officer shall not stop or issue a citation to a person " +
      "operating a motor vehicle on a highway in this state for a " +
      "violation of this section unless the peace officer has " +
      "reasonable cause to believe there is another alleged violation " +
      "of a motor vehicle law of this state.",
    source: ARS,
    section: "28-909 Vehicle restraints required",
    url: ars("00909"),
  },
  {
    key: "penny-test",
    quote:
      "Select a point on your tire where the tread appears to be lowest " +
      "and place Abraham Lincoln's head into one of the grooves.",
    source: HB,
    section: "Section 1 - Tire Safety, Tread Depth",
    url: HB_URL,
  },
  {
    key: "secure-loads",
    quote:
      "a person shall not drive or move a vehicle on a highway, street " +
      "or roadway unless the vehicle is constructed or loaded in a " +
      "manner to prevent any of its load from dropping, sifting, " +
      "leaking or otherwise escaping from the vehicle",
    source: ARS,
    section: "28-1098 Vehicle loads; restrictions",
    url: ars("01098"),
  },
  {
    key: "tint-front-windows",
    quote:
      "Front side wing vents and windows that have a substance or " +
      "material in conjunction with glazing material that has a light " +
      "transmission of thirty-three percent plus or minus three percent",
    source: ARS,
    section: "28-959.01 Materials on windows or windshield",
    url: ars("00959-01"),
  },

  // --- Section 2 - Safe driving practices ----------------------------------
  {
    key: "following-3-6-rule",
    quote:
      "You can use the \"3-6 second\" rule to determine if you have " +
      "enough cushion between you and the vehicle you are following.",
    source: HB,
    section: "Section 2 - Cushion of Space Around Your Vehicle",
    url: HB_URL,
  },
  {
    key: "following-3-seconds",
    quote:
      "Allow at least a 3-second following distance for most driving situations.",
    source: HB,
    section: "Section 5 - Braking and Stopping",
    url: HB_URL,
  },
  {
    key: "slippery-6-seconds",
    quote:
      "When driving on slippery roads, you should double your following " +
      "distance to 6 seconds or more to allow for the extra distance " +
      "needed to adjust your speed or to stop.",
    source: HB,
    section: "Section 5 - Braking and Stopping",
    url: HB_URL,
  },
  {
    key: "blind-spots-definition",
    quote:
      "Blind spots are areas on the left and right sides of your " +
      "vehicle that are not visible in your mirror.",
    source: HB,
    section: "Section 2 - Positioning Vehicle",
    url: HB_URL,
  },
  {
    key: "signal-100-feet",
    quote:
      "Signal at least 100 feet (approximately 4 seconds) before you " +
      "turn so other drivers will have time to react.",
    source: HB,
    section: "Section 2 - Communicating",
    url: HB_URL,
  },
  {
    key: "signal-no-right-of-way",
    quote:
      "Signaling does not give you the right-of-way.",
    source: HB,
    section: "Section 2 - Signaling",
    url: HB_URL,
  },

  // --- Section 2 - Passing -------------------------------------------------
  {
    key: "passing-on-the-left",
    quote:
      "When you want to pass a vehicle or a motorcycle traveling in the " +
      "same direction, pass on the left.",
    source: HB,
    section: "Section 2 - Passing",
    url: HB_URL,
  },
  {
    key: "passing-return-headlights",
    quote:
      "When you can see the entire front or both headlights of the " +
      "vehicle you passed in your rearview mirror, look over your " +
      "shoulder to be sure the lane is clear, signal that you are " +
      "changing lanes, then return to the lane on the right.",
    source: HB,
    section: "Section 2 - Passing",
    url: HB_URL,
  },
  {
    key: "passing-right-not-off-pavement",
    quote:
      "You must never pass on the right by driving off the paved or " +
      "main portion of the roadway.",
    source: HB,
    section: "Section 2 - Passing",
    url: HB_URL,
  },
  {
    key: "no-pass-street-crossing",
    quote:
      "Approaching within 100 feet of a street crossing.",
    source: HB,
    section: "Section 2 - Do Not Pass",
    url: HB_URL,
  },
  {
    key: "no-pass-hill-curve",
    quote:
      "Approaching a curve or the top of a hill where you cannot see " +
      "ahead to be sure of safe passing.",
    source: HB,
    section: "Section 2 - Do Not Pass",
    url: HB_URL,
  },

  // --- Section 2 - Roundabouts ---------------------------------------------
  {
    key: "roundabout-yield-large-vehicles",
    quote:
      "Vehicles approaching the roundabout must yield to all vehicles " +
      "already in the roundabout and must yield to large vehicles that " +
      "are entering the roundabout at the same time.",
    source: HB,
    section: "Section 2 - Roundabouts",
    url: HB_URL,
  },
  {
    key: "roundabout-speed",
    quote:
      "Slow down as you approach the intersection; roundabouts are " +
      "designed for speeds of 15-20 mph.",
    source: HB,
    section: "Section 2 - Roundabouts",
    url: HB_URL,
  },
  {
    key: "roundabout-enter-right",
    quote:
      "Always enter a roundabout to the right of the central island.",
    source: HB,
    section: "Section 2 - Roundabouts",
    url: HB_URL,
  },
  {
    key: "roundabout-emergency-vehicle",
    quote:
      "Proceed with caution in the roundabout when you see an emergency " +
      "vehicle. Exit if you can, or pull over to the right.",
    source: HB,
    section: "Section 2 - Roundabouts",
    url: HB_URL,
  },

  // --- Parking -------------------------------------------------------------
  {
    key: "park-downhill",
    quote:
      "When you park on a downhill grade, turn your wheels toward the " +
      "curb and set your parking brake.",
    source: HB,
    section: "Section 2 - Parking on a Hill",
    url: HB_URL,
  },
  {
    key: "park-uphill-curb",
    quote:
      "If you park on an uphill grade, turn your wheels to the left, " +
      "let your car roll back until the right front wheel rests against " +
      "the curb and stops.",
    source: HB,
    section: "Section 2 - Parking on a Hill",
    url: HB_URL,
  },
  {
    key: "park-no-curb",
    quote:
      "If there is no curb, turn the wheels to the right so that the " +
      "car will roll away from the center of the road in the event the " +
      "brakes fail.",
    source: HB,
    section: "Section 2 - Parking on a Hill",
    url: HB_URL,
  },
  {
    key: "park-crosswalk-20",
    quote:
      "On a crosswalk or within 20 feet of a crosswalk at an intersection.",
    source: HB,
    section: "Section 2 - Prohibited Parking",
    url: HB_URL,
  },
  {
    key: "park-hydrant-15",
    quote:
      "Within 15 feet of a fire hydrant.",
    source: HB,
    section: "Section 2 - Prohibited Parking",
    url: HB_URL,
  },
  {
    key: "park-railroad-50",
    quote:
      "Within 50 feet of a railroad crossing.",
    source: HB,
    section: "Section 2 - Prohibited Parking",
    url: HB_URL,
  },
  {
    key: "park-bridge-tunnel",
    quote:
      "On a bridge or within a tunnel.",
    source: HB,
    section: "Section 2 - Prohibited Parking",
    url: HB_URL,
  },
  {
    key: "park-stop-sign-30",
    quote:
      "Within thirty feet on the approach to any flashing beacon, stop " +
      "sign, yield sign or traffic control signal located at the side " +
      "of a roadway.",
    source: ARS,
    section: "28-873 Stopping, standing or parking prohibitions",
    url: ars("00873"),
  },
  {
    key: "park-fire-station",
    quote:
      "Within twenty feet of the driveway entrance to a fire station " +
      "and on the side of a street opposite the entrance to any fire " +
      "station within seventy-five feet of the entrance when properly " +
      "posted.",
    source: ARS,
    section: "28-873 Stopping, standing or parking prohibitions",
    url: ars("00873"),
  },
  {
    key: "disabled-parking-placard",
    quote:
      "Parking spaces marked with this symbol are only to be used by a " +
      "vehicle displaying a valid placard or license plate with this " +
      "symbol, and only when transporting the person who was issued the " +
      "placard or plate.",
    source: HB,
    section: "Section 2 - Parking, International Symbol of Access",
    url: HB_URL,
  },
  {
    key: "backing-up-rear-window",
    quote:
      "Turn around so that you can look directly through the rear " +
      "window. Do not depend on your mirrors or backup cameras.",
    source: HB,
    section: "Section 2 - Backing Up/Reversing",
    url: HB_URL,
  },
  {
    key: "curb-white",
    quote:
      "You may stop only long enough to pick up or drop off passengers.",
    source: HB,
    section: "Section 3 - Painted Curbs, White",
    url: HB_URL,
  },
  {
    key: "curb-yellow",
    quote:
      "You may stop only long enough to load or unload. Stay with your car.",
    source: HB,
    section: "Section 3 - Painted Curbs, Yellow",
    url: HB_URL,
  },
  {
    key: "curb-red",
    quote:
      "You may not stop, stand or park.",
    source: HB,
    section: "Section 3 - Painted Curbs, Red",
    url: HB_URL,
  },

  // --- Section 2 - Freeways and lane use -----------------------------------
  {
    key: "freeway-entering-yield",
    quote:
      "Traffic entering a freeway must yield right-of-way to traffic already on the freeway.",
    source: HB,
    section: "Section 2 - Entering a Freeway",
    url: HB_URL,
  },
  {
    key: "gore-area-illegal",
    quote:
      "It is against the law to drive over or park in any part of a gore area.",
    source: HB,
    section: "Section 2 - Gore Area",
    url: HB_URL,
  },
  {
    key: "hov-two-persons",
    quote:
      "You may not drive a vehicle carrying fewer than two persons, " +
      "including the driver, in an HOV lane at the posted times Monday " +
      "through Friday.",
    source: HB,
    section: "Section 2 - Freeway Restrictions",
    url: HB_URL,
  },
  {
    key: "freeway-no-backing",
    quote:
      "If you miss your exit, do not stop. Never back up on a highway.",
    source: HB,
    section: "Section 2 - Entering and Exiting the Highway",
    url: HB_URL,
  },
  {
    key: "freeway-no-shoulder-parking",
    quote:
      "Park or stop on the freeway, except in specially provided areas",
    source: HB,
    section: "Section 2 - Other Freeway Restrictions",
    url: HB_URL,
  },
  {
    key: "lane-use-right-half",
    quote:
      "On all roadways with two or more lanes, drive on the right half " +
      "of the roadway except when passing or when signs indicate " +
      "otherwise.",
    source: HB,
    section: "Section 2 - Lane Use",
    url: HB_URL,
  },

  // --- Section 3 - Signal lights -------------------------------------------
  {
    key: "signals-apply-to-all",
    quote:
      "These traffic lights apply to pedestrians, bicycle and moped " +
      "riders, as well as to motorists.",
    source: HB,
    section: "Section 3 - Signal Lights",
    url: HB_URL,
  },
  {
    key: "officer-overrides-signal",
    quote:
      "You must obey the signal lights unless a police officer is " +
      "directing traffic to do otherwise.",
    source: HB,
    section: "Section 3 - Signal Lights",
    url: HB_URL,
  },
  {
    key: "green-means-go",
    quote:
      "This signal means GO. You may go through an intersection in the " +
      "direction indicated by the signal if the roadway is clear.",
    source: HB,
    section: "Section 3 - Signal Lights, Green",
    url: HB_URL,
  },
  {
    key: "green-yield-in-intersection",
    quote:
      "Yield to any vehicle that is already in the intersection when the light changed.",
    source: HB,
    section: "Section 3 - Signal Lights, Green",
    url: HB_URL,
  },
  {
    key: "yellow-means-caution",
    quote:
      "A steady yellow light is a warning that the light is about to " +
      "turn red. If you have not entered the intersection, you should " +
      "come to a safe stop.",
    source: HB,
    section: "Section 3 - Signal Lights, Yellow",
    url: HB_URL,
  },
  {
    key: "beat-the-light",
    quote:
      "Speeding up to \"beat the light\" is illegal and could cause a crash.",
    source: HB,
    section: "Section 3 - Signal Lights, Yellow",
    url: HB_URL,
  },
  {
    key: "red-complete-stop",
    quote:
      "You must come to a complete stop before you reach the " +
      "intersection, stop line or crosswalk. Remain stopped for as long " +
      "as the light stays red.",
    source: HB,
    section: "Section 3 - Signal Lights, Red",
    url: HB_URL,
  },
  {
    key: "right-on-red",
    quote:
      "Where not prohibited by signs, a right turn may be made after " +
      "coming to a complete stop, when motor traffic and pedestrian " +
      "traffic are clear.",
    source: HB,
    section: "Section 3 - Signal Lights, Red",
    url: HB_URL,
  },
  {
    key: "flashing-red-light",
    quote:
      "A flashing red light has the same meaning as a stop sign. You " +
      "must come to a full stop, then proceed with caution when the " +
      "roadway is clear.",
    source: HB,
    section: "Section 3 - Flashing Red Light",
    url: HB_URL,
  },
  {
    key: "flashing-yellow-light",
    quote:
      "A flashing yellow light means you should slow down and proceed " +
      "with caution if the roadway is clear.",
    source: HB,
    section: "Section 3 - Flashing Yellow Light",
    url: HB_URL,
  },
  {
    key: "red-arrow",
    quote:
      "A lighted red arrow means that you may not turn in the direction " +
      "of the arrow. You must stop and wait for the green signal to " +
      "appear before turning.",
    source: HB,
    section: "Section 3 - Red Arrow",
    url: HB_URL,
  },
  {
    key: "yellow-arrow",
    quote:
      "A yellow arrow warns that the light is about to change to red. " +
      "If you have not entered the intersection, you must stop and wait " +
      "for a green arrow.",
    source: HB,
    section: "Section 3 - Yellow Arrow",
    url: HB_URL,
  },
  {
    key: "flashing-yellow-arrow",
    quote:
      "A flashing yellow arrow means you should slow down and turn with " +
      "caution if the roadway is clear. Yield the right-of-way to any " +
      "oncoming vehicle or pedestrian before making your turn.",
    source: HB,
    section: "Section 3 - Flashing Yellow Arrow",
    url: HB_URL,
  },
  {
    key: "green-arrow",
    quote:
      "A green arrow appearing alone or with another signal light means " +
      "that you may proceed in the direction of the arrow, if you are " +
      "in the proper lane and the roadway is clear.",
    source: HB,
    section: "Section 3 - Green Arrow",
    url: HB_URL,
  },
  {
    key: "inoperative-signal-4-way",
    quote:
      "When approaching an intersection with an inoperative traffic " +
      "control signal, treat it as you would a 4-way stop.",
    source: HB,
    section: "Section 3 - Inoperative Signal Lights",
    url: HB_URL,
  },

  // --- Section 3 - Right-of-way --------------------------------------------
  {
    key: "t-intersection",
    quote:
      "At a \"T\" intersection, the driver on the street which ends " +
      "must yield the right-of-way to vehicles on the cross street.",
    source: HB,
    section: "Section 3 - Rules of the Road",
    url: HB_URL,
  },
  {
    key: "uncontrolled-left-yields",
    quote:
      "If two vehicles arrive at the intersection at about the same " +
      "time, both must stop and the driver of the vehicle on the left " +
      "must yield the right-of-way to the driver on the right.",
    source: HB,
    section: "Section 3 - Uncontrolled Intersections",
    url: HB_URL,
  },
  {
    key: "right-of-way-never-take",
    quote:
      "No one is allowed to take the right-of-way if taking it means a crash may result.",
    source: HB,
    section: "Section 3 - Right-of-Way",
    url: HB_URL,
  },
  {
    key: "pedestrian-crosswalk",
    quote:
      "You must yield the right-of-way to pedestrians crossing the " +
      "street in any marked or unmarked crosswalk.",
    source: HB,
    section: "Section 3 - Pedestrians",
    url: HB_URL,
  },
  {
    key: "pedestrian-school-crossing-stop",
    quote:
      "The law also requires vehicles to come to a complete stop at any " +
      "school crossing when the crosswalk is occupied by any person.",
    source: HB,
    section: "Section 3 - Pedestrians",
    url: HB_URL,
  },
  {
    key: "no-pass-stopped-for-pedestrian",
    quote:
      "You may not pass another vehicle that is stopped for a " +
      "pedestrian, even if you have a clear lane or a green traffic " +
      "signal.",
    source: HB,
    section: "Section 3 - Pedestrians",
    url: HB_URL,
  },
  {
    key: "hawk-flashing-red",
    quote:
      "Flashing Red Lights - STOP. Then proceed with caution after " +
      "pedestrian finishes crossing the driver's half of the roadway.",
    source: HB,
    section: "Section 3 - Pedestrian Activated Signals",
    url: HB_URL,
  },
  {
    key: "hawk-flashing-yellow",
    quote:
      "Flashing Yellow - Pedestrian has activated signal",
    source: HB,
    section: "Section 3 - Pedestrian Activated Signals",
    url: HB_URL,
  },
  {
    key: "hawk-lights-blank",
    quote:
      "All Lights Blank - Proceed with caution if crosswalk is clear.",
    source: HB,
    section: "Section 3 - Pedestrian Activated Signals",
    url: HB_URL,
  },
  {
    key: "alley-driveway-stop",
    quote:
      "When entering the roadway from an alley or driveway, you must " +
      "stop before reaching the sidewalk.",
    source: HB,
    section: "Section 3 - Alleys and Driveways",
    url: HB_URL,
  },
  {
    key: "left-turn-yield",
    quote:
      "When you are preparing to turn left, you must yield the " +
      "right-of-way to any oncoming vehicle, bicycle or pedestrian.",
    source: HB,
    section: "Section 3 - Left Turns",
    url: HB_URL,
  },
  {
    key: "u-turn-rule",
    quote:
      "U-turns are permitted as long as the movement can be made " +
      "safely, does not interfere with other traffic and is not " +
      "prohibited by signs.",
    source: HB,
    section: "Section 3 - U-Turn",
    url: HB_URL,
  },
  {
    key: "funeral-procession",
    quote:
      "Drivers must yield the right-of-way to any vehicle that is part " +
      "of a funeral procession being led by a funeral escort vehicle " +
      "flashing a red or a blue light.",
    source: HB,
    section: "Section 3 - Funerals",
    url: HB_URL,
  },
  {
    key: "stop-sign-where",
    quote:
      "A driver of a vehicle approaching a stop sign shall stop before " +
      "entering the crosswalk on the near side of the intersection, or " +
      "if there is no crosswalk, shall stop at a clearly marked stop " +
      "line",
    source: ARS,
    section: "28-855 Stop signs; yield signs",
    url: ars("00855"),
  },

  // --- Section 3 - Emergency vehicles and moving over ----------------------
  {
    key: "emergency-vehicle-yield",
    quote:
      "Move to the right side of the road and stop until the vehicle has passed.",
    source: HB,
    section: "Section 3 - Emergency Vehicles",
    url: HB_URL,
  },
  {
    key: "follow-fire-500",
    quote:
      "The driver shall maintain a distance of at least 500 feet behind " +
      "a fire department vehicle responding to an emergency and at " +
      "least 300 feet behind a police vehicle responding to an " +
      "emergency.",
    source: HB,
    section: "Section 3 - Following Emergency Vehicles",
    url: HB_URL,
  },
  {
    key: "move-over-law",
    quote:
      "requires motorists to move over one lane to create a safe margin " +
      "of space when driving by any vehicle with flashing lights pulled " +
      "to the side of a road or highway.",
    source: HB,
    section: "Section 3 - The Move Over Law",
    url: HB_URL,
  },
  {
    key: "move-over-penalty",
    quote:
      "A person who violates subsection E of this section is subject to " +
      "a civil penalty of $275, except that the person is subject to:",
    source: ARS,
    section: "28-775 Authorized emergency vehicles; passing stationary vehicles",
    url: ars("00775"),
  },

  // --- Section 3 - School buses, school zones and railroads ----------------
  {
    key: "school-bus-stop",
    quote:
      "When approaching a school bus that is picking up or dropping off " +
      "passengers, you must come to a complete stop before reaching the " +
      "bus, regardless of your direction of travel.",
    source: HB,
    section: "Section 3 - School Buses and School Zones",
    url: HB_URL,
  },
  {
    key: "school-bus-divided",
    quote:
      "You are not required to stop for a school bus on a divided " +
      "roadway when traveling in the opposite direction.",
    source: HB,
    section: "Section 3 - School Buses and School Zones",
    url: HB_URL,
  },
  {
    key: "school-bus-turn-lane-not-divided",
    quote:
      "a lane or group of lanes on either side of a two-way left turn " +
      "lane is not considered a separate roadway.",
    source: ARS,
    section: "28-857 Overtaking and passing school bus",
    url: ars("00857"),
  },
  {
    key: "school-crossing-15",
    quote:
      "The maximum speed from the first sign to past the school crossing sign is 15 mph.",
    source: HB,
    section: "Section 3 - School Crossing Sign",
    url: HB_URL,
  },
  {
    key: "school-crossing-no-passing",
    quote:
      "Passing another vehicle in a school crossing zone is prohibited.",
    source: HB,
    section: "Section 3 - School Crossing Sign",
    url: HB_URL,
  },
  {
    key: "school-crossing-guard",
    quote:
      "Follow the instructions of the crossing guard, and come to a " +
      "complete stop when any person is in the crosswalk.",
    source: HB,
    section: "Section 3 - School Crossing Sign",
    url: HB_URL,
  },
  {
    key: "school-crossing-sign-shape",
    quote:
      "Permanent five-sided (pentagon shaped) school crossing signs " +
      "warn drivers that children may be crossing any time of the day.",
    source: HB,
    section: "Section 3 - School Crossing Sign",
    url: HB_URL,
  },
  {
    key: "criminal-speed-school",
    quote:
      "Exceed thirty-five miles per hour approaching a school crossing.",
    source: ARS,
    section: "28-701.02 Excessive speeds; classification",
    url: ars("00701-02"),
  },
  {
    key: "criminal-speed-20-over",
    quote:
      "Exceed the posted speed limit by more than twenty miles per hour in other locations.",
    source: ARS,
    section: "28-701.02 Excessive speeds; classification",
    url: ars("00701-02"),
  },
  {
    key: "railroad-15-feet",
    quote:
      "When you arrive at a railroad crossing, you must stop no closer " +
      "than 15 feet from the nearest railroad track when you observe " +
      "any of the following:",
    source: HB,
    section: "Section 3 - Railroad Crossing Sign",
    url: HB_URL,
  },
  {
    key: "railroad-sign-circle",
    quote:
      "A circle-shaped sign provides a warning that you are approaching a railroad crossing.",
    source: HB,
    section: "Section 3 - Railroad Warning Sign",
    url: HB_URL,
  },

  // --- Section 3 - Speed ---------------------------------------------------
  {
    key: "speed-defaults",
    quote:
      "15 mph when approaching a school crosswalk. 25 mph in any " +
      "business or residential district. 55 mph on open highways or " +
      "city freeways. 65 mph on designated open highways. 75 mph on " +
      "rural freeways.",
    source: HB,
    section: "Section 3 - Speed Limits",
    url: HB_URL,
  },
  {
    key: "speed-white-signs",
    quote:
      "White speed limit signs with black letters are regulatory signs " +
      "and indicate the maximum speed you can legally go.",
    source: HB,
    section: "Section 3 - Speed Limits",
    url: HB_URL,
  },
  {
    key: "speed-orange-signs",
    quote:
      "Orange signs with black letters indicate recommended safe speeds " +
      "due to the curvature or grade of the road or other special " +
      "conditions at that location.",
    source: HB,
    section: "Section 3 - Speed Limits",
    url: HB_URL,
  },
  {
    key: "speed-bad-weather",
    quote:
      "The speed limits are set for the best driving conditions. When " +
      "driving in bad weather, your speed should be reduced to a level " +
      "that is reasonable.",
    source: HB,
    section: "Section 3 - Adjusting Speed to Conditions",
    url: HB_URL,
  },
  {
    key: "speed-double-following",
    quote:
      "When driving in bad weather, double the following distance from " +
      "the vehicle in front of you and reduce speed appropriately.",
    source: HB,
    section: "Section 3 - Adjusting Speed to Conditions",
    url: HB_URL,
  },
  {
    key: "impeding-traffic",
    quote:
      "Driving too slowly can be as dangerous as driving too fast.",
    source: HB,
    section: "Section 3 - Impeding Traffic",
    url: HB_URL,
  },
  {
    key: "reasonable-and-prudent",
    quote:
      "A person shall not drive a vehicle on a highway at a speed " +
      "greater than is reasonable and prudent under the circumstances, " +
      "conditions and actual and potential hazards then existing.",
    source: ARS,
    section: "28-701 Reasonable and prudent speed",
    url: ars("00701"),
  },

  // --- Section 3 - Signs and work zones ------------------------------------
  {
    key: "sign-shapes-visibility",
    quote:
      "When visibility is poor, such as in heavy rain, dust storms, or " +
      "fog, you may be able to make out only the shape of a particular " +
      "sign.",
    source: HB,
    section: "Section 3 - Traffic Signs",
    url: HB_URL,
  },
  {
    key: "sign-octagon",
    quote:
      "This shape is reserved for stop signs. You must come to a complete stop.",
    source: HB,
    section: "Section 3 - Regulatory Signs, Octagon",
    url: HB_URL,
  },
  {
    key: "sign-triangle",
    quote:
      "This shape requires that you yield the right-of-way to cross " +
      "traffic or to merging traffic.",
    source: HB,
    section: "Section 3 - Regulatory Signs, Triangle",
    url: HB_URL,
  },
  {
    key: "sign-rectangular",
    quote:
      "These signs regulate traffic and direct the driver's speed and direction.",
    source: HB,
    section: "Section 3 - Regulatory Signs, Rectangular",
    url: HB_URL,
  },
  {
    key: "sign-pennant",
    quote:
      "This sign marks the beginning of a no passing zone.",
    source: HB,
    section: "Section 3 - Regulatory Signs, Pennant",
    url: HB_URL,
  },
  {
    key: "sign-diamond",
    quote:
      "Yellow, diamond-shaped signs warn of a possible danger ahead.",
    source: HB,
    section: "Section 3 - Regulatory Signs, Diamond",
    url: HB_URL,
  },
  {
    key: "mile-posts",
    quote:
      "Mile posts can be used to tell where you are located if you are " +
      "involved in a crash, have mechanical problems, or are out of " +
      "gas.",
    source: HB,
    section: "Section 3 - Mile Posts",
    url: HB_URL,
  },
  {
    key: "work-zone-fines-double",
    quote:
      "When signs are posted, fines for a speed violation are doubled.",
    source: HB,
    section: "Section 3 - Fines double in work zones",
    url: HB_URL,
  },
  {
    key: "work-zone-orange",
    quote:
      "Orange is the basic color for these devices.",
    source: HB,
    section: "Section 3 - Warning Devices and Signs",
    url: HB_URL,
  },
  {
    key: "work-zone-crashes",
    quote:
      "Crashes that commonly occur in a work zone are rear end " +
      "collisions from drivers going too fast, crashes with fixed " +
      "objects or vehicles hitting people working in the area.",
    source: HB,
    section: "Section 3 - Roadway Construction and Temporary Work Zones",
    url: HB_URL,
  },
  {
    key: "flaggers",
    quote:
      "Flaggers wear orange vests or jackets and use red flags or " +
      "stop/slow panels to direct traffic through work zones.",
    source: HB,
    section: "Section 3 - Flaggers",
    url: HB_URL,
  },
  {
    key: "arrow-panels",
    quote:
      "Flashing arrow panels are used both day and night to give " +
      "advance warning to drivers to move to the right or left into " +
      "another lane.",
    source: HB,
    section: "Section 3 - Flashing Arrow Panels",
    url: HB_URL,
  },

  // --- Section 3 - Pavement markings and turning ---------------------------
  {
    key: "markings-yellow-white",
    quote:
      "Yellow center lines indicate that there is two-way traffic, flowing in both directions.",
    source: HB,
    section: "Section 3 - Pavement Markings",
    url: HB_URL,
  },
  {
    key: "broken-yellow",
    quote:
      "Broken yellow lines separate lanes or traffic going in opposite " +
      "directions and indicates that passing on the left is permitted " +
      "when the roadway is clear.",
    source: HB,
    section: "Section 3 - Broken Yellow Lines",
    url: HB_URL,
  },
  {
    key: "solid-broken-yellow",
    quote:
      "If the broken yellow line is on your side, you may pass when the " +
      "roadway ahead is clear. If the solid yellow line is on your " +
      "side, you may not pass.",
    source: HB,
    section: "Section 3 - Solid and Broken Yellow Lines",
    url: HB_URL,
  },
  {
    key: "double-yellow",
    quote:
      "Double solid yellow lines mean that passing is not allowed in " +
      "either direction. You may not cross the lines unless you are " +
      "turning left.",
    source: HB,
    section: "Section 3 - Double Yellow Lines",
    url: HB_URL,
  },
  {
    key: "broken-white",
    quote:
      "Broken white lines separate lanes of traffic going in the same " +
      "direction. These lines may be crossed with caution.",
    source: HB,
    section: "Section 3 - Broken White Lines",
    url: HB_URL,
  },
  {
    key: "solid-white-edge",
    quote:
      "Only cross the solid line on the right edge of the roadway in " +
      "case of emergency or to avoid a road hazard.",
    source: HB,
    section: "Section 3 - Solid White Lines",
    url: HB_URL,
  },
  {
    key: "double-white",
    quote:
      "A double solid white line separates two lanes of traffic going " +
      "in the same direction. Crossing a double solid white line is " +
      "prohibited.",
    source: HB,
    section: "Section 3 - Double Solid White Line",
    url: HB_URL,
  },
  {
    key: "turn-lane-arrow",
    quote:
      "If you are traveling in a lane marked with a curved arrow and " +
      "the word ONLY, you must turn in the direction of the arrow.",
    source: HB,
    section: "Section 3 - Turn Lane Arrow",
    url: HB_URL,
  },
  {
    key: "reversible-lanes",
    quote:
      "These lanes are usually marked by double-dashed yellow lines.",
    source: HB,
    section: "Section 3 - Reversible Lanes",
    url: HB_URL,
  },
  {
    key: "one-way-center-lane",
    quote:
      "If you will be traveling on a one-way street for several blocks, " +
      "it is best to stay in the center lane.",
    source: HB,
    section: "Section 3 - One-Way Streets",
    url: HB_URL,
  },
  {
    key: "two-way-left-turn-lane",
    quote:
      "This lane is only for use of vehicles turning left in either direction.",
    source: HB,
    section: "Section 3 - Left Turn, Two-Way Left Turn Lane",
    url: HB_URL,
  },
  {
    key: "two-way-left-turn-no-passing",
    quote:
      "Do not use the two-way left turn lane for passing, for thru " +
      "traffic or to accelerate in order to merge with thru traffic.",
    source: HB,
    section: "Section 3 - Left Turn, Two-Way Left Turn Lane",
    url: HB_URL,
  },
  {
    key: "turning-rules-everywhere",
    quote:
      "Rules for turning apply at all locations, even driveways and " +
      "alleys, not just at intersections.",
    source: HB,
    section: "Section 3 - Turning",
    url: HB_URL,
  },
  {
    key: "right-turn-close-curb",
    quote:
      "As you prepare to turn right, stay close to the right curb or " +
      "edge of the road. Do not swing wide before or while turning.",
    source: HB,
    section: "Section 3 - Right Turns",
    url: HB_URL,
  },
  {
    key: "left-on-red-one-way",
    quote:
      "This is the only left turn situation where, unless signs " +
      "prohibit it, you may make the turn against a red light after " +
      "stopping and yielding to traffic and pedestrians.",
    source: HB,
    section: "Section 3 - Left Turn, One-Way Road To One-Way Road",
    url: HB_URL,
  },
  {
    key: "left-turn-lane-required",
    quote:
      "If a special lane for making left turns has been signed or marked, use that lane",
    source: HB,
    section: "Section 3 - Left Turns",
    url: HB_URL,
  },

  // --- Section 4 - Sharing the road ----------------------------------------
  {
    key: "bicyclists-same-laws",
    quote:
      "Bicyclists must obey the same traffic laws as drivers of " +
      "vehicles, and they have the right-of-way under the same " +
      "conditions as motorists.",
    source: HB,
    section: "Section 4 - Sharing the Road with a Bicyclist",
    url: HB_URL,
  },
  {
    key: "bicycle-3-feet-passing",
    quote:
      "Motorists are required to allow a minimum safe distance of 3 " +
      "feet when passing a bicyclist traveling in the same direction.",
    source: HB,
    section: "Section 4 - Sharing the Road with a Bicyclist",
    url: HB_URL,
  },
  {
    key: "bicycle-no-honking",
    quote:
      "It is not safe for motorists to honk their horn at bicyclists " +
      "when passing, as this may startle them and cause them to crash.",
    source: HB,
    section: "Section 4 - Sharing the Road with a Bicyclist",
    url: HB_URL,
  },
  {
    key: "bicycle-night-lamp",
    quote:
      "When riding at night, have a white head lamp visible from 500 " +
      "feet, and a rear reflector.",
    source: HB,
    section: "Section 4 - Important rules for bicyclists",
    url: HB_URL,
  },
  {
    key: "bicycle-penalty-injury",
    quote:
      "Serious physical injury as defined in section 13-105 to another " +
      "person, the violator is subject to a civil penalty of up to five " +
      "hundred dollars.",
    source: ARS,
    section: "28-735 Overtaking bicycles; civil penalties",
    url: ars("00735"),
  },
  {
    key: "motorcycle-size-judgment",
    quote:
      "The smaller size of a motorcycle may make it hard to spot in " +
      "traffic, and it may appear to be farther away and traveling " +
      "slower than it actually is.",
    source: HB,
    section: "Section 4 - Sharing the Road with a Motorcycle, Size",
    url: HB_URL,
  },
  {
    key: "motorcycle-signals",
    quote:
      "Motorcycle turn signals do not automatically shut off, and " +
      "riders may forget to cancel them after a turn is completed.",
    source: HB,
    section: "Section 4 - Sharing the Road with a Motorcycle, Intersections",
    url: HB_URL,
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "Motorcycles are allowed the full width of a lane in which to " +
      "maneuver. Never crowd into the same lane as a motorcycle.",
    source: HB,
    section: "Section 4 - Sharing the Road with a Motorcycle, Passing",
    url: HB_URL,
  },
  {
    key: "lane-filtering-45",
    quote:
      "The posted speed limit does not exceed 45 miles per hour.",
    source: HB,
    section: "Section 4 - Sharing the Road with a Motorcycle, Lane Position",
    url: HB_URL,
  },
  {
    key: "lane-filtering-15",
    quote:
      "The motorcycle does not travel faster than 15 miles per hour.",
    source: HB,
    section: "Section 4 - Sharing the Road with a Motorcycle, Lane Position",
    url: HB_URL,
  },
  {
    key: "truck-stopping",
    quote:
      "It takes trucks twice as long to stop.",
    source: HB,
    section: "Section 4 - Sharing the Road with a Truck",
    url: HB_URL,
  },
  {
    key: "truck-no-zone",
    quote:
      "Watch out for the blind spots, or the \"No-Zone\", around large trucks and buses.",
    source: HB,
    section: "Section 4 - Sharing the Road with a Truck",
    url: HB_URL,
  },
  {
    key: "truck-right-turns",
    quote:
      "Trucks make wide right turns and sometimes must leave an open " +
      "space to the right just before the turn.",
    source: HB,
    section: "Section 4 - Sharing the Road with a Truck",
    url: HB_URL,
  },
  {
    key: "slow-moving-vehicle",
    quote:
      "The vehicle with the sign cannot travel faster than 25 mph.",
    source: HB,
    section: "Section 4 - Slow Moving Vehicles",
    url: HB_URL,
  },
  {
    key: "farm-machinery",
    quote:
      "Farm machinery usually travels at 25 mph or less, may take up " +
      "more than one lane of the road, and may not have signals.",
    source: HB,
    section: "Section 4 - Slow Moving Vehicles",
    url: HB_URL,
  },
  {
    key: "light-rail-red-arrow",
    quote:
      "Stop on red. A red arrow means \"Do Not Turn.\"",
    source: HB,
    section: "Section 3 - METRO Light Rail",
    url: HB_URL,
  },

  // --- Section 5 - Weather and adverse conditions --------------------------
  {
    key: "wind-passing-truck",
    quote:
      "When a truck or bus is passing you on the left, move as far as " +
      "possible to the right of your lane and slow down.",
    source: HB,
    section: "Section 5 - Wind",
    url: HB_URL,
  },
  {
    key: "dust-storm-off-highway",
    quote:
      "Drive completely off the highway.",
    source: HB,
    section: "Section 5 - Dust Storms",
    url: HB_URL,
  },
  {
    key: "dust-storm-not-travel-lane",
    quote:
      "Do not stop in the travel lane or in the emergency lane.",
    source: HB,
    section: "Section 5 - Dust Storms",
    url: HB_URL,
  },
  {
    key: "dust-storm-lights-off",
    quote:
      "Turn off your lights and take your foot off the brake.",
    source: HB,
    section: "Section 5 - Dust Storms",
    url: HB_URL,
  },
  {
    key: "dust-storm-stay-buckled",
    quote:
      "Stay in the vehicle with your seat belts buckled.",
    source: HB,
    section: "Section 5 - Dust Storms",
    url: HB_URL,
  },
  {
    key: "rain-6-seconds",
    quote:
      "You should slow down to increase the distance between your " +
      "vehicle and the vehicle ahead to at least 6 seconds.",
    source: HB,
    section: "Section 5 - Rain",
    url: HB_URL,
  },
  {
    key: "rain-first-30-minutes",
    quote:
      "Be extra careful during the 30 minutes after rain begins; grime " +
      "and oil on the road surface mix with water and make the road " +
      "slippery.",
    source: HB,
    section: "Section 5 - Rain",
    url: HB_URL,
  },
  {
    key: "rain-wipers-smear",
    quote:
      "Wait a short time after the rain begins before using your wipers.",
    source: HB,
    section: "Section 5 - Rain",
    url: HB_URL,
  },
  {
    key: "hydroplaning-50-mph",
    quote:
      "In a heavy rain, your tires can ride on a film of water, and at " +
      "50 mph your tires can lose all contact with the road.",
    source: HB,
    section: "Section 5 - Rain",
    url: HB_URL,
  },
  {
    key: "hydroplaning-response",
    quote:
      "Take your foot off the accelerator. Do not brake.",
    source: HB,
    section: "Section 5 - Rain",
    url: HB_URL,
  },
  {
    key: "flash-floods",
    quote:
      "Heavy rain frequently causes \"flash floods\" in Arizona washes. " +
      "Do not cross flooded washes.",
    source: HB,
    section: "Section 5 - Rain",
    url: HB_URL,
  },
  {
    key: "flood-liability-cap",
    quote:
      "The person's liability for the expenses of an emergency response " +
      "shall not exceed two thousand dollars for a single incident.",
    source: ARS,
    section: "28-910 Liability for emergency responses in flood areas",
    url: ars("00910"),
  },
  {
    key: "wet-brakes",
    quote:
      "Check your brakes after leaving the water to see if they will stop the car.",
    source: HB,
    section: "Section 5 - Rain",
    url: HB_URL,
  },
  {
    key: "fog-low-beams",
    quote:
      "When driving in fog, use low beams only and look for road edge markings to guide you.",
    source: HB,
    section: "Section 5 - Fog",
    url: HB_URL,
  },
  {
    key: "bridges-freeze",
    quote:
      "Watch for ice on bridges and in shady areas (bridge surfaces " +
      "freeze before other road surfaces).",
    source: HB,
    section: "Section 5 - Snow and Ice",
    url: HB_URL,
  },
  {
    key: "headlights-sunset-sunrise",
    quote:
      "You must use headlights from sunset to sunrise, but be aware " +
      "that other driver may not have turned on their headlights.",
    source: HB,
    section: "Section 5 - Night Driving",
    url: HB_URL,
  },
  {
    key: "high-beams-500-feet",
    quote:
      "Use high beams on highways when no other vehicle is coming toward you within 500 feet.",
    source: HB,
    section: "Section 5 - Night Driving",
    url: HB_URL,
  },
  {
    key: "low-beams-200-feet",
    quote:
      "When following another car, use low beams whenever you are within 200 feet.",
    source: HB,
    section: "Section 5 - Night Driving",
    url: HB_URL,
  },
  {
    key: "night-overdriving-lights",
    quote:
      "Never drive so fast that you cannot stop within the distance you " +
      "can see ahead with your lights.",
    source: HB,
    section: "Section 5 - Night Driving",
    url: HB_URL,
  },

  // --- Section 6 - Handling emergencies ------------------------------------
  {
    key: "blowout-response",
    quote:
      "Hold the steering wheel tightly and keep your vehicle going " +
      "straight. Ease off the gas pedal; do not apply the brakes.",
    source: HB,
    section: "Section 6 - Tire Failure",
    url: HB_URL,
  },
  {
    key: "overheating-radiator-cap",
    quote:
      "Raise the hood but do not open the radiator cap.",
    source: HB,
    section: "Section 6 - Overheating",
    url: HB_URL,
  },
  {
    key: "abs-do-not-pump",
    quote:
      "Many vehicles feature Antilock Braking Systems (ABS). Do not pump anti-lock brakes.",
    source: HB,
    section: "Section 6 - Brake Failure",
    url: HB_URL,
  },
  {
    key: "brake-failure-pump",
    quote:
      "Pump the brakes rapidly. This may build up enough pressure to stop your vehicle.",
    source: HB,
    section: "Section 6 - Brake Failure",
    url: HB_URL,
  },
  {
    key: "skid-recovery",
    quote:
      "Turn the wheel quickly in the direction you want your vehicle to " +
      "follow (in the direction of the skid).",
    source: HB,
    section: "Section 6 - Recovering from Skids",
    url: HB_URL,
  },
  {
    key: "animals-no-horn",
    quote:
      "If the animal is not yet on the road, do not sound your horn, as " +
      "that may startle the animal and cause it to run out in front of " +
      "you.",
    source: HB,
    section: "Section 6 - Animals on the Road",
    url: HB_URL,
  },
  {
    key: "crash-exchange-info",
    quote:
      "If you are involved in a crash, you are to remain at the scene " +
      "to provide assistance to any person injured and to exchange " +
      "information with the other drivers.",
    source: HB,
    section: "Section 6 - Reporting Crashes",
    url: HB_URL,
  },
  {
    key: "quick-clearance",
    quote:
      "State law requires a driver involved in a minor crash without " +
      "injuries to remove a vehicle from the roadway if it is operable " +
      "and can be moved safely.",
    source: HB,
    section: "Section 6 - Quick Clearance",
    url: HB_URL,
  },
  {
    key: "crash-move-not-at-fault",
    quote:
      "Any person who removes a motor vehicle from the main traveled " +
      "portion of the roadway prior to the arrival of law enforcement " +
      "personnel shall not be held liable or at fault for the crash " +
      "based solely on the fact the vehicle was moved.",
    source: HB,
    section: "Section 6 - Crash Procedures",
    url: HB_URL,
  },
  {
    key: "never-leave-scene",
    quote:
      "Remember: Never leave the scene of a crash.",
    source: HB,
    section: "Section 6 - Quick Clearance",
    url: HB_URL,
  },
  {
    key: "failure-to-stop-damage",
    quote:
      "Suspended for 1 year if involving only damage to a vehicle.",
    source: HB,
    section: "Section 6 - Failure to Stop at a Crash",
    url: HB_URL,
  },

  // --- Section 5 - Alcohol, drugs and fatigue ------------------------------
  {
    key: "open-container",
    quote:
      "It is illegal for a driver or passenger to consume or possess an " +
      "open container of spirituous liquor in the passenger compartment " +
      "of a motor vehicle while on any public roadway.",
    source: HB,
    section: "Section 5 - Open Container",
    url: HB_URL,
  },
  {
    key: "open-container-trunk",
    quote:
      "It does not include the trunk or the area behind the last " +
      "upright seat of a vehicle not equipped with a trunk.",
    source: HB,
    section: "Section 5 - Open Container",
    url: HB_URL,
  },
  {
    key: "bac-008",
    quote:
      "Remember, being under the legal limit of 0.08 blood alcohol " +
      "concentration (BAC) does not mean that it is legal or safe for " +
      "you to drive",
    source: HB,
    section: "Section 5 - Under 21 = ZERO Tolerance",
    url: HB_URL,
  },
  {
    key: "dui-under-21-any",
    quote:
      "If you are under 21, your license may be suspended if there is " +
      "any alcohol concentration.",
    source: HB,
    section: "Section 5 - DUI Penalties",
    url: HB_URL,
  },
  {
    key: "refusal-12-months",
    quote:
      "If you refuse to submit to or do not successfully complete any " +
      "tests when you are arrested for driving under the influence, you " +
      "will automatically lose your driving privilege for 12 months, or " +
      "24 months for a second refusal within 84 months.",
    source: HB,
    section: "Section 5 - DUI Penalties",
    url: HB_URL,
  },
  {
    key: "dui-first-offense",
    quote:
      "First offense - you will be jailed for not less than 10 " +
      "consecutive days, your driver license will be suspended for not " +
      "less than 90 days",
    source: HB,
    section: "Section 5 - DUI",
    url: HB_URL,
  },
  {
    key: "extreme-dui-015",
    quote:
      "This category of DUI applies to a person with an alcohol " +
      "concentration of 0.15 or higher.",
    source: HB,
    section: "Section 5 - Extreme DUI",
    url: HB_URL,
  },
  {
    key: "aggravated-dui",
    quote:
      "This category of DUI applies to a person who commits a DUI while " +
      "their driving privilege is suspended or revoked, commits a third " +
      "DUI in 7 years, or commits a DUI while a person under 15 is in " +
      "the vehicle.",
    source: HB,
    section: "Section 5 - Aggravated DUI",
    url: HB_URL,
  },
  {
    key: "interlock-random",
    quote:
      "While the vehicle is in operation, the driver must blow into the " +
      "device at random intervals.",
    source: HB,
    section: "Section 5 - Certified Ignition Interlock Device",
    url: HB_URL,
  },
  {
    key: "drowsy-rest-only-remedy",
    quote:
      "Rest is the only safe remedy.",
    source: HB,
    section: "Section 5 - Drowsy Driving/Fatigue",
    url: HB_URL,
  },

  // --- Section 5 - Penalties and driver improvement ------------------------
  {
    key: "aggressive-driving-definition",
    quote:
      "You may be cited for aggressive driving if you commit a series " +
      "of acts during a single, continuous period of driving that " +
      "presents an immediate hazard to another person or vehicle, " +
      "exceed the posted speed limit and commit two of the following " +
      "violations:",
    source: HB,
    section: "Section 5 - Road Rage and Aggressive Driving",
    url: HB_URL,
  },
  {
    key: "points-8-in-12",
    quote:
      "If you accumulate 8 or more points within any 12-month period, " +
      "you are required to attend Traffic Survival School (TSS), or " +
      "your driving privilege may be suspended.",
    source: HB,
    section: "Section 5 - Suspension and Traffic School",
    url: HB_URL,
  },
  {
    key: "points-speeding-3",
    quote:
      "Speeding 3 Driving over or parking in a gore area 3 Wrong-way " +
      "driving 2 All other moving violations 2",
    source: HB,
    section: "Section 5 - Violation points",
    url: HB_URL,
  },
  {
    key: "red-light-tss",
    quote:
      "If you run a red light (or a flashing red light) and receive a " +
      "traffic citation, upon conviction of that violation you will be " +
      "required to attend Traffic Survival School.",
    source: HB,
    section: "Section 3 - Red Light Running",
    url: HB_URL,
  },
  {
    key: "red-light-tss-mandatory",
    quote:
      "MVD is required by law to order the completion of Traffic " +
      "Survival School (TSS) for every red light conviction reported by " +
      "the courts.",
    source: HB,
    section: "Section 3 - Red Light Running",
    url: HB_URL,
  },
  {
    key: "chemical-test-refusal-penalty",
    quote:
      "The penalty for refusal or unsuccessful completion is a 12-month " +
      "suspension of your driver license, or 2 years for a second or " +
      "subsequent refusal within a 7-year period.",
    source: HB,
    section: "Section 5 - Suspension and Traffic School",
    url: HB_URL,
  },
];
