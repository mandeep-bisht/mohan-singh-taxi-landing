import { Shield, Clock, IndianRupee, MapPinned, Star, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock taxi service in Nainital, Jim Corbett & across Uttarakhand. Early morning or late night — we're always ready." },
  { icon: Shield, title: "Verified & Safe Drivers", desc: "All our drivers are locally experienced, background-verified, and trained for hill roads, highway drives, and safari routes." },
  { icon: IndianRupee, title: "Best Price Guarantee", desc: "Transparent pricing with no hidden charges. Get the most affordable taxi rates for Nainital, Corbett, and outstation trips." },
  { icon: MapPinned, title: "Local Expertise", desc: "Our drivers know every route — from Nainital's hill roads to Corbett's safari zones. No GPS needed, just local knowledge." },
  { icon: Star, title: "4.8★ Rated Service", desc: "Trusted by 350+ travellers. Rated among the best cab services in Nainital and Jim Corbett for comfort and reliability." },
  { icon: Headphones, title: "Instant Booking Support", desc: "Book via phone call, WhatsApp, or our website. Get instant confirmation and real-time ride updates." },
];

const WhyChooseSection = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold">
          Why Choose <span className="text-gradient-yellow">MSB Taxi</span> in Uttarakhand?
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          From Nainital sightseeing to Jim Corbett safari transfers — here's why hundreds of travellers trust MSB Taxi Service.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all hover:shadow-md"
          >
            <div className="w-11 h-11 rounded-lg bg-yellow-gradient flex items-center justify-center mb-3">
              <r.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-lg text-card-foreground">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
