import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CaseStudies from "@/components/CaseStudies";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Client Projects & Featured Case Studies",
  description:
    "Explore our delivered client projects: LIC Advisor Portals, Luxury Restaurant booking engines, healthcare platforms, and real-world deliveries.",
  alternates: {
    canonical: "https://digitaleafs.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden pt-20">
      <Navbar />
      <main>
        <CaseStudies />
        <QuoteBanner />
      </main>
      <Footer />
    </div>
  );
}
