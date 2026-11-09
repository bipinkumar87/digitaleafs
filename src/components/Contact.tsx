"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2, Shield, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    businessType: "Clinic / Healthcare",
    service: "Custom Website",
    budget: "₹15,000 - ₹35,000",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const businessTypes = [
    "Clinic / Healthcare",
    "Retail Store / Supermarket",
    "Coaching / School",
    "Local Shop / Restaurant",
    "Custom Mobile App",
  ];

  const budgetOptions = [
    "₹5,000 - ₹15,000",
    "₹15,000 - ₹35,000",
    "₹35,000 - ₹75,000",
    "₹75,000+",
  ];

  const serviceOptions = [
    "Custom Website",
    "Android Mobile App",
    "POS Billing Software",
    "WhatsApp Automation",
    "Full Software Suite",
  ];

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxwWNR6H2M3PAgzNrvvPkPptILswULqXQkLjwYPFD62wqKe8RCc1hZwEA_Xf_GFalms/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          formType: "consultation",
          name: formData.name,
          phone: formData.phone,
          email: "N/A",
          businessType: `${formData.businessName ? formData.businessName + " (" + formData.businessType + ")" : formData.businessType}`,
          budget: formData.budget,
          message: `Service: ${formData.service}. ${formData.message || ""}`,
        }),
      });
    } catch (err) {
      console.error("Contact form submission error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#F9F7E3] text-[#171717] border-t border-[#171717]/10 overflow-hidden">
      {/* Architectural grid on cream */}
      <div className="absolute inset-0 bg-cream-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Connect & Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
                Turn Your Business Idea Into <span className="text-gradient-fire">Working Software.</span>
              </h2>
              <p className="mt-4 text-base text-[#444444] leading-relaxed">
                Whether you run a clinic, retail store, coaching academy, or have a brand new mobile app idea — speak directly with our senior developers today.
              </p>
            </div>

            {/* Quick Guarantees Box */}
            <div className="space-y-4 rounded-2xl bg-white border border-[#171717]/10 p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#E94C29] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#171717]">15-Minute Direct Response</h4>
                  <p className="text-xs text-[#666666]">
                    We review your requirement and call you back directly within 15 minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#A94322] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#171717]">Zero Hidden Costs Guarantee</h4>
                  <p className="text-xs text-[#666666]">
                    The price we quote includes domain, hosting, design, coding, and post-launch support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E94C29] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#171717]">Direct Developer Consultation</h4>
                  <p className="text-xs text-[#666666]">
                    No middlemen or junior sales reps — talk directly to the engineers building your product.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-4 pt-2 border-t border-[#171717]/10 text-sm text-[#444444]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#A94322] border border-[#171717]/10 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#666666]">Official Email Support</div>
                  <a href="mailto:contact@digitaleafs.com" className="font-bold text-[#171717] hover:text-[#E94C29] transition-colors">
                    contact@digitaleafs.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="luxury-card-cream rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#171717]/10 shadow-xl bg-white relative">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-500/40 text-2xl">
                    ✅
                  </div>
                  <h3 className="text-2xl font-bold text-[#171717]">Project Request Received!</h3>
                  <p className="text-sm text-[#444444] max-w-md mx-auto">
                    Thank you, <span className="text-[#171717] font-bold">{formData.name}</span>! Our lead engineer is reviewing your inquiry for <span className="text-[#E94C29] font-semibold">{formData.businessName || "your business"}</span> and will reply within 15 minutes.
                  </p>
                  
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          businessName: "",
                          businessType: "Clinic / Healthcare",
                          service: "Custom Website",
                          budget: "₹15,000 - ₹35,000",
                          message: "",
                        });
                      }}
                      className="px-6 py-3 rounded-full btn-primary-gradient text-white font-bold text-xs sm:text-sm hover:scale-105 transition-all shadow-md cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#171717]">
                      Get a Free Project Proposal &amp; Quote
                    </h3>
                    <p className="text-xs text-[#666666] mt-1">
                      Fill out this quick form or message us directly on WhatsApp.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Rajesh Sharma / Amit Patel"
                        className="w-full px-4 py-3 rounded-xl bg-[#F9F7E3]/80 border border-[#171717]/15 text-[#171717] placeholder-[#666666]/70 text-sm focus:outline-none focus:border-[#E94C29] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#F9F7E3]/80 border border-[#171717]/15 text-[#171717] placeholder-[#666666]/70 text-sm focus:outline-none focus:border-[#E94C29] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Business, Clinic, Shop, or Academy Name
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Sharma Dental Clinic / City Supermart"
                      className="w-full px-4 py-3 rounded-xl bg-[#F9F7E3]/80 border border-[#171717]/15 text-[#171717] placeholder-[#666666]/70 text-sm focus:outline-none focus:border-[#E94C29] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Business Type Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-2">
                      Business Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {businessTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, businessType: type })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                            formData.businessType === type
                              ? "bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white font-bold shadow-md"
                              : "bg-[#F9F7E3] border border-[#171717]/10 text-[#444444] hover:text-[#171717] hover:bg-[#171717]/10"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Primary Service Interested In */}
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-2">
                      What are you looking to build?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((serv) => (
                        <button
                          type="button"
                          key={serv}
                          onClick={() => setFormData({ ...formData, service: serv })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                            formData.service === serv
                              ? "bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white font-bold shadow-md"
                              : "bg-[#F9F7E3] border border-[#171717]/10 text-[#444444] hover:text-[#171717] hover:bg-[#171717]/10"
                          }`}
                        >
                          {serv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Allocation */}
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-2">
                      Target Investment Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setFormData({ ...formData, budget: opt })}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer ${
                            formData.budget === opt
                              ? "bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white font-bold shadow-md"
                              : "bg-[#F9F7E3] border border-[#171717]/10 text-[#444444] hover:text-[#171717] hover:bg-[#171717]/10"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Details textarea */}
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Tell us about your project requirements *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. I need a website for my dental clinic where patients can book appointments and receive WhatsApp confirmations..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F9F7E3]/80 border border-[#171717]/15 text-[#171717] placeholder-[#666666]/70 text-sm focus:outline-none focus:border-[#E94C29] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full btn-primary-gradient font-bold text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Submitting Proposal...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Get Free Proposal &amp; Instant Quote
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
