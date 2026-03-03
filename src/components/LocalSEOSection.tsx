import { MapPin, Car, TreePine, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const locations = [
  {
    icon: TreePine,
    title: "Taxi in Nainital",
    desc: "Explore the Queen of Hills with our reliable taxi service. Local sightseeing, Naini Lake tours, Mall Road transfers, and day trips to Bhimtal, Sattal & Mukteshwar. Affordable rates with experienced hill drivers.",
    keywords: "Nainital taxi, cab in Nainital, Nainital local sightseeing taxi",
  },
  {
    icon: Car,
    title: "Taxi in Jim Corbett",
    desc: "Book safari cabs and local transport in Jim Corbett National Park. We cover Dhikuli, Bijrani, Jhirna, and Dhela zones. Expert drivers who know every trail. Gypsy and Canter safari bookings available.",
    keywords: "Jim Corbett taxi, Corbett safari cab, Dhikuli taxi service",
  },
  {
    icon: MapPin,
    title: "Taxi in Ramnagar",
    desc: "Ramnagar is the gateway to Jim Corbett. We offer local rides, railway station pickups, and connections to Nainital, Haldwani & Delhi. Available 24/7 at the best rates in town.",
    keywords: "Ramnagar taxi, cab in Ramnagar, Ramnagar to Nainital taxi",
  },
  {
    icon: Plane,
    title: "Airport Transfer to Nainital",
    desc: "Hassle-free airport transfers from Pantnagar Airport and Delhi IGI Airport. Flight tracking, on-time pickups, and comfortable AC vehicles. The easiest way to reach Nainital and Jim Corbett from the airport.",
    keywords: "airport transfer Nainital, Pantnagar airport taxi, Delhi to Nainital cab",
  },
];

const LocalSEOSection = () => (
  <section id="locations" className="py-16 md:py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold">
          Taxi Services Across{" "}
          <span className="text-gradient-yellow">Uttarakhand</span>
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Whether you need a cab near you in Nainital, a safari taxi in Jim Corbett, or an outstation ride across Uttarakhand — MSB Taxi has you covered.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {locations.map((loc, i) => (
          <motion.article
            key={loc.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all hover:shadow-lg"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <loc.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-card-foreground">
              {loc.title}
            </h3>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
              {loc.desc}
            </p>
            <a href="#home" className="inline-block mt-4">
              <Button size="sm" className="bg-yellow-gradient text-primary-foreground font-semibold">
                Book Now
              </Button>
            </a>
          </motion.article>
        ))}
      </div>

      {/* Google Maps Embed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 rounded-2xl overflow-hidden border border-border shadow-lg"
      >
        <h3 className="sr-only">Our Location - MSB Taxi Service Ramnagar</h3>
        <iframe
          title="MSB Taxi Service Location - Ramnagar, Uttarakhand"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55888.01952028886!2d79.07!3d29.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a13f4b0b0b0b1%3A0x0!2sRamnagar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </div>
  </section>
);

export default LocalSEOSection;
