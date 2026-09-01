/**
 * This-or-that pairs: two-option factual trivia.
 *
 * Convention: `a` is ALWAYS the correct answer in this file. The daily
 * generator swaps presentation sides deterministically, so the data stays
 * auditable (scan any entry: `a` must be right, `fact` states why).
 *
 * Fact-check discipline: only wide-margin, textbook-stable facts. Every entry
 * carries its quantitative basis in `fact` so a reviewer can audit the list
 * without leaving the file. Close calls (Nile vs Amazon length, sailfish top
 * speed, California vs Canada population) were deliberately excluded.
 */

export type ThisOrThatPair = {
  id: string;
  q: string;
  /** Correct answer. */
  a: string;
  /** Wrong answer. */
  b: string;
  /** One-line why, shown after answering. */
  fact: string;
};

export const THIS_OR_THAT_PAIRS: ThisOrThatPair[] = [
  // Space
  { id: "tt001", q: "Which is bigger?", a: "Jupiter", b: "Saturn", fact: "Jupiter's radius is about 69,900 km; Saturn's is about 58,200 km." },
  { id: "tt002", q: "Which is bigger?", a: "Saturn", b: "Neptune", fact: "Saturn's radius is about 58,200 km; Neptune's is about 24,600 km." },
  { id: "tt003", q: "Which is bigger?", a: "Neptune", b: "Earth", fact: "Neptune's radius is about 24,600 km; Earth's is about 6,400 km." },
  { id: "tt004", q: "Which is bigger?", a: "Earth", b: "Mars", fact: "Earth's radius is about 6,400 km; Mars is about 3,400 km." },
  { id: "tt005", q: "Which is bigger?", a: "Mars", b: "Mercury", fact: "Mars has a radius of about 3,400 km; Mercury about 2,400 km." },
  { id: "tt006", q: "Which is bigger?", a: "The Sun", b: "Jupiter", fact: "The Sun is about 10 times wider than Jupiter." },
  { id: "tt007", q: "Which is bigger?", a: "Earth's Moon", b: "Pluto", fact: "The Moon's diameter is about 3,470 km; Pluto's is about 2,380 km." },
  { id: "tt008", q: "Which is wider?", a: "Ganymede (Jupiter's moon)", b: "Mercury", fact: "Ganymede is about 5,270 km across; Mercury about 4,880 km. A moon bigger than a planet." },
  { id: "tt009", q: "Which is farther from the Sun?", a: "Neptune", b: "Uranus", fact: "Neptune orbits at about 30 AU; Uranus at about 19 AU." },
  { id: "tt010", q: "Which is farther from the Sun?", a: "Mars", b: "Venus", fact: "Mars orbits at about 1.5 AU; Venus at about 0.7 AU." },
  { id: "tt011", q: "Which has the hotter surface?", a: "Venus", b: "Mercury", fact: "Venus averages about 465 C thanks to its greenhouse atmosphere; Mercury peaks near 430 C." },
  { id: "tt012", q: "Which has more moons?", a: "Saturn", b: "Earth", fact: "Saturn has over 140 known moons; Earth has one." },
  { id: "tt013", q: "Which is older?", a: "The Sun", b: "The Earth", fact: "The Sun formed first, about 4.6 billion years ago; Earth followed at about 4.54 billion." },
  { id: "tt014", q: "Which is taller?", a: "Olympus Mons (on Mars)", b: "Mount Everest", fact: "Olympus Mons rises about 22 km; Everest about 8.8 km." },
  { id: "tt015", q: "Which is farther from Earth?", a: "The Moon", b: "The International Space Station", fact: "The Moon is about 384,000 km away; the ISS orbits about 400 km up." },
  { id: "tt016", q: "Which moves faster?", a: "The International Space Station", b: "A jet airliner", fact: "The ISS orbits at about 28,000 km/h; airliners cruise near 900 km/h." },

  // Countries and area
  { id: "tt017", q: "Which is bigger by area?", a: "Russia", b: "Canada", fact: "Russia covers about 17.1 million sq km; Canada about 10 million." },
  { id: "tt018", q: "Which is bigger by area?", a: "Canada", b: "The United States", fact: "Canada covers about 9.98 million sq km; the US about 9.83 million." },
  { id: "tt019", q: "Which is bigger by area?", a: "Brazil", b: "Australia", fact: "Brazil covers about 8.5 million sq km; Australia about 7.7 million." },
  { id: "tt020", q: "Which is bigger by area?", a: "China", b: "India", fact: "China covers about 9.6 million sq km; India about 3.3 million." },
  { id: "tt021", q: "Which is bigger by area?", a: "Algeria", b: "Egypt", fact: "Algeria covers about 2.4 million sq km; Egypt about 1 million. Algeria is Africa's largest country." },
  { id: "tt022", q: "Which is bigger by area?", a: "Mongolia", b: "France", fact: "Mongolia covers about 1.56 million sq km; France about 0.64 million." },
  { id: "tt023", q: "Which is bigger by area?", a: "Texas", b: "France (in Europe)", fact: "Texas covers about 696,000 sq km; metropolitan France about 552,000." },
  { id: "tt024", q: "Which is bigger by area?", a: "Alaska", b: "Texas", fact: "Alaska covers about 1.7 million sq km, more than twice Texas." },
  { id: "tt025", q: "Which is bigger by area?", a: "Greenland", b: "Madagascar", fact: "Greenland covers about 2.17 million sq km; Madagascar about 0.59 million." },
  { id: "tt026", q: "Which is bigger by area?", a: "Africa", b: "Europe", fact: "Africa covers about 30 million sq km; Europe about 10 million." },
  { id: "tt027", q: "Which has more countries?", a: "Africa", b: "South America", fact: "Africa has 54 countries; South America has 12." },
  { id: "tt028", q: "Which has the longer coastline?", a: "Canada", b: "The United States", fact: "Canada has the longest coastline on Earth, about 202,000 km." },
  { id: "tt029", q: "Which has more time zones (counting territories)?", a: "France", b: "The United States", fact: "France spans 12 time zones thanks to overseas territories; the US spans 11." },
  { id: "tt030", q: "Which has more islands?", a: "Sweden", b: "Greece", fact: "Sweden counts over 260,000 islands; Greece has about 6,000." },

  // Population
  { id: "tt031", q: "Which has more people?", a: "India", b: "China", fact: "India passed China in 2023 and has over 1.4 billion people." },
  { id: "tt032", q: "Which has more people?", a: "The United States", b: "Indonesia", fact: "The US has about 340 million people; Indonesia about 280 million." },
  { id: "tt033", q: "Which has more people?", a: "Nigeria", b: "Brazil", fact: "Nigeria has about 230 million people; Brazil about 215 million." },
  { id: "tt034", q: "Which has more people?", a: "Japan", b: "Canada", fact: "Japan has about 124 million people; Canada about 40 million." },
  { id: "tt035", q: "Which has more people?", a: "Mexico", b: "Spain", fact: "Mexico has about 130 million people; Spain about 48 million." },
  { id: "tt036", q: "Which metro area has more people?", a: "Tokyo", b: "New York City", fact: "Greater Tokyo has about 37 million people; the New York metro about 20 million." },
  { id: "tt037", q: "Which city has more people?", a: "Lagos", b: "London", fact: "Lagos has well over 15 million people; Greater London about 9.6 million." },

  // Physical geography
  { id: "tt038", q: "Which river is longer?", a: "The Amazon", b: "The Mississippi", fact: "The Amazon runs about 6,400 km; the Mississippi about 3,800 km." },
  { id: "tt039", q: "Which river is longer?", a: "The Nile", b: "The Danube", fact: "The Nile runs about 6,650 km; the Danube about 2,850 km." },
  { id: "tt040", q: "Which mountain is taller?", a: "Mount Everest", b: "K2", fact: "Everest stands 8,849 m; K2 stands 8,611 m." },
  { id: "tt041", q: "Which mountain is taller?", a: "Kilimanjaro", b: "Mont Blanc", fact: "Kilimanjaro stands 5,895 m; Mont Blanc 4,806 m." },
  { id: "tt042", q: "Which ocean is deeper?", a: "The Pacific", b: "The Atlantic", fact: "The Pacific holds the Mariana Trench, nearly 11 km deep." },
  { id: "tt043", q: "Which ocean is bigger?", a: "The Pacific", b: "The Atlantic", fact: "The Pacific covers about 165 million sq km, roughly double the Atlantic." },
  { id: "tt044", q: "Which lake is bigger?", a: "Lake Superior", b: "Lake Ontario", fact: "Superior covers about 82,000 sq km; Ontario about 19,000." },
  { id: "tt045", q: "Which lake is bigger by area?", a: "Lake Superior", b: "Lake Victoria", fact: "Superior covers about 82,000 sq km; Victoria about 68,000. Superior is the largest freshwater lake by area." },
  { id: "tt046", q: "Which desert is bigger?", a: "The Sahara", b: "The Gobi", fact: "The Sahara covers about 9.2 million sq km; the Gobi about 1.3 million." },
  { id: "tt047", q: "Which is colder on average?", a: "The South Pole", b: "The North Pole", fact: "The South Pole sits on a high ice sheet and averages far colder than the sea-level Arctic." },

  // Cities and position on the map
  { id: "tt048", q: "Which is farther north?", a: "Iceland", b: "Ireland", fact: "Iceland sits near 64 N; Ireland near 53 N." },
  { id: "tt049", q: "Which reaches farther south?", a: "New Zealand", b: "South Africa", fact: "New Zealand's south reaches about 47 S; South Africa ends near 35 S." },
  { id: "tt050", q: "Which is farther west?", a: "Los Angeles", b: "Las Vegas", fact: "Los Angeles sits near 118 W; Las Vegas near 115 W." },
  { id: "tt051", q: "Which is farther north?", a: "London", b: "New York City", fact: "London sits near 51.5 N; New York near 40.7 N." },
  { id: "tt052", q: "Which is farther north?", a: "Paris", b: "Montreal", fact: "Paris sits near 48.9 N; Montreal near 45.5 N." },
  { id: "tt053", q: "Which is farther east?", a: "Maine", b: "Florida", fact: "Maine holds the easternmost point of the lower 48, near 67 W; Florida sits near 80 W." },

  // Landmarks
  { id: "tt054", q: "Which is taller?", a: "The Eiffel Tower", b: "The Statue of Liberty", fact: "The Eiffel Tower is 330 m; the Statue of Liberty 93 m including the base." },
  { id: "tt055", q: "Which is taller?", a: "The Burj Khalifa", b: "The Empire State Building", fact: "The Burj Khalifa is 828 m; the Empire State Building about 443 m to its tip." },
  { id: "tt056", q: "Which is taller?", a: "The Shanghai Tower", b: "The Eiffel Tower", fact: "The Shanghai Tower is 632 m; the Eiffel Tower 330 m." },
  { id: "tt057", q: "Which road is longer?", a: "The Trans-Canada Highway", b: "Route 66", fact: "The Trans-Canada runs about 7,480 km; Route 66 ran about 3,940 km." },

  // Animals
  { id: "tt058", q: "Which is bigger?", a: "A blue whale", b: "An African elephant", fact: "Blue whales reach about 150 tonnes; elephants top out near 6 tonnes." },
  { id: "tt059", q: "Which is heavier?", a: "An African elephant", b: "A hippo", fact: "Elephants reach about 6 tonnes; hippos about 1.5 to 3 tonnes." },
  { id: "tt060", q: "Which is faster?", a: "A cheetah", b: "A lion", fact: "Cheetahs sprint at 100 km/h and beyond; lions near 80 km/h." },
  { id: "tt061", q: "Which is faster in a sprint?", a: "A cheetah", b: "A racehorse", fact: "Cheetahs hit about 100 km/h; racehorses about 70 km/h." },
  { id: "tt062", q: "Which is faster?", a: "A peregrine falcon in a dive", b: "A cheetah", fact: "Peregrines dive at over 300 km/h, the fastest animal on Earth." },
  { id: "tt063", q: "Which is taller?", a: "A giraffe", b: "An elephant", fact: "Giraffes reach about 5.5 m; elephants about 4 m at the shoulder." },
  { id: "tt064", q: "Which is heavier?", a: "A polar bear", b: "A gorilla", fact: "Male polar bears reach 450 kg and beyond; gorillas about 180 kg." },
  { id: "tt065", q: "Which is heavier on average?", a: "A grizzly bear", b: "A lion", fact: "Male grizzlies average around 250 to 350 kg; male lions about 190 kg." },
  { id: "tt066", q: "Which lives longer?", a: "A Galapagos tortoise", b: "A dog", fact: "Galapagos tortoises can pass 100 years; dogs live about 10 to 13." },
  { id: "tt067", q: "Which has more legs?", a: "A spider", b: "An insect", fact: "Spiders have 8 legs; insects have 6." },
  { id: "tt068", q: "Which is longer?", a: "A reticulated python", b: "A king cobra", fact: "Reticulated pythons can pass 7 m, the longest snakes; king cobras top out near 5.5 m." },
  { id: "tt069", q: "Which has the bigger wingspan?", a: "A wandering albatross", b: "A bald eagle", fact: "The albatross spans up to 3.5 m, the largest of any living bird; bald eagles about 2.3 m." },
  { id: "tt070", q: "Which sleeps more?", a: "A koala", b: "A horse", fact: "Koalas sleep 18 to 22 hours a day; horses about 3." },
  { id: "tt071", q: "Which swims faster?", a: "A sailfish", b: "An Olympic swimmer", fact: "Sailfish burst far past 40 km/h; elite humans swim about 8 km/h." },
  { id: "tt072", q: "Who has more taste buds?", a: "A catfish", b: "A human", fact: "Catfish carry over 100,000 taste buds across their bodies; humans have about 10,000." },
  { id: "tt073", q: "Who has more teeth?", a: "An adult dog", b: "An adult human", fact: "Adult dogs have 42 teeth; adult humans have 32." },
  { id: "tt074", q: "Who has more chromosomes?", a: "A dog", b: "A human", fact: "Dogs have 78 chromosomes; humans have 46." },

  // History and firsts
  { id: "tt075", q: "Which is older?", a: "The Great Pyramid of Giza", b: "The Colosseum", fact: "The Great Pyramid dates to about 2560 BC; the Colosseum to about 80 AD." },
  { id: "tt076", q: "Which is older?", a: "Stonehenge", b: "The Great Wall of China", fact: "Stonehenge began around 3000 BC; the earliest Great Wall sections date to about the 7th century BC." },
  { id: "tt077", q: "Which was invented first?", a: "The telephone", b: "The airplane", fact: "Bell patented the telephone in 1876; the Wright brothers flew in 1903." },
  { id: "tt078", q: "Which came first?", a: "The printing press", b: "The steam engine", fact: "Gutenberg's press arrived in the 1440s; Newcomen's steam engine in 1712." },
  { id: "tt079", q: "Which came first?", a: "Television", b: "The internet", fact: "The first TV demonstrations came in the 1920s; the internet's ancestor ARPANET launched in 1969." },
  { id: "tt080", q: "Which happened first?", a: "The Titanic sank", b: "World War I began", fact: "The Titanic sank in April 1912; World War I began in July 1914." },
  { id: "tt081", q: "Which came first?", a: "The first Moon landing", b: "The first iPhone", fact: "Apollo 11 landed in 1969; the iPhone launched in 2007." },
  { id: "tt082", q: "Which is older?", a: "Harvard University", b: "The United States", fact: "Harvard was founded in 1636, 140 years before the Declaration of Independence." },
  { id: "tt083", q: "Which came first?", a: "The Great Pyramid", b: "The Roman Empire", fact: "The pyramid was already over 2,500 years old when the Roman Empire began." },
  { id: "tt084", q: "Which came first on Earth?", a: "Sharks", b: "Dinosaurs", fact: "Sharks appeared about 450 million years ago; dinosaurs about 240 million." },
  { id: "tt085", q: "Which lived earlier?", a: "Stegosaurus", b: "Tyrannosaurus rex", fact: "Stegosaurus lived about 150 million years ago; T. rex about 67 million. T. rex is closer in time to you than to Stegosaurus." },
  { id: "tt086", q: "Which is older?", a: "The Eiffel Tower", b: "The Golden Gate Bridge", fact: "The Eiffel Tower opened in 1889; the Golden Gate Bridge in 1937." },
  { id: "tt087", q: "Which came first?", a: "Coca-Cola", b: "The zipper", fact: "Coca-Cola launched in 1886; the first zipper design came in 1893." },
  { id: "tt088", q: "Which came first?", a: "Pokemon games", b: "Minecraft", fact: "Pokemon Red and Green launched in 1996; Minecraft's full release came in 2011." },
  { id: "tt089", q: "Which came first?", a: "YouTube", b: "TikTok", fact: "YouTube launched in 2005; TikTok went global in 2016 and 2017." },
  { id: "tt090", q: "Which came first?", a: "Instagram", b: "Snapchat", fact: "Instagram launched in October 2010; Snapchat in 2011." },
  { id: "tt091", q: "Which company is older?", a: "Nintendo", b: "Sony", fact: "Nintendo started in 1889 as a playing-card company; Sony was founded in 1946." },
  { id: "tt092", q: "Which came first?", a: "The Wright brothers' first flight", b: "The Ford Model T", fact: "The first flight was in 1903; the Model T arrived in 1908." },
  { id: "tt093", q: "Which became a US state first?", a: "Alaska", b: "Hawaii", fact: "Alaska became the 49th state in January 1959; Hawaii the 50th that August." },

  // Science and measures
  { id: "tt094", q: "Which body part has more bones?", a: "A human hand", b: "A human foot", fact: "The hand has 27 bones; the foot has 26." },
  { id: "tt095", q: "Who has more bones?", a: "A baby", b: "An adult", fact: "Babies start with about 300 bones; many fuse to leave adults with 206." },
  { id: "tt096", q: "Which do you have more of?", a: "Muscles", b: "Bones", fact: "The body has over 600 muscles and 206 bones." },
  { id: "tt097", q: "Which is your biggest organ?", a: "Skin", b: "Liver", fact: "Skin is the body's largest organ, several kilograms of it." },
  { id: "tt098", q: "Which grows faster?", a: "Hair", b: "Fingernails", fact: "Hair grows about 1.2 cm a month; nails about 0.35 cm." },
  { id: "tt099", q: "Which is longer?", a: "An inch", b: "A centimeter", fact: "An inch is 2.54 cm." },
  { id: "tt100", q: "Which is longer?", a: "A mile", b: "A kilometer", fact: "A mile is about 1.6 km." },
  { id: "tt101", q: "Which is heavier?", a: "A kilogram", b: "A pound", fact: "A kilogram is about 2.2 pounds." },
  { id: "tt102", q: "Which is faster?", a: "Light", b: "Sound", fact: "Light travels about 300,000 km per second; sound about 343 m per second in air." },
  { id: "tt103", q: "Which makes up more of the air?", a: "Nitrogen", b: "Oxygen", fact: "Air is about 78 percent nitrogen and 21 percent oxygen." },
  { id: "tt104", q: "Which mineral is harder?", a: "Diamond", b: "Quartz", fact: "Diamond is 10 on the Mohs scale; quartz is 7." },
  { id: "tt105", q: "Which is longer?", a: "100,000 seconds", b: "One day", fact: "100,000 seconds is about 27.8 hours; a day is 86,400 seconds." },
  { id: "tt106", q: "Which weighs more?", a: "A liter of water", b: "A can of soda", fact: "A liter of water weighs 1 kg; a full can is about 0.4 kg." },

  // US and world civics
  { id: "tt107", q: "Which country borders more US states?", a: "Canada", b: "Mexico", fact: "Canada borders 13 US states; Mexico borders 4." },
  { id: "tt108", q: "Which city has more people?", a: "New York City", b: "Los Angeles", fact: "New York has about 8.3 million people; Los Angeles about 3.9 million." },
  { id: "tt109", q: "Which state has more people?", a: "California", b: "Texas", fact: "California has about 39 million people; Texas about 31 million." },
  { id: "tt110", q: "Which state is smaller?", a: "Rhode Island", b: "Delaware", fact: "Rhode Island is the smallest US state at about 4,000 sq km; Delaware covers about 6,400." },
  { id: "tt111", q: "Which is Australia's capital?", a: "Canberra", b: "Sydney", fact: "Canberra was purpose-built as the capital; Sydney is just the biggest city." },
  { id: "tt112", q: "Which is Canada's capital?", a: "Ottawa", b: "Toronto", fact: "Ottawa is the capital; Toronto is the biggest city." },
  { id: "tt113", q: "Which is Turkey's capital?", a: "Ankara", b: "Istanbul", fact: "Ankara became the capital in 1923; Istanbul is the biggest city." },
  { id: "tt114", q: "Which is Brazil's capital?", a: "Brasilia", b: "Rio de Janeiro", fact: "Brasilia took over as capital in 1960." },
  { id: "tt115", q: "Which is Switzerland's capital?", a: "Bern", b: "Zurich", fact: "Bern is the federal city; Zurich is the biggest city." },
  { id: "tt116", q: "Which is New Zealand's capital?", a: "Wellington", b: "Auckland", fact: "Wellington is the capital; Auckland is the biggest city." },
  { id: "tt117", q: "Which is Morocco's capital?", a: "Rabat", b: "Casablanca", fact: "Rabat is the capital; Casablanca is the biggest city." },

  // Food, music, sports, everyday
  { id: "tt118", q: "Which has more caffeine per cup?", a: "Coffee", b: "Black tea", fact: "A cup of coffee has about 95 mg of caffeine; black tea about 47 mg." },
  { id: "tt119", q: "Which has more vitamin C per 100 g?", a: "Kiwi", b: "Apple", fact: "Kiwi has about 90 mg per 100 g; apple has about 5 mg." },
  { id: "tt120", q: "Which is botanically a berry?", a: "A banana", b: "A strawberry", fact: "Bananas qualify as berries; strawberries do not (their seeds sit outside)." },
  { id: "tt121", q: "Which has more strings?", a: "A guitar", b: "A violin", fact: "A standard guitar has 6 strings; a violin has 4." },
  { id: "tt122", q: "Which has more keys?", a: "A full computer keyboard", b: "A piano", fact: "A full-size keyboard has 104 keys; a piano has 88." },
  { id: "tt123", q: "Which alphabet has more letters?", a: "English", b: "Greek", fact: "English has 26 letters; Greek has 24." },
  { id: "tt124", q: "Which shape has more sides?", a: "An octagon", b: "A hexagon", fact: "An octagon has 8 sides; a hexagon has 6." },
  { id: "tt125", q: "Which month has more days?", a: "July", b: "June", fact: "July has 31 days; June has 30." },
  { id: "tt126", q: "Which team puts more players on the field?", a: "Soccer", b: "Basketball", fact: "Soccer fields 11 per side; basketball plays 5 per side." },
  { id: "tt127", q: "Which fields more players per side?", a: "American football", b: "Baseball", fact: "Football fields 11 per side; baseball fields 9." },
  { id: "tt128", q: "Which game has more regulation playing time?", a: "A soccer match", b: "An NBA game", fact: "Soccer runs 90 minutes; an NBA game clock runs 48." },
  { id: "tt129", q: "Which ball is bigger?", a: "A basketball", b: "A soccer ball", fact: "A basketball is about 24 cm across; a soccer ball about 22 cm." },
  { id: "tt130", q: "Which ball is heavier?", a: "A bowling ball", b: "A basketball", fact: "Bowling balls run up to 7.2 kg; a basketball weighs about 0.6 kg." },
  { id: "tt131", q: "Who has more Olympic gold medals?", a: "Michael Phelps", b: "Usain Bolt", fact: "Phelps won 23 golds; Bolt won 8." },
  { id: "tt132", q: "Which country has hosted more Summer Olympics?", a: "The United States", b: "Canada", fact: "The US has hosted 4 Summer Games; Canada has hosted 1 (Montreal 1976)." },
];
