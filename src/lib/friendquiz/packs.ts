/**
 * Friend quiz prompt packs.
 *
 * Every question is phrased ABOUT the quiz creator ("What's my go-to snack?")
 * and answered twice: once by the creator, once by each guessing friend.
 * Fixed choice options keep guessing scoreable with no free-text matching.
 *
 * Content rules (see docs/QUIZ_STYLE.md): original, school-safe, no PII
 * prompts (nothing about address, school name, passwords, family details),
 * no em-dashes, no emoji.
 */

export type FriendQuestion = {
  id: string;
  text: string;
  options: string[];
};

export type FriendPack = {
  id: string;
  title: string;
  blurb: string;
  questions: FriendQuestion[];
};

export const MIX_PACK_ID = "mix";

export const FRIEND_PACKS: FriendPack[] = [
  {
    id: "basics",
    title: "The Basics",
    blurb: "Snacks, seasons, colors. If they miss these, are you even friends?",
    questions: [
      {
        id: "b1",
        text: "What's my go-to snack?",
        options: [
          "Chips or something salty",
          "Candy or chocolate",
          "Fruit, actually",
          "Instant noodles",
          "Whatever is nearest",
        ],
      },
      {
        id: "b2",
        text: "What's my favorite season?",
        options: ["Summer", "Winter", "Fall", "Spring"],
      },
      {
        id: "b3",
        text: "Which color family do I always pick?",
        options: [
          "Blues",
          "Reds and pinks",
          "Greens",
          "Black or grey",
          "Purples",
          "Yellows and oranges",
        ],
      },
      {
        id: "b4",
        text: "What's my drink order?",
        options: [
          "Just water",
          "Iced coffee",
          "Bubble tea",
          "Soda",
          "Juice or a smoothie",
        ],
      },
      {
        id: "b5",
        text: "What food could I eat every single day?",
        options: [
          "Pizza",
          "Pasta",
          "Rice dishes",
          "Tacos or wraps",
          "Burgers",
          "Salads, honestly",
        ],
      },
      {
        id: "b6",
        text: "What's my ideal weather?",
        options: [
          "Sunny and hot",
          "Cool and cloudy",
          "Rainy",
          "Snowy",
          "Stormy and dramatic",
        ],
      },
      {
        id: "b7",
        text: "Breakfast for me is...",
        options: [
          "A full proper meal",
          "Something quick on the way",
          "Just a drink",
          "I skip it",
          "Depends on the day",
        ],
      },
      {
        id: "b8",
        text: "Sweet or salty?",
        options: [
          "Sweet always",
          "Salty always",
          "Both at once",
          "Neither, really",
        ],
      },
      {
        id: "b9",
        text: "What's my favorite time of day?",
        options: [
          "Early morning",
          "Afternoon",
          "Evening",
          "Late late night",
        ],
      },
      {
        id: "b10",
        text: "Pick my dessert.",
        options: [
          "Ice cream",
          "Cake or brownies",
          "Cookies",
          "Something fruity",
          "I'd trade dessert for fries",
        ],
      },
    ],
  },
  {
    id: "deep",
    title: "Deep Cuts",
    blurb: "Dream jobs, comfort movies, tiny fears. For friends who listen.",
    questions: [
      {
        id: "d1",
        text: "What's my dream job vibe?",
        options: [
          "Something creative",
          "Something techy",
          "Helping people",
          "Sports or fitness",
          "Running my own thing",
          "Still figuring it out",
        ],
      },
      {
        id: "d2",
        text: "My comfort movie or show is...",
        options: [
          "A comedy",
          "Something animated",
          "A romance",
          "Action or superhero",
          "Something scary",
          "A cozy rewatch of anything",
        ],
      },
      {
        id: "d3",
        text: "What do I do when I'm stressed?",
        options: [
          "Go quiet",
          "Talk it out",
          "Sleep",
          "Snack about it",
          "Disappear into my phone",
          "Clean or organize everything",
        ],
      },
      {
        id: "d4",
        text: "Everyone's safe, but I can grab one thing in a fire. What is it?",
        options: [
          "My phone",
          "Something from childhood",
          "My notes or sketchbook",
          "My gaming setup",
          "Nothing, just leave",
        ],
      },
      {
        id: "d5",
        text: "My secret talent is closest to...",
        options: [
          "Music or singing",
          "Drawing or making things",
          "Being weirdly good at trivia",
          "Cooking or baking",
          "Sports tricks",
          "Impressions and voices",
        ],
      },
      {
        id: "d6",
        text: "Which superpower would I pick?",
        options: [
          "Invisibility",
          "Flying",
          "Reading minds",
          "Time travel",
          "Teleporting",
          "Super strength",
        ],
      },
      {
        id: "d7",
        text: "If I won a big prize, I would...",
        options: [
          "Save most of it",
          "Spend it on trips",
          "Buy stuff for people I love",
          "Upgrade all my tech",
          "Panic first, then save it",
        ],
      },
      {
        id: "d8",
        text: "What's my biggest small fear?",
        options: [
          "Spiders and bugs",
          "Heights",
          "The dark",
          "Talking in front of people",
          "Deep water",
          "Needles",
        ],
      },
      {
        id: "d9",
        text: "What song mood do I play on repeat?",
        options: [
          "Sad songs even when I'm fine",
          "Hype songs",
          "Calm chill playlists",
          "Throwbacks",
          "Whatever is trending",
        ],
      },
      {
        id: "d10",
        text: "In ten years, I most want...",
        options: [
          "To travel a lot",
          "A career I can brag about",
          "My people living close by",
          "A quiet comfy life",
          "To be known for something",
          "No idea, and that's fine",
        ],
      },
    ],
  },
  {
    id: "chaos",
    title: "Chaos Mode",
    blurb: "Horse-sized ducks and villain origin stories. Vibes-based scoring.",
    questions: [
      {
        id: "c1",
        text: "Would I rather fight one horse-sized duck or a hundred duck-sized horses?",
        options: [
          "The one giant duck",
          "The hundred tiny horses",
          "I'd try to befriend them",
          "I would simply run",
        ],
      },
      {
        id: "c2",
        text: "What's my zombie apocalypse role?",
        options: [
          "The leader with the plan",
          "The fighter",
          "The one carrying snacks",
          "The comic relief",
          "The first to go, honestly",
        ],
      },
      {
        id: "c3",
        text: "If I were a kitchen utensil, I'd be...",
        options: [
          "A spoon (comforting)",
          "A fork (gets stuff done)",
          "A whisk (chaotic energy)",
          "A knife (sharp and focused)",
          "That weird gadget nobody understands",
        ],
      },
      {
        id: "c4",
        text: "What's my most likely villain origin story?",
        options: [
          "Slow wifi",
          "Someone ate my leftovers",
          "Group project betrayal",
          "Being told to calm down",
          "Losing a board game",
        ],
      },
      {
        id: "c5",
        text: "If animals could talk, which would I say is the rudest?",
        options: ["Cats", "Geese", "Seagulls", "Parrots", "Dolphins"],
      },
      {
        id: "c6",
        text: "One day of invisibility. What do I do?",
        options: [
          "Prank everyone",
          "Nap somewhere forbidden",
          "Listen in on what people say about me",
          "Sneak into a concert",
          "Nothing different, I'm already low-key",
        ],
      },
      {
        id: "c7",
        text: "Forever choice: no music or no movies?",
        options: [
          "Drop movies, keep music",
          "Drop music, keep movies",
          "I would simply perish",
          "I'd find a loophole somehow",
        ],
      },
      {
        id: "c8",
        text: "What's my sleep style?",
        options: [
          "Blanket burrito",
          "Starfish takeover",
          "One leg out, always",
          "Fifteen pillows minimum",
          "Can fall asleep anywhere, anytime",
        ],
      },
      {
        id: "c9",
        text: "If my life had a loading screen tip, it would say...",
        options: [
          "Do not talk to them before food",
          "Will laugh at the wrong moment",
          "Runs on chaos and snacks",
          "Overthinks the overthinking",
          "Surprisingly wise at 2am",
        ],
      },
      {
        id: "c10",
        text: "Aliens land and pick me as Earth's ambassador. I...",
        options: [
          "Give a formal speech",
          "Show them memes immediately",
          "Ask to leave with them",
          "Introduce them to snacks",
          "Faint, respectfully",
        ],
      },
    ],
  },
  {
    id: "school",
    title: "School Life",
    blurb: "Free seating, group projects, the single surviving pen.",
    questions: [
      {
        id: "s1",
        text: "Free seating in class. Where am I?",
        options: [
          "Front, actually listening",
          "Middle, blending in",
          "Back, obviously",
          "Next to my friends, wherever that is",
          "Wherever has a window",
        ],
      },
      {
        id: "s2",
        text: "What's my group project role?",
        options: [
          "The organizer",
          "The one who does it all the night before",
          "The slide designer",
          "The moral support",
          "The one who presents",
        ],
      },
      {
        id: "s3",
        text: "What's my favorite kind of class?",
        options: [
          "Art or music",
          "Gym",
          "Science",
          "English or languages",
          "Math",
          "Lunch counts, right?",
        ],
      },
      {
        id: "s4",
        text: "What's in my bag right now?",
        options: [
          "Perfectly organized supplies",
          "A single pen, surviving alone",
          "Snacks, mostly snacks",
          "Papers from months ago",
          "Chargers and cables",
        ],
      },
      {
        id: "s5",
        text: "Test tomorrow. Tonight I...",
        options: [
          "Already studied, obviously",
          "Cram until way too late",
          "Watch one video, then panic",
          "Sleep and let fate decide",
          "Drag friends into a study group",
        ],
      },
      {
        id: "s6",
        text: "My handwriting is...",
        options: [
          "Actually nice",
          "Readable if you squint",
          "Doctor-note scribbles",
          "Different every single day",
          "Basically all caps",
        ],
      },
      {
        id: "s7",
        text: "Free period. Where do I go?",
        options: [
          "The library, for real",
          "Wherever the food is",
          "Somewhere loud with friends",
          "Napping wherever possible",
          "Finishing homework due next period",
        ],
      },
      {
        id: "s8",
        text: "Which school event would I actually show up for?",
        options: [
          "The big game",
          "Talent show",
          "A dance or social",
          "Quiz or games night",
          "None, I support from home",
        ],
      },
      {
        id: "s9",
        text: "Teacher says pick a partner. I...",
        options: [
          "Already have one locked in",
          "Look around in quiet panic",
          "Wait to be picked",
          "Ask to work alone",
          "Team up with whoever is closest",
        ],
      },
      {
        id: "s10",
        text: "What's my school superpower?",
        options: [
          "Never loses their stuff",
          "Finishes tests first",
          "Makes any class fun",
          "Somehow knows everything happening",
          "Can nap with eyes open",
        ],
      },
    ],
  },
];

const QUESTION_INDEX: Map<string, FriendQuestion> = new Map(
  FRIEND_PACKS.flatMap((p) => p.questions.map((q) => [q.id, q] as const))
);

export function getPack(id: string): FriendPack | undefined {
  return FRIEND_PACKS.find((p) => p.id === id);
}

export function getQuestion(id: string): FriendQuestion | undefined {
  return QUESTION_INDEX.get(id);
}

export function packTitle(packId: string): string {
  if (packId === MIX_PACK_ID) return "Mix";
  return getPack(packId)?.title || "Friend Quiz";
}

/**
 * Sample 10 questions across all packs for "mix" mode:
 * 3 basics, 3 deep cuts, 2 chaos, 2 school, shuffled.
 */
export function sampleMix(): FriendQuestion[] {
  const counts: Record<string, number> = { basics: 3, deep: 3, chaos: 2, school: 2 };
  const picked: FriendQuestion[] = [];
  for (const pack of FRIEND_PACKS) {
    const want = counts[pack.id] ?? 0;
    const pool = [...pack.questions];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    picked.push(...pool.slice(0, want));
  }
  for (let i = picked.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [picked[i], picked[j]] = [picked[j], picked[i]];
  }
  return picked;
}
