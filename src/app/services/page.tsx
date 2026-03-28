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

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-3xl premium-shadow border border-gray-100/80 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                  {/* Colored top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                  {/* Hover background glow */}
                  <div className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.06] rounded-full blur-3xl transition-opacity duration-500`} />

                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative z-10`}
                  >
                    <service.icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#14532D] mb-3 font-serif relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-[#14532D]/60 leading-relaxed mb-6 flex-grow relative z-10">
                    {service.desc}
                  </p>

                  {/* Feature checklist */}
                  <ul className="space-y-2.5 mb-6 relative z-10">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-sm text-[#14532D]/70"
                      >
                        <div className="w-5 h-5 rounded-md bg-[#F0FDF4] flex items-center justify-center shrink-0">
                          <Check
                            size={12}
                            className="text-[#22C55E]"
                          />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto border-t border-gray-100 pt-6 relative z-10">
                    <Link
                      href="/contact"
                      className="text-[#15803D] font-semibold flex items-center gap-1 group-hover:gap-3 transition-all duration-300 text-sm cursor-pointer"
                    >
                      Get a consultation{" "}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
