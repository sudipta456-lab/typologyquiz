import * as THREE from "three";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export const MIN_ZOOM = 0.8;
export const MAX_ZOOM = 5;

export function fitOrthographicCamera(
  camera: THREE.OrthographicCamera,
  controls: OrbitControls,
  root: THREE.Object3D,
  width: number,
  height: number,
): void {
  const bounds = new THREE.Box3().setFromObject(root);
  const size = bounds.getSize(new THREE.Vector3());
  const center = bounds.getCenter(new THREE.Vector3());
  const radius = Math.max(size.x, size.y, size.z, 0.001) / 2;
  const aspect = Math.max(width / Math.max(height, 1), 0.1);
  const halfHeight = Math.max(size.y, size.x / aspect, size.z, radius * 1.5) * 0.72;
  const direction = new THREE.Vector3(1, 0.72, 1).normalize();

  camera.left = -halfHeight * aspect;
  camera.right = halfHeight * aspect;
  camera.top = halfHeight;
  camera.bottom = -halfHeight;
  camera.near = Math.max(radius / 1000, 0.0001);
  camera.far = Math.max(radius * 20, 10);
  camera.zoom = 1;
  camera.position.copy(center).addScaledVector(direction, radius * 4);
  camera.lookAt(center);
  camera.updateProjectionMatrix();
  controls.cursor.copy(center);
  controls.target.copy(center);
  controls.minTargetRadius = 0;
  controls.maxTargetRadius = radius * 0.15;
  controls.minZoom = MIN_ZOOM;
  controls.maxZoom = MAX_ZOOM;
  controls.saveState();
  controls.update();
}

export function setZoom(camera: THREE.OrthographicCamera, controls: OrbitControls, amount: number): void {
  camera.zoom = THREE.MathUtils.clamp(camera.zoom * amount, MIN_ZOOM, MAX_ZOOM);
  camera.updateProjectionMatrix();
  controls.update();
}
