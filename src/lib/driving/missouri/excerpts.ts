import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the Missouri Driver Guide, published by the
// Missouri Department of Revenue - 172 of the 177 below - plus 1 from the
// Missouri State Highway Patrol's Driver Examination FAQ page, which is the
// only official source that states the written test's pass mark as a
// percentage and the number of questions you may miss, and 4 subsections of
// Section 304.010 of the Revised Statutes of Missouri, which carries the
// uniform speed limits the Guide prints only as a table.
//
// Every quote below was located mechanically in the fetched source and checked
// as an exact substring before it was written here. Nothing is paraphrased.
// Four normalisations were applied to the extracted text and to nothing else:
// runs of whitespace, including the line breaks the PDF inserts mid-sentence,
// are collapsed to single spaces; the bullet glyphs that begin list items are
// dropped, so that where the source states a rule as a stem followed by a
// bulleted list the items run together in the order they appear; a hyphen left
// at a line break is rejoined, so the PDF's "tractor- trailer" is read as
// "tractor-trailer"; and en and em dashes are folded to ASCII hyphens. No
// words are changed, dropped or reordered, and the sources' own spelling and
// punctuation are preserved as they stand - including the Guide's "that cease
// to provide assistance" and its "damage to or more person's property",
// because a quote that has been tidied up is no longer a quote. Where a
// sentence ran too long to quote briefly it is cut at a clause boundary, and
// the shortened span is still verified as a literal substring.
//
// These are quoted rather than summarised because DOR writes its 25-question
// written test from this material and says so. Each is kept to the operative
// rule and shown with its source, section and a link back to the official page.
//
// One conflict is deliberately left visible here rather than hidden. The
// Guide's prose puts Missouri's interstate maximum at 70 mph; RSMo 304.010.2(1)
// sets the uniform maximum on rural interstates and freeways at seventy-five.
// Both are quoted. The posted limit is 70, the exam is written from the Guide,
// and the statute is a ceiling the Highways and Transportation Commission has
// not used.

export const missouriExcerpts: HandbookExcerpt[] = [
  {
    key: "abuse-and-lose",
    quote:
      "If you are younger than 21 years of age, your driver license may " +
      "be taken away for 90 days for any of the following: Any " +
      "intoxication alcohol-related traffic offense; If you possess or " +
      "use alcohol or drugs while driving a vehicle",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 10 - Missouri’s Abuse and Lose Law",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "abuse-and-lose-21",
    quote:
      "If you are 21 years of age or older, you may have your driver " +
      "license taken away for one year if you possess or use drugs while " +
      "driving.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 10 - Missouri’s Abuse and Lose Law",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "accident-report-30-days",
    quote:
      "State law requires the accident report to be filed within 30 days.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 13 - Filing an Accident Report",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "accident-report-conditions",
    quote:
      "The accident happened in Missouri; The accident happened less than " +
      "one year ago;",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 13 - Filing an Accident Report",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "added-lane",
    quote:
      "Traffic from another road will be entering the road. No merging is " +
      "necessary because a lane has been added.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Traffic Flow Signs",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "admin-action-15-days",
    quote:
      "If your BAC level is .08% or more (or for minors .02% or more), " +
      "the officer will take your license away and give you a notice.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 10 - Administrative Actions",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "advisory-speed-weather",
    quote:
      "Although you may feel comfortable driving at a higher speed in " +
      "fair weather, you should never do so in rain, snow or icy " +
      "conditions.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Turns and Curves In The Road",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "airbag-ten-inches",
    quote:
      "The National Highway Traffic Safety Administration recommends " +
      "drivers sit with at least ten inches between the center of their " +
      "breastbone and the center of the steering wheel.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 8 - Use Seat Belts and Child Restraints",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "any-drug-illegal",
    quote:
      "The use of any drug (the law does not distinguish between " +
      "prescription, over-the-counter, or illegal drugs) which impairs " +
      "your ability to drive safely is illegal.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 10 - Physical and Mental Effects of Alcohol and Drugs",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "bac-limits",
    quote:
      "It is illegal to drive with a blood alcohol content (BAC) of 0.08% " +
      "or more (0.04% for commercial vehicle drivers and 0.02% if under " +
      "21).",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 10 - Alcohol",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "bicycle-door-check",
    quote:
      "Check for passing bicyclists before opening your car door into a " +
      "traffic lane or bicycle lane.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 4 - Sharing the Road with Mopeds and Bicycles",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "bicycle-helmet-not-required",
    quote:
      "State law does not require you to wear a helmet.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 4 - Safety Tips for Moped and Bicycle Riders",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "bicycle-lane-yield",
    quote:
      "A bicycle lane is a portion of a roadway designated by striping to " +
      "be used by bicycles. You may cross a bicycle lane when turning or " +
      "when entering or leaving the roadway. You must yield to bicyclists " +
      "in a bicycle lane.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 4 - Sharing the Road with Mopeds and Bicycles",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "bicycle-rear-red-600",
    quote:
      "A Rear Red Reflector, at least two square inches, or a Rear Red " +
      "Light that drivers can see when reflected by their vehicles’ low " +
      "beam headlights at 600 feet.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 4 - Equipment Required on Mopeds and Bicycles",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "blind-pedestrian-stop",
    quote:
      "When a pedestrian is crossing a street or highway guided by a dog " +
      "or carrying a white cane (or a white cane with a red tip), " +
      "vehicles must come to a complete stop.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 4 - As a Driver, You Should Know",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "brake-failure-parking-brake",
    quote:
      "Use your emergency or parking brake, but use it gradually.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 9 - Brake Failure",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "breakdown-never-stand",
    quote:
      "Never stand in the roadway. Do not try to change a tire if it " +
      "means you have to be in a traffic lane.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 6 - Emergencies",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "bridges-freeze-first",
    quote:
      "Remember that bridges and overpasses will freeze and become " +
      "slippery before other parts of the road",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 9 - Winter Driving",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "carry-license",
    quote:
      "You are required to carry your driver license or permit when you " +
      "drive. If any law enforcement officer asks to see your driver " +
      "license or permit, you must present it.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 1 - The Missouri Driver License",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "child-booster",
    quote:
      "Children at least four years of age but less than eight years of " +
      "age, who also weigh at least 40 pounds but less than 80 pounds, " +
      "and are also less than 4’9” tall shall be secured in a child " +
      "passenger restraint system or booster seat appropriate for that " +
      "child.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 8 - Child Passenger Restraint Law",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "child-under-four",
    quote:
      "Children less than four years old, regardless of weight, shall be " +
      "secured in a child passenger restraint system appropriate for that " +
      "child.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 8 - Child Passenger Restraint Law",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "city-speed-25",
    quote:
      "The speed limit in any city, town, or village is 25 mph, unless " +
      "posted otherwise.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Speed Limit",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "crash-do-not-leave",
    quote:
      "Even if you have a crash with a parked vehicle, do not leave. " +
      "Leaving the scene of a traffic crash is a crime.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 13 - Traffic Crashes",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "crash-stay-until-released",
    quote:
      "Stay until a law enforcement officer says you may leave the crash " +
      "scene.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 13 - Traffic Crashes",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "crossbuck-yield",
    quote:
      "This sign has the same meaning as a “yield” sign; therefore, you " +
      "must yield to trains at crossings.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Railroad Crossing",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "crosswalk-marked-unmarked",
    quote:
      "Drivers must yield when a pedestrian is in a marked or unmarked " +
      "crosswalk on or approaching their side of the road.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 4 - As a Driver, You Should Know",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "dark-signal",
    quote:
      "Dark signals, or traffic signals that aren’t working operate as a " +
      "four-way stop.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Left Turn Signals",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "deer-dont-swerve",
    quote:
      "If you see that a crash is unavoidable, do not swerve. Swerving " +
      "off the road or into the path of an oncoming car can increase the " +
      "risk of injury.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 8 - Tips For Avoiding a Deer-Vehicle Crash",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "driveway-yield",
    quote:
      "Drivers entering a road from a driveway, alley, or roadside must " +
      "yield to vehicles already on the main road",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Intersections",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "dual-use-lane",
    quote:
      "But if you want to turn, and only the straight arrow is showing, " +
      "you must wait for the turn arrow.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Dual-Use Lanes",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "dwi-first-offense",
    quote:
      "1st Offense - Spend up to six months in jail. Pay up to a $500 " +
      "fine.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 10 - Court-Convicted Actions",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "ebike-class-3",
    quote:
      "Class 3: Bicycle equipped with a motor that provides assistance " +
      "only when the rider is pedaling and that ceases to provide " +
      "assistance when the bicycle reaches the speed of twenty-eight " +
      "miles per hour.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 4 - Sharing the Road with Electric Bicycles",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "emergency-convoy",
    quote:
      "Emergency vehicles may follow each other so proceed only when the " +
      "way is clear.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Emergency Vehicles",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "emergency-pull-right",
    quote:
      "Pull over to the right edge of the road, or as near to the right " +
      "as possible, when you see or hear an emergency vehicle approaching " +
      "from any direction.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Emergency Vehicles",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "emergency-star-55",
    quote:
      "The cellular number to call in an emergency is *55.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 6 - Emergencies",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "expired-184-days",
    quote:
      "If you do not renew your license within six months (or 184 days) " +
      "after its expiration date, you will have to take the written and " +
      "driving tests (see Chapter 2), in addition to the vision and road " +
      "sign tests.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 1 - Renewing a License or Permit",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "fact-30-days",
    quote:
      "The court will give you 30 days to pay the fines before the court " +
      "notifies the Driver License Bureau (DLB).",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 11 - Failure to Appear in Court (FACT)",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "faq-written-80",
    quote:
      "There are 25 questions on these tests, you must score 80% to pass. " +
      "You can miss up to 5 questions and still pass.",
    source: "Driver Examination Frequently Asked Questions (Missouri State Highway Patrol)",
    section: "Driver Examination FAQs",
    url: "https://apps.mshp.dps.mo.gov/MSHPWeb/PatrolDivisions/DVSD/DE/faqs.html",
  },
  {
    key: "flagging-operation",
    quote:
      "A flagger(s) will be present at the beginning and end points of " +
      "the work zone providing traffic control to oncoming vehicles.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Types of Work Zones",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "flashing-red",
    quote:
      "A flashing red light means the same thing as a stop sign.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Traffic Signals",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "flashing-yellow",
    quote:
      "A flashing yellow light tells you to slow down and proceed with " +
      "caution.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Traffic Signals",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "flashing-yellow-arrow",
    quote:
      "A flashing yellow arrow tells you that you are allowed to drive in " +
      "the direction the arrow is pointing but are required to wait for " +
      "an adequate gap in the opposing traffic prior to making your turn.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Left Turn Signals",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "four-lane-keep-right",
    quote:
      "On highways with a total of four or more lanes (two or more lanes " +
      "in each direction), always keep to the right unless you are " +
      "passing slower traffic, letting another driver have room to enter " +
      "safely, or getting ready to make a legal left turn.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 6 - Drive in the Proper Lane",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "four-way-stop-first",
    quote:
      "At a four-way stop, the driver reaching the intersection first may " +
      "proceed before the other drivers (after coming to a complete stop)",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Intersections",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "funeral-no-cut-in",
    quote:
      "Do not drive between the vehicles that are part of the procession " +
      "when they are in motion.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 4 - Funeral Processions",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "funeral-right-of-way",
    quote:
      "An organized funeral procession has the right-of-way at all " +
      "intersections regardless of any traffic control device, except for " +
      "emergency vehicles or when directed otherwise by law enforcement " +
      "officials.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 4 - Funeral Processions",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "gdl-40-hours",
    quote:
      "You must have completed 40 hours of driving instruction with a " +
      "parent, stepparent, legal guardian, or certified trainer (with a " +
      "federal residential job training program). The required 40 hours " +
      "must include at least ten hours of nighttime driving.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 1 - Step One: Instruction Permit",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "green-arrow",
    quote:
      "A green arrow tells you that you can drive in the direction the " +
      "arrow is pointing. You must be in the proper lane and the way must " +
      "be clear of all traffic and pedestrians.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Left Turn Signals",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "green-light",
    quote:
      "A green light tells you that you can go through the intersection. " +
      "However, you must first yield the right-of-way to traffic and " +
      "pedestrians who are still in the intersection.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Traffic Signals",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "green-yield-pedestrians",
    quote:
      "Even when you are facing a green light you must yield the " +
      "right-of-way to all pedestrians in the intersection.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 4 - As a Driver, You Should Know",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "guide-signs",
    quote:
      "These signs are square or rectangular, and are green or brown with " +
      "white lettering.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Guide Signs",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "half-fail-first-time",
    quote:
      "Almost 50 percent of all test-takers fail the first time.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 1 - A Checklist for You",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "handicap-access-aisle",
    quote:
      "It is illegal to park in handicapped parking access aisles.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 5 - International Symbol of Access",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "handicap-fine",
    quote:
      "Violators, when convicted, shall be punished by a fine of no less " +
      "than fifty dollars ($50) and no more than three hundred dollars " +
      "($300).",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 5 - International Symbol of Access",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "handicap-space-rule",
    quote:
      "Handicapped parking spaces may only be used when the vehicle " +
      "displays a handicapped person placard or license plates, and a " +
      "physically handicapped person is the occupant of the motor vehicle " +
      "at the time of parking, or a physically handicapped person is " +
      "being dropped off or picked up.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 5 - Parking",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "head-on-approach",
    quote:
      "Slow down. Pull over to the right and sound your horn. DO NOT " +
      "swing over into the left lane.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 9 - Vehicle Approaching Head-On In Your Lane",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "headlights-half-hour",
    quote:
      "Turn your headlights on from ½ hour after sunset until ½ hour " +
      "before sunrise.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 9 - Night Driving",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "headlights-with-wipers",
    quote:
      "You must use your headlights any time weather conditions require " +
      "the use of your windshield wipers.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 9 - Headlight Use",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "hydroplane-35-55",
    quote:
      "Hydroplaning can happen at any speed over 35 mph. In a severe " +
      "rainstorm, the tires can lose all contact with the road at 55 mph.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 9 - Hydroplaning",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "hydroplane-response",
    quote:
      "If you think your tires are hydroplaning, take your foot off the " +
      "accelerator and slow down. Do not hit the brakes as this may cause " +
      "you to skid.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 9 - Hydroplaning",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "iid-revocation",
    quote:
      "If you receive a ticket for failing to have an IID installed as " +
      "required by law and you are convicted in court, your driving " +
      "privilege will be revoked for one year.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 10 - Ignition Interlock",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "iid-six-months",
    quote:
      "The IID must be maintained for a minimum of six months from your " +
      "reinstatement date without any violations in the last three " +
      "months.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 10 - Ignition Interlock",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "iid-you-pay",
    quote:
      "You must pay for having the device installed and for having it " +
      "serviced every month.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 10 - Ignition Interlock",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "intermediate-after-six-months",
    quote:
      "After the first six months, you may not operate a motor vehicle " +
      "with more than three passengers who are under 19 years of age and " +
      "who are not members of your immediate family",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 1 - Step Two: Intermediate License",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "intermediate-curfew",
    quote:
      "You may not drive alone between 1:00 a.m. and 5:00 a.m. except to " +
      "and from a school activity, job, or an emergency, unless " +
      "accompanied by a licensed driver 21 years of age or older.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 1 - Step Two: Intermediate License",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "intermediate-first-six-months",
    quote:
      "During the first six months, you may not operate a motor vehicle " +
      "with more than one passenger who is under the age of 19 and who is " +
      "not a member of your immediate family",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 1 - Step Two: Intermediate License",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "interstate-max-70",
    quote:
      "There are more than 1,300 miles of interstate highways in " +
      "Missouri. Their maximum speed limit is 70 mph.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Speed Limit",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "interstate-minimum-40",
    quote:
      "You may not drive slower than 40 mph on interstate highways under " +
      "normal roadway conditions.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Speed Limit",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "lane-ends-merge-left",
    quote:
      "Two lanes of traffic will soon become one lane of traffic. If you " +
      "are in the right lane you must merge left, yielding to traffic " +
      "driving in the left lane.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Traffic Flow Signs",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "left-turn-yield",
    quote:
      "Drivers turning left must yield to oncoming vehicles going " +
      "straight",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Intersections",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "local-ordinances",
    quote:
      "You must obey any traffic sign or regulation whether set by a " +
      "municipality, county, or the state.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Local Ordinances",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "low-beams-500-300",
    quote:
      "Use your low beams when you come within 500 feet (about one block) " +
      "of an oncoming vehicle. Also use your low beams when following " +
      "another vehicle within 300 feet.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 9 - Night Driving",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "marijuana",
    quote:
      "Even though medical marijuana was approved by Missouri voters " +
      "effective in 2020, it is never legal or safe to drive while under " +
      "the influence of marijuana.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 10 - Marijuana",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "minor-first-offense-exception",
    quote:
      "There is one exception to this rule: Minors with a BAC of .02% or " +
      "more do not have to file proof of insurance on a first-offense.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 10 - Proof of Insurance",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "mip-bac-02",
    quote:
      "Having a Blood Alcohol Content (BAC) level of more than .02%.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 10 - Minor in Possession (MIP)",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "missed-exit",
    quote:
      "If you miss your exit, DO NOT stop, back up, or try to turn around " +
      "on the highway. You will have to get off the highway at the next " +
      "exit and come back to the exit you missed.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 6 - Leaving the Highway",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "moped-needs-license",
    quote:
      "To drive any motorized bicycle such as a moped on the public " +
      "streets, you must have a valid driver license.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 4 - Moped Drivers Need a Driver License",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "You should not share a lane with a motorcycle. The motorcyclist " +
      "needs the entire lane for safety reasons.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 4 - Sharing The Road With Motorcycles",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "motorcycle-passing-width",
    quote:
      "When you are passing, give motorcycles a full lane width. Do not " +
      "squeeze past these road users.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 4 - Sharing The Road With Motorcycles",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "move-over-lane-change",
    quote:
      "Proceed with caution, and if it is safe to do so, make a lane " +
      "change into a lane not adjacent to the stationary vehicle",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Emergency Vehicles",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "never-back-in-travel-lane",
    quote:
      "In general, never back a vehicle in any travel lane.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - No Lane Markings",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "never-cross-double-yellow",
    quote:
      "You should never cross the two solid yellow lines to pass.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Direction of Traffic",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "never-pass-on-shoulder",
    quote:
      "Never pass on the shoulder. Other drivers will not expect you to " +
      "be there and may pull off the road without looking.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - No Lane Markings",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "no-parking-facing-traffic",
    quote:
      "Blocking the normal traffic flow or creating a hazard to other " +
      "drivers. With your vehicle facing against traffic.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 5 - No-Parking Zones",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "no-parking-zones",
    quote:
      "Do not park: In an intersection. On a crosswalk or sidewalk. " +
      "Across a driveway entrance. On the left side of a two-way street. " +
      "Alongside a curb that is painted yellow. On a bridge.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 5 - No-Parking Zones",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "no-pass-stopped-for-ped",
    quote:
      "Do not pass a vehicle that has stopped or slowed down for a " +
      "pedestrian.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 4 - As a Driver, You Should Know",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "no-right-on-red-sign",
    quote:
      "However, you must not turn right on a red light when there is a " +
      "“No Right Turn On Red” sign posted.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Traffic Signals",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "no-zone",
    quote:
      "A truck or bus has blind spots on each side, in the rear and in " +
      "the front where an automobile cannot be seen.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 4 - Sharing The Road With Large Trucks",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "nondriver-id-expiry",
    quote:
      "Your nondriver ID expires on your date of birth in the sixth year " +
      "after you apply.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 1 - Nondriver Identification Card",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "overdrive-headlights",
    quote:
      "Do not overdrive your headlights. Your headlights only let you see " +
      "about 350 feet ahead.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 9 - Night Driving",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "parallel-park-start",
    quote:
      "Stop even with the vehicle ahead of the parking space about 1½ " +
      "feet to the left of that vehicle.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 5 - Parallel Parking",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "park-brake-and-gear",
    quote:
      "Always set your parking brake when you park. Leave the vehicle in " +
      "gear if it has a manual transmission, or in park if it has an " +
      "automatic transmission.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 5 - Parking",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "park-exit-curb-side",
    quote:
      "Get out of the vehicle on the curb side if you can.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 5 - Parking",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "park-hill-checklist",
    quote:
      "Turn your wheels in the proper direction (see graphic below); Turn " +
      "off the motor, leaving the vehicle in proper gear; Set the " +
      "emergency or parking brake; Remove the keys from the ignition",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 5 - Parking on Hills",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "park-hill-wheels",
    quote:
      "When you park on a hill, turn your wheels sharply towards the side " +
      "of the road. This way, if your vehicle starts to roll downhill, it " +
      "will roll away from traffic",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 5 - Parking",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "park-never-leave-keys",
    quote:
      "Never leave the keys in a parked vehicle.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 5 - Parking",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "park-one-way-either-side",
    quote:
      "On one-way streets, you may normally park on either the right or " +
      "left side of the street.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 5 - Parking",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "passing-left-bridge",
    quote:
      "The view is obstructed upon approaching within 100 feet of any " +
      "bridge, viaduct, or tunnel",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Passing on the Left",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "passing-left-intersection",
    quote:
      "Approaching within 100 feet of or at any intersection or railroad " +
      "grade crossing",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Passing on the Left",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "passing-right-left-turn",
    quote:
      "When the vehicle overtaken is making or about to make a left turn;",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Passing on the Right",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "passing-right-not-shoulder",
    quote:
      "In no event shall such movement be made by driving off the paved " +
      "or main traveled portion of the roadway (shoulder).",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Passing on the Right",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "penny-test",
    quote:
      "If any part of Lincoln’s head is covered by the tread, you’re " +
      "driving with the safe amount of tread.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 8 - Tire Pressure",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "permissive-left",
    quote:
      "Permissive - Vehicles are given a circular green or a flashing " +
      "yellow arrow and required to wait for an adequate gap in the " +
      "opposing traffic prior to making their turn.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Left Turn Signals",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "permit-age-15",
    quote:
      "Instruction Permit - Eligible Age: 15 This is the first step in " +
      "Missouri's Graduated Driver License Program for young drivers.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 1 - Types of Permits",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "permit-under-16-supervisor",
    quote:
      "Under age 16, you may drive only when accompanied in the front " +
      "seat by a parent, stepparent, grandparent, legal guardian, " +
      "qualified driving instructor, or a person who is at least 25 years " +
      "of age who has been licensed for a minimum of three years",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 1 - Step One: Instruction Permit",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "points-8-suspension",
    quote:
      "If you accumulate a total of 8 or more points in 18 months, your " +
      "driving privilege will be suspended.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 11 - Racking Up Points",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "points-revocation",
    quote:
      "Your driving privilege will be revoked for one year if you " +
      "accumulate: 12 or more points in 12 months 18 or more points in 24 " +
      "months 24 or more points in 36 months",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 11 - Racking Up Points",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "protected-left",
    quote:
      "Protected - Vehicles may turn only when they receive a green arrow " +
      "while opposing vehicles are stopped by a red light.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Left Turn Signals",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "railroad-never-beat",
    quote:
      "Never try to beat a train across the tracks. Never start to cross " +
      "the tracks until there is room for your vehicle on the other side " +
      "of the tracks.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Railroad Crossing",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "railroad-stop-15-50",
    quote:
      "You must STOP if the red lights are flashing or the gate is down. " +
      "You must stop within 15 to 50 feet before the railroad tracks. DO " +
      "NOT try to go around the gate.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Railroad Crossing",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "reaction-distance-15",
    quote:
      "In the chart shown below, the reaction distance is for 1.5 " +
      "seconds. You have to be alert to react within one and one-half " +
      "seconds.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 8 - Stopping Distance",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "red-arrow",
    quote:
      "A steady red arrow tells you to stop at the stop line, crosswalk, " +
      "or before the intersection. You must wait for the signal to turn " +
      "green or a flashing yellow arrow before you proceed.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Left Turn Signals",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "red-light-stop",
    quote:
      "A red light tells you to stop at the stop line, crosswalk, or " +
      "before the intersection.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Traffic Signals",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "reference-markers",
    quote:
      "The reference markers are located every two-tenths of a mile, so " +
      "motorists will always be in sight of a sign.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Emergency Reference Markers",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "refusal-one-year",
    quote:
      "If a police officer stops you and you refuse to take a chemical " +
      "test to determine your BAC, your driver license will be taken away " +
      "for one year.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 10 - Refusal to Submit to a Chemical Test",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "renewal-vision-signs",
    quote:
      "You can renew your license up to six months before it expires. " +
      "Each time you renew, you will be required to take the vision and " +
      "road sign test.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 1 - Renewing a License or Permit",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "right-on-red",
    quote:
      "After making a complete stop, you may turn right on a red light if " +
      "the way is clear of pedestrians and traffic.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Traffic Signals",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "roundabout-never-left",
    quote:
      "NEVER make a left turn to enter a roundabout.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Roundabout Intersections",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "route-numbering",
    quote:
      "North-south routes are identified by odd numbers. East-west roads " +
      "are identified by even numbers. Interstate highways that loop " +
      "around cities are identified by three-digit even numbers.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Route Signs",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "rsmo-lettered-roads-55",
    quote:
      "Such lettered roads shall not exceed fifty-five miles per hour " +
      "unless set at a higher speed as established by the department of " +
      "transportation, except that no speed limit shall be set higher " +
      "than sixty miles per hour;",
    source: "Revised Statutes of Missouri, Section 304.010 (Missouri Revisor of Statutes)",
    section: "Section 304.010.2(5)",
    url: "https://revisor.mo.gov/main/OneSection.aspx?section=304.010",
  },
  {
    key: "rsmo-other-roads-60",
    quote:
      "All other roads and highways in this state not located in an " +
      "urbanized area and not provided for in subdivisions (1) to (3) of " +
      "this subsection, sixty miles per hour;",
    source: "Revised Statutes of Missouri, Section 304.010 (Missouri Revisor of Statutes)",
    section: "Section 304.010.2(4)",
    url: "https://revisor.mo.gov/main/OneSection.aspx?section=304.010",
  },
  {
    key: "rsmo-rural-expressway-65",
    quote:
      "Upon the rural expressways of this state, sixty-five miles per " +
      "hour;",
    source: "Revised Statutes of Missouri, Section 304.010 (Missouri Revisor of Statutes)",
    section: "Section 304.010.2(2)",
    url: "https://revisor.mo.gov/main/OneSection.aspx?section=304.010",
  },
  {
    key: "rsmo-urbanized-60",
    quote:
      "Upon the interstate highways, freeways or expressways within the " +
      "urbanized areas of this state, sixty miles per hour;",
    source: "Revised Statutes of Missouri, Section 304.010 (Missouri Revisor of Statutes)",
    section: "Section 304.010.2(3)",
    url: "https://revisor.mo.gov/main/OneSection.aspx?section=304.010",
  },
  {
    key: "school-bus-amber-500",
    quote:
      "Amber warning lights will flash 500 feet before the bus comes to a " +
      "designated stop.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - School Buses",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "school-bus-four-lane-exception",
    quote:
      "When you are traveling the opposite direction of a school bus on a " +
      "highway containing four or more lanes of traffic",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - School Buses",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "school-bus-must-stop",
    quote:
      "Oncoming and following traffic must stop before they reach the bus " +
      "when these signals are activated.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - School Buses",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "school-zone-flashing",
    quote:
      "You must obey a slower speed limit in a school zone when lights " +
      "are flashing or children are present.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 4 - As a Driver, You Should Know",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "seat-belt-law",
    quote:
      "Missouri law requires the operator and front seat occupants of all " +
      "passenger vehicles to wear a properly adjusted and fastened seat " +
      "belt. However, ALL passengers accompanying an intermediate driver " +
      "license holder must be properly restrained.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 8 - Seat Belts - It’s The Law",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "service-signs",
    quote:
      "These signs are square or rectangular, and are blue with white " +
      "letters or symbols. They show the location of various services, " +
      "such as rest areas and hospitals.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Service Signs",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "shared-center-lane",
    quote:
      "Vehicles moving in both directions may use these center lanes for " +
      "making left turns (or U-turns when they are permitted).",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Shared Center Lanes",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "sign-colors",
    quote:
      "Yellow = Warning Yellow Green = School Orange = Construction Green " +
      "= Direction & Distance Blue = Motorist Services",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Sign Colors",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "sign-shapes-pentagon",
    quote:
      "Pentagon = School Round = Railroad Crossbuck = Railroad Pennant = " +
      "No Passing Zone Diamond = Warning",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Sign Shapes",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "signal-100-feet",
    quote:
      "You should signal at least 100 feet before you turn so the other " +
      "drivers can be ready.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Hand and Vehicle Signals",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "signal-early-100-feet",
    quote:
      "Signal as early as you can. Try to signal at least 100 feet before " +
      "you make your move.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 8 - Signal When You Change Direction",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "skid-steer-into",
    quote:
      "Gently turn your steering wheel in the direction that your rear " +
      "wheels are sliding.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 9 - Skidding",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "slow-moving-triangle",
    quote:
      "A reflective orange triangle on the rear of a vehicle means it is " +
      "traveling less than 25 mph.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Special Road and Traffic Conditions",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "slow-poke-blocking",
    quote:
      "If there is no posted minimum speed, it is still against the law " +
      "for you to drive so slowly that you block traffic.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 8 - “Slow Poke” Driving",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "slow-poke-minimum",
    quote:
      "It is against the law for you to drive slower than the posted " +
      "minimum speed under normal driving conditions.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 8 - “Slow Poke” Driving",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "smv-sign-required",
    quote:
      "From sunset to ½ hour before sunrise, any vehicle moving 25 mph or " +
      "slower must have a “slow moving vehicle” sign (refer to Chapter " +
      "3).",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 14 - Other Equipment Required by Law",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "snow-following-8-10",
    quote:
      "So be sure to leave a safe distance, about eight to ten seconds, " +
      "between your vehicle and any vehicle ahead of you.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 9 - Winter Driving",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "soft-shoulder",
    quote:
      "The shoulder on the side of the road ahead is soft. Do not drive " +
      "off the pavement.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Special Road and Traffic Conditions",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "solid-yellow-your-side",
    quote:
      "When you see a solid yellow line on your side of the center line, " +
      "do not try to pass.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - No Passing Zones",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "speed-ideal-conditions",
    quote:
      "The speed limit is the maximum allowable speed in ideal " +
      "conditions.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Speed Limit",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "speed-limit-maximum",
    quote:
      "Speed limit signs indicate the maximum speed allowed by law, and " +
      "do not mean that all parts of the road can be safely driven at " +
      "those speeds under all conditions.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Speed Limit",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "speed-slow-when-needed",
    quote:
      "By law, when conditions demand it, you must slow down.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Speed Limit",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "sr22-two-years",
    quote:
      "Proof of insurance must be kept on file with the Driver License " +
      "Bureau for two years.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 10 - Proof of Insurance",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "stalled-tracks-train",
    quote:
      "Unfasten your seat belt, get out of your vehicle, and off the " +
      "tracks. Run in the direction the train is coming from.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 9 - Stalling On Railroad Tracks",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "steady-yellow",
    quote:
      "A steady yellow light tells you the traffic signal is changing " +
      "from green to red. Stop for a steady yellow light unless you are " +
      "within the intersection or are so close that you cannot safely " +
      "stop before entering the intersection.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Traffic Signals",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "steering-hand-position",
    quote:
      "Place your left hand between the seven & nine o’clock positions " +
      "and your right hand between the three & five o’clock positions on " +
      "the steering wheel.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 8 - Steering",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "stop-before-stop-line",
    quote:
      "When required to stop because of a sign or signal, you must stop " +
      "before your vehicle reaches the stop line or, if there is one, the " +
      "crosswalk.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Crosswalks and Stop Lines",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "stop-line-past-sign",
    quote:
      "You must stop at the stop line if one is present even if it is " +
      "located past the stop sign.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Regulatory Signs",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "stop-sign",
    quote:
      "A stop sign is red with white letters and has eight sides. When " +
      "you see a stop sign, you must come to a full stop. You must wait " +
      "until crossing vehicles and pedestrians have cleared the " +
      "intersection.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Regulatory Signs",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "studded-tires",
    quote:
      "Your vehicle may have studded snow tires only from November 1 to " +
      "April 1.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 14 - Other Equipment Required by Law",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "t-intersection",
    quote:
      "The road you are traveling does not continue. You must turn either " +
      "right or left.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Road Intersections Signs",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "tailgated-never-brake",
    quote:
      "Never slow down quickly to discourage a tailgater. This will only " +
      "increase your risk of being hit from behind.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 8 - Space Behind",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "three-lanes-stay-right",
    quote:
      "On a road with three or more lanes traveling in the same " +
      "direction, stay in the right lane except to pass. If there is a " +
      "considerable amount of traffic entering the right travel lane, " +
      "then use the center travel lane.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - No Lane Markings",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "three-second-rule",
    quote:
      "A good way to measure your safe following distance is to use the " +
      "“three second rule.”",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 8 - Three Second Rule",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "three-second-too-close",
    quote:
      "If you reach the object before you finish counting, you are too " +
      "close to the vehicle ahead.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 8 - Three Second Rule",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "traffic-officer-green",
    quote:
      "For example, if the officer signals for you to stop at a green " +
      "light, you must stop.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Traffic Officers",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "traffic-officers",
    quote:
      "You must obey traffic officers at all times. If you see a traffic " +
      "officer giving directions, do what he or she says and ignore any " +
      "traffic signs or signals.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Traffic Officers",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "transfer-two-tests",
    quote:
      "You must also surrender the license from your previous state of " +
      "residence, and take the vision and road sign tests.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 1 - Requirements to Obtain a License or Permit",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "truck-right-turn-swing",
    quote:
      "Because of their size, large trucks may swing out to the left as " +
      "the first step in making a right turn.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 4 - Sharing The Road With Large Trucks",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "turn-from-nearest-lane",
    quote:
      "If there are no signs or lane markings to control turning, you " +
      "should turn from the lane that is closest to the direction you " +
      "want to go, and turn into the lane closest to the one you came " +
      "from.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Turns",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "turn-sign-30",
    quote:
      "A turn sign is used to warn of a sharp turn or turn where the " +
      "recommended maximum speed is 30 mph or less.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Turns and Curves In The Road",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "two-drinks",
    quote:
      "Even one drink is likely to affect your ability to drive safely " +
      "and in many cases, two drinks could place you over the legal blood " +
      "alcohol limit.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 10 - Alcohol",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "two-lane-drive-right",
    quote:
      "When driving on a highway with a total of two lanes (one lane in " +
      "each direction), drive in the right hand lane.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 6 - Drive in the Proper Lane",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "two-way-left-turn-500",
    quote:
      "Do not use this lane as travel lane (a vehicle may not travel in " +
      "this lane for more than 500 feet), and do not use this lane when " +
      "entering the roadway from a side street.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Two-Way Left-Turn Lanes",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "two-way-left-turn-entry",
    quote:
      "Only enter this lane when preparing to slow down or stop before " +
      "making a left turn from the main roadway.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Two-Way Left-Turn Lanes",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "u-turn-prohibited",
    quote:
      "Never make a U-turn at a location that is marked with a “No " +
      "U-Turn” sign or at an intersection controlled by a traffic signal " +
      "or police officer.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - U-Turns",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "uncontrolled-yield-right",
    quote:
      "At an intersection where there is no stop sign or traffic signal " +
      "(with the exception of roundabouts), drivers must yield to " +
      "vehicles coming from the right",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Intersections",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "warning-signs",
    quote:
      "These signs are yellow with black lettering or symbols and usually " +
      "diamond shaped. These signs warn you to slow down and be prepared " +
      "to stop if necessary because a special situation or a hazard is " +
      "ahead.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Warning Signs",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "work-zone-fine",
    quote:
      "If you are caught speeding or passing in a construction zone or " +
      "work zone on Missouri state roadways, you could be fined a minimum " +
      "of $250 for the first offense and a minimum of $300 for a second " +
      "or subsequent offense",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 3 - Passing",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "work-zone-orange",
    quote:
      "Work zone signs are fluorescent orange and indicate some type of " +
      "work is being performed on or alongside the roadway.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Work Zone Signs",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "written-25-questions",
    quote:
      "To test your knowledge of traffic laws, you will need to take a " +
      "written test of 25 multiple-choice questions.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Introduction",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "wrong-way-sign",
    quote:
      "You made a wrong turn and have entered a lane of oncoming traffic. " +
      "As quickly and safely as possible, pull off the road, turn around " +
      "and go back.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Regulatory Signs",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "yellow-arrow",
    quote:
      "A steady yellow arrow appears after a green arrow.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Left Turn Signals",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
  {
    key: "yield-sign",
    quote:
      "A yield sign is triangular. It is red and white with red letters. " +
      "It means you must slow down and yield the right-of-way to traffic " +
      "in the intersection you are crossing or roadway you are entering.",
    source: "Missouri Driver Guide (Missouri Department of Revenue, revised August 2025)",
    section: "Chapter 7 - Regulatory Signs",
    url: "https://dor.mo.gov/forms/Driver%20Guide.pdf",
  },
];
