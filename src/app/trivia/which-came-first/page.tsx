import type { Metadata } from "next";
import { RapidRound } from "@/components/trivia/RapidRound";
import { getRapidRound } from "@/lib/trivia/rapid-rounds";
import { SITE } from "@/lib/site";
import { breadcrumbList, jsonLdGraph, quizNode } from "@/lib/structured-data";

const round = getRapidRound("which-came-first")!;
const path = "/trivia/which-came-first/";

export const metadata: Metadata = {
  title: "Which Came First? History Timeline Quiz",
  description: "Choose the earlier event in ten history pairs. Each answer reveals the dates, making this a fast timeline refresher rather than a memory test alone.",
  alternates: { canonical: path },
  openGraph: { title: `Which Came First? · ${SITE.legalName}`, description: "Ten historical pairs. Which happened earlier?", url: `${SITE.url}${path}`, images: [{ url: `${SITE.url}/og/trivia-hub.png`, width: 1200, height: 630, alt: "Which Came First history timeline quiz" }] },
  twitter: { card: "summary_large_image", title: "Which Came First? History Timeline Quiz", description: "Choose the earlier event in ten history pairs.", images: [`${SITE.url}/og/trivia-hub.png`] },
};

const jsonLd = jsonLdGraph([
  quizNode({ path, name: "Which Came First? History Timeline Quiz", description: metadata.description!, numberOfQuestions: round.questions.length, educationalUse: "practice", educationalSubject: "History", about: "Chronological order of widely documented historical events" }),
  breadcrumbList([{ name: "Home", path: "/" }, { name: "Trivia", path: "/trivia/" }, { name: "Which Came First?", path }]),
]);

export default function WhichCameFirstPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><RapidRound round={round} /></>;
}
