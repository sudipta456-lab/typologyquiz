/**
 * Built-in Live Events sessions. Worker-only: this file is never imported by
 * anything under src/, so answer keys and explanations never ship in the
 * static client bundle. Clients see catalogMetadata() only.
 *
 * Content rules, rights and review status: docs/live-events/CONTENT.md.
 * Every question is general knowledge with a stable reference source; no
 * personality claims, current events, or contested facts.
 *
 * Correct-answer positions are balanced: every session puts exactly two
 * answers on each of A, B, C and D, never the same letter twice in a row, so
 * "always pick B" earns nothing. Numeric scales stay ascending or descending
 * where that balance allows. tests/live-core.test.mjs enforces this.
 */

const q = (id, prompt, options, answer, explanation, source) => ({ id, prompt, options, answer, explanation, source });

export const LIVE_SESSIONS = Object.freeze([
  {
    id: "world-warm-up",
    title: "World Warm-up",
    blurb: "Capitals and big landmarks. An easy opener that gets everyone talking.",
    defaults: { scoring: "accuracy", timeLimitSec: 20 },
    rounds: [
      { title: "Capital cities", questions: [
        q("ww-australia", "What is the capital of Australia?", ["Canberra", "Melbourne", "Sydney", "Perth"], 0, "Canberra was chosen as a compromise between Sydney and Melbourne and became the capital in the early 1900s.", "https://www.britannica.com/place/Canberra"),
        q("ww-canada", "What is the capital of Canada?", ["Toronto", "Vancouver", "Montreal", "Ottawa"], 3, "Ottawa, in Ontario, is Canada's capital. Toronto is the largest city.", "https://www.britannica.com/place/Ottawa"),
        q("ww-brazil", "What is the capital of Brazil?", ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], 2, "Brasília was built as a planned capital and replaced Rio de Janeiro in 1960.", "https://www.britannica.com/place/Brasilia"),
        q("ww-nz", "What is the capital of New Zealand?", ["Auckland", "Wellington", "Christchurch", "Queenstown"], 1, "Wellington, at the southern tip of the North Island, is the capital. Auckland is the largest city.", "https://www.britannica.com/place/Wellington-New-Zealand"),
      ] },
      { title: "Big landmarks", questions: [
        q("ww-everest", "Which mountain has the highest peak above sea level?", ["K2", "Denali", "Kilimanjaro", "Mount Everest"], 3, "Mount Everest, on the Nepal–China border, is the highest point above sea level.", "https://www.britannica.com/place/Mount-Everest"),
        q("ww-pacific", "Which is the largest ocean?", ["Pacific", "Indian", "Atlantic", "Arctic"], 0, "The Pacific is the largest and deepest ocean, covering roughly a third of Earth's surface.", "https://www.britannica.com/place/Pacific-Ocean"),
        q("ww-sahara", "Which is the largest hot desert in the world?", ["Gobi", "Sahara", "Kalahari", "Mojave"], 1, "The Sahara is the largest hot desert. Antarctica is larger, but it is a cold desert.", "https://www.britannica.com/place/Sahara-desert-Africa"),
        q("ww-nile", "Which river is generally listed as Africa's longest?", ["Congo", "Niger", "Nile", "Zambezi"], 2, "The Nile flows north to the Mediterranean and is usually listed as the longest river in Africa.", "https://www.britannica.com/place/Nile-River"),
      ] },
    ],
  },
  {
    id: "night-sky",
    title: "Night Sky",
    blurb: "Planets, stars and the Moon landing. Good for curious kids and stargazers.",
    defaults: { scoring: "accuracy", timeLimitSec: 20 },
    rounds: [
      { title: "Our planets", questions: [
        q("ns-jupiter", "Which is the largest planet in our solar system?", ["Saturn", "Neptune", "Jupiter", "Earth"], 2, "Jupiter is more than twice as massive as all the other planets combined.", "https://science.nasa.gov/jupiter/"),
        q("ns-mercury", "Which planet is closest to the Sun?", ["Mercury", "Mars", "Venus", "Earth"], 0, "Mercury is the smallest planet and the closest to the Sun.", "https://science.nasa.gov/mercury/"),
        q("ns-mars", "Which planet is nicknamed the Red Planet?", ["Uranus", "Venus", "Jupiter", "Mars"], 3, "Iron minerals in Martian dust and rock oxidize, giving the surface its reddish color.", "https://science.nasa.gov/mars/"),
        q("ns-uranus", "Which planet rotates tipped almost completely on its side?", ["Neptune", "Uranus", "Saturn", "Mercury"], 1, "Uranus's axis is tilted about 98 degrees, so it appears to roll around the Sun.", "https://science.nasa.gov/uranus/"),
      ] },
      { title: "Beyond the planets", questions: [
        q("ns-sunlight", "About how long does sunlight take to reach Earth?", ["8 days", "8 hours", "8 minutes", "8 seconds"], 2, "At about 150 million km away, sunlight takes roughly 8 minutes and 20 seconds to arrive.", "https://science.nasa.gov/sun/facts/"),
        q("ns-galaxy", "What is the name of the galaxy that contains our solar system?", ["Andromeda", "Whirlpool", "Triangulum", "Milky Way"], 3, "We live in the Milky Way, a barred spiral galaxy. Andromeda is our large neighbor.", "https://www.britannica.com/place/Milky-Way-Galaxy"),
        q("ns-armstrong", "Who was the first person to walk on the Moon, in 1969?", ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "Michael Collins"], 0, "Neil Armstrong stepped onto the Moon on July 20, 1969, during Apollo 11.", "https://www.britannica.com/biography/Neil-Armstrong"),
        q("ns-sirius", "Which star is the brightest in Earth's night sky?", ["Polaris", "Sirius", "Betelgeuse", "Vega"], 1, "Sirius, in the constellation Canis Major, is the brightest star in the night sky. Polaris is not especially bright.", "https://www.britannica.com/place/Sirius-star"),
      ] },
    ],
  },
  {
    id: "kitchen-science",
    title: "Kitchen Science",
    blurb: "The chemistry and botany hiding in everyday cooking.",
    defaults: { scoring: "timed", timeLimitSec: 20 },
    rounds: [
      { title: "On the stove", questions: [
        q("ks-boil", "At sea level, at what temperature does pure water boil?", ["90 °C", "100 °C", "110 °C", "120 °C"], 1, "Pure water boils at 100 °C (212 °F) at standard sea-level pressure. It boils cooler at altitude.", "https://www.britannica.com/science/boiling-point"),
        q("ks-yeast", "Which gas from yeast makes bread dough rise?", ["Oxygen", "Nitrogen", "Helium", "Carbon dioxide"], 3, "Yeast ferments sugars and releases carbon dioxide, which gets trapped in the dough.", "https://www.britannica.com/science/yeast-fungus"),
        q("ks-soda", "Baking soda is the everyday name for which compound?", ["Sodium bicarbonate", "Sodium chloride", "Calcium carbonate", "Citric acid"], 0, "Baking soda is sodium bicarbonate. Sodium chloride is table salt.", "https://www.britannica.com/science/sodium-bicarbonate"),
        q("ks-maillard", "What is the browning reaction that flavors toast and seared food called?", ["Bernoulli principle", "Doppler effect", "Maillard reaction", "Haber process"], 2, "The Maillard reaction between sugars and amino acids creates browned color and savory flavor.", "https://www.britannica.com/science/Maillard-reaction"),
      ] },
      { title: "Where it grows", questions: [
        q("ks-saffron", "Saffron comes from which part of a plant?", ["Roots", "Bark", "Seeds", "Flower stigmas"], 3, "Saffron is the dried stigmas of the saffron crocus flower, picked by hand.", "https://www.britannica.com/topic/saffron"),
        q("ks-cacao", "Chocolate is made from the seeds of which plant?", ["Coffee", "Cacao", "Carob", "Vanilla"], 1, "Chocolate comes from fermented, roasted seeds of the cacao tree.", "https://www.britannica.com/plant/cacao"),
        q("ks-peanut", "Which of these is botanically a legume rather than a tree nut?", ["Almond", "Cashew", "Peanut", "Walnut"], 2, "Peanuts grow underground in pods and belong to the legume (pea) family.", "https://www.britannica.com/plant/peanut"),
        q("ks-vanilla", "Natural vanilla comes from the seed pods of which kind of plant?", ["An orchid", "A palm", "A lily", "A rose"], 0, "Vanilla is the cured seed pod of a climbing orchid.", "https://www.britannica.com/plant/vanilla"),
      ] },
    ],
  },
  {
    id: "animal-records",
    title: "Animal Records",
    blurb: "Biggest, fastest, tallest, and a few surprises. A family favorite.",
    defaults: { scoring: "accuracy", timeLimitSec: 20 },
    rounds: [
      { title: "Record holders", questions: [
        q("ar-bluewhale", "What is the largest animal known to have ever lived?", ["African elephant", "Argentinosaurus", "Whale shark", "Blue whale"], 3, "The blue whale can reach about 30 metres in length and is the heaviest animal known.", "https://www.britannica.com/animal/blue-whale"),
        q("ar-cheetah", "Which is the fastest land animal?", ["Cheetah", "Lion", "Pronghorn", "Greyhound"], 0, "Cheetahs can sprint at around 100 km/h over short distances.", "https://www.britannica.com/animal/cheetah-mammal"),
        q("ar-giraffe", "Which is the tallest living land animal?", ["Elephant", "Moose", "Giraffe", "Camel"], 2, "Giraffes can stand more than 5 metres tall.", "https://www.britannica.com/animal/giraffe"),
        q("ar-ostrich", "Which living bird lays the largest eggs?", ["Emu", "Ostrich", "Albatross", "Swan"], 1, "Ostriches lay the largest eggs of any living bird.", "https://www.britannica.com/animal/ostrich"),
      ] },
      { title: "Surprising animals", questions: [
        q("ar-octopus", "How many hearts does an octopus have?", ["One", "Two", "Three", "Eight"], 2, "An octopus has three hearts: two pump blood through the gills and one through the body.", "https://www.britannica.com/animal/octopus-mollusk"),
        q("ar-bat", "Which of these mammals is capable of true, powered flight?", ["Bat", "Flying squirrel", "Sugar glider", "Colugo"], 0, "Bats are the only mammals capable of true flight. The others glide.", "https://www.britannica.com/animal/bat-mammal"),
        q("ar-pride", "What is a group of lions called?", ["A pack", "A herd", "A pod", "A pride"], 3, "Lions live in social groups called prides.", "https://www.britannica.com/animal/lion"),
        q("ar-panda", "What makes up most of a giant panda's diet?", ["Fish", "Bamboo", "Fruit", "Insects"], 1, "Giant pandas eat bamboo for almost all of their diet.", "https://www.britannica.com/animal/giant-panda"),
      ] },
    ],
  },
  {
    id: "word-origins",
    title: "Word Origins",
    blurb: "Where everyday English words came from, plus some word play.",
    defaults: { scoring: "accuracy", timeLimitSec: 25 },
    rounds: [
      { title: "Borrowed words", questions: [
        q("wo-kindergarten", "The word “kindergarten” came into English from which language?", ["Dutch", "Danish", "German", "French"], 2, "Kindergarten is German for “children's garden.”", "https://www.merriam-webster.com/dictionary/kindergarten"),
        q("wo-safari", "“Safari” came into English from which language?", ["Portuguese", "Hindi", "Spanish", "Swahili"], 3, "Safari comes from Swahili, which borrowed it from Arabic.", "https://www.merriam-webster.com/dictionary/safari"),
        q("wo-tsunami", "“Tsunami” is borrowed from which language?", ["Korean", "Japanese", "Hawaiian", "Malay"], 1, "Tsunami is Japanese, from words meaning “harbor” and “wave.”", "https://www.merriam-webster.com/dictionary/tsunami"),
        q("wo-shampoo", "“Shampoo” came into English from which language?", ["Hindi", "Italian", "Turkish", "Greek"], 0, "Shampoo comes from a Hindi word meaning to press or massage.", "https://www.merriam-webster.com/dictionary/shampoo"),
      ] },
      { title: "Word play", questions: [
        q("wo-palindrome", "What do you call a word that reads the same backward, like “level”?", ["Anagram", "Acronym", "Homophone", "Palindrome"], 3, "A palindrome reads the same in either direction.", "https://www.merriam-webster.com/dictionary/palindrome"),
        q("wo-laser", "The word “laser” started out as what?", ["An acronym", "A person's name", "A brand name", "A Latin verb"], 0, "Laser is an acronym for light amplification by stimulated emission of radiation.", "https://www.merriam-webster.com/dictionary/laser"),
        q("wo-homophone", "“Pair” and “pear” sound alike but mean different things. They are…", ["Synonyms", "Antonyms", "Homophones", "Palindromes"], 2, "Homophones sound the same but differ in meaning, and often in spelling.", "https://www.merriam-webster.com/dictionary/homophone"),
        q("wo-alphabet", "“Alphabet” comes from the first two letters of which alphabet?", ["Latin", "Greek", "Hebrew", "Cyrillic"], 1, "Alpha and beta are the first two letters of the Greek alphabet.", "https://www.merriam-webster.com/dictionary/alphabet"),
      ] },
    ],
  },
  {
    id: "inventions",
    title: "Inventions and Everyday Tech",
    blurb: "Printing presses, first flights and the acronyms in your pocket.",
    defaults: { scoring: "timed", timeLimitSec: 20 },
    rounds: [
      { title: "Who made it", questions: [
        q("in-gutenberg", "Johannes Gutenberg is known for developing what?", ["Movable-type printing", "The telescope", "The steam engine", "The compass"], 0, "Gutenberg's movable-type printing press, from the mid-1400s, transformed book production in Europe.", "https://www.britannica.com/biography/Johannes-Gutenberg"),
        q("in-wright", "In which US state did the Wright brothers make their first powered flights in 1903?", ["Ohio", "Kansas", "North Carolina", "California"], 2, "The flights took place near Kitty Hawk, North Carolina. The brothers were from Dayton, Ohio.", "https://www.britannica.com/biography/Wright-brothers"),
        q("in-web", "Tim Berners-Lee is credited with inventing what?", ["Email", "Wi-Fi", "The smartphone", "The World Wide Web"], 3, "Berners-Lee proposed the World Wide Web at CERN in 1989. The internet itself is older.", "https://www.britannica.com/topic/World-Wide-Web"),
        q("in-fleming", "Alexander Fleming discovered which medicine in 1928?", ["Insulin", "Penicillin", "Aspirin", "Morphine"], 1, "Fleming noticed that a mold killed bacteria in a dish. That mold led to penicillin.", "https://www.britannica.com/biography/Alexander-Fleming"),
      ] },
      { title: "Everyday tech", questions: [
        q("in-gps", "What does GPS stand for?", ["Geographic Pathfinding Service", "General Position Signal", "Global Positioning System", "Global Pointing Satellite"], 2, "GPS is the Global Positioning System, a satellite network that lets receivers work out their location.", "https://www.gps.gov/systems/gps/"),
        q("in-pencil", "What is the writing core of a modern “lead” pencil made from?", ["Lead", "Tin", "Charcoal", "Graphite and clay"], 3, "Pencil cores are graphite mixed with clay. They have never contained the metal lead.", "https://www.britannica.com/technology/pencil"),
        q("in-led", "What does LED stand for?", ["Light-emitting diode", "Low-energy display", "Laser electric device", "Linear electron drive"], 0, "An LED is a light-emitting diode, a semiconductor that glows when current passes through it.", "https://www.britannica.com/technology/light-emitting-diode"),
        q("in-watt", "Which unit is used to measure power, as on a light bulb?", ["Volt", "Watt", "Ampere", "Ohm"], 1, "The watt is the SI unit of power. Volts measure voltage, amperes measure current, and ohms measure resistance.", "https://www.nist.gov/pml/owm/metric-si/si-units"),
      ] },
    ],
  },
  {
    id: "body-basics",
    title: "Body Basics",
    blurb: "Anatomy facts from bones to blood. No health advice, just how bodies are built.",
    defaults: { scoring: "accuracy", timeLimitSec: 25 },
    rounds: [
      { title: "Frame and covering", questions: [
        q("bb-skin", "What is the largest organ of the human body?", ["Skin", "Brain", "Liver", "Lungs"], 0, "Skin is the largest organ by surface area and weight.", "https://www.britannica.com/science/human-skin"),
        q("bb-bones", "How many bones does a typical adult human skeleton have?", ["406", "306", "206", "106"], 2, "Adults typically have 206 bones. Babies start with more, and some fuse as they grow.", "https://www.britannica.com/science/human-skeleton"),
        q("bb-stapes", "Where is the smallest bone in the human body?", ["In the finger", "In the toe", "In the nose", "In the ear"], 3, "The stapes, one of three tiny bones in the middle ear, is the smallest.", "https://www.britannica.com/science/stapes"),
        q("bb-enamel", "What is the hardest substance in the human body?", ["Bone", "Tooth enamel", "Fingernail", "Cartilage"], 1, "Tooth enamel is the hardest tissue in the body.", "https://www.britannica.com/science/enamel-tooth"),
      ] },
      { title: "Inner workings", questions: [
        q("bb-rbc", "Which blood cells carry oxygen around the body?", ["Plasma cells", "White blood cells", "Platelets", "Red blood cells"], 3, "Red blood cells carry oxygen using hemoglobin.", "https://www.britannica.com/science/red-blood-cell"),
        q("bb-heart", "How many chambers does the human heart have?", ["Two", "Three", "Four", "Six"], 2, "The heart has two atria and two ventricles.", "https://www.britannica.com/science/heart"),
        q("bb-pancreas", "Which organ produces the hormone insulin?", ["Pancreas", "Liver", "Kidney", "Stomach"], 0, "Insulin is made by cells in the pancreas.", "https://www.britannica.com/science/pancreas"),
        q("bb-iris", "Which part of the eye controls how much light gets in?", ["Retina", "Iris", "Cornea", "Lens"], 1, "The iris widens or narrows the pupil to let in more or less light.", "https://www.britannica.com/science/iris-eye"),
      ] },
    ],
  },
  {
    id: "weather-water",
    title: "Weather and Water",
    blurb: "Storms, tides and the deep sea. Good with a science class or family table.",
    defaults: { scoring: "accuracy", timeLimitSec: 25 },
    rounds: [
      { title: "Weather", questions: [
        q("wx-barometer", "Which instrument measures air pressure?", ["Thermometer", "Hygrometer", "Anemometer", "Barometer"], 3, "A barometer measures air pressure. An anemometer measures wind speed.", "https://www.britannica.com/technology/barometer"),
        q("wx-cumulonimbus", "Which type of cloud produces thunderstorms?", ["Cumulonimbus", "Stratus", "Cirrus", "Altostratus"], 0, "Tall cumulonimbus clouds produce thunder, lightning and heavy rain.", "https://www.britannica.com/science/cumulonimbus-cloud"),
        q("wx-thunder", "What causes the sound of thunder?", ["Clouds colliding", "Air heated by lightning expanding", "Raindrops freezing", "Wind hitting the ground"], 1, "Lightning heats air so quickly that it expands violently, and that shock wave is thunder.", "https://www.weather.gov/safety/lightning-science-thunder"),
        q("wx-ef", "Which scale rates tornado strength in the United States?", ["Richter scale", "Beaufort scale", "Enhanced Fujita scale", "Saffir–Simpson scale"], 2, "Tornadoes are rated EF0 to EF5 from the damage they cause.", "https://www.weather.gov/oun/efscale"),
      ] },
      { title: "Oceans", questions: [
        q("wx-mariana", "The deepest known point in the ocean is in which trench?", ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Tonga Trench"], 0, "Challenger Deep, in the Mariana Trench in the western Pacific, is the deepest known point.", "https://www.britannica.com/place/Mariana-Trench"),
        q("wx-coverage", "About how much of Earth's surface is covered by water?", ["About 30%", "About 50%", "About 70%", "About 90%"], 2, "Roughly 71 percent of Earth's surface is water-covered, mostly ocean.", "https://www.usgs.gov/special-topics/water-science-school/science/how-much-water-there-earth"),
        q("wx-tides", "What mainly causes ocean tides?", ["Wind", "Underwater volcanoes", "Earth's magnetic field", "The Moon's gravity"], 3, "Tides come mostly from the Moon's gravitational pull, with a smaller effect from the Sun.", "https://oceanservice.noaa.gov/education/tutorial_tides/"),
        q("wx-reef", "Which is the world's largest coral reef system?", ["Belize Barrier Reef", "Great Barrier Reef", "Red Sea Reef", "Florida Reef"], 1, "The Great Barrier Reef stretches more than 2,000 km off northeastern Australia.", "https://www.britannica.com/place/Great-Barrier-Reef"),
      ] },
    ],
  },
  {
    id: "art-and-music",
    title: "Art and Music Classics",
    blurb: "Famous paintings, composers and how music is written down.",
    defaults: { scoring: "accuracy", timeLimitSec: 25 },
    rounds: [
      { title: "Gallery", questions: [
        q("am-monalisa", "Who painted the Mona Lisa?", ["Michelangelo", "Leonardo da Vinci", "Raphael", "Titian"], 1, "Leonardo da Vinci painted the Mona Lisa in the early 1500s. It hangs in the Louvre.", "https://www.britannica.com/topic/Mona-Lisa-painting"),
        q("am-starry", "Who painted The Starry Night (1889)?", ["Claude Monet", "Edvard Munch", "Paul Cézanne", "Vincent van Gogh"], 3, "Van Gogh painted The Starry Night in 1889. It is now at the Museum of Modern Art in New York.", "https://www.moma.org/collection/works/79802"),
        q("am-sistine", "Michelangelo painted the ceiling of which chapel?", ["Sistine Chapel", "Sainte-Chapelle", "Rosslyn Chapel", "Brancacci Chapel"], 0, "Michelangelo painted the Sistine Chapel ceiling in Vatican City between 1508 and 1512.", "https://www.britannica.com/topic/Sistine-Chapel"),
        q("am-monet", "Which painter is famous for many paintings of water lilies?", ["Henri Matisse", "Georgia O'Keeffe", "Claude Monet", "Pablo Picasso"], 2, "Monet painted the water-lily pond at his garden in Giverny for decades.", "https://www.britannica.com/biography/Claude-Monet"),
      ] },
      { title: "Concert hall", questions: [
        q("am-piano", "How many keys does a standard modern piano have?", ["92", "88", "82", "76"], 1, "A standard modern piano has 88 keys: 52 white and 36 black.", "https://www.britannica.com/art/piano"),
        q("am-beethoven", "Which composer kept writing major works, including his Ninth Symphony, after losing most of his hearing?", ["Beethoven", "Bach", "Mozart", "Chopin"], 0, "Beethoven's hearing declined from his late 20s. He completed the Ninth Symphony in 1824.", "https://www.britannica.com/biography/Ludwig-van-Beethoven"),
        q("am-staff", "How many lines does a standard musical staff have?", ["Seven", "Six", "Five", "Four"], 2, "Modern notation uses a five-line staff.", "https://www.britannica.com/art/staff-music"),
        q("am-violin", "The violin belongs to which instrument family?", ["Woodwind", "Brass", "Percussion", "Strings"], 3, "The violin is the smallest and highest-pitched member of the bowed string family.", "https://www.britannica.com/art/violin"),
      ] },
    ],
  },
  {
    id: "number-sense",
    title: "Number Sense",
    blurb: "Shapes, primes and patterns. Quick thinking, no calculators needed.",
    defaults: { scoring: "timed", timeLimitSec: 25 },
    rounds: [
      { title: "Shapes and numbers", questions: [
        q("nm-hexagon", "How many sides does a hexagon have?", ["Six", "Five", "Seven", "Eight"], 0, "Hexa- means six. Honeycomb cells are a familiar example.", "https://www.merriam-webster.com/dictionary/hexagon"),
        q("nm-prime", "What is the only even prime number?", ["0", "2", "4", "6"], 1, "Every other even number divides by 2, so 2 is the only even prime.", "https://www.britannica.com/science/prime-number"),
        q("nm-pi", "What is pi rounded to two decimal places?", ["3.12", "3.16", "3.41", "3.14"], 3, "Pi, the ratio of a circle's circumference to its diameter, begins 3.14159…", "https://www.britannica.com/science/pi-mathematics"),
        q("nm-triangle", "In flat (Euclidean) geometry, a triangle's interior angles add up to how many degrees?", ["360", "270", "180", "90"], 2, "On a flat plane, a triangle's three angles always total 180 degrees.", "https://www.britannica.com/science/Euclidean-geometry"),
      ] },
      { title: "Patterns", questions: [
        q("nm-roman", "Which number does the Roman numeral L stand for?", ["50", "5", "100", "500"], 0, "In Roman numerals, L stands for 50, C for 100 and D for 500.", "https://www.britannica.com/topic/Roman-numeral"),
        q("nm-million", "How many zeros are in one million written as a numeral?", ["Five", "Seven", "Nine", "Six"], 3, "One million is 1,000,000: a one followed by six zeros.", "https://www.merriam-webster.com/dictionary/million"),
        q("nm-gross", "A “gross” is a dozen dozens. How many is that?", ["100", "120", "144", "156"], 2, "12 × 12 = 144.", "https://www.merriam-webster.com/dictionary/gross"),
        q("nm-fib", "What comes next: 1, 1, 2, 3, 5, 8, …?", ["16", "13", "12", "11"], 1, "Each number is the sum of the two before it (5 + 8 = 13). This is the Fibonacci sequence.", "https://www.britannica.com/science/Fibonacci-number"),
      ] },
    ],
  },
]);

const REVEAL_ALLOWANCE_SEC = 35; // reading, reveal, explanation, standings

/** Public metadata only. Never includes prompts, options, keys or sources. */
export function catalogMetadata(sessions = LIVE_SESSIONS) {
  return sessions.map((s) => {
    const questionCount = s.rounds.reduce((n, r) => n + r.questions.length, 0);
    const perQuestion = s.defaults.timeLimitSec + REVEAL_ALLOWANCE_SEC;
    return {
      id: s.id,
      title: s.title,
      blurb: s.blurb,
      audience: "Adults and families",
      format: "Individual players or teams",
      rounds: s.rounds.map((r) => r.title),
      questionCount,
      durationMin: Math.max(5, Math.round((questionCount * perQuestion) / 60)),
      defaults: { scoring: s.defaults.scoring, timeLimitSec: s.defaults.timeLimitSec, extendedTimeSec: s.defaults.timeLimitSec * 2 },
    };
  });
}
