import Image from "next/image";
import Link from "next/link";
import ClientInit from "../components/ClientInit";
import SliderDemandes from "../components/SliderDemandes";
import SliderAvis from "../components/SliderAvis";

const HOWTO_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment recevoir des demandes de devis toiture avec Lead Toiture",
  description: "Processus en 3 étapes pour rejoindre le réseau Lead Toiture et recevoir des leads toiture qualifiés.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Inscription gratuite",
      text: "Remplissez le formulaire pour soumettre votre demande d'inscription au réseau Lead Toiture. Simple, rapide et 100 % gratuite.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Validation de votre profil",
      text: "Notre équipe vous contacte pour vérifier vos informations et confirmer votre zone d'intervention.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Recevez des leads",
      text: "Une fois validé, vous recevez des demandes de devis de particuliers dans votre secteur, correspondant à vos prestations.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_JSON_LD) }}
      />
      <ClientInit />
      <main id="top" className="lt-page-home">
        {/* Hero */}
        <section className="lt-section lt-hero" aria-labelledby="hero-title">
          <div className="lt-container lt-hero-grid">
            <div className="lt-hero-content lt-animate">
              <div className="lt-badge">Plateforme de leads pour artisans couvreurs</div>
              <h1 id="hero-title">
                Recevez des demandes de devis <span className="lt-keyword">&laquo;&nbsp;toiture&nbsp;&raquo;</span> qualifiées
              </h1>
              <p className="lt-hero-subtitle">
                Lead Toiture vous met en relation avec des particuliers ayant un projet concret de toiture dans vos communes d&apos;intervention. Vous vous concentrez sur vos chantiers, nous nous occupons de la prospection.
              </p>
              <div className="lt-hero-actions">
                <Link href="#inscription" className="lt-btn lt-btn-primary">
                  Inscription gratuite
                </Link>
                <button type="button" className="lt-btn lt-btn-secondary" data-scroll-to="#fonctionnement">
                  Découvrir le fonctionnement
                </button>
              </div>
              <div className="lt-hero-meta">
                <div className="lt-meta-item">
                  <Image src="/images/i-artisan.png" alt="" className="lt-meta-icon" width={40} height={40} loading="lazy" />
                  <div className="lt-meta-content">
                    <span className="lt-meta-label">+800</span>
                    <span className="lt-meta-text">artisans couvreurs partenaires</span>
                  </div>
                </div>
                <div className="lt-meta-item">
                  <Image src="/images/i-france.png" alt="" className="lt-meta-icon" width={40} height={40} loading="lazy" />
                  <div className="lt-meta-content">
                    <span className="lt-meta-label">France entière</span>
                    <span className="lt-meta-text">demandes de devis quotidiennes</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lt-hero-side lt-animate lt-animate-delay">
              <div className="lt-card lt-card-image">
                <Image
                  src="/images/lead couvreur.webp"
                  alt="Artisan couvreur travaillant sur une toiture pour un chantier obtenu via Lead Toiture"
                  className="lt-hero-image"
                  width={600}
                  height={400}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnement */}
        <section className="lt-section lt-section-white lt-section-divider" id="fonctionnement" aria-labelledby="fonctionnement-title">
          <div className="lt-container">
            <div className="lt-section-header lt-animate">
              <h2 id="fonctionnement-title" className="lt-title-one-line">
                Comment fonctionne <span className="lt-brand">Lead Toiture</span>&nbsp;?
              </h2>
              <p>
                Un processus simple, pensé pour faire gagner du temps aux artisans couvreurs et sécuriser les particuliers dans leur recherche de professionnel.
              </p>
            </div>
            <div className="lt-steps-grid">
              <article className="lt-card lt-step lt-animate" aria-label="Étape 1 - Inscription gratuite">
                <div className="lt-step-number">1</div>
                <h3>Inscription gratuite</h3>
                <p>
                  Remplissez notre formulaire pour soumettre votre demande d&apos;inscription au réseau Lead Toiture. Cette étape est simple, rapide et 100&nbsp;% gratuite.
                </p>
              </article>
              <article className="lt-card lt-step lt-animate" aria-label="Étape 2 - Validation de votre profil">
                <div className="lt-step-number">2</div>
                <h3>Validation de votre profil</h3>
                <p>
                  Après votre inscription, notre équipe vous contacte pour vérifier vos informations et confirmer votre zone d&apos;intervention.
                </p>
              </article>
              <article className="lt-card lt-step lt-animate" aria-label="Étape 3 - Recevez des leads">
                <div className="lt-step-number">3</div>
                <h3>Recevez des leads</h3>
                <p>
                  Une fois votre profil validé, vous recevez des demandes de devis provenant de particuliers situés dans votre secteur, correspondant à vos prestations.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="lt-section lt-section-soft" id="avantages" aria-labelledby="avantages-title">
          <div className="lt-container">
            <div className="lt-section-header lt-section-header-avantages lt-animate">
              <div className="tile-line">
                <h2 id="avantages-title">
                  Les avantages de <span className="lt-brand">Lead Toiture</span>
                  <br />
                  pour les couvreurs
                </h2>
                <Link href="#inscription" className="lt-btn lt-btn-primary">
                  Rejoindre le réseau
                </Link>
              </div>
              <p>
                Un flux régulier d&apos;opportunités de chantiers, sans démarchage agressif et sans concurrence directe sur chaque demande de devis.
              </p>
            </div>
            <div className="lt-benefits-grid">
              {[
                { title: "Pas de concurrence sur les leads", p: "Lorsqu'une demande de devis vous est transmise, vous êtes le seul artisan couvreur à recevoir ce projet. Vous échangez directement avec le client, sans mise en concurrence avec plusieurs entreprises." },
                { title: "Projets dans vos zones d'intervention", p: "Les demandes de devis que vous recevez correspondent aux zones d'intervention que vous avez initialement sélectionnées. Vous ne recevez que des projets situés dans vos communes et départements couverts." },
                { title: "Contact direct avec le client", p: "Dès qu'une demande vous est attribuée, vous accédez immédiatement aux coordonnées complètes du particulier. Vous pouvez l'appeler, organiser une visite et proposer votre devis sans intermédiaire." },
                { title: "Un réseau solide d'artisans couvreurs", p: "Plus de 800 artisans couvreurs font déjà confiance à Lead Toiture pour recevoir régulièrement de nouvelles opportunités de chantiers dans leur secteur d'intervention." },
              ].map((b, i) => (
                <article key={i} className="lt-card lt-benefit lt-animate">
                  <span className="lt-benefit-check" aria-hidden>
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r={10} />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <h3>{b.title}</h3>
                  <p>{b.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Récentes demandes */}
        <section className="lt-section lt-section-white lt-section-divider" id="demandes" aria-labelledby="demandes-title">
          <div className="lt-container lt-animate">
            <h2 id="demandes-title" className="lt-demandes-title">
              Les <span className="lt-brand">récentes demandes</span> de devis
            </h2>
            <SliderDemandes />
          </div>
        </section>

        {/* Prestations */}
        <section className="lt-section lt-section-white" aria-labelledby="prestations-title">
          <div className="lt-container">
            <div className="lt-section-header lt-animate">
              <h2 id="prestations-title">
                Des demandes de devis pour tous vos <span className="lt-brand">travaux de toiture</span>
              </h2>
              <p>
                Lead Toiture couvre l&apos;ensemble des besoins liés à la toiture, de la rénovation complète aux interventions ponctuelles.
              </p>
            </div>
            <div className="lt-services-grid">
              {[
                { img: "/images/services/couverture-renovation.webp", alt: "Rénovation et réparation de toiture", title: "Rénovation et réparation de toiture", p: "Projets complets de rénovation de toiture, remise en état après sinistre, reprise de charpente ou amélioration de l'isolation de la couverture." },
                { img: "/images/services/pose de gouttieres.webp", alt: "Pose de gouttières", title: "Pose de gouttières", p: "Pose, remplacement ou réparation de gouttières et descentes d'eau pour une évacuation optimale des eaux pluviales et la protection de votre toiture et façades." },
                { img: "/images/services/isolation toiture.webp", alt: "Isolation de toiture", title: "Isolation de toiture", p: "Demandes de devis pour l'isolation de toiture par l'intérieur ou par l'extérieur (ITE), amélioration des performances énergétiques et confort thermique." },
                { img: "/images/services/nettoyage de toitures.webp", alt: "Nettoyage et démoussage de toiture", title: "Nettoyage & démoussage", p: "Entretien courant de la toiture, nettoyage, démoussage, traitement hydrofuge et vérification de l'état général de la couverture." },
                { img: "/images/services/travaux de zinguerie.webp", alt: "Travaux de zinguerie", title: "Travaux de zinguerie", p: "Pose, réparation ou remplacement de gouttières, chéneaux, abergements, noues et autres éléments de zinguerie." },
                { img: "/images/services/autres.webp", alt: "Autres travaux de couverture", title: "Autres travaux de couverture", p: "Interventions spécifiques selon vos spécialités : toitures terrasses, fenêtres de toit, bardage, solutions techniques particulières, etc." },
              ].map((s, i) => (
                <article key={i} className="lt-card lt-service lt-animate">
                  <Image src={s.img} alt={s.alt} className="lt-service-img" width={400} height={220} loading="lazy" />
                  <h3>{s.title}</h3>
                  {s.title === "Nettoyage & démoussage" ? (
                    <p>
                      Entretien courant de la toiture, nettoyage, démoussage, traitement
                      hydrofuge et vérification de l&apos;état général de la couverture.{" "}
                      <Link href="/nettoyage-entretien-toiture">
                        Découvrir nos leads nettoyage de toiture
                      </Link>
                      .
                    </p>
                  ) : (
                    <p>{s.p}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Avis */}
        <section className="lt-section lt-section-white lt-section-divider" id="profil" aria-labelledby="profil-title">
          <div className="lt-container lt-animate">
            <h2 id="profil-title" className="lt-testimonials-title">
              Les <span className="lt-brand">avis des couvreurs</span> de notre réseau
            </h2>
            <SliderAvis />
          </div>
        </section>
      </main>
    </>
  );
}
