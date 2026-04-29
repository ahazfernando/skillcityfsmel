import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle2, Star, Sparkles, Building2 } from "lucide-react";

const highlights = [
    "Fully insured & trained staff",
    "Tailored cleaning schedules",
    "100% satisfaction guarantee",
];

export default function CommercialCleaningHero() {
    return (
        <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 overflow-hidden min-h-[90vh] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.15 PM (1).jpeg"
                    alt="Commercial Cleaning Background"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
            </div>
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

            <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 lg:gap-6 items-center flex-1">
                {/* Left — Text content */}
                <div className="space-y-8 mt-12 md:mt-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mt-4 md:mt-0">
                        <Building2 className="w-4 h-4 text-green-300" />
                        <span className="text-white/90 text-sm font-medium tracking-wide uppercase">
                            Premium Corporate Care
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                        Professional Commercial <br />{" "}
                        <span className="text-green-300 font-semibold italic">Cleaning</span>
                        {" "}You Can Trust
                    </h1>

                    <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-lg">
                        Reliable and consistent commercial cleaning services tailored to suit your schedule. We deliver a seamless and efficient service every time.
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
                            href="/contact-us"
                            className="inline-flex items-center gap-2 bg-white text-green-800 font-bold px-6 py-3.5 rounded-full hover:bg-green-50 transition-colors shadow-lg"
                        >
                            Get a Free Quote
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
                            {["BH", "JM", "SC", "RL"].map((initials) => (
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
                            <span className="text-sm text-green-200">500+ Corporate Clients</span>
                        </div>
                    </div>
                </div>

                {/* Right — Hero Image with floating badge */}
                <div className="relative mt-8 lg:mt-0">
                    {/* Image frame */}
                    <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] max-w-lg mx-auto lg:ml-auto border border-green-800/30">
                        <Image
                            src="/CommercialCleaning/CommercialCleaning.png"
                            alt="Commercial Workspace Cleaning"
                            className="w-full h-full object-cover"
                            fill
                            priority
                        />
                    </div>

                    {/* Floating badge */}
                    <div className="absolute bottom-8 -left-4 lg:left-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-green-400/30 border border-green-400/40 flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-green-300" />
                            </div>
                            <div>
                                <p className="font-bold text-white text-sm">Flexible Scheduling</p>
                                <p className="text-green-200 text-xs">After-hours service available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
