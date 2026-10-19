import type { Metadata } from "next";
import type { ReactNode } from "react";
import { socialMetadata } from "@/lib/page-metadata";
import { breadcrumbList, jsonLdGraph } from "@/lib/structured-data";

const TITLE = "Daily Minis: Three Tiny Games, New Every Day";
const DESCRIPTION =
  "Can you keep the streak? An anagram, a quick pick, and a this-or-that, the same for everyone on Earth today. Free, no signup.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://typologyquiz.com/daily/" },
  ...socialMetadata({ path: "/daily/", title: TITLE, description: DESCRIPTION, image: "https://typologyquiz.com/og/daily.png" }),
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
