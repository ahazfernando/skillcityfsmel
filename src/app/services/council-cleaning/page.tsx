import { CouncilCleaningHero } from "@/components/services/council-cleaning/CouncilCleaningHero";
import { CouncilCleaningAbout } from "@/components/services/council-cleaning/CouncilCleaningAbout";
import { CouncilCleaningCapabilities } from "@/components/services/council-cleaning/CouncilCleaningCapabilities";
import { CouncilCleaningProcess } from "@/components/services/council-cleaning/CouncilCleaningProcess";
import { CouncilCleaningWhyChooseUs } from "@/components/services/council-cleaning/CouncilCleaningWhyChooseUs";
import { CouncilCleaningCTA } from "@/components/services/council-cleaning/CouncilCleaningCTA";
import { CouncilCleaningTabsSection } from "@/components/services/council-cleaning/CouncilCleaningTabsSection";
import LocationsSection from "@/components/home/LocationsSection";
import ReviewsSection from "@/components/home/ReviewsSection";
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
            <CouncilCleaningTabsSection />
            <CouncilCleaningWhyChooseUs />
            <CouncilCleaningCapabilities />
            <CouncilCleaningProcess />
            <ReviewsSection />
            <LocationsSection />
            <CouncilCleaningCTA />
        </main>
    );
}
