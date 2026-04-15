"use client";

import { Building, Briefcase, Sparkles, Clock } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const IMG = "/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.15 PM (1).jpeg";

export function OfficeCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            eyebrow="In-depth services"
            titleLine1="How we maintain"
            titleGreen="your office in detail"
            description="Switch between focus areas to see typical inclusions for open-plan floors, executive suites, amenities, and after-hours programs across Melbourne and Victoria."
            tabs={[
                {
                    id: "open-plan",
                    label: "Open plan & desks",
                    title: "High-traffic floors and shared workspaces.",
                    subtitle: "Daily reset for productive teams.",
                    description:
                        "Open-plan offices collect dust, coffee rings, and bin overflow fast. We run systematic desk-and-floor programs so every morning feels organised—vacuum lines, sanitised hot desks, and clear walkways without disrupting your people.",
                    bullets: [
                        "Floor vacuum, spot mop, and cable-safe vacuuming under desks",
                        "Hot-desk and shared bench sanitisation",
                        "Kitchen tidy, dishwasher empty, and bench reset",
                        "Reception glass, entry mats, and first-impression polish",
                    ],
                    image: IMG,
                    Icon: Building,
                    ctaText: "Quote open-plan cleaning",
                },
                {
                    id: "executive",
                    label: "Executive & meetings",
                    title: "Boardrooms and leadership floors.",
                    subtitle: "Discreet, presentation-ready detail.",
                    description:
                        "Executive zones need a different tempo—AV-safe dusting, catering cleanup, and meeting rooms that look sharp for clients. Our teams are briefed on confidentiality and work around your calendar.",
                    bullets: [
                        "AV equipment and screen-safe dusting",
                        "Boardroom reset: tables, chairs, whiteboards, and ledges",
                        "Post-meeting catering and rubbish removal",
                        "Premium consumables restock where agreed",
                    ],
                    image: IMG,
                    Icon: Briefcase,
                    ctaText: "Quote executive cleaning",
                },
                {
                    id: "amenities",
                    label: "Washrooms & kitchens",
                    title: "Hygiene where it matters most.",
                    subtitle: "Deep cycles for staff amenities.",
                    description:
                        "Washrooms and breakout kitchens drive how staff feel about the workplace. We run restocking, grout attention, and fridge-front programs on a rhythm that matches your building’s foot traffic.",
                    bullets: [
                        "Full restroom sanitisation, mirrors, and fixture polish",
                        "Soap, paper, and sanitary restocking programs",
                        "Kitchen deep touches: sinks, appliances, and odour control",
                        "Waste and recycling separation to your building rules",
                    ],
                    image: IMG,
                    Icon: Sparkles,
                    ctaText: "Quote amenity cleaning",
                },
                {
                    id: "after-hours",
                    label: "After-hours & multi-site",
                    title: "One schedule, many floors.",
                    subtitle: "Access-aware teams for portfolios.",
                    description:
                        "Many clients give us after-hours or weekend access. We’re comfortable with swipe cards, lifts, lock-up checklists, and multi-tenant floors—single point of contact for several sites if you need consistency.",
                    bullets: [
                        "After-hours and weekend windows to suit your lease",
                        "Security-inducted staff and documented lock-up",
                        "Multi-site portfolios with aligned checklists",
                        "Escalation path and supervisor spot checks",
                    ],
                    image: IMG,
                    Icon: Clock,
                    ctaText: "Discuss scheduling",
                },
            ]}
        />
    );
}
