import { CouncilCleaningClient } from "@/components/services/council-cleaning/CouncilCleaningClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Council & Community Cleaning Melbourne | Skill City",
    description: "Reliable cleaning for council facilities, public spaces, and community centers. Creating clean, welcoming environments.",
};

export default function CouncilCleaningPage() {
    return <CouncilCleaningClient />;
}
