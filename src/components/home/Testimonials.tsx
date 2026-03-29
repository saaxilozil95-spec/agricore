"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mohamed Diriye",
    role: "Dairy Farmer, Hargeisa",
    text: "AgriCore's irrigation systems transformed my operations. My water waste is down by 40% and my milk production is up. Transformative technology.",
    rating: 5,
    image: "/images/testimonials/mohamed-diriye.png",
  },
  {
    name: "Dr. Ladan Saeed",
    role: "Agricultural Consultant",
    text: "The precision agronomy insights are second to none. They provide data that was previously impossible to collect in our climate.",
    rating: 5,
    image: "/images/testimonials/ladan-saeed.png",
  },
  {
    name: "Abdisalam Hassan",
    role: "Agro-Enterprise CEO",
    text: "Scaling our cereal production was a challenge until we integrated AgriCore's automated fleets. Unmatched efficiency and support.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=abdisalam",
  },
  {
    name: "Ayan Mohamed",
    role: "Sustainable Farming Advocate",
    text: "They aren't just selling tools; they are building a sustainable future. Their solar matching service is a game-changer for off-grid farms.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=ayan",
  },
  {
    name: "Ismail Aden",
    role: "Greenhouse Owner",
    text: "Real-time weather monitoring saved my tomato harvest from a snap frost. Worth every cent for the peace of mind alone.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=ismail",
  },
];

export function Testimonials() {
  // Duplicate list for infinite scroll effect
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-[#F0FDF4]/30 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BBF7D0] to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <span className="text-[#CA8A04] font-semibold tracking-wider text-sm uppercase">
          Client Stories
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#14532D] mt-4 font-serif">
          Trusted by the <span className="text-[#15803D]">Modern Farmer</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-6 py-4"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {marqueeItems.map((item, i) => (
            <div
              key={i}
              className="w-[400px] shrink-0 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#15803D] to-[#CA8A04] opacity-40" />
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-[#15803D]/5 transform -rotate-12 transition-transform group-hover:rotate-0 duration-500" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, idx) => (
                  <Star key={idx} size={14} className="fill-[#CA8A04] text-[#CA8A04]" />
                ))}
              </div>
              
              <p className="text-[#14532D]/80 leading-relaxed mb-6 whitespace-normal font-medium">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#15803D] to-[#CA8A04] flex items-center justify-center text-white font-bold font-serif text-lg uppercase overflow-hidden border-2 border-white shadow-sm">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <span>{item.name.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-[#14532D]">{item.name}</h4>
                  <p className="text-xs text-[#14532D]/50 uppercase tracking-wider font-bold">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BBF7D0] to-transparent" />
    </section>
  );
}
