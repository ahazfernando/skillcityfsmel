"use client";

import { Utensils, Sparkles, Home, Key } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const IMG = "/CommercialCleaning/83c4b48ea5d79b5ddd55b589c36c0eca.jpg";

export function EndOfLeaseCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            eyebrow="In-depth services"
            titleLine1="End of lease"
            titleGreen="checklist areas"
            description="Kitchen, bathrooms, and whole-property packages structured around Victorian condition reports and agent expectations."
            tabs={[
                {
                    id: "kitchen",
                    label: "Kitchen",
                    title: "Oven, rangehood, cupboards.",
                    subtitle: "Agent hotspot detail.",
                    description:
                        "Bond inspections zoom in on ovens, rangehoods, and cupboards inside-out. We degrease, wipe shelves, and polish sinks so the kitchen photographs well and passes checklist.",
                    bullets: [
                        "Oven and cooktop degrease inside-out",
                        "Rangehood filters and canopy faces",
                        "Cupboard interiors and tracks",
                        "Sink, taps, and splashback polish",
                    ],
                    image: IMG,
                    Icon: Utensils,
                    ctaText: "Book end-of-lease kitchen",
                },
                {
                    id: "bath",
                    label: "Bathrooms",
                    title: "Tiles, glass, and fixtures.",
                    subtitle: "Lime, soap scum, and mould edges.",
                    description:
                        "Showers and baths carry the most bond risk. We scrub grout lines, polish screens and mirrors, detail toilets, and exhaust fans where reachable.",
                    bullets: [
                        "Shower screen and tile scrub",
                        "Toilet full detail including base",
                        "Vanity, mirror, and cabinet faces",
                        "Exhaust cover and fixture polish",
                    ],
                    image: IMG,
                    Icon: Sparkles,
                    ctaText: "Book bathroom blitz",
                },
                {
                    id: "whole",
                    label: "Whole property",
                    title: "Skirtings, tracks, cobwebs.",
                    subtitle: "Room-by-room exit standard.",
                    description:
                        "Beyond wet areas, agents look at tracks, sills, light fittings, and cobwebs. We vacuum, mop, wipe sills, and detail doors so the whole property feels handed over.",
                    bullets: [
                        "Full vacuum and hard-floor mop",
                        "Skirting, architraves, and door faces",
                        "Window sills and sliding tracks (in scope)",
                        "Cobweb removal and light fitting dust",
                    ],
                    image: IMG,
                    Icon: Home,
                    ctaText: "Book full exit clean",
                },
                {
                    id: "extras",
                    label: "Add-ons",
                    title: "Carpet, blinds, garage.",
                    subtitle: "Optional deep modules.",
                    description:
                        "Many bonds need carpet steam, blind wipe, or garage sweep. We quote add-ons clearly so you know what’s included before inspection day.",
                    bullets: [
                        "Carpet steam cleaning (optional)",
                        "Blind dust and spot wipe",
                        "Garage sweep and cobweb",
                        "Balcony or outdoor tidy (scoped)",
                    ],
                    image: IMG,
                    Icon: Key,
                    ctaText: "Get a full quote",
                },
            ]}
        />
    );
}
