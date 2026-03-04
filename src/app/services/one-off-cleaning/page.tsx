import { OneOffCleaningClient } from "@/components/services/one-off-cleaning/OneOffCleaningClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "One-Off & Spring Cleaning Melbourne | Skill City",
    description: "Urgent or special occasion cleaning services. From pre-inspection refreshes to post-event cleanups.",
};

export default function OneOffCleaningPage() {
    return <OneOffCleaningClient />;
}
