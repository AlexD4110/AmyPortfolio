// src/components/VolunteerCarouselComponent.tsx

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type EmblaOptionsType from "embla-carousel-react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Slide = {
  title: string;
  description: string;
  imageUrl: string;
};

type CarouselProps = {
  opts?: EmblaOptionsType;
  slides: Slide[];
  className?: string;
};

export function VolunteerCarouselComponent({ opts, slides, className }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(opts);
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(false);

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={cn("relative", className)}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, index) => (
            <div className="relative flex-[0_0_100%] min-w-0" key={index}>
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: "center 45%"}}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{slide.title}</h3>
                  <p className="text-white">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white/90"
        disabled={prevBtnDisabled}
        onClick={scrollPrev}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white/90"
        disabled={nextBtnDisabled}
        onClick={scrollNext}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  );
}

export default VolunteerCarouselComponent;