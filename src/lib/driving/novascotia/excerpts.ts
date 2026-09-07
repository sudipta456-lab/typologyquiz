import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Nova Scotia bank. GENERATED, not typed:
// every quote below was lifted mechanically as a contiguous substring of the
// same normalised text scripts/verify-excerpts.py reads, so nothing here has
// been retyped, tidied or half-remembered. Seven sources sit behind them.
//
//  - The Nova Scotia Driver's Handbook, published by the Province of Nova
//    Scotia and served as ten separate chapter PDFs from the Registry of Motor
//    Vehicles' own page. Its only edition label is the line on its copyright
//    page: Crown copyright 2000, "Reprinted with revisions, 2003, 2004, 2005,
//    2006, 2007, 2013 and 2017". The chapters carry ONE continuous set of
//    printed page numbers, so the page in each `section` below is the number
//    printed on the page; the `#page=` anchor in the url is the page within
//    that chapter's own PDF, which is what a reader's viewer needs.
//  - The four-page supplement bound into the front of the introduction PDF,
//    "Important Graduated Driver Licence Changes". It is part of the handbook
//    and it OVERRIDES chapter 1 and chapter 2 wherever the two disagree: the
//    third GDL stage, the two-year learner's licence, the slow-down-and-move-
//    over rule and the duty to yield to a transit bus are all only there.
//  - The Registry of Motor Vehicles' handbook page itself, which publishes a
//    short list of amendments the book has not absorbed. It is the source that
//    settles the school-zone speed and the collision-reporting threshold,
//    both of which the book states two different ways.
//  - The Registry's Graduated Drivers Licence System page, and the Permits
//    Directory entries for the Learner's (Beginner's) Licence and the Newly
//    Licensed Driver's Licence. These carry the CURRENT practice period -
//    12 months, or 9 with an approved driver education course. Chapter 1 of
//    the handbook still says six months and three; it has been wrong since
//    2016 and it is the single most dangerous stale number in the book.
//  - The Government of Nova Scotia's "Take a driver knowledge test: Learner's
//    Licence (class 7)" page, for the test format: two parts, twenty questions
//    each, sixteen to pass each, thirty minutes per part. The handbook gives
//    the same counts; the web page gives the online option, the retake rule
//    and the time limit, none of which is in the book.
//  - The Motor Vehicle Act, R.S.N.S. 1989, c. 293, consolidated to
//    May 1, 2026, on the House of Assembly's own server. It supplies what the
//    handbook omits: the hand-held phone offence (Section 100D, absent from a
//    book written in 2000), the statutory 80 km/h ceiling and its 110 km/h
//    cap, the school-area speed formula, the emergency-vehicle 60 km/h rule
//    and the roundabout duty.
//
// Only the normalisations the sibling banks use were applied, to the extracted
// text and to nothing else: curly quotes, en dashes and em dashes fold to
// ASCII; soft hyphens are dropped; runs of whitespace, including the line
// breaks the PDF inserts mid-sentence, collapse to single spaces; the section
// symbol is spelled out as "Section"; and where a source states a rule as a
// stem followed by a bulleted list, the items run together in the order they
// appear - no words are changed, dropped or reordered.
//
// The sources' own slips are preserved exactly as they stand, because a quote
// that has been tidied up is no longer a quote. Among them: the handbook's
// missing spaces after full stops, which the typesetting swallowed and the
// PDF's text layer records faithfully ("This is called an unmarked crosswalk"
// runs straight on from the sentence before it in several places); "an
// collision" for "a collision"; "nightime" for "nighttime"; and the liver
// metabolising alcohol "at the rate of .015 mg/hr", which is not a unit any
// chemist would recognise.

export const novascotiaExcerpts: HandbookExcerpt[] = [
  {
    key: "test-two-parts",
    quote:
      "The Knowledge Test has 2 parts - driving rules (traffic " +
      "and safe driving) and road signs.",
    source:
      "Take a driver knowledge test: Learner's Licence (class 7) (Government of Nova Scotia)",
    section: "What you're tested on",
    url: "https://www.novascotia.ca/take-driver-knowledge-test-learners-licence-class-7",
  },
  {
    key: "test-rules-half",
    quote:
      "The Rules of the Road Test assesses your knowledge of the " +
      "traffic laws and rules for safe driving. This part of the " +
      "Knowledge Test has 20 multiple-choice questions. To pass, " +
      "you need to answer at least 16 correctly.",
    source:
      "Take a driver knowledge test: Learner's Licence (class 7) (Government of Nova Scotia)",
    section: "What you're tested on - Rules of the Road Test",
    url: "https://www.novascotia.ca/take-driver-knowledge-test-learners-licence-class-7",
  },
  {
    key: "test-signs-half",
    quote:
      "The Road Sign Recognition Test assesses your ability to " +
      "recognize and understand the meaning of highway road " +
      "signs. This part of the Knowledge Test has 20 " +
      "multiple-choice questions. To pass, you need to answer at " +
      "least 16 correctly.",
    source:
      "Take a driver knowledge test: Learner's Licence (class 7) (Government of Nova Scotia)",
    section: "What you're tested on - Road Sign Recognition Test",
    url: "https://www.novascotia.ca/take-driver-knowledge-test-learners-licence-class-7",
  },
  {
    key: "test-retake",
    quote:
      "You only need to retake the part of the Knowledge Test you " +
      "didn't pass",
    source:
      "Take a driver knowledge test: Learner's Licence (class 7) (Government of Nova Scotia)",
    section: "If you don't pass the Knowledge Test",
    url: "https://www.novascotia.ca/take-driver-knowledge-test-learners-licence-class-7",
  },
  {
    key: "test-retake-wait",
    quote:
      "If you take the Knowledge Test online, there's no waiting " +
      "period to retake the test (you can take the test again as " +
      "soon as you're ready). If you take the test in person, you " +
      "need to wait until the next day to retake the test.",
    source:
      "Take a driver knowledge test: Learner's Licence (class 7) (Government of Nova Scotia)",
    section: "If you don't pass the Knowledge Test",
    url: "https://www.novascotia.ca/take-driver-knowledge-test-learners-licence-class-7",
  },
  {
    key: "test-time-limit",
    quote:
      "You need to complete each part of the test within 30 " +
      "minutes.",
    source:
      "Take a driver knowledge test: Learner's Licence (class 7) (Government of Nova Scotia)",
    section: "How long it takes",
    url: "https://www.novascotia.ca/take-driver-knowledge-test-learners-licence-class-7",
  },
  {
    key: "test-not-yet-licensed",
    quote:
      "You don't get your Learner's Licence (class 7) as soon as " +
      "you pass the Knowledge Test and you can't drive right " +
      "away.",
    source:
      "Take a driver knowledge test: Learner's Licence (class 7) (Government of Nova Scotia)",
    section: "When you pass the Knowledge Test",
    url: "https://www.novascotia.ca/take-driver-knowledge-test-learners-licence-class-7",
  },
  {
    key: "test-eligibility-age",
    quote:
      "you're 16 or older you have written consent from your " +
      "parent or guardian to apply for a Learner's Licence if " +
      "you're 16 or 17",
    source:
      "Take a driver knowledge test: Learner's Licence (class 7) (Government of Nova Scotia)",
    section: "Eligibility",
    url: "https://www.novascotia.ca/take-driver-knowledge-test-learners-licence-class-7",
  },
  {
    key: "test-two-written",
    quote:
      "you will be given two written tests (oral tests are given " +
      "in some cases), a road sign test and a rules test. Each " +
      "test consists of 20 multiple-choice questions.To pass, you " +
      "must answer 16 questions correctly.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - How to Apply for a Learner's Licence (page 7)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=7",
  },
  {
    key: "lic-must-have",
    quote:
      "To drive in Nova Scotia, you must have a valid driver's " +
      "licence, and it must be the right type of licence for the " +
      "kind of vehicle you want to drive",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - The Nova Scotia Licensing System (page 3)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=3",
  },
  {
    key: "gdl-three-levels",
    quote:
      "Nova Scotia also has what is called a Graduated Driver " +
      "Licensing program (or \"GDL\" for short), which has 3 " +
      "levels: 1 learner's licence (sometimes called the " +
      "\"beginner's licence\") 2 newly licensed driver's licence 3 " +
      "driver's licence",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - The Nova Scotia Licensing System (page 3)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=3",
  },
  {
    key: "gdl-all-ages",
    quote:
      "This program applies to all new drivers of passenger " +
      "vehicles in Nova Scotia, whatever your age.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - The Nova Scotia Licensing System (page 3)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=3",
  },
  {
    key: "gdl-third-stage",
    quote:
      "On April 1, 2015, a third stage of GDL was added to the " +
      "program - it is called the restricted individual stage.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Important Graduated Driver Licence Changes (page None)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-1_intro.pdf#page=6",
  },
  {
    key: "gdl-stages-named",
    quote:
      "There are now three stages of GDL: 1 The learner's licence " +
      "stage (see page 6) 2 The newly licensed stage (see page " +
      "16) 3 The restricted individual stage",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Important Graduated Driver Licence Changes (page None)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-1_intro.pdf#page=6",
  },
  {
    key: "gdl-restricted-two-years",
    quote:
      "Once you leave the newly licensed stage, you enter the " +
      "restricted individual stage. You will remain in this stage " +
      "for 2 full years.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Important Graduated Driver Licence Changes - Restricted Individuals (page None)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-1_intro.pdf#page=6",
  },
  {
    key: "gdl-restricted-rules",
    quote:
      "When you have a Class 5R or 6R with condition 47, you must " +
      "comply with 2 important restrictions: 1 You must have zero " +
      "alcohol or drugs in your body while driving",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Important Graduated Driver Licence Changes - Restrictions (page None)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-1_intro.pdf#page=6",
  },
  {
    key: "gdl-no-supervising",
    quote:
      "2 You cannot be a supervising driver (previously called " +
      "and experienced driver). This means you cannot teach " +
      "someone to drive or be a supervising driver for a newly " +
      "licensed driver during the curfew hours between midnight " +
      "and 5:00 am.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Important Graduated Driver Licence Changes - Restrictions (page None)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-1_intro.pdf#page=6",
  },
  {
    key: "gdl-exit",
    quote:
      "You will not exit the GDL program until you have finished " +
      "the restricted individual stage.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Important Graduated Driver Licence Changes - Exiting the GDL program (page None)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-1_intro.pdf#page=7",
  },
  {
    key: "learner-expiry-two-years",
    quote:
      "A learner's licence is valid for a maximum of 2 years " +
      "(previously 1 year).",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Important Graduated Driver Licence Changes - Learner's Licence Expiry (page None)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-1_intro.pdf#page=7",
  },
  {
    key: "learner-expiry-rewrite",
    quote:
      "You must successfully pass the road test to enter the next " +
      "GDL stage before your learner's licence expires. If you do " +
      "not, you must rewrite the learner's test before you may " +
      "renew your learner's licence.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Important Graduated Driver Licence Changes - Learner's Licence Expiry (page None)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-1_intro.pdf#page=7",
  },
  {
    key: "learner-who-can-apply",
    quote:
      "Any resident of Nova Scotia who is at least 16 years old.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Getting a Learner's Licence (page 6)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=6",
  },
  {
    key: "learner-consent",
    quote:
      "If you are under 18, you must have written permission to " +
      "get a learner's licence.This is done through a signed " +
      "consent form, which you can get from any office of the " +
      "Registry of Motor Vehicles or Access Nova Scotia centre.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Getting a Learner's Licence (page 6)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=6",
  },
  {
    key: "learner-restrictions",
    quote:
      "1 You must drive with an experienced driver in the front " +
      "seat of the vehicle and no other passengers.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Restrictions (page 10)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=10",
  },
  {
    key: "experienced-driver-def",
    quote:
      "An experienced driver is someone who has held a valid " +
      "driver's licence for two years and is no longer in the GDL " +
      "program.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Restrictions (page 10)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=10",
  },
  {
    key: "learner-zero-bac",
    quote:
      "2 Your blood-alcohol level must remain at zero.That means " +
      "absolutely no drinking when driving.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Restrictions (page 10)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=10",
  },
  {
    key: "learner-four-points",
    quote:
      "As a learner, if you get four or more demerit points, then " +
      "your driving privileges will be suspended for six months.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Restrictions (page 10)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=10",
  },
  {
    key: "learner-carry-licence",
    quote:
      "Remember to always carry your learner's licence with you " +
      "when you are operating a motor vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Expiry (page 9)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=9",
  },
  {
    key: "road-test-wait",
    quote:
      "Normally, learners have to wait at least six months before " +
      "they can take a road test. (However, if you pass a " +
      "longcourse driver training program, you have to wait only " +
      "three months.)",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Road Test (page 13)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=13",
  },
  {
    key: "driver-training-long",
    quote:
      "The long course involves at least 25 hours of classroom " +
      "time and at least 10 hours of actual driving time.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Driver training programs (page 12)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=12",
  },
  {
    key: "road-test-fail-wait",
    quote:
      "You must wait at least one week before you may take the " +
      "test again.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Road Test (page 15)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=15",
  },
  {
    key: "upgrade-six-months",
    quote:
      "You must have your driver's licence upgraded within 6 " +
      "months of passing the road test. Failure to do so will " +
      "result in you having to complete the road test again.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Road Test (page 16)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=16",
  },
  {
    key: "class5n-two-years",
    quote:
      "Once you pass the road test, you leave the learner's stage " +
      "and advance to the newly licensed stage.You remain in this " +
      "stage for at least two full years.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Newly Licensed Drivers (page 16)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=16",
  },
  {
    key: "class5n-passengers",
    quote:
      "2 Passengers:You may transport only one passenger in the " +
      "front seat and only as many rear seat passengers as there " +
      "are seat belts.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Newly Licensed Drivers - Restrictions (page 16)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=16",
  },
  {
    key: "class5n-curfew",
    quote:
      "3 Curfew:You cannot drive between midnight and 5:00 am " +
      "unless you meet one of the following conditions:",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Newly Licensed Drivers - Restrictions (page 16)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=16",
  },
  {
    key: "class5n-curfew-exception",
    quote:
      "You are accompanied by an experienced driver who has held " +
      "a Class 5 licence for at least two years and is not still " +
      "in the GDL system.The experienced driver must be in the " +
      "front seat.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Newly Licensed Drivers - Restrictions (page 16)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=16",
  },
  {
    key: "class5n-curfew-exemption",
    quote:
      "If you are required to drive to and from work between " +
      "midnight and 5:00 am, you must apply for an exemption from " +
      "the nighttime driving restriction.There is a fee for this " +
      "exemption.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Exemption from nighttime driving curfew (page 17)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=17",
  },
  {
    key: "class5n-no-upgrade",
    quote:
      "You cannot apply to upgrade to a higher class of licence " +
      "(1-4) while in the newly licensed stage.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - No upgrade while in GDL (page 17)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=17",
  },
  {
    key: "class5n-six-points",
    quote:
      "If you accumulate six points, then your driving privileges " +
      "will be suspended for six months.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Demerit points and suspension (page 17)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=17",
  },
  {
    key: "class5n-highways",
    quote:
      "As a newly licensed driver participating in GDL, can I " +
      "drive on 100-series highways? Yes.There is no restriction " +
      "on which highways you may use.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Commonly Asked Questions (page 20)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=20",
  },
  {
    key: "learner-supervisor-seat",
    quote:
      "The licensed driver must be seated in the front passenger " +
      "seat and no other passengers can be in the vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Commonly Asked Questions (page 20)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=20",
  },
  {
    key: "learner-no-motorcycle",
    quote:
      "It is illegal for a licensed learner to drive a motorcycle " +
      "or a farm tractor on a public road except when being " +
      "examined by an examiner.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Commonly Asked Questions (page 20)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=20",
  },
  {
    key: "visitor-90-days",
    quote:
      "can drive in this province for up to 90 days without " +
      "getting a Nova Scotia driver's licence, on two conditions: " +
      "(1) you must have a valid driver's licence from another " +
      "jurisdiction (province, state, country, etc.), and (2) you " +
      "must be at least 16 years old.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Visitors (page 4)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=4",
  },
  {
    key: "renew-five-years",
    quote:
      "You must renew your driver's licence every five years. You " +
      "are responsible for making sure that this is done.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Renewing Your Licence (page 23)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=23",
  },
  {
    key: "demerit-two-years",
    quote:
      "These points remain on your driver's record for two years " +
      "from the date of conviction.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - By accumulating too many demerit points (page 27)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=27",
  },
  {
    key: "demerit-no-deduction-novice",
    quote:
      "Newly licensed drivers (Class 5N) and holders of Class 7 " +
      "or 8 licences are not eligible for point deduction.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Removing demerit points from your driving record (page 31)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=31",
  },
  {
    key: "probation-licence",
    quote:
      "The probationary licence will last for one year from your " +
      "date of application. If during the life of the " +
      "probationary licence you receive three new demerit points, " +
      "then your licence will be suspended for a further six " +
      "months.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Probationary licence (page 31)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=31",
  },
  {
    key: "revoke-fail-to-stop",
    quote:
      "failing to stop at the scene of a collision under the " +
      "Criminal Code of Canada",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Mandatory revocation (page 24)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=24",
  },
  {
    key: "suspend-lend-licence",
    quote:
      "Your licence may also be suspended if you lend your " +
      "licence",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Suspension without conviction (page 26)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=26",
  },
  {
    key: "class7-supervisor-class",
    quote:
      "a learner's licence is valid only 16 with if the learner " +
      "is accompanied by parental an experienced driver (2 years " +
      "approval experience and not in the GDL program) who is a " +
      "holder of a Class 1, 2, 3, 4, or 5 valid driver's licence " +
      "for the type",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Classes of Driver's Licences (page 35)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=35",
  },
  {
    key: "signal-green",
    quote:
      "A green signal light means that, when it is safe, you may " +
      "go unless otherwise directed by a traffic sign or a peace " +
      "officer.You must yield the right of way to pedestrians in " +
      "the crosswalk, including persons in wheelchairs.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Traffic signal lights (page 39)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=3",
  },
  {
    key: "signal-green-left",
    quote:
      "For vehicles turning left at a green signal light, you " +
      "must yield the right of way to oncoming vehicles and any " +
      "pedestrians that may be in your path.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Traffic signal lights (page 39)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=3",
  },
  {
    key: "signal-amber",
    quote:
      "A yellow or amber signal light means that you must stop " +
      "before entering the intersection, if you can stop safely.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Traffic signal lights (page 39)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=3",
  },
  {
    key: "signal-red",
    quote:
      "A red signal light means that all traffic facing this " +
      "signal must stop at the place marked or at the nearest " +
      "side of the crosswalk.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Traffic signal lights (page 39)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=3",
  },
  {
    key: "signal-dead",
    quote:
      "If the traffic signal lights are not working, treat the " +
      "intersection as a multi-stop. Come to a full stop, then " +
      "proceed when you have the right of way and it is safe to " +
      "do so.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Traffic signal lights (page 39)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=3",
  },
  {
    key: "signal-amber-tip",
    quote:
      "Stop for a yellow signal unless you are too close to the " +
      "intersection to stop safely. In that case, drive " +
      "cautiously through the intersection.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Tips (page 40)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=4",
  },
  {
    key: "signal-never-beat",
    quote:
      "Never speed up for a yellow signal to \"beat\" the red " +
      "signal.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Tips (page 40)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=4",
  },
  {
    key: "signal-right-on-red",
    quote:
      "Unless there is a sign showing \"no turn on red,\" you may " +
      "turn right on red after stopping and making sure that you " +
      "can turn safely.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Tips (page 40)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=4",
  },
  {
    key: "signal-left-on-red",
    quote:
      "It is illegal to make a left turn on a red light, except " +
      "for left turns at a red light from a one-way street to " +
      "another one-way street.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Tips (page 40)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=4",
  },
  {
    key: "signal-green-arrow",
    quote:
      "A green arrow means that you can turn in the direction of " +
      "the arrow and proceed through the intersection.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Arrow signals (page 40)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=4",
  },
  {
    key: "signal-flashing-red",
    quote:
      "The flashing red signal has the same meaning as the stop " +
      "sign: Stop and do not go until you can enter the " +
      "intersection without interfering with approaching traffic.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Flashing signals (page 40)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=4",
  },
  {
    key: "signal-flashing-amber",
    quote:
      "The flashing yellow or amber signal has the same meaning " +
      "as a warning sign: Slow down and proceed with caution.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Flashing signals (page 40)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=4",
  },
  {
    key: "signal-flashing-green",
    quote:
      "The flashing green signal means that facing traffic may " +
      "turn left, go straight ahead, or turn right.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Flashing signals (page 41)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=5",
  },
  {
    key: "signal-lane-control",
    quote:
      "Never drive in a lane under a red X signal, regardless of " +
      "any other signs or signals.You may drive in lanes " +
      "underneath a green signal, but you must obey all other " +
      "signs and signals.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Lane control signals (page 41)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=5",
  },
  {
    key: "crossing-guard",
    quote:
      "They signal drivers to stop by holding up a stop sign " +
      "(paddle) facing the vehicle. Drivers must obey crossing " +
      "guards appointed and employed for this purpose. Failure to " +
      "do so could mean demerit points on your driving record.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Crosswalk guards (page 42)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=6",
  },
  {
    key: "intersection-def",
    quote:
      "An intersection is any place where two or more roads meet " +
      "or cross each other, marked and unmarked.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Right of way (page 42)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=6",
  },
  {
    key: "unmarked-crosswalk",
    quote:
      "Every intersection has a crosswalk. Many are unmarked. " +
      "Drivers must yield to pedestrians at all intersections, " +
      "whether crosswalks are marked or unmarked.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Unmarked crosswalks (page 42)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=6",
  },
  {
    key: "ped-no-signals",
    quote:
      "At intersections without traffic signals, pedestrians have " +
      "the right of way if they are in marked crosswalks or in " +
      "unmarked crosswalks formed by imaginary lines extending " +
      "across the streets.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Right of way (page 43)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=7",
  },
  {
    key: "ped-green-priority",
    quote:
      "When crossing with a green signal, pedestrians have the " +
      "right of way over all vehicles, including those turning " +
      "across the paths of the pedestrians.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Right of way (page 43)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=7",
  },
  {
    key: "ped-finish-crossing",
    quote:
      "If a traffic signal changes to yellow or red while a " +
      "pedestrian remains in the street, you must allow the " +
      "pedestrian to complete the crossing safely.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Right of way (page 43)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=7",
  },
  {
    key: "row-already-in",
    quote:
      "The vehicle already in the intersection has the right of " +
      "way ahead of any car that has not yet entered the " +
      "intersection.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Right of way (page 44)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=8",
  },
  {
    key: "row-left-turn-yields",
    quote:
      "If one driver is going straight while the other wants to " +
      "turn left, the driver who wants to turn left must yield " +
      "the right of way and wait until the turn can be made " +
      "safely.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Right of way (page 44)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=8",
  },
  {
    key: "row-car-to-left",
    quote:
      "When two or more vehicles reach an intersection at the " +
      "same time, the car to the left must yield the right of " +
      "way.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Right of way (page 44)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=8",
  },
  {
    key: "no-pass-stopped-at-crosswalk",
    quote:
      "Do not pass any vehicle that is stopped at a crosswalk to " +
      "allow a pedestrian to cross the street.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Right of way (page 44)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=8",
  },
  {
    key: "no-lane-change-in-intersection",
    quote:
      "Make a proper lane change before entering the " +
      "intersection. Never change lanes while you are moving " +
      "through an intersection.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Tips (page 44)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=8",
  },
  {
    key: "left-turn-wheels-straight",
    quote:
      "When making a left turn, do not turn your wheels to the " +
      "left until you are sure you can complete the turn. A " +
      "collision could push your vehicle into oncoming traffic. " +
      "Keep your wheels straight.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Tips (page 44)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=8",
  },
  {
    key: "driveway-yield",
    quote:
      "When leaving a private driveway or parking lot, stop and " +
      "yield the right of way to all other vehicles and " +
      "pedestrians.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Right of way (page 45)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=9",
  },
  {
    key: "emerg-right-of-way",
    quote:
      "Police cars, ambulances, and fire department vehicles with " +
      "flashing lights and sirens have the right of way.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Emergency vehicles (page 45)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=9",
  },
  {
    key: "emerg-pull-right",
    quote:
      "As the emergency vehicle approaches from ahead or behind, " +
      "move to the right edge or curb of the road and stop " +
      "completely.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Emergency vehicles (page 45)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=9",
  },
  {
    key: "emerg-remain-stopped",
    quote:
      "Remain stopped until the emergency vehicle has passed, or " +
      "until you are directed to move by a peace officer.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Emergency vehicles (page 45)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=9",
  },
  {
    key: "emerg-150-follow",
    quote:
      "Never follow an emergency fire vehicle within 150 metres.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Emergency vehicles (page 45)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=9",
  },
  {
    key: "emerg-150-park",
    quote:
      "Never drive or park within 150 metres of an emergency " +
      "vehicle that has stopped to investigate a collision or to " +
      "give assistance.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Emergency vehicles (page 45)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=9",
  },
  {
    key: "emerg-fire-hose",
    quote:
      "Never drive a motor vehicle over a fire hose unless " +
      "instructed to do so by a police officer or a firefighter.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Emergency vehicles (page 45)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=9",
  },
  {
    key: "emerg-slow-60",
    quote:
      "If you see an emergency vehicle pulled over with its " +
      "lights flashing, slow down to 60 km/h or obey the speed " +
      "limit if it's lower than 60 km/h.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Important Graduated Driver Licence Changes - Emergency vehicles (page None)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-1_intro.pdf#page=8",
  },
  {
    key: "emerg-move-over",
    quote:
      "If you're on a road with 2 or more lanes in your " +
      "direction, you must also move into another lane farther " +
      "away from the stopped vehicle if you can do so safely.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Important Graduated Driver Licence Changes - Emergency vehicles (page None)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-1_intro.pdf#page=8",
  },
  {
    key: "emerg-median-exception",
    quote:
      "You don't need to slow down or move over if the vehicle is " +
      "on the other side of the median on a divided highway.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Important Graduated Driver Licence Changes - Emergency vehicles (page None)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-1_intro.pdf#page=8",
  },
  {
    key: "emerg-tow-trucks",
    quote:
      "tow trucks that are stopped at the scene of a fire or " +
      "collision or assisting a vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Important Graduated Driver Licence Changes - Types of vehicles (page None)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-1_intro.pdf#page=8",
  },
  {
    key: "emerg-statute-60",
    quote:
      "No person shall drive a vehicle on a highway past an emer " +
      "gency vehicle, that is stopped on the roadway or a " +
      "shoulder adjacent to it and exhib iting a flashing light, " +
      "at a speed in excess of (a) the speed limit but for this " +
      "Section; or (b) sixty kilometres per hour, whichever is " +
      "less.",
    source:
      "Motor Vehicle Act, R.S.N.S. 1989, c. 293 (Nova Scotia House of Assembly, consolidated to May 1, 2026)",
    section: "Section 106E - Speed limit when passing emergency vehicle (PDF page 80)",
    url: "https://nslegislature.ca/sites/default/files/legc/statutes/motor%20vehicle.pdf#page=80",
  },
  {
    key: "transit-bus-yield",
    quote:
      "When a stopped transit bus is signalling its intent to " +
      "re-enter the flow of traffic, yield the right of way if " +
      "approaching the bus from the rear to allow it to move back " +
      "into traffic.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Important Graduated Driver Licence Changes - Yield to transit buses (page None)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-1_intro.pdf#page=9",
  },
  {
    key: "transit-bus-60",
    quote:
      "You must yield whenever the posted speed limit is 60 km/h " +
      "or less and it is safe to do so. This rule does not apply " +
      "to school buses.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Important Graduated Driver Licence Changes - Yield to transit buses (page None)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-1_intro.pdf#page=9",
  },
  {
    key: "drive-right",
    quote:
      "Drivers must drive on the right side of the road except " +
      "when passing, turning left, or avoiding an obstruction.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Driving on the right (page 46)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=10",
  },
  {
    key: "slow-keep-right",
    quote:
      "Slow-moving traffic must drive as closely as possible to " +
      "the right edge or curb of the highway unless it is not " +
      "practical to do so.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Driving on the right (page 46)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=10",
  },
  {
    key: "left-lane-camping",
    quote:
      "Driving at the speed limit doesn't entitle you to \"camp\" " +
      "in the left lane which means to stay in the lane " +
      "indefinitely.The left lane is a transition lane designed " +
      "for passing.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Driving on the right (page 46)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=10",
  },
  {
    key: "stopping-80",
    quote:
      "Even in ideal conditions, if you are travelling at 80 " +
      "km/h, your vehicle requires more than 140 metres (460 " +
      "feet) to stop completely.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Stopping distances (page 47)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=11",
  },
  {
    key: "driving-too-slowly",
    quote:
      "You should not drive your vehicle at such a slow speed as " +
      "to block the normal and reasonable flow of traffic.A slow " +
      "driver must stop where it is safe to do so and allow " +
      "blocked traffic to pass.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Driving too slowly (page 48)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=12",
  },
  {
    key: "safety-scan",
    quote:
      "A safety scan is your best defence for avoiding hazards " +
      "and other dangers.This means frequently moving your head " +
      "and your eyes to check what is happening all around your " +
      "vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Using the safety scan (page 48)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=12",
  },
  {
    key: "blind-spots",
    quote:
      "However, there is an area on each side that you cannot see " +
      "with your mirrors.These are called blind spots.They are " +
      "usually to the back left and back right of your vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Blind spots (page 48)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=12",
  },
  {
    key: "two-second-rule",
    quote:
      "One way to judge a safe following distance is to use the " +
      "\"two-second rule.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Two-second rule (page 49)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=13",
  },
  {
    key: "two-second-count",
    quote:
      "When the vehicle you are following passes the landmark, " +
      "count \"one thousand and one, one thousand and two.\" 3 When " +
      "your vehicle reaches the landmark stop counting. If you " +
      "reach the landmark before you count \"one thousand and " +
      "two,\" you are following too close to the vehicle in front " +
      "of you.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Two-second rule (page 49)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=13",
  },
  {
    key: "two-second-more",
    quote:
      "Although the two-second rule is sufficient for most " +
      "driving situations, it is important to allow more distance " +
      "on slippery roads or when your visibility is reduced by " +
      "fog, rain, snow, or the glare of the sun, or when " +
      "following large commercial vehicles that block your view " +
      "of the road ahead.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Two-second rule (page 49)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=13",
  },
  {
    key: "speed-default-80",
    quote:
      "Unless otherwise posted, the maximum speed permitted on " +
      "any highway in Nova Scotia is 80 km/h. In business and " +
      "residential districts the speed limit is 50 km/h.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Choosing a safe speed (page 50)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=14",
  },
  {
    key: "speed-reasonable",
    quote:
      "Despite posted speed limits, you must drive at a speed and " +
      "in a manner that will not endanger the life, limb, or " +
      "property of others.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Choosing a safe speed (page 50)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=14",
  },
  {
    key: "speed-50-list",
    quote:
      "when passing a church while the congregation is entering " +
      "or leaving the church",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Choosing a safe speed (page 51)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=15",
  },
  {
    key: "speed-50-railway",
    quote:
      "when approaching within 30 metres of a railway crossing",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Choosing a safe speed (page 51)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=15",
  },
  {
    key: "speed-50-obstructed",
    quote:
      "within 15 metres of an intersection where your view is " +
      "reduced to less than 60 metres in either direction along " +
      "any intersecting highway.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Choosing a safe speed (page 51)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=15",
  },
  {
    key: "school-zone-speed",
    quote:
      "When children are present in a school zone, it is an " +
      "offence to drive in excess of 30 km/h in areas where the " +
      "approaching speed limit is 50km/h, or 50km/h where the " +
      "approaching speed limit is higher than 50km/h whatever the " +
      "time of day.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - School zone (page 51)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=15",
  },
  {
    key: "school-zone-sign",
    quote:
      "The school zone sign is five-sided with a fluorescent " +
      "yellow-green background and two school children pedestrian " +
      "symbols in black.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - School zone (page 80)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=4",
  },
  {
    key: "statute-speed-80",
    quote:
      "no person shall drive a motor vehicle at a speed in excess " +
      "of eighty kilometres per hour on any highway at any time.",
    source:
      "Motor Vehicle Act, R.S.N.S. 1989, c. 293 (Nova Scotia House of Assembly, consolidated to May 1, 2026)",
    section: "Section 106 - Maximum speed limit (PDF page 78)",
    url: "https://nslegislature.ca/sites/default/files/legc/statutes/motor%20vehicle.pdf#page=78",
  },
  {
    key: "statute-speed-max-110",
    quote:
      "The Minister or the Provincial Traffic Authority may fix " +
      "rates of speed in excess of eighty kilometres per hour, " +
      "but not in excess of one hundred and ten kilometres per " +
      "hour",
    source:
      "Motor Vehicle Act, R.S.N.S. 1989, c. 293 (Nova Scotia House of Assembly, consolidated to May 1, 2026)",
    section: "Section 106(2) - Maximum speed limit (PDF page 78)",
    url: "https://nslegislature.ca/sites/default/files/legc/statutes/motor%20vehicle.pdf#page=78",
  },
  {
    key: "statute-careful-speed",
    quote:
      "A person operating or driving a vehicle on a highway shall " +
      "operate or drive the same at a careful and prudent rate of " +
      "speed not greater than is reasonable and proper, having " +
      "due regard to the traffic, surface and width of the " +
      "highway and of all other conditions at the time existing",
    source:
      "Motor Vehicle Act, R.S.N.S. 1989, c. 293 (Nova Scotia House of Assembly, consolidated to May 1, 2026)",
    section: "Section 101 - Careful and prudent speed (PDF page 76)",
    url: "https://nslegislature.ca/sites/default/files/legc/statutes/motor%20vehicle.pdf#page=76",
  },
  {
    key: "statute-school-area",
    quote:
      "reduce the speed limit in the school area to R.S., c. 293 " +
      "motor vehicle 75 MAY 1, 2026 (i) thirty kilometres per " +
      "hour, if the speed limit in effect immediately before the " +
      "start of the school area is fifty kilometres per hour, or " +
      "(ii) fifty kilometres per hour, if the speed limit in " +
      "effect immediately before the start of school area is " +
      "greater than fifty kilometres per hour;",
    source:
      "Motor Vehicle Act, R.S.N.S. 1989, c. 293 (Nova Scotia House of Assembly, consolidated to May 1, 2026)",
    section: "Section 103(2) - School area and school bus (PDF page 76)",
    url: "https://nslegislature.ca/sites/default/files/legc/statutes/motor%20vehicle.pdf#page=76",
  },
  {
    key: "curve-never-stop",
    quote:
      "Never stop, park, or make a U-turn in a curve. Since " +
      "curves (and hills) obstruct the view of the road, do not " +
      "pass or back up within a curve.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Curves or sharp turns (page 52)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=16",
  },
  {
    key: "curve-approach",
    quote:
      "reduce your speed so that you enter the curve at a speed " +
      "that will allow you to avoid additional braking",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Curves or sharp turns (page 52)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=16",
  },
  {
    key: "horn-required",
    quote:
      "When a pedestrian or another vehicle may be affected, you " +
      "must sound your horn.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Using your signal lights and horn (page 53)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=17",
  },
  {
    key: "hand-signals-60cm",
    quote:
      "you must use signal lights if any portion of the vehicle, " +
      "or the load on the vehicle, extends more than 60 cm to the " +
      "left of the centre of the vehicle's steering wheel.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Using your signal lights and horn (page 53)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=17",
  },
  {
    key: "signal-no-right-of-way",
    quote:
      "Signalling does not give you the right of way. You must " +
      "make sure the way is clear and safe.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Using your signal lights and horn (page 53)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=17",
  },
  {
    key: "statute-hand-signal-directions",
    quote:
      "to turn left, by extending his hand and arm horizontally " +
      "from the vehicle; (b) to turn right, by extending his hand " +
      "and arm out and upward from the vehicle; (c) to stop or " +
      "decrease speed, by extending his hand and arm out and " +
      "downward from the vehicle",
    source:
      "Motor Vehicle Act, R.S.N.S. 1989, c. 293 (Nova Scotia House of Assembly, consolidated to May 1, 2026)",
    section: "Section 119(3) - Signal required (PDF page 87)",
    url: "https://nslegislature.ca/sites/default/files/legc/statutes/motor%20vehicle.pdf#page=87",
  },
  {
    key: "turn-right-close",
    quote:
      "Stay close to the right-hand edge of the road so that " +
      "another vehicle cannot move between your vehicle and the " +
      "curb.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Turning (page 54)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=18",
  },
  {
    key: "turn-left-yield",
    quote:
      "If you intend to turn left, you must first yield to " +
      "approaching vehicles and then, when the way is clear, " +
      "complete the turn.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Turning (page 54)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=18",
  },
  {
    key: "turn-lane-discipline",
    quote:
      "If there are two turning lanes, stay in the lane that you " +
      "are in from the beginning to the end of the turn.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Turning (page 55)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=19",
  },
  {
    key: "pass-signal-horn",
    quote:
      "You must signal your intention to pass and sound your horn " +
      "before overtaking and passing another vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Overtaking and passing (page 57)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=21",
  },
  {
    key: "pass-being-passed",
    quote:
      "The vehicle being passed must not increase speed until " +
      "completely passed by the overtaking vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Overtaking and passing (page 57)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=21",
  },
  {
    key: "pass-left-return",
    quote:
      "You must pass to the left of the vehicle you are " +
      "overtaking and return to the right when the lane is clear " +
      "and it is safe to do so.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Overtaking and passing (page 57)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=21",
  },
  {
    key: "pass-never-second",
    quote:
      "Whenever there are only two lanes, never follow another " +
      "vehicle that has already begun to pass a slower-moving " +
      "vehicle. Wait for the first vehicle to pass safely and " +
      "then proceed.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Overtaking and passing (page 57)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=21",
  },
  {
    key: "pass-at-night",
    quote:
      "When passing at night, use low-beam headlights until you " +
      "have completed your pass.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Overtaking and passing (page 57)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=21",
  },
  {
    key: "pass-unsafe-places",
    quote:
      "on any curve or hill where you cannot see at least 150 " +
      "metres ahead",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Passing (page 59)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=23",
  },
  {
    key: "pass-double-yellow",
    quote:
      "wherever there is a double solid yellow line",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Passing (page 59)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=23",
  },
  {
    key: "pass-not-safe-if-slow",
    quote:
      "You have not passed safely if the vehicle you have passed " +
      "must slow down to allow you back into your correct lane.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Passing (page 58)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=22",
  },
  {
    key: "pass-do-not-speed",
    quote:
      "Accelerate, but do not exceed the posted speed limit.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Passing (page 58)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=22",
  },
  {
    key: "passed-must-help",
    quote:
      "When you are being passed, you must help the other driver " +
      "to pass. If the driver of the passing car blows the horn, " +
      "move to the right edge of the pavement. Never increase " +
      "your speed.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - When your vehicle is being passed (page 59)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=23",
  },
  {
    key: "pass-on-right",
    quote:
      "In this instance you may pass another vehicle on the right " +
      "if that vehicle is making a left turn.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Passing on the right (page 59)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=23",
  },
  {
    key: "backing-safely",
    quote:
      "Never back up unless you can do so safely.Watch for " +
      "children or objects which may be hidden from view once " +
      "you're sitting behind the wheel.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Backing (page 60)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=24",
  },
  {
    key: "backing-seatbelt",
    quote:
      "You may remove your seat belt to turn your body to see " +
      "properly when backing. Don't forget to fasten your seat " +
      "belt again before moving forward.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Backing (page 60)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=24",
  },
  {
    key: "statute-uturn-150",
    quote:
      "The driver of a vehicle shall not turn the vehicle around " +
      "so as to proceed in the opposite direction upon a curve or " +
      "upon the approach to or near the crest of a grade or at " +
      "any place upon a highway where the view of the vehicle is " +
      "obstructed within a distance of 150 metres along the " +
      "highway in either direction.",
    source:
      "Motor Vehicle Act, R.S.N.S. 1989, c. 293 (Nova Scotia House of Assembly, consolidated to May 1, 2026)",
    section: "Section 120(2) - Backing and turning around (PDF page 87)",
    url: "https://nslegislature.ca/sites/default/files/legc/statutes/motor%20vehicle.pdf#page=87",
  },
  {
    key: "park-24-hours",
    quote:
      "You may not park a vehicle on a street or highway for a " +
      "period longer than 24 hours.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Parking and stopping (page 61)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=25",
  },
  {
    key: "park-unattended",
    quote:
      "Whenever your vehicle is left standing unattended, apply " +
      "the parking brake and turn off the engine.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Parking and stopping (page 61)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=25",
  },
  {
    key: "park-15cm",
    quote:
      "Curbside wheels must be within 15 centimetres of the curb " +
      "or edge of the road.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Parking and stopping (page 61)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=25",
  },
  {
    key: "park-crosswalk-5m",
    quote:
      "within 5 metres of a crosswalk",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Parking and stopping (page 61)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=25",
  },
  {
    key: "park-hydrant-5m",
    quote:
      "within 5 metres of a fire hydrant or driveway entrance to " +
      "a fire station",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Parking and stopping (page 61)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=25",
  },
  {
    key: "park-intersection-75",
    quote:
      "within 7.5 metres of an intersection",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Parking and stopping (page 61)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=25",
  },
  {
    key: "park-beacon-10m",
    quote:
      "within 10 metres of the approach to any official flashing " +
      "beacon, stop sign, yield sign, or traffic control signal " +
      "located at the side of the roadway",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Parking and stopping (page 61)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=25",
  },
  {
    key: "park-railway-15m",
    quote:
      "within 15 metres of the nearest rail of a railway crossing",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Parking and stopping (page 61)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=25",
  },
  {
    key: "park-hill-crest",
    quote:
      "on the crest of a hill or on a curve where the view of an " +
      "approaching driver is obstructed",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Parking and stopping (page 61)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=25",
  },
  {
    key: "park-double",
    quote:
      "on the roadway side of any vehicle stopped.This is called " +
      "double parking",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Parking and stopping (page 61)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=25",
  },
  {
    key: "park-accessible",
    quote:
      "in a space designated for \"Persons with Mobility " +
      "Disability\" unless you have a permit or special plate",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Parking and stopping (page 61)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=25",
  },
  {
    key: "park-hill-wheels",
    quote:
      "For facing downhill with or without a curb, turn your " +
      "wheels to the right.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Parking on a hill (page 64)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=28",
  },
  {
    key: "park-hill-why",
    quote:
      "When parking on a hill or grade, turn the front wheels so " +
      "that if your vehicle rolls away, it will roll into the " +
      "curb and stop.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Parking on a hill (page 64)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=28",
  },
  {
    key: "park-no-curb",
    quote:
      "When parking without a curb, turn your wheels so that the " +
      "vehicle will roll off the highway rather than into " +
      "traffic.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Parking on a hill (page 64)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=28",
  },
  {
    key: "park-angle-out",
    quote:
      "Back out straight all the way until the front end of your " +
      "vehicle is clear of adjacent parked vehicles.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Angle parking (page 63)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=27",
  },
  {
    key: "park-manual-gear",
    quote:
      "For a manual transmission, shift into reverse if parked " +
      "facing downhill or first if parked facing uphill.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Parallel parking (page 62)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=26",
  },
  {
    key: "accessible-permit-mirror",
    quote:
      "You must display the permit on the rearview mirror of the " +
      "vehicle whenever it is parked in a designated zone.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 7 - Vehicle Registration and Insurance - Accessible parking plates and permits (page 172)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter7.pdf#page=8",
  },
  {
    key: "roundabout-yield",
    quote:
      "Vehicles entering the roundabout or rotary must yield to " +
      "traffic in the circle. Drivers in the circle have right of " +
      "way over entering traffic.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Travelling through roundabouts and rotaries (page 64)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=28",
  },
  {
    key: "roundabout-speed",
    quote:
      "Slow down as you approach the intersection; roundabouts " +
      "are designed for speeds of 30-50 km/h.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Travelling through roundabouts and rotaries (page 64)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=28",
  },
  {
    key: "roundabout-direction",
    quote:
      "All vehicles in the roundabout or rotary must travel to " +
      "the right around the central island. Drive around the " +
      "circle in a counterclockwise direction until you come to " +
      "the road or street where you want to exit.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Travelling through roundabouts and rotaries (page 65)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=29",
  },
  {
    key: "roundabout-inside-lane",
    quote:
      "Never exit a roundabout or rotary from an inside lane.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Travelling through roundabouts and rotaries (page 65)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=29",
  },
  {
    key: "statute-roundabout",
    quote:
      "The driver of a vehicle entering a roadway in or around a " +
      "rotary or roundabout shall yield the right of way to " +
      "traffic already on the roadway in the circle and " +
      "approaching so closely to the entering highway as to " +
      "constitute an immediate hazard.",
    source:
      "Motor Vehicle Act, R.S.N.S. 1989, c. 293 (Nova Scotia House of Assembly, consolidated to May 1, 2026)",
    section: "Section 135(1) - Rotary or roundabout (PDF page 94)",
    url: "https://nslegislature.ca/sites/default/files/legc/statutes/motor%20vehicle.pdf#page=94",
  },
  {
    key: "driveway-sidewalk-stop",
    quote:
      "Before emerging from an alley, driveway, or building in a " +
      "business or residential district, you must stop your " +
      "vehicle immediately before driving on the sidewalk or on " +
      "the sidewalk area extending across any alleyway.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Entering and leaving driveways (page 65)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=29",
  },
  {
    key: "highway-acceleration-lane",
    quote:
      "When entering the highway,use the acceleration lane until " +
      "your vehicle's speed matches that of the other traffic, " +
      "and then merge safely.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Tips (page 67)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=31",
  },
  {
    key: "highway-keep-right",
    quote:
      "Keep to the right, and use the left lanes for passing " +
      "only.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Tips (page 67)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=31",
  },
  {
    key: "highway-never-stop-lane",
    quote:
      "Never stop in the traffic lane.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Tips (page 67)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=31",
  },
  {
    key: "highway-exit",
    quote:
      "When leaving the highway, signal your turn well in " +
      "advance, and, without slowing down, enter the deceleration " +
      "lane. Slow down and proceed at the posted ramp speed " +
      "limit.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Tips (page 67)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=31",
  },
  {
    key: "highway-rest-areas",
    quote:
      "Stop at indicated rest areas frequently, preferably at " +
      "least once every 150-200 km.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Tips (page 67)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=31",
  },
  {
    key: "commercial-60m",
    quote:
      "It is illegal for the driver of a commercial motor vehicle " +
      "to follow within 60 metres of another vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Drivers and large commercial vehicles (page 68)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=32",
  },
  {
    key: "bus-amber",
    quote:
      "Amber flashing lights alert you that the bus is about to " +
      "stop. Passing is allowed, but use extra caution and be " +
      "alert for the red flashing lights.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Drivers and school buses (page 68)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=32",
  },
  {
    key: "bus-red",
    quote:
      "Red flashing lights are used when the school bus is " +
      "stopped to pick up or discharge students.The bus must also " +
      "display a mechanical STOP sign with alternately flashing " +
      "red lights.All drivers must halt from behind or in front " +
      "of a school bus when red lights are flashing.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Drivers and school buses (page 68)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=32",
  },
  {
    key: "bus-no-pass",
    quote:
      "Do not pass a school bus with alternating flashing red " +
      "lights at any time or place or from either direction, " +
      "including a divided boulevard.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Drivers and school buses (page 68)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=32",
  },
  {
    key: "bus-hours",
    quote:
      "During the hours that school buses are operating " +
      "(generally 7-9 am and 2-4 pm), drivers should be " +
      "especially careful.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Drivers and school buses (page 68)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=32",
  },
  {
    key: "school-zone-50",
    quote:
      "It is illegal for you to exceed 50 km/h in a school zone " +
      "when children are present, whatever the time or day.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Drivers and school buses (page 69)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=33",
  },
  {
    key: "moto-full-lane",
    quote:
      "The driver of a motorcycle is entitled to a full highway " +
      "lane.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Drivers and motorcycles (page 69)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=33",
  },
  {
    key: "moto-not-seen",
    quote:
      "Most fatal motorcycle crashes involve collisions with " +
      "automobiles. Usually, the vehicle driver did not see the " +
      "motorcyclist.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Drivers and motorcycles (page 69)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=33",
  },
  {
    key: "bike-same-rules",
    quote:
      "Riders of bicycles must obey the same traffic rules and " +
      "regulations that apply to all road users.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Drivers and bicycles (page 69)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=33",
  },
  {
    key: "bike-same-rights",
    quote:
      "According to the Nova Scotia Motor Vehicle Act, bicyclists " +
      "have the same rights and responsibilities as motorists.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Sharing the Road with Bicycles (page 70)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=34",
  },
  {
    key: "bike-intersections",
    quote:
      "Most collisions involving bicyclists and motorists occur " +
      "at intersections.This often happens when a motorist pulls " +
      "out from a stop sign or driveway without yielding, or " +
      "turns across a bicyclist's path.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Preventing crashes (page 70)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=34",
  },
  {
    key: "bike-right-hook",
    quote:
      "This misjudgment causes the motorist to pass and turn " +
      "directly in front of the bicyclist. Scan the side of the " +
      "road for bicyclists, and if it is not safe to pass before " +
      "turning, slow down and move behind the cyclist before " +
      "making the turn.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Common car-bike collisions (page 71)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=35",
  },
  {
    key: "bike-left-cross",
    quote:
      "Motorists should always stop and wait for oncoming " +
      "traffic, including bicycles, to pass before turning.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Common car-bike collisions (page 71)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=35",
  },
  {
    key: "bike-doored",
    quote:
      "When exiting your car, look behind you for approaching " +
      "bicyclists. Don't open your door unless it's safe to do " +
      "so.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Common car-bike collisions (page 71)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=35",
  },
  {
    key: "bike-lights",
    quote:
      "When riding at night, you must use a white front light and " +
      "red rear reflector (a rear-facing flashing red light, like " +
      "an LED, is okay too).",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Safety equipment (page 75)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=39",
  },
  {
    key: "bike-helmet",
    quote:
      "By law, you must use a bicycle helmet when operating a " +
      "bicycle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Helmet Safety (page 75)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=39",
  },
  {
    key: "bike-parked-cars",
    quote:
      "Stay at least one metre from parked cars to avoid opening " +
      "doors.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 2 - Rules of the Road - Cycling strategies (page 73)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter2.pdf#page=37",
  },
  {
    key: "sign-regulatory-def",
    quote:
      "Regulatory signs indicate the laws and regulations " +
      "affecting the use of the highway.You must observe the " +
      "instructions on regulatory signs unless directed otherwise " +
      "by a Peace Officer.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Regulatory Signs (page 80)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=4",
  },
  {
    key: "sign-stop",
    quote:
      "The stop sign is eight-sided with a red background and the " +
      "word \"STOP\" printed in white.The octagonal shape is used " +
      "only for stop signs.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Stop sign (page 80)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=4",
  },
  {
    key: "sign-stop-meaning",
    quote:
      "A stop sign means that you must bring your vehicle to a " +
      "complete stop and be sure the way is clear before " +
      "proceeding.The stop must be completed at the clearly " +
      "marked stop line, or at the nearest crosswalk line.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Stop sign (page 80)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=4",
  },
  {
    key: "sign-stop-no-line",
    quote:
      "If there is no painted crosswalk or stop line, you must " +
      "stop far enough back to allow sufficient room to allow a " +
      "pedestrian to cross safely.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Stop sign (page 80)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=4",
  },
  {
    key: "sign-yield",
    quote:
      "The yield sign is triangular and is red and white.The " +
      "yield sign means that you must reduce speed as your " +
      "vehicle approaches the intersection.You must give the " +
      "right of way, stopping if necessary, to any other traffic " +
      "in, or closely approaching, the intersection.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Yield sign (page 80)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=4",
  },
  {
    key: "sign-warning-shape",
    quote:
      "Most warning signs are diamond-shaped with black lettering " +
      "or symbols on a yellow background.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Warning Signs (page 83)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=7",
  },
  {
    key: "sign-warning-merge",
    quote:
      "The merge sign, for example, indicates an upcoming " +
      "intersection where two separate traffic lanes are about to " +
      "join and merge into one. Drivers approaching from both " +
      "lanes are equally responsible for seeing that traffic " +
      "merges smoothly and safely.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Warning Signs (page 83)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=7",
  },
  {
    key: "sign-guidance",
    quote:
      "Guidance signs are rectangular, usually with a green " +
      "background and white letters.They provide information and " +
      "directions, including route numbers and distances.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Guidance Signs (page 83)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=7",
  },
  {
    key: "sign-other-regulatory",
    quote:
      "The most common regulatory signs are rectangular or square " +
      "with a white background and either black or red lettering.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Other regulatory signs (page 83)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=7",
  },
  {
    key: "sign-green-red-circle",
    quote:
      "For example, two cars in a green circle means that passing " +
      "is permitted, whereas two cars in a red circle with a line " +
      "through it means do not pass.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Other regulatory signs (page 83)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=7",
  },
  {
    key: "sign-circles",
    quote:
      "Signs with a green circle give permission, as indicated",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones (page 79)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=3",
  },
  {
    key: "sign-accessible-parking",
    quote:
      "The accessible parking sign means that the space is " +
      "reserved for persons with mobility disability who have a " +
      "special licence plate or permit.The permit must be hung " +
      "from the rearview mirror.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Other regulatory signs (page 83)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=7",
  },
  {
    key: "sign-crossbuck",
    quote:
      "Railway crossings are marked with a crossbuck sign which " +
      "has a white background with a red reflective border.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Railway crossings (page 81)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=5",
  },
  {
    key: "sign-railway-advance",
    quote:
      "A yellow and black warning sign indicates that you are " +
      "approaching a railway crossing.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Railway crossings (page 81)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=5",
  },
  {
    key: "sign-railway-tracks-count",
    quote:
      "A smaller sign below the crossbuck indicates if there is " +
      "more than one set of tracks.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Railway crossings (page 81)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=5",
  },
  {
    key: "railway-flashing-red",
    quote:
      "When flashing red lights are used with crossbuck signs at " +
      "the railway crossing, you must stop, just as you would " +
      "stop for any flashing red traffic signal, and only proceed " +
      "when it is safe to do so.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Railway crossings (page 81)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=5",
  },
  {
    key: "railway-keep-moving",
    quote:
      "If you happen to be crossing the tracks and the warning " +
      "lights begin flashing or gates start to come down, do not " +
      "stop. Keep moving! The warning signals will allow enough " +
      "time for you to finish driving through the crossing before " +
      "the train arrives.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Railway crossings (page 82)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=6",
  },
  {
    key: "railway-second-train",
    quote:
      "Do not move immediately after the train has passed. First " +
      "check to make sure that there isn't another train " +
      "approaching.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Railway crossings (page 81)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=5",
  },
  {
    key: "railway-stalled",
    quote:
      "Immediately move everyone out of the vehicle and well away " +
      "from the tracks and the vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Railway crossings (page 82)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=6",
  },
  {
    key: "railway-stopping-distance",
    quote:
      "Some trains require more than a kilometre for stopping " +
      "distance. Remember, trains cannot stop quickly, but your " +
      "vehicle can.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Railway crossings (page 82)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=6",
  },
  {
    key: "marking-colours",
    quote:
      "Yellow lines separate travel lanes moving in opposite " +
      "directions. White lines separate travel lanes moving in " +
      "the same direction.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Rules about solid and broken lines (page 84)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=8",
  },
  {
    key: "marking-broken-yellow",
    quote:
      "A yellow dotted or broken line is used as the centre line " +
      "on a two-lane, two-way road where passing with care is " +
      "permitted in both directions.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Rules about solid and broken lines (page 84)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=8",
  },
  {
    key: "marking-double-solid",
    quote:
      "When the centre line consists of continuous double solid " +
      "yellow lines, you cannot cross them to pass in either " +
      "direction.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Rules about solid and broken lines (page 84)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=8",
  },
  {
    key: "marking-broken-your-side",
    quote:
      "On a two-lane road, passing with care is permitted if the " +
      "broken yellow line is on your side of the centreline " +
      "markings.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Rules about solid and broken lines (page 84)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=8",
  },
  {
    key: "marking-edge-lines",
    quote:
      "Single solid white lines are used as right-edge lines " +
      "along the roadway and for guiding traffic travelling in " +
      "the same direction. Single solid yellow lines are used as " +
      "left-edge lines on divided highways. If you see the " +
      "reverse, you are travelling in the wrong direction.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Pavement Markings (page 85)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=9",
  },
  {
    key: "marking-single-yellow",
    quote:
      "A single solid yellow line marking the centre of a highway " +
      "permits passing in either direction when traffic, sight " +
      "distance, and other conditions are ideal.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Pavement Markings (page 85)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=9",
  },
  {
    key: "marking-two-way-left",
    quote:
      "On certain multi-lane highways, the centre lane is " +
      "reserved exclusively as a two-way-left-turn lane.This " +
      "means that traffic travelling in both directions share the " +
      "lane when making left turns. Never use this lane to pass " +
      "or overtake another vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Two-way-left-turn lanes (page 87)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=11",
  },
  {
    key: "marking-continuity",
    quote:
      "Continuity lines are painted on the highway at entry and " +
      "exit ramps.They indicate the separation between the " +
      "throughlane and the entry or exit ramps. They are wider " +
      "than the regular lane-separation lines.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Continuity lines (page 86)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=10",
  },
  {
    key: "climbing-lane",
    quote:
      "Climbing lanes are designed to allow faster-moving traffic " +
      "to pass slower-moving traffic.All traffic must keep to the " +
      "right unless passing.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Two-laned highway with climbing lane (page 86)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=10",
  },
  {
    key: "climbing-lane-flashers",
    quote:
      "Vehicles travelling at less than 70 km/h must use four-way " +
      "flashers when indicated by a posted sign on the right hand " +
      "side of the road.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Two-laned highway with climbing lane (page 86)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=10",
  },
  {
    key: "sign-max-speed-tab",
    quote:
      "Maximum speed limit. Speed signs indicate the maximum " +
      "speed allowable under ideal conditions: Reduce your speed " +
      "when poor conditions exist or visibility is restricted",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Examples of Signs and Their Meanings (page 90)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=14",
  },
  {
    key: "sign-no-right-on-red",
    quote:
      "No right turn on red signal. Wait for green light before " +
      "making a right turn",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Examples of Signs and Their Meanings (page 89)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=13",
  },
  {
    key: "sign-hazard-marker",
    quote:
      "If the black lines are sloped to the right, drive to the " +
      "right of the sign",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Examples of Signs and Their Meanings (page 90)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=14",
  },
  {
    key: "sign-playground",
    quote:
      "You are approaching a playground: Reduce speed, watch for " +
      "children",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Crosswalk signs (page 88)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=12",
  },
  {
    key: "sign-chevron",
    quote:
      "Chevron (arrow) signs are posted in groups to guide " +
      "drivers around sharp curves in the road",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Lane arrows (page 93)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=17",
  },
  {
    key: "sign-checkerboard",
    quote:
      "Sharp turn or bend in the roadway ahead. Checkerboard " +
      "design is a warning to slow down; the arrow indicates the " +
      "direction of the roadway",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Warning signs (page 92)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=16",
  },
  {
    key: "sign-divided-ends",
    quote:
      "Divided highway ends. Two-way traffic beyond this section " +
      "of the highway; often followed by two-way traffic sign to " +
      "reinforce the message",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Warning signs (page 91)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=15",
  },
  {
    key: "sign-hidden-intersection",
    quote:
      "Hidden intersection ahead. Drivers on the side of road at " +
      "the intersection ahead don't have a clear view of " +
      "approaching traffic: Use caution and be prepared to slow " +
      "down",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Warning signs (page 91)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=15",
  },
  {
    key: "sign-narrow-structure",
    quote:
      "Narrow structure ahead. Indicates a structure such as a " +
      "road, bridge, culvert, underpass, overpass, or similar " +
      "structure having a clear road width less than the width of " +
      "the approach road",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Warning signs (page 92)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=16",
  },
  {
    key: "sign-100-series",
    quote:
      "Highway 102. Provincial highway with controlled access; " +
      "also referred to as 100-series highway",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Guide signs (page 94)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=18",
  },
  {
    key: "sign-deface",
    quote:
      "Remember: it is an offence to deface, destroy, or remove " +
      "traffic signs or signals.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones (page 103)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=27",
  },
  {
    key: "work-orange",
    quote:
      "Work zones are usually marked with orange warning signs. " +
      "The orange signs with messages in black letters identify " +
      "work zones and direct drivers as they travel through the " +
      "work zone.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Construction or Work Zones (page 94)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=18",
  },
  {
    key: "work-biggest-hazard",
    quote:
      "The biggest hazard is speed variations between vehicles.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Construction or Work Zones (page 95)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=19",
  },
  {
    key: "work-speed",
    quote:
      "Travel no more than the speed limit.Travelling at a speed " +
      "different from other vehicles causes the most accidents in " +
      "work zones.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Travelling safely through a work zone (page 95)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=19",
  },
  {
    key: "work-merge-early",
    quote:
      "Merge as soon as safely possible.A common mistake is to " +
      "approach the merge point at too high a speed in the lane " +
      "to be closed, then to push into the other lane at the last " +
      "moment.This causes collisions.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Lane closures (page 96)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=20",
  },
  {
    key: "work-human-activity",
    quote:
      "Human activity signs are those with a symbol of a person. " +
      "They are only used when the workplace is active-people are " +
      "working and at risk of being struck.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Work zone signs (page 97)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=21",
  },
  {
    key: "work-do-not-pass",
    quote:
      "Do Not Pass is used to create an orderly flow of traffic " +
      "before a merge point or to prevent passing at other " +
      "locations where it is unsafe. Obeying this sign at merge " +
      "points makes work zones safer. Disobeying this regulatory " +
      "sign is an offence that warrants a ticket.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Specific Signs (page 100)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=24",
  },
  {
    key: "work-two-arrows",
    quote:
      "When two arrow heads are displayed at the same time it is " +
      "safe to pass on either side of the Flashing Light Unit.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones - Human Activity Signs (page 102)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=26",
  },
  {
    key: "work-caution-mode",
    quote:
      "The Flashing Light Unit in caution mode does not indicate " +
      "that it is safe to pass. Drivers must evaluate the " +
      "situation and make a decision to pass based on conditions " +
      "present in the work zone.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 3 - Signs, Pavement Markings, and Work Zones (page 103)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter3.pdf#page=27",
  },
  {
    key: "inspection-annual",
    quote:
      "All motor vehicles registered in Nova Scotia must be " +
      "inspected every year to make sure they meet safety " +
      "standards.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Maintaining your vehicle (page 107)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=3",
  },
  {
    key: "unfit-illegal",
    quote:
      "Remember, it is illegal to operate a vehicle in an unfit " +
      "or dangerous condition.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Maintaining your vehicle (page 108)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=4",
  },
  {
    key: "tire-tread",
    quote:
      "tread depth of at least 1.5 millimetres",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Tires (page 109)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=5",
  },
  {
    key: "studded-tires",
    quote:
      "Studded tires are legal in Nova Scotia between October 15 " +
      "and April 30 only.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Tires (page 109)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=5",
  },
  {
    key: "headlights-when",
    quote:
      "Headlights must be used during the period beginning half " +
      "an hour after sunset to half an hour before sunrise.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Lighting equipment (page 112)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=8",
  },
  {
    key: "headlights-visibility",
    quote:
      "Lights are also required any time when visibility is " +
      "limited by fog, rain, snow, or other atmospheric " +
      "conditions and when there is not enough light on the " +
      "highway to see a person 300 metres ahead.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Lighting equipment (page 112)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=8",
  },
  {
    key: "headlights-not-parking",
    quote:
      "During times when lights are required, it is illegal to " +
      "use parking lights or daytime running lights instead of " +
      "headlights.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Lighting equipment (page 112)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=8",
  },
  {
    key: "brake-lights-100m",
    quote:
      "The brake lights must be plainly visible in normal " +
      "sunlight from a distance of 100 metres.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Lighting equipment (page 112)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=8",
  },
  {
    key: "plate-light",
    quote:
      "The number plate must be readable from a distance of 15 " +
      "metres.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Lighting equipment (page 112)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=8",
  },
  {
    key: "signal-lights-when",
    quote:
      "Signal lights or turn indicators are required to signal an " +
      "intention to start from a parked position, to turn at an " +
      "intersection (whether you are in a marked lane or not), to " +
      "stop from a moving position, or to change lanes.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Lighting equipment (page 113)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=9",
  },
  {
    key: "special-lights-blue",
    quote:
      "A flashing blue light can be used only on a police vehicle " +
      "or a vehicle being used by a conservation officer.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Special lights (page 114)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=10",
  },
  {
    key: "special-lights-red",
    quote:
      "A flashing red light visible from the front may be used " +
      "only on the following vehicles: an ambulance",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Special lights (page 114)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=10",
  },
  {
    key: "horn-60m",
    quote:
      "Every motor vehicle must be equipped with a horn in good " +
      "working order that can be heard at a distance of 60 " +
      "metres.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Other vehicle equipment (page 114)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=10",
  },
  {
    key: "horn-not-unnecessary",
    quote:
      "You must not use your horn unnecessarily.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Other vehicle equipment (page 114)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=10",
  },
  {
    key: "ornaments",
    quote:
      "A motor vehicle must not have any ornaments or " +
      "decorations, either inside or outside, that obstruct the " +
      "vision or distract the attention of the driver.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Other vehicle equipment (page 114)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=10",
  },
  {
    key: "seatbelt-16",
    quote:
      "Everyone 16 years of age and older, whether a driver or " +
      "passenger, riding in a motor vehicle in Nova Scotia is " +
      "required by law to wear a seat belt if a seating position " +
      "with a seat belt is available to them.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Seat belts, child restraints, and the law (page 117)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=13",
  },
  {
    key: "seatbelt-driver-responsible",
    quote:
      "A driver is responsible for ensuring that all passengers " +
      "under 16 are wearing a seat belt if a seating position " +
      "with a seat belt is available to them.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Seat belts, child restraints, and the law (page 117)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=13",
  },
  {
    key: "child-rear-facing",
    quote:
      "Children from birth to 10 kg (22 lb) must ride in a " +
      "rear-facing infant seat that meets the Canadian Motor " +
      "Vehicle Safety Standard 213.1.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Seat belts, child restraints, and the law (page 117)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=13",
  },
  {
    key: "child-forward-facing",
    quote:
      "Children from 10 kg (22 lb) to 18 kg (40 lb) must ride in " +
      "a forward-facing child seat that meets the Canadian Motor " +
      "Vehicle Safety Standard 213.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Seat belts, child restraints, and the law (page 117)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=13",
  },
  {
    key: "child-booster",
    quote:
      "Children who weigh more than 18 kg (40 lb) but are under " +
      "145 cm (4'9\") tall must ride in a booster seat that meets " +
      "the Canadian Motor Vehicle Safety Standard 213.2, if they " +
      "are younger than 9 years of age unless they have reached " +
      "145 cm (57\") in height.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Seat belts, child restraints, and the law (page 117)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=13",
  },
  {
    key: "airbag-rear-facing",
    quote:
      "A rear-facing child restraint must never be used in a " +
      "seating position where there is an airbag. There is too " +
      "much force exerted on the child restraint by the deploying " +
      "airbag.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Airbags (page 120)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=16",
  },
  {
    key: "airbag-under-12",
    quote:
      "Children under 12 years of age should not be located in a " +
      "seating position where there is an airbag.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Airbags (page 120)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=16",
  },
  {
    key: "airbag-not-replace",
    quote:
      "Airbags do not replace seat belts. They provide additional " +
      "protection in severe frontal collisions.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Airbags (page 120)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=16",
  },
  {
    key: "seatbelt-lap",
    quote:
      "The lap portion of a seat belt should be worn as low on " +
      "the hips as possible, while the shoulder portion should " +
      "not lie across the face or neck.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Correct use of seat belts and child restraints (page 119)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=15",
  },
  {
    key: "passengers-curb",
    quote:
      "You must take on or let off passengers or goods only at " +
      "the curb or side of the road. Never allow a person to " +
      "leave or enter your vehicle while it is moving.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Carrying passengers (page 120)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=16",
  },
  {
    key: "truck-cargo-seats",
    quote:
      "You may carry passengers in trucks in the space intended " +
      "for cargo only if there are seats securely affixed to the " +
      "floor or frame of the vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Carrying passengers (page 120)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=16",
  },
  {
    key: "trailer-no-passengers",
    quote:
      "Never carry passengers in a travel trailer or mobile home " +
      "while it is being towed on a public road.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Carrying passengers (page 120)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=16",
  },
  {
    key: "walk-facing-traffic",
    quote:
      "If you are walking along a highway, walk facing traffic if " +
      "there is no sidewalk.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Walking on the highway (page 120)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=16",
  },
  {
    key: "hitchhiking",
    quote:
      "It is illegal to hitchhike",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Thumbing rides (page 120)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=16",
  },
  {
    key: "hand-position",
    quote:
      "Grip steering wheel firmly at the \"ten-andtwo\" hand " +
      "position (note that the \"nine-and-three\" hand position is " +
      "also acceptable).",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Steering (page 122)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=18",
  },
  {
    key: "head-restraint",
    quote:
      "Adjust your head restraints so that the top edge extends " +
      "seven centimetres (two to three inches) above your eye " +
      "level.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Driving position (page 122)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=18",
  },
  {
    key: "windshield-sticker",
    quote:
      "Only the official inspection sticker is allowed at the " +
      "lower driver's corner of the windshield.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Safe Driving Tips (page 124)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=20",
  },
  {
    key: "distraction-list",
    quote:
      "Do not divert your attention away from the task of " +
      "driving. Eating, drinking, smoking, or using a cell phone " +
      "are examples of activities that cause inattention.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Safe Driving Tips (page 124)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=20",
  },
  {
    key: "abs-braking",
    quote:
      "If your vehicle has ABS, press the brake steadily and " +
      "firmly. Do not pump your brake.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Stopping and braking (page 125)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=21",
  },
  {
    key: "steer-over-40",
    quote:
      "Steering is preferred to braking at speeds over 40 km/h " +
      "because you require less distance to steer around an " +
      "object than to come to a complete stop.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Stopping and braking (page 125)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=21",
  },
  {
    key: "threshold-braking",
    quote:
      "Threshold braking is a technique applying firm, steady " +
      "pressure on the brake pedal. Avoid locking up the wheels.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Stopping and braking (page 125)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=21",
  },
  {
    key: "collision-causes",
    quote:
      "Most highway crashes are caused by driver error. The " +
      "following is a list of the most common causes of highway " +
      "crashes in Nova Scotia, in order of frequency",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Preventing collisions (page 126)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=22",
  },
  {
    key: "defensive-driving",
    quote:
      "The essence of defensive driving is to reduce your own " +
      "driving mistakes and to anticipate the mistakes of others, " +
      "both drivers and pedestrians, and guard against them.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Driving defensively (page 127)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=23",
  },
  {
    key: "slow-moving-sign",
    quote:
      "You must display a slow-moving-vehicle sign at the rear of " +
      "a farm tractor, or the load hauled by the tractor, and any " +
      "other vehicle that cannot maintain a speed over 40 km/h " +
      "under normal conditions. When you see this sign, reduce " +
      "your speed.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Slow-moving vehicles (page 129)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=25",
  },
  {
    key: "load-red-flag",
    quote:
      "During daylight hours, display a red flag at the rear of a " +
      "load whenever the load extends more than one metre beyond " +
      "the rear of the bed or body of a vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Carrying loads (page 130)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=26",
  },
  {
    key: "load-after-dark",
    quote:
      "After dark, which is half an hour after sunset to half an " +
      "hour before sunrise, display an amber or red light that is " +
      "plainly visible for 60 metres from the rear of the load.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Carrying loads (page 130)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=26",
  },
  {
    key: "trailer-one",
    quote:
      "Only commercial vehicles can tow more than one trailer at " +
      "a time.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Towing trailers (page 130)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=26",
  },
  {
    key: "oversize-permit",
    quote:
      "You must have a permit to operate an oversized vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Oversized vehicles (page 131)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=27",
  },
  {
    key: "night-dim-distance",
    quote:
      "By law headlights must be dimmed within 150 metres of an " +
      "approaching vehicle and 60 metres when following a vehicle " +
      "on any highway.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Tips for nighttime driving (page 136)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=4",
  },
  {
    key: "night-city-lowbeam",
    quote:
      "When you drive at night in a city, use lowbeam headlights. " +
      "On the open road, use highbeam headlights unless you are " +
      "approaching or following another vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Tips for nighttime driving (page 136)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=4",
  },
  {
    key: "night-keep-lowbeam",
    quote:
      "Even if the oncoming driver does not dim his or her " +
      "lights, keep your lights on lowbeam.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Reduced Visibility (page 137)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=5",
  },
  {
    key: "night-look-right",
    quote:
      "Look slightly to the right so you will not be looking " +
      "directly into the headlights of oncoming traffic.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Reduced Visibility (page 137)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=5",
  },
  {
    key: "fog-lowbeam",
    quote:
      "Use lowbeams only. The light from your highbeams will " +
      "reflect off the precipitation, making it more difficult to " +
      "see ahead.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Rain, snow, and fog (page 137)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=5",
  },
  {
    key: "rain-four-seconds",
    quote:
      "Increase normal following distance to four or more " +
      "seconds.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Rain (page 139)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=7",
  },
  {
    key: "rain-slippery-multiplier",
    quote:
      "Stopping distances on slippery pavement are from two to " +
      "ten times farther than on dry pavement.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Rain (page 139)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=7",
  },
  {
    key: "rain-first-minutes",
    quote:
      "Roads are most dangerous for the first 10 to 15 minutes " +
      "after the rain has begun to fall, especially if it has not " +
      "rained for a while.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Rain (page 139)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=7",
  },
  {
    key: "hydroplaning",
    quote:
      "In a standard passenger car, partial hydroplaning starts " +
      "at about 55 km/h and increases with speed. At about 85 " +
      "km/h, the tires may be riding totally on top of the water.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Rain (page 139)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=7",
  },
  {
    key: "black-ice-distances",
    quote:
      "Stopping distances for a vehicle travelling at 30 km/h are " +
      "approximately 6 metres on dry pavement, 22 metres on " +
      "packed snow, and 52 metres on black ice.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Snow, frost, and ice (page 140)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=8",
  },
  {
    key: "bridges-freeze",
    quote:
      "Remember that condensation on shaded sections of the " +
      "highway and on bridges and overpasses will freeze before " +
      "the rest of the road.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Snow, frost, and ice (page 140)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=8",
  },
  {
    key: "snow-halve-speed",
    quote:
      "Reduce your speed by more than half for packed snow and " +
      "slow to a crawl on ice.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Snow, frost, and ice (page 140)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=8",
  },
  {
    key: "four-wheel-drive",
    quote:
      "Even if you have four-wheel traction, you cannot stop any " +
      "quicker on a slippery road surface.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - About four-wheel drive (page 141)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=9",
  },
  {
    key: "frost-near-zero",
    quote:
      "Road surfaces are far more slippery near 0°C than at " +
      "colder temperatures of -10° or -20°C.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Tips for dealing with slippery surfaces (page 141)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=9",
  },
  {
    key: "truck-blind-spots",
    quote:
      "However, truckers have serious blind spots immediately in " +
      "front of the cab, on either side of the cab, and up to 200 " +
      "feet in the rear.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - A trucker's blind spots (page 138)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=6",
  },
  {
    key: "truck-mirror-rule",
    quote:
      "Remember, if you can't see the truck driver in the truck's " +
      "side mirror, the trucker can't see you.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - A trucker's blind spots (page 138)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=6",
  },
  {
    key: "brake-failure",
    quote:
      "If your brakes fail, try pumping the brake pedal several " +
      "times to build up enough hydraulic pressure to allow you " +
      "to stop.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Brake failure (page 144)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=12",
  },
  {
    key: "blowout",
    quote:
      "If this happens, do not use the brake. Hold the steering " +
      "wheel firmly. Ease your foot off the accelerator slowly.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Tire blowouts (page 144)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=12",
  },
  {
    key: "stuck-gas-pedal",
    quote:
      "Turn on your four-way emergency flashers, shift to " +
      "neutral, apply firm pressure to the brakes without locking " +
      "them, and pull off the road when it is safe to do so.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Sticking gas pedal (page 145)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=13",
  },
  {
    key: "vehicle-fire-30m",
    quote:
      "Get passengers out of and away from your vehicle. Move at " +
      "least 30 metres away.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Vehicle fires (page 145)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=13",
  },
  {
    key: "vehicle-fire-extinguisher",
    quote:
      "Use a fire extinguisher, not water. Water spreads gasoline " +
      "and oil fires.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Vehicle fires (page 145)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=13",
  },
  {
    key: "wheels-off-pavement",
    quote:
      "Resist the urge to whip the vehicle immediately back onto " +
      "the pavement.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Wheels leaving the pavement (page 146)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=14",
  },
  {
    key: "skid-recovery",
    quote:
      "Take your foot off the gas pedal and allow the vehicle to " +
      "slow down. Use evasive steering to avoid collisions. When " +
      "the vehicle has slowed enough, try threshold braking.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Skids (page 146)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=14",
  },
  {
    key: "power-lines",
    quote:
      "Stay in the vehicle if at all possible. Do not touch the " +
      "ground or anything outside the vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Electrical wires on the roadway (page 147)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=15",
  },
  {
    key: "power-lines-jump",
    quote:
      "you need to jump clear with both feet together, not " +
      "touching any other part of the vehicle. Then shuffle with " +
      "both feet together, away from the scene, until you are at " +
      "least 20 metres, or 65 feet, away.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Electrical wires on the roadway (page 147)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=15",
  },
  {
    key: "snow-plows",
    quote:
      "Do not try to pass between them. This is extremely " +
      "dangerous.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Encountering snow plows (page 148)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=16",
  },
  {
    key: "snow-plow-wing",
    quote:
      "Some snow plows have a wing that extends up to three " +
      "metres to the right of the vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Encountering snow plows (page 148)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=16",
  },
  {
    key: "animals",
    quote:
      "Animal crossing signs warn you where there is a known " +
      "danger of large animals such as moose, deer, or cattle " +
      "stepping out onto the road.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Animals on the road (page 146)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=14",
  },
  {
    key: "water-escape",
    quote:
      "The best escape route is through the windows. If you have " +
      "power windows, roll them down immediately, because water " +
      "will cause a short circuit in the electrical system.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Vehicle plunging into water (page 147)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=15",
  },
  {
    key: "trouble-pull-over",
    quote:
      "At the first sign of trouble, signal and take defensive " +
      "action. Check your mirrors, put on your four-way flashers, " +
      "slow down, and pull over as far off the road as possible. " +
      "Never stop in the driving lanes.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - General highway trouble (page 143)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=11",
  },
  {
    key: "collision-must-stop",
    quote:
      "The driver of a vehicle involved in a collision must stop " +
      "immediately. It is an offence to leave the scene of a " +
      "collision.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Collisions (page 149)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=17",
  },
  {
    key: "collision-report-24h",
    quote:
      "You must file a report within 24 hours with the local " +
      "police, the RCMP, or the Registry of Motor Vehicles if the " +
      "collision involves personal injury, death, or property " +
      "damage of $1000 or more.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Collisions (page 149)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=17",
  },
  {
    key: "collision-exchange",
    quote:
      "you must provide your name, address, and vehicle permit " +
      "for the vehicle you are driving to the person struck, to " +
      "the driver or occupant of the other vehicle, or to a " +
      "witness. You must also give all reasonable assistance to " +
      "any injured person.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Collisions (page 149)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=17",
  },
  {
    key: "collision-unattended",
    quote:
      "If you are involved in a collision that damages an " +
      "unattended vehicle or property, you and every driver " +
      "involved must take reasonable steps to locate and notify " +
      "the owner. If you are unable to locate and notify the " +
      "owner, then you must notify the police within 24 hours.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Collisions (page 150)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=18",
  },
  {
    key: "collision-report-2000",
    quote:
      "property damage of $2,000 or more",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 7 - Vehicle Registration and Insurance - If you are involved in a collision (page 175)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter7.pdf#page=11",
  },
  {
    key: "collision-suspension",
    quote:
      "If the Registry of Motor Vehicles receives a report of a " +
      "collision causing property damage in an apparent amount of " +
      "$50 or more or in bodily injury or death, and there is no " +
      "proof of financial responsibility, your licence and all " +
      "registrations in your name will be suspended.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 5 - Adverse Driving Conditions - Suspension of a licence after a collision (page 150)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter5.pdf#page=18",
  },
  {
    key: "bac-08",
    quote:
      "Legal impairment is defined as having a blood-alcohol " +
      "content (BAC) of .08 per cent or more.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Drinking and driving (page 153)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=3",
  },
  {
    key: "bac-below-08",
    quote:
      "However you can be charged and convicted below this level " +
      "if you show other symptoms of impairment.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Drinking and driving (page 153)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=3",
  },
  {
    key: "alcohol-first-drink",
    quote:
      "This means that alcohol-induced impairment begins with the " +
      "first drink.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Drinking and driving (page None)",
    url: "https://novascotia.ca/sns/rmv/handbook/None.pdf#page=None",
  },
  {
    key: "alcohol-only-time",
    quote:
      "The only way to remove alcohol from your system is through " +
      "time.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Drinking and driving (page 154)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=4",
  },
  {
    key: "alcohol-standard-drink",
    quote:
      "A standard drink is a 340 ml (12 oz.) bottle of beer, 43 " +
      "ml (1.5 oz.) of spirits, or a 142 ml (5 oz.) glass of " +
      "unfortified wine. They all contain the same amount of " +
      "alcohol.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Drinking and driving (page 154)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=4",
  },
  {
    key: "alcohol-no-coffee",
    quote:
      "Black coffee, cold showers, or a jog around the block " +
      "won't remove the alcohol from your system.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Drinking and driving (page 154)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=4",
  },
  {
    key: "alcohol-feel-better",
    quote:
      "As the effects of alcohol start to wear off, you begin to " +
      "feel better or more in control. However, you are probably " +
      "not sober and may still be impaired.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Drinking and driving (page 154)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=4",
  },
  {
    key: "roadside-screening",
    quote:
      "The first is a roadside screening using the SL2 unit; the " +
      "second step, the breathalyzer test.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Getting caught (page 154)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=4",
  },
  {
    key: "roadside-warn",
    quote:
      "If the device reads \"pass,\" you will be permitted to leave " +
      "if there are no other violations. If the device reads " +
      "\"warn,\" meaning it registers a reading between 50 mg/100 " +
      "ml of blood (.05) and 80 mg/100 ml (.08), the police may " +
      "issue 7-day, 15-day, or 30-day suspension of your licence " +
      "based on whether or not you had any other similar " +
      "incidents in the past ten years.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Getting caught (page 154)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=4",
  },
  {
    key: "refuse-breath",
    quote:
      "It is an offence to refuse the breathalyzer or the SL2. If " +
      "you refuse, you will be charged with \"failing to comply\" " +
      "or \"refusing the breathalyzer.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Getting caught (page 154)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=4",
  },
  {
    key: "als-three-months",
    quote:
      "The program provides for an immediate three-month " +
      "suspension of driving privileges for failing the " +
      "breathalyzer or refusing to give a breath sample.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Administrative Licence Suspension Program (page None)",
    url: "https://novascotia.ca/sns/rmv/handbook/None.pdf#page=None",
  },
  {
    key: "als-temporary",
    quote:
      "the police will order a three-month suspension of your " +
      "driving privileges and will issue a sevenday temporary " +
      "licence, only if you have a valid licence.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Administrative Licence Suspension Program (page 156)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=6",
  },
  {
    key: "als-7day",
    quote:
      "any driver with a blood-alcohol content level between 50 " +
      "mg/100 ml (.05) and 80 mg/100 ml (.08) may be removed from " +
      "the road and suspended from driving for a minimum period " +
      "of 7 days.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Administrative Licence Suspension Program (page None)",
    url: "https://novascotia.ca/sns/rmv/handbook/None.pdf#page=None",
  },
  {
    key: "impaired-first-offence",
    quote:
      "revocation (loss) of driving privileges for one year from " +
      "the date of conviction",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - 1st offence (page 157)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=7",
  },
  {
    key: "impaired-second-offence",
    quote:
      "revocation (loss) of driving privileges for three years " +
      "from the date of conviction",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - 2nd offence (page 157)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=7",
  },
  {
    key: "impaired-third-offence",
    quote:
      "revocation (loss) of driving privileges is indefinite " +
      "(minimum of ten years) from the date of conviction",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - 3rd offence (page 158)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=8",
  },
  {
    key: "impaired-fourth-offence",
    quote:
      "permanent revocation (loss), in addition to all of the " +
      "penalties provided under the Criminal Code of Canada",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - 4th offence (page 158)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=8",
  },
  {
    key: "impaired-gdl-restart",
    quote:
      "If your licence is suspended or revoked while you are in " +
      "the Graduated Driver Licensing Program, you will have to " +
      "begin the two-year GDL Program over again after serving " +
      "the suspension.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment (page 157)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=7",
  },
  {
    key: "impaired-criminal-penalty",
    quote:
      "The penalties for a conviction are severe, including a " +
      "fine of up to $2000 and a prison term of up to life for " +
      "impaired driving causing death.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Penalties for impaired driving (page 156)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=6",
  },
  {
    key: "impaired-prohibition",
    quote:
      "you will also be prohibited from operating a motor vehicle " +
      "anywhere in Canada for one year to life.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Penalties for impaired driving (page 156)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=6",
  },
  {
    key: "drug-impairment",
    quote:
      "Impairment can also be caused by prescription and " +
      "non-prescription medications, herbal remedies, illegal " +
      "drugs, or other substances.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Drug impairment (page 155)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=5",
  },
  {
    key: "drug-alcohol-mix",
    quote:
      "Drinking in combination with drugs can be a lethal " +
      "cocktail causing serious impairment.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Drug impairment (page 155)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=5",
  },
  {
    key: "alcohol-assessment",
    quote:
      "If your driver's licence has been suspended or revoked for " +
      "an alcohol-related driving offence, you must attend an " +
      "Alcohol Assessment Program before you can get your driving " +
      "privileges back.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 1 - Your Driver's Licence - Mandatory revocation (page 25)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter1.pdf#page=25",
  },
  {
    key: "fatigue",
    quote:
      "It is unwise and unsafe to drive when you are overtired. " +
      "You could easily experience highway hypnosis, which causes " +
      "you to feel disoriented and drowsy, and you could even " +
      "fall asleep at the wheel.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Driver fatigue (page 163)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=13",
  },
  {
    key: "fatigue-cruise",
    quote:
      "Never use cruise control when you are overtired.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Driver fatigue (page 163)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=13",
  },
  {
    key: "highway-hypnosis",
    quote:
      "The motion of the pavement, the lines, and other vehicles " +
      "may begin to \"hypnotize\" you. You may experience momentary " +
      "lapses of memory.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 4 - Safety - Avoiding highway hypnosis (page 128)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter4.pdf#page=24",
  },
  {
    key: "emotions",
    quote:
      "If you are under emotional or physical stress, avoid " +
      "driving and choose another competent driver.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Emotional and physical stress (page 161)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=11",
  },
  {
    key: "vision-class5",
    quote:
      "Applicants for Class 3, 5, 6, 7, and 8 licences must have " +
      "a visual acuity of not less than 20/40 (6/12) in at least " +
      "one eye and a field of vision of not less than 120 degrees " +
      "with both eyes open and examined together.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 6 - Driving and Impairment - Vision (page 162)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter6.pdf#page=12",
  },
  {
    key: "statute-cellphone",
    quote:
      "It is an offence for a person to use a hand-held cellular " +
      "tele phone or engage in text messaging on any " +
      "communications device while operating a vehicle or an " +
      "electric kick-scooter on a highway or operating a personal " +
      "transporter on a roadway or a sidewalk.",
    source:
      "Motor Vehicle Act, R.S.N.S. 1989, c. 293 (Nova Scotia House of Assembly, consolidated to May 1, 2026)",
    section: "Section 100D - Cellular telephones (PDF page 75)",
    url: "https://nslegislature.ca/sites/default/files/legc/statutes/motor%20vehicle.pdf#page=75",
  },
  {
    key: "statute-cellphone-emergency",
    quote:
      "This Section does not apply to a person who uses a " +
      "hand-held cellular telephone or other communications " +
      "device to report an immediate emer gency situation.",
    source:
      "Motor Vehicle Act, R.S.N.S. 1989, c. 293 (Nova Scotia House of Assembly, consolidated to May 1, 2026)",
    section: "Section 100D(2) - Cellular telephones (PDF page 76)",
    url: "https://nslegislature.ca/sites/default/files/legc/statutes/motor%20vehicle.pdf#page=76",
  },
  {
    key: "reg-four-conditions",
    quote:
      "It must have a motor-vehicle permit, number plate, and " +
      "validation sticker. For passenger vehicles and light " +
      "trucks, you must renew your vehicle permit every two " +
      "years.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 7 - Vehicle Registration and Insurance (page 167)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter7.pdf#page=3",
  },
  {
    key: "reg-third-party",
    quote:
      "It must be insured for third-party liability. You must " +
      "carry proof of insurance or other proof of financial " +
      "responsibility in the vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 7 - Vehicle Registration and Insurance (page 167)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter7.pdf#page=3",
  },
  {
    key: "insurance-minimum",
    quote:
      "The minimum amount of coverage required by law is $500,000 " +
      "in third-party liability, also known as public liability " +
      "and property damage.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 7 - Vehicle Registration and Insurance - Vehicle Insurance and Financial Responsibility (page 174)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter7.pdf#page=10",
  },
  {
    key: "insurance-fine",
    quote:
      "The total fine for a first offence is $1,250, at the time " +
      "of publishing this manual. This fine is subject to change.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 7 - Vehicle Registration and Insurance - Consequences of not obtaining coverage (page 175)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter7.pdf#page=11",
  },
  {
    key: "insurance-carry",
    quote:
      "Simply not carrying proof of financial responsibility in " +
      "your vehicle is an offence under Nova Scotia law.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 7 - Vehicle Registration and Insurance - Consequences of not obtaining coverage (page 175)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter7.pdf#page=11",
  },
  {
    key: "glovebox-documents",
    quote:
      "Valid Motor Vehicle Permit Valid Motor Vehicle Liability " +
      "Insurance Card Motor Vehicle Safety Inspection Report",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 7 - Vehicle Registration and Insurance - Documents to keep in your vehicle's glove compartment (page 176)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter7.pdf#page=12",
  },
  {
    key: "carry-licence",
    quote:
      "Do not forget to carry your driver's licence with you when " +
      "you operate a motor vehicle.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 7 - Vehicle Registration and Insurance - Documents to keep in your vehicle's glove compartment (page 176)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter7.pdf#page=12",
  },
  {
    key: "inspection-fail-10-days",
    quote:
      "You have 10 days from the date of rejection to have the " +
      "defects corrected and the vehicle reinspected without " +
      "paying a second fee for inspection.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 7 - Vehicle Registration and Insurance - The Annual Safety Inspection (page 173)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter7.pdf#page=9",
  },
  {
    key: "new-resident-30-days",
    quote:
      "If you are a new resident of Nova Scotia, you must " +
      "register your vehicle within 30 days of taking up " +
      "residence.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 7 - Vehicle Registration and Insurance - Visitors and new residents (page 169)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter7.pdf#page=5",
  },
  {
    key: "plate-rear",
    quote:
      "The licence plate must be attached to the rear of the " +
      "vehicle (passenger and light trucks) and must display a " +
      "current validation sticker.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 7 - Vehicle Registration and Insurance - Operating a vehicle (page 170)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter7.pdf#page=6",
  },
  {
    key: "permit-carried",
    quote:
      "The original permit must be carried in the vehicle or in " +
      "the immediate possession of the driver at all times when " +
      "the vehicle is being operated on the highway.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 7 - Vehicle Registration and Insurance - Operating a vehicle (page 170)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter7.pdf#page=6",
  },
  {
    key: "temporary-permit",
    quote:
      "Temporary permits are valid for 30 days from the date of " +
      "issue, for a nominal fee.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 7 - Vehicle Registration and Insurance - Temporary permits (page 172)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter7.pdf#page=8",
  },
  {
    key: "no-drive-suspended",
    quote:
      "You must not drive when your licence is cancelled, " +
      "revoked, or suspended.",
    source:
      "Nova Scotia Driver's Handbook (Province of Nova Scotia, reprinted with revisions 2003, 2004, 2005, 2006, 2007, 2013 and 2017)",
    section: "Chapter 7 - Vehicle Registration and Insurance (page 167)",
    url: "https://novascotia.ca/sns/rmv/handbook/DH-Chapter7.pdf#page=3",
  },
  {
    key: "gdl-practice-12-months",
    quote:
      "The minimum practice period is 12 months. The practice " +
      "period can be reduced to a minimum of 9 months if the " +
      "driver completes a recognized driver education or training " +
      "program.",
    source:
      "Registry of Motor Vehicles - Graduated Drivers Licence System (Service Nova Scotia)",
    section: "Passenger Vehicle Drivers - Learner's Licence Phase",
    url: "https://novascotia.ca/sns/rmv/licence/gradlic.asp",
  },
  {
    key: "gdl-suspension-delay",
    quote:
      "Suspensions will delay graduation to the newly licensed " +
      "driver stage by a period of time equal to the minimum " +
      "practice period.",
    source:
      "Registry of Motor Vehicles - Graduated Drivers Licence System (Service Nova Scotia)",
    section: "Passenger Vehicle Drivers - Learner's Licence Phase",
    url: "https://novascotia.ca/sns/rmv/licence/gradlic.asp",
  },
  {
    key: "gdl-learner-conditions",
    quote:
      "No passengers, except a supervising driver who is not " +
      "enrolled in the Graduated Driver Licence system. Zero " +
      "blood alcohol level for the learning driver.",
    source:
      "Registry of Motor Vehicles - Graduated Drivers Licence System (Service Nova Scotia)",
    section: "Passenger Vehicle Drivers - Learner's Licence Phase",
    url: "https://novascotia.ca/sns/rmv/licence/gradlic.asp",
  },
  {
    key: "gdl-newly-two-years",
    quote:
      "Once a road test has been successfully completed, the " +
      "learner becomes a Newly Licensed driver for a minimum of " +
      "two years.",
    source:
      "Registry of Motor Vehicles - Graduated Drivers Licence System (Service Nova Scotia)",
    section: "Passenger Vehicle Drivers - Learner's Licence Phase",
    url: "https://novascotia.ca/sns/rmv/licence/gradlic.asp",
  },
  {
    key: "gdl-newly-conditions",
    quote:
      "Only one front seat passenger and rear seat passengers " +
      "limited to the number of available seat belts. No upgrade " +
      "beyond a Class 5 driver's licence.",
    source:
      "Registry of Motor Vehicles - Graduated Drivers Licence System (Service Nova Scotia)",
    section: "Passenger Vehicle Drivers - Newly Licensed Driver Phase",
    url: "https://novascotia.ca/sns/rmv/licence/gradlic.asp",
  },
  {
    key: "gdl-curfew",
    quote:
      "No driving between midnight and 5:00AM, unless exempted " +
      "from the nightly curfew for employment purposes or the " +
      "newly licenced driver is accompanied by a supervising " +
      "driver.",
    source:
      "Registry of Motor Vehicles - Graduated Drivers Licence System (Service Nova Scotia)",
    section: "Passenger Vehicle Drivers - Newly Licensed Driver Phase",
    url: "https://novascotia.ca/sns/rmv/licence/gradlic.asp",
  },
  {
    key: "gdl-curfew-direct-route",
    quote:
      "The driver must take the most direct route to and from " +
      "work and is not permitted to have any passengers in the " +
      "vehicle.",
    source:
      "Registry of Motor Vehicles - Graduated Drivers Licence System (Service Nova Scotia)",
    section: "Passenger Vehicle Drivers - Newly Licensed Driver Phase",
    url: "https://novascotia.ca/sns/rmv/licence/gradlic.asp",
  },
  {
    key: "gdl-exit-course",
    quote:
      "To graduate from the newly licensed driver stage, the " +
      "driver must successfully complete a 6 hour Defensive " +
      "Driving course or complete a recognized driver training " +
      "course (25 hours theory, 10 hours driving time).",
    source:
      "Registry of Motor Vehicles - Graduated Drivers Licence System (Service Nova Scotia)",
    section: "Passenger Vehicle Drivers - Newly Licensed Driver Phase",
    url: "https://novascotia.ca/sns/rmv/licence/gradlic.asp",
  },
  {
    key: "gdl-no-certificate",
    quote:
      "If a graduation certificate is not provided to the " +
      "Registry of Motor Vehicles, the driver will remain in the " +
      "newly licensed phase indefinitely.",
    source:
      "Registry of Motor Vehicles - Graduated Drivers Licence System (Service Nova Scotia)",
    section: "Passenger Vehicle Drivers - Newly Licensed Driver Phase",
    url: "https://novascotia.ca/sns/rmv/licence/gradlic.asp",
  },
  {
    key: "gdl-restricted-conditions",
    quote:
      "Zero blood alcohol level for the restricted individual. " +
      "The restricted individual cannot be a supervising driver " +
      "for another driver.",
    source:
      "Registry of Motor Vehicles - Graduated Drivers Licence System (Service Nova Scotia)",
    section: "Passenger Vehicle Drivers - Restricted Individual Stage",
    url: "https://novascotia.ca/sns/rmv/licence/gradlic.asp",
  },
  {
    key: "gdl-restricted-exit",
    quote:
      "The driver will remain in the restricted individual stage " +
      "for 2 years. At the end of the two year driving period, " +
      "all restrictions associated with the Graduated Driver " +
      "Licence system are removed and the driver is considered a " +
      "fully experienced driver.",
    source:
      "Registry of Motor Vehicles - Graduated Drivers Licence System (Service Nova Scotia)",
    section: "Passenger Vehicle Drivers - Restricted Individual Stage",
    url: "https://novascotia.ca/sns/rmv/licence/gradlic.asp",
  },
  {
    key: "gdl-three-phases",
    quote:
      "The three phases of Graduated Driver Licence system are: " +
      "The Learner's Licence phase. The Newly Licenced phase. The " +
      "Restricted Individual phase.",
    source:
      "Registry of Motor Vehicles - Graduated Drivers Licence System (Service Nova Scotia)",
    section: "Introduction",
    url: "https://novascotia.ca/sns/rmv/licence/gradlic.asp",
  },
  {
    key: "gdl-applies-any-age",
    quote:
      "any new driver, regardless of age, who applies for a " +
      "Learners licence after October 1, 1994, will operate under " +
      "the graduated system.",
    source:
      "Registry of Motor Vehicles - Graduated Drivers Licence System (Service Nova Scotia)",
    section: "Introduction",
    url: "https://novascotia.ca/sns/rmv/licence/gradlic.asp",
  },
  {
    key: "paal-12-months",
    quote:
      "Before you can take the road test, you must have your " +
      "Learner's Licence for at least 12 months.",
    source:
      "Nova Scotia Permits Directory - Registry of Motor Vehicles - Newly Licensed Driver's Licence (Service Nova Scotia)",
    section: "Application Forms and Process - waiting period",
    url: "https://novascotia.ca/sns/paal/rmv/paal379.asp",
  },
  {
    key: "paal-9-months",
    quote:
      "If you successfully complete an approved Driver Education " +
      "course that includes at least 25 hours of classroom " +
      "teaching and 10 hours of driving with an instructor, the " +
      "minimum waiting period is reduced to 9 months.",
    source:
      "Nova Scotia Permits Directory - Registry of Motor Vehicles - Newly Licensed Driver's Licence (Service Nova Scotia)",
    section: "Application Forms and Process - waiting period",
    url: "https://novascotia.ca/sns/paal/rmv/paal379.asp",
  },
  {
    key: "paal-test-two-parts",
    quote:
      "You have to pass a written test, which has 2 parts: One is " +
      "on traffic and safe driving rules, and the other is on " +
      "Nova Scotia highway signs. Each part has 20 " +
      "multiple-choice questions, and you have to get at least 16 " +
      "right on each part to pass. You have to pass both parts to " +
      "get your licence.",
    source:
      "Nova Scotia Permits Directory - Registry of Motor Vehicles - Learner's (Beginner's) Licence (Service Nova Scotia)",
    section: "Application Forms and Process - Knowledge Tests",
    url: "https://novascotia.ca/sns/paal/RMV/paal378.asp",
  },
  {
    key: "paal-consent-withdraw",
    quote:
      "The parent or guardian who has given their consent can " +
      "change their mind at any time before the licence holder " +
      "turns 18 (even if they have already graduated from their " +
      "Learner's Licence to a Newly Licensed Driver's Licence).. " +
      "To withdraw their consent, the parent or guardian has to " +
      "write (not just phone) the Registrar of Motor Vehicles.",
    source:
      "Nova Scotia Permits Directory - Registry of Motor Vehicles - Learner's (Beginner's) Licence (Service Nova Scotia)",
    section: "Application Forms and Process - Under 18",
    url: "https://novascotia.ca/sns/paal/RMV/paal378.asp",
  },
  {
    key: "amend-school-zone",
    quote:
      "When children are present in a school zone, it is an " +
      "offence to drive in excess of 30 km/h in areas where the " +
      "approaching speed limit is 50km/h, or 50km/h where the " +
      "approaching speed limit is higher than 50km/h whatever the " +
      "time of day.",
    source:
      "Registry of Motor Vehicles - Nova Scotia Driver's Handbook (Service Nova Scotia), amendments to the handbook",
    section: "Amendments to the Driver's Handbook - School zone",
    url: "https://novascotia.ca/sns/rmv/safe/handbook.asp",
  },
  {
    key: "amend-collision-2000",
    quote:
      "The collision report collects information about property " +
      "damage of $2,000 or more bodily injury to, or death of, " +
      "any person resulting from a motor vehicle collision",
    source:
      "Registry of Motor Vehicles - Nova Scotia Driver's Handbook (Service Nova Scotia), amendments to the handbook",
    section: "Amendments to the Driver's Handbook - If you are involved in a collision",
    url: "https://novascotia.ca/sns/rmv/safe/handbook.asp",
  },
  {
    key: "amend-transit-bus",
    quote:
      "Where a transit bus has stopped at a bus stop and is " +
      "signalling its intent to re-enter the flow of traffic on a " +
      "highway, the driver of every other vehicle shall yield the " +
      "right of way to the bus unless the driver cannot yield to " +
      "the bus in safety.",
    source:
      "Registry of Motor Vehicles - Nova Scotia Driver's Handbook (Service Nova Scotia), amendments to the handbook",
    section: "Amendments to the Driver's Handbook - Yield to transit bus",
    url: "https://novascotia.ca/sns/rmv/safe/handbook.asp",
  },
  {
    key: "amend-gdl-2015",
    quote:
      "Effective April 1, 2015, an additional stage has been " +
      "added to the Graduated Driver's Licence system called the " +
      "Restricted Individual stage.",
    source:
      "Registry of Motor Vehicles - Nova Scotia Driver's Handbook (Service Nova Scotia), amendments to the handbook",
    section: "Amendments to the Driver's Handbook - Graduated Driver's Licence System",
    url: "https://novascotia.ca/sns/rmv/safe/handbook.asp",
  },
  {
    key: "handbook-is-basic-law",
    quote:
      "The contents of this handbook explain the basic provisions " +
      "of the law in Nova Scotia using language and terms that " +
      "are easily understood. For the actual expression of the " +
      "law, refer to the Motor Vehicle Act and Regulations.",
    source:
      "Registry of Motor Vehicles - Nova Scotia Driver's Handbook (Service Nova Scotia), amendments to the handbook",
    section: "Registry of Motor Vehicles - Nova Scotia Driver's Handbook",
    url: "https://novascotia.ca/sns/rmv/safe/handbook.asp",
  },
];
