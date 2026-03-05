"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone, Home, Building2, Building, Hammer, ChevronDown, ArrowRight, Users, GraduationCap, Baby, Heart, Stethoscope, Factory, Warehouse, Utensils, Dumbbell, Film, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Home,
    title: "House Cleaning",
    description: "Complete residential cleaning for a spotless home",
    href: "/services/house-cleaning",
  },
  {
    icon: Hammer,
    title: "Builders Cleaning",
    description: "Post-construction cleanup and debris removal",
    href: "/services/builders-cleaning",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Comprehensive cleaning for commercial properties",
    href: "/services/commercial-cleaning",
  },
  {
    icon: Users,
    title: "Council & Community Service Cleaning",
    description: "Specialized cleaning for public and community spaces",
    href: "/services/council-cleaning",
  },
  {
    icon: GraduationCap,
    title: "School Cleaning",
    description: "Safe and hygienic environments for students",
    href: "/services/school-cleaning",
  },
  {
    icon: Baby,
    title: "Early Childhood Education Cleaning",
    description: "Gentle, non-toxic cleaning for childcare centers",
    href: "/services/early-childhood-cleaning",
  },
  {
    icon: Heart,
    title: "Aged Care Cleaning",
    description: "Rigorous sanitization for aged care facilities",
    href: "/services/aged-care-cleaning",
  },
  {
    icon: Stethoscope,
    title: "Medical / Healthcare Cleaning",
    description: "Clinical grade cleaning meeting health standards",
    href: "/services/medical-cleaning",
  },
  {
    icon: Factory,
    title: "Industrial Cleaning",
    description: "Heavy-duty cleaning for industrial sites",
    href: "/services/industrial-cleaning",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Factory Cleaning",
    description: "Large-scale cleaning for storage and production",
    href: "/services/warehouse-cleaning",
  },
  {
    icon: Utensils,
    title: "Restaurant & Kitchen Cleaning",
    description: "Deep cleaning for food service environments",
    href: "/services/restaurant-cleaning",
  },
  {
    icon: Dumbbell,
    title: "Gym Cleaning",
    description: "Sanitizing workout equipment and facilities",
    href: "/services/gym-cleaning",
  },
  {
    icon: Film,
    title: "Cinema & Theater Cleaning",
    description: "Thorough cleaning between sessions and events",
    href: "/services/cinema-cleaning",
  },
  {
    icon: Key,
    title: "End of Lease Cleaning",
    description: "Comprehensive cleaning for property transitions",
    href: "/services/end-of-lease-cleaning",
  },
  {
    icon: Building,
    title: "Office Cleaning",
    description: "Professional workspace sanitization",
    href: "/services/office-cleaning",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact-us" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1920px]">
      <div className="bg-white border border-border rounded-[24px] shadow-lg px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" title="Skill City Facility Solutions - Home">
            <div className="relative h-16 w-56">
              <Image
                src="/SkillCityPNGLOGO.png"
                alt="Skill City Facility Solutions - Professional Cleaning Melbourne Victoria"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground/80"
                }`}
            >
              Home
            </Link>

            {/* Services Dropdown Trigger */}
            <button
              onMouseEnter={() => setIsServicesOpen(true)}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                pathname === "/services" ? "text-primary" : "text-foreground/80"
              )}
            >
              Services
              <ChevronDown className={cn("w-3 h-3 transition-transform", isServicesOpen && "rotate-180")} />
            </button>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path)
                  ? "text-primary"
                  : "text-foreground/80"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+61370447710"
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              037 044 7710
            </a>
            <Button className="btn-secondary" asChild>
              <Link href="/contact-us">Book a Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in overflow-y-auto max-h-[75vh]">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-primary py-2 ${isActive("/") ? "text-primary" : "text-foreground/80"
                  }`}
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-sm font-medium text-foreground/80 hover:text-primary py-2"
                >
                  Services
                  <ChevronDown className={cn("w-4 h-4 transition-transform", isMobileServicesOpen && "rotate-180")} />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 py-2 space-y-2 animate-fade-in">
                    {services.map((service) => {
                      const isAllowed = ["/services/house-cleaning", "/services/builders-cleaning", "/services/commercial-cleaning"].includes(service.href);
                      return (
                        <Link
                          key={service.title}
                          href={isAllowed ? service.href : "#"}
                          onClick={(e) => {
                            if (!isAllowed) {
                              e.preventDefault();
                              return;
                            }
                            setIsMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className={cn("flex items-center gap-2 py-2 text-sm text-muted-foreground transition-colors hover:text-primary", !isAllowed && "cursor-default")}
                        >
                          <service.icon className="w-4 h-4" />
                          {service.title}
                        </Link>
                      )
                    })}
                    <Link
                      href="/services"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                      className="flex items-center gap-2 py-2 text-sm font-medium text-primary"
                    >
                      View all services <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary py-2 ${isActive(link.path)
                    ? "text-primary"
                    : "text-foreground/80"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+61370447710"
                className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              >
                <Phone className="w-4 h-4" />
                037 044 7710
              </a>
              <Button className="btn-secondary w-full mt-2" asChild>
                <Link href="/contact-us">Book a Free Consultation</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>

      {/* Full-width Services Mega Menu - Positioned below header */}
      {isServicesOpen && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full mt-2 bg-background border border-border shadow-lg z-50 animate-fade-in rounded-3xl overflow-hidden"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <div className="w-full px-6 md:px-8 py-8">
            <div className="flex gap-12">
              {/* Services Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Our Services
                  </span>
                </div>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                  {services.map((service) => {
                    const isAllowed = ["/services/house-cleaning", "/services/builders-cleaning", "/services/commercial-cleaning"].includes(service.href);
                    return (
                      <Link
                        key={service.title}
                        href={isAllowed ? service.href : "#"}
                        onClick={(e) => {
                          if (!isAllowed) {
                            e.preventDefault();
                            return;
                          }
                          setIsServicesOpen(false);
                        }}
                        className={cn("flex items-start gap-3 p-3 rounded-xl transition-colors group hover:bg-muted", !isAllowed && "cursor-default")}
                      >
                        <div className={cn("w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors", isAllowed && "group-hover:bg-primary/20")}>
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className={cn("text-sm font-semibold text-foreground transition-colors", isAllowed && "group-hover:text-primary")}>
                            {service.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Explore Section */}
              <div className="w-72 border-l border-border pl-8">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-6">
                  Explore
                </span>
                <div className="space-y-4">
                  <Link
                    href="/blog"
                    onClick={() => setIsServicesOpen(false)}
                    className="block p-3 rounded-xl hover:bg-muted transition-colors group"
                  >
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      Cleaning Tips & Guides
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Expert advice for a cleaner home
                    </p>
                  </Link>
                  <Link
                    href="/why-choose-us"
                    onClick={() => setIsServicesOpen(false)}
                    className="block p-3 rounded-xl hover:bg-muted transition-colors group"
                  >
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      Why Choose Us
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Learn about our expertise and team
                    </p>
                  </Link>
                  <Link
                    href="/contact-us"
                    onClick={() => setIsServicesOpen(false)}
                    className="block p-3 rounded-xl hover:bg-muted transition-colors group"
                  >
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      Book a Free Consultation
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Request a no-obligation estimate
                    </p>
                  </Link>
                </div>
                <Link
                  href="/services"
                  onClick={() => setIsServicesOpen(false)}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline mt-6"
                >
                  View all services <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header >
  );
};

export default Header;
