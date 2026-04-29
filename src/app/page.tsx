import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";

const baseUrl = "https://www.skillcityfs.com.au";

export const metadata: Metadata = {
    title: "Commercial & Office Cleaning Services Australia | Skill City Facility Solutions",
    description: "Professional office and commercial cleaning services across Australia. Trusted by 1000+ active clients. 24/7 reliable service. Get a free quote today.",
    keywords: ["Skill City Facility Solutions", "cleaning Melbourne", "house cleaning Victoria", "office cleaning Oakleigh", "eco-friendly cleaning", "commercial cleaning"],
    alternates: { canonical: baseUrl },
    openGraph: {
        title: "Commercial & Office Cleaning Services Australia | Skill City Facility Solutions",
        description: "Professional office and commercial cleaning services across Australia. Trusted by 1000+ active clients. 24/7 reliable service. Get a free quote today.",
        url: baseUrl,
        siteName: "Skill City Facility Solutions",
        locale: "en_AU",
        type: "website",
        images: [{ url: "/SkillCityPNGLOGO.png", width: 1200, height: 630, alt: "Skill City Facility Solutions" }],
    },
    twitter: { card: "summary_large_image", title: "Commercial & Office Cleaning Services Australia | Skill City Facility Solutions", description: "Professional office and commercial cleaning services across Australia. Trusted by 1000+ active clients. 24/7 reliable service. Get a free quote today." },
    robots: { index: true, follow: true },
};
import FeaturesHero from "@/components/home/FeaturesHero";
import HowItWorks from "@/components/home/HowItWorks";
import LocationsSection from "@/components/home/LocationsSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesSection from "@/components/home/ServicesSection";
import HomeServicesGrid from "@/components/home/HomeServicesGrid";
import ExperienceSection from "@/components/home/ExperienceSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BlogSection from "@/components/home/BlogSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import LicensesSection from "@/components/home/LicensesSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeaturesHero />
            <HowItWorks />
            <LocationsSection />
            <AboutPreview />
            <ServicesSection />
            <LicensesSection />
            <HomeServicesGrid />
            <ExperienceSection />
            <ReviewsSection />
            {/* <WhyChooseUs /> */}
            <BlogSection />
        </>
    );
}
