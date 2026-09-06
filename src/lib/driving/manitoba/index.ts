import type { Jurisdiction, HandbookExcerpt } from "../types";
import { manitobaSets1to3 } from "./sets-1-3";
import { manitobaSets4to6 } from "./sets-4-6";
import { manitobaExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = manitobaExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = [
  "mpi.mb.ca",
  "web2.gov.mb.ca",
  "gov.mb.ca",
  "residents.gov.mb.ca",
];

export const jurisdiction: Jurisdiction = {
  slug: "manitoba",
  name: "Manitoba",
  code: "MB",
  country: "CA",
  countryLabel: "Canada",
  contentDate: "2026-09-06",
  handbookEdition: "DVL0019, 02/02/2026",
  researchNote: "docs/driving/research/manitoba.md",
  licenceName: "Class 5L Learner Stage Licence",
  intro:
    "Manitoba Public Insurance writes the Class 5 knowledge test straight out of its own Driver's Handbook, and the parts that catch people are the numbers - how far back from a railway crossing, how far from a hydrant, how many months in each stage. You get 30 minutes, it is not open book, and a fail means waiting seven days. These six sets work through the handbook end to end and then hand you the ones Manitobans say they got wrong.",
  officialTest: {
    questionCount: 30,
    passCount: 24,
    passLabel: "24 of 30 (80%)",
    timeLimitMinutes: 30,
    notes: [
      "MPI does not publish the question count or the pass mark anywhere on its site. The 30 questions and 24 correct shown here come from Manitobans who have sat it, including one report from 2013 listing every class and one from 2026 by the parent of a Driver Z student, which agree exactly. Treat it as a well-corroborated figure and not an official one.",
      "There is a 30-minute time limit and the test is not open book. Phones and electronic devices are not allowed in the test area.",
      "Tests are by appointment only, on weekdays, booked and paid for through an Autopac agent up to eight weeks ahead.",
      "Fail it and you wait a minimum of seven days before you can sit it again. Only one knowledge test of the same class may be taken per day.",
      "Learners report that the test can end early once you have answered enough questions correctly, and that you may skip a question and come back to it. Neither behaviour is documented by MPI.",
      "The Class 5 knowledge test is offered in English and French and in more than 20 other languages if you say so when you book.",
    ],
  },
  handbookName: "Manitoba Driver's Handbook (Manitoba Public Insurance)",
  handbookUrl: "https://www.mpi.mb.ca/en/PDFs/CompleteHandbook.pdf",
  officialInfoUrl: "https://www.mpi.mb.ca/testing-for-your-class-5-licence/",
  localGotchas: [
    "A Manitoba learner may carry rear-seat passengers up to the number of working seatbelts, and the supervising driver just has to be the only person in the front. Most provinces allow nobody but the supervisor, so families arriving from elsewhere police themselves harder than the law does - and then get the Intermediate rule backwards, because that is the stage where passengers actually get capped.",
    "The drug and alcohol restriction does not stop when you pass the road test. It runs through the Learner Stage, the whole 15-month Intermediate Stage, and then the first 36 months of the Full Stage, so a new Manitoba driver is zero-tolerance for roughly five years.",
    "Manitoba's school bus rule has a divided-highway exception, and the divider has to be a physical one. On an undivided road every direction stops for the flashing reds; where a median or physical barrier separates the directions, only traffic on the bus's own side stops.",
    "The horn has to be audible from 60 metres and the muffler has to be in working order - a number and a rule that sound like trivia until they turn up on the test, which learners report they do.",
    "Manitoba writes its stage minimums as nine months in the Learner Stage and 15 months in the Intermediate Stage, and neither clock runs while your licence is suspended, cancelled or unpaid. People who let the annual charge lapse lose the time, not just the licence.",
  ],
  sets: [...manitobaSets1to3, ...manitobaSets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
