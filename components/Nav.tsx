"use client";

import { useEffect, useState } from "react";
import { HAS_WA, NAV, contactLabel, waProps } from "@/lib/site";
import { Chat, Phone } from "./Icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Nav background + floating button
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowFab(window.scrollY > window.innerHeight * 0.6);
      if (window.scrollY < window.innerHeight * 0.5) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section in view
  useEffect(() => {
    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive("#" + e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) spy.observe(el);
    });
    return () => spy.disconnect();
  }, []);

  // Lock scroll while the mobile menu is open; close on Escape
  useEffect(() => {
    document.body.classList.toggle("locked", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav__inner">
          <a href="#top" className="brand" aria-label="Gym City home">
            <span className="brand__mark">G</span>
            <span className="brand__text">GYM <b>CITY</b></span>
          </a>
          <nav className="nav__links" aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className={active === n.href ? "active" : undefined}>{n.label}</a>
            ))}
          </nav>
          <a className="btn btn--gold btn--sm nav__cta" {...waProps("Hi Gym City! I'd like to join. Please share membership details.")}>Join Now</a>
          <button
            className={`burger${open ? " open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
        <nav>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>{n.label}</a>
          ))}
        </nav>
        <a className="btn btn--gold" {...waProps("Hi Gym City! I'd like to join.")} tabIndex={open ? 0 : -1}>{contactLabel}</a>
      </div>

      <a className={`fab${showFab ? " show" : ""}`} aria-label={contactLabel} {...waProps("Hi Gym City! I'd like to enquire about membership.")}>
        {HAS_WA ? <Chat /> : <Phone />}<span>{HAS_WA ? "Enquire" : "Call"}</span>
      </a>
    </>
  );
}
