import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import pexels1 from "@/assets/pexels-1.jpg";

const ScrollShowcase = () => {
  return (
    <section className="bg-background overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              Experience Premium
              <br />
              <span className="text-gradient-yellow text-4xl md:text-6xl mt-2 inline-block">
                Travel Like Never Before
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mt-2">
              From airport transfers to outstation trips — ride in comfort, style, and safety with Mohan Singh Bisht Taxi Service.
            </p>
          </div>
        }
      >
        <img
          src={pexels1}
          alt="Premium taxi fleet by Mohan Singh Bisht Taxi Service"
          className="mx-auto rounded-2xl object-cover h-full w-full"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
};

export default ScrollShowcase;
