import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the South Carolina bank: most from the
// South Carolina Driver's License Manual, the rest from Title 56 of the South
// Carolina Code of Laws.
//
// Sources, and why there are two of them:
//
//  - The South Carolina Driver's License Manual, published by the South
//    Carolina Department of Motor Vehicles (SCDMV) at dmv.sc.gov. The current
//    edition is the PDF uploaded to dmv.sc.gov in April 2026 (the file itself
//    was generated 30 March 2026 and carries no printed revision date on its
//    cover; the previous edition was labelled "Revised 06/2024"). It is built
//    on the AAMVA Model Driver's License Manual, which the disclaimer on its
//    first page says outright, and the SCDMV writes the beginner's permit
//    knowledge test from it.
//  - Title 56 of the South Carolina Code of Laws, published by the South
//    Carolina Legislative Council at scstatehouse.gov. The manual states no
//    speed limit anywhere except a 35 mph golf-cart road, no parking distance
//    except the 18-inch curb rule, no headlight hours, no BAC limit for adult
//    drivers and no school-bus fine. Those come from the statute.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. Four
// normalisations were applied to the extracted text and to nothing else: curly
// quotes, en dashes and em dashes are folded to ASCII; runs of whitespace,
// including the line breaks the PDF inserts mid-sentence, collapse to single
// spaces; the section symbol is spelled out as "Section"; and where a source
// states a rule as a stem followed by a bulleted list, the items are run
// together in the order they appear - no words are changed, dropped or
// reordered. The manual's own slips are preserved as they stand ("You must to
// be alert for bicyclists", "treated like as a DUI"), because a quote that has
// been tidied up is no longer a quote.

const MANUAL = "South Carolina Driver's License Manual (SCDMV, April 2026 edition)";
const MANUAL_URL = "https://dmv.sc.gov/sites/scdmv/files/2026-04/Driver's%20Manual.pdf";
const C5 = "https://www.scstatehouse.gov/code/t56c005.php";
const C1 = "https://www.scstatehouse.gov/code/t56c001.php";
const CODE = (s: string) => `South Carolina Code of Laws Section ${s} (South Carolina Legislative Council)`;

export const southcarolinaExcerpts: HandbookExcerpt[] = [
  // ---- Section 1: The Driver's License -----------------------------------
  {
    key: "one-license-only",
    quote:
      "Each qualified driver will have only one driver's license, endorsed for one or more of the classifications. It is illegal to have more than one valid driver's license.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Commercial Driver's Licenses (CDLs), p. 1-3",
    url: MANUAL_URL,
  },
  {
    key: "carry-documents",
    quote:
      "When driving you must have a valid driver's license, vehicle registration, and valid insurance card in your possession for the class of vehicle you are operating. If you do not, you will be subject to a fine.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Commercial Driver's Licenses (CDLs), p. 1-3",
    url: MANUAL_URL,
  },
  {
    key: "class-d-weight",
    quote:
      "Class D: Allows you to drive non-commercial passenger vehicles, such as cars and trucks, which do not exceed 26,000 pounds GVW.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Non-Commercial Licenses, p. 1-1",
    url: MANUAL_URL,
  },
  {
    key: "moped-class-g",
    quote:
      "Class G: Allows you to operate a moped. If you have a valid driver's license or permit in any of the other four classifications, you are not required to obtain a license to drive a moped. (Minimum age 15).",
    source: MANUAL,
    section: "Section 1: The Driver's License - Non-Commercial Licenses, p. 1-2",
    url: MANUAL_URL,
  },
  {
    key: "permit-age-tests",
    quote:
      "If you have never had a driver's license, you must start with a beginner's permit. You must be at least 15 years old. You must pass the vision and knowledge test.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Beginner's Permit, p. 1-4",
    url: MANUAL_URL,
  },
  {
    key: "permit-supervision",
    quote:
      "You may drive from 6 a.m. to midnight if a licensed driver who is at least 21 years old and has at least one year of driving experience is in the front seat with you.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Beginner's Permit, p. 1-4",
    url: MANUAL_URL,
  },
  {
    key: "permit-after-midnight",
    quote:
      "A permittee may not drive between midnight and six o'clock a.m. unless accompanied by any licensed individual listed in Section 56-1-100(A)(1-7);",
    source: CODE("56-1-50"),
    section: "Section 56-1-50(B)(1) - Beginner's permit; hours and conditions of vehicle operation",
    url: C1,
  },
  {
    key: "permit-holding-period",
    quote:
      "If you are 18 years and older, you must hold your beginner's permit for at least 30 days before you may apply for your driver's license. You may apply on the 31st day or anytime thereafter.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Beginner's Permit, p. 1-5",
    url: MANUAL_URL,
  },
  {
    key: "permit-180-days",
    quote:
      "You have held your beginner's permit for more than 180 days.",
    source: MANUAL,
    section: "Section 1: The Driver's License - First-Time Driver's License, p. 1-6",
    url: MANUAL_URL,
  },
  {
    key: "practice-40-hours",
    quote:
      "If you are 15 or 16, you must practice driving for at least 40 hours, including ten hours of night driving with one of the individuals listed below:",
    source: MANUAL,
    section: "Section 1: The Driver's License - Beginner's Permit, p. 1-5",
    url: MANUAL_URL,
  },
  {
    key: "drivers-ed-hours",
    quote:
      "You completed a driver's education course (eight hours in the classroom and six hours driving).",
    source: MANUAL,
    section: "Section 1: The Driver's License - First-Time Driver's License, p. 1-6",
    url: MANUAL_URL,
  },
  {
    key: "school-enrolment",
    quote:
      "You are enrolled in school (not suspended or expelled), and you have satisfactory school attendance.",
    source: MANUAL,
    section: "Section 1: The Driver's License - First-Time Driver's License, p. 1-6",
    url: MANUAL_URL,
  },
  {
    key: "gdl-purpose",
    quote:
      "The graduated driver's license program is for individuals 15 to 17 years of age. It allows you the opportunity to develop your driving skills. It restricts nighttime and unsupervised driving at first, but these restrictions are lifted over time.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Graduated Driver's License Program, p. 1-7",
    url: MANUAL_URL,
  },
  {
    key: "conditional-age",
    quote:
      "If you are at least 15 ½, but less than 16, and have met the requirements listed in this section, you are eligible for a conditional license. You must pass the vision and skills test to receive this license.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Conditional License for a 15-year-old, p. 1-7",
    url: MANUAL_URL,
  },
  {
    key: "conditional-passengers",
    quote:
      "You cannot have more than two passengers under 21 in the vehicle with you unless you are with a licensed adult who is at least 21. The only exception is if you are transporting family members or students to and from school.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Conditional License for a 15-year-old, p. 1-7",
    url: MANUAL_URL,
  },
  {
    key: "conditional-hours",
    quote:
      "You may drive alone from 6 a.m. to 6 p.m. (8 p.m. during daylight savings time). You may drive with a licensed driver, who is at least 21, from 6 p.m. (8 p.m. during daylight savings time) to midnight.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Conditional License for a 15-year-old, p. 1-7 to 1-8",
    url: MANUAL_URL,
  },
  {
    key: "gdl-six-points",
    quote:
      "If you are under 17 and receive six or more points on your record before you have held your license for one year, your license will be suspended for six months.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Conditional License for a 15-year-old, p. 1-8",
    url: MANUAL_URL,
  },
  {
    key: "special-restricted-age",
    quote:
      "If you are 16, but less than 17, have met the requirements listed in this section, and have passed your vision and skills test, or if you are 16 and have a conditional license, you are eligible for a special restricted license.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Special Restricted License for a 16-year-old, p. 1-8",
    url: MANUAL_URL,
  },
  {
    key: "waiver-midnight",
    quote:
      "The special restricted license with a waiver allows you to drive by yourself until midnight if you work or participate in certain extracurricular activities. The waiver will not allow you to drive after midnight.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Special Restricted License with a Waiver for a 16-year-old, p. 1-9",
    url: MANUAL_URL,
  },
  {
    key: "full-privileges",
    quote:
      "You will earn full driving privileges at 17, or after keeping your conditional or special restricted license for one year, if you received no traffic offenses and",
    source: MANUAL,
    section: "Section 1: The Driver's License - Regular Driver's License, p. 1-9 to 1-10",
    url: MANUAL_URL,
  },
  {
    key: "license-sleeve",
    quote:
      "You will receive a sleeve in the mail from the SCDMV that is to be wrapped around your license. You must keep your license in this sleeve to take advantage of your full driving privileges.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Regular Driver's License, p. 1-10",
    url: MANUAL_URL,
  },
  {
    key: "knowledge-test-fail",
    quote:
      "You will fail the test if you do any of the following: Leave the test room/area before the test is completed Talk to anyone Take anything into the test area that may assist you with answers to the questions on the test.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Required Non-Commercial License Tests, p. 1-10",
    url: MANUAL_URL,
  },
  {
    key: "knowledge-test-devices",
    quote:
      "Written material or electronic devices of any kind are not allowed in the knowledge test area. Examples of electronic devices are a cell phone, laptop, and tablet reader (such as an iPad or Kindle).",
    source: MANUAL,
    section: "Section 1: The Driver's License - Required Non-Commercial License Tests, p. 1-10",
    url: MANUAL_URL,
  },
  {
    key: "random-retest",
    quote:
      "NOTICE: Be prepared because you could be randomly selected by the SCDMV to pass the skills test again before you are issued a driver's license",
    source: MANUAL,
    section: "Section 1: The Driver's License - Required Non-Commercial License Tests, p. 1-11",
    url: MANUAL_URL,
  },
  {
    key: "skills-test-seatbelt",
    quote:
      "The vehicle must have a valid license plate, registration card, and insurance card. The skills test must be postponed if the vehicle is not safe. You will automatically fail the skills test if you do not use your seat belt.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Taking the Skills Test, p. 1-12",
    url: MANUAL_URL,
  },
  {
    key: "skills-retest-wait",
    quote:
      "If you fail the skills test on your first attempt, you must wait two business days before you can be re-tested, regardless of age or driving experience.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Failing the Skills Test, p. 1-13",
    url: MANUAL_URL,
  },
  {
    key: "new-resident-45-days",
    quote:
      "If you have a valid driver's license or identification (ID) card from another state and permanently move to SC, you must apply for an SC license or ID within forty-five (45) days of moving to SC unless you are active-duty military or an employee of the US Government.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Moving to South Carolina, p. 1-13",
    url: MANUAL_URL,
  },
  {
    key: "expired-nine-months",
    quote:
      "If your driver's license is expired for more than nine months, you must visit an SCDMV branch, pass a vision, knowledge, and a skills test, provide current proof of address, and any proof of identity documents that may not be on file.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Renewing an Expired Driver's License, p. 1-18",
    url: MANUAL_URL,
  },
  {
    key: "points-out-of-state",
    quote:
      "You may earn points against your SC driver's license when you violate traffic laws, which include violations committed outside of the state.",
    source: MANUAL,
    section: "Section 1: The Driver's License - How the Point System Works, p. 1-18",
    url: MANUAL_URL,
  },
  {
    key: "points-halved",
    quote:
      "Points are reduced by half after one year from the violation date on the ticket.",
    source: MANUAL,
    section: "Section 1: The Driver's License - How the Point System Works, p. 1-18 to 1-19",
    url: MANUAL_URL,
  },
  {
    key: "points-twelve-suspend",
    quote:
      "If you are 17 or older and have six or more points on your driving record, the SCDMV will send you a letter to drive more carefully. If your point total reaches 12 or more, your license will be suspended.",
    source: MANUAL,
    section: "Section 1: The Driver's License - How the Point System Works, p. 1-19",
    url: MANUAL_URL,
  },
  {
    key: "points-six-permit",
    quote:
      "If you hold a beginner's permit, conditional or special restricted driver's license and you accumulate six or more points, your driving privileges will be suspended for having excessive points.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Driver's License Suspension for Excessive Points, p. 1-19",
    url: MANUAL_URL,
  },
  {
    key: "dui-not-points",
    quote:
      "Certain violations, such as driving under the influence, require mandatory license suspensions and are not under the point system.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Driver's License Suspension for Excessive Points, p. 1-19",
    url: MANUAL_URL,
  },
  {
    key: "defensive-course",
    quote:
      "The course cannot be completed online. The course must be taken in SC. The course must be eight hours of classroom training. The course must be taken after the date of violation(s). A reduction in points may only be made one time in a three-year period.",
    source: MANUAL,
    section: "Section 1: The Driver's License - Defensive Driving Course, p. 1-20",
    url: MANUAL_URL,
  },
  {
    key: "tal-thirty-days",
    quote:
      "You may be eligible for a Temporary Alcohol license (TAL) if you have one of the following suspensions and have filed for an administrative hearing within 30 days:",
    source: MANUAL,
    section: "Section 1: The Driver's License - Temporary Alcohol License, p. 1-23",
    url: MANUAL_URL,
  },

  // ---- Section 2: State Laws and Rules of the Road -----------------------
  {
    key: "selective-service",
    quote:
      "You must complete the Supplement for SC Credential Selective Service Requirements (SCDMV form 447- SEL) if you are a male US citizen or an immigrant who is less than twenty-six years of age when applying for a beginner's permit, driver's license, or identification card.",
    source: MANUAL,
    section: "Section 2: State Laws and Rules of the Road - Selective Service, p. 2-1",
    url: MANUAL_URL,
  },
  {
    key: "organ-donor-heart",
    quote:
      "If you choose to register, your identity information will be added to the SC Donor Registry and a red heart will be added to your license, beginner's permit, or identification card.",
    source: MANUAL,
    section: "Section 2: State Laws and Rules of the Road - Organ Donation, p. 2-1",
    url: MANUAL_URL,
  },
  {
    key: "littering",
    quote:
      "It is against the law to throw trash along the streets and highways. Offenders can be arrested and fined. You can be fined for litter law violations and also be directed to pick up litter along the roadsides under supervision of the court.",
    source: MANUAL,
    section: "Section 2: State Laws and Rules of the Road - Littering is Against the Law, p. 2-2",
    url: MANUAL_URL,
  },
  {
    key: "golf-cart",
    quote:
      "You must be at least 16 years old and have a valid driver's license to drive a golf cart. A golf cart must have an SCDMV-issued permit/registration decal affixed to it.",
    source: MANUAL,
    section: "Section 2: State Laws and Rules of the Road - Golf Carts, p. 2-2",
    url: MANUAL_URL,
  },
  {
    key: "golf-cart-roads",
    quote:
      "only on secondary streets and highways with posted speed limits of thirty-five miles an hour or less.",
    source: MANUAL,
    section: "Section 2: State Laws and Rules of the Road - Golf Carts, p. 2-3",
    url: MANUAL_URL,
  },

  // ---- Section 3: Be in Shape to Drive -----------------------------------
  {
    key: "vision-20-40",
    quote:
      "The minimum vision standards do not require a greater degree of vision than 20/40 corrected in one eye.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Vision, p. 3-2",
    url: MANUAL_URL,
  },
  {
    key: "corrective-lenses-required",
    quote:
      "It is unlawful for you to drive a motor vehicle without the use of corrective lenses if they are required to meet the minimum standards.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Vision, p. 3-2",
    url: MANUAL_URL,
  },
  {
    key: "tinted-lenses-night",
    quote:
      "Avoid using dark or tinted corrective lenses at night, even if you think they help with glare. These types of lenses reduce the light you need to see clearly.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Vision, p. 3-1",
    url: MANUAL_URL,
  },
  {
    key: "fatigue-tips",
    quote:
      "Plan to stop about every 100 miles or 2 hours during long trips.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Fatigue, p. 3-3",
    url: MANUAL_URL,
  },
  {
    key: "fatigue-nap",
    quote:
      "If you start feeling tired stop driving and pull off at the next exit or rest area to take a 15 to 20 minute nap or find a place to sleep for the night.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Ways to Avoid Fatigue, p. 3-3",
    url: MANUAL_URL,
  },
  {
    key: "distraction-definition",
    quote:
      "A distraction is anything that takes your attention away from driving. Distracted driving can cause collisions, resulting in injury, death, or property damage.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Driver Distractions, p. 3-4",
    url: MANUAL_URL,
  },
  {
    key: "hands-free-prohibitions",
    quote:
      "Physically hold or support a mobile electronic device with any part of their body, Read, write or send any form of text, which includes, but is not limited to, text messages, emails, interactions with applications, or information from websites, View moving images, including, but not limited to, videos, movies, games, or video calls.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - South Carolina Hands-Free and Distracted Driving Act, p. 3-5",
    url: MANUAL_URL,
  },
  {
    key: "hands-free-earpiece",
    quote:
      "hold or support, with any part of the body, a mobile electronic device. This provision does not prohibit the use of an earpiece or device worn on a wrist to conduct voice-based communication;",
    source: CODE("56-5-3890"),
    section: "Section 56-5-3890(B)(1) - Unlawful use of a mobile electronic device while operating a motor vehicle",
    url: C5,
  },
  {
    key: "hands-free-penalties",
    quote:
      "First Offense: $100 fine Second and Subsequent Offenses: $200 fine and two points on your driving record",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Penalties for violating the Hands-Free and Distracted Driving Act, p. 3-5",
    url: MANUAL_URL,
  },
  {
    key: "aggressive-driving",
    quote:
      "Aggressive driving occurs when an individual intentionally commits an action that endangers other persons or property. Some behaviors typically associated with aggressive driving include speeding, following too closely, unsafe lane changes, improperly (or not) signaling, and failing to obey traffic control devices",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Aggressive Driving, p. 3-5",
    url: MANUAL_URL,
  },
  {
    key: "alcohol-40-percent",
    quote:
      "Alcohol and other impairing drugs are involved in approximately 40% of all traffic collisions in which someone is killed each year.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Alcohol, Other Drugs, and Driving, p. 3-6",
    url: MANUAL_URL,
  },
  {
    key: "zero-tolerance",
    quote:
      "All states have \"zero tolerance\" laws (no alcohol in the circulatory system) or similar laws for drivers under the age of 21.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - If You are Under 21, p. 3-6",
    url: MANUAL_URL,
  },
  {
    key: "vision-0-02",
    quote:
      "Alcohol blurs your vision, slows your ability to focus, causes double vision, and reduces the ability to judge distance, speed, and the movement of other vehicles. Vision is impacted at 0.02 percent blood alcohol content (BAC) for all drivers.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Effects of Alcohol and Other Impairing Drugs, p. 3-6",
    url: MANUAL_URL,
  },
  {
    key: "first-drink",
    quote:
      "Impairment starts with the first drink. Even one drink of alcohol can affect a person's ability to operate a motor vehicle. With one or more drinks in the bloodstream, a person could be arrested for driving under the influence of alcohol or other drugs.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Effects of Alcohol and Other Impairing Drugs, p. 3-7",
    url: MANUAL_URL,
  },
  {
    key: "bac-0-15-refusal",
    quote:
      "If you are convicted of DUI or DUAC, have a BAC of 0.15 percent or more, or refuse implied consent testing, your driver's license and driving privileges may be suspended.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Alcohol and the Law, p. 3-7",
    url: MANUAL_URL,
  },
  {
    key: "bac-0-05-drugs",
    quote:
      "Under the law, you can still be convicted for driving impaired even if you have a BAC of only 0.05 or a lower BAC in combination with drugs, including prescription and over-the-counter medications.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Alcohol and the Law, p. 3-7",
    url: MANUAL_URL,
  },
  {
    key: "under-21-0-02",
    quote:
      "If you are under 21 years of age and register a BAC of 0.02 percent or greater, your privilege to drive will be suspended immediately for at least three months. If you refuse to take the test(s) for intoxicants, you will immediately lose your driving privileges for at least six months.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Alcohol and the Law, p. 3-7",
    url: MANUAL_URL,
  },
  {
    key: "implied-consent",
    quote:
      "SC's implied consent law is based on the principle that when you get your driver's license, you have implicitly consented to a lawfully- requested test to determine the alcohol content of your blood, breath, or urine if suspected of impaired driving.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Alcohol and the Law, p. 3-8",
    url: MANUAL_URL,
  },
  {
    key: "implied-consent-state",
    quote:
      "Although implied consent laws vary by state, the law applies to the state where you were arrested, not the state where you got your license.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Alcohol and the Law, p. 3-8",
    url: MANUAL_URL,
  },
  {
    key: "otc-drugs",
    quote:
      "Over-the-counter drugs taken for headaches, colds, allergies, or those to calm nerves can make you drowsy and affect your driving. Pep pills, \"uppers,\" and diet pills can make you feel nervous, dizzy, unable to concentrate, and may affect your vision.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Over-the-Counter Drugs, p. 3-9",
    url: MANUAL_URL,
  },
  {
    key: "illegal-drugs-dui",
    quote:
      "If you are convicted in SC of driving while under the influence of drugs, your conviction will be treated like as a DUI or DUAC conviction.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Illegal Drugs, p. 3-9",
    url: MANUAL_URL,
  },
  {
    key: "combining-drugs",
    quote:
      "Never drink alcohol while you are taking other drugs, including prescription or over-the-counter drugs. These drugs could multiply the effects of alcohol or have additional effects of their own.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Combining Alcohol and Other Impairing Drugs, p. 3-9",
    url: MANUAL_URL,
  },
  {
    key: "emotions-cool-off",
    quote:
      "If you are angry or worried, it is best to give yourself time to \"cool off\". A short walk or nap may help. It is best to stay off the road until your symptoms have passed.",
    source: MANUAL,
    section: "Section 3: Be in Shape to Drive - Emotions, p. 3-10",
    url: MANUAL_URL,
  },

  // ---- Section 4: Before You Drive ---------------------------------------
  {
    key: "tire-pressure-sticker",
    quote:
      "Open your vehicle door. On the inside doorframe, you should see a sticker. Make a note of what the PSI number is on the sticker.",
    source: MANUAL,
    section: "Section 4: Before You Drive - Check Tire Pressure with a Pressure Gauge Monthly, p. 4-1",
    url: MANUAL_URL,
  },
  {
    key: "penny-test",
    quote:
      "Place the penny with Lincoln's head going first into the deepest-looking groove.",
    source: MANUAL,
    section: "Section 4: Before You Drive - Check Tread Depth with a Penny, p. 4-2",
    url: MANUAL_URL,
  },
  {
    key: "ten-inches-wheel",
    quote:
      "There should be at least 10 inches between your chest and the steering wheel. Do not move the seat so far forward that you cannot easily steer and do not recline the seat.",
    source: MANUAL,
    section: "Section 4: Before You Drive - Adjusting Seat and Mirrors, p. 4-3",
    url: MANUAL_URL,
  },
  {
    key: "head-restraint",
    quote:
      "Head restraints are designed to prevent whiplash. Adjust head restraints so the head restraint contacts the back of your head and not below the level of your ears.",
    source: MANUAL,
    section: "Section 4: Before You Drive - Adjusting Seat and Mirrors, p. 4-3",
    url: MANUAL_URL,
  },
  {
    key: "mirror-settings",
    quote:
      "The driver will not see the left and right sides of the vehicle when glancing in the outside mirrors; however, this adjustment adds 12 to 16 degrees of additional viewing area to each side of the vehicle.",
    source: MANUAL,
    section: "Section 4: Before You Drive - Enhanced Mirror Settings, p. 4-5",
    url: MANUAL_URL,
  },
  {
    key: "primary-seatbelt-law",
    quote:
      "South Carolina has a primary safety belt enforcement law. Under the primary law, a law enforcement officer has the authority to stop a driver if the officer has a clear and unobstructed view of a driver or occupant of a motor vehicle not wearing a safety belt or not secured in a child restraint system.",
    source: MANUAL,
    section: "Section 4: Before You Drive - Using Safety Belts, p. 4-6",
    url: MANUAL_URL,
  },
  {
    key: "shoulder-harness",
    quote:
      "A shoulder harness is worn across the shoulder and chest with minimal, if any, slack. Do not wear the shoulder harness under the arm or behind the back. Wearing the harness the wrong way could result in serious internal injuries in a collision.",
    source: MANUAL,
    section: "Section 4: Before You Drive - Using Safety Belts, p. 4-6",
    url: MANUAL_URL,
  },
  {
    key: "airbags-supplemental",
    quote:
      "Air bags are supplemental restraints and are designed to work best in combination with safety belts.",
    source: MANUAL,
    section: "Section 4: Before You Drive - Air Bags, p. 4-6",
    url: MANUAL_URL,
  },
  {
    key: "rear-facing-airbag",
    quote:
      "You must never place a rear-facing child safety seat in front of an air bag. Children age seven and younger must sit in a car seat in the back seat of the vehicle to avoid injury from an air bag in the event of a collision.",
    source: MANUAL,
    section: "Section 4: Before You Drive - Child Passenger Safety Laws, p. 4-7",
    url: MANUAL_URL,
  },
  {
    key: "child-seat-under-two",
    quote:
      "An infant or child under two years of age must be properly secured in a rear-facing child passenger restraint system in a rear passenger seat of the vehicle until the child exceeds the height or weight limit allowed by the manufacturer of the child passenger restraint system being used.",
    source: CODE("56-5-6410"),
    section: "Section 56-5-6410(A)(1) - Child passenger restraint systems",
    url: C5,
  },
  {
    key: "child-seat-booster",
    quote:
      "adult safety belt if the child can be secured properly by an adult safety seat belt.",
    source: MANUAL,
    section: "Section 4: Before You Drive - Child Passenger Safety Laws, p. 4-7 to 4-8",
    url: MANUAL_URL,
  },
  {
    key: "unsecured-load",
    quote:
      "Driving with an unsecured load (property being transported) is both against the law and extremely dangerous. A driver who fails to properly secure their load is guilty of a misdemeanor and may face a fine and the cost to have the substance of their load cleaned up.",
    source: MANUAL,
    section: "Section 4: Before You Drive - Secure Your Load, p. 4-8",
    url: MANUAL_URL,
  },
  {
    key: "adas-not-on-test",
    quote:
      "When taking your driving test, you will not be allowed to use certain safety features, such as parking assist and cruise control. Safety features are meant to assist you in the driving task, they are not there to drive the vehicle.",
    source: MANUAL,
    section: "Section 4: Before You Drive - What Are Advanced Driver Assistance Systems (ADAS) Safety Features, p. 4-9",
    url: MANUAL_URL,
  },

  // ---- Section 5: Basic Driving ------------------------------------------
  {
    key: "hand-position",
    quote:
      "Think of the steering wheel as the face of a clock. Place your left hand at the 7 to 9 o'clock position and your right hand at the 3 to 5 o'clock position. Your grip should be firm but not too tight.",
    source: MANUAL,
    section: "Section 5: Basic Driving - Steering, p. 5-2",
    url: MANUAL_URL,
  },
  {
    key: "two-and-ten",
    quote:
      "steering, 2 and 10 o'clock is not recommended because it can be dangerous in vehicles equipped with airbags.",
    source: MANUAL,
    section: "Section 5: Basic Driving - Hand-to-Hand Steering, p. 5-3 to 5-4",
    url: MANUAL_URL,
  },
  {
    key: "hand-over-hand",
    quote:
      "Use hand-over-hand steering when turning the wheel at low speeds, such as at an intersection or when parking the vehicle.",
    source: MANUAL,
    section: "Section 5: Basic Driving - Hand-Over-Hand Steering, p. 5-4",
    url: MANUAL_URL,
  },
  {
    key: "one-hand-steering",
    quote:
      "Use one hand steering only when backing up or operating vehicle controls (wipers, flashers, lights, etc.) that require a temporary reach from the steering wheel.",
    source: MANUAL,
    section: "Section 5: Basic Driving - One Hand Steering, p. 5-4",
    url: MANUAL_URL,
  },
  {
    key: "backing-up",
    quote:
      "Check behind the vehicle before you get in it. Children and small objects cannot be seen from the driver's seat.",
    source: MANUAL,
    section: "Section 5: Basic Driving - Backing Up, p. 5-5",
    url: MANUAL_URL,
  },
  {
    key: "backing-look-rear",
    quote:
      "Place your right arm on the back of the passenger seat to the right and look directly through the rear window.",
    source: MANUAL,
    section: "Section 5: Basic Driving - Backing Up, p. 5-5",
    url: MANUAL_URL,
  },

  // ---- Section 6: Rules of the Road --------------------------------------
  {
    key: "row-no-assumption",
    quote:
      "Some road users may not yield the right-of-way. Be prepared to avoid a collision.",
    source: MANUAL,
    section: "Section 7: General Driving - Intersections, p. 7-5",
    url: MANUAL_URL,
  },
  {
    key: "row-first-car",
    quote:
      "pedestrians, bicyclists, and other drivers who are still in the intersection; the driver who is at or arrives before you at the intersection (see First Car Rule image);",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Yielding Right-of-Way, p. 6-1",
    url: MANUAL_URL,
  },
  {
    key: "row-left-turn",
    quote:
      "drivers in the opposing traffic lane when you are making a left turn; the driver on your right at a four-way intersection controlled by stop signs if both of you arrive at the intersection at the same time (see Same Time Rule image);",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Yielding Right-of-Way, p. 6-2",
    url: MANUAL_URL,
  },
  {
    key: "row-driveway-ramp",
    quote:
      "drivers on a public highway if you are entering the highway from a driveway or a private road; and drivers already on a limited access or interstate highway if you are on the entrance or acceleration ramp.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Yielding Right-of-Way, p. 6-2",
    url: MANUAL_URL,
  },
  {
    key: "traffic-control-devices",
    quote:
      "Traffic control devices include traffic signals, signs, pavement markings, and directions provided by law enforcement, highway personnel, and school crossing guards.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Traffic Control Devices, p. 6-2",
    url: MANUAL_URL,
  },
  {
    key: "signal-order",
    quote:
      "horizontal instead of vertical, and the red light is on the left, the yellow light is in the middle, and the green light is on the right.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Traffic Signals, p. 6-2 to 6-3",
    url: MANUAL_URL,
  },
  {
    key: "yellow-light",
    quote:
      "A yellow caution light follows the green signal and is a warning that the signal is about to change to the red stop signal. Therefore, you should stop your vehicle and wait for the next green light. If you are already in the intersection, clear the intersection as quickly as possible.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Traffic Signals, p. 6-3",
    url: MANUAL_URL,
  },
  {
    key: "red-light-stop",
    quote:
      "You must wait behind the stop line, crosswalk, or intersection until the traffic light turns green. An exception to this rule permits traffic facing a red signal to turn right except where a sign prohibits a right turn on red.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Traffic Signals, p. 6-3",
    url: MANUAL_URL,
  },
  {
    key: "right-on-red-yield",
    quote:
      "When turning on red you must stop before entering the crosswalk on the near side of the turn and yield right-of-way to pedestrians who are lawfully within and adjacent to the crosswalk and to other traffic lawfully using the intersection.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Traffic Signals, p. 6-3",
    url: MANUAL_URL,
  },
  {
    key: "flashing-yellow",
    quote:
      "This means slow down and proceed with caution. You should be prepared to stop for any traffic flow that may be entering the intersection.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Flashing YELLOW Traffic Light, p. 6-3",
    url: MANUAL_URL,
  },
  {
    key: "flashing-red",
    quote:
      "before entering and use the same procedure as you would at a stop sign, by coming to a complete stop. Look both ways before entering the intersection and yield right-of-way, if applicable.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Flashing RED Traffic Light, p. 6-4",
    url: MANUAL_URL,
  },
  {
    key: "warning-signs",
    quote:
      "These signs are usually yellow with black lettering or symbols and are typically diamond shaped. Some warning signs may be fluorescent yellow, such as school zones, school crossings, and pedestrian crossings.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Warning Signs, p. 6-4",
    url: MANUAL_URL,
  },
  {
    key: "railroad-advance-sign",
    quote:
      "A round yellow warning sign with an \"X\" symbol and black \"RR\" letters is placed along the road before a highway-railroad grade crossing. The sign cautions you to slow down, look, and listen for a train or railroad vehicle, and be prepared to stop if a train is approaching.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Railroad Crossing Warning Signs, p. 6-6",
    url: MANUAL_URL,
  },
  {
    key: "crossbuck",
    quote:
      "A white, X-shaped sign with \"Railroad Crossing\" printed on it is located at the highway-railroad grade crossing. When a train or railroad vehicle is approaching the intersection, you must stop behind the stop line or before the intersection until the intersection is clear.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Railroad Crossing Warning Signs, p. 6-6",
    url: MANUAL_URL,
  },
  {
    key: "multiple-tracks",
    quote:
      "Not all highway-railroad grade crossings with more than one train track will have these signs, so it is important to check for more than one track, train, or railroad vehicle at each highway-railroad grade crossing.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Railroad Crossing Warning Signs, p. 6-6",
    url: MANUAL_URL,
  },
  {
    key: "cross-tracks-quickly",
    quote:
      "Not all railroad grade crossings have lights. When you need to cross railroad tracks, look both ways and cross the tracks quickly, without stopping.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Railroad Crossing Warning Signs, p. 6-7",
    url: MANUAL_URL,
  },
  {
    key: "stop-before-tracks",
    quote:
      "If you are approaching railroad tracks and you need to stop for traffic or a signal, stop at the stop line before the railroad tracks. If your vehicle ever gets stuck on a track, contact the emergency phone number listed on the blue sign and provide the crossing information.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Railroad Crossing Warning Signs, p. 6-7",
    url: MANUAL_URL,
  },
  {
    key: "work-zone-signs",
    quote:
      "These are generally diamond- or rectangular-shaped and orange with black letters or symbols. These construction, maintenance, or emergency operation signs alert you to work zones ahead and warn you that people are working on or near the roadway.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Work Zone Signs, p. 6-7",
    url: MANUAL_URL,
  },
  {
    key: "flagger",
    quote:
      "In work zones, traffic may be controlled by a person with a sign or flag to tell you which direction to travel or to slow down or stop. You must follow their instructions.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Work Zone Signs, p. 6-8",
    url: MANUAL_URL,
  },
  {
    key: "work-zone-points",
    quote:
      "Reduce your speed in work zones and be prepared to stop suddenly. Do not tailgate in work zones. If you endanger a highway worker you may be fined and have points assessed against your driving record.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Work Zone Signs, p. 6-9",
    url: MANUAL_URL,
  },
  {
    key: "regulatory-signs",
    quote:
      "These signs are square or rectangular or have a special shape and are white with black, red, or green letters or symbols. These signs tell you about specific laws that you must obey, such as rules for traffic direction, lane use, turning, speed, parking, and other special situations.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Regulatory Signs, p. 6-9",
    url: MANUAL_URL,
  },
  {
    key: "red-circle-slash",
    quote:
      "Some regulatory signs have a red circle with a red slash over a symbol, which prohibit certain actions.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Regulatory Signs, p. 6-9",
    url: MANUAL_URL,
  },
  {
    key: "speed-limit-signs",
    quote:
      "These black and white signs indicate the maximum legal speed allowed in ideal conditions.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Speed Limit Signs, p. 6-10",
    url: MANUAL_URL,
  },
  {
    key: "stop-sign-where",
    quote:
      "A stop sign has eight sides and is red with white letters. You must stop behind the stop line or crosswalk, if one is present. If a stop line is not present, then stop at the point nearest the intersection where you (the driver) can see in both directions without entering the cross traffic lane.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Stop Sign, p. 6-10",
    url: MANUAL_URL,
  },
  {
    key: "yield-sign",
    quote:
      "A yield sign is a red and white downward-pointing triangle with red letters. It means you must slow down and allow traffic that has the right-of-way to cross before entering.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Yield Sign, p. 6-10",
    url: MANUAL_URL,
  },
  {
    key: "shared-center-lane",
    quote:
      "This sign tells you where a lane is reserved for the use of left turning vehicles from either direction and is not to be used for through traffic or passing other vehicles.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Shared Center Lane Left Turn Only, p. 6-10",
    url: MANUAL_URL,
  },
  {
    key: "one-way-street",
    quote:
      "These signs tell you that traffic flows only in the direction of the arrow. Do not turn in the opposite direction of the arrow.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - One-Way Street, p. 6-10",
    url: MANUAL_URL,
  },
  {
    key: "guide-signs",
    quote:
      "These signs are square or rectangular and are green, brown, or blue. They give information on intersecting roads, help direct you to cities and towns, and show points of interest along the highway.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Guide Signs, p. 6-11",
    url: MANUAL_URL,
  },
  {
    key: "secondary-road-marker",
    quote:
      "This sign is a marker used to designate a state secondary system route. The first number after the letter \"S\" is the number of the county the road is in and the last number is the road number.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Secondary System Road Marker, p. 6-11",
    url: MANUAL_URL,
  },
  {
    key: "evacuation-route",
    quote:
      "In the event of a hurricane, a mandatory evacuation may be declared for the coastal areas of SC. This sign indicates the road or highway is used as an evacuation route in this type of emergency",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Evacuation Route Sign, p. 6-12",
    url: MANUAL_URL,
  },
  {
    key: "pavement-markings",
    quote:
      "Pavement markings are lines, arrows, words, or symbols painted on the roadway to give directions or warnings. They are used to divide lanes, tell you when you may pass other vehicles or change lanes, tell you which lanes to use for turns, define pedestrian walkways, and show where you must stop for signs or traffic signals.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Pavement Markings, p. 6-12",
    url: MANUAL_URL,
  },
  {
    key: "yellow-dashed-side",
    quote:
      "Two-direction roadway- passing permitted when dashed line is on your side",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Yellow Lane Markings, p. 6-13",
    url: MANUAL_URL,
  },
  {
    key: "white-markings",
    quote:
      "White Lane Markings One-direction roadway- passing permitted",
    source: MANUAL,
    section: "Section 6: Rules of the Road - White Lane Markings, p. 6-14",
    url: MANUAL_URL,
  },
  {
    key: "crosswalk-yield",
    quote:
      "You must yield to pedestrians entering or in a crosswalk. Not all crosswalks are marked. Be alert for pedestrians when crossing intersections.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Crosswalks and Stop Lines, p. 6-15",
    url: MANUAL_URL,
  },
  {
    key: "stop-line-first",
    quote:
      "If crosswalks are not apparent, then you must stop before entering the intersection. If there is a stop line before the crosswalk, the stop line must be obeyed first.",
    source: MANUAL,
    section: "Section 6: Rules of the Road - Crosswalks and Stop Lines, p. 6-15",
    url: MANUAL_URL,
  },

  // ---- Section 7: General Driving ----------------------------------------
  {
    key: "turn-lane-position",
    quote:
      "Enter and maintain in the lane that is closest to the direction you want to turn. Look through the turn to the farthest point possible along the intended path.",
    source: MANUAL,
    section: "Section 7: General Driving - Turning and Turnabouts, p. 7-1",
    url: MANUAL_URL,
  },
  {
    key: "right-turn-swing",
    quote:
      "Always turn right from the right-most portion of your lane.",
    source: MANUAL,
    section: "Section 7: General Driving - Right turns, p. 7-1 to 7-2",
    url: MANUAL_URL,
  },
  {
    key: "left-turn-yield",
    quote:
      "When making a left turn, yield to oncoming traffic. Always turn left from the left-most portion of your lane.",
    source: MANUAL,
    section: "Section 7: General Driving - Left turns, p. 7-2",
    url: MANUAL_URL,
  },
  {
    key: "three-point-when",
    quote:
      "This type of turn should only be used on a two-lane roadway that is not busy. It is better to circle an entire city block if the street is busy.",
    source: MANUAL,
    section: "Section 7: General Driving - Three-Point Turnabout, p. 7-3",
    url: MANUAL_URL,
  },
  {
    key: "intersection-left-right-left",
    quote:
      "Before moving again after you have stopped at an intersection, take extra time to check for crossing traffic and bicyclists. You should always look left, then right, and left again before entering the intersection.",
    source: MANUAL,
    section: "Section 7: General Driving - Intersections, p. 7-5",
    url: MANUAL_URL,
  },
  {
    key: "green-light-pause",
    quote:
      "At a traffic signal when the light turns green, avoid immediately moving into the intersection. Take time to make sure your path of travel is clear and there is no crossing traffic.",
    source: MANUAL,
    section: "Section 7: General Driving - Intersections, p. 7-5",
    url: MANUAL_URL,
  },
  {
    key: "turn-signal-trust",
    quote:
      "Do not turn into a lane just because an approaching vehicle has a turn signal active. The driver with an active turn signal may plan to turn after they go past your vehicle or may have forgotten to turn the signal off from a prior turn.",
    source: MANUAL,
    section: "Section 7: General Driving - Intersections, p. 7-5",
    url: MANUAL_URL,
  },
  {
    key: "rcut",
    quote:
      "To accommodate these movements, the RCUT intersection requires drivers to turn right onto the main road and then make a u-turn maneuver at a one-way median opening (shown as the red movement in this figure).",
    source: MANUAL,
    section: "Section 7: General Driving - Restricted Crossing U-turn (RCUT), p. 7-6",
    url: MANUAL_URL,
  },
  {
    key: "roundabout-rules",
    quote:
      "Vehicles travel counterclockwise around a raised center island with entering traffic yielding the right-of-way to circulating traffic.",
    source: MANUAL,
    section: "Section 7: General Driving - Roundabouts and Traffic Circles, p. 7-7",
    url: MANUAL_URL,
  },
  {
    key: "roundabout-safer",
    quote:
      "Roundabouts are safer than traditional intersections because they eliminate head-on and high-speed right angle collisions.",
    source: MANUAL,
    section: "Section 7: General Driving - Roundabouts and Traffic Circles, p. 7-8",
    url: MANUAL_URL,
  },
  {
    key: "school-bus-stop",
    quote:
      "You must stop for the entire time a school bus is stopped or preparing to stop with its red or amber lights flashing or its stop arm extended. After the school bus's red and/or amber lights have stopped flashing and the stop arm is no longer visible, proceed slowly, watching for children.",
    source: MANUAL,
    section: "Section 7: General Driving - Rules for School Buses, p. 7-8",
    url: MANUAL_URL,
  },
  {
    key: "school-bus-two-lane",
    quote:
      "On any two-lane highway On any four-lane or multi-lane highway only when traveling behind a school bus When attempting to pass a school bus that has red or amber signals flashing You are required to stop for a stopped school bus when driving on a two-lane road.",
    source: MANUAL,
    section: "Section 7: General Driving - Rules for School Buses, p. 7-9",
    url: MANUAL_URL,
  },
  {
    key: "school-bus-loading-zone",
    quote:
      "When the school bus is in a passenger loading zone completely off the main travel lanes and when pedestrians are not allowed to cross the roadway.",
    source: MANUAL,
    section: "Section 7: General Driving - Rules for School Buses, p. 7-9",
    url: MANUAL_URL,
  },
  {
    key: "school-bus-multilane",
    quote:
      "A driver of a vehicle does not have to stop upon meeting a stopped school bus when traveling in the opposite direction on a multi-lane highway or multi-lane private road. A multi-lane highway or multi-lane private road is defined as a highway or private road that consists of four lanes, having at least two traffic lanes in each direction.",
    source: MANUAL,
    section: "Section 7: General Driving - Rules for School Buses, p. 7-10",
    url: MANUAL_URL,
  },
  {
    key: "school-bus-behind",
    quote:
      "You must always stop on any highway when you are behind the bus. When you have stopped, you must not proceed until the school bus moves or the red lights are no longer flashing.",
    source: MANUAL,
    section: "Section 7: General Driving - Rules for School Buses, p. 7-10",
    url: MANUAL_URL,
  },
  {
    key: "disability-parking",
    quote:
      "Vehicles displaying a disability license plate or placard may park in designated spaces for people with disabilities, but only if that vehicle is driven by or transporting the person with the disability whose name is on the license plate registration or placard registration certificate.",
    source: MANUAL,
    section: "Section 7: General Driving - Parking, p. 7-10",
    url: MANUAL_URL,
  },
  {
    key: "park-18-inches",
    quote:
      "Do not park more than 18 inches from the curb or edge of pavement.",
    source: MANUAL,
    section: "Section 7: General Driving - Parking, p. 7-10 to 7-11",
    url: MANUAL_URL,
  },
  {
    key: "parallel-parking-bumper",
    quote:
      "Continue backing up until your front bumper is in line with the rear bumper of the vehicle you are parking behind.",
    source: MANUAL,
    section: "Section 7: General Driving - Parallel Parking, p. 7-12",
    url: MANUAL_URL,
  },
  {
    key: "hill-parking",
    quote:
      "Headed downhill, with or without curb: turn wheels to the right (except when parking left on a one way- street). 2) Headed uphill, with curb: turn wheels to the center of the street with the back of the front tire against the curb. 3) Headed uphill, without a curb: turn wheels to the right so that the vehicle will roll off the road if the brakes fail.",
    source: MANUAL,
    section: "Section 7: General Driving - Parking on Hills, p. 7-13",
    url: MANUAL_URL,
  },
  {
    key: "hill-parking-gear",
    quote:
      "In each case, the parking brakes should be set, the vehicle placed in the proper gear or park and the engine turned off. For a manual transmission, the car should be set in first or reverse.",
    source: MANUAL,
    section: "Section 7: General Driving - Parking on Hills, p. 7-13",
    url: MANUAL_URL,
  },
  {
    key: "lane-change-blind-spot",
    quote:
      "Check your \"blind spots,\" or areas around your vehicle that cannot be seen by other vehicles. This is done by turning your head and looking over your shoulder in the direction you plan to move.",
    source: MANUAL,
    section: "Section 7: General Driving - Changing Lanes, p. 7-14",
    url: MANUAL_URL,
  },
  {
    key: "acceleration-lane",
    quote:
      "Use the acceleration lane to reach the speed of other vehicles before pulling onto the roadway. This is the lane that runs alongside the main roadway. Identify a gap in traffic and merge with the traffic flow. Cancel your turn signal.",
    source: MANUAL,
    section: "Section 7: General Driving - Entering a Multi-lane Highway, p. 7-14",
    url: MANUAL_URL,
  },
  {
    key: "deceleration-lane",
    quote:
      "Maintain your vehicle speed as long as you are on the main roadway. Signal your intention, move to the deceleration lane, check for the posted speed, and adjust your speed accordingly. The deceleration lane is to the right of the roadway and before you reach the ramp.",
    source: MANUAL,
    section: "Section 7: General Driving - Exiting a Roadway, p. 7-15",
    url: MANUAL_URL,
  },
  {
    key: "passing-left-lane-shoulder",
    quote:
      "On multi-lane roads, the left-most lane is to be used for passing slower vehicles. Never pass on the shoulder, whether it is paved or not. The shoulder is a hard surface on the right side of the roadway that is to be used as an emergency stopping lane and not for through traffic.",
    source: MANUAL,
    section: "Section 7: General Driving - Passing, p. 7-15",
    url: MANUAL_URL,
  },
  {
    key: "passing-quickly",
    quote:
      "When passing another vehicle, pass the vehicle as quickly and safely as possible. The longer your vehicle stays alongside the other vehicle, the longer you are in danger of being in the blind spot of the other vehicle moving toward your lane.",
    source: MANUAL,
    section: "Section 7: General Driving - Passing, p. 7-15",
    url: MANUAL_URL,
  },
  {
    key: "passing-return",
    quote:
      "Continue to pass until the complete front of the passed vehicle is visible in your rearview mirror. Signal your intention to return to the lane. Check traffic over your shoulder for following or passing vehicles.",
    source: MANUAL,
    section: "Section 7: General Driving - Passing, p. 7-16",
    url: MANUAL_URL,
  },
  {
    key: "being-passed",
    quote:
      "When being passed: Stay in your lane. Maintain a constant speed to allow the driver to pass you. Be on guard so that you may protect yourself from any other driver's potentially unsafe actions.",
    source: MANUAL,
    section: "Section 7: General Driving - Passing, p. 7-16",
    url: MANUAL_URL,
  },
  {
    key: "no-passing-places",
    quote:
      "Do not attempt to pass when an oncoming vehicle is approaching, when your view is blocked by a curve or a hill, while at intersections,",
    source: MANUAL,
    section: "Section 7: General Driving - Passing, p. 7-16",
    url: MANUAL_URL,
  },
  {
    key: "passing-bicyclist",
    quote:
      "Slow down when passing a bicyclist, allow as much space as possible between your vehicle and the bicyclist and consider the bicyclist's speed when you pass.",
    source: MANUAL,
    section: "Section 7: General Driving - Passing, p. 7-16",
    url: MANUAL_URL,
  },
  {
    key: "zipper-merge",
    quote:
      "When you see a \"lane closed ahead\" sign and traffic is backing up, stay in your current lane of traffic until you reach the point of merge. Then take turns with the other drivers to, safely and smoothly, ease into the open lane of traffic.",
    source: MANUAL,
    section: "Section 7: General Driving - Zipper Merge (Late Merge), p. 7-17",
    url: MANUAL_URL,
  },
  {
    key: "zipper-not-law",
    quote:
      "Law does not require the Zipper Merge to be used, but it is a best practice especially when a lane is closed in a construction zone.",
    source: MANUAL,
    section: "Section 7: General Driving - Zipper Merge (Late Merge), p. 7-17",
    url: MANUAL_URL,
  },
  {
    key: "zipper-when-not",
    quote:
      "When traffic is moving at highway speeds and there are no backups, it makes sense to move sooner to the lane that will remain open. The bottom line is to merge when it is safe to do so.",
    source: MANUAL,
    section: "Section 7: General Driving - When not to use the zipper merge, p. 7-18",
    url: MANUAL_URL,
  },

  // ---- Section 8: Safe Driving Tips --------------------------------------
  {
    key: "look-20-30-seconds",
    quote:
      "Ideally, you should try to look at what is occurring 20 to 30 seconds in front of your vehicle.",
    source: MANUAL,
    section: "Section 8: Safe Driving Tips - Visual Search, p. 8-1",
    url: MANUAL_URL,
  },
  {
    key: "curves-slow-before",
    quote:
      "Always reduce speed before entering a curve to a safe speed (a speed that allows you to apply slight and constant acceleration through the curve).",
    source: MANUAL,
    section: "Section 8: Safe Driving Tips - Adjusting To Roadway Conditions, p. 8-2",
    url: MANUAL_URL,
  },
  {
    key: "hydroplaning",
    quote:
      "Hydroplaning occurs when the steering tires ride on a layer of water on top of the road surface, similar to the action of water skis. The best way to avoid traction loss from hydroplaning is to slow down when driving in the rain or on a road that is wet with pooled water or water puddles.",
    source: MANUAL,
    section: "Section 8: Safe Driving Tips - Hydroplaning, p. 8-3",
    url: MANUAL_URL,
  },
  {
    key: "flood-depths",
    quote:
      "Remember, six inches of water will reach the bottom of most passenger cars, causing loss of control or possible stalling. Two feet of moving water can carry away most vehicles, including sport utility vehicles and pick-up trucks.",
    source: MANUAL,
    section: "Section 8: Safe Driving Tips - Flooded roadways, p. 8-4",
    url: MANUAL_URL,
  },
  {
    key: "perception-reaction",
    quote:
      "The average perception time for an alert driver is ¾ second to 1 second.",
    source: MANUAL,
    section: "Section 8: Safe Driving Tips - Stopping Distance, p. 8-5",
    url: MANUAL_URL,
  },
  {
    key: "braking-158-feet",
    quote:
      "This is the time and distance it takes for your brakes to slow and stop your vehicle. At 50 mph on dry pavement with good brakes, it can take about 158 feet.",
    source: MANUAL,
    section: "Section 8: Safe Driving Tips - Stopping Distance, p. 8-5",
    url: MANUAL_URL,
  },
  {
    key: "following-4-seconds",
    quote:
      "keep a minimum following distance of 4 seconds between your vehicle and the vehicle in front.",
    source: MANUAL,
    section: "Section 8: Safe Driving Tips - Space in Front, p. 8-6",
    url: MANUAL_URL,
  },
  {
    key: "following-count",
    quote:
      "You are following too closely if you pass the stationary point before counting to \"one thousand four\".",
    source: MANUAL,
    section: "Section 8: Safe Driving Tips - Space in Front, p. 8-6",
    url: MANUAL_URL,
  },
  {
    key: "more-space-when",
    quote:
      "When following vehicles required to stop at railroad crossings, such as transit buses, school buses, or vehicles carrying hazardous materials When following large vehicles such as trucks, buses, recreational vehicles, and vehicles pulling a trailer",
    source: MANUAL,
    section: "Section 8: Safe Driving Tips - Space in Front, p. 8-7",
    url: MANUAL_URL,
  },
  {
    key: "space-side",
    quote:
      "Avoid driving next to other vehicles for long periods of time. You may be in their blind spot and this reduces the space you may need to avoid a collision.",
    source: MANUAL,
    section: "Section 8: Safe Driving Tips - Space to the Side, p. 8-7",
    url: MANUAL_URL,
  },
  {
    key: "headlights-rain",
    quote:
      "On rainy, snowy, or foggy days; use your low-beam lights and slow down When it begins to get dark or when driving away from a rising or setting sun",
    source: MANUAL,
    section: "Section 8: Safe Driving Tips - Use headlights, p. 8-8",
    url: MANUAL_URL,
  },
  {
    key: "horn-light-tap",
    quote:
      "Your vehicle's horn, if used properly, can get the attention of other road users. A light tap on the horn should be all that is needed under normal circumstances.",
    source: MANUAL,
    section: "Section 8: Safe Driving Tips - Using your horn, p. 8-8",
    url: MANUAL_URL,
  },
  {
    key: "horn-blind-pedestrians",
    quote:
      "Using your horn inappropriately could scare or anger another road user. You should not use your horn when near blind pedestrians.",
    source: MANUAL,
    section: "Section 8: Safe Driving Tips - Not using your horn, p. 8-9",
    url: MANUAL_URL,
  },
  {
    key: "signal-100-feet",
    quote:
      "It is state law that you must use a turn signal 100 feet or more before changing lanes, turning left or right, or when merging into traffic. Make sure you cancel your signals once your action is completed to avoid confusing other drivers.",
    source: MANUAL,
    section: "Section 8: Safe Driving Tips - Signaling Your Movements, p. 8-9",
    url: MANUAL_URL,
  },
  {
    key: "signal-slowing",
    quote:
      "Brake lights let other roadway users know that the vehicle in front is slowing down. Signal before reducing speed when: Turning off a roadway that does not have separate turning or exiting lanes Parking or turning before an intersection",
    source: MANUAL,
    section: "Section 8: Safe Driving Tips - Signal when reducing speeds, p. 8-10",
    url: MANUAL_URL,
  },

  // ---- Section 9: Emergency Situations -----------------------------------
  {
    key: "three-options",
    quote:
      "You have three options to avoid a collision or to reduce its impact. These options are braking, steering, or accelerating.",
    source: MANUAL,
    section: "Section 9: Emergency Situations and Avoiding Collisions - Emergencies and Avoiding Collisions, p. 9-1",
    url: MANUAL_URL,
  },
  {
    key: "abs-press-hard",
    quote:
      "Press on the brake pedal as hard as you can and keep applying constant pressure. Do not pump the brakes because this will deactivate ABS.",
    source: MANUAL,
    section: "Section 9: Emergency Situations and Avoiding Collisions - Braking, p. 9-1",
    url: MANUAL_URL,
  },
  {
    key: "abs-vibrate",
    quote:
      "ABS will work only if you keep the pressure on the brake pedal. You may feel the pedal vibrate and you may hear a clicking noise. This is normal.",
    source: MANUAL,
    section: "Section 9: Emergency Situations and Avoiding Collisions - Braking, p. 9-1",
    url: MANUAL_URL,
  },
  {
    key: "skid-response",
    quote:
      "Release pressure from the brake or accelerator. Look where you want to go and steer the vehicle in the direction you want to go.",
    source: MANUAL,
    section: "Section 9: Emergency Situations and Avoiding Collisions - Dealing with Skids, p. 9-2",
    url: MANUAL_URL,
  },
  {
    key: "drop-off-recovery",
    quote:
      "If your vehicle leaves the paved road surface due to an uneven surface drop-off, slow down gradually when safe to do so, and steer gently back onto the pavement.",
    source: MANUAL,
    section: "Section 9: Emergency Situations and Avoiding Collisions - Uneven Surface Drop-Offs, p. 9-3",
    url: MANUAL_URL,
  },
  {
    key: "brake-failure",
    quote:
      "Use the parking brake. Pull on the parking brake handle in the center console or push the parking brake foot pedal slowly so you will not lock the rear wheels and cause a skid. Be ready to release the parking brake if the vehicle does start to skid.",
    source: MANUAL,
    section: "Section 9: Emergency Situations and Avoiding Collisions - Brake Failure, p. 9-3",
    url: MANUAL_URL,
  },
  {
    key: "tire-blowout",
    quote:
      "Grip the steering wheel firmly and keep the vehicle going straight. 2) Slow down gradually. Take your foot off the accelerator pedal. 3) Do not brake. Allow the vehicle to slow by itself or brake gently if necessary.",
    source: MANUAL,
    section: "Section 9: Emergency Situations and Avoiding Collisions - Tire Blowout, p. 9-4",
    url: MANUAL_URL,
  },
  {
    key: "blowout-pull",
    quote:
      "If a front tire blows out, the vehicle will pull sharply in the direction of the blowout. If a rear tire blows out, the vehicle will wobble, shake, and pull some in the direction of the blowout.",
    source: MANUAL,
    section: "Section 9: Emergency Situations and Avoiding Collisions - Tire Blowout, p. 9-4",
    url: MANUAL_URL,
  },
  {
    key: "stuck-accelerator",
    quote:
      "If your vehicle is accelerating out of control, you should: 1) Turn off the engine. 2) Shift to neutral and search for an escape path. 3) Steer smoothly, brake gently, and pull off the roadway.",
    source: MANUAL,
    section: "Section 9: Emergency Situations and Avoiding Collisions - Stuck Accelerator, p. 9-5",
    url: MANUAL_URL,
  },
  {
    key: "breakdown-flares",
    quote:
      "If you have emergency flares, place them about 200 to 300 feet behind the vehicle, giving other drivers some time to change lanes if necessary.",
    source: MANUAL,
    section: "Section 9: Emergency Situations and Avoiding Collisions - Vehicle Breakdown, p. 9-5",
    url: MANUAL_URL,
  },
  {
    key: "emergency-contact",
    quote:
      "If you are ever in a collision or have a medical emergency, SC law enforcement officers will then have access to your emergency contact information and may provide it to medical personnel.",
    source: MANUAL,
    section: "Section 9: Emergency Situations and Avoiding Collisions - Emergency Contact Information, p. 9-6",
    url: MANUAL_URL,
  },

  // ---- Section 10: Sharing the Road --------------------------------------
  {
    key: "pedestrian-unmarked",
    quote:
      "You must yield when a pedestrian is in a crosswalk, even if it is unmarked, including mid-block crosswalks marked by warning signs and pavement markings.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Pedestrians, p. 10-1",
    url: MANUAL_URL,
  },
  {
    key: "white-cane-stop",
    quote:
      "When a pedestrian is crossing a street guided by a dog or carrying a white cane, you must come to a complete stop.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Pedestrians, p. 10-1",
    url: MANUAL_URL,
  },
  {
    key: "pedestrian-green",
    quote:
      "You must yield the right-of-way to all pedestrians in the intersection even if the traffic light is green.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Pedestrians, p. 10-1",
    url: MANUAL_URL,
  },
  {
    key: "parked-vehicles-pedestrians",
    quote:
      "When driving next to parked or stopped vehicles, pedestrians can walk out between these vehicles. Slow down and do not pass until you are sure there are no pedestrians crossing in front of it.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Pedestrians, p. 10-2",
    url: MANUAL_URL,
  },
  {
    key: "school-zone-speed",
    quote:
      "In a school zone when lights are flashing or children are present, you must obey a slower speed limit. At a school crossing where there is traffic patrol, stop and yield if you are signaled to do so.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Pedestrians, p. 10-2",
    url: MANUAL_URL,
  },
  {
    key: "bicycles-are-vehicles",
    quote:
      "Bicycles are considered vehicles when on roadways. Bicyclists are required and expected to follow the same rules of the road as motorized vehicles. As a motorist, you should know that a bicyclist has the same rights, privileges, and responsibilities as you.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Bicyclists, p. 10-2",
    url: MANUAL_URL,
  },
  {
    key: "bike-lane-driving",
    quote:
      "Do not stop, park, or drive on a designated bicycle path or lane unless you are entering or leaving an alley or driveway, performing official duties, directed by a police officer, or if an emergency situation exists.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Bicyclists, p. 10-3",
    url: MANUAL_URL,
  },
  {
    key: "bike-turn-wait",
    quote:
      "Allow as much space as possible and slow down when approaching or passing a bicyclist. You should slow down and let the cyclist clear the intersection before making your turn.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Bicyclists, p. 10-3",
    url: MANUAL_URL,
  },
  {
    key: "horn-bicyclists",
    quote:
      "Avoid sounding your horn close to bicyclists unless there is a chance of a collision. Sounding your horn to alert your presence may startle bicyclists and cause them to steer into your path resulting in a collision.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Bicyclists, p. 10-3",
    url: MANUAL_URL,
  },
  {
    key: "bike-hand-signals",
    quote:
      "Cooperate with bicyclists. They are required to use hand signals, as shown, when turning and stopping. However, keep in mind that bicyclists may not know how to use hand signals or may be unable to signal if road or traffic conditions require them to keep both hands on the handlebars.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Bicyclists, p. 10-4",
    url: MANUAL_URL,
  },
  {
    key: "door-check-bicyclists",
    quote:
      "When parked on the street, check to the sides and rear of the vehicle for bicyclists before you open your vehicle door.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Bicyclists, p. 10-5",
    url: MANUAL_URL,
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "Allow a motorcyclist a full lane width. Do not share the lane. The motorcycle needs space for the motorcyclist to react to other traffic.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Motorcyclists, p. 10-5",
    url: MANUAL_URL,
  },
  {
    key: "motorcycle-signal-cancel",
    quote:
      "Do not assume a motorcycle is turning when you see its turn signal flashing. Motorcycle turn signals may not self-cancel and the motorcyclist may have forgotten to turn them off. Wait to be sure the rider is going to turn before you proceed.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Motorcyclists, p. 10-7",
    url: MANUAL_URL,
  },
  {
    key: "motorcycle-following",
    quote:
      "When following a motorcyclist allow for a minimum 4 second following distance or more in wet conditions or you may not have enough time or space to avoid a collision.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Motorcyclists, p. 10-7",
    url: MANUAL_URL,
  },
  {
    key: "no-zone-sides",
    quote:
      "Trucks have a larger blind spot on their right side starting behind the cab and extending up to the length of the truck. If you cannot see the driver's face in the side view mirror, he or she cannot see you.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - The No Zone, p. 10-8",
    url: MANUAL_URL,
  },
  {
    key: "truck-stopping-335",
    quote:
      "A loaded truck with good tires and properly adjusted brakes, under ideal conditions, traveling at 55 mph, requires a minimum of 335 feet before coming to a complete stop, or greater than 1½ times the stopping distance of a car.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Front No Zones, p. 10-9",
    url: MANUAL_URL,
  },
  {
    key: "rear-no-zone-200",
    quote:
      "Unlike cars, large vehicles have huge blind spots directly behind them that extend up to 200 feet. If you are too close, the large vehicle cannot see your vehicle, and you cannot see what is ahead of you.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Rear No Zones, p. 10-9",
    url: MANUAL_URL,
  },
  {
    key: "trucks-hills-right-lane",
    quote:
      "When traveling up or down steep hills, large vehicles must drive slowly, approximately 35 mph, and therefore use the right lane.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Rear No Zones, p. 10-10",
    url: MANUAL_URL,
  },
  {
    key: "truck-wide-right-turn",
    quote:
      "When a truck or bus needs to make a right turn, the driver will sometimes swing the vehicle wide to the left to safely turn right and clear the corner of a curb or other obstruction.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Turning, p. 10-10",
    url: MANUAL_URL,
  },
  {
    key: "truck-squeeze",
    quote:
      "If you try to get in between the truck or bus and the curb, you will be squeezed in-between the vehicle and could suffer a serious collision. To avoid a collision, do not turn until the truck or bus has completed its turn.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Turning, p. 10-10",
    url: MANUAL_URL,
  },
  {
    key: "truck-left-turn-speed",
    quote:
      "When in doubt about the speed of an oncoming truck or bus, do not turn left in its path. The truck or bus may be going faster than you think, and it takes longer for a truck or bus to stop.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Keep in mind, p. 10-11",
    url: MANUAL_URL,
  },
  {
    key: "stop-lines-trucks",
    quote:
      "These stop lines help to set you farther back at an intersection to give larger vehicles more turning space. Always stop behind stop lines.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Keep in mind, p. 10-11",
    url: MANUAL_URL,
  },
  {
    key: "emergency-vehicle-yield",
    quote:
      "As a driver, you must yield right-of-way to an emergency vehicle when the flashing lights and siren are on by pulling over to the edge of the road so the emergency vehicle(s) may more easily pass. Avoid blocking intersections, roadways, or driveways whenever possible",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Emergency Vehicles, p. 10-12",
    url: MANUAL_URL,
  },
  {
    key: "traffic-stop-steps",
    quote:
      "When you see emergency lights behind you, stay calm, activate your turn signal, and pull to the side of the roadway as soon and safely as possible. Turn off the ignition and radio, turn on your hazard flashers, and stay in your vehicle unless the officer directs you to exit.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - What to Do and Expect When Stopped by Law Enforcement, p. 10-12",
    url: MANUAL_URL,
  },
  {
    key: "traffic-stop-hands",
    quote:
      "Keep your hands on the steering wheel so they can be easily seen. Ask your passengers to remain calm. Everyone should keep his or her seatbelt fastened and stay in the vehicle while keeping his or her hands in plain view as well.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - What to Do and Expect When Stopped by Law Enforcement, p. 10-12",
    url: MANUAL_URL,
  },
  {
    key: "traffic-stop-weapons",
    quote:
      "Do not make sudden movements or search for your driver's license or vehicle documents. Wait for the officer to give you instructions. If you have one or more weapon in the vehicle, inform the officer of all weapons upon first contact.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - What to Do and Expect When Stopped by Law Enforcement, p. 10-12",
    url: MANUAL_URL,
  },
  {
    key: "traffic-stop-night",
    quote:
      "If it is nighttime, the officer may direct a spotlight at your vehicle once stopped. To assist with visibility, turn on your interior lights as soon as you stop to help the officer see inside your vehicle.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - What to Do and Expect When Stopped by Law Enforcement, p. 10-13",
    url: MANUAL_URL,
  },
  {
    key: "ticket-not-admission",
    quote:
      "Your acceptance of a traffic ticket document is not considered an admission of guilt. In SC it is not a requirement that a driver sign a traffic ticket.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - What to Do and Expect When Stopped by Law Enforcement, p. 10-13",
    url: MANUAL_URL,
  },
  {
    key: "never-run",
    quote:
      "Never try to run from law enforcement. It is very dangerous, and many deadly collisions occur from police chases. The consequences of running from law enforcement are more severe than any initial traffic citation.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - What to Do and Expect When Stopped by Law Enforcement, p. 10-14",
    url: MANUAL_URL,
  },
  {
    key: "move-over",
    quote:
      "When you approach a stopped authorized emergency vehicle, proceed with caution. Slow down and yield the right-of-way by making a lane change into a lane away from the authorized emergency vehicle, if safety and traffic conditions permit. If a lane change is unsafe, slow down and proceed with caution while maintaining a safe speed for traffic conditions.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Move-Over Law, p. 10-15",
    url: MANUAL_URL,
  },
  {
    key: "move-over-who",
    quote:
      "The incidents are increasing of law enforcement officers, emergency medical services, fire department personnel, and tow truck operators being struck while performing duties on the road.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Move-Over Law, p. 10-14",
    url: MANUAL_URL,
  },
  {
    key: "slow-moving-triangle",
    quote:
      "the vehicle is traveling less than 25 mph. Use caution when approaching a slow-moving vehicle, and be sure it is safe before you pass.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Slow-Moving Vehicles, p. 10-16",
    url: MANUAL_URL,
  },
  {
    key: "animal-drawn",
    quote:
      "Pass with caution and do not use your horn or \"rev\" your vehicle's engine because this may scare the animal and cause a collision.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Animal-drawn vehicles and horseback riders, p. 10-16",
    url: MANUAL_URL,
  },
  {
    key: "farm-machinery",
    quote:
      "Pass with caution and remember that the operator of farm machinery most likely cannot hear approaching vehicles due to the noise level of the machinery.",
    source: MANUAL,
    section: "Section 10: Sharing the Road - Farm machinery, p. 10-16",
    url: MANUAL_URL,
  },

  // ---- Section 11: Special Driving Situations ----------------------------
  {
    key: "high-beams-twice",
    quote:
      "Use your high beams whenever there are no oncoming vehicles. High beams let you see twice as far as low beams.",
    source: MANUAL,
    section: "Section 11: Special Driving Situations - Night Driving, p. 11-1",
    url: MANUAL_URL,
  },
  {
    key: "dim-500-feet",
    quote:
      "Dim your high beams when you are 500 feet or more away from any oncoming vehicle. If a vehicle comes toward you with its high beams on, glance toward the right side of the road to keep from being distracted or momentarily blinded by the vehicle's headlights.",
    source: MANUAL,
    section: "Section 11: Special Driving Situations - Night Driving, p. 11-1",
    url: MANUAL_URL,
  },
  {
    key: "low-beams-200-feet",
    quote:
      "Use your low beams when following another vehicle that is less than 200 feet in front of you.",
    source: MANUAL,
    section: "Section 11: Special Driving Situations - Night Driving, p. 11-2",
    url: MANUAL_URL,
  },
  {
    key: "fog-low-beams",
    quote:
      "In fog, rain, or snow, use your low beams. Light from your high beams may cause glare and make it more difficult to see ahead.",
    source: MANUAL,
    section: "Section 11: Special Driving Situations - Night Driving, p. 11-2",
    url: MANUAL_URL,
  },
  {
    key: "night-following",
    quote:
      "Increase your following distance by adding at least one additional second for night driving conditions and at least two additional seconds for driving on unfamiliar roadways at night.",
    source: MANUAL,
    section: "Section 11: Special Driving Situations - Night Driving, p. 11-2",
    url: MANUAL_URL,
  },
  {
    key: "work-zone-no-workers",
    quote:
      "Work zone signs have orange backgrounds and black letters or symbols. Always reduce your speed in a work zone, even if there are no workers. The narrower lanes and rough pavement can create hazardous conditions.",
    source: MANUAL,
    section: "Section 11: Special Driving Situations - Work Zones, p. 11-3",
    url: MANUAL_URL,
  },
  {
    key: "end-road-work",
    quote:
      "Observe the posted work zone signs until you see \"End Road Work.\"",
    source: MANUAL,
    section: "Section 11: Special Driving Situations - Work Zones, p. 11-4",
    url: MANUAL_URL,
  },
  {
    key: "single-lane-bridge",
    quote:
      "Be aware of warning signs identifying narrow or single-lane bridges. Take turns crossing a bridge; generally, the first driver to the bridge has the right-of-way.",
    source: MANUAL,
    section: "Section 11: Special Driving Situations - Rural Road Driving, p. 11-5",
    url: MANUAL_URL,
  },
  {
    key: "uncontrolled-intersection",
    quote:
      "Some intersections on rural roads are not controlled by yield or stop signs. These intersections can be very dangerous if they are not approached with caution. When approaching an uncontrolled rural intersection, slow down and be prepared to stop for crossing or oncoming traffic.",
    source: MANUAL,
    section: "Section 11: Special Driving Situations - Rural Road Driving, p. 11-6",
    url: MANUAL_URL,
  },
  {
    key: "bridges-freeze-first",
    quote:
      "Be especially careful on bridges, overpasses, and infrequently traveled roadways because they tend to freeze first. Even at temperatures above freezing, if the conditions are wet, you might encounter ice in shady areas or on exposed roadways like bridges.",
    source: MANUAL,
    section: "Section 11: Special Driving Situations - Winter Driving Techniques, p. 11-6",
    url: MANUAL_URL,
  },
  {
    key: "winter-cruise-control",
    quote:
      "Avoid using cruise control in winter driving conditions.",
    source: MANUAL,
    section: "Section 11: Special Driving Situations - Winter Driving Techniques, p. 11-7",
    url: MANUAL_URL,
  },
  {
    key: "stuck-in-snow",
    quote:
      "If your vehicle gets stuck in the snow, do not spin your wheels. This will only dig the vehicle in deeper.",
    source: MANUAL,
    section: "Section 11: Special Driving Situations - Winter Driving Techniques, p. 11-7",
    url: MANUAL_URL,
  },
  {
    key: "winter-skid-brakes",
    quote:
      "If you have ABS, do not pump the brakes. Apply steady pressure to the brakes. You will feel the brakes pulse, which is normal. o If you have standard brakes, pump them gently.",
    source: MANUAL,
    section: "Section 11: Special Driving Situations - Winter Driving Techniques, p. 11-8",
    url: MANUAL_URL,
  },
  {
    key: "trailer-60-40",
    quote:
      "Sixty percent of the cargo weight of a trailer should go in the front (nearest the towing vehicle) and 40 percent in the back.",
    source: MANUAL,
    section: "Section 11: Special Driving Situations - Loading a Trailer, p. 11-10",
    url: MANUAL_URL,
  },
  {
    key: "trailer-sway",
    quote:
      "If the trailer begins to sway or whip, steer straight and reduce speed gradually; do not apply the brakes. Never increase speed.",
    source: MANUAL,
    section: "Section 11: Special Driving Situations - Loading a Trailer, p. 11-10",
    url: MANUAL_URL,
  },
  {
    key: "trailer-55-mph",
    quote:
      "Drive more slowly when towing. The maximum recommended speed for most vehicle-trailer combinations is 55 mph. Driving slower also saves fuel and reduces your chances of losing control.",
    source: MANUAL,
    section: "Section 11: Special Driving Situations - Safe Driving With a Trailer, p. 11-11",
    url: MANUAL_URL,
  },
  {
    key: "trailer-backing",
    quote:
      "When backing up a trailer, go slowly. Keep your hand at the bottom of the steering wheel. To move the trailer left, move your hand to the left. To move to the right, move your hand to the right.",
    source: MANUAL,
    section: "Section 11: Special Driving Situations - Safe Driving With a Trailer, p. 11-12",
    url: MANUAL_URL,
  },

  // ---- Section 12: Test Your Knowledge -----------------------------------
  {
    key: "practice-app",
    quote:
      "To practice for the beginner's permit test, you may download the free app to your smartphone. Search for the app under \"SC DMV Driver Exam\" with this logo. The practice test offers a series of randomly selected questions.",
    source: MANUAL,
    section: "Section 12: Test Your Knowledge - Practice Beginner's Permit Knowledge Test, p. 12-1",
    url: MANUAL_URL,
  },

  // ---- South Carolina Code of Laws, Title 56 -----------------------------
  {
    key: "code-speed-70-60",
    quote:
      "seventy miles an hour on the interstate highway system and other freeways where official signs giving notice of this speed are posted; (2) sixty miles an hour on multilane divided primary highways where official signs giving notice of this speed limit are posted;",
    source: CODE("56-5-1520"),
    section: "Section 56-5-1520(B) - General rules as to maximum speed limits",
    url: C5,
  },
  {
    key: "code-speed-55-40",
    quote:
      "fifty-five miles an hour in other locations or on other sections of highways and unpaved roads are limited to the speed of forty miles an hour;",
    source: CODE("56-5-1520"),
    section: "Section 56-5-1520(B)(3) - General rules as to maximum speed limits",
    url: C5,
  },
  {
    key: "code-speed-urban-30",
    quote:
      "Thirty miles an hour is the maximum speed in an urban district. \"Urban district\" means the territory contiguous to and including any street which is built up with structures devoted to business, industry, or dwelling houses situated at intervals of less than one hundred feet for a distance of a quarter of a mile or more.",
    source: CODE("56-5-1520"),
    section: "Section 56-5-1520(C) - General rules as to maximum speed limits",
    url: C5,
  },
  {
    key: "code-speed-reduced",
    quote:
      "The driver of a vehicle shall drive, consistent with the requirements of subsection (A), at an appropriate reduced speed when approaching and crossing an intersection or railway grade crossing, when approaching and going around a curve, approaching a hillcrest, when traveling upon any narrow bridge, narrow or winding roadway, and when special hazard exists with respect to pedestrians or other traffic or by reason of weather or highway conditions.",
    source: CODE("56-5-1520"),
    section: "Section 56-5-1520(F) - General rules as to maximum speed limits",
    url: C5,
  },
  {
    key: "code-minimum-speed",
    quote:
      "No person shall drive a motor vehicle at such a slow speed as to impede the normal and reasonable movement of traffic except when reduced speed is necessary for safe operation or in compliance with law.",
    source: CODE("56-5-1560"),
    section: "Section 56-5-1560(a) - Minimum speed limits",
    url: C5,
  },
  {
    key: "code-work-zone-fine",
    quote:
      "A person who violates the endangerment of a highway worker provision where the highway worker suffers no physical injury must be fined not more than one thousand dollars and not less than five hundred dollars.",
    source: CODE("56-5-1535"),
    section: "Section 56-5-1535(B)(1) - Endangerment of a highway worker; penalties",
    url: C5,
  },
  {
    key: "code-move-over-lights",
    quote:
      "A person driving a vehicle approaching a stationary authorized emergency vehicle that is giving a signal by displaying alternately flashing red, red and white, blue, or red and blue lights, or amber or yellow warning lights shall proceed with due caution, significantly reduce the speed of the vehicle, and:",
    source: CODE("56-5-1538"),
    section: "Section 56-5-1538(G) - Emergency scene management",
    url: C5,
  },
  {
    key: "code-move-over-fine",
    quote:
      "A person who violates the provisions of this section is guilty of the misdemeanor of endangering emergency services personnel or operators of authorized emergency vehicles and, upon conviction, must be fined not less than three hundred dollars nor more than five hundred dollars.",
    source: CODE("56-5-1538"),
    section: "Section 56-5-1538(H) - Emergency scene management",
    url: C5,
  },
  {
    key: "code-slow-keep-right",
    quote:
      "Upon all roadways any vehicle proceeding at less than the normal speed of traffic at the time and place and under the conditions then existing shall be driven in the right-hand lane then available for traffic or as close as practicable to the right-hand curb or edge of the roadway, except when overtaking and passing another vehicle proceeding in the same direction or when preparing for a left turn at an intersection or into a private road or driveway.",
    source: CODE("56-5-1810"),
    section: "Section 56-5-1810(b) - Drive on the right side of roadways; exceptions",
    url: C5,
  },
  {
    key: "code-pass-on-right",
    quote:
      "The driver of a vehicle may overtake and pass upon the right of another vehicle only under the following conditions: 1. When the vehicle overtaken is making or about to make a left turn. 2. Upon a roadway with unobstructed pavement of sufficient width for two or more lines of vehicles moving lawfully in the direction being travelled by the overtaking vehicle.",
    source: CODE("56-5-1850"),
    section: "Section 56-5-1850(a) - When passing on the right is permitted",
    url: C5,
  },
  {
    key: "code-pass-right-off-road",
    quote:
      "The driver of a vehicle may overtake and pass another vehicle upon the right only under conditions permitting such movement in safety. Such movement shall not be made by driving off the roadway.",
    source: CODE("56-5-1850"),
    section: "Section 56-5-1850(b) - When passing on the right is permitted",
    url: C5,
  },
  {
    key: "code-left-lane",
    quote:
      "A vehicle may not be driven in the farthest left-hand lane of a controlled access highway except when overtaking and passing another vehicle.",
    source: CODE("56-5-1885"),
    section: "Section 56-5-1885(A) - Overtaking and passing another vehicle in the farthest left-hand lane",
    url: C5,
  },
  {
    key: "code-being-passed",
    quote:
      "Except when overtaking and passing on the right is permitted, the driver of an overtaken vehicle shall give way to the right in favor of the overtaking vehicle on audible signal and shall not increase the speed of his vehicle until completely passed by the overtaking vehicle.",
    source: CODE("56-5-1840"),
    section: "Section 56-5-1840(2) - Overtaking and passing vehicles proceeding in same direction",
    url: C5,
  },
  {
    key: "code-fire-apparatus-500",
    quote:
      "The driver of any vehicle other than one on official business shall not follow any fire apparatus traveling in response to an emergency closer than five hundred feet or stop such vehicle within five hundred feet of any fire apparatus stopped in answer to an emergency.",
    source: CODE("56-5-1960"),
    section: "Section 56-5-1960 - Following fire apparatus prohibited",
    url: C5,
  },
  {
    key: "code-two-way-left-turn-lane",
    quote:
      "A vehicle shall not be driven in the lane except when preparing for or making a left turn from or into the roadway or when preparing for or making a U turn when otherwise permitted by law.",
    source: CODE("56-5-2120"),
    section: "Section 56-5-2120(d)(2) - Required position and method of turning",
    url: C5,
  },
  {
    key: "code-u-turn-500",
    quote:
      "No vehicle shall be turned so as to proceed in the opposite direction upon any curve or upon the approach to or near the crest of a grade where such vehicle cannot be seen by the driver of any other vehicle approaching from either direction within five hundred feet.",
    source: CODE("56-5-2140"),
    section: "Section 56-5-2140(b) - Limitations on turning around",
    url: C5,
  },
  {
    key: "code-signal-100",
    quote:
      "A signal of intention to turn or move right or left when required shall be given continuously during not less than the last one hundred feet traveled by the vehicle before turning.",
    source: CODE("56-5-2150"),
    section: "Section 56-5-2150(B) - Turning movements and required signals",
    url: C5,
  },
  {
    key: "code-hand-signals",
    quote:
      "(1) Left turn, hand and arm extended horizontally; (2) Right turn, hand and arm extended upward; and (3) Stop or decrease speed, hand and arm extended downward.",
    source: CODE("56-5-2170"),
    section: "Section 56-5-2170 - Method of giving hand and arm signals",
    url: C5,
  },
  {
    key: "code-uncontrolled-right",
    quote:
      "When two vehicles approach or enter an intersection from different highways at approximately the same time, the driver of the vehicle on the left shall yield the right-of-way to the vehicle on the right.",
    source: CODE("56-5-2310"),
    section: "Section 56-5-2310(a) - Vehicles approaching or entering intersection",
    url: C5,
  },
  {
    key: "code-left-turn-yield",
    quote:
      "The driver of a vehicle intending to turn to the left within an intersection or into an alley, private road or driveway shall yield the right-of-way to any vehicle approaching from the opposite direction which is within the intersection or so close thereto as to constitute an immediate hazard.",
    source: CODE("56-5-2320"),
    section: "Section 56-5-2320 - Vehicle turning left",
    url: C5,
  },
  {
    key: "code-yield-collision",
    quote:
      "If such driver is involved in a collision with a vehicle in the intersection or junction of roadways, after driving past a yield sign without stopping, the collision shall be deemed prima facie evidence of his failure to yield right-of-way.",
    source: CODE("56-5-2330"),
    section: "Section 56-5-2330(c) - Stop signs and yield signs",
    url: C5,
  },
  {
    key: "code-emergency-vehicle-two-lane",
    quote:
      "the driver of every other vehicle traveling along a two-lane roadway shall yield the right-of-way and shall immediately drive to a position parallel to, and as close as possible, to the right hand edge or curb of the roadway clear of any intersection and shall stop and remain in that position until the authorized emergency vehicle has passed, except when otherwise directed by a police officer.",
    source: CODE("56-5-2360"),
    section: "Section 56-5-2360(a) - Operation of vehicles on approach of authorized emergency vehicles",
    url: C5,
  },
  {
    key: "code-parking-outside-district",
    quote:
      "An unobstructed width of the highway opposite a standing vehicle must be left for the free passage of other vehicles and a clear view of the stopped vehicle must be available from a distance of two hundred feet in each direction upon the highway.",
    source: CODE("56-5-2510"),
    section: "Section 56-5-2510(A) - Stopping, standing, or parking outside of business or residential district",
    url: C5,
  },
  {
    key: "code-no-stopping-places",
    quote:
      "(a) On the roadway side of any vehicle stopped or parked at the edge or curb of a street. (b) On a sidewalk. (c) Within an intersection. (d) On a crosswalk.",
    source: CODE("56-5-2530"),
    section: "Section 56-5-2530(A)(1) - Stopping, standing, or parking prohibited in specified places",
    url: C5,
  },
  {
    key: "code-parking-hydrant-crosswalk",
    quote:
      "(a) In front of a public or private driveway. (b) Within fifteen feet of a fire hydrant. (c) Within twenty feet of a crosswalk at an intersection. (d) Within thirty feet upon the approach to any flashing signal, stop sign, yield sign or traffic-control signal located at the side of a roadway.",
    source: CODE("56-5-2530"),
    section: "Section 56-5-2530(A)(2) - Stopping, standing, or parking prohibited in specified places",
    url: C5,
  },
  {
    key: "code-parking-fire-station",
    quote:
      "Within twenty feet of the driveway entrance to any fire station and on the side of a street opposite to any fire station within seventy-five feet of the entrance when properly signposted.",
    source: CODE("56-5-2530"),
    section: "Section 56-5-2530(A)(2)(e) - Stopping, standing, or parking prohibited in specified places",
    url: C5,
  },
  {
    key: "code-parking-railroad-50",
    quote:
      "Park a vehicle, whether occupied or not, except temporarily for the purpose of and while actually engaged in loading or unloading property or passengers: (a) Within fifty feet of the nearest rail of a railroad crossing.",
    source: CODE("56-5-2530"),
    section: "Section 56-5-2530(A)(3) - Stopping, standing, or parking prohibited in specified places",
    url: C5,
  },
  {
    key: "code-park-18-inches",
    quote:
      "every vehicle stopped or parked upon a roadway where there are adjacent curbs shall be so stopped or parked with the right-hand wheels of such vehicle parallel to and within eighteen inches of the right-hand curb.",
    source: CODE("56-5-2560"),
    section: "Section 56-5-2560 - Parking at right-hand curb not more than 18 inches from curb",
    url: C5,
  },
  {
    key: "code-railroad-stop-15-50",
    quote:
      "the driver of the vehicle shall stop within fifty feet, but not less than fifteen feet, from the nearest rail of the railroad and shall not proceed until he can do so safely.",
    source: CODE("56-5-2710"),
    section: "Section 56-5-2710(a) - Obedience to signal indicating approach of train",
    url: C5,
  },
  {
    key: "code-railroad-gate",
    quote:
      "No person shall drive any vehicle through, around or under any crossing gate or barrier at a railroad crossing while the gate or barrier is closed or is being opened or closed.",
    source: CODE("56-5-2710"),
    section: "Section 56-5-2710(b) - Obedience to signal indicating approach of train",
    url: C5,
  },
  {
    key: "code-driveway-sidewalk",
    quote:
      "The driver of a vehicle emerging from an alley, building, private road or driveway within a business or residential district shall stop the vehicle immediately prior to driving onto a sidewalk or onto the sidewalk area extending across the alley, building entrance, road or driveway",
    source: CODE("56-5-2745"),
    section: "Section 56-5-2745 - Emerging from alley, driveway, or building",
    url: C5,
  },
  {
    key: "code-school-bus-amber",
    quote:
      "The driver of a vehicle must not overtake a school bus which has amber visual signals actuated.",
    source: CODE("56-5-2770"),
    section: "Section 56-5-2770(C) - Signals and markings on school buses; meeting, overtaking and passing school bus",
    url: C5,
  },
  {
    key: "code-school-bus-fine",
    quote:
      "for a first offense must be fined not less than five hundred dollars or imprisoned not more than thirty days. In lieu of imprisonment, the court may require that the individual complete an appropriate term of community service of not fewer than ten days upon terms and conditions the court considers proper.",
    source: CODE("56-5-2780"),
    section: "Section 56-5-2780(A) - Penalties for unlawfully passing a stopped school bus",
    url: C5,
  },
  {
    key: "code-duac-0-08",
    quote:
      "It is unlawful for a person to drive a motor vehicle within this State while his alcohol concentration is eight one-hundredths of one percent or more. A person who violates the provisions of this section is guilty of the offense of driving with an unlawful alcohol concentration",
    source: CODE("56-5-2933"),
    section: "Section 56-5-2933(A) - Driving with an unlawful alcohol concentration",
    url: C5,
  },
  {
    key: "code-dui-first-offense",
    quote:
      "for a first offense, by a fine of four hundred dollars or imprisonment for not less than forty-eight hours nor more than thirty days.",
    source: CODE("56-5-2930"),
    section: "Section 56-5-2930(A)(1) - Operating motor vehicle while under influence of alcohol or drugs; penalties",
    url: C5,
  },
  {
    key: "code-implied-consent-refusal",
    quote:
      "the person does not have to take the test or give the samples, but that the person's privilege to drive must be suspended or denied for at least six months with the option of ending the suspension if the person enrolls in the Ignition Interlock Device Program, if the person refuses to submit to the test, and that the person's refusal may be used against the person in court;",
    source: CODE("56-5-2950"),
    section: "Section 56-5-2950(B)(1) - Implied consent to testing for alcohol or drugs",
    url: C5,
  },
  {
    key: "code-bac-0-15-month",
    quote:
      "the person's privilege to drive must be suspended for at least one month with the option of ending the suspension if the person enrolls in the Ignition Interlock Device Program, if the person takes the test or gives the samples and has an alcohol concentration of fifteen one-hundredths of one percent or more;",
    source: CODE("56-5-2950"),
    section: "Section 56-5-2950(B)(2) - Implied consent to testing for alcohol or drugs",
    url: C5,
  },
  {
    key: "code-interlock-first",
    quote:
      "For a first offense, a person shall enroll in the Ignition Interlock Device Program pursuant to Section 56-5-2941, end the suspension, and obtain an ignition interlock restricted license pursuant to Section 56-1-400. The ignition interlock device is required to be affixed to the motor vehicle for six months.",
    source: CODE("56-5-2990"),
    section: "Section 56-5-2990(A)(2) - Suspension of convicted person's driver's license",
    url: C5,
  },
  {
    key: "code-under-21-0-02",
    quote:
      "The Department of Motor Vehicles shall suspend the driver's license, permit, or nonresident operating privilege of, or deny the issuance of a license or permit to a person under the age of twenty-one who drives a motor vehicle and has an alcohol concentration of two one-hundredths of one percent or more.",
    source: CODE("56-1-286"),
    section: "Section 56-1-286(A) - Suspension of license or permit of persons under twenty-one who drive with certain alcohol concentration",
    url: C1,
  },
  {
    key: "code-pedestrian-no-pass-stopped",
    quote:
      "Whenever any vehicle is stopped at a marked crosswalk or at any unmarked crosswalk at an intersection to permit a pedestrian to cross the roadway, the driver of any other vehicle approaching from the rear shall not overtake and pass such stopped vehicle.",
    source: CODE("56-5-3130"),
    section: "Section 56-5-3130(d) - Pedestrians' right-of-way in crosswalks",
    url: C5,
  },
  {
    key: "code-pedestrian-jaywalk",
    quote:
      "Every pedestrian crossing a roadway at any point other than within a marked crosswalk or within an unmarked crosswalk at an intersection shall yield the right-of-way to all vehicles upon the roadway.",
    source: CODE("56-5-3150"),
    section: "Section 56-5-3150(a) - Crossing at other than crosswalks",
    url: C5,
  },
  {
    key: "code-due-care",
    quote:
      "every driver of a vehicle shall exercise due care to avoid colliding with any pedestrian or any person propelling a human-powered vehicle and shall give an audible signal when necessary and shall exercise proper precaution upon observing any child or any obviously confused, incapacitated or intoxicated person.",
    source: CODE("56-5-3230"),
    section: "Section 56-5-3230 - Drivers to exercise due care",
    url: C5,
  },
  {
    key: "code-motorcycle-lane",
    quote:
      "All motorcycles are entitled to full use of a lane and no motor vehicle shall be driven in such a manner as to deprive any motorcycle of the full use of a lane. This shall not apply to motorcycles operated two abreast in a single lane.",
    source: CODE("56-5-3640"),
    section: "Section 56-5-3640(a) - Motorcycle entitled to full use of lane",
    url: C5,
  },
  {
    key: "code-helmet-under-21",
    quote:
      "It shall be unlawful for any person under the age of twenty-one to operate or ride upon a two-wheeled motorized vehicle unless he wears a protective helmet of a type approved by the Department of Public Safety.",
    source: CODE("56-5-3660"),
    section: "Section 56-5-3660 - Helmets must be worn by operators and passengers under age twenty-one",
    url: C5,
  },
  {
    key: "code-backing-freeway",
    quote:
      "No driver shall back a vehicle unless such movement can be made with safety and without interfering with other traffic. (b) No driver shall back a vehicle upon any shoulder or roadway of any controlled-access highway.",
    source: CODE("56-5-3810"),
    section: "Section 56-5-3810 - Limitations on backing",
    url: C5,
  },
  {
    key: "code-opening-doors",
    quote:
      "No person shall open any door of a motor vehicle unless it is reasonably safe to do so, and can be done without interfering with the movement of other traffic, nor shall any person leave a door open on the side of a vehicle available to moving traffic for a period of time longer than necessary to load or unload passengers.",
    source: CODE("56-5-3822"),
    section: "Section 56-5-3822 - Opening vehicle doors",
    url: C5,
  },
  {
    key: "code-coasting",
    quote:
      "The driver of any motor vehicle when traveling upon a downgrade shall not coast with the gears of such vehicle in neutral.",
    source: CODE("56-5-3840"),
    section: "Section 56-5-3840 - Coasting prohibited",
    url: C5,
  },
  {
    key: "code-hands-free-exceptions",
    quote:
      "This section does not apply to a motor vehicle operator who is: (1) lawfully parked or stopped; (2) initiating a voice-based communication that is automatically converted by the device and sent as text, provided that the device is not held by the operator or supported with any part of the body by the operator; (3) reporting an accident, emergency, or safety hazard to a public safety official;",
    source: CODE("56-5-3890"),
    section: "Section 56-5-3890(C) - Unlawful use of a mobile electronic device while operating a motor vehicle",
    url: C5,
  },
  {
    key: "code-hands-free-three-years",
    quote:
      "Only those offenses which occurred within three years, including and immediately preceding the date of the last offense, shall constitute prior offenses within the meaning of this subsection.",
    source: CODE("56-5-3890"),
    section: "Section 56-5-3890(D)(2) - Unlawful use of a mobile electronic device while operating a motor vehicle",
    url: C5,
  },
  {
    key: "code-headlights-when",
    quote:
      "Every vehicle upon a street or highway within this State shall display lighted lamps and illuminating devices, excluding parking lights, from a half hour after sunset to a half hour before sunrise, and at any other time when windshield wipers are in use as a result of rain, sleet, or snow, or when inclement weather or environmental factors severely reduce the ability to clearly discern persons and vehicles on the street or highway at a distance of five hundred feet ahead",
    source: CODE("56-5-4450"),
    section: "Section 56-5-4450(A) - Times when vehicles must be equipped with lights",
    url: C5,
  },
  {
    key: "code-wipers-intermittent",
    quote:
      "the provisions of this section requiring use of lights in conjunction with the use of windshield wipers shall not apply to instances when windshield wipers are used intermittently in misting rain, sleet, or snow.",
    source: CODE("56-5-4450"),
    section: "Section 56-5-4450(A) - Times when vehicles must be equipped with lights",
    url: C5,
  },
  {
    key: "code-dim-500-200",
    quote:
      "Whenever the driver of a vehicle approaches an oncoming vehicle within five hundred feet, such driver shall use a distribution of light or composite beam so aimed that the glaring rays are not projected into the eyes of the oncoming driver;",
    source: CODE("56-5-4780"),
    section: "Section 56-5-4780(1) - Use of multiple-beam road-lighting equipment",
    url: C5,
  },
  {
    key: "code-child-booster",
    quote:
      "A child at least four years of age who has outgrown his forward-facing child passenger restraint system must be secured by a belt-positioning booster seat in a rear seat of the vehicle until he can meet the height and fit requirements for an adult safety seat belt as described in item (4). The belt-positioning booster seat must be used with both lap and shoulder belts. A booster seat must not be used with a lap belt alone.",
    source: CODE("56-5-6410"),
    section: "Section 56-5-6410(A)(3) - Child passenger restraint systems",
    url: C5,
  },
  {
    key: "code-seat-belt-driver",
    quote:
      "The driver and every occupant of a motor vehicle, when it is being operated on the public streets and highways of this State, must wear a fastened safety belt which complies with all provisions of federal law for its use. The driver is charged with the responsibility of requiring each occupant seventeen years of age or younger to wear a safety belt or be secured in a child restraint system",
    source: CODE("56-5-6520"),
    section: "Section 56-5-6520 - Mandatory use of seat belt",
    url: C5,
  },
  {
    key: "code-seat-belt-fine",
    quote:
      "A person who is adjudicated to be in violation of the provisions of this article must be fined not more than twenty-five dollars, no part of which may be suspended. No court costs, assessments, or surcharges may be assessed against a person who violates a provision of this article. A person must not be fined more than fifty dollars for any one incident of one or more violations of the provisions of this article.",
    source: CODE("56-5-6540"),
    section: "Section 56-5-6540(A) - Penalty; nature of offense",
    url: C5,
  },
  {
    key: "code-collision-injury-stop",
    quote:
      "The driver of a vehicle involved in an accident resulting in injury to or the death of a person immediately shall stop the vehicle at the scene of the accident or as close to it as possible. He then shall return to and in every event shall remain at the scene of the accident until he has fulfilled the requirements of Section 56-5-1230.",
    source: CODE("56-5-1210"),
    section: "Section 56-5-1210(A) - Duties of drivers involved in accident resulting in death or personal injury",
    url: C5,
  },
  {
    key: "code-collision-move-vehicle",
    quote:
      "If a disabled vehicle or a vehicle involved in an accident resulting only in damage to a vehicle is obstructing traffic, the driver of the vehicle shall make every reasonable effort to move any vehicle that is capable of being driven safely off the roadway as defined by Section 56-5-460 so as not to block the flow of traffic.",
    source: CODE("56-5-1220"),
    section: "Section 56-5-1220(B) - Duties of driver involved in accident resulting in damage to attended vehicles",
    url: C5,
  },
  {
    key: "code-collision-information",
    quote:
      "The driver of any vehicle involved in an accident resulting in injury to or death of any person or damage to any vehicle which is driven or attended by any person shall give his name, address and the registration number of the vehicle he is driving and shall upon request and if available exhibit his driver's license to the person struck or the driver or occupant of or person attending any vehicle collided with",
    source: CODE("56-5-1230"),
    section: "Section 56-5-1230 - Duty to give information and render aid",
    url: C5,
  },
  {
    key: "code-collision-report",
    quote:
      "The driver of a vehicle involved in an accident resulting in injury to or death of any person shall immediately by the quickest means of communication, whether oral or written, give notice of such accident to the local police department if such accident occurs within a municipality, otherwise to the office of the county sheriff or the nearest office of the South Carolina Highway Patrol.",
    source: CODE("56-5-1260"),
    section: "Section 56-5-1260 - Immediate report of accidents resulting in personal injury or death",
    url: C5,
  },
  {
    key: "code-green-arrow",
    quote:
      "Vehicular traffic facing a green arrow signal, shown alone or in combination with another indication, may cautiously enter the intersection only to make the movement indicated by such arrow or such other movement as is permitted by other indications shown at the same time. Such vehicular traffic shall yield the right-of-way to pedestrians lawfully within an adjacent crosswalk and to other traffic lawfully using the intersection.",
    source: CODE("56-5-970"),
    section: "Section 56-5-970(A)(2) - Traffic-control signal legend",
    url: C5,
  },
  {
    key: "code-red-arrow",
    quote:
      "Vehicular traffic facing a steady red arrow signal shall not enter the intersection to make the movement indicated by the arrow, and unless entering the intersection to make a movement permitted by another signal, shall stop at a clearly marked stop line",
    source: CODE("56-5-970"),
    section: "Section 56-5-970(C)(2) - Traffic-control signal legend",
    url: C5,
  },
  {
    key: "code-left-on-red",
    quote:
      "Except when a sign is in place prohibiting a turn, vehicular traffic facing any steady red signal may cautiously enter the intersection to turn right or to turn left from a one-way street into a one-way street after stopping as required by item (1) or (2).",
    source: CODE("56-5-970"),
    section: "Section 56-5-970(C)(3) - Traffic-control signal legend",
    url: C5,
  },
  {
    key: "code-walk-signal",
    quote:
      "\"Walk\" indicates that a pedestrian facing such signal may proceed across the roadway in the direction of the signal and shall be given the right of way by the drivers of all vehicles;",
    source: CODE("56-5-990"),
    section: "Section 56-5-990(1) - Pedestrian \"walk\" and \"wait\" signals",
    url: C5,
  },
  {
    key: "code-flashing-yellow",
    quote:
      "Flashing yellow (caution signal). When a yellow lens is illuminated with rapid intermittent flashes, drivers of vehicles may proceed through the intersection or past such signal only with caution.",
    source: CODE("56-5-1000"),
    section: "Section 56-5-1000(a)(2) - Flashing signals",
    url: C5,
  },
  {
    key: "code-permit-twelve-months",
    quote:
      "A beginner's permit entitles the permittee having the permit in his immediate possession to drive a motor vehicle on public highways under the conditions contained in this section for not more than twelve months.",
    source: CODE("56-1-50"),
    section: "Section 56-1-50(A) - Beginner's permit; hours and conditions of vehicle operation",
    url: C1,
  },
  {
    key: "code-permit-fee",
    quote:
      "The fee for every beginner's or renewal permit is two dollars and fifty cents, and the permit must bear the full name, date of birth, and residence address and a brief description and unobstructed photograph of the permittee",
    source: CODE("56-1-50"),
    section: "Section 56-1-50(D) - Beginner's permit; renewal and fee",
    url: C1,
  },
  {
    key: "code-permit-seat-beside",
    quote:
      "The accompanying driver must: (1) occupy a seat beside the permittee when the permittee is operating a motor vehicle; or (2) be within a safe viewing distance of the permittee when the permittee is operating a motorcycle or a moped.",
    source: CODE("56-1-50"),
    section: "Section 56-1-50(C) - Beginner's permit; hours and conditions of vehicle operation",
    url: C1,
  },
  {
    key: "code-address-change",
    quote:
      "such person shall within ten days thereafter notify the Department of Motor Vehicles in writing of his old and new address or of such former and new name and of the number of any license then held by him.",
    source: CODE("56-1-230"),
    section: "Section 56-1-230 - Notification of change of address or name",
    url: C1,
  },
  {
    key: "code-gdl-postpone",
    quote:
      "A person while operating a motor vehicle under a conditional or a special restricted driver's license who is convicted of a traffic offense or involved in an accident in which he was at fault shall have the removal of the restrictions postponed for twelve months and is not eligible to be issued a regular driver's license until one year from the date of the last traffic offense or accident in which he was at fault or until he is seventeen years of age.",
    source: CODE("56-1-185"),
    section: "Section 56-1-185(A) - Removal of restrictions postponed; suspension of license",
    url: C1,
  },
  {
    key: "code-points-schedule",
    quote:
      "Reckless driving 6 Passing stopped school bus 6 Hit-and-run, property damages only 6",
    source: CODE("56-1-720"),
    section: "Section 56-1-720 - Point system established; schedule of points for violations",
    url: C1,
  },
  {
    key: "code-points-speeding",
    quote:
      "No more than 10 m.p.h. above the posted limits 2 (2) More than 10 m.p.h. but less than 25 m.p.h. above the posted limits 4 (3) 25 m.p.h. or above the posted limits 6",
    source: CODE("56-1-720"),
    section: "Section 56-1-720 - Point system established; schedule of points for violations",
    url: C1,
  },
  {
    key: "code-points-suspension-lengths",
    quote:
      "(1) twelve to fifteen points-three months' suspension; (2) sixteen or seventeen points-four months' suspension; (3) eighteen or nineteen points-five months' suspension; (4) twenty points and over-six months' suspension.",
    source: CODE("56-1-740"),
    section: "Section 56-1-740(A) - Suspension of driver's license; point accumulation",
    url: C1,
  },
  {
    key: "code-driving-suspended",
    quote:
      "a person who drives a motor vehicle on a public highway of this State when the person's license to drive is canceled, suspended, or revoked must, upon conviction, be punished as follows: (a) for a first offense, fined three hundred dollars or imprisoned for up to thirty days, or both;",
    source: CODE("56-1-460"),
    section: "Section 56-1-460(A)(1) - Penalties for driving while license cancelled, suspended or revoked",
    url: C1,
  },
];
