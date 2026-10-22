/** A bounded 2026 campaign, evaluated in the publisher's calendar timezone. */
export function isHalloweenSeason(date: Date): boolean {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return false;
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Edmonton', year: 'numeric', month: 'numeric', day: 'numeric',
  }).formatToParts(date);
  const year = Number(parts.find(p => p.type === 'year')?.value);
  const month = Number(parts.find(p => p.type === 'month')?.value);
  const day = Number(parts.find(p => p.type === 'day')?.value);
  return year === 2026 && month === 10 && day >= 22 && day <= 31;
}
