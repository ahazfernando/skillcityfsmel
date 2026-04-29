import Link from "next/link";
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, MapPin } from "lucide-react";

// You can customize these links for your new project
const footerLinks = {
  company: [
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Community", path: "/contact-us" },
    { name: "Testimonial", path: "/about-us" },
  ],
  support: [
    { name: "Help Center", path: "/contact-us" },
    { name: "Tweet @ Us", path: "https://twitter.com/skillcityfs" },
    { name: "Webinars", path: "/services" },
    { name: "Feedback", path: "/contact-us" },
  ],
  links: [
    { name: "Courses", path: "/services" },
    { name: "Service", path: "/services" },
    { name: "All in One", path: "/services" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-[#f4f7f5]">
      {/* ========================================= */}
      {/*            Newsletter Section             */}
      {/* ========================================= */}
      <div className="container mx-auto px-4 max-w-7xl -mb-8 pt-24 relative z-10">
        <div className="rounded-2xl overflow-visible relative bg-[#008000]">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left: Image */}
            <div className="w-full md:w-2/5 flex items-end justify-center pt-8 md:pt-0">
              {/* Sparkle decorations */}
              <div className="absolute top-0 left-12 text-white text-2xl z-10">✦</div>
              <div className="absolute top-8 right-8 text-white text-lg z-10">✦</div>
              <div className="absolute bottom-16 left-8 text-white text-sm z-10">✦</div>

              <div className="w-[80%] md:w-[120%] relative md:-mt-24 md:-ml-8 z-20 flex items-end justify-center">
                <img
                  src="/CommercialCleaning/KarcherVacumCleaner.png"
                  alt="Newsletter illustration"
                  className="w-full h-auto object-contain max-h-[400px]"
                />
              </div>
            </div>

            {/* Right: Newsletter Form */}
            <div className="w-full md:w-3/5 p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Subscribe to our newsletter to get updates to our Offers
              </h2>
              <p className="text-white/80 mb-6">
                Get 20% off on your first contract just by subscribing to our newsletter
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 rounded-full bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>
                <button className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>

              <p className="text-white/70 text-sm">
                You will be able to unsubscribe at any time.
                <br />
                Read our privacy policy <Link href="/privacy" className="underline hover:text-white">here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/*               Main Footer                 */}
      {/* ========================================= */}
      <div className="bg-forest text-primary-foreground pt-32 pb-8 mt-[-3rem]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center mb-4">
                <img
                  src="/SkillCityFSEC.png"
                  alt="Skill City Logo"
                  className="h-12 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
                Skill City Group of Companies is a leading provider of comprehensive facility solutions, expert recruitment services, and professional development programs.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://facebook.com/skillcityfs" target="_blank" rel="noreferrer" className="text-primary-foreground hover:text-accent transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="https://twitter.com/skillcityfs" target="_blank" rel="noreferrer" className="text-primary-foreground hover:text-accent transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="https://instagram.com/skillcityfs" target="_blank" rel="noreferrer" className="text-primary-foreground hover:text-accent transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="https://linkedin.com/company/skillcityfs" target="_blank" rel="noreferrer" className="text-primary-foreground hover:text-accent transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Links</h4>
              <ul className="space-y-3">
                {footerLinks.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                  <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>4A Haughton Road, Oakleigh, 3166, VIC</span>
                </div>
                <a href="tel:+61390346492" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  <Phone size={16} className="text-accent" />
                  <span>03 9034 6492</span>
                </a>
                <a href="mailto:admin@skillcityfacilitysolutions.com.au" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  <Mail size={16} className="text-accent" />
                  <span>admin@skillcityfacilitysolutions.com.au</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20">
          <div className="container mx-auto px-4 max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © Copyright by Skill City Group of Companies. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Terms of Use
              </Link>
              <Link href="/legal" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Legal
              </Link>
              <Link href="/sitemap" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
