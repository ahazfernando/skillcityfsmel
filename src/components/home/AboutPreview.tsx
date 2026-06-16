import { Check, Home, SprayCan, Layers, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: Home,
    title: "Home Deep Cleaning",
    description:
      "Complete top-to-bottom cleaning for bedrooms, kitchens, bathrooms, and living spaces.",
  },
  {
    icon: SprayCan,
    title: "Kitchen & Bathroom Sanitization",
    description:
      "Thorough disinfection and hygiene-focused cleaning for healthier home environments.",
  },
  {
    icon: Layers,
    title: "Carpet, Floor & Surface Care",
    description:
      "Professional floor, carpet, and surface cleaning for a fresher and spotless finish.",
  },
  {
    icon: CalendarDays,
    title: "Scheduled & One Off Cleaning",
    description: "Flexible cleaning services tailored for routine or one-time needs.",
  },
];

const AboutPreview = () => {
  return (
    <section className="py-12 md:py-16 bg-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl">
              <Image
                src="/family/SkillCityNewDesigns%20-%2011.png"
                alt="Professional cleaning team"
                className="w-full h-[380px] md:h-[460px] object-cover"
                width={900}
                height={700}
                priority
              />
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl p-6 shadow-xl bg-[#ade544] text-black">
              <p className="text-4xl font-bold leading-none">15+</p>
              <p className="text-sm font-medium opacity-90">Years Experience</p>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#ade544] rounded-full opacity-35 blur-xl" />
          </div>

          {/* Content */}
          <div className="space-y-5">
            <span className="text-sm font-semibold text-[#ade544] uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              We Are the Best <br />Option for a Sparkling Home
            </h2>
            <p className="text-white/70 leading-relaxed">
              At Skill City Facility Solutions, we deliver reliable, professional cleaning with clear communication and consistently great results.
            </p>

            {/* Feature Rail (inspired by reference UI) */}
            <div className="relative">
              <div className="absolute left-6 top-3 bottom-3 w-px bg-white/20" />
              <div className="space-y-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#ade544] text-black border-2 border-white flex items-center justify-center shadow-sm">
                        <feature.icon className="w-6 h-6 text-black" />
                      </div>
                    </div>

                    <div className="pt-0.5 space-y-2">
                      <p className="text-lg font-bold text-white leading-snug">
                        {feature.title}
                      </p>
                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#ade544]" />
                        </div>
                        <p className="text-white/70 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button className="btn-primary rounded-[24px] px-6" asChild>
              <Link href="/contact-us">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
