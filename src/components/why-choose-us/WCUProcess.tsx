import { CalendarCheck, ClipboardList, Sparkles, BadgeCheck } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: CalendarCheck,
        title: "Book Online",
        description:
            "Tell us about your space and needs via our quick online form or a phone call. We'll confirm your slot within hours.",
    },
    {
        number: "02",
        icon: ClipboardList,
        title: "Tailored Plan",
        description:
            "We create a cleaning plan customised to your space, preferences, and schedule — no one-size-fits-all approach.",
    },
    {
        number: "03",
        icon: Sparkles,
        title: "Expert Clean",
        description:
            "Our trained, insured cleaners arrive on time and execute the plan using professional-grade, eco-safe products.",
    },
    {
        number: "04",
        icon: BadgeCheck,
        title: "Quality Review",
        description:
            "A site leader inspects the completed clean against our quality checklist and follows up to ensure your satisfaction.",
    },
];

export default function WCUProcess() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-5">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-green-700 text-sm font-semibold uppercase tracking-wider">
                            How We Work
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                        How We Deliver Quality
                    </h2>
                    <p className="text-gray-500 text-lg">
                        A simple, transparent process built around your convenience —
                        from first contact to a spotless result.
                    </p>
                </div>

                {/* Stepper */}
                <div className="relative">
                    {/* Connector line — desktop only */}
                    <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-200 to-transparent mx-32" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {steps.map((step, i) => (
                            <div key={step.number} className="relative flex flex-col items-center text-center group">
                                {/* Number bubble */}
                                <div className="relative mb-6">
                                    <div className="w-28 h-28 rounded-full bg-green-50 border-2 border-green-100 flex flex-col items-center justify-center group-hover:border-green-400 group-hover:bg-green-100 transition-all duration-300 shadow-sm">
                                        <step.icon className="w-8 h-8 text-green-600 mb-1" />
                                        <span className="text-xs font-bold text-green-600 tracking-widest">
                                            {step.number}
                                        </span>
                                    </div>
                                    {/* Arrow between steps (mobile) */}
                                    {i < steps.length - 1 && (
                                        <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 text-green-300 text-2xl font-bold select-none">
                                            ↓
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
