import type { Metadata } from "next";
import { PlayerClient } from "@/components/live/PlayerClient";

export const metadata: Metadata = {
  title: "Join a live quiz",
  description: "Enter a room code to join a Live Events quiz on your phone.",
  alternates: { canonical: "/live/play/" },
};

export default function LivePlayPage() {
  return <PlayerClient />;
}
