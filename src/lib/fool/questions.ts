/**
 * Fool-your-friends question bank.
 *
 * Every entry is a short trivia question with ONE true answer and TWO
 * plausible stock decoys. Players see the truth, the decoys, and up to
 * three player-written fakes shuffled together, and must find the truth.
 *
 * Content rules (see docs/QUIZ_STYLE.md): original phrasing, school-safe,
 * verifiable and uncontroversial facts only, no em-dashes, no emoji.
 * Each question carries a one-line source-quality note. Facts here are
 * the well-attested encyclopedia/textbook kind, not internet folklore;
 * anything contested (koala sleep records, "first food on the moon"
 * legends) was deliberately left out.
 *
 * Answer strings stay short (tile text, aim under 30 chars) and truths
 * are phrased so a creator's fake is unlikely to collide by accident.
 */

export type FoolQuestion = {
  id: string;
  text: string;
  /** The one true answer. */
  truth: string;
  /** Exactly two plausible-but-wrong stock decoys. */
  decoys: [string, string];
};

export const FOOL_QUESTIONS: FoolQuestion[] = [
  // Basic zoology; in every encyclopedia. Gliders glide, bats fly.
  {
    id: "f01",
    text: "What is the only mammal that can truly fly?",
    truth: "The bat",
    decoys: ["The flying squirrel", "The sugar glider"],
  },
  // Well-documented polar bear biology (skin is black under the fur).
  {
    id: "f02",
    text: "What color is a polar bear's skin?",
    truth: "Black",
    decoys: ["White", "Pale pink"],
  },
  // Standard botany fact; the seeds (achenes) sit on the outside.
  {
    id: "f03",
    text: "Which fruit wears its seeds on the outside?",
    truth: "The strawberry",
    decoys: ["The raspberry", "The kiwi"],
  },
  // Basic marine biology; two gill hearts plus one main heart.
  {
    id: "f04",
    text: "How many hearts does an octopus have?",
    truth: "Three",
    decoys: ["One", "Five"],
  },
  // Checkable by scanning the 50 state names; a classic verified list fact.
  {
    id: "f05",
    text: "Which letter appears in no US state name?",
    truth: "Q",
    decoys: ["Z", "X"],
  },
  // Standard planetary science; Venus beats Mercury thanks to its atmosphere.
  {
    id: "f06",
    text: "What is the hottest planet in our solar system?",
    truth: "Venus",
    decoys: ["Mercury", "Mars"],
  },
  // Long-established English collective noun, in major dictionaries.
  {
    id: "f07",
    text: "What is a group of crows called?",
    truth: "A murder",
    decoys: ["A parliament", "A gaggle"],
  },
  // Widely documented; overseas territories push France past Russia.
  {
    id: "f08",
    text: "Counting territories, which country spans the most time zones?",
    truth: "France",
    decoys: ["Russia", "The USA"],
  },
  // Standard anatomy fact taught in school biology.
  {
    id: "f09",
    text: "What is the largest organ of the human body?",
    truth: "The skin",
    decoys: ["The liver", "The brain"],
  },
  // Well-replicated finding; koala prints can pass for human ones.
  {
    id: "f10",
    text: "Which animal has fingerprints almost identical to a human's?",
    truth: "The koala",
    decoys: ["The chimpanzee", "The raccoon"],
  },
  // Anglo-Zanzibar War, 1896; sources give 38 to 45 minutes, so "about 40" is safe.
  {
    id: "f11",
    text: "Roughly how long did the shortest war in history last?",
    truth: "About 40 minutes",
    decoys: ["About 4 hours", "About 2 days"],
  },
  // Standard planetary science; Jupiter rotates in just under 10 hours.
  {
    id: "f12",
    text: "Which planet has the shortest day?",
    truth: "Jupiter",
    decoys: ["Mercury", "Mars"],
  },
  // Well-documented; edible honey has been recovered from ancient tombs.
  {
    id: "f13",
    text: "Which food essentially never spoils?",
    truth: "Honey",
    decoys: ["White rice", "Dark chocolate"],
  },
  // Basic shark biology; the skeleton is cartilage, not bone.
  {
    id: "f14",
    text: "How many bones does a shark have?",
    truth: "Zero",
    decoys: ["About 80", "About 300"],
  },
  // Aviation standard; flight recorders are painted bright orange to be found.
  {
    id: "f15",
    text: "What color is an airplane's so-called black box?",
    truth: "Orange",
    decoys: ["Black", "Red"],
  },
  // Standard food-history account: the Austrian kipferl is the croissant's ancestor.
  {
    id: "f16",
    text: "In which country did the croissant's ancestor originate?",
    truth: "Austria",
    decoys: ["France", "Belgium"],
  },
  // Basic astronomy; roughly 8 minutes 20 seconds at light speed.
  {
    id: "f17",
    text: "About how long does sunlight take to reach Earth?",
    truth: "About 8 minutes",
    decoys: ["About 8 seconds", "About 1 hour"],
  },
  // Standard geography figure used by NOAA and textbooks alike.
  {
    id: "f18",
    text: "About what share of Earth's surface is ocean?",
    truth: "About 71 percent",
    decoys: ["About 55 percent", "About 85 percent"],
  },
  // Well-documented naming story: Harald Bluetooth, 10th-century Scandinavian king.
  {
    id: "f19",
    text: "Bluetooth technology is named after what?",
    truth: "A Viking king",
    decoys: ["The blue glow of early screens", "A project code name that stuck"],
  },
  // Official heraldry of Scotland; documented by the Scottish government.
  {
    id: "f20",
    text: "What is the national animal of Scotland?",
    truth: "The unicorn",
    decoys: ["The red deer", "The golden eagle"],
  },
  // Basic entomology; two compound eyes plus three simple ocelli.
  {
    id: "f21",
    text: "How many eyes does a honeybee have?",
    truth: "Five",
    decoys: ["Two", "Four"],
  },
  // NASA and University of Wisconsin grew potatoes aboard the shuttle in 1995.
  {
    id: "f22",
    text: "What was the first vegetable grown in space?",
    truth: "The potato",
    decoys: ["The tomato", "Lettuce"],
  },
  // Checkable by syllable-counting the 50 state names; Maine stands alone.
  {
    id: "f23",
    text: "Which is the only US state with a one-syllable name?",
    truth: "Maine",
    decoys: ["Texas", "Utah"],
  },
  // Long-established English collective noun, in major dictionaries.
  {
    id: "f24",
    text: "What is a group of flamingos called?",
    truth: "A flamboyance",
    decoys: ["A carnival", "A shimmer"],
  },
];

const byId = new Map(FOOL_QUESTIONS.map((q) => [q.id, q]));

export function getFoolQuestion(id: string): FoolQuestion | undefined {
  return byId.get(id);
}

/** Sample `count` distinct questions, order randomized (Fisher-Yates). */
export function sampleFoolQuestions(count: number): FoolQuestion[] {
  const pool = [...FOOL_QUESTIONS];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(count, pool.length));
}
