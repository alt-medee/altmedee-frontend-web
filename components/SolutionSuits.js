"use client";
import { motion } from "framer-motion";

export default function SolutionSuite() {
  const data = [
    {
      title: "📞 Voice Agent",
      subtitle: "Ensure every call is attended and tracked.",
      points: [
        "Inbound & Outbound Calls",
        "Appointment Bookings",
        "Patient Queries",
      ],
    },
    {
      title: "📊 Advanced Analytics",
      subtitle: "Make data-driven decisions to increase conversions.",
      points: [
        "Lead Scoring",
        "Campaign Performance",
        "Patient Journey",
      ],
    },
    {
      title: "📢 Smart Marketing",
      subtitle: "Generate high-quality leads at lower cost.",
      points: [
        "Google Ads",
        "Meta (Facebook/Instagram)",
        "WhatsApp Marketing",
      ],
    },
    {
      title: "🌐 High-Converting Website",
      subtitle: "Convert visitors into customers effectively.",
      points: [
        "Mobile & Desktop Optimized",
        "Fast Loading (SEO Friendly)",
        "AI-Based Lead Capture",
      ],
    },
    {
      title: "🤖 AI Chatbot",
      subtitle: "Never miss a customer inquiry again.",
      points: [
        "Website",
        "Mobile App",
        "WhatsApp",
      ],
    },
    {
      title: "🗂️ CRM",
      subtitle: "Improve customer retention and efficiency.",
      points: [
        "Centralized Patient Data",
        "Lead Tracking & Follow-ups",
        "Secure & Scalable System",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-foreground">
          Our Complete Solution Suite
        </h2>
        <p className="text-muted mt-3">
          Everything you need to automate, track and grow your business
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-xl p-6 text-left shadow hover:shadow-xl transition"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-primary-dark mb-2">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-muted text-sm mb-4">
                {item.subtitle}
              </p>

              {/* Points */}
              <ul className="space-y-2">
                {item.points.map((point, idx) => (
                  <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-primary">✔</span>
                    {point}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}