"use client";

import { Building2, Users, Droplets, ShieldCheck } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const IMG = "/council-cleaning/council-clean-tabs.jpeg";

export function CouncilCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            eyebrow="In-depth services"
            titleLine1="How Skill City Facility Solutions"
            titleGreen="supports council & community sites in detail"
            description="Explore how we clean libraries, community venues, public amenities, and recreation assets—aligned to public-sector expectations and community use patterns."
            tabs={[
                {
                    id: "public-facilities",
                    label: "Public Facilities & Libraries",
                    title: "Welcoming spaces for the community.",
                    subtitle: "Detailed cleaning for high-traffic environments.",
                    description:
                        "Libraries, public offices, and civic centres experience heavy daily use. We ensure these spaces remain spotless, hygienic, and ready to welcome every member of the community.",
                    bullets: [
                        "Daily cleaning of common areas and lobbies",
                        "Sanitisation of high-touch surfaces and counters",
                        "Detailed floor care including vacuuming and mopping",
                        "Waste management and recycling coordination",
                    ],
                    image: IMG,
                    Icon: Building2,
                    ctaText: "Book facility cleaning",
                },
                {
                    id: "community-centres",
                    label: "Community Centres",
                    title: "Clean venues for local events.",
                    subtitle: "Flexible cleaning for diverse community activities.",
                    description:
                        "From town halls to local community hubs, we provide thorough cleaning services that adapt to your schedule, ensuring the venue is always prepared for the next event, class, or meeting.",
                    bullets: [
                        "Pre and post-event cleaning services",
                        "Deep cleaning of activity rooms and halls",
                        "Kitchen and break room sanitisation",
                        "Carpet and upholstery maintenance",
                    ],
                    image: IMG,
                    Icon: Users,
                    ctaText: "Schedule centre cleaning",
                },
                {
                    id: "public-amenities",
                    label: "Public Amenities",
                    title: "Hygiene you can rely on.",
                    subtitle: "Rigorous sanitisation for public restrooms.",
                    description:
                        "Maintaining clean and safe public restrooms is essential for community wellbeing. We use hospital-grade disinfectants and strict protocols to deliver uncompromising hygiene standards.",
                    bullets: [
                        "Intensive scrubbing of floors, walls, and fixtures",
                        "Replenishment of soap, paper, and sanitary supplies",
                        "Odour control and deep sanitisation treatments",
                        "Regular scheduled maintenance checks",
                    ],
                    image: IMG,
                    Icon: Droplets,
                    ctaText: "Get an amenities quote",
                },
                {
                    id: "parks-recreation",
                    label: "Parks & Recreation",
                    title: "Safe and clean outdoor spaces.",
                    subtitle: "Dedicated maintenance for recreational facilities.",
                    description:
                        "We help maintain the cleanliness of pavilions, sports clubrooms, and park facilities, ensuring they represent the council well and provide a safe environment for public enjoyment.",
                    bullets: [
                        "Litter collection and bin emptying",
                        "Cleaning of BBQ areas and picnic shelters",
                        "Sweeping and maintenance of hardstand areas",
                        "Graffiti removal and vandalism response",
                    ],
                    image: IMG,
                    Icon: ShieldCheck,
                    ctaText: "Book recreation cleaning",
                },
            ]}
        />
    );
}
