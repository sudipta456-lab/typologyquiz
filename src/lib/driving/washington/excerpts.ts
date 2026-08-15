import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the Washington State Driver Guide, published by
// the Washington State Department of Licensing - 159 of the 169 below - plus
// 2 quotes from dol.wa.gov pages carrying the knowledge test's format, and
// 7 sections of the Revised Code of Washington and one of the Washington
// Administrative Code carrying rules the guide states only in part, states
// without numbers, or does not state at all: the 25/50/60 mph statutory speed
// defaults, the thousand-foot headlight visibility standard, the studded tyre
// season, the 300-foot school crosswalk zone, the left-lane impeding
// infraction, the duty to stop and remain stopped at a crosswalk, and the
// 200-foot emergency zone.
//
// Every quote below was located mechanically in the fetched source and checked
// as an exact substring before it was written here. Nothing is paraphrased.
// Four normalisations were applied to the extracted text and to nothing else:
// curly quotes, en dashes and em dashes are folded to ASCII; runs of
// whitespace, including the line breaks the page markup inserts mid-sentence,
// are collapsed to single spaces; the section symbol is spelled out; and where
// the source states a rule as a stem followed by a bulleted list, the items are
// run together in the order they appear - no words are changed, dropped or
// reordered. Where a single statutory sentence ran too long to quote briefly it
// is cut at a clause boundary, and the shortened span is still verified as a
// literal substring. The sources' own spellings are preserved as they stand,
// including the statute's "imbedded", because a quote that has been tidied up
// is no longer a quote.
//
// These are quoted rather than summarised because DOL writes its 40-question
// knowledge test from this material. Each is kept to the operative rule and
// shown with its source, section and a link back to the official page.

export const washingtonExcerpts: HandbookExcerpt[] = [
  {
    key: "abs-no-shorter",
    quote:
      "An ABS does not shorten your stopping distance, but it will allow you to " +
      "keep better steering control.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 2: Vehicles - 2.8 Braking",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "accelerator-neutral",
    quote:
      "Quickly shift to neutral.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.7 Accelerator",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "access-aisle",
    quote:
      "The white stripes next to a reserved space, called an access aisle, must " +
      "be kept clear. You can be fined for parking in stalls without displaying " +
      "the required placard and/or for blocking the access aisle.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.18 Reserved disabled parking",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "address-change-10-days",
    quote:
      "If your address changes, update your information in License Express " +
      "within 10 days of the change.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 1: Licenses - 1.16 Additional services",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "animal-transport",
    quote:
      "It's illegal for anyone to transport an animal outside a vehicle (such " +
      "as the bed of a truck) without a protective harness or enclosure, so the " +
      "animal can't jump or fall out.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.19 Animals",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "bac-thresholds",
    quote:
      "A BAC test measures how much alcohol is in your system. For drivers age " +
      "21 and older, having a BAC of .08% or higher is considered a DUI and can " +
      "result in legal consequences. Drivers under age 21 have the same " +
      "potential consequences for having a BAC of 0.02%.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 1: Licenses - 1.15 Blood Alcohol Concentration (BAC)",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "beach-driving",
    quote:
      "Driving is allowed on ocean beaches only in Grays Harbor and Pacific " +
      "Counties. The beach is considered a state highway, so all driving laws " +
      "apply.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.20 Beaches",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "bicycle-box",
    quote:
      "You can't turn right on red near a bicycle box. Stay behind the white " +
      "line until the bicycle box is clear.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.16 Bicycle boxes",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "bicycle-crosswalk-ped",
    quote:
      "Bicyclists in crosswalks are considered pedestrians. You must yield to " +
      "them in both marked and unmarked crosswalks and intersections.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.6 Sharing with bicyclists",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "bicycle-three-feet",
    quote:
      "You cannot share a lane with a bicyclist. Legally, bicyclists may use " +
      "the full lane and ride where they're most visible to you and other " +
      "drivers.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.6 Sharing with bicyclists",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "bicycle-turn-right",
    quote:
      "Let the bicyclist clear the intersection before making a turn.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.6 Passing a bicyclist",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "bike-lane-driving",
    quote:
      "Drive in bicycle lanes only when turning or crossing the lane to park " +
      "near the curb.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.6 Bike lanes",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "black-ice",
    quote:
      "Black ice refers to a thin coating of ice that is hard for drivers to " +
      "see.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.6 Slippery roads",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "blind-zone-mirrors",
    quote:
      "Remember: if you can't see their mirrors, the driver can't see you.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 2: Vehicles - 2.13 Other vehicles' blind zones",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "blocked-view-edge-forward",
    quote:
      "If you stop on the stop line, but your view of a cross street is " +
      "blocked, edge forward slowly until you can see. This allows crossing " +
      "drivers to see the front of your vehicle before you can see them.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.13 Common intersections",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "blowout-no-brake",
    quote:
      "Do not brake. Allow the vehicle to slow by itself, or brake gently if " +
      "necessary.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.7 Tires",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "breakdown-off-road",
    quote:
      "Get your vehicle off the road and away from traffic, if possible.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.7 Vehicle failures",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "bus-center-turn-lane",
    quote:
      "Don't use a center turn lane to pass a school bus.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.2 Sharing with school buses",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "bus-multilane-exception",
    quote:
      "Drivers traveling in the opposite direction as the bus don't need to " +
      "stop when the red lights flash or the stop sign extends IF :",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.2 On a multilane road",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "bus-same-direction",
    quote:
      "All drivers traveling in the same direction as the bus must stop when " +
      "the red lights flash, and the stop sign is extended.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.2 Sharing with school buses",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "calming-circle-large",
    quote:
      "Traffic calming circles are intended for passenger vehicles and may not " +
      "easily accommodate large vehicles like fire trucks, buses, or delivery " +
      "trucks. Give larger vehicles plenty of space and be aware that they " +
      "might have to go clockwise to get through the circle.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.15 Traffic calming circles",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "camera-tickets-owner",
    quote:
      "All locations with traffic cameras are clearly marked. Speeding tickets " +
      "from these locations are mailed to the vehicle owner.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.12 Automated traffic safety cameras",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "cannabis-all-ages",
    quote:
      "Recreational use of marijuana, THC, and other cannabis products " +
      "(edibles, patches, vapes, tinctures, and topicals) is legal for those 21 " +
      "years or over, but driving after consuming any cannabis is illegal for " +
      "all ages.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 3: Drivers - 3.1 Cannabis and driving",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "cannabis-no-safe-amount",
    quote:
      "There is no safe amount of cannabis for driving.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 3: Drivers - 3.1 Cannabis and driving",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "centre-lane-300-feet",
    quote:
      "These lanes must not be used for passing. You shouldn't travel farther " +
      "than 300 feet in a center lane.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.16 Turn lane",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "centre-lane-both-ways",
    quote:
      "These shared center lanes are reserved for vehicles making left turns in " +
      "either direction from or into the roadway (or U-turns when they are " +
      "permitted).",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.16 Turn lane",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "chest-10-inches",
    quote:
      "Your chest should be at least 10 inches from the steering wheel to leave " +
      "space for the airbag.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 2: Vehicles - 2.5 Driver's seat",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "child-booster",
    quote:
      "Ages 4 and older must ride in a car or booster seat until the vehicle " +
      "lap and shoulder seat belts fit properly- typically, between the ages of " +
      "8 and 12 years of age.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 2: Vehicles - 2.6 Child seats",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "child-front-seat-13",
    quote:
      "Airbags are also why children under the age of 13 should never ride in " +
      "the front seat. They could be seriously injured or killed if an airbag " +
      "deploys.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 2: Vehicles - 2.6 Airbags",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "child-unattended-12",
    quote:
      "It's a crime to leave a child under the age of 12 unattended in a parked " +
      "vehicle.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.18 Parking",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "collision-do-not-leave",
    quote:
      "Do not drive away. If anyone is injured or killed, call 911.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.9 Crashing a vehicle",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "collision-report-4-days",
    quote:
      "File a collision report form , within 4 days of a crash, if a law " +
      "enforcement officer doesn't do this for you. The form is required by " +
      "state law.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.9 Reporting a crash",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "colour-blue",
    quote:
      "Blue = Motorist services guidance",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.12 Signs",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "colour-orange",
    quote:
      "Orange = Construction and maintenance warning",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.12 Signs",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "colour-red",
    quote:
      "Red = Prohibitive or restricted action",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.12 Signs",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "colour-yellow-green",
    quote:
      "Fluorescent Yellow Green = Warning of school, pedestrian, and bicycling " +
      "activity",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.12 Signs",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "crosswalk-unmarked",
    quote:
      "Not all crosswalks are marked! Every intersection is legally defined as " +
      "a crosswalk regardless of whether a crosswalk marking is present.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.16 Crosswalks",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "curve-steady-speed",
    quote:
      "Avoid braking or accelerating suddenly while in the curve. This can " +
      "disrupt your vehicle's balance and lead to a loss of control.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.6 In the curve",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "dark-signal-4way",
    quote:
      "If a traffic signal isn't working, treat the intersection like a 4-way " +
      "stop. Come to a complete stop. Yield to traffic on your right.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.10 Broken lights or signals",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "dashed-white-ending",
    quote:
      "Shorter dashed white lines mean the lane is ending. You will either need " +
      "to merge or exit.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.16 Road markings",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "dashed-yellow-pass",
    quote:
      "A dashed yellow line shows the center of a 2-way, 2-lane road. If it's " +
      "safe, you may use the oncoming lane to pass another vehicle.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.16 Road markings",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "diverging-diamond",
    quote:
      "A diverging diamond is a new type of intersection in Washington.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.15 Diverging diamonds",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "dol-knowledge-32-40",
    quote:
      "You must get 32 out of 40 correct answers to pass the test.",
    source: "Washington DOL - Do I need to take a test?",
    section: "Do I need to take a test? - Knowledge test",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/do-i-need-take-test",
  },
  {
    key: "dol-score-2-years",
    quote:
      "A passing score is good for 2 years.",
    source: "Washington DOL - Do I need to take a test?",
    section: "Do I need to take a test? - Knowledge test",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/do-i-need-take-test",
  },
  {
    key: "dont-block-intersection",
    quote:
      "Make sure there is enough space for you to cross or turn without " +
      "blocking the intersection.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.13 Common intersections",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "double-white-illegal",
    quote:
      "Double solid white lines are a barrier between lanes. It's illegal to " +
      "cross double white lines.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.16 Road markings",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "dui-physical-control",
    quote:
      "DUI also applies to being in control of a vehicle, even if it's parked " +
      "(RCW 46.61.503). If you have the ability to take control of a vehicle's " +
      "engine or operation, you are considered in physical control of the " +
      "vehicle.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 1: Licenses - 1.15 Driving under the influence (DUI)",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "dutch-reach",
    quote:
      "Open the door with your hand that's farthest from the door. This is " +
      "called the \"Dutch Reach\" method.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.18 Check traffic before you open your door",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "earbuds-illegal",
    quote:
      "It is against the law to drive a vehicle while wearing earbuds, " +
      "earphones, headphones, or headsets that broadcast sound or cancel noise.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 3: Drivers - 3.0 Hearing",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "edl-real-id",
    quote:
      "Enhanced licenses and IDs meet REAL ID standards.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 1: Licenses - 1.6 Identification and driver licenses",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "emergency-vehicle-pull-right",
    quote:
      "As soon as you see or hear the signals, immediately pull your vehicle to " +
      "the right side of the road and stop.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.9 Sharing with emergency vehicles",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "emergency-zone-action",
    quote:
      "As soon as you see a roadside response vehicle with flashing lights, you " +
      "must either:",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.17 Emergency zone",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "emergency-zone-slow",
    quote:
      "Slow down to at least 10 mph below the posted speed limit. Never drive " +
      "faster than 50 mph in an emergency zone.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.17 Emergency zone",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "ev-charging-parking",
    quote:
      "It's illegal to park a vehicle in any electric vehicle charging station " +
      "if the vehicle is not connected to the charging equipment.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.18 Electric vehicle charging station parking",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "every-intersection-crosswalk",
    quote:
      "Every intersection is legally a crosswalk, whether it's marked or " +
      "unmarked.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.13 Common intersections",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "expired-eight-years",
    quote:
      "If your license is 8 or more years expired, you'll need to retake the " +
      "skills and knowledge test.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 1: Licenses - 1.15 Maintaining your license",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "fatigue-nap",
    quote:
      "If you're traveling alone and start to feel tired, pull off the road and " +
      "take a 20-minute nap. It's better to stop and sleep than to risk causing " +
      "an accident.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 3: Drivers - 3.1 Fatigue and drowsy driving",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "ferry-line-cutting",
    quote:
      "Ferry line-cutting is a traffic offense that can lead to a fine.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.20 Ferries",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "flares-200-300",
    quote:
      "Warn other road users by placing emergency flares 200 to 300 feet behind " +
      "the vehicle.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.7 Vehicle failures",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "flashing-green-bc",
    quote:
      "You won't see a flashing green light in Washington state. However, you " +
      "might see them in British Columbia, Canada, as warning that pedestrians " +
      "are waiting to cross.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.11 Traffic light signals",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "flashing-red",
    quote:
      "A flashing red traffic light functions as a stop sign.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.11 Traffic light signals",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "flashing-yellow-yield",
    quote:
      "A flashing yellow light has the same meaning as a yield sign.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.11 Traffic light signals",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "following-two-lengths",
    quote:
      "When you're driving near other vehicles, it's important to leave a " +
      "distance that's at least twice the length of your vehicle between you " +
      "and the vehicle ahead.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.2 Space",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "four-way-first-to-arrive",
    quote:
      "The first vehicle to arrive is the first to go.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.13 4-way stop",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "four-way-tie-right",
    quote:
      "If 2 vehicles arrive at approximately the same time, yield to the one on " +
      "the right.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.13 4-way stop",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "green-arrow",
    quote:
      "A green arrow gives you the right-of-way to travel in that direction.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.11 Traffic light signals",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "hand-signal-stop",
    quote:
      "Stop. Put your left arm out the driver-side window.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 2: Vehicles - 2.5 Hand signals",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "headlight-times",
    quote:
      "Washington law says you need to have your headlights on a half hour " +
      "after sunset to a half hour before sunrise.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 2: Vehicles - 2.5 Vehicle maintenance",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "high-beam-distances",
    quote:
      "500 feet in front of an oncoming vehicle.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 2: Vehicles - 2.5 Vehicle maintenance",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "hov-motorcycles",
    quote:
      "Motorcycles are also allowed to use HOV lanes.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.16 HOV / Carpool lane",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "hydroplane-steady-wheel",
    quote:
      "Keep the steering wheel steady . Avoid overcorrecting or jerking the " +
      "steering wheel.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.6 Hydroplaning",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "implied-consent",
    quote:
      "Under The Implied Consent Law (RCW 46.20.308), everyone who drives in " +
      "Washington agrees to be tested if an officer suspects they are under the " +
      "influence of alcohol or drugs.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 1: Licenses - 1.15 Driving under the influence (DUI)",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "injury-no-drink",
    quote:
      "Do not give injured people anything to drink - not even water.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.9 Reporting an injury",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "insurance-minimums",
    quote:
      "$25,000 or more, payable for the bodily injury or death of 1 person in a " +
      "collision in which only 1 person was injured or killed",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 2: Vehicles - 2.3 Insurance required",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "intermediate-curfew",
    quote:
      "No driving between 1 a.m. and 5 a.m. unless accompanied by a parent, " +
      "guardian, or licensed driver at least age 25",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 1: Licenses - 1.8 Intermediate driver license",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "intermediate-passengers-0-6",
    quote:
      "No passengers under age 20 except immediate family members",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 1: Licenses - 1.8 Intermediate driver license",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "intermediate-phone",
    quote:
      "Intermediate license laws also restrict the use of cell phones and " +
      "wireless communication devices while you're driving, even with " +
      "hands-free technology. You can only use your phone to report an " +
      "emergency.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 1: Licenses - 1.8 Intermediate driver license",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "intermediate-violation-2",
    quote:
      "2nd Violation: License is suspended for 6 months or until you turn 18, " +
      "whichever comes first.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 1: Licenses - 1.8 Intermediate driver license",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "keep-right-except-pass",
    quote:
      "Keep right except to pass. When there are multiple lanes traveling in " +
      "the same direction, drive in the right lane.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.10 General driving guidance",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "knowledge-before-skills",
    quote:
      "You must first pass the knowledge exam before you can take the Driving " +
      "Skills Exam.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 1: Licenses - 1.12 Personal driver license exams",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "left-turn-yields",
    quote:
      "Any vehicle turning left must yield the right-of-way to vehicles going " +
      "straight or turning right.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.13 4-way stop",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "legal-drug-not-safe",
    quote:
      "Just because a drug is legal does not mean it is safe to use while " +
      "driving.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 3: Drivers - 3.1 Medications and driving",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "light-rail-car-length",
    quote:
      "Leave at least 1 car length (or more) between your vehicle and light " +
      "rail trains.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.7 Light rail",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "median-illegal",
    quote:
      "It's illegal to drive within, over, or across medians.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.16 Median",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "merge-interstate-row",
    quote:
      "Drivers already on the interstate have the right-of-way, so creating " +
      "space to merge might require you to adjust your speed, faster or slower.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.3 Merging",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "minimum-speed",
    quote:
      "Some roads have minimum speed limits. You're required to travel at least " +
      "this fast so you are not a hazard to other drivers.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.12 Speed Limit",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "motorcycle-brake-lights",
    quote:
      "When slowing down, motorcyclists might use the throttle and not their " +
      "brakes, so brake lights wouldn't be visible.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.5 Sharing with motorcycles",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "They're entitled to the same lane width as all other vehicles. Never " +
      "move into the same lane alongside a motorcyclist, even if the lane is " +
      "wide and the motorcyclist is riding far to 1 side.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.5 Sharing with motorcycles",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "night-glare-right-edge",
    quote:
      "If a vehicle comes toward you with its high beams on, look toward the " +
      "right side of the road to keep from being distracted by the headlights.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.6 Night driving",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "night-headlight-glow",
    quote:
      "Drive at a speed that will allow you to stop within the glow of your " +
      "headlights (usually 400 feet).",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.6 Night driving",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "no-holding-device",
    quote:
      "You cannot hold any electronic device while driving (like cell phones, " +
      "tablets, or gaming devices). This applies to all drivers, regardless of " +
      "age or experience.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 3: Drivers - 3.4 Washington's distracted driving laws",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "no-markings-right",
    quote:
      "If there are no markings on the road, stay as close to the right side as " +
      "safely possible.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.16 Road markings",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "no-reversing-freeway",
    quote:
      "Keep moving forward. Don't drive in reverse on the road, even if you " +
      "miss your turn or exit.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.10 General driving guidance",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "no-shoulder-passing",
    quote:
      "Don't use the shoulders of the road to pass. Unless directed by " +
      "officials or signs, you shouldn't drive on the shoulder.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.10 General driving guidance",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "officers-override",
    quote:
      "In special circumstances, law enforcement, construction workers, " +
      "maintenance personnel, and school crossing guards can direct traffic. " +
      "These people can overrule traffic signals, and their orders or " +
      "directions must be followed.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.10 Traffic control devices",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "open-container-storage",
    quote:
      "Open alcohol and cannabis products can only be transported in a trunk or " +
      "truck bed. Alcohol or cannabis containers cannot be kept in storage " +
      "compartments accessible to the driver.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 1: Licenses - 1.15 Open container law",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "park-curb-12-inches",
    quote:
      "More than 12 inches from the curb.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.18 Parking",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "park-curb-colours",
    quote:
      "White means that only short stops are permitted.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.18 Signs or painted curbs",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "park-downhill",
    quote:
      "Turn your steering wheel toward the curb until the front of your front " +
      "tire touches the curb. If your vehicle starts to roll, it will roll " +
      "forward into the curb.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.18 Facing down the hill",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "park-fire-station-75",
    quote:
      "Within 75 feet of a fire station driveway on the opposite side of the " +
      "street.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.18 Parking",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "park-hydrant-15",
    quote:
      "Within 15 feet of a fire hydrant.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.18 Parking",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "park-no-curb",
    quote:
      "Turn your steering wheel and tires toward the edge of the road. This " +
      "way, if your vehicle starts to roll, it will roll away from traffic.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.18 If there is no curb",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "park-railroad-50",
    quote:
      "Within 50 feet of a railroad crossing.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.18 Parking",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "park-signal-30",
    quote:
      "Within 30 feet of a traffic signal, stop sign, or yield sign.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.18 Parking",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "park-uphill",
    quote:
      "On hills with tall curbs, turn your steering wheel away from the curb " +
      "until the back of your front tire touches the curb. If your vehicle " +
      "starts to roll, it will roll backwards into the curb.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.18 Facing up the hill",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "ped-clear-extra-lane",
    quote:
      "Wait until a pedestrian has cleared your lane and 1 additional lane " +
      "before proceeding. If the pedestrian is using a wheelchair, cane, guide " +
      "dog, or other service animal, wait until they have completely crossed " +
      "the street before continuing.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.1 Sharing with people",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "permit-age-no-training",
    quote:
      "You can take the knowledge exam after you turn 15½. Once you pass, " +
      "you'll get your permit.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 1: Licenses - 1.8 Getting a personal driver license",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "permit-no-phone",
    quote:
      "Remember: If you have an instruction permit or intermediate license, you " +
      "cannot use a cell phone or any mobile electronic device while driving, " +
      "even if it is hands-free.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 3: Drivers - 3.0 Hearing",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "permit-validity",
    quote:
      "Your permit is valid for 1 year (can be renewed for a fee). Your " +
      "knowledge exam score is only valid for 2 years.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 1: Licenses - 1.8 Getting a personal driver license",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "placard-not-driving",
    quote:
      "Do not hang the parking placard from your rearview mirror while you're " +
      "driving because it will obstruct your view.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.18 Reserved disabled parking",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "polydrug-most-common",
    quote:
      "Polydrug use is the most common impairment involved in fatal crashes.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 3: Drivers - 3.1 Polydrug use and driving",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "power-line-stay-inside",
    quote:
      "If a power line comes in contact with your vehicle, do not get out of " +
      "the vehicle.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.9 Encountering power lines",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "pullover-interior-lights",
    quote:
      "Turn on your interior lights if you're pulled over at night.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.10 Getting pulled over",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "rain-hot-day",
    quote:
      "If it starts to rain on a hot day, the pavement can be very slippery for " +
      "the first few minutes. Heat causes the oil in the asphalt to come to the " +
      "surface.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.6 Slippery roads",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "ramp-meter",
    quote:
      "Ramp meters work like regular traffic signals.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.11 Freeway ramp meters",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "rcw-basic-rule",
    quote:
      "(1) No person shall drive a vehicle on a highway at a speed greater than " +
      "is reasonable and prudent under the conditions and having regard to the " +
      "actual and potential hazards then existing.",
    source: "Revised Code of Washington, Title 46",
    section: "RCW 46.61.400 - Basic rule and maximum limits",
    url: "https://app.leg.wa.gov/RCW/default.aspx?cite=46.61.400",
  },
  {
    key: "rcw-crosswalk-stop",
    quote:
      "(1) The operator of an approaching vehicle shall stop and remain stopped " +
      "to allow a pedestrian, bicycle, or personal delivery device to cross the " +
      "roadway within an unmarked or marked crosswalk",
    source: "Revised Code of Washington, Title 46",
    section: "RCW 46.61.235 - Crosswalks",
    url: "https://app.leg.wa.gov/RCW/default.aspx?cite=46.61.235",
  },
  {
    key: "rcw-headlight-law",
    quote:
      "Every vehicle upon a highway within this state at any time from a half " +
      "hour after sunset to a half hour before sunrise and at any other time " +
      "when, due to insufficient light or unfavorable atmospheric conditions, " +
      "persons and vehicles on the highway are not clearly discernible at a " +
      "distance of one thousand feet ahead",
    source: "Revised Code of Washington, Title 46",
    section: "RCW 46.37.020 - When lighted lamps are required",
    url: "https://app.leg.wa.gov/RCW/default.aspx?cite=46.37.020",
  },
  {
    key: "rcw-left-lane-impede",
    quote:
      "(4) It is a traffic infraction to drive continuously in the left lane of " +
      "a multilane roadway when it impedes the flow of other traffic.",
    source: "Revised Code of Washington, Title 46",
    section: "RCW 46.61.100 - Keep right except when passing",
    url: "https://app.leg.wa.gov/RCW/default.aspx?cite=46.61.100",
  },
  {
    key: "rcw-left-turn-yield",
    quote:
      "(1) The driver of a vehicle intending to turn to the left within an " +
      "intersection or into an alley, private road, or driveway shall yield the " +
      "right-of-way to any vehicle approaching from the opposite direction " +
      "which is within the intersection or so close thereto as to constitute an " +
      "immediate hazard.",
    source: "Revised Code of Washington, Title 46",
    section: "RCW 46.61.185 - Vehicle turning left",
    url: "https://app.leg.wa.gov/RCW/default.aspx?cite=46.61.185",
  },
  {
    key: "rcw-school-zone-300",
    quote:
      "The speed zone at the crosswalk shall extend three hundred feet in " +
      "either direction from the marked crosswalk.",
    source: "Revised Code of Washington, Title 46",
    section: "RCW 46.61.440 - Maximum speed limit when passing school or playground crosswalks",
    url: "https://app.leg.wa.gov/RCW/default.aspx?cite=46.61.440",
  },
  {
    key: "rcw-speed-city",
    quote:
      "(a) Twenty-five miles per hour on city and town streets; (b) Fifty miles " +
      "per hour on county roads; (c) Sixty miles per hour on state highways.",
    source: "Revised Code of Washington, Title 46",
    section: "RCW 46.61.400 - Basic rule and maximum limits",
    url: "https://app.leg.wa.gov/RCW/default.aspx?cite=46.61.400",
  },
  {
    key: "rcw-studded-tires",
    quote:
      "It is unlawful to use metal studs imbedded within the tire between April " +
      "1st and November 1st",
    source: "Revised Code of Washington, Title 46",
    section: "RCW 46.37.420 - Tire equipment",
    url: "https://app.leg.wa.gov/RCW/default.aspx?cite=46.37.420",
  },
  {
    key: "red-arrow",
    quote:
      "A red arrow means you can't go in the direction of the arrow.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.11 Traffic light signals",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "red-left-one-way",
    quote:
      "After coming to a complete stop at a red light, you can turn left onto a " +
      "one-way street if you don't see a \"no turn on red\" sign and you have " +
      "plenty of room to enter traffic.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.11 Traffic light signals",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "red-right-turn",
    quote:
      "After coming to a complete stop at a red light, you can turn right if " +
      "you don't see a \"no turn on red\" sign and you have plenty of room to " +
      "enter traffic.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.11 Traffic light signals",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "reversible-lane-signs",
    quote:
      "A green arrow means you can use the lane, and, a red X means you can't. " +
      "A steady yellow X means the lane is changing direction, and you should " +
      "move out of the lane as soon as it's safe.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.16 Reversible lane",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "road-rage-criminal",
    quote:
      "Road rage is a criminal offense.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 3: Drivers - 3.1 Road rage",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "roundabout-emergency",
    quote:
      "Drive through the roundabout and pull over if an emergency vehicle " +
      "approaches, just like you would at any other intersection.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.15 How to drive a roundabout",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "roundabout-pick-lane",
    quote:
      "Pick a lane as you approach the roundabout. The lane choice sign shows " +
      "you which lanes are used for right turns, straight through travel, and " +
      "left turns. Once you pick a lane, stay in that lane until you exit the " +
      "roundabout.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.15 How to drive a roundabout",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "roundabout-speed",
    quote:
      "Roundabouts are designed for speeds between 15 and 25 mph.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.15 How to drive a roundabout",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "roundabout-truck-apron",
    quote:
      "Roundabouts can have a truck apron around the central island. Truck " +
      "aprons are designed for large vehicles.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.15 Roundabout",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "roundabout-yield-left",
    quote:
      "Yield to all traffic in the roundabout. Look left and yield to all " +
      "traffic already in the roundabout since they have the right-of-way.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.15 How to drive a roundabout",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "school-zone-20",
    quote:
      "The school zone speed limit is 20 mph because higher speeds increase the " +
      "risk of fatal crashes.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.17 Zones",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "seatbelt-everyone",
    quote:
      "Every person in a moving vehicle must wear a seat belt or be securely " +
      "fastened into an approved child restraint device.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 2: Vehicles - 2.6 Occupant protection",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "sharrows",
    quote:
      "Sharrows are road markings used to indicate a vehicle lane is shared " +
      "with bicycle traffic.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.16 Sharrows",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "signal-100-turn",
    quote:
      "Put on your turn signal at least 100 feet before you turn left or right " +
      "across oncoming traffic.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.14 Turning",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "skid-steer-direction",
    quote:
      "Steer in the same direction your vehicle is moving .",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.6 Skidding",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "slow-moving-emblem",
    quote:
      "Agricultural and farm vehicles designed to go 25 mph or less will have a " +
      "triangle sign or emblem on the back.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.8 Sharing with agricultural vehicles",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "solid-yellow-no-pass",
    quote:
      "A solid yellow line can indicate the edge of the road or a no-passing " +
      "zone. Do not cross a solid yellow line to pass another vehicle.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.16 Road markings",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "speed-ideal-conditions",
    quote:
      "The maximum speed limit is for ideal conditions. Reduce your speed when " +
      "road conditions require it - like the roadway is slippery or it's foggy " +
      "and difficult to see.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.12 Speed Limit",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "steering-9-3",
    quote:
      "Imagine that the steering wheel is a clock. Each hour represents a " +
      "location for you to hold the wheel.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 2: Vehicles - 2.7 Steering",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "stop-line",
    quote:
      "You must stop before your vehicle reaches the stop line or crosswalk (if " +
      "there is one).",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.16 Stop line",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "stop-sign-meaning",
    quote:
      "A stop sign means you must stop at the line, crosswalk, or corner. Look " +
      "for crossing vehicles and pedestrians in all directions and yield the " +
      "right-of-way.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.12 Common signs",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "thc-thresholds",
    quote:
      "A THC test measures how much THC is in your system. For drivers age 21 " +
      "and older, having more than 5 nanograms of active THC per milliliter of " +
      "blood in their system is considered a DUI and can result in legal " +
      "consequences.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 1: Licenses - 1.15 Tetrahydrocannabinol (THC) Cannabis Concentration",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "ticket-refuse-arrest",
    quote:
      "However, refusing to sign a traffic ticket could result in your arrest.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.10 Getting a ticket",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "tire-tread",
    quote:
      "Tire tread shouldn't be less than 2/32 of an inch.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 2: Vehicles - 2.5 Vehicle maintenance",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "train-right-of-way",
    quote:
      "Trains ALWAYS have the right-of-way. They are heavy and cannot stop " +
      "quickly even if they are traveling at low speeds.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.7 Sharing the road with trains",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "train-stop-distance",
    quote:
      "Stop between 15 and 50 feet away from the nearest rail of a crossing " +
      "when:",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.7 Sharing the road with trains",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "transit-yield",
    quote:
      "Yield to any transit vehicle traveling in the same direction as you that " +
      "has signaled and is pulling back onto the roadway.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.3 Sharing with transit buses",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "truck-merge-headlights",
    quote:
      "When entering traffic ahead of a large vehicle, wait until you can " +
      "clearly see both of their headlights in your rearview mirror before " +
      "merging in front of them.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.4 Sharing with large vehicles",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "truck-stopping-450",
    quote:
      "It takes a loaded truck with properly adjusted brakes, traveling at 55 " +
      "mph, 450 feet to come to a complete stop.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.4 Sharing with large vehicles",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "truck-two-lanes-roundabout",
    quote:
      "They also need 2 lanes of space in a roundabout.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.4 Sharing with large vehicles",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "turn-closest-lane",
    quote:
      "Whether turning left or right at an intersection, state law requires you " +
      "to turn into the lane closest to the direction you are coming from.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.14 Turning",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "turn-lane-commit",
    quote:
      "Once you're in a turn lane, you must follow through with the turn.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.16 Turn lane",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "turn-stay-in-lane",
    quote:
      "If there is more than 1 turn lane, stay in your original lane as you " +
      "turn.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.14 Turning",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "turning-oncoming-row",
    quote:
      "Remember approaching traffic has the right-of-way.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.4 Turning in front of approaching vehicles",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "two-way-stop",
    quote:
      "Turning vehicles must yield to the vehicle going straight. The vehicle " +
      "going straight has the right-of-way.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.13 2-way stop",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "uncontrolled-state-highway",
    quote:
      "You enter or cross a state highway from a secondary road.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.15 Uncontrolled intersections",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "uncontrolled-unpaved",
    quote:
      "You enter a paved road from an unpaved road.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.15 Uncontrolled intersections",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "uncontrolled-yield-rules",
    quote:
      "When you enter an uncontrolled intersection, you must yield the " +
      "right-of-way if any of these apply:",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.15 Uncontrolled intersections",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "uturn-allowed",
    quote:
      "In Washington, U-turns are generally allowed unless a sign is posted " +
      "telling you a U-turn is not allowed.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.14 U-turns",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "uturn-no-crest",
    quote:
      "You must have clear visibility in all directions before making a U-turn. " +
      "For that reason, do not make a U-turn on a curve or when approaching the " +
      "crest of a hill.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.14 U-turns",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "work-zone-fines-double",
    quote:
      "Fines double for offenses committed while driving in construction areas " +
      "when workers are present.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.12 Work zone signs",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "work-zone-yield",
    quote:
      "Motorists, pedestrians, and bicyclists must yield to any highway " +
      "construction personnel, vehicles with flashing yellow lights, or " +
      "equipment inside a highway construction or maintenance work zone.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.12 Work zone signs",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "yellow-no-accelerate",
    quote:
      "You are not allowed to accelerate beyond the posted speed limit to enter " +
      "or clear an intersection when the light is yellow.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.11 Traffic light signals",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "yellow-white-lines",
    quote:
      "Yellow lines separate traffic in opposite directions.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.16 Road markings",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "yield-sign-meaning",
    quote:
      "A yield sign means you must slow down and allow traffic that has the " +
      "right-of-way to cross first.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 4: Roads - 4.12 Common signs",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
  {
    key: "zipper-merge",
    quote:
      "Stay in your lane. Continue using both lanes until you reach the " +
      "designated merge area.",
    source: "Washington State Driver Guide (Washington State Department of Licensing, 2025)",
    section: "Chapter 5: Hazards - 5.3 Zipper merging",
    url: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides/washington-state-driver-guide-text-only",
  },
];
