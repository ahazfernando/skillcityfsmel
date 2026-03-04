import { OfficeCleaningClient } from "@/components/services/office-cleaning/OfficeCleaningClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Office Cleaning Services Melbourne | Skill City",
    description: "Professional corporate and office cleaning to boost productivity and maintain a pristine working environment.",
};

export default function OfficeCleaningPage() {
    return <OfficeCleaningClient />;
}
