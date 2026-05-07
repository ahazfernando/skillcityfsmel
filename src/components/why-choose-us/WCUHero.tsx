import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle2, Star, Sparkles } from "lucide-react";

import { CertificationTrustBar } from "@/components/shared/CertificationTrustBar";

const highlights = [
    "Fully insured & background-checked team",
    "Eco-friendly products",
];

/** Headshots from `public/peoplelogos` (same faces as Google reviews section). */
const heroReviewFaces = [
    { src: "/peoplelogos/LiamCarter.png", alt: "Liam Carter" },
    { src: "/peoplelogos/SophieBennett.png", alt: "Sophie Bennett" },
    { src: "/peoplelogos/DanielHarper.png", alt: "Daniel Harper" },
] as const;

/** Filename uses U+202F before AM (macOS screenshot naming). */
const WCU_HERO_IMAGE =
    "/servicesimages/Screenshot 2026-05-07 at 10.45.48\u202fAM.png";

export default function WCUHero() {
    return (
        <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 h-[480px] w-[480px] -translate-y-1/2 translate-x-1/4 rounded-full bg-green-600/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/4 translate-y-1/2 rounded-full bg-green-500/20 blur-3xl" />
            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-24 md:px-6 lg:grid-cols-2 lg:gap-6 lg:py-32">
                {/* Left, Text content */}
                <div className="space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                        <Sparkles className="h-4 w-4 text-green-300" />
                        <span className="text-sm font-medium uppercase tracking-wide text-white/90">
                            Why Skill City
                        </span>
                    </div>

                    <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                        Why Skill City <br />{" "}
                        <span className="font-semibold italic text-green-300">is the Right Choice</span>
                    </h1>

                    <p className="max-w-lg text-lg leading-relaxed text-green-100 lg:text-xl">
                        For over two decades we&apos;ve set the standard in facility cleaning across Melbourne &amp;
                        Victoria.
                    </p>

                    {/* Highlights */}
                    <ul className="flex flex-wrap gap-x-6 gap-y-3">
                        {highlights.map((h) => (
                            <li key={h} className="flex items-center gap-2 text-sm text-green-100">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-400" />
                                {h}
                            </li>
                        ))}
                    </ul>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-green-800 shadow-lg transition-colors hover:bg-green-50"
                        >
                            Book a Free Consultation
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <a
                            href="tel:+61390346492"
                            className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
                        >
                            <Phone className="h-4 w-4" />
                            03 9034 6492
                        </a>
                    </div>

                    <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-end sm:justify-between">
                        <CertificationTrustBar
                            variant="white"
                            align="center"
                            compact
                            caption="Our Certifications and Licences"
                            className="w-fit max-w-md self-start border-gray-200/90"
                        />

                        {/* Trust badges */}
                        <div className="flex items-center gap-4 self-start sm:self-auto">
                            <div className="flex -space-x-2">
                                {heroReviewFaces.map((face) => (
                                    <div
                                        key={face.src}
                                        className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white/40 bg-green-400/30 ring-2 ring-green-900/40"
                                    >
                                        <Image
                                            src={face.src}
                                            alt={face.alt}
                                            fill
                                            className="object-cover"
                                            sizes="40px"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="mb-0.5 flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-sm text-green-200">100+ 5-star reviews</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right, Hero Image with floating badge */}
                <div className="relative">
                    <div className="relative z-10 mx-auto aspect-[4/5] max-w-lg overflow-hidden rounded-[2rem] shadow-2xl lg:ml-auto">
                        <Image
                            src={WCU_HERO_IMAGE}
                            alt="Modern commercial kitchen and breakroom cleaned by Skill City"
                            className="h-full w-full object-cover"
                            fill
                            sizes="(min-width: 1024px) 512px, 90vw"
                            priority
                        />
                    </div>

                    <div className="absolute -left-4 bottom-8 z-20 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md lg:left-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-400/40 bg-green-400/30">
                                <CheckCircle2 className="h-6 w-6 text-green-300" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">100% Eco-Friendly</p>
                                <p className="text-xs text-green-200">Certified green products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
