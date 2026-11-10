"use client";

import Link from "next/link";
import { useSearchParams, useSelectedLayoutSegment } from "next/navigation";
import { Suspense } from "react";
import { decodeResult } from "@/lib/results";

export function FriendRoleNextPlays() {
  const segment = useSelectedLayoutSegment();
  if (segment === null) return <NextPlayLinks />;
  if (segment !== "results") return null;
  return <Suspense fallback={null}><ResultsNextPlayLinks /></Suspense>;
}

function ResultsNextPlayLinks() {
  const encoded = useSearchParams().get("r");
  return encoded && decodeResult(encoded)?.result.testSlug === "friend-role" ? <NextPlayLinks /> : null;
}

function NextPlayLinks() {
  return (
    <nav className="test-shell" style={{ paddingTop: 0 }} aria-label="More friendship quizzes">
      <h2 className="test-block-title">Keep playing with friends</h2>
      <ul>
        <li><Link href="/quizzes/friendship-time-capsule/" className="text-link">Friendship Time Capsule</Link>. Compare your wishes and plans for the group.</li>
        <li><Link href="/quizzes/crew-roles-backstage/" className="text-link">Crew Roles Backstage</Link>. Work together to cover the jobs in a school show.</li>
      </ul>
    </nav>
  );
}
