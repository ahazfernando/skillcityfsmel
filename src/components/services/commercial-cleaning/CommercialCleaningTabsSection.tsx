"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Briefcase, Store, Factory, Stethoscope } from "lucide-react";
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
        id: "office-cleaning",
        label: "Office Cleaning",
        title: "A productive, pristine workspace.",
        subtitle: "Daily or weekly maintenance for professional environments.",
        description:
            "We ensure your office remains a healthy, welcoming environment for staff and visitors. From boardrooms to breakrooms, our teams operate discreetly and efficiently.",
        bullets: [
            "Workstation and desk sanitisation",
            "Emptying bins and recycling management",
            "Kitchen and breakroom deep cleaning",
            "Restroom sanitisation and restocking",
        ],
        image: "/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.15 PM (1).jpeg",
        icon: Briefcase,
        ctaText: "Get an office cleaning quote",
    },
    {
        id: "retail-cleaning",
        label: "Retail Space Cleaning",
        title: "Make a lasting first impression.",
        subtitle: "Immaculate presentation for your storefront.",
        description:
            "In retail, cleanliness directly impacts sales. We keep your shop floors shining, displays dust-free, and fitting rooms spotless to enhance the customer experience.",
        bullets: [
            "High-traffic hard floor care and polishing",
            "Interior window and glass display cleaning",
            "Fitting room and public restroom maintenance",
            "After-hours cleaning to avoid disruption",
        ],
        image: "/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.15 PM (1).jpeg",
        icon: Store,
        ctaText: "Enquire about retail cleaning",
    },
    {
        id: "industrial-cleaning",
        label: "Industrial & Warehouse",
        title: "Heavy-duty cleaning for tough environments.",
        subtitle: "Safety-first cleaning for factories and warehouses.",
        description:
            "Industrial sites require specialised equipment and safety training. We handle large-scale sweeping, degreasing, and high-level dusting to keep your operations compliant and safe.",
        bullets: [
            "Machine scrubbing for concrete flooring",
            "High-level dusting of warehouse racking and piping",
            "Industrial degreasing and spill response",
            "Staff amenities and locker room sanitisation",
        ],
        image: "/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.15 PM (1).jpeg",
        icon: Factory,
        ctaText: "Discuss industrial cleaning",
    },
    {
        id: "medical-cleaning",
        label: "Medical & Clinical",
        title: "Hospital-grade sanitisation standards.",
        subtitle: "Protecting patients and staff with rigorous protocols.",
        description:
            "Medical facilities demand the highest hygiene levels. Our trained staff use TGA-approved hospital-grade disinfectants and strict cross-contamination prevention protocols.",
        bullets: [
            "Terminal cleaning for clinical and surgical areas",
            "Waiting room and reception sanitisation",
            "Safe handling protocols for clinical waste areas",
            "Infection control and cross-contamination prevention",
        ],
        image: "/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.15 PM (1).jpeg",
        icon: Stethoscope,
        ctaText: "Consult on medical cleaning",
    },
];

export const CommercialCleaningTabsSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 xl:px-8 max-w-7xl">
                {/* Heading */}
                <div className="mb-10 md:mb-16">
                    <span className="inline-block text-[#00b050] font-bold text-sm tracking-wider uppercase mb-3">
                        In-depth services
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight mb-4">
                        How Skill City Facility Solutions
                        <br />
                        <span className="text-[#00b050]">maintains commercial spaces in detail</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed">
                        Switch between services to see exactly what is included, how we operate on-site, and what you can
                        expect when you partner with us for your commercial cleaning needs.
                    </p>
                </div>

                {/* Tabs */}
                <Tabs defaultValue={tabServices[0].id} className="w-full">
                    <TabsList className="w-full h-auto flex flex-wrap justify-start md:justify-center lg:justify-between gap-2 md:gap-3 bg-gray-50 p-2 rounded-2xl md:rounded-full border border-gray-100">
                        {tabServices.map((service) => (
                            <TabsTrigger
                                key={service.id}
                                value={service.id}
                                className="flex-1 min-w-[140px] rounded-xl md:rounded-full px-4 py-3 text-sm font-semibold data-[state=active]:bg-[#00b050] data-[state=active]:text-white data-[state=active]:shadow-md text-gray-600 hover:text-gray-900 transition-all"
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
                                            <div className="inline-flex items-center gap-2 rounded-full bg-[#e5f7ed] px-4 py-1.5 mb-6">
                                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#00b050]">
                                                    <Icon className="w-3.5 h-3.5 text-white" />
                                                </span>
                                                <span className="text-sm font-bold text-[#00b050]">
                                                    {service.label}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3 leading-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-lg font-medium text-[#00b050] mb-4">
                                                {service.subtitle}
                                            </p>
                                            <p className="text-base text-gray-500 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>

                                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100/50">
                                            <h4 className="text-base font-bold text-[#111827] mb-4">
                                                What this service includes
                                            </h4>
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {service.bullets.map((bullet) => (
                                                    <div key={bullet} className="flex items-start gap-3">
                                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00b050]" />
                                                        <p className="text-sm text-gray-600 leading-relaxed">
                                                            {bullet}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <Button asChild className="w-full sm:w-auto self-start rounded-full bg-[#00b050] hover:bg-[#009b46] text-white px-8 py-6 text-base font-medium shadow-lg shadow-[#00b050]/20 transition-all">
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
