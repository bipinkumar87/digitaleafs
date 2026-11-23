"use client";

import { useState, useEffect } from "react";
import { Clock, ArrowRight, BookOpen, Sparkles, X, ChevronLeft, ChevronRight, CheckCircle2, User, Phone, Send, ShieldCheck, Mail } from "lucide-react";

export interface BlogArticle {
  id: string;
  category: string;
  categoryName: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  tag: string;
  link: string;
  image?: string;
  content?: string;
}

const DEFAULT_ARTICLES: BlogArticle[] = [
  {
    id: "why-every-business-needs-a-website",
    category: "business-growth",
    categoryName: "Business Growth",
    title: "Why Every Business Needs a Modern Website in 2026: The Real Reason You Are Losing Customers",
    excerpt:
      "Over 78% of customers in your city search on Google and check a website before visiting or buying. If your business doesn't have a professional website, you are handing those high-paying clients directly to your competitors.",
    readTime: "4 min read",
    date: "Nov 2026",
    tag: "High-Converting Guide",
    image: "/blogimg/why-website.jpg",
    content:
      "In 2026, the consumer journey starts online. Whether you run a retail shop, medical clinic, manufacturing unit, coaching institute, or professional consulting firm, over 78% of potential clients will search for your name or your services on Google before they ever dial your number or step into your office.\n\nHere is why having a modern, high-speed website is no longer optional — it is the single most valuable growth asset for your business:\n\n1. 24/7 Digital Salesperson That Never Sleeps\nWhile your physical office or store closes in the evening, your website continues working around the clock. Over 65% of customer research happens between 8:00 PM and midnight. A website answers frequently asked questions, highlights your past work, showcases client testimonials, and captures high-intent leads while you sleep.\n\n2. Unbeatable Trust & Credibility\nIn today's digital era, a business without an official website looks unverified and risky. Customers question whether your company is legitimate. A clean, branded website with your official domain name instantly establishes authority and separates you from casual roadside operators.\n\n3. Google Local SEO & Google Maps Domination\nWhen potential customers in your area search 'best interior designer near me' or 'top clinic in town', Google prioritizes verified businesses with fast-loading, mobile-friendly websites. Without a website, your Google Business profile has limited ranking power and you lose top positions to competitors.\n\n4. Stop Bleeding Money on Renting Social Media\nInstagram and Facebook algorithms change constantly, and organic reach continues to plummet. Furthermore, platforms like Justdial and Indiamart sell the exact same customer enquiry to 5 other competitors, triggering a destructive price race. Your website is 100% your own digital real estate — no competition, no algorithm penalties, and no shared leads.\n\n5. Transparent One-Time Investment Starting at Just ₹9,999\nAt Digitaleafs, we build custom, high-speed websites with 100% full source code ownership and zero predatory monthly retainers. With just 1 or 2 new customers gained through your website, your entire investment pays for itself.",
    link: "https://wa.me/917851018751?text=Hi%20Digitaleafs!%20I%20want%20to%20build%20a%20modern%20website%20for%20my%20business.",
  },
  {
    id: "website-vs-social-media",
    category: "digital-strategy",
    categoryName: "Digital Strategy",
    title: "Website vs. Social Media: Why Relying Only on Instagram & Justdial Is Costing You 60% Revenue",
    excerpt:
      "Social media accounts can get blocked overnight and directory platforms sell your customer leads to rival competitors. Discover why having your own branded website with direct WhatsApp ordering protects your business.",
    readTime: "5 min read",
    date: "Nov 2026",
    tag: "Market Reality",
    image: "/blogimg/social-vs-web.jpg",
    content:
      "Many small business owners say: 'I already have an Instagram page and a Facebook profile, why do I need a website?' While social media is great for casual awareness, relying on it as your sole business foundation is a dangerous mistake.\n\nHere is the harsh reality that every business owner must understand:\n\n1. You Are Building on Rented Land\nYou do not own your Instagram or Facebook profile. Meta changes its algorithm regularly; posts that used to reach 10,000 people now barely reach 500 without paying for sponsored ads. Worse, accounts can get flagged, restricted, or disabled without warning, killing your inbound sales overnight.\n\n2. The Justdial & Indiamart 'Lead Auction' Trap\nWhen an interested customer submits an inquiry on Justdial, Sulekha, or Indiamart, that same lead is forwarded simultaneously to 4 to 8 competing businesses. You are forced into an aggressive price-discount war where your profit margins vanish. On your own website, you own 100% of the customer's attention with zero competitor ads next to your name.\n\n3. High-Value Clients Require Official Legitimacy\nHigh-ticket clients, corporate buyers, and institutional customers do not close deals over an Instagram DM. They require an official website with clear case studies, certified credentials, transparent terms, and professional domain email addresses (e.g. contact@yourbusiness.com).\n\n4. Direct WhatsApp Integration & Instant Closures\nWith a Digitaleafs website, every product, service, and package comes with a direct 1-click WhatsApp button. The moment a visitor clicks, they land directly in your WhatsApp chat with a pre-filled inquiry, allowing you to close high-margin sales in under 60 seconds.",
    link: "https://wa.me/917851018751?text=Hi%20Digitaleafs!%20I%20want%20to%20stop%20relying%20on%20social%20media%20and%20build%20my%20own%20website.",
  },
  {
    id: "how-clinics-doctors-double-appointments",
    category: "clinic-healthcare",
    categoryName: "Healthcare & Clinics",
    title: "How a Custom Website Doubles Appointments & Patient Trust for Clinics, Doctors & Labs",
    excerpt:
      "Say goodbye to crowded waiting rooms and missed appointment calls. Learn how local clinics and healthcare providers use automated 24/7 web booking and instant WhatsApp reminders to attract premium patients.",
    readTime: "4 min read",
    date: "Nov 2026",
    tag: "Healthcare Growth",
    image: "/blogimg/clinic-doctor.jpg",
    content:
      "For doctors, polyclinics, diagnostic centres, and dental practices, patient trust and seamless scheduling are the two most critical drivers of growth. Traditional paper registers and manual phone call bookings result in missed inquiries, long waiting queues, and high patient frustration.\n\nA dedicated medical practice website transforms clinic operations:\n\n1. 24/7 Online Doctor Appointment Booking\nPatients frequently search for doctors late in the evening or early in the morning when clinics are closed. An intuitive online appointment calendar allows patients to view available time slots, select their preferred doctor, and confirm appointments instantly from their mobile phone.\n\n2. Eliminating No-Shows with Automated WhatsApp Reminders\nPatient no-shows cost clinics up to 30% of their daily productive revenue. By integrating automated WhatsApp and SMS appointment confirmation alerts, clinics remind patients 2 hours prior to their visit, reducing no-show rates by over 75%.\n\n3. Showcasing Verified Doctor Credentials & Treatment Specializations\nPatients want to know their doctor's qualifications, years of experience, degrees, and hospital attachments before booking. A professional website highlights your medical background, before-and-after case photos (for dental and dermatology), and patient recovery stories that establish undisputed medical authority.\n\n4. Online Lab Test Booking & Report Downloads\nDiagnostic labs and polyclinics can offer online sample pickup requests and digital test report downloads, delivering a hospital-grade experience that keeps patients coming back year after year.",
    link: "https://wa.me/917851018751?text=Hi%20Digitaleafs!%20I%20am%20a%20doctor%20or%20clinic%20owner%20and%20want%20a%20patient%20booking%20website.",
  },
  {
    id: "whatsapp-sales-automation-funnel",
    category: "sales-automation",
    categoryName: "Sales & Automation",
    title: "The 5-Minute Lead Rule: How Automated WhatsApp Funnels Turn Website Visitors into Paying Clients",
    excerpt:
      "If you don't respond to a customer inquiry within 5 minutes, 80% will contact your competitor. Learn how smart businesses use integrated 1-click WhatsApp buttons and auto-funnels to close deals effortlessly.",
    readTime: "4 min read",
    date: "Nov 2026",
    tag: "Conversion Secrets",
    image: "/blogimg/whatsapp-sales.jpg",
    content:
      "According to global sales benchmark studies, responding to an inquiry within 5 minutes makes you 21 times more likely to qualify and close the lead compared to waiting 30 minutes. In India, email inquiry forms are largely ignored — customers want immediate conversation on WhatsApp.\n\nHere is how Digitaleafs engineers high-converting websites using integrated WhatsApp funnels:\n\n1. Zero Friction 1-Click WhatsApp Direct Connect\nRather than forcing visitors through tedious 10-field contact forms, our websites feature prominent, attractive floating WhatsApp triggers. With a single tap, visitors enter a private WhatsApp chat with your sales desk.\n\n2. Pre-Filled Message Context\nWhen a customer clicks 'Inquire on WhatsApp' on a specific product page or service card, the chat opens with an automatic pre-filled message: 'Hi! I am interested in your Luxury Restaurant Web Package and would like a free quote.' This eliminates typing effort for the customer and informs your sales team exactly what they need.\n\n3. 24/7 Automated Lead Capture & Qualification\nEven outside office hours, intelligent automated auto-responders greet the lead, collect their requirements, and provide a downloadable PDF brochure or pricing menu instantly.\n\n4. Higher Conversion, Lower Ad Costs\nBusinesses that switched from generic contact forms to WhatsApp-integrated websites experienced a 3x to 4x surge in qualified sales discussions, dramatically cutting customer acquisition costs.",
    link: "https://wa.me/917851018751?text=Hi%20Digitaleafs!%20I%20want%20to%20integrate%20an%20automated%20WhatsApp%20sales%20funnel%20on%20my%20website.",
  },
  {
    id: "why-local-retail-restaurants-must-go-digital",
    category: "local-business",
    categoryName: "Local Businesses",
    title: "From Offline to Digital: Why Local Retailers, Restaurants & Academies Must Build a Website Now",
    excerpt:
      "Quick-commerce giants and corporate chains are taking over local markets. Discover how a modern digital catalogue, online menu, and student portal empower local businesses to dominate their neighbourhood.",
    readTime: "5 min read",
    date: "Nov 2026",
    tag: "Retail & Services",
    image: "/blogimg/local-retail.jpg",
    content:
      "Local grocery stores, clothing boutiques, dine-in restaurants, and coaching academies face unprecedented competition from venture-funded apps and national chains. However, local businesses possess a massive advantage: personal relationships and neighbourhood proximity.\n\nTo unlock that advantage, local businesses must establish their own digital presence:\n\n1. Interactive Digital Menus & Table Reservations for Restaurants\nPrinting physical paper menus is expensive, and paper menus get ruined quickly. A digital restaurant website lets diners scan a QR code or browse your gourmet culinary offerings on their phone from home, view mouth-watering food photos, and reserve a table or order direct delivery without giving up 30% commission to aggregator apps.\n\n2. Online Catalogues & Digital Billing for Retailers\nAllow your neighbourhood customers to view your latest arrivals, stock availability, and special festival discounts online. Customers can select items and send their grocery or clothing order straight to your WhatsApp for quick counter pickup or instant local home delivery.\n\n3. Coaching Institutes & Schools: Digital Portals for Admissions & Fees\nParents judge educational institutes by their digital infrastructure. A dedicated coaching website with online registration, syllabus downloads, previous year topper results, and automated fee payment links builds supreme confidence and attracts 2x more admissions every academic session.\n\n4. Guaranteed ROI with Fixed Transparent Pricing\nDigitaleafs builds turnkey web applications starting from ₹9,999 with zero technical headaches. We handle everything from domain registration and hosting to responsive mobile UI and WhatsApp integration.",
    link: "https://wa.me/917851018751?text=Hi%20Digitaleafs!%20I%20want%20to%20build%20a%20digital%20website%20for%20my%20local%20store%20or%20restaurant.",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [articles, setArticles] = useState<BlogArticle[]>(DEFAULT_ARTICLES);
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showConsultForm, setShowConsultForm] = useState(false);
  const [consultData, setConsultData] = useState({ name: "", phone: "", email: "", message: "" });
  const [consultSubmitting, setConsultSubmitting] = useState(false);
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const ITEMS_PER_PAGE = 4;

  const openArticle = (article: BlogArticle) => {
    setSelectedArticle(article);
    setShowConsultForm(false);
    setConsultSubmitted(false);
    setConsultData({ name: "", phone: "", email: "", message: "" });
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    setShowConsultForm(false);
    setConsultSubmitted(false);
  };

  const categories = [
    { id: "all", label: "All Topics" },
    { id: "business-growth", label: "Business Growth" },
    { id: "digital-strategy", label: "Digital Strategy" },
    { id: "clinic-healthcare", label: "Healthcare & Clinics" },
    { id: "sales-automation", label: "Sales & Automation" },
    { id: "local-business", label: "Local Businesses" },
  ];

  useEffect(() => {
    // Dynamically fetch from public/blog.json so user can easily add/edit blogs anytime
    fetch("/blog.json")
      .then((res) => {
        if (!res.ok) throw new Error("Could not load blog.json");
        return res.json();
      })
      .then((data: BlogArticle[]) => {
        if (Array.isArray(data) && data.length > 0) {
          setArticles(data);
        }
      })
      .catch((err) => {
        console.log("Error loading /blog.json:", err);
      });
  }, []);

  const filtered =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedArticles = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section id="blog" className="py-20 lg:py-28 relative bg-[#171717] border-t border-[#F9F7E3]/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#F28D52]/10 via-[#E94C29]/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F28D52]/10 border border-[#F28D52]/30 text-[#F28D52] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Business Growth &amp; Digital Strategy Insights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F9F7E3] tracking-tight">
            Digitaleafs <span className="text-gradient-orange">Blog &amp; Insights</span>
          </h2>
          <p className="mt-3 text-base text-[#F9F7E3]/75 max-w-2xl leading-relaxed">
            Actionable business guides, conversion strategies, and proven insights on why a modern website is essential to grow your revenue.
          </p>
        </div>

        {/* Filter Pills Strictly in a Single Horizontal Line */}
        <div className="mb-12 lg:mb-16 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center flex-nowrap gap-2 sm:gap-2.5 w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setCurrentPage(1);
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white shadow-lg shadow-[#E94C29]/25 font-bold scale-[1.02]"
                    : "bg-[#1f1f1f] border border-[#F9F7E3]/10 text-[#F9F7E3]/75 hover:text-white hover:border-[#F28D52]/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Focused Category Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {paginatedArticles.map((article) => (
            <article
              key={article.id}
              className="luxury-card rounded-3xl p-5 sm:p-7 lg:p-8 flex flex-col justify-between group relative overflow-hidden bg-[#1a1a1a] border border-[#F9F7E3]/10 hover:border-[#F28D52]/60 transition-all duration-300 shadow-xl"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F28D52]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Featured Blog Image */}
                {article.image && (
                  <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-5 bg-[#222222]">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                    {/* Floating Category Badge over image */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="px-3 py-1 rounded-full bg-[#171717]/90 backdrop-blur-md border border-white/10 text-[#F28D52] font-semibold text-xs shadow-md">
                        {article.categoryName}
                      </span>
                    </div>
                  </div>
                )}

                {/* Meta: Read Time & Date */}
                <div className="flex items-center justify-between text-xs text-[#F9F7E3]/60 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#F28D52]/90 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {article.tag}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#F28D52]" />
                    <span>{article.readTime}</span>
                    <span className="text-white/20">•</span>
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] group-hover:text-[#F28D52] transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-sm sm:text-base text-[#F9F7E3]/75 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => openArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#F28D52] hover:text-white transition-colors cursor-pointer group/btn ml-auto"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => {
                setCurrentPage((prev) => Math.max(prev - 1, 1));
                const el = document.getElementById("blog");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              disabled={currentPage === 1}
              className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-1 transition-all ${
                currentPage === 1
                  ? "opacity-30 cursor-not-allowed bg-[#1f1f1f] text-[#F9F7E3]/40 border border-white/5"
                  : "bg-[#1f1f1f] border border-white/10 text-[#F9F7E3]/80 hover:text-white hover:border-[#F28D52]/50 cursor-pointer"
              }`}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => {
                    setCurrentPage(pageNumber);
                    const el = document.getElementById("blog");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center transition-all cursor-pointer ${
                    currentPage === pageNumber
                      ? "bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white shadow-md shadow-[#E94C29]/30 scale-105"
                      : "bg-[#1f1f1f] border border-white/10 text-[#F9F7E3]/70 hover:text-white hover:border-[#F28D52]/40"
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                const el = document.getElementById("blog");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              disabled={currentPage === totalPages}
              className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-1 transition-all ${
                currentPage === totalPages
                  ? "opacity-30 cursor-not-allowed bg-[#1f1f1f] text-[#F9F7E3]/40 border border-white/5"
                  : "bg-[#1f1f1f] border border-white/10 text-[#F9F7E3]/80 hover:text-white hover:border-[#F28D52]/50 cursor-pointer"
              }`}
              aria-label="Next page"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

      {/* Full Article Reader & Consultation Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={closeArticle}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#1a1a1a] border border-[#F28D52]/40 rounded-3xl p-6 sm:p-8 shadow-2xl scrollbar-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeArticle}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-[#E94C29] text-white transition-colors cursor-pointer z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {showConsultForm ? (
              <div className="py-2">
                {consultSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#F9F7E3]">Consultation Request Received!</h4>
                    <p className="text-sm text-[#F9F7E3]/75 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{consultData.name || "Client"}</strong>. Our senior software lead will review your requirement regarding <strong className="text-[#F28D52]">{selectedArticle.title}</strong> and contact you directly on <strong className="text-[#F28D52]">{consultData.phone}</strong> soon.
                    </p>
                    <div className="pt-4 flex items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={closeArticle}
                        className="px-8 py-3 rounded-full btn-primary-gradient text-white font-bold text-sm shadow-lg hover:opacity-90 transition-opacity cursor-pointer"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F28D52]/10 border border-[#F28D52]/30 text-[#F28D52] mb-3">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Topic: {selectedArticle.categoryName}</span>
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-extrabold text-[#F9F7E3] tracking-tight">
                        Get Free <span className="text-gradient-orange">Consultation</span>
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#F9F7E3]/70 leading-relaxed">
                        Speak directly with senior developers. Get architecture guidance and exact fixed pricing soon.
                      </p>
                    </div>

                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setConsultSubmitting(true);
                        try {
                          await fetch("https://script.google.com/macros/s/AKfycbxwWNR6H2M3PAgzNrvvPkPptILswULqXQkLjwYPFD62wqKe8RCc1hZwEA_Xf_GFalms/exec", {
                            method: "POST",
                            mode: "no-cors",
                            headers: {
                              "Content-Type": "text/plain;charset=utf-8",
                            },
                            body: JSON.stringify({
                              formType: "consultation",
                              name: consultData.name,
                              phone: consultData.phone,
                              email: consultData.email || "N/A",
                              businessType: selectedArticle?.categoryName || "Blog Article Inquiry",
                              budget: "₹9,999 - ₹25,000",
                              message: consultData.message ? `[${selectedArticle?.title}] ${consultData.message}` : `Inquiry regarding: ${selectedArticle?.title}`,
                            }),
                          });
                        } catch (err) {
                          console.error("Consultation submit error:", err);
                        } finally {
                          setConsultSubmitting(false);
                          setConsultSubmitted(true);
                        }
                      }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-xs font-semibold text-[#F9F7E3]/80 mb-1.5 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#F28D52]" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dr. Rajesh Sharma / Rohit Verma"
                          value={consultData.name}
                          onChange={(e) => setConsultData({ ...consultData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#F28D52] transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-[#F9F7E3]/80 mb-1.5 flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-[#F28D52]" />
                            <span>Phone Number *</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +91 98765 43210"
                            value={consultData.phone}
                            onChange={(e) => setConsultData({ ...consultData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#F28D52] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#F9F7E3]/80 mb-1.5 flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-[#F28D52]" />
                            <span>Email (Optional)</span>
                          </label>
                          <input
                            type="email"
                            placeholder="e.g. name@company.com"
                            value={consultData.email}
                            onChange={(e) => setConsultData({ ...consultData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#F28D52] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#F9F7E3]/80 mb-1.5">
                          Project Requirements / Questions (Optional)
                        </label>
                        <textarea
                          rows={3}
                          placeholder={`Describe your requirements or questions regarding ${selectedArticle.title}...`}
                          value={consultData.message}
                          onChange={(e) => setConsultData({ ...consultData, message: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#F28D52] transition-colors resize-none"
                        />
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                        <button
                          type="submit"
                          disabled={consultSubmitting}
                          className="w-full sm:flex-1 py-3.5 rounded-full btn-primary-gradient font-bold text-xs sm:text-sm text-white flex items-center justify-center gap-2 shadow-xl hover:opacity-95 transition-opacity cursor-pointer disabled:opacity-50"
                        >
                          {consultSubmitting ? (
                            <span>Submitting...</span>
                          ) : (
                            <>
                              <span>Submit Consultation Request</span>
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowConsultForm(false)}
                          className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[#F9F7E3]/80 hover:text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                        >
                          Back to Article
                        </button>
                      </div>

                      <div className="flex items-center justify-center gap-2 text-[11px] text-[#F9F7E3]/50 pt-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>100% Confidential • Zero Pushy Sales Guarantee</span>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {/* Category & Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#F28D52]/10 border border-[#F28D52]/30 text-[#F28D52] font-semibold text-xs">
                    {selectedArticle.categoryName}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#F9F7E3]/60 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#F28D52]" />
                    {selectedArticle.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#F9F7E3]/60 ml-auto mr-10 sm:mr-0">
                    <Clock className="w-3.5 h-3.5 text-[#F28D52]" />
                    <span>{selectedArticle.readTime}</span>
                    <span className="text-white/20">•</span>
                    <span>{selectedArticle.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F9F7E3] leading-snug mb-5">
                  {selectedArticle.title}
                </h3>

                {/* Image if available */}
                {selectedArticle.image && (
                  <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-[#222]">
                    <img
                      src={selectedArticle.image}
                      alt={selectedArticle.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                )}

                {/* Full Content Body */}
                <div className="text-sm sm:text-base text-[#F9F7E3]/85 leading-relaxed space-y-4 mb-8">
                  {(selectedArticle.content || selectedArticle.excerpt)
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {/* Modal Actions */}
                <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowConsultForm(true)}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-full btn-primary-gradient text-white font-bold text-xs sm:text-sm shadow-xl hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>Get Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={closeArticle}
                    className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[#F9F7E3]/80 hover:text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}