import { EarlyChildhoodCleaningClient } from "@/components/services/early-childhood-cleaning/EarlyChildhoodCleaningClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Early Childhood Education Cleaning Melbourne | Skill City",
    description: "Gentle, non-toxic, and effective cleaning for childcares and early learning centers.",
};

export default function EarlyChildhoodCleaningPage() {
    return <EarlyChildhoodCleaningClient />;
}
