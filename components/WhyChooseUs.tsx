"use client";
import { useEffect, useRef, useState } from "react";
import { LuTimerReset } from "react-icons/lu";
import { PiUsersFourFill } from "react-icons/pi";
import { SiBuiltbybit } from "react-icons/si";
import { BsDatabaseLock } from "react-icons/bs";
import { LiaRobotSolid } from "react-icons/lia";
import { RiTimeLine } from "react-icons/ri";
import { RiUserCommunityLine } from "react-icons/ri";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";

const features = [
  {
    emoji: <LuTimerReset size={50}/>,
    title: "Faster Response Time",
    description:
      "Instant lead engagement with automated calls, WhatsApp, and notifications — never miss an opportunity.",
    accent: "from-[#00aeef] to-[#0284c7]",
    bg: "bg-[#e6f6fd]",
    text: "text-[#0b6ea3]",
    border: "hover:border-[#00aeef]/40",
    glow: "hover:shadow-[0_8px_32px_rgba(0,174,239,0.13)]",
    delay: "delay-[0ms]",
  },
  {
    emoji: <PiUsersFourFill size={50}/>,
    title: "Higher Conversions",
    description:
      "Convert more leads into customers with smart follow-ups and data-driven workflows.",
    accent: "from-[#0ea5e9] to-[#0369a1]",
    bg: "bg-[#e0f2fe]",
    text: "text-[#0369a1]",
    border: "hover:border-[#0ea5e9]/40",
    glow: "hover:shadow-[0_8px_32px_rgba(14,165,233,0.13)]",
    delay: "delay-[75ms]",
  },
  {
    emoji: <SiBuiltbybit size={50}/>,
    title: "Better Retention",
    description:
      "Build long-term relationships through consistent communication and personalized engagement.",
    accent: "from-[#2563eb] to-[#1d4ed8]",
    bg: "bg-[#eff6ff]",
    text: "text-[#1d4ed8]",
    border: "hover:border-[#2563eb]/40",
    glow: "hover:shadow-[0_8px_32px_rgba(37,99,235,0.13)]",
    delay: "delay-[150ms]",
  },
  {
    emoji: <BsDatabaseLock size={50}/>,
    title: "Secure & Scalable",
    description:
      "Enterprise-grade security with a scalable system designed to grow with your business.",
    accent: "from-[#0b5ed7] to-[#1e40af]",
    bg: "bg-[#eef2ff]",
    text: "text-[#0b5ed7]",
    border: "hover:border-[#0b5ed7]/40",
    glow: "hover:shadow-[0_8px_32px_rgba(11,94,215,0.13)]",
    delay: "delay-[225ms]",
  },
  {
    emoji: <LiaRobotSolid size={50}/>,
    title: "AI-Powered Automation",
    description:
      "Leverage intelligent automation to handle repetitive tasks, optimize workflows, and improve efficiency.",
    accent: "from-[#00aeef] to-[#2563eb]",
    bg: "bg-[#e6f6fd]",
    text: "text-[#0b6ea3]",
    border: "hover:border-[#00aeef]/40",
    glow: "hover:shadow-[0_8px_32px_rgba(0,174,239,0.13)]",
    delay: "delay-[300ms]",
  },
  {
    emoji: <RiTimeLine size={50}/>,
    title: "Real-Time Analytics",
    description:
      "Track performance, monitor campaigns, and gain actionable insights with a powerful dashboard.",
    accent: "from-[#0ea5e9] to-[#0b5ed7]",
    bg: "bg-[#e0f2fe]",
    text: "text-[#0369a1]",
    border: "hover:border-[#0ea5e9]/40",
    glow: "hover:shadow-[0_8px_32px_rgba(14,165,233,0.13)]",
    delay: "delay-[375ms]",
  },
  {
    emoji: <RiUserCommunityLine size={50}/>,
    title: "Omnichannel Communication",
    description:
      "Engage across calls, WhatsApp, SMS, and web — all managed from one unified platform.",
    accent: "from-[#2563eb] to-[#1d4ed8]",
    bg: "bg-[#eff6ff]",
    text: "text-[#1d4ed8]",
    border: "hover:border-[#2563eb]/40",
    glow: "hover:shadow-[0_8px_32px_rgba(37,99,235,0.13)]",
    delay: "delay-[450ms]",
  },
  {
    emoji: <MdOutlineWifiProtectedSetup size={50}/>,
    title: "Easy Integration & Setup",
    description:
      "Quick onboarding with seamless integration into your existing systems — no complex setup required.",
    accent: "from-[#0b5ed7] to-[#0000FF]",
    bg: "bg-[#eef2ff]",
    text: "text-[#0b5ed7]",
    border: "hover:border-[#0b5ed7]/40",
    glow: "hover:shadow-[0_8px_32px_rgba(11,94,215,0.13)]",
    delay: "delay-[525ms]",
  },
];

const stats = [
  { value: "3×", label: "Faster lead response" },
  { value: "68%", label: "Higher conversion rate" },
  { value: "99.9%", label: "Uptime guaranteed" },
  { value: "10k+", label: "Businesses trust us" },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f8fbff] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(0,174,239,0.07)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse,rgba(11,94,215,0.06)_0%,transparent_65%)]" />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.022]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#00aeef" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#00aeef] bg-white border border-[#00aeef]/20 px-4 py-1.5 rounded-full mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef] animate-pulse" />
            Why choose us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
            Everything you need to{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] to-[#0b5ed7]">
                close more deals
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#00aeef] to-[#0b5ed7] opacity-30" />
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Built for modern sales teams who want speed, intelligence, and results — without the complexity.
          </p>
        </div>

        {/* Stats bar */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl px-5 py-4 text-center shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] to-[#0b5ed7] leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className={`
                group relative bg-white rounded-2xl border border-gray-100 p-6
                transition-all duration-500 ease-out cursor-default
                ${f.border} ${f.glow}
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                ${f.delay}
              `}
            >
              {/* Gradient top bar on hover */}
              <div
                className={`absolute top-0 left-5 right-5 h-[2.5px] rounded-b-full bg-gradient-to-r ${f.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />

              {/* Emoji icon */}
              <div
                className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {f.emoji}
              </div>

              {/* Text */}
              <h3 className="text-[15px] font-semibold text-gray-900 mb-2 leading-snug">
                {f.title}
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                {f.description}
              </p>

              {/* Arrow on hover */}
              <div
                className={`mt-4 flex items-center gap-1 text-xs font-semibold ${f.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                Learn more
                <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className={`mt-16 bg-gradient-to-r from-[#00aeef] to-[#0b5ed7] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div>
            <h3 className="text-white text-xl font-bold mb-1">
              Ready to transform your sales pipeline?
            </h3>
            <p className="text-white/70 text-sm">
              Join 10,000+ businesses already growing with our CRM platform.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button className="bg-white text-[#0b5ed7] text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-sm">
              Start free trial
            </button>
            <button className="bg-white/10 border border-white/20 text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-white/20 transition-colors duration-200">
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs
