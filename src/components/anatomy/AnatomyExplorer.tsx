"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ANATOMY_ASSETS } from "./assets";
import { AnatomyReferenceFigures } from "./AnatomyReferenceFigures";
import { AnatomyFunctionExplorer } from "./functions/AnatomyFunctionExplorer";
import { QuizSharePanel } from "@/components/QuizSharePanel";
import { parseAnatomyFunctionHash, type AnatomyFunctionId } from "@/lib/anatomy-functions";
import styles from "./Anatomy.module.css";

type AnatomyPart = { id: string; label: string; description: string; x: number; y: number; width: number; height: number };
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
  parts: readonly AnatomyPart[];
  notes: string;
};

const AnatomySceneOnDemand = dynamic(
  () => import("./AnatomyScene").then((module) => module.AnatomyScene),
  {
    ssr: false,
    loading: () => <p className={styles.sceneStatus} role="status">Preparing the interactive viewer…</p>,
  },
);

type AnatomyTopicId =
  | "body"
  | "heart"
  | "brain"
  | "respiratory"
  | "digestive"
  | "urinary"
  | "reproductive-female"
  | "reproductive-male";

type AnatomyTopic = { id: AnatomyTopicId; label: string; summary: string };

export type AnatomyQuizLink = { assetId: string; title: string; href: string };

type AnatomyExplorerProps = {
  quizLinks?: readonly AnatomyQuizLink[];
};

const topics: readonly AnatomyTopic[] = [
  { id: "body", label: "Whole body", summary: "A broad reference view" },
  { id: "heart", label: "Heart", summary: "Function lesson available · source reference" },
  { id: "brain", label: "Brain", summary: "Function lesson available · source reference" },
  { id: "respiratory", label: "Respiratory", summary: "Function lesson available · source reference" },
  { id: "digestive", label: "Digestive", summary: "The digestive system" },
  { id: "urinary", label: "Urinary", summary: "Function lesson available · source reference" },
  { id: "reproductive-female", label: "Reproductive · female", summary: "A reproductive-system reference" },
  { id: "reproductive-male", label: "Reproductive · male", summary: "A reproductive-system reference" },
];

const shareUrl = "https://typologyquiz.com/learn/anatomy/";

function plainText(value: string, maxLength = 280): string {
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function getLocalImageUrl(value: string | undefined): string | null {
  if (!value || !value.startsWith("/anatomy/") || value.startsWith("//") || value.includes("\\")) return null;
  const parsed = new URL(value, "https://typologyquiz.com");
  return parsed.origin === "https://typologyquiz.com" && parsed.pathname.startsWith("/anatomy/") && !parsed.search && !parsed.hash ? parsed.pathname : null;
}

function safeSourceUrl(value: string): string | null {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" ? parsed.href : null;
  } catch {
    return null;
  }
}

function getLocalModelUrls(asset: AnatomyAsset): string[] {
  return asset.modelUrls.filter((url) =>
    url.startsWith("/") && !url.startsWith("//") && !url.includes("\\") && url.startsWith("/anatomy/"),
  );
}

function validQuizLinks(quizLinks: readonly AnatomyQuizLink[] = []): AnatomyQuizLink[] {
  return quizLinks.filter((link) => {
    const idIsKnown = topics.some((topic) => topic.id === link.assetId);
    const hrefIsLocal = link.href.startsWith("/") && !link.href.startsWith("//") && !link.href.includes("\\");
    return idIsKnown && hrefIsLocal && plainText(link.title, 120).length > 0;
  });
}

export function AnatomyExplorer({ quizLinks = [] }: AnatomyExplorerProps) {
  const instanceId = `anatomy-atlas-${useId()}`;
  const anatomyAssets: readonly AnatomyAsset[] = ANATOMY_ASSETS;
  const availableAssets = new Map<string, AnatomyAsset>(anatomyAssets.map((asset) => [asset.id, asset]));
  const [selectedTopic, setSelectedTopic] = useState<AnatomyTopicId>("body");
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [initialFunctionStepId, setInitialFunctionStepId] = useState<string | undefined>();
  const [functionScrollRequest, setFunctionScrollRequest] = useState(0);
  const [showScene, setShowScene] = useState(false);
  const [zoomOpen, setZoomOpen] = useState(false);
  const zoomDialog = useRef<HTMLDialogElement>(null);
  const zoomTrigger = useRef<HTMLButtonElement>(null);
  const asset = availableAssets.get(selectedTopic);
  const safeLinks = useMemo(() => validQuizLinks(quizLinks), [quizLinks]);
  const topic = topics.find((item) => item.id === selectedTopic) ?? topics[0];
  const sceneUrls = asset ? getLocalModelUrls(asset) : [];
  const imageUrl = asset ? getLocalImageUrl(asset.image) : null;
  const activePart = asset?.parts.find((part) => part.id === selectedPart) ?? null;

  useEffect(() => {
    function applyFunctionHash() {
      const parsed = parseAnatomyFunctionHash(window.location.hash);
      if (!parsed) return;
      setSelectedTopic(parsed.systemId);
      setSelectedPart(null);
      setShowScene(false);
      setInitialFunctionStepId(parsed.stepId);
      setFunctionScrollRequest((request) => request + 1);
    }

    applyFunctionHash();
    window.addEventListener("hashchange", applyFunctionHash);
    return () => window.removeEventListener("hashchange", applyFunctionHash);
  }, []);

  useEffect(() => {
    if (!initialFunctionStepId && functionScrollRequest === 0) return;
    if (selectedTopic !== "heart" && selectedTopic !== "respiratory" && selectedTopic !== "urinary" && selectedTopic !== "brain") return;
    const targetId = initialFunctionStepId
      ? `function-${selectedTopic}-${initialFunctionStepId}`
      : `function-${selectedTopic}`;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [selectedTopic, initialFunctionStepId, functionScrollRequest]);

  function selectTopic(id: AnatomyTopicId) {
    setSelectedTopic(id);
    setSelectedPart(null);
    setShowScene(false);
    setInitialFunctionStepId(undefined);
    setFunctionScrollRequest(0);
  }

  function seeHeartInAction() {
    selectTopic("heart");
    setFunctionScrollRequest((request) => request + 1);
  }

  function openZoom() {
    if (!zoomDialog.current) return;
    zoomDialog.current.showModal();
    setZoomOpen(true);
  }

  function closeZoom() {
    if (zoomDialog.current?.open) zoomDialog.current.close();
    setZoomOpen(false);
    requestAnimationFrame(() => zoomTrigger.current?.focus());
  }

  return (
    <div className={styles.atlas}>
      <section className={styles.hero} aria-labelledby={`${instanceId}-heading`}>
        <p className={styles.kicker}>FIELD GUIDE · HUMAN ANATOMY</p>
        <h2 id={`${instanceId}-heading`}>A closer look at the body</h2>
        <p className={styles.intro}>Choose a reference to study its image, orientation, and source. Four topics also include a source-cited function lesson with an original teaching schematic.</p>
        <button className={styles.functionCta} type="button" onClick={seeHeartInAction}>See anatomy in action</button>
      </section>

      <nav className={styles.topicNav} aria-label="Anatomy topics">
        {topics.map((item, index) => {
          const preview = availableAssets.get(item.id);
          const previewImage = getLocalImageUrl(preview?.image);
          const selected = item.id === selectedTopic;
          return (
            <button
              className={`${styles.topicButton} ${selected ? styles.topicButtonSelected : ""}`}
              type="button"
              key={item.id}
              aria-pressed={selected}
              aria-controls={`${instanceId}-study`}
              onClick={() => selectTopic(item.id)}
            >
              <span className={styles.topicNumber}>{String(index + 1).padStart(2, "0")}</span>
              {previewImage && preview ? (
                <Image className={styles.topicPreview} src={previewImage} alt={preview.alt} width={96} height={72} loading="lazy" unoptimized />
              ) : (
                <span className={styles.topicPreviewPlaceholder} aria-hidden="true">Study card</span>
              )}
              <span className={styles.topicText}>
                <span className={styles.topicLabel}>{item.label}</span>
                <span className={styles.topicSummary}>{previewImage ? item.summary : "Reference in preparation"}</span>
              </span>
              <span className={styles.topicArrow} aria-hidden="true">↗</span>
            </button>
          );
        })}
      </nav>

      <section className={styles.study} id={`${instanceId}-study`} aria-labelledby={`${instanceId}-study-title`}>
        <div className={styles.studyHeader}>
          <div>
            <p className={styles.kicker}>{topic.label.toUpperCase()}</p>
            <h3 id={`${instanceId}-study-title`}>{asset ? asset.title : `${topic.label} reference`}</h3>
          </div>
          <span className={styles.studyIndex}>{String(topics.findIndex((item) => item.id === selectedTopic) + 1).padStart(2, "0")} / 08</span>
        </div>

        {(selectedTopic === "heart" || selectedTopic === "respiratory" || selectedTopic === "urinary" || selectedTopic === "brain") && (
          <section className={styles.functionLesson} aria-label="Functional anatomy lesson">
            <p className={styles.functionIntro}>Explore four stages, then test what you notice.</p>
            <AnatomyFunctionExplorer
              key={`${selectedTopic}-${initialFunctionStepId ?? "default"}`}
              systemId={selectedTopic as AnatomyFunctionId}
              initialStepId={initialFunctionStepId}
            />
          </section>
        )}

        {asset && imageUrl ? (
          <>
            {asset.notes && <p className={styles.notes}>{plainText(asset.notes)}</p>}
            <figure className={styles.referenceFigure}>
              <div className={styles.imageStage} style={{ aspectRatio: `${asset.width} / ${asset.height}` }}>
                <Image
                  className={styles.referenceImage}
                  src={imageUrl}
                  alt={asset.alt}
                  width={asset.width}
                  height={asset.height}
                  decoding="async"
                  unoptimized
                />
                {asset.parts.map((part) => {
                  const selected = part.id === selectedPart;
                  const position = plainText(part.description, 160);
                  return (
                    <button
                      key={part.id}
                      className={`${styles.imageMarker} ${selected ? styles.imageMarkerSelected : ""}`}
                      type="button"
                          aria-label={`${plainText(part.id, 8)}: ${position}`}
                      aria-pressed={selected}
                      onClick={() => setSelectedPart(selected ? null : part.id)}
                      style={{ left: `${part.x}%`, top: `${part.y}%`, width: `${part.width}%`, height: `${part.height}%` }}
                    >
                      <span>{plainText(part.id, 8)}</span>
                    </button>
                  );
                })}
              </div>
              <figcaption className={styles.caption}>
                <span><strong>View:</strong> {plainText(asset.view, 180)}</span>
                <span><strong>Credit:</strong> {plainText(asset.credit, 300)}</span>
                <span><strong>Source:</strong> {safeSourceUrl(asset.sourceUrl) ? <a href={safeSourceUrl(asset.sourceUrl) ?? undefined} target="_blank" rel="noreferrer">{plainText(asset.sourceUrl, 180)}</a> : plainText(asset.sourceUrl, 180)}</span>
                <span><strong>Source license:</strong> {safeSourceUrl(asset.license) ? <a href={safeSourceUrl(asset.license) ?? undefined} target="_blank" rel="noreferrer">CC BY 4.0</a> : plainText(asset.license, 180)}</span>
              </figcaption>
            </figure>

            <div className={styles.imageActions}>
              <button ref={zoomTrigger} className={styles.utilityButton} type="button" onClick={openZoom}>
                View image larger
              </button>
              {asset.parts.length > 0 && <p className={styles.markerHint}>Select a letter marker to study its structure and role. This reference is not scored.</p>}
            </div>

            {asset.parts.length > 0 && (
              <div className={styles.partPanel}>
                <h4>Structure notes</h4>
                <ul className={styles.partList}>
                  {asset.parts.map((part) => {
                    const selected = part.id === selectedPart;
                    const position = plainText(part.description, 160);
                    return (
                      <li key={part.id}>
                        <button
                          type="button"
                          className={`${styles.partButton} ${selected ? styles.partButtonSelected : ""}`}
                          aria-pressed={selected}
                          onClick={() => setSelectedPart(selected ? null : part.id)}
                        >
                          <span className={styles.partLetter}>{plainText(part.id, 8)}</span>
                          <span>{position}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <p className={styles.liveCue} aria-live="polite" aria-atomic="true">
                  {activePart ? `Selected ${plainText(activePart.id, 8)}: ${plainText(activePart.description, 160)}` : "Select a structure to explore."}
                </p>
              </div>
            )}

            <section className={styles.modelSection} id={`source-model-${selectedTopic}`} aria-labelledby={`${instanceId}-model-heading`}>
              <div className={styles.modelHeading}>
                <div>
                  <p className={styles.kicker}>HRA SOURCE MODEL · OPTIONAL · INTERACTIVE</p>
                  <h4 id={`${instanceId}-model-heading`}>Explore the source 3D model</h4>
                </div>
                {sceneUrls.length > 0 && !showScene && (
                  <button className={styles.loadButton} type="button" onClick={() => setShowScene(true)}>
                    Load 3D
                  </button>
                )}
              </div>
              {sceneUrls.length === 0 ? (
                <p className={styles.coverageNote}>
                  A reviewed local 3D model is not available for this topic yet. The illustrated reference and its source remain available above.
                </p>
              ) : showScene ? (
                <AnatomySceneOnDemand key={`${selectedTopic}-${sceneUrls.join("|")}`} assetId={selectedTopic} modelUrls={sceneUrls} />
              ) : (
                <p className={styles.modelHint}>The 3D model loads only when you choose Load 3D. Rotate by dragging inside the view; on touch screens, rotate with one finger inside the view and scroll outside it.</p>
              )}
            </section>
          </>
        ) : (
          <div className={styles.coverageCard}>
            <p className={styles.coverageBadge}>Coverage in progress</p>
            <p>No reviewed reference image or local 3D model is available for this topic yet. This topic is intentionally marked as supplementary coverage instead of showing an unrelated image.</p>
          </div>
        )}
      </section>

      <AnatomyReferenceFigures key={selectedTopic} topicId={selectedTopic} />

      {safeLinks.length > 0 && (
        <section className={styles.quizSection} aria-labelledby={`${instanceId}-quiz-heading`}>
          <p className={styles.kicker}>PUT YOUR KNOWLEDGE TO WORK</p>
          <h2 id={`${instanceId}-quiz-heading`}>Related anatomy quizzes</h2>
          <ul className={styles.quizLinks}>
            {safeLinks.map((link) => (
              <li key={`${link.assetId}-${link.href}`}><a href={link.href}>{plainText(link.title, 120)}<span aria-hidden="true"> ↗</span></a></li>
            ))}
          </ul>
        </section>
      )}

      <p className={styles.educationNote}>Reference models simplify anatomy and represent selected adult bodies. For general learning.</p>

      <section className={styles.shareSection} aria-labelledby={`${instanceId}-share-heading`}>
        <h2 className={styles.shareHeading} id={`${instanceId}-share-heading`}>Pass this field guide along</h2>
        <QuizSharePanel
          title="Anatomy Atlas"
          url={shareUrl}
          heading="Share the Anatomy Atlas"
          subheading="Invite someone to explore the reference guide."
          defaultMessage="Explore the Anatomy Atlas with me:"
          privacyNote="This invitation shares the Anatomy Atlas link only. It contains no quiz answers, scores, or personal results."
          cards
        />
      </section>

      {asset && imageUrl && (
        <dialog
          ref={zoomDialog}
          className={styles.zoomDialog}
          aria-label={`Larger ${asset.title} reference image`}
          onClose={() => {
            setZoomOpen(false);
            requestAnimationFrame(() => zoomTrigger.current?.focus());
          }}
          onClick={(event) => {
            if (event.target === zoomDialog.current) closeZoom();
          }}
        >
          <div className={styles.zoomHeader}>
            <p>{plainText(asset.title, 180)} · View: {plainText(asset.view, 180)}</p>
            <button className={styles.closeZoom} type="button" aria-label="Close enlarged image" onClick={closeZoom}>Close</button>
          </div>
          <Image src={imageUrl} alt={asset.alt} width={asset.width} height={asset.height} unoptimized />
          <p className={styles.zoomCredit}>Credit: {plainText(asset.credit, 180)} · Source: {plainText(asset.sourceUrl, 180)} · License: {plainText(asset.license, 180)}</p>
        </dialog>
      )}
      <span className={styles.visuallyHidden} aria-live="polite">{zoomOpen ? "Enlarged image open." : ""}</span>
    </div>
  );
}
