"use client";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

type Region = { slug: string; name: string; code: string; country: "CA" | "US"; licenceName: string; setCount: number };
const key = "typologyquiz_last_driving_region";
const subscribe = () => () => {};
function lastRegion() { try { return localStorage.getItem(key) ?? ""; } catch { return ""; } }
export function DrivingDirectory({ regions }: { regions: Region[] }) {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("all");
  const recent = useSyncExternalStore(subscribe, lastRegion, () => "");
  const previous = regions.find(region => region.slug === recent);
  const filtered = regions.filter(region => (country === "all" || region.country === country) && `${region.name} ${region.code} ${region.licenceName}`.toLowerCase().includes(query.trim().toLowerCase()));
  const remember = (slug: string) => { try { localStorage.setItem(key, slug); } catch { /* Practice remains available without storage. */ } };
  return <>
    {previous && <Link className="recent-region" href={`/driving/${previous.slug}/`}>Back to {previous.name} practice <span aria-hidden="true">→</span></Link>}
    <div className="directory-tools"><label htmlFor="region-search" className="search-field"><span>Find your province or state</span><input id="region-search" type="search" placeholder="Search by name, e.g. Alberta or Texas" value={query} onChange={event => setQuery(event.target.value)} /></label><div className="filter-chips" role="group" aria-label="Filter by country">{[["all", "All locations"], ["CA", "Canada"], ["US", "United States"]].map(([value, label]) => <button type="button" key={value} aria-pressed={country === value} onClick={() => setCountry(value)}>{label}</button>)}</div></div>
    <p className="directory-count" role="status">{filtered.length} {filtered.length === 1 ? "location" : "locations"}{query.trim() ? ` matching “${query.trim()}”` : " available"}</p>
    {(["CA", "US"] as const).map(code => { const group = filtered.filter(region => region.country === code).sort((a,b) => a.name.localeCompare(b.name)); return group.length > 0 && <section key={code} className="region-group"><h2>{code === "CA" ? "Canada" : "United States"}</h2><div className="region-list">{group.map(region => <Link key={region.slug} href={`/driving/${region.slug}/`} onClick={() => remember(region.slug)}><span className="region-code">{region.code}</span><span><strong>{region.name}</strong><small>{region.licenceName} · {region.setCount} sets</small></span><span aria-hidden="true">↗</span></Link>)}</div></section>; })}
    {filtered.length === 0 && <div className="directory-empty"><h2>No matching locations</h2><p>Try a province or state name, or clear the country filter.</p><button className="btn-outline" type="button" onClick={() => { setQuery(""); setCountry("all"); }}>Show all locations</button></div>}
  </>;
}
