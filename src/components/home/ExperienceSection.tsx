import Link from "next/link";
import { ShieldCheck, Users, Wrench, Timer } from "lucide-react";

const featuredServices = [
  {
    title: "Residential Cleaning",
    description: "Our cooperation with clients is based on trust and delivering exceptional results every time.",
    image: "/Housecleaning/I_need_the_people_here_202605181047.jpeg",
  },
  {
    title: "Window Cleaning",
    description: "Crystal clear windows that let the sunshine in and make your property look its best.",
    image: "/servicesimages/WhatsApp Image 2026-01-14 at 7.44.37 PM (1).jpeg",
  },
  {
    title: "Deep Cleaning",
    description: "Revitalize your home with our deep cleaning services, reaching every corner and surface.",
    image: "/servicesimages/WhatsApp Image 2026-01-14 at 7.26.09 PM (1).jpeg",
  },
  {
    title: "Kitchen Cleaning",
    description: "Spotless countertops, appliances, and surfaces — professional kitchen cleaning for homes and workplaces.",
    image: "/servicesimages/Replace_the_person_in_the_202606090715.jpeg",
  },
  {
    title: "Commercial Cleaning",
    description: "Reliable cleaning for offices and workplaces, tailored to your schedule and standards.",
    image: "/newimages/The_person_in_the_image_202604290815.jpg",
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-[#04100C] py-12 md:py-16">
      <div className="container-custom">
        {/* Header row (left title, right copy/cta) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              / CleanSite Express
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Your Trusted partner in{" "}
              <span className="text-[#ade544]">Commercial Cleaning</span>
            </h2>
          </div>

          <div className="flex flex-col lg:items-start">
            <p className="text-white/80 text-lg">
              We offer solutions ranging from day-to-day cleaning support to deep cleaning projects where CleanSite manages the entire process from assessment to sparkling completion.
            </p>
            <div className="mt-5">
              <Link
                href="/services"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Strip (full width) */}
        <div className="mt-7">
          <div className="rounded-[28px] border border-[#ade544]/20 bg-black/20 px-4 py-4 md:px-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {[
                { icon: ShieldCheck, label: "Safety First" },
                { icon: Users, label: "Trained & Insured Team" },
                { icon: Wrench, label: "Advanced Equipment" },
                { icon: Timer, label: "Minimal Disruption" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-black/40 border border-[#ade544]/30 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#ade544]" />
                  </div>
                  <p className="text-white font-semibold tracking-wide uppercase text-xs md:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards row (single line) */}
        <div className="mt-8">
          <div className="flex gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featuredServices.map((service, index) => (
              <div
                key={service.title}
                className="relative group rounded-2xl overflow-hidden h-[300px] md:h-[340px] animate-fade-in flex-[0_0_240px] sm:flex-[0_0_260px] lg:flex-[0_0_calc(20%-19.2px)]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
