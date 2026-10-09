"use client";

import { useState } from "react";
import { 
  Code, 
  Smartphone, 
  Bot, 
  Cloud, 
  Palette, 
  Database, 
  ArrowUpRight, 
  CheckCircle, 
  Layers
} from "@/components/Icons";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "web", label: "Web & Full-Stack" },
    { id: "ai", label: "AI & Automation" },
    { id: "cloud", label: "Cloud & DevOps" },
  ];

  const services = [
    {
      category: "web",
      icon: <Code className="w-6 h-6 text-emerald-400" />,
      title: "Custom Web & Full-Stack Apps",
      description:
        "High-performance, scalable web platforms built with Next.js, React 19, TypeScript, and modern headless architectures engineered for speed.",
      features: [
        "Server-Side & Edge Rendering",
        "Sub-second page transitions",
        "Enterprise-grade Security",
        "Clean, maintainable codebases",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
    },
    {
      category: "ai",
      icon: <Bot className="w-6 h-6 text-teal-400" />,
      title: "Generative AI & Automation",
      description:
        "Deploy custom AI agents, LLM pipelines, RAG systems, and smart workflow automation that reduce operational overhead and elevate user experience.",
      features: [
        "Custom LLM & RAG Integration",
        "Intelligent customer support agents",
        "Automated data extraction & analysis",
        "Autonomous workflow pipelines",
      ],
      technologies: ["OpenAI", "LangChain", "Vector DBs", "Python", "Claude API"],
    },
    {
      category: "cloud",
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: "Enterprise Cloud & DevOps",
      description:
        "Bulletproof infrastructure design on AWS and Google Cloud with automated CI/CD pipelines, containerization, and 99.99% uptime guarantees.",
      features: [
        "Kubernetes & Docker orchestration",
        "Zero-downtime deployment pipelines",
        "Multi-region redundancy & backups",
        "Auto-scaling infrastructure",
      ],
      technologies: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"],
    },
    {
      category: "web",
      icon: <Smartphone className="w-6 h-6 text-emerald-300" />,
      title: "Cross-Platform Mobile Apps",
      description:
        "Fluid native and cross-platform iOS & Android mobile applications crafted with high responsiveness and seamless offline capability.",
      features: [
        "Native performance & 60fps animations",
        "Real-time push notifications",
        "Biometric security & offline sync",
        "App Store & Play Store readiness",
      ],
      technologies: ["React Native", "Flutter", "iOS", "Android", "Expo"],
    },
    {
      category: "web",
      icon: <Palette className="w-6 h-6 text-teal-300" />,
      title: "UI/UX & Product Design Systems",
      description:
        "Conversion-focused user interface design, design tokens, interactive prototyping, and comprehensive brand identity systems.",
      features: [
        "Wireframing & user flow mapping",
        "Component library & design tokens",
        "Accessibility (WCAG 2.1) compliance",
        "Conversion rate optimization (CRO)",
      ],
      technologies: ["Figma", "Design Tokens", "Framer", "Prototyping"],
    },
    {
      category: "cloud",
      icon: <Database className="w-6 h-6 text-cyan-300" />,
      title: "High-Throughput APIs & Microservices",
      description:
        "Fault-tolerant microservice architectures, GraphQL & REST APIs designed to process millions of transactions with low latency.",
      features: [
        "GraphQL & RESTful API Architecture",
        "Distributed caching (Redis)",
        "Stripe & payment gateway integration",
        "Real-time WebSockets & event streaming",
      ],
      technologies: ["PostgreSQL", "Redis", "Kafka", "GraphQL", "Prisma"],
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Specialized Engineering For <span className="text-gradient">Modern Ambitions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl">
            From technical architecture to turnkey deployment, we combine world-class design with high-octane engineering.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-300 pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-emerald-500/40 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-200 flex items-center justify-between">
                  <span>{service.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="mt-5 space-y-2 border-t border-slate-800/80 pt-5">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {service.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
