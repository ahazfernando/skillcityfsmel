import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Home, KeyRound, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CERTIFICATION_LOGOS } from "@/components/shared/CertificationTrustBar";

const ABOUT_SECTION_IMAGE = "/Housecleaning/I_need_the_people_here_202605181047.jpeg";

const services: { title: string; href: string; icon: LucideIcon }[] = [
    { title: "One Off Cleaning", href: "/services/one-off-cleaning", icon: Home },
    { title: "End of Lease Cleaning", href: "/services/end-of-lease-cleaning", icon: KeyRound },
    { title: "Carpet Cleaning", href: "/contact-us", icon: Layers },
];

export default function HouseCleaningAbout() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 xl:px-8">
                <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">
                    <div className="relative">
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl mb-8">
                            <Image
                                src={ABOUT_SECTION_IMAGE}
                                alt="Skill City house cleaning team at work"
                                width={800}
                                height={600}
                                className="w-full h-[400px] object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                            />

                            <div className="absolute bottom-6 left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl z-10 w-48">
                                <p className="text-4xl font-bold mb-1">15+</p>
                                <p className="text-white/90 text-sm">Years of Excellence</p>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <div className="h-px w-10 bg-primary" />
                                <h3 className="text-sm font-bold text-primary tracking-widest uppercase">
                                    Our Services
                                </h3>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {services.map((service) => {
                                    const Icon = service.icon;
                                    return (
                                        <Link
                                            key={service.title}
                                            href={service.href}
                                            className="group flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-5 shadow-sm text-center transition-all hover:border-primary/30 hover:shadow-md hover:bg-secondary/60"
                                        >
                                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                                <Icon className="h-6 w-6" aria-hidden />
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

                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-primary" />
                            <span className="text-sm font-bold text-primary tracking-widest uppercase">
                                WHO WE ARE
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-[#111827]">
                            Your Trusted Partner in Expert House Cleaning
                        </h2>

                        <p className="text-gray-500 text-lg leading-relaxed">
                            Professional cleaning services designed to safeguard your home and family. Our
                            experienced team provides comprehensive cleaning solutions tailored to protect
                            what matters most to you.
                        </p>

                        <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-2">
                            {CERTIFICATION_LOGOS.map((logo) => (
                                <Image
                                    key={logo.src}
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={140}
                                    height={40}
                                    className="h-8 w-auto max-w-[130px] object-contain sm:h-9 sm:max-w-[150px]"
                                    unoptimized={logo.src.endsWith(".svg")}
                                />
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 pt-4">
                            <Button
                                asChild
                                className="btn-primary rounded-full px-6 py-2.5 text-sm h-auto"
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
