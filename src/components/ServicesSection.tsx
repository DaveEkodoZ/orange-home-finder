import { Home, Building2, Hammer, Briefcase, FileText, MapPin } from "lucide-react";

const services = [
  { icon: Home, title: "Vente de terrains", desc: "Terrains titrés et viabilisés dans les meilleurs quartiers." },
  { icon: Building2, title: "Location d'appartements", desc: "Appartements et maisons de standing pour toutes les bourses." },
  { icon: Hammer, title: "Construction", desc: "Construction de bâtiments clé en main avec des matériaux de qualité." },
  { icon: Briefcase, title: "Gestion immobilière", desc: "Gestion locative complète de vos biens immobiliers." },
  { icon: FileText, title: "Conseils en investissement", desc: "Accompagnement personnalisé pour vos investissements." },
  { icon: MapPin, title: "Démarches administratives", desc: "Suivi des démarches et accompagnement juridique." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Nos services</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            Des solutions adaptées à <span className="text-primary">vos besoins</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Découvrez notre gamme complète de services immobiliers conçus pour vous accompagner à chaque étape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-8 hover-lift cursor-pointer"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="h-7 w-7 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
