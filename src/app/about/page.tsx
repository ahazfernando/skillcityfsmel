import { Metadata } from "next";
import { Check, Award, Users, Clock, Heart } from "lucide-react";
import AboutHero from "@/components/about/AboutHero";
import { AboutStoryStats } from "@/components/about/AboutStoryStats";
import cleanHomeImg from "@/assets/clean-home.jpg";
import ProcessWorkflow from "@/components/about/ProcessWorkflow";

export const metadata: Metadata = {
    title: "About Us | Professional Cleaning Team Melbourne & Victoria",
    description: "Skill City Facility Solutions: trusted cleaning services in Melbourne, Oakleigh & Victoria since 2009. 120+ team members, 10K+ cleans, 100% satisfaction.",
    keywords: ["about Skill City", "cleaning company Melbourne", "professional cleaners Victoria", "Oakleigh cleaning"],
    openGraph: {
        title: "About Skill City Facility Solutions | Melbourne & Victoria",
        description: "Trusted cleaning services in Melbourne, Oakleigh & Victoria since 2009. 120+ team, 10K+ cleans, 100% satisfaction.",
        url: "https://www.skillcityfacilitysolutions.com.au/about",
    },
};

const values = [
    {
        icon: Award,
        title: "Excellence",
        description: "We strive for perfection in every clean, ensuring your complete satisfaction.",
    },
    {
        icon: Users,
        title: "Teamwork",
        description: "Our professional team works together seamlessly to deliver outstanding results.",
    },
    {
        icon: Clock,
        title: "Reliability",
        description: "We show up on time, every time, and deliver consistent quality you can count on.",
    },
    {
        icon: Heart,
        title: "Care",
        description: "We treat your home with the same care and respect as we would our own.",
    },
];

const milestones = [
    { year: "2009", title: "Founded", description: "Started with a dream to provide exceptional cleaning services" },
    { year: "2012", title: "50+ Clients", description: "Grew to serve over 50 regular residential clients" },
    { year: "2016", title: "Commercial Expansion", description: "Expanded to commercial cleaning services" },
    { year: "2020", title: "500+ Happy Customers", description: "Reached a milestone of 500+ satisfied customers" },
    { year: "2024", title: "Industry Leader", description: "Recognized as a leading cleaning service provider" },
];

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <AboutHero />

            {/* Our Story */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-xl">
                                <img
                                    src={cleanHomeImg.src}
                                    alt="Clean home interior"
                                    className="w-full h-96 object-cover"
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                Our Story
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                From Small Beginnings to Industry Leaders
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                What started as a small family business has grown into one of the most trusted cleaning service providers in the region. Skill City Facility Solutions started with just a mop, a bucket, and a dream of helping busy families maintain clean, healthy homes.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Today, we're proud to have a team of over 120 professional cleaners serving thousands of satisfied customers. Our commitment to quality, reliability, and exceptional customer service remains at the heart of everything we do.
                            </p>

                            <AboutStoryStats />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Workflow */}
            <ProcessWorkflow />

            {/* Our Values */}
            <section className="section-padding bg-secondary">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Our Values
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                            What Drives Us Every Day
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="bg-card rounded-3xl p-6 text-center hover:shadow-lg transition-shadow"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Our Journey
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                            Milestones Along the Way
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block" />

                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={milestone.year}
                                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                        <div className="bg-card rounded-2xl p-6 shadow-md inline-block">
                                            <span className="text-primary font-bold text-lg">{milestone.year}</span>
                                            <h3 className="text-xl font-semibold text-foreground mt-2">
                                                {milestone.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mt-1">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="w-4 h-4 rounded-full bg-primary z-10 hidden md:block" />

                                    <div className="flex-1 hidden md:block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}
