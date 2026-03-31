import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="container mx-auto section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="ImmoTrust" className="h-10 w-10" />
              <span className="font-display text-xl font-bold">
                Immo<span className="text-primary">Trust</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Votre nouveau partenaire de confiance au Cameroun. Immobilier, mobilier, électroménager, décoration et matériaux de construction.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Liens rapides</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
              <Link to="/biens" className="hover:text-primary transition-colors">Nos biens</Link>
              <Link to="/carte" className="hover:text-primary transition-colors">Carte</Link>
              <Link to="/#services" className="hover:text-primary transition-colors">Services</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Nos services</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <span>Vente de terrains</span>
              <span>Location d'appartements</span>
              <span>Construction</span>
              <span>Gestion immobilière</span>
              <span>Conseils en investissement</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                Douala, Cameroun
              </div>
              <a href="tel:+237690411527" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                +237 690 411 527
              </a>
              <a href="https://wa.me/237690411527" className="flex items-center gap-2 hover:text-primary transition-colors">
                <MessageCircle className="h-4 w-4 text-primary shrink-0" />
                WhatsApp
              </a>
              <a href="mailto:contact@immotrust.cm" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                contact@immotrust.cm
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} ImmoTrust. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
