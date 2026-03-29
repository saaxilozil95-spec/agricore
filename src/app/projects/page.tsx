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

      {/* Projects Bento Gallery */}
      <section className="py-24 bg-[#0A1F14] relative overflow-hidden grain-texture">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_0%,_transparent_70%)] opacity-[0.03] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
            {projects.map((project, i) => {
              const bentoClasses = [
                "lg:col-span-2 lg:row-span-1", // Midwest Corn (Wide)
                "lg:col-span-1 lg:row-span-2", // Cali Irrigation (Tall)
                "lg:col-span-1 lg:row-span-1", // Texas Solar (Square)
                "lg:col-span-1 lg:row-span-1", // Oregon Organic (Square)
              ][i] || "";

              return (
                <ScrollReveal
                  key={i}
                  delay={i * 0.1}
                  className={`${bentoClasses} group relative rounded-[2rem] overflow-hidden border border-white/5 cursor-pointer bg-[#14532D]/20 shadow-2xl`}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                  
                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F14] via-[#0A1F14]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Content Layout */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/30 text-[#22C55E] text-[10px] font-bold uppercase tracking-widest">
                          {project.category}
                        </span>
                        <span className="text-white/40 text-xs flex items-center gap-1">
                          <MapPin size={10} />
                          {project.location}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif leading-tight">
                        {project.title}
                      </h3>
                      
                      <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-white/40 uppercase font-bold tracking-tighter">Impact Result</span>
                          <span className="text-lg font-bold text-[#CA8A04]">{project.result}</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white transform group-hover:translate-x-1 transition-all duration-300">
                          <ArrowUpRight size={20} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Top-left gold accent corner */}
                  <div className="absolute top-6 left-6 w-10 h-10 border-t border-l border-[#CA8A04]/20 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
