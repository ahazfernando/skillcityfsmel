import { EarlyChildhoodHero } from "@/components/services/early-childhood-cleaning/EarlyChildhoodHero";
import { EarlyChildhoodAbout } from "@/components/services/early-childhood-cleaning/EarlyChildhoodAbout";
import { EarlyChildhoodProtectedAreas } from "@/components/services/early-childhood-cleaning/EarlyChildhoodProtectedAreas";
import LocationsSection from "@/components/home/LocationsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Early Childhood Education Cleaning Melbourne | Skill City",
    description: "Gentle, non-toxic, and effective cleaning for childcares and early learning centers.",
};

export default function EarlyChildhoodCleaningPage() {
    return (
        <main>
            <EarlyChildhoodHero />
            <EarlyChildhoodAbout />
            <EarlyChildhoodProtectedAreas />
            <LocationsSection />
        </main>
    );
}
