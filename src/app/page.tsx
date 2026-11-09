import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Blog from "@/components/Blog";
import Process from "@/components/Process";
import QuoteBanner from "@/components/QuoteBanner";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden">
      {/* Top Fixed Navigation */}
      <Navbar />

      <main>
        {/* Hero Section with herovideo.mp4 */}
        <Hero />

        {/* Industry Solutions (Clinics, Retail Shops, Coaching Centers, Local Businesses, Custom Apps) */}
        <Solutions />

        {/* Core Services Matrix */}
        <Services />

        {/* In-House Digital Products (Greetingsly & Ecosystem SaaS) */}
        <Products />

        {/* 4-Step Agile Methodology */}
        <Process />

        {/* High-Converting Attractive Quote Banner (Starting from ₹9,999) */}
        <QuoteBanner />

        {/* Latest Insights & Practical Growth Guides (Right Above FAQ) */}
        <Blog />

        {/* Frequently Asked Questions Accordion */}
        <FAQ />

        {/* Contact Form & Direct WhatsApp Channel */}
        <Contact />
      </main>

      {/* Modern Luxury Footer */}
      <Footer />

      {/* Global Consultation Lead Capture Modal */}
      <ConsultationModal />
    </div>
  );
}
