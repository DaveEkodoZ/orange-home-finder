import { Shield, Award, Users, Clock, TrendingUp, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Transparence totale",
    desc: "Chaque transaction est documentée et accessible. Vous suivez l'évolution de vos investissements en temps réel, sans zone d'ombre.",
    highlight: "Zéro surprise",
  },
  {
    icon: Award,
    title: "10+ ans d'expertise",
    desc: "Plus d'une décennie à bâtir des projets immobiliers réussis au Cameroun. Notre expérience est votre meilleure garantie.",
    highlight: "Depuis 2014",
  },
  {
    icon: Clock,
    title: "Disponibilité 24/7",
    desc: "Que vous soyez au Cameroun ou à l'étranger, notre équipe reste joignable par téléphone et WhatsApp à toute heure.",
    highlight: "Toujours là",
  },
  {
    icon: Users,
    title: "Agents certifiés",
    desc: "Nos agents sont rigoureusement formés et certifiés. Ils connaissent le marché local et vous accompagnent avec professionnalisme.",
    highlight: "50+ experts",
  },
  {
    icon: TrendingUp,
    title: "Rentabilité prouvée",
    desc: "Nos clients bénéficient d'un retour sur investissement moyen de 15% par an grâce à nos conseils stratégiques.",
    highlight: "+15% / an",
  },
  {
    icon: HeartHandshake,
    title: "Accompagnement sur-mesure",
    desc: "De la recherche du bien à la remise des clés, nous vous guidons pas à pas avec un service personnalisé et humain.",
    highlight: "Clé en main",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Pourquoi nous choisir</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            La confiance méritée par <span className="text-primary">l'excellence</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
            Chez ImmoTrust, nous ne vendons pas simplement des biens — nous construisons des relations durables fondées sur la confiance, la transparence et des résultats concrets. Voici ce qui nous distingue.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group relative bg-card border border-border rounded-3xl p-8 overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Decorative corner gradient */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-primary/15 to-orange-300/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
              
              {/* Highlight badge */}
              <div className="relative inline-block mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                  {reason.highlight}
                </span>
              </div>

              <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-orange-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <reason.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="relative text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-orange-400 group-hover:w-full transition-all duration-500 rounded-t-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
