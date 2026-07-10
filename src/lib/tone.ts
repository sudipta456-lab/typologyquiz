export type ToneMode = "chill" | "roast";

/** Optional dual-tone blurbs keyed by type label (case-insensitive). */
const TONE_BY_LABEL: Record<string, { chill: string; roast: string }> = {
  // Friend roles
  "the planner": {
    chill: "You make the group happen. Reliable energy. Just let others own a piece of the plan sometimes.",
    roast: "You are the human calendar app. Cool, but stop sighing when nobody else makes the Google Doc.",
  },
  "the comic": {
    chill: "You keep energy light and people close. Humor is your glue.",
    roast: "Group chat jester. Funny until someone needs a real talk and you meme-dodge it.",
  },
  "the listener": {
    chill: "You are the safe place. People vent to you because you actually hear them.",
    roast: "Walking diary with Wi-Fi. Great, but you deserve a turn to talk without fixing everyone first.",
  },
  "the spark": {
    chill: "You bring novelty and nerve. Adventure mode is your default.",
    roast: "Main character of the field trip. Iconic, until the group is still putting on shoes.",
  },
  "the anchor": {
    chill: "You stabilize the group. People trust you with secrets and storms.",
    roast: "Default parent friend. Solid, but you are not a free crisis hotline with snacks.",
  },
  // Attachment
  "secure connector": {
    chill: "You can get close without spinning out. Drama happens, it does not own you.",
    roast: "Disgustingly well-adjusted. The group chat therapy case study everyone needs.",
  },
  "anxious connector": {
    chill: "You care hard and notice every shift in tone. Reassurance helps you settle.",
    roast: "Left on read and your brain writes a whole Netflix drama. Soften the plot twists.",
  },
  "independent connector": {
    chill: "You value space and self-reliance. Opening up can feel risky.",
    roast: "Emotional airplane mode. People care, they just need a landing window.",
  },
  "push-pull connector": {
    chill: "You want closeness and also fear it. Naming the pattern helps calm it down.",
    roast: "Come here / go away energy. Your friends need a user manual and a seatbelt.",
  },
  // Social battery
  "low social battery": {
    chill: "People time drains you faster than it fills you. Protect quiet recharge windows.",
    roast: "Your social battery is a flip phone. One group hang and you need three business days offline.",
  },
  "selective battery": {
    chill: "You can enjoy groups with the right people and pace. Choose hangouts on purpose.",
    roast: "RSVP maybe forever. You love your friends and also love cancelling at 4pm.",
  },
  "balanced battery": {
    chill: "You can go social or solo and recover either way. Watch stacked weeks without downtime.",
    roast: "Main character with a charger. Flexible until midterms stack three parties on one weekend.",
  },
  "high social battery": {
    chill: "Connection fuels you. Alone time is fine, but you light up around people.",
    roast: "Extrovert final boss. Your idea of rest is another group chat. Read the room's battery too.",
  },
  // Conflict
  competitor: {
    chill: "You fight for your view. Clear standards. Try listening first, then arguing.",
    roast: "Debate club energy in a friend argument. Winning is fun until nobody texts back.",
  },
  avoider: {
    chill: "You dodge heat to stay safe. Less pointless drama, but problems can pile up.",
    roast: "Professional subject-changer. The issue is not gone, it is just in the group chat archives.",
  },
  peacekeeper: {
    chill: "You smooth things over. Kindness is real. Your needs still count.",
    roast: "Human white flag. Cool peacemaker, bad at wanting things out loud.",
  },
  "deal-maker": {
    chill: "You split the difference fast. Fair and efficient.",
    roast: "Switzerland with a spreadsheet. Sometimes nobody gets what they actually wanted.",
  },
  "problem-solver": {
    chill: "You dig for win-win. Respect and creativity. It takes time.",
    roast: "HR of the friend group. Noble, exhausting, still not paid.",
  },
  // Career
  "maker / doer": {
    chill: "Hands-on, build-and-fix energy. You learn by doing.",
    roast: "Would rather rebuild the universe than write a reflection paragraph. Valid.",
  },
  "explorer / analyst": {
    chill: "Curious mind that likes puzzles and deep dives. You want the why.",
    roast: "Wikipedia rabbit hole with legs. Tell us the answer before the bell rings.",
  },
  creator: {
    chill: "Ideas and original style matter. You thrive when you invent.",
    roast: "Main character aesthetic. The group project logo will be fire; the deadline might not.",
  },
  "helper / connector": {
    chill: "People are your project. Teaching and support feel meaningful.",
    roast: "Group mom energy. Soft power, heavy emotional backpack.",
  },
  "starter / leader": {
    chill: "You like initiative and moving people toward a goal.",
    roast: "Club president in training. Charisma high, listening optional (work on that).",
  },
  organizer: {
    chill: "Order and systems are strengths. You make chaos usable.",
    roast: "Color-coded folders person. We need you. Please stop judging the mess pile.",
  },
  "project captain": {
    chill: "You steer the group project ship. Direction is your gift. Delegate on purpose.",
    roast: "Unofficial team lead without the grade boost. Stop carrying the whole Google Drive alone.",
  },
  "quiet finisher": {
    chill: "You make the project real. Output is your strength. Claim credit for what you ship.",
    roast: "Invisible work horse. The slides exist because of you. Say that out loud next time.",
  },
  "idea machine": {
    chill: "You spark the concept. Originality is high. Balance starting with finishing.",
    roast: "Brainstorm legend, deadline negotiator. Pick one idea and actually ship it.",
  },
  "team glue": {
    chill: "You hold people together. Harmony matters. Do not absorb all the stress free.",
    roast: "Emotional duct tape of period 4. Soft power is real. Boundaries are too.",
  },
  "deadline wildcard": {
    chill: "You work in clutch bursts. Protect the group from pure last-minute chaos.",
    roast: "Main character of 11:58pm. Talented. Terrifying for the group chat.",
  },
  "instant replier": {
    chill: "Speed is your online love language. Present and responsive.",
    roast: "Always online energy. Your battery and your sleep both want a word.",
  },
  "slow burn texter": {
    chill: "You reply when you have brain space. Boundaries are healthy.",
    roast: "Professional left-on-read. They will survive. Maybe send a sticker later.",
  },
  "minimalist texter": {
    chill: "Short and clean texts. Efficient. Add a little warmth when it matters.",
    roast: "K. as a personality. Mean it less cold next time.",
  },
  "full-send texter": {
    chill: "Emojis, essays, energy. Your vibe is rarely confusing.",
    roast: "Novel-length texts. Sometimes a call is faster. Still iconic.",
  },
  "tone-checker": {
    chill: "You craft messages carefully. Fewer accidents, more peace.",
    roast: "Three drafts for okay. The overthink is loud. Hit send.",
  },
  "sprint tester": {
    chill: "Bursts and practice tests suit you. Use timers and planned breaks.",
    roast: "Pomodoro kid. Long silent marathons are your villain origin story.",
  },
  "solo marathoner": {
    chill: "Deep blocks alone suit you. Start earlier than panic mode.",
    roast: "Library hermit arc. Come up for water and one human interaction.",
  },
  "study crew type": {
    chill: "Talking it out helps. Mix group for hard topics with solo lock-in time.",
    roast: "Study group is 40 percent work 60 percent lore. Set a timer.",
  },
  "noise-friendly focuser": {
    chill: "Light buzz can help. Build a consistent place or playlist for work mode.",
    roast: "Cafe main character. Headphones on, productivity maybe.",
  },
  "flexible studier": {
    chill: "You adapt method to the task. That is a real skill.",
    roast: "Jack of all study modes. Pick one before the night before.",
  },
  "plan hopper": {
    chill: "You hate missing out and keep options open. Lock one plan early sometimes.",
    roast: "RSVP chaos gremlin. Your friends need a final answer before sunset.",
  },
  "fomo-heavy": {
    chill: "Being left out hits hard. Build a few deep plans so you are not chasing every story.",
    roast: "Story viewer professional. Other people nights look louder than they feel.",
  },
  "jomo guardian": {
    chill: "Joy of missing out is real. Protect energy on purpose.",
    roast: "Stay-home final boss. Just make sure isolation is a choice, not a rut.",
  },
  "maybe-later planner": {
    chill: "Flexibility is your style. Friends may need clearer yes or no answers.",
    roast: "Perpetual maybe. The group chat is not a suggestion box forever.",
  },
  "balanced planner": {
    chill: "You can hang or rest without spiraling. Stay aware of scroll pressure.",
    roast: "Healthy enough to annoy both FOMO and hermit friends. Respect.",
  },
};

export function toneBlurb(
  typeLabel: string | undefined,
  fallback: string | undefined,
  mode: ToneMode
): string {
  if (!typeLabel && !fallback) return "";
  const key = (typeLabel || "").trim().toLowerCase();
  const entry = TONE_BY_LABEL[key];
  if (entry) return mode === "roast" ? entry.roast : entry.chill;
  if (!fallback) return typeLabel || "";
  if (mode === "chill") return fallback;
  // Generic roast wrapper when no custom line exists
  return `${fallback} (Said nicer than your group chat would.)`;
}

export function toneStorageKey(testSlug: string) {
  return `typologyquiz_tone_${testSlug}`;
}
