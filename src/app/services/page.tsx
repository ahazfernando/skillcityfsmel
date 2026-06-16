import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CertificationTrustBar } from "@/components/shared/CertificationTrustBar";
import { ServiceOfferingsGrid } from "@/components/services/shared/ServiceOfferingsGrid";
import { siteServices } from "@/data/siteServices";

const baseUrl = "https://www.skillcityfacilitysolutions.com.au";

export const metadata: Metadata = {
    title: "Cleaning Services Melbourne & Victoria | House, Office & Builders",
    description:
        "House cleaning, office cleaning, builders cleaning, commercial, medical, industrial and more in Melbourne, Oakleigh & Victoria. Eco-friendly. Free quote.",
    keywords: [
        "cleaning services Melbourne",
        "house cleaning Victoria",
        "office cleaning Oakleigh",
        "builders cleaning",
        "commercial cleaning",
        "end of lease cleaning",
    ],
    alternates: { canonical: `${baseUrl}/services` },
    openGraph: {
        title: "Cleaning Services Melbourne & Victoria | Skill City",
        description:
            "Full range of residential and commercial cleaning across Melbourne, Oakleigh & Victoria. Eco-friendly. Free quote.",
        url: `${baseUrl}/services`,
        siteName: "Skill City Facility Solutions",
        locale: "en_AU",
        type: "website",
        images: [
            {
                url: "/SkillCityPNGLOGO.png",
                width: 1200,
                height: 630,
                alt: "Skill City Facility Solutions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cleaning Services Melbourne & Victoria | Skill City",
        description: "House, office, builders & commercial cleaning in Melbourne & Victoria. Free quote.",
    },
    robots: { index: true, follow: true },
};

const servicesItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Cleaning Services Melbourne Victoria",
    description:
        "Professional cleaning services in Melbourne, Oakleigh and Victoria: residential, commercial, healthcare, industrial, and specialist facility cleaning.",
    itemListElement: siteServices.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        url: `${baseUrl}${service.href}`,
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/services` },
    ],
};

export default function Services() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesItemListSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <section className="bg-secondary pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container-custom text-center">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        Our Services
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                        Professional Cleaning Solutions
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From house and office cleaning to healthcare, industrial, and specialist
                        facility services, Skill City delivers professional cleaning across Melbourne
                        and Victoria.
                    </p>
                    <CertificationTrustBar variant="light" align="center" className="mt-10 max-w-3xl mx-auto" />
                </div>
            </section>

            <ServiceOfferingsGrid
                eyebrow="What we do"
                title="All services we provide"
                description="Browse every cleaning service Skill City offers. Select a service to learn what is included, how we work, and request a tailored quote."
                variant="pill-list"
            />

            <section className="section-padding bg-secondary">
                <div className="container-custom text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Not sure which service you need?
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                        Tell us about your property and schedule. We will recommend the right
                        cleaning plan and provide a free quote.
                    </p>
                    <Button className="btn-primary inline-flex items-center gap-2" asChild>
                        <Link href="/contact-us">
                            Book a Free Consultation
                            <ArrowRight className="w-4 h-4" aria-hidden />
                        </Link>
                    </Button>
                </div>
            </section>
        </>
    );
}
