import { ArrowRight, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FeaturesHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

      <div className="container-custom py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-foreground">Trusted by 10,000+ Customers</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              <span className="italic font-medium">Sparkly</span> Periodical and <span className="italic font-medium">Commercial</span>{" "}
              <span className="text-primary">Cleaning Services</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Stop wasting your precious free time cleaning, relax while we make your home sparkle! Professional, friendly, and convenient cleaning services.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="btn-secondary flex items-center gap-2" asChild>
                <Link href="/contact-us">
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button className="btn-outline" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              {["Professional", "Friendly", "Convenient"].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="/newimages/KitchenCleaning.jpg"
                  alt="Commercial kitchen cleaning"
                  className="w-full h-auto max-h-[500px] object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-lg border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                      >
                        <img
                          src={`/people/${i}.png`}
                          alt={`Customer ${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">400+ Reviews</p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3 h-3 text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-8 right-8 w-full h-full bg-primary/20 rounded-[2rem] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;
