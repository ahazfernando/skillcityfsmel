import { HouseCleaningHero } from "@/components/services/house-cleaning/HouseCleaningHero";
import HouseCleaningAbout from "@/components/services/house-cleaning/HouseCleaningAbout";
import { HouseCleaningLocations } from "@/components/services/house-cleaning/HouseCleaningLocations";
import HouseCleaningSmarter from "@/components/services/house-cleaning/HouseCleaningSmarter";
import { HouseCleaningInDepthTabs } from "@/components/services/house-cleaning/HouseCleaningInDepthTabs";
import { HouseCleaningProcess } from "@/components/services/house-cleaning/HouseCleaningProcess";
import { HouseCleaningReviews } from "@/components/services/house-cleaning/HouseCleaningReviews";
import { HouseCleaningCTA } from "@/components/services/house-cleaning/HouseCleaningCTA";
import { Metadata } from "next";

const baseUrl = "https://www.skillcityfacilitysolutions.com.au";

const houseBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": `${baseUrl}/services` },
        { "@type": "ListItem", "position": 3, "name": "House Cleaning", "item": `${baseUrl}/services/house-cleaning` },
    ],
};

export const metadata: Metadata = {
    title: "House Cleaning Melbourne & Victoria | Premium Home Cleaning",
    description: "Professional house cleaning in Melbourne, Oakleigh & Victoria. Eco-friendly, thorough home cleaning. Regular & deep cleaning. Free quote.",
    keywords: ["house cleaning Melbourne", "home cleaning Victoria", "Oakleigh house cleaning", "eco-friendly house cleaning"],
    alternates: { canonical: `${baseUrl}/services/house-cleaning` },
    openGraph: {
        title: "House Cleaning Melbourne & Victoria | Skill City",
        description: "Premium, eco-friendly house cleaning in Melbourne, Oakleigh & Victoria. Free quote.",
        url: `${baseUrl}/services/house-cleaning`,
        siteName: "Skill City Facility Solutions",
        locale: "en_AU",
        type: "website",
        images: [{ url: "/SkillCityPNGLOGO.png", width: 1200, height: 630, alt: "Skill City House Cleaning" }],
    },
    twitter: { card: "summary_large_image", title: "House Cleaning Melbourne & Victoria | Skill City", description: "Premium house cleaning in Melbourne & Victoria. Free quote." },
    robots: { index: true, follow: true },
};

export default function HouseCleaningPage() {
    return (
        <main className="bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(houseBreadcrumbSchema) }} />
            <HouseCleaningHero />
            <HouseCleaningAbout />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "House Cleaning Services",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Skill City Facility Solutions"
                        },
                        "areaServed": [
                            { "@type": "City", "name": "Melbourne", "containedInPlace": { "@type": "State", "name": "Victoria" } },
                            { "@type": "City", "name": "Oakleigh", "containedInPlace": { "@type": "State", "name": "Victoria" } },
                            { "@type": "State", "name": "Victoria" }
                        ],
                        "description": "Professional house cleaning services including deep cleaning, regular maintenance, and eco-friendly options.",
                        "offers": {
                            "@type": "Offer",
                            "priceCurrency": "AUD",
                            "availability": "https://schema.org/InStock",
                            "price": "Call for Quote"
                        }
                    })
                }}
            />
            <HouseCleaningSmarter />
            <HouseCleaningInDepthTabs />
            <HouseCleaningLocations />
            <HouseCleaningProcess />
            <HouseCleaningReviews />
            <HouseCleaningCTA />
        </main>
    );
}
