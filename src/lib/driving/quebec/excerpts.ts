import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Quebec bank, taken only from material the
// SAAQ and the Quebec legislature publish free of charge on their own sites.
//
// A word on the two big PDFs, because it matters. The SAAQ also SELLS printed
// road-safety material through Les Publications du Quebec, and the "Road Access
// Binder" that accompanies the driving course is only available through a
// recognised driving school. None of that is quoted here. What is quoted are
// the two reference guides the SAAQ itself links, free, from its own
// "Obtaining a Passenger Vehicle (Class 5) Driver's Licence" and "Preparing for
// the knowledge and road tests" pages: the Driver's Handbook and Driving a
// Passenger Vehicle. Those pages give the file sizes (22.9 MB and 19.0 MB), and
// the copies these quotes were cut from are 23,970,674 and 19,902,492 bytes -
// 22.9 MB and 19.0 MB exactly - fetched from saaq.gouv.qc.ca's own
// /blob/saaq/documents/publications/ paths. The provenance was checked before a
// single word was quoted, and it is written down here so the next editor does
// not have to check it again.
//
// The rest comes from saaq.gouv.qc.ca web pages (each cited to its own URL and
// carrying the rule as it stands today, which for several rules is not what the
// 2018 handbook says) and from the Highway Safety Code on Legis Quebec.
//
// Every quote below was located mechanically in the fetched source and verified
// as an exact substring before it was written here. Nothing is paraphrased.
// The same four normalisations were applied to the extracted text and to
// nothing else: curly quotes, en dashes and em dashes are folded to ASCII;
// runs of whitespace, including the line breaks the PDF inserts mid-sentence,
// collapse to single spaces; soft hyphens inserted by the typesetter are
// dropped, so "vulne-rable" reads "vulnerable"; and the section symbol is
// spelled out. The sources' own slips are preserved as they stand - the
// handbook's "another vehicule" and "moped or motorized scooter opertors", the
// speeding page's "the length of your imprisonmen" - because a quote that has
// been tidied up is no longer a quote.
//
// The Highway Safety Code quotes keep Legis Quebec's own spacing around
// paragraph numbers, "( 2 )" rather than "(2)", for the same reason. One
// excerpt, pass-cyclist-distance, keeps the driving guide's own triangular bullet
// glyphs, because the one-metre and 1.5-metre passing clearances are only
// stated as a bulleted list and the numbers are worth having exactly.
//
// Where the SAAQ's typesetter hyphenated a word across a line break, the
// break survives extraction as a space ("before the pedes trian crossing"),
// so any candidate quote containing one was rejected outright rather than
// silently tidied. About twenty were dropped that way and replaced from
// elsewhere.


const HB_SRC = "Driver's Handbook (Societe de l'assurance automobile du Quebec, 2nd edition)";
const HB_URL = "https://saaq.gouv.qc.ca/blob/saaq/documents/publications/drivers-handbook.pdf";
const DPV_SRC = "Driving a Passenger Vehicle (Societe de l'assurance automobile du Quebec)";
const DPV_URL = "https://saaq.gouv.qc.ca/blob/saaq/documents/publications/driving-passenger-vehicle.pdf";
const HSC_SRC = "Highway Safety Code, CQLR c. C-24.2 (Editeur officiel du Quebec)";
const HSC_URL = "https://www.legisquebec.gouv.qc.ca/en/document/cs/C-24.2";

const W_CLASS5_SRC = "SAAQ - Obtaining a Passenger Vehicle (Class 5) Driver's Licence (page updated 10 August 2026)";
const W_CLASS5_URL = "https://saaq.gouv.qc.ca/en/drivers-licences/obtaining-licence/passenger-vehicle-class-5";
const W_RTOR_SRC = "SAAQ - Turning Right at a Red Light: What the Law Says";
const W_RTOR_URL = "https://saaq.gouv.qc.ca/en/road-safety/behaviours/turning-right-red-light/what-law-says";
const W_SPEEDLAW_SRC = "SAAQ - Speed: What the Law Says";
const W_SPEEDLAW_URL = "https://saaq.gouv.qc.ca/en/road-safety/behaviours/speed/what-law-says";
const W_SPEEDING_SRC = "SAAQ - Speeding: There's a Price to Pay!";
const W_SPEEDING_URL = "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/speeding";
const W_DEMERIT_SRC = "SAAQ - Demerit Points";
const W_DEMERIT_URL = "https://saaq.gouv.qc.ca/en/drivers-licences/demerit-points";
const W_WINTER_SRC = "SAAQ - Winter Driving";
const W_WINTER_URL = "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/winter-driving";
const W_PHONE_SRC = "SAAQ - Portable electronic devices: prohibited while driving";
const W_PHONE_URL = "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/portable-electronic-device";
const W_ALCOHOL_SRC = "SAAQ - Drinking and Driving: Impairment and Consequences";
const W_ALCOHOL_URL = "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/alcohol";
const W_DRUGS_SRC = "SAAQ - Don't Drive if You Have Taken Drugs or Medication!";
const W_DRUGS_URL = "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/drugs-medication";
const W_FATIGUE_SRC = "SAAQ - Driver Fatigue";
const W_FATIGUE_URL = "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/fatigue";
const W_CHILD_SRC = "SAAQ - Child safety in cars";
const W_CHILD_URL = "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/child-safety-cars";
const W_MOVEOVER_SRC = "SAAQ - Move-Over Law";
const W_MOVEOVER_URL = "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/move-over-law";
const W_NIGHT_SRC = "SAAQ - Driving at Night: Adopt Safe Practices";
const W_NIGHT_URL = "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/driving-night";
const W_BLIND_SRC = "SAAQ - Blind Spots in a Car";
const W_BLIND_URL = "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/blind-spots";
const W_WORK_SRC = "SAAQ - Road Work Zones";
const W_WORK_URL = "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/road-work-zones";
const W_PED_SRC = "SAAQ - Pedestrians: What the Law Says";
const W_PED_URL = "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/pedestrian";
const W_EMERG_SRC = "SAAQ - In a Vehicle With Flashing or Rotating Lights";
const W_EMERG_URL = "https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/flashing-rotating-lights";


export const quebecExcerpts: HandbookExcerpt[] = [
  {
    key: "abs-emergency-braking",
    quote: 
      "For emergency braking, press the brake pedal to the floor and " +
      "hold it firmly. It is normal to hear noises and feel the " +
      "vibrations of the anti-lock braking system doing its work.",
    source: DPV_SRC,
    section: "Chapter 5 - Anti-Lock Braking System (ABS)",
    url: DPV_URL,
  },
  {
    key: "access-prohibited",
    quote: 
      "These signs indicate the roads or lanes where access is " +
      "prohibited for certain types of road users or types of vehicles.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Access prohibited",
    url: HB_URL,
  },
  {
    key: "address-30-days",
    quote: 
      "Under the Highway Safety Code, you must notify the SAAQ of any " +
      "change of address within 30 days, or be subject to penalties set" +
      " out in the Code.",
    source: HB_SRC,
    section: "Chapter 1 - The Driver - The right address",
    url: HB_URL,
  },
  {
    key: "advance-level-crossing-sign",
    quote: 
      "Level crossings less than 50 metres from an intersection in " +
      "urban areas and less than 125 metres in rural areas.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Advance level crossing sign",
    url: HB_URL,
  },
  {
    key: "advance-speed-limit-sign",
    quote: 
      "Zone ahead where the speed limit has been lowered by at least 30" +
      " km/h.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Advance speed limit sign",
    url: HB_URL,
  },
  {
    key: "airbag-25-cm",
    quote: 
      "Move the driver's seat back to ensure that there is a distance " +
      "of at least 25 cm between the centre of the air bag cover and " +
      "the middle of your chest area.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Air bags",
    url: HB_URL,
  },
  {
    key: "alcohol-only-time",
    quote: 
      "There is no miraculous way of eliminating alcohol and its " +
      "effects. Only time can do that.",
    source: HB_SRC,
    section: "Chapter 1 - The Driver - Alcohol",
    url: HB_URL,
  },
  {
    key: "all-way-stop-pedestrians",
    quote: 
      "In both of these cases, drivers and cyclists are also required " +
      "to yield the right of way to pedestrians and cyclists crossing " +
      "or travelling alongside the roadway that they are about to cross" +
      " or enter.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - At a mandatory stop",
    url: HB_URL,
  },
  {
    key: "arrest-grounds",
    quote: 
      "your ability to drive is impaired by drugs, medication or " +
      "alcohol, even if your blood alcohol concentration is below 0.08",
    source: W_ALCOHOL_SRC,
    section: "You can be arrested if",
    url: W_ALCOHOL_URL,
  },
  {
    key: "be-visible-tunnel-sign",
    quote: 
      "Advance warning that vehicle headlights and tail lights must be " +
      "on when using a tunnel in order for vehicles to be visible.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Be visible",
    url: HB_URL,
  },
  {
    key: "being-passed",
    quote: 
      "If you are being passed or about to be passed by another " +
      "vehicule, do not accelerate. You could slow down out of courtesy" +
      " to make it easier.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Being passed",
    url: HB_URL,
  },
  {
    key: "blind-spot-def",
    quote: 
      "A blind spot is an area of the road outside the driver's field " +
      "of vision that cannot be seen in the rear-view mirrors or " +
      "through the windows.",
    source: W_BLIND_SRC,
    section: "What is a blind spot?",
    url: W_BLIND_URL,
  },
  {
    key: "brake-check-sign",
    quote: 
      "Drivers of road vehicles or a combination of vehicles weighing " +
      "3,000 kg or more must check their brakes by stopping in the area" +
      " indicated by a stop sign.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Brake check",
    url: HB_URL,
  },
  {
    key: "broken-beside-solid",
    quote: 
      "A broken line next to a solid line means passing is allowed if " +
      "the broken line is on your side at the start of the manoeuvre. " +
      "Passing must be completed before the broken line ends.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Traffic lane divisions",
    url: HB_URL,
  },
  {
    key: "bus-priority-lights",
    quote: 
      "Bus priority lights are added to traffic lights to protect the " +
      "movement of buses so they can more easily merge with the flow of" +
      " traffic.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Bus priority lights",
    url: HB_URL,
  },
  {
    key: "bus-reentering-lane",
    quote: 
      "On public roads with a maximum speed limit under 70 km/h, yield " +
      "the right of way to a bus whose driver wishes to re-enter the " +
      "lane the bus occupied before stopping.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Buses",
    url: HB_URL,
  },
  {
    key: "cannabis-effects",
    quote: 
      "Cannabis at the wheel causes a decrease in vigilance and " +
      "concentration, slower reflexes, poor coordination, longer " +
      "reaction times, and impaired judgment.",
    source: W_DRUGS_SRC,
    section: "\"Soft\" drugs",
    url: W_DRUGS_URL,
  },
  {
    key: "care-control-situations",
    quote: 
      "sitting in the driver's seat, even if the vehicle is stopped or " +
      "broken down being in the vehicle (even asleep on the back seat) " +
      "and having the possibility of starting the engine",
    source: W_ALCOHOL_SRC,
    section: "Care or control of a vehicle",
    url: W_ALCOHOL_URL,
  },
  {
    key: "centre-left-turn-lane",
    quote: 
      "On two-way roadways that have three or five lanes, the centre " +
      "lane is reserved exclusively for making left turns (both " +
      "directions). The procedure is to travel in the right- hand lanes" +
      " and use the centre lane only to turn left.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Lane use",
    url: HB_URL,
  },
  {
    key: "child-alone-s380",
    quote: 
      "Section 380 of the Highway Safety Code specifies that \"No person" +
      " may leave a child under 7 years of age unattended in a road " +
      "vehicle under his custody.",
    source: W_CHILD_SRC,
    section: "Never leave a child alone in a car!",
    url: W_CHILD_URL,
  },
  {
    key: "child-back-seat-12",
    quote: 
      "We also recommend that all children aged 12 or younger be seated" +
      " in the back seat of the vehicle.",
    source: W_CHILD_SRC,
    section: "In brief",
    url: W_CHILD_URL,
  },
  {
    key: "child-seat-145",
    quote: 
      "As of April 2019, the Highway Safety Code requires that children" +
      " be secured in a child safety seat that is appropriate for their" +
      " weight and height until they are 145 cm tall or 9 years old.",
    source: W_CHILD_SRC,
    section: "In brief",
    url: W_CHILD_URL,
  },
  {
    key: "circle-yield-inside",
    quote: 
      "You must yield the right of way to drivers who are already " +
      "travelling in the circle.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Traffic circles",
    url: HB_URL,
  },
  {
    key: "city-four-seconds",
    quote: "In the city, the rule is four or more seconds",
    source: DPV_SRC,
    section: "Chapter 4 - Keeping a Safe Distance in Front of You",
    url: DPV_URL,
  },
  {
    key: "class5-path",
    quote: 
      "Before you can hold a full Class 5 driver's licence, you must " +
      "first obtain a Class 5 learner's licence (which you must hold " +
      "for 12 months), pass the driving course, pass the SAAQ's " +
      "knowledge and road tests, and then hold a Class 5 probationary " +
      "licence for 24 months.",
    source: W_CLASS5_SRC,
    section: "Obtaining a Passenger Vehicle (Class 5) Driver's Licence",
    url: W_CLASS5_URL,
  },
  {
    key: "combined-lines",
    quote: 
      "A solid yellow line alongside a broken yellow line also " +
      "separates two-way traffic. You may cross these lines under " +
      "certain circumstances, if the broken line is on your side.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Combined lines",
    url: HB_URL,
  },
  {
    key: "criminal-bac-over-08",
    quote: 
      "Driving or having the care or control of a vehicle with a BAC " +
      "over 0.08 (80 mg of alcohol per 100 ml of blood);",
    source: HB_SRC,
    section: "Chapter 1 - The Driver - Criminal Code offences",
    url: HB_URL,
  },
  {
    key: "crossing-sign-duty",
    quote: 
      "The motorist must come to a stop to allow the pedestrian to " +
      "cross safely.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Crossing signs",
    url: HB_URL,
  },
  {
    key: "cyclist-bikeway-optional",
    quote: 
      "Note that using bikeways is not mandatory. Moreover, if there is" +
      " a shoulder on the side of the road, cyclists can travel on it " +
      "in the same direction as traffic.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Cycling rules",
    url: HB_URL,
  },
  {
    key: "cyclist-edge-of-road",
    quote: 
      "Ride as closely as possible to the edge of the roadway or the " +
      "right side of the road, in the same direction as traffic",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Cycling rules",
    url: HB_URL,
  },
  {
    key: "cyclist-group-no-pass",
    quote: 
      "Unless authorized to do so by a peace officer, drivers cannot " +
      "pass a group of cyclists travelling on a road with one lane of " +
      "traffic in each direction.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - In the presence of a group of cyclists",
    url: HB_URL,
  },
  {
    key: "cyclist-lights",
    quote: 
      "Cyclist lights, used to regulate bicycle traffic, are made up of" +
      " three vertical lights in the form of red, yellow and green " +
      "bicycles. The colours of the bicycles have the same meaning as " +
      "traffic lights.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Cyclist lights",
    url: HB_URL,
  },
  {
    key: "cyclist-no-headphones",
    quote: 
      "In addition, you cannot hold onto a moving vehicle or wear any " +
      "type of headphones while riding.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Cycling rules",
    url: HB_URL,
  },
  {
    key: "delineators",
    quote: 
      "Delineators are placed along the edge of the road to warn " +
      "motorists of sharp curves. They help guide motorists driving at " +
      "night or in poor visibility, especially when the pavement is wet" +
      " or snow-covered.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Delineators",
    url: HB_URL,
  },
  {
    key: "demerit-4-point-bracket",
    quote: 
      "4-point bracket Applies to holders of a learner's licence or " +
      "probationary licence Applies to holders of a Class 6D (moped or " +
      "scooter) or Class 8 (tractor) driver's licence who have held " +
      "their licence for fewer than 5 years. Applies to individuals who" +
      " do not hold a licence",
    source: W_DEMERIT_SRC,
    section: "Demerit point system",
    url: W_DEMERIT_URL,
  },
  {
    key: "demerit-brackets",
    quote: 
      "8-point bracket Applies to driver's licence holders under age 23" +
      " 12-point bracket Applies to driver's licence holders age 23 or " +
      "24 15-point bracket Applies to driver's licence holders age 25 " +
      "or older",
    source: W_DEMERIT_SRC,
    section: "Demerit point system",
    url: W_DEMERIT_URL,
  },
  {
    key: "demerit-driving-revoked",
    quote: 
      "The vehicle you are driving will be seized and impounded for 30 " +
      "days. It will be towed and impounded at the owner's expense. You" +
      " will also have to pay a $600.00 to $2,000.00 fine as well as " +
      "legal and administrative fees.",
    source: W_DEMERIT_SRC,
    section: "If you drive while your licence is revoked or suspended",
    url: W_DEMERIT_URL,
  },
  {
    key: "demerit-two-years-web",
    quote: 
      "For penalty purposes, these demerit points remain on your " +
      "driving record for 2 years following the date of your " +
      "conviction.",
    source: W_DEMERIT_SRC,
    section: "Demerit points and the driving record",
    url: W_DEMERIT_URL,
  },
  {
    key: "device-strictly-prohibited",
    quote: 
      "Using a portable electronic device with a screen while driving " +
      "is strictly prohibited. Simply holding it in your hand or in any" +
      " other manner while you are driving is prohibited.",
    source: W_PHONE_SRC,
    section: "Portable electronic devices: prohibited while driving",
    url: W_PHONE_URL,
  },
  {
    key: "disabled-parking-permit",
    quote: 
      "Hang the permit from the rearview mirror and make sure it is " +
      "visible from outside the vehicle;",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Spaces reserved for people with a disability",
    url: HB_URL,
  },
  {
    key: "divided-roadway-sign",
    quote: 
      "Warns of a divided roadway ahead, which must be accessed by the " +
      "right only.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Divided roadway",
    url: HB_URL,
  },
  {
    key: "do-not-enter-sign",
    quote: 
      "Access to a roadway or traffic lane is prohibited for all types " +
      "of vehicles because entry could result in a head-on collision.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Regulatory signs: Do not enter",
    url: HB_URL,
  },
  {
    key: "documents-to-carry",
    quote: 
      "A valid and duly signed registration certificate for the " +
      "vehicle; ▶Valid proof of insurance coverage or certificate of " +
      "financial responsibility;",
    source: HB_SRC,
    section: "Chapter 1 - The Driver - Driver's obligations",
    url: HB_URL,
  },
  {
    key: "dooring-fine",
    quote: 
      "Passing a cyclist without leaving enough space is a violation " +
      "that carries demerit points and a fine.",
    source: DPV_SRC,
    section: "Chapter 4 - Space to Leave When Passing a Cyclist",
    url: DPV_URL,
  },
  {
    key: "emerg-green-tow-truck",
    quote: 
      "When a tow truck is required by an emergency service, the driver" +
      " is authorized to use a flashing green light in addition to the " +
      "amber rotating or flashing light when travelling to the scene of" +
      " accident.",
    source: W_EMERG_SRC,
    section: "Flashing Green Light for Tow Trucks",
    url: W_EMERG_URL,
  },
  {
    key: "emergency-vehicle-yield",
    quote: 
      "Drivers must yield the right of way to an emergency vehicle " +
      "whose flashing or rotating lights and/or sirens are activated. " +
      "Remain calm and provide room for such vehicles to pass, " +
      "regardless of where they are or which direction they are " +
      "travelling (oncoming lane, behind you, beside you, etc.).",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Emergency vehicles",
    url: HB_URL,
  },
  {
    key: "excessive-speeding-thresholds",
    quote: 
      "40 km/h or more in a zone where the speed limit is 60 km/h or " +
      "less 50 km/h or more in a zone where the speed limit is over 60 " +
      "km/h and up to 90 km/h 60 km/h or more in a zone where the speed" +
      " limit is 100 km/h or over",
    source: W_SPEEDLAW_SRC,
    section: "Excessive speeding means...",
    url: W_SPEEDLAW_URL,
  },
  {
    key: "fatigue-deaths",
    quote: 
      "Each year on average, 92 people are killed and 6,713 people are " +
      "injured in an accident related to driver fatigue.",
    source: W_FATIGUE_SRC,
    section: "Driver fatigue: numbers to think about",
    url: W_FATIGUE_URL,
  },
  {
    key: "fatigue-myths",
    quote: 
      "Rolling down the window, turning up the radio, singing, changing" +
      " positions, chewing gum or talking to passengers are not " +
      "effective and long-lasting solutions. They are really just " +
      "misconceptions concerning driver fatigue.",
    source: W_FATIGUE_SRC,
    section: "Beware of myths!",
    url: W_FATIGUE_URL,
  },
  {
    key: "fatigue-nap",
    quote: 
      "As soon as you start to feel signs of fatigue, stop in a safe " +
      "location and take a 20- to 30-minute nap. Drink coffee, ideally " +
      "before you take a nap, as it may take 20 minutes for the coffee " +
      "to take effect.",
    source: W_FATIGUE_SRC,
    section: "A few tips for keeping your eyes open",
    url: W_FATIGUE_URL,
  },
  {
    key: "fatigue-shoulder",
    quote: 
      "In addition to being prohibited on a highway, stopping on the " +
      "shoulder is not safe, since there is a risk of collision with " +
      "other vehicles.",
    source: W_FATIGUE_SRC,
    section: "The shoulder of the road: only in case of emergency",
    url: W_FATIGUE_URL,
  },
  {
    key: "fine-speeding-example",
    quote: 
      "Speed limit: 50 km/h Recorded speed: 75 km/h 25 km/h over speed " +
      "limit $15 + (5 x $15) = $90",
    source: HB_SRC,
    section: "Chapter 6 - Offences and Consequences - Offences and fines",
    url: HB_URL,
  },
  {
    key: "flagperson-ahead-sign",
    quote: 
      "Warns of the presence of a flagperson ahead directing traffic. " +
      "This sign calls for extreme caution, because traffic must be " +
      "slowed, detoured or stopped temporarily because of workers and " +
      "machinery on the roadway. A flagperson's orders must be obeyed.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Road work signs: Flagperson ahead",
    url: HB_URL,
  },
  {
    key: "flagperson-fine",
    quote: 
      "If you fail to obey the orders of a flagperson, you are liable " +
      "to a fine of $300 to $600 and 4 demerit points.",
    source: W_WORK_SRC,
    section: "Failing to obey the orders of a flagperson",
    url: W_WORK_URL,
  },
  {
    key: "flashing-green",
    quote: 
      "A flashing green light indicates that left turns are protected, " +
      "meaning that oncoming vehicles are stopped.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Green light",
    url: HB_URL,
  },
  {
    key: "flashing-red",
    quote: 
      "Motorists and cyclists approaching a flashing red light must " +
      "come to a stop and yield the right of way to any vehicle " +
      "entering the intersection or near enough to it on the " +
      "intersecting roadway that to proceed might cause an accident.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Flashing red light",
    url: HB_URL,
  },
  {
    key: "flashing-yellow",
    quote: 
      "A flashing yellow light means that motorists and cyclists must " +
      "slow down and proceed after yielding the right of way to other " +
      "road users already in the intersection.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Flashing yellow light",
    url: HB_URL,
  },
  {
    key: "fog-warning-sign",
    quote: 
      "Warns of a possibility of fog; the flashing lights indicate the " +
      "presence of fog.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Fog warning",
    url: HB_URL,
  },
  {
    key: "green-arrow",
    quote: 
      "A green arrow, whether flashing or not, indicates to motorists " +
      "and cyclists that they must proceed in the direction indicated " +
      "while following the same rules governing the right of way as " +
      "those for a green light.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Green arrow",
    url: HB_URL,
  },
  {
    key: "green-circle-mandatory",
    quote: 
      "In this section, green circles do not simply mean that you are " +
      "allowed to do something; they mean that you must do something. " +
      "No other manoeuvre except the one depicted on the sign is " +
      "allowed.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Mandatory or prohibited movement",
    url: HB_URL,
  },
  {
    key: "green-light",
    quote: 
      "Motorists and cyclists facing a solid or flashing green light " +
      "may continue on their way after yielding the right of way to " +
      "vehicles, cyclists and pedestrians already in the intersection.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Green light",
    url: HB_URL,
  },
  {
    key: "handsfree-tolerated",
    quote: "Hands-free devices are not recommended. They are merely tolerated.",
    source: W_PHONE_SRC,
    section: "Hands-free devices",
    url: W_PHONE_URL,
  },
  {
    key: "hazard-marker",
    quote: 
      "The diagonal bands always point toward the side of the roadway " +
      "you must use to avoid the hazard.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Hazard markers",
    url: HB_URL,
  },
  {
    key: "headrest-7-cm",
    quote: 
      "The distance between the headrest and the back of your head is " +
      "not greater than seven centimetres;",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Headrests",
    url: HB_URL,
  },
  {
    key: "heavy-blind-spots",
    quote: 
      "Blind spots are those areas of the road that a heavy vehicle " +
      "driver cannot see because of the vehicle's size. Drivers cannot " +
      "see other road users when they are in those areas, and the risk " +
      "of collision is higher.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Heavy vehicle blind spots",
    url: HB_URL,
  },
  {
    key: "highway-six-seconds",
    quote: "On highways, the rule is six or more seconds.",
    source: DPV_SRC,
    section: "Chapter 4 - Keeping a Safe Distance in Front of You",
    url: DPV_URL,
  },
  {
    key: "hsc-autoroute-speed",
    quote: 
      "no person may drive a road vehicle at a speed ( 1 ) of less than" +
      " 60 km/h or more than 100 km/h on autoroutes",
    source: HSC_SRC,
    section: "Section 328",
    url: HSC_URL,
  },
  {
    key: "hsc-ignition-key",
    quote: 
      "No person may leave unattended a road vehicle that is in his " +
      "custody without previously removing the ignition key and locking" +
      " the doors.",
    source: HSC_SRC,
    section: "Section 381",
    url: HSC_URL,
  },
  {
    key: "hsc-other-speeds",
    quote: 
      "( 2 ) in excess of 90 km/h on public highways surfaced with " +
      "concrete, asphalt or a similar material; ( 3 ) in excess of 70 " +
      "km/h on gravel highways; ( 4 ) in excess of 50 km/h in a built-" +
      "up area, except on autoroutes;",
    source: HSC_SRC,
    section: "Section 328",
    url: HSC_URL,
  },
  {
    key: "hsc-parking-distances",
    quote: 
      "( 2 ) less than 3 m from a fire hydrant; ( 3 ) less than 5 m " +
      "from a police or fire station, or less than 8 m from such a " +
      "building and on the opposite side of the street;",
    source: HSC_SRC,
    section: "Section 386",
    url: HSC_URL,
  },
  {
    key: "hsc-stopped-at-night",
    quote: 
      "If the driver of a road vehicle stops his vehicle at night on a " +
      "roadway out of necessity, the driver must keep his vehicle's " +
      "parking lights and taillights or flashing emergency lights on",
    source: HSC_SRC,
    section: "Section 385",
    url: HSC_URL,
  },
  {
    key: "hydroplaning",
    quote: 
      "When heavy rain creates sheets of water on some areas of the " +
      "road, this may cause hydroplaning. It is a form of skidding and " +
      "occurs when the tires momentarily fail to adhere to the road " +
      "surface.",
    source: DPV_SRC,
    section: "Chapter 5 - Weather Conditions",
    url: DPV_URL,
  },
  {
    key: "icy-eight-to-ten-seconds",
    quote: 
      "Since braking distances are greater on an icy or snowy road, for" +
      " instance, the space between vehicles should represent a time of" +
      " at least eight to ten seconds.",
    source: DPV_SRC,
    section: "Chapter 4 - Keeping a Safe Distance in Front of You",
    url: DPV_URL,
  },
  {
    key: "icy-pavement-sign",
    quote: 
      "Warns that a roadway, bridge or overpass may become icy or " +
      "frosted when temperatures are around freezing.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Icy pavement",
    url: HB_URL,
  },
  {
    key: "illustrated-question-tips",
    quote: 
      "look closely at what each vehicle is doing and identify any " +
      "potential traffic offences based on what you know about traffic " +
      "rules and signals, pavement markings, road signs and road-" +
      "sharing principles; identify which vehicles are being referred " +
      "to in each statement (each vehicle is assigned its own number)",
    source: W_CLASS5_SRC,
    section: "Contents of the test - answering an illustrated question",
    url: W_CLASS5_URL,
  },
  {
    key: "invalid-three-years",
    quote: 
      "If your licence has been invalid for three years or more, you " +
      "will need to pass a knowledge test and a road test before " +
      "obtaining a licence again.",
    source: HB_SRC,
    section: "Chapter 1 - The Driver - Renewing a licence",
    url: HB_URL,
  },
  {
    key: "keep-right",
    quote: 
      "When travelling on a roadway, use the right-hand lane. You may " +
      "use the left lane, however, to pass another vehicle or to avoid " +
      "an obstacle after making sure the left lane is free before " +
      "entering it.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Lane use",
    url: HB_URL,
  },
  {
    key: "knowledge-test-10-months",
    quote: 
      "To be eligible for the test, you have to have held a learner's " +
      "licence for at least 10 months and have made an appointment.",
    source: HB_SRC,
    section: "Chapter 1 - The Driver - Passing the knowledge test",
    url: HB_URL,
  },
  {
    key: "lane-ending-sign",
    quote: 
      "These signs indicate that a lane ends. They require drivers in " +
      "the lane about to end to change lanes after yielding the right " +
      "of way to vehicles in the remaining lane.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Lane ending",
    url: HB_URL,
  },
  {
    key: "lane-red-x",
    quote: "You may not drive or stop in the lane under this signal.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Lane use lights",
    url: HB_URL,
  },
  {
    key: "lane-yellow-arrow",
    quote: 
      "The yellow arrow usually appears in combination with the red X; " +
      "it indicates that you must, with caution, change lanes either to" +
      " the left or right because of lane closure ahead.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Lane use lights",
    url: HB_URL,
  },
  {
    key: "left-lane-under-80",
    quote: 
      "However, when the speed limit is below 80 km/h, for instance on " +
      "an urban boulevard, you may use either lane. Travelling faster " +
      "than a vehicle in another lane is not considered passing.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Lane use",
    url: HB_URL,
  },
  {
    key: "left-turn-yield-oncoming",
    quote: 
      "Yield the right of way, when making a left turn, to any oncoming" +
      " vehicle.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Turning at an intersection",
    url: HB_URL,
  },
  {
    key: "level-crossing-5-metres",
    quote: 
      "At a level crossing, drivers and cyclists must stop their " +
      "vehicle at least five metres from the railway where red flashing" +
      " lights, a lowered gate or a railway employee signals an " +
      "approaching rail vehicle.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Level crossings",
    url: HB_URL,
  },
  {
    key: "level-crossing-clear-space",
    quote: 
      "Do not enter a level crossing if there is not enough free space " +
      "ahead to clear the crossing completely.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Level crossings",
    url: HB_URL,
  },
  {
    key: "lights-out-act-as-stop",
    quote: 
      "When traffic lights are defective or not in operation, you must " +
      "act as though the intersection were controlled by stop signs for" +
      " all directions, except where an adequate sign or signal " +
      "replaces the lights.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Traffic lights",
    url: HB_URL,
  },
  {
    key: "logging-road-speed",
    quote: 
      "A speed limit of 70 km/h must now be observed on logging roads, " +
      "unless signs indicate otherwise.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Vehicles travelling on logging roads",
    url: HB_URL,
  },
  {
    key: "low-beams-150",
    quote: 
      "It is mandatory to switch to low-beams: at least 150 metres from" +
      " a vehicle approaching from the opposite direction at least 150 " +
      "metres from a vehicle you are following when lighting on a " +
      "public roadway is sufficient, such as in a town or city or on a " +
      "busy highway",
    source: W_NIGHT_SRC,
    section: "Do not blind other drivers! It's the law!",
    url: W_NIGHT_URL,
  },
  {
    key: "medication-side-effects",
    quote: 
      "Almost all types of medications can cause side effects that " +
      "affect your ability to drive, and these side effects may vary " +
      "from person to person. Medications that cause drowsiness are " +
      "particularly dangerous when driving.",
    source: W_DRUGS_SRC,
    section: "Prescription and over-the-counter medication",
    url: W_DRUGS_URL,
  },
  {
    key: "merge-courtesy",
    quote: 
      "The driver of vehicle 2 must consider that vehicle 1 is trying " +
      "to merge with traffic on the highway, and should display " +
      "courtesy and change lanes if possible.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Entering a highway",
    url: HB_URL,
  },
  {
    key: "merging-traffic-sign",
    quote: "Warns that traffic merges into the lane in which you are driving.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Merging traffic sign",
    url: HB_URL,
  },
  {
    key: "mixing-substances",
    quote: 
      "Mixing medication with alcohol or drugs considerably increases " +
      "your risk of being involved in a fatal accident.",
    source: W_DRUGS_SRC,
    section: "Beware of mixing!",
    url: W_DRUGS_URL,
  },
  {
    key: "mobile-igloo",
    quote: 
      "A vehicle's windshield and windows must be cleared of any matter" +
      " that might reduce visibility for the driver.",
    source: W_WINTER_SRC,
    section: "Driving a \"mobile igloo\" is dangerous and prohibited!",
    url: W_WINTER_URL,
  },
  {
    key: "moveover-change-lane",
    quote: 
      "Move over into another lane after making sure that you can do so" +
      " safely. If it is not safe to do so, stop your vehicle and wait " +
      "until it is.",
    source: W_MOVEOVER_SRC,
    section: "Vehicle stopped in the lane you are travelling in",
    url: W_MOVEOVER_URL,
  },
  {
    key: "moveover-in-brief",
    quote: 
      "When an emergency vehicle, a tow truck or a surveillance vehicle" +
      " is stopped by the side of the road and its yellow arrow light " +
      "signal, rotating lights or flashing lights are activated, you " +
      "must slow down and move over to leave as much space as possible " +
      "between you and the stopped vehicle",
    source: W_MOVEOVER_SRC,
    section: "In brief",
    url: W_MOVEOVER_URL,
  },
  {
    key: "moveover-vehicles",
    quote: 
      "It applies whenever an emergency vehicle, tow truck or " +
      "surveillance vehicle is stopped and its yellow arrow light " +
      "signal, flashing lights or rotating lights are activated.",
    source: W_MOVEOVER_SRC,
    section: "Where and when does the Move-Over Law apply?",
    url: W_MOVEOVER_URL,
  },
  {
    key: "narrow-passage-sign",
    quote: "Warns that a bridge or tunnel is narrower than the approach.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Narrow passage",
    url: HB_URL,
  },
  {
    key: "never-pass-truck-right",
    quote: 
      "Never pass a heavy vehicle on the right at an intersection: the " +
      "heavy vehicle may first veer into the left lane to have more " +
      "space to turn right.",
    source: W_BLIND_SRC,
    section: "For your safety",
    url: W_BLIND_URL,
  },
  {
    key: "new-resident-six-months",
    quote: 
      "If you are a newly arrived resident of Québec, you may drive a " +
      "passenger vehicle for six months without holding a Québec " +
      "licence, provided you hold a valid driver's licence.",
    source: HB_SRC,
    section: "Chapter 1 - The Driver - New residents",
    url: HB_URL,
  },
  {
    key: "night-glare-look-right",
    quote: 
      "To avoid being blinded by the headlights of oncoming vehicles, " +
      "look toward the right side of the road.",
    source: W_NIGHT_SRC,
    section: "Glare caused by other vehicles",
    url: W_NIGHT_URL,
  },
  {
    key: "no-alcohol-in-vehicle",
    quote: 
      "All vehicle occupants are prohibited from consuming alcohol or " +
      "drugs while in a moving vehicle or while parked in a public " +
      "place.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Alcohol or drugs",
    url: HB_URL,
  },
  {
    key: "no-liability-insurance",
    quote: 
      "If you drive or own a vehicle without third-party liability " +
      "insurance, and become involved in an accident causing more than " +
      "$500 in property damage, you are subject to licence suspension " +
      "(driver's licence, probationary licence or learner's licence).",
    source: HB_SRC,
    section: "Chapter 1 - The Driver - Driver's obligations",
    url: HB_URL,
  },
  {
    key: "no-passing-on-shoulder",
    quote: 
      "At no time may your vehicle leave the roadway (for example, " +
      "driving on the shoulder) to pass.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Passing",
    url: HB_URL,
  },
  {
    key: "no-passing-sign",
    quote: "Beginning of a no-passing zone.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Regulatory signs: No passing",
    url: HB_URL,
  },
  {
    key: "no-reverse-on-highway",
    quote: 
      "Driving in reverse is prohibited on highways and on their access" +
      " and exit ramps.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Backing up",
    url: HB_URL,
  },
  {
    key: "no-rtor-sign",
    quote: 
      "Turn right when the light is red. If the prohibition is limited " +
      "to specific time periods, these periods are indicated on the " +
      "tab.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Mandatory or prohibited movement",
    url: HB_URL,
  },
  {
    key: "no-stopping-in-intersection",
    quote: 
      "This is the reason why it is prohibited to come to a stop, block" +
      " a lane or change lanes in an intersection.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Intersections",
    url: HB_URL,
  },
  {
    key: "no-stopping-sign",
    quote: "Stopping in the area indicated by the sign is prohibited.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Regulatory signs: No stopping",
    url: HB_URL,
  },
  {
    key: "not-enough-room-to-pass-cyclist",
    quote: 
      "If there is not enough room to perform the manoeuvre, you must " +
      "stay in your lane, reduce your speed and wait behind the cyclist" +
      " until there is an opportunity to pass.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Passing a bicycle",
    url: HB_URL,
  },
  {
    key: "objects-projectiles",
    quote: 
      "In the event of a collision or sudden braking at 50 km/h, the " +
      "weight of objects in the vehicle is multiplied by 20, turning " +
      "them into projectiles that could injure or kill the occupants of" +
      " the vehicle.",
    source: W_CHILD_SRC,
    section: "Properly secured objects",
    url: W_CHILD_URL,
  },
  {
    key: "one-earphone",
    quote: "You may only wear one earphone when driving.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Headphones, screens, radar detectors",
    url: HB_URL,
  },
  {
    key: "one-way-sign",
    quote: "Traffic is allowed only in the direction indicated.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Regulatory signs: One-way traffic",
    url: HB_URL,
  },
  {
    key: "only-time-alcohol",
    quote: 
      "Only time can eliminate the effects of alcohol, so plan " +
      "accordingly!",
    source: W_ALCOHOL_SRC,
    section: "Simple and effective alternative solutions",
    url: W_ALCOHOL_URL,
  },
  {
    key: "orange-hand",
    quote: 
      "When the hand begins to flash, pedestrians already in the " +
      "intersection must hurry to reach the sidewalk or median.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Pedestrian lights",
    url: HB_URL,
  },
  {
    key: "orange-speed-sign",
    quote: 
      "Orange speed limit signs indicate the maximum speed permitted " +
      "near a work site. Unlike yellow signs, which indicate the " +
      "recommended speed, orange signs have the same force of law as " +
      "the equivalent white sign.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Road work signs: Speed limit",
    url: HB_URL,
  },
  {
    key: "park-30-cm",
    quote: 
      "You have to park your vehicle in the same direction as the flow " +
      "of traffic and no more than 30 cm from the edge of the roadway.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Stopping and parking: Obligations",
    url: HB_URL,
  },
  {
    key: "park-on-slope",
    quote: 
      "Turn the wheels to ensure that any movement of the vehicle's " +
      "front will be made toward the nearest curb.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Stopping and parking: Obligations",
    url: HB_URL,
  },
  {
    key: "parking-blocking",
    quote: 
      "Only in cases of necessity may you stop or park your vehicle in " +
      "such a way that it blocks a road sign, hinders traffic, road " +
      "construction or maintenance work or blocks access to private " +
      "property.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Stopping and parking: Restrictions",
    url: HB_URL,
  },
  {
    key: "parking-forward-exit",
    quote: 
      "Parking your vehicle so you can leave the parking space by " +
      "driving forward provides better visibility.",
    source: DPV_SRC,
    section: "Chapter 5 - Parking",
    url: DPV_URL,
  },
  {
    key: "pass-cyclist-distance",
    quote: 
      "When passing a cyclist, keep a distance: ▶Of 1 m in a zone of 50" +
      " km/h or less; ▶Of 1.5 m in a zone of more than 50 km/h.",
    source: DPV_SRC,
    section: "Chapter 4 - Space to Leave When Passing a Cyclist",
    url: DPV_URL,
  },
  {
    key: "pass-in-fog",
    quote: 
      "Passing should be avoided when travelling in fog or in " +
      "conditions with decreased visibility.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Passing",
    url: HB_URL,
  },
  {
    key: "passengers-vs-belts",
    quote: 
      "You may not carry more passengers than the number of seat belts " +
      "available in the vehicle.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Too many passengers",
    url: HB_URL,
  },
  {
    key: "passing-prohibited-signalled",
    quote: 
      "Passing is also prohibited when there are vehicles in the left " +
      "lane, or if a vehicle behind has signaled the intention to pass," +
      " or has begun to do so.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Passing prohibited",
    url: HB_URL,
  },
  {
    key: "ped-crosswalk-priority",
    quote: 
      "Pedestrians have priority at crosswalks. Drivers and cyclists " +
      "must yield the right of way to pedestrians who have begun " +
      "crossing the yellow or white pavements markings or who have " +
      "clearly signaled their intention to do so.",
    source: W_PED_SRC,
    section: "Signs and Signals",
    url: W_PED_URL,
  },
  {
    key: "ped-fine",
    quote: 
      "Pedestrians who don't obey the rules laid out in the Highway " +
      "Safety Code face a fine of $15 to $30.",
    source: W_PED_SRC,
    section: "Penalties",
    url: W_PED_URL,
  },
  {
    key: "ped-flashing-hand",
    quote: 
      "The flashing orange hand, which may be accompanied by a " +
      "countdown timer, indicates that pedestrians should cross only if" +
      " they have enough time to reach the other side or the safety " +
      "zone before the orange hand stops flashing.",
    source: W_PED_SRC,
    section: "Signs and Signals",
    url: W_PED_URL,
  },
  {
    key: "ped-green-light-priority",
    quote: 
      "Pedestrians are allowed to cross the street if the light facing " +
      "them is green, and they have the right of way once they have " +
      "begun crossing the roadway.",
    source: W_PED_SRC,
    section: "Where there are only traffic lights",
    url: W_PED_URL,
  },
  {
    key: "ped-white-silhouette",
    quote: 
      "The white silhouette authorizes pedestrians to cross the street " +
      "carefully, while watching for vehicles that are turning, " +
      "especially at intersections where turning right on red is " +
      "allowed.",
    source: W_PED_SRC,
    section: "Signs and Signals",
    url: W_PED_URL,
  },
  {
    key: "pedestrian-silhouette",
    quote: 
      "The pedestrian silhouette means that pedestrians may cross the " +
      "roadway in the area reserved for them.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Pedestrian lights",
    url: HB_URL,
  },
  {
    key: "police-hands-visible",
    quote: "Place your hands on the steering wheel so they are visible.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Interception by a police vehicle",
    url: HB_URL,
  },
  {
    key: "power-assisted-bicycle",
    quote: 
      "The bicycle must be designed to operate on two or three tires " +
      "and be equipped with pedals and an electric motor that does not " +
      "exceed 500 watts of power, which ceases to generate power once " +
      "the bicycle reaches a speed of 32 km/h.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Power-assisted bicycles",
    url: HB_URL,
  },
  {
    key: "prepare-to-stop-sign",
    quote: 
      "The flashing yellow lights indicate that the light at the " +
      "intersection or level crossing is about to turn red. It is " +
      "important to be prepared to stop.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Prepare to stop",
    url: HB_URL,
  },
  {
    key: "private-property-yield",
    quote: 
      "Drivers and cyclists wishing to enter or exit private property " +
      "should first signal their intentions and then yield the right of" +
      " way to any vehicle or pedestrian travelling on the public " +
      "roadway.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Entering or exiting private property",
    url: HB_URL,
  },
  {
    key: "prob-family-excluded",
    quote: 
      "Regardless of the number of months you have driven with a " +
      "probationary licence, members of your immediate family are not " +
      "taken into account in the authorized number of passengers aged " +
      "19 or younger.",
    source: W_CLASS5_SRC,
    section: "Keeping your probationary licence",
    url: W_CLASS5_URL,
  },
  {
    key: "public-insurance-plan",
    quote: 
      "The public insurance plan, which has been in effect since 1978, " +
      "protects all residents of Québec. It compensates victims of " +
      "bodily injury without determining who is responsible for the " +
      "accident.",
    source: HB_SRC,
    section: "Chapter 5 - Accidents - Automobile Insurance: In Quebec",
    url: HB_URL,
  },
  {
    key: "radar-detector-sign",
    quote: "Vehicles are prohibited from having radar detectors on board.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Regulatory signs: Other",
    url: HB_URL,
  },
  {
    key: "recommended-speed-tab",
    quote: 
      "This tab shows the recommended speed when driving around an " +
      "obstacle or a hazard on a public roadway.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Recommended speed",
    url: HB_URL,
  },
  {
    key: "red-arrow",
    quote: 
      "A red arrow prohibits drivers from going in the direction to " +
      "which it points.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Red arrow",
    url: HB_URL,
  },
  {
    key: "red-light",
    quote: 
      "A red light means you have to stop. Motorists and cyclists are " +
      "required to bring their vehicle to a full stop at the " +
      "intersection, before the pedestrian crosswalk or stop line.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Red light",
    url: HB_URL,
  },
  {
    key: "red-light-no-line",
    quote: 
      "If there is no line, stop before the edge of the roadway you are" +
      " preparing to cross. Motorists or cyclists may only proceed on " +
      "the authorization of a traffic signal.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Red light",
    url: HB_URL,
  },
  {
    key: "reflective-signs-at-night",
    quote: 
      "Road signs are designed to reflect light, so that they can be " +
      "seen from far away when a vehicle's headlights hit them, which " +
      "is not the case for non-reflective objects.",
    source: HB_SRC,
    section: "Chapter 1 - The Driver - Night vision",
    url: HB_URL,
  },
  {
    key: "regulated-parking-lights",
    quote: 
      "These signs restrict parking on the street at certain times to " +
      "facilitate road maintenance. The regulation on the sign is in " +
      "effect only when the lights are on.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Regulated parking lights",
    url: HB_URL,
  },
  {
    key: "reserved-lane-diamond",
    quote: 
      "An elongated white diamond on pavement indicates a lane reserved" +
      " for certain types of vehicles.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Arrows and symbols",
    url: HB_URL,
  },
  {
    key: "reserved-lane-shared-use",
    quote: 
      "Diagonal broken white lines on the pavement in the reserved lane" +
      " indicate to drivers in the adjacent lane that shared use of the" +
      " lane is allowed on the condition they turn at the next " +
      "intersection.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Reserved lane",
    url: HB_URL,
  },
  {
    key: "restricted-visibility-sign",
    quote: "Visibility is limited or nil due to an abrupt slope in the road.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Restricted visibility",
    url: HB_URL,
  },
  {
    key: "right-turn-method",
    quote: 
      "Turn sharply and enter the far right-hand lane of the other " +
      "roadway without encroaching upon the left lane or any bicycle " +
      "lane or reserved lane.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Right turns",
    url: HB_URL,
  },
  {
    key: "roadway-narrows-sign",
    quote: 
      "These signs indicate that the roadway narrows without a " +
      "reduction in the number of lanes. They do not require any " +
      "particular manoeuvre on your part, but call for increased " +
      "alertness.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Roadway narrows",
    url: HB_URL,
  },
  {
    key: "rtor-allowed-except-montreal",
    quote: 
      "Turning right at a red light is allowed across the Province of " +
      "Québec, except on the island of Montréal and where prohibited by" +
      " a traffic sign.",
    source: W_RTOR_SRC,
    section: "What the Law Says",
    url: W_RTOR_URL,
  },
  {
    key: "rtor-full-stop-required",
    quote: 
      "Drivers must come to a full stop before turning right at a red " +
      "light. Not coming to a full stop before turning right at a red " +
      "light or turning right where prohibited is just like running a " +
      "red light!",
    source: W_RTOR_SRC,
    section: "Penalties",
    url: W_RTOR_URL,
  },
  {
    key: "rtor-montreal-signs",
    quote: 
      "Traffic signs indicating the prohibition from turning right on " +
      "red have been installed at Montréal points of entry, including " +
      "bridges, tunnels, ferries and the airport.",
    source: W_RTOR_SRC,
    section: "Exceptions",
    url: W_RTOR_URL,
  },
  {
    key: "school-bus-5-metres",
    quote: 
      "You must come to a stop at least five metres from a school bus " +
      "when its flashing red lights are activated or its mandatory stop" +
      " sign is extended. You may proceed when the flashing lights are " +
      "turned off, the stop sign is retracted and it is safe to " +
      "advance.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - School buses",
    url: HB_URL,
  },
  {
    key: "school-bus-median",
    quote: 
      "However, if the roadway is separated by a median or another type" +
      " of divider, this obligation does not apply.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - School buses",
    url: HB_URL,
  },
  {
    key: "school-bus-stop-ahead-sign",
    quote: 
      "Possible presence of a school bus that has stopped ahead to take" +
      " on or let off passengers. This sign is used only when a curve " +
      "or hill prevents motorists from seeing the stopped bus ahead of " +
      "time.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - School bus stop ahead",
    url: HB_URL,
  },
  {
    key: "school-zone-sign",
    quote: 
      "Presence of a school zone, that is, a road segment adjacent to " +
      "the premises of an elementary or secondary school. Between " +
      "September and June, the maximum speed limit in school zones is " +
      "50 km/h. This is in effect from Monday to Friday, between 7 a.m." +
      " and 5 p.m.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Beginning of a school zone",
    url: HB_URL,
  },
  {
    key: "seat-belt-mandatory",
    quote: 
      "All occupants sitting in the front or back seat of a moving " +
      "motor vehicle, with the exception of children whose sitting " +
      "height is less than 63 cm (starting on April 18, 2019, children " +
      "must be at least 145 cm tall or 9 years old), must wear and " +
      "properly fasten the seat belt provided.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Seat belts",
    url: HB_URL,
  },
  {
    key: "seat-belt-sign",
    quote: "Wearing a seat belt is mandatory.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Regulatory signs: Seat belt",
    url: HB_URL,
  },
  {
    key: "seat-belt-under-16",
    quote: 
      "If you are driving, you are also responsible for making sure " +
      "that passengers under age 16 are wearing their seat belt " +
      "properly.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Seat belts",
    url: HB_URL,
  },
  {
    key: "shared-street",
    quote: 
      "A shared street is a street on which pedestrians have the right " +
      "of way. Road vehicles are also authorized to travel on such " +
      "streets.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Shared streets",
    url: HB_URL,
  },
  {
    key: "shoulder-check-lane-change",
    quote: 
      "Before changing lanes, quickly turn your head in the direction " +
      "you want to go in order make sure the lane is free.",
    source: W_BLIND_SRC,
    section: "How to make sure no one is in any of your blind spots",
    url: W_BLIND_URL,
  },
  {
    key: "shoulder-driving-prohibited",
    quote: 
      "Under no circumstances may you drive on the shoulder except in " +
      "case of necessity (closed or obstructed lane or emergency) or " +
      "unless authorized by a sign or signal.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Driving prohibited - where and when?",
    url: HB_URL,
  },
  {
    key: "sign-colours",
    quote: 
      "Black and white: regulatory signs Yellow: danger warnings " +
      "Orange: road work Green, brown or blue: information signs",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Shapes and colours of the main types of signs",
    url: HB_URL,
  },
  {
    key: "sign-shapes",
    quote: 
      "For example, danger and work site signs are diamond shaped. In " +
      "addition, some shapes are reserved for particular signs. For " +
      "example, octagons are reserved for stop signs and pentagons are " +
      "reserved to identify school zones.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Shapes and colours of the main types of signs",
    url: HB_URL,
  },
  {
    key: "signal-arrow-vehicle",
    quote: 
      "An arrow affixed to a vehicle or trailer indicates that one lane" +
      " of traffic is obstructed and that you must take the lane which " +
      "remains open.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Work site lights",
    url: HB_URL,
  },
  {
    key: "signal-intentions",
    quote: 
      "Before changing lanes, making a U-turn (unless prohibited by a " +
      "road sign), passing, turning or entering a roadway from the " +
      "shoulder or a parking area, indicate your intentions using the " +
      "vehicle's turn-signal lights continuously over a sufficient " +
      "distance to ensure your safety and that of other road users.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Signalling your intentions",
    url: HB_URL,
  },
  {
    key: "slippery-surface-sign",
    quote: 
      "Warns that the road surface in certain areas may be slippery " +
      "when wet.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Slippery surface",
    url: HB_URL,
  },
  {
    key: "slow-lane-solid-line",
    quote: 
      "If you are travelling in the slow lane on the right-hand side, " +
      "you are prohibited from re-entering the main lane if a solid " +
      "line is painted on the pavement.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Passing in a slow lane",
    url: HB_URL,
  },
  {
    key: "solid-double-lines",
    quote: 
      "Two solid yellow lines next to one another separate two-way " +
      "traffic lanes. They may not be crossed.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Solid double lines",
    url: HB_URL,
  },
  {
    key: "solid-line-exceptions",
    quote: 
      "However, these lines may be crossed if the traffic lane is " +
      "obstructed or closed, or to make a left turn onto another " +
      "roadway or into a private driveway.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Traffic lane divisions",
    url: HB_URL,
  },
  {
    key: "speed-limit-sign",
    quote: 
      "Maximum and minimum speeds legally permitted. The last digit is " +
      "always zero.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Regulatory signs: Speed limit",
    url: HB_URL,
  },
  {
    key: "steep-grade-sign",
    quote: 
      "These signs indicate the grade of a slope in percentage terms " +
      "when it is at least 6% (a drop of 6 metres over 100 metres); the" +
      " higher the percentage, the steeper the hill.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Steep grade",
    url: HB_URL,
  },
  {
    key: "stop-sign",
    quote: "Indicates that you must come to a full stop at an intersection.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Regulatory signs: Stop",
    url: HB_URL,
  },
  {
    key: "stop-sign-yield",
    quote: 
      "Drivers and cyclists required to stop at an intersection or " +
      "flashing red light must yield the right of way to any vehicle on" +
      " the other roadway already in the intersection or near enough to" +
      " the intersection that entering it would be dangerous.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - At a mandatory stop",
    url: HB_URL,
  },
  {
    key: "tailgater-strategy",
    quote: 
      "If a vehicle is following too closely and infringes on your " +
      "safety margin, leave even more space in front. That may prompt " +
      "the other driver to pass you.",
    source: DPV_SRC,
    section: "Chapter 4 - Keeping a Safe Distance Behind You",
    url: DPV_URL,
  },
  {
    key: "test-three-parts",
    quote: 
      "The knowledge test is based on the Road Safety Education Program" +
      " (RSEP) and divided into three parts: the Highway Safety Code " +
      "road signs, pavement markings and traffic signals behaviours and" +
      " techniques applicable to driving a passenger vehicle " +
      "(specialization)",
    source: W_CLASS5_SRC,
    section: "Contents of the test",
    url: W_CLASS5_URL,
  },
  {
    key: "tow-away-tab",
    quote: 
      "This tab, located beneath controlled parking signs, indicates " +
      "that vehicles in violation may be towed.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Controlled parking",
    url: HB_URL,
  },
  {
    key: "traction-reducers",
    quote: 
      "Rain, black ice, dead leaves, sand and even worn or improperly " +
      "inflated tires can reduce their traction to the road surface.",
    source: DPV_SRC,
    section: "Chapter 3 - Turning on a Curve",
    url: DPV_URL,
  },
  {
    key: "traffic-circle-def",
    quote: 
      "A traffic circle is a roadway configuration that contains one to" +
      " three lanes and encompasses a central island. Traffic flows " +
      "counterclockwise.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Traffic circles",
    url: HB_URL,
  },
  {
    key: "truck-mirrors-too-close",
    quote: 
      "For example, if you are travelling behind a truck and do not see" +
      " any of the truck's side mirrors, you are too close. You should " +
      "also avoid travelling alongside a heavy vehicle and taking too " +
      "much time to pass it, because the driver cannot see you.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Sharing the road with heavy vehicles",
    url: HB_URL,
  },
  {
    key: "turn-as-soon-as-clear",
    quote: 
      "You must turn as soon as the way is clear. If, when preparing to" +
      " turn, you are unable to move into the designated turning lane, " +
      "continue and turn at another intersection.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - Turning",
    url: HB_URL,
  },
  {
    key: "vision-90-percent",
    quote: 
      "Studies have shown that 90% of the information necessary for " +
      "driving is gathered through sight.",
    source: HB_SRC,
    section: "Chapter 1 - The Driver - Vision",
    url: HB_URL,
  },
  {
    key: "visual-field-shrinks",
    quote: 
      "As a vehicle accelerates, your visual field shrinks, in the same" +
      " way that it does when your eye focuses on one object. Drugs, " +
      "alcohol and fatigue often produce the same effect.",
    source: HB_SRC,
    section: "Chapter 1 - The Driver - Field of vision",
    url: HB_URL,
  },
  {
    key: "wakefulness-17-19",
    quote: 
      "Between 17 and 19 hours of wakefulness: Physical and mental " +
      "capacities are comparable to those of a person with a blood " +
      "alcohol concentration of 50 mg of alcohol/100 ml of blood " +
      "(0.05).",
    source: W_FATIGUE_SRC,
    section: "The effects of a long period of wakefulness",
    url: W_FATIGUE_URL,
  },
  {
    key: "warning-signs",
    quote: 
      "Warning signs draw attention to road sections where you must be " +
      "particularly cautious due to obstacles or hazards on or " +
      "alongside the roadway. The signs warn drivers to slow down, stop" +
      " or change directions.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Road signs",
    url: HB_URL,
  },
  {
    key: "what-driving-means",
    quote: 
      "If you are at the wheel of a road vehicle in a traffic lane, you" +
      " are driving. Even when you are stopped at a red light or stuck " +
      "in traffic, you are driving!",
    source: W_PHONE_SRC,
    section: "What does \"while driving\" mean?",
    url: W_PHONE_URL,
  },
  {
    key: "winter-adapt-driving",
    quote: 
      "Under the Highway Safety Code, drivers must slow down when " +
      "visibility is reduced as a result of darkness, fog, rain or " +
      "other precipitation, or when the roadway is slippery or not " +
      "completely cleared.",
    source: W_WINTER_SRC,
    section: "Winter Driving",
    url: W_WINTER_URL,
  },
  {
    key: "winter-tires-dates",
    quote: "Winter tires are mandatory from December 1 to March 15 inclusive.",
    source: W_WINTER_SRC,
    section: "Winter tires: Be ready before December 1",
    url: W_WINTER_URL,
  },
  {
    key: "worksite-merge-early",
    quote: 
      "Exercise caution when coming to areas where the roadway narrows " +
      "or lanes merge, which can create a bottleneck and slow traffic. " +
      "Move into the lane that remains open as soon as you see the " +
      "sign. Don't wait until the last minute, because you will have " +
      "more difficulty finding space to merge.",
    source: HB_SRC,
    section: "Chapter 4 - Traffic Rules - When nearing a work site",
    url: HB_URL,
  },
  {
    key: "workzone-doubled-example",
    quote: 
      "In a road work zone where the posted speed limit on an orange " +
      "sign is 70 km/h, if you are travelling at: 90 km/h, the fine is " +
      "$140 ($70 x 2)",
    source: W_WORK_SRC,
    section: "Fines double for speeding in road work zones or school zones",
    url: W_WORK_URL,
  },
  {
    key: "yellow-light",
    quote: 
      "A yellow light means that the light will soon turn red, and " +
      "indicates to motorists and cyclists that they have to stop",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Yellow (amber) light",
    url: HB_URL,
  },
  {
    key: "yield-sign",
    quote: 
      "Yield the right of way to vehicles travelling on the road you " +
      "are about to enter.",
    source: HB_SRC,
    section: "Chapter 3 - Road Signs and Traffic Signals - Regulatory signs: Yield",
    url: HB_URL,
  },
  {
    key: "zero-alcohol-penalty",
    quote: 
      "Immediate licence suspension for 90 days Four demerit points " +
      "Fine of $300 to $600",
    source: W_ALCOHOL_SRC,
    section: "The zero-alcohol rule applies to...",
    url: W_ALCOHOL_URL,
  },
  {
    key: "zero-alcohol-who",
    quote: 
      "The zero-alcohol rule applies to... Drivers under 22 years of " +
      "age Learner drivers Holders of a probationary licence People who" +
      " have never held a license People who have held a motorcycle " +
      "licence (6A, 6B, 6C) for 24 months or less",
    source: W_ALCOHOL_SRC,
    section: "The zero-alcohol rule applies to...",
    url: W_ALCOHOL_URL,
  },
];
