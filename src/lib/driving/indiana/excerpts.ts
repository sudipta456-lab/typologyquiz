import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the Indiana Driver's Manual, published by the
// Indiana Bureau of Motor Vehicles, plus a handful from BMV pages on in.gov
// that carry rules the manual states nowhere: the knowledge exam's two-section
// structure and 80 percent per-component pass mark, how long a pass stays
// valid, and the .02 alcohol condition attached to a Restriction 2 licence.
//
// The manual itself never states how many questions the driver knowledge exam
// contains, and neither does any BMV page. Nothing here asserts a count.
//
// Every quote below was located mechanically in the fetched source and checked
// as an exact substring before it was written. Nothing is paraphrased. Four
// normalisations were applied to the extracted text and to nothing else: curly
// quotes, en dashes and em dashes are folded to ASCII; runs of whitespace,
// including the line breaks the PDF inserts mid-sentence, are collapsed to
// single spaces; bullet glyphs become "*"; and where the manual states a rule
// as a stem followed by a bulleted list, the items are run together in the
// order they appear - no words are changed, dropped or reordered. The BMV's own
// spellings and slips are preserved as they stand, including "The exam include
// multiple choice questions", because a quote that has been tidied up is no
// longer a quote.
//
// Chapter URLs point at the BMV's own per-chapter PDFs, which is where each
// quote was verified. Each excerpt is kept to the operative rule and shown with
// its source, section and a link back to the official page.

export const indianaExcerpts: HandbookExcerpt[] = [
  {
    key: "abs-do-not-pump",
    quote:
      "If your vehicle has an anti-lock brake system (ABS), keep your " +
      "foot on the brake pedal, maintaining firm and continuous pressure, " +
      "while steering normally. Do not pump the brakes.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Skidding",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "abs-working-signs",
    quote:
      "A mechanical sound or noise and vibration or increased resistance " +
      "in the brake pedal indicates your ABS is working.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Skidding",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "access-aisle-purpose",
    quote:
      "This striped space allows a wheelchair user to transfer in and out " +
      "of his or her vehicle.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Handicap Accessible Parking",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "accident-do-not-move",
    quote:
      "However, the driver should not move the motor vehicle if the " +
      "accident involves the transportation of hazardous materials or " +
      "results in injury, death, or entrapment.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 8: Accidents and Emergency Situations - Should You Move Your Vehicle?",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_8.pdf",
  },
  {
    key: "accident-must-stop",
    quote:
      "The driver of a motor vehicle involved in an accident must stop " +
      "immediately or as close as possible to the scene of the accident " +
      "without obstructing traffic more than necessary.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 8: Accidents and Emergency Situations - Should You Move Your Vehicle?",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_8.pdf",
  },
  {
    key: "accident-unattended-vehicle",
    quote:
      "If the collision was with an unattended vehicle or other property, " +
      "the driver must stop and remain at the scene of the accident, take " +
      "reasonable steps to notify the owner of the damaged property, and " +
      "if the owner cannot be located, call a law enforcement agency in " +
      "order to provide information.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 8: Accidents and Emergency Situations - Provide Reasonable Assistance",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_8.pdf",
  },
  {
    key: "address-change-30-days",
    quote:
      "If you have an Indiana credential, you must notify the BMV of a " +
      "change of your principal (legal) address and apply for an amended " +
      "credential within 30 days of the address change.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 4: Renewing, Amending, or Replacing a Credential - Address Change",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_4.pdf",
  },
  {
    key: "adult-permit-practice",
    quote:
      "You may practice driving with a learner's permit only when " +
      "accompanied by a licensed driver with valid (not expired, " +
      "suspended, or revoked) driving privileges who is at least 25 years " +
      "of age, or with your spouse provided he or she is licensed and at " +
      "least 21 years of age or older.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 1: Obtaining a New Credential - Practice Driving with Your Learner's Permit",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_1.pdf",
  },
  {
    key: "aggressive-list",
    quote:
      "Unnecessary sounding of the horn * Failure to yield * Failure to " +
      "obey a traffic control device * Driving at an unsafe speed * " +
      "Repeatedly flashing the vehicle's headlights",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Aggressive Driving",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "aggressive-three-acts",
    quote:
      "According to Indiana law, a person engages in aggressive driving " +
      "if, during one episode of continuous driving of a vehicle, the " +
      "person does or commits at least three of the following:",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Aggressive Driving",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "all-way-stop-doubt",
    quote:
      "However, if there is any doubt which driver has the right of way " +
      "or if there is the chance of a crash, it is better to yield the " +
      "right of way to the other driver.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - All-Way Stops",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "all-way-stop-first",
    quote:
      "At an all-way stop, the rule is that the first vehicle to stop at " +
      "the intersection is the first to proceed through the intersection.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - All-Way Stops",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "all-way-stop-tie",
    quote:
      "However, you may occasionally arrive at an all-way stop sign at " +
      "the same time as another driver. The vehicle on the left shall " +
      "yield the right-of-way.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - All-Way Stops",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "alley-driveway-stop",
    quote:
      "Before entering a street from an alley or driveway, you should " +
      "stop and yield the right of way to other vehicles.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Approaching an Intersection with No Sign or Signal",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "alleys-15",
    quote:
      "In alleys, vehicles may not exceed 15 miles per hour or the posted " +
      "speed limit",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Urban Speed Limits",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "arrow-board-no-direction",
    quote:
      "A flashing arrow board not indicating a direction either way is a " +
      "signal to use caution but does not require a driver to move to " +
      "another lane.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Work Zones",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "being-passed",
    quote:
      "If another vehicle is passing you on the left-hand side of the " +
      "road, allow the other vehicle to pass safely and do not increase " +
      "your speed.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Being Passed",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "bicycle-check-door",
    quote:
      "After parking and before opening vehicle doors, a motorist should " +
      "first check for bicyclists.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Bicycles",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "bicycle-lane-no-turn-prep",
    quote:
"Do not move into a bicycle path or lane in preparation for a turn",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Bicycle Lanes",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "bicycle-left-turn-lane",
    quote:
      "If a motorist is sharing the left turn lane with a bicyclist, stay " +
      "behind the cyclist until he or she has safely completed the left " +
      "turn",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Bicycles",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "bicycle-right-turn",
    quote:
      "If a motorist is turning right and a bicyclist is approaching on " +
      "the right, let the cyclist go through the intersection first " +
      "before making a right turn",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Bicycles",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "bicycle-signal",
    quote:
      "A signal that displays only bicycle symbols controls a bike lane " +
      "or a separate bike path and is only applicable to bicyclists.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Bicycle Signals",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "bicycle-three-feet",
    quote:
      "Drivers may pass a bicyclist when there is a safe amount of room " +
      "beside the bicyclist (minimum three feet) and when there is no " +
      "danger from oncoming traffic",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Bicycles",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "bicycle-two-abreast",
    quote:
      "Bicyclists may not ride more than two (2) abreast except on paths " +
      "or parts of roadways set aside for the exclusive use of bicycles",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Bicycles",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "blowout-hold-straight",
    quote:
      "In a situation with a flat tire or blowout, you should hold the " +
      "steering wheel firmly and keep the car going straight. Slow down " +
      "gradually.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 8: Accidents and Emergency Situations - Tire Blowout",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_8.pdf",
  },
  {
    key: "bmv-exam-80-percent",
    quote:
      "Eighty percent or higher correct responses on each component must " +
      "be achieved to pass the exam.",
    source: "Indiana BMV - Knowledge Exam (in.gov/bmv)",
    section: "Knowledge Exam - What to Expect in the Exam",
    url: "https://www.in.gov/bmv/licenses-permits-ids/learners-permits-and-drivers-licenses-overview/learners-permit/knowledge-exam/",
  },
  {
    key: "bmv-exam-results-180",
    quote:
      "If you've passed the knowledge exam, your results are valid for " +
      "180 days.",
    source: "Indiana BMV - Knowledge Exam (in.gov/bmv)",
    section: "Knowledge Exam - What to Expect in the Exam",
    url: "https://www.in.gov/bmv/licenses-permits-ids/learners-permits-and-drivers-licenses-overview/learners-permit/knowledge-exam/",
  },
  {
    key: "bmv-permit-15-driver-ed",
    quote:
      "You may obtain a learner's permit if you are at least 15 years old " +
      "and enrolled in an approved behind-the-wheel training course.",
    source: "Indiana BMV - Learner's Permit (in.gov/bmv)",
    section: "Learner's Permit",
    url: "https://www.in.gov/bmv/licenses-permits-ids/learners-permits-and-drivers-licenses-overview/learners-permit/",
  },
  {
    key: "bmv-probationary-180-permit",
    quote:
      "To obtain a probationary driver's license, you must meet Indiana's " +
      "age requirements below and have held a learner's permit for 180 " +
      "days (approximately six months).",
    source: "Indiana BMV - Driver's License (in.gov/bmv)",
    section: "Driver's License - Probationary Driver's License",
    url: "https://www.in.gov/bmv/licenses-permits-ids/learners-permits-and-drivers-licenses-overview/drivers-license/",
  },
  {
    key: "bmv-restriction-2-bac",
    quote:
      "In addition, the driver must not operate a motor vehicle with a " +
      "blood alcohol content of .02 or more.",
    source: "Indiana BMV - Endorsements and Restrictions (in.gov/bmv)",
    section: "Endorsements and Restrictions - Restriction 2 - Habitual Traffic Violator (HTV) Conditional",
    url: "https://www.in.gov/bmv/licenses-permits-ids/learners-permits-and-drivers-licenses-overview/drivers-license/endorsements-and-restrictions/",
  },
  {
    key: "brake-failure-pump",
    quote:
      "If your vehicle's conventional disc or drum brakes suddenly fail, " +
      "you should shift to a lower gear, if possible, and pump the brake " +
      "pedal fast and hard several times.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 8: Accidents and Emergency Situations - Brake Failure",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_8.pdf",
  },
  {
    key: "bridges-freeze-first",
    quote:
      "Be aware that moisture on ramps, bridges, and overpasses may " +
      "occasionally freeze before other sections of the driving roadway.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Winter Driving",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "carbon-monoxide-senses",
    quote:
"You cannot see, smell, or taste carbon monoxide.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 8: Accidents and Emergency Situations - Carbon Monoxide Poisoning",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_8.pdf",
  },
  {
    key: "centre-turn-lane-no-passing",
    quote:
"Never use this type of center lane for passing other vehicles.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Turning Left from Specially-Designated Center Lanes",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "chemical-test-refuse-1yr",
    quote:
      "A motorist who refuses to submit to a chemical test will face a " +
      "suspension of driving privileges for one year.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 5: Points, Suspension, and Insurance Requirements - Operating a Vehicle While Intoxicated",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_5.pdf",
  },
  {
    key: "child-restraint-eight",
    quote:
      "Passengers younger than eight years of age are required by law to " +
      "be properly secured in a child restraint system such as a child " +
      "car seat or booster seat.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Child Safety Restraints",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "collision-hit-moving",
    quote:
      "Hit something moving in the same direction as you rather than " +
      "something that is not moving. However, it is safer to hit " +
      "something that is not moving than to hit something head-on.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 8: Accidents and Emergency Situations - Avoiding Collisions",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_8.pdf",
  },
  {
    key: "county-roads-55",
    quote:
      "On county roads, vehicles may not exceed 55 miles per hour or the " +
      "posted speed limit",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Urban Speed Limits",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "crossbuck-with-stop-sign",
    quote:
      "When a crossbuck is displayed with a stop sign, you must come to a " +
      "complete stop and proceed over the tracks only after making " +
      "certain that a train is not approaching.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Crossbucks",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "crossbuck-yield",
    quote:
      "When displayed alone, you should treat a crossbuck as a yield sign " +
      "and the decision to stop or cross the tracks is yours.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Crossbucks",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "dark-signal",
    quote:
      "If you are approaching an intersection with a non-operating " +
      "signal, you should stop before entering the intersection.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Approaching an Intersection with Non-Operating Signal",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "dark-signal-yield-right",
    quote:
      "Any vehicle that arrived at the same time as you and is to your " +
      "right",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Approaching an Intersection with Non-Operating Signal",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "dead-red-not-autocycles",
    quote:
"This rule does not apply to autocycles",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Approaching a Red Light or Stop Sign",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "dead-red-two-minutes",
    quote:
      "An operator approaching an intersection controlled by a traffic " +
      "signal may proceed through a steady red light if the operator " +
      "comes to a complete stop for at least two minutes and exercises " +
      "due caution",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Approaching a Red Light or Stop Sign",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "disabled-vehicle-100-feet",
    quote:
      "In the daytime, drivers of disabled cars must display two red " +
      "flags: one approximately 100 feet in front of the car and the " +
      "other approximately 100 feet behind it.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Warning Devices for Stopped Vehicles",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "driver-12-inches",
    quote:
"Driver should sit at least 12 inches away from the steering wheel.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Seat Belts",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "driver-ed-hours",
    quote:
      "which includes 30 hours of theoretical training and six hours of " +
      "behind-the-wheel training",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 1: Obtaining a New Credential - Driving Skills Exam",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_1.pdf",
  },
  {
    key: "drowsy-18-hours",
    quote:
      "Studies have shown that going 18 hours without sleep leaves a " +
      "driver equally impaired to a driver with a .08 Blood Alcohol " +
      "Content (BAC), which is the legal alcohol limit.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Drowsy Driving",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "endorsement-exam-25",
    quote:
      "This exam consists of 25 questions, of which you can only miss " +
      "five in order to pass.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 9: Knowledge Exam Sample Questions - For-Hire Endorsement Sample Exam Questions",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_9.pdf",
  },
  {
    key: "exit-passenger-side",
    quote:
      "If you must exit the vehicle while on a roadside shoulder, exit " +
      "the vehicle on the passenger side and only after checking your " +
      "immediate vicinity for other motor vehicles, obstructions, or " +
      "dangerous drop-offs or inclines.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 8: Accidents and Emergency Situations - Roadside Emergency Situations",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_8.pdf",
  },
  {
    key: "failure-to-yield-most-common",
    quote:
      "Among all collisions in Indiana, failure to yield the right of way " +
      "is the most common factor.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 8: Accidents and Emergency Situations",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_8.pdf",
  },
  {
    key: "flashing-red-light",
    quote:
      "A red flashing light at an intersection is equivalent to a stop " +
      "sign and means that you must come to a complete stop before " +
      "proceeding with caution to enter the intersection.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Red Flashing Lights",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "flashing-red-tie",
    quote:
      "If you arrive at the same time as another driver, the vehicle on " +
      "the left shall yield the right- of-way.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Red Flashing Lights",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "flashing-yellow-arrow",
    quote:
      "A yellow flashing arrow for a turning movement means that you may " +
      "proceed with the turn only after you have yielded the right of way " +
      "to pedestrians and oncoming traffic.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Yellow Flashing Arrows for Turning Movements",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "flashing-yellow-light",
    quote:
      "A yellow flashing light displayed without an arrow at an " +
      "intersection means that you should slow down and use caution when " +
      "traveling through an intersection.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Yellow Flashing Lights",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "flood-water-over-road",
    quote:
      "Do not drive where water is over the road, because the depth of " +
      "the water is not always obvious, and the water may hide washouts",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Flash Flooding",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "fog-low-beams",
    quote:
      "Do not use high headlight beams. Low headlight beams better " +
      "illuminate the road and objects ahead.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Fog",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "following-turning-vehicles",
    quote:
      "When following a driver who has signaled an intention to make a " +
      "turn, or who has slowed down and may be planning to make a turn, " +
      "you should slow down and be prepared to stop.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Following Turning Vehicles",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "following-two-to-three",
    quote:
      "A good rule for drivers to follow is to stay at least two to three " +
      "seconds behind the vehicle ahead.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Braking and Following Distances",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "funeral-procession",
    quote:
      "Official processions, such as a funeral procession, have the right " +
      "of way regardless of a traffic signal that indicates otherwise.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Traffic Control Officers and Official Processions",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "green-light-no-arrow-turn",
    quote:
      "If you are facing a green light displayed without an arrow, you " +
      "may turn through an intersection as long as the intersection is " +
      "clear. You must yield the right of way to all oncoming traffic.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Turning through an Intersection",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "hand-signals-not-on-exam",
    quote:
"You may not use hand signals on a driving skills exam.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Signaling Intention to Turn",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "head-restraint-position",
    quote:
      "Head restraints should be positioned so they are higher than the " +
      "top and as close as possible to the back of an individual's head.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Seat Belts",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "headlights-500",
    quote:
      "Drivers must use headlights between sunset and sunrise as well as " +
      "at any other time in which visibility is less than 500 feet.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Headlights",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "hybrid-beacon-flashing-red",
    quote:
      "Then, two steady red lights will be displayed while the pedestrian " +
      "crosses, and then the two red lights will flash to allow drivers " +
      "to proceed through if the crossing is clear of pedestrians.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Pedestrian Hybrid Beacons",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "hydroplaning-layer",
    quote:
      "When you are driving on wet roads, your vehicle is actually " +
      "traveling on a thin layer of oil, dirt, and water which can lead " +
      "to hydroplaning.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Rain",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "impaired-driver-signs",
    quote:
"Straddles the center line or weaves back and forth",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 8: Accidents and Emergency Situations - Ways to Spot an Impaired Driver",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_8.pdf",
  },
  {
    key: "insurance-minimum",
    quote:
      "The state minimum insurance standard is $25,000 for bodily injury " +
      "to, or the death of, one individual; $50,000 for bodily injury to, " +
      "or the death of, two or more people in any one accident; and " +
      "$25,000 for property damages in any one accident.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 5: Points, Suspension, and Insurance Requirements - Insurance Requirements",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_5.pdf",
  },
  {
    key: "interstate-median-u-turn-illegal",
    quote:
      "It is illegal for any vehicle, other than an emergency vehicle or " +
      "a highway maintenance vehicle, to make a U-turn by crossing the " +
      "median or crossover of an interstate highway.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Driving on Interstate Highways",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "knowledge-exam-retake",
    quote:
      "If you fail the knowledge exam, you must wait until the next " +
      "business day to retake it.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 1: Obtaining a New Credential - Knowledge Exam",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_1.pdf",
  },
  {
    key: "left-on-red",
    quote:
      "You may turn left through an intersection with a red light or " +
      "arrow if you are turning from a one-way street onto a one-way " +
      "street.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Turning through a Solid Red Light",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "licence-validity",
    quote:
"Six years if you are younger than 75 years of age",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 1: Obtaining a New Credential - Driver's License Validity",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_1.pdf",
  },
  {
    key: "load-four-feet-lamp",
    quote:
      "One red lamp must be mounted at the extreme rear end of the " +
      "vehicle's load between sunset and sunrise.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Truck Equipment Requirements",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "low-beams-500-200",
    quote:
      "When headlights are on, lower headlight beams must be used when " +
      "approaching within 500 feet of an oncoming vehicle or when " +
      "following within 200 feet of the rear of another vehicle.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Headlights",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "mdc-35-mph",
    quote:
"Must operate at no more than 35 miles per hour",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 2: Restrictions and Endorsements - MDC - Motor Driven Cycle",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_2.pdf",
  },
  {
    key: "merging-yield",
    quote:
      "However, drivers entering an interstate must yield the right of " +
      "way to vehicles on the interstate.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Driving on Interstate Highways",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "motorcycle-signal-not-cancelling",
    quote:
      "Do not assume that a flashing turn signal on a motorcycle or motor " +
      "driven cycle means a turn is coming soon. These vehicles have " +
      "signals that are usually not self- canceling, and riders sometimes " +
      "forget to turn them off.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Motorcycles and Motor Driven Cycles",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "motorcycle-three-four-seconds",
    quote:
      "Allow at least three or four seconds when following a motorcycle " +
      "so the motorcyclist has enough time to maneuver or stop in an " +
      "emergency.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Motorcycles and Motor Driven Cycles",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "move-over-amber",
    quote:
      "Additionally, motorists who approach an authorized parked vehicle " +
      "with amber flashing lights are required to change lanes away from " +
      "the authorized vehicle.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Authorized Parked Vehicles",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "move-over-amber-list",
    quote:
      "Recovery Vehicles/Tow Trucks 2. Highway Maintenance Vehicles 3. " +
      "Utility Service Vehicles 4. Solid Waste Haulers/Trash Trucks 5. " +
      "Survey/Construction Vehicles",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Authorized Parked Vehicles",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "move-over-disabled",
    quote:
      "Motorists who approach a disabled stationary vehicle with flashing " +
      "hazard warning signals are required to change lanes away from the " +
      "disabled vehicle.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Disabled Vehicles",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "move-over-emergency-10-under",
    quote:
      "If you cannot move over, the motorists shall reduce their speed to " +
      "10 mph under the posted limit and proceed with caution. Failure to " +
      "comply is a Class A Infraction.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Emergency Vehicles",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "new-resident-60-days",
    quote:
      "When you become an Indiana resident, you have 60 days to obtain a " +
      "new Indiana driver's license.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 1: Obtaining a New Credential - Indiana Residency Requirements",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_1.pdf",
  },
  {
    key: "no-passing-100-feet",
    quote:
      "Within 100 feet of an intersection, railroad crossing, bridge, " +
      "viaduct, or tunnel",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Prohibited Passing",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "no-passing-signs",
    quote:
      "A yellow, pennant-shaped \"No Passing Zone\" is posted on the " +
      "left-hand side of the road, or a white rectangular \"Do Not Pass\" " +
      "sign is posted on the right-hand side of the road",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Prohibited Passing",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "non-divided-state-highway-55",
    quote:
      "On a non-divided state highway, vehicles may not exceed 55 miles " +
      "per hour or the posted speed limit",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Urban Speed Limits",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "officer-overrides",
    quote:
      "In such a case, the law enforcement officer's command is the one " +
      "that must be obeyed.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Traffic Control Officers and Official Processions",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "one-lane-at-a-time",
    quote:
"Change only one lane at a time.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Changing Lanes and Passing Other Vehicles",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "owi-legal-limit",
    quote:
      "Operating a vehicle while intoxicated or with a blood alcohol " +
      "concentration (BAC) in excess of the legal limit (.08) is a " +
      "criminal offense and has an immediate effect on your privilege to " +
      "operate a vehicle.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 5: Points, Suspension, and Insurance Requirements - Operating a Vehicle While Intoxicated",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_5.pdf",
  },
  {
    key: "owi-watercraft",
    quote:
      "If you are convicted of operating a watercraft while intoxicated, " +
      "your driving privileges are subject to the same penalties as an " +
      "operator of a motor vehicle.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 5: Points, Suspension, and Insurance Requirements - Operating a Watercraft While Intoxicated",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_5.pdf",
  },
  {
    key: "parallel-park-two-feet",
    quote:
      "Position your vehicle parallel with the vehicle parked in front of " +
      "the empty space and maintain at least two feet from this vehicle.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Parallel Parking",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "parking-hill-wheels",
    quote:
      "When you park facing downhill, turn your vehicle's wheels toward " +
      "the curb. When you park facing uphill, turn your vehicle's wheels " +
      "away from the curb.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Parallel Parking",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "parking-hydrant-15",
    quote:
"Within 15 feet of a fire hydrant or in fire lanes",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Illegal Parking Areas",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "parking-no-curb",
    quote:
      "If there is no curb, turn your vehicle's wheels away from the " +
      "street.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Parallel Parking",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "parking-prohibited-list",
    quote:
      "Within intersections or on pedestrian crosswalks * On sidewalks or " +
      "in front of any driveway",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Illegal Parking Areas",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "parking-yellow-curb",
    quote:
"Adjacent to yellow curbs * Beside another parked vehicle",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Illegal Parking Areas",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "passing-return-100-feet",
    quote:
      "Make sure the passing lane is clear of traffic, as you must return " +
      "to the right side of the road no less than 100 feet before any " +
      "oncoming vehicle",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Passing Other Vehicles",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "pedestrian-always-yield",
    quote:
"Always yield the right of way to pedestrians",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Pedestrian Safety",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "pedestrian-signal-flashing",
    quote:
      "The words or symbols flash to alert pedestrians that the time in " +
      "which to safely cross the street or intersection is ending.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Pedestrian Signals",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "penny-test",
    quote:
      "If any part of Lincoln's head is covered by the tread, you're " +
      "driving with the legal and safe amount of tread.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Tread Depth",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "permit-validity",
    quote:
      "Learner's permits are valid for two years from the date of " +
      "issuance.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 1: Obtaining a New Credential - Learner's Permit Validity",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_1.pdf",
  },
  {
    key: "placard-striped-space",
    quote:
      "Parking in the diagonally striped space next to a reserved parking " +
      "space is prohibited at all times, even with a valid placard.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 3: Indicators, Watercraft, and Parking Placards - Parking Placards",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_3.pdf",
  },
  {
    key: "points-handheld",
    quote:
"Violation for hand-held device 4 points",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 5: Points, Suspension, and Insurance Requirements - Point Values",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_5.pdf",
  },
  {
    key: "points-two-years",
    quote:
      "Points stay active on your driver record for two years from the " +
      "conviction date.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 5: Points, Suspension, and Insurance Requirements - Point Values",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_5.pdf",
  },
  {
    key: "prescription-drugs",
    quote:
      "Many prescription drugs, over-the-counter drugs, and other " +
      "recreational drugs will also impair your reasoning and " +
      "coordination.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 8: Accidents and Emergency Situations - Impaired Driving",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_8.pdf",
  },
  {
    key: "probationary-curfew-exceptions",
    quote:
      "Lawful employment * A school-sanctioned activity * A religious " +
      "event, or",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 1: Obtaining a New Credential - Probationary Driver's License Time Restrictions",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_1.pdf",
  },
  {
    key: "probationary-family-exception",
    quote:
      "However, you may drive with your child, stepchild, sibling, step " +
      "or half-sibling, or spouse without another accompanying individual " +
      "during the first 180 days after obtaining your probationary " +
      "driver's license.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 1: Obtaining a New Credential - Probationary Driver's License Passenger Restrictions",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_1.pdf",
  },
  {
    key: "probationary-phone-ban",
    quote:
      "Indiana law prohibits all drivers, including probationary driver's " +
      "license holders, from operating a motor vehicle while using any " +
      "form of telecommunications device, such as a wireless phone, " +
      "personal digital assistant, pager, or text messaging device unless " +
      "the device is being used to make a 911 emergency call.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 1: Obtaining a New Credential - Probationary Driver's License Telecommunications Device Prohibition",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_1.pdf",
  },
  {
    key: "red-light",
    quote:
      "If you are facing a red light, you may not enter the intersection " +
      "until the light facing you turns green and the intersection is " +
      "clear.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Driving through an Intersection",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "red-mid-intersection-turn",
    quote:
      "If you are in the middle of an intersection, you may turn once " +
      "oncoming traffic has stopped.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Turning through a Solid Red Light",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "renew-expired-5yr",
    quote:
      "If you are renewing a driver's license that has been expired for " +
      "five years or more, you must pay an administrative penalty, pass a " +
      "knowledge exam, a driving skills exam, and a standard vision " +
      "screening.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 4: Renewing, Amending, or Replacing a Credential - Renewing a Credential",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_4.pdf",
  },
  {
    key: "renew-six-points",
    quote:
      "If you are at least 21 years of age and have six or more active " +
      "points on your driving record, you must take the knowledge exam to " +
      "renew your driver's license.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 4: Renewing, Amending, or Replacing a Credential - Renewing a Credential",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_4.pdf",
  },
  {
    key: "residential-30",
    quote:
      "In most urban residential areas, vehicles may not exceed 30 miles " +
      "per hour or the posted speed limit",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Urban Speed Limits",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "reversing-look-back",
    quote:
      "To reverse, turn your body to the right to look through the back " +
      "window. Never use only the rearview mirror for reversing.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Reversing",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "right-on-red",
    quote:
      "To turn right through an intersection with a red light or arrow, " +
      "when permissible, you must come to a full stop, check to make sure " +
      "that there are no vehicles and pedestrians in the path of your " +
      "turn or about to enter the path of your turn, check that there is " +
      "not a \"No Turn on Red\" sign and use the correct lane.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Turning through a Solid Red Light",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "rollover-15-passenger-van",
    quote:
      "The rollover risk of a 15-passenger van increases dramatically as " +
      "the number of occupants increases.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Rollover",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "rollover-off-roadway",
    quote:
      "Know proper maneuvering-If your vehicle leaves the roadway, do not " +
      "turn back onto the pavement right away.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Rollover",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "roundabout-large-vehicles",
    quote:
      "When approaching or driving through a multi-lane roundabout, " +
      "drivers must yield the right of way to large vehicles driving " +
      "through the roundabout at the same time.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Roundabouts",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "roundabout-no-lane-change",
    quote:
"Drivers should not change lanes in the circulatory roadway.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Roundabouts",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "roundabout-two-trucks",
    quote:
      "If two large trucks are approaching or driving through a " +
      "roundabout at the same time, the driver in the right lane must " +
      "yield the right of way to the driver in the left lane.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Roundabouts",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "roundabout-yield",
    quote:
      "When approaching a roundabout, incoming traffic always yields to " +
      "the circulating traffic.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Roundabouts",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "rr-45-degrees",
    quote:
      "In the event that you or another motorist are stuck on the " +
      "railroad tracks or crossing, you should evacuate the area, inform " +
      "others to do the same, and run at a 45-degree angle away from the " +
      "tracks in the direction of the oncoming train.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Safety at Railroad Crossings",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "rr-ens-blue-sign",
    quote:
      "Immediately call the Emergency Notification System (ENS). The " +
      "phone number is located on the blue sign attached to the railroad " +
      "track crossing gate",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Safety at Railroad Crossings",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "rr-stop-15-50",
    quote:
      "Some vehicles are required by law to always stop at railroad " +
      "crossings not closer than 15 feet or farther than 50 feet from the " +
      "nearest rail.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Railroad Crossings",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "rr-street-tracks",
    quote:
      "Be aware that some trains operate on tracks in the middle of " +
      "streets. In those cases, traffic signals flash red in all " +
      "directions to indicate the presence of an approaching train.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Railroad Crossing Safety",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "rrfb",
    quote:
      "Rectangular rapid flashing beacons are used at crosswalks and only " +
      "flash when activated by a pedestrian.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Yellow Flashing Lights",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "rural-crest",
    quote:
      "Before approaching the crest of a steep hill, slow down, move to " +
      "the right side of the road, and watch for oncoming vehicles.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Driving on Rural Roads",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "rural-divided-60",
    quote:
      "On a rural state divided highway, vehicles may not exceed 60 miles " +
      "per hour or the posted speed limit.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Rural Interstate Highway Speed Limits",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "rural-interstate-70",
    quote:
      "Passenger vehicles may not exceed 70 miles per hour or the posted " +
      "speed limit",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Rural Interstate Highway Speed Limits",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "rural-interstate-trucks-65",
    quote:
      "Trucks that have a declared gross vehicle weight greater than " +
      "26,000 pounds may not exceed 65 miles per hour or the posted speed " +
      "limit",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Rural Interstate Highway Speed Limits",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "school-bus-40",
    quote:
      "When not driving on an interstate or state highway, the maximum " +
      "speed limit for a school bus is 40 miles per hour unless the " +
      "posted speed limit is lower.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - School Bus Speed Limits",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "school-bus-60",
    quote:
      "The maximum speed limit for a school bus on an interstate or " +
      "highway is 60 miles per hour or the posted speed limit.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - School Bus Speed Limits",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "school-bus-divided-exception",
    quote:
      "If you are driving on a roadway divided by a barrier or unimproved " +
      "median, you are required to stop only if you are traveling in the " +
      "same direction as the school bus.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - School Buses",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "school-bus-stop-required",
    quote:
      "You must stop when you approach a school bus with flashing red " +
      "lights activated and stop arm extended.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - School Buses",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "school-zone-hours",
    quote:
      "Common hours for school zone speed limits are 7 a.m. to 4:30 p.m., " +
      "Monday through Friday or when school speed limit beacons are " +
      "flashing.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - School Zone Speed Limits",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "seat-belt-all-times",
    quote:
      "Indiana law requires a driver and all passengers to use seat belts " +
      "at all times when a vehicle is in operation.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Seat Belts",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "shape-circular",
    quote:
      "Circular traffic signs alert drivers to upcoming railroad " +
      "crossings.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Traffic Sign Shapes",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "shape-diamond",
    quote:
      "Diamond-shaped traffic signs warn drivers of upcoming road " +
      "conditions and hazards.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Traffic Sign Shapes",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "shape-five-sided",
    quote:
      "Five-sided traffic signs warn drivers that they are entering an " +
      "area near a school in which children may be crossing the road.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Traffic Sign Shapes",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "shape-octagon",
    quote:
      "Eight-sided traffic signs warn drivers that they must stop and " +
      "yield the appropriate right of way at an intersection.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Traffic Sign Shapes",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "shape-pennant",
    quote:
      "Pennant-shaped traffic signs are posted on the left-hand side of " +
      "two- way roads to warn drivers not to pass other vehicles on the " +
      "left.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Traffic Sign Shapes",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "shape-rectangular",
    quote:
      "Rectangular traffic signs display one of three types of " +
      "information.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Traffic Sign Shapes",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "shape-triangle",
    quote:
      "Traffic signs with three sides of equal length warn drivers to " +
      "slow down when approaching an intersection, and to be prepared to " +
      "come to a complete stop in order to yield to other drivers or " +
      "pedestrians.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Traffic Sign Shapes",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "sign-blue",
    quote:
"Blue traffic signs display road services and information.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Traffic Sign Colors",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "sign-brown",
    quote:
      "Brown traffic signs indicate nearby recreational and cultural " +
      "interest sites.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Traffic Sign Colors",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "sign-colors-seven",
    quote:
      "The background color of a traffic sign helps to identify the type " +
      "of information displayed on the sign. There are seven colors " +
      "commonly used for signs.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Traffic Sign Colors",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "sign-green",
    quote:
      "Green traffic signs indicate permitted movements and directions or " +
      "guidance, such as highway entrances and exits or distance to " +
      "upcoming destinations.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Traffic Sign Colors",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "sign-orange",
    quote:
"Orange traffic signs warn drivers of temporary traffic conditions.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Traffic Sign Colors",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "sign-red",
    quote:
      "Red traffic signs convey traffic regulations that require drivers " +
      "to take immediate action to avoid threats to traffic safety.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Traffic Sign Colors",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "sign-white",
    quote:
      "White Traffic signs display traffic regulations, such as speed " +
      "limits, that drivers must obey, as well as helpful information " +
      "such as state highway markers.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Traffic Sign Colors",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "sign-yellow",
    quote:
      "Yellow or fluorescent yellow-green signs prepare drivers for " +
      "specific road conditions and hazards ahead, and alert drivers to " +
      "nearby school zones.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Traffic Sign Colors",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "sign-yellow-green",
    quote:
      "Fluorescent yellow-green signs warn drivers of nearby schools, " +
      "pedestrians, bicycles, playgrounds, and school bus routes.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Traffic Sign Colors",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "signal-before-leaving-space",
    quote:
"Use your turn signal when entering traffic from a parking space.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Parallel Parking",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "signs-posted-by",
    quote:
      "These signs, which are posted by the Indiana Department of " +
      "Transportation and local governments, use colors, shapes, written " +
      "messages, and symbols to help drivers quickly understand the " +
      "information.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "skid-conventional-brakes",
    quote:
      "If your vehicle has conventional brakes, turn the steering wheel " +
      "in a controlled manner in the direction the rear of the car is " +
      "sliding.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Skidding",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "skills-exam-auto-fail",
    quote:
      "Any of the following actions shall result in the automatic failure " +
      "of the driving skills exam:",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 1: Obtaining a New Credential - Driving Skills Exam",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_1.pdf",
  },
  {
    key: "slow-moving-emblem",
    quote:
      "A slow-moving vehicle emblem has an orange, fluorescent center and " +
      "red reflective borders, and indicates a slow-moving vehicle which " +
      "cannot exceed 25 miles per hour.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Slow-Moving Vehicle Emblem",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "slower-vehicles-right-lane",
    quote:
      "On the highway, slower vehicles should use the right lane. Leave " +
      "the left-hand lane for faster-moving or passing vehicles.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Changing Lanes and Passing Other Vehicles",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "solid-white-line",
    quote:
      "You may cross a broken white line when it is safe to change lanes, " +
      "but you should not cross a solid white line.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Lane Markings",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "stop-line-order",
    quote:
      "If you are approaching a red light or a stop sign, you must stop " +
      "at the solid white stop line. If there is no stop line, you should " +
      "come to a complete stop perpendicular to the stop sign or before " +
      "entering the crosswalk on your side of the intersection.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Approaching a Red Light or Stop Sign",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "supervised-10-night",
    quote:
      "In both cases, at least 10 hours of supervised driving practice " +
      "must be completed at night, unless you have a daytime-only " +
      "restriction (restriction G) on your learner's permit.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 1: Obtaining a New Credential - Driver's License Age and Experience Requirements",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_1.pdf",
  },
  {
    key: "supplemental-plaques",
    quote:
      "Supplemental plaques are sometimes added to the bottom of stop " +
      "signs to indicate directions in which the intersection must stop.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Supplemental Plaques",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "telecom-only-exceptions",
    quote:
      "The only exceptions to this prohibition are when hands-free " +
      "communication is enabled or if the telecommunications device is " +
      "being used to contact 911 for a bona fide emergency.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Distracted Driving",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "traffic-stop-no-median",
    quote:
      "Do not move onto the center median. Do not stop in the center " +
      "median of a freeway or on the opposite side of a two-lane roadway.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 8: Accidents and Emergency Situations - Traffic Stops by Law Enforcement",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_8.pdf",
  },
  {
    key: "triangle-200-500",
    quote:
      "Your red emergency reflective triangle should be placed 200 feet " +
      "behind your vehicle, or 500 feet behind your vehicle if you are on " +
      "a hill or curve.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 8: Accidents and Emergency Situations - Roadside Emergency Situations",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_8.pdf",
  },
  {
    key: "truck-blind-spots",
    quote:
      "Blind spots for the tractor-trailer driver will be up to 20 feet " +
      "in front of the cab, on either side of the trailer, alongside the " +
      "cab, and up to 200 feet behind the vehicle.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Blind Spots",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "truck-centre-lane",
    quote:
      "On multi-lane highways, tractor- trailers stay in the center lane " +
      "to help the flow of local traffic on and off the highway.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Maneuverability",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "truck-lane-restriction",
    quote:
      "Trucks are restricted to the right lane on sections of interstate " +
      "with two lanes in one direction and restricted to the right two " +
      "lanes of interstate with three lanes or more in one direction.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Driving on Interstate Highways",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "truck-max-width",
    quote:
      "The maximum width of any vehicle that may be operated without a " +
      "special permit is eight feet and six inches.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Sharing the Road with Tractor-Trailers",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "truck-stopping-400",
    quote:
      "A fully loaded tractor-trailer with hot brakes may take more than " +
      "400 feet to come to a complete stop, or more than the length of a " +
      "football field.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Braking",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "truck-swing-out",
    quote:
      "Tractor- trailer drivers often swing out as the first step in " +
      "making a tight turn.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Turning",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "truck-three-triangles",
    quote:
      "A driver of a truck, bus, or tractor-trailer that is disabled on a " +
      "traveled roadway or its shoulder must display three bi-directional " +
      "emergency reflective triangles which conform to the requirements " +
      "of Federal Motor Vehicle Safety Standard No. 125, or at least six " +
      "fuses or three liquid-burning flares.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Warning Devices for Stopped Vehicles",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "turn-lane-position",
    quote:
      "To turn left, be in the far-left lane for your direction of " +
      "travel. To turn right, be in the far- right lane for your " +
      "direction of travel.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Rules for Safe and Legal Turning",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "tyre-pressure-source",
    quote:
      "Compare the measured psi to the psi found on the sticker inside " +
      "the driver's door of your vehicle or in owner's manual-DO NOT " +
      "compare to the psi on your tire's sidewall.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Tire Pressure",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "urban-definition",
    quote:
"Urban areas have a population of at least 50,000 people.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Urban Speed Limits",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "urban-interstate-55",
    quote:
      "On an urban interstate highway, vehicles may not exceed 55 miles " +
      "per hour or the posted speed limit",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Urban Speed Limits",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "water-open-window",
    quote:
"If your vehicle plunges into water, do not attempt to open a door.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 8: Accidents and Emergency Situations - Plunging into Water",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_8.pdf",
  },
  {
    key: "wet-brakes-pump",
    quote:
      "After driving through water puddles, test your brakes by pumping " +
      "them. Doing so will help to dry them.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Rain",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "white-cane-guide-dog",
    quote:
      "Drivers must always yield the right of way to persons who are " +
      "visually impaired.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Visually Impaired Pedestrians",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "work-zone-10-below",
    quote:
      "Work site speed limits are always at least 10 miles per hour below " +
      "the maximum established speed limit for the area.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Reduced Speed Limits in Highway Work Zones",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "yellow-lane-markings",
    quote:
      "Yellow lane markings separate multiple lanes of traffic going in " +
      "opposite directions. You may cross a broken yellow line to pass " +
      "another vehicle when it is safe, but you should not cross a solid " +
      "yellow line except to turn.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 7: Safe Vehicle Operation - Lane Markings",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_7.pdf",
  },
  {
    key: "yellow-light",
    quote:
      "A steady yellow light means the green light has ended and the " +
      "signal is about to turn red.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Driving through an Intersection",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
  {
    key: "yield-no-braking",
    quote:
      "If you are approaching a yield sign, a vehicle approaching from " +
      "another direction with the right of way should not have to brake " +
      "to avoid a collision with you.",
    source: "Indiana Driver's Manual (Indiana Bureau of Motor Vehicles)",
    section: "Chapter 6: Traffic Signs and Signals - Approaching a Yield Sign",
    url: "https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_6.pdf",
  },
];
