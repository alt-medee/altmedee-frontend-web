"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
      </svg>
    ),
    label: "Step 01",
    title: "Capture leads",
    description: "Pull in leads from any channel — forms, ads, or live chat — the moment they show interest.",
    accent: "from-[#00aeef] to-[#0b8cc4]",
    border: "border-[#00aeef]",
    bg: "bg-[#e6f6fd]",
    text: "text-[#0b6ea3]",
    glow: "shadow-[0_0_0_4px_rgba(0,174,239,0.12)]",
    delay: "delay-[0ms]",
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    label: "Step 02",
    title: "Automate follow-ups",
    description: "Send the right message at the right time — no manual effort, no missed opportunities.",
    accent: "from-[#0ea5e9] to-[#0284c7]",
    border: "border-[#0ea5e9]",
    bg: "bg-[#e0f2fe]",
    text: "text-[#0369a1]",
    glow: "shadow-[0_0_0_4px_rgba(14,165,233,0.12)]",
    delay: "delay-[100ms]",
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    label: "Step 03",
    title: "Track in CRM",
    description: "Every interaction logged, scored, and visible in one clean pipeline dashboard.",
    accent: "from-[#2563eb] to-[#1d4ed8]",
    border: "border-[#2563eb]",
    bg: "bg-[#eff6ff]",
    text: "text-[#1d4ed8]",
    glow: "shadow-[0_0_0_4px_rgba(37,99,235,0.12)]",
    delay: "delay-[200ms]",
  },
  {
    number: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
      </svg>
    ),
    label: "Step 04",
    title: "Convert into customers",
    description: "Close deals faster with timely nudges, full context, and zero guesswork.",
    accent: "from-[#0b5ed7] to-[#0000FF]",
    border: "border-[#0b5ed7]",
    bg: "bg-[#eef2ff]",
    text: "text-[#0b5ed7]",
    glow: "shadow-[0_0_0_4px_rgba(11,94,215,0.12)]",
    delay: "delay-[300ms]",
  },
];

function StepCard({
  step,
  index,
  isVisible,
}: {
  step: (typeof steps)[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`
        group relative bg-white rounded-2xl border border-gray-100 p-7
        transition-all duration-700 ease-out cursor-default
        hover:border-transparent hover:${step.glow}
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${step.delay}
      `}
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-6 right-6 h-[3px] rounded-b-full bg-gradient-to-r ${step.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Step number */}
      <div className="flex items-center justify-between mb-5">
        <span
          className={`text-xs font-semibold tracking-widest uppercase ${step.text} ${step.bg} px-3 py-1 rounded-full`}
        >
          {step.label}
        </span>
        <span className="text-4xl font-bold text-gray-100 select-none leading-none">
          {step.number}
        </span>
      </div>

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl ${step.bg} ${step.text} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        {step.icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
        {step.title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>

      {/* Connector arrow (not on last card) */}
      {index < steps.length - 1 && (
        <div className="hidden xl:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 items-center">
          <div className="w-4 h-4 rounded-full bg-white border-2 border-[#00aeef] shadow-sm" />
          <div className="w-4 h-[2px] bg-gradient-to-r from-[#00aeef] to-[#0b5ed7]" />
          <div
            className="w-0 h-0"
            style={{
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderLeft: "6px solid #0b5ed7",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default function HowItWorks() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#00aeef 1px, transparent 1px), linear-gradient(90deg, #00aeef 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse,rgba(0,174,239,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#00aeef] bg-[#e6f6fd] px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef] animate-pulse" />
            How it works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
            Simple.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] to-[#0b5ed7]">
              Smart.
            </span>{" "}
            Powerful.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Four steps from first touch to closed deal — fully automated.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} isVisible={isVisible} />
          ))}
        </div>

        {/* Bottom flow strip */}
        <div
          className={`mt-14 flex flex-wrap items-center justify-center gap-3 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={`flex items-center gap-2 ${step.bg} ${step.text} text-sm font-medium px-4 py-2 rounded-full`}
              >
                <span className="text-base leading-none">{step.number}</span>
                {step.title}
              </div>
              {i < steps.length - 1 && (
                <svg
                  className="w-4 h-4 text-[#00aeef] shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
