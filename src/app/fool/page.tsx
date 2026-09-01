import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { FoolCreateClient } from "./FoolCreateClient";

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
