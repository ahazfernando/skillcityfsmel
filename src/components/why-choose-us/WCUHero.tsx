import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "10K+", label: "Cleans Completed" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "50+", label: "Expert Staff" },
];

const highlights = [
    "Fully insured & background-checked team",
    "Eco-friendly products",
    "100% satisfaction guarantee",
];

export default function WCUHero() {
    return (
        <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 overflow-hidden">
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

            <div className="relative container mx-auto px-4 md:px-6 py-24 lg:py-32">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/90 text-sm font-medium tracking-wide uppercase">
                        Why Skill City
                    </span>
                </div>

                <div className="max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                        Why Skill City is the{" "}
                        <span className="text-green-300 italic">Right Choice</span>
                    </h1>
                    <p className="text-green-100 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
                        For over two decades we&apos;ve set the standard in facility cleaning
                        across Melbourne &amp; Victoria — combining rigorous training,
                        cutting-edge technology and genuinely valued client relationships.
                    </p>

                    {/* Highlights */}
                    <ul className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
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
                            href="tel:+61370447710"
                            className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            037 044 7710
                        </a>
                    </div>
                </div>

                {/* Stats strip */}
                <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/20 pt-10">
                    {stats.map((s) => (
                        <div key={s.label} className="text-center sm:text-left">
                            <p className="text-4xl font-extrabold text-white mb-1">{s.value}</p>
                            <p className="text-green-200 text-sm">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
