import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us & Free Developer Consultation",
  description:
    "Connect directly with our senior lead developers. Free architecture guidance, transparent fixed pricing, and instant WhatsApp support.",
  alternates: {
    canonical: "https://digitaleafs.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden pt-20">
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
