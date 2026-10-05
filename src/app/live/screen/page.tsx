import type { Metadata } from "next";
import { ScreenClient } from "@/components/live/ScreenClient";

export const metadata: Metadata = {
  title: "Live quiz screen",
  description: "Projector view for a Live Events room.",
  alternates: { canonical: "/live/screen/" },
};

export default function LiveScreenPage() {
  return <ScreenClient />;
}
