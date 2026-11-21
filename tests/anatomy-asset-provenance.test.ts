import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { test } from "node:test";
import sharp from "sharp";
import { ANATOMY_ASSETS } from "../src/components/anatomy/assets";

const file = (url: string) => readFileSync(path.join(process.cwd(), "public", url.slice(1)));
const sha256 = (data: Buffer) => createHash("sha256").update(data).digest("hex");

test("anatomy plates, source models and badge maps match their release provenance", () => {
  const provenance = JSON.parse(file("/anatomy/provenance.json").toString());
  assert.equal(provenance.models.length, 17);
  assert.equal(provenance.images.length, 8);
  for (const model of provenance.models) {
    const bytes = file(model.localUrl);
    assert.equal(bytes.length, model.bytes, model.file);
    assert.equal(sha256(bytes), model.sha256, model.file);
    assert.equal(bytes.readUInt32LE(16), 0x4e4f534a, `${model.file}: first GLB chunk must be JSON`);
    const gltf = JSON.parse(bytes.subarray(20, 20 + bytes.readUInt32LE(12)).toString().trim());
    for (const resource of [...(gltf.buffers ?? []), ...(gltf.images ?? [])]) {
      assert.ok(resource.uri === undefined || resource.uri.startsWith("data:"), `${model.file}: no external GLTF resources`);
    }
  }
  for (const asset of ANATOMY_ASSETS) {
    const image = provenance.images.find((entry: { assetId: string }) => entry.assetId === asset.id);
    assert.ok(image, asset.id);
    assert.equal(sha256(file(asset.image)), image.sha256, `${asset.id}: reviewed image bytes`);
    const view = provenance.views.find((entry: { assetId: string }) => entry.assetId === asset.id);
    assert.ok(view, asset.id);
    for (const part of asset.parts) {
      const badge = view.badgeMappings.find((entry: { id: string }) => entry.id === part.id);
      assert.ok(badge, `${asset.id}/${part.id}`);
      assert.deepEqual(badge.badgeCenterPercent, [part.x, part.y], `${asset.id}/${part.id}: button must align with the image badge`);
      assert.deepEqual(badge.hotspotSizePercent, [part.width, part.height]);
      assert.ok(badge.sourceAnchorPercent.every((value: number) => Number.isFinite(value) && value >= 0 && value <= 100));
    }
  }
});

test("licensed Blausen reference figures retain their original bytes and dimensions", async () => {
  const provenance = JSON.parse(file("/anatomy/blausen-provenance.json").toString());
  assert.deepEqual(provenance.figures.map((figure: { id: string }) => figure.id).sort(), ["brain", "heart-section", "kidney-section", "respiratory"]);
  for (const figure of provenance.figures) {
    const bytes = file(figure.image);
    assert.equal(bytes.length, figure.bytes, figure.id);
    assert.equal(sha256(bytes), figure.sha256, figure.id);
    assert.equal(figure.license, "https://creativecommons.org/licenses/by/3.0/");
    assert.match(figure.sourceUrl, /^https:\/\/commons\.wikimedia\.org\/wiki\/File:Blausen_/);
    assert.match(figure.changes, /^None;/);
    const metadata = await sharp(bytes).metadata();
    assert.equal(metadata.width, figure.width);
    assert.equal(metadata.height, figure.height);
  }
});
