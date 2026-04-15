"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Phone,
    CheckCircle2,
    Star,
    Sparkles,
    HelpCircle,
    Plus,
    Minus,
    Shield,
    Clock,
    Award,
    Users as UsersIcon,
    Leaf,
    Target,
    Dumbbell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LocationsSection from "@/components/home/LocationsSection";
import { ServiceOfferingsGrid } from "@/components/services/shared/ServiceOfferingsGrid";
import { GymCleaningInDepthTabs } from "@/components/services/gym-cleaning/GymCleaningInDepthTabs";

const HIGHLIGHTS = [
    "Fully insured & trained staff",
    "Tailored cleaning schedules",
    "100% satisfaction guarantee",
] as const;

const HOW_STEPS = [
    { number: "01", title: "Book Online", description: "Choose your service and schedule a convenient time" },
    { number: "02", title: "We Arrive", description: "Our vetted professionals arrive on time, ready to clean" },
    { number: "03", title: "We Clean", description: "Thorough cleaning following our detailed checklist" },
    { number: "04", title: "You Relax", description: "Enjoy your sparkling clean space, guaranteed" },
] as const;

export function GymCleaningClient() {
    const [openFaq, setOpenFaq] = useState(0);
    const Icon = Dumbbell;
    return (
        <main className="bg-white min-h-screen">
            <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 overflow-hidden min-h-[90vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image src="/home/PHOTO-2026-01-07-18-53-29.jpg" alt="" fill className="object-cover opacity-20" priority />
                </div>
                <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-green-600/30 blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-green-500/20 blur-3xl translate-y-1/2 -translate-x-1/4" />
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />
                <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 lg:gap-6 items-center flex-1">
                    <div className="space-y-8 mt-12 md:mt-16">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mt-4 md:mt-0">
                            <Icon className="w-4 h-4 text-green-300" />
                            <span className="text-white/90 text-sm font-medium tracking-wide uppercase">Gym Cleaning</span>
                        </div>
                        <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                            Professional Gym <br />
                            <span className="text-green-300 font-semibold italic">Cleaning</span> You Can Trust
                        </h1>
                        <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-lg">Equipment sanitisation, change rooms, and studio floors—keep members confident in your hygiene standard.</p>
                        <ul className="flex flex-wrap gap-x-6 gap-y-3">
                            {HIGHLIGHTS.map((h) => (
                                <li key={h} className="flex items-center gap-2 text-green-100 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                                    {h}
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-2 bg-white text-green-800 font-bold px-6 py-3.5 rounded-full hover:bg-green-50 transition-colors shadow-lg"
                            >
                                Get a Free Quote
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
                                <span className="text-sm text-green-200">Fitness industry favourite</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-8 lg:mt-0">
                        <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] max-w-lg mx-auto lg:ml-auto border border-green-800/30">
                            <Image src="/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.15 PM (1).jpeg" alt="" className="w-full h-full object-cover" fill priority />
                        </div>
                        <div className="absolute bottom-8 -left-4 lg:left-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-green-400/30 border border-green-400/40 flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-green-300" />
                                </div>
                                <div>
                                    <p className="font-bold text-white text-sm">Flexible scheduling</p>
                                    <p className="text-green-200 text-xs">After-hours service available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 border-y border-green-800/60 overflow-hidden bg-green-950/60">
                <div
                    className="flex gap-12 items-center whitespace-nowrap"
                    style={{ animation: "svcMarquee 30s linear infinite", width: "max-content" }}
                >
                    {[0, 1].map((set) => (
                        <div key={set} className="flex gap-12 items-center">
                            {[
            "Equipment wipe",
            "Rubber floors",
            "Change rooms",
            "Sauna & steam",
            "Class studios",
            "Peak-hour plans",
            "Odour control",
            "24/7 sites"
                            ].map((text, i) => (
                                <span key={set + "-" + i} className="text-sm font-medium text-green-200 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                                    {text}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
                <style>{`
                    @keyframes svcMarquee {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                `}</style>
            </section>

            <section className="py-24 bg-white overflow-hidden">
                <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[600px] w-full rounded-3xl overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-bl-3xl z-10 hidden md:block" />
                            <Image src="/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.05 PM.jpeg" alt="Gym Cleaning cleaning" fill className="object-cover" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-2 text-[#00b050] font-bold text-sm tracking-wider uppercase">
                                <Sparkles className="w-5 h-5" />
                                Why Choose Us
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] leading-tight lg:-mr-20">
                                Train In A <br className="hidden md:block" />
                                <span className="text-[#00b050] italic">Clean</span>
                            {" "}
                            <span className="italic">Space</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">Members notice details—we reset machines, mats, and wet areas on your peak-off windows.</p>
                            <div className="space-y-8 pt-4">
                                <div className="flex gap-5">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#e5f7ed] flex items-center justify-center border-2 border-[#bce8d0]">
                                        <Shield className="w-8 h-8 text-[#00b050]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#111827] mb-2">High-touch focus</h3>
                                        <p className="text-gray-500 leading-relaxed text-sm md:text-base">Handles, screens, and benches on every visit.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#e5f7ed] flex items-center justify-center border-2 border-[#bce8d0]">
                                        <Leaf className="w-8 h-8 text-[#00b050]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#111827] mb-2">Odor smart</h3>
                                        <p className="text-gray-500 leading-relaxed text-sm md:text-base">Drain and locker programs for change rooms.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6">
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center gap-4 bg-[#1e293b] hover:bg-[#0f172a] text-white rounded-full py-3 px-6 font-semibold transition-colors duration-300"
                                >
                                    <span>Get a Quote</span>
                                    <div className="w-8 h-8 rounded-full bg-[#00b050] flex items-center justify-center">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">Gym cleaning members actually feel</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">Optional mid-day touch programs for 24/7 clubs.</p>
                            <Button className="btn-primary" asChild>
                                <Link href="/contact-us">Request a Quote</Link>
                            </Button>
                            <div className="relative rounded-2xl overflow-hidden shadow-lg mt-6">
                                <img src="/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.23.30 PM.jpeg" alt="Gym Cleaning" className="w-full h-auto max-h-64 object-cover" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { Icon: Shield, title: "Fully Insured & Certified", description: "Vetted teams with full insurance and site-ready certifications." },
                                { Icon: Clock, title: "Reliable Scheduling", description: "After-hours and weekend options that fit your operations." },
                                { Icon: Award, title: "Proven Expertise", description: "Years of facility cleaning across Victoria and Melbourne." },
                                { Icon: UsersIcon, title: "Professional Team", description: "Trained specialists who respect your site and people." },
                                { Icon: Leaf, title: "Eco-Conscious", description: "Effective products chosen for safety and environmental care." },
                                { Icon: Target, title: "Quality Guaranteed", description: "We stand behind our work with clear escalation and re-service." },
                            ].map((feature, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center">
                                        <feature.Icon className="w-7 h-7 text-green-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <GymCleaningInDepthTabs />

            <section className="py-24 bg-[#fcfdfc]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-20 space-y-4">
                        <p className="text-sm font-bold tracking-widest text-[#2f8a42] uppercase">How It Works</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1e3b2b]">Quick and Easy</h2>
                        <p className="text-gray-500 text-lg">Getting your space cleaned has never been easier</p>
                    </div>
                    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 px-4">
                        <div className="hidden lg:block absolute top-[36px] left-[12.5%] right-[12.5%] h-[2px] bg-[#b6d0b9]/40 z-0" />
                        {HOW_STEPS.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center flex flex-col items-center relative z-10"
                            >
                                <div className="text-7xl font-bold text-[#b6d0b9] mb-6 bg-[#fcfdfc] px-6">{step.number}</div>
                                <h3 className="text-xl font-bold text-[#1e3b2b] mb-4">{step.title}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed text-sm max-w-[200px]">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <LocationsSection />
            <ServiceOfferingsGrid currentHref="/services/gym-cleaning" />

            <section className="py-24 bg-[#f8fafc] overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="flex items-center gap-2 text-[#00b050] font-bold text-sm tracking-widest">
                                <HelpCircle className="w-5 h-5" />
                                Frequently Asked Questions
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight mb-8">
                                You Have <span className="text-[#00b050]">Questions,</span>
                                <br />
                                We Have <span className="text-gray-800">Answers</span>
                            </h2>
                            <div className="space-y-4">
                                {[{"question":"What areas do you cover for gym cleaning?","answer":"We scope each site individually—common areas, high-touch surfaces, washrooms, and specialist zones. Contact us for a walkthrough and written scope."},{"question":"Are your products safe for staff and visitors?","answer":"Yes. We use effective, responsibly chosen products and can align with your site's chemical policies or green requirements."},{"question":"How do I book?","answer":"Call 037 044 7710 or use our contact form. We'll propose a schedule and pricing for your facility."},{"question":"Do I need to be on site?","answer":"Not necessarily. Many clients provide after-hours access. We're insured and follow your security protocols."},{"question":"What if something needs a touch-up?","answer":"Tell us within 24 hours and we'll address priority areas as part of our service commitment."}].map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                                            className="w-full flex items-center justify-between py-4 px-6 text-left"
                                        >
                                            <span className="font-semibold text-[#111827] text-lg pr-8">{faq.question}</span>
                                            <span className="flex-shrink-0 text-[#00b050]">
                                                {openFaq === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                            </span>
                                        </button>
                                        <AnimatePresence>
                                            {openFaq === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="px-6 pb-6 text-gray-500 leading-relaxed text-sm md:text-base border-t border-gray-50 pt-4">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl lg:ml-8"
                        >
                            <Image src="/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.15 PM (1).jpeg" alt="Gym Cleaning FAQ" fill className="object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
