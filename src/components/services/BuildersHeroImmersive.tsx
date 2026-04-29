import { ArrowRight, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function BuildersHeroImmersive() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax-like fix */}
            {/* Background Image with Parallax-like fix */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
                <Image
                    src="/home/ConstructionCleaner.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-20 text-white">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                        <Sparkles className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-medium text-green-100">Premium Post-Construction Cleaning</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-8 text-white">
                        Revealing <br />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                            Perfection.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl font-light leading-relaxed">
                        From dust to dazzle. We handle the heavy lifting of post-construction cleanup so your project shines from day one.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                        <Button asChild className="bg-green-500 hover:bg-green-600 text-white h-16 px-12 rounded-full text-lg shadow-lg shadow-green-500/20 transition-all hover:scale-105">
                            <Link href="/contact-us">
                                Free Consultation
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 h-16 px-8 rounded-full text-lg">
                            <a href="tel:0370447710" className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span>03 9034 6492</span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
        </section>
    );
}
