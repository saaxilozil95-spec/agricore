"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* SVG social icons (UUPM: no emoji icons, use SVG) */
const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const Twitter = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const timeline = [
  {
    year: "2004",
    title: "Founded",
    desc: "Started as a single 50-acre test plot exploring precision agriculture methods.",
  },
  {
    year: "2010",
    title: "First Major Contract",
    desc: "Partnered with state agricultural board to modernize 5,000 acres of farmland.",
  },
  {
    year: "2016",
    title: "Drone Integration",
    desc: "Became the first agri-firm in the region to deploy autonomous drone monitoring at scale.",
  },
  {
    year: "2020",
    title: "Carbon Neutral",
    desc: "Achieved 100% carbon neutrality across all managed operations and logistics.",
  },
  {
    year: "2024",
    title: "AI-Powered Platform",
    desc: "Launched our proprietary AI analytics platform for predictive crop management.",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    desc: "Every decision backed by data, every resource measured and optimized for maximum impact.",
    stat: "99.2%",
    statLabel: "Accuracy",
  },
  {
    icon: Heart,
    title: "Sustainability",
    desc: "We farm for today while protecting the land for generations to come through eco-first practices.",
    stat: "100%",
    statLabel: "Carbon Neutral",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Empowering local farmers with tools and knowledge to thrive in the modern agricultural landscape.",
    stat: "2,400+",
    statLabel: "Farmers Helped",
  },
  {
    icon: Globe,
    title: "Innovation",
    desc: "Relentlessly exploring new technologies to improve food systems and reshape global agriculture.",
    stat: "15+",
    statLabel: "Patents Filed",
  },
];

const team = [
  {
    name: "Mohamed Abdullahi",
    role: "Founder & CEO",
    bio: "A visionary entrepreneur and technologist, Mohamed founded AgriCore with a mission to revolutionize sub-Saharan agriculture. By integrating IoT sensor networks and precision data analytics with traditional farming wisdom, he has pioneered a new era of sustainable and scalable food production across the region.",
    image: "/images/founder.png",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Dr. Abdihakim Ali",
    role: "Co-Founder & CTO",
    bio: "A distinguished expert in agricultural engineering and precision technology, Dr. Abdihakim leads AgriCore's technical strategy. With a deep focus on innovative irrigation systems and AI-driven soil monitoring, he has been instrumental in developing our core technological infrastructure that empowers farmers across the continent.",
    image: "/images/abdihakim.png",
    socials: { linkedin: "#", twitter: "#" },
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero with faded farming background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2600&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/65 to-white/85" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E]/8 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#CA8A04]/8 rounded-full blur-3xl z-0" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-[#CA8A04] font-semibold tracking-wider text-sm uppercase mb-4 block">
                About AgriCore
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-[#14532D] mb-6 leading-tight">
                Our{" "}
                <span className="text-gradient-green">Journey</span>
              </h1>
              <p className="text-xl text-[#14532D]/60 leading-relaxed max-w-2xl mx-auto">
                Founded on the belief that the future of food depends on
                innovation, AgriCore has grown from a single test plot into a
                leading provider of sustainable agricultural solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal delay={0.1}>
              <div className="relative h-[500px] rounded-3xl overflow-hidden premium-shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1500&auto=format&fit=crop"
                  alt="Agricultural technology in use on a modern farm"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14532D]/50 to-transparent" />
                <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#CA8A04]/50 rounded-tr-xl" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#15803D] to-[#22C55E] rounded-xl flex items-center justify-center text-white">
                      <Target size={20} />
                    </div>
                    <h2 className="text-3xl font-bold text-[#14532D]">
                      Mission
                    </h2>
                  </div>
                  <p className="text-[#14532D]/60 text-lg leading-relaxed">
                    To empower farmers worldwide with precision tools, ensuring
                    that maximum yield goes hand in hand with environmental
                    preservation and community wellbeing.
                  </p>
                </div>

                <div className="nature-divider" />

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#CA8A04] to-[#EAB308] rounded-xl flex items-center justify-center text-white">
                      <Eye size={20} />
                    </div>
                    <h2 className="text-3xl font-bold text-[#14532D]">
                      Vision
                    </h2>
                  </div>
                  <p className="text-[#14532D]/60 text-lg leading-relaxed">
                    We envision a world where agriculture actively restores the
                    planet. By harnessing solar power, automated irrigation, and
                    AI data analytics, we are rebuilding the foundation of modern
                    farming.
                  </p>
                </div>

                <Link href="/contact">
                  <Button variant="primary" size="md">
                    View Our Impact Report
                    <ArrowRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ TEAM SECTION ═══ */}
      <section className="py-20 bg-[#14532D] relative overflow-hidden">
        {/* Organic background */}
        <div className="absolute inset-0">
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
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[#CA8A04] font-semibold tracking-wider text-sm uppercase">
                Leadership
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Meet Our Founders
              </h2>
              <p className="text-gray-400 text-lg">
                The visionary leaders behind AgriCore&apos;s mission to
                revolutionize sustainable agriculture.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.2}>
                <div className="group relative bg-gradient-to-b from-white/[0.08] to-white/[0.03] backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden hover:border-[#22C55E]/30 transition-all duration-500">
                  {/* Gold corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden z-10">
                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#CA8A04]/40 rounded-tr-xl" />
                  </div>

                  {/* Photo with crop logic */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      style={{ 
                        objectPosition: 
                          member.name === "Mohamed Abdullahi" ? "center 12%" : 
                          member.name === "Dr. Abdihakim Ali" ? "center 32%" : 
                          "top" 
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14532D] via-transparent to-transparent" />

                    {/* Social links on hover */}
                    <div className="absolute bottom-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <a
                        href={member.socials.linkedin}
                        aria-label={`${member.name} LinkedIn`}
                        className="w-9 h-9 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-[#22C55E]/30 transition-colors cursor-pointer"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href={member.socials.twitter}
                        aria-label={`${member.name} Twitter`}
                        className="w-9 h-9 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-[#22C55E]/30 transition-colors cursor-pointer"
                      >
                        <Twitter size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-bold text-white font-serif">
                        {member.name}
                      </h3>
                    </div>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#15803D] to-[#22C55E] text-white text-xs font-semibold rounded-full mb-5">
                      {member.role}
                    </span>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values — Enhanced Cards */}
      <section className="py-24 organic-gradient">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[#CA8A04] font-semibold tracking-wider text-sm uppercase">
                Our Values
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#14532D] mt-4 mb-6">
                What Drives Us
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-3xl premium-shadow border border-gray-100/80 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Subtle background accent on hover */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#22C55E]/0 group-hover:bg-[#22C55E]/5 rounded-full blur-2xl transition-all duration-500" />

                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#15803D] to-[#22C55E] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-green-500/20 relative z-10">
                    <v.icon size={24} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#14532D] mb-3 font-serif text-center relative z-10">
                    {v.title}
                  </h3>

                  {/* Stat highlight */}
                  <div className="text-center mb-4 relative z-10">
                    <span className="text-2xl font-bold text-gradient-gold">
                      {v.stat}
                    </span>
                    <span className="block text-[10px] text-[#14532D]/40 font-semibold uppercase tracking-widest mt-0.5">
                      {v.statLabel}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#14532D]/55 text-sm leading-relaxed text-center relative z-10">
                    {v.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-2/3 h-0.5 bg-gradient-to-r from-transparent via-[#22C55E] to-transparent transition-all duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[#CA8A04] font-semibold tracking-wider text-sm uppercase">
                Our History
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#14532D] mt-4 mb-6">
                Milestones That Define Us
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-8 mb-12 last:mb-0">
                  <div className="shrink-0 w-20">
                    <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-[#15803D] to-[#22C55E] text-white text-xs font-bold rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-3 h-3 rounded-full bg-[#22C55E] border-4 border-[#F0FDF4]" />
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 flex-grow bg-gradient-to-b from-[#BBF7D0] to-transparent mt-1" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-[#14532D] mb-2 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-[#14532D]/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#14532D] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#22C55E]/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <ScrollReveal>
            <Award
              className="w-16 h-16 text-[#CA8A04] mx-auto mb-6"
              strokeWidth={1.5}
            />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the AgriCore Family
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
              Whether you&apos;re a small farm or a large-scale operation, we
              have solutions tailored to your needs.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[#14532D] hover:bg-gray-100"
              >
                Get Started Today
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
