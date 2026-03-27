import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-primary to-orange-dark rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+237690411527"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-7 py-3.5 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <Phone className="h-5 w-5" />
              Demander un devis gratuit
            </a>
            <a
              href="https://wa.me/237690411527"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
