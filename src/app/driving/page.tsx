import type { Metadata } from "next";
import { JURISDICTIONS } from "@/lib/driving/jurisdictions";
import { drivingHubJsonLd } from "@/lib/driving/structured-data";
import { DrivingDisclaimer } from "@/components/DrivingDisclaimer";
import { DrivingDirectory } from "@/components/DrivingDirectory";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Driving Licence Practice Tests",
  description:
    "Free practice questions for the written knowledge test across Canada and the United States. Scored against the real pass mark, with an explanation and a link to the official handbook on every question.",
  alternates: { canonical: "/driving/" },
  openGraph: {
    title: `Driving licence practice tests · ${SITE.legalName}`,
    description:
      "Practice for the real knowledge test. Every question explains itself and links to the official handbook.",
    url: `${SITE.url}/driving/`,
  },
};

export default function DrivingHubPage() {
  const regions = JURISDICTIONS.map(j => ({ slug: j.slug, name: j.name, code: j.code, country: j.country, licenceName: j.licenceName, setCount: j.sets.length }));
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(drivingHubJsonLd(JURISDICTIONS)) }} />
    <div className="section directory-page">
      <p className="eyebrow">Knowledge test prep</p><h1 className="section-title">Ready for the road?</h1>
      <p className="section-lead">Find driving practice for your province or state. Learn the signs and rules, with explanations linked to the official handbook.</p>
      <DrivingDirectory regions={regions} />
      <aside className="directory-note"><h2>Make each practice round count.</h2><p>Read your official handbook, try a practice set, then revisit the questions you missed. Your region also has a weak-spot drill built from your answers on this device.</p><DrivingDisclaimer /></aside>
    </div>
  </>;
}
