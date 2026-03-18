import Image from "next/image";

const licenses = [
    {
        src: "/licenses/Logo_Cm3_Contractor-Management-Prequalification.svg",
        alt: "CM3 contractor management prequalification",
        heading: "CM3 prequalified contractor",
        description:
            "Prequalified under CM3 for contractor management—so your site’s safety and compliance processes align with how we work on your premises.",
        isSvg: true,
    },
    {
        src: "/licenses/TestandTagW1.png",
        alt: "Electrical test and tag certification",
        heading: "Test & tag",
        description:
            "Portable electrical equipment is tested and tagged to Australian standards, supporting safe operations wherever our teams use gear on your facility.",
        isSvg: false,
        width: 200,
        height: 80,
    },
    {
        src: "/licenses/LabourHire.png",
        alt: "Victorian Labour Hire Authority licence",
        heading: "Labour hire licensed",
        description:
            "Licensed with the Victorian Labour Hire Authority—giving you transparency and assurance when we supply cleaning and facility staff to your business.",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
                        Certified for safe, compliant facility work
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        We maintain the registrations and prequalifications your sites expect—so you can
                        engage us with confidence across commercial, industrial, and regulated environments
                        in Victoria and beyond.
                    </p>
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
