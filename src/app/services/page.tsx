"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import {
  Leaf,
  Droplet,
  Sun,
  Tractor,
  Sprout,
  Wind,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Leaf,
    title: "Precision Agronomy",
    desc: "Data-driven insights to manage crop growth, ensuring optimal yields and resource use across all seasons.",
    features: [
      "Soil composition analysis",
      "Growth stage monitoring",
      "Yield prediction models",
    ],
    gradient: "from-[#15803D] to-[#22C55E]",
  },
  {
    icon: Droplet,
    title: "Smart Irrigation",
    desc: "Automated hydration systems that conserve water while delivering exact moisture levels to each zone.",
    features: [
      "Moisture sensor networks",
      "Weather-adaptive scheduling",
      "Water usage reporting",
    ],
    gradient: "from-[#0891B2] to-[#22D3EE]",
  },
  {
    icon: Sun,
    title: "Solar Integration",
    desc: "Powering operations purely through renewable solar infrastructure installed and maintained on site.",
    features: [
      "Panel installation & setup",
      "Energy storage systems",
      "Grid-tie optimization",
    ],
    gradient: "from-[#CA8A04] to-[#EAB308]",
  },
  {
    icon: Tractor,
    title: "Automated Fleets",
    desc: "Self-driving electric tractors that handle plowing, seeding, and harvesting without human error.",
    features: [
      "GPS-guided navigation",
      "Fleet management dashboard",
      "Maintenance scheduling",
    ],
    gradient: "from-[#7C3AED] to-[#A78BFA]",
  },
  {
    icon: Sprout,
    title: "Genetic Selection",
    desc: "Sourcing and advising on the best seed genetics specifically for your soil profile and climate.",
    features: [
      "DNA-based seed matching",
      "Climate resilience testing",
      "Organic seed sourcing",
    ],
    gradient: "from-[#059669] to-[#34D399]",
  },
  {
    icon: Wind,
    title: "Climate Monitoring",
    desc: "Micro-climate sensors collecting live data to predict and react to weather instability in real-time.",
    features: [
      "Real-time weather alerts",
      "Frost prediction system",
      "Historical pattern analysis",
    ],
    gradient: "from-[#6366F1] to-[#818CF8]",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero with faded farming background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2600&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/65 to-white/85" />
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E]/8 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#CA8A04]/8 rounded-full blur-3xl z-0" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-[#CA8A04] font-semibold tracking-wider text-sm uppercase mb-4 block">
                Our Services
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-[#14532D] mb-6 leading-tight">
                End-to-End{" "}
                <span className="text-gradient-green">Solutions</span>
              </h1>
              <p className="text-xl text-[#14532D]/60 leading-relaxed max-w-2xl mx-auto">
                We provide comprehensive, end-to-end solutions for modern
                agribusinesses aiming for peak efficiency and sustainability.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 bg-white relative overflow-hidden grain-texture">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#CA8A04]/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
            {services.map((service, i) => {
              const bentoClasses = [
                "lg:col-span-2 lg:row-span-2", // Precision Agronomy (Featured)
                "lg:col-span-1 lg:row-span-1", // Smart Irrigation
                "lg:col-span-1 lg:row-span-1", // Solar Integration
                "lg:col-span-1 lg:row-span-2", // Automated Fleets
                "lg:col-span-2 lg:row-span-1", // Genetic Selection
                "lg:col-span-1 lg:row-span-1", // Climate Monitoring
              ][i];

              const stats = [
                { label: "Active Fields", value: "1,240" },
                { label: "Water Saved", value: "32%" },
                { label: "Energy Output", value: "4.2MW" },
                { label: "Fleet Size", value: "85 units" },
                { label: "DNA Matches", value: "15k+" },
                { label: "Sensors Active", value: "24/7" },
              ][i];

              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={`${bentoClasses} group relative h-full rounded-[2.5rem] border border-gray-100/80 bg-white p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-green-900/10 flex flex-col justify-between overflow-hidden cursor-pointer`}>
                    {/* Background noise and gradient */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[#F0FDF4] to-white z-0" />
                    
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                          <service.icon size={26} strokeWidth={1.8} />
                        </div>
                        <div className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100/50 text-[10px] font-bold tracking-widest uppercase text-[#14532D]/40 group-hover:bg-white group-hover:text-[#15803D] transition-colors duration-300">
                          PRO SOLUTION
                        </div>
                      </div>

                      <div className="flex-grow">
                        <h3 className={`font-serif leading-tight text-[#14532D] mb-3 ${bentoClasses.includes('row-span-2') ? 'text-3xl lg:text-4xl font-bold' : 'text-xl lg:text-2xl font-bold'}`}>
                          {service.title}
                        </h3>
                        <p className={`text-[#14532D]/60 leading-relaxed line-clamp-3 ${bentoClasses.includes('col-span-2') ? 'max-w-md' : ''}`}>
                          {service.desc}
                        </p>
                      </div>

                      <div className="mt-8 flex items-end justify-between">
                        <div className="space-y-1">
                          <p className="text-[10px] uppercase tracking-tighter text-[#CA8A04] font-bold">
                            {stats.label}
                          </p>
                          <p className="text-2xl font-serif text-[#14532D] font-bold">
                            {stats.value}
                          </p>
                        </div>
                        <Link 
                          href="/contact"
                          className="w-10 h-10 rounded-full bg-[#14532D]/5 flex items-center justify-center text-[#14532D] group-hover:bg-[#14532D] group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1"
                        >
                          <ArrowRight size={18} />
                        </Link>
                      </div>
                    </div>

                    {/* Decorative path lines (Inspiration: 21st.dev Background Paths) */}
                    <svg className="absolute -bottom-10 -right-10 w-40 h-40 opacity-[0.03] text-[#14532D] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
                      <path d="M10,90 Q50,10 90,90 T170,90" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      <path d="M10,80 Q50,0 90,80 T170,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 organic-gradient">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[#CA8A04] font-semibold tracking-wider text-sm uppercase">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#14532D] mt-4 mb-6">
                How We Work
              </h2>
              <p className="text-[#14532D]/60 text-lg">
                A structured approach that delivers measurable results from day
                one.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                desc: "We start with a thorough analysis of your land, soil, and current operations.",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Our agronomists design a custom plan tailored to your goals and environment.",
              },
              {
                step: "03",
                title: "Implementation",
                desc: "We deploy technology and systems, training your team every step of the way.",
              },
              {
                step: "04",
                title: "Optimization",
                desc: "Continuous monitoring and AI-driven adjustments to maximize performance.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#15803D] to-[#22C55E] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-300 font-serif">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#14532D] mb-3 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-[#14532D]/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
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
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#CA8A04]/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
              Every farm is unique. Let&apos;s discuss how we can tailor our
              services to your specific needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#14532D] hover:bg-gray-100"
                >
                  Schedule a Consultation
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
