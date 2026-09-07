import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Nebraska bank. Four official sources sit
// behind them, and every quote below was lifted MECHANICALLY as a contiguous
// substring of the fetched source (tmp/ne_build_excerpts.py) rather than
// retyped, so nothing here is a paraphrase that drifted.
//
//  - The Nebraska Driver's Manual, published by the Nebraska Department of
//    Motor Vehicles and served from dmv.nebraska.gov as "Class O Drivers
//    Manual-English 1-2025.pdf". Its only edition label is the "January 2025"
//    printed on the inside back cover. It runs 92 PDF pages carrying 80
//    printed pages, and the two do not line up: PRINTED PAGE N IS PDF PAGE
//    N + 8. The page given in each `section` below is the printed page a
//    learner would look for; the "#page=" anchor in the url is the PDF page
//    that lands on it.
//  - Chapter 60 of the Nebraska Revised Statutes, on the Nebraska
//    Legislature's own server. The manual's back cover invites exactly this:
//    it "is not intended to be an official legal reference to Nebraska traffic
//    laws". Sixty-odd quotes here are statutory, and each fills a hole the
//    manual leaves or states loosely - the parking distances from a hydrant
//    and a crosswalk (60-6,166), the $500 school-bus fine and the SECOND
//    exception to the school-bus stop that the manual never mentions
//    (60-6,175), the secondary-enforcement rule on the texting ban
//    (60-6,179.01), the two separate Move Over sections (60-6,378 and
//    60-6,378.01), and the 65 mph Douglas County carve-out from the 75 mph
//    Interstate limit (60-6,186).
//  - The DMV's own Driver Licensing Examiner Policies and Procedures Manual,
//    which is where the written test's format is actually published: 25
//    questions, five wrong allowed, 80 percent to pass. The Driver's Manual
//    itself never states any of that.
//  - Three Driver's License, ID and Permits pages on dmv.nebraska.gov, for the
//    POP passenger rule the manual prints in a corrupted font.
//
// Only the normalisations the sibling banks use were applied, and only to the
// extracted text: curly quotes and dashes fold to ASCII, the section symbol is
// spelled out, bullet glyphs become spaces so a stem and its list run together
// in the printed order, and runs of whitespace collapse to single spaces. No
// word is changed, dropped or reordered, and the sources' own slips are kept -
// among them the manual's heading "4B-3 At intersectisons with two-way stops",
// its "Railroad Emergency Notication System", its "preceeding", and the
// missing space in "established.Trains".
//
// One thing IS filtered, and it is worth stating plainly. The manual's PDF
// carries a broken character map: the fi ligature extracts as the digit 4
// ("traf4c", "of4ce", "4ne", "4ve") and the fl and ffi ligatures extract as
// nothing at all ("ashing", "inuence", "trafc", "identication"). That is an
// artifact of the file, not the publisher's text, and quoting it would be
// quoting garbage. So the builder computes the mangled-token set from the
// document itself and REFUSES any candidate quote containing one. Where a rule
// only exists in mangled prose, it is quoted from the statute, from the
// manual's own practice exam (which is set in a font that survives), or from
// the DMV's web page instead. Nothing was repaired by hand.

export const nebraskaExcerpts: HandbookExcerpt[] = [
  {
    key: "who-must-have",
    quote: "Any Nebraska resident who operates a motor vehicle on the " +
      "streets and highways of Nebraska must have a license.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1A Who Must Have a Nebraska License (page 1)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=9",
  },
  {
    key: "new-resident-30-days",
    quote: "Any new resident with a valid license from another state must " +
      "obtain a Nebraska license within 30 days.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1A Who Must Have a Nebraska License (page 1)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=9",
  },
  {
    key: "gdl-purpose",
    quote: "GDL laws are in place for your teen's safety. By phasing in " +
      "driving privileges, teens gain driving experience while " +
      "keeping them out of situations that put them at higher risk " +
      "for a crash.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1B Graduated Driver Licensing (GDL) Driving Restrictions (page 1)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=9",
  },
  {
    key: "gdl-seat-belts",
    quote: "Seat Belts - All occupants riding with a permit holder, " +
      "including the driver, must wear a seat belt.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1B Graduated Driver Licensing (GDL) Driving Restrictions (page 1)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=9",
  },
  {
    key: "gdl-passengers",
    quote: "Passengers - Holder of a School Permit (SCP) may only " +
      "transport family members who reside with them to the school " +
      "attended by the holder.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1B Graduated Driver Licensing (GDL) Driving Restrictions (page 1)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=9",
  },
  {
    key: "gdl-nighttime",
    quote: "Nighttime Driving - Holder of a POP shall not drive from " +
      "midnight to 6 AM unless to or from school activities or work.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1B Graduated Driver Licensing (GDL) Driving Restrictions (page 1)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=9",
  },
  {
    key: "gdl-zero-tolerance",
    quote: "Alcohol - \"Zero tolerance\" (alcohol and other drugs) laws " +
      "for drivers under the age of 21. First offense results in " +
      "court impounding permit or license for 30 days.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1B Graduated Driver Licensing (GDL) Driving Restrictions (page 1)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=9",
  },
  {
    key: "gdl-under-21-dwi",
    quote: "An under age 21 driver is subject to the same DWI laws as a " +
      "person age 21 or over if the blood alcohol content is .08 " +
      "(BAC) or greater.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1B Graduated Driver Licensing (GDL) Driving Restrictions (page 1)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=9",
  },
  {
    key: "gdl-six-points",
    quote: "Individuals under 21 accumulating six or more points within " +
      "one year are required to take a driver improvement course " +
      "within three months.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1B Graduated Driver Licensing (GDL) Driving Restrictions (page 1)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=9",
  },
  {
    key: "lpe-purpose",
    quote: "This permit is issued for the purpose of allowing a student to " +
      "legally practice driving for a School Permit.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-2 School Learner's Permit - Type LPE (page 2)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=10",
  },
  {
    key: "lpe-age",
    quote: "Minimum Age: 14. May not apply before the 14th birthday.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-2 School Learner's Permit - Type LPE (page 2)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=10",
  },
  {
    key: "lpe-expiration",
    quote: "Expiration: Six months following the date of issuance.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-2 School Learner's Permit - Type LPE (page 2)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=10",
  },
  {
    key: "scp-city-5000",
    quote: "A School Permit can be issued if such person lives outside a " +
      "city of 5,000 or more or attends a school outside a city of " +
      "5,000 or more.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-3 School Permit - Type SCP (page 2)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=10",
  },
  {
    key: "scp-accompanied",
    quote: "anytime when accompanied by a licensed driver who is at least 21 years old.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-3 School Permit - Type SCP (page 2)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=10",
  },
  {
    key: "scp-age",
    quote: "Minimum Age: 14 years and two months. May not apply until " +
      "individual has held an LPE or LPD for at least two months.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-3 School Permit - Type SCP (page 2)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=10",
  },
  {
    key: "scp-expiration",
    quote: "Expiration: 16 years and three months.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-3 School Permit - Type SCP (page 3)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=11",
  },
  {
    key: "scp-belts",
    quote: "All persons being transported in a motor vehicle operated by a " +
      "holder of a SCP are required to ride secured in an occupant " +
      "protection system.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-3 School Permit - Type SCP (page 3)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=11",
  },
  {
    key: "lpd-purpose",
    quote: "This permit is issued to allow a person to legally practice " +
      "driving for a Provisional Operator's Permit (POP), Operator's " +
      "(Class O) or Motorcycle (Class M) License.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-4 Learner's Permit - Type LPD (page 3)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=11",
  },
  {
    key: "lpd-age",
    quote: "Minimum Age: 15. May apply 60 days before 15th birthday, " +
      "issuance must be on or after 15th birthday.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-4 Learner's Permit - Type LPD (page 3)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=11",
  },
  {
    key: "lpd-supervision",
    quote: "Permit holder must be accompanied by a licensed driver at " +
      "least 21 occupying the seat beside the driver.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-4 Learner's Permit - Type LPD (page 4)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=12",
  },
  {
    key: "lpd-expiration",
    quote: "Expiration: One year following the date of issuance.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-4 Learner's Permit - Type LPD (page 4)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=12",
  },
  {
    key: "pop-hours",
    quote: "The Provisional Operator's Permit allows an individual to " +
      "operate a motor vehicle unsupervised in Nebraska from 6 a.m. " +
      "to 12 midnight.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-5 Provisional Operator's Permit (POP) (page 4)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=12",
  },
  {
    key: "pop-night-exception",
    quote: "Individual may only drive unsupervised between 12 midnight and " +
      "6 a.m. if they are driving to or from home to work or a school " +
      "activity.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-5 Provisional Operator's Permit (POP) (page 4)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=12",
  },
  {
    key: "pop-accompanied",
    quote: "Individual may drive anytime if they are accompanied by a " +
      "parent, guardian or licensed driver who is at least 21.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-5 Provisional Operator's Permit (POP) (page 4)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=12",
  },
  {
    key: "pop-age",
    quote: "Minimum Age: 16. May apply 60 days before 16th birthday, " +
      "issuance must be on or after 16th birthday.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-5 Provisional Operator's Permit (POP) (page 4)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=12",
  },
  {
    key: "pop-six-months",
    quote: "have held a School Learner's Permit (LPE), School Permit (SCP) " +
      "or Learner's Permit (LPD) for at least six months and not " +
      "accumulated three or more points on their driving record " +
      "during the six month period immediately preceeding the POP " +
      "application date",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-5 Provisional Operator's Permit (POP) (page 4)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=12",
  },
  {
    key: "pop-belts",
    quote: "All persons being transported in a motor vehicle operated by a " +
      "holder of a POP are required to ride secured in an occupant " +
      "protection system.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-5 Provisional Operator's Permit (POP) (page 5)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=13",
  },
  {
    key: "pop-expiration",
    quote: "Expiration: 18th birthday.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-5 Provisional Operator's Permit (POP) (page 5)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=13",
  },
  {
    key: "class-o-scope",
    quote: "A Class O License authorizes a license holder to operate any " +
      "motor vehicle, including a Moped, Autocycle, All-Terrain " +
      "Vehicle (ATV) and Utility-Terrain Vehicle (UTV). Does not " +
      "include a motorcycle or commercial motor vehicle.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-6 Operator's License (Class O) (page 5)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=13",
  },
  {
    key: "class-o-under-18",
    quote: "Individuals under the age of 18 years old who have held a POP " +
      "for at least 12 months and who have not accumulated three or " +
      "more points on their driving records during the previous 12 " +
      "month period are eligible for an operator's license.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-6 Operator's License (Class O) (page 5)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=13",
  },
  {
    key: "class-o-three-fails",
    quote: "All applicants for a Class O license that fail three " +
      "successive drive tests will not be eligible to reapply until " +
      "they: 1) show proof of successful completion of a DMV approved " +
      "driver training course, or 2) have held a LPD for at least 90 " +
      "days.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-6 Operator's License (Class O) (page 6)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=14",
  },
  {
    key: "moped-definition",
    quote: "an automatic transmission and a motor not exceeding 50 ccs " +
      "that produces no more than two brake horsepower at a maximum " +
      "design speed of no more than 30 miles per hour.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-6 Operator's License (Class O), Mopeds (page 6)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=14",
  },
  {
    key: "atv-roadway-speed",
    quote: "Occur only between sunrise and sunset at speeds lower than 30 mph.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-6 Operator's License (Class O), ATV / UTV (page 7)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=15",
  },
  {
    key: "class-m-age",
    quote: "Minimum Age: 17. Individuals under the age of 18 may not apply " +
      "until they have held a Provisional Operator's Permit (POP) for " +
      "at least 12 months and have not accumulated three or more " +
      "points on their driving record during the previous 12 month " +
      "period.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-7 Motorcycle License (Class M) (page 7)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=15",
  },
  {
    key: "cdl-threshold",
    quote: "A Commercial Driver's License (CDL) is required for anyone " +
      "driving a vehicle that has a Gross Combination Weight Rating " +
      "(GCWR) or Gross Vehicle Weight Rating (GVWR) of more than " +
      "26,000 pounds, carries 16 or more persons (including the " +
      "driver), or transports placarded amounts of hazardous " +
      "materials.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1C-8 Commercial License (Class A, B, or C) (page 8)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=16",
  },
  {
    key: "vision-test",
    quote: "The vision test is administered to all non-commercial permit " +
      "and operator license applicants.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1D-3 Testing, Vision Test (page 11)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=19",
  },
  {
    key: "corrective-lenses",
    quote: "If corrective lenses are needed to meet the standards, they " +
      "must be worn at all times while driving, and the license " +
      "issued will indicate this.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1D-3 Testing, Vision Test (page 11)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=19",
  },
  {
    key: "written-test-per-class",
    quote: "There is a separate written test for each class of license. " +
      "Information to pass the LPE, LPD, SCP, POP and operator's " +
      "license (Class O) test can be found in this manual.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1D-3 Testing, Written Test (page 11)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=19",
  },
  {
    key: "drive-test-vehicle",
    quote: "The vehicle must be furnished by the applicant for the drive " +
      "test and it must be representative of the type of license " +
      "applied for.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1D-3 Testing, Drive Test (page 11)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=19",
  },
  {
    key: "drive-test-maneuvers",
    quote: "The test consists of, but is not limited to, the following " +
      "maneuvers: 1. Starting and stopping. 2. Right and left turns. " +
      "3. Lane usage and position. 4. Stop signs and traffic signals. " +
      "5. Speed control. 6. Use of right of way. 7. Parking and " +
      "backing.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1D-3 Testing, Drive Test (page 12)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=20",
  },
  {
    key: "retest-same-day",
    quote: "Any test failed may not be retaken the same day.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1D-4 Test Failure (page 12)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=20",
  },
  {
    key: "no-permit-with-id",
    quote: "No person shall hold a permit or license with a State ID Card at the same time.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1P General Information (page 17)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=25",
  },
  {
    key: "under-21-expiry",
    quote: "Licenses issued to individuals under 21 expire on the license holder's 21st birthday.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1L Renewal Information (page 15)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=23",
  },
  {
    key: "name-address-60-days",
    quote: "State statute requires that name and address changes be made " +
      "within 60 days of the change.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1M Replacement Operator Licenses/State ID Cards (page 16)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=24",
  },
  {
    key: "organ-donor-16",
    quote: "Nebraska Law allows all permit, license or State ID card " +
      "holders age 16 and over to participate in organ and tissue " +
      "donation declaration through the DMV.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1J Organ and Tissue Donation Information (page 14)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=22",
  },
  {
    key: "insurance-minimums-manual",
    quote: "Failure to have required minimum insurance liability coverage " +
      "($25,000 property, $50,000 personal injury) and involvement in " +
      "an at fault crash.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1Q-1 When Your License May Be Suspended, Revoked or Impounded (page 18)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=26",
  },
  {
    key: "permit-violation-age-16",
    quote: "Violating terms of a School Learner's Permit, School Permit or " +
      "Learner's Permit. Note: In addition, individual will not be " +
      "eligible for any permit until they have reached the age of 16.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1Q-1 When Your License May Be Suspended, Revoked or Impounded (page 18)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=26",
  },
  {
    key: "twelve-points",
    quote: "Accumulating 12 points in a two-year period causes automatic " +
      "revocation of the operator's license for six months.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1Q-2 Point Revocation Procedures (page 18)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=26",
  },
  {
    key: "points-date-of-violation",
    quote: "Upon conviction of a violation, points are assessed to a " +
      "driving record as of the date of violation.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1Q-3 The Nebraska \"Point System\" (page 19)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=27",
  },
  {
    key: "alr-temp-15-days",
    quote: "Drivers receive a temporary license which expires 15 days after it is issued.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1Q-7 Administrative License Revocation (page 20)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=28",
  },
  {
    key: "alr-first-180",
    quote: "First time offenders who fail an alcohol test serve a 180 day " +
      "administrative license revocation (ALR).",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1Q-7 Administrative License Revocation (page 20)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=28",
  },
  {
    key: "alr-refusal-one-year",
    quote: "Persons who refuse to submit to a chemical test for alcohol or " +
      "drugs must serve a one year ALR.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1Q-7 Administrative License Revocation (page 20)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=28",
  },
  {
    key: "underage-02-impound",
    quote: "For a conviction of .02% the license will be impounded by the " +
      "court for 30 days and will become part of the driving record " +
      "for 90 days.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1Q-6 .02% Under Age Drinking (Age 20 and Younger) and Driving (page 20)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=28",
  },
  {
    key: "mip-impound",
    quote: "For a conviction of minor in possession the permit or license " +
      "will be impounded by the court for 30 days.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1Q-14 Minor in Possession (Age 20 and Younger) (page 22)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=30",
  },
  {
    key: "leaving-scene-revoked",
    quote: "Persons who leave the scene of a motor vehicle crash may have " +
      "their driver license revoked for up to one year upon " +
      "conviction.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1Q-13 Leaving the Scene (page 22)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=30",
  },
  {
    key: "employment-drive-permit",
    quote: "Employment Drive Permits only allow the holder to drive to and " +
      "from the work location and home via the most direct route and " +
      "strictly in reference to the terms of employment.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 1, 1Q-9 Employment Drive Permit (page 21)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=29",
  },
  {
    key: "open-container",
    quote: "It is unlawful to consume or be in possession of an open " +
      "container of an alco- holic beverage inside any vehicle on any " +
      "public roadway or public parking area in Nebraska. This " +
      "includes both drivers and passengers.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2A Alcohol, Drugs, and Driving (page 24)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=32",
  },
  {
    key: "zero-tolerance-under-21",
    quote: "Nebraska has a \"zero tolerance\" law for drivers under the " +
      "age of 21. This means that it is a violation to operate a " +
      "motor vehicle with alcohol in your system.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2A Alcohol, Drugs, and Driving (page 24)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=32",
  },
  {
    key: "bac-thresholds",
    quote: "It is unlawful to operate a motor vehicle on Nebraska roadways " +
      "if the driver has a Blood Alcohol Concentration (BAC) of: .02% " +
      "or higher and the driver is under 21. .04% or higher when " +
      "operating a commercial motor vehicle. .08% or higher " +
      "regardless of driver's age or vehicle type.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2A Alcohol, Drugs, and Driving (page 24)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=32",
  },
  {
    key: "providing-alcohol-minor",
    quote: "It is unlawful to provide alcohol to a minor and any such " +
      "person may be held liable for damages suffered.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2A Alcohol, Drugs, and Driving (page 24)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=32",
  },
  {
    key: "refusal-one-year",
    quote: "The administrative sanction for refusal is one year of license revocation.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2A Alcohol, Drugs, and Driving, Implied Consent Law (page 24)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=32",
  },
  {
    key: "reaction-time-04",
    quote: "REACTION TIME - Simple reaction time is impaired at .04% BAC. " +
      "When the driver must choose from a number of responses (choice " +
      "reaction), impairment begins at .03% BAC.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2A Alcohol, Drugs, and Driving (page 24)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=32",
  },
  {
    key: "tracking-05",
    quote: "TRACKING - A driver monitoring the vehicle's position on the " +
      "roadway is an example of tracking. The ability to track a " +
      "single object is impaired at .05% BAC.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2A Alcohol, Drugs, and Driving (page 25)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=33",
  },
  {
    key: "vision-05",
    quote: "VISION - Control over eye movement and the ability to merge " +
      "two images into one declines at .05% BAC.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2A Alcohol, Drugs, and Driving (page 25)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=33",
  },
  {
    key: "crash-risk-rise",
    quote: "CRASH RISK - The risk of being in a crash begins to rise " +
      "noticeably between .04% and .05% BAC, and increases rapidly " +
      "thereafter.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2A Alcohol, Drugs, and Driving (page 25)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=33",
  },
  {
    key: "crash-risk-05-twice",
    quote: "At .05% BAC a driver is twice as likely to be involved in a " +
      "fatal crash than a non-drinking driver.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2A Alcohol, Drugs, and Driving (page 25)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=33",
  },
  {
    key: "only-time",
    quote: "Only time can reduce the alcohol level and the effects from the body.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2A Alcohol, Drugs, and Driving (page 25)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=33",
  },
  {
    key: "absorption-factors",
    quote: "Many factors affect an individual's absorption of alcohol. " +
      "These include: 1) weight, 2) sex (a higher proportion of a " +
      "woman's body weight is in fat and fat absorbs less alcohol " +
      "than muscle tissue), 3) amount of food in the digestive tract, " +
      "and 4) time spent drinking.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2A Alcohol, Drugs, and Driving (page 24)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=32",
  },
  {
    key: "primary-law",
    quote: "Primary Law: any person driving in Nebraska can be stopped and " +
      "ticketed solely for this violation.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2B Air Bags - Child Restraints and Seat Belts (page 25)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=33",
  },
  {
    key: "secondary-law",
    quote: "Secondary Law: drivers are cited for this violation only if " +
      "stopped and ticketed for another violation.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2B Air Bags - Child Restraints and Seat Belts (page 25)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=33",
  },
  {
    key: "airbag-hand-position",
    quote: "The driver's recommended hand position for vehicles equipped " +
      "with airbags located in the steering wheel is the 9 o'clock " +
      "and 3 o'clock position.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2B Air Bags (page 25)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=33",
  },
  {
    key: "airbag-rear-seat-12",
    quote: "For maximum safety, children age 12 and younger should ride in the rear seat.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2B Air Bags (page 25)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=33",
  },
  {
    key: "airbag-rear-facing",
    quote: "Never use a rear facing infant safety seat in the front " +
      "passenger seat of an air bag equipped vehicle.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2B Air Bags (page 25)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=33",
  },
  {
    key: "airbag-10-inches",
    quote: "Drivers of air bag-equipped vehicles should allow at least 10 " +
      "inches of space between themselves and the steering wheel.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2B Air Bags (page 26)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=34",
  },
  {
    key: "child-rear-facing-2",
    quote: "Children ride rear-facing up to age two or until they reach " +
      "upper height or weight limit allowed by the car seat's " +
      "manufacturer.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2B Child Passenger Restraint Law (page 25)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=33",
  },
  {
    key: "child-under-8",
    quote: "Children up to age eight must ride correctly secured in a " +
      "federally approved child safety seat.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2B Child Passenger Restraint Law (page 26)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=34",
  },
  {
    key: "child-8-to-18",
    quote: "Children ages eight up to age eighteen must ride secured in a " +
      "seat belt or child safety seat. (Secondary Law)",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2B Child Passenger Restraint Law (page 26)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=34",
  },
  {
    key: "child-cargo-area",
    quote: "Children up to age eighteen are prohibited from riding in cargo areas. (Primary Law)",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2B Child Passenger Restraint Law (page 26)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=34",
  },
  {
    key: "pop-scp-all-buckled",
    quote: "If the driver holds a Provisional Operators Permit or a School " +
      "Permit, all passengers must ride buckled up. (Secondary Law)",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2B Child Passenger Restraint Law (page 26)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=34",
  },
  {
    key: "occupant-protection-law",
    quote: "Drivers and front seat passengers are required to ride buckled " +
      "up in a seat belt or child safety seat, this includes " +
      "autocycles. (Secondary Law)",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2B Occupant Protection Law (page 26)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=34",
  },
  {
    key: "children-pets-unattended",
    quote: "Never under any circumstance leave children unattended or " +
      "unsupervised in a motor vehicle.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2C Children and Pets (page 26)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=34",
  },
  {
    key: "dont-veer-for-deer",
    quote: "If you are about to hit a deer, your safest action is to BRAKE " +
      "(firmly), STEER (to maintain control) and STOP (as safely as " +
      "possible).",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2D \"Don't Veer for Deer\" - Driver Tips (page 26)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=34",
  },
  {
    key: "deer-dusk-dawn",
    quote: "Watch for deer from dusk to dawn, spring and fall, near waterways and near wooded areas.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2D \"Don't Veer for Deer\" - Driver Tips (page 26)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=34",
  },
  {
    key: "nitrous-oxide",
    quote: "It is unlawful to use nitrous oxide in any motor vehicle " +
      "operated on any public roadway in this state.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2F Nitrous Oxide Use Prohibited (page 27)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=35",
  },
  {
    key: "epilepsy",
    quote: "EPILEPSY. If under medical control, epilepsy is not dangerous, " +
      "however, if an applicant indicates that they have had a " +
      "seizure or loss of consciousness within a three month period " +
      "prior to renewing or obtaining an operator's license",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2E Health and Driving (page 27)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=35",
  },
  {
    key: "medication-consult",
    quote: "Physicians and/or pharmacist should be consulted regarding any " +
      "prescription medication and its possible effects on driving.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2E Health and Driving (page 27)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=35",
  },
  {
    key: "required-equipment",
    quote: "The following equipment is required on vehicles by Nebraska " +
      "law: Headlights Tail lights Brake lights Turn signals Horn " +
      "Windshield wipers Muffler Seat belts (appropriate to year " +
      "manufactured)",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2J Required Equipment (page 29)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=37",
  },
  {
    key: "tire-tread-depth",
    quote: "Pneumatic tires with at least 2/32\" tread No objects hanging " +
      "or posted in windows which obstruct vision",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2J Required Equipment (page 29)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=37",
  },
  {
    key: "penny-test",
    quote: "If any part of Lincoln's head is covered by the tread, you're " +
      "driving with the safe amount of tread.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2N Tire Pressure/Tread Depth (page 30)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=38",
  },
  {
    key: "steering-lock",
    quote: "Never turn your vehicle's ignition to the \"lock\" position " +
      "when the vehicle is in motion. You will be unable to control " +
      "the vehicle.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2L Steering Wheel Locking Mechanism (page 29)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=37",
  },
  {
    key: "pulled-over-signal",
    quote: "Activate your turn signal and pull off or to the side of the " +
      "roadway as soon as it is safe to do so.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2G What to Do and Expect When Pulled Over by Police (page 27)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=35",
  },
  {
    key: "pulled-over-interior-lights",
    quote: "Turn on your interior lights if you are pulled over at night " +
      "to assist with visibility. Officers may use a spotlight for " +
      "additional visibility.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2G What to Do and Expect When Pulled Over by Police (page 28)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=36",
  },
  {
    key: "pulled-over-hands",
    quote: "Keep your hands on the steering wheel or in a visible location " +
      "so they are easily observable.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2G What to Do and Expect When Pulled Over by Police (page 28)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=36",
  },
  {
    key: "pulled-over-weapon",
    quote: "Let the officer know if you have a weapon in the vehicle upon first contact.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 2, 2G What to Do and Expect When Pulled Over by Police (page 28)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=36",
  },
  {
    key: "red-light",
    quote: "Red. Stop - come to a complete stop before reaching the " +
      "intersection, stop line or crosswalk, and remain stopped as " +
      "long as the light is red.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3A-1 Color and Types (page 31)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=39",
  },
  {
    key: "dark-signal-stop-sign",
    quote: "During a power failure when the signal lights are not " +
      "operating, a dark (uncovered) signal light is to be taken as a " +
      "stop sign.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3A-1 Color and Types (page 31)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=39",
  },
  {
    key: "yellow-light",
    quote: "Yellow. Caution - a steady yellow light is a warning that the " +
      "light is about to change. If the vehicle has not entered the " +
      "intersection, it should be brought to a safe stop.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3A-1 Color and Types (page 31)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=39",
  },
  {
    key: "beat-the-light",
    quote: "Speeding up to \"beat the light\" is unlawful.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3A-1 Color and Types (page 31)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=39",
  },
  {
    key: "green-light",
    quote: "Green. Go - A vehicle may proceed through an intersection in " +
      "the direction indicated by the signal if the roadway is clear.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3A-1 Color and Types (page 31)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=39",
  },
  {
    key: "flashing-yellow-light",
    quote: "Flashing Yellow Light. Be alert and proceed with caution.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3A-1 Color and Types (page 31)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=39",
  },
  {
    key: "red-arrow",
    quote: "Red Arrow. Come to a complete stop before reaching the " +
      "intersection, stop line or crosswalk, and remain stopped as " +
      "long as the arrow is red. Turning on a red arrow is " +
      "prohibited.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3A-1 Color and Types (page 32)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=40",
  },
  {
    key: "green-arrow",
    quote: "Green Arrow. If in the proper lane, proceed in the direction " +
      "of the arrow when the roadway is clear.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3A-1 Color and Types (page 32)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=40",
  },
  {
    key: "turn-on-red-stop-first",
    quote: "Failure to come to a complete stop prior to turning is a violation.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3A-2 Turning on Red (page 32)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=40",
  },
  {
    key: "right-turn-on-red",
    quote: "Right turn on red. Turning right at a circular red light after " +
      "stopping is allowed, unless signs prohibiting it are posted at " +
      "the intersection.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3A-2 Turning on Red (page 32)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=40",
  },
  {
    key: "left-turn-on-red",
    quote: "Left turn on red. Turning left at a circular red light after " +
      "stopping is allowed only if traveling on a one-way street and " +
      "turning onto another one-way street.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3A-2 Turning on Red (page 32)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=40",
  },
  {
    key: "no-turn-on-red-arrow",
    quote: "Turning on red arrow. Turning on a red arrow is prohibited.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3A-2 Turning on Red (page 32)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=40",
  },
  {
    key: "lane-use-red-x",
    quote: "Never drive in a lane under a red \"X\" signal.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3A-3 Lane Use Signals (page 32)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=40",
  },
  {
    key: "lane-use-yellow-x",
    quote: "A steady yellow \"X\" signal means the driver should move out " +
      "of the lane as soon as safely possible as a red \"X\" will " +
      "soon appear.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3A-3 Lane Use Signals (page 32)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=40",
  },
  {
    key: "lane-use-green-arrow",
    quote: "It is permitted to drive in a lane under a downward green arrow symbol.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3A-3 Lane Use Signals (page 32)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=40",
  },
  {
    key: "hybrid-beacon-flashing-red",
    quote: "Drivers approaching the red flashing beacons must stop and " +
      "verify that no pedestrian is in their lane nor in any adjacent " +
      "lane before proceeding.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3A-4 Pedestrian Hybrid Beacon (page 33)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=41",
  },
  {
    key: "hybrid-beacon-dark",
    quote: "After the pedestrian cycle is complete, the beacons will be " +
      "dark. The state statute requiring vehicles approaching a dark " +
      "traffic signal to stop does not apply to these midblock " +
      "beacons.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3A-4 Pedestrian Hybrid Beacon (page 33)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=41",
  },
  {
    key: "sign-colors-red-yellow",
    quote: "Red - Stop, yield, do not enter or wrong way. Yellow - Used on " +
      "warning signs to call attention to unexpected conditions.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-1 Sign Colors (page 34)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=42",
  },
  {
    key: "sign-colors-rest",
    quote: "Green - Guide information, such as distance or direction. Blue " +
      "- Motorist services, such as rest areas or hospitals. White - " +
      "Regulatory, such as speed limits. Orange - Alert to road " +
      "workers, construction area. Brown - Recreation and cultural " +
      "interest areas.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-1 Sign Colors (page 34)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=42",
  },
  {
    key: "shape-octagon",
    quote: "Octagon: STOP The octagonal (eight-sided) shape always means stop.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-2 Sign Shapes (page 35)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=43",
  },
  {
    key: "shape-triangle",
    quote: "Triangle: YIELD The triangle (three-sided) shape always means yield.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-2 Sign Shapes (page 35)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=43",
  },
  {
    key: "shape-diamond",
    quote: "Diamond: WARNING These signs warn you of special conditions or " +
      "hazards ahead. Slow and proceed with caution.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-2 Sign Shapes (page 35)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=43",
  },
  {
    key: "shape-rectangle",
    quote: "Rectangle: REGULATORY OR GUIDE When vertical, signs are " +
      "generally used to give instructions or tell you the law. When " +
      "horizontal, signs give directions or information.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-2 Sign Shapes (page 35)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=43",
  },
  {
    key: "shape-pennant",
    quote: "Pennant: NO PASSING ZONE Signs indicate a no passing zone.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-2 Sign Shapes (page 35)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=43",
  },
  {
    key: "crossbuck",
    quote: "Crossbuck and Circle: RAILROAD CROSSING Advises the motor " +
      "vehicle operator of a railroad crossing ahead. It means look " +
      "both ways, listen for and yield to trains and be prepared to " +
      "stop if a train is approaching. The number under the crossbuck " +
      "indicates there is more than one set of tracks following the " +
      "sign.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-2 Sign Shapes (page 35)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=43",
  },
  {
    key: "rr-gates-never-drive-around",
    quote: "NEVER DRIVE AROUND THE GATES. It is dangerous and against the law.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-2 Sign Shapes, Gates (page 35)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=43",
  },
  {
    key: "reg-stop-sign",
    quote: "Stop - Come to a complete stop before entering an " +
      "intersection. If there is a painted stop line, stop at the " +
      "line. Stop before entering a crosswalk, painted or unpainted.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-3 Regulatory Signs (page 36)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=44",
  },
  {
    key: "reg-yield-sign",
    quote: "Yield - Slow down or stop, if necessary, to give the " +
      "right-of-way to crossing or merging vehicles.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-3 Regulatory Signs (page 36)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=44",
  },
  {
    key: "reg-speed-limit-sign",
    quote: "Speed Limit - Indicates the maximum speed that a vehicle can " +
      "lawfully travel on the roadway.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-3 Regulatory Signs (page 36)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=44",
  },
  {
    key: "reg-red-circle-slash",
    quote: "A red circle with a slash means NO - the symbol indicates what is prohibited.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-3 Regulatory Signs (page 36)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=44",
  },
  {
    key: "wrong-way-do-not-enter",
    quote: "Wrong Way & Do Not Enter - These signs are often used in " +
      "combination, and identify a one-way street or expressway ramp. " +
      "Do not drive past either of these signs.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-3 Regulatory Signs (page 37)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=45",
  },
  {
    key: "center-lane-left-turn-only",
    quote: "Center Lane, Left Turn Only - A driver may use the lane only to make a left turn.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-3 Regulatory Signs (page 37)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=45",
  },
  {
    key: "warn-purpose",
    quote: "Warning signs call attention to unexpected conditions.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 38)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=46",
  },
  {
    key: "warn-slippery",
    quote: "Slippery When Wet - Road surface may be slick when wet. Slow and proceed with caution.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 39)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=47",
  },
  {
    key: "warn-lane-ends",
    quote: "Lane Ends - The lane ends soon and a merging maneuver will be required.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 39)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=47",
  },
  {
    key: "warn-low-clearance",
    quote: "Low Clearance - The overpass has a low clearance. Do not " +
      "proceed if the vehicle height exceeds the dimensions " +
      "indicated.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 39)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=47",
  },
  {
    key: "warn-hill",
    quote: "Hill - A steep down grade ahead. Check your brakes.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 39)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=47",
  },
  {
    key: "warn-deer-crossing",
    quote: "Deer Crossing - Deer often cross the roadway in this area. Be " +
      "alert, slow down if you see a deer.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 39)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=47",
  },
  {
    key: "warn-deer-anywhere",
    quote: "Deer may be present along any roadway throughout Nebraska, " +
      "always be cautious. The sign is only installed in higher " +
      "deervehicle con ict areas of deer crossings. The deer can " +
      "cross anywhere.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 39)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=47",
  },
  {
    key: "warn-horse-drawn",
    quote: "Horse-Drawn Vehicle - this sign is posted in areas where slow " +
      "moving, horse-drawn vehicles often cross or share the roadway " +
      "with motorized vehicles.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 39)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=47",
  },
  {
    key: "warn-ped-crossing",
    quote: "Pedestrian Crossing - Be alert for people crossing the street. " +
      "Slow down, yield right of way to pedestrians, or stop if " +
      "necessary.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 40)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=48",
  },
  {
    key: "warn-school-crossing",
    quote: "School Crossing - placed at the location where school children " +
      "cross the roadway. Obey signs from school crossing guards.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 40)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=48",
  },
  {
    key: "warn-school-advance",
    quote: "School Advance Crossing - A crosswalk where school children cross the roadway is ahead.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 40)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=48",
  },
  {
    key: "warn-reverse-turn",
    quote: "Reverse Turn - Just ahead, the road turns sharply right, then left.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 40)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=48",
  },
  {
    key: "warn-reverse-curve",
    quote: "Reverse Curve - Just ahead, the road curves right, then left.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 40)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=48",
  },
  {
    key: "warn-curve",
    quote: "Curve - There is a gradual curve to the right ahead. Slow down " +
      "to the safe speed indicated.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 40)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=48",
  },
  {
    key: "warn-advisory-plaque",
    quote: "Advisory Speed Plaque - Supplements a warning (diamond) sign " +
      "to indicate the advisory speed for the condition.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 40)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=48",
  },
  {
    key: "warn-winding",
    quote: "Winding Road - The road ahead is winding with a series of turns or curves.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 41)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=49",
  },
  {
    key: "warn-t-intersection",
    quote: "\"T\" Intersection - The roadway ends ahead. You must signal " +
      "before turning right or left.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 41)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=49",
  },
  {
    key: "warn-sideroad",
    quote: "Sideroad - A roadway joins from the right. Be alert for vehicles entering the roadway.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 41)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=49",
  },
  {
    key: "warn-roundabout",
    quote: "Roundabout - A roundabout intersection is ahead. Slow down and " +
      "YIELD at the roundabout. Yield to all vehicles approaching on " +
      "your left already in the roundabout.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 41)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=49",
  },
  {
    key: "warn-no-train-horn",
    quote: "No Train Horn - Installed under the Railroad Crossing signs in " +
      "locations where a quiet zone has been established.Trains do " +
      "not blow the horn at this location.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-4 Warning Signs (page 41)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=49",
  },
  {
    key: "slow-moving-emblem",
    quote: "Slow Moving Vehicles Warning - Vehicles which travel 25 MPH or " +
      "less - such as farm equipment - must display these emblems " +
      "when using a public roadway.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-5 Special Signs (page 42)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=50",
  },
  {
    key: "service-signs",
    quote: "Service Signs - Blue and white signs direct motorists to " +
      "services, such as hospitals, gas, food, lodging, etc.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-5 Special Signs (page 42)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=50",
  },
  {
    key: "guide-signs",
    quote: "Guide Signs - Green and white signs give directional and " +
      "distance information. Diagrams direct the exit and entrance " +
      "movements at interchanges.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-5 Special Signs (page 42)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=50",
  },
  {
    key: "reference-post",
    quote: "Reference Post Marker - These signs are located on Nebraska " +
      "highways in one mile increments to serve as a reference point " +
      "for drivers to use when assistance is needed, or an emergency " +
      "exists.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-5 Special Signs (page 42)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=50",
  },
  {
    key: "handicapped-parking-sign",
    quote: "Handicapped Parking - Parking spaces reserved for those with " +
      "handicapped parking privileges.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-5 Special Signs (page 42)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=50",
  },
  {
    key: "work-zone-orange",
    quote: "The orange signs with messages in black letters are reserved " +
      "strictly to identify work zones.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-6 Work Zone Devices (page 43)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=51",
  },
  {
    key: "work-zone-black-on-orange",
    quote: "Recognize that when you see black-on-orange signs, you are " +
      "about to enter a work zone and should stay ALERT.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-6 Work Zone Devices (page 43)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=51",
  },
  {
    key: "channelizing-devices",
    quote: "Channelizing Devices - Barricades, vertical panels, drums and " +
      "cones are the most commonly used devices to guide drivers " +
      "safely through the work zone.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3B-6 Work Zone Devices (page 43)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=51",
  },
  {
    key: "broken-yellow-line",
    quote: "A broken yellow line indicates that passing on the left is " +
      "permitted when the way ahead is clear.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3C-1 Yellow Center Line Markings (page 44)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=52",
  },
  {
    key: "solid-and-broken-yellow",
    quote: "A broken yellow line alongside a solid yellow line indicates " +
      "that passing is permitted on the side of the broken line, but " +
      "not on the side of the solid line.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3C-1 Yellow Center Line Markings (page 44)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=52",
  },
  {
    key: "double-yellow-crossings",
    quote: "Making a left turn or avoiding an obstruction are the only " +
      "lawful crossings allowed over double yellow lines, when " +
      "turning into or from an alley, private road, or driveway " +
      "unless otherwise prohibited by signs.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3C-1 Yellow Center Line Markings (page 44)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=52",
  },
  {
    key: "shared-left-turn-caution",
    quote: "Motorists entering this lane should use caution and may only " +
      "turn left. Using this lane to pass is prohibited.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3C-2 Yellow Lane Line Markings (page 45)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=53",
  },
  {
    key: "solid-white-turn-lanes",
    quote: "Solid white lines are used for turn lanes and to discourage " +
      "lane changes near intersections.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3C-3 White Lane Line Markings (page 45)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=53",
  },
  {
    key: "turn-arrow-only",
    quote: "When a lane is marked with a curved arrow and the word ONLY, " +
      "you must turn in the direction of the arrow. When a lane is " +
      "marked with both a curved and straight arrow, turning or " +
      "proceeding straight ahead is allowed.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3C-3 White Lane Line Markings (page 45)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=53",
  },
  {
    key: "stop-lines",
    quote: "Stop lines are white lines painted across the pavement at " +
      "intersections indicating the position to stop. In urban areas, " +
      "the line is usually located about four feet before a " +
      "crosswalk.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3C-4 Other Pavement Markings (page 46)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=54",
  },
  {
    key: "crosswalk-markings",
    quote: "Pedestrians have the right of way when pedestrians are in " +
      "these crosswalks. Crosswalks are sometimes in the middle of " +
      "the block in residential areas and school areas. Crosswalk " +
      "areas may also be unpainted.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3C-4 Other Pavement Markings (page 46)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=54",
  },
  {
    key: "rumble-strips",
    quote: "Rumble strips are intended to alert drowsy or inattentive " +
      "drivers through vibration and sound that their vehicles have " +
      "left the travel lane or are approaching a stop sign or signal.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3C-4 Other Pavement Markings (page 46)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=54",
  },
  {
    key: "two-way-left-turn-lane",
    quote: "A driver may use the center lane to make a left turn. Caution " +
      "should be used since there may be left-turning vehicles from " +
      "the opposite direction also using the lane. The lane cannot be " +
      "used to pass other vehicles.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3C-4 Other Pavement Markings (page 46)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=54",
  },
  {
    key: "bike-lane-illegal-to-drive",
    quote: "Bike lanes are a portion of a roadway that has been designated " +
      "for the exclusive use by bicyclists. Bike lanes are designed " +
      "to separate bicycle traffic from motorized vehicle traffic. It " +
      "is illegal to drive in these lanes.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3C-4 Other Pavement Markings, Bike Lanes (page 46)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=54",
  },
  {
    key: "bike-lane-crossing",
    quote: "However, motorists may cross over the bike lane to move into " +
      "another appropriate travel lane, to enter or exit on-street " +
      "parking spaces or to enter or exit private property.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3C-4 Other Pavement Markings, Bike Lanes (page 46)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=54",
  },
  {
    key: "shared-lane-three-feet",
    quote: "Motorists should avoid passing bicyclists until a safe " +
      "distance of no less than three feet clearance exists.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 3, 3C-4 Other Pavement Markings, Shared Lane (page 47)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=55",
  },
  {
    key: "row-uncontrolled",
    quote: "For right-of-way at an uncontrolled intersection when vehicles " +
      "are approaching the intersection at approximately the same " +
      "time and where signs or signals are not used, watch for " +
      "vehicles coming from the right and yield the right-of-way.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4B-1 Right-of-Way (page 48)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=56",
  },
  {
    key: "row-drive-defensively",
    quote: "Drive defensively, other drivers may not stop even if you have the right-of-way.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4B-1 Right-of-Way (page 48)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=56",
  },
  {
    key: "two-way-stops",
    quote: "Come to a full stop prior to entering the intersection from " +
      "the stop signs. 49 Look in all directions for approaching " +
      "pedestrians and vehicles.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4B-3 At intersectisons with two-way stops (page 48)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=56",
  },
  {
    key: "four-way-stop-duty",
    quote: "All drivers have a duty to stop followed by a duty to use " +
      "ordinary care as they proceed through the intersection.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4B-4 At intersections with four-way stops (page 49)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=57",
  },
  {
    key: "four-way-stop-tiebreak",
    quote: "If in doubt, yield to the driver on your right. NEVER insist " +
      "on the right-of way and risk a collision.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4B-4 At intersections with four-way stops (page 49)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=57",
  },
  {
    key: "roundabout-counterclockwise",
    quote: "However traffic flows one-way in a counter-clockwise direction around the center island.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4B-5 Rules for Driving Roundabouts (page 49)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=57",
  },
  {
    key: "roundabout-rules",
    quote: "Slow down to the posted advisory speed. Yield to pedestrians " +
      "and bicyclists in the crosswalk as you approach the " +
      "roundabout. Yield to traffic approaching on your left already " +
      "in the roundabout. Enter the roundabout circle when there is a " +
      "safe gap in traffic. As you approach your exit, turn on your " +
      "right-turn signal.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4B-5 Rules for Driving Roundabouts (page 49)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=57",
  },
  {
    key: "roundabout-truck-apron",
    quote: "Truck aprons are not to be used by cars, SUVs, pickup trucks, bicyclists or pedestrians.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4B-5 Rules for Driving Roundabouts (page 49)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=57",
  },
  {
    key: "roundabout-emergency",
    quote: "If you have entered the roundabout, continue to your exit, " +
      "then once beyond the splitter island, pull over and allow the " +
      "emergency vehicles to pass.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4B-5 Rules for Driving Roundabouts (page 49)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=57",
  },
  {
    key: "roundabout-dual-lane",
    quote: "To make a left turn, choose the shared through/left-turn lane. " +
      "To make a right turn, choose the shared through/right-turn " +
      "lane.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4B-5 Rules for Driving Roundabouts (page 49)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=57",
  },
  {
    key: "move-crashes-shoulder",
    quote: "Drivers involved in minor crashes on the interstate or freeway " +
      "system in which there are no injuries and the vehicles are " +
      "still drivable should drive the vehicles to the nearest " +
      "shoulder out of the travel lanes.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4B-7 Move Crashes to Shoulder and Quick Clearance (page 51)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=59",
  },
  {
    key: "leaving-driveway",
    quote: "When leaving alleys/driveways/parking lots to enter a roadway, " +
      "STOP before driving onto a sidewalk or onto the sidewalk area " +
      "and proceed slowly. Yield the right of way to any pedestrian " +
      "and approaching vehicles.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4B-8 Right-of-Way (page 51)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=59",
  },
  {
    key: "emergency-remain-stopped",
    quote: "Remain stopped until the emergency vehicle has passed. Watch " +
      "for other emergency vehicles before proceeding.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4B-9 Right-of-Way to Emergency Vehicles (page 51)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=59",
  },
  {
    key: "funeral-escort",
    quote: "Drivers are required to yield to funeral escort vehicles " +
      "displaying proper audio or visual signals.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4B-9 Right-of-Way to Emergency Vehicles (page 52)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=60",
  },
  {
    key: "ped-crosswalk-yield",
    quote: "Yield to all pedestrians within crosswalks. Slow down and be ready to stop if needed.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4B-10 Right-of-Way to Pedestrians (page 52)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=60",
  },
  {
    key: "ped-three-feet",
    quote: "Motorists should leave a safe distance of no less than three " +
      "feet clearance to avoid colliding with any pedestrian upon any " +
      "roadway.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4B-10 Right-of-Way to Pedestrians (page 52)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=60",
  },
  {
    key: "white-cane",
    quote: "When approaching someone using a white cane or guide dog, stop " +
      "until the person is well away from the roadway or path of " +
      "travel.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4B-11 Right-of-Way to Visually Impaired (page 52)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=60",
  },
  {
    key: "speed-reasonable",
    quote: "Nebraska's speed law requires driving at a speed that is " +
      "reasonable and safe under existing conditions.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4C Speed Laws (page 52)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=60",
  },
  {
    key: "max-speeds-low",
    quote: "20 miles per hour (MPH) in business districts. 25 MPH in " +
      "residential districts. 50 MPH on any roadway that is gravel or " +
      "not dustless. 55 MPH on any dustless (or paved) roadway and " +
      "not part of the state highway system.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4C-1 Maximum Speed Limits - Unless Otherwise Posted (page 52)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=60",
  },
  {
    key: "max-speeds-high",
    quote: "65 MPH on any four-lane divided highway not a part of the " +
      "state highway system. 65 MPH on the state highway system other " +
      "than an expressway, super-two highway or freeway. 70 MPH on " +
      "expressways or super-two-highways and freeways that are part " +
      "of the state highway system. 75 MPH on rural interstate " +
      "highways",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4C-1 Maximum Speed Limits - Unless Otherwise Posted (page 52)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=60",
  },
  {
    key: "watch-posted-signs",
    quote: "Watch carefully for posted speed limit signs.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4C-1 Maximum Speed Limits - Unless Otherwise Posted (page 52)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=60",
  },
  {
    key: "school-zone-speed",
    quote: "School Zone: reduce speed, obey all signs and be prepared to stop anytime.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4C-3 Adjusting Speed for Work and School Zones (page 53)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=61",
  },
  {
    key: "fines-doubled",
    quote: "Fines are doubled in school zones and when workers are present in work zones.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4C-3 Adjusting Speed for Work and School Zones (page 53)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=61",
  },
  {
    key: "passing-unlawful-zones",
    quote: "It is unlawful to: Pass in any marked no-passing zones. Exceed " +
      "the posted speed limit when passing.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4D-1 Passing (page 53)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=61",
  },
  {
    key: "passing-100-feet",
    quote: "Pass within 100 feet of any intersection. Pass within 100 feet " +
      "of any railroad crossing. Pass on any hill, curve or bridge " +
      "where vision is obstructed.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4D-1 Passing (page 53)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=61",
  },
  {
    key: "how-to-pass",
    quote: "Stay at least three seconds behind the vehicle ahead. Signal " +
      "and check all around your vehicle before passing.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4D-2 How To Pass (page 53)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=61",
  },
  {
    key: "passing-return",
    quote: "Signal and move back into the right lane when the front of the " +
      "vehicle being passed or the vehicles's headlights are seen in " +
      "the rear view mirror.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4D-2 How To Pass (page 53)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=61",
  },
  {
    key: "being-passed",
    quote: "When another vehicle is passing, stay in the lane and maintain " +
      "speed unless there is an emergency.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4D-3 When Being Passed (page 54)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=62",
  },
  {
    key: "passing-parked-cars",
    quote: "When driving past parked vehicles, watch for vehicles pulling out.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4D-4 Passing Parked Cars (page 54)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=62",
  },
  {
    key: "signal-100-feet",
    quote: "Signal at least 100 feet before turning, or moving right or left.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4E-1 Signaling (page 54)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=62",
  },
  {
    key: "lane-change-steps",
    quote: "Check in rear view and side mirrors. Check over left or right " +
      "shoulder. Check blind spots. Check for other drivers who may " +
      "also be moving into the same lane. Change lanes. DO NOT change " +
      "lanes in an intersection.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4E-3 Lane Changing (page 55)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=63",
  },
  {
    key: "right-turn-close",
    quote: "A right turn shall be made as close as practical to the right " +
      "side of the road or street.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4E-4 Turning (page 55)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=63",
  },
  {
    key: "left-turn-lane",
    quote: "If a center lane is not marked, a left turn shall be made from " +
      "the left lane lawfully available and the left turn shall be " +
      "made into the left lane that is lawfully available.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4E-4 Turning (page 55)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=63",
  },
  {
    key: "double-turning-lanes",
    quote: "Double turning lanes are indicated by regulatory signs and lane markings.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4E-4 Turning (page 56)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=64",
  },
  {
    key: "roadside-stop-12-inches",
    quote: "Park vehicle within 12 inches of and parallel to the curb, or " +
      "road's edge. Always park on the right side of roadway, unless " +
      "it is a one-way street.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4F-1 Emergency Roadside Stop (page 56)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=64",
  },
  {
    key: "roadside-stop-gear",
    quote: "Shift transmission to proper parking gear and set parking " +
      "brake. 56 Turns from one-way to two-way Turns from two-way to " +
      "one-way Activate 4-way ashers. Turn off engine and remove " +
      "keys.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4F-1 Emergency Roadside Stop (page 56)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=64",
  },
  {
    key: "no-park-beside",
    quote: "On a roadway directly beside stopped or parked vehicles. On a " +
      "sidewalk, within an intersection, or on a crosswalk.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4F-2 Where Not to Park or Stop a Vehicle (page 57)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=65",
  },
  {
    key: "no-park-20-crosswalk",
    quote: "Within 20 feet of a crosswalk at an intersection.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4F-2 Where Not to Park or Stop a Vehicle (page 57)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=65",
  },
  {
    key: "no-park-bridge-rail",
    quote: "On bridges, within a highway tunnel, or within 50 feet of railroad tracks.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4F-2 Where Not to Park or Stop a Vehicle (page 57)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=65",
  },
  {
    key: "parking-on-hills",
    quote: "If you park facing uphill where there is a curb, set the " +
      "parking brake and turn the wheels away from the curb. In any " +
      "other situation, turn the wheels toward the curb or edge of " +
      "the road.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4F-3 Parking on Hills (page 57)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=65",
  },
  {
    key: "handicapped-stalls",
    quote: "Handicapped parking stalls are reserved for vehicles which " +
      "display handicap license plate or permit from which the " +
      "handicapped person enters or exits, 24 hours per day, 7 days " +
      "per week.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4F-4 Handicapped Parking (page 57)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=65",
  },
  {
    key: "handicapped-access-aisles",
    quote: "Do not park in the handicapped parking access aisles located " +
      "directly beside handicapped parking stalls.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4F-4 Handicapped Parking (page 57)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=65",
  },
  {
    key: "rr-approach-speed",
    quote: "Do so at a constant controlled speed - fast enough to coast " +
      "across tracks if vehicle engine stalls and slow enough to stop " +
      "if necessary.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4G-2 When Approaching a Railroad Crossing (page 58)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=66",
  },
  {
    key: "rr-expect-train",
    quote: "Expect a train on any track at any time.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4G-2 When Approaching a Railroad Crossing (page 58)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=66",
  },
  {
    key: "rr-stop-15-50",
    quote: "When required to stop, stop at the stop line. If none, stop " +
      "not less than 15 feet nor more than 50 feet from the nearest " +
      "rail.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4G-2 When Approaching a Railroad Crossing (page 58)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=66",
  },
  {
    key: "rr-never-drive-under-gate",
    quote: "Never drive any vehicle through, around or under any gate or barrier.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4G-2 When Approaching a Railroad Crossing (page 58)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=66",
  },
  {
    key: "rr-after-stopping",
    quote: "Make sure all tracks are clear. Make sure there is room for " +
      "your car on other side of tracks. Watch for vehicles that must " +
      "stop at railroad crossings, such as buses and trucks carrying " +
      "hazardous materials. Do not change gears when crossing the " +
      "tracks.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4G-3 After Stopping (page 58)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=66",
  },
  {
    key: "rr-stalled-vehicle",
    quote: "If the vehicle stalls on a crossing, get everyone out and off " +
      "the tracks immediately. Move in the direction the train or " +
      "on-track equipment is expected.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4G-4 Get Out of Stalled Vehicle (page 58)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=66",
  },
  {
    key: "rr-never-beat-train",
    quote: "Never try to beat a train or on-track equipment across the " +
      "tracks. Even if it is a tie, you will be the loser.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4G-6 General Railroad Crossing Information (page 59)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=67",
  },
  {
    key: "ens-sign",
    quote: "The typically blue colored ENS sign is at every highway-rail " +
      "grade crossing and provides the public with a 24/7/365 " +
      "telephone number to call to report problems or emergencies at " +
      "these railroad locations.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 4, 4G-5 Railroad Emergency Notication System (ENS) (page 58)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=66",
  },
  {
    key: "interstate-definition",
    quote: "\"Interstate\" refers to any controlled access, multi-lane highway.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5A Interstate Driving (page 60)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=68",
  },
  {
    key: "interstate-min-speed",
    quote: "Minimum speed on the interstate is 40 MPH.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5A-2 Driving on the Interstate (page 60)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=68",
  },
  {
    key: "interstate-miss-exit",
    quote: "If you miss your exit, go on to the next exit. Backing up or " +
      "using emergency crossover points on the interstate is " +
      "prohibited.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5A-2 Driving on the Interstate (page 60)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=68",
  },
  {
    key: "interstate-median",
    quote: "Never cross the median of the interstate highway.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5A-2 Driving on the Interstate (page 60)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=68",
  },
  {
    key: "interstate-exit-planning",
    quote: "Plan ahead. Watch for exit signs and the proper lane position " +
      "for those exits. Signal and move into the proper lane a mile " +
      "or more before the intended exit.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5A-3 Leaving the Interstate (page 60)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=68",
  },
  {
    key: "headlights-sunset-sunrise",
    quote: "Headlights must be used from sunset to sunrise.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5B Driving at Night (page 61)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=69",
  },
  {
    key: "low-beams-fade",
    quote: "Turn on low beams when daylight begins to fade to help others see you.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5B Driving at Night (page 61)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=69",
  },
  {
    key: "parking-lights-unlawful",
    quote: "Driving with parking lights only is unlawful.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5B Driving at Night (page 61)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=69",
  },
  {
    key: "night-speed-headlights",
    quote: "Speed should be adjusted to safely stop within the area illuminated by the headlights.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5B Driving at Night (page 61)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=69",
  },
  {
    key: "high-beams-200-feet",
    quote: "Use high beams on open highways. Dim headlights when following " +
      "within 200 feet of another vehicle, and when meeting oncoming " +
      "vehicles.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5B Driving at Night (page 61)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=69",
  },
  {
    key: "glare-look-right",
    quote: "If the oncoming lights are blinding do not look directly at " +
      "the vehicle but look toward the right edge of the road.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5B Driving at Night (page 61)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=69",
  },
  {
    key: "rain-slow-down",
    quote: "To prevent hydroplaning, slow down. It may be necessary to " +
      "disengage cruise control. Increase your following distance. " +
      "Use low beam headlights.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5C-1 Rain (page 62)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=70",
  },
  {
    key: "flooding-six-inches",
    quote: "Remember, six inches of water will reach the bottom of most " +
      "passenger cars, causing loss of control or possible stalling.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5C-2 Flooding (page 62)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=70",
  },
  {
    key: "flooding-two-feet",
    quote: "Two feet of moving water can carry away most vehicles " +
      "including sport utility vehicles and pick-up trucks.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5C-2 Flooding (page 62)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=70",
  },
  {
    key: "fog-quarter-mile",
    quote: "Use low beam headlights. Reduce speed, and proceed with " +
      "extreme caution. Travel on roadway with posted speeds of 40 " +
      "MPH or more is not recommended when visibility is less than " +
      "1/4 of a mile.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5C-3 Fog (page 62)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=70",
  },
  {
    key: "snow-ice",
    quote: "Reduce speed and proceed with extreme caution. Increase " +
      "following distance. Keep windows clear. Make speed and " +
      "directional changes gradually. Do not use cruise control.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5C-5 Snow and Ice (page 62)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=70",
  },
  {
    key: "no-abs-pump",
    quote: "Vehicles not equipped with antilock (ABS) brakes: pump brake " +
      "pedal to keep brakes from locking up; there's no steering " +
      "control unless the tires are rolling.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5C-5 Snow and Ice (page 63)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=71",
  },
  {
    key: "studded-tires",
    quote: "Studded tires are only lawful from November 1 to April 1.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5C-5 Snow and Ice (page 63)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=71",
  },
  {
    key: "blizzard-stranded",
    quote: "Don't panic. Stay with the vehicle. Open a window slightly for fresh air.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5C-6 Blizzards (page 63)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=71",
  },
  {
    key: "wheels-off-pavement",
    quote: "Don't attempt to turn back onto the roadway immediately. Reduce speed.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5D-1 Wheels Drop Off Roadway or Pavement Edge (page 63)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=71",
  },
  {
    key: "wheels-off-return",
    quote: "Gradually turn back onto roadway when it is safe to do so staying in the driving lane.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5D-1 Wheels Drop Off Roadway or Pavement Edge (page 63)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=71",
  },
  {
    key: "distraction-three-types",
    quote: "There are three main types of distraction: Visual - taking " +
      "your eyes off the road; Manual - taking your hands off the " +
      "wheel; and Cognitive - taking your mind/focus off the driving " +
      "task.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5E-1 Distracted Driving (page 63)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=71",
  },
  {
    key: "texting-23-times",
    quote: "Studies reveal that text messaging increases a driver's crash risk by 23 times.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5E-1 Distracted Driving (page 64)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=72",
  },
  {
    key: "texting-football-field",
    quote: "Sending or receiving a text takes a driver's eyes from the " +
      "road for an aver- age of 4.6 seconds, the equivalent - at 55 " +
      "mph-of driving the length of an entire football field, " +
      "blindfolded.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5E-1 Distracted Driving (page 64)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=72",
  },
  {
    key: "texting-fine",
    quote: "The fine for texting and driving is $200 to $500.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5E-1 Distracted Driving (page 64)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=72",
  },
  {
    key: "handsfree-not-safer",
    quote: "It's the conversation, not the device that creates the danger.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5E-1 Distracted Driving (page 64)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=72",
  },
  {
    key: "dialing-six-times",
    quote: "Studies reveal that physically dialing a phone while driving " +
      "increases the risk of a crash as much as 6 times.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5E-1 Distracted Driving (page 64)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=72",
  },
  {
    key: "illegal-handheld",
    quote: "Use a handheld wireless communication device to read, type, or " +
      "send writ-ten communication while operating a motor vehicle",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5E-1 Distracted Driving (page 65)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=73",
  },
  {
    key: "illegal-television",
    quote: "To operate upon any public roadway a vehicle which is equipped " +
      "with a television set with the viewing screen that is visible " +
      "to the driver while operating such vehicle.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5E-1 Distracted Driving (page 65)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=73",
  },
  {
    key: "aggressive-driving",
    quote: "Aggressive driving is driving behavior that is frightening or " +
      "rude to other drivers. Examples of aggressive driving include, " +
      "but are not limited to: tailgating, cutting off other drivers, " +
      "running red lights and failing to yield to other vehicles.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5E-2 Aggressive Driving (page 65)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=73",
  },
  {
    key: "drowsy-nap",
    quote: "If you are drowsy, don't drive. Pull over to a safe area as " +
      "soon as you can and take a short nap. As little as 10-20 " +
      "minutes of sleep can make a big difference.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5F Drowsy or Fatigue Driving is Dangerous Driving (page 65)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=73",
  },
  {
    key: "drowsy-doesnt-work",
    quote: "What does not work in preventing drowsiness: rolling down a " +
      "window, chewing gum or turning up the radio. Caffeine, energy " +
      "drinks and other stimulants are not reliable for staying " +
      "alert.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5F Drowsy or Fatigue Driving is Dangerous Driving (page 66)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=74",
  },
  {
    key: "scan-10-15-seconds",
    quote: "Take in the situation on the road at least 10-15 seconds ahead.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5G-1 Defensive Driving Techniques (page 66)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=74",
  },
  {
    key: "blind-spot-definition",
    quote: "When changing lanes, glance over your shoulder to be sure no " +
      "one is in the \"blind spot.\" This is the area to the side of " +
      "a vehicle which cannot be seen in mirrors.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5G-1 Defensive Driving Techniques (page 66)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=74",
  },
  {
    key: "headlights-with-wipers",
    quote: "Use headlights whenever using windshield wipers.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5G-1 Defensive Driving Techniques (page 66)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=74",
  },
  {
    key: "horn-sharp-blast",
    quote: "Sound a sharp blast on the horn to alert another",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5G-1 Defensive Driving Techniques (page 66)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=74",
  },
  {
    key: "tap-brakes",
    quote: "Quickly tap brakes several times when slowing down to warn drivers behind you.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5G-1 Defensive Driving Techniques (page 66)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=74",
  },
  {
    key: "three-second-rule",
    quote: "Use the three-second rule to determine safe following distance.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5G-1 Defensive Driving Techniques (page 66)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=74",
  },
  {
    key: "three-second-count",
    quote: "Reaching the mark before three seconds pass is following too " +
      "closely. 4) Slow down and increase following distance.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5G-1 Defensive Driving Techniques (page 66)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=74",
  },
  {
    key: "three-second-adversity",
    quote: "Note: The three-second rule is a minimum requirement and " +
      "should be increased by one-second for each adversity factor " +
      "encountered",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5G-1 Defensive Driving Techniques (page 67)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=75",
  },
  {
    key: "space-both-sides",
    quote: "Maintain space on both sides of the vehicle. On two-way " +
      "streets, it's equally important to leave room between oncoming " +
      "traf",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 5, 5G-1 Defensive Driving Techniques (page 67)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=75",
  },
  {
    key: "motorcycle-full-lane",
    quote: "Motorcycles are vehicles with the same rights and privileges " +
      "as any vehicle on the roadway. Allow the motorcyclist a full " +
      "lane width.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6A-1 Seeing and Understanding Motorcycles (page 68)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=76",
  },
  {
    key: "motorcycle-left-turn-crashes",
    quote: "Approximately one-third of all motorcycle crashes involve " +
      "another motor vehicle. Nearly 40 percent were caused by the " +
      "other vehicle turning left in front of the motorcyclist.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6A-1 Seeing and Understanding Motorcycles (page 68)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=76",
  },
  {
    key: "motorcycle-signals",
    quote: "Don't be fooled by a flashing turn signal on a motorcycle - " +
      "motorcycle signals usually are not self-cancelling and riders " +
      "sometimes forget to turn them off. Wait to be sure the " +
      "motorcycle is going to turn before you proceed.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6A-1 Seeing and Understanding Motorcycles (page 68)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=76",
  },
  {
    key: "motorcycle-following",
    quote: "Allow more following distance, three or four seconds, " +
      "following a motorcycle so the motorcyclist has enough time to " +
      "maneuver or stop in an emergency. In dry conditions " +
      "motorcycles can stop more quickly than a car.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6A-1 Seeing and Understanding Motorcycles (page 68)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=76",
  },
  {
    key: "bicycle-same-duties",
    quote: "a person riding a bicycle has the same duties and rights as a driver of a motor vehicle",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6B Bicyclists (page 68)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=76",
  },
  {
    key: "bicycle-far-right",
    quote: "Bicyclists must ride as far right in a lane as is practical or on paved shoulders.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6B Bicyclists (page 68)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=76",
  },
  {
    key: "bicycle-narrow-lane",
    quote: "Bicyclists may ride in the lane of travel where the lane is " +
      "too narrow for a bicycle and vehicle to travel safely side by " +
      "side within the lane.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6B Bicyclists (page 68)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=76",
  },
  {
    key: "bicycle-one-way-left",
    quote: "On one-way streets in urban areas, bicyclists may ride in the far left lane.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6B Bicyclists (page 69)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=77",
  },
  {
    key: "bicycle-three-feet-law",
    quote: "The law requires that motorists overtaking a bicycle " +
      "proceeding in the same direction must leave a safe distance of " +
      "no less than three feet clearance, when applicable, when " +
      "passing a bicycle and shall maintain such clearance until " +
      "safely past the overtaken bicycle.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6B Bicyclists (page 69)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=77",
  },
  {
    key: "bicycle-no-horn",
    quote: "Do not blast a vehicle's horn when approaching a bicyclist. " +
      "Look for bicycles before opening car doors.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6B Bicyclists (page 69)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=77",
  },
  {
    key: "bicycle-children",
    quote: "Children on bicycles are often unpredictable in their actions. " +
      "A common crash type for young cyclists is mid-block ride-outs " +
      "entering a road from a driveway, alley, or curb without " +
      "slowing, stopping or looking for traf",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6B Bicyclists (page 69)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=77",
  },
  {
    key: "pedestrians-expect",
    quote: "Expect pedestrians anywhere at anytime and always yield to them.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6C Pedestrians (page 69)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=77",
  },
  {
    key: "ped-do-not-pass-stopped",
    quote: "Do not pass a vehicle which has stopped for a pedestrian. The " +
      "stopped vehicle may block the view of the pedestrian in the " +
      "street.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6C Pedestrians (page 69)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=77",
  },
  {
    key: "ped-blind-stop",
    quote: "Always give the right-of-way to a blind or visually impaired " +
      "person (who is using a white cane or service dog) by stopping " +
      "and remaining stopped until the person is clear of the " +
      "roadway.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6C Pedestrians (page 69)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=77",
  },
  {
    key: "ped-complete-stop-behind",
    quote: "Come to a complete stop behind crosswalks (marked and " +
      "unmarked) at stop signs or red lights.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6C Pedestrians (page 69)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=77",
  },
  {
    key: "snow-removal-100-feet",
    quote: "Maintain a following distance of 100 feet from snow removal " +
      "equipment or other maintenance vehicles while working on " +
      "roadways, except to pass.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6D Snow and Ice Removal Operations (page 70)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=78",
  },
  {
    key: "snow-removal-passing",
    quote: "Snow removal equipment may result in snow restricting " +
      "visibility. Pass only if the roadway ahead can clearly be " +
      "seen.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6D Snow and Ice Removal Operations (page 70)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=78",
  },
  {
    key: "bus-amber-25-mph",
    quote: "When a school bus is about to stop and load or unload " +
      "children, the bus driver activates amber warning lights. When " +
      "meeting or overtaking a bus, slow to 25 MPH and prepare to " +
      "stop.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6E-1 Overhead Amber Warning Lights (page 70)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=78",
  },
  {
    key: "bus-amber-until-door",
    quote: "The amber warning lights will stay on until the bus door opens.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6E-1 Overhead Amber Warning Lights (page 70)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=78",
  },
  {
    key: "bus-red-stop-arm",
    quote: "When the bus driver opens the bus door, the red stop lights " +
      "and STOP arm activates. Stop and remain stopped until the bus " +
      "driver retracts the stop arm and deactivates the red warning " +
      "lights. Stop a reasonable distance from the bus.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6E-2 Overhead Red STOP Lights/STOP Arm (page 70)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=78",
  },
  {
    key: "bus-must-stop",
    quote: "Not stopping when approaching or overtaking a school bus which " +
      "has stop lights on and the stop arm extended is unlawful. The " +
      "only exception occurs when approaching a school bus in the " +
      "opposite direction on a roadway divided by a median.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6E-3 When You Must Stop (page 70)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=78",
  },
  {
    key: "truck-340-feet",
    quote: "A loaded truck with good tires and properly adjusted brakes, " +
      "traveling at 55 MPH on a clear, dry roadway, requires a " +
      "minimum of 340 feet to come to a complete stop.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6F-1 Large Trucks and Buses (page 71)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=79",
  },
  {
    key: "truck-air-brakes",
    quote: "Unlike the hydraulic brakes on automobiles, trucks and buses " +
      "have air brakes. Air brakes do not operate instantly as do " +
      "hydraulic brakes. Do not make sudden stops in front of large " +
      "vehicles.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6F-1 Large Trucks and Buses (page 71)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=79",
  },
  {
    key: "truck-hazmat",
    quote: "Avoid driving near vehicles carrying hazardous materials. " +
      "These vehicles will be clearly marked with the type of " +
      "hazardous materials they are transporting, such as " +
      "\"Explosives\", \"Poison\" or \"Flammable\" materials.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6F-1 Large Trucks and Buses (page 71)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=79",
  },
  {
    key: "no-zone-definition",
    quote: "No-Zones are areas around trucks or buses where cars: 1) " +
      "\"disappear\" into blind spots, or 2) are so close that they " +
      "restrict the truck or bus driver's ability to stop or maneuver " +
      "safely.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6F-2 No Zone (page 71)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=79",
  },
  {
    key: "no-zone-passing",
    quote: "One of the biggest mistakes made is to cut in too soon when " +
      "passing. Don't pull in front of the truck or bus unless the " +
      "entire front of the truck or bus can be seen in the rear view " +
      "mirror.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6F-2 No Zone (page 72)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=80",
  },
  {
    key: "no-zone-rear",
    quote: "Rear Blindspots - trucks and buses have deep blindspots " +
      "directly behind them. Do not tailgate.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6F-2 No Zone (page 72)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=80",
  },
  {
    key: "no-zone-side",
    quote: "Side Blindspots - trucks and buses have much larger blindspots " +
      "on both sides than cars do. Do not travel beside trucks or " +
      "buses for great lengths of time.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6F-2 No Zone (page 72)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=80",
  },
  {
    key: "truck-wide-turns",
    quote: "Wide Turns - because of a vehicle's size, truck and bus " +
      "drivers sometime need to swing wide to manage their turns. " +
      "When they do, they can't see cars directly behind or beside " +
      "them. Give them plenty of room and never try to squeeze around " +
      "them.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 6, 6F-2 No Zone (page 72)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=80",
  },
  {
    key: "crash-stop-at-scene",
    quote: "Stop vehicle at the scene of the crash or as close as " +
      "possible. Assist the injured if aid is necessary or requested " +
      "and notify emergency authorities.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 7, 7A General Information (page 73)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=81",
  },
  {
    key: "crash-exchange",
    quote: "Exchange information with the other drivers to include: Name, " +
      "address and telephone number. License plate number. Driver's " +
      "license number. Insurance information. Make, model and year of " +
      "vehicle.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 7, 7A General Information (page 73)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=81",
  },
  {
    key: "crash-report-1500",
    quote: "Complete a Driver's Motor Vehicle Crash Report and send it to " +
      "the Department of Transportation within ten (10) days if any " +
      "person is injured or killed, or damage to the property of any " +
      "one person to an apparent extent that equals or exceeds $1,500 " +
      "for any vehicle or piece of property",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 7, 7A General Information (page 73)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=81",
  },
  {
    key: "crash-witnesses",
    quote: "Obtain the names and addresses of witnesses. Do not leave the " +
      "scene of the crash until released by proper authorities.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 7, 7A General Information (page 73)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=81",
  },
  {
    key: "crash-failure-to-report",
    quote: "Failure to report a crash as required, is unlawful and persons " +
      "in violation shall be guilty of a Class II or III misdemeanor " +
      "and may have their license or privilege to drive revoked.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Section 7, 7A General Information (page 73)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=81",
  },
  {
    key: "practice-exam-note",
    quote: "The questions in the practice exam are different than those " +
      "asked on the actual test. This practice exam should be used as " +
      "an educational tool in conjunction with the Nebraska Driver's " +
      "Manual, not as an alternative to studying the manual.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Nebraska Driver's Practice Exam (page 76)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=84",
  },
  {
    key: "practice-four-way-stop",
    quote: "At a four way stop, common courtesy is that the driver who " +
      "stops first should be permitted to go first.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Nebraska Driver's Practice Exam, question 18 (page 76)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=84",
  },
  {
    key: "practice-solid-yellow",
    quote: "You may pass if a solid yellow line is on your side of the middle of a two-lane highway.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Nebraska Driver's Practice Exam, question 19 (answer: False) (page 76)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=84",
  },
  {
    key: "practice-ped-green-light",
    quote: "Pedestrians have the right of way when in crosswalks even if " +
      "the driver has the green light.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Nebraska Driver's Practice Exam, question 21 (page 76)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=84",
  },
  {
    key: "practice-airbag-risk",
    quote: "it can pose some risk of injury to children age 12 and " +
      "younger, elderly drivers and passengers, and short statured " +
      "adults of 5 feet or less.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Nebraska Driver's Practice Exam, question 6 (page 76)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=84",
  },
  {
    key: "practice-hand-signal-left",
    quote: "The correct hand signal for a left turn is left arm out and fully extended.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Nebraska Driver's Practice Exam, question 15 (page 76)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=84",
  },
  {
    key: "practice-flagpersons",
    quote: "Flagpersons have the authority to stop traffic.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Nebraska Driver's Practice Exam, question 16 (page 76)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=84",
  },
  {
    key: "practice-white-lines",
    quote: "White lines separate lanes of traffic going in the same direction.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Nebraska Driver's Practice Exam, question 23 (page 76)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=84",
  },
  {
    key: "practice-no-speeding-passing",
    quote: "It is unlawful to exceed the posted speed limit when passing.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Nebraska Driver's Practice Exam, question 24 (page 76)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=84",
  },
  {
    key: "practice-bac-by-age",
    quote: "The State has established different Blood Alcohol " +
      "Concentration legal limits, based on a driver's age and type " +
      "of vehicle he/she is driving.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Nebraska Driver's Practice Exam, question 25 (page 76)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=84",
  },
  {
    key: "practice-motorcycle-position",
    quote: "Motorcyclists should not constantly change positions within a lane.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Nebraska Driver's Practice Exam, question 9 (answer: False) (page 76)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=84",
  },
  {
    key: "practice-bicycle-merge",
    quote: "Motorists should merge with bicycle traffic when preparing for a right turn",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Nebraska Driver's Practice Exam, question 8 (page 76)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=84",
  },
  {
    key: "manual-not-legal-reference",
    quote: "The information herein is not intended to be an official legal " +
      "reference to Nebraska traffic laws. If you have a court case " +
      "or other reason to know the actual language of law, it will be " +
      "necessary for you to refer to the actual statutes rather than " +
      "this manual.",
    source: "Nebraska Driver's Manual (Nebraska Department of Motor Vehicles, January 2025)",
    section: "Nebraska Driver's Manual, back cover (page 80)",
    url: "https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf#page=88",
  },
  {
    key: "st-speed-low",
    quote: "Twenty-five miles per hour in any residential district; (b) " +
      "Twenty miles per hour in any business district; (c) Fifty " +
      "miles per hour upon any highway that is gravel or not dustless " +
      "surfaced; (d) Fifty-five miles per hour upon any " +
      "dustless-surfaced highway not a part of the state highway " +
      "system;",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,186 - Speed; maximum limits; signs",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,186",
  },
  {
    key: "st-speed-interstate",
    quote: "Seventy-five miles per hour upon the National System of " +
      "Interstate and Defense Highways, except that the maximum speed " +
      "limit shall be sixty-five miles per hour for: (i) Any portion " +
      "of the National System of Interstate and Defense Highways " +
      "located in Douglas County;",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,186 - Speed; maximum limits; signs",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,186",
  },
  {
    key: "st-speed-expressway",
    quote: "Seventy miles per hour upon an expressway or a super-two " +
      "highway that is part of the state highway system;",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,186 - Speed; maximum limits; signs",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,186",
  },
  {
    key: "st-basic-rule",
    quote: "No person shall drive a vehicle on a highway at a speed " +
      "greater than is reasonable and prudent under the conditions " +
      "and having regard to the actual and potential hazards then " +
      "existing.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,185 - Basic rule; speed",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,185",
  },
  {
    key: "st-basic-rule-situations",
    quote: "A person shall drive at a safe and appropriate speed when " +
      "approaching and crossing an intersection or railroad grade " +
      "crossing, when approaching and going around a curve, when " +
      "approaching a hillcrest",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,185 - Basic rule; speed",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,185",
  },
  {
    key: "st-min-freeway-speed",
    quote: "On a freeway no motor vehicle, except emergency vehicles, " +
      "shall be operated at a speed of less than forty miles per hour " +
      "or at such a slow speed as to impede or block the normal and " +
      "reasonable movement of traffic",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,193 - Minimum speed regulation; impeding traffic",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,193",
  },
  {
    key: "st-impeding",
    quote: "No person shall drive a motor vehicle at such a slow speed as " +
      "to impede the normal and reasonable movement of traffic except " +
      "when reduced speed is necessary for safe operation or in " +
      "compliance with law.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,193 - Minimum speed regulation; impeding traffic",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,193",
  },
  {
    key: "st-headlights-required",
    quote: "Every motor vehicle upon a highway within this state during " +
      "the period from sunset to sunrise and at any other time when " +
      "there is not sufficient light to render clearly discernible " +
      "persons or vehicles upon the highway at a distance of five " +
      "hundred feet ahead",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,219 - Motor vehicle; autocycle or motorcycle; lights; requirements",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,219",
  },
  {
    key: "st-dim-200-feet",
    quote: "Whenever any person operating a motor vehicle on any highway " +
      "in this state follows another vehicle within two hundred feet " +
      "to the rear, he or she shall dim the headlights of his or her " +
      "motor vehicle or tilt the beams of glaring or dazzling light " +
      "projecting therefrom downward.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,224 - Headlights; glare; duty of operator; penalty",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,224",
  },
  {
    key: "st-following",
    quote: "The driver of a motor vehicle shall not follow another vehicle " +
      "more closely than is reasonable and prudent, and such driver " +
      "shall have due regard for the speed of such vehicles and the " +
      "traffic upon and the condition of the roadway.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,140 - Following vehicles; restrictions",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,140",
  },
  {
    key: "st-following-maintenance",
    quote: "The driver of any motor vehicle when traveling upon a roadway " +
      "outside of a business or residential district shall not follow " +
      "any highway maintenance vehicle more closely than one hundred " +
      "feet",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,140 - Following vehicles; restrictions",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,140",
  },
  {
    key: "st-u-turn",
    quote: "No vehicle shall be turned so as to proceed in the opposite " +
      "direction upon any curve, upon the approach to or near the " +
      "crest of a grade where such vehicle cannot be seen by the " +
      "driver of any other vehicle approaching from either direction " +
      "within five hundred feet",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,160 - Turning to proceed in opposite direction; limitation",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,160",
  },
  {
    key: "st-u-turn-freeway",
    quote: "No vehicle, except authorized emergency vehicles, shall be " +
      "turned at any place on a freeway so as to proceed in the " +
      "opposite direction.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,160 - Turning to proceed in opposite direction; limitation",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,160",
  },
  {
    key: "st-signal-100-feet",
    quote: "A signal of intention to turn or move right or left when " +
      "required shall be given continuously during not less than the " +
      "last one hundred feet traveled by the vehicle before turning.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,161 - Turning or moving right or left upon a roadway; required signals",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,161",
  },
  {
    key: "st-signal-slowing",
    quote: "No person shall stop or suddenly decrease the speed of a " +
      "vehicle without first giving an appropriate signal in the " +
      "manner provided in such sections to the driver of any vehicle " +
      "immediately to the rear when there is opportunity to give such " +
      "signal.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,161 - Turning or moving right or left upon a roadway; required signals",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,161",
  },
  {
    key: "st-park-hydrant",
    quote: "Within fifteen feet of a fire hydrant; (iii) Within twenty " +
      "feet of a crosswalk at an intersection; (iv) Within thirty " +
      "feet of any flashing signal, stop sign, yield sign, or other " +
      "traffic control device located at the side of a roadway;",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,166 - Stopping, standing, or parking prohibited; exceptions",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,166",
  },
  {
    key: "st-park-fire-station",
    quote: "Within twenty feet of the driveway entrance to any fire " +
      "station and on the side of a street opposite the entrance to " +
      "any fire station within seventy-five feet of such entrance " +
      "when properly signposted;",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,166 - Stopping, standing, or parking prohibited; exceptions",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,166",
  },
  {
    key: "st-park-railroad",
    quote: "Within fifty feet of the nearest rail of a railroad crossing;",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,166 - Stopping, standing, or parking prohibited; exceptions",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,166",
  },
  {
    key: "st-park-safety-zone",
    quote: "Between a safety zone and the adjacent curb or within thirty " +
      "feet of points on the curb immediately opposite the ends of a " +
      "safety zone unless the Department of Transportation or the " +
      "local authority indicates a different length by signs or " +
      "markings;",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,166 - Stopping, standing, or parking prohibited; exceptions",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,166",
  },
  {
    key: "st-unattended-vehicle",
    quote: "No person having control or charge of a motor vehicle shall " +
      "allow such vehicle to stand unattended on a highway without " +
      "first: (1) Stopping the motor of such vehicle;",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,168 - Unattended motor vehicles; conditions",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,168",
  },
  {
    key: "st-unattended-wheels",
    quote: "when standing upon any roadway, turning the front wheels of " +
      "such vehicle to the curb or side of such roadway.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,168 - Unattended motor vehicles; conditions",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,168",
  },
  {
    key: "st-school-bus-stop",
    quote: "the driver of a motor vehicle shall reduce the speed of such " +
      "vehicle to not more than twenty-five miles per hour, shall " +
      "bring such vehicle to a complete stop when the school bus is " +
      "stopped, the stop signal arm is extended, and the flashing red " +
      "signal lights are turned on",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,175 - School bus; safety requirements; use of stop signal arm",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,175",
  },
  {
    key: "st-school-bus-exception",
    quote: "This section shall not apply to approaching traffic in the " +
      "opposite direction on a divided highway or to approaching " +
      "traffic when there is displayed a sign as provided in " +
      "subsection (8) of this section directing traffic to proceed.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,175 - School bus; safety requirements; use of stop signal arm",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,175",
  },
  {
    key: "st-school-bus-penalty",
    quote: "Any person violating this subsection shall be guilty of a " +
      "Class IV misdemeanor, shall be fined five hundred dollars, and " +
      "shall be assessed points on his or her motor vehicle " +
      "operator's license",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,175 - School bus; safety requirements; use of stop signal arm",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,175",
  },
  {
    key: "st-school-bus-cross-front",
    quote: "If such pupils must cross a roadway, the bus driver shall " +
      "instruct such pupils to cross in front of the school bus",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,175 - School bus; safety requirements; use of stop signal arm",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,175",
  },
  {
    key: "st-handheld-prohibited",
    quote: "no person shall use a handheld wireless communication device " +
      "to read a written communication, manually type a written " +
      "communication, or send a written communication while operating " +
      "a motor vehicle which is in motion.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,179.01 - Use of handheld wireless communication device; prohibited acts",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,179.01",
  },
  {
    key: "st-handheld-secondary",
    quote: "Enforcement of this section by state or local law enforcement " +
      "agencies shall be accomplished only as a secondary action when " +
      "a driver of a motor vehicle has been cited or charged with a " +
      "traffic violation or some other offense.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,179.01 - Use of handheld wireless communication device; prohibited acts",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,179.01",
  },
  {
    key: "st-handheld-fines",
    quote: "Two hundred dollars for the first offense; (b) Three hundred " +
      "dollars for a second offense; and (c) Five hundred dollars for " +
      "a third and subsequent offense.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,179.01 - Use of handheld wireless communication device; prohibited acts",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,179.01",
  },
  {
    key: "st-emergency-vehicle",
    quote: "The driver of any other vehicle shall yield the right-of-way " +
      "and shall immediately drive to a position parallel to and as " +
      "close as possible to the right-hand edge or curb of the " +
      "roadway or to either edge or curb of a one-way roadway, clear " +
      "of any intersection",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,151 - Operation of vehicles upon the approach of emergency vehicles",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,151",
  },
  {
    key: "st-row-right",
    quote: "When two vehicles approach or enter an intersection from " +
      "different roadways at approximately the same time, the driver " +
      "of the vehicle on the left shall yield the right-of-way to the " +
      "vehicle on the right.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,146 - Vehicles approaching or entering intersection at same time; right-of-way",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,146",
  },
  {
    key: "st-row-merging",
    quote: "a vehicle entering a highway from an acceleration lane, a " +
      "ramp, or any other approach road shall yield the right-of-way " +
      "to a vehicle on the main roadway entering such merging area at " +
      "the same time, regardless of whether the approach road is to " +
      "the left or the right of the main roadway",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,146 - Vehicles approaching or entering intersection at same time; right-of-way",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,146",
  },
  {
    key: "st-row-unpaved",
    quote: "The driver of a vehicle about to enter or cross a paved " +
      "roadway from an unpaved roadway and who is not subject to " +
      "control by a traffic control device shall yield the " +
      "right-of-way to all vehicles approaching on such paved " +
      "roadway.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,146 - Vehicles approaching or entering intersection at same time; right-of-way",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,146",
  },
  {
    key: "st-ped-crosswalk",
    quote: "the driver of a vehicle shall yield the right-of-way to a " +
      "pedestrian crossing the roadway within a crosswalk who is in " +
      "the lane in which the driver is proceeding or is in the lane " +
      "immediately adjacent thereto by bringing his or her vehicle to " +
      "a complete stop.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,153 - Pedestrians' right-of-way in crosswalk; traffic control devices",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,153",
  },
  {
    key: "st-ped-no-pass",
    quote: "Whenever any vehicle is stopped at a marked crosswalk or at " +
      "any unmarked crosswalk at an intersection to permit a " +
      "pedestrian to cross the roadway, the driver of any other " +
      "vehicle approaching from the rear shall not overtake and pass " +
      "such stopped vehicle.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,153 - Pedestrians' right-of-way in crosswalk; traffic control devices",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,153",
  },
  {
    key: "st-right-on-red",
    quote: "vehicular traffic facing a steady circular red indication may " +
      "cautiously enter the intersection to make a right turn after " +
      "stopping as required by subdivision (3)(a) of this section.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,123 - Traffic control signals; meaning; turns on red signal, when",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,123",
  },
  {
    key: "st-left-on-red",
    quote: "vehicular traffic facing a steady circular red indication at " +
      "the intersection of two one-way streets may cautiously enter " +
      "the intersection to make a left turn after stopping as " +
      "required by subdivision (3)(a) of this section.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,123 - Traffic control signals; meaning; turns on red signal, when",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,123",
  },
  {
    key: "st-red-arrow",
    quote: "The traffic shall not enter the intersection to make the " +
      "movement indicated by the arrow and shall remain standing " +
      "until an indication to proceed is shown;",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,123 - Traffic control signals; meaning; turns on red signal, when",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,123",
  },
  {
    key: "st-yellow-light",
    quote: "upon display of a steady yellow indication, vehicular traffic " +
      "shall stop before entering the nearest crosswalk at the " +
      "intersection, but if such stop cannot be made in safety, a " +
      "vehicle may be driven cautiously through the intersection;",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,123 - Traffic control signals; meaning; turns on red signal, when",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,123",
  },
  {
    key: "st-green-yield",
    quote: "Vehicular traffic facing a circular green indication may " +
      "proceed straight through or turn right or left unless a sign " +
      "at such place prohibits either such turn",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,123 - Traffic control signals; meaning; turns on red signal, when",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,123",
  },
  {
    key: "st-dui",
    quote: "It shall be unlawful for any person to operate or be in the " +
      "actual physical control of any motor vehicle: (a) While under " +
      "the influence of alcoholic liquor or of any drug;",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,196 - Driving under influence of alcoholic liquor or drug; penalties",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,196",
  },
  {
    key: "st-under-21-bac",
    quote: "It shall be unlawful for any person under twenty-one years of " +
      "age to operate or be in the actual physical control of any " +
      "motor vehicle: (1) When such person has a concentration of " +
      "two-hundredths of one gram or more by weight of alcohol per " +
      "one hundred milliliters of his or her blood",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,211.01 - Person under twenty-one years of age; prohibited acts",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,211.01",
  },
  {
    key: "st-reckless",
    quote: "Any person who drives any motor vehicle in such a manner as to " +
      "indicate an indifferent or wanton disregard for the safety of " +
      "persons or property shall be guilty of reckless driving.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,213 - Reckless driving, defined",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,213",
  },
  {
    key: "st-reckless-double-speed",
    quote: "evidence that such person was driving a motor vehicle in " +
      "excess of double the maximum lawful speed limit shall be prima " +
      "facie evidence that the motor vehicle was being driven in a " +
      "manner as to indicate an indifferent or wanton disregard for " +
      "the safety of persons or property.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,213 - Reckless driving, defined",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,213",
  },
  {
    key: "st-careless",
    quote: "Any person who drives any motor vehicle in this state " +
      "carelessly or without due caution so as to endanger a person " +
      "or property shall be guilty of careless driving.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,212 - Careless driving, defined",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,212",
  },
  {
    key: "st-studded-tires",
    quote: "pneumatic tires with metal or metal-type studs not exceeding " +
      "five-sixteenths of an inch in diameter inclusive of the " +
      "stud-casing with an average protrusion beyond the tread " +
      "surface of not more than seven sixty-fourths of an inch " +
      "between November 1 and April 1",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,250 - Tires; requirements; cleats or projections prohibited",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,250",
  },
  {
    key: "st-seat-belts",
    quote: "no driver shall operate a motor vehicle upon a highway or " +
      "street in this state unless the driver and each front-seat " +
      "occupant in the vehicle are wearing occupant protection " +
      "systems and all occupant protection systems worn are properly " +
      "adjusted and fastened.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,270 - Occupant protection system; three-point safety belt system; use required",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,270",
  },
  {
    key: "st-child-under-8",
    quote: "shall ensure that all children up to eight years of age being " +
      "transported by such vehicle (a) use a child passenger " +
      "restraint system",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,267 - Use of restraint system, occupant protection system",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,267",
  },
  {
    key: "st-child-rear-facing",
    quote: "In addition, all children up to two years of age shall use a " +
      "rear-facing child passenger restraint system until the child " +
      "outgrows the child passenger restraint system manufacturer's " +
      "maximum allowable height or weight.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,267 - Use of restraint system, occupant protection system",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,267",
  },
  {
    key: "st-child-8-to-18",
    quote: "shall ensure that all children eight years of age and less " +
      "than eighteen years of age being transported by such vehicle " +
      "use an occupant protection system.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,267 - Use of restraint system, occupant protection system",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,267",
  },
  {
    key: "st-move-over-controlled",
    quote: "the driver of the approaching or passing vehicle shall proceed " +
      "with due care and caution and yield the right-of-way when " +
      "approaching or passing the stopped vehicle by moving into a " +
      "lane at least one moving lane apart from the stopped vehicle",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,378 - Controlled-access highway; stopped vehicle; driver of approaching or passing vehicle; duties",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,378",
  },
  {
    key: "st-move-over-unoccupied",
    quote: "Subsection (1) of this section does not apply if the stopped " +
      "vehicle is unoccupied and there are no individuals present in " +
      "or near the stopped vehicle.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,378 - Controlled-access highway; stopped vehicle; driver of approaching or passing vehicle; duties",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,378",
  },
  {
    key: "st-move-over-other-roads",
    quote: "Reduce speed to a reasonable speed below the posted speed " +
      "limit, move into another lane that is at least one moving lane " +
      "apart from the stopped vehicle if possible under existing " +
      "traffic and safety conditions, and be prepared to stop;",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,378.01 - Duties of drivers approaching stopped vehicle or towing, maintenance, solid waste collection, or other vehicles",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,378.01",
  },
  {
    key: "st-bicycle-right-side",
    quote: "Any person who operates a bicycle upon a roadway at less than " +
      "the normal speed of traffic at the time and place and under " +
      "conditions then existing shall ride as near to the right-hand " +
      "curb or right-hand edge of the roadway as practicable",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,317 - Bicycles on roadways and bicycle paths; general rules",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,317",
  },
  {
    key: "st-bicycle-single-file",
    quote: "Any person who operates a bicycle upon a highway shall not " +
      "ride more than single file except on paths or parts of " +
      "highways set aside for the exclusive use of bicycles.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,317 - Bicycles on roadways and bicycle paths; general rules",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,317",
  },
  {
    key: "st-bicycle-sidewalk",
    quote: "A bicyclist riding a bicycle on a sidewalk or across a roadway " +
      "or shoulder in a crosswalk shall have all the rights and " +
      "duties applicable to a pedestrian under the same circumstances " +
      "but shall yield the right-of-way to pedestrians.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,317 - Bicycles on roadways and bicycle paths; general rules",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,317",
  },
  {
    key: "st-lpd-supervision",
    quote: "The holder of an LPD-learner's permit shall only operate a " +
      "motor vehicle on the highways of this state if he or she is " +
      "accompanied at all times by a licensed operator who is at " +
      "least twenty-one years of age and who has been licensed by " +
      "this state or another state",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-4,123 - LPD-learner's permit; application; issuance; operation restrictions",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-4,123",
  },
  {
    key: "st-lpd-written-60-days",
    quote: "A person may take the written examination beginning sixty days " +
      "prior to his or her fifteenth birthday but shall not be issued " +
      "a permit until he or she is fifteen years of age.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-4,123 - LPD-learner's permit; application; issuance; operation restrictions",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-4,123",
  },
  {
    key: "st-lpd-device",
    quote: "The holder of an LPD-learner's permit shall not use any type " +
      "of interactive wireless communication device while operating a " +
      "motor vehicle on the highways of this state.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-4,123 - LPD-learner's permit; application; issuance; operation restrictions",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-4,123",
  },
  {
    key: "st-pop-six-months",
    quote: "Has possessed a valid LPD-learner's permit, LPE-learner's " +
      "permit, or SCP-school permit for at least a six-month period " +
      "beginning on the date of issuance of such person's " +
      "LPD-learner's permit, LPE-learner's permit, or SCP-school " +
      "permit; and",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-4,120.01 - Provisional operator's permit; application; issuance; operation restrictions",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-4,120.01",
  },
  {
    key: "st-pop-fifty-hours",
    quote: "verifying that the applicant has completed fifty hours of " +
      "lawful motor vehicle operation including at least ten hours of " +
      "motor vehicle operation between sunset and sunrise",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-4,120.01 - Provisional operator's permit; application; issuance; operation restrictions",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-4,120.01",
  },
  {
    key: "st-pop-expiry",
    quote: "Any person who is at least sixteen years of age but less than " +
      "eighteen years of age may be issued a provisional operator's " +
      "permit by the Department of Motor Vehicles. The provisional " +
      "operator's permit shall expire on the applicant's eighteenth " +
      "birthday.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-4,120.01 - Provisional operator's permit; application; issuance; operation restrictions",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-4,120.01",
  },
  {
    key: "st-obey-officer",
    quote: "Any person who knowingly fails or refuses to obey any lawful " +
      "order of any peace officer who is controlling or directing " +
      "traffic shall be guilty of a traffic infraction.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,110 - Obedience to peace officers; violation; penalty",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,110",
  },
  {
    key: "st-due-care-pedestrian",
    quote: "every driver of a vehicle shall exercise due care, which shall " +
      "include, but not be limited to, leaving a safe distance of no " +
      "less than three feet clearance, when applicable, to avoid " +
      "colliding with any pedestrian upon any roadway",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,109 - Drivers to exercise due care with pedestrian; audible signal",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,109",
  },
  {
    key: "st-fire-apparatus",
    quote: "The driver of any vehicle other than one on official business " +
      "shall not follow any fire apparatus traveling in response to a " +
      "fire alarm closer than five hundred feet",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,183 - Following fire apparatus in response to an alarm; prohibited",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,183",
  },
  {
    key: "st-flashing-red",
    quote: "When a red lens is illuminated with rapid intermittent " +
      "flashes, drivers of vehicles shall stop at a clearly marked " +
      "stop line or shall stop, if there is no such line, before " +
      "entering the crosswalk on the near side of the intersection",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,125 - Flashing signals; exception",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,125",
  },
  {
    key: "st-flashing-red-proceed",
    quote: "The right to proceed shall be subject to the rules applicable " +
      "after making a stop at a stop sign",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,125 - Flashing signals; exception",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,125",
  },
  {
    key: "st-flashing-yellow",
    quote: "When a yellow lens is illuminated with rapid intermittent " +
      "flashes, drivers of vehicles may proceed through the " +
      "intersection or past such light only with caution.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,125 - Flashing signals; exception",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,125",
  },
  {
    key: "st-passing-on-right",
    quote: "The driver of a vehicle may overtake and pass on the right of " +
      "another vehicle only under the following conditions: (a) When " +
      "the vehicle to be overtaken is making or about to make a left " +
      "turn;",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,134 - Overtaking and passing upon the right; when permitted",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,134",
  },
  {
    key: "st-passing-right-safely",
    quote: "In no event shall the driver of a vehicle overtake and pass " +
      "another vehicle upon the right unless such movement may be " +
      "made safely upon the roadway.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,134 - Overtaking and passing upon the right; when permitted",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,134",
  },
  {
    key: "st-no-passing-left",
    quote: "No driver shall overtake and pass another vehicle or drive to " +
      "the left of the center of the roadway whenever: (a) He or she " +
      "approaches the crest of a grade or is upon a curve in the " +
      "highway where the driver's view is obstructed",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,136 - Limitations on overtaking, passing, or driving to the left of the center of roadway",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,136",
  },
  {
    key: "st-no-passing-intersection",
    quote: "He or she approaches within one hundred feet of or traverses " +
      "any intersection or railroad grade crossing;",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,136 - Limitations on overtaking, passing, or driving to the left of the center of roadway",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,136",
  },
  {
    key: "st-no-passing-bridge",
    quote: "The view is obstructed when he or she approaches within one " +
      "hundred feet of any bridge, viaduct, or tunnel;",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,136 - Limitations on overtaking, passing, or driving to the left of the center of roadway",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,136",
  },
  {
    key: "st-shoulder-driving",
    quote: "No person shall drive on the shoulders of highways, except " +
      "that: (1) Vehicles may be driven on the shoulders of highways " +
      "(a) by federal mail carriers while delivering the United " +
      "States mail or (b) to safely remove a vehicle from a roadway;",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,142 - Driving on highway shoulders prohibited; exceptions",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,142",
  },
  {
    key: "st-median-driving",
    quote: "No driver shall drive any vehicle over, across, or within any " +
      "median except through a median opening or median crossover as " +
      "established by competent authority. Medians on freeways shall " +
      "not be crossed or entered upon at any point unless " +
      "specifically directed by competent authority.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,141 - Driving on divided highways; driving on median prohibited; exceptions",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,141",
  },
  {
    key: "st-divided-right-roadway",
    quote: "Whenever any highway has been divided into two or more " +
      "roadways by a median, a driver shall drive only upon the " +
      "right-hand roadway unless directed or permitted to use another " +
      "roadway by traffic control devices or competent authority.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,141 - Driving on divided highways; driving on median prohibited; exceptions",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,141",
  },
  {
    key: "st-open-container",
    quote: "Highway means a road or street including the entire area within the right-of-way;",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,211.08 - Open alcoholic beverage container; consumption of alcoholic beverages; prohibited acts",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,211.08",
  },
  {
    key: "st-backing",
    quote: "The driver of a vehicle shall not back such vehicle on any " +
      "roadway unless such movement can be made with safety and " +
      "without interfering with other traffic.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,169 - Limitations on backing vehicles",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,169",
  },
  {
    key: "st-backing-freeway",
    quote: "The driver of a vehicle shall not back such vehicle upon any " +
      "roadway or shoulder of any freeway.",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,169 - Limitations on backing vehicles",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,169",
  },
  {
    key: "st-doors",
    quote: "No person shall open the door of a motor vehicle on the side " +
      "available to moving traffic unless and until it is reasonably " +
      "safe to do so",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-6,180 - Opening and closing vehicle doors; restriction",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,180",
  },
  {
    key: "st-points-revocation",
    quote: "accumulated a total of twelve or more points within any period " +
      "of two years, as set out in section 60-4,182 , the director " +
      "shall (1) summarily revoke the operator's license of such " +
      "person",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-4,183 - Point system; revocation of license, when",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-4,183",
  },
  {
    key: "st-points-six-months",
    quote: "Such revocation shall be for a period of six months from the " +
      "date of the signing of the order of revocation",
    source: "Nebraska Revised Statutes, Chapter 60 (Nebraska Legislature)",
    section: "Nebraska Revised Statute 60-4,183 - Point system; revocation of license, when",
    url: "https://nebraskalegislature.gov/laws/statutes.php?statute=60-4,183",
  },
  {
    key: "dle-class-o-25",
    quote: "Class O Written Test 25 Questions can miss 5 questions " +
      "Non-Verbal Picture Test 24 Questions can miss 4 questions " +
      "Special Restricted Written Test 20 Questions can miss 4 " +
      "questions",
    source: "Driver Licensing Examiner Policies and Procedures Manual (Nebraska Department of Motor Vehicles)",
    section: "Section 3 - Operator's License (Class O), Written Test (page 33)",
    url: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dls/DLE_Policies_and_Procedures_Manual.pdf#page=32",
  },
  {
    key: "dle-80-percent",
    quote: "Applicants must score a minimum of 80% on all written test to " +
      "pass. The written test is valid for 6 months after passed.",
    source: "Driver Licensing Examiner Policies and Procedures Manual (Nebraska Department of Motor Vehicles)",
    section: "Section 3 - Operator's License (Class O), Written Test (page 33)",
    url: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dls/DLE_Policies_and_Procedures_Manual.pdf#page=32",
  },
  {
    key: "dle-test-forms",
    quote: "Tests are available in the following forms: written (on a " +
      "testing tablet), audio and non-verbal. The written and audio " +
      "is available in English and Spanish.",
    source: "Driver Licensing Examiner Policies and Procedures Manual (Nebraska Department of Motor Vehicles)",
    section: "Section 3 - Operator's License (Class O), Written Test (page 33)",
    url: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dls/DLE_Policies_and_Procedures_Manual.pdf#page=32",
  },
  {
    key: "dle-non-verbal",
    quote: "The non-verbal written test is designed for applicants whose " +
      "primary language is not English or Spanish or individuals who " +
      "have difficulty understanding or reading English or Spanish, " +
      "may request and be administered the non-verbal test.",
    source: "Driver Licensing Examiner Policies and Procedures Manual (Nebraska Department of Motor Vehicles)",
    section: "Section 3 - Operator's License (Class O), Written Test (page 33)",
    url: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dls/DLE_Policies_and_Procedures_Manual.pdf#page=32",
  },
  {
    key: "dle-fail-same-day",
    quote: "If an applicant fails the Class O written test, it cannot be taken again the same day.",
    source: "Driver Licensing Examiner Policies and Procedures Manual (Nebraska Department of Motor Vehicles)",
    section: "Section 3 - Operator's License (Class O), General Written Test Information (page 32)",
    url: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dls/DLE_Policies_and_Procedures_Manual.pdf#page=31",
  },
  {
    key: "dle-retest-schedule",
    quote: "Retest on the written test is as follows: Tests 1-3 - one day " +
      "between tests. Test 4 - the current date plus 7 days.",
    source: "Driver Licensing Examiner Policies and Procedures Manual (Nebraska Department of Motor Vehicles)",
    section: "Section 3 - Operator's License (Class O), Written Test Procedures (page 34)",
    url: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dls/DLE_Policies_and_Procedures_Manual.pdf#page=33",
  },
  {
    key: "dle-sixth-failure",
    quote: "After failure of the 6th test, the applicant will be required " +
      "to attend an approved driver training course or wait 90 days " +
      "from the date of the last test failure before any further " +
      "testing.",
    source: "Driver Licensing Examiner Policies and Procedures Manual (Nebraska Department of Motor Vehicles)",
    section: "Section 3 - Operator's License (Class O), Written Test Procedures (page 34)",
    url: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dls/DLE_Policies_and_Procedures_Manual.pdf#page=33",
  },
  {
    key: "dle-cheating",
    quote: "If an applicant is caught cheating on a test, this will be " +
      "considered a failure and the normal retesting policy must be " +
      "followed.",
    source: "Driver Licensing Examiner Policies and Procedures Manual (Nebraska Department of Motor Vehicles)",
    section: "Section 3 - Operator's License (Class O), Written Test (page 33)",
    url: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dls/DLE_Policies_and_Procedures_Manual.pdf#page=32",
  },
  {
    key: "dle-no-cell-phones",
    quote: "Remind applicants they are not to have any cell phones on or " +
      "in use during their test. Remind applicants that ALL " +
      "belongings need to be placed on the floor.",
    source: "Driver Licensing Examiner Policies and Procedures Manual (Nebraska Department of Motor Vehicles)",
    section: "Section 3 - Operator's License (Class O), Written Test Procedures (page 34)",
    url: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dls/DLE_Policies_and_Procedures_Manual.pdf#page=33",
  },
  {
    key: "dle-skip-button",
    quote: "You can choose to skip a question by hitting the \"SKIP\" " +
      "button. You may be asked to answer this question at a later " +
      "time during the test.",
    source: "Driver Licensing Examiner Policies and Procedures Manual (Nebraska Department of Motor Vehicles)",
    section: "Section 3 - Operator's License (Class O), Written Test Procedures (page 34)",
    url: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dls/DLE_Policies_and_Procedures_Manual.pdf#page=33",
  },
  {
    key: "dle-drive-test-15-marks",
    quote: "A passing score is 15 marks or less.",
    source: "Driver Licensing Examiner Policies and Procedures Manual (Nebraska Department of Motor Vehicles)",
    section: "Section 3 - Operator's License (Class O), Scoring the Drive Test (page 43)",
    url: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dls/DLE_Policies_and_Procedures_Manual.pdf#page=42",
  },
  {
    key: "dle-automatic-failure",
    quote: "AUTOMATIC FAILURE - There are twelve areas for automatic " +
      "failures. When one of these items is marked, the test is " +
      "failed and terminated as soon as possible.",
    source: "Driver Licensing Examiner Policies and Procedures Manual (Nebraska Department of Motor Vehicles)",
    section: "Section 3 - Operator's License (Class O), Scoring the Drive Test (page 43)",
    url: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dls/DLE_Policies_and_Procedures_Manual.pdf#page=42",
  },
  {
    key: "web-pop-passenger",
    quote: "During the first six months of the POP, the holder can only " +
      "operate a motor vehicle with no more than one passenger who is " +
      "not an immediate family member and who is under nineteen years " +
      "of age.",
    source: "Nebraska Department of Motor Vehicles, Driver's License, ID and Permits",
    section: "Provisional Operator's Permit (POP)",
    url: "https://dmv.nebraska.gov/dl/pop",
  },
  {
    key: "web-lpd-tests",
    quote: "Vision and written tests are required.",
    source: "Nebraska Department of Motor Vehicles, Driver's License, ID and Permits",
    section: "Learner's Permit (LPD)",
    url: "https://dmv.nebraska.gov/dl/learners-permit",
  },
];
