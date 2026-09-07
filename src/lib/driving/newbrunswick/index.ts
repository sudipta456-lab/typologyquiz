import type { Jurisdiction, HandbookExcerpt } from "../types";
import { newbrunswickSets1to3 } from "./sets-1-3";
import { newbrunswickSets4to6 } from "./sets-4-6";
import { newbrunswickExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = newbrunswickExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = ["gnb.ca", "laws.gnb.ca", "snb.ca"];

export const jurisdiction: Jurisdiction = {
  slug: "newbrunswick",
  name: "New Brunswick",
  code: "NB",
  country: "CA",
  countryLabel: "Canada",
  contentDate: "2026-09-07",
  handbookEdition:
    "No printed edition label; the nine part PDFs published on gnb.ca were produced 19 July 2022",
  researchNote: "docs/driving/research/newbrunswick.md",
  licenceName: "Class 7 Level 1 Graduated Licence",
  intro:
    "New Brunswick asks you to pass two written tests, not one. The Road Sign Recognition Exam shows you twenty signs, and three of them - stop, yield and school zone - you have to get right or you fail whatever else you scored. The Rules of the Road exam is twenty multiple-choice questions and needs sixteen. Both can be sat online from home, or in either official language at a Service New Brunswick centre. These six sets work through the Driver's Handbook part by part, keep the signs half loaded the way the real pair of exams does, and flag the places where the 2022 book is now behind the Motor Vehicle Act.",
  officialTest: {
    questionCount: 40,
    passCount: 32,
    passLabel: "16 of 20 on each of the two exams",
    sectionedBy: [
      {
        label: "Road Sign Recognition Exam",
        topics: ["signs"],
        passCount: 16,
      },
      {
        label: "Rules of the Road Non-Commercial Knowledge Exam",
        topics: [
          "signals",
          "rules",
          "rightOfWay",
          "speed",
          "parking",
          "safety",
          "impairment",
          "sharing",
          "emergencies",
          "licensing",
        ],
        passCount: 16,
      },
    ],
    notes: [
      "There are TWO written exams for a Class 7 Level 1 licence and they are scored separately: the Road Sign Recognition Exam and the Rules of the Road Non-Commercial Knowledge Exam. You have to clear both.",
      "The sign exam shows 20 signs. Three of them are compulsory: you must correctly identify stop, yield and school zone, and you may make no more than four errors on the remaining seventeen. Miss one of the three and the rest of your score does not save you.",
      "The rules exam is 20 multiple-choice questions and you need 16 correct. The handbook offers measurements in both metric and imperial, but the exam uses metric only.",
      "Both exams can be taken online. You pay by card, get an access code for each exam, and can save unused codes for later. Fail one and you buy a retest for that exam only - there is no waiting period before you try again.",
      "Passing online does not give you a licence, and it is not instant. You wait a minimum of four business days, then attend any SNB office except Campobello for a vision test with proof of identification, proof of residency, and a completed Parental Consent Form if you are under 18.",
      "Exams can be delivered orally and are available in English and French. Appointments are booked online or through Service New Brunswick Teleservices at 1-888-762-8600.",
      "All test results expire after six months. If you clear the written exams and then let six months pass without finishing the road test and having the licence issued, you redo the expired parts.",
      "The handbook does not publish the fee. It says only that there is a separate fee for the written and road tests plus a fee for issuing the licence, and points you at Service New Brunswick for the amounts.",
    ],
  },
  handbookName: "New Brunswick Driver's Handbook",
  handbookUrl:
    "https://www.gnb.ca/en/topic/driving-transportation/driving-licensing/driver-handbook.html",
  officialInfoUrl:
    "https://www.gnb.ca/en/topic/driving-transportation/driving-licensing/written-road-tests.html",
  localGotchas: [
    "The school-zone speed in the handbook is the OLD one. Page 36 says 50 km/h in an urban district. Section 140.1 of the Motor Vehicle Act was rewritten by 2023, c.7 and now sets 30 km/h in a municipality and 50 km/h in a rural community, regional municipality or rural district, between 7:30 a.m. and 4:00 p.m. on school days. Cities across the province, Saint John among them, post 30. The hours have not changed and neither has the doubled fine - learn the hours cold, and drive to 30 in town whatever the book prints.",
    "The sign exam has three signs you are not allowed to miss. Stop, yield and school zone must all be identified correctly; on the other seventeen you get four errors. A learner who treats it as a flat 16 out of 20 can get sixteen right and still fail.",
    "New Brunswick counts demerits DOWNWARDS for the first four years. A newly licensed driver is credited with four points, gains two more each year to a maximum of ten, and is suspended when the credit reaches zero. Distracted driving alone is five points, so a first-year driver can be suspended by a single ticket - a driver with a full ten-point balance would not be.",
    "Moving over for a stopped emergency or service vehicle means halving the posted limit, not easing off. Section 168.1 says reduce to one-half of the posted maximum, and on a road with two or more lanes on your side you must also change lanes if it is safe. Past a 100 zone that is 50 km/h, which feels far slower than most drivers expect.",
    "The book still tells you to sound your horn before you pass, and to give way when someone sounds theirs at you. Page 68 lists it among the safe-driving rules and page 35 makes the giving-way half a legal duty - the overtaken driver must move right on hearing an audible signal and must not speed up. Almost nobody does the first half on a real New Brunswick road, which is exactly why it turns up on the exam.",
  ],
  sets: [...newbrunswickSets1to3, ...newbrunswickSets4to6].sort(
    (a, b) => a.setNumber - b.setNumber
  ),
};
