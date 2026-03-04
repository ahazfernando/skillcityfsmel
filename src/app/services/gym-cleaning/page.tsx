import { GymCleaningClient } from "@/components/services/gym-cleaning/GymCleaningClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gym & Fitness Studio Cleaning Melbourne | Skill City",
    description: "Premium sanitization for workout equipment, change rooms, and fitness facilities.",
};

export default function GymCleaningPage() {
    return <GymCleaningClient />;
}
