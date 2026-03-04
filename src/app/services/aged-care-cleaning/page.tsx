import { AgedCareCleaningClient } from "@/components/services/aged-care-cleaning/AgedCareCleaningClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aged Care Cleaning Services Melbourne | Skill City",
    description: "Compassionate, safe, and hygienic cleaning services tailored for aged care facilities in Melbourne.",
};

export default function AgedCareCleaningPage() {
    return <AgedCareCleaningClient />;
}
