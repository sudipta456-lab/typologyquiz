// World edition of the weekly news quiz.
//
// Drafted from WebSearch against reputable outlets, then independently fact-
// checked question by question (source re-fetched, wording checked against
// known quiz products, tone checked) before publish. One drafted question
// (a UK-PM item) was dropped rather than published: its source article was
// real but described a different, year-old visit under a different prime
// minister - the underlying fact was right, the citation was wrong, and this
// pipeline does not ship a citation it cannot stand behind. 11 questions
// this edition rather than 12 for that reason.

import type { NewsQuiz } from "./types";

export const WORLD_NEWS_QUIZ: NewsQuiz = {
  slug: "news-world",
  region: "World",
  title: "World News Quiz - Week of September 10, 2026",
  seoDescription: "How closely did you follow this week's biggest world news stories?",
  weekOf: "2026-09-10",
  questions: [
    {
      id: "world-01",
      question:
        "In a weekend of shuttle diplomacy on September 5-6, 2026, U.S. envoys Steve Witkoff and Jared Kushner met with Vladimir Putin in Moscow and then flew on to meet Ukrainian President Volodymyr Zelenskyy in which city?",
      choices: ["Kyiv", "Warsaw", "Vienna", "Istanbul"],
      correctIndex: 0,
      explanation:
        "After a three-hour meeting with Putin at the Kremlin on Saturday, the envoys traveled to Kyiv on Sunday, where Witkoff described the talks with Zelenskyy on a U.S. proposal to end the war as \"substantive.\"",
      sourceLabel: "NPR",
      sourceUrl: "https://www.npr.org/2026/09/06/nx-s1-5959657/us-envoys-witkoff-kushner-talks-in-kyiv-putin-moscow",
    },
    {
      id: "world-02",
      question:
        "After the United States carried out a fresh wave of strikes on southern Iran on September 1, 2026, Tehran said it retaliated with missile and drone attacks against U.S.-linked positions in which three countries?",
      choices: [
        "Saudi Arabia, the UAE and Qatar",
        "Bahrain, Jordan and Iraq",
        "Egypt, Israel and Turkey",
        "Oman, Yemen and Syria",
      ],
      correctIndex: 1,
      explanation:
        "Iran claimed attacks on Bahrain, Jordan and Iraq after the new U.S. strikes, while neighboring Kuwait said its air defenses intercepted additional Iranian drones and missiles headed toward it.",
      sourceLabel: "Al Jazeera",
      sourceUrl: "https://www.aljazeera.com/news/2026/9/1/us-military-says-launching-new-attacks-on-iran",
    },
    {
      id: "world-03",
      question:
        "Germany's far-right Alternative for Germany (AfD) party posted its strongest state-election result ever on September 6, 2026, coming closer than any far-right party since World War II to leading a German state government - but still fell short of a majority. Which state voted?",
      choices: ["Bavaria", "Thuringia", "Saxony-Anhalt", "Brandenburg"],
      correctIndex: 2,
      explanation:
        "Preliminary results gave the AfD roughly 43.8% of the vote in Saxony-Anhalt, more than double the tally of Chancellor Friedrich Merz's Christian Democrats, but its 39 seats fell just short of the 42 needed for an outright majority.",
      sourceLabel: "CNN",
      sourceUrl: "https://www.cnn.com/2026/09/06/europe/germany-afd-state-election-majority-intl",
    },
    {
      id: "world-05",
      question:
        "President Xi Jinping's early-September 2026 state visit to Cairo, where he met President Abdel Fattah el-Sisi, was his first trip to which country in a decade?",
      choices: ["Egypt", "Saudi Arabia", "Turkey", "Morocco"],
      correctIndex: 0,
      explanation:
        "Al Jazeera reported that Xi's stop in Cairo was his first visit to Egypt in ten years, part of a diplomatic swing aimed at deepening China's economic and security ties across the Middle East.",
      sourceLabel: "Al Jazeera",
      sourceUrl: "https://www.aljazeera.com/news/2026/9/2/chinas-xi-visits-egypts-el-sisi-why-it-matters",
    },
    {
      id: "world-06",
      question:
        "In early September 2026, President Trump signaled the U.S. might reconsider backing Britain's position in any future Falkland Islands dispute with Argentina, tying the review to what?",
      choices: [
        "A new Argentine trade deal with China",
        "Britain's support for the U.S.-led campaign against Iran",
        "Brexit-era fishing rights disputes",
        "Britain's refusal to join a Pacific trade pact",
      ],
      correctIndex: 1,
      explanation:
        "Trump hinted the U.S. might not back the UK over the Falklands, citing what he framed as insufficient British support for the campaign against Iran, part of a broader push for NATO allies to raise defense spending.",
      sourceLabel: "Euronews",
      sourceUrl:
        "https://www.euronews.com/2026/09/03/trump-hints-us-may-not-back-uk-over-falkland-islands-citing-lack-of-iran-support",
    },
    {
      id: "world-07",
      question:
        "Astronomers using the Hubble Space Telescope announced in early September 2026 that they had confirmed a giant, roughly 104,000-mile-wide, 10-sided atmospheric feature encircling Saturn's south pole - a striking counterpart to what famous feature at its north pole?",
      choices: ["The Great Red Spot", "The F-ring braid", "Saturn's hexagon", "The polar vortex ring"],
      correctIndex: 2,
      explanation:
        "The newly confirmed \"decagon\" echoes Saturn's long-known northern hexagon, though researchers say the two atmospheric patterns differ in important ways and are still working out why.",
      sourceLabel: "ESA/Hubble",
      sourceUrl: "https://esahubble.org/news/heic2612/",
    },
    {
      id: "world-08",
      question:
        "A United Nations investigators' report released on September 3, 2026 said Sudan's civil war between the army and the Rapid Support Forces is being significantly sustained by what?",
      choices: [
        "Cryptocurrency fundraising",
        "A collapse in gold export revenue",
        "Rival peacekeeping mandates",
        "Foreign recruitment and external arms-supply networks",
      ],
      correctIndex: 3,
      explanation:
        "UN human rights investigators found that foreign recruitment and outside supply networks are helping fuel the fighting between Sudan's Armed Forces and the paramilitary Rapid Support Forces, and called for accountability.",
      sourceLabel: "The Washington Post",
      sourceUrl: "https://www.washingtonpost.com/world/2026/09/03/sudan-war-un-report-foreign-suppliers/",
    },
    {
      id: "world-09",
      question:
        "The 2026 US Open tennis tournament, wrapping up this month in New York, set a Grand Slam record by offering how much in total player compensation?",
      choices: ["$108 million", "$65 million", "$90 million", "$150 million"],
      correctIndex: 0,
      explanation:
        "The US Open raised its prize pool about 20% over 2025 to a record $108 million, with the men's and women's singles champions each earning $5.5 million.",
      sourceLabel: "ATP Tour",
      sourceUrl: "https://www.atptour.com/en/news/us-open-2026-prize-money",
    },
    {
      id: "world-10",
      question:
        "Which actor received the Golden Lion for Lifetime Achievement at the opening ceremony of the 2026 Venice Film Festival on September 2?",
      choices: ["Brad Pitt", "George Clooney", "Denzel Washington", "Tom Hanks"],
      correctIndex: 1,
      explanation:
        "George Clooney was honored with the Golden Lion for Lifetime Achievement as the festival opened; actress Ellen Burstyn received a separate career Golden Lion later in the festival.",
      sourceLabel: "Variety",
      sourceUrl:
        "https://variety.com/2026/film/global/george-clooney-venice-film-festival-golden-lion-career-1236802227/",
    },
    {
      id: "world-11",
      question:
        "In a special-forces raid in Gaza City in early September 2026, Israel captured a man it identified as the head of which Hamas apparatus?",
      choices: [
        "Its rocket-manufacturing program",
        "Its political bureau",
        "Its internal security and counterintelligence apparatus",
        "Its tunnel-engineering corps",
      ],
      correctIndex: 2,
      explanation:
        "Israeli officials said Shin Bet and IDF forces captured Muin al-Arabid, whom Prime Minister Benjamin Netanyahu described as chief of Hamas's internal security apparatus and one of the group's most senior leaders.",
      sourceLabel: "The Times of Israel",
      sourceUrl: "https://www.timesofisrael.com/israel-confirms-capturing-hamas-internal-security-chief-in-gaza-city-raid/",
    },
    {
      id: "world-12",
      question:
        "Philippine Vice President Sara Duterte posted bail on September 5, 2026 after a court ordered her arrest over alleged grave threats against which president?",
      choices: ["Rodrigo Duterte", "Benigno Aquino III", "Gloria Macapagal Arroyo", "Ferdinand \"Bongbong\" Marcos Jr."],
      correctIndex: 3,
      explanation:
        "A Quezon City court ordered Duterte's arrest over alleged 2024 remarks threatening to have President Ferdinand Marcos Jr., the first lady and a former House speaker killed; she posted bail the next day.",
      sourceLabel: "NPR",
      sourceUrl: "https://www.npr.org/2026/09/05/g-s1-142148/philippines-vice-president-posts-bail",
    },
  ],
};
