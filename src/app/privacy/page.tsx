import type { Metadata } from "next";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";

const baseUrl = "https://www.skillcityfs.com.au";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Read how Skill City Facility Solutions collects, uses, stores, and protects your personal information under Australian privacy law.",
    alternates: {
        canonical: `${baseUrl}/privacy`,
    },
    openGraph: {
        title: "Privacy Policy | Skill City Facility Solutions",
        description:
            "How we handle your personal information when you use our website, contact us, or engage our cleaning services.",
        url: `${baseUrl}/privacy`,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPage() {
    return <PrivacyPolicyContent />;
}
