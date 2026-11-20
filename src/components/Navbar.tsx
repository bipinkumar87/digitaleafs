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
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://wa.me/917851018751?text=Hi%20Digitaleafs!%20I%20want%20to%20discuss%20a%20website%20%2F%20app%20project."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#25D366]">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.96.536 1.761.813 2.796.813 3.179 0 5.767-2.587 5.767-5.766.001-3.187-2.575-5.77-6.767-6.001zm0 10.453c-.917 0-1.636-.26-2.392-.713l-.17-.101-1.579.414.421-1.54-.112-.178c-.495-.788-.756-1.564-.755-2.57.001-2.585 2.104-4.688 4.69-4.688 2.584 0 4.687 2.103 4.688 4.688 0 2.586-2.104 4.689-4.791 4.688zm2.569-3.504c-.141-.07-.832-.41-.961-.457-.129-.047-.224-.07-.318.07-.094.141-.365.457-.448.551-.082.094-.165.106-.306.035-.141-.07-.597-.22-1.137-.701-.42-.375-.704-.838-.786-.979-.082-.141-.009-.217.062-.287.063-.063.141-.165.212-.247.071-.082.094-.141.141-.235.047-.094.024-.176-.012-.247-.035-.07-.318-.765-.436-1.047-.115-.274-.233-.237-.318-.241l-.271-.005c-.094 0-.247.035-.376.176-.129.141-.494.482-.494 1.176s.506 1.365.576 1.459c.071.094 1.002 1.53 2.428 2.146.339.147.604.235.811.301.341.108.652.093.898.056.274-.041.844-.345.963-.679.119-.334.119-.62.083-.679-.036-.059-.13-.094-.271-.165z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+917851018751"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-[#F9F7E3] hover:text-[#F28D52] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F28D52]" />
              <span>+91 7851018751</span>
            </a>

            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-consultation"));
              }}
              className="btn-primary-gradient px-4.5 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105 transition-all"
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
            <a
              href="https://wa.me/917851018751?text=Hi%20Digitaleafs!%20I%20want%20to%20discuss%20a%20website%20%2F%20app%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-emerald-300 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#25D366]">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.96.536 1.761.813 2.796.813 3.179 0 5.767-2.587 5.767-5.766.001-3.187-2.575-5.77-6.767-6.001zm0 10.453c-.917 0-1.636-.26-2.392-.713l-.17-.101-1.579.414.421-1.54-.112-.178c-.495-.788-.756-1.564-.755-2.57.001-2.585 2.104-4.688 4.69-4.688 2.584 0 4.687 2.103 4.688 4.688 0 2.586-2.104 4.689-4.791 4.688zm2.569-3.504c-.141-.07-.832-.41-.961-.457-.129-.047-.224-.07-.318.07-.094.141-.365.457-.448.551-.082.094-.165.106-.306.035-.141-.07-.597-.22-1.137-.701-.42-.375-.704-.838-.786-.979-.082-.141-.009-.217.062-.287.063-.063.141-.165.212-.247.071-.082.094-.141.141-.235.047-.094.024-.176-.012-.247-.035-.07-.318-.765-.436-1.047-.115-.274-.233-.237-.318-.241l-.271-.005c-.094 0-.247.035-.376.176-.129.141-.494.482-.494 1.176s.506 1.365.576 1.459c.071.094 1.002 1.53 2.428 2.146.339.147.604.235.811.301.341.108.652.093.898.056.274-.041.844-.345.963-.679.119-.334.119-.62.083-.679-.036-.059-.13-.094-.271-.165z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="tel:+917851018751"
              className="w-full text-center py-2.5 rounded-full bg-white/5 border border-white/10 text-[#F9F7E3] hover:text-[#F28D52] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F28D52]" />
              <span>Call: +91 7851018751</span>
            </a>

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
