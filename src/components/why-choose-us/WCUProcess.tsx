import { ArrowRight } from "lucide-react";

const processSteps = [
    {
        step: "01",
        title: "Initial Consultation & Site Assessment",
        image: "/services/consultation.svg",
    },
    {
        step: "02",
        title: "Customised Quotation & Proposal",
        image: "/services/quotation.svg",
    },
    {
        step: "03",
        title: "Service Agreement & Scheduling",
        image: "/services/serviceagreement.svg",
    },
    {
        step: "04",
        title: "Pre-Clean Preparation & Team Briefing",
        image: "/services/teambriefing.svg",
    },
    {
        step: "05",
        title: "Service Delivery & Quality Control",
        image: "/services/cleaningprocess.svg",
    },
    {
        step: "06",
        title: "Client Feedback & Ongoing Support",
        image: "/services/clientfeedback.svg",
    },
] as const;

export default function WCUProcess() {
    return (
        <section className="bg-white px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                        Professionalism Redefined
                    </span>
                    <h2 className="text-primary mt-3 mb-2 text-3xl font-bold md:text-4xl">
                        Process of How We Work
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                    {processSteps.map((step, index) => (
                        <div key={step.step} className="relative flex flex-col items-center">
                            <div className="relative mb-6 flex w-full items-center justify-center">
                                <div className="flex h-32 w-32 items-center justify-center">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="h-full w-full object-contain"
                                    />
                                </div>

                                {index < processSteps.length - 1 ? (
                                    <div className="absolute -right-6 top-1/2 z-10 hidden -translate-y-1/2 xl:block">
                                        <ArrowRight className="text-primary h-6 w-6" />
                                    </div>
                                ) : null}
                            </div>

                            <div className="text-center">
                                <div className="mb-1 text-lg font-bold">Step {step.step}</div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                    {step.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
