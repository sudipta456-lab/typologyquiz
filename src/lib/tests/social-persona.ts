import { TestDefinition } from "../types";

// Your Social Media Persona — 4 online styles (NEW).
// Type quiz: ipsative pick-top with flat-profile -> "The Switch-Hitter".
// Each axis mixes forward + reverse items so straight-lining -> balanced.
// Non-judgy by design: lurking, posting, curating, connecting are all fine.

const questions = [
  // Lurker — watches everything, rarely posts, reads the comments
  { id: "sp_lu1", text: "I scroll and read way more than I ever post.", type: "likert" as const, axis: "lurker", direction: 1 as const },
  { id: "sp_lu2", text: "I'll read a whole comment section without leaving one of my own.", type: "likert" as const, axis: "lurker", direction: 1 as const },
  { id: "sp_lu3", text: "I like keeping up with everyone quietly, without being seen doing it.", type: "likert" as const, axis: "lurker", direction: 1 as const },
  { id: "sp_lu4", text: "Days can go by where I watch a lot but post nothing at all.", type: "likert" as const, axis: "lurker", direction: 1 as const },
  { id: "sp_lu5", text: "If I've got something to share, I post it rather than just watch.", type: "likert" as const, axis: "lurker", direction: -1 as const },

  // Poster — shares often, stories/updates, thinks out loud online
  { id: "sp_po1", text: "When something happens, my instinct is to post about it.", type: "likert" as const, axis: "poster", direction: 1 as const },
  { id: "sp_po2", text: "My stories or updates get refreshed pretty regularly.", type: "likert" as const, axis: "poster", direction: 1 as const },
  { id: "sp_po3", text: "I think out loud online — random thoughts, memes, whatever's on my mind.", type: "likert" as const, axis: "poster", direction: 1 as const },
  { id: "sp_po4", text: "Friends probably know what I'm up to from my feed.", type: "likert" as const, axis: "poster", direction: 1 as const },
  { id: "sp_po5", text: "I rarely post updates about my own life.", type: "likert" as const, axis: "poster", direction: -1 as const },

  // Curator — careful aesthetic feed, plans/deletes posts, cares how it looks
  { id: "sp_cu1", text: "My feed has a look, and I keep it that way on purpose.", type: "likert" as const, axis: "curator", direction: 1 as const },
  { id: "sp_cu2", text: "I'll plan a post, or delete one later if it doesn't fit.", type: "likert" as const, axis: "curator", direction: 1 as const },
  { id: "sp_cu3", text: "How my profile looks as a whole genuinely matters to me.", type: "likert" as const, axis: "curator", direction: 1 as const },
  { id: "sp_cu4", text: "I'll pick the right photo, caption, and timing before I hit share.", type: "likert" as const, axis: "curator", direction: 1 as const },
  { id: "sp_cu5", text: "I post whatever, whenever — I don't fuss over how it all looks together.", type: "likert" as const, axis: "curator", direction: -1 as const },

  // Connector — comments, DMs, replies, keeps the conversation going
  { id: "sp_co1", text: "I'm quick to comment, react, or reply to what friends post.", type: "likert" as const, axis: "connector", direction: 1 as const },
  { id: "sp_co2", text: "A lot of my online time is spent in DMs and group chats.", type: "likert" as const, axis: "connector", direction: 1 as const },
  { id: "sp_co3", text: "I keep conversations going — I don't leave people on read for long.", type: "likert" as const, axis: "connector", direction: 1 as const },
  { id: "sp_co4", text: "I use social apps mostly to talk with people, not just to browse.", type: "likert" as const, axis: "connector", direction: 1 as const },
  { id: "sp_co5", text: "I mostly take things in online rather than message back and forth.", type: "likert" as const, axis: "connector", direction: -1 as const },
];

export const socialPersona: TestDefinition = {
  slug: "social-persona",
  title: "Your Social Media Persona",
  category: "character",
  description:
    "Quiet lurker, out-loud poster, aesthetic curator, or the one keeping the chat alive? Find your online lane.",
  whatYoullLearn:
    "The way you naturally show up on social apps, what's good about it, and a gentle thing to keep an eye on.",
  timeMinutes: 4,
  itemCount: 20,
  license: "Original TypologyQuiz items for self-reflection only.",
  isNew: true,
  scoreMode: "type",
  questions,
  axes: [
    { key: "lurker", label: "Lurker", lowLabel: "Low", highLabel: "High", description: "Watches lots, posts little." },
    { key: "poster", label: "Poster", lowLabel: "Low", highLabel: "High", description: "Shares often and out loud." },
    { key: "curator", label: "Curator", lowLabel: "Low", highLabel: "High", description: "Careful, aesthetic feed." },
    { key: "connector", label: "Connector", lowLabel: "Low", highLabel: "High", description: "Comments, DMs, keeps convos going." },
  ],
  typeMeta: {
    lurker: {
      label: "The Lurker",
      description:
        "You take it all in without leaving many fingerprints — reading comments, keeping up, staying low-key. Strength: you're a calm observer who doesn't chase attention. Watch-out: nothing wrong with lurking, but if you ever want in on the conversation, one comment is all it takes.",
    },
    poster: {
      label: "The Poster",
      description:
        "You share as life happens — updates, stories, thoughts out loud. Strength: friends feel close to you because they know what's going on. Watch-out: the feed doesn't have to hold everything; some moments are nice to keep just for you.",
    },
    curator: {
      label: "The Curator",
      description:
        "Your feed has a vibe and you keep it intentional — planned posts, the right photo, a look that holds together. Strength: taste and care that clearly shows. Watch-out: it's okay to post something imperfect; the aesthetic doesn't have to be a rule you can't break.",
    },
    connector: {
      label: "The Connector",
      description:
        "You're in the comments, the DMs, the group chat — keeping conversations alive. Strength: you make the online space feel warm and social. Watch-out: you can put down the phone mid-chat; people won't disappear if you take a breather.",
    },
  },
  balanced: {
    label: "The Switch-Hitter",
    description:
      "No single lane owns your online style — you lurk one day, post the next, tidy your feed, and jump into the group chat depending on your mood. Adaptable and hard to pin down, which is honestly pretty handy.",
  },
  resultType: "orbit",
  funFacts: [
    "Most people quietly lurk far more than they post — the 'silent majority' of any feed is bigger than it looks.",
    "How you show up online often shifts by app: a poster on one platform can be a total lurker on another.",
    "Compare with friends — a poster plus a connector basically runs the group chat, while two lurkers keep each other blissfully off the radar.",
  ],
  disclaimer:
    "A light vibe check on how you use social apps, not a verdict on you. Your online style shifts with mood, app, and who's around.",
};
