import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Blog from "@/components/Blog";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Business Growth & Digital Strategy Blog",
  description:
    "Actionable business guides, conversion strategies, and proven insights on why a modern website is essential to grow your business revenue.",
  alternates: {
    canonical: "https://digitaleafs.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden pt-20">
      <Navbar />
      <main>
        <Blog />
        <QuoteBanner />
      </main>
      <Footer />
    </div>
  );
}
