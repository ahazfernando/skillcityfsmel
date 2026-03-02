"use client";

import { ArrowRight, ArrowLeft, Home, Building2, Sparkles, Truck, HeartPulse, GraduationCap, PartyPopper, Layers, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import cleanHomeImg from "@/assets/clean-home.jpg";
import deepCleaningImg from "@/assets/deep-cleaning.jpg";
import moveCleaningImg from "@/assets/move-cleaning.jpg";
import healthcareCleaningImg from "@/assets/healthcare-cleaning.jpg";
import eventCleaningImg from "@/assets/event-cleaning.jpg";
import carpetCleaningImg from "@/assets/carpet-cleaning.jpg";

const educationalCleaningImg = "/widgetservices/WhatsApp Image 2026-01-14 at 7.14.07 PM.jpeg";
const officeCleaningWidgetImg = "/widgetservices/WhatsApp Image 2026-01-14 at 7.14.08 PM (1).jpeg";
const buildersCleaningImg = "/widgetservices/IMG_6798.jpg";
const carpetCleaningWidgetImg = "/widgetservices/WhatsApp Image 2026-01-14 at 7.26.05 PM (1).jpeg";

const services = [
  {
    icon: GraduationCap,
    title: "Educational Cleaning",
    description: "Keep schools and educational facilities clean for students and staff.",
    image: educationalCleaningImg,
  },
  {
    icon: Truck,
    title: "Builders Cleaning",
    description: "Post-construction cleaning to make your newly built space spotless and move-in ready.",
    image: buildersCleaningImg,
  },
  {
    icon: Home,
    title: "House Cleaning",
    description: "Regular and thorough house cleaning services tailored to keep your home fresh and tidy.",
    image: cleanHomeImg,
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
    image: officeCleaningWidgetImg,
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    description: "Professional cleaning for office spaces to keep your environment productive.",
    image: "/ourservices/SkillCityOfficeCleaning.png",
  },
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "We provide you the best service quality regarding residential needs.",
    image: cleanHomeImg,
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough deep cleaning for those hard-to-reach areas and tough stains.",
    image: deepCleaningImg,
  },
  {
    icon: Layers,
    title: "Carpet Cleaning",
    description: "Deep carpet cleaning to remove stains and refresh your floors.",
    image: carpetCleaningWidgetImg,
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
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left side - Title and Navigation */}
          <div className="lg:col-span-4 flex flex-col justify-center z-20 relative">
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
          <div className="lg:col-span-8 min-w-0">
            <div className="overflow-visible" ref={emblaRef}>
              <div className="flex gap-8">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="flex-shrink-0 w-[300px] sm:w-[350px]"
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
