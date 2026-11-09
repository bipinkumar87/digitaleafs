"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does 'Starting at ₹9,999' mean? Are there any hidden charges later?",
      a: "Zero hidden charges. Before writing a single line of code, we provide a crystal-clear written proposal with exact deliverables. ₹9,999 covers a full ready-to-launch responsive business website with instant inquiry capture forms, Google Maps local SEO, mobile optimization, and SSL security. If your project needs specialized custom features (like a multi-vendor portal, custom ERP, or native mobile apps), we quote a fixed, transparent milestone estimate upfront so you always stay in full control.",
    },
    {
      q: "Do I get 100% full source code ownership, or will I be locked into monthly retainers?",
      a: "You get 100% complete source code ownership and full administrative control. Unlike platforms like Shopify or agencies that trap you into paying ₹5,000 to ₹15,000 every single month forever, Digitaleafs hands over the complete codebase, database access, and hosting credentials. You own your digital asset permanently.",
    },
    {
      q: "How fast is delivery, and how can I track live progress while you build?",
      a: "A standard small business or clinic website is completed in 5 to 7 days. Custom management software or mobile apps take 10 to 14 days. From Day 2 onwards, we share a private live staging demo link, allowing you to test, review progress, and provide feedback directly on your phone every day before final launch.",
    },
    {
      q: "What do I need to provide to get started? What if I don't have content or photos?",
      a: "You only need your business name, contact info, and basic list of services. If you don't have professionally written text, logos, or high-res photos, our team handles copywriting and arranges licensed, royalty-free photography tailored specifically to your industry at zero extra cost.",
    },
    {
      q: "Do I need any technical knowledge or coding skills to manage my website or app?",
      a: "None at all! We build a clean, bilingual (English/Hindi) admin panel designed for busy business owners and doctors. You can add new products, update consultation timings, view patient appointments, or change prices in 2 taps on your phone. Plus, we include a 1-on-1 video walkthrough session.",
    },
    {
      q: "Will my website have automated booking, Google Maps Ranking, and UPI payments?",
      a: "Yes, built-in standard. We integrate instant booking and lead inquiry forms, optimize your Google Business Profile to rank for local 'near me' searches, and embed zero-fee direct UPI QR codes (Google Pay, PhonePe, Paytm) that deposit customer payments straight into your bank account.",
    },
    {
      q: "What happens after launch? What if something breaks or I need a small change?",
      a: "Every project includes 30 days of free dedicated 1-on-1 developer support. If you encounter a bug, need small adjustments, or have any technical question, our senior lead engineer resolves it within hours — no annoying ticket queues or bot replies.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-[#171717] border-t border-[#F9F7E3]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F9F7E3] tracking-tight">
            Frequently Asked <span className="text-gradient-orange">Questions</span>
          </h2>
          <p className="mt-4 text-base text-[#F9F7E3]/75">
            Everything you need to know about working with Digitaleafs to build your website, app, or software.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="luxury-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full bg-[#171717] border border-white/10 flex items-center justify-center text-[#F28D52] font-bold text-lg shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#F9F7E3]/80 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
