import type { Metadata } from "next";
import { FriendQuizPlayClient } from "./FriendQuizPlayClient";

// Deliberately noindex: play links carry someone's personal quiz answers in
// the URL fragment, so this page should never surface in search results.
export const metadata: Metadata = {
  title: "Play a Friend Quiz",
  description:
    "Guess your friend's answers and find out how well you actually know them.",
  robots: { index: false, follow: false },
};

export default function FriendQuizPlayPage() {
  return <FriendQuizPlayClient />;
}
