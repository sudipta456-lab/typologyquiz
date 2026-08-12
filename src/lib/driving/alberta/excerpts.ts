// Verbatim excerpts from the Government of Alberta's own material.
//
// Primary source: "Driver's Guide - cars and light trucks", Spring 2026 edition,
// published by Transportation and Economic Corridors and released under the Open
// Government Licence - Alberta. Every quote below was read out of that PDF (or,
// where noted, off the alberta.ca page that carries the same rule) and copied
// without editing. Nothing here is paraphrased, tidied, or stitched together
// from separate places: if a rule could not be found in the official text, it
// simply has no excerpt.
//
// Typographic apostrophes and dashes are rendered as their ASCII equivalents.
// Where the source presents the rule as a short bulleted list, the list is kept
// intact with line breaks rather than rewritten into prose.

import type { HandbookExcerpt } from "../types";

const GUIDE = "Alberta Driver's Guide (Spring 2026)";
const GUIDE_URL =
  "https://open.alberta.ca/dataset/387f4e8a-6c0a-456a-ab31-995aadaf1f2b/resource/5babee5c-040d-4e41-981a-04f22e839aac/download/tec-drivers-guide-2026.pdf";

const ZONES_SOURCE = "Government of Alberta - School and playground zones";
const ZONES_URL = "https://www.alberta.ca/school-and-playground-zones";

export const albertaExcerpts: HandbookExcerpt[] = [
  // ---------------------------------------------------------------- signs
  {
    key: "stop-sign-complete-stop",
    quote:
      "A stop sign indicates that your vehicle must come to a complete stop. After stopping, check the intersection carefully for pedestrians and other traffic.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (Intersections controlled by signs)",
    url: GUIDE_URL,
  },
  {
    key: "yield-sign-meaning",
    quote:
      "A yield sign means that you must allow other vehicles that do not face a yield sign the right-of-way to proceed. When approaching a yield sign, reduce speed as you near the intersection and be prepared to stop.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (Yield signs)",
    url: GUIDE_URL,
  },
  {
    key: "yield-sign-no-stop-required",
    quote:
      "If there are no pedestrians or traffic that you are required to yield to, you may proceed through the intersection without coming to a complete stop.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (Yield signs)",
    url: GUIDE_URL,
  },
  {
    key: "sign-prohibitive-red-circle",
    quote:
      "The symbol prohibiting an action is a red circle and diagonal red bar on a white square. The action within the red circle is not permitted.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Prohibitive signs)",
    url: GUIDE_URL,
  },
  {
    key: "sign-permissive-green-circle",
    quote:
      "Permission signs are a green circle on a white square. The action within the green circle is permitted.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Permissive signs)",
    url: GUIDE_URL,
  },
  {
    key: "sign-warning-yellow-diamond",
    quote: "Indicates caution or warning of hazard displayed on sign.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Sign shapes and colours)",
    url: GUIDE_URL,
  },
  {
    key: "sign-construction-orange",
    quote: "Provides construction area information.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Sign shapes and colours)",
    url: GUIDE_URL,
  },
  {
    key: "sign-school-pentagon",
    quote: "Indicates school zone/area.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Sign shapes and colours)",
    url: GUIDE_URL,
  },
  {
    key: "sign-guide-green",
    quote: "Provides information such as distance to destination.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Sign shapes and colours)",
    url: GUIDE_URL,
  },
  {
    key: "sign-service-blue",
    quote: "Indicates place for fuel, food, lodging, or assistance.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Sign shapes and colours)",
    url: GUIDE_URL,
  },
  {
    key: "sign-regulatory-white",
    quote: "Regulatory message such as speed limit.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Sign shapes and colours)",
    url: GUIDE_URL,
  },
  {
    key: "sign-no-u-turn",
    quote: "This sign means U-turns are not allowed.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (U-turns)",
    url: GUIDE_URL,
  },
  {
    key: "sign-chevron",
    quote: "Chevron sign indicates a sharp bend in the road",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Warning signs - changing road conditions)",
    url: GUIDE_URL,
  },
  {
    key: "sign-advisory-curve-speed",
    quote: "Recommended maximum speed through this curve under ideal driving conditions",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Warning signs - turn or curve ahead)",
    url: GUIDE_URL,
  },
  {
    key: "sign-slow-moving-vehicle",
    quote:
      "A slow-moving vehicle sign is placed on the back of vehicles that travel less than 40 km/h, such as farm tractors, machinery, or construction equipment. This sign warns drivers to be prepared to reduce their speed.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Other signs)",
    url: GUIDE_URL,
  },
  {
    key: "sign-shared-lane-sharrow",
    quote:
      "The image of a bicycle capped by a pair of arrows guides cyclists and reminds drivers to expect cyclists in the same travel lane.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Shared-use lanes)",
    url: GUIDE_URL,
  },

  // ------------------------------------------------- signals and markings
  {
    key: "red-light-stop",
    quote:
      "Drivers facing a traffic control signal displaying a solid red light must bring their vehicles to a complete stop before the stop line or crosswalk that is directly in front of the vehicle. If there is no stop line or crosswalk, drivers must stop before the intersection.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Traffic control signals)",
    url: GUIDE_URL,
  },
  {
    key: "right-turn-on-red",
    quote:
      "Turning right at a red light is permitted provided that there is no sign prohibiting the turn. Before making the turn the vehicle must come to a complete stop before the stop line or crosswalk.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Traffic control signals)",
    url: GUIDE_URL,
  },
  {
    key: "left-turn-on-red-one-way",
    quote:
      "Unless a sign prohibits the turn, the only left turn permitted at a red light is onto a one-way street from a one-way street.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Traffic control signals)",
    url: GUIDE_URL,
  },
  {
    key: "yellow-light",
    quote:
      "Drivers approaching an intersection with a solid (not flashing) yellow traffic control light must bring their vehicles to a complete stop before the stop line or crosswalk, unless a point has been reached at the intersection where stopping cannot be done safely.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Traffic control signals)",
    url: GUIDE_URL,
  },
  {
    key: "green-light-yield",
    quote:
      "Drivers facing a solid green traffic control light are permitted to travel through the intersection without stopping, unless required to yield to oncoming traffic when turning left or to pedestrians in the crosswalk when turning right or left.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Traffic control signals)",
    url: GUIDE_URL,
  },
  {
    key: "green-arrow-red-light",
    quote:
      "Drivers facing a traffic control light with a green arrow and a red control light may enter the intersection and proceed without stopping only in the direction indicated by the arrow.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Traffic control signals)",
    url: GUIDE_URL,
  },
  {
    key: "flashing-red-light",
    quote:
      "Drivers facing a flashing red traffic control light must stop before the stop line or crosswalk. If there is no stop line or crosswalk, drivers must stop before the intersection.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Traffic control signals)",
    url: GUIDE_URL,
  },
  {
    key: "flashing-green-light",
    quote:
      "Drivers facing a flashing green traffic control light are permitted to go through, turn left or turn right without stopping. Opposing traffic will be facing a red light; however a driver must still yield to pedestrians or other vehicles lawfully in the intersection.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Traffic control signals)",
    url: GUIDE_URL,
  },
  {
    key: "flashing-yellow-pedestrian-lights",
    quote:
      "When the yellow lights are flashing, the driver must reduce speed to a maximum of 30 km/h and yield or stop for pedestrians.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Pedestrian signals and signs)",
    url: GUIDE_URL,
  },
  {
    key: "yellow-line-markings",
    quote:
      "Yellow lines mean that vehicles on each side of the yellow line must travel in opposite directions. A yellow line should always be on the driver's left side.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Pavement markings - lane markings)",
    url: GUIDE_URL,
  },
  {
    key: "single-solid-yellow-urban",
    quote:
      "Passing safely is permitted across single solid yellow lines within an urban area. In all other instances, single or double solid yellow lines indicate that passing is not permitted.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Pavement markings)",
    url: GUIDE_URL,
  },
  {
    key: "solid-and-broken-yellow",
    quote:
      "A solid yellow line and a broken yellow line together indicate that a pass is permitted for the driver who has the broken line on their side of the roadway. Passing is not permitted for the driver with the solid yellow line on their side of the roadway.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Pavement markings)",
    url: GUIDE_URL,
  },
  {
    key: "broken-white-line",
    quote: "Broken white lines indicate that lane changing is permitted.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Pavement markings - white line markings)",
    url: GUIDE_URL,
  },
  {
    key: "solid-white-line",
    quote: "Solid white lines indicate that lane changing is not permitted.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Pavement markings - white line markings)",
    url: GUIDE_URL,
  },
  {
    key: "two-way-left-turn-lane",
    quote:
      "A two-way left turn lane allows vehicles from each direction to turn left using the same lane. Vehicles from both directions share this centre lane to turn left.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (Two-way left turn lanes)",
    url: GUIDE_URL,
  },
  {
    key: "painted-island",
    quote:
      "Painted islands indicate that this area is not to be used for travel by any road users. Motorists can cross painted islands for the purpose of entering or leaving a driveway, alleyway, or private drive.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Pavement markings - symbols)",
    url: GUIDE_URL,
  },
  {
    key: "diamond-lane-marking",
    quote: "Diamond markings indicate that a lane is reserved for specific vehicles.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Pavement markings - symbols)",
    url: GUIDE_URL,
  },

  // ------------------------------------------- right-of-way, intersections
  {
    key: "four-way-stop-courtesy",
    quote:
      "Courtesy is to allow the vehicle that arrived first to proceed first. If two vehicles arrive at the same time, courtesy allows the vehicle on the right to proceed first.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (Rules for stopping at intersections)",
    url: GUIDE_URL,
  },
  {
    key: "stop-no-line-three-metres",
    quote:
      "If there is no stop line or marked crosswalk at the intersection, you must stop within three metres (10 feet) of the intersecting roadway.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (Rules for stopping at intersections)",
    url: GUIDE_URL,
  },
  {
    key: "uncontrolled-intersection-yield-right",
    quote:
      "Some intersections have no traffic signs and no traffic signal lights. At these intersections, you must yield the right-of-way to a vehicle on your right.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (Uncontrolled intersections)",
    url: GUIDE_URL,
  },
  {
    key: "uncontrolled-t-intersection",
    quote:
      "There are no traffic control signs or signals, therefore the driver on the right (vehicle B) has the right-of-way.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (Uncontrolled intersections)",
    url: GUIDE_URL,
  },
  {
    key: "exiting-driveway-parking-lot",
    quote:
      "When exiting from service roads, alleys, parking lots, and driveways, you must:\nstop before any sidewalk crossing\nstop before entering a main street\nyield to pedestrians.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (Keep intersections clear)",
    url: GUIDE_URL,
  },
  {
    key: "keep-intersection-clear",
    quote:
      "Do not enter an intersection until you are able to clear it completely. If traffic is delayed at an intersection, do not enter the intersection until you can completely clear the intersection and crosswalk on the other side.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (Keep intersections clear)",
    url: GUIDE_URL,
  },
  {
    key: "no-passing-stopped-for-pedestrian",
    quote:
      "All intersections have crosswalks that may be marked or unmarked and you must not pass another vehicle that has stopped for a pedestrian.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (Intersection reminders)",
    url: GUIDE_URL,
  },
  {
    key: "right-of-way-still-responsible",
    quote:
      "However, even if you have the right-of-way, you are still responsible to do everything you can to prevent a collision.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (Right-of-way)",
    url: GUIDE_URL,
  },
  {
    key: "roundabout-yield-on-entry",
    quote:
      "Traffic always circulates in a counterclockwise direction around a centre island. Vehicles entering the intersection must yield to traffic already in the circle.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (Traffic circles and roundabouts)",
    url: GUIDE_URL,
  },
  {
    key: "roundabout-inside-lane-priority",
    quote:
      "While in the circle, the drivers on the right must yield to the drivers on the left.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (Two-lane traffic circle / roundabout)",
    url: GUIDE_URL,
  },
  {
    key: "roundabout-lane-choice",
    quote:
      "Drivers planning to travel past the first exit should use the left lane to enter and exit.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (Two-lane traffic circle / roundabout)",
    url: GUIDE_URL,
  },
  {
    key: "turning-lane-15-metres",
    quote:
      "You should be in your proper turning lane at least 15 metres (50 feet) before the intersection.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (Turning)",
    url: GUIDE_URL,
  },
  {
    key: "left-turn-waiting-position",
    quote:
      "If you must stop in the intersection prior to completing a left turn, stay to the right of the yellow line and keep your front wheels pointed straight ahead.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (Left turns)",
    url: GUIDE_URL,
  },
  {
    key: "u-turn-traffic-signal",
    quote:
      "Do not do a U-turn unless it can be done safely. U-turns are not permitted:\nat an intersection controlled by a traffic control signal (traffic lights) unless permitted by a traffic control device\nwhere a sign prohibits U-turns.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (U-turns)",
    url: GUIDE_URL,
  },
  {
    key: "u-turn-rural",
    quote:
      "Outside urban areas (rural) U-turns are not permitted:\non a curve\non an approach to or near the crest of a hill where the driver of another vehicle cannot see you that is within 150 metres approaching from either direction.",
    source: GUIDE,
    section: "Chapter 4 - Intersections and Turns (U-turns)",
    url: GUIDE_URL,
  },
  {
    key: "merging-shared-responsibility",
    quote:
      "Neither the merging vehicle nor the vehicles already on the highway have the right-of-way. Merging is a shared responsibility between the vehicles joining the roadway and the vehicles already on the roadway.",
    source: GUIDE,
    section: "Chapter 5 - Highways and Freeways (Merging)",
    url: GUIDE_URL,
  },
  {
    key: "missed-turn-continue",
    quote:
      "If you miss your exit or turn, continue on to the next exit or intersection. Never drive your vehicle in reverse on a roadway to return to a missed exit or turn.",
    source: GUIDE,
    section: "Chapter 7 - Responsible Driving (Plan ahead)",
    url: GUIDE_URL,
  },

  // ---------------------------------------------------------------- speed
  {
    key: "speed-urban-50",
    quote:
      "50 km/h is the maximum speed limit on a roadway that is located within an urban area, unless otherwise posted.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Speed limit signs)",
    url: GUIDE_URL,
  },
  {
    key: "speed-highway-100",
    quote:
      "100 km/h is the maximum speed limit on a provincial highway located outside an urban area.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Speed limit signs)",
    url: GUIDE_URL,
  },
  {
    key: "speed-highway-in-city-80",
    quote:
      "80 km/h is the maximum speed limit on a provincial highway located inside a corporate limit of a city.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Speed limit signs)",
    url: GUIDE_URL,
  },
  {
    key: "speed-rural-road-80",
    quote:
      "80 km/h is the maximum speed limit on a roadway that is located outside an urban area.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Speed limit signs)",
    url: GUIDE_URL,
  },
  {
    key: "speed-limits-ideal-conditions",
    quote:
      "They are the maximum speed permitted when conditions are ideal. Any speed that is unsafe for the current conditions is illegal.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Speed limit signs)",
    url: GUIDE_URL,
  },
  {
    key: "school-zone-speed-30",
    quote:
      "The speed limit for both urban and rural school zones is 30 km/h unless otherwise posted.",
    source: ZONES_SOURCE,
    section: "School zone",
    url: ZONES_URL,
  },
  {
    key: "school-zone-hours",
    quote:
      "Times (school days only) are:\n8:00 am to 9:30 am\n11:30 am to 1:30 pm\n3:00 pm to 4:30 pm",
    source: ZONES_SOURCE,
    section: "School zone",
    url: ZONES_URL,
  },
  {
    key: "school-area-no-speed-sign",
    quote:
      "When you approach a school sign without a speed sign attached to it, you are entering a school area. This sign is to alert drivers that children may be walking or crossing the road and you must use caution when driving through the school area.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (School zones and areas)",
    url: GUIDE_URL,
  },
  {
    key: "playground-zone-speed-30",
    quote:
      "The speed limit for both urban and rural playground zones, when the times are in effect, is 30 km/h unless otherwise posted.",
    source: ZONES_SOURCE,
    section: "Playground zone",
    url: ZONES_URL,
  },
  {
    key: "playground-zone-hours",
    quote:
      "Playground restrictions are in effect every day from 8:30 am to 1 hour after sunset.",
    source: ZONES_SOURCE,
    section: "Playground zone",
    url: ZONES_URL,
  },
  {
    key: "construction-zone-speed",
    quote:
      "The speed limit in construction zones must be obeyed at all times. This applies even when people and equipment are not working, since hazards such as bumps, fresh oil, and loose gravel may be present.",
    source: GUIDE,
    section: "Chapter 2 - Traffic Control (Construction zones)",
    url: GUIDE_URL,
  },
  {
    key: "move-over-60",
    quote:
      "Motorists must reduce speed to 60 km/h or the posted speed, whichever is lower, when passing emergency vehicles or tow trucks that are stopped with their lights flashing. This law applies to the lane(s) immediately next to the stopped vehicles.",
    source: GUIDE,
    section: "Chapter 6 - Emergency response vehicles and tow trucks",
    url: GUIDE_URL,
  },
  {
    key: "passing-no-speeding",
    quote: "It is illegal to exceed the speed limit when passing another vehicle.",
    source: GUIDE,
    section: "Chapter 5 - Highways and Freeways (Passing on a two-lane highway)",
    url: GUIDE_URL,
  },

  // --------------------------------------------------------------- safety
  {
    key: "following-distance-two-seconds",
    quote:
      "Under normal road and weather conditions you should drive a minimum of two seconds behind the vehicle ahead. When conditions are less than ideal, increase your following distance.",
    source: GUIDE,
    section: "Chapter 7 - Responsible Driving (Maintain your following time and distance)",
    url: GUIDE_URL,
  },
  {
    key: "following-distance-large-vehicles",
    quote:
      "An exception to this rule is for drivers of large vehicles, such as motor homes. It is recommended that you use a minimum four second following distance.",
    source: GUIDE,
    section: "Chapter 7 - Responsible Driving (Maintain your following time and distance)",
    url: GUIDE_URL,
  },
  {
    key: "stopping-distance-three-factors",
    quote: "Three factors determine the time and distance it takes to stop.",
    source: GUIDE,
    section: "Chapter 3 - The Basics of Driving (Stopping time and distance)",
    url: GUIDE_URL,
  },
  {
    key: "perception-time",
    quote:
      "Perception time is how long it takes to recognize a situation and understand that you need to stop. This can take about three-quarters of a second.",
    source: GUIDE,
    section: "Chapter 3 - The Basics of Driving (Stopping time and distance)",
    url: GUIDE_URL,
  },
  {
    key: "headlights-150-metres",
    quote:
      "When you are driving at night or at any time when you cannot clearly see 150 metres (500 feet) in front of you, you must turn your headlights on.",
    source: GUIDE,
    section: "Chapter 6 - Challenging conditions (Driving at night)",
    url: GUIDE_URL,
  },
  {
    key: "low-beams-300-metres",
    quote:
      "Use your low beam headlights when you are within 300 metres of oncoming vehicles.",
    source: GUIDE,
    section: "Chapter 6 - Challenging conditions (When driving at night)",
    url: GUIDE_URL,
  },
  {
    key: "signal-required",
    quote:
      "You must use your signal light when you are:\nmoving away from the curb or parking lane\nturning left or right\nchanging lanes.",
    source: GUIDE,
    section: "Chapter 3 - The Basics of Driving (Signalling)",
    url: GUIDE_URL,
  },
  {
    key: "reversing-out-of-driveway",
    quote:
      "Before reversing out of a driveway, walk around the vehicle and check for possible dangers behind the vehicle.",
    source: GUIDE,
    section: "Chapter 3 - The Basics of Driving (Reversing)",
    url: GUIDE_URL,
  },
  {
    key: "skid-recovery",
    quote:
      "To regain control, do not touch the brake or the accelerator. Look and steer where you want the front of the vehicle to go.",
    source: GUIDE,
    section: "Chapter 6 - Emergency Situations and Challenging Conditions (Loss of control)",
    url: GUIDE_URL,
  },
  {
    key: "hydroplaning",
    quote:
      "On wet roads your tires may lose contact with the road surface. This is called hydroplaning.",
    source: GUIDE,
    section: "Chapter 6 - Challenging conditions (Rain and hydroplaning)",
    url: GUIDE_URL,
  },
  {
    key: "hydroplaning-recovery",
    quote:
      "If this happens, do not brake. Release pressure on the accelerator to allow the vehicle to slow.",
    source: GUIDE,
    section: "Chapter 6 - Challenging conditions (Rain and hydroplaning)",
    url: GUIDE_URL,
  },
  {
    key: "black-ice",
    quote:
      "However, if the asphalt looks shiny and black instead of grey-white, be cautious, and reduce your speed without braking.",
    source: GUIDE,
    section: "Chapter 6 - Challenging conditions (Black ice)",
    url: GUIDE_URL,
  },
  {
    key: "cruise-control-poor-conditions",
    quote:
      "Do not use cruise control when the weather and road conditions are poor. When your tires contact ice, the cruise control will continue to apply the accelerator and you could lose control.",
    source: GUIDE,
    section: "Chapter 6 - Challenging conditions (Ice and snow)",
    url: GUIDE_URL,
  },
  {
    key: "stranded-stay-with-vehicle",
    quote:
      "If you find yourself stranded off the highway and your vehicle is in a safe place, it is usually safer to stay with your vehicle.",
    source: GUIDE,
    section: "Chapter 6 - Challenging conditions (Ice and snow)",
    url: GUIDE_URL,
  },
  {
    key: "tire-failure",
    quote:
      "Resist the urge to immediately apply the brakes. Take your foot off the gas pedal and allow the engine to slow the vehicle down.",
    source: GUIDE,
    section: "Chapter 6 - Vehicle mechanical problems (Tire failure)",
    url: GUIDE_URL,
  },
  {
    key: "visual-lead-urban",
    quote:
      "When you are driving in an urban area, look at least 12 to 15 seconds ahead of your vehicle.",
    source: GUIDE,
    section: "Chapter 7 - Responsible Driving (Scan all around your vehicle)",
    url: GUIDE_URL,
  },
  {
    key: "mirror-check-interval",
    quote:
      "Check behind you by glancing in your rear view mirrors every eight to 12 seconds (about every block in an urban area).",
    source: GUIDE,
    section: "Chapter 7 - Responsible Driving (Scan all around your vehicle)",
    url: GUIDE_URL,
  },
  {
    key: "being-passed-two-lane",
    quote:
      "When being passed on a two-lane highway, help the driver passing you by staying in your lane. Move to the right side of your lane to give the other driver a better view of the road ahead.",
    source: GUIDE,
    section: "Chapter 5 - Highways and Freeways (Passing on a two-lane highway)",
    url: GUIDE_URL,
  },
  {
    key: "emergency-stopping-lane",
    quote:
      "Do not drive in the emergency stopping lane of a highway. Do not pass or assist another vehicle to pass you by using this lane.",
    source: GUIDE,
    section: "Chapter 5 - Highways and Freeways (Emergency stopping lane)",
    url: GUIDE_URL,
  },

  // -------------------------------------------------------------- parking
  {
    key: "parking-fire-hydrant",
    quote: "No parking within five metres (16 feet) of a fire hydrant.",
    source: GUIDE,
    section: "Chapter 3 - The Basics of Driving (Do not park here)",
    url: GUIDE_URL,
  },
  {
    key: "parking-stop-yield-sign",
    quote: "No parking within five metres (16 feet) of a stop or yield sign.",
    source: GUIDE,
    section: "Chapter 3 - The Basics of Driving (Do not park here)",
    url: GUIDE_URL,
  },
  {
    key: "hill-parking-uphill-curb",
    quote:
      "When parking facing uphill on a street with a curb, turn the front wheels to the left (toward the centre of the road).",
    source: GUIDE,
    section: "Chapter 3 - The Basics of Driving (Hill parking)",
    url: GUIDE_URL,
  },
  {
    key: "hill-parking-downhill",
    quote:
      "When parking facing downhill, always turn your front wheels to the right.",
    source: GUIDE,
    section: "Chapter 3 - The Basics of Driving (Hill parking)",
    url: GUIDE_URL,
  },
  {
    key: "parking-outside-urban-area",
    quote:
      "unless there is a clear passage for other motor vehicles, and\nyour vehicle can be seen for 60 metres (200 feet) along the roadway in both directions.",
    source: GUIDE,
    section: "Chapter 3 - The Basics of Driving (Do not park here)",
    url: GUIDE_URL,
  },

  // ------------------------------------------------------ sharing the road
  {
    key: "school-bus-red-lights-20-metres",
    quote:
      "You must come to a full stop about 20 metres (about four to five car lengths) away from the school bus.",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (School buses)",
    url: GUIDE_URL,
  },
  {
    key: "school-bus-amber-lights",
    quote:
      "When you approach a school bus from either direction (from the front or the rear), and it has the alternating amber lights flashing, you must be ready to stop. This is a warning that the alternating red lights are going to begin flashing and the school bus is stopping to allow students to get on or off.",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (School buses)",
    url: GUIDE_URL,
  },
  {
    key: "school-bus-divided-highway",
    quote:
      "When you approach a school bus from the front and the school bus has its alternating amber or red lights flashing, you may proceed with caution.",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (School buses)",
    url: GUIDE_URL,
  },
  {
    key: "cyclist-change-lanes-to-pass",
    quote: "When passing a cyclist, change lanes such as you would for other vehicles.",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (Bicycles)",
    url: GUIDE_URL,
  },
  {
    key: "cyclist-helmet-under-18",
    quote:
      "The law requires cyclists or passengers on a bicycle, who are under 18 years of age, to wear an approved bicycle safety helmet.",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (Bicycles)",
    url: GUIDE_URL,
  },
  {
    key: "motorcycle-lane-position",
    quote:
      "Motorcycle riders often travel in the left portion of their lane. This helps make them more visible to other road users.",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (Motorcycles)",
    url: GUIDE_URL,
  },
  {
    key: "log-hauling-truck",
    quote:
      "Never pass a log hauling truck that is turning left or right off the highway. The extension of the logs from the rear of the truck may be as long as nine metres (30 feet).",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (Log hauling vehicles)",
    url: GUIDE_URL,
  },
  {
    key: "large-vehicle-right-turn",
    quote:
      "When a large vehicle is turning to the right, stay well back and do not drive in the space on the right of the large vehicle.",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (Commercial vehicles)",
    url: GUIDE_URL,
  },
  {
    key: "pedestrian-indicates-crossing",
    quote:
      "In an urban area, pedestrians may indicate their intention to cross a street by raising an arm at a right angle and pointing to the opposite curb.",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (Pedestrian safety)",
    url: GUIDE_URL,
  },
  {
    key: "pedestrian-stop-back",
    quote:
      "When stopping for a pedestrian at a crosswalk, stop far enough back (about two to three car lengths) so that traffic in other lanes will be able to see the pedestrian and have time to stop.",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (Pedestrian safety)",
    url: GUIDE_URL,
  },
  {
    key: "funeral-procession-participant",
    quote:
      "If you are participating in a funeral procession, you are permitted to continue through an intersection with a stop sign or red traffic light without stopping. Your headlights must be turned on.",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (Funeral processions)",
    url: GUIDE_URL,
  },
  {
    key: "funeral-procession-yield",
    quote:
      "Do not pass through a funeral procession. Yield the right-of-way until it has passed before proceeding.",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (Funeral processions)",
    url: GUIDE_URL,
  },
  {
    key: "snowplow-lights",
    quote:
      "Snowplows are equipped with flashing amber and red lights to make them more visible.",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (Snowplows)",
    url: GUIDE_URL,
  },
  {
    key: "railway-crossbuck-yield",
    quote:
      "A railway crossing sign means drivers must yield to all trains. If there is more than one railway track, the crossing sign will show the number of tracks.",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (Railway crossings)",
    url: GUIDE_URL,
  },
  {
    key: "railway-crossbuck-stop-when",
    quote:
      "You must stop when a train is visible or sounding a signal and approaching within 500 metres (about five city blocks) of the crossing.",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (Railway crossings)",
    url: GUIDE_URL,
  },
  {
    key: "railway-stop-sign-distance",
    quote:
      "A stop sign at a railway crossing requires the driver to come to a complete stop between five metres (15 feet) and 15 metres (50 feet) from the nearest rail.",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (Railway crossings)",
    url: GUIDE_URL,
  },
  {
    key: "railway-advance-warning-speed",
    quote:
      "The speed sign below the advance warning sign is the recommended speed for the railway crossing. It will be less than the posted speed for the road.",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (Railway crossings)",
    url: GUIDE_URL,
  },
  {
    key: "railway-stalled-vehicle",
    quote:
      "If your vehicle stalls on a railway crossing, get everyone out of the vehicle and away from the track immediately.",
    source: GUIDE,
    section: "Chapter 8 - Sharing the Road (Railway crossings)",
    url: GUIDE_URL,
  },

  // ---------------------------------------------------------- emergencies
  {
    key: "emergency-vehicle-two-way",
    quote:
      "Drive as closely as possible to the right curb or edge of a two-way roadway.",
    source: GUIDE,
    section: "Chapter 6 - Emergency vehicles",
    url: GUIDE_URL,
  },
  {
    key: "emergency-vehicle-one-way",
    quote: "Move right or left to the nearest curb on one-way streets.",
    source: GUIDE,
    section: "Chapter 6 - Emergency vehicles",
    url: GUIDE_URL,
  },
  {
    key: "emergency-vehicle-following-distance",
    quote:
      "Always yield to emergency vehicles with siren or lights operating. Maintain a safe following distance of at least 150 metres (500 feet).",
    source: GUIDE,
    section: "Chapter 6 - Emergency vehicles",
    url: GUIDE_URL,
  },
  {
    key: "collision-reporting",
    quote:
      "You are required to report all collisions to the police or local law enforcement if:\nanyone has been injured\nanyone has been killed\noverall damage exceeds $5000",
    source: GUIDE,
    section: "Chapter 6 - Emergency Situations and Challenging Conditions (Collisions)",
    url: GUIDE_URL,
  },
  {
    key: "brake-failure",
    quote:
      "If your brakes fail, and your wheels are not turned, carefully use your park brake to slow your vehicle. You may be able to shift to a lower gear to bring your vehicle to a safe and controlled stop.",
    source: GUIDE,
    section: "Chapter 6 - Vehicle mechanical problems (Brake failure)",
    url: GUIDE_URL,
  },
  {
    key: "reflective-triangles",
    quote:
      "On the highway or in a location that is potentially dangerous, safely place reflective triangles to the rear of your vehicle, about 10 to 20 metres (33 to 66 feet) apart.",
    source: GUIDE,
    section: "Chapter 6 - Vehicle mechanical problems",
    url: GUIDE_URL,
  },
  {
    key: "breakdown-avoid-bridge",
    quote: "Do not stop on a bridge or in a tunnel. This can be very dangerous.",
    source: GUIDE,
    section: "Chapter 6 - Vehicle mechanical problems",
    url: GUIDE_URL,
  },

  // ----------------------------------------------------------- impairment
  {
    key: "fatigue-effects",
    quote:
      "Fatigue can increase the time it takes you to react. It can also impair your judgement and decision-making.",
    source: GUIDE,
    section: "Chapter 9 - Driver fitness (Fatigue)",
    url: GUIDE_URL,
  },
  {
    key: "fatigue-stop-for-rest",
    quote: "If you are feeling tired, stop for a rest. Walk around your vehicle.",
    source: GUIDE,
    section: "Chapter 9 - Driver fitness (Fatigue)",
    url: GUIDE_URL,
  },
  {
    key: "medications",
    quote:
      "Talk with your doctor and pharmacist. Know the effects of all prescription and over-the-counter medication you are taking before operating any motor vehicle.",
    source: GUIDE,
    section: "Chapter 9 - Driver fitness (Medications)",
    url: GUIDE_URL,
  },
  {
    key: "distracted-driving-demerits",
    quote:
      "While all forms of distracted driving can be hazardous, the Traffic Safety Act includes fines and three demerits for certain distractions.",
    source: GUIDE,
    section: "Chapter 7 - Responsible Driving (Cellular phones and other distractions)",
    url: GUIDE_URL,
  },
  {
    key: "irs-zero-novice",
    quote:
      "The IRS ZERO: Novice program applies to all alcohol and/or drugs and there is a zero tolerance approach for any alcohol and/or drugs for novice drivers in the Class 7 learner's licence or Class 5-GDL licence category.",
    source: GUIDE,
    section: "Chapter 9 - Driving laws (IRS ZERO: Novice)",
    url: GUIDE_URL,
  },
  {
    key: "irs-zero-novice-penalties",
    quote:
      "Contraventions for this type of suspension/disqualification include the following:\nan immediate 30 day driver's licence suspension\na seven day vehicle seizure\n$200 fine plus victim fine surcharge of 20 per cent.",
    source: GUIDE,
    section: "Chapter 9 - Driving laws (IRS ZERO: Novice)",
    url: GUIDE_URL,
  },
  {
    key: "irs-warn-threshold",
    quote:
      "The IRS: WARN program applies when a law enforcement officer has reasonable grounds to believe that a driver has operated a motor vehicle with a blood alcohol concentration that is equal to or exceeds 50 milligrams of alcohol in 100 mililitres of blood.",
    source: GUIDE,
    section: "Chapter 9 - Driving laws (IRS: WARN)",
    url: GUIDE_URL,
  },
  {
    key: "irs-warn-first-occurrence",
    quote:
      "Three day immediate driver's licence suspension, three day vehicle seizure, and $300 fine plus victim fine surcharge of 20 per cent.",
    source: GUIDE,
    section: "Chapter 9 - Driving laws (IRS: WARN, first occurrence)",
    url: GUIDE_URL,
  },
  {
    key: "irs-fail-first-suspension",
    quote:
      "Immediate two-stage, fixed-term driver's licence suspension consisting of two distinct parts:\n1. 90 days where the suspended driver is unable to drive under any circumstances; and\n2. further 12-month driver's licence suspension.",
    source: GUIDE,
    section: "Chapter 9 - Driving laws (IRS: FAIL, first occurrence)",
    url: GUIDE_URL,
  },

  // ------------------------------------------------- licensing and the law
  {
    key: "gdl-supervising-driver",
    quote:
      "You must be accompanied by a fully-licensed (non-GDL) driver who is 18 years of age or older and is seated next to you.",
    source: GUIDE,
    section: "Chapter 1 - Licensing Information (Stage 1: Learner (Class 7))",
    url: GUIDE_URL,
  },
  {
    key: "gdl-learner-curfew",
    quote: "You are not permitted to drive from midnight to 5 a.m.",
    source: GUIDE,
    section: "Chapter 1 - Licensing Information (Stage 1: Learner (Class 7))",
    url: GUIDE_URL,
  },
  {
    key: "gdl-zero-alcohol",
    quote:
      "You must have a zero alcohol and/or drug level when driving (or riding a motorcycle).",
    source: GUIDE,
    section: "Chapter 1 - Licensing Information (Stage 1: Learner (Class 7))",
    url: GUIDE_URL,
  },
  {
    key: "gdl-probationary-two-years",
    quote: "You must be a probationary driver for a minimum of two years.",
    source: GUIDE,
    section: "Chapter 1 - Licensing Information (Stage 2: GDL Probationary (Class 5-GDL))",
    url: GUIDE_URL,
  },
  {
    key: "gdl-training-course-reduction",
    quote:
      "You can reduce your probationary stage by up to six months, if:\nyou successfully complete an approved driver training course resulting in a condition code (U) being added to your driving record\nall other eligibility requirements are met.",
    source: GUIDE,
    section: "Chapter 1 - Licensing Information (Stage 3: Full Class 5 (non-GDL))",
    url: GUIDE_URL,
  },
  {
    key: "demerit-suspension-gdl",
    quote:
      "If you have accumulated eight or more demerit points within a two-year period, your driver's licence privileges will be automatically suspended for a period of time.",
    source: GUIDE,
    section: "Chapter 9 - Driving responsibly (Demerit points and consequences - GDL drivers)",
    url: GUIDE_URL,
  },
  {
    key: "demerit-reinstatement-gdl",
    quote:
      "When the time of your suspension has been served, your driver's licence privileges will be reinstated with three demerit points remaining on your driver's licence record.",
    source: GUIDE,
    section: "Chapter 9 - Driving responsibly (Demerit points and consequences - GDL drivers)",
    url: GUIDE_URL,
  },
  {
    key: "seat-belt-driver-responsible",
    quote:
      "As the driver, you are responsible for ensuring that all passengers in your vehicle under 16 years of age are properly secured.",
    source: GUIDE,
    section: "Chapter 7 - Responsible Driving (Securing passengers)",
    url: GUIDE_URL,
  },
  {
    key: "child-safety-seat",
    quote:
      "A child under the age of six years and who does not weigh more than 18 kilograms (40 pounds) must be properly secured in a child safety seat.",
    source: GUIDE,
    section: "Chapter 7 - Responsible Driving (Child safety seats)",
    url: GUIDE_URL,
  },
  {
    key: "riding-in-truck-box",
    quote:
      "When you are driving, you must not allow anyone to ride on the outside of your vehicle. This includes the open box of a pick up truck.",
    source: GUIDE,
    section: "Chapter 7 - Responsible Driving (Traffic laws)",
    url: GUIDE_URL,
  },
  {
    key: "load-extends-red-flag",
    quote:
      "During daylight hours, a red flag should be attached to the end of the extension or load. The flag must be at least 30 centimetres (one foot) long on each of the four sides of the square.",
    source: GUIDE,
    section: "Chapter 7 - Responsible Driving (Traffic laws)",
    url: GUIDE_URL,
  },
  {
    key: "produce-licence-on-request",
    quote:
      "On the request of a peace officer, a person driving a motor vehicle shall produce their subsisting driver's licence, insurance, and registration.",
    source: GUIDE,
    section: "Chapter 1 - Licensing Information (Driver's licence)",
    url: GUIDE_URL,
  },
];
