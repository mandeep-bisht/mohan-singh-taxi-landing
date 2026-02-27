import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTABanner = () => (
  <section className="py-16 md:py-20 bg-yellow-gradient">
    <div className="container text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary-foreground">
          Call or WhatsApp Now to Book Your Ride
        </h2>
        <p className="mt-3 text-primary-foreground/80 text-lg">Available 24/7 — Get an instant quote!</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:9639129933">
            <Button size="lg" className="bg-taxi-dark text-taxi-dark-foreground hover:bg-taxi-dark/90 font-bold">
              <Phone className="w-5 h-5 mr-2" /> Call 9639129933
            </Button>
          </a>
          <a href="https://wa.me/919639129933" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-taxi-dark-foreground font-bold">
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Now
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
