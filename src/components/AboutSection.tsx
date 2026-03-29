import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about-img.jpg";

const features = [
  "Vente et location de biens immobiliers",
  "Construction et rénovation de bâtiments",
  "Gestion immobilière complète",
  "Conseils en investissement",
  "Accompagnement administratif",
  "Suivi de chantier personnalisé",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Notre équipe"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="text-3xl font-display font-bold">100%</div>
              <div className="text-sm opacity-90">Engagement & passion</div>
            </div>
          </div>

          <div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Qui sommes-nous</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
              Votre expert immobilier de <span className="text-primary">confiance</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Notre entreprise est spécialisée dans la vente, la location, la construction et la gestion immobilière au Cameroun.
              Animés par une vision moderne et ambitieuse, nous accompagnons nos clients dans tous leurs projets immobiliers avec professionnalisme et transparence.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
