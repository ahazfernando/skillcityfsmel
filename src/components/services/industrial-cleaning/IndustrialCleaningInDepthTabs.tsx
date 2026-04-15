"use client";

import { Factory, Warehouse, HardHat, Droplets } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const IMG = "/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.05 PM.jpeg";

export function IndustrialCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            eyebrow="In-depth services"
            titleLine1="Industrial"
            titleGreen="capabilities"
            description="Floors, high-level dust, amenities, and spill-aware programs—sized to shutdowns or rolling maintenance windows."
            tabs={[
                {
                    id: "floors",
                    label: "Floors & machinery",
                    title: "Scrub, sweep, and degrease.",
                    subtitle: "Concrete, epoxy, and coated slabs.",
                    description:
                        "Industrial floors take oil, tyre marks, and fine dust. We deploy sweepers and scrubbers with pads and chemistry matched to your coating—plus spill response when you need it.",
                    bullets: [
                        "Ride-on or walk-behind scrub programs",
                        "Degrease zones near plant and docks",
                        "Line marking care and edge detailing",
                        "Spill assist and containment support",
                    ],
                    image: IMG,
                    Icon: Factory,
                    ctaText: "Quote floor program",
                },
                {
                    id: "high",
                    label: "High-level dust",
                    title: "Rafters, racking, and conduit.",
                    subtitle: "Reduce overhead dust load.",
                    description:
                        "Overhead dust eventually lands on product and staff. We use reach systems appropriate to your SWMS—racking tops, ledges, and exposed conduit on agreed frequencies.",
                    bullets: [
                        "Racking and mezzanine ledge dusting",
                        "Conduit and pipe runs",
                        "Light fitting surrounds (where safe)",
                        "Scheduled frequency vs shutdown batches",
                    ],
                    image: IMG,
                    Icon: Warehouse,
                    ctaText: "Quote high-level",
                },
                {
                    id: "safety",
                    label: "PPE & induction",
                    title: "Site rules first.",
                    subtitle: "Induction-ready crews.",
                    description:
                        "Your site has hard hat zones, hearing protection, and confined-space boundaries. Our crews arrive inducted, in correct PPE, and briefed on your traffic management.",
                    bullets: [
                        "PPE aligned to your site rules",
                        "SWMS and permit awareness",
                        "Spotter or escort where required",
                        "Supervisor site walks on start-up",
                    ],
                    image: IMG,
                    Icon: HardHat,
                    ctaText: "Discuss safety scope",
                },
                {
                    id: "amenities",
                    label: "Amenities",
                    title: "Change, shower, and crib.",
                    subtitle: "Worker welfare blocks.",
                    description:
                        "Showers, lockers, and crib rooms affect morale and hygiene audits. We scrub tiles, polish fixtures, and manage odours so amenities match the standard of your production floor.",
                    bullets: [
                        "Shower and locker wet areas",
                        "Toilet blocks and urinals",
                        "Crib microwave, benches, and sinks",
                        "Bin and odour programs",
                    ],
                    image: IMG,
                    Icon: Droplets,
                    ctaText: "Quote amenities",
                },
            ]}
        />
    );
}
