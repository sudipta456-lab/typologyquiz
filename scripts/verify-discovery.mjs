import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const read = (path) => readFileSync(`out/${path}`, 'utf8');
const anatomyAssetsModule = new URL('../src/components/anatomy/assets.ts', import.meta.url);
assert.ok(existsSync(anatomyAssetsModule), 'Pending anatomy integration: src/components/anatomy/assets.ts has not arrived');
const { ANATOMY_ASSETS } = await import(anatomyAssetsModule.href);

// The site collects no ratings, so rating or review markup anywhere would be fabricated.
const FAKE_RATING_KEYS = new Set(['aggregateRating', 'review', 'reviewRating', 'ratingValue', 'ratingCount', 'reviewCount', 'bestRating', 'worstRating']);
const METHODOLOGY = '/methodology/interactive-quizzes/';
const PERIODIC_TABLE_LEARNING = '/learn/periodic-table/';
const ANATOMY_ATLAS = '/learn/anatomy/';
const elementRecords = JSON.parse(readFileSync('src/components/periodic-table/elements.json', 'utf8'));
const learningContract = readFileSync('src/components/periodic-table/learning.ts', 'utf8');
const learningCheckedOn = learningContract.match(/export const LEARNING_CHECKED_ON = "(\d{4}-\d{2}-\d{2})";/)?.[1];
const anatomyPageSource = readFileSync('src/app/learn/anatomy/page.tsx', 'utf8');
const anatomyCheckedOn = anatomyPageSource.match(/const CHECKED_ON = "(\d{4}-\d{2}-\d{2})";/)?.[1];
const sitePath = (href) => new URL(href).pathname;

const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;',
})[character]);

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

function checkPeriodicTableLearning(url, html) {
  assert.ok(html.includes(`rel="canonical" href="${url}"`), 'Periodic table learning page is not canonical');
  const nodes = jsonLdNodes(html, PERIODIC_TABLE_LEARNING);
  const resources = nodes.filter(node => node['@type'] === 'LearningResource');
  assert.equal(resources.length, 1, 'Expected one LearningResource node');
  assert.equal(resources[0].url, url, 'LearningResource URL is not canonical');
  assert.match(learningCheckedOn ?? '', /^\d{4}-\d{2}-\d{2}$/, 'Learning data check date is missing');
  assert.equal(resources[0].dateModified, learningCheckedOn, 'LearningResource date is stale');
  const crumbs = nodes.find(node => node['@type'] === 'BreadcrumbList')?.itemListElement ?? [];
  assert.equal(crumbs.at(-1)?.item, url, 'Periodic table breadcrumb does not end at the canonical page');
  assert.equal(nodes.filter(node => node['@type'] === 'Quiz').length, 0, 'Learning steps must not be described as canonical quizzes');
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, 'Periodic table learning page should have one H1');
  assert.equal(elementRecords.length, 118, 'Expected 118 element records for the crawlable element index');
  for (const element of elementRecords) {
    assert.ok(html.includes(escapeHtml(element.name)), `Crawlable element name is missing: ${element.name}`);
  }
  assert.ok(html.includes(learningCheckedOn), 'Periodic table data check date is missing');
  for (const sourceUrl of [
    'https://iupac.org/what-we-do/periodic-table-of-elements/',
    'https://ciaaw.org/atomic-weights.htm',
    'https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON',
    'https://openstax.org/books/chemistry-2e/pages/2-5-the-periodic-table',
  ]) assert.ok(html.includes(sourceUrl), `Primary source link is missing: ${sourceUrl}`);
}

function checkAnatomyAtlas(url, html, sitemapUrls) {
  assert.ok(sitemapUrls.includes(url), 'Anatomy Atlas is missing from sitemap');
  assert.ok(html.includes(`rel="canonical" href="${url}"`), 'Anatomy Atlas is not canonical');
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, 'Anatomy Atlas should have one route-owned H1');
  assert.ok(html.includes('<meta property="og:image:alt" content="TypologyQuiz.com brand artwork"'), 'Anatomy social card must describe the generic brand image truthfully');
  assert.ok(html.includes('<meta name="twitter:image:alt" content="TypologyQuiz.com brand artwork"'), 'Anatomy Twitter card must describe the generic brand image truthfully');
  assert.match(anatomyCheckedOn ?? '', /^2026-11-21$/, 'Anatomy source check date is missing or stale');
  assert.ok(html.includes(anatomyCheckedOn), 'Anatomy source check date is not visible');

  const nodes = jsonLdNodes(html, ANATOMY_ATLAS);
  const resources = nodes.filter(node => node['@type'] === 'LearningResource');
  assert.equal(resources.length, 1, 'Expected one Anatomy LearningResource node');
  assert.equal(resources[0].url, url, 'Anatomy LearningResource URL is not canonical');
  assert.equal(resources[0].dateModified, anatomyCheckedOn, 'Anatomy LearningResource date is stale');
  assert.equal(nodes.filter(node => node['@type'] === 'Quiz').length, 0, 'Atlas learning references must not be described as a quiz');
  const crumbs = nodes.find(node => node['@type'] === 'BreadcrumbList')?.itemListElement ?? [];
  assert.equal(crumbs.at(-1)?.item, url, 'Anatomy breadcrumb does not end at its canonical URL');

  for (const sourceUrl of [
    'https://training.seer.cancer.gov/anatomy/body/terminology.html',
    'https://www.nhlbi.nih.gov/health/heart/anatomy',
    'https://www.nhlbi.nih.gov/health/heart/blood-flow',
    'https://www.ninds.nih.gov/health-information/public-education/brain-basics/brain-basics-know-your-brain',
    'https://www.nhlbi.nih.gov/health/lungs/respiratory-system',
    'https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works',
    'https://www.niddk.nih.gov/health-information/kidney-disease/kidneys-how-they-work',
    'https://www.niddk.nih.gov/health-information/urologic-diseases/urinary-tract-how-it-works',
    'https://training.seer.cancer.gov/anatomy/reproductive/female/',
    'https://training.seer.cancer.gov/anatomy/reproductive/male/',
  ]) assert.ok(html.includes(sourceUrl), `Anatomy primary source is not visible: ${sourceUrl}`);
  for (const note of ['illustrative', 'selected adult', 'camera position', 'CT', 'MRI', 'histology', 'symptom checking', 'diagnosis']) {
    assert.ok(html.toLowerCase().includes(note.toLowerCase()), `Anatomy learning limit is missing: ${note}`);
  }

  assert.ok(ANATOMY_ASSETS.length > 0, 'Anatomy manifest has no reviewed reference assets');
  for (const asset of ANATOMY_ASSETS) {
    assert.ok(html.includes(escapeHtml(asset.title)), `Anatomy asset title is not visible: ${asset.id}`);
    assert.ok(html.includes(escapeHtml(asset.alt)), `Anatomy asset text alternative is not visible: ${asset.id}`);
    assert.ok(html.includes(escapeHtml(asset.credit)), `Anatomy asset credit is not visible: ${asset.id}`);
    assert.ok(html.includes(escapeHtml(asset.sourceUrl)), `Anatomy asset source is not visible: ${asset.id}`);
    assert.ok(html.includes(escapeHtml(asset.license)), `Anatomy asset license is not visible: ${asset.id}`);
  }
  assert.ok(html.includes('href="/credits/#anatomy"'), 'Atlas does not link to its asset-credit terms');

  const trivia = read('trivia/index.html');
  const scienceCategory = read('quizzes/category/science-nature/index.html');
  const triviaMain = trivia.match(/<main\b[\s\S]*?<\/main>/)?.[0];
  const scienceMain = scienceCategory.match(/<main\b[\s\S]*?<\/main>/)?.[0];
  assert.ok(triviaMain && scienceMain, 'Learning references need rendered main content');
  assert.equal([...triviaMain.matchAll(/href="\/learn\/anatomy\/"/g)].length, 1, 'Trivia hub should link Anatomy Atlas once from Science content');
  assert.equal([...scienceMain.matchAll(/href="\/learn\/anatomy\/"/g)].length, 1, 'Science & Nature main content should link Anatomy Atlas once');
  const footer = html.match(/<footer\b[\s\S]*?<\/footer>/)?.[0] ?? '';
  assert.equal([...footer.matchAll(/href="\/learn\/anatomy\/"/g)].length, 1, 'Footer should link Anatomy Atlas once');
  assert.ok(footer.includes('href="/learn/periodic-table/"') && footer.includes('href="/learn/anatomy/"'), 'Footer must include both learning references');
  assert.ok(footer.indexOf('href="/learn/anatomy/"') > footer.indexOf('href="/learn/periodic-table/"'), 'Anatomy Atlas should follow Periodic Table in the footer');
  for (const path of ['/methodology/interactive-quizzes/', '/credits/#anatomy']) {
    assert.ok(read(`${path.split('#')[0].slice(1)}index.html`).includes(path === '/credits/#anatomy' ? 'id="anatomy"' : 'href="/learn/anatomy/"'), `Anatomy learning information is missing: ${path}`);
  }
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
  if (path === PERIODIC_TABLE_LEARNING) checkPeriodicTableLearning(url, html);
  if (path === ANATOMY_ATLAS) checkAnatomyAtlas(url, html, urls);
}
checkMethodologyConnections(urls);
for (const path of ['account', 'compare', 'room', 'room/session', 'test/mini-ipip/results', 'test/mini-ipip/take']) {
  assert.match(read(`${path}/index.html`), /<meta name="robots" content="[^"]*noindex/, `Missing noindex: ${path}`);
}
console.log(`Discovery checks passed: ${urls.length} unique, canonical, indexable sitemap pages; private route exclusions.`);
