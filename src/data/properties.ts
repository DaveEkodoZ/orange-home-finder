import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export type PropertyType = "maison" | "appartement" | "terrain" | "villa" | "duplex" | "commercial";
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
];

export const propertyTypes: { value: PropertyType; label: string }[] = [
  { value: "maison", label: "Maison" },
  { value: "appartement", label: "Appartement" },
  { value: "terrain", label: "Terrain" },
  { value: "villa", label: "Villa" },
  { value: "duplex", label: "Duplex" },
  { value: "commercial", label: "Commercial" },
];

export const cities = ["Yaoundé", "Douala"];

export function formatPrice(price: number, status: PropertyStatus): string {
  const formatted = new Intl.NumberFormat("fr-FR").format(price);
  return status === "location" ? `${formatted} FCFA/mois` : `${formatted} FCFA`;
}
