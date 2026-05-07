"use client";

import { GraduationCap, Droplet, FlaskConical, Trophy } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const IMG = "/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.05 PM.jpeg";

export function SchoolCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            eyebrow="In-depth services"
            titleLine1="School cleaning"
            titleGreen="in detail"
            description="See how we support classrooms, washrooms, labs, and sports areas: timed around bells, terms, and holiday deep-clean windows."
            tabs={[
                {
                    id: "classrooms",
                    label: "Classrooms",
                    title: "Daily learning spaces that feel fresh.",
                    subtitle: "Desks, floors, and high-touch surfaces.",
                    description:
                        "Classrooms are high-turnover environments. We sanitise desks and door handles, empty bins, vacuum or mop to your floor type, and reset the room so teachers walk in ready to teach.",
                    bullets: [
                        "Desk and chair sanitisation between day patterns",
                        "Floor vacuum and damp mop as suited to vinyl or carpet",
                        "Whiteboard ledges, window sills, and skirting dusting",
                        "Bin cycle aligned to your waste policy",
                    ],
                    image: IMG,
                    Icon: GraduationCap,
                    ctaText: "Quote classroom cleaning",
                },
                {
                    id: "washrooms",
                    label: "Washrooms",
                    title: "High-volume student blocks.",
                    subtitle: "Hygiene, restock, and odour control.",
                    description:
                        "School washrooms see intense peaks. We run full sanitisation, mirror and fixture polish, floor scrubbing, and consumable programs so blocks stay presentable between breaks.",
                    bullets: [
                        "Toilet, urinal, and partition deep clean rotation",
                        "Mirror, basin, and tap polish",
                        "Floor scrub and drain attention",
                        "Paper, soap, and sanitary restocking",
                    ],
                    image: IMG,
                    Icon: Droplet,
                    ctaText: "Quote washroom program",
                },
                {
                    id: "labs",
                    label: "Labs & studios",
                    title: "Science, art, and tech rooms.",
                    subtitle: "Care around equipment and sinks.",
                    description:
                        "Non-standard surfaces need care: chemical benches, art sinks, and tech bays. We coordinate with faculty on sensitive zones and use methods that protect equipment while meeting hygiene expectations.",
                    bullets: [
                        "Bench and sink sanitisation without damaging surfaces",
                        "Floor care in spill-prone zones",
                        "Storage fronts, glass, and entry mats",
                        "Waste separation where chemicals or sharps policies apply",
                    ],
                    image: IMG,
                    Icon: FlaskConical,
                    ctaText: "Quote specialist rooms",
                },
                {
                    id: "sports",
                    label: "Sports & events",
                    title: "Gyms, courts, and event turnover.",
                    subtitle: "Holiday blitz and match-day support.",
                    description:
                        "Change rooms, courts, and seating areas benefit from term breaks and pre-event blitzes. We scale crew size for vacation deep cleans and one-off event handovers.",
                    bullets: [
                        "Change room benches, showers, and lockers",
                        "Court-side seating and spill response",
                        "Equipment store and first-aid room touch",
                        "Vacation deep-clean windows with larger teams",
                    ],
                    image: IMG,
                    Icon: Trophy,
                    ctaText: "Discuss sports & events",
                },
            ]}
        />
    );
}
