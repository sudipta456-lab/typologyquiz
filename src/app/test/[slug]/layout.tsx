import type { ReactNode } from "react";
import { FriendRoleNextPlays } from "@/components/FriendRoleNextPlays";

export default async function TestLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      {children}
      {slug === "friend-role" && <FriendRoleNextPlays />}
    </>
  );
}
