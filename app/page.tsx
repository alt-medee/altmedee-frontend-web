"use client";
import { motion } from "framer-motion";
import SolutionSuite from "../components/SolutionSuits"
import CircularFeatures from "../components/CircularFeatures"
import HowItWorks from "@/components/HowItsWorks";
import Features from "@/components/Features"
import WhyChooseUs from "@/components/WhyChooseUs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// HERO SECTION (ZOHO STYLE)
function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-10 lg:py-20 bg-[url('/images/Banner2.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <h2 className="text-2xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Automate Your Customer Journey with an AI-Powered CRM
          </h2>
          <p className="mt-6 text-gray-600">
            Manage leads, automate follow-ups, and boost conversions with an all-in-one CRM platform.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-primary-dark text-white px-6 py-3 rounded-lg hover:scale-105 transition">
              Start Free Trial
            </button>
            <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Watch Demo
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
          <Contact />
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-slate-200">
      <div className="mb-5">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
          Contact Us
        </span>

        <h3 className="mt-3 text-2xl font-bold text-slate-900">
          Book a Free Demo
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Talk to our CRM experts and see how we can help your business grow.
        </p>
      </div>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="
            w-full
            rounded-xl
            border
            border-slate-300
            bg-white
            px-4
            py-3
            text-slate-900
            placeholder:text-slate-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
          "
        />

        <input
          type="email"
          placeholder="Business Email"
          className="
            w-full
            rounded-xl
            border
            border-slate-300
            bg-white
            px-4
            py-3
            text-slate-900
            placeholder:text-slate-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
          "
        />

        <div className="flex gap-2">
          <div
            className="
              flex
              items-center
              justify-center
              rounded-xl
              border
              border-slate-300
              bg-slate-50
              px-4
              text-slate-700
              font-medium
            "
          >
            +91
          </div>

          <input
            type="tel"
            placeholder="Phone Number"
            className="
              flex-1
              rounded-xl
              border
              border-slate-300
              bg-white
              px-4
              py-3
              text-slate-900
              placeholder:text-slate-400
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:border-blue-500
            "
          />
        </div>

        <button
          type="submit"
          className="
            w-full
            rounded-xl
            bg-blue-600
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-blue-700
            hover:shadow-lg
          "
        >
          Book Demo →
        </button>
      </form>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <SolutionSuite />
      {/* <CircularFeatures /> */}
      <WhyChooseUs />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <Footer />
    </div>
  )
}

