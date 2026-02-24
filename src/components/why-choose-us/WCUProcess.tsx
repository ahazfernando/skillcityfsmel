import Image from "next/image";

const steps = [
    {
        icon: "/verificationicons/GPSTRACKED.png",
        title: "GPS Tracked",
        subtitle: "Sign In & Out",
        description: "Every job is logged with GPS check-in and check-out for full accountability.",
    },
    {
        icon: "/verificationicons/PoliceCleared.png",
        title: "Trained And",
        subtitle: "Police Cleared",
        description: "All staff undergo rigorous training and full police background checks.",
    },
    {
        icon: "/verificationicons/UniformedIcon.png",
        title: "Uniformed /",
        subtitle: "Correct PPE",
        description: "Our team arrives in uniform with appropriate safety equipment",
    },
    {
        icon: "/verificationicons/IDIcon.png",
        title: "ID Verified",
        subtitle: "Staff",
        description: "Every cleaner carries verified ID so you always know who's in your space.",
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
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        How We Deliver Quality
                    </h2>
                    <p className="text-gray-500 text-lg">
                        A simple, transparent process built around your convenience
                        from first contact to a spotless result.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connector line — desktop only */}
                    <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-200 to-transparent mx-32" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                {/* Bare icon — no circle, no number */}
                                <div className="mb-6 w-20 h-20 flex items-center justify-center">
                                    <Image
                                        src={step.icon}
                                        alt={`${step.title} ${step.subtitle}`}
                                        width={72}
                                        height={72}
                                        className="object-contain drop-shadow-sm"
                                    />
                                </div>

                                <p className="text-lg font-bold text-gray-900 leading-snug">
                                    {step.title}<br />{step.subtitle}
                                </p>
                                <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-[180px]">
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
