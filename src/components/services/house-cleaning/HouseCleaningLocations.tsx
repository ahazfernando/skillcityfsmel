import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const locations = [
    "Queensland",
    "South Australia",
    "New South Wales",
    "Victoria",
    "Tasmania",
    "Western Australia",
];

export function HouseCleaningLocations() {
    return (
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content - Left Side */}
                    <div className="space-y-8">
                        {/* Section Header */}
                        <div>
                            <span className="text-sm font-bold text-[#00b050] uppercase tracking-wider">
                                Our Service Areas
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mt-4 mb-6 leading-tight">
                                Locations We <br />Serve Around Australia
                            </h2>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                We're proud to provide professional cleaning services across multiple Australian states and territories, bringing excellence to homes and businesses nationwide.
                            </p>
                        </div>

                        {/* Locations List */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-4 pb-4">
                            {locations.map((location) => (
                                <div key={location} className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#f0fdf4] border border-[#dcfce7] flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <MapPin className="w-5 h-5 text-[#00b050]" />
                                    </div>
                                    <span className="text-[1.1rem] font-medium text-gray-800">
                                        {location}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Button className="bg-[#00b050] hover:bg-[#009b46] text-white px-6 py-6 rounded-full text-base font-medium flex items-center gap-2 transition-colors" asChild>
                                <Link href="/services">
                                    View Our Services
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </Button>
                            <Button className="bg-[#00b050] hover:bg-[#009b46] text-white px-6 py-6 rounded-full text-base font-medium transition-colors" asChild>
                                <Link href="/contact-us">Book a Free Consultation</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Image - Right Side */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden">
                            <img
                                src="/locations/australia-map.png"
                                alt="Service locations across Australia"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HouseCleaningLocations;
