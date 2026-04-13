"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Top6 from "../public/images/Top 6 features of AI CRM.png";

export default function CircularFeatures() {
  const features = [
    {
      title: "Centralized Data",
      desc: "Secure, organized patient records",
      position: "top-0 left-1/2 -translate-x-1/2",
      color: "bg-blue-500",
    },
    {
      title: "Easy Integration",
      desc: "Quick setup & user-friendly UI",
      position: "top-1/4 right-0 translate-x-1/2",
      color: "bg-cyan-500",
    },
    {
      title: "Custom Workflows",
      desc: "Adapt to your business needs",
      position: "bottom-1/4 right-0 translate-x-1/2",
      color: "bg-yellow-500",
    },
    {
      title: "Advanced Reports",
      desc: "Data-driven insights",
      position: "bottom-0 left-1/2 -translate-x-1/2",
      color: "bg-purple-500",
    },
    {
      title: "Smart Lead Mgmt",
      desc: "Capture & convert leads",
      position: "bottom-1/4 left-0 -translate-x-1/2",
      color: "bg-orange-500",
    },
    {
      title: "Automated Follow-ups",
      desc: "Never miss a patient",
      position: "top-1/4 left-0 -translate-x-1/2",
      color: "bg-green-500",
    },
  ];

  return (
    <section className="py-24 bg-background text-center">
      <h2 className="text-4xl font-bold mb-16">
        Key Features of Healthcare CRM
      </h2>

      <div className="relative w-[500px] h-[500px] mx-auto mb-20">
        {/* CENTER CIRCLE */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-48 h-48 rounded-full bg-primary text-white flex items-center justify-center text-center p-6 shadow-xl"
          >
            <p className="font-semibold">
              AI-Powered <br /> CRM Software
            </p>
          </motion.div>
        </div>

        {/* FEATURE NODES */}
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`absolute ${item.position}`}
          >
            <div className="flex flex-col items-center w-40">
              {/* CIRCLE */}
              <div
                className={`w-16 h-16 ${item.color} text-white rounded-full flex items-center justify-center shadow-lg`}
              >
                ⭐
              </div>

              {/* TEXT */}
              <h4 className="mt-3 font-semibold text-foreground text-sm">
                {item.title}
              </h4>
              <p className="text-xs text-muted text-center">{item.desc}</p>
            </div>
          </motion.div>
        ))}

        {/* CONNECTING LINES */}
        <svg className="absolute inset-0 w-full h-full">
          <line x1="250" y1="250" x2="250" y2="50" stroke="#ccc" />
          <line x1="250" y1="250" x2="450" y2="125" stroke="#ccc" />
          <line x1="250" y1="250" x2="450" y2="375" stroke="#ccc" />
          <line x1="250" y1="250" x2="250" y2="450" stroke="#ccc" />
          <line x1="250" y1="250" x2="50" y2="375" stroke="#ccc" />
          <line x1="250" y1="250" x2="50" y2="125" stroke="#ccc" />
        </svg>
      </div>

      <div className="flex justify-center align-items-center">
        <Image
          alt="top 6 key features"
          src={Top6}
          width="100%"
          height="600"
        />
      </div>
    </section>
  );
}
