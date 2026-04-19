// "use client";
// import { motion } from "framer-motion";
// import { MdOutlineSupportAgent } from "react-icons/md";
// import { SiGoogleanalytics, SiCivicrm, SiWhatsapp } from "react-icons/si";
// import { GrAnnounce } from "react-icons/gr";
// import { CgWebsite } from "react-icons/cg";
// import { RiRobot3Fill } from "react-icons/ri";

// function Features() {
//   const data = [
//     {
//       icon: <MdOutlineSupportAgent size={50} />,
//       title: "Call Tracking",
//       desc:
//         "Track every incoming and outgoing call, record conversations, and never miss a potential lead.",
//     },
//     {
//       icon: <SiGoogleanalytics size={50} />,
//       title: "Advanced Analytics",
//       desc:
//         "Get detailed insights into your sales performance with real-time dashboards and reports.",
//     },
//     {
//       icon: <GrAnnounce size={50} />,
//       title: "Smart Marketing Automation",
//       desc:
//         "Automate campaigns, nurture leads, and convert prospects with personalized marketing flows.",
//     },
//     {
//       icon: <CgWebsite size={50} />,
//       title: "High-Converting Website",
//       desc:
//         "Create optimized landing pages that capture leads and drive higher conversion rates.",
//     },
//     {
//       icon: <RiRobot3Fill size={50} />,
//       title: "AI Chatbot",
//       desc:
//         "Engage visitors instantly, answer queries, and capture leads 24/7 with intelligent automation.",
//     },
//     {
//       icon: <SiWhatsapp size={50} />,
//       title: "WhatsApp Automation",
//       desc:
//         "Connect with customers on WhatsApp, send automated messages, and manage conversations at scale.",
//     },
//     {
//       icon: <SiCivicrm size={50} />,
//       title: "Lead Management",
//       desc:
//         "Organize, track, and manage leads efficiently through every stage of your sales pipeline.",
//     },
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h3 className="text-4xl font-bold text-gray-900">
//             From First Customer Inquiry to Confirmed Treatment
//           </h3>
//           <p className="text-gray-500 mt-4 text-lg">
//             Smarter patient engagement with AI-driven automation and higher
//             conversions.
//           </p>

//           <h4 className="mt-8 text-3xl font-semibold text-[#00aeef]">
//             Features
//           </h4>
//         </div>

//         {/* Scroll Container */}
//         <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
//           {data.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: 80 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ delay: i * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               className="min-w-[280px] max-w-[280px] bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-gray-100"
//             >
//               {/* Top line */}
//               <div className="h-1 w-16 bg-gradient-to-r from-[#00aeef] to-[#0b5ed7] rounded mb-4" />

//               <div>{item?.icon}</div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-3">
//                 {item.title}
//               </h4>

//               <p className="text-sm text-gray-600 leading-relaxed">
//                 {item.desc}
//               </p>

//               {/* Bottom hover line */}
//               <div className="mt-6 h-[2px] w-0 bg-[#00aeef] group-hover:w-full transition-all duration-300" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Features;



"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MdOutlineSupportAgent } from "react-icons/md";
import { SiGoogleanalytics, SiCivicrm, SiWhatsapp } from "react-icons/si";
import { GrAnnounce } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { RiRobot3Fill } from "react-icons/ri";

const features = [
  {
    icon: MdOutlineSupportAgent,
    title: "Call Tracking",
    desc: "Track every incoming and outgoing call, record conversations, and never miss a potential lead.",
    stat: "2x",
    statLabel: "More leads captured",
    color: "#00aeef",
    bg: "#e6f6fd",
  },
  {
    icon: SiGoogleanalytics,
    title: "Advanced Analytics",
    desc: "Get detailed insights into your sales performance with real-time dashboards and reports.",
    stat: "360°",
    statLabel: "Sales visibility",
    color: "#2563eb",
    bg: "#eff6ff",
  },
  {
    icon: GrAnnounce,
    title: "Smart Marketing Automation",
    desc: "Automate campaigns, nurture leads, and convert prospects with personalized marketing flows.",
    stat: "68%",
    statLabel: "Higher conversions",
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
  {
    icon: CgWebsite,
    title: "High-Converting Website",
    desc: "Create optimized landing pages that capture leads and drive higher conversion rates.",
    stat: "3x",
    statLabel: "More form fills",
    color: "#0891b2",
    bg: "#ecfeff",
  },
  {
    icon: RiRobot3Fill,
    title: "AI Chatbot",
    desc: "Engage visitors instantly, answer queries, and capture leads 24/7 with intelligent automation.",
    stat: "24/7",
    statLabel: "Always active",
    color: "#059669",
    bg: "#ecfdf5",
  },
  {
    icon: SiWhatsapp,
    title: "WhatsApp Automation",
    desc: "Connect with customers on WhatsApp, send automated messages, and manage conversations at scale.",
    stat: "98%",
    statLabel: "Open rate",
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    icon: SiCivicrm,
    title: "Lead Management",
    desc: "Organize, track, and manage leads efficiently through every stage of your sales pipeline.",
    stat: "100%",
    statLabel: "Pipeline coverage",
    color: "#dc2626",
    bg: "#fef2f2",
  },
];

function FeatureCard({
  item,
  index,
}: {
  item: (typeof features)[0];
  index: number;
}) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:border-transparent transition-all duration-300 cursor-default"
    >
      {/* Color top bar */}
      <div
        className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}88)` }}
      />

      {/* Icon + stat */}
      <div className="flex items-start justify-between">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ background: item.bg, color: item.color }}
        >
          <Icon size={26} />
        </div>
        <div className="text-right">
          <div className="text-2xl font-extrabold leading-none" style={{ color: item.color }}>
            {item.stat}
          </div>
          <div className="text-[10px] text-gray-400 font-medium mt-0.5 leading-tight max-w-[72px] text-right">
            {item.statLabel}
          </div>
        </div>
      </div>

      {/* Text */}
      <div>
        <h4 className="text-[15px] font-bold text-gray-900 mb-1.5">{item.title}</h4>
        <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
      </div>

      {/* Learn more */}
      <div
        className="mt-auto flex items-center gap-1.5 text-[12px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ color: item.color }}
      >
        Learn more
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeTab, setActiveTab] = useState<"all" | "automation" | "analytics" | "engagement">("all");

  const tabs = [
    { key: "all", label: "All Features" },
    { key: "automation", label: "Automation" },
    { key: "analytics", label: "Analytics" },
    { key: "engagement", label: "Engagement" },
  ] as const;

  const tabMap: Record<string, number[]> = {
    all: features.map((_, i) => i),
    automation: [2, 4, 5],
    analytics: [0, 1, 6],
    engagement: [3, 4, 5],
  };

  const filtered = tabMap[activeTab].map((i) => ({ ...features[i], originalIndex: i }));

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [activeTab]);

  return (
    <section className="relative py-20 bg-[#f8fbff] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse,rgba(0,174,239,0.06)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(ellipse,rgba(37,99,235,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#00aeef] bg-[#e6f6fd] px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef] animate-pulse" />
            Platform Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
            From First Inquiry to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] to-[#2563eb]">
              Confirmed Deal
            </span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Smarter customer engagement with AI-driven automation, real-time analytics, and higher conversions — all in one platform.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-[13px] font-semibold rounded-xl transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-[#00aeef] text-white shadow-[0_4px_14px_rgba(0,174,239,0.3)]"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-[#00aeef]/40 hover:text-[#00aeef]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((item, i) => (
            <FeatureCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden relative">
          {/* Scroll arrows */}
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs text-gray-400 font-medium">Swipe to explore →</span>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${canScrollLeft ? "border-[#00aeef] text-[#00aeef] hover:bg-[#00aeef]/10" : "border-gray-200 text-gray-300"}`}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${canScrollRight ? "border-[#00aeef] text-[#00aeef] hover:bg-[#00aeef]/10" : "border-gray-200 text-gray-300"}`}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>

          {/* Scroll track */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={checkScroll}
          >
            <style>{`.hide-scroll::-webkit-scrollbar { display: none; }`}</style>
            {filtered.map((item, i) => (
              <div key={item.title} className="min-w-[260px] max-w-[260px]">
                <FeatureCard item={item} index={i} />
              </div>
            ))}
          </div>

          {/* Scroll indicator dots */}
          <div className="flex justify-center gap-1.5 mt-3">
            {filtered.map((_, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full bg-[#00aeef] transition-all duration-300"
                style={{ width: i === 0 ? 20 : 6, opacity: i === 0 ? 1 : 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">
            All features included in every plan. No hidden add-ons.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#signup"
              className="inline-flex items-center gap-2 bg-[#00aeef] text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-[#0098d4] transition-colors shadow-[0_4px_14px_rgba(0,174,239,0.3)]"
            >
              Start Free Trial
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-700 text-sm font-bold px-6 py-3 rounded-xl hover:border-[#00aeef] hover:text-[#00aeef] transition-all"
            >
              See All Features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
