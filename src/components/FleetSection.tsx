import { Car } from "lucide-react";
import { motion } from "framer-motion";

const fleet = [
  { name: "Sedan", desc: "Swift Dzire, Honda Amaze & more. Ideal for 1–4 passengers.", capacity: "4 Passengers", icon: "🚗" },
  { name: "SUV", desc: "Innova Crysta, Ertiga & more. Perfect for families and groups.", capacity: "6–7 Passengers", icon: "🚙" },
  { name: "Tempo Traveller", desc: "12–16 seater for group outings, pilgrimages, and events.", capacity: "12–16 Passengers", icon: "🚐" },
];

const FleetSection = () => (
  <section id="fleet" className="py-16 md:py-24 bg-secondary">
    <div className="container">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold">Our <span className="text-gradient-yellow">Fleet</span></h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Choose the perfect ride for your journey.</p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {fleet.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary/40 transition-all hover:shadow-lg"
          >
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="font-heading font-bold text-xl text-card-foreground">{f.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
              <Car className="w-3 h-3" /> {f.capacity}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FleetSection;
