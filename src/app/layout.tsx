import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/Providers";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

/* UUPM Typography #8: Wellness Calm — Lora (headings) + Raleway (body) */
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AgriCore | Sustainable Farming & Agriculture Technology",
  description:
    "Premium agribusiness providing modern farming solutions, precision agriculture, and sustainable practices for a better tomorrow.",
  keywords:
    "agriculture, precision farming, sustainable, agribusiness, modern farming, organic, farm technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${raleway.variable}`}>
      <body className="antialiased text-[#14532D] bg-white font-sans min-h-screen flex flex-col relative">
        {/* Global Grain Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.025] grain-texture" />
        
        {/* Scroll Progress Bar (Pure CSS implementation) */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#CA8A04] to-[#15803D] z-[10000] origin-left scale-x-0 transition-transform duration-100 ease-out" id="scroll-progress-bar" />

        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-grow pt-[100px]">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
