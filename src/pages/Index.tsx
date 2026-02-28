import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import B2BSection from "@/components/B2BSection";
import FleetSection from "@/components/FleetSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <ImageSlider />
      <FeaturesSection />
      <ServicesSection />
      <B2BSection />
      <FleetSection />
      <AboutSection />
      <TestimonialsSection />
      <CTABanner />
    </main>
    <Footer />
  </>
);

export default Index;
