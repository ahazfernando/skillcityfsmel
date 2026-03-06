import { SchoolCleaningHero } from "@/components/services/school-cleaning/SchoolCleaningHero";
import { SchoolCleaningFeatures } from "@/components/services/school-cleaning/SchoolCleaningFeatures";
import LocationsSection from "@/components/home/LocationsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "School and University Cleaning Melbourne | Skill City",
    description: "Maintain a safe, hygienic educational environment with our school cleaning services.",
};

export default function SchoolCleaningPage() {
    return (
        <main>
            <SchoolCleaningHero />
            <SchoolCleaningFeatures />
            <LocationsSection />
        </main>
    );
}
