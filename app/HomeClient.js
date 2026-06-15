"use client";

import SolutionSuite from "../components/SolutionSuits";
import HowItWorks from "@/components/HowItsWorks";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import Header from "@/components/Header";
import BannerHero from "@/components/BannerHeroSection/BannerHero";
import Footer from "@/components/Footer";

export default function HomeClient() {
  return (
    <>
      <Header />
      <main>
        <BannerHero />
        <Features />
        <HowItWorks />
        <SolutionSuite />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
