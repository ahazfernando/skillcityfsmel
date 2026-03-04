import { CommercialCleaningClient } from "@/components/services/commercial-cleaning/CommercialCleaningClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Commercial Cleaning Services Melbourne | Skill City",
    description: "Reliable, consistent commercial cleaning in Melbourne. Fully trained professionals delivering a healthy, productive workspace.",
};

export default function CommercialCleaningPage() {
    return <CommercialCleaningClient />;
}
