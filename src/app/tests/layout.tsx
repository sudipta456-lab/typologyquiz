import type { Metadata } from "next";
import { socialMetadata } from "@/lib/page-metadata";

const TITLE = "Free personality tests and self-reflection quizzes";
const DESCRIPTION = "Browse personality tests and quizzes by topic. See what each measures, its evidence and its limits before you start. Free, with no account required.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/tests/" },
  ...socialMetadata({ path: "/tests/", title: TITLE, description: DESCRIPTION }),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
