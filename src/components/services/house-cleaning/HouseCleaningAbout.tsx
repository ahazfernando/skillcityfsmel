import Image from "next/image";
import Link from "next/link";
import { TrendingUp, ShieldCheck, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

/** macOS screenshot name includes U+202F before AM. */
const ABOUT_SECTION_IMAGE =
    "/servicesimages/Screenshot 2026-05-07 at 10.47.47\u202fAM.png";

const stats = [
    {
        icon: TrendingUp,
        value: "15+",
        label: "Years Experience"
    },
    {
        icon: ShieldCheck,
        value: "300+",
        label: "Security Staff"
    },
    {
        icon: Target,
        value: "1K+",
        label: "Secured Sites"
    }
];

export default function HouseCleaningAbout() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 xl:px-8">
                <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">

                    {/* Left Column: Images & Stats */}
                    <div className="relative">
                        {/* Main Image Container */}
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl mb-8">
                            <Image
                                src={ABOUT_SECTION_IMAGE}
                                alt="Professional Skill City house cleaning team"
                                width={800}
                                height={600}
                                className="w-full h-[400px] object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                            />

                            {/* Overlay Stat Box */}
                            <div className="absolute bottom-6 left-6 bg-[#00b050] text-white p-6 rounded-2xl shadow-xl z-10 w-48">
                                <p className="text-4xl font-bold mb-1">15+</p>
                                <p className="text-white/90 text-sm">Years of Excellence</p>
                            </div>
                        </div>

                        {/* Bottom Stats Row */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                                    <div className="w-12 h-12 rounded-full bg-[#e5f7ed] flex items-center justify-center mb-4 text-[#00b050]">
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <p className="text-2xl font-bold text-[#111827] mb-1">{stat.value}</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-[#00b050]"></div>
                            <span className="text-sm font-bold text-[#00b050] tracking-widest uppercase">
                                WHO WE ARE
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-[#111827]">
                            <span className="block">Your Trusted</span>
                            <span className="block">Partner in</span>
                            <span className="block text-[#00b050] italic font-medium">
                                Expert House Cleaning
                            </span>
                        </h2>

                        <p className="text-gray-500 text-lg leading-relaxed">
                            Professional cleaning services designed to safeguard your home and family. Our experienced team provides comprehensive cleaning solutions tailored to protect what matters most to you.
                        </p>

                        <div className="pt-4">
                            <Button asChild className="bg-[#00b050] hover:bg-[#008f40] text-white px-8 py-6 rounded-xl text-lg font-medium shadow-lg shadow-[#00b050]/20 transition-all duration-300">
                                <Link href="/contact-us">
                                    Book a Free Consultation
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
