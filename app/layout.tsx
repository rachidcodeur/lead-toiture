import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import MobileNav from "../components/MobileNav";

const SITE_URL = "https://www.leadtoiture.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lead Toiture - Recevez des demandes de devis toiture qualifiées",
    template: "%s | Lead Toiture",
  },
  description:
    "Lead Toiture aide les artisans couvreurs à recevoir des demandes de devis qualifiées dans leurs communes d'intervention. Rejoignez un réseau de plus de 800 couvreurs.",
  keywords: [
    "devis toiture",
    "artisan couvreur",
    "demande de devis toiture",
    "leads couverture",
    "travaux toiture",
    "couvreur France",
    "plateforme artisans toiture",
  ],
  authors: [{ name: "Lead Toiture", url: SITE_URL }],
  creator: "Lead Toiture",
  publisher: "Lead Toiture",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${SITE_URL}/`,
    siteName: "Lead Toiture",
    title: "Lead Toiture - Leads qualifiés pour artisans couvreurs",
    description:
      "Rejoignez notre réseau d'artisans couvreurs et recevez des demandes de devis toiture qualifiées dans vos communes d'intervention.",
    images: [
      {
        url: "/images/lead couvreur.webp",
        width: 1200,
        height: 630,
        alt: "Lead Toiture - Artisan couvreur et demandes de devis toiture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Toiture - Recevez des demandes de devis toiture qualifiées",
    description:
      "Rejoignez un réseau de plus de 800 artisans couvreurs. Demandes de devis toiture qualifiées dans vos zones d'intervention.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#226d68",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lead Toiture",
              url: `${SITE_URL}/`,
              description:
                "Plateforme de mise en relation entre particuliers et artisans couvreurs pour des travaux de toiture.",
              areaServed: { "@type": "Country", name: "France" },
              industry: "Couverture - Toiture",
              numberOfEmployees: "11-50",
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Lead Toiture",
              url: `${SITE_URL}/`,
              description:
                "Plateforme de mise en relation entre artisans couvreurs et particuliers pour des demandes de devis toiture en France.",
              inLanguage: "fr-FR",
              publisher: { "@type": "Organization", name: "Lead Toiture", url: `${SITE_URL}/` },
            }),
          }}
        />
      </head>
      <body>
        <a href="#top" className="lt-skip-link">
          Aller au contenu principal
        </a>
        <header className="lt-header">
          <div className="lt-container lt-header-inner">
            <Link href="/" className="lt-logo">
              <span className="lt-logo-mark">LT</span>
              <span className="lt-logo-text">Lead Toiture</span>
            </Link>
            <nav className="lt-nav" aria-label="Navigation principale">
              <a href="#avantages" className="lt-nav-link">
                Avantages
              </a>
              <a href="#profil" className="lt-nav-link">
                Témoignages
              </a>
              <a href="#demandes" className="lt-nav-link">
                Demandes de devis
              </a>
            </nav>
            <a href="#inscription" className="lt-btn lt-btn-primary lt-nav-btn">
              Inscription
            </a>
            <MobileNav />
          </div>
        </header>
        {children}
        <footer className="lt-footer">
          <div className="lt-container lt-footer-inner">
            <div className="lt-footer-top">
              <div className="lt-footer-main">
                <div className="lt-logo">
                  <span className="lt-logo-mark">LT</span>
                  <span className="lt-logo-text">Lead Toiture</span>
                </div>
                <p>
                  Lead Toiture est une plateforme de mise en relation entre
                  particuliers et artisans couvreurs qualifiés pour tous types
                  de travaux de toiture.
                </p>
                <p className="lt-footer-links">
                  <Link href="/leads-travaux-toiture">
                    Agence de leads travaux de toiture
                  </Link>
                  <br />
                  <Link href="/renovation-toitures">Rénovation de toitures</Link>
                  <br />
                  <Link href="/leads-pose-gouttieres">Leads pose de gouttières</Link>
                  <br />
                  <Link href="/leads-travaux-isolation">
                    Leads travaux d&apos;isolation
                  </Link>
                  <br />
                  <Link href="/pose-fenetres-toit">Pose de fenêtres de toit</Link>
                  <br />
                  <Link href="/nettoyage-entretien-toiture">
                    Nettoyage et entretien de toiture
                  </Link>
                </p>
              </div>
              <div className="lt-footer-departements-wrap">
                <h3 className="lt-footer-departements-title">
                  Intervention sur la France entière
                </h3>
                <div
                  className="lt-footer-departements"
                  aria-label="Départements couverts"
                >
                  <div className="lt-footer-col">
                    <ul>
                      {[
                        "Paris (75)",
                        "Seine-Saint-Denis (93)",
                        "Hauts-de-Seine (92)",
                        "Val-de-Marne (94)",
                        "Val-d'Oise (95)",
                        "Seine-et-Marne (77)",
                        "Essonne (91)",
                        "Yvelines (78)",
                        "Bouches-du-Rhône (13)",
                        "Nord (59)",
                      ].map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="lt-footer-col">
                    <ul>
                      {[
                        "Rhône (69)",
                        "Gironde (33)",
                        "Haute-Garonne (31)",
                        "Loire-Atlantique (44)",
                        "Ille-et-Vilaine (35)",
                        "Alpes-Maritimes (06)",
                        "Var (83)",
                        "Hérault (34)",
                        "Isère (38)",
                        "Morbihan (56)",
                      ].map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="lt-footer-col">
                    <ul>
                      {[
                        "Pas-de-Calais (62)",
                        "Oise (60)",
                        "Loiret (45)",
                        "Gard (30)",
                        "Vaucluse (84)",
                        "Seine-Maritime (76)",
                        "Doubs (25)",
                        "Savoie (73)",
                        "Haute-Savoie (74)",
                        "Maine-et-Loire (49)",
                      ].map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="lt-footer-col">
                    <ul>
                      {[
                        "Pyrénées-Atlantiques (64)",
                        "Finistère (29)",
                        "Côtes-d'Armor (22)",
                        "Charente-Maritime (17)",
                        "Vendée (85)",
                        "Bas-Rhin (67)",
                        "Haut-Rhin (68)",
                        "Moselle (57)",
                        "Drôme (26)",
                        "Puy-de-Dôme (63)",
                      ].map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="lt-footer-copy">
              © {new Date().getFullYear()} Lead Toiture. Tous droits réservés.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
