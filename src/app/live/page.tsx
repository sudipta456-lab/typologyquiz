import type { Metadata } from "next";
import { LiveLanding } from "@/components/live/LiveLanding";

export const metadata: Metadata = {
  title: "Live Events: host or join a group quiz",
  description: "Host a live quiz on a shared screen while players answer on phones, individually or as teams sharing one phone each.",
  alternates: { canonical: "/live/" },
};

export default function LivePage() {
  return <LiveLanding />;
}
