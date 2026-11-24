import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Transparent Pricing & Web Development Rates",
  description:
    "Fixed transparent rates starting from ₹7,999. Zero monthly agency lock-in, 100% full source code ownership, and 30-day post-launch warranty.",
  alternates: {
    canonical: "https://digitaleafs.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden pt-20">
      <Navbar />
      <main>
        <Pricing />
        <QuoteBanner />
      </main>
      <Footer />
    </div>
  );
}
