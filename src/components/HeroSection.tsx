import { useState } from "react";
import { MapPin, Users, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const cities = ["Delhi", "Noida", "Gurgaon", "Agra", "Jaipur", "Lucknow", "Dehradun", "Haridwar", "Rishikesh", "Chandigarh", "Mussoorie", "Nainital"];

const HeroSection = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [passengers, setPassengers] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup || !destination || !passengers || !date) {
      toast.error("Please fill in all fields");
      return;
    }
    const msg = `Hi, I'd like to book a taxi.\nPickup: ${pickup}\nDestination: ${destination}\nPassengers: ${passengers}\nDate: ${date}`;
    window.open(`https://wa.me/919639129933?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Premium taxi on highway" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-taxi-dark/75" />
      </div>

      <div className="container relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-taxi-dark-foreground leading-tight">
              Book Your Ride{" "}
              <span className="text-gradient-yellow">Anytime, Anywhere</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-taxi-dark-foreground/70 max-w-lg">
              Safe • Reliable • Affordable Outstation & Local Taxi Service
            </p>
            <div className="mt-6 flex gap-3">
              <a href="tel:9639129933">
                <Button variant="outline" className="border-primary/40 text-taxi-dark-foreground hover:bg-primary hover:text-primary-foreground">
                  Call Now
                </Button>
              </a>
              <a href="https://wa.me/919639129933" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-600 hover:bg-green-700 text-taxi-dark-foreground font-semibold">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <form
              onSubmit={handleSubmit}
              className="bg-card/95 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-border"
            >
              <h2 className="font-heading text-xl font-bold text-card-foreground mb-5">Book Your Taxi</h2>

              <div className="space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-primary" />
                  <Select value={pickup} onValueChange={setPickup}>
                    <SelectTrigger className="pl-10"><SelectValue placeholder="Pickup City" /></SelectTrigger>
                    <SelectContent>{cities.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                  </Select>
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-destructive" />
                  <Select value={destination} onValueChange={setDestination}>
                    <SelectTrigger className="pl-10"><SelectValue placeholder="Destination City" /></SelectTrigger>
                    <SelectContent>{cities.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                  </Select>
                </div>

                <div className="relative">
                  <Users className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Select value={passengers} onValueChange={setPassengers}>
                    <SelectTrigger className="pl-10"><SelectValue placeholder="Passengers" /></SelectTrigger>
                    <SelectContent>
                      {[1,2,3,4,5,6,7,8].map(n => <SelectItem key={n} value={String(n)}>{n} Passenger{n > 1 ? "s" : ""}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="relative">
                  <CalendarDays className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="datetime-local"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Button type="submit" className="w-full bg-yellow-gradient text-primary-foreground font-bold text-lg h-12 shadow-lg shadow-primary/25">
                  Book Now
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
