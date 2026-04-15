"use client";

import { Heart, Users, Stethoscope, Coffee } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const IMG = "/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.15 PM (1).jpeg";

export function AgedCareCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            eyebrow="In-depth services"
            titleLine1="Aged care"
            titleGreen="service scope"
            description="Respectful cleaning for resident rooms, communal living, dining, and clinical-adjacent zones—in step with your infection prevention plan."
            tabs={[
                {
                    id: "resident",
                    label: "Resident rooms",
                    title: "Personal space with dignity.",
                    subtitle: "Ensuites, floors, and furnishings.",
                    description:
                        "We train staff to work quietly and respectfully around residents. Room cleans cover ensuites, floors, furniture dusting, and waste—on a roster that minimises disruption to routines and care.",
                    bullets: [
                        "Ensuite sanitisation and fixture polish",
                        "Floor vacuum or mop to mobility-safe standards",
                        "Furniture, sills, and wardrobe fronts",
                        "Waste and linen-adjacent hygiene",
                    ],
                    image: IMG,
                    Icon: Heart,
                    ctaText: "Quote resident cleaning",
                },
                {
                    id: "communal",
                    label: "Communal & dining",
                    title: "Lounges, dining rooms, and corridors.",
                    subtitle: "High social traffic on repeat cycles.",
                    description:
                        "Dining and lounge areas see spills, handrails touched hundreds of times, and carpet paths that show wear. We structure cycles for tables, rails, and floors so communal life stays welcoming.",
                    bullets: [
                        "Dining reset between meal services",
                        "Lounge vacuum, cushions, and spill response",
                        "Handrail and lift-button rotation",
                        "Corridor vacuum and spot mop",
                    ],
                    image: IMG,
                    Icon: Users,
                    ctaText: "Quote communal program",
                },
                {
                    id: "clinical",
                    label: "Clinical adjacency",
                    title: "Near-care and isolation support.",
                    subtitle: "PPE, logs, and nursing coordination.",
                    description:
                        "When rooms are isolated or clinical zones need extra attention, we follow your IPC directions—PPE, signage, and documented cleans where your facility requires it.",
                    bullets: [
                        "Terminal-style add-ons when directed",
                        "PPE and room-entry protocols",
                        "Respect for signage and care flow",
                        "Supervisor support for audit conversations",
                    ],
                    image: IMG,
                    Icon: Stethoscope,
                    ctaText: "Discuss clinical needs",
                },
                {
                    id: "support",
                    label: "Staff & support",
                    title: "Staff kitchens and back-of-house.",
                    subtitle: "Welfare areas for your team.",
                    description:
                        "Staff deserve clean break rooms too. We maintain kitchens, toilets, and locker-adjacent areas so your workforce has a hygienic place to recharge.",
                    bullets: [
                        "Staff kitchen bench, sink, and appliance wipe",
                        "Microwave and fridge exterior",
                        "Staff toilet rotation",
                        "Office and meeting nook dust",
                    ],
                    image: IMG,
                    Icon: Coffee,
                    ctaText: "Quote staff areas",
                },
            ]}
        />
    );
}
