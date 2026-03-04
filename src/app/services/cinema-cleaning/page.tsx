import { CinemaCleaningClient } from "@/components/services/cinema-cleaning/CinemaCleaningClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cinema & Theater Cleaning Melbourne | Skill City",
    description: "Specialized cleaning for cinemas, theaters, and entertainment venues.",
};

export default function CinemaCleaningPage() {
    return <CinemaCleaningClient />;
}
