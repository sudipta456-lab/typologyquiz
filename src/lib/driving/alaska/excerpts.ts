import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Alaska bank.
//
// Sources, and why there are three of them:
//
//  - The Alaska Driver Manual, REV.10/2025, prepared by the Alaska Department
//    of Administration, Division of Motor Vehicles. This is the book the DMV
//    writes the 20-question knowledge test from - the manual says so itself,
//    on page 7: "The written test covers only information found in this
//    manual" - and it carries most of what is quoted below.
//  - Alaska Statutes Title 28, published by the Alaska State Legislature, for
//    the numbers the manual leaves out. The book never says how far back you
//    must stop for a school bus, never prints the liability insurance minimums
//    as a statutory requirement, and states DUI costs as a budget rather than
//    as the sentence a court must impose. Title 28 supplies all three.
//  - The DMV's own Sample Knowledge Test page, which is the only official
//    Alaska source that states the exam's length, pass mark and clock.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. Four
// normalisations were applied to the extracted text and to nothing else: curly
// quotes, en dashes and em dashes are folded to ASCII; runs of whitespace,
// including the line breaks the PDF inserts mid-sentence, collapse to single
// spaces; the section symbol is spelled out as "Section"; and where a source
// states a rule as a stem followed by a bulleted list, the items are run
// together in the order they appear - no words are changed, dropped or
// reordered. The manual's own slips are preserved as they stand, including
// "Won't you join", "an unrestricted adult" and the stray "Free" that the
// PDF's two-column DUI cost table drops into the middle of a sentence, because
// a quote that has been tidied up is no longer a quote.

const MANUAL =
  "Alaska Driver Manual (Alaska Division of Motor Vehicles, REV.10/2025)";
const MANUAL_URL = "https://dmv.alaska.gov/media/t5ef5vi2/dlman.pdf";
const STATUTE = "Alaska Statutes Title 28 (Alaska State Legislature)";
const STATUTE_URL =
  "https://www.akleg.gov/basis/statutes.asp?media=print&secStart=28.35.010&secEnd=28.35.200";
const DMV_TEST =
  "Alaska DMV Sample Knowledge Test (Alaska Division of Motor Vehicles)";
const DMV_TEST_URL = "https://online.dmv.alaska.gov/practiceknowledgetest/";

export const alaskaExcerpts: HandbookExcerpt[] = [
  {
    key: "aap-booster-height",
    quote:
      "All children whose weight or height is above the forward-facing " +
      "limit for their car seat should use a booster seat until the vehicle " +
      "lap and shoulder seat belt fits properly, typically when they have " +
      "reached 4 feet 9 inches in height and are between 8 and 12 years of " +
      "age.",
    source: MANUAL,
    section: "Child Passenger Safety - Best Practice Recommendations",
    url: MANUAL_URL + "#page=28",
  },
  {
    key: "aap-rear-seat",
    quote:
      "All children younger than 13 years old should be restrained in the " +
      "rear seats of vehicles for optimal protection.",
    source: MANUAL,
    section: "Child Passenger Safety - Best Practice Recommendations",
    url: MANUAL_URL + "#page=28",
  },
  {
    key: "abs-no-pump",
    quote: "Never pump the brakes if your vehicle has antilock brakes.",
    source: MANUAL,
    section: "Check Your Driving Habits",
    url: MANUAL_URL + "#page=86",
  },
  {
    key: "accelerator-jammed",
    quote:
      "ACCELERATOR JAMMED Slap pedal hard with foot. Use brakes. Shift to " +
      "neutral. Concentrate on steering.",
    source: MANUAL,
    section: "Emergencies - Accelerator Jammed",
    url: MANUAL_URL + "#page=78",
  },
  {
    key: "address-change-30-days",
    quote:
      "Individuals who have a license or permit and who have changed their " +
      "name or address must notify the Division of Motor Vehicles, in " +
      "writing, within 30 days of the change.",
    source: MANUAL,
    section: "Other Information - Address or Name Change",
    url: MANUAL_URL + "#page=13",
  },
  {
    key: "alcohol-alaska-deaths",
    quote: "Almost 45 percent of all traffic deaths each year involve alcohol.",
    source: MANUAL,
    section: "Alcohol - Drugs - Driving",
    url: MANUAL_URL + "#page=23",
  },
  {
    key: "alcohol-depressant",
    quote:
      "Alcohol is a depressant, not a stimulant. It slows normal reflexes, " +
      "interferes with judgment, reduces alertness, and impairs vision.",
    source: MANUAL,
    section: "Facts You Should Know About Alcohol",
    url: MANUAL_URL + "#page=22",
  },
  {
    key: "alcohol-each-drink",
    quote:
      "If you drive after drinking, the probability of a crash increases " +
      "with each drink.",
    source: MANUAL,
    section: "Facts You Should Know About Alcohol",
    url: MANUAL_URL + "#page=22",
  },
  {
    key: "alcohol-equivalents",
    quote:
      "The same amount of alcohol is present in 12 ounces of beer as in a " +
      "single shot (1 1/2 ounce) of 80 proof alcohol or 4 ounces of wine.",
    source: MANUAL,
    section: "Facts You Should Know About Alcohol",
    url: MANUAL_URL + "#page=22",
  },
  {
    key: "alcohol-false-confidence",
    quote:
      "At the same time, alcohol creates a false sense of confidence, and a " +
      "feeling your driving is not affected. The fact is that every " +
      "additional drink lowers your effectiveness behind the wheel.",
    source: MANUAL,
    section: "How Drinking Affects a Driver",
    url: MANUAL_URL + "#page=23",
  },
  {
    key: "alcohol-judgment-first",
    quote:
      "A person's judgment is the first ability impaired by drinking " +
      "alcohol.",
    source: MANUAL,
    section: "Facts You Should Know About Alcohol",
    url: MANUAL_URL + "#page=22",
  },
  {
    key: "alcohol-one-hour",
    quote:
      "Therefore, it is difficult to know just how much you can drink " +
      "before you drive It takes an average of one hour to cancel the " +
      "effects of one drink. Therefore, it takes about four hours to cancel " +
      "the intoxicating effects of four drinks.",
    source: MANUAL,
    section: "Know Your Limits",
    url: MANUAL_URL + "#page=22",
  },
  {
    key: "alcohol-only-time",
    quote:
      "Black coffee, fresh air, food, or a cold shower might wake you up, " +
      "but they won't sober you up. Alcohol is burned up by the liver and " +
      "eliminated from the body through the kidneys and lungs.",
    source: MANUAL,
    section: "Facts You Should Know About Alcohol",
    url: MANUAL_URL + "#page=22",
  },
  {
    key: "alcohol-type-no-difference",
    quote:
      "The type of alcohol consumed makes no difference in the effect of " +
      "alcohol on the physical and mental changes that take place within " +
      "the body when alcohol is consumed. It's the amount of alcohol which " +
      "enters the body that counts.",
    source: MANUAL,
    section: "Facts You Should Know About Alcohol",
    url: MANUAL_URL + "#page=22",
  },
  {
    key: "alcohol-young-drivers",
    quote:
      "Motor vehicle crashes involving young people who have been drinking " +
      "occur at lower average blood alcohol levels than do those of " +
      "middle-aged or older drivers.",
    source: MANUAL,
    section: "Facts You Should Know About Alcohol",
    url: MANUAL_URL + "#page=22",
  },
  {
    key: "animals-common",
    quote:
      "Animal encounters are a common occurrence on Alaskan roads. Moose, " +
      "caribou, deer and other large animals are prevalent in most areas of " +
      "the state.",
    source: MANUAL,
    section: "Animals",
    url: MANUAL_URL + "#page=72",
  },
  {
    key: "animals-dawn-dusk",
    quote:
      "Use caution when driving at dawn or dusk and scan roads and " +
      "roadsides ahead.",
    source: MANUAL,
    section: "Animals",
    url: MANUAL_URL + "#page=72",
  },
  {
    key: "animals-do-not-swerve",
    quote:
      "If an animal does run in front of your vehicle, brake firmly but do " +
      "not swerve. Swerving can cause a vehicle-vehicle collision or cause " +
      "the vehicle to strike a pedestrian or potentially deadly fixed " +
      "object, such as a tree or utility pole.",
    source: MANUAL,
    section: "Animals",
    url: MANUAL_URL + "#page=72",
  },
  {
    key: "animals-flashers-warn",
    quote:
      "Briefly use flashers or a headlight signal to warn approaching " +
      "drivers when deer or moose are spotted in or near the highway. " +
      "Drivers need to be careful of other vehicles pulling over suddenly " +
      "to view wildlife.",
    source: MANUAL,
    section: "Animals",
    url: MANUAL_URL + "#page=72",
  },
  {
    key: "animals-high-beams",
    quote:
      "Reduce your speed at night and use high beams when possible. Slow " +
      "down when approaching deer or moose standing near the roadside, as " +
      "they may suddenly bolt into the road.",
    source: MANUAL,
    section: "Animals",
    url: MANUAL_URL + "#page=72",
  },
  {
    key: "animals-moose-hard-to-see",
    quote:
      "Moose can be difficult to see, and most vehicle-moose accidents " +
      "occur at dawn and dusk when light is low and moose are most active.",
    source: MANUAL,
    section: "Animals",
    url: MANUAL_URL + "#page=72",
  },
  {
    key: "animals-no-whistles",
    quote:
      "Do not rely on devices, such as deer whistles, extra lights, or " +
      "reflectors, to deter animals. Research has shown that your best " +
      "defense is your own responsible behavior.",
    source: MANUAL,
    section: "Animals",
    url: MANUAL_URL + "#page=72",
  },
  {
    key: "animals-pairs",
    quote:
      "Deer and moose often travel in pairs or groups, so if an animal is " +
      "spotted crossing the road, slow down and be alert for others that " +
      "may follow.",
    source: MANUAL,
    section: "Animals",
    url: MANUAL_URL + "#page=72",
  },
  {
    key: "animals-report-big-game",
    quote:
      "Big game animals killed or injured in a vehicular collision are the " +
      "property of the state. If, following a vehicle collision, you kill " +
      "or injure a big game animal, you must notify a State Trooper or a " +
      "Fish & Wildlife Officer as soon as possible.",
    source: MANUAL,
    section: "Animals",
    url: MANUAL_URL + "#page=72",
  },
  {
    key: "as-dui-class-a",
    quote:
      "Except as provided under (n) of this section, driving while under " +
      "the influence of an alcoholic beverage, inhalant, or controlled " +
      "substance is a class A misdemeanor.",
    source: STATUTE,
    section: "AS 28.35.030(b) Driving while under the influence",
    url: STATUTE_URL,
  },
  {
    key: "as-dui-felony",
    quote:
      "A person is guilty of a class C felony if the person is convicted " +
      "under (a) of this section and either has been previously convicted " +
      "two or more times since January 1, 1996, and within the 10 years " +
      "preceding the date of the present offense",
    source: STATUTE,
    section: "AS 28.35.030(n) Driving while under the influence",
    url: STATUTE_URL,
  },
  {
    key: "as-dui-first-sentence",
    quote:
      "not less than 72 consecutive hours, require the person to use an " +
      "ignition interlock device after the person regains the privilege, " +
      "including any limited privilege, to operate a motor vehicle for a " +
      "minimum of six months, and impose a fine of not less than $1,500 if " +
      "the person has not been previously convicted;",
    source: STATUTE,
    section: "AS 28.35.030(b)(1)(A) Driving while under the influence",
    url: STATUTE_URL,
  },
  {
    key: "as-dui-offence",
    quote:
      "A person commits the crime of driving while under the influence of " +
      "an alcoholic beverage, inhalant, or controlled substance if the " +
      "person operates or drives a motor vehicle or operates an aircraft or " +
      "a watercraft",
    source: STATUTE,
    section: "AS 28.35.030(a) Driving while under the influence",
    url: STATUTE_URL,
  },
  {
    key: "as-dui-second-sentence",
    quote:
      "not less than 20 days, require the person to use an ignition " +
      "interlock device after the person regains the privilege, including " +
      "any limited privilege, to operate a motor vehicle for a minimum of " +
      "12 months, and impose a fine of not less than $3,000 if the person " +
      "has been previously convicted once;",
    source: STATUTE,
    section: "AS 28.35.030(b)(1)(B) Driving while under the influence",
    url: STATUTE_URL,
  },
  {
    key: "as-fail-to-stop-police",
    quote:
      "knowingly fails to stop as soon as practical and in a reasonably " +
      "safe manner under the circumstances when requested or signaled to do " +
      "so by a peace officer.",
    source: STATUTE,
    section: "AS 28.35.182(b) Failure to stop at direction of peace officer",
    url: STATUTE_URL,
  },
  {
    key: "as-five-vehicles",
    quote:
      "A person operating a motor vehicle at any time on a two-lane roadway " +
      "outside of an urban area shall pull the motor vehicle off the " +
      "roadway at the first opportunity to pull over safely if there are " +
      "five or more motor vehicles immediately following that motor " +
      "vehicle.",
    source: STATUTE,
    section: "AS 28.35.140(b) Duty to yield to following traffic",
    url: STATUTE_URL,
  },
  {
    key: "as-headlights-1000",
    quote:
      "at any other time when, because of insufficient light or other " +
      "atmospheric conditions, persons or motor vehicles are not clearly " +
      "discernible at a distance of 1,000 feet;",
    source: STATUTE,
    section: "AS 28.35.191(a) Failure to use headlights",
    url: STATUTE_URL,
  },
  {
    key: "as-insurance-limits",
    quote:
      "$50,000 because of bodily injury to or death of one person in one " +
      "accident, and, subject to the same limit for one person, $100,000 " +
      "because of bodily injury to or death of two or more persons in one " +
      "accident; and (2) $25,000 because of injury to or destruction of " +
      "property of others in one accident.",
    source: STATUTE,
    section: "AS 28.22.101(d) General coverage requirements; policy limits",
    url: STATUTE_URL,
  },
  {
    key: "as-move-over-one-lane",
    quote:
      "with fewer than two lanes traveling in the same direction, unless " +
      "otherwise directed by law enforcement or emergency personnel, shall " +
      "slow to a reasonable and prudent speed considering the traffic, " +
      "roadway, and weather conditions.",
    source: STATUTE,
    section: "AS 28.35.185(a)(2) Overtaking and passing certain stationary vehicles",
    url: STATUTE_URL,
  },
  {
    key: "as-move-over-penalty",
    quote:
      "a class A misdemeanor if personal injury results from the person's " +
      "failure to vacate the lane or slow as required by this section;",
    source: STATUTE,
    section: "AS 28.35.185(b) Overtaking and passing certain stationary vehicles",
    url: STATUTE_URL,
  },
  {
    key: "as-move-over-two-lanes",
    quote:
      "with two or more lanes traveling in the same direction, unless " +
      "otherwise directed by law enforcement or emergency personnel, shall " +
      "(A) if possible in the existing safety and traffic conditions, " +
      "vacate the lane closest to the emergency vehicle",
    source: STATUTE,
    section: "AS 28.35.185(a)(1) Overtaking and passing certain stationary vehicles",
    url: STATUTE_URL,
  },
  {
    key: "as-obstruct-traffic",
    quote:
      "A person may not purposely obstruct or block traffic on any roadway " +
      "by any means.",
    source: STATUTE,
    section: "AS 28.35.140(a) Unlawful obstruction or blocking of traffic",
    url: STATUTE_URL,
  },
  {
    key: "as-open-container",
    quote:
      "A person may not drive a motor vehicle on a highway or vehicular way " +
      "or area, when there is an open bottle, can, or other receptacle " +
      "containing an alcoholic beverage in the passenger compartment of the " +
      "vehicle, except as provided in (b) of this section.",
    source: STATUTE,
    section: "AS 28.35.029(a) Open container",
    url: STATUTE_URL,
  },
  {
    key: "as-open-container-infraction",
    quote:
      "A person who violates (a) of this section is guilty of an " +
      "infraction.",
    source: STATUTE,
    section: "AS 28.35.029(d) Open container",
    url: STATUTE_URL,
  },
  {
    key: "as-open-container-trunk",
    quote:
      "Except as provided in AS 28.33.130 , a person may transport an open " +
      "bottle, can, or other receptacle containing an alcoholic beverage " +
      "(1) in the trunk of a motor vehicle;",
    source: STATUTE,
    section: "AS 28.35.029(b) Open container",
    url: STATUTE_URL,
  },
  {
    key: "as-permit-age",
    quote:
      "Except as provided in (b) of this section, a person who is at least " +
      "14 years of age may apply to the department for a noncommercial " +
      "instruction permit.",
    source: STATUTE,
    section: "AS 28.15.051(a) Instruction permits",
    url: STATUTE_URL,
  },
  {
    key: "as-permit-renewal",
    quote:
      "An instruction permit may be renewed one time. Once a license is " +
      "issued to drive a specified type or class of motor vehicle, a driver " +
      "is not eligible to obtain an instructional permit for that specified " +
      "type or class of motor vehicle unless five years have passed since " +
      "the expiration of the license.",
    source: STATUTE,
    section: "AS 28.15.051(a) Instruction permits",
    url: STATUTE_URL,
  },
  {
    key: "as-permit-supervision",
    quote:
      "The permittee shall be accompanied by a person at least 21 years of " +
      "age who has been licensed at least one year to drive the type or " +
      "class of vehicle being used, who is capable of exercising control " +
      "over the vehicle and who occupies a seat beside the driver",
    source: STATUTE,
    section: "AS 28.15.051(a) Instruction permits",
    url: STATUTE_URL,
  },
  {
    key: "as-provisional-curfew",
    quote:
      "operate a motor vehicle between the hours of 1:00 a.m. and 5:00 " +
      "a.m., except when the person is (A) accompanied by a parent, legal " +
      "guardian, or a person at least 21 years of age who is licensed to " +
      "drive the type or class of vehicle being used; or",
    source: STATUTE,
    section: "AS 28.15.057(b)(2) Restrictions on driver's license issued to a person under 18",
    url: STATUTE_URL,
  },
  {
    key: "as-provisional-infraction",
    quote: "A person who violates this section is guilty of an infraction.",
    source: STATUTE,
    section: "AS 28.15.057(d) Restrictions on driver's license issued to a person under 18",
    url: STATUTE_URL,
  },
  {
    key: "as-provisional-passengers",
    quote:
      "operate a motor vehicle that is carrying any passengers (A) except a " +
      "passenger who is a parent, legal guardian, sibling, or a person at " +
      "least 21 years of age; or (B) unless at least one of the passengers " +
      "is a parent, legal guardian, or person at least 21 years of age; or",
    source: STATUTE,
    section: "AS 28.15.057(b)(1) Restrictions on driver's license issued to a person under 18",
    url: STATUTE_URL,
  },
  {
    key: "as-provisional-six-months",
    quote:
      "been licensed under an instruction permit issued under AS 28.15.051 " +
      "or under the law of another state with substantially similar " +
      "requirements for at least six months;",
    source: STATUTE,
    section: "AS 28.15.057(a) Restrictions on driver's license issued to a person under 18",
    url: STATUTE_URL,
  },
  {
    key: "as-refusal",
    quote:
      "after being advised by the officer that the refusal will result in " +
      "the denial or revocation of the driver's license, privilege to " +
      "drive, or privilege to obtain a license",
    source: STATUTE,
    section: "AS 28.35.032(a) Refusal to submit to chemical test",
    url: STATUTE_URL,
  },
  {
    key: "as-revocation-30-days",
    quote:
      "A court convicting a person of an offense described in (a)(1) - (4), " +
      "(6), (7), or (10) of this section shall revoke that person's " +
      "driver's license, privilege to drive, or privilege to obtain a " +
      "license for not less than 30 days for the first conviction",
    source: STATUTE,
    section: "AS 28.15.181(b) Court suspensions, revocations, and limitations",
    url: STATUTE_URL,
  },
  {
    key: "as-revocation-offences",
    quote:
      "Conviction of any of the following offenses is grounds for the " +
      "immediate revocation of a driver's license, privilege to drive, or " +
      "privilege to obtain a license:",
    source: STATUTE,
    section: "AS 28.15.181(a) Court suspensions, revocations, and limitations",
    url: STATUTE_URL,
  },
  {
    key: "as-school-bus-30-feet",
    quote:
      "The driver of a vehicle that approaches from any direction a school " +
      "bus stopped on a highway or vehicular way or area shall stop not " +
      "less than 30 feet from the school bus before reaching it when there " +
      "are in operation on the school bus flashing red lights as required " +
      "by regulation.",
    source: STATUTE,
    section: "AS 28.35.145(a) Overtaking and passing school bus",
    url: STATUTE_URL,
  },
  {
    key: "as-school-bus-divided",
    quote:
      "The driver of a vehicle on a highway with separate roadways is not " +
      "required to stop when meeting or passing a school bus that is on a " +
      "different roadway",
    source: STATUTE,
    section: "AS 28.35.145(c) Overtaking and passing school bus",
    url: STATUTE_URL,
  },
  {
    key: "as-school-bus-penalty",
    quote:
      "A driver convicted under this section is guilty of a class B " +
      "misdemeanor and, in addition to other penalties as provided by law, " +
      "is subject to a mandatory assessment of six demerit points under AS " +
      "28.15.221 - 28.15.261.",
    source: STATUTE,
    section: "AS 28.35.145(d) Overtaking and passing school bus",
    url: STATUTE_URL,
  },
  {
    key: "as-school-bus-yield-crossing",
    quote:
      "the driver of a vehicle shall yield the right-of-way to a person " +
      "crossing a highway, vehicular way, or area to embark on or disembark " +
      "from the school bus, whether or not the person is crossing within a " +
      "marked crosswalk.",
    source: STATUTE,
    section: "AS 28.35.145(b) Overtaking and passing school bus",
    url: STATUTE_URL,
  },
  {
    key: "as-seat-belt-16",
    quote:
      "16 years of age or older may not occupy a motor vehicle while being " +
      "driven on a highway unless restrained by a safety belt; and (2) may " +
      "not drive a motor vehicle on a highway unless restrained by a safety " +
      "belt.",
    source: STATUTE,
    section: "AS 28.05.095(a) Use of seat belts and child safety devices required",
    url: STATUTE_URL,
  },
  {
    key: "as-texting",
    quote:
      "A person commits the crime of driving while texting, while " +
      "communicating on a computer, or while a screen device is operating " +
      "if the person is driving a motor vehicle, and",
    source: STATUTE,
    section: "AS 28.35.161(a) Use of electronic devices while driving",
    url: STATUTE_URL,
  },
  {
    key: "as-texting-exceptions",
    quote:
      "portable cellular telephones or personal data assistants being used " +
      "for voice communication or displaying caller identification " +
      "information;",
    source: STATUTE,
    section: "AS 28.35.161(c) Use of electronic devices while driving",
    url: STATUTE_URL,
  },
  {
    key: "assured-clear-distance",
    quote:
      "(Rain, snow, fog, dust, or smoke.) A person may not drive a vehicle " +
      "upon a highway at a speed greater than will permit them to stop " +
      "within the assured clear distance ahead.",
    source: MANUAL,
    section: "Speed Limitation Law",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "avoid-being-struck",
    quote:
      "Be sure brake lights are clean and working properly. Flash brake " +
      "lights when preparing to stop.",
    source: MANUAL,
    section: "How to Keep From Being Struck",
    url: MANUAL_URL + "#page=32",
  },
  {
    key: "bac-08-presumed",
    quote:
      "If you operate a motor vehicle with a breath or blood alcohol " +
      "concentration of .08 or more, by law you are presumed to be driving " +
      "under the influence (DUI).",
    source: MANUAL,
    section: "Administrative Revocations",
    url: MANUAL_URL + "#page=20",
  },
  {
    key: "bac-effects-chart",
    quote:
      "0.02% - Judgement - Inhibitions 0.10% - Vision - Speech - Balance " +
      "0.06% - Reaction - Coordination 0.16% - Walking - Standing 0.08% - " +
      "Serious deterioration in driving performance",
    source: MANUAL,
    section: "Alcohol - Drugs - Driving",
    url: MANUAL_URL + "#page=23",
  },
  {
    key: "backing-5-mph",
    quote: "It is suggested your speed not exceed 5 mph when backing.",
    source: MANUAL,
    section: "Backing",
    url: MANUAL_URL + "#page=31",
  },
  {
    key: "backing-controlled-access",
    quote:
      "Unless directed by police, fire or construction flag personnel, it " +
      "is illegal to back on a \"controlled access\" highway, or on its " +
      "entrance or exit ramps.",
    source: MANUAL,
    section: "Backing",
    url: MANUAL_URL + "#page=79",
  },
  {
    key: "backing-rear-direction",
    quote:
      "Move the wheel in the direction you want the REAR of your vehicle to " +
      "go. Back slowly and keep your eyes moving to all sides of your car.",
    source: MANUAL,
    section: "Backing",
    url: MANUAL_URL + "#page=31",
  },
  {
    key: "backing-technique",
    quote:
      "Instead, with your left hand at the top of the steering wheel, turn " +
      "your body and head to the right and look out the rear window.",
    source: MANUAL,
    section: "Backing",
    url: MANUAL_URL + "#page=31",
  },
  {
    key: "backing-yield",
    quote:
      "When backing, you must yield the right-of- way to a vehicle " +
      "approaching on the highway or intersecting highway.",
    source: MANUAL,
    section: "Backing",
    url: MANUAL_URL + "#page=79",
  },
  {
    key: "belt-4-to-16",
    quote:
      "Passengers aged from 4 up to 16 must wear a seat belt or a child " +
      "restraint device; whichever is age appropriate.",
    source: MANUAL,
    section: "Safety Belt Use Is Required by Law",
    url: MANUAL_URL + "#page=26",
  },
  {
    key: "belt-driver-responsible",
    quote:
      "The driver is also responsible for all passengers under the age of " +
      "16 years.",
    source: MANUAL,
    section: "Safety Belt Use Is Required by Law",
    url: MANUAL_URL + "#page=26",
  },
  {
    key: "belt-ejection",
    quote:
      "The chances of being killed are almost 25 times greater if you're " +
      "thrown from the car.",
    source: MANUAL,
    section: "Facts You Should Know About Safety Belts",
    url: MANUAL_URL + "#page=25",
  },
  {
    key: "belt-exceptions",
    quote:
      "Vehicles built prior to 1965 which did not have safety belts as " +
      "original equipment and are not classified as a custom collector " +
      "vehicle.",
    source: MANUAL,
    section: "Exceptions to the Seat Belt Law",
    url: MANUAL_URL + "#page=27",
  },
  {
    key: "belt-fine",
    quote:
      "A driver may be fined up to $50 and may receive two demerit points " +
      "on their operator's license for failure to restrain passengers under " +
      "age 16. Adult violations are subject to a $15 fine.",
    source: MANUAL,
    section: "Exceptions to the Seat Belt Law",
    url: MANUAL_URL + "#page=27",
  },
  {
    key: "belt-fire-submersion",
    quote:
      "Collisions involving fire or submersion make up less than 1/2 of 1% " +
      "of all traffic collisions.",
    source: MANUAL,
    section: "Facts You Should Know About Safety Belts",
    url: MANUAL_URL + "#page=25",
  },
  {
    key: "belt-lap-only",
    quote:
      "Although your lap belt helps, it will not prevent serious injury " +
      "from striking your head and chest on the steering wheel, dashboard, " +
      "and windshield. A lap and shoulder belt offer you the best possible " +
      "protection in the event of a crash.",
    source: MANUAL,
    section: "Facts You Should Know About Safety Belts",
    url: MANUAL_URL + "#page=25",
  },
  {
    key: "belt-law",
    quote:
      "SAFETY BELT USE IS REQUIRED BY LAW Alaska law AS 28.05.095 requires " +
      "everyone in a motor vehicle to use a safety belt. Drivers must wear " +
      "a safety belt.",
    source: MANUAL,
    section: "Safety Belt Use Is Required by Law",
    url: MANUAL_URL + "#page=26",
  },
  {
    key: "belt-low-speed-crashes",
    quote:
      "More than 80% of all collisions occur at speeds less than 40 miles " +
      "per hour, and three out of four collisions causing death to occur " +
      "within 25 miles of home.",
    source: MANUAL,
    section: "Facts You Should Know About Safety Belts",
    url: MANUAL_URL + "#page=25",
  },
  {
    key: "belt-passengers-18",
    quote:
      "Passengers 18 and older will be issued a citation for failure to " +
      "wear a seat belt.",
    source: MANUAL,
    section: "Safety Belt Use Is Required by Law",
    url: MANUAL_URL + "#page=26",
  },
  {
    key: "bicycle-blind-spots",
    quote:
      "Check your \"blind spots\" before you make a turn, parallel park, open " +
      "a door or leave a curb. Do not depend on only your mirrors- turn " +
      "your head to look for bicyclists that may be next to them or " +
      "approaching.",
    source: MANUAL,
    section: "Bicycles",
    url: MANUAL_URL + "#page=49",
  },
  {
    key: "bicycle-hand-signals",
    quote:
      "Left turn - left arm fully extended to left; Stop - left arm " +
      "extended and bent down at elbow; Right turn - right arm fully " +
      "extended to right or left arm extended and bent up at elbow",
    source: MANUAL,
    section: "Bicyclists - Safety Tips",
    url: MANUAL_URL + "#page=50",
  },
  {
    key: "bicycle-is-vehicle",
    quote: "Remember a bicycle is a vehicle.",
    source: MANUAL,
    section: "Bicycles",
    url: MANUAL_URL + "#page=49",
  },
  {
    key: "bicycle-no-points",
    quote:
      "Alaska Law AS 28.15.231 (b) states that no points are assessed for " +
      "traffic violations when using a bicycle. Bicycles must follow the " +
      "rules of the road per 13 AAC 02.385.",
    source: MANUAL,
    section: "Bicyclists",
    url: MANUAL_URL + "#page=50",
  },
  {
    key: "bicycle-obey-laws",
    quote:
      "Bicyclists are required to obey traffic signs, signals, and all " +
      "other traffic laws.",
    source: MANUAL,
    section: "Bicyclists",
    url: MANUAL_URL + "#page=50",
  },
  {
    key: "bicycle-share-road",
    quote:
      "Bicyclists have the right to share the road and travel in the same " +
      "direction as motor vehicles. They are often hard to see in traffic " +
      "and have no protection from a traffic crash.",
    source: MANUAL,
    section: "Bicycles",
    url: MANUAL_URL + "#page=49",
  },
  {
    key: "bicycle-under-nine",
    quote:
      "Youngsters under age nine lack the physical and mental development " +
      "to interact safely in that environment so be careful when driving " +
      "near children riding bikes.",
    source: MANUAL,
    section: "Bicycles",
    url: MANUAL_URL + "#page=49",
  },
  {
    key: "bicycle-yield-same-as-vehicle",
    quote:
      "The rules of the road and right-of-way apply to and protect these " +
      "and other highway users. You must yield the right-of-way to them " +
      "just as you would to another vehicle.",
    source: MANUAL,
    section: "Bicycles",
    url: MANUAL_URL + "#page=49",
  },
  {
    key: "blind-spot-check",
    quote:
      "Check mirrors and look over shoulder toward the rear before changing " +
      "lanes.",
    source: MANUAL,
    section: "Changing Lanes ... Check Blind Spots",
    url: MANUAL_URL + "#page=69",
  },
  {
    key: "blind-spot-others",
    quote:
      "Don't drive in other drivers' blind spot. They cannot see you with " +
      "their inside mirror if you are near their left or right rear fender.",
    source: MANUAL,
    section: "Following",
    url: MANUAL_URL + "#page=69",
  },
  {
    key: "blowout",
    quote:
      "TIRE BLOWS OUT Don't apply brakes. Concentrate on steering. Slow " +
      "down gradually.",
    source: MANUAL,
    section: "Emergencies - Tire Blows Out",
    url: MANUAL_URL + "#page=78",
  },
  {
    key: "blowout-pull-off",
    quote: "Pull completely off pavement.",
    source: MANUAL,
    section: "Emergencies - Tire Blows Out",
    url: MANUAL_URL + "#page=78",
  },
  {
    key: "brakes-fail",
    quote:
      "BRAKES FAIL Use parking brake. Shift to lower gear. Rub tires on " +
      "curb.",
    source: MANUAL,
    section: "Emergencies - Brakes Fail",
    url: MANUAL_URL + "#page=78",
  },
  {
    key: "bus-divided-exception",
    quote:
      "Driver upon a highway with separated roadways providing two or more " +
      "lanes in each direction need not stop when approaching a school bus " +
      "which is headed in the opposite direction even though the bus is " +
      "stopped, and the stop arm is extended and the red flashing lights " +
      "are activated.",
    source: MANUAL,
    section: "Meeting a School Bus",
    url: MANUAL_URL + "#page=53",
  },
  {
    key: "bus-meeting-amber",
    quote:
      "Drivers approaching a school bus on which the yellow/amber warning " +
      "signal lights are flashing shall reduce the speed of their vehicles " +
      "and shall bring the vehicle to a complete stop when school bus " +
      "stops, red lights flash, and stop sign is extended.",
    source: MANUAL,
    section: "Meeting a School Bus",
    url: MANUAL_URL + "#page=53",
  },
  {
    key: "bus-overtaking-rear",
    quote:
      "Drivers approaching a school bus from the rear may not pass the " +
      "school bus when red signal lights are flashing and shall bring their " +
      "vehicles to a complete stop before reaching the school bus when it " +
      "is stopped.",
    source: MANUAL,
    section: "Overtaking a School Bus with Red Lights Activated",
    url: MANUAL_URL + "#page=53",
  },
  {
    key: "bus-remain-stopped",
    quote:
      "The vehicles shall remain stopped until the stop sign is retracted, " +
      "the flashing red lights are discontinued, and the school bus resumes " +
      "motion, or until signaled by the driver to proceed.",
    source: MANUAL,
    section: "Overtaking a School Bus with Red Lights Activated",
    url: MANUAL_URL + "#page=53",
  },
  {
    key: "car-seat-booster",
    quote:
      "over four years of age but less than eight years of age who is less " +
      "than 57 inches in height and weighs 20 or more pounds but less than " +
      "65 pounds shall be properly secured in a booster seat that is " +
      "secured by a seat belt system",
    source: MANUAL,
    section: "Safety Belt Use Is Required by Law",
    url: MANUAL_URL + "#page=26",
  },
  {
    key: "car-seat-rear-facing",
    quote:
      "(1) less than one year of age or a child one year of age or older " +
      "who weighs less than 20 pounds shall be properly secured in a " +
      "rear-facing child safety seat that meets or exceeds standards of the " +
      "United States Department of Transportation and is used in accordance " +
      "with the manufacturer's instructions.",
    source: MANUAL,
    section: "Safety Belt Use Is Required by Law",
    url: MANUAL_URL + "#page=26",
  },
  {
    key: "carbon-monoxide",
    quote:
      "CARBON MONOXIDE A colorless, odorless, poisonous gas from vehicle " +
      "exhaust can make you a dangerous driver and even cost you your life. " +
      "It paralyzes before it kills.",
    source: MANUAL,
    section: "Carbon Monoxide",
    url: MANUAL_URL + "#page=81",
  },
  {
    key: "carbon-monoxide-garage",
    quote:
      "Never run a vehicle in a closed garage. Be sure that the vehicle's " +
      "exhaust system is in good condition.",
    source: MANUAL,
    section: "Safety Tips for Carbon Monoxide",
    url: MANUAL_URL + "#page=81",
  },
  {
    key: "carbon-monoxide-symptoms",
    quote: "Symptoms- headache, dizziness, nausea, and vomiting.",
    source: MANUAL,
    section: "Carbon Monoxide",
    url: MANUAL_URL + "#page=81",
  },
  {
    key: "child-in-arms",
    quote:
      "Holding your child in your arms will not protect your child. A " +
      "15-pound infant will suddenly weigh 450 pounds because of the forces " +
      "unleashed in just a 30-mph collision.",
    source: MANUAL,
    section: "Facts You Should Know About Safety Belts",
    url: MANUAL_URL + "#page=26",
  },
  {
    key: "child-safety-all-passengers",
    quote:
      "CHILD PASSENGER SAFETY Alaska Law requires ALL passengers, " +
      "regardless of age, to use a seat belt or appropriate restraint " +
      "device (car seat or booster seat). The driver is responsible for " +
      "ensuring that all passengers under the age of 16 are properly " +
      "restrained in the vehicle.",
    source: MANUAL,
    section: "Child Passenger Safety",
    url: MANUAL_URL + "#page=27",
  },
  {
    key: "class-d",
    quote:
      "Class D is the license used for operating passenger vehicles. " +
      "Motorcycles and motor scooters with engine displacements of less " +
      "than 50cc can also be operated with a class D license.",
    source: MANUAL,
    section: "Licenses and Permits",
    url: MANUAL_URL + "#page=6",
  },
  {
    key: "coasting-prohibited",
    quote:
      "COASTING PROHIBITED A driver of a motor vehicle when traveling on a " +
      "downgrade may not coast with the gears of the vehicle in neutral, or " +
      "with the clutch disengaged.",
    source: MANUAL,
    section: "Coasting Prohibited",
    url: MANUAL_URL + "#page=79",
  },
  {
    key: "consent-withdrawal",
    quote:
      "The parent or guardian may withdraw consent; however, only the " +
      "person who signed the parental consent form can withdraw consent.",
    source: MANUAL,
    section: "Parental Consent",
    url: MANUAL_URL + "#page=7",
  },
  {
    key: "control-definition",
    quote:
      "When you are able to direct and regulate the course and speed of " +
      "your vehicle and you have the ability to slow or stop when you wish " +
      "to do so you are exercising control of your motor vehicle.",
    source: MANUAL,
    section: "Control of Vehicle",
    url: MANUAL_URL + "#page=30",
  },
  {
    key: "control-yourself",
    quote:
      "You must control yourself before you can control a vehicle. Driving " +
      "with insufficient sleep, emotions, or distractions are examples of " +
      "factors that will impair your ability to safely control a vehicle.",
    source: MANUAL,
    section: "Control of Vehicle",
    url: MANUAL_URL + "#page=30",
  },
  {
    key: "crash-call-911",
    quote:
      "If there is an injury, or total property damage is $2000 or more, " +
      "and the crash occurred within a municipality, immediately contact " +
      "the local police department by dialing 911. If the crash occurred " +
      "outside of a municipality, immediately contact the Alaska State " +
      "Troopers.",
    source: MANUAL,
    section: "What to Do in Case of Every Crash",
    url: MANUAL_URL + "#page=15",
  },
  {
    key: "crash-certificate-501",
    quote:
      "A Certificate of Insurance is required on all crashes with property " +
      "damage of $501.00 or more and must be submitted to DMV within 15 " +
      "days, even if you submitted proof of insurance during the law " +
      "enforcement investigation.",
    source: MANUAL,
    section: "What to Do in Case of Every Crash",
    url: MANUAL_URL + "#page=15",
  },
  {
    key: "crash-exchange",
    quote:
      "Obtain the name, address, driver's license number, license plate " +
      "number, telephone number, and name of insurance company of the other " +
      "driver. Obtain the identity of as many witnesses as you can.",
    source: MANUAL,
    section: "What to Do in Case of Every Crash",
    url: MANUAL_URL + "#page=15",
  },
  {
    key: "crash-help-injured",
    quote:
      "Help anyone who may be hurt. Do not remove an injured person unless " +
      "necessary. Arrange for an ambulance if needed. Stop serious bleeding " +
      "and keep the victim warm.",
    source: MANUAL,
    section: "What to Do in Case of Every Crash",
    url: MANUAL_URL + "#page=15",
  },
  {
    key: "crash-police-investigated",
    quote:
      "This report is not required if the crash was investigated by a " +
      "police officer.",
    source: MANUAL,
    section: "What to Do in Case of Every Crash",
    url: MANUAL_URL + "#page=15",
  },
  {
    key: "crash-report-10-days",
    quote:
      "Report the crash to the Department of Administration, Division of " +
      "Motor Vehicles, within 10 days.",
    source: MANUAL,
    section: "What to Do in Case of Every Crash",
    url: MANUAL_URL + "#page=15",
  },
  {
    key: "crash-stop-at-once",
    quote:
      "If you are blocking traffic, move your vehicle out of the way if " +
      "possible.",
    source: MANUAL,
    section: "What to Do in Case of Every Crash",
    url: MANUAL_URL + "#page=15",
  },
  {
    key: "crash-unattended-vehicle",
    quote:
      "Upon striking an unattended vehicle or private property such as a " +
      "fence, stop and attempt to locate the owner. If unable to do so " +
      "leave a written note containing your name, address, and telephone " +
      "number.",
    source: MANUAL,
    section: "What to Do in Case of Every Crash",
    url: MANUAL_URL + "#page=15",
  },
  {
    key: "crash-warn-traffic",
    quote:
      "To prevent other crashes, warn other traffic. At night place flares " +
      "or other signals on the road. Be careful not to walk out in front of " +
      "other vehicles.",
    source: MANUAL,
    section: "What to Do in Case of Every Crash",
    url: MANUAL_URL + "#page=15",
  },
  {
    key: "crosswalk-never-pass",
    quote:
      "Do not drive to make a pedestrian yield to you; the motorist should " +
      "always yield to the pedestrian. Also, do not pass to the right or " +
      "left of an automobile which is stopped at a crosswalk to allow a " +
      "pedestrian to cross the street in either direction.",
    source: MANUAL,
    section: "Pavement Markings",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "crosswalk-not-painted",
    quote:
      "Crosswalk lines need not be painted at all intersections, nor do " +
      "they need be in place to indicate where pedestrians have the " +
      "right-of-way. Pedestrians have the right-of- way at marked " +
      "crosswalks or at intersections.",
    source: MANUAL,
    section: "Pavement Markings",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "disabled-flares",
    quote:
      "Turn on parking lights or 4-way flashers at night. If available, set " +
      "out flares or warning triangles.",
    source: MANUAL,
    section: "Emergencies - Disabled Vehicle",
    url: MANUAL_URL + "#page=78",
  },
  {
    key: "disabled-raise-hood",
    quote:
      "Raise hood or tie white cloth or handkerchief on left door handle or " +
      "radio antenna.",
    source: MANUAL,
    section: "Major Roads - Emergencies",
    url: MANUAL_URL + "#page=68",
  },
  {
    key: "disabled-vehicle-wheels-off",
    quote:
      "If vehicle is disabled, move it so that all wheels are off the " +
      "traveled portion of the road, if possible.",
    source: MANUAL,
    section: "Major Roads - Emergencies",
    url: MANUAL_URL + "#page=68",
  },
  {
    key: "distraction-focus",
    quote:
      "Refrain from smoking, eating, drinking, reading and any, watching " +
      "videos and other activity that takes your mind and eyes off the " +
      "road.",
    source: MANUAL,
    section: "Distracted Driving",
    url: MANUAL_URL + "#page=29",
  },
  {
    key: "distraction-pets",
    quote:
      "Pets can be a big distraction in the car. Always secure your pets " +
      "properly before you start to drive.",
    source: MANUAL,
    section: "Distracted Driving",
    url: MANUAL_URL + "#page=29",
  },
  {
    key: "distraction-phone-off",
    quote:
      "Turn your phone off or switch it to silent mode before you get in " +
      "the car.",
    source: MANUAL,
    section: "Distracted Driving",
    url: MANUAL_URL + "#page=29",
  },
  {
    key: "distraction-pull-over",
    quote: "If you need to make a call, pull over to a safe area first.",
    source: MANUAL,
    section: "Distracted Driving",
    url: MANUAL_URL + "#page=29",
  },
  {
    key: "dmv-and-court-separate",
    quote:
      "The DMV's civil action and the court action are two different " +
      "procedures which you must deal with separately.",
    source: MANUAL,
    section: "Administrative Revocations",
    url: MANUAL_URL + "#page=20",
  },
  {
    key: "dmv-independent-action",
    quote:
      "The Division of Motor Vehicles has the authority to take independent " +
      "action against your driving privileges regardless of the outcome of " +
      "any related court proceeding. A reinstatement fee is required " +
      "following any suspension, revocation, or limitation.",
    source: MANUAL,
    section: "Suspensions and Revocations",
    url: MANUAL_URL + "#page=17",
  },
  {
    key: "dmv-permit-age",
    quote:
      "When you turn 14, you are eligible for an instruction permit to " +
      "begin to practice how to drive.",
    source: DMV_TEST,
    section: "Instruction Permit",
    url: "https://dmv.alaska.gov/credential-services/instruction-permit/",
  },
  {
    key: "dmv-permit-fee",
    quote:
      "Pass a vision test Pay $15 ( see fees ) If you do not have a local " +
      "DMV office in your community, please see our Guide to Rural Driving " +
      "Information .",
    source: DMV_TEST,
    section: "Instruction Permit",
    url: "https://dmv.alaska.gov/credential-services/instruction-permit/",
  },
  {
    key: "dmv-permit-supervisor",
    quote:
      "While you are practicing to drive you must be accompanied by a " +
      "licensed driver at least 21 years old with at least one year of " +
      "driving experience in the type of vehicle you are driving, and they " +
      "must be seated in the passenger seat at all times.",
    source: DMV_TEST,
    section: "Instruction Permit",
    url: "https://dmv.alaska.gov/credential-services/instruction-permit/",
  },
  {
    key: "dmv-permit-two-years",
    quote:
      "Instruction permits are valid for two years, and may be renewed one " +
      "time.",
    source: DMV_TEST,
    section: "Instruction Permit",
    url: "https://dmv.alaska.gov/credential-services/instruction-permit/",
  },
  {
    key: "dmv-provisional-penalty",
    quote:
      "Violating the restrictions incurs an infraction, carrying a penalty " +
      "of $200.00 and a 2-point violation, which will be recorded on your " +
      "driving history.",
    source: DMV_TEST,
    section: "Provisional License",
    url: "https://dmv.alaska.gov/credential-services/provisional-license/",
  },
  {
    key: "dmv-provisional-permit-conviction",
    quote:
      "If you are found guilty of breaking a traffic law, you will be " +
      "required to wait six months before you are eligible to apply for " +
      "your provisional driver's license.",
    source: DMV_TEST,
    section: "Provisional License",
    url: "https://dmv.alaska.gov/credential-services/provisional-license/",
  },
  {
    key: "dmv-provisional-points-course",
    quote:
      "Additionally, accumulating traffic citations that add up to 6 or " +
      "more points within a 12-month period, or 9 or more points within a " +
      "24-month period, mandates enrollment in a nationally certified " +
      "defensive driving course.",
    source: DMV_TEST,
    section: "Provisional License",
    url: "https://dmv.alaska.gov/credential-services/provisional-license/",
  },
  {
    key: "dmv-provisional-requirements",
    quote:
      "You must have held a learner's permit for a minimum of six (6) " +
      "months You cannot have been convicted of a traffic violation or had " +
      "your license suspended or revoked in the previous six months from " +
      "the date of application. Completed Parental Consent ( form 433 ).",
    source: DMV_TEST,
    section: "Provisional License",
    url: "https://dmv.alaska.gov/credential-services/provisional-license/",
  },
  {
    key: "dmv-provisional-restrictions",
    quote:
      "You may not carry passengers under the age of 21, except siblings. " +
      "You may not drive between 1:00 & 5:00 a.m.",
    source: DMV_TEST,
    section: "Provisional License",
    url: "https://dmv.alaska.gov/credential-services/provisional-license/",
  },
  {
    key: "dmv-under-18-stages",
    quote:
      "If you are between 14 and 16, you may apply for a instruction permit " +
      ". If you are between 16 and 18, you may apply for a provisional " +
      "license .",
    source: DMV_TEST,
    section: "Your First Alaska Driver's License",
    url: "https://dmv.alaska.gov/credential-services/your-first-alaska-drivers-license/",
  },
  {
    key: "drinking-effects",
    quote:
      "When you drink, the alcohol quickly reaches the blood stream from " +
      "the stomach, and quickly begins to affect the functioning of the " +
      "brain. It slows reactions, interferes with vision, and reduces your " +
      "sense of responsibility.",
    source: MANUAL,
    section: "How Drinking Affects a Driver",
    url: MANUAL_URL + "#page=23",
  },
  {
    key: "driving-privilege-closing",
    quote:
      "Privilege - Driving is a privilege, not a right. ➧ Distracted " +
      "Driving - The use of cell phones, eating, grooming, playing the " +
      "radio or CD player extremely loud, or other activities while driving " +
      "contributes to crashes.",
    source: MANUAL,
    section: "Driving Involves Many Issues",
    url: MANUAL_URL + "#page=94",
  },
  {
    key: "driving-record-fee",
    quote:
      "For a fee of $10.00 a driving record may be provided to the driver, " +
      "or a person designated by the driver.",
    source: MANUAL,
    section: "Other Information - Driving Records",
    url: MANUAL_URL + "#page=13",
  },
  {
    key: "driving-suspended-jail",
    quote:
      "Conviction of driving while license is cancelled, suspended, " +
      "revoked, or in violation of a limited license will result in a jail " +
      "sentence of not less than 10 days.",
    source: MANUAL,
    section: "Driver's License Requirements",
    url: MANUAL_URL + "#page=9",
  },
  {
    key: "driving-test-alone",
    quote:
      "No one is allowed to accompany you and the examiner during the " +
      "driving test.",
    source: MANUAL,
    section: "Examinations - Driving",
    url: MANUAL_URL + "#page=11",
  },
  {
    key: "driving-test-retake",
    quote:
      "Normally, you must wait two business days to retake the test. A " +
      "\"business day\" is Monday- Friday not a State or Federal Holiday.",
    source: MANUAL,
    section: "Examinations - Driving",
    url: MANUAL_URL + "#page=11",
  },
  {
    key: "driving-test-vehicle",
    quote:
      "You must furnish a currently registered vehicle with proof of " +
      "insurance for the test. The vehicle will be checked for required " +
      "equipment, which must be in good working condition and properly " +
      "adjusted.",
    source: MANUAL,
    section: "Examinations - Driving",
    url: MANUAL_URL + "#page=11",
  },
  {
    key: "driving-test-who",
    quote:
      "The driving test is required for applicants who have never been " +
      "licensed, or who have not had a valid license for the past 5 years, " +
      "or whose driving privileges have been revoked.",
    source: MANUAL,
    section: "Examinations - Driving",
    url: MANUAL_URL + "#page=11",
  },
  {
    key: "drowsy-break-100-miles",
    quote: "Take a break and get out from the vehicle every 100 miles.",
    source: MANUAL,
    section: "Quit Driving When Drowsy",
    url: MANUAL_URL + "#page=68",
  },
  {
    key: "drowsy-first-step",
    quote: "Drowsiness is the first step in falling asleep.",
    source: MANUAL,
    section: "Quit Driving When Drowsy",
    url: MANUAL_URL + "#page=68",
  },
  {
    key: "drugs-combination",
    quote:
      "The combination of other drugs and alcohol increases the effects of " +
      "each individual drug. It has been estimated that at least 25 percent " +
      "of the prescription drugs used today can interact with alcohol.",
    source: MANUAL,
    section: "Drugs",
    url: MANUAL_URL + "#page=24",
  },
  {
    key: "drugs-controlled-substance",
    quote:
      "Alaska law also forbids driving under the influence of \"any " +
      "controlled substance,\" which includes narcotic and non-narcotic " +
      "drugs, not just \"illegal\" drugs.",
    source: MANUAL,
    section: "Drugs",
    url: MANUAL_URL + "#page=24",
  },
  {
    key: "drugs-otc",
    quote:
      "Drugs, including some allergy remedies and cold pills which you can " +
      "buy without prescription may contain compounds that can affect your " +
      "driving.",
    source: MANUAL,
    section: "Drugs",
    url: MANUAL_URL + "#page=24",
  },
  {
    key: "drugs-prescription",
    quote:
      "When taking prescription medicine, ask your doctor about any " +
      "possible side effects that relate to driving.",
    source: MANUAL,
    section: "Drugs",
    url: MANUAL_URL + "#page=24",
  },
  {
    key: "drugs-same-penalties",
    quote:
      "The penalties for driving under the influence of a controlled " +
      "substance are the same as outlined previously for driving under the " +
      "influence of alcohol.",
    source: MANUAL,
    section: "Drugs",
    url: MANUAL_URL + "#page=24",
  },
  {
    key: "due-care",
    quote:
      "Every driver of a vehicle must exercise care to avoid crashes with " +
      "pedestrians (people walking or riding a bicycle), an animal or " +
      "another vehicle. You must be able to stop if necessary and shall " +
      "slow down when circumstances require.",
    source: MANUAL,
    section: "Drivers to Exercise Due Care",
    url: MANUAL_URL + "#page=30",
  },
  {
    key: "dui-average-cost",
    quote:
      "Free Taxi: $2 per mile Public Transit: $2 Average cost of your first " +
      "DUI - $22,740 Average cost of an alternative ride $15",
    source: MANUAL,
    section: "Alcohol - Drugs - Driving",
    url: MANUAL_URL + "#page=19",
  },
  {
    key: "dui-cost-consequences",
    quote:
      "BEFORE YOU DRINK AND DRIVE CONSIDER THE CONSEQUENCES AND " +
      "ALTERNATIVES… CONSEQUENCES 3 Days in Jail: $270 Court Fines: $1,500 " +
      "Sentencing: $250 + Vehicle Impound Fee: $300 + Loss of Car: $$$ (30 " +
      "days) Attorney (yours):",
    source: MANUAL,
    section: "Alcohol - Drugs - Driving",
    url: MANUAL_URL + "#page=19",
  },
  {
    key: "dui-points-permanent",
    quote: "10 points on your driving record DUI's stay on your record forever",
    source: MANUAL,
    section: "Alcohol - Drugs - Driving",
    url: MANUAL_URL + "#page=19",
  },
  {
    key: "dui-revocation-90-days",
    quote:
      "90 days for a first offense; 1 year if you have been previously " +
      "convicted of DUI or Refusal; 3 years if you have two prior " +
      "convictions of DUI or Refusal, or 5 years if you have three or more " +
      "prior convictions of DUI or Refusal.",
    source: MANUAL,
    section: "Administrative Revocations",
    url: MANUAL_URL + "#page=20",
  },
  {
    key: "dui-revocation-not-guilty",
    quote:
      "This revocation will occur even if the criminal charge of DUI or " +
      "Refusal is dismissed, or you are found not guilty in court.",
    source: MANUAL,
    section: "Administrative Revocations",
    url: MANUAL_URL + "#page=20",
  },
  {
    key: "eco-idling",
    quote:
      "Idling wastes fuel and may be prohibited. If you need to idle, shift " +
      "to neutral so the engine is not working against your brake and " +
      "consuming more fuel. As a rule of thumb, tum off your car for stops " +
      "anticipated to be longer than 30-60 seconds.",
    source: MANUAL,
    section: "Driving Habits to Adopt",
    url: MANUAL_URL + "#page=86",
  },
  {
    key: "eco-slow-down",
    quote:
      "Fuel consumption increases about 5% for every five miles per hour " +
      "driven above 60 mph.",
    source: MANUAL,
    section: "Driving Habits to Adopt",
    url: MANUAL_URL + "#page=85",
  },
  {
    key: "eco-warm-up",
    quote:
      "Even on the coldest days, it only takes 30 seconds to get your " +
      "vehicle ready to drive. Today's engines are designed to run most " +
      "efficiently when warmed up, so warm up the vehicle by driving it.",
    source: MANUAL,
    section: "Driving Habits to Adopt",
    url: MANUAL_URL + "#page=85",
  },
  {
    key: "emergency-follow-500",
    quote:
      "A vehicle may not follow an emergency vehicle traveling in response " +
      "to an emergency closer than 500 feet. Do not park a vehicle within " +
      "500 feet where fire apparatus has stopped and displays flashing red " +
      "and/or blue lights.",
    source: MANUAL,
    section: "Following Emergency Vehicle",
    url: MANUAL_URL + "#page=76",
  },
  {
    key: "emergency-lights-sirens",
    quote:
      "Vehicles operated by police and fire departments as well as " +
      "ambulances are equipped with sirens and front red and/or blue " +
      "lights.",
    source: MANUAL,
    section: "Emergency Vehicles",
    url: MANUAL_URL + "#page=76",
  },
  {
    key: "emergency-move-lane-away",
    quote:
      "Yield the right of way to emergency vehicle approaching from any " +
      "direction by moving to the lane away from the emergency vehicle.",
    source: MANUAL,
    section: "Approaching Emergency Vehicles",
    url: MANUAL_URL + "#page=76",
  },
  {
    key: "emergency-one-lane",
    quote:
      "If moving to another lane is not possible, or there is only one lane " +
      "in the direction you are traveling, slow down to a reasonable speed " +
      "and drive safely around the scene.",
    source: MANUAL,
    section: "Approaching Emergency Vehicles",
    url: MANUAL_URL + "#page=76",
  },
  {
    key: "emergency-stationary",
    quote:
      "When encountering stationary emergency vehicles or tow trucks with " +
      "overhead flashing lights on a four-lane road, drivers must pull to " +
      "the lane opposite the emergency vehicle/tow truck if it is safe to " +
      "do so.",
    source: MANUAL,
    section: "Encountering Stationary Emergency Vehicles",
    url: MANUAL_URL + "#page=76",
  },
  {
    key: "emergency-unauthorized-lights",
    quote:
      "It is against the law for an unauthorized vehicle to have a red " +
      "light visible from the front, or a blue light visible from the side.",
    source: MANUAL,
    section: "Emergency Vehicles",
    url: MANUAL_URL + "#page=76",
  },
  {
    key: "emergency-yield-pull-right",
    quote:
      "the driver of every vehicle proceeding in any direction shall yield " +
      "the right-of-way by slowing and pulling to the righthand edge of the " +
      "roadway, clear of an intersection and stopping, to await passage of " +
      "the emergency vehicle.",
    source: MANUAL,
    section: "Emergency Vehicles",
    url: MANUAL_URL + "#page=76",
  },
  {
    key: "equipment-foot-brake",
    quote:
      "Adequate to stop passenger vehicle within 25 feet at a speed of 20 " +
      "miles per hour.",
    source: MANUAL,
    section: "Required Equipment",
    url: MANUAL_URL + "#page=80",
  },
  {
    key: "equipment-headlights",
    quote: "At least two, one on each side on the front.",
    source: MANUAL,
    section: "Required Equipment",
    url: MANUAL_URL + "#page=80",
  },
  {
    key: "equipment-licence-plate",
    quote:
      "Must have a single license plate with month and year tabs displayed " +
      "on rear of vehicle.",
    source: MANUAL,
    section: "Required Equipment",
    url: MANUAL_URL + "#page=80",
  },
  {
    key: "equipment-mirror",
    quote:
      "Left side and inside or right mirror required. Vehicles with " +
      "obstructed driver's view through rear window and buses are required " +
      "to have mirrors on left and right side.",
    source: MANUAL,
    section: "Required Equipment",
    url: MANUAL_URL + "#page=80",
  },
  {
    key: "equipment-parking-brake",
    quote: "Adequate to hold vehicle stationary on any grade.",
    source: MANUAL,
    section: "Required Equipment",
    url: MANUAL_URL + "#page=80",
  },
  {
    key: "equipment-plate-light",
    quote:
      "A white light must illuminate the rear license plate so that numbers " +
      "are visible for at least 50 ft., if equipped.",
    source: MANUAL,
    section: "Required Equipment",
    url: MANUAL_URL + "#page=80",
  },
  {
    key: "equipment-taillights",
    quote: "At least two red lights on the rear.",
    source: MANUAL,
    section: "Required Equipment",
    url: MANUAL_URL + "#page=80",
  },
  {
    key: "equipment-turn-signals",
    quote:
      "All vehicles must be equipped with directional signals, and they " +
      "must be in working order.",
    source: MANUAL,
    section: "Required Equipment",
    url: MANUAL_URL + "#page=80",
  },
  {
    key: "equipment-windshield",
    quote:
      "Windshield, side wings, side, and rear windows must be safety glass " +
      "and afford driver clear vision.",
    source: MANUAL,
    section: "Required Equipment",
    url: MANUAL_URL + "#page=80",
  },
  {
    key: "fatal-crashes-daylight",
    quote:
      "More fatal crashes occurred during daylight hours with normal " +
      "surface, clear weather conditions, and the vehicle in good " +
      "mechanical condition than under any other condition. The driver is " +
      "the greatest singular cause of traffic crashes.",
    source: MANUAL,
    section: "Control of Vehicle",
    url: MANUAL_URL + "#page=30",
  },
  {
    key: "fees-table",
    quote:
      "License Type Standard Federally Compliant Non-Commercial Driver " +
      "License $20 $40 Commercial Driver License $100 $120 Motorcycle " +
      "License $20 $40 Instruction Permit $15 $35 DUPLICATE LICENSE:",
    source: MANUAL,
    section: "Other Information - Fees",
    url: MANUAL_URL + "#page=13",
  },
  {
    key: "financial-responsibility-suspension",
    quote:
      "If there is a reasonable possibility that you may be found liable in " +
      "a civil court, your privilege to drive will be suspended for up to " +
      "three years. You can end your suspension, at any time during the " +
      "three-year period, by making a financial settlement with the other " +
      "parties involved in the crash.",
    source: MANUAL,
    section: "Financial Responsibility Laws",
    url: MANUAL_URL + "#page=14",
  },
  {
    key: "fire-hose",
    quote:
      "Do not drive over a hose of a fire department without the consent of " +
      "a department official. Driving your vehicle over any fire hose is " +
      "not permissible under Alaska law.",
    source: MANUAL,
    section: "Do Not Cross Fire Hoses",
    url: MANUAL_URL + "#page=77",
  },
  {
    key: "flag-persons",
    quote:
      "Flag persons are often provided in highway and street work zones to " +
      "stop, slow, or guide traffic safely through the area. Flag persons " +
      "generally wear orange vests, shirts or jackets, and use red flags or " +
      "stop/slow paddles to direct traffic through work zones.",
    source: MANUAL,
    section: "Signs Within Work Areas",
    url: MANUAL_URL + "#page=47",
  },
  {
    key: "flashing-red-arrow",
    quote:
      "FLASHING RED ARROW Stop behind the crosswalk, stop line, or if none, " +
      "before entering the intersection. Look in all directions for " +
      "approaching traffic and pedestrians and proceed only when it is safe " +
      "to do so.",
    source: MANUAL,
    section: "Traffic Signals - Flashing Red Arrow",
    url: MANUAL_URL + "#page=56",
  },
  {
    key: "flashing-red-ball",
    quote:
      "FLASHING RED BALL Stop behind the crosswalk, stop line, or if none, " +
      "before entering the intersection. Look in all directions for " +
      "approaching traffic and pedestrians and proceed only when it is safe " +
      "to do so.",
    source: MANUAL,
    section: "Traffic Signals - Flashing Red Ball",
    url: MANUAL_URL + "#page=56",
  },
  {
    key: "flashing-red-beacons",
    quote:
      "Individual flashing red balls (beacons) may be suspended over the " +
      "roadway or located above stop signs. They supplement the sign where " +
      "there may be a need for special emphasis.",
    source: MANUAL,
    section: "Traffic Signals - Flashing Red Ball",
    url: MANUAL_URL + "#page=56",
  },
  {
    key: "flashing-yellow-arrow",
    quote:
      "FLASHING YELLOW ARROW Exercise caution while making the movement " +
      "indicated by the arrow. Yield to oncoming traffic, pedestrians, and " +
      "vehicles in the intersection.",
    source: MANUAL,
    section: "Traffic Signals - Flashing Yellow Arrow",
    url: MANUAL_URL + "#page=56",
  },
  {
    key: "flashing-yellow-ball",
    quote:
      "FLASHING YELLOW BALL Reduce speed and exercise caution. Yield to " +
      "pedestrians and vehicles in the intersection.",
    source: MANUAL,
    section: "Traffic Signals - Flashing Yellow Ball",
    url: MANUAL_URL + "#page=56",
  },
  {
    key: "flood-do-not-drive",
    quote:
      "Do not drive through flooded areas. If you see a flooded roadway " +
      "ahead, turn around and find another route to get to your " +
      "destination.",
    source: MANUAL,
    section: "Flooding",
    url: MANUAL_URL + "#page=84",
  },
  {
    key: "flood-hidden-dips",
    quote:
      "Even if the water appears shallow enough to cross, do not attempt to " +
      "cross a flooded road. Water can hide dips, or worse, floodwaters can " +
      "damage roadways by washing away the underlying road surface.",
    source: MANUAL,
    section: "Flooding",
    url: MANUAL_URL + "#page=84",
  },
  {
    key: "flood-six-inches",
    quote:
      "Remember, 6 inches of water will reach the bottom of most passenger " +
      "cars, causing loss of control or possible stalling.",
    source: MANUAL,
    section: "Flooding",
    url: MANUAL_URL + "#page=84",
  },
  {
    key: "flood-two-feet",
    quote:
      "Two feet of moving water can carry away most vehicles including " +
      "sport utility vehicles and pick-up trucks.",
    source: MANUAL,
    section: "Flooding",
    url: MANUAL_URL + "#page=84",
  },
  {
    key: "following-five-vehicles",
    quote:
      "AS 28.35.140 requires drivers on a two-lane roadway outside of an " +
      "urban area to safely pull over when there are five or more vehicles " +
      "immediately behind.",
    source: MANUAL,
    section: "What the Law Says About Following",
    url: MANUAL_URL + "#page=32",
  },
  {
    key: "following-law",
    quote:
      "A driver of a motor vehicle may not follow another vehicle more " +
      "closely than is reasonable and prudent, having due regard for speed, " +
      "traffic, and conditions of the roadway.",
    source: MANUAL,
    section: "What the Law Says About Following",
    url: MANUAL_URL + "#page=32",
  },
  {
    key: "four-second-count",
    quote:
      "Then count - \"one thousand and one, one thousand and two, one thou- " +
      "sand and three, one thousand and four.\" That's four seconds. If you " +
      "pass the same point before you are finished counting, you are " +
      "following too closely.",
    source: MANUAL,
    section: "How to Avoid Rear End Collisions",
    url: MANUAL_URL + "#page=32",
  },
  {
    key: "four-second-headlights",
    quote:
      "You also can use the \"Four Second Rule\" at night to make sure you " +
      "are not \"over- driving your headlights.\" 2.",
    source: MANUAL,
    section: "How to Avoid Rear End Collisions",
    url: MANUAL_URL + "#page=32",
  },
  {
    key: "four-second-increase",
    quote:
      "When towing a trailer or the road surface is wet or slippery, " +
      "increase the four seconds to six or more.",
    source: MANUAL,
    section: "How to Avoid Rear End Collisions",
    url: MANUAL_URL + "#page=32",
  },
  {
    key: "four-second-rule",
    quote:
      "The easiest way to calculate a safe following distance is by the " +
      "four-second interval method. Watch the back of the vehicle ahead of " +
      "you pass some definite point.",
    source: MANUAL,
    section: "How to Avoid Rear End Collisions",
    url: MANUAL_URL + "#page=32",
  },
  {
    key: "fraudulent-licence-alcohol",
    quote:
      "Alaska law allows the Division of Motor Vehicles to revoke the " +
      "driving privilege of a person who uses a false or fraudulent " +
      "driver's license to obtain alcohol. The revocation periods are 60 " +
      "days for a first offense and 1 year for subsequent offenses.",
    source: MANUAL,
    section: "Administrative Revocations - Fraudulent Use of a Driver's License",
    url: MANUAL_URL + "#page=20",
  },
  {
    key: "freeway-acceleration-lane",
    quote:
      "Use the acceleration lane to get up to cruising speed before " +
      "attempting to merge into the traffic stream.",
    source: MANUAL,
    section: "Entering the Controlled Access Highway-Freeway",
    url: MANUAL_URL + "#page=70",
  },
  {
    key: "freeway-deceleration-lane",
    quote:
      "Keep moving on the expressway. A stop can result in a serious rear " +
      "end crash.",
    source: MANUAL,
    section: "Leaving the Expressway",
    url: MANUAL_URL + "#page=70",
  },
  {
    key: "freeway-dim-divided",
    quote:
      "Dimming of headlights is required on divided highways as it is " +
      "elsewhere.",
    source: MANUAL,
    section: "Leaving the Expressway",
    url: MANUAL_URL + "#page=70",
  },
  {
    key: "freeway-missed-exit",
    quote: "Watch for exit signs. If you miss an exit don't back up.",
    source: MANUAL,
    section: "Leaving the Expressway",
    url: MANUAL_URL + "#page=70",
  },
  {
    key: "freeway-no-parking",
    quote:
      "Except in the case of emergency, parking is prohibited on the paved " +
      "portion of the highway, the shoulders, or anywhere within " +
      "right-of-way.",
    source: MANUAL,
    section: "Leaving the Expressway",
    url: MANUAL_URL + "#page=70",
  },
  {
    key: "freeway-yield-entering",
    quote:
      "Yield to approaching traffic on the freeway as you are about to " +
      "enter and stop, if necessary, but be cautious of the vehicles " +
      "following you.",
    source: MANUAL,
    section: "Entering the Controlled Access Highway-Freeway",
    url: MANUAL_URL + "#page=70",
  },
  {
    key: "glare-recovery",
    quote:
      "The glare from the headlights of oncoming vehicles causes the pupil " +
      "of the eye to contract. After the vehicle has passed it takes an " +
      "interval of time for the pupil to readjust to the less intense " +
      "light.",
    source: MANUAL,
    section: "Glare and Glare Recovery",
    url: MANUAL_URL + "#page=66",
  },
  {
    key: "glare-recovery-blind",
    quote:
      "During this recovery period you are virtually driving blind. Glare " +
      "recovery time is not based on visual acuity and varies from person " +
      "to person.",
    source: MANUAL,
    section: "Glare and Glare Recovery",
    url: MANUAL_URL + "#page=66",
  },
  {
    key: "green-arrow",
    quote:
      "GREEN ARROW Make the movement indicated by the arrow. This movement " +
      "has the right-of-way and should not conflict with pedestrians or " +
      "other vehicles.",
    source: MANUAL,
    section: "Traffic Signals - Green Arrow",
    url: MANUAL_URL + "#page=56",
  },
  {
    key: "green-arrow-caution",
    quote:
      "However, observe caution and yield to those who are still in or " +
      "enter the intersection with the right- of-way.",
    source: MANUAL,
    section: "Traffic Signals - Green Arrow",
    url: MANUAL_URL + "#page=56",
  },
  {
    key: "green-ball",
    quote:
      "GREEN BALL Go if the intersection is clear. Make any legal maneuver " +
      "not specifically prohibited by a traffic control device.",
    source: MANUAL,
    section: "Traffic Signals - Green Ball",
    url: MANUAL_URL + "#page=55",
  },
  {
    key: "green-ball-yield",
    quote:
      "Yield to pedestrians and vehicles still in or who enter the " +
      "intersection with the right-of-way, such as pedestrians traveling " +
      "across the roadway with the green light. Yield to vehicles going " +
      "straight through the intersection in the opposite direction if you " +
      "are making a left turn.",
    source: MANUAL,
    section: "Traffic Signals - Green Ball",
    url: MANUAL_URL + "#page=55",
  },
  {
    key: "head-on-approaching",
    quote:
      "VEHICLE APPROACHING IN YOUR LANE Sound your horn. Brake sharply. " +
      "Steer for shoulder or ditch.",
    source: MANUAL,
    section: "Emergencies - Vehicle Approaching in Your Lane",
    url: MANUAL_URL + "#page=78",
  },
  {
    key: "headlights-1000-feet",
    quote:
      "Headlights must be turned on in daytime when visibility is reduced " +
      "to 1000 feet or less by fog, rain, snow, smoke, or dust.",
    source: MANUAL,
    section: "Lighting Law",
    url: MANUAL_URL + "#page=67",
  },
  {
    key: "headlights-dim-300",
    quote:
      "Change headlights to low beam (dim) 300 feet or more from vehicle " +
      "going in the same direction.",
    source: MANUAL,
    section: "Lighting Law",
    url: MANUAL_URL + "#page=67",
  },
  {
    key: "headlights-dim-500",
    quote:
      "Change headlights to low beam (dim) 500 feet or more from oncoming " +
      "vehicle.",
    source: MANUAL,
    section: "Lighting Law",
    url: MANUAL_URL + "#page=67",
  },
  {
    key: "headlights-sunset",
    quote:
      "Headlights must be turned on from 1/2 hour after sunset to 1/2 hour " +
      "before sunrise.",
    source: MANUAL,
    section: "Lighting Law",
    url: MANUAL_URL + "#page=67",
  },
  {
    key: "hearing-in-writing",
    quote: "You must ask for the hearing in writing.",
    source: MANUAL,
    section: "Administrative Hearing",
    url: MANUAL_URL + "#page=21",
  },
  {
    key: "hearing-seven-days",
    quote:
      "You must apply within seven (7) days of the \"Date Issued\" on the " +
      "front side of this notice, unless you qualify for a late hearing due " +
      "to physical incapacity under AS 01.10.080, AS 28.15.166(b), AS " +
      "44.12.010 and/or 2 AAC 93.010(b).",
    source: MANUAL,
    section: "Administrative Hearing",
    url: MANUAL_URL + "#page=21",
  },
  {
    key: "hearing-temporary-licence",
    quote:
      "If you make a timely request for a hearing and you have a valid " +
      "license to drive, you will get a temporary license. Unless you are " +
      "revoked by the court, the temporary license lets you drive until the " +
      "date of the hearing.",
    source: MANUAL,
    section: "Administrative Hearing",
    url: MANUAL_URL + "#page=21",
  },
  {
    key: "horn-200-feet",
    quote:
      "Capable of emitting sound audible under normal conditions from not " +
      "less than 200 feet. No device shall emit an unusually loud sound or " +
      "whistle.",
    source: MANUAL,
    section: "Required Equipment",
    url: MANUAL_URL + "#page=80",
  },
  {
    key: "horn-unnecessary",
    quote:
      "UNNECESSARY USE OF HORN Audible signal devices may not be used " +
      "unless necessary to assure safe operation.",
    source: MANUAL,
    section: "Unnecessary Use of Horn",
    url: MANUAL_URL + "#page=81",
  },
  {
    key: "id-required",
    quote:
      "While you don't need to present your card, the social security " +
      "number must match what is in the Social Security Database used by " +
      "the division.",
    source: MANUAL,
    section: "Identification",
    url: MANUAL_URL + "#page=6",
  },
  {
    key: "iid-required",
    quote:
      "When convicted of a DUI or Refusal, use of an ignition interlock " +
      "device is required on any vehicle you operate.",
    source: MANUAL,
    section: "Ignition Interlock Device (IID)",
    url: MANUAL_URL + "#page=23",
  },
  {
    key: "iid-schedule",
    quote:
      "DUI/Refusal Convictions Period of IID installed 1 st 6 months 2 nd " +
      "12 months 3 rd 18 months 4 th 24 months 5 th 30 months You are " +
      "responsible for IID installation and maintenance costs.",
    source: MANUAL,
    section: "Ignition Interlock Device (IID)",
    url: MANUAL_URL + "#page=23",
  },
  {
    key: "iid-six-months",
    quote:
      "If you have been convicted of only one DUI or Refusal you will need " +
      "to have the IID installed for a minimum of six (6) months.",
    source: MANUAL,
    section: "Ignition Interlock Device (IID)",
    url: MANUAL_URL + "#page=23",
  },
  {
    key: "impact-four-times",
    quote:
      "The impact is 4 times greater at 40 mph than at 20 mph. The braking " +
      "distance is also 4 times longer.",
    source: MANUAL,
    section: "Speed, Impact and Braking Distance",
    url: MANUAL_URL + "#page=33",
  },
  {
    key: "impact-nine-sixteen",
    quote:
      "Triple the speed from 20 to 60 mph and the impact and braking " +
      "distance are 9 times greater. Increase the speed to 80 mph and the " +
      "impact and braking distance are 16 times greater than at 20 miles " +
      "per hour.",
    source: MANUAL,
    section: "Speed, Impact and Braking Distance",
    url: MANUAL_URL + "#page=33",
  },
  {
    key: "implied-consent",
    quote:
      "When you operate or drive a motor vehicle in the State of Alaska, " +
      "you are consenting to a chemical test of your breath for the purpose " +
      "of determining the alcohol concentration of your blood or breath. " +
      "This is known as implied consent.",
    source: MANUAL,
    section: "Implied Consent",
    url: MANUAL_URL + "#page=18",
  },
  {
    key: "implied-consent-blood",
    quote:
      "Law enforcement officers to require a sample of your blood or urine " +
      "for alcohol or con- trolled substance testing if you are involved in " +
      "a crash that causes death or serious physical injury to another " +
      "person.",
    source: MANUAL,
    section: "Implied Consent",
    url: MANUAL_URL + "#page=18",
  },
  {
    key: "implied-consent-breath",
    quote:
      "Law enforcement officers to require a sample of your breath for " +
      "alcohol testing after a lawful arrest for Driving Under the " +
      "Influence (DUI).",
    source: MANUAL,
    section: "Implied Consent",
    url: MANUAL_URL + "#page=18",
  },
  {
    key: "insurance-15-days",
    quote:
      "If you are involved in a crash, which results in bodily injury or " +
      "death to a person, or property damage in excess of $501, you must " +
      "provide - within 15 days - proof of insurance to the Division of " +
      "Motor Vehicles.",
    source: MANUAL,
    section: "Financial Responsibility Laws",
    url: MANUAL_URL + "#page=14",
  },
  {
    key: "insurance-all-drivers",
    quote:
      "Proof of insurance is required from all the drivers involved in the " +
      "crash regardless of who caused the crash. This means you must " +
      "provide the proof of insurance even if you did not cause the crash.",
    source: MANUAL,
    section: "Financial Responsibility Laws",
    url: MANUAL_URL + "#page=14",
  },
  {
    key: "insurance-carry-proof",
    quote:
      "You must carry proof of liability insurance in your vehicle. Failure " +
      "to provide proof of liability insurance to a law enforcement officer " +
      "may result in a traffic citation or the vehicle may be impounded.",
    source: MANUAL,
    section: "Financial Responsibility Laws",
    url: MANUAL_URL + "#page=14",
  },
  {
    key: "insurance-closing",
    quote:
      "Insurance - Vehicle insurance coverage is mandatory in Alaska; " +
      "either the vehicle owner or the driver must have liability insurance " +
      "coverage.",
    source: MANUAL,
    section: "Driving Involves Many Issues",
    url: MANUAL_URL + "#page=94",
  },
  {
    key: "insurance-mandatory",
    quote:
      "The Mandatory Insurance Law requires either the vehicle owner or " +
      "driver to carry liability insurance.",
    source: MANUAL,
    section: "Financial Responsibility Laws",
    url: MANUAL_URL + "#page=14",
  },
  {
    key: "insurance-minimums",
    quote:
      "The minimum amount of liability insurance coverage is " +
      "$50,000/$100,000 for bodily injury or death and $25,000 for property " +
      "damage.",
    source: MANUAL,
    section: "Financial Responsibility Laws",
    url: MANUAL_URL + "#page=14",
  },
  {
    key: "insurance-suspension",
    quote:
      "If you were uninsured or fail to provide the proof within 15 days, " +
      "your driver's license will be suspended for 90 days for a first " +
      "occurrence and 1 year for a second occurrence.",
    source: MANUAL,
    section: "Financial Responsibility Laws",
    url: MANUAL_URL + "#page=14",
  },
  {
    key: "intersection-reduce-speed",
    quote:
      "Drivers shall reduce their speed to a reasonable and proper rate " +
      "when approaching and traversing an intersection.",
    source: MANUAL,
    section: "Intersections - Control of Vehicle",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "keep-right-slower",
    quote:
      "On multi-lane highways - If you drive slower than other traffic, use " +
      "the right, outside lane, except when passing.",
    source: MANUAL,
    section: "Speed Limitation Law",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "lane-change-steps",
    quote:
      "CHANGING LANES 1. Use mirrors. 2. Check blind spots. 3. Signal " +
      "intentions. 4. Check mirrors and blind spots again. 5. Change lanes " +
      "gradually and carefully.",
    source: MANUAL,
    section: "Changing Lanes",
    url: MANUAL_URL + "#page=69",
  },
  {
    key: "lane-control-not-lit",
    quote:
      "Use such lane only as permitted by the signal. Do not enter the lane " +
      "if signals are not illuminated.",
    source: MANUAL,
    section: "Lane Control Signals",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "lane-control-signals",
    quote:
      "LANE CONTROL SIGNALS Distinctive signals with X's or down arrows are " +
      "used above reversible lanes. Such lanes may be marked with double " +
      "yellow dashed lines on each side.",
    source: MANUAL,
    section: "Lane Control Signals",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "leaving-backing-residential",
    quote:
      "Exercise extraordinary caution when backing up in residential areas. " +
      "Children may be present behind and between parked vehicles.",
    source: MANUAL,
    section: "Leaving Parking Space",
    url: MANUAL_URL + "#page=75",
  },
  {
    key: "leaving-parking-space",
    quote:
      "The chief responsibility for avoiding a collision lies with the " +
      "driver who is leaving a parking space.",
    source: MANUAL,
    section: "Leaving Parking Space",
    url: MANUAL_URL + "#page=75",
  },
  {
    key: "left-one-to-one",
    quote:
      "Turn sharply into the first lane on the left side of the one-way " +
      "street.",
    source: MANUAL,
    section: "Left Turn One Way Street to One Way Street",
    url: MANUAL_URL + "#page=37",
  },
  {
    key: "left-turn-not-past-center",
    quote:
      "Wait for oncoming vehicles before entering the intersection. Don't " +
      "proceed past the center of intersection.",
    source: MANUAL,
    section: "Left Turn",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "left-turn-wheels-straight",
    quote:
      "Wait for oncoming vehicles before entering the intersection. Don't " +
      "proceed past the center of intersection. 3. Keep front wheels " +
      "straight while waiting.",
    source: MANUAL,
    section: "Left Turn",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "left-turn-yield-oncoming",
    quote: "Yield to all oncoming vehicles.",
    source: MANUAL,
    section: "Left Turn",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "licence-age-16",
    quote:
      "A license may be issued to an applicant who is at least 16 years of " +
      "age.",
    source: MANUAL,
    section: "Driver's License Requirements",
    url: MANUAL_URL + "#page=9",
  },
  {
    key: "licence-classes",
    quote:
      "Alaska has seven classes of driver's licenses and two types of " +
      "permits.",
    source: MANUAL,
    section: "Licenses and Permits",
    url: MANUAL_URL + "#page=6",
  },
  {
    key: "licence-possession",
    quote:
      "The license must be always in the licensee's possession while " +
      "driving.",
    source: MANUAL,
    section: "Driver's License Requirements",
    url: MANUAL_URL + "#page=9",
  },
  {
    key: "licence-privilege",
    quote: "Driving is a privilege, not a right.",
    source: MANUAL,
    section: "Driver's License Requirements",
    url: MANUAL_URL + "#page=9",
  },
  {
    key: "licence-under-21-expiry",
    quote:
      "If you are under 21 years of age your driver's license will expire " +
      "90 days after your 21st birthday. An alcohol awareness test must be " +
      "passed prior to renewing.",
    source: MANUAL,
    section: "Driver's License Requirements",
    url: MANUAL_URL + "#page=9",
  },
  {
    key: "litter-truck-loads",
    quote:
      "Up to 45% of Alaska's liter comes from uncovered or unsecured truck " +
      "loads. Roadside Litter is not only unsightly but can be dangerous to " +
      "motorists.",
    source: MANUAL,
    section: "Littering",
    url: MANUAL_URL + "#page=91",
  },
  {
    key: "littering-penalty",
    quote:
      "The penalty for littering in Alaska is a fine up to $1000; a maximum " +
      "of 90 days imprisonment, and a possible court-imposed penalty of " +
      "gathering litter in a specified area for a specified time.",
    source: MANUAL,
    section: "Littering",
    url: MANUAL_URL + "#page=91",
  },
  {
    key: "low-beam-fog",
    quote: "Use low beam (dim) when driving in rain, fog, snow, or dust.",
    source: MANUAL,
    section: "Safety Suggestions for the Use of Lighting Equipment",
    url: MANUAL_URL + "#page=67",
  },
  {
    key: "major-roads-tires",
    quote:
      "Be sure tires are safe for high-speed driving. Blowouts are a common " +
      "factor in crashes.",
    source: MANUAL,
    section: "Major Roads - Check Vehicle",
    url: MANUAL_URL + "#page=68",
  },
  {
    key: "manual-not-in-test",
    quote:
      "THIS MANUAL MAY NOT BE USED DURING THE TEST TO ALL WHO NOW DRIVE and " +
      "those who will drive: a safe driver must constantly demonstrate a " +
      "courteous attitude and exercise sound judgment.",
    source: MANUAL,
    section: "Preface",
    url: MANUAL_URL + "#page=4",
  },
  {
    key: "markings-arrow-lane",
    quote:
      "An arrow indicates that the lane with that marking is reserved " +
      "exclusively for making the movement indicated by the arrow. You must " +
      "make the movement indicated by the arrow if it is in your lane.",
    source: MANUAL,
    section: "Pavement Markings",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "markings-centre-lane-not-driving",
    quote:
      "It is not permissible to use the center left turn lane as a driving, " +
      "accelerating, or passing lane.",
    source: MANUAL,
    section: "Pavement Markings - Shared Center Lane",
    url: MANUAL_URL + "#page=60",
  },
  {
    key: "markings-dashed-permissive",
    quote:
      "Dashed lines are permissive. d. Solid white lines are restrictive, " +
      "and solid yellow lines are prohibitive.",
    source: MANUAL,
    section: "Pavement Markings",
    url: MANUAL_URL + "#page=59",
  },
  {
    key: "markings-divided-roadways",
    quote:
      "DIVIDED ROADWAYS Divided roadways, multi-lane with divider. Yellow " +
      "left edge lines are on all divided or one-way roadways.",
    source: MANUAL,
    section: "Pavement Markings - Divided Roadways",
    url: MANUAL_URL + "#page=60",
  },
  {
    key: "markings-force-of-law",
    quote:
      "Read the traffic markings, know what they mean, and obey them. " +
      "Pavement markings have the same force of law as signs or signals.",
    source: MANUAL,
    section: "Pavement Markings",
    url: MANUAL_URL + "#page=59",
  },
  {
    key: "markings-legends",
    quote:
      "Special legends such as \"STOP AHEAD,\" \"SCHOOL,\" and \"R X R\" indicate " +
      "special conditions to the driver. Although they are not regulatory, " +
      "they are used only where the condition such as a \"STOP\" sign, school " +
      "buildings, or railroad crossing requires extreme caution on the part " +
      "of the motorist.",
    source: MANUAL,
    section: "Pavement Markings",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "markings-no-shoulder",
    quote:
      "It is illegal to drive on the shoulder of roadways. Read the traffic " +
      "markings, know what they mean, and obey them. Pavement markings have " +
      "the same force of law as signs or signals.",
    source: MANUAL,
    section: "Pavement Markings",
    url: MANUAL_URL + "#page=59",
  },
  {
    key: "markings-purpose",
    quote:
      "Pavement markings are used like roadway signs to warn, regulate, and " +
      "inform traffic. a. Yellow markings, such as center lines, separate " +
      "traffic flow going in opposite directions. b. White markings, such " +
      "as lane lines, separate traffic going in the same direction.",
    source: MANUAL,
    section: "Pavement Markings",
    url: MANUAL_URL + "#page=59",
  },
  {
    key: "markings-restricted-lane",
    quote:
      "RESTRICTED LANE Multi-lane, two-way roadways with preferential lanes " +
      "assigned to buses, carpools, etc. Diamond markings and special signs " +
      "are required.",
    source: MANUAL,
    section: "Pavement Markings - Restricted Lane",
    url: MANUAL_URL + "#page=60",
  },
  {
    key: "markings-reversible-centre",
    quote:
      "REVERSIBLE CENTER LANE Multi-lane, two-way roadway, with center lane " +
      "direction reversible during specified periods. Signs or signals are " +
      "required.",
    source: MANUAL,
    section: "Pavement Markings - Reversible Center Lane",
    url: MANUAL_URL + "#page=60",
  },
  {
    key: "markings-shared-centre-lane",
    quote:
      "SHARED CENTER LANE Multi-lane, two-way roadway, with two-way left " +
      "turn lane reserved exclusively for left turning vehicles in either " +
      "direction.",
    source: MANUAL,
    section: "Pavement Markings - Shared Center Lane",
    url: MANUAL_URL + "#page=60",
  },
  {
    key: "markings-single-solid-yellow",
    quote:
      "A single solid yellow line indicates the left edge of a divided " +
      "roadway.",
    source: MANUAL,
    section: "Pavement Markings",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "markings-stop-lines",
    quote:
      "Stop lines indicate the farthest point into the intersection an " +
      "automobile may extend to allow the driver a clear view of " +
      "approaching traffic.",
    source: MANUAL,
    section: "Pavement Markings",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "markings-white-dashed",
    quote:
      "Dashed white lines separate lanes of travel where changing lanes is " +
      "not restricted and where the lane use is not specified.",
    source: MANUAL,
    section: "Pavement Markings",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "markings-white-edge",
    quote:
      "Solid white lines are also used to mark the outside edge of the " +
      "pavement or to indicate the edge of the shoulder. Drive within a " +
      "lane and do not move from it until it is safe to do so.",
    source: MANUAL,
    section: "Pavement Markings",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "markings-white-solid",
    quote:
      "Solid white lines indicate the edges of lanes specified for certain " +
      "uses where changing lanes is to be discouraged.",
    source: MANUAL,
    section: "Pavement Markings",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "markings-yellow-dashed",
    quote:
      "Dashed yellow line markings indicate where passing is permitted on " +
      "two-lane, two-way roadways.",
    source: MANUAL,
    section: "Pavement Markings",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "markings-yellow-solid",
    quote:
      "Solid yellow center lines indicate where passing is not permitted; " +
      "although, turning into a driveway across them is allowed.",
    source: MANUAL,
    section: "Pavement Markings",
    url: MANUAL_URL + "#page=61",
  },
  {
    key: "minor-after-consuming",
    quote:
      "If you are under 21 and you operate a motor vehicle, aircraft, or " +
      "watercraft after consuming alcohol in any amount, you can be " +
      "arrested or cited for the offense of minor operating after consuming " +
      "alcohol.",
    source: MANUAL,
    section: "Under 21 Violations",
    url: MANUAL_URL + "#page=20",
  },
  {
    key: "minor-any-quantity",
    quote:
      "If you refuse to take a chemical test of your breath, or your breath " +
      "test result shows any quantity of alcohol, your driver's license, " +
      "privilege to drive, or your privilege to obtain a license will be " +
      "revoked by the Division of Motor Vehicles.",
    source: MANUAL,
    section: "Under 21 Violations",
    url: MANUAL_URL + "#page=20",
  },
  {
    key: "minor-consuming-illegal",
    quote:
      "It is illegal in Alaska for a person under the age of 21 to consume " +
      "alcohol.",
    source: MANUAL,
    section: "Under 21 Violations",
    url: MANUAL_URL + "#page=20",
  },
  {
    key: "minor-court-penalty",
    quote:
      "A minor operating a motor vehicle after consuming alcohol or minor " +
      "refusal to submit to chemical testing is an infraction. Upon " +
      "conviction, the court must order community service and/or a fine up " +
      "to $1,000.",
    source: MANUAL,
    section: "Under 21 Violations - Court Penalties",
    url: MANUAL_URL + "#page=20",
  },
  {
    key: "minor-revocation-not-guilty",
    quote:
      "This revocation will occur even if the criminal citation is " +
      "dismissed, or you are found not guilty in court.",
    source: MANUAL,
    section: "Under 21 Violations",
    url: MANUAL_URL + "#page=20",
  },
  {
    key: "minor-revocation-periods",
    quote:
      "30 days for a first offense 60 days if you have been previously " +
      "revoked for this offense.",
    source: MANUAL,
    section: "Under 21 Violations",
    url: MANUAL_URL + "#page=20",
  },
  {
    key: "motor-cycle-headlamp-speed",
    quote:
      "Motor driven cycle speed is limited by intensity of headlamp. Lamps " +
      "reveal person or vehicle at 100 feet 20 mph or less Lamps reveal " +
      "person or vehicle at 200 feet 21 to 29 mph Lamps reveal person or " +
      "vehicle at 300 feet 30 mph or more",
    source: MANUAL,
    section: "Speed Limitation Law",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "motorcycle-crosswinds",
    quote:
      "Strong cross winds can move a motorcycle out of its lane of travel. " +
      "Areas where this can happen are wide open, long stretches of " +
      "highways and bridges.",
    source: MANUAL,
    section: "Motorcycles",
    url: MANUAL_URL + "#page=52",
  },
  {
    key: "motorcycle-fault",
    quote: "In most motor-cycle crashes, drivers of other vehicles are at fault.",
    source: MANUAL,
    section: "Motorcycles",
    url: MANUAL_URL + "#page=51",
  },
  {
    key: "motorcycle-four-second",
    quote:
      "The same four second following distance should be given to " +
      "motorcyclists as given other vehicles.",
    source: MANUAL,
    section: "Motorcycles",
    url: MANUAL_URL + "#page=52",
  },
  {
    key: "motorcycle-full-lane",
    quote: "Motorcycles need a full lane width like other vehicles.",
    source: MANUAL,
    section: "Motorcycles",
    url: MANUAL_URL + "#page=52",
  },
  {
    key: "motorcycle-grated-bridge",
    quote:
      "Metal or grated bridges cause a motorcycle to wobble much more than " +
      "a car. An experienced cyclist slows down and moves to the center of " +
      "the lane to allow room for handling the uneven surface.",
    source: MANUAL,
    section: "Motorcycles",
    url: MANUAL_URL + "#page=52",
  },
  {
    key: "motorcycle-left-turn",
    quote:
      "Drivers turning left in front of oncoming motorcyclists cause a " +
      "large percentage of car/cycle crashes. Drivers often fail to pick " +
      "the cyclist out of the traffic scene, or inaccurately judge the " +
      "speed of the oncoming motorcycle.",
    source: MANUAL,
    section: "Motorcycles",
    url: MANUAL_URL + "#page=51",
  },
  {
    key: "motorcycle-never-share-lane",
    quote:
      "Never move into the same lane with a motorcycle, even if the lane is " +
      "wide and the cyclist is riding to one side. It is not only illegal, " +
      "it is extremely hazardous.",
    source: MANUAL,
    section: "Motorcycles",
    url: MANUAL_URL + "#page=52",
  },
  {
    key: "motorcycle-same-rights",
    quote:
      "Motorcyclists have the same rights and responsibilities on public " +
      "roadways as other drivers.",
    source: MANUAL,
    section: "Motorcycles",
    url: MANUAL_URL + "#page=51",
  },
  {
    key: "motorcycle-share-deaths",
    quote:
      "Motorcycles number less than 4% of the motor vehicle population in " +
      "the U.S., yet they are involved in 11% of all motor vehicle deaths.",
    source: MANUAL,
    section: "Motorcycles",
    url: MANUAL_URL + "#page=51",
  },
  {
    key: "motorcycle-signal-not-cancel",
    quote:
      "Turn signals do not turn off automatically on most motorcycles. " +
      "Before you make a turn in front of a motorcyclist, BE SURE THE RIDER " +
      "IS TURNING and not continuing straight into your path with a " +
      "forgotten turn signal still blinking.",
    source: MANUAL,
    section: "Motorcycles",
    url: MANUAL_URL + "#page=52",
  },
  {
    key: "motorcycle-wet-roads",
    quote:
      "Allow more following distance for motorcyclists when the road " +
      "surface is wet and slippery. These conditions create stability " +
      "problems, and skilled motorcyclists will slow down.",
    source: MANUAL,
    section: "Motorcycles",
    url: MANUAL_URL + "#page=52",
  },
  {
    key: "muffler",
    quote:
      "Every motor vehicle shall be equipped with a muffler in good working " +
      "order and in constant operation to prevent excessive or unusual " +
      "noise.",
    source: MANUAL,
    section: "Mufflers, Prevention of Noise",
    url: MANUAL_URL + "#page=81",
  },
  {
    key: "muffler-cutout",
    quote:
      "No person may use a muffler cutout, bypass, or similar device upon a " +
      "motor vehicle on a highway.",
    source: MANUAL,
    section: "Mufflers, Prevention of Noise",
    url: MANUAL_URL + "#page=81",
  },
  {
    key: "never-pass-stopped-at-crosswalk",
    quote:
      "Obey stop signs when separated pathways are crossing an entrance to " +
      "a roadway Never pass vehicles stopped at a crosswalk. There may be " +
      "people crossing where you can't see.",
    source: MANUAL,
    section: "Sharing the Roadway",
    url: MANUAL_URL + "#page=48",
  },
  {
    key: "night-fatal-rate",
    quote:
      "Based on miles driven, the fatal crash rate for night driving is " +
      "greater than for daytime driving. This is due to the inability of " +
      "the driver to see as far, as soon, and as much.",
    source: MANUAL,
    section: "Night Driving & Lighting",
    url: MANUAL_URL + "#page=66",
  },
  {
    key: "night-flashlight-flares",
    quote: "Carry a flashlight and flares.",
    source: MANUAL,
    section: "Night Driving - Safety Tips",
    url: MANUAL_URL + "#page=66",
  },
  {
    key: "night-no-sunglasses",
    quote: "Wear sunglasses in bright sunlight to protect night seeing ability.",
    source: MANUAL,
    section: "Night Driving - Safety Tips",
    url: MANUAL_URL + "#page=66",
  },
  {
    key: "night-off-road-lights",
    quote:
      "Do not use any lights (including headlights) marked or intended for " +
      "\"off-road use only\" while traveling on the roadway.",
    source: MANUAL,
    section: "Night Driving - Safety Tips",
    url: MANUAL_URL + "#page=66",
  },
  {
    key: "night-quick-glances",
    quote: "When meeting vehicles at night do not stare at headlights.",
    source: MANUAL,
    section: "Safety Suggestions for the Use of Lighting Equipment",
    url: MANUAL_URL + "#page=67",
  },
  {
    key: "night-tint",
    quote:
      "Tinted windshields and front windows affect night vision and " +
      "increase crash risk. Tint must adhere to the standards outlined in13 " +
      "AAC 04.223.",
    source: MANUAL,
    section: "Night Driving - Safety Tips",
    url: MANUAL_URL + "#page=66",
  },
  {
    key: "no-pass-100-feet",
    quote:
      "When approaching within 100 feet of or when traversing an " +
      "intersection or railroad crossing, or when approaching within 100 " +
      "feet of a posted narrow bridge, viaduct, or tunnel.",
    source: MANUAL,
    section: "Do Not Pass",
    url: MANUAL_URL + "#page=42",
  },
  {
    key: "no-pass-center-lane",
    quote:
      "Center lanes are reserved for decelerating in advance of turning " +
      "left. You may not use a center lane for passing.",
    source: MANUAL,
    section: "Do Not Pass",
    url: MANUAL_URL + "#page=42",
  },
  {
    key: "no-pass-hill-curve",
    quote:
      "On approaching a hill or curve where there is not sufficient clear " +
      "view ahead.",
    source: MANUAL,
    section: "Do Not Pass",
    url: MANUAL_URL + "#page=42",
  },
  {
    key: "no-pass-school-bus",
    quote:
      "A school bus when its red flashing lights are operating, and the " +
      "stop arm is extended on an undivided two-way roadway, or within the " +
      "same divided travel way as the school bus is traveling.",
    source: MANUAL,
    section: "Do Not Pass",
    url: MANUAL_URL + "#page=42",
  },
  {
    key: "no-pass-shoulder",
    quote: "On the right shoulder of the highway.13 AAC 02.055",
    source: MANUAL,
    section: "Do Not Pass",
    url: MANUAL_URL + "#page=42",
  },
  {
    key: "no-pass-solid-yellow",
    quote: "If the solid yellow line is in your lane.",
    source: MANUAL,
    section: "Do Not Pass",
    url: MANUAL_URL + "#page=42",
  },
  {
    key: "no-pass-speed-up",
    quote: "When being passed it is unlawful to increase your speed.",
    source: MANUAL,
    section: "Do Not Pass",
    url: MANUAL_URL + "#page=42",
  },
  {
    key: "no-pass-zone-end",
    quote:
      "The end of a \"no passing zone\" does not mean it is safe to pass. It " +
      "means there is increased visibility ahead.",
    source: MANUAL,
    section: "Do Not Pass",
    url: MANUAL_URL + "#page=42",
  },
  {
    key: "no-riding-brakes",
    quote:
      "Do not let your footrest on the brake pedal (also called riding your " +
      "brakes).",
    source: MANUAL,
    section: "Check Your Driving Habits",
    url: MANUAL_URL + "#page=86",
  },
  {
    key: "nonresident-90-days",
    quote:
      "A non-resident who is at least 16 years of age and has in their " +
      "possession a valid driver's license issued by another state or " +
      "country. However, an Alaska driver's license must be obtained by the " +
      "end of a 90-day period after entry into the state.",
    source: MANUAL,
    section: "Who Is Exempt?",
    url: MANUAL_URL + "#page=6",
  },
  {
    key: "obstruction-view",
    quote:
      "A person may not drive with more people in the front seat than the " +
      "seat was designed for or with objects that interfere with the " +
      "driver's control of the vehicle or view.",
    source: MANUAL,
    section: "Obstruction to Driver's View",
    url: MANUAL_URL + "#page=31",
  },
  {
    key: "officer-overrides",
    quote:
      "YOU MUST FOLLOW THE DIRECTIONS OF A POLICE OFFICER, FIREPERSON, OR " +
      "AUTHORIZED FLAG PERSON REGARDLESS OFSIGNS OR SIGNALS",
    source: MANUAL,
    section: "Unlit Signal Head",
    url: MANUAL_URL + "#page=57",
  },
  {
    key: "orange-flags-hazard",
    quote:
      "Orange flags and signs indicate \"high hazard area\" (maintenance and " +
      "construction.) BACKING Don't depend on mirrors.",
    source: MANUAL,
    section: "Drivers to Exercise Due Care",
    url: MANUAL_URL + "#page=31",
  },
  {
    key: "organ-donation",
    quote:
      "If you wish to sign up as an organ and tissue donor, you may " +
      "indicate this on your application at the time your license is issued " +
      "or renewed.",
    source: MANUAL,
    section: "Other Information - Organ / Tissue Donation",
    url: MANUAL_URL + "#page=13",
  },
  {
    key: "parallel-park-steps",
    quote:
      "Signal, stop even with front vehicle about a foot and a half out " +
      "from it.",
    source: MANUAL,
    section: "Parallel Parking",
    url: MANUAL_URL + "#page=74",
  },
  {
    key: "parental-consent-liability",
    quote:
      "The law provides that any negligence or willful misconduct of a " +
      "minor under the age of 18 when driving a motor vehicle may be " +
      "attributed to the person who signed the parental consent for the " +
      "minor.",
    source: MANUAL,
    section: "Parental Consent",
    url: MANUAL_URL + "#page=7",
  },
  {
    key: "parental-consent-required",
    quote:
      "Alaska statutes require parental signature for all minors under the " +
      "age of 18 who are applying for a driver's license or instruction " +
      "permit.",
    source: MANUAL,
    section: "Parental Consent",
    url: MANUAL_URL + "#page=7",
  },
  {
    key: "parking-12-inches",
    quote:
      "In parallel parking the wheels must be within 12 inches of near " +
      "curb.",
    source: MANUAL,
    section: "Parking",
    url: MANUAL_URL + "#page=74",
  },
  {
    key: "parking-500-fire-apparatus",
    quote:
      "50 ft. from railroad crossing f. 500 feet from fire apparatus which " +
      "has stopped with emergency lights flashing",
    source: MANUAL,
    section: "Parking",
    url: MANUAL_URL + "#page=74",
  },
  {
    key: "parking-distances",
    quote:
      "It is illegal to park closer than the indicated distances from the " +
      "following: a. 15 ft. from fire hydrant b. 30 ft. from stop sign c. " +
      "20 ft. from entrance to fire station d. 20 ft. from crosswalk or " +
      "intersection e. 50 ft. from railroad crossing",
    source: MANUAL,
    section: "Parking",
    url: MANUAL_URL + "#page=74",
  },
  {
    key: "parking-double-parking",
    quote: "Double parking is prohibited by law.",
    source: MANUAL,
    section: "Parking",
    url: MANUAL_URL + "#page=74",
  },
  {
    key: "parking-hill-wheels",
    quote: "When parking on a downhill, turn front wheels toward curb.",
    source: MANUAL,
    section: "Parking",
    url: MANUAL_URL + "#page=74",
  },
  {
    key: "parking-keys",
    quote:
      "To prevent theft never leave the key in the ignition of a parked " +
      "unattended vehicle.",
    source: MANUAL,
    section: "Parking",
    url: MANUAL_URL + "#page=74",
  },
  {
    key: "parking-leaving-space",
    quote:
      "Driver must look, signal, and yield the right-of-way when moving out " +
      "of a parking place.",
    source: MANUAL,
    section: "Parking",
    url: MANUAL_URL + "#page=74",
  },
  {
    key: "parking-lights-not-moving",
    quote:
      "Parking lights denote a parked vehicle. Do not use only parking " +
      "lights, day, or night, when vehicle is in motion.",
    source: MANUAL,
    section: "Lighting Law",
    url: MANUAL_URL + "#page=67",
  },
  {
    key: "parking-no-parking-zones",
    quote:
      "\"No parking zones\" in cities and towns are usually marked by a sign " +
      "or yellow or red painted curb.",
    source: MANUAL,
    section: "Parking",
    url: MANUAL_URL + "#page=74",
  },
  {
    key: "parking-outside-city",
    quote:
      "When parking adjacent to roadway outside of city limits, all four " +
      "wheels must be off the pavement, if possible. Parking lights or low " +
      "beam headlights are to be left on at night, unless 8 feet from edge " +
      "of pavement.",
    source: MANUAL,
    section: "Parking",
    url: MANUAL_URL + "#page=74",
  },
  {
    key: "passing-cancel-signal",
    quote:
      "Signal right turn to return to right lane. Be sure to cancel signal " +
      "light.",
    source: MANUAL,
    section: "Passing Safely",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "passing-check-mirror",
    quote:
      "PASSING SAFELY Check mirror and blind spots. Allow plenty of time & " +
      "distance to stop.",
    source: MANUAL,
    section: "Passing Safely",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "passing-horn",
    quote: "Sound your horn to warn the driver ahead of your intention to pass.",
    source: MANUAL,
    section: "Passing Safely",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "passing-no-swing-out",
    quote:
      "Check well ahead for no passing zone and oncoming vehicles. Do not " +
      "swing out across center line for a look.",
    source: MANUAL,
    section: "Passing Safely",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "passing-not-a-game",
    quote:
      "The decision as to whether to pass another vehicle is determined by " +
      "the judgment and attitude of the driver.",
    source: MANUAL,
    section: "Passing Safely",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "passing-return-safely",
    quote:
      "Pass on left at a safe distance and do not return to right lane " +
      "until safely clear of overtaken vehicle.",
    source: MANUAL,
    section: "Passing Safely",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "passing-stay-back",
    quote:
      "Stay well back from vehicle ahead for better sight distance. Check " +
      "rear vision mirror. Signal left turn to left lane.",
    source: MANUAL,
    section: "Passing Safely",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "ped-countdown",
    quote:
      "The FLASHING UPRAISED HAND WITH COUNTDOWN TIMER indicates that " +
      "pedestrians are permitted to leave the curb if they can complete the " +
      "crossing before the timer reaches zero.",
    source: MANUAL,
    section: "Pedestrian Signals",
    url: MANUAL_URL + "#page=57",
  },
  {
    key: "ped-flashing-hand",
    quote:
      "The FLASHING UPRAISED HAND indicates that pedestrians may not enter " +
      "the roadway, however those already in roadway may proceed to the " +
      "other side.",
    source: MANUAL,
    section: "Pedestrian Signals",
    url: MANUAL_URL + "#page=57",
  },
  {
    key: "ped-steady-hand",
    quote:
      "Pedestrians already crossing when the signal comes on shall proceed " +
      "across the roadway.",
    source: MANUAL,
    section: "Pedestrian Signals",
    url: MANUAL_URL + "#page=57",
  },
  {
    key: "ped-walk",
    quote:
      "STEADY CLEAR WALK Pedestrians may enter the roadway when it may be " +
      "done with safety in the direction of the signal but should stay " +
      "within marked crosswalks and observe due courtesy to others.",
    source: MANUAL,
    section: "Pedestrian Signals",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "pedestrian-eye-contact",
    quote: "Establish eye contact and yield to pedestrians in crosswalks.",
    source: MANUAL,
    section: "Sharing the Roadway",
    url: MANUAL_URL + "#page=48",
  },
  {
    key: "pedestrian-light-clothing",
    quote:
      "Wear light-colored clothing when walking on or alongside the roadway " +
      "at night.",
    source: MANUAL,
    section: "Your Responsibility as a Pedestrian",
    url: MANUAL_URL + "#page=49",
  },
  {
    key: "pedestrian-stale-green",
    quote:
      "Never cross a street on a \"stale\" green traffic light that has about " +
      "run out of time or when a steady or flashing \"Don't Walk\" or " +
      "upraised hand appears.",
    source: MANUAL,
    section: "Your Responsibility as a Pedestrian",
    url: MANUAL_URL + "#page=49",
  },
  {
    key: "pedestrian-survival-figures",
    quote:
      "at a collision speed of 12 mph nearly all pedestrians survive a " +
      "crash with a passenger car; about 90% survive at a collision speed " +
      "of 25, mph, at a collision speed of 50 mph the number of survivors " +
      "is less than 50%, and at a collision speed of 62mph only 10% of the " +
      "pedestrians survive.",
    source: MANUAL,
    section: "Sharing the Roadway - Vulnerable Road Users",
    url: MANUAL_URL + "#page=48",
  },
  {
    key: "pedestrian-survival-speed",
    quote:
      "If a crash occurs, the survival rate of a vulnerable road user " +
      "decreases enormously as the car's collision speed increases.",
    source: MANUAL,
    section: "Sharing the Roadway - Vulnerable Road Users",
    url: MANUAL_URL + "#page=48",
  },
  {
    key: "pedestrian-walk-facing",
    quote: "Walk on the left side of the highway facing oncoming traffic.",
    source: MANUAL,
    section: "Your Responsibility as a Pedestrian",
    url: MANUAL_URL + "#page=49",
  },
  {
    key: "permit-age-14",
    quote:
      "If you are 14 years of age or older, you may obtain the permit which " +
      "is valid for two years.",
    source: MANUAL,
    section: "Non-Commercial Instruction Permit",
    url: MANUAL_URL + "#page=8",
  },
  {
    key: "permit-classes",
    quote:
      "Instruction permits, which allow for drivers to practice driving are " +
      "the IP, IM, and IE classes.",
    source: MANUAL,
    section: "Licenses and Permits",
    url: MANUAL_URL + "#page=6",
  },
  {
    key: "permit-required-to-learn",
    quote:
      "An instruction permit is required for everyone learning to drive on " +
      "a street or highway.",
    source: MANUAL,
    section: "Non-Commercial Instruction Permit",
    url: MANUAL_URL + "#page=8",
  },
  {
    key: "permit-requirements",
    quote:
      "To obtain an original instruction permit, you must satisfy the " +
      "identification requirements, pass the vision and written tests, and " +
      "if you are under 18 years of age, have parental consent. The fee for " +
      "an original instruction permit is $15.00.",
    source: MANUAL,
    section: "Non-Commercial Instruction Permit",
    url: MANUAL_URL + "#page=8",
  },
  {
    key: "permit-six-months",
    quote:
      "If you are 16 or 17, you must have a valid instruction permit for 6 " +
      "months before the DMV can issue you a provisional Class D license.",
    source: MANUAL,
    section: "Non-Commercial Instruction Permit",
    url: MANUAL_URL + "#page=8",
  },
  {
    key: "permit-supervisor",
    quote:
      "The licensed driver must be at least 21 years of age and have at " +
      "least one year of driving experience for the same type or class of " +
      "vehicle you are driving.",
    source: MANUAL,
    section: "Non-Commercial Instruction Permit",
    url: MANUAL_URL + "#page=8",
  },
  {
    key: "permit-supervisor-seat",
    quote:
      "For passenger vehicles, the licensed driver must occupy the seat " +
      "beside you. For motorcycles or motor scooters, you must be within " +
      "visual sight and under the immediate supervision of the licensed " +
      "driver.",
    source: MANUAL,
    section: "Non-Commercial Instruction Permit",
    url: MANUAL_URL + "#page=8",
  },
  {
    key: "permit-two-years",
    quote:
      "Each type of non-commercial instruction permit issued is valid for 2 " +
      "years and can only be renewed one time.",
    source: MANUAL,
    section: "Non-Commercial Instruction Permit",
    url: MANUAL_URL + "#page=8",
  },
  {
    key: "photo-head-coverings",
    quote:
      "Head coverings for religious or medical reasons may remain but must " +
      "be moved above the forehead to allow a full facial picture to be " +
      "taken.",
    source: MANUAL,
    section: "Other Information - Photograph",
    url: MANUAL_URL + "#page=13",
  },
  {
    key: "points-ddc-credit",
    quote:
      "Credits may be earned for violation-free driving and/or completion " +
      "of a defensive driver course (DDC). A DDC may be taken once every 12 " +
      "months for a point reduction.",
    source: MANUAL,
    section: "A Word About \"Points\"",
    url: MANUAL_URL + "#page=15",
  },
  {
    key: "points-no-insurance",
    quote:
      "Driving without insurance " +
      ".............................................................................................. " +
      "6 Careless driving types of behavior",
    source: MANUAL,
    section: "Driver's License Point Assignment",
    url: MANUAL_URL + "#page=16",
  },
  {
    key: "points-no-work-licence",
    quote:
      "No limited \"work purpose\" license is available should a suspension " +
      "or revocation of the driving privilege be required.",
    source: MANUAL,
    section: "A Word About \"Points\"",
    url: MANUAL_URL + "#page=15",
  },
  {
    key: "points-out-of-state",
    quote:
      "If you are convicted of, or forfeit bail for, a moving traffic " +
      "violation occurring in this, or any other State, points will be " +
      "entered on your Alaska driving record.",
    source: MANUAL,
    section: "Driver's License Point Assignment",
    url: MANUAL_URL + "#page=16",
  },
  {
    key: "points-provisional-course",
    quote:
      "A provisional license holder who accumulates 6 or more points in a " +
      "12-month period or 9 or more points in a 24-month period must " +
      "complete a driver improvement course approved by the Division.",
    source: MANUAL,
    section: "A Word About \"Points\"",
    url: MANUAL_URL + "#page=15",
  },
  {
    key: "points-range",
    quote:
      "Convictions for moving traffic violations are assigned numeric point " +
      "values ranging from 2 points to 10 points.",
    source: MANUAL,
    section: "A Word About \"Points\"",
    url: MANUAL_URL + "#page=15",
  },
  {
    key: "points-schedule-10",
    quote:
      "Type of Violation Point Value Operating a motor vehicle while " +
      "privilege to do so is suspended or revoked or in violation of " +
      "limited license " +
      ".........................................................................................",
    source: MANUAL,
    section: "Driver's License Point Assignment",
    url: MANUAL_URL + "#page=16",
  },
  {
    key: "points-speeding-20",
    quote:
      "20 mph or more over limit " +
      ".............................................................................................. " +
      "6 Violation of oversize or overweight permits pertaining to " +
      "restriction of speed",
    source: MANUAL,
    section: "Driver's License Point Assignment",
    url: MANUAL_URL + "#page=16",
  },
  {
    key: "points-suspension-threshold",
    quote:
      "Accumulating 12 points in 12 months or 18 points in 24 months " +
      "requires the mandatory suspension or revocation of the driving " +
      "privilege, regardless of the hardships involved.",
    source: MANUAL,
    section: "A Word About \"Points\"",
    url: MANUAL_URL + "#page=15",
  },
  {
    key: "points-warning-letter",
    quote:
      "Traffic law violators are sent a warning letter upon reaching the " +
      "halfway mark towards a point suspension.",
    source: MANUAL,
    section: "A Word About \"Points\"",
    url: MANUAL_URL + "#page=15",
  },
  {
    key: "police-documents",
    quote:
      "Drivers must have their driver's license in their possession AS " +
      "28.15.131, proof of insurance AS 28.22.019, proof of current " +
      "registration AS 28.10.461 and show it to the officer upon request.",
    source: MANUAL,
    section: "Stop by Law Enforcement",
    url: MANUAL_URL + "#page=77",
  },
  {
    key: "police-not-on-curve",
    quote:
      "Try not to stop on a curve, just after the crest of a hill, next to " +
      "a guardrail, or other location that would make the stop unsafe for " +
      "you and the officer.",
    source: MANUAL,
    section: "Stop by Law Enforcement - Best Practices",
    url: MANUAL_URL + "#page=77",
  },
  {
    key: "police-pull-right",
    quote:
      "If you are being pulled over, signal immediately to show the officer " +
      "your intentions and pull over to the right as soon as it is safe to " +
      "do so, even if you are in the left lane of a four-lane roadway.",
    source: MANUAL,
    section: "Stop by Law Enforcement - Best Practices",
    url: MANUAL_URL + "#page=77",
  },
  {
    key: "police-stay-in-vehicle",
    quote:
      "The driver and all passengers should stay in the vehicle. In times " +
      "of darkness, turn on interior lights of the vehicle.",
    source: MANUAL,
    section: "Stop by Law Enforcement - Best Practices",
    url: MANUAL_URL + "#page=77",
  },
  {
    key: "police-wait-for-documents",
    quote:
      "Keep your hands visible, such as on the steering wheel. Prior to " +
      "retrieving any documents from a wallet, purse, center console, or " +
      "glove compartment, wait for the officer to ask.",
    source: MANUAL,
    section: "Stop by Law Enforcement - Best Practices",
    url: MANUAL_URL + "#page=77",
  },
  {
    key: "preliminary-breath-test",
    quote:
      "the law enforcement officer has probable cause to believe that your " +
      "ability to operate a motor vehicle is impaired by alcohol, the " +
      "officer can require you to provide a sample of your breath on a " +
      "portable (preliminary) breath testing instrument.",
    source: MANUAL,
    section: "Implied Consent",
    url: MANUAL_URL + "#page=18",
  },
  {
    key: "prior-convictions-15-years",
    quote:
      "Prior convictions of DWI/DUI or Refusal occurring in Alaska or " +
      "another state within the last 15 years can be used to determine the " +
      "revocation period.",
    source: MANUAL,
    section: "Administrative Revocations",
    url: MANUAL_URL + "#page=20",
  },
  {
    key: "provisional-40-hours",
    quote:
      "your parent, legal guardian, or employer must certify that you have " +
      "had at least 40 hours of driving experience, including at least 10 " +
      "hours of driving in progressively challenging circumstances, such as " +
      "driving in inclement weather and nighttime driving;",
    source: MANUAL,
    section: "Provisional Licenses",
    url: MANUAL_URL + "#page=9",
  },
  {
    key: "provisional-curfew",
    quote:
      "MAY NOT operate a motor vehicle between the hours of 1:00 am and " +
      "5:00 am unless accompanied by a parent, legal guardian, or a person " +
      "at least 21 years of age who is licensed to drive the class of " +
      "vehicle being used.",
    source: MANUAL,
    section: "Provisional Licenses",
    url: MANUAL_URL + "#page=10",
  },
  {
    key: "provisional-graduate",
    quote:
      "Once you obtain your provisional license you may not graduate to a " +
      "driver license for at least six months and cannot have been " +
      "convicted of violating a traffic law or been convicted of violating " +
      "AS 04.16.050(c), repeat minor consuming alcohol, during the six " +
      "months before applying for a driver license.",
    source: MANUAL,
    section: "Provisional Licenses",
    url: MANUAL_URL + "#page=10",
  },
  {
    key: "provisional-off-system",
    quote:
      "The passenger and hour restrictions do not apply if you have an \"off " +
      "system\" license restricted to areas not connected to the land " +
      "highway system or is not connected to a highway where average daily " +
      "traffic volume is 499 or greater.",
    source: MANUAL,
    section: "Provisional Licenses",
    url: MANUAL_URL + "#page=10",
  },
  {
    key: "provisional-passengers",
    quote:
      "MAY NOT carry passengers unless one of the passengers is a parent, " +
      "legal guardian, or a person at least 21 years of age MAY carry, " +
      "without a parent in the vehicle, passengers if they are siblings.",
    source: MANUAL,
    section: "Provisional Licenses",
    url: MANUAL_URL + "#page=10",
  },
  {
    key: "provisional-purpose",
    quote:
      "Provisional licenses will give a new driver the opportunity to gain " +
      "experience while lessening distractions, which may lead to illegal " +
      "maneuvers and possible crashes.",
    source: MANUAL,
    section: "Provisional Licenses",
    url: MANUAL_URL + "#page=9",
  },
  {
    key: "provisional-removal",
    quote:
      "After six months of conviction free driving and no convictions for " +
      "illegal use of alcohol or drugs, you may have the provisional " +
      "restriction removed. To remove a provisional restriction a new " +
      "parental consent must be provided, and a new driver license issued " +
      "for a fee of $15.00.",
    source: MANUAL,
    section: "Provisional Licenses",
    url: MANUAL_URL + "#page=10",
  },
  {
    key: "provisional-work-exception",
    quote:
      "MAY operate a motor vehicle between the hours of 1:00am and 5:00am " +
      "to or from your place of employment or within the scope of your " +
      "employment and driving is along the most direct route.",
    source: MANUAL,
    section: "Provisional Licenses",
    url: MANUAL_URL + "#page=10",
  },
  {
    key: "railroad-1500-feet",
    quote:
      "Be prepared to stop if a train is within 1500 feet of the crossing. " +
      "You must stop even if the crossing is unmarked.",
    source: MANUAL,
    section: "Railroad Crossings",
    url: MANUAL_URL + "#page=63",
  },
  {
    key: "railroad-20-seconds",
    quote:
      "If your vehicle is physically on the train tracks at a grade " +
      "crossing and the lights begin to flash, you may only have 20 seconds " +
      "to escape before the train makes it to your location. Twenty seconds " +
      "is the minimal amount of time that it takes a train to reach the " +
      "grade crossing once the warning lights activate.",
    source: MANUAL,
    section: "Railroad Crossings",
    url: MANUAL_URL + "#page=64",
  },
  {
    key: "railroad-buses-trucks",
    quote:
      "Be prepared to stop when you are following buses or trucks which are " +
      "required to stop at railroad crossings. Do not pass them when " +
      "prohibited by law.",
    source: MANUAL,
    section: "Railroad Crossings",
    url: MANUAL_URL + "#page=63",
  },
  {
    key: "railroad-ens",
    quote:
      "If you are stuck on the tracks, and there are NO WARNING LIGHTS, or " +
      "the warning lights HAVE NOT ACTIVATED YET, GET OUT of your vehicle, " +
      "and immediately dial 911 and the ENS (Emergency Notification System) " +
      "number located on the railroad crossing posts or the metal control " +
      "box near the tracks.",
    source: MANUAL,
    section: "Railroad Crossings - Emergency Notification System",
    url: MANUAL_URL + "#page=64",
  },
  {
    key: "railroad-ens-sign",
    quote:
      "The typically blue colored Emergency Notification System (ENS) sign " +
      "is at every highway- rail grade crossing and provides the public " +
      "with a 24/7/365 telephone number to call to report problems or " +
      "emergencies at these railroad locations.",
    source: MANUAL,
    section: "Railroad Crossings - Emergency Notification System",
    url: MANUAL_URL + "#page=64",
  },
  {
    key: "railroad-get-out",
    quote:
      "Once outside, run away from both the tracks and the vehicle. Run in " +
      "the direction that the train is coming, Once clear immediately dial " +
      "911.",
    source: MANUAL,
    section: "Railroad Crossings",
    url: MANUAL_URL + "#page=64",
  },
  {
    key: "railroad-never-around-gates",
    quote:
      "Never drive around gates. If the gates are down, stay in place and " +
      "do not cross the tracks until the gates are raised. It is against " +
      "the law to go around crossing gates.",
    source: MANUAL,
    section: "Railroad Crossings",
    url: MANUAL_URL + "#page=63",
  },
  {
    key: "railroad-never-shift",
    quote:
      "Never shift gears on the crossing. If your vehicle has a manual " +
      "transmission, shift down and do not change gears while crossing the " +
      "tracks.",
    source: MANUAL,
    section: "Railroad Crossings",
    url: MANUAL_URL + "#page=63",
  },
  {
    key: "railroad-never-trapped",
    quote:
      "RAILROAD CROSSINGS Never get trapped on a crossing. When traffic is " +
      "heavy, wait on the approach to a crossing until you are sure you can " +
      "clear the crossing.",
    source: MANUAL,
    section: "Railroad Crossings",
    url: MANUAL_URL + "#page=63",
  },
  {
    key: "railroad-second-train",
    quote:
      "Watch out for the second train. When the last car of a train passes " +
      "the crossing do not start up until you are sure no train is coming " +
      "on another track, especially from the other direction.",
    source: MANUAL,
    section: "Railroad Crossings",
    url: MANUAL_URL + "#page=63",
  },
  {
    key: "reaction-distance",
    quote:
      "It takes about three-quarters of a second to react to a situation " +
      "and step on the brake pedal. At 50 mph, your vehicle will go another " +
      "55 feet in the three- quarters of a second it takes to react.",
    source: MANUAL,
    section: "Check Your Driving Habits",
    url: MANUAL_URL + "#page=86",
  },
  {
    key: "reckless-driving",
    quote:
      "Reckless driving - A willful disregard for the safety of persons or " +
      "property. Conviction will result in a license revocation.",
    source: MANUAL,
    section: "Speed Limitation Law",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "red-arrow",
    quote: "RED ARROW Do not make the movement indicated by the arrow.",
    source: MANUAL,
    section: "Traffic Signals - Red Arrow",
    url: MANUAL_URL + "#page=55",
  },
  {
    key: "red-arrow-no-turns",
    quote:
      "No turns are allowed until the arrow changes to green or flashing " +
      "yellow.",
    source: MANUAL,
    section: "Traffic Signals - Red Arrow",
    url: MANUAL_URL + "#page=55",
  },
  {
    key: "red-ball",
    quote:
      "TRAFFIC SIGNALS RED BALL Stop behind the crosswalk, stop line, or if " +
      "none, before entering the intersection.",
    source: MANUAL,
    section: "Traffic Signals - Red Ball",
    url: MANUAL_URL + "#page=55",
  },
  {
    key: "red-ball-right-turn",
    quote:
      "Right turns are permitted only after a full stop, when the turn can " +
      "be made safely, and is not restricted by a \"No turn on red\" sign.",
    source: MANUAL,
    section: "Traffic Signals - Red Ball",
    url: MANUAL_URL + "#page=55",
  },
  {
    key: "red-x",
    quote:
      "Steady Red X Don't use the lane. Opposing traffic is permitted to " +
      "use the lane.",
    source: MANUAL,
    section: "Lane Control Signals",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "refusal-misdemeanor-felony",
    quote:
      "Depending on your number of prior DUI offenses, refusal to submit to " +
      "chemical testing after lawful arrest can be a criminal misdemeanor " +
      "or felony.",
    source: MANUAL,
    section: "Implied Consent",
    url: MANUAL_URL + "#page=18",
  },
  {
    key: "refusal-no-work-licence",
    quote:
      "During a revocation period, there is no limited \"work purpose\" " +
      "driving privileges for a person who refuses to submit to chemical " +
      "testing.",
    source: MANUAL,
    section: "Implied Consent",
    url: MANUAL_URL + "#page=18",
  },
  {
    key: "refusal-two-charges",
    quote:
      "Refusal to submit to chemical testing will result in two criminal " +
      "charges - DUI and Refusal - which the court can treat separately.",
    source: MANUAL,
    section: "Implied Consent",
    url: MANUAL_URL + "#page=18",
  },
  {
    key: "revocation-definition",
    quote:
      "REVOCATION The privilege of operating a motor vehicle is taken away " +
      "and the license is revoked. At the end of revocation, when " +
      "reinstatement requirements are met, a new license may be obtained.",
    source: MANUAL,
    section: "Suspensions and Revocations - Revocation",
    url: MANUAL_URL + "#page=17",
  },
  {
    key: "revoke-court-list",
    quote:
      "Driving while under the influence, or refusal to take a chemical " +
      "test.",
    source: MANUAL,
    section: "Suspensions and Revocations - Revocation",
    url: MANUAL_URL + "#page=17",
  },
  {
    key: "right-turn-pedestrians",
    quote:
      "Look out of right side of windshield for pedestrians and check turn " +
      "path.",
    source: MANUAL,
    section: "Right Turn Two-Way Street to Two-Way Street",
    url: MANUAL_URL + "#page=37",
  },
  {
    key: "road-rage",
    quote:
      "Road Rage / Aggressive Driving - Earmarks include speeding, frequent " +
      "lane changes, cutting in and cutting other drivers off, forcing your " +
      "way ahead and being competitive with your vehicle.",
    source: MANUAL,
    section: "Driving Involves Many Issues",
    url: MANUAL_URL + "#page=94",
  },
  {
    key: "roundabout-definition",
    quote:
      "Roundabouts, sometimes called traffic circles, are circular " +
      "intersections designed to promote safe and efficient traffic flow " +
      "without necessarily stopping the flow of traffic. In roundabout " +
      "vehicles travel counterclockwise around a center island where " +
      "approaching traffic must yield to traffic in the circle.",
    source: MANUAL,
    section: "Intersections - Roundabouts",
    url: MANUAL_URL + "#page=39",
  },
  {
    key: "roundabout-do-not-stop",
    quote:
      "Once inside, do not stop. Follow directions on signs or pavement " +
      "markings about which lane to use.",
    source: MANUAL,
    section: "Intersections - Roundabouts",
    url: MANUAL_URL + "#page=39",
  },
  {
    key: "roundabout-enter-right",
    quote:
      "Always enter to the right of the center island. Enter when there is " +
      "a gap in traffic.",
    source: MANUAL,
    section: "Intersections - Roundabouts",
    url: MANUAL_URL + "#page=39",
  },
  {
    key: "roundabout-miss-exit",
    quote: "You may exit at any street or continue around if you miss your exit.",
    source: MANUAL,
    section: "Intersections - Roundabouts",
    url: MANUAL_URL + "#page=39",
  },
  {
    key: "roundabout-speed",
    quote: "Most roundabouts are designed for speeds of about 15- 20mph.",
    source: MANUAL,
    section: "Intersections - Roundabouts",
    url: MANUAL_URL + "#page=39",
  },
  {
    key: "roundabout-yield-in-circle",
    quote:
      "Yield to any traffic already in the circle. If another vehicle " +
      "arrives at the same time, yield to the vehicle if it is on your " +
      "right.",
    source: MANUAL,
    section: "Intersections - Roundabouts",
    url: MANUAL_URL + "#page=39",
  },
  {
    key: "roundabout-yield-pedestrians",
    quote:
      "Yield to pedestrians and bicyclists in the roundabout and those " +
      "crossing at the marked crosswalk as you exit the roundabout.",
    source: MANUAL,
    section: "Intersections - Roundabouts",
    url: MANUAL_URL + "#page=39",
  },
  {
    key: "row-do-not-assume",
    quote:
      "If you are the driver approaching from the right do not assume that " +
      "you have the right of way. You have the right of way only when the " +
      "other driver gives it to you, and only if another vehicle is not " +
      "already within the `intersection.",
    source: MANUAL,
    section: "Right of Way Law",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "row-non-motorized",
    quote:
      "A non-motorized user has the right of way through uncontrolled " +
      "intersections to motorized vehicles.",
    source: MANUAL,
    section: "Right of Way Law",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "row-yield-to-right",
    quote:
      "When two vehicles approach an uncontrolled intersection in such " +
      "position and time that there is danger of collision, the driver of " +
      "the vehicle on the left must yield to the driver of the vehicle on " +
      "the right.",
    source: MANUAL,
    section: "Right of Way Law",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "sign-caribou",
    quote: "Be alert for caribou crossing unexpectedly.",
    source: MANUAL,
    section: "Signs",
    url: MANUAL_URL + "#page=46",
  },
  {
    key: "sign-construction",
    quote:
      "CONSTRUCTION & MAINTENANCE SIGN black on orange 1. Work in the road " +
      "and temporary conditions requiring special alertness are indicated " +
      "by these signs.",
    source: MANUAL,
    section: "Construction & Maintenance Sign",
    url: MANUAL_URL + "#page=44",
  },
  {
    key: "sign-construction-500",
    quote:
      "Adjust driving for construction area 500 feet ahead. Be alert for " +
      "crew working on or adjacent to roadway.",
    source: MANUAL,
    section: "Signs",
    url: MANUAL_URL + "#page=46",
  },
  {
    key: "sign-deer",
    quote: "Be alert for deer crossing unexpectedly.",
    source: MANUAL,
    section: "Signs",
    url: MANUAL_URL + "#page=46",
  },
  {
    key: "sign-do-not-enter",
    quote:
      "Do not proceed beyond this sign which faces traffic entering a " +
      "roadway or ramp in the wrong direction.",
    source: MANUAL,
    section: "Do Not Enter Sign",
    url: MANUAL_URL + "#page=44",
  },
  {
    key: "sign-flagger",
    quote: "Prepare to stop for flagger ahead.",
    source: MANUAL,
    section: "Signs",
    url: MANUAL_URL + "#page=46",
  },
  {
    key: "sign-guide",
    quote:
      "GUIDE SIGN white on green 1. Destination, route guidance, and place " +
      "names are provided to you on guide signs.",
    source: MANUAL,
    section: "Guide Sign",
    url: MANUAL_URL + "#page=44",
  },
  {
    key: "sign-red-circle-slash",
    quote: "A red circle with a diagonal slash indicates prohibited movement.",
    source: MANUAL,
    section: "Signs",
    url: MANUAL_URL + "#page=45",
  },
  {
    key: "sign-regulatory",
    quote:
      "REGULATORY SIGN black or red on white 1. Regulatory signs indicate " +
      "an instruction for the driver that must be understood and obeyed. " +
      "State statute, regulation, or local ordinance backs them.",
    source: MANUAL,
    section: "Regulatory Sign",
    url: MANUAL_URL + "#page=43",
  },
  {
    key: "sign-school",
    quote:
      "SCHOOL SIGN black on yellow 1. Five-sided signs warn of school areas " +
      "and school crosswalks requiring reduced speed.",
    source: MANUAL,
    section: "School Sign",
    url: MANUAL_URL + "#page=44",
  },
  {
    key: "sign-school-crosswalk-20",
    quote: "Reduce speed to 20 as marked for school crosswalks",
    source: MANUAL,
    section: "Signs",
    url: MANUAL_URL + "#page=45",
  },
  {
    key: "sign-service",
    quote:
      "SERVICE SIGN white on blue 1. Services for your convenience such as " +
      "Gas, Phone, Food, Lodging, Rest Areas, Campgrounds and Litter " +
      "Barrels may be marked with white on blue signs.",
    source: MANUAL,
    section: "Service Sign",
    url: MANUAL_URL + "#page=44",
  },
  {
    key: "sign-slippery",
    quote:
      "Reduce speed for slippery roadway after rains, frost, etc. Prepare " +
      "to stop at traffic signal ahead.",
    source: MANUAL,
    section: "Signs",
    url: MANUAL_URL + "#page=45",
  },
  {
    key: "sign-stop",
    quote:
      "STOP SIGN white on red 1. Make a complete stop before entering " +
      "intersection or at stop line. Stop behind crosswalk.",
    source: MANUAL,
    section: "Stop Sign",
    url: MANUAL_URL + "#page=43",
  },
  {
    key: "sign-warning",
    quote:
      "WARNING SIGN black on yellow 1. Warning signs alert drivers to " +
      "actual or potentially dangerous conditions ahead.",
    source: MANUAL,
    section: "Warning Sign",
    url: MANUAL_URL + "#page=44",
  },
  {
    key: "sign-warning-slow",
    quote:
      "Most warning signs imply a driver should decrease the speed of the " +
      "vehicle.",
    source: MANUAL,
    section: "Warning Sign",
    url: MANUAL_URL + "#page=44",
  },
  {
    key: "sign-yield",
    quote:
      "YIELD SIGN red and white 1. Slow down as required when approaching " +
      "this sign.",
    source: MANUAL,
    section: "Yield Sign",
    url: MANUAL_URL + "#page=43",
  },
  {
    key: "signal-100-feet",
    quote:
      "A hand and arm or directional signal of intention to turn or move a " +
      "vehicle right or left must be given continuously during the last 100 " +
      "feet traveled by the vehicle before turning.",
    source: MANUAL,
    section: "Signaling",
    url: MANUAL_URL + "#page=35",
  },
  {
    key: "signal-before-slowing",
    quote:
      "Never stop or suddenly decrease the speed of your vehicle without " +
      "signaling your intentions for the benefit of the other drivers. Be " +
      "sure turn signals are clean and free from dust, dirt, ice, or snow.",
    source: MANUAL,
    section: "Signaling",
    url: MANUAL_URL + "#page=35",
  },
  {
    key: "signal-bicyclists",
    quote: "Bicyclists are also required to use hand signals to signal a turn.",
    source: MANUAL,
    section: "Signaling",
    url: MANUAL_URL + "#page=35",
  },
  {
    key: "signal-cancel",
    quote:
      "Alaska law requires you to cancel your directional signal light " +
      "after you use it. Your unintended signal still means you are turning " +
      "to the other drivers.",
    source: MANUAL,
    section: "Signaling",
    url: MANUAL_URL + "#page=35",
  },
  {
    key: "signal-greater-distance",
    quote:
      "As a safety precaution, the signal may be given from a greater " +
      "distance when warranted by traffic conditions or the higher speeds " +
      "of your vehicle.",
    source: MANUAL,
    section: "Signaling",
    url: MANUAL_URL + "#page=35",
  },
  {
    key: "signal-hand-when",
    quote:
      "Use hand signals when the sun is shining brightly or when a line of " +
      "cars following you could obscure your turn signal light.",
    source: MANUAL,
    section: "Signaling",
    url: MANUAL_URL + "#page=35",
  },
  {
    key: "signal-well-in-advance",
    quote:
      "Signal well in advance for lane changes, stops, or turns. The person " +
      "behind you can't read your mind.",
    source: MANUAL,
    section: "How to Keep From Being Struck",
    url: MANUAL_URL + "#page=32",
  },
  {
    key: "signs-obey",
    quote: "Traffic signs are driving aids - obey them.",
    source: MANUAL,
    section: "Signs",
    url: MANUAL_URL + "#page=43",
  },
  {
    key: "signs-purpose",
    quote:
      "They warn of conditions ahead that require caution or extra " +
      "alertness for safe operation of the vehicle. 2. They guide drivers " +
      "to their destination by identifying the route.",
    source: MANUAL,
    section: "Signs - How Signs Can Help You Be a Better Driver",
    url: MANUAL_URL + "#page=43",
  },
  {
    key: "signs-stare-driver",
    quote: "It is easy for a \"stare\" driver to miss traffic signs.",
    source: MANUAL,
    section: "Signs - How You Can Become a Better \"Sign\" Driver",
    url: MANUAL_URL + "#page=43",
  },
  {
    key: "skid-bridges-first",
    quote:
      "Shaded areas, protected areas, and bridges become slippery before " +
      "the balance of the road surface and stay so longer.",
    source: MANUAL,
    section: "Skids - Prevention",
    url: MANUAL_URL + "#page=73",
  },
  {
    key: "skid-do-not-lock",
    quote:
      "Do not lock wheels when using brakes. \"If wheels don't roll you " +
      "don't have control.\" Pump brakes lightly to slow down or stop on a " +
      "slippery surface.",
    source: MANUAL,
    section: "Skids - Prevention",
    url: MANUAL_URL + "#page=73",
  },
  {
    key: "skid-fwd-awd",
    quote:
      "Front-wheel drive or four-wheel drive vehicles require easy " +
      "acceleration to pull out of a skid.",
    source: MANUAL,
    section: "Recovery From Skid",
    url: MANUAL_URL + "#page=73",
  },
  {
    key: "skid-no-overcorrect",
    quote: "Do not over-correct in a skidding situation.",
    source: MANUAL,
    section: "Skids - Prevention",
    url: MANUAL_URL + "#page=73",
  },
  {
    key: "skid-prevention",
    quote: "Be alert to conditions that may cause skidding.",
    source: MANUAL,
    section: "Skids - Prevention",
    url: MANUAL_URL + "#page=73",
  },
  {
    key: "skid-recovery",
    quote:
      "Turn the front wheels in the direction of the skid. 3. Don't Brake " +
      "Suddenly.",
    source: MANUAL,
    section: "Recovery From Skid",
    url: MANUAL_URL + "#page=73",
  },
  {
    key: "skid-slow-in-advance",
    quote:
      "Slow down well in advance of stopping point when driving on ice or " +
      "packed snow.",
    source: MANUAL,
    section: "Skids - Prevention",
    url: MANUAL_URL + "#page=73",
  },
  {
    key: "skid-thawing",
    quote:
      "Be extra alert for slippery conditions during thawing and freezing " +
      "weather.",
    source: MANUAL,
    section: "Skids - Prevention",
    url: MANUAL_URL + "#page=73",
  },
  {
    key: "slow-down-entering-crosswalk",
    quote:
      "Slow down and be prepared to stop when turning or otherwise entering " +
      "a crosswalk.",
    source: MANUAL,
    section: "Sharing the Roadway",
    url: MANUAL_URL + "#page=48",
  },
  {
    key: "slow-near-curve",
    quote:
      "Always slow down near a curve or an area where you cannot see " +
      "clearly ahead.",
    source: MANUAL,
    section: "Check Your Driving Habits",
    url: MANUAL_URL + "#page=86",
  },
  {
    key: "slow-speed",
    quote:
      "Slow speed - A driver may not drive at such slow speed as to hold " +
      "back or block the normal and reasonable flow of traffic.",
    source: MANUAL,
    section: "Speed Limitation Law",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "smv-day",
    quote:
      "By day During daylight, the bright fluorescent orange solid triangle " +
      "in the center of the SMV emblem is highly visible. It gains the " +
      "attention and recognition of approaching motorists at distances " +
      "exceeding one-fifth mile.",
    source: MANUAL,
    section: "Slow Moving Vehicles",
    url: MANUAL_URL + "#page=54",
  },
  {
    key: "smv-emblem",
    quote:
      "SLOW MOVING VEHICLE EMBLEM This safety device is required on all " +
      "slow-moving (25 mph or less) vehicles.",
    source: MANUAL,
    section: "Slow Moving Vehicles",
    url: MANUAL_URL + "#page=54",
  },
  {
    key: "smv-night",
    quote:
      "By night At night, the reflective red border of the SMV emblem glows " +
      "brilliantly in the path of approaching auto head- lights. The " +
      "unique, hollow red triangle immediately identifies a slow-moving " +
      "vehicle.",
    source: MANUAL,
    section: "Slow Moving Vehicles",
    url: MANUAL_URL + "#page=54",
  },
  {
    key: "speed-65-posted",
    quote:
      "*Local authorities or the State Department of Transportation and " +
      "Public Facilities may alter speed limits (13 AAC 02.280). Speed " +
      "limits on selected highways may be posted at 65.",
    source: MANUAL,
    section: "Speed Laws",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "speed-conditions",
    quote:
      "Traffic-When traffic is heavy, congested, or moving slowly. B. " +
      "Surface-When the road surface is rough, icy, wet, or otherwise " +
      "provides poor traction.",
    source: MANUAL,
    section: "Speed Limitation Law",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "speed-limitation-law",
    quote:
      "SPEED LIMITATION LAW When driving conditions are less than ideal a " +
      "person operating a motor vehicle on the highway shall drive at a " +
      "careful and prudent speed no greater than what is reasonable and " +
      "proper having due regard for the following conditions:",
    source: MANUAL,
    section: "Speed Limitation Law",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "speed-limits-table",
    quote:
      "Business district, 20 mph.* Alley, 15 mph. * School zone, 20 mph.* " +
      "Residential district, 25 mph.* The following speed limits are " +
      "established by law as the maximum to be driven under favorable " +
      "conditions on highways which are not otherwise posted.",
    source: MANUAL,
    section: "Speed Laws",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "speed-limits-unposted",
    quote:
      "The following speed limits are established by law as the maximum to " +
      "be driven under favorable conditions on highways which are not " +
      "otherwise posted.",
    source: MANUAL,
    section: "Speed Laws",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "speed-monotony",
    quote:
      "Vary speed from time to time to prevent monotony and road hypnosis. " +
      "Driving at the same speed for a long time and distance dulls the " +
      "senses and makes a driver crash prone.",
    source: MANUAL,
    section: "Major Roads - Speed",
    url: MANUAL_URL + "#page=68",
  },
  {
    key: "speed-not-required-maximum",
    quote:
      "You are not required to drive at the maximum speed limits, though on " +
      "certain roads if you are not traveling at the speed limit, you are " +
      "required to pull your motor vehicle off the roadway at the first " +
      "opportunity to pull over safely if there are five or more vehicles " +
      "are behind you (AS 28.35.140)..",
    source: MANUAL,
    section: "Major Roads - Speed",
    url: MANUAL_URL + "#page=68",
  },
  {
    key: "sr22",
    quote:
      "Proof of financial responsibility for the future is usually provided " +
      "to the Division of Motor Vehicles by sub- mitting an \"SR22\" " +
      "insurance filing form. This type of insurance filing requires the " +
      "insurance company to notify the Division of Motor Vehicles if your " +
      "liability insurance coverage lapses or is cancelled.",
    source: MANUAL,
    section: "Suspensions and Revocations",
    url: MANUAL_URL + "#page=17",
  },
  {
    key: "stop-entering-highway",
    quote:
      "Entering highway - stop and yield to traffic when entering highway " +
      "from driveway, building, or alley.",
    source: MANUAL,
    section: "Stops Required",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "stop-flashing-red",
    quote:
      "Red flashing light - stop, then proceed when the way is clear, and " +
      "it is safe to do so.",
    source: MANUAL,
    section: "Stops Required",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "stop-for-police",
    quote:
      "Drivers are required to stop as soon as is practical and in a " +
      "reasonably safe manner when signaled to do so by police.",
    source: MANUAL,
    section: "Stop by Law Enforcement",
    url: MANUAL_URL + "#page=77",
  },
  {
    key: "stop-railroad-gate",
    quote:
      "Railroad crossing gate or flag person - stop until crossing gates " +
      "are raised or until flag person discontinues signal.",
    source: MANUAL,
    section: "Stops Required",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "stop-school-bus",
    quote:
      "School bus - stop when red flashing lights are in operation and stop " +
      "arm is extended. Drivers meeting and following bus must stop.",
    source: MANUAL,
    section: "Stops Required",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "stop-sign-where",
    quote:
      "Stop sign - stop behind the crosswalk, at painted stop line or " +
      "behind the intersecting roadway shoulder line. Yield to pedestrians, " +
      "bicyclists if present, and traffic before entering.",
    source: MANUAL,
    section: "Stops Required",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "stop-signals-not-working",
    quote: "Uncontrolled intersection - stop when signals are not working.",
    source: MANUAL,
    section: "Stops Required",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "stop-well-back-crosswalk",
    quote:
      "Stop well back from the crosswalk to give other vehicles an " +
      "opportunity to see the crossing pedestrians so they can stop, too.",
    source: MANUAL,
    section: "Sharing the Roadway",
    url: MANUAL_URL + "#page=48",
  },
  {
    key: "stop-yield-sign",
    quote:
      "Yield right of way sign - yield and stop if necessary for traffic " +
      "approaching an intersection or for a pedestrian.",
    source: MANUAL,
    section: "Stops Required",
    url: MANUAL_URL + "#page=41",
  },
  {
    key: "suggested-safety-equipment",
    quote:
      "SUGGESTED SAFETY EQUIPMENT Jumper Cables Three flares for nighttime " +
      "emergencies.",
    source: MANUAL,
    section: "Suggested Safety Equipment",
    url: MANUAL_URL + "#page=81",
  },
  {
    key: "suspension-definition",
    quote:
      "SUSPENSION The privilege of operating a motor vehicle is temporarily " +
      "taken away.",
    source: MANUAL,
    section: "Suspensions and Revocations - Suspension",
    url: MANUAL_URL + "#page=17",
  },
  {
    key: "suspension-turn-in",
    quote: "A suspended or revoked license must be turned in to the department.",
    source: MANUAL,
    section: "Suspensions and Revocations",
    url: MANUAL_URL + "#page=17",
  },
  {
    key: "test-format",
    quote:
      "General Knowledge Test at Alaska DMV: 25 minutes allowed, 20 " +
      "questions, 16 correct answers to pass.",
    source: DMV_TEST,
    section: "Sample Knowledge Test",
    url: DMV_TEST_URL,
  },
  {
    key: "texting-illegal",
    quote:
      "Don't ever text and drive, surf the web or read your email while " +
      "driving. It is dangerous and against the law in Alaska.",
    source: MANUAL,
    section: "Distracted Driving",
    url: MANUAL_URL + "#page=29",
  },
  {
    key: "three-point-turn",
    quote:
      "Unless prohibited, you may use the \"three-point turn\" to turn around " +
      "on a narrow street.",
    source: MANUAL,
    section: "Three Point Turn",
    url: MANUAL_URL + "#page=37",
  },
  {
    key: "three-point-yield",
    quote:
      "Watch for and yield to approaching traffic including bicyclists and " +
      "pedestrians approaching from both directions. For extra safety, you " +
      "can always sound your horn before backing.",
    source: MANUAL,
    section: "Three Point Turn",
    url: MANUAL_URL + "#page=37",
  },
  {
    key: "tire-pressure",
    quote:
      "Proper tire pressure is safer, extends tire life, and can provide up " +
      "to 3% benefit per tank of fuel.",
    source: MANUAL,
    section: "Maintenance Practices to Follow",
    url: MANUAL_URL + "#page=87",
  },
  {
    key: "tire-tread-check",
    quote:
      "Place Lincoln's headfirst into the deepest-looking groove.  Can you " +
      "see all his head? If yes, your tires are too worn - don't drive on " +
      "them and get them replaced.",
    source: MANUAL,
    section: "Maintenance Safety Tips",
    url: MANUAL_URL + "#page=89",
  },
  {
    key: "tire-tread-penny",
    quote:
      "Tires must have at least 2/32 inches of tread depth. The distance " +
      "between the edge of a penny and the top of Lincoln's head is about " +
      "2/32 of an inch.",
    source: MANUAL,
    section: "Maintenance Practices to Follow",
    url: MANUAL_URL + "#page=87",
  },
  {
    key: "tired-driving",
    quote:
      "Tired Driving- Research shows that tired drivers can be as dangerous " +
      "as drunk drivers.",
    source: MANUAL,
    section: "Driving Involves Many Issues",
    url: MANUAL_URL + "#page=94",
  },
  {
    key: "towing-triples",
    quote:
      "TOWING When towing triples per 13 AAC 04.205 (e) No person may " +
      "operate a motor vehicle on the roadway towing more than one vehicle " +
      "unless the towing vehicle weighs more than 15,000 pounds, has three " +
      "or more axles, and is equipped with an air brake system for both the " +
      "towing and towed vehicles.",
    source: MANUAL,
    section: "Towing",
    url: MANUAL_URL + "#page=35",
  },
  {
    key: "traffic-safety-corridor",
    quote:
      "Traffic Safety Corridors - To promote traffic safety, certain " +
      "portions of the highway may be designated as traffic safety " +
      "corridors. Fines for traffic offenses occurring in the corridor are " +
      "doubled.",
    source: MANUAL,
    section: "Speed Limitation Law",
    url: MANUAL_URL + "#page=34",
  },
  {
    key: "truck-cut-stopping-distance",
    quote:
      "Truck drivers leave extra room behind the vehicles they follow. If " +
      "you move into that space and must brake suddenly, you cut the trucks " +
      "available stopping distance in half - placing you and your " +
      "passengers in danger.",
    source: MANUAL,
    section: "Don't Cut in Front of Trucks",
    url: MANUAL_URL + "#page=82",
  },
  {
    key: "truck-deaf-spot",
    quote:
      "Be aware of a truck's \"deaf spot.\" Partial vacuum often prevents " +
      "truck drivers from hearing your horn.",
    source: MANUAL,
    section: "Passing",
    url: MANUAL_URL + "#page=69",
  },
  {
    key: "truck-fatalities",
    quote:
      "In large truck crashes, the occupants of a car, usually the driver, " +
      "sustain 78% of fatalities.",
    source: MANUAL,
    section: "Large Trucks & Buses",
    url: MANUAL_URL + "#page=82",
  },
  {
    key: "truck-mirrors",
    quote:
      "Remember, if you can't see the truck or bus driver in their side " +
      "mirrors, they can't see you.",
    source: MANUAL,
    section: "Stay Out of the \"No-Zone\"",
    url: MANUAL_URL + "#page=82",
  },
  {
    key: "truck-no-zone",
    quote:
      "The No-Zone represents the blind spots around the front, back, and " +
      "sides of trucks and buses where crashes are more likely to occur " +
      "because truck drivers have limited visibility.",
    source: MANUAL,
    section: "Stay Out of the \"No-Zone\"",
    url: MANUAL_URL + "#page=82",
  },
  {
    key: "truck-rear-impact",
    quote:
      "When a car is hit from behind by a truck the results are too often " +
      "deadly. Trucks are not equipped with the same type of " +
      "energy-absorbing bumpers as cars.",
    source: MANUAL,
    section: "Large Trucks & Buses",
    url: MANUAL_URL + "#page=83",
  },
  {
    key: "truck-squeeze",
    quote:
      "Truck drivers sometimes need to swing wide to the left so that they " +
      "can safely negotiate a right turn especially in urban areas. They " +
      "can't see cars directly behind or beside them.",
    source: MANUAL,
    section: "Trucks Make Wide Right Turns",
    url: MANUAL_URL + "#page=83",
  },
  {
    key: "truck-stopping-distance",
    quote:
      "A car traveling at 55 mph can stop in about 130 to 140 feet, however " +
      "a truck needs 400 feet to stop.",
    source: MANUAL,
    section: "Don't Cut in Front of Trucks",
    url: MANUAL_URL + "#page=82",
  },
  {
    key: "truck-tailgating",
    quote:
      "Large trucks are almost as wide as your lane of travel. Driving too " +
      "close behind a truck prevents you from seeing and reacting to " +
      "changing traffic conditions.",
    source: MANUAL,
    section: "Avoid Tailgating",
    url: MANUAL_URL + "#page=83",
  },
  {
    key: "truck-wide-right-turns",
    quote:
      "Be careful of trucks making wide right turns. If you get in between " +
      "the truck and the curb, you'll be caught in a \"squeeze\" and can " +
      "suffer a serious collision.",
    source: MANUAL,
    section: "Trucks Make Wide Right Turns",
    url: MANUAL_URL + "#page=83",
  },
  {
    key: "turn-left-two-to-one",
    quote:
      "Make proper \"two way\" approach. 2. Signal intention to turn at least " +
      "100 feet in advance. 3. Yield to all road users. 4. Do not turn " +
      "before reaching the crosswalk. 5. Look out of left window for " +
      "pedestrians and check turn path. 6. Turn sharply into first lane.",
    source: MANUAL,
    section: "Two Way Street to One Way Street",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "turn-one-to-two",
    quote:
      "Make approach in the traffic lane furthermost to the left on one way " +
      "street.",
    source: MANUAL,
    section: "One Way Street to Two Way Street",
    url: MANUAL_URL + "#page=36",
  },
  {
    key: "turning-around-city",
    quote:
      "TURNING AROUND IN THE CITY The safest method is drive around the " +
      "block. Be alert for signs prohibiting \"U\" turns.",
    source: MANUAL,
    section: "Turning Around in the City",
    url: MANUAL_URL + "#page=79",
  },
  {
    key: "turning-around-highway",
    quote:
      "Do not turn around near a curve or hill when the driver cannot see " +
      "500 feet or more in each direction.",
    source: MANUAL,
    section: "Turning Around on the Highway",
    url: MANUAL_URL + "#page=79",
  },
  {
    key: "two-second-minimum",
    quote:
      "While this chart recommends the use of the 4 second rule, 13 AAC " +
      "02.090 requires at a minimum the 2 second rule.",
    source: MANUAL,
    section: "How to Avoid Rear End Collisions",
    url: MANUAL_URL + "#page=32",
  },
  {
    key: "two-second-rule-eco",
    quote:
      "\"Two-second'' rule: Pick an object in front of you, like a signpost " +
      "or tree. When the vehicle in front of you reaches that object, count " +
      "out \"one-one thousand, two-one thousand ...\" If you reach the object " +
      "before you count two, you are too close.",
    source: MANUAL,
    section: "Check Your Driving Habits",
    url: MANUAL_URL + "#page=86",
  },
  {
    key: "two-way-left-turn-arrows",
    quote:
      "TWO-WAY LEFT TURN ARROWS Use caution entering the Two-Way Left Turn " +
      "only lane. Opposing traffic also may use the lane for left turns. " +
      "Yield to oncoming traffic and pedestrians while making the turn.",
    source: MANUAL,
    section: "Two-Way Left Turn Arrows",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "uncontrolled-definition",
    quote:
      "When you are driving on a street or highway which is not protected " +
      "with stop signs, yield signs or traffic lights, you are driving on " +
      "an unprotected route and the intersections are uncontrolled.",
    source: MANUAL,
    section: "Intersections - Uncontrolled Intersections",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "uncontrolled-slow-down",
    quote:
      "At such times you are required to slow down and have your vehicle " +
      "under control at a cross street or a crossroad, which includes " +
      "unmarked crosswalks for nonmotorized users. Approaching from the " +
      "right does not excuse you from slowing down and having your vehicle " +
      "under control.",
    source: MANUAL,
    section: "Intersections - Uncontrolled Intersections",
    url: MANUAL_URL + "#page=38",
  },
  {
    key: "unlit-signal-head",
    quote:
      "UNLIT SIGNAL HEAD If a signal does not have any of its bulbs " +
      "functioning and there is no other signal head in operation for your " +
      "direction and there is no one directing traffic, the intersection is " +
      "uncontrolled.",
    source: MANUAL,
    section: "Unlit Signal Head",
    url: MANUAL_URL + "#page=57",
  },
  {
    key: "unlit-signal-report",
    quote:
      "Report this condition to the nearest police department as soon as " +
      "possible.",
    source: MANUAL,
    section: "Unlit Signal Head",
    url: MANUAL_URL + "#page=57",
  },
  {
    key: "unlit-signal-yield-right",
    quote:
      "Yield to traffic approaching the intersection on your right. " +
      "Exercise extreme caution and proceed only when it is safe to do so.",
    source: MANUAL,
    section: "Unlit Signal Head",
    url: MANUAL_URL + "#page=57",
  },
  {
    key: "unsecured-load",
    quote: "It is illegal to travel Alaska's roads with an unsecured load.",
    source: MANUAL,
    section: "Littering",
    url: MANUAL_URL + "#page=91",
  },
  {
    key: "vehicle-fire",
    quote:
      "If your vehicle is on fire, and if it can be done safely, utilize a " +
      "fire extinguisher, check a ditch for water, apply mud, dirt, dust, " +
      "or snow until the fire is extinguished or it is no longer safe.",
    source: MANUAL,
    section: "Emergencies - Fire",
    url: MANUAL_URL + "#page=78",
  },
  {
    key: "vision-standard",
    quote:
      "To qualify you must have, in each eye or with both eyes together, at " +
      "least 20/40 vision.",
    source: MANUAL,
    section: "Examinations - Vision",
    url: MANUAL_URL + "#page=10",
  },
  {
    key: "vision-test-required",
    quote:
      "A test is required of each driver to determine visual acuity before " +
      "any license or permit is issued. This includes original, renewal, " +
      "and duplicate licenses.",
    source: MANUAL,
    section: "Examinations - Vision",
    url: MANUAL_URL + "#page=10",
  },
  {
    key: "visual-screen-device",
    quote:
      "It is illegal to drive with a visual screen device operating. " +
      "Texting while driving is prohibited by the law.",
    source: MANUAL,
    section: "TV, Laptops, Texting, Etc.",
    url: MANUAL_URL + "#page=31",
  },
  {
    key: "vulnerable-road-users",
    quote:
      "Drivers of passenger vehicles share the roadway with many other " +
      "users, such as people walking and biking, highway workers on foot in " +
      "work zones, and persons using a mobility device, such as wheelchair. " +
      "These users of the roadway are most vulnerable because they are " +
      "unprotected against motor vehicles in collisions.",
    source: MANUAL,
    section: "Sharing the Roadway - Vulnerable Road Users",
    url: MANUAL_URL + "#page=48",
  },
  {
    key: "weather-bald-tires",
    quote:
      "Bald tires do not give you directional control of your car when " +
      "attempting to stop on a wet surface. Drive on tires with good tread.",
    source: MANUAL,
    section: "Weather Conditions - Safety Tips",
    url: MANUAL_URL + "#page=71",
  },
  {
    key: "weather-cannot-stop",
    quote:
      "You can't stop or change direction quickly when the road surface is " +
      "covered with rain, snow, or ice.",
    source: MANUAL,
    section: "Weather Conditions",
    url: MANUAL_URL + "#page=71",
  },
  {
    key: "weather-first-half-hour",
    quote:
      "The first half hour after a rain often makes hard surface roads " +
      "slippery. The dust and road film are not washed off the surface. " +
      "Oil, dirt, and tire dust mixed with water forms a slippery " +
      "combination.",
    source: MANUAL,
    section: "Weather Conditions",
    url: MANUAL_URL + "#page=71",
  },
  {
    key: "weather-full-tank",
    quote:
      "Keep your fuel tank full in cold weather to prevent moisture " +
      "condensation in the fuel tank.",
    source: MANUAL,
    section: "Weather Conditions - Safety Tips",
    url: MANUAL_URL + "#page=71",
  },
  {
    key: "weather-stale-green",
    quote:
      "Approach \"stale\" green traffic signals slower to be ready to stop if " +
      "the light changes, especially during inclement weather.",
    source: MANUAL,
    section: "Weather Conditions - Safety Tips",
    url: MANUAL_URL + "#page=71",
  },
  {
    key: "weather-stay-back-spatter",
    quote:
      "Stay well back and allow plenty of distance from the vehicle ahead " +
      "to aid in avoiding spatter on windshield and headlights.",
    source: MANUAL,
    section: "Weather Conditions - Safety Tips",
    url: MANUAL_URL + "#page=71",
  },
  {
    key: "weather-wipers",
    quote:
      "Windshield wipers that streak and skip are especially hazardous on a " +
      "rainy night. Good windshield wipers, in addition to washer fluid are " +
      "valuable safety essentials.",
    source: MANUAL,
    section: "Weather Conditions",
    url: MANUAL_URL + "#page=71",
  },
  {
    key: "wet-brakes",
    quote:
      "WET BRAKES Test brakes lightly after driving through deep water. " +
      "Brakes may pull to one side or may not hold at all.",
    source: MANUAL,
    section: "Emergencies - Wet Brakes",
    url: MANUAL_URL + "#page=78",
  },
  {
    key: "wet-brakes-dry",
    quote: "Dry brakes by driving slowly in low gear and apply brakes lightly.",
    source: MANUAL,
    section: "Emergencies - Wet Brakes",
    url: MANUAL_URL + "#page=78",
  },
  {
    key: "wet-icy-longer-distance",
    quote:
      "Give yourself more distance from other vehicles when it is raining " +
      "or snowing.",
    source: MANUAL,
    section: "Check Your Driving Habits",
    url: MANUAL_URL + "#page=86",
  },
  {
    key: "wheels-off-return",
    quote:
      "Do not attempt to return to pavement until there are no cars in your " +
      "immediate vicinity. Turn back on to pavement at slow speed.",
    source: MANUAL,
    section: "Safety Tips - Wheel(s) Off Roadway",
    url: MANUAL_URL + "#page=79",
  },
  {
    key: "wheels-off-roadway",
    quote:
      "Stop feeding gas. Maintain firm grip on steering wheel. Brake " +
      "lightly and intermittently.",
    source: MANUAL,
    section: "Safety Tips - Wheel(s) Off Roadway",
    url: MANUAL_URL + "#page=79",
  },
  {
    key: "who-needs-licence",
    quote:
      "Every person who operates a motor vehicle on Alaska streets, " +
      "highways, or other public property must have a valid Alaska driver's " +
      "license or permit.",
    source: MANUAL,
    section: "Who Must Have an Alaska Driver's License?",
    url: MANUAL_URL + "#page=6",
  },
  {
    key: "work-zone-arrow-panels",
    quote:
      "Large flashing or sequencing arrow panels may be used in work zones " +
      "both day and night to guide drivers into certain traffic lanes, and " +
      "to inform them that part of the road or street ahead of them is " +
      "closed.",
    source: MANUAL,
    section: "Signs Within Work Areas",
    url: MANUAL_URL + "#page=47",
  },
  {
    key: "work-zone-devices",
    quote:
      "Barricades, vertical panels, cones, tubes, and drums are the most " +
      "used devices to alert drivers of unusual or potentially dangerous " +
      "conditions in highway and street work areas. They are used to guide " +
      "drivers safely through the work zone.",
    source: MANUAL,
    section: "Signs Within Work Areas",
    url: MANUAL_URL + "#page=47",
  },
  {
    key: "written-reader",
    quote:
      "If you can understand the English language, but are unable to read " +
      "or have difficulty reading, you may bring someone who may read the " +
      "questions to you, but you must independently answer the questions.",
    source: MANUAL,
    section: "Examinations - Written",
    url: MANUAL_URL + "#page=11",
  },
  {
    key: "written-retake",
    quote: "If failed, the test may be retaken the following day.",
    source: MANUAL,
    section: "Examinations - Written",
    url: MANUAL_URL + "#page=11",
  },
  {
    key: "written-scope",
    quote:
      "The written test covers only information found in this manual, " +
      "including traffic laws, safe driving practices, and highway sign " +
      "recognition.",
    source: MANUAL,
    section: "Examinations - Written",
    url: MANUAL_URL + "#page=11",
  },
  {
    key: "written-who",
    quote:
      "The written test is required for applicants not currently licensed " +
      "in Alaska or whose driving privileges have been expired for over one " +
      "year, or whose driving privileges have been revoked.",
    source: MANUAL,
    section: "Examinations - Written",
    url: MANUAL_URL + "#page=11",
  },
  {
    key: "wrong-lane-to-turn",
    quote:
      "If you find you are in the wrong lane to turn when entering an " +
      "intersection, do not turn or impede so you can turn. Continue around " +
      "the block. Be alert for no \"U\" turn signs.",
    source: MANUAL,
    section: "Pavement Markings",
    url: MANUAL_URL + "#page=62",
  },
  {
    key: "yellow-arrow",
    quote:
      "YELLOW ARROW A red light is about to appear. Stop movement in the " +
      "indicated direction unless you are already within the intersection " +
      "or so close to the intersection that you cannot stop safely.",
    source: MANUAL,
    section: "Traffic Signals - Yellow Arrow",
    url: MANUAL_URL + "#page=55",
  },
  {
    key: "yellow-ball",
    quote:
      "YELLOW BALL A red light is about to appear. Stop unless you are " +
      "already within the intersection, or so close to the intersection " +
      "that you cannot stop safely.",
    source: MANUAL,
    section: "Traffic Signals - Yellow Ball",
    url: MANUAL_URL + "#page=55",
  },
  {
    key: "yellow-ball-entering",
    quote:
      "If the light changes to yellow as you enter the intersection, you " +
      "may proceed with extreme caution.",
    source: MANUAL,
    section: "Traffic Signals - Yellow Ball",
    url: MANUAL_URL + "#page=55",
  },
  {
    key: "yellow-x",
    quote:
      "Steady Yellow X Clear the lane in a safe manner. A Red X signal is " +
      "about to appear.",
    source: MANUAL,
    section: "Lane Control Signals",
    url: MANUAL_URL + "#page=58",
  },
  {
    key: "yield-alley-driveway",
    quote:
      "Stop and yield when entering a street or road from alley, driveway, " +
      "or building.",
    source: MANUAL,
    section: "You Must Yield in These Situations",
    url: MANUAL_URL + "#page=40",
  },
  {
    key: "yield-green-caught",
    quote:
      "At a signaled intersection, when light turns green, yield to " +
      "pedestrians and vehicles caught in intersection.",
    source: MANUAL,
    section: "You Must Yield in These Situations",
    url: MANUAL_URL + "#page=40",
  },
  {
    key: "yield-hazard-in-intersection",
    quote:
      "Yield to all traffic that is so close as to be a hazard, and to " +
      "vehicle already in intersection.",
    source: MANUAL,
    section: "You Must Yield in These Situations",
    url: MANUAL_URL + "#page=40",
  },
  {
    key: "yield-protected-route",
    quote:
      "Yield to all traffic including non-motorized users traveling on the " +
      "protected route.",
    source: MANUAL,
    section: "You Must Yield in These Situations",
    url: MANUAL_URL + "#page=40",
  },
  {
    key: "yield-unmarked-crosswalk",
    quote:
      "Stop in advance of the unmarked crosswalk if a stop is necessary. " +
      "Stop and yield to all traffic on the protected route.",
    source: MANUAL,
    section: "You Must Yield in These Situations",
    url: MANUAL_URL + "#page=40",
  },
];
