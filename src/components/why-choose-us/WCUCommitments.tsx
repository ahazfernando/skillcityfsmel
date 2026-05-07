import { Leaf, ShieldCheck, Users, Clock, Award, Handshake } from "lucide-react";

const commitments = [
    {
        icon: Leaf,
        title: "Eco-Friendly Products",
        description:
            "We use only certified, environmentally safe cleaning products that are tough on grime but gentle on your family, pets, and the planet.",
        bg: "bg-green-50",
        iconColor: "text-green-600",
        border: "border-green-100",
    },
    {
        icon: ShieldCheck,
        title: "Fully Insured & Licensed",
        description:
            "All staff carry full public liability insurance and are properly licensed, giving you complete peace of mind on every visit.",
        bg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        border: "border-emerald-100",
    },
    {
        icon: Users,
        title: "Background Checked Staff",
        description:
            "Every cleaner goes through a rigorous police check and reference verification before joining the Skill City team.",
        bg: "bg-teal-50",
        iconColor: "text-teal-600",
        border: "border-teal-100",
    },
    {
        icon: Clock,
        title: "Always On Time",
        description:
            "We respect your schedule. Our teams arrive punctually and complete every job within the agreed timeframe, guaranteed.",
        bg: "bg-green-50",
        iconColor: "text-green-600",
        border: "border-green-100",
    },
    {
        icon: Award,
        title: "100% Satisfaction Guarantee",
        description:
            "Not happy? We'll return and re-clean at no extra cost. Your satisfaction is not optional, it's our standard.",
        bg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        border: "border-emerald-100",
    },
    {
        icon: Handshake,
        title: "Transparent Pricing",
        description:
            "No hidden fees, no surprise charges. You get a clear, upfront quote before we start, and that's exactly what you pay.",
        bg: "bg-teal-50",
        iconColor: "text-teal-600",
        border: "border-teal-100",
    },
];

export default function WCUCommitments() {
    return (
        <section className="py-24 bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-5">
                        <span className="w-2 h-2 rounded-full bg-green-600" />
                        <span className="text-green-800 text-sm font-semibold uppercase tracking-wider">
                            Our Commitments
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                        Promises We Never Break
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Every service we deliver is backed by six non-negotiable commitments
                        that protect you, your space, and your trust.
                    </p>
                </div>

                {/* 3×2 Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {commitments.map((c) => (
                        <div
                            key={c.title}
                            className={`${c.bg} border ${c.border} rounded-3xl p-8 group hover:shadow-lg transition-all duration-300`}
                        >
                            <div
                                className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                            >
                                <c.icon className={`w-7 h-7 ${c.iconColor}`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{c.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
