import type { Metadata } from "next";
import { SITE } from "./site";

/**
 * Open Graph and Twitter fields for one page. A page that sets its own `openGraph` replaces the
 * root layout's whole object, so without an explicit `url` the shared link would name the home
 * page as its canonical address. Pass the same site path as `alternates.canonical`.
 */
export function socialMetadata({ path, title, description, image }: { path: string; title: string; description: string; image?: string }): Pick<Metadata, "openGraph" | "twitter"> {
  const socialTitle = `${title} · ${SITE.legalName}`;
  const imageUrl = image ?? `${SITE.url}${SITE.ogImage}`;
  return {
    openGraph: {
      title: socialTitle,
      description,
      url: `${SITE.url}${path}`,
      images: [{ url: imageUrl, ...(image ? {} : { width: 1200, height: 630 }), alt: SITE.name }],
    },
    twitter: { card: "summary_large_image", title: socialTitle, description, images: [imageUrl] },
  };
}
