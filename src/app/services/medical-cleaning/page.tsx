import { MedicalCleaningClient } from "@/components/services/medical-cleaning/MedicalCleaningClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Medical & Healthcare Cleaning Melbourne | Skill City",
    description: "Hospital-grade cleaning for clinics and healthcare. Strict infection control and sterilization.",
};

export default function MedicalCleaningPage() {
    return <MedicalCleaningClient />;
}
