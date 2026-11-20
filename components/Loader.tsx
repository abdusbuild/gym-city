"use client";

import { useEffect } from "react";

/**
 * Brief branded loader shown on the first visit of a session.
 * Hides once the page (and hero photo) has loaded, or after 1.5 s at most.
 * CSS also hides it after 3 s even if JavaScript never runs.
 */
export default function Loader() {
  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains("seen")) return;
    const done = () => {
      root.classList.add("loaded");
      try { sessionStorage.setItem("gc-seen", "1"); } catch {}
    };
    const minShow = new Promise((r) => setTimeout(r, 450));
    const loaded = new Promise((r) => (document.readyState === "complete" ? r(null) : window.addEventListener("load", () => r(null), { once: true })));
    const cap = setTimeout(done, 1500);
    Promise.all([minShow, loaded]).then(() => { clearTimeout(cap); done(); });
    return () => clearTimeout(cap);
  }, []);

  return (
    <div className="loader" aria-hidden="true">
      <div className="loader__inner">
        <span className="brand__mark">G</span>
        <span className="loader__word">GYM <b>CITY</b></span>
        <span className="loader__bar" />
      </div>
    </div>
  );
}
