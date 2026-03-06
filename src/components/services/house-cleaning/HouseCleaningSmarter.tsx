import Image from "next/image";
import { CalendarCheck, Sparkles, ThumbsUp } from "lucide-react";

export function HouseCleaningSmarter() {
    return (
        <section className="py-24 bg-[#f8f9fa]">
            <div className="container mx-auto px-4 xl:px-8 max-w-7xl">
                {/* Header Section */}
                <div className="max-w-4xl mb-16">
                    <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-bold text-gray-700 mb-6 shadow-sm">
                        Trusted by homeowners today
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#111827] leading-[1.15] mb-6 tracking-tight">
                        Smarter Cleaning. <span className="text-[#00b050] font-medium italic">One</span> <br />
                        <span className="text-[#00b050] font-medium italic">Simple Service</span> to Refresh
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                        Simplify the way you manage your home's cleanliness. Book our services instantly.
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Image Container */}
                    <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-[2rem] p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                        <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gray-100">
                            <Image
                                src="/CommercialCleaning/83c4b48ea5d79b5ddd55b589c36c0eca.jpg"
                                alt="House Cleaning Services"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Features List */}
                    <div className="space-y-10">
                        {/* Feature 1 */}
                        <div className="flex gap-5">
                            <div className="flex-shrink-0 mt-1">
                                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white border border-gray-100 shadow-sm text-[#00b050]">
                                    <CalendarCheck className="h-6 w-6 stroke-[1.5]" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#111827] mb-2">Smart Booking & Scheduling</h3>
                                <p className="text-gray-500 leading-relaxed text-base">
                                    Quickly schedule one-off or recurring cleans. Add specific instructions and focus areas to ensure your home is kept exactly how you like it.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-5">
                            <div className="flex-shrink-0 mt-1">
                                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white border border-gray-100 shadow-sm text-[#00b050]">
                                    <Sparkles className="h-6 w-6 stroke-[1.5]" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#111827] mb-2">Adaptive Cleaning Plans</h3>
                                <p className="text-gray-500 leading-relaxed text-base">
                                    Easily adjust cleaning frequencies, focus areas, and specialized deep-cleans to ensure your home receives the exact care it needs.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex gap-5">
                            <div className="flex-shrink-0 mt-1">
                                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white border border-gray-100 shadow-sm text-[#00b050]">
                                    <ThumbsUp className="h-6 w-6 stroke-[1.5]" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#111827] mb-2">Simple & Flexible Service</h3>
                                <p className="text-gray-500 leading-relaxed text-base">
                                    A flexible service designed to fit your busy lifestyle. Get your home cleaned exactly your way and on your schedule, any time.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default HouseCleaningSmarter;
