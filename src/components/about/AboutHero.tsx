import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, CheckCircle } from 'lucide-react';
import { REVIEW_FACE_PEOPLE } from '@/data/reviewFaces';

const AboutHero = () => {
    // Using the image from public folder
    const heroImage = '/home/ContactlessHeader.png';

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-forest/80 via-forest/60 to-forest/30" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-[2px] bg-primary" />
                            <span className="text-white font-semibold text-sm uppercase tracking-wider">
                                Delivering Smarter Cleaning Solutions
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                            <span className="font-semibold">Cleaning Made Easy,</span><br />
                            <span className="font-medium italic">Wherever Life<br />
                                Takes You!</span>
                        </h1>

                        <p className="text-white/80 text-lg mb-8 max-w-xl">
                            We handle home cleaning, office spaces, and specialty services with
                            care and efficiency, making your space spotless, safe, and stress-free.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-10">
                            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold shadow-lg group">
                                About Us
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-3">
                                    {REVIEW_FACE_PEOPLE.map((face) => (
                                        <img
                                            key={face.src}
                                            src={face.src}
                                            alt={face.name}
                                            className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                        />
                                    ))}
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">Satisfied Customers</p>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 text-primary fill-primary" />
                                        <span className="text-white/80 text-sm">4.9 (10k Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-6">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <span className="text-white/80 text-sm">Licensed & Insured</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <span className="text-white/80 text-sm">Eco-Friendly Products</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <span className="text-white/80 text-sm">100% Satisfaction</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Info Card */}
                    <div className="hidden lg:flex justify-end">
                        <div className="bg-forest/90 backdrop-blur-sm rounded-[24px] p-8 max-w-sm border border-white/10">
                            <h3 className="text-white text-xl font-bold mb-3">
                                Spotless spaces<br />
                                <span className="text-primary">made easy.</span>
                            </h3>
                            <p className="text-white/70 text-sm mb-6">
                                Our professional cleaning services and thorough processes ensure your space stays fresh and inviting.
                            </p>

                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                        <Users className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">500+</p>
                                        <p className="text-white/60 text-xs">Happy Clients</p>
                                    </div>
                                </div>
                                <div className="h-10 w-[1px] bg-white/20" />
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">1000+</p>
                                        <p className="text-white/60 text-xs">Projects Done</p>
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full bg-primary hover:bg-primary/90 text-white group">
                                Book Now
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-auto fill-white">
                    <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
                </svg>
            </div>
        </section>
    );
};

export default AboutHero;
