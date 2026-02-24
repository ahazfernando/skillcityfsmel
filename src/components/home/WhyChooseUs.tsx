import { FileText, Package, Award, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    icon: FileText,
    title: "Free Consultation & Instant Pricing",
    description: "Get instant pricing and book your free consultation all online.",
  },
  {
    icon: Package,
    title: "Equipment & Supplies Provided",
    description: "Our cleaners provide all the essential equipment & supplies.",
  },
  {
    icon: Award,
    title: "100% Satisfaction Guarantee",
    description: "If you're not happy with your cleaning, we'll fix it for free.",
  },
  {
    icon: ShieldCheck,
    title: "Vetted & Background Checked",
    description: "Our cleaners go through a rigorous hiring process to ensure safety.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10+", label: "Expert Cleaners" },
  { value: "500+", label: "Hours Saved" },
  { value: "95%", label: "Client Retention" },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-green-600/30 blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-green-500/20 blur-3xl translate-y-1/2 -translate-x-1/4" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-green-300 uppercase tracking-wider flex items-center justify-center gap-2">
            Why Choose Us
            <span>✨</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            We Are Experienced &amp; We Have Expert Teams
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-3xl p-6 text-center hover:bg-white/15 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-green-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-green-100/80 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="border border-white/20 bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8 mt-0">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-green-200 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 bg-white text-green-800 font-bold px-8 py-3.5 rounded-full hover:bg-green-50 transition-colors shadow-lg"
          >
            Cleaning Process
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
