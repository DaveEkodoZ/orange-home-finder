import { Home, Building2, Hammer, Briefcase, FileText, MapPin } from "lucide-react";

const services = [
  { icon: Home, title: "Vente de terrains", desc: "Terrains titrés et viabilisés dans les meilleurs quartiers.", color: "from-orange-400 to-orange-600" },
  { icon: Building2, title: "Location d'appartements", desc: "Appartements et maisons de standing pour toutes les bourses.", color: "from-amber-400 to-amber-600" },
  { icon: Hammer, title: "Construction", desc: "Construction de bâtiments clé en main avec des matériaux de qualité.", color: "from-orange-500 to-red-500" },
  { icon: Briefcase, title: "Gestion immobilière", desc: "Gestion locative complète de vos biens immobiliers.", color: "from-yellow-400 to-orange-500" },
  { icon: FileText, title: "Conseils en investissement", desc: "Accompagnement personnalisé pour vos investissements.", color: "from-orange-400 to-rose-500" },
  { icon: MapPin, title: "Démarches administratives", desc: "Suivi des démarches et accompagnement juridique.", color: "from-amber-500 to-orange-600" },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card border border-border rounded-3xl p-8 overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Decorative gradient blob */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500`} />
              
              {/* Number */}
              <span className="absolute top-6 right-6 text-6xl font-display font-bold text-border/50 group-hover:text-primary/10 transition-colors duration-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="relative text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed">{service.desc}</p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
