"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{ width: "100vw", maxWidth: "100%", left: 0, right: 0 }}
        className={`fixed top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-gray-100"
            : "bg-[#040f1e]"
        }`}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px" }}>
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-9 h-9 rounded-full bg-[#0a1e3d] border-2 border-[#00aeef]/40 flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="none" width="14" height="14">
                  <rect x="2" y="13" width="2.5" height="5" rx="0.5" fill="#00aeef" />
                  <rect x="6" y="10" width="2.5" height="8" rx="0.5" fill="#00aeef" />
                  <rect x="10" y="7" width="2.5" height="11" rx="0.5" fill="white" opacity="0.9" />
                  <rect x="14" y="4" width="2.5" height="14" rx="0.5" fill="#00aeef" />
                </svg>
              </div>
              <div style={{ lineHeight: 1 }}>
                <div className={`text-[13px] font-black tracking-widest uppercase transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"}`}>
                  ALT<span className="text-[#00aeef]">MEDEE</span>
                </div>
                <div className={`text-[8px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${scrolled ? "text-gray-400" : "text-white/40"}`}>
                  CRM Solutions
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-[13.5px] font-semibold rounded-lg transition-all duration-200 ${
                    scrolled
                      ? "text-gray-600 hover:text-[#00aeef] hover:bg-[#00aeef]/10"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-2.5">
              <a href="#login" className={`text-[13px] font-semibold px-3 py-2 transition-colors ${scrolled ? "text-gray-500 hover:text-[#00aeef]" : "text-white/70 hover:text-white"}`}>
                Log in
              </a>
              <a href="#signup" className="text-[13px] font-bold px-5 py-2.5 rounded-xl bg-[#00aeef] text-white hover:bg-[#0098d4] transition-colors">
                Sign Up
              </a>
              <a href="#demo" className={`text-[13px] font-bold px-4 py-2.5 rounded-xl border-2 transition-all ${scrolled ? "border-[#00aeef] text-[#00aeef] hover:bg-[#00aeef]/10" : "border-white/30 text-white hover:border-white/60"}`}>
                Book Demo
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg transition-colors ${scrolled ? "hover:bg-gray-100" : "hover:bg-white/10"}`}
              aria-label="Toggle menu"
            >
              <span className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${scrolled ? "bg-gray-800" : "bg-white"} ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-[2px] rounded-full transition-all duration-300 ${scrolled ? "bg-gray-800" : "bg-white"} ${menuOpen ? "w-5 opacity-0" : "w-3.5"}`} />
              <span className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${scrolled ? "bg-gray-800" : "bg-white"} ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          style={{ width: "100%" }}
          className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} ${scrolled ? "bg-white border-t border-gray-100" : "bg-[#061325]"}`}
        >
          <div className="px-4 pt-2 pb-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 text-[14px] font-semibold rounded-xl transition-colors ${scrolled ? "text-gray-700 hover:text-[#00aeef] hover:bg-[#00aeef]/8" : "text-white/80 hover:text-white hover:bg-white/10"}`}
              >
                {link.label}
              </a>
            ))}
            <div className={`my-2 h-px ${scrolled ? "bg-gray-100" : "bg-white/10"}`} />
            <div className="flex gap-2.5">
              <a href="#signup" onClick={() => setMenuOpen(false)} className="flex-1 text-center text-[13px] font-bold py-3 rounded-xl bg-[#00aeef] text-white">
                Sign Up Free
              </a>
              <a href="#demo" onClick={() => setMenuOpen(false)} className={`flex-1 text-center text-[13px] font-bold py-3 rounded-xl border-2 ${scrolled ? "border-[#00aeef] text-[#00aeef]" : "border-white/25 text-white"}`}>
                Book Demo
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div style={{ height: "64px" }} />
    </>
  );
}
