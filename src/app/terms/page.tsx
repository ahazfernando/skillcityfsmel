import type { Metadata } from "next";
import TermsAndConditionsContent from "@/components/legal/TermsAndConditionsContent";

const baseUrl = "https://www.skillcityfs.com.au";

export const metadata: Metadata = {
    title: "Terms and Conditions",
    description:
        "Terms and conditions for using the Skill City Facility Solutions website and engaging our cleaning services in Melbourne and Victoria.",
    alternates: {
        canonical: `${baseUrl}/terms`,
    },
    openGraph: {
        title: "Terms and Conditions | Skill City Facility Solutions",
        description:
            "Read the terms that apply when you book or use cleaning services from Skill City Facility Solutions.",
        url: `${baseUrl}/terms`,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function TermsPage() {
    return <TermsAndConditionsContent />;
}
