import Image from "next/image";

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

const loopedLogos = [...clientLogos, ...clientLogos];

export default function ClientLogosMarquee() {
  return (
    <section className="-mt-px py-4 bg-white overflow-hidden">
      <div className="flex w-max items-center gap-10 md:gap-12 whitespace-nowrap animate-[clientLogoMarquee_28s_linear_infinite]">
        {loopedLogos.map((client, index) => (
          <div
            key={`${client.alt}-${index}`}
            className="relative h-12 md:h-14 w-[110px] md:w-[140px] shrink-0"
          >
            <Image src={client.src} alt={client.alt} fill className="object-contain" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes clientLogoMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
