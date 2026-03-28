import Link from "next/link";
import {
  Sprout,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

/* SVG social icons (UUPM: no emoji icons, use SVG) */
const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Twitter = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const footerLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/projects", label: "Featured Projects" },
  { href: "/blog", label: "Insights & News" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Precision Farming",
  "Irrigation Systems",
  "Crop Management",
  "Sustainable Logistics",
  "Soil Analysis",
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1F14] text-gray-300 pt-20 pb-8 mt-auto relative overflow-hidden">
      {/* Subtle organic background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E]/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#CA8A04]/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
              <div className="bg-gradient-to-br from-[#15803D] to-[#22C55E] p-2.5 rounded-xl text-white group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all duration-200">
                <Sprout size={22} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight font-serif">
                AgriCore
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Leading the future of sustainable, technology-driven agriculture
              to feed tomorrow&apos;s world responsibly.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#22C55E]/20 hover:text-[#22C55E] transition-all duration-200 cursor-pointer"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider font-serif">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#22C55E] transition-colors duration-200 flex items-center gap-1 group cursor-pointer"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider font-serif">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li
                  key={s}
                  className="text-sm text-gray-400 hover:text-[#22C55E] transition-colors duration-200 cursor-pointer"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider font-serif">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#22C55E]" />
                </div>
                <span className="text-sm text-gray-400">
                  123 AgriCore Valley,
                  <br />
                  Springfield, IL 62701, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-[#22C55E]" />
                </div>
                <span className="text-sm text-gray-400">
                  +1 (800) 555-0199
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-[#22C55E]" />
                </div>
                <span className="text-sm text-gray-400">
                  contact@agricore.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="nature-divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} AgriCore Farms. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#22C55E] transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#22C55E] transition-colors cursor-pointer">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#22C55E] transition-colors cursor-pointer">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
