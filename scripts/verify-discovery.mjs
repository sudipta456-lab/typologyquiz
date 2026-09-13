import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(`out/${path}`, 'utf8');
const urls = [...read('sitemap.xml').matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
for (const url of urls) {
  const path = new URL(url).pathname;
  assert.ok(!['/account/', '/compare/', '/room/'].includes(path), `Private surface in sitemap: ${path}`);
  assert.ok(!path.startsWith('/test/') || !/\/(results|take)\/$/.test(path), `Assessment interaction in sitemap: ${path}`);
  const html = read(`${path.slice(1)}index.html`);
  assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html), `Noindex URL in sitemap: ${path}`);
  assert.ok(html.includes(`rel="canonical" href="${url}"`), `Noncanonical sitemap URL: ${path}`);
}
for (const path of ['account', 'compare', 'room', 'room/session', 'test/mini-ipip/results', 'test/mini-ipip/take']) {
  assert.match(read(`${path}/index.html`), /<meta name="robots" content="[^"]*noindex/, `Missing noindex: ${path}`);
}
console.log(`Discovery checks passed: ${urls.length} unique, canonical, indexable sitemap pages; private route exclusions.`);
