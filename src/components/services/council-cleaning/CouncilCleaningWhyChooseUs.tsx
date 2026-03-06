import { Shield, Lightbulb, Heart, Target, CheckCircle2, Leaf } from "lucide-react";

export function CouncilCleaningWhyChooseUs() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-12">
                    <span className="inline-block text-[#00b050] font-semibold text-sm tracking-wider uppercase mb-3">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Why choose{" "}
                        <span className="relative inline-block">
                            Skill City
                            <span className="absolute left-0 right-0 bottom-1 h-3 bg-[#e5f7ed] -z-10 rounded-full" />
                        </span>
                    </h2>
                </div>

                {/* Points Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Item 1 */}
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#1b4332]/10 flex items-center justify-center flex-shrink-0">
                            <Shield className="w-5 h-5 text-[#1b4332]" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">
                                Secure & Compliant
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Our staff are fully vetted, police-checked, and trained to operate securely in sensitive government and council facilities.
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#00b050]/10 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-5 h-5 text-[#00b050]" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">
                                Consistent Standards
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                We maintain rigorous quality control to ensure public amenities and community spaces are exceptionally clean and hygienic every day.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#1b4332]/10 flex items-center justify-center flex-shrink-0">
                            <Heart className="w-5 h-5 text-[#1b4332]" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">
                                Community Focused
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                We understand that clean public spaces foster community wellbeing, and we take pride in maintaining environments that locals love.
                            </p>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#00b050]/10 flex items-center justify-center flex-shrink-0">
                            <Target className="w-5 h-5 text-[#00b050]" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">
                                Reliable Delivery
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Councils trust our proven track record of delivering compliant, on-time, and on-budget cleaning across diverse portfolios.
                            </p>
                        </div>
                    </div>

                    {/* Item 5 */}
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#1b4332]/10 flex items-center justify-center flex-shrink-0">
                            <Lightbulb className="w-5 h-5 text-[#1b4332]" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">
                                Tailored Schedules
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                We design flexible cleaning schedules that accommodate community events, operating hours, and peak public usage times.
                            </p>
                        </div>
                    </div>

                    {/* Item 6 */}
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#00b050]/10 flex items-center justify-center flex-shrink-0">
                            <Leaf className="w-5 h-5 text-[#00b050]" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">
                                Sustainable Practices
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Aligned with council sustainability goals, we use eco-friendly products and efficient methods to protect the local environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CouncilCleaningWhyChooseUs;
