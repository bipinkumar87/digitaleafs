"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);

  const quotes = [
    {
      text: "Every monumental digital product begins with a single leaf.",
      sub: "Nurturing ideas from root to reality",
    },
    {
      text: "Roots grounded in deep logic, leaves reaching for innovation.",
      sub: "Crafted for compounding scale",
    },
    {
      text: "Where organic imagination blooms into living software.",
      sub: "Engineered with purpose and craft",
    },
  ];

  // Helper to initialize or get AudioContext
  const getAudioContext = () => {
    if (typeof window === "undefined") return null;
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Play mechanical typewriter click sound
  const playTypewriterClick = () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(600 + Math.random() * 400, ctx.currentTime);
      filter.Q.setValueAtTime(3, ctx.currentTime);

      osc.type = "triangle";
      osc.frequency.setValueAtTime(140 + Math.random() * 80, ctx.currentTime);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.045);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // Audio autoplay policy fallback
    }
  };

  // Speak quote using Web Speech Synthesis API
  const speakQuote = (textToSpeak: string) => {
    if (!soundEnabled || typeof window === "undefined" || !("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    // Pick an expressive English voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) => v.lang.startsWith("en") && (v.name.includes("Google") || v.name.includes("Natural") || v.name.includes("Samantha"))
    );
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  // Typewriter effect loop
  useEffect(() => {
    const currentFullText = quotes[quoteIndex].text;
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing phase
      if (displayedText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
          playTypewriterClick();
        }, 55);
      } else {
        // Finished typing this sentence -> speak it if voice is enabled!
        if (soundEnabled) {
          speakQuote(currentFullText);
        }
        // Pause for 4 seconds before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 4000);
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 25);
      } else {
        // Move to next quote
        setIsDeleting(false);
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, quoteIndex, soundEnabled]);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) {
      getAudioContext();
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        speakQuote(quotes[quoteIndex].text);
      }
    } else {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsSpeaking(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientWidth, clientHeight } = e.currentTarget;
    const x = Math.round((e.clientX / clientWidth) * 100);
    const y = Math.round((e.clientY / clientHeight) * 100);
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#170D09] text-[#F5F5DC] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden select-none"
    >
      {/* 50% LEFT SIDE BACKGROUND VIDEO */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 h-full overflow-hidden pointer-events-none z-0">
        <video
          src="/video/leeaf.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/leeaf.mp4" type="video/mp4" />
          <source src="/leeaf.mp4" type="video/mp4" />
        </video>
        {/* Soft edge blend overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#170D09]/20 to-[#170D09]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#170D09]/40 via-transparent to-[#170D09]/20" />
      </div>

      {/* Dynamic Interactive Mouse Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700 z-[1]"
        style={{
          background: `radial-gradient(circle 520px at ${mousePos.x}% ${mousePos.y}%, rgba(227, 83, 54, 0.12), rgba(244, 164, 96, 0.04) 45%, transparent 80%)`,
        }}
      />

      {/* Ambient background glows */}
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[320px] bg-[#F4A460]/10 blur-[140px] rounded-full pointer-events-none z-[1] animate-pulse-glow" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-[1]" />

      {/* TOP HEADER: ONLY LOGO */}
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center">
          <Image
            src="/img/logo.png"
            alt="Digitaleafs"
            width={615}
            height={200}
            priority
            className="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow-lg"
          />
        </div>
      </header>

      {/* MAIN TWO-SIDED CONTENT: LEFT "WE MEET SOON" | RIGHT MOTIVATIONAL TYPEWRITER & BUTTON */}
      <main className="w-full max-w-7xl mx-auto my-auto py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: "WE MEET SOON" TRANSPARENT */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[1.05] drop-shadow-2xl select-none">
              <span className="text-transparent-stroke block">We Meet</span>
              <span className="text-transparent-stroke-accent block">Soon.</span>
            </h1>
          </div>

          {/* RIGHT SIDE: TYPEWRITER MOTIVATIONAL QUOTE WITH VOICE + GLOSSY 3D BUTTON */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center space-y-6">
            
            {/* Interactive Typewriter Quote with Voice Toggle */}
            <div className="text-center lg:text-right max-w-md w-full">
              {/* Header Badges with Voice & Sound Toggle */}
              <div className="flex items-center justify-center lg:justify-end gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E35336]/15 border border-[#E35336]/30 text-[#F4A460] text-[11px] font-mono tracking-wider backdrop-blur-sm">
                  <span className="text-xs">🍃</span>
                  <span>DIGITALEAFS</span>
                </span>

                {/* Voice & Sound On/Off Button */}
                <button
                  type="button"
                  onClick={toggleSound}
                  title={soundEnabled ? "Mute Voice & Audio" : "Enable Voice Narration & Typing Sound"}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider border transition-all cursor-pointer shadow-sm ${
                    soundEnabled
                      ? "bg-[#E35336] text-[#0E0806] font-bold border-[#F4A460] shadow-[#E35336]/30 animate-pulse"
                      : "bg-[#24140D] text-[#F4A460] border-[#A0522D]/50 hover:border-[#E35336]"
                  }`}
                >
                  <span>{soundEnabled ? (isSpeaking ? "🗣️ Speaking" : "🔊 Sound: ON") : "🔇 Voice: OFF (Tap)"}</span>
                </button>
              </div>

              {/* Typewriter Text Display */}
              <div
                onClick={() => {
                  if (soundEnabled) {
                    speakQuote(quotes[quoteIndex].text);
                  } else {
                    toggleSound();
                  }
                }}
                className="min-h-[72px] sm:min-h-[84px] cursor-pointer group flex items-center justify-center lg:justify-end"
                title="Tap to listen or toggle voice"
              >
                <blockquote className="text-lg sm:text-xl font-bold text-[#F5F5DC] leading-snug group-hover:text-white transition-colors">
                  &ldquo;
                  <span>{displayedText}</span>
                  {/* Blinking Typewriter Cursor */}
                  <span className="inline-block w-1.5 h-5 sm:h-6 bg-[#E35336] ml-1 align-middle animate-pulse shadow-sm shadow-[#E35336]" />
                  &rdquo;
                </blockquote>
              </div>

              {/* Sub-meaning tag */}
              <p className="text-xs text-[#F4A460]/75 font-mono mt-2 flex items-center justify-center lg:justify-end gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E35336] animate-pulse"></span>
                <span>{quotes[quoteIndex].sub}</span>
              </p>
            </div>

            {/* Exact Glossy 3D Jelly Capsule Button */}
            <a
              href="https://bipin.digitaleafs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="glossy-capsule-wrapper group"
            >
              <div className="glossy-capsule-core">
                <span className="text-xl sm:text-2xl font-bold text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] relative z-10 px-4 sm:px-8">
                  View Projects
                </span>
              </div>
            </a>
          </div>

        </div>
      </main>

      {/* BALANCER */}
      <div className="w-full max-w-7xl mx-auto hidden sm:block h-6 relative z-10" />
    </div>
  );
}
