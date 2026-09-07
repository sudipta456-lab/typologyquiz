import type { Jurisdiction, HandbookExcerpt } from "../types";
import { novascotiaSets1to3 } from "./sets-1-3";
import { novascotiaSets4to6 } from "./sets-4-6";
import { novascotiaExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = novascotiaExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = ["novascotia.ca", "nslegislature.ca"];

export const jurisdiction: Jurisdiction = {
  slug: "novascotia",
  name: "Nova Scotia",
  code: "NS",
  country: "CA",
  countryLabel: "Canada",
  contentDate: "2026-09-06",
  handbookEdition: "Reprinted with revisions, 2003, 2004, 2005, 2006, 2007, 2013 and 2017",
  researchNote: "docs/driving/research/novascotia.md",
  licenceName: "Learner's Licence (Class 7)",
  intro:
    "Nova Scotia splits the Knowledge Test in two. One part is twenty questions on the rules of the road and safe driving, the other is twenty questions on what the signs mean, and you need sixteen right on each. You can sit it at home on a laptop with the webcam watching, or in person at an Access Nova Scotia office. These six sets work through the Driver's Handbook chapter by chapter, keep the signs half loaded the way the real pair of tests does, and flag every place where the 2017 book has fallen behind the rule the Registry actually enforces.",
  officialTest: {
    questionCount: 40,
    passCount: 32,
    passLabel: "16 of 20 on each of the two parts",
    timeLimitMinutes: 30,
    sectionedBy: [
      {
        label: "Road Sign Recognition Test",
        topics: ["signs"],
        passCount: 16,
      },
      {
        label: "Rules of the Road Test",
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
      "There are TWO parts, scored separately. The Rules of the Road Test asks 20 multiple-choice questions on traffic law and safe driving; the Road Sign Recognition Test asks 20 on what highway signs mean. You need at least 16 correct on each part, and you must clear both.",
      "You have 30 minutes for each part. The fee is $15.03 for the Class 7 Knowledge Test.",
      "The test can be taken online from home in English or French. You need a desktop or laptop and a webcam, which photographs you throughout - phones and tablets are not allowed. You can also sit it in person at a Registry of Motor Vehicles or Access Nova Scotia office.",
      "Fail one part and you retake only that part. Fail both and you retake both. Online there is no waiting period at all; in person you wait until the next day.",
      "Passing does not give you a licence. You still have to attend in person to pass a vision test, produce identification, hand in a parent's or guardian's written consent if you are 16 or 17, pay the fee and have your photo taken.",
      "The handbook says a learner waits six months for the road test, or three with driver training. That has been wrong since 2016. The Registry's own Graduated Drivers Licence System page sets the minimum practice period at 12 months, reduced to 9 months with a recognized driver education or training programme.",
    ],
  },
  handbookName: "Nova Scotia Driver's Handbook",
  handbookUrl: "https://novascotia.ca/sns/rmv/safe/handbook.asp",
  officialInfoUrl:
    "https://www.novascotia.ca/take-driver-knowledge-test-learners-licence-class-7",
  localGotchas: [
    "The book you study from is older than most of the people writing the test, and the Registry has amended it in public rather than reprinting it. The copyright page says 2000, last reprinted 2017. Chapter 1 still says you wait six months for the road test, or three with a driver training course; the Registry's Graduated Drivers Licence System page says 12 months, or 9 with an approved course, and has said so since April 2016. Learn the 12 and the 9. The same page and the front-of-book supplement carry the third GDL stage, the two-year learner's licence, the slow-down-and-move-over rule and the duty to yield to a transit bus, none of which is in the chapter you would naturally read.",
    "You must sound your horn before you pass. Nova Scotia is one of the last places that still writes this as a legal duty - the handbook says the horn signal places the driver you are overtaking under a legal obligation to help you past. Nobody does it on a real road and Nova Scotians joke about it, which is exactly why it turns up on the test.",
    "The school zone speed is a formula, not a number. When children are present the maximum is 30 km/h where the limit before the zone was 50, and 50 km/h where the limit before the zone was higher than 50 - whatever the time of day. Page 69 of the same handbook flattens this into a single 50 km/h, and the Registry's amendments page confirms the 30-or-50 version is the current one. Nova Scotia learners have failed road tests in both directions on this, for going too slow as well as too fast.",
    "Nova Scotia's default limit is 80 km/h, not 50. Section 106 of the Motor Vehicle Act caps every highway at 80 unless a sign says otherwise, and the Minister may only post up to 110. The 50 is a separate list of places - business districts, residential districts, public parks in a city or town, within 30 metres of a railway crossing, past a church as the congregation leaves - not a general urban default you can assume from the buildings around you.",
    "Three GDL stages, and the last one is invisible. After the learner's licence and two years as a Class 5N you become a Restricted Individual, Class 5R or 6R with condition 47, for two more years. You are still at zero blood alcohol and you still cannot supervise a learner. Drivers who think handing in the 5N ends the programme are wrong by two full years.",
    "The handbook has no cellphone rule, because it was written before anyone had one in a car. Section 100D of the Motor Vehicle Act makes using a hand-held phone or texting an offence and it carries four demerit points, which is enough on its own to suspend a learner.",
  ],
  sets: [...novascotiaSets1to3, ...novascotiaSets4to6].sort(
    (a, b) => a.setNumber - b.setNumber
  ),
};
