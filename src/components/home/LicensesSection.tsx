import Image from "next/image";

const accreditationLogos = [
    {
        src: "/accredlogos/ISO9001.png",
        alt: "ISO 9001 Quality certification",
    },
    {
        src: "/accredlogos/ISO14001.png",
        alt: "ISO 14001 Environmental certification",
    },
    {
        src: "/accredlogos/ISO45001.png",
        alt: "ISO 45001 Safety certification",
    },
    {
        src: "/accredlogos/JASANZLogo.png",
        alt: "JAS-ANZ joint accreditation",
    },
] as const;

const licenses = [
    {
        src: "/licenses/Logo_Cm3_Contractor-Management-Prequalification.svg",
        alt: "CM3 contractor management prequalification",
        heading: "CM3 prequalified contractor",
        description: "Site safety & compliance, verified before we arrive.",
        isSvg: true,
    },
    {
        src: "/licenses/TestandTagW1.png",
        alt: "Electrical test and tag certification",
        heading: "Test & tag Training",
        description:
            "All electrical gear tested & tagged to Australian standards.",
        isSvg: false,
        width: 200,
        height: 80,
    },
    {
        src: "/licenses/LabourHire.png",
        alt: "Victorian Labour Hire Authority licence",
        heading: "Labour hire licensed",
        description:
            "Victorian Labour Hire Authority licensed — full transparency on every placement.",
        isSvg: false,
        width: 200,
        height: 80,
    },
] as const;

const LicensesSection = () => {
    return (
        <section className="py-14 md:py-20 bg-secondary/40 border-y border-border">
            <div className="container-custom">
                <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
                    <p className="text-primary font-semibold text-xs md:text-sm uppercase tracking-widest mb-3">
                        Licences & compliance
                    </p>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight mb-4">
                    Certified for safe, <br />compliant facility management in Australia
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        We maintain the registrations and prequalifications your sites expect so you can
                        engage us with confidence across commercial, industrial, and regulated environments.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 md:gap-8 mb-12 md:mb-16 max-w-4xl mx-auto">
                    {accreditationLogos.map((logo) => (
                        <div key={logo.src} className="flex shrink-0 items-center justify-center">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={160}
                                height={64}
                                className="h-14 sm:h-16 md:h-[4.5rem] w-auto max-w-[140px] sm:max-w-[160px] object-contain"
                            />
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-12 md:gap-10 lg:gap-14 max-w-5xl mx-auto">
                    {licenses.map((item) => (
                        <div key={item.src} className="flex flex-col items-center text-center">
                            <div className="mb-5 flex items-center justify-center min-h-[4.5rem]">
                                {item.isSvg ? (
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={180}
                                        height={54}
                                        unoptimized
                                        className="max-h-14 w-auto max-w-[200px] object-contain"
                                    />
                                ) : (
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={item.width}
                                        height={item.height}
                                        className="max-h-16 w-auto max-w-[220px] object-contain"
                                    />
                                )}
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
                                {item.heading}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LicensesSection;
