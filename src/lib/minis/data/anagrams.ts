/**
 * Anagram wordlist for the daily anagram mini.
 *
 * Rules for entries:
 * - Single words only (no spaces), lowercase in data, shown uppercase scrambled.
 * - Teen-safe everyday vocabulary plus US states and countries.
 * - Tiered by difficulty: easy 4-5 letters, medium 6-7, hard 8+.
 * - No duplicates across tiers.
 */

export type AnagramHint = "everyday word" | "US state" | "country";

export type AnagramEntry = {
  word: string;
  hint: AnagramHint;
};

function w(word: string): AnagramEntry {
  return { word, hint: "everyday word" };
}
function s(word: string): AnagramEntry {
  return { word, hint: "US state" };
}
function c(word: string): AnagramEntry {
  return { word, hint: "country" };
}

/** Tier 1: 4-5 letters. */
export const ANAGRAM_EASY: AnagramEntry[] = [
  w("music"), w("pizza"), w("beach"), w("smile"), w("dance"),
  w("tiger"), w("ocean"), w("candy"), w("house"), w("cloud"),
  w("bread"), w("chair"), w("plant"), w("snake"), w("grape"),
  w("lemon"), w("mango"), w("peach"), w("berry"), w("melon"),
  w("sugar"), w("spoon"), w("plate"), w("glass"), w("table"),
  w("phone"), w("radio"), w("movie"), w("story"), w("paper"),
  w("brush"), w("paint"), w("color"), w("light"), w("night"),
  w("dream"), w("sleep"), w("water"), w("river"), w("stone"),
  w("grass"), w("heart"), w("brain"), w("laugh"), w("magic"),
  w("robot"), w("space"), w("comet"), w("lunar"), w("solar"),
  w("eagle"), w("horse"), w("whale"), w("shark"), w("mouse"),
  w("panda"), w("koala"), w("zebra"), w("camel"), w("otter"),
  w("bison"), w("moose"), w("goose"), w("crab"), w("wolf"),
  w("frog"), w("bear"), w("lion"), w("deer"), w("duck"),
  w("song"), w("book"), w("game"), w("kite"), w("ship"),
  w("moon"), w("star"), w("rain"), w("snow"), w("wind"),
  w("fire"), w("gold"), w("ruby"), w("pearl"), w("storm"),
  s("texas"), s("idaho"), s("ohio"), s("iowa"), s("utah"),
  s("maine"),
  c("chad"), c("cuba"), c("peru"), c("chile"), c("india"),
  c("spain"), c("japan"), c("china"), c("kenya"), c("egypt"),
  c("italy"), c("ghana"), c("nepal"), c("qatar"), c("libya"),
  c("haiti"), c("samoa"), c("tonga"),
];

/** Tier 2: 6-7 letters. */
export const ANAGRAM_MEDIUM: AnagramEntry[] = [
  w("planet"), w("garden"), w("forest"), w("window"), w("orange"),
  w("purple"), w("silver"), w("jungle"), w("castle"), w("bridge"),
  w("rocket"), w("camera"), w("guitar"), w("violin"), w("pencil"),
  w("marker"), w("eraser"), w("laptop"), w("screen"), w("bottle"),
  w("basket"), w("mirror"), w("candle"), w("pillow"), w("jacket"),
  w("winter"), w("summer"), w("spring"), w("autumn"), w("thunder"),
  w("rainbow"), w("diamond"), w("crystal"), w("library"), w("science"),
  w("history"), w("gravity"), w("volcano"), w("glacier"), w("pyramid"),
  w("compass"), w("captain"), w("pirate"), w("dragon"), w("wizard"),
  w("knight"), w("temple"), w("market"), w("ticket"), w("tunnel"),
  w("station"), w("airport"), w("highway"), w("morning"), w("evening"),
  w("weekend"), w("holiday"), w("picnic"), w("cookie"), w("muffin"),
  w("waffle"), w("pancake"), w("noodle"), w("cheese"), w("butter"),
  w("yogurt"), w("carrot"), w("potato"), w("tomato"), w("banana"),
  w("cherry"), w("coconut"), w("monkey"), w("turtle"), w("rabbit"),
  w("falcon"), w("penguin"), w("dolphin"), w("octopus"), w("giraffe"),
  s("oregon"), s("kansas"), s("nevada"), s("alaska"), s("hawaii"),
  s("indiana"), s("florida"), s("georgia"), s("arizona"), s("montana"),
  s("wyoming"), s("vermont"),
  c("brazil"), c("canada"), c("france"), c("mexico"), c("norway"),
  c("sweden"), c("poland"), c("turkey"), c("greece"), c("panama"),
  c("uganda"), c("zambia"), c("rwanda"), c("angola"), c("serbia"),
  c("latvia"), c("monaco"), c("kuwait"), c("bhutan"), c("taiwan"),
  c("iceland"), c("finland"), c("denmark"), c("ireland"), c("austria"),
  c("belgium"), c("croatia"), c("ukraine"), c("vietnam"), c("morocco"),
  c("nigeria"), c("senegal"), c("uruguay"), c("bolivia"), c("ecuador"),
  c("jamaica"),
];

/** Tier 3: 8+ letters. */
export const ANAGRAM_HARD: AnagramEntry[] = [
  w("elephant"), w("dinosaur"), w("mountain"), w("computer"), w("keyboard"),
  w("telescope"), w("butterfly"), w("crocodile"), w("kangaroo"), w("flamingo"),
  w("hedgehog"), w("squirrel"), w("reindeer"), w("seahorse"), w("starfish"),
  w("jellyfish"), w("chocolate"), w("spaghetti"), w("pineapple"), w("blueberry"),
  w("raspberry"), w("sandwich"), w("breakfast"), w("classroom"), w("homework"),
  w("notebook"), w("backpack"), w("calendar"), w("birthday"), w("festival"),
  w("carnival"), w("vacation"), w("adventure"), w("treasure"), w("universe"),
  w("asteroid"), w("satellite"), w("spaceship"), w("astronaut"), w("scientist"),
  w("inventor"), w("engineer"), w("musician"), w("painting"), w("sculpture"),
  w("orchestra"), w("trombone"), w("saxophone"), w("basketball"), w("volleyball"),
  w("skateboard"), w("snowboard"), w("swimming"), w("marathon"), w("champion"),
  w("lightning"), w("hurricane"), w("blizzard"), w("avalanche"), w("waterfall"),
  w("peninsula"), w("continent"), w("hemisphere"), w("longitude"), w("latitude"),
  s("michigan"), s("missouri"), s("colorado"), s("illinois"), s("kentucky"),
  s("nebraska"), s("oklahoma"), s("virginia"), s("maryland"), s("delaware"),
  s("arkansas"), s("tennessee"), s("wisconsin"), s("minnesota"), s("louisiana"),
  s("california"), s("washington"), s("pennsylvania"),
  c("portugal"), c("thailand"), c("mongolia"), c("botswana"), c("cambodia"),
  c("colombia"), c("ethiopia"), c("honduras"), c("malaysia"), c("pakistan"),
  c("paraguay"), c("slovakia"), c("slovenia"), c("tanzania"), c("zimbabwe"),
  c("argentina"), c("australia"), c("indonesia"), c("guatemala"), c("lithuania"),
  c("nicaragua"), c("singapore"), c("venezuela"), c("kazakhstan"), c("madagascar"),
  c("bangladesh"), c("switzerland"), c("netherlands"), c("philippines"),
];
