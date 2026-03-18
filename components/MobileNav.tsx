"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const LINKS = [
  { href: "#avantages", label: "Avantages" },
  { href: "#profil", label: "Témoignages" },
  { href: "#demandes", label: "Demandes de devis" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const onEscape = (e: KeyboardEvent) => e.key === "Escape" && close();
      document.addEventListener("keydown", onEscape);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", onEscape);
      };
    }
  }, [open]);

  return (
    <>
      <div className="lt-hamburger-wrap">
        <button
          type="button"
          className="lt-hamburger"
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        >
          <span className="lt-hamburger-bar" />
          <span className="lt-hamburger-bar" />
          <span className="lt-hamburger-bar" />
        </button>
      </div>

      <div
        className={`lt-mobile-panel-overlay ${open ? "is-open" : ""}`}
        onClick={close}
        aria-hidden={!open}
      />

      <aside
        className={`lt-mobile-panel ${open ? "is-open" : ""}`}
        aria-label="Menu de navigation"
        aria-hidden={!open}
      >
        <button
          type="button"
          className="lt-mobile-panel-close"
          onClick={close}
          aria-label="Fermer le menu"
        >
          <span aria-hidden>×</span>
        </button>
        <nav className="lt-mobile-panel-nav">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="lt-mobile-panel-link"
              onClick={close}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://www.home-service.io/"
            className="lt-btn lt-btn-primary lt-mobile-panel-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Inscription
          </a>
        </nav>
      </aside>
    </>
  );
}
