import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="relative bg-primary rounded-[2rem] overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Content */}
            <div className="p-8 md:p-12 lg:p-16 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
                Ready for a Sparkling Clean Space?
              </h2>
              <p className="text-primary-foreground/90 text-lg">
                Book a free consultation today and experience the difference professional cleaning makes. We're here to make your life easier!
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-3 font-semibold flex items-center gap-2" asChild>
                  <Link href="/contact-us">
                    Book a Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <a
                  href="tel:+61390346492"
                  className="flex items-center gap-2 text-primary-foreground font-semibold hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  03 9034 6492
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 lg:h-auto">
              <img
                src="/home/PHOTO-2025-10-06-14-54-06.jpg"
                alt="Professional commercial cleaning equipment"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
