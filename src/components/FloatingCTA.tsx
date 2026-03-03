import { Phone, MessageCircle } from "lucide-react";

const FloatingCTA = () => (
  <>
    {/* Floating WhatsApp button */}
    <a
      href="https://wa.me/919639129933?text=Hi%2C%20I%20want%20to%20book%20a%20taxi"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-4 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all md:bottom-6"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>

    {/* Sticky mobile booking bar */}
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-taxi-dark/95 backdrop-blur-md border-t border-primary/20 px-4 py-2 flex items-center gap-2">
      <a href="tel:9639129933" className="flex-1">
        <button className="w-full flex items-center justify-center gap-2 bg-yellow-gradient text-primary-foreground font-bold py-2.5 rounded-lg text-sm">
          <Phone className="w-4 h-4" /> Call Now
        </button>
      </a>
      <a href="#home" className="flex-1">
        <button className="w-full flex items-center justify-center gap-2 bg-card text-card-foreground font-bold py-2.5 rounded-lg text-sm border border-border">
          Book Online
        </button>
      </a>
    </div>
  </>
);

export default FloatingCTA;
