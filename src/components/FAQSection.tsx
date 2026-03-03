import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I book a taxi in Nainital?",
    a: "You can book a taxi in Nainital by calling us at 9639129933, messaging on WhatsApp, or using the booking form on our website. We offer instant confirmation and 24/7 availability for local rides, outstation trips, and sightseeing tours.",
  },
  {
    q: "What is the taxi fare from Delhi to Nainital?",
    a: "The taxi fare from Delhi to Nainital starts from ₹4,500 for a sedan (one-way). SUV rates start from ₹6,500 and Tempo Traveller from ₹9,000. Prices may vary by season. Contact us for exact quotes based on your travel date and vehicle preference.",
  },
  {
    q: "Do you provide Jim Corbett safari cabs?",
    a: "Yes, we provide dedicated safari cabs for Jim Corbett National Park. Our drivers are experienced with park routes, entry gates, and safari timings. We offer Gypsys and Canters for jungle safari. Book in advance during peak season (November–June).",
  },
  {
    q: "Is airport transfer available to Nainital?",
    a: "Yes, we offer airport transfers from Pantnagar Airport and Delhi IGI Airport to Nainital, Ramnagar, and Jim Corbett. Early morning and late night pickups are available. Our drivers track flight timings so you never have to wait.",
  },
  {
    q: "What areas do you serve in Uttarakhand?",
    a: "We serve all major destinations in Uttarakhand including Nainital, Ramnagar, Haldwani, Dehradun, Haridwar, Rishikesh, Mussoorie, and Jim Corbett. We also cover long-distance routes to Delhi NCR, Bareilly, and Lucknow.",
  },
  {
    q: "Can I book a round-trip outstation taxi?",
    a: "Absolutely! We offer both one-way and round-trip outstation taxi services across Uttarakhand and North India. Round-trip bookings come with better rates. Popular routes include Nainital–Delhi, Ramnagar–Dehradun, and Haldwani–Haridwar.",
  },
  {
    q: "Do you offer corporate or bulk taxi bookings?",
    a: "Yes, we offer special corporate and B2B taxi packages with dedicated fleet allocation, monthly billing, and priority booking. Ideal for businesses, hotels, and travel agencies operating in Nainital, Jim Corbett, and Uttarakhand.",
  },
  {
    q: "Are your taxis available 24/7?",
    a: "Yes, MSB Taxi Service operates 24 hours a day, 7 days a week. Whether you need an early morning airport pickup, a late-night drop, or an emergency ride — just call 9639129933 and we'll be there.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-16 md:py-24 bg-secondary">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold">
          Frequently Asked <span className="text-gradient-yellow">Questions</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Everything you need to know about booking a taxi in Nainital, Jim Corbett & Uttarakhand.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl border border-border px-5"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-card-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
