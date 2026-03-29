"use client";

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

      {/* Premium Newsletter Section (Glassmorphism) */}
      <div className="container mx-auto px-6 md:px-12 mb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#14532D] to-[#0A1F14] p-10 md:p-16 border border-white/10 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#22C55E]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#CA8A04]/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Join the <span className="text-[#22C55E]">Agri-Tech</span> Revolution
              </h2>
              <p className="text-gray-400 text-lg">
                Get monthly insights on precision farming, sustainable tech, and yield optimization directly in your inbox.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#22C55E] transition-all"
              />
              <button className="bg-[#22C55E] hover:bg-[#15803D] text-[#0A1F14] font-bold px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-green-500/20 active:scale-95 whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
              <div className="bg-gradient-to-br from-[#15803D] to-[#22C55E] p-2.5 rounded-xl text-white group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all duration-200">
                <Sprout size={22} />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight font-serif">
                AgriCore
              </span>
            </Link>
            <p className="text-base leading-relaxed text-gray-400 max-w-xs">
              Pioneering sustainable, high-yield agricultural ecosystems through precision technology and traditional stewardship.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-[#22C55E] hover:text-[#0A1F14] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Solution Links */}
          <div>
            <h3 className="text-white font-bold mb-8 text-sm uppercase tracking-[0.2em] font-serif border-l-2 border-[#22C55E] pl-4">
              Solutions
            </h3>
            <ul className="space-y-4">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-base text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] group-hover:bg-[#22C55E] transition-colors" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-8 text-sm uppercase tracking-[0.2em] font-serif border-l-2 border-[#CA8A04] pl-4">
              AgriCore
            </h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold mb-8 text-sm uppercase tracking-[0.2em] font-serif border-l-2 border-[#22C55E] pl-4">
              Get in Touch
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#22C55E]/10 transition-colors">
                  <MapPin size={18} className="text-[#22C55E]" />
                </div>
                <span className="text-base text-gray-400 leading-snug">
                  123 AgriCore Tech Valley,<br />Innovation District, CA 94043
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#22C55E]/10 transition-colors">
                  <Phone size={18} className="text-[#22C55E]" />
                </div>
                <span className="text-base text-gray-400">
                  +1 (555) 012-3456
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#22C55E]/10 transition-colors">
                  <Mail size={18} className="text-[#22C55E]" />
                </div>
                <span className="text-base text-gray-400">
                  hq@agricore.com
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
