import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { test } from "node:test";
import * as THREE from "three";
import {
  FUNCTION_STAGE_IDS,
  getAnatomyFunctionFrame,
  getAnatomyFunctionStepIndex,
  NEPHRON_CAPSULE_FLUID_POINT,
  NEPHRON_GLOMERULAR_BLOOD_POINT,
  NEPHRON_MODEL_PATHS,
  NEPHRON_TRANSPORT_ROUTES,
  NEURON_RECEIVING_MEMBRANE,
  NEURON_RECEPTOR_POSITIONS,
  NEURON_TRANSMITTER_PATH,
} from "../src/lib/anatomy-function-model";

const SYSTEMS = ["heart", "respiratory", "urinary", "brain"] as const;
const contractFile = path.join(process.cwd(), "src/lib/anatomy-functions.ts");

test("heart frame keeps gates and flow direction aligned through the four cardiac phases", () => {
  const expected = [
    { avGate: "open", outflowGate: "closed", flowDirection: "into-ventricles" },
    { avGate: "closed", outflowGate: "closed", flowDirection: "none" },
    { avGate: "closed", outflowGate: "open", flowDirection: "out-of-ventricles" },
    { avGate: "closed", outflowGate: "closed", flowDirection: "none" },
  ];

  expected.forEach((phase, stageIndex) => {
    const start = getAnatomyFunctionFrame("heart", stageIndex, 0);
    const middle = getAnatomyFunctionFrame("heart", stageIndex, 0.5);
    const end = getAnatomyFunctionFrame("heart", stageIndex, 1);
    assert.equal(start.systemId, "heart");
    if (start.systemId !== "heart" || middle.systemId !== "heart" || end.systemId !== "heart") assert.fail("heart frame expected");
    assert.equal(start.avGate, phase.avGate);
    assert.equal(start.outflowGate, phase.outflowGate);
    assert.equal(start.flowDirection, phase.flowDirection);
    assert.equal(start.coordinatedPumping, true, "the two ventricles are modeled in one coordinated cycle");
    if (phase.flowDirection === "none") {
      assert.equal(start.flowProgress, 0);
      assert.equal(middle.flowProgress, 0);
      assert.equal(end.flowProgress, 0);
    } else {
      assert.ok(start.flowProgress <= middle.flowProgress && middle.flowProgress <= end.flowProgress, "flow advances along the permitted route");
    }
  });
});

test("ventricular volume changes only during filling and ejection", () => {
  const fillingStart = getAnatomyFunctionFrame("heart", 0, 0);
  const fillingEnd = getAnatomyFunctionFrame("heart", 0, 1);
  const pressureRiseStart = getAnatomyFunctionFrame("heart", 1, 0);
  const pressureRiseEnd = getAnatomyFunctionFrame("heart", 1, 1);
  const ejectionStart = getAnatomyFunctionFrame("heart", 2, 0);
  const ejectionEnd = getAnatomyFunctionFrame("heart", 2, 1);
  const relaxationStart = getAnatomyFunctionFrame("heart", 3, 0);
  const relaxationEnd = getAnatomyFunctionFrame("heart", 3, 1);

  for (const frame of [fillingStart, fillingEnd, pressureRiseStart, pressureRiseEnd, ejectionStart, ejectionEnd, relaxationStart, relaxationEnd]) {
    assert.equal(frame.systemId, "heart");
    if (frame.systemId !== "heart") assert.fail("heart frame expected");
    assert.equal(frame.coordinatedPumping, true);
  }
  if (fillingStart.systemId !== "heart" || fillingEnd.systemId !== "heart" || pressureRiseStart.systemId !== "heart" || pressureRiseEnd.systemId !== "heart" || ejectionStart.systemId !== "heart" || ejectionEnd.systemId !== "heart" || relaxationStart.systemId !== "heart" || relaxationEnd.systemId !== "heart") assert.fail("heart frame expected");
  assert.ok(fillingStart.ventricularVolume < fillingEnd.ventricularVolume);
  assert.equal(fillingEnd.ventricularVolume, pressureRiseStart.ventricularVolume);
  assert.equal(pressureRiseStart.ventricularVolume, pressureRiseEnd.ventricularVolume);
  assert.equal(pressureRiseEnd.ventricularVolume, ejectionStart.ventricularVolume);
  assert.ok(ejectionStart.ventricularVolume > ejectionEnd.ventricularVolume);
  assert.equal(ejectionEnd.ventricularVolume, relaxationStart.ventricularVolume);
  assert.equal(relaxationStart.ventricularVolume, relaxationEnd.ventricularVolume);
});

test("respiratory pause frames stop bulk airflow while gas exchange remains active", () => {
  const expectedAirflow = ["in", "none", "out", "none"];
  const frames = SYSTEMS.slice(1, 2).flatMap(() => [0, 1, 2, 3].map((stageIndex) =>
    getAnatomyFunctionFrame("respiratory", stageIndex, 0.5),
  ));

  frames.forEach((frame, index) => {
    assert.equal(frame.systemId, "respiratory");
    if (frame.systemId !== "respiratory") assert.fail("respiratory frame expected");
    assert.equal(frame.airflow, expectedAirflow[index]);
    assert.equal(frame.gasExchangeContinues, true);
    assert.equal(frame.oxygenMovesIntoBlood, true);
    assert.equal(frame.carbonDioxideMovesIntoAlveolus, true);
  });

  const inhaleEnd = getAnatomyFunctionFrame("respiratory", 0, 1);
  const inhaleStart = getAnatomyFunctionFrame("respiratory", 0, 0);
  const pauseIn = getAnatomyFunctionFrame("respiratory", 1, 0.5);
  const exhaleStart = getAnatomyFunctionFrame("respiratory", 2, 0);
  const exhaleMiddle = getAnatomyFunctionFrame("respiratory", 2, 0.5);
  const exhaleEnd = getAnatomyFunctionFrame("respiratory", 2, 1);
  const pauseOut = getAnatomyFunctionFrame("respiratory", 3, 0.5);
  assert.equal(inhaleEnd.systemId, "respiratory");
  assert.equal(inhaleStart.systemId, "respiratory");
  assert.equal(pauseIn.systemId, "respiratory");
  assert.equal(exhaleStart.systemId, "respiratory");
  assert.equal(exhaleMiddle.systemId, "respiratory");
  assert.equal(exhaleEnd.systemId, "respiratory");
  assert.equal(pauseOut.systemId, "respiratory");
  if ([inhaleStart, inhaleEnd, pauseIn, exhaleStart, exhaleMiddle, exhaleEnd, pauseOut].some((frame) => frame.systemId !== "respiratory")) assert.fail("respiratory frame expected");
  if (inhaleStart.systemId !== "respiratory" || inhaleEnd.systemId !== "respiratory" || pauseIn.systemId !== "respiratory" || exhaleStart.systemId !== "respiratory" || exhaleMiddle.systemId !== "respiratory" || exhaleEnd.systemId !== "respiratory" || pauseOut.systemId !== "respiratory") assert.fail("respiratory frame expected");
  assert.ok(inhaleStart.diaphragmDomeFactor > inhaleEnd.diaphragmDomeFactor, "the resting dome flattens during inhalation");
  assert.equal(inhaleEnd.diaphragmDomeFactor, pauseIn.diaphragmDomeFactor, "the flattened diaphragm holds during pause-in");
  assert.ok(exhaleStart.diaphragmDomeFactor < exhaleMiddle.diaphragmDomeFactor && exhaleMiddle.diaphragmDomeFactor < exhaleEnd.diaphragmDomeFactor, "the dome rises during exhalation");
  assert.equal(exhaleEnd.diaphragmDomeFactor, pauseOut.diaphragmDomeFactor);
  assert.equal(inhaleStart.airflowPathProgress, 0);
  assert.equal(inhaleEnd.airflowPathProgress, 1);
  assert.equal(exhaleStart.airflowPathProgress, 1);
  assert.equal(exhaleEnd.airflowPathProgress, 0);
  assert.equal(pauseIn.airflowPathProgress, null);
  assert.equal(pauseOut.airflowPathProgress, null);
  assert.ok(Math.abs(inhaleEnd.diaphragmDownwardOffset - pauseIn.diaphragmDownwardOffset) < 1e-9, "the diaphragm stays lowered during the end-inhale pause");
  assert.ok(Math.abs(pauseIn.diaphragmDownwardOffset - exhaleStart.diaphragmDownwardOffset) < 1e-9, "exhalation begins from the pause-in position");
});

test("nephron frames keep filtration, recovery, secretion, and collection on distinct routes", () => {
  const expected = [
    ["filtration", "blood-to-capsule"],
    ["reabsorption", "tubule-to-blood"],
    ["secretion", "blood-to-tubule"],
    ["collection", "tubule-to-collecting-duct"],
  ];

  expected.forEach(([process, route], stageIndex) => {
    const frame = getAnatomyFunctionFrame("urinary", stageIndex, 0.6);
    assert.equal(frame.systemId, "urinary");
    if (frame.systemId !== "urinary") assert.fail("urinary frame expected");
    assert.equal(frame.activeProcess, process);
    assert.equal(frame.route, route);
    assert.equal(frame.cellsRetainedInBlood, true);
    assert.equal(frame.largeProteinsRetainedInBlood, true);
    assert.equal(frame.allFiltrateBecomesUrine, false);
  });
});

test("neuron frame propagates a local axon signal before chemical handoff without promising a new spike", () => {
  const early = getAnatomyFunctionFrame("brain", 1, 0.2);
  const late = getAnatomyFunctionFrame("brain", 1, 0.8);
  const release = getAnatomyFunctionFrame("brain", 2, 0.5);
  const response = getAnatomyFunctionFrame("brain", 3, 0.5);

  assert.equal(early.systemId, "brain");
  assert.equal(late.systemId, "brain");
  assert.equal(release.systemId, "brain");
  assert.equal(response.systemId, "brain");
  if (early.systemId !== "brain" || late.systemId !== "brain" || release.systemId !== "brain" || response.systemId !== "brain") assert.fail("brain frame expected");
  assert.equal(early.focus, "local-axon-propagation");
  assert.ok(early.axonSignalPosition < late.axonSignalPosition, "the local membrane event advances along the axon");
  assert.equal(late.transmitterCrossingProgress, 0, "axon propagation precedes the chemical synaptic handoff");
  assert.equal(release.focus, "chemical-release");
  assert.ok(release.transmitterCrossingProgress > 0 && release.transmitterCrossingProgress < 1);
  assert.equal(response.focus, "receptor-response");
  assert.equal(response.postsynapticReceptorsRespond, true);
  assert.equal(response.postsynapticActionPotentialGuaranteed, false);
});

test("nephron transport routes connect their blood, capsule, tubule, and collecting-duct anchors", () => {
  assert.deepEqual(NEPHRON_TRANSPORT_ROUTES.filtration[0], NEPHRON_MODEL_PATHS.bloodIn[2]);
  assert.deepEqual(NEPHRON_TRANSPORT_ROUTES.filtration[1], NEPHRON_GLOMERULAR_BLOOD_POINT);
  assert.deepEqual(NEPHRON_TRANSPORT_ROUTES.filtration[2], NEPHRON_CAPSULE_FLUID_POINT);
  assert.deepEqual(NEPHRON_TRANSPORT_ROUTES.filtrate[0], NEPHRON_CAPSULE_FLUID_POINT);
  assert.deepEqual(NEPHRON_TRANSPORT_ROUTES.filtrate[1], NEPHRON_MODEL_PATHS.tubule[0]);
  assert.deepEqual(NEPHRON_TRANSPORT_ROUTES.reabsorption[0], NEPHRON_MODEL_PATHS.tubule[4]);
  assert.deepEqual(NEPHRON_TRANSPORT_ROUTES.reabsorption.at(-1), NEPHRON_MODEL_PATHS.bloodReturn[0]);
  assert.deepEqual(NEPHRON_TRANSPORT_ROUTES.secretion[0], NEPHRON_MODEL_PATHS.bloodIn[2]);
  assert.deepEqual(NEPHRON_TRANSPORT_ROUTES.secretion.at(-1), NEPHRON_MODEL_PATHS.tubule[4]);
  assert.deepEqual(NEPHRON_TRANSPORT_ROUTES.collection[0], NEPHRON_MODEL_PATHS.tubule.at(-1));
  assert.deepEqual(NEPHRON_TRANSPORT_ROUTES.collection[0], NEPHRON_MODEL_PATHS.collectingDuct[0]);
  assert.deepEqual(NEPHRON_TRANSPORT_ROUTES.collection.at(-1), NEPHRON_MODEL_PATHS.collectingDuct.at(-1));

  for (const [routeName, points] of Object.entries(NEPHRON_TRANSPORT_ROUTES)) {
    const curve = new THREE.CatmullRomCurve3(points.map((point) => new THREE.Vector3(...point)));
    const geometry = new THREE.TubeGeometry(curve, 48, 0.04, 8, false);
    try {
      assert.ok(Number.isFinite(curve.getLength()) && curve.getLength() > 0, `${routeName} has a finite, nonzero curve length`);
      const positions = geometry.getAttribute("position").array;
      assert.ok(Array.from(positions).every(Number.isFinite), `${routeName} has finite TubeGeometry vertices`);
    } finally {
      geometry.dispose();
    }
  }
});

test("neuron chemical handoff reaches receptors on the receiving membrane", () => {
  assert.ok(NEURON_RECEPTOR_POSITIONS.every(([, y]) => y >= -0.6 && y <= 0.5));
  assert.ok(NEURON_RECEPTOR_POSITIONS.every(([x]) => Math.abs(x - 2.72) <= 0.2));
  assert.deepEqual(NEURON_TRANSMITTER_PATH.at(-1), NEURON_RECEPTOR_POSITIONS[2]);
  assert.ok(NEURON_RECEIVING_MEMBRANE.some(([x, y]) => Math.abs(x - NEURON_RECEPTOR_POSITIONS[2][0]) < 0.2 && Math.abs(y - NEURON_RECEPTOR_POSITIONS[2][1]) < 0.2));
});

test("valid deep-linked stages resolve within their own system", () => {
  for (const systemId of SYSTEMS) {
    FUNCTION_STAGE_IDS[systemId].forEach((stepId, index) => assert.equal(getAnatomyFunctionStepIndex(systemId, stepId), index));
    assert.equal(getAnatomyFunctionStepIndex(systemId, "unknown-stage"), 0);
  }
});

test("frame inputs clamp to finite lesson stages and progress", () => {
  for (const systemId of SYSTEMS) {
    const underflow = getAnatomyFunctionFrame(systemId, -4, -2);
    const overflow = getAnatomyFunctionFrame(systemId, 100, 4);
    const invalid = getAnatomyFunctionFrame(systemId, Number.NaN, Number.POSITIVE_INFINITY);
    assert.equal(underflow.stageIndex, 0);
    assert.equal(underflow.progress, 0);
    assert.equal(overflow.stageIndex, 3);
    assert.equal(overflow.progress, 1);
    assert.equal(invalid.stageIndex, 0);
    assert.equal(invalid.progress, 0);
    assert.equal(underflow.stageId, FUNCTION_STAGE_IDS[systemId][0]);
    assert.equal(overflow.stageId, FUNCTION_STAGE_IDS[systemId][3]);
  }
});

test("producer lesson sources and stable function hashes follow the declared contract", { skip: !existsSync(contractFile) }, async () => {
  const importModule = new Function("specifier", "return import(specifier)") as (specifier: string) => Promise<Record<string, unknown>>;
  const moduleUrl = pathToFileURL(contractFile).href;
  const api = await importModule(moduleUrl);
  const lessons = api.ANATOMY_FUNCTION_LESSONS as readonly {
    id: string;
    title: string;
    summary: string;
    scopeNote: string;
    legend: readonly { id: string; label: string; color: string }[];
    steps: readonly { id: string; title: string; description: string; watchFor: string; sourceIds: readonly string[] }[];
    sources: readonly { id: string; label: string; url: string }[];
    quiz: { id: string; slug: string; title: string };
  }[];
  const parseHash = api.parseAnatomyFunctionHash as (hash: string) => { systemId: string; stepId?: string } | null;

  assert.equal(typeof api.getAnatomyFunctionLesson, "function");
  assert.equal(typeof parseHash, "function");
  assert.deepEqual(lessons.map((lesson) => lesson.id), SYSTEMS);
  assert.equal(new Set(lessons.map((lesson) => lesson.id)).size, 4);

  const approvedSources = new Set([
    "https://www.nhlbi.nih.gov/health/heart/blood-flow",
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/19-3-cardiac-cycle",
    "https://www.nhlbi.nih.gov/health/lungs/breathing-benefits",
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/22-3-the-process-of-breathing",
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/22-4-gas-exchange",
    "https://www.niddk.nih.gov/health-information/kidney-disease/kidneys-how-they-work",
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/25-4-microscopic-anatomy-of-the-kidney",
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/25-5-physiology-of-urine-formation",
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/25-6-tubular-reabsorption",
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-2-nervous-tissue",
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-4-the-action-potential",
    "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-5-communication-between-neurons",
  ]);

  for (const lesson of lessons) {
    assert.ok(lesson.title.trim() && lesson.summary.trim() && lesson.scopeNote.trim());
    assert.equal(lesson.steps.length, 4, `${lesson.id} has four ordered teaching stages`);
    assert.deepEqual(lesson.steps.map((step) => step.id), FUNCTION_STAGE_IDS[lesson.id as keyof typeof FUNCTION_STAGE_IDS], `${lesson.id} stage IDs remain stable and ordered`);
    assert.ok(lesson.legend.length >= 2, `${lesson.id} has a text-and-color legend`);
    assert.ok(lesson.legend.every((entry) => entry.id && entry.label && /^#[\da-f]{3,8}$/i.test(entry.color)));
    if (lesson.id === "heart") {
      const colors = new Map(lesson.legend.map((entry) => [entry.id, entry.color]));
      assert.equal(colors.get("lower-oxygen"), "#557fa9");
      assert.equal(colors.get("higher-oxygen"), "#d65b55");
      assert.equal(colors.get("gate-symbol"), "#f4d6a1");
      assert.equal(colors.get("pressure"), "#6256a5");
    }
    const sourcesById = new Map(lesson.sources.map((source) => [source.id, source]));
    assert.equal(sourcesById.size, lesson.sources.length, `${lesson.id} source IDs are unique`);
    for (const source of lesson.sources) {
      assert.ok(source.label.trim(), `${lesson.id} source label is present`);
      assert.ok(approvedSources.has(source.url), `${lesson.id} source is in the retrieved primary-source set: ${source.url}`);
      assert.equal(new URL(source.url).protocol, "https:");
    }
    for (const step of lesson.steps) {
      assert.ok(step.id && step.title.trim() && step.description.trim() && step.watchFor.trim());
      assert.ok(step.sourceIds.length > 0, `${lesson.id}/${step.id} cites at least one source`);
      assert.ok(step.sourceIds.every((id) => sourcesById.has(id)), `${lesson.id}/${step.id} source IDs resolve`);
      assert.deepEqual(parseHash(`#function-${lesson.id}-${step.id}`), { systemId: lesson.id, stepId: step.id });
    }
    const getLesson = api.getAnatomyFunctionLesson as (id: string) => unknown;
    assert.equal(getLesson(lesson.id), lesson, `${lesson.id} resolves through the public lookup`);
    assert.deepEqual(parseHash(`#function-${lesson.id}`), { systemId: lesson.id });
    assert.equal(parseHash(`#function-${lesson.id}-not-a-step`), null);
    assert.match(lesson.quiz.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(lesson.quiz.id && lesson.quiz.title.trim());
  }
  assert.equal(parseHash("#function-other"), null);
  assert.equal(parseHash("https://typologyquiz.com/#function-heart-filling"), null);
  assert.equal((api.getAnatomyFunctionLesson as (id: string) => unknown)("other"), undefined);
});
