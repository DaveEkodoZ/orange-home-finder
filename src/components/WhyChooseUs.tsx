import { Shield, Award, Users, Clock } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Transparence totale", desc: "Accédez en temps réel à toutes les informations sur vos biens et transactions.", stat: "100%", statLabel: "Transparent" },
  { icon: Award, title: "10+ ans d'expertise", desc: "Une décennie d'expérience dans l'immobilier au Cameroun.", stat: "10+", statLabel: "Années" },
  { icon: Clock, title: "Disponibilité 24/7", desc: "Notre support est disponible par téléphone et WhatsApp à tout moment.", stat: "24/7", statLabel: "Disponible" },
  { icon: Users, title: "Agents professionnels", desc: "Des professionnels formés et certifiés à votre service.", stat: "50+", statLabel: "Agents" },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Pourquoi nous choisir</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            La confiance méritée par <span className="text-primary">l'excellence</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group relative text-center p-8 rounded-3xl border border-border bg-card overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 rounded-b-full" />

              {/* Stat badge */}
              <div className="mb-4">
                <span className="text-4xl font-display font-black text-primary">{reason.stat}</span>
                <span className="block text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">{reason.statLabel}</span>
              </div>

              <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <reason.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
