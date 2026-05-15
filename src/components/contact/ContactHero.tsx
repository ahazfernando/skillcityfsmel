import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ReviewSocialProofStrip } from "@/components/shared/ReviewSocialProofStrip";

const ContactHero = () => {
    const heroImage = "/contacthero/Can_we_have_this_person_202605151221.jpeg";

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-forest/80 via-forest/60 to-forest/30" />

            <div className="container mx-auto px-4 relative z-10 pt-24 pb-32 md:pt-28 md:pb-36">
                <div className="max-w-2xl text-white">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-[2px] bg-primary" />
                        <span className="text-white font-semibold text-sm uppercase tracking-wider">
                            Book a Free Consultation
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                        <span className="font-semibold">Ready for Spotless</span>
                        <br />
                        <span className="font-medium italic">
                            Cleaning? We&apos;re Here
                            <br />
                            to Help!
                        </span>
                    </h1>

                    <p className="text-white/80 text-lg mb-8 max-w-xl">
                        Reach out for a free, no-obligation quote. Whether it&apos;s commercial,
                        industrial, or childcare cleaning we&apos;ll tailor a plan for your space.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-10">
                        <Button
                            asChild
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold shadow-lg group"
                        >
                            <Link href="#contact-form">
                                Get a Quote
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>

                        <ReviewSocialProofStrip
                            starClassName="fill-yellow-400 text-yellow-400"
                            labelClassName="text-white/90"
                        />

                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span className="text-white/80 text-sm">Licensed & Insured</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span className="text-white/80 text-sm">Eco-Friendly Products</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span className="text-white/80 text-sm">100% Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-auto fill-white">
                    <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
                </svg>
            </div>
        </section>
    );
};

export default ContactHero;
