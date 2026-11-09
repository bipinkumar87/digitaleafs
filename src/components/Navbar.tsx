"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "#solutions" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "luxury-nav py-3 shadow-xl shadow-black/60"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with high-res brand image */}
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/img/logo.png"
              alt="Digitaleafs Logo"
              width={160}
              height={44}
              priority
              style={{ width: "auto" }}
              className="h-9 sm:h-11 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#F9F7E3]/85">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#F28D52] transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F28D52] to-[#E94C29] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-consultation"));
              }}
              className="btn-primary-gradient px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105 transition-all"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-consultation"));
              }}
              className="sm:hidden px-3 py-1.5 rounded-full bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white font-bold text-xs"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#262626] border border-[#F9F7E3]/15 text-[#F9F7E3] hover:text-[#F28D52] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden luxury-nav border-b border-[#F28D52]/20 px-6 pt-4 pb-6 mt-3 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#F9F7E3] hover:text-[#F28D52] py-2 transition-colors border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent("open-consultation"));
              }}
              className="w-full text-center py-3 rounded-full btn-primary-gradient text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
