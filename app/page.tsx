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

// CONTACT FORM
function Contact() {
  return (
    <div className="lg:mt-10 border p-6 rounded-lg bg-gray-50">
      <h3 className="font-semibold mb-4">Connect with Our Team</h3>
      <input placeholder="Enter your name" className="w-full mb-3 p-3 border rounded-md" />
      <input placeholder="Enter your business email" className="w-full mb-3 p-3 border rounded-md" />
      <div className="flex gap-2 mb-3">
        <span className="px-3 flex items-center border rounded-md">+91</span>
        <input placeholder="Phone Number" className="w-full p-3 border rounded-md" />
      </div>
      <textarea placeholder="Message" className="w-full mb-3 p-3 border rounded-md" />
      <p className="text-xs text-gray-500 mb-3">By submitting this form, you agree to our Privacy Policy</p>
      <button className="w-full bg-primary-dark text-white py-3 rounded-md">Submit</button>
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

