import { Phone, MessageCircle, MapPin } from "lucide-react";

const areas = ["All India", "Dhikuli", "Ramnagar", "Haldwani", "Nainital", "Delhi", "Noida", "Gurgaon", "Dehradun", "Haridwar", "Rishikesh"];

const Footer = () => (
  <footer id="contact" className="bg-taxi-dark text-taxi-dark-foreground pt-12 pb-6">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <h3 className="font-heading font-bold text-xl mb-3">
            <span className="text-gradient-yellow">MSB</span> Taxi
          </h3>
          <p className="text-sm text-taxi-dark-foreground/60">Mohan Singh Bisht Taxi Service — Safe, reliable, and affordable travel across North India.</p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-taxi-dark-foreground/60">
            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#fleet" className="hover:text-primary transition-colors">Fleet</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-3">Service Areas</h4>
          <div className="flex flex-wrap gap-2">
            {areas.map(a => (
              <span key={a} className="text-xs bg-taxi-dark-foreground/10 px-2 py-1 rounded-full text-taxi-dark-foreground/60">
                <MapPin className="w-3 h-3 inline mr-0.5" />{a}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-3">Contact</h4>
          <div className="space-y-3">
            <a href="tel:9639129933" className="flex items-center gap-2 text-sm text-taxi-dark-foreground/60 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> 9639129933
            </a>
            <a href="tel:7983851263" className="flex items-center gap-2 text-sm text-taxi-dark-foreground/60 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> 7983851263
            </a>
            <a href="https://wa.me/919639129933" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-taxi-dark-foreground/60 hover:text-green-400 transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp Chat
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-taxi-dark-foreground/10 pt-6 text-center text-xs text-taxi-dark-foreground/40">
        © {new Date().getFullYear()} Mohan Singh Bisht Taxi Service. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
