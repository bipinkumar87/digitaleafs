import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions & Clarifications",
  description:
    "Clear answers about development timelines, fixed transparent pricing, source code ownership, hosting, and post-launch support.",
  alternates: {
    canonical: "https://digitaleafs.com/faq",
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden pt-20">
      <Navbar />
      <main>
        <FAQ />
        <QuoteBanner />
      </main>
      <Footer />
    </div>
  );
}
