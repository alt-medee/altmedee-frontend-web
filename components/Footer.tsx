"use client";

import { useState } from "react";

const footerLinks = [
  {
    heading: "Quick Links",
    links: [
      { label: "About Us", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Demo", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Free Trial", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "News", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Webinars & Events", href: "#" },
      { label: "Industries", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    label: "Facebook",
    letter: "f",
    href: "#",
    bg: "hover:bg-[#1877f2]",
  },
  {
    label: "X (Twitter)",
    letter: "𝕏",
    href: "#",
    bg: "hover:bg-[#000000]",
  },
  {
    label: "Instagram",
    letter: "in",
    href: "#",
    bg: "hover:bg-gradient-to-br hover:from-[#f58529] hover:to-[#dd2a7b]",
  },
  {
    label: "LinkedIn",
    letter: "Li",
    href: "#",
    bg: "hover:bg-[#0a66c2]",
  },
];

const offices = [
  {
    tag: "Head Office · USA",
    lines: ["707 Alexander Rd, Suite 302,", "Princeton, NJ 08540"],
  },
  {
    tag: "Reseller Partner · India",
    lines: [
      "Upadro Software Services Pvt. Ltd.",
      "Noida, U.P – 201309",
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative w-full bg-[#040f1e] text-white overflow-hidden">
      {/* Top gradient line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#00aeef] via-[#2563eb] to-[#0b5ed7]" />

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[radial-gradient(ellipse,rgba(0,174,239,0.07)_0%,transparent_70%)] pointer-events-none" />

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00aeef] to-[#0b5ed7] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                </div>
                <span className="text-lg font-bold tracking-tight">
                  ALTMEDEE{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] to-[#2563eb]">
                    CRM
                  </span>
                </span>
              </div>
              <p className="text-[13px] text-gray-400 leading-relaxed max-w-xs">
                Intelligent CRM solutions that help modern sales teams capture leads, automate follow-ups, and close deals faster.
              </p>
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {["Terms Of Use", "Privacy Policy", "Agreement"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[12px] text-gray-500 hover:text-[#00aeef] transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Social icons */}
            <div>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-gray-500 mb-3">
                Follow Us
              </p>
              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className={`w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-[11px] font-bold text-gray-400 hover:text-white hover:border-transparent transition-all duration-200 ${s.bg}`}
                  >
                    {s.letter}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((col) => (
            <div key={col.heading} className="lg:col-span-2">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-[#00aeef] mb-4">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#00aeef] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Office + Subscribe */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Office */}
            <div>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-[#00aeef] mb-4">
                Our Office
              </p>
              <div className="flex flex-col gap-4">
                {offices.map((office) => (
                  <div key={office.tag} className="flex gap-3">
                    <div className="mt-0.5 w-1 shrink-0 rounded-full bg-gradient-to-b from-[#00aeef] to-[#0b5ed7]" />
                    <div>
                      <p className="text-[11px] font-semibold text-[#00aeef] mb-0.5">
                        {office.tag}
                      </p>
                      {office.lines.map((line) => (
                        <p key={line} className="text-[13px] text-gray-400 leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call */}
              <a
                href="tel:+919266133544"
                className="mt-4 inline-flex items-center gap-2 text-[13px] text-gray-400 hover:text-[#00aeef] transition-colors duration-200 group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#00aeef]/10 flex items-center justify-center group-hover:bg-[#00aeef]/20 transition-colors">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#00aeef]">
                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                  </svg>
                </div>
                +91 92661 33544
              </a>
            </div>

            {/* Subscribe */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
              <p className="text-[13px] font-semibold text-white mb-1">
                Stay in the loop
              </p>
              <p className="text-[12px] text-gray-500 mb-3">
                Get product updates, tips & industry news.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-[13px] text-[#00aeef]">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                  </svg>
                  You&apos;re subscribed — thanks!
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                    placeholder="your@email.com"
                    className="flex-1 min-w-0 bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2 text-[13px] text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00aeef]/50 transition-colors"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="shrink-0 bg-gradient-to-r from-[#00aeef] to-[#0b5ed7] text-white text-[12px] font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
                  >
                    Subscribe
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/[0.07] pt-6">
          {/* Disclaimer */}
          <p className="text-[11px] text-gray-600 leading-relaxed mb-5 max-w-4xl">
            <span className="text-gray-500 font-medium">Disclaimer: </span>
            The information and services provided on this platform are for general business and operational purposes only. While we strive to ensure accuracy and reliability, we do not guarantee the completeness or performance of results. Use of this platform is at your own discretion.
          </p>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[12px] text-gray-600">
              © {new Date().getFullYear()} Altmedee CRM Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-[12px] text-gray-600">
              <span>Crafted with</span>
              <span className="text-[#00aeef]">♥</span>
              <span>for sales teams worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
