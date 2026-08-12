import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the free Official MTO Driver's Handbook pages on
// ontario.ca, plus a few ontario.ca policy pages where the handbook is silent on
// the penalty side of a rule.
//
// Every `quote` below was read off the live ontario.ca page named in `url`.
// Nothing here is paraphrased, merged from separate paragraphs, or taken from a
// printed or paid edition. Curly quotes and apostrophes in the source have been
// rendered as straight ASCII; no words were changed.

const HB = "https://www.ontario.ca/document/official-mto-drivers-handbook";
const HANDBOOK = "Official MTO Driver's Handbook (ontario.ca)";

export const ontarioExcerpts: HandbookExcerpt[] = [
  // ---------------------------------------------------------------- signs ---
  {
    key: "stop-sign",
    quote:
      "A stop sign is eight-sided and has a red background with white letters. It means you must come to a complete stop.",
    source: HANDBOOK,
    section: "Signs",
    url: `${HB}/signs`,
  },
  {
    key: "stop-sign-position",
    quote:
      "Stop at the stop line if it is marked on the pavement. If there is no stop line, stop at the crosswalk.",
    source: HANDBOOK,
    section: "Signs",
    url: `${HB}/signs`,
  },
  {
    key: "yield-sign",
    quote:
      "A yield sign is a triangle with a white background and a red border. It means you must let traffic in the intersection or close to it go first.",
    source: HANDBOOK,
    section: "Signs",
    url: `${HB}/signs`,
  },
  {
    key: "school-zone-sign",
    quote:
      "A school zone sign is five-sided and has a fluorescent yellow/green background with black symbols. It warns that you are coming to a school zone.",
    source: HANDBOOK,
    section: "Signs",
    url: `${HB}/signs`,
  },
  {
    key: "railway-crossing-sign",
    quote:
      "A railway crossing sign is X-shaped with a white background and red outline. It warns that railway tracks cross the road.",
    source: HANDBOOK,
    section: "Signs",
    url: `${HB}/signs`,
  },
  {
    key: "regulatory-signs",
    quote:
      "These signs give a direction that must be obeyed. They are usually rectangular or square with a white or black background and black, white or coloured letters.",
    source: HANDBOOK,
    section: "Signs - Regulatory signs",
    url: `${HB}/signs`,
  },
  {
    key: "regulatory-circles",
    quote:
      "A sign with a green circle means you may or must do the activity shown inside the ring. A red circle with a line through it means the activity shown is not allowed.",
    source: HANDBOOK,
    section: "Signs - Regulatory signs",
    url: `${HB}/signs`,
  },
  {
    key: "warning-signs",
    quote:
      "These signs warn of dangerous or unusual conditions ahead such as a curve, turn, dip or sideroad. They are usually diamond-shaped and have a yellow background with black letters or symbols.",
    source: HANDBOOK,
    section: "Signs - Warning signs",
    url: `${HB}/signs`,
  },
  {
    key: "temporary-condition-signs",
    quote:
      "These signs warn of unusual temporary conditions such as road work zones, diversions, detours, lane closures or traffic control people on the road. They are usually diamond-shaped with an orange background and black letters or symbols.",
    source: HANDBOOK,
    section: "Signs - Temporary condition signs",
    url: `${HB}/signs`,
  },
  {
    key: "information-direction-signs",
    quote:
      "These signs tell you about distances and destinations. They are usually rectangular with a green background and white letters.",
    source: HANDBOOK,
    section: "Signs - Information and direction signs",
    url: `${HB}/signs`,
  },
  {
    key: "signs-other-colours",
    quote:
      "Other signs with different colours guide you to facilities, services and attractions.",
    source: HANDBOOK,
    section: "Signs - Information and direction signs",
    url: `${HB}/signs`,
  },
  {
    key: "community-safety-zone",
    quote:
      "Indicates areas where the community has identified that there is a special risk to pedestrians. Traffic related offences committed within the zone are subject to increased fines.",
    source: HANDBOOK,
    section: "Signs - Regulatory signs",
    url: `${HB}/signs`,
  },
  {
    key: "hov-lane-sign",
    quote:
      "Only public vehicles such as buses, or passenger vehicles carrying a specified minimum number of passengers, may use this lane.",
    source: HANDBOOK,
    section: "Signs - High Occupancy Vehicle (HOV) signs",
    url: `${HB}/signs`,
  },
  {
    key: "slow-moving-vehicle-sign",
    quote:
      "The \"slow-moving vehicle\" sign is an orange triangle with a red border. It alerts other drivers that the vehicle ahead will be travelling at 40 km/h or less.",
    source: HANDBOOK,
    section: "Signs - Other signs",
    url: `${HB}/signs`,
  },
  {
    key: "no-parking-sign",
    quote:
      "Do not park in the area between the signs. This means you may not stop your vehicle except to load or unload passengers or merchandise.",
    source: HANDBOOK,
    section: "Signs - Regulatory signs",
    url: `${HB}/signs`,
  },
  {
    key: "no-standing-sign",
    quote:
      "Do not stand in the area between the signs. This means you may not stop your vehicle in this area except while loading or unloading passengers.",
    source: HANDBOOK,
    section: "Signs - Regulatory signs",
    url: `${HB}/signs`,
  },
  {
    key: "school-bus-divided-highway-sign",
    quote:
      "This sign is installed on multi-lane highways with no centre median divider. It informs drivers approaching from both directions that they must stop for a school bus when its signal lights are flashing.",
    source: HANDBOOK,
    section: "Signs - Regulatory signs",
    url: `${HB}/signs`,
  },
  {
    key: "stop-ahead-sign",
    quote: "Stop sign ahead. Slow down.",
    source: HANDBOOK,
    section: "Signs - Warning signs",
    url: `${HB}/signs`,
  },
  {
    key: "hov-no-lane-change-sign",
    quote:
      "Vehicles cannot change lanes into or out of a high-occupancy vehicle lane in this area.",
    source: HANDBOOK,
    section: "Signs - High Occupancy Vehicle (HOV) signs",
    url: `${HB}/signs`,
  },
  {
    key: "roundabout-ahead-sign",
    quote:
      "The counter-clockwise arrows show the direction of vehicle traffic within the roundabout.",
    source: HANDBOOK,
    section: "Signs - Warning signs",
    url: `${HB}/signs`,
  },
  {
    key: "chevron-sign",
    quote:
      "Chevron (arrowhead) signs are posted in groups to guide drivers around sharp curves in the road.",
    source: HANDBOOK,
    section: "Signs - Warning signs",
    url: `${HB}/signs`,
  },
  {
    key: "checkerboard-sign",
    quote:
      "Sharp turn or bend in the road in the direction of the arrow. The checkerboard border warns of danger.",
    source: HANDBOOK,
    section: "Signs - Warning signs",
    url: `${HB}/signs`,
  },
  {
    key: "curve-advisory-speed-sign",
    quote:
      "Posted under a curve warning, this sign shows the maximum safe speed for the curve.",
    source: HANDBOOK,
    section: "Signs - Warning signs",
    url: `${HB}/signs`,
  },
  {
    key: "divided-highway-begins-sign",
    quote:
      "Divided highway begins: traffic travels in both directions on separated roads ahead. Keep to the right-hand road.",
    source: HANDBOOK,
    section: "Signs - Warning signs",
    url: `${HB}/signs`,
  },
  {
    key: "divided-highway-ends-sign",
    quote:
      "Divided highway ends: traffic travels in both directions on the same road ahead. Keep to the right-hand road.",
    source: HANDBOOK,
    section: "Signs - Warning signs",
    url: `${HB}/signs`,
  },
  {
    key: "bus-yield-sign",
    quote:
      "This sign on the back of transit buses serves as a reminder to motorists of the law requiring vehicles approaching a bus stopped at a dedicated Bus Stop to yield to the bus, once the bus has signalled its intent to return to the lane.",
    source: HANDBOOK,
    section: "Signs - Regulatory signs",
    url: `${HB}/signs`,
  },
  {
    key: "school-bus-loading-zone-sign",
    quote:
      "Marks a zone within which school buses load or unload passengers without using the red alternating lights and stop arm.",
    source: HANDBOOK,
    section: "Signs - Regulatory signs",
    url: `${HB}/signs`,
  },
  {
    key: "hidden-sideroad-sign",
    quote:
      "Drivers on the sideroad at the intersection ahead don't have a clear view of traffic.",
    source: HANDBOOK,
    section: "Signs - Warning signs",
    url: `${HB}/signs`,
  },

  // -------------------------------------------------------- traffic lights ---
  {
    key: "green-light",
    quote:
      "A green light means you may turn left, go straight or turn right after yielding to vehicles and pedestrians already in the intersection. When turning left or right you must yield the right-of-way to pedestrians crossing the intersection.",
    source: HANDBOOK,
    section: "Traffic lights - Green light",
    url: `${HB}/traffic-lights`,
  },
  {
    key: "yellow-light",
    quote:
      "A yellow - or amber - light means the red light is about to appear. You must stop if you can do so safely; otherwise, go with caution.",
    source: HANDBOOK,
    section: "Traffic lights - Yellow light",
    url: `${HB}/traffic-lights`,
  },
  {
    key: "red-light",
    quote:
      "A red light means you must stop. Bring your vehicle to a complete stop at the stop line if it is marked on the pavement.",
    source: HANDBOOK,
    section: "Traffic lights - Red light",
    url: `${HB}/traffic-lights`,
  },
  {
    key: "right-turn-on-red",
    quote:
      "Unless a sign tells you not to, you may turn right on a red light only after coming to a complete stop and waiting until the way is clear.",
    source: HANDBOOK,
    section: "Traffic lights - Red light",
    url: `${HB}/traffic-lights`,
  },
  {
    key: "left-turn-on-red-one-way",
    quote:
      "You may turn left from a one-way road to a one-way road on a red light after coming to a complete stop and making sure the way is clear. Yield to pedestrians and traffic.",
    source: HANDBOOK,
    section: "Changing directions - Left turn on a red light",
    url: `${HB}/changing-directions`,
  },
  {
    key: "left-turn-complete-in-intersection",
    quote:
      "You can still turn left when the light is green, but only when the way is clear of traffic and pedestrians. If the light turns red when you are in the intersection, complete your turn when it is safe.",
    source: HANDBOOK,
    section: "Traffic lights - Simultaneous left turn",
    url: `${HB}/traffic-lights`,
  },
  {
    key: "advance-green",
    quote:
      "When you face a flashing green light or a left-pointing green arrow and a green light, you may turn left, go straight ahead or turn right from the proper lane. This is called an advanced green light because oncoming traffic still faces a red light.",
    source: HANDBOOK,
    section: "Traffic lights - Advance green light or arrow",
    url: `${HB}/traffic-lights`,
  },
  {
    key: "simultaneous-left-turn",
    quote:
      "When a left-turn green arrow is shown with a red light, you may turn left from the left-turn lane. Vehicles turning left from the opposite direction may also be making left turns because they too face a left-turn green arrow.",
    source: HANDBOOK,
    section: "Traffic lights - Simultaneous left turn",
    url: `${HB}/traffic-lights`,
  },
  {
    key: "fully-protected-left-turn",
    quote:
      "In these intersections, you may not begin turning left after the green light appears for traffic going straight ahead or turning right. If the light turns yellow while you are in the intersection, complete your turn with caution.",
    source: HANDBOOK,
    section: "Traffic lights - Fully protected left turn",
    url: `${HB}/traffic-lights`,
  },
  {
    key: "transit-priority-signal",
    quote:
      "Traffic and pedestrians must yield to public transit vehicles at a transit priority signal. The round signal is on top of a regular traffic signal and shows a white vertical bar on a dark background.",
    source: HANDBOOK,
    section: "Traffic lights - Transit priority signals",
    url: `${HB}/traffic-lights`,
  },
  {
    key: "flashing-red-light",
    quote:
      "You must come to a complete stop at a flashing red light. Move through the intersection only when it is safe.",
    source: HANDBOOK,
    section: "Traffic lights - Flashing red light",
    url: `${HB}/traffic-lights`,
  },
  {
    key: "flashing-yellow-light",
    quote:
      "A flashing yellow light means you should drive with caution when approaching and moving through the intersection.",
    source: HANDBOOK,
    section: "Traffic lights - Flashing yellow light",
    url: `${HB}/traffic-lights`,
  },
  {
    key: "blank-traffic-lights",
    quote:
      "During an electrical power loss, traffic lights at intersections will not work. Yield the right-of-way to vehicles in the intersection and to vehicles entering the intersection from your right.",
    source: HANDBOOK,
    section: "Traffic lights - Blank traffic lights",
    url: `${HB}/traffic-lights`,
  },

  // ----------------------------------------------------- pedestrian signals ---
  {
    key: "pedestrian-signals",
    quote:
      "The signal for pedestrians to walk is a white walking symbol. A flashing or steady orange hand symbol means pedestrians must not begin to cross.",
    source: HANDBOOK,
    section: "Pedestrian signals",
    url: `${HB}/pedestrian-signals`,
  },
  {
    key: "pedestrian-already-crossing",
    quote:
      "Pedestrians who have already begun to cross when the hand signal appears, should go as quickly as possible to a safe area. While they are crossing, pedestrians still have the right-of-way over vehicles.",
    source: HANDBOOK,
    section: "Pedestrian signals",
    url: `${HB}/pedestrian-signals`,
  },

  // ------------------------------------------------------ pavement markings ---
  {
    key: "line-colours",
    quote:
      "Yellow lines separate traffic travelling in opposite directions. White lines separate traffic travelling in the same direction.",
    source: HANDBOOK,
    section: "Pavement markings",
    url: `${HB}/pavement-markings`,
  },
  {
    key: "solid-line-no-passing",
    quote: "A solid line at the left of your lane means it is unsafe to pass.",
    source: HANDBOOK,
    section: "Pavement markings",
    url: `${HB}/pavement-markings`,
  },
  {
    key: "broken-line-passing",
    quote:
      "A broken line at the left of your lane means you may pass if the way is clear.",
    source: HANDBOOK,
    section: "Pavement markings",
    url: `${HB}/pavement-markings`,
  },
  {
    key: "continuity-lines",
    quote:
      "When you see continuity lines on your left side, it generally means the lane you are in is ending or exiting and that you must change lanes if you want to continue in your current direction.",
    source: HANDBOOK,
    section: "Pavement markings",
    url: `${HB}/pavement-markings`,
  },
  {
    key: "stop-line",
    quote:
      "A stop line is a single white line painted across the road at an intersection. It shows where you must stop.",
    source: HANDBOOK,
    section: "Pavement markings",
    url: `${HB}/pavement-markings`,
  },
  {
    key: "crosswalk-markings",
    quote:
      "A crosswalk is marked by two parallel white lines painted across the road. However, crosswalks at intersections are not always marked.",
    source: HANDBOOK,
    section: "Pavement markings",
    url: `${HB}/pavement-markings`,
  },
  {
    key: "crossover-markings",
    quote:
      "Pedestrian crossovers are marked by two white double parallel lines across the road with an X in each lane approaching it.",
    source: HANDBOOK,
    section: "Pavement markings",
    url: `${HB}/pavement-markings`,
  },
  {
    key: "lane-arrow",
    quote:
      "A white arrow painted on a lane means you may move only in the direction of the arrow.",
    source: HANDBOOK,
    section: "Pavement markings",
    url: `${HB}/pavement-markings`,
  },

  // ---------------------------------------------------------- driving along ---
  {
    key: "default-speed-limits",
    quote:
      "Where there are no posted speed limits, the maximum speed is 50 km/h in cities, towns and villages, and 80 km/h elsewhere.",
    source: HANDBOOK,
    section: "Driving along - Obey speed limits",
    url: `${HB}/driving-along`,
  },
  {
    key: "speed-limit-conditions",
    quote:
      "Obey the maximum speed limit posted on signs along the road, but always drive at a speed that will let you stop safely. This means driving below the maximum speed in bad weather, in heavy traffic or in construction zones.",
    source: HANDBOOK,
    section: "Driving along - Obey speed limits",
    url: `${HB}/driving-along`,
  },
  {
    key: "following-distance",
    quote:
      "A safe following distance is at least two seconds behind the vehicle in front of you. This lets you see around the vehicle ahead and gives you enough distance to stop suddenly.",
    source: HANDBOOK,
    section: "Driving along - Maintaining space",
    url: `${HB}/driving-along`,
  },
  {
    key: "keep-right",
    quote:
      "Keep to the right of the road or in the right-hand lane on multi-lane roads unless you want to turn left or pass another vehicle.",
    source: HANDBOOK,
    section: "Driving along - Keep right",
    url: `${HB}/driving-along`,
  },

  // ----------------------------------------------------------- intersections ---
  {
    key: "uncontrolled-intersection",
    quote:
      "At an intersection without signs or lights, you must yield the right-of-way to a vehicle approaching the intersection before you, and if you arrive at the same time, the vehicle approaching from the right has the right-of-way",
    source: HANDBOOK,
    section: "Driving through intersections - Yielding the right-of-way",
    url: `${HB}/driving-through-intersections`,
  },
  {
    key: "all-way-stop",
    quote:
      "At an intersection with stop signs at all corners, you must yield the right-of-way to the first vehicle to come to a complete stop. If two vehicles stop at the same time, the vehicle on the left must yield to the vehicle on the right",
    source: HANDBOOK,
    section: "Driving through intersections - Yielding the right-of-way",
    url: `${HB}/driving-through-intersections`,
  },
  {
    key: "left-turn-yield",
    quote:
      "If you are turning left, you must wait for approaching traffic to pass or turn and for pedestrians in or approaching your path to cross.",
    source: HANDBOOK,
    section: "Driving through intersections - Yielding the right-of-way",
    url: `${HB}/driving-through-intersections`,
  },
  {
    key: "driveway-yield",
    quote:
      "When entering a road from a private road or driveway, you must yield to vehicles on the road and pedestrians on the sidewalk",
    source: HANDBOOK,
    section: "Driving through intersections - Yielding the right-of-way",
    url: `${HB}/driving-through-intersections`,
  },
  {
    key: "signalling-not-right-of-way",
    quote:
      "Remember, signalling does not give you the right-of-way. You must make sure the way is clear.",
    source: HANDBOOK,
    section: "Driving through intersections - Yielding the right-of-way",
    url: `${HB}/driving-through-intersections`,
  },

  // --------------------------------------------------------------- stopping ---
  {
    key: "railway-stop-distance",
    quote:
      "If a train is coming, stop at least five metres from the nearest rail or gate. Do not cross the track until you are sure the train or trains have passed.",
    source: HANDBOOK,
    section: "Stopping - Stopping at railway crossings",
    url: `${HB}/stopping`,
  },
  {
    key: "railway-gate",
    quote:
      "Never drive around, under or through a railway gate or barrier while it is down, being lowered or being raised. It is illegal and dangerous.",
    source: HANDBOOK,
    section: "Stopping - Stopping at railway crossings",
    url: `${HB}/stopping`,
  },
  {
    key: "school-crossing-guard",
    quote:
      "Where a school-crossing guard displays a red and white stop sign, you must stop before reaching the crossing and remain stopped until all people, including the school crossing guard, have cleared the entire roadway and it is safe to proceed.",
    source: HANDBOOK,
    section: "Stopping - Stopping at school crossings",
    url: `${HB}/stopping`,
  },
  {
    key: "school-bus-red-lights",
    quote:
      "You must stop whenever you approach a stopped school bus with its upper alternating red lights flashing, regardless of whether you are behind the bus or approaching it from the front.",
    source: HANDBOOK,
    section: "Stopping - Stopping for school buses",
    url: `${HB}/stopping`,
  },
  {
    key: "school-bus-20-metres",
    quote:
      "If you are coming from behind the bus, stop at least 20 metres away. Do not go until the bus moves or the lights have stopped flashing.",
    source: HANDBOOK,
    section: "Stopping - Stopping for school buses",
    url: `${HB}/stopping`,
  },
  {
    key: "school-bus-median",
    quote:
      "If you are on a road with a median strip, only vehicles coming from behind the bus must stop.",
    source: HANDBOOK,
    section: "Stopping - Stopping for school buses",
    url: `${HB}/stopping`,
  },
  {
    key: "school-bus-any-road",
    quote:
      "You must obey the school bus law on any road, no matter how many lanes or what the speed limit. Be prepared to stop for a school bus at any time, not just within school hours.",
    source: HANDBOOK,
    section: "Stopping - Stopping for school buses",
    url: `${HB}/stopping`,
  },
  {
    key: "school-bus-stop-arm",
    quote:
      "This arm, a standard stop sign with alternating flashing red lights at top and bottom, swings out after the upper alternating red lights begin to flash. Remain stopped until the arm folds away and all lights stop flashing.",
    source: HANDBOOK,
    section: "Stopping - Stopping for school buses",
    url: `${HB}/stopping`,
  },
  {
    key: "school-bus-amber-lights",
    quote:
      "When you're driving and a school bus approaches, watch if the bus slows and flashes its overhead amber lights, which means that the bus is coming to a stop to pick-up or drop-off passengers.",
    source: "School bus safety (ontario.ca)",
    section: "Driving near school buses",
    url: "https://www.ontario.ca/page/school-bus-safety",
  },
  {
    key: "school-bus-penalty",
    quote:
      "It is illegal to fail to stop for a stopped school bus that has its red lights flashing. If you don't stop, you can be fined heavily and get six demerit points for a first offence.",
    source: HANDBOOK,
    section: "Stopping - Stopping for school buses",
    url: `${HB}/stopping`,
  },
  {
    key: "crossover-yield",
    quote:
      "Drivers including cyclists must yield the right-of-way to pedestrians in the crossover. Only when pedestrians and school crossing guards have crossed and are safely on the sidewalk can drivers and cyclists proceed.",
    source: HANDBOOK,
    section: "Stopping - Stopping for pedestrian crossovers",
    url: `${HB}/stopping`,
  },
  {
    key: "crossover-no-passing",
    quote: "You must not pass any vehicle within 30 metres of a pedestrian crossover.",
    source: HANDBOOK,
    section: "Stopping - Stopping for pedestrian crossovers",
    url: `${HB}/stopping`,
  },

  // ----------------------------------------------------- changing directions ---
  {
    key: "left-turn-position",
    quote:
      "Unless signs or pavement markings tell you not to, always begin and end a left turn in the far left lane in your direction.",
    source: HANDBOOK,
    section: "Changing directions - Left turns",
    url: `${HB}/changing-directions`,
  },
  {
    key: "left-turn-wheels-straight",
    quote:
      "When you are stopped at an intersection waiting for approaching traffic to clear, don't turn your steering wheel to the left until you can complete the turn. With your wheels turned to the left, your vehicle could be pushed into the path of oncoming traffic.",
    source: HANDBOOK,
    section: "Changing directions - Left turns",
    url: `${HB}/changing-directions`,
  },
  {
    key: "two-way-left-turn-lane",
    quote:
      "This lets left-turning vehicles from both directions wait for a chance to turn without holding up traffic.",
    source: HANDBOOK,
    section: "Changing directions - Left-turn lanes",
    url: `${HB}/changing-directions`,
  },
  {
    key: "roundabout-yield-left",
    quote:
      "Look left: Traffic in the roundabout has the right-of-way. When preparing to enter the roundabout, pay special attention to the vehicles to your left.",
    source: HANDBOOK,
    section: "Changing directions - Driving through roundabouts",
    url: `${HB}/changing-directions`,
  },
  {
    key: "roundabout-counter-clockwise",
    quote:
      "Once in the roundabout, always keep to the right of the central island and travel in a counter-clockwise direction.",
    source: HANDBOOK,
    section: "Changing directions - Driving through roundabouts",
    url: `${HB}/changing-directions`,
  },
  {
    key: "roundabout-keep-moving",
    quote:
      "Once you are in the roundabout, do not stop except to avoid a collision; you have the right-of-way over entering traffic. Do not change lanes while in the roundabout.",
    source: HANDBOOK,
    section: "Changing directions - Driving through roundabouts",
    url: `${HB}/changing-directions`,
  },
  {
    key: "roundabout-lane-choice",
    quote:
      "Use the left lane to turn left or to go straight. Use the right lane to turn right or to go straight.",
    source: HANDBOOK,
    section: "Changing directions - Driving through roundabouts",
    url: `${HB}/changing-directions`,
  },
  {
    key: "u-turn-restrictions",
    quote:
      "It is illegal to make a U-turn on a curve in the road, on or near a railway crossing or hilltop, or near a bridge or tunnel that blocks your view. Never make a U-turn unless you can see at least 150 metres in both directions.",
    source: HANDBOOK,
    section: "Changing directions - U-turn",
    url: `${HB}/changing-directions`,
  },

  // ------------------------------------------------------ changing positions ---
  {
    key: "passing-30-metres",
    quote:
      "Passing within 30 metres of a pedestrian crossover is not permitted. Passing left of a centreline is not permitted 30 metres from a bridge, viaduct or tunnel.",
    source: HANDBOOK,
    section: "Changing positions - Passing",
    url: `${HB}/changing-positions`,
  },
  {
    key: "passing-right",
    quote:
      "Most passing is done on the left. You may pass on the right on multi-lane or one-way roads and when overtaking a streetcar or a left-turning vehicle.",
    source: HANDBOOK,
    section: "Changing positions - Passing on the right",
    url: `${HB}/changing-positions`,
  },
  {
    key: "snow-plow-no-passing",
    quote:
      "Never overtake and pass another vehicle unless you are sure you can do so without danger to yourself or others. Don't pass moving snow plows under any conditions.",
    source: HANDBOOK,
    section: "Changing positions - Passing",
    url: `${HB}/changing-positions`,
  },
  {
    key: "streetcar-two-metres",
    quote:
      "At streetcar stops, stay at least two metres behind the rear doors where passengers are getting off or on.",
    source: HANDBOOK,
    section: "Changing positions - Passing streetcars",
    url: `${HB}/changing-positions`,
  },

  // ---------------------------------------------------------------- sharing ---
  {
    key: "cyclist-one-metre",
    quote:
      "When passing a cyclist, drivers of motor vehicles must maintain a minimum distance of one metre, where practical between their vehicle and the cyclist.",
    source: HANDBOOK,
    section: "Sharing the road with other road users - Sharing the road with cyclists",
    url: `${HB}/sharing-road-other-road-users`,
  },
  {
    key: "cyclist-passing-penalty",
    quote:
      "Failure to do so may result in a fine and an additional two demerit points on the driver's record. Whenever possible, you should change lanes to pass.",
    source: HANDBOOK,
    section: "Sharing the road with other road users - Sharing the road with cyclists",
    url: `${HB}/sharing-road-other-road-users`,
  },
  {
    key: "cyclist-position",
    quote:
      "Bicycles and mopeds travelling at a lower speed than other traffic are expected to ride about one metre from the curb or parked cars, or as close as practical to the right-hand edge of the road when there is no curb.",
    source: HANDBOOK,
    section: "Sharing the road with other road users - Sharing the road with cyclists",
    url: `${HB}/sharing-road-other-road-users`,
  },
  {
    key: "motorcycles-full-lane",
    quote:
      "Motorcycles use a full lane; treat them like other vehicles when driving. Since many motorcycle turn signals do not automatically shut off, be careful when turning left in front of an oncoming motorcycle with its turn signal on.",
    source: HANDBOOK,
    section: "Sharing the road with other road users - Sharing the road with motorcycles and limited-speed motorcycles",
    url: `${HB}/sharing-road-other-road-users`,
  },
  {
    key: "bike-lanes",
    quote:
      "Bike lanes are reserved for cyclists. They are typically marked by a solid white line.",
    source: HANDBOOK,
    section: "Sharing the road with other road users - Sharing the road with cyclists",
    url: `${HB}/sharing-road-other-road-users`,
  },
  {
    key: "truck-blind-spots",
    quote:
      "Remember that if you can't see the driver's face in the large vehicle's side-view mirror, the driver cannot see you.",
    source: HANDBOOK,
    section: "Sharing the road with other road users - Sharing the road with large commercial vehicles",
    url: `${HB}/sharing-road-other-road-users`,
  },
  {
    key: "crossing-guard-whole-roadway",
    quote:
      "Drivers, including cyclists, must stop and yield the whole roadway at pedestrian crossovers, school crossings and other locations where there is a crossing guard.",
    source: HANDBOOK,
    section: "Sharing the road with other road users - Sharing the road with pedestrians",
    url: `${HB}/sharing-road-other-road-users`,
  },
  {
    key: "bus-bay-yield",
    quote:
      "When a bus in a bus bay begins flashing its left-turn signals, indicating that it is ready to leave the bus bay, and you are approaching in the lane adjacent to the bus bay, you must allow the bus to re-enter traffic.",
    source: HANDBOOK,
    section: "Sharing the road with other road users - Sharing the road with municipal buses",
    url: `${HB}/sharing-road-other-road-users`,
  },

  // ---------------------------------------------------------------- parking ---
  {
    key: "parking-hydrant",
    quote:
      "Do not park within three metres of a fire hydrant, on or within 100 metres of a bridge or within six metres of a public entrance to a hotel, theatre or public hall when it is open to the public.",
    source: HANDBOOK,
    section: "Parking along roadways",
    url: `${HB}/parking-along-roadways`,
  },
  {
    key: "parking-intersection",
    quote:
      "Do not park within nine metres of an intersection or within 15 metres if it is controlled by traffic lights.",
    source: HANDBOOK,
    section: "Parking along roadways",
    url: `${HB}/parking-along-roadways`,
  },
  {
    key: "parking-railway",
    quote:
      "Do not park within 15 metres of the nearest rail of a level railway crossing.",
    source: HANDBOOK,
    section: "Parking along roadways",
    url: `${HB}/parking-along-roadways`,
  },
  {
    key: "parking-hill-downhill",
    quote:
      "When parking facing downhill, turn your front wheels towards the curb or right shoulder.",
    source: HANDBOOK,
    section: "Parking along roadways - Parking on a hill",
    url: `${HB}/parking-along-roadways`,
  },
  {
    key: "parking-hill-uphill-no-curb",
    quote:
      "When facing uphill without a curb, turn the wheels sharply to the right.",
    source: HANDBOOK,
    section: "Parking along roadways - Parking on a hill",
    url: `${HB}/parking-along-roadways`,
  },

  // -------------------------------------------------------- getting ready ---
  {
    key: "seatbelt-required",
    quote:
      "You must use your seatbelt every time you travel in any vehicle equipped with seatbelts. All passengers must be buckled up in their own seatbelt, child car seat or booster seat.",
    source: HANDBOOK,
    section: "Getting ready to drive - Fasten your seatbelt",
    url: `${HB}/getting-ready-drive`,
  },
  {
    key: "seatbelt-under-16",
    quote:
      "Drivers may also be fined and receive demerit points if they fail to ensure that all passengers under 16 years of age are properly buckled in a seatbelt, child car seat or booster seat.",
    source: HANDBOOK,
    section: "Getting ready to drive - Fasten your seatbelt",
    url: `${HB}/getting-ready-drive`,
  },
  {
    key: "child-rear-facing-seat",
    quote:
      "Infants who weigh less than 9 kilograms (20 lbs.) must be buckled into a rear-facing child car seat attached to the vehicle by a seatbelt or the UAS strap.",
    source: HANDBOOK,
    section: "Getting ready to drive - Child safety",
    url: `${HB}/getting-ready-drive`,
  },
  {
    key: "booster-seat-required",
    quote:
      "These must be used by pre-school and primary-grade-aged children who have outgrown their forward-facing child car seat, are under the age of eight and weigh 18 kilograms (40 lbs.) or more but less than 36 kilograms (80 lbs.), and who are less than 145 centimetres (4 feet, 9 inches) tall.",
    source: HANDBOOK,
    section: "Getting ready to drive - Child safety",
    url: `${HB}/getting-ready-drive`,
  },
  {
    key: "headlights-when-required",
    quote:
      "When driving your vehicle, headlights are required to be turned on between one-half hour before sunset and one-half hour after sunrise, and any other time of poor light conditions, such as fog, snow or rain, which keeps you from clearly seeing people or vehicles less than 150 metres away.",
    source: HANDBOOK,
    section: "Getting ready to drive - Turn on headlights at night and in poor conditions",
    url: `${HB}/getting-ready-drive`,
  },
  {
    key: "high-beam-distances",
    quote:
      "When you use high-beam headlights, remember to switch to low beams within 150 metres of an oncoming vehicle. Use your low beams when you are less than 60 metres behind another vehicle unless you are passing it.",
    source: HANDBOOK,
    section: "Getting ready to drive - Turn on headlights at night and in poor conditions",
    url: `${HB}/getting-ready-drive`,
  },

  // ------------------------------------------------- night and bad weather ---
  {
    key: "overdriving-headlights",
    quote:
      "You are overdriving your headlights when you go so fast that your stopping distance is farther than you can see with your headlights.",
    source: HANDBOOK,
    section: "Driving at night and in bad weather - Overdriving your headlights",
    url: `${HB}/driving-night-and-bad-weather`,
  },
  {
    key: "hydroplaning",
    quote:
      "If there is too much water or if you are going too fast, your tires may ride on top of the water, like water skis. This is called hydroplaning.",
    source: HANDBOOK,
    section: "Driving at night and in bad weather - Rain",
    url: `${HB}/driving-night-and-bad-weather`,
  },
  {
    key: "skid-causes",
    quote:
      "Skids most often happen on a slippery surface, such as a road that is wet, icy or covered with snow, gravel or some other loose material. Most skids result from driving too fast for road conditions.",
    source: HANDBOOK,
    section: "Driving at night and in bad weather - Skids",
    url: `${HB}/driving-night-and-bad-weather`,
  },
  {
    key: "skid-recovery",
    quote:
      "Ease off on the accelerator or brake and on a very slippery surface slip the transmission into neutral if you can. Continue to steer in the direction you wish to go.",
    source: HANDBOOK,
    section: "Driving at night and in bad weather - Skids",
    url: `${HB}/driving-night-and-bad-weather`,
  },
  {
    key: "fog-low-beams",
    quote:
      "Use your low-beam headlights. High beams reflect off the moisture droplets in the fog, making it harder to see.",
    source: HANDBOOK,
    section: "Driving at night and in bad weather - Tips for driving safely in fog",
    url: `${HB}/driving-night-and-bad-weather`,
  },
  {
    key: "whiteout",
    quote:
      "Blowing snow may create whiteouts where snow completely blocks your view of the road. When blowing snow is forecast, drive only if necessary and with extreme caution.",
    source: HANDBOOK,
    section: "Driving at night and in bad weather - Whiteouts",
    url: `${HB}/driving-night-and-bad-weather`,
  },

  {
    key: "winter-tires",
    quote:
      "To provide the best traction during the winter season, it is recommended that your vehicle be equipped with four winter or all-weather tires with the same tread pattern.",
    source: HANDBOOK,
    section: "Maintaining your vehicle - Tires",
    url: `${HB}/maintaining-your-vehicle`,
  },

  // ------------------------------------------------------------ emergencies ---
  {
    key: "collision-report-5000",
    quote:
      "By law, you must report any collision to the police when there are injuries or damage to vehicles or other property exceeding $5,000.",
    source: HANDBOOK,
    section: "Dealing with emergencies - In a collision where someone is injured",
    url: `${HB}/dealing-emergencies`,
  },
  {
    key: "collision-under-5000",
    quote:
      "If damage is less than $5,000, you are still required by law to exchange information with anyone whose vehicle has been damaged. However, the collision does not have to be reported to the police.",
    source: HANDBOOK,
    section: "Dealing with emergencies - In a collision where no one is injured",
    url: `${HB}/dealing-emergencies`,
  },
  {
    key: "collision-move-vehicles",
    quote:
      "If the vehicles are drivable, move them as far off the road as possible as this should not affect the police officer's investigation.",
    source: HANDBOOK,
    section: "Dealing with emergencies - In a collision where no one is injured",
    url: `${HB}/dealing-emergencies`,
  },
  {
    key: "brake-failure",
    quote:
      "Try pumping the brake pedal to temporarily restore hydraulic brake pressure. If this does not work, apply the parking brake gently but firmly while holding the release button.",
    source: HANDBOOK,
    section: "Dealing with emergencies - If your brakes fail",
    url: `${HB}/dealing-emergencies`,
  },

  // ------------------------------------------------- particular situations ---
  {
    key: "emergency-vehicle-approaching",
    quote:
      "When an emergency vehicle is approaching your vehicle from any direction with its flashing red or red and blue lights, or siren or bell sounding, you are required to bring your vehicle to an immediate stop.",
    source: HANDBOOK,
    section: "Dealing with particular situations - Reacting to an approaching emergency vehicle",
    url: `${HB}/dealing-particular-situations`,
  },
  {
    key: "emergency-vehicle-pull-right",
    quote:
      "When bringing your vehicle to a stop, you are required to bring your vehicle as near as is practical to the right-hand curb or edge of the roadway.",
    source: HANDBOOK,
    section: "Dealing with particular situations - Reacting to an approaching emergency vehicle",
    url: `${HB}/dealing-particular-situations`,
  },
  {
    key: "move-over-stopped-vehicle",
    quote:
      "When approaching any emergency vehicle that is stopped with its red, or red and blue, lights flashing or a tow truck with its amber lights flashing in the same direction of your travel, you are required to reduce the speed of your vehicle and proceed with caution.",
    source: HANDBOOK,
    section: "Dealing with particular situations - Reacting to a stopped emergency vehicle or tow truck",
    url: `${HB}/dealing-particular-situations`,
  },
  {
    key: "move-over-change-lane",
    quote:
      "When the roadway has two or more lanes of traffic in the same direction of your travel, you are required to move into a lane away from the emergency vehicle or tow truck, if safe to do so, in addition to reducing the speed of your vehicle and proceeding with caution.",
    source: HANDBOOK,
    section: "Dealing with particular situations - Reacting to a stopped emergency vehicle or tow truck",
    url: `${HB}/dealing-particular-situations`,
  },
  {
    key: "fire-vehicle-150-metres",
    quote:
      "Remain vigilant for additional emergency vehicles, and remember it is illegal to follow within 150 metres of a fire vehicle responding to an alarm.",
    source: HANDBOOK,
    section: "Dealing with particular situations - Reacting to an approaching emergency vehicle",
    url: `${HB}/dealing-particular-situations`,
  },
  {
    key: "roundabout-emergency-vehicle",
    quote:
      "If you are in a roundabout when an emergency vehicle approaches, exit at your intended exit and proceed beyond the traffic island before pulling over.",
    source: HANDBOOK,
    section: "Changing directions - Pull over for emergency vehicles",
    url: `${HB}/changing-directions`,
  },
  {
    key: "distracted-driving-scope",
    quote:
      "Ontario's distracted driving laws apply to the use of hand-held communication/entertainment devices and certain display screens.",
    source: HANDBOOK,
    section: "Dealing with particular situations - Distracted driving",
    url: `${HB}/dealing-particular-situations`,
  },
  {
    key: "distracted-driving-holding",
    quote:
      "In fact, simply holding a phone or other device while driving is against the law.",
    source: "Distracted driving (ontario.ca)",
    section: "Penalties for distracted driving",
    url: "https://www.ontario.ca/page/distracted-driving",
  },
  {
    key: "distracted-novice-penalty",
    quote:
      "If you hold a G1, G2, M1 or M2 licence, and are convicted of distracted driving, you'll face the same fines as drivers with A to G licences. But you won't receive any demerit points.",
    source: "Distracted driving (ontario.ca)",
    section: "Penalties for distracted driving - Novice drivers",
    url: "https://www.ontario.ca/page/distracted-driving",
  },

  // ---------------------------------------------------------- freeway driving ---
  {
    key: "g1-freeway-instructor",
    quote:
      "Class G1 drivers may only drive on freeways with a licensed driving instructor.",
    source: HANDBOOK,
    section: "Freeway driving",
    url: `${HB}/freeway-driving`,
  },
  {
    key: "acceleration-lane",
    quote:
      "In the acceleration lane, drivers increase their speed to the speed of traffic on the freeway before they merge with it. Signal and increase your speed to merge smoothly with traffic.",
    source: HANDBOOK,
    section: "Freeway driving - Entering a freeway",
    url: `${HB}/freeway-driving`,
  },
  {
    key: "freeway-deceleration-lane",
    quote:
      "When leaving the freeway, signal that you want to move into the deceleration lane, but do not slow down. When you are in the lane, reduce your speed gradually to the speed shown for the exit ramp.",
    source: HANDBOOK,
    section: "Freeway driving - Leaving a freeway",
    url: `${HB}/freeway-driving`,
  },
  {
    key: "freeway-missed-exit",
    quote:
      "If you miss an exit, do not stop or reverse on the freeway. Take the next exit.",
    source: HANDBOOK,
    section: "Freeway driving - Leaving a freeway",
    url: `${HB}/freeway-driving`,
  },
  {
    key: "freeway-left-lane",
    quote:
      "Use the far left lane of a multi-lane freeway to pass traffic moving slower than the speed limit, but don't stay there. Drive in the right-hand lane when possible.",
    source: HANDBOOK,
    section: "Freeway driving - Driving along a freeway",
    url: `${HB}/freeway-driving`,
  },

  // -------------------------------------------------------------- licensing ---
  {
    key: "g1-zero-bac",
    quote:
      "You must not drive if you have been drinking alcohol. Your blood-alcohol level must be zero.",
    source: HANDBOOK,
    section: "Getting your driver's licence - Level One (Class G1)",
    url: `${HB}/getting-your-drivers-licence`,
  },
  {
    key: "g1-accompanying-driver",
    quote:
      "The accompanying driver must have a valid Class G (or higher) licence, at least four years of driving experience and a blood-alcohol level of less than .05% when accompanying you.",
    source: HANDBOOK,
    section: "Getting your driver's licence - Level One (Class G1)",
    url: `${HB}/getting-your-drivers-licence`,
  },
  {
    key: "g1-no-driving-alone",
    quote:
      "You must not drive alone; an accompanying driver must sit in the front passenger seat. This is the only person who can be in the front seat with you while you drive.",
    source: HANDBOOK,
    section: "Getting your driver's licence - Level One (Class G1)",
    url: `${HB}/getting-your-drivers-licence`,
  },
  {
    key: "g1-400-series",
    quote:
      "You must not drive on 400-series highways with a posted speed limit over 80 km/h. Also, you must not drive on certain high-speed roads including the Queen Elizabeth Way, Don Valley Parkway and the Gardiner Expressway in the Greater Toronto Area, the E.C. Row Expressway in Windsor and the Conestoga Parkway in Kitchener-Waterloo.",
    source: HANDBOOK,
    section: "Getting your driver's licence - Level One (Class G1)",
    url: `${HB}/getting-your-drivers-licence`,
  },
  {
    key: "g1-midnight-to-five",
    quote: "You must not drive between midnight and 5 a.m.",
    source: HANDBOOK,
    section: "Getting your driver's licence - Level One (Class G1)",
    url: `${HB}/getting-your-drivers-licence`,
  },
  {
    key: "g1-twelve-months",
    quote: "Level One lasts 12 months.",
    source: HANDBOOK,
    section: "Getting your driver's licence - Level One (Class G1)",
    url: `${HB}/getting-your-drivers-licence`,
  },
  {
    key: "g1-eight-months-with-course",
    quote: "If you pass an approved course, you can complete Level One in eight months.",
    source: HANDBOOK,
    section: "Getting your driver's licence - Level One (Class G1)",
    url: `${HB}/getting-your-drivers-licence`,
  },
  {
    key: "g2-passenger-restriction",
    quote:
      "In the first six months after receiving your G2 licence, you are allowed to carry only one passenger aged 19 or under.",
    source: HANDBOOK,
    section: "Getting your driver's licence - Level Two (Class G2)",
    url: `${HB}/getting-your-drivers-licence`,
  },
  {
    key: "novice-condition-violation",
    quote:
      "Drivers holding novice licences must follow the specific rules for their class of licence. If you violate any of the graduated-licensing conditions, your licence will be suspended for 30 days.",
    source: HANDBOOK,
    section: "Other ways to lose your licence - Novice-driver violations",
    url: `${HB}/other-ways-lose-your-licence`,
  },

  // ----------------------------------------------- demerit points and BAC ---
  {
    key: "demerit-two-years",
    quote:
      "Demerit points stay on your record for two years from the date of the offence. If you accumulate too many demerit points, your driver's licence can be suspended.",
    source: HANDBOOK,
    section: "Keeping your driver's licence - The demerit point system",
    url: `${HB}/keeping-your-drivers-licence`,
  },
  {
    key: "novice-nine-points",
    quote:
      "As a Level One or Level Two driver, you will have your licence suspended if you accumulate nine or more demerit points during a two-year period.",
    source: HANDBOOK,
    section: "Keeping your driver's licence - New drivers - demerit-point system for Level One and Level Two drivers",
    url: `${HB}/keeping-your-drivers-licence`,
  },
  {
    key: "full-licence-fifteen-points",
    quote:
      "Your licence will be suspended for 30 days from the date you hand over your licence to the Ministry of Transportation.",
    source: HANDBOOK,
    section: "Keeping your driver's licence - Fully licensed drivers - demerit-point system (15 points)",
    url: `${HB}/keeping-your-drivers-licence`,
  },
  {
    key: "young-driver-zero-bac",
    quote:
      "All drivers who are 21 and under, regardless of licence class, must have a BAC level of zero when operating a motor vehicle. You will receive a 24-hour roadside driver-licence suspension.",
    source: HANDBOOK,
    section: "Other ways to lose your licence - Zero Blood-Alcohol Concentration (BAC) for novice and young drivers",
    url: `${HB}/other-ways-lose-your-licence`,
  },
  {
    key: "warn-range-suspension",
    quote:
      "Drivers who register a blood-alcohol concentration in the \"warn range\" of .05 to .08 pose an immediate danger to themselves and other road users.",
    source: HANDBOOK,
    section: "Other ways to lose your licence - \"Warn-range\" suspension",
    url: `${HB}/other-ways-lose-your-licence`,
  },
  {
    key: "impaired-is-a-crime",
    quote:
      "Driving when your ability is impaired by alcohol or a drug is a crime in Canada. Your vehicle does not have to be moving; you can be charged if you are impaired behind the wheel, even if you have not started to drive.",
    source: HANDBOOK,
    section: "Other ways to lose your licence - Impaired driving",
    url: `${HB}/other-ways-lose-your-licence`,
  },
];
