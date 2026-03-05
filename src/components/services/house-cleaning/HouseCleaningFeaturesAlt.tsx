import { Shield, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HouseCleaningFeaturesAlt() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 xl:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">

                    {/* Left Column: Title */}
                    <div className="lg:w-1/3 flex-shrink-0">
                        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
                            <span className="text-[#00b050]">Complete<br />Cleaning</span><br />
                            <span className="text-[#1e293b]">Made for You</span>
                        </h2>

                        <Link href="/services" className="inline-flex items-center text-[#00b050] hover:text-[#008f40] transition-colors">
                            <ArrowRight className="w-6 h-6" strokeWidth={2} />
                        </Link>
                    </div>

                    {/* Divider (Desktop only) */}
                    <div className="hidden lg:block w-px h-64 bg-gray-100"></div>

                    {/* Right Column: Features */}
                    <div className="lg:w-2/3 grid md:grid-cols-3 gap-8">

                        {/* Feature 1 */}
                        <div className="space-y-4">
                            <Shield className="w-10 h-10 text-[#00b050]" strokeWidth={1.5} />
                            <h3 className="text-xl font-semibold text-[#00b050]">Residential Cleaning</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                Professional, vetted cleaning experts providing regular home maintenance, deep cleaning, and visible care for your living spaces.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="space-y-4">
                            <Calendar className="w-10 h-10 text-[#00b050]" strokeWidth={1.5} />
                            <h3 className="text-xl font-semibold text-[#00b050]">Scheduled Visits</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                Comprehensive cleaning solutions for weekly, bi-weekly, or monthly schedules to ensure ongoing cleanliness and peace of mind.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="space-y-4">
                            <CheckCircle className="w-10 h-10 text-[#00b050]" strokeWidth={1.5} />
                            <h3 className="text-xl font-semibold text-[#00b050]">100% Satisfaction</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                Continuous oversight and quality assurance guarantees to secure your satisfaction with modern equipment and methods.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
