import { TestDefinition } from "../types";

// Delulu Level: how much confident fantasy runs your decision-making.
// Spectrum axis. Higher = more gloriously delulu. TikTok-vocabulary friendly.

const questions = [
  { id: "dl_01", text: "I have imagined my future success in detail, including the interview about it.", type: "likert" as const, axis: "delulu", direction: 1 as const },
  { id: "dl_02", text: "If someone likes one of my posts, I assume we're basically connected now.", type: "likert" as const, axis: "delulu", direction: 1 as const },
  { id: "dl_03", text: "I believe things will work out for me specifically, for no particular reason.", type: "likert" as const, axis: "delulu", direction: 1 as const },
  { id: "dl_04", text: "I've practiced an acceptance speech, award show or otherwise, in the mirror.", type: "likert" as const, axis: "delulu", direction: 1 as const },
  { id: "dl_05", text: "When someone says 'we should hang out sometime', I take it seriously.", type: "likert" as const, axis: "delulu", direction: 1 as const },
  { id: "dl_06", text: "I've caught myself daydreaming mid-conversation about a totally different life.", type: "likert" as const, axis: "delulu", direction: 1 as const },
  { id: "dl_07", text: "Before anything big, I imagine it going wrong first so I'm not shocked.", type: "likert" as const, axis: "delulu", direction: -1 as const },
  { id: "dl_08", text: "I need evidence and a plan before I let myself want something out loud.", type: "likert" as const, axis: "delulu", direction: -1 as const },
  { id: "dl_09", text: "I relate to characters who are wildly overconfident. Deeply. Personally.", type: "likert" as const, axis: "delulu", direction: 1 as const },
  { id: "dl_10", text: "I keep my expectations low so life can only surprise me upward.", type: "likert" as const, axis: "delulu", direction: -1 as const },
  { id: "dl_11", text: "My friends would say I live slightly ahead of reality.", type: "likert" as const, axis: "delulu", direction: 1 as const },
  { id: "dl_12", text: "Manifesting is not a joke to me. It's a lifestyle.", type: "likert" as const, axis: "delulu", direction: 1 as const },
];

export const deluluLevel: TestDefinition = {
  slug: "delulu-level",
  title: "Delulu Level Test",
  category: "personality",
  description:
    "Delulu is the solulu. How far do you live ahead of reality, and is it helping?",
  whatYoullLearn:
    "Your official delulu band, from grounded realist to main character of your own anime, plus what each level does well.",
  timeMinutes: 3,
  itemCount: 12,
  license: "Original TypologyQuiz items (self-reflection only)",
  isNew: true,
  scoreMode: "spectrum",
  questions,
  axes: [
    {
      key: "delulu",
      label: "Delulu level",
      lowLabel: "Certified realist",
      highLabel: "Full delulu",
      description: "Higher scores mean imagination is doing a lot of the driving.",
    },
  ],
  resultType: "wave",
  spectrumBands: [
    {
      max: 25,
      label: "Certified Realist",
      description:
        "You don't hope, you plan. Nothing gets wanted out loud without receipts. Superpower: nothing blindsides you. Cost: sometimes you talk yourself out of good things before they start. Let one dream stay unpractical this week.",
    },
    {
      max: 45,
      label: "Grounded, With Daydreams",
      description:
        "You keep one foot in reality and one in the fantasy draft of your life. Healthy balance: you can picture the win and also do the homework. The dream stays fun because it never has to carry everything.",
    },
    {
      max: 65,
      label: "Hopeful Overthinker",
      description:
        "You believe it'll work out for you specifically, then spend three hours reviewing whether that's allowed. Your optimism has a lawyer. Honestly effective: big dreams, small print, steady progress.",
    },
    {
      max: 85,
      label: "Delulu but Make It Cute",
      description:
        "The interview-in-the-mirror has happened. More than once. You narrate your own montage. Here's the thing: most impressive people were once 'unrealistically' confident. Yours might be fuel. Point it at something.",
    },
    {
      max: 100,
      label: "Living in Your Own Anime",
      description:
        "Full main character. The world is your training arc and every small event is foreshadowing. Genuinely? Keep some of it. Delusional belief builds real things. Just keep one friend whose job is saying 'check your bank app.'",
    },
  ],
  funFacts: [
    "'Delulu' blew up from fandom culture, short for delusional, and got reclaimed as a compliment.",
    "A little positive illusion is linked with resilience. Total realism all the time is exhausting.",
    "The sweet spot isn't zero delulu. It's delulu with a calendar.",
  ],
  disclaimer:
    "This is a playful self-reflection quiz about optimism and imagination, not a psychological assessment.",
};
