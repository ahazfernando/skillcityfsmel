import Image from "next/image";
import { Check } from "lucide-react";

const clientLogos = [
  { src: "/clientlogos/WOOLSWORTH.png", alt: "Woolworths" },
  { src: "/clientlogos/KMART.png", alt: "Kmart" },
  { src: "/clientlogos/DANMURPHYS.png", alt: "Dan Murphy's" },
  { src: "/clientlogos/PLUMBINGCENTERS.png", alt: "Plumbing Centres" },
  { src: "/clientlogos/IGA.png", alt: "IGA" },
  { src: "/clientlogos/BWS.png", alt: "BWS" },
  { src: "/clientlogos/COMMONBANK.png", alt: "Commonwealth Bank" },
  { src: "/clientlogos/Officeworks_logo.png", alt: "Officeworks" },
];

const TrustedClientsSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wider">
            <Check className="w-4 h-4" strokeWidth={4} />
            Trusted Nationwide
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            We&apos;ve Served major
            <br />
            Clients accross Australia
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            Leading brands rely on Skill City Facility Solutions for dependable, high-standard cleaning services delivered consistently across locations.
          </p>
        </div>

        <div className="flex flex-nowrap items-center justify-center gap-3 md:gap-4 overflow-x-auto pb-2">
          {clientLogos.map((client) => (
            <div
              key={client.alt}
              className="flex items-center justify-center h-16 md:h-20 w-[100px] md:w-[130px] shrink-0"
            >
              <div className="relative w-full h-full">
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 14vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClientsSection;
