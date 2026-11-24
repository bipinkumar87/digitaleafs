import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Software & Web Development Services",
  description:
    "Explore our end-to-end engineering services: bespoke Next.js web applications, Android & iOS mobile apps, and business automation software starting from ₹7,999.",
  alternates: {
    canonical: "https://digitaleafs.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden pt-20">
      <Navbar />
      <main>
        <Services />
        <QuoteBanner />
      </main>
      <Footer />
    </div>
  );
}
