import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle2, Star, Sparkles } from "lucide-react";

const highlights = [
    "Fully insured & background-checked team",
    "Eco-friendly products",
    "100% satisfaction guarantee",
];

export default function WCUHero() {
    return (
        <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 overflow-hidden min-h-[90vh] flex items-center">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-green-600/30 blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-green-500/20 blur-3xl translate-y-1/2 -translate-x-1/4" />
            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
                {/* Left — Text content */}
                <div className="space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
                        <Sparkles className="w-4 h-4 text-green-300" />
                        <span className="text-white/90 text-sm font-medium tracking-wide uppercase">
                            Why Skill City
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                        Why Skill City <br />{" "}
                        <span className="text-green-300 font-semibold italic">is the Right Choice</span>
                    </h1>

                    <p className="text-green-100 text-lg lg:text-xl leading-relaxed max-w-lg">
                        For over two decades we&apos;ve set the standard in facility cleaning
                        across Melbourne &amp; Victoria.
                    </p>

                    {/* Highlights */}
                    <ul className="flex flex-wrap gap-x-6 gap-y-3">
                        {highlights.map((h) => (
                            <li key={h} className="flex items-center gap-2 text-green-100 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                                {h}
                            </li>
                        ))}
                    </ul>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white text-green-800 font-bold px-6 py-3.5 rounded-full hover:bg-green-50 transition-colors shadow-lg"
                        >
                            Book a Free Consultation
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="tel:+61390346492"
                            className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            03 9034 6492
                        </a>
                    </div>

                    {/* Trust badges */}
                    <div className="flex items-center gap-6 pt-2">
                        <div className="flex -space-x-2">
                            {["SM", "JW", "LK", "AP"].map((initials) => (
                                <div
                                    key={initials}
                                    className="w-10 h-10 rounded-full bg-green-400/30 border-2 border-white/40 flex items-center justify-center text-xs font-bold text-white"
                                >
                                    {initials}
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="flex gap-0.5 mb-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-sm text-green-200">1,200+ 5-star reviews</span>
                        </div>
                    </div>
                </div>

                {/* Right — Hero Image with floating badge */}
                <div className="relative">
                    {/* Image frame */}
                    <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] max-w-lg mx-auto lg:ml-auto">
                        <Image
                            src="/widgetservices/CleaningImageD1.png"
                            alt="Professional Skill City cleaning team"
                            className="w-full h-full object-cover"
                            fill
                        />
                    </div>

                    {/* Floating badge */}
                    <div className="absolute bottom-8 -left-4 lg:left-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-green-400/30 border border-green-400/40 flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-green-300" />
                            </div>
                            <div>
                                <p className="font-bold text-white text-sm">100% Eco-Friendly</p>
                                <p className="text-green-200 text-xs">Certified green products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

