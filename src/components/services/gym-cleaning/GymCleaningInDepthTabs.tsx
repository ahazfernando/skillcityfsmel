"use client";

import { Dumbbell, Users, Sparkles, Wind } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const IMG = "/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.05 PM.jpeg";

export function GymCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            eyebrow="In-depth services"
            titleLine1="Gym cleaning"
            titleGreen="zones"
            description="Equipment floors, change rooms, studios, and odour programs—timed for off-peak or 24/7 touch routes."
            tabs={[
                {
                    id: "floor",
                    label: "Equipment floor",
                    title: "Cardio, weights, and mats.",
                    subtitle: "High-touch sanitise every visit.",
                    description:
                        "Members judge hygiene on handles and screens. We wipe consoles, dumbbells, benches, and mat zones with gym-appropriate disinfectants, then vacuum rubber for a finished look.",
                    bullets: [
                        "Cardio screens, rails, and touch panels",
                        "Free weights and bench pads",
                        "Functional and stretch mat areas",
                        "Rubber floor vacuum and damp mop",
                    ],
                    image: IMG,
                    Icon: Dumbbell,
                    ctaText: "Quote gym floor",
                },
                {
                    id: "change",
                    label: "Change rooms",
                    title: "Showers, lockers, benches.",
                    subtitle: "Wet area and odour control.",
                    description:
                        "Change rooms drive retention. We scrub tiles, polish glass, treat drains, and wipe lockers so wet areas feel fresh—not just ‘wet’.",
                    bullets: [
                        "Shower cubicle scrub and grout attention",
                        "Locker fronts and bench sanitise",
                        "Mirror and sink polish",
                        "Drain and odour program",
                    ],
                    image: IMG,
                    Icon: Users,
                    ctaText: "Quote change rooms",
                },
                {
                    id: "studio",
                    label: "Studios & classes",
                    title: "Yoga, cycle, and group rooms.",
                    subtitle: "Floor, mirror, props.",
                    description:
                        "Studios need quiet, quick turnovers. We mop floors, streak-free mirrors, wipe props and racks, and dust sound gear surfaces without disturbing calibration.",
                    bullets: [
                        "Studio floor mop or vacuum per surface",
                        "Full-wall mirror polish",
                        "Props, steps, and barre wipe",
                        "Speaker and rack safe dust",
                    ],
                    image: IMG,
                    Icon: Sparkles,
                    ctaText: "Quote studio clean",
                },
                {
                    id: "air",
                    label: "Reception & airflow",
                    title: "Entry, air, and high dust.",
                    subtitle: "First impression + vents.",
                    description:
                        "Reception counters, glass, and visible vent grilles signal how serious you are about air and cleanliness. We include high-dust touch on reachable grilles in scope.",
                    bullets: [
                        "Reception desk and retail display wipe",
                        "Entry glass and turnstiles",
                        "Reachable vent grille dust",
                        "Bin and towel station tidy",
                    ],
                    image: IMG,
                    Icon: Wind,
                    ctaText: "Discuss full scope",
                },
            ]}
        />
    );
}
