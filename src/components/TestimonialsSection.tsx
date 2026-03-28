import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jean-Pierre N.",
    location: "Yaoundé",
    text: "Grâce à ImmoTrust, j'ai pu acquérir ma maison de rêve à Bastos. Leur transparence et leur professionnalisme m'ont rassuré tout au long du processus.",
    rating: 5,
  },
  {
    name: "Marie-Claire F.",
    location: "Douala",
    text: "Le service de gestion locative est impeccable. Je vis à l'étranger et ImmoTrust gère parfaitement mon patrimoine immobilier au Cameroun.",
    rating: 5,
  },
  {
    name: "Patrick K.",
    location: "Bruxelles",
    text: "Après 10 ans à l'étranger, j'ai pu construire ma villa grâce à ImmoTrust. Leur suivi de chantier à distance est remarquable.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-accent">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Témoignages</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            Ce que nos clients <span className="text-primary">disent de nous</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-2xl p-8 hover-lift">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed italic">"{t.text}"</p>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
