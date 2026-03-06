import { CheckCircle, Building2, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const trustBadges = [
    { icon: CheckCircle, text: "GPS Tracked" },
    { icon: CheckCircle, text: "Police Cleared" },
    { icon: CheckCircle, text: "Verified ID" },
];

export function CouncilCleaningHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/home/PHOTO-2025-10-06-14-54-06.jpg"
                    alt="Council and Community Cleaning"
                    className="w-full h-full object-cover"
                />
                {/* Dark Green Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-900/90 to-green-900/80" />
            </div>

            {/* Wavy Bottom Edge */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                </svg>
            </div>

            {/* Content */}
            <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
                    {/* Left Content */}
                    <div className="text-white space-y-6">
                        <div className="inline-block">
                            <span className="text-sm font-semibold uppercase tracking-wider text-green-300">
                                ✓ Community & Public Spaces
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Pristine Environments <br /> for the{" "}
                            <span className="italic text-green-300">Public</span>
                        </h1>

                        <p className="text-lg text-white/90 max-w-lg">
                            Specialized cleaning for public and community facilities. Public spaces see immense foot traffic every day, making a pristine environment essential to community health and civic pride.
                        </p>

                        {/* Button and Reviews */}
                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-xl">
                                <Link href="/contact-us">
                                    Schedule a Walkthrough →
                                </Link>
                            </Button>

                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    <div className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center">
                                        <Building2 className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center">
                                        <Users className="w-5 h-5 text-primary" />
                                    </div>
                                </div>
                                <div className="text-white">
                                    <p className="font-semibold">Trusted Partner</p>
                                    <p className="text-sm text-white/80">for Local Councils</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-6 pt-4">
                            {trustBadges.map((badge, index) => (
                                <div key={index} className="flex items-center gap-2 text-white/90">
                                    <badge.icon className="w-5 h-5 text-green-300" />
                                    <span className="text-sm font-medium">{badge.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="lg:ml-auto max-w-md w-full">
                        <div className="bg-green-800/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Civic Cleaning
                            </h3>
                            <p className="text-white/80 text-sm mb-8">
                                Our professional cleaning services and thorough processes ensure your community centers stay fresh, safe, and welcoming.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="flex items-start gap-3">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                                        <Building2 className="w-6 h-6 text-green-300" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-white">50+</p>
                                        <p className="text-sm text-white/70">Facilities</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                                        <Users className="w-6 h-6 text-green-300" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-white">10K+</p>
                                        <p className="text-sm text-white/70">Visitors Daily</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl text-base font-semibold">
                                <Link href="/contact-us">
                                    Request a Quote →
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CouncilCleaningHero;
