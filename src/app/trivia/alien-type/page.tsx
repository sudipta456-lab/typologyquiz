import type { Metadata } from "next";
import { InterestQuiz } from "@/components/trivia/InterestQuiz";
import { SITE } from "@/lib/site";
import { breadcrumbList, jsonLdGraph, quizNode } from "@/lib/structured-data";

const title = "Which Alien Archetype Are You?";
const description = "A playful quiz inspired by fictional sci-fi and UFO folklore: Grey, Nordic, Reptilian, Mantid, or Tall White. These are fictional archetypes, not claims about people or real extraterrestrials.";
const path = "/trivia/alien-type/";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${title} · ${SITE.legalName}`, description, url: `${SITE.url}${path}`, images: [{ url: `${SITE.url}/og/trivia-hub.png`, width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: [`${SITE.url}/og/trivia-hub.png`] },
};

const jsonLd = jsonLdGraph([
  quizNode({ path, name: title, description, numberOfQuestions: 6, timeRequiredMinutes: 3, educationalUse: "self-reflection", about: "Fictional science-fiction and UFO-folklore archetypes", note: "For entertainment; archetypes are fictional and say nothing about ancestry, appearance, or real extraterrestrial life." }),
  breadcrumbList([{ name: "Home", path: "/" }, { name: "Trivia", path: "/trivia/" }, { name: "Alien archetype quiz", path }]),
]);

export default function AlienTypePage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><InterestQuiz kind="alien" /></>;
}
