"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { DEMANDES, getDateForDemandeIndex } from "../lib/demandes";

const VISIBLE = 3;
const AUTO_PLAY_MS = 3000;

function MapIcon() {
  return (
    <span className="lt-demande-ville-icon" aria-hidden>
      <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r={3} />
      </svg>
    </span>
  );
}

export default function SliderDemandes() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const totalPages = Math.max(1, DEMANDES.length - VISIBLE + 1);

  const goTo = (index: number) => {
    setCurrent(Math.max(0, Math.min(index, totalPages - 1)));
  };

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % totalPages);
    }, AUTO_PLAY_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalPages]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector(`[data-demandes-slide]:nth-child(${current + 1})`);
    if (slide instanceof HTMLElement) {
      const trackRect = track.getBoundingClientRect();
      const slideRect = slide.getBoundingClientRect();
      const targetScroll = track.scrollLeft + (slideRect.left - trackRect.left);
      track.scrollTo({ left: targetScroll, behavior: "smooth" });
    }
  }, [current]);

  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (intervalRef.current == null) {
      intervalRef.current = setInterval(() => {
        setCurrent((c) => (c + 1) % totalPages);
      }, AUTO_PLAY_MS);
    }
  };

  return (
    <div
      className="lt-demandes-slider"
      aria-label="Demandes de devis récentes"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="lt-demandes-track" ref={trackRef}>
        {DEMANDES.map((d, index) => {
          const dateStr = getDateForDemandeIndex(index, DEMANDES.length);
          return (
            <article
              key={`${d.ville}-${index}`}
              className="lt-demande lt-demande-card"
              data-demandes-slide
            >
              <span className="lt-demande-ribbon" aria-hidden>
                {dateStr}
              </span>
              <div className="lt-demande-inner">
                <h3 className="lt-demande-titre">{d.titre}</h3>
                <p className="lt-demande-ville">
                  <MapIcon /> {d.ville} ({d.codePostal})
                </p>
                <div className="lt-demande-description-blur" aria-hidden>
                  {d.description}
                </div>
                <p className="lt-demande-cta">
                  <Link href="#inscription" className="lt-btn lt-btn-primary lt-btn-small">
                    Récupérer les infos
                  </Link>
                </p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="lt-demandes-nav">
        <button
          type="button"
          className="lt-slider-btn lt-slider-prev"
          onClick={() => goTo(current - 1)}
          aria-label="Demande précédente"
        >
          <span aria-hidden>‹</span>
        </button>
        <div className="lt-slider-dots" role="tablist" aria-label="Choisir une demande">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              className={`lt-slider-dot ${i === current ? "is-active" : ""}`}
              aria-label={`Demande ${i + 1}`}
              role="tab"
              aria-selected={i === current}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="lt-slider-btn lt-slider-next"
          onClick={() => goTo(current + 1)}
          aria-label="Demande suivante"
        >
          <span aria-hidden>›</span>
        </button>
      </div>
    </div>
  );
}
