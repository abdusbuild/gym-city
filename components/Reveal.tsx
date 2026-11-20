"use client";

import { useEffect } from "react";

/**
 * Adds the scroll animations to the server-rendered page:
 * - `.fu`, `.pop`, `.bar` get `.in` when they enter the viewport
 * - `[data-count]` numbers count up from 0
 */
export default function Reveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fu, .pop, .bar").forEach((el) => io.observe(el));

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const countIO = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          countIO.unobserve(el);
          const end = parseFloat(el.dataset.count || "0");
          const dec = parseInt(el.dataset.dec || "0", 10);
          if (reduce) {
            el.textContent = end.toFixed(dec);
            return;
          }
          const t0 = performance.now();
          const step = (t: number) => {
            const p = Math.min((t - t0) / 1600, 1);
            el.textContent = (end * (1 - Math.pow(1 - p, 3))).toFixed(dec);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }),
      { threshold: 0.6 }
    );
    document.querySelectorAll("[data-count]").forEach((el) => countIO.observe(el));

    return () => {
      io.disconnect();
      countIO.disconnect();
    };
  }, []);

  return null;
}
