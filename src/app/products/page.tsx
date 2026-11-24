import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "In-House Digital Products & SaaS Platforms",
  description:
    "Discover Greetingsly and our proprietary in-house digital platforms built for automation, invitations, and rapid business growth.",
  alternates: {
    canonical: "https://digitaleafs.com/products",
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden pt-20">
      <Navbar />
      <main>
        <Products />
        <QuoteBanner />
      </main>
      <Footer />
    </div>
  );
}
