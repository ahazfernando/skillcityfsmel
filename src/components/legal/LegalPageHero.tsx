type LegalPageHeroProps = {
    title: string;
    description?: string;
};

export default function LegalPageHero({ title, description }: LegalPageHeroProps) {
    return (
        <section className="relative bg-forest text-white pt-32 pb-16 md:pt-36 md:pb-20">
            <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest/95 to-primary/20" />
            <div className="container-custom relative z-10">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-[2px] bg-primary" />
                        <span className="text-white/90 font-semibold text-sm uppercase tracking-wider">
                            Legal
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
                    {description ? (
                        <p className="text-white/80 text-lg leading-relaxed">{description}</p>
                    ) : null}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 80" className="w-full h-auto fill-background" aria-hidden>
                    <path d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,80L0,80Z" />
                </svg>
            </div>
        </section>
    );
}
