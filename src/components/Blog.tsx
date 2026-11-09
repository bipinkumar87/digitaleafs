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
    id: "digitaleafs-greetingsly-launch",
    category: "latest-news",
    categoryName: "Latest News",
    title: "Digitaleafs Announces Launch of Greetingsly & Expands Direct Developer Solutions",
    excerpt:
      "We are proud to release Greetingsly — our in-house bulk personalized card generation platform — alongside new transparent fixed-rate engineering suites starting from ₹9,999 with zero monthly agency lock-in.",
    readTime: "3 min read",
    date: "Nov 2026",
    tag: "Company Update",
    image: "/blogimg/latest-news.jpg",
    content:
      "We are thrilled to officially introduce Greetingsly (greetingsly.digitaleafs.com), our proprietary in-house digital platform designed to solve large-scale bulk invitation and personalized greeting card generation.\n\nTraditional design workflows require hours of manual copy-pasting for events, weddings, corporate announcements, and holiday greetings. Greetingsly completely automates this workflow: users can upload an Excel sheet, CSV file, or input names manually, and generate hundreds of tailored, high-resolution greeting cards and invite links in seconds.\n\nAlongside Greetingsly, Digitaleafs is expanding its direct lead developer suites starting from ₹9,999. We believe modern businesses deserve bespoke, lightning-fast digital assets with 100% full code ownership and zero predatory monthly retainer fees.",
    link: "https://wa.me/919934399990?text=Hi%20Digitaleafs!%20I%20saw%20your%20Latest%20News%20about%20Greetingsly%20and%20want%20to%20learn%20more.",
  },
  {
    id: "modern-technology-architecture",
    category: "technology",
    categoryName: "Technology",
    title: "Modern Web Architecture: Why High-Performance Frameworks Outperform Legacy WordPress",
    excerpt:
      "Slow page loads cost modern businesses over 40% of their prospective leads. Discover how Next.js, static edge rendering, and cloud architectures deliver lightning-fast speed and unhackable security.",
    readTime: "4 min read",
    date: "Nov 2026",
    tag: "Tech Architecture",
    image: "/blogimg/technology.jpg",
    content:
      "For over a decade, WordPress was the default choice for small businesses. However, in 2026, the modern web demands sub-second load times, mobile-first responsiveness, and rock-solid cybersecurity.\n\nLegacy CMS platforms rely heavily on dozens of bloated plugins, PHP server overhead, and vulnerable database endpoints. Studies demonstrate that for every 1-second delay in page load time, conversions drop by up to 20%.\n\nAt Digitaleafs, we engineer web applications with Next.js, Tailwind CSS, and global edge CDNs. By compiling pages into static HTML and serving them from edge nodes nearest to the user, our websites achieve 99+ Google Lighthouse scores, instant mobile rendering, and virtually unhackable architecture.",
    link: "https://wa.me/919934399990?text=Hi%20Digitaleafs!%20I%20want%20to%20upgrade%20my%20website%20technology.",
  },
  {
    id: "ai-workflow-automation",
    category: "ai-automation",
    categoryName: "AI & Automation",
    title: "How Smart Businesses Deploy AI & WhatsApp Automation to Capture Inquiries 24/7",
    excerpt:
      "Stop losing late-night client inquiries. Learn how intelligent automated WhatsApp funnels, auto-responses, and automated calendar slotting increase conversion by 3x without hiring extra staff.",
    readTime: "5 min read",
    date: "Nov 2026",
    tag: "AI & Workflow",
    image: "/blogimg/ai-automation.jpg",
    content:
      "Nearly 65% of potential clients browse services after 8:00 PM, when traditional offices and shops are closed. If an inquiry isn't answered within 15 minutes, the prospect usually moves on to a competitor.\n\nBy integrating intelligent WhatsApp Business API funnels and AI-powered workflow automations, your digital portal can greet leads instantly, answer frequently asked questions, collect appointment requirements, and confirm bookings directly on your calendar.\n\nThis delivers a 3x higher conversion rate without needing extra customer support staff, turning your website into a 24/7 revenue engine.",
    link: "https://wa.me/919934399990?text=Hi%20Digitaleafs!%20I%20want%20to%20set%20up%20AI%20and%20WhatsApp%20Automation.",
  },
  {
    id: "custom-software-engineering",
    category: "software-development",
    categoryName: "Software Development",
    title: "Custom Software Engineering: The Strategic Roadmap From Idea to Production-Ready App",
    excerpt:
      "Building a reliable cross-platform app or business management system requires solid foundations: scalable database schemas, high-speed APIs, intuitive UI design, and seamless payment gateway integrations.",
    readTime: "6 min read",
    date: "Nov 2026",
    tag: "Engineering",
    image: "/blogimg/software-development.jpg",
    content:
      "Every business operates with unique operational friction: a polyclinic has distinct doctor schedules, a supermarket manages fast-moving inventory, and an institute handles recurring student fees.\n\nOff-the-shelf software forces you to adjust your business to fit their generic template. In contrast, custom software is engineered around your exact workflow.\n\nOur engineering approach focuses on 4 foundational pillars: responsive mobile-first UI, ACID-compliant database architecture, bank-grade encryption with direct UPI payment processing, and continuous staging previews that keep you in full control throughout development.",
    link: "https://wa.me/919934399990?text=Hi%20Digitaleafs!%20I%20want%20to%20develop%20a%20custom%20software%20or%20mobile%20app.",
  },
  {
    id: "startup-economics-code-ownership",
    category: "business-startup",
    categoryName: "Business & Startup",
    title: "Startup & Small Business Economics: Why 100% Code Ownership Beats Monthly SaaS Traps",
    excerpt:
      "Paying ₹5,000 to ₹15,000 in monthly platform retainers drains precious startup runway. Understand why a one-time investment starting at ₹9,999 gives you full intellectual property ownership and zero recurring fees.",
    readTime: "4 min read",
    date: "Nov 2026",
    tag: "Startup Growth",
    image: "/blogimg/business-startup.jpg",
    content:
      "When you build on proprietary closed platforms, you don't own your software — you rent it. Over 3 years, paying ₹8,000 per month adds up to nearly ₹3,00,000 in software overhead, and if you ever stop paying, your entire online presence disappears.\n\nWith Digitaleafs, your investment begins from a transparent one-time rate of ₹9,999. You receive the complete source code, direct administrative ownership, database exports, and full deployment rights.\n\nYou remain 100% independent with zero recurring agency traps, ensuring long-term profitability and true enterprise valuation for your company.",
    link: "https://wa.me/919934399990?text=Hi%20Digitaleafs!%20I%20want%20to%20discuss%20custom%20software%20for%20my%20startup.",
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
    { id: "technology", label: "Technology" },
    { id: "ai-automation", label: "AI & Automation" },
    { id: "software-development", label: "Software Development" },
    { id: "business-startup", label: "Business & Startup" },
    { id: "latest-news", label: "Latest News" },
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
            <span>Technology, Engineering &amp; Growth Insights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F9F7E3] tracking-tight">
            Digitaleafs <span className="text-gradient-orange">Blog &amp; Insights</span>
          </h2>
          <p className="mt-3 text-base text-[#F9F7E3]/75 max-w-2xl leading-relaxed">
            In-depth analysis, engineering strategies, and actionable business guides across key technology domains.
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
                        // Fallback gracefully if image path is not found
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80";
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
                      Thank you, <strong className="text-white">{consultData.name || "Client"}</strong>. Our senior software lead will review your requirement regarding <strong className="text-[#F28D52]">{selectedArticle.title}</strong> and contact you directly on <strong className="text-[#F28D52]">{consultData.phone}</strong> within 15 minutes.
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
                        Speak directly with senior developers. Get architecture guidance and exact fixed pricing in 15 minutes.
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
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80";
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