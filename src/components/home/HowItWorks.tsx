const safeguards = [
  {
    step: "1",
    icon: "/trash/LocationIcon.png",
    title: "GPS Staff Check-In",
    description: "Every cleaner checks in and out via GPS so each job is fully accounted for.",
  },
  {
    step: "2",
    icon: "/trash/ShieldIcon.png",
    title: "Quality Control Inspections",
    description: "Supervisors routinely inspect completed jobs against our detailed checklists.",
  },
  {
    step: "3",
    icon: "/trash/Agreement3d.png",
    title: "Client Feedback Monitoring",
    description: "Every job is evaluated using customer feedback and satisfaction checks.",
  },
  {
    step: "4",
    icon: "/trash/Recycable%20itme.png",
    title: "Environmentally Friendly",
    description: "We use environmentally friendly cleaning products that are safe for your space, family, and the planet.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-14 md:mb-16">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            How We Keep Every Job Accountable
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 leading-tight">
            Operational safeguards you can rely on from Australia
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed">
            From check-in to sign-off, every visit is tracked, verified, and reviewed so you always know who was on site and how your space was cared for.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-10">
          {safeguards.map((item) => (
            <div key={item.step} className="relative">
              <div className="relative mb-6 h-36 md:h-44">
                <div className="absolute inset-0 overflow-hidden">
                  <span
                    aria-hidden
                    className="absolute -left-1 bottom-0 text-[7.5rem] sm:text-[8.5rem] md:text-[9.5rem] lg:text-[10.5rem] font-bold text-gray-200 leading-none select-none pointer-events-none"
                  >
                    {item.step}
                  </span>
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"
                  />
                </div>

                <div className="relative z-10 flex items-end h-full pb-1 pl-2 md:pl-4">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-24 h-24 md:w-28 md:h-28 object-contain"
                  />
                </div>
              </div>

              <div className="relative">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
