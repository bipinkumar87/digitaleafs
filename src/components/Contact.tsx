"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Shield, Clock, Sparkles } from "@/components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Web & Full-Stack",
    budget: "$15k - $35k",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    "< $10k",
    "$10k - $25k",
    "$25k - $50k",
    "$50k+",
  ];

  const serviceOptions = [
    "Web & Full-Stack",
    "AI & Automation",
    "Cloud & DevOps",
    "Mobile Apps",
    "UI/UX Design",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info & Trust */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let&apos;s Build Together</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Turn Your Vision Into <span className="text-gradient">Production Code.</span>
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Whether you need a brand-new platform, an AI overhaul, or high-performance scaling, our senior engineering squad is ready to deploy.
              </p>
            </div>

            {/* Guarantees Box */}
            <div className="space-y-4 rounded-xl bg-slate-900/60 border border-slate-800 p-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Rapid 4-Hour Response</h4>
                  <p className="text-xs text-slate-400">
                    We review technical requirements and reply within 4 business hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Strict Mutual NDA</h4>
                  <p className="text-xs text-slate-400">
                    Your intellectual property, proprietary algorithms, and data stay 100% confidential.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Lead Architect Call</h4>
                  <p className="text-xs text-slate-400">
                    No pushy sales reps — speak directly with senior engineers and architects.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-3 pt-4 border-t border-slate-800 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-emerald-400 border border-slate-800">
                  <Mail className="w-4 h-4" />
                </div>
                <span>contact@digitaleafs.io</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-teal-400 border border-slate-800">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+1 (800) 459-LEAF / +91 (80) 4000-LEAF</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-cyan-400 border border-slate-800">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>San Francisco, CA • Bengaluru, IN • London, UK</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Consultation Request Received!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.name}. Our principal architect is reviewing your inquiry and will reach out to <span className="text-emerald-400">{formData.email}</span> within 4 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        service: "Web & Full-Stack",
                        budget: "$15k - $35k",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Request Architecture Review & Proposal
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="NextScale Inc."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  {/* Primary Service */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Primary Service Interest
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((serv) => (
                        <button
                          type="button"
                          key={serv}
                          onClick={() => setFormData({ ...formData, service: serv })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            formData.service === serv
                              ? "bg-emerald-500 text-slate-950 font-bold"
                              : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                          }`}
                        >
                          {serv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Allocation */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Target Investment Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setFormData({ ...formData, budget: opt })}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold text-center transition-all ${
                            formData.budget === opt
                              ? "bg-emerald-500 text-slate-950 font-bold"
                              : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Goals & Scope Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, current tech stack, timelines, and main objectives..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Transmitting Proposal...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Submit Consultation Request
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
