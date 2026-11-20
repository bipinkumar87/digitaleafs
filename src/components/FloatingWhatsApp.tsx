"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/917851018751?text=Hi%20Digitaleafs!%20I%20want%20to%20discuss%20a%20website%20%2F%20app%20project.";

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 group">
      {/* Expandable Helper Tooltip Pill */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1b1b1b]/95 border border-white/10 text-[#F9F7E3] text-xs font-semibold shadow-2xl backdrop-blur-md opacity-90 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-x-1"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Chat on WhatsApp</span>
      </a>

      {/* Main WhatsApp Floating Round Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (+91 7851018751)"
        className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.6)] transform hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing Outer Ping Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none"></span>

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 sm:w-8 sm:h-8 relative z-10"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.96.536 1.761.813 2.796.813 3.179 0 5.767-2.587 5.767-5.766.001-3.187-2.575-5.77-6.767-6.001zm0 10.453c-.917 0-1.636-.26-2.392-.713l-.17-.101-1.579.414.421-1.54-.112-.178c-.495-.788-.756-1.564-.755-2.57.001-2.585 2.104-4.688 4.69-4.688 2.584 0 4.687 2.103 4.688 4.688 0 2.586-2.104 4.689-4.791 4.688zm2.569-3.504c-.141-.07-.832-.41-.961-.457-.129-.047-.224-.07-.318.07-.094.141-.365.457-.448.551-.082.094-.165.106-.306.035-.141-.07-.597-.22-1.137-.701-.42-.375-.704-.838-.786-.979-.082-.141-.009-.217.062-.287.063-.063.141-.165.212-.247.071-.082.094-.141.141-.235.047-.094.024-.176-.012-.247-.035-.07-.318-.765-.436-1.047-.115-.274-.233-.237-.318-.241l-.271-.005c-.094 0-.247.035-.376.176-.129.141-.494.482-.494 1.176s.506 1.365.576 1.459c.071.094 1.002 1.53 2.428 2.146.339.147.604.235.811.301.341.108.652.093.898.056.274-.041.844-.345.963-.679.119-.334.119-.62.083-.679-.036-.059-.13-.094-.271-.165z" />
        </svg>
      </a>
    </aside>
  );
}
