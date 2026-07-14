import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AboutPreview = () => {
    return (
        <section className="py-20 md:py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
                    <div className="relative">
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
                            <Image
                                src="/family/SkillCityNewDesigns%20-%2011.png"
                                alt="Professional cleaning team"
                                className="w-full h-[380px] md:h-[420px] object-cover"
                                width={900}
                                height={700}
                                priority
                            />

                            <div className="absolute bottom-6 left-6 bg-primary text-primary-foreground px-6 py-5 rounded-2xl shadow-xl z-10 min-w-[9rem]">
                                <p className="text-4xl font-bold leading-none mb-1">15+</p>
                                <p className="text-white/90 text-sm font-medium">Years of Excellence</p>
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
                            Your Trusted Partner in Professional Cleaning
                        </h2>

                        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
                            At Skill City Facility Solutions, we deliver reliable, professional cleaning with
                            clear communication and consistently great results for homes and businesses across
                            Australia.
                        </p>

                        <div className="max-w-xl">
                            <p className="mb-4 text-sm font-medium leading-snug text-muted-foreground">
                                Accredited, licensed & quality assured
                            </p>
                            <Image
                                src="/accredition/Certifications.png"
                                alt="Skill City certifications and accreditations"
                                width={560}
                                height={120}
                                className="h-auto w-full max-w-md object-contain"
                            />
                        </div>

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
};

export default AboutPreview;
