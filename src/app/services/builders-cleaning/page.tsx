import { Metadata } from "next";
import { BuildersHeroSection } from "@/components/services/BuildersHeroSection";
import { BuildersHeroImmersive } from "@/components/services/BuildersHeroImmersive";

const baseUrl = "https://www.skillcityfacilitysolutions.com.au";

const buildersBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": `${baseUrl}/services` },
        { "@type": "ListItem", "position": 3, "name": "Builders Cleaning", "item": `${baseUrl}/services/builders-cleaning` },
    ],
};

const buildersServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Builders Cleaning & Post-Construction Cleaning",
    "description": "Professional builders cleaning and post-construction cleaning in Melbourne, Oakleigh and Victoria. End-of-build clean, dust removal, site handover.",
    "provider": { "@type": "LocalBusiness", "name": "Skill City Facility Solutions", "url": baseUrl },
    "areaServed": [{ "@type": "City", "name": "Melbourne", "containedInPlace": { "@type": "State", "name": "Victoria" } }, { "@type": "State", "name": "Victoria" }],
    "offers": { "@type": "Offer", "priceCurrency": "AUD", "availability": "https://schema.org/InStock", "priceSpecification": { "@type": "PriceSpecification", "price": "0", "priceCurrency": "AUD", "valueAddedTaxIncluded": false } },
};

export const metadata: Metadata = {
    title: "Builders Cleaning Melbourne & Victoria | Post-Construction Cleaning",
    description: "Professional builders cleaning and post-construction cleaning in Melbourne, Oakleigh & Victoria. End-of-build clean, dust removal, site handover.",
    keywords: ["builders cleaning Melbourne", "post construction cleaning Victoria", "Oakleigh builders clean", "end of build cleaning"],
    alternates: { canonical: `${baseUrl}/services/builders-cleaning` },
    openGraph: {
        title: "Builders Cleaning Melbourne & Victoria | Skill City",
        description: "Post-construction and builders cleaning in Melbourne, Oakleigh & Victoria. Free quote.",
        url: `${baseUrl}/services/builders-cleaning`,
        siteName: "Skill City Facility Solutions",
        locale: "en_AU",
        type: "website",
        images: [{ url: "/SkillCityPNGLOGO.png", width: 1200, height: 630, alt: "Skill City Builders Cleaning" }],
    },
    twitter: { card: "summary_large_image", title: "Builders Cleaning Melbourne & Victoria | Skill City", description: "Post-construction cleaning in Melbourne & Victoria. Free quote." },
    robots: { index: true, follow: true },
};
import { BuildersHeroCard } from "@/components/services/BuildersHeroCard";
import { BuildersProcessSection } from "@/components/services/BuildersProcessSection";
import LocationsSection from "@/components/home/LocationsSection";
import { BuildersWhyChooseUs } from "@/components/services/BuildersWhyChooseUs";
import { BuildersCleaningInDepthTabs } from "@/components/services/builders-cleaning/BuildersCleaningInDepthTabs";

export default function BuildersCleaningPage() {
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildersBreadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildersServiceSchema) }} />
            {/* --- Design Option 2 --- */}
            <div className="bg-slate-100 py-2 text-center uppercase text-xs font-bold tracking-widest text-slate-400">Option 2: Immersive Visual</div>
            <BuildersHeroImmersive />

            {/* --- Design Option 3 --- */}

            <BuildersHeroCard />
            <BuildersProcessSection />
            <BuildersCleaningInDepthTabs />
            <LocationsSection />
            <BuildersWhyChooseUs />
        </main>
    );
}
