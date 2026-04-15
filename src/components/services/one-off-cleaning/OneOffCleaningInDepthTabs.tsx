"use client";

import { Sparkles, Users, Home, Calendar } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const IMG = "/home/PHOTO-2026-01-07-18-53-29.jpg";

export function OneOffCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            eyebrow="In-depth services"
            titleLine1="One-off"
            titleGreen="deep clean options"
            description="Spring resets, post-event recovery, and pre-sale sparkle—intensive single visits when you need a visible before-and-after."
            tabs={[
                {
                    id: "spring",
                    label: "Spring clean",
                    title: "Whole home refresh.",
                    subtitle: "Seasonal dust and detail.",
                    description:
                        "Winter closes up houses—dust on sills, edges, and behind furniture. We bring extra hands to hit skirtings, appliance exteriors, wet areas, and living zones in one intensive day or multi-day blitz.",
                    bullets: [
                        "Cobwebs, sills, and skirting detail",
                        "Appliance exteriors and cupboard faces",
                        "Bathroom and kitchen deep attention",
                        "Behind and under furniture edges (where moved)",
                    ],
                    image: IMG,
                    Icon: Sparkles,
                    ctaText: "Book spring clean",
                },
                {
                    id: "event",
                    label: "Post-event",
                    title: "After the party.",
                    subtitle: "Fast turnaround.",
                    description:
                        "Rubbish, sticky floors, and kitchen chaos—we mobilise quickly to restore livable order so you’re not facing Sunday morning alone.",
                    bullets: [
                        "Rubbish bag-out and bin sort",
                        "Floor mop and spot carpet vacuum",
                        "Surface wipe and spill attention",
                        "Kitchen bench, sink, and appliance fronts",
                    ],
                    image: IMG,
                    Icon: Users,
                    ctaText: "Book post-event",
                },
                {
                    id: "sale",
                    label: "Pre-sale",
                    title: "Photo and open-home ready.",
                    subtitle: "Buyer appeal.",
                    description:
                        "Buyers notice kitchens, bathrooms, and light. We prioritise gleam where photos and first walk-throughs matter—windows in, fittings, and entrance impact.",
                    bullets: [
                        "Window interiors and tracks (scoped)",
                        "Light fitting and fan dust",
                        "Kitchen and bathroom showcase polish",
                        "Entrance, front door, and porch tidy",
                    ],
                    image: IMG,
                    Icon: Home,
                    ctaText: "Book pre-sale clean",
                },
                {
                    id: "custom",
                    label: "Custom blitz",
                    title: "You set the priority list.",
                    subtitle: "Kitchen-first or room-specific.",
                    description:
                        "Not every one-off is whole-home. Tell us the top three zones—we’ll load crew and time there first so budget matches impact.",
                    bullets: [
                        "Brief-led priority zones",
                        "Extra hours for ovens or fridges",
                        "Same-week booking where possible",
                        "Clear scope before we start",
                    ],
                    image: IMG,
                    Icon: Calendar,
                    ctaText: "Request custom clean",
                },
            ]}
        />
    );
}
