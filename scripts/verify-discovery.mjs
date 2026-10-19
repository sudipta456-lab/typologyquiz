import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(`out/${path}`, 'utf8');

// The site collects no ratings, so rating or review markup anywhere would be fabricated.
const FAKE_RATING_KEYS = new Set(['aggregateRating', 'review', 'reviewRating', 'ratingValue', 'ratingCount', 'reviewCount', 'bestRating', 'worstRating']);
const METHODOLOGY = '/methodology/interactive-quizzes/';
const sitePath = (href) => new URL(href).pathname;

function jsonLdNodes(html, path) {
  const nodes = [];
  const visit = (value) => {
    if (Array.isArray(value)) return value.forEach(visit);
    if (value === null || typeof value !== 'object') return;
    for (const key of Object.keys(value)) assert.ok(!FAKE_RATING_KEYS.has(key), `Rating markup "${key}" in JSON-LD: ${path}`);
    if (typeof value['@type'] === 'string') nodes.push(value);
    Object.values(value).forEach(visit);
  };
  for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let parsed;
    try { parsed = JSON.parse(block[1]); } catch { assert.fail(`Invalid JSON-LD: ${path}`); }
    visit(parsed);
  }
  return nodes;
}

function checkSeoBasics(url, path, html) {
  const titles = [...html.matchAll(/<title>([^<]*)<\/title>/g)];
  assert.equal(titles.length, 1, `Expected one title: ${path}`);
  assert.ok(titles[0][1].trim().length > 0, `Empty title: ${path}`);
  const descriptions = [...html.matchAll(/<meta name="description" content="([^"]*)"/g)];
  assert.equal(descriptions.length, 1, `Expected one meta description: ${path}`);
  assert.ok(descriptions[0][1].trim().length > 0, `Empty meta description: ${path}`);
  assert.equal([...html.matchAll(/<link rel="canonical"/g)].length, 1, `Expected one canonical link: ${path}`);
  // A page-level openGraph object replaces the root one, so a page that forgets og:url falls back to the home page.
  const ogUrls = [...html.matchAll(/<meta property="og:url" content="([^"]*)"/g)].map(m => m[1]);
  assert.deepEqual(ogUrls, [url], `og:url is not the canonical page: ${path}`);

  const nodes = jsonLdNodes(html, path);
  for (const node of nodes.filter(n => n['@type'] === 'Quiz')) assert.equal(node.url, url, `Quiz node url is not the canonical page: ${path}`);
  if (/^\/quizzes\/(?!category\/)[^/]+\/$/.test(path)) {
    const quizzes = nodes.filter(n => n['@type'] === 'Quiz');
    assert.equal(quizzes.length, 1, `Expected one Quiz node: ${path}`);
    assert.ok(Number.isInteger(quizzes[0].numberOfQuestions) && quizzes[0].numberOfQuestions > 0, `Quiz node has no question count: ${path}`);
    assert.ok(quizzes[0].about?.name, `Quiz node has no subject: ${path}`);
    assert.ok(html.includes(`href="${METHODOLOGY}"`), `Quiz page does not link its methodology: ${path}`);
    const crumbs = nodes.find(n => n['@type'] === 'BreadcrumbList')?.itemListElement ?? [];
    assert.equal(crumbs.at(-1)?.item, url, `Breadcrumb trail does not end at the canonical page: ${path}`);
  }
}

function checkMethodologyConnections(sitemapUrls) {
  const paths = new Set(sitemapUrls.map(sitePath));
  for (const path of ['/methodology/', METHODOLOGY, '/quizzes/']) {
    assert.ok(paths.has(path), `Missing from sitemap: ${path}`);
  }
  for (const path of ['/methodology/', '/quizzes/']) assert.ok(read(`${path.slice(1)}index.html`).includes(`href="${METHODOLOGY}"`), `${path} does not link ${METHODOLOGY}`);
  const html = read(`${METHODOLOGY.slice(1)}index.html`);
  const about = jsonLdNodes(html, METHODOLOGY).find(n => n['@type'] === 'AboutPage');
  assert.ok(about, 'Methodology page has no AboutPage node');
  assert.equal(about.url, urls.find(u => sitePath(u) === METHODOLOGY), 'AboutPage url is not the canonical page');
  assert.ok(paths.has(sitePath(about.about?.url ?? 'https://invalid.test/')), 'AboutPage subject is not a page on this site');
  assert.ok(/^\d{4}-\d{2}-\d{2}$/.test(about.dateModified), 'AboutPage has no ISO modified date');
}
const urls = [...read('sitemap.xml').matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
for (const url of urls) {
  const path = new URL(url).pathname;
  assert.ok(!['/account/', '/compare/', '/room/'].includes(path), `Private surface in sitemap: ${path}`);
  assert.ok(!path.startsWith('/test/') || !/\/(results|take)\/$/.test(path), `Assessment interaction in sitemap: ${path}`);
  const html = read(`${path.slice(1)}index.html`);
  assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html), `Noindex URL in sitemap: ${path}`);
  assert.ok(html.includes(`rel="canonical" href="${url}"`), `Noncanonical sitemap URL: ${path}`);
  checkSeoBasics(url, path, html);
}
checkMethodologyConnections(urls);
for (const path of ['account', 'compare', 'room', 'room/session', 'test/mini-ipip/results', 'test/mini-ipip/take']) {
  assert.match(read(`${path}/index.html`), /<meta name="robots" content="[^"]*noindex/, `Missing noindex: ${path}`);
}
console.log(`Discovery checks passed: ${urls.length} unique, canonical, indexable sitemap pages; private route exclusions.`);
