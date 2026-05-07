import { Metadata } from "next";
import { ArrowRight, Home, Building2, Sparkles, Truck, Star, CheckCircle } from "lucide-react";

const baseUrl = "https://www.skillcityfacilitysolutions.com.au";

export const metadata: Metadata = {
    title: "Cleaning Services Melbourne & Victoria | House, Office & Builders",
    description: "House cleaning, office cleaning, builders cleaning, deep cleaning & move-in/out in Melbourne, Oakleigh & Victoria. Eco-friendly. Free quote.",
    keywords: ["cleaning services Melbourne", "house cleaning Victoria", "office cleaning Oakleigh", "builders cleaning", "deep cleaning", "move out cleaning"],
    alternates: { canonical: `${baseUrl}/services` },
    openGraph: {
        title: "Cleaning Services Melbourne & Victoria | Skill City",
        description: "House, office, builders & deep cleaning in Melbourne, Oakleigh & Victoria. Eco-friendly. Free quote.",
        url: `${baseUrl}/services`,
        siteName: "Skill City Facility Solutions",
        locale: "en_AU",
        type: "website",
        images: [{ url: "/SkillCityPNGLOGO.png", width: 1200, height: 630, alt: "Skill City Facility Solutions" }],
    },
    twitter: { card: "summary_large_image", title: "Cleaning Services Melbourne & Victoria | Skill City", description: "House, office, builders & deep cleaning in Melbourne & Victoria. Free quote." },
    robots: { index: true, follow: true },
};
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CertificationTrustBar } from "@/components/shared/CertificationTrustBar";
import cleanHomeImg from "@/assets/clean-home.jpg";

const baseUrlSchema = "https://www.skillcityfacilitysolutions.com.au";

const servicesItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Cleaning Services Melbourne Victoria",
    "description": "Professional cleaning services in Melbourne, Oakleigh and Victoria: house cleaning, office cleaning, builders cleaning, deep cleaning, move in/out.",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "House Cleaning", "url": `${baseUrlSchema}/services/house-cleaning` },
        { "@type": "ListItem", "position": 2, "name": "Builders Cleaning", "url": `${baseUrlSchema}/services/builders-cleaning` },
        { "@type": "ListItem", "position": 3, "name": "Office Cleaning", "url": `${baseUrlSchema}/services` },
        { "@type": "ListItem", "position": 4, "name": "Deep Cleaning", "url": `${baseUrlSchema}/services` },
        { "@type": "ListItem", "position": 5, "name": "Move In/Out Cleaning", "url": `${baseUrlSchema}/services` },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrlSchema },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": `${baseUrlSchema}/services` },
    ],
};
import officeCleaningImg from "@/assets/office-cleaning.jpg";
import deepCleaningImg from "@/assets/deep-cleaning.jpg";
import moveCleaningImg from "@/assets/move-cleaning.jpg";

const services = [
    {
        icon: Home,
        title: "House Cleaning",
        description: "Our house cleaning services are designed to give your home a thorough, professional clean. From dusting and vacuuming to bathroom sanitization, we cover every corner of your living space.",
        image: cleanHomeImg,
        features: ["Kitchen deep clean", "Bathroom sanitization", "Bedroom & living areas", "Floor mopping & vacuuming"],
        href: "/services/house-cleaning",
    },
    {
        icon: Building2,
        title: "Office Cleaning",
        description: "Maintain a productive and healthy work environment with our commercial cleaning services. We work around your schedule to ensure minimal disruption to your business operations.",
        image: officeCleaningImg,
        features: ["Desk & workspace cleaning", "Restroom sanitization", "Kitchen/break room cleaning", "Floor care & maintenance"],
        href: "/services/office-cleaning",
    },
    {
        icon: Sparkles,
        title: "Deep Cleaning",
        description: "Our deep cleaning service goes beyond regular cleaning to tackle built-up grime, hidden dust, and those hard-to-reach areas that need extra attention.",
        image: deepCleaningImg,
        features: ["Behind appliances", "Inside cabinets & closets", "Baseboards & light fixtures", "Grout & tile deep clean"],
        href: "/services/commercial-cleaning",
    },
    {
        icon: Truck,
        title: "Move In/Out Cleaning",
        description: "Whether you're moving into a new home or preparing your old one for new occupants, our move-in/out cleaning service ensures every space is spotless.",
        image: moveCleaningImg,
        features: ["Complete property cleaning", "Appliance cleaning", "Carpet deep cleaning", "Window & glass cleaning"],
        href: "/services/end-of-lease-cleaning",
    },
];

const additionalServices = [
    "Window Cleaning",
    "Carpet Cleaning",
    "Upholstery Cleaning",
    "Post-Construction Cleaning",
    "Airbnb/Vacation Rental Cleaning",
    "Event Cleanup",
];

export default function Services() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesItemListSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            {/* Hero Section */}
            <section className="bg-secondary pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container-custom text-center">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        Our Services
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                        Professional Cleaning Solutions
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From regular house cleaning to specialized deep cleaning services, we have the expertise to make your space shine.
                    </p>
                    <CertificationTrustBar variant="light" align="center" className="mt-10 max-w-3xl mx-auto" />
                </div>
            </section>

            {/* Main Services */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="space-y-16">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Image */}
                                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                                        <img
                                            src={service.image.src}
                                            alt={service.title}
                                            className="w-full h-80 object-cover"
                                        />

                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <service.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-foreground">
                                        {service.title}
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {service.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2">
                                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                                <span className="text-foreground text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                        <Button className="btn-primary flex items-center justify-center gap-2" asChild>
                                            <Link href="/contact-us">
                                                Get a Quote
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </Button>
                                        <Button variant="outline" className="flex items-center justify-center gap-2 border-primary text-primary hover:bg-primary/5" asChild>
                                            <Link href={service.href}>
                                                Learn More
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="section-padding bg-secondary">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            Additional Services
                        </h2>
                        <p className="text-muted-foreground">
                            We also offer specialized cleaning services to meet all your needs.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {additionalServices.map((service) => (
                            <div
                                key={service}
                                className="bg-card rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow"
                            >
                                <Star className="w-6 h-6 text-accent" />
                                <span className="font-medium text-foreground">{service}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button className="btn-secondary" asChild>
                            <Link href="/contact-us">Contact Us for Custom Quotes</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
