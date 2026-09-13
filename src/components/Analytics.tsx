"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { visitAnalyticsPage } from "@/lib/analytics";

export function Analytics() {
  const pathname = usePathname();
  useEffect(() => { visitAnalyticsPage(pathname); }, [pathname]);
  return null;
}
