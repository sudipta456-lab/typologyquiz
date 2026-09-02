import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { breadcrumbList, jsonLdGraph } from "@/lib/structured-data";
import { FoolCreateClient } from "./FoolCreateClient";

// Breadcrumb only. The /fool/play/ pages carry player-written text in the URL
// and are noindex, so nothing here describes them as content.
const JSON_LD = jsonLdGraph([
  breadcrumbList([
    { name: "Home", path: "/" },
    { name: "Fool Your Friends", path: "/fool/" },
  ]),
]);

export const metadata: Metadata = {
  title: "Fool Your Friends Trivia",
  description:
    "Can your friends spot the truth? Write one convincing fake answer per trivia question, send one link, and count how many times they fall for your lies. Free, no signup, nothing stored.",
  alternates: { canonical: "/fool/" },
  openGraph: {
    title: `Fool Your Friends Trivia · ${SITE.legalName}`,
    description:
      "Six real trivia questions, one lie written by you in each. Send the link and see who falls for it.",
    url: `${SITE.url}/fool/`,
  },
};

export default function FoolPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <FoolCreateClient />
      <section className="section" style={{ textAlign: "center", paddingBottom: "2rem" }}>
        <p>
          Prefer questions about you instead of lies?{" "}
          <a href="/friend-quiz/">Make a Friend Quiz</a>
        </p>
      </section>
    </>
  );
}
