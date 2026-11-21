import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { test } from "node:test";
import {
  classifySourceMesh,
  getSourceMeshAllowlist,
  isObjectAndAncestorsVisible,
  sourceMeshVisible,
} from "../src/components/anatomy/source-visibility";

function readGlbMeshNames(filename: string): string[] {
  const bytes = readFileSync(path.join(process.cwd(), "public/anatomy/models", filename));
  assert.equal(bytes.toString("ascii", 0, 4), "glTF", `${filename} has a GLB header`);
  const jsonLength = bytes.readUInt32LE(12);
  assert.equal(bytes.readUInt32LE(16), 0x4e4f534a, `${filename} begins with its JSON chunk`);
  const document = JSON.parse(bytes.toString("utf8", 20, 20 + jsonLength)) as { meshes: { name?: string }[] };
  return document.meshes.map((mesh) => mesh.name ?? "");
}

const verifiedModels = [
  { assetId: "heart", url: "/anatomy/models/VH_M_Heart.glb", file: "VH_M_Heart.glb", outer: 5, internal: 9 },
  { assetId: "respiratory", url: "/anatomy/models/VH_M_Lung.glb", file: "VH_M_Lung.glb", outer: 20, internal: 30 },
  { assetId: "urinary", url: "/anatomy/models/VH_M_Kidney_L.glb", file: "VH_M_Kidney_L.glb", outer: 2, internal: 19 },
  { assetId: "urinary", url: "/anatomy/models/VH_M_Kidney_R.glb", file: "VH_M_Kidney_R.glb", outer: 2, internal: 21 },
  { assetId: "brain", url: "/anatomy/models/Allen_M_Brain.glb", file: "Allen_M_Brain.glb", outer: 90, internal: 42 },
] as const;

test("curated source mesh allowlists match the actual local GLB JSON labels", () => {
  for (const model of verifiedModels) {
    const labels = readGlbMeshNames(model.file);
    const allowlist = getSourceMeshAllowlist(model.assetId, model.url);
    assert.equal(new Set(allowlist.map((entry) => entry.meshName)).size, allowlist.length, `${model.file} allowlist labels are unique`);
    assert.ok(allowlist.every((entry) => labels.includes(entry.meshName)), `${model.file} allowlist contains only actual GLB mesh labels`);
    assert.ok(allowlist.every((entry) => classifySourceMesh(model.assetId, model.url, entry.meshName) === entry.meshClass));
    const classified = labels.filter((label) => classifySourceMesh(model.assetId, model.url, label) !== null);
    assert.equal(new Set(labels).size, labels.length, `${model.file} labels are unique`);
    assert.equal(classified.filter((label) => classifySourceMesh(model.assetId, model.url, label) === "outer").length, model.outer);
    assert.equal(classified.filter((label) => classifySourceMesh(model.assetId, model.url, label) === "internal").length, model.internal);
    assert.equal(classified.length, model.outer + model.internal, `${model.file} has no duplicate classification`);
    assert.ok(labels.every((label) => !/alveol|capillary|nephron|glomerul/i.test(label)), `${model.file} does not imply absent microanatomy`);
  }

  const lungLabels = readGlbMeshNames("VH_M_Lung.glb");
  assert.ok(lungLabels.includes("VH_M_trachea"));
  assert.ok(lungLabels.includes("VH_M_left_main_bronchus"));
  assert.equal(lungLabels.some((label) => /alveol|capillary/i.test(label)), false, "the airway preset does not claim alveoli are modeled");
});

test("presets hide only curated outer meshes, unknown names stay visible, and full model resets", () => {
  assert.equal(sourceMeshVisible("outer", "internal"), false);
  assert.equal(sourceMeshVisible("internal", "internal"), true);
  assert.equal(sourceMeshVisible(null, "internal"), true);
  for (const meshClass of ["outer", "internal", null] as const) {
    assert.equal(sourceMeshVisible(meshClass, "full"), true);
  }
  assert.equal(classifySourceMesh("heart", "/anatomy/models/VH_M_Heart.glb", "unrecognized_surface"), null);
  assert.equal(classifySourceMesh("brain", "/anatomy/models/VH_M_Heart.glb", "VH_M_heart_left_ventricle"), null);
});

test("hidden picking rejects invisible objects and ancestors; reset restores pickability", () => {
  const visibleRoot = { visible: true, parent: null };
  const hiddenGroup = { visible: false, parent: visibleRoot };
  const visibleMesh = { visible: true, parent: hiddenGroup };
  assert.equal(isObjectAndAncestorsVisible(visibleMesh), false);

  hiddenGroup.visible = true;
  assert.equal(isObjectAndAncestorsVisible(visibleMesh), true);
  const hiddenMesh = { visible: false, parent: visibleRoot };
  assert.equal(isObjectAndAncestorsVisible(hiddenMesh), false);
});
