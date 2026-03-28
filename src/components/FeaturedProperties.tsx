import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { properties } from "@/data/properties";
import PropertyCard from "./PropertyCard";

const FeaturedProperties = () => {
  const featured = properties.slice(0, 6);

  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Nos biens</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            Biens <span className="text-primary">en vedette</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Découvrez notre sélection de biens immobiliers soigneusement choisis pour leur qualité, leur emplacement et leur potentiel d'investissement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} from="/#services" />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/biens"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Voir tous les biens <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
