"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  Droplet,
  Sun,
  TrendingUp,
  Shield,
  Users,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Testimonials } from "@/components/home/Testimonials";
import Link from "next/link";

const partners = [
  "FarmTech Solutions",
  "GreenHarvest Co.",
  "AgroData Labs",
  "TerraSense Inc.",
  "CropVision AI",
  "BioYield Corp.",
];

const testimonials = [
  {
    quote:
      "AgriCore transformed our irrigation systems, cutting water usage by 45% while improving crop yield. Their team is exceptional.",
    name: "Sarah Mitchell",
    role: "Operations Director, GreenHarvest Co.",
    initials: "SM",
  },
  {
    quote:
      "The precision agronomy service alone saved us over $200K in the first season. A game changer for modern farming.",
    name: "James Thornton",
    role: "CEO, Thornton Family Farms",
    initials: "JT",
  },
  {
    quote:
      "Their sustainable approach aligns perfectly with our mission. The data insights are incredibly actionable.",
    name: "Dr. Maya Chen",
    role: "Head of Research, TerraSense",
    initials: "MC",
  },
];

export function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ═══ 1. HERO ═══ */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden -mt-[100px]"
      >
        {/* Parallax background */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2600&auto=format&fit=crop"
            alt="Modern agricultural field at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#14532D]/40 z-10" />
        </motion.div>

        {/* Organic blob decoration */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl z-0"
          style={{ animation: "morph 8s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#CA8A04]/10 rounded-full blur-3xl z-0"
          style={{ animation: "morph 10s ease-in-out infinite reverse" }}
        />

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-white">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <span className="px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-lg text-sm font-medium tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              The Future of Sustainable Agriculture
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] tracking-tight text-white"
          >
            Cultivating{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86efac] via-[#34d399] to-[#EAB308]">
              Tomorrow
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl font-light text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Advanced precision farming solutions blending traditional wisdom
            with next-generation technology for a sustainable harvest.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#22C55E] to-[#15803D] text-white border-0 shadow-lg shadow-green-900/30"
              >
                Discover Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white hover:text-[#14532D] backdrop-blur-sm"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ 2. TRUSTED BY / PARTNER LOGOS ═══ */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-center text-sm text-[#14532D]/40 font-medium uppercase tracking-widest mb-8">
            Trusted by leading agricultural organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            {partners.map((name) => (
              <span
                key={name}
                className="text-[#14532D]/25 font-bold text-lg tracking-tight hover:text-[#14532D]/50 transition-colors duration-200"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. ABOUT PREVIEW ═══ */}
      <section className="py-28 organic-gradient relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="text-[#CA8A04] font-semibold tracking-wider text-sm uppercase mb-4 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#14532D] mb-6 leading-tight">
                Rooted in Tradition,{" "}
                <span className="text-gradient-green">
                  Growing with Innovation
                </span>
              </h2>
              <p className="text-[#14532D]/70 text-lg mb-10 leading-relaxed">
                AgriCore is more than a farming enterprise. We are stewards of
                the land, utilizing cutting-edge agronomy and precision
                technology to maximize yield while minimizing ecological impact.
                Over the last two decades, we&apos;ve transformed thousands of
                acres into smart, sustainable food ecosystems.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { value: "15K+", label: "Acres Cultivated" },
                  { value: "100%", label: "Carbon Neutral" },
                  { value: "98%", label: "Client Retention" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center md:text-left">
                    <h4 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-1">
                      {stat.value}
                    </h4>
                    <p className="text-xs text-[#14532D]/50 font-medium uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button variant="outline" size="md">
                  Read Our Story
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative h-[550px] rounded-3xl overflow-hidden premium-shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1500&auto=format&fit=crop"
                  alt="Farmer inspecting crops with drone technology"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14532D]/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="font-semibold text-xl font-serif">
                    Advanced Crop Monitoring
                  </p>
                  <p className="text-sm text-white/70 mt-1">
                    Using drone and sensor technology for perfect soil
                    conditions.
                  </p>
                </div>
                {/* Gold accent corner */}
                <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#CA8A04]/60 rounded-tr-xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ 4. SERVICES ═══ */}
      <section className="py-28 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-[#CA8A04] font-semibold tracking-wider text-sm uppercase">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#14532D] mt-4 mb-6">
                Our Core Services
              </h2>
              <p className="text-[#14532D]/60 text-lg">
                Comprehensive agricultural solutions designed for efficiency,
                scale, and uncompromising quality.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Precision Agronomy",
                desc: "Data-driven insights to manage crop growth, ensuring optimal yields and resource use across seasons.",
                color: "from-[#15803D] to-[#22C55E]",
                bgLight: "#F0FDF4",
              },
              {
                icon: Droplet,
                title: "Smart Irrigation",
                desc: "Automated hydration systems that conserve water while delivering exact moisture levels to every plant.",
                color: "from-[#0891B2] to-[#22D3EE]",
                bgLight: "#ECFEFF",
              },
              {
                icon: Sun,
                title: "Solar Integration",
                desc: "Powering all operations purely through renewable solar infrastructure installed and maintained on site.",
                color: "from-[#CA8A04] to-[#EAB308]",
                bgLight: "#FEFCE8",
              },
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <Link href="/services" className="block h-full cursor-pointer">
                  <div className="bg-white p-10 rounded-3xl premium-shadow border border-gray-100/80 group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                    {/* Hover background glow */}
                    <div className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.06] rounded-full blur-3xl transition-opacity duration-500`} />
                    {/* Top accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative z-10`}
                    >
                      <service.icon size={28} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#14532D] mb-4 font-serif relative z-10">
                      {service.title}
                    </h3>
                    <p className="text-[#14532D]/60 leading-relaxed mb-6 relative z-10">
                      {service.desc}
                    </p>
                    <span className="text-[#15803D] font-semibold flex items-center gap-1 group-hover:gap-3 transition-all duration-300 text-sm relative z-10">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. WHY CHOOSE US ═══ */}
      <section className="py-28 bg-[#14532D] relative overflow-hidden">
        {/* Organic background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#22C55E]/5 rounded-full blur-3xl"
            style={{ animation: "float 12s ease-in-out infinite" }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#CA8A04]/5 rounded-full blur-3xl"
            style={{ animation: "float 15s ease-in-out infinite reverse" }}
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-[#CA8A04] font-semibold tracking-wider text-sm uppercase">
                Why AgriCore
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Built for the Future of Farming
              </h2>
              <p className="text-gray-300 text-lg">
                We combine decades of agricultural expertise with modern
                technology to deliver results that matter.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "40% Yield Boost",
                desc: "Average increase in crop production across all our managed operations.",
              },
              {
                icon: Droplet,
                title: "45% Water Saved",
                desc: "Our smart irrigation reduces water usage while improving plant hydration.",
              },
              {
                icon: Shield,
                title: "24/7 Monitoring",
                desc: "Real-time sensors and AI-powered alerts protect your investment around the clock.",
              },
              {
                icon: Users,
                title: "Expert Support",
                desc: "Dedicated agronomists assigned to your project for ongoing guidance.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card-dark p-8 rounded-3xl group hover:-translate-y-1 transition-all duration-300 cursor-default relative overflow-hidden">
                  {/* Subtle gold accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#CA8A04]/10 rounded-tr-xl group-hover:border-[#CA8A04]/30 transition-colors" />
                  
                  <div className="w-12 h-12 bg-[#22C55E]/15 rounded-xl flex items-center justify-center mb-6 text-[#22C55E] group-hover:bg-[#22C55E]/25 transition-colors">
                    <item.icon size={24} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. TESTIMONIALS (AgriCore 2.0 Marquee) ═══ */}
      <Testimonials />

      {/* ═══ 7. CTA BANNER ═══ */}
      <section className="relative py-32 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#14532D] via-[#15803D] to-[#14532D]" />

        {/* Organic decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            viewBox="0 0 200 200"
            className="absolute -top-20 -right-20 w-96 h-96 opacity-5"
          >
            <path
              fill="#ffffff"
              d="M47.7,-64.7C61.3,-55.8,71.5,-41.4,78.2,-25.1C84.9,-8.8,88.1,9.4,82.4,24.6C76.7,39.8,62.1,51.9,46.2,60.6C30.3,69.3,13.1,74.5,-4.4,80.7C-21.9,86.9,-39.7,94.1,-53.4,87.6C-67.1,81.1,-76.8,60.9,-82.1,41.2C-87.4,21.5,-88.3,2.3,-84.9,-15.7C-81.5,-33.7,-73.8,-50.5,-60.8,-59.5C-47.8,-68.5,-29.5,-69.7,-13.3,-68.1C2.9,-66.5,19.9,-62.1,34.1,-73.4L47.7,-64.7Z"
              transform="translate(100 100)"
            />
          </svg>
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-[#CA8A04]/10 rounded-full blur-3xl"
            style={{ animation: "float 10s ease-in-out infinite" }}
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86efac] to-[#EAB308]">
                Your Harvest?
              </span>
            </h2>
            <p className="text-xl text-[#BBF7D0] mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join hands with the industry leaders in efficient, sustainable, and
              technologically robust farming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#14532D] hover:bg-gray-100 shadow-xl"
                >
                  Start a Conversation
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
