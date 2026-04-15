"use client";

import { Hammer, Sparkles, Droplets, Wrench } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const IMG = "/home/257579cd91eb4c7b3d48193da76ae1d8.jpg";

export function BuildersCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            eyebrow="In-depth services"
            titleLine1="How Skill City Facility Solutions"
            titleGreen="handles builders cleaning in detail"
            description="Switch between services to see exactly what is included, how we operate on-site, and what you can expect when you partner with us for your post-construction cleaning needs."
            tabs={[
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
                    image: IMG,
                    Icon: Hammer,
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
                    image: IMG,
                    Icon: Sparkles,
                    ctaText: "Schedule a sparkle clean",
                },
                {
                    id: "exterior-wash",
                    label: "Exterior Wash Down",
                    title: "Curb appeal from day one.",
                    subtitle: "High-pressure cleaning for exterior surfaces.",
                    description:
                        "Construction leaves the exterior just as messy as the interior. We utilise pressure washing and specialised equipment to remove dirt and grime from facades and flatwork.",
                    bullets: [
                        "High-pressure cleaning of driveways and walkways",
                        "Washing down of exterior walls and brickwork",
                        "Gutter clearing and downpipe flushing",
                        "Removal of exterior paint spills and mortar drops",
                    ],
                    image: IMG,
                    Icon: Droplets,
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
                    image: IMG,
                    Icon: Wrench,
                    ctaText: "Book renovation cleaning",
                },
            ]}
        />
    );
}
