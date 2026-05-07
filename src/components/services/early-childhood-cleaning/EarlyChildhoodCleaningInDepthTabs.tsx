"use client";

import { Baby, Heart, Utensils, Sun } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const IMG = "/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.23.30 PM.jpeg";

export function EarlyChildhoodCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            eyebrow="In-depth services"
            titleLine1="Early childhood"
            titleGreen="cleaning areas"
            description="Gentle, non-toxic focused programs for play rooms, sleep areas, food prep, and outdoor zones: aligned to licensing expectations."
            tabs={[
                {
                    id: "play",
                    label: "Play rooms",
                    title: "Toys, mats, and mouthed zones.",
                    subtitle: "Low-chem approaches where children explore.",
                    description:
                        "Play spaces need frequent reset without harsh fumes. We use centre-approved products, pay attention to shelves and door handles, and mop floors on a rhythm that fits nap and meal times.",
                    bullets: [
                        "Floor mop and spot sanitise for play mats",
                        "Shelf, ledge, and toy-storage dust and wipe",
                        "Door handles and light switches on high-touch rotation",
                        "Bin empty and odour-friendly products",
                    ],
                    image: IMG,
                    Icon: Baby,
                    ctaText: "Quote play room cleaning",
                },
                {
                    id: "sleep",
                    label: "Sleep areas",
                    title: "Cots, rest mats, and calm spaces.",
                    subtitle: "Ventilation-friendly, quiet routines.",
                    description:
                        "Sleep rooms should feel fresh without strong smells. We clean cot rails, floors, and blinds on schedules that avoid rest windows where possible, and use methods your educators are comfortable with.",
                    bullets: [
                        "Cot rail and frame sanitise",
                        "Floor vacuum and damp mop",
                        "Blind and sill dusting",
                        "Storage and change-table surrounds",
                    ],
                    image: IMG,
                    Icon: Heart,
                    ctaText: "Quote sleep room care",
                },
                {
                    id: "food",
                    label: "Food prep",
                    title: "Kitchens and bottle benches.",
                    subtitle: "Food-safety aware cleaning.",
                    description:
                        "Food prep areas are critical control points. We sanitise benches, sinks, and appliance exteriors, manage bins, and keep high chair zones wiped down so EHO visits feel supported.",
                    bullets: [
                        "Bench and splashback sanitisation",
                        "Sink, tap, and drain polish",
                        "Fridge exterior and microwave touch",
                        "High chair and meal zone reset",
                    ],
                    image: IMG,
                    Icon: Utensils,
                    ctaText: "Quote kitchen cleaning",
                },
                {
                    id: "outdoor",
                    label: "Outdoor play",
                    title: "Sandpits, verandas, and equipment.",
                    subtitle: "Weather-hardy exterior touch-ups.",
                    description:
                        "Outdoor areas collect leaves, mud, and toy grime. We sweep verandas, wipe outdoor furniture, and support sandpit surrounds so outdoor play stays inviting.",
                    bullets: [
                        "Veranda sweep and cobweb control",
                        "Outdoor table and seat wipe",
                        "Toy storage and mud-kitchen tidy",
                        "Door tracks and glass finger marks",
                    ],
                    image: IMG,
                    Icon: Sun,
                    ctaText: "Quote outdoor zones",
                },
            ]}
        />
    );
}
