import { Shield, Clock, Award, Users, Leaf, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
    {
        icon: Shield,
        title: "Fully Insured & Certified",
        description: "All our team members are fully insured with White Card certification for safe construction site work",
    },
    {
        icon: Clock,
        title: "Fast Turnaround Times",
        description: "We understand deadlines matter. Our efficient team ensures quick completion without compromising quality",
    },
    {
        icon: Award,
        title: "Industry Expertise",
        description: "Years of specialized experience in post-construction cleaning across residential and commercial projects",
    },
    {
        icon: Users,
        title: "Professional Team",
        description: "Highly trained cleaning specialists who treat your project with respect and meticulous attention to detail",
    },
    {
        icon: Leaf,
        title: "Eco-Friendly Methods",
        description: "We use environmentally safe products and sustainable cleaning practices for a healthier outcome",
    },
    {
        icon: Target,
        title: "Quality Guaranteed",
        description: "100% satisfaction guarantee with thorough inspections to ensure every corner meets our high standards",
    },
];

export default function CommercialCleaningBenefits() {
    return (
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Left */}
                    <div className="space-y-6">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                            We Are the Best <br />Option for a Sparkling Workspace
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our commitment to excellence, safety, and customer satisfaction sets us apart. We combine industry expertise with cutting-edge cleaning technology to deliver outstanding results every time.
                        </p>

                        <Button className="btn-primary" asChild>
                            <Link href="/contact-us">Request a Quote</Link>
                        </Button>

                        {/* Image below button */}
                        <div className="relative rounded-2xl overflow-hidden shadow-lg mt-6">
                            <img
                                src="/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.23.30 PM.jpeg"
                                alt="Professional commercial cleaning service"
                                className="w-full h-auto max-h-64 object-cover"
                            />
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="space-y-3">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center">
                                    <feature.icon className="w-7 h-7 text-green-600" />
                                </div>

                                {/* Text */}
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-foreground">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
