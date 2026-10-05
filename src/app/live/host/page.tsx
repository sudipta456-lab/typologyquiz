import type { Metadata } from "next";
import { HostConsole } from "@/components/live/HostConsole";

export const metadata: Metadata = {
  title: "Host a live quiz",
  description: "Create a Live Events room, choose a session and run the quiz for your group.",
  alternates: { canonical: "/live/host/" },
};

export default function LiveHostPage() {
  return <HostConsole />;
}
