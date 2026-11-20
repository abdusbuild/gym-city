"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export default function HeroSlides({ slides }: { slides: { src: StaticImageData; alt: string }[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className="hero__bg">
      {slides.map((s, n) => (
        <Image
          key={n}
          src={s.src}
          alt={s.alt}
          fill
          priority={n === 0}
          sizes="100vw"
          quality={85}
          placeholder="blur"
          className={`hero__slide${n === i ? " is-active" : ""}`}
        />
      ))}
    </div>
  );
}
