import type { Metadata } from "next";
import type { ReactNode } from "react";
import { breadcrumbList, jsonLdGraph } from "@/lib/structured-data";

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

// Breadcrumb so the SERP entry shows a path. No Quiz node here: the puzzles
// change every UTC day, so a fixed question count would be a claim about
// content that is not on the page tomorrow.
const JSON_LD = jsonLdGraph([
  breadcrumbList([
    { name: "Home", path: "/" },
    { name: "Daily minis", path: "/daily/" },
  ]),
]);

export default function DailyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      {children}
    </>
  );
}
