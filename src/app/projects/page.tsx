"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowUpRight, MapPin } from "lucide-react";

const projects = [
  {
    title: "Midwest Corn Optimization",
    category: "Precision Agronomy",
    location: "Iowa, USA",
    result: "+38% yield increase",
    img: "https://images.unsplash.com/photo-1595186259021-c4fd09e07abe?q=80&w=1500&auto=format&fit=crop",
  },
  {
    title: "California Valley Irrigation",
    category: "Water Management",
    location: "Fresno, CA",
    result: "45% water savings",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1500&auto=format&fit=crop",
  },
  {
    title: "Texas Solar Integration",
    category: "Renewable Energy",
    location: "Austin, TX",
    result: "100% energy offset",
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1500&auto=format&fit=crop",
  },
  {
    title: "Oregon Organic Orchards",
    category: "Sustainable Growth",
    location: "Portland, OR",
    result: "Organic certified",
    img: "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1500&auto=format&fit=crop",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero with dark faded farming background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1595186259021-c4fd09e07abe?q=80&w=2600&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F14]/95 via-[#14532D]/90 to-[#14532D]" />
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#CA8A04]/5 rounded-full blur-3xl z-0" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-[#CA8A04] font-semibold tracking-wider text-sm uppercase mb-4 block">
                Our Portfolio
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86efac] to-[#EAB308]">
                  Projects
                </span>
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
                Explore our portfolio of successful implementations across
                diverse agricultural landscapes and challenges.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-[#0A1F14]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.1}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-3xl mb-6 bg-[#14532D] aspect-[4/3] relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-75 group-hover:opacity-100"
                  />
                  {/* Hover arrow */}
                  <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={22} className="text-white" />
                  </div>
                  {/* Bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A1F14] to-transparent" />
                  {/* Result badge */}
                  <div className="absolute bottom-6 left-6 px-4 py-2 bg-gradient-to-r from-[#15803D] to-[#22C55E] rounded-full text-white text-xs font-bold">
                    {project.result}
                  </div>
                  {/* Gold accent */}
                  <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-[#CA8A04]/40 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#22C55E] font-semibold text-xs tracking-widest uppercase">
                    {project.category}
                  </span>
                  <span className="text-gray-600">·</span>
                  <span className="text-gray-500 text-xs flex items-center gap-1">
                    <MapPin size={10} />
                    {project.location}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#22C55E] transition-colors duration-200 font-serif">
                  {project.title}
                </h3>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
