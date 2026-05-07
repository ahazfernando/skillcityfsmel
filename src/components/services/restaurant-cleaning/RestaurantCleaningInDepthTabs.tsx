"use client";

import { Utensils, Store, Warehouse, Flame } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const IMG = "/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.15 PM (1).jpeg";

export function RestaurantCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            eyebrow="In-depth services"
            titleLine1="Restaurant"
            titleGreen="cleaning areas"
            description="Kitchen line, dining room, bar, cool rooms, and exhaust-aware programs: supporting EHO expectations and guest-facing polish."
            tabs={[
                {
                    id: "kitchen",
                    label: "Kitchen & line",
                    title: "Cook line and prep benches.",
                    subtitle: "Grease management and floor safety.",
                    description:
                        "Back-of-house is where slips and grease build fastest. We degrease splash zones, sanitise benches, detail under equipment edges, and mop with slip-safe chemistry on your close-down schedule.",
                    bullets: [
                        "Cook line, prep, and pass sanitisation",
                        "Wall splash and floor degrease cycles",
                        "Equipment exteriors and under-counter fronts",
                        "Drain pour and odour programs (scoped)",
                    ],
                    image: IMG,
                    Icon: Utensils,
                    ctaText: "Quote kitchen deep clean",
                },
                {
                    id: "dining",
                    label: "Dining & bar",
                    title: "Guest-facing sparkle.",
                    subtitle: "Turnover-ready tables and floors.",
                    description:
                        "Dining floors show scuffs fast; bar tops collect rings and glass spots. We reset tables, polish glass, detail toilets, and keep host stands presentable for every service.",
                    bullets: [
                        "Dining floor sweep, mop, or auto-scrub",
                        "Bar top, speed rail, and glassware zone",
                        "Booth and banquette vacuum",
                        "Patron toilet full rotation",
                    ],
                    image: IMG,
                    Icon: Store,
                    ctaText: "Quote dining clean",
                },
                {
                    id: "storage",
                    label: "Cool & dry storage",
                    title: "Walk-in and dry store hygiene.",
                    subtitle: "Spills, mould risk, and pallets.",
                    description:
                        "Cool room floors and dry store shelving need scheduled attention spills, pallet dust, and drain hygiene. We work when you can spare the aisle.",
                    bullets: [
                        "Cool room floor mop and door track",
                        "Dry store sweep and shelf-front dust",
                        "Drain attention and spill history spots",
                        "Rubbish consolidation",
                    ],
                    image: IMG,
                    Icon: Warehouse,
                    ctaText: "Quote storage clean",
                },
                {
                    id: "exhaust",
                    label: "Canopy & filters",
                    title: "Grease extraction awareness.",
                    subtitle: "Coordinated with your HVAC partner.",
                    description:
                        "Filter and canopy cleaning is often specialist but we support your compliance story with degrease-ready kitchen walls, nearby ducts reachable from floor, and documented kitchen deep cleans.",
                    bullets: [
                        "Wall and canopy-adjacent degrease (reachable)",
                        "Filter change-over day support (rubbish, floor)",
                        "Post-service kitchen reset",
                        "Coordination with your exhaust contractor",
                    ],
                    image: IMG,
                    Icon: Flame,
                    ctaText: "Discuss kitchen program",
                },
            ]}
        />
    );
}
