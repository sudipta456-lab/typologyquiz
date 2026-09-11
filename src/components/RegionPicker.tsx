"use client";
import Link from "next/link";
import { useState } from "react";
import { JURISDICTION_SUMMARIES } from "@/lib/driving/summary.generated";
export function RegionPicker() {
  const [region, setRegion] = useState("");
  return <div className="region-picker"><label htmlFor="home-region">Your province or state</label><div><select id="home-region" value={region} onChange={event => setRegion(event.target.value)}><option value="">Choose your location</option>{(["CA", "US"] as const).map(country => <optgroup key={country} label={country === "CA" ? "Canada" : "United States"}>{JURISDICTION_SUMMARIES.filter(j => j.country === country).sort((a,b) => a.name.localeCompare(b.name)).map(j => <option key={j.slug} value={j.slug}>{j.name}</option>)}</optgroup>)}</select>{region ? <Link className="btn-primary" href={`/driving/${region}/`} onClick={() => { try { localStorage.setItem("typologyquiz_last_driving_region", region); } catch { /* The link works without storage. */ } }}>Find practice sets →</Link> : <button className="btn-primary" disabled>Find practice sets →</button>}</div></div>;
}
