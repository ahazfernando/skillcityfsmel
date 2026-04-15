"use client";

import { Warehouse, Factory, Building, Truck } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const IMG = "/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.23.30 PM.jpeg";

export function WarehouseCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            eyebrow="In-depth services"
            titleLine1="Warehouse"
            titleGreen="cleaning modules"
            description="Dock areas, pick aisles, mezzanine offices, and yard-adjacent hygiene—scheduled around inbound peaks and stocktakes."
            tabs={[
                {
                    id: "dock",
                    label: "Dock & goods-in",
                    title: "Receiving hygiene.",
                    subtitle: "Debris, tyres, and door tracks.",
                    description:
                        "Goods-in doors see pallet wrap, mud, and oil. We sweep and scrub dock plates, clear door tracks, and manage rubbish so receivers work in a safe, clear zone.",
                    bullets: [
                        "Dock leveler and pit surrounds",
                        "Door track and seal wipe",
                        "Rubbish and wrap consolidation",
                        "Oil spot treatment",
                    ],
                    image: IMG,
                    Icon: Truck,
                    ctaText: "Quote dock program",
                },
                {
                    id: "aisles",
                    label: "Aisles & pick paths",
                    title: "Wide-path scrub and dust.",
                    subtitle: "Keep pick rates unblocked.",
                    description:
                        "Dust on rack legs and fines on the floor affect air quality and slip risk. We run scrub or sweep strategies that respect forklift lanes and safety zones.",
                    bullets: [
                        "Machine scrub or sweep main aisles",
                        "Rack leg and upright dusting",
                        "Spill response for packaging leaks",
                        "Cross-aisle spot programs",
                    ],
                    image: IMG,
                    Icon: Factory,
                    ctaText: "Quote aisles",
                },
                {
                    id: "mezzanine",
                    label: "Mezz & offices",
                    title: "Site offices in the shed.",
                    subtitle: "Admin pods and stairwells.",
                    description:
                        "Many warehouses tuck offices above the floor. We clean desks, kitchenettes, toilets, and mezzanine stairs so admin staff have the same standard as head office.",
                    bullets: [
                        "Desk, meeting, and print zones",
                        "Kitchenette and staff toilet",
                        "Mezzanine stair treads and rails",
                        "Glass and entry to office pod",
                    ],
                    image: IMG,
                    Icon: Building,
                    ctaText: "Quote site office",
                },
                {
                    id: "storage",
                    label: "Bulk storage",
                    title: "Under-rack and bulk zones.",
                    subtitle: "Seasonal deep windows.",
                    description:
                        "During slow periods or stocktake prep, we can deep-clean under selective racking, cool room surrounds, and staging areas—scoped to your WMS quiet hours.",
                    bullets: [
                        "Under-rack vacuum where accessible",
                        "Staging bay sweep and scrub",
                        "Cool room exterior and door tracks",
                        "Seasonal crew scale-up",
                    ],
                    image: IMG,
                    Icon: Warehouse,
                    ctaText: "Discuss deep windows",
                },
            ]}
        />
    );
}
