"use client";

import { ArrowRight, ArrowLeft, Home, Building2, Sparkles, Truck, HeartPulse, GraduationCap, PartyPopper, Layers, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
const schoolCleaningImg = "/newimages/earlychildhood.jpg";
const commercialCleaningImg = "/newimages/Commercial Cleaning.jpg";
const earlyChildhoodCleaningAltImg = "/newimages/EarlyChildhooCleaningD!.jpg";
const kitchenCleaningImg = "/newimages/KitchenCleaning.jpg";
const healthcareCleaningImg = "/newimages/healthcare.jpeg";
const houseCleaningImg = "/newimages/HouseCleaningFS.jpg";
const cleanerPortraitImg = "/newimages/The_person_in_the_image_202604290815.jpg";

const services = [
  {
    icon: GraduationCap,
    title: "Educational Cleaning",
    description: "Keep schools and educational facilities clean for students and staff.",
    image: schoolCleaningImg,
  },
  {
    icon: Truck,
    title: "Builders Cleaning",
    description: "Post-construction cleaning to make your newly built space spotless and move-in ready.",
    image: commercialCleaningImg,
  },
  {
    icon: HeartPulse,
    title: "Healthcare Cleaning",
    description: "Specialized sanitization services for medical facilities and healthcare environments.",
    image: healthcareCleaningImg,
  },
  {
    icon: PartyPopper,
    title: "Event & Venue Cleaning",
    description: "Pre and post-event cleaning for venues, stadiums, and conference centers.",
    image: commercialCleaningImg,
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    description: "Professional cleaning for office spaces to keep your environment productive.",
    image: cleanerPortraitImg,
  },
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "We provide you the best service quality regarding residential needs.",
    image: houseCleaningImg,
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough deep cleaning for those hard-to-reach areas and tough stains.",
    image: kitchenCleaningImg,
  },
  {
    icon: Layers,
    title: "Carpet Cleaning",
    description: "Deep carpet cleaning to remove stains and refresh your floors.",
    image: earlyChildhoodCleaningAltImg,
  },
];

const ServicesSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      containScroll: "trimSnaps",
      dragFree: true,
      loop: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:ml-[max(1rem,calc((100vw-80rem)/2+2rem))] lg:w-[calc(100vw-max(1rem,calc((100vw-80rem)/2+2rem)))] lg:px-0 lg:pr-0">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-12">
          {/* Left side - Title and Navigation */}
          <div className="relative z-20 flex w-full flex-col justify-center lg:max-w-[calc((80rem-4rem)*4/12)] lg:shrink-0">
            {/* Background mask to hide overlapping carousel items (only active on large screens) */}
            <div className="hidden lg:block absolute inset-y-[-50vh] -right-6 w-[100vw] bg-background z-[-1]" />
            <div className="mb-2">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wider">
                <Check className="w-4 h-4" strokeWidth={4} />
                OUR SERVICES
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-10">
              What<br />
              <span className="italic font-serif">services</span> we<br />
              provide
            </h2>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${canScrollPrev
                  ? "bg-foreground text-background border-foreground hover:bg-transparent hover:text-foreground"
                  : "border-muted-foreground/20 text-muted-foreground cursor-not-allowed"
                  }`}
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${canScrollNext
                  ? "bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background"
                  : "border-muted-foreground/20 text-muted-foreground cursor-not-allowed"
                  }`}
                aria-label="Next slide"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right side - Carousel */}
          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="flex-[0_0_300px] sm:flex-[0_0_350px] mr-8"
                  >
                    <div className="relative bg-card rounded-[2rem] shadow-xl overflow-visible group h-full flex flex-col">
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden rounded-t-[2rem]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>

                      {/* Floating Action Button */}
                      <Link
                        href="/services"
                        className="absolute right-8 top-56 z-20 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/90"
                      >
                        <ArrowRight className="w-6 h-6 text-primary-foreground" />
                      </Link>

                      {/* Content */}
                      <div className="p-8 pt-10 flex-1 flex flex-col relative">
                        <h3 className="text-xl font-bold text-foreground mb-3 pr-4">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                          {service.description}
                        </p>

                        {/* Icon Box */}
                        <div className="mt-auto">
                          <div className="w-12 h-12 rounded-xl border border-border flex items-center justify-center bg-background">
                            <service.icon className="w-6 h-6 text-foreground" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
