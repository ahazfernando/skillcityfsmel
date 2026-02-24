import Image from "next/image";

const items = [
    {
        title: "Years of Experience",
        description:
            "20+ years of experience taught us how to use accountability to drive consistency across every job we take on.",
        image: "/home/PHOTO-2025-10-06-14-54-06.jpg",
    },
    {
        title: "Recruitment Process",
        description:
            "We only recruit staff that excel at cleaning and who are willing to action our core values from day one.",
        image: "/home/PHOTO-2025-10-27-06-41-27.jpg",
    },
    {
        title: "Training Systems",
        description:
            "Every staff member goes through our rigorous induction and on-site training programs before their first shift.",
        image: "/home/PHOTO-2026-01-07-18-53-29.jpg",
    },
    {
        title: "Our Values",
        description:
            "We use our core values as a guiding principle on our approach to providing high-quality cleaning services.",
        image: "/home/ContactlessHeader.png",
    },
    {
        title: "Recognition & Rewards",
        description:
            "Our site leaders are trained to find and reward staff who excel at their roles daily, driving a culture of excellence.",
        image: "/home/257579cd91eb4c7b3d48193da76ae1d8.jpg",
    },
    {
        title: "Regular Auditing",
        description:
            "All facilities are audited daily by on-site leadership and monthly by management to maintain the highest standards.",
        image: "/home/ConstructionCleaner.png",
    },
    {
        title: "Innovative Technology",
        description:
            "We constantly seek out innovative ways to improve our service with technology, from scheduling to quality reporting.",
        image: "/widgetservices/IMG_6798.jpg",
    },
    {
        title: "Valued Relationships",
        description:
            "Our clients are our priority and we ensure that communication is simple, transparent, and always prioritised.",
        image: "/home/ContactPageHeader.png",
    },
];

export default function WCUDifferentiators() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-5">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-green-700 text-sm font-semibold uppercase tracking-wider">
                            Our Difference
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                        What Sets Us Apart
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Eight pillars that underpin every clean we deliver — built over
                        20+ years of relentless focus on quality.
                    </p>
                </div>

                {/* 4×2 Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item) => (
                        <div
                            key={item.title}
                            className="group flex flex-col gap-4"
                        >
                            {/* Image */}
                            <div className="relative h-52 rounded-2xl overflow-hidden shadow-md">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    unoptimized
                                />
                                {/* Green tint on hover */}
                                <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-colors duration-300" />
                            </div>

                            {/* Text */}
                            <div>
                                <div className="w-8 h-0.5 bg-green-500 mb-3" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
