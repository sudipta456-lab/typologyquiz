"use client";

import { useCallback, useState } from "react";

/**
 * Turn a long results URL into a typologyquiz.com/s/<code> link.
 *
 * Deliberately opt-in. A results link normally carries the whole result in its
 * own query string, which is what lets the page promise that a score never
 * leaves the device. Shortening breaks that promise on purpose and in one
 * direction only: the scores in the link are stored in our own Cloudflare KV
 * so the short code can redirect to them. Nothing else is sent, no account
 * exists to attach it to, and the button says so before it is pressed.
 *
 * Everything fails soft. If the endpoint is unreachable, over quota, or
 * refuses the path, the caller keeps the long URL, which always works.
 */
export interface ShortLinkState {
  shortUrl: string | null;
  pending: boolean;
  error: string | null;
  shorten: () => Promise<string | null>;
  reset: () => void;
}

export function useShortLink(longUrl: string, origin: string): ShortLinkState {
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = useCallback(() => {
    setShortUrl(null);
    setError(null);
  }, []);

  const shorten = useCallback(async () => {
    if (shortUrl) return shortUrl;
    setPending(true);
    setError(null);
    try {
      // Send the PATH, never the whole URL. The worker refuses anything that
      // names a host, so a short link can only ever point back at this site.
      const u = new URL(longUrl, origin || "https://typologyquiz.com");
      const path = `${u.pathname}${u.search}`;

      const res = await fetch("/api/short", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ path }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = (await res.json()) as { code?: string };
      if (!data.code) throw new Error("no code");

      const short = `${origin || "https://typologyquiz.com"}/s/${data.code}`;
      setShortUrl(short);
      return short;
    } catch {
      setError("Couldn't shorten - the full link below still works");
      return null;
    } finally {
      setPending(false);
    }
  }, [longUrl, origin, shortUrl]);

  return { shortUrl, pending, error, shorten, reset };
}
