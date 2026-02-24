import { Home, Building2, Sparkles, Truck, HeartPulse, GraduationCap, PartyPopper, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: GraduationCap,
        title: "Educational Cleaning",
        description: "Keep schools and educational facilities spotlessly clean for students and staff in a healthy learning environment.",
        link: "/services",
    },
    {
        icon: Truck,
        title: "Builders Cleaning",
        description: "Post-construction and builders cleaning for a spotless handover. Serving Melbourne, Oakleigh and Victoria.",
        link: "/services/builders-cleaning",
    },
    {
        icon: Home,
        title: "House Cleaning",
        description: "Transform your home into a spotless sanctuary with our thorough house cleaning services across Melbourne and Victoria.",
        link: "/services/house-cleaning",
    },
    {
        icon: HeartPulse,
        title: "Healthcare Cleaning",
        description: "Specialized sanitization services for medical facilities and healthcare environments.",
        link: "/services",
    },
    {
        icon: Building2,
        title: "Office Cleaning",
        description: "Professional cleaning for office spaces to keep your environment productive and your team focused.",
        link: "/services",
    },
    {
        icon: PartyPopper,
        title: "Event & Venue Cleaning",
        description: "Pre and post-event cleaning for venues, stadiums, and conference centers, leaving every space pristine.",
        link: "/services",
    },
    {
        icon: Home,
        title: "Residential Cleaning",
        description: "We provide you the best service quality regarding all residential needs, tailored to your lifestyle.",
        link: "/services",
    },
    {
        icon: Sparkles,
        title: "Deep Cleaning",
        description: "Intensive cleaning that reaches every corner, perfect for seasonal refreshes or special occasions.",
        link: "/services",
    },
    {
        icon: Layers,
        title: "Carpet Cleaning",
        description: "Deep carpet cleaning to remove stains, allergens and odours, refreshing your floors to like-new condition.",
        link: "/services",
    },
];

export default function HomeServicesGrid() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                        Our Services
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Cleaning Solutions for Every Need
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        From everyday tidying to deep cleaning, we've got you covered with professional services tailored to your lifestyle.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group p-8 rounded-[2rem] border border-slate-100 bg-white hover:border-green-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <service.icon className="w-7 h-7 text-green-600" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {service.title}
                            </h3>

                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <Link
                                href={service.link}
                                className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-700 transition-colors"
                            >
                                Learn More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

