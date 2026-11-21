import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const rendersDir = path.join(root, 'work/anatomy/2026-11-21/renders');
const targetsPath = path.join(root, 'work/anatomy/2026-11-21/targets.json');
const outputDir = path.join(root, 'public/anatomy');
const targets = JSON.parse(await fs.readFile(targetsPath, 'utf8'));

const plates = [
  { id: 'body', title: 'Body regions', eyebrow: 'ORIENTATION', subtitle: 'Oblique body-outline view · no anatomical side markers' },
  { id: 'heart', title: 'Heart structures', eyebrow: 'CARDIOVASCULAR', subtitle: 'Oblique segmented surface view · no cut plane' },
  { id: 'brain', title: 'Brain surface landmarks', eyebrow: 'NERVOUS SYSTEM', subtitle: 'Oblique exterior surface view · no section plane' },
  { id: 'respiratory', title: 'Airways and lungs', eyebrow: 'RESPIRATORY', subtitle: 'Oblique segmented surface view · no cut plane' },
  { id: 'digestive', title: 'Digestive structures', eyebrow: 'DIGESTIVE', subtitle: 'Selected structures in shared HRA source coordinates' },
  { id: 'urinary', title: 'Kidney landmarks', eyebrow: 'URINARY', subtitle: 'Paired kidney surfaces · oblique view, no side key' },
  { id: 'reproductive-female', title: 'Female reproductive structures', eyebrow: 'REPRODUCTIVE', subtitle: 'Selected structures in shared HRA source coordinates' },
  { id: 'reproductive-male', title: 'Male reproductive structures', eyebrow: 'REPRODUCTIVE', subtitle: 'Partial HRA surface coverage · oblique view' },
];

const esc = (text) => String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

function calloutSvg(part, index, side, anchor) {
  const tx = part.x * 12;
  const ty = part.y * 9;
  const badgeX = side === 'left' ? 144 : 1056;
  const towardTarget = side === 'left' ? 1 : -1;
  const elbowX = badgeX + towardTarget * 58;
  const endX = tx - towardTarget * 15;
  return `
    <path d="M ${badgeX + towardTarget * 31} ${anchor} L ${elbowX} ${anchor} L ${elbowX} ${ty} L ${endX} ${ty} L ${tx} ${ty}"
      fill="none" stroke="#f5ead8" stroke-opacity="0.92" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="${tx}" cy="${ty}" r="12" fill="#f3efe6" stroke="#bd775d" stroke-width="4"/>
    <circle cx="${tx}" cy="${ty}" r="3.5" fill="#3d454a"/>
    <circle cx="${badgeX}" cy="${anchor}" r="32" fill="#f3efe6" stroke="#343a3d" stroke-width="3"/>
    <text x="${badgeX}" y="${anchor + 9}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="27" font-weight="700" fill="#30363a">${String.fromCharCode(65 + index)}</text>
  `;
}

function createOverlay(plate, target) {
  const header = `
    <rect x="0" y="0" width="1200" height="128" fill="#f3efe6"/>
    <rect x="54" y="38" width="74" height="48" rx="16" fill="#31383c"/>
    <text x="91" y="70" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="21" font-weight="700" letter-spacing="1" fill="#f7f2e9">${String(plates.indexOf(plate) + 1).padStart(2, '0')} / 08</text>
    <text x="154" y="59" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" letter-spacing="2.2" fill="#9c6c55">${esc(plate.eyebrow)}</text>
    <text x="154" y="101" font-family="Arial, Helvetica, sans-serif" font-size="39" font-weight="700" fill="#282f33">${esc(plate.title)}</text>
    <text x="1144" y="72" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="700" letter-spacing="1.4" fill="#656a6a">ANATOMY ATLAS</text>
    <text x="1144" y="102" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#686c6d">SURFACE VIEW</text>
    <rect x="154" y="112" width="842" height="2" fill="#d8d0c4"/>
    <text x="154" y="124" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#686c6d">${esc(plate.subtitle)}</text>
  `;

  const footer = `
    <rect x="0" y="833" width="1200" height="67" fill="#f3efe6"/>
    <rect x="55" y="833" width="1090" height="1.5" fill="#d8d0c4"/>
    <text x="58" y="872" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" letter-spacing="0.4" fill="#343a3d">HuBMAP Consortium · HRA CCF 3D Reference Object Library · CC BY 4.0</text>
    <text x="1142" y="872" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="15" fill="#737777">General learning · not diagnostic</text>
  `;

  const sideGroups = { left: [], right: [] };
  for (const part of target.targets) {
    const index = part.id.charCodeAt(0) - 97;
    const side = index % 2 === 0 ? 'left' : 'right';
    sideGroups[side].push({ part, index });
  }
  const callouts = Object.entries(sideGroups).flatMap(([side, group]) => {
    group.sort((a, b) => a.part.y - b.part.y);
    const slots = group.length === 1 ? [480] : group.length === 2 ? [318, 640] : [250, 450, 650];
    return group.map(({ part, index }, i) => calloutSvg(part, index, side, slots[i]));
  }).join('\n');

  const maleCoverage = plate.id === 'reproductive-male' ? `
    <g transform="translate(814 405)">
      <rect width="302" height="185" rx="20" fill="#f3efe6" fill-opacity="0.96" stroke="#ded6ca" stroke-width="2"/>
      <text x="22" y="37" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" letter-spacing="1.5" fill="#9c6c55">PARTIAL SOURCE COVERAGE</text>
      <text x="22" y="74" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" fill="#30363a">Available HRA surfaces</text>
      <text x="22" y="103" font-family="Arial, Helvetica, sans-serif" font-size="17" fill="#444b4e">Deferent ducts · prostate base</text>
      <text x="22" y="128" font-family="Arial, Helvetica, sans-serif" font-size="17" fill="#444b4e">Prostate zones · urethra</text>
      <path d="M 22 145 H 280" stroke="#ded6ca" stroke-width="1.5"/>
      <text x="22" y="162" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#686c6d">Selected source surfaces only.</text>
      <text x="22" y="181" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#686c6d">Testes and penis are not modeled here.</text>
    </g>
  ` : '';

  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      ${header}
      ${callouts}
      ${maleCoverage}
      ${footer}
    </svg>
  `);
}

await fs.mkdir(outputDir, { recursive: true });
for (const plate of plates) {
  const target = targets.find((entry) => entry.id === plate.id);
  if (!target || target.targets.length < 4) {
    throw new Error(`Missing four reviewed targets for ${plate.id}`);
  }
  const input = path.join(rendersDir, `${plate.id}.png`);
  const output = path.join(outputDir, `${plate.id}.webp`);
  await sharp(input)
    .composite([{ input: createOverlay(plate, target) }])
    .webp({ quality: 88, effort: 6, smartSubsample: true })
    .toFile(output);
  console.log(`Composed ${plate.id}: ${output}`);
}
