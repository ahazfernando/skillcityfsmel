import { CouncilCleaningHero } from "@/components/services/council-cleaning/CouncilCleaningHero";
import { CouncilCleaningAbout } from "@/components/services/council-cleaning/CouncilCleaningAbout";
import { CouncilCleaningCapabilities } from "@/components/services/council-cleaning/CouncilCleaningCapabilities";
import LocationsSection from "@/components/home/LocationsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Council & Community Cleaning Melbourne | Skill City",
    description: "Reliable cleaning for council facilities, public spaces, and community centers. Creating clean, welcoming environments.",
};

export default function CouncilCleaningPage() {
    return (
        <main>
            <CouncilCleaningHero />
            <CouncilCleaningAbout />
            <CouncilCleaningCapabilities />
            <LocationsSection />
        </main>
    );
}
