import { Clock, ShieldCheck, Sparkles, BadgeIndianRupee } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Clock, title: "24/7 Service", desc: "Available round the clock for your convenience." },
  { icon: ShieldCheck, title: "Professional Drivers", desc: "Trained, verified, and courteous drivers." },
  { icon: Sparkles, title: "Clean & Sanitized", desc: "Regularly sanitized cars for safe travel." },
  { icon: BadgeIndianRupee, title: "Best Price Guarantee", desc: "Competitive rates with no hidden charges." },
];

const FeaturesSection = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-border"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-yellow-gradient flex items-center justify-center">
              <f.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-lg text-card-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
