import { Shield, Award, Users, Clock } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Transparence totale", desc: "Accédez en temps réel à toutes les informations sur vos biens et transactions." },
  { icon: Award, title: "10+ ans d'expertise", desc: "Une décennie d'expérience dans l'immobilier au Cameroun." },
  { icon: Clock, title: "Disponibilité 24/7", desc: "Notre support est disponible par téléphone et WhatsApp à tout moment." },
  { icon: Users, title: "Agents professionnels", desc: "Des professionnels formés et certifiés à votre service." },
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
            <div key={reason.title} className="text-center p-6 rounded-2xl border border-border bg-card hover-lift">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-5">
                <reason.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
