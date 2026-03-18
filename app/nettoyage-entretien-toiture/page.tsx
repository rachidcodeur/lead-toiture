import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClientInit from "../../components/ClientInit";

export const metadata: Metadata = {
  title: "Leads nettoyage et entretien de toiture pour artisans couvreurs",
  description:
    "Lead Toiture fournit des leads qualifiés pour le nettoyage, le démoussage et l’entretien de toitures partout en France, à destination des artisans couvreurs.",
};

export default function NettoyageEntretienToiturePage() {
  return (
    <>
      <ClientInit />
      <main id="top" className="lt-page-nettoyage">
      <section className="lt-section lt-hero" aria-labelledby="hero-title-nettoyage">
        <div className="lt-container lt-hero-grid">
          <div className="lt-hero-content lt-animate">
            <div className="lt-badge">Plateforme de leads pour artisans couvreurs</div>
            <h1 id="hero-title-nettoyage">
              Recevez des leads pour le{" "}
              <span className="lt-keyword">nettoyage</span> et l&apos;entretien de toitures
            </h1>
            <p className="lt-hero-subtitle">
              Nous envoyons à votre entreprise des demandes de nettoyage, démoussage et
              traitement de toitures, déjà qualifiées, dans vos zones d&apos;intervention.
              Vous concentrez votre temps sur les chantiers, nous nous occupons de trouver
              les projets.
            </p>
            <div className="lt-hero-actions">
              <Link href="/#inscription" className="lt-btn lt-btn-primary">
                Inscription gratuite
              </Link>
            </div>
            <div className="lt-hero-meta">
              <div className="lt-meta-item">
                <Image
                  src="/images/i-artisan.png"
                  alt="Plus de 800 artisans couvreurs partenaires Lead Toiture"
                  className="lt-meta-icon"
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <div className="lt-meta-content">
                  <span className="lt-meta-label">+800</span>
                  <span className="lt-meta-text">artisans couvreurs partenaires</span>
                </div>
              </div>
              <div className="lt-meta-item">
                <Image
                  src="/images/i-france.png"
                  alt="Leads nettoyage de toiture partout en France"
                  className="lt-meta-icon"
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <div className="lt-meta-content">
                  <span className="lt-meta-label">France entière</span>
                  <span className="lt-meta-text">demandes de nettoyage de toiture</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lt-hero-side lt-animate lt-animate-delay">
            <div className="lt-card lt-card-image">
              <Image
                src="/images/pages services/nettoyage-toiture.webp"
                alt="Artisan couvreur nettoyant une toiture obtenue via Lead Toiture"
                className="lt-hero-image"
                width={600}
                height={400}
                priority={false}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="lt-section lt-section-white lt-section-divider"
        aria-labelledby="fonctionnement-nettoyage-title"
      >
        <div className="lt-container">
          <div className="lt-section-header lt-animate">
            <h2 id="fonctionnement-nettoyage-title" className="lt-title-one-line">
              Comment fonctionnent nos leads{" "}
              <span className="lt-brand">nettoyage de toiture</span>&nbsp;?
            </h2>
            <p>
              Un processus simple pensé pour les couvreurs : vous nous indiquez vos zones
              et vos prestations de nettoyage de toitures, nous vous envoyons des demandes
              sérieuses issues de propriétaires qui ont un projet concret.
            </p>
          </div>

          <div className="lt-steps-grid">
            <article
              className="lt-card lt-step lt-animate"
              aria-label="Étape 1 - Inscription gratuite"
            >
              <div className="lt-step-number">1</div>
              <h3>Inscription gratuite</h3>
              <p>
                Vous complétez une inscription simple pour présenter votre entreprise de
                couverture, vos prestations de nettoyage et démoussage et vos secteurs
                d&apos;intervention.
              </p>
            </article>

            <article
              className="lt-card lt-step lt-animate"
              aria-label="Étape 2 - Validation de votre profil"
            >
              <div className="lt-step-number">2</div>
              <h3>Validation de votre profil</h3>
              <p>
                Notre équipe vérifie vos informations (assurances, périmètre d&apos;action,
                types de toitures traitées) afin de vous envoyer uniquement des demandes
                pertinentes de nettoyage et d&apos;entretien.
              </p>
            </article>

            <article
              className="lt-card lt-step lt-animate"
              aria-label="Étape 3 - Recevez des leads nettoyage toiture"
            >
              <div className="lt-step-number">3</div>
              <h3>Recevez des leads</h3>
              <p>
                Vous recevez ensuite des demandes de devis pour le nettoyage, le
                démoussage et le traitement de toitures dans vos communes. Vous échangez
                directement avec les particuliers pour planifier les visites et devis.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="lt-section lt-section-white"
        aria-labelledby="nettoyage-leads-title"
      >
        <div className="lt-container">
          <div className="lt-two-column">
            <div className="lt-two-column-block">
              <div className="lt-section-header lt-animate">
                <h2 id="nettoyage-leads-title">
                  Des leads de <span className="lt-brand">nettoyage de toitures</span>{" "}
                  partout en France
                </h2>
                <p>
                  Lead Toiture accompagne les artisans couvreurs qui souhaitent développer
                  leur activité de nettoyage et d&apos;entretien de toitures sans passer des
                  heures en prospection. Nous couvrons les grandes agglomérations
                  (Île-de-France, Lyon, Marseille, Bordeaux, Lille, Toulouse, Nantes...)
                  mais aussi de nombreux départements comme le Rhône (69), les Bouches-du-Rhône (13),
                  la Gironde (33), le Nord (59) ou encore la Loire-Atlantique (44).
                </p>
              </div>
              <div className="lt-card lt-card-focus lt-animate">
                <h3>Des demandes ciblées pour les couvreurs</h3>
                <p>
                  Les demandes que nous transmettons concernent des prestations de
                  nettoyage, démoussage, traitement hydrofuge ou entretien préventif des
                  toitures (tuiles, ardoises, fibro, etc.). Les particuliers ont un projet
                  identifié et recherchent un artisan couvreur disponible près de chez eux.
                </p>
                <p>
                  L&apos;objectif : vous fournir des opportunités de chantiers régulières et
                  qualitatives, que vous soyez installé en zone urbaine ou rurale.
                </p>
              </div>
            </div>

            <div className="lt-two-column-block">
              <div className="lt-card lt-animate">
                <h3>Pourquoi utiliser une plateforme de leads pour le nettoyage de toiture&nbsp;?</h3>
                <ul className="lt-bullets lt-bullets-check">
                  <li>Vous réduisez le temps passé à chercher des chantiers.</li>
                  <li>
                    Vous recevez des demandes déjà géolocalisées sur vos secteurs
                    (communes, départements ou régions ciblées).
                  </li>
                  <li>
                    Vous restez concentré sur la réalisation des travaux : devis, conseils,
                    intervention et suivi client.
                  </li>
                  <li>
                    Vous pouvez lisser votre planning entre saisons de fort nettoyage de
                    toiture (printemps, automne) et périodes plus calmes.
                  </li>
                </ul>
                <p className="lt-note">
                  Cette page est dédiée au service de nettoyage et d&apos;entretien de
                  toitures. Si vous proposez également de la rénovation complète, de
                  l&apos;isolation ou des travaux de zinguerie, Lead Toiture peut aussi vous
                  envoyer des leads sur ces prestations.
                </p>
                <Link href="/#inscription" className="lt-btn lt-btn-primary lt-btn-inline">
                  Rejoindre Lead Toiture
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="lt-section lt-section-white lt-section-divider lt-section-tight-top"
        aria-labelledby="nettoyage-techniques-title"
      >
        <div className="lt-container">
          <div className="lt-section-header lt-animate">
            <h2
              id="nettoyage-techniques-title"
              className="lt-title-one-line lt-text-center"
            >
              Le nettoyage de toitures au cœur de vos leads qualifiés
            </h2>
          </div>
          <div className="lt-card lt-animate">
            <p>
              Un bon nettoyage de toiture ne se limite pas à passer un coup de karcher.
              Selon le matériau (tuiles, ardoises, fibro-ciment, bac acier, etc.), le
              couvreur adapte ses méthodes&nbsp;: brosse manuelle ou basse pression pour ne
              pas fragiliser la couverture, respect des pentes et des évacuations d&apos;eaux,
              protection des abords et raccords de zinguerie. Les leads nettoyage toiture
              que nous transmettons correspondent à des particuliers qui cherchent un
              professionnel capable de leur expliquer clairement ces étapes techniques.
            </p>
            <p>
              Les produits utilisés ont également un rôle clé dans la durabilité du
              résultat&nbsp;: démoussants et fongicides professionnels pour éliminer
              durablement mousses, lichens et algues, puis, si nécessaire, application
              d&apos;un traitement hydrofuge pour limiter le retour de l&apos;humidité et protéger
              les tuiles. En tant qu&apos;agence de leads spécialisée toiture, nous mettons en
              avant ces prestations de nettoyage, démoussage et traitement dans nos
              formulaires, afin que les demandes reçues correspondent à votre savoir-faire.
            </p>
            <p>
              L&apos;objectif des leads nettoyage de toitures que vous recevez via Lead
              Toiture est de vous mettre en relation avec des clients qui ont compris
              l&apos;importance d&apos;un entretien régulier de leur{" "}
              <Link
                href="/"
                className="lt-link-highlight"
                aria-label="Retour à la page d&apos;accueil Lead Toiture, plateforme de leads en couverture toitures"
              >
                couverture toitures
              </Link>
              &nbsp;: prévention des infiltrations, allongement de la durée de vie de la
              toiture, meilleure tenue esthétique du bien. Vous pouvez ainsi valoriser vos
              techniques, vos produits et vos conseils d&apos;artisan couvreur tout en
              développant votre activité grâce à un flux de leads qualifiés dédié au
              nettoyage de toitures. Pour en savoir plus sur les enjeux énergétiques et
              environnementaux liés à l&apos;entretien du bâti, vous pouvez également
              consulter les ressources de l&apos;
              <a
                href="https://www.ademe.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="lt-link-highlight"
              >
                ADEME
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

