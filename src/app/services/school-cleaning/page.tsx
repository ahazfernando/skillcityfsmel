import { SchoolCleaningClient } from "@/components/services/school-cleaning/SchoolCleaningClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "School and University Cleaning Melbourne | Skill City",
    description: "Maintain a safe, hygienic educational environment with our school cleaning services.",
};

export default function SchoolCleaningPage() {
    return <SchoolCleaningClient />;
}
