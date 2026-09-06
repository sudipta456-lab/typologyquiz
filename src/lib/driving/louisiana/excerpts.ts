import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Louisiana bank - 394 of them: 315 from the
// Class D & E Driver's Guide, 64 from the Louisiana Revised Statutes, and 15
// from the Office of Motor Vehicles' own licensing handouts.
//
// Sources, and why there are three of them:
//
//  - The Class D & E Driver's Guide, published by the Louisiana Department of
//    Public Safety and Corrections, Office of Motor Vehicles, form DPSMV2052
//    (R03/2021). This is the book the guide itself says the knowledge test is
//    written from: "The test contains multiple choice questions that are taken
//    from the information contained in this manual." It carries most of what is
//    quoted below. The OMV publishes it through its own document portal at
//    public.powerdms.com/LADPSC, which is the link printed on the OMV's Driver
//    Manuals page; the file quoted here is byte-identical to what that link
//    serves. Page anchors are on the PDF's own page numbering, which runs five
//    ahead of the printed page number shown in each section reference.
//  - Louisiana Revised Statutes Title 32 (Motor Vehicles and Traffic
//    Regulation), and one section of Title 14, published by the Louisiana State
//    Legislature at legis.la.gov. The guide is 138 pages written for a teenager
//    and it leaves out numbers the test still expects. It never prints the
//    55 mph statutory default or the 65 mph multi-lane figure, never gives the
//    subjects the knowledge test must cover, and never states the minimum
//    liability limits. Those come from the statute.
//  - Three OMV licensing handouts (Class E learner's permit requirements, Class
//    E first-time adult requirements, the Graduated Driver's License Laws sheet
//    and the intermediate-licence sheet). The guide never says how many
//    questions the knowledge test has. The OMV's own handouts do: forty.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here - none was retyped by hand.
// Nothing is paraphrased. The same normalisations the sibling banks use were
// applied to the extracted text and to nothing else: curly quotes, en dashes
// and em dashes fold to ASCII; runs of whitespace, including the line breaks the
// PDF inserts mid-sentence, collapse to single spaces; and the section symbol is
// spelled out. The sources' own slips are preserved as they stand, including the
// guide's "Florescent Pink" for fluorescent, its "highspeed roads", its
// "sibling18 years of age" and its "must of sufficient strength", because a
// quote that has been tidied up is no longer a quote.

const HANDBOOK =
  "Class D & E Driver's Guide (Louisiana Office of Motor Vehicles, DPSMV2052 R03/2021)";
const STATUTES = "Louisiana Revised Statutes Title 32 (Louisiana State Legislature)";
const STATUTES14 = "Louisiana Revised Statutes Title 14 (Louisiana State Legislature)";
const OMV = "Louisiana Office of Motor Vehicles licensing requirements handouts";

export const louisianaExcerpts: HandbookExcerpt[] = [
  {
    key: "abs-not-faster",
    quote:
      "ABS does not stop the car faster. It enables you to stop it " +
      "where you want to by allowing you to concentrate on steering " +
      "the car to safety.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Avoiding Collisions (page 113)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=118",
  },
  {
    key: "abs-pumping",
    quote:
      "If you have an anti-lock braking system (ABS), when the brakes " +
      "are pressed hard, the ABS pumps the brakes up to 30 times/sec. " +
      "According to NHTSA, the ABS works with your regular braking " +
      "system by automatically pumping them.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Avoiding Collisions (page 113)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=118",
  },
  {
    key: "address-change-10-days",
    quote:
      "Louisiana law requires you to correct the address on your " +
      "license within 10 days after a move.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Change of Address (page 10)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=15",
  },
  {
    key: "age-requirement",
    quote:
      "Class E - Minimum fifteen (15) years of age for a learner's " +
      "permit; must complete all stages of the Graduated Licensing " +
      "Program.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Age Requirement (R.S. 32:408) (page 4)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=9",
  },
  {
    key: "aggressive-driver-persists",
    quote:
      "Do not stop and try to solve it on the side of the road. Drive " +
      "to a police station or a public place where witnesses are " +
      "readily available. Most people don't want to cause trouble " +
      "when others can see them. Above all, don't drive home if " +
      "someone is following you.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Aggressive Driving/Road Rage (page 60)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=65",
  },
  {
    key: "aggressive-driving-defined",
    quote:
      "Aggressive driving is a traffic offense or combination of " +
      "offenses such as following too closely, speeding, unsafe lane " +
      "changes, failure to signal intent to change lanes and other " +
      "forms of negligent or inconsiderate driving.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Aggressive Driving/Road Rage (page 59)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=64",
  },
  {
    key: "airbag-hand-position",
    quote:
      "The recommendation for the 10 and 2 hand positions went out " +
      "when air bags came in. The reason is that the air bag, when it " +
      "deploys, comes out at speeds of 150 to 200 miles per hour.",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Air Bags (page 41)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=46",
  },
  {
    key: "airbag-supplementary",
    quote:
      "Remember, air bags are a \"Supplementary Restraint System\". " +
      "Your safety belt is your primary restraint and, for you to get " +
      "the best protection with your air bags, you need to use your " +
      "safety belt properly.",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Air Bags (page 42)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=47",
  },
  {
    key: "airbag-ten-inches",
    quote:
      "Sit at least 10 inches away from the steering wheel equipped " +
      "with an air bag - otherwise the bag can explode into you, " +
      "causing serious harm.",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Air Bags (page 41)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=46",
  },
  {
    key: "alcohol-depressant",
    quote:
      "Alcohol is a depressant, not a stimulant. It has anesthetic " +
      "effects on the brain which \"goes to sleep.\" o Alcohol slows " +
      "normal reflexes, interferes with judgment, reduces alertness " +
      "and impairs vision.",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Alcohol (page 122)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=127",
  },
  {
    key: "alcohol-nothing-sobers",
    quote:
      "Once the alcohol enters your blood, there is nothing you can " +
      "do to lessen the effect. Black coffee, exercise or a cold " +
      "shower will not sober you up.",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Alcohol (page 122)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=127",
  },
  {
    key: "alcohol-reaches-brain",
    quote:
      "When alcohol enters your stomach, it goes into your " +
      "bloodstream and to all parts of your body. It reaches your " +
      "brain in about 20 minutes.",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Alcohol (page 122)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=127",
  },
  {
    key: "animal-drawn-vehicles",
    quote:
      "Animal drawn vehicles - In some rural areas, you may be " +
      "sharing the road with animal drawn vehicles. They have the " +
      "same rights to use the road as a motor vehicle and must follow " +
      "the same rules of the road.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - Slow Moving Vehicles (page 105)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=110",
  },
  {
    key: "bac-limits",
    quote:
      "In Louisiana the legal limit of blood alcohol concentration " +
      "is:  .04 if you are operating a commercial motor vehicle  " +
      ".08 if you are 21 years of age or older  .02 if you are 20 " +
      "years of age and younger",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Blood Alcohol Concentration (page 123)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=128",
  },
  {
    key: "bac-one-hour",
    quote:
      "It takes about an hour for the body to get rid of one normal " +
      "drink from the circulatory system. Therefore, if someone has " +
      "had four normal drinks, they should wait four hours or more " +
      "before they drive.",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Blood Alcohol Concentration (page 123)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=128",
  },
  {
    key: "bac-processing-rate",
    quote:
      "The body can process 0.015% of alcohol per hour. If your blood " +
      "alcohol content (BAC) is0.20% at 2:00 a.m., it will be more " +
      "than 0.10% at 8:00 a.m. and still 0.05% at noon the following " +
      "day!",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Blood Alcohol Concentration (page 123)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=128",
  },
  {
    key: "backing-controlled-access",
    quote:
      "Backing up is not permitted on the shoulder or roadway of any " +
      "controlled-access highway. It is also prohibited at any other " +
      "place unless it can be done safely without interfering with " +
      "traffic.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Other Laws You Should Know (page 96)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=101",
  },
  {
    key: "backing-turn-head",
    quote:
      "When you back up, turn your head and look back. Don't just " +
      "look into the rear view mirror.",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Starting and Stopping (page 46)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=51",
  },
  {
    key: "bicycle-door-fault",
    quote:
      "When opening your car door into traffic, look first for " +
      "bicyclists. This collision is the driver's fault.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Sharing the Road with Bicycles (page 80)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=85",
  },
  {
    key: "bicycle-helmet-under-12",
    quote:
      "With regard to children under the age of twelve, Louisiana law " +
      "specifically states no parent, guardian, or person with legal " +
      "responsibility for the safety and welfare of a child shall " +
      "allow a child under the age of twelve to operate or ride as a " +
      "passenger on a bicycle without wearing an approved helmet of " +
      "good fit fastened securely upon the head with the straps of " +
      "the helmet.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Bicycling Safety (page 81)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=86",
  },
  {
    key: "bicycle-left-turn-wait",
    quote:
      "Drivers who are turning left must wait until oncoming " +
      "bicyclists pass. Collisions occur when turning drivers do not " +
      "notice the bicyclists in the flow of traffic or misjudge their " +
      "speed. Do not swing in front of a bicyclist to make a right " +
      "turn.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Sharing the Road with Bicycles (page 80)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=85",
  },
  {
    key: "bicycle-lights-at-night",
    quote:
      "When riding at night, bicycles must have a white front light " +
      "and a red rear light or reflector visible from the rear.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Bicycling Safety (page 81)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=86",
  },
  {
    key: "bicycle-one-hand",
    quote:
      "The person controlling the bicycle must have at least one hand " +
      "on the handlebars at all times.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Other Laws You Should Know (page 97)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=102",
  },
  {
    key: "bicycle-three-feet",
    quote:
      "A three-foot distance must be present between the passing " +
      "automobile and slower traveling bicyclists. (R.S. 32:76.1)",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Sharing the Road with Bicycles (page 80)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=85",
  },
  {
    key: "bicycle-two-abreast",
    quote:
      "All bicyclists must ride as near to the right side of the " +
      "roadway as safely possible while exercising caution when " +
      "passing stationary vehicles or vehicles traveling in the same " +
      "direction. Bicyclists must not ride more than two abreast " +
      "except on roadways set aside for exclusive bicycle use.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Other Laws You Should Know (page 97)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=102",
  },
  {
    key: "bicycles-same-rights",
    quote:
      "Bicycles have the same rights to use public roads as " +
      "automobiles and must follow the same traffic laws as other " +
      "vehicles.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Sharing the Road with Bicycles (page 80)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=85",
  },
  {
    key: "blind-five-feet",
    quote:
      "Don't stop your car more than five feet from the crosswalk. " +
      "The pedestrian uses the sound of your engine as a guide, so " +
      "drive up to the crosswalk to allow the person to hear you.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Visually Impaired Pedestrians (page 77)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=82",
  },
  {
    key: "blind-spots-defined",
    quote:
      "Check your \"blind spots\" by turning your head and looking over " +
      "your shoulder in the direction you plan to move. Blind spots " +
      "are areas around your vehicle that you cannot see with your " +
      "mirrors. Be sure no one is near the rear corners of your " +
      "vehicle.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - When changing lanes (page 63)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=68",
  },
  {
    key: "brakes-fail",
    quote:
      "Do not put your parking brake on suddenly. This could cause " +
      "you to lose control of your vehicle!",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Brakes fail (page 117)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=122",
  },
  {
    key: "braking-distance-50",
    quote:
      "Braking distance is how far your vehicle will travel, in ideal " +
      "conditions, while you are braking. At 50 mph on dry pavement " +
      "with good brakes, it can take about 158 feet.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Stopping Distances (page 64)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=69",
  },
  {
    key: "breakdown-flares",
    quote:
      "If it is dark, turn on the interior dome light, or, if you " +
      "have flares, put them at least 100 feet behind your car.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Breakdowns (page 118)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=123",
  },
  {
    key: "carbon-monoxide",
    quote:
      "Because carbon monoxide does not have an odor, you can be " +
      "affected without knowing it. It can make you sleepy. Early " +
      "symptoms include: yawning, dizziness and upset stomach.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Carbon Monoxide Poisoning (page 119)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=124",
  },
  {
    key: "cell-phone-law",
    quote:
      "Louisiana law prohibits: Anyone using any type of wireless " +
      "communication device while operating a motor vehicle, unless " +
      "they are hands free Anyone to write, send, or read a " +
      "text-based communication, regardless of age",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Cellular Phones (page 78)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=83",
  },
  {
    key: "channelizing-stripes",
    quote:
      "The diagonal stripes on the barricade or vertical panel guide " +
      "the driver toward the direction in which traffic should pass. " +
      "Stripes sloping downward to the left mean the driver should " +
      "bear to the left. Conversely, stripes sloping downward to the " +
      "right mean the driver should bear to the right.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Channelizing Devices (page 32)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=37",
  },
  {
    key: "child-more-protective",
    quote:
      "A child that falls into more than one category for age or " +
      "weight must choose the more protective category.",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Young Children (page 41)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=46",
  },
  {
    key: "child-never-on-lap",
    quote:
      "NEVER HOLD A CHILD ON YOUR LAP OR BUCKLE YOURSELF AND A CHILD " +
      "INTO A SINGLE SAFETY BELT. YOU ARE NOT STRONG ENOUGH TO HOLD " +
      "ONTO EVEN A SMALL CHILD IN CRASHES OR SUDDEN STOPS. NEVER " +
      "ALLOW A CHILD TO RIDE STANDING ON A SEAT.",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Young Children (page 41)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=46",
  },
  {
    key: "child-restraint-law",
    quote:
      "Louisiana Child Passenger Restraint law, R.S. 32:295, requires " +
      "that all children must be properly restrained and secured in " +
      "an age- or size-appropriate passenger restraint system which " +
      "meets the applicable federal motor vehicle safety standards in " +
      "effect.",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Young Children (page 40)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=45",
  },
  {
    key: "child-restraint-stages",
    quote:
      "Birth to at least 2 years - rear facing, federally approved " +
      "car seat  2-4 years - forward facing, federally approved car " +
      "seat  4-9 years - booster seat with restraints  9 years- " +
      "ride restrained with a lap shoulder seat belt secured " +
      "correctly on the vehicle seat  Younger than 13 years - ride " +
      "in the rear seat of a vehicle, when available and properly " +
      "restrained",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Young Children (page 40)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=45",
  },
  {
    key: "class-e-scope",
    quote:
      "CLASS \"E\" - Permits the operation of any single motor vehicle " +
      "under 10,001 pounds, recreational vehicles and certain farm " +
      "use vehicles not defined as commercial vehicle.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Classes of License (page 2)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=7",
  },
  {
    key: "coasting",
    quote:
      "You must not let your vehicle coast downhill with the clutch " +
      "disengaged or the gear in neutral.",
    source: HANDBOOK,
    section: "Chapter 10: General Information for Class D \"Chauffeur's\" License - Coasting (page 129)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=134",
  },
  {
    key: "color-amber",
    quote:
      "Amber- Used as background color for warning signs and school " +
      "signs Means: Caution, be alert, prepare to slow down",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signs (page 24)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=29",
  },
  {
    key: "color-blue",
    quote:
      "Blue - Used as background color for traveler services, " +
      "information signs, emergency evacuation route signs, and as " +
      "part of interstate and some state route markers. Light blue is " +
      "used on disability parking signs.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signs (page 24)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=29",
  },
  {
    key: "color-brown",
    quote:
      "Brown - Used as background color for guide and information " +
      "signs related to points of recreational or cultural interest.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signs (page 24)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=29",
  },
  {
    key: "color-fluorescent-pink",
    quote:
      "Florescent Pink - Used as background color for incident " +
      "management signs such as hurricane or a road closure due to a " +
      "crash.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signs (page 24)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=29",
  },
  {
    key: "color-fluorescent-yellow-green",
    quote:
      "Florescent Yellow-Green - used as background color for " +
      "pedestrian, bicycle and school warning signs.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signs (page 24)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=29",
  },
  {
    key: "color-green",
    quote:
      "Green - used as background color for guide and information " +
      "signs, and for legend on permissive regulation and parking " +
      "signs.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signs (page 24)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=29",
  },
  {
    key: "color-orange",
    quote:
      "Orange - Used as background color for temporary traffic " +
      "control signs Means: Construction zone ahead",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signs (page 24)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=29",
  },
  {
    key: "color-red",
    quote:
      "Red - Used for Stop and Yield signs, DO NOT ENTER and WRONG " +
      "WAY signs Means \"Stop\" or \"Do Not\" anytime you see this color",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signs (page 24)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=29",
  },
  {
    key: "corrective-lens-restriction",
    quote:
      "If you need corrective lenses in order to pass the vision " +
      "exam, your license will indicate that you are required to wear " +
      "them while driving. Your license will display an \"01\" for this " +
      "restriction.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Driver's License Tests, Vision Test (page 8)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=13",
  },
  {
    key: "crash-duties",
    quote:
      "Stop your vehicle immediately if it is clear and safe. Do not " +
      "leave the scene of the crash without identifying yourself.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Traffic Crashes (page 120)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=125",
  },
  {
    key: "crash-exchange-info",
    quote:
      "Drivers must give their name; address and vehicle license " +
      "number and if requested, display their driver's license to any " +
      "person involved in the collision.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Traffic Crashes (page 120)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=125",
  },
  {
    key: "crash-unattended-vehicle",
    quote:
      "If you damage an unattended vehicle or property, you must " +
      "notify the police and attempt to locate the owner. Leave your " +
      "name, address and telephone number on a note where the owner " +
      "will be sure to see it.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Traffic Crashes (page 120)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=125",
  },
  {
    key: "crossbuck-is-yield",
    quote:
      "The yellow sign is an AWS-Advance Warning sign. The white " +
      "cross buck is a regulatory sign has the same meaning as a " +
      "yield sign.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signs (page 23)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=28",
  },
  {
    key: "crossbuck-yield-to-train",
    quote:
      "This sign is required at all public railroad crossings and " +
      "means you must yield the right of way to a train.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Regulatory Signs, Railroad Cross buck (page 29)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=34",
  },
  {
    key: "crosswalk-right-of-way",
    quote:
      "When pedestrians are in these crosswalks, they have the right " +
      "of way over motor vehicles. You must stop for pedestrians in " +
      "crosswalks.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Lane Markings, Crosswalk lines (page 36)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=41",
  },
  {
    key: "deceleration-lane",
    quote:
      "Never slow down on the interstate itself. Wait until you are " +
      "fully in the deceleration lane, and then reduce your speed to " +
      "the posted ramp speed.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - Exiting (page 102)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=107",
  },
  {
    key: "deer-do-not-swerve",
    quote:
      "Do not swerve to avoid the animal; your risk of personal " +
      "injury may be greater if you do. Keep your vehicle under " +
      "control and on the roadway when you hit the animal.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - Animals (page 105)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=110",
  },
  {
    key: "dim-500-200",
    quote:
      "You are required by law to use lower headlight beams, not your " +
      "\"bright lights\", when approaching within 500 feet of or " +
      "following within 200 feet of another vehicle.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Night Driving (page 75)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=80",
  },
  {
    key: "dim-500-200-trucks",
    quote:
      "Also, high beam headlights must be dimmed no less than 500 " +
      "feet from oncoming traffic and 200 feet of a vehicle being " +
      "followed.",
    source: HANDBOOK,
    section: "Chapter 10: General Information for Class D \"Chauffeur's\" License - Following Distance (page 129)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=134",
  },
  {
    key: "directional-markings",
    quote:
      "Directional Markings are white arrows or words painted in the " +
      "traffic lane to indicate the direction in which you must go. " +
      "You must move only in the direction indicated by the arrow.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Lane Markings, Directional Markings (page 36)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=41",
  },
  {
    key: "divided-highway-median",
    quote:
      "When a highway is divided into two roadways by a median or " +
      "barrier, you must not drive across the median or barrier " +
      "except when an approved cross-over is provided. You cannot " +
      "cross the painted continuous centerline of any multiple lane " +
      "highways except for the purpose of making a turn.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Driving on Divided Highways (page 87)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=92",
  },
  {
    key: "do-not-block-intersection",
    quote:
      "You must not enter an intersection if traffic conditions do " +
      "not permit you to clear the intersection completely.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Regulatory Signs, Do Not Block Intersection (page 28)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=33",
  },
  {
    key: "do-not-enter",
    quote:
      "A square sign with a white horizontal line inside a red circle " +
      "means you cannot enter. This sign is visible at roadway " +
      "openings that you may not enter such as exit ramps where you " +
      "would be going in the wrong direction, in crossovers on " +
      "divided roadways and at numerous locations on one-way streets.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Regulatory Signs, Do Not Enter (page 29)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=34",
  },
  {
    key: "do-not-pass-sign",
    quote:
      "This sign tells you where you cannot pass another vehicle. " +
      "Passing areas are based on how far you can see ahead. They " +
      "consider unseen hazards such as hills and curves, " +
      "intersections, driveways and other places a vehicle or " +
      "pedestrian may enter the roadway.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Regulatory Signs, Do Not Pass (page 28)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=33",
  },
  {
    key: "dont-pass-stopped-at-crosswalk",
    quote:
      "You should not pass a vehicle stopped at a crosswalk. Use " +
      "caution when approaching a stopped vehicle and be prepared to " +
      "stop for pedestrians who are walking in the marked or unmarked " +
      "crosswalks.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Pedestrian Safety (page 76)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=81",
  },
  {
    key: "dont-walk-signal",
    quote:
      "Flashing \"DON'T WALK\" signals means that pedestrians may not " +
      "start to cross the roadway but those already crossing may " +
      "continue to the nearest sidewalk, traffic island or safety " +
      "zone.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Pedestrian Signals (page 76)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=81",
  },
  {
    key: "drag-racing",
    quote:
      "It is unlawful to participate in any race, speed contest or " +
      "speed exhibition of any public street or road in this state. " +
      "Drag racing is defined as the operation of two or more " +
      "vehicles from a point side by side at accelerating speeds in a " +
      "competitive attempt to outdo each other.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Drag Racing (page 87)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=92",
  },
  {
    key: "driver-ed-before-application",
    quote:
      "The driver education course must be completed before making " +
      "application for the driver's license. Prior to the " +
      "administration of the knowledge or the skill test or any " +
      "behind the wheel instruction, a Temporary Instruction Permit " +
      "(TIP) must be obtained.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Driver Education (page 3)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=8",
  },
  {
    key: "driving-record-five-years",
    quote:
      "The Office of Motor Vehicles keeps a public record of all your " +
      "traffic convictions and collisions for five years. Convictions " +
      "for DWI are maintained for 10 years.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Your Driving Record (page 11)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=16",
  },
  {
    key: "drowsy-limit-midnight",
    quote:
      "Try to limit driving between midnight and 6 a.m.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Drowsy Driving (page 57)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=62",
  },
  {
    key: "drugs-same-penalty",
    quote:
      "Louisiana law provides the same penalty for driving under the " +
      "influence of drugs as it does for alcohol. This includes " +
      "over-the-counter (OTC) and prescribed medication.",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Drugs (page 125)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=130",
  },
  {
    key: "dwi-first-conviction",
    quote:
      "1st DWI conviction - MAXIMUM Penalties A criminal record Six " +
      "months in jail $1,025 fine plus court costs Loss of driver's " +
      "license for 1 year (365 days)",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Penalty for Driving While Intoxicated (DWI) (page 124)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=129",
  },
  {
    key: "dwi-third-felony",
    quote:
      "3rd DWI conviction - MAXIMUM Penalties (R.S. 14.98) A felony " +
      "criminal record 1-5 years in prison with 30 days' mandatory " +
      "jail time $2,100 fine plus court costs Loss of driver's " +
      "license for three years (1095 days)",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Penalty for Driving While Intoxicated (DWI) (page 124)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=129",
  },
  {
    key: "edge-forward-slowly",
    quote:
      "If you are stopped and your view of traffic or a cross street " +
      "is blocked, edge forward slowly until you can see.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Crossing an Intersection (page 62)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=67",
  },
  {
    key: "emergency-turn-away",
    quote:
      "Turning quickly may be your only chance of avoiding a front " +
      "end collision. If a collision looks probable, turn away from " +
      "it even if it means leaving the road. Drive (rather than skid) " +
      "off the road. Choose to hit something that will give way (such " +
      "as brush or shrubs) rather than something hard.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Avoiding Collisions (page 113)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=118",
  },
  {
    key: "emergency-vehicle-approach",
    quote:
      "If you are approached by an authorized emergency vehicle " +
      "(police car, ambulance, fire truck, etc.) making use of " +
      "audible or visual signals, you will always yield the " +
      "right-of-way and immediately drive to a position parallel to " +
      "the right-hand edge or curb and remain stopped until that " +
      "vehicle has passed.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Approach of an Authorized Emergency Vehicle (page 121)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=126",
  },
  {
    key: "exit-signal-five-seconds",
    quote:
      "Signal your intention for approximately five seconds and make " +
      "sure you are at the proper speed for leaving the traffic lane " +
      "- not too fast so you won't lose control and not too slow so " +
      "the flow of traffic can still move freely.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - Exiting (page 102)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=107",
  },
  {
    key: "fatigue-rest-two-hours",
    quote:
      "A driver should rest every two hours and not drive longer than " +
      "six or eight hours a day.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Driver Fatigue (page 56)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=61",
  },
  {
    key: "finish-turn-proper-lane",
    quote:
      "Slow down before making turns and always finish your turn in " +
      "the proper lane.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Right Turn (page 90)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=95",
  },
  {
    key: "fire-hoses",
    quote:
      "Do not cross any unprotected fire department hoses unless " +
      "consent is given by an official of the fire department.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Other Laws You Should Know (page 97)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=102",
  },
  {
    key: "flag-persons",
    quote:
      "Flag persons wear orange vests, shirts or jackets and use red " +
      "flags or stop/slow paddles to direct the traffic through work " +
      "zone.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Flag Persons (page 33)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=38",
  },
  {
    key: "flooded-roadway",
    quote:
      "Do not drive through flooded areas. If you see a flooded " +
      "roadway ahead, turn around and find another route to get to " +
      "your destination.  Remember, 6 inches of water will reach the " +
      "bottom of most passenger cars, causing loss of control or " +
      "possible stalling and 2 feet of rushing water can carry away " +
      "most vehicles.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Flooded Roadways (page 119)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=124",
  },
  {
    key: "fog-driving",
    quote:
      "When driving in a heavy downpour or in fog, slow down and turn " +
      "on your low beam headlights. If the fog is so dense that it " +
      "impairs your vision, you should not drive at all.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - Weather Changes (page 106)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=111",
  },
  {
    key: "following-emergency-500",
    quote:
      "Following emergency vehicles responding to call closer than " +
      "500 feet is unlawful. You must not follow into and park within " +
      "the block where the emergency vehicle has stopped.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Other Laws You Should Know (page 97)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=102",
  },
  {
    key: "four-second-rule",
    quote:
      "Increase the following rule (above) to four (4) seconds during " +
      "bad weather or when driving on wet pavement.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Following Distances (page 66)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=71",
  },
  {
    key: "four-second-situations",
    quote:
      "Slippery roads - You need more distance to stop your vehicle " +
      "on slippery roads and should leave more space in front of your " +
      "vehicle. If the vehicle ahead suddenly stops, you will need " +
      "the extra distance to stop safely.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Following Distances (page 66)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=71",
  },
  {
    key: "funeral-procession",
    quote:
      "Funeral processions require all operators of motor vehicles to " +
      "yield the right-of-way to the vehicles participating in a " +
      "funeral procession. While participating in a funeral " +
      "procession each driver shall have the headlights of the " +
      "vehicle lighted and the emergency lights flashing.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Other Laws You Should Know (page 97)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=102",
  },
  {
    key: "gas-pedal-sticks",
    quote:
      "If your gas pedal sticks, keep your eyes on the road: 1. Put " +
      "the gear shift in neutral. 2. Try to free the pedal with your " +
      "foot. If possible, have your passenger try to free it if you " +
      "can't. 3. Turn the ignition off. (Use care not to lock the " +
      "steering wheel locking mechanism.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Gas pedal sticks (page 117)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=122",
  },
  {
    key: "gdl-fifty-hours",
    quote:
      "no applicant shall be issued a Class \"E\" intermediate license " +
      "unless a signed statement by the parent or legal guardian is " +
      "provided to the department attesting that the applicant has a " +
      "minimum of fifty (50) hours of behind-the-wheel driving " +
      "experience with a licensed parent, guardian, or adult at least " +
      "twenty-one (21) years of age.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Graduated Licensing Program, Stage 1: Learner's Permit (page 7)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=12",
  },
  {
    key: "gdl-stage1",
    quote:
      "Must be a minimum of fifteen (15) years of age. 2. Must " +
      "complete thirty (30) hours classroom instruction and eight (8) " +
      "hours behind-the-wheel driving instruction. 3. Must pass " +
      "vision exam and knowledge exam with at least 80% accuracy. 4.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Graduated Licensing Program, Stage 1: Learner's Permit (page 7)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=12",
  },
  {
    key: "gdl-stage2-curfew",
    quote:
      "Is prohibited from driving between the hours of 11:00 p.m. and " +
      "5:00 a.m., unless accompanied by a licensed adult at least " +
      "twenty-one (21) years of age or sibling at least eighteen (18) " +
      "years of age. Additionally, between the hours of 6:00 p.m.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Graduated Licensing Program, Stage 2: Intermediate License (page 7)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=12",
  },
  {
    key: "gdl-stage3",
    quote:
      "STAGE 3: FULL LICENSE 1. Must successfully complete STAGES 1 " +
      "AND 2 OR 2. Must be at least seventeen (17) years of age prior " +
      "to application for first license.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Graduated Licensing Program, Stage 3: Full License (page 7)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=12",
  },
  {
    key: "general-speed-law",
    quote:
      "The General Speed Law is that you must not drive at a speed " +
      "greater than is reasonable. You must drive at a safe, " +
      "appropriate speed depending on the area in which you are " +
      "driving, the road and traffic conditions, light and weather " +
      "conditions.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Speed (page 87)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=92",
  },
  {
    key: "gravel-roads",
    quote:
      "When driving on gravel or dirt, you must reduce your speed and " +
      "increase your following distance, since it will take much " +
      "longer to stop due to loss of traction.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - Rural Roads (page 103)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=108",
  },
  {
    key: "hand-over-hand-steering",
    quote:
      "Hand-over-hand steering - Use hand-over-hand steering when " +
      "turning the wheel at low speeds, such as at an intersection or " +
      "when parking the vehicle.",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Steering Methods (page 49)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=54",
  },
  {
    key: "hand-signals",
    quote:
      "Arm straight is for a left turn Arm bent up is for a right " +
      "turn Arm bent downward is for slowing or stopping",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Signaling (page 93)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=98",
  },
  {
    key: "hand-to-hand-steering",
    quote:
      "Hand-to-hand steering - Use hand-to-hand steering, commonly " +
      "called push/pull steering, when turning the wheel during " +
      "normal driving activity going forward above 10-15 mph.",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Steering Methods (page 49)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=54",
  },
  {
    key: "headlight-beam-distances",
    quote:
      "Your lower beam headlights will let you see clearly about 150 " +
      "to 200 feet ahead. Driving at a speed that allows you to stop " +
      "within this distance is about 45 mph. Your high beam " +
      "headlights will let you see clearly about 350 to 400 feet " +
      "ahead.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Night Driving (page 75)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=80",
  },
  {
    key: "headlights-500-feet-visibility",
    quote:
      "The law further requires that your headlights be on when " +
      "driving in weather conditions that make it difficult for other " +
      "people to see your vehicle clearly from a distance of 500 " +
      "feet.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Night Driving (page 75)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=80",
  },
  {
    key: "headlights-sunset-to-sunrise",
    quote:
      "Louisiana law requires that your headlights (not just parking " +
      "lights) be on between sunset and sunrise.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Night Driving (page 75)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=80",
  },
  {
    key: "headlights-when-wipers",
    quote:
      "Louisiana law requires you have your headlights on (low beam) " +
      "when your windshield wipers are required.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Other Laws You Should Know (page 97)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=102",
  },
  {
    key: "headlights-with-wipers",
    quote:
      "In addition, headlights are required when moisture in the air " +
      "or precipitation necessitates the use of windshield wipers and " +
      "when weather conditions are unfavorable.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Night Driving (page 75)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=80",
  },
  {
    key: "headphones",
    quote:
      "Wearing headphones (headset, headphone, or listening devise " +
      "other than a hearing aid) in both ears is prohibited. Wearing " +
      "headphones (headset, headphone, or listening device) in one " +
      "ear alone is allowed.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Other Laws You Should Know (page 97)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=102",
  },
  {
    key: "highway-hypnosis",
    quote:
      "It can lead to what is called \"highway hypnosis.\" That is, " +
      "your senses become dulled, your eyes become fixed on the road " +
      "and you are not alert to traffic situations around you.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Driver Fatigue (page 56)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=61",
  },
  {
    key: "hit-and-run",
    quote:
      "If you are involved in or cause a crash, you are required by " +
      "law to stop, identify yourself and render reasonable aid. " +
      "Failure to do so may result in a fine and time in jail.",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Hit and Run Driving (page 126)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=131",
  },
  {
    key: "horseback-riders",
    quote:
      "You must drive at a reasonable speed and at a reasonable " +
      "distance away from the horse. Do not sound your horn or \"rev\" " +
      "your engine loudly when approaching or passing a horse. It " +
      "could scare the horse and cause a collision.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - Slow Moving Vehicles (page 106)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=111",
  },
  {
    key: "house-trailer-riding",
    quote:
      "Riding in a house trailer is not allowed while it is being " +
      "moved upon a highway in this state.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Other Laws You Should Know (page 96)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=101",
  },
  {
    key: "hydroplaning-speeds",
    quote:
      "Partial hydroplaning starts at about 35 miles per hour, and " +
      "increases with speed until (at 55 M.P.H.) the tires may lose " +
      "all contact with the pavement. When this happens, you lose " +
      "traction, and you cannot brake, accelerate or turn.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Hydroplaning (page 74)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=79",
  },
  {
    key: "i49-75",
    quote:
      "On portions of I-49, the speed limit is 75",
    source: HANDBOOK,
    section: "Chapter 10: General Information for Class D \"Chauffeur's\" License - Driving (page 129)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=134",
  },
  {
    key: "ignition-lock-in-motion",
    quote:
      "Never turn your vehicle's ignition to the \"lock\" position " +
      "while it is still in motion. This will cause the steering to " +
      "lock if you try to turn the steering wheel and you will lose " +
      "control of your vehicle.",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Starting and Stopping (page 46)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=51",
  },
  {
    key: "implied-consent",
    quote:
      "Louisiana law states that when you drive a motor vehicle upon " +
      "the highways of this state, you are deemed to have given your " +
      "consent to a test for the purpose of determining the alcoholic " +
      "content of your blood and the presence of any abused or " +
      "illegal controlled dangerous substance. This is known as " +
      "implied consent.",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Administrative Per Se (page 126)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=131",
  },
  {
    key: "inspection-sticker",
    quote:
      "Every automobile, truck, trailer, boat trailer and motorcycle " +
      "operated on the highways of this state must have a current " +
      "motor vehicle inspection sticker.",
    source: HANDBOOK,
    section: "Chapter 11: Motor Vehicle Registration and Title - Motor Vehicle Inspection Sticker (page 137)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=142",
  },
  {
    key: "insurance-three-days",
    quote:
      "If you are stopped by a law enforcement officer and you are " +
      "unable to provide the proof of insurance, the vehicle's " +
      "license plate will be seized and the vehicle may be impounded. " +
      "You will have three (3) calendar days, excluding Saturdays, " +
      "Sundays and legal holidays, to provide the proof at a Motor " +
      "Vehicle office.",
    source: HANDBOOK,
    section: "Chapter 11: Motor Vehicle Registration and Title - Proof of Insurance (page 136)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=141",
  },
  {
    key: "intersection-look-left-right-left",
    quote:
      "Before entering an intersection, look to the front, left and " +
      "right for approaching vehicles and/or crossing pedestrians. If " +
      "stopped, look left, right and left again before entering the " +
      "intersection.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Looking and Scanning Ahead, Intersections (page 62)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=67",
  },
  {
    key: "interstate-70-max",
    quote:
      "Remember that the maximum speed allowed is 70 miles per hour " +
      "unless otherwise posted. You should not drive slower than the " +
      "posted minimum speed on the interstate unless the weather or " +
      "road conditions demand slower speed.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - Entering (page 100)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=105",
  },
  {
    key: "interstate-four-second-cushion",
    quote:
      "Always keep at least a four seconds space cushion between you " +
      "and the vehicle ahead. When the weather is bad or the pavement " +
      "is slick, you should double that time. Rear-end collisions are " +
      "the most frequent type of crashes on the interstates.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - Right-Hand Lane (page 101)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=106",
  },
  {
    key: "interstate-right-lane",
    quote:
      "Stay in the right-hand lane unless overtaking and passing, " +
      "making an exit to the left, or letting another vehicle enter.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - Right-Hand Lane (page 101)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=106",
  },
  {
    key: "interstate-right-of-way",
    quote:
      "Do not stop before merging with interstate traffic unless it " +
      "is absolutely necessary. Interstate traffic has the right of " +
      "way.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - Entering (page 100)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=105",
  },
  {
    key: "keep-right-law",
    quote:
      "Louisiana law states that all vehicles should travel in the " +
      "right hand lane unless, preparing for a left turn, passing " +
      "another vehicle or when right hand lanes are congested. No " +
      "vehicle driven in the left hand lane shall be driven at speeds " +
      "slower than vehicles traveling to its right.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Lane Markings (page 35)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=40",
  },
  {
    key: "knowledge-test-80",
    quote:
      "The test contains multiple choice questions that are taken " +
      "from the information contained in this manual. The exam is " +
      "given on a computer in most offices and you must correctly " +
      "answer 80 percent of these questions to receive a passing " +
      "score.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Driver's License Tests, Knowledge Test (page 8)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=13",
  },
  {
    key: "lane-change-gap",
    quote:
      "Identify a 4 to 5 second gap in traffic, signal and look again " +
      "in the direction of the lane change. Adjust speed and steer " +
      "into lane.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - When changing lanes (page 63)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=68",
  },
  {
    key: "lane-change-intersection",
    quote:
      "Do not change lanes while you are driving through an " +
      "intersection or approaching an intersection as this is " +
      "dangerous and illegal. Wait until you pass through the " +
      "intersection to change lanes.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Delaying or adjusting a lane change (page 88)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=93",
  },
  {
    key: "leaving-vehicle-unattended",
    quote:
      "When parking and leaving a vehicle unattended, stop the motor, " +
      "remove the key, lock the ignition, and set the brake.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Parking (page 70)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=75",
  },
  {
    key: "left-turn-only-lanes",
    quote:
      "At 4-way intersections, some lanes are marked as left turn " +
      "lanes. When such a lane is marked, you may ONLY turn left from " +
      "this lane.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Left Turn - Two Vehicles (page 90)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=95",
  },
  {
    key: "left-turn-wheels-straight",
    quote:
      "Keep your wheels straight while waiting to turn. This will " +
      "prevent you from being pushed into traffic, if you are hit " +
      "from behind.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Left Turn (page 90)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=95",
  },
  {
    key: "left-turn-yield-on-green",
    quote:
      "This sign tells you that a left turn is permitted, but you " +
      "must yield to oncoming traffic.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Regulatory Signs, Left Turn Yield on Green (page 28)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=33",
  },
  {
    key: "licence-expiry-six-years",
    quote:
      "Your driver's license will expire six years from your nearest " +
      "birthday. Licenses may be renewed anytime within 180 days " +
      "before the expiration date.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - License Renewals (page 10)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=15",
  },
  {
    key: "licence-misuse",
    quote:
      "It is illegal to lend your driver's license to another person, " +
      "to alter your driver's license in any manner, to provide false " +
      "information in obtaining your driver's license, to have more " +
      "than one driver's license in your possession, to fail or " +
      "refuse to surrender your driver's license to the department if " +
      "demanded, and to permit any unlawful use of driver's license " +
      "issued.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Other Laws You Should Know (page 97)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=102",
  },
  {
    key: "license-carry-show",
    quote:
      "Always carry your license with you when driving. You are " +
      "required to show your license to any law enforcement officer " +
      "or any officer who may ask to see it.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Who Must Have a Driver's License? (page 1)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=6",
  },
  {
    key: "license-required",
    quote:
      "You must have a Louisiana driver's license if you are a " +
      "resident of Louisiana and want to drive a motor vehicle on " +
      "public streets and highways.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Who Must Have a Driver's License? (page 1)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=6",
  },
  {
    key: "litter-driver-liable",
    quote:
      "As a driver, you are liable for all litter that leaves your " +
      "vehicle or truck bed. Whether you or your passenger litter, " +
      "you are responsible for the actions of everyone in your " +
      "vehicle and can be cited.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Put the Brakes on Litter (page 14)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=19",
  },
  {
    key: "litter-fine",
    quote:
      "According to Louisiana R.S. 30:2531, penalties for simple " +
      "littering range from a first offense of a $150 fine or eight " +
      "hours of community service to a $900 fine or 20 hours of " +
      "community service for a second offense.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Put the Brakes on Litter (page 14)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=19",
  },
  {
    key: "load-red-flag",
    quote:
      "If a load extends four or more feet past the bed or body of " +
      "any vehicle, a red flag 12 inches' square must be attached to " +
      "the extreme rear of the load during daylight hours. The entire " +
      "area of the flag must be visible.",
    source: HANDBOOK,
    section: "Chapter 10: General Information for Class D \"Chauffeur's\" License - Loads (page 128)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=133",
  },
  {
    key: "marijuana-five-six-hours",
    quote:
      "Whereas the effects of a single drink will diminish over an " +
      "hour, it takes five to six hours for the effects of smoking " +
      "one marijuana cigarette to wear off, making the combination of " +
      "marijuana and alcohol especially dangerous.",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Marijuana (page 125)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=130",
  },
  {
    key: "marking-broken-yellow",
    quote:
      "A Single Broken Yellow line is used to mark the centerline " +
      "where there are only two lanes of traffic. You must drive to " +
      "the right of the centerline. When it is safe, you may cross " +
      "this line to turn or pass another vehicle.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Lane Markings, Center Lines (page 34)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=39",
  },
  {
    key: "marking-double-white",
    quote:
      "Double solid white lines separate two lanes of traffic going " +
      "in the same direction. Crossing a double solid line is " +
      "prohibited.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Lane Markings (page 35)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=40",
  },
  {
    key: "marking-double-yellow",
    quote:
      "Double Solid Yellow lines are used to mark the center of the " +
      "roadway when there are four or more lanes of traffic. You may " +
      "not cross these lines to pass. You may cross these lines to " +
      "make a turn.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Lane Markings, Center Lines (page 34)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=39",
  },
  {
    key: "marking-no-passing-line",
    quote:
      "A No Passing Line is a single solid yellow line used on " +
      "two-lane roads to indicate zones where passing is prohibited. " +
      "You may cross this line to make a turn or if the dashed line " +
      "is present on your side of travel.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Lane Markings, Center Lines (page 34)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=39",
  },
  {
    key: "marking-railroad",
    quote:
      "Railroad Crossing markings are white markings painted in the " +
      "traffic lane before railroad crossings. The pavement is marked " +
      "with a large \"X\" and two \"R's\". A solid yellow center line " +
      "extends the entire distance to prevent passing, and a white " +
      "stop line is painted across the traffic lane.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Lane Markings (page 35)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=40",
  },
  {
    key: "marking-red-reflectors",
    quote:
      "Red Raised Pavement Marking or reflectors indicate going " +
      "against the direction of travel. This is a roadway that must " +
      "not be entered.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Lane Markings (page 35)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=40",
  },
  {
    key: "marking-solid-white",
    quote:
      "Single Solid White lines indicate movement from lane to lane " +
      "is hazardous. The wider the line, the greater the hazard. You " +
      "may cross a solid white line only with great care.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Lane Markings (page 35)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=40",
  },
  {
    key: "max-speed-70",
    quote:
      "Maximum speed for any vehicle in Louisiana is 70 mph except: " +
      "When pulling or towing another motor vehicle the speed limit " +
      "is 45 mph. School buses are limited to 35 mph when frequently " +
      "stopping to load or unload children. Where a lower speed limit " +
      "is posted.",
    source: HANDBOOK,
    section: "Chapter 10: General Information for Class D \"Chauffeur's\" License - Driving (page 128)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=133",
  },
  {
    key: "merge-four-second-gap",
    quote:
      "When you merge into traffic, you need a gap of four seconds. " +
      "That will give both you and the car you merge in front of a " +
      "two-second following distance.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - Space to Merge (page 101)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=106",
  },
  {
    key: "minimum-speed-required",
    quote:
      "Some highspeed roads have minimum speed limits and you are " +
      "legally required to travel at least this fast so as not to be " +
      "a hazard to other drivers.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Regulatory Signs, Speed Limit Signs (page 27)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=32",
  },
  {
    key: "mirror-200-feet",
    quote:
      "A rear view mirror must reflect a view of the highway for a " +
      "distance of 200 feet to the rear, regardless of the load of " +
      "the vehicle.",
    source: HANDBOOK,
    section: "Chapter 10: General Information for Class D \"Chauffeur's\" License - Mirrors (page 129)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=134",
  },
  {
    key: "missed-exit",
    quote:
      "If you miss your exit, do not stop; do not back up! It is " +
      "against the law and is one of the most dangerous things you " +
      "can do on an interstate highway.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - Exiting (page 102)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=107",
  },
  {
    key: "motorcycle-appears-farther",
    quote:
      "The small profile of the motorcycle may make it appear farther " +
      "away and traveling slower than it actually is.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Sharing the Road with Motorcycles (page 81)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=86",
  },
  {
    key: "motorcycle-four-seconds",
    quote:
      "When driving behind a motorcycle, allow at least a four " +
      "(4)-second following distance. This is even more important in " +
      "wet driving conditions.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Sharing the Road with Motorcycles (page 82)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=87",
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "Motorcycles are allowed the full width of a lane in which to " +
      "maneuver. Refrain from sharing a lane with a motorcycle.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Sharing the Road with Motorcycles (page 82)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=87",
  },
  {
    key: "motorcycle-intersections",
    quote:
      "Intersections are the most likely place for car/motorcycle " +
      "collisions to occur. This usually is the result of a car " +
      "driver NOT SEEING the motorcycle and turning into the " +
      "motorcycle's path.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Sharing the Road with Motorcycles (page 82)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=87",
  },
  {
    key: "move-it-move-it",
    quote:
      "Louisiana's \"Move It, Move It, Move It - Steer It Clear\" " +
      "campaign, R.S. 32:141(D), is an attempt to make the public " +
      "aware of your responsibility to remove vehicles from the " +
      "roadway to the nearest soft shoulder.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Unattended motor vehicles (page 121)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=126",
  },
  {
    key: "move-over-incident-signs",
    quote:
      "Louisiana \"move over\" law requires you to slow down and change " +
      "lanes when approaching a roadside incident.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Guide Signs, Incident Signs (page 30)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=35",
  },
  {
    key: "move-over-lane-change",
    quote:
      "When driving on an interstate highway or other highway with " +
      "two or more lanes traveling in the same direction, yield the " +
      "right-of-way by making a lane change into a lane not adjacent " +
      "to the parked vehicle, if possible with due regard to safety " +
      "and traffic conditions.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Approach of an Authorized Emergency Vehicle (page 121)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=126",
  },
  {
    key: "new-resident-30-days",
    quote:
      "New residents have 30 days from the time residency is " +
      "established to obtain a Louisiana license.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Who Must Have a Driver's License? (page 1)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=6",
  },
  {
    key: "night-dim-one-block",
    quote:
      "Dim your high beams whenever you come within about a oneblock " +
      "distance of an oncoming vehicle. If a vehicle comes toward you " +
      "with their high beams on and the driver fails to dim their " +
      "lights, look toward the right side of the road to keep from " +
      "being blinded by their headlights.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - At Night (page 107)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=112",
  },
  {
    key: "night-extra-second",
    quote:
      "You need to increase your following distance by adding at " +
      "least one additional second for night driving conditions and " +
      "at least two additional seconds for driving on unfamiliar " +
      "roadways at night.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Night Driving (page 75)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=80",
  },
  {
    key: "night-high-beams",
    quote:
      "Use your high beams whenever there are no oncoming vehicles. " +
      "High beams let you see twice as far as low beams.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - At Night (page 107)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=112",
  },
  {
    key: "night-no-sunglasses",
    quote:
      "Do not wear sunglasses or colored glasses when driving at " +
      "night or on dark days. Colored lenses cause your eyes to " +
      "adjust even more slowly and can reduce your vision.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - At Night (page 107)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=112",
  },
  {
    key: "no-turn-on-red-sign",
    quote:
      "When you see this sign posted, it means that you may not turn " +
      "right during the red light. You must wait for the traffic " +
      "signal to turn green before turning.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Regulatory Signs, No Turn on Red (page 28)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=33",
  },
  {
    key: "no-uturn-hill-curve",
    quote:
      "Do not attempt to turn around while on a hill or in a curve " +
      "where your vehicle cannot be seen by other drivers approaching " +
      "from either direction within 500 feet.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - You May Not Turn Around (page 90)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=95",
  },
  {
    key: "nonresident-90-days",
    quote:
      "Non-residents who possess a valid license issued by another " +
      "state. You are permitted to drive in this state for a period " +
      "of 90 days.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Who Must Have a Driver's License? (page 1)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=6",
  },
  {
    key: "obey-police",
    quote:
      "You must obey all lawful orders and directions of a police " +
      "officer.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Police Officers (page 86)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=91",
  },
  {
    key: "omv-adult-courses",
    quote:
      "30 hours classroom instruction and 8 hours behind-the-wheel " +
      "instruction OR b. 6 hours pre-licensing classroom instruction " +
      "and 8 hours behind-the-wheel instruction",
    source: OMV,
    section: "Class E First Time Driver's License (adults) - Driver Education",
    url: "https://expresslane.dps.louisiana.gov/CDLForms/CLASS%20E%20-%20Adults_upd.pdf",
  },
  {
    key: "omv-adult-vision",
    quote:
      "Vision - You must have 20/40 vision in one or both eyes and " +
      "successfully pass a vision test.",
    source: OMV,
    section: "Class E First Time Driver's License (adults) - Tests",
    url: "https://expresslane.dps.louisiana.gov/CDLForms/CLASS%20E%20-%20Adults_upd.pdf",
  },
  {
    key: "omv-age-17-choice",
    quote:
      "Applicants age 17 are eligible for either a learner's permit " +
      "or a full license. To obtain a full license, a vision and road " +
      "skills test must be successfully completed.",
    source: OMV,
    section: "Class E Learner's Permit Requirements (minors) - Graduated Licensing Program",
    url: "https://expresslane.dps.louisiana.gov/CDLForms/CLASS%20E%20Learner%27s%20Permit%20requirements.pdf",
  },
  {
    key: "omv-driver-ed-minors",
    quote:
      "The driver education course offered for those applicants 15 to " +
      "17 years of age include 30 hours of classroom and 8 hours of " +
      "behind the wheel instruction.",
    source: OMV,
    section: "Class E Learner's Permit Requirements (minors) - Driver Education",
    url: "https://expresslane.dps.louisiana.gov/CDLForms/CLASS%20E%20Learner%27s%20Permit%20requirements.pdf",
  },
  {
    key: "omv-gdl-attest",
    quote:
      "A parent or legal guardian shall attest that the pre-licensing " +
      "requirements have been met by providing a signed statement to " +
      "OMV: No at-fault crashes with learner's permit. No moving " +
      "violations with learner's permit. No seat belt, curfew, drug, " +
      "or alcohol law violations.",
    source: OMV,
    section: "Louisiana Graduated Driver's License Laws - Age 16, Eligible for Intermediate License",
    url: "https://expresslane.la.gov/omv/media/qa0jml1m/louisiana-graduated-dl-program.pdf",
  },
  {
    key: "omv-gdl-classroom-14",
    quote:
      "Students may participate in the classroom instruction if they " +
      "are, at a minimum, in the eighth grade and within 90 days of " +
      "their 15th birthday. Students cannot participate in the " +
      "behind-the-wheel training until the age of 15.",
    source: OMV,
    section: "Louisiana Graduated Driver's License Laws - Age 14, Eligible for classroom instruction only",
    url: "https://expresslane.la.gov/omv/media/qa0jml1m/louisiana-graduated-dl-program.pdf",
  },
  {
    key: "omv-gdl-no-cell",
    quote:
      "Must be accompanied by a licensed parent, guardian, or adult " +
      "at least age 21 years old, or licensed sibling at least age 18 " +
      "years old. No cell phone usage, including hands free.",
    source: OMV,
    section: "Louisiana Graduated Driver's License Laws - Age 15, Eligible for Learner's Permit",
    url: "https://expresslane.la.gov/omv/media/qa0jml1m/louisiana-graduated-dl-program.pdf",
  },
  {
    key: "omv-gdl-under-17-phone",
    quote:
      "Drivers 17 years old and under are prohibited from using cell " +
      "phones for talk, text (read, write, or send), unless for " +
      "emergencies.",
    source: OMV,
    section: "Louisiana Graduated Driver's License Laws - Age 16, Eligible for Intermediate License",
    url: "https://expresslane.la.gov/omv/media/qa0jml1m/louisiana-graduated-dl-program.pdf",
  },
  {
    key: "omv-intermediate-out-of-state",
    quote:
      "An applicant with a previous out-of-state permit or license " +
      "may begin at the intermediate (61) stage if he meets all other " +
      "requirements for licensure in Louisiana.",
    source: OMV,
    section: "Graduated Licensing Program - Stage 2, Intermediate License",
    url: "https://expresslane.dps.louisiana.gov/CDLForms/Graduated%20Licensing%20program.pdf",
  },
  {
    key: "omv-knowledge-40",
    quote:
      "Knowledge - A 40 question test with a minimum score of 80% is " +
      "required.",
    source: OMV,
    section: "Class E Learner's Permit Requirements (minors) - Tests",
    url: "https://expresslane.dps.louisiana.gov/CDLForms/CLASS%20E%20Learner%27s%20Permit%20requirements.pdf",
  },
  {
    key: "omv-permit-180-days",
    quote:
      "Applicants age 15 must maintain the learner's permit for a " +
      "minimum of 180 days AND until they reach the age of 16 when " +
      "they may apply for an intermediate license.",
    source: OMV,
    section: "Class E Learner's Permit Requirements (minors) - Graduated Licensing Program",
    url: "https://expresslane.dps.louisiana.gov/CDLForms/CLASS%20E%20Learner%27s%20Permit%20requirements.pdf",
  },
  {
    key: "omv-road-test-vehicle",
    quote:
      "The vehicle must be currently licensed, inspected and insured. " +
      "Proof of insurance and the vehicle registration should be " +
      "presented upon application for the test.",
    source: OMV,
    section: "Class E Intermediate License - Tests",
    url: "https://expresslane.dps.louisiana.gov/CDLForms/Upgrade%20to%20Intermediate%20License.pdf",
  },
  {
    key: "omv-skills-third-party",
    quote:
      "Applicants who take driver education courses after August 1, " +
      "2014 at a private driving school must return to the driving " +
      "school or another third party tester for the skills test " +
      "administration.",
    source: OMV,
    section: "Class E Intermediate License - Tests",
    url: "https://expresslane.dps.louisiana.gov/CDLForms/Upgrade%20to%20Intermediate%20License.pdf",
  },
  {
    key: "omv-tests-by-provider",
    quote:
      "The knowledge and skills tests are administered by the driver " +
      "education provider. Only those students that obtain their " +
      "driver education course from a secondary school that does not " +
      "provide the knowledge or skills test may request OMV to " +
      "provide the testing.",
    source: OMV,
    section: "Class E Learner's Permit Requirements (minors) - Tests",
    url: "https://expresslane.dps.louisiana.gov/CDLForms/CLASS%20E%20Learner%27s%20Permit%20requirements.pdf",
  },
  {
    key: "omv-tip-possession",
    quote:
      "the student must have the TIP in their possession when " +
      "operating a motor vehicle during the behind the wheel portion " +
      "of instruction and when accompanied by a licensed driver " +
      "education instructor or during the administration of a road " +
      "skills test.",
    source: OMV,
    section: "Class E Learner's Permit Requirements (minors) - Driver Education",
    url: "https://expresslane.dps.louisiana.gov/CDLForms/CLASS%20E%20Learner%27s%20Permit%20requirements.pdf",
  },
  {
    key: "oncoming-car-in-lane",
    quote:
      "If you see a car coming toward you in your lane: 1. Blow your " +
      "horn and flash your lights to warn the other driver, if you " +
      "have time. 2. Brake fast, but don't lock your wheels and lose " +
      "control. 3. If the other driver keeps coming and a crash is " +
      "probable, steer off the road to the right shoulder or ditch.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Avoiding Collisions (page 113)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=118",
  },
  {
    key: "one-way-street",
    quote:
      "These signs tell you that traffic flows only in the direction " +
      "of the arrow. Do not turn in the opposite direction of the " +
      "arrow. Never drive the wrong way on a one-way street.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Regulatory Signs, One-Way Street (page 28)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=33",
  },
  {
    key: "open-container",
    quote:
      "Louisiana has a law against an open container of alcohol in " +
      "the vehicle. This law prohibits both the possession of any " +
      "open alcoholic beverage container and consumption of any " +
      "alcohol beverage in a vehicle.",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Blood Alcohol Concentration (page 124)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=129",
  },
  {
    key: "otc-drugs",
    quote:
      "Over-the-counter drugs taken for headaches, colds, hay fever " +
      "or other allergies or those to calm nerves can make you drowsy " +
      "and affect your driving. Pep pills, \"uppers\" and diet pills " +
      "can make you feel nervous, dizzy, unable to concentrate, and " +
      "they can affect your vision.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Illness and Driving (page 58)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=63",
  },
  {
    key: "overheating",
    quote:
      "If steam begins to come from under the hood, your cooling " +
      "system is boiling. You should pull to the side of the road and " +
      "turn off the engine. Do not open the radiator cap.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Overheating (page 117)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=122",
  },
  {
    key: "oversteer-correction",
    quote:
      "Many drivers instinctively slam on the brakes when the vehicle " +
      "begins to over steer. Slamming the brakes will only aggravate " +
      "the situation, causing the rear tires to lose more traction. " +
      "The correct reaction is to reduce the steering angle gently " +
      "and ease off the accelerator.",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Steering (page 48)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=53",
  },
  {
    key: "painted-curbs",
    quote:
      "White - indicates that only short stops are permitted  Yellow " +
      "- indicates a loading zone or some other restriction  Red - " +
      "indicates fire zone restrictions  Blue- indicates an " +
      "accessibility restriction",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Parking (page 70)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=75",
  },
  {
    key: "parallel-park-18-inches",
    quote:
      "When parallel parked, the vehicle's right wheels must be " +
      "within 18 inches of the right-hand curb of the street.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Parking (page 70)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=75",
  },
  {
    key: "parking-bike-lane",
    quote:
      "In a biking lane",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Parking (R.S. 32:143) (page 70)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=75",
  },
  {
    key: "parking-brake-always",
    quote:
      "Whether your car is a manual or automatic, the terrain is " +
      "hilly or flat, you should use your parking brake every time " +
      "you park.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Parking Brake (page 67)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=72",
  },
  {
    key: "parking-crosswalk-20",
    quote:
      "Within 20 feet of a crosswalk at an intersection",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Parking (R.S. 32:143) (page 70)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=75",
  },
  {
    key: "parking-fire-station",
    quote:
      "Within 20 feet of a fire station driveway on the same side of " +
      "the street, or within 75 feet of the driveway on the other " +
      "side of the street",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Parking (R.S. 32:143) (page 70)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=75",
  },
  {
    key: "parking-hydrant-railroad",
    quote:
      "Within 15 feet of a fire hydrant or within 50 feet of a " +
      "railroad crossing",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Parking (R.S. 32:143) (page 70)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=75",
  },
  {
    key: "parking-on-hills",
    quote:
      "Facing downhill, turn your wheels toward the curb and shift " +
      "into reverse or park. Facing uphill, turn your wheels away " +
      "from the curb and shift into low gear or park. If there are no " +
      "curbs, turn your wheels toward the edge of the road, whether " +
      "facing uphill or downhill.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Parking on Hills (page 68)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=73",
  },
  {
    key: "parking-signal-20-feet",
    quote:
      "Within 20 feet of a traffic signal, flashing beacon, stop " +
      "sign, yield sign or traffic control signal located at the side " +
      "of a roadway",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Parking (R.S. 32:143) (page 70)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=75",
  },
  {
    key: "passing-100-feet",
    quote:
      "You must complete a passing maneuver before coming within 100 " +
      "feet of any vehicle approaching from the opposite direction.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Passing on the Left (page 71)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=76",
  },
  {
    key: "passing-bridge-100",
    quote:
      "you are within one hundred feet of a bridge or tunnel.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Passing on the Left (page 71)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=76",
  },
  {
    key: "passing-intersection-100",
    quote:
      "you are within one hundred feet of an intersection or a " +
      "railroad crossing.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Passing on the Left (page 71)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=76",
  },
  {
    key: "passing-left-lane-purpose",
    quote:
      "On multi-lane roads, the left-most lane is intended to be used " +
      "for passing slower vehicles. When passing on the right, the " +
      "other driver may have difficulty seeing you and might suddenly " +
      "change lanes. Never pass on the shoulder, whether it is paved " +
      "or not.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Safety Tips on Passing (page 72)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=77",
  },
  {
    key: "passing-no-interference",
    quote:
      "Pass only when you won't interfere with oncoming traffic or " +
      "the vehicle being passed. You must not cause another driver to " +
      "slow down or pull over in order for you to complete your pass.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Passing on the Left (page 71)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=76",
  },
  {
    key: "passing-on-right",
    quote:
      "You may pass to the right of another vehicle if there are two " +
      "or more lanes of traffic moving in the same direction. You may " +
      "never pass to the right of another vehicle by driving off the " +
      "roadway onto the shoulder of the road.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Passing on the Right (page 72)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=77",
  },
  {
    key: "passing-oncoming-25-seconds",
    quote:
      "An oncoming vehicle that is more than 25 seconds from your " +
      "vehicle generally appears to be standing still.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Safety Tips on Passing (page 73)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=78",
  },
  {
    key: "passing-view-blocked",
    quote:
      "your view is blocked by a hill or a curve.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Passing on the Left (page 71)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=76",
  },
  {
    key: "pedestrian-right-of-way",
    quote:
      "Pedestrians have the right of way when they are in a marked " +
      "crosswalk, when crossing an intersection with a green traffic " +
      "signal or walk signal, and over a vehicle making a right turn " +
      "on red.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Pedestrian Safety (page 76)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=81",
  },
  {
    key: "proof-of-insurance-card",
    quote:
      "By law, your insurance card must be in the vehicle at all " +
      "times as evidence of insurance.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Proof of Insurance (page 7)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=12",
  },
  {
    key: "quarter-mile-passing",
    quote:
      "Also, if you can't see at least a quarter mile ahead, don't " +
      "attempt to pass.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Lane Changing (page 88)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=93",
  },
  {
    key: "railroad-50-15",
    quote:
      "Louisiana law R.S. 32:171 requires that the driver of any " +
      "motor vehicle must stop within 50 feet but no less than 15 " +
      "feet from the nearest rail of a railroad crossing when: A " +
      "signal device is flashing and a train is approaching. A " +
      "crossing gate is lowered.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Railroad Grade Crossing (page 94)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=99",
  },
  {
    key: "railroad-gates",
    quote:
      "Stop when the light begins flashing and before the gates are " +
      "lowered. Remain stopped until the gates are raised. Never " +
      "drive around the gates. It's against the law to drive through " +
      "or around any crossing gate at a railroad crossing.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Railroad Grade Crossing (page 95)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=100",
  },
  {
    key: "railroad-mile-to-stop",
    quote:
      "A 100 car freight train traveling at 55 miles per hour " +
      "requires more than a mile to stop. That's the length of 18 " +
      "football fields.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Track Facts (page 96)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=101",
  },
  {
    key: "railroad-must-stop-vehicles",
    quote:
      "Drivers of vehicles carrying passengers for hire, school buses " +
      "or trucks, or any vehicle carrying explosives or flammable " +
      "liquids must stop at railroad crossings. DO NOT PASS THEM " +
      "unless it is legal to do so and there are no unsafe " +
      "conditions.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Railroad Grade Crossing (page 94)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=99",
  },
  {
    key: "railroad-never-shift",
    quote:
      "Never shift gears on the crossing. If your vehicle has a " +
      "manual transmission, shift before reaching the tracks and do " +
      "not change gears while crossing the tracks.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Railroad Grade Crossing (page 95)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=100",
  },
  {
    key: "railroad-no-stopping-on-tracks",
    quote:
      "Louisiana law, R.S. 32:171, prohibits any driver from stopping " +
      "a vehicle on railroad tracks. Never get trapped on a crossing.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Railroad Grade Crossing (page 94)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=99",
  },
  {
    key: "railroad-stalled",
    quote:
      "If your vehicle becomes pinned between two vehicles or stalls " +
      "in the path of an oncoming train, get out and move in the " +
      "direction toward the approaching train away from the tracks.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Railroad Grade Crossing (page 94)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=99",
  },
  {
    key: "railroad-trains-right-of-way",
    quote:
      "Fact #4: Trains have the right of way 100% of the time over " +
      "emergency vehicles, cars, the police and pedestrians.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Track Facts (page 96)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=101",
  },
  {
    key: "reaction-distance",
    quote:
      "Reaction distance is how far you will continue to travel, in " +
      "ideal conditions, before you physically hit the brakes, in " +
      "response to a hazard seen ahead.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Stopping Distances (page 64)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=69",
  },
  {
    key: "rear-collision-brace",
    quote:
      "If you are about to be hit from the rear: 1. Be ready to apply " +
      "your brake so you won't be pushed into the car ahead. 2. Brace " +
      "yourself between the steering wheel and the seat back. 3. " +
      "Press the back of your head firmly against the head rest.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Protecting Yourself in a Crash (page 114)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=119",
  },
  {
    key: "rear-fog-light",
    quote:
      "A rear fog light must only be used in a dense fog or similar " +
      "hazardous condition that results in seriously reduced " +
      "visibility.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Night Driving (page 75)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=80",
  },
  {
    key: "refusal-suspension",
    quote:
      "If you refuse to submit to the test, your driving privileges " +
      "will be suspended for 365 days on your first offense. If it is " +
      "a second or subsequent offense, your driving privileges will " +
      "be suspended for 730 days.",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Administrative Per Se (page 126)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=131",
  },
  {
    key: "registration-address-10-days",
    quote:
      "Louisiana law requires you to correct the address on your " +
      "registration within 10 days after a move.",
    source: HANDBOOK,
    section: "Chapter 11: Motor Vehicle Registration and Title - Change of Address (page 136)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=141",
  },
  {
    key: "registration-in-vehicle",
    quote:
      "It must be kept in the vehicle at all times and must be " +
      "presented when requested by law enforcement.",
    source: HANDBOOK,
    section: "Chapter 11: Motor Vehicle Registration and Title - Registration Certificate (page 135)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=140",
  },
  {
    key: "revocation-grounds",
    quote:
      "Failure to stop and render assistance at a collision in which " +
      "you were involved that results in the injury or death of a " +
      "person. o Conviction of driving while intoxicated (DWI).",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Revocation of Your License (page 12)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=17",
  },
  {
    key: "revocation-reckless-three",
    quote:
      "Three convictions of reckless driving committed within a " +
      "12-month period.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Revocation of Your License (page 12)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=17",
  },
  {
    key: "revocation-school-bus",
    quote:
      "Failure to stop for a school bus loading or unloading " +
      "children.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Revocation of Your License (page 12)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=17",
  },
  {
    key: "right-turn-rightmost",
    quote:
      "Avoid swinging left before making the turn. 2. Always turn " +
      "right from the right most lane or when lane markings indicate " +
      "multiple lanes can be used for a right turn at the same time.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Right Turn (page 90)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=95",
  },
  {
    key: "road-rage-criminal",
    quote:
      "Road rage is a criminal offense. This occurs when a traffic " +
      "incident escalates into a far more serious situation.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Aggressive Driving/Road Rage (page 60)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=65",
  },
  {
    key: "road-test-fail-reasons",
    quote:
      "You will fail the skills test for any of the following: A " +
      "violation of any traffic law Any dangerous action/incident " +
      "Lack of cooperation or refusal to follow instructions " +
      "Collision Cumulative minor mistakes",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Road Skills (Driving) Test (page 10)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=15",
  },
  {
    key: "road-test-vehicle",
    quote:
      "The vehicle must be in safe driving condition, pass a safety " +
      "inspection, and have a valid inspection sticker, current " +
      "license plate and registration document.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Road Skills (Driving) Test (page 9)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=14",
  },
  {
    key: "rollover-off-pavement",
    quote:
      "If your vehicle leaves the paved road surface, slow down " +
      "gradually, but do not jerk the steering wheel to get the " +
      "vehicle back on the pavement.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Rollovers (page 115)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=120",
  },
  {
    key: "rollover-safety-belt",
    quote:
      "The most effective way to reduce the risk of injury or death " +
      "in a rollover is to use your safety belt. Without safety " +
      "belts, occupants in vehicles that roll can be thrown from the " +
      "vehicle, greatly increasing the risk of serious injury or " +
      "death.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Rollovers (page 115)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=120",
  },
  {
    key: "roundabout-basics",
    quote:
      "In a roundabout, traffic yields to the circulation traffic. " +
      "Slow down: Speeds of 15 mph or less are adequate in the " +
      "roundabout. Yield: Vehicles must yield to the left before " +
      "entering a roundabout. Don't Stop: Never stop once inside the " +
      "roundabout. The vehicle in the roundabout has the right of " +
      "way.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Roundabouts (page 37)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=42",
  },
  {
    key: "roundabout-signals",
    quote:
      "If you intend to turn left, signal \"left\" on the approach to " +
      "the traffic circle or roundabout. Once you have traveled three " +
      "quarters of the way around the traffic circle or roundabout, " +
      "signal \"right\" to take the exit.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Roundabouts and Traffic Circles (page 92)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=97",
  },
  {
    key: "roundabout-speed",
    quote:
      "When entering the roundabout or traffic circle you must " +
      "negotiate a sharp curve. Slow your speed to about 15 to 20 " +
      "mph.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Roundabouts and Traffic Circles (page 91)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=96",
  },
  {
    key: "roundabout-yield-right",
    quote:
      "Yield to any traffic in the circle. If another vehicle arrives " +
      "at the traffic circle at the same time as you do, yield to the " +
      "vehicle if it is on your right. Also, yield to pedestrians and " +
      "bicyclists in the traffic circle or roundabout.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Roundabouts and Traffic Circles (page 92)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=97",
  },
  {
    key: "row-driveway",
    quote:
      "When entering a road from a driveway, alley or roadside you " +
      "must yield to vehicles already on the main road.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Right of Way (page 93)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=98",
  },
  {
    key: "row-emergency-vehicle",
    quote:
      "To emergency vehicles that are sounding a siren and flashing " +
      "warning lights. Pull over to the right edge of the roadway " +
      "clear of intersections and stop until the emergency vehicle " +
      "has passed. Watch for other emergency vehicles. This applies " +
      "to traffic in both directions.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Right of Way (page 93)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=98",
  },
  {
    key: "row-left-yields-right",
    quote:
      "When two vehicles approach an intersection at the same time, " +
      "the driver on the left must yield the right-of-way to the " +
      "vehicle on the right.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Right of Way (page 93)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=98",
  },
  {
    key: "row-list",
    quote:
      "At uncontrolled intersections where vehicles are already in " +
      "the intersection;  At \"T\" intersections where you must yield " +
      "to vehicles on the through road;  When driving on an unpaved " +
      "road that intersects with a paved road;",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Right of Way (page 93)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=98",
  },
  {
    key: "row-not-a-right",
    quote:
      "The law says who must yield the right-of-way to another " +
      "roadway user; it does not give anyone the right-of-way. The " +
      "rules apply to all users of the road, including bicyclists, " +
      "but you should never insist on taking the right-ofway.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Right of Way (page 93)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=98",
  },
  {
    key: "safety-chains",
    quote:
      "When connected, safety chains should have some slack to permit " +
      "sharp turns but should not drag on the road. In addition, they " +
      "should cross under the trailer tongue to help prevent the " +
      "tongue from dropping to the road in the event the trailer " +
      "separates from your vehicle.",
    source: HANDBOOK,
    section: "Chapter 10-A: Trailer Safety - Hitching Systems (page 133)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=138",
  },
  {
    key: "school-bus-30-feet",
    quote:
      "You must stop at least thirty feet from a stopped school bus " +
      "that is loading or unloading children.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Stopped School Buses (page 88)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=93",
  },
  {
    key: "school-bus-both-directions",
    quote:
      "This is required by law whether you are meeting the bus or " +
      "traveling behind it. You do not have to stop when the bus is " +
      "stopped in a loading zone completely off the roadway and where " +
      "the pedestrians are not allowed to cross the roadway.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Stopped School Buses (page 88)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=93",
  },
  {
    key: "school-bus-divided",
    quote:
      "When a school bus is stopped in opposite lanes on a roadway " +
      "separated by a ditch, grassy median, elevated concrete barrier " +
      "or any obstacle that prevents traffic from driving thereon, " +
      "you are not required to stop.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Stopped School Buses (page 88)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=93",
  },
  {
    key: "school-bus-four-lane",
    quote:
      "Drivers must stop on a four lane roadway when it is not " +
      "separated by a barrier. A roadway with one lane in each " +
      "direction and with a dedicated two-way left turn lane is not " +
      "considered a divided highway and drivers must stop for the " +
      "school bus.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Stopped School Buses (page 89)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=94",
  },
  {
    key: "school-bus-lights-sequence",
    quote:
      "Bus drivers will activate the flashing yellow lights of the " +
      "bus at least 100 feet but no more than 500 feet before the " +
      "school bus stop. As the bus comes to a complete stop, the " +
      "flashing red lights and stop signs will activate.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Stopped School Buses (page 88)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=93",
  },
  {
    key: "school-speed-when-flashing",
    quote:
      "This sign is posted before a school to indicate a reduced " +
      "speed limit in a school zone. The speed limit is required only " +
      "when flashing; otherwise obey the roadways speed limit.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Regulatory Signs, School Speed Limit When Flashing Sign (page 27)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=32",
  },
  {
    key: "seatbelt-fit",
    quote:
      "Your safety belt should fit snugly across your hips. Your hip " +
      "bones are strong and can absorb more of the impact than your " +
      "abdominal region. The shoulder strap should slide over the " +
      "shoulder and securely across the chest.",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Use of Safety Belts (page 39)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=44",
  },
  {
    key: "seatbelt-law",
    quote:
      "Louisiana has a mandatory safety belt use law which requires " +
      "all passengers in both the front and back seats in cars, vans " +
      "and pickup trucks to be properly buckled.",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Use of Safety Belts (page 39)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=44",
  },
  {
    key: "shape-diamond",
    quote:
      "The diamond shaped sign is used for warning and approaching " +
      "hazard signs. A diamond shaped sign that is orange in color is " +
      "used in construction zones. Slow down and proceed with " +
      "caution. Yellow diamond shaped signs advise you of approaching " +
      "conditions such as curves, approaching side roads and traffic " +
      "flow.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signs (page 23)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=28",
  },
  {
    key: "shape-no-passing",
    quote:
      "The triangle shaped sign with the point sideways is used to " +
      "indicate no passing zones.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signs (page 23)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=28",
  },
  {
    key: "shape-octagon",
    quote:
      "The octagon shape sign is used exclusively for stop signs. " +
      "Slow down and come to a complete stop.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signs (page 23)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=28",
  },
  {
    key: "shape-rectangle-regulatory",
    quote:
      "The rectangle shape is used for regulatory signs, which " +
      "include speed limit, school zones, parking and loading zones.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signs (page 23)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=28",
  },
  {
    key: "shape-yield-triangle",
    quote:
      "The triangle shaped sign with the point down is used " +
      "exclusively for yield signs. Slow down and watch for oncoming " +
      "traffic. Be prepared to stop if the traffic flow requires it.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signs (page 23)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=28",
  },
  {
    key: "shared-centre-lane-200ft",
    quote:
      "This sign tells you where a lane is reserved for the use of " +
      "left turning vehicles from either direction and is not to be " +
      "used for through traffic or passing other vehicles. You must " +
      "not drive more than 200 feet in this lane when making a left " +
      "turn from this lane.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Regulatory Signs, Shared Center Lane Left Turn Only (page 27)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=32",
  },
  {
    key: "shared-lane-200-feet",
    quote:
      "Louisiana law prohibits traveling in this lane for more than " +
      "200 feet. Do not move into the lane too soon. The longer you " +
      "stay in the lane, the more likely you will meet someone coming " +
      "in the opposite direction.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Shared Center Left Turn Lane (page 91)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=96",
  },
  {
    key: "signal-flashing-red",
    quote:
      "Flashing RED Traffic Light - This means you must stop behind a " +
      "stop bar, crosswalk, or intersection before entering and use " +
      "the same procedure as you would at a stop sign, by coming to a " +
      "complete stop, looking both ways before entering the " +
      "intersection and yielding right-of-way.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signals (page 34)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=39",
  },
  {
    key: "signal-flashing-yellow",
    quote:
      "Flashing YELLOW Traffic Light - This warning means slow down, " +
      "look for any traffic entering the intersection and proceed " +
      "with caution. If traffic is in the intersection, stop and let " +
      "the traffic pass before proceeding.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signals (page 33)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=38",
  },
  {
    key: "signal-green-arrow",
    quote:
      "GREEN Arrow - This means you can turn in the direction of the " +
      "arrow, if the intersection is clear of other roadway users. " +
      "When the arrow is green, oncoming or crossing traffic should " +
      "yield to your turning action, but be careful of others making " +
      "a right turn on red from the other side of the intersection.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signals (page 33)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=38",
  },
  {
    key: "signal-green-left-turn",
    quote:
      "Turning left at a steady green traffic light means you may " +
      "turn but only when the intersection is clear to do so. You " +
      "should always yield to the oncoming traffic flow and " +
      "pedestrians.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signals (page 33)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=38",
  },
  {
    key: "signal-illegal-uses",
    quote:
      "It is illegal to flash your turn signals on just one side of a " +
      "parked or disabled vehicle OR as a signal to another vehicle " +
      "to pass you.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Signaling (page 92)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=97",
  },
  {
    key: "signal-left-on-red",
    quote:
      "Some left turns may be permitted on red when moving from a " +
      "one-way street onto another one-way street. You must yield to " +
      "all traffic and pedestrians crossing in front or to the side " +
      "of your vehicle when turning left on red, where permitted.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signals (page 34)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=39",
  },
  {
    key: "signal-out-four-way",
    quote:
      "When a traffic-control signal is not functioning at an " +
      "intersection, the intersection shall revert to an all-way or " +
      "four-way stop.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Traffic Control (page 86)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=91",
  },
  {
    key: "signal-red-arrow",
    quote:
      "RED Arrow - This means you must stop and you may not go in the " +
      "direction of the arrow until the green arrow returns.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signals (page 34)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=39",
  },
  {
    key: "signal-steady-green",
    quote:
      "Steady GREEN Traffic Light - This means you can go through the " +
      "intersection if it is clear to do so. You must yield to " +
      "emergency vehicles and other roadway users as required by law.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signals (page 33)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=38",
  },
  {
    key: "signal-steady-red",
    quote:
      "Steady RED Traffic Light - This means stop behind the stop " +
      "bar, crosswalk, or intersection until the traffic signal turns " +
      "green. When turning right at an intersection, if there is no " +
      "sign prohibiting a right turn on red, you may turn after " +
      "stopping and yielding to traffic, including pedestrians.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signals (page 34)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=39",
  },
  {
    key: "signal-steady-yellow",
    quote:
      "Steady YELLOW Traffic Light - This is a warning the traffic " +
      "signal is about to change to red. You should slow down and " +
      "come to a complete stop, if you can do so before the stop bar. " +
      "If you are already in the intersection when the yellow light " +
      "comes on, you may continue safely through the intersection.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signals (page 33)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=38",
  },
  {
    key: "signal-steady-yellow-arrow",
    quote:
      "Steady YELLOW Arrow - This means that the green arrow is " +
      "ending; you should prepare to stop and yield the right-of-way " +
      "to oncoming traffic or pedestrians.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signals (page 33)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=38",
  },
  {
    key: "signalling-100-feet",
    quote:
      "A right or left turn signal must be given continuously for not " +
      "less than 100 feet before making the turn. A greater distance " +
      "is suggested when driving at faster speeds or in heavy " +
      "traffic.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Signaling (page 92)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=97",
  },
  {
    key: "signs-obey",
    quote:
      "Traffic control devices include traffic signals, signs and " +
      "pavement markings. These devices are necessary to regulate and " +
      "control traffic. You must be able to recognize them " +
      "immediately, and in the case of regulatory signs, obey them.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Signs, Traffic Lights, and Pavement Markings (page 22)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=27",
  },
  {
    key: "sipde",
    quote:
      "S -Sweep, Search, and Scan (keep your eyes moving at all times " +
      "to effectively see imminent danger) I - Identify hazards, " +
      "identify what's happening (road-way features) (take notice of " +
      "things that could cause trouble) P - Predict which hazards " +
      "could potentially come into conflict with you;",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Defensive Driving Techniques (page 55)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=60",
  },
  {
    key: "skid-recovery",
    quote:
      "If you find yourself in a skid, remain calm, ease your foot " +
      "off the gas, look and carefully steer in the direction you " +
      "want the car to go. Avoid using your brakes.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Driving on Wet Pavement (page 74)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=79",
  },
  {
    key: "skid-steer-direction",
    quote:
      "If the rear of your car starts to slide, don't use your " +
      "brakes. Steer in the direction in which the rear end of your " +
      "car is skidding. To steer out of a skid: 1. Take your foot off " +
      "the gas pedal. 2. Turn your front wheels only enough to keep " +
      "them going straight down the road.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Other Vehicle Emergencies (page 115)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=120",
  },
  {
    key: "slow-moving-emblem",
    quote:
      "A fluorescent or reflective orange and red triangle displayed " +
      "on the rear of vehicles drawn by animals, farm equipment or " +
      "construction equipment means the vehicle is traveling less " +
      "than 25 mph.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - Slow Moving Vehicles (page 105)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=110",
  },
  {
    key: "slower-traffic-keep-right",
    quote:
      "This sign is posted on a multilane highway for those driving " +
      "slower than the normal speed of traffic. It tells the slow " +
      "driver to stay in the right lane.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Regulatory Signs, Slower Traffic Keep Right (page 29)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=34",
  },
  {
    key: "speed-doubles-impact",
    quote:
      "When you double your speed from 20 to 40 mph the impact is 4 " +
      "times greater. The braking distance is also 4 times longer. " +
      "Triple the speed from 20 to 60 mph and the impact and braking " +
      "distance is 9 times greater.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Stopping Distances (page 65)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=70",
  },
  {
    key: "speed-limit-signs",
    quote:
      "These black and white signs indicate the maximum legal speed " +
      "allowed or the minimum legal speed required. The maximum limit " +
      "should be driven only in ideal driving conditions and you must " +
      "reduce your speed when weather or traffic conditions require " +
      "it.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Regulatory Signs, Speed Limit Signs (page 27)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=32",
  },
  {
    key: "speed-not-impede",
    quote:
      "You must not drive faster than the posted maximum limit. You " +
      "must not drive slower than the posted minimum limit. While " +
      "driving within the posted speed limit, you must not drive so " +
      "slowly that you impede other traffic.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Speed Limits (page 87)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=92",
  },
  {
    key: "speed-reduced-areas",
    quote:
      "Reduced speed limits are required in the following areas: o On " +
      "streets near schools and playgrounds and at locations marked " +
      "with a \"school crossing\" sign when children are present. o On " +
      "streets in residential or business areas.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Speed Limits (page 87)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=92",
  },
  {
    key: "sr22-requirement",
    quote:
      "you must file proof of future financial responsibility by " +
      "submitting an SR-22, which is high risk insurance, or " +
      "$30,000.00 in cash or security. You will be required by law to " +
      "maintain an SR-22 for three (3) years from the date of " +
      "conviction.",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Administrative Per Se (page 126)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=131",
  },
  {
    key: "stat-015-suspension",
    quote:
      "If the person submitted to the test and the test results show " +
      "a blood alcohol level of 0.15 percent or above by weight, his " +
      "driving privileges shall be suspended for two years from the " +
      "date of suspension on first offense violation",
    source: STATUTES,
    section: "R.S. 32:667 - Seizure of license; circumstances; temporary license",
    url: "https://legis.la.gov/legis/Law.aspx?d=88506",
  },
  {
    key: "stat-bicycle-three-feet",
    quote:
      "shall exercise due care while the motor vehicle is passing the " +
      "bicycle and shall leave a safe distance between the motor " +
      "vehicle and the bicycle of not less than three feet",
    source: STATUTES,
    section: "R.S. 32:76.1 - Limitations on passing bicycles",
    url: "https://legis.la.gov/legis/Law.aspx?d=670621",
  },
  {
    key: "stat-child-under-two",
    quote:
      "A child who is younger than the age of two years shall be " +
      "restrained in a rear-facing child restraint system that " +
      "complies with all applicable federal regulations until the " +
      "child reaches the weight or height limit of the child " +
      "restraint system as set by the manufacturer.",
    source: STATUTES,
    section: "R.S. 32:295 - Child passenger restraint system",
    url: "https://legis.la.gov/legis/Law.aspx?d=88231",
  },
  {
    key: "stat-crash-exchange",
    quote:
      "Give his name, address, and the registration number of the " +
      "vehicle he was driving and, upon request and if available, " +
      "exhibit his license or permit to drive to any person injured " +
      "in the crash or to the driver or occupant of or person " +
      "attending any vehicle or other property damaged in the crash.",
    source: STATUTES,
    section: "R.S. 32:398 - Crash reports; when and to whom made; information aid; fees for copies; fees for crash photographs and videos",
    url: "https://legis.la.gov/legis/Law.aspx?d=88361",
  },
  {
    key: "stat-crash-report",
    quote:
      "The driver of a vehicle involved in a crash resulting in " +
      "injury to or death of any person or property damage in excess " +
      "of five hundred dollars shall:",
    source: STATUTES,
    section: "R.S. 32:398 - Crash reports; when and to whom made; information aid; fees for copies; fees for crash photographs and videos",
    url: "https://legis.la.gov/legis/Law.aspx?d=88361",
  },
  {
    key: "stat-double-parking",
    quote:
      "On the roadway side of any vehicle stopped or parked at the " +
      "edge or curb of a street; (13) Upon any bridge or other " +
      "elevated structure upon a highway or within a highway tunnel;",
    source: STATUTES,
    section: "R.S. 32:143 - Stopping, standing or parking prohibited in specified places",
    url: "https://legis.la.gov/legis/Law.aspx?d=88071",
  },
  {
    key: "stat-driveway-yield",
    quote:
      "The driver of a vehicle about to enter or cross a highway from " +
      "a private road, driveway, alley or building, shall stop such " +
      "vehicle immediately prior to driving onto a sidewalk or onto " +
      "the sidewalk area extending across any alleyway or driveway, " +
      "and shall yield the right of way to any pedestrian as may be " +
      "necessary to avoid collision, and shall yield the right of way " +
      "to all approaching vehicles so close as to constitute an " +
      "immediate hazard.",
    source: STATUTES,
    section: "R.S. 32:124 - Vehicle entering highway from private road, driveway, alley or building",
    url: "https://legis.la.gov/legis/Law.aspx?d=88032",
  },
  {
    key: "stat-emergency-approach",
    quote:
      "the driver of every other vehicle shall yield the right-of-way " +
      "and shall immediately drive to a position parallel to, and as " +
      "close as possible to, the right-hand edge or curb of the " +
      "highway clear of any intersection, and shall stop and remain " +
      "in such position until the authorized emergency vehicle has " +
      "passed",
    source: STATUTES,
    section: "R.S. 32:125 - Procedure on approach of an authorized emergency vehicle; passing a parked or disabled emergency or nonemergency vehicle",
    url: "https://legis.la.gov/legis/Law.aspx?d=88033",
  },
  {
    key: "stat-emergency-privileges",
    quote:
      "Proceed past a red or stop signal or stop sign, but only after " +
      "slowing down or stopping as may be necessary for safe " +
      "operation. (3) Exceed the maximum speed limits so long as he " +
      "does not endanger life or property.",
    source: STATUTES,
    section: "R.S. 32:24 - Emergency vehicles; exceptions",
    url: "https://legis.la.gov/legis/Law.aspx?d=88206",
  },
  {
    key: "stat-flashing-yellow-arrow",
    quote:
      "In addition, vehicular traffic facing a flashing yellow arrow, " +
      "turning left or making a U-turn to the left shall yield the " +
      "right-of-way to other vehicles approaching from the opposite " +
      "direction.",
    source: STATUTES,
    section: "R.S. 32:232 - Traffic-control signals",
    url: "https://legis.la.gov/legis/Law.aspx?d=88198",
  },
  {
    key: "stat-following-emergency-500",
    quote:
      "The driver of any vehicle other than one on official business " +
      "shall not follow any authorized emergency vehicle traveling in " +
      "response to an official call of duty closer than five hundred " +
      "feet or drive into or park such vehicle within the block where " +
      "such vehicle has stopped in answer to an official call.",
    source: STATUTES,
    section: "R.S. 32:286 - Following authorized emergency vehicles prohibited",
    url: "https://legis.la.gov/legis/Law.aspx?d=88221",
  },
  {
    key: "stat-following-reasonable",
    quote:
      "The driver of a motor vehicle shall not follow another vehicle " +
      "more closely than is reasonable and prudent, having due regard " +
      "for the speed of such vehicle and the traffic upon and the " +
      "condition of the highway.",
    source: STATUTES,
    section: "R.S. 32:81 - Following vehicles; exceptions",
    url: "https://legis.la.gov/legis/Law.aspx?d=88594",
  },
  {
    key: "stat-four-way-stop",
    quote:
      "At a four-way stop intersection, the driver of the first " +
      "vehicle to stop at the intersection shall be the first to " +
      "proceed. If two or more vehicles reach the four-way stop " +
      "intersection at the same time, the driver of the vehicle on " +
      "the left shall yield the right-of-way to the vehicle on the " +
      "right.",
    source: STATUTES,
    section: "R.S. 32:123 - Stop signs and yield signs; penalties for violations",
    url: "https://legis.la.gov/legis/Law.aspx?d=88031",
  },
  {
    key: "stat-gdl-180-days",
    quote:
      "must be maintained for at least one hundred eighty days, " +
      "unless prior to such time the driver reaches seventeen years " +
      "of age, prior to being converted to a Class \"E\" intermediate " +
      "driver's license.",
    source: STATUTES,
    section: "R.S. 32:407 - Applications of minors; revocation; applications of persons less than twenty-one years of age",
    url: "https://legis.la.gov/legis/Law.aspx?d=88384",
  },
  {
    key: "stat-gdl-belts",
    quote:
      "The intermediate licensee shall not place the vehicle in " +
      "motion until every occupant of the vehicle has been restrained " +
      "by a properly fastened seat belt or other occupant restraint " +
      "system",
    source: STATUTES,
    section: "R.S. 32:407 - Applications of minors; revocation; applications of persons less than twenty-one years of age",
    url: "https://legis.la.gov/legis/Law.aspx?d=88384",
  },
  {
    key: "stat-gdl-curfew",
    quote:
      "The intermediate license shall restrict those under the age of " +
      "seventeen from driving between 11:00 p.m. and 5:00 a.m. unless " +
      "otherwise accompanied by a licensed parent or guardian, a " +
      "licensed adult at least twenty-one years of age, or a licensed " +
      "sibling at least eighteen years of age.",
    source: STATUTES,
    section: "R.S. 32:407 - Applications of minors; revocation; applications of persons less than twenty-one years of age",
    url: "https://legis.la.gov/legis/Law.aspx?d=88384",
  },
  {
    key: "stat-gdl-fifty-hours",
    quote:
      "The applicant's parent or legal guardian shall provide a " +
      "signed statement to the department attesting that the " +
      "applicant has completed a minimum of fifty hours of supervised " +
      "driving practice with a licensed parent, guardian, or adult at " +
      "least age twenty-one or older.",
    source: STATUTES,
    section: "R.S. 32:407 - Applications of minors; revocation; applications of persons less than twenty-one years of age",
    url: "https://legis.la.gov/legis/Law.aspx?d=88384",
  },
  {
    key: "stat-gdl-full-licence",
    quote:
      "for twelve consecutive months after being issued his " +
      "intermediate license, an applicant may be issued full Class " +
      "\"E\" driving privileges.",
    source: STATUTES,
    section: "R.S. 32:407 - Applications of minors; revocation; applications of persons less than twenty-one years of age",
    url: "https://legis.la.gov/legis/Law.aspx?d=88384",
  },
  {
    key: "stat-gdl-learner",
    quote:
      "The Class \"E\" learner's license shall authorize the holder to " +
      "drive while being accompanied by a licensed parent, guardian, " +
      "adult at least age twenty-one or older, or licensed sibling at " +
      "least age eighteen or older.",
    source: STATUTES,
    section: "R.S. 32:407 - Applications of minors; revocation; applications of persons less than twenty-one years of age",
    url: "https://legis.la.gov/legis/Law.aspx?d=88384",
  },
  {
    key: "stat-gdl-passenger",
    quote:
      "Unless accompanied by a licensed parent, guardian, or adult at " +
      "least age twenty-one or older, an intermediate licensee may " +
      "not between the hours of 6:00 p.m. and 5:00 a.m. transport " +
      "more than one passenger that is under twenty-one years of age " +
      "and not a member of the intermediate licensee's immediate " +
      "family.",
    source: STATUTES,
    section: "R.S. 32:407 - Applications of minors; revocation; applications of persons less than twenty-one years of age",
    url: "https://legis.la.gov/legis/Law.aspx?d=88384",
  },
  {
    key: "stat-gdl-test-content",
    quote:
      "including rules of the road, signs, and signals, sharing the " +
      "road with motorcycles and tractor/trailer trucks, knowledge of " +
      "distracted driving issues, knowledge of trailer safety, " +
      "knowledge of appropriate driver conduct when stopped by a law " +
      "enforcement officer, knowledge of accessible parking and " +
      "access aisles, and not less than two questions relative to " +
      "railroad and highway grade railroad safety",
    source: STATUTES,
    section: "R.S. 32:407 - Applications of minors; revocation; applications of persons less than twenty-one years of age",
    url: "https://legis.la.gov/legis/Law.aspx?d=88384",
  },
  {
    key: "stat-general-speed",
    quote:
      "No person shall drive a vehicle on the highway within this " +
      "state at a speed greater than is reasonable and prudent under " +
      "the conditions and potential hazards then existing,",
    source: STATUTES,
    section: "R.S. 32:64 - General speed law",
    url: "https://legis.la.gov/legis/Law.aspx?d=88494",
  },
  {
    key: "stat-hand-signals",
    quote:
      "Left turn--hand and arm extended horizontally, with the hand " +
      "open and the back of the hand to the rear. (2) Right " +
      "turn--hand and arm extended upward at an angle of forty-five " +
      "degrees from shoulder or elbow, with the hand open and the " +
      "back of the hand to the rear.",
    source: STATUTES,
    section: "R.S. 32:106 - Methods of giving hand and arm signals",
    url: "https://legis.la.gov/legis/Law.aspx?d=88028",
  },
  {
    key: "stat-handsfree",
    quote:
      "no person shall operate any wireless telecommunications device " +
      "while operating a motor vehicle upon any public road or " +
      "highway, unless the motor vehicle is lawfully stationary.",
    source: STATUTES,
    section: "R.S. 32:59 - Use of wireless telecommunications device prohibited; exceptions",
    url: "https://legis.la.gov/legis/Law.aspx?d=1429150",
  },
  {
    key: "stat-handsfree-exceptions",
    quote:
      "Report a traffic collision, medical emergency, other " +
      "emergency, or serious road hazard. (2) Report a situation in " +
      "which the person believes that an individual is in jeopardy of " +
      "serious injury or death.",
    source: STATUTES,
    section: "R.S. 32:59 - Use of wireless telecommunications device prohibited; exceptions",
    url: "https://legis.la.gov/legis/Law.aspx?d=1429150",
  },
  {
    key: "stat-handsfree-school-zone",
    quote:
      "If a violation of this Section occurs in a school zone or in a " +
      "highway construction zone it shall be a primary offense and " +
      "shall be punishable as follows: (a) By a fine of two hundred " +
      "fifty dollars.",
    source: STATUTES,
    section: "R.S. 32:59 - Use of wireless telecommunications device prohibited; exceptions",
    url: "https://legis.la.gov/legis/Law.aspx?d=1429150",
  },
  {
    key: "stat-implied-consent",
    quote:
      "Any person, regardless of age, who operates a motor vehicle " +
      "upon the public highways of this state shall be deemed to have " +
      "given consent, subject to the provisions of R.S.",
    source: STATUTES,
    section: "R.S. 32:661 - Operating a vehicle under the influence of alcoholic beverages or illegal substance or controlled dangerous substances; implied consent to chemical tests; administering of test and presumptions",
    url: "https://legis.la.gov/legis/Law.aspx?d=88498",
  },
  {
    key: "stat-insurance-in-vehicle",
    quote:
      "shall operate or allow the operation of such vehicle upon any " +
      "public road, street, or highway in this state unless there is " +
      "contained within the vehicle one of the following documents " +
      "evidencing that the motor vehicle is in compliance with R.S. " +
      "32:861 relative to compulsory motor vehicle liability " +
      "security:",
    source: STATUTES,
    section: "R.S. 32:863.1 - Evidence of compulsory motor vehicle liability security contained in vehicle; enforcement; penalty; fees",
    url: "https://legis.la.gov/legis/Law.aspx?d=88607",
  },
  {
    key: "stat-insurance-limits",
    quote:
      "Fifteen thousand dollars because of bodily injury to or death " +
      "of one person in any one accident, and (b) Subject to said " +
      "limit for one person, thirty thousand dollars because of " +
      "bodily injury to or death of two or more persons in any one " +
      "accident, and (c) Twenty-five thousand dollars because of " +
      "damage to or destruction of property of others in any one " +
      "accident.",
    source: STATUTES,
    section: "R.S. 32:900 - Motor Vehicle Liability Policy\" defined",
    url: "https://legis.la.gov/legis/Law.aspx?d=88632",
  },
  {
    key: "stat-left-turn-yield",
    quote:
      "The driver of a vehicle within an intersection intending to " +
      "turn to the left shall yield the right of way to all vehicles " +
      "approaching from the opposite direction which are within the " +
      "intersection or so close thereto as to constitute an immediate " +
      "hazard.",
    source: STATUTES,
    section: "R.S. 32:122 - Vehicle turning left at intersection",
    url: "https://legis.la.gov/legis/Law.aspx?d=88030",
  },
  {
    key: "stat-max-speed",
    quote:
      "No person shall operate a vehicle on any highway of this state " +
      "in excess of fifty-five miles per hour, unless a lower maximum " +
      "speed is posted on the highway, except as follows: (1) No " +
      "person shall operate a vehicle on any interstate or controlled " +
      "access highway of this state in excess of seventy miles per " +
      "hour.",
    source: STATUTES,
    section: "R.S. 32:61 - Maximum speed limit",
    url: "https://legis.la.gov/legis/Law.aspx?d=88480",
  },
  {
    key: "stat-move-over",
    quote:
      "When driving on an interstate highway or other highway with " +
      "two or more lanes traveling in the same direction, yield the " +
      "right-of-way by making a lane change into a lane not adjacent " +
      "to the parked vehicle, if possible with due regard to safety " +
      "and traffic conditions.",
    source: STATUTES,
    section: "R.S. 32:125 - Procedure on approach of an authorized emergency vehicle; passing a parked or disabled emergency or nonemergency vehicle",
    url: "https://legis.la.gov/legis/Law.aspx?d=88033",
  },
  {
    key: "stat-no-do-pass-signal",
    quote:
      "shall not be flashed on one side only on a parked or disabled " +
      "vehicle, or flashed as a courtesy or \"do pass\" signal to " +
      "operators of other vehicles approaching from the rear.",
    source: STATUTES,
    section: "R.S. 32:104 - Turning movements and required signals",
    url: "https://legis.la.gov/legis/Law.aspx?d=88023",
  },
  {
    key: "stat-no-passing-conditions",
    quote:
      "when approaching the crest of a grade or upon a curve in the " +
      "highway, where the driver's view is obstructed within such " +
      "distance as to create a hazard in the event another vehicle " +
      "might approach from the opposite direction;",
    source: STATUTES,
    section: "R.S. 32:76 - Further limitations on passing on the left",
    url: "https://legis.la.gov/legis/Law.aspx?d=88568",
  },
  {
    key: "stat-obey-devices",
    quote:
      "The driver of any vehicle shall obey the instructions of any " +
      "official traffic-control device applicable thereto placed in " +
      "accordance with the provisions of this Chapter, unless " +
      "otherwise directed by a traffic or police officer, subject to " +
      "the exceptions granted the driver of an authorized emergency " +
      "vehicle in this Chapter.",
    source: STATUTES,
    section: "R.S. 32:231 - Obedience to and required traffic-control devices",
    url: "https://legis.la.gov/legis/Law.aspx?d=88197",
  },
  {
    key: "stat-obey-officer",
    quote:
      "No person shall fail or refuse to comply with any lawful order " +
      "or direction of any police officer or weights and standards " +
      "police officer invested by law with authority to direct, " +
      "control, or regulate traffic.",
    source: STATUTES,
    section: "R.S. 32:56 - Obedience to police officers, weights and standards police officers, and traffic signs",
    url: "https://legis.la.gov/legis/Law.aspx?d=88471",
  },
  {
    key: "stat-open-container",
    quote:
      "It shall be unlawful for the operator of a motor vehicle or " +
      "the passenger in or on a motor vehicle, while the motor " +
      "vehicle is operated on a public highway or right-of-way, to " +
      "possess an open alcoholic beverage container, or to consume an " +
      "alcoholic beverage, in the passenger area of a motor vehicle.",
    source: STATUTES,
    section: "R.S. 32:300 - Possession of alcoholic beverages in motor vehicles",
    url: "https://legis.la.gov/legis/Law.aspx?d=410591",
  },
  {
    key: "stat-park-off-highway",
    quote:
      "no person shall stop, park, or leave standing any vehicle, " +
      "whether attended or unattended, upon the paved or main " +
      "traveled part of the highway when it is practicable to stop, " +
      "park or so leave such vehicle off such part of said highway",
    source: STATUTES,
    section: "R.S. 32:141 - Stopping, standing, or parking outside business or residence districts",
    url: "https://legis.la.gov/legis/Law.aspx?d=88063",
  },
  {
    key: "stat-parking-prohibited",
    quote:
      "On a sidewalk; (2) In front of a public or private driveway; " +
      "(3) Within an intersection; (4) Within fifteen feet of a fire " +
      "hydrant; (5) On a crosswalk; (6) Within twenty feet of a " +
      "crosswalk at an intersection;",
    source: STATUTES,
    section: "R.S. 32:143 - Stopping, standing or parking prohibited in specified places",
    url: "https://legis.la.gov/legis/Law.aspx?d=88071",
  },
  {
    key: "stat-parking-railroad-50",
    quote:
      "Within fifty feet of the nearest rail of a railroad crossing; " +
      "(10) Within twenty feet of the driveway entrance to any fire " +
      "station, and on the side of a street opposite the entrance to " +
      "any fire station within seventy-five feet of said entrance, " +
      "when properly posted;",
    source: STATUTES,
    section: "R.S. 32:143 - Stopping, standing or parking prohibited in specified places",
    url: "https://legis.la.gov/legis/Law.aspx?d=88071",
  },
  {
    key: "stat-passing-100-feet",
    quote:
      "In every event the overtaking vehicle must return to the " +
      "right-hand side of the roadway before coming within one " +
      "hundred feet of any vehicle approaching from the opposite " +
      "direction.",
    source: STATUTES,
    section: "R.S. 32:75 - Limitations on passing on the left",
    url: "https://legis.la.gov/legis/Law.aspx?d=88557",
  },
  {
    key: "stat-railroad-50-15",
    quote:
      "the driver of such vehicle shall stop within fifty feet but " +
      "not less than fifteen feet from the nearest rail of such " +
      "railroad, and shall not proceed until he can do so safely.",
    source: STATUTES,
    section: "R.S. 32:171 - Motor vehicles approaching railroad crossings; reporting violations; penalties",
    url: "https://legis.la.gov/legis/Law.aspx?d=88127",
  },
  {
    key: "stat-railroad-gates",
    quote:
      "No person shall drive any vehicle through, around, or under " +
      "any crossing gate or barrier at a railroad crossing while such " +
      "gate or barrier is closed or is being opened or closed when an " +
      "approaching railroad train or other on-track equipment is " +
      "plainly visible and is in hazardous proximity to such " +
      "crossing.",
    source: STATUTES,
    section: "R.S. 32:171 - Motor vehicles approaching railroad crossings; reporting violations; penalties",
    url: "https://legis.la.gov/legis/Law.aspx?d=88127",
  },
  {
    key: "stat-railroad-no-stop",
    quote:
      "No person shall stop a motor vehicle upon any railroad " +
      "crossing.",
    source: STATUTES,
    section: "R.S. 32:171 - Motor vehicles approaching railroad crossings; reporting violations; penalties",
    url: "https://legis.la.gov/legis/Law.aspx?d=88127",
  },
  {
    key: "stat-refusal-suspension",
    quote:
      "Except as otherwise provided in this Paragraph, one year from " +
      "the date of suspension on a refusal.",
    source: STATUTES,
    section: "R.S. 32:667 - Seizure of license; circumstances; temporary license",
    url: "https://legis.la.gov/legis/Law.aspx?d=88506",
  },
  {
    key: "stat-right-turn-position",
    quote:
      "Right turns. Both the approach for a right turn and a right " +
      "turn shall be made as close as practicable to the right-hand " +
      "curb or edge of the roadway.",
    source: STATUTES,
    section: "R.S. 32:101 - Required position and method of turning at intersections",
    url: "https://legis.la.gov/legis/Law.aspx?d=88017",
  },
  {
    key: "stat-row-left-yields",
    quote:
      "When two vehicles approach or enter an intersection from " +
      "different highways at approximately the same time, the driver " +
      "of the vehicle on the left, shall yield the right of way to " +
      "the vehicle on the right.",
    source: STATUTES,
    section: "R.S. 32:121 - Vehicle approaching or entering intersection",
    url: "https://legis.la.gov/legis/Law.aspx?d=88029",
  },
  {
    key: "stat-school-bus-30",
    quote:
      "The driver of a vehicle upon a highway meeting or overtaking " +
      "from any direction any school bus that has stopped for the " +
      "purpose of receiving or discharging any school children shall " +
      "stop the vehicle not less than thirty feet from the school bus " +
      "before reaching such school bus",
    source: STATUTES,
    section: "R.S. 32:80 - Overtaking and passing certain school buses",
    url: "https://legis.la.gov/legis/Law.aspx?d=88593",
  },
  {
    key: "stat-school-bus-amber",
    quote:
      "The driver of any school bus shall activate the amber lamps at " +
      "least one hundred feet, but not more than five hundred feet, " +
      "before every stop for which activation is required",
    source: STATUTES,
    section: "R.S. 32:80 - Overtaking and passing certain school buses",
    url: "https://legis.la.gov/legis/Law.aspx?d=88593",
  },
  {
    key: "stat-school-bus-two-way-lane",
    quote:
      "A highway with one lane in each direction and with a dedicated " +
      "two-way left-turn lane shall not be considered a divided " +
      "highway with separate roadways for purposes of this Section.",
    source: STATUTES,
    section: "R.S. 32:80 - Overtaking and passing certain school buses",
    url: "https://legis.la.gov/legis/Law.aspx?d=88593",
  },
  {
    key: "stat-seatbelt-driver",
    quote:
      "Each driver of a passenger car, van, sports utility vehicle, " +
      "or truck having a gross weight of twenty-six thousand pounds " +
      "or less in this state shall have a safety belt properly " +
      "fastened about his or her body at all times when the vehicle " +
      "is in forward motion.",
    source: STATUTES,
    section: "R.S. 32:295.1 - Safety belt use; tags indicating exemption",
    url: "https://legis.la.gov/legis/Law.aspx?d=88232",
  },
  {
    key: "stat-security-required",
    quote:
      "It shall be the duty of the registered owner of a motor " +
      "vehicle to maintain the security hereinabove required.",
    source: STATUTES,
    section: "R.S. 32:861 - Security required",
    url: "https://legis.la.gov/legis/Law.aspx?d=88604",
  },
  {
    key: "stat-signal-100-feet",
    quote:
      "he shall give a signal of such intention in the manner " +
      "described hereafter and such signal shall be given " +
      "continuously during not less than the last one hundred (100) " +
      "feet traveled by the vehicle before turning.",
    source: STATUTES,
    section: "R.S. 32:104 - Turning movements and required signals",
    url: "https://legis.la.gov/legis/Law.aspx?d=88023",
  },
  {
    key: "stat-signal-before-slowing",
    quote:
      "No person shall stop or suddenly decrease the speed of a " +
      "vehicle without first giving an appropriate signal in the " +
      "manner provided herein to the driver of any vehicle " +
      "immediately to the rear when there is opportunity to give such " +
      "signal.",
    source: STATUTES,
    section: "R.S. 32:104 - Turning movements and required signals",
    url: "https://legis.la.gov/legis/Law.aspx?d=88023",
  },
  {
    key: "stat-signal-green",
    quote:
      "Vehicular traffic facing a circular green signal may proceed " +
      "straight through or turn right or left unless a sign at such " +
      "place prohibits either such turn.",
    source: STATUTES,
    section: "R.S. 32:232 - Traffic-control signals",
    url: "https://legis.la.gov/legis/Law.aspx?d=88198",
  },
  {
    key: "stat-signal-red-turn",
    quote:
      "Except when a sign prohibits a turn, vehicular traffic facing " +
      "any steady red signal may cautiously enter the intersection to " +
      "turn right, or to turn left from a one-way street into a " +
      "one-way street, or to U-turn at a signalized U-turn after " +
      "stopping as required by Subparagraph (a) or Subparagraph (b) " +
      "of this Paragraph.",
    source: STATUTES,
    section: "R.S. 32:232 - Traffic-control signals",
    url: "https://legis.la.gov/legis/Law.aspx?d=88198",
  },
  {
    key: "stat-single-lane",
    quote:
      "A vehicle shall be driven as nearly as practicable entirely " +
      "within a single lane and shall not be moved from such lane " +
      "until the driver has first ascertained that such movement can " +
      "be made with safety.",
    source: STATUTES,
    section: "R.S. 32:79 - Driving on roadway laned for traffic",
    url: "https://legis.la.gov/legis/Law.aspx?d=88592",
  },
  {
    key: "stat-slow-speed",
    quote:
      "no person shall operate or drive a motor vehicle upon the " +
      "highways of this state at such a slow speed as to impede the " +
      "normal and reasonable movement of traffic.",
    source: STATUTES,
    section: "R.S. 32:64 - General speed law",
    url: "https://legis.la.gov/legis/Law.aspx?d=88494",
  },
  {
    key: "stat-stop-sign",
    quote:
      "every driver and operator of a vehicle approaching a stop " +
      "intersection indicated by a stop sign shall stop before " +
      "entering the crosswalk on the near side at a clearly marked " +
      "stop line,",
    source: STATUTES,
    section: "R.S. 32:123 - Stop signs and yield signs; penalties for violations",
    url: "https://legis.la.gov/legis/Law.aspx?d=88031",
  },
  {
    key: "stat-submit-suspension",
    quote:
      "If the person submitted to the test and the test results show " +
      "a blood alcohol level of 0.08 percent or above by weight, his " +
      "driving privileges shall be suspended for one hundred eighty " +
      "days from the date of suspension on first offense violation",
    source: STATUTES,
    section: "R.S. 32:667 - Seizure of license; circumstances; temporary license",
    url: "https://legis.la.gov/legis/Law.aspx?d=88506",
  },
  {
    key: "stat-truck-400-feet",
    quote:
      "The driver of a motor truck, when traveling upon a highway " +
      "outside a business or residential area, shall not follow " +
      "another motor truck within four hundred feet",
    source: STATUTES,
    section: "R.S. 32:81 - Following vehicles; exceptions",
    url: "https://legis.la.gov/legis/Law.aspx?d=88594",
  },
  {
    key: "stat-underage-002",
    quote:
      "The crime of underage operating a vehicle while impaired is " +
      "the operating of any motor vehicle, aircraft, watercraft, " +
      "vessel, or other means of conveyance when the operator's blood " +
      "alcohol concentration is 0.02 percent or more by weight based " +
      "on grams of alcohol per one hundred cubic centimeters of " +
      "blood, if the operator is under the age of twenty-one.",
    source: STATUTES14,
    section: "R.S. 14:98.6 - Underage operating while impaired (NOTE: Title 14, Criminal Law - NOT Title 32)",
    url: "https://legis.la.gov/legis/Law.aspx?d=919569",
  },
  {
    key: "stat-uturn-500-feet",
    quote:
      "No vehicle shall be turned so as to proceed in the opposite " +
      "direction upon any curve, or upon the approach to or near the " +
      "crest of a grade, where such vehicle cannot be seen by the " +
      "driver of any other vehicle approaching from either direction " +
      "within five hundred feet.",
    source: STATUTES,
    section: "R.S. 32:102 - Turning on curve or crest of grade prohibited",
    url: "https://legis.la.gov/legis/Law.aspx?d=88018",
  },
  {
    key: "stat-yield-sign",
    quote:
      "The driver or operator of a vehicle approaching a yield sign " +
      "shall slow down to a speed reasonable for the existing " +
      "conditions, or shall stop if necessary, before entering the " +
      "crosswalk on the near side of the intersection",
    source: STATUTES,
    section: "R.S. 32:123 - Stop signs and yield signs; penalties for violations",
    url: "https://legis.la.gov/legis/Law.aspx?d=88031",
  },
  {
    key: "stop-here-on-red",
    quote:
      "If there is not a \"NO TURN ON RED\" sign at the traffic light, " +
      "after stopping at the stop line and checking for traffic and " +
      "pedestrians, you may turn right on red.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Regulatory Signs, Stop Here on Red (page 28)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=33",
  },
  {
    key: "stop-lines",
    quote:
      "Stop Lines are solid white lines painted across the traffic " +
      "lanes at intersections and pedestrian crosswalks indicating " +
      "the exact place at which to stop.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Lane Markings, Stop Lines (page 36)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=41",
  },
  {
    key: "stop-sign-rule",
    quote:
      "A stop sign has eight sides and is red with white letters. You " +
      "must stop behind the stop line or crosswalk, if one is " +
      "present. Look for crossing vehicles and pedestrians in all " +
      "directions and yield the right-of-way. When it is safe to do " +
      "so, you may enter the intersection.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Regulatory Signs, Stop Sign (page 27)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=32",
  },
  {
    key: "stopping-60-and-30",
    quote:
      "At 60 mph, it can take about 4 to 5 seconds or 359 feet to " +
      "react to a problem and bring the vehicle to a stop.  At 30 " +
      "mph, it can take about 2 to 3 seconds or 123 feet to react to " +
      "a problem and bring the vehicle to a stop.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Looking and Scanning Ahead (page 62)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=67",
  },
  {
    key: "submerged-30-60-seconds",
    quote:
      "If your vehicle enters water, it will only float on the " +
      "surface for 30 to 60 seconds so make every attempt to get out " +
      "of the vehicle immediately.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Becoming Submerged in Water (page 119)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=124",
  },
  {
    key: "submerged-side-window",
    quote:
      "Kick out a side window. Do not try to break or kick out the " +
      "windshield. Windshields are now designed with glass that does " +
      "not shatter.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Becoming Submerged in Water (page 120)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=125",
  },
  {
    key: "submit-suspension-levels",
    quote:
      "If you submit to the test and you are 21 years of age or " +
      "older, and the test results show a BAC level of 0.08% to " +
      "0.149%, your driving privileges will be suspended for 180 " +
      "days. If your BAC level is 0.15% or greater, your driving " +
      "privileges will be suspended for two years (730 day).",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Administrative Per Se (page 126)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=131",
  },
  {
    key: "suspension-extension",
    quote:
      "EACH conviction of driving under suspension will cause your " +
      "suspension period to be extended for one year. Driving while " +
      "your license is suspended will be cause for arrest, a court " +
      "fine and/or time in jail.",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Losing Your Driving Privileges (page 127)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=132",
  },
  {
    key: "texting-4-6-seconds",
    quote:
      "Texting causes a driver to look away from the road for 4.6 " +
      "seconds. At a speed of 55 mph, the vehicle travels the length " +
      "of a football field in that time frame.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Cellular Phones (page 78)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=83",
  },
  {
    key: "three-distractions",
    quote:
      "Visual - taking your eyes off the road to look at something " +
      "else Manual - taking your hands off the wheel to do something " +
      "(i.e., adjusting the radio) Cognitive - taking your mind off " +
      "what you're doing",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Distracted Driving (page 110)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=115",
  },
  {
    key: "three-in-front-seat",
    quote:
      "It is against the law for more than three persons to occupy " +
      "the front seat of a moving vehicle.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Other Laws You Should Know (page 96)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=101",
  },
  {
    key: "three-point-turnabout",
    quote:
      "Use it only when the road or street is too narrow to make a " +
      "U-turn and you cannot go around the block. This type of turn " +
      "should only be used on a two-lane roadway.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Three-Point Turnabout (page 67)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=72",
  },
  {
    key: "three-second-rule",
    quote:
      "Since most people have trouble judging distances, the " +
      "\"3-second rule\" makes it easier for you. You can use it at any " +
      "speed. How to use the three second rule:  Choose some object " +
      "ahead of the vehicle in front of you, such as a sign, pole or " +
      "a tree.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Following Distances (page 65)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=70",
  },
  {
    key: "three-types-distraction",
    quote:
      "Using a cell phone while driving involves all three types of " +
      "distraction: visual, taking your eyes off the road, manual, " +
      "taking your hands off the wheel, and cognitive by taking your " +
      "mind and focus off your driving.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Cellular Phones (page 77)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=82",
  },
  {
    key: "tip-purpose",
    quote:
      "TEMPORARY INSTRUCTION PERMIT (TIP) - For use only when a " +
      "student is enrolled in a driver education or pre-licensing " +
      "course.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Classes of License (page 2)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=7",
  },
  {
    key: "tire-blowout",
    quote:
      "The most important rule is - don't panic and don't slam on the " +
      "brakes. You should: Hold the steering wheel firmly and keep " +
      "your car in the same lane. There may be a strong pull to the " +
      "right or left. 1. Let your car slow down. Don't use the brakes " +
      "until you have slowed to a safer speed, (around 30 mph). 2.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Tire blowout (page 117)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=122",
  },
  {
    key: "tire-tread-depth",
    quote:
      "Ensure tires have adequate tread - at least 1/16 of an inch " +
      "depth between all treads.",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Preparing to Drive (page 44)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=49",
  },
  {
    key: "total-stopping-50",
    quote:
      "At 50 mph, your vehicle will travel a minimum of 268 feet.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Stopping Distances (page 65)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=70",
  },
  {
    key: "tow-bar-15-feet",
    quote:
      "When towing another vehicle, the draw bar or other connection " +
      "must of sufficient strength to pull all towed weight and must " +
      "not exceed 15 feet.",
    source: HANDBOOK,
    section: "Chapter 10: General Information for Class D \"Chauffeur's\" License - Trailers and Towed Vehicles (page 129)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=134",
  },
  {
    key: "traffic-stop-produce",
    quote:
      "Be prepared to produce your driver's license, vehicle " +
      "registration certificate, and current proof of insurance.  " +
      "Remain in the vehicle unless the officer tells you otherwise.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Police Officers (page 86)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=91",
  },
  {
    key: "trailer-brakes-3000",
    quote:
      "All trailers with a gross weight of 3,000 pounds or more are " +
      "required to be equipped with brakes.",
    source: HANDBOOK,
    section: "Chapter 10-A: Trailer Safety - Braking Systems (page 133)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=138",
  },
  {
    key: "truck-400-feet",
    quote:
      "On rural highways, outside residential areas or business " +
      "districts, drivers of motor trucks must not follow within 400 " +
      "feet of one another except to pass.",
    source: HANDBOOK,
    section: "Chapter 10: General Information for Class D \"Chauffeur's\" License - Following Distance (page 129)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=134",
  },
  {
    key: "truck-bed-passengers",
    quote:
      "No person(s) under the age of twelve years shall be permitted " +
      "to be a passenger in the open bed of a truck. No person(s) of " +
      "any age is permitted to be a passenger in the open bed of a " +
      "truck when the truck is moving upon an interstate highway of " +
      "this state.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Other Laws You Should Know (page 96)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=101",
  },
  {
    key: "truck-following-4-5",
    quote:
      "In good road and weather conditions you should leave a gap of " +
      "at least four to five (4-5) seconds between your vehicle and " +
      "the truck in front of you, and an even longer gap when " +
      "conditions are poor.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Following trucks (page 84)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=89",
  },
  {
    key: "truck-mirrors-rule",
    quote:
      "If you cannot see a truck driver's face in one of his mirrors, " +
      "the driver cannot see you and probably does not know you are " +
      "there.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Sharing the Road with Big Trucks (page 83)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=88",
  },
  {
    key: "truck-squeeze-play",
    quote:
      "When a truck (or bus) needs to make a right turn, it will " +
      "sometimes swing wide to the left in order to safely turn right " +
      "and clear the corner of a curb or other obstruction. Sometimes " +
      "space from other lanes is used to clear corners.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Avoid Squeeze Play (page 85)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=90",
  },
  {
    key: "truck-stopping-290",
    quote:
      "A tractor trailer loaded with freight, safe-rated tire, and " +
      "properly adjusted brakes traveling at 55 miles per hour on a " +
      "clear, dry roadway requires a minimum of 290 feet to come to a " +
      "complete stop.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Sharing the Road with Big Trucks (page 83)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=88",
  },
  {
    key: "turn-signal-100-feet",
    quote:
      "The law requires that you signal and get into the proper lane " +
      "at least 100 feet before making a turn.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Rules for Turning (page 89)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=94",
  },
  {
    key: "turning-left-yield",
    quote:
      "Before turning left across oncoming traffic, look for a safe " +
      "gap in the traffic.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Looking and Scanning Ahead, Turning Left (page 62)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=67",
  },
  {
    key: "two-and-ten-not-recommended",
    quote:
      "This is the preferred method of steering, the 2 and 10 o'clock " +
      "position is not recommended because it can be dangerous in " +
      "vehicles equipped with air bags.",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Steering Methods (page 49)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=54",
  },
  {
    key: "two-way-left-turn-lane",
    quote:
      "The designated center lane may be used by vehicles traveling " +
      "in either direction. For left turn maneuvers ONLY. The lane " +
      "must NEVER be used for travel or passing.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Lane Markings, Two-Way Left Turn Lane (page 36)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=41",
  },
  {
    key: "uncontrolled-rural-intersections",
    quote:
      "When approaching an uncontrolled rural intersection slow down " +
      "and be prepared to stop for crossing or oncoming traffic.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - Rural Roads (page 104)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=109",
  },
  {
    key: "under-17-curfew",
    quote:
      "Drivers below age 17 are prohibited from driving between the " +
      "hours of 11:00 p.m. and 5:00 a.m., unless accompanied by a " +
      "licensed parent, guardian, or adult at least 21 years of age " +
      "or sibling18 years of age.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Other Laws You Should Know (page 97)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=102",
  },
  {
    key: "under-17-no-device",
    quote:
      "Louisiana laws state no person who is seventeen years of age " +
      "or younger shall operate a motor vehicle on any public road or " +
      "highway in this state while using any wireless " +
      "telecommunications device to engage in a call or write, send " +
      "or read a text-based communication.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Distracted Driving (page 111)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=116",
  },
  {
    key: "under-21-suspension",
    quote:
      "If you submit to the test and you are under 21 years of age, " +
      "and the test results show a BAC level of 0.02% or more, your " +
      "driving",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Administrative Per Se (page 126)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=131",
  },
  {
    key: "understeer-correction",
    quote:
      "Many drivers instinctively increase the steering angle when " +
      "their vehicles under steer. Increasing the steering angle " +
      "increases the cornering force, making the front tires lose " +
      "traction completely. The correct reaction is to lift off the " +
      "accelerator and apply the brakes.",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Steering (page 49)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=54",
  },
  {
    key: "used-vehicle-five-days",
    quote:
      "You have five days from the date of sale to apply for a title " +
      "in your name.",
    source: HANDBOOK,
    section: "Chapter 11: Motor Vehicle Registration and Title - Used Vehicles (page 135)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=140",
  },
  {
    key: "vehicle-fire",
    quote:
      "If smoke comes from under the hood: 1. Drive off the road " +
      "clear of traffic and stop. 2. Turn off the engine and all " +
      "electrical switches. 3. Get all passengers out of and away " +
      "from the vehicle. Poisonous fumes may fill the vehicle. 4.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Fire (page 117)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=122",
  },
  {
    key: "vehicle-size-limits",
    quote:
      "Maximum width: 8 feet for most vehicles. The load will not " +
      "project more than 6 inches beyond the width of the body. 8 " +
      "feet 6 inches for buses. Maximum height: 13 feet 6 inches for " +
      "all vehicles.",
    source: HANDBOOK,
    section: "Chapter 10: General Information for Class D \"Chauffeur's\" License - Vehicle Size (page 128)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=133",
  },
  {
    key: "vehicular-homicide",
    quote:
      "Penalties include fines of not less than $2,000 nor more than " +
      "$15,000 and imprisonment for not less than five years or more " +
      "than 30 years. At least one-year jail time will be mandatory.",
    source: HANDBOOK,
    section: "Chapter 9: Driving Offenses - Vehicular Homicide (page 126)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=131",
  },
  {
    key: "visibility-400-feet",
    quote:
      "At 60 mph, if you cannot see at least 400 feet ahead, you are " +
      "driving too fast for your visibility. At 30 mph, if you cannot " +
      "see at least 150 feet ahead, you may not be driving safely.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Looking and Scanning Ahead (page 62)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=67",
  },
  {
    key: "vision-2040",
    quote:
      "The screening will determine if your vision meets minimum " +
      "standards (20/40) for safe driving.",
    source: HANDBOOK,
    section: "Chapter 1: Getting a Driver's License - Driver's License Tests, Vision Test (page 8)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=13",
  },
  {
    key: "visual-lead-20-30",
    quote:
      "Looking 20 to 30 seconds ahead will allow time to prepare for " +
      "traffic conditions.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Looking and Scanning Ahead (page 61)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=66",
  },
  {
    key: "warning-signs",
    quote:
      "Warning Signs - These signs tell a driver of possible danger " +
      "that might be ahead, such as warning you to slow down and be " +
      "prepared to stop if necessary, or a hazard or special " +
      "situation on the roadway that is ahead. These signs are " +
      "usually yellow with black lettering or symbols and are diamond " +
      "shaped.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Traffic Signs, Warning Signs (page 25)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=30",
  },
  {
    key: "wet-pavement-first-rain",
    quote:
      "Road surfaces are most slippery immediately after the rain " +
      "begins to fall. This is because the oil and grease on the " +
      "pavement have not yet been washed away. Driving on a road " +
      "covered with oil and water can be like driving on ice.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Driving on Wet Pavement (page 74)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=79",
  },
  {
    key: "wheels-off-pavement",
    quote:
      "If your wheels should slip off the edge of the road, do not " +
      "try to turn back onto the pavement right away. This could " +
      "cause you to swerve into the lane of oncoming traffic. You " +
      "should stay on the shoulder: 1. Slow down by gently using your " +
      "brakes. 2.",
    source: HANDBOOK,
    section: "Chapter 8: Driving Hazards and Emergencies - Wheels roll off the pavement (page 116)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=121",
  },
  {
    key: "white-cane-right-of-way",
    quote:
      "Pedestrians using guide dogs or white canes with or without a " +
      "red tip must be given the right of way at all times.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Visually Impaired Pedestrians (page 77)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=82",
  },
  {
    key: "wildlife-dusk-dawn",
    quote:
      "Use caution when driving at dawn and dusk and between the " +
      "months of October through December, when animals are most " +
      "active.",
    source: HANDBOOK,
    section: "Chapter 7: Interstate Driving and Rural Roads - Animals (page 104)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=109",
  },
  {
    key: "window-tint",
    quote:
      "Having non-transparent material affixed to the front " +
      "windshield or front side-windows is illegal, unless prescribed " +
      "by a physician.",
    source: HANDBOOK,
    section: "Chapter 6: Traffic Laws and Regulations - Other Laws You Should Know (page 96)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=101",
  },
  {
    key: "winter-following-distance",
    quote:
      "In unfavorable driving conditions, reduce your speed. Allow " +
      "the distance to increase between your car and the one in front " +
      "of you. Remember that it takes more time to stop on icy roads.",
    source: HANDBOOK,
    section: "Chapter 4: Basic Driving and Safety - Seasonal Changes and How They Affect Driving (page 52)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=57",
  },
  {
    key: "work-zone-fines-double",
    quote:
      "Reduced speed limits are set to protect the drivers and " +
      "workers. In Louisiana, traffic fines are double for " +
      "construction zones.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Highway Work Zones (page 31)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=36",
  },
  {
    key: "wrong-lane-must-turn",
    quote:
      "You must go ahead and make the turn. Drive around the block " +
      "and return to the street you want.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Lane Markings (page 37)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=42",
  },
  {
    key: "wrong-way-sign",
    quote:
      "This sign tells you that your vehicle is moving in the wrong " +
      "direction. You will see this sign on expressway ramps a short " +
      "distance past the \"DO NOT ENTER\" sign.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Regulatory Signs, Wrong Way (page 29)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=34",
  },
  {
    key: "yield-pedestrians-always",
    quote:
      "You must yield to pedestrians at all times. Even if they are " +
      "not in a crosswalk and crossing the street where they should " +
      "not be (also known as jaywalking), which is illegal, you must " +
      "stop for them.",
    source: HANDBOOK,
    section: "Chapter 5: Safe Driving Habits - Pedestrian Safety (page 76)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=81",
  },
  {
    key: "yield-sign-rule",
    quote:
      "A yield sign is a red and white downward pointing triangle " +
      "with red letters. It means you must slow down and allow " +
      "traffic that has the rightof-way to cross before entering.",
    source: HANDBOOK,
    section: "Chapter 3: Signs, Traffic Lights, and Pavement Markings - Regulatory Signs, Yield Sign (page 27)",
    url: "https://public.powerdms.com/LADPSC/documents/347039#page=32",
  },
];
