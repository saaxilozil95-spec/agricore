"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Headquarters",
    lines: ["123 AgriCore Valley", "Springfield, IL 62701, USA"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+1 (800) 555-0199", "Mon-Fri, 9am-6pm EST"],
  },
  {
    icon: Mail,
    title: "Email Directly",
    lines: ["contact@agricore.com", "support@agricore.com"],
  },
  {
    icon: Clock,
    title: "Response Time",
    lines: ["Typically within 24 hours", "depending on inquiry type"],
  },
];

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero with faded farming background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2600&auto=format&fit=crop"
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
                Contact Us
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-[#14532D] mb-6 leading-tight">
                Get In{" "}
                <span className="text-gradient-green">Touch</span>
              </h1>
              <p className="text-xl text-[#14532D]/60 font-light leading-relaxed max-w-2xl mx-auto">
                Whether you need consultation on a new farming project, or
                support with existing systems, our team is ready to assist.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal delay={0.1}>
              <div className="bg-[#F0FDF4]/50 p-10 md:p-14 rounded-3xl premium-shadow border border-[#BBF7D0]/30 h-full relative overflow-hidden">
                {/* Gold accent */}
                <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#CA8A04]/20 rounded-tr-xl" />

                <h3 className="text-3xl font-bold text-[#14532D] mb-2 font-serif">
                  Send a Message
                </h3>
                <p className="text-[#14532D]/50 text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you
                  promptly.
                </p>

                {formStatus === "success" ? (
                  <div className="p-10 bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] text-[#14532D] rounded-2xl flex flex-col items-center justify-center text-center h-72 border border-[#BBF7D0]">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#15803D] to-[#22C55E] rounded-full flex items-center justify-center text-white mb-5 shadow-lg shadow-green-500/20">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold mb-2 font-serif">
                      Message Sent!
                    </h4>
                    <p className="text-[#15803D]/70">
                      We&apos;ll be in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="mt-6 text-sm text-[#15803D] underline underline-offset-4 cursor-pointer hover:text-[#14532D] transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium text-[#14532D]/80"
                        >
                          First Name
                        </label>
                        <input
                          id="firstName"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-[#BBF7D0]/50 bg-white focus:outline-none focus:ring-2 focus:ring-[#22C55E]/40 focus:border-[#22C55E] transition-all text-[#14532D] placeholder:text-[#14532D]/30"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium text-[#14532D]/80"
                        >
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-[#BBF7D0]/50 bg-white focus:outline-none focus:ring-2 focus:ring-[#22C55E]/40 focus:border-[#22C55E] transition-all text-[#14532D] placeholder:text-[#14532D]/30"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-[#14532D]/80"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#BBF7D0]/50 bg-white focus:outline-none focus:ring-2 focus:ring-[#22C55E]/40 focus:border-[#22C55E] transition-all text-[#14532D] placeholder:text-[#14532D]/30"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-[#14532D]/80"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        className="w-full px-4 py-3 rounded-xl border border-[#BBF7D0]/50 bg-white focus:outline-none focus:ring-2 focus:ring-[#22C55E]/40 focus:border-[#22C55E] transition-all text-[#14532D] cursor-pointer"
                      >
                        <option>General Inquiry</option>
                        <option>Project Consultation</option>
                        <option>Support & Maintenance</option>
                        <option>Partnerships</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-[#14532D]/80"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-[#BBF7D0]/50 bg-white focus:outline-none focus:ring-2 focus:ring-[#22C55E]/40 focus:border-[#22C55E] transition-all resize-none text-[#14532D] placeholder:text-[#14532D]/30"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={formStatus === "submitting"}
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} className="mr-1" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Info + Map */}
            <ScrollReveal delay={0.3}>
              <div className="space-y-8">
                {/* Map */}
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#F0FDF4] premium-shadow border border-gray-100/80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3058.988019685362!2d-89.650148!3d39.784849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887539a2f6fb39e3%3A0x6b4efd59d3eec9e4!2sSpringfield%2C%20IL!5e0!3m2!1sen!2sus!4v1700688921133!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AgriCore Office Location"
                  />
                </div>

                {/* Contact cards */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((c, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-5 rounded-2xl bg-white premium-shadow border border-gray-100/80 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#15803D] to-[#22C55E] flex items-center justify-center shrink-0 text-white shadow-md shadow-green-500/15">
                        <c.icon size={18} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#14532D] text-sm mb-1 font-serif">
                          {c.title}
                        </h4>
                        {c.lines.map((line, j) => (
                          <p
                            key={j}
                            className="text-[#14532D]/50 text-xs leading-relaxed"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
