"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Building2, Users, Droplets, ShieldCheck } from "lucide-react";
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
        id: "public-facilities",
        label: "Public Facilities & Libraries",
        title: "Welcoming spaces for the community.",
        subtitle: "Detailed cleaning for high-traffic environments.",
        description:
            "Libraries, public offices, and civic centers experience heavy daily use. We ensure these spaces remain spotless, hygienic, and ready to welcome every member of the community.",
        bullets: [
            "Daily cleaning of common areas and lobbies",
            "Sanitisation of high-touch surfaces and counters",
            "Detailed floor care including vacuuming and mopping",
            "Waste management and recycling coordination",
        ],
        image: "/council-cleaning/council-clean-tabs.jpeg",
        icon: Building2,
        ctaText: "Book facility cleaning",
    },
    {
        id: "community-centres",
        label: "Community Centres",
        title: "Clean venues for local events.",
        subtitle: "Flexible cleaning for diverse community activities.",
        description:
            "From town halls to local community hubs, we provide thorough cleaning services that adapt to your schedule, ensuring the venue is always prepared for the next event, class, or meeting.",
        bullets: [
            "Pre and post-event cleaning services",
            "Deep cleaning of activity rooms and halls",
            "Kitchen and break room sanitisation",
            "Carpet and upholstery maintenance",
        ],
        image: "/council-cleaning/council-clean-tabs.jpeg",
        icon: Users,
        ctaText: "Schedule centre cleaning",
    },
    {
        id: "public-amenities",
        label: "Public Amenities",
        title: "Hygiene you can rely on.",
        subtitle: "Rigorous sanitisation for public restrooms.",
        description:
            "Maintaining clean and safe public restrooms is essential for community wellbeing. We use hospital-grade disinfectants and strict protocols to deliver uncompromising hygiene standards.",
        bullets: [
            "Intensive scrubbing of floors, walls, and fixtures",
            "Replenishment of soap, paper, and sanitary supplies",
            "Odour control and deep sanitisation treatments",
            "Regular scheduled maintenance checks",
        ],
        image: "/council-cleaning/council-clean-tabs.jpeg",
        icon: Droplets,
        ctaText: "Get an amenities quote",
    },
    {
        id: "parks-recreation",
        label: "Parks & Recreation",
        title: "Safe and clean outdoor spaces.",
        subtitle: "Dedicated maintenance for recreational facilities.",
        description:
            "We help maintain the cleanliness of pavilions, sports clubrooms, and park facilities, ensuring they represent the council well and provide a safe environment for public enjoyment.",
        bullets: [
            "Litter collection and bin emptying",
            "Cleaning of BBQ areas and picnic shelters",
            "Sweeping and maintenance of hardstand areas",
            "Graffiti removal and vandalism response",
        ],
        image: "/council-cleaning/council-clean-tabs.jpeg",
        icon: ShieldCheck,
        ctaText: "Book recreation cleaning",
    },
];

export const CouncilCleaningTabsSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 xl:px-8 max-w-7xl">
                {/* Heading */}
                <div className="mb-10 md:mb-16">
                    <span className="inline-block text-[#00b050] font-bold text-sm tracking-wider uppercase mb-3">
                        In-depth services
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                        How Skill City Facility Solutions
                        <br />
                        <span className="text-[#00b050]">handles council cleaning in detail</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed">
                        Switch between services to see exactly what is included, how we operate on-site, and what you can
                        expect when you partner with us for your council and community cleaning needs.
                    </p>
                </div>

                {/* Tabs */}
                <Tabs defaultValue={tabServices[0].id} className="w-full">
                    <TabsList className="w-full h-auto flex flex-wrap justify-start lg:justify-center gap-2 md:gap-3 bg-gray-50 p-2 rounded-2xl md:rounded-full border border-gray-100">
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
                                                <span className="text-sm font-bold text-green-700">
                                                    {service.label}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
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
                                            <h4 className="text-base font-bold text-gray-900 mb-4">
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

                                        <Button asChild className="w-full sm:w-auto self-start rounded-full bg-[#00b050] hover:bg-[#009040] text-white px-8 py-6 text-base font-medium shadow-lg shadow-green-600/20 transition-all hover:text-white">
                                            <Link href="/contact" className="text-white hover:text-white">
                                                {service.ctaText}
                                            </Link>
                                        </Button>
                                    </div>

                                    {/* Right – Visual */}
                                    <div className="relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-gray-100 order-first lg:order-last">
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
