import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the official California Driver's Handbook on
// dmv.ca.gov, with the California Vehicle Code (leginfo.legislature.ca.gov) and
// the California MUTCD (dot.ca.gov) used only where the handbook is silent.
//
// Every `quote` below was read from the live official page and copied exactly.
// Curly typographic apostrophes in the source are rendered here as straight
// ASCII apostrophes; no other change is made. Nothing is paraphrased, tidied or
// stitched together from separate places - where a rule is written as a list,
// the quote is the list item as it appears, and `section` names the list it
// belongs to.

const HB = "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook";
const SOURCE = "California Driver's Handbook (dmv.ca.gov)";

export const californiaExcerpts: HandbookExcerpt[] = [
  // ---------------------------------------------------------------- signs
  {
    key: "sign-stop",
    quote:
      "Make a full stop before entering the crosswalk or at the limit line. If there is no limit line or crosswalk, stop before entering the intersection.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Signs, STOP Sign",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "sign-yield",
    quote:
      "Slow down and be ready to stop to let any vehicle, bicyclist, or pedestrian pass before you proceed.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Signs, Red YIELD Sign",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "sign-diamond-warning",
    quote: "Warns you of specific road conditions and dangers ahead.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Signs, Diamond-shaped Sign",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "sign-pentagon-school",
    quote: "You are near a school. Drive slowly and stop for children in the crosswalk.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Signs, 5-sided Sign",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "sign-white-rectangle",
    quote: "Communicates many important rules you must obey.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Signs, White Rectangular Sign",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "sign-railroad-advance",
    quote:
      "You are approaching a railroad crossing. Look, listen, slow down, and prepare to stop.",
    source: SOURCE,
    section:
      "Section 7: Laws and Rules of the Road - Signs, Yellow and Black Circular Sign or X-shaped Sign",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "sign-prohibition-circle",
    quote:
      "The picture inside the circle shows what you cannot do and may be shown with words.",
    source: SOURCE,
    section:
      "Section 7: Laws and Rules of the Road - Signs, Red Circle with a Red Line Through It",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "sign-wrong-way",
    quote:
      "If you enter a roadway against traffic, DO NOT ENTER and WRONG WAY signs may be posted. When it is safe, back out or turn around.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Signs, WRONG WAY Sign",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },

  // ------------------------------------------- sign colours (California MUTCD)
  // The handbook describes sign SHAPES but never states what the guide-sign
  // colours mean, so these four come from the manual Caltrans actually signs to.
  {
    key: "sign-colour-green-guide",
    quote:
      "Except as otherwise provided in this Manual for individual signs or groups of signs, guide signs on streets and highways shall have a white message and border on a green background.",
    source: "California MUTCD 2026 Edition (dot.ca.gov)",
    section: "Chapter 2D - Guide Signs for Conventional Roads, Section 2D.03",
    url: "https://dot.ca.gov/-/media/dot-media/programs/safety-programs/documents/ca-mutcd/2026/2026-camutcd-2026-2d-a11y.pdf",
  },
  {
    key: "sign-colour-blue-services",
    quote:
      "General Service signs shall have a white legend and border on a blue background.",
    source: "California MUTCD 2026 Edition (dot.ca.gov)",
    section: "Chapter 2I - General Service Signs, Section 2I.03",
    url: "https://dot.ca.gov/-/media/dot-media/programs/safety-programs/documents/ca-mutcd/2026/2026-camutcd-2026-2i-a11y.pdf",
  },
  {
    key: "sign-colour-brown-recreation",
    quote:
      "Destination guide signs with a white legend and border on a brown background may be posted at the first point where an access or crossroad intersects a highway where recreational or cultural interest areas are a significant destination along conventional roads, expressways, or freeways.",
    source: "California MUTCD 2026 Edition (dot.ca.gov)",
    section:
      "Chapter 2M - Recreational and Cultural Interest Area Signs, Section 2M.09",
    url: "https://dot.ca.gov/-/media/dot-media/programs/safety-programs/documents/ca-mutcd/2026/2026-camutcd-2026-2m-a11y.pdf",
  },
  {
    key: "sign-colour-orange-workzone",
    quote:
      "Except as provided in Sections 6F.01 and 6H.01, other warning signs that are used in TTC zones shall have black legends and borders on an orange background.",
    source: "California MUTCD 2026 Edition (dot.ca.gov)",
    section: "Chapter 6H - TTC Zone Warning Signs, Section 6H.38 Other Warning Signs",
    url: "https://dot.ca.gov/-/media/dot-media/programs/safety-programs/documents/ca-mutcd/2026/2026-camutcd-2026-6h-a11y.pdf",
  },
  {
    key: "sign-chevron",
    quote:
      "If used, Chevron Alignment signs shall be installed on the outside of a turn or curve, in line with and at approximately a right angle to approaching traffic.",
    source: "California MUTCD 2026 Edition (dot.ca.gov)",
    section:
      "Chapter 2C - Warning Signs and Object Markers, Section 2C.08 Chevron Alignment Sign (W1-8)",
    url: "https://dot.ca.gov/-/media/dot-media/programs/safety-programs/documents/ca-mutcd/2026/2026-camutcd-2026-2c-a11y.pdf",
  },
  {
    key: "sign-crossbuck",
    quote:
      "The Grade Crossing (R15-1) sign (see Figure 8B-1), commonly identified as the Crossbuck sign, shall be retroreflective white with the words RAILROAD CROSSING in black lettering, mounted as shown in Figure 8B-2.",
    source: "California MUTCD 2026 Edition (dot.ca.gov)",
    section: "Chapter 8B - Signs, Section 8B.03 Grade Crossing (Crossbuck) Sign (R15-1)",
    url: "https://dot.ca.gov/-/media/dot-media/programs/safety-programs/documents/ca-mutcd/2026/2026-camutcd-2026-8b-a11y.pdf",
  },

  // -------------------------------------------------------------- signals
  {
    key: "signal-red",
    quote: "A red traffic signal light means STOP.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Traffic Signals, Solid Red Light",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "signal-red-arrow",
    quote:
      "A red arrow means STOP. Do not turn at a red arrow.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Traffic Signals, Red Arrow",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "signal-flashing-red",
    quote: "A flashing red signal light means STOP. After stopping, you may go when it is safe.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Traffic Signals, Flashing Red Light",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "signal-yellow",
    quote:
      "A yellow traffic signal light means CAUTION. The light is about to turn red.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Traffic Signals, Solid Yellow Light",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "signal-flashing-yellow",
    quote:
      "A flashing yellow traffic signal light is a warning to PROCEED WITH CAUTION. Slow down and be alert.",
    source: SOURCE,
    section:
      "Section 7: Laws and Rules of the Road - Traffic Signals, Flashing Yellow Light",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "signal-green",
    quote:
      "A green traffic signal light means GO. You should still stop for any vehicle, bicyclist, or pedestrian in the intersection.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Traffic Signals, Solid Green Light",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "signal-not-working",
    quote:
      "When a traffic light is not working, stop as if the intersection is controlled by STOP signs in all directions. Then proceed cautiously when it is safe to do so.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Traffic Light Not Working",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "signal-inoperative-cvc",
    quote:
      "The driver of any vehicle approaching an intersection which has official traffic control signals that are inoperative shall stop at the intersection, and may proceed with caution when it is safe to do so.",
    source: "California Vehicle Code s.21800",
    section: "CVC 21800(d)(1) - Right-of-Way",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=21800.",
  },
  {
    key: "turn-right-on-red",
    quote:
      "You may turn right at a red light after a complete stop unless there is a No Turn on Red sign.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads - Right Turn Against a Red Light",
    url: `${HB}/navigating-the-roads/`,
  },
  {
    key: "turn-left-on-red-one-way",
    quote:
      "You may turn left against a red light when you are turning from a one-way street onto a one-way street. Make sure there is no sign prohibiting the turn.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads - Left Turn Against a Red Light",
    url: `${HB}/navigating-the-roads/`,
  },
  {
    key: "turn-left-on-red-cvc",
    quote:
      "Except when a sign is in place prohibiting a turn, a driver, after stopping as required by subdivision (a), facing a steady circular red signal, may turn right, or turn left from a one-way street onto a one-way street.",
    source: "California Vehicle Code s.21453",
    section: "CVC 21453(b) - Offenses Relating to Traffic Devices",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=21453.",
  },

  // ----------------------------------------------------- pavement markings
  {
    key: "marking-solid-yellow-single",
    quote:
      "A single solid yellow line marks the center of a road with two-way traffic. Do not pass a vehicle in front of you if there is only one lane of traffic going your direction and a solid yellow line on your side of the road.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads - Single Solid Yellow Line",
    url: `${HB}/navigating-the-roads/`,
  },
  {
    key: "marking-double-yellow",
    quote: "Do not pass over double solid yellow lines.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads - Double Solid Yellow Lines",
    url: `${HB}/navigating-the-roads/`,
  },
  {
    key: "marking-broken-yellow",
    quote:
      "A broken yellow line indicates you may pass if the broken line is next to your driving lane. Only pass when it is safe.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads - Broken Yellow Line",
    url: `${HB}/navigating-the-roads/`,
  },
  {
    key: "marking-solid-white",
    quote:
      "A single solid white line marks traffic lanes going in the same direction. This includes one-way streets.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads - Single Solid White Line",
    url: `${HB}/navigating-the-roads/`,
  },
  {
    key: "marking-double-white",
    quote:
      "Never change lanes over double solid white lines. Wait until you see a single broken white line.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads - Double Solid White Lines",
    url: `${HB}/navigating-the-roads/`,
  },
  {
    key: "hov-lane-diamond",
    quote:
      "The road surface in a HOV lane is marked with a diamond symbol and the words Carpool Lane. Do not cross over double solid lines to enter or exit an HOV lane.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads - Carpool/High-Occupancy Vehicle (HOV) Lanes",
    url: `${HB}/navigating-the-roads/`,
  },
  {
    key: "center-left-turn-lane",
    quote:
      "It is not a regular traffic lane or passing lane. You may only drive for 200 feet in the center left turn lane.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads - Center Left Turn Lanes",
    url: `${HB}/navigating-the-roads/`,
  },

  // ---------------------------------------------------------------- turns
  {
    key: "turn-left-complete",
    quote:
      "Proceed into the intersection while turning to complete your turn in the left lane.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads - Left Turns",
    url: `${HB}/navigating-the-roads/`,
  },
  {
    key: "signal-100-feet",
    quote: "At least 100 feet before you turn.",
    source: SOURCE,
    section:
      "Section 5: An Introduction to Driving - Signaling (list of when you should signal)",
    url: `${HB}/introduction-to-driving/`,
  },
  {
    key: "signal-lane-change-freeway",
    quote: "At least five seconds before you change lanes on a freeway.",
    source: SOURCE,
    section:
      "Section 5: An Introduction to Driving - Signaling (list of when you should signal)",
    url: `${HB}/introduction-to-driving/`,
  },
  {
    key: "uturn-residential",
    quote: "In a residential district if no vehicles are approaching you within 200 feet.",
    source: SOURCE,
    section:
      "Section 6: Navigating the Roads - U-TURN (list of places you may make a U-turn)",
    url: `${HB}/navigating-the-roads/`,
  },
  {
    key: "uturn-green-light",
    quote:
      "At an intersection on a green traffic light or green arrow, unless a NO U-TURN sign is posted.",
    source: SOURCE,
    section:
      "Section 6: Navigating the Roads - U-TURN (list of places you may make a U-turn)",
    url: `${HB}/navigating-the-roads/`,
  },
  {
    key: "uturn-prohibited",
    quote: "In front of a fire station. Never use a fire station driveway to turn around.",
    source: SOURCE,
    section:
      "Section 6: Navigating the Roads - U-TURN (list of places to never make a U-turn)",
    url: `${HB}/navigating-the-roads/`,
  },
  {
    key: "uturn-business-exception",
    quote:
      "Except at an intersection, or on a divided highway where an opening has been provided.",
    source: SOURCE,
    section:
      "Section 6: Navigating the Roads - U-TURN (closing item of the list of places to never make a U-turn, which includes business districts)",
    url: `${HB}/navigating-the-roads/`,
  },

  // -------------------------------------------------------- right-of-way
  {
    key: "row-first-arrival",
    quote:
      "The vehicle that arrives to the intersection first has the right-of-way. Other vehicles, bicyclists, and pedestrians must wait for the person who has the right-of-way.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Right-of-Way Rules: Who Goes First?",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "row-same-time-right",
    quote:
      "However, if a vehicle, pedestrian, or bicyclist gets to the intersection at the same time as you, give the right-of-way to the vehicle, pedestrian, or bicyclist on your right.",
    source: SOURCE,
    section:
      "Section 7: Laws and Rules of the Road - Intersections, Without STOP or YIELD signs",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "row-t-intersection",
    quote:
      "T intersections without STOP or YIELD signs: Vehicles, bicyclists, and pedestrians on the through road (continuing to go straight) have the right-of-way.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Intersections",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "row-turning-left",
    quote:
      "Turning left: Check for pedestrians. Give the right-of-way to any pedestrian or approaching vehicle that is close enough to be dangerous.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Intersections",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "row-entering-traffic",
    quote:
      "When entering traffic, you must proceed with caution and yield to the traffic already occupying the lanes. It is against the law to stop or block an intersection where there is not enough space to completely cross before the traffic signal light turns red.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Intersections, Entering traffic",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "roundabout-yield",
    quote: "Slow down as you approach. Yield to all traffic already in the roundabout.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Roundabouts",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "mountain-road-uphill",
    quote:
      "If two vehicles meet on a steep narrow road and neither vehicle can pass, the vehicle facing uphill has the right-of-way. The vehicle facing downhill has more control when backing up the hill.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Mountain Roads",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },

  // ------------------------------------------------------- emergency, move over
  {
    key: "emergency-vehicle-yield",
    quote:
      "Give the right-of-way to any law enforcement vehicle, fire engine, ambulance, or other emergency vehicle using a siren and red lights.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road (Continued) - Emergency Vehicles",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "emergency-vehicle-300-feet",
    quote:
      "It is against the law to follow within 300 feet of any fire engine, law enforcement vehicle, ambulance, or other emergency vehicle when their siren or flashing lights are on.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road (Continued) - Emergency Vehicles",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "move-over-slow-down",
    quote:
      "When approaching a stationary emergency vehicle with flashing emergency signal lights (hazard lights), move over and slow down.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road (Continued) - Emergency Vehicles",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },

  // ---------------------------------------------------------- pedestrians
  {
    key: "pedestrian-crossing",
    quote:
      "When there is a pedestrian crossing a roadway with or without a crosswalk, you must use caution, reduce your speed, or stop to allow the pedestrian to safely finish crossing.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Pedestrians",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "crosswalk-row",
    quote:
      "Pedestrians have the right-of-way in marked or unmarked crosswalks. If there is a limit line before the crosswalk, stop at the limit line and allow pedestrians to cross the street.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Crosswalks",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "crosswalk-no-passing",
    quote:
      "Do not pass a vehicle stopped at a crosswalk. You may not be able to see a pedestrian crossing the street.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Pedestrians",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },
  {
    key: "pedestrian-blind",
    quote: "Pedestrians using guide dogs or white canes have the right-of-way at all times.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road - Pedestrians who are Blind",
    url: `${HB}/laws-and-rules-of-the-road/`,
  },

  // -------------------------------------------------- schools and school buses
  {
    key: "school-zone-speed",
    quote:
      "The speed limit is 25 mph within 500 feet of a school while children are outside or crossing the street. Some school zones may have speed limits as low as 15 mph.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road (Continued) - Around Children",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "school-bus-red-lights",
    quote:
      "When the bus flashes red lights (located at the top, front, and back of the bus), you must stop from either direction until the children are safely across the street and the lights stop flashing.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road (Continued) - Around Children",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "school-bus-amber",
    quote:
      "Some school buses flash yellow lights when preparing to stop to let children off the bus. The yellow flashing lights warn you to slow down and prepare to stop.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road (Continued) - Around Children",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "school-bus-divided-highway",
    quote:
      "If the school bus is on the other side of a divided or multilane highway (two or more lanes in each direction), you do not need to stop.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road (Continued) - Around Children",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },

  // ---------------------------------------------------------------- speed
  {
    key: "basic-speed-law",
    quote:
      "In California, you may never drive faster than is safe for the current road conditions. This is known as the Basic Speed Law.",
    source: SOURCE,
    section: "Section 8: Safe Driving (Continued) - Manage Your Speed",
    url: `${HB}/safe-driving-cont2/`,
  },
  {
    key: "speed-max-highways",
    quote:
      "Unless otherwise posted, the ideal maximum speed limit on most California highways is 65 mph. It is 55 mph on a two-lane undivided highway and for vehicles towing trailers.",
    source: SOURCE,
    section: "Section 8: Safe Driving (Continued) - Manage Your Speed",
    url: `${HB}/safe-driving-cont2/`,
  },
  {
    key: "speed-business-residential",
    quote: "The speed limit is 25 mph, unless otherwise posted.",
    source: SOURCE,
    section:
      "Section 7: Laws and Rules of the Road (Continued) - Business or Residential Districts",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "speed-blind-intersection",
    quote:
      "If your view is blocked, move slowly forward until you can see. The speed limit for a blind intersection is 15 mph.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road (Continued) - Blind Intersections",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "speed-too-slow",
    quote:
      "At the same time, you should not block normal and reasonable traffic flow by driving too slowly. If you drive faster or slower than the speed limit, you may be cited.",
    source: SOURCE,
    section:
      "Section 7: Laws and Rules of the Road (Continued) - Heavy Traffic or Bad Weather",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "speed-alley",
    quote: "The speed limit in an alley is 15 mph.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road (Continued) - Alleys",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "speed-railroad",
    quote:
      "The speed limit is 15 mph within 100 feet of a railroad crossing and you cannot see the tracks for 400 feet in both directions. You may drive faster than 15 mph if the crossing is controlled by gates, a warning signal, or a flagman.",
    source: SOURCE,
    section:
      "Section 7: Laws and Rules of the Road (Continued) - Near Railroad or Light Rail Tracks",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "speed-visibility-100-feet",
    quote:
      "In a heavy rainstorm or snowstorm, you may not be able to see more than 100 feet in front of your vehicle. If you cannot see farther than 100 feet, it is not safe to drive faster than 30 mph.",
    source: SOURCE,
    section: "Section 8: Safe Driving - Slippery Roads",
    url: `${HB}/safe-driving/`,
  },
  {
    key: "speed-packed-snow",
    quote: "Packed snow: Reduce your speed by half.",
    source: SOURCE,
    section: "Section 8: Safe Driving - Slippery Roads (adjust your speed for conditions)",
    url: `${HB}/safe-driving/`,
  },
  {
    key: "speed-ice",
    quote: "Ice: Reduce your speed to no more than 5 mph.",
    source: SOURCE,
    section: "Section 8: Safe Driving - Slippery Roads (adjust your speed for conditions)",
    url: `${HB}/safe-driving/`,
  },
  {
    key: "speed-safety-zone",
    quote:
      "When a bus, streetcar, or trolley is stopped at a safety zone or traffic light, you may pass at no more than 10 mph.",
    source: SOURCE,
    section:
      "Section 7: Laws and Rules of the Road (Continued) - Buses, Streetcars, Trolleys",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "turnout-five-vehicles",
    quote:
      "You must use a turnout area or lane to let other vehicles pass when you are driving slowly on a two-lane road, where passing is unsafe, and there are five or more vehicles following you.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads - Turnout Areas or Lanes",
    url: `${HB}/navigating-the-roads/`,
  },

  // --------------------------------------------------------- safe driving
  {
    key: "three-second-rule",
    quote:
      "Use the three-second rule to ensure a safe following distance and avoid a collision. Following other vehicles at a safe distance gives you enough time to react if another driver makes a mistake.",
    source: SOURCE,
    section: "Section 8: Safe Driving - Tailgating (Following Too Closely)",
    url: `${HB}/safe-driving/`,
  },
  {
    key: "scan-10-seconds",
    quote:
      "To give yourself time to react, avoid last minute moves and hazards, always keep your eyes moving and scan the road at least 10 seconds ahead of your vehicle.",
    source: SOURCE,
    section: "Section 8: Safe Driving - Scan Your Surroundings",
    url: `${HB}/safe-driving/`,
  },
  {
    key: "lane-change-shoulder-check",
    quote:
      "Look over your shoulder in the direction you plan to move to make sure the lane is clear.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads - Changing Lanes",
    url: `${HB}/navigating-the-roads/`,
  },
  {
    key: "headlights-when",
    quote: "Beginning 30 minutes after sunset. Until 30 minutes before sunrise.",
    source: SOURCE,
    section:
      "Section 5: An Introduction to Driving - Using Your Headlights (list of when to use headlights)",
    url: `${HB}/introduction-to-driving/`,
  },
  {
    key: "headlights-dim-distance",
    quote:
      "Dim your high-beam headlights to low beams within 500 feet of a vehicle coming toward you or within 300 feet of a vehicle you are following.",
    source: SOURCE,
    section: "Section 5: An Introduction to Driving - Using Your Headlights",
    url: `${HB}/introduction-to-driving/`,
  },
  {
    key: "headlights-mountain-roads",
    quote: "On mountain roads and tunnels (even on sunny days).",
    source: SOURCE,
    section:
      "Section 5: An Introduction to Driving - Using Your Headlights (list of when to use headlights)",
    url: `${HB}/introduction-to-driving/`,
  },
  {
    key: "headlights-fog",
    quote:
      "Use your low-beam headlights. High-beam headlights will reflect back and cause glare.",
    source: SOURCE,
    section: "Section 8: Safe Driving - Fog or Heavy Smoke",
    url: `${HB}/safe-driving/`,
  },
  {
    key: "headlights-glare",
    quote:
      "Do not look directly into the oncoming headlights. Look toward the right edge of your lane.",
    source: SOURCE,
    section:
      "Section 8: Safe Driving - Darkness (if another vehicle's lights are too bright)",
    url: `${HB}/safe-driving/`,
  },
  {
    key: "skid-recovery",
    quote: "Do not use the brakes. Turn the steering wheel in the direction of the skid.",
    source: SOURCE,
    section: "Section 8: Safe Driving - Slippery Surface Skids",
    url: `${HB}/safe-driving/`,
  },
  {
    key: "hydroplaning",
    quote:
      "Hydroplaning is a vehicle riding on water because the tires lose all contact with the road.",
    source: SOURCE,
    section: "Section 8: Safe Driving - Hydroplaning",
    url: `${HB}/safe-driving/`,
  },
  {
    key: "rain-first-slippery",
    quote:
      "Slow down at the first sign of rain, drizzle, or snow on the road. This is especially true if it has been dry and hot for some time, because oil and dust on the road's surface have not been washed away.",
    source: SOURCE,
    section: "Section 8: Safe Driving - Slippery Roads",
    url: `${HB}/safe-driving/`,
  },
  {
    key: "stopping-behind-vehicle",
    quote: "If stopping behind a vehicle, leave enough space to see their rear wheels.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads - Braking",
    url: `${HB}/navigating-the-roads/`,
  },
  {
    key: "freeway-disabled",
    quote:
      "Exit on the right side so you are away from traffic if you must get out of the vehicle.",
    source: SOURCE,
    section:
      "Section 8: Safe Driving (Continued) - If Your Vehicle Becomes Disabled on the Freeway",
    url: `${HB}/safe-driving-cont2/`,
  },
  {
    key: "tire-blowout",
    quote: "Hold the steering wheel with both hands.",
    source: SOURCE,
    section:
      "Section 8: Safe Driving (Continued) - Tire Blowout (steps recommended by the National Highway Traffic Safety Administration)",
    url: `${HB}/safe-driving-cont2/`,
  },
  {
    key: "off-pavement",
    quote: "Grip the steering wheel firmly. Remove your foot from the accelerator.",
    source: SOURCE,
    section:
      "Section 8: Safe Driving (Continued) - Driving Off the Pavement (if your wheels drift off the pavement)",
    url: `${HB}/safe-driving-cont2/`,
  },
  {
    key: "carbon-monoxide",
    quote:
      "Carbon monoxide is a deadly odorless gas released from a vehicle's exhaust pipe. Never start your vehicle inside the garage with the door closed.",
    source: SOURCE,
    section: "Section 8: Safe Driving (Continued) - Be Aware of Carbon Monoxide",
    url: `${HB}/safe-driving-cont2/`,
  },

  // -------------------------------------------------------------- parking
  {
    key: "curb-white",
    quote: "White: Stop only long enough to pick up or drop off passengers.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads (Continued) - Parking at Colored Curbs",
    url: `${HB}/navigating-the-roads-cont1/`,
  },
  {
    key: "curb-green",
    quote:
      "Green: Park for a limited time. The time limit may be posted on signs or painted on the curb.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads (Continued) - Parking at Colored Curbs",
    url: `${HB}/navigating-the-roads-cont1/`,
  },
  {
    key: "curb-yellow",
    quote:
      "Yellow: Load and unload passengers and freight. Do not stop longer than the time posted.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads (Continued) - Parking at Colored Curbs",
    url: `${HB}/navigating-the-roads-cont1/`,
  },
  {
    key: "curb-red",
    quote:
      "Red: No stopping, standing, or parking. Buses may stop at a red zone marked for buses only.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads (Continued) - Parking at Colored Curbs",
    url: `${HB}/navigating-the-roads-cont1/`,
  },
  {
    key: "curb-blue",
    quote:
      "Blue: Parking for a disabled person or someone driving a disabled person with a special placard or special license plate.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads (Continued) - Parking at Colored Curbs",
    url: `${HB}/navigating-the-roads-cont1/`,
  },
  {
    key: "hill-downhill-curb",
    quote: "Headed downhill: Turn your front wheels into the curb or right toward the side of the road.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads (Continued) - Parking on a Hill",
    url: `${HB}/navigating-the-roads-cont1/`,
  },
  {
    key: "hill-uphill-curb",
    quote:
      "Headed uphill: Turn your front wheels away from the curb (left-towards the center of the road) and let your vehicle roll back a few inches. The wheel should gently touch the curb.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads (Continued) - Parking on a Hill",
    url: `${HB}/navigating-the-roads-cont1/`,
  },
  {
    key: "hill-no-curb",
    quote:
      "Headed either uphill or downhill when there is no curb: Turn the wheels to the right so the vehicle will roll away from the center of the road if the brakes fail.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads (Continued) - Parking on a Hill",
    url: `${HB}/navigating-the-roads-cont1/`,
  },
  {
    key: "parking-hydrant",
    quote: "Within 15 feet of a fire hydrant or fire station driveway.",
    source: SOURCE,
    section:
      "Section 6: Navigating the Roads (Continued) - Illegal Parking (never park or leave your vehicle)",
    url: `${HB}/navigating-the-roads-cont1/`,
  },
  {
    key: "parking-crosswalk",
    quote:
      "Within 20 feet of an unmarked or marked crosswalk, or within 15 feet of a crosswalk where a curb extension is present.",
    source: SOURCE,
    section:
      "Section 6: Navigating the Roads (Continued) - Illegal Parking (never park or leave your vehicle)",
    url: `${HB}/navigating-the-roads-cont1/`,
  },
  {
    key: "parking-crosshatch-disabled",
    quote:
      "In the crosshatched (diagonal lines) area next to a designated disabled parking space.",
    source: SOURCE,
    section:
      "Section 6: Navigating the Roads (Continued) - Illegal Parking (never park or leave your vehicle)",
    url: `${HB}/navigating-the-roads-cont1/`,
  },
  {
    key: "parking-brake",
    quote: "Turn off your vehicle and set the parking brake.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads (Continued) - Parallel Parking",
    url: `${HB}/navigating-the-roads-cont1/`,
  },
  {
    key: "exit-vehicle-check",
    quote:
      "Before you exit your vehicle, look carefully for passing vehicles, bicycles, and motorcycles.",
    source: SOURCE,
    section: "Section 6: Navigating the Roads (Continued) - Parallel Parking",
    url: `${HB}/navigating-the-roads-cont1/`,
  },
  {
    key: "parking-wrong-direction-cvc",
    quote:
      "This subdivision does not permit a vehicle to stop or park upon a roadway in a direction opposite to that in which traffic normally moves.",
    source: "California Vehicle Code s.22502",
    section: "CVC 22502(b)(2) - Stopping, Standing, and Parking",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=22502.",
  },
  {
    key: "parking-sidewalk-driveway",
    quote: "On a sidewalk, partially blocking a sidewalk, or in front of a driveway.",
    source: SOURCE,
    section:
      "Section 6: Navigating the Roads (Continued) - Illegal Parking (never park or leave your vehicle)",
    url: `${HB}/navigating-the-roads-cont1/`,
  },

  // ------------------------------------------------------- sharing the road
  {
    key: "bicycle-3-feet",
    quote:
      "When you cannot change lanes to pass a bicyclist, allow at least three feet between your vehicle and the bicyclist. If you cannot give three feet of space, do not pass the cyclist until three feet of clearance can be given.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road (Continued) - Passing a Bicyclist",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "bike-lane-200-feet",
    quote: "Enter a bike lane no more than 200 feet before starting a turn.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road (Continued) - Passing a Bicyclist",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "light-rail-pass-left",
    quote:
      "Do not overtake and pass a light rail vehicle or streetcar on the left side, whether it is moving or standing, unless:",
    source: SOURCE,
    section:
      "Section 7: Laws and Rules of the Road (Continued) - Buses, Streetcars, Trolleys (three exceptions are listed in the handbook immediately below this sentence)",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "motorcycle-lane-splitting",
    quote:
      "Whenever possible, give a motorcycle the full lane. It is legal to share lanes with motorcycles, this is known as lane splitting.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road (Continued) - Motorcycles",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "motorcycle-following-distance",
    quote:
      "Allow a safe three-second following distance. This space will help you avoid hitting a motorcyclist if they brake suddenly or fall.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road (Continued) - Motorcycles",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "truck-blind-spots",
    quote:
      "In these areas, your vehicle can disappear from a large vehicle or truck driver's view. If you cannot see the truck's side mirrors, the truck driver cannot see you.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road (Continued) - Blind Spots (the No Zone)",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "truck-wide-turns",
    quote:
      "This is why large vehicles and truck drivers must often swing wide to complete a turn. When you follow a large vehicle, look at its turn signals before you start to pass.",
    source: SOURCE,
    section: "Section 7: Laws and Rules of the Road (Continued) - Turning",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },

  // -------------------------------------------------------- passing rules

  // ------------------------------------------------------------- railroad
  {
    key: "railroad-flashing-red",
    quote:
      "Flashing red warning lights indicate you must stop and wait. Do not proceed over the railroad tracks until the red lights stop flashing, even if the gate rises.",
    source: SOURCE,
    section:
      "Section 7: Laws and Rules of the Road (Continued) - Near Railroad or Light Rail Tracks",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "railroad-stop-15-feet",
    quote:
      "When the crossing devices or a person warns you a train is coming, stop at least 15 feet from the nearest track.",
    source: SOURCE,
    section:
      "Section 7: Laws and Rules of the Road (Continued) - Near Railroad or Light Rail Tracks",
    url: `${HB}/laws-and-rules-of-the-road-cont1/`,
  },
  {
    key: "railroad-stalled-train-coming",
    quote:
      "Immediately exit your vehicle. Run away from the tracks diagonally in the direction the train is coming from.",
    source: SOURCE,
    section: "Section 8: Safe Driving (Continued) - Disabled Vehicles on Railroad Tracks",
    url: `${HB}/safe-driving-cont2/`,
  },
  {
    key: "railroad-stalled-no-train",
    quote:
      "Exit your vehicle. Dial the number located on the railroad crossing posts or metal control box near the tracks.",
    source: SOURCE,
    section:
      "Section 8: Safe Driving (Continued) - Disabled Vehicles on Railroad Tracks (if you do not see a train approaching and warning lights are not flashing)",
    url: `${HB}/safe-driving-cont2/`,
  },

  // ------------------------------------------------------ alcohol and drugs
  {
    key: "bac-21-and-over",
    quote: "0.08% or higher if you are over 21 years old.",
    source: SOURCE,
    section:
      "Section 9: Alcohol and Drugs - Blood Alcohol Concentration (BAC) Limits (it is illegal for you to drive if you have a BAC of)",
    url: `${HB}/alcohol-and-drugs/`,
  },
  {
    key: "bac-under-21",
    quote: "0.01% or higher if you are under 21 years old.",
    source: SOURCE,
    section:
      "Section 9: Alcohol and Drugs - Blood Alcohol Concentration (BAC) Limits (it is illegal for you to drive if you have a BAC of)",
    url: `${HB}/alcohol-and-drugs/`,
  },
  {
    key: "bac-dui-probation",
    quote: "0.01% or higher at any age if you are on DUI probation.",
    source: SOURCE,
    section:
      "Section 9: Alcohol and Drugs - Blood Alcohol Concentration (BAC) Limits (it is illegal for you to drive if you have a BAC of)",
    url: `${HB}/alcohol-and-drugs/`,
  },
  {
    key: "bac-commercial",
    quote: "0.04% or higher if you drive a vehicle that requires a commercial driver's license.",
    source: SOURCE,
    section:
      "Section 9: Alcohol and Drugs - Blood Alcohol Concentration (BAC) Limits (it is illegal for you to drive if you have a BAC of)",
    url: `${HB}/alcohol-and-drugs/`,
  },
  {
    key: "implied-consent",
    quote:
      "When you drive in California, you consent to a breath, blood, or urine test if a law enforcement officer suspects you of DUI.",
    source: SOURCE,
    section: "Section 9: Alcohol and Drugs - DUI Arrests",
    url: `${HB}/alcohol-and-drugs/`,
  },
  {
    key: "chemical-test-refusal",
    quote:
      "If a law enforcement officer thinks you are driving while under the influence of drugs or alcohol, they have the right to ask you to take a blood or urine test. If you refuse to take one, DMV will suspend or revoke your driving privilege for one year.",
    source: SOURCE,
    section: "Section 9: Alcohol and Drugs",
    url: `${HB}/alcohol-and-drugs/`,
  },
  {
    key: "dui-hearing-10-days",
    quote:
      "You may request a DMV administrative hearing within 10 days from the date of your arrest.",
    source: SOURCE,
    section: "Section 9: Alcohol and Drugs - DUI Arrests",
    url: `${HB}/alcohol-and-drugs/`,
  },
  {
    key: "dui-record-10-years",
    quote: "All DUI convictions remain on your driver's record for 10 years.",
    source: SOURCE,
    section: "Section 9: Alcohol and Drugs - DUI Convictions",
    url: `${HB}/alcohol-and-drugs/`,
  },
  {
    key: "drugs-prescription",
    quote:
      "The law does not see a difference between illegal drugs and medications you get from a doctor or pharmacy. They can all affect your ability to drive safely and react to what you see and hear.",
    source: SOURCE,
    section: "Section 9: Alcohol and Drugs",
    url: `${HB}/alcohol-and-drugs/`,
  },
  {
    key: "open-container",
    quote:
      "If you are carrying any alcohol or cannabis in your vehicle, the container must be sealed and unopened. If it is open, you must keep the container in the trunk or place where passengers do not sit.",
    source: SOURCE,
    section:
      "Section 9: Alcohol and Drugs - Use or Possession of Alcohol or Cannabis Products in a Vehicle",
    url: `${HB}/alcohol-and-drugs/`,
  },

  // ------------------------------------------------- licensing and devices
  {
    key: "provisional-night",
    quote: "Between 11 p.m. and 5 a.m. during the first 12 months you have your license.",
    source: SOURCE,
    section:
      "Section 2: Getting an Instruction Permit and Driver's License - Minor's Restrictions and Exceptions (as a provisional driver, you cannot drive)",
    url: `${HB}/getting-an-instruction-permit-and-drivers-license/`,
  },
  {
    key: "provisional-passengers",
    quote:
      "With passengers under 20 years old, unless your parent or guardian or other California-licensed driver (at least 25 years old) rides with you.",
    source: SOURCE,
    section:
      "Section 2: Getting an Instruction Permit and Driver's License - Minor's Restrictions and Exceptions (as a provisional driver, you cannot drive)",
    url: `${HB}/getting-an-instruction-permit-and-drivers-license/`,
  },
  {
    key: "cell-phone-handheld",
    quote: "Driving while using a handheld cell phone is unsafe and illegal.",
    source: SOURCE,
    section: "Section 8: Safe Driving (Continued) - Cell Phones and Texting",
    url: `${HB}/safe-driving-cont2/`,
  },
  {
    key: "minor-cell-phone",
    quote:
      "It is against the law for a minor to use a cell phone or electronic wireless device to answer calls and send or respond to text messages while driving.",
    source: SOURCE,
    section: "Section 8: Safe Driving (Continued) - Minors And Cell Phones",
    url: `${HB}/safe-driving-cont2/`,
  },

  {
    key: "insurance-minimums",
    quote: "$15,000 for property damage.",
    source: SOURCE,
    section:
      "Section 10: Financial Responsibility, Insurance Requirements, and Collisions - Insurance Requirements (your insurance must cover at least)",
    url: `${HB}/financial-responsibility-insurance-requirements-and-collisions/`,
  },

  // ------------------------------------------------------------ collisions
  {
    key: "collision-report-sr1",
    quote:
      "Each driver must file a Report of Traffic Accident Occurring in California (SR 1) with DMV at dmv.ca.gov/accidentreport. You (or your representative) must file a report whether or not you caused the collision.",
    source: SOURCE,
    section:
      "Section 10: Financial Responsibility, Insurance Requirements, and Collisions - Reporting a Collision",
    url: `${HB}/financial-responsibility-insurance-requirements-and-collisions/`,
  },

  {
    key: "collision-parked-car",
    quote:
      "Try to find the owner if your vehicle hits or rolls into a parked car or other property. If you cannot find the owner, leave a note with your name, phone number, and address.",
    source: SOURCE,
    section:
      "Section 10: Financial Responsibility, Insurance Requirements, and Collisions - What to Do if You Are in a Collision",
    url: `${HB}/financial-responsibility-insurance-requirements-and-collisions/`,
  },

  // ------------------------------------------------- belts and child seats
  {
    key: "seat-belts",
    quote: "You and your passengers must wear seat belts. You can get a ticket if you do not.",
    source: SOURCE,
    section: "Section 8: Safe Driving (Continued) - Seat Belts",
    url: `${HB}/safe-driving-cont1/`,
  },
  {
    key: "child-restraint",
    quote:
      "Children who are under 8 years old, or who are less than 4 feet 9 inches tall: Secure in a child passenger restraint system in a rear seat.",
    source: SOURCE,
    section: "Section 8: Safe Driving (Continued) - Child Restraint System and Safety Seats",
    url: `${HB}/safe-driving-cont1/`,
  },
  {
    key: "how-to-pass",
    quote:
      "Signal that you plan on passing. Look over your shoulder to check your blind spots. Drive into the passing lane. Speed up to pass the vehicle. Signal and return to your original lane.",
    source: "California Driver's Handbook (dmv.ca.gov)",
    section: "Navigating the Roads - How to Pass",
    url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads/",
  },
];
