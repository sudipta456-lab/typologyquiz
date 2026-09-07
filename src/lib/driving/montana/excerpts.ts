import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Montana bank.
//
// Sources, and why there are three of them:
//
//  - The Montana Driver Manual, Revised April 2024, published by the Montana
//    Department of Justice Motor Vehicle Division. This is the book the MVD
//    writes the written test from, and it carries most of what is quoted below.
//    The copy used is the PDF served from the MVD's own Forms and Manuals page,
//    uploaded May 2026; its cover still reads "Revised April 2024", which is the
//    publisher's own edition label and so the one recorded here.
//  - The Montana Code Annotated 2025, Title 61, published by the Montana
//    Legislature. The manual paraphrases the law by its own admission and leaves
//    out numbers the test still expects - it never states the 25 mph urban
//    district limit, and its move-over and DUI figures have been overtaken by
//    amendments. Those come from the statute.
//  - Two mvdmt.gov pages, for the graduated licensing steps. The manual and the
//    website disagree about the age at which a learner permit can be issued at
//    an exam station, so both readings are quoted.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. Four
// normalisations were applied to the extracted text and to nothing else: curly
// quotes, en dashes and em dashes are folded to ASCII; runs of whitespace,
// including the line breaks the PDF inserts mid-sentence, collapse to single
// spaces; the section symbol is spelled out as "Section"; and where a source
// states a rule as a stem followed by a bulleted list, the items are run
// together in the order they appear - no words are changed, dropped or
// reordered. The sources' own slips are preserved as they stand, including the
// manual's "untilthe vehicle has stopped" and "itcan be seen", because a quote
// that has been tidied up is no longer a quote.

export const montanaExcerpts: HandbookExcerpt[] = [
  {
    key: "animals-dawn-dusk",
    quote:
      "Be aware and look for animals, especially at sunrise and sunset. If " +
      "you see an animal, slow down and be prepared to stop.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Wildlife and Other Animals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "animals-do-not-swerve",
    quote:
      "If there isn't time to stop or avoid the animal, do not swerve " +
      "sharply. The driver's chance of getting seriously hurt is decreased " +
      "if he/she hits the animal and avoids swerving into oncoming traffic " +
      "or rolling the vehicle over in the ditch.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Wildlife and Other Animals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "animals-herds",
    quote:
      "Deer, elk, and similar wildlife travel in herds, so always look for " +
      "more animals if you see one.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Wildlife and Other Animals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "animals-no-horn",
    quote:
      "You must drive at a reasonable speed, and at a reasonable distance " +
      "away from the horse. It is illegal to sound your horn when " +
      "approaching or passing a horse.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Horseback Riders",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "animals-right-of-way",
    quote:
      "Always give the right-of-way to an animal that someone is leading, " +
      "riding, or driving. Animals are easily scared by motor vehicles.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Livestock and Draft Animals and Horse-Drawn Vehicles",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "backing-check-behind-first",
    quote:
      "Check behind your vehicle before you get in. Children or small " +
      "objects cannot be seen from the driver's seat.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: When You Back Up",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "backing-look-through-window",
    quote:
      "Place your right arm on the back of the seat and turn around so that " +
      "you can look directly through the rear window. Do not depend on your " +
      "rearview or side mirrors as you cannot see directly behind your " +
      "vehicle.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: When You Back Up",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "backing-never-in-lane",
    quote:
      "Never back up or stop in any travel lane for any reason (confusion, " +
      "breakdown, letting out a passenger); keep moving until you can " +
      "safely pull off the road.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: General Driving",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "belt-airbag-both",
    quote:
      "Air bags are only part of a total occupant protection system. If " +
      "your vehicle has a two-part safety belt system, wear both the lap " +
      "belt and shoulder belt. Wearing either part alone greatly reduces " +
      "your protection.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Safety Belts Required",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "belt-driver-responsible",
    quote:
      "Montana law places responsibility on the driver to ensure each " +
      "occupant is properly buckled or in a child safety seat. A driver who " +
      "violates the law will be fined $20.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Safety Belts Required",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "belt-exceptions",
    quote:
      "Exceptions to the seatbelt law include: If the vehicle was " +
      "manufactured prior to January 1, 1968. If an occupant has a written " +
      "statement with them from a physician that he/she is unable to wear a " +
      "seatbelt for medical reasons.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Safety Belts Required",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "belt-required",
    quote:
      "Seatbelts must always be in good working condition. No person may " +
      "drive a motor vehicle in Montana unless each occupant is wearing a " +
      "properly adjusted and fastened safety belt.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Seatbelts",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "belt-statute",
    quote:
      "A driver may not operate a motor vehicle upon a highway of the state " +
      "of Montana unless each occupant of a designated seating position is " +
      "wearing a properly adjusted and fastened seatbelt or, if 61-9-420 " +
      "applies, is properly restrained in a child safety restraint.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 13. SEATBELTS, Part 1. Montana Seatbelt Use Act - 61-13-103. Seatbelt use required -- exceptions",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0130/part_0010/section_0030/0610-0130-0010-0030.html",
  },
  {
    key: "belt-statute-secondary",
    quote:
      "The department or its agent may not require a driver who may be in " +
      "violation of this section to stop except: (a) upon reasonable cause " +
      "to believe that the driver has violated another traffic regulation " +
      "or that the driver's vehicle is unsafe or not equipped as required " +
      "by law;",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 13. SEATBELTS, Part 1. Montana Seatbelt Use Act - 61-13-103. Seatbelt use required -- exceptions",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0130/part_0010/section_0030/0610-0130-0010-0030.html",
  },
  {
    key: "bike-brake-skid",
    quote:
      "A brake that will enable the operator to make the wheels skid on " +
      "dry, level, clean pavement.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Equipment and Lighting Required for Bicycles",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "bike-do-not-honk",
    quote:
      "Do not honk your horn, yell, or swerve toward a bicyclist. This may " +
      "startle the bicyclist and cause a serious crash.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Same Road - Same Rules - Same Rights",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "bike-five-feet",
    quote:
      "If there is no oncoming traffic, carefully cross the center line to " +
      "give the cyclist a recommended five- feet distance between them and " +
      "your motor vehicle. If there is oncoming traffic, slow to the speed " +
      "of the cyclist and wait for it to be safe to pass.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Same Road - Same Rules - Same Rights",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "bike-in-lane-position",
    quote:
      "Many bicyclists will often ride further into the lane (approximately " +
      "18-24 inches) to discourage motorists from trying to attempt a " +
      "dangerous in-lane pass.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Same Road - Same Rules - Same Rights",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "bike-lights-500",
    quote:
      "When used at nighttime, a light on the front, which must emit white " +
      "light visible for at least 500 feet to the front.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Equipment and Lighting Required for Bicycles",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "bike-motorist-duties",
    quote:
      "Motorists may not overtake and pass a person riding a bicycle unless " +
      "it can be done without endangering the person riding on the bicycle, " +
      "or those in any nearby motor vehicle. Motorists must yield the " +
      "right-of-way to a person riding a bicycle within a designated " +
      "bicycle lane.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Same Road - Same Rules - Same Rights",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "bike-no-daytime-lights",
    quote:
      "Bicycles are less visible and, unlike motorcycles, are not required " +
      "to have lights during daytime travel.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Same Road - Same Rules - Same Rights",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "bike-ride-right",
    quote:
      "Bicyclists are required by law to ride as far to the right as " +
      "practical. This does not mean the cyclist is always on the shoulder " +
      "of the roadway.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Same Road - Same Rules - Same Rights",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "bike-right-turn-check",
    quote:
      "When a bicycle is traveling in your lane and you need to make a " +
      "right turn, always check to make sure the bicyclist has either " +
      "stopped to let you turn, or allow the bicyclist to pass you before " +
      "making the turn.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Same Road - Same Rules - Same Rights",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "bike-roundabout-walk",
    quote:
      "Walk your bicycle and use the crosswalks. Bicyclists are encouraged " +
      "to walk their bicycles on the sidewalks and use the pedestrian " +
      "crosswalks.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Roundabouts in Montana",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "bike-same-rules",
    quote:
      "Under Montana law, bicycles are considered vehicles and are governed " +
      "by the same traffic laws that reasonably apply to their operation.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Same Road - Same Rules - Same Rights",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "bike-single-file",
    quote:
      "Individuals riding bicycles on a roadway must ride in single file " +
      "except when: Riding on bike paths or parts of roadways set aside for " +
      "the exclusive use of bicycles. Overtaking and passing another " +
      "bicycle Riding on a paved shoulder or on a parking lane, in which " +
      "case the persons may ride two abreast.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Same Road - Same Rules - Same Rights",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "brake-signal-taps",
    quote:
      "If you are going to stop or slow down at a place where another " +
      "driver does not expect it, tap your brake pedal three or four times " +
      "quickly to let those behind you know you are about to slow down.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Signal When You Slow Down",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "breakdown-flashers",
    quote:
      "If at all possible, get your vehicle off the road and away from " +
      "traffic. Turn on your emergency flashers to show you are having " +
      "trouble.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Use Emergency Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "breakdown-hood-cloth",
    quote:
      "Lift the hood or tie a white cloth to the antenna, side mirror, or " +
      "door handle to signal an emergency.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Use Emergency Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "breakdown-never-stand",
    quote:
      "Never stand in the roadway. Do not even try to change a tire if it " +
      "means you have to be in a traffic lane.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Use Emergency Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "bus-amber-lights",
    quote:
      "If you approach a bus from either direction that is slowing down in " +
      "preparation to stop to load passengers, or a bus displaying a yellow " +
      "flashing light, you must slow down and proceed carefully.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: School Buses",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "bus-different-road",
    quote:
      "You do not need to stop if meeting or passing a school bus that is " +
      "on a different road (Diagram 3) or is stopped in an adjacent loading " +
      "zone where pedestrians are not allowed to cross the road.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: School Buses",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "bus-statute-30-feet",
    quote:
      "shall stop the motor vehicle not less than approximately 30 feet " +
      "from the school bus; and (ii) may not proceed past the school bus " +
      "until the school bus ceases operation of its flashing red lights.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-351. Meeting or passing school bus -- vehicle operator liability for violation -- penalty",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0510/0610-0080-0030-0510.html",
  },
  {
    key: "bus-statute-amber",
    quote:
      "Amber flashing lights must be actuated by the driver approximately " +
      "150 feet in cities and approximately 500 feet in other areas before " +
      "the bus is stopped to receive or discharge school children on the " +
      "highway or street.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-351. Meeting or passing school bus -- vehicle operator liability for violation -- penalty",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0510/0610-0080-0030-0510.html",
  },
  {
    key: "bus-statute-no-right-pass",
    quote:
      "A driver of a motor vehicle may not overtake a stopped school bus on " +
      "the right side of the school bus.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-351. Meeting or passing school bus -- vehicle operator liability for violation -- penalty",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0510/0610-0080-0030-0510.html",
  },
  {
    key: "bus-stop-30-feet",
    quote:
      "Upon meeting or passing from either direction any school bus stopped " +
      "with its red lights flashing, the driver of a vehicle must stop at " +
      "least 30 feet from the bus and cannot proceed until the red lights " +
      "are turned off",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: School Buses",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "child-back-seat",
    quote:
      "Never place a rear-facing car seat in the front passenger seat with " +
      "an active air bag. Whenever possible, children under age 13 should " +
      "be secured in the backseat.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Child Restraints Required",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "child-never-hold",
    quote:
      "If you hold your child while riding in a vehicle, you could crush " +
      "the child during a crash. In a 30-mph crash, a 100 pound adult " +
      "becomes a 3,000 pound force against the child.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Child Restraints Required",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "child-restraint-6-60",
    quote:
      "Babies and children up to age 6 and 60 pounds must be buckled in a " +
      "child safety seat. Booster seats are recommended for older children " +
      "until the vehicle's lap and shoulder belt fits properly, which is " +
      "usually when children are about 4'9\" tall.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Child Restraints Required",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "crash-bleeding",
    quote:
      "If there is bleeding, apply direct pressure directly on the wound " +
      "with your hand or with a cloth. Even severe bleeding can almost " +
      "always be stopped or slowed by using pressure on the wound.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: If someone is injured",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "crash-do-not-move-injured",
    quote:
      "Do not move the injured unless they are in a burning car or in other " +
      "immediate danger. Moving a person can make their injuries worse.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: If someone is injured",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "crash-do-not-stop-to-look",
    quote:
      "Do not stop at an accident unless you are involved, or emergency " +
      "help has not arrived yet.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Accidents",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "crash-exchange-info",
    quote:
      "Exchange information with other drivers involved in the crash. Name, " +
      "address, driver license number, vehicle information (license plate, " +
      "make, model, and year of vehicle), and insurance company and policy " +
      "number.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Report the accident",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "crash-leaving-is-a-crime",
    quote:
      "It is a crime for you to leave a crash site where your vehicle was " +
      "involved if there is an injury or death before police have talked to " +
      "you and gotten all the information they need about the crash.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Accidents",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "crash-must-stop",
    quote:
      "If you are involved in an accident, you must stop. If you are " +
      "involved in an accident with a parked vehicle, you must try to " +
      "locate the owner. If any person is injured or killed, the police " +
      "must be notified.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Accidents",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "crash-no-drink",
    quote:
      "Do not give injured people anything to drink, not even water. To " +
      "help prevent an injured person from going into shock, cover them " +
      "with a blanket or coat to keep them warm.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: If someone is injured",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "crash-parked-car",
    quote:
      "If you are involved in an accident with a parked vehicle, you must " +
      "try to locate the owner.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Accidents",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "crash-report-10-days",
    quote:
      "You must file the report within 10 days of the accident. If you are " +
      "injured and unable to complete the report, someone can file it for " +
      "you.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Report the accident",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "crash-report-thresholds",
    quote:
      "You must report an accident immediately to law enforcement if anyone " +
      "is injured or killed, or property damage is $500 or more. You must " +
      "report to the Highway Patrol if there is an injury, a death, or " +
      "property damage of $1,000 or more to one person's property.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Report the accident",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "crash-scene-safety",
    quote:
      "Turn off the ignition of wrecked vehicles. Do not smoke around " +
      "wrecked vehicles. Fuel could have spilled and fire is a real danger.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: At the accident scene",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "crash-statute-aid",
    quote:
      "render to any person injured in the accident reasonable assistance, " +
      "including the transporting or the making of arrangements for the " +
      "transporting of the person to a physician, surgeon, or hospital for " +
      "medical or surgical treatment if it is apparent that the treatment " +
      "is necessary",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 7. ACCIDENTS AND ACCIDENT REPORTS, Part 1. Uniform Accident Reporting Act - 61-7-105. Duty to give information and render aid",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0070/part_0010/section_0050/0610-0070-0010-0050.html",
  },
  {
    key: "cross-do-not-block",
    quote:
      "Even if you have a green light, do not start across the intersection " +
      "if there are cars blocking your way. If you are caught in the " +
      "intersection when the light changes to red, you will block other " +
      "traffic. You can get a ticket for blocking an intersection.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space to Cross or Enter",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "cross-turn-signal-trap",
    quote:
      "Do not turn just because an approaching vehicle has a turn signal " +
      "on. The driver may plan to turn beyond you or may have forgotten to " +
      "turn the signal off from a prior turn.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space to Cross or Enter",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "curve-slow-before",
    quote:
      "Always slow down before you enter the curve so you do not have to " +
      "brake in the curve. Braking in a curve can cause the vehicle to " +
      "skid.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Curves",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "distraction-city-laws",
    quote:
      "Most Montana cities have passed laws against texting and talking on " +
      "cell phones while driving.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Don't Be a Distracted Driver",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "distraction-definition",
    quote:
      "Distracted driving occurs any time you take your eyes off the road, " +
      "your hands off the wheel, and your mind off your primary task of " +
      "driving safely.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Don't Be a Distracted Driver",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "distraction-eyes-off-road",
    quote:
      "Do not take your eyes off the road for more than a few seconds at " +
      "any one time. For example, if you need to look at a map, pull safely " +
      "off the road before you try to look at it.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Seeing Well",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "distraction-hands-free",
    quote:
      "Even with hands-free equipment, talking on a phone or radio takes " +
      "your attention away from driving, and can make you less likely to " +
      "notice hazardous situations.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Seeing Well",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "distraction-headphones",
    quote:
      "Do not drive with headphones or earbuds. They make it too hard to " +
      "hear emergency horns and sirens.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Seeing Well",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "distraction-rubbernecking",
    quote:
      "When passing a crash with emergency responders, someone getting a " +
      "ticket, or other roadside activity, do not take your eyes off the " +
      "road and do not slow down to stare (often called \"rubbernecking\").",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Seeing Well",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "distraction-statute-education",
    quote:
      "the department shall include in its publications intended for novice " +
      "drivers information concerning the dangers of physical and cognitive " +
      "distractions while driving",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 5. DRIVER'S LICENSES, Part 1. Licensing Provisions - 61-5-135. Education on distracted driving",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0050/part_0010/section_0350/0610-0050-0010-0350.html",
  },
  {
    key: "distraction-texting",
    quote:
      "Texting is the most alarming distraction because it involves " +
      "simultaneous manual, visual, and cognitive distraction. Sending or " +
      "reading a text takes your eyes off the road for 5 seconds. At 55 " +
      "mph, that's like driving the length of an entire football field " +
      "while blindfolded.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Don't Be a Distracted Driver",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "do-not-enter-sign",
    quote:
      "The DO NOT ENTER square means the road ahead is a one-way roadway, " +
      "or all vehicular traffic is not permitted. DO NOT ENTER.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Intersection Traffic Control Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "drugs-label-warnings",
    quote:
      "Drug warnings about operating heavy machinery mean DO NOT DRIVE YOUR " +
      "CAR OR TRUCK. If you are not sure if it is safe to take the drug and " +
      "drive, ask your doctor or pharmacist about any side effects.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Other Drugs & Driving",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "drugs-never-mix",
    quote:
      "Never drink alcohol while you are taking other drugs. The drugs " +
      "could multiply the effects of alcohol or have additional side " +
      "effects of their own.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Other Drugs & Driving",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "drugs-prescription",
    quote:
      "Other prescription drugs - including medical marijuana - can affect " +
      "your reflexes, judgment, vision, and alertness in ways similar to " +
      "alcohol.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Other Drugs & Driving",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "dui-40-percent",
    quote:
      "Alcohol is involved in approximately 40% of fatal crashes. Alcohol " +
      "consumption, even small amounts, increases your chances of being in " +
      "a crash.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Drinking & Driving",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "dui-affects-judgment",
    quote:
      "Alcohol can be absorbed through the walls of the stomach and can " +
      "affect your brain within one minute.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Why is Drinking and Driving So Dangerous?",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "dui-bac-08",
    quote:
      "You can be arrested for driving with a blood alcohol concentration " +
      "(BAC) of 0.08% or more, or while driving under the influence. BAC is " +
      "the percentage of alcohol in your blood, and is usually determined " +
      "by a breath, blood, or urine test.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Alcohol and the Law",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "dui-best-answer",
    quote:
      "The best answer is: If you drink alcohol, do not drive. Even one " +
      "alcoholic beverage can affect your driving.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: If You Drink, When Can You Drive?",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "dui-craft-beer",
    quote:
      "Microbrews and craft beers often contain more alcohol than a " +
      "12-ounce commercial beer. Specialty drinks can have more alcohol in " +
      "them and are the same as having several normal drinks.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: If You Drink, When Can You Drive?",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "dui-drink-age-21",
    quote:
      "You are not allowed to buy or consume alcohol unless you are 21 " +
      "years of age or older.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Alcohol and the Law",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "dui-first-penalty-manual",
    quote:
      "If you are found guilty of an alcohol violation and it is your first " +
      "conviction, you will be fined from $300 to $1000, plus court " +
      "charges; you could be sentenced to 1 to 60 days in jail; and your " +
      "license will be suspended for six months.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Alcohol and the Law",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "dui-implied-consent",
    quote:
      "If a police officer asks you to take a test, you must do so. You can " +
      "lose your driver license if you refuse to take a BAC test.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Alcohol and the Law",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "dui-new-drivers",
    quote:
      "No one can drink alcohol and drive safely, even if you have been " +
      "driving for many years. New drivers are more affected by alcohol " +
      "than experienced drivers because new drivers are still learning to " +
      "drive.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Drinking & Driving",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "dui-one-drink-hour",
    quote:
      "The average person's body will process one alcoholic drink in one " +
      "hour. Alcohol can still accumulate in your body even if you are " +
      "drinking at a rate of one drink per hour.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: If You Drink, When Can You Drive?",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "dui-one-drink-is",
    quote:
      "One alcoholic drink is: 1-1/2 ounces of 80-proof liquor (one shot " +
      "glass), straight or with a mixer; 12 ounces of commercial beer (a " +
      "regular size can, bottle, mug, or glass); or a 5-ounce glass of " +
      "wine.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: If You Drink, When Can You Drive?",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "dui-statute-08",
    quote:
      "a noncommercial vehicle upon the ways of this state open to the " +
      "public while the person's alcohol concentration, as shown by " +
      "analysis of the person's blood, breath, oral fluid, or other bodily " +
      "substance, is 0.08 or more;",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 10. Driving Under Influence of Alcohol or Drugs - 61-8-1002. Driving under influence",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0100/section_0020/0610-0080-0100-0020.html",
  },
  {
    key: "dui-statute-commercial-04",
    quote:
      "a commercial motor vehicle within this state while the person's " +
      "alcohol concentration, as shown by analysis of the person's blood, " +
      "breath, oral fluid, or other bodily substance, is 0.04 or more;",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 10. Driving Under Influence of Alcohol or Drugs - 61-8-1002. Driving under influence",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0100/section_0020/0610-0080-0100-0020.html",
  },
  {
    key: "dui-statute-first-fine",
    quote:
      "for a first violation, by imprisonment for not less than 24 " +
      "consecutive hours or more than 6 months and by a fine of not less " +
      "than $600 or more than $1,000",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 10. Driving Under Influence of Alcohol or Drugs - 61-8-1007. Penalty for driving under influence -- first through third offenses",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0100/section_0070/0610-0080-0100-0070.html",
  },
  {
    key: "dui-statute-implied-consent",
    quote:
      "A person who operates or is in actual physical control of a vehicle " +
      "or commercial motor vehicle upon the ways of this state open to the " +
      "public is considered to have given consent to a test or tests of the " +
      "person's blood, breath, or oral fluid",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 10. Driving Under Influence of Alcohol or Drugs - 61-8-1016. Implied consent -- tests for alcohol or drugs -- refusal to submit -- administrative suspension of license",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0100/section_0160/0610-0080-0100-0160.html",
  },
  {
    key: "dui-statute-thc",
    quote:
      "a noncommercial vehicle or commercial motor vehicle within this " +
      "state while the person's tetrahydrocannabinol level, excluding " +
      "inactive metabolites, as shown by analysis of the person's blood or " +
      "other bodily substance, is 5 ng/ml or more;",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 10. Driving Under Influence of Alcohol or Drugs - 61-8-1002. Driving under influence",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0100/section_0020/0610-0080-0100-0020.html",
  },
  {
    key: "dui-statute-under21",
    quote:
      "a vehicle within this state when the person is under 21 years of age " +
      "at the time of the offense while the person's alcohol concentration, " +
      "as shown by analysis of the person's blood, breath, oral fluid, or " +
      "other bodily substance, is 0.02 or more;",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 10. Driving Under Influence of Alcohol or Drugs - 61-8-1002. Driving under influence",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0100/section_0020/0610-0080-0100-0020.html",
  },
  {
    key: "dui-under-21-02",
    quote: "The BAC for a driver under 21 years of age is 0.02.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Alcohol and the Law",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "emerg-abs-braking",
    quote:
      "With ABS: If you have an anti-lock braking system and you need to " +
      "stop quickly: Press on the brake pedal as hard as you can and keep " +
      "pressing on it. You might feel the brake pedal pushing back when the " +
      "ABS is working. Do not let up on the brake pedal. The ABS system " +
      "will only work with the brake pedal pushed down.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Stopping Quickly",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "emerg-blowout",
    quote:
      "If a tire suddenly goes flat: Hold the steering wheel tightly and " +
      "keep the vehicle going straight. Slow down gradually. Take your foot " +
      "off the gas pedal and use the brakes lightly.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Tire Blowout",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "emerg-brake-failure",
    quote:
      "Pump the brake pedal several times. This often builds up enough " +
      "brake pressure to let you stop. If that doesn't work, use the " +
      "parking brake. Pull on the parking brake handle slowly so you will " +
      "not lock the rear wheels and cause a skid.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Brake Failure",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "emerg-headlight-failure",
    quote:
      "If your headlights suddenly go out: Stay calm, visualize the road. " +
      "Take your foot off the accelerator, begin braking. Try the headlight " +
      "switch a few times and turn on the high beams.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Headlight Failure",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "emerg-no-abs-braking",
    quote:
      "Apply the brakes as hard as you can without locking them. If the " +
      "brakes lock up, you will feel the vehicle start to skid. Quickly let " +
      "up on the brake pedal.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Stopping Quickly",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "emerg-off-pavement",
    quote:
      "If your vehicle's right wheels leave the pavement: Take your foot " +
      "off the accelerator and steer parallel to the road. When slowed " +
      "down, ease back on the road when it's safe.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Drift or Run off the Road",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "emerg-run-off-not-head-on",
    quote:
      "Another consideration is that generally it is better to run off the " +
      "road than to crash head-on into another vehicle.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Turning Quickly",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "emerg-stuck-accelerator",
    quote:
      "If the motor keeps going faster and faster: Keep your eyes on the " +
      "road. Quickly shift to neutral. Apply steady pressure on the brake.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Gas Pedal Sticks",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "emerg-three-options",
    quote:
      "In avoiding a collision, drivers have three options: (1) stop, (2) " +
      "turn, and (3) speed up.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Avoiding Collisions",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "emerg-turn-quicker",
    quote:
      "In most cases, you can turn the vehicle quicker than you can stop " +
      "it. You should consider turning in order to avoid a collision.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Turning Quickly",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "emergency-in-intersection",
    quote:
      "Also, stop and remain stopped until the vehicle has passed. If you " +
      "are in an intersection, drive through the intersection before you " +
      "pull over and stop.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Emergency Vehicles",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "emergency-move-over-manual",
    quote:
      "On highways with a posted speed limit of 50 MPH or more, vehicles in " +
      "a lane directly next to a stationary emergency or police vehicle " +
      "displaying emergency signals must slow down to a speed of at least " +
      "20 miles below the posted speed limit.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Driver response to emergency vehicles",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "emergency-pull-right",
    quote:
      "You must yield the right-of-way to a police vehicle, fire engine, " +
      "ambulance, or other emergency vehicle using a siren or air horn and " +
      "a red or blue flashing light. Pull over to the right edge of the " +
      "road or as near to the right as possible when you see or hear an " +
      "emergency vehicle approaching from any direction.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Emergency Vehicles",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "emergency-signals-types",
    quote:
      "Police vehicle: Siren and/or red or blue flashing or rotating lights " +
      "or flashing or rotating amber lights. Authorized Emergency Vehicle: " +
      "Siren and/or flashing or rotating red lights or flashing or rotating " +
      "amber lights.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Driver response to emergency vehicles",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "emergency-statute-yield",
    quote:
      "drive cautiously to a position that is not in an intersection and is " +
      "parallel to and as close as possible to the right-hand edge or curb " +
      "of the roadway, inclusive of a paved shoulder if it exists; and (ii) " +
      "remain stationary until the law enforcement vehicle or authorized " +
      "emergency vehicle has passed.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-387. Yielding to moving emergency vehicle",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0870/0610-0080-0030-0870.html",
  },
  {
    key: "emotions-cool-off",
    quote:
      "If you are angry or excited, give yourself time to cool off. If " +
      "necessary, take a short walk, but stay off the road until you have " +
      "calmed down.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Emotions",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "equip-clear-snow",
    quote:
      "Remove snow and ice from all windows before you drive to clear your " +
      "view of the road.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Windshield and Wipers",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "equip-dirty-lenses",
    quote:
      "Keep the headlights, backup, brake and taillights clean. Dirt on the " +
      "lenses can cut the lights' effectiveness by 50%.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Clean All Windows and Glass Surfaces",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "equip-exhaust-drowsy",
    quote:
      "Fumes from a leaky exhaust can cause death in a very short time. It " +
      "can also make you drowsy while driving.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Exhaust System",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "equip-flashing-lights-banned",
    quote:
      "Note: Flashing, blinking, sequential, rotating, or pulsating lights " +
      "(other than turn signals) are prohibited except for emergency or " +
      "authorized vehicles.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Vehicle Light Distances",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "equip-head-restraint",
    quote:
      "Head restraints are designed to prevent whiplash if you are hit from " +
      "behind. They should be adjusted so the head restraint contacts the " +
      "back of the head.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Adjust Seat and Mirrors",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "equip-horn-200",
    quote: "Horn Must provide warning audible for 200 feet.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Horn",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "equip-horn-warning-only",
    quote:
      "The horn may not seem like it would be important for safety, but as " +
      "a warning device it could save your life. It only should be used as " +
      "a warning to others.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Horn",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "equip-mirror-200",
    quote:
      "Mirror Vehicles manufactured after January 1, 1956, must provide " +
      "200-foot visibility to rear of the vehicle.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Mirror",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "equip-mirror-adjust",
    quote:
      "A good adjustment for the side mirrors is to set them so that when " +
      "you lean forward slightly, you can see the side of your vehicle.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Adjust Seat and Mirrors",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "equip-nothing-hanging",
    quote:
      "Do not hang things from your mirror or clutter up the windshield " +
      "with decals. They could block your view.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Clean All Windows and Glass Surfaces",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "equip-sirens-banned",
    quote:
      "No vehicle shall be equipped with, nor shall any person use upon a " +
      "vehicle, any siren, whistle, or bell, except as permitted for " +
      "authorized emergency vehicles.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Certain Warning Devices Prohibited",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "equip-tire-penny",
    quote:
      "Check the tread with a penny. Stick the penny into the tread \"head\" " +
      "first. If the tread does not come at least to Abraham Lincoln's " +
      "head, the tire is unsafe, and you need to replace it.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Tires",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "equip-warning-triangles",
    quote:
      "Every truck of one-ton capacity or larger, passenger bus and truck " +
      "tractor must be equipped with at least three flares, or three red " +
      "electric lanterns, or three portable red reflectors.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Certain Vehicles to Carry Flares or Other Warning Devices",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "fatigue-18-hours",
    quote:
      "After being awake for 18 hours straight, driving skills are the same " +
      "as someone under the influence of drugs or alcohol.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Additional Resources: Drowsy Driving",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "fatigue-never-sleepy",
    quote:
      "Never drive if you are sleepy. It is better to stop and sleep for a " +
      "few hours than to take a chance you will stay awake.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Fatigue",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "fatigue-two-hours",
    quote:
      "Take breaks. Stop every two hours or so, or when you need to. Walk " +
      "around, get some fresh air, and have some coffee, soda, or juice. " +
      "The few minutes spent on a rest break can save your life.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Fatigue",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "follow-count-method",
    quote:
      "Watch for when the rear of the vehicle ahead passes a sign, pole, or " +
      "any other stationary point. Count the seconds it takes you to reach " +
      "the same spot. 2. Count (one-one-thousand, two-one-thousand, " +
      "three-one-thousand). 3. You are following too closely if you pass " +
      "the mark before you finish counting.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space Ahead",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "follow-four-second",
    quote: "There are situations when you need more space in front of your vehicle.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space Ahead",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "follow-motorcycles",
    quote:
      "When following motorcycles - If the motorcycle should fall, you need " +
      "extra distance to avoid the rider.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space Ahead",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "follow-railroad-buses",
    quote:
      "When approaching railroad crossings - Leave extra room for vehicles " +
      "required to come to a stop at railroad crossings, including transit " +
      "buses, school buses, or vehicles carrying hazardous materials.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space Ahead",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "follow-slippery",
    quote:
      "On slippery roads - As you need more distance to stop your vehicle " +
      "on slippery roads, you must leave more space in front of you. If the " +
      "vehicle ahead suddenly stops, you will need the extra distance to " +
      "stop safely.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space Ahead",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "follow-statute-reasonable",
    quote:
      "The driver of a motor vehicle may not follow another vehicle more " +
      "closely than is reasonable and prudent, having due regard for the " +
      "speed of the vehicles and the traffic upon and the condition of the " +
      "roadway.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-329. Following too closely",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0290/0610-0080-0030-0290.html",
  },
  {
    key: "follow-statute-space",
    quote:
      "must be operated in a manner that allows sufficient space between " +
      "each vehicle or combination of vehicles to enable any other vehicle " +
      "to enter and occupy the space without danger.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-329. Following too closely",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0290/0610-0080-0030-0290.html",
  },
  {
    key: "follow-tailgated",
    quote:
      "If you are being followed too closely and there is a right lane, " +
      "move over to the right. If there is no right lane, wait until the " +
      "way is clear then reduce speed slowly. This will encourage the " +
      "tailgater to drive around you.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space Behind",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "follow-tailgated-never-brake",
    quote:
      "Never slow down quickly to discourage a tailgater, all that does is " +
      "increase your risk of being hit from behind.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space Behind",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "follow-three-second",
    quote:
      "There is an easy way to tell if you are following too closely. It is " +
      "called the \"Three-Second Rule,\" and it works at any speed.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space Ahead",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "funeral-no-cut-in",
    quote:
      "The driver of a vehicle that is not part of a funeral procession " +
      "cannot drive between the vehicles forming the procession while the " +
      "procession is in motion unless the driver is authorized to do so by " +
      "a police officer, or is driving an emergency vehicle.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Funeral Procession",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "funeral-procession-yield",
    quote:
      "State law requires that pedestrians and operators of motor vehicles " +
      "not part of a funeral procession shall yield the right-of-way to a " +
      "motor vehicle that is part of a funeral procession being led by a " +
      "funeral lead vehicle or a funeral escort vehicle.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Funeral Procession",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "funeral-speed",
    quote:
      "A driver in a funeral procession may not drive faster than 55 miles " +
      "per hour on a highway where the speed limit is 55 miles per hour or " +
      "more or may not drive more than 5 miles per hour below the posted " +
      "speed limit on other streets or roads.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Funeral Procession",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "gravel-dust-low-beams",
    quote:
      "During dry periods of the year, gravel roads can become extremely " +
      "dusty. Vision can be reduced. It is recommended that drivers use low " +
      "beam headlights to make the vehicle more visible to others.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Rural Roads",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "gravel-slow-down",
    quote:
      "You do not have as much traction on gravel and dirt roads as you do " +
      "on concrete and asphalt roads. When driving on gravel or dirt, you " +
      "must slow down. It will take you much longer to stop and it is much " +
      "easier to skid when turning.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Rural Roads",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "horn-light-tap",
    quote:
      "If there is no immediate danger, a light tap on the horn should be " +
      "all you need.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Use Your Horn",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "horn-when-not",
    quote:
      "There are several occasions when you should not use your horn. They " +
      "are: To encourage someone to drive faster or get out of the way. To " +
      "apprise other drivers of an error. To greet a friend. Around " +
      "visually impaired pedestrians.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: When NOT to Use Your Horn",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "hydroplane-35-50",
    quote:
      "When the road is wet, most tires have good traction up to about 35 " +
      "mph. However, as you go faster your tires will actually start to " +
      "float on a film of water. This is called hydroplaning. In heavy " +
      "rain, your tires can lose all traction with the road at about 50 " +
      "mph.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Water on the Roadway",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "hydroplane-response",
    quote:
      "Ease your foot off the gas pedal. Keep the steering wheel straight; " +
      "only try to turn if it's an emergency; if you must turn, do it " +
      "slowly or you will cause your vehicle to skid. Do not try to stop or " +
      "turn until your tires are gripping the road again.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Water on the Roadway",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "insurance-carry-proof",
    quote:
      "Under Montana law, motorists stopped for a traffic violation or " +
      "involvement in a motor vehicle collision are required to show " +
      "evidence of insurance to law enforcement, in addition to displaying " +
      "their driver license and vehicle registration. Evidence of insurance " +
      "must be carried in the vehicle at all times.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Motor Vehicle Insurance",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "insurance-mandatory",
    quote:
      "Liability insurance is mandatory (except for motorcycles). This " +
      "insurance must be in effect in the vehicle being operated.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Motor Vehicle Insurance",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "insurance-minimums",
    quote:
      "$25,000 - Bodily Injury or Death of one person in any one accident o " +
      "$50,000 - Bodily Injury or Death of two persons in any one accident " +
      "o $10,000 - Injury to or destruction of property of others in any " +
      "one accident",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Motor Vehicle Insurance",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "insurance-penalty",
    quote:
      "Driving a motor vehicle on Montana roads without a valid liability " +
      "insurance policy is a misdemeanor punishable by a fine of at least " +
      "$250, not to exceed $500, or by imprisonment in the county jail for " +
      "up to 10 days, or both; and 5 points against your driving record.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Motor Vehicle Insurance",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "insurance-statute",
    quote:
      "It is unlawful for a person to operate a motor vehicle on ways of " +
      "this state open to the public as defined in 61-8-102 without a valid " +
      "policy of liability insurance in effect",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 6. RESPONSIBILITY OF VEHICLE USERS AND OWNERS, Part 3. Mandatory Liability Protection - 61-6-301. Required motor vehicle insurance -- family member exclusion",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0060/part_0030/section_0010/0610-0060-0030-0010.html",
  },
  {
    key: "keep-pace",
    quote:
      "Going much slower than other vehicles can be just as risky as " +
      "speeding. It tends to make vehicles bunch up behind you and causes " +
      "the other traffic to pass you.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Keep Pace with Traffic",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "keep-right-except-pass",
    quote:
      "Stay in the right lane, except to pass on a road with three or more " +
      "lanes traveling in the same direction. If there is a lot of traffic " +
      "entering, use the center travel lane.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: General Driving",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lane-filtering-definition",
    quote:
      "lane filtering\" means the act of overtaking and passing another " +
      "vehicle that is stopped or traveling at a speed not in excess of 10 " +
      "miles an hour in the same direction of travel and in the same lane.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-392. Lane filtering for motorcycles -- definition",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0920/0610-0080-0030-0920.html",
  },
  {
    key: "lane-filtering-statute",
    quote:
      "the overtaking motorcycle is not operated at a speed in excess of 20 " +
      "miles an hour when overtaking the stopped or slow-moving vehicle;",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-392. Lane filtering for motorcycles -- definition",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0920/0610-0080-0030-0920.html",
  },
  {
    key: "lic-address-10-days",
    quote:
      "To make sure your driver license is kept current, you must notify " +
      "the Driver Services Bureau of the Department of Justice within 10 " +
      "days of any change of address.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Change of Address",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-class-d",
    quote:
      "A Class D basic driver license allows you to drive any " +
      "non-commercial vehicle under 26,000 pounds gross vehicle weight. In " +
      "order to obtain your license, you need to pass the vision, written, " +
      "and road tests.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Class D Standard Driver License",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-expired-over-year",
    quote:
      "If your license has been expired for more than one year, you must " +
      "reapply as a new driver. You will need to provide acceptable " +
      "documentation to prove identity, residency and authorized presence; " +
      "you will also be required to pass all applicable licensing tests.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Driver License Renewal",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-fee-per-year",
    quote:
      "Any Class D basic license or a learner license listed " +
      "............................................................... " +
      "$5.00 per year",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Fees/Receipts",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-gdl-50-hours",
    quote:
      "Teen drivers must acquire at least 50 hours of supervised driving " +
      "experience, including 10 hours at night for a minimum of six months.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: GDL Step 1",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-gdl-clean-six-months",
    quote:
      "No Alcohol or Drug Use: The teen driver must not receive any traffic " +
      "violations or alcohol/drug offenses in the six- month period before " +
      "advancing to GDL Step 2: First-Year Restricted License.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: GDL Step 1",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-gdl-curfew",
    quote:
      "Teenage drivers with a restricted driver license may not drive " +
      "between 11:00 p.m. and 5:00 a.m. There are limited exceptions to " +
      "this rule, including: emergencies, farm-related activities, travel " +
      "to and from school, church, or work and specific, parent, guardian, " +
      "or responsible adult-authorized purposes",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: GDL Step 2",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-gdl-hold-six-months",
    quote:
      "A teenager under 18 must hold a NCLP for a minimum of six " +
      "consecutive months before applying for a first-year restricted " +
      "license.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: GDL Step 1",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-gdl-passengers",
    quote:
      "One passenger: For the first six months, unless supervised by a " +
      "licensed adult driver, a teenage driver may have only one unrelated " +
      "passenger under the age of 18 in the vehicle.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: GDL Step 2",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-gdl-passengers-second",
    quote:
      "More passengers: For the second six months, unless supervised by a " +
      "licensed adult driver, a teenage driver may have three unrelated " +
      "passengers under the age of 18 in the vehicle.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: GDL Step 2",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-gdl-penalties",
    quote:
      "First Offense: Between 20 to 60 hours of community service. Second " +
      "Offense: Suspension of the teenager's driver license for six months.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: GDL Step 2",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-gdl-permit-ages",
    quote:
      "A teenager may obtain a NCLP from a driver exam station if he/she is " +
      "16 years old OR is 15 years old and successfully completes a " +
      "state-approved traffic education program (online courses are not " +
      "approved).",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: GDL Step 1",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-gdl-step3",
    quote:
      "The first-year restricted license restrictions automatically end on " +
      "the date indicated on the back of the teenager's driver license, or " +
      "when the individual turns 18 years old, whichever occurs first.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: GDL Step 3",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-gdl-supervisor",
    quote:
      "A driver with a NCLP must be supervised by a licensed parent, " +
      "guardian, responsible adult, or a licensed adult driver who is " +
      "authorized by the parent, guardian, or responsible adult.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: GDL Step 1",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-gdl-three-steps",
    quote:
      "The Graduated Driver Licensing (GDL) program is a three-step " +
      "progressive program that allows new drivers under 18 to develop and " +
      "improve their driving skills in the safest environment possible.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Graduated Driver Licensing (GDL) Program",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-min-age",
    quote:
      "For residents under 21 years old, the minimum age for a license is " +
      "16 years (15 years with driver education) and is valid until 21st " +
      "birthday.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Driver Licensing Quick Reference",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-must-carry",
    quote:
      "Drivers must always have a valid Montana driver license in their " +
      "possession and motorcycle endorsements are required to operate a " +
      "motorcycle or motor scooter.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Driver Licensing Quick Reference",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-nclp-14-and-half",
    quote:
      "A NCLP may be issued to any person who is at least 14 ½ years of age " +
      "and who is participating in or successfully completed a traffic " +
      "education course* approved by the Department of Justice and the " +
      "Superintendent of Public Instruction.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: NCLP issued in traffic education",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-nclp-eligibility",
    quote:
      "To be eligible for a NCLP, the applicant must be at least 16 years " +
      "of age (without traffic education) or 15 years of age and " +
      "successfully completed an approved driver education course*.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Non-Commercial Learner Permit (NCLP)",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-nclp-financial-responsibility",
    quote:
      "Signing obligates the parent, guardian, or responsible adult to " +
      "accept financial responsibility for any damage resulting from the " +
      "minor's operation of a motor vehicle.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Non-Commercial Learner Permit (NCLP)",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-nclp-parent-consent",
    quote:
      "If the teenage driver is under the age of 18, he/she must have a " +
      "consent form signed by a parent, guardian or responsible adult " +
      "before testing may begin.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Non-Commercial Learner Permit (NCLP)",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-nclp-six-months",
    quote:
      "The NCLP must be used for six consecutive months by any new driver " +
      "under 18 years old.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Non-Commercial Learner Permit (NCLP)",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-nclp-supervision",
    quote:
      "A NCLP is good for the operation of a Class D vehicle when " +
      "accompanied by a licensed driver education instructor, parent or " +
      "legal guardian, or other adult with parent or guardian permission " +
      "occupying the seat beside the driver.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Non-Commercial Learner Permit (NCLP)",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-nclp-valid-one-year",
    quote:
      "Learner license permits are issued when the primary written test for " +
      "the license type is passed and are valid for one year.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Non-Commercial Learner Permit (NCLP)",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-nclp-what-to-bring",
    quote:
      "To obtain the NCLP, the applicant will be required to present the " +
      "appropriate documents (identification, authorized presence, proof of " +
      "Montana residence), pay the licensing fees, and pass the written " +
      "test and vision test at the driver exam station.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Non-Commercial Learner Permit (NCLP)",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-new-residents-60",
    quote:
      "New residents must apply to convert their valid license within 60 " +
      "consecutive days (30 consecutive days for commercial). Written, " +
      "vision, and a road test are required for your first license.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Driver Licensing Quick Reference",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-online-courses",
    quote:
      "Traffic education courses must be approved by the Office of Public " +
      "Instruction and the Department of Justice. Online or 3rd party " +
      "traffic education courses are not approved.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Types of Montana Licenses, Permits, and Endorsements",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-renewal-window",
    quote:
      "You may renew your license up to six months before the expiration " +
      "date of your license. If your license has expired it is not valid " +
      "for operation of a motor vehicle; however, a renewal may be " +
      "completed within 1 year after the expiration without retesting.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Driver License Renewal",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-restart-after-year",
    quote:
      "If the licensing process is not completed within one year, the " +
      "applicant will need to re-apply and start the licensing process " +
      "over.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Fees/Receipts",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-statute-cooperative",
    quote:
      "The department is authorized to certify as a cooperative driver " +
      "testing program any state-approved high school traffic education " +
      "course offered by or in cooperation with a school district",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 5. DRIVER'S LICENSES, Part 1. Licensing Provisions - 61-5-110. Records check of applicants -- examination of applicants -- cooperative driver testing programs -- reciprocal agreement with foreign country",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0050/part_0010/section_0100/0610-0050-0010-0100.html",
  },
  {
    key: "lic-statute-exam-content",
    quote:
      "The examination must include a test of the applicant's eyesight, a " +
      "knowledge test examining the applicant's ability to read and " +
      "understand highway signs and the applicant's knowledge of the " +
      "traffic laws of this state,",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 5. DRIVER'S LICENSES, Part 1. Licensing Provisions - 61-5-110. Records check of applicants -- examination of applicants -- cooperative driver testing programs -- reciprocal agreement with foreign country",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0050/part_0010/section_0100/0610-0050-0010-0100.html",
  },
  {
    key: "lic-statute-gdl-purpose",
    quote:
      "The purpose of 61-5-131 through 61-5-135 is to create a graduated " +
      "driver's licensing program that will allow persons under 18 years of " +
      "age to progressively develop and improve their driving skills in the " +
      "safest possible environment",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 5. DRIVER'S LICENSES, Part 1. Licensing Provisions - 61-5-131. Purpose",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0050/part_0010/section_0310/0610-0050-0010-0310.html",
  },
  {
    key: "lic-tep",
    quote:
      "A TEP allows a student who is enrolled in a state-approved traffic " +
      "education course* to operate a motor vehicle during traffic " +
      "education training, while under the direct supervision of a traffic " +
      "education instructor. The TEP is only valid for the period in which " +
      "the student is enrolled in the course.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Traffic Education Permit (TEP)",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lic-three-attempts",
    quote:
      "Driver license receipts are valid for one year. For those testing, " +
      "the receipt allows the applicant three attempts within that year to " +
      "successfully pass all required examinations. Receipts are not " +
      "renewable.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 1 - The Driver License: Fees/Receipts",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lights-beam-distances",
    quote:
      "Headlights should be capable of illuminating persons or vehicles for " +
      "a distance of 350 feet on high beam and 100 feet on low beam.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Headlights & Tail Lights",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lights-brake-300",
    quote:
      "Brake lights (stop lamps) indicate a vehicle is slowing or stopping. " +
      "Vehicles manufactured after January 1, 1956, must emit a red or " +
      "amber light visible for 300 feet in normal sunlight.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Brake Lights",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lights-dim-1000-500",
    quote:
      "High beam must be dimmed when meeting other vehicles at 1000 feet " +
      "and when overtaking other vehicles at 500 feet.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Headlights & Tail Lights",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lights-dusk-overcast",
    quote:
      "At dusk or on overcast days, you should turn on your headlights. Dim " +
      "your lights within 1000 feet of meeting a vehicle and within 500 " +
      "feet when following one.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Night Driving",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lights-into-sun",
    quote:
      "When driving away from the rising or setting sun, turn on your " +
      "headlights. Drivers coming toward you may have trouble seeing your " +
      "vehicle. Your headlights will help them see you.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Use Headlights",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lights-never-parking-lights",
    quote:
      "NEVER drive with your parking lights, as oncoming traffic may think " +
      "that you are stopped.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Night Driving",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lights-statute-required",
    quote:
      "Every vehicle upon a highway within this state at any time from " +
      "one-half hour after sunset to one-half hour before sunrise and at " +
      "any other time when due to insufficient light or unfavorable " +
      "atmospheric conditions persons and vehicles on the highway are not " +
      "clearly discernible at a distance of 500 feet ahead",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 9. VEHICLE EQUIPMENT, Part 2. Lighting Equipment - 61-9-201. When lighted lamps are required",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0090/part_0020/section_0010/0610-0090-0020-0010.html",
  },
  {
    key: "lights-turn-signal-300",
    quote:
      "Vehicles manufactured after January 1, 1956, must emit a white or " +
      "amber light to the front and red or amber light to the rear, visible " +
      "for 300 feet in the sunlight.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Turn Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lights-when-required",
    quote:
      "Head lamps are required to be in use at all times from a half hour " +
      "after sunset to a half hour before sunrise and any other times when, " +
      "due to weather or blowing dust, visibility is less than 500 feet.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Headlights & Tail Lights",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "lights-wipers-rule",
    quote: "Remember, if you turn on your wipers, turn on your headlights.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Use Headlights",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "marking-broken-yellow",
    quote:
      "A broken yellow line as the centerline may be crossed. Don't cross " +
      "the centerline unless overtaking or passing.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Road Markings",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "marking-cross-solid-to-turn",
    quote:
      "You may cross a solid yellow line to turn into a public or private " +
      "parking lot, private driveway, or a roadway if it is safe to do so.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Yellow Lane Markings",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "marking-crosswalk-stop-line",
    quote:
      "When required to stop because of a sign or signal, you must stop " +
      "before your vehicle reaches the stop line, or if there is one, a " +
      "crosswalk.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Crosswalks and Stop Lines",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "marking-hov",
    quote:
      "\"HOV\" stands for High Occupancy Vehicles and indicates lanes " +
      "reserved for vehicles with more than one person in them. Signs say " +
      "how many people must be in the vehicle, as well as the days and " +
      "hours to which it applies. For example, \"HOV 3\" means that there " +
      "must be at least three people in the vehicle.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Reserved Lanes",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "marking-line-colors",
    quote:
      "Lines separating lanes of traffic moving in the same direction are " +
      "white. Lines separating traffic moving in opposite directions are " +
      "yellow.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Edge and Lane Lines",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "marking-reversible-lanes",
    quote:
      "A green arrow means you can use the lane beneath it; a red \"X\" means " +
      "that you may not. A flashing yellow \"X\" means the lane is only for " +
      "turning. A steady yellow \"X\" means that the use of the lane is " +
      "changing, and you should move out of it as soon as it is safe to do " +
      "so.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Reversible Lanes",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "marking-shared-center-lane",
    quote:
      "These center lanes are reserved for making left turns (or U-turns " +
      "when they are permitted) but can be used by vehicles traveling in " +
      "both directions.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Shared Center Lane",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "marking-sharrows",
    quote:
      "Shared Lane Markings (also known as sharrows) are pavement markings " +
      "to help bicyclists position themselves in the right location and in " +
      "the right direction in a lane that is shared with motor vehicles.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Bicyclists & Motorists",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "marking-solid-yellow",
    quote:
      "A solid yellow line on your side means that you cannot pass over the " +
      "centerline. A double yellow line may not be crossed by traffic " +
      "moving in either direction. Crossing a solid centerline is permitted " +
      "only as part of a left turn maneuver.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Road Markings",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "marking-unmarked-crosswalks",
    quote:
      "Not all crosswalks are marked. Be alert for pedestrians when " +
      "crossing intersections that do not have defined crosswalks.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Crosswalks and Stop Lines",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "marking-white-lines",
    quote:
      "A dashed white line between lanes of traffic means that you may " +
      "cross it to change lanes if it is safe to do so. A solid white line " +
      "between lanes of traffic means that you should stay in your lane " +
      "unless a special situation requires you to change lanes.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: White Lane Markings",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "marking-yellow-mixed",
    quote:
      "Where there is both a solid and a dashed yellow line between " +
      "opposing lanes of traffic, you may not pass if the solid yellow line " +
      "is on your side. If the dashed line is on your side, you may pass if " +
      "it is safe to do so.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Yellow Lane Markings",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "merge-four-second-gap",
    quote:
      "You need a gap of about four seconds anytime you want to merge with " +
      "other traffic. If you move into the middle of a four-second gap, " +
      "both you and the vehicle that is now behind you have a two-second " +
      "following distance.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space to Merge",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "merge-four-second-when",
    quote:
      "You need a four-second gap whenever you change lanes, enter a " +
      "roadway, or your lane merges with another travel lane.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space to Merge",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "merge-move-left-for-entering",
    quote:
      "When traveling on a controlled-access highway and you observe " +
      "another driver entering, you should, whenever possible, move to your " +
      "left so that they may enter safely.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Entering Into Traffic",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "merge-one-lane-at-a-time",
    quote:
      "If you want to cross several lanes, take them one at a time. Like " +
      "going up or down stairs one step at a time, it is safest and easiest " +
      "to merge one lane at a time.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space to Merge",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "merge-use-the-ramp",
    quote:
      "Use the ramp to reach the speed of other vehicles before you pull " +
      "onto the road. Do not drive to the end of the ramp and stop. This " +
      "will not leave you enough room to get up to the speed of traffic.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Entering Into Traffic",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "move-over-statute-highway",
    quote:
      "30 miles an hour below the posted speed limit on a state highway or " +
      "county road if the operator of a moving vehicle is able to move " +
      "lanes, or to one-half the posted speed limit if the operator of a " +
      "moving vehicle is not able to move lanes; and",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-388. Approaching stationary emergency vehicle or stationary highway worker vehicle",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0880/0610-0080-0030-0880.html",
  },
  {
    key: "move-over-statute-interstate",
    quote:
      "20 miles an hour below the posted speed limit on the interstate if " +
      "the operator of a moving vehicle is able to move lanes, or to " +
      "one-half the posted speed limit if the operator of a moving vehicle " +
      "is not able to move lanes;",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-388. Approaching stationary emergency vehicle or stationary highway worker vehicle",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0880/0610-0080-0030-0880.html",
  },
  {
    key: "move-over-statute-lane",
    quote:
      "if on a multi-lane highway, move to a lane that is not adjacent to " +
      "the lane in which the stationary law enforcement vehicle, authorized " +
      "emergency vehicle, or highway worker vehicle is located;",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-388. Approaching stationary emergency vehicle or stationary highway worker vehicle",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0880/0610-0080-0030-0880.html",
  },
  {
    key: "move-over-statute-other-road",
    quote: "one-half the posted speed limit on any other road; and",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-388. Approaching stationary emergency vehicle or stationary highway worker vehicle",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0880/0610-0080-0030-0880.html",
  },
  {
    key: "mvd-adult-three-tests",
    quote:
      "For people 18 and over, you'll have to pass written, vision, and " +
      "road tests as well as provide the required documents.",
    source: "MT Motor Vehicle Division (Montana Department of Justice), mvdmt.gov",
    section: "Getting a Montana Driver License - New Drivers 18+",
    url: "https://mvdmt.gov/new-driver-license/adult-driver-license/",
  },
  {
    key: "mvd-gdl-three-step",
    quote:
      "Montana's graduated driver licensing law Section 61-5-131, MCA " +
      "creates a three-step program that allows new drivers under the age " +
      "of 18 years to safely develop and improve their driving skills.",
    source: "MT Motor Vehicle Division (Montana Department of Justice), mvdmt.gov",
    section: "Getting a Montana Driver License - Drivers Under 18",
    url: "https://mvdmt.gov/new-driver-license/drivers-under-18/",
  },
  {
    key: "mvd-nclp-6-months-1-day",
    quote: "Hold the NCLP for at least 6 months + 1 day",
    source: "MT Motor Vehicle Division (Montana Department of Justice), mvdmt.gov",
    section: "Getting a Montana Driver License - Drivers Under 18: NCLP Conditions",
    url: "https://mvdmt.gov/new-driver-license/drivers-under-18/",
  },
  {
    key: "mvd-nclp-conditions",
    quote:
      "A temporary NCLP is valid for one year. - To advance from the NCLP " +
      "to a First-Year Restricted License the teen must: - Hold the NCLP " +
      "for at least 6 months + 1 day - Complete 50 hours (including 10 " +
      "hours at night) of supervised driving with an adult",
    source: "MT Motor Vehicle Division (Montana Department of Justice), mvdmt.gov",
    section: "Getting a Montana Driver License - Drivers Under 18: NCLP Conditions",
    url: "https://mvdmt.gov/new-driver-license/drivers-under-18/",
  },
  {
    key: "mvd-nclp-restrictions",
    quote:
      "A driver with a NCLP must be supervised by a licensed parent, " +
      "guardian, or a responsible adult. - Everyone in the vehicle must " +
      "wear a seatbelt.",
    source: "MT Motor Vehicle Division (Montana Department of Justice), mvdmt.gov",
    section: "Getting a Montana Driver License - Drivers Under 18: Restrictions for an NCLP",
    url: "https://mvdmt.gov/new-driver-license/drivers-under-18/",
  },
  {
    key: "mvd-permit-15-plus",
    quote:
      "Learner Permit: Students that are 15 years and older and have not " +
      "attended a Driver Training Class. The permit is issued at Driver " +
      "Exam Station.",
    source: "MT Motor Vehicle Division (Montana Department of Justice), mvdmt.gov",
    section: "Getting a Montana Driver License - Drivers Under 18: Step 1",
    url: "https://mvdmt.gov/new-driver-license/drivers-under-18/",
  },
  {
    key: "mvd-permit-two-types",
    quote:
      "There are two types of Learner Permits in Montana. Driver Ed " +
      "Learning Permit: Students who are 14.5 years old and are in a " +
      "state-approved traffic education program and have met attendance and " +
      "testing requirements are issued a permit from the instructor.",
    source: "MT Motor Vehicle Division (Montana Department of Justice), mvdmt.gov",
    section: "Getting a Montana Driver License - Drivers Under 18: Step 1",
    url: "https://mvdmt.gov/new-driver-license/drivers-under-18/",
  },
  {
    key: "mvd-road-test-vehicle",
    quote:
      "A vehicle without mechanical issues - no cracks in the windshield, " +
      "functional taillights, brake lights, and turn signals.",
    source: "MT Motor Vehicle Division (Montana Department of Justice), mvdmt.gov",
    section: "Getting a Montana Driver License - New Drivers 18+: Driving Test",
    url: "https://mvdmt.gov/new-driver-license/adult-driver-license/",
  },
  {
    key: "mvd-study-the-manual",
    quote:
      "Study for the written driver's test using the Montana Driver's " +
      "Manual . - Schedule an appointment at any MVD exam station to take " +
      "the written exam. When making your appointment, be sure to indicate " +
      "that you are making an appointment for a regular written exam.",
    source: "MT Motor Vehicle Division (Montana Department of Justice), mvdmt.gov",
    section: "Getting a Montana Driver License - Drivers Under 18: How to Apply",
    url: "https://mvdmt.gov/new-driver-license/drivers-under-18/",
  },
  {
    key: "mvd-written-before-road",
    quote:
      "You must pass the written test before being eligible to take your " +
      "driving test.",
    source: "MT Motor Vehicle Division (Montana Department of Justice), mvdmt.gov",
    section: "Getting a Montana Driver License - New Drivers 18+: Written Test",
    url: "https://mvdmt.gov/new-driver-license/adult-driver-license/",
  },
  {
    key: "never-drive-shoulder",
    quote: "Unless told to do so, never drive on the shoulder of the road.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: General Driving",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "obey-first-rule",
    quote:
      "The first rule of the road is OBEY: OBEY the orders of highway " +
      "patrol, police officers, and flaggers. OBEY all traffic control " +
      "devices. OBEY traffic laws.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Laws and Regulations Keep You Safe",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "open-container-fine",
    quote:
      "A person convicted of the offense of unlawful possession of an open " +
      "alcoholic beverage container in a motor vehicle shall be fined an " +
      "amount not to exceed $100.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 10. Driving Under Influence of Alcohol or Drugs - 61-8-1026. Unlawful possession of open alcoholic beverage container in motor vehicle on highway",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0100/section_0260/0610-0080-0100-0260.html",
  },
  {
    key: "open-container-manual",
    quote:
      "Montana law also prohibits the possession of an open alcoholic " +
      "beverage container by a person in a motor vehicle. Open alcoholic " +
      "beverage containers, including bottles, cans, jars or other " +
      "receptacles containing any amount of an alcoholic beverage must be " +
      "kept:",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Open Containers",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "open-container-statute",
    quote:
      "a person commits the offense of unlawful possession of an open " +
      "alcoholic beverage container in or on a motor vehicle if the person " +
      "knowingly possesses an open alcoholic beverage container within the " +
      "passenger area of a motor vehicle on a highway.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 10. Driving Under Influence of Alcohol or Drugs - 61-8-1026. Unlawful possession of open alcoholic beverage container in motor vehicle on highway",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0100/section_0260/0610-0080-0100-0260.html",
  },
  {
    key: "open-container-where",
    quote:
      "In a locked glove compartment or storage compartment; In a trunk, " +
      "luggage compartment, truck bed or cargo compartment;",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Open Containers",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "park-brake-and-gear",
    quote:
      "Always set your parking brake when you park. Leave the vehicle in " +
      "gear if it has a manual transmission, or in park if it has an " +
      "automatic transmission.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: General Guidelines",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "park-check-before-door",
    quote:
      "Check traffic before you open the door. Get out of the vehicle on " +
      "the curbside if you can. If you must use the street side, check for " +
      "vehicles, bicyclists, and pedestrians before you get out. Shut the " +
      "door as soon as you can after getting out.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: General Guidelines",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "park-curb-18-inches",
    quote:
      "Your vehicle must be within 18 inches (1.5 feet) of the curb or " +
      "shoulder.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: General Guidelines",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "park-curb-colors",
    quote:
      "Some parking restrictions are indicated by colored curb markings: " +
      "White = stopping only to pick up or unload passengers Yellow = " +
      "stopping only long enough to load or unload and you must stay with " +
      "the car Red = do not stop, stand, or park",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: No Parking Zones",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "park-fire-station",
    quote:
      "Within 20 feet of a fire station driveway on the same side of the " +
      "street, or within 75 feet of a driveway on the other side of the " +
      "street",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: No Parking Zones",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "park-hill-toward-side",
    quote:
      "When you park on a hill, turn your wheels sharply toward the side of " +
      "the road. This way, if your car starts to roll downhill, it will " +
      "roll away from traffic.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Parking on a Hill",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "park-hill-uphill",
    quote:
      "When you park facing downhill, turn your wheels toward the curb " +
      "(Figure A). When you park facing uphill, turn your wheels away from " +
      "the curb (Figure B). o If there is no curb, turn your wheels away " +
      "from the street",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Parking on a Hill",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "park-hydrant-15",
    quote: "Within 15 feet of a fire hydrant",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: No Parking Zones",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "park-lights-at-night",
    quote:
      "Vehicles parked on a roadway or shoulder during hours of darkness " +
      "must have front and rear lights visible for 500 feet. If headlights " +
      "are on, they must be dimmed.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Parallel Parking",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "park-no-list",
    quote:
      "Do not park: In an intersection Within 20 feet of a crosswalk or " +
      "sidewalk at an intersection In a construction area if your vehicle " +
      "will block traffic Within 30 feet of a traffic signal, stop sign, or " +
      "yield sign Within 15 feet of a fire hydrant Within 50 feet of a " +
      "railroad crossing",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: No Parking Zones",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "park-parallel-steps",
    quote:
      "Position your vehicle parallel with the vehicle parked in front of " +
      "the empty space and maintain at least two feet from this vehicle. " +
      "Align your rear bumper with the rear bumper of the vehicle parked in " +
      "front of the empty space",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Parallel Parking",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "park-signal-leaving",
    quote:
      "Use your turn signal when entering traffic from a parking space. Be " +
      "sure to look in both directions and doublecheck for vehicles, " +
      "bicycles, and pedestrians when backing out of a parking space.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Parallel Parking",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "park-statute-30-feet",
    quote:
      "within 30 feet upon the approach to any flashing beacon, stop sign, " +
      "or official traffic control device located at the side of a roadway;",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-354. Stopping, standing, or parking prohibited in specified places -- exceptions -- definition",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0540/0610-0080-0030-0540.html",
  },
  {
    key: "park-statute-bridge",
    quote:
      "upon any bridge or other elevated structure upon a highway or within " +
      "a highway tunnel;",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-354. Stopping, standing, or parking prohibited in specified places -- exceptions -- definition",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0540/0610-0080-0030-0540.html",
  },
  {
    key: "park-statute-double-park",
    quote:
      "on the roadway side of any vehicle stopped or parked at the edge or " +
      "curb of a street;",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-354. Stopping, standing, or parking prohibited in specified places -- exceptions -- definition",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0540/0610-0080-0030-0540.html",
  },
  {
    key: "park-statute-list",
    quote:
      "on a sidewalk; (b) in front of a public or private driveway; (c) " +
      "within an intersection; (d) within 15 feet of a fire hydrant; (e) on " +
      "a crosswalk; (f) within 20 feet of a crosswalk at an intersection;",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-354. Stopping, standing, or parking prohibited in specified places -- exceptions -- definition",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0540/0610-0080-0030-0540.html",
  },
  {
    key: "park-visible-and-clear",
    quote:
      "Whenever you park your car, be sure it is in a place that is (1) far " +
      "enough from any travel lane to avoid interfering with traffic and " +
      "(2) visible to cars approaching from either direction.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: General Guidelines",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "passing-1600-feet",
    quote:
      "At 55 mph you will travel over 800 feet in 10 seconds. So will an " +
      "oncoming vehicle. That means you need over 1600 feet or about " +
      "one-third of a mile to pass safely.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space for Passing",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "passing-hill-curve-third-mile",
    quote:
      "Therefore, you should treat a curve or a hill as you do an oncoming " +
      "vehicle. This means you should not start to pass if you are within " +
      "one-third of a mile of a hill or a curve.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space for Passing",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "passing-hills-curves",
    quote:
      "Hills and curves - You must be able to see at least one-third of a " +
      "mile or about 10 seconds ahead. Anytime your view is blocked by a " +
      "curve or a hill, you should assume that there is an oncoming vehicle " +
      "just out of your sight.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space for Passing",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "passing-intersections-danger",
    quote:
      "Intersections - It is dangerous to pass where a vehicle is likely to " +
      "enter or cross the road. Such places include intersections, railroad " +
      "crossings, and shopping center entrances.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space for Passing",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "passing-left-lane-multilane",
    quote:
      "On multi-lane roads, the left-most lane is intended to be used to " +
      "pass slower vehicles.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Passing",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "passing-left-of-center",
    quote:
      "On two-lane roads, you can drive to the left of the centerline of a " +
      "highway when overtaking and passing another vehicle.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Passing",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "passing-never-on-shoulder",
    quote:
      "You cannot pass on the right by driving off the pavement or " +
      "main-traveled portion of the road, which means never passing on the " +
      "shoulder (whether it is paved or not). Other drivers will never " +
      "expect you to be there and may pull off the road without looking.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Passing",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "passing-on-right-legal",
    quote:
      "Passing on the right is legal only when the vehicle you're passing " +
      "is making or about to make a left turn, or on a road with " +
      "unobstructed pavement wide enough for two or more lanes of vehicles " +
      "legally going in the same direction as the vehicle you're passing.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Passing",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "passing-return-headlights",
    quote:
      "When you can see both headlights of the vehicle you just passed in " +
      "your rearview mirror, it is safe to return to the driving lane.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space for Passing",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "passing-ten-seconds",
    quote:
      "As a general rule, only pass one vehicle at a time. At a speed of 55 " +
      "mph, you need about 10 seconds to pass. That means you need a 10 " +
      "second gap in oncoming traffic and sight distance to pass.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space for Passing",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "ped-crosswalk-yield",
    quote:
      "Drivers must yield the right-of-way to pedestrians crossing in a " +
      "crosswalk, but no pedestrian can leave a curb and walk into the path " +
      "of a vehicle.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Pedestrians",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "ped-drivers-responsibility",
    quote:
      "These laws are well and good, but it is still the driver's basic " +
      "responsibility to be alert for pedestrians and to yield the " +
      "right-of-way, even if the pedestrian is wrong.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Pedestrians",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "ped-no-pass-stopped-vehicle",
    quote:
      "When a vehicle is stopped at a marked crosswalk or at an unmarked " +
      "crosswalk at an intersection to let a pedestrian cross the street, " +
      "other drivers approaching from the rear may not pass the stopped " +
      "vehicle.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Crosswalks",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "ped-right-turn-far-half",
    quote:
      "When a vehicle is stopped at a marked crosswalk or at an unmarked " +
      "crosswalk at an intersection, the driver can make a right turn if " +
      "the pedestrian is in the opposite half of the roadway and is not in " +
      "danger.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Crosswalks",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "ped-sidewalk-required",
    quote:
      "Where sidewalks are provided, it is against the law for pedestrians " +
      "to walk on the roadway.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Pedestrians",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "ped-signal-flashing",
    quote:
      "Pedestrians who are in the crosswalk when the DON'T WALK signal " +
      "begins flashing should continue crossing the street.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Pedestrian Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "ped-signal-symbols",
    quote:
      "An upheld orange hand means DON'T WALK. A white pedestrian figure " +
      "means WALK.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Pedestrian Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "ped-signals",
    quote:
      "If a DON'T WALK signal is showing or flashing, pedestrians must wait " +
      "until a WALK signal appears before starting to cross the " +
      "intersection.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Pedestrian Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "ped-statute-actuated-device",
    quote:
      "When the operator of a vehicle is approaching a flashing " +
      "pedestrian-actuated device at a crosswalk and a pedestrian is " +
      "present, the operator shall yield the right-of-way, slowing down or " +
      "stopping if necessary, and remain stopped until the pedestrian has " +
      "crossed the roadway.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 5. Pedestrian Traffic - 61-8-502. Pedestrians' right-of-way in crosswalk -- school children -- pedestrian-actuated devices",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0050/section_0020/0610-0080-0050-0020.html",
  },
  {
    key: "ped-statute-blind",
    quote:
      "the operator of a vehicle shall yield the right-of-way to a blind " +
      "pedestrian who is carrying a visible white cane or who is " +
      "accompanied by a guide dog.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 5. Pedestrian Traffic - 61-8-516. Operator of vehicle to yield to blind pedestrian",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0050/section_0160/0610-0080-0050-0160.html",
  },
  {
    key: "ped-statute-crosswalk",
    quote:
      "when traffic control signals are not in place or not in operation, " +
      "the operator of a vehicle shall yield the right-of-way, slowing down " +
      "or stopping if necessary, to a pedestrian crossing the roadway " +
      "within a marked crosswalk or within an unmarked crosswalk at an " +
      "intersection",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 5. Pedestrian Traffic - 61-8-502. Pedestrians' right-of-way in crosswalk -- school children -- pedestrian-actuated devices",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0050/section_0020/0610-0080-0050-0020.html",
  },
  {
    key: "ped-statute-no-sudden-step",
    quote:
      "but a pedestrian may not suddenly leave a curb or other place of " +
      "safety and walk or run into the path of a vehicle that is so close " +
      "that it is impossible for the operator to yield.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 5. Pedestrian Traffic - 61-8-502. Pedestrians' right-of-way in crosswalk -- school children -- pedestrian-actuated devices",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0050/section_0020/0610-0080-0050-0020.html",
  },
  {
    key: "ped-statute-outside-crosswalk",
    quote:
      "Every pedestrian crossing a roadway at any point other than within a " +
      "marked crosswalk or within an unmarked crosswalk at an intersection " +
      "shall yield the right-of-way to all vehicles upon the roadway.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 5. Pedestrian Traffic - 61-8-503. Crossing at other than crosswalks",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0050/section_0030/0610-0080-0050-0030.html",
  },
  {
    key: "ped-walk-facing-traffic",
    quote:
      "When people are walking on the roadway, they must walk on the left " +
      "(facing oncoming traffic).",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Pedestrians",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "ped-white-cane-absolute",
    quote:
      "Pedestrians using a guide dog or carrying a white cane have absolute " +
      "right-of-way. Do not use your horn because it could confuse or " +
      "frighten the blind pedestrian.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Pedestrians",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "pull-from-curb",
    quote:
      "Signal, look over your left shoulder, and pull out when it is safe " +
      "to do so.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: When Pulling Away From the Curb",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "railroad-crossbuck",
    quote:
      "Railroad cross buck signs will be found at all public crossings. If " +
      "there is more than one track, a sign below the cross buck indicates " +
      "the number of tracks.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Railroad Cross Buck Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "railroad-expect-train",
    quote:
      "This is especially true at intersections and railroad crossings " +
      "(where you should always expect a train).",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Look to the Sides",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "railroad-flashing-lights",
    quote:
      "Always stop when the lights begin to flash. This means that a train " +
      "is coming. If there is more than one track, make sure all tracks are " +
      "clear before starting to cross.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Flashing Light Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "railroad-gates",
    quote:
      "Stop when the lights begin to flash before the gates lower across " +
      "your road lane. Remain stopped until the gates are raised, and the " +
      "lights stop flashing.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Gates",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "railroad-never-beat",
    quote:
      "Never try to beat a train across the tracks. Stop if there is any " +
      "question about safety. Never start to cross until there is room for " +
      "your vehicle on the far side.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Railroad Crossing Warning Signs/Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "railroad-second-train",
    quote:
      "At crossings with more than one track, wait until the passing train " +
      "is well down the track before starting to cross. Another train could " +
      "be coming - one that might have been hidden by the one that just " +
      "passed.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Railroad Crossings",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "railroad-stop-15-feet",
    quote:
      "You are required to STOP at railroad crossings as close as " +
      "practicable but not less than 15 feet from the nearest rail when " +
      "warning signals, crossing gates, stop signs, or human watchmen " +
      "indicate the approach of a train, or when the train is within 1500 " +
      "feet of the crossing or if clearly visible and an obvious hazard.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Railroad Crossing Warning Signs/Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "red-always-means",
    quote:
      "These signs help increase safety by controlling the flow of traffic " +
      "through intersections. Remember: red always means stop, yield, do " +
      "not enter, or wrong way.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Intersection Traffic Control Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "regulatory-signs-look",
    quote:
      "Regulatory signs are rectangular with black words or symbols on a " +
      "white background. You must obey the rules on all regulatory signs.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Regulatory Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "roundabout-15-mph",
    quote: "Slow Down - Driving speeds in roundabouts are 15 mph or less.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Roundabouts in Montana",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "roundabout-emergency",
    quote:
      "Do not pull over or stop in the roundabout when approached by an " +
      "emergency vehicle. Continue and exit as normal, then pull to the " +
      "right where there is room for the emergency vehicle to pass.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Roundabouts in Montana",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "roundabout-no-passing",
    quote:
      "Stay Right - Enter the roundabout and stay to the right of the " +
      "center island. Do not stop if the way is clear. Never pass or " +
      "overtake another vehicle after entering a single-lane roundabout.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Roundabouts in Montana",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "roundabout-statute-yield",
    quote:
      "A vehicle approaching a rotary traffic island or a roundabout must " +
      "yield the right-of-way to all vehicles passing around the island or " +
      "roundabout.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-318. Rotary traffic islands and roundabouts -- definitions",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0180/0610-0080-0030-0180.html",
  },
  {
    key: "roundabout-truck-apron",
    quote:
      "The center island of the single lane roundabout is built with a " +
      "gradually sloped and flat curb, called a truck apron. The rear " +
      "wheels of a large vehicle will cross over the truck apron. The " +
      "driver of the smaller vehicle should drop back behind the larger " +
      "truck as it completes its travel through the roundabout.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Roundabouts in Montana",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "roundabout-yield-left",
    quote:
      "Look to the Left -Yield to vehicles that are already in the " +
      "roundabout; they have the right-of-way. Traffic flows in a " +
      "counterclockwise direction.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Roundabouts in Montana",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "row-block-intersection",
    quote:
      "Drivers may not enter an intersection unless they can get through it " +
      "without having to stop. You should wait until traffic ahead clears " +
      "so that you are not blocking the intersection.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Intersections",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "row-driveway-yield",
    quote:
      "Drivers entering a road from a driveway, alley, or roadside must " +
      "stop and yield to vehicles already on the main roadway.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Intersections",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "row-four-way-first",
    quote:
      "At a four-way stop, the driver reaching the intersection first gets " +
      "to go first (after coming to a complete stop).",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Intersections",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "row-law-does-not-give",
    quote:
      "You must do everything you can to prevent striking a pedestrian or " +
      "another vehicle, regardless of the circumstances.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Right-of-Way",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "row-left-turn-yield",
    quote: "Drivers turning left must yield to oncoming cars going straight ahead.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Intersections",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "row-overtaking-yield",
    quote:
      "Drivers overtaking a vehicle traveling in the same direction must " +
      "yield to that vehicle, even if the vehicle is slowing or coming to a " +
      "stop.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Overtaking Vehicles",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "row-rules-exist",
    quote:
      "Where vehicles or pedestrians are likely to meet one another, and " +
      "there are no signs or signals to regulate traffic, there are rules " +
      "that say who must yield the right-of-way. These rules tell drivers " +
      "who goes first and who must wait in different traffic situations.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Right-of-Way",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "row-sidewalk-yield",
    quote:
      "Drivers crossing a sidewalk, entering or exiting a driveway, alley, " +
      "or parking lot must yield to pedestrians. It is illegal to drive on " +
      "a sidewalk, except to cross it.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Intersections",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "row-statute-private-road",
    quote:
      "The operator of a vehicle about to enter or cross a roadway from a " +
      "private road, driveway, alley, or public approach ramp shall yield " +
      "the right-of-way to all vehicles approaching on the roadway.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-343. Vehicle entering roadway from private road, driveway, alley, or public approach ramp",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0430/0610-0080-0030-0430.html",
  },
  {
    key: "row-statute-stop-sign-where",
    quote:
      "An operator of a vehicle approaching a stop sign shall stop before " +
      "entering the crosswalk on the near side of the intersection or, in " +
      "the event there is no crosswalk, the operator shall stop at a " +
      "clearly marked stop line.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-344. Vehicles to stop at stop signs",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0440/0610-0080-0030-0440.html",
  },
  {
    key: "row-statute-yield-collision",
    quote:
      "If an operator of a vehicle, after having driven past a \"Yield\" " +
      "sign, is involved in a collision with another vehicle at an " +
      "intersection or junction of roadways or with a pedestrian in an " +
      "adjacent crosswalk, the collision is considered prima facie evidence " +
      "of the operator's failure to yield right-of-way.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-342. Vehicles approaching \"Yield\" sign",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0420/0610-0080-0030-0420.html",
  },
  {
    key: "row-statute-yield-right",
    quote:
      "when two or more vehicles enter or approach an intersection from " +
      "different highways, the driver of the vehicle on the left shall " +
      "yield the right-of-way to all vehicles approaching from the right " +
      "that are close enough to constitute an immediate hazard.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-339. Vehicle approaching or entering intersection",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0390/0610-0080-0030-0390.html",
  },
  {
    key: "row-statute-yield-sign",
    quote:
      "The operator shall slow to a speed that is reasonable for existing " +
      "conditions and, if required for safety, shall stop before entering " +
      "the intersection.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-342. Vehicles approaching \"Yield\" sign",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0420/0610-0080-0030-0420.html",
  },
  {
    key: "row-uncontrolled-right",
    quote:
      "At an intersection where there is no stop sign or traffic signal, " +
      "drivers should yield to vehicles coming from the right. However, a " +
      "driver should always be prepared to yield to avoid a crash. Do this " +
      "by taking your foot off the accelerator, cover the brake, and look " +
      "left, right, and left again.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Intersections",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "scan-blind-spots",
    quote:
      "Look over your shoulder in the direction you plan to move. Be sure " +
      "no one is near the rear corners of your vehicle. These areas are " +
      "called \"blind spots\" because you cannot see them through your " +
      "mirrors. You have to turn your head and look.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: When Changing Lanes",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "scan-check-far-lane",
    quote:
      "Check the far lane. Be sure to check the far lane, if there is one, " +
      "as someone in that lane may be planning to move into the same lane " +
      "you want to enter.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: When Changing Lanes",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "scan-edge-forward",
    quote:
      "If you were stopped and your view of a cross street is blocked, edge " +
      "forward slowly until you can see.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Intersections",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "scan-lane-change-steps",
    quote:
      "Changing lanes includes: changing from one lane to another, merging " +
      "onto a roadway from an entrance ramp, and entering the roadway from " +
      "the curb or shoulder.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: When Changing Lanes",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "scan-look-left-right",
    quote:
      "At an intersection, look left and right even if other traffic has a " +
      "red light or a stop sign. Always be watchful for red-light runners. " +
      "This is especially important just after your light has turned green. " +
      "This is when drivers on the cross street are most likely to run a " +
      "red light.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Intersections",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "scan-ten-seconds",
    quote:
      "In order to avoid last-minute braking or the need to turn, you " +
      "should look down the road at least 10 seconds ahead of your vehicle.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Look Ahead",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "scan-ten-seconds-distance",
    quote:
      "In the city, 10 seconds is about one block. When you drive in city " +
      "traffic, try to look at least one block ahead. On the highway, 10 " +
      "seconds is about four city blocks or a quarter of a mile.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Look Ahead",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "school-crossing-guard",
    quote:
      "Drivers can't drive through a column of school children crossing a " +
      "roadway, or past a school crossing guard while the crossing guard is " +
      "directing the movement of children across a roadway and while the " +
      "crossing guard is holding an official sign in the stop position.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: School Crossings",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "school-crossings-yield",
    quote:
      "Drivers must always yield to pedestrians in school crosswalks. There " +
      "may or may not be school crossing guards to assist with safe " +
      "pedestrian crossing. Drivers should stop before crosswalks so other " +
      "drivers can also see pedestrians.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: School Crossings",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "school-zone-15",
    quote:
      "School zone speed limits may be as low as 15 mph (Section 61-8-310, " +
      "MCA) Watch out for children near schools and parks day and night.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: School Zone Safety Standards",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "school-zone-definition",
    quote:
      "School zone means an area near a school beginning at the school's " +
      "front door, encompassing the campus and school property, and " +
      "including the streets directly adjacent to the school property and " +
      "for as many blocks surrounding the school as determined by the local " +
      "authority establishing a special speed limit.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: School Zone",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "school-zone-fines-doubled",
    quote:
      "Montana law enforces a strict policy on speed violations in or near " +
      "school zones. Fines are doubled in all school zones throughout " +
      "Montana.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Fines Doubled in School Zones",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "school-zone-limit-statute",
    quote:
      "decreases the limit in a school zone or in an area near a senior " +
      "citizen center, as defined in 23-5-112 , or a designated crosswalk " +
      "that is close to a school or a senior citizen center to not less " +
      "than 15 miles an hour.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-310. When local authorities may and shall alter limits or establish or alter area of school zone",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0100/0610-0080-0030-0100.html",
  },
  {
    key: "shape-and-color",
    quote:
      "In addition to color, the shape of a traffic sign also helps you " +
      "identify the sign and what you must do to obey it. In poor " +
      "visibility conditions, such as heavy fog, you may be able to make " +
      "out only the shape of a sign.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Know Signs by Their Shape and Color",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sight-distance-count",
    quote:
      "If you reach the object before you finish saying " +
      "\"four-one-thousand,\" you need to slow down. You are going too fast " +
      "for your sight distance.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Sight-Distance Rule",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sight-distance-four-second",
    quote:
      "Drive at a speed where you can always safely stop. To tell if you " +
      "are driving too fast for conditions, use the \"Four Second Sight " +
      "Distance Rule.\"",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Sight-Distance Rule",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-cattle-crossing",
    quote:
      "Cattle Crossing A highway quite often splits a farm. This sign " +
      "indicates a point where the stock is driven from one area to " +
      "another.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-classes",
    quote:
      "The types of traffic signs are classified according to function. " +
      "They are regulatory, warning, and information guide signs.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Signs, Signals, and Road Markings",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-crossroad",
    quote:
      "Crossroad A four-way intersection is ahead. Be alert for cross " +
      "traffic entering the roadway.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-curve-safe-speed",
    quote:
      "Right Curve (with safe speed indication) There is a right curve " +
      "ahead. A suggested safe speed for the curve may appear just below " +
      "the sign.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-deer-crossing",
    quote:
      "Deer Crossing Deer often cross the highway in this area. Be alert. " +
      "Slow down if you see a deer.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-divided-highway-begins",
    quote:
      "Divided Highway Begins A median or divider ahead splits the highway " +
      "into two separate roadways, and each roadway is one-way. Keep to the " +
      "right.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-divided-highway-ends",
    quote:
      "Divided Highway Ends The highway ahead becomes a single roadway with " +
      "traffic going in both directions.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-do-not-pass",
    quote:
      "DO NOT PASS You must not pass any vehicles going in the same " +
      "direction as you are while you are in this area.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Regulatory Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-hill",
    quote:
      "Hill A steep grade is ahead. Check your brakes. You may need to " +
      "shift into a lower gear.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-keep-right",
    quote: "KEEP RIGHT Traffic is required to keep to the right of obstruction.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Regulatory Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-loose-gravel",
    quote: "Loose Gravel The highway ahead is covered with loose gravel.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-low-clearance",
    quote:
      "Low Clearance The overpass has a low clearance. Do not proceed if " +
      "your vehicle is too tall to pass under.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-narrow-bridge-room",
    quote:
      "Narrow Bridge The bridge ahead is narrower than the road you are on. " +
      "However, there is room to meet and pass.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-narrow-bridge-truck",
    quote:
      "Narrow Bridge The bridge ahead may be too narrow to meet or pass a " +
      "truck. You must be careful.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-no-u-turn",
    quote:
      "NO U TURN You cannot turn about to go in the opposite direction at " +
      "this intersection.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Regulatory Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-obey-or-arrest",
    quote:
      "Signs, signals, and road markings are placed on our highways to " +
      "inform, warn, and regulate drivers. They must be obeyed; violators " +
      "will be arrested.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Signs, Signals, and Road Markings",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-one-lane-bridge",
    quote:
      "One Lane Bridge There is not room on the bridge to meet or pass " +
      "another car or truck.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-pass-with-care",
    quote:
      "PASS WITH CARE When you have passed this sign, you are again allowed " +
      "to pass other vehicles with care.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Regulatory Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-pedestrian-crossing",
    quote:
      "Pedestrian Crossing Be alert for people crossing your path. Slow " +
      "down and be prepared to stop.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-range-cattle",
    quote:
      "Range Cattle Where there are no fences, cattle and horses may be on " +
      "the highway.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-red-circle-slash",
    quote:
      "When you see a sign with a red circle and a red slash mark across a " +
      "black arrow or symbol, it means don't do whatever is shown.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Intersection Traffic Control Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-school-ahead",
    quote:
      "School Ahead There is a school ahead. Slow down and watch for " +
      "children at all times.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-school-bus-stop-ahead",
    quote:
      "School Bus Stop Ahead This sign warns you that there is a school bus " +
      "stop ahead. Begin slowing now.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-school-crossing",
    quote:
      "School Crossing School children cross the roadway at this point. You " +
      "must stop if pedestrians are waiting to cross.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-slippery-when-wet",
    quote:
      "Slippery When Wet Pavement is unusually slick when wet. Reduce your " +
      "speed; do not brake hard or change directions suddenly.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-speed-limit",
    quote:
      "SPEED LIMIT This indicates the maximum speed limit that you may " +
      "travel on the road from where this sign is posted until a different " +
      "speed sign is posted.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Regulatory Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-speed-zone-ahead",
    quote:
      "SPEED ZONE AHEAD You are approaching an area where a reduced speed " +
      "limit has been established.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Regulatory Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-stop-ahead",
    quote: "Stop Ahead There is a stop sign ahead. Begin slowing now.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-t-intersection",
    quote:
      "T Intersection You cannot go straight ahead. Road turns to both " +
      "right and left.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "sign-winding-road",
    quote: "Winding Road The road ahead is winding with a series of turns or curves.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "signal-dark-courtesy",
    quote:
      "Common courtesy says the driver who stops first should get to go " +
      "first. However, stay cautious and be sure it is safe to proceed even " +
      "when you are the first vehicle to reach the intersection.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Traffic Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "signal-dark-intersection",
    quote:
      "Generally, if a signal is not working, stop as you would if there " +
      "were stop signs in all directions.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Traffic Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "signal-flashing-red",
    quote:
      "A flashing red signal means the same as a stop sign. Come to a " +
      "complete stop. Look to the left, right, and ahead, yield to traffic " +
      "and pedestrians and proceed when it is safe to do so.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Vehicle Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "signal-flashing-yellow",
    quote:
      "A flashing yellow signal means \"PROCEED WITH CAUTION.\" It usually " +
      "means you need to slow down.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Vehicle Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "signal-flashing-yellow-arrow",
    quote:
      "A flashing yellow arrow means left turns are allowed, but you must " +
      "first yield to oncoming traffic and pedestrians. Oncoming traffic " +
      "has a green light. You must determine if there is a safe gap before " +
      "turning.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Vehicle Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "signal-green-arrow",
    quote:
      "A steady green arrow means that you have a \"protected\" turning " +
      "movement. If there is no green arrow, left and right turning traffic " +
      "is \"unprotected\" and must yield right of way to oncoming traffic and " +
      "pedestrians.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Vehicle Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "signal-green-yield-statute",
    quote:
      "However, vehicular traffic, including vehicles turning right or " +
      "left, must yield the right-of-way to other vehicles and to " +
      "pedestrians lawfully within the intersection or an adjacent " +
      "crosswalk at the time the signal is exhibited.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 2. Traffic Control Devices - 61-8-207. Traffic control signal legend",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0020/section_0070/0610-0080-0020-0070.html",
  },
  {
    key: "signal-left-on-red",
    quote:
      "When entering a one-way street from a one-way street, you may also " +
      "turn left after stopping for the red light.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Vehicle Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "signal-red-arrow",
    quote:
      "A steady red arrow means \"STOP.\" Stop and remain stopped except for " +
      "allowed turns on red.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Vehicle Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "signal-red-statute",
    quote:
      "Vehicular traffic facing a steady circular red signal must stop at a " +
      "marked stop line. If there is not a marked stop line, vehicular " +
      "traffic must stop before entering the crosswalk on the near side of " +
      "the intersection.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 2. Traffic Control Devices - 61-8-207. Traffic control signal legend",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0020/section_0070/0610-0080-0020-0070.html",
  },
  {
    key: "signal-right-on-red",
    quote:
      "When entering a two-way street, you may cautiously turn right after " +
      "stopping. You may make the right turn unless a sign or police " +
      "officer tells you not to turn against the red light.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Vehicle Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "signal-steady-green",
    quote:
      "A steady green signal means \"GO.\" Cautiously enter the intersection. " +
      "Look both ways for oncoming traffic that may run the red light.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Vehicle Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "signal-steady-red",
    quote:
      "A steady red signal means \"STOP.\" Stop before a stop line on the " +
      "pavement. If there is no stop line, stop before entering the nearest " +
      "crosswalk or before entering the intersection if there is no " +
      "crosswalk.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Vehicle Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "signal-steady-yellow",
    quote:
      "A steady yellow signal means \"CAUTION.\" Cautiously enter the " +
      "intersection. The signal is about to turn red. Do not enter an " +
      "intersection against a steady yellow light unless you are too close " +
      "to stop safely.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Vehicle Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "signal-yellow-arrow",
    quote:
      "A steady yellow arrow means that the time to make a \"protected\" turn " +
      "is about to end or stop. Vehicles making a turn should clear the " +
      "intersection.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Vehicle Signals",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "signal-yellow-enter-statute",
    quote:
      "Vehicular traffic may not enter the intersection when the red signal " +
      "is exhibited after the yellow signal.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 2. Traffic Control Devices - 61-8-207. Traffic control signal legend",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0020/section_0070/0610-0080-0020-0070.html",
  },
  {
    key: "signal-yellow-statute",
    quote:
      "Vehicular traffic facing a steady circular yellow or yellow arrow " +
      "signal is warned that the traffic movement permitted by the related " +
      "green signal is being terminated or that a red signal will be " +
      "exhibited immediately thereafter.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 2. Traffic Control Devices - 61-8-207. Traffic control signal legend",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0020/section_0070/0610-0080-0020-0070.html",
  },
  {
    key: "skid-cause",
    quote:
      "Skids are caused when the tires can no longer grip the road. The " +
      "best skid control is prevention. By judging weather and road " +
      "conditions and knowing where skids are likely to occur, such as on " +
      "curves or bridges, most skids can be avoided. In most cases, skids " +
      "are caused by drivers traveling too fast for conditions.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Skid Control - Look and Steer Where You Want to Go",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "skid-response",
    quote:
      "Stay off the brake - Until the vehicle slows, your brakes will not " +
      "work and could cause you to skid more. Take your foot off the " +
      "accelerator to slow and look where you want to go. Steer - Use quick " +
      "hand-over-hand steering to turn the wheel in the direction you want " +
      "the vehicle to go.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Skid Control - Look and Steer Where You Want to Go",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "slow-vehicle-25-mph",
    quote:
      "Farm tractors, animal-drawn vehicles, and road maintenance vehicles " +
      "usually go 25 mph or less. These vehicles must have a slow-moving " +
      "vehicle sign on the back",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Slow-Moving Traffic",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "slow-vehicle-emblem",
    quote:
      "Any slow-moving vehicle or equipment, animal-drawn vehicle, or road " +
      "construction or maintenance machinery normally operating at or under " +
      "25 miles per hour must display an emblem on the rear of the vehicle " +
      "as described below",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 2 - Motor Vehicle Equipment: Slow Moving Vehicles",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "slow-vehicle-turnout",
    quote:
      "When four or more vehicles are slowed up, slow-moving vehicles must " +
      "turn off the roadway whenever there is sufficient room for a safe " +
      "turnout. Slow-moving vehicles must drive in the extreme right lane " +
      "of the roadway.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Slow-Moving Traffic",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "space-no-share-lane",
    quote:
      "Do not share a lane with a pedestrian or bicyclist. Wait until it is " +
      "safe to pass in the adjoining lane.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space to the Side",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "space-split-difference",
    quote:
      "\"Split the Difference Rule.\" Split the difference between two " +
      "hazards - for example, steer a middle course between oncoming and " +
      "parked vehicles. However, if one is more dangerous than the other, " +
      "leave a little more space on the danger side.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Space to the Side",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "speed-fine-not-recorded",
    quote:
      "an insurance company may not hold a violation of a speed limit " +
      "against the insured or increase premiums because of the violation if " +
      "the speed limit is exceeded by no more than: (i) 10 miles an hour " +
      "during the daytime; or (ii) 5 miles an hour during the nighttime.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 7. Enforcement -- Penalties - 61-8-725. Penalty for violation of speed limits -- no record for certain violations",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0070/section_0250/0610-0080-0070-0250.html",
  },
  {
    key: "speed-fine-over-90",
    quote:
      "If a driver is guilty of exceeding 90 miles an hour in violation of " +
      "61-8-303 (1)(a), the violation may be recorded or charged against a " +
      "driver's record and an insurance company may hold the violation " +
      "against an insured driver's premium.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 7. Enforcement -- Penalties - 61-8-725. Penalty for violation of speed limits -- no record for certain violations",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0070/section_0250/0610-0080-0070-0250.html",
  },
  {
    key: "speed-ideal-conditions",
    quote:
      "Remember, speed limits are posted for ideal conditions. If the road " +
      "is wet or icy, if you cannot see well, or if traffic is heavy, then " +
      "you must slow down. Even if you are driving under the posted speed " +
      "limit, you can get a ticket for traveling too fast under these " +
      "conditions.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Speed Limits",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "speed-local-lower-25",
    quote:
      "decreases the limit outside an urban district, but not to less than " +
      "25 miles an hour on a paved or an unpaved road;",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-310. When local authorities may and shall alter limits or establish or alter area of school zone",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0100/0610-0080-0030-0100.html",
  },
  {
    key: "speed-minimum-limit",
    quote:
      "A person may not drive a motor vehicle at a speed slow enough to " +
      "impede or block the normal and reasonable movement of traffic except " +
      "when reduced speed is necessary for safe operation or in compliance " +
      "with law.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-311. Minimum speed regulations",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0110/0610-0080-0030-0110.html",
  },
  {
    key: "speed-obey-posted",
    quote:
      "Always obey the posted speed limit and take road conditions into " +
      "consideration. If the road or weather is bad, you may need to drive " +
      "below the speed limit.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Speed Limits",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "speed-pass-10-over",
    quote:
      "Vehicles traveling on a two-lane road may exceed the speed limit by " +
      "10 miles an hour in order to overtake and pass another vehicle and " +
      "return safely to the right lane.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Speed Limits",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "speed-slow-four-vehicles",
    quote:
      "the operator of a slow-moving vehicle behind which four or more " +
      "vehicles are formed in line shall turn off the roadway at the " +
      "nearest area where a sufficient and safe turnout exists in order to " +
      "permit the vehicles following it to proceed.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-311. Minimum speed regulations",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0110/0610-0080-0030-0110.html",
  },
  {
    key: "speed-statute-basic-rule",
    quote:
      "Subject to the maximum speed limits set forth in subsection (1), a " +
      "person shall operate a vehicle in a careful and prudent manner and " +
      "at a reduced rate of speed no greater than is reasonable and prudent " +
      "under the conditions existing at the point of operation",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-303. Speed restrictions -- definitions",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0030/0610-0080-0030-0030.html",
  },
  {
    key: "speed-statute-daytime",
    quote:
      "As used in this section, \"daytime\" means from one-half hour before " +
      "sunrise to one-half hour after sunset. \"Nighttime\" means at any " +
      "other hour.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-303. Speed restrictions -- definitions",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0030/0610-0080-0030-0030.html",
  },
  {
    key: "speed-statute-interstate",
    quote:
      "on an interstate highway outside an urbanized area of 50,000 " +
      "population or more is 80 miles an hour at all times and the speed " +
      "limit for vehicles traveling on interstate highways within an " +
      "urbanized area of 50,000 population or more is 65 miles an hour at " +
      "all times;",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-303. Speed restrictions -- definitions",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0030/0610-0080-0030-0030.html",
  },
  {
    key: "speed-statute-national-highway",
    quote:
      "on any portion of a national highway that is 10 miles or greater " +
      "that has been expanded to four lanes, and that is not subject to a " +
      "permanent special speed zone, as provided in 61-8-309 and 61-8-310 , " +
      "is 75 miles an hour during the daytime and 70 miles an hour during " +
      "the nighttime;",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-303. Speed restrictions -- definitions",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0030/0610-0080-0030-0030.html",
  },
  {
    key: "speed-statute-other-highway",
    quote:
      "on any other public highway of this state is 70 miles an hour during " +
      "the daytime and 65 miles an hour during the nighttime;",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-303. Speed restrictions -- definitions",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0030/0610-0080-0030-0030.html",
  },
  {
    key: "speed-statute-urban-25",
    quote: "(d) in an urban district is 25 miles an hour.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-303. Speed restrictions -- definitions",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0030/0610-0080-0030-0030.html",
  },
  {
    key: "speed-table-interstate",
    quote:
      "CARS and LIGHT TRUCKS HEAVY TRUCKS* DAY NIGHT DAY NIGHT Interstate " +
      "Highways 75/80 75/80 65 65 Urban Area Highways** 65 65 65 65 " +
      "Two-Lane Highways 70 65 60 55",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Speed Limits",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "speed-urban-area-note",
    quote:
      "*Trucks in excess of one-ton Manufacturer's Rated capacity. " +
      "**Applies to interstates within the Billings, Great Falls, and " +
      "Missoula areas.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Speed Limits",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "steering-hand-over-hand",
    quote:
      "When turning corners, turn the steering wheel using the " +
      "\"hand-over-hand\" technique; do not turn the wheel with just the palm " +
      "of one hand or you could lose control.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Steering",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "steering-hand-position",
    quote:
      "Both hands should be placed on opposite sides of the steering wheel " +
      "(e.g., at the 9 and 3 o'clock positions or the 8 and 4 o'clock " +
      "positions of newer vehicles equipped with airbags mounted in the " +
      "steering wheel).",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Steering",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "stop-end-call",
    quote:
      "End your cell phone conversation and turn off your radio. The " +
      "officer needs your full attention to communicate with you to " +
      "complete the enforcement stop in the least amount of time needed.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Enforcement Stops",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "stop-hands-visible",
    quote:
      "Driver and passengers should place their hands in clear view, for " +
      "example, on the steering wheel, on top of your lap, etc.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Enforcement Stops",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "stop-move-right",
    quote:
      "Move your vehicle onto the right shoulder of the road. The officer " +
      "will guide you using the patrol vehicle. Do not move onto the center " +
      "median. Do not stop in the center median of the interstate or on the " +
      "opposite side of a two-lane road.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Enforcement Stops",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "stop-sign-octagon",
    quote:
      "The STOP sign is the only eight-sided traffic sign. It means that " +
      "you must come to a complete stop before entering the intersection " +
      "ahead and yield to traffic close enough to be an immediate hazard. " +
      "If there is a crosswalk, stop before entering it.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Intersection Traffic Control Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "stop-stay-inside",
    quote:
      "Remain inside your vehicle unless otherwise directed by the officer. " +
      "Never step out of your vehicle unless an officer directs you to do " +
      "so.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Enforcement Stops",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "stop-turn-on-signal",
    quote:
      "Acknowledge the officer's presence by turning on your right turn " +
      "signal. Turning on your signal lets the officer know that you " +
      "recognize his or her presence.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 7 - Emergencies, Crashes, & Enforcement Stops: Enforcement Stops",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "stopping-distance-50-30",
    quote:
      "At 50 mph, it can take about 400 feet to react to something you see " +
      "and bring your vehicle to a stop. That is about the length of a city " +
      "block. At 30 mph, it can take about 200 feet to stop.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Adjusting to How Well You Can See",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "stopping-see-far-enough",
    quote:
      "If you cannot see 400 feet ahead, it means you may not be driving " +
      "safely at 50 mph. If you cannot see 200 feet ahead, you may not be " +
      "driving safely at 30 mph.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Adjusting to How Well You Can See",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "stopping-speed-triples",
    quote:
      "For example, stopping at 60 mph does not take twice the distance as " +
      "it takes at 30 mph, but over three times the distance.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Adjusting Speed",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "turn-from-nearest-lane",
    quote:
      "Where there are no signs or lane markings to control turning, you " +
      "should turn from the lane that is closest to the direction you want " +
      "to go and turn into the lane closest to the one you came from. This " +
      "way, you will cross the fewest lanes of traffic.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Turning",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "turn-left-wheels-straight",
    quote:
      "While waiting to complete the turn, keep your wheels pointed " +
      "straight ahead - if you are struck from behind, you will not be " +
      "forced into oncoming traffic.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Use Your Signals to Communicate",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "turn-left-yield-statute",
    quote:
      "The operator of a vehicle within an intersection intending to turn " +
      "to the left shall yield the right-of-way to any vehicle approaching " +
      "from the opposite direction that is within the intersection or close " +
      "enough to the intersection to constitute an immediate hazard.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-340. Vehicle turning left at intersection",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0400/0610-0080-0030-0400.html",
  },
  {
    key: "turn-proper-lane-safe",
    quote:
      "Above all, remember that no vehicle shall be turned at any time " +
      "unless it is in the proper lane, and it is safe to do so.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Turning Around",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "turn-right-no-wide-swing",
    quote:
      "On right turns, avoid swinging wide to the left before turning to " +
      "make the turn easier. If you swing wide, the driver behind you may " +
      "think you are changing lanes or going to turn left and may try to " +
      "pass you on the right.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Right Turns",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "turn-signal-100-300",
    quote:
      "Use a proper turn signal 100 feet before turning in town, 300 feet " +
      "before turning on rural roads.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: General Driving",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "turn-signal-before-slowing",
    quote:
      "A person may not stop or suddenly decrease the speed of a vehicle " +
      "without first giving an appropriate signal to the operator of a " +
      "vehicle immediately to the rear when there is opportunity to give " +
      "the signal.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-336. Turning movements and required signals",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0360/0610-0080-0030-0360.html",
  },
  {
    key: "turn-signal-cancel",
    quote:
      "After you have made a turn or lane change, make sure your turn " +
      "signal is off. After small turns, the signals may not turn off by " +
      "themselves. Turn it off if it has not clicked off by itself. If you " +
      "don't, other drivers might think you plan to turn again.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Use Your Signals to Communicate",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "turn-signal-not-too-early",
    quote:
      "Be careful that you do not signal too early. If there are streets, " +
      "driveways, or entrances between you and where you want to turn, wait " +
      "until you have passed them to signal.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Use Your Signals to Communicate",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "turn-signal-statute-100",
    quote:
      "A signal of intention to turn right or left, other than when " +
      "passing, must be given continuously during not less than the last " +
      "100 feet traveled by the vehicle before turning in any business " +
      "district, residence district, or urban district.",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-336. Turning movements and required signals",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0360/0610-0080-0030-0360.html",
  },
  {
    key: "turn-signal-statute-300",
    quote:
      "A signal of intention to turn right or left, other than when " +
      "passing, must be given continuously during not less than the last " +
      "300 feet traveled by the vehicle before turning in areas other than " +
      "those set forth in subsection (2).",
    source: "Montana Code Annotated 2025 (Montana Legislature)",
    section: "Title 61, Chapter 8. TRAFFIC REGULATION, Part 3. Vehicle Operating Requirements - 61-8-336. Turning movements and required signals",
    url: "https://mca.legmt.gov/bills/mca/title_0610/chapter_0080/part_0030/section_0360/0610-0080-0030-0360.html",
  },
  {
    key: "turn-wrong-lane",
    quote:
      "If you approached a turn in the wrong lane or forgot to signal, you " +
      "should proceed, get into the proper lane, go to the next " +
      "intersection, signal, and then turn.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: General Driving",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "uturn-500-feet",
    quote:
      "You may turn around on a roadway where the driver has 500 feet in " +
      "both directions (almost two average city blocks) of unobstructed " +
      "view and no vehicles are approaching.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Turning Around",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "uturn-city-ordinances",
    quote:
      "Remember that most city ordinances prohibit U-turns in the middle of " +
      "a block, and some prohibit U-turns entirely.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 4 - Driving Rules: Turning Around",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "visibility-night-50",
    quote:
      "You must be able to stop within the distance you can see ahead with " +
      "your headlights, which is about 400 feet. You should drive at a " +
      "speed that allows you to stop within this distance, or about 50 mph.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Darkness",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "visibility-rain-fog-30",
    quote:
      "In a very heavy rain, snowstorm, or thick fog, you may not be able " +
      "to see much more than 200 feet ahead. When you cannot see any " +
      "farther than that, you cannot safely drive faster than 30 mph.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Rain, Fog, or Snow",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "vision-20-40",
    quote:
      "Vision is so important that Montana requires that you pass a vision " +
      "test before you get a driver license. This test measures that you " +
      "have at least 20/40 vision in at least one eye, with or without " +
      "corrective lenses.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Vision",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "vision-corrective-lenses",
    quote:
      "If your driver license says you must wear corrective lenses and you " +
      "are not and you happen to be stopped, you could get a ticket.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Vision",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "vision-no-dark-glasses",
    quote:
      "Avoid using dark glasses or tinted contact lenses at night, even if " +
      "it helps with glare. The problem is that they cut too much light - " +
      "light that you need to see clearly.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 6 - Physical Requirements: Vision",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "vision-tinted-lenses-night",
    quote:
      "Although sunglasses are a big help during daylight hours, they " +
      "reduce your visibility dangerously at night. Even tinted and some " +
      "\"photo gray\" lenses can detract up to 30% of your night vision.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Night Driving",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "warning-signs-look",
    quote:
      "Warning signs are black and yellow. These signs are used to warn you " +
      "of dangerous conditions ahead where you are required to drive with " +
      "great caution.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "warning-signs-shape",
    quote:
      "Warning signs are usually diamond shaped. However, the \"railroad " +
      "crossing ahead\" sign is round. It is the only round warning traffic " +
      "sign.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Warning Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "weather-bridges-shade",
    quote:
      "On cold, wet days, shady spots can be icy. These areas freeze first " +
      "and dry out last. Overpasses and other types of bridges can have icy " +
      "spots. The pavement on bridges can be icy even when other areas of " +
      "pavement are not. This is because bridges do not have earth " +
      "underneath them to help insulate them against the cold.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Slippery Roads",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "weather-first-rain-oil",
    quote:
      "If it starts to rain on a hot day, the pavement can be very slippery " +
      "for the first few minutes. Heat causes oil in the asphalt to come to " +
      "the surface. It makes the road more slippery until the oil is washed " +
      "off.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Slippery Roads",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "weather-first-sign",
    quote:
      "Slow down at the first sign of rain, snow, or sleet. These all make " +
      "the roadway slippery.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Slippery Roads",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "weather-stranded-stay",
    quote:
      "If you become stranded in a snowstorm, the best thing to do is stay " +
      "in the car because you are more likely to be found.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Slippery Roads",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "weather-studded-tires",
    quote: "Studded tires are not allowed June 1 through September 30.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Slippery Roads",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "weather-wet-snow-ice",
    quote:
      "On a wet road, reduce your speed about 10 mph. On packed snow, cut " +
      "your speed in half. Use snow tires or chains when the road has snow " +
      "on it. On ice, you must slow to a crawl.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 5 - How to Drive Safely: Slippery Roads",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "work-zone-barricade-stripes",
    quote:
      "The diagonal stripes on the barricade or vertical panel guide the " +
      "driver toward the direction to which traffic is to pass. Stripes " +
      "sloping downward to the right mean the driver should bear to the " +
      "right. Conversely, stripes sloping downward to the left mean bear to " +
      "the left.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Construction and Maintenance Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "work-zone-fines-double",
    quote:
      "It is a violation to exceed the posted speed in construction and " +
      "work zones. The fines for violation of a work zone are double the " +
      "amount.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Construction and Maintenance Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "work-zone-flaggers",
    quote:
      "Flaggers wear orange vests, shirts, or jackets and use red flags or " +
      "stop/slow paddles to direct traffic through work zones.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Construction and Maintenance Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "work-zone-no-standard-limit",
    quote:
      "Traffic fines double in work zones. There is not a standard speed " +
      "limit in construction or work zones. The Department of " +
      "Transportation, local authority, utility company, or private " +
      "contractor sets a speed limit specific to each zone.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Construction Zone",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "work-zone-orange",
    quote:
      "The most commonly used traffic control devices are signs, " +
      "barricades, drums, cones, tubes, flashing arrow panels and flag " +
      "persons. Orange is the basic color for these devices.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Construction and Maintenance Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "work-zone-reckless-endangerment",
    quote:
      "You may be charged with Reckless Endangerment of a Highway Worker if " +
      "you knowingly or negligently drive a motor vehicle in a highway " +
      "construction zone in a way that endangers persons or property",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Construction Zone",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
  {
    key: "yield-sign-meaning",
    quote:
      "The YIELD sign means slow down to a reasonable speed and yield " +
      "right-of-way to all vehicles on the roadway being entered.",
    source: "Montana Driver Manual (MT Motor Vehicle Division, Revised April 2024)",
    section: "Chapter 3 - Signs, Signals, & Markings: Intersection Traffic Control Signs",
    url: "https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf",
  },
];
