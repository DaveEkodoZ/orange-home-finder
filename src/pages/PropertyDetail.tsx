import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Bed, Bath, Maximize, Phone, MessageCircle, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { properties, formatPrice } from "@/data/properties";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

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

  // Use all available images, repeat first if only one
  const images = property.images.length > 1 ? property.images : [property.images[0], property.images[0], property.images[0]];

  const nextImage = () => setActiveImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <div className="container mx-auto py-8">
          <Link to="/biens" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Retour aux biens
          </Link>

          {/* Image Gallery */}
          <div className="relative rounded-3xl overflow-hidden mb-8 aspect-[16/7] group">
            <img
              src={images[activeImage]}
              alt={`${property.title} - Image ${activeImage + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
              width={800}
              height={600}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white shadow-lg"
                >
                  <ChevronLeft className="h-6 w-6 text-foreground" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white shadow-lg"
                >
                  <ChevronRight className="h-6 w-6 text-foreground" />
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full font-medium">
              {activeImage + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    idx === activeImage ? "border-primary shadow-lg shadow-primary/20 scale-105" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`Miniature ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

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
