"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";

export type GalleryItem = { src: StaticImageData; label: string; alt: string; size?: "wide" | "tall" };

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    document.body.classList.toggle("locked", open !== null);
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  const current = open !== null ? items[open] : null;

  return (
    <>
      <div className="gallery">
        {items.map((it, i) => (
          <button
            key={it.label}
            className={`g pop${it.size ? ` g--${it.size}` : ""}`}
            onClick={() => setOpen(i)}
            aria-label={`Open photo: ${it.label}`}
          >
            <Image src={it.src} alt={it.alt} fill placeholder="blur" sizes="(max-width: 820px) 50vw, 25vw" />
            <span>{it.label}</span>
          </button>
        ))}
      </div>

      <div
        className={`lightbox${current ? " open" : ""}`}
        aria-hidden={!current}
        role="dialog"
        aria-modal="true"
        aria-label="Photo viewer"
        onClick={(e) => e.target === e.currentTarget && setOpen(null)}
      >
        <button className="lightbox__close" aria-label="Close" onClick={() => setOpen(null)}>×</button>
        <button className="lightbox__nav lightbox__prev" aria-label="Previous photo" onClick={() => go(-1)}>‹</button>
        {current && (
          <Image
            key={current.label}
            src={current.src}
            alt={current.alt}
            sizes="92vw"
            quality={85}
            className="lightbox__img"
          />
        )}
        <button className="lightbox__nav lightbox__next" aria-label="Next photo" onClick={() => go(1)}>›</button>
      </div>
    </>
  );
}
