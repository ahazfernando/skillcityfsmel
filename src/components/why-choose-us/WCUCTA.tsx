import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function WCUCTA() {
    return (
        <section className="py-16 px-4 md:px-6">
            <div className="container mx-auto">
                <div className="relative bg-green-700 rounded-[2.5rem] overflow-hidden">
                    {/* Background image (right side) */}
                    <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
                        <Image
                            src="/home/PHOTO-2026-01-07-18-53-29.jpg"
                            alt="Professional cleaning team"
                            fill
                            className="object-cover opacity-30"
                            unoptimized
                        />
                        {/* Gradient mask */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-700/80 to-transparent" />
                    </div>

                    {/* Decorative blob */}
                    <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-green-600/40 blur-3xl" />

                    {/* Content */}
                    <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 max-w-2xl">
                        <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-6">
                            <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                            <span className="text-white text-xs font-semibold uppercase tracking-wider">
                                Get Started Today
                            </span>
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                            Ready to Experience the{" "}
                            <span className="text-green-300">Skill City Difference?</span>
                        </h2>

                        <p className="text-green-100 text-lg mb-10 leading-relaxed">
                            Book a free consultation today and discover why hundreds of
                            Melbourne businesses and homeowners trust us with their spaces.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-white text-green-800 font-bold px-7 py-4 rounded-full hover:bg-green-50 transition-colors shadow-lg"
                            >
                                Book a Free Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a
                                href="tel:+61370447710"
                                className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-7 py-4 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                037 044 7710
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
