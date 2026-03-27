import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { properties } from "@/data/properties";
import PropertyCard from "./PropertyCard";

const FeaturedProperties = () => {
  const featured = properties.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
          <div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Nos biens</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
              Biens <span className="text-primary">en vedette</span>
            </h2>
          </div>
          <Link
            to="/biens"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-4 sm:mt-0"
          >
            Voir tous les biens <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
