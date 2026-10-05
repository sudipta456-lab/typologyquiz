import type { Metadata } from "next";

// Live rooms are private and short-lived: never indexed, and room codes in
// ?room= are never sent to other sites as a referrer (e.g. answer sources).
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default function LiveLayout({ children }: { children: React.ReactNode }) {
  return children;
}
