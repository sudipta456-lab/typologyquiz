import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Same sourcing rules as sets-1-3.ts: the Nebraska Driver's
// Manual (Nebraska DMV, January 2025) is the first authority, Chapter 60 of
// the Nebraska Revised Statutes fills what it leaves out, and the DMV's Driver
// Licensing Examiner Policies and Procedures Manual is the only official
// statement of what the written test actually is. PRINTED page N is PDF page
// N + 8; every page cited here is the printed one.
//
// Set 5 is built on what Nebraskans actually report failing on rather than on
// what looks hard. Three sources shaped it:
//
//  - r/Omaha, 2025: a parent who had recently helped a teen study described
//    the state's own practice exam as dominated by blood alcohol limits, seat
//    belt rules, insurance requirements, and the restrictions attached to
//    school and work permits. Every one of those four is over-represented here.
//  - The manual's own practice exam (printed pages 76-77), which the DMV
//    publishes with an answer key. The items it chose are a direct signal
//    about which rules the state thinks are worth testing: the uphill parking
//    rule, the fire hydrant distance, the four-way stop courtesy rule, the
//    solid yellow line, the school bus median exception, the 40 mph interstate
//    minimum, and the 100-foot signal distance all appear on it.
//  - The places the Driver's Manual and Chapter 60 do not line up. Those are
//    named in the research note and every question here is built so that both
//    readings give the same answer, except where the question is explicitly
//    about the gap itself.
const HB = "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf";
/** The manual's PRINTED page N sits on PDF page N + 8. */
const hb = (printedPage: number) => `${HB}#page=${printedPage + 8}`;
const NEB = "https://nebraskalegislature.gov/laws/statutes.php?statute=";
const DLE = "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dls/DLE_Policies_and_Procedures_Manual.pdf";

export const nebraskaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "Thirty-five questions drawn from all seven sections, including the parts nobody reads: required equipment, health and driving, what happens at a traffic stop, and the permits Nebraska issues that no other state has.",
    questions: [
      {
        id: "ne_s4_01",
        topic: "licensing",
        question: "What does a Nebraska School Permit (SCP) let a teenager do?",
        choices: [
          "Drive anywhere in the state without supervision",
          "Drive unsupervised to and from school by the most direct route, and at any time with a licensed driver at least 21 beside them",
          "Drive only with a parent in the vehicle",
          "Drive to school and to a part-time job",
        ],
        correctIndex: 1,
        explanation:
          "The School Permit is a route-limited license. Unsupervised, it covers the trip between home and the school the holder attends, by the nearest highway and the most direct accessible route, plus school events on school property.",
        context:
          "It exists because of geography, not age: it may be issued only to someone who lives outside a city of 5,000 or more, or attends a school outside one. The holder may carry family members who live with them to that school, and every passenger must be secured in an occupant protection system.",
        trap: "It does not cover a job. Driving to work on a School Permit is outside the permit, and violating its terms means no permit of any kind until the holder turns 16.",
        excerptKey: "scp-city-5000",
        sourceLabel: "Nebraska Driver's Manual - Section 1, 1C-3 School Permit - Type SCP",
        sourceUrl: hb(2),
        commonlyMissed: true,
      },
      {
        id: "ne_s4_02",
        topic: "rules",
        question: "Which of these is on Nebraska's list of equipment a vehicle is required by law to have?",
        choices: [
          "A muffler",
          "A spare tire",
          "A fire extinguisher",
          "A first aid kit",
        ],
        correctIndex: 0,
        explanation:
          "A muffler is on the statutory list. Nebraska names headlights, tail lights, brake lights, turn signals, a horn, windshield wipers, a muffler, seat belts appropriate to the year of manufacture, two brake systems, safety glass, tires with tread, and a windshield free of objects that obstruct vision.",
        context:
          "Two of those come with numbers. Tires must be pneumatic with at least 2/32 of an inch of tread, and the two systems of brakes means a service brake and a parking brake, not two pedals.",
        trap: "Spare tires, extinguishers and first aid kits are sensible and none of them is required.",
        excerptKey: "required-equipment",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2J Required Equipment",
        sourceUrl: hb(29),
      },
      {
        id: "ne_s4_03",
        topic: "safety",
        question: "How do you check tire tread with a penny, and what does a pass look like?",
        choices: [
          "Lincoln's head into the groove - if his whole head shows, the tread is safe",
          "The edge of the coin against the sidewall",
          "Lincoln's head into the groove - if any part of his head is covered, the tread is safe",
          "The penny should sit flat across two tread blocks",
        ],
        correctIndex: 2,
        explanation:
          "Put Lincoln's head down into the shallowest groove. If any part of his head disappears you still have safe tread; if the whole head shows, the tread is too low.",
        context:
          "Tread depth is only half of tire care. The manual asks for a monthly pressure check with a gauge, on cold tires, against the sticker inside the driver's door - never against the number on the tire sidewall, which is the tire's maximum rather than the vehicle's recommendation.",
        trap: "The test reads backwards from what people expect: covered head is good news, not bad.",
        excerptKey: "penny-test",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2N Tire Pressure/Tread Depth",
        sourceUrl: hb(30),
      },
      {
        id: "ne_s4_04",
        topic: "impairment",
        question: "What happens to a Nebraska license immediately after a driver fails an alcohol test?",
        choices: [
          "Nothing until a court convicts the driver",
          "The officer confiscates it and issues a temporary license valid 15 days",
          "It is suspended for 30 days on the spot",
          "It is mailed to the DMV for review",
        ],
        correctIndex: 1,
        explanation:
          "The Administrative License Revocation law lets law enforcement confiscate the license at once. The driver gets a temporary that expires 15 days later, and at that point the revocation begins unless a departmental hearing dismisses it.",
        context:
          "The revocation lengths follow: 180 days for a first failure, one year for a subsequent failure, and one year for a refusal. A driver who waives the hearing may be able to serve some or all of it on an Ignition Interlock Permit; a driver who petitions for a hearing is not allowed one until a court orders it as part of a DUI sentence.",
        trap: "The 15-day temporary feels like a reprieve. It is a countdown.",
        excerptKey: "alr-temp-15-days",
        sourceLabel: "Nebraska Driver's Manual - Section 1, 1Q-7 Administrative License Revocation",
        sourceUrl: hb(20),
      },
      {
        id: "ne_s4_05",
        topic: "signs",
        question: "What is a Reference Post Marker on a Nebraska highway for?",
        choices: [
          "Marking the county line",
          "Marking the start of a passing zone",
          "Showing the distance to the next exit",
          "Giving your location when you need assistance or have an emergency",
        ],
        correctIndex: 3,
        explanation:
          "They are placed at one-mile increments so a stranded driver can tell a dispatcher exactly where they are. On a long, featureless stretch of Nebraska highway that is the difference between help finding you and help searching.",
        context:
          "The other roadside number worth knowing is on the blue Emergency Notification System sign at every railroad crossing: a 24-hour phone number answered by railroad dispatchers, with a Department of Transportation crossing number below it that identifies the exact crossing.",
        trap: "They look like mile markers for navigation, which is the least important thing they do.",
        excerptKey: "reference-post",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-5 Special Signs",
        sourceUrl: hb(42),
      },
      {
        id: "ne_s4_06",
        topic: "rightOfWay",
        question:
          "You are already inside a roundabout when an ambulance approaches with lights and siren. What does the manual tell you to do?",
        choices: [
          "Stop where you are and let it pass",
          "Reverse out of the roundabout",
          "Continue to your exit, pass the splitter island, then pull over",
          "Speed up to clear the circle",
        ],
        correctIndex: 2,
        explanation:
          "Keep going and get out. Stopping inside the circle blocks the only path through it, so you finish your exit, clear the splitter island and then pull over.",
        context:
          "If you have not yet entered, the ordinary rule applies: pull over and let the emergency vehicle pass before entering. The manual states plainly that you should avoid stopping within the roundabout at all.",
        trap: "The reflex from ordinary roads - stop immediately - is the wrong move here and traps the ambulance behind you.",
        excerptKey: "roundabout-emergency",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4B-5 Rules for Driving Roundabouts",
        sourceUrl: hb(49),
        commonlyMissed: true,
      },
      {
        id: "ne_s4_07",
        topic: "safety",
        question: "An officer pulls you over at night. What does the manual suggest you do that helps everyone?",
        choices: [
          "Turn on your interior lights",
          "Get out of the vehicle and walk back to the patrol car",
          "Have your license out before the officer reaches the window",
          "Keep the engine running in case you are released quickly",
        ],
        correctIndex: 0,
        explanation:
          "Interior lights on. At night it lets the officer see into the vehicle, and the manual lists it alongside turning off the engine and any audio, and keeping your hands visible on the wheel.",
        context:
          "The rest of the sequence: signal and pull off as soon as it is safe, stay in the vehicle unless told to get out, tell the officer at first contact if there is a weapon in the car, and wait for instructions before reaching for your license or documents.",
        trap: "Digging for your paperwork before the officer asks is the well-meaning move the manual specifically tells you not to make.",
        excerptKey: "pulled-over-interior-lights",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2G What to Do When Pulled Over by Police",
        sourceUrl: hb(28),
      },
      {
        id: "ne_s4_08",
        topic: "speed",
        question: "How much is the fine for driving 25 mph over the limit in an ordinary Nebraska speed zone?",
        choices: ["$75", "$125", "$200", "$300"],
        correctIndex: 2,
        explanation:
          "Two hundred dollars, plus court costs. The 21-to-35-over band is $200 normally and $400 in a work or school zone.",
        context:
          "The whole schedule: $10 for 1 to 5 over, $25 for 6 to 10, $75 for 11 to 15, $125 for 16 to 20, $200 for 21 to 35, and $300 for more than 35 over. Every figure doubles in a work or school zone, and court costs are added in all cases.",
        trap: "The points ladder runs separately from the fine ladder, and outside city limits it is harsher: 3 points from 16 over rather than from 11 over.",
        excerptKey: "fines-doubled",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4C-4 Speeding Fine Schedule",
        sourceUrl: hb(53),
      },
      {
        id: "ne_s4_09",
        topic: "rules",
        question: "What does Nebraska law say about driving on the shoulder of a highway?",
        choices: [
          "It is allowed to let faster traffic pass",
          "It is allowed on any road outside city limits",
          "It is allowed below 20 mph",
          "It is prohibited, with a short list of exceptions including mail carriers and removing a vehicle from the roadway",
        ],
        correctIndex: 3,
        explanation:
          "The shoulder is not a lane. The statute prohibits driving on it and then names the exceptions: federal mail carriers delivering mail, safely removing a vehicle from the roadway, implements of husbandry, and bicycles and mobility devices on paved state highway shoulders other than the Interstate.",
        context:
          "That last exception is why the manual tells bicyclists they may ride the paved shoulder, and why a rider leaving or entering the shoulder must signal and yield to all other vehicles.",
        trap: "Pulling onto the shoulder to be polite to a tailgater is not on the list. The lawful version is to move right at the next opportunity in a travel lane.",
        excerptKey: "st-shoulder-driving",
        sourceLabel: "Nebraska Revised Statute 60-6,142 - Driving on highway shoulders prohibited",
        sourceUrl: `${NEB}60-6,142`,
      },
      {
        id: "ne_s4_10",
        topic: "licensing",
        question: "What is a Nebraska Farm Husbandry Permit for, and how young can a holder be?",
        choices: [
          "Driving a car to a farm job, from 15",
          "Driving any vehicle within a county, from 14",
          "Driving a tractor on the Interstate, from 16",
          "Operating minitrucks and farm husbandry equipment, from 13 if you live on a farm",
        ],
        correctIndex: 3,
        explanation:
          "The Farm Husbandry Permit authorizes minitrucks and farm husbandry equipment. The minimum age is 13 if you live on a farm, or 14 if you are employed on one for compensation.",
        context:
          "It requires vision, written and drive tests, including a tractor written test and a Class O drive test - though a county extension course completion certificate waives the tractor tests. It expires on the sixteenth birthday.",
        trap: "It is the youngest driving credential Nebraska issues, and it is not a general license: without a minitruck test a Z restriction goes on it.",
        sourceLabel: "Nebraska Driver's Manual - Section 1, 1C-1 Farm Husbandry Permit",
        sourceUrl: hb(1),
      },
      {
        id: "ne_s4_11",
        topic: "sharing",
        question:
          "A blind pedestrian using a white cane is at the edge of the roadway ahead. What does the manual require?",
        choices: [
          "Slow to walking pace and pass carefully",
          "Sound the horn to signal that it is safe",
          "Yield only if they are in a marked crosswalk",
          "Stop, and stay stopped until the person is clear of the roadway",
        ],
        correctIndex: 3,
        explanation:
          "Stop and remain stopped until the person is well away from the roadway or your path of travel. The rule covers a white cane or a guide dog and it is not limited to crosswalks.",
        context:
          "The manual makes the same point about horns generally: the horn is for warning of an immediate danger of collision, and it specifically tells drivers not to blast the horn at a bicyclist. A blind pedestrian navigating by sound is the worst possible audience for it.",
        trap: "Creeping past is exactly what a pedestrian listening for traffic cannot interpret.",
        excerptKey: "white-cane",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4B-11 Right-of-Way to Visually Impaired",
        sourceUrl: hb(52),
      },
      {
        id: "ne_s4_12",
        topic: "emergencies",
        question: "What does the manual tell you to do if you become stranded in a blizzard?",
        choices: [
          "Stay with the vehicle, open a window slightly, and run the engine sparingly",
          "Set out on foot toward the nearest lights",
          "Run the engine continuously with the windows sealed",
          "Sleep until conditions improve",
        ],
        correctIndex: 0,
        explanation:
          "Stay with the car. Open a window slightly for fresh air, run the engine and heater sparingly, and keep snow from blocking the exhaust pipe.",
        context:
          "The rest: use the emergency flashers so work crews can see you, turn the dome light on at night, and if there is more than one person in the car, take turns keeping watch and sleeping. The manual's first advice about a blizzard is not to drive in one at all.",
        trap: "Running the engine with the exhaust buried is how carbon monoxide gets into the cabin. That is why the window and the tailpipe are in the same instruction.",
        excerptKey: "blizzard-stranded",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5C-6 Blizzards",
        sourceUrl: hb(63),
      },
      {
        id: "ne_s4_13",
        topic: "signals",
        question: "A steady yellow \"X\" is lit over your lane. What should you do?",
        choices: [
          "Stay in the lane until a red X appears",
          "Move out of the lane as soon as it is safe",
          "Stop and wait",
          "Speed up to clear the lane before the change",
        ],
        correctIndex: 1,
        explanation:
          "Yellow X means get out. A red X is coming for that lane, and the yellow is the window you have to leave it safely.",
        context:
          "Lane use signals control reversible lanes that change direction with the rush hour. A downward green arrow means the lane is open to you; a red X means never drive under it.",
        trap: "Waiting for the red before moving leaves you in a lane that is about to carry traffic the other way.",
        excerptKey: "lane-use-yellow-x",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3A-3 Lane Use Signals",
        sourceUrl: hb(32),
      },
      {
        id: "ne_s4_14",
        topic: "parking",
        question: "Which is a violation of Nebraska's handicapped parking rules?",
        choices: [
          "Parking in a handicapped stall at 2 a.m. with a valid permit displayed",
          "Dropping a passenger at the curb near a stall",
          "Parking in an ordinary stall next to a handicapped stall",
          "Parking in the striped access aisle beside a handicapped stall",
        ],
        correctIndex: 3,
        explanation:
          "The striped access aisle is not parking. It is the space a wheelchair lift or ramp deploys into, and blocking it defeats the stall next to it.",
        context:
          "The stalls themselves are reserved 24 hours a day, seven days a week, for vehicles displaying a handicap plate or permit and from which the person actually enters or exits. Fines run to $150 for a first offense, $300 for a second and $500 for a third, and blocking a curbcut or wheelchair ramp is its own ticket.",
        trap: "Late at night with an empty lot feels harmless. The reservation has no hours.",
        excerptKey: "handicapped-access-aisles",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4F-4 Handicapped Parking",
        sourceUrl: hb(57),
      },
      {
        id: "ne_s4_15",
        topic: "impairment",
        question:
          "Nebraska says a driver at .05% BAC is how much more likely to be in a fatal crash than a driver who has not been drinking?",
        choices: [
          "Three times as likely",
          "Twice as likely",
          "Five times as likely",
          "No more likely",
        ],
        correctIndex: 1,
        explanation:
          "Twice. By .08% the manual puts it at three times, and it climbs sharply from there.",
        context:
          "This is on the state's own practice exam twice over: once as \"the risk of being in a crash begins to rise noticeably between .04% and .05% BAC\", marked true, and once as \"at .05% BAC a driver is at no risk of being involved in a crash\", marked false.",
        trap: "Three times is the .08% figure, not the .05% figure. Both are on the exam.",
        excerptKey: "crash-risk-05-twice",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2A Alcohol, Drugs, and Driving",
        sourceUrl: hb(25),
      },
      {
        id: "ne_s4_16",
        topic: "rules",
        question: "What does Nebraska law say about crossing the median of a divided highway?",
        choices: [
          "It is allowed at any break in the median",
          "It is allowed if you signal first",
          "It is allowed only through an established median opening or crossover - and never at any point on a freeway unless directed by competent authority",
          "It is allowed for left turns only",
        ],
        correctIndex: 2,
        explanation:
          "Only through a median opening or crossover established by competent authority, and freeway medians may not be crossed or entered at all unless you are specifically directed to.",
        context:
          "Emergency crossovers on a freeway are reserved for authorized emergency vehicles, wreckers and vehicles assisting a stranded car. The manual puts it in one line: never cross the median of the interstate highway.",
        trap: "A worn dirt track across a median is not an established opening. Its existence proves other people have broken the same rule.",
        excerptKey: "st-median-driving",
        sourceLabel: "Nebraska Revised Statute 60-6,141 - Driving on divided highways",
        sourceUrl: `${NEB}60-6,141`,
      },
      {
        id: "ne_s4_17",
        topic: "signs",
        question: "A yellow-green background on a Nebraska warning sign means the warning is about what?",
        choices: [
          "Road construction",
          "An incident ahead",
          "A recreation area",
          "Pedestrians, bicycles, playgrounds, schools and school buses",
        ],
        correctIndex: 3,
        explanation:
          "Yellow-green is Nebraska's people color. It is used for warning signs specific to pedestrians, bicycles, playgrounds, schools and school buses.",
        context:
          "Ordinary yellow still covers general warnings. Pink is the newer addition and it means incident management - a crash or emergency operation ahead. Orange is work zones, brown is recreation.",
        trap: "Pink is the one people have never heard of, and it is on the manual's list.",
        excerptKey: "sign-colors-rest",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-1 Sign Colors",
        sourceUrl: hb(34),
      },
      {
        id: "ne_s4_18",
        topic: "licensing",
        question: "How long is a passed Nebraska written test good for?",
        choices: [
          "30 days",
          "90 days",
          "6 months",
          "1 year",
        ],
        correctIndex: 2,
        explanation:
          "Six months. Pass the written test and you have six months to use the result before it lapses.",
        context:
          "Separately, an Issuance Certificate from a passed exam must be presented to a county treasurer, or to the state driver licensing office in Douglas, Lancaster or Sarpy County, within 90 days. Miss that and you have to go back to a driver licensing office.",
        trap: "Ninety days and six months are two different deadlines attached to the same visit, and they are easy to swap.",
        excerptKey: "dle-80-percent",
        sourceLabel: "Nebraska DMV - Driver Licensing Examiner Policies and Procedures Manual, Class O Written Test",
        sourceUrl: `${DLE}#page=32`,
      },
      {
        id: "ne_s4_19",
        topic: "safety",
        question: "What does the manual say about using a vehicle's horn?",
        choices: [
          "Use it whenever another driver makes a mistake",
          "Use it to greet a cyclist so they know you are there",
          "Use it before every blind curve",
          "Use a sharp blast to warn of an immediate danger of collision",
        ],
        correctIndex: 3,
        explanation:
          "The horn is a collision warning, not a comment. The manual's instruction is a sharp blast to alert another road user to an immediate danger.",
        context:
          "The manual's communication list is broader than the horn: signal at least 100 feet before changing direction, use headlights any time you have difficulty seeing other vehicles, and tap the brakes several times when slowing to warn the driver behind.",
        trap: "The bicycle section says outright not to blast the horn at a bicyclist. Startling a rider is how you cause the crash you were warning about.",
        excerptKey: "horn-sharp-blast",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5G-1 Defensive Driving",
        sourceUrl: hb(66),
      },
      {
        id: "ne_s4_20",
        topic: "rightOfWay",
        question: "In a dual-lane roundabout, which lane do you choose to turn left?",
        choices: [
          "The shared through/right-turn lane",
          "Either lane, then signal",
          "The shared through/left-turn lane",
          "The truck apron",
        ],
        correctIndex: 2,
        explanation:
          "Left turns use the shared through/left-turn lane, which is the inner one. Right turns use the shared through/right-turn lane. Signs and arrows before the circle tell you which is which.",
        context:
          "You still yield to all traffic on your left already circulating, you stay in your designated lane the whole way round, and you avoid driving beside or passing a large truck in a roundabout, because a truck may need to cross into another lane or onto the apron.",
        trap: "The truck apron is not a lane. Cars, SUVs, pickups, bicyclists and pedestrians are all told to stay off it.",
        excerptKey: "roundabout-dual-lane",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4B-5 Rules for Driving Roundabouts",
        sourceUrl: hb(49),
      },
      {
        id: "ne_s4_21",
        topic: "emergencies",
        question: "What does the manual say you must exchange with the other driver after a crash?",
        choices: [
          "Only insurance details",
          "Only names and plate numbers",
          "Name, address, telephone number, license plate number, driver's license number, insurance information, and the make, model and year of the vehicle",
          "Nothing until police arrive",
        ],
        correctIndex: 2,
        explanation:
          "All seven items. Nebraska lists them together, and getting the witness names and addresses is on the same page.",
        context:
          "If you hit an unattended vehicle, the same information has to be left in writing where the owner will find it, and the proper authorities contacted. Do not leave the scene until released by proper authorities.",
        trap: "Photographing the other car's plate is not a substitute for the exchange. Failure to give name and address after a crash is a reason a Nebraska license gets suspended.",
        excerptKey: "crash-exchange",
        sourceLabel: "Nebraska Driver's Manual - Section 7, 7A General Information",
        sourceUrl: hb(73),
      },
      {
        id: "ne_s4_22",
        topic: "speed",
        question: "You are traveling well below the flow of traffic on a two-lane Nebraska highway. What does the law require?",
        choices: [
          "Nothing, as long as you are under the speed limit",
          "Drive in the right lane where available, or as close as practicable to the right curb or edge",
          "Use the shoulder to let others pass",
          "Increase speed to match the flow",
        ],
        correctIndex: 1,
        explanation:
          "Slower traffic keeps right. Nebraska requires any vehicle moving below the normal speed of traffic to be in the right lane where one exists, or as close to the right edge as practicable.",
        context:
          "The exceptions are the obvious ones: while overtaking and passing another vehicle in the same direction, or while preparing for a left turn at an intersection or into a private road or driveway. It is separately unlawful to drive so slowly as to impede the normal and reasonable flow of traffic.",
        trap: "Being under the limit does not settle it. Impeding traffic is its own offense, and on a freeway the floor is 40 mph.",
        excerptKey: "st-impeding",
        sourceLabel: "Nebraska Revised Statute 60-6,193 - Minimum speed regulation; impeding traffic",
        sourceUrl: `${NEB}60-6,193`,
      },
      {
        id: "ne_s4_23",
        topic: "sharing",
        question:
          "You have overtaken a large truck and want to move back into its lane. When is it safe?",
        choices: [
          "As soon as the truck's headlights leave your blind spot",
          "As soon as you have passed the cab",
          "After three seconds have passed",
          "When the entire front of the truck is visible in your rear view mirror",
        ],
        correctIndex: 3,
        explanation:
          "The whole front of the truck in your mirror. Cutting in earlier puts you in the No-Zone directly in front, where the driver cannot see you and cannot stop in the distance left.",
        context:
          "A loaded truck at 55 mph needs at least 340 feet to stop on dry pavement, and its air brakes do not bite instantly the way a car's hydraulic brakes do. The manual calls cutting in too soon one of the biggest mistakes drivers make.",
        trap: "Passing the cab is not passing the truck. The gap you need is measured from the truck's front bumper.",
        excerptKey: "no-zone-passing",
        sourceLabel: "Nebraska Driver's Manual - Section 6, 6F-2 No Zone",
        sourceUrl: hb(72),
      },
      {
        id: "ne_s4_24",
        topic: "rules",
        question: "Is it legal to drive in a marked bike lane in Nebraska?",
        choices: [
          "No - but you may cross it to change lanes, to reach on-street parking, or to enter or leave private property",
          "Yes, if no bicycle is present",
          "Yes, if you are turning within the next block",
          "No, under any circumstances",
        ],
        correctIndex: 0,
        explanation:
          "Driving in a bike lane is illegal; crossing one is not. You may cross to move into another travel lane, to enter or leave an on-street parking space, or to reach private property.",
        context:
          "Before crossing you check that it is safe and yield to approaching bicyclists. To turn right, the manual's instruction is to merge with the bike traffic - move into the bike lane once it is clear, signal, and then turn, rather than turning across a rider going straight.",
        trap: "Turning right across a bike lane from the travel lane is the classic right hook. Merging into the lane first is what prevents it.",
        excerptKey: "bike-lane-crossing",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3C-4 Other Pavement Markings, Bike Lanes",
        sourceUrl: hb(46),
        commonlyMissed: true,
      },
      {
        id: "ne_s4_25",
        topic: "licensing",
        question: "At what age may a Nebraska license, permit or State ID holder register as an organ and tissue donor?",
        choices: ["14", "15", "16", "18"],
        correctIndex: 2,
        explanation:
          "Sixteen. Nebraska law allows any permit, license or State ID card holder aged 16 or over to make the declaration through the DMV, and a heart symbol goes on the front of the card.",
        context:
          "A minor between 16 and 18 may elect to be a donor, but a parent or legal adult guardian may amend that decision. For an adult, Nebraska's First Person legislation means the decision stands on its own and cannot be rescinded by anyone after death.",
        trap: "The status stays in place even if the document expires. Changing it means applying for a replacement card, or going through liveonnebraska.org at no cost.",
        excerptKey: "organ-donor-16",
        sourceLabel: "Nebraska Driver's Manual - Section 1, 1J Organ and Tissue Donation Information",
        sourceUrl: hb(14),
      },
      {
        id: "ne_s4_26",
        topic: "signals",
        question: "What is the correct hand signal for a left turn?",
        choices: [
          "Left arm out and bent upward",
          "Left arm out and bent downward",
          "Right arm out of the passenger window",
          "Left arm out and fully extended",
        ],
        correctIndex: 3,
        explanation:
          "Left arm straight out. Bent upward is a right turn and bent downward is slow or stop.",
        context:
          "Hand signals are not a museum piece in Nebraska. They are required when a vehicle's signal lights are not working, and this exact item appears on the DMV's published practice exam.",
        trap: "The three signals all use the left arm, which is why the elbow is what distinguishes them.",
        excerptKey: "practice-hand-signal-left",
        sourceLabel: "Nebraska Driver's Manual - Nebraska Driver's Practice Exam, question 15",
        sourceUrl: hb(76),
      },
      {
        id: "ne_s4_27",
        topic: "safety",
        question:
          "A driver has had a seizure or a loss of consciousness in the last three months and comes in to renew. What does Nebraska require?",
        choices: [
          "A physician's certificate that they are capable of safely operating a motor vehicle",
          "Nothing - medical history is not asked",
          "An automatic one-year suspension",
          "A drive test only",
        ],
        correctIndex: 0,
        explanation:
          "A physician has to certify that the person is capable of driving safely. The rule covers epilepsy, diabetes, heart conditions and any other condition producing a loss of consciousness inside that three-month window.",
        context:
          "Nebraska also lets law enforcement, physicians or others who are concerned about someone's ability to drive ask the DMV to recall that person for reexamination. A recalled driver retakes the written and drive tests and supplies physician and vision statements.",
        trap: "Under medical control, epilepsy is explicitly not treated as dangerous. It is the recent loss of consciousness that triggers the certificate.",
        excerptKey: "epilepsy",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2E Health and Driving",
        sourceUrl: hb(27),
      },
      {
        id: "ne_s4_28",
        topic: "parking",
        question: "Where does the manual say a stop line is usually painted in an urban area?",
        choices: [
          "Level with the crosswalk",
          "About four feet before the crosswalk",
          "About ten feet before the crosswalk",
          "At the corner of the intersecting street",
        ],
        correctIndex: 1,
        explanation:
          "About four feet before the crosswalk. Where a stop line is present, you stop at the line rather than at the sign or the signal.",
        context:
          "Crosswalk markings are the neighboring rule: pedestrians have the right of way when they are in them, and crosswalks are sometimes mid-block in residential and school areas. A crosswalk can also be unmarked, and it still exists.",
        trap: "Stopping level with the signal head puts your bumper across the crosswalk, which is precisely what the line is there to prevent.",
        excerptKey: "stop-lines",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3C-4 Other Pavement Markings",
        sourceUrl: hb(46),
      },
      {
        id: "ne_s4_29",
        topic: "impairment",
        question: "What is Nebraska's rule about nitrous oxide in a vehicle?",
        choices: [
          "It is legal in sealed canisters",
          "It is only unlawful for drivers under 21",
          "It is unlawful to use nitrous oxide in any motor vehicle operated on a public roadway",
          "It is treated the same as an open container",
        ],
        correctIndex: 2,
        explanation:
          "The manual gives it its own short section and the rule is flat: unlawful to use in any motor vehicle operated on any public roadway in the state.",
        context:
          "It sits beside the drug half of Nebraska's impaired driving law, which does not depend on alcohol at all. Being under the influence of any drug while operating or in actual physical control of a vehicle is a crime under Neb. Rev. Stat. 60-6,196.",
        trap: "Legal to buy does not mean legal to use behind the wheel. The same logic covers prescription and over-the-counter medicines the manual tells you to ask a pharmacist about.",
        excerptKey: "nitrous-oxide",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2F Nitrous Oxide Use Prohibited",
        sourceUrl: hb(27),
      },
      {
        id: "ne_s4_30",
        topic: "signs",
        question: "What does a No Train Horn sign under a railroad crossing sign mean?",
        choices: [
          "A quiet zone has been established and trains do not blow the horn there",
          "The crossing is closed",
          "The crossing has no gates",
          "Trains do not use this crossing at night",
        ],
        correctIndex: 0,
        explanation:
          "A quiet zone. Trains still run through the crossing at full speed; they simply do not sound the horn, so the warning you would normally get by ear is not coming.",
        context:
          "It makes the visual warnings the only warnings. The manual's approach rule applies harder here: come at a constant controlled speed, fast enough to coast across if the engine stalls and slow enough to stop if you need to, and always expect a train on any track at any time.",
        trap: "It is the sign most likely to be read as \"no trains\". It means the opposite of reassuring.",
        excerptKey: "warn-no-train-horn",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-4 Warning Signs",
        sourceUrl: hb(41),
        commonlyMissed: true,
      },
      {
        id: "ne_s4_31",
        topic: "rightOfWay",
        question:
          "You are on a divided highway and an ambulance approaches with lights and siren on the OTHER side of the median. What does the manual say?",
        choices: [
          "You must stop like everyone else",
          "Traffic going the opposite direction on a roadway divided by a median is not required to stop",
          "You must slow to 25 mph",
          "You must move to the shoulder but need not stop",
        ],
        correctIndex: 1,
        explanation:
          "A median separates the problem. Traffic traveling the opposite direction on a divided roadway is not required to stop for it.",
        context:
          "That is the same logic behind the school bus median exception, and it is the reason the word median matters so much in Nebraska. A painted line is not a median; a physical divider is.",
        trap: "On an undivided four-lane road with an ambulance coming the other way, you do have to pull right and stop.",
        excerptKey: "emergency-remain-stopped",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4B-9 Right-of-Way to Emergency Vehicles",
        sourceUrl: hb(52),
      },
      {
        id: "ne_s4_32",
        topic: "rules",
        question: "Nebraska prohibits which of these outright, on any public roadway?",
        choices: [
          "A vehicle with a navigation screen",
          "A vehicle with a television screen visible to the driver while driving",
          "A vehicle with tinted rear windows",
          "A vehicle with a dashboard camera",
        ],
        correctIndex: 1,
        explanation:
          "A television set with a viewing screen visible to the driver is unlawful to operate on a public roadway. Navigation displays and dashcams are not what the rule is aimed at.",
        context:
          "It sits beside the handheld device ban in the manual's list of things that are illegal in Nebraska. Window tinting is regulated rather than banned: the front side windows have a 35 percent light transmission floor and the rear windows a 20 percent floor, and nothing but clear material is allowed below the AS-1 line on the windshield.",
        trap: "The manual also lists objects hung in windows that obstruct vision as a required-equipment failure and a one-point violation.",
        excerptKey: "illegal-television",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5E-1 Distracted Driving",
        sourceUrl: hb(65),
      },
      {
        id: "ne_s4_33",
        topic: "sharing",
        question: "A motorcycle ahead of you has its turn signal flashing. What does the manual warn?",
        choices: [
          "It is about to turn - slow immediately",
          "Motorcycle signals are always cancelled automatically",
          "Ignore motorcycle signals entirely",
          "Motorcycle signals usually are not self-cancelling, so wait until you are sure it is actually turning",
        ],
        correctIndex: 3,
        explanation:
          "Most motorcycle signals do not cancel themselves after a turn, so a flashing signal may just be one the rider forgot. Wait for the bike to actually commit before you pull out.",
        context:
          "The larger point is that a motorcycle is hard to read: its small profile makes speed and distance hard to judge, and roughly a third of motorcycle crashes involve another vehicle, with nearly 40 percent of those caused by the other vehicle turning left in front of the rider.",
        trap: "Pulling out on the strength of a flashing signal is exactly the left-turn crash that statistic describes.",
        excerptKey: "motorcycle-signals",
        sourceLabel: "Nebraska Driver's Manual - Section 6, 6A-1 Seeing and Understanding Motorcycles",
        sourceUrl: hb(68),
      },
      {
        id: "ne_s4_34",
        topic: "emergencies",
        question: "Which of these carries 6 points on a Nebraska driving record?",
        choices: [
          "Careless driving",
          "Violating a school bus crossing",
          "Leaving the scene of a crash",
          "Failure to yield to a pedestrian with no injury",
        ],
        correctIndex: 2,
        explanation:
          "Leaving the scene is a six-point offense, in the same band as driving under the influence, failing to report a crash and failing to render aid.",
        context:
          "The ladder below it: willful reckless driving 6, reckless driving 5, careless driving 4, failure to yield to a pedestrian with bodily injury 4, using a handheld device to read or send written communication 3, negligent driving 3, violating a school bus crossing 3, failure to yield to a pedestrian with no injury 2. Motor vehicle homicide and a third drunk driving offense are 12 each, which is instant revocation.",
        trap: "Careless, reckless and willful reckless are three separate offenses in Nebraska with three different point values.",
        excerptKey: "leaving-scene-revoked",
        sourceLabel: "Nebraska Driver's Manual - Section 1, 1Q-3 The Nebraska Point System",
        sourceUrl: hb(18),
      },
      {
        id: "ne_s4_35",
        topic: "speed",
        question: "What does Nebraska's basic speed rule require, regardless of what is posted?",
        choices: [
          "That you never exceed the posted limit",
          "That you match the speed of surrounding traffic",
          "That you drive no faster than is reasonable and prudent for the conditions and the hazards then existing",
          "That you slow by 10 mph in bad weather",
        ],
        correctIndex: 2,
        explanation:
          "The posted number is a ceiling in good conditions. The basic rule requires a speed that is reasonable and prudent for the conditions and hazards actually present, which is often far below it.",
        context:
          "The statute names where it bites hardest: approaching and crossing an intersection or railroad grade crossing, going around a curve, approaching a hillcrest, on a narrow or winding road, and when hazards exist from pedestrians, other traffic, weather or road conditions.",
        trap: "\"I was under the limit\" is not a defense to the basic rule. It is a separate requirement that sits on top of the posted number.",
        excerptKey: "st-basic-rule",
        sourceLabel: "Nebraska Revised Statute 60-6,185 - Basic rule; speed",
        sourceUrl: `${NEB}60-6,185`,
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Built from what Nebraskans say the written test is actually made of - alcohol limits, belt and restraint rules, insurance requirements and permit restrictions - plus every place the Driver's Manual and Chapter 60 do not agree.",
    questions: [
      {
        id: "ne_s5_01",
        topic: "impairment",
        question:
          "Which BAC threshold applies to a 19-year-old driving their own car in Nebraska?",
        choices: [".02%", ".04%", ".08%", ".10%"],
        correctIndex: 0,
        explanation:
          "Point-oh-two. Anyone under 21 is unlawful at .02 percent or higher, and at .08 or higher they face the ordinary DUI charge on top of it.",
        context:
          "Nebraska publishes three thresholds and expects you to know which is which: .02% under 21, .04% in a commercial motor vehicle, and .08% for anyone in anything. The under-21 rule is called zero tolerance because the manual describes the violation as operating a motor vehicle with alcohol in your system at all.",
        trap: "Being over 18 and legally an adult changes nothing here. Nebraskans who studied for the test name the BAC ladder as the block of questions they had to memorize cold.",
        excerptKey: "bac-thresholds",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2A Alcohol, Drugs, and Driving",
        sourceUrl: hb(24),
        commonlyMissed: true,
      },
      {
        id: "ne_s5_02",
        topic: "safety",
        question:
          "Which Nebraska restraint rule is a PRIMARY offense - one you can be stopped and ticketed for on its own?",
        choices: [
          "An adult front-seat passenger not wearing a belt",
          "A 14-year-old not wearing a belt",
          "A POP holder's passenger not wearing a belt",
          "A child under eight not in a federally approved child safety seat",
        ],
        correctIndex: 3,
        explanation:
          "The under-eight child restraint requirement is primary: an officer may stop and cite for that alone. The adult belt rule, the eight-to-eighteen rule and the POP and School Permit passenger rule are all secondary.",
        context:
          "The manual defines both terms in the same section. A primary law means any person driving in Nebraska can be stopped and ticketed solely for that violation. A secondary law means the citation is written only if the driver was stopped for something else first. Children under 18 riding in cargo areas is also primary.",
        trap: "Primary and secondary is the pairing Nebraskans studying the state's practice exam describe as the seatbelt block, and getting the direction backwards is the whole failure.",
        excerptKey: "primary-law",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2B Air Bags, Child Restraints and Seat Belts",
        sourceUrl: hb(25),
        commonlyMissed: true,
      },
      {
        id: "ne_s5_03",
        topic: "licensing",
        question:
          "What minimum liability coverage does Nebraska require for bodily injury to or death of two or more people in one crash?",
        choices: ["$25,000", "$50,000", "$100,000", "$300,000"],
        correctIndex: 1,
        explanation:
          "Fifty thousand dollars. Nebraska's proof of financial responsibility is stated as a set of three: $25,000 for injury to or death of one person, $50,000 for two or more, and $25,000 for property damage.",
        context:
          "Driving without it has teeth. Conviction of no proof of insurance is a reason a Nebraska license gets suspended, and so is being at fault in a crash without the required minimum coverage.",
        trap: "The manual's suspension list on printed page 18 abbreviates these as \"$25,000 property, $50,000 personal injury\", which loses the distinction between one person and two or more. The three-figure version in Section 2H is the accurate one.",
        excerptKey: "insurance-minimums-manual",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2H Proof of Financial Responsibility",
        sourceUrl: hb(28),
        commonlyMissed: true,
      },
      {
        id: "ne_s5_04",
        topic: "sharing",
        question:
          "What does Nebraska law actually impose on a driver who passes a stopped school bus with its red lights on and stop arm out?",
        choices: [
          "A written warning for a first offense",
          "A Class IV misdemeanor with a $500 fine and points on the license",
          "A $100 fine",
          "Immediate license revocation",
        ],
        correctIndex: 1,
        explanation:
          "A Class IV misdemeanor, a $500 fine and points. It is one of the harshest fixed penalties in the Nebraska Rules of the Road.",
        context:
          "The Driver's Manual gives no penalty at all - it says only that not stopping is unlawful. The number lives in Neb. Rev. Stat. 60-6,175(1), and the point system separately assesses three points for violating a school bus crossing.",
        trap: "The manual is silent here, so a learner who studies only the book has no answer. Its own back cover says it is not an official legal reference to Nebraska traffic laws.",
        excerptKey: "st-school-bus-penalty",
        sourceLabel: "Nebraska Revised Statute 60-6,175 - School bus; safety requirements",
        sourceUrl: `${NEB}60-6,175`,
        commonlyMissed: true,
      },
      {
        id: "ne_s5_05",
        topic: "licensing",
        question:
          "A 16-year-old has held a Provisional Operator's Permit for two months. Who may ride with them?",
        choices: [
          "Any number of passengers, if all are belted",
          "No passengers at all",
          "Only passengers over 21",
          "No more than one passenger under 19 who is not an immediate family member",
        ],
        correctIndex: 3,
        explanation:
          "During the POP's first six months the holder may carry no more than one passenger under nineteen who is not an immediate family member. Immediate family do not count against the limit.",
        context:
          "Two more POP rules run with it: unsupervised driving is limited to 6 a.m. to midnight, with a narrow exception for trips to and from work or a school activity, and every passenger must be secured in an occupant protection system. Breaking the passenger rule is a one-point assessment.",
        trap: "Three friends in the back with belts on is still a violation. The limit is about the number of young non-family passengers, not about belts.",
        excerptKey: "web-pop-passenger",
        sourceLabel: "Nebraska DMV - Provisional Operator's Permit (POP)",
        sourceUrl: "https://dmv.nebraska.gov/dl/pop",
        commonlyMissed: true,
      },
      {
        id: "ne_s5_06",
        topic: "rules",
        question:
          "How is Nebraska's handheld device ban enforced for an ordinary adult driver?",
        choices: [
          "As a primary offense - an officer may stop you for it alone",
          "It is not enforced at all",
          "As a secondary action only, after you have been cited for something else",
          "As a primary offense only in work zones",
        ],
        correctIndex: 2,
        explanation:
          "Secondary. Neb. Rev. Stat. 60-6,179.01(4) says enforcement may be accomplished only as a secondary action when the driver has already been cited or charged with another violation.",
        context:
          "The ban itself is broad: no reading, typing or sending a written communication on a handheld device while the vehicle is in motion. Fines are $200 for a first offense, $300 for a second and $500 for a third, with points assessed each time. Permit holders are under a stricter rule - no use of any interactive wireless communication device at all.",
        trap: "Secondary enforcement is not permission. It is still an offense with points and a fine attached; it just is not a reason to be pulled over on its own.",
        excerptKey: "st-handheld-secondary",
        sourceLabel: "Nebraska Revised Statute 60-6,179.01 - Use of handheld wireless communication device",
        sourceUrl: `${NEB}60-6,179.01`,
        commonlyMissed: true,
      },
      {
        id: "ne_s5_07",
        topic: "speed",
        question:
          "The manual prints \"75 MPH on rural interstate highways\". Which of these is the statute's actual exception?",
        choices: [
          "60 mph after dark",
          "65 mph on the Interstate inside Douglas County",
          "70 mph within any city limits",
          "There is no exception",
        ],
        correctIndex: 1,
        explanation:
          "Sixty-five in Douglas County. The statute also names I-180 in Lancaster County and I-129 in Dakota County, which together cover the Interstate mileage in Omaha, Lincoln and South Sioux City.",
        context:
          "The rest of the maximum-speed statute matches the manual word for word - 25 residential, 20 business, 50 gravel, 55 paved off the state system, 65 four-lane divided off the state system, 65 state highway system, 70 expressway or super-two or freeway, 75 Interstate. The Douglas County carve-out is the one line the manual compresses into the word rural.",
        trap: "Posted signs always govern. The point of knowing this one is that the manual's flat 75 is not the whole rule.",
        excerptKey: "st-speed-interstate",
        sourceLabel: "Nebraska Revised Statute 60-6,186 - Speed; maximum limits; signs",
        sourceUrl: `${NEB}60-6,186`,
        commonlyMissed: true,
      },
      {
        id: "ne_s5_08",
        topic: "parking",
        question:
          "Nebraska's parking distances cluster around three numbers. Which pairing is correct?",
        choices: [
          "10 feet from a hydrant, 15 feet from a crosswalk, 25 feet from a stop sign",
          "15 feet from a crosswalk, 20 feet from a hydrant, 30 feet from a stop sign",
          "15 feet from a hydrant, 20 feet from a crosswalk at an intersection, 30 feet from a stop sign or flashing signal",
          "20 feet from a hydrant, 30 feet from a crosswalk, 50 feet from a stop sign",
        ],
        correctIndex: 2,
        explanation:
          "Fifteen, twenty, thirty - hydrant, crosswalk at an intersection, then traffic control device. Fifty feet from the nearest rail of a railroad crossing sits above them.",
        context:
          "The statute's list is longer than the manual's and adds two more: 20 feet from a fire station driveway entrance, and 75 feet opposite one when it is properly signposted.",
        trap: "The hydrant and the crosswalk are adjacent items in the same list and swapping them is the single most common parking error on any state's test. The DMV's own practice exam asks the hydrant figure directly.",
        excerptKey: "st-park-hydrant",
        sourceLabel: "Nebraska Revised Statute 60-6,166 - Stopping, standing, or parking prohibited",
        sourceUrl: `${NEB}60-6,166`,
        commonlyMissed: true,
      },
      {
        id: "ne_s5_09",
        topic: "licensing",
        question:
          "An adult who has never held a Nebraska permit wants a Class O license. Must they hold a Learner's Permit for 90 days first?",
        choices: [
          "No - vision, written and drive tests are the requirement; the 90-day LPD rule only applies after three failed drive tests",
          "Yes, 90 days of LPD is always required",
          "Yes, but only if they are under 25",
          "No - adults need only a vision test",
        ],
        correctIndex: 0,
        explanation:
          "An adult first-timer takes the vision, written and drive tests. The 90-day Learner's Permit requirement is a consequence of failing three successive drive tests, not a precondition for the first one.",
        context:
          "The written test is waived if the applicant already holds an LPD that is valid or expired no more than a year. A permit is still the only lawful way to practice on the road before the drive test, which is why most adults get one anyway.",
        trap: "Nebraskans on local forums have repeatedly misread the manual's Test Failure paragraph as a general prerequisite. The manual attaches it to failing three drive tests.",
        excerptKey: "class-o-three-fails",
        sourceLabel: "Nebraska Driver's Manual - Section 1, 1C-6 Operator's License (Class O)",
        sourceUrl: hb(6),
        commonlyMissed: true,
      },
      {
        id: "ne_s5_10",
        topic: "rightOfWay",
        question:
          "The manual gives one exception to stopping for a school bus. How many does the statute give?",
        choices: [
          "Two - opposite direction on a divided highway, and traffic directed to proceed by a posted sign",
          "One - opposite direction on a divided highway",
          "Three",
          "None; the statute has no exceptions",
        ],
        correctIndex: 0,
        explanation:
          "Two. Neb. Rev. Stat. 60-6,175(1) exempts approaching traffic in the opposite direction on a divided highway, and approaching traffic directed to proceed by a sign displayed under subsection (8).",
        context:
          "Neither exception helps a driver behind the bus, and neither turns a painted center line into a divided highway. When the amber lights come on you slow to 25 mph and prepare to stop, whichever direction you are traveling.",
        trap: "Learning the manual's single exception is enough to pass the test and not enough to know the law. This is the clearest case in the Nebraska bank where the book is incomplete rather than wrong.",
        excerptKey: "st-school-bus-exception",
        sourceLabel: "Nebraska Revised Statute 60-6,175 - School bus; safety requirements",
        sourceUrl: `${NEB}60-6,175`,
      },
      {
        id: "ne_s5_11",
        topic: "safety",
        question:
          "Where must a child under eight ride, according to Nebraska's child passenger restraint law?",
        choices: [
          "Any seat, in a federally approved child safety seat",
          "In the front seat, where the driver can see them",
          "In any seat, in an ordinary seat belt",
          "In a federally approved child safety seat, in a seat other than a front seat if a rear seat with a restraint system is available and not already occupied by another child under eight",
        ],
        correctIndex: 3,
        explanation:
          "Two requirements at once: a federally approved child safety seat, and a seating position other than the front if a rear seat with a restraint system is free of other children under eight.",
        context:
          "Children under two ride rear-facing until they outgrow the seat manufacturer's height or weight limit. Children from eight up to eighteen must be secured in a seat belt or child safety seat. Violation carries a $25 fine plus court costs and one point against the driver's record.",
        trap: "The rear-seat half is the part people drop. The statute's wording makes it conditional on a rear seat being available and not already full of younger children.",
        excerptKey: "st-child-under-8",
        sourceLabel: "Nebraska Revised Statute 60-6,267 - Use of restraint system",
        sourceUrl: `${NEB}60-6,267`,
        commonlyMissed: true,
      },
      {
        id: "ne_s5_12",
        topic: "emergencies",
        question:
          "Nebraska's Move Over duty on a controlled-access highway does NOT apply in which situation?",
        choices: [
          "When the stopped vehicle is a tow truck rather than a police car",
          "When the stopped vehicle is unoccupied and nobody is in or near it",
          "When traffic is heavy",
          "When you are traveling below the speed limit",
        ],
        correctIndex: 1,
        explanation:
          "The statute switches the duty off only when the stopped vehicle is unoccupied and there are no individuals present in or near it. Everything else - heavy traffic, a slow speed, a tow truck instead of a cruiser - still triggers it.",
        context:
          "Where a lane change is not reasonably possible you reduce speed, hold a safe speed for the location, weather, road and traffic, and proceed with due care. The statute defines not reasonably possible as impractical or unsafe because of weather, road conditions or the immediate presence of other traffic.",
        trap: "Heavy traffic is not an exemption, it is the reason for the second half of the rule. The Move Over penalty escalates to a Class IIIA misdemeanor for a repeat within five years.",
        excerptKey: "st-move-over-unoccupied",
        sourceLabel: "Nebraska Revised Statute 60-6,378 - Controlled-access highway; stopped vehicle",
        sourceUrl: `${NEB}60-6,378`,
      },
      {
        id: "ne_s5_13",
        topic: "impairment",
        question:
          "A 20-year-old is convicted of driving at .02% BAC. What happens to the license and the record?",
        choices: [
          "A warning only",
          "Revoked for six months",
          "Impounded for 90 days and permanently on the record",
          "Impounded by the court for 30 days, on the driving record for 90 days, then deleted",
        ],
        correctIndex: 3,
        explanation:
          "Thirty days impounded by the court, ninety days on the record, then the conviction is deleted. Driving during the impoundment costs a six-month revocation.",
        context:
          "An underage refusal is worse: 90 days impounded and 120 days on the record. Minor in possession runs on its own ladder - 30 days impounded for a first offense, 90 for a second, 12 months for a third, and if the person has no permit or license they are barred from getting one for the same period.",
        trap: "Two very similar numbers sit side by side here: 30 and 90 for a .02 conviction, 90 and 120 for an underage refusal.",
        excerptKey: "underage-02-impound",
        sourceLabel: "Nebraska Driver's Manual - Section 1, 1Q-6 .02% Under Age Drinking and Driving",
        sourceUrl: hb(20),
      },
      {
        id: "ne_s5_14",
        topic: "rules",
        question:
          "Under the statute, when must a driver leaving a car standing unattended on a roadway turn the front wheels toward the curb?",
        choices: [
          "Whenever the vehicle is left standing unattended on any roadway",
          "Only when parked facing downhill",
          "Only when parked on a grade",
          "Never - the manual says away from the curb",
        ],
        correctIndex: 0,
        explanation:
          "The statute makes it unconditional: whenever a vehicle is left standing unattended on any roadway, the front wheels go to the curb or side of the roadway, along with stopping the motor, locking the ignition and removing the key, and setting the brakes.",
        context:
          "The manual's parking-on-hills paragraph is narrower and points the other way in one case: facing uphill where there is a curb, turn the wheels AWAY from the curb. On a written test about parking on a hill, answer from the manual - it is the document the test is written from.",
        trap: "This is a genuine conflict between the two sources, not a memory slip. It is recorded in the research note for exactly that reason.",
        excerptKey: "st-unattended-wheels",
        sourceLabel: "Nebraska Revised Statute 60-6,168 - Unattended motor vehicles",
        sourceUrl: `${NEB}60-6,168`,
        commonlyMissed: true,
      },
      {
        id: "ne_s5_15",
        topic: "licensing",
        question:
          "What is the effect of a Learner's Permit holder using an interactive wireless communication device while driving?",
        choices: [
          "Nothing - the adult secondary-enforcement rule covers them too",
          "It is allowed hands-free",
          "It is prohibited outright for permit holders, and the manual attaches a $200 fine and points for a first offense",
          "It is allowed for navigation only",
        ],
        correctIndex: 2,
        explanation:
          "Permit holders are held to a stricter rule than adults: no use of any type of interactive wireless communication device while the vehicle is in motion. The manual's GDL list attaches a $200 fine and points for a first offense.",
        context:
          "The restriction reaches LPE, LPD, SCP and POP holders alike, and the point system assesses one point for a permit-holder wireless violation. The adult ban is narrower - it covers reading, typing or sending written communication - and is enforced only as a secondary action.",
        trap: "Hands-free is not carved out for permit holders. The wording is any type of interactive wireless communication device.",
        excerptKey: "st-lpd-device",
        sourceLabel: "Nebraska Revised Statute 60-4,123 - LPD-learner's permit; operation restrictions",
        sourceUrl: `${NEB}60-4,123`,
      },
      {
        id: "ne_s5_16",
        topic: "signals",
        question:
          "Nebraska allows a left turn on a red light in exactly one situation. Which?",
        choices: [
          "From any street onto a one-way street, after a complete stop",
          "From a one-way street onto a two-way street, after a complete stop",
          "From a one-way street onto another one-way street, after a complete stop",
          "Left on red is never allowed",
        ],
        correctIndex: 2,
        explanation:
          "One-way to one-way, after stopping, yielding to pedestrians in the adjacent crosswalk and to other traffic. It can still be signed away at particular intersections.",
        context:
          "The right-on-red rule is broader: permitted at any circular red after a stop unless a sign prohibits it. Neither applies to a red ARROW, where turning is prohibited outright.",
        trap: "Onto a one-way street is not enough - you must also be coming FROM one.",
        excerptKey: "st-left-on-red",
        sourceLabel: "Nebraska Revised Statute 60-6,123 - Traffic control signals; turns on red signal",
        sourceUrl: `${NEB}60-6,123`,
        commonlyMissed: true,
      },
      {
        id: "ne_s5_17",
        topic: "speed",
        question:
          "Nebraska's reckless driving statute makes one piece of evidence prima facie proof of reckless driving. What is it?",
        choices: [
          "Any speed 20 mph over the limit",
          "Any speed over 100 mph",
          "Two speeding convictions in a year",
          "Driving at more than double the maximum lawful speed limit",
        ],
        correctIndex: 3,
        explanation:
          "Double the maximum lawful speed limit. At that point the statute treats the speed itself as prima facie evidence of an indifferent or wanton disregard for safety.",
        context:
          "Nebraska separates three offenses that sound alike. Careless driving is driving without due caution so as to endanger a person or property. Reckless driving is indifferent or wanton disregard. Willful reckless driving is deliberate and intentional, and carries six points where reckless carries five and careless four.",
        trap: "Fifty in a 25 zone clears the threshold in a residential district. The doubling rule bites at low limits, not just on the Interstate.",
        excerptKey: "st-reckless-double-speed",
        sourceLabel: "Nebraska Revised Statute 60-6,213 - Reckless driving, defined",
        sourceUrl: `${NEB}60-6,213`,
      },
      {
        id: "ne_s5_18",
        topic: "licensing",
        question:
          "What must a Provisional Operator's Permit applicant show if they do NOT take a DMV-approved driver safety course?",
        choices: [
          "A 30-hour certification form",
          "A 40-hour certification form with 5 hours at night",
          "A 50-hour certification form with at least 10 hours between sunset and sunrise",
          "A 60-hour certification form with 20 hours at night",
        ],
        correctIndex: 2,
        explanation:
          "Fifty hours, of which at least ten must be between sunset and sunrise, certified by a parent, guardian or licensed driver at least 21.",
        context:
          "The same 50-hour form is the alternative route to a School Permit. Taking the approved safety course instead waives both the written and drive tests; presenting the certification form means the drive test is still required.",
        trap: "The night hours are the half people forget. Ten of the fifty have to be after sunset.",
        excerptKey: "st-pop-fifty-hours",
        sourceLabel: "Nebraska Revised Statute 60-4,120.01 - Provisional operator's permit",
        sourceUrl: `${NEB}60-4,120.01`,
        commonlyMissed: true,
      },
      {
        id: "ne_s5_19",
        topic: "safety",
        question:
          "The three-second following rule is described how in the Nebraska manual?",
        choices: [
          "A maximum you should not exceed",
          "A guideline for city driving only",
          "A minimum, to be increased by one second for each adversity factor",
          "A rule that applies above 40 mph only",
        ],
        correctIndex: 2,
        explanation:
          "A minimum requirement, and the manual says to add a second for each adversity factor - rain, heavy traffic and so on.",
        context:
          "Behind a motorcycle the manual asks for three or four seconds outright. Behind a snowplow or another maintenance vehicle working the road with amber lights, the law replaces the time gap with a flat 100 feet, and behind fire apparatus running to an alarm with 500 feet.",
        trap: "Treating three seconds as the target in rain at night behind a truck is exactly the reading the word minimum is there to prevent.",
        excerptKey: "three-second-adversity",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5G-1 Defensive Driving",
        sourceUrl: hb(67),
      },
      {
        id: "ne_s5_20",
        topic: "parking",
        question:
          "You are parking on a level street with a curb and leaving the car unattended. Which set of steps satisfies Nebraska law?",
        choices: [
          "Set the parking brake and lock the doors",
          "Leave it in gear with the engine running for a moment",
          "Set the parking brake and turn the wheels away from the curb",
          "Stop the engine, lock the ignition and take the key, set the brakes, and turn the front wheels to the curb",
        ],
        correctIndex: 3,
        explanation:
          "All four of the statute's steps. On a level street with a curb, the wheels go toward the curb.",
        context:
          "The exception people actually get tested on is the hill: facing uphill where there is a curb, the manual says to set the parking brake and turn the wheels AWAY from the curb, so the tire catches the curb if the car rolls back.",
        trap: "Leaving the engine running while you dash inside is its own violation under the same section.",
        excerptKey: "st-unattended-vehicle",
        sourceLabel: "Nebraska Revised Statute 60-6,168 - Unattended motor vehicles",
        sourceUrl: `${NEB}60-6,168`,
      },
      {
        id: "ne_s5_21",
        topic: "sharing",
        question:
          "How many bicyclists may ride abreast on a Nebraska highway?",
        choices: [
          "One - single file, except on paths or parts of highways set aside for bicycles",
          "Two, always",
          "Two, only on roads posted 35 mph or less",
          "As many as fit in the lane",
        ],
        correctIndex: 0,
        explanation:
          "Single file on a highway. The exception is a path or part of a highway set aside for the exclusive use of bicycles.",
        context:
          "That does not narrow the rest of a rider's rights. A bicyclist may take the lane where it is too narrow to share safely, may use the far left lane of a one-way urban street with two or more lanes, and may need to change lanes to turn left or continue through an intersection.",
        trap: "Riders two abreast is a common sight and it is what the statute prohibits on a highway. It does not license a driver to squeeze past inside three feet.",
        excerptKey: "st-bicycle-single-file",
        sourceLabel: "Nebraska Revised Statute 60-6,317 - Bicycles on roadways and bicycle paths",
        sourceUrl: `${NEB}60-6,317`,
      },
      {
        id: "ne_s5_22",
        topic: "rightOfWay",
        question:
          "A pedestrian is in a crosswalk one lane over from you and no signal controls the crossing. What does the statute require of you?",
        choices: [
          "Yield by bringing your vehicle to a complete stop",
          "Slow down and pass behind them",
          "Yield only if they are in your own lane",
          "Sound the horn and continue",
        ],
        correctIndex: 0,
        explanation:
          "A complete stop. The duty reaches a pedestrian in your lane or in the lane immediately adjacent to it, and the statute says the yield is performed by stopping.",
        context:
          "Nebraska adds a second duty on top of it: leave a safe distance of no less than three feet clearance to avoid colliding with any pedestrian on any roadway, and exercise proper precaution on seeing any child or obviously confused or incapacitated person.",
        trap: "The adjacent-lane reach is what makes this different from a general yield rule. A pedestrian one lane away is already your problem.",
        excerptKey: "st-ped-crosswalk",
        sourceLabel: "Nebraska Revised Statute 60-6,153 - Pedestrians' right-of-way in crosswalk",
        sourceUrl: `${NEB}60-6,153`,
        commonlyMissed: true,
      },
      {
        id: "ne_s5_23",
        topic: "impairment",
        question: "Which is NOT one of the four factors Nebraska lists as affecting alcohol absorption?",
        choices: [
          "Physical fitness",
          "Body weight",
          "Sex",
          "Amount of food in the digestive tract",
        ],
        correctIndex: 0,
        explanation:
          "Fitness is not on the list. The manual gives four: weight, sex, the amount of food in the digestive tract, and time spent drinking.",
        context:
          "The manual is careful about what these change. They affect absorption, not elimination - only time reduces the alcohol level and its effects. And most individuals show significant impairment well below .08 percent.",
        trap: "A high tolerance is not on the list either. The manual notes that some drinkers appear to be in control while their driving is seriously impaired.",
        excerptKey: "absorption-factors",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2A Alcohol, Drugs, and Driving",
        sourceUrl: hb(24),
      },
      {
        id: "ne_s5_24",
        topic: "signs",
        question:
          "The DMV's published practice exam asks what a triangle-shaped road sign requires. What is the answer?",
        choices: [
          "Stop",
          "Speed up",
          "Yield",
          "Make a left turn",
        ],
        correctIndex: 2,
        explanation:
          "Yield. The manual's shape list is unambiguous: the three-sided shape always means yield.",
        context:
          "Yielding means slowing down or stopping if necessary to give the right of way to crossing or merging vehicles. It is not a suggestion - it is a regulatory sign and failing to yield carries points, four of them if a pedestrian is injured.",
        trap: "Both the yield sign and the stop sign are red and white in Nebraska, which is exactly why the manual teaches shape before color.",
        excerptKey: "shape-triangle",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-2 Sign Shapes",
        sourceUrl: hb(35),
      },
      {
        id: "ne_s5_25",
        topic: "rules",
        question:
          "You want to pass a car on a two-lane road. A bridge is 80 feet ahead and your view past it is blocked. What does the statute say?",
        choices: [
          "Passing is prohibited - the view is obstructed within 100 feet of a bridge, viaduct or tunnel",
          "Passing is allowed if you complete it before the bridge",
          "Passing is allowed at up to 10 mph over the limit",
          "Passing is allowed if the center line is broken",
        ],
        correctIndex: 0,
        explanation:
          "One hundred feet. When your view is obstructed within a hundred feet of a bridge, viaduct or tunnel, you may not overtake or drive left of center there.",
        context:
          "The same statute bars passing when approaching a hillcrest or on a curve where the view is obstructed, within 100 feet of an intersection or railroad crossing, and in any marked no-passing zone. The manual's shorter list says the same thing in fewer words.",
        trap: "A broken yellow line does not override an obstructed view. The line tells you passing is generally permitted there; the statute still forbids it when you cannot see.",
        excerptKey: "st-no-passing-bridge",
        sourceLabel: "Nebraska Revised Statute 60-6,136 - Limitations on overtaking and passing",
        sourceUrl: `${NEB}60-6,136`,
      },
      {
        id: "ne_s5_26",
        topic: "licensing",
        question:
          "Which is a reason Nebraska will suspend, revoke or impound a driving privilege?",
        choices: [
          "Two parking tickets in a year",
          "Failing a vision test at renewal",
          "Letting someone else use your license",
          "Driving a friend's uninsured car once",
        ],
        correctIndex: 2,
        explanation:
          "Allowing someone other than the holder to use the license is on the manual's list, and so is having someone else take the license test for you.",
        context:
          "The rest of the list is long and worth skimming: motor vehicle homicide, repeated traffic violations in any state, using a vehicle while committing a crime, DUI arrest or conviction, falsifying an application, leaving a crash scene without giving name and address, alcoholism and drug addiction, fleeing an officer, refusing a chemical test, reckless driving, minor in possession, and violating the terms of a School Learner's, School or Learner's Permit.",
        trap: "Parking violations assess no points at all in Nebraska, along with muffler offenses and not having your license on you.",
        excerptKey: "permit-violation-age-16",
        sourceLabel: "Nebraska Driver's Manual - Section 1, 1Q-1 When Your License May Be Suspended",
        sourceUrl: hb(18),
      },
      {
        id: "ne_s5_27",
        topic: "emergencies",
        question:
          "How long does a Nebraska driver have to file a crash report with the Department of Transportation when one is required?",
        choices: [
          "24 hours",
          "5 days",
          "10 days",
          "30 days",
        ],
        correctIndex: 2,
        explanation:
          "Ten days, on NDOT Form 41. It is required when anyone is injured or killed, or when damage to any one person's property reaches $1,500 - unless a law enforcement officer investigated, in which case the officer files it.",
        context:
          "Failure to report is unlawful, is a Class II or III misdemeanor, and can cost the driver their license or privilege to drive. Six points are assessed for failing to report a crash, and another six for failing to render aid in one.",
        trap: "The $1,500 threshold is per person's property, not per crash. A single dented door can clear it.",
        excerptKey: "crash-failure-to-report",
        sourceLabel: "Nebraska Driver's Manual - Section 7, 7A General Information",
        sourceUrl: hb(73),
      },
      {
        id: "ne_s5_28",
        topic: "safety",
        question:
          "How does Nebraska define the blind spot the manual tells you to check?",
        choices: [
          "The area directly in front of your vehicle",
          "The area to the side of a vehicle that cannot be seen in the mirrors",
          "The area behind the rear bumper",
          "The area obscured by the roof pillars",
        ],
        correctIndex: 1,
        explanation:
          "To the side, and invisible in the mirrors. That is why the fix is a glance over the shoulder, not another mirror check.",
        context:
          "The DMV's practice exam tests it as a false statement - \"the blind spot is the area directly in front of your vehicle\" - which tells you the state expects the definition itself to be known, not just the habit.",
        trap: "Trucks and buses have much larger side blind spots than cars, which is why the manual tells you not to travel alongside one for any length of time.",
        excerptKey: "blind-spot-definition",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5G-1 Defensive Driving",
        sourceUrl: hb(66),
      },
      {
        id: "ne_s5_29",
        topic: "signals",
        question:
          "A pedestrian hybrid beacon has gone dark after its cycle. What does Nebraska say about the dark-signal rule there?",
        choices: [
          "Treat it as a stop sign, like any dark signal",
          "The statute requiring a stop at a dark traffic signal does not apply to these midblock beacons",
          "Treat it as a yield",
          "Stop and wait until it starts flashing again",
        ],
        correctIndex: 1,
        explanation:
          "The manual says so directly. A hybrid beacon is dark between activations by design, and the rule about stopping at a dark signal is not applied to it.",
        context:
          "Every other dark signal is a stop sign. During a power failure with no officer, flagger or other control in place, the intersection is treated as an all-way stop.",
        trap: "This is the one deliberate exception, and it exists because a hybrid beacon spends most of its life dark.",
        excerptKey: "hybrid-beacon-dark",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3A-4 Pedestrian Hybrid Beacon",
        sourceUrl: hb(33),
        commonlyMissed: true,
      },
      {
        id: "ne_s5_30",
        topic: "speed",
        question:
          "A road is paved, is not part of the state highway system, and is not four-lane divided. Nothing is posted. What is the maximum?",
        choices: ["45 mph", "50 mph", "55 mph", "65 mph"],
        correctIndex: 2,
        explanation:
          "Fifty-five. The statute calls it a dustless-surfaced highway not part of the state highway system, and the manual translates that to dustless or paved.",
        context:
          "The three neighboring figures are the ones that get confused: 50 mph if the same road is gravel or not dustless, 65 mph if it is four-lane divided, and 65 mph if it is part of the state highway system.",
        trap: "The distinction is surface and system, not how the road feels to drive. A wide, empty, paved county road is 55.",
        excerptKey: "st-speed-low",
        sourceLabel: "Nebraska Revised Statute 60-6,186 - Speed; maximum limits; signs",
        sourceUrl: `${NEB}60-6,186`,
      },
      {
        id: "ne_s5_31",
        topic: "sharing",
        question:
          "A bicyclist is riding on the sidewalk and enters a crosswalk. What rules apply to them?",
        choices: [
          "The rights and duties of a pedestrian, but they must yield to pedestrians",
          "The rules for vehicles - you yield to them as you would a car",
          "No rules apply on a sidewalk",
          "They must dismount and walk",
        ],
        correctIndex: 0,
        explanation:
          "A bicyclist on a sidewalk or crossing in a crosswalk has a pedestrian's rights and duties, and on top of that must yield to pedestrians.",
        context:
          "On the roadway it is the other way round: a person riding a bicycle has the same duties and rights as the driver of a motor vehicle. At intersections and roundabouts the right-of-way rules apply equally to bicyclists and to motor vehicles.",
        trap: "Neither position relieves the driver. The statute says nothing in that subsection relieves the bicyclist or the driver from the duty to exercise care.",
        excerptKey: "st-bicycle-sidewalk",
        sourceLabel: "Nebraska Revised Statute 60-6,317 - Bicycles on roadways and bicycle paths",
        sourceUrl: `${NEB}60-6,317`,
      },
      {
        id: "ne_s5_32",
        topic: "parking",
        question:
          "The manual lists places you may not stop or park. Which of these appears on it?",
        choices: [
          "On a residential street after 10 p.m.",
          "Within 100 feet of a school",
          "On any road with a posted limit above 45 mph",
          "Within a highway tunnel",
        ],
        correctIndex: 3,
        explanation:
          "Highway tunnels are on the list, in the same bullet as bridges and the 50-foot railroad distance.",
        context:
          "The rest: on the roadway beside a parked vehicle, on a sidewalk, within an intersection, on a crosswalk, within 30 feet of a flashing signal or stop or yield sign or other traffic control device, within 20 feet of a crosswalk at an intersection, anywhere official signs prohibit it, in front of a public or private driveway, and within 15 feet of a fire hydrant.",
        trap: "Two of the wrong answers sound like plausible local ordinances. The manual's list is statewide and none of them is on it.",
        excerptKey: "no-park-bridge-rail",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4F-2 Where Not to Park or Stop a Vehicle",
        sourceUrl: hb(57),
      },
      {
        id: "ne_s5_33",
        topic: "licensing",
        question:
          "What happens to a Nebraska driving privilege after a second point-system revocation within five years?",
        choices: [
          "A second six-month revocation",
          "A one-year revocation",
          "Permanent revocation",
          "A three-year loss of the license or privilege, with three years of proof of financial responsibility",
        ],
        correctIndex: 3,
        explanation:
          "Three years, plus three years of maintained proof of financial responsibility - usually an SR-22 certification from an insurer - and a driver's education and training course of at least four hours before reinstatement.",
        context:
          "A first point revocation is six months, and it also requires the four-hour course before reinstatement and three years of proof of financial responsibility from the end of the revocation. A two-point credit is available for completing an approved driver improvement course before the twelfth point is assessed, once every five years.",
        trap: "The credit has to be earned before the violation that would assess the twelfth point, not after the notice arrives.",
        excerptKey: "st-points-six-months",
        sourceLabel: "Nebraska Revised Statute 60-4,183 - Point system; revocation of license",
        sourceUrl: `${NEB}60-4,183`,
      },
      {
        id: "ne_s5_34",
        topic: "rules",
        question:
          "You are stopping suddenly on a road with a car close behind you. What does the statute require?",
        choices: [
          "An appropriate signal to the driver immediately behind, when there is an opportunity to give one",
          "Nothing beyond braking safely",
          "Flashing the brake lights three times",
          "Switching on the hazard lights",
        ],
        correctIndex: 0,
        explanation:
          "The statute makes the signal a duty, not a courtesy: no person shall stop or suddenly decrease speed without first giving an appropriate signal to the driver immediately to the rear when there is opportunity to do so.",
        context:
          "The manual translates that into technique - quickly tap the brakes several times when slowing down to warn drivers behind you. It also forbids using brake or turn signal lights as a courtesy or do-pass signal to a following driver.",
        trap: "The do-pass flash is common on rural highways and it is specifically prohibited by the same statute.",
        excerptKey: "st-signal-slowing",
        sourceLabel: "Nebraska Revised Statute 60-6,161 - Required signals",
        sourceUrl: `${NEB}60-6,161`,
      },
      {
        id: "ne_s5_35",
        topic: "impairment",
        question:
          "The manual says most individuals show significant impairment at what point relative to the .08% limit?",
        choices: [
          "Only above it",
          "Exactly at it",
          "Well below it",
          "Only above .10%",
        ],
        correctIndex: 2,
        explanation:
          "Well below it. The manual states that most individuals exhibit signs of significant impairment and intoxication well below the unlawful level of .08 blood alcohol concentration.",
        context:
          "The evidence it lists supports that: simple reaction time impaired at .04%, choice reaction at .03%, tracking and vision and coordination and comprehension at .05%, emergency response at .04%, and crash risk climbing from .04% upward.",
        trap: "Some drinkers can appear to be in control. The manual says so, and says their driving is seriously impaired anyway.",
        excerptKey: "reaction-time-04",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2A Alcohol, Drugs, and Driving",
        sourceUrl: hb(24),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions mixed the way the real 25-question Class O test is: signs and markings, Nebraska law, and safe driving practice, with no hints about which is which. Twenty-four correct is 80 percent.",
    questions: [
      {
        id: "ne_s6_01",
        topic: "signs",
        question: "What does a white rectangular sign standing vertically tell you?",
        choices: [
          "A hazard is ahead",
          "A direction or distance",
          "A nearby service",
          "The law - it gives an instruction you must obey",
        ],
        correctIndex: 3,
        explanation:
          "Vertical white rectangles are regulatory. They carry the law itself, which is why the speed limit sign and the No Parking sign take that shape.",
        context:
          "A horizontal rectangle is a guide sign, giving directions or information. The manual's shape list separates the two by orientation, not by color.",
        trap: "Warning signs are yellow diamonds. If a sign is telling you what you must do rather than what to expect, it is a white rectangle.",
        excerptKey: "shape-rectangle",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-2 Sign Shapes",
        sourceUrl: hb(35),
      },
      {
        id: "ne_s6_02",
        topic: "impairment",
        question: "What BAC makes it unlawful to operate a commercial motor vehicle in Nebraska?",
        choices: [".02%", ".04%", ".06%", ".08%"],
        correctIndex: 1,
        explanation:
          "Point-oh-four in a commercial vehicle - half the general limit and double the under-21 limit.",
        context:
          "A CDL holder faces one more restriction the manual singles out: no holder of a CDL may enter a traffic diversion program to avoid a conviction for a traffic citation, other than a parking violation.",
        trap: "The three thresholds are easy to shuffle. Lowest is under 21, middle is commercial, highest is everyone.",
        excerptKey: "bac-thresholds",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2A Alcohol, Drugs, and Driving",
        sourceUrl: hb(24),
      },
      {
        id: "ne_s6_03",
        topic: "rules",
        question: "A right turn must be made how?",
        choices: [
          "From whichever lane is clear",
          "From the center of the roadway",
          "As close as practical to the right side of the road or street",
          "From the lane nearest the center line",
        ],
        correctIndex: 2,
        explanation:
          "As close as practical to the right. Swinging wide leaves room for another driver to slip up the inside, which is exactly where a cyclist is likely to be.",
        context:
          "Where double turning lanes are marked, the lane nearest the curb turns into the lane nearest the curb, and the second lane from the curb follows the lane line into the next lane over.",
        trap: "The manual pairs this with the left-turn rule: left from the left lane available, into the left lane available.",
        excerptKey: "right-turn-close",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4E-4 Turning",
        sourceUrl: hb(55),
      },
      {
        id: "ne_s6_04",
        topic: "safety",
        question: "When should you use headlights during the day, according to the manual?",
        choices: [
          "Whenever you are using the windshield wipers, or have difficulty seeing other vehicles",
          "Only in fog",
          "Only on the interstate",
          "Never - daytime headlights confuse other drivers",
        ],
        correctIndex: 0,
        explanation:
          "Wipers on, headlights on. The manual's defensive driving section adds the broader rule: use headlights any time you have difficulty seeing other vehicles.",
        context:
          "Low beams are the right choice in rain and fog, because high beams bounce off the water in the air and back at you. Driving on parking lights alone is unlawful at any hour.",
        trap: "Automatic headlights often do not switch on in daytime rain, because the light sensor sees plenty of light. The rule is about the wipers, not the sensor.",
        excerptKey: "headlights-with-wipers",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5G-1 Defensive Driving",
        sourceUrl: hb(66),
      },
      {
        id: "ne_s6_05",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light and a bicycle is coming toward you through the intersection. Who goes?",
        choices: [
          "You do - a bicycle must yield to a car",
          "The bicycle does, since it is slower",
          "Whoever entered the intersection first",
          "The bicycle - you yield to oncoming bicyclists exactly as you would to oncoming motorists",
        ],
        correctIndex: 3,
        explanation:
          "Yield to the bike. The manual is explicit: when turning left at an intersection, yield to oncoming bicyclists just as you would to oncoming motorists.",
        context:
          "A person riding a bicycle has the same duties and rights as a driver of a motor vehicle under Neb. Rev. Stat. 60-6,314, and at intersections and roundabouts the right-of-way rules apply equally to both.",
        trap: "Bicycles are far easier to misjudge than cars - a rider is closer and faster than they look. This is the same misjudgement that causes left-turn crashes with motorcycles.",
        excerptKey: "bicycle-same-duties",
        sourceLabel: "Nebraska Driver's Manual - Section 6, 6B Bicyclists",
        sourceUrl: hb(69),
      },
      {
        id: "ne_s6_06",
        topic: "speed",
        question: "Nothing is posted on a state highway that is not an expressway, super-two or freeway. What is the maximum?",
        choices: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctIndex: 2,
        explanation:
          "Sixty-five. The state highway system generally is 65; only expressways, super-two highways and freeways within it go to 70.",
        context:
          "The full ladder: 20 business, 25 residential, 50 gravel, 55 paved off the state system, 65 four-lane divided off the state system, 65 state highway system, 70 expressway or super-two or freeway in the state system, 75 rural Interstate.",
        trap: "Nebraska has more 65 mph categories than any other figure, which is what makes the ladder worth learning as a list rather than as facts.",
        excerptKey: "max-speeds-high",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4C-1 Maximum Speed Limits",
        sourceUrl: hb(52),
      },
      {
        id: "ne_s6_07",
        topic: "parking",
        question: "How close to a stop sign may you stand or park a vehicle?",
        choices: [
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
          "No closer than 25 feet",
        ],
        correctIndex: 2,
        explanation:
          "Thirty feet. The same distance applies to a flashing signal, a yield sign or any other traffic control device at the side of the roadway.",
        context:
          "The reason is sightlines: a car parked closer hides the sign from approaching drivers, and hides approaching drivers from the person stopped at it.",
        trap: "Fifteen is the hydrant and twenty is the crosswalk. Thirty is the biggest of the three, and it is the one about signs.",
        excerptKey: "st-park-hydrant",
        sourceLabel: "Nebraska Revised Statute 60-6,166 - Stopping, standing, or parking prohibited",
        sourceUrl: `${NEB}60-6,166`,
      },
      {
        id: "ne_s6_08",
        topic: "signals",
        question: "What does a flashing yellow light mean?",
        choices: [
          "Stop, then proceed when clear",
          "Be alert and proceed with caution",
          "The signal is out of service",
          "Prepare to stop for a red",
        ],
        correctIndex: 1,
        explanation:
          "Caution. Flashing yellow beacons draw attention to a sign or a location needing extra attention, and you proceed through with care.",
        context:
          "Flashing red is the other half of the pair and it is a full stop, yielding to oncoming traffic and pedestrians before you go. At a railroad crossing, a flashing red requires the stop whether or not a train is in sight.",
        trap: "A steady yellow means the light is about to change; a flashing yellow means nothing is about to change. They are different instructions.",
        excerptKey: "flashing-yellow-light",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3A-1 Color and Types",
        sourceUrl: hb(31),
      },
      {
        id: "ne_s6_09",
        topic: "licensing",
        question: "When does a Nebraska Provisional Operator's Permit expire?",
        choices: [
          "One year after issuance",
          "On the holder's seventeenth birthday",
          "On the holder's twenty-first birthday",
          "On the holder's eighteenth birthday",
        ],
        correctIndex: 3,
        explanation:
          "The eighteenth birthday. A POP is issued to someone at least 16 and under 18, and it runs out on that date whatever else has happened.",
        context:
          "The route to a full Class O license is a POP held at least 12 months without accumulating three or more points, at which point the written and drive tests are waived and the license can be obtained online.",
        trap: "The POP is a permit, not a license, which trips up insurance conversations as often as it trips up test questions.",
        excerptKey: "st-pop-expiry",
        sourceLabel: "Nebraska Revised Statute 60-4,120.01 - Provisional operator's permit",
        sourceUrl: `${NEB}60-4,120.01`,
      },
      {
        id: "ne_s6_10",
        topic: "sharing",
        question:
          "You are meeting a school bus that has just switched on its amber warning lights on an undivided road. What do you do?",
        choices: [
          "Continue at your normal speed - the amber lights apply only to traffic behind the bus",
          "Stop immediately",
          "Slow to 25 mph and prepare to stop",
          "Change lanes and pass",
        ],
        correctIndex: 2,
        explanation:
          "The 25 mph rule applies to traffic meeting the bus as well as traffic overtaking it. The statute uses the phrase upon meeting or overtaking, from the front or rear.",
        context:
          "When the door opens the red lights and stop arm come on and you must stop and stay stopped until the arm retracts, the red lights go off and the bus moves. The only exceptions are the opposite direction on a divided highway, and traffic directed to proceed by a posted sign.",
        trap: "Amber is not a courtesy warning to the driver behind. It is a legal instruction to both directions.",
        excerptKey: "st-school-bus-stop",
        sourceLabel: "Nebraska Revised Statute 60-6,175 - School bus; safety requirements",
        sourceUrl: `${NEB}60-6,175`,
      },
      {
        id: "ne_s6_11",
        topic: "rules",
        question: "What do broken white lines on a roadway mean?",
        choices: [
          "Passing is prohibited",
          "Traffic ahead is two-way",
          "The lane is reserved for turns",
          "They separate lanes going the same direction and may be crossed with care",
        ],
        correctIndex: 3,
        explanation:
          "White separates same-direction traffic, and broken white may be crossed with care. Solid white marks turn lanes and discourages lane changes near intersections.",
        context:
          "Yellow lines separate opposing traffic instead: broken yellow means passing is permitted when the way is clear, a solid yellow on your side means it is not, and double solid yellow means neither direction may pass.",
        trap: "The color tells you about direction of travel; the pattern tells you about permission. Both halves matter.",
        excerptKey: "solid-white-turn-lanes",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3C-3 White Lane Line Markings",
        sourceUrl: hb(45),
      },
      {
        id: "ne_s6_12",
        topic: "emergencies",
        question:
          "You are approaching a stopped tow truck with amber lights flashing on an ordinary two-lane city street. What does the law require?",
        choices: [
          "Nothing - the Move Over law applies only on the interstate",
          "Stop until it moves",
          "Reduce speed below the posted limit, move over a lane if possible, and be prepared to stop",
          "Sound the horn as you pass",
        ],
        correctIndex: 2,
        explanation:
          "Neb. Rev. Stat. 60-6,378.01 covers roads other than controlled-access highways, and the duty is to slow below the posted limit, move over a lane if possible, and be ready to stop.",
        context:
          "The covered vehicles are broad: a stopped authorized emergency vehicle with flashing lights, a towing or vehicle recovery service, a State Patrol motorist assistance vehicle, a public or private utility maintenance vehicle, a highway maintenance vehicle, or a solid waste or recycling collection vehicle.",
        trap: "The Driver's Manual describes only the controlled-access version, so this rule is invisible to anyone who reads the book alone.",
        excerptKey: "st-move-over-other-roads",
        sourceLabel: "Nebraska Revised Statute 60-6,378.01 - Duties of drivers approaching stopped vehicles",
        sourceUrl: `${NEB}60-6,378.01`,
        commonlyMissed: true,
      },
      {
        id: "ne_s6_13",
        topic: "safety",
        question: "What does the manual say to do when a vehicle is passing you?",
        choices: [
          "Slow down sharply to shorten the pass",
          "Move onto the shoulder to give room",
          "Speed up to discourage the pass",
          "Stay in your lane and maintain speed, unless there is an emergency",
        ],
        correctIndex: 3,
        explanation:
          "Hold your lane and hold your speed. The passing driver has planned the maneuver around your current speed, and changing it is what turns a pass into a crash.",
        context:
          "The one exception is an emergency, where the manual says to speed up, slow down or leave the road to prevent a collision. That is a last resort, not the default.",
        trap: "Speeding up while somebody is beside you in the oncoming lane is one of the most dangerous things a driver can do on a two-lane road.",
        excerptKey: "being-passed",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4D-3 When Being Passed",
        sourceUrl: hb(54),
      },
      {
        id: "ne_s6_14",
        topic: "signs",
        question: "What does a Keep Right sign warn you about?",
        choices: [
          "Slower traffic must use the right lane",
          "The right lane is ending",
          "A merge is ahead from the right",
          "A traffic island, median or obstruction is ahead",
        ],
        correctIndex: 3,
        explanation:
          "Something solid is ahead in the roadway - an island, a median, an obstruction - and you go past it on the right.",
        context:
          "It is a different sign from Slower Traffic Keep Right, which is used on multi-lane roads where drivers tend to sit in the left lane below the speed of traffic.",
        trap: "The two signs sound almost identical. One is about an object in the road; the other is about lane discipline.",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-3 Regulatory Signs",
        sourceUrl: hb(37),
      },
      {
        id: "ne_s6_15",
        topic: "impairment",
        question: "What does the manual say actually lowers a person's alcohol level?",
        choices: [
          "Coffee",
          "Food",
          "A cold shower",
          "Time",
        ],
        correctIndex: 3,
        explanation:
          "Only time. The manual says so in one sentence and it is the whole practical point of the alcohol section.",
        context:
          "Nebraska averages over 8,000 arrests a year for driving violations involving alcohol or drugs. The manual's answer is to arrange a designated driver or another way home before you start drinking rather than after.",
        trap: "Weight, sex, food and time spent drinking change how fast alcohol is absorbed. None of them changes how fast it leaves.",
        excerptKey: "only-time",
        sourceLabel: "Nebraska Driver's Manual - Section 2, 2A Alcohol, Drugs, and Driving",
        sourceUrl: hb(25),
      },
      {
        id: "ne_s6_16",
        topic: "rightOfWay",
        question: "Who must you yield to when the roadway ahead is controlled by nothing at all?",
        choices: [
          "The vehicle approaching from your left",
          "The faster vehicle",
          "The vehicle approaching from your right",
          "The vehicle already signaling",
        ],
        correctIndex: 2,
        explanation:
          "Right beats left. The statute puts it as the driver on the left yielding to the driver on the right, which is the same rule from the other side.",
        context:
          "The manual works it through with an example: car A yields to car B if A is going straight, car A turning left yields to both B and C, and car B yields to car C. It closes with the reminder to drive defensively, because other drivers may not stop even when you have the right of way.",
        trap: "Right of way is something you give, not something you take. Nebraska's manual says never to insist on it and risk a collision.",
        excerptKey: "st-row-right",
        sourceLabel: "Nebraska Revised Statute 60-6,146 - Vehicles approaching or entering intersection",
        sourceUrl: `${NEB}60-6,146`,
      },
      {
        id: "ne_s6_17",
        topic: "licensing",
        question: "What is the pass mark on the Nebraska Class O written test?",
        choices: ["70 percent", "75 percent", "80 percent", "90 percent"],
        correctIndex: 2,
        explanation:
          "Eighty percent - twenty of twenty-five. Five wrong answers still passes; the sixth is what fails you.",
        context:
          "The result is valid for six months. A failed test cannot be retaken the same day, and after a sixth failure the applicant must take an approved driver training course or wait 90 days from the last failure.",
        trap: "Seventy percent is the pass mark in several neighboring states and it is the number most often repeated for Nebraska. The DMV's own examiner manual says 80.",
        excerptKey: "dle-80-percent",
        sourceLabel: "Nebraska DMV - Driver Licensing Examiner Policies and Procedures Manual",
        sourceUrl: `${DLE}#page=32`,
        commonlyMissed: true,
      },
      {
        id: "ne_s6_18",
        topic: "rules",
        question: "Where does the manual say you should be when preparing to turn?",
        choices: [
          "In the proper lane well in advance of the turn",
          "In any lane, as long as you signal 100 feet ahead",
          "In the center lane until the last moment",
          "In the lane with the shortest queue",
        ],
        correctIndex: 0,
        explanation:
          "Well in advance. Getting into position early is what lets everyone behind you plan around your turn instead of reacting to it.",
        context:
          "The full sequence: plan ahead, be in the proper lane in advance, signal the direction, slow and check for people and vehicles in your turning path and behind, turn into the proper lane, and adjust to the flow of traffic.",
        trap: "Signaling late from the wrong lane satisfies the hundred-foot rule and still causes the crash. Lane position and signal are two separate requirements.",
        excerptKey: "lane-change-steps",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4E-4 Turning",
        sourceUrl: hb(55),
      },
      {
        id: "ne_s6_19",
        topic: "parking",
        question:
          "Where does the manual tell you to stop when a stop line is painted at an intersection?",
        choices: [
          "Level with the stop sign",
          "At the near edge of the intersecting roadway",
          "At the line",
          "Wherever you have the best view",
        ],
        correctIndex: 2,
        explanation:
          "At the line. The manual says drivers must stop at the line where one is present, not at the stop sign or the traffic control signal.",
        context:
          "Where no line and no crosswalk exist, the regulatory-sign rule takes over: stop at the safest point nearest the intersecting roadway that gives you a clear view of approaching traffic.",
        trap: "Stopping at the sign puts you short of the view; stopping at the intersection puts you across the crosswalk. The line is placed to solve both.",
        excerptKey: "reg-stop-sign",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-3 Regulatory Signs",
        sourceUrl: hb(36),
      },
      {
        id: "ne_s6_20",
        topic: "signals",
        question: "What does a green arrow mean at an intersection?",
        choices: [
          "Proceed in the direction of the arrow when the roadway is clear, from the proper lane",
          "Proceed in any direction",
          "Yield to all traffic before turning",
          "Prepare to stop",
        ],
        correctIndex: 0,
        explanation:
          "It is the protected movement: from the proper lane, proceed in the direction of the arrow when the roadway is clear.",
        context:
          "A flashing yellow arrow is the permissive version of the same movement - you may go, but you yield to pedestrians in the adjacent crosswalk and to other traffic. A steady red arrow forbids the movement entirely.",
        trap: "Protected does not mean empty. A pedestrian who started on a previous phase may still be in the crosswalk.",
        excerptKey: "green-arrow",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3A-1 Color and Types",
        sourceUrl: hb(32),
      },
      {
        id: "ne_s6_21",
        topic: "safety",
        question: "In rain, what does the manual tell you to do besides slowing down?",
        choices: [
          "Switch on high beams for visibility",
          "Turn on hazard lights",
          "Stay in the left lane where water drains",
          "Increase following distance and use low beam headlights",
        ],
        correctIndex: 3,
        explanation:
          "More space and low beams. The manual also notes it may be necessary to disengage cruise control, which can accelerate into standing water.",
        context:
          "Hydroplaning happens when the tires ride up on a film of water instead of the road surface, and the only thing that prevents it is slowing down.",
        trap: "High beams in rain reflect off the water in the air and reduce what you can see, exactly as they do in fog.",
        excerptKey: "rain-slow-down",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5C-1 Rain",
        sourceUrl: hb(62),
      },
      {
        id: "ne_s6_22",
        topic: "sharing",
        question: "How much following distance does the manual ask for behind a motorcycle?",
        choices: [
          "Two seconds",
          "Three or four seconds",
          "Five seconds",
          "The same as behind a car",
        ],
        correctIndex: 1,
        explanation:
          "Three or four seconds, so the rider has room to maneuver or stop in an emergency. In dry conditions a motorcycle can actually stop more quickly than a car, which is the reason for the extra second.",
        context:
          "A motorcyclist may change speed or lane position suddenly for a pothole, gravel, a pavement seam or a railroad crossing - road conditions that are a minor annoyance in a car and a major hazard on two wheels.",
        trap: "Assuming a bike will take longer to stop than your car is exactly backwards, and it is the assumption behind rear-ending one.",
        excerptKey: "motorcycle-following",
        sourceLabel: "Nebraska Driver's Manual - Section 6, 6A-1 Seeing and Understanding Motorcycles",
        sourceUrl: hb(68),
      },
      {
        id: "ne_s6_23",
        topic: "speed",
        question: "What is the maximum unposted speed on a Nebraska expressway that is part of the state highway system?",
        choices: ["60 mph", "65 mph", "70 mph", "75 mph"],
        correctIndex: 2,
        explanation:
          "Seventy. Expressways, super-two highways and freeways in the state highway system share that figure; only rural Interstate goes to 75.",
        context:
          "The statute splits what the manual runs together, giving 70 mph separately to an expressway or super-two highway and to a freeway in the state highway system that is not part of the Interstate system.",
        trap: "An expressway feels like an interstate and is 5 mph slower.",
        excerptKey: "st-speed-expressway",
        sourceLabel: "Nebraska Revised Statute 60-6,186 - Speed; maximum limits; signs",
        sourceUrl: `${NEB}60-6,186`,
      },
      {
        id: "ne_s6_24",
        topic: "emergencies",
        question:
          "You are the first to reach a crash. After stopping, what does the manual tell you to do next?",
        choices: [
          "Photograph the scene",
          "Move the vehicles off the road immediately",
          "Wait in your car until police arrive",
          "Assist the injured if aid is necessary or requested, and notify emergency authorities",
        ],
        correctIndex: 3,
        explanation:
          "People first, then the call. The manual's order is stop, assist the injured if aid is needed or asked for, and notify emergency authorities.",
        context:
          "After that: use flares, reflectors or flashlights to warn traffic from all directions, exchange details, take witness names and addresses, and stay until released by proper authorities. Failing to render aid in a crash you were involved in is a six-point offense.",
        trap: "Quick clearance applies to minor crashes with no injuries. Where someone is hurt, moving cars is not the first job.",
        excerptKey: "crash-stop-at-scene",
        sourceLabel: "Nebraska Driver's Manual - Section 7, 7A General Information",
        sourceUrl: hb(73),
      },
      {
        id: "ne_s6_25",
        topic: "signs",
        question: "What does an Advisory Speed Plaque under a warning sign give you?",
        choices: [
          "The legal speed limit for that stretch",
          "The minimum speed",
          "The speed at which the road was designed",
          "The safe speed for the condition the sign is warning about",
        ],
        correctIndex: 3,
        explanation:
          "It is the safe speed for that specific condition - the curve, the exit ramp, the hazard. It supplements the diamond sign above it.",
        context:
          "It is not the posted limit and it does not replace it. The basic speed rule still applies on top of both: no faster than is reasonable and prudent for the conditions actually present.",
        trap: "Because the plaque is advisory, drivers treat it as optional. Exceeding it into a curve is exactly the case the basic rule is written for.",
        excerptKey: "warn-advisory-plaque",
        sourceLabel: "Nebraska Driver's Manual - Section 3, 3B-4 Warning Signs",
        sourceUrl: hb(40),
      },
      {
        id: "ne_s6_26",
        topic: "rules",
        question: "What must you do before entering a roadway from a private driveway?",
        choices: [
          "Yield the right of way to all vehicles approaching on the roadway",
          "Nothing, if there is no sign",
          "Sound your horn",
          "Reverse in so you can drive out forwards",
        ],
        correctIndex: 0,
        explanation:
          "You yield to everything on the roadway. The manual adds the sidewalk half: stop before driving onto the sidewalk area, then proceed slowly, yielding to pedestrians as well.",
        context:
          "Backing into a driveway so you can leave forwards is good practice rather than law, and the manual does recommend planning ahead for it - but it does not change who yields.",
        trap: "A driveway is not an intersection, so no arrival rule and no right-hand rule helps you here.",
        excerptKey: "leaving-driveway",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4B-8 Right-of-Way",
        sourceUrl: hb(51),
      },
      {
        id: "ne_s6_27",
        topic: "licensing",
        question: "When does a Nebraska license issued to someone under 21 expire?",
        choices: [
          "One year after it is issued",
          "On the holder's eighteenth birthday",
          "On the holder's twenty-first birthday",
          "Five years after it is issued",
        ],
        correctIndex: 2,
        explanation:
          "On the twenty-first birthday, whatever date it was issued. Only at 21 does Nebraska switch to the ordinary five-year term running to the holder's birthday in the fifth year.",
        context:
          "Renewal may be applied for 60 days before that birthday, but the new license is not valid until 30 days before it. Drivers 21 and over may renew 90 days ahead of their birthday.",
        trap: "One year is the Learner's Permit term and the eighteenth birthday is when a Provisional Operator's Permit runs out. The license itself runs to 21.",
        excerptKey: "under-21-expiry",
        sourceLabel: "Nebraska Driver's Manual - Section 1, 1L Renewal Information",
        sourceUrl: hb(15),
      },
      {
        id: "ne_s6_28",
        topic: "safety",
        question: "What does the manual say a driver should do about vehicle controls before driving?",
        choices: [
          "Adjust them at the first red light",
          "Adjust climate controls, mirrors, radio and seat before you begin to drive",
          "Ask a passenger to do everything",
          "Leave them where the last driver had them",
        ],
        correctIndex: 1,
        explanation:
          "Before you move. The manual asks you to set the climate controls, mirrors, radio and seat, and to check email, voicemail and devices, all before starting out.",
        context:
          "Its fallback advice is practical: take advantage of normal stops to adjust things, and ask passengers to handle the radio, climate control and navigation while you drive.",
        trap: "Programming a navigation device while driving takes the same attention as dialing a phone, which the manual says raises crash risk about six times.",
        excerptKey: "distraction-three-types",
        sourceLabel: "Nebraska Driver's Manual - Section 5, 5E-1 Distracted Driving",
        sourceUrl: hb(64),
      },
      {
        id: "ne_s6_29",
        topic: "sharing",
        question: "What does the manual tell drivers to do before opening a car door on a street?",
        choices: [
          "Look for bicycles",
          "Nothing, if the car is legally parked",
          "Sound the horn",
          "Open it fully in one movement so it is visible",
        ],
        correctIndex: 0,
        explanation:
          "Look for bicycles before opening car doors. A rider hit by an opening door has nowhere to go but into the traffic lane.",
        context:
          "Nebraska law backs it up: no person shall open a vehicle door on the side available to moving traffic unless it is reasonably safe to do so. The three-foot passing rule protects a rider going past you; the door rule protects them from you standing still.",
        trap: "Being legally parked is irrelevant. The offense is opening the door, not where the car is.",
        excerptKey: "bicycle-no-horn",
        sourceLabel: "Nebraska Driver's Manual - Section 6, 6B Bicyclists",
        sourceUrl: hb(69),
      },
      {
        id: "ne_s6_30",
        topic: "rightOfWay",
        question:
          "You are the second car at a four-way stop and the driver who stopped first is hesitating. What does the manual advise?",
        choices: [
          "Take the right of way, since they gave it up",
          "Sound the horn",
          "Reverse and let the traffic behind go",
          "Never insist on the right of way and risk a collision",
        ],
        correctIndex: 3,
        explanation:
          "The manual's own words: never insist on the right of way and risk a collision. Every driver at a four-way stop has a duty to stop and then a duty to use ordinary care.",
        context:
          "The ordering rule is that the driver who stops first should be permitted to go first, and if in doubt, yield to the driver on your right. That is guidance about who ought to go, not a license to move when someone else is already moving.",
        trap: "Being right about the order is no protection in a collision, which is the point of the sentence.",
        excerptKey: "four-way-stop-tiebreak",
        sourceLabel: "Nebraska Driver's Manual - Section 4, 4B-4 At intersections with four-way stops",
        sourceUrl: hb(49),
      },
    ],
  },
];
