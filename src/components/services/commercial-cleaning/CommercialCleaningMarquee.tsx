const items = [
    "Daily Office Cleaning",
    "★ 4.9 Star Corporate Rating",
    "Sanitization & Disinfection",
    "Restroom Restocking",
    "Carpet & Floor Care",
    "Waste Management",
    "Window Cleaning",
    "Fully Insured & Vetted Teams",
    "Flexible Scheduling",
    "Security Cleared Staff",
    "Eco-Friendly Products",
    "Trusted by 500+ Businesses",
];

export default function CommercialCleaningMarquee() {
    return (
        <section className="py-5 border-y border-green-800/60 overflow-hidden bg-green-950/60">
            <div
                className="flex gap-12 items-center whitespace-nowrap"
                style={{
                    animation: "marquee 30s linear infinite",
                    width: "max-content",
                }}
            >
                {/* Duplicate the list twice for seamless loop */}
                {[0, 1].map((set) => (
                    <div key={set} className="flex gap-12 items-center">
                        {items.map((text, i) => (
                            <span
                                key={i}
                                className="text-sm font-medium text-green-200 flex items-center gap-2"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                                {text}
                            </span>
                        ))}
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}
