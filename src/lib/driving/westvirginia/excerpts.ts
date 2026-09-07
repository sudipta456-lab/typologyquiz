import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the West Virginia bank. Two sources sit
// behind them.
//
//  - The West Virginia Driver's Licensing Handbook, published by the West
//    Virginia Division of Motor Vehicles (an agency of the WV Department of
//    Transportation) and linked from dmv.wv.gov. Its cover carries the only
//    edition label the state gives it: "Revised 07/2026". It runs 90 PDF
//    pages; the printed page numbers start ten pages in, so printed page 42 is
//    PDF page 52, and the "#page=" anchor in each url below is the PDF page
//    while the "(page N)" in each section is the printed one.
//  - Chapter 17C (Traffic Regulations and Laws of the Road) and Chapter 17B
//    (Motor Vehicle Driver's Licenses) of the West Virginia Code, on the
//    Legislature's own server. The handbook says of itself on its foreword
//    page that it "is only a partial digest of West Virginia motor vehicle
//    laws", which is an invitation to check. The statutory quotes here each
//    fill a hole the handbook leaves: the three-foot minimum for passing a
//    bicycle (17C-7-3, absent from the book entirely), the 500-foot minimum
//    for following an emergency vehicle (17C-14-9), the requirement that a
//    motorcycle, moped or school bus run headlights at ALL times (17C-15-2),
//    the statutory parking distances the book abbreviates (17C-13-3), the
//    one-week wait after a failed exam and the two-attempt allowance for
//    under-18 applicants (17B-2-6), and the current distracted-driving
//    penalties (17C-14-15), which the handbook's own fine table predates.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. Only the
// normalisations the sibling banks use were applied, to the extracted text and
// to nothing else: curly quotes, en dashes and em dashes fold to ASCII; runs
// of whitespace, including the line breaks the PDF inserts mid-sentence,
// collapse to single spaces; bullet glyphs become spaces, so a stem followed
// by its bulleted list runs together in the order the source prints it - no
// words are changed, dropped or reordered.
//
// The sources' own slips are preserved exactly as they stand, because a quote
// that has been tidied up is no longer a quote. Among them: the handbook's
// "non family passengers" without its hyphen, its "three -to-four second
// following distance" with the stray space, "any street or highway abutting
// the school grounds", and the statute's "yield the right- of-way" spacing.
//
// One mechanical repair was applied to the PDF before any of this, and it is
// worth naming because it changes nothing a reader sees. The DMV's file is an
// InDesign export whose Type0 fonts carry no /ToUnicode map, so most of the
// book extracts as mojibake ("5IF MBOF" for "The lane"), and at every
// f-ligature the exporter leaves an invisible phantom space that extractors
// report inside the word ("fl ashers"). The scratch copy this bank was checked
// against has the missing character maps rebuilt from the embedded fonts' own
// glyph order and those phantom spaces swapped for the exact typesetting
// displacement they carried, so all 90 pages render pixel-for-pixel as the
// original. No word of the handbook was altered.

export const westvirginiaExcerpts: HandbookExcerpt[] = [
  {
    key: "def-bac",
    quote:
      "Blood Alcohol Concentration (BAC): The amount of alcohol "
      + "in the bloodstream. For drivers over the age of 21, it is "
      + "against the law to drive if the BAC is 0.08% or higher. "
      + "For drivers under the age of 21, it is against the law to "
      + "drive if the BAC is 0.02% or higher",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=9",
  },
  {
    key: "def-blind-spots",
    quote:
      "Blind Spots: Areas on both sides of vehicles where you "
      + "cannot see without turning your head",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=9",
  },
  {
    key: "def-divided-highway",
    quote:
      "Divided Highway: Highway with separate roadways for "
      + "traffic proceeding in opposite directions, separated by an "
      + "unpaved strip of land, a raised median, or other physical "
      + "barrier",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=9",
  },
  {
    key: "def-following-distance",
    quote:
      "Following Distance: Space cushion between your vehicle and "
      + "the vehicle directly ahead of you",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=9",
  },
  {
    key: "def-gdl",
    quote:
      "Graduated Driver's License (GDL): A 3-phase graduated "
      + "licensing program, for ages 15 to 18, that allows young "
      + "drivers to develop their driving skills and "
      + "self-confidence in a series of safe, measured steps.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=9",
  },
  {
    key: "def-acceleration-lane",
    quote:
      "Acceleration Lane: Extra lane on the side of a high-speed "
      + "highway that permits you to enter the highway to pick up "
      + "speed before merging with traffic in through lanes",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=9",
  },
  {
    key: "def-authorized-emergency",
    quote:
      "Authorized Emergency Vehicle: Fire, police, chartered "
      + "rescue squad, ambulance, and other emergency vehicles",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=9",
  },
  {
    key: "def-implied-consent",
    quote:
      "Implied Consent Law: West Virginia state law provides that "
      + "each licensed driver agrees to take a chemical test if "
      + "charged with driving under the influence. Failure to "
      + "submit to this test will result in suspension of the "
      + "driving privilege for at least one (1) year.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=10",
  },
  {
    key: "def-intersection",
    quote:
      "Intersection: Area common to two (2) or more highways that "
      + "meet at or near right angles, whether or not one highway "
      + "crosses another.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=10",
  },
  {
    key: "def-moped",
    quote:
      "Moped: Motorcycle or motor-driven-type cycle that is "
      + "equipped with two (2) or three (3) wheels, foot pedals to "
      + "permit peddling, and an independent power source providing "
      + "a maximum of two (2) horsepower. The maximum engine "
      + "displacement is 50 cc (cubic centimeters) and the maximum "
      + "speed is 30 mph",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=10",
  },
  {
    key: "def-right-of-way",
    quote: "Right-Of-Way: Privilege of the immediate use of the highway",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=10",
  },
  {
    key: "def-roadway",
    quote:
      "Roadway: Portion of highway improved, designed, or "
      + "ordinarily used for vehicular travel, exclusive of the "
      + "berm or shoulder",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=10",
  },
  {
    key: "def-school-bus",
    quote:
      "School Bus: Motor vehicle owned by a public governmental "
      + "agency or privately owned and operated for the "
      + "transportation of children to and/or from school",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=10",
  },
  {
    key: "def-revocation",
    quote:
      "Revocation: When a driver's license and all privileges to "
      + "drive a motor vehicle on public highways are terminated "
      + "and shall not be renewed.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=10",
  },
  {
    key: "def-suspension",
    quote:
      "Suspension: When a driver's license and all privileges to "
      + "drive a motor vehicle on public highways are temporarily "
      + "withdrawn.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=10",
  },
  {
    key: "def-low-speed-vehicle",
    quote:
      "Low-speed vehicle means a four-wheeled motor vehicle "
      + "specifically manufactured as a low-speed vehicle so "
      + "designated on the manufacturer's certificate of origin "
      + "(MCO). Modified golf carts and ATVs do not meet the "
      + "definition.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=10",
  },
  {
    key: "def-low-speed-where",
    quote:
      "Low-speed vehicles may only be operated on private roads, "
      + "on public roads, and streets within the corporate limits "
      + "of a municipality where the speed limit is not more than "
      + "twenty-five (25) miles per hour",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=10",
  },
  {
    key: "def-wireless-device",
    quote:
      "Wireless Communications Device: A handheld device used to "
      + "access a wireless telephone service or a text messaging "
      + "device",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Definitions",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=10",
  },
  {
    key: "must-be-licensed",
    quote:
      "If you live in West Virginia and want to drive a motor "
      + "vehicle on public roads, you must have a West Virginia "
      + "driver's license, unless you are expressly exempt. You "
      + "must carry your driver's license with you when you drive.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Who Must Be Licensed to Drive? (page 1)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=11",
  },
  {
    key: "denied-under-18-school",
    quote:
      "Any person who is under the age of 18 and not enrolled in, "
      + "or graduated from, an approved educational institution",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Who Can Be Denied a Driver's License? (page 1)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=11",
  },
  {
    key: "new-resident-30-days",
    quote:
      "After establishing WV residency, new residents who want to "
      + "drive in WV must apply for a WV driver's license within 30 "
      + "days.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - New Resident (page 6)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=16",
  },
  {
    key: "address-change-20-days",
    quote:
      "If you change your address you are required to notify, in "
      + "writing, the DMV within 20 days of the change.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - In-State Change of Address (page 6)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=16",
  },
  {
    key: "expired-three-years",
    quote:
      "Any person renewing a WV driver's license, including a "
      + "CDL, that has been expired for three (3) years or more is "
      + "required to retest.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Expired Driver's License (page 7)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=17",
  },
  {
    key: "license-color-coding",
    quote:
      "Applicants 15 to 17 years old are issued a driver's "
      + "license or instruction permit that is vertical and "
      + "color-coded red. Applicants 18 to 20 years old, are issued "
      + "a vertical driver's license or instruction permit that is "
      + "color-coded blue.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Driver's License Color-Coding (page 7)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=17",
  },
  {
    key: "vision-2040-one-eye",
    quote:
      "To qualify for a driver's license in WV you must have at "
      + "least 20/40 vision in one (1) eye.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Graduated Driver's License (page 9)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=19",
  },
  {
    key: "level1-requirements",
    quote:
      "You must be at least 15 years of age. You must have "
      + "written consent from a Parent or Legal Guardian on form "
      + "DMV-DS-23P. You may only drive with a licensed driver who "
      + "is at least 21 years old in the right front passenger "
      + "seat.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 1 GDL Instruction Permit Requirements (page 9)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=19",
  },
  {
    key: "know-to-drive-online",
    quote:
      "Applicants may take the written test Online. Online "
      + "testing is considered part of the Driver's License "
      + "Application process. THE CERTIFICATE RECEIVED FROM THIS "
      + "TEST IS NOT PERMISSION TO DRIVE. YOU MUST GO TO A DMV "
      + "LOCATION FOR PROCESSING.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Know to Drive Online Testing (page 9)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=19",
  },
  {
    key: "regular-permit-18",
    quote:
      "The instruction permit allows you to operate a motor "
      + "vehicle when a licensed driver who is 21 or older occupies "
      + "the front seat with you. The instruction permit will be "
      + "valid for a period of six (6) months.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Regular Instruction Permit - Ages 18 and Over (page 9)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=19",
  },
  {
    key: "regular-permit-30-days",
    quote:
      "If you have never been licensed as Level 2 graduated "
      + "driver's license or comparable, you must maintain the "
      + "instruction permit for at least 30 days before you are "
      + "eligible to take the road skills test.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Regular Instruction Permit - Ages 18 and Over (page 9)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=19",
  },
  {
    key: "level1-obtain",
    quote:
      "To obtain a Level 1 GDL instruction permit, you must be at "
      + "least 15 years old, pass a vision screening, pass a "
      + "knowledge test, and the consent (on form DMV- DS-23P) of "
      + "your parent or legal guardian indicating permission for "
      + "issuance of the Level 1 GDL instruction permit.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 1 GDL Instruction Permit (page 9)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=19",
  },
  {
    key: "no-electronics-exam-room",
    quote:
      "No cell phones, smart glasses, PDA, Bluetooth devices, "
      + "electronic devices, etc. will be permitted in the exam "
      + "room. Only the applicant taking the test is allowed in the "
      + "exam room.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Graduated Driver's License (page 9)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=19",
  },
  {
    key: "level1-hours",
    quote: "You may only drive between the hours of 5:00 am and 10:00 pm.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 1 GDL Instruction Permit (page 10)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=20",
  },
  {
    key: "level1-passengers",
    quote:
      "You may only have two (2) additional non family passengers "
      + "in addition to the supervising, licensed adult driver.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 1 GDL Instruction Permit (page 10)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=20",
  },
  {
    key: "level1-two-convictions",
    quote:
      "Two (2) convictions will result in revocation of your "
      + "instruction permit (for 90 days)",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 1 GDL Instruction Permit (page 10)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=20",
  },
  {
    key: "level1-zero-tolerance",
    quote:
      "ZERO Tolerance: You may not have any measurable amount of "
      + "alcohol in your system while operating a motor vehicle.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 1 GDL Instruction Permit (page 10)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=20",
  },
  {
    key: "knowledge-test-fee",
    quote: "The fee for a knowledge test is $7.50 for each attempt.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 1 GDL Instruction Permit (page 10)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=20",
  },
  {
    key: "level1-wireless",
    quote:
      "You may not use a wireless communication device while "
      + "operating a motor vehicle, unless the use of the wireless "
      + "communication device is for contacting a 9-1-1 system",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 1 GDL Instruction Permit (page 10)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=20",
  },
  {
    key: "level1-expiry",
    quote:
      "A Level 1 GDL instruction permit will be issued up to the "
      + "applicant's 18th birthday, and will expire on the 18th "
      + "birthday.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 1 GDL Instruction Permit (page 10)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=20",
  },
  {
    key: "level1-grace-period",
    quote:
      "However, to allow sufficient time to complete the Road "
      + "Skills Examination, a 30-day grace period (beyond the "
      + "applicant's 18th birthday) will be allowed.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 1 GDL Instruction Permit (page 10)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=20",
  },
  {
    key: "level1-nonrenewable",
    quote:
      "A Level 1 GDL instruction permit is nonrenewable. If you "
      + "surrender your Level 1 GDL instruction permit, for any "
      + "reason, you will be required to complete the examination "
      + "process, maintain the Level 1 GDL instruction permit for "
      + "180 consecutive days, conviction-free",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 1 GDL Instruction Permit (page 10)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=20",
  },
  {
    key: "level2-180-days",
    quote:
      "Have a minimum of 180 consecutive days of conviction-free "
      + "driving at Level 1 GDL immediately preceding the date of "
      + "your Level 2 application",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 2 GDL Intermediate Driver's License (page 10)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=20",
  },
  {
    key: "level2-50-hours",
    quote:
      "Have a parent or legal guardian certification (log sheet) "
      + "of a minimum of 50 hours behind the wheel, including the "
      + "minimum of 10 hours at night or complete a driver's "
      + "education course approved by the West Virginia Department "
      + "of Education",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 2 GDL Intermediate Driver's License (page 10)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=20",
  },
  {
    key: "level2-night-rule",
    quote:
      "Level 2 GDL intermediate driver's license holders may "
      + "drive without a supervising, licensed adult driver who is "
      + "age 21 or older between the hours of 5:00 am and 10:00 pm.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 2 GDL Intermediate Driver's License (page 10)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=20",
  },
  {
    key: "level2-night-supervised",
    quote:
      "Level 2 GDL intermediate driver's license must drive with "
      + "a supervising, licensed adult driver who is age 21 or "
      + "older between the hours of 10:00 pm and 5:00 am.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 2 GDL Intermediate Driver's License (page 10)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=20",
  },
  {
    key: "level2-night-exceptions",
    quote:
      "The exceptions to this rule are when the licensee is "
      + "participating in, going to, or returning from: (1) lawful "
      + "employment; (2) a school-sanctioned activity; (3) a "
      + "religious activity; or (4) an emergency situation that "
      + "requires the licensee to prevent bodily injury or the "
      + "death of another.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 2 GDL Intermediate Driver's License (page 10)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=20",
  },
  {
    key: "level2-passengers",
    quote:
      "A Level 2 GDL intermediate driver's license holder may not "
      + "operate a motor vehicle during their first six months with "
      + "any non-family members under the age of 20 as a passenger "
      + "and",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 2 GDL Intermediate Driver's License (page 11)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=21",
  },
  {
    key: "level2-passengers-second",
    quote:
      "may not operate a motor vehicle with more than one (1) "
      + "non-family member under the age of 20 as a passenger "
      + "during the second six (6) months.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 2 GDL Intermediate Driver's License (page 11)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=21",
  },
  {
    key: "level2-alcohol-belts",
    quote:
      "Level 2 GDL intermediate driver's license may not operate "
      + "a motor vehicle with any measurable alcohol in their "
      + "system and must require all occupants to follow the seat "
      + "belt law.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 2 GDL Intermediate Driver's License (page 11)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=21",
  },
  {
    key: "level2-surrender",
    quote:
      "If you surrender your Level 2 GDL intermediate driver's "
      + "license for any reason and are under the age of 18, you "
      + "must start over with a Level 1 GDL instruction permit.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 2 GDL Intermediate Driver's License (page 11)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=21",
  },
  {
    key: "level1-conviction-free-6",
    quote:
      "You must be conviction-free for 6 months in order to "
      + "graduate to a Level 2 Intermediate driver's license. With "
      + "each conviction the 6-month window starts over from the "
      + "date of the conviction.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Levels 1 and 2 GDL Violations and Convictions (page 11)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=21",
  },
  {
    key: "level2-conviction-free-12",
    quote:
      "You are required to be conviction-free for 12 months prior "
      + "to graduating to a Level 3 GDL. If you receive a "
      + "conviction, the 12-month conviction-free period will start "
      + "over again at the point of that conviction.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Levels 1 and 2 GDL Violations and Convictions (page 11)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=21",
  },
  {
    key: "level2-second-conviction",
    quote:
      "The second conviction for a moving violation requires the "
      + "revocation of your driving privilege until you are 18 and "
      + "you will be required to retest as a first-time applicant.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Levels 1 and 2 GDL Violations and Convictions (page 11)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=21",
  },
  {
    key: "under-18-wireless",
    quote:
      "Drivers under the age of 18 may not use a wireless "
      + "communication device while operating a motor vehicle, "
      + "unless the cell phone is used for contacting a 9-1-1 "
      + "system as stated in WV State Code",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Levels 1 and 2 GDL Violations and Convictions (page 11)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=21",
  },
  {
    key: "level3-requirements",
    quote:
      "To be eligible for a Level 3 GDL, you must have completed "
      + "12 months of conviction-free driving under a Level 2 GDL, "
      + "be at least 17 years old, and have successfully completed "
      + "all requirements.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Level 3 License GDL (page 12)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=22",
  },
  {
    key: "drive-for-five",
    quote:
      "Under the \"Drive for Five\" program, all driver's licenses "
      + "will expire in a year in which your age is divisible by "
      + "five",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Drive for Five (page 12)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=22",
  },
  {
    key: "carry-your-license",
    quote:
      "Be sure you have your driver's license with you when you "
      + "drive. You are required to provide your driver's license "
      + "or instruction permit upon demand to any law enforcement "
      + "officer, magistrate, or official of the DMV.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Carry Your Driver's License (page 13)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=23",
  },
  {
    key: "motorcycle-permit-test",
    quote:
      "Pass a 25-question motorcycle knowledge examination with a "
      + "grade of 80% or better.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Motorcycle Instruction Permit (page 14)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=24",
  },
  {
    key: "motorcycle-permit-daylight",
    quote:
      "The motorcycle instruction permit allows you to ride a "
      + "motorcycle on public roads during daylight hours without "
      + "passengers.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Motorcycle Instruction Permit (page 14)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=24",
  },
  {
    key: "documents-in-vehicle",
    quote:
      "you will need to keep your valid proof of West Virginia "
      + "liability insurance (certificate of insurance) as well as "
      + "current registration card with you.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Documents to Keep in Your Vehicle (page 15)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=25",
  },
  {
    key: "documents-show-officer",
    quote:
      "If you are stopped by a law enforcement officer for a "
      + "moving violation, you are required to show this proof in "
      + "addition to your driver's license.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter I - Documents to Keep in Your Vehicle (page 15)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=25",
  },
  {
    key: "crash-reporting",
    quote:
      "Crashes resulting in injury to, or death of, any person or "
      + "property damage in excess of $1,000 must be reported by "
      + "the quickest means possible (oral or written) within five "
      + "(5) days to the local police department if it occurs "
      + "within a municipality",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter II - Crashes (page 16)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=26",
  },
  {
    key: "crash-no-insurance",
    quote:
      "If your vehicle was not covered by the required West "
      + "Virginia liability insurance on the date of the crash, "
      + "your motor vehicle registration and driving privilege will "
      + "be suspended.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter II - Crashes (page 16)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=26",
  },
  {
    key: "insurance-minimums",
    quote:
      "West Virginia law mandates that all motorists driving on "
      + "the state's public roads must carry West Virginia motor "
      + "vehicle liability insurance.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter II - Compulsory Insurance (page 16)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=26",
  },
  {
    key: "insurance-carry",
    quote:
      "In addition, a certificate of insurance or other proof of "
      + "West Virginia liability insurance, which can be obtained "
      + "from your insurance company, must be carried in your "
      + "vehicle at all times, along with a valid vehicle "
      + "registration card.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter II - Compulsory Insurance (page 17)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=27",
  },
  {
    key: "insurance-on-phone",
    quote:
      "An image displayed on a wireless communication device, as "
      + "provided in Section17D-2A-4, is also a valid proof of "
      + "insurance.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter II - Compulsory Insurance (page 17)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=27",
  },
  {
    key: "hands-free-required",
    quote:
      "The use of any electronic communications device while "
      + "driving a motor vehicle on a public street or highway is "
      + "prohibited unless the use is accomplished by hands-free "
      + "equipment.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter II - The Use of Communication Devices While Operating a Motor Vehicle (page 17)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=27",
  },
  {
    key: "hands-free-definition",
    quote:
      "A hands-free electronic communication device has a feature "
      + "or function that allows the user to engage it without the "
      + "use of either or both hands.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter II - The Use of Communication Devices While Operating a Motor Vehicle (page 17)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=27",
  },
  {
    key: "device-emergency-exception",
    quote:
      "Use of an electronic communications device to report a "
      + "fire, traffic crash, serious road hazard, or emergency to "
      + "the appropriate authorities",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter II - The Use of Communication Devices While Operating a Motor Vehicle (page 18)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=28",
  },
  {
    key: "points-two-years",
    quote:
      "Points remain on your driving record for two (2) years "
      + "from the conviction date.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter II - Point System (page 18)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=28",
  },
  {
    key: "points-six-and-twelve",
    quote:
      "When you have six (6) points or more on your record, the "
      + "DMV will send you a letter of caution, urging you to be "
      + "careful while driving and obedient of traffic laws. When "
      + "you accumulate 12 points on your record, your driver's "
      + "license is subject to suspension.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter II - Point System (page 18)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=28",
  },
  {
    key: "points-defensive-driving",
    quote:
      "You may have three (3) points deducted from your record by "
      + "completing an approved eight (8) hour defensive driving "
      + "class. Motorists are only eligible for this point "
      + "reduction once every 12 months.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter II - Point System (page 18)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=28",
  },
  {
    key: "driver-license-compact",
    quote:
      "West Virginia is a member of the Driver License Compact. "
      + "Traffic violations you receive in other states will become "
      + "part of your West Virginia driving record and, if "
      + "warranted, points will be assessed.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter II - Driving in Other States (page 18)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=28",
  },
  {
    key: "fraudulent-license",
    quote:
      "It is also illegal to use someone else's license as your "
      + "own, to permit someone else to use your driver's license, "
      + "to permit someone to use your identity documents to obtain "
      + "a license, or to use or display a fictitious license. The "
      + "penalty for these offenses is a 90-day suspension.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter II - Fraudulent Use of Driver's Licenses (page 18)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=28",
  },
  {
    key: "mandatory-revocation",
    quote:
      "Two (2) or more moving violation convictions as a "
      + "graduated driver Providing false information to the DMV "
      + "Leaving the scene of a crash that results in death or "
      + "personal injury Three (3) convictions of reckless driving "
      + "in 24 months Racing on streets or highways (drag racing)",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter II - Mandatory Driver's License Revocation (page 19)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=29",
  },
  {
    key: "driving-revoked-dui",
    quote:
      "The penalty for driving while your driver's license is "
      + "revoked on a DUI is a mandatory minimum jail sentence of "
      + "30 days to six (6) months. The law also requires that your "
      + "driving privilege be revoked for six (6) months.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter II - Driving While a Driver's License Is Revoked or Suspended (page 19)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=29",
  },
  {
    key: "under-21-zero-tolerance",
    quote:
      "The legal drinking age in West Virginia is 21 years old. "
      + "West Virginia has a zero tolerance law for drivers under "
      + "the age of 21 who unwisely and illegally choose to drive "
      + "with any measurable alcohol in their system.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter III - Under Age Drinking and Driving (page 21)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=31",
  },
  {
    key: "sobering-time",
    quote:
      "Physical exercise, black coffee, fresh air, cold showers, "
      + "and other \"home remedies\" do not effectively help someone "
      + "sober up. Time is the only sobering influence.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter III - Driving Impaired or Under the Influence (page 21)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=31",
  },
  {
    key: "drink-equivalence",
    quote:
      "The amount of alcohol in a one-ounce shot of 100-proof "
      + "whiskey, six-ounce glass of wine, or a 12-ounce can of "
      + "beer is the same.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter III - Driving Impaired or Under the Influence (page 21)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=31",
  },
  {
    key: "bac-thresholds",
    quote:
      "In West Virginia, a BAC of more than 0.05 percent and less "
      + "than 0.08 percent is relevant evidence to presume that a "
      + "person is driving while his or her ability to drive is "
      + "impaired. If a driver's BAC is 0.08 percent or more, they "
      + "are presumed to be driving under the influence.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter III - Knowing Your Limits (page 21)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=31",
  },
  {
    key: "designated-driver",
    quote:
      "The designated driver is a selected or volunteer companion "
      + "who will not drink alcohol during the time they have the "
      + "responsibility for driving their friend(s) home after a "
      + "drinking situation.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter III - Designated Driver (page 21)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=31",
  },
  {
    key: "prescription-drugs",
    quote:
      "Using drugs, even if prescribed by a physician or bought "
      + "over the counter, can cause drowsiness, loss of "
      + "coordination, hallucinations or total body malfunctions.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter III - Other Drugs (page 22)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=32",
  },
  {
    key: "implied-consent-refusal",
    quote:
      "If you refuse to take the Breathalyzer, your privilege to "
      + "operate a motor vehicle will be revoked for a period of "
      + "one (1) year and up to life.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter III - Implied Consent and the Chemical Test (page 22)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=32",
  },
  {
    key: "dui-under-18",
    quote:
      "If you are under the age of 18, a DUI offense will result "
      + "in revocation of your driver's license until you reach the "
      + "age of 18 or for the applicable statutory period of "
      + "revocation or suspension, whichever is longer and until "
      + "all other requirements are met.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter III - Penalties for Driving Under the Influence (page 22)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=32",
  },
  {
    key: "dui-safety-treatment",
    quote:
      "Any time your driver's license is revoked or suspended for "
      + "a DUI, you must complete a prescribed Safety and Treatment "
      + "program before you will be eligible to reinstate your "
      + "driving privileges.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter III - Penalties for Driving Under the Influence (page 22)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=32",
  },
  {
    key: "interlock-mandatory",
    quote:
      "If the driver has been revoked for two (2) or more DUI's "
      + "or related offenses within a ten-year period, "
      + "participation is mandatory.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter III - How Does a DUI Affect Your Driving Privileges? (page 23)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=33",
  },
  {
    key: "drowsy-18-hours",
    quote:
      "After being awake for 18 hours (time varies), driving "
      + "skills are comparable to someone under the influence of "
      + "drugs or alcohol.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter III - Drowsy Driving Is Impaired Driving (page 23)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=33",
  },
  {
    key: "drowsy-nap",
    quote:
      "If you are drowsy, don't drive. Pull over to a safe area "
      + "as soon as you can and take a short nap. As little as "
      + "10-20 minutes of sleep can make a big difference.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter III - How to Prevent Drowsy Driving (page 23)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=33",
  },
  {
    key: "knowledge-exam-content",
    quote:
      "The knowledge examination has at least 25 questions based "
      + "on the basic knowledge, traffic rules, regulations, signs, "
      + "and markings found in the handbook.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IV - Knowledge Examination (page 24)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=34",
  },
  {
    key: "knowledge-exam-pass",
    quote:
      "You must answer 19 out of the 25 questions correctly to "
      + "pass the test. There is a time limit on the test and any "
      + "questions not answered in the prescribed time will be "
      + "considered incorrect.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IV - Knowledge Examination (page 24)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=34",
  },
  {
    key: "vision-screening",
    quote:
      "If your vision is 20/40 or better using both eyes, either "
      + "with or without conventional corrective lenses, and you "
      + "show no serious visual defect, you will pass the vision "
      + "screening.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IV - Vision Screening (page 24)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=34",
  },
  {
    key: "corrective-lenses-restriction",
    quote:
      "If you require glasses or contact lenses to have a vision "
      + "level of 20/40 or better, your driver's license will show "
      + "a restriction code for \"corrective lenses.\"",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IV - Vision Screening (page 24)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=34",
  },
  {
    key: "retest-one-week",
    quote:
      "Applicants who fail either the knowledge or road skills "
      + "test may not be tested twice within a period of one (1) "
      + "week, in accordance with Section17B-2-6, West Virginia "
      + "State Code.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IV - Retest Information (page 26)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=36",
  },
  {
    key: "dui-awareness-card",
    quote:
      "The DMV requires that all first-time applicants for a "
      + "driver's license or motorcycle-only West Virginia driver's "
      + "license complete a short DUI awareness course given upon "
      + "passing the road skills test.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IV - DUI Awareness Cards (page 25)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=35",
  },
  {
    key: "vehicle-check",
    quote:
      "A valid inspection sticker and proof of insurance on the "
      + "vehicle is required before the vehicle can be used for the "
      + "road skills test.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IV - Vehicle Check (page 25)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=35",
  },
  {
    key: "safety-equipment-demo",
    quote:
      "The applicant must know the location and function of all "
      + "safety equipment, including the parking/emergency brake. "
      + "If the applicant is unable to both locate and demonstrate "
      + "the use of any of the vehicle safety equipment, this will "
      + "result in an automatic failure on the road skills test.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IV - Vehicle Check (page 25)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=35",
  },
  {
    key: "window-tint",
    quote: "Windows tinted to less than 35 percent light transmission",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IV - Illegal Equipment (page 25)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=35",
  },
  {
    key: "road-test-stop-gap",
    quote:
      "A safe gap when stopping behind another vehicle is to stop "
      + "where you can see the rear tires of the vehicle ahead of "
      + "you. Keep the front wheels aimed straight ahead.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IV - Road Test, Turns (page 29)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=39",
  },
  {
    key: "road-test-auto-fail-belt",
    quote: "If you do not use your safety belt",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IV - Road Skills Test Automatic Failures (page 31)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=41",
  },
  {
    key: "road-test-auto-fail-device",
    quote: "If at anytime you use your wireless communications device",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IV - Road Skills Test Automatic Failures (page 31)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=41",
  },
  {
    key: "road-test-no-stop-line",
    quote:
      "If there is no stop line or crosswalk, stop before your "
      + "vehicle enters the intersection.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IV - Road Test, General Driving (page 31)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=41",
  },
  {
    key: "octagon-stop",
    quote:
      "These eight-sided signs are reserved for stop signs. These "
      + "signs mean you must stop completely. Give the right-of-way "
      + "to pedestrians and to all cross traffic before moving "
      + "again.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Single Message Shaped Signs, Octagon (page 34)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=44",
  },
  {
    key: "stop-sign-where",
    quote:
      "At a stop sign, you must stop behind any marked or "
      + "unmarked crosswalk (joining sidewalks on opposite sides of "
      + "the street). If there are no pavement markings or cross "
      + "walks, you must stop before entering an intersection. Stop "
      + "at a place where you can see traffic coming from all "
      + "directions.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Single Message Shaped Signs, Octagon (page 34)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=44",
  },
  {
    key: "triangle-yield",
    quote:
      "This shape requires that you yield the right-of-way to "
      + "cross traffic or to merging traffic.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Single Message Shaped Signs, Triangle (upside down) (page 34)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=44",
  },
  {
    key: "pennant-no-passing",
    quote: "This sign marks the beginning of a no-passing zone.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Single Message Shaped Signs, Pennant (page 34)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=44",
  },
  {
    key: "circle-railroad",
    quote:
      "This yellow-and-black sign gives advance warning of a "
      + "railroad crossing ahead.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Single Message Shaped Signs, Circle (page 34)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=44",
  },
  {
    key: "pentagon-school-speed",
    quote:
      "The maximum speed limit in a school zone is 15 m.p.h. when "
      + "children are present or when",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Single Message Shaped Signs, Pentagon (page 34)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=44",
  },
  {
    key: "square-rect-signs",
    quote:
      "Most signs are white with black letters. When the message "
      + "is very important, the sign is red with white letters. A "
      + "red outline with a diagonal bar through it always means "
      + "\"NO.\"",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Square & Rectangular Signs (page 35)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=45",
  },
  {
    key: "no-u-turn",
    quote:
      "This sign means do not turn around in the middle of a "
      + "street or an intersection.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Square & Rectangular Signs, No U-Turn Sign (page 35)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=45",
  },
  {
    key: "wrong-way-do-not-enter",
    quote:
      "Wrong Way or Do Not Enter - These signs warn you that "
      + "traffic in that direction is prohibited. If you choose a "
      + "traffic lane marked with either of these signs you will "
      + "likely run into another vehicle.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Square & Rectangular Signs (page 35)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=45",
  },
  {
    key: "dual-turn-lane",
    quote:
      "This sign is posted over a highway lane that is used only "
      + "for making left turns from either direction. Traffic from "
      + "either direction will be using this lane. Never use a "
      + "turning lane to overtake and pass other vehicles.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Square & Rectangular Signs, Dual Turn Lane (page 35)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=45",
  },
  {
    key: "speed-limit-signs",
    quote:
      "Speed Limit - These signs show the fastest speed you may "
      + "drive under optimal weather and road conditions.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Square & Rectangular Signs, Speed Limit (page 35)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=45",
  },
  {
    key: "advisory-speed-signs",
    quote:
      "Advisory speed signs can be found at interstate entrances "
      + "and exit ramps which show the maximum recommended safe "
      + "speed for driving on the ramp. These advisory signs are "
      + "black on yellow.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Square & Rectangular Signs, Speed Limit (page 35)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=45",
  },
  {
    key: "diamond-warning",
    quote:
      "These diamond-shaped signs will usually appear without "
      + "explanatory words beneath them. These signs are yellow "
      + "with black letters. They warn of possible danger ahead and "
      + "may have symbols or written warnings.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Diamond & Warning Signs (page 36)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=46",
  },
  {
    key: "pedestrian-school-yellow-green",
    quote:
      "Pedestrian and school warning signs may be yellow-green "
      + "with black letters.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Diamond & Warning Signs (page 36)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=46",
  },
  {
    key: "warning-slippery",
    quote:
      "This section of highway is more slippery than other roads "
      + "when wet. Reduce your speed.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Diamond & Warning Signs (page 36)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=46",
  },
  {
    key: "warning-hill",
    quote:
      "Warns you of hills where special care must be taken. Slow "
      + "down before you start downhill.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Diamond & Warning Signs (page 36)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=46",
  },
  {
    key: "warning-curve",
    quote:
      "The curve is too sharp to take at the regular highway "
      + "speed. An advisory speed sign may be attached.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Diamond & Warning Signs (page 36)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=46",
  },
  {
    key: "construction-orange",
    quote:
      "Various traffic control devices are used in construction "
      + "and maintenance work areas to direct drivers or "
      + "pedestrians safely through the work zone, and to provide "
      + "for the safety of the highway workers.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Construction and Maintenance Signs and Devices (page 37)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=47",
  },
  {
    key: "flaggers",
    quote:
      "Flaggers wear orange vests, shirts, or jackets and use "
      + "red-orange flags or stop/slow paddles to direct traffic "
      + "through work zones.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Construction and Maintenance Signs, Flaggers (page 37)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=47",
  },
  {
    key: "construction-signs-shape",
    quote:
      "Construction and maintenance signs are used to notify "
      + "drivers of unusual or potentially dangerous conditions in "
      + "or near work areas. Most signs in work areas are "
      + "diamond-shaped. A few signs are rectangular.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Construction and Maintenance Signs (page 37)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=47",
  },
  {
    key: "barricade-stripes",
    quote:
      "Stripes sloping downward to the right mean the driver "
      + "should bear to the right. Conversely, stripes sloping "
      + "downward to the left mean bear to the left.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Construction and Maintenance Signs, Channeling Devices (page 37)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=47",
  },
  {
    key: "guide-signs-colors",
    quote:
      "Most guide signs are white on green. Motorist services "
      + "signs are white on blue. Signs for parks and public "
      + "recreation areas are white on brown.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Guide Signs (page 38)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=48",
  },
  {
    key: "route-markers",
    quote:
      "WV & U.S. Route Markers - Are generally black on white. "
      + "Interstate markers - Are red, white, and blue",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Guide Signs (page 38)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=48",
  },
  {
    key: "crossbuck",
    quote:
      "Railroad crossing signs can be round or diamond shaped, "
      + "yellow with black symbols, or black letters on white bars "
      + "in the shape of an X called a crossbuck.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Railroad Crossing Signs and Signals (page 39)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=49",
  },
  {
    key: "railroad-second-train",
    quote:
      "When there are two (2) or more tracks, you must be alert "
      + "for a second train on the other set of tracks.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Railroad Crossing Signs and Signals (page 39)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=49",
  },
  {
    key: "railroad-clear-tracks",
    quote:
      "you should not enter a railroad crossing until the vehicle "
      + "ahead has moved far enough ahead that you can clear the "
      + "tracks. Otherwise, you may be trapped on the tracks and "
      + "hit by another vehicle or by a train.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Railroad Crossing Signs and Signals (page 39)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=49",
  },
  {
    key: "green-light",
    quote:
      "Circular Green / GO - Drivers facing this signal may enter "
      + "the intersection and go straight through, turn right, or "
      + "left, unless, other traffic control devices (signs or "
      + "pavement markings) prohibit certain movements.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Traffic Lights (page 39)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=49",
  },
  {
    key: "green-yield-left",
    quote:
      "A driver who is facing a circular green indication and "
      + "wishes to turn left must yield to oncoming vehicles.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Traffic Lights (page 39)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=49",
  },
  {
    key: "green-arrow",
    quote:
      "Drivers facing the signal may enter the intersection to "
      + "make the movement shown by the arrow. When the green arrow "
      + "is shown in a left-turn signal, it usually means that "
      + "opposing traffic is stopped.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Traffic Lights (page 39)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=49",
  },
  {
    key: "steady-yellow",
    quote:
      "Steady Circular Yellow - This means that the green light "
      + "is ending and will change to red. You should only drive "
      + "through a yellow light if the vehicle clearance is within "
      + "the intersection.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Traffic Lights (page 39)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=49",
  },
  {
    key: "steady-red",
    quote:
      "Traffic facing a steady circular red signal must stop "
      + "unless making a movement permitted by a green arrow. The "
      + "driver must remain stopped until allowed to proceed by "
      + "another indication.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Traffic Lights (page 39)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=49",
  },
  {
    key: "turn-on-red",
    quote:
      "A driver may turn right on red at the intersection of "
      + "two-way streets, or may turn left on red from a one-way "
      + "street to another one-way street. These turns may be made "
      + "after yielding to all other traffic and pedestrians, and "
      + "if no signs are posted to prohibit them.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Traffic Lights (page 39)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=49",
  },
  {
    key: "red-arrow",
    quote:
      "Steady Red Arrow/ LEFT TURN - Come to a complete stop "
      + "before reaching the intersection, stop line or cross walk "
      + "for the direction indicated by the arrow. Remain stopped "
      + "as long as the signal is red.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Traffic Lights (page 39)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=49",
  },
  {
    key: "intersection-flashers-red",
    quote:
      "A circular flashing red is the same as a stop sign; that "
      + "is, drivers must come to a complete stop and yield to all "
      + "other traffic and pedestrians.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Intersection Flashers (page 40)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=50",
  },
  {
    key: "intersection-flashers-yellow",
    quote:
      "Drivers facing a circular flashing yellow light may "
      + "proceed through the intersection with caution.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Intersection Flashers (page 40)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=50",
  },
  {
    key: "signals-out-of-order",
    quote:
      "When traffic control signals are not needed or are out of "
      + "order, they may be placed in flashing operations. When "
      + "this happens, they are the same as intersection flashers.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Intersection Flashers (page 40)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=50",
  },
  {
    key: "lane-yellow-x",
    quote:
      "Yellow X: The lane is about to be closed or its direction "
      + "is about to reverse. Move out of it as soon as you can.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Lane Use Control Signals (page 40)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=50",
  },
  {
    key: "lane-red-x",
    quote:
      "Red X: The lane is closed or being used by opposing "
      + "traffic. Do not use this lane.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Lane Use Control Signals (page 40)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=50",
  },
  {
    key: "lane-green-arrow",
    quote: "Green Downward Arrow: Traffic may use the lane under the arrow.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Lane Use Control Signals (page 40)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=50",
  },
  {
    key: "crosswalk-signals",
    quote:
      "Hand Symbol or DON'T WALK- when these appear pedestrians "
      + "are not to cross the crosswalk. Walking Man or WALK - when "
      + "these appear pedestrians are safe to cross the street "
      + "inside the crosswalk lines.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Crosswalk Signals (page 40)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=50",
  },
  {
    key: "blind-pedestrian",
    quote:
      "A blind person who is on foot and using a guide dog or "
      + "other service animal, or is carrying a white cane or "
      + "walking stick, has the right-of-way on a highway, street, "
      + "or road regardless of whether they are in a crosswalk or "
      + "not.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Crosswalk Signals (page 40)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=50",
  },
  {
    key: "markings-white-yellow",
    quote:
      "WHITE lines separate traffic lanes moving in the SAME "
      + "direction. YELLOW lines separate traffic lanes moving in "
      + "the OPPOSITE direction.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Pavement Markings (page 41)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=51",
  },
  {
    key: "broken-yellow",
    quote:
      "Broken Yellow - Broken yellow lines separate traffic "
      + "moving in opposite directions. If this marking is on your "
      + "side of the road, you may pass when it is safe.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Pavement Markings (page 41)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=51",
  },
  {
    key: "solid-yellow",
    quote:
      "Solid Yellow - Solid yellow lines also separate traffic "
      + "moving in opposite directions. If a solid yellow line is "
      + "on your side of the road, you MUST NOT PASS.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Pavement Markings (page 41)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=51",
  },
  {
    key: "broken-white",
    quote:
      "On roadways which have more than one (1) lane moving in "
      + "one direction, traffic lanes are separated by broken white "
      + "lines. Broken black lines are sometimes added to make the "
      + "white easier to see. Drive within these lines and never "
      + "straddle them, except when changing lanes.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Pavement Markings (page 41)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=51",
  },
  {
    key: "solid-white",
    quote:
      "Solid White - Solid white lines mark the edge of the "
      + "pavement. At night or in bad weather, they help you stay "
      + "on the road. When solid white lines separate lanes of "
      + "traffic moving in the same direction, DO NOT CHANGE LANES.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Pavement Markings (page 41)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=51",
  },
  {
    key: "diamond-lanes",
    quote:
      "White diamond shapes painted in the roadway to inform "
      + "drivers the lane is designated for car pools, bicycles, or "
      + "buses.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Pavement Markings (page 41)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=51",
  },
  {
    key: "center-left-turn-lane",
    quote:
      "Center Left-Turn Lanes - These lanes are reserved for left "
      + "turns from either direction and are not to be used as "
      + "through or passing lanes. You can recognize these lanes by "
      + "the solid yellow lines nearest the through lanes and "
      + "broken lines to the left of them.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Pavement Markings (page 41)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=51",
  },
  {
    key: "reversible-lanes",
    quote:
      "Lanes which reverse are marked on both sides by a double "
      + "yellow broken line. This is the only case where a driver "
      + "may drive for any distance to the left of a yellow line.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Pavement Markings (page 41)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=51",
  },
  {
    key: "crosswalk-lines",
    quote:
      "Many pedestrian crosswalks are marked by solid white "
      + "lines. Some crosswalks, especially in residential areas, "
      + "are not marked. When these lines are used, they will run "
      + "all the way across the pavement. You will notice them at "
      + "intersections and sometimes between intersections. DO NOT "
      + "block a crosswalk with your car.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Pavement Markings (page 41)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=51",
  },
  {
    key: "stop-lines",
    quote:
      "Stop Lines - Wide white lines, painted across traffic "
      + "lanes, mark where you must stop your vehicle at "
      + "intersections.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Pavement Markings (page 41)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=51",
  },
  {
    key: "stop-lines-none",
    quote:
      "If there are no stop lines or crosswalks, you must stop "
      + "your vehicle before you enter the intersections. You "
      + "should be able to see traffic coming from all directions.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter V - Pavement Markings, Stop Lines (page 41)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=51",
  },
  {
    key: "basic-speed-law",
    quote:
      "However West Virginia law prohibits driving at a speed "
      + "that is greater than reasonable and prudent for existing "
      + "conditions.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Speed Limits (page 42)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=52",
  },
  {
    key: "slow-down-situations",
    quote:
      "Approaching and crossing an intersection Approaching and "
      + "going around a curve Approaching the top of a hill "
      + "Traveling on a narrow road",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Basic Speed Law (page 42)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=52",
  },
  {
    key: "designated-speed-limits",
    quote:
      "Interstate - Maximum Speed 70mph unless otherwise posted "
      + "Open County Highway - 55mph - unless otherwise posted "
      + "Business or Residential Areas - 25mph School Zone (while "
      + "children are present along the roadway) - 15mph",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Speed Limits (page 42)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=52",
  },
  {
    key: "designated-speed-stem",
    quote:
      "Designated speed limits, unless they are otherwise posted, "
      + "or not reasonable, or not prudent for the conditions, are:",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Speed Limits (page 42)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=52",
  },
  {
    key: "school-zone-125-feet",
    quote:
      "A school zone is all school property, including school "
      + "grounds, and/or any street or highway abutting the school "
      + "grounds and extending 125 feet along the street or highway "
      + "from the school grounds.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Speed Limits (page 42)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=52",
  },
  {
    key: "emergency-exceed-speed",
    quote:
      "Authorized emergency vehicles may exceed the posted speed "
      + "limits when on emergency duty with emergency signal "
      + "equipment operating, as long as other road users are not "
      + "endangered.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Speed Limits (page 42)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=52",
  },
  {
    key: "signal-100-feet",
    quote:
      "Get into the habit of signaling every time you make a "
      + "change. Signal at least 100 feet before you plan to turn.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Driving Signals (page 43)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=53",
  },
  {
    key: "signal-before-what",
    quote:
      "Use your turn signal before you: Change lanes. Turn at an "
      + "intersection. Enter or leave an interstate. Pull away from "
      + "the curb. Pull over to the side of the road.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Driving Signals (page 43)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=53",
  },
  {
    key: "cancel-signal",
    quote:
      "Switch off your turn signals after completing the turn. "
      + "Driving with turn signals on without intending to turn can "
      + "create confusion.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Driving Signals (page 43)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=53",
  },
  {
    key: "hand-position",
    quote:
      "The left hand should be placed approximately at 8 o'clock "
      + "and the right hand at 4 o'clock.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Driving Signals (page 43)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=53",
  },
  {
    key: "turn-slow-before",
    quote: "Slow down before making turns. Do not brake while turning.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Turning Maneuvers (page 44)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=54",
  },
  {
    key: "turn-signal-100",
    quote: "Signal at least 100 feet before turning.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Turning Maneuvers (page 44)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=54",
  },
  {
    key: "turn-left-wheels-straight",
    quote:
      "When waiting to turn left, do not turn the wheels to the "
      + "left. Otherwise, a bump from behind could push your "
      + "vehicle into oncoming traffic.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Turning Maneuvers (page 44)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=54",
  },
  {
    key: "right-on-red-rule",
    quote:
      "If an intersection has no signs prohibiting a turn on red, "
      + "traffic facing a red signal may, after coming to a "
      + "complete stop and yielding to pedestrians and traffic, "
      + "make a right turn. The same rule applies to left turns "
      + "from a one-way street to a one-way street.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Turning Maneuvers (page 44)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=54",
  },
  {
    key: "u-turn-500-feet",
    quote:
      "it is against the law to turn your vehicle around near a "
      + "curve, near the crest of a hill where you cannot be seen "
      + "by another vehicle approaching within 500 feet in either "
      + "direction, or where signs prohibit turning.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Changing Direction (page 45)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=55",
  },
  {
    key: "backing-up",
    quote:
      "Before backing, check completely around your vehicle for "
      + "people and/or other obstacles. You should look to the "
      + "front, sides and rear and continue to look to the rear "
      + "while backing.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Backing Up (page 45)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=55",
  },
  {
    key: "backing-not-in-lane",
    quote: "Do not depend on your mirror.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Backing Up (page 45)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=55",
  },
  {
    key: "park-direction-of-traffic",
    quote:
      "Vehicles must always be parked in the same direction as "
      + "the movement of traffic on that side of the street.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Parking Maneuvers (page 45)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=55",
  },
  {
    key: "park-set-brake",
    quote:
      "Whenever you park and leave your vehicle, you must turn "
      + "off the engine and set the parking (emergency) brake. Lock "
      + "your vehicle and take your keys.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Parking Maneuvers (page 45)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=55",
  },
  {
    key: "prohibited-parking-list",
    quote:
      "On a sidewalk In front of a public or private driveway "
      + "Within an intersection",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Prohibited Parking (page 45)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=55",
  },
  {
    key: "prohibited-parking-distances",
    quote:
      "On a crosswalk Within 20 feet of a crosswalk at an "
      + "intersection Within 30 feet of any stop sign or traffic "
      + "control signal",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Prohibited Parking (page 45)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=55",
  },
  {
    key: "prohibited-parking-railroad",
    quote:
      "In front of a wheelchair ramp or curb cut Within 50 feet "
      + "of the nearest rail of a railroad crossing",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Prohibited Parking (page 45)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=55",
  },
  {
    key: "prohibited-parking-more",
    quote:
      "Upon any bridge or other elevated structure or in a "
      + "highway tunnel Within 20 feet of any mailbox served by a "
      + "carrier using a motor vehicle for daily deliveries Upon "
      + "any controlled-access highway",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Prohibited Parking (page 46)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=56",
  },
  {
    key: "angle-parking",
    quote:
      "Steer sharply to the right when your vehicle's front end "
      + "is even with the rear of the parking space. Slowly pull "
      + "into the space midway and center.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Angle Parking (page 46)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=56",
  },
  {
    key: "parking-on-hills",
    quote:
      "If you park or stop on a grade, turn the front wheels to "
      + "the curb side of the highway so the vehicle will not roll. "
      + "Be sure to set the emergency or parking brake.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Parking on Hills (page 46)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=56",
  },
  {
    key: "parking-hills-gear",
    quote:
      "To reinforce the parking brake in an automatic shift "
      + "vehicle, put the selector shift in park; in a manual shift "
      + "use reverse on a downgrade",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Parking on Hills (page 46)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=56",
  },
  {
    key: "parallel-18-inches",
    quote:
      "When parallel parking on the left side of the road, wheels "
      + "should be within 18 inches of the left curb.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Parallel Parking (page 47)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=57",
  },
  {
    key: "parallel-not-more-18",
    quote:
      "You should be about 6\" from the curb. Do not park more "
      + "than 18\" from the curb.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Parallel Parking (page 47)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=57",
  },
  {
    key: "following-three-four",
    quote:
      "The best way to assure proper following distance is to use "
      + "the three-to-four second rule.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Following Distance (page 47)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=57",
  },
  {
    key: "following-count",
    quote:
      "When the vehicle ahead passes that object, begin to count "
      + "\"one thousand one, one thousand two, one thousand three.\" "
      + "If you reach the same object before you finish saying "
      + "\"..one thousand three,\" you are driving too closely.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Following Distance (page 47)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=57",
  },
  {
    key: "following-dark-rain",
    quote:
      "If it is dark or raining, the distance should be at least "
      + "four seconds.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Following Distance (page 47)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=57",
  },
  {
    key: "following-ice-snow",
    quote:
      "If there is ice or snow, stay at least six seconds behind "
      + "the vehicle in front.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Following Distance (page 47)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=57",
  },
  {
    key: "lane-change-steps",
    quote:
      "Check in your rear view and side mirrors. Check over your "
      + "left or right shoulder (head check) to make sure no one is "
      + "in your blind spot.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Changing Lanes (page 48)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=58",
  },
  {
    key: "no-lane-change-intersection",
    quote: "DO NOT change lanes in an intersection or at a railroad crossing.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Changing Lanes (page 48)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=58",
  },
  {
    key: "passing-return",
    quote:
      "Signal and return to the proper lane when you see the "
      + "front of the vehicle (both headlights) you have passed in "
      + "your rear view mirror.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Passing (page 48)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=58",
  },
  {
    key: "passing-on-right",
    quote:
      "Passing on the right is not permissible unless there is a "
      + "lane designated for passing.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Passing (page 48)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=58",
  },
  {
    key: "passing-horn",
    quote:
      "Move left when clear and sound your horn to alert the "
      + "driver ahead that you are passing.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Passing (page 48)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=58",
  },
  {
    key: "passing-if-you-speed",
    quote:
      "Decide if passing is necessary. If you have to speed to "
      + "pass, you probably do not need to pass.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Passing (page 48)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=58",
  },
  {
    key: "passing-prohibited-100",
    quote:
      "Within 100 feet of a bridge, viaduct, tunnel, or "
      + "underpass. Within 100 feet of any railroad crossing.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Passing (page 49)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=59",
  },
  {
    key: "passing-prohibited-pedestrian",
    quote:
      "When a vehicle in front of you has stopped at an "
      + "intersection to allow a pedestrian to cross.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Passing (page 49)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=59",
  },
  {
    key: "row-given-not-taken",
    quote:
      "Remember, in every situation, right-of-way is something to "
      + "be given, not taken.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Right-of-Way (page 49)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=59",
  },
  {
    key: "row-entering-traffic",
    quote:
      "When entering a public street or highway from an alley, "
      + "private road, or driveway, you must yield to traffic "
      + "already on the roadway.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Right-of-Way (page 49)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=59",
  },
  {
    key: "row-uncontrolled",
    quote:
      "Uncontrolled intersections and four-way stop intersections "
      + "- If you reach the intersection at the same time as "
      + "another vehicle, yield to the driver on the right.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Right-of-Way (page 49)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=59",
  },
  {
    key: "row-yield-sign",
    quote:
      "Intersections with yield signs - Slow down before reaching "
      + "the intersection, then yield the right-of-way to any "
      + "vehicle in the intersection, and to approaching traffic.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Right-of-Way (page 49)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=59",
  },
  {
    key: "row-left-turn",
    quote:
      "Left turns - When making a left turn, you must yield the "
      + "right-of-way to oncoming traffic.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Right-of-Way (page 49)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=59",
  },
  {
    key: "row-emergency",
    quote:
      "Pull over to the right edge of the road, clear of the "
      + "intersection, and stop until the emergency vehicle has "
      + "passed.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Right-of-Way (page 49)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=59",
  },
  {
    key: "row-emergency-brake",
    quote:
      "Keep your foot on the brake so the emergency driver knows "
      + "you are stopped. Watch for other emergency vehicles before "
      + "proceeding.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Right-of-Way (page 49)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=59",
  },
  {
    key: "row-funeral",
    quote:
      "Although not required by law, it is a courtesy to yield to "
      + "vehicles in a funeral procession. Once the lead vehicle "
      + "has cleared an intersection",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Right-of-Way (page 49)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=59",
  },
  {
    key: "row-funeral-pass",
    quote:
      "Allow the procession to pass and do not cut in or out of "
      + "the procession. You may pass a procession on an "
      + "expressway.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Right-of-Way (page 49)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=59",
  },
  {
    key: "row-police-officer",
    quote:
      "Directions of a police officer overrule the message of any "
      + "sign, signal, or road marking.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Right-of-Way (page 49)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=59",
  },
  {
    key: "pedestrian-row",
    quote:
      "Remember, pedestrians have the right of way when: They are "
      + "in a crosswalk. They are crossing a sidewalk that crosses "
      + "an alley entrance or driveway. They are blind and are "
      + "crossing the street with a white or metal cane, with or "
      + "without a red tip, or led by a guide dog.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Sharing the Road with Pedestrians (page 50)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=60",
  },
  {
    key: "pedestrian-walk-facing",
    quote:
      "When walking along a road where there is no sidewalk, walk "
      + "on the left side facing oncoming traffic. Walk on the "
      + "shoulder of the road, if possible.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Sharing the Road with Pedestrians (page 50)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=60",
  },
  {
    key: "pedestrians-not-interstate",
    quote:
      "Pedestrians must not walk on interstate highways or other "
      + "areas where signs to that effect are posted.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Sharing the Road with Pedestrians (page 50)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=60",
  },
  {
    key: "school-bus-both-directions",
    quote:
      "On all highways, streets, parking lots, private roads or "
      + "driveways, traffic in both directions must stop before "
      + "reaching a school bus that has its red lights flashing "
      + "which is receiving or discharging students.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - School Bus Rules (page 50)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=60",
  },
  {
    key: "school-bus-when-to-go",
    quote:
      "You may not proceed until the bus resumes motion, or "
      + "signaled by the school bus driver to proceed or the visual "
      + "signals are no longer actuated.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - School Bus Rules (page 50)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=60",
  },
  {
    key: "school-bus-interstate",
    quote:
      "Only on Interstate Highways does traffic coming toward a "
      + "school bus stopped on the other side of the median not "
      + "have to stop.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - School Bus Rules (page 50)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=60",
  },
  {
    key: "school-bus-private-property",
    quote:
      "You must also stop for a stopped school bus which is "
      + "receiving or discharging students on school property or "
      + "private property.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - School Bus Rules (page 50)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=60",
  },
  {
    key: "school-bus-penalty",
    quote:
      "The penalty for passing a stopped school bus is a minimum "
      + "of 60 days driver's license suspension and a minimum fine "
      + "of $500 or confinement in jail for not more than six (6) "
      + "months for the first offense.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - School Bus Rules (page 50)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=60",
  },
  {
    key: "tailgater-steps",
    quote:
      "Tap your brakes gently to flash the brake lights and warn "
      + "the tailgater. Slow down to encourage the vehicle to pass. "
      + "If all else fails, pull over, stop and let the vehicle "
      + "pass.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Tailgating (page 51)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=61",
  },
  {
    key: "night-crash-rate",
    quote:
      "Despite the fact that there are fewer miles driven at "
      + "night, the fatal crash rate for night driving is three (3) "
      + "times greater than that for day driving.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Headlights and Their Use (page 51)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=61",
  },
  {
    key: "dim-500-200",
    quote:
      "Dim your headlights within 500 feet of an approaching "
      + "vehicle. Dim your headlights within 200 feet of the "
      + "vehicle in front of you.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Headlights and Their Use (page 51)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=61",
  },
  {
    key: "fog-low-beam",
    quote:
      "Use low beam lights when driving in fog. High beams cause "
      + "the light to be reflected back into your eyes.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Headlights and Their Use (page 51)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=61",
  },
  {
    key: "headlights-sunset-sunrise",
    quote:
      "Turn on your headlights from sunset to sunrise, during "
      + "fog, smoke, rain, or at any other time when persons and "
      + "vehicles cannot be seen clearly at a distance of 500 feet.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Headlights and Their Use (page 51)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=61",
  },
  {
    key: "parking-lights-parked",
    quote: "Use your parking lights only when you are parked.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Headlights and Their Use (page 51)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=61",
  },
  {
    key: "headlight-glare",
    quote:
      "Avoid looking directly into the lights of oncoming "
      + "vehicles by looking toward the right edge of the road.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Headlights and Their Use (page 51)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=61",
  },
  {
    key: "motorcycle-entire-lane",
    quote:
      "Motorcyclists are entitled to and will need the entire "
      + "lane to maneuver around possible hazards and traffic "
      + "situations.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Sharing the Road with Motorcycles (page 51)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=61",
  },
  {
    key: "motorcycle-following",
    quote:
      "It is wise to keep a safe minimum three -to-four second "
      + "following distance. Increase the distance time at night "
      + "and under adverse weather conditions.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Sharing the Road with Motorcycles (page 51)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=61",
  },
  {
    key: "motorcycle-passing",
    quote:
      "When passing, go all the way into the other lane. Besides "
      + "having the legal right to an entire lane, the motorcyclist "
      + "may need to swerve to avoid something on the road.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Following and Passing Motorcycles (page 52)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=62",
  },
  {
    key: "slow-moving-emblem",
    quote:
      "Slow-moving vehicles are required to display a special "
      + "triangular emblem sign which means \"Slow- Moving Vehicle\" "
      + "to warn approaching drivers.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Sharing the Road with Slow Vehicles (page 52)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=62",
  },
  {
    key: "truck-stopping-distance",
    quote:
      "A fully loaded tractor-trailer, traveling 55 mph, needs "
      + "three (3) times the distance a vehicle needs to stop.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Sharing the Road with Heavy Trucks (page 52)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=62",
  },
  {
    key: "no-zone-mirror",
    quote:
      "The easiest way to avoid lingering in the \"No-Zone\" is to "
      + "look for the truck driver's reflection in the side mirror. "
      + "If you cannot see the driver's reflection, you are in the "
      + "truck driver's blind spot.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - The \"No-Zone\" (page 52)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=62",
  },
  {
    key: "animal-riders",
    quote:
      "Animal riders may use most public highways, but they may "
      + "not use interstate highways. Persons riding animals have "
      + "the same rights as motor vehicle users and are subject to "
      + "the same rules.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Sharing the Road with Animal Riders (page 53)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=63",
  },
  {
    key: "horse-no-horn",
    quote:
      "Never sound your horn when approaching or near a horse, as "
      + "this may frighten the horse and cause a crash.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Sharing the Road with Animal Riders (page 53)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=63",
  },
  {
    key: "bicycle-passing",
    quote:
      "When passing a bicyclist, slow down, make sure they are "
      + "aware of you, and leave plenty of room between him or her "
      + "and your vehicle.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Sharing the Road with Bicycles (page 53)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=63",
  },
  {
    key: "bicycle-dim-lights",
    quote:
      "When meeting an oncoming bicyclist at night, always dim "
      + "your lights.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Sharing the Road with Bicycles (page 53)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=63",
  },
  {
    key: "bicycle-rules",
    quote:
      "Yield the right-of-way to pedestrians. Obey the same rules "
      + "of the road as drivers of other vehicles.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Sharing the Road with Bicycles (page 54)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=64",
  },
  {
    key: "bicycle-equipment",
    quote:
      "Red reflector on the rear. Brakes strong enough to stop "
      + "one (1) wheel on dry, level, clean pavement. Bell or other "
      + "device capable of giving a signal audible for a distance "
      + "of at least 100 feet",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Sharing the Road with Bicycles (page 54)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=64",
  },
  {
    key: "bicycle-headlight",
    quote:
      "For riding after dark, a white headlight that is visible "
      + "for at least 500 feet to the front.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Sharing the Road with Bicycles (page 54)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=64",
  },
  {
    key: "bicycle-same-direction",
    quote: "Ride in the same direction as other vehicles.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Sharing the Road with Bicycles (page 54)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=64",
  },
  {
    key: "public-bus",
    quote:
      "While traffic does not have to stop for a public bus, "
      + "please watch for passengers crossing the street as they "
      + "are getting on and off the bus.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Sharing the Road with Public Buses (page 54)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=64",
  },
  {
    key: "mobility-parking",
    quote:
      "It is illegal to park a vehicle that does not display a "
      + "mobility impaired parking placard or license plate in a "
      + "designated area.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VI - Parking for the Mobility Impaired (page 55)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=65",
  },
  {
    key: "interstate-slower-right",
    quote:
      "Slower traffic should drive in the right-hand lane, except "
      + "when passing.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VII - Driving on Interstates (page 57)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=67",
  },
  {
    key: "interstate-numbering",
    quote:
      "Even-numbered interstates run east to west. Odd-numbered "
      + "interstates run north to south. Three-digit numbers with "
      + "an even first number identify beltways or bypasses around "
      + "cities. Three-digit numbers with an odd first number "
      + "identify spur routes.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VII - Route Numbering and Navigation (page 57)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=67",
  },
  {
    key: "interstate-merge",
    quote:
      "As you merge, make sure you are traveling the same speed "
      + "as other traffic. Do not cut sharply to the left to enter "
      + "the traffic stream. Follow the lane, merge with traffic, "
      + "and then change lanes.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VII - Entering an Interstate (page 58)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=68",
  },
  {
    key: "interstate-right-of-way",
    quote:
      "Remember that traffic on the interstate has the "
      + "right-of-way. You cannot always count on other drivers "
      + "seeing you or moving over to give you room to enter.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VII - Entering an Interstate (page 58)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=68",
  },
  {
    key: "interstate-no-stop-ramp",
    quote: "Do not stop on the ramp or acceleration lane.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VII - Entering an Interstate (page 58)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=68",
  },
  {
    key: "interstate-deceleration",
    quote:
      "Most interstate exits have a special lane for you to slow "
      + "down in before you reach the exit ramp. Never slow down on "
      + "the interstate. Wait until you are in the deceleration "
      + "lane, then brake gently until your speed matches the "
      + "posted exit ramp limit.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VII - Exit Lanes (page 59)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=69",
  },
  {
    key: "interstate-shoulders",
    quote:
      "Shoulders on interstates are to be used only for disabled "
      + "vehicles. Do not use the shoulders for changing drivers, "
      + "reading a map, or other non emergency purposes.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VII - Stopping on an Interstate (page 59)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=69",
  },
  {
    key: "interstate-gore",
    quote:
      "Do not stop in an exit gore (the triangular area between "
      + "the through lane and the exit ramp). Another driver may "
      + "try to cross the gore after missing the exit and strike "
      + "your vehicle.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VII - Stopping on an Interstate (page 59)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=69",
  },
  {
    key: "interstate-min-55",
    quote:
      "Do not drive slower than 55 mph on an interstate unless "
      + "the weather or road conditions are bad or a lower speed "
      + "has been posted.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VII - Speeds on Interstates (page 59)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=69",
  },
  {
    key: "interstate-right-lane",
    quote:
      "Always drive in the right hand lane unless passing another "
      + "vehicle.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VII - Speeds on Interstates (page 59)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=69",
  },
  {
    key: "adverse-headlights-law",
    quote:
      "In accordance with Section17C-15-2 of the West Virginia "
      + "State Code, headlights must be turned on during adverse "
      + "conditions.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VII - Adverse Conditions (page 59)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=69",
  },
  {
    key: "disabled-flares",
    quote:
      "Put a flare about one (1) vehicle length behind your "
      + "vehicle and another about 300 feet back.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VII - Adverse Conditions (page 60)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=70",
  },
  {
    key: "disabled-vehicle",
    quote:
      "If your vehicle becomes disabled, move as far off the road "
      + "as possible, turn on your four-way flashers to indicate "
      + "your vehicle is stopped, and get everyone out of the "
      + "vehicle and well away from the road.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VII - Adverse Conditions (page 60)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=70",
  },
  {
    key: "interstate-no-uturn",
    quote:
      "You should never make a U-turn on an interstate. Go to the "
      + "next exit to turn around before re-entering the "
      + "interstate.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VII - U-Turns (page 60)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=70",
  },
  {
    key: "median-crossovers",
    quote:
      "The gravel or paved crossovers in the medians of some "
      + "highways are to be used only by police and emergency "
      + "vehicles.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VII - U-Turns (page 60)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=70",
  },
  {
    key: "work-zone-lane-closed",
    quote:
      "If a lane is closed, signs will be posted well in advance. "
      + "You should move over to the open lane as soon as possible. "
      + "Avoid waiting until the last minute to change lanes.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VII - Construction Zones (page 60)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=70",
  },
  {
    key: "complete-stop-right-turn",
    quote:
      "Regardless of traffic, you must come to a complete stop at "
      + "a stop sign or red light, even when making a right turn.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Impatience (page 61)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=71",
  },
  {
    key: "over-driving-headlights",
    quote:
      "Over driving your headlights means driving too fast to "
      + "stop safely within the distance clearly lit by your "
      + "headlights.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Light Conditions (page 62)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=72",
  },
  {
    key: "oncoming-headlights-night",
    quote:
      "When meeting another vehicle at night, dim your headlight "
      + "beams within 500 feet of the other vehicle. When following "
      + "another vehicle, dim your headlights within 200 feet of "
      + "the other vehicle.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Light Conditions (page 62)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=72",
  },
  {
    key: "headlights-law-dark",
    quote:
      "It is the law and a good idea to turn on your headlights, "
      + "not just your parking lights, when it begins to get dark "
      + "or any time visibility may be impaired (for example, fog, "
      + "smoke, extreme cloudiness)",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Light Conditions (page 62)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=72",
  },
  {
    key: "rain-headlights",
    quote:
      "IT IS THE LAW! Turn on your headlights to increase your "
      + "visibility. Turning on your headlights during periods of "
      + "rain or reduced visibility is the SAFE thing to do.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Rain (page 63)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=73",
  },
  {
    key: "wet-pavement-film",
    quote:
      "Rain and wet pavement are dangerous, particularly at the "
      + "start of a light rain when a mixture of oil, dirt, and "
      + "water form a slippery film on the road. This condition "
      + "makes it harder for you to keep in contact with the road "
      + "on curves and increases stopping distance.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Rain, Wet Pavement (page 63)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=73",
  },
  {
    key: "hydroplaning-speeds",
    quote:
      "In a standard passenger vehicle, partial hydroplaning "
      + "occurs on the road at about 35 mph. At 55 mph, tires ride "
      + "totally on top of the water.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Rain, Hydroplaning (page 63)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=73",
  },
  {
    key: "hydroplaning-no-friction",
    quote:
      "In a severe rainstorm, tires lose all contact with the "
      + "road at 55 mph. When this happens, there is no friction "
      + "available to brake, accelerate, or corner.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Rain, Hydroplaning (page 63)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=73",
  },
  {
    key: "flooding-depths",
    quote:
      "As little as six (6) inches of water can float some "
      + "smaller vehicles, while two (2) feet of water will carry "
      + "most away.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Flooding (page 63)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=73",
  },
  {
    key: "flooding-never-drive",
    quote: "Never attempt to drive across a flooded roadway.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Flooding (page 63)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=73",
  },
  {
    key: "flooding-stalled",
    quote:
      "If your vehicle stalls in a flooded roadway, leave it "
      + "immediately and seek higher ground.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Flooding (page 63)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=73",
  },
  {
    key: "snow-12-times",
    quote:
      "It takes as much as 12 times the normal distance to stop "
      + "on snow or ice as it takes to stop on dry pavement.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Snow and Sleet (page 63)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=73",
  },
  {
    key: "snow-bridges",
    quote:
      "There may be ice or snow on bridges or overpasses when all "
      + "other pavement is clear.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Snow and Sleet (page 63)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=73",
  },
  {
    key: "snow-clear-windows",
    quote:
      "Keep all windows clear of ice and snow. Keep your "
      + "windshield wipers and defroster in good working condition. "
      + "Never start driving until all windows are clear and "
      + "completely defrosted.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Snow and Sleet (page 63)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=73",
  },
  {
    key: "braking-ice-abs",
    quote:
      "In a vehicle equipped with anti-lock brakes, you maintain "
      + "the ability to steer while braking. However, in a vehicle "
      + "without anti-lock brakes you cannot steer unless you pump "
      + "the brakes, applying and releasing them several times "
      + "until you have the vehicle under complete control.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Snow and Sleet (page 64)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=74",
  },
  {
    key: "fog-steps",
    quote:
      "Reduce speed. Be alert and prepared for an emergency stop. "
      + "Use your low-beam headlights.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Fog and Smoke (page 64)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=74",
  },
  {
    key: "inspection-two-years",
    quote:
      "West Virginia requires an inspection of all vehicles every "
      + "two years to ensure they are in safe driving condition.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Vehicle Conditions (State Inspection Law) (page 64)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=74",
  },
  {
    key: "inspection-sticker",
    quote:
      "When your vehicle passes the state inspection, a sticker "
      + "showing the month and year for your next inspection is "
      + "placed on your windshield. It is against the law for you "
      + "to remove this sticker.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Vehicle Conditions (State Inspection Law) (page 64)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=74",
  },
  {
    key: "fatigue-rest-break",
    quote:
      "If you are on a long trip, take a 10-minute rest break at "
      + "least every two (2) hours.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Fatigue (page 65)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=75",
  },
  {
    key: "fatigue-pull-over",
    quote:
      "If you are alone and become tired, pull off the road and "
      + "rest. If there are other licensed drivers in the vehicle, "
      + "change drivers as soon as one driver becomes tired.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Fatigue (page 65)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=75",
  },
  {
    key: "passing-ten-steps",
    quote:
      "4. Signal before a lane change. 5. Move to the left lane. "
      + "6. Accelerate. 7. Warn other drivers by blowing your horn "
      + "and/or flashing your lights. 8. Signal lane change. 9. "
      + "Merge right when you see the front headlights of the "
      + "vehicle you passed in your rear view mirror.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Traffic Situations (page 67)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=77",
  },
  {
    key: "seat-belt-law",
    quote:
      "Everyone in a passenger vehicle must wear a federally "
      + "approved safety belt. It is the responsibility of the "
      + "driver to ensure that all passengers are buckled into "
      + "their safety belts.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Safety Equipment, Safety Belts (page 67)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=77",
  },
  {
    key: "seat-belt-exception",
    quote:
      "The only legal exception is for persons 18 years or older "
      + "who are riding in the back seat of a vehicle.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Safety Equipment, Safety Belts (page 67)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=77",
  },
  {
    key: "seat-belt-effectiveness",
    quote:
      "Statistics show that wearing safety belts reduces the "
      + "chances of injury or death resulting from collisions by 45 "
      + "to 50 percent.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Safety Equipment, Safety Belts (page 67)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=77",
  },
  {
    key: "lap-belt-position",
    quote:
      "The lap belt should be worn so that it fits snugly and "
      + "comfortably over the lower part of the hips.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Safety Equipment, Safety Belts (page 67)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=77",
  },
  {
    key: "child-seat-law",
    quote:
      "Every driver who transports a child under the age of 8 "
      + "years in a passenger automobile, van or pickup truck other "
      + "than one operated for hire",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Safety Equipment, Child Safety Seats (page 67)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=77",
  },
  {
    key: "child-seat-49",
    quote:
      "if a child is under the age of 8 years and at least 4'-9\" "
      + "tall, a safety belt shall be sufficient to meet the "
      + "requirements of this section.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Safety Equipment, Child Safety Seats (page 67)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=77",
  },
  {
    key: "head-restraints",
    quote:
      "Head restraints are designed to reduce the chance of "
      + "whiplash injury in rear-end collisions. If adjustable, "
      + "they should be positioned to fit against the back of your "
      + "head, not your neck.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Safety Equipment, Head Restraints (page 68)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=78",
  },
  {
    key: "abs-do-not-pump",
    quote:
      "When applying the brake in a vehicle that has an ABS, the "
      + "driver must continue to steer the vehicle while pushing "
      + "hard on the brake.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Safety Equipment, Anti-Lock Brake System (page 68)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=78",
  },
  {
    key: "abs-pumping-loses",
    quote:
      "in a vehicle equipped with an ABS, pumping the brake will "
      + "only reduce the system's ability to bring the vehicle to a "
      + "quick, safe stop.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Safety Equipment, Anti-Lock Brake System (page 68)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=78",
  },
  {
    key: "abs-ten-percent",
    quote:
      "in the event of a sudden stop, the ABS will improve "
      + "performance by only about 10 percent at best.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Safety Equipment, Anti-Lock Brake System (page 68)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=78",
  },
  {
    key: "airbag-rear-facing",
    quote:
      "If a vehicle is equipped with a passenger-side air bag, "
      + "under NO circumstances should an infant in a rear-facing "
      + "safety seat be placed in the front passenger seat.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Risk Reduction for Infants and Toddlers (page 68)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=78",
  },
  {
    key: "children-12-rear",
    quote:
      "it is recommended that all children 12 and under should be "
      + "buckled and placed in the rear seat.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Risk Reduction for Infants and Toddlers (page 68)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=78",
  },
  {
    key: "airbag-hand-position",
    quote:
      "the driver should hold the steering wheel from the side so "
      + "that their hands and arms are not between the air bag and "
      + "their body; the safest placement is right hand at 4 "
      + "o'clock and left hand at 8 o'clock.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter VIII - Safety Equipment, Air Bags (page 68)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=78",
  },
  {
    key: "blowout",
    quote:
      "To regain control, hold tightly to the steering wheel, "
      + "steer straight ahead, and ease up on the accelerator. Do "
      + "not brake until the vehicle is under control.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - Blowouts (page 70)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=80",
  },
  {
    key: "blowout-cause",
    quote:
      "Under-inflated tires are one of the most common causes of "
      + "blowouts, so be sure to check your tires for air often.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - Blowouts (page 70)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=80",
  },
  {
    key: "brake-failure",
    quote:
      "Pump the brake pedal quickly. Shift to a lower gear and "
      + "look for a place to slow down and stop off the roadway. "
      + "Use your horn and lights to warn other drivers.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - Brake Failure (page 71)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=81",
  },
  {
    key: "skid-steer-into",
    quote:
      "Turn your steering wheel in the direction of the skid. If "
      + "the rear of your vehicle is skidding to the right, turn to "
      + "the right. Turn left for a skid to the left.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - Skids (page 71)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=81",
  },
  {
    key: "skid-no-brakes",
    quote:
      "If your vehicle begins to skid, stay calm. Do not use your "
      + "brakes unless you are in danger of hitting something. "
      + "Concentrate on steering out of trouble.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - Skids (page 71)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=81",
  },
  {
    key: "stuck-gas-pedal",
    quote:
      "Try to free the pedal with your foot. If this does not "
      + "work, push in the clutch or shift into neutral.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - Stuck Gas Pedal (page 71)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=81",
  },
  {
    key: "wheels-off-road",
    quote:
      "Grip the steering wheel tightly. Stay on the shoulder and "
      + "ease off the accelerator. Brake gently and slow gradually.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - Wheels Off the Road (page 71)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=81",
  },
  {
    key: "overheating",
    quote:
      "If the warning light or gauge shows the engine is "
      + "overheating, pull off the road and turn the engine off. Do "
      + "not remove the radiator cap until the engine has cooled "
      + "off.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - Overheating Engine (page 71)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=81",
  },
  {
    key: "fire-in-vehicle",
    quote:
      "Do not use water because burning gasoline will float on "
      + "water and spread the fire. If the fire gets out of "
      + "control, move at least 100 feet away from the vehicle "
      + "since the gas tank may explode.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - Fire in Vehicle (page 72)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=82",
  },
  {
    key: "oncoming-in-your-lane",
    quote:
      "If you see a vehicle coming toward you in your lane, move "
      + "to the right, slow down, then sound your horn and flash "
      + "your headlights. Do not turn into the lane the vehicle has "
      + "left, since the driver may realize their mistake and turn "
      + "back into the proper lane.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - Vehicle Approaching in Your Lane (page 72)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=82",
  },
  {
    key: "stalled-on-tracks",
    quote:
      "If a train is coming and your vehicle is stalled on the "
      + "tracks, get out of the vehicle and proceed to a safe "
      + "location.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - Stalling on Railroad Tracks (page 72)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=82",
  },
  {
    key: "headlights-fail",
    quote:
      "If the highway is dark, try your parking lights, your "
      + "direction signals, or your emergency flashers and get off "
      + "the roadway.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - Headlights Fail (page 72)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=82",
  },
  {
    key: "oil-pressure-light",
    quote:
      "Get the vehicle off the road and immediately turn off the "
      + "engine. Check the engine oil level and add oil if needed.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - Oil Pressure Light Comes On (page 72)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=82",
  },
  {
    key: "first-aid-order",
    quote:
      "Control bleeding 2. Restore breathing 3. Treat for shock "
      + "4. Protect broken bones",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - First Aid (page 73)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=83",
  },
  {
    key: "first-aid-do-not-move",
    quote:
      "Stay calm and do not move the victim unless there is "
      + "danger of further injury.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - First Aid (page 73)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=83",
  },
  {
    key: "good-samaritan",
    quote:
      "No one, including those licensed to practice medicine or "
      + "dentistry, who in good faith gives emergency care at the "
      + "scene of a crash, without pay, is liable for any civil "
      + "damages as the result of any act or omission in giving "
      + "emergency care.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - Good Samaritan Law (page 74)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=84",
  },
  {
    key: "crash-notify",
    quote:
      "If you are involved in a crash resulting in injury or "
      + "death of any person or property damage of$1,000 or more, "
      + "you must notify the nearest law enforcement agency.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - If You are Involved In A Crash (page 74)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=84",
  },
  {
    key: "crash-exchange",
    quote:
      "The following information should be exchanged by persons "
      + "involved in traffic crashes: Name Address License plate "
      + "number Motor vehicle insurance information",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - If You are Involved In A Crash (page 74)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=84",
  },
  {
    key: "crash-unattended-vehicle",
    quote:
      "If you strike an unattended vehicle, try to locate the "
      + "owner. If that is not possible, leave a written notice "
      + "containing your name, address, license plate number, motor "
      + "vehicle insurance information, and circumstances of the "
      + "crash.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - If You are Involved In A Crash (page 74)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=84",
  },
  {
    key: "crash-do-not-stop",
    quote:
      "Do not stop at a crash scene unless you are involved or "
      + "can render assistance. Unnecessary stopping creates "
      + "additional hazards at the scene.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Chapter IX - If You are Involved In A Crash (page 74)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=84",
  },
  {
    key: "littering-penalty",
    quote:
      "It is a violation of West Virginia law to litter public or "
      + "private roadways or public/private property.",
    source: "West Virginia Driver's Licensing Handbook (West Virginia Division of Motor Vehicles, Revised 07/2026)",
    section: "Unlawful Disposal of Waste (page 77)",
    url: "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf#page=87",
  },
  {
    key: "code-speed-limits",
    quote:
      "(2) Twenty-five miles per hour in any business or "
      + "residence district; and (3) Fifty-five miles per hour on "
      + "open country highways, except as otherwise provided by "
      + "this chapter.",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-6-1 - Speed limitations generally",
    url: "https://code.wvlegislature.gov/17C-6-1/",
  },
  {
    key: "code-basic-speed",
    quote:
      "No person may drive a vehicle on a highway at a speed "
      + "greater than is reasonable and prudent under the existing "
      + "conditions and the actual and potential hazards.",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-6-1 - Speed limitations generally",
    url: "https://code.wvlegislature.gov/17C-6-1/",
  },
  {
    key: "code-school-zone",
    quote:
      "Fifteen miles per hour in a school zone during school "
      + "recess or while children are going to or leaving school "
      + "during opening or closing hours.",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-6-1 - Speed limitations generally",
    url: "https://code.wvlegislature.gov/17C-6-1/",
  },
  {
    key: "code-lighted-lamps",
    quote:
      "operated upon a highway within this state at any time from "
      + "sunset to sunrise, or during fog, smoke, rain or other "
      + "unfavorable atmospheric conditions, or at any other time "
      + "when there is not sufficient light to render clearly "
      + "discernible persons and vehicles on the highway at a "
      + "distance of five hundred feet ahead",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-15-2 - When lighted lamps are required",
    url: "https://code.wvlegislature.gov/17C-15-2/",
  },
  {
    key: "code-bus-lights-always",
    quote:
      "Every school bus, motorcycle, motor-driven cycle and moped "
      + "shall display lighted head lamps at all times when upon "
      + "the highway.",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-15-2 - When lighted lamps are required",
    url: "https://code.wvlegislature.gov/17C-15-2/",
  },
  {
    key: "code-follow-emergency-500",
    quote:
      "The driver of any vehicle other than one on official "
      + "business may not follow any authorized emergency vehicle "
      + "traveling in response to a fire alarm or other emergency "
      + "closer than five hundred feet",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-14-9 - Following authorized emergency vehicles",
    url: "https://code.wvlegislature.gov/17C-14-9/",
  },
  {
    key: "code-bicycle-three-feet",
    quote:
      "The driver of a vehicle overtaking a bicycle traveling in "
      + "the same direction shall pass to the left of the bicycle "
      + "at a distance of not less than three feet at a careful and "
      + "reduced speed",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-7-3 - Overtaking and passing vehicle or bicycle",
    url: "https://code.wvlegislature.gov/17C-7-3/",
  },
  {
    key: "code-following-too-closely",
    quote:
      "The driver of a motor vehicle shall not follow another "
      + "vehicle more closely than is reasonable and prudent having "
      + "due regard for the speed of such vehicles and the traffic "
      + "upon and the condition of the highway.",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-7-10 - Following too closely",
    url: "https://code.wvlegislature.gov/17C-7-10/",
  },
  {
    key: "code-truck-200-feet",
    quote:
      "It shall be unlawful for the operator of any motor truck, "
      + "registered for a gross weight of more than eight thousand "
      + "pounds, bus, special mobile equipment or any motor vehicle "
      + "drawing another vehicle operating upon any roadway outside "
      + "of a business or residence district, to follow within two "
      + "hundred feet",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-7-10 - Following too closely",
    url: "https://code.wvlegislature.gov/17C-7-10/",
  },
  {
    key: "code-yield-right",
    quote:
      "When two vehicles enter an intersection from a different "
      + "highway at approximately the same time the driver of the "
      + "vehicle on the left shall yield the right-of-way to the "
      + "vehicle on the right.",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-9-1 - Vehicle approaching or entering intersection",
    url: "https://code.wvlegislature.gov/17C-9-1/",
  },
  {
    key: "code-yield-driveway",
    quote:
      "The driver of a vehicle about to enter or cross a highway "
      + "from a private road or driveway shall yield the "
      + "right-of-way to all vehicles approaching on said highway.",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-9-4 - Vehicle entering highway from private road or driveway",
    url: "https://code.wvlegislature.gov/17C-9-4/",
  },
  {
    key: "code-emergency-pull-right",
    quote:
      "shall immediately drive to a position parallel to, and as "
      + "close as possible to, the right-hand edge or curb of the "
      + "roadway clear of any intersection and shall stop and "
      + "remain in such position until the authorized emergency "
      + "vehicle has passed",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-9-5 - Operation of vehicles on approach of authorized emergency vehicles",
    url: "https://code.wvlegislature.gov/17C-9-5/",
  },
  {
    key: "code-parking-hydrant",
    quote:
      "Within fifteen feet of a fire hydrant; (5) In a properly "
      + "designated fire lane",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-13-3 - Stopping, standing or parking prohibited in specified places",
    url: "https://code.wvlegislature.gov/17C-13-3/",
  },
  {
    key: "code-parking-distances",
    quote:
      "On a crosswalk; (7) Within twenty feet of a crosswalk at "
      + "an intersection; (8) Within thirty feet upon the approach "
      + "to any flashing beacon, stop sign or traffic-control "
      + "signal located at the side of a roadway",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-13-3 - Stopping, standing or parking prohibited in specified places",
    url: "https://code.wvlegislature.gov/17C-13-3/",
  },
  {
    key: "code-parking-railroad",
    quote:
      "Within fifty feet of the nearest rail of a railroad "
      + "crossing; (11) Within twenty feet of the driveway entrance "
      + "to any fire station and on the side of a street opposite "
      + "the entrance to any fire station within seventy-five feet "
      + "of the entrance",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-13-3 - Stopping, standing or parking prohibited in specified places",
    url: "https://code.wvlegislature.gov/17C-13-3/",
  },
  {
    key: "code-parking-18-inches",
    quote:
      "every vehicle stopped or parked upon a roadway where there "
      + "are adjacent curbs shall be so stopped or parked with the "
      + "right-hand wheels of such vehicle parallel to and within "
      + "eighteen inches of the right-hand curb.",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-13-4 - Right and left parallel parking; angle parking",
    url: "https://code.wvlegislature.gov/17C-13-4/",
  },
  {
    key: "code-seat-belt",
    quote:
      "A person may not operate a passenger vehicle on a public "
      + "street or highway of this state unless the person, any "
      + "passenger in the back seat under 18 years of age, and any "
      + "passenger in the front seat of the passenger vehicle is "
      + "restrained by a safety belt",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-15-49 - Operation of vehicles with safety belts",
    url: "https://code.wvlegislature.gov/17C-15-49/",
  },
  {
    key: "code-seat-belt-fine",
    quote:
      "Any person who violates the provisions of this section "
      + "shall be fined $25. No court costs or other fees may be "
      + "assessed for a violation of this section.",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-15-49 - Operation of vehicles with safety belts",
    url: "https://code.wvlegislature.gov/17C-15-49/",
  },
  {
    key: "code-child-seat",
    quote:
      "if a child is under the age of eight years and at least "
      + "four feet nine inches tall, a safety belt shall be "
      + "sufficient to meet the requirements of this section.",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-15-46 - Child passenger safety devices required",
    url: "https://code.wvlegislature.gov/17C-15-46/",
  },
  {
    key: "code-retest-one-week",
    quote:
      "An applicant who fails either the written test or the road "
      + "skills test may not be tested twice within a period of one "
      + "week.",
    source: "West Virginia Code, Chapter 17B - Motor Vehicle Driver's Licenses (West Virginia Legislature)",
    section: "W. Va. Code 17B-2-6 - Application for license or instruction permit",
    url: "https://code.wvlegislature.gov/17B-2-6/",
  },
  {
    key: "code-permit-thirty-days",
    quote:
      "Any applicant who has not been previously licensed must "
      + "hold an instruction permit for a minimum of thirty days.",
    source: "West Virginia Code, Chapter 17B - Motor Vehicle Driver's Licenses (West Virginia Legislature)",
    section: "W. Va. Code 17B-2-6 - Application for license or instruction permit",
    url: "https://code.wvlegislature.gov/17B-2-6/",
  },
  {
    key: "code-attempts",
    quote:
      "payment of the fee entitles an applicant under the age of "
      + "eighteen to not more than two attempts at the written test "
      + "or not more than one attempt to pass the road skills test.",
    source: "West Virginia Code, Chapter 17B - Motor Vehicle Driver's Licenses (West Virginia Legislature)",
    section: "W. Va. Code 17B-2-6 - Application for license or instruction permit",
    url: "https://code.wvlegislature.gov/17B-2-6/",
  },
  {
    key: "code-slower-right-lane",
    quote:
      "any vehicle proceeding at less than the normal speed of "
      + "traffic at the time and place and under the conditions "
      + "then existing shall be driven in the right-hand lane then "
      + "available for traffic, or as close as practicable to the "
      + "right-hand curb or edge of the roadway",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-7-1 - Driving on right side of roadway",
    url: "https://code.wvlegislature.gov/17C-7-1/",
  },
  {
    key: "code-single-lane",
    quote:
      "A vehicle shall be driven as nearly as practicable "
      + "entirely within a single lane and shall not be moved from "
      + "such lane until the driver has first ascertained that such "
      + "movement can be made with safety.",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-7-9 - Driving on roadways laned for traffic",
    url: "https://code.wvlegislature.gov/17C-7-9/",
  },
  {
    key: "code-center-turn-lane",
    quote:
      "Upon a roadway which is divided into three lanes a vehicle "
      + "shall not be driven in the center lane which is clearly "
      + "marked as a left turn lane except in preparation for a "
      + "left turn",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-7-9 - Driving on roadways laned for traffic",
    url: "https://code.wvlegislature.gov/17C-7-9/",
  },
  {
    key: "code-right-turn-close",
    quote:
      "Both the approach for a right turn and a right turn shall "
      + "be made as close as practicable to the right-hand curb or "
      + "edge of the roadway.",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-8-2 - Right turns",
    url: "https://code.wvlegislature.gov/17C-8-2/",
  },
  {
    key: "code-obey-devices",
    quote:
      "The driver of any vehicle and the operator of any "
      + "streetcar shall obey the instructions of any official "
      + "traffic-control device applicable thereto placed in "
      + "accordance with the provisions of this chapter, unless "
      + "otherwise directed by a traffic or police officer",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-3-4 - Obedience to traffic-control devices",
    url: "https://code.wvlegislature.gov/17C-3-4/",
  },
  {
    key: "code-red-stop",
    quote:
      "Vehicular traffic facing the signal shall stop before "
      + "entering the crosswalk on the near side of the "
      + "intersection or, if none, then before entering the "
      + "intersection and shall remain standing until green or \"go\" "
      + "is shown alone",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-3-5 - Traffic-control signal legend",
    url: "https://code.wvlegislature.gov/17C-3-5/",
  },
  {
    key: "code-backing",
    quote:
      "The driver of a vehicle shall not back the same unless "
      + "such movement can be made with reasonable safety and "
      + "without interfering with other traffic.",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-14-2 - Limitations on backing",
    url: "https://code.wvlegislature.gov/17C-14-2/",
  },
  {
    key: "code-bicycle-rights",
    quote:
      "Every person riding a bicycle upon a roadway shall be "
      + "granted all of the rights and shall be subject to all of "
      + "the duties applicable to the driver of a vehicle by this "
      + "chapter",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-11-2 - Traffic laws apply to persons riding bicycles",
    url: "https://code.wvlegislature.gov/17C-11-2/",
  },
  {
    key: "code-animal-rights",
    quote:
      "Every person riding an animal or driving any animal-drawn "
      + "vehicle upon a roadway shall be granted all of the rights "
      + "and shall be subject to all of the duties applicable to "
      + "the driver of a vehicle by this chapter",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-2-6 - Traffic laws apply to persons riding animals",
    url: "https://code.wvlegislature.gov/17C-2-6/",
  },
  {
    key: "code-motorcycle-helmet",
    quote:
      "A person may not operate or be a passenger on any "
      + "motorcycle or motor-driven cycle unless the person is "
      + "wearing securely fastened on his or her head by either a "
      + "neck or chin strap a protective helmet designed to deflect "
      + "blows, resist penetration, and spread impact forces.",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-15-44 - Safety equipment for motorcyclists",
    url: "https://code.wvlegislature.gov/17C-15-44/",
  },
  {
    key: "code-unsafe-vehicle",
    quote:
      "unless the equipment upon any and every said vehicle is in "
      + "good working order and adjustment as required in this "
      + "chapter and said vehicle is in such safe mechanical "
      + "condition as not to endanger the driver or other occupant "
      + "or any person upon any highway.",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-16-1 - Vehicles not to operate without required equipment",
    url: "https://code.wvlegislature.gov/17C-16-1/",
  },
  {
    key: "code-distracted-points",
    quote:
      "Three points on the driver's record maintained by the "
      + "Division of Motor Vehicles; and (C) At the court's "
      + "discretion, suspension of the driver's license for a "
      + "period of 90 days",
    source: "West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road (West Virginia Legislature)",
    section: "W. Va. Code 17C-14-15 - Electronically Distracted Driving Act",
    url: "https://code.wvlegislature.gov/17C-14-15/",
  },
];
