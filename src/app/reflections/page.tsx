import type { Metadata } from "next";
import { ReflectionsClient } from "./ReflectionsClient";

export const metadata: Metadata = {
  title: "Your reflections", description: "Return to your private notes and small experiments.",
  robots: { index: false, follow: true },
};
export default function ReflectionsPage() { return <ReflectionsClient />; }
