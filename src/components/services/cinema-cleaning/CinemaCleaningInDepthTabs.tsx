"use client";

import { Film, Store, Users, Popcorn } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const IMG = "/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.15 PM (1).jpeg";

export function CinemaCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            eyebrow="In-depth services"
            titleLine1="Cinema"
            titleGreen="cleaning scope"
            description="Auditoriums, foyers, concessions, and washrooms—crews structured for tight between-session windows and blockbuster nights."
            tabs={[
                {
                    id: "auditorium",
                    label: "Auditorium",
                    title: "Rows, seats, and cup holders.",
                    subtitle: "Systematic between-session reset.",
                    description:
                        "Every screening should feel fresh. We vacuum aisles, wipe cup holders, spot seats, and clear steps and rails so patrons notice the detail—not the last session’s popcorn.",
                    bullets: [
                        "Row-by-row vacuum and debris pick",
                        "Cup holder and armrest wipe",
                        "Step and handrail sanitise",
                        "Spill response for drinks and snacks",
                    ],
                    image: IMG,
                    Icon: Film,
                    ctaText: "Quote auditorium",
                },
                {
                    id: "foyer",
                    label: "Foyer & box office",
                    title: "Glass, counters, carpets.",
                    subtitle: "Opening-night presentation.",
                    description:
                        "The foyer is your brand. We polish glass doors, counters, poster cases, and vacuum or spot carpets so the first photo looks premium.",
                    bullets: [
                        "Entry glass and door finger marks",
                        "Ticket and candy counter sanitise",
                        "Carpet vacuum and spot treatment",
                        "Bin and queue barrier wipe",
                    ],
                    image: IMG,
                    Icon: Store,
                    ctaText: "Quote foyer",
                },
                {
                    id: "wc",
                    label: "Washrooms",
                    title: "Peak traffic restrooms.",
                    subtitle: "Consumables and shine.",
                    description:
                        "Intermission crushes washrooms. We run full sanitisation, mirror polish, floor mop, and consumable restock on a cycle that matches your session times.",
                    bullets: [
                        "Toilet and urinal deep rotation",
                        "Basin, tap, and mirror polish",
                        "Floor scrub and slip-safe dry",
                        "Paper, soap, and sanitary restock",
                    ],
                    image: IMG,
                    Icon: Users,
                    ctaText: "Quote restrooms",
                },
                {
                    id: "concession",
                    label: "Concession",
                    title: "Spills, glass, and prep.",
                    subtitle: "Behind the candy bar.",
                    description:
                        "Syrup, ice, and glass surfaces need constant attention. We support close-down cleans for splash zones, display glass, and staff-only prep benches.",
                    bullets: [
                        "Display case glass in/out",
                        "Counter and POS sanitise",
                        "Splash wall and floor behind line",
                        "Rubbish and recycling consolidation",
                    ],
                    image: IMG,
                    Icon: Popcorn,
                    ctaText: "Discuss concession scope",
                },
            ]}
        />
    );
}
