import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Solutions from "@/components/Solutions";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Industry Solutions for Clinics, Retail & Institutes",
  description:
    "Tailored digital systems engineered for clinics, retail stores, supermarkets, and coaching academies to double local inquiries and revenue.",
  alternates: {
    canonical: "https://digitaleafs.com/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden pt-20">
      <Navbar />
      <main>
        <Solutions />
        <QuoteBanner />
      </main>
      <Footer />
    </div>
  );
}
