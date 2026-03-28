"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sprout, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        /* UUPM: Floating navbar with top/left/right spacing */
        "fixed z-50 transition-all duration-300",
        isScrolled
          ? "top-3 left-3 right-3 bg-white/90 backdrop-blur-xl shadow-lg border border-gray-100/80 rounded-2xl py-3"
          : "top-4 left-4 right-4 bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl py-4"
      )}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
          <div className="bg-gradient-to-br from-[#15803D] to-[#22C55E] p-2.5 rounded-xl text-white group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all duration-200">
            <Sprout size={22} />
          </div>
          <span className="text-xl font-bold text-[#14532D] tracking-tight font-serif">
            AgriCore
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer",
                pathname === link.href
                  ? "text-[#15803D] bg-[#F0FDF4]"
                  : "text-[#14532D]/70 hover:text-[#15803D] hover:bg-[#F0FDF4]/60"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#22C55E]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <div className="ml-3">
            <Button variant="primary" size="sm">
              Get a Quote
            </Button>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-[#14532D] p-2 rounded-lg hover:bg-[#F0FDF4] transition-colors cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Content */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-[#BBF7D0]/50 mt-3 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-5 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-base font-medium px-4 py-3 rounded-xl transition-colors cursor-pointer",
                    pathname === link.href
                      ? "text-[#15803D] bg-[#F0FDF4]"
                      : "text-[#14532D]/70 hover:bg-[#F0FDF4]/60"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3">
                <Button variant="primary" className="w-full justify-center">
                  Get a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
