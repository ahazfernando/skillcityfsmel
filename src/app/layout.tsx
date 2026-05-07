import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/index.css";
import Providers from "./providers";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://www.skillcityfs.com.au";

export const metadata: Metadata = {
    title: {
        default: "Skill City Facility Solutions | Professional Cleaning Services Melbourne & Victoria",
        template: "%s | Skill City Facility Solutions",
    },
    description: "Skill City Facility Solutions, Premium residential and commercial cleaning in Melbourne, Oakleigh & Victoria. Eco-friendly house cleaning, office cleaning, builders cleaning. Free quotes.",
    metadataBase: new URL(SITE_URL),
    keywords: [
        "cleaning services Melbourne",
        "house cleaning Victoria",
        "commercial cleaning Melbourne",
        "office cleaning Oakleigh",
        "builders cleaning",
        "deep cleaning",
        "eco-friendly cleaning",
        "Skill City Facility Solutions",
        "residential cleaning Victoria",
        "end of lease cleaning",
    ],
    authors: [{ name: "Skill City Facility Solutions", url: SITE_URL }],
    creator: "Skill City Facility Solutions",
    publisher: "Skill City Facility Solutions",
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        type: "website",
        locale: "en_AU",
        url: SITE_URL,
        title: "Skill City Facility Solutions | Professional Cleaning Melbourne & Victoria",
        description: "Premium residential and commercial cleaning in Melbourne, Oakleigh & Victoria. Eco-friendly, professional facility solutions. Free quote.",
        siteName: "Skill City Facility Solutions",
        images: [
            {
                url: "/SkillCityPNGLOGO.png",
                width: 1200,
                height: 630,
                alt: "Skill City Facility Solutions - Professional Cleaning Services Melbourne Victoria",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Skill City Facility Solutions | Cleaning Melbourne & Victoria",
        description: "Premium residential and commercial cleaning in Melbourne, Oakleigh & Victoria. Eco-friendly solutions. Free quote.",
        images: ["/SkillCityPNGLOGO.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        // Add when you have them: google: "your-google-verification-code", yandex: "your-yandex-code"
    },
    icons: {
        icon: "/SkillCityPNGLOGO.png",
        apple: "/SkillCityPNGLOGO.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <ClientLayout>{children}</ClientLayout>
                </Providers>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "@id": "https://www.skillcityfs.com.au/#organization",
                            "name": "Skill City Facility Solutions",
                            "description": "Premium residential and commercial cleaning services in Melbourne, Oakleigh and Victoria. Eco-friendly house cleaning, office cleaning, builders cleaning and deep cleaning.",
                            "image": "https://www.skillcityfs.com.au/SkillCityPNGLOGO.png",
                            "url": "https://www.skillcityfs.com.au",
                            "telephone": "+61390346492",
                            "email": "admin@skillcityfacilitysolutions.com.au",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "4A Haughton Road",
                                "addressLocality": "Oakleigh",
                                "postalCode": "3166",
                                "addressRegion": "VIC",
                                "addressCountry": "AU"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": -37.900,
                                "longitude": 145.090
                            },
                            "areaServed": [
                                { "@type": "City", "name": "Melbourne", "containedInPlace": { "@type": "State", "name": "Victoria" } },
                                { "@type": "City", "name": "Oakleigh", "containedInPlace": { "@type": "State", "name": "Victoria" } },
                                { "@type": "State", "name": "Victoria" }
                            ],
                            "openingHoursSpecification": [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                    "opens": "08:00",
                                    "closes": "18:00"
                                },
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": "Saturday",
                                    "opens": "09:00",
                                    "closes": "16:00"
                                }
                            ],
                            "sameAs": [
                                "https://www.facebook.com/skillcityfs",
                                "https://twitter.com/skillcityfs",
                                "https://www.instagram.com/skillcityfs",
                                "https://www.linkedin.com/company/skillcityfs"
                            ],
                            "priceRange": "$$"
                        })
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "@id": "https://www.skillcityfs.com.au/#website",
                            "url": "https://www.skillcityfs.com.au",
                            "name": "Skill City Facility Solutions",
                            "alternateName": "Skill City",
                            "description": "Professional cleaning services in Melbourne, Oakleigh & Victoria. House cleaning, office cleaning, builders cleaning.",
                            "publisher": { "@id": "https://www.skillcityfs.com.au/#organization" },
                            "inLanguage": "en-AU",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": { "@type": "EntryPoint", "urlTemplate": "https://www.skillcityfs.com.au/services?q={search_term_string}" },
                                "query-input": "required name=search_term_string"
                            }
                        })
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "@id": "https://www.skillcityfs.com.au/#organization",
                            "name": "Skill City Facility Solutions",
                            "alternateName": ["Skill City", "Skill City FS"],
                            "url": "https://www.skillcityfs.com.au",
                            "logo": "https://www.skillcityfs.com.au/SkillCityPNGLOGO.png",
                            "description": "Skill City Facility Solutions provides premium residential and commercial cleaning services in Melbourne, Oakleigh and Victoria."
                        })
                    }}
                />
            </body>
        </html>
    );
}
