import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { test } from "node:test";
import sharp from "sharp";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { scoreQuiz, validateAnswer } from "../src/lib/interactive/engine";
import { QUIZZES, quizPath } from "../src/lib/interactive/registry";
import { validateQuiz } from "../src/lib/interactive/validate";
import { fitOrthographicCamera, setZoom } from "../src/components/anatomy/camera";
import type { Answers, OrderQuestion, Question, Quiz } from "../src/lib/interactive/types";

type AnatomyAsset = {
  id: string;
  title: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  view: string;
  credit: string;
  sourceUrl: string;
  license: string;
  modelUrls: readonly string[];
  parts: readonly { id: string; label: string; description: string; x: number; y: number; width: number; height: number }[];
  notes?: string;
};

const anatomyManifestPath = path.join(process.cwd(), "src/components/anatomy/assets.ts");
const dynamicImport = new Function("url", "return import(url)") as (url: string) => Promise<{ ANATOMY_ASSETS: readonly AnatomyAsset[] }>;

async function loadAnatomyAssets(): Promise<readonly AnatomyAsset[]> {
  assert.ok(existsSync(anatomyManifestPath), "Pending anatomy integration: src/components/anatomy/assets.ts has not arrived");
  return (await dynamicImport(pathToFileURL(anatomyManifestPath).href)).ANATOMY_ASSETS;
}

const EXPECTED_TOPIC_BY_QUIZ_ID = new Map([
  ["SN-78", "body"],
  ["SN-79", "heart"],
  ["SN-80", "brain"],
  ["SN-81", "respiratory"],
  ["SN-82", "digestive"],
  ["SN-83", "urinary"],
  ["SN-84", "reproductive-female"],
  ["SN-85", "reproductive-male"],
]);

const EXPECTED_TOPICS = [...EXPECTED_TOPIC_BY_QUIZ_ID.values()].sort();
const LOCAL_IMAGE_WIDTH_AT_320_VIEWPORT = 240;
const MIN_CALLOUT_DIAMETER = 44;
const PRIVATE_VISUAL_FIELDS = /visualRequirement|unresolvedVisualMapping|provisional|placeholder/i;
const RUNTIME_MEDIA_FIELDS = /^(?:audio|video|iframe|embed|media|externalMedia)$/i;
const MEDICAL_CLAIMS = /\bmedical[- ]grade\b|\bclinically (?:proven|validated|certified|accurate)\b|\bdiagnostic (?:test|tool|result)\b|\bcan diagnose\b|\bdiagnoses? (?:patients|users|you)\b/i;

test("translated anatomy bounds stay centered, fitted, zoomable, and resettable with OrbitControls", () => {
  const viewportSizes = [
    { name: "phone", width: 390, height: 844 },
    { name: "desktop", width: 1280, height: 800 },
  ];

  for (const viewport of viewportSizes) {
    const root = new THREE.Group();
    const geometry = new THREE.BoxGeometry(1, 4, 1);
    const mesh = new THREE.Mesh(geometry);
    mesh.position.y = 4;
    root.add(mesh);
    root.updateMatrixWorld(true);

    const bounds = new THREE.Box3().setFromObject(root);
    const center = bounds.getCenter(new THREE.Vector3());
    const size = bounds.getSize(new THREE.Vector3());
    const radius = Math.max(size.x, size.y, size.z, 0.001) / 2;
    const aspect = viewport.width / viewport.height;
    const halfHeight = Math.max(size.y, size.x / aspect, size.z, radius * 1.5) * 0.72;
    const direction = new THREE.Vector3(1, 0.72, 1).normalize();

    // Reproduce the former origin-centered clamp with the real Three.js controls.
    const legacyCamera = new THREE.OrthographicCamera(-halfHeight * aspect, halfHeight * aspect, halfHeight, -halfHeight, 0.0001, 1000);
    const legacyControls = new OrbitControls(legacyCamera);
    legacyControls.maxTargetRadius = radius * 0.15;
    legacyControls.target.copy(center);
    legacyCamera.position.copy(center).addScaledVector(direction, radius * 4);
    legacyCamera.lookAt(center);
    legacyCamera.updateProjectionMatrix();
    legacyCamera.updateMatrixWorld(true);
    const legacyCenterBeforeUpdate = center.clone().project(legacyCamera);
    legacyControls.update();
    legacyCamera.updateMatrixWorld(true);
    const legacyCenterAfterUpdate = center.clone().project(legacyCamera);
    assert.ok(Math.abs(legacyCenterBeforeUpdate.y) < 1e-6, `${viewport.name}: center should begin at the optical center`);
    assert.ok(Math.abs(legacyCenterAfterUpdate.y) > 1, `${viewport.name}: origin-centered target clamp should reproduce the offscreen model`);
    assert.ok(legacyControls.target.distanceTo(new THREE.Vector3()) <= radius * 0.15 + 1e-9);

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.0001, 1000);
    // A null-DOM OrbitControls instance installs no listeners; do not call dispose(),
    // which expects a DOM element when disconnecting.
    const controls = new OrbitControls(camera);
    fitOrthographicCamera(camera, controls, root, viewport.width, viewport.height);
    camera.updateMatrixWorld(true);

    assert.ok(controls.cursor.distanceTo(center) < 1e-9, `${viewport.name}: clamp cursor must follow the translated model center`);
    assert.ok(controls.target.distanceTo(center) < 1e-9, `${viewport.name}: controls update must retain the fitted target`);
    assert.equal(mesh.position.y, 4, "camera fitting must preserve source geometry coordinates");

    const projectedCenter = center.clone().project(camera);
    assert.ok(Math.abs(projectedCenter.x) < 1e-6 && Math.abs(projectedCenter.y) < 1e-6, `${viewport.name}: model center should remain at the optical center after update`);
    assert.ok(projectedCenter.z >= -1 && projectedCenter.z <= 1, `${viewport.name}: model center should remain inside the clipping range`);

    for (const x of [bounds.min.x, bounds.max.x]) {
      for (const y of [bounds.min.y, bounds.max.y]) {
        for (const z of [bounds.min.z, bounds.max.z]) {
          const corner = new THREE.Vector3(x, y, z).project(camera);
          assert.ok(Math.abs(corner.x) < 1 && Math.abs(corner.y) < 1, `${viewport.name}: model bounds should fit in the orthographic frustum`);
        }
      }
    }

    setZoom(camera, controls, 2);
    assert.equal(camera.zoom, 2, `${viewport.name}: zoom control should remain functional`);
    controls.rotateLeft(0.3);
    controls.reset();
    camera.updateMatrixWorld(true);
    const resetCenter = center.clone().project(camera);
    assert.equal(camera.zoom, 1, `${viewport.name}: reset should restore the saved zoom`);
    assert.ok(controls.target.distanceTo(center) < 1e-9, `${viewport.name}: reset should restore the saved model-centered target`);
    assert.ok(Math.abs(resetCenter.x) < 1e-6 && Math.abs(resetCenter.y) < 1e-6, `${viewport.name}: reset should return the model center to the optical center`);
  }
});

function localPublicFile(pathname: string): string {
  assert.match(pathname, /^\/anatomy\//, `Expected a local anatomy URL: ${pathname}`);
  assert.ok(!pathname.includes("\\") && !pathname.includes("?") && !pathname.includes("#"), `Unsafe local anatomy URL: ${pathname}`);
  const decoded = decodeURIComponent(pathname);
  assert.ok(!decoded.split("/").includes(".."), `Path traversal in anatomy URL: ${pathname}`);
  return path.join(process.cwd(), "public", decoded.slice(1));
}

function declaredLicenseUrl(license: string): string | null {
  if (/^https:\/\//i.test(license)) return license;
  if (/\bCC\s*BY\s*4(?:\.0)?\b/i.test(license)) return "https://creativecommons.org/licenses/by/4.0/";
  return null;
}

function checkCalloutSpacing(asset: AnatomyAsset): void {
  const width = LOCAL_IMAGE_WIDTH_AT_320_VIEWPORT;
  const height = width * asset.height / asset.width;
  const centers = asset.parts.map((part) => {
    for (const [key, value] of Object.entries({ x: part.x, y: part.y, width: part.width, height: part.height })) {
      assert.ok(Number.isFinite(value) && value >= 0 && value <= 100, `${asset.id}.${part.id}: invalid ${key}`);
    }
    return {
      id: part.id,
      x: width * part.x / 100,
      y: height * part.y / 100,
      width: Math.max(MIN_CALLOUT_DIAMETER, width * part.width / 100),
      height: Math.max(MIN_CALLOUT_DIAMETER, height * part.height / 100),
    };
  });

  for (let left = 0; left < centers.length; left += 1) {
    const center = centers[left];
    assert.ok(center.x >= center.width / 2 && center.x <= width - center.width / 2, `${asset.id}.${center.id}: marker leaves the image horizontally`);
    assert.ok(center.y >= center.height / 2 && center.y <= height - center.height / 2, `${asset.id}.${center.id}: marker leaves the image vertically`);
    for (let right = left + 1; right < centers.length; right += 1) {
      const other = centers[right];
      const radiusX = (center.width + other.width) / 2;
      const radiusY = (center.height + other.height) / 2;
      const normalizedDistance = ((center.x - other.x) / radiusX) ** 2 + ((center.y - other.y) / radiusY) ** 2;
      assert.ok(
        normalizedDistance >= 1,
        `${asset.id}: rendered callouts ${center.id} and ${other.id} overlap at ${width}×${height.toFixed(1)}px`,
      );
    }
  }
}

function allPublicGlbUrls(directory = path.join(process.cwd(), "public/anatomy")): string[] {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return allPublicGlbUrls(filePath);
    if (!entry.isFile() || !/\.glb$/i.test(entry.name)) return [];
    return [`/${path.relative(path.join(process.cwd(), "public"), filePath).split(path.sep).join("/")}`];
  });
}

function checkHotspotCalloutSpacing(quizId: string, question: Extract<Question, { kind: "hotspot" }>): void {
  const width = LOCAL_IMAGE_WIDTH_AT_320_VIEWPORT;
  const height = width * 900 / 1200;
  const centers = question.diagram.zones.map((zone) => ({
    id: zone.id,
    x: width * (zone.x + zone.width / 2) / 100,
    y: height * (zone.y + zone.height / 2) / 100,
  }));
  for (let left = 0; left < centers.length; left += 1) {
    for (let right = left + 1; right < centers.length; right += 1) {
      const distance = Math.hypot(centers[left].x - centers[right].x, centers[left].y - centers[right].y);
      assert.ok(
        distance >= MIN_CALLOUT_DIAMETER,
        `${quizId}/${question.id}: 44px hotspot callouts ${centers[left].id} and ${centers[right].id} overlap on a 240×180px image`,
      );
    }
  }
}

function topologicalOrder(question: OrderQuestion): string[] {
  const ids = question.items.map((item) => item.id);
  const outgoing = new Map(ids.map((id) => [id, [] as string[]]));
  const indegree = new Map(ids.map((id) => [id, 0]));
  for (const [before, after] of question.precedence ?? []) {
    outgoing.get(before)?.push(after);
    indegree.set(after, (indegree.get(after) ?? 0) + 1);
  }
  const ready = ids.filter((id) => indegree.get(id) === 0);
  const ordered: string[] = [];
  while (ready.length > 0) {
    const id = ready.shift() as string;
    ordered.push(id);
    for (const next of outgoing.get(id) ?? []) {
      indegree.set(next, (indegree.get(next) ?? 0) - 1);
      if (indegree.get(next) === 0) ready.push(next);
    }
  }
  assert.equal(ordered.length, ids.length, `${question.id}: precedence does not define a valid full order`);
  return ordered;
}

function firstGoldAnswer(question: Question): unknown {
  switch (question.kind) {
    case "choice":
    case "hotspot": {
      assert.ok(question.correct, `${question.id}: keyed answer is required`);
      assert.ok(question.options.some((option) => option.id === question.correct), `${question.id}: answer key must name an option`);
      return question.correct;
    }
    case "order": {
      const answer = question.correctOrder ?? topologicalOrder(question);
      assert.equal(answer.length, question.items.length, `${question.id}: key must cover every order item`);
      return answer;
    }
    case "match": {
      assert.ok(question.pairs, `${question.id}: keyed matches are required`);
      return { ...question.pairs };
    }
    case "grid":
      return Object.fromEntries(question.cells.map((cell) => [cell.id, cell.correct]));
    case "graph":
      return question.edges;
    default:
      assert.fail(`${question.id}: anatomy knowledge tasks must have a checkable key, not ${question.kind}`);
  }
}

function visitObject(value: unknown, visitor: (key: string, text: string) => void, key = "root"): void {
  if (Array.isArray(value)) {
    value.forEach((entry, index) => visitObject(entry, visitor, `${key}[${index}]`));
    return;
  }
  if (typeof value === "string") {
    visitor(key, value);
    return;
  }
  if (!value || typeof value !== "object") return;
  for (const [childKey, child] of Object.entries(value)) {
    if (typeof child !== "string") visitor(childKey, "");
    visitObject(child, visitor, childKey);
  }
}

test("the Anatomy Atlas has eight uniquely keyed topics with attributed local visual assets", async () => {
  const anatomyAssets = await loadAnatomyAssets();
  const topicAssets = anatomyAssets.filter((asset) => EXPECTED_TOPICS.includes(asset.id)).sort((a, b) => a.id.localeCompare(b.id));
  assert.deepEqual(topicAssets.map((asset) => asset.id), EXPECTED_TOPICS, "Expected one asset for each anatomy topic");
  assert.equal(new Set(anatomyAssets.map((asset) => asset.id)).size, anatomyAssets.length, "Asset IDs must be unique");
  const listedModelUrls = new Set(anatomyAssets.flatMap((asset) => [...asset.modelUrls]));
  for (const publicModelUrl of allPublicGlbUrls()) {
    assert.ok(listedModelUrls.has(publicModelUrl), `Public GLB file is not truthfully exposed by an anatomy asset: ${publicModelUrl}`);
  }

  const calloutProblems: string[] = [];
  for (const asset of topicAssets) {
    assert.ok(asset.title.trim(), `${asset.id}: title required`);
    assert.ok(asset.alt.trim().length >= 10, `${asset.id}: useful image alternative text required`);
    assert.equal(asset.width, 1200, `${asset.id}: reference image width must be 1200px`);
    assert.equal(asset.height, 900, `${asset.id}: reference image height must be 900px`);
    assert.ok(asset.view.trim(), `${asset.id}: explicit view/orientation required`);
    assert.ok(asset.credit.trim(), `${asset.id}: visible credit required`);
    assert.match(asset.sourceUrl, /^https:\/\//, `${asset.id}: HTTPS source URL required`);
    assert.ok(asset.license.trim(), `${asset.id}: per-asset license required`);
    assert.ok(Array.isArray(asset.modelUrls), `${asset.id}: model URL list required`);

    const imagePath = localPublicFile(asset.image);
    const imageMetadata = await sharp(readFileSync(imagePath)).metadata();
    assert.equal(imageMetadata.width, 1200, `${asset.id}: image file width`);
    assert.equal(imageMetadata.height, 900, `${asset.id}: image file height`);
    try {
      checkCalloutSpacing(asset);
    } catch (error) {
      calloutProblems.push(error instanceof Error ? error.message : `${asset.id}: unknown callout-spacing failure`);
    }

    for (const modelUrl of asset.modelUrls) {
      assert.match(modelUrl, /^\/anatomy\/.+\.glb$/i, `${asset.id}: models must be local GLB files`);
      const modelPath = localPublicFile(modelUrl);
      const model = readFileSync(modelPath);
      assert.ok(model.length >= 12, `${asset.id}: empty local GLB file ${modelUrl}`);
      assert.equal(model.toString("ascii", 0, 4), "glTF", `${asset.id}: invalid GLB header ${modelUrl}`);
      assert.equal(model.readUInt32LE(4), 2, `${asset.id}: GLB version must be 2`);
      assert.equal(model.readUInt32LE(8), model.length, `${asset.id}: GLB length header mismatch`);
    }
  }

  const maleReference = topicAssets.find((asset) => asset.id === "reproductive-male");
  assert.ok(maleReference?.notes, "Male reproductive reference must state its coverage limits in manifest notes");
  assert.match(maleReference.notes, /partial|limited|selected structures only|not a complete/i, "Male reproductive model coverage must be clearly described as partial");
  assert.deepEqual(calloutProblems, [], "All rendered 44px anatomy callouts must remain inside the image and nonoverlapping at the minimum viewport size");
});

test("the initial eight anatomy quizzes are canonical, validated, sourced, and structurally complete", async () => {
  const anatomyAssets = await loadAnatomyAssets();
  const anatomyQuizzes = QUIZZES.filter((quiz) => EXPECTED_TOPIC_BY_QUIZ_ID.has(quiz.id));
  assert.equal(anatomyQuizzes.length, EXPECTED_TOPIC_BY_QUIZ_ID.size, "All eight initial canonical anatomy quizzes are required");
  assert.deepEqual(anatomyQuizzes.map((quiz) => quiz.id).sort(), [...EXPECTED_TOPIC_BY_QUIZ_ID.keys()].sort());
  assert.equal(new Set(anatomyQuizzes.map((quiz) => quiz.slug)).size, EXPECTED_TOPIC_BY_QUIZ_ID.size, "Anatomy quiz slugs must be unique");
  assert.equal(new Set(QUIZZES.map((quiz) => quiz.slug)).size, QUIZZES.length, "Canonical catalog slugs must remain unique");

  for (const quiz of anatomyQuizzes) {
    assert.equal(quiz.categoryId, "science-nature", `${quiz.id}: expected Science & Nature category`);
    assert.equal(quiz.kind, "knowledge", `${quiz.id}: anatomy reference questions must be factual knowledge quizzes`);
    assert.match(quiz.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `${quiz.id}: slug must be canonical kebab-case`);
    assert.equal(quizPath(quiz.slug), `/quizzes/${quiz.slug}/`, `${quiz.id}: canonical route`);
    assert.deepEqual(validateQuiz(quiz), [], `${quiz.id}: catalog validator`);
    const expectedTopic = EXPECTED_TOPIC_BY_QUIZ_ID.get(quiz.id);
    const topicAsset = anatomyAssets.find((asset) => asset.id === expectedTopic);
    assert.ok(topicAsset, `${quiz.id}: expected anatomy topic asset ${expectedTopic}`);
    assert.equal(quiz.questions.length, 8, `${quiz.id}: expected eight tasks`);
    assert.equal(new Set(quiz.sections.map((section) => section.id)).size, 2, `${quiz.id}: expected two unique sections`);
    assert.equal(quiz.sections.length, 2, `${quiz.id}: expected two sections`);
    assert.ok(quiz.sections.every((section) => quiz.questions.some((question) => question.sectionId === section.id)), `${quiz.id}: both sections need tasks`);

    const formats = new Set(quiz.questions.map((question) => question.kind));
    assert.ok(formats.size >= 2, `${quiz.id}: use at least two task formats`);
    const hotspots = quiz.questions.filter((question) => question.kind === "hotspot");
    assert.ok(hotspots.length >= 2, `${quiz.id}: at least two image hotspot tasks required`);
    assert.ok(quiz.questions.every((question) => !question.unscored), `${quiz.id}: every knowledge task must be scored`);

    const sourceIds = new Set(quiz.sources.map((source) => source.id));
    assert.ok(sourceIds.size > 0, `${quiz.id}: quiz references required`);
    for (const question of quiz.questions) {
      assert.ok(question.sourceIds.length > 0, `${quiz.id}/${question.id}: cited source required`);
      assert.ok(question.sourceIds.every((sourceId) => sourceIds.has(sourceId)), `${quiz.id}/${question.id}: all source IDs must resolve`);
    }
    for (const source of quiz.sources.filter((entry) => entry.kind === "reference")) {
      assert.match(source.url ?? "", /^https:\/\//, `${quiz.id}/${source.id}: HTTPS reference required`);
    }

    visitObject(quiz, (key, text) => {
      assert.doesNotMatch(key, PRIVATE_VISUAL_FIELDS, `${quiz.id}: author-only/provisional metadata key ${key}`);
      assert.doesNotMatch(text, PRIVATE_VISUAL_FIELDS, `${quiz.id}: author-only/provisional metadata value`);
      assert.doesNotMatch(key, RUNTIME_MEDIA_FIELDS, `${quiz.id}: runtime media/embed field ${key}`);
      assert.doesNotMatch(text, MEDICAL_CLAIMS, `${quiz.id}: diagnostic or medical-grade claim`);
      if (key.toLowerCase() === "src") assert.match(text, /^\/anatomy\//, `${quiz.id}: runtime media sources must be local anatomy files`);
      assert.doesNotMatch(text, /^(?:data|blob):/i, `${quiz.id}: embedded runtime media is not allowed`);
    });

    let imageHotspotCount = 0;
    for (const question of quiz.questions) {
      if (question.kind === "hotspot") {
        imageHotspotCount += 1;
        checkHotspotCalloutSpacing(quiz.id, question);
        const image = question.diagram.image;
        assert.ok(image, `${quiz.id}/${question.id}: hotspot image required`);
        assert.match(image.src, /^\/anatomy\//, `${quiz.id}/${question.id}: hotspot image must be local`);
        assert.equal(image.src, topicAsset.image, `${quiz.id}/${question.id}: hotspot should use its mapped anatomy asset`);
        for (const zone of question.diagram.zones) {
          const part = topicAsset.parts.find((entry) => entry.id.toUpperCase() === zone.id);
          assert.ok(part, `${quiz.id}/${question.id}: zone has a corresponding image badge`);
          assert.ok(Math.abs(zone.x + zone.width / 2 - part.x) < 0.001, `${quiz.id}/${question.id}/${zone.id}: horizontal badge alignment`);
          assert.ok(Math.abs(zone.y + zone.height / 2 - part.y) < 0.001, `${quiz.id}/${question.id}/${zone.id}: vertical badge alignment`);
        }
        assert.equal(image.width, 1200, `${quiz.id}/${question.id}: image metadata width`);
        assert.equal(image.height, 900, `${quiz.id}/${question.id}: image metadata height`);
        assert.ok(image.alt.trim(), `${quiz.id}/${question.id}: image text alternative required`);
        assert.ok(image.credit.trim(), `${quiz.id}/${question.id}: visible source credit required`);
        assert.match(image.sourceUrl, /^https:\/\//, `${quiz.id}/${question.id}: image source URL`);
        assert.match(image.license, /^https:\/\//, `${quiz.id}/${question.id}: image license URL`);
        assert.equal(image.credit, topicAsset.credit, `${quiz.id}/${question.id}: visual attribution must match the asset manifest`);
        assert.equal(image.sourceUrl, topicAsset.sourceUrl, `${quiz.id}/${question.id}: visual source must match the asset manifest`);
        assert.equal(image.license, declaredLicenseUrl(topicAsset.license), `${quiz.id}/${question.id}: license URL must match the asset terms`);
        const imagePath = localPublicFile(image.src);
        const imageMetadata = await sharp(readFileSync(imagePath)).metadata();
        assert.equal(imageMetadata.width, 1200, `${quiz.id}/${question.id}: actual hotspot image width`);
        assert.equal(imageMetadata.height, 900, `${quiz.id}/${question.id}: actual hotspot image height`);
      }

      assert.notEqual(question.kind, "audio", `${quiz.id}/${question.id}: no runtime media tasks`);
    }
    assert.ok(imageHotspotCount >= 2, `${quiz.id}: checked image hotspot count`);
  }
});

test("every first gold-answer path is valid and earns a full eight-task score in the production engine", () => {
  const anatomyQuizzes = QUIZZES.filter((quiz) => EXPECTED_TOPIC_BY_QUIZ_ID.has(quiz.id));
  assert.equal(anatomyQuizzes.length, EXPECTED_TOPIC_BY_QUIZ_ID.size, "All eight initial anatomy quizzes are required before scoring checks");

  for (const quiz of anatomyQuizzes) {
    const answers: Answers = {};
    for (const question of quiz.questions) {
      const answer = firstGoldAnswer(question);
      assert.ok(validateAnswer(question, answer), `${quiz.id}/${question.id}: first gold answer must satisfy the engine contract`);
      answers[question.id] = answer as Answers[string];
    }
    const score = scoreQuiz(quiz as Quiz, answers);
    assert.equal(score.total, 8, `${quiz.id}: all eight tasks must be scored`);
    assert.equal(score.correct, 8, `${quiz.id}: meaningful keyed answers should earn 8/8`);
    assert.equal(score.percent, 100, `${quiz.id}: perfect gold-answer score`);
  }
});
