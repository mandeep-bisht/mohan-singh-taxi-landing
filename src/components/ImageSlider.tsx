import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import pexels1 from "@/assets/pexels-1.jpg";
import pexels2 from "@/assets/pexels-2.jpg";
import pexels3 from "@/assets/pexels-3.jpg";
import pexels4 from "@/assets/pexels-4.jpg";
import pexels5 from "@/assets/pexels-5.jpg";
import pexels6 from "@/assets/pexels-6.jpg";
import pexels7 from "@/assets/pexels-7.jpg";
import pexels8 from "@/assets/pexels-8.jpg";
import pexels9 from "@/assets/pexels-9.jpg";
import pexels10 from "@/assets/pexels-10.jpg";
import pexels11 from "@/assets/pexels-11.jpg";

const images = [
  { src: pexels1, alt: "MSB Taxi sedan on Nainital hill road" },
  { src: pexels2, alt: "Comfortable SUV for Jim Corbett safari transfer" },
  { src: pexels3, alt: "Airport taxi pickup for Nainital trip" },
  { src: pexels4, alt: "Outstation taxi on Delhi to Nainital highway" },
  { src: pexels5, alt: "Clean sanitized cab interior for safe travel" },
  { src: pexels6, alt: "Tempo Traveller for group trip to Uttarakhand" },
  { src: pexels7, alt: "Taxi near Naini Lake Nainital" },
  { src: pexels8, alt: "Ramnagar taxi service near Jim Corbett gate" },
  { src: pexels9, alt: "Professional driver for corporate taxi service" },
  { src: pexels10, alt: "Scenic road trip taxi in Uttarakhand hills" },
  { src: pexels11, alt: "Reliable cab service for Nainital sightseeing" },
];

const ImageSlider = () => (
  <section id="gallery" className="py-16 bg-secondary scroll-mt-20">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-10">
        Our <span className="text-gradient-yellow">Gallery</span>
      </h2>
      <div className="max-w-4xl mx-auto px-12">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 2500, stopOnInteraction: false })]}
        >
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem key={i}>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-[300px] md:h-[450px] object-cover"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  </section>
);

export default ImageSlider;
