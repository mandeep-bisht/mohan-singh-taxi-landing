import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Rajesh Kumar", text: "Excellent service! The driver was punctual and the car was spotless. Highly recommend for outstation trips.", rating: 5 },
  { name: "Priya Sharma", text: "Booked for Delhi to Dehradun trip. Very comfortable ride and fair pricing. Will use again!", rating: 5 },
  { name: "Amit Verma", text: "Great corporate service. Our team uses MSB Taxi regularly for airport transfers. Always reliable.", rating: 5 },
  { name: "Sneha Gupta", text: "Used their service for a family trip to Nainital. Driver was very helpful and car was clean. Thank you!", rating: 4 },
];

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold">What Our <span className="text-gradient-yellow">Customers</span> Say</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className={`w-4 h-4 ${j < r.rating ? "text-primary fill-primary" : "text-muted"}`} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-4">"{r.text}"</p>
            <p className="font-heading font-semibold text-sm text-card-foreground">{r.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
