import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns";
import { motion } from "framer-motion";

const testimonials: Testimonial[] = [
  {
    text: "Excellent service! The driver was punctual and the car was spotless. Highly recommend for outstation trips.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Rajesh Kumar",
    role: "Business Owner",
  },
  {
    text: "Booked for Delhi to Dehradun trip. Very comfortable ride and fair pricing. Will use again!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Priya Sharma",
    role: "Teacher",
  },
  {
    text: "Great corporate service. Our team uses MSB Taxi regularly for airport transfers. Always reliable.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Amit Verma",
    role: "Corporate Manager",
  },
  {
    text: "Used their service for a family trip to Nainital. Driver was very helpful and car was clean. Thank you!",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Sneha Gupta",
    role: "Homemaker",
  },
  {
    text: "Best taxi service in the region. I've tried many but MSB stands out for professionalism and comfort.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Vikram Singh",
    role: "Government Officer",
  },
  {
    text: "Booked a Tempo Traveller for a group trip. Everyone was impressed with the vehicle condition and driver's knowledge of routes.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Anita Rawat",
    role: "Travel Coordinator",
  },
  {
    text: "Smooth airport transfer at 4 AM. Driver was already waiting. That's the kind of reliability you can count on.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Qureshi",
    role: "Software Engineer",
  },
  {
    text: "We use MSB Taxi for all our client pickups. Never had a complaint — always professional and on time.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Kavita Joshi",
    role: "HR Director",
  },
  {
    text: "Travelled from Haridwar to Rishikesh multiple times. Affordable rates and well-maintained cars every single time.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Suresh Negi",
    role: "Shop Owner",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 md:py-24 bg-secondary overflow-hidden">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-2">
          Testimonials
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          What Our <span className="text-gradient-yellow">Customers</span> Say
        </h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          See what hundreds of happy travellers have to say about us.
        </p>
      </motion.div>

      <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px]">
        <TestimonialsColumn testimonials={firstColumn} duration={15} className="hidden md:block" />
        <TestimonialsColumn testimonials={secondColumn} duration={19} />
        <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
