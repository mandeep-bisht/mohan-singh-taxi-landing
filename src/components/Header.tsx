import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Locations", href: "#locations" },
  { label: "Fleet", href: "#fleet" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-taxi-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="font-heading font-bold text-lg md:text-xl text-taxi-dark-foreground">
          <span className="text-gradient-yellow">MSB</span> Taxi
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-taxi-dark-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:9639129933">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Call Me
            </Button>
          </a>
          <a href="#home">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Now
            </Button>
          </a>
        </div>

        <button className="md:hidden text-taxi-dark-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-taxi-dark/95 backdrop-blur-md border-t border-primary/10 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3 text-sm text-taxi-dark-foreground/80 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a href="#home" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-yellow-gradient font-semibold text-primary-foreground">Book Now</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
