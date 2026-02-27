import { Car, Map, Plane, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Car, title: "Local Rides", desc: "Comfortable rides within your city for errands, meetings, or leisure." },
  { icon: Map, title: "Outstation Trips", desc: "Travel between cities with ease. One-way and round-trip available." },
  { icon: Plane, title: "Airport Transfers", desc: "Timely pickups and drops to all major airports." },
  { icon: Building2, title: "Corporate Travel", desc: "Reliable transport solutions for businesses of all sizes." },
];

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24">
    <div className="container">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold">Our <span className="text-gradient-yellow">Services</span></h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">From daily commutes to long-distance travel, we've got you covered.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all hover:shadow-lg"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-yellow-gradient transition-colors">
              <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading font-bold text-lg text-card-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
