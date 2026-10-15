/**
 * Movie and movie-character quizzes: 15 original sets of 8 questions.
 *
 * Every prompt, joke, wrong answer and explanation is original TypologyQuiz
 * writing. Facts come from official studio or franchise pages (movies.disney.com,
 * sonypictures.com, starwars.com Databank). Each question records the page it
 * leans on, the claim that page supports, and the terms the source check looks
 * for (scripts/verify-movie-sources.mts). No film dialogue, posters, stills or
 * actor likenesses are used.
 *
 * Named editions (year in the title) keep remakes unambiguous.
 */

export type MovieChoiceId = "a" | "b" | "c" | "d";
export const MOVIE_CHOICE_IDS: readonly MovieChoiceId[] = ["a", "b", "c", "d"];

export type MovieChoice = { id: MovieChoiceId; text: string };
export type MovieSource = {
  /** Visible link text, e.g. "Official Disney page: Toy Story". */
  label: string;
  url: string;
  /** The specific fact this page supports. */
  claim: string;
  /** Lowercase fragments the source check expects to find on the page. */
  terms: readonly string[];
};
export type MovieQuestion = {
  id: string;
  prompt: string;
  choices: readonly [MovieChoice, MovieChoice, MovieChoice, MovieChoice];
  correctId: MovieChoiceId;
  explanation: string;
  source: MovieSource;
};

export type MovieMotif =
  | "clapper" | "ticket" | "badge" | "compass" | "sidekick" | "mask" | "key" | "map"
  | "hearts" | "rocket" | "wand" | "clock" | "house" | "vault" | "sequel";

export type MovieQuiz = {
  slug: string;
  title: string;
  /** Short label for cards and breadcrumbs. */
  shortTitle: string;
  tagline: string;
  seoDescription: string;
  /** Plain statement of how much of each film the questions reveal. */
  spoilerNote: string;
  featuring: readonly string[];
  accent: string;
  motif: MovieMotif;
  related: readonly string[];
  questions: readonly MovieQuestion[];
};

export const MOVIE_QUIZ_QUESTION_COUNT = 8;

type SourceInput = [slug: string, title: string, claim: string, terms: string[]];
const disney = ([slug, title, claim, terms]: SourceInput): MovieSource => ({ label: `Official Disney page: ${title}`, url: `https://movies.disney.com/${slug}`, claim, terms });
const sony = ([slug, title, claim, terms]: SourceInput): MovieSource => ({ label: `Official Sony Pictures page: ${title}`, url: `https://www.sonypictures.com/movies/${slug}`, claim, terms });
const starwars = ([slug, title, claim, terms]: SourceInput): MovieSource => ({ label: `StarWars.com Databank: ${title}`, url: `https://www.starwars.com/databank/${slug}`, claim, terms });
const starwarsFilm = ([slug, title, claim, terms]: SourceInput): MovieSource => ({ label: `StarWars.com film page: ${title}`, url: `https://www.starwars.com/films/${slug}`, claim, terms });

/** Where the correct answer sits is fixed per question id, so builds are reproducible. */
function slotFor(id: string): number {
  let sum = 0;
  for (const ch of id) sum = (sum * 31 + ch.charCodeAt(0)) >>> 0;
  return sum % 4;
}

function q(id: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string, source: MovieSource): MovieQuestion {
  const slot = slotFor(id);
  const texts = [...wrong];
  texts.splice(slot, 0, correct);
  const choices = texts.map((text, index) => ({ id: MOVIE_CHOICE_IDS[index], text })) as unknown as MovieQuestion["choices"];
  return { id, prompt, choices, correctId: MOVIE_CHOICE_IDS[slot], explanation, source };
}

const plotsAnimated: MovieQuiz = {
  slug: "plots-animated",
  title: "Badly Described Plots: Animated Hits",
  shortTitle: "Badly described animated plots",
  tagline: "Eight unhelpful summaries of animated films. Name the movie before the summary gets worse.",
  seoDescription: "Eight deliberately unhelpful plot summaries of animated hits from Pixar and Disney. Pick the right film, with a funny, sourced explanation after every answer.",
  spoilerNote: "Premise-level only. Each summary stays close to the film's official synopsis and avoids endings.",
  featuring: ["Toy Story", "Finding Nemo", "Ratatouille", "Up", "WALL-E", "Monsters, Inc.", "The Incredibles", "Moana"],
  accent: "#0795ea",
  motif: "clapper",
  related: ["animated-friendships", "day-jobs"],
  questions: [
    q("pa1", "Unhelpful summary: afraid of losing his place in a kid's heart, a cowboy doll starts plotting against a birthday present.", "Toy Story (1995)", ["Toy Story 2 (1999)", "A Bug's Life (1998)", "Monsters, Inc. (2001)"],
      "Andy's birthday brings Buzz Lightyear into the room, and Woody schemes against him. It is a bad look for a sheriff, but they do learn to put their differences aside once they are separated from Andy.",
      disney(["toy-story", "Toy Story", "Andy's birthday brings Buzz Lightyear, Woody plots against Buzz, and the pair learn to put differences aside.", ["buzz lightyear", "birthday", "plots against buzz"]])),
    q("pa2", "Unhelpful summary: a dentist's fish tank costs one nervous father his son, so he asks a forgetful stranger for directions.", "Finding Nemo (2003)", ["Finding Dory (2016)", "Moana (2016)", "Luca (2021)"],
      "Nemo is taken from the Great Barrier Reef to a dentist's office aquarium, and his father Marlin gets help from Dory, who is friendly but forgetful. Navigation by memory was never going to be smooth.",
      disney(["finding-nemo", "Finding Nemo", "Nemo is taken from the Great Barrier Reef to a dentist's office; Marlin and forgetful blue tang Dory try to bring him home.", ["clownfish", "great barrier reef", "dentist", "dory"]])),
    q("pa3", "Unhelpful summary: in one of the finest restaurants in town, a rat decides the kitchen is exactly where he belongs.", "Ratatouille (2007)", ["Zootopia (2016)", "Bolt (2008)", "Oliver & Company (1988)"],
      "Remy is a determined young rat who dreams of becoming a renowned French chef, and his friendship with Linguini sets a very messy plan in motion. A rat in a kitchen is a health inspector's nightmare and Remy's career goal.",
      disney(["ratatouille", "Ratatouille", "Remy, a determined young rat in one of Paris's finest restaurants, dreams of becoming a renowned French chef, and he and his pal Linguini set off a chain of events.", ["remy, a determined young rat", "renowned french chef", "pal linguini"]])),
    q("pa4", "Unhelpful summary: an old man ties thousands of balloons to his house, then finds he has a very eager passenger on the front porch.", "Up (2009)", ["WALL-E (2008)", "Onward (2020)", "Soul (2020)"],
      "Carl Fredricksen sets off for the lost world of his childhood dreams, and eight-year-old Wilderness Explorer Russell turns up on the porch uninvited. Nobody checked the flight manifest.",
      disney(["up", "Up", "Retired balloon salesman Carl ties thousands of balloons to his house; 8-year-old Russell is on his front porch.", ["balloons", "russell", "porch"]])),
    q("pa5", "Unhelpful summary: a robot who has done the same job for hundreds of lonely years has his routine upended by a sleek search robot.", "WALL-E (2008)", ["Big Hero 6 (2014)", "Lightyear (2022)", "Wreck-It Ralph (2012)"],
      "After hundreds of lonely years of doing what he was built for, WALL-E meets a sleek search robot named EVE and finds a new purpose. Her arrival is the biggest schedule change of his career.",
      disney(["wall-e", "WALL-E", "After hundreds of lonely years doing what he was built for, WALL-E discovers a new purpose when he meets a sleek search robot named EVE.", ["hundreds of lonely years", "sleek search robot named eve"]])),
    q("pa6", "Unhelpful summary: a factory runs on screams, and its star employees are thrown into chaos by a small visitor who is not scary at all.", "Monsters, Inc. (2001)", ["Monsters University (2013)", "Hotel Transylvania (2012)", "Luca (2021)"],
      "Sulley and Mike work at the scream-processing factory in Monstropolis. When a little girl named Boo wanders in, it is the monsters who are scared silly, which is bad for brand image.",
      disney(["monsters-inc", "Monsters, Inc.", "Sulley and Mike are the top scare team at the scream-processing factory in Monstropolis; a little girl named Boo wanders into their world.", ["scream", "monstropolis", "boo"]])),
    q("pa7", "Unhelpful summary: retired superheroes try to live quietly in the suburbs, which works until a mysterious message arrives for dad.", "The Incredibles (2004)", ["Incredibles 2 (2018)", "Big Hero 6 (2014)", "Cars (2006)"],
      "Bob Parr and his wife Helen are forced into civilian identities with three kids. Bob itches to get back into action, so a mysterious communication about a top secret island assignment lands at a very convenient time.",
      disney(["the-incredibles", "The Incredibles", "Bob and Helen Parr retreat to the suburbs with three kids; a mysterious communication summons Bob to a remote island.", ["bob parr", "suburbs", "remote island"]])),
    q("pa8", "Unhelpful summary: an island teenager sails into open water with a boastful demigod to prove she can find the way.", "Moana (2016)", ["Frozen (2013)", "Encanto (2021)", "Brave (2012)"],
      "Moana sets out with the demigod Maui on a mission to prove herself a master wayfinder and save her people. Finding the way is, fittingly, the whole job description.",
      disney(["moana", "Moana", "An adventurous teenager sails out with demigod Maui to prove herself a master wayfinder.", ["maui", "demigod", "wayfinder"]])),
  ],
};

const plotsLiveAction: MovieQuiz = {
  slug: "plots-live-action",
  title: "Badly Described Plots: Live-Action Favorites",
  shortTitle: "Badly described live-action plots",
  tagline: "Eight unhelpful summaries of live-action films. Remakes are named by year, so read the choices.",
  seoDescription: "Eight deliberately unhelpful plot summaries of live-action favorites, from Ghostbusters to Cool Runnings. Pick the right film and edition, with sourced explanations.",
  spoilerNote: "Premise-level only. Each summary matches the film's official description and stops before the ending.",
  featuring: ["Ghostbusters (1984)", "Jumanji: Welcome to the Jungle", "The Karate Kid (2010)", "Doctor Strange", "Holes", "National Treasure", "Cool Runnings", "The Parent Trap (1998)"],
  accent: "#f9684d",
  motif: "ticket",
  related: ["plots-animated", "heists-and-rescues"],
  questions: [
    q("pl1", "Unhelpful summary: Peter Venkman, Ray Stantz, Egon Spengler and Winston Zeddemore go freelance to remove ghosts from houses.", "Ghostbusters (1984)", ["Ghostbusters: Answer the Call (2016)", "Hotel Transylvania (2012)", "Men in Black (1997)"],
      "Sony's description of the original film says these four take a chance on going freelance and de-haunt houses as a new ghost removal service. The 2016 Answer the Call reboot has a different cast.",
      sony(["ghostbusters", "Ghostbusters", "Venkman, Stantz, Spengler and Zeddemore go freelance, de-haunting houses in a new ghost removal service.", ["venkman", "ghost removal", "freelance"]])),
    q("pl2", "Unhelpful summary: four teenagers get pulled into a video game and learn the only way out is to finish it.", "Jumanji: Welcome to the Jungle (2017)", ["Jumanji (1995)", "Ghostbusters II (1989)", "The Karate Kid (2010)"],
      "Four teens get sucked into the video game world of Jumanji and must finish the dangerous game to escape. The 1995 Jumanji is the board game original, so the game console is the clue.",
      sony(["jumanjiwelcometothejungle", "Jumanji: Welcome to the Jungle", "Four teens are sucked into the video game world of Jumanji and must finish the dangerous game to escape.", ["video game world of jumanji", "escape"]])),
    q("pl3", "Unhelpful summary: a 12-year-old's mom takes a new job, and he lands in China with no friends and a lot of martial-arts questions.", "The Karate Kid (2010)", ["The Karate Kid (1984)", "Cool Runnings (1993)", "Holes (2003)"],
      "This is the edition where Dre Parker (Jaden Smith) moves from Detroit to China because of his mother's career move. Sony lists the 1984 film separately, so the year matters.",
      sony(["thekaratekid", "The Karate Kid (2010)", "12-year-old Dre Parker's mother's career move lands him in China.", ["dre parker", "china", "detroit"]])),
    q("pl4", "Unhelpful summary: a world-famous surgeon goes looking for a cure and ends up somewhere the course catalog is mostly magic.", "Doctor Strange (2016)", ["Tomorrowland (2015)", "A Wrinkle in Time (2018)", "Ant-Man (2015)"],
      "A famous neurosurgeon searches for a cure and lands in Kamar-Taj, a mysterious place of real magic. Medical school covered a lot, but not that.",
      disney(["doctor-strange", "Doctor Strange", "A world-famous neurosurgeon seeking a cure finds powerful magic in a mysterious place known as Kamar-Taj.", ["world-famous neurosurgeon", "known as kamar-taj"]])),
    q("pl5", "Unhelpful summary: a boy blames a family curse for his bad luck, then spends the summer at a camp with no lake and one chore: digging.", "Holes (2003)", ["The Parent Trap (1998)", "Cool Runnings (1993)", "National Treasure (2004)"],
      "Stanley Yelnats is sent to Camp Green Lake, which is not green and has no lake. The campers must dig a hole a day, and the real question is why.",
      disney(["holes", "Holes", "Stanley Yelnats goes to Camp Green Lake, which is not green and has no lake, where campers dig a hole a day.", ["stanley yelnats", "camp green lake", "dig a hole a day"]])),
    q("pl6", "Unhelpful summary: a treasure hunter decides the best way to protect a famous document is to steal it.", "National Treasure (2004)", ["Pirates of the Caribbean: The Curse of the Black Pearl (2003)", "Ant-Man (2015)", "Holes (2003)"],
      "Disney's page frames Gates's choice as taking the Declaration of Independence himself or letting a ruthless rival get it. Nothing says preservation like a heist.",
      disney(["national-treasure", "National Treasure", "Gates must steal the Declaration of Independence, or let it and a key clue fall into the hands of a ruthless rival.", ["gates must steal", "declaration of independence"]])),
    q("pl7", "Unhelpful summary: a team from the tropics decides to compete in a winter sport with virtually no clue about winter sports.", "Cool Runnings (1993)", ["Holes (2003)", "The Parent Trap (1998)", "Ant-Man (2015)"],
      "Four Jamaicans head to Calgary to chase gold and enlist an ex-champion American slider named Irv. The official page notes it is based on a true story.",
      disney(["cool-runnings", "Cool Runnings", "Four Jamaicans with no clue about winter sports go for gold in Calgary; based on a true story.", ["jamaicans", "calgary", "based on a true story"]])),
    q("pl8", "Unhelpful summary: two girls meet at summer camp, notice they look identical, and agree the obvious next step is trading places.", "The Parent Trap (1998)", ["Freaky Friday (2003)", "Bridge to Terabithia (2007)", "Remember the Titans (2000)"],
      "Hallie Parker of California and Annie James of London are identical twins who did not know the other existed. They switch places and scheme to get their parents back together. This is the 1998 edition.",
      disney(["the-parent-trap-1998", "The Parent Trap (1998)", "Identical twins Hallie Parker and Annie James meet at summer camp and scheme to switch places.", ["identical twins", "summer camp", "switch places"]])),
  ],
};

const dayJobs: MovieQuiz = {
  slug: "day-jobs",
  title: "Character Day Jobs: Who Clocks In Where?",
  shortTitle: "Character day jobs",
  tagline: "Eight characters, eight careers. Match the employee to the job before the shift ends.",
  seoDescription: "A movie character day-jobs quiz: dental-expert sea star, receptionist, police officer, band teacher, fashion designer and more. Eight questions with funny, sourced explanations.",
  spoilerNote: "No endings. Jobs come from each film's official description.",
  featuring: ["Finding Nemo", "Monsters, Inc.", "Zootopia", "Soul", "Bolt", "Toy Story 3", "Tangled", "The Incredibles"],
  accent: "#07ad9c",
  motif: "badge",
  related: ["sidekicks", "fictional-places"],
  questions: [
    q("dj1", "After watching countless procedures, which dentist-office tank resident in Finding Nemo (2003) has become something of a dental expert?", "Peach the sea star", ["Bloat the temperamental blowfish", "Jacques the cleaner shrimp", "Gurgle the nervous fish"],
      "Disney's character notes say Peach has seen so many procedures that she has become something of a dental expert. No degree, plenty of clinical hours.",
      disney(["finding-nemo", "Finding Nemo", "Peach the Sea Star has watched countless dental procedures and has become something of a dental expert.", ["peach the sea star", "dental expert"]])),
    q("dj2", "What is Celia's job at Monsters, Inc. (2001), where the snakes on her head track her mood?", "Receptionist", ["Scare floor trainer", "Door-vault technician", "Head of laundry"],
      "Disney's character notes list Celia as the receptionist and say the snakes on her head reflect her mood, which is a handy early warning system at the front desk.",
      disney(["monsters-inc", "Monsters, Inc.", "Celia is the receptionist at Monsters, Inc.; the snakes on her head reflect her mood.", ["occupation: receptionist at monsters, inc", "reflect her mood"]])),
    q("dj3", "What job does Judy Hopps do in Zootopia (2016)?", "Police officer", ["Baker", "Lifeguard", "Taxi driver"],
      "Judy is the first bunny on Zootopia's police force and jumps at the chance to crack her first case. Her patrol route has a lot of carrots in it, we assume.",
      disney(["zootopia", "Zootopia", "Officer Judy Hopps is the first bunny on Zootopia's police force.", ["officer judy hopps", "police force"]])),
    q("dj4", "What does Joe Gardner do for a living in Soul (2020)?", "He is a middle-school band teacher", ["He tunes pianos", "He hosts a radio show", "He runs a barbershop"],
      "Joe is a middle-school band teacher who gets the chance of a lifetime to play at the best jazz club in town. Marking band homework is the warm-up act.",
      disney(["soul", "Soul", "Joe Gardner is a middle-school band teacher who gets a chance to play at a top jazz club.", ["middle-school band teacher", "jazz club"]])),
    q("dj5", "Bolt believes his super powers are real because he is the star of what?", "The biggest show in Hollywood", ["A cooking competition", "A weather forecast", "A shelter adoption video"],
      "He is the star of the biggest show in Hollywood. The only problem, says the official description, is that he thinks it is real. Method acting has limits.",
      disney(["bolt", "Bolt", "Bolt is the star of the biggest show in Hollywood but thinks it is real.", ["biggest show in hollywood", "thinks it's real"]])),
    q("dj6", "In Toy Story 3 (2010), what is Mr. Pricklepants?", "A thespian hedgehog", ["A lighthouse keeper", "A chess coach", "A pastry chef"],
      "The official description introduces a thespian hedgehog named Mr. Pricklepants. He takes his craft seriously, which is the only safe way to be a hedgehog on stage.",
      disney(["toy-story-3", "Toy Story 3", "Mr. Pricklepants is introduced as a thespian hedgehog.", ["thespian hedgehog", "mr. pricklepants"]])),
    q("dj7", "In Tangled (2010), Flynn Rider is introduced as the kingdom's most wanted and most charming what?", "Bandit", ["Tax collector", "Tailor", "Court painter"],
      "The official copy calls him the kingdom's most wanted, and most charming, bandit. The charm clearly did not clear his record.",
      disney(["tangled", "Tangled", "Flynn Rider is the kingdom's most wanted, and most charming, bandit.", ["most wanted", "bandit", "flynn rider"]])),
    q("dj8", "What does Edna do for a living in The Incredibles (2004)?", "She is a fashion designer", ["She is a flight instructor", "She is a dentist", "She is a school principal"],
      "Disney's character notes list Edna as a fashion designer, and a gallery caption on the same page shows her having a spark of inspiration for a new super suit.",
      disney(["the-incredibles", "The Incredibles", "Edna is described as a fashion designer, and a gallery caption shows her inspired by a new super suit.", ["short fashion designer", "new super suit"]])),
  ],
};

const dilemmas: MovieQuiz = {
  slug: "dilemmas",
  title: "Movie Dilemmas: What Did They Want?",
  shortTitle: "Movie dilemmas and motivations",
  tagline: "Eight characters with a goal, a choice or a problem. Name what pushed the story forward.",
  seoDescription: "A movie motivations quiz: what did Remy, Woody, Mulan, Hercules and others actually want? Eight questions with sourced, funny explanations.",
  spoilerNote: "Light. Questions use each film's setup, not its outcome.",
  featuring: ["Ratatouille", "Toy Story 2", "Mulan (1998)", "Hercules", "Brave", "Wreck-It Ralph", "Zootopia", "Inside Out"],
  accent: "#b8873b",
  motif: "compass",
  related: ["villain-plans", "cause-and-effect"],
  questions: [
    q("di1", "In Ratatouille (2007), Remy is torn between his family's wishes and what?", "His true calling as a chef", ["A sightseeing career", "An offer to join a circus", "A plan to move to the countryside"],
      "Remy's family has views about where a rat belongs, but he dreams of cooking. The description names the tug-of-war directly.",
      disney(["ratatouille", "Ratatouille", "Remy is torn between his family's wishes and his true calling.", ["torn between his family's wishes", "true calling"]])),
    q("di2", "What puts Woody's loyalty to Andy up against a shiny alternative in Toy Story 2 (1999)?", "He learns he is a valuable collectible from a 1950s TV show", ["He wins a prize at a toy fair", "He is promoted to Andy's favorite", "He is offered a job in a movie"],
      "Woody finds out he is a prized collectible from an old TV show and has to decide where he and his heart truly belong.",
      disney(["toy-story-2", "Toy Story 2", "Woody discovers he is a highly valued collectible from a 1950s TV show and must decide where his heart belongs.", ["highly valued collectible", "1950s tv show", "where he and his heart truly belong"]])),
    q("di3", "How does Mulan spare her father from the army in Mulan (1998)?", "She disguises herself as a male soldier named Ping", ["She forges his medical papers", "She bribes an Imperial official", "She trains an army of her own"],
      "Mulan takes her father's place in the Imperial Army under the name Ping. This is the animated 1998 edition, not the 2020 live-action film.",
      disney(["mulan", "Mulan", "Mulan disguises herself as a male soldier named Ping to take her father's place in the Imperial Army.", ["disguises herself", "ping", "father's place"]])),
    q("di4", "What does Hercules need to prove to get home to Mount Olympus in Hercules (1997)?", "That he can go from zero to true hero", ["That he can win a chariot race", "That he can out-argue Hades", "That he can build a ship"],
      "The official description frames the task as going from zero to true hero. A big upgrade plan, with Olympus as the prize.",
      disney(["hercules", "Hercules", "Hercules needs to prove he can move from zero to true hero to return to Mount Olympus.", ["mount olympus", "\"zero\" to true hero"]])),
    q("di5", "In Brave (2012), what must Merida undo after her wish backfires?", "A beastly curse", ["A royal wedding", "A clan feud over land", "A lost archery title"],
      "Merida wants to carve her own path, her actions unleash chaos, and a wise old woman grants an ill-fated wish. The cleanup job is a beastly curse.",
      disney(["brave", "Brave", "Merida must undo a beastly curse after an ill-fated wish.", ["beastly curse", "ill-fated wish"]])),
    q("di6", "What is Ralph's goal in Wreck-It Ralph (2012)?", "To prove he can be a hero", ["To win a racing trophy", "To retire from arcades", "To get a bigger apartment"],
      "Tired of being the bad guy in his own game, Ralph heads out across the arcade to show he can be a hero.",
      disney(["wreck-it-ralph", "Wreck-It Ralph", "Tired of playing the bad guy, Ralph sets off across the arcade to prove he can be a hero.", ["tired of playing the role of a bad guy", "prove that he can be a hero"]])),
    q("di7", "To crack her first case in Zootopia (2016), Judy Hopps must partner with whom?", "A scam-artist fox named Nick Wilde", ["A retired bear detective", "A rival bunny officer", "A sheep mayor"],
      "Determined to prove herself, Judy jumps at a case even if it means teaming up with the fox Nick Wilde. A bunny cop and a fox con artist is the oldest odd couple in town.",
      disney(["zootopia", "Zootopia", "Judy Hopps partners with scam-artist fox Nick Wilde to solve a mystery.", ["determined to prove herself", "scam-artist fox nick wilde"]])),
    q("di8", "In Inside Out (2015), what do Riley's emotions disagree about?", "How best to navigate a new city, house and school", ["Which sports team to join", "Whether to adopt a pet", "What to cook for dinner"],
      "After Riley's family moves to San Francisco, Joy tries to keep things positive while the emotions conflict over how to handle a new city, house and school.",
      disney(["inside-out", "Inside Out", "Riley's emotions conflict on how best to navigate a new city, house and school.", ["conflict on how best to navigate", "new city, house and school"]])),
  ],
};

const sidekicks: MovieQuiz = {
  slug: "sidekicks",
  title: "Sidekick Roll Call",
  shortTitle: "Sidekick roll call",
  tagline: "The hero gets the poster. These eight get the best lines of the second act. Name the sidekick.",
  seoDescription: "Movie sidekick trivia with eight original clues about the companions who keep heroes going. Play solo or with friends, then read funny, sourced explanations.",
  spoilerNote: "No endings. Roles come from each film's official description.",
  featuring: ["Star Wars", "Mulan (1998)", "Hercules", "The Little Mermaid (1989)", "Peter Pan (1953)", "The Lion King (1994)", "The Emperor's New Groove", "Lightyear"],
  accent: "#f47a9e",
  motif: "sidekick",
  related: ["animated-friendships", "villain-plans"],
  questions: [
    q("sk1", "Chewbacca is whose co-pilot aboard the Millennium Falcon?", "Han Solo", ["Lando Calrissian", "Luke Skywalker", "Boba Fett"],
      "StarWars.com calls Chewbacca Han Solo's co-pilot. Lando Calrissian is the tempting wrong answer because he is also tied to the Falcon's history.",
      starwars(["chewbacca", "Chewbacca", "Chewbacca is Han Solo's co-pilot aboard the Millennium Falcon.", ["han solo's co-pilot", "millennium falcon"]])),
    q("sk2", "Which small helper rides along with Mulan (1998) as a lucky cricket?", "Cri-Kee", ["Mushu", "Pegasus", "Flounder"],
      "Cri-Kee is the lucky cricket; Mushu is the outrageously funny guardian dragon. Mulan's support team is one dragon and one insect.",
      disney(["mulan", "Mulan", "Mulan is helped by a guardian dragon Mushu and a lucky cricket Cri-Kee.", ["mushu", "cri-kee", "lucky cricket"]])),
    q("sk3", "Which feisty personal trainer coaches Hercules in Hercules (1997)?", "Phil", ["Pain", "Panic", "Pegasus"],
      "Hercules gets Pegasus the flying stallion and Phil, a feisty personal trainer. Pegasus is the horse, not the coach.",
      disney(["hercules", "Hercules", "Hercules is helped by Pegasus the flying stallion and Phil, a feisty personal trainer.", ["pegasus, the flying stallion", "a feisty personal trainer"]])),
    q("sk4", "Which two sidekicks stay at Ariel's side in The Little Mermaid (1989)?", "Flounder and Sebastian", ["Timon and Pumbaa", "Mushu and Cri-Kee", "Chip and Dale"],
      "After Ariel bravely strikes a bargain with Ursula, she goes on her adventure with Flounder and Sebastian at her side.",
      disney(["the-little-mermaid", "The Little Mermaid", "With Flounder and Sebastian at her side, Ariel embarks on an adventure after bargaining with Ursula.", ["flounder", "sebastian"]])),
    q("sk5", "Whose pixie dust helps Peter Pan teach Wendy and her brothers to fly in Peter Pan (1953)?", "Tinker Bell", ["Flora", "Merryweather", "Fauna"],
      "The official description says Peter teaches them to fly with faith, trust and Tinker Bell's pixie dust.",
      disney(["peter-pan", "Peter Pan", "Peter teaches Wendy and her brothers to fly with faith, trust and Tinker Bell's pixie dust.", ["tinker bell", "pixie dust", "teaches them how to fly"]])),
    q("sk6", "Which Lion King (1994) sidekick is a well-padded warthog who will trust anyone, even a carnivore like Simba?", "Pumbaa", ["Zazu", "Rafiki", "Timon"],
      "Disney's character notes call Pumbaa a bit clumsy but strong on empathy and intuition. Trusting a carnivore is either great character judgment or a lunch-planning gamble.",
      disney(["the-lion-king", "The Lion King (1994)", "Pumbaa is a well-padded warthog, ready to trust anyone, even a carnivore like Simba.", ["well-padded warthog", "ready to trust anyone"]])),
    q("sk7", "Who is Yzma's hunky henchman in The Emperor's New Groove (2000)?", "Kronk", ["Pacha", "Kuzco", "Bernard"],
      "The official description names Kronk as Yzma's hunky henchman. A sidekick for the villain is still a sidekick.",
      disney(["the-emperors-new-groove", "The Emperor's New Groove", "Yzma has a hunky henchman named Kronk.", ["hunky henchman", "kronk"]])),
    q("sk8", "In Lightyear (2022), which robot companion sticks with Buzz?", "Sox", ["R2-D2", "Baymax", "Wheezy"],
      "Disney's description pairs Buzz with his robot companion Sox. The other three are a droid, a healthcare robot and a toy penguin, all from other films.",
      disney(["lightyear", "Lightyear", "Buzz is joined by his robot companion Sox.", ["his robot companion sox"]])),
  ],
};

const villainPlans: MovieQuiz = {
  slug: "villain-plans",
  title: "Villain Master Plans",
  shortTitle: "Villain master plans",
  tagline: "Eight villains and eight schemes. Match the plan to the person behind it.",
  seoDescription: "Match movie villains to their schemes in eight original trivia questions. Play solo or with a group, with funny explanations and official sources after each answer.",
  spoilerNote: "Moderate. Names franchise villains and reveals the outcome of Avengers: Infinity War as the setup for Endgame.",
  featuring: ["Hercules", "The Little Mermaid (1989)", "The Emperor's New Groove", "Spider-Man", "Spider-Man 2", "Lightyear", "Star Wars", "Avengers: Endgame"],
  accent: "#c24b3a",
  motif: "mask",
  related: ["dilemmas", "heists-and-rescues"],
  questions: [
    q("vp1", "Whose plan in Hercules (1997) is to take over the Universe?", "Hades", ["Gaston", "Scar", "Jafar"],
      "Hades, with help from Pain and Panic, plans to take over the Universe. Ambition: high. Subtlety: the same.",
      disney(["hercules", "Hercules", "Hades plans to take over the Universe with the help of Pain and Panic.", ["hades", "take over the universe"]])),
    q("vp2", "Which sneaky sea witch strikes a bargain with Ariel in The Little Mermaid (1989)?", "Ursula", ["Maleficent", "Yzma", "Mother Gothel"],
      "Disney's copy calls Ursula a sneaky sea witch and says Ariel bravely strikes a bargain with her. Read the fine print, as they say.",
      disney(["the-little-mermaid", "The Little Mermaid", "Ariel strikes a bargain with Ursula, a sneaky sea witch.", ["ursula, a sneaky sea witch", "bargain"]])),
    q("vp3", "Which advisor turns Emperor Kuzco into a llama in The Emperor's New Groove (2000)?", "Yzma", ["Maleficent", "Cruella", "Hades"],
      "Kuzco is turned into a llama by his devious advisor Yzma. The plan has a lot of moving parts and one very visible llama.",
      disney(["the-emperors-new-groove", "The Emperor's New Groove", "Kuzco is turned into a llama by his devious advisor Yzma.", ["devious advisor", "yzma", "llama"]])),
    q("vp4", "Sony's description of the first Spider-Man film says Peter Parker must save New York from which nemesis?", "The Green Goblin", ["Sandman", "Venom", "The Lizard"],
      "The first Spider-Man (2002) pits the web-spinning hero against the Green Goblin while he tries to win the heart of Mary Jane.",
      sony(["spiderman", "Spider-Man", "Spider-Man must save New York from his nemesis, the Green Goblin.", ["nemesis", "goblin", "mary jane"]])),
    q("vp5", "Which multi-tentacled villain forces Peter Parker back into action in Spider-Man 2 (2004)?", "Doc Ock", ["The Vulture", "Rhino", "Mysterio"],
      "Peter retires from crime-fighting to protect his normal life and his relationship with MJ, but Doc Ock has other plans. It is a tentacled argument against retirement.",
      sony(["spiderman2", "Spider-Man 2", "A ruthless, terrifying, multi-tentacled villain, Doc Ock, forces Peter Parker back into action.", ["doc ock", "multi-tentacled"]])),
    q("vp6", "Who leads a dutiful robot army against Buzz and his crew in Lightyear (2022)?", "Zurg", ["Syndrome", "Ronan", "Darth Vader"],
      "The official description has Buzz's mismatched crew trying to escape the evil Zurg and his dutiful robot army. Dutiful is doing a lot of work there.",
      disney(["lightyear", "Lightyear", "Buzz's crew must escape the evil Zurg and his dutiful robot army.", ["evil zurg", "robot army"]])),
    q("vp7", "Emperor Palpatine ruled in the open. What was his Sith Lord name?", "Darth Sidious", ["Darth Maul", "Darth Vader", "Count Dooku"],
      "StarWars.com says Darth Sidious orchestrated the demise of the Jedi and the rise of the Empire, ruling the galaxy as Emperor Palpatine. Two business cards, one person.",
      starwars(["emperor-palpatine-darth-sidious", "Emperor Palpatine (Darth Sidious)", "Darth Sidious orchestrated the demise of the Jedi and the rise of the Empire, and ruled as Emperor Palpatine.", ["darth sidious", "emperor palpatine"]])),
    q("vp8", "Avengers: Endgame (2019) begins in the aftermath of which villain's plan that wiped out half the universe?", "Thanos", ["Ronan", "Loki", "Ultron"],
      "Disney's description says the grave course of events set in motion by Thanos wiped out half the universe and fractured the Avengers ranks.",
      disney(["avengers-endgame", "Avengers: Endgame", "Events set in motion by Thanos wiped out half the universe and fractured the Avengers.", ["thanos", "half the universe"]])),
  ],
};

const objects: MovieQuiz = {
  slug: "objects",
  title: "Movie Objects With Main-Character Energy",
  shortTitle: "Movie objects",
  tagline: "A ship, a suit, a van and a few things that hog the plot. Name the object.",
  seoDescription: "Name the movie ships, gadgets, treasured toys and unusual vehicles from eight original clues. Play solo or with friends and discover the stories behind each answer.",
  spoilerNote: "Light. Each object is described from official copy, with no film endings.",
  featuring: ["Star Wars", "Monsters, Inc.", "Ghostbusters II (1989)", "Guardians of the Galaxy (2014)", "Onward", "Pirates of the Caribbean: The Curse of the Black Pearl"],
  accent: "#3d6fad",
  motif: "key",
  related: ["fictional-places", "sci-fi"],
  questions: [
    q("ob1", "Which ship looks like a worn-out junker but is full of surprises beneath the hull?", "The Millennium Falcon", ["The Death Star", "The Black Pearl", "The Axiom"],
      "StarWars.com says the Falcon looks like a worn-out junker but has surprises inside. It was owned by a succession of people including Lando Calrissian and Han Solo.",
      starwars(["millennium-falcon", "Millennium Falcon", "The Falcon looks like a worn-out junker but is full of surprises beneath her hull.", ["worn-out junker", "full of surprises"]])),
    q("ob2", "StarWars.com's Databank calls this item a legendary relic used by the Jedi. What is it?", "A lightsaber", ["A proton pack", "A magic wand", "A grappling hook"],
      "The Databank summary describes the lightsaber as the legendary relic used by the Jedi. It requires no batteries, only commitment.",
      starwars(["lightsaber", "Lightsaber", "The Databank describes the lightsaber as a legendary relic used by the Jedi.", ["legendary relic", "jedi"]])),
    q("ob3", "Sony says the Ghostbusters take up which equipment once more in Ghostbusters II (1989)?", "Their proton packs", ["Their jetpacks", "Their lightsabers", "Their boomerangs"],
      "The description says Bill Murray, Dan Aykroyd, Harold Ramis and Ernie Hudson take up their proton packs once more to battle the forces of evil in Manhattan.",
      sony(["ghostbustersii", "Ghostbusters II", "The Ghostbusters take up their proton packs once more to battle evil in Manhattan.", ["proton packs"]])),
    q("ob4", "What does Peter Quill steal in Guardians of the Galaxy (2014) that turns him into a bounty-hunt target?", "A mysterious orb", ["A royal crown", "A treasure map", "A starship engine"],
      "Disney's copy says Quill is the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan. Returning it was apparently not an option.",
      disney(["marvels-guardians-of-the-galaxy", "Guardians of the Galaxy", "Peter Quill steals a mysterious orb coveted by Ronan and becomes the object of a bounty hunt.", ["mysterious orb", "bounty hunt", "ronan"]])),
    q("ob5", "In Monsters, Inc. (2001), what is Little Mikey?", "Mike Wazowski's teddy bear", ["Sulley's childhood nickname", "Mike's name for Boo", "The company mascot"],
      "Disney's character notes list Mike as possessive of his teddy bear, Little Mikey, and say Boo's favorite toy is Mike's teddy bear. Googly-Bear is a different nickname, and it is Celia's name for Mike.",
      disney(["monsters-inc", "Monsters, Inc.", "Mike is possessive of his teddy bear, Little Mikey, which is Boo's favorite toy.", ["possessive of his teddy bear, little mikey", "favorite toy: mike's teddy bear"]])),
    q("ob6", "What is the name of Barley's epic van in Onward (2020)?", "Guinevere", ["Lancelot", "Excalibur", "Merlin"],
      "Two elf brothers set out on a quest aboard Barley's epic van Guinevere. All four choices are Arthurian names, so the van has company in the legend department.",
      disney(["onward", "Onward", "Ian and Barley Lightfoot embark on a quest aboard Barley's epic van Guinevere.", ["epic van guinevere", "barley"]])),
    q("ob7", "In the first Pirates of the Caribbean film (2003), which ship does Captain Barbossa steal from Jack Sparrow?", "The Black Pearl", ["The Flying Dutchman", "Queen Anne's Revenge", "The Jolly Roger"],
      "Barbossa steals Jack's ship, the Black Pearl, and later attacks the town of Port Royal. The theft is why Jack ends up joining forces with Will Turner.",
      disney(["pirates-of-the-caribbean-the-curse-of-the-black-pearl", "Pirates of the Caribbean: The Curse of the Black Pearl", "Captain Barbossa steals Jack Sparrow's ship, the Black Pearl.", ["barbossa", "steals his ship", "black pearl"]])),
    q("ob8", "Which weapon is Chewbacca known for being accurate with?", "A bowcaster", ["A lightsaber", "A proton pack", "A blaster rifle"],
      "StarWars.com says Chewbacca was known for his short temper and accuracy with a bowcaster. The big heart is a separate item.",
      starwars(["chewbacca", "Chewbacca", "Chewbacca was known for his accuracy with a bowcaster.", ["accuracy with a bowcaster"]])),
  ],
};

const fictionalPlaces: MovieQuiz = {
  slug: "fictional-places",
  title: "Fictional Places Passport",
  shortTitle: "Fictional places",
  tagline: "Eight made-up places from movies, each with a very specific official postcard. Where are we?",
  seoDescription: "Travel through eight fictional movie locations, from distant worlds to animated cities. Match each clue to its setting, then read the sourced explanation.",
  spoilerNote: "No endings. Places are described from official Databank and studio copy.",
  featuring: ["Star Wars", "Elemental", "The Lion King (1994)", "Big Hero 6", "Wish"],
  accent: "#2a8f7a",
  motif: "map",
  related: ["objects", "sci-fi"],
  questions: [
    q("fp1", "Which desert world orbits twin suns and has moisture farms and a spaceport called Mos Eisley?", "Tatooine", ["Hoth", "Endor", "Dagobah"],
      "StarWars.com calls Tatooine a harsh desert world orbiting twin suns, where settlers scratch out a living on moisture farms and spaceport cities like Mos Eisley are home to smugglers.",
      starwars(["tatooine", "Tatooine", "Tatooine is a harsh desert world orbiting twin suns with moisture farms and spaceport cities like Mos Eisley.", ["twin suns", "moisture farms", "mos eisley"]])),
    q("fp2", "On which swamp-covered planet did Yoda hide from Imperial forces?", "Dagobah", ["Hoth", "Bespin", "Naboo"],
      "Dagobah was a forgotten world with bog-like conditions and no signs of technology, which made it ideal for a wizened Jedi Master who wanted privacy.",
      starwars(["dagobah", "Dagobah", "Dagobah was a swamp-covered planet where Yoda escaped the notice of Imperial forces.", ["swamp-covered", "yoda", "imperial forces"]])),
    q("fp3", "Which forest moon is home to the Ewoks?", "Endor", ["Tatooine", "Dagobah", "Naboo"],
      "StarWars.com describes the forest moon of Endor as the home of the Ewok species and the site of a decisive battle for the Rebel Alliance.",
      starwars(["endor", "Endor", "Endor is a forest moon and the home of the Ewok species.", ["forest moon", "ewok"]])),
    q("fp4", "Which gas giant has a habitable cloud band where prospectors built floating settlements?", "Bespin", ["Hoth", "Endor", "Coruscant"],
      "Bespin is an immense gas giant with a band of habitable atmosphere among its clouds, according to the Databank. Great views, bad for landing.",
      starwars(["bespin", "Bespin", "Bespin is an immense gas giant with a habitable band where prospectors established floating settlements.", ["gas giant", "habitable atmosphere", "floating"]])),
    q("fp5", "In which city do fire, water, land and air residents live together?", "Element City", ["Zootopia", "San Fransokyo", "Monstropolis"],
      "Elemental (2023) is set in Element City, where fire-, water-, land- and air residents live together. Ember and Wade's friendship tests a lot of assumptions about that.",
      disney(["elemental", "Elemental", "Elemental is set in Element City where fire-, water-, land- and air residents live together.", ["element city", "fire-, water-, land- and air"]])),
    q("fp6", "Simba's story in The Lion King (1994) is set in which region?", "The Pride Lands", ["Sherwood Forest", "Kumandra", "Rosas"],
      "Disney's page for the 1994 film says it transports viewers to the Pride Lands. The 2019 edition is a separate photoreal remake.",
      disney(["the-lion-king", "The Lion King (1994)", "The Lion King transports viewers to the Pride Lands.", ["pride lands", "circle of life"]])),
    q("fp7", "Which fictional city is the setting for Big Hero 6 (2014)?", "San Fransokyo", ["Monstropolis", "Element City", "Arendelle"],
      "Baymax and Hiro's story takes place in the streets of San Fransokyo. It sounds like a travel app and is a real place in the film.",
      disney(["big-hero-6", "Big Hero 6", "A dangerous plot unfolds in the streets of San Fransokyo.", ["san fransokyo"]])),
    q("fp8", "King Magnifico rules which kingdom in Wish (2023)?", "Rosas", ["Arendelle", "Agrabah", "Corona"],
      "Asha and Star confront the ruler of Rosas, King Magnifico. The official copy is the source for the kingdom's name.",
      disney(["wish", "Wish", "Asha and Star confront the ruler of Rosas, King Magnifico.", ["rosas", "king magnifico"]])),
  ],
};

const animatedFriendships: MovieQuiz = {
  slug: "animated-friendships",
  title: "Animated Friendships: Who Is the Pal?",
  shortTitle: "Animated friendships",
  tagline: "Eight friendships, one gap in each pair. Name the friend.",
  seoDescription: "Match animated characters with their friends and companions in eight original movie trivia questions. Play solo or in a group, with funny, sourced explanations.",
  spoilerNote: "Light. Questions use each friendship's setup and avoid later turns.",
  featuring: ["Big Hero 6", "Luca", "Coco", "Brave", "Tangled", "Finding Nemo", "The Emperor's New Groove", "Frozen"],
  accent: "#0795ea",
  motif: "hearts",
  related: ["sidekicks", "found-families"],
  questions: [
    q("af1", "Which robot forms a special bond with robotics prodigy Hiro Hamada in Big Hero 6 (2014)?", "Baymax", ["C-3PO", "WALL-E", "Gort"],
      "Baymax was conceived and built by Hiro's brother Tadashi, and Disney's character notes say caring is what he was designed to do. Hiro makes him much more than a gadget.",
      disney(["big-hero-6", "Big Hero 6", "Baymax is a lovable, personal companion robot who forms a special bond with robotics prodigy Hiro Hamada.", ["baymax", "special bond", "hiro hamada"]])),
    q("af2", "Who is Luca's newfound best friend in Luca (2021)?", "Alberto", ["Ercole", "Marlin", "Linguini"],
      "Luca shares his summer adventures with newfound best friend Alberto. They also share a secret: they are sea monsters from another world.",
      disney(["luca", "Luca", "Luca shares adventures with his newfound best friend Alberto.", ["newfound best friend", "alberto"]])),
    q("af3", "Which charming trickster becomes Miguel's unexpected friend in Coco (2017)?", "Hector", ["Dante", "Ernesto", "Pepita"],
      "Disney's page calls Hector a charming trickster who becomes Miguel's unexpected friend and helps him dig into the mysteries behind his family's stories.",
      disney(["coco", "Coco", "The charming trickster Hector becomes an unexpected friend who helps Miguel uncover family mysteries.", ["charming trickster hector", "unexpected friend"]])),
    q("af4", "Merida spends her days practicing archery and exploring the world with which horse in Brave (2012)?", "Angus", ["Maximus", "Khan", "Pegasus"],
      "Disney's character notes list riding her horse Angus alongside archery as Merida's daily routine. Maximus, Khan and Pegasus are horses from other films.",
      disney(["brave", "Brave", "Merida practices archery and rides her horse Angus.", ["practicing archery, riding her horse angus"]])),
    q("af5", "Which spirited teen with 70 feet of magical golden hair does Flynn Rider find in a tower in Tangled (2010)?", "Rapunzel", ["Merida", "Anna", "Moana"],
      "Flynn hides in a mysterious tower and finds Rapunzel, a spirited teen with an unlikely superpower. The duo sets off on a fantastic journey.",
      disney(["tangled", "Tangled", "Flynn Rider hides in a tower and finds Rapunzel, a teen with 70 feet of magical golden hair.", ["rapunzel", "70 feet", "golden hair"]])),
    q("af6", "Disney's character notes reveal a secret about Flo, Deb's constant companion in the dentist-office tank of Finding Nemo (2003). What is Flo?", "Deb's reflection", ["Deb's twin sister", "A cleaner shrimp assigned to Deb", "Deb's mother"],
      "The page says the other fish still haven't broken the news that Flo isn't Deb's sister but her reflection. Best friends do not get closer than that.",
      disney(["finding-nemo", "Finding Nemo", "Flo is Deb's reflection, not her sister.", ["flo isn't deb's sister, but her reflection"]])),
    q("af7", "Who must Kuzco team up with in The Emperor's New Groove (2000), despite their differences?", "Pacha, a peasant", ["Kronk", "Yzma", "Mushu"],
      "Disney's page has the former ruler of everything form an unlikely alliance with Pacha, a pleasant peasant, and promises a \"groovy\" adventure.",
      disney(["the-emperors-new-groove", "The Emperor's New Groove", "Kuzco must form an unlikely alliance with a pleasant peasant named Pacha.", ["unlikely alliance", "pleasant peasant named pacha"]])),
    q("af8", "Which rugged mountain man teams up with Anna in Frozen (2013)?", "Kristoff", ["Kuzco", "Flynn Rider", "Maui"],
      "Anna teams up with Kristoff and his loyal reindeer Sven to find her sister Elsa. Flynn Rider and Maui belong to other movies.",
      disney(["frozen", "Frozen", "Anna teams up with rugged mountain man Kristoff and his loyal reindeer Sven.", ["rugged mountain man kristoff", "teaming up"]])),
  ],
};

const sciFi: MovieQuiz = {
  slug: "sci-fi",
  title: "Sci-Fi Signal Check",
  shortTitle: "Sci-fi signal check",
  tagline: "Eight transmissions from space, the future and the arcade. Decode them.",
  seoDescription: "A sci-fi movie quiz: Men in Black, Treasure Planet, Tron: Legacy, Tomorrowland, Lightyear, Avatar, Flight of the Navigator and Star Wars. Sourced explanations.",
  spoilerNote: "Light. Questions use official descriptions and release facts, not film twists.",
  featuring: ["Men in Black (1997)", "Treasure Planet", "Tron: Legacy", "Tomorrowland", "Lightyear", "Avatar: The Way of Water", "Flight of the Navigator", "Star Wars: A New Hope"],
  accent: "#1e4fd6",
  motif: "rocket",
  related: ["cause-and-effect", "objects"],
  questions: [
    q("sf1", "Which sci-fi comedy follows two top secret agents policing alien activities on Earth?", "Men in Black (1997)", ["Ghostbusters (1984)", "Tron: Legacy (2010)", "Hotel Transylvania (2012)"],
      "Sony describes agents played by Tommy Lee Jones and Will Smith with the everyday mission of policing alien activities on planet Earth.",
      sony(["meninblack", "Men in Black", "Two top secret agents police alien activities on planet Earth.", ["top secret agents", "alien activities"]])),
    q("sf2", "Treasure Planet (2002) gives which classic adventure novel a futuristic twist?", "Treasure Island by Robert Louis Stevenson", ["Moby-Dick", "Around the World in Eighty Days", "The Jungle Book"],
      "Disney's page says Robert Louis Stevenson's Treasure Island gets a futuristic twist, with a flying ship instead of a sailing one.",
      disney(["treasure-planet", "Treasure Planet", "Robert Louis Stevenson's Treasure Island gets a futuristic twist.", ["treasure island", "futuristic twist", "flying ship"]])),
    q("sf3", "In Tron: Legacy (2010), a cryptic signal comes from the arcade of which missing game creator?", "Kevin Flynn", ["Flynn Rider", "Sam Lightfoot", "Hank Pym"],
      "Kevin Flynn has been missing for over a decade. Flynn Rider, the bandit in Tangled (2010), is a different Flynn entirely, and an alias rather than a surname.",
      disney(["tron-legacy", "Tron: Legacy", "Sam learns of a cryptic signal from the arcade of legendary game creator Kevin Flynn, missing for over a decade.", ["cryptic signal", "kevin flynn", "missing for over a decade"]])),
    q("sf4", "Which actor plays former boy-genius Frank in Tomorrowland (2015)?", "George Clooney", ["Chris Pratt", "Tom Holland", "Chris Evans"],
      "Brad Bird directs this mystery adventure starring Academy Award winner George Clooney as Frank, with Britt Robertson as Casey.",
      disney(["tomorrowland", "Tomorrowland", "Brad Bird directs Tomorrowland starring George Clooney as former boy-genius Frank.", ["brad bird", "george clooney", "frank"]])),
    q("sf5", "Lightyear (2022) is the origin story of the hero who inspired what?", "The Buzz Lightyear toy", ["A theme park monorail", "An astronaut ice cream brand", "A video game console"],
      "Disney and Pixar describe it as the definitive origin story of Buzz Lightyear, the hero who inspired the toy. The toy, in turn, is in several other films.",
      disney(["lightyear", "Lightyear", "Lightyear is the definitive origin story of Buzz Lightyear, the hero who inspired the toy.", ["origin story of buzz lightyear", "inspired the toy"]])),
    q("sf6", "Which world is home to Jake, Neytiri and their kids in Avatar: The Way of Water (2022)?", "Pandora", ["Tatooine", "Kumandra", "Bespin"],
      "James Cameron returns to the world of Pandora, more than a decade after the first film, with the Sully family. Pandora is the setting, not a snack.",
      disney(["avatar-the-way-of-water", "Avatar: The Way of Water", "James Cameron returns to Pandora with the Sully family.", ["pandora", "sully family"]])),
    q("sf7", "What is the name of the wisecracking robotic commander in Flight of the Navigator (1986)?", "Max", ["HAL 9000", "K-2SO", "EVE"],
      "David Freeman can take the futuristic spacecraft anywhere he wants, accompanied by its wisecracking robotic commander, Max.",
      disney(["flight-of-the-navigator", "Flight of the Navigator", "David Freeman flies a futuristic spacecraft with its wisecracking robotic commander, Max.", ["wisecracking robotic commander, max"]])),
    q("sf8", "In what year did Star Wars: A New Hope open in theaters?", "1977", ["1975", "1980", "1983"],
      "StarWars.com lists the release date as May 25, 1977. The other years are all plausible-sounding galaxy-far-away dates, which is the trap.",
      starwarsFilm(["star-wars-episode-iv-a-new-hope", "Star Wars: A New Hope", "Star Wars: A New Hope has a release date of May 25, 1977.", ["may 25, 1977"]])),
  ],
};

const fantasy: MovieQuiz = {
  slug: "fantasy",
  title: "Fantasy Worlds Field Guide",
  shortTitle: "Fantasy worlds",
  tagline: "Wardrobes, curses, red pandas and pirates who cannot quite die. Eight fantasy facts.",
  seoDescription: "A fantasy movie quiz: Narnia, Brave, Turning Red, Encanto, Pirates of the Caribbean, The Princess and the Frog, Raya and Snow White. Sourced explanations.",
  spoilerNote: "Light. Questions use each film's setup and avoid endings.",
  featuring: ["The Chronicles of Narnia (2005)", "Brave", "Turning Red", "Encanto", "Pirates of the Caribbean: The Curse of the Black Pearl", "The Princess and the Frog", "Raya and the Last Dragon", "Snow White and the Seven Dwarfs (1937)"],
  accent: "#7a4bd1",
  motif: "wand",
  related: ["found-families", "villain-plans"],
  questions: [
    q("fa1", "How do the four kids reach Narnia in The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (2005)?", "Through a wardrobe", ["Through a mirror", "On a magic carpet", "By a hidden train platform"],
      "Disney's page says four kids travel through a wardrobe to Narnia and learn of their destiny to free it with the guidance of a mystical lion.",
      disney(["the-chronicles-of-narnia-the-lion-the-witch-and-the-wardrobe", "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", "Four kids travel through a wardrobe to Narnia.", ["through a wardrobe", "narnia", "mystical lion"]])),
    q("fa2", "Who is Merida's mother in Brave (2012)?", "Queen Elinor", ["Queen Laurel", "Queen Grimhilde", "Queen Elsa"],
      "Merida's mother is Queen Elinor. Merida loves archery and wants to control her own destiny, which does not always match the royal schedule.",
      disney(["brave", "Brave", "Merida is the daughter of King Fergus and Queen Elinor.", ["king fergus", "queen elinor"]])),
    q("fa3", "In Turning Red (2022), what does Mei Lee turn into when she gets too excited?", "A giant red panda", ["A dragon", "A sea monster", "A snow leopard"],
      "Mei Lee, 13, suddenly poofs into a giant red panda. The official copy says this happens when she gets too excited, which is practically always.",
      disney(["turning-red", "Turning Red", "Mei Lee, 13, poofs into a giant red panda when she gets too excited.", ["giant red panda", "too excited"]])),
    q("fa4", "Where do the Madrigals live in Encanto (2021)?", "Hidden in the mountains of Colombia", ["On the Italian Riviera", "On a Scottish coast", "In San Fransokyo"],
      "Disney's description places the Madrigals in a magical house hidden in the mountains of Colombia. That is a lot of house to keep hidden.",
      disney(["encanto", "Encanto", "The Madrigals live hidden in the mountains of Colombia in a magical house.", ["hidden in the mountains of colombia", "magical house"]])),
    q("fa5", "What has doomed Barbossa's crew in Pirates of the Caribbean: The Curse of the Black Pearl (2003)?", "A cursed treasure that leaves them undead", ["A haunted compass", "A broken promise to the Navy", "A mermaid's song"],
      "The official description says a cursed treasure has doomed Barbossa and his crew to live forever as the undead.",
      disney(["pirates-of-the-caribbean-the-curse-of-the-black-pearl", "Pirates of the Caribbean: The Curse of the Black Pearl", "A cursed treasure has doomed Barbossa and his crew to live forever as the undead.", ["cursed treasure", "undead"]])),
    q("fa6", "The Princess and the Frog (2009) is set in which American city?", "New Orleans", ["Chicago", "San Francisco", "Boston"],
      "The animated comedy is set in the great city of New Orleans, with a frog prince, Tiana and a fateful kiss.",
      disney(["the-princess-and-the-frog", "The Princess and the Frog", "The animated comedy is set in New Orleans and the mystical bayous of Louisiana.", ["new orleans", "tiana", "frog prince"]])),
    q("fa7", "In Raya and the Last Dragon (2021), who once lived together in harmony in Kumandra?", "Humans and dragons", ["Elves and goblins", "Pirates and sailors", "Robots and humans"],
      "Disney's page says Kumandra was a fantasy world where humans and dragons lived together in harmony long ago, until an evil force threatened the land.",
      disney(["raya-and-the-last-dragon", "Raya and the Last Dragon", "In Kumandra, humans and dragons lived together in harmony long ago.", ["kumandra", "humans and dragons", "harmony"]])),
    q("fa8", "Which of these is not one of the seven dwarfs in Snow White and the Seven Dwarfs (1937)?", "Wheezy", ["Doc", "Bashful", "Dopey"],
      "Disney's roster is Doc, Sneezy, Grumpy, Happy, Bashful, Sleepy and Dopey. Wheezy is a toy penguin from a different franchise.",
      disney(["snow-white-and-the-seven-dwarfs", "Snow White and the Seven Dwarfs", "The seven dwarfs are Doc, Sneezy, Grumpy, Happy, Bashful, Sleepy and Dopey.", ["doc, sneezy, grumpy, happy, bashful, sleepy", "dopey"]])),
  ],
};

const causeAndEffect: MovieQuiz = {
  slug: "cause-and-effect",
  title: "Cause and Effect: What Set It Off?",
  shortTitle: "Cause and effect",
  tagline: "Eight chain reactions, two of them across time. What started the domino run?",
  seoDescription: "A movie cause and effect quiz with a time-travel twist: Meet the Robinsons, Men in Black 3 (2012), Frozen, Onward, Wreck-It Ralph and more. Sourced explanations.",
  spoilerNote: "Light to moderate. Questions use the opening chain of events, not outcomes.",
  featuring: ["Meet the Robinsons", "Men in Black 3 (2012)", "Frozen", "Onward", "Ratatouille", "Bolt", "Cars", "Wreck-It Ralph"],
  accent: "#b85a72",
  motif: "clock",
  related: ["dilemmas", "sci-fi"],
  questions: [
    q("ce1", "In Meet the Robinsons (2007), what does time-traveling inventor Lewis set out to do?", "Save the future and find the family he never knew", ["Win a science fair and meet the mayor", "Stop a comet and adopt a robot", "Rebuild the past and sell it"],
      "Lewis is a gifted young inventor whose time-travel mission is both to protect the future and to track down the family he has never met, with help from the very eccentric Robinsons.",
      disney(["meet-the-robinsons", "Meet the Robinsons", "Lewis sets off on a time-traveling quest to save the future and find the family he never knew.", ["time-traveling quest", "save the future", "family he never knew"]])),
    q("ce2", "Agent Jay travels back to which year in Men in Black 3 (2012)?", "1969", ["1955", "1985", "1977"],
      "Sony's description says Jay goes back to 1969 and teams up with a younger version of Agent Kay to stop an evil alien from destroying the future.",
      sony(["meninblack3", "Men in Black 3", "Agent Jay travels back in time to 1969 and teams up with a younger Agent Kay.", ["1969", "younger version of agent kay"]])),
    q("ce3", "In Frozen (2013), what is the result of Elsa's icy powers on the kingdom of Arendelle?", "Eternal winter", ["A long drought", "A permanent night", "A sleeping curse"],
      "The official description says Elsa's icy powers have trapped Arendelle in eternal winter, which sets off Anna's journey.",
      disney(["frozen", "Frozen", "Elsa's icy powers trap the kingdom of Arendelle in eternal winter.", ["icy powers", "eternal winter", "arendelle"]])),
    q("ce4", "In Onward (2020), what does the Manticore do with her old quest tavern once modern conveniences replace magic?", "She turns it into a family-friendly restaurant", ["It becomes a sword museum", "It is flattened for a new highway", "It becomes an elf community center"],
      "Disney's notes say the former warrior's tavern, once a waystation for travelers on epic quests, became a family restaurant with games and fried foods. The adventure retired; the fried food did not.",
      disney(["onward", "Onward", "As modern conveniences replaced magic, the Manticore turned her quest tavern into a family-friendly restaurant.", ["transforming her tavern into a family-friendly restaurant", "the manticore"]])),
    q("ce5", "Remy and Linguini set a hilarious chain of events in motion that turns which city upside down in Ratatouille (2007)?", "Paris", ["Lyon", "Rome", "Montreal"],
      "The official copy says the chain of events turns the City of Lights upside down, which is Paris's nickname.",
      disney(["ratatouille", "Ratatouille", "Remy and Linguini set in motion a chain of events that turns the City of Lights upside down.", ["chain of events", "city of lights"]])),
    q("ce6", "How does Bolt end up in New York City in Bolt (2008)?", "He is accidentally shipped there", ["He follows a tour bus", "He wins a contest", "He signs a talent deal in person"],
      "Bolt is accidentally shipped to New York City and separated from Penny, so he must harness his supposed super powers to find a way home.",
      disney(["bolt", "Bolt", "Bolt is accidentally shipped to New York City and separated from Penny.", ["accidentally shipped", "new york city", "penny"]])),
    q("ce7", "What strands Lightning McQueen in Radiator Springs in Cars (2006)?", "A detour on the way to the most important race of his life", ["A dead battery", "A garage strike", "A closed bridge"],
      "A detour on the road to his biggest race leaves Lightning stuck in Radiator Springs, a forgotten town on old Route 66. The interstate did not have that problem.",
      disney(["cars", "Cars", "Lightning McQueen hits a detour on his way to the most important race of his life and is stranded in Radiator Springs.", ["hits a detour", "radiator springs", "route 66"]])),
    q("ce8", "In Wreck-It Ralph (2012), what keeps the other Sugar Rush racers from wanting Vanellope in the starting lineup?", "Her glitching", ["A dispute over prize money", "A rule that each color can race only once", "Her habit of arriving late"],
      "Vanellope is known as The Glitch, a pixelating programming mistake, and the page says the other racers do not want her or her glitching in the game. Years of rejection gave her a wicked sense of humor.",
      disney(["wreck-it-ralph", "Wreck-It Ralph", "The other Sugar Rush racers don't want Vanellope, a pixelating programming mistake known as The Glitch, or her glitching in the game.", ["the other racers don't want her or her glitching", "pixelating programming mistake"]])),
  ],
};

const foundFamilies: MovieQuiz = {
  slug: "found-families",
  title: "Families, Found and Otherwise",
  shortTitle: "Found families",
  tagline: "Eight families in film: chosen ones, quirky ones and one Sully clan. Who belongs where?",
  seoDescription: "A movie families quiz: 'ohana, the Madrigals, the Drac-Pack, the Sullys and more. Eight sourced questions with funny, precise explanations.",
  spoilerNote: "Light. Questions use each family's setup and avoid later turns.",
  featuring: ["Lilo & Stitch (2002)", "Encanto", "Hotel Transylvania 2", "Guardians of the Galaxy Vol. 2", "Avatar: The Way of Water", "Big Hero 6", "Brave", "Coco"],
  accent: "#e0a21a",
  motif: "house",
  related: ["animated-friendships", "fantasy"],
  questions: [
    q("ff1", "Which Hawaiian idea about family sits at the heart of Lilo & Stitch (2002)?", "'Ohana", ["Aloha", "Mahalo", "Kapu"],
      "Disney's description calls 'ohana the Hawaiian tradition of family. The year in the title keeps this animated film distinct from later versions.",
      disney(["lilo-stitch", "Lilo & Stitch (2002)", "Lilo and Stitch learn about loyalty, friendship and 'ohana, the Hawaiian tradition of family.", ["'ohana", "hawaiian tradition of family"]])),
    q("ff2", "Which Madrigal is the one child without a magical gift in Encanto (2021)?", "Mirabel", ["Luisa", "Isabela", "Dolores"],
      "The magic of the Encanto has blessed every child with a unique gift, from super strength to the power to heal, except Mirabel.",
      disney(["encanto", "Encanto", "Every Madrigal child has a gift except Mirabel.", ["every child in the family", "except one", "mirabel"]])),
    q("ff3", "What is the monster gang called in Hotel Transylvania 2?", "The Drac-Pack", ["The Rat Pack", "The Wolf Pack", "The Brat Pack"],
      "Sony's description says the Drac-Pack is back, starring Drac, Mavis, Johnny and your favorite monsters in a new adventure.",
      sony(["hoteltransylvania2", "Hotel Transylvania 2", "The Drac-Pack, starring Drac, Mavis and Johnny, is back.", ["drac-pack", "drac, mavis, johnny"]])),
    q("ff4", "What family mystery do the Guardians unravel in Guardians of the Galaxy Vol. 2 (2017)?", "Star-Lord's parentage", ["Rocket's origin", "Groot's family tree", "Gamora's inheritance"],
      "Set to the sounds of Awesome Mixtape #2, the film continues the team's adventures as they unravel the mystery of Star-Lord's parentage.",
      disney(["guardians-of-the-galaxy-vol-2", "Guardians of the Galaxy Vol. 2", "The Guardians unravel the mystery of Star-Lord's parentage.", ["mystery of star-lord's parentage"]])),
    q("ff5", "Which family is at the center of Avatar: The Way of Water (2022)?", "The Sully family", ["The Parr family", "The Madrigal family", "The Lightfoot family"],
      "Disney's copy describes the Sully family: Jake, Neytiri and their kids. Not to be confused with Sulley from Monsters, Inc. (2001), who spells his name differently.",
      disney(["avatar-the-way-of-water", "Avatar: The Way of Water", "The story follows the Sully family: Jake, Neytiri and their kids.", ["sully family", "jake, neytiri, and their kids"]])),
    q("ff6", "Which friend in Big Hero 6 (2014) is the neatnik?", "Wasabi", ["Go Go Tomago", "Honey Lemon", "Fred"],
      "Disney's notes sort Hiro's friends by trait: Wasabi is the tidy one, Go Go the thrill-seeker, Honey Lemon the chemistry brain and Fred the superfan.",
      disney(["big-hero-6", "Big Hero 6", "Hiro's friends include adrenaline junkie Go Go Tomago, neatnik Wasabi, chemistry whiz Honey Lemon and fanboy Fred.", ["go go tomago", "neatnik wasabi", "honey lemon", "fanboy fred"]])),
    q("ff7", "Which father in Brave (2012) wears a bear cape and a knobby peg leg from a famous skirmish with a demon bear?", "King Fergus", ["Lord Dingwall", "Lord Macintosh", "Lord MacGuffin"],
      "Disney's character notes describe Fergus as a heroic warrior whose peg leg came from a much-told skirmish with the demon bear Mor'du. Merida's family tree has a lot of hardware.",
      disney(["brave", "Brave", "King Fergus is a heroic warrior with a bear cape and a knobby peg leg from a skirmish with the demon bear Mor'du.", ["king fergus is a heroic warrior", "knobby peg leg", "demon bear mor'du"]])),
    q("ff8", "Where does Miguel travel to learn about his family's stories in Coco (2017)?", "The magical land of his ancestors", ["A hidden jungle temple", "A seaside Italian town", "A floating cloud city"],
      "Disney sends the aspiring musician Miguel to the magical land of his ancestors, where long-buried family history starts to surface.",
      disney(["coco", "Coco", "Miguel journeys to the magical land of his ancestors.", ["magical land of his ancestors"]])),
  ],
};

const heistsAndRescues: MovieQuiz = {
  slug: "heists-and-rescues",
  title: "Heists, Schemes and Daring Rescues",
  shortTitle: "Heists and rescues",
  tagline: "Eight capers, rescues and one stolen set of plans. Name the film, the detective or the target.",
  seoDescription: "A movie heists and rescues quiz: Ant-Man, National Treasure, The Great Mouse Detective, Toy Story 2, Robin Hood, Ice Age, Rogue One and Oliver & Company.",
  spoilerNote: "Moderate. Names mission targets and includes details from Rogue One's climax and the Death Star plans.",
  featuring: ["Ant-Man (2015)", "National Treasure", "The Great Mouse Detective", "Toy Story 2", "Robin Hood (1973)", "Ice Age (2002)", "Rogue One", "Oliver & Company"],
  accent: "#14141f",
  motif: "vault",
  related: ["villain-plans", "plots-live-action"],
  questions: [
    q("hr1", "Scott Lang is introduced as which kind of expert in Ant-Man (2015)?", "A master thief", ["A forensic accountant", "A museum curator", "A veteran test pilot"],
      "The official description calls him a master thief who must embrace his inner hero and help his mentor, Dr. Hank Pym, protect the secret behind the Ant-Man suit.",
      disney(["ant-man", "Ant-Man", "Master thief Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym.", ["master thief scott lang", "help his mentor, dr. hank pym"]])),
    q("hr2", "What legendary prize has Gates been obsessed with since boyhood in National Treasure (2004)?", "The Knights Templar treasure", ["Blackbeard's gold", "Napoleon's crown jewels", "Montezuma's gold"],
      "Disney's page says Gates has been obsessed with the legendary Knights Templar Treasure, the greatest fortune known to man, since he was a boy.",
      disney(["national-treasure", "National Treasure", "Gates has been obsessed since boyhood with finding the Knights Templar Treasure.", ["knights templar treasure", "obsessed"]])),
    q("hr3", "Which rodent detective works in the Sherlock Holmes mold in The Great Mouse Detective (1986)?", "Basil of Baker Street", ["Dodger of New York", "Remy of Paris", "Bernard of Washington"],
      "Disney pitches Basil as a rodent detective for Victorian London. A young mouse girl asks for help after a peglegged bat abducts her toymaker father.",
      disney(["the-great-mouse-detective", "The Great Mouse Detective", "Basil of Baker Street is a rodent detective in the Sherlock Holmes mold; a peglegged bat abducts a toymaker.", ["basil of baker street", "sherlock holmes", "peglegged bat"]])),
    q("hr4", "Who is the obsessive toy collector who kidnaps Woody in Toy Story 2 (1999)?", "Al McWhiggen", ["Stinky Pete", "Sid Phillips", "Andy Davis"],
      "Al McWhiggen, owner of Al's Toy Barn, kidnaps Woody while Andy is at cowboy camp. Stinky Pete is a toy in Al's collection.",
      disney(["toy-story-2", "Toy Story 2", "An obsessive toy collector named Al McWhiggen kidnaps Woody.", ["al mcwhiggen", "kidnaps woody", "toy collector"]])),
    q("hr5", "Whom do Robin Hood and his merry men outfox in Robin Hood (1973)?", "Greedy Prince John", ["King Richard", "Captain Hook", "Jafar"],
      "Robin Hood and Little John spend the film pulling bold, funny stunts at the expense of greedy Prince John, for the benefit of the residents of Sherwood Forest.",
      disney(["robin-hood", "Robin Hood", "Robin Hood and his merry men outfox greedy Prince John and bring happiness to the residents of Sherwood Forest.", ["outfox greedy prince john", "sherwood forest"]])),
    q("hr6", "Who do a mammoth, a sloth and a saber-toothed tiger try to reunite with his hunter father in Ice Age (2002)?", "A one-year-old boy", ["A baby dodo", "A runaway wolf pup", "A young mammoth"],
      "A solitary mammoth, a talkative sloth and a scheming saber-toothed tiger take on the job of getting a one-year-old human boy back to his father, a hunter.",
      disney(["ice-age", "Ice Age", "A mammoth, a sloth and a saber-toothed tiger journey to reunite a one-year-old boy with his hunter father.", ["one year old boy", "hunter father"]])),
    q("hr7", "Which stolen blueprints are copied and hidden in an astromech droid after Jyn Erso steals them?", "The Death Star plans", ["Hyperspace route charts", "A Jedi temple map", "Yoda's lesson notes"],
      "The Databank says the plans contain the Death Star's entire design history, including a flaw in the reactor system. They are stolen by Jyn Erso and hidden in an astromech droid.",
      starwars(["death-star-plans", "Death Star plans", "Jyn Erso steals the Death Star plans, which are hidden in an astromech droid's memory.", ["stolen by jyn erso", "astromech droid"]])),
    q("hr8", "Oliver & Company (1988) is based on which Charles Dickens story?", "Oliver Twist", ["Great Expectations", "A Tale of Two Cities", "A Christmas Carol"],
      "Disney's description calls the film a classic based on Charles Dickens' story Oliver Twist, with dogs Dodger and Tito in New York.",
      disney(["oliver-and-company", "Oliver & Company", "Oliver & Company is based on Charles Dickens' Oliver Twist.", ["charles dickens", "oliver twist"]])),
  ],
};

const sequelIdentity: MovieQuiz = {
  slug: "sequel-identity",
  title: "Sequel Identity: Which Edition Is It?",
  shortTitle: "Sequel identity",
  tagline: "Sequels, prequels and remakes share titles. Eight questions where the edition matters.",
  seoDescription: "A movie sequel and remake identity quiz: Toy Story 3, Finding Dory, Frozen 2, Incredibles 2, Monsters University and named Lion King, Beauty and the Beast, and Aladdin editions.",
  spoilerNote: "Light. Questions ask which film or edition, using official synopses and credits.",
  featuring: ["Toy Story", "Finding Nemo and Dory", "Frozen", "The Incredibles", "Monsters", "The Lion King", "Beauty and the Beast", "Aladdin"],
  accent: "#6b7280",
  motif: "sequel",
  related: ["plots-animated", "animated-friendships"],
  questions: [
    q("si1", "Which Toy Story film introduces Barbie's counterpart Ken and a strawberry-scented bear?", "Toy Story 3 (2010)", ["Toy Story (1995)", "Toy Story 2 (1999)", "Toy Story 4 (2019)"],
      "Disney's page for Toy Story 3 says the gang returns with a few new faces, including Ken and a strawberry-scented bear named Lots-O-Huggin' Bear.",
      disney(["toy-story-3", "Toy Story 3", "Toy Story 3 introduces Ken and a strawberry-scented bear named Lots-O-Huggin' Bear.", ["ken", "strawberry-scented bear", "lots-o-huggin' bear"]])),
    q("si2", "Which sequel to Finding Nemo reunites a forgetful blue tang with her loved ones?", "Finding Dory (2016)", ["Finding Nemo (2003)", "Monsters University (2013)", "Cars 2 (2011)"],
      "Finding Dory reunites the friendly-but-forgetful blue tang fish with her loved ones and returns to the underwater world of the original film.",
      disney(["finding-dory", "Finding Dory", "Finding Dory reunites the forgetful blue tang fish with her loved ones.", ["blue tang", "loved ones"]])),
    q("si3", "Which film asks why Elsa was born with magical powers?", "Frozen 2 (2019)", ["Frozen (2013)", "Moana (2016)", "Olaf's Frozen Adventure (2017)"],
      "Disney's page for Frozen 2 opens with that question and takes Elsa to the enchanted forests and dark seas beyond Arendelle.",
      disney(["frozen-2", "Frozen 2", "Frozen 2 asks why Elsa was born with magical powers.", ["why was elsa born with magical powers"]])),
    q("si4", "Which sequel has Helen called on to bring Supers back while Bob handles everyday heroics at home?", "Incredibles 2 (2018)", ["The Incredibles (2004)", "Big Hero 6 (2014)", "Cars 3 (2017)"],
      "In Incredibles 2, Helen is called on to bring Supers back while Bob navigates the day-to-day heroics of normal life at home.",
      disney(["incredibles-2", "Incredibles 2", "Helen is called on to bring Supers back while Bob navigates the day-to-day heroics of normal life at home.", ["helen", "bring supers back", "\"normal\" life at home"]])),
    q("si5", "Which film tells how Mike Wazowski and Sulley met?", "Monsters University (2013)", ["Monsters, Inc. (2001)", "Luca (2021)", "Hotel Transylvania 2 (2015)"],
      "Disney describes the story of how two mismatched monsters met and became lifelong friends. It is set before Monsters, Inc., so it works as a prequel.",
      disney(["monsters-university", "Monsters University", "The story of how two mismatched monsters met and became lifelong friends.", ["mismatched monsters", "lifelong friends", "monsters university"]])),
    q("si6", "Which edition of The Lion King is directed by Roger Allers and Rob Minkoff?", "The Lion King (1994)", ["The Lion King (2019)", "Mufasa: The Lion King (2024)", "The Lion King 1 1/2 (2004)"],
      "Disney lists Roger Allers and Rob Minkoff as the directors of the 1994 animated film. The other choices are separate films, so the year does the sorting.",
      disney(["the-lion-king", "The Lion King (1994)", "The 1994 Lion King is directed by Roger Allers and Rob Minkoff.", ["roger allers", "rob minkoff"]])),
    q("si7", "Which edition of Beauty and the Beast was the first animated feature nominated for Best Picture?", "Beauty and the Beast (1991)", ["Beauty and the Beast (2017)", "Beauty and the Beast: The Enchanted Christmas (1997)", "Belle's Magical World (1998)"],
      "Disney's description for the 1991 animated film calls it the first animated feature in Oscar history nominated for Best Picture. The 2017 edition is a live-action retelling.",
      disney(["beauty-and-the-beast", "Beauty and the Beast (1991)", "The 1991 animated film was the first animated feature nominated for Best Picture.", ["first animated feature", "best picture"]])),
    q("si8", "Robin Williams voices the Genie in which of these films?", "Aladdin (1992)", ["Aladdin (2019)", "The Return of Jafar (1994)", "Hercules (1997)"],
      "Disney's page for the 1992 animated Aladdin credits the Genie as voiced by the unforgettable Robin Williams. Titles that share Aladdin's characters are separate films, so check the year.",
      disney(["aladdin", "Aladdin (1992)", "The 1992 animated Aladdin features the Genie voiced by Robin Williams.", ["hilarious genie", "robin williams"]])),
  ],
};

export const MOVIE_QUIZZES: readonly MovieQuiz[] = [
  plotsAnimated, plotsLiveAction, dayJobs, dilemmas, sidekicks, villainPlans, objects, fictionalPlaces,
  animatedFriendships, sciFi, fantasy, causeAndEffect, foundFamilies, heistsAndRescues, sequelIdentity,
];

export const MOVIE_QUIZ_BASE_PATH = "/trivia/movies/";
/** Namespaced group-room slug: the Worker catalog and the room both use this. */
export const MOVIE_GROUP_PREFIX = "movies-";

export function getMovieQuiz(slug: string): MovieQuiz | undefined {
  return MOVIE_QUIZZES.find((quiz) => quiz.slug === slug);
}
export function movieQuizPath(slug: string): string {
  return `${MOVIE_QUIZ_BASE_PATH}${slug}/`;
}
export function movieGroupSlug(slug: string): string {
  return `${MOVIE_GROUP_PREFIX}${slug}`;
}
