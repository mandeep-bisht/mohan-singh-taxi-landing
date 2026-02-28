import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-yellow-gradient flex items-center justify-center text-4xl font-heading font-bold text-primary-foreground">
            MB
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Meet <span className="text-gradient-yellow">Mohan Singh Bisht</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            With years of experience in the transportation industry, Mohan Singh Bisht provides reliable and comfortable taxi services across North India. Your safety and satisfaction are our top priorities.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:7983851263">
              <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary hover:text-primary-foreground">
                <Phone className="w-5 h-5 mr-2" /> 7983851263
              </Button>
            </a>
            <a href="tel:9639129933">
              <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary hover:text-primary-foreground">
                <Phone className="w-5 h-5 mr-2" /> 9639129933
              </Button>
            </a>
            <a href="https://wa.me/919639129933" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-taxi-dark-foreground font-semibold">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
