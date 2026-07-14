import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Home, KeyRound, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CertificationTrustBar } from "@/components/shared/CertificationTrustBar";

const ABOUT_SECTION_IMAGE = "/Housecleaning/I_need_the_people_here_202605181047.jpeg";

const services: { title: string; href: string; icon: LucideIcon }[] = [
    { title: "One Off Cleaning", href: "/services/one-off-cleaning", icon: Home },
    { title: "End of Lease Cleaning", href: "/services/end-of-lease-cleaning", icon: KeyRound },
    { title: "Carpet Cleaning", href: "/contact-us", icon: Layers },
];

export default function HouseCleaningAbout() {
    return (
        <section className="py-20 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 xl:px-8">
                <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
                    <div className="relative">
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
                            <Image
                                src={ABOUT_SECTION_IMAGE}
                                alt="Skill City house cleaning team at work"
                                width={800}
                                height={600}
                                className="w-full h-[380px] md:h-[420px] object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                            />

                            <div className="absolute bottom-6 left-6 bg-primary text-primary-foreground px-6 py-5 rounded-2xl shadow-xl z-10 min-w-[9rem]">
                                <p className="text-4xl font-bold leading-none mb-1">15+</p>
                                <p className="text-white/90 text-sm font-medium">Years of Excellence</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="h-px w-10 bg-primary" />
                                <h3 className="text-sm font-bold text-primary tracking-widest uppercase">
                                    Our Services
                                </h3>
                            </div>
                            <div className="grid grid-cols-3 gap-3 sm:gap-4">
                                {services.map((service) => {
                                    const Icon = service.icon;
                                    return (
                                        <Link
                                            key={service.title}
                                            href={service.href}
                                            className="group flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm text-center transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md hover:bg-secondary/40"
                                        >
                                            <div className="mb-3 sm:mb-4 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                                <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                                            </div>
                                            <p className="text-xs sm:text-sm font-bold text-[#111827] leading-snug">
                                                {service.title}
                                            </p>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 lg:space-y-7">
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-primary" />
                            <span className="text-sm font-bold text-primary tracking-widest uppercase">
                                Who We Are
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight text-[#111827]">
                            Your Trusted Partner in Expert House Cleaning
                        </h2>

                        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
                            Professional cleaning services designed to safeguard your home and family. Our
                            experienced team provides comprehensive cleaning solutions tailored to protect
                            what matters most to you.
                        </p>

                        <CertificationTrustBar
                            layout="grid"
                            caption="Accredited, licensed & quality assured"
                            className="max-w-xl"
                        />

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <Button
                                asChild
                                className="btn-primary rounded-full px-6 py-2.5 text-sm h-auto shadow-sm"
                            >
                                <Link href="/contact-us">Book a Free Consultation</Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground h-auto"
                            >
                                <Link href="/services">View Our Services</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
