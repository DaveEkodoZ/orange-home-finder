import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Immobilier moderne" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      </div>

      <div className="container mx-auto relative z-10 pt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary-foreground px-4 py-1.5 rounded-full text-sm mb-6 animate-fade-in">
            <MapPin className="h-4 w-4" />
            Yaoundé & Douala, Cameroun
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Votre partenaire de confiance en{" "}
            <span className="text-primary">immobilier</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Achetez, vendez, construisez et investissez en toute sécurité.
            Nous vous accompagnons dans chaque étape de votre projet immobilier.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/biens"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-semibold hover:bg-orange-dark transition-all duration-300 shadow-lg shadow-primary/25"
            >
              Voir les biens
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/237690411527"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur text-primary-foreground border border-primary-foreground/20 px-7 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-all duration-300"
            >
              Demander un devis
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {[
              { number: "50+", label: "Biens disponibles" },
              { number: "100%", label: "Engagement qualité" },
              { number: "24/7", label: "À votre écoute" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-primary-foreground/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
