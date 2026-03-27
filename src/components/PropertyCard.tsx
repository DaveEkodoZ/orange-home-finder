import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import { Property, formatPrice } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link to={`/biens/${property.id}`} className="group block">
      <div className="bg-card border border-border rounded-2xl overflow-hidden hover-lift">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            width={800}
            height={600}
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              {property.status === "vente" ? "À vendre" : "À louer"}
            </span>
            <span className="bg-foreground/80 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full capitalize">
              {property.type}
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
            <MapPin className="h-3.5 w-3.5" />
            {property.location}, {property.city}
          </div>

          <h3 className="font-display font-semibold text-foreground text-lg mb-3 group-hover:text-primary transition-colors">
            {property.title}
          </h3>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            {property.bedrooms && (
              <span className="flex items-center gap-1">
                <Bed className="h-4 w-4" /> {property.bedrooms}
              </span>
            )}
            {property.bathrooms && (
              <span className="flex items-center gap-1">
                <Bath className="h-4 w-4" /> {property.bathrooms}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Maximize className="h-4 w-4" /> {property.area} m²
            </span>
          </div>

          <div className="pt-4 border-t border-border">
            <span className="text-xl font-display font-bold text-primary">
              {formatPrice(property.price, property.status)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
