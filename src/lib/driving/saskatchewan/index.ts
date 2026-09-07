import type { Jurisdiction, HandbookExcerpt } from "../types";
import { saskatchewanSets1to3 } from "./sets-1-3";
import { saskatchewanSets4to6 } from "./sets-4-6";
import { saskatchewanExcerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = saskatchewanExcerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = [
  "sgi.sk.ca",
  "saskatchewan.ca",
  "publications.saskatchewan.ca",
];

export const jurisdiction: Jurisdiction = {
  slug: "saskatchewan",
  name: "Saskatchewan",
  code: "SK",
  country: "CA",
  countryLabel: "Canada",
  contentDate: "2026-09-06",
  handbookEdition: "2026-27",
  researchNote: "docs/driving/research/saskatchewan.md",
  licenceName: "Class 7 Learner's Licence",
  intro:
    "Saskatchewan splits the written testing in two. SGI gives you a basic knowledge exam on the rules of the road and a separate sign exam on what the shapes and colours mean, and you need 80 per cent on each one. Pass both and a vision test and you are a Class 7 learner, nine months from a road test. These six sets work through the SGI handbook end to end, keep the signs half loaded the way the real pair of exams does, and finish with the numbers Saskatchewan learners say caught them out.",
  officialTest: {
    questionCount: 50,
    passCount: 40,
    passLabel: "80% on each of the two written exams",
    sectionedBy: [
      {
        label: "Sign exam",
        topics: ["signs"],
        passCount: 20,
      },
      {
        label: "Basic knowledge exam",
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
        passCount: 20,
      },
    ],
    notes: [
      "There are TWO written exams, not one: a basic knowledge exam on the rules of the road and driving situations, and a separate sign exam on what traffic signs mean. SGI publishes a passing grade of 80% for each, and $25 each time you sit either one.",
      "SGI does not publish how many questions either exam has. The 50 shown here comes from one Regina learner who reported scoring 49 out of 50 on the written exam in 2026, and SGI's own Basic Exam Practice Quiz runs 20 questions. Treat the 80% as the number that matters, not the total.",
      "Fail one exam and you rewrite only that exam. SGI's page says you can schedule another test as early as the next day; the handbook adds that you may write only once per day.",
      "In larger centres the basic exam is computer based with translation into more than 100 languages, and smaller centres offer paper. Only Regina and Saskatoon take walk-ins; everywhere else is by appointment through MySGI or a motor licence issuer.",
      "Cellphones and electronic devices are not allowed in the test area. If you are unsure what a question means you may ask the examiner.",
      "A successful written result is good for one year. After that you must hold the Class 7 licence for nine months and finish the mandatory driver education before you can book the Class 5 road test.",
      "The road test is scored in demerits rather than questions: 9 or fewer passes, 10 or more fails, and it costs $55 each attempt. Fail it and you wait two weeks.",
    ],
  },
  handbookName: "Saskatchewan Driver's Handbook (SGI)",
  handbookUrl: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf",
  officialInfoUrl: "https://sgi.sk.ca/new-drivers",
  localGotchas: [
    "Saskatchewan's unsigned default is 80 km/h, and it is the same 80 whether you are on a provincial highway or a gravel grid road. There is no separate urban default in the Act at all - towns and cities post their limit at the entrance sign and it then applies everywhere inside the boundary unless another sign says otherwise. Learners arriving from a province with a built-in 50 km/h city rule get this backwards in both directions.",
    "The roundabout rule is written the opposite way round from most provinces. SGI's own wording is that the vehicle on the right must yield to the vehicle on the left, because the vehicle on the left is already circulating. The rule you actually apply is the same one everyone uses - entering traffic yields to traffic already in the roundabout - but the sentence on the page reads like a contradiction of Saskatchewan's ordinary right-hand-yield rule, and people answer from the wrong half of it.",
    "Sixty kilometres an hour is the number to memorise, and it covers four different stopped vehicles: highway workers and equipment, emergency vehicles, tow trucks, and service or escort vehicles. In every case the exemption is the same and it is narrow - you are excused only if you are on a DIVIDED highway travelling on the opposite roadway. On an undivided highway you slow down even when the stopped vehicle is on the far side.",
    "The written exam leans much harder on chapters 7 and 8 - alcohol, drugs and the law - than learners expect. People who sat it report questions on how long alcohol takes to leave the body, on the chart that equates two drinks plus a joint to five or six drinks, and on the penalties themselves rather than on the rules of the road. Read the BAC tables and the impoundment charts, not just the signs.",
    "A yellow tab reading a speed under a warning sign is a recommendation, not a limit. The regulatory white sign is the enforceable maximum, and it takes effect AT the sign, not before it. Saskatchewan road-test candidates lose points at both ends of that - slowing to the new limit far too early on a highway approach, and still being over it as they pass the sign coming into a town.",
    "New-driver zero tolerance is defined by age as well as by stage. SGI's own list of new drivers starts with every driver 21 years of age and under, so a 20-year-old who graduated the GDL programme years ago is still zero-BAC, and so is anyone who has had no licence in the last five years.",
  ],
  sets: [...saskatchewanSets1to3, ...saskatchewanSets4to6].sort(
    (a, b) => a.setNumber - b.setNumber
  ),
};
