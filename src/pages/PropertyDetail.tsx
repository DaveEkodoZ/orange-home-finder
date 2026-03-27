import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Bed, Bath, Maximize, Phone, MessageCircle, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { properties, formatPrice } from "@/data/properties";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground">Bien non trouvé</h1>
          <Link to="/biens" className="text-primary mt-4 inline-block">Retour aux biens</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <div className="container mx-auto py-8">
          <Link to="/biens" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Retour aux biens
          </Link>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/7]">
            <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" width={800} height={600} />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                  {property.status === "vente" ? "À vendre" : "À louer"}
                </span>
                <span className="bg-accent text-accent-foreground text-sm font-medium px-4 py-1 rounded-full capitalize">
                  {property.type}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
                {property.title}
              </h1>

              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="h-4 w-4" />
                {property.location}, {property.city}
              </div>

              <div className="flex flex-wrap gap-6 mb-8 py-6 border-y border-border">
                {property.bedrooms && (
                  <div className="flex items-center gap-2">
                    <Bed className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-lg font-semibold text-foreground">{property.bedrooms}</div>
                      <div className="text-xs text-muted-foreground">Chambres</div>
                    </div>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-lg font-semibold text-foreground">{property.bathrooms}</div>
                      <div className="text-xs text-muted-foreground">Salles de bain</div>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Maximize className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-lg font-semibold text-foreground">{property.area} m²</div>
                    <div className="text-xs text-muted-foreground">Surface</div>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-display font-semibold text-foreground mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{property.description}</p>

              <h2 className="text-xl font-display font-semibold text-foreground mb-4">Caractéristiques</h2>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {property.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-28">
                <div className="text-3xl font-display font-bold text-primary mb-2">
                  {formatPrice(property.price, property.status)}
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  {property.status === "location" ? "Loyer mensuel" : "Prix de vente"}
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+237690411527"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-semibold hover:bg-orange-dark transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    Appeler maintenant
                  </a>
                  <a
                    href={`https://wa.me/237690411527?text=${encodeURIComponent(`Bonjour, je suis intéressé par: ${property.title} (${property.location}, ${property.city})`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
