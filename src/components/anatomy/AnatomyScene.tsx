"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import styles from "./Anatomy.module.css";
import { fitOrthographicCamera, setZoom } from "./camera";
import {
  classifySourceMesh,
  isObjectAndAncestorsVisible,
  sourceMeshVisible,
  type SourceVisibilityPreset,
} from "./source-visibility";

type AnatomySceneProps = { modelUrls: readonly string[]; assetId?: string };
type SourceMesh = { mesh: THREE.Mesh; modelUrl: string; defaultVisible: boolean };

type HighlightState = {
  mesh: THREE.Mesh;
  originalMaterial: THREE.Material | THREE.Material[];
  temporaryMaterials: THREE.Material[];
  timeout: number;
};

const MAX_DEVICE_PIXEL_RATIO = 1.5;

function validatedModelUrl(value: string): string | null {
  if (!value.startsWith("/") || value.startsWith("//") || value.includes("\\")) return null;
  const parsed = new URL(value, window.location.origin);
  if (parsed.origin !== window.location.origin || !parsed.pathname.startsWith("/anatomy/") || !parsed.pathname.toLowerCase().endsWith(".glb") || parsed.search || parsed.hash) {
    return null;
  }
  return parsed.pathname;
}

function sanitizedLabel(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const label = value
    .replace(/<[^>]*>/g, " ")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!label || /^[-–—]+$/.test(label) || label.length > 120) return null;
  return label;
}

function labelFromObject(object: THREE.Object3D): string {
  let current: THREE.Object3D | null = object;
  while (current) {
    // This pinned HRA node has a name/ontology conflict; do not teach either label as verified.
    if (current.name === "VH_M_seminal_vesicle") return "Surface with an unverified source label";
    const label = sanitizedLabel(current.userData.label);
    if (label) return label;
    current = current.parent;
  }
  return "Model surface";
}

function collectTextures(value: unknown, textures: Set<THREE.Texture>, visited: Set<object>): void {
  if (value instanceof THREE.Texture) {
    textures.add(value);
    return;
  }
  if (!value || typeof value !== "object" || visited.has(value)) return;
  visited.add(value);
  if (Array.isArray(value)) {
    value.forEach((entry) => collectTextures(entry, textures, visited));
    return;
  }
  Object.values(value).forEach((entry) => collectTextures(entry, textures, visited));
}

function closeImageBitmaps(value: unknown, closed: Set<ImageBitmap>): void {
  if (typeof ImageBitmap !== "undefined" && value instanceof ImageBitmap) {
    if (!closed.has(value)) {
      closed.add(value);
      value.close();
    }
    return;
  }
  if (Array.isArray(value)) value.forEach((entry) => closeImageBitmaps(entry, closed));
}

function disposeObjectResources(...roots: readonly THREE.Object3D[]): void {
  const geometries = new Set<THREE.BufferGeometry>();
  const materials = new Set<THREE.Material>();
  const textures = new Set<THREE.Texture>();
  const visited = new Set<object>();
  const closedImages = new Set<ImageBitmap>();

  roots.forEach((root) => {
    root.traverse((object) => {
      const renderable = object as THREE.Object3D & {
        geometry?: THREE.BufferGeometry;
        material?: THREE.Material | THREE.Material[];
      };
      if (renderable.geometry) geometries.add(renderable.geometry);
      if (object instanceof THREE.SkinnedMesh && object.skeleton.boneTexture) textures.add(object.skeleton.boneTexture);
      const materialList = Array.isArray(renderable.material) ? renderable.material : renderable.material ? [renderable.material] : [];
      materialList.forEach((material) => {
        materials.add(material);
        collectTextures(material, textures, visited);
      });
    });
  });

  textures.forEach((texture) => {
    closeImageBitmaps(texture.image, closedImages);
    texture.dispose();
  });
  materials.forEach((material) => material.dispose());
  geometries.forEach((geometry) => geometry.dispose());
}

function labelMaterial(material: THREE.Material): THREE.Material {
  const clone = material.clone();
  const tinted = clone as THREE.Material & { color?: THREE.Color; emissive?: THREE.Color; emissiveIntensity?: number };
  if (tinted.emissive?.isColor) {
    tinted.emissive.set("#f26950");
    if (typeof tinted.emissiveIntensity === "number") tinted.emissiveIntensity = Math.max(tinted.emissiveIntensity, 0.65);
  } else if (tinted.color?.isColor) {
    tinted.color.lerp(new THREE.Color("#f26950"), 0.5);
  }
  return clone;
}

function makeHighlight(mesh: THREE.Mesh): HighlightState {
  const originalMaterial = mesh.material;
  const materialList = Array.isArray(originalMaterial) ? originalMaterial : [originalMaterial];
  const temporaryMaterials = materialList.map(labelMaterial);
  mesh.material = Array.isArray(originalMaterial) ? temporaryMaterials : temporaryMaterials[0];
  return { mesh, originalMaterial, temporaryMaterials, timeout: 0 };
}

function restoreHighlight(highlight: HighlightState | null): void {
  if (!highlight) return;
  window.clearTimeout(highlight.timeout);
  highlight.mesh.material = highlight.originalMaterial;
  highlight.temporaryMaterials.forEach((material) => material.dispose());
}

export function AnatomyScene({ modelUrls, assetId }: AnatomySceneProps) {
  const host = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const drawRef = useRef<() => void>(() => undefined);
  const [status, setStatus] = useState("Loading 3D model…");
  const [selectedLabel, setSelectedLabel] = useState("");
  const [error, setError] = useState("");
  const [visibilityAvailable, setVisibilityAvailable] = useState(false);
  const [visibilityPreset, setVisibilityPreset] = useState<SourceVisibilityPreset>("full");
  const [visibilitySummary, setVisibilitySummary] = useState("");
  const [visibleSourceParts, setVisibleSourceParts] = useState<string[]>([]);
  const [unchangedMeshCount, setUnchangedMeshCount] = useState(0);
  const applyVisibilityRef = useRef<(preset: SourceVisibilityPreset) => void>(() => undefined);
  const urlKey = modelUrls.join("\n");

  useEffect(() => {
    const mountedContainer = host.current;
    if (!mountedContainer) return;
    const container: HTMLDivElement = mountedContainer;

    let cancelled = false;
    let disposed = false;
    let renderer: THREE.WebGLRenderer | null = null;
    let controls: OrbitControls | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let root: THREE.Group | null = null;
    let loadedScenes: THREE.Object3D[] = [];
    let sourceMeshes: SourceMesh[] = [];
    let camera: THREE.OrthographicCamera | null = null;
    let scene: THREE.Scene | null = null;
    let currentHighlight: HighlightState | null = null;
    let pointerStart: { x: number; y: number; pointerId: number } | null = null;
    let attachedCanvas: HTMLCanvasElement | null = null;
    function cleanup() {
      if (disposed) return;
      disposed = true;
      resizeObserver?.disconnect();
      resizeObserver = null;
      restoreHighlight(currentHighlight);
      currentHighlight = null;
      attachedCanvas?.removeEventListener("pointerdown", onPointerDown);
      attachedCanvas?.removeEventListener("pointerup", onPointerUp);
      attachedCanvas?.removeEventListener("pointercancel", onPointerCancel);
      controls?.removeEventListener("change", render);
      controls?.dispose();
      controlsRef.current = null;
      cameraRef.current = null;
      drawRef.current = () => undefined;
      if (loadedScenes.length > 0) disposeObjectResources(...loadedScenes);
      else if (root) disposeObjectResources(root);
      loadedScenes = [];
      sourceMeshes = [];
      root = null;
      renderer?.setAnimationLoop(null);
      renderer?.dispose();
      renderer?.forceContextLoss();
      attachedCanvas?.remove();
      attachedCanvas = null;
      renderer = null;
      controls = null;
      camera = null;
      scene = null;
      applyVisibilityRef.current = () => undefined;
    }
    const requestedUrls = urlKey ? urlKey.split("\n") : [];
    const safeUrls: string[] = [];
    let hasInvalidUrl = false;
    requestedUrls.forEach((url) => {
      const safeUrl = validatedModelUrl(url);
      if (safeUrl) safeUrls.push(safeUrl);
      else hasInvalidUrl = true;
    });

    const onPointerDown = (event: PointerEvent) => {
      pointerStart = { x: event.clientX, y: event.clientY, pointerId: event.pointerId };
    };
    const onPointerCancel = () => { pointerStart = null; };
    const onPointerUp = (event: PointerEvent) => {
      if (!pointerStart || pointerStart.pointerId !== event.pointerId || !renderer || !camera || !root) {
        pointerStart = null;
        return;
      }
      const distance = Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y);
      pointerStart = null;
      if (distance > 7) return;

      const bounds = renderer.domElement.getBoundingClientRect();
      const pointer = new THREE.Vector2(
        ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
        -((event.clientY - bounds.top) / bounds.height) * 2 + 1,
      );
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObject(root, true).find((intersection) =>
        intersection.object instanceof THREE.Mesh && isObjectAndAncestorsVisible(intersection.object),
      );
      if (!hit || !(hit.object instanceof THREE.Mesh)) return;

      restoreHighlight(currentHighlight);
      currentHighlight = makeHighlight(hit.object);
      currentHighlight.timeout = window.setTimeout(() => {
        restoreHighlight(currentHighlight);
        currentHighlight = null;
        render();
      }, 1200);
      setSelectedLabel(labelFromObject(hit.object));
      render();
    };

    async function initialize() {
      if (safeUrls.length === 0 || hasInvalidUrl) {
        setError("No verified local 3D model is available for this topic. Continue with the illustrated reference.");
        setStatus("");
        return;
      }

      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, MAX_DEVICE_PIXEL_RATIO));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.domElement.setAttribute("aria-hidden", "true");
        renderer.domElement.className = styles.canvas;
        attachedCanvas = renderer.domElement;
        container.appendChild(attachedCanvas);
        attachedCanvas.addEventListener("pointerdown", onPointerDown);
        attachedCanvas.addEventListener("pointerup", onPointerUp);
        attachedCanvas.addEventListener("pointercancel", onPointerCancel);

        scene = new THREE.Scene();
        scene.add(new THREE.HemisphereLight(0xfff4e6, 0x52606b, 2.2));
        const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
        keyLight.position.set(3, 5, 4);
        scene.add(keyLight);
        const fillLight = new THREE.DirectionalLight(0x9ed8d0, 1.05);
        fillLight.position.set(-4, 1.5, -2);
        scene.add(fillLight);

        const rect = container.getBoundingClientRect();
        const width = Math.max(rect.width, 1);
        const height = Math.max(rect.height, 1);
        camera = new THREE.OrthographicCamera(-width / height, width / height, 1, -1, 0.0001, 1000);
        controls = new OrbitControls(camera, renderer.domElement);
        controlsRef.current = controls;
        cameraRef.current = camera;
        drawRef.current = render;
        controls.enableDamping = false;
        controls.autoRotate = false;
        controls.enablePan = false;
        controls.enableZoom = true;
        controls.zoomToCursor = false;
        controls.addEventListener("change", render);
        renderer.setSize(width, height, false);

        const manager = new THREE.LoadingManager();
        manager.setURLModifier((resourceUrl) => {
          if (resourceUrl.startsWith("data:") || resourceUrl.startsWith("blob:")) return resourceUrl;
          const resolved = new URL(resourceUrl, window.location.href);
          if (resolved.origin !== window.location.origin || !resolved.pathname.startsWith("/anatomy/")) {
            throw new Error("The model requested a resource outside the local anatomy collection.");
          }
          return resolved.href;
        });
        const loader = new GLTFLoader(manager);
        const results = await Promise.allSettled(safeUrls.map(async (url) => ({ url, gltf: await loader.loadAsync(url) })));
        const loaded = results.flatMap((result) => result.status === "fulfilled" ? [result.value] : []);
        loadedScenes = loaded.flatMap(({ gltf }) => gltf.scenes);
        if (cancelled || disposed) {
          disposeObjectResources(...loadedScenes);
          loadedScenes = [];
          return;
        }
        const failed = results.find((result) => result.status === "rejected");
        if (failed?.status === "rejected") {
          disposeObjectResources(...loadedScenes);
          loadedScenes = [];
          throw failed.reason;
        }

        root = new THREE.Group();
        loaded.forEach(({ url, gltf }) => {
          gltf.scene.traverse((object) => {
            if (object instanceof THREE.Mesh) sourceMeshes.push({ mesh: object, modelUrl: url, defaultVisible: object.visible });
          });
          root?.add(gltf.scene);
        });
        if (root.children.length === 0) throw new Error("The local model contained no viewable scenes.");
        scene.add(root);
        const classifiedMeshes = sourceMeshes.filter(({ mesh, modelUrl }) => classifySourceMesh(assetId, modelUrl, mesh.name) !== null);
        setVisibilityAvailable(classifiedMeshes.length > 0);
        const applyVisibility = (preset: SourceVisibilityPreset) => {
          restoreHighlight(currentHighlight);
          currentHighlight = null;
          setSelectedLabel("");
          sourceMeshes.forEach(({ mesh, modelUrl, defaultVisible }) => {
            mesh.visible = defaultVisible && sourceMeshVisible(classifySourceMesh(assetId, modelUrl, mesh.name), preset);
          });
          const visibleCuratedMeshes = sourceMeshes.filter(({ mesh, modelUrl }) =>
            mesh.visible && classifySourceMesh(assetId, modelUrl, mesh.name) === "internal",
          );
          const untouchedMeshes = sourceMeshes.filter(({ mesh, modelUrl }) =>
            mesh.visible && classifySourceMesh(assetId, modelUrl, mesh.name) === null,
          );
          setVisibilitySummary(preset === "full"
            ? `Full model: ${sourceMeshes.filter(({ mesh }) => mesh.visible).length} source meshes visible.`
            : `Internal structures preset: ${sourceMeshes.filter(({ mesh }) => mesh.visible).length} source meshes visible; ${visibleCuratedMeshes.length} have curated internal labels and ${untouchedMeshes.length} unclassified source meshes remain unchanged.`);
          setVisibleSourceParts(visibleCuratedMeshes.map(({ mesh }) => mesh.name));
          setUnchangedMeshCount(untouchedMeshes.length);
          render();
        };
        applyVisibilityRef.current = applyVisibility;
        applyVisibility("full");
        resizeObserver = new ResizeObserver(() => {
          if (disposed || !renderer || !camera) return;
          const size = container.getBoundingClientRect();
          const nextWidth = Math.max(size.width, 1);
          const nextHeight = Math.max(size.height, 1);
          renderer.setSize(nextWidth, nextHeight, false);
          const halfHeight = camera.top;
          const aspect = nextWidth / nextHeight;
          camera.left = -halfHeight * aspect;
          camera.right = halfHeight * aspect;
          camera.updateProjectionMatrix();
          render();
        });
        resizeObserver.observe(container);
        fitOrthographicCamera(camera, controls, root, width, height);
        setStatus("3D model ready. Drag to rotate, use the view controls to zoom, and select a surface to inspect its model label.");
        render();
      } catch {
        cleanup();
        if (cancelled) return;
        setError("The 3D view could not be opened on this device. The reviewed image and text reference remain available.");
        setStatus("");
      }
    }

    function render() {
      if (!disposed && renderer && scene && camera) renderer.render(scene, camera);
    }

    void initialize();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [urlKey, assetId]);

  function chooseVisibilityPreset(preset: SourceVisibilityPreset) {
    setVisibilityPreset(preset);
    applyVisibilityRef.current(preset);
  }

  function rotate(horizontal: number, vertical: number) {
    const controls = controlsRef.current;
    if (!controls) return;
    controls.rotateLeft(horizontal);
    controls.rotateUp(vertical);
    controls.update();
    drawRef.current();
  }

  function zoom(amount: number) {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;
    setZoom(camera, controls, amount);
    drawRef.current();
  }

  function resetView() {
    const controls = controlsRef.current;
    controls?.reset();
    drawRef.current();
  }

  return (
    <div className={styles.sceneShell}>
      <div ref={host} className={styles.sceneViewport} role="group" aria-label="3D model view. Rotate to explore; the default view does not indicate anatomical direction." />
      <p className={styles.sceneStatus} role="status" aria-live="polite">{error || status}</p>
      {!error && status.startsWith("3D model ready") && (
        <>
          <div className={styles.sceneControls} role="group" aria-label="3D model view controls">
            <button type="button" className={styles.sceneControl} aria-label="Rotate left" onClick={() => rotate(Math.PI / 12, 0)}>←</button>
            <button type="button" className={styles.sceneControl} aria-label="Rotate right" onClick={() => rotate(-Math.PI / 12, 0)}>→</button>
            <button type="button" className={styles.sceneControl} aria-label="Rotate up" onClick={() => rotate(0, Math.PI / 12)}>↑</button>
            <button type="button" className={styles.sceneControl} aria-label="Rotate down" onClick={() => rotate(0, -Math.PI / 12)}>↓</button>
            <button type="button" className={styles.sceneControl} aria-label="Zoom in" onClick={() => zoom(1.2)}>＋</button>
            <button type="button" className={styles.sceneControl} aria-label="Zoom out" onClick={() => zoom(1 / 1.2)}>−</button>
            <button type="button" className={styles.sceneControlReset} onClick={resetView}>Reset view</button>
          </div>
          {visibilityAvailable && (
            <section className={styles.visibilityControls} aria-label="Source model visibility presets">
              <p className={styles.modelHint}>Curated visibility presets change only verified source meshes. This remains a surface model, not a CT, MRI, or certified slice.</p>
              <div className={styles.sceneControls} role="group" aria-label="Source model visibility">
                <button type="button" className={styles.sceneControlReset} aria-pressed={visibilityPreset === "full"} onClick={() => chooseVisibilityPreset("full")}>Full model</button>
                <button type="button" className={styles.sceneControlReset} aria-pressed={visibilityPreset === "internal"} onClick={() => chooseVisibilityPreset("internal")}>Internal structures</button>
              </div>
              <p className={styles.partInspector} role="status" aria-live="polite" aria-atomic="true">{visibilitySummary}</p>
              {visibilityPreset === "internal" && visibleSourceParts.length > 0 && (
                <details className={styles.visibleParts}>
                  <summary>Curated visible source parts ({visibleSourceParts.length})</summary>
                  <ul>{visibleSourceParts.map((name) => <li key={name}><code>{name}</code></li>)}</ul>
                  {unchangedMeshCount > 0 && <p>{unchangedMeshCount} unclassified source meshes remain visible and unchanged.</p>}
                </details>
              )}
            </section>
          )}
          <p className={styles.partInspector} aria-live="polite" aria-atomic="true">{selectedLabel ? `Selected surface: ${selectedLabel}` : "Select a model surface to inspect its supplied label."}</p>
          <p className={styles.modelHint}>3D model view — rotate to explore. Drag or use the buttons above. Touch scrolling works outside the model view.</p>
        </>
      )}
    </div>
  );
}
