"use client";

import { Home, KeyRound, Layers, CloudFog, PhoneCall } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const IMG = "/Housecleaning/She_could_should_be_cleaning_202605181051.jpeg";

export function HouseCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            wide
            eyebrow="In-depth services"
            titleLine1="How Skill City Facility Solutions"
            titleGreen="cares for your home in detail"
            description="Switch between our house cleaning services to see what is included, how we work in your home, and what you can expect from Skill City."
            tabs={[
                {
                    id: "one-off-cleaning",
                    label: "One Off Cleaning",
                    title: "A thorough refresh when you need it most.",
                    subtitle: "Spring cleans, pre-event prep, and one-time deep visits.",
                    description:
                        "Our one-off cleaning service is ideal when your home needs a full reset without committing to a recurring schedule. We tailor the visit to your priorities and finish with a consistent, detailed clean.",
                    bullets: [
                        "Whole-home dusting, vacuuming, and mopping",
                        "Kitchen and bathroom sanitisation",
                        "Focus areas you nominate before we arrive",
                        "Flexible scheduling for busy households",
                    ],
                    image: IMG,
                    Icon: Home,
                    ctaText: "Book a one-off clean",
                },
                {
                    id: "end-of-lease-cleaning",
                    label: "End of Lease Cleaning",
                    title: "Bond-ready cleaning you can hand over with confidence.",
                    subtitle: "Kitchens, bathrooms, floors, and agent checklist detail.",
                    description:
                        "Moving out is stressful enough. We clean to the standards agents and landlords expect, covering kitchens, bathrooms, floors, and the detail areas that show up on inspection reports.",
                    bullets: [
                        "Oven, rangehood, and appliance exteriors",
                        "Bathroom tiles, fixtures, and exhaust areas",
                        "Interior windows, skirting, and floor edges",
                        "Optional carpet steam and add-ons quoted clearly",
                    ],
                    image: IMG,
                    Icon: KeyRound,
                    ctaText: "Get an end-of-lease quote",
                },
                {
                    id: "carpet-cleaning",
                    label: "Carpet Cleaning",
                    title: "Deep extraction for fresher, healthier carpets.",
                    subtitle: "Stain treatment and high-traffic room care.",
                    description:
                        "Embedded dirt, allergens, and everyday wear build up in carpets and rugs over time. Our extraction and spot treatment lifts soil from fibres so rooms feel cleaner and smell fresher.",
                    bullets: [
                        "Hot-water extraction for carpets and rugs",
                        "Targeted stain and spot treatment",
                        "High-traffic paths and living areas",
                        "Safe products suited to family homes",
                    ],
                    image: IMG,
                    Icon: Layers,
                    ctaText: "Request carpet cleaning",
                },
                {
                    id: "steam-cleaning",
                    label: "Steam Cleaning",
                    title: "Chemical-free sanitising for hard surfaces.",
                    subtitle: "High-temperature steam for tiles, floors, and more.",
                    description:
                        "Steam cleaning lifts grime and sanitises hard floors, tiles, and selected surfaces without relying on harsh chemicals, making it a smart choice for family homes and pet-friendly spaces.",
                    bullets: [
                        "Tile, grout, and hard-floor steam treatment",
                        "Kitchen and bathroom surface sanitising",
                        "Low-chemical approach for sensitive households",
                        "Ideal alongside regular or end-of-lease cleans",
                    ],
                    image: IMG,
                    Icon: CloudFog,
                    ctaText: "Book steam cleaning",
                },
                {
                    id: "emergency-cleaning",
                    label: "24/7 Emergency Cleaning",
                    title: "Fast help when you cannot wait.",
                    subtitle: "Urgent call-outs across Melbourne and Victoria.",
                    description:
                        "When spills, floods, or last-minute inspections cannot wait, our emergency team responds with professional equipment and experienced cleaners, day or night.",
                    bullets: [
                        "24/7 availability for urgent residential jobs",
                        "Water damage, spill, and post-incident clean-ups",
                        "Last-minute inspection and open-home prep",
                        "Coordinated response with clear arrival windows",
                    ],
                    image: IMG,
                    Icon: PhoneCall,
                    ctaText: "Request emergency cleaning",
                },
            ]}
        />
    );
}
