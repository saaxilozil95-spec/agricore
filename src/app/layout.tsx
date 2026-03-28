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
      <body className="antialiased text-[#14532D] bg-white font-sans min-h-screen flex flex-col">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-grow pt-[100px]">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
