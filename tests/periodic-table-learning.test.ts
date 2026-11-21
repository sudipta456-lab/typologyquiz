import assert from "node:assert/strict";
import { test } from "node:test";
import {
  DATA_CHECKED_ON,
  ELEMENTS,
  FAMILIES,
  getElement,
  searchElements,
} from "../src/components/periodic-table/data";
import {
  DISCOVERY_UPDATES,
  LEARNING_CHECKED_ON,
  LEARNING_SOURCES,
  LEARNING_TRACKS,
  gradeLearningAnswer,
} from "../src/components/periodic-table/learning";

test("the element reference has exactly the recognized identities and unique display positions", () => {
  assert.equal(ELEMENTS.length, 118);
  assert.deepEqual(ELEMENTS.map((element) => element.atomicNumber), Array.from({ length: 118 }, (_, index) => index + 1));
  assert.equal(new Set(ELEMENTS.map((element) => element.symbol)).size, 118);
  assert.equal(new Set(ELEMENTS.map((element) => `${element.row}:${element.column}`)).size, 118);
  assert.equal(getElement(119), undefined);
  assert.equal(getElement(120), undefined);
  assert.deepEqual(
    [getElement(1)?.row, getElement(1)?.column, getElement(1)?.group, getElement(1)?.family],
    [1, 1, 1, "nonmetal"],
  );
  assert.deepEqual(
    [getElement(2)?.row, getElement(2)?.column, getElement(2)?.group],
    [1, 18, 18],
  );
  assert.deepEqual(
    [getElement(72)?.row, getElement(72)?.column, getElement(72)?.group],
    [6, 4, 4],
  );
  assert.deepEqual(
    [getElement(104)?.row, getElement(104)?.column, getElement(104)?.group],
    [7, 4, 4],
  );
  assert.equal(ELEMENTS.some((element) => element.row === 6 && element.column === 3), false);
  assert.equal(ELEMENTS.some((element) => element.row === 7 && element.column === 3), false);
  assert.deepEqual(FAMILIES.map((family) => family.id).sort(), [
    "actinide", "alkali", "alkaline-earth", "halogen", "lanthanide",
    "metalloid", "noble-gas", "nonmetal", "post-transition", "transition",
  ]);
  for (const atomicNumber of Array.from({ length: 15 }, (_, index) => index + 57)) {
    const element = getElement(atomicNumber)!;
    assert.equal(element.group, null);
    assert.equal(element.row, 9);
    assert.equal(element.column, atomicNumber - 54);
    assert.equal(element.period, 6);
  }
  for (const atomicNumber of Array.from({ length: 15 }, (_, index) => index + 89)) {
    const element = getElement(atomicNumber)!;
    assert.equal(element.group, null);
    assert.equal(element.row, 10);
    assert.equal(element.column, atomicNumber - 86);
    assert.equal(element.period, 7);
  }
});

test("atomic weights preserve full CIAAW values, missing assignments, and non-weight fields", () => {
  assert.equal(getElement(40)?.atomicWeight, "91.222(3)");
  assert.equal(getElement(64)?.atomicWeight, "157.249(2)");
  assert.equal(getElement(71)?.atomicWeight?.replaceAll(" ", ""), "174.96669(5)");
  for (const atomicNumber of [43, 61]) {
    const element = getElement(atomicNumber)!;
    assert.equal(element.atomicWeight, null);
    assert.equal(element.abridgedWeight, null);
  }
  for (const atomicNumber of [90, 91, 92]) assert.ok(getElement(atomicNumber)?.atomicWeight);
  for (const element of ELEMENTS) {
    assert.notEqual(element.atomicWeight, "0", `${element.symbol} atomic weight must not use zero for missing data`);
    assert.notEqual(element.abridgedWeight, "0", `${element.symbol} abridged weight must not use zero for missing data`);
    assert.notEqual(element.electronegativity, 0, `${element.symbol} electronegativity must use null for missing data`);
    assert.notEqual(element.ionizationEnergy, 0, `${element.symbol} ionization energy must use null for missing data`);
  }
});

test("superheavy and estimated state labels preserve their confidence", () => {
  for (const element of ELEMENTS.filter((record) => record.atomicNumber >= 104)) {
    assert.equal(element.state, "unknown", element.symbol);
    assert.equal(element.stateStatus, "unknown", element.symbol);
  }
  for (const atomicNumber of [85, 87]) {
    const element = getElement(atomicNumber)!;
    assert.equal(element.stateStatus, "estimated");
    assert.ok(["solid", "liquid", "gas"].includes(element.state));
  }
  assert.equal(DATA_CHECKED_ON, "2026-11-21");
  assert.equal(LEARNING_CHECKED_ON, "2026-11-21");
});

test("search supports blank queries, aliases, numbers, families, and states together", () => {
  assert.equal(searchElements("").length, 118);
  assert.deepEqual(searchElements(" ").map((element) => element.atomicNumber), ELEMENTS.map((element) => element.atomicNumber));
  assert.equal(searchElements("13")[0]?.name, "Aluminium");
  assert.equal(searchElements("aluminum")[0]?.atomicNumber, 13);
  assert.equal(searchElements("sulfur")[0]?.atomicNumber, 16);
  assert.equal(searchElements("gadol")[0]?.atomicNumber, 64);
  const unknownSuperheavy = searchElements("", "all", "unknown");
  assert.equal(unknownSuperheavy.length, 15);
  assert.ok(unknownSuperheavy.every((element) => element.atomicNumber >= 104));
  const solids = searchElements("", "alkali", "solid");
  assert.ok(solids.length > 0);
  assert.ok(solids.every((element) => element.family === "alkali" && element.state === "solid"));
  assert.deepEqual(searchElements("104", "all", "solid"), []);
});

test("guided practice is 24 unique sourced steps across three eight-step tracks", () => {
  assert.equal(LEARNING_TRACKS.length, 3);
  assert.deepEqual(LEARNING_TRACKS.map((track) => track.id), ["decode", "patterns", "frontier"]);
  const sourceIds = new Set(LEARNING_SOURCES.map((source) => source.id));
  const steps = LEARNING_TRACKS.flatMap((track) => {
    assert.equal(track.steps.length, 8, track.id);
    assert.equal(new Set(track.steps.map((step) => step.section)).size, 2, track.id);
    return track.steps;
  });
  assert.equal(steps.length, 24);
  assert.equal(new Set(steps.map((step) => step.id)).size, 24);
  for (const step of steps) {
    assert.ok(step.prompt.trim(), step.id);
    assert.ok(step.explanation.trim(), step.id);
    assert.ok(step.sourceIds.length > 0, step.id);
    for (const sourceId of step.sourceIds) assert.ok(sourceIds.has(sourceId), `${step.id}: ${sourceId}`);
    if (step.format === "element") {
      assert.ok(getElement(Number(step.correct)), step.id);
    } else {
      assert.equal(step.options?.length, 4, step.id);
      const optionIds = step.options?.map((option) => option.id) ?? [];
      assert.equal(new Set(optionIds).size, optionIds.length, step.id);
      assert.ok(optionIds.includes(step.correct), step.id);
    }
  }
  const first = steps[0];
  assert.equal(gradeLearningAnswer(first, first.correct), true);
  assert.equal(gradeLearningAnswer(first, ` ${first.correct} `), true);
  assert.equal(gradeLearningAnswer(first, "definitely-wrong"), false);
});

test("lessons distinguish unknown weights from neutron counts and searches from confirmed elements", () => {
  const atomicWeightLesson = LEARNING_TRACKS.flatMap((track) => track.steps)
    .find((step) => step.id === "decode-weight-not-mass-number");
  assert.ok(atomicWeightLesson);
  assert.equal(atomicWeightLesson.format, "choice");
  assert.equal(atomicWeightLesson.correct, "relative-weight");
  assert.match(atomicWeightLesson.explanation, /does not identify one isotope or give a neutron count/i);

  const frontierLesson = LEARNING_TRACKS.flatMap((track) => track.steps)
    .find((step) => step.id === "frontier-119-120-status");
  assert.ok(frontierLesson);
  assert.equal(frontierLesson.correct, "targets");
  assert.match(frontierLesson.explanation, /not confirmed discoveries/i);
  assert.equal(getElement(119), undefined);
  assert.equal(getElement(120), undefined);

  const searchUpdate = DISCOVERY_UPDATES.find((update) => update.id === "search-for-119-120-2026");
  assert.ok(searchUpdate);
  assert.equal(searchUpdate.status, "search");
  assert.deepEqual(searchUpdate.elementNumbers, []);
  assert.match(searchUpdate.summary, /Neither report confirms a new element/i);
});
