"use client";

import { motion } from "framer-motion";
import { MdOutlineSupportAgent } from "react-icons/md";
import { SiGoogleanalytics, SiCivicrm } from "react-icons/si";
import { GrAnnounce } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { RiRobot3Fill } from "react-icons/ri";

const data = [
  {
    icon: <MdOutlineSupportAgent size={50} />,
    title: "01. Voice Agent",
    subtitle: "Ensure every call is attended and tracked.",
    points: [
      "Inbound & Outbound Calls",
      "Appointment Bookings",
      "Patient Queries",
    ],
  },
  {
    icon: <SiGoogleanalytics size={50} />,
    title: "02. Advanced Analytics",
    subtitle: "Make data-driven decisions to increase conversions.",
    points: ["Lead Scoring", "Campaign Performance", "Patient Journey"],
  },
  {
    icon: <GrAnnounce size={50} />,
    title: "03. Smart Marketing",
    subtitle: "Generate high-quality leads at lower cost.",
    points: ["Google Ads", "Meta (Facebook/Instagram)", "WhatsApp Marketing"],
  },
  {
    icon: <CgWebsite size={50} />,
    title: "04. High-Converting Website",
    subtitle: "Convert visitors into customers effectively.",
    points: [
      "Mobile & Desktop Optimized",
      "Fast Loading (SEO Friendly)",
      "AI-Based Lead Capture",
    ],
  },
  {
    icon: <RiRobot3Fill size={50} />,
    title: "05. AI Chatbot",
    subtitle: "Never miss a customer inquiry again.",
    points: ["Website", "Mobile App", "WhatsApp"],
  },
  {
    icon: <SiCivicrm size={50} />,
    title: "06. CRM",
    subtitle: "Improve customers retention and operational efficiency.",
    points: [
      "Centralized Patient Data",
      "Lead Tracking & Follow-ups",
      "Secure & Scalable System",
    ],
  },
];

export default function SolutionSuite() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Complete Solution Suite
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-[#00aeef] to-[#0b5ed7]"
            >
              {/* Inner Card */}
              <div className="bg-white rounded-2xl p-6 h-full shadow-md group-hover:shadow-xl transition">
                <div>{item?.icon}</div>
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-3">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-gray-500 mb-4">{item.subtitle}</p>

                {/* Points */}
                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="text-[#00aeef] mt-[2px]">✔</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-[#00aeef] to-[#0b5ed7] transition -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
