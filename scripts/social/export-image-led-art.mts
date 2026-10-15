// Reuse the site's exact public-domain map geometry; never ask a raster model
// to invent a state boundary. Run through scripts/mac-run.sh.
import sharp from 'sharp';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { US_MAP_PATHS, US_MAP_VIEWBOX } from '../../src/lib/trivia/data/us-map-paths';
const output = process.argv[2];
if (!output) throw new Error('Pass a NEW output directory');
mkdirSync(output, { recursive: false });
const full = `<svg xmlns="http://www.w3.org/2000/svg" width="959" height="593" viewBox="${US_MAP_VIEWBOX}">${Object.entries(US_MAP_PATHS).map(([id, d]) => `<path d="${d}" fill="${id === 'UT' ? '#6be1cf' : '#263650'}" stroke="#0c1220" stroke-width="2"/>`).join('')}</svg>`;
const state = `<svg xmlns="http://www.w3.org/2000/svg" width="959" height="593" viewBox="${US_MAP_VIEWBOX}"><path d="${US_MAP_PATHS.UT}" fill="#6be1cf" stroke="#dffff8" stroke-width="1.8"/></svg>`;
await sharp(Buffer.from(full)).resize(900).png().toFile(join(output, 'us-map-utah.png'));
await sharp(Buffer.from(state)).trim().resize({width: 540, height: 540, fit: 'inside'}).png().toFile(join(output, 'utah-silhouette.png'));
writeFileSync(join(output, 'provenance.json'), JSON.stringify({source: 'src/lib/trivia/data/us-map-paths.ts', state: 'UT', geometry: 'Public-domain Wikimedia Blank US Map (states only), existing site data', factualReference: 'https://www2.census.gov/geo/pdfs/maps-data/maps/reference/us_regdiv.pdf', modification: 'Original colors, Utah isolated and scaled with aspect ratio preserved; full map highlighted.'}, null, 2));
console.log(output);
