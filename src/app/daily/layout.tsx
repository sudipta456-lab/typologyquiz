import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Daily Minis: Three Tiny Games, New Every Day",
  description:
    "Can you keep the streak? An anagram, a quick pick, and a this-or-that, the same for everyone on Earth today. Free, no signup.",
  alternates: { canonical: "https://typologyquiz.com/daily/" },
  openGraph: {
    title: "Daily Minis: Three Tiny Games, New Every Day · TypologyQuiz.com",
    images: ["https://typologyquiz.com/og/daily.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://typologyquiz.com/og/daily.png"],
  },
};

export default function DailyLayout({ children }: { children: ReactNode }) {
  return children;
}
