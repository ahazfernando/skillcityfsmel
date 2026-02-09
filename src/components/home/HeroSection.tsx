"use client";

import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-start pt-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Productlaun.png"
                    alt="Cleaning equipment background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>


            {/* Content */}
            <div className="container-custom relative z-10 text-center">
                <p className="text-sm md:text-base font-medium text-primary/80 uppercase tracking-widest mb-4 animate-fade-in">
                    Skill City Facility Solutions
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 animate-fade-in leading-[1.1] text-primary">
                    Professional Commercial & Office Cleaning Services Across Australia
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-in-up font-normal">
                    Skill City Facility Solutions turns messy environments into spotless sanctuaries with
                    professional, eco-friendly cleaning across Melbourne, Oakleigh and Victoria.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-medium shadow-xl transition-all hover:scale-105" asChild>
                        <Link href="/contact-us">
                            Book a Free Consultation
                        </Link>
                    </Button>

                    <Button className="bg-transparent border border-primary/20 text-primary hover:bg-primary/5 rounded-full px-8 py-6 text-lg font-medium backdrop-blur-sm transition-all" asChild>
                        <Link href="/services">
                            Learn More
                        </Link>
                    </Button>
                </div>
            </div>


        </section>
    );
};

export default HeroSection;
