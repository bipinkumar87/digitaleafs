import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions & Clarifications — Digitaleafs",
  description:
    "Clear answers about development timelines, fixed transparent pricing, 100% full source code ownership, hosting, and post-launch technical support.",
  alternates: {
    canonical: "https://digitaleafs.com/faq",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://digitaleafs.com/faq",
    title: "Frequently Asked Questions — Digitaleafs Studio",
    description:
      "Everything you need to know about pricing starting from ₹7,999, source code ownership, delivery speed, and UPI payment integration.",
    siteName: "Digitaleafs",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Digitaleafs FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions — Digitaleafs",
    description:
      "Clear answers on source code ownership, pricing transparency, and delivery turnaround.",
    images: ["/img/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://digitaleafs.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "FAQ",
          "item": "https://digitaleafs.com/faq",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does starting prices mean? Are there any hidden charges later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zero hidden charges. Before writing a single line of code, we provide a crystal-clear written proposal with exact deliverables and fixed milestone pricing starting from ₹7,999. Every package includes SSL security, mobile responsiveness, and clean code.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I get 100% full source code ownership, or will I be locked into monthly retainers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You get 100% complete source code ownership and full administrative control. Unlike platforms like Shopify or agencies that trap you into paying monthly retainers forever, Digitaleafs hands over the complete codebase, database access, and hosting credentials.",
          },
        },
        {
          "@type": "Question",
          "name": "How fast is delivery, and how can I track live progress while you build?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard small business or clinic website is completed in 5 to 7 days. Custom management software or mobile apps take 10 to 14 days. From Day 2 onwards, we share a private live staging demo link.",
          },
        },
        {
          "@type": "Question",
          "name": "Can my patients or customers pay me directly using Google Pay, PhonePe, Paytm, or UPI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, built-in standard. We integrate zero-fee direct UPI QR codes and payment gateway setups that deposit customer payments straight into your bank account.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I add new features, custom pages, or mobile apps later as my business grows?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, absolutely! Every system we build is engineered with clean, modular architecture (Next.js, TypeScript, Cloud APIs). Because you retain 100% full source code ownership, you are never locked into a rigid platform.",
          },
        },
      ],
    },
  ],
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <FAQ />
        <QuoteBanner />
      </main>
      <Footer />
    </div>
  );
}