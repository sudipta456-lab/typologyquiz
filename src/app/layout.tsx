import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SITE, absoluteUrl } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14141f",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.legalName} - Free personality tests, scored privately`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  keywords: [
    "personality test",
    "typology quiz",
    "Big Five",
    "IPIP",
    "8values",
    "political compass",
    "cognitive reflection",
    "VVIQ",
    "aphantasia",
    "free personality quiz",
    "psychology quiz",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.legalName,
    title: `${SITE.legalName} - Free personality tests, scored privately`,
    description: SITE.description,
    images: [
      {
        url: absoluteUrl(SITE.ogImage),
        width: 1200,
        height: 630,
        alt: `${SITE.name} - free personality and typology quizzes`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.legalName} - Free personality tests, scored privately`,
    description: SITE.description,
    images: [absoluteUrl(SITE.ogImage)],
  },
  icons: {
    icon: [{ url: SITE.favicon, type: "image/svg+xml" }],
    apple: [{ url: SITE.mark }],
  },
  category: "education",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.legalName,
      url: SITE.url,
      logo: absoluteUrl(SITE.mark),
      email: SITE.email,
      description: SITE.description,
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.legalName,
      description: SITE.description,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "WebApplication",
      name: SITE.legalName,
      url: SITE.url,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description: SITE.description,
    },
  ],
};

// Google Analytics 4. The Measurement ID is public, but we read it from an env
// var (set in .env.local at build time — see .env.example) so it's not baked
// into git and can differ per environment. When unset, no analytics loads, so
// dev/preview builds don't pollute the property.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href={SITE.favicon} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
