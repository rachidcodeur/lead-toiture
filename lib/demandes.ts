export interface Demande {
  titre: string;
  ville: string;
  codePostal: string;
  description: string;
  date: string;
}

export const DEMANDES: Demande[] = [
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
  { titre: "Remplacement gouttières zinc", ville: "Meschers sur Gironde", codePostal: "17132", description: "Sur une maison avec 1 étage - Toiture en tuiles - Surface de la maison 160m2 - Changer toutes les gouttières qui sont actuellement en zinc abîmées et rouillées", date: "8 mars 2026" },
];

export function formatDateFr(date: Date): string {
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export function getDateForDemandeIndex(index: number, total: number): string {
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
