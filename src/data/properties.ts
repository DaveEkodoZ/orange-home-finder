import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";
import productMobilier from "@/assets/product-mobilier.jpg";
import productElectromenager from "@/assets/product-electromenager.jpg";
import productDecoration from "@/assets/product-decoration.jpg";
import productMateriaux from "@/assets/product-materiaux.jpg";

export type PropertyType = "maison" | "appartement" | "terrain" | "villa" | "duplex" | "commercial" | "mobilier" | "electromenager" | "decoration" | "materiaux";
export type PropertyStatus = "vente" | "location";

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  location: string;
  city: string;
  area: number;
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  features: string[];
  images: string[];
  lat: number;
  lng: number;
  featured: boolean;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Villa Moderne avec Jardin",
    type: "villa",
    status: "vente",
    price: 85000000,
    location: "Bastos",
    city: "Yaoundé",
    area: 450,
    bedrooms: 5,
    bathrooms: 4,
    description: "Magnifique villa moderne située dans le quartier résidentiel de Bastos. Cette propriété offre un cadre de vie exceptionnel avec un grand jardin, une piscine et des finitions haut de gamme. Idéale pour une famille à la recherche de confort et de prestige.",
    features: ["Piscine", "Jardin", "Garage double", "Cuisine équipée", "Climatisation", "Sécurité 24/7"],
    images: [property1],
    lat: 3.8880,
    lng: 11.5021,
    featured: true,
  },
  {
    id: "2",
    title: "Appartement Standing 3 Pièces",
    type: "appartement",
    status: "location",
    price: 350000,
    location: "Bonapriso",
    city: "Douala",
    area: 120,
    bedrooms: 3,
    bathrooms: 2,
    description: "Bel appartement de standing dans le quartier prisé de Bonapriso. Lumineux, spacieux et entièrement rénové. Proche de toutes commodités, commerces et restaurants.",
    features: ["Balcon", "Ascenseur", "Parking", "Climatisation", "Gardiennage"],
    images: [property2],
    lat: 4.0183,
    lng: 9.6958,
    featured: true,
  },
  {
    id: "3",
    title: "Terrain Résidentiel 500m²",
    type: "terrain",
    status: "vente",
    price: 15000000,
    location: "Nsimeyong",
    city: "Yaoundé",
    area: 500,
    description: "Terrain plat et titré situé dans une zone résidentielle en plein développement. Accès facile à la route principale. Idéal pour la construction d'une maison familiale ou d'un immeuble locatif.",
    features: ["Titre foncier", "Route bitumée", "Eau & Électricité", "Zone résidentielle"],
    images: [property3],
    lat: 3.8400,
    lng: 11.5100,
    featured: false,
  },
  {
    id: "4",
    title: "Villa Luxe avec Piscine",
    type: "villa",
    status: "vente",
    price: 120000000,
    location: "Bonamoussadi",
    city: "Douala",
    area: 600,
    bedrooms: 6,
    bathrooms: 5,
    description: "Villa de grand luxe dans un quartier sécurisé. Architecture contemporaine avec des matériaux de première qualité. Piscine chauffée, salle de sport et home cinéma.",
    features: ["Piscine chauffée", "Home cinéma", "Salle de sport", "Suite parentale", "Dépendance", "Jardin paysager"],
    images: [property4],
    lat: 4.0600,
    lng: 9.7300,
    featured: true,
  },
  {
    id: "5",
    title: "Duplex Familial 4 Chambres",
    type: "duplex",
    status: "vente",
    price: 45000000,
    location: "Mendong",
    city: "Yaoundé",
    area: 280,
    bedrooms: 4,
    bathrooms: 3,
    description: "Joli duplex dans un quartier calme et familial. Construction récente avec de belles finitions. Proche des écoles et des commerces. Un excellent rapport qualité-prix.",
    features: ["Garage", "Terrasse", "Cuisine américaine", "Buanderie", "Clôture"],
    images: [property5],
    lat: 3.8300,
    lng: 11.4800,
    featured: false,
  },
  {
    id: "6",
    title: "Local Commercial Centre-Ville",
    type: "commercial",
    status: "location",
    price: 500000,
    location: "Akwa",
    city: "Douala",
    area: 200,
    description: "Local commercial idéalement situé en plein centre d'Akwa. Grande visibilité, fort passage piéton. Convient pour commerce, bureau ou showroom.",
    features: ["Vitrine", "Climatisation", "Toilettes", "Grande visibilité", "Parking public"],
    images: [property6],
    lat: 4.0450,
    lng: 9.7050,
    featured: false,
  },
  {
    id: "7",
    title: "Maison Familiale 3 Chambres",
    type: "maison",
    status: "vente",
    price: 35000000,
    location: "Omnisport",
    city: "Yaoundé",
    area: 220,
    bedrooms: 3,
    bathrooms: 2,
    description: "Maison familiale confortable dans le quartier Omnisport. Construction solide, bon voisinage, proche des écoles et marchés. Idéale pour une première acquisition.",
    features: ["Garage", "Cour clôturée", "Cuisine équipée", "Citerne d'eau"],
    images: [property1],
    lat: 3.8650,
    lng: 11.5200,
    featured: false,
  },
  // --- Nouveaux produits ---
  {
    id: "8",
    title: "Table à Manger 6 Places en Bois Massif",
    type: "mobilier",
    status: "vente",
    price: 250000,
    location: "Showroom Akwa",
    city: "Douala",
    area: 0,
    description: "Magnifique table à manger en bois massif avec 6 chaises assorties. Design moderne et élégant, parfait pour les repas en famille. Bois traité et résistant.",
    features: ["Bois massif", "6 chaises incluses", "Design moderne", "Finition vernie", "Livraison incluse"],
    images: [productMobilier],
    lat: 4.0450,
    lng: 9.7050,
    featured: true,
  },
  {
    id: "9",
    title: "Lot de Chaises de Bureau Ergonomiques",
    type: "mobilier",
    status: "vente",
    price: 85000,
    location: "Showroom Bastos",
    city: "Yaoundé",
    area: 0,
    description: "Lot de 4 chaises de bureau ergonomiques avec accoudoirs réglables. Idéales pour le bureau ou la salle de réunion. Confort garanti toute la journée.",
    features: ["Ergonomique", "Accoudoirs réglables", "Roulettes", "Lot de 4", "Garantie 1 an"],
    images: [productMobilier],
    lat: 3.8880,
    lng: 11.5021,
    featured: false,
  },
  {
    id: "10",
    title: "Réfrigérateur Double Porte 450L",
    type: "electromenager",
    status: "vente",
    price: 380000,
    location: "Showroom Akwa",
    city: "Douala",
    area: 0,
    description: "Réfrigérateur double porte grande capacité 450L. Classe énergétique A+, silencieux et performant. Idéal pour les grandes familles.",
    features: ["450 Litres", "Double porte", "Classe A+", "No Frost", "Garantie 2 ans"],
    images: [productElectromenager],
    lat: 4.0450,
    lng: 9.7050,
    featured: true,
  },
  {
    id: "11",
    title: "Machine à Laver Automatique 8kg",
    type: "electromenager",
    status: "vente",
    price: 220000,
    location: "Showroom Bastos",
    city: "Yaoundé",
    area: 0,
    description: "Machine à laver automatique 8kg avec plusieurs programmes de lavage. Économique en eau et en énergie. Installation et livraison incluses.",
    features: ["8kg", "Automatique", "Économe en énergie", "Multi-programmes", "Livraison incluse"],
    images: [productElectromenager],
    lat: 3.8880,
    lng: 11.5021,
    featured: false,
  },
  {
    id: "12",
    title: "Ensemble Rideaux & Coussins Africains",
    type: "decoration",
    status: "vente",
    price: 75000,
    location: "Showroom Akwa",
    city: "Douala",
    area: 0,
    description: "Ensemble de décoration intérieure comprenant des rideaux et coussins aux motifs africains contemporains. Tissus de qualité supérieure, couleurs éclatantes.",
    features: ["Motifs africains", "Tissu premium", "4 coussins inclus", "2 paires de rideaux", "Sur mesure possible"],
    images: [productDecoration],
    lat: 4.0450,
    lng: 9.7050,
    featured: false,
  },
  {
    id: "13",
    title: "Luminaire Design Salon & Chambre",
    type: "decoration",
    status: "vente",
    price: 45000,
    location: "Showroom Bastos",
    city: "Yaoundé",
    area: 0,
    description: "Luminaire moderne pour salon ou chambre. Design épuré avec éclairage LED intégré. Apporte une ambiance chaleureuse et contemporaine à votre intérieur.",
    features: ["LED intégré", "Design moderne", "Économe", "Installation facile", "Variateur inclus"],
    images: [productDecoration],
    lat: 3.8880,
    lng: 11.5021,
    featured: false,
  },
  {
    id: "14",
    title: "Lot Ciment & Fer à Béton",
    type: "materiaux",
    status: "vente",
    price: 500000,
    location: "Dépôt Bonabéri",
    city: "Douala",
    area: 0,
    description: "Lot de matériaux de construction comprenant 50 sacs de ciment et barres de fer à béton. Prix compétitif pour vos chantiers. Livraison possible sur site.",
    features: ["50 sacs de ciment", "Fer à béton inclus", "Prix grossiste", "Livraison possible", "Qualité certifiée"],
    images: [productMateriaux],
    lat: 4.0600,
    lng: 9.7300,
    featured: false,
  },
  {
    id: "15",
    title: "Carrelage & Peinture Intérieure",
    type: "materiaux",
    status: "vente",
    price: 180000,
    location: "Dépôt Omnisport",
    city: "Yaoundé",
    area: 0,
    description: "Pack carrelage 60x60 et peinture intérieure pour une pièce complète. Choix de couleurs disponibles. Idéal pour la rénovation ou la finition de votre maison.",
    features: ["Carrelage 60x60", "Peinture incluse", "Choix de couleurs", "Quantité pour 1 pièce", "Conseils gratuits"],
    images: [productMateriaux],
    lat: 3.8650,
    lng: 11.5200,
    featured: false,
  },
];

export const propertyTypes: { value: PropertyType; label: string }[] = [
  { value: "maison", label: "Maison" },
  { value: "appartement", label: "Appartement" },
  { value: "terrain", label: "Terrain" },
  { value: "villa", label: "Villa" },
  { value: "duplex", label: "Duplex" },
  { value: "commercial", label: "Commercial" },
  { value: "mobilier", label: "Mobilier" },
  { value: "electromenager", label: "Électroménager" },
  { value: "decoration", label: "Décoration" },
  { value: "materiaux", label: "Matériaux de construction" },
];

export const cities = ["Yaoundé", "Douala"];

export function formatPrice(price: number, status: PropertyStatus): string {
  const formatted = new Intl.NumberFormat("fr-FR").format(price);
  return status === "location" ? `${formatted} FCFA/mois` : `${formatted} FCFA`;
}
