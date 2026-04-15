"use client";

import { Stethoscope, Users, Syringe, ClipboardList } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const IMG = "/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.15 PM (1).jpeg";

export function MedicalCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            eyebrow="In-depth services"
            titleLine1="Medical cleaning"
            titleGreen="breakdown"
            description="Clinical rooms, waiting areas, treatment zones, and back-of-house paths—documentation-friendly scope for practices and clinics."
            tabs={[
                {
                    id: "clinical",
                    label: "Clinical rooms",
                    title: "Consult and treatment readiness.",
                    subtitle: "Between-patient attention.",
                    description:
                        "Treatment benches, patient chairs, sinks, and floors need consistent sanitisation. We use health-appropriate disinfectants and focus on touchpoints your clinicians rely on between appointments.",
                    bullets: [
                        "Bench and equipment zone sanitisation",
                        "Patient chair arms and adjustment levers",
                        "Sink, tap, and splashback polish",
                        "Floor spot and full vacuum/mop cycles",
                    ],
                    image: IMG,
                    Icon: Stethoscope,
                    ctaText: "Quote clinical cleaning",
                },
                {
                    id: "waiting",
                    label: "Waiting & reception",
                    title: "First impression hygiene.",
                    subtitle: "Seating, counters, and glass.",
                    description:
                        "Waiting rooms accumulate fingerprints, magazine clutter, and kids’ touch zones. We reset seating, counters, toys where permitted, and entry glass so patients feel confidence from the door.",
                    bullets: [
                        "Chair arms and hard seating wipe",
                        "Reception counter and EFTPOS surrounds",
                        "Entry glass and door plates",
                        "Magazine racks and kids’ corner (if in scope)",
                    ],
                    image: IMG,
                    Icon: Users,
                    ctaText: "Quote waiting areas",
                },
                {
                    id: "treatment",
                    label: "Procedure & allied",
                    title: "Allied health and minor procedure spaces.",
                    subtitle: "Non-standard layouts respected.",
                    description:
                        "Physio, dental adjacency, and procedure-lite rooms each have different surfaces. We adapt to your room map and chemical policy while keeping focus on patient-facing cleanliness.",
                    bullets: [
                        "Plinth, couch, and equipment-safe dusting",
                        "Waste station and glove box surrounds",
                        "Floor programs for vinyl vs carpet",
                        "Window and partition glass in treatment bays",
                    ],
                    image: IMG,
                    Icon: Syringe,
                    ctaText: "Quote treatment zones",
                },
                {
                    id: "back",
                    label: "Corridors & staff",
                    title: "Staff rooms and waste paths.",
                    subtitle: "Back-of-house consistency.",
                    description:
                        "Corridors, staff kitchens, and clinical waste touchpoints complete the hygiene story. We vacuum runners, wipe bin stations, and keep staff welfare areas guest-presentable.",
                    bullets: [
                        "Corridor vacuum and spot mop",
                        "Staff kitchen and break room",
                        "Clinical waste station exterior wipe",
                        "Store room fronts and door handles",
                    ],
                    image: IMG,
                    Icon: ClipboardList,
                    ctaText: "Quote support areas",
                },
            ]}
        />
    );
}
