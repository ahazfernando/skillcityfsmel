import { Metadata } from "next";
import WCUHero from "@/components/why-choose-us/WCUHero";
import WCUMarquee from "@/components/why-choose-us/WCUMarquee";
import WCUDifferentiators from "@/components/why-choose-us/WCUDifferentiators";
import WCUCommitments from "@/components/why-choose-us/WCUCommitments";
import WCUProcess from "@/components/why-choose-us/WCUProcess";
import WCUCTA from "@/components/why-choose-us/WCUCTA";

export const metadata: Metadata = {
    title: "Why Choose Us | Skill City Facility Solutions",
    description: "Discover why 1,000+ Melbourne businesses and homeowners trust Skill City Facility Solutions, 20+ years experience, trained staff, eco-friendly products and a 100% satisfaction guarantee.",
    keywords: ["why choose Skill City", "best cleaning company Melbourne", "professional cleaners Victoria", "trusted cleaning service Oakleigh"],
    openGraph: {
        title: "Why Choose Skill City Facility Solutions | Melbourne & Victoria",
        description: "20+ years experience, rigorous training, eco-friendly products and a 100% satisfaction guarantee. Find out what sets us apart.",
        url: "https://www.skillcityfs.com.au/why-choose-us",
    },
};

export default function WhyChooseUsPage() {
    return (
        <>
            <WCUHero />
            <WCUMarquee />
            <WCUDifferentiators />
            <WCUCommitments />
            <WCUProcess />
            <WCUCTA />
        </>
    );
}
