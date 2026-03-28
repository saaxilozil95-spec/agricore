"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "The Role of AI in Predictive Harvesting",
    date: "Oct 12, 2024",
    readTime: "6 min read",
    category: "Technology",
    desc: "How artificial intelligence is allowing farmers to predict harvest yields with 95% accuracy before seeds even sprout.",
    img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1500&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "Regenerative Soil Practices Explained",
    date: "Sep 28, 2024",
    readTime: "8 min read",
    category: "Sustainability",
    desc: "Delving deep into methods that not only stop soil degradation but actively restore microbiome health year over year.",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1500&auto=format&fit=crop",
    featured: false,
  },
  {
    title: "Water Conservation Through Drip Systems",
    date: "Sep 15, 2024",
    readTime: "5 min read",
    category: "Innovation",
    desc: "Analyzing the return on investment for smart drip irrigation systems in extreme drought scenarios.",
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1500&auto=format&fit=crop",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = posts[0];
  const remaining = posts.slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero with faded farming background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2600&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/65 to-white/85" />
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E]/8 rounded-full blur-3xl z-0" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-[#CA8A04] font-semibold tracking-wider text-sm uppercase mb-4 block">
                Insights & News
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-[#14532D] mb-6 leading-tight">
                AgriCore{" "}
                <span className="text-gradient-green">Insights</span>
              </h1>
              <p className="text-xl text-[#14532D]/60 font-light max-w-2xl leading-relaxed">
                Latest news, expert opinions, and deep dives into the
                technologies shaping the future of agriculture.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal>
            <Link
              href="#"
              className="group block bg-white rounded-3xl overflow-hidden premium-shadow-lg border border-gray-100/80 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="grid md:grid-cols-2">
                <div className="h-72 md:h-auto overflow-hidden relative">
                  <img
                    src={featured.img}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-[#CA8A04] to-[#EAB308] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Featured
                  </div>
                  {/* Gold accent */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-[#CA8A04]/40 rounded-br-xl" />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-[#14532D]/40 text-sm mb-4">
                    <span className="px-3 py-1 bg-[#F0FDF4] text-[#15803D] text-xs font-semibold rounded-full">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {featured.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#14532D] mb-4 group-hover:text-[#15803D] transition-colors font-serif">
                    {featured.title}
                  </h2>
                  <p className="text-[#14532D]/60 leading-relaxed mb-8">
                    {featured.desc}
                  </p>
                  <span className="text-[#15803D] font-semibold flex items-center gap-1 group-hover:gap-3 transition-all duration-300 text-sm">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {remaining.map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.15} className="flex flex-col">
                <Link
                  href="#"
                  className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden premium-shadow border border-gray-100/80 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <div className="h-60 overflow-hidden relative">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#14532D] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {post.category}
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#CA8A04]/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-[#14532D]/40 text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#14532D] mb-4 group-hover:text-[#15803D] transition-colors font-serif">
                      {post.title}
                    </h3>
                    <p className="text-[#14532D]/60 mb-8 flex-grow leading-relaxed">
                      {post.desc}
                    </p>
                    <div className="text-[#15803D] font-semibold flex items-center gap-1 group-hover:gap-3 transition-all duration-300 mt-auto text-sm">
                      Read Article <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
