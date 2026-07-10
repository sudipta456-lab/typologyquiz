"use client";

import { useEffect, useState } from "react";
import { SITE } from "./site";

/**
 * Returns a stable origin for SSR + first client paint (SITE.url),
 * then switches to window.location.origin after mount to avoid hydration mismatch.
 */
export function useSiteOrigin(): string {
  const [origin, setOrigin] = useState(SITE.url.replace(/\/$/, ""));

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  return origin;
}
