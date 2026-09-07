import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the New Mexico bank. Two sources sit behind
// them, and each is here for a reason:
//
//  - The New Mexico Driver Manual, published by the Motor Vehicle Division of
//    the Taxation and Revenue Department and served from the state's document
//    host, realfile.tax.newmexico.gov. It carries no edition line anywhere in
//    its 43 pages; the only label the publisher gives it is in the file name
//    the MVD's own Driver's License Manuals page links, "English Drivers
//    Manualver11.19.19.pdf", so that is the edition recorded here. Its printed
//    page numbers run three behind the PDF's, since the table of contents is
//    numbered i to iii - the page in each `section` below is the PRINTED one,
//    and the `#page=` anchor in each url is the PDF one.
//  - Chapter 66 NMSA 1978, Motor Vehicles, from NMOneSource.com, the New
//    Mexico Compilation Commission's official publisher of the statutes. The
//    manual is a thin book - forty printed pages, a third of them about
//    motorcycles - and it is silent on a long list of things a New Mexico
//    driver is still bound by: the move-over rule for a stopped emergency
//    vehicle, the ten feet you must stop short of a school bus, the statutory
//    speed limits as the legislature actually wrote them, the statewide
//    texting ban, and the age at which an unrestricted licence becomes
//    available. Those come from the statute, and are labeled as statute.
//
// Where the two disagree, both readings are recorded in
// docs/driving/research/newmexico.md and no question is built on the disputed
// number. The manual says do not park "within 25 ft. of a crosswalk at an
// intersection"; Section 66-7-351 says twenty feet. The manual says a
// provisional applicant "must not have been convicted of a traffic violation in
// the 90 days prior"; the 2011 amendment to Section 66-5-8 replaced that with a
// pending-citation bar. The manual's child-restraint paragraph predates the
// 2005 rewrite of Section 66-7-369 entirely.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. Only the
// normalisations the sibling banks use were applied, to the extracted text and
// to nothing else: curly quotes, en dashes and em dashes fold to ASCII; runs of
// whitespace, including the line breaks the PDF inserts mid-sentence, collapse
// to single spaces; the section symbol is spelled out as "Section"; and where a
// source states a rule as a stem followed by a bulleted list, the items run
// together in the order they appear - no words are changed, dropped or
// reordered.
//
// The manual's own slips are preserved exactly as they stand, because a quote
// that has been tidied up is no longer a quote. Among them: the sharing-the-road
// heading that reads "LARGE TUCKS AND RVS", the licensed driver who is
// "21years of age or older", the dashed yellow line you may cross "if it safe to
// do so", and the accident section's "in any on accident".

export const newmexicoExcerpts: HandbookExcerpt[] = [
  {
    key: "lic-required",
    quote:
      "Anyone operating a motor vehicle or motorcycle on public " +
      "roadways in the State of New Mexico must have a driver " +
      "license.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "The Driver License (page 1)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=4",
  },
  {
    key: "lic-resident",
    quote:
      "You are also required to have a New Mexico driver license if " +
      "you are a resident.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "The Driver License (page 1)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=4",
  },
  {
    key: "gdl-under-18",
    quote:
      "If you are under the age of 18, you must participate in the " +
      "graduated driver license system until you meet the " +
      "requirements for an unrestricted license.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Types of Driver Licenses - Graduated License System (page 1)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=4",
  },
  {
    key: "gdl-three-levels",
    quote:
      "The three different levels of Graduated driver license (GDL) " +
      "are: Instructional Permit - also known as a \"learners permit\" " +
      "Provisional License Unrestricted Drivers License",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Types of Driver Licenses - Graduated License System (page 1)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=4",
  },
  {
    key: "permit-supervision",
    quote:
      "A permit allows you to operate a motor vehicle when supervised " +
      "by another driver who is at least 21 years of age and who is " +
      "licensed to drive that type of vehicle.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Instructional Permit (page 1)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=4",
  },
  {
    key: "permit-seat",
    quote:
      "In all vehicles except motorcycles, the licensed driver must " +
      "sit in the right front seat. On motorcycles, the licensed " +
      "driver must follow the learner.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Instructional Permit (page 1)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=4",
  },
  {
    key: "permit-age-tests",
    quote:
      "To obtain an instructional permit you must be at least 15 " +
      "years of age and pass the knowledge test and vision test.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Instructional Permit (page 1)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=4",
  },
  {
    key: "permit-consent",
    quote:
      "If you are under the age of 18, you must also have a consent " +
      "form signed by your parent or guardian.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Instructional Permit (page 1)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=4",
  },
  {
    key: "permit-six-months",
    quote:
      "The driver must retain the instructional permit for at least " +
      "six months.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Instructional Permit (page 1)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=4",
  },
  {
    key: "permit-driver-ed",
    quote:
      "A person 15 years or older must be enrolled in and attending a " +
      "driver education course approved by the Traffic Safety Bureau " +
      "and includes DWI education and practice driving.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Instructional Permit (page 1)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=4",
  },
  {
    key: "permit-accompany-three-years",
    quote:
      "The driver is with a licensed driver 21years of age or older " +
      "who has been licensed for at least three years in this state " +
      "or any other state.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Instructional Permit (page 1)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=4",
  },
  {
    key: "prov-curfew",
    quote:
      "A provisional license allows you to drive without the " +
      "supervision of another driver - except during the hours of " +
      "midnight and 5:00am.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Provisional License (page 1)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=4",
  },
  {
    key: "prov-passengers",
    quote:
      "Unless a licensed driver that is 21 years old or older is in " +
      "the vehicle, you may not have more than one other passenger " +
      "under the age of 21 who is not a member of your immediate " +
      "family in the vehicle.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Provisional License (page 1)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=4",
  },
  {
    key: "prov-practice-hours",
    quote:
      "The driver must complete not less than 50 hours of practice " +
      "driving, including not less than 10 hours of nighttime " +
      "driving.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Provisional License (page 1)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=4",
  },
  {
    key: "prov-age",
    quote:
      "The minimum age to receive a provisional license is 15 years " +
      "and 6 months if the driver has held an instructional permit " +
      "for 6 months.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Provisional License (page 1)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=4",
  },
  {
    key: "prov-no-midnight",
    quote:
      "The driver may not operate a motor vehicle upon public " +
      "highways between the hours of midnight and 5:00 AM.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Provisional License (page 2)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=5",
  },
  {
    key: "prov-exceptions",
    quote:
      "Accompanied by a licensed driver twenty-one years or older. ○ " +
      "Required by family necessity as evidenced by a signed " +
      "statement of a parent or guardian.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Provisional License (page 2)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=5",
  },
  {
    key: "unrestricted-12-months",
    quote:
      "The driver must have held a provisional license for the 12- " +
      "month period immediately preceding the date of application for " +
      "a driver license.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Unrestricted Driver License (page 2)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=5",
  },
  {
    key: "unrestricted-no-alcohol",
    quote:
      "The driver must not have been adjudicated guilty or have an " +
      "offense pending involving the use of alcohol or drugs during " +
      "the provisional period.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Unrestricted Driver License (page 2)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=5",
  },
  {
    key: "renewal-term",
    quote:
      "Your driver license is valid for either 4 or 8 years. You may " +
      "renew the license anytime up to 90 days before or 30 days " +
      "after it expires.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Driver License Renewal (page 2)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=5",
  },
  {
    key: "keep-lose-privileges",
    quote:
      "You must drive safely at all times to keep your driver " +
      "license. You can lose your driving privileges for any of the " +
      "following:",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Keeping the Driver License (page 2)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=5",
  },
  {
    key: "keep-refusal",
    quote:
      "Refusing to be tested for alcohol or drugs if you are asked to " +
      "do so by a police officer,",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Keeping the Driver License (page 2)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=5",
  },
  {
    key: "keep-leaving-scene",
    quote:
      "Leaving the scene of an accident in which you are involved, " +
      "without identifying yourself,",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Keeping the Driver License (page 2)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=5",
  },
  {
    key: "keep-lend-license",
    quote: "Letting someone else use your driver license.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Keeping the Driver License (page 3)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=6",
  },
  {
    key: "belt-illegal",
    quote:
      "In the State of New Mexico, it is illegal to drive without " +
      "wearing safety belts.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Safety Belts and Child Restraints (page 3)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=6",
  },
  {
    key: "belt-both-parts",
    quote:
      "If your vehicle has a two-part safety belt system, be sure to " +
      "wear both the lap belt and the shoulder belt. Wearing either " +
      "part alone reduces your protection.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Safety Belts and Child Restraints (page 3)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=6",
  },
  {
    key: "belt-child-12",
    quote:
      "The law requires that all children under the age of 12 wear " +
      "appropriate safety restraints while the vehicle is in motion.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Safety Belts and Child Restraints (page 3)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=6",
  },
  {
    key: "belt-child-rear",
    quote:
      "Children should be secured in the rear seat. Never secure a " +
      "child in the front passenger side, especially if your vehicle " +
      "has an air bag.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Safety Belts and Child Restraints (page 3)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=6",
  },
  {
    key: "tcd-what",
    quote:
      "Traffic control devices include traffic signals, signs and " +
      "pavement markings. Traffic control also can be provided by law " +
      "enforcement, highway personnel or school crossing guards. You " +
      "must obey directions from these people.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Control Devices (page 3)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=6",
  },
  {
    key: "signal-basic",
    quote:
      "A \"green\" light means you can go if it is safe. A \"yellow\" " +
      "light means caution and a \"red\" light means stop.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signals (page 3)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=6",
  },
  {
    key: "signal-order",
    quote:
      "Traffic lights are usually at intersections and are green, " +
      "yellow and red, from bottom to top, when together.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signals (page 3)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=6",
  },
  {
    key: "green-clear-first",
    quote:
      "If you are stopped and then the light turns green, you must " +
      "allow crossing traffic to clear the intersection before you go " +
      "ahead.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signals (page 4)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=7",
  },
  {
    key: "green-arrow",
    quote:
      "A GREEN arrow means you can safely turn in the direction of " +
      "the arrow. There should be no on-coming or crossing traffic " +
      "while the arrow is green.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signals (page 4)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=7",
  },
  {
    key: "green-left-turn",
    quote:
      "If you are turning left, a steady green traffic light means " +
      "you may turn but only when safe to do so. Oncoming traffic has " +
      "the right-of-way.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signals (page 4)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=7",
  },
  {
    key: "yellow-steady",
    quote:
      "A steady YELLOW traffic light means the traffic light is about " +
      "to change to red. You must stop if it is safe to do so.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signals (page 4)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=7",
  },
  {
    key: "yellow-in-intersection",
    quote:
      "If you are in the intersection when the yellow light comes on, " +
      "do not stop but continue through the intersection.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signals (page 4)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=7",
  },
  {
    key: "flashing-yellow",
    quote:
      "A flashing YELLOW traffic light means slow down and proceed " +
      "with caution.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signals (page 4)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=7",
  },
  {
    key: "yellow-arrow",
    quote:
      "A YELLOW arrow means that the protection of a green arrow is " +
      "ending and if you are turning in the direction of the arrow, " +
      "you should prepare to stop and give the right of way to " +
      "oncoming traffic before turning.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signals (page 4)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=7",
  },
  {
    key: "red-steady",
    quote:
      "A steady RED traffic light means stop. In some locations, " +
      "there may be a small, very bright blinking light in the middle " +
      "of the red light. This device is to alert you of the red light " +
      "and that you must stop. You must wait until the traffic light " +
      "turns green and there is no crossing traffic before you may " +
      "move ahead.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signals (page 4)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=7",
  },
  {
    key: "right-on-red",
    quote:
      "If you are turning right, you may turn after coming to a full " +
      "stop, if it is safe to do so and if there is no sign " +
      "prohibiting the turn on a red light.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signals (page 4)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=7",
  },
  {
    key: "flashing-red",
    quote:
      "A flashing RED traffic light means the same as a stop sign. " +
      "You must come to a full stop and then may proceed when it is " +
      "safe to do so.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signals (page 4)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=7",
  },
  {
    key: "red-arrow",
    quote:
      "A RED arrow means you must stop and you cannot go in the " +
      "direction of the arrow. You may proceed when the red arrow " +
      "goes off and a green arrow or light goes on.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signals (page 4)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=7",
  },
  {
    key: "signs-shape-color",
    quote:
      "The shape and color of these signs give clues to the type of " +
      "information they provide.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs (page 4)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=7",
  },
  {
    key: "warning-signs",
    quote:
      "Warning Signs-These signs are usually yellow with black " +
      "lettering or symbols and most are diamond shaped. These signs " +
      "warn you to slow down and be prepared to stop if necessary. It " +
      "warns you that a special situation or a hazard is ahead.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Warning Signs (page 4)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=7",
  },
  {
    key: "rr-never-beat",
    quote:
      "Never try to beat a train across the tracks. Never start to " +
      "cross if there is not enough room for your vehicle on the far " +
      "side and if you will have to stop on the tracks. Wait until " +
      "there is room for your vehicle on the far side.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Railroad Crossing Warning Signs (page 5)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=8",
  },
  {
    key: "rr-advance-sign",
    quote:
      "A round yellow warning sign with an \"X\" symbol and black \"RR\" " +
      "letters is placed along the road before you get to a railroad " +
      "crossing.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Railroad Crossing Warning Signs (page 5)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=8",
  },
  {
    key: "rr-crossbuck",
    quote:
      "A white, X-shaped sign or \"crossbuck\" with \"Railroad Crossing\" " +
      "on it is located at the railroad crossing. This sign has the " +
      "same meaning as a \"Yield\" sign. You must yield to crossing " +
      "trains.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Railroad Crossing Warning Signs (page 5)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=8",
  },
  {
    key: "rr-flashing-lights",
    quote:
      "At some crossings, along with the crossbuck sign, you will see " +
      "side-by-side lights that will flash alternately when a train " +
      "is approaching. When the lights are flashing, you must stop. " +
      "At some crossings there is also a crossing gate that will " +
      "lower when a train is coming. Do not drive around the gate.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Railroad Crossing Warning Signs (page 6)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=9",
  },
  {
    key: "rr-bell",
    quote:
      "Some crossings also have a bell or a horn that will sound. Do " +
      "not cross until the bell or horn has stopped.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Railroad Crossing Warning Signs (page 6)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=9",
  },
  {
    key: "rr-bus-15-feet",
    quote:
      "School buses, taxis and other vehicles for hire that carry " +
      "passengers and trucks that transport explosives, gasoline or " +
      "other dangerous materials must stop at least 15 feet from a " +
      "railroad crossing before proceeding.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Railroad Crossing Warning Signs (page 6)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=9",
  },
  {
    key: "rr-bus-doors",
    quote:
      "Further, a school bus driver must open the doors of the school " +
      "bus before crossing.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Railroad Crossing Warning Signs (page 6)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=9",
  },
  {
    key: "work-area-signs",
    quote:
      "Work Area Signs-These construction, maintenance or emergency " +
      "operations signs are generally diamond or rectangular shaped, " +
      "orange with black letters or symbols and warn you that people " +
      "are working on or near the roadway.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Work Area Signs (page 6)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=9",
  },
  {
    key: "work-area-flagger",
    quote:
      "In work areas, traffic may be controlled by a person with a " +
      "sign or flag. You must obey these people.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Work Area Signs (page 6)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=9",
  },
  {
    key: "regulatory-signs",
    quote:
      "Regulatory Signs-These signs are square, rectangular, or have " +
      "a special shape and are usually white, red or black with " +
      "black, red, white or green letters or symbols. They give you " +
      "information about rules for traffic direction, lane use, " +
      "turning, speed, parking and other special situations.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Regulatory Signs (page 6)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=9",
  },
  {
    key: "prohibitory-signs",
    quote:
      "Some regulatory signs have a red circle with a red slash over " +
      "a symbol. These signs prohibit certain actions, i.e., no left " +
      "turn, no right turn, no U-turn, etc.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Regulatory Signs (page 6)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=9",
  },
  {
    key: "speed-limit-signs",
    quote:
      "Speed Limit Signs-These signs indicate the maximum safe speed " +
      "allowed or the minimum safe speed required.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Speed Limit Signs (page 6)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=9",
  },
  {
    key: "speed-ideal-conditions",
    quote:
      "The maximum limit should be driven only in ideal driving " +
      "conditions and you must reduce your speed when conditions " +
      "require it.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Speed Limit Signs (page 6)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=9",
  },
  {
    key: "speed-reduce-when",
    quote:
      "For example, you should reduce your speed when the roadway is " +
      "slippery, during rain, snow, icy conditions, or when it is " +
      "foggy and difficult to see clearly down the road.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Speed Limit Signs (page 6)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=9",
  },
  {
    key: "minimum-speed-signs",
    quote:
      "Some high-speed roads have minimum speed limits and you are " +
      "required to travel at least this fast so as not to be a hazard " +
      "to other drivers. If the minimum posted speed is too fast for " +
      "you, you should use another road.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Speed Limit Signs (page 7)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=10",
  },
  {
    key: "lane-use-signs",
    quote:
      "Lane Use Control Signs-These signs tell you where you can go, " +
      "where you can turn and often use an arrow symbol.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Lane Use Control Signs (page 7)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=10",
  },
  {
    key: "no-passing-signs",
    quote:
      "No Passing Signs-These signs tell you where passing is not " +
      "permitted.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - No Passing Signs (page 7)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=10",
  },
  {
    key: "passing-sight-based",
    quote:
      "Passing areas are based on how far you can see ahead. They " +
      "consider unseen hazards such as hills and curves, " +
      "intersections, driveways and other places a vehicle may enter " +
      "the roadway.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - No Passing Signs (page 7)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=10",
  },
  {
    key: "stop-sign",
    quote:
      "Stop Sign-A stop sign has eight sides and is red with white " +
      "letters. You must come to a full stop at a stop sign or stop " +
      "line, if one is present. You must wait until crossing vehicles " +
      "and pedestrians have cleared and pull forward only when it is " +
      "safe to do so.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Stop Sign (page 7)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=10",
  },
  {
    key: "yield-sign",
    quote:
      "Yield Sign-A yield sign is a downward pointing triangle. It is " +
      "red and white with red letters. It means you must slow down " +
      "and yield the right-of-way to traffic in the intersection you " +
      "are crossing or roadway you are entering.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Yield Sign (page 7)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=10",
  },
  {
    key: "do-not-enter",
    quote:
      "Do Not Enter Sign-A square sign with a white horizontal line " +
      "inside a red ball means you cannot enter.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Do Not Enter Sign (page 7)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=10",
  },
  {
    key: "slow-moving-vehicle",
    quote:
      "Slow Moving Vehicle-A reflective orange triangle on the rear " +
      "of a vehicle means it is traveling less than 25 mph.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Slow Moving Vehicle (page 7)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=10",
  },
  {
    key: "destination-signs",
    quote:
      "Destination Signs-These signs are square or rectangular shaped " +
      "and are green or brown with white lettering. They show " +
      "directions and distance to various locations such as cities, " +
      "airports, or state lines or to special areas such as national " +
      "parks, historical areas or museums.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Destination Signs (page 8)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=11",
  },
  {
    key: "service-signs",
    quote:
      "Service Signs-These signs are square or rectangular shaped and " +
      "are blue with white letters or symbols. They show the location " +
      "of various services such as rest areas, gas stations, " +
      "campgrounds or hospitals.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Service Signs (page 8)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=11",
  },
  {
    key: "route-signs",
    quote:
      "Route Number Signs-The shape and color of route number signs " +
      "indicate the type of roadway: interstate, U.S., state, city or " +
      "county road.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Signs - Route Number Signs (page 8)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=11",
  },
  {
    key: "markings-what",
    quote:
      "Lines and symbols on the roadway divide lanes, tell you when " +
      "you may pass other vehicles or change lanes, which lanes to " +
      "use for turns, define pedestrian walkways and where you must " +
      "stop for signs or traffic signals.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Pavement Markings (page 8)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=11",
  },
  {
    key: "edge-lines",
    quote:
      "Edge and Lane Lines-Solid lines along the side of the road " +
      "show you where the edge of the road is located.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Pavement Markings (page 8)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=11",
  },
  {
    key: "white-dashed",
    quote:
      "A dashed white line between lanes of traffic means that you " +
      "may cross it to change lanes if it is safe to do so.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Pavement Markings (page 8)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=11",
  },
  {
    key: "white-solid",
    quote:
      "A solid white line between lanes of traffic means that you " +
      "should stay in your lane unless a special situation requires " +
      "you to change lanes.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Pavement Markings (page 8)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=11",
  },
  {
    key: "stop-line",
    quote:
      "When required to stop because of a sign or signal, you must " +
      "stop before your vehicle reaches the stop line or crosswalk.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Pavement Markings (page 8)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=11",
  },
  {
    key: "crosswalk-yield",
    quote:
      "You must yield to pedestrians in or about to enter a " +
      "crosswalk. Not all crosswalks are marked.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Pavement Markings (page 8)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=11",
  },
  {
    key: "yellow-lines",
    quote:
      "Lines separating traffic moving in opposite directions are " +
      "yellow. A dashed yellow line between opposing lanes of traffic " +
      "means that you may cross it to pass if it safe to do so.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Pavement Markings (page 8)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=11",
  },
  {
    key: "yellow-solid-dashed",
    quote:
      "Where there is both a solid and a dashed yellow line between " +
      "opposing lanes of traffic, you may not pass if the solid " +
      "yellow line is on your side. If the dashed line is on your " +
      "side, you may pass if it is safe to do so.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Pavement Markings (page 8)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=11",
  },
  {
    key: "yellow-double-solid",
    quote:
      "Two solid yellow lines between lanes of traffic means neither " +
      "side can pass.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Pavement Markings (page 8)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=11",
  },
  {
    key: "yellow-cross-for-driveway",
    quote:
      "You may cross a solid yellow line to turn into a drive way if " +
      "it safe to do so.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Pavement Markings (page 8)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=11",
  },
  {
    key: "reversible-lanes",
    quote:
      "Some travel lanes are designed to carry traffic in one " +
      "direction at certain times and in the opposite direction at " +
      "other times. These lanes are usually marked by double-dashed " +
      "yellow lines.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Other Lane Controls - Reversible Lanes (page 9)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=12",
  },
  {
    key: "reversible-signals",
    quote:
      "A green arrow means you can use the lane beneath it; a red \"X\" " +
      "means you cannot. A flashing yellow \"X\" means the lane is only " +
      "for turning. A steady yellow \"X\" means that the use of the " +
      "lane is changing and you should move out of it as soon as it " +
      "is safe to do so.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Other Lane Controls - Reversible Lanes (page 9)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=12",
  },
  {
    key: "reserved-lanes",
    quote:
      "Reserved lanes are marked by signs stating that the lane is " +
      "reserved for special use and often have a white diamond posted " +
      "at the side of the road or painted on the road surface.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Other Lane Controls - Reserved Lanes (page 9)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=12",
  },
  {
    key: "hov-lanes",
    quote:
      "\"HOV\" stands for \"High Occupancy Vehicles\" and indicates lanes " +
      "reserved for vehicles with more than one person in them. Signs " +
      "say how many people must be in the vehicle, as well as the " +
      "days and hours to which it applies. For example, \"HOV 3\" means " +
      "there must be at least three people in the vehicle.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Other Lane Controls - Reserved Lanes (page 9)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=12",
  },
  {
    key: "shared-center-lane",
    quote:
      "These center lanes are reserved for making left turns (or " +
      "U-turns when they are permitted) but can be used by vehicles " +
      "traveling in both directions.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Other Lane Controls - Shared Center Lane (page 9)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=12",
  },
  {
    key: "shared-center-markings",
    quote:
      "These lanes are marked on each side by a solid yellow and " +
      "dashed yellow line.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Other Lane Controls - Shared Center Lane (page 9)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=12",
  },
  {
    key: "no-backing",
    quote:
      "General driving-Never back a vehicle in any travel lane except " +
      "to parallel park. It is illegal and unsafe to do so.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "General Rules (page 10)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=13",
  },
  {
    key: "missed-turn",
    quote:
      "If you miss your turn or exit do not back up but go on to " +
      "where you can safely turn around.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "General Rules (page 10)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=13",
  },
  {
    key: "no-stopping-travel-lane",
    quote:
      "Do not stop in travel lanes for any reason (confusion, " +
      "breakdown, letting out a passenger). Keep moving until you can " +
      "safely pull off the road.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "General Rules (page 10)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=13",
  },
  {
    key: "keep-right-except-pass",
    quote:
      "On a road with two or more lanes traveling in the same " +
      "direction, stay in the right lane except to pass.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "General Rules (page 10)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=13",
  },
  {
    key: "three-lane-center",
    quote:
      "On a road with three or more lanes traveling in the same " +
      "direction, if there is a lot of entering or exiting traffic, " +
      "use the center travel lane.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "General Rules (page 10)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=13",
  },
  {
    key: "no-shoulder-driving",
    quote:
      "Unless told to do so by officials, never drive on the shoulder " +
      "of the road.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "General Rules (page 10)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=13",
  },
  {
    key: "left-lane-passing",
    quote:
      "Passing-On multi-lane roads, the left-most lane is intended to " +
      "be used for passing slower vehicles.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "General Rules (page 10)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=13",
  },
  {
    key: "no-shoulder-passing",
    quote:
      "Never pass on the shoulder, whether it is paved or not. Other " +
      "drivers will never expect you to be there and may pull off the " +
      "road without looking.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "General Rules (page 10)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=13",
  },
  {
    key: "turn-lane-choice",
    quote:
      "Where there are no signs or lane markings to control turning, " +
      "you should turn from the lane that is closest to the direction " +
      "you want to go and turn into the lane closest to the one you " +
      "came from.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "General Rules (page 10)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=13",
  },
  {
    key: "turn-signals-always",
    quote: "Always use turn signals when changing lanes or turning",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "General Rules (page 10)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=13",
  },
  {
    key: "right-turn-no-swing",
    quote:
      "On right turns, avoid swinging wide to the left before turning " +
      "to make the turn. If you swing wide, the driver behind you may " +
      "think you are changing lanes or going to turn left and may try " +
      "to pass you on the right.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "General Rules (page 10)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=13",
  },
  {
    key: "left-turn-corner",
    quote:
      "When making a left turn, avoid cutting the corner so sharply " +
      "that you run into someone approaching from the left.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "General Rules (page 11)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=14",
  },
  {
    key: "multiple-turn-lanes",
    quote:
      "Multiple lanes turning-If there are signs or lane markings " +
      "that allow for two or more turning lanes, stay in your lane " +
      "during the turn.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "General Rules (page 11)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=14",
  },
  {
    key: "row-law-says-yield",
    quote:
      "The law says who must yield the right of way; it does not give " +
      "anyone the right-of-way. You must do everything you can to " +
      "prevent striking a pedestrian or another vehicle, regardless " +
      "of the circumstances.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Right-of-Way (page 11)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=14",
  },
  {
    key: "row-always-pedestrian",
    quote:
      "You must always yield to a pedestrian, even if the pedestrian " +
      "is not obeying traffic controls.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Right-of-Way (page 11)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=14",
  },
  {
    key: "row-sidewalk",
    quote:
      "Drivers crossing a sidewalk entering or exiting a driveway, " +
      "alley or parking lot must yield to pedestrians. It is illegal " +
      "to drive on a sidewalk except to cross it.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Right-of-Way (page 11)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=14",
  },
  {
    key: "white-cane-law",
    quote:
      "The White Cane Law, 28-7-1 NMSA (1978) enables persons who are " +
      "blind, visually impaired, or who have other physical " +
      "disabilities access to all roads and sidewalks.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Right-of-Way (page 11)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=14",
  },
  {
    key: "row-left-turn",
    quote:
      "Drivers turning left must yield to oncoming vehicles going " +
      "straight-ahead.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Right-of-Way (page 11)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=14",
  },
  {
    key: "row-traffic-circle",
    quote:
      "Drivers entering a traffic circle or rotary must yield to " +
      "drivers already in the circle.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Right-of-Way (page 11)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=14",
  },
  {
    key: "row-uncontrolled",
    quote:
      "At an intersection where there is no stop sign, yield sign or " +
      "traffic signal, drivers must yield to vehicles coming from the " +
      "right.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Right-of-Way (page 11)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=14",
  },
  {
    key: "row-four-way-stop",
    quote:
      "At a 4-way stop, the driver reaching the intersection first, " +
      "goes first (after coming to a complete stop). If more than one " +
      "vehicle arrives at the same time, the vehicle on the right " +
      "goes first.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Right-of-Way (page 11)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=14",
  },
  {
    key: "row-driveway",
    quote:
      "Drivers entering a road from a driveway, alley or roadside " +
      "must yield to vehicles already on the main road.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Right-of-Way (page 11)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=14",
  },
  {
    key: "row-block-intersection",
    quote:
      "Drivers may not enter an intersection unless they can get " +
      "through it without having to stop. You should wait until " +
      "traffic ahead clears so that you are not blocking the " +
      "intersection.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Right-of-Way (page 11)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=14",
  },
  {
    key: "row-overtaking",
    quote:
      "Drivers overtaking a vehicle traveling in the same direction " +
      "must yield to that vehicle, even if the vehicle is slowing or " +
      "coming to a stop.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Right-of-Way (page 12)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=15",
  },
  {
    key: "row-emergency-vehicle",
    quote:
      "You must yield the right-of-way to a police vehicle, fire " +
      "engine, ambulance or other emergency vehicle using a siren, " +
      "air horn or a red or blue flashing light. Pull over to the " +
      "right edge of the road or as near to the right as possible " +
      "when you see or hear an emergency vehicle approaching from any " +
      "direction.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Right-of-Way (page 12)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=15",
  },
  {
    key: "row-emergency-intersection",
    quote:
      "If you are in an intersection, drive through the intersection " +
      "before you pull over.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Right-of-Way (page 12)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=15",
  },
  {
    key: "school-bus-stop",
    quote:
      "You must stop for a school bus that is stopped with its red " +
      "lights flashing whether it is on your side of the road, the " +
      "opposite side of the road or at an intersection you are " +
      "approaching.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Right-of-Way (page 12)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=15",
  },
  {
    key: "school-bus-median",
    quote:
      "You are not required to stop if the bus is traveling towards " +
      "you and the roadway is separated by a median or other physical " +
      "barrier.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Right-of-Way (page 12)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=15",
  },
  {
    key: "school-bus-after",
    quote:
      "After the school bus red lights have stopped flashing, watch " +
      "for children along the side of the road and do not proceed " +
      "until they have completely left the roadway and it is safe to " +
      "proceed.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Right-of-Way (page 12)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=15",
  },
  {
    key: "row-trains",
    quote:
      "You must yield the right-of-way to trains crossing the " +
      "roadway.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Right-of-Way (page 12)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=15",
  },
  {
    key: "one-way-streets",
    quote:
      "The State has the right to turn any public road into a one-way " +
      "road. If they do this, they must post signs that tell drivers " +
      "it is one-way. You may only drive on these roads in the " +
      "direction the sign tells you to drive.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "One-Way Streets and Circles (page 12)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=15",
  },
  {
    key: "traffic-circle-right",
    quote:
      "When you drive around a \"traffic circle\" you must drive on the " +
      "right side of the island.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "One-Way Streets and Circles (page 12)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=15",
  },
  {
    key: "speed-obey",
    quote:
      "Everyone who operates a motor vehicle must obey all speed " +
      "limits. Your vehicle control is affected by the speed at which " +
      "you drive.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Speed Limits (page 12)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=15",
  },
  {
    key: "speed-school-zone",
    quote: "15 mph within a school zone, with a posted speed limit",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Speed Limits (page 12)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=15",
  },
  {
    key: "speed-business",
    quote:
      "30 mph in business or residential areas, unless posted " +
      "otherwise",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Speed Limits (page 12)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=15",
  },
  {
    key: "speed-highways",
    quote: "55 mph on public highways, unless posted otherwise",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Speed Limits (page 12)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=15",
  },
  {
    key: "speed-interstate",
    quote: "75 mph on rural interstate highways, unless, posted otherwise",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Speed Limits (page 12)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=15",
  },
  {
    key: "speed-minimum",
    quote:
      "No one should drive at a speed less than the minimum posted " +
      "speed limit. If no minimum is posted, drive so that you do not " +
      "interfere with regular traffic flow.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Speed Limits (page 12)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=15",
  },
  {
    key: "speed-slower-right",
    quote:
      "You should travel on the right- New Mexico Driver Manual 13 " +
      "hand side of the road when your driving speed is slower than " +
      "other vehicles.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Speed Limits (page 12)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=0",
  },
  {
    key: "speed-adjust",
    quote:
      "Speed should be adjusted for adverse conditions and for the " +
      "type of vehicle and to avoid accidents.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Speed Limits (page 13)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=16",
  },
  {
    key: "parking-hazard",
    quote:
      "Drivers are responsible for making sure that their vehicle is " +
      "not a hazard when it is parked. Whenever you park, be sure it " +
      "is in a place that is (1) far enough from any travel lane to " +
      "avoid interfering with traffic and (2) visible to vehicles " +
      "approaching from either direction.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Parking (page 13)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=16",
  },
  {
    key: "parking-brake",
    quote:
      "Always set your parking brake when you park. Leave the vehicle " +
      "in gear if it has a manual transmission or in \"park\" if it has " +
      "an automatic transmission.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Parking (page 13)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=16",
  },
  {
    key: "parking-door",
    quote:
      "Check traffic before you open the door. Get out of the vehicle " +
      "on the curb side if you can. If you have to use the street " +
      "side, check traffic before you get out.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Parking (page 13)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=16",
  },
  {
    key: "parking-keys",
    quote:
      "Never leave the ignition keys in a parked vehicle. It is a " +
      "good habit to lock the doors whenever you leave your vehicle.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Parking (page 13)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=16",
  },
  {
    key: "parking-hill",
    quote:
      "When you park on a hill, turn your wheels sharply towards the " +
      "side of the road or curb. This way, if your vehicle starts to " +
      "roll downhill, it will roll away from traffic.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Parking (page 13)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=16",
  },
  {
    key: "no-park-signal",
    quote: "within 30 ft. of a traffic signal, stop sign or yield sign,",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Parking - No-Parking Zones (page 13)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=16",
  },
  {
    key: "no-park-hydrant",
    quote: "within 15 ft. of a fire hydrant,",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Parking - No-Parking Zones (page 13)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=16",
  },
  {
    key: "no-park-railroad",
    quote: "within 50 ft. of a railroad crossing,",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Parking - No-Parking Zones (page 13)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=16",
  },
  {
    key: "no-park-curb-18",
    quote: "more than 18 in. from the curb,",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Parking - No-Parking Zones (page 13)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=16",
  },
  {
    key: "no-park-fire-station",
    quote:
      "within 20 ft. of a fire station driveway on the same side of " +
      "the street or within 75 ft. of a driveway on the other side of " +
      "the street,",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Parking - No-Parking Zones (page 13)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=16",
  },
  {
    key: "no-park-bridge",
    quote: "on a bridge or overpass or in a tunnel or underpass,",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Parking - No-Parking Zones (page 13)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=16",
  },
  {
    key: "no-park-double",
    quote: "on the road side of a parked vehicle (double parking),",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Parking - No-Parking Zones (page 13)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=16",
  },
  {
    key: "curb-colors",
    quote:
      "white-indicates that only short stops are permitted, " +
      "yellow-indicates a loading zone or some other restriction. " +
      "red-indicates a fire zone with no parking or standing " +
      "permitted. blue-indicates handicap parking only.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Parking - Curb Colors (page 14)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=17",
  },
  {
    key: "points-twelve",
    quote:
      "If a driver has twelve or more points within a twelve-month " +
      "period, their driver's license will be suspended for one year.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Violations (page 14)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=17",
  },
  {
    key: "points-no-point-offenses",
    quote:
      "Other traffic violations (driving without insurance, or " +
      "driving without vehicle registration) do not carry points; " +
      "instead, these types of offenses will require the driver to " +
      "appear in court.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Traffic Violations (page 14)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=17",
  },
  {
    key: "steering-hands",
    quote:
      "Imagining the steering wheel is a face on a clock. One " +
      "balanced position for steering control is at the 10 o'clock " +
      "and 2 o'clock positions. Some drivers prefer placing their " +
      "hands at 9 and 3 o'clock.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Basic Driving - Steering (page 14)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=17",
  },
  {
    key: "steering-hand-over-hand",
    quote:
      "When turning sharp corners, turn the steering wheel using the " +
      "\"hand-over-hand\" technique. When you complete a turn, " +
      "straighten out the steering wheel by hand. Letting it slip " +
      "through your fingers could be dangerous.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Basic Driving - Steering (page 15)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=18",
  },
  {
    key: "stopping-suddenly",
    quote:
      "Stopping suddenly is dangerous and usually indicates a driver " +
      "who is not paying attention.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Basic Driving - Stopping (page 15)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=18",
  },
  {
    key: "look-ten-seconds",
    quote:
      "Safer drivers tend to look at least 10 seconds ahead of their " +
      "vehicle. In the city, 10 seconds is about one block.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Scanning - Look ahead (page 15)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=18",
  },
  {
    key: "intersections-definition",
    quote:
      "Intersections are any place where traffic merges or crosses. " +
      "They include: cross streets, side streets, driveways and " +
      "shopping center or parking lot entrances.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Scanning - Intersections (page 16)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=19",
  },
  {
    key: "intersection-look-both",
    quote:
      "Before you enter an intersection, look to both the left and " +
      "right for approaching vehicles and/or crossing pedestrians.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Scanning - Intersections (page 16)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=19",
  },
  {
    key: "left-turn-gap",
    quote:
      "Before you turn left across oncoming traffic, look for a safe " +
      "gap in the traffic. Look to the street you are turning into to " +
      "make sure that no vehicles or pedestrians are in your path, " +
      "leaving you stranded in the path of oncoming traffic.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Scanning - Intersections (page 16)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=19",
  },
  {
    key: "right-on-red-unless",
    quote: "You may turn right on red unless prohibited.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Scanning - Intersections (page 16)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=19",
  },
  {
    key: "blocked-view-edge",
    quote:
      "If you were stopped and your view of a cross street is " +
      "blocked, edge forward slowly until you can see.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Scanning - Intersections (page 16)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=19",
  },
  {
    key: "rr-slow-and-look",
    quote:
      "As you approach any railroad crossing slow down and look up " +
      "and down the tracks to make sure a train is not coming.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Scanning - Railroad crossings (page 16)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=19",
  },
  {
    key: "rr-second-track",
    quote:
      "At crossings with more than one track, wait until the passing " +
      "train is well down the track before starting to cross. Another " +
      "train may be hidden by the one that just passed.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Scanning - Railroad crossings (page 16)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=19",
  },
  {
    key: "blind-spots",
    quote:
      "Look over your shoulder in the direction you plan to move. Be " +
      "sure no one is near the rear corners of your vehicle. These " +
      "areas are called \"blind spots\" because you cannot see them " +
      "through your mirrors. You must turn your head and look to see " +
      "vehicles in your blind spot.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Scanning - When changing lanes (page 17)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=20",
  },
  {
    key: "backing-look-behind",
    quote:
      "Place your right arm on the back of the seat and turn around " +
      "so that you can look directly through the rear window. Do not " +
      "depend on your rearview or side mirrors, as you cannot see " +
      "directly behind your vehicle.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Scanning - When you back up (page 17)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=20",
  },
  {
    key: "backing-check-first",
    quote:
      "Check behind your vehicle before you get in. Children or small " +
      "objects cannot be seen from the driver's seat.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Scanning - When you back up (page 17)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=20",
  },
  {
    key: "high-beams",
    quote:
      "Use your high beams whenever there are no oncoming vehicles. " +
      "High beams let you see twice as far as low beams.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Use Your Lights (page 18)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=21",
  },
  {
    key: "dim-one-block",
    quote:
      "Dim your high beams whenever you come within about a one-block " +
      "distance of an oncoming vehicle.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Use Your Lights (page 18)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=21",
  },
  {
    key: "low-beams-200",
    quote:
      "Use your low beams within 200 feet when following another " +
      "vehicle or when in heavy traffic.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Use Your Lights (page 18)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=21",
  },
  {
    key: "low-beams-fog",
    quote:
      "Use the low beams in fog or when it is snowing or raining " +
      "hard. Light from high beams will reflect back, causing glare " +
      "and making it more difficult to see ahead.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Use Your Lights (page 18)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=21",
  },
  {
    key: "parking-lights-only",
    quote:
      "Do not drive at any time with only your parking lights on. " +
      "Parking lights are for parking only.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Use Your Lights (page 18)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=21",
  },
  {
    key: "wipers-headlights",
    quote: "Remember, if you turn on your wipers, turn on your headlights.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Letting Others Know You Are There (page 18)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=21",
  },
  {
    key: "headlights-500",
    quote:
      "Whenever driving and lights are necessary, use your headlights " +
      "within at least 500 feet when approaching another car. Parking " +
      "lights are for parked vehicles only.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Letting Others Know You Are There (page 18)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=21",
  },
  {
    key: "horn-light-tap",
    quote:
      "If there is no immediate danger, a light tap on the horn " +
      "should be all you need.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Letting Others Know You Are There (page 18)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=21",
  },
  {
    key: "emergency-flashers",
    quote: "Turn on your emergency flashers to show you are having trouble",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Letting Others Know You Are There (page 19)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=22",
  },
  {
    key: "never-stand-roadway",
    quote:
      "Never stand in the roadway. Do not try to change a tire if it " +
      "means you have to be in a traffic lane.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Letting Others Know You Are There (page 19)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=22",
  },
  {
    key: "blind-spot-large-vehicle",
    quote:
      "Never stay along side a large vehicle such as a truck or bus. " +
      "These vehicles have large blind spots and it hard for drivers " +
      "of large vehicles to see you.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Letting Others Know You Are There (page 19)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=22",
  },
  {
    key: "signal-when",
    quote:
      "You should use your turn signals before you change lanes, turn " +
      "right or left, merge into traffic or park.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Letting Others Know What You Are Doing (page 19)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=22",
  },
  {
    key: "signal-100-feet",
    quote: "Signal at least 100 feet before you make your turn.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Letting Others Know What You Are Doing (page 19)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=22",
  },
  {
    key: "signal-off-after",
    quote:
      "After you have made a turn or lane change, make sure your turn " +
      "signal is off.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Letting Others Know What You Are Doing (page 19)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=22",
  },
  {
    key: "brake-lights",
    quote:
      "Signal when you slow down-Your brake lights let people know " +
      "that you are slowing down.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Letting Others Know What You Are Doing (page 20)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=23",
  },
  {
    key: "speed-more-distance",
    quote:
      "The faster your vehicle is going, the more distance it will " +
      "take to turn, slow or stop.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Letting Others Know What You Are Doing (page 20)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=23",
  },
  {
    key: "gravel-traction",
    quote:
      "You do not have as much traction on gravel or dirt roads as " +
      "you do on concrete or asphalt roads. When driving on gravel or " +
      "dirt, you must slow down.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Adjusting to Road Conditions (page 20)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=23",
  },
  {
    key: "curves-slow-before",
    quote:
      "Always slow down before you enter the curve so you do not have " +
      "to brake in the curve. Braking in a curve can cause the " +
      "vehicle to skid.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Adjusting to Road Conditions - Curves (page 20)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=23",
  },
  {
    key: "slippery-numbers",
    quote:
      "On a wet road you should reduce your speed about 10 mph. On " +
      "packed snow you should cut your speed in half. Use snow tires " +
      "or chains when the road has snow on it. On ice, you must slow " +
      "to a crawl.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Adjusting to Road Conditions - Slippery roads (page 20)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=23",
  },
  {
    key: "shady-spots-icy",
    quote:
      "On cold, wet days shady spots can be icy. These areas freeze " +
      "first and dry out last.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Adjusting to Road Conditions - Slippery roads (page 20)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=23",
  },
  {
    key: "bridges-icy",
    quote:
      "Overpasses and other types of bridges can have icy spots. The " +
      "pavement on bridges can be icy even when other pavement is " +
      "not.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Adjusting to Road Conditions - Slippery roads (page 20)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=23",
  },
  {
    key: "rain-hot-day",
    quote:
      "If it starts to rain on a hot day, pavement can be very " +
      "slippery for the first few minutes.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Adjusting to Road Conditions - Slippery roads (page 20)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=23",
  },
  {
    key: "hydroplaning",
    quote:
      "When it is raining or the road is wet, most tires have good " +
      "traction up to about 35 mph. However as you go faster, your " +
      "tires will start to ride up on the water, like water skis. " +
      "This is called \"hydroplaning.\" In a heavy rain, your tires can " +
      "lose all traction with the road at about 50 mph.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Adjusting to Road Conditions - Water on the roadway (page 20)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=23",
  },
  {
    key: "hydroplaning-response",
    quote:
      "Ease your foot off the gas pedal. Keep the steering wheel " +
      "straight. Only try to turn if it's an emergency. If you must " +
      "turn, do it slowly, or you will cause your vehicle to skid. Do " +
      "not try to stop or turn until your tires are gripping the road " +
      "again.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Adjusting to Road Conditions - Water on the roadway (page 21)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=24",
  },
  {
    key: "wildlife-species",
    quote:
      "Watch out for these large game animals: deer, elk, pronghorn " +
      "antelope, black bears, and cougars.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Adjusting to Road Conditions - Wildlife on the roadway (page 21)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=24",
  },
  {
    key: "wildlife-where",
    quote:
      "Watch for elk in the western three-quarters of the state. " +
      "Watch for antelope in the eastern part of the state or in open " +
      "plains. And keep an eye out for black bears and cougars in the " +
      "mountains.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Adjusting to Road Conditions - Wildlife on the roadway (page 21)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=24",
  },
  {
    key: "wildlife-dawn-dusk",
    quote:
      "Be especially watchful for wildlife at dawn, dusk, and in the " +
      "first few hours after darkness falls. Many animals are most " +
      "active at these times.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Driving with Wildlife in Mind (page 21)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=24",
  },
  {
    key: "wildlife-more-than-one",
    quote: "Remember that where one animal is crossing, there may be more.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "To Avoid Hurting an Animal (page 21)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=24",
  },
  {
    key: "keep-pace",
    quote:
      "Going much slower than other vehicles can be just as bad as " +
      "speeding. It tends to make vehicles bunch up behind you and " +
      "causes the other traffic to pass you. If vehicles are piled-up " +
      "behind you, pull over when safe to do so and let them pass.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Adjusting to Traffic (page 21)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=24",
  },
  {
    key: "merge-at-speed",
    quote:
      "When you merge with traffic, try to enter at the same speed " +
      "that traffic is moving. High-speed roadways generally have " +
      "ramps to give you time to build-up your speed. Use the ramp to " +
      "reach the speed of other vehicles before you pull onto the " +
      "road.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Adjusting to Traffic (page 21)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=24",
  },
  {
    key: "ramp-do-not-stop",
    quote:
      "Do not drive to the end of the ramp and stop or you will not " +
      "have enough room to get up to the speed of traffic.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Adjusting to Traffic (page 21)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=24",
  },
  {
    key: "exit-ramp",
    quote:
      "If the road you are traveling has exit ramps, do not slow down " +
      "until you move onto the exit ramp.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Adjusting to Traffic (page 22)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=25",
  },
  {
    key: "farm-tractors-25",
    quote:
      "Farm tractors, animal-drawn vehicles and roadway maintenance " +
      "vehicles usually go 25 mph or less. These vehicles should have " +
      "a slow-moving vehicle decal (an orange triangle) on the back.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Adjusting to Traffic - Slow moving traffic (page 22)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=25",
  },
  {
    key: "trouble-spots",
    quote:
      "Wherever people or traffic gather, your room to maneuver is " +
      "limited. You need to lower your speed to have time to react in " +
      "a crowded space.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Adjusting to Traffic - Trouble spots (page 22)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=25",
  },
  {
    key: "stop-distance-50",
    quote:
      "At 50 mph, it can take about 400 feet to react to something " +
      "you see and bring your vehicle to a stop. That is about the " +
      "length of a city block.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "How Well Can You See? (page 22)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=25",
  },
  {
    key: "stop-distance-30",
    quote:
      "At 30 mph, it can take about 200 feet to stop. That is almost " +
      "half a city block in length.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "How Well Can You See? (page 22)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=25",
  },
  {
    key: "see-400-feet",
    quote:
      "If you cannot see 400 feet ahead, it means you may not be " +
      "driving safely at 50 mph. If you cannot see 200 feet ahead, " +
      "you may not be driving safely at 30 mph.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "How Well Can You See? (page 22)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=25",
  },
  {
    key: "headlight-range",
    quote:
      "You should drive at a speed that allows you to stop within " +
      "this distance or about 50 mph.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "How Well Can You See? - Darkness (page 23)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=26",
  },
  {
    key: "heavy-rain-200",
    quote:
      "In a very heavy rain, snowstorm or thick fog, you may not be " +
      "able to see much more than 200 feet ahead. When you cannot see " +
      "any farther than that, you cannot safely drive faster than 30 " +
      "mph.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "How Well Can You See? - Rain, fog or snow (page 23)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=26",
  },
  {
    key: "downpour-pull-off",
    quote:
      "In a very heavy downpour, you may not be able to see well " +
      "enough to drive. If this happens, pull off the road in a safe " +
      "place and wait until it clears.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "How Well Can You See? - Rain, fog or snow (page 23)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=26",
  },
  {
    key: "parked-vehicles-view",
    quote:
      "Vehicles parked along the side of the road may block your " +
      "view. People may be ready to get out of a vehicle or walk out " +
      "from between parked vehicles. Give parked vehicles as much " +
      "room as you can.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "How Well Can You See? - Parked vehicles (page 23)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=26",
  },
  {
    key: "four-second-sight",
    quote:
      "To tell if you are driving too fast for conditions, use the " +
      "\"Four Second Sight Distance Rule.\" Pick out a stationary " +
      "object as far ahead as you can clearly see (e.g. a sign or a " +
      "telephone pole). Start counting \"one-one-thousand, " +
      "two-one-thousand, three-one-thousand, four-one-thousand.\" If " +
      "you reach the object before you finish saying " +
      "\"four-one-thousand,\" you need to slow down. You are going too " +
      "fast for your sight-distance.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "How Well Can You See? - Sight-distance rule (page 23)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=26",
  },
  {
    key: "overdriving-headlights",
    quote:
      "You should also use the \"Four Second Sight Distance Rule\" at " +
      "night to make sure you are not \"over-driving your headlights.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "How Well Can You See? - Sight-distance rule (page 23)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=26",
  },
  {
    key: "three-second-rule",
    quote:
      "Rear-end crashes are very common. They are caused from drivers " +
      "following too closely to be able to stop before hitting the " +
      "vehicle ahead when it suddenly stops. There is an easy way to " +
      "tell if you are following too closely. It is called the " +
      "\"three-second rule,\" and it works at any speed.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing Space - Space Ahead (page 23)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=26",
  },
  {
    key: "three-second-count",
    quote:
      "Count the seconds it takes you to reach the same spot. " +
      "(\"One-thousand-one, one-thousand-two, one-thousand-three",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing Space - Space Ahead (page 24)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=27",
  },
  {
    key: "four-second-situations",
    quote:
      "There are situations where you need more space in front of " +
      "your vehicle. For example, you may need a four second " +
      "following distance to be safe; (1) on slippery roads, (2) when " +
      "following motorcycles, (3) when you have a heavy load or are " +
      "pulling a trailer, (4) when following emergency vehicles, (5) " +
      "when approaching railroad crossings or, (6) when stopped on a " +
      "hill or incline.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing Space - Space Ahead (page 24)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=27",
  },
  {
    key: "space-behind",
    quote:
      "you can help keep the driver at a safe distance by keeping a " +
      "steady speed and signaling in advance when you have to slow " +
      "down or turn.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing Space - Space Behind (page 24)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=27",
  },
  {
    key: "space-to-side",
    quote:
      "Keep extra space between your vehicle and parked cars. Give " +
      "extra space to pedestrians or bicycles, especially children.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing Space - Space to the Side (page 24)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=27",
  },
  {
    key: "four-second-merge",
    quote:
      "Anytime you want to merge with other traffic, you need a gap " +
      "of about four seconds.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing Space - Space to Merge (page 24)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=27",
  },
  {
    key: "cross-lanes-one-at-a-time",
    quote: "If you want to cross several lanes, take them one at a time.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing Space - Space to Merge (page 24)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=27",
  },
  {
    key: "cross-traffic-gap",
    quote:
      "When you cross traffic, you need a large enough gap to get all " +
      "the way across the road. When you enter traffic, you need " +
      "enough space to first turn and then to get up to speed.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing Space - Space to Cross or Enter (page 24)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=27",
  },
  {
    key: "green-light-blocked",
    quote:
      "Even if you have the green light, do not start across the " +
      "intersection if there are vehicles blocking your way.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing Space - Space to Cross or Enter (page 24)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=27",
  },
  {
    key: "pass-one-at-a-time",
    quote:
      "Do not count on having enough time to pass several vehicles at " +
      "once. Be safe. As a general rule only pass one vehicle at a " +
      "time.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing Space - Space to Pass (page 24)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=27",
  },
  {
    key: "pass-ten-seconds",
    quote:
      "At a speed of 55 mph, you need about 10 seconds to pass. That " +
      "means you need a 10 second gap in oncoming traffic and " +
      "sight-distance to pass.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing Space - Space to Pass (page 25)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=28",
  },
  {
    key: "pass-hills-curves",
    quote:
      "You have to be able to see at least one-third of a mile or " +
      "about 10 seconds ahead. Anytime your view is blocked by a " +
      "curve or a hill, you should assume that there is an oncoming " +
      "vehicle just out of sight. Therefore you should treat a curve " +
      "or a hill as you do an oncoming vehicle. This means you should " +
      "not start to pass if you are within one-third of a mile of a " +
      "hill or curve.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing Space - Space to Pass (page 25)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=28",
  },
  {
    key: "pass-intersections",
    quote:
      "It is dangerous to pass where a vehicle is likely to enter or " +
      "cross the road. Such places include intersections, railroad " +
      "crossings and shopping center entrances.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing Space - Space to Pass (page 25)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=28",
  },
  {
    key: "pass-space-to-return",
    quote:
      "Do not pass unless you have enough space to return to the " +
      "driving lane. Do not count on other drivers to make room for " +
      "you.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing Space - Space to Pass (page 25)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=28",
  },
  {
    key: "pass-railroad",
    quote: "Do not pass if there is a railroad grade crossing ahead.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing Space - Space to Pass (page 25)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=28",
  },
  {
    key: "pass-both-headlights",
    quote:
      "When you can see both headlights of the vehicle you just " +
      "passed in your rear-view mirror, it is safe to return to the " +
      "driving lane.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing Space - Space to Pass (page 25)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=28",
  },
  {
    key: "bicycle-five-feet",
    quote:
      "Keep a safe distance when passing a bicyclist, trying for at " +
      "least five feet",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing the Road - Bicycles Are Vehicles (page 25)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=28",
  },
  {
    key: "bicycle-whole-lane",
    quote:
      "While bicycles should usually stay on the right side of the " +
      "roadway, they are legally allowed to take the whole lane by " +
      "riding in the center of the traffic lane when necessary.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing the Road - Bicycles Are Vehicles (page 25)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=28",
  },
  {
    key: "bicycle-no-sudden-right",
    quote:
      "Instead, slow down and merge behind the bicyclist before " +
      "turning.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing the Road - Bicycles Are Vehicles (page 26)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=29",
  },
  {
    key: "bicycle-helmet",
    quote: "Adults should, and minors must, wear a well-fitting helmet.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing the Road - Bicycles Are Vehicles (page 26)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=29",
  },
  {
    key: "sharrows",
    quote:
      "\"Sharrows\" are \"shared lane pavement markings.\" They are " +
      "painted on the pavement when a road is too narrow for " +
      "side-by-side road sharing with slower vehicles. They indicate " +
      "that bicyclists are encouraged to take the whole travel lane " +
      "and that motorists shall yield to the bicyclist as needed.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing the Road - What are sharrows? (page 26)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=29",
  },
  {
    key: "truck-stopping",
    quote:
      "An average car going 55 mph can stop in about 400 feet. But a " +
      "large truck could take almost 800 feet to stop.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing the Road - Large Tucks and RVs (page 27)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=30",
  },
  {
    key: "truck-wide-turns",
    quote:
      "Big trucks and RVs need more room to make turns. They often " +
      "swing wide to make a right turn.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing the Road - Large Tucks and RVs (page 27)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=30",
  },
  {
    key: "truck-no-zone",
    quote:
      "These are called their \"blind spots\" or the \"NO ZONE.\" Don't " +
      "drive in a trucker's blind spots. You might be in the way if " +
      "the trucker swerves to avoid a hazard. In general, if you " +
      "can't see the driver in the side mirror, the driver can't see " +
      "you.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing the Road - Trucker's Blind Spots (page 27)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=30",
  },
  {
    key: "truck-pass-left",
    quote:
      "Always pass a large truck or RV on the left side. After you " +
      "pass, move ahead of it. Don't stay in the driver's blind spot.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Sharing the Road - Large Tucks and RVs (page 27)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=30",
  },
  {
    key: "vision-standard",
    quote:
      "New Mexico requires that you pass a vision test before you get " +
      "a driver license. This test measures that you have at least " +
      "20/40 vision in at least one eye, with or without corrective " +
      "lenses.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Be in Shape to Drive - Vision (page 28)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=31",
  },
  {
    key: "night-glasses",
    quote:
      "Avoid using dark glasses or tinted contact lenses at night, " +
      "even if you think they help with glare. The problem is that " +
      "they cut down the light that you need to see clearly.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Be in Shape to Drive - Vision (page 28)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=31",
  },
  {
    key: "fatigue-effects",
    quote:
      "You cannot drive as safely when you are tired. You do not see " +
      "as well, nor are you as alert. It takes you more time to make " +
      "decisions and you do not always make good decisions.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Be in Shape to Drive - Fatigue (page 28)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=31",
  },
  {
    key: "fatigue-breaks",
    quote:
      "Take breaks. Stop every hour or so or when you need to. Walk " +
      "around, get some fresh air and have some coffee, soda or " +
      "juice. The few minutes spent on a rest break can save your " +
      "life.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Be in Shape to Drive - Fatigue (page 28)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=31",
  },
  {
    key: "fatigue-never-sleepy",
    quote:
      "Never drive if you are sleepy. It is better to stop and sleep " +
      "for a few hours than to take a chance thinking you can stay " +
      "awake.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Be in Shape to Drive - Fatigue (page 28)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=31",
  },
  {
    key: "alcohol-forty-percent",
    quote:
      "Alcohol is involved in about 40% of the traffic crashes in " +
      "which someone is killed. DO NOT DRINK AND DRIVE!",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Drinking and Driving (page 28)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=31",
  },
  {
    key: "alcohol-brain",
    quote:
      "Alcohol goes from your stomach into your blood and to all " +
      "parts of your body. It reaches your brain in 20 to 40 minutes.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Why is Drinking and Driving So Dangerous? (page 29)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=32",
  },
  {
    key: "alcohol-judgment",
    quote:
      "Alcohol puts good judgment on hold. You do not know when you " +
      "have had too much to drink until it is too late.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Why is Drinking and Driving So Dangerous? (page 29)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=32",
  },
  {
    key: "alcohol-no-safe-amount",
    quote:
      "THERE IS NO SAFE AMOUNT OF ALCOHOL! Even one drink of alcohol " +
      "can affect your driving. With two or more drinks in your " +
      "bloodstream you are impaired and could be arrested.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Effects of Alcohol (page 29)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=32",
  },
  {
    key: "standard-drink",
    quote:
      "An alcohol drink is 1 1/2 oz. of 80-proof liquor (one shot " +
      "glass) straight or with a mixer, 12 oz. of beer (a regular " +
      "size can, bottle, or glass) or a 5 oz. glass of wine.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Effects of Alcohol (page 29)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=32",
  },
  {
    key: "one-drink-per-hour",
    quote:
      "Your body gets rid of one alcoholic drink per hour. There is " +
      "no way to sober up quickly. Coffee, fresh air, exercise or " +
      "cold showers will not help. Time is the only thing that will " +
      "sober you up.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Effects of Alcohol (page 29)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=32",
  },
  {
    key: "bac-limits",
    quote:
      "You can be arrested for driving with a blood alcohol content " +
      "(BAC) of .08% or more. In New Mexico, if you are under 21, you " +
      "also can be arrested for BAC at .02%.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Alcohol and The Law (page 29)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=32",
  },
  {
    key: "refusal-one-year",
    quote:
      "If a police or traffic officer asks you to take a BAC test and " +
      "refuse to do so, you can lose your driver license for one " +
      "year.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Alcohol and The Law (page 29)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=32",
  },
  {
    key: "dwi-first-conviction",
    quote:
      "If you are found guilty of DWI and it is your first " +
      "conviction, you will pay stiff fines and court costs, and you " +
      "could be sentenced to jail. You will also be ordered to " +
      "treatment and to install an ignition interlock device on your " +
      "vehicle.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Alcohol and The Law (page 29)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=32",
  },
  {
    key: "dwi-record-25-years",
    quote:
      "Any DWI conviction will remain on your driving record for " +
      "twenty-five years.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Alcohol and The Law (page 29)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=32",
  },
  {
    key: "other-drugs",
    quote:
      "Driving under the influence of any drug that makes you drive " +
      "unsafely is against the law.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Other Drugs And Driving (page 29)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=32",
  },
  {
    key: "drugs-label",
    quote:
      "If you are driving, check the label before you take a drug for " +
      "warnings about its effect.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Other Drugs And Driving (page 30)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=33",
  },
  {
    key: "drugs-with-alcohol",
    quote:
      "Never drink alcohol while you are taking other drugs. These " +
      "drugs could multiply the effects of alcohol or have additional " +
      "effects of their own.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Other Drugs And Driving (page 30)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=33",
  },
  {
    key: "health-reporting",
    quote:
      "In New Mexico drivers who have epilepsy, diabetes, adverse " +
      "heart conditions and other medical problems are required to " +
      "send the Motor Vehicle Division periodic medical statements " +
      "signed by their physicians.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Health (page 30)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=33",
  },
  {
    key: "epilepsy-six-months",
    quote:
      "People with epilepsy should have frequent check-ups, practice " +
      "careful management of medicine, and be stable and seizure free " +
      "for a 6-month period before being issued a driver's license.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Health (page 30)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=33",
  },
  {
    key: "emotions",
    quote:
      "You may not be able to drive well if you are overly worried, " +
      "excited, afraid, angry or depressed.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Emotions (page 30)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=33",
  },
  {
    key: "cell-phone",
    quote:
      "Also remember that it is illegal in some towns to use a cell " +
      "phone while driving unless you are using a hands-free device.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Cellular Phone Usage (page 30)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=33",
  },
  {
    key: "brake-failure",
    quote:
      "Pump the brake pedal several times. This will often build up " +
      "enough brake pressure to allow you to stop.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Emergencies - Brake Failure (page 31)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=34",
  },
  {
    key: "brake-failure-parking-brake",
    quote:
      "If that does not work, use the parking brake. Pull on the " +
      "parking brake handle slowly so you will not lock the rear " +
      "wheels and cause a skid.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Emergencies - Brake Failure (page 31)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=34",
  },
  {
    key: "tire-blowout",
    quote:
      "Hold the steering wheel tightly and keep the vehicle going " +
      "straight. Slow down gradually. Take your foot off the gas " +
      "pedal and use the brakes lightly.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Emergencies - Tire Blowout (page 31)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=34",
  },
  {
    key: "power-failure",
    quote:
      "Keep a strong grip on the steering wheel. Be aware that the " +
      "steering may be difficult to turn, but you can turn it.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Emergencies - Power Failure (page 31)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=34",
  },
  {
    key: "headlight-failure",
    quote:
      "Try the headlight switch a few times. If that does not work, " +
      "put on the emergency flashers, turn signals or fog lights if " +
      "you have them.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Emergencies - Headlight Failure (page 31)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=34",
  },
  {
    key: "gas-pedal-sticks",
    quote: "Keep your eyes on the road. Quickly shift to neutral.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Emergencies - Gas Pedal Sticks (page 31)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=34",
  },
  {
    key: "collision-options",
    quote:
      "In avoiding a collision, drivers have three options: stop, " +
      "turn or speed up.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Avoiding Collisions (page 32)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=35",
  },
  {
    key: "abs-braking",
    quote:
      "Press on the brake pedal as hard as you can and keep pressing " +
      "on it. You might feel the brake pedal pushing back when the " +
      "ABS is working. Do not let-up on the brake pedal. The ABS " +
      "system will only work with the brake pedal pushed down.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Avoiding Collisions - Stopping Quickly (page 32)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=35",
  },
  {
    key: "no-abs-braking",
    quote:
      "Apply the brakes as hard as you can without locking them. If " +
      "the brakes lock-up, you will feel the vehicle start to skid. " +
      "Quickly let up on the brake pedal. As soon as the vehicle " +
      "stops skidding, push down on the brake pedal again. Keep doing " +
      "this until the vehicle has stopped.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Avoiding Collisions - Stopping Quickly (page 32)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=35",
  },
  {
    key: "turning-quicker",
    quote:
      "In most cases, you can turn the vehicle quicker than you can " +
      "stop it. You should consider turning in order to avoid a " +
      "collision.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Avoiding Collisions - Turning Quickly (page 32)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=35",
  },
  {
    key: "speeding-up-to-avoid",
    quote:
      "Sometimes it is best or necessary to speed up to avoid a " +
      "collision. This may happen when another vehicle is about to " +
      "hit you from the side or from behind and there is room to the " +
      "front of you to get out of danger. Be sure to slow down once " +
      "the danger has passed.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Avoiding Collisions - Speeding Up (page 32)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=35",
  },
  {
    key: "skid-cause",
    quote:
      "Skids are caused when the tires can no longer grip the road. " +
      "As you cannot control a vehicle when it is skidding, it is " +
      "best not to cause your vehicle to skid in the first place. " +
      "Skids are caused by drivers traveling too fast for conditions.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Dealing with Skids (page 33)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=36",
  },
  {
    key: "skid-stay-off-brake",
    quote:
      "Stay off the brake. Until the vehicle slows, your brakes will " +
      "not work and could cause you to skid more.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Dealing with Skids (page 33)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=36",
  },
  {
    key: "skid-steer",
    quote:
      "Turn the steering wheel in the direction you want the vehicle " +
      "to go. As soon as the vehicle begins to straighten out, turn " +
      "the steering wheel back the other way. If you do not do so, " +
      "your vehicle may swing around in the other direction and you " +
      "could start a new skid.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Dealing with Skids (page 33)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=36",
  },
  {
    key: "hit-from-rear",
    quote:
      "If your vehicle is hit from the rear, your body will be thrown " +
      "backwards. Press yourself against the back of your seat and " +
      "put your head against the head restraint.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Protect Yourself in Collisions (page 33)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=36",
  },
  {
    key: "hit-from-front",
    quote:
      "If your vehicle is about to be hit from the front it is " +
      "important to try and have a \"glancing blow\" rather than being " +
      "struck head on.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Protect Yourself in Collisions (page 33)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=36",
  },
  {
    key: "do-not-stop-at-accident",
    quote:
      "Do not stop at an accident unless you are involved or if " +
      "emergency help has not yet arrived.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Accidents and the Financial Responsibility Law (page 33)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=36",
  },
  {
    key: "never-drive-to-look",
    quote:
      "Never drive to the scene of an accident, fire or other " +
      "disaster just to look. You may block the way for police, " +
      "firefighters, ambulances, tow trucks and other rescue " +
      "vehicles.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Accidents and the Financial Responsibility Law (page 33)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=36",
  },
  {
    key: "must-stop",
    quote:
      "If you are involved in an accident you must stop. If you are " +
      "involved in an accident with a parked vehicle, you must try " +
      "and locate the owner.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Accidents and the Financial Responsibility Law (page 34)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=37",
  },
  {
    key: "accident-turn-off-ignition",
    quote:
      "Turn off the ignition of wrecked vehicles. Do not smoke around " +
      "wrecked vehicles. Fuel could have spilled and fire is a real " +
      "danger.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "At the accident scene (page 34)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=37",
  },
  {
    key: "accident-do-not-move-injured",
    quote:
      "Do not move the injured unless they are in a burning vehicle " +
      "or in other immediate danger of being hit by another vehicle. " +
      "Moving a person can make their injuries worse.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "If someone is injured (page 34)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=37",
  },
  {
    key: "accident-bleeding",
    quote:
      "If there is bleeding, apply pressure directly on the wound " +
      "with your hand or with a cloth. Even severe bleeding can " +
      "almost always be stopped or slowed by putting pressure on the " +
      "wound.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "If someone is injured (page 34)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=37",
  },
  {
    key: "accident-no-drink",
    quote: "Do not give injured persons anything to drink, not even water.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "If someone is injured (page 34)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=37",
  },
  {
    key: "accident-exchange",
    quote:
      "Exchange information with other drivers involved in the crash. " +
      "[Name, address, driver license number, vehicle information " +
      "(license plate, make, model and year of vehicle) and insurance " +
      "company and policy number if available.]",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Report the Accident (page 34)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=37",
  },
  {
    key: "accident-parked-note",
    quote:
      "Should the accident involve a parked vehicle, try to find the " +
      "owner. If you cannot, leave a note in a place where it can be " +
      "seen with information on how the owner can reach you and the " +
      "date and time of the accident.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Report the Accident (page 34)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=37",
  },
  {
    key: "insurance-required",
    quote:
      "Everyone who operates a motor vehicle in New Mexico must have " +
      "a motor vehicle liability insurance policy.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Financial Responsibility Law (66-5-205/208) - Motor Vehicle Insurance (page 34)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=37",
  },
  {
    key: "insurance-no-proof",
    quote:
      "Failure to have insurance could result in non-issuance or " +
      "suspension of your vehicle registration, and surrender of the " +
      "license plates, as well as possible criminal penalties.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Financial Responsibility Law (66-5-205/208) - Motor Vehicle Insurance (page 35)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=38",
  },
  {
    key: "mc-front-brake",
    quote:
      "The front brake is more powerful and can provide as much as " +
      "three-quarters of your total stopping power.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Motorcycles - Braking (page 35)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=38",
  },
  {
    key: "mc-both-brakes",
    quote:
      "Use both brakes every time you slow or stop. Using only the " +
      "rear brake for \"normal\" stops will not permit you to develop " +
      "the habit or skill of using the front brake properly in an " +
      "emergency.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Motorcycles - Braking (page 35)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=38",
  },
  {
    key: "mc-lane-sharing",
    quote:
      "Cars and motorcycles need a full lane to operate safely. Lane " +
      "sharing is usually prohibited.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Motorcycles - Lane Sharing (page 36)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=39",
  },
  {
    key: "mc-grease-strip",
    quote:
      "The center of a lane can be oily. It collects the drippings " +
      "from cars, particularly at intersections. This strip is " +
      "usually no more than two feet wide.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Motorcycles - Lane Positions (page 36)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=39",
  },
  {
    key: "mc-helmet-under-18",
    quote:
      "New Mexico Law requires all motorcycle drivers and passengers " +
      "under 18 years old to wear a helmet.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Motorcycles - Helmet Requirements (page 37)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=40",
  },
  {
    key: "mc-helmet-dot",
    quote:
      "Meets U.S. Department (DOT) standards. Helmets with labels " +
      "from the American National Standards institute (ANSI) or the " +
      "Snell Memorial Foundation give you and added assurance of " +
      "quality; 2) Fits snugly, all the way around; and 3) Has no " +
      "obvious defects such as cracks, loose padding or frayed " +
      "straps.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Motorcycles - Helmet Requirements (page 37)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=40",
  },
  {
    key: "mc-night",
    quote:
      "Open up a three second following distance and allow more " +
      "distance to pass and to be passed.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Motorcycles - Riding At Night (page 38)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=41",
  },
  {
    key: "mc-intersections",
    quote:
      "Over half of motorcycle/car collisions are caused by drivers " +
      "entering a rider's right-of-way. New Mexico Driver Manual 39 " +
      "Oncoming cars that turn left in front of you, and cars on side " +
      "streets that pull into your lane are the two biggest dangers.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Motorcycles - Intersections (page 38)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=0",
  },
  {
    key: "mc-eye-contact",
    quote:
      "There are no guarantees that others see you. Never count on " +
      "\"eye contact\" as a sign that a driver will yield. Too often, a " +
      "driver looks right at a motorcyclist and still fails to \"see\" " +
      "him. The only eyes that you can count on are your own. If a " +
      "car can enter your path, assume that it will.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Motorcycles - Intersections (page 38)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=42",
  },
  {
    key: "mc-staggered",
    quote:
      "The leader rides in the left side of the lane, while the " +
      "second rider stays one second behind in the right side of the " +
      "lane.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Motorcycles - Keep Your Distance (page 38)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=41",
  },
  {
    key: "mc-wobble",
    quote:
      "Close the throttle gradually to slow the motorcycle. Do no " +
      "apply the brakes; braking could make the wobble worse",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Motorcycles - Wobble (page 39)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=42",
  },
  {
    key: "mc-being-passed",
    quote:
      "When you are being passed from behind or by an oncoming " +
      "vehicle, stay in the center portion of your lane.",
    source: "New Mexico Driver Manual (New Mexico Motor Vehicle Division, Taxation and Revenue Department, version 11.19.19)",
    section: "Motorcycles - Being Passed (page 39)",
    url: "https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf#page=42",
  },
  {
    key: "st-speed-limits",
    quote:
      "No person shall drive a vehicle on a highway at a speed " +
      "greater than: (1) fifteen miles per hour on all highways when " +
      "passing a school while children are going to or leaving school " +
      "and when the school zone is properly posted; (2) thirty miles " +
      "per hour in a business or residence district; (3) fifty-five " +
      "miles per hour on a county road, as defined in Section " +
      "66-7-304 NMSA 1978, without a posted speed limit; (4) " +
      "seventy-five miles per hour; and",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-301 NMSA 1978, Speed regulation (chapter PDF page 642)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=642",
  },
  {
    key: "st-speed-control",
    quote:
      "In every event, speed shall be so controlled by the driver as " +
      "may be necessary: (1) to avoid colliding with a person, " +
      "vehicle or other conveyance on or entering the highway;",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-301 NMSA 1978, Speed regulation (chapter PDF page 642)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=642",
  },
  {
    key: "st-move-over",
    quote:
      "Upon approaching a stationary authorized emergency vehicle or " +
      "a recovery or repair vehicle displaying flashing emergency or " +
      "hazard lights, unless otherwise directed, the driver of a " +
      "vehicle shall: (1) if reasonably safe to do so, drive in a " +
      "lane not adjacent to the stationary vehicle, decrease the " +
      "speed of the vehicle to a speed that is reasonable and prudent " +
      "under the circumstances and proceed with caution; or",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-332 NMSA 1978, Operation of vehicles on approach of certain stationary vehicles (chapter PDF page 688)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=688",
  },
  {
    key: "st-move-over-not-safe",
    quote:
      "if it is not reasonably safe to drive in a lane not adjacent " +
      "to the stationary vehicle, decrease the speed of the vehicle " +
      "to a speed that is reasonable and prudent under the " +
      "circumstances, proceed with caution and be prepared to stop.",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-332 NMSA 1978, Operation of vehicles on approach of certain stationary vehicles (chapter PDF page 688)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=688",
  },
  {
    key: "st-emergency-approach",
    quote:
      "Upon the immediate approach of an authorized emergency vehicle " +
      "displaying flashing emergency lights or when the driver is " +
      "giving audible signal by siren, the driver of every other " +
      "vehicle shall yield the right of way and shall immediately " +
      "drive to a position parallel to, and as close as possible to, " +
      "the right-hand edge or curb of the roadway clear of any " +
      "intersection",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-332 NMSA 1978, Operation of vehicles on approach of moving authorized emergency vehicles (chapter PDF page 688)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=688",
  },
  {
    key: "st-school-bus-ten-feet",
    quote:
      "The driver of a vehicle upon approaching or overtaking from " +
      "either direction any school bus which has stopped on the " +
      "roadway, with special school bus signals in operation, for the " +
      "purpose of receiving or discharging any school children, shall " +
      "stop the vehicle at least ten feet before reaching the school " +
      "bus",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-347 NMSA 1978, Overtaking and passing school bus (chapter PDF page 707)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=707",
  },
  {
    key: "st-signal-100-feet",
    quote:
      "A signal of intention to turn right or left when required " +
      "shall be given continuously during not less than the last one " +
      "hundred feet traveled by the vehicle before turning.",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-325 NMSA 1978, Turning movements and required signals (chapter PDF page 677)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=677",
  },
  {
    key: "st-signal-slowing",
    quote:
      "No person shall stop or suddenly decrease the speed of a " +
      "vehicle without first giving an appropriate signal in the " +
      "manner provided herein to the driver of any vehicle " +
      "immediately to the rear when there is opportunity to give such " +
      "signal.",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-325 NMSA 1978, Turning movements and required signals (chapter PDF page 677)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=677",
  },
  {
    key: "st-following-too-closely",
    quote:
      "The driver of a motor vehicle shall not follow another vehicle " +
      "more closely than is reasonable and prudent, having due regard " +
      "for the speed of the vehicles and the traffic upon and the " +
      "condition of the highway.",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-318 NMSA 1978, Following too closely (chapter PDF page 669)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=669",
  },
  {
    key: "st-caravan-300-feet",
    quote:
      "Motor vehicles being driven upon any roadway outside of a " +
      "business or residence district in a caravan or motorcade, " +
      "whether or not towing other vehicles, shall not follow the " +
      "preceding vehicle closer than three hundred feet.",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-318 NMSA 1978, Following too closely (chapter PDF page 669)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=669",
  },
  {
    key: "st-texting",
    quote:
      "A person shall not read or view a text message or manually " +
      "type on a handheld mobile communication device for any purpose " +
      "while driving a motor vehicle,",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-374 NMSA 1978, Texting while driving (chapter PDF page 741)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=741",
  },
  {
    key: "st-texting-driving-defined",
    quote:
      "\"driving\" means being in actual physical control of a motor " +
      "vehicle on a highway or street and includes being temporarily " +
      "stopped because of traffic, a traffic light or stop sign or " +
      "otherwise,",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-374 NMSA 1978, Texting while driving (chapter PDF page 741)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=741",
  },
  {
    key: "st-parking-hydrant",
    quote: "within fifteen feet of a fire hydrant;",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-351 NMSA 1978, Stopping, standing or parking prohibited in specified places (chapter PDF page 714)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=714",
  },
  {
    key: "st-parking-crosswalk",
    quote: "within twenty feet of a crosswalk at an intersection;",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-351 NMSA 1978, Stopping, standing or parking prohibited in specified places (chapter PDF page 714)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=714",
  },
  {
    key: "st-parking-stop-sign",
    quote:
      "within thirty feet upon the approach to any flashing beacon, " +
      "stop sign or traffic-control signal located at the side of a " +
      "roadway;",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-351 NMSA 1978, Stopping, standing or parking prohibited in specified places (chapter PDF page 714)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=714",
  },
  {
    key: "st-parking-railroad",
    quote: "within fifty feet of the nearest rail of a railroad crossing;",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-351 NMSA 1978, Stopping, standing or parking prohibited in specified places (chapter PDF page 714)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=714",
  },
  {
    key: "st-seat-belt",
    quote:
      "each occupant of a motor vehicle having a gross vehicle weight " +
      "of ten thousand pounds or less manufactured with safety belts " +
      "in compliance with federal motor vehicle safety standard " +
      "number 208 shall have a safety belt properly fastened about " +
      "his body at all times when the vehicle is in motion on any " +
      "street or highway.",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-372 NMSA 1978, Safety belt use required (chapter PDF page 738)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=738",
  },
  {
    key: "st-child-under-18",
    quote:
      "A person shall not operate a passenger car, van or pickup " +
      "truck in this state, except for an authorized emergency " +
      "vehicle, public transportation or a school bus, unless all " +
      "passengers less than eighteen years of age are properly " +
      "restrained.",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-369 NMSA 1978, Child passenger restraint (chapter PDF page 736)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=736",
  },
  {
    key: "st-child-rear-facing",
    quote:
      "children less than one year of age shall be properly secured " +
      "in a rear-facing child passenger restraint device that meets " +
      "federal standards, in the rear seat of a vehicle that is " +
      "equipped with a rear seat.",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-369 NMSA 1978, Child passenger restraint (chapter PDF page 736)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=736",
  },
  {
    key: "st-child-booster",
    quote:
      "children five years of age through six years of age, " +
      "regardless of weight, or children who weigh less than sixty " +
      "pounds, regardless of age, shall be properly secured in either " +
      "a child booster seat or an appropriate child passenger " +
      "restraint device that meets federal standards; and",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-369 NMSA 1978, Child passenger restraint (chapter PDF page 736)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=736",
  },
  {
    key: "st-helmet-under-18",
    quote:
      "No person under the age of eighteen shall operate a motorcycle " +
      "unless the person is wearing a safety helmet that is securely " +
      "fastened on the person's head in a normal manner as headgear " +
      "and that meets the standards specified by the secretary.",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-7-356 NMSA 1978, Mandatory use of protective helmets (chapter PDF page 725)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=725",
  },
  {
    key: "st-dwi-08",
    quote:
      "a person to drive a vehicle in this state if the person has an " +
      "alcohol concentration of eight one hundredths or more in the " +
      "person's blood or breath within three hours of driving the " +
      "vehicle and the alcohol concentration results from alcohol " +
      "consumed before or while driving the vehicle; or",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-8-102 NMSA 1978, Driving under the influence (chapter PDF page 817)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=817",
  },
  {
    key: "st-aggravated-dwi",
    quote:
      "driving a vehicle in this state with an alcohol concentration " +
      "of sixteen one hundredths or more in the driver's blood or " +
      "breath within three hours of driving the vehicle and the " +
      "alcohol concentration results from alcohol consumed before or " +
      "while driving the vehicle;",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-8-102 NMSA 1978, Aggravated driving under the influence (chapter PDF page 818)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=818",
  },
  {
    key: "st-refusal-revocation",
    quote:
      "shall revoke the person's New Mexico driver's license or any " +
      "nonresident operating privilege for a period of one year or " +
      "until all conditions for license reinstatement are met, " +
      "whichever is later.",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-8-111 NMSA 1978, Refusal to submit to chemical tests (chapter PDF page 897)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=897",
  },
  {
    key: "st-under-21-revocation",
    quote:
      "one year or until all conditions for license reinstatement are " +
      "met, whichever is later, if the person was less than " +
      "twenty-one years of age at the time of the arrest, " +
      "notwithstanding any provision of the Children's Code",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-8-111 NMSA 1978, Grounds for revocation (chapter PDF page 898)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=898",
  },
  {
    key: "st-permit-age",
    quote:
      "A person fifteen years of age or older who is enrolled in and " +
      "attending or has completed a driver education course approved " +
      "by the bureau that includes a DWI prevention and education " +
      "component may apply to the division for an instruction permit.",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-5-8 NMSA 1978, Instruction permits (chapter PDF page 360)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=360",
  },
  {
    key: "st-permit-accompanied",
    quote:
      "This permit entitles the applicant, while having the permit in " +
      "the applicant's immediate possession, to drive a motor vehicle " +
      "upon the public highways when accompanied by a licensed driver " +
      "who is twenty-one years of age or older, who has been licensed " +
      "for at least three years in this state or in another state and " +
      "who is occupying a seat beside the driver except in the event " +
      "the permittee is operating a motorcycle.",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-5-8 NMSA 1978, Instruction permits (chapter PDF page 360)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=360",
  },
  {
    key: "st-provisional-age",
    quote:
      "A person fifteen years and six months of age or older may " +
      "apply to the division for a provisional license if the person:",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-5-8 NMSA 1978, Provisional licenses (chapter PDF page 358)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=358",
  },
  {
    key: "st-provisional-permit-six-months",
    quote:
      "has had an instruction permit for at least six months; " +
      "provided that thirty days shall be added to the six months for " +
      "each adjudication or conviction of a traffic violation " +
      "committed during the time the person was driving with an " +
      "instruction permit;",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-5-8 NMSA 1978, Provisional licenses (chapter PDF page 359)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=359",
  },
  {
    key: "st-practice-fifty-hours",
    quote:
      "Successful completion of a practice driving component shall " +
      "include not less than fifty hours of actual driving by the " +
      "applicant, including not less than ten hours of night driving.",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-5-8 NMSA 1978, Provisional licenses (chapter PDF page 359)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=359",
  },
  {
    key: "st-provisional-passenger",
    quote:
      "When operating a motor vehicle, a provisional licensee may be " +
      "accompanied by not more than one passenger under the age of " +
      "twenty-one who is not a member of the licensee's immediate " +
      "family.",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-5-8 NMSA 1978, Provisional licenses (chapter PDF page 359)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=359",
  },
  {
    key: "st-provisional-hours",
    quote:
      "A provisional license entitles the licensee, while having the " +
      "license in the licensee's immediate possession, to operate a " +
      "motor vehicle upon the public highways between the hours of " +
      "5:00 a.m. and midnight unless the provisional licensee is " +
      "eligible for a license restricting driving to daylight hours.",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-5-8 NMSA 1978, Provisional licenses (chapter PDF page 359)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=359",
  },
  {
    key: "st-full-license-age",
    quote:
      "a driver's license to a person sixteen years and six months of " +
      "age or older: (a) who has had a provisional license for at " +
      "least a twelve-month period immediately preceding the date of " +
      "the application for the driver's license as provided in " +
      "Section 66-5-9 NMSA 1978;",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-5-5 NMSA 1978, Persons not to be licensed (chapter PDF page 349)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=349",
  },
  {
    key: "st-motorcycle-permit-passenger",
    quote:
      "A holder of an instruction permit for a motorcycle shall not " +
      "carry any other passenger while operating a motorcycle.",
    source: "New Mexico Statutes Annotated 1978, Chapter 66 - Motor Vehicles (New Mexico Compilation Commission, NMOneSource.com)",
    section: "Section 66-5-8 NMSA 1978, Instruction permits (chapter PDF page 360)",
    url: "https://nmonesource.com/nmos/nmsa/en/4422/1/document.do#page=360",
  },
];
