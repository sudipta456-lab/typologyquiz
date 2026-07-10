import { SITE } from "./site";

export type ShareNetwork = {
  name: string;
  /** If set, open this URL in a new tab */
  href?: string;
  /** If set, copy this text (for apps without a clean web share URL) */
  copyText?: string;
  hint?: string;
};

export function inviteText(url: string = SITE.url): string {
  return `Come take free typology quizzes with me on TypologyQuiz. No account needed. ${url}`;
}

export function inviteCaptionShort(url: string = SITE.url): string {
  return `Figure yourself out on TypologyQuiz (free, private) ${url}`;
}

export function resultShareText(
  testTitle: string,
  resultLabel: string | undefined,
  url: string
): string {
  const headline = resultLabel
    ? `My ${testTitle} result: ${resultLabel}.`
    : `I took the ${testTitle} on TypologyQuiz.`;
  return `${headline} Free, private, scored in-browser. Try it: ${url}`;
}

export function resultCaptionShort(
  testTitle: string,
  resultLabel: string | undefined,
  url: string
): string {
  const bit = resultLabel ? `${resultLabel} · ` : "";
  return `${bit}${testTitle} on TypologyQuiz ${url}`;
}

/** Social targets for inviting friends to the site */
export function inviteNetworks(url: string = SITE.url): ShareNetwork[] {
  const full = inviteText(url);
  const short = inviteCaptionShort(url);
  const encFull = encodeURIComponent(full);
  const encUrl = encodeURIComponent(url);
  const encShort = encodeURIComponent(short);

  return [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encFull}`,
    },
    {
      name: "Discord",
      copyText: full,
      hint: "Copied. Paste in Discord.",
    },
    {
      name: "TikTok",
      copyText: short,
      hint: "Copied. Paste as your TikTok caption or comment.",
    },
    {
      name: "Instagram",
      copyText: short,
      hint: "Copied. Paste in Stories, bio, or DMs.",
    },
    {
      name: "Snapchat",
      copyText: short,
      hint: "Copied. Paste in a Snap or chat.",
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?text=${encShort}`,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encUrl}&quote=${encShort}`,
    },
    {
      name: "Reddit",
      href: `https://www.reddit.com/submit?url=${encUrl}&title=${encShort}`,
    },
    {
      name: "Messages",
      href: `sms:?&body=${encFull}`,
    },
  ];
}

/** Social targets for sharing a results link */
export function resultNetworks(
  shareUrl: string,
  testTitle: string,
  resultLabel?: string
): ShareNetwork[] {
  const full = resultShareText(testTitle, resultLabel, shareUrl);
  const short = resultCaptionShort(testTitle, resultLabel, shareUrl);
  const encFull = encodeURIComponent(full);
  const encUrl = encodeURIComponent(shareUrl);
  const encShort = encodeURIComponent(short);
  const encText = encodeURIComponent(
    resultLabel
      ? `My ${testTitle} result: ${resultLabel}. Free on TypologyQuiz:`
      : `I took the ${testTitle} on TypologyQuiz. Free, private:`
  );

  return [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encFull}`,
    },
    {
      name: "Discord",
      copyText: full,
      hint: "Copied. Paste in Discord.",
    },
    {
      name: "TikTok",
      copyText: short,
      hint: "Copied. Paste as your TikTok caption or comment.",
    },
    {
      name: "Instagram",
      copyText: short,
      hint: "Copied. Paste in Stories, bio, or DMs.",
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?text=${encText}&url=${encUrl}`,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encUrl}&quote=${encText}`,
    },
    {
      name: "Reddit",
      href: `https://www.reddit.com/submit?url=${encUrl}&title=${encShort}`,
    },
    {
      name: "Messages",
      href: `sms:?&body=${encFull}`,
    },
  ];
}
