"use client";

import { SITE } from "@/lib/site";
import { QuizSharePanel } from "@/components/QuizSharePanel";

interface Props {
  heading: string;
  subheading: string;
  /** The full link to share */
  url: string;
  /** Message wrapped around the link for share sheets and pastes */
  shareText: string;
  /** Native share sheet title */
  shareTitle: string;
}

/** Friend links deliberately carry encoded challenge or answer data. */
export function FriendShareBlock({ heading, subheading, url, shareText, shareTitle }: Props) {
  return <QuizSharePanel key={url} heading={heading} subheading={subheading} title={shareTitle} url={url} defaultMessage={shareText} cards={false} privacyNote={`Everything lives inside the link itself, on ${SITE.legalName}. This link may encode answers, challenge details, or results. No accounts, no server copy. Your edited message may also reveal what you add.`} />;
}
