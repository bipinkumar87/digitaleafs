"use client";

import React, { useState } from "react";
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Zap,
  Globe,
  Building2,
  ShoppingBag,
  Code2,
  Smartphone,
  Wrench,
  Bot,
  Clock,
  Layers,
  CheckCircle2
} from "lucide-react";

interface PricingItem {
  icon: React.ReactNode;
  iconBg: string;
  iconBorder: string;
  name: string;
  price: string;
  period?: string;
  badge?: string;
  popular?: boolean;
  description: string;
  features: string[];
}

interface MaintenancePlan {
  icon: React.ReactNode;
  iconBg: string;
  iconBorder: string;
  name: string;
  badge?: string;
  popular?: boolean;
  monthlyPrice: string;
  annualPrice: string;
  saveBadge: string;
  targetAudience: string;
  description: string;
  features: string[];
  sla: string;
}

const PRICING_DATA: PricingItem[] = [
  {
    icon: <Globe className="w-5 h-5 text-[#F28D52]" />,
    iconBg: "bg-[#F28D52]/10",
    iconBorder: "border-[#F28D52]/30",
    name: "Landing Page",
    price: "₹7,999",
    description: "High-converting single-page website built for ad campaigns, local lead generation, and fast conversions.",
    features: [
      "Sub-second load speed (Next.js)",
      "Instant WhatsApp & Call inquiry capture",
      "Mobile-first responsive design",
      "Google Analytics & pixel tracking ready",
    ],
  },
  {
    icon: <Building2 className="w-5 h-5 text-amber-400" />,
    iconBg: "bg-amber-500/10",
    iconBorder: "border-amber-500/30",
    name: "Business Website",
    price: "₹14,999",
    badge: "Most Popular",
    popular: true,
    description: "Complete professional multi-page website tailored for clinics, coaching centers, retail shops, and local enterprises.",
    features: [
      "5 to 7 high-speed custom pages",
      "Google Maps local SEO setup",
      "Customer reviews & portfolio showcase",
      "Contact forms routed to WhatsApp/Email",
    ],
  },
  {
    icon: <Sparkles className="w-5 h-5 text-violet-400" />,
    iconBg: "bg-violet-500/10",
    iconBorder: "border-violet-500/30",
    name: "Professional Website",
    price: "₹24,999",
    badge: "Advanced",
    description: "Custom UI/UX with smooth interactive animations, dynamic blog/CMS, appointment scheduling, and rich branding.",
    features: [
      "Bespoke luxury design system",
      "Interactive appointment booking system",
      "Dynamic content management (CMS)",
      "Technical SEO & schema markup included",
    ],
  },
  {
    icon: <ShoppingBag className="w-5 h-5 text-emerald-400" />,
    iconBg: "bg-emerald-500/10",
    iconBorder: "border-emerald-500/30",
    name: "E-commerce Website",
    price: "₹39,999",
    description: "Full-scale online store with zero commissions, integrated payments, inventory management, and automated shipping.",
    features: [
      "Direct UPI, Cards, NetBanking gateway",
      "Product catalog with variants & search",
      "Automated WhatsApp order notifications",
      "Discount coupons & customer checkout",
    ],
  },
  {
    icon: <Code2 className="w-5 h-5 text-cyan-400" />,
    iconBg: "bg-cyan-500/10",
    iconBorder: "border-cyan-500/30",
    name: "Custom Software Development",
    price: "₹75,000",
    badge: "Enterprise",
    description: "Tailored management software, billing POS, clinic patient records, or internal operations ERP engineered for your exact workflow.",
    features: [
      "Custom business workflow automation",
      "Thermal receipt billing & barcode scan",
      "Multi-user roles with permissions",
      "Cloud database with automated backups",
    ],
  },
  {
    icon: <Smartphone className="w-5 h-5 text-rose-400" />,
    iconBg: "bg-rose-500/10",
    iconBorder: "border-rose-500/30",
    name: "Mobile App Development",
    price: "₹1,25,000",
    badge: "Android + iOS",
    description: "Native-quality mobile applications published on Google Play Store and Apple App Store with high-speed cloud sync.",
    features: [
      "Cross-platform (Flutter / React Native)",
      "Instant push notifications & alerts",
      "User authentication & biometric login",
      "Google Play & App Store publishing support",
    ],
  },
  {
    icon: <Bot className="w-5 h-5 text-fuchsia-400" />,
    iconBg: "bg-fuchsia-500/10",
    iconBorder: "border-fuchsia-500/30",
    name: "AI Automation & Chatbots",
    price: "₹15,000",
    badge: "AI Powered",
    description: "Automate repetitive customer queries, WhatsApp lead qualification, and CRM updates using custom intelligent AI bots.",
    features: [
      "24/7 intelligent WhatsApp AI auto-responder",
      "Automated lead capture into Google Sheets",
      "Customer appointment auto-scheduling",
      "Zero monthly OpenAI platform lock-ins",
    ],
  },
];

const MAINTENANCE_PLANS: MaintenancePlan[] = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    iconBg: "bg-emerald-500/10",
    iconBorder: "border-emerald-500/30",
    name: "Starter AMC Care",
    badge: "Essential",
    monthlyPrice: "₹1,499",
    annualPrice: "₹14,999/year",
    saveBadge: "Save ₹3,000 /yr",
    targetAudience: "Small Shops, Single Doctors & Local Landing Pages",
    description: "Essential security, automated cloud backups, and regular server health monitoring for complete peace of mind.",
    features: [
      "99.9% Cloud Server Uptime & SSL Monitoring",
      "Weekly Cloud Database & Files Backup",
      "Next.js & Security Library Patch Updates",
      "Up to 2 Content Updates/Month (Text, Photos, Timings)",
      "WhatsApp & Email Priority Ticket Support",
      "Bug Fixes for All Delivered Code",
    ],
    sla: "24-Hour Resolution Target",
  },
  {
    icon: <Wrench className="w-5 h-5 text-[#F28D52]" />,
    iconBg: "bg-[#F28D52]/10",
    iconBorder: "border-[#F28D52]/30",
    name: "Growth Business AMC",
    badge: "Most Popular",
    popular: true,
    monthlyPrice: "₹2,999",
    annualPrice: "₹29,999/year",
    saveBadge: "Save ₹6,000 /yr",
    targetAudience: "Active Retailers, Polyclinics, Schools & Academies",
    description: "Proactive speed optimization, monthly SEO health audit, regular festival banners, and same-day engineer support.",
    features: [
      "Everything in Starter AMC Care",
      "Up to 5 Content & Festive Banner Updates/Month",
      "Monthly Google Search Console & SEO Audit",
      "Core Web Vitals & Page Speed Optimization",
      "Lead Form & WhatsApp Click Link Health Check",
      "Payment Gateway & Webhook Reconciliation",
    ],
    sla: "Same-Day (Under 4 Hours) Priority Response",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-violet-400" />,
    iconBg: "bg-violet-500/10",
    iconBorder: "border-violet-500/30",
    name: "Enterprise Dedicated AMC",
    badge: "Full Retainer",
    monthlyPrice: "₹5,999",
    annualPrice: "₹59,999/year",
    saveBadge: "Save ₹12,000 /yr",
    targetAudience: "E-Commerce Stores, Custom Software & Busy Portals",
    description: "Dedicated full-stack engineer on-call with monthly development hours for new features and emergency outage triage.",
    features: [
      "Everything in Growth Business AMC",
      "Daily Automated Cloud Database Backups",
      "E-Commerce Product Catalog Uploads & Price Edits",
      "Dedicated Senior Full-Stack Engineer On-Call",
      "4 Hours of New Feature / Page Sprints Every Month",
      "Zero Downtime Disaster Recovery Protocol",
    ],
    sla: "Critical Emergency Outage SLA: Under 1 Hour",
  },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"development" | "maintenance">("development");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const handleOpenConsultation = (serviceName: string) => {
    window.dispatchEvent(
      new CustomEvent("open-consultation", {
        detail: { topic: `${serviceName} Inquiry` },
      })
    );
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 relative bg-[#141414] text-[#F9F7E3] border-t border-white/10 overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#F28D52]/10 via-[#E94C29]/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F28D52]/10 border border-[#F28D52]/30 text-[#F28D52] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT DEVELOPMENT &amp; MAINTENANCE PLANS • ZERO HIDDEN FEES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F9F7E3] tracking-tight leading-tight">
            Development &amp; <span className="text-gradient-orange">Maintenance Pricing</span>
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-[#F9F7E3]/75 leading-relaxed">
            Crystal-clear milestone pricing for new builds, plus proactive monthly &amp; annual maintenance care with full feature support. <strong className="text-white">100% full source code ownership</strong> with zero compulsory retainers.
          </p>

          {/* Dual Category Tab Switcher */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center p-1.5 rounded-full bg-[#1b1b1b] border border-white/10 shadow-lg">
              <button
                type="button"
                onClick={() => setActiveTab("development")}
                className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "development"
                    ? "bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white shadow-md shadow-[#E94C29]/25"
                    : "text-[#F9F7E3]/70 hover:text-white"
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Web &amp; App Development</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("maintenance")}
                className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "maintenance"
                    ? "bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white shadow-md shadow-[#E94C29]/25"
                    : "text-[#F9F7E3]/70 hover:text-white"
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span>Website Maintenance &amp; AMC</span>
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
           TAB 1: PROJECT DEVELOPMENT (7 PLANS)
           ========================================================================= */}
        {activeTab === "development" && (
          <div className="space-y-12">
            {/* Quick Summary Table for Fast Comparison */}
            <div className="overflow-hidden rounded-2xl bg-[#1b1b1b]/90 border border-white/10 shadow-2xl backdrop-blur-md">
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#F28D52] animate-pulse"></span>
                  <span>Development Rate Card Overview</span>
                </div>
                <div className="text-[11px] sm:text-xs text-[#F9F7E3]/60 font-mono">
                  Fixed Milestones • 100% Code Ownership
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] text-left text-xs sm:text-sm">
                  <thead className="bg-white/[0.03] text-[#F9F7E3]/60 uppercase tracking-wider font-mono text-[11px] border-b border-white/10">
                    <tr>
                      <th className="py-3 px-4 sm:px-6 font-semibold">Service</th>
                      <th className="py-3 px-4 sm:px-6 font-semibold">Starting Price</th>
                      <th className="py-3 px-4 sm:px-6 font-semibold hidden md:table-cell">Key Deliverable</th>
                      <th className="py-3 px-4 sm:px-6 text-right font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {PRICING_DATA.map((item) => (
                      <tr key={item.name} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-white">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-xl ${item.iconBg} border ${item.iconBorder} flex items-center justify-center shrink-0`}>
                              {item.icon}
                            </div>
                            <span className="whitespace-nowrap">{item.name}</span>
                            {item.badge && (
                              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider whitespace-nowrap ${
                                item.popular 
                                  ? "bg-[#F28D52]/20 text-[#F28D52] border border-[#F28D52]/40" 
                                  : "bg-white/10 text-[#F9F7E3]/70"
                              }`}>
                                {item.badge}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 sm:px-6">
                          <span className="text-sm sm:text-base font-bold text-[#F28D52] font-mono whitespace-nowrap">
                            {item.price}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 text-[#F9F7E3]/75 hidden md:table-cell text-xs leading-relaxed">
                          {item.description}
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 text-right">
                          <button
                            type="button"
                            onClick={() => handleOpenConsultation(item.name)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#F28D52] hover:text-[#171717] border border-white/10 text-xs font-semibold text-[#F9F7E3] transition-all cursor-pointer whitespace-nowrap"
                          >
                            <span>Choose</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Development Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {PRICING_DATA.map((item) => (
                <div
                  key={item.name}
                  className={`relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-sm ${
                    item.popular
                      ? "bg-gradient-to-b from-[#221c18] to-[#181818] border-2 border-[#F28D52] shadow-[0_8px_30px_rgba(242,141,82,0.15)] sm:-translate-y-1"
                      : "bg-[#181818] border border-white/10 hover:border-[#F28D52]/40 sm:hover:-translate-y-1 shadow-lg"
                  }`}
                >
                  {item.badge && (
                    <div className="absolute -top-3 right-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md ${
                        item.popular
                          ? "bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white"
                          : "bg-[#252525] border border-white/15 text-[#F9F7E3]"
                      }`}>
                        {item.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className={`w-12 h-12 rounded-2xl ${item.iconBg} border ${item.iconBorder} flex items-center justify-center shrink-0 shadow-sm`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white leading-snug">
                          {item.name}
                        </h3>
                        <div className="text-[11px] text-[#F9F7E3]/60 font-mono">
                          Starting Investment
                        </div>
                      </div>
                    </div>

                    <div className="my-4 pb-4 border-b border-white/10">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-white tracking-tight font-mono">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-[#F9F7E3]/70 leading-relaxed min-h-[48px]">
                        {item.description}
                      </p>
                    </div>

                    <ul className="space-y-2.5 mb-6 text-xs text-[#F9F7E3]/85">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#F28D52] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-2">
                    <button
                      type="button"
                      onClick={() => handleOpenConsultation(item.name)}
                      className={`w-full py-3 rounded-full font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                        item.popular
                          ? "btn-primary-gradient text-white hover:scale-102"
                          : "bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-[#F28D52]"
                      }`}
                    >
                      <span>Select Plan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/917851018751?text=Hi%20Digitaleafs!%20I%20am%20interested%20in%20${encodeURIComponent(item.name)}%20(${encodeURIComponent(item.price)}).%20Please%20share%20proposal.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/25 text-[#25D366] font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Discuss on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
           TAB 2: WEBSITE MAINTENANCE & AMC (3 TIERS WITH COMPREHENSIVE FEATURES)
           ========================================================================= */}
        {activeTab === "maintenance" && (
          <div className="space-y-10">
            {/* Billing Cycle Switcher */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm">
              <span className="text-[#F9F7E3]/70 font-medium">Select Billing Cycle:</span>
              <div className="inline-flex items-center p-1 rounded-full bg-[#1f1f1f] border border-white/10">
                <button
                  type="button"
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-4 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                    billingCycle === "monthly"
                      ? "bg-white/15 text-white shadow-sm"
                      : "text-[#F9F7E3]/60 hover:text-white"
                  }`}
                >
                  Monthly Billing
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle("annual")}
                  className={`px-4 py-1.5 rounded-full font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    billingCycle === "annual"
                      ? "bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white shadow-sm"
                      : "text-[#F9F7E3]/60 hover:text-white"
                  }`}
                >
                  <span>Annual Plan</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                    Save up to 20%
                  </span>
                </button>
              </div>
            </div>

            {/* Maintenance AMC Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {MAINTENANCE_PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 backdrop-blur-sm ${
                    plan.popular
                      ? "bg-gradient-to-b from-[#241e1a] to-[#181818] border-2 border-[#F28D52] shadow-[0_12px_40px_rgba(242,141,82,0.2)] md:-translate-y-2"
                      : "bg-[#181818] border border-white/10 hover:border-[#F28D52]/40 shadow-xl"
                  }`}
                >
                  {/* Top Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 right-6">
                      <span className={`inline-block px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md ${
                        plan.popular
                          ? "bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white"
                          : "bg-[#252525] border border-white/20 text-[#F9F7E3]"
                      }`}>
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className={`w-12 h-12 rounded-2xl ${plan.iconBg} border ${plan.iconBorder} flex items-center justify-center shrink-0`}>
                        {plan.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                        <div className="text-[11px] text-[#F28D52] font-medium">
                          {plan.targetAudience}
                        </div>
                      </div>
                    </div>

                    {/* Pricing Display */}
                    <div className="my-5 pb-5 border-b border-white/10">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-black text-white font-mono tracking-tight">
                          {billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice.split("/")[0]}
                        </span>
                        <span className="text-xs text-[#F9F7E3]/60 font-mono">
                          {billingCycle === "monthly" ? "/month" : "/year"}
                        </span>
                      </div>

                      {billingCycle === "annual" && (
                        <div className="mt-1.5 inline-block text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                          {plan.saveBadge}
                        </div>
                      )}

                      <p className="mt-3 text-xs text-[#F9F7E3]/75 leading-relaxed">
                        {plan.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#F9F7E3]/50 font-mono">
                        Maintenance Features Included:
                      </div>
                      <ul className="space-y-2.5 text-xs text-[#F9F7E3]/90">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#F28D52] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* SLA Badge */}
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] text-[#F9F7E3]/80 flex items-center gap-2 mb-6">
                      <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span><strong>SLA:</strong> {plan.sla}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-2">
                    <button
                      type="button"
                      onClick={() => handleOpenConsultation(`${plan.name} (${billingCycle})`)}
                      className={`w-full py-3 rounded-full font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                        plan.popular
                          ? "btn-primary-gradient text-white hover:scale-102"
                          : "bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-[#F28D52]"
                      }`}
                    >
                      <span>Subscribe to {plan.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/917851018751?text=Hi%20Digitaleafs!%20I%20want%20to%20subscribe%20to%20${encodeURIComponent(plan.name)}%20(${encodeURIComponent(billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice)}).%20Please%20share%20details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/25 text-[#25D366] font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Non-Compulsory Trust Notice */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#1a1a1a] border border-emerald-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Is Maintenance Mandatory? Absolutely NOT.</h4>
                  <p className="text-xs text-[#F9F7E3]/70 mt-0.5">
                    Every project at Digitaleafs includes a <strong>Free 30-Day Technical Warranty</strong> with <strong>100% full source code ownership</strong>. Maintenance is 100% optional — hire our engineering care only when you want zero technical headache!
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleOpenConsultation("Custom AMC Proposal")}
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold text-white whitespace-nowrap cursor-pointer transition-colors"
              >
                Need Custom AMC?
              </button>
            </div>
          </div>
        )}

        {/* Bottom Trust Guarantee Strip */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs text-[#F9F7E3]/75">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F28D52] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white">100% Code Ownership</div>
              <div className="text-[11px] text-[#F9F7E3]/55">Zero vendor or platform lock-in.</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F28D52] shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white">Zero Hidden Charges</div>
              <div className="text-[11px] text-[#F9F7E3]/55">Clear milestone quote before Day 1.</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white">30-Day Tech Warranty</div>
              <div className="text-[11px] text-[#F9F7E3]/55">Free bug fixes &amp; post-launch support.</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F28D52] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white">Direct Senior Engineers</div>
              <div className="text-[11px] text-[#F9F7E3]/55">Zero junior sales reps or middlemen.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}