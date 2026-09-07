// North America edition of the weekly news quiz.
//
// Drafted from WebSearch against reputable outlets, then independently fact-
// checked question by question (source re-fetched, wording checked against
// known quiz products, tone checked) before publish. One drafted question (a
// CFL Labour Day Classic result) was dropped rather than published: its cited
// article was real but a year old, and reported the OPPOSITE result of this
// week's actual game. 11 questions this edition rather than 12 for that
// reason.

import type { NewsQuiz } from "./types";

export const NORTH_AMERICA_NEWS_QUIZ: NewsQuiz = {
  slug: "news-north-america",
  region: "North America",
  title: "North America News Quiz - Week of September 10, 2026",
  seoDescription: "How closely did you follow this week's biggest U.S. and Canada news stories?",
  weekOf: "2026-09-10",
  questions: [
    {
      id: "na-01",
      question:
        "The U.S. Bureau of Labor Statistics' August jobs report, released this week, showed the unemployment rate holding steady at 4.1%. Roughly how many jobs did employers add, far outpacing forecasts?",
      choices: ["About 53,000", "About 21,000", "About 162,000", "About 310,000"],
      correctIndex: 2,
      explanation:
        "Nonfarm payrolls rose by roughly 162,000 in August, the strongest monthly gain since March, well above the low forecasts economists had penciled in, while the jobless rate stayed at 4.1%.",
      sourceLabel: "CNBC",
      sourceUrl: "https://www.cnbc.com/2026/09/04/jobs-report-august-2026.html",
    },
    {
      id: "na-02",
      question:
        "An Amazon-branded cargo jet overran the runway and slammed into vehicles while landing at Miami International Airport this week. How many people were reported killed?",
      choices: ["At least 5", "At least 12", "2", "None; only injuries were reported"],
      correctIndex: 0,
      explanation:
        "The Boeing 767 freighter, flown by contract carrier 21 Air for Amazon Prime Air, overran the runway on arrival from San Juan and struck ground vehicles, killing at least five people and injuring five more; the NTSB opened an investigation into the crash.",
      sourceLabel: "NBC News",
      sourceUrl: "https://www.nbcnews.com/news/us-news/amazon-plane-crash-miami-rcna596369",
    },
    {
      id: "na-03",
      question:
        "With the Sept. 30 end of the fiscal year approaching, Congress passed a stopgap bill this week to keep the federal government funded and head off a shutdown. Through what date does the measure extend funding?",
      choices: ["Nov. 1, 2026", "Dec. 11, 2026", "Jan. 20, 2027", "March 1, 2027"],
      correctIndex: 1,
      explanation:
        "Lawmakers passed a continuing resolution keeping federal agencies funded through Dec. 11, which the president signed into law, pushing any shutdown fight past the fall midterm campaign season.",
      sourceLabel: "The Hill",
      sourceUrl: "https://thehill.com/homenews/house/6063667-house-government-funding-cr-shutdown-midterms/",
    },
    {
      id: "na-04",
      question:
        "The Supreme Court ruled 5-4 this week to let construction continue on a large addition to the White House. Which justice broke from the court's other Republican appointees to dissent?",
      choices: ["Clarence Thomas", "Brett Kavanaugh", "Samuel Alito", "Chief Justice John Roberts"],
      correctIndex: 3,
      explanation:
        "The other five GOP-appointed justices let the ballroom project proceed, finding the challengers likely lacked legal standing, while Chief Justice Roberts joined the three Democratic appointees in dissent, writing that the project was \"likely unlawful.\"",
      sourceLabel: "The Hill",
      sourceUrl: "https://thehill.com/regulation/court-battles/6062155-roberts-white-house-ballroom-dissent/",
    },
    {
      id: "na-05",
      question:
        "Canada's latest round of retaliatory tariffs on U.S. goods took effect this week, covering roughly $27.6 billion in American imports. Which group of sectors did Ottawa specifically target?",
      choices: [
        "Steel, dairy, and electronics",
        "Oil, autos, and lumber",
        "Pharmaceuticals and semiconductors",
        "Airlines and tourism services",
      ],
      correctIndex: 0,
      explanation:
        "Effective Sept. 8, Canada's counter-tariffs hit U.S. steel, dairy, appliances, agricultural equipment, pulp and paper, and electronics, with rates set to match the U.S. tariffs imposed on the same categories of Canadian goods.",
      sourceLabel: "Government of Canada, Department of Finance",
      sourceUrl:
        "https://www.canada.ca/en/department-finance/news/2026/08/list-of-products-from-the-united-states-subject-to-counter-tariffs-effective-september-8-2026.html",
    },
    {
      id: "na-06",
      question:
        "Prime Minister Mark Carney's Liberals swept three federal byelections this week, including flipping a riding the opposition Conservatives had held since 2018. In which province was that flipped seat?",
      choices: ["Alberta", "Ontario", "Quebec", "British Columbia"],
      correctIndex: 2,
      explanation:
        "Liberal candidate Daniel Gobeil won the Quebec riding of Chicoutimi-Le Fjord, a longtime Conservative stronghold, while the party also held onto Beaches-East York in Ontario and North Vancouver-Capilano in B.C. to complete the sweep.",
      sourceLabel: "The Washington Post",
      sourceUrl:
        "https://www.washingtonpost.com/world/2026/09/02/carney-liberal-party-sweeps-canada-special-elections-amid-trade-war/",
    },
    {
      id: "na-07",
      question:
        "The Bank of Canada held its benchmark rate steady for a seventh consecutive decision this week, citing inflation risks tied to the trade war with the U.S. What is the current overnight rate?",
      choices: ["3.75%", "2.25%", "1.50%", "4.50%"],
      correctIndex: 1,
      explanation:
        "The Bank of Canada kept its overnight rate at 2.25% on Sept. 2, flagging that renewed U.S. tariffs and trade tensions had increased upside risks to inflation even as growth forecasts were trimmed.",
      sourceLabel: "Bank of Canada",
      sourceUrl: "https://www.bankofcanada.ca/2026/09/fad-press-release-2026-09-02/",
    },
    {
      id: "na-08",
      question:
        "Statistics Canada's August labour force survey, out this week, showed employment falling by about 42,000 jobs nationwide. Where did the unemployment rate land?",
      choices: ["4.1%", "5.0%", "7.2%", "6.4%"],
      correctIndex: 3,
      explanation:
        "Statistics Canada reported the national unemployment rate unchanged at 6.4% in August, even as overall employment slipped and youth unemployment stayed elevated near 12.9%.",
      sourceLabel: "Statistics Canada, The Daily",
      sourceUrl: "https://www150.statcan.gc.ca/n1/daily-quotidien/260904/dq260904a-eng.htm",
    },
    {
      id: "na-09",
      question:
        "New head coach Lane Kiffin made his sideline debut for LSU this week in a lopsided 51-10 win at Tiger Stadium. Which storied program did the Tigers rout?",
      choices: ["Alabama", "Clemson", "Texas", "Georgia"],
      correctIndex: 1,
      explanation:
        "Kiffin's LSU debut was a 51-10 blowout of Clemson in Baton Rouge, with the Tigers piling up 644 yards of offense despite a lightning delay that pushed kickoff back nearly two hours.",
      sourceLabel: "NBC Sports (AP)",
      sourceUrl:
        "https://www.nbcsports.com/college-football/news/lane-kiffins-debut-with-no-11-lsu-matches-the-hype-in-a-51-10-victory-over-outmatched-clemson",
    },
    {
      id: "na-10",
      question:
        "At this year's Creative Arts Emmys, one long-running animated series broke a 13-year drought to win Outstanding Animated Program for a season premiere targeting Donald Trump. Which show won?",
      choices: ["The Simpsons", "Bob's Burgers", "South Park", "Family Guy"],
      correctIndex: 2,
      explanation:
        "South Park took the Emmy for its season 27 premiere, \"Sermon on the 'Mount,\" marking the show's first win in the Outstanding Animated Program category since 2013.",
      sourceLabel: "Cartoon Brew",
      sourceUrl: "https://www.cartoonbrew.com/series/south-park-emmy-donald-trump-paramount-266308.html",
    },
    {
      id: "na-11",
      question:
        "A journalist and activist who co-founded Ms. magazine and became one of the most recognizable faces of the modern women's movement died this week at her New York home at age 92. Who was she?",
      choices: ["Gloria Steinem", "Betty Friedan", "Bella Abzug", "Erica Jong"],
      correctIndex: 0,
      explanation:
        "Gloria Steinem, who spent decades campaigning on reproductive rights, workplace equality and sexual harassment and helped found Ms. magazine, died Sept. 2 at her New York City home; no cause of death was given.",
      sourceLabel: "NPR",
      sourceUrl: "https://www.npr.org/2026/09/03/nx-s1-5718381/gloria-steinem-dies",
    },
  ],
};
