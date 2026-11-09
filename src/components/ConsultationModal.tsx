"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, Send, CheckCircle2, Phone, User, Building, MessageSquare, ShieldCheck, Mail } from "lucide-react";

interface ConsultationModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultTopic?: string;
}

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxwWNR6H2M3PAgzNrvvPkPptILswULqXQkLjwYPFD62wqKe8RCc1hZwEA_Xf_GFalms/exec";

export default function ConsultationModal({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  defaultTopic = "",
}: ConsultationModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: defaultTopic || "Custom Website / App",
    budget: "₹9,999 - ₹25,000",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isModalOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
    // Reset state slightly after close
    setTimeout(() => {
      setIsSubmitted(false);
    }, 300);
  };

  useEffect(() => {
    const handleGlobalOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ topic?: string }>;
      if (customEvent.detail?.topic) {
        setFormData((prev) => ({ ...prev, businessType: customEvent.detail.topic || prev.businessType }));
      }
      setInternalIsOpen(true);
    };

    window.addEventListener("open-consultation", handleGlobalOpen as EventListener);
    return () => {
      window.removeEventListener("open-consultation", handleGlobalOpen as EventListener);
    };
  }, []);

  useEffect(() => {
    if (defaultTopic) {
      setFormData((prev) => ({ ...prev, businessType: defaultTopic }));
    }
  }, [defaultTopic]);

  if (!isModalOpen) return null;

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
          email: formData.email || "N/A",
          businessType: formData.businessType,
          budget: formData.budget,
          message: formData.message,
        }),
      });
    } catch (err) {
      console.error("Consultation form submission error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#1a1a1a] border border-[#F28D52]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto scrollbar-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F28D52] via-[#E94C29] to-[#A94322]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-[#E94C29] text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#F9F7E3]">Consultation Request Received!</h3>
            <p className="text-sm text-[#F9F7E3]/75 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name || "Client"}</strong>. Our senior software lead will review your requirement and connect directly on <strong className="text-[#F28D52]">{formData.phone}</strong> within 15 minutes.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white font-bold text-sm shadow-lg hover:opacity-90 transition-opacity cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F28D52]/10 border border-[#F28D52]/30 text-[#F28D52] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Free 1-on-1 Consultation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F9F7E3] tracking-tight">
                Get Free <span className="text-gradient-orange">Consultation</span>
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#F9F7E3]/70 leading-relaxed">
                Speak directly with lead developers. We provide transparent fixed pricing starting from ₹9,999 with 100% code ownership.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-[#F9F7E3]/80 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#F28D52]" />
                  <span>Your Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Rajesh Sharma / Rohit Verma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#F28D52] transition-colors"
                />
              </div>

              {/* Phone & Email (Optional) */}
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
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#F28D52] transition-colors"
                  />
                </div>
              </div>

              {/* Business / Service Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#F9F7E3]/80 mb-1.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#F28D52]" />
                    <span>Business Type</span>
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-[#121212] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F28D52] transition-colors"
                  >
                    <option value="Clinic / Healthcare">Clinic / Healthcare</option>
                    <option value="Retail / Supermarket">Retail / Supermarket</option>
                    <option value="Coaching / Education">Coaching / Education</option>
                    <option value="Local Business">Local Business</option>
                    <option value="Custom Mobile App">Custom Mobile App</option>
                    <option value="Custom Website / App">Custom Website / App</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F9F7E3]/80 mb-1.5">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-[#121212] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F28D52] transition-colors"
                  >
                    <option value="₹9,999 - ₹25,000">₹9,999 - ₹25,000</option>
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                    <option value="₹1,00,000+">₹1,00,000+</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[#F9F7E3]/80 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#F28D52]" />
                  <span>Project Requirements (Optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe any features, deadlines, or design ideas..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#F28D52] transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full btn-primary-gradient font-bold text-xs sm:text-sm text-white flex items-center justify-center gap-2 shadow-xl hover:opacity-95 transition-opacity cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Get Free Consultation</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Trust Footer */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-[#F9F7E3]/50 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Confidential • Zero Spam Guarantee</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

