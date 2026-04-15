"use client";

import { Sparkles, Home, ShieldCheck, Leaf } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const IMG = "/CommercialCleaning/83c4b48ea5d79b5ddd55b589c36c0eca.jpg";

export function HouseCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            eyebrow="In-depth services"
            titleLine1="How Skill City Facility Solutions"
            titleGreen="cares for your home in detail"
            description="Switch between services to see exactly what is included, how we operate within your space, and what you can expect when you partner with us for your house cleaning needs."
            tabs={[
                {
                    id: "regular-cleaning",
                    label: "Regular Cleaning",
                    title: "Consistent cleanliness for your home.",
                    subtitle: "Customised routines to keep your living space pristine.",
                    description:
                        "Our regular cleaning service provides a dependable, high-quality clean tailored to your schedule. We focus on maintaining the beauty and hygiene of your home so you can relax.",
                    bullets: [
                        "Thorough dusting, vacuuming, and mopping of all rooms",
                        "Sanitisation of kitchen countertops, sinks, and appliance exteriors",
                        "Detailed bathroom cleaning including showers, tubs, and toilets",
                        "Customised cleaning checklists matched to your preferences",
                    ],
                    image: IMG,
                    Icon: Home,
                    ctaText: "Book a regular clean",
                },
                {
                    id: "deep-cleaning",
                    label: "Deep Cleaning",
                    title: "A comprehensive reset for your space.",
                    subtitle: "Intensive cleaning targeting hard-to-reach areas.",
                    description:
                        "Ideal for spring cleaning or special occasions, our deep cleaning service goes beyond the surface. We tackle the hidden dirt, grime, and buildup that accumulates over time.",
                    bullets: [
                        "Inside cabinet and drawer cleaning",
                        "Detailed baseboard, door frame, and window sill washing",
                        "Intensive scrubbing of grout lines and tile surfaces",
                        "Behind-appliance cleaning and heavy dust removal",
                    ],
                    image: IMG,
                    Icon: Sparkles,
                    ctaText: "Schedule a deep clean",
                },
                {
                    id: "move-in-out",
                    label: "Move-In / Move-Out",
                    title: "Spotless transitions for your peace of mind.",
                    subtitle: "Detailed cleaning for new beginnings and final handovers.",
                    description:
                        "Moving is stressful enough without worrying about the cleaning. We ensure properties are impeccably clean for incoming residents or final real estate inspections.",
                    bullets: [
                        "End-of-lease compliance cleaning standards",
                        "Complete interior property detailing and sanitisation",
                        "Appliance deep cleaning (ovens, refrigerators, etc.)",
                        "Spotless presentation for property viewings",
                    ],
                    image: IMG,
                    Icon: ShieldCheck,
                    ctaText: "Get a move-in/out quote",
                },
                {
                    id: "eco-friendly",
                    label: "Eco-Friendly Cleaning",
                    title: "Tough on dirt, safe for your family.",
                    subtitle: "Green cleaning solutions for a healthier home environment.",
                    description:
                        "We offer a fully eco-friendly cleaning option using plant-based, non-toxic products that effectively clean and sanitise without leaving harmful chemical residues behind.",
                    bullets: [
                        "100% biodegradable and non-toxic cleaning agents",
                        "Safe for children, pets, and allergy sufferers",
                        "Aromatic natural essential oil finishes (optional)",
                        "Sustainable practices and reusable microfiber technology",
                    ],
                    image: IMG,
                    Icon: Leaf,
                    ctaText: "Discover green cleaning",
                },
            ]}
        />
    );
}
