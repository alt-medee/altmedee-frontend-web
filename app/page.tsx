"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SolutionSuite from "../components/SolutionSuits"
import CircularFeatures from "../components/CircularFeatures"
import HowItWorks from "@/components/HowItsWorks";
import Features from "@/components/Features"

// HEADER
function Header() {
  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <Image
          src="/images/logo.jpeg"
          alt="logo"
          width={120}
          height={120}
        />
        <nav className="hidden md:flex gap-8 font-medium">
          {['Features', 'Solutions', 'Pricing', 'Contact'].map(item => (
            <a key={item} href="#" className="hover:opacity-80 transition text-xl">
              {item}
            </a>
          ))}
        </nav>
        <button className="bg-white text-primary-dark px-5 py-2 rounded-lg hover:bg-gray-100 transition">
          Sign Up
        </button>
      </div>
    </header>
  );
}

// HERO SECTION (ZOHO STYLE)
function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20 bg-[url('/images/Banner2.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <h2 className="text-5xl font-bold text-gray-800 leading-tight">
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

// FEATURES SECTION

// TESTIMONIAL SECTION
function Testimonials() {
  return (
    <section className="bg-primary-dark text-white py-20 text-center">
      <h3 className="text-3xl font-bold">Loved by Businesses</h3>
      <p className="mt-6 max-w-2xl mx-auto">
        Easy to use CRM with powerful automation and analytics. Helped us grow 3x faster!
      </p>
    </section>
  );
}

{/* PRICING */ }
function Pricing() {
  return (
    <section id="pricing" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {["Standard", "Professional", "Enterprise"].map((plan, i) => (
          <div key={i} className="border p-8 rounded-lg">
            <h3 className="text-blue-600 font-semibold">{plan}</h3>
            <p className="text-3xl mt-4 font-bold">₹{i === 0 ? "1200" : i === 1 ? "2500" : "5000"}</p>
            <button className="mt-6 bg-primary-dark text-white px-6 py-2 rounded-md">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  )
}

// CONTACT FORM
function Contact() {
  return (
    <div className="mt-10 border p-6 rounded-lg bg-gray-50">
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

// FOOTER
function Footer() {
  return (
    <footer className="bg-primary text-gray-800 pt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6 py-12 text-white">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold mb-4">ALTMEDEE CRM SOLUTIONS</h2>
          <p className="text-sm mt-2">Terms Of Use</p>
          <p className="text-sm">Privacy Policy</p>
          <p className="text-sm">Agreement</p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          {['About Us', 'Pricing', 'Careers', 'Contact Us', 'Demo', 'FAQ', 'Free Trial'].map(item => (
            <p key={item} className="text-sm mb-2 cursor-pointer transition">{item}</p>
          ))}
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          {['Blog', 'News', 'Integrations', 'Webinars & Events', 'Industries'].map(item => (
            <p key={item} className="text-sm mb-2 cursor-pointer transition">{item}</p>
          ))}

          <h3 className="mt-6 font-semibold">Follow Us</h3>
          <div className="flex gap-3 mt-3">
            {['F', 'X', 'I', 'L'].map(icon => (
              <div key={icon} className="w-8 h-8 bg-primary-dark text-white rounded-full flex items-center justify-center text-lg font-bold cursor-pointer hover:scale-110 transition">
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-4">Our Office</h3>
          <p className="text-lg font-semibold">Head Office : USA</p>
          <p className="text-sm mt-2">707 Alexander Rd, Suite 302,</p>
          <p className="text-sm">Princeton, NJ 08540</p>

          <p className="text-lg mt-4 font-semibold">Reseller Partner India :</p>
          <p className="text-sm">Upadro Software Services Pvt. Ltd.</p>
          <p className="text-sm">Noida, U.P - 201309</p>

          <p className="text-white text-sm font-semibold">Call Us +91 92661 33544</p>

          <div className="flex mt-4">
            <input
              placeholder="Enter your email"
              className="flex-1 p-2 rounded-l-lg border outline-none"
            />
            <button className="bg-primary-dark text-white px-4 rounded-r-lg hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-lg pb-6 mt-4 font-bold">
        © 2026 ALTMEDEE CRM SOLUTIONS
      </div>
    </footer>
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
      <CircularFeatures />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <Footer />
    </div>
  )
}

