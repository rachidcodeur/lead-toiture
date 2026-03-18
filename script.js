// Initialisation légère pour les animations et l'année de footer

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("lt-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  // Scroll ciblé pour les boutons avec data-scroll-to
  document.querySelectorAll("[data-scroll-to]").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const targetSelector = btn.getAttribute("data-scroll-to");
      if (!targetSelector) return;
      const target = document.querySelector(targetSelector);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Entrée hero au chargement (modérée : contenu puis image)
  const hero = document.querySelector(".lt-hero");
  if (hero) {
    requestAnimationFrame(() => {
      setTimeout(() => hero.classList.add("lt-hero-ready"), 80);
    });
  }

  // Apparition au scroll (fluide) — le hero est géré par lt-hero-ready
  const animatedElements = document.querySelectorAll(".lt-animate");

  if ("IntersectionObserver" in window && animatedElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target.closest(".lt-hero")) return;
          entry.target.classList.add("lt-visible");
          obs.unobserve(entry.target);
        });
      },
      { root: null, threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    animatedElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback : tout visible sans animation si l’API n’est pas dispo
    animatedElements.forEach((el) => {
      if (!el.closest(".lt-hero")) el.classList.add("lt-visible");
    });
  }

  function escapeHtml(text) {
    const d = document.createElement("div");
    d.textContent = text;
    return d.innerHTML;
  }
  const mapIconSvg = "<span class=\"lt-demande-ville-icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/></svg></span>";
  const demandes = [
    { titre: "Réfection complète et isolation", ville: "Bordeaux", codePostal: "33000", description: "Maison avec 2 pans - toiture en tuiles - réfection totale prévue avec pose d'écran sous-toiture et isolation. Surface environ 120 m². Souhait de devis pour travaux à réaliser dans les 3 mois.", date: "8 mars 2026" },
    { titre: "Pose de gouttières et zinguerie", ville: "Le Mans", codePostal: "72000", description: "Pavillon de plain-pied - gouttières PVC à remplacer par de l'aluminium, descentes EP incluses. Éléments de zinguerie à reprendre sur la souche de cheminée. Devis demandé.", date: "8 mars 2026" },
    { titre: "Démoussage et étanchéité", ville: "Lille", codePostal: "59000", description: "Toiture en ardoises - apparition de mousse et traces d'humidité en tête de mur. Souhait d'un démoussage professionnel et vérification de l'étanchéité des raccords. Surface toiture 95 m².", date: "8 mars 2026" },
    { titre: "Réparation fuite et tuiles", ville: "Marseille", codePostal: "13000", description: "Maison avec 1 étage - toiture tuiles canal - fuite repérée côté nord après les dernières intempéries. Tuiles à remplacer sur une zone d'environ 15 m². Demande de passage pour diagnostic et devis.", date: "8 mars 2026" },
    { titre: "Ardoises et réparation tempête", ville: "Lorient", codePostal: "56100", description: "Toiture en ardoises - dégâts suite aux vents forts, quelques ardoises déplacées et une zone à reprendre en faîtage. Maison 2 pans, surface environ 80 m². Recherche artisan pour devis et intervention.", date: "8 mars 2026" },
    { titre: "Faitière et réfection complète", ville: "La Réole", codePostal: "33190", description: "Sur une maison de plain de pied - toiture en tuiles - toiture trés abîmée, tuiles cassées principalment sur la faitière - Infiltration d'eau - Remaniment de la toiture et Réfection totale si possible de la toiture", date: "8 mars 2026" },
    { titre: "Tuiles abîmées et infiltration", ville: "Saint Michel de Maurienne", codePostal: "73140", description: "Sur une maison avec 1 étage - Toiture en tuiles - Tuiles cassées, abîmées et déplacées - Bâche temporaire déjà mise en place - Infiltration d'eau (photos)", date: "8 mars 2026" },
    { titre: "Réfection tuiles et fibro (205 m²)", ville: "Goulles", codePostal: "19430", description: "Sur une maison de plain-pied d'un côté et avec 1 étage de l'autre - 5 pans - toiture actuellement en tuiles et fibro-ciment amianté - réfection totale de la toiture, partie tuiles : surface de 80 m² et réfection totale de la partie fibro : 125 m² (possibilité que le client enlève l'amiante si nécessaire)", date: "8 mars 2026" },
    { titre: "Chéneaux et vérification toit", ville: "Craponne sur Arzon", codePostal: "43500", description: "Sur une maison avec 2 étages (accès par vélux possible) - Toiture en tuiles - 2 pans - Chéneaux à refaire + Vérification du toit", date: "8 mars 2026" },
    { titre: "Réfection tuiles et fibro amianté", ville: "Saint-Cyprien", codePostal: "19290", description: "Sur une maison de plain-pied d'un côté et avec 1 étage de l'autre - 5 pans - toiture actuellement en tuiles et fibro-ciment amianté - réfection totale de la toiture, partie tuiles : surface de 80 m² et réfection totale de la partie fibro : 125 m² (possibilité que le client enlève l'amiante si nécessaire)", date: "8 mars 2026" },
    { titre: "Démoussage et nettoyage façades", ville: "Étréchy", codePostal: "91580", description: "Sur une maison avec 1 étage - 2 pans - Toiture en tuiles - Surface de la maison 100m2 - démoussage du toit et nettoyage des façades", date: "8 mars 2026" },
    { titre: "Remplacement gouttières zinc", ville: "Meschers sur Gironde", codePostal: "17132", description: "Sur une maison avec 1 étage - Toiture en tuiles - Surface de la maison 160m2 - Changer toutes les gouttières qui sont actuellement en zinc abîmées et rouillées", date: "8 mars 2026" }
  ];
  function formatDateFr(date) {
    return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  }
  function getDateForDemandeIndex(index, total) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (index < 5) return formatDateFr(today);
    if (index < 8) {
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      return formatDateFr(yesterday);
    }
    const lastTwo = total - 2;
    if (index === lastTwo) {
      const avantVeille = new Date(today);
      avantVeille.setDate(avantVeille.getDate() - 2);
      return formatDateFr(avantVeille);
    }
    if (index === total - 1) {
      const fiveDaysAgo = new Date(today);
      fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);
      return formatDateFr(fiveDaysAgo);
    }
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    return formatDateFr(yesterday);
  }

  const demandesSlider = document.querySelector("[data-demandes-slider]");
  if (demandesSlider && demandes.length > 0) {
    const demandesTrack = demandesSlider.querySelector("[data-demandes-track]");
    const demandesDots = demandesSlider.querySelector("[data-demandes-dots]");
    const demandesPrev = demandesSlider.querySelector("[data-demandes-prev]");
    const demandesNext = demandesSlider.querySelector("[data-demandes-next]");
    const visibleDemandes = 3;
    const totalPagesDemandes = Math.max(1, demandes.length - visibleDemandes + 1);
    demandes.forEach((d, index) => {
      const dateStr = getDateForDemandeIndex(index, demandes.length);
      const article = document.createElement("article");
      article.className = "lt-demande lt-demande-card";
      article.setAttribute("data-demandes-slide", "");
      article.innerHTML =
        "<span class=\"lt-demande-ribbon\" aria-hidden=\"true\">" + escapeHtml(dateStr) + "</span>" +
        "<div class=\"lt-demande-inner\">" +
        "<h3 class=\"lt-demande-titre\">" + escapeHtml(d.titre) + "</h3>" +
        "<p class=\"lt-demande-ville\">" + mapIconSvg + " " + escapeHtml(d.ville) + " (" + escapeHtml(d.codePostal || "") + ")</p>" +
        "<div class=\"lt-demande-description-blur\" aria-hidden=\"true\">" + escapeHtml(d.description) + "</div>" +
        "<p class=\"lt-demande-cta\"><a href=\"#inscription\" class=\"lt-btn lt-btn-primary lt-btn-small\">Récupérer les infos</a></p>" +
        "</div>";
      demandesTrack.appendChild(article);
    });
    const demandesSlides = demandesTrack.querySelectorAll("[data-demandes-slide]");
    let currentDemandes = 0;
    function createDemandesDots() {
      demandesDots.innerHTML = "";
      for (let i = 0; i < totalPagesDemandes; i++) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "lt-slider-dot" + (i === 0 ? " is-active" : "");
        btn.setAttribute("aria-label", "Demande " + (i + 1));
        btn.setAttribute("role", "tab");
        btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
        btn.dataset.index = String(i);
        demandesDots.appendChild(btn);
      }
    }
    function getDemandesScrollLeft(index) {
      const slide = demandesSlides[index];
      if (!slide) return 0;
      const trackRect = demandesTrack.getBoundingClientRect();
      const slideRect = slide.getBoundingClientRect();
      return demandesTrack.scrollLeft + (slideRect.left - trackRect.left);
    }
    function goToDemandes(index) {
      currentDemandes = Math.max(0, Math.min(index, totalPagesDemandes - 1));
      const targetScroll = getDemandesScrollLeft(currentDemandes);
      demandesTrack.scrollTo({ left: targetScroll, behavior: "smooth" });
      demandesDots.querySelectorAll(".lt-slider-dot").forEach((dot, i) => {
        dot.classList.toggle("is-active", i === currentDemandes);
        dot.setAttribute("aria-selected", i === currentDemandes ? "true" : "false");
      });
    }
    createDemandesDots();
    demandesDots.querySelectorAll(".lt-slider-dot").forEach((dot) => {
      dot.addEventListener("click", () => goToDemandes(Number(dot.dataset.index)));
    });
    if (demandesPrev) demandesPrev.addEventListener("click", () => goToDemandes(currentDemandes - 1));
    if (demandesNext) demandesNext.addEventListener("click", () => goToDemandes(currentDemandes + 1));

    let demandesIntervalId = null;
    function startDemandesAutoPlay() {
      if (demandesIntervalId) return;
      demandesIntervalId = setInterval(() => {
        goToDemandes((currentDemandes + 1) % totalPagesDemandes);
      }, 3000);
    }
    function stopDemandesAutoPlay() {
      if (demandesIntervalId) {
        clearInterval(demandesIntervalId);
        demandesIntervalId = null;
      }
    }
    demandesSlider.addEventListener("mouseenter", stopDemandesAutoPlay);
    demandesSlider.addEventListener("mouseleave", startDemandesAutoPlay);
    startDemandesAutoPlay();
  }

  // Slider avis (3 visibles, défile d'un à la fois)
  const slider = document.querySelector("[data-slider]");
  if (!slider) return;
  const track = slider.querySelector("[data-track]");
  const slides = slider.querySelectorAll("[data-slide]");
  const dotsContainer = slider.querySelector("[data-dots]");
  const prevBtn = slider.querySelector("[data-prev]");
  const nextBtn = slider.querySelector("[data-next]");
  const total = slides.length;
  const visible = 3;
  const totalPages = Math.max(1, total - visible + 1);
  if (total === 0 || !track || !dotsContainer) return;

  let current = 0;

  function createDots() {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalPages; i++) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lt-slider-dot" + (i === 0 ? " is-active" : "");
      btn.setAttribute("aria-label", "Page " + (i + 1));
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
      btn.dataset.index = String(i);
      dotsContainer.appendChild(btn);
    }
  }

  function getScrollLeftForIndex(index) {
    const slide = slides[index];
    if (!slide) return 0;
    const trackRect = track.getBoundingClientRect();
    const slideRect = slide.getBoundingClientRect();
    return track.scrollLeft + (slideRect.left - trackRect.left);
  }

  function goTo(index) {
    current = Math.max(0, Math.min(index, totalPages - 1));
    const targetScroll = getScrollLeftForIndex(current);
    track.scrollTo({ left: targetScroll, behavior: "smooth" });
    dotsContainer.querySelectorAll(".lt-slider-dot").forEach((dot, i) => {
      dot.classList.toggle("is-active", i === current);
      dot.setAttribute("aria-selected", i === current ? "true" : "false");
    });
  }

  createDots();
  dotsContainer.querySelectorAll(".lt-slider-dot").forEach((dot) => {
    dot.addEventListener("click", () => goTo(Number(dot.dataset.index)));
  });
  if (prevBtn) prevBtn.addEventListener("click", () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => goTo(current + 1));
});

