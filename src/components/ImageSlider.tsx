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

const images = [pexels1, pexels2, pexels3, pexels4, pexels5, pexels6, pexels7, pexels8, pexels9, pexels10, pexels11];

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
            {images.map((src, i) => (
              <CarouselItem key={i}>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    className="w-full h-[300px] md:h-[450px] object-cover"
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
