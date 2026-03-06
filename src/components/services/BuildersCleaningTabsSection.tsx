"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Hammer, Sparkles, Droplets, Wrench } from "lucide-react";
import Link from "next/link";

type TabService = {
    id: string;
    label: string;
    title: string;
    subtitle: string;
    description: string;
    bullets: string[];
    image: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    ctaText: string;
};

const tabServices: TabService[] = [
    {
        id: "initial-clean",
        label: "Initial Builders Clean",
        title: "Clearing the dust and debris effectively.",
        subtitle: "Heavy-duty cleaning for immediate post-construction.",
        description:
            "Our initial clean is designed to remove the heaviest dirt, dust, and debris left behind by contractors. We make the site safe and prepare it for final detailing.",
        bullets: [
            "Removal of large debris, protective films, and stickers",
            "Sweep and vacuum of pervasive construction dust",
            "Scraping paint splashes and plaster from hard surfaces",
            "Initial glass and frame wipe down",
        ],
        image: "/home/257579cd91eb4c7b3d48193da76ae1d8.jpg",
        icon: Hammer,
        ctaText: "Book an initial clean",
    },
    {
        id: "final-clean",
        label: "Final Sparkle Clean",
        title: "Handover-ready perfection.",
        subtitle: "Detailed polishing to showcase the finished build.",
        description:
            "Our final sparkle clean is the finishing touch before handover. We meticulously polish every surface, ensuring the property looks immaculate for clients and buyers.",
        bullets: [
            "Detailed window cleaning (interior and exterior)",
            "Polishing of all fixtures, fittings, and stainless steel",
            "Thorough vacuuming and professional floor washing",
            "Cabinet and drawer detailing inside and out",
        ],
        image: "/home/257579cd91eb4c7b3d48193da76ae1d8.jpg",
        icon: Sparkles,
        ctaText: "Schedule a sparkle clean",
    },
    {
        id: "exterior-wash",
        label: "Exterior Wash Down",
        title: "Curb appeal from day one.",
        subtitle: "High-pressure cleaning for exterior surfaces.",
        description:
            "Construction leaves the exterior just as messy as the interior. We utilize pressure washing and specialized equipment to remove dirt and grime from facades and flatwork.",
        bullets: [
            "High-pressure cleaning of driveways and walkways",
            "Washing down of exterior walls and brickwork",
            "Gutter clearing and downpipe flushing",
            "Removal of exterior paint spills and mortar drops",
        ],
        image: "/home/257579cd91eb4c7b3d48193da76ae1d8.jpg",
        icon: Droplets,
        ctaText: "Get an exterior wash quote",
    },
    {
        id: "post-renovation",
        label: "Post-Renovation Clean",
        title: "Protecting the rest of your property.",
        subtitle: "Targeted cleaning to contain renovation dust.",
        description:
            "Renovating a single room can spread dust throughout a home or office. We isolate the mess and conduct a thorough clean of the renovated area and surrounding affected zones.",
        bullets: [
            "Dust containment and HVAC vent wipedown to prevent spread",
            "Detailed vacuuming of carpets and upholstery in affected areas",
            "Sanitisation of all new installations and fixtures",
            "Safe disposal of minor leftover renovation materials",
        ],
        image: "/home/257579cd91eb4c7b3d48193da76ae1d8.jpg",
        icon: Wrench,
        ctaText: "Book renovation cleaning",
    },
];

export const BuildersCleaningTabsSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 xl:px-8 max-w-7xl">
                {/* Heading */}
                <div className="mb-10 md:mb-16">
                    <span className="inline-block text-green-600 font-bold text-sm tracking-wider uppercase mb-3">
                        In-depth services
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                        How Skill City Facility Solutions
                        <br />
                        <span className="text-green-600">handles builders cleaning in detail</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed">
                        Switch between services to see exactly what is included, how we operate on-site, and what you can
                        expect when you partner with us for your post-construction cleaning needs.
                    </p>
                </div>

                {/* Tabs */}
                <Tabs defaultValue={tabServices[0].id} className="w-full">
                    <TabsList className="w-full h-auto flex flex-wrap justify-start md:justify-center lg:justify-between gap-2 md:gap-3 bg-gray-50 p-2 rounded-2xl md:rounded-full border border-gray-100">
                        {tabServices.map((service) => (
                            <TabsTrigger
                                key={service.id}
                                value={service.id}
                                className="flex-1 min-w-[140px] rounded-xl md:rounded-full px-4 py-3 text-sm font-semibold data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=active]:shadow-md text-gray-600 hover:text-gray-900 transition-all"
                            >
                                {service.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {tabServices.map((service) => {
                        const Icon = service.icon;
                        return (
                            <TabsContent key={service.id} value={service.id} className="mt-8 md:mt-12 focus-visible:ring-0 focus-visible:outline-none">
                                <div className="grid lg:grid-cols-2 gap-10 items-stretch bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 p-6 md:p-10">
                                    {/* Left – Copy */}
                                    <div className="flex flex-col justify-between gap-8 py-2">
                                        <div>
                                            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 mb-6">
                                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-600">
                                                    <Icon className="w-3.5 h-3.5 text-white" />
                                                </span>
                                                <span className="text-sm font-bold text-green-700">
                                                    {service.label}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-lg font-medium text-green-600 mb-4">
                                                {service.subtitle}
                                            </p>
                                            <p className="text-base text-gray-500 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>

                                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100/50">
                                            <h4 className="text-base font-bold text-gray-900 mb-4">
                                                What this service includes
                                            </h4>
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {service.bullets.map((bullet) => (
                                                    <div key={bullet} className="flex items-start gap-3">
                                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                                                        <p className="text-sm text-gray-600 leading-relaxed">
                                                            {bullet}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <Button asChild className="w-full sm:w-auto self-start rounded-full bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-base font-medium shadow-lg shadow-green-600/20 transition-all">
                                            <Link href="/contact-us">
                                                {service.ctaText}
                                            </Link>
                                        </Button>
                                    </div>

                                    {/* Right – Visual */}
                                    <div className="relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[400px] lg:min-h-full bg-gray-100 order-first lg:order-last">
                                        <Image
                                            src={service.image}
                                            alt={service.label}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </TabsContent>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
};
