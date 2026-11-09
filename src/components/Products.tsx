"use client";

import { ArrowUpRight, Sparkles, CheckCircle2, Globe, Zap, Rocket, FileText } from "lucide-react";

/**
 * Interface defining an in-house product.
 * To add a new product in the future, simply add another object to `productsList`!
 */
export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  url: string;
  displayUrl: string;
  status: "Live" | "Beta" | "Coming Soon";
  badge: string;
  description: string;
  cardTypes: { title: string; desc: string; icon: string }[];
  inputMethods: { name: string; tag: string; icon: string }[];
  highlights: string[];
  gradient: string;
  accentColor: string;
  stats?: { label: string; value: string }[];
}

// ============================================================================
// 📝 IN-HOUSE PRODUCTS DIRECTORY (Easily add more products here)
// ============================================================================
const productsList: ProductItem[] = [
  {
    id: "greetingsly",
    name: "Greetingsly",
    tagline: "Automated Bulk Personalized Greeting, Invitation & Offer Card Generator",
    category: "Bulk Personalization & Event Tech",
    url: "https://greetingsly.digitaleafs.com/",
    displayUrl: "greetingsly.digitaleafs.com",
    status: "Live",
    badge: "Flagship In-House SaaS",
    description:
      "Greetingsly empowers individuals, event planners, and businesses to generate hundreds or thousands of unique, personalized cards in seconds. Simply upload an Excel or CSV file with names, and Greetingsly automatically creates individual, customized cards for each recipient with their specific name beautifully rendered.",
    cardTypes: [
      {
        title: "Greeting Cards",
        desc: "Festivals (Diwali, Eid, Christmas), Birthdays, New Year & Celebrations",
        icon: "🎉",
      },
      {
        title: "Invitation Cards",
        desc: "Weddings, Anniversaries, Corporate Events & Private Parties with WhatsApp RSVP",
        icon: "💍",
      },
      {
        title: "Offer & Promo Cards",
        desc: "Personalized Customer Discount Vouchers, Festive Sales & Brand Deals",
        icon: "🏷️",
      },
    ],
    inputMethods: [
      { name: "Excel (.xlsx / .xls)", tag: "Bulk Upload", icon: "📊" },
      { name: "CSV (.csv)", tag: "Instant Import", icon: "📄" },
      { name: "Manual Entry", tag: "Quick Typing", icon: "✍️" },
    ],
    highlights: [
      "Bulk Personalization: 10, 100, or 10,000+ individual cards generated with unique recipient names in 1 click",
      "Multiple Import Channels: Full native support for Excel (.xlsx), CSV, and Quick Manual name inputs",
      "Dynamic Card Categories: Perfect for Greeting Wishes, Wedding/Event Invites & Personalized Business Offers",
      "Instant WhatsApp & Social Sharing with interactive links and high-res downloadable assets",
    ],
    gradient: "from-[#F28D52]/20 via-[#E94C29]/10 to-[#171717]",
    accentColor: "#F28D52",
    stats: [
      { label: "Generation Speed", value: "Bulk 1-Click" },
      { label: "Data Import", value: "Excel / CSV / Manual" },
      { label: "Personalization", value: "100% Unique Names" },
      { label: "Supported Formats", value: "Greetings, Invites, Offers" },
    ],
  },
  // Template for future products:
  /*
  {
    id: "your-next-product",
    name: "NextProduct",
    tagline: "One line summary of your product",
    category: "Category Name",
    url: "https://nextproduct.digitaleafs.com",
    displayUrl: "nextproduct.digitaleafs.com",
    status: "Beta",
    badge: "Upcoming Release",
    description: "Detailed description of the product.",
    cardTypes: [],
    inputMethods: [],
    highlights: ["Feature 1", "Feature 2"],
    gradient: "from-[#E94C29]/20 via-[#1f1f1f] to-[#171717]",
    accentColor: "#E94C29",
  }
  */
];

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 relative bg-[#141414] border-t border-[#F9F7E3]/10 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#F28D52]/15 via-[#E94C29]/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F28D52]/10 border border-[#F28D52]/30 text-[#F28D52] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Digitaleafs In-House Ecosystem &amp; Labs</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F9F7E3] tracking-tight">
              Our In-House <span className="text-gradient-orange">Products</span>
            </h2>
            <p className="mt-3 text-base text-[#F9F7E3]/75 leading-relaxed">
              Alongside building bespoke software for our clients, we build, launch, and operate proprietary digital platforms that solve real-world automation, communication, and business needs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-[#F28D52] bg-[#F28D52]/10 border border-[#F28D52]/30 px-3.5 py-2 rounded-xl">
              ⚡ Live Software Platforms
            </span>
          </div>
        </div>

        {/* Products Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Showcase Card: Greetingsly */}
          {productsList.map((product) => (
            <div
              key={product.id}
              className="lg:col-span-8 group relative rounded-3xl bg-gradient-to-b from-[#1e1e1e] to-[#161616] border border-[#F9F7E3]/15 hover:border-[#F28D52]/70 transition-all duration-300 p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden shadow-2xl"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F28D52] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Top Badge & Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {product.status} Platform
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#262626] border border-white/10 text-[#F9F7E3]/85">
                      {product.badge}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#F28D52] tracking-wider uppercase">
                    {product.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="mb-5">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <h3 className="text-3xl sm:text-4xl font-black text-[#F9F7E3] group-hover:text-white flex items-center gap-3 tracking-tight">
                      <span>{product.name}</span>
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F28D52] hover:text-white transition-colors"
                        title="Visit greetingsly.digitaleafs.com"
                      >
                        <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </h3>

                    {/* Quick URL Pill */}
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-medium text-[#F28D52] hover:underline bg-[#262626] px-3 py-1.5 rounded-lg border border-white/5 flex items-center gap-1.5"
                    >
                      <Globe className="w-3.5 h-3.5 text-[#F28D52]" />
                      <span>{product.displayUrl}</span>
                    </a>
                  </div>

                  <p className="text-sm sm:text-base font-semibold text-[#F28D52] mt-2">
                    {product.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#F9F7E3]/85 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Highlight Box 1: Supported Input Methods (Excel, CSV, Manual) */}
                <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#171717] border border-white/5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#F9F7E3]/60 mb-3 flex items-center gap-2">
                    <span>3 Ways to Input &amp; Generate Names:</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-mono">
                      Bulk Auto-Generation
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {product.inputMethods.map((input, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-[#222222] border border-white/5 hover:border-[#F28D52]/40 transition-colors"
                      >
                        <span className="text-xl shrink-0">{input.icon}</span>
                        <div>
                          <div className="text-xs font-bold text-white">{input.name}</div>
                          <div className="text-[10px] text-[#F9F7E3]/60">{input.tag}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Flow explainer note */}
                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-[#F9F7E3]/70">
                    <span className="text-[#F28D52] font-bold">Example:</span>
                    <span>Upload an Excel with 10 contacts ➔ Greetingsly automatically generates 10 unique, individual cards with each person&apos;s name!</span>
                  </div>
                </div>

                {/* Highlight Box 2: 3 Core Card Use-Cases */}
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#F9F7E3]/60 mb-3">
                    Supported Card Formats &amp; Categories
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {product.cardTypes.map((card, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#1a1a1a] border border-[#F9F7E3]/10 flex flex-col justify-between"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-lg">{card.icon}</span>
                          <span className="text-xs font-bold text-[#F9F7E3]">{card.title}</span>
                        </div>
                        <p className="text-[11px] text-[#F9F7E3]/65 leading-tight">
                          {card.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Capabilities */}
                <div className="space-y-2 mb-6">
                  {product.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F9F7E3]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#F28D52] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions & Stats Bar */}
              <div className="pt-6 border-t border-[#F9F7E3]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                {product.stats && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full sm:w-auto">
                    {product.stats.map((s, idx) => (
                      <div key={idx}>
                        <div className="text-[11px] text-[#F9F7E3]/50 font-medium">{s.label}</div>
                        <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{s.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="w-full sm:w-auto shrink-0">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-gradient px-6 py-3 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg hover:shadow-orange-500/25 transition-all cursor-pointer"
                  >
                    <span>Create Cards on Greetingsly</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Right Column: In-House Labs / How To Add More Products */}
          <div className="lg:col-span-4 rounded-3xl bg-[#1a1a1a] border border-[#F9F7E3]/15 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            
            {/* Top Lab info */}
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#262626] border border-[#F28D52]/30 flex items-center justify-center text-[#F28D52] mb-6">
                <Rocket className="w-6 h-6" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F28D52]/10 text-[#F28D52] border border-[#F28D52]/20 mb-3">
                Digitaleafs Product Studio
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Expanding Our Product Suite
              </h3>

              <p className="text-xs sm:text-sm text-[#F9F7E3]/75 leading-relaxed mb-6">
                Greetingsly is part of the Digitaleafs ecosystem. We are continuously building and rolling out new micro-SaaS utilities, business automation tools, and localized software solutions.
              </p>

              {/* Quick Feature Badges */}
              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-[#222] border border-white/5 flex items-start gap-3">
                  <Zap className="w-4 h-4 text-[#F28D52] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Have a Product Idea?</div>
                    <div className="text-[11px] text-[#F9F7E3]/60 mt-0.5">
                      Partner with us to co-build, launch, and monetize software products.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#222] border border-white/5 flex items-start gap-3">
                  <FileText className="w-4 h-4 text-[#E94C29] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Custom In-House Tools</div>
                    <div className="text-[11px] text-[#F9F7E3]/60 mt-0.5">
                      Need a private bulk card or invitation generator customized for your company?
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Contact / Inquire Button */}
            <div className="pt-6 border-t border-white/5 space-y-2.5">
              <a
                href="https://wa.me/919934399990?text=Hi%20Digitaleafs!%20I%20saw%20Greetingsly%20and%20want%20to%20discuss%20a%20product%20/%20custom%20software."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-full bg-[#262626] hover:bg-[#323232] border border-white/10 hover:border-[#F28D52]/40 text-[#F9F7E3] font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>💬 Discuss a Product Idea on WhatsApp</span>
              </a>

              <p className="text-[10px] text-center text-[#F9F7E3]/40">
                You can easily add new products to this showcase anytime!
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
