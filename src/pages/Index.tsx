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
import ScrollShowcase from "@/components/ScrollShowcase";
import WhyChooseSection from "@/components/WhyChooseSection";
import LocalSEOSection from "@/components/LocalSEOSection";
import FAQSection from "@/components/FAQSection";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <ImageSlider />
      <ScrollShowcase />
      <FeaturesSection />
      <WhyChooseSection />
      <ServicesSection />
      <LocalSEOSection />
      <B2BSection />
      <FleetSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </main>
    <Footer />
    <FloatingCTA />
  </>
);

export default Index;
