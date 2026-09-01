import type { Metadata } from "next";
import { FoolPlayClient } from "./FoolPlayClient";

// Deliberately noindex: play links carry player-written text in the URL
// fragment, so this page should never surface in search results.
export const metadata: Metadata = {
  title: "Spot the Truth",
  description:
    "A friend hid their lies among real trivia answers. Find the truth without getting fooled.",
  robots: { index: false, follow: false },
};

export default function FoolPlayPage() {
  return <FoolPlayClient />;
}
