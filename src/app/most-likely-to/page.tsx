import type { Metadata } from "next";
import { MostLikelyClient } from "@/components/mostlikely/MostLikelyClient";

// Deliberately noindex: the page is played with real first names on screen,
// so it should never surface in search results even though nothing is
// stored or put in a URL.
export const metadata: Metadata = {
  title: "Most Likely To",
  description:
    "The party game for your friend group: add first names, vote through 15 prompts, and download the awards ceremony as a share card. No accounts, nothing stored.",
  robots: { index: false, follow: false },
};

export default function MostLikelyToPage() {
  return <MostLikelyClient />;
}
