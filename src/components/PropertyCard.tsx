import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Maximize, ArrowUpRight } from "lucide-react";
import { Property, formatPrice } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  from?: string;
}

const PropertyCard = ({ property, from }: PropertyCardProps) => {
  return (
    <Link to={`/biens/${property.id}`} state={{ from: from || "/biens" }} className="group block">
      <div className="bg-card border border-border rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
            width={800}
            height={600}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              {property.status === "vente" ? "À vendre" : "À louer"}
            </span>
            <span className="bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full capitalize shadow-lg">
              {property.type}
            </span>
          </div>

          {/* Hover arrow */}
          <div className="absolute bottom-4 right-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            {property.location}, {property.city}
          </div>

          <h3 className="font-display font-bold text-foreground text-lg mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {property.title}
          </h3>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5">
            {property.bedrooms && (
              <span className="flex items-center gap-1.5 bg-accent px-3 py-1.5 rounded-lg">
                <Bed className="h-4 w-4 text-primary" /> {property.bedrooms}
              </span>
            )}
            {property.bathrooms && (
              <span className="flex items-center gap-1.5 bg-accent px-3 py-1.5 rounded-lg">
                <Bath className="h-4 w-4 text-primary" /> {property.bathrooms}
              </span>
            )}
            <span className="flex items-center gap-1.5 bg-accent px-3 py-1.5 rounded-lg">
              <Maximize className="h-4 w-4 text-primary" /> {property.area} m²
            </span>
          </div>

          <div className="pt-4 border-t border-border flex items-center justify-between">
            <span className="text-xl font-display font-bold text-primary">
              {formatPrice(property.price, property.status)}
            </span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Voir détails →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
