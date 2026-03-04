import { IndustrialCleaningClient } from "@/components/services/industrial-cleaning/IndustrialCleaningClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industrial Cleaning Services Melbourne | Skill City",
    description: "Heavy-duty industrial cleaning solutions. Keeping factories and industrial sites safe and compliant.",
};

export default function IndustrialCleaningPage() {
    return <IndustrialCleaningClient />;
}
