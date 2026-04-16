"use client";
import { motion } from "framer-motion";
import { MdOutlineSupportAgent } from "react-icons/md";
import { SiGoogleanalytics, SiCivicrm, SiWhatsapp } from "react-icons/si";
import { GrAnnounce } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { RiRobot3Fill } from "react-icons/ri";

function Features() {
  const data = [
    {
      icon: <MdOutlineSupportAgent size={50} />,
      title: "Call Tracking",
      desc:
        "Track every incoming and outgoing call, record conversations, and never miss a potential lead.",
    },
    {
      icon: <SiGoogleanalytics size={50} />,
      title: "Advanced Analytics",
      desc:
        "Get detailed insights into your sales performance with real-time dashboards and reports.",
    },
    {
      icon: <GrAnnounce size={50} />,
      title: "Smart Marketing Automation",
      desc:
        "Automate campaigns, nurture leads, and convert prospects with personalized marketing flows.",
    },
    {
      icon: <CgWebsite size={50} />,
      title: "High-Converting Website",
      desc:
        "Create optimized landing pages that capture leads and drive higher conversion rates.",
    },
    {
      icon: <RiRobot3Fill size={50} />,
      title: "AI Chatbot",
      desc:
        "Engage visitors instantly, answer queries, and capture leads 24/7 with intelligent automation.",
    },
    {
      icon: <SiWhatsapp size={50} />,
      title: "WhatsApp Automation",
      desc:
        "Connect with customers on WhatsApp, send automated messages, and manage conversations at scale.",
    },
    {
      icon: <SiCivicrm size={50} />,
      title: "Lead Management",
      desc:
        "Organize, track, and manage leads efficiently through every stage of your sales pipeline.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900">
            From First Customer Inquiry to Confirmed Treatment
          </h3>
          <p className="text-gray-500 mt-4 text-lg">
            Smarter patient engagement with AI-driven automation and higher
            conversions.
          </p>

          <h4 className="mt-8 text-3xl font-semibold text-[#00aeef]">
            Features
          </h4>
        </div>

        {/* Scroll Container */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="min-w-[280px] max-w-[280px] bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-gray-100"
            >
              {/* Top line */}
              <div className="h-1 w-16 bg-gradient-to-r from-[#00aeef] to-[#0b5ed7] rounded mb-4" />

              <div>{item?.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-3">
                {item.title}
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom hover line */}
              <div className="mt-6 h-[2px] w-0 bg-[#00aeef] group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
