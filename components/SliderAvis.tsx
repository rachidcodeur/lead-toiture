"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const AVIS = [
  { text: "Grâce à Lead Toiture, je reçois des demandes de devis sérieuses dans ma zone. Plus besoin de prospecter des heures : les clients ont déjà un projet concret. Un vrai gain de temps pour mon entreprise.", name: "Thomas M.", role: "Couvreur, Lyon" },
  { text: "Ce qui me plaît, c'est qu'on est seul sur chaque lead. Pas de mise en concurrence avec d'autres artisans. Je peux échanger directement avec le client et proposer mon devis en toute sérénité. Très satisfait.", name: "Stéphane L.", role: "Couvreur, Bordeaux" },
  { text: "Inscrit depuis deux ans, je reçois régulièrement des chantiers de rénovation et de zinguerie dans mes communes. L'équipe est réactive et les demandes correspondent vraiment à mon activité.", name: "Marc D.", role: "Couvreur, Nantes" },
  { text: "En tant qu'indépendant, trouver des chantiers près de chez soi n'est pas évident. Lead Toiture m'envoie des projets ciblés sur mon secteur. J'ai décroché plusieurs belles rénovations grâce à eux.", name: "Julien R.", role: "Couvreur, Toulouse" },
  { text: "Une plateforme simple et efficace. Les demandes arrivent avec les coordonnées du client, je peux les contacter tout de suite. Le réseau est bien organisé et ça se voit dans la qualité des leads.", name: "Nicolas B.", role: "Couvreur, Lille", stacked: true },
  { text: "Après des années à chercher des chantiers via le bouche-à-oreille, Lead Toiture m'a ouvert un flux de demandes qualifiées. Les particuliers sont renseignés, les échanges fluides. Les chantiers s'enchaînent bien.", name: "Philippe G.", role: "Couvreur, Strasbourg" },
  { text: "Je recommande Lead Toiture aux artisans qui veulent remplir leur planning sans perdre du temps en prospection. Les leads sont géolocalisés, les projets clairs. La mise en relation est rapide. Très satisfait.", name: "Cédric F.", role: "Couvreur, Rennes" },
];

const VISIBLE = 3;

export default function SliderAvis() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const totalPages = Math.max(1, AVIS.length - VISIBLE + 1);

  const goTo = (index: number) => {
    const next = Math.max(0, Math.min(index, totalPages - 1));
    setCurrent(next);
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector(`[data-slide]:nth-child(${next + 1})`);
    if (slide instanceof HTMLElement) {
      const trackRect = track.getBoundingClientRect();
      const slideRect = slide.getBoundingClientRect();
      const targetScroll = track.scrollLeft + (slideRect.left - trackRect.left);
      track.scrollTo({ left: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <div className="lt-testimonials-slider" data-slider>
      <div className="lt-testimonials-track" ref={trackRef} data-track>
        {AVIS.map((a, i) => (
          <article key={i} className="lt-testimonial" data-slide>
            <div className="lt-testimonial-card">
              <span className="lt-testimonial-quote" aria-hidden>"</span>
              <p className="lt-testimonial-text">{a.text}</p>
              <div className="lt-testimonial-author-row">
                <Image
                  src="/images/artisan couvreur.webp"
                  alt=""
                  className="lt-testimonial-photo"
                  width={56}
                  height={56}
                  loading="lazy"
                />
                <div className={`lt-testimonial-author ${a.stacked ? "lt-testimonial-author--stacked" : ""}`}>
                  <span className="lt-testimonial-name">{a.name}</span>
                  <span className="lt-testimonial-role">{a.role}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="lt-testimonials-nav">
        <button type="button" className="lt-slider-btn lt-slider-prev" onClick={() => goTo(current - 1)} aria-label="Avis précédent">
          <span aria-hidden>‹</span>
        </button>
        <div className="lt-slider-dots" role="tablist" aria-label="Choisir un avis">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              className={`lt-slider-dot ${i === current ? "is-active" : ""}`}
              aria-label={`Page ${i + 1}`}
              role="tab"
              aria-selected={i === current}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button type="button" className="lt-slider-btn lt-slider-next" onClick={() => goTo(current + 1)} aria-label="Avis suivant">
          <span aria-hidden>›</span>
        </button>
      </div>
    </div>
  );
}
