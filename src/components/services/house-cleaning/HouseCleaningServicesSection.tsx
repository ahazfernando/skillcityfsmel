import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
    KeyRound,
    Layers,
    CloudFog,
    PhoneCall,
    ArrowUpRight,
} from "lucide-react";

type HouseCleaningService = {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
};

const services: HouseCleaningService[] = [
    {
        title: "End of Lease Cleaning",
        description:
            "Bond-ready cleaning for kitchens, bathrooms, floors, and detail areas agents inspect, so you can hand back keys with confidence.",
        icon: KeyRound,
        href: "/services/end-of-lease-cleaning",
    },
    {
        title: "Carpet Cleaning",
        description:
            "Deep extraction and stain treatment for carpets and rugs, lifting embedded dirt, allergens, and everyday wear from high-traffic rooms.",
        icon: Layers,
        href: "/contact-us",
    },
    {
        title: "Steam Cleaning",
        description:
            "High-temperature steam sanitises hard floors, tiles, and selected surfaces without harsh chemicals, ideal for families and pets.",
        icon: CloudFog,
        href: "/contact-us",
    },
    {
        title: "24/7 Emergency Cleaning",
        description:
            "Urgent call-outs when spills, floods, or last-minute inspections need fast, professional help, day or night across Victoria.",
        icon: PhoneCall,
        href: "/contact-us",
    },
];

const MOCKUP_BG = "/Housecleaning/SkillCityFacilitySolutionsMockup.png";

export default function HouseCleaningServicesSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="w-[95%] max-w-[1920px] mx-auto">
                <div className="relative overflow-hidden rounded-[24px] bg-[#141a17] px-6 py-12 md:px-12 md:py-16 lg:px-14 lg:py-20">
                    <div
                        className="pointer-events-none absolute -left-[8%] -bottom-[18%] z-0 h-[min(88%,520px)] w-[min(72%,820px)] sm:h-[min(92%,580px)]"
                        aria-hidden
                    >
                        <Image
                            src={MOCKUP_BG}
                            alt=""
                            fill
                            className="object-contain object-left-bottom opacity-[0.22]"
                            sizes="(max-width: 768px) 85vw, 820px"
                        />
                    </div>
                    <div
                        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#141a17] from-20% via-[#141a17]/55 via-45% to-transparent"
                        aria-hidden
                    />
                    <div
                        className="pointer-events-none absolute -top-24 -right-16 z-[2] h-72 w-72 rounded-full bg-white/[0.04] blur-2xl"
                        aria-hidden
                    />
                    <div
                        className="pointer-events-none absolute -bottom-20 right-[8%] z-[2] h-72 w-72 rounded-full bg-primary/10 blur-3xl"
                        aria-hidden
                    />
                    <div
                        className="pointer-events-none absolute top-1/2 right-[12%] z-[2] hidden lg:block h-40 w-40 -translate-y-1/2 rounded-full border border-white/[0.06]"
                        aria-hidden
                    />
                    <div
                        className="pointer-events-none absolute bottom-8 right-[28%] z-[2] hidden md:block h-24 w-24 rounded-full border border-white/[0.05]"
                        aria-hidden
                    />

                    <div className="relative z-10">
                        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 mb-14 md:mb-16 items-start">
                            <div>
                                <span className="inline-flex items-center rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#141a17]">
                                    Our Services
                                </span>
                                <h2 className="mt-6 text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-white">
                                    Experience the{" "}
                                    <span className="text-lime-600">Comfort</span> of a{" "}
                                    <span className="italic text-lime-500 font-medium">
                                        Professionally Clean Home
                                    </span>
                                </h2>
                            </div>
                            <p className="text-base md:text-lg text-white/55 leading-relaxed lg:pt-10">
                                From bond returns to carpet care, steam sanitising, and urgent
                                call-outs, Skill City delivers professional
                                house cleaning across Melbourne and Victoria, tailored to your home
                                and schedule.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                            {services.map((service) => (
                                <ServiceCard key={service.title} {...service} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({
    title,
    description,
    icon: Icon,
    href,
}: HouseCleaningService) {
    return (
        <Link
            href={href}
            className="group flex flex-col rounded-2xl p-4 md:p-5 transition-all duration-300 ease-out hover:bg-white/[0.06] hover:p-6 md:hover:p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141a17]"
        >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-colors group-hover:border-lime-600/40 group-hover:bg-lime-600/10 group-hover:text-lime-500">
                <Icon className="h-8 w-8 stroke-[1.5]" aria-hidden />
            </div>
            <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">{title}</h3>
                <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-white/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lime-500"
                    aria-hidden
                />
            </div>
            <p className="text-sm text-white/50 leading-relaxed">{description}</p>
        </Link>
    );
}
