import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Wisconsin bank - 190 of them: 149 from the
// Wisconsin Motorists' Handbook and 41 from the Wisconsin Statutes.
//
// Sources, and why there are two of them:
//
//  - The Wisconsin Motorists' Handbook, 2026, form BDS126, published by the
//    Wisconsin Department of Transportation, Division of Motor Vehicles. This is
//    the book WisDOT writes the 50-question Class D knowledge test and the
//    separate 15-question highway signs test from, and it carries most of what
//    is quoted below.
//  - Wisconsin Statutes chapters 346 and 343, published by the Wisconsin
//    Legislative Reference Bureau at docs.legis.wisconsin.gov. The handbook runs
//    60 pages and is written for a young reader, so it leaves out numbers the
//    test still expects. It never gives a parking distance, never states the
//    freeway or rural speed maximum, never mentions the 45-second dead-red rule,
//    and never sets out the move-over law on its own terms. Those come from the
//    statute.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. The same
// four normalisations the sibling banks use were applied to the extracted text
// and to nothing else: curly quotes, en dashes and em dashes fold to ASCII; runs
// of whitespace, including the line breaks the PDF inserts mid-sentence,
// collapse to single spaces; the section symbol is spelled out as "Section"; and
// where a source states a rule as a stem followed by a bulleted list, the items
// run together in the order they appear - no words are changed, dropped or
// reordered. The sources' own slips are preserved as they stand, including the
// handbook's "Tests in a DMV customer service center is free" and its "vehicles
// may appear to be moving slower than they actually", because a quote that has
// been tidied up is no longer a quote.

const HANDBOOK =
  "Wisconsin Motorists' Handbook (WisDOT Division of Motor Vehicles, 2026, BDS126)";
const HANDBOOK_URL =
  "https://wisconsindot.gov/Documents/dmv/shared/bds126-motorists-handbook.pdf";
const STATUTES = "Wisconsin Statutes (Wisconsin Legislative Reference Bureau)";
const stat = (s: string) => `https://docs.legis.wisconsin.gov/document/statutes/${s}`;

export const wisconsinExcerpts: HandbookExcerpt[] = [
  {
    key: "abs-firm-pressure",
    quote:
      "The proper way to use ABS in an emergency is to apply firm, " +
      "continuous pressure to the brake pedal. Continue until the vehicle " +
      "has stopped, or the danger has passed. ABS will help you stop with " +
      "little or no skidding by keeping the wheels from locking up when " +
      "you brake.",
    source: HANDBOOK,
    section: "Section 8: Handling Emergencies - A. Avoiding Crashes",
    url: HANDBOOK_URL,
  },
  {
    key: "avoid-turn",
    quote:
      "Always steer in the direction you want the vehicle to go. Do not " +
      "steer into the oncoming lane of traffic.",
    source: HANDBOOK,
    section: "Section 8: Handling Emergencies - A. Avoiding Crashes",
    url: HANDBOOK_URL,
  },
  {
    key: "backing-slow-walk",
    quote:
      "When backing up is necessary move slowly. Back up no faster than a " +
      "slow walk. Do not only depend on your mirrors and backup camera " +
      "when backing up.",
    source: HANDBOOK,
    section: "Section 3: The Basics - I. Backing",
    url: HANDBOOK_URL,
  },
  {
    key: "bicycle-full-lane",
    quote:
      "Bicyclists can use the whole traffic lane. Do not share a lane " +
      "with bicyclists. They can move into your path quickly and without " +
      "warning.",
    source: HANDBOOK,
    section: "Section 10: Sharing the Road - E. Bicycles",
    url: HANDBOOK_URL,
  },
  {
    key: "bicycle-three-feet",
    quote:
      "Wait for oncoming traffic to clear before passing a bicyclist. " +
      "Give bicyclists at least three feet of room when you pass.",
    source: HANDBOOK,
    section: "Section 10: Sharing the Road - E. Bicycles",
    url: HANDBOOK_URL,
  },
  {
    key: "blowout",
    quote:
      "Hold the steering wheel to keep your vehicle going straight Lift " +
      "your foot off the gas pedal and slow down little by little",
    source: HANDBOOK,
    section: "Section 8: Handling Emergencies - C. Roadside Emergencies",
    url: HANDBOOK_URL,
  },
  {
    key: "brakes-fail",
    quote:
      "Pump the brake pedal several times Pull the parking brake. If you " +
      "start to skid, take off the parking brake Look for a safe place to " +
      "slow to a stop",
    source: HANDBOOK,
    section: "Section 8: Handling Emergencies - C. Roadside Emergencies",
    url: HANDBOOK_URL,
  },
  {
    key: "bridges-freeze",
    quote:
      "It is important to remember that in severe weather bridges and " +
      "overpasses freeze before the rest of the roadway.",
    source: HANDBOOK,
    section: "Section 7: Driving Conditions - B. Severe Weather",
    url: HANDBOOK_URL,
  },
  {
    key: "child-seats",
    quote:
      "Generally, children must be in a child safety seat until they " +
      "reach age four and in a booster seat until age eight.",
    source: HANDBOOK,
    section: "Section 12: Other Important Information - D. Seat Belts (Safety Belts)",
    url: HANDBOOK_URL,
  },
  {
    key: "controlled-substance",
    quote:
      "Any amount of a controlled substance is the same as operating " +
      "impaired. Studies have shown that people who use marijuana make " +
      "more mistakes while driving.",
    source: HANDBOOK,
    section: "Section 9: Dangerous Driving Behaviors - A. Alcohol, Drugs and Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "crash-injured",
    quote:
      "Stay on the scene and do not move the vehicles Stay in the vehicle " +
      "if it is safe to do so It is a crime to leave the scene if someone " +
      "is injured or killed.",
    source: HANDBOOK,
    section: "Section 8: Handling Emergencies - B. Crashes",
    url: HANDBOOK_URL,
  },
  {
    key: "crash-report-thresholds",
    quote:
      "There is an injury or someone is killed Property damage of $1,000 " +
      "or more Government property damage of $200 or more (ex: signs, " +
      "guard rails)",
    source: HANDBOOK,
    section: "Section 8: Handling Emergencies - B. Crashes",
    url: HANDBOOK_URL,
  },
  {
    key: "crash-teen-passenger",
    quote:
      "The chance of a crash doubles if a teen driver has another teen in " +
      "the vehicle.",
    source: HANDBOOK,
    section: "Section 8: Handling Emergencies - A. Avoiding Crashes",
    url: HANDBOOK_URL,
  },
  {
    key: "crosswalk-stop-line",
    quote:
      "Your front wheels should stop just before the solid white line. Do " +
      "not stop on the crosswalk. Crosswalks are normally at " +
      "intersections but can sometimes be in the middle of a street or " +
      "block.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - B. Types of Line Markings",
    url: HANDBOOK_URL,
  },
  {
    key: "deer-active",
    quote:
      "Deer are the most active in the sunset to sunrise hours. Scan the " +
      "road and watch for the reflection of your headlights in the eyes " +
      "of deer. If you see their eyes, slow down. Use your horn and be " +
      "ready to stop.",
    source: HANDBOOK,
    section: "Section 6: Driving Situations - E. Watch for Deer",
    url: HANDBOOK_URL,
  },
  {
    key: "drowsy-signs",
    quote:
      "Yawning or blinking a lot Drifting from your lane Hitting the " +
      "rumble strip on the side of the road",
    source: HANDBOOK,
    section: "Section 9: Dangerous Driving Behaviors - C. Drowsy Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "drugs-illegal",
    quote:
      "It is illegal to drive under the influence of any drugs, this " +
      "includes prescription and non-prescription drugs.",
    source: HANDBOOK,
    section: "Section 9: Dangerous Driving Behaviors",
    url: HANDBOOK_URL,
  },
  {
    key: "emergency-pull-over",
    quote:
      "When you see emergency lights and hear sirens it is time to move. " +
      "Pull over to the side of the road and stop until the emergency " +
      "vehicle has passed. Do not stop in the middle of the intersection.",
    source: HANDBOOK,
    section: "Section 10: Sharing the Road - B. Emergency Vehicles",
    url: HANDBOOK_URL,
  },
  {
    key: "farm-livestock",
    quote:
      "Be patient when you are around farm equipment on the road. You " +
      "should yield the right-of-way to livestock on or along the " +
      "highway.",
    source: HANDBOOK,
    section: "Section 7: Driving Conditions - D. Farm Safety/Rural Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "farm-under-16",
    quote:
      "No one under 16 years old can operate a farm tractor or " +
      "self-propelled farm machinery on highways.",
    source: HANDBOOK,
    section: "Section 7: Driving Conditions - D. Farm Safety/Rural Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "following-adverse",
    quote:
      "Add a second for every adverse condition such as heavier traffic, " +
      "rain, snow and/or ice.",
    source: HANDBOOK,
    section: "Section 3: The Basics - B. Understanding Vehicle Speed",
    url: HANDBOOK_URL,
  },
  {
    key: "following-count",
    quote:
      "Start counting \"one thousand one, one thousand two,\" count to one " +
      "thousand four. If you reach the object before you finish saying, " +
      "\"one thousand four,\" you are going too fast.",
    source: HANDBOOK,
    section: "Section 3: The Basics - B. Understanding Vehicle Speed",
    url: HANDBOOK_URL,
  },
  {
    key: "following-four-second",
    quote:
      "Drive at a speed where you can always safely stop. Use the \"Four " +
      "Second Following Distance Rule.\"",
    source: HANDBOOK,
    section: "Section 3: The Basics - B. Understanding Vehicle Speed",
    url: HANDBOOK_URL,
  },
  {
    key: "funeral-procession",
    quote:
      "The first vehicle in the line must follow traffic signs and " +
      "signals. Vehicles in the line must have their headlights on. Do " +
      "not cut into the line or interfere with the funeral line.",
    source: HANDBOOK,
    section: "Section 6: Driving Situations - F. Funeral Processions",
    url: HANDBOOK_URL,
  },
  {
    key: "habitual-offender",
    quote:
      "A habitual offender is someone who is convicted of four or more " +
      "major traffic violations or 12 or more minor violations within " +
      "five years.",
    source: HANDBOOK,
    section: "Section 11: Your Driving Privilege - B. Habitual Traffic Offender",
    url: HANDBOOK_URL,
  },
  {
    key: "headlights-recommended",
    quote:
      "It is recommended that you use your low beams/headlights when: 1. " +
      "You are using your windshield wipers 2. It is rainy, snowy or " +
      "foggy",
    source: HANDBOOK,
    section: "Section 3: The Basics - K. Communication",
    url: HANDBOOK_URL,
  },
  {
    key: "headlights-required",
    quote:
      "You must use your low beams/headlights when: 1. You cannot see a " +
      "vehicle or person that is 500 feet (about one block) away 2. It is " +
      "a half hour past sunset to half hour before sunrise",
    source: HANDBOOK,
    section: "Section 3: The Basics - K. Communication",
    url: HANDBOOK_URL,
  },
  {
    key: "headphones",
    quote:
      "Do not drive with headsets or headphones that cover or go in both " +
      "ears. Keep your radio at a low volume so that you can hear " +
      "emergency vehicles.",
    source: HANDBOOK,
    section: "Section 9: Dangerous Driving Behaviors - B. Distracted Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "highbeams-dim",
    quote:
      "Go back to your low beams/headlights when a vehicle comes toward " +
      "you",
    source: HANDBOOK,
    section: "Section 3: The Basics - K. Communication",
    url: HANDBOOK_URL,
  },
  {
    key: "highbeams-when",
    quote:
      "You can use your high beams/brights when: 1. There are no vehicles " +
      "coming toward you 2. You are in an unfamiliar place or " +
      "construction area",
    source: HANDBOOK,
    section: "Section 3: The Basics - K. Communication",
    url: HANDBOOK_URL,
  },
  {
    key: "hydroplaning",
    quote:
      "Hydroplaning means your tires slide on top of the water. " +
      "Hydroplaning can happen at low speeds if your tires are bald.",
    source: HANDBOOK,
    section: "Section 7: Driving Conditions - B. Severe Weather",
    url: HANDBOOK_URL,
  },
  {
    key: "hydroplaning-steps",
    quote:
      "Ease your foot off the gas pedal Keep the wheel straight Do not " +
      "try to stop or turn until your tires are gripping the road again",
    source: HANDBOOK,
    section: "Section 7: Driving Conditions - B. Severe Weather",
    url: HANDBOOK_URL,
  },
  {
    key: "implied-consent",
    quote:
      "If a police officer asks you to take a prohibited alcohol " +
      "concentration (PAC) test, you must agree to take it. A PAC test " +
      "finds if you have a measurable amount of alcohol by a breathalyzer " +
      "or blood test.",
    source: HANDBOOK,
    section: "Section 9: Dangerous Driving Behaviors - A. Alcohol, Drugs and Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "implied-consent-refusal",
    quote:
      "If you refuse, the officer must arrest you for violation of the " +
      "Implied Consent Law. You will lose your driving privileges for at " +
      "least one year and face other consequences.",
    source: HANDBOOK,
    section: "Section 9: Dangerous Driving Behaviors - A. Alcohol, Drugs and Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "insurance-required",
    quote:
      "You must have valid liability car insurance to drive in Wisconsin. " +
      "You must present proof of insurance if a police officer requests " +
      "it.",
    source: HANDBOOK,
    section: "Section 12: Other Important Information - E. Insurance Requirements",
    url: HANDBOOK_URL,
  },
  {
    key: "intersection-search",
    quote:
      "Be alert by searching left, right and left again before going " +
      "through the intersection even if you have the right-of-way.",
    source: HANDBOOK,
    section: "Section 3: The Basics - C. Intersections",
    url: HANDBOOK_URL,
  },
  {
    key: "label-warning",
    quote:
      "Before you get behind the wheel, check the warning label for side " +
      "effects. If the label says do not operate heavy machinery, this " +
      "includes motor vehicles.",
    source: HANDBOOK,
    section: "Section 9: Dangerous Driving Behaviors - A. Alcohol, Drugs and Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "lane-change-blindspot",
    quote:
      "Move one lane at a time. Check over the shoulder in the direction " +
      "you are changing lanes. If moving to the left lane, check over " +
      "your left shoulder. If moving to the right lane, check over your " +
      "right shoulder.",
    source: HANDBOOK,
    section: "Section 3: The Basics - H. Passing",
    url: HANDBOOK_URL,
  },
  {
    key: "lane-flex",
    quote:
      "Some highways allow you to use the paved shoulder as a travel " +
      "lane. Signage will tell you when you can use this lane as a \"flex " +
      "lane.\" A solid yellow line separates this special lane.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - C. Special Lanes",
    url: HANDBOOK_URL,
  },
  {
    key: "lane-reserved",
    quote:
      "Reserved Lanes are for special vehicles only. These signs often " +
      "have a white diamond posted at the side of the sign and on the " +
      "roadway. It is illegal to travel in one of these lanes unless " +
      "operating that type of vehicle.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - C. Special Lanes",
    url: HANDBOOK_URL,
  },
  {
    key: "lane-shared-center",
    quote:
      "This lane is only for vehicles turning left or making a U-turn. " +
      "Vehicles can use this lane going in either direction.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - C. Special Lanes",
    url: HANDBOOK_URL,
  },
  {
    key: "lines-dashed-yellow",
    quote:
      "This means you may pass other vehicles when it is safe to do so. " +
      "Watch for other traffic if you choose to pass.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - B. Types of Line Markings",
    url: HANDBOOK_URL,
  },
  {
    key: "lines-double-yellow",
    quote:
      "These lines separate traffic going in opposite directions. Two " +
      "solid yellow lines means that no lane of travel can pass.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - B. Types of Line Markings",
    url: HANDBOOK_URL,
  },
  {
    key: "lines-double-yellow-exception",
    quote:
      "Exceptions: You can cross the line if you turn into a driveway and " +
      "it is safe to do so. You can pass a vehicle going less than half " +
      "the speed limit if it is safe, except if it is farm equipment.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - B. Types of Line Markings",
    url: HANDBOOK_URL,
  },
  {
    key: "lines-edge",
    quote:
      "Edge and Lane Lines - A solid white line indicates the right edge " +
      "of the traffic lane. A solid or dashed yellow line indicates the " +
      "left edge of the traffic lanes going in your direction.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - B. Types of Line Markings",
    url: HANDBOOK_URL,
  },
  {
    key: "lines-mixed-yellow",
    quote:
      "This means you may pass if you are on the dashed side of the line. " +
      "If you are on the solid side of the line, you may not pass.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - B. Types of Line Markings",
    url: HANDBOOK_URL,
  },
  {
    key: "lines-white-dashed",
    quote:
      "These divide lanes of traffic going in the same direction. You can " +
      "cross this line when it is safe. A white arrow shows what " +
      "direction you need to go.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - B. Types of Line Markings",
    url: HANDBOOK_URL,
  },
  {
    key: "lines-white-solid",
    quote:
      "A solid white line between lanes means you cannot cross. You can " +
      "only cross if there is a hazard or you are turning within the next " +
      "block.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - B. Types of Line Markings",
    url: HANDBOOK_URL,
  },
  {
    key: "merge-gap",
    quote:
      "In the acceleration lane you will speed up as you merge with the " +
      "traffic flow. This allows other cars that are already in the flow " +
      "of traffic to slow down or move over so you can merge with them. " +
      "It is your responsibility to find a safe gap in traffic to legally " +
      "merge.",
    source: HANDBOOK,
    section: "Section 3: The Basics - B. Understanding Vehicle Speed",
    url: HANDBOOK_URL,
  },
  {
    key: "motorcycle-space",
    quote:
      "Motorcycles are a lightweight vehicle and can stop faster than " +
      "most vehicles. Make sure to give motorcyclists extra room " +
      "especially when you are following one.",
    source: HANDBOOK,
    section: "Section 10: Sharing the Road - D. Motorcycles",
    url: HANDBOOK_URL,
  },
  {
    key: "move-over-law",
    quote:
      "If you are approaching an emergency vehicle with its lights " +
      "flashing, make sure to move into the lane not nearest the stopped " +
      "vehicle. Keep in the farthest lane until you have gone past the " +
      "emergency vehicle.",
    source: HANDBOOK,
    section: "Section 10: Sharing the Road - B. Emergency Vehicles",
    url: HANDBOOK_URL,
  },
  {
    key: "no-abs-pump",
    quote:
      "If your car does not have Anti-Lock Braking System (ABS), gently " +
      "pump the brakes. This will help your car from skidding or sliding " +
      "on slippery roads.",
    source: HANDBOOK,
    section: "Section 7: Driving Conditions - B. Severe Weather",
    url: HANDBOOK_URL,
  },
  {
    key: "no-zones",
    quote:
      "No-Zones are where large vehicles cannot see you. This area is " +
      "about 200 feet behind and 20 feet in front of large trucks.",
    source: HANDBOOK,
    section: "Section 10: Sharing the Road - F. No-Zones",
    url: HANDBOOK_URL,
  },
  {
    key: "parking-hill",
    quote:
      "If you are parked uphill with a curb, you will turn your wheels " +
      "all the way to the left before you put your car in park.",
    source: HANDBOOK,
    section: "Section 3: The Basics - J. Parking",
    url: HANDBOOK_URL,
  },
  {
    key: "parking-hill-down",
    quote:
      "If you are parked downhill, you will move your wheels all the way " +
      "to the right. Set your emergency brake.",
    source: HANDBOOK,
    section: "Section 3: The Basics - J. Parking",
    url: HANDBOOK_URL,
  },
  {
    key: "parking-hydrant-yellow",
    quote:
      "Parking is not allowed where there are yellow markings on the curb " +
      "or areas in front of fire hydrants.",
    source: HANDBOOK,
    section: "Section 3: The Basics - J. Parking",
    url: HANDBOOK_URL,
  },
  {
    key: "parking-level",
    quote:
      "When parking on a level surface, put your vehicle in (P) Park (or " +
      "in gear if you have a manual transmission) and set the parking " +
      "brake.",
    source: HANDBOOK,
    section: "Section 3: The Basics - J. Parking",
    url: HANDBOOK_URL,
  },
  {
    key: "pass-no-duty",
    quote:
      "Do not pass a vehicle unless there is enough room in front of the " +
      "vehicle you want to pass. Other vehicles do not have to move to " +
      "let you pass.",
    source: HANDBOOK,
    section: "Section 3: The Basics - H. Passing",
    url: HANDBOOK_URL,
  },
  {
    key: "pass-one-at-a-time",
    quote:
      "Pass only one vehicle at a time on the left side. Do not stay in " +
      "the passing lane, move safely back to your lane.",
    source: HANDBOOK,
    section: "Section 3: The Basics - H. Passing",
    url: HANDBOOK_URL,
  },
  {
    key: "pass-return",
    quote:
      "Once you see both headlights of the vehicle you just passed in " +
      "your rearview mirror it is safe to return to the driving lane.",
    source: HANDBOOK,
    section: "Section 3: The Basics - H. Passing",
    url: HANDBOOK_URL,
  },
  {
    key: "pass-shoulder",
    quote:
      "You can use a paved shoulder to go around someone only if they are " +
      "stopped or making a left turn.",
    source: HANDBOOK,
    section: "Section 3: The Basics - H. Passing",
    url: HANDBOOK_URL,
  },
  {
    key: "permit-darkness",
    quote:
      "If you operate a vehicle during hours of darkness, you must be " +
      "accompanied by a qualified instructor or a licensed person 25 " +
      "years of age with at least two years of licensed driving " +
      "experience occupying the seat beside you.",
    source: HANDBOOK,
    section: "Section 2: Progression of Licenses - B. Instruction Permit",
    url: HANDBOOK_URL,
  },
  {
    key: "permit-supervisor",
    quote:
      "The class D instruction permit holder must drive with someone else " +
      "in the car. This person must have at least two years of licensed " +
      "driving experience. This licensed driver must have a valid regular " +
      "license. This license cannot be a probationary or occupational " +
      "license.",
    source: HANDBOOK,
    section: "Section 2: Progression of Licenses - B. Instruction Permit",
    url: HANDBOOK_URL,
  },
  {
    key: "permit-who",
    quote:
      "A qualified instructor age 19 or older, or A parent, guardian or " +
      "spouse age 19 or older. In addition, immediate family members of " +
      "the applicant may ride in the back seat, or A person 21 years of " +
      "age or older.",
    source: HANDBOOK,
    section: "Section 2: Progression of Licenses - B. Instruction Permit",
    url: HANDBOOK_URL,
  },
  {
    key: "phone-permit",
    quote:
      "Instruction permit and probationary license holders can only use a " +
      "cell phone to report an emergency.",
    source: HANDBOOK,
    section: "Section 9: Dangerous Driving Behaviors - B. Distracted Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "points-12",
    quote:
      "You will not be able to drive if you get 12 or more demerit points " +
      "within any 12-month period. Your driving privilege will be " +
      "suspended or revoked.",
    source: HANDBOOK,
    section: "Section 11: Your Driving Privilege - A. Point System",
    url: HANDBOOK_URL,
  },
  {
    key: "points-doubled",
    quote:
      "If you hold a probationary license, ID card or no type of license, " +
      "you will have your points doubled. These points are doubled on the " +
      "second conviction and any thereafter.",
    source: HANDBOOK,
    section: "Section 11: Your Driving Privilege - A. Point System",
    url: HANDBOOK_URL,
  },
  {
    key: "prob-50-hours",
    quote:
      "With a valid instruction permit you must practice driving for at " +
      "least 40 hours during daylight and 10 hours during darkness (50 " +
      "total hours).",
    source: HANDBOOK,
    section: "Section 2: Progression of Licenses - C. Probationary License",
    url: HANDBOOK_URL,
  },
  {
    key: "prob-gdl-nine",
    quote:
      "These restrictions are required for the first nine months, unless " +
      "you turn 18 years old before then.",
    source: HANDBOOK,
    section: "Section 2: Progression of Licenses - C. Probationary License",
    url: HANDBOOK_URL,
  },
  {
    key: "prob-night-window",
    quote:
      "From 12 a.m. to 5 a.m., you can drive: Alone only IF driving " +
      "between home, school and/or work.",
    source: HANDBOOK,
    section: "Section 2: Progression of Licenses - C. Probationary License",
    url: HANDBOOK_URL,
  },
  {
    key: "prob-phone",
    quote:
      "Remember that phones are not allowed while driving unless you need " +
      "to report an emergency.",
    source: HANDBOOK,
    section: "Section 2: Progression of Licenses - C. Probationary License",
    url: HANDBOOK_URL,
  },
  {
    key: "prob-six-months",
    quote:
      "You need to have your instruction permit for at least six months " +
      "and turn 16 years old.",
    source: HANDBOOK,
    section: "Section 2: Progression of Licenses - C. Probationary License",
    url: HANDBOOK_URL,
  },
  {
    key: "prob-turn-18",
    quote:
      "Once you turn 18 the graduated driver license hours and passenger " +
      "restrictions no longer apply.",
    source: HANDBOOK,
    section: "Section 2: Progression of Licenses - C. Probationary License",
    url: HANDBOOK_URL,
  },
  {
    key: "railroad-look",
    quote:
      "Watch for railroad crossings. Do not assume a train is not coming " +
      "down the tracks. Stop before the crossing, look both ways and " +
      "listen for the train.",
    source: HANDBOOK,
    section: "Section 3: The Basics - E. Sight Distance Rule",
    url: HANDBOOK_URL,
  },
  {
    key: "roundabout-counter",
    quote:
      "Roundabouts are a safer and more efficient traffic flow option. " +
      "Traffic moves counterclockwise.",
    source: HANDBOOK,
    section: "Section 6: Driving Situations - A. Roundabouts",
    url: HANDBOOK_URL,
  },
  {
    key: "roundabout-emergency",
    quote:
      "If you have not entered the roundabout, pull over and allow " +
      "emergency vehicles to pass. If you are already in the roundabout, " +
      "safely exit at the next right, then pull over. Avoid stopping in " +
      "the roundabout.",
    source: HANDBOOK,
    section: "Section 6: Driving Situations - A. Roundabouts",
    url: HANDBOOK_URL,
  },
  {
    key: "roundabout-lane-choice",
    quote:
      "Generally, the left lane is marked for turning left. Travel in the " +
      "right lane to take the next right turn and the middle lane to go " +
      "straight.",
    source: HANDBOOK,
    section: "Section 6: Driving Situations - A. Roundabouts",
    url: HANDBOOK_URL,
  },
  {
    key: "roundabout-no-lane-change",
    quote:
      "If there is no traffic in the roundabout, you do not need to wait " +
      "to enter. Do not switch lanes while you are in the roundabout.",
    source: HANDBOOK,
    section: "Section 6: Driving Situations - A. Roundabouts",
    url: HANDBOOK_URL,
  },
  {
    key: "roundabout-steps",
    quote:
      "Yield to pedestrians and bicycles Yield to traffic on your left " +
      "that is already in the roundabout",
    source: HANDBOOK,
    section: "Section 6: Driving Situations - A. Roundabouts",
    url: HANDBOOK_URL,
  },
  {
    key: "row-emergency",
    quote: "Emergency vehicles if they are using their lights and/or sirens",
    source: HANDBOOK,
    section: "Section 3: The Basics - A. Right-Of-Way",
    url: HANDBOOK_URL,
  },
  {
    key: "row-fourway",
    quote: "The bicyclist or driver who arrives first to the four-way stop",
    source: HANDBOOK,
    section: "Section 3: The Basics - A. Right-Of-Way",
    url: HANDBOOK_URL,
  },
  {
    key: "row-left-turn",
    quote: "Approaching vehicles if you are making a left turn or a U-turn",
    source: HANDBOOK,
    section: "Section 3: The Basics - A. Right-Of-Way",
    url: HANDBOOK_URL,
  },
  {
    key: "row-roundabout",
    quote: "Traffic that is already in a roundabout (traffic circle)",
    source: HANDBOOK,
    section: "Section 3: The Basics - A. Right-Of-Way",
    url: HANDBOOK_URL,
  },
  {
    key: "row-tie-right",
    quote:
      "If one or more driver arrives to the stop at the same time, the " +
      "driver on the right goes first",
    source: HANDBOOK,
    section: "Section 3: The Basics - A. Right-Of-Way",
    url: HANDBOOK_URL,
  },
  {
    key: "row-tintersection",
    quote: "Cross traffic in an uncontrolled T-intersection",
    source: HANDBOOK,
    section: "Section 3: The Basics - A. Right-Of-Way",
    url: HANDBOOK_URL,
  },
  {
    key: "row-uncontrolled",
    quote:
      "Vehicles coming from the right when there are no signals or " +
      "traffic lights (uncontrolled intersections)",
    source: HANDBOOK,
    section: "Section 3: The Basics - A. Right-Of-Way",
    url: HANDBOOK_URL,
  },
  {
    key: "row-white-cane",
    quote:
      "Pedestrians using a guide dog or carrying a white cane (even if " +
      "they are no in the intersection). Stop at least ten feet away " +
      "until the person is off the roadway",
    source: HANDBOOK,
    section: "Section 3: The Basics - A. Right-Of-Way",
    url: HANDBOOK_URL,
  },
  {
    key: "rr-exempt",
    quote:
      "Some signs may have a \"Tracks out-of-service\" sign across them. " +
      "This means that the tracks are no longer in use. An \"Exempt\" sign " +
      "means certain vehicles are not required to stop before crossing.",
    source: HANDBOOK,
    section: "Section 4: Signs - H. Railroad Crossing",
    url: HANDBOOK_URL,
  },
  {
    key: "rr-gate",
    quote:
      "Train Gate - This will lower when a train is coming. Do not drive " +
      "around the gate or under a raising or lowering gate.",
    source: HANDBOOK,
    section: "Section 4: Signs - H. Railroad Crossing",
    url: HANDBOOK_URL,
  },
  {
    key: "rr-lights-flashing",
    quote:
      "There are blinking lights that flash when a train is coming on the " +
      "tracks in either direction. Wait until the lights stop flashing " +
      "and the track is clear to continue.",
    source: HANDBOOK,
    section: "Section 4: Signs - H. Railroad Crossing",
    url: HANDBOOK_URL,
  },
  {
    key: "rr-never-beat",
    quote:
      "Never try to beat a train across the tracks. Do not stop on the " +
      "tracks. Do not cross the tracks if there is not room on the other " +
      "side.",
    source: HANDBOOK,
    section: "Section 4: Signs - H. Railroad Crossing",
    url: HANDBOOK_URL,
  },
  {
    key: "rr-no-gears",
    quote:
      "Do not shift gears while crossing the railroad tracks. Before you " +
      "cross railroad tracks make sure to look both ways, even if the " +
      "railroad signs are not flashing.",
    source: HANDBOOK,
    section: "Section 4: Signs - H. Railroad Crossing",
    url: HANDBOOK_URL,
  },
  {
    key: "schoolbus-20-feet",
    quote:
      "When a school bus is stopped with its red lights flashing you need " +
      "to stop at least 20 feet from it. You must stop whether the school " +
      "bus is on your side of the road or the opposite side of the road.",
    source: HANDBOOK,
    section: "Section 10: Sharing the Road - C. School Buses",
    url: HANDBOOK_URL,
  },
  {
    key: "schoolbus-divided",
    quote:
      "If you are on a divided highway/roadway and not on the side of the " +
      "school bus, you do not need to stop. A divided highway has a " +
      "barrier between lanes going opposite directions.",
    source: HANDBOOK,
    section: "Section 10: Sharing the Road - C. School Buses",
    url: HANDBOOK_URL,
  },
  {
    key: "schoolbus-proceed",
    quote:
      "Watch for children. You can proceed once the red lights on the " +
      "school bus have stopped flashing.",
    source: HANDBOOK,
    section: "Section 10: Sharing the Road - C. School Buses",
    url: HANDBOOK_URL,
  },
  {
    key: "seatbelt-airbag",
    quote:
      "You still need to wear your seat belt even if your vehicle has air " +
      "bags.",
    source: HANDBOOK,
    section: "Section 12: Other Important Information - D. Seat Belts (Safety Belts)",
    url: HANDBOOK_URL,
  },
  {
    key: "seatbelt-all-ages",
    quote:
      "Wisconsin law requires that you and your passengers wear seat " +
      "belts (safety belts) at any age. They help keep you in a position " +
      "to control the vehicle. The seat belt will help avoid injury in a " +
      "crash and help you from being thrown from the vehicle.",
    source: HANDBOOK,
    section: "Section 12: Other Important Information - D. Seat Belts (Safety Belts)",
    url: HANDBOOK_URL,
  },
  {
    key: "sidewalk-illegal",
    quote: "It is illegal to drive on a sidewalk unless you are crossing it.",
    source: HANDBOOK,
    section: "Section 10: Sharing the Road - A. Pedestrians",
    url: HANDBOOK_URL,
  },
  {
    key: "sight-10-15",
    quote:
      "If you cannot see 10 to 15 seconds ahead, you must slow down so " +
      "you have better control of your vehicle in the traffic " +
      "environment.",
    source: HANDBOOK,
    section: "Section 3: The Basics - E. Sight Distance Rule",
    url: HANDBOOK_URL,
  },
  {
    key: "signal-100-feet",
    quote:
      "If you are turning at an intersection, you should start signaling " +
      "about three seconds (about 100 feet) before the turn.",
    source: HANDBOOK,
    section: "Section 3: The Basics - K. Communication",
    url: HANDBOOK_URL,
  },
  {
    key: "signal-flashing-red",
    quote:
      "Flashing Red - You must come to a full stop. You may go when it is " +
      "safe to do so.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - A. Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "signal-flashing-yellow",
    quote:
      "Flashing Yellow - Slow down, check for cross traffic and proceed " +
      "with caution.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - A. Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "signal-flashing-yellow-arrow",
    quote:
      "Flashing Yellow Arrow - Yield first before turning and proceed " +
      "with caution.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - A. Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "signal-green-arrow",
    quote:
      "Steady Green Arrow - You can turn in the direction of the arrow. " +
      "There should be no oncoming or crossing traffic while the arrow is " +
      "green. Remember to watch for pedestrians.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - A. Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "signal-green-left",
    quote:
      "If you are turning left, a steady green light means you may turn, " +
      "but only when it is safe to do so. Oncoming traffic has the " +
      "right-of-way.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - A. Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "signal-power-out",
    quote:
      "If a traffic light loses power or is not working right, proceed as " +
      "if the signal were a stop sign.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - A. Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "signal-red-arrow",
    quote:
      "Steady Red Arrow - You must come to a full stop and wait for the " +
      "light to turn green.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - A. Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "signal-steady-green",
    quote:
      "Steady Green - You can go through the intersection. You must yield " +
      "to emergency vehicles and others as required by law. If you are " +
      "stopped and then the light turns green, you must allow cross " +
      "traffic to clear before you can go ahead.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - A. Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "signal-steady-red",
    quote:
      "Steady Red - Come to a full stop. You must wait until the traffic " +
      "light turns green and there is no cross traffic. You can turn " +
      "right on red if it is safe to do so and there is no sign " +
      "prohibiting it. You may turn left on red if you are turning from a " +
      "one-way on to a one-way street.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - A. Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "signal-steady-yellow",
    quote:
      "Steady Yellow - The light is about to change to red. You must slow " +
      "down and stop before entering the intersection. If you are in the " +
      "intersection when the yellow light comes on, do not stop. You can " +
      "continue through the intersection.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - A. Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "signal-turn-on-red",
    quote:
      "When turning on red you need to stop first, yield to all traffic " +
      "and then proceed staying in your lane.",
    source: HANDBOOK,
    section: "Section 5: Signals, Pavement Markings and Lane Controls - A. Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-construction",
    quote:
      "These signs are for construction, maintenance or emergency " +
      "workers. They are an orange diamond or rectangle. The lettering " +
      "and symbols are black. These signs warn you about people working " +
      "on or near the road.",
    source: HANDBOOK,
    section: "Section 4: Signs - C. Construction",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-destination-green",
    quote:
      "Destination signs are square or rectangular. They are green or " +
      "brown with white lettering. They show directions and distance to " +
      "different places.",
    source: HANDBOOK,
    section: "Section 4: Signs - D. Destination",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-divided-highway",
    quote:
      "Divided Highway - Two lanes where the traffic is going in opposite " +
      "directions on the highway. The traffic ahead will come across a " +
      "physical barrier such as a guardrail.",
    source: HANDBOOK,
    section: "Section 4: Signs - A. Warning",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-do-not-enter",
    quote:
      "Do Not Enter - You cannot enter. This is used on exit ramps going " +
      "the wrong direction or one-way streets.",
    source: HANDBOOK,
    section: "Section 4: Signs - B. Regulatory",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-interstate",
    quote:
      "Interstate Highway - This sign looks like a shield with red on top " +
      "and blue on the bottom. It has white lettering.",
    source: HANDBOOK,
    section: "Section 4: Signs - G. Route Number",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-mile-marker",
    quote:
      "Each mile marker includes the direction of travel, route number " +
      "and mile number. They are at every one to two-tenths of a mile.",
    source: HANDBOOK,
    section: "Section 4: Signs - F. Mile Marker",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-no-passing",
    quote:
      "No Passing Zone - A yellow pennant with black lettering. You are " +
      "not allowed to pass any vehicle in the no passing zone.",
    source: HANDBOOK,
    section: "Section 4: Signs - B. Regulatory",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-obey-officer",
    quote:
      "Police, school crossing guards and other workers sometimes use " +
      "them. You must follow their directions even if they are different " +
      "from the traffic light or sign on the road.",
    source: HANDBOOK,
    section: "Section 4: Signs",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-regulatory-shape",
    quote:
      "These signs are square, rectangle or a special shape. They can be " +
      "white or red with black, red, white or green lettering and " +
      "symbols. The sign will tell you the rules of the road.",
    source: HANDBOOK,
    section: "Section 4: Signs - B. Regulatory",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-school-crossing",
    quote:
      "School Crossing, School Zone (May be fluorescent green or yellow) " +
      "- This sign shows pedestrians in the main sign and an arrow below. " +
      "This is specific to school zones and crossings. Yield to crossing " +
      "pedestrians.",
    source: HANDBOOK,
    section: "Section 4: Signs - A. Warning",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-school-speed",
    quote:
      "Speed Limit in a School Zone - When children are visible you " +
      "cannot go over the speed listed.",
    source: HANDBOOK,
    section: "Section 4: Signs - B. Regulatory",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-service-blue",
    quote:
      "Service signs are square or rectangular. They are blue with white " +
      "letters or symbols. They show you how to get to different services " +
      "nearby.",
    source: HANDBOOK,
    section: "Section 4: Signs - E. Service",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-slow-moving",
    quote:
      "Slow Moving Vehicle - A triangle shaped sign with reflective " +
      "orange markings. This vehicle could travel at 25 mph or less.",
    source: HANDBOOK,
    section: "Section 4: Signs - B. Regulatory",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-speed-limit",
    quote:
      "Speed Limit - This indicates the maximum speed you can drive in " +
      "good driving conditions.",
    source: HANDBOOK,
    section: "Section 4: Signs - B. Regulatory",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-stop",
    quote:
      "Stop - This sign has eight sides and is red with white letters. " +
      "You must come to a complete stop and wait until your path is clear " +
      "before continuing.",
    source: HANDBOOK,
    section: "Section 4: Signs - B. Regulatory",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-stop-ahead",
    quote:
      "Stop Ahead - There is a stop sign ahead. Slow down so that you can " +
      "safely stop.",
    source: HANDBOOK,
    section: "Section 4: Signs - A. Warning",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-warning-yellow",
    quote:
      "These signs are yellow with black lettering or symbols. Most are " +
      "diamond shaped. They warn you about a special situation or that a " +
      "hazard is ahead.",
    source: HANDBOOK,
    section: "Section 4: Signs - A. Warning",
    url: HANDBOOK_URL,
  },
  {
    key: "signs-yield",
    quote:
      "Yield - A downward pointing red and white triangle with red " +
      "letters. This sign means that you must yield right-of-way to other " +
      "vehicles.",
    source: HANDBOOK,
    section: "Section 4: Signs - B. Regulatory",
    url: HANDBOOK_URL,
  },
  {
    key: "skid-steps",
    quote:
      "Stay off the brake Turn the wheel in the direction you want the " +
      "vehicle to go As soon as your car begins to straighten, turn the " +
      "wheel back the other way",
    source: HANDBOOK,
    section: "Section 7: Driving Conditions - B. Severe Weather",
    url: HANDBOOK_URL,
  },
  {
    key: "space-mirror-6-8",
    quote:
      "Check your rearview mirror every 6 to 8 seconds to see if someone " +
      "is following too closely (tailgating).",
    source: HANDBOOK,
    section: "Section 3: The Basics - F. Space Between Vehicles",
    url: HANDBOOK_URL,
  },
  {
    key: "speed-no-pass",
    quote:
      "It is illegal to go over the speed limit that is on the sign. You " +
      "cannot drive over the speed limit to pass other vehicles.",
    source: HANDBOOK,
    section: "Section 3: The Basics - B. Understanding Vehicle Speed",
    url: HANDBOOK_URL,
  },
  {
    key: "speed-outlying-35",
    quote:
      "The maximum speed limit in outlying parts of cities and villages " +
      "with no posted speed limit is 35mph.",
    source: HANDBOOK,
    section: "Section 3: The Basics - B. Understanding Vehicle Speed",
    url: HANDBOOK_URL,
  },
  {
    key: "speed-residential-25",
    quote:
      "Unless otherwise posted, the speed limit in residential areas is " +
      "25 miles per hour.",
    source: HANDBOOK,
    section: "Section 3: The Basics - B. Understanding Vehicle Speed",
    url: HANDBOOK_URL,
  },
  {
    key: "speed-school-15",
    quote:
      "The normal speed limit in a school zone when children are present " +
      "is 15 miles per hour.",
    source: HANDBOOK,
    section: "Section 3: The Basics - B. Understanding Vehicle Speed",
    url: HANDBOOK_URL,
  },
  {
    key: "speed-slow-lane",
    quote:
      "Drive in the far-right lane of a multi-lane road if you are " +
      "driving slower than most traffic.",
    source: HANDBOOK,
    section: "Section 3: The Basics - B. Understanding Vehicle Speed",
    url: HANDBOOK_URL,
  },
  {
    key: "speed-too-slow",
    quote:
      "Going too fast or too slow could cause a crash. Going too slow can " +
      "cause vehicles to back up behind you and cause a crash. In both " +
      "instances you could be given a ticket by police.",
    source: HANDBOOK,
    section: "Section 3: The Basics - B. Understanding Vehicle Speed",
    url: HANDBOOK_URL,
  },
  {
    key: "st-absolute-sobriety",
    quote:
      "If a person has not attained the legal drinking age, as defined in " +
      "s. 125.02 (8m), the person may not drive or operate a motor " +
      "vehicle while he or she has an alcohol concentration of more than " +
      "0.0 but not more than 0.08.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.63(2m) - Operating under influence of intoxicant or other drug",
    url: stat("346.63"),
  },
  {
    key: "st-bicycle-3-feet",
    quote:
      "The operator of a motor vehicle overtaking a bicycle, electric " +
      "scooter, or electric personal assistive mobility device proceeding " +
      "in the same direction shall exercise due care, leaving a safe " +
      "distance, but in no case less than 3 feet clearance when passing " +
      "the bicycle,",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.075(1) - Overtaking certain vehicles and devices",
    url: stat("346.075"),
  },
  {
    key: "st-dead-red-45",
    quote:
      "a motorcycle, moped, motor bicycle, or bicycle facing a red signal " +
      "at an intersection may, after stopping as required under subd. 1. " +
      "for not less than 45 seconds, proceed cautiously through the " +
      "intersection before the signal turns green if no other vehicles " +
      "are present at the intersection to actuate the signal",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.37(1)(c)4. - Traffic-control signal legend",
    url: stat("346.37"),
  },
  {
    key: "st-emergency-yield",
    quote:
      "Upon the approach of any authorized emergency vehicle giving " +
      "audible signal by siren the operator of a vehicle shall yield the " +
      "right-of-way and shall immediately drive such vehicle to a " +
      "position as near as possible and parallel to the right curb or the " +
      "right-hand edge of the shoulder of the roadway,",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.19(1) - What to do on approach of emergency vehicle",
    url: stat("346.19"),
  },
  {
    key: "st-firestation-30",
    quote:
      "The operator of a motor vehicle approaching an authorized " +
      "emergency vehicle shall stop not less than 30 feet from that " +
      "vehicle and shall remain stopped, if all of the following apply:",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.455(1) - Vehicles to stop at fire station",
    url: stat("346.455"),
  },
  {
    key: "st-flashing-yellow-arrow",
    quote:
      "Vehicular traffic facing a flashing yellow arrow signal may " +
      "cautiously enter the intersection to make the movement indicated " +
      "by the arrow but shall yield the right-of-way to pedestrians, " +
      "personal delivery devices, bicyclists,",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.37(1)(e)1. - Traffic-control signal legend",
    url: stat("346.37"),
  },
  {
    key: "st-minimum-speed",
    quote:
      "No person shall drive a motor vehicle at a speed so slow as to " +
      "impede the normal and reasonable movement of traffic except when " +
      "reduced speed is necessary for safe operation or is necessary to " +
      "comply with the law.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.59(1) - Minimum speed regulation",
    url: stat("346.59"),
  },
  {
    key: "st-move-over-12-feet",
    quote:
      "If an emergency or roadside service vehicle or a disabled vehicle " +
      "is parked or standing on or within 12 feet of a roadway, the " +
      "operator of a motor vehicle approaching the emergency or roadside " +
      "service vehicle or disabled vehicle shall proceed with due regard " +
      "for all other traffic and shall do either of the following:",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.072(1m) - Passing certain stopped vehicles",
    url: stat("346.072"),
  },
  {
    key: "st-move-over-lane",
    quote:
      "Move the motor vehicle into a lane that is not the lane nearest " +
      "the parked or standing emergency or roadside service vehicle or " +
      "disabled vehicle and continue traveling in that lane until safely " +
      "clear of the emergency or roadside service vehicle or disabled " +
      "vehicle.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.072(1m)(a) - Passing certain stopped vehicles",
    url: stat("346.072"),
  },
  {
    key: "st-move-over-slow",
    quote:
      "Slow the motor vehicle, maintaining a safe speed for traffic " +
      "conditions, and operate the motor vehicle at a reduced speed until " +
      "completely past the emergency or roadside service vehicle or " +
      "disabled vehicle.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.072(1m)(b) - Passing certain stopped vehicles",
    url: stat("346.072"),
  },
  {
    key: "st-open-container",
    quote:
      "No person may possess on his or her person, in a privately owned " +
      "motor vehicle upon a public highway, any bottle or receptacle " +
      "containing alcohol beverages or nitrous oxide if the bottle or " +
      "receptacle has been opened,",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.935(2) - Intoxicants in motor vehicles",
    url: stat("346.935"),
  },
  {
    key: "st-open-trunk",
    quote:
      "This subsection does not apply if the bottle or receptacle is kept " +
      "in the trunk of the vehicle or, if the vehicle has no trunk, in " +
      "some other area of the vehicle not normally occupied by the driver " +
      "or passengers.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.935(3) - Intoxicants in motor vehicles",
    url: stat("346.935"),
  },
  {
    key: "st-park-crosswalk-15",
    quote: "Closer than 15 feet to the near limits of a crosswalk.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.53(5) - Parking prohibited in certain specified places",
    url: stat("346.53"),
  },
  {
    key: "st-park-driveway-4",
    quote:
      "Within 4 feet of the entrance to an alley or a private road or " +
      "driveway.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.53(4) - Parking prohibited in certain specified places",
    url: stat("346.53"),
  },
  {
    key: "st-park-hydrant-10",
    quote:
      "Within 10 feet of a fire hydrant, unless a greater distance is " +
      "indicated by an official traffic sign.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.53(3) - Parking prohibited in certain specified places",
    url: stat("346.53"),
  },
  {
    key: "st-park-left-side",
    quote:
      "No person shall stop or leave standing any vehicle on the left " +
      "side of a highway except as provided in ss. 167.31 (4) (co) and " +
      "346.54.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.55(1) - Other restrictions on parking and stopping",
    url: stat("346.55"),
  },
  {
    key: "st-ped-crosswalk",
    quote:
      "At an intersection or crosswalk where traffic is not controlled by " +
      "traffic control signals or by a traffic officer, the operator of a " +
      "vehicle shall yield the right-of-way to a pedestrian or personal " +
      "delivery device,",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.24(1) - Crossing at uncontrolled intersection or crosswalk",
    url: stat("346.24"),
  },
  {
    key: "st-phone-permit",
    quote:
      "Subject to sub. (3), no person who holds a probationary license " +
      "issued under s. 343.085, or an instruction permit issued under s. " +
      "343.07, may drive, as defined in s. 343.305 (1) (b), any motor " +
      "vehicle while using a cellular or other wireless telephone, except " +
      "to report an emergency.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.89(4)(a) - Inattentive driving",
    url: stat("346.89"),
  },
  {
    key: "st-railroad-gate",
    quote:
      "The operator of a vehicle shall not drive through, around or under " +
      "any crossing gate or barrier at a railroad crossing while such " +
      "gate or barrier is closed or is being opened or closed.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.44(2) - All vehicles to stop at signal indicating approach of train",
    url: stat("346.44"),
  },
  {
    key: "st-red-turn",
    quote:
      "Vehicular traffic facing a red signal at an intersection may, " +
      "after stopping as required under subd. 1., cautiously enter the " +
      "intersection to make a right turn into the nearest lawfully " +
      "available lane for traffic moving to the right",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.37(1)(c)3. - Traffic-control signal legend",
    url: stat("346.37"),
  },
  {
    key: "st-red-turn-sign",
    quote:
      "No turn may be made on a red signal if a sign at the intersection " +
      "prohibits the turn on a red signal.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.37(1)(c)3. - Traffic-control signal legend",
    url: stat("346.37"),
  },
  {
    key: "st-roundabout-big-vehicle",
    quote:
      "The operator of a vehicle shall yield the right-of-way to any " +
      "vehicle or combination of vehicles with a total length of not less " +
      "than 40 feet or a total width of not less than 10 feet when " +
      "approaching or driving through a roundabout at approximately the " +
      "same time or so closely as to constitute a hazard of collision",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.18(8)(a) - Roundabout",
    url: stat("346.18"),
  },
  {
    key: "st-row-left-turn",
    quote:
      "The operator of a vehicle within an intersection intending to turn " +
      "to the left or make a U-turn shall yield the right-of-way to any " +
      "vehicle approaching from the opposite direction.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.18(2) - Turning left or making a U-turn at intersection",
    url: stat("346.18"),
  },
  {
    key: "st-row-parked",
    quote:
      "The operator of any vehicle that has been parked or standing " +
      "shall, while moving such vehicle from such position, yield the " +
      "right-of-way to all vehicles approaching on the highway.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.18(5) - Moving from parked position",
    url: stat("346.18"),
  },
  {
    key: "st-row-right",
    quote:
      "when 2 vehicles approach or enter an intersection at approximately " +
      "the same time, the operator of the vehicle on the left shall yield " +
      "the right-of-way to the vehicle on the right.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.18(1) - General rule at intersections",
    url: stat("346.18"),
  },
  {
    key: "st-row-unlawful-speed",
    quote:
      "The operator of any vehicle driving at an unlawful speed forfeits " +
      "any right-of-way which he or she would otherwise have under this " +
      "subsection.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.18(1) - General rule at intersections",
    url: stat("346.18"),
  },
  {
    key: "st-schoolbus-20",
    quote:
      "The operator of a vehicle which approaches from the front or rear " +
      "any school bus which has stopped on a street or highway when the " +
      "bus is equipped according to s. 347.25 (2) and when it is " +
      "displaying flashing red warning lights, shall stop the vehicle not " +
      "less than 20 feet from the bus",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.48(1) - Vehicles to stop for school buses displaying flashing lights",
    url: stat("346.48"),
  },
  {
    key: "st-schoolbus-divided",
    quote:
      "This subsection does not apply to operators of vehicles proceeding " +
      "in the opposite direction on a divided highway.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.48(1) - Vehicles to stop for school buses displaying flashing lights",
    url: stat("346.48"),
  },
  {
    key: "st-signal-100-feet",
    quote:
      "When given by the operator of a vehicle other than a bicycle, " +
      "electric scooter, or electric personal assistive mobility device, " +
      "the signal shall be given continuously during not less than the " +
      "last 100 feet traveled by the vehicle before turning.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.34(1)(b) - Turning movements and required signals",
    url: stat("346.34"),
  },
  {
    key: "st-snowplow-200",
    quote:
      "Two hundred feet upon any highway having a posted speed limit of " +
      "more than 35 miles per hour. 346.915(2)(a)2.2. Seventy-five feet " +
      "upon any highway having a posted speed limit of 35 miles per hour " +
      "or less.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.915(2)(a) - Following snowplows",
    url: stat("346.915"),
  },
  {
    key: "st-speed-25-city",
    quote:
      "Twenty-five miles per hour on any highway within the corporate " +
      "limits of a city or village, other than on highways in outlying " +
      "districts in such city or village.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.57(4)(e)",
    url: stat("346.57"),
  },
  {
    key: "st-speed-35-outlying",
    quote:
      "Thirty-five miles per hour in any outlying district within the " +
      "corporate limits of a city or village.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.57(4)(f)",
    url: stat("346.57"),
  },
  {
    key: "st-speed-35-semiurban",
    quote:
      "Thirty-five miles per hour on any highway in a semiurban district " +
      "outside the corporate limits of a city or village.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.57(4)(g)",
    url: stat("346.57"),
  },
  {
    key: "st-speed-55-default",
    quote:
      "In the absence of any other fixed limits or the posting of limits " +
      "as required or authorized by law, 55 miles per hour.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.57(4)(h)",
    url: stat("346.57"),
  },
  {
    key: "st-speed-expressway-65",
    quote:
      "Except as provided in subd. 2., 65 miles per hour on any " +
      "expressway.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.57(4)(gm)1.",
    url: stat("346.57"),
  },
  {
    key: "st-speed-freeway-70",
    quote:
      "Seventy miles per hour on any freeway, including freeways that are " +
      "a part of the national system of interstate and defense highways, " +
      "and on any portion of an expressway that gives preference to " +
      "through traffic by utilizing interchanges only.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.57(4)(gm)2.",
    url: stat("346.57"),
  },
  {
    key: "st-speed-schoolhouse-15",
    quote:
      "Fifteen miles per hour when passing a schoolhouse at those times " +
      "when children are going to or from school or are playing within " +
      "the sidewalk area at or about the school.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.57(4)(a)",
    url: stat("346.57"),
  },
  {
    key: "st-stop-firestation-15",
    quote:
      "Within 15 feet of the driveway entrance to a fire station or " +
      "directly across the highway from a fire station entrance.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.52(1)(g) - Stopping prohibited in certain specified places",
    url: stat("346.52"),
  },
  {
    key: "st-stop-intersection-crosswalk",
    quote:
      "No person may stop or leave standing any vehicle, whether attended " +
      "or unattended and whether temporarily or otherwise, in any of the " +
      "following places: 346.52(1)(a)(a) Within an intersection. " +
      "346.52(1)(b)(b) On a crosswalk.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.52(1) - Stopping prohibited in certain specified places",
    url: stat("346.52"),
  },
  {
    key: "st-stop-railroad-25",
    quote: "Within 25 feet of the nearest rail at a railroad crossing.",
    source: STATUTES,
    section: "Wisconsin Statutes Section 346.52(1)(i) - Stopping prohibited in certain specified places",
    url: stat("346.52"),
  },
  {
    key: "test-knowledge-50",
    quote:
      "The knowledge test will include 50 questions. You need to answer " +
      "40 questions (80%) correctly to pass the test.",
    source: HANDBOOK,
    section: "Section 1: Driving Test Requirements - C. Knowledge Test",
    url: HANDBOOK_URL,
  },
  {
    key: "test-knowledge-time",
    quote:
      "This will test your knowledge of the traffic laws. You do not need " +
      "to make an appointment to take this test. This test will take " +
      "about 45 minutes to complete.",
    source: HANDBOOK,
    section: "Section 1: Driving Test Requirements - C. Knowledge Test",
    url: HANDBOOK_URL,
  },
  {
    key: "test-online-fee",
    quote:
      "Applicants between ages 15 and 17 may also take the knowledge test " +
      "online for a fee of $10.",
    source: HANDBOOK,
    section: "Section 1: Driving Test Requirements - C. Knowledge Test",
    url: HANDBOOK_URL,
  },
  {
    key: "test-signs-15",
    quote:
      "There are 15 questions on this test. You need to answer 12 " +
      "questions (80%) correctly to pass the test.",
    source: HANDBOOK,
    section: "Section 1: Driving Test Requirements - B. Highway Signs Test",
    url: HANDBOOK_URL,
  },
  {
    key: "time-sobers",
    quote: "Time is the only thing that will sober you up.",
    source: HANDBOOK,
    section: "Section 9: Dangerous Driving Behaviors - A. Alcohol, Drugs and Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "turn-multiple-lanes",
    quote:
      "If you start turning from the left-most lane you should end up in " +
      "the left-most lane. If you are in the middle lane you need to end " +
      "up in the middle lane of the street you are turning onto.",
    source: HANDBOOK,
    section: "Section 3: The Basics - G. Turning",
    url: HANDBOOK_URL,
  },
  {
    key: "turn-no-lane-change",
    quote:
      "Stay in your lane while you make your turn and do not change lanes " +
      "while turning. Do not cross over the center line when you turn.",
    source: HANDBOOK,
    section: "Section 3: The Basics - G. Turning",
    url: HANDBOOK_URL,
  },
  {
    key: "turn-right-fourlane",
    quote:
      "To turn right off a four-lane roadway, you must turn from the lane " +
      "nearest the right curb or edge of the roadway.",
    source: HANDBOOK,
    section: "Section 3: The Basics - G. Turning",
    url: HANDBOOK_URL,
  },
  {
    key: "under-21-zero",
    quote:
      "The legal alcohol concentration allowed for drivers under the age " +
      "of 21 is 0.00%. This means that you cannot have any alcohol in " +
      "your system while driving a vehicle.",
    source: HANDBOOK,
    section: "Section 9: Dangerous Driving Behaviors - A. Alcohol, Drugs and Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "uturn-rural",
    quote:
      "You can make a U-turn in any rural two-lane highway if it is done " +
      "safely and you do not interfere with traffic.",
    source: HANDBOOK,
    section: "Section 3: The Basics - G. Turning",
    url: HANDBOOK_URL,
  },
  {
    key: "winter-no-cruise",
    quote: "Do not use cruise control on slippery roads",
    source: HANDBOOK,
    section: "Section 7: Driving Conditions - C. Winter",
    url: HANDBOOK_URL,
  },
  {
    key: "winter-snowplow-200",
    quote:
      "Give snowplows at least 200 feet of room when their lights are " +
      "flashing red, amber or green",
    source: HANDBOOK,
    section: "Section 7: Driving Conditions - C. Winter",
    url: HANDBOOK_URL,
  },
  {
    key: "workzone-fines-double",
    quote:
      "This is your signal to slow down. Traffic fines double in these " +
      "areas. You can only use your cellphone in a construction zone if " +
      "you are reporting an emergency.",
    source: HANDBOOK,
    section: "Section 4: Signs - C. Construction",
    url: HANDBOOK_URL,
  },
];
