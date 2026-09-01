import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { FriendQuizCreateClient } from "./FriendQuizCreateClient";

export const metadata: Metadata = {
  title: "Make a Friend Quiz",
  description:
    "How well do your friends actually know you? Answer 10 questions about yourself, get a share link, and let the group chat prove themselves. Free, no signup, nothing stored.",
  alternates: { canonical: "/friend-quiz/" },
  openGraph: {
    title: `Make a Friend Quiz · ${SITE.legalName}`,
    description:
      "Answer 10 questions about yourself, send one link, and find out who actually knows you. Scores come back to you in the link.",
    url: `${SITE.url}/friend-quiz/`,
    images: [
      {
        url: `${SITE.url}/og/friend-quiz.png`,
        width: 1200,
        height: 630,
        alt: "How Well Do Your Friends Actually Know You?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Make a Friend Quiz · ${SITE.legalName}`,
    images: [`${SITE.url}/og/friend-quiz.png`],
  },
};

export default function FriendQuizPage() {
  return (
    <>
      <FriendQuizCreateClient />
      <section className="section" style={{ textAlign: "center", paddingBottom: "2rem" }}>
        <p>
          More mischief for the group chat:{" "}
          <a href="/fool/">Fool Your Friends, the trivia bluffing game</a>
        </p>
      </section>
    </>
  );
}
